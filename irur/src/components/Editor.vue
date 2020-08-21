<template>
  <div id="add-overlay" @click="closeModal($event)">

    <form action="#" id="form1" autocomplete="off" @submit="validate()"
          @keydown.esc="closeModal($event, true)">
      <div id="close" @click="closeModal($event)" />

      <label for="knob_name">Name <span>Name for the knob</span></label>
      <input type="text" id="knob_name" ref="editorNameField" required v-model="knobSaveData.name">

      <label for="knob_mqtt">MQTT response
        <span>Tap listen and press a remote button towards IR receiver</span>
      </label>
      <div id="mqtt">
        <input type="text" id="knob_mqtt" required
            v-model="knobSaveData.mqtt">
        <button type="button" @click.prevent="recordIR()">Listen</button>
      </div>

      <label for="knob_mqtt_topic">MQTT topic
        <span>Add new topics from HA configuration</span>
      </label>
      <div id="knob_mqtt_topic">
        <p v-for="(item, index) in options.settings.topic_send" :key="index">
          <input type="radio" required
                 :ref="(`mqtt-checkbox-${index}`)"
                  :id="(`mqtt-label-${index}`)"
               :value="item"
              v-model="knobSaveData.topic_send">
          <label :for="(`mqtt-label-${index}`)">{{ item }}</label>
        </p>
      </div>

      <label for="knob_id">Unique id
        <span class="mono">
          $ curl {{options.settings.hostname}}{{options.api.send}}/{{knobSaveData.id}}
        </span>
      </label>
      <input type="text" id="knob_id" required readonly v-model="knobSaveData.id">

      <label for="knob_icon">Icon
        <span>If no icon is selected, the name is being used</span>
      </label>
      <input type="text" id="knob_icon" ref="icon" v-model="knobSaveData.icon">
      <div id="glyphs">
        <div class="glyph" v-for="item in filteredIcons" v-html="renderIcon(item)" :key="item"
             :title="item" @click="knobSaveData.icon = item; $refs.icon.focus()" />
      </div>

      <label for="knob_color">Color
        <span>Color for the icon. Leave blank for default that depends on the parent theme.</span>
      </label>
      <input type="text" id="knob_color" v-model="knobSaveData.color">
      <slider-picker v-model="colors"></slider-picker>

      <button form="form1" @click.prevent="validate()">Save</button>

      <p class="keybinds">
        <strong>Enter</strong> to save, <strong>Esc</strong> to close
      </p>
    </form>

  </div>
</template>

<script>
import { Slider } from 'vue-color';
import Helpers from '../mixins/helpers';

export default {
  mixins: [Helpers],
  components: {
    'slider-picker': Slider,
  },
  props: {
    db: { type: Object, required: true },
    layout: { type: Object, required: true },
    options: { type: Object, required: true },
  },

  watch: {
    layout: {
      deep: true,
      handler(old, value) {
        if (value.mode === 'add') {
          this.colors = { hex: this.cssVar('--text') };
          this.knobSaveData = {
            name: '',
            mqtt: '',
            id: this.genUID(),
            icon: '',
            color: this.cssVar('--text'),
            topic_send: this.options.settings.topic_send,
          };
          // Check the radio button for the first MQTT topic if there's only one
          if (this.options.settings.topic_send.length === 1) {
            [this.knobSaveData.topic_send] = this.options.settings.topic_send;
          }
          setTimeout(() => this.$refs.editorNameField.focus(), 50);
        }

        if (value.mode === 'edit') {
          // get rid of references
          const dat = JSON.parse(JSON.stringify(this.db[this.layout.activeTab]
            .knobs[this.layout.activeEdit.index]));
          this.knobSaveData = dat;
          if (this.knobSaveData.color === undefined) {
            this.knobSaveData.color = this.cssVar('--text');
          }
          this.colors = { hex: this.knobSaveData.color };
          setTimeout(() => this.$refs.editorNameField.focus(), 50);
        }
      },
    },

    colors(value) {
      this.knobSaveData.color = value.hex;
    },
  },

  data() {
    return {
      knobSaveData: {
        id: '',
        name: '',
        mqtt: '',
        topic_send: '',
        icon: '',
        color: this.cssVar('--text'),
      },
      colors: { hex: this.cssVar('--text') },
      icons: [],
    };
  },

  computed: {
    filteredIcons() {
      return this.layout.icons.filter((x) => x.toLowerCase()
        .indexOf(this.knobSaveData.icon.toLowerCase()) > -1);
    },
  },

  methods: {
    save() {
      this.$emit('edit', this.knobSaveData);
      this.$emit('switch-mode', { mode: 'normal' });
    },

    recordIR() {
      const self = this;
      this.$emit('loading', true);
      const mqttTimeout = 5;
      const controller = new AbortController();

      const mqttListeningTimeout = setTimeout(() => {
        controller.abort();
      }, (mqttTimeout * 1000));

      function flip() {
        self.$emit('loading', false);
        clearTimeout(mqttListeningTimeout);
      }

      fetch(`${this.options.api.prefix}${this.options.api.receive}`,
        { signal: controller.signal })
        .then((resp) => {
          if (!resp.ok) {
            throw new Error(`API HTTP status ${resp.status}`);
          }
          return resp.json();
        }).then((json) => {
          flip();
          self.knobSaveData.mqtt = json.mqtt;
          this.$toast.info('Ir code received');
        }).catch((err) => {
          flip();
          if (err.name === 'AbortError') {
            this.$toast.info(`Stopped listening after ${mqttTimeout} seconds of no incoming messages`);
          } else {
            this.$toast.error(String(err));
          }
        });
    },

    validate() {
      const dat = this.knobSaveData;
      const required = [dat.name, dat.mqtt, dat.id, dat.topic_send];
      if (required.some((x) => x === '' || x === undefined)) {
        this.$toast.error('Name, id, mqtt and topic required');
      } else {
        this.save();
        this.mode = 'normal';
      }
    },

    renderIcon(icon) {
      return `<svg class="icon" style="fill: ${this.knobSaveData.color}">
                <use xlink:href="#${icon}"></use>
              </svg>`;
    },

    closeModal(e, force) {
      if (['add-overlay', 'close'].includes(e.target.id) || force) {
        this.$emit('switch-mode', { mode: 'normal' });
      }
    },
  },
};
</script>

