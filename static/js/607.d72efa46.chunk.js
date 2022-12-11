"use strict";(self.webpackChunkcrypto_project=self.webpackChunkcrypto_project||[]).push([[607],{7931:function(e,n,r){var t=r(7246),i=r(2791),s=r(184),c=(0,i.forwardRef)((function(e,n){var r=e.page,i=e.setPage,c=e.count,a=e.articles;return(0,s.jsx)(t.Z,{count:c,shape:"rounded",page:r,onChange:function(e,r){i(a?r-1:r),n&&function(e){e.scrollIntoView({behavior:"smooth",block:"start"})}(n.current)},style:{marginBottom:15}})}));n.Z=c},7607:function(e,n,r){r.r(n),r.d(n,{default:function(){return b}});var t=r(885),i="Coins_table__PR9uh",s="Coins_tableCoins__dbVk3",c="Coins_link__yAojc",a="Coins_percentagePlus__jkipC",o="Coins_percentageMinus__VR4Pb",l="Coins_pagination__-qiwy",h=r(2791),d=r(2591),_=r(3504),u=r(3496),x=r(184),p=function(e){var n={chart:{animations:{enabled:!1},id:"area-datetime",type:"area",toolbar:{show:!1},sparkline:{enabled:!0}},grid:{show:!1},fill:{type:"gradient",gradient:{type:"vertical",opacityFrom:.1,opacityTo:.7,stops:[0,100]}},tooltip:{enabled:!0,theme:"dark",style:{fontSize:"12px",fontFamily:void 0},x:{show:!1},y:{formatter:function(e){return e>5?e.toFixed(2):e.toFixed(5)},title:{formatter:function(e){return"$"}}},marker:{show:!1}},xaxis:{type:"numeric",labels:{show:!1}},yaxis:{show:!1},stroke:{show:!0,curve:"straight",width:2}},r=[{name:"price",type:"area",data:e.data}];return(0,x.jsx)(u.Z,{options:n,series:r,type:"line",width:"100%",height:"60px"})},j=r(4329),g=r(8418),m=function(){var e=(0,j.C)((function(e){return e.crypto.markets})),n=function(e){return e>0?a:o};return(0,x.jsx)(x.Fragment,{children:e.map((function(e){var r,t,i;return(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:e.market_cap_rank}),(0,x.jsx)("td",{children:(0,x.jsxs)(_.OL,{to:"/crypto/coins/".concat(e.id),className:c,children:[(0,x.jsx)("img",{src:e.image,alt:e.name,height:30,width:30}),(0,x.jsx)("p",{children:e.name}),(0,x.jsx)("p",{children:e.symbol.toUpperCase()})]})}),(0,x.jsxs)("td",{children:[(0,g.J2)(e.current_price)," $"]}),(0,x.jsxs)("td",{className:n(e.price_change_percentage_1h_in_currency),children:[null===(r=e.price_change_percentage_1h_in_currency)||void 0===r?void 0:r.toFixed(2)," %"]}),(0,x.jsxs)("td",{className:n(e.price_change_percentage_24h_in_currency),children:[null===(t=e.price_change_percentage_24h_in_currency)||void 0===t?void 0:t.toFixed(2)," %"]}),(0,x.jsxs)("td",{className:n(e.price_change_percentage_7d_in_currency),children:[null===(i=e.price_change_percentage_7d_in_currency)||void 0===i?void 0:i.toFixed(2)," %"]}),(0,x.jsxs)("td",{children:[(0,g.yC)(e.total_volume)," $"]}),(0,x.jsxs)("td",{children:[(0,g.yC)(e.market_cap)," $"]}),(0,x.jsx)("td",{children:(0,x.jsx)(p,{data:e.sparkline_in_7d.price})})]},e.id)}))})},f=h.memo(m),v=r(7931),y=r(7463),C=r(5048),N=r(8801),b=function(){var e=(0,j.C)((function(e){return e.crypto.isLoadingCrypto})),n=(0,j.T)(),r=(0,h.useState)(1),c=(0,t.Z)(r,2),a=c[0],o=c[1];return(0,h.useEffect)((function(){n((0,y.pd)(a))}),[a]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(C.Z,{}),e?(0,x.jsx)(N.R,{}):(0,x.jsxs)("section",{className:"".concat(i," ").concat(s),children:[(0,x.jsx)("h1",{className:"hidden",children:"Cryptocurrencies"}),(0,x.jsxs)(d.Z,{hover:!0,variant:"dark",children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{children:"#"}),(0,x.jsx)("th",{children:"Coin"}),(0,x.jsx)("th",{children:"Price"}),(0,x.jsx)("th",{children:"1h"}),(0,x.jsx)("th",{children:"24h"}),(0,x.jsx)("th",{children:"7d"}),(0,x.jsx)("th",{children:"Total Volume"}),(0,x.jsx)("th",{children:"Market Capitalization"}),(0,x.jsx)("th",{children:"Last\xa07\xa0days"})]})}),(0,x.jsx)("tbody",{children:(0,x.jsx)(f,{})})]})]}),(0,x.jsx)("div",{className:l,children:(0,x.jsx)(v.Z,{page:a,setPage:o,count:50})})]})}},8801:function(e,n,r){r.d(n,{R:function(){return c}});var t=r(5716),i=r(2579),s=r(184),c=function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.y,{baseColor:"#2c2b2b",highlightColor:"#4d4d4d",children:(0,s.jsx)("div",{className:t.Z.table,style:{marginBottom:-17,marginTop:-1},children:(0,s.jsx)("div",{children:(0,s.jsx)(i.Z,{height:50,width:"100%"})})})}),(0,s.jsx)(i.y,{baseColor:"#121212",highlightColor:"#262626",children:(0,s.jsx)("div",{className:t.Z.table,style:{marginBottom:15},children:(0,s.jsx)("div",{children:(0,s.jsx)(i.Z,{count:15,height:53,width:"100%"})})})})]})}},5048:function(e,n,r){r.d(n,{Z:function(){return a}});var t={iconTime:"NavCrypto_iconTime__I4Vhv",hidden:"NavCrypto_hidden__tN0cv",container:"NavCrypto_container__Wd1RQ",navCrypto:"NavCrypto_navCrypto__C9pNy",listLeft:"NavCrypto_listLeft__NSkYO",leftLink:"NavCrypto_leftLink__Y2MD1",arrow:"NavCrypto_arrow__v0AAw",home:"NavCrypto_home__deF99",currentPath:"NavCrypto_currentPath__sTRX4",listCenter:"NavCrypto_listCenter__bfrWA"},i=r(3504),s=r(3763),c=r(184),a=function(){var e=window.location.hash,n=/#\/crypto\/coins\//i,r=n.test(e);return e=e.replace(r?n:/#\/crypto\//i,""),(0,c.jsx)("div",{className:t.container,children:(0,c.jsxs)("div",{className:t.navCrypto,children:[(0,c.jsxs)("ul",{className:t.listLeft,children:[(0,c.jsx)("li",{children:(0,c.jsxs)(i.OL,{to:"/",className:t.leftLink,children:[(0,c.jsx)("svg",{className:t.home,children:(0,c.jsx)("use",{href:s.Z+"#home"})}),(0,c.jsx)("svg",{className:t.arrow,children:(0,c.jsx)("use",{href:s.Z+"#arrow_right"})})]})}),(0,c.jsx)("li",{children:(0,c.jsxs)(i.OL,{to:"/crypto/coins",className:t.leftLink,children:["Crypto",(0,c.jsx)("svg",{className:t.arrow,children:(0,c.jsx)("use",{href:s.Z+"#arrow_right"})})]})}),(0,c.jsx)("li",{className:r?"":"hidden",children:(0,c.jsxs)(i.OL,{to:"/crypto/coins",className:t.leftLink,children:["Coins",(0,c.jsx)("svg",{className:t.arrow,children:(0,c.jsx)("use",{href:s.Z+"#arrow_right"})})]})}),(0,c.jsx)("li",{children:(0,c.jsx)("span",{className:t.currentPath,children:e})})]}),(0,c.jsxs)("ul",{className:t.listCenter,children:[(0,c.jsx)("li",{children:(0,c.jsx)(i.OL,{to:"/crypto/coins",className:t.centerLink,children:"Coins"})}),(0,c.jsx)("li",{children:(0,c.jsx)(i.OL,{to:"/crypto/exchanges",className:t.centerLink,children:"Exchanges"})}),(0,c.jsx)("li",{children:(0,c.jsx)(i.OL,{to:"/crypto/arbitrage",className:t.centerLink,children:"Arbitrage"})}),(0,c.jsx)("li",{children:(0,c.jsx)(i.OL,{to:"/crypto/converter",className:t.centerLink,children:"Converter"})})]})]})})}},8418:function(e,n,r){r.d(n,{J2:function(){return i},eX:function(){return s},yC:function(){return t}});var t=function(e){return new Intl.NumberFormat("ua-UA").format(e)},i=function(e){var n=new RegExp(/\.?0*$/);return e<1e3?String(e).replace(n,""):t(e)},s=function(e){return e<1e-8?Math.trunc(1e10*e)/1e10:e<1e-6?Math.trunc(1e8*e)/1e8:e<1e-4?Math.trunc(1e6*e)/1e6:e<.01?Math.trunc(1e4*e)/1e4:Math.trunc(100*e)/100}},2591:function(e,n,r){var t=r(1413),i=r(5987),s=r(1694),c=r.n(s),a=r(2791),o=r(162),l=r(184),h=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],d=a.forwardRef((function(e,n){var r=e.bsPrefix,s=e.className,a=e.striped,d=e.bordered,_=e.borderless,u=e.hover,x=e.size,p=e.variant,j=e.responsive,g=(0,i.Z)(e,h),m=(0,o.vE)(r,"table"),f=c()(s,m,p&&"".concat(m,"-").concat(p),x&&"".concat(m,"-").concat(x),a&&"".concat(m,"-").concat("string"===typeof a?"striped-".concat(a):"striped"),d&&"".concat(m,"-bordered"),_&&"".concat(m,"-borderless"),u&&"".concat(m,"-hover")),v=(0,l.jsx)("table",(0,t.Z)((0,t.Z)({},g),{},{className:f,ref:n}));if(j){var y="".concat(m,"-responsive");return"string"===typeof j&&(y="".concat(y,"-").concat(j)),(0,l.jsx)("div",{className:y,children:v})}return v}));n.Z=d},5716:function(e,n){n.Z={iconTime:"Exchanges_iconTime__NBobL",hidden:"Exchanges_hidden__uYU1h",table:"Exchanges_table__uW4Zi",tableCoins:"Exchanges_tableCoins__gnOYL",link:"Exchanges_link__sYGLk",percentagePlus:"Exchanges_percentagePlus__B2f1-",percentageMinus:"Exchanges_percentageMinus__LV62d",pagination:"Exchanges_pagination__pd8z5",tableExchanges:"Exchanges_tableExchanges__LnRmN"}}}]);
//# sourceMappingURL=607.d72efa46.chunk.js.map