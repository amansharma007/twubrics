(function(e){function t(t){for(var r,o,c=t[0],i=t[1],l=t[2],f=0,d=[];f<c.length;f++)o=c[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);u&&u(t);while(d.length)d.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],r=!0,c=1;c<s.length;c++){var i=s[c];0!==a[i]&&(r=!1)}r&&(n.splice(t--,1),e=o(o.s=s[0]))}return e}var r={},a={app:0},n=[];function o(t){if(r[t])return r[t].exports;var s=r[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=r,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(s,r,function(t){return e[t]}.bind(null,r));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=i;n.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";var r=s("64a9"),a=s.n(r);a.a},"3e5b":function(e,t,s){},4678:function(e,t,s){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=n(e);return s(t)}function n(e){if(!s.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=n,e.exports=a,a.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("f751"),s("097d");var r=s("2b0e"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("h1",{staticClass:"text-left"},[e._v("Twubrics App")]),s("h5",{staticClass:"text-left"},[e._v("Rubrics for your Twitter Followers!")]),s("MainList")],1)},n=[],o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"row form-group"},[s("div",{staticClass:"col-4"},[e._m(0),s("select",{directives:[{name:"model",rawName:"v-model",value:e.sortType,expression:"sortType"}],staticClass:"custom-select form-control custom-select float-left mb-5",on:{change:[function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.sortType=t.target.multiple?s:s[0]},e.sortList]}},[s("option",{attrs:{value:"0"}},[e._v("Select a sorting option")]),s("option",{attrs:{value:"1"}},[e._v("Twubric Score")]),s("option",{attrs:{value:"2"}},[e._v("Friends")]),s("option",{attrs:{value:"3"}},[e._v("Influence")]),s("option",{attrs:{value:"4"}},[e._v("Chirpiness")])])]),s("div",{staticClass:"col-5 ml-2"},[s("div",{staticClass:"row form-group text-left display-block"},[e._m(1),s("div",{staticClass:"row"},[s("datepicker",{staticClass:"form-control datepicker col-5 mr-1 ml-3",attrs:{placeholder:"Start Date"},model:{value:e.startDate,callback:function(t){e.startDate=t},expression:"startDate"}}),s("datepicker",{staticClass:"form-control datepicker col-5",attrs:{placeholder:"End Date"},model:{value:e.endDate,callback:function(t){e.endDate=t},expression:"endDate"}})],1)])]),s("div",{staticClass:"col-2 text-left"},[s("button",{staticClass:"btn btn-warning",staticStyle:{"margin-top":"5rem"},attrs:{slot:"removeButton",type:"button"},on:{click:e.resetEverything},slot:"removeButton"},[e._v("Reset")])])]),s("div",{staticClass:"row"},e._l(e.profiles,(function(t,r){return s("Card",[t.image?s("img",{attrs:{slot:"userImage",width:"100px",src:t.image},slot:"userImage"}):e._e(),s("span",{attrs:{slot:"userFullName"},slot:"userFullName"},[s("strong",[e._v(e._s(t.fullname))])]),s("sup",{attrs:{slot:"userName"},slot:"userName"},[e._v("@"+e._s(t.username))]),s("span",{attrs:{slot:"userScore"},slot:"userScore"},[e._v(e._s(t.twubric.total))]),s("span",{attrs:{slot:"userFriends"},slot:"userFriends"},[e._v(e._s(t.twubric.friends))]),s("span",{attrs:{slot:"userInfluence"},slot:"userInfluence"},[e._v(e._s(t.twubric.influence))]),s("span",{attrs:{slot:"userChirpiness"},slot:"userChirpiness"},[e._v(e._s(t.twubric.chirpiness))]),s("p",{attrs:{slot:"userDate"},slot:"userDate"},[e._v(e._s(e._f("moment")(t.join_date,"MMMM DD, YYYY")))]),s("button",{staticClass:"btn btn-danger",attrs:{slot:"removeButton",type:"button"},on:{click:function(t){return e.removeCurrent(r)}},slot:"removeButton"},[e._v("Remove")])])})),1)])},c=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("label",{staticClass:"float-left mt-5"},[s("strong",[e._v("Sort By:")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("label",{staticClass:"mt-5"},[s("strong",[e._v("Select Dates:")])])}],i=(s("8e6e"),s("ac6a"),s("456d"),s("55dd"),s("bd86")),l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"col-4 custom-card"},[s("div",{staticClass:"extra-padded-area"},[s("div",{staticClass:"row",attrs:{id:"userMain"}},[s("div",{staticClass:"col-8"},[e._t("userImage"),s("br"),e._t("userFullName"),s("br"),e._t("userName")],2),s("div",{staticClass:"col-4"},[e._v("\n        Score "),s("br"),e._t("userScore")],2)]),s("div",{staticClass:"row",attrs:{id:"userScores"}},[s("div",{staticClass:"col-4"},[e._v("\n        Friends "),s("br"),e._t("userFriends")],2),s("div",{staticClass:"col-4"},[e._v("\n        Influence "),s("br"),e._t("userInfluence")],2),s("div",{staticClass:"col-4"},[e._v("\n        Chirpiness "),s("br"),e._t("userChirpiness")],2)]),s("div",{staticClass:"row",attrs:{id:"userFooter"}},[s("div",{staticClass:"col-8"},[e._t("userDate")],2),s("div",{staticClass:"col-4"},[e._t("removeButton")],2)])])])},u=[],f={name:"Card"},d=f,b=s("2877"),j=Object(b["a"])(d,l,u,!1,null,"4fad03d6",null),p=j.exports,m=s("2f62"),v=s("bc3a"),h=s.n(v),_={profileAPIEndpoint:"https://gist.githubusercontent.com/pandemonia/21703a6a303e0487a73b2610c8db41ab/raw/9667fc19a0f89193e894da7aaadf6a4b7758b45e/twubric.json"},y=s("fa33"),g=s("c1df"),w=s.n(g);function k(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function C(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?k(s,!0).forEach((function(t){Object(i["a"])(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):k(s).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var D={name:"MainList",components:{Card:p,Datepicker:y["a"]},data:function(){return{sortType:"0",startDate:0,endDate:0}},computed:C({},Object(m["b"])({profiles:function(e){var t=e.profiles.profiles;if(this.startDate&&this.endDate){var s=w()(new Date(this.startDate)).format("MMMM DD, YYYY"),r=w()(new Date(this.endDate)).format("MMMM DD, YYYY");return console.log("see the dates",s,r),t.filter((function(e){var t=w()(new Date(1e3*e.join_date)).format("MMMM DD, YYYY");return w()(t).isBetween(s,r)}))}return t}})),methods:{removeCurrent:function(e){this.profiles.splice(e,1)},sortList:function(){switch(this.sortType){case"0":this.profiles.sort((function(e,t){return e.uid>t.uid?1:-1}));break;case"1":this.profiles.sort((function(e,t){return e.twubric.total>t.twubric.total?1:-1}));break;case"2":this.profiles.sort((function(e,t){return e.twubric.friends>t.twubric.friends?1:-1}));break;case"3":this.profiles.sort((function(e,t){return e.twubric.influence>t.twubric.influence?1:-1}));break;case"4":this.profiles.sort((function(e,t){return e.twubric.chirpiness>t.twubric.chirpiness?1:-1}));break}},resetEverything:function(){this.startDate=null,this.endDate=null,this.sortType="0",this.sortList("0")}},created:function(){var e=this;h.a.get(_.profileAPIEndpoint).then((function(t){console.log("This is the response",t),e.$store.commit("setProfiles",t.data)}))}},O=D,M=Object(b["a"])(O,o,c,!1,null,"0ff0f834",null),z=M.exports,x={name:"app",components:{MainList:z}},S=x,P=(s("034f"),Object(b["a"])(S,a,n,!1,null,null,null)),Y=P.exports,E=s("5f5b");s("f9e3"),s("2dd8"),s("3e5b");r["default"].use(m["a"]);var T={profiles:[]},F={},I={setProfiles:function(e,t){e.profiles=t}},N={},B={state:T,actions:N,mutations:I,getters:F};r["default"].use(m["a"]);var L=new m["a"].Store({modules:{profiles:B}}),$=L;r["default"].config.productionTip=!1,r["default"].use(E["a"]),r["default"].use(s("2ead")),new r["default"]({store:$,render:function(e){return e(Y)}}).$mount("#app")},"64a9":function(e,t,s){}});
//# sourceMappingURL=app.75ccc80b.js.map