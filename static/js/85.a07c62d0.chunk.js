"use strict";(self.webpackChunkcrypto_project=self.webpackChunkcrypto_project||[]).push([[85],{4085:function(e,r,t){t.r(r),t.d(r,{default:function(){return Z}});var n=t(1413),s=t(885),u="Converter_converterInside__HXnyE",i="Converter_converterInput__mqEWt",a="Converter_hero__9P5HA",o="Converter_heroInside__sxV5A",c="Converter_converter__rqYfb",f="Converter_autocomplete__W5LfP",l="Converter_converterText__Od9OX",p="Converter_converterInputWrapper__JSSxj",v="Converter_lastUpdateContainer__LK6m5",d="Converter_refreshIcon__J30BA",m="Converter_lastUpdateText__jvRni",x=t(4329),_=t(5048),h=t(2791),j=t(5515),C=t(6777),g=t(492),N="Spinner_spinner__H+S+8",b=t(184),T=function(){return(0,b.jsx)("svg",{className:N,xmlns:"http://www.w3.org/2000/svg",version:"1.0",viewBox:"0 0 128 128",children:(0,b.jsxs)("g",{children:[(0,b.jsxs)("linearGradient",{id:"a",children:[(0,b.jsx)("stop",{offset:"0%"}),(0,b.jsx)("stop",{offset:"100%",stopColor:"#0090fe"})]}),(0,b.jsxs)("linearGradient",{id:"b",children:[(0,b.jsx)("stop",{offset:"0%"}),(0,b.jsx)("stop",{offset:"100%",stopColor:"#90e6fe"})]}),(0,b.jsx)("path",{d:"M64 .98A63.02 63.02 0 1 1 .98 64 63.02 63.02 0 0 1 64 .98zm0 15.76A47.26 47.26 0 1 1 16.74 64 47.26 47.26 0 0 1 64 16.74z",fillRule:"evenodd",fill:"url(#a)"}),(0,b.jsx)("path",{d:"M64.12 125.54A61.54 61.54 0 1 1 125.66 64a61.54 61.54 0 0 1-61.54 61.54zm0-121.1A59.57 59.57 0 1 0 123.7 64 59.57 59.57 0 0 0 64.1 4.43zM64 115.56a51.7 51.7 0 1 1 51.7-51.7 51.7 51.7 0 0 1-51.7 51.7zM64 14.4a49.48 49.48 0 1 0 49.48 49.48A49.48 49.48 0 0 0 64 14.4z",fillRule:"evenodd",fill:"url(#b)"}),(0,b.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 64 64",to:"360 64 64",dur:"800ms",repeatCount:"indefinite"})]})})},L=t(3763),S=function(e){var r=e.coin,t=(0,x.T)(),n=(0,x.C)((function(e){return e.converter.price})),u=(0,h.useState)(0),i=(0,s.Z)(u,2),a=i[0],o=i[1],c=(0,h.useState)(1e3),f=(0,s.Z)(c,2),l=f[0],p=f[1],_=null;return(0,h.useEffect)((function(){if(clearInterval(_),n)return _=setTimeout((function(){o((function(e){return e+1})),59===a&&(o(1),p(6e4))}),l),function(){return clearInterval(_)}}),[a,n]),(0,h.useEffect)((function(){o(0),p(1e3)}),[r]),(0,b.jsxs)("div",{className:v,children:[(0,b.jsxs)("p",{className:m,children:["Last price update:"," ",(0,b.jsxs)("span",{children:[a,1e3===l?"s":"m"]})," ","ago"]}),(0,b.jsx)("svg",{className:d,role:"button",onClick:function(){return t((0,j.Kf)()),t((0,j.tw)(r.pair)),o(0),void p(1e3)},children:(0,b.jsx)("use",{href:L.Z+"#refresh"})})]})},w=t(8418),Z=function(){var e=(0,x.C)((function(e){return e.converter})),r=e.coinsList,t=e.price,v=e.isLoadingConverter,d=(0,x.T)(),m=(0,h.useState)({firstLetter:"B",pair:"BTCUSDT"}),N=(0,s.Z)(m,2),L=N[0],Z=N[1],y=(0,h.useState)(1),M=(0,s.Z)(y,2),A=M[0],I=M[1],E=(0,h.useState)(""),U=(0,s.Z)(E,2),z=U[0],k=U[1];(0,h.useEffect)((function(){r.length||d((0,j.Mu)())}),[]),(0,h.useEffect)((function(){return I(1),k(""),d((0,j.tw)(L.pair)),function(){d((0,j.Kf)())}}),[L.pair]),(0,h.useEffect)((function(){return A||I(1),k(t&&A?t*A:""),function(){return k("")}}),[t]);var B=r.map((function(e){return{firstLetter:e[0].toUpperCase(),pair:e}}));return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(_.Z,{}),(0,b.jsxs)("section",{children:[(0,b.jsx)("div",{className:a,children:(0,b.jsx)("h1",{className:o,children:"Cryptocurrency Converter"})}),(0,b.jsx)("div",{className:c,children:(0,b.jsxs)("div",{className:u,children:[(0,b.jsx)(g.Z,{id:"coinsList",className:f,value:L,onChange:function(e,r){return function(e,r){r&&Z({firstLetter:r.firstLetter,pair:r.pair})}(0,r)},options:B.sort((function(e,r){return e.firstLetter.localeCompare(r.firstLetter)})),groupBy:function(e){return e.firstLetter},getOptionLabel:function(e){return e.pair.replace(/USDT/,"")},renderInput:function(e){return(0,b.jsx)(C.Z,(0,n.Z)((0,n.Z)({},e),{},{label:"Coin"}))}}),(0,b.jsx)("input",{type:"number",className:i,value:A,disabled:!t,onChange:function(e){return function(e){e.currentTarget.value?(I(Number(e.currentTarget.value)),k((0,w.eX)(Number(e.currentTarget.value)*(t||0)))):(I(""),k(""))}(e)}}),(0,b.jsx)("p",{className:l,children:"Convert to USDT"}),(0,b.jsxs)("div",{className:p,children:[(0,b.jsx)("input",{type:"number",className:i,value:z,disabled:!t,onChange:function(e){return function(e){k(Number(e.currentTarget.value)||""),e.currentTarget.value?I((0,w.eX)(Number(e.currentTarget.value)/t)):I("")}(e)}}),v&&(0,b.jsx)(T,{})]}),(0,b.jsx)(S,{coin:L})]})})]})]})}},8418:function(e,r,t){t.d(r,{J2:function(){return s},eX:function(){return u},yC:function(){return n}});var n=function(e){return new Intl.NumberFormat("ua-UA").format(e)},s=function(e){var r=new RegExp(/\.?0*$/);return e<1e3?String(e).replace(r,""):n(e)},u=function(e){return e<1e-8?Math.trunc(1e10*e)/1e10:e<1e-6?Math.trunc(1e8*e)/1e8:e<1e-4?Math.trunc(1e6*e)/1e6:e<.01?Math.trunc(1e4*e)/1e4:Math.trunc(100*e)/100}}}]);
//# sourceMappingURL=85.a07c62d0.chunk.js.map