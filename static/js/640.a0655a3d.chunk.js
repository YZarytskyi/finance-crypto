"use strict";(self.webpackChunkcrypto_project=self.webpackChunkcrypto_project||[]).push([[640],{1174:function(e,i,t){t.d(i,{Z:function(){return j},M:function(){return u}});var s=t(1086),r=t(2791),c=t(4329),n=t(4397),a=t(9911),l=t.p+"static/media/news.2dc6bac234f8cb4332c8.jpg",o=t(3504),h=t(3763),d=t(184),x=function(){var e=(0,c.C)((function(e){return e.articles.articles}));return(0,d.jsxs)("section",{className:s.Z.articlesLeft,children:[(0,d.jsx)(o.OL,{to:"/articles",children:(0,d.jsxs)("h2",{children:["Top Articles",(0,d.jsx)("svg",{className:s.Z.arrow,children:(0,d.jsx)("use",{href:h.Z+"#arrow_right"})})]})}),(0,d.jsx)("ul",{className:s.Z.articlesLeftList,children:e.slice(0,2).map((function(e){var i;return(0,d.jsx)("li",{children:(0,d.jsxs)(o.OL,{to:"/articles/".concat(e.id),className:s.Z.articlesLeftLink,children:[(0,d.jsx)("div",{className:s.Z.articlesLeftImg,children:(0,d.jsx)("img",{src:"https://static01.nyt.com/".concat(null===(i=e.multimedia[0])||void 0===i?void 0:i.url),alt:"News",onError:u})}),(0,d.jsxs)("p",{children:[e.headline.main.slice(0,40),"..."]}),(0,d.jsxs)("p",{style:{display:"flex",alignItems:"center",gap:4},children:[(0,d.jsx)("svg",{className:s.Z.iconTime,children:(0,d.jsx)("use",{href:h.Z+"#time"})}),e.pub_date.slice(0,10)]})]})},e.id)}))})]})},m=function(){var e=(0,c.C)((function(e){return e.articles.articles}));return(0,d.jsxs)("section",{className:s.Z.articlesRight,children:[(0,d.jsx)(o.OL,{to:"/articles",children:(0,d.jsxs)("h2",{className:s.Z.articlesRightTitle,children:["Recent Articles",(0,d.jsx)("svg",{className:s.Z.arrow,children:(0,d.jsx)("use",{href:h.Z+"#arrow_right"})})]})}),(0,d.jsx)("ul",{className:s.Z.articlesRightList,children:e.slice(2,5).map((function(e){var i;return(0,d.jsx)("li",{className:s.Z.articlesRightItem,children:(0,d.jsxs)(o.OL,{to:"/articles/".concat(e.id),className:s.Z.articlesRightLink,children:[(0,d.jsx)("div",{className:s.Z.articlesRightImg,children:(0,d.jsx)("img",{src:"https://static01.nyt.com/".concat(null===(i=e.multimedia[0])||void 0===i?void 0:i.url),alt:e.headline.main,onError:u})}),(0,d.jsxs)("div",{className:s.Z.articlesRightDescription,children:[(0,d.jsx)("p",{children:e.headline.main}),(0,d.jsxs)("p",{style:{display:"flex",alignItems:"center",gap:4},children:[(0,d.jsx)("svg",{className:s.Z.iconTime,children:(0,d.jsx)("use",{href:h.Z+"#time"})}),e.pub_date.slice(0,10)]})]})]})},e.id)}))})]})},u=function(e){e.target.onerror=null,e.target.src=l},j=function(){var e=(0,c.C)((function(e){return e.articles})),i=e.articles,t=e.isLoadingArticles,l=(0,c.T)();return(0,r.useEffect)((function(){i.length||l((0,n.Zt)())}),[]),(0,d.jsx)(d.Fragment,{children:t?(0,d.jsx)(a.E2,{}):i.length&&(0,d.jsxs)("div",{className:s.Z.articles,children:[(0,d.jsx)(x,{}),(0,d.jsx)(m,{})]})})}},9666:function(e,i,t){t.r(i),t.d(i,{default:function(){return R}});var s=t(1086),r=t(6104),c=t(3504),n=t(3763),a=t.p+"static/media/slider1.c859344f3d32e8dd2000.jpg",l=t.p+"static/media/slider2.1a0cfa0c97e5e0137dc4.jpg",o=t(4329),h=t(9911),d=t(2791),x=t(7463),m=t(8418),u=t(184),j=function(){var e,i,t,n,a,j=(0,o.C)((function(e){return e.crypto.globalData})),p=(0,o.T)();return(0,d.useEffect)((function(){Object.keys(j).length||p((0,x.SY)())}),[]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{className:"".concat(s.Z.image," ").concat(s.Z.imageCrypto),children:(0,u.jsx)("img",{src:l,alt:"Second slide"})}),(0,u.jsxs)(r.Z.Caption,{className:s.Z.caption,children:[(0,u.jsxs)("ul",{className:"".concat(s.Z.carouselInfo," ").concat(s.Z.cryptoData),children:[(0,u.jsx)("li",{children:(0,u.jsxs)(c.OL,{to:"/crypto/coins",className:s.Z.cryptoLink,children:[(0,u.jsxs)("div",{children:[null!==(e=j.total_market_cap)&&void 0!==e&&e.usd?(0,m.yC)(Number(null===(i=j.total_market_cap)||void 0===i?void 0:i.usd.toFixed(0)))+" $ ":"",(0,u.jsx)("span",{className:j.market_cap_change_percentage_24h_usd&&j.market_cap_change_percentage_24h_usd>0?s.Z.percentagePlus:s.Z.percentageMinus,children:j.market_cap_change_percentage_24h_usd?(null===(t=j.market_cap_change_percentage_24h_usd)||void 0===t?void 0:t.toFixed(2))+"%":(0,u.jsx)(h.Zc,{})})]}),(0,u.jsx)("p",{children:"Market Capitalization"})]})}),(0,u.jsx)("li",{children:(0,u.jsxs)(c.OL,{to:"/crypto/coins",className:s.Z.cryptoLink,children:[(0,u.jsx)("div",{children:null!==(n=j.total_volume)&&void 0!==n&&n.usd?(0,m.yC)(Number(null===(a=j.total_volume.usd)||void 0===a?void 0:a.toFixed(0)))+" $":(0,u.jsx)(h.FM,{})}),(0,u.jsx)("p",{children:"Trading Volume 24h"})]})}),(0,u.jsx)("li",{children:(0,u.jsxs)(c.OL,{to:"/crypto/coins",className:s.Z.cryptoLink,children:[(0,u.jsx)("div",{children:j.active_cryptocurrencies?(0,m.yC)(j.active_cryptocurrencies):(0,u.jsx)(h.cW,{})}),(0,u.jsx)("p",{children:"Active Cryptocurrencies"})]})})]}),(0,u.jsxs)(c.OL,{to:"/crypto/coins",className:s.Z.footer+" "+s.Z.footerCrypto,children:[(0,u.jsx)("h1",{children:"CRYPTOCURRENCIES MARKETS"}),(0,u.jsx)("p",{children:"CHECK OUT LIVE DATA"})]})]})]})},p=function(){var e=(0,o.C)((function(e){return e.articles.articles})).filter((function(e){return e.headline.main.length>30&&e.headline.main.length<=50}));return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{className:s.Z.image,children:(0,u.jsx)("img",{src:a,alt:"Second slide"})}),(0,u.jsxs)(r.Z.Caption,{className:s.Z.caption,children:[(0,u.jsx)("ul",{className:s.Z.carouselInfo+" "+s.Z.articlesData,children:e.slice(0,3).map((function(e){return(0,u.jsx)("li",{children:(0,u.jsxs)(c.OL,{to:"/articles/".concat(e.id),className:s.Z.articlesLink,children:[(0,u.jsx)("p",{children:e.headline.main}),(0,u.jsxs)("p",{children:[(0,u.jsx)("svg",{className:s.Z.iconTime,children:(0,u.jsx)("use",{href:n.Z+"#time"})}),e.pub_date.slice(0,10)]})]})},e.id)}))}),(0,u.jsxs)(c.OL,{to:"/articles",className:s.Z.footer,children:[(0,u.jsx)("h1",{children:"ECONOMIC ANALYSIS"}),(0,u.jsx)("p",{children:"CHECK OUT NEW ARTICLES"})]})]})]})},g=function(){return(0,u.jsxs)(r.Z,{children:[(0,u.jsx)(r.Z.Item,{children:(0,u.jsx)(j,{})}),(0,u.jsx)(r.Z.Item,{children:(0,u.jsx)(p,{})})]})},_=t(3496),f=function(e){var i=e.sparkline,t=e.coinId,s=(0,o.C)((function(e){return e.crypto.marketsTime})),r={chart:{animations:{enabled:!1},id:"area-datetime",type:"area",toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},grid:{show:!1},fill:{type:"gradient",gradient:{type:"vertical",shadeIntensity:1,opacityFrom:.1,opacityTo:.7,stops:[0,100]}},tooltip:{enabled:!0,theme:"dark",style:{fontSize:"12px",fontFamily:void 0},x:{show:!1},y:{formatter:function(e){return e>5?e.toFixed(2):e.toFixed(5)},title:{formatter:function(){return"$"}}},marker:{show:!1}},xaxis:{type:"numeric",labels:{show:!1}},yaxis:{show:!1,tickAmount:1},stroke:{show:!0,curve:"straight",width:2},states:{hover:{filter:{type:"none"}}}},c=[{name:"price",type:"area",data:Object.keys(s).includes(t)?"168"===s[t]&&i||"72"===s[t]&&i.slice(-72)||"24"===s[t]&&i.slice(-24):i}];return i?(0,u.jsx)(_.Z,{options:r,series:c,type:"line",width:"100%",height:"100%"}):null},Z=t(885),y=t(1559),v=t(9546),N=function(e){var i,t=e.H24,s=e.H72,r=e.H168,c=e.coinId;!function(e){e.OneDay="1d",e.ThreeDays="3d",e.SevenDays="7d"}(i||(i={}));var n=(0,o.T)(),a=(0,d.useState)(i.SevenDays),l=(0,Z.Z)(a,2),h=l[0],m=l[1],j=(0,o.C)((function(e){return e.crypto.marketsTime}));(0,d.useEffect)((function(){return function(){Object.keys(j).length&&n((0,x.uD)())}}),[]);return(0,u.jsx)(y.Z,{onSelect:function(e){return function(e){var r={};r[c]=e,n((0,x.TW)(r)),m((function(){switch(e){case t:return i.OneDay;case s:return i.ThreeDays;default:return i.SevenDays}}))}(e)},children:(0,u.jsxs)(v.Z,{variant:"primary",menuVariant:"dark",id:"dropdown-basic",title:h,children:[(0,u.jsx)(y.Z.Item,{eventKey:t,className:"text-xs",children:i.OneDay}),(0,u.jsx)(y.Z.Item,{eventKey:s,className:"text-xs",children:i.ThreeDays}),(0,u.jsx)(y.Z.Item,{eventKey:r,className:"text-xs",children:i.SevenDays})]})})},L=function(){var e,i=(0,o.C)((function(e){return e.crypto})),t=i.markets,r=i.isLoadingCrypto,n=(0,o.T)();(0,d.useEffect)((function(){n((0,x.pd)())}),[]),function(e){e.H24="24",e.H72="72",e.H168="168"}(e||(e={}));return(0,u.jsx)(u.Fragment,{children:r?(0,u.jsx)(h.hW,{}):(0,u.jsx)("section",{className:s.Z.coins,children:(0,u.jsx)("ul",{className:s.Z.coinsList,children:t.map((function(i){return"btc"===i.symbol||"eth"===i.symbol||"xrp"===i.symbol||"doge"===i.symbol||"ada"===i.symbol||"dot"===i.symbol?(0,u.jsxs)("li",{className:s.Z.item,children:[(0,u.jsxs)(c.OL,{to:"/crypto/coins/".concat(i.id),className:s.Z.cryptoLeftSide,children:[(0,u.jsx)("img",{src:i.image,alt:i.name}),(0,u.jsx)("p",{children:(t=i.id,t[0].toUpperCase()+t.slice(1))}),(0,u.jsx)("p",{children:i.symbol.toUpperCase()})]}),(0,u.jsxs)("div",{className:s.Z.cryptoRightSide,children:[(0,u.jsxs)("div",{className:s.Z.cryptoRightTop,children:[(0,u.jsx)(N,{H24:e.H24,H72:e.H72,H168:e.H168,coinId:i.id}),(0,u.jsxs)("p",{className:i.price_change_percentage_24h>0?s.Z.percentagePlus:s.Z.percentageMinus,children:[i.price_change_percentage_24h.toFixed(1),"%"]}),(0,u.jsxs)("p",{className:s.Z.price,children:[i.current_price<1&&i.current_price.toFixed(4),i.current_price>=1&&i.current_price<100&&i.current_price.toFixed(2),i.current_price>=100&&i.current_price<1e4&&i.current_price.toFixed(1),i.current_price>=1e4&&i.current_price.toFixed(0)," $"]})]}),(0,u.jsx)(c.OL,{to:"/crypto/coins/".concat(i.id),children:(0,u.jsx)("div",{className:s.Z.chart,children:(0,u.jsx)(f,{sparkline:i.sparkline_in_7d.price,coinId:i.id})})})]})]},i.id):null;var t}))})})})},b=t(1174),R=function(){return(0,u.jsxs)("div",{className:s.Z.home,children:[(0,u.jsx)(g,{}),(0,u.jsx)(L,{}),(0,u.jsx)(b.Z,{})]})}},9911:function(e,i,t){t.d(i,{E2:function(){return a},FM:function(){return o},Zc:function(){return l},cW:function(){return h},hW:function(){return n}});var s=t(2579),r=t(1086),c=t(184),n=function(){var e=function(){return(0,c.jsxs)("div",{className:r.Z.item,children:[(0,c.jsxs)("div",{className:r.Z.cryptoLeftSide,children:[(0,c.jsx)("div",{children:(0,c.jsx)(s.Z,{height:34,width:34,style:{marginLeft:1,borderRadius:50}})}),(0,c.jsx)(s.Z,{height:15,width:50,style:{marginTop:8}}),(0,c.jsx)(s.Z,{height:15,width:40,style:{marginTop:6}})]}),(0,c.jsxs)("div",{className:r.Z.cryptoRightSide,children:[(0,c.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,c.jsx)(s.Z,{height:20,width:130})}),(0,c.jsx)("div",{children:(0,c.jsx)(s.Z,{height:58,width:130})})]})]})};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(s.y,{baseColor:"#2b2b2b",highlightColor:"#dabdab",children:(0,c.jsx)("section",{className:r.Z.coins,children:(0,c.jsxs)("ul",{className:r.Z.coinsList,children:[(0,c.jsx)(e,{}),(0,c.jsx)(e,{}),(0,c.jsx)(e,{}),(0,c.jsx)(e,{}),(0,c.jsx)(e,{}),(0,c.jsx)(e,{})]})})})})},a=function(){return(0,c.jsx)(s.y,{baseColor:"#2b2b2b",highlightColor:"#dabdab",children:(0,c.jsxs)("section",{className:r.Z.articles,children:[(0,c.jsxs)("div",{className:r.Z.articlesLeft,children:[(0,c.jsx)("a",{children:(0,c.jsx)("h2",{children:"Top Articles"})}),(0,c.jsxs)("ul",{className:r.Z.articlesLeftList,children:[(0,c.jsx)("li",{children:(0,c.jsxs)("a",{className:r.Z.articlesLeftLink,children:[(0,c.jsx)("div",{children:(0,c.jsx)(s.Z,{height:140,width:256})}),(0,c.jsx)("div",{children:(0,c.jsx)(s.Z,{height:20,width:256,count:2})}),(0,c.jsx)("div",{children:(0,c.jsx)(s.Z,{height:20,width:100})})]})}),(0,c.jsx)("li",{children:(0,c.jsxs)("a",{children:[(0,c.jsx)("div",{children:(0,c.jsx)(s.Z,{height:140,width:256})}),(0,c.jsx)("div",{children:(0,c.jsx)(s.Z,{height:20,width:256,count:2})}),(0,c.jsx)("div",{children:(0,c.jsx)(s.Z,{height:20,width:100})})]})})]})]}),(0,c.jsxs)("div",{className:r.Z.articlesRight,children:[(0,c.jsx)("a",{children:(0,c.jsx)("h2",{className:r.Z.articlesRightTitle,children:"Recent Articles"})}),(0,c.jsxs)("ul",{className:r.Z.articlesRightList,children:[(0,c.jsx)("li",{children:(0,c.jsxs)("a",{className:r.Z.articlesRightLink,children:[(0,c.jsx)("div",{className:r.Z.articlesRightImg,children:(0,c.jsx)(s.Z,{height:59,width:59,style:{borderRadius:50}})}),(0,c.jsxs)("div",{className:r.Z.articlesRightDescription,children:[(0,c.jsx)("p",{children:(0,c.jsx)(s.Z,{height:15,width:"100%"})}),(0,c.jsxs)("p",{style:{display:"block"},children:[(0,c.jsx)(s.Z,{height:15,width:"60%"}),(0,c.jsx)(s.Z,{height:14,width:"25%"})]})]})]})}),(0,c.jsx)("li",{children:(0,c.jsxs)("a",{className:r.Z.articlesRightLink,children:[(0,c.jsx)("div",{className:r.Z.articlesRightImg,children:(0,c.jsx)(s.Z,{height:60,width:60,style:{borderRadius:50}})}),(0,c.jsxs)("div",{className:r.Z.articlesRightDescription,children:[(0,c.jsx)("p",{children:(0,c.jsx)(s.Z,{height:15,width:"100%"})}),(0,c.jsxs)("p",{style:{display:"block"},children:[(0,c.jsx)(s.Z,{height:15,width:"60%"}),(0,c.jsx)(s.Z,{height:14,width:"25%"})]})]})]})}),(0,c.jsx)("li",{children:(0,c.jsxs)("a",{className:r.Z.articlesRightLink,children:[(0,c.jsx)("div",{className:r.Z.articlesRightImg,children:(0,c.jsx)(s.Z,{height:60,width:60,style:{borderRadius:50}})}),(0,c.jsxs)("div",{className:r.Z.articlesRightDescription,children:[(0,c.jsx)("p",{children:(0,c.jsx)(s.Z,{height:15,width:450})}),(0,c.jsxs)("p",{style:{display:"block"},children:[(0,c.jsx)(s.Z,{height:15,width:"60%"}),(0,c.jsx)(s.Z,{height:14,width:"25%"})]})]})]})})]})]})]})})},l=function(){return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(s.y,{baseColor:"#4e4e4e",highlightColor:"#dabdab",children:(0,c.jsx)("div",{children:(0,c.jsx)(s.Z,{height:23,width:220})})})})},o=function(){return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(s.y,{baseColor:"#4e4e4e",highlightColor:"#dabdab",children:(0,c.jsx)("div",{children:(0,c.jsx)(s.Z,{height:23,width:160})})})})},h=function(){return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(s.y,{baseColor:"#4e4e4e",highlightColor:"#dabdab",children:(0,c.jsx)("div",{children:(0,c.jsx)(s.Z,{height:23,width:65})})})})}},8418:function(e,i,t){t.d(i,{J2:function(){return r},eX:function(){return c},yC:function(){return s}});var s=function(e){return new Intl.NumberFormat("ua-UA").format(e)},r=function(e){var i=new RegExp(/\.?0*$/);return e<1e3?String(e).replace(i,""):s(e)},c=function(e){return e<1e-8?Math.trunc(1e10*e)/1e10:e<1e-6?Math.trunc(1e8*e)/1e8:e<1e-4?Math.trunc(1e6*e)/1e6:e<.01?Math.trunc(1e4*e)/1e4:Math.trunc(100*e)/100}},1086:function(e,i){i.Z={iconTime:"Home_iconTime__ZRuci",hidden:"Home_hidden__yLCNn",home:"Home_home__U6Tmp",caption:"Home_caption__TBoq2",footer:"Home_footer__GVvb0",footerCrypto:"Home_footerCrypto__N-x96",image:"Home_image__qikYA",imageCrypto:"Home_imageCrypto__nVGMa",carouselInfo:"Home_carouselInfo__2L6E5",cryptoData:"Home_cryptoData__UtDPi",cryptoLink:"Home_cryptoLink__hcpaT",articlesData:"Home_articlesData__JnHXY",articlesLink:"Home_articlesLink__G88mL",coins:"Home_coins__ZsTOC",coinsList:"Home_coinsList__DyiT7",item:"Home_item__F2FiE",cryptoLeftSide:"Home_cryptoLeftSide__oYYT4",cryptoRightSide:"Home_cryptoRightSide__TjfKQ",cryptoRightTop:"Home_cryptoRightTop__Dtpcp",price:"Home_price__+o-5M",chart:"Home_chart__0yHBJ",percentagePlus:"Home_percentagePlus__fUlJ0",percentageMinus:"Home_percentageMinus__NQjNV",articles:"Home_articles__SyIzL",arrow:"Home_arrow__LfuqN",articlesLeft:"Home_articlesLeft__I0x6t",articlesLeftList:"Home_articlesLeftList__U04Zo",articlesLeftLink:"Home_articlesLeftLink__0cr+Z",articlesLeftImg:"Home_articlesLeftImg__bTgxR",articlesRight:"Home_articlesRight__2lFSZ",articlesRightTitle:"Home_articlesRightTitle__Yoh5h",articlesRightList:"Home_articlesRightList__wC4w5",articlesRightItem:"Home_articlesRightItem__-9A61",articlesRightLink:"Home_articlesRightLink__SiYz3",articlesRightImg:"Home_articlesRightImg__8OeGB",articlesRightDescription:"Home_articlesRightDescription__9dq03"}}}]);
//# sourceMappingURL=640.a0655a3d.chunk.js.map