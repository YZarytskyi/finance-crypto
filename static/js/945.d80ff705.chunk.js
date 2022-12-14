/*! For license information please see 945.d80ff705.chunk.js.LICENSE.txt */
(self.webpackChunkcrypto_project=self.webpackChunkcrypto_project||[]).push([[945],{9945:function(r,n,e){"use strict";e.r(n),e.d(n,{default:function(){return xr}});var i=e(5048),t="Arbitrage_table__Z+uUv",a="Arbitrage_checkResult__E4OiQ",o="Arbitrage_checkResultList__eGOUI",s="Arbitrage_pairPrice__jzTLX",c="Arbitrage_result__sMQ7F",l="Arbitrage_checkBtn__Ek1c4",d="Arbitrage_arrowRight__F8Bea",u="Arbitrage_refreshIcon__ZfUKo",h="Arbitrage_tablePreloader__gAsoY",p="Arbitrage_tableArbitrage__uu0E2",f="Arbitrage_arbitrageHead__DCTpR",g="Arbitrage_arbitrageBody__oMZG5",v=e(2791),x=e(4329),b=e(3763),m=e(2591),j=e(1311),Z=e(8418),y=e(184),_=function(){var r=(0,x.C)((function(r){return r.arbitrage.result})),n=(0,x.T)();return(0,y.jsx)(y.Fragment,{children:r.map((function(r,e){return(0,y.jsxs)("tr",{className:g,onClick:function(){return function(r){n((0,j.AB)(r.pair1)),n((0,j.GD)(r.pair2)),n((0,j.HG)(r.pair3))}(r)},children:[(0,y.jsx)("td",{children:r.pair1}),(0,y.jsx)("td",{children:(0,Z.J2)(+r.price1)}),(0,y.jsx)("td",{children:r.pair2}),(0,y.jsx)("td",{children:(0,Z.J2)(+r.price2)}),(0,y.jsx)("td",{children:r.pair3}),(0,y.jsx)("td",{children:(0,Z.J2)(+r.price3)}),(0,y.jsx)("td",{children:r.result})]},e)}))})},k=v.memo(_),P={preloader:"Preloader_preloader__xzFwy",line:"Preloader_line__h1LIh","opacity-1":"Preloader_opacity-1__ZXgo8",line2:"Preloader_line2__D+a4f",line3:"Preloader_line3__Nultg",line4:"Preloader_line4__aOA84",line6:"Preloader_line6__qeaOB",line7:"Preloader_line7__05XCa",line8:"Preloader_line8__+x6kw",line9:"Preloader_line9__nw6ua"},S=function(){return(0,y.jsxs)("div",{className:P.preloader,children:[(0,y.jsx)("p",{children:"Loading"}),(0,y.jsxs)("div",{children:[(0,y.jsx)("span",{className:P.line+" "+P.line1}),(0,y.jsx)("span",{className:P.line+" "+P.line2}),(0,y.jsx)("span",{className:P.line+" "+P.line3}),(0,y.jsx)("span",{className:P.line+" "+P.line4}),(0,y.jsx)("span",{className:P.line+" "+P.line5}),(0,y.jsx)("span",{className:P.line+" "+P.line6}),(0,y.jsx)("span",{className:P.line+" "+P.line7}),(0,y.jsx)("span",{className:P.line+" "+P.line8}),(0,y.jsx)("span",{className:P.line+" "+P.line9})]})]})},I=function(){var r=(0,x.C)((function(r){return r.arbitrage.isLoadingCurrencies})),n=(0,x.T)();(0,v.useEffect)((function(){n((0,j.U$)())}),[]);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("svg",{className:u,onClick:function(){n((0,j.U$)())},children:(0,y.jsx)("use",{href:b.Z+"#refresh"})}),r?(0,y.jsx)("div",{className:h,children:(0,y.jsx)(S,{})}):(0,y.jsx)("div",{className:"".concat(t," ").concat(p),children:(0,y.jsxs)(m.Z,{hover:!0,size:"sm",variant:"dark",children:[(0,y.jsx)("thead",{className:f,children:(0,y.jsxs)("tr",{children:[(0,y.jsx)("th",{children:"Pair\xa01"}),(0,y.jsx)("th",{children:"Price\xa01"}),(0,y.jsx)("th",{children:"Pair\xa02"}),(0,y.jsx)("th",{children:"Price\xa02"}),(0,y.jsx)("th",{children:"Pair\xa03"}),(0,y.jsx)("th",{children:"Price\xa03"}),(0,y.jsx)("th",{children:"Result"})]})}),(0,y.jsx)("tbody",{children:(0,y.jsx)(k,{})})]})})]})},w=e(1413),N=e(885),D=e(492),C=e(6777),L=e(4942),W=e(3366),U=e(7462),T=e(4036),F=e(6248).Z,A=e(4419),M=e(7231),R=e(1046),E=e(6151),B=e(168),z=e(8182),J=e(2554),G=e(7225),O=e(5878);function X(r){return(0,G.Z)("MuiCircularProgress",r)}(0,O.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var H,Q,$,q,K,Y,V,rr,nr=["className","color","disableShrink","size","style","thickness","value","variant"],er=44,ir=(0,J.F4)(K||(K=H||(H=(0,B.Z)(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"])))),tr=(0,J.F4)(Y||(Y=Q||(Q=(0,B.Z)(["\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n"])))),ar=(0,M.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:function(r,n){var e=r.ownerState;return[n.root,n[e.variant],n["color".concat((0,T.Z)(e.color))]]}})((function(r){var n=r.ownerState,e=r.theme;return(0,U.Z)({display:"inline-block"},"determinate"===n.variant&&{transition:e.transitions.create("transform")},"inherit"!==n.color&&{color:(e.vars||e).palette[n.color].main})}),(function(r){return"indeterminate"===r.ownerState.variant&&(0,J.iv)(V||(V=$||($=(0,B.Z)(["\n      animation: "," 1.4s linear infinite;\n    "]))),ir)})),or=(0,M.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:function(r,n){return n.svg}})({display:"block"}),sr=(0,M.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:function(r,n){var e=r.ownerState;return[n.circle,n["circle".concat((0,T.Z)(e.variant))],e.disableShrink&&n.circleDisableShrink]}})((function(r){var n=r.ownerState,e=r.theme;return(0,U.Z)({stroke:"currentColor"},"determinate"===n.variant&&{transition:e.transitions.create("stroke-dashoffset")},"indeterminate"===n.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})}),(function(r){var n=r.ownerState;return"indeterminate"===n.variant&&!n.disableShrink&&(0,J.iv)(rr||(rr=q||(q=(0,B.Z)(["\n      animation: "," 1.4s ease-in-out infinite;\n    "]))),tr)})),cr=v.forwardRef((function(r,n){var e=(0,R.Z)({props:r,name:"MuiCircularProgress"}),i=e.className,t=e.color,a=void 0===t?"primary":t,o=e.disableShrink,s=void 0!==o&&o,c=e.size,l=void 0===c?40:c,d=e.style,u=e.thickness,h=void 0===u?3.6:u,p=e.value,f=void 0===p?0:p,g=e.variant,v=void 0===g?"indeterminate":g,x=(0,W.Z)(e,nr),b=(0,U.Z)({},e,{color:a,disableShrink:s,size:l,thickness:h,value:f,variant:v}),m=function(r){var n=r.classes,e=r.variant,i=r.color,t=r.disableShrink,a={root:["root",e,"color".concat((0,T.Z)(i))],svg:["svg"],circle:["circle","circle".concat((0,T.Z)(e)),t&&"circleDisableShrink"]};return(0,A.Z)(a,X,n)}(b),j={},Z={},_={};if("determinate"===v){var k=2*Math.PI*((er-h)/2);j.strokeDasharray=k.toFixed(3),_["aria-valuenow"]=Math.round(f),j.strokeDashoffset="".concat(((100-f)/100*k).toFixed(3),"px"),Z.transform="rotate(-90deg)"}return(0,y.jsx)(ar,(0,U.Z)({className:(0,z.Z)(m.root,i),style:(0,U.Z)({width:l,height:l},Z,d),ownerState:b,ref:n,role:"progressbar"},_,x,{children:(0,y.jsx)(or,{className:m.svg,ownerState:b,viewBox:"".concat(22," ").concat(22," ").concat(er," ").concat(er),children:(0,y.jsx)(sr,{className:m.circle,style:j,ownerState:b,cx:er,cy:er,r:(er-h)/2,fill:"none",strokeWidth:h})})}))}));function lr(r){return(0,G.Z)("MuiLoadingButton",r)}var dr=(0,O.Z)("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]),ur=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],hr=(0,M.ZP)(E.Z,{shouldForwardProp:function(r){return function(r){return"ownerState"!==r&&"theme"!==r&&"sx"!==r&&"as"!==r&&"classes"!==r}(r)||"classes"===r},name:"MuiLoadingButton",slot:"Root",overridesResolver:function(r,n){return[n.root,n.startIconLoadingStart&&(0,L.Z)({},"& .".concat(dr.startIconLoadingStart),n.startIconLoadingStart),n.endIconLoadingEnd&&(0,L.Z)({},"& .".concat(dr.endIconLoadingEnd),n.endIconLoadingEnd)]}})((function(r){var n=r.ownerState,e=r.theme;return(0,U.Z)((0,L.Z)({},"& .".concat(dr.startIconLoadingStart,", & .").concat(dr.endIconLoadingEnd),{transition:e.transitions.create(["opacity"],{duration:e.transitions.duration.short}),opacity:0}),"center"===n.loadingPosition&&(0,L.Z)({transition:e.transitions.create(["background-color","box-shadow","border-color"],{duration:e.transitions.duration.short})},"&.".concat(dr.loading),{color:"transparent"}),"start"===n.loadingPosition&&n.fullWidth&&(0,L.Z)({},"& .".concat(dr.startIconLoadingStart,", & .").concat(dr.endIconLoadingEnd),{transition:e.transitions.create(["opacity"],{duration:e.transitions.duration.short}),opacity:0,marginRight:-8}),"end"===n.loadingPosition&&n.fullWidth&&(0,L.Z)({},"& .".concat(dr.startIconLoadingStart,", & .").concat(dr.endIconLoadingEnd),{transition:e.transitions.create(["opacity"],{duration:e.transitions.duration.short}),opacity:0,marginLeft:-8}))})),pr=(0,M.ZP)("div",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:function(r,n){var e=r.ownerState;return[n.loadingIndicator,n["loadingIndicator".concat((0,T.Z)(e.loadingPosition))]]}})((function(r){var n=r.theme,e=r.ownerState;return(0,U.Z)({position:"absolute",visibility:"visible",display:"flex"},"start"===e.loadingPosition&&("outlined"===e.variant||"contained"===e.variant)&&{left:"small"===e.size?10:14},"start"===e.loadingPosition&&"text"===e.variant&&{left:6},"center"===e.loadingPosition&&{left:"50%",transform:"translate(-50%)",color:(n.vars||n).palette.action.disabled},"end"===e.loadingPosition&&("outlined"===e.variant||"contained"===e.variant)&&{right:"small"===e.size?10:14},"end"===e.loadingPosition&&"text"===e.variant&&{right:6},"start"===e.loadingPosition&&e.fullWidth&&{position:"relative",left:-10},"end"===e.loadingPosition&&e.fullWidth&&{position:"relative",right:-10})})),fr=v.forwardRef((function(r,n){var e=(0,R.Z)({props:r,name:"MuiLoadingButton"}),i=e.children,t=e.disabled,a=void 0!==t&&t,o=e.id,s=e.loading,c=void 0!==s&&s,l=e.loadingIndicator,d=e.loadingPosition,u=void 0===d?"center":d,h=e.variant,p=void 0===h?"text":h,f=(0,W.Z)(e,ur),g=F(o),v=null!=l?l:(0,y.jsx)(cr,{"aria-labelledby":g,color:"inherit",size:16}),x=(0,U.Z)({},e,{disabled:a,loading:c,loadingIndicator:v,loadingPosition:u,variant:p}),b=function(r){var n=r.loading,e=r.loadingPosition,i=r.classes,t={root:["root",n&&"loading"],startIcon:[n&&"startIconLoading".concat((0,T.Z)(e))],endIcon:[n&&"endIconLoading".concat((0,T.Z)(e))],loadingIndicator:["loadingIndicator",n&&"loadingIndicator".concat((0,T.Z)(e))]},a=(0,A.Z)(t,lr,i);return(0,U.Z)({},i,a)}(x),m=c?(0,y.jsx)(pr,{className:b.loadingIndicator,ownerState:x,children:v}):null;return(0,y.jsxs)(hr,(0,U.Z)({disabled:a||c,id:g,ref:n},f,{variant:p,classes:b,ownerState:x,children:["end"===x.loadingPosition?i:m,"end"===x.loadingPosition?m:i]}))})),gr=function(){var r=(0,x.C)((function(r){return r.arbitrage})),n=r.currencies,e=r.pairs,i=r.pair1,t=r.pair2,u=r.pair3,h=r.isLoadingPairs,p=(0,x.T)();(0,v.useEffect)((function(){return function(){p((0,j.Qh)())}}),[]);var f=[],g=[],m=[],_="";if(n.length){var k=n.map((function(r){return r.symbol}));f=k.filter((function(r){return r.includes("USDT")})),_=i?i.replace(/USDT/,""):"",g=k.filter((function(r){return r.includes(_)&&!r.includes("USDT")}));var P=new RegExp(_),S=t?t.replace(P,""):"";m=k.filter((function(r){return r.includes("".concat(S,"USDT"))||r.includes("USDT".concat(S))}))}var I=(0,N.Z)(e,3),L=I[0],W=I[1],U=I[2],T={};e.length&&(L.symbol.endsWith("USDT")&&W.symbol.endsWith(_)&&U.symbol.endsWith("USDT")&&(T={price1:+L.ask,price2:+W.ask,price3:+U.bid,result:+(100/+L.ask/+W.ask*+U.bid-100).toFixed(2)}),L.symbol.endsWith("USDT")&&W.symbol.endsWith(_)&&U.symbol.startsWith("USDT")&&(T={price1:+L.ask,price2:+W.ask,price3:+U.ask,result:+(100/+L.ask/+W.ask/+U.ask-100).toFixed(2)}),L.symbol.endsWith("USDT")&&W.symbol.startsWith(_)&&U.symbol.endsWith("USDT")&&(T={price1:+L.ask,price2:+W.bid,price3:+U.bid,result:+(100/+L.ask*+W.bid*+U.bid-100).toFixed(2)}),L.symbol.endsWith("USDT")&&W.symbol.startsWith(_)&&U.symbol.startsWith("USDT")&&(T={price1:+L.ask,price2:+W.bid,price3:+U.ask,result:+(100/+L.ask*+W.bid/+U.ask-100).toFixed(2)}),L.symbol.startsWith("USDT")&&W.symbol.endsWith(_)&&U.symbol.endsWith("USDT")&&(T={price1:+L.bid,price2:+W.ask,price3:+U.bid,result:+(100*+L.bid/+W.ask*+U.bid-100).toFixed(2)}),L.symbol.startsWith("USDT")&&W.symbol.endsWith(_)&&U.symbol.startsWith("USDT")&&(T={price1:+L.bid,price2:+W.ask,price3:+U.ask,result:+(100*+L.bid/+W.ask/+U.ask-100).toFixed(2)}),L.symbol.startsWith("USDT")&&W.symbol.startsWith(_)&&U.symbol.endsWith("USDT")&&(T={price1:+L.bid,price2:+W.bid,price3:+U.bid,result:+(100*+L.bid*+W.bid*+U.bid-100).toFixed(2)}),L.symbol.startsWith("USDT")&&W.symbol.startsWith(_)&&U.symbol.startsWith("USDT")&&(T={price1:+L.bid,price2:+W.bid,price3:+U.bid,result:+(100*+L.bid*+W.bid/+U.ask-100).toFixed(2)}));return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)("section",{className:a,children:[(0,y.jsxs)("ul",{className:o,children:[(0,y.jsxs)("li",{children:[(0,y.jsx)("p",{className:s,children:T.price1?(0,Z.J2)(T.price1):"Price"}),(0,y.jsx)(D.Z,{id:"pair-1",value:i,onChange:function(r,n){return function(r,n){"string"===typeof n&&p((0,j.AB)(n))}(0,n)},sx:{width:200},disablePortal:!0,options:f,renderInput:function(r){return(0,y.jsx)(C.Z,(0,w.Z)((0,w.Z)({},r),{},{label:"Pair 1"}))}})]}),(0,y.jsxs)("li",{children:[(0,y.jsx)("p",{className:s,children:T.price2?(0,Z.J2)(T.price2):"Price"}),(0,y.jsx)(D.Z,{id:"pair-2",value:t,onChange:function(r,n){"string"===typeof n&&p((0,j.GD)(n))},sx:{width:200},disablePortal:!0,options:g,renderInput:function(r){return(0,y.jsx)(C.Z,(0,w.Z)((0,w.Z)({},r),{},{label:"Pair 2"}))}})]}),(0,y.jsxs)("li",{children:[(0,y.jsx)("p",{className:s,children:T.price3?(0,Z.J2)(T.price3):"Price"}),(0,y.jsx)(D.Z,{id:"pair-3",value:u,onChange:function(r,n){"string"===typeof n&&p((0,j.HG)(n))},sx:{width:200},disablePortal:!0,options:m,renderInput:function(r){return(0,y.jsx)(C.Z,(0,w.Z)((0,w.Z)({},r),{},{label:"Pair 3"}))}})]})]}),(0,y.jsx)(fr,{className:l,loading:h,endIcon:(0,y.jsx)("svg",{className:d,children:(0,y.jsx)("use",{href:b.Z+"#arrow_right"})}),loadingPosition:"end",variant:"outlined",onClick:function(){return function(){if(i&&t&&u){var r={pair1:i,pair2:t,pair3:u};p((0,j.p1)(r))}}()},children:"Check"}),(0,y.jsxs)("p",{className:c,children:["Result: ",T.result?"".concat(T.result," %"):""]})]})})},vr=e(4745),xr=function(){(0,vr.ej)(vr.xE);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(i.Z,{}),(0,y.jsx)(gr,{}),(0,y.jsx)(I,{})]})}},8418:function(r,n,e){"use strict";e.d(n,{J2:function(){return t},eX:function(){return a},yC:function(){return i}});var i=function(r){return new Intl.NumberFormat("ua-UA").format(r)},t=function(r){var n=new RegExp(/\.?0*$/);return r<1e3?String(r).replace(n,""):i(r)},a=function(r){return r<1e-8?Math.trunc(1e10*r)/1e10:r<1e-6?Math.trunc(1e8*r)/1e8:r<1e-4?Math.trunc(1e6*r)/1e6:r<.01?Math.trunc(1e4*r)/1e4:Math.trunc(100*r)/100}},1694:function(r,n){var e;!function(){"use strict";var i={}.hasOwnProperty;function t(){for(var r=[],n=0;n<arguments.length;n++){var e=arguments[n];if(e){var a=typeof e;if("string"===a||"number"===a)r.push(e);else if(Array.isArray(e)){if(e.length){var o=t.apply(null,e);o&&r.push(o)}}else if("object"===a)if(e.toString===Object.prototype.toString)for(var s in e)i.call(e,s)&&e[s]&&r.push(s);else r.push(e.toString())}}return r.join(" ")}r.exports?(t.default=t,r.exports=t):void 0===(e=function(){return t}.apply(n,[]))||(r.exports=e)}()},2591:function(r,n,e){"use strict";var i=e(1413),t=e(5987),a=e(1694),o=e.n(a),s=e(2791),c=e(162),l=e(184),d=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],u=s.forwardRef((function(r,n){var e=r.bsPrefix,a=r.className,s=r.striped,u=r.bordered,h=r.borderless,p=r.hover,f=r.size,g=r.variant,v=r.responsive,x=(0,t.Z)(r,d),b=(0,c.vE)(e,"table"),m=o()(a,b,g&&"".concat(b,"-").concat(g),f&&"".concat(b,"-").concat(f),s&&"".concat(b,"-").concat("string"===typeof s?"striped-".concat(s):"striped"),u&&"".concat(b,"-bordered"),h&&"".concat(b,"-borderless"),p&&"".concat(b,"-hover")),j=(0,l.jsx)("table",(0,i.Z)((0,i.Z)({},x),{},{className:m,ref:n}));if(v){var Z="".concat(b,"-responsive");return"string"===typeof v&&(Z="".concat(Z,"-").concat(v)),(0,l.jsx)("div",{className:Z,children:j})}return j}));n.Z=u},162:function(r,n,e){"use strict";e.d(n,{SC:function(){return s},vE:function(){return o}});var i=e(2791),t=(e(184),["xxl","xl","lg","md","sm","xs"]),a=i.createContext({prefixes:{},breakpoints:t,minBreakpoint:"xs"});a.Consumer,a.Provider;function o(r,n){var e=(0,i.useContext)(a).prefixes;return r||e[n]||n}function s(){return"rtl"===(0,i.useContext)(a).dir}}}]);
//# sourceMappingURL=945.d80ff705.chunk.js.map