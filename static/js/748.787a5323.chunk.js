/*! For license information please see 748.787a5323.chunk.js.LICENSE.txt */
(self.webpackChunkcrypto_project=self.webpackChunkcrypto_project||[]).push([[748],{748:function(n,r,t){"use strict";t.r(r),t.d(r,{default:function(){return Zn}});var e=t(4165),i=t(5861),a=t(2791),o=t(2591),c=t(4956),s=t(1311),l=t(8418),d="Arbitrage_table__7TD5D",u="Arbitrage_checkResult__s4WK0",f="Arbitrage_checkResultList__xGlpJ",h="Arbitrage_pairPrice__SEG9C",v="Arbitrage_result__VRZMk",g="Arbitrage_checkBtn__249OM",p="Arbitrage_arrowRight__c4JzS",m="Arbitrage_refreshIcon__-0NcT",x="Arbitrage_tablePreloader__Tl9yP",b="Arbitrage_tableArbitrage__pHUUD",Z="Arbitrage_arbitrageHead__Plyny",S="Arbitrage_arbitrageBody__5UsT1",j=t(184),P=function(n){var r=n.result,t=(0,c.T)();return(0,j.jsx)(j.Fragment,{children:r.map((function(n,r){return(0,j.jsxs)("tr",{className:S,onClick:function(){return function(n){t((0,s.AB)(n.pair1)),t((0,s.GD)(n.pair2)),t((0,s.HG)(n.pair3))}(n)},children:[(0,j.jsx)("td",{children:null===n||void 0===n?void 0:n.pair1}),(0,j.jsx)("td",{children:(0,l.J2)(+n.price1)}),(0,j.jsx)("td",{children:null===n||void 0===n?void 0:n.pair2}),(0,j.jsx)("td",{children:(0,l.J2)(+n.price2)}),(0,j.jsx)("td",{children:null===n||void 0===n?void 0:n.pair3}),(0,j.jsx)("td",{children:(0,l.J2)(+n.price3)}),(0,j.jsx)("td",{children:null===n||void 0===n?void 0:n.result})]},r)}))})},y=a.memo(P),k=t(93),I=t(3095),_=t(885),w=function(n){onmessage=function(r){postMessage(n(r.data))}},D=function(n){var r=n.symbols,t=n.allCurrencies,e=r.filter((function(n){return"TRADING"===n.status})).map((function(n){return{symbol:n.symbol}})).map((function(n){return t.find((function(r){return r.symbol===n.symbol}))})),i=e.filter((function(n){return n.symbol.includes("USDT")})).map((function(n){if(n){var r=n.symbol,t=n.askPrice,i=n.bidPrice,a=Number(t),o=Number(i),c=r.replace(/USDT/,""),s=e.filter((function(n){return n.symbol.includes(c)})).map((function(n){if(n){var t=n.symbol,i=n.askPrice,s=n.bidPrice,l=Number(i),d=Number(s),u=new RegExp(c),f=t.replace(u,""),h=e.filter((function(n){return(null===n||void 0===n?void 0:n.symbol.includes("".concat(f,"USDT")))||(null===n||void 0===n?void 0:n.symbol.includes("USDT".concat(f)))||""})),v=h.map((function(n){if(n){var e=n.symbol,i=n.askPrice,s=n.bidPrice,u=Number(i),h=Number(s),v=0;return r==="".concat(c,"USDT")&&t==="".concat(f).concat(c)&&e==="".concat(f,"USDT")&&(v=100/a/l*h-100),r==="".concat(c,"USDT")&&t==="".concat(f).concat(c)&&e==="USDT".concat(f)&&(v=100/a/l/u-100),r==="".concat(c,"USDT")&&t==="".concat(c).concat(f)&&e==="".concat(f,"USDT")&&(v=100/a*d*h-100),r==="".concat(c,"USDT")&&t==="".concat(c).concat(f)&&e==="USDT".concat(f)&&(v=100/a*d/u-100),r==="USDT".concat(c)&&t==="".concat(f).concat(c)&&e==="".concat(f,"USDT")&&(v=100*o/l*h-100),r==="USDT".concat(c)&&t==="".concat(f).concat(c)&&e==="USDT".concat(f)&&(v=100*o/l/u-100),r==="USDT".concat(c)&&t==="".concat(c).concat(f)&&e==="".concat(f,"USDT")&&(v=100*o*d*h-100),r==="USDT".concat(c)&&t==="".concat(c).concat(f)&&e==="USDT".concat(f)&&(v=100*o*d/u-100),{pair1:r,price1:a,pair2:t,price2:l,pair3:e||0,price3:u||0,result:Number(v.toFixed(2))}}}));return v}}));return s}})),a=i.flat(3).filter((function(n){return(null===n||void 0===n?void 0:n.result)>0})).sort((function(n,r){return r.result-n.result}));return{currencies:e,result:a}},N=t(3763),T=function(){var n=(0,c.T)(),r=function(n){var r=(0,a.useState)(null),t=(0,_.Z)(r,2),e=t[0],i=t[1];return{result:e,setResult:i,run:function(r){var t=new Worker(URL.createObjectURL(new Blob(["(".concat(w,")(").concat(n,")")])));t.onmessage=function(n){i(n.data),t.terminate()},t.onerror=function(n){console.log(n.message),t.terminate()},t.postMessage(r)}}}(D),t=r.result,l=r.setResult,u=r.run;function f(){return h.apply(this,arguments)}function h(){return(h=(0,i.Z)((0,e.Z)().mark((function n(){var r;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,I.C.getAllCurrencies();case 2:r=n.sent,u(r);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}(0,a.useEffect)((function(){f()}),[]),(0,a.useEffect)((function(){t&&n((0,s.HC)(t.currencies))}),[t]);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("svg",{className:m,onClick:function(){l(null),f()},children:(0,j.jsx)("use",{href:N.Z+"#refresh"})}),t?(0,j.jsx)("div",{className:"".concat(d," ").concat(b),children:(0,j.jsxs)(o.Z,{hover:!0,size:"sm",variant:"dark",children:[(0,j.jsx)("thead",{className:Z,children:(0,j.jsxs)("tr",{children:[(0,j.jsx)("th",{children:"Pair\xa01"}),(0,j.jsx)("th",{children:"Price\xa01"}),(0,j.jsx)("th",{children:"Pair\xa02"}),(0,j.jsx)("th",{children:"Price\xa02"}),(0,j.jsx)("th",{children:"Pair\xa03"}),(0,j.jsx)("th",{children:"Price\xa03"}),(0,j.jsx)("th",{children:"Result"})]})}),(0,j.jsx)("tbody",{children:(0,j.jsx)(y,{result:t.result})})]})}):(0,j.jsx)("div",{className:x,children:(0,j.jsx)(k.p9,{className:"small"})})]})},U=t(1413),C=t(492),L=t(6777),R=t(4942),M=t(3366),A=t(7462),E=t(4036),B=t(6248).Z,F=t(4419),z=t(7231),J=t(1046),G=t(6151),W=t(168),H=t(8182),O=t(2554),K=t(7225),Q=t(5878);function V(n){return(0,K.Z)("MuiCircularProgress",n)}(0,Q.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var X,$,q,Y,nn,rn,tn,en,an=["className","color","disableShrink","size","style","thickness","value","variant"],on=44,cn=(0,O.F4)(nn||(nn=X||(X=(0,W.Z)(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"])))),sn=(0,O.F4)(rn||(rn=$||($=(0,W.Z)(["\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n"])))),ln=(0,z.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:function(n,r){var t=n.ownerState;return[r.root,r[t.variant],r["color".concat((0,E.Z)(t.color))]]}})((function(n){var r=n.ownerState,t=n.theme;return(0,A.Z)({display:"inline-block"},"determinate"===r.variant&&{transition:t.transitions.create("transform")},"inherit"!==r.color&&{color:(t.vars||t).palette[r.color].main})}),(function(n){return"indeterminate"===n.ownerState.variant&&(0,O.iv)(tn||(tn=q||(q=(0,W.Z)(["\n      animation: "," 1.4s linear infinite;\n    "]))),cn)})),dn=(0,z.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:function(n,r){return r.svg}})({display:"block"}),un=(0,z.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:function(n,r){var t=n.ownerState;return[r.circle,r["circle".concat((0,E.Z)(t.variant))],t.disableShrink&&r.circleDisableShrink]}})((function(n){var r=n.ownerState,t=n.theme;return(0,A.Z)({stroke:"currentColor"},"determinate"===r.variant&&{transition:t.transitions.create("stroke-dashoffset")},"indeterminate"===r.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})}),(function(n){var r=n.ownerState;return"indeterminate"===r.variant&&!r.disableShrink&&(0,O.iv)(en||(en=Y||(Y=(0,W.Z)(["\n      animation: "," 1.4s ease-in-out infinite;\n    "]))),sn)})),fn=a.forwardRef((function(n,r){var t=(0,J.Z)({props:n,name:"MuiCircularProgress"}),e=t.className,i=t.color,a=void 0===i?"primary":i,o=t.disableShrink,c=void 0!==o&&o,s=t.size,l=void 0===s?40:s,d=t.style,u=t.thickness,f=void 0===u?3.6:u,h=t.value,v=void 0===h?0:h,g=t.variant,p=void 0===g?"indeterminate":g,m=(0,M.Z)(t,an),x=(0,A.Z)({},t,{color:a,disableShrink:c,size:l,thickness:f,value:v,variant:p}),b=function(n){var r=n.classes,t=n.variant,e=n.color,i=n.disableShrink,a={root:["root",t,"color".concat((0,E.Z)(e))],svg:["svg"],circle:["circle","circle".concat((0,E.Z)(t)),i&&"circleDisableShrink"]};return(0,F.Z)(a,V,r)}(x),Z={},S={},P={};if("determinate"===p){var y=2*Math.PI*((on-f)/2);Z.strokeDasharray=y.toFixed(3),P["aria-valuenow"]=Math.round(v),Z.strokeDashoffset="".concat(((100-v)/100*y).toFixed(3),"px"),S.transform="rotate(-90deg)"}return(0,j.jsx)(ln,(0,A.Z)({className:(0,H.Z)(b.root,e),style:(0,A.Z)({width:l,height:l},S,d),ownerState:x,ref:r,role:"progressbar"},P,m,{children:(0,j.jsx)(dn,{className:b.svg,ownerState:x,viewBox:"".concat(22," ").concat(22," ").concat(on," ").concat(on),children:(0,j.jsx)(un,{className:b.circle,style:Z,ownerState:x,cx:on,cy:on,r:(on-f)/2,fill:"none",strokeWidth:f})})}))}));function hn(n){return(0,K.Z)("MuiLoadingButton",n)}var vn=(0,Q.Z)("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]),gn=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],pn=(0,z.ZP)(G.Z,{shouldForwardProp:function(n){return function(n){return"ownerState"!==n&&"theme"!==n&&"sx"!==n&&"as"!==n&&"classes"!==n}(n)||"classes"===n},name:"MuiLoadingButton",slot:"Root",overridesResolver:function(n,r){return[r.root,r.startIconLoadingStart&&(0,R.Z)({},"& .".concat(vn.startIconLoadingStart),r.startIconLoadingStart),r.endIconLoadingEnd&&(0,R.Z)({},"& .".concat(vn.endIconLoadingEnd),r.endIconLoadingEnd)]}})((function(n){var r=n.ownerState,t=n.theme;return(0,A.Z)((0,R.Z)({},"& .".concat(vn.startIconLoadingStart,", & .").concat(vn.endIconLoadingEnd),{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0}),"center"===r.loadingPosition&&(0,R.Z)({transition:t.transitions.create(["background-color","box-shadow","border-color"],{duration:t.transitions.duration.short})},"&.".concat(vn.loading),{color:"transparent"}),"start"===r.loadingPosition&&r.fullWidth&&(0,R.Z)({},"& .".concat(vn.startIconLoadingStart,", & .").concat(vn.endIconLoadingEnd),{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0,marginRight:-8}),"end"===r.loadingPosition&&r.fullWidth&&(0,R.Z)({},"& .".concat(vn.startIconLoadingStart,", & .").concat(vn.endIconLoadingEnd),{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0,marginLeft:-8}))})),mn=(0,z.ZP)("div",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:function(n,r){var t=n.ownerState;return[r.loadingIndicator,r["loadingIndicator".concat((0,E.Z)(t.loadingPosition))]]}})((function(n){var r=n.theme,t=n.ownerState;return(0,A.Z)({position:"absolute",visibility:"visible",display:"flex"},"start"===t.loadingPosition&&("outlined"===t.variant||"contained"===t.variant)&&{left:"small"===t.size?10:14},"start"===t.loadingPosition&&"text"===t.variant&&{left:6},"center"===t.loadingPosition&&{left:"50%",transform:"translate(-50%)",color:(r.vars||r).palette.action.disabled},"end"===t.loadingPosition&&("outlined"===t.variant||"contained"===t.variant)&&{right:"small"===t.size?10:14},"end"===t.loadingPosition&&"text"===t.variant&&{right:6},"start"===t.loadingPosition&&t.fullWidth&&{position:"relative",left:-10},"end"===t.loadingPosition&&t.fullWidth&&{position:"relative",right:-10})})),xn=a.forwardRef((function(n,r){var t=(0,J.Z)({props:n,name:"MuiLoadingButton"}),e=t.children,i=t.disabled,a=void 0!==i&&i,o=t.id,c=t.loading,s=void 0!==c&&c,l=t.loadingIndicator,d=t.loadingPosition,u=void 0===d?"center":d,f=t.variant,h=void 0===f?"text":f,v=(0,M.Z)(t,gn),g=B(o),p=null!=l?l:(0,j.jsx)(fn,{"aria-labelledby":g,color:"inherit",size:16}),m=(0,A.Z)({},t,{disabled:a,loading:s,loadingIndicator:p,loadingPosition:u,variant:h}),x=function(n){var r=n.loading,t=n.loadingPosition,e=n.classes,i={root:["root",r&&"loading"],startIcon:[r&&"startIconLoading".concat((0,E.Z)(t))],endIcon:[r&&"endIconLoading".concat((0,E.Z)(t))],loadingIndicator:["loadingIndicator",r&&"loadingIndicator".concat((0,E.Z)(t))]},a=(0,F.Z)(i,hn,e);return(0,A.Z)({},e,a)}(m),b=s?(0,j.jsx)(mn,{className:x.loadingIndicator,ownerState:m,children:p}):null;return(0,j.jsxs)(pn,(0,A.Z)({disabled:a||s,id:g,ref:r},v,{variant:h,classes:x,ownerState:m,children:["end"===m.loadingPosition?e:b,"end"===m.loadingPosition?b:e]}))})),bn=function(){var n=(0,c.C)((function(n){return n.arbitrage})),r=n.currencies,t=n.arbitrageResult,e=n.pair1,i=n.pair2,o=n.pair3,d=n.isLoadingPairs,m=(0,c.T)();(0,a.useEffect)((function(){return function(){m((0,s.Qh)())}}),[]);var x=[],b=[],Z=[],S="";if(r.length){var P=r.map((function(n){return n.symbol}));x=P.filter((function(n){return n.includes("USDT")})),S=e?e.replace(/USDT/,""):"",b=P.filter((function(n){return n.includes(S)&&!n.includes("USDT")}));var y=new RegExp(S),k=i?i.replace(y,""):"";Z=P.filter((function(n){return n.includes("".concat(k,"USDT"))||n.includes("USDT".concat(k))}))}return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)("section",{className:u,children:[(0,j.jsxs)("ul",{className:f,children:[(0,j.jsxs)("li",{children:[(0,j.jsx)("p",{className:h,children:t.price1?(0,l.J2)(t.price1):"Price"}),(0,j.jsx)(C.Z,{id:"pair-1",disabled:!r.length,value:e,onChange:function(n,r){r&&m((0,s.AB)(r))},sx:{width:200},disablePortal:!0,options:x,renderInput:function(n){return(0,j.jsx)(L.Z,(0,U.Z)((0,U.Z)({},n),{},{label:"Pair 1"}))}})]}),(0,j.jsxs)("li",{children:[(0,j.jsx)("p",{className:h,children:t.price2?(0,l.J2)(t.price2):"Price"}),(0,j.jsx)(C.Z,{id:"pair-2",disabled:!r.length,value:i,onChange:function(n,r){r&&m((0,s.GD)(r))},sx:{width:200},disablePortal:!0,options:b,renderInput:function(n){return(0,j.jsx)(L.Z,(0,U.Z)((0,U.Z)({},n),{},{label:"Pair 2"}))}})]}),(0,j.jsxs)("li",{children:[(0,j.jsx)("p",{className:h,children:t.price3?(0,l.J2)(t.price3):"Price"}),(0,j.jsx)(C.Z,{id:"pair-3",disabled:!r.length,value:o,onChange:function(n,r){r&&m((0,s.HG)(r))},sx:{width:200},disablePortal:!0,options:Z,renderInput:function(n){return(0,j.jsx)(L.Z,(0,U.Z)((0,U.Z)({},n),{},{label:"Pair 3"}))}})]})]}),(0,j.jsx)(xn,{className:g,loading:d,endIcon:(0,j.jsx)("svg",{className:p,children:(0,j.jsx)("use",{href:N.Z+"#arrow_right"})}),loadingPosition:"end",variant:"outlined",onClick:function(){if(e&&i&&o){var n={pair1:e,pair2:i,pair3:o};m((0,s.__)(n))}},children:"Check"}),(0,j.jsxs)("p",{className:v,children:["Result ",t.result?"".concat(t.result," %"):""]})]})})},Zn=function(){return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(bn,{}),(0,j.jsx)(T,{})]})}},8418:function(n,r,t){"use strict";t.d(r,{J2:function(){return i},eX:function(){return a},po:function(){return o},yC:function(){return e}});var e=function(n){return new Intl.NumberFormat("ua-UA").format(n)},i=function(n){var r=new RegExp(/\.?0*$/);return n<1e3?String(n).replace(r,""):e(n)},a=function(n){return n<1e-8?Math.trunc(1e10*n)/1e10:n<1e-6?Math.trunc(1e8*n)/1e8:n<1e-4?Math.trunc(1e6*n)/1e6:n<.01?Math.trunc(1e4*n)/1e4:Math.trunc(100*n)/100},o=function(n){return n>0?"percentagePlus":"percentageMinus"}},1694:function(n,r){var t;!function(){"use strict";var e={}.hasOwnProperty;function i(){for(var n=[],r=0;r<arguments.length;r++){var t=arguments[r];if(t){var a=typeof t;if("string"===a||"number"===a)n.push(t);else if(Array.isArray(t)){if(t.length){var o=i.apply(null,t);o&&n.push(o)}}else if("object"===a)if(t.toString===Object.prototype.toString)for(var c in t)e.call(t,c)&&t[c]&&n.push(c);else n.push(t.toString())}}return n.join(" ")}n.exports?(i.default=i,n.exports=i):void 0===(t=function(){return i}.apply(r,[]))||(n.exports=t)}()},2591:function(n,r,t){"use strict";var e=t(1413),i=t(5987),a=t(1694),o=t.n(a),c=t(2791),s=t(162),l=t(184),d=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],u=c.forwardRef((function(n,r){var t=n.bsPrefix,a=n.className,c=n.striped,u=n.bordered,f=n.borderless,h=n.hover,v=n.size,g=n.variant,p=n.responsive,m=(0,i.Z)(n,d),x=(0,s.vE)(t,"table"),b=o()(a,x,g&&"".concat(x,"-").concat(g),v&&"".concat(x,"-").concat(v),c&&"".concat(x,"-").concat("string"===typeof c?"striped-".concat(c):"striped"),u&&"".concat(x,"-bordered"),f&&"".concat(x,"-borderless"),h&&"".concat(x,"-hover")),Z=(0,l.jsx)("table",(0,e.Z)((0,e.Z)({},m),{},{className:b,ref:r}));if(p){var S="".concat(x,"-responsive");return"string"===typeof p&&(S="".concat(S,"-").concat(p)),(0,l.jsx)("div",{className:S,children:Z})}return Z}));r.Z=u},162:function(n,r,t){"use strict";t.d(r,{SC:function(){return c},vE:function(){return o}});var e=t(2791),i=(t(184),["xxl","xl","lg","md","sm","xs"]),a=e.createContext({prefixes:{},breakpoints:i,minBreakpoint:"xs"});a.Consumer,a.Provider;function o(n,r){var t=(0,e.useContext)(a).prefixes;return n||t[r]||r}function c(){return"rtl"===(0,e.useContext)(a).dir}}}]);
//# sourceMappingURL=748.787a5323.chunk.js.map