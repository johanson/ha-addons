(function(t){function e(e){for(var a,r,s=e[0],c=e[1],d=e[2],l=0,f=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,d||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},o={app:0},i=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"115d":function(t,e,n){},"488d":function(t,e,n){"use strict";var a=n("98b5"),o=n.n(a);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=n("b079"),i=n.n(o),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"app",class:t.layout.mode,attrs:{id:"app",tabindex:"0"}},[t.layout.showLoader?n("div",{attrs:{id:"loader"}}):t._e(),n("svg-sprite",{on:{loaded:function(e){t.layout.icons=e,t.layout.loading.svg=!0}}}),n("prompt",{attrs:{params:t.prompt},on:{callback:function(e){return t.promptCallback(e)}}}),n("undo",{ref:"undo",attrs:{db:t.db},on:{back:function(e){t.db=e,t.sync()}},nativeOn:{click:function(e){return t.$refs.undo.back()}}}),n("tabs",{ref:"tabs",attrs:{db:t.db,layout:t.layout},on:{"switch-tab":function(e){t.layout.activeTab=e},"switch-mode":function(e){return t.switchMode(e)},save:function(e){return t.saveTab(e)},remove:function(e){t.prompt=e}}}),n("remote",{ref:"remote",attrs:{db:t.db,layout:t.layout,options:t.options},on:{"switch-mode":function(e){return t.switchMode(e)},sort:function(e){return t.sync("sort")},remove:function(e){t.prompt=e}}}),n("editor",{attrs:{db:t.db,layout:t.layout,options:t.options},on:{"switch-mode":function(e){return t.switchMode(e)},edit:function(e){return t.editKnob(e)},loading:function(e){t.layout.showLoader=e}}})],1)},s=[],c=(n("99af"),n("a623"),n("c740"),n("4160"),n("b0c0"),n("b64b"),n("d3b7"),n("159b"),n("ade3")),d=n("5530"),u=(n("fb6a"),n("25f0"),{methods:{genUID:function(){return Math.random().toString(36).slice(-8)},getHostname:function(){var t="";return t},cssVar:function(t){return getComputedStyle(document.documentElement).getPropertyValue(t)},scaffoldDB:function(){return{default:{name:"Default",knobs:[{id:"wn0gbd99",name:"Samsung Volume Up",mqtt:'{"Protocol":"SAMSUNG","Bits":32,"Data":"0xE0E0E01F"}',icon:"up-arrow",topic_send:"irur/cmnd/IRsend",isPlaceholder:!1},{id:"wt9u3yzj",name:"Samsung Volume Down",mqtt:'{"Protocol":"SAMSUNG","Bits":32,"Data":"0xE0E0D02F"}',icon:"down-arrow",topic_send:"irur/cmnd/IRsend",isPlaceholder:!1}]}}}}}),l={name:"App",mixins:[u],data:function(){return{layout:{mode:"normal",showLoader:!0,loading:{db:!0,settings:!0,svg:!0},showUndo:!1,activeTab:"default",activeEdit:{},icons:[]},options:{api:{prefix:"".concat(this.getHostname(),"api/"),receive:"ir/receive/",send:"ir/send/",save:"db/save/",load:"db/load/",settings:"settings/"},settings:{topic_send:""}},db:{default:{name:"Default",knobs:[]}},prompt:{message:null,data:null,callback:null}}},watch:{layout:{handler:function(t){"normal"===t.mode?window.addEventListener("keydown",this.keyDown):window.removeEventListener("keydown",this.keyDown),t.showLoader&&Object.keys(t.loading).every((function(e){return t.loading[e]}))&&(this.layout.showLoader=!1)},deep:!0}},mounted:function(){this.loadTheme(),this.loadDatabase(),this.loadSettings()},methods:{loadTheme:function(){var t=function(t){var e=window.top.document.documentElement;return getComputedStyle(e).getPropertyValue("--".concat(t))},e=function(e){for(var n="",a=0;a<e.length;a+=1)if(""!==t(e[a])){n=t(e[a]);break}return n},n=document.documentElement;n.style.setProperty("--accent",e(["primary-text-color","text-color"])),n.style.setProperty("--background",e(["primary-background-color","background-color"])),n.style.setProperty("--background-shade",e(["card-background-color"]))},loadDatabase:function(){var t=this,e=this.options.api.prefix;fetch("".concat(e).concat(this.options.api.load)).then((function(t){if(!t.ok)throw new Error("API HTTP status ".concat(t.status));return t.json()})).then((function(e){"error"===e.status?(t.db=t.scaffoldDB(),t.sync()):(t.db=e,t.layout.loading.db=!1)})).catch((function(e){t.$toast.error(String(e))}))},loadSettings:function(){var t=this,e=this.options.api.prefix;fetch("".concat(e).concat(this.options.api.settings)).then((function(t){if(!t.ok)throw new Error("API HTTP status ".concat(t.status));return t.json()})).then((function(e){t.options.settings=e,t.layout.loading.settings=!1})).catch((function(e){t.$toast.error(String(e))}))},switchMode:function(t){var e=t.mode,n=t.id;this.layout.mode=e,this.layout.activeEdit={id:n},"normal"===this.layout.mode&&(this.loader=!1)},sync:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"normal",n=this.options.api.prefix;fetch("".concat(n).concat(this.options.api.save),{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify(this.db)}).then((function(n){if(t.layout.mode=e,!n.ok)throw new Error("API HTTP status ".concat(n.status))})).catch((function(e){t.$toast.error(String(e))}))},editKnob:function(t){var e=this.db[this.layout.activeTab].knobs;if("edit"===this.layout.mode){var n=e.findIndex((function(e){return e.id===t.id}));this.db[this.layout.activeTab].knobs[n]=t}else"add"===this.layout.mode&&e.push(t);this.sync()},removeKnob:function(t){var e=this.db[this.layout.activeTab].knobs,n=e.findIndex((function(e){return e.id===t}));this.$refs.undo.record(),this.$delete(e,n),this.sync()},saveTab:function(t){var e=t.data,n=e.id,a=e.name;!{}.hasOwnProperty.call(this.db,n)?this.db=Object(d["a"])(Object(d["a"])({},this.db),Object(c["a"])({},n,{name:a,knobs:[]})):this.db[n].name=a,this.sync(t.mode)},removeTab:function(t){t===this.layout.activeTab&&(this.layout.activeTab="default"),this.$refs.undo.record(),this.$delete(this.db,t),this.sync()},promptCallback:function(t){var e=this,n=this.prompt,a=n.callback,o=n.data;t&&a&&this[a](o),Object.keys(this.prompt).forEach((function(t){e.prompt[t]=void 0}))},keyDown:function(t){"N"===t.key&&this.$refs.remote.addKnob(),"T"===t.key&&this.$refs.tabs.addTab()}}},f=l,m=(n("488d"),n("2877")),v=Object(m["a"])(f,r,s,!1,null,null,null),h=v.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"svg-sprite"}})},b=[],k={data:function(){return{glyphs:[]}},mounted:function(){this.load()},methods:{load:function(){var t=this;fetch("icons/sprite.svg").then((function(t){if(!t.ok)throw new Error("API HTTP status ".concat(t.status));return t.text()})).then((function(e){t.parse(e)})).catch((function(e){t.$toast.error(String(e))}))},parse:function(t){var e=document.getElementById("svg-sprite"),n=(new DOMParser).parseFromString(t,"text/xml"),a=n.getElementsByTagName("symbol");if(!a.length)throw new Error("Cannot generate svg icons");e.innerHTML=t;for(var o=0;o<a.length;o+=1)this.glyphs.push(a[o].getAttribute("id"));this.$emit("loaded",this.glyphs)}}},y=k,g=(n("fc63"),Object(m["a"])(y,p,b,!1,null,null,null)),_=g.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isActive?n("a",{attrs:{href:"#"},on:{keydown:function(e){return(e.type.indexOf("key")||90===e.keyCode)&&e.ctrlKey?t.undo(e):null}}},[n("span",[t._v("Undo")]),n("svg",[n("use",{attrs:{"xlink:href":"#fast-forward"}})])]):t._e()},D=[],S=5e3,x={props:{db:{type:Object,required:!0}},data:function(){return{dbHistory:{},isActive:!1}},watch:{isActive:function(){this.isActive?window.addEventListener("keydown",this.keyDown):window.removeEventListener("keydown",this.keyDown)}},methods:{back:function(){this.$emit("back",this.dbHistory),this.isActive=!1},record:function(){this.dbHistory=JSON.parse(JSON.stringify(this.db)),this.timer(),this.isActive=!0},timer:function(){var t=this;setTimeout((function(){t.isActive=!1}),S)},keyDown:function(t){"Enter"===t.key&&(this.back(),this.isActive=!1)}}},$=x,T=(n("cda5"),Object(m["a"])($,w,D,!1,null,"3db3af0a",null)),P=T.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"editor-overlay",on:{click:function(e){return t.closeModal(e)}}},[n("form",{class:{disabled:t.knobSaveData.isPlaceholder},attrs:{action:"#",id:"form1",autocomplete:"off"},on:{submit:function(e){return t.validate()},keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;t.closeModal(e,t.force=!0)}}},[n("div",{staticClass:"close",on:{click:function(e){return t.closeModal(e)}}},[n("svg",[n("use",{attrs:{"xlink:href":"#close"}})])]),t._m(0),n("input",{directives:[{name:"model",rawName:"v-model",value:t.knobSaveData.name,expression:"knobSaveData.name"}],ref:"editorNameField",attrs:{type:"text",id:"knob_name",required:""},domProps:{value:t.knobSaveData.name},on:{input:function(e){e.target.composing||t.$set(t.knobSaveData,"name",e.target.value)}}}),t._m(1),n("div",{attrs:{id:"mqtt"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.knobSaveData.mqtt,expression:"knobSaveData.mqtt"}],attrs:{type:"text",id:"knob_mqtt",required:""},domProps:{value:t.knobSaveData.mqtt},on:{input:function(e){e.target.composing||t.$set(t.knobSaveData,"mqtt",e.target.value)}}}),n("button",{attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.recordIR()}}},[t._v("Listen")])]),t._m(2),n("div",{attrs:{id:"knob_mqtt_topic"}},t._l(t.options.settings.topic_send,(function(e,a){return n("p",{key:a},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.knobSaveData.topic_send,expression:"knobSaveData.topic_send"}],ref:"mqtt-checkbox-"+a,refInFor:!0,attrs:{type:"radio",required:"",id:"mqtt-label-"+a},domProps:{value:e,checked:t._q(t.knobSaveData.topic_send,e)},on:{change:function(n){return t.$set(t.knobSaveData,"topic_send",e)}}}),n("label",{attrs:{for:"mqtt-label-"+a}},[t._v(t._s(e))])])})),0),n("label",{attrs:{for:"knob_id"}},[t._v("Unique id "),n("span",{staticClass:"mono"},[t._v(" $ curl "+t._s(t.options.settings.hostname)+t._s(t.options.api.send)+t._s(t.knobSaveData.id)+"/ ")])]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.knobSaveData.id,expression:"knobSaveData.id"}],attrs:{type:"text",id:"knob_id",required:"",readonly:""},domProps:{value:t.knobSaveData.id},on:{input:function(e){e.target.composing||t.$set(t.knobSaveData,"id",e.target.value)}}}),t._m(3),n("input",{directives:[{name:"model",rawName:"v-model",value:t.knobSaveData.icon,expression:"knobSaveData.icon"}],ref:"icon",attrs:{type:"text",id:"knob_icon"},domProps:{value:t.knobSaveData.icon},on:{input:function(e){e.target.composing||t.$set(t.knobSaveData,"icon",e.target.value)}}}),n("div",{attrs:{id:"glyphs"}},t._l(t.filteredIcons,(function(e){return n("div",{key:e,staticClass:"glyph",attrs:{title:e},domProps:{innerHTML:t._s(t.renderIcon(e))},on:{click:function(n){t.knobSaveData.icon=e,t.$refs.icon.focus()}}})})),0),t._m(4),n("input",{directives:[{name:"model",rawName:"v-model",value:t.knobSaveData.color,expression:"knobSaveData.color"}],attrs:{type:"text",id:"knob_color"},domProps:{value:t.knobSaveData.color},on:{input:function(e){e.target.composing||t.$set(t.knobSaveData,"color",e.target.value)}}}),n("slider-picker",{model:{value:t.colors,callback:function(e){t.colors=e},expression:"colors"}}),n("div",{staticClass:"placeholder"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.knobSaveData.isPlaceholder,expression:"knobSaveData.isPlaceholder"}],ref:"knobType",attrs:{type:"checkbox",id:"knob-type"},domProps:{checked:Array.isArray(t.knobSaveData.isPlaceholder)?t._i(t.knobSaveData.isPlaceholder,null)>-1:t.knobSaveData.isPlaceholder},on:{change:function(e){var n=t.knobSaveData.isPlaceholder,a=e.target,o=!!a.checked;if(Array.isArray(n)){var i=null,r=t._i(n,i);a.checked?r<0&&t.$set(t.knobSaveData,"isPlaceholder",n.concat([i])):r>-1&&t.$set(t.knobSaveData,"isPlaceholder",n.slice(0,r).concat(n.slice(r+1)))}else t.$set(t.knobSaveData,"isPlaceholder",o)}}}),n("label",{attrs:{for:"knob-type"}},[t._v("Use as an empty placeholder")])]),n("button",{attrs:{form:"form1"},on:{click:function(e){return e.preventDefault(),t.validate()}}},[t._v("Save")])],1)])},O=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{attrs:{for:"knob_name"}},[t._v("Name "),n("span",[t._v("Name for the knob")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{attrs:{for:"knob_mqtt"}},[t._v("MQTT response "),n("span",[t._v("Tap listen and press a remote button towards IR receiver")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{attrs:{for:"knob_mqtt_topic"}},[t._v("MQTT topic "),n("span",[t._v("Add new topics from HA configuration")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{attrs:{for:"knob_icon"}},[t._v("Icon "),n("span",[t._v("If no icon is selected, the name is being used")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{attrs:{for:"knob_color"}},[t._v("Color "),n("span",[t._v("Color for the icon. Leave blank for default that depends on the parent theme.")])])}],j=(n("4de4"),n("c975"),n("45fc"),n("3835")),q=n("c345"),A={mixins:[u],components:{"slider-picker":q["Slider"]},props:{db:{type:Object,required:!0},layout:{type:Object,required:!0},options:{type:Object,required:!0}},watch:{layout:{deep:!0,handler:function(t,e){var n=this;if("add"===e.mode){if(this.colors={hex:this.cssVar("--accent")},this.knobSaveData={isPlaceholder:!1,id:this.genUID(),name:"",mqtt:"",icon:"",color:this.cssVar("--accent"),topic_send:this.options.settings.topic_send},1===this.options.settings.topic_send.length){var a=Object(j["a"])(this.options.settings.topic_send,1);this.knobSaveData.topic_send=a[0]}this.$nextTick().then((function(){n.$refs.editorNameField.focus()}))}if("edit"===e.mode){var o=this.db[this.layout.activeTab].knobs,i=this.layout.activeEdit.id,r=o.findIndex((function(t){return t.id===i}));this.knobSaveData=JSON.parse(JSON.stringify(o[r])),void 0===this.knobSaveData.color&&(this.knobSaveData.color=this.cssVar("--accent")),this.colors={hex:this.knobSaveData.color},this.$nextTick().then((function(){n.$refs.editorNameField.focus()}))}}},colors:function(t){this.knobSaveData.color=t.hex}},data:function(){return{knobSaveData:{isPlaceholder:"",id:"",name:"",mqtt:"",topic_send:"",icon:"",color:this.cssVar("--accent")},colors:{hex:this.cssVar("--accent")},icons:[]}},computed:{filteredIcons:function(){var t=this;return this.layout.icons.filter((function(e){return e.toLowerCase().indexOf(t.knobSaveData.icon.toLowerCase())>-1}))}},methods:{save:function(){this.$emit("edit",this.knobSaveData),this.$emit("switch-mode",{mode:"normal"})},recordIR:function(){var t=this,e=this;this.$emit("loading",!0);var n=5,a=new AbortController,o=setTimeout((function(){a.abort()}),1e3*n);function i(){e.$emit("loading",!1),clearTimeout(o)}fetch("".concat(this.options.api.prefix).concat(this.options.api.receive),{signal:a.signal}).then((function(t){if(!t.ok)throw new Error("API HTTP status ".concat(t.status));return t.json()})).then((function(n){i(),e.knobSaveData.mqtt=n.mqtt,t.$toast.info("Ir code received")})).catch((function(e){i(),"AbortError"===e.name?t.$toast.info("Stopped listening after ".concat(n," seconds of no incoming messages")):t.$toast.error(String(e))}))},validate:function(){var t=this.knobSaveData,e=[t.name,t.mqtt,t.id,t.topic_send];!t.isPlaceholder&&e.some((function(t){return""===t||void 0===t}))?this.$toast.error("Name, id, mqtt and topic required"):(this.save(),this.mode="normal")},renderIcon:function(t){return'<svg class="icon" style="fill: '.concat(this.knobSaveData.color,'">\n                <use xlink:href="#').concat(t,'"></use>\n              </svg>')},closeModal:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=["editor-overlay","close"],a=n.some((function(e){return t.target.classList.contains(e)}));(a||e)&&this.$emit("switch-mode",{mode:"normal"})}}},C=A,I=(n("58d3"),Object(m["a"])(C,E,O,!1,null,null,null)),N=I.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tabs"}},[n("vue-context",{ref:"menu",scopedSlots:t._u([{key:"default",fn:function(e){return[n("li",[n("a",{attrs:{"data-name":"add"},on:{click:function(n){return n.preventDefault(),t.menu(n,e.data)}}},[t._v("Add")])]),n("li",[n("a",{attrs:{"data-name":"rename"},on:{click:function(n){return n.preventDefault(),t.menu(n,e.data)}}},[t._v("Rename")])]),n("li",["default"!==e.data?n("a",{attrs:{"data-name":"remove"},on:{click:function(n){return n.preventDefault(),t.menu(n,e.data)}}},[t._v("Remove")]):t._e()])]}}])}),t._l(t.db,(function(e,a){return n("div",{key:a,staticClass:"tab",class:{active:t.layout.activeTab===a},attrs:{"data-id":a},on:{contextmenu:function(e){return e.preventDefault(),t.$refs.menu.open(e,a)},click:function(e){return t.switchTab(a)}}},["tab-rename"===t.layout.mode&&t.layout.activeTab===a?n("input",{directives:[{name:"model",rawName:"v-model",value:t.tabSaveData.name,expression:"tabSaveData.name"}],ref:"tab-"+a,refInFor:!0,attrs:{type:"text"},domProps:{value:t.tabSaveData.name},on:{blur:function(e){return t.saveTab()},focus:function(n){t.tabSaveData.name=e.name},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:e.target.blur()},input:function(e){e.target.composing||t.$set(t.tabSaveData,"name",e.target.value)}}}):n("span",[t._v(" "+t._s(e.name)+" ")])])}))],2)},L=[],H=n("899b"),V={mixins:[u],components:{VueContext:H["a"]},props:{db:{type:Object,required:!0},layout:{type:Object,required:!0}},data:function(){return{tabSaveData:{id:"",name:""}}},methods:{switchTab:function(t){this.$emit("switch-tab",t)},saveTab:function(){this.$emit("save",{data:this.tabSaveData}),this.$emit("switch-mode",{mode:"normal"})},addTab:function(){var t=this.genUID();this.tabSaveData={name:"New",id:t},this.$emit("save",{data:this.tabSaveData,mode:"tab-rename"}),this.renameTab(t)},renameTab:function(t){var e=this;this.tabSaveData.id=t,this.$emit("switch-tab",t),this.$emit("switch-mode",{mode:"tab-rename"}),this.$nextTick().then((function(){e.$refs["tab-".concat(t)][0].focus()}))},removeTab:function(t){this.$emit("remove",{message:"Are you sure you want to delete tab named “".concat(this.db[t].name,"”?"),callback:"removeTab",data:t})},menu:function(t,e){switch(t.target.dataset.name){case"add":this.addTab();break;case"rename":this.renameTab(e);break;case"remove":this.removeTab(e);break}}}},B=V,U=(n("6f10"),Object(m["a"])(B,M,L,!1,null,null,null)),R=U.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("vue-context",{ref:"menu",scopedSlots:t._u([{key:"default",fn:function(e){return[n("li",[n("a",{attrs:{href:"#","data-id":"add"},on:{click:function(n){return n.preventDefault(),t.menu(n,e.data)}}},[t._v("Add")])]),n("li",[n("a",{attrs:{href:"#","data-id":"edit"},on:{click:function(n){return n.preventDefault(),t.menu(n,e.data)}}},[t._v("Edit")])]),n("li",[n("a",{attrs:{href:"#","data-id":"sort"},on:{click:function(n){return n.preventDefault(),t.menu(n,e.data)}}},[t._v("Sort")])]),n("li",[n("a",{attrs:{href:"#","data-id":"remove"},on:{click:function(n){return n.preventDefault(),t.menu(n,e.data)}}},[t._v("Remove")])])]}}])}),n("draggable",{attrs:{id:"remote",draggable:".item",disabled:"sort"!=this.layout.mode},on:{change:function(e){return t.$emit("sort")}},model:{value:t.filteredDB,callback:function(e){t.filteredDB=e},expression:"filteredDB"}},[n("div",{staticClass:"add",attrs:{slot:"footer",draggable:"false"},on:{click:function(e){return t.addKnob()}},slot:"footer"},[n("div",{staticClass:"glyph"},[n("svg",[n("use",{attrs:{"xlink:href":"#add"}})])])]),t._l(t.filteredDB,(function(e,a){return n("div",{key:e.id,staticClass:"item",attrs:{title:!e.isPlaceholder&&e.name,"data-placeholder":e.isPlaceholder||!1},on:{click:function(n){return t.sendIr(e.id,e.isPlaceholder)},contextmenu:function(n){return n.preventDefault(),t.$refs.menu.open(n,{id:e.id,index:a})}}},[e.icon?n("div",{staticClass:"glyph"},[n("svg",{style:"fill: "+e.color+";"},[n("use",{attrs:{"xlink:href":"#"+e.icon}})])]):n("div",{class:"no-icon len-"+e.name.length,style:"style: "+e.color+";"},[t._v(" "+t._s(e.name)+" ")])])}))],2)],1)},K=[],J=n("310e"),G=n.n(J),Q={components:{draggable:G.a,VueContext:H["a"]},props:{db:{type:Object,required:!0},layout:{type:Object,required:!0},options:{type:Object,required:!0}},watch:{db:function(){this.data=this.db}},data:function(){return{data:{default:{name:"Default",knobs:[]}}}},computed:{filteredDB:{get:function(){return this.data[this.layout.activeTab].knobs},set:function(t){this.data[this.layout.activeTab].knobs=t}}},methods:{menu:function(t,e){var n=t.target.dataset.id;if(this.$emit("switch-mode",{mode:n,id:e.id}),"remove"===n){var a=this.data[this.layout.activeTab].knobs[e.index],o=a.name;a.isPlaceholder&&(o="placeholder"),this.$emit("remove",{message:"Are you sure you want to delete knob named “".concat(o,"”?"),callback:"removeKnob",data:e.id})}},addKnob:function(){this.$emit("switch-mode",{mode:"add"})},sendIr:function(t,e){var n=this;if(!e||void 0===e){var a=this.options.api.prefix;fetch("".concat(a).concat(this.options.api.send).concat(t,"/")).then((function(t){if(!t.ok)throw new Error("API HTTP status ".concat(t.status))})).then((function(){n.loader=!1})).catch((function(t){n.$toast.error(String(t)),n.loader=!1}))}}}},z=Q,Y=(n("6b37"),Object(m["a"])(z,F,K,!1,null,null,null)),W=Y.exports,X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isActive?n("div",{staticClass:"overlay"},[n("div",{staticClass:"prompt"},[n("div",{staticClass:"close",on:{click:function(e){return t.cancel()}}},[n("svg",[n("use",{attrs:{"xlink:href":"#close"}})])]),n("div",{staticClass:"message"},[t._v(" "+t._s(t.data.message)+" ")]),n("div",{staticClass:"clearfix"},[n("button",{staticClass:"confirm",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.confirm()}}},[t._v(" Yes ")]),n("button",{staticClass:"cancel",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.cancel()}}},[t._v(" Cancel ")])])])]):t._e()},Z=[],tt={props:{params:{type:Object,required:!0}},computed:{data:function(){return this.params},isActive:function(){return this.data.callback&&null!==this.data.message}},watch:{isActive:function(){this.isActive?window.addEventListener("keydown",this.keyDown):window.removeEventListener("keydown",this.keyDown)}},methods:{confirm:function(){this.$emit("callback",!0)},cancel:function(){this.$emit("callback",!1)},keyDown:function(t){"Enter"===t.key&&this.confirm(),"Escape"===t.key&&this.cancel()}}},et=tt,nt=(n("792d"),Object(m["a"])(et,X,Z,!1,null,"462fbfa6",null)),at=nt.exports;n("a89b");a["default"].config.productionTip=!1,a["default"].component("SvgSprite",_),a["default"].component("Undo",P),a["default"].component("Editor",N),a["default"].component("Tabs",R),a["default"].component("Remote",W),a["default"].component("Prompt",at),a["default"].use(i.a,{position:"bottom"}),new a["default"]({render:function(t){return t(h)}}).$mount("#app")},"58d3":function(t,e,n){"use strict";var a=n("f08e"),o=n.n(a);o.a},"5bf7":function(t,e,n){},"6b37":function(t,e,n){"use strict";var a=n("5bf7"),o=n.n(a);o.a},"6f10":function(t,e,n){"use strict";var a=n("75aa"),o=n.n(a);o.a},"75aa":function(t,e,n){},"792d":function(t,e,n){"use strict";var a=n("cb2a"),o=n.n(a);o.a},"98b5":function(t,e,n){},a89b:function(t,e,n){},cb2a:function(t,e,n){},cda5:function(t,e,n){"use strict";var a=n("e315"),o=n.n(a);o.a},e315:function(t,e,n){},f08e:function(t,e,n){},fc63:function(t,e,n){"use strict";var a=n("115d"),o=n.n(a);o.a}});
//# sourceMappingURL=app.ee94c9f5.js.map