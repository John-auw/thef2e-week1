(function(o){function t(t){for(var a,s,i=t[0],c=t[1],l=t[2],u=0,p=[];u<i.length;u++)s=i[u],e[s]&&p.push(e[s][0]),e[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(o[a]=c[a]);d&&d(t);while(p.length)p.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var o,t=0;t<r.length;t++){for(var n=r[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==e[c]&&(a=!1)}a&&(r.splice(t--,1),o=s(s.s=n[0]))}return o}var a={},e={app:0},r=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return o[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=o,s.c=a,s.d=function(o,t,n){s.o(o,t)||Object.defineProperty(o,t,{enumerable:!0,get:n})},s.r=function(o){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},s.t=function(o,t){if(1&t&&(o=s(o)),8&t)return o;if(4&t&&"object"===typeof o&&o&&o.__esModule)return o;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:o}),2&t&&"string"!=typeof o)for(var a in o)s.d(n,a,function(t){return o[t]}.bind(null,a));return n},s.n=function(o){var t=o&&o.__esModule?function(){return o["default"]}:function(){return o};return s.d(t,"a",t),t},s.o=function(o,t){return Object.prototype.hasOwnProperty.call(o,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=c;r.push([0,"chunk-vendors"]),n()})({0:function(o,t,n){o.exports=n("cd49")},"034f":function(o,t,n){"use strict";var a=n("1356"),e=n.n(a);e.a},"0e2d":function(o,t,n){"use strict";var a=n("157f"),e=n.n(a);e.a},1356:function(o,t,n){},"157f":function(o,t,n){},cd49:function(o,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d"),n("15f5");var a=n("2b0e"),e=n("bb71");n("da64");a["default"].use(e["a"],{iconfont:"md"});var r=function(){var o=this,t=o.$createElement,n=o._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],i={name:"app"},c=i,l=(n("034f"),n("2877")),d=Object(l["a"])(c,r,s,!1,null,null,null),u=d.exports,p=n("8c4f"),f=function(){var o=this,t=o.$createElement,n=o._self._c||t;return n("div",{staticClass:"pomodoro"},[n("div",{staticClass:"pomodoro__container"},[n("div",{staticClass:"pomodoro__side"},[o._m(0),n("div",{staticClass:"pomodoro__side-options"},[n("div",{staticClass:"pomodoro__side-option"},[n("v-icon",{attrs:{"x-large":""}},[o._v("\n            fas fa-clock\n          ")]),n("span",[o._v("\n            Timer\n          ")])],1),n("div",{staticClass:"pomodoro__side-option"},[n("v-icon",{attrs:{"x-large":"",color:"#DDDDDD"}},[o._v("\n            fas fa-chart-line\n          ")]),n("span",[o._v("\n              DashBoard\n            ")])],1),n("div",{staticClass:"pomodoro__side-option"},[n("v-icon",{attrs:{"x-large":"",color:"#DDDDDD"}},[o._v("\n            fas fa-list\n          ")]),n("span",[o._v("\n            TO-DO List\n          ")])],1),n("div",{staticClass:"pomodoro__side-option"},[n("v-icon",{attrs:{"x-large":"",color:"#DDDDDD"}},[o._v("\n            fas fa-cogs\n          ")]),n("span",[o._v("\n            Settings\n          ")])],1)]),n("div",{staticClass:"pomodoro__side-logout"},[n("div",{staticClass:"pomodoro__side-option"},[n("v-icon",{staticClass:"pomodoro__side-icon",attrs:{"x-large":""}},[o._v("\n            fas fa-sign-out-alt\n          ")]),n("span",[o._v("\n            Sign Out\n          ")])],1)])]),n("div",{staticClass:"pomodoro__main"},[o._m(1),n("div",{staticClass:"pomodoro__main-task"},[o._v("\n        Current Task\n      ")]),n("div",{staticClass:"pomodoro__main-controls"},[n("div",{staticClass:"pomodoro__main-icon"},[n("v-icon",{attrs:{"x-large":""}},[o._v("\n            fas fa-fast-forward\n          ")])],1),n("div",{staticClass:"pomodoro__main-icon"},[n("v-icon",{attrs:{"x-large":""}},[o._v("\n            fas fa-play\n          ")])],1),n("div",{staticClass:"pomodoro__main-icon"},[n("v-icon",{attrs:{"x-large":""}},[o._v("\n            fas fa-bell\n          ")])],1)])])])])},_=[function(){var o=this,t=o.$createElement,n=o._self._c||t;return n("div",{staticClass:"pomodoro__side-wrapper"},[n("div",{staticClass:"pomodoro__side-avatar"}),n("div",{staticClass:"pomodoro__side-detail"},[n("h1",[o._v("Sample User")]),n("span",[o._v("example@example.com")])])])},function(){var o=this,t=o.$createElement,n=o._self._c||t;return n("div",{staticClass:"pomodoro__main-timer"},[n("div",{staticClass:"pomodoro__main-inner-circle"},[n("div",{staticClass:"pomodoro__main-time-display"},[o._v("\n            25:00\n          ")])])])}],v=a["default"].extend({}),m=v,b=(n("0e2d"),n("6544")),g=n.n(b),h=n("132d"),C=Object(l["a"])(m,f,_,!1,null,null,null),D=C.exports;g()(C,{VIcon:h["a"]}),a["default"].use(p["a"]);var x=new p["a"]({mode:"history",base:"/",routes:[{path:"/",name:"pomodoro",component:D}]}),y=n("2f62");a["default"].use(y["a"]);var w=new y["a"].Store({state:{},mutations:{},actions:{}}),O=n("ce5b"),j=n.n(O);a["default"].use(j.a,{iconfont:"fa"}),a["default"].config.productionTip=!1,new a["default"]({router:x,store:w,render:function(o){return o(u)}}).$mount("#app")}});