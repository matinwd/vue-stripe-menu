(function(e){function t(t){for(var o,a,i=t[0],l=t[1],c=t[2],d=0,m=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&m.push(s[a][0]),s[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);u&&u(t);while(m.length)m.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,i=1;i<n.length;i++){var l=n[i];0!==s[l]&&(o=!1)}o&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},s={app:0},r=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/vue-stripe-menu/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;r.push(["a1ec","chunk-vendors"]),n()})({1698:function(e,t,n){"use strict";var o=n("6bc0"),s=n.n(o);s.a},"1e53":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{class:["vsm-section","vsm-section_mob",{"vsm-open":e.active}]},[n("div",{staticClass:"vsm-mob",on:{click:e.onClickHamburger}},[e._t("hamburger",[e._m(0)])],2),n("div",{staticClass:"vsm-mob-content"},[n("transition",{attrs:{name:"vsm-mob-anim"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.active,expression:"active"}],staticClass:"vsm-mob-content__wrap"},[n("div",{staticClass:"vsm-mob-close",on:{click:e.onClickHamburger}}),e._t("default")],2)])],1)])},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vsm-mob__hamburger"},[n("div",{staticClass:"vsm-mob-line"}),n("div",{staticClass:"vsm-mob-line"}),n("div",{staticClass:"vsm-mob-line"})])}],r={name:"VsmMob",props:{value:{type:Boolean,default:!1}},data:function(){return{active:this.value}},watch:{value:function(e){this.active!==e&&(this.active=e)},active:function(e){e?this.registerEvent():this.unregisterEvent()}},mounted:function(){var e="ontouchstart"in window||navigator.maxTouchPoints;this._touchEvent=e?"touchend":"click"},beforeDestroy:function(){this.unregisterEvent()},methods:{onClickHamburger:function(){this.emitValue(!this.active)},registerEvent:function(){document.body.addEventListener(this._touchEvent,this.eventEndHandler)},unregisterEvent:function(){document.body.removeEventListener(this._touchEvent,this.eventEndHandler)},emitValue:function(e){this.active=e,this.$emit("input",e)},eventEndHandler:function(e){this.$el===e.target||this.$el.contains(e.target)||this.emitValue(!1)}}},a=r,i=n("2877"),l=Object(i["a"])(a,o,s,!1,null,null,null);t["a"]=l.exports},"274f":function(e,t,n){"use strict";var o=n("9e04"),s=n.n(o);s.a},"433d":function(e,t,n){"use strict";var o=n("484f"),s=n.n(o);s.a},"484f":function(e,t,n){},"4bc5":function(e,t,n){"use strict";var o=n("7329"),s=n.n(o);s.a},"56d7":function(e,t,n){"use strict";(function(e){var o=n("fb62"),s=n("1e53"),r=(n("8594"),{install:function(e){r.installed||(r.installed=!0,e.component("vsmMenu",o["a"]),e.component("vsmMob",s["a"]))}}),a=null;"undefined"!==typeof window?a=window.Vue:"undefined"!==typeof e&&(a=e.Vue),a&&a.use(r),t["a"]=r}).call(this,n("c8ba"))},"5cf5":function(e,t,n){"use strict";var o=n("d3d1"),s=n.n(o);s.a},"6bc0":function(e,t,n){},7329:function(e,t,n){},8594:function(e,t,n){},9224:function(e){e.exports=JSON.parse('{"a":"https://github.com/Alexeykhr/vue-stripe-menu#readme"}')},"9e04":function(e,t,n){},a1ec:function(e,t,n){"use strict";n.r(t);var o=n("2b0e"),s=(n("ca29"),n("56d7")),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("base-header"),n("main",[n("install-docs"),n("example-docs"),n("example-codepen-docs"),n("props-menu-docs"),n("menu-object-menu-docs"),n("slots-menu-docs"),n("events-menu-docs"),n("methods-menu-docs"),n("properties-menu-docs"),n("props-mob-docs"),n("slots-mob-docs"),n("classes-docs"),n("demo-docs")],1),n("base-footer")],1)},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("base-title",{attrs:{title:"[Menu] MenuObject"}}),n("base-table",{attrs:{columns:e.columns,rows:e.rows}})],1)},l=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",[n("thead",[n("tr",e._l(e.columns,(function(t,o){return n("th",{key:o},[e._v(" "+e._s(t.name)+" ")])})),0)]),n("tbody",e._l(e.rows,(function(t,o){return n("tr",{key:o,class:{required:t.required}},e._l(e.columns,(function(o,s){return n("td",{key:s,class:"column column_"+o.attr},[e._v(" "+e._s(t[o.attr])+" ")])})),0)})),0)])},u=[],d={props:{columns:{type:Array,required:!0},rows:{type:Array,required:!0}}},m=d,p=(n("bc25"),n("2877")),f=Object(p["a"])(m,c,u,!1,null,"35fdd939",null),v=f.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"section",attrs:{id:e.generatedId,href:"#"+e.generatedId}},[e._v(" # "),e._t("default",[e._v(e._s(e.title))])],2)},b=[],w=(n("ac1f"),n("5319"),n("498a"),{props:{title:{type:String,default:""},id:{type:String,default:""}},computed:{generatedId:function(){if(this.id)return this.id;var e=this.title;return this.$slots.default&&(e=this.$slots.default[0].text),e.trim().toLowerCase().replace(/[^a-z-]/gi,"-")}}}),g=w,y=Object(p["a"])(g,h,b,!1,null,null,null),_=y.exports,x={components:{BaseTable:v,BaseTitle:_},data:function(){return{columns:[{attr:"property",name:"Property"},{attr:"type",name:"type"},{attr:"description",name:"Description"}],rows:[{property:"title",type:"String",description:"Menu item name. Can also be redefined through the slot"},{property:"dropdown",type:"String",description:"Unique value indicates that this item has a dropdown menu"},{property:"element",type:"String",description:"HTML element in the header element, if not specified, it will be <button /> or <a />"},{property:"attributes",type:"Object",description:"All attributes to be assigned in the header element (v-bind)"},{property:"listeners",type:"Object",description:"All events to be assigned in the header element (v-on)"}]}}},E=x,C=Object(p["a"])(E,i,l,!1,null,null,null),D=C.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("base-title",{attrs:{title:"[Menu] Properties"}}),n("base-table",{attrs:{columns:e.columns,rows:e.rows}})],1)},$=[],O={components:{BaseTable:v,BaseTitle:_},data:function(){return{columns:[{attr:"name",name:"Name"},{attr:"description",name:"Description"},{attr:"return",name:"Return"}],rows:[{name:"hasDropdownEls",description:"List of HTML elements that have dropdown content",return:"Array<HTMLDivElement>"},{name:"$refs.links",description:"List of HTML elements obtained from menu props",return:"Array<HTMLDivElement>"}]}}},M=O,k=Object(p["a"])(M,T,$,!1,null,null,null),L=k.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("base-title",{attrs:{title:"Example Codepen"}}),e._m(0)],1)},H=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("a",{attrs:{href:"https://codepen.io/Alexeykhr/pen/YzPKxpX",rel:"noreferrer"}},[e._v(" Vue Stripe Menu - Real Demo ")])])}],S={components:{BaseTitle:_}},B=S,P=Object(p["a"])(B,j,H,!1,null,null,null),z=P.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("base-title",{attrs:{title:"[Menu] Methods"}}),n("base-table",{attrs:{columns:e.columns,rows:e.rows}})],1)},V=[],N={components:{BaseTable:v,BaseTitle:_},data:function(){return{columns:[{attr:"name",name:"Name"},{attr:"parameters",name:"Parameters"},{attr:"description",name:"Description"},{attr:"return",name:"Return"}],rows:[{name:"toggleDropdown",parameters:"HTMLElement",description:"Open dropdown menu, if open - close",return:""},{name:"openDropdown",parameters:"HTMLElement",description:"Open dropdown menu for selected item",return:""},{name:"closeDropdown",parameters:"",description:"Close any open dropdown menu",return:""}]}}},R=N,I=Object(p["a"])(R,A,V,!1,null,null,null),G=I.exports,q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("base-title",{attrs:{title:"[Menu] Events"}}),n("base-table",{attrs:{columns:e.columns,rows:e.rows}})],1)},F=[],W={components:{BaseTable:v,BaseTitle:_},data:function(){return{columns:[{attr:"name",name:"Name"},{attr:"description",name:"Description"},{attr:"return",name:"Return"}],rows:[{name:"open-dropdown",description:"Open the dropdown menu, return the active DOM Element",return:"Element"},{name:"close-dropdown",description:"Close the dropdown menu, return the active DOM Element",return:"Element"}]}}},Y=W,J=Object(p["a"])(Y,q,F,!1,null,null,null),X=J.exports,K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("base-title",{attrs:{title:"[Menu] Props"}}),n("base-table",{attrs:{columns:e.columns,rows:e.rows}})],1)},U=[],Q={components:{BaseTable:v,BaseTitle:_},data:function(){return{columns:[{attr:"property",name:"Property"},{attr:"parameters",name:"Parameters"},{attr:"description",name:"Description"},{attr:"type",name:"Type"},{attr:"default",name:"Default"}],rows:[{property:"menu",type:"Array",parameters:"MenuObject",description:"Description of the menu items, see below",required:!0},{property:"element",description:"HTML element for root element",type:"String",default:"header"},{property:"base-width",description:"The relationship between the width of the content and this value",type:"string, number",default:380},{property:"base-height",description:"The relationship between the height of the content and this value",type:"string, number",default:400},{property:"screen-offset",description:"Offset from the window screen",type:"string, number",default:10}]}}},Z=Q,ee=Object(p["a"])(Z,K,U,!1,null,null,null),te=ee.exports,ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("base-title",{attrs:{title:"[Menu] Slots"}}),n("base-table",{attrs:{columns:e.columns,rows:e.rows}})],1)},oe=[],se={components:{BaseTable:v,BaseTitle:_},data:function(){return{columns:[{attr:"name",name:"Name"},{attr:"parameters",name:"Parameters"},{attr:"description",name:"Description"}],rows:[{name:"default",parameters:"MenuItem, index",description:"The main content for the dropdown list"},{name:"before-nav",description:"Content to the left of the list"},{name:"after-nav",description:"Content to the right of the list"},{name:"title",parameters:"MenuItem, index",description:"Replace the output of menu[i].title with your own"}]}}},re=se,ae=Object(p["a"])(re,ne,oe,!1,null,null,null),ie=ae.exports,le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("base-title",{attrs:{title:"[Mob] Props"}}),n("base-table",{attrs:{columns:e.columns,rows:e.rows}})],1)},ce=[],ue={components:{BaseTable:v,BaseTitle:_},data:function(){return{columns:[{attr:"property",name:"Property"},{attr:"parameters",name:"Parameters"},{attr:"description",name:"Description"},{attr:"type",name:"Type"},{attr:"default",name:"Default"}],rows:[{property:"v-model",type:"Boolean",parameters:"",description:"The state of the open/close the menu",default:"false"}]}}},de=ue,me=Object(p["a"])(de,le,ce,!1,null,null,null),pe=me.exports,fe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("base-title",{attrs:{title:"[Mob] Slots"}}),n("base-table",{attrs:{columns:e.columns,rows:e.rows}})],1)},ve=[],he={components:{BaseTable:v,BaseTitle:_},data:function(){return{columns:[{attr:"name",name:"Name"},{attr:"parameters",name:"Parameters"},{attr:"description",name:"Description"}],rows:[{name:"default",description:"The main content for the dropdown list"},{name:"hamburger",description:"Replace button to open dropdown"}]}}},be=he,we=Object(p["a"])(be,fe,ve,!1,null,null,null),ge=we.exports,ye=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("base-title",{attrs:{title:"Classes"}}),n("base-table",{attrs:{columns:e.columns,rows:e.rows}})],1)},_e=[],xe={components:{BaseTable:v,BaseTitle:_},data:function(){return{columns:[{attr:"name",name:"Name"},{attr:"description",name:"Description"}],rows:[{name:"vsm-mob-hide",description:"Hide HTML elements in mobile design"},{name:"vsm-mob-full",description:"Add flex-grow: 1, see Demo example"}]}}},Ee=xe,Ce=Object(p["a"])(Ee,ye,_e,!1,null,null,null),De=Ce.exports,Te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("base-title",{attrs:{title:"Example"}}),n("pre",[n("code",{staticClass:"javascript"},[e._v(e._s(e.ExampleRaw))])])],1)},$e=[],Oe='<template>\n  <vsm-menu\n    :menu="menu"\n    :base-width="380"\n    :base-height="400"\n    :screen-offset="10"\n    element="header"\n    @open-dropdown="onOpenDropdown"\n    @close-dropdown="onCloseDropdown"\n  >\n    <template #default="data">\n      \x3c!--Dropdown Content--\x3e\n      <div>{{ data }}</div>\n    </template>\n    <template #before-nav>\n      \x3c!--Image or svg of website logo--\x3e\n      <li class="vsm-section">\n        <img\n          src="/path/to/file"\n          title="My Logo"\n        >\n      </li>\n    </template>\n    <template #title="data">\n      \x3c!--Display menu items through slots--\x3e\n      {{ data.item.title }}\n    </template>\n    <template #after-nav>\n      \x3c!--Mobile Burger, buttons, etc--\x3e\n      \x3c!--For the same styles - add the vsm-section--\x3e\n      <li class="vsm-section vsm-mob-hide">\n        <button>My Button</button>\n      </li>\n      \x3c!--Display when user media screen below from $vsm-media (scss)--\x3e\n      <vsm-mob>Mobile Content</vsm-mob>\n    </template>\n  </vsm-menu>\n</template>\n\n<script>\n/* eslint-disable */\n/*\n * This is an example of possible settings, you can also control\n * scss variables, and also you need to add a little style.\n * So copy and delete what you don’t need.\n *\n * After #after-nav and #before-nav it is recommended to use\n * to maintain the correct HTML structure:\n *   <li class="vsm-section">\n */\n\nexport default {\n  data() {\n    return {\n      menu: [\n        {\n          // display menu item (or override title slot)\n          title: \'News\',\n          // now this is not a link, but a menu item where there is a dropdown\n          dropdown: \'news\',\n          // don\'t want a button element?\n          element: \'span\',\n          // menu item can accept all attributes\n          attributes: {\n            // I want more classes! No problem\n            // string, array, object, not matter\n            class: [\'my-class1\', { \'my-class2\': true }],\n            // Custom attributes\n            \'data-big\': \'yes\'\n          },\n          // add some events?\n          listeners: {\n            // all possible native events\n            mouseover: (evt) => {\n              console.log(\'news hover\', evt)\n            }\n          },\n          // just extra properties in the object\n          new_section: false,\n        },\n        {\n          title: \'External Link\',\n          attributes: {\n            href: \'https://github.com/Alexeykhr/vue-stripe-menu\',\n            target: \'_blank\'\n          }\n        }\n        // ...\n      ]\n    }\n  },\n  methods: {\n    onOpenDropdown() {\n      console.log(\'onOpenDropdown\')\n    },\n    onCloseDropdown() {\n      console.log(\'onCloseDropdown\')\n    }\n  }\n}\n<\/script>\n',Me=n("1487"),ke=n.n(Me),Le={components:{BaseTitle:_},data:function(){return{ExampleRaw:Oe}},mounted:function(){ke.a.initHighlightingOnLoad()}},je=Le,He=Object(p["a"])(je,Te,$e,!1,null,null,null),Se=He.exports,Be=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("base-title",{attrs:{title:"Install"}}),n("p",[e._v("Install the library in your project:")]),n("pre",[n("code",{staticClass:"shell"},[e._v(e._s(e.shell))])]),n("p",[e._v("Then add components to Vue and compiled css styles")]),n("pre",[n("code",{staticClass:"javascript"},[e._v(e._s(e.vue))])]),n("p",[e._v("Or you can change them at compile time (scss). See all available variables:")]),e._m(0),n("pre",[n("code",{staticClass:"scss"},[e._v(e._s(e.scss))])])],1)},Pe=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("a",{attrs:{href:"https://github.com/Alexeykhr/vue-stripe-menu/blob/master/src/scss/_variables.scss",target:"_blank"}},[e._v(" List of variables ")])])}],ze={components:{BaseTitle:_},data:function(){return{shell:"$ npm i vue-stripe-menu\n// or\n$ yarn add vue-stripe-menu",vue:"// .js file\n\nimport Vue from 'Vue'\nimport VueStripeMenu from 'vue-stripe-menu'\n\nVue.use(VueStripeMenu)\n\n// Import build styles\nimport 'vue-stripe-menu/dist/vue-stripe-menu.css'",scss:'// .scss file\n\n// You can resize for "@media only screen":\n$vsm-media: 500px;\n\n// Colors:\n$vsm-color: #000;\n$vsm-color-hover: rgba(0, 0, 0, .9);\n\n// And also you can see the animation in slow motion:\n$vsm-transition: 1s;\n\n@import "~vue-stripe-menu/src/scss/index";'}},mounted:function(){ke.a.initHighlightingOnLoad()}},Ae=ze,Ve=Object(p["a"])(Ae,Be,Pe,!1,null,null,null),Ne=Ve.exports,Re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("vsm-menu",{ref:"header",attrs:{menu:e.menu,"screen-offset":15},on:{"open-dropdown":e.onOpenDropdown,"close-dropdown":e.onCloseDropdown},scopedSlots:e._u([{key:"before-nav",fn:function(){return[n("li",{staticClass:"vsm-section vsm-mob-full"},[n("stripe-logo")],1)]},proxy:!0},{key:"default",fn:function(e){return[n(e.item.content,{tag:"component",staticClass:"content"}),n(e.item.secondary,{tag:"component",staticClass:"content--secondary"})]}},{key:"after-nav",fn:function(){return[n("li",{staticClass:"vsm-section vsm-mob-hide rnd--open",on:{click:e.onClick}},[e._v(" Random ")]),n("vsm-mob",[n("mobile-content")],1)]},proxy:!0}])})},Ie=[],Ge=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("base-group",{attrs:{color:"secondary"}}),n("base-group",{attrs:{color:"secondary"}})],1)},qe=[],Fe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["base-group","base-group_size_"+e.size,"background-hover"]},[n("div",{class:["base-group__img",e.background]}),n("div",{staticClass:"base-group__content"},[n("base-text",{staticClass:"base-group__content__title",attrs:{color:e.color,min:70,max:100,height:"small"===e.size?13:16}}),n("base-text",{staticClass:"base-group__content__subtitle",attrs:{color:e.color,min:200,max:300,height:"small"===e.size?11:14}})],1)])},We=[],Ye=(n("c975"),function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}),Je=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["base-text",e.typeClasses]},[n("div",{class:["base-text__content",e.background],style:{width:e.width+"px",height:e.height+"px"}})])},Xe=[],Ke=(n("a9e3"),{props:{min:{type:Number,default:120},max:{type:Number,default:300},height:{type:Number,default:16},type:{type:String,default:"text",validator:function(e){return~["text","title"].indexOf(e)}},color:{type:String,default:"primary",validator:function(e){return~["primary","secondary"].indexOf(e)}}},computed:{width:function(){return Ye(this.min,this.max)},typeClasses:function(){return"text"===this.type?"mb-5":["mb-20","background-hover"]},background:function(){return"primary"===this.color?"background":"background--secondary"}}}),Ue=Ke,Qe=(n("5cf5"),Object(p["a"])(Ue,Je,Xe,!1,null,"dfab378c",null)),Ze=Qe.exports,et={components:{BaseText:Ze},props:{size:{type:String,default:"medium",validator:function(e){return~["medium","small"].indexOf(e)}},color:{type:String,default:"primary",validator:function(e){return~["primary","secondary"].indexOf(e)}}},computed:{background:function(){return"primary"===this.color?"background":"background--secondary"}},methods:{rnd:Ye}},tt=et,nt=(n("274f"),Object(p["a"])(tt,Fe,We,!1,null,"9cbb0622",null)),ot=nt.exports,st={components:{BaseGroup:ot}},rt=st,at=Object(p["a"])(rt,Ge,qe,!1,null,null,null),it=at.exports,lt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("base-text",{attrs:{max:200,type:"title"}}),e._l(2,(function(e){return n("base-group",{key:"g1-"+e})}))],2)},ct=[],ut={components:{BaseText:Ze,BaseGroup:ot}},dt=ut,mt=Object(p["a"])(dt,lt,ct,!1,null,null,null),pt=mt.exports,ft=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"divide"},[n("div",{staticClass:"primary"},[e._l(2,(function(t){return[n("base-text",{key:"g1-"+t,attrs:{max:200,type:"title"}}),e._l(3,(function(e){return n("base-group",{key:"g1-"+t+"-"+e})})),n("br",{key:"g1b-"+t})]}))],2),n("div",{staticClass:"secondary"},[e._l(3,(function(t){return[n("base-text",{key:"g3-"+t,attrs:{max:200,height:15,type:"title",color:"secondary"}}),e._l(2,(function(e){return n("base-group",{key:"g4-"+t+"-"+e,attrs:{size:"small",color:"secondary"}})}))]}))],2)])},vt=[],ht={components:{BaseText:Ze,BaseGroup:ot}},bt=ht,wt=(n("4bc5"),Object(p["a"])(bt,ft,vt,!1,null,"13f428a0",null)),gt=wt.exports,yt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("base-text",{attrs:{max:200,type:"title"}}),e._l(3,(function(e){return n("base-group",{key:"g1-"+e})})),n("br"),n("base-text",{attrs:{max:200,type:"title"}}),e._l(2,(function(e){return n("base-group",{key:"g2-"+e})}))],2)},_t=[],xt={components:{BaseText:Ze,BaseGroup:ot}},Et=xt,Ct=Object(p["a"])(Et,yt,_t,!1,null,null,null),Dt=Ct.exports,Tt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{width:"62",height:"25"}},[n("title",[e._v("Stripe")]),n("path",{attrs:{d:"M5 10.1c0-.6.6-.9 1.4-.9 1.2 0 2.8.4 4 1.1V6.5c-1.3-.5-2.7-.8-4-.8C3.2 5.7 1 7.4 1 10.3c0 4.4 6 3.6 6 5.6 0 .7-.6 1-1.5 1-1.3 0-3-.6-4.3-1.3v3.8c1.5.6 2.9.9 4.3.9 3.3 0 5.5-1.6 5.5-4.5.1-4.8-6-3.9-6-5.7zM29.9 20h4V6h-4v14zM16.3 2.7l-3.9.8v12.6c0 2.4 1.8 4.1 4.1 4.1 1.3 0 2.3-.2 2.8-.5v-3.2c-.5.2-3 .9-3-1.4V9.4h3V6h-3V2.7zm8.4 4.5L24.6 6H21v14h4v-9.5c1-1.2 2.7-1 3.2-.8V6c-.5-.2-2.5-.5-3.5 1.2zm5.2-2.3l4-.8V.8l-4 .8v3.3zM61.1 13c0-4.1-2-7.3-5.8-7.3s-6.1 3.2-6.1 7.3c0 4.8 2.7 7.2 6.6 7.2 1.9 0 3.3-.4 4.4-1.1V16c-1.1.6-2.3.9-3.9.9s-2.9-.6-3.1-2.5H61c.1-.2.1-1 .1-1.4zm-7.9-1.5c0-1.8 1.1-2.5 2.1-2.5s2 .7 2 2.5h-4.1zM42.7 5.7c-1.6 0-2.5.7-3.1 1.3l-.1-1h-3.6v18.5l4-.7v-4.5c.6.4 1.4 1 2.8 1 2.9 0 5.5-2.3 5.5-7.4-.1-4.6-2.7-7.2-5.5-7.2zm-1 11c-.9 0-1.5-.3-1.9-.8V10c.4-.5 1-.8 1.9-.8 1.5 0 2.5 1.6 2.5 3.7 0 2.2-1 3.8-2.5 3.8z"}})])},$t=[],Ot={},Mt=Object(p["a"])(Ot,Tt,$t,!1,null,null,null),kt=Mt.exports,Lt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mobile-content"},[n("base-text"),n("br"),n("base-group"),n("base-group"),n("base-group"),n("base-group")],1)},jt=[],Ht={components:{BaseGroup:ot,BaseText:Ze}},St=Ht,Bt=(n("1698"),Object(p["a"])(St,Lt,jt,!1,null,"52cddaaa",null)),Pt=Bt.exports,zt={components:{StripeLogo:kt,MobileContent:Pt},data:function(){return{menu:[{title:"Company",dropdown:"company",content:Dt,listeners:{mouseover:this.onMouseOver}},{title:"Developers",dropdown:"developers",content:pt,secondary:it},{title:"Products",dropdown:"products",content:gt,element:"span"},{title:"Source",attributes:{href:"https://github.com/Alexeykhr/vue-stripe-menu/blob/master/demo/",class:["some-class1",{"some-class2":!0}],target:"_blank"}}]}},methods:{onClick:function(){var e=this.$refs.header.hasDropdownEls,t=e[Ye(0,e.length-1)];this.$refs.header.openDropdown(t)},onMouseOver:function(e){console.log("mouse over",e)},onOpenDropdown:function(e){console.log("open dropdown",e)},onCloseDropdown:function(e){console.log("close dropdown",e)}}},At=zt,Vt=(n("433d"),Object(p["a"])(At,Re,Ie,!1,null,null,null)),Nt=Vt.exports,Rt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",[n("a",{attrs:{href:e.homepage,title:"Repository",target:"_blank"}},[n("github-svg")],1)])},It=[],Gt=n("9224"),qt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 24 24"}},[n("title",[e._v("GitHub icon")]),n("path",{attrs:{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"}})])},Ft=[],Wt={},Yt=Object(p["a"])(Wt,qt,Ft,!1,null,null,null),Jt=Yt.exports,Xt={components:{GithubSvg:Jt},data:function(){return{homepage:Gt["a"]}}},Kt=Xt,Ut=Object(p["a"])(Kt,Rt,It,!1,null,null,null),Qt=Ut.exports,Zt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("base-title",{attrs:{title:"Demo"}}),n("pre",[n("code",{staticClass:"javascript"},[e._v(e._s(e.DemoHeaderRaw))])])],1)},en=[],tn="<template>\n  <vsm-menu\n    ref=\"header\"\n    :menu=\"menu\"\n    :screen-offset=\"15\"\n    @open-dropdown=\"onOpenDropdown\"\n    @close-dropdown=\"onCloseDropdown\"\n  >\n    <template #before-nav>\n      <li class=\"vsm-section vsm-mob-full\">\n        <stripe-logo />\n      </li>\n    </template>\n    \x3c!--Add a title using the slot:--\x3e\n    \x3c!--<template #title=\"data\">{{ data.item.title }}</template>--\x3e\n    <template #default=\"data\">\n      <component\n        :is=\"data.item.content\"\n        class=\"content\"\n      />\n      <component\n        :is=\"data.item.secondary\"\n        class=\"content--secondary\"\n      />\n    </template>\n    <template #after-nav>\n      <li\n        class=\"vsm-section vsm-mob-hide rnd--open\"\n        @click=\"onClick\"\n      >\n        Random\n      </li>\n      \x3c!--Display mobile menu--\x3e\n      <vsm-mob>\n        <mobile-content />\n      </vsm-mob>\n    </template>\n  </vsm-menu>\n</template>\n\n<script>\nimport HorizontalSecondaryContent from '../components/content/HorizontalSecondary'\nimport HorizontalPrimaryContent from '../components/content/HorizontalPrimary'\nimport VerticalContent from '../components/content/Vertical'\nimport DefaultContent from '../components/content/Default'\nimport StripeLogo from '../components/svg/StripeLogo'\nimport MobileContent from './content/MobileContent'\nimport rnd from '../sciprts/rnd'\n\n/* eslint-disable no-console */\n\nexport default {\n  components: {\n    StripeLogo, MobileContent\n  },\n  data () {\n    return {\n      menu: [\n        { title: 'Company', dropdown: 'company', content: DefaultContent, listeners: { mouseover: this.onMouseOver } },\n        { title: 'Developers', dropdown: 'developers', content: HorizontalPrimaryContent, secondary: HorizontalSecondaryContent },\n        { title: 'Products', dropdown: 'products', content: VerticalContent, element: 'span' },\n        { title: 'Source', attributes: { href: 'https://github.com/Alexeykhr/vue-stripe-menu/blob/master/demo/', class: ['some-class1', { 'some-class2': true }], target: '_blank' } }\n      ]\n    }\n  },\n  methods: {\n    onClick () {\n      const links = this.$refs.header.hasDropdownEls\n      const link = links[rnd(0, links.length - 1)]\n\n      this.$refs.header.openDropdown(link)\n    },\n    onMouseOver (evt) {\n      console.log('mouse over', evt)\n    },\n    onOpenDropdown (el) {\n      console.log('open dropdown', el)\n    },\n    onCloseDropdown (el) {\n      console.log('close dropdown', el)\n    }\n  }\n}\n<\/script>\n\n<style lang=\"scss\">\n@import \"../scss/variables\";\n\n/*\n * Override some styles for library\n */\n\n.vsm-menu {\n  position: relative;\n  nav {\n    margin: 0 10px;\n  }\n  ul {\n    max-width: $laptop;\n    margin: 0 auto;\n  }\n}\n\n.vsm-root {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.vsm-section_menu {\n  flex: 1 1 auto;\n  justify-content: center;\n  > * {\n    padding: 0 25px;\n    font-weight: 500;\n    font-family: inherit;\n  }\n}\n\n.vsm-link {\n  color: #6772e5;\n  &.vsm-active,\n  &:hover {\n    color: #32325d;\n  }\n}\n\n/*\n * Now add some styles for own classes\n */\n\n.content {\n  padding: 30px;\n}\n\n.content--secondary {\n  padding: 30px;\n}\n\n.rnd--open {\n  cursor: pointer;\n  user-select: none;\n}\n</style>\n",nn={components:{BaseTitle:_},data:function(){return{DemoHeaderRaw:tn}},mounted:function(){ke.a.initHighlightingOnLoad()}},on=nn,sn=Object(p["a"])(on,Zt,en,!1,null,null,null),rn=sn.exports,an={components:{MenuObjectMenuDocs:D,PropertiesMenuDocs:L,ExampleCodepenDocs:z,MethodsMenuDocs:G,EventsMenuDocs:X,PropsMenuDocs:te,SlotsMenuDocs:ie,PropsMobDocs:pe,SlotsMobDocs:ge,ClassesDocs:De,ExampleDocs:Se,InstallDocs:Ne,BaseHeader:Nt,BaseFooter:Qt,DemoDocs:rn}},ln=an,cn=Object(p["a"])(ln,r,a,!1,null,null,null),un=cn.exports;o["a"].use(s["a"]),o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(un)}}).$mount("#app")},bc25:function(e,t,n){"use strict";var o=n("c1f3"),s=n.n(o);s.a},c1f3:function(e,t,n){},ca29:function(e,t,n){},d3d1:function(e,t,n){},fb62:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.element,{tag:"component",staticClass:"vsm-menu vsm-no-transition"},[n("nav",[n("ul",{ref:"root",staticClass:"vsm-root"},[e._t("before-nav"),n("li",{staticClass:"vsm-section vsm-section_menu vsm-mob-hide"},e._l(e.menu,(function(t,o){return n(t.element||(t.dropdown?"button":"a"),e._g(e._b({key:o,ref:"links",refInFor:!0,tag:"component",class:["vsm-link",t.attributes?t.attributes.class:null,{"vsm-has-dropdown":t.dropdown}],attrs:{"data-dropdown":t.dropdown,"aria-haspopup":t.dropdown&&"true","aria-expanded":t.dropdown&&"false"}},"component",t.attributes,!1),t.listeners),[e._t("title",[n("span",[e._v(e._s(t.title))])],{item:t,index:o})],2)})),1),e._t("after-nav")],2)]),n("div",{staticClass:"vsm-dropdown vsm-mob-hide"},[n("div",{ref:"background",staticClass:"vsm-background"},[n("div",{ref:"backgroundAlt",staticClass:"vsm-background-alt"})]),n("div",{ref:"arrow",staticClass:"vsm-arrow"}),n("div",{ref:"dropdownContainer",staticClass:"vsm-dropdown-container"},e._l(e.menuHasDropdown,(function(t,o){return n("div",{key:o,ref:"sections",refInFor:!0,staticClass:"vsm-dropdown-section",attrs:{"data-dropdown":t.dropdown,"aria-hidden":"false"}},[n("div",{staticClass:"vsm-dropdown-content"},[e._t("default",null,{item:t,index:o})],2)])})),0)])])},s=[],r=(n("99af"),n("4de4"),n("4160"),n("d81d"),n("b0c0"),n("a9e3"),n("159b"),{name:"VsmMenu",props:{menu:{type:Array,required:!0},element:{type:String,default:"header"},baseWidth:{type:[Number,String],default:380,validator:function(e){return+e>0}},baseHeight:{type:[Number,String],default:400,validator:function(e){return+e>0}},screenOffset:{type:[Number,String],default:10,validator:function(e){return+e>=0}}},computed:{menuHasDropdown:function(){return this.menu.filter((function(e){return e.dropdown}))},hasDropdownEls:function(){var e=this.$refs.links||[];return e.filter((function(e){return e.classList.contains("vsm-has-dropdown")}))},sectionEls:function(){var e=this.$refs.sections||[];return e.map((function(e){return{el:e,name:e.getAttribute("data-dropdown"),content:e.children[0]}}))}},mounted:function(){this._pointerEvent=window.PointerEvent?{end:"pointerup",enter:"pointerenter",leave:"pointerleave"}:{end:"touchend",enter:"mouseenter",leave:"mouseleave"},this.registerGlobalEvents(),this.registerDropdownElsEvents(),this.registerDropdownContainerEvents()},beforeDestroy:function(){this.unregisterGlobalEvents()},methods:{registerGlobalEvents:function(){window.addEventListener("resize",this.windowResizeHandler),document.addEventListener("touchmove",this.touchMoveHandler),document.addEventListener("touchstart",this.touchStartHandler),document.body.addEventListener(this._pointerEvent.end,this.eventEndHandler)},registerDropdownElsEvents:function(){var e=this;this.hasDropdownEls.forEach((function(t){t._vsm_menu||(t.addEventListener("focusin",(function(){e.stopCloseTimeout(),e.openDropdown(t)})),t.addEventListener(e._pointerEvent.enter,(function(n){"touch"!==n.pointerType&&(e.stopCloseTimeout(),e.openDropdown(t))})),t.addEventListener(e._pointerEvent.end,(function(n){n.preventDefault(),n.stopPropagation(),e.toggleDropdown(t)})),t.addEventListener(e._pointerEvent.leave,(function(t){"touch"!==t.pointerType&&e.startCloseTimeout()})),t._vsm_menu=!0)}))},registerDropdownContainerEvents:function(){var e=this;this.$refs.dropdownContainer._vsm_menu||(this.$refs.dropdownContainer.addEventListener(this._pointerEvent.end,(function(e){e.stopPropagation()})),this.$refs.dropdownContainer.addEventListener(this._pointerEvent.enter,(function(t){"touch"!==t.pointerType&&e.stopCloseTimeout()})),this.$refs.dropdownContainer.addEventListener(this._pointerEvent.leave,(function(t){"touch"!==t.pointerType&&e.startCloseTimeout()})),this.$refs.dropdownContainer._vsm_menu=!0)},unregisterGlobalEvents:function(){window.removeEventListener("resize",this.windowResizeHandler),document.removeEventListener("touchmove",this.touchMoveHandler),document.removeEventListener("touchstart",this.touchStartHandler),document.body.removeEventListener(this._pointerEvent.end,this.eventEndHandler)},toggleDropdown:function(e){this._activeDropdown===e?this.closeDropdown():this.openDropdown(e)},openDropdown:function(e){var t=this;if(this._activeDropdown!==e){this.$emit("open-dropdown",e),this.$el.classList.add("vsm-overlay-active"),this.$el.classList.add("vsm-dropdown-active"),this._activeDropdown=e,this._activeDropdown.setAttribute("aria-expanded","true"),this.hasDropdownEls.forEach((function(e){return e.classList.remove("vsm-active")})),e.classList.add("vsm-active");var n,o,s,r=e.getAttribute("data-dropdown"),a="vsm-left";this.sectionEls.forEach((function(e){e.el.classList.remove("vsm-active"),e.el.classList.remove("vsm-left"),e.el.classList.remove("vsm-right"),e.name===r?(e.el.setAttribute("aria-hidden","false"),e.el.classList.add("vsm-active"),a="vsm-right",n=e.content.offsetWidth,o=e.content.offsetHeight,s=e.content):(e.el.classList.add(a),e.el.setAttribute("aria-hidden","true"))}));var i=this.$el.offsetLeft,l=document.documentElement.offsetWidth;n>l-2*+this.screenOffset&&(n=l-2*+this.screenOffset);var c=n/+this.baseWidth,u=o/+this.baseHeight,d=e.getBoundingClientRect(),m=Math.round(Math.max(d.left+d.width/2-n/2-i,+this.screenOffset-i)),p=d.left+d.width/2+n/2;p+i>l&&(m=Math.round(m-(p-l)-+this.screenOffset)),clearTimeout(this._disableTransitionTimeout),this._enableTransitionTimeout=setTimeout((function(){t.$el.classList.remove("vsm-no-transition")}),50),this.$refs.dropdownContainer.style.transform="translate(".concat(m,"px, ").concat(e.offsetTop,"px)"),this.$refs.dropdownContainer.style.width="".concat(n,"px"),this.$refs.dropdownContainer.style.height="".concat(o,"px"),this.$refs.arrow.style.transform="translate(".concat(Math.round(d.left+d.width/2-i),"px, ").concat(e.offsetTop,"px) rotate(45deg)"),this.$refs.background.style.transform="translate(".concat(m,"px, ").concat(e.offsetTop,"px) scaleX(").concat(c,") scaleY(").concat(u,")"),this.$refs.backgroundAlt.style.transform="translateY(".concat(s.children[0].offsetHeight/u,"px)")}},closeDropdown:function(){var e=this;if(this._activeDropdown){this.$emit("close-dropdown",this._activeDropdown),this.hasDropdownEls.forEach((function(e){e.classList.remove("vsm-active")}));var t=this.$refs.dropdownContainer.querySelector('[aria-hidden="false"]');t&&t.setAttribute("aria-hidden","true"),clearTimeout(this._enableTransitionTimeout),this._disableTransitionTimeout=setTimeout((function(){e.$el.classList.add("vsm-no-transition")}),50),this.$el.classList.remove("vsm-overlay-active"),this.$el.classList.remove("vsm-dropdown-active"),this._activeDropdown.setAttribute("aria-expanded","false"),this._activeDropdown=void 0}},startCloseTimeout:function(){var e=this;this._closeDropdownTimeout=setTimeout((function(){e.closeDropdown()}),50)},stopCloseTimeout:function(){clearTimeout(this._closeDropdownTimeout)},touchMoveHandler:function(){this._isDragging=!0},touchStartHandler:function(){this._isDragging=!1},eventEndHandler:function(){this._isDragging||this.closeDropdown()},windowResizeHandler:function(){this.$refs.dropdownContainer.style=null,this.$refs.arrow.style=null,this.$refs.background.style=null,this.$refs.backgroundAlt.style=null,this.closeDropdown()}}}),a=r,i=n("2877"),l=Object(i["a"])(a,o,s,!1,null,null,null);t["a"]=l.exports}});
//# sourceMappingURL=app.15d787d3.js.map