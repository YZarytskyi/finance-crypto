"use strict";(self.webpackChunkcrypto_project=self.webpackChunkcrypto_project||[]).push([[866],{1274:function(e,i,t){t.r(i);var s=t(9152),r=t(2791),c=t(6871),l=t(4397),a=t(4329),n=t(3763),o=t(1174),h=t(184);i.default=function(){var e=(0,c.UO)().articleId,i=(0,a.C)((function(i){return i.articles.articles[Number(e)-1]})),t=(0,a.T)();return(0,r.useEffect)((function(){i||t((0,l.Zt)())}),[]),i?(0,h.jsxs)("article",{className:s.Z.selectedArticle,children:[(0,h.jsx)("h1",{className:s.Z.selectedArticleTitle,children:i.title}),(0,h.jsxs)("p",{className:s.Z.selectedArticleDate,children:[(0,h.jsx)("svg",{className:s.Z.iconTime,children:(0,h.jsx)("use",{href:n.Z+"#time"})}),i.publishedAt.slice(0,10),i.author&&!i.author.startsWith("https")?", Author: ".concat(i.author):""]}),(0,h.jsx)("img",{className:s.Z.selectedArticleImage,src:i.urlToImage,alt:i.title,onError:o.M}),(0,h.jsxs)("p",{className:s.Z.selectedArticleBody,children:[i.content.slice(0,-14)," ",(0,h.jsx)("a",{className:s.Z.readMoreLink,href:i.url,target:"_blank",rel:"noopener noreferrer nofollow",children:"Read\xa0more"})]})]}):null}},1174:function(e,i,t){t.d(i,{Z:function(){return j},M:function(){return g}});var s=t(1086),r=t(2791),c=t(4329),l=t(4397),a=t(9911),n=t.p+"static/media/news.2dc6bac234f8cb4332c8.jpg",o=t(3504),h=t(3763),d=t(184),_=function(){var e=(0,c.C)((function(e){return e.articles.articles}));return(0,d.jsxs)("section",{className:s.Z.articlesLeft,children:[(0,d.jsx)(o.OL,{to:"/articles",children:(0,d.jsxs)("h2",{children:["Top Articles",(0,d.jsx)("svg",{className:s.Z.arrow,children:(0,d.jsx)("use",{href:h.Z+"#arrow_right"})})]})}),(0,d.jsx)("ul",{className:s.Z.articlesLeftList,children:e.slice(0,2).map((function(e){return(0,d.jsx)("li",{children:(0,d.jsxs)(o.OL,{to:"/articles/".concat(e.id),className:s.Z.articlesLeftLink,children:[(0,d.jsx)("div",{className:s.Z.articlesLeftImg,children:(0,d.jsx)("img",{src:e.urlToImage,alt:"News",onError:g})}),(0,d.jsxs)("p",{children:[e.title.slice(0,40),"..."]}),(0,d.jsxs)("p",{style:{display:"flex",alignItems:"center",gap:4},children:[(0,d.jsx)("svg",{className:s.Z.iconTime,children:(0,d.jsx)("use",{href:h.Z+"#time"})}),e.publishedAt.slice(0,10)]})]})},e.id)}))})]})},m=function(){var e=(0,c.C)((function(e){return e.articles.articles}));return(0,d.jsxs)("section",{className:s.Z.articlesRight,children:[(0,d.jsx)(o.OL,{to:"/articles",children:(0,d.jsxs)("h2",{className:s.Z.articlesRightTitle,children:["Recent Articles",(0,d.jsx)("svg",{className:s.Z.arrow,children:(0,d.jsx)("use",{href:h.Z+"#arrow_right"})})]})}),(0,d.jsx)("ul",{className:s.Z.articlesRightList,children:e.slice(2,5).map((function(e){return(0,d.jsx)("li",{className:s.Z.articlesRightItem,children:(0,d.jsxs)(o.OL,{to:"/articles/".concat(e.id),className:s.Z.articlesRightLink,children:[(0,d.jsx)("div",{className:s.Z.articlesRightImg,children:(0,d.jsx)("img",{src:e.urlToImage,alt:e.title,onError:g})}),(0,d.jsxs)("div",{className:s.Z.articlesRightDescription,children:[(0,d.jsx)("p",{children:e.title}),(0,d.jsxs)("p",{style:{display:"flex",alignItems:"center",gap:4},children:[(0,d.jsx)("svg",{className:s.Z.iconTime,children:(0,d.jsx)("use",{href:h.Z+"#time"})}),e.publishedAt.slice(0,10)]})]})]})},e.id)}))})]})},g=function(e){e.target.onerror=null,e.target.src=n},j=function(){var e=(0,c.C)((function(e){return e.articles})),i=e.articles,t=e.isLoadingArticles,n=(0,c.T)();return(0,r.useEffect)((function(){i.length||n((0,l.Zt)())}),[]),(0,d.jsx)(d.Fragment,{children:t?(0,d.jsx)(a.E2,{}):i.length&&(0,d.jsxs)("div",{className:s.Z.articles,children:[(0,d.jsx)(_,{}),(0,d.jsx)(m,{})]})})}},9911:function(e,i,t){t.d(i,{E2:function(){return a},FM:function(){return o},Zc:function(){return n},cW:function(){return h},hW:function(){return l}});var s=t(2579),r=t(1086),c=t(184),l=function(){var e=function(){return(0,c.jsxs)("div",{className:r.Z.item,children:[(0,c.jsxs)("div",{className:r.Z.cryptoLeftSide,children:[(0,c.jsx)("div",{children:(0,c.jsx)(s.Z,{height:34,width:34,style:{marginLeft:1,borderRadius:50}})}),(0,c.jsx)(s.Z,{height:15,width:50,style:{marginTop:8}}),(0,c.jsx)(s.Z,{height:15,width:40,style:{marginTop:6}})]}),(0,c.jsxs)("div",{className:r.Z.cryptoRightSide,children:[(0,c.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,c.jsx)(s.Z,{height:20,width:130})}),(0,c.jsx)("div",{children:(0,c.jsx)(s.Z,{height:58,width:130})})]})]})};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(s.y,{baseColor:"#2b2b2b",highlightColor:"#dabdab",children:(0,c.jsx)("section",{className:r.Z.coins,children:(0,c.jsxs)("ul",{className:r.Z.coinsList,children:[(0,c.jsx)(e,{}),(0,c.jsx)(e,{}),(0,c.jsx)(e,{}),(0,c.jsx)(e,{}),(0,c.jsx)(e,{}),(0,c.jsx)(e,{})]})})})})},a=function(){return(0,c.jsx)(s.y,{baseColor:"#2b2b2b",highlightColor:"#dabdab",children:(0,c.jsxs)("section",{className:r.Z.articles,children:[(0,c.jsxs)("div",{className:r.Z.articlesLeft,children:[(0,c.jsx)("a",{children:(0,c.jsx)("h2",{children:"Top Articles"})}),(0,c.jsxs)("ul",{className:r.Z.articlesLeftList,children:[(0,c.jsx)("li",{children:(0,c.jsxs)("a",{className:r.Z.articlesLeftLink,children:[(0,c.jsx)("div",{children:(0,c.jsx)(s.Z,{height:140,width:256})}),(0,c.jsx)("div",{children:(0,c.jsx)(s.Z,{height:20,width:256,count:2})}),(0,c.jsx)("div",{children:(0,c.jsx)(s.Z,{height:20,width:100})})]})}),(0,c.jsx)("li",{children:(0,c.jsxs)("a",{children:[(0,c.jsx)("div",{children:(0,c.jsx)(s.Z,{height:140,width:256})}),(0,c.jsx)("div",{children:(0,c.jsx)(s.Z,{height:20,width:256,count:2})}),(0,c.jsx)("div",{children:(0,c.jsx)(s.Z,{height:20,width:100})})]})})]})]}),(0,c.jsxs)("div",{className:r.Z.articlesRight,children:[(0,c.jsx)("a",{children:(0,c.jsx)("h2",{className:r.Z.articlesRightTitle,children:"Recent Articles"})}),(0,c.jsxs)("ul",{className:r.Z.articlesRightList,children:[(0,c.jsx)("li",{children:(0,c.jsxs)("a",{className:r.Z.articlesRightLink,children:[(0,c.jsx)("div",{className:r.Z.articlesRightImg,children:(0,c.jsx)(s.Z,{height:59,width:59,style:{borderRadius:50}})}),(0,c.jsxs)("div",{className:r.Z.articlesRightDescription,children:[(0,c.jsx)("p",{children:(0,c.jsx)(s.Z,{height:15,width:"100%"})}),(0,c.jsxs)("p",{style:{display:"block"},children:[(0,c.jsx)(s.Z,{height:15,width:"60%"}),(0,c.jsx)(s.Z,{height:14,width:"25%"})]})]})]})}),(0,c.jsx)("li",{children:(0,c.jsxs)("a",{className:r.Z.articlesRightLink,children:[(0,c.jsx)("div",{className:r.Z.articlesRightImg,children:(0,c.jsx)(s.Z,{height:60,width:60,style:{borderRadius:50}})}),(0,c.jsxs)("div",{className:r.Z.articlesRightDescription,children:[(0,c.jsx)("p",{children:(0,c.jsx)(s.Z,{height:15,width:"100%"})}),(0,c.jsxs)("p",{style:{display:"block"},children:[(0,c.jsx)(s.Z,{height:15,width:"60%"}),(0,c.jsx)(s.Z,{height:14,width:"25%"})]})]})]})}),(0,c.jsx)("li",{children:(0,c.jsxs)("a",{className:r.Z.articlesRightLink,children:[(0,c.jsx)("div",{className:r.Z.articlesRightImg,children:(0,c.jsx)(s.Z,{height:60,width:60,style:{borderRadius:50}})}),(0,c.jsxs)("div",{className:r.Z.articlesRightDescription,children:[(0,c.jsx)("p",{children:(0,c.jsx)(s.Z,{height:15,width:450})}),(0,c.jsxs)("p",{style:{display:"block"},children:[(0,c.jsx)(s.Z,{height:15,width:"60%"}),(0,c.jsx)(s.Z,{height:14,width:"25%"})]})]})]})})]})]})]})})},n=function(){return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(s.y,{baseColor:"#4e4e4e",highlightColor:"#dabdab",children:(0,c.jsx)("div",{children:(0,c.jsx)(s.Z,{height:23,width:220})})})})},o=function(){return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(s.y,{baseColor:"#4e4e4e",highlightColor:"#dabdab",children:(0,c.jsx)("div",{children:(0,c.jsx)(s.Z,{height:23,width:160})})})})},h=function(){return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(s.y,{baseColor:"#4e4e4e",highlightColor:"#dabdab",children:(0,c.jsx)("div",{children:(0,c.jsx)(s.Z,{height:23,width:65})})})})}},9152:function(e,i){i.Z={iconTime:"Articles_iconTime__WUNHL",hidden:"Articles_hidden__FXcrS",heading:"Articles_heading__v931f",headingContainer:"Articles_headingContainer__ep8VL",mainTitle:"Articles_mainTitle__B228n",bottomList:"Articles_bottomList__beTke",bottomListItem:"Articles_bottomListItem__3Zy+J",bottomListImage:"Articles_bottomListImage__hCffU",bottomListArticleTitle:"Articles_bottomListArticleTitle__ViT1S",rightBlock:"Articles_rightBlock__ecjvd",rightListTitle:"Articles_rightListTitle__Hf9vo",rightList:"Articles_rightList__jo60a",rightListLink:"Articles_rightListLink__tPer+",rightListArticleImage:"Articles_rightListArticleImage__NR948",rightListArticleTitle:"Articles_rightListArticleTitle__s8Eyl",allArticles:"Articles_allArticles__CbUUK",allArticlesTitle:"Articles_allArticlesTitle__v0bad",articlesBlock:"Articles_articlesBlock__5Ptc-",allArticlesLink:"Articles_allArticlesLink__8jTHg",articlesImage:"Articles_articlesImage__B04Os",articlesTitleDate:"Articles_articlesTitleDate__yQKkI",articleTitle:"Articles_articleTitle__IfIwY",articleDate:"Articles_articleDate__g3jPj",paginationArticlesBlock:"Articles_paginationArticlesBlock__nXCtO",selectedArticle:"Articles_selectedArticle__2Ja3K",selectedArticleTitle:"Articles_selectedArticleTitle__R-Vcg",selectedArticleDate:"Articles_selectedArticleDate__xP9FX",selectedArticleImage:"Articles_selectedArticleImage__4gDXq",selectedArticleBody:"Articles_selectedArticleBody__Njwdo",readMoreLink:"Articles_readMoreLink__aQwaE"}},1086:function(e,i){i.Z={iconTime:"Home_iconTime__5z-Cl",hidden:"Home_hidden__AGcFA",home:"Home_home__tmHzI",caption:"Home_caption__Pwliy",footer:"Home_footer__ZhSHj",footerCrypto:"Home_footerCrypto__avAOi",image:"Home_image__8YXfk",imageCrypto:"Home_imageCrypto__ivR1i",carouselInfo:"Home_carouselInfo__vxNpN",cryptoData:"Home_cryptoData__+m9ds",cryptoLink:"Home_cryptoLink__C4ijm",articlesData:"Home_articlesData__ZpJwG",articlesLink:"Home_articlesLink__fWbGg",coins:"Home_coins__mUw0Z",coinsList:"Home_coinsList__Pu6vT",item:"Home_item__t+m2W",cryptoLeftSide:"Home_cryptoLeftSide__BcvVK",cryptoRightSide:"Home_cryptoRightSide__oBtoO",cryptoRightTop:"Home_cryptoRightTop__u6RcM",price:"Home_price__KWESB",chart:"Home_chart__mC1DG",percentagePlus:"Home_percentagePlus__Rqvcy",percentageMinus:"Home_percentageMinus__p+B-8",articles:"Home_articles__ZqVYs",arrow:"Home_arrow__HOZ4T",articlesLeft:"Home_articlesLeft__-Ck+k",articlesLeftList:"Home_articlesLeftList__B0YGH",articlesLeftLink:"Home_articlesLeftLink__15IMq",articlesLeftImg:"Home_articlesLeftImg__l-KWn",articlesRight:"Home_articlesRight__rMVGT",articlesRightTitle:"Home_articlesRightTitle__1kwTd",articlesRightList:"Home_articlesRightList__FIm2+",articlesRightItem:"Home_articlesRightItem__hRi2g",articlesRightLink:"Home_articlesRightLink__P05-z",articlesRightImg:"Home_articlesRightImg__OjtjG",articlesRightDescription:"Home_articlesRightDescription__AA3GF"}},2579:function(e,i,t){t.d(i,{Z:function(){return h},y:function(){return d}});var s=t(885),r=t(1413),c=t(5987),l=t(2791),a=["count","wrapper","className","containerClassName","containerTestId","circle","style"],n=["children"],o=l.createContext({});function h(e){for(var i,t,n,h=e.count,d=void 0===h?1:h,_=e.wrapper,m=e.className,g=e.containerClassName,j=e.containerTestId,u=e.circle,x=void 0!==u&&u,f=e.style,p=(0,c.Z)(e,a),Z=l.useContext(o),L=(0,r.Z)({},p),A=0,v=Object.entries(p);A<v.length;A++){var y=(0,s.Z)(v[A],2),b=y[0];"undefined"===typeof y[1]&&delete L[b]}var N=(0,r.Z)((0,r.Z)((0,r.Z)({},Z),L),{},{circle:x}),R=(0,r.Z)((0,r.Z)({},f),function(e){var i=e.baseColor,t=e.highlightColor,s=e.width,r=e.height,c=e.borderRadius,l=e.circle,a=e.direction,n=e.duration,o=e.enableAnimation,h=void 0===o||o,d={};return"rtl"===a&&(d["--animation-direction"]="reverse"),"number"===typeof n&&(d["--animation-duration"]="".concat(n,"s")),h||(d["--pseudo-element-display"]="none"),"string"!==typeof s&&"number"!==typeof s||(d.width=s),"string"!==typeof r&&"number"!==typeof r||(d.height=r),"string"!==typeof c&&"number"!==typeof c||(d.borderRadius=c),l&&(d.borderRadius="50%"),"undefined"!==typeof i&&(d["--base-color"]=i),"undefined"!==typeof t&&(d["--highlight-color"]=t),d}(N)),w="react-loading-skeleton";m&&(w+=" ".concat(m));for(var T=null!==(i=N.inline)&&void 0!==i&&i,k=[],H=Math.ceil(d),I=0;I<H;I++){var C=R;if(H>d&&I===H-1){var D=null!==(t=C.width)&&void 0!==t?t:"100%",B=d%1,E="number"===typeof D?D*B:"calc(".concat(D," * ").concat(B,")");C=(0,r.Z)((0,r.Z)({},C),{},{width:E})}var F=l.createElement("span",{className:w,style:C,key:I},"\u200c");T?k.push(F):k.push(l.createElement(l.Fragment,{key:I},F,l.createElement("br",null)))}return l.createElement("span",{className:g,"data-testid":j,"aria-live":"polite","aria-busy":null===(n=N.enableAnimation)||void 0===n||n},_?k.map((function(e,i){return l.createElement(_,{key:i},e)})):k)}function d(e){var i=e.children,t=(0,c.Z)(e,n);return l.createElement(o.Provider,{value:t},i)}}}]);
//# sourceMappingURL=866.f6fd6cb3.chunk.js.map