<style lang="scss">
#add-overlay {
  position: absolute;
  background-color: var(--background-overlay);
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100%;
  display: none;
  z-index: 100;
  justify-content: center;
  align-items: flex-start;

  .add &,
  .edit & {
    display: flex;
  }

  button {
    display: inline-block;
    color: #f8f8f8;
    cursor: pointer;
    text-decoration: none;
    transition: background 0.3s ease 0s;
    background-color: #1976d2;
    padding: 1px 6px;
    line-height: 40px;
    height: 40px;
    overflow: hidden;
    border: none;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    text-shadow: 0px 0px 1px #000;
  }

  button:hover,
  button:active {
    background: #1565c0;
  }

  button:disabled,
  button.disabled {
    cursor: not-allowed;
    opacity: 0.75;
  }

  input[type="text"] {
    height: 40px;
    line-height: 38px;
    padding: 0 8px;
    width: 100%;
  }

  input,
  textarea {
    margin-bottom: 10px;
    border: solid #979797;
    border-width: 1px 0;
    background: #222;
    color: var(--text);
    background-color: var(--input-background);

    &:focus {
      border-color: #1976d2;
    }
  }

  button {
    min-width: 100px;
    font-weight: bold;
  }

  label {
    display: block;
    text-align: left;
    font-size: 15px;
    padding-left: 8px;
    padding-right: 3px;
    line-height: 1.4em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 500;
    color: var(--text);

    span {
      display: block;
      font-size: 12px;
      font-weight: normal;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  #form1 {
    margin: 25px;
    padding-top: 15px;
    padding-bottom: 10px;
    max-width: 700px;
    width: 90vw;
    text-align: right;
    position: relative;
    background: var(--background);

    .vc-slider {
      width: 100%;
      padding: 0 15px;
      margin-bottom: 20px;
    }
  }

  #close {
    font-size: 20px;
    line-height: 35px;
    height: 35px;
    width: 35px;
    text-indent: 2px;
    font-weight: bold;
    z-index: 101;
    position: absolute;
    top: 0px;
    right: 0px;
    color: #fff;
    background-color: #ff7c7c;
    text-align: center;
    cursor: pointer;

    &:before {
      content: '❌';
    }
  }

  .keybinds {
    text-align: left;
    margin: 0;
    padding: 10px 0px 0px 10px;
    display: none;

    @media screen and (min-width: 768px) {
      display: block;
    }
  }

  #glyphs {
    margin-bottom: 10px;
    border: solid #979797;
    border-width: 1px 0;
    padding: 5px;
    height: 225px;
    overflow: hidden;
    overflow-y: auto;
    text-align: center;
  }

  #mqtt {
    width: 100%;
    display: flex;
    align-items: self-start;

    input {
      border-right: none;
    }

  }

  #knob_mqtt_topic {
    border-top: 1px solid #979797;
    border-bottom: 1px solid #979797;
    border-left: none;
    border-right: none;
    line-height: 1em;
    padding-top: 10px;

    p {
      text-align: left;
      margin: 0;
      line-height: 1;
      padding-left: 10px;
    }

    label {
      display: inline-block;
      padding: 0 10px;
      line-height: 1em;
      font-weight: normal;
    }
  }

  .glyph {
    width: 48px;
    height: 48px;
    display: inline-block;
    margin: 12px;
    text-align: center;
    vertical-align: top;
    cursor: pointer;

    svg.icon {
      width: 100%;
      height: 100%;
      fill: var(--text);
    }
  }
}
</style>