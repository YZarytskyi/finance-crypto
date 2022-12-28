"use strict";(self.webpackChunkcrypto_project=self.webpackChunkcrypto_project||[]).push([[816],{9816:function(e,n,t){t.r(n),t.d(n,{default:function(){return N}});var r=t(885),i=t(2791),c=t(2591),a=t(3504),s=t(3496),o=t(184),l=function(e){var n={chart:{animations:{enabled:!1},id:"area-datetime",type:"area",toolbar:{show:!1},sparkline:{enabled:!0}},grid:{show:!1},fill:{type:"gradient",gradient:{type:"vertical",opacityFrom:.1,opacityTo:.7,stops:[0,100]}},tooltip:{enabled:!0,theme:"dark",style:{fontSize:"12px",fontFamily:void 0},x:{show:!1},y:{formatter:function(e){return e>5?e.toFixed(2):e.toFixed(5)},title:{formatter:function(e){return"$"}}},marker:{show:!1}},xaxis:{type:"numeric",labels:{show:!1}},yaxis:{show:!1},stroke:{show:!0,curve:"straight",width:2}},t=[{name:"price",type:"area",data:e.data}];return(0,o.jsx)(s.Z,{options:n,series:t,type:"line",width:"100%",height:"60px"})},h=t(8418),d="Coins_table__PR9uh",x="Coins_tableCoins__dbVk3",p="Coins_link__yAojc",u="Coins_pagination__-qiwy",_=function(e){var n,t,r,i=e.coin;return(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:i.market_cap_rank}),(0,o.jsx)("td",{children:(0,o.jsxs)(a.OL,{to:"".concat(i.id),className:p,children:[(0,o.jsx)("img",{src:i.image,alt:i.name,height:30,width:30}),(0,o.jsxs)("p",{children:[i.name,(0,o.jsx)("span",{children:i.symbol.toUpperCase()})]})]})}),(0,o.jsxs)("td",{children:[(0,h.J2)(i.current_price)," $"]}),(0,o.jsxs)("td",{className:(0,h.po)(i.price_change_percentage_1h_in_currency),children:[null===(n=i.price_change_percentage_1h_in_currency)||void 0===n?void 0:n.toFixed(2)," %"]}),(0,o.jsxs)("td",{className:(0,h.po)(i.price_change_percentage_24h_in_currency),children:[null===(t=i.price_change_percentage_24h_in_currency)||void 0===t?void 0:t.toFixed(2)," %"]}),(0,o.jsxs)("td",{className:(0,h.po)(i.price_change_percentage_7d_in_currency),children:[null===(r=i.price_change_percentage_7d_in_currency)||void 0===r?void 0:r.toFixed(2)," %"]}),(0,o.jsxs)("td",{children:[(0,h.yC)(i.total_volume)," $"]}),(0,o.jsxs)("td",{children:[(0,h.yC)(i.market_cap)," $"]}),(0,o.jsx)("td",{children:(0,o.jsx)(l,{data:i.sparkline_in_7d.price})})]})},j=i.memo(_),g=t(692),m=t(7463),f=t(4329),v=t(2790),y=t(8801),N=function(){var e=(0,f.C)((function(e){return e.crypto})),n=e.isLoadingCrypto,t=e.markets,a=(0,f.T)(),s=(0,i.useState)(1),l=(0,r.Z)(s,2),h=l[0],p=l[1];return(0,i.useEffect)((function(){a((0,m.pd)(h))}),[h]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(v.Z,{component:"Coins"}),(0,o.jsxs)("section",{className:"".concat(d," ").concat(x),children:[(0,o.jsx)("h1",{className:"hidden",children:"Cryptocurrencies"}),(0,o.jsxs)(c.Z,{hover:!0,variant:"dark",children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"#"}),(0,o.jsx)("th",{children:"Coin"}),(0,o.jsx)("th",{children:"Price"}),(0,o.jsx)("th",{children:"1h"}),(0,o.jsx)("th",{children:"24h"}),(0,o.jsx)("th",{children:"7d"}),(0,o.jsx)("th",{children:"Total Volume"}),(0,o.jsx)("th",{children:"Market Capitalization"}),(0,o.jsx)("th",{children:"Last\xa07\xa0days"})]})}),(0,o.jsx)("tbody",{children:n?(0,o.jsx)(y.R,{}):(0,o.jsx)(o.Fragment,{children:t.map((function(e){return(0,o.jsx)(j,{coin:e},e.id)}))})})]})]}),(0,o.jsx)("div",{className:u,children:(0,o.jsx)(g.vI,{page:h,setPage:p,count:50})})]})}},8801:function(e,n,t){t.d(n,{R:function(){return a}});var r=t(5716),i=t(2579),c=t(184),a=function(){return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(i.y,{baseColor:"#121212",highlightColor:"#262626",children:[(0,c.jsx)("tr",{children:(0,c.jsx)("td",{colSpan:9,children:(0,c.jsx)(i.Z,{height:55,width:"100%"})})}),(0,c.jsx)("tr",{children:(0,c.jsx)("td",{colSpan:9,children:(0,c.jsx)(i.Z,{height:55,width:"100%"})})}),(0,c.jsx)("tr",{children:(0,c.jsx)("td",{colSpan:9,children:(0,c.jsx)(i.Z,{height:55,width:"100%"})})}),(0,c.jsx)("tr",{children:(0,c.jsx)("td",{colSpan:9,children:(0,c.jsx)(i.Z,{height:55,width:"100%"})})}),(0,c.jsx)("tr",{children:(0,c.jsx)("td",{colSpan:9,children:(0,c.jsx)(i.Z,{height:55,width:"100%"})})}),(0,c.jsx)("tr",{children:(0,c.jsx)("td",{colSpan:9,children:(0,c.jsx)(i.Z,{height:55,width:"100%"})})}),(0,c.jsx)("tr",{children:(0,c.jsx)("td",{colSpan:9,children:(0,c.jsx)(i.Z,{height:55,width:"100%"})})}),(0,c.jsx)("tr",{children:(0,c.jsx)("td",{colSpan:9,children:(0,c.jsx)(i.Z,{height:55,width:"100%"})})}),(0,c.jsx)("tr",{children:(0,c.jsx)("td",{colSpan:9,children:(0,c.jsx)(i.Z,{height:55,width:"100%"})})}),(0,c.jsx)("tr",{children:(0,c.jsx)("td",{colSpan:9,children:(0,c.jsx)(i.Z,{height:55,width:"100%"})})}),(0,c.jsx)("tr",{children:(0,c.jsx)("td",{colSpan:9,children:(0,c.jsx)(i.Z,{height:55,width:"100%"})})}),(0,c.jsx)("tr",{children:(0,c.jsx)("td",{colSpan:9,children:(0,c.jsx)(i.Z,{height:55,width:"100%"})})}),(0,c.jsx)("tr",{children:(0,c.jsx)("td",{colSpan:9,children:(0,c.jsx)(i.Z,{height:55,width:"100%"})})}),(0,c.jsx)("tr",{children:(0,c.jsx)("td",{colSpan:9,children:(0,c.jsx)(i.Z,{height:55,width:"100%"})})}),(0,c.jsx)("tr",{className:r.Z.table,style:{marginBottom:15},children:(0,c.jsx)("td",{colSpan:9,children:(0,c.jsx)(i.Z,{height:53,width:"100%"})})})]})})}},2790:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(6871),i=t(3504),c=t(3763),a={iconTime:"NavCrypto_iconTime__Q7ijG",hidden:"NavCrypto_hidden__DuPiK",percentagePlus:"NavCrypto_percentagePlus__kkbya",percentageMinus:"NavCrypto_percentageMinus__1F7pl",container:"NavCrypto_container__21zHw",navCrypto:"NavCrypto_navCrypto__EPQeL",listLeft:"NavCrypto_listLeft__0-anf",leftLink:"NavCrypto_leftLink__8VxOk",arrow:"NavCrypto_arrow__DWHZ6",home:"NavCrypto_home__NTcNG",currentPath:"NavCrypto_currentPath__cjwcD",listCenter:"NavCrypto_listCenter__rdBdZ",leftText:"NavCrypto_leftText__vU0KR"},s=t(184),o=function(e){var n=e.component,t=(0,r.TH)().pathname,o=new RegExp("/".concat(n,"/"),"i"),l=o.test(t);return t=l?t.replace(o,"").substring(0,17)+(t.length>18?"...":""):t.replace(/^\//,""),(0,s.jsx)("div",{className:a.container,children:(0,s.jsxs)("div",{className:a.navCrypto,children:[(0,s.jsxs)("ul",{className:a.listLeft,children:[(0,s.jsx)("li",{children:(0,s.jsxs)(i.OL,{to:"/",className:a.leftLink,children:[(0,s.jsx)("svg",{className:a.home,children:(0,s.jsx)("use",{href:c.Z+"#home"})}),(0,s.jsx)("svg",{className:a.arrow,children:(0,s.jsx)("use",{href:c.Z+"#arrow_right"})})]})}),(0,s.jsx)("li",{className:l?"":a.hidden,children:(0,s.jsxs)(i.OL,{to:"/".concat(n),className:a.leftLink,children:[(0,s.jsx)("span",{className:a.leftText,children:n}),(0,s.jsx)("svg",{className:a.arrow,children:(0,s.jsx)("use",{href:c.Z+"#arrow_right"})})]})}),(0,s.jsx)("li",{children:(0,s.jsx)("span",{className:"".concat(a.currentPath," ").concat(a.leftText),children:t})})]}),(0,s.jsxs)("ul",{className:a.listCenter,children:[(0,s.jsx)("li",{children:(0,s.jsx)(i.OL,{to:"/coins",className:a.centerLink,children:"Coins"})}),(0,s.jsx)("li",{children:(0,s.jsx)(i.OL,{to:"/exchanges",className:a.centerLink,children:"Exchanges"})}),(0,s.jsx)("li",{children:(0,s.jsx)(i.OL,{to:"/arbitrage",className:a.centerLink,children:"Arbitrage"})}),(0,s.jsx)("li",{children:(0,s.jsx)(i.OL,{to:"/converter",className:a.centerLink,children:"Converter"})})]})]})})}},8418:function(e,n,t){t.d(n,{J2:function(){return i},eX:function(){return c},po:function(){return a},yC:function(){return r}});var r=function(e){return new Intl.NumberFormat("ua-UA").format(e)},i=function(e){var n=new RegExp(/\.?0*$/);return e<1e3?String(e).replace(n,""):r(e)},c=function(e){return e<1e-8?Math.trunc(1e10*e)/1e10:e<1e-6?Math.trunc(1e8*e)/1e8:e<1e-4?Math.trunc(1e6*e)/1e6:e<.01?Math.trunc(1e4*e)/1e4:Math.trunc(100*e)/100},a=function(e){return e>0?"percentagePlus":"percentageMinus"}},2591:function(e,n,t){var r=t(1413),i=t(5987),c=t(1694),a=t.n(c),s=t(2791),o=t(162),l=t(184),h=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],d=s.forwardRef((function(e,n){var t=e.bsPrefix,c=e.className,s=e.striped,d=e.bordered,x=e.borderless,p=e.hover,u=e.size,_=e.variant,j=e.responsive,g=(0,i.Z)(e,h),m=(0,o.vE)(t,"table"),f=a()(c,m,_&&"".concat(m,"-").concat(_),u&&"".concat(m,"-").concat(u),s&&"".concat(m,"-").concat("string"===typeof s?"striped-".concat(s):"striped"),d&&"".concat(m,"-bordered"),x&&"".concat(m,"-borderless"),p&&"".concat(m,"-hover")),v=(0,l.jsx)("table",(0,r.Z)((0,r.Z)({},g),{},{className:f,ref:n}));if(j){var y="".concat(m,"-responsive");return"string"===typeof j&&(y="".concat(y,"-").concat(j)),(0,l.jsx)("div",{className:y,children:v})}return v}));n.Z=d},5716:function(e,n){n.Z={iconTime:"Exchanges_iconTime__NBobL",hidden:"Exchanges_hidden__uYU1h",percentagePlus:"Exchanges_percentagePlus__B2f1-",percentageMinus:"Exchanges_percentageMinus__LV62d",table:"Exchanges_table__uW4Zi",tableCoins:"Exchanges_tableCoins__gnOYL",link:"Exchanges_link__sYGLk",pagination:"Exchanges_pagination__pd8z5",tableExchanges:"Exchanges_tableExchanges__LnRmN",exchangeLink:"Exchanges_exchangeLink__ZrZ-a"}},2579:function(e,n,t){t.d(n,{Z:function(){return h},y:function(){return d}});var r=t(885),i=t(1413),c=t(5987),a=t(2791),s=["count","wrapper","className","containerClassName","containerTestId","circle","style"],o=["children"],l=a.createContext({});function h(e){for(var n,t,o,h=e.count,d=void 0===h?1:h,x=e.wrapper,p=e.className,u=e.containerClassName,_=e.containerTestId,j=e.circle,g=void 0!==j&&j,m=e.style,f=(0,c.Z)(e,s),v=a.useContext(l),y=(0,i.Z)({},f),N=0,b=Object.entries(f);N<b.length;N++){var C=(0,r.Z)(b[N],2),w=C[0];"undefined"===typeof C[1]&&delete y[w]}var Z=(0,i.Z)((0,i.Z)((0,i.Z)({},v),y),{},{circle:g}),k=(0,i.Z)((0,i.Z)({},m),function(e){var n=e.baseColor,t=e.highlightColor,r=e.width,i=e.height,c=e.borderRadius,a=e.circle,s=e.direction,o=e.duration,l=e.enableAnimation,h=void 0===l||l,d={};return"rtl"===s&&(d["--animation-direction"]="reverse"),"number"===typeof o&&(d["--animation-duration"]="".concat(o,"s")),h||(d["--pseudo-element-display"]="none"),"string"!==typeof r&&"number"!==typeof r||(d.width=r),"string"!==typeof i&&"number"!==typeof i||(d.height=i),"string"!==typeof c&&"number"!==typeof c||(d.borderRadius=c),a&&(d.borderRadius="50%"),"undefined"!==typeof n&&(d["--base-color"]=n),"undefined"!==typeof t&&(d["--highlight-color"]=t),d}(Z)),L="react-loading-skeleton";p&&(L+=" ".concat(p));for(var E=null!==(n=Z.inline)&&void 0!==n&&n,S=[],P=Math.ceil(d),T=0;T<P;T++){var F=k;if(P>d&&T===P-1){var M=null!==(t=F.width)&&void 0!==t?t:"100%",R=d%1,O="number"===typeof M?M*R:"calc(".concat(M," * ").concat(R,")");F=(0,i.Z)((0,i.Z)({},F),{},{width:O})}var z=a.createElement("span",{className:L,style:F,key:T},"\u200c");E?S.push(z):S.push(a.createElement(a.Fragment,{key:T},z,a.createElement("br",null)))}return a.createElement("span",{className:u,"data-testid":_,"aria-live":"polite","aria-busy":null===(o=Z.enableAnimation)||void 0===o||o},x?S.map((function(e,n){return a.createElement(x,{key:n},e)})):S)}function d(e){var n=e.children,t=(0,c.Z)(e,o);return a.createElement(l.Provider,{value:t},n)}}}]);
//# sourceMappingURL=816.c081550e.chunk.js.map