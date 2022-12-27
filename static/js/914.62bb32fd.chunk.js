"use strict";(self.webpackChunkcrypto_project=self.webpackChunkcrypto_project||[]).push([[914],{1914:function(e,r,n){n.r(r),n.d(r,{default:function(){return w}});var t=n(1413),s=n(885),c=n(2791),a=n(492),i=n(6777),o=n(4329),u=n(5048),l=n(4731),p=n(692),f=n(3763),h="Converter_converterInside__HXnyE",v="Converter_converterInput__mqEWt",_="Converter_hero__9P5HA",d="Converter_heroInside__sxV5A",x="Converter_converter__rqYfb",j="Converter_autocomplete__W5LfP",m="Converter_converterText__Od9OX",C="Converter_converterInputWrapper__JSSxj",N="Converter_lastUpdateContainer__LK6m5",g="Converter_refreshIcon__J30BA",y="Converter_lastUpdateText__jvRni",L=n(184),b=1e3,T=function(e){var r=e.coin,n=(0,o.T)(),t=(0,o.C)((function(e){return e.converter.price})),a=(0,c.useState)(0),i=(0,s.Z)(a,2),u=i[0],p=i[1],h=(0,c.useState)(b),v=(0,s.Z)(h,2),_=v[0],d=v[1];return(0,c.useEffect)((function(){var e=null;if(clearInterval(e),t)return e=setTimeout((function(){p((function(e){return e+1})),59===u&&(p(1),d(6e4))}),_),function(){return clearInterval(e)}}),[u,t]),(0,c.useEffect)((function(){p(0),d(b)}),[r]),(0,L.jsxs)("div",{className:N,children:[(0,L.jsxs)("p",{className:y,children:["Last price update:"," ",(0,L.jsxs)("span",{children:[u,_===b?"s":"m"]})," ","ago"]}),(0,L.jsx)("svg",{className:g,role:"button",onClick:function(){n((0,l.Kf)()),n((0,l.tw)(r.pair)),p(0),d(b)},children:(0,L.jsx)("use",{href:f.Z+"#refresh"})})]})},k=n(8418),w=function(){var e=(0,o.C)((function(e){return e.converter})),r=e.coinsList,n=e.price,f=e.isLoadingConverter,N=(0,o.T)(),g=(0,c.useState)({firstLetter:"B",pair:"BTCUSDT"}),y=(0,s.Z)(g,2),b=y[0],w=y[1],Z=(0,c.useState)(1),S=(0,s.Z)(Z,2),O=S[0],I=S[1],M=(0,c.useState)(""),E=(0,s.Z)(M,2),A=E[0],P=E[1];(0,c.useEffect)((function(){r.length||N((0,l.Mu)())}),[]),(0,c.useEffect)((function(){return I(1),P(""),N((0,l.tw)(b.pair)),function(){N((0,l.Kf)())}}),[b.pair]),(0,c.useEffect)((function(){return O||I(1),P(n&&O?n*O:""),function(){return P("")}}),[n]);var U=r.map((function(e){return{firstLetter:e[0].toUpperCase(),pair:e}}));return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(u.Z,{}),(0,L.jsxs)("section",{children:[(0,L.jsx)("div",{className:_,children:(0,L.jsx)("h1",{className:d,children:"Cryptocurrency Converter"})}),(0,L.jsx)("div",{className:x,children:(0,L.jsxs)("div",{className:h,children:[(0,L.jsx)(a.Z,{id:"coinsList",className:j,value:b,onChange:function(e,r){r&&w({firstLetter:r.firstLetter,pair:r.pair})},options:U.sort((function(e,r){return e.firstLetter.localeCompare(r.firstLetter)})),groupBy:function(e){return e.firstLetter},getOptionLabel:function(e){return e.pair.replace(/USDT/,"")},renderInput:function(e){return(0,L.jsx)(i.Z,(0,t.Z)((0,t.Z)({},e),{},{label:"Coin"}))}}),(0,L.jsx)("input",{type:"number",className:v,value:O,disabled:!n,onChange:function(e){e.currentTarget.value?(I(Number(e.currentTarget.value)),P((0,k.eX)(Number(e.currentTarget.value)*(n||0)))):(I(""),P(""))}}),(0,L.jsx)("p",{className:m,children:"Convert to USDT"}),(0,L.jsxs)("div",{className:C,children:[(0,L.jsx)("input",{type:"number",className:v,value:A,disabled:!n,onChange:function(e){P(Number(e.currentTarget.value)||""),e.currentTarget.value?I((0,k.eX)(Number(e.currentTarget.value)/n)):I("")}}),f&&(0,L.jsx)(p.$j,{className:"spinnerConverter"})]}),(0,L.jsx)(T,{coin:b})]})})]})]})}},5048:function(e,r,n){n.d(r,{Z:function(){return i}});var t=n(3504),s=n(3763),c={iconTime:"NavCrypto_iconTime__I4Vhv",hidden:"NavCrypto_hidden__tN0cv",percentagePlus:"NavCrypto_percentagePlus__eSklH",percentageMinus:"NavCrypto_percentageMinus__1qsQk",container:"NavCrypto_container__Wd1RQ",navCrypto:"NavCrypto_navCrypto__C9pNy",listLeft:"NavCrypto_listLeft__NSkYO",leftLink:"NavCrypto_leftLink__Y2MD1",arrow:"NavCrypto_arrow__v0AAw",home:"NavCrypto_home__deF99",currentPath:"NavCrypto_currentPath__sTRX4",listCenter:"NavCrypto_listCenter__bfrWA"},a=n(184),i=function(){var e=window.location.hash,r=/#\/crypto\/coins\//i,n=r.test(e);return e=e.replace(n?r:/#\/crypto\//i,""),e=n?e.substring(0,17)+(e.length>18?"...":""):e,(0,a.jsx)("div",{className:c.container,children:(0,a.jsxs)("div",{className:c.navCrypto,children:[(0,a.jsxs)("ul",{className:c.listLeft,children:[(0,a.jsx)("li",{children:(0,a.jsxs)(t.OL,{to:"/",className:c.leftLink,children:[(0,a.jsx)("svg",{className:c.home,children:(0,a.jsx)("use",{href:s.Z+"#home"})}),(0,a.jsx)("svg",{className:c.arrow,children:(0,a.jsx)("use",{href:s.Z+"#arrow_right"})})]})}),(0,a.jsx)("li",{children:(0,a.jsxs)(t.OL,{to:"/crypto/coins",className:c.leftLink,children:["Crypto",(0,a.jsx)("svg",{className:c.arrow,children:(0,a.jsx)("use",{href:s.Z+"#arrow_right"})})]})}),(0,a.jsx)("li",{className:n?"":c.hidden,children:(0,a.jsxs)(t.OL,{to:"/crypto/coins",className:c.leftLink,children:["Coins",(0,a.jsx)("svg",{className:c.arrow,children:(0,a.jsx)("use",{href:s.Z+"#arrow_right"})})]})}),(0,a.jsx)("li",{children:(0,a.jsx)("span",{className:c.currentPath,children:e})})]}),(0,a.jsxs)("ul",{className:c.listCenter,children:[(0,a.jsx)("li",{children:(0,a.jsx)(t.OL,{to:"/crypto/coins",className:c.centerLink,children:"Coins"})}),(0,a.jsx)("li",{children:(0,a.jsx)(t.OL,{to:"/crypto/exchanges",className:c.centerLink,children:"Exchanges"})}),(0,a.jsx)("li",{children:(0,a.jsx)(t.OL,{to:"/crypto/arbitrage",className:c.centerLink,children:"Arbitrage"})}),(0,a.jsx)("li",{children:(0,a.jsx)(t.OL,{to:"/crypto/converter",className:c.centerLink,children:"Converter"})})]})]})})}},8418:function(e,r,n){n.d(r,{J2:function(){return s},eX:function(){return c},po:function(){return a},yC:function(){return t}});var t=function(e){return new Intl.NumberFormat("ua-UA").format(e)},s=function(e){var r=new RegExp(/\.?0*$/);return e<1e3?String(e).replace(r,""):t(e)},c=function(e){return e<1e-8?Math.trunc(1e10*e)/1e10:e<1e-6?Math.trunc(1e8*e)/1e8:e<1e-4?Math.trunc(1e6*e)/1e6:e<.01?Math.trunc(1e4*e)/1e4:Math.trunc(100*e)/100},a=function(e){return e>0?"percentagePlus":"percentageMinus"}}}]);
//# sourceMappingURL=914.62bb32fd.chunk.js.map