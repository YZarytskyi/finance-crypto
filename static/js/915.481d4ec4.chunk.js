"use strict";(self.webpackChunkcrypto_project=self.webpackChunkcrypto_project||[]).push([[915],{50915:function(e,r,t){t.r(r),t.d(r,{default:function(){return I}});var n=t(1413),u=t(70885),c=t(72791),a=t(80492),s=t(96777),i=t(34956),o=t(87986),f=t(20093),l=t(93763),p="Converter_converterInside__kgtqp",v="Converter_converterInput__+21MV",_="Converter_hero__V6f5t",d="Converter_heroInside__XW2vL",C="Converter_converter__TcsZy",h="Converter_autocomplete__+WU9s",m="Converter_converterText__T90eT",x="Converter_converterInputWrapper__QERIU",g="Converter_lastUpdateContainer__eQn3x",j="Converter_refreshIcon__sQfQc",N="Converter_lastUpdateText__SgDHO",T=t(80184),b=1e3,L=function(e){var r=e.coin,t=(0,i.T)(),n=(0,i.C)((function(e){return e.converter.price})),a=(0,c.useState)(0),s=(0,u.Z)(a,2),f=s[0],p=s[1],v=(0,c.useState)(b),_=(0,u.Z)(v,2),d=_[0],C=_[1];return(0,c.useEffect)((function(){var e=null;if(clearInterval(e),n)return e=setTimeout((function(){p((function(e){return e+1})),59===f&&(p(1),C(6e4))}),d),function(){return clearInterval(e)}}),[f,n]),(0,c.useEffect)((function(){p(0),C(b)}),[r]),(0,T.jsxs)("div",{className:g,children:[(0,T.jsxs)("p",{className:N,children:["Last price update:"," ",(0,T.jsxs)("span",{children:[f,d===b?"s":"m"]})," ","ago"]}),(0,T.jsx)("svg",{className:j,role:"button",onClick:function(){t((0,o.Kf)()),t((0,o.tw)(r.pair)),p(0),C(b)},children:(0,T.jsx)("use",{href:l.Z+"#refresh"})})]})},Z=t(68418),I=function(){var e=(0,i.C)((function(e){return e.converter})),r=e.coinsList,t=e.price,l=e.isLoadingConverter,g=(0,i.T)(),j=(0,c.useState)({firstLetter:"B",pair:"BTCUSDT"}),N=(0,u.Z)(j,2),b=N[0],I=N[1],S=(0,c.useState)(1),y=(0,u.Z)(S,2),U=y[0],M=y[1],E=(0,c.useState)(""),k=(0,u.Z)(E,2),w=k[0],D=k[1];(0,c.useEffect)((function(){r.length||g((0,o.Mu)())}),[]),(0,c.useEffect)((function(){return M(1),D(""),g((0,o.tw)(b.pair)),function(){g((0,o.Kf)())}}),[b.pair]),(0,c.useEffect)((function(){return U||M(1),D(t&&U?t*U:""),function(){return D("")}}),[t]);var Q=r.map((function(e){return{firstLetter:e[0].toUpperCase(),pair:e}}));return(0,T.jsxs)("section",{children:[(0,T.jsx)("div",{className:_,children:(0,T.jsx)("h1",{className:d,children:"Cryptocurrency Converter"})}),(0,T.jsx)("div",{className:C,children:(0,T.jsxs)("div",{className:p,children:[(0,T.jsx)(a.Z,{id:"coinsList",className:h,value:b,onChange:function(e,r){r&&I({firstLetter:r.firstLetter,pair:r.pair})},options:Q.sort((function(e,r){return e.firstLetter.localeCompare(r.firstLetter)})),groupBy:function(e){return e.firstLetter},getOptionLabel:function(e){return e.pair.replace(/USDT/,"")},renderInput:function(e){return(0,T.jsx)(s.Z,(0,n.Z)((0,n.Z)({},e),{},{label:"Coin"}))}}),(0,T.jsx)("input",{type:"number",className:v,value:U,disabled:!t,onChange:function(e){e.currentTarget.value?(M(Number(e.currentTarget.value)),D((0,Z.eX)(Number(e.currentTarget.value)*(t||0)))):(M(""),D(""))}}),(0,T.jsx)("p",{className:m,children:"Convert to USDT"}),(0,T.jsxs)("div",{className:x,children:[(0,T.jsx)("input",{type:"number",className:v,value:w,disabled:!t,onChange:function(e){D(Number(e.currentTarget.value)||""),e.currentTarget.value?M((0,Z.eX)(Number(e.currentTarget.value)/t)):M("")}}),l&&(0,T.jsx)(f.$j,{className:"spinnerConverter"})]}),(0,T.jsx)(L,{coin:b})]})})]})}},68418:function(e,r,t){t.d(r,{J2:function(){return u},eX:function(){return c},po:function(){return a},yC:function(){return n}});var n=function(e){return new Intl.NumberFormat("ua-UA").format(e)},u=function(e){var r=new RegExp(/\.?0*$/);return e<1e3?String(e).replace(r,""):n(e)},c=function(e){return e<1e-8?Math.trunc(1e10*e)/1e10:e<1e-6?Math.trunc(1e8*e)/1e8:e<1e-4?Math.trunc(1e6*e)/1e6:e<.01?Math.trunc(1e4*e)/1e4:Math.trunc(100*e)/100},a=function(e){return e>0?"percentagePlus":"percentageMinus"}}}]);
//# sourceMappingURL=915.481d4ec4.chunk.js.map