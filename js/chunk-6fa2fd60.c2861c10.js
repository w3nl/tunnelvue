(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6fa2fd60"],{5299:function(t,e,s){"use strict";
/*!
 * vue-social-sharing v2.4.7 
 * (c) 2019 nicolasbeauvais
 * Released under the MIT License.
 */function r(t){return t&&"object"===typeof t&&"default"in t?t["default"]:t}var a=r(s("2b0e")),o={functional:!0,props:{network:{type:String,default:""}},render:function(t,e){var s=e.parent._data.baseNetworks[e.props.network];return s?t(e.parent.networkTag,{staticClass:e.data.staticClass||null,staticStyle:e.data.staticStyle||null,class:e.data.class||null,style:e.data.style||null,attrs:{id:e.data.attrs.id||null,tabindex:e.data.attrs.tabindex||0,"data-link":"popup"===s.type?"#share-"+e.props.network:e.parent.createSharingUrl(e.props.network),"data-action":"popup"===s.type?null:s.action},on:{click:"popup"===s.type?function(){e.parent.share(e.props.network)}:function(){e.parent.touch(e.props.network)}}},e.children):console.warn("Network "+e.props.network+" does not exist")}},n={sharer:"mailto:?subject=@title&body=@url%0D%0A%0D%0A@description",type:"direct"},i={sharer:"https://www.facebook.com/sharer/sharer.php?u=@url&title=@title&description=@description&quote=@quote&hashtag=@hashtags",type:"popup"},l={sharer:"https://plus.google.com/share?url=@url",type:"popup"},p={sharer:"http://line.me/R/msg/text/?@description%0D%0A@url",type:"popup"},c={sharer:"https://www.linkedin.com/shareArticle?mini=true&url=@url&title=@title&summary=@description",type:"popup"},h={sharer:"https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl=@url&st.comments=@description",type:"popup"},u={sharer:"https://pinterest.com/pin/create/button/?url=@url&media=@media&description=@title",type:"popup"},d={sharer:"https://www.reddit.com/submit?url=@url&title=@title",type:"popup"},w={sharer:"https://web.skype.com/share?url=@description%0D%0A@url",type:"popup"},g={sharer:"https://t.me/share/url?url=@url&text=@description",type:"popup"},m={sharer:"https://twitter.com/intent/tweet?text=@title&url=@url&hashtags=@hashtags@twitteruser",type:"popup"},f={sharer:"viber://forward?text=@url @description",type:"direct"},y={sharer:"https://vk.com/share.php?url=@url&title=@title&description=@description&image=@media&noparse=true",type:"popup"},v={sharer:"http://service.weibo.com/share/share.php?url=@url&title=@title",type:"popup"},b={sharer:"https://api.whatsapp.com/send?text=@description%0D%0A@url",type:"popup",action:"share/whatsapp/share"},k={sharer:"sms:?body=@url%20@description",type:"direct"},C={sharer:"sms:;body=@url%20@description",type:"direct"},_={email:n,facebook:i,googleplus:l,line:p,linkedin:c,odnoklassniki:h,pinterest:u,reddit:d,skype:w,telegram:g,twitter:m,viber:f,vk:y,weibo:v,whatsapp:b,sms:k,sms_ios:C},S="undefined"!==typeof window,x=S?window:null,O={props:{url:{type:String,default:S?window.location.href:""},title:{type:String,default:""},description:{type:String,default:""},quote:{type:String,default:""},hashtags:{type:String,default:""},twitterUser:{type:String,default:""},withCounts:{type:[String,Boolean],default:!1},googleKey:{type:String,default:void 0},media:{type:String,default:""},networkTag:{type:String,default:"span"},networks:{type:Object,default:function(){return{}}}},data:function(){return{baseNetworks:_,popup:{status:!1,resizable:!0,toolbar:!1,menubar:!1,scrollbars:!1,location:!1,directories:!1,width:626,height:436,top:0,left:0,window:void 0,interval:null}}},methods:{createSharingUrl:function(t){var e=navigator.userAgent.toLowerCase();"sms"===t&&(e.indexOf("iphone")>-1||e.indexOf("ipad")>-1)&&(t+="_ios");var s=this.baseNetworks[t].sharer;return"twitter"===t&&0===this.hashtags.length&&(s=s.replace("&hashtags=@hashtags","")),s.replace(/@url/g,encodeURIComponent(this.url)).replace(/@title/g,encodeURIComponent(this.title)).replace(/@description/g,encodeURIComponent(this.description)).replace(/@quote/g,encodeURIComponent(this.quote)).replace(/@hashtags/g,this.generateHashtags(t,this.hashtags)).replace(/@media/g,this.media).replace(/@twitteruser/g,this.twitterUser?"&via="+this.twitterUser:"")},generateHashtags:function(t,e){return"facebook"===t&&e.length>0?"%23"+e.split(",")[0]:e},share:function(t){this.openSharer(t,this.createSharingUrl(t)),this.$root.$emit("social_shares_open",t,this.url),this.$emit("open",t,this.url)},touch:function(t){window.open(this.createSharingUrl(t),"_self"),this.$root.$emit("social_shares_open",t,this.url),this.$emit("open",t,this.url)},openSharer:function(t,e){var s=this,r=null;r&&this.popup.interval&&(clearInterval(this.popup.interval),r.close(),this.$root.$emit("social_shares_change",t,this.url),this.$emit("change",t,this.url)),r=window.open(e,"sharer","status="+(this.popup.status?"yes":"no")+",height="+this.popup.height+",width="+this.popup.width+",resizable="+(this.popup.resizable?"yes":"no")+",left="+this.popup.left+",top="+this.popup.top+",screenX="+this.popup.left+",screenY="+this.popup.top+",toolbar="+(this.popup.toolbar?"yes":"no")+",menubar="+(this.popup.menubar?"yes":"no")+",scrollbars="+(this.popup.scrollbars?"yes":"no")+",location="+(this.popup.location?"yes":"no")+",directories="+(this.popup.directories?"yes":"no")),r.focus(),this.popup.interval=setInterval((function(){r&&!r.closed||(clearInterval(s.popup.interval),r=void 0,s.$root.$emit("social_shares_close",t,s.url),s.$emit("close",t,s.url))}),500)}},beforeMount:function(){this.baseNetworks=a.util.extend(this.baseNetworks,this.networks)},mounted:function(){if(S){var t=void 0!==x.screenLeft?x.screenLeft:screen.left,e=void 0!==x.screenTop?x.screenTop:screen.top,s=x.innerWidth?x.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width,r=x.innerHeight?x.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height;this.popup.left=s/2-this.popup.width/2+t,this.popup.top=r/2-this.popup.height/2+e}},components:{network:o},version:"2.4.7",install:function(t){t.component("social-sharing",O)}};"undefined"!==typeof window&&(window.SocialSharing=O),t.exports=O},bede:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"landing"},[s("div",{staticClass:"main"}),s("div",{staticClass:"modal"},[s("GameLogoComponent"),s("h1",{staticClass:"modal_header"},[t._v("Thank you for playing!")]),s("div",{staticClass:"modal_body"},[t._m(0),t._m(1),s("p",[t._v("\n                Your score: "),s("strong",[t._v(t._s(t.score))])]),s("social-sharing",{attrs:{url:"https://tunnelvue.way2web.nl",title:"TunnelVue",description:"Check out @way2web's TunnelVue!",quote:"Check out @way2web's TunnelVue!",hashtags:"laravel,vuejs,way2web,tunnelvue"},inlineTemplate:{render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("network",{attrs:{network:"email"}},[s("font-awesome-icon",{attrs:{icon:["fas","envelope"],size:"lg","fixed-width":""}})],1),s("network",{attrs:{network:"facebook"}},[s("font-awesome-icon",{attrs:{icon:["fab","facebook"],size:"lg","fixed-width":""}})],1),s("network",{attrs:{network:"reddit"}},[s("font-awesome-icon",{attrs:{icon:["fab","reddit"],size:"lg","fixed-width":""}})],1),s("network",{attrs:{network:"twitter"}},[s("font-awesome-icon",{attrs:{icon:["fab","twitter"],size:"lg","fixed-width":""}})],1),s("network",{attrs:{network:"whatsapp"}},[s("font-awesome-icon",{attrs:{icon:["fab","whatsapp"],size:"lg","fixed-width":""}})],1)],1)},staticRenderFns:[]}})],1),s("div",{staticClass:"modal_footer"},[s("button",{staticClass:"btn btn-primary",on:{click:t.retry}},[t._v("Keep on practicing")])]),s("a",{attrs:{href:"https://www.way2web.nl",target:"_blank",rel:"noopener noreferrer"}},[s("W2WLogoComponent")],1)],1)])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("\n                Awesome! At Way2Web we are always looking for Laravel/Vue.js specialists to work on our high impact\n                projects. So we're curious to hear if you, or someone you know might like to work with us. You can\n                find out more\n                "),s("a",{attrs:{href:"https://www.way2web.nl/werken-bij-way2web/",target:"_blank",rel:"noopener noreferrer"}},[t._v("\n                    about us\n                ")]),t._v("\n                or contact us at "),s("a",{attrs:{href:"mailto: leeronskennen@way2web.nl"}},[t._v("leeronskennen@way2web.nl")]),t._v(".\n            ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("\n                By the way, if can’t beat the game, you can always\n                "),s("a",{attrs:{href:"https://github.com/Way2Web/tunnelvue",target:"_blank",rel:"noopener noreferrer"}},[t._v("\n                    become a game changer ")]),t._v("!\n            ")])}],o=(s("8e6e"),s("ac6a"),s("456d"),s("bd86")),n=s("597c"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 258.75 332.71",id:"gamelogo"}},[s("defs"),s("title",[t._v("TunnelVue")]),s("g",{attrs:{id:"Laag_2","data-name":"Laag 2"}},[s("g",{attrs:{id:"Laag_1-2","data-name":"Laag 1"}},[s("polygon",{staticClass:"cls-1",attrs:{points:"129.39 126.73 204.03 221.6 202 223.17 129.37 126.75 129.39 126.73"}}),s("circle",{staticClass:"cls-1",attrs:{cx:"129.38",cy:"126.74",r:"0.08"}}),s("polygon",{staticClass:"cls-1",attrs:{points:"129.38 126.76 63.38 227.83 61.24 226.4 129.36 126.74 129.38 126.76"}}),s("polygon",{staticClass:"cls-1",attrs:{points:"129.35 126.75 12.83 95.24 13.52 92.77 129.36 126.72 129.35 126.75"}}),s("polygon",{staticClass:"cls-1",attrs:{points:"129.37 126.75 127.22 6.05 129.79 6.03 129.4 126.75 129.37 126.75"}}),s("polygon",{staticClass:"cls-2",attrs:{points:"129.34 126.63 240.69 78.67 248.28 102.09 129.43 126.88 129.34 126.63"}}),s("polygon",{staticClass:"cls-2",attrs:{points:"129.48 126.72 212.13 215.41 192.64 230.44 129.27 126.88 129.48 126.72"}}),s("polygon",{staticClass:"cls-2",attrs:{points:"129.53 126.81 71.92 233.48 51.45 219.82 129.31 126.66 129.53 126.81"}}),s("polygon",{staticClass:"cls-2",attrs:{points:"129.35 126.88 10.04 105.37 16.65 81.66 129.42 126.63 129.35 126.88"}}),s("polygon",{staticClass:"cls-2",attrs:{points:"129.22 126.77 117.94 6.06 142.56 6.06 129.49 126.77 129.22 126.77"}}),s("circle",{staticClass:"cls-3",attrs:{cx:"129.38",cy:"126.74",r:"120.24"}}),s("circle",{staticClass:"cls-4",attrs:{cx:"129.38",cy:"126.74",r:"65.66"}}),s("path",{staticClass:"cls-5",attrs:{d:"M149.41,71.92l-20,36.14-20-36.14H42.61l86.77,156.49L216.14,71.92Z"}}),s("path",{staticClass:"cls-6",attrs:{d:"M149.41,71.92l-20,36.14-20-36.14h-32l52.06,93.89,52.05-93.89Z"}}),s("rect",{staticClass:"cls-2",attrs:{y:"324.21",width:"258.75",height:"8.5"}}),s("path",{staticClass:"cls-1",attrs:{d:"M7.92,278.81v-8.65h24.5v8.65h-8v48.61H15.93V278.81Z"}}),s("path",{staticClass:"cls-1",attrs:{d:"M58.26,270.16v45.5a15.39,15.39,0,0,1-1.42,6.23,10.67,10.67,0,0,1-3.37,4.21A10.12,10.12,0,0,1,47,328.05a10.36,10.36,0,0,1-6.6-1.95,10.56,10.56,0,0,1-3.3-4.21,15.55,15.55,0,0,1-1.41-6.23v-45.5h8.48v45.5a4.89,4.89,0,0,0,1.18,3.58,2.25,2.25,0,0,0,1.65.63,2.47,2.47,0,0,0,2.51-2.11,5.27,5.27,0,0,0,.32-2.1v-45.5Z"}}),s("path",{staticClass:"cls-1",attrs:{d:"M73.42,297.59l-.71-2.65h-.47v32.48H64.46V270.16H72L80.25,300l.71,2.65h.47V270.16H89.2v57.26H81.66Z"}}),s("path",{staticClass:"cls-1",attrs:{d:"M104.44,297.59l-.71-2.65h-.47v32.48H95.49V270.16H103L111.27,300l.71,2.65h.47V270.16h7.78v57.26h-7.54Z"}}),s("path",{staticClass:"cls-1",attrs:{d:"M126.51,270.16h19.4v8.65H135v15h7.86V303H135v15.74h10.92v8.64h-19.4Z"}}),s("path",{staticClass:"cls-1",attrs:{d:"M150.62,270.16h8.48v49.47h11.23v7.79H150.62Z"}}),s("path",{staticClass:"cls-1",attrs:{d:"M189.18,270.16h8.25l-8.8,57.26h-8.48l-8.8-57.26h8.25l4.24,31.48.32,2.41h.47l.31-2.41Z"}}),s("path",{staticClass:"cls-1",attrs:{d:"M223.82,270.16v45.5a15.39,15.39,0,0,1-1.42,6.23A10.67,10.67,0,0,1,219,326.1a10.12,10.12,0,0,1-6.52,1.95,10.36,10.36,0,0,1-6.6-1.95,10.56,10.56,0,0,1-3.3-4.21,15.55,15.55,0,0,1-1.41-6.23v-45.5h8.48v45.5a4.89,4.89,0,0,0,1.18,3.58,2.25,2.25,0,0,0,1.65.63,2.47,2.47,0,0,0,2.51-2.11,5.27,5.27,0,0,0,.32-2.1v-45.5Z"}}),s("path",{staticClass:"cls-1",attrs:{d:"M230,270.16h19.4v8.65H238.51v15h7.85V303h-7.85v15.74h10.91v8.64H230Z"}})])])])},l=[],p={name:"GameLogoComponent"},c=p,h=s("2877"),u=Object(h["a"])(c,i,l,!1,null,null,null),d=u.exports,w=s("2f62"),g=s("5299"),m=s.n(g);function f(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,r)}return s}function y(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?f(Object(s),!0).forEach((function(e){Object(o["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):f(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var v={components:{W2WLogoComponent:n["a"],GameLogoComponent:d,SocialSharing:m.a},computed:y({},Object(w["c"])({score:"game/score"})),methods:{retry:function(){location.href="/"}}},b=v,k=Object(h["a"])(b,r,a,!1,null,null,null);e["default"]=k.exports}}]);
//# sourceMappingURL=chunk-6fa2fd60.c2861c10.js.map