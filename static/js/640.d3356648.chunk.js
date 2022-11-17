"use strict";(self.webpackChunkcrypto_project=self.webpackChunkcrypto_project||[]).push([[640],{1174:function(e,i,s){s.d(i,{Z:function(){return u},M:function(){return j}});var t=s(1086),r=s(2791),c=s(4329),n=s(4397),a=s(9911),l=s.p+"static/media/news.2dc6bac234f8cb4332c8.jpg",o=s(3504),h=s(3763),d=s(184),x=function(){var e=(0,c.C)((function(e){return e.articles.articles}));return(0,d.jsxs)("section",{className:t.Z.articlesLeft,children:[(0,d.jsx)(o.OL,{to:"/articles",children:(0,d.jsxs)("h2",{children:["Top Articles",(0,d.jsx)("svg",{className:t.Z.arrow,children:(0,d.jsx)("use",{href:h.Z+"#arrow_right"})})]})}),(0,d.jsx)("ul",{className:t.Z.articlesLeftList,children:e.slice(0,2).map((function(e){return(0,d.jsx)("li",{children:(0,d.jsxs)(o.OL,{to:"/articles/".concat(e.id),className:t.Z.articlesLeftLink,children:[(0,d.jsx)("div",{className:t.Z.articlesLeftImg,children:(0,d.jsx)("img",{src:e.urlToImage,alt:"News",onError:j})}),(0,d.jsxs)("p",{children:[e.title.slice(0,40),"..."]}),(0,d.jsxs)("p",{style:{display:"flex",alignItems:"center",gap:4},children:[(0,d.jsx)("svg",{className:t.Z.iconTime,children:(0,d.jsx)("use",{href:h.Z+"#time"})}),e.publishedAt.slice(0,10)]})]})},e.id)}))})]})},m=function(){var e=(0,c.C)((function(e){return e.articles.articles}));return(0,d.jsxs)("section",{className:t.Z.articlesRight,children:[(0,d.jsx)(o.OL,{to:"/articles",children:(0,d.jsxs)("h2",{className:t.Z.articlesRightTitle,children:["Recent Articles",(0,d.jsx)("svg",{className:t.Z.arrow,children:(0,d.jsx)("use",{href:h.Z+"#arrow_right"})})]})}),(0,d.jsx)("ul",{className:t.Z.articlesRightList,children:e.slice(2,5).map((function(e){return(0,d.jsx)("li",{className:t.Z.articlesRightItem,children:(0,d.jsxs)(o.OL,{to:"/articles/".concat(e.id),className:t.Z.articlesRightLink,children:[(0,d.jsx)("div",{className:t.Z.articlesRightImg,children:(0,d.jsx)("img",{src:e.urlToImage,alt:e.title,onError:j})}),(0,d.jsxs)("div",{className:t.Z.articlesRightDescription,children:[(0,d.jsx)("p",{children:e.title}),(0,d.jsxs)("p",{style:{display:"flex",alignItems:"center",gap:4},children:[(0,d.jsx)("svg",{className:t.Z.iconTime,children:(0,d.jsx)("use",{href:h.Z+"#time"})}),e.publishedAt.slice(0,10)]})]})]})},e.id)}))})]})},j=function(e){e.target.onerror=null,e.target.src=l},u=function(){var e=(0,c.C)((function(e){return e.articles})),i=e.articles,s=e.isLoadingArticles,l=(0,c.T)();return(0,r.useEffect)((function(){0===i.length&&l((0,n.Zt)())}),[]),(0,d.jsx)(d.Fragment,{children:s?(0,d.jsx)(a.E2,{}):0!==i.length&&(0,d.jsxs)("div",{className:t.Z.articles,children:[(0,d.jsx)(x,{}),(0,d.jsx)(m,{})]})})}},9666:function(e,i,s){s.r(i),s.d(i,{default:function(){return R}});var t=s(1086),r=s(6104),c=s(3504),n=s(3763),a=s.p+"static/media/slider1.c859344f3d32e8dd2000.jpg",l=s.p+"static/media/slider2.1a0cfa0c97e5e0137dc4.jpg",o=s(4329),h=s(9911),d=s(2791),x=s(7463),m=s(8418),j=s(184),u=function(){var e,i,s,n,a,u=(0,o.C)((function(e){return e.crypto.globalData})),p=(0,o.T)();return(0,d.useEffect)((function(){0===Object.keys(u).length&&p((0,x.SY)())}),[]),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("div",{className:"".concat(t.Z.image," ").concat(t.Z.imageCrypto),children:(0,j.jsx)("img",{src:l,alt:"Second slide"})}),(0,j.jsxs)(r.Z.Caption,{className:t.Z.caption,children:[(0,j.jsxs)("ul",{className:"".concat(t.Z.carouselInfo," ").concat(t.Z.cryptoData),children:[(0,j.jsx)("li",{children:(0,j.jsxs)(c.OL,{to:"/crypto/coins",className:t.Z.cryptoLink,children:[(0,j.jsxs)("div",{children:[null!==(e=u.total_market_cap)&&void 0!==e&&e.usd?(0,m.y)(Number(null===(i=u.total_market_cap)||void 0===i?void 0:i.usd.toFixed(0)))+" $ ":"",(0,j.jsx)("span",{className:u.market_cap_change_percentage_24h_usd&&u.market_cap_change_percentage_24h_usd>0?t.Z.percentagePlus:t.Z.percentageMinus,children:u.market_cap_change_percentage_24h_usd?(null===(s=u.market_cap_change_percentage_24h_usd)||void 0===s?void 0:s.toFixed(2))+"%":(0,j.jsx)(h.Zc,{})})]}),(0,j.jsx)("p",{children:"Market Capitalization"})]})}),(0,j.jsx)("li",{children:(0,j.jsxs)(c.OL,{to:"/crypto/coins",className:t.Z.cryptoLink,children:[(0,j.jsx)("div",{children:null!==(n=u.total_volume)&&void 0!==n&&n.usd?(0,m.y)(Number(null===(a=u.total_volume.usd)||void 0===a?void 0:a.toFixed(0)))+" $":(0,j.jsx)(h.FM,{})}),(0,j.jsx)("p",{children:"Trading Volume 24h"})]})}),(0,j.jsx)("li",{children:(0,j.jsxs)(c.OL,{to:"/crypto/coins",className:t.Z.cryptoLink,children:[(0,j.jsx)("div",{children:u.active_cryptocurrencies?(0,m.y)(u.active_cryptocurrencies):(0,j.jsx)(h.cW,{})}),(0,j.jsx)("p",{children:"Active Cryptocurrencies"})]})})]}),(0,j.jsxs)(c.OL,{to:"/crypto/coins",className:"".concat(t.Z.footer," ").concat(t.Z.footerCrypto),children:[(0,j.jsx)("h1",{children:"CRYPTOCURRENCIES MARKETS"}),(0,j.jsx)("p",{children:"CHECK OUT LIVE DATA"})]})]})]})},p=function(){var e=(0,o.C)((function(e){return e.articles.articles})).filter((function(e){return e.title.length>30&&e.title.length<=50}));return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("div",{className:t.Z.image,children:(0,j.jsx)("img",{src:a,alt:"Second slide"})}),(0,j.jsxs)(r.Z.Caption,{className:t.Z.caption,children:[(0,j.jsx)("ul",{className:"".concat(t.Z.carouselInfo," ").concat(t.Z.articlesData),children:e.slice(0,3).map((function(e){return(0,j.jsx)("li",{children:(0,j.jsxs)(c.OL,{to:"/articles/".concat(e.id),className:t.Z.articlesLink,children:[(0,j.jsx)("p",{children:e.title}),(0,j.jsxs)("p",{children:[(0,j.jsx)("svg",{className:t.Z.iconTime,children:(0,j.jsx)("use",{href:n.Z+"#time"})}),e.publishedAt.slice(0,10)]})]})},e.id)}))}),(0,j.jsxs)(c.OL,{to:"/articles",className:t.Z.footer,children:[(0,j.jsx)("h1",{children:"ECONOMIC ANALYSIS"}),(0,j.jsx)("p",{children:"CHECK OUT NEW ARTICLES"})]})]})]})},g=function(){return(0,j.jsxs)(r.Z,{children:[(0,j.jsx)(r.Z.Item,{children:(0,j.jsx)(u,{})}),(0,j.jsx)(r.Z.Item,{children:(0,j.jsx)(p,{})})]})},_=s(3496),f=function(e){var i=e.sparkline,s=e.coinId,t=(0,o.C)((function(e){return e.crypto.marketsTime})),r={chart:{animations:{enabled:!1},id:"area-datetime",type:"area",toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},grid:{show:!1},fill:{type:"gradient",gradient:{type:"vertical",shadeIntensity:1,opacityFrom:.1,opacityTo:.7,stops:[0,100]}},tooltip:{enabled:!0,theme:"dark",style:{fontSize:"12px",fontFamily:void 0},x:{show:!1},y:{formatter:function(e){return e>5?e.toFixed(2):e.toFixed(5)},title:{formatter:function(){return"$"}}},marker:{show:!1}},xaxis:{type:"numeric",labels:{show:!1}},yaxis:{show:!1,tickAmount:1},stroke:{show:!0,curve:"straight",width:2},states:{hover:{filter:{type:"none"}}}},c=[{name:"price",type:"area",data:Object.keys(t).includes(s)?"168"===t[s]&&i||"72"===t[s]&&i.slice(-72)||"24"===t[s]&&i.slice(-24):i}];return i?(0,j.jsx)(_.Z,{options:r,series:c,type:"line",width:"100%",height:"100%"}):null},Z=s(885),y=s(1559),v=s(9546),N=function(e){var i,s=e.H24,t=e.H72,r=e.H168,c=e.coinId;!function(e){e.OneDay="1d",e.ThreeDays="3d",e.SevenDays="7d"}(i||(i={}));var n=(0,o.T)(),a=(0,d.useState)(i.SevenDays),l=(0,Z.Z)(a,2),h=l[0],m=l[1],u=(0,o.C)((function(e){return e.crypto.marketsTime}));(0,d.useEffect)((function(){return function(){0!==Object.keys(u).length&&n((0,x.uD)())}}),[]);return(0,j.jsx)(y.Z,{onSelect:function(e){return function(e){var r={};r[c]=e,n((0,x.TW)(r)),m((function(){switch(e){case s:return i.OneDay;case t:return i.ThreeDays;default:return i.SevenDays}}))}(e)},children:(0,j.jsxs)(v.Z,{variant:"primary",menuVariant:"dark",id:"dropdown-basic",title:h,children:[(0,j.jsx)(y.Z.Item,{eventKey:s,className:"text-xs",children:i.OneDay}),(0,j.jsx)(y.Z.Item,{eventKey:t,className:"text-xs",children:i.ThreeDays}),(0,j.jsx)(y.Z.Item,{eventKey:r,className:"text-xs",children:i.SevenDays})]})})},L=function(){var e,i=(0,o.C)((function(e){return e.crypto})),s=i.markets,r=i.isLoadingCrypto,n=(0,o.T)();(0,d.useEffect)((function(){n((0,x.pd)())}),[]),function(e){e.H24="24",e.H72="72",e.H168="168"}(e||(e={}));return(0,j.jsx)(j.Fragment,{children:r?(0,j.jsx)(h.hW,{}):(0,j.jsx)("section",{className:t.Z.coins,children:(0,j.jsx)("ul",{className:t.Z.coinsList,children:s.map((function(i){return"btc"===i.symbol||"eth"===i.symbol||"xrp"===i.symbol||"doge"===i.symbol||"ada"===i.symbol||"dot"===i.symbol?(0,j.jsxs)("li",{className:t.Z.item,children:[(0,j.jsxs)(c.OL,{to:"/crypto/coins/".concat(i.id),className:t.Z.cryptoLeftSide,children:[(0,j.jsx)("img",{src:i.image,alt:i.name}),(0,j.jsx)("p",{children:(s=i.id,s[0].toUpperCase()+s.slice(1))}),(0,j.jsx)("p",{children:i.symbol.toUpperCase()})]}),(0,j.jsxs)("div",{className:t.Z.cryptoRightSide,children:[(0,j.jsxs)("div",{className:t.Z.cryptoRightTop,children:[(0,j.jsx)(N,{H24:e.H24,H72:e.H72,H168:e.H168,coinId:i.id}),(0,j.jsxs)("p",{className:i.price_change_percentage_24h>0?t.Z.percentagePlus:t.Z.percentageMinus,children:[i.price_change_percentage_24h.toFixed(1),"%"]}),(0,j.jsxs)("p",{className:t.Z.price,children:[i.current_price<1&&i.current_price.toFixed(4),i.current_price>=1&&i.current_price<100&&i.current_price.toFixed(2),i.current_price>=100&&i.current_price<1e4&&i.current_price.toFixed(1),i.current_price>=1e4&&i.current_price.toFixed(0)," $"]})]}),(0,j.jsx)(c.OL,{to:"/crypto/coins/".concat(i.id),children:(0,j.jsx)("div",{className:t.Z.chart,children:(0,j.jsx)(f,{sparkline:i.sparkline_in_7d.price,coinId:i.id})})})]})]},i.id):null;var s}))})})})},b=s(1174),R=function(){return(0,j.jsxs)("div",{className:t.Z.home,children:[(0,j.jsx)(g,{}),(0,j.jsx)(L,{}),(0,j.jsx)(b.Z,{})]})}},9911:function(e,i,s){s.d(i,{E2:function(){return a},FM:function(){return o},Zc:function(){return l},cW:function(){return h},hW:function(){return n}});var t=s(2579),r=s(1086),c=s(184),n=function(){var e=function(){return(0,c.jsxs)("div",{className:r.Z.item,children:[(0,c.jsxs)("div",{className:r.Z.cryptoLeftSide,children:[(0,c.jsx)("div",{children:(0,c.jsx)(t.Z,{height:34,width:34,style:{marginLeft:1,borderRadius:50}})}),(0,c.jsx)(t.Z,{height:15,width:50,style:{marginTop:8}}),(0,c.jsx)(t.Z,{height:15,width:40,style:{marginTop:6}})]}),(0,c.jsxs)("div",{className:r.Z.cryptoRightSide,children:[(0,c.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,c.jsx)(t.Z,{height:20,width:130})}),(0,c.jsx)("div",{children:(0,c.jsx)(t.Z,{height:58,width:130})})]})]})};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(t.y,{baseColor:"#2b2b2b",highlightColor:"#dabdab",children:(0,c.jsx)("section",{className:r.Z.coins,children:(0,c.jsxs)("ul",{className:r.Z.coinsList,children:[(0,c.jsx)(e,{}),(0,c.jsx)(e,{}),(0,c.jsx)(e,{}),(0,c.jsx)(e,{}),(0,c.jsx)(e,{}),(0,c.jsx)(e,{})]})})})})},a=function(){return(0,c.jsx)(t.y,{baseColor:"#2b2b2b",highlightColor:"#dabdab",children:(0,c.jsxs)("section",{className:r.Z.articles,children:[(0,c.jsxs)("div",{className:r.Z.articlesLeft,children:[(0,c.jsx)("a",{children:(0,c.jsx)("h2",{children:"Top Articles"})}),(0,c.jsxs)("ul",{className:r.Z.articlesLeftList,children:[(0,c.jsx)("li",{children:(0,c.jsxs)("a",{className:r.Z.articlesLeftLink,children:[(0,c.jsx)("div",{children:(0,c.jsx)(t.Z,{height:140,width:256})}),(0,c.jsx)("div",{children:(0,c.jsx)(t.Z,{height:20,width:256,count:2})}),(0,c.jsx)("div",{children:(0,c.jsx)(t.Z,{height:20,width:100})})]})}),(0,c.jsx)("li",{children:(0,c.jsxs)("a",{children:[(0,c.jsx)("div",{children:(0,c.jsx)(t.Z,{height:140,width:256})}),(0,c.jsx)("div",{children:(0,c.jsx)(t.Z,{height:20,width:256,count:2})}),(0,c.jsx)("div",{children:(0,c.jsx)(t.Z,{height:20,width:100})})]})})]})]}),(0,c.jsxs)("div",{className:r.Z.articlesRight,children:[(0,c.jsx)("a",{children:(0,c.jsx)("h2",{className:r.Z.articlesRightTitle,children:"Recent Articles"})}),(0,c.jsxs)("ul",{className:r.Z.articlesRightList,children:[(0,c.jsx)("li",{children:(0,c.jsxs)("a",{className:r.Z.articlesRightLink,children:[(0,c.jsx)("div",{className:r.Z.articlesRightImg,children:(0,c.jsx)(t.Z,{height:59,width:59,style:{borderRadius:50}})}),(0,c.jsxs)("div",{className:r.Z.articlesRightDescription,children:[(0,c.jsx)("p",{children:(0,c.jsx)(t.Z,{height:15,width:"100%"})}),(0,c.jsxs)("p",{style:{display:"block"},children:[(0,c.jsx)(t.Z,{height:15,width:"60%"}),(0,c.jsx)(t.Z,{height:14,width:"25%"})]})]})]})}),(0,c.jsx)("li",{children:(0,c.jsxs)("a",{className:r.Z.articlesRightLink,children:[(0,c.jsx)("div",{className:r.Z.articlesRightImg,children:(0,c.jsx)(t.Z,{height:60,width:60,style:{borderRadius:50}})}),(0,c.jsxs)("div",{className:r.Z.articlesRightDescription,children:[(0,c.jsx)("p",{children:(0,c.jsx)(t.Z,{height:15,width:"100%"})}),(0,c.jsxs)("p",{style:{display:"block"},children:[(0,c.jsx)(t.Z,{height:15,width:"60%"}),(0,c.jsx)(t.Z,{height:14,width:"25%"})]})]})]})}),(0,c.jsx)("li",{children:(0,c.jsxs)("a",{className:r.Z.articlesRightLink,children:[(0,c.jsx)("div",{className:r.Z.articlesRightImg,children:(0,c.jsx)(t.Z,{height:60,width:60,style:{borderRadius:50}})}),(0,c.jsxs)("div",{className:r.Z.articlesRightDescription,children:[(0,c.jsx)("p",{children:(0,c.jsx)(t.Z,{height:15,width:450})}),(0,c.jsxs)("p",{style:{display:"block"},children:[(0,c.jsx)(t.Z,{height:15,width:"60%"}),(0,c.jsx)(t.Z,{height:14,width:"25%"})]})]})]})})]})]})]})})},l=function(){return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(t.y,{baseColor:"#4e4e4e",highlightColor:"#dabdab",children:(0,c.jsx)("div",{children:(0,c.jsx)(t.Z,{height:23,width:220})})})})},o=function(){return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(t.y,{baseColor:"#4e4e4e",highlightColor:"#dabdab",children:(0,c.jsx)("div",{children:(0,c.jsx)(t.Z,{height:23,width:160})})})})},h=function(){return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(t.y,{baseColor:"#4e4e4e",highlightColor:"#dabdab",children:(0,c.jsx)("div",{children:(0,c.jsx)(t.Z,{height:23,width:65})})})})}},8418:function(e,i,s){s.d(i,{J:function(){return r},y:function(){return t}});var t=function(e){return new Intl.NumberFormat("ua-UA").format(e)},r=function(e){var i=new RegExp(/\.?0*$/);return e<1e3?String(e).replace(i,""):t(e)}},1086:function(e,i){i.Z={iconTime:"Home_iconTime__5z-Cl",hidden:"Home_hidden__AGcFA",home:"Home_home__tmHzI",caption:"Home_caption__Pwliy",footer:"Home_footer__ZhSHj",footerCrypto:"Home_footerCrypto__avAOi",image:"Home_image__8YXfk",imageCrypto:"Home_imageCrypto__ivR1i",carouselInfo:"Home_carouselInfo__vxNpN",cryptoData:"Home_cryptoData__+m9ds",cryptoLink:"Home_cryptoLink__C4ijm",articlesData:"Home_articlesData__ZpJwG",articlesLink:"Home_articlesLink__fWbGg",coins:"Home_coins__mUw0Z",coinsList:"Home_coinsList__Pu6vT",item:"Home_item__t+m2W",cryptoLeftSide:"Home_cryptoLeftSide__BcvVK",cryptoRightSide:"Home_cryptoRightSide__oBtoO",cryptoRightTop:"Home_cryptoRightTop__u6RcM",price:"Home_price__KWESB",chart:"Home_chart__mC1DG",percentagePlus:"Home_percentagePlus__Rqvcy",percentageMinus:"Home_percentageMinus__p+B-8",articles:"Home_articles__ZqVYs",arrow:"Home_arrow__HOZ4T",articlesLeft:"Home_articlesLeft__-Ck+k",articlesLeftList:"Home_articlesLeftList__B0YGH",articlesLeftLink:"Home_articlesLeftLink__15IMq",articlesLeftImg:"Home_articlesLeftImg__l-KWn",articlesRight:"Home_articlesRight__rMVGT",articlesRightTitle:"Home_articlesRightTitle__1kwTd",articlesRightList:"Home_articlesRightList__FIm2+",articlesRightItem:"Home_articlesRightItem__hRi2g",articlesRightLink:"Home_articlesRightLink__P05-z",articlesRightImg:"Home_articlesRightImg__OjtjG",articlesRightDescription:"Home_articlesRightDescription__AA3GF"}}}]);
//# sourceMappingURL=640.d3356648.chunk.js.map