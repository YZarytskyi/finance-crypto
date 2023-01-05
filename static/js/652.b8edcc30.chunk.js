/*! For license information please see 652.b8edcc30.chunk.js.LICENSE.txt */
(self.webpackChunkcrypto_project=self.webpackChunkcrypto_project||[]).push([[652],{9241:function(e,t,n){"use strict";var r=n(2791);t.Z=function(e){var t=(0,r.useRef)(e);return(0,r.useLayoutEffect)((function(){t.current=e}),[e]),t}},8489:function(e,t,n){"use strict";n.d(t,{R:function(){return d}});var r=n(885),i=n(2791),c=n(5671),s=n(3144),a=function(){function e(t){(0,c.Z)(this,e),this.storage=void 0;try{this.storage="local"===t?window.localStorage:window.sessionStorage}catch(n){console.error(n)}}return(0,s.Z)(e,[{key:"get",value:function(e){if(this.storage)try{var t=this.storage.getItem(e);if(!t)return;return JSON.parse(t)}catch(n){console.error(n)}}},{key:"set",value:function(e,t){if(this.storage)try{var n=JSON.stringify(t);this.storage.setItem(e,n)}catch(r){console.error(r)}}},{key:"remove",value:function(e){this.storage&&this.storage.removeItem(e)}},{key:"clear",value:function(){this.storage&&this.storage.clear()}}]),e}(),o=new a("local"),l=(new a("session"),n(9241));function h(e){return"function"===typeof e}function d(e,t){var n=(0,i.useState)((function(){var n=o.get(e);return"undefined"!==typeof n?n:h(t)?t():t})),c=(0,r.Z)(n,2),s=c[0],a=c[1],d=(0,l.Z)(s);return[s,(0,i.useCallback)((function(t){a(t);var n=h(t)?t(d.current):t;o.set(e,n)}),[e,d])]}},3638:function(e,t,n){"use strict";n.d(t,{H:function(){return _}});var r=n(2591),i=n(2982),c=n(885),s=n(2791),a=n(3504),o=n(8418),l=n(4956),h=n(3763),d=n(3143),u=n(692),x=n(184),p=function(e){var t,n,r,p=e.coin,f=e.selectedCoins,g=e.openModalAuth,_=e.setNewSelectedCoins,j=(0,l.C)((function(e){return e.auth.isAuth})),m=(0,s.useState)(!1),v=(0,c.Z)(m,2),y=v[0],b=v[1],Z=(0,s.useState)(!1),C=(0,c.Z)(Z,2),w=C[0],S=C[1];(0,s.useEffect)((function(){j?f.find((function(e){return e===p.id}))&&b(!0):b(!1)}),[j]);var k=p.image.match(/\d+/);return(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:(0,x.jsx)("svg",{className:"".concat(d.Z.star," ").concat(y?d.Z.starActive:""),onClick:function(e){j?(b((function(e){return!e})),f.includes(p.id)?_(f.filter((function(e){return e!==p.id}))):_([p.id].concat((0,i.Z)(f)))):g&&g()},children:(0,x.jsx)("use",{href:h.Z+"#star"})})}),(0,x.jsx)("td",{children:p.market_cap_rank}),(0,x.jsx)("td",{children:(0,x.jsxs)(a.OL,{to:"/crypto/coins/".concat(p.id),className:d.Z.link,children:[(0,x.jsx)("img",{src:p.image,alt:p.name,height:30,width:30,onLoad:function(){S(!0)}}),(0,x.jsxs)("p",{children:[p.name,(0,x.jsx)("span",{children:p.symbol.toUpperCase()})]})]})}),(0,x.jsxs)("td",{children:[(0,o.J2)(p.current_price)," $"]}),(0,x.jsxs)("td",{className:(0,o.po)(p.price_change_percentage_1h_in_currency),children:[null===(t=p.price_change_percentage_1h_in_currency)||void 0===t?void 0:t.toFixed(2)," %"]}),(0,x.jsxs)("td",{className:(0,o.po)(p.price_change_percentage_24h_in_currency),children:[null===(n=p.price_change_percentage_24h_in_currency)||void 0===n?void 0:n.toFixed(2)," %"]}),(0,x.jsxs)("td",{className:(0,o.po)(p.price_change_percentage_7d_in_currency),children:[null===(r=p.price_change_percentage_7d_in_currency)||void 0===r?void 0:r.toFixed(2)," %"]}),(0,x.jsxs)("td",{children:[(0,o.yC)(p.total_volume)," $"]}),(0,x.jsxs)("td",{children:[(0,o.yC)(p.market_cap)," $"]}),(0,x.jsx)("td",{children:w?(0,x.jsx)("img",{src:"https://www.coingecko.com/coins/".concat(k,"/sparkline"),alt:"".concat(p.name," 7d chart"),className:d.Z.chartImg}):(0,x.jsx)(u.p9,{className:"small"})})]})},f=s.memo(p),g=n(3683),_=function(e){var t=e.isLoading,n=e.markets,i=e.selectedCoins,c=e.openModalAuth,s=e.setNewSelectedCoins;return(0,x.jsxs)(r.Z,{hover:!0,variant:"dark",children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{children:(0,x.jsx)("svg",{className:d.Z.starHead,children:(0,x.jsx)("use",{href:h.Z+"#star"})})}),(0,x.jsx)("th",{children:"#"}),(0,x.jsx)("th",{children:"Coin"}),(0,x.jsx)("th",{children:"Price"}),(0,x.jsx)("th",{children:"1h"}),(0,x.jsx)("th",{children:"24h"}),(0,x.jsx)("th",{children:"7d"}),(0,x.jsx)("th",{children:"Total Volume"}),(0,x.jsx)("th",{children:"Market Capitalization"}),(0,x.jsx)("th",{children:"Last\xa07\xa0days"})]})}),(0,x.jsx)("tbody",{children:t?(0,x.jsx)(g.R,{}):(0,x.jsx)(x.Fragment,{children:n.map((function(e){return(0,x.jsx)(f,{coin:e,selectedCoins:i,openModalAuth:c,setNewSelectedCoins:s},e.id)}))})})]})}},3683:function(e,t,n){"use strict";n.d(t,{R:function(){return s}});var r=n(6283),i=n(2579),c=n(184),s=function(){return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(i.y,{baseColor:"#121212",highlightColor:"#262626",children:[(0,c.jsx)("tr",{children:(0,c.jsx)("td",{colSpan:10,children:(0,c.jsx)(i.Z,{height:50,width:"100%"})})}),(0,c.jsx)("tr",{children:(0,c.jsx)("td",{colSpan:10,children:(0,c.jsx)(i.Z,{height:50,width:"100%"})})}),(0,c.jsx)("tr",{children:(0,c.jsx)("td",{colSpan:10,children:(0,c.jsx)(i.Z,{height:50,width:"100%"})})}),(0,c.jsx)("tr",{children:(0,c.jsx)("td",{colSpan:10,children:(0,c.jsx)(i.Z,{height:50,width:"100%"})})}),(0,c.jsx)("tr",{children:(0,c.jsx)("td",{colSpan:10,children:(0,c.jsx)(i.Z,{height:50,width:"100%"})})}),(0,c.jsx)("tr",{children:(0,c.jsx)("td",{colSpan:10,children:(0,c.jsx)(i.Z,{height:50,width:"100%"})})}),(0,c.jsx)("tr",{children:(0,c.jsx)("td",{colSpan:10,children:(0,c.jsx)(i.Z,{height:50,width:"100%"})})}),(0,c.jsx)("tr",{children:(0,c.jsx)("td",{colSpan:10,children:(0,c.jsx)(i.Z,{height:50,width:"100%"})})}),(0,c.jsx)("tr",{children:(0,c.jsx)("td",{colSpan:10,children:(0,c.jsx)(i.Z,{height:50,width:"100%"})})}),(0,c.jsx)("tr",{children:(0,c.jsx)("td",{colSpan:10,children:(0,c.jsx)(i.Z,{height:50,width:"100%"})})}),(0,c.jsx)("tr",{children:(0,c.jsx)("td",{colSpan:10,children:(0,c.jsx)(i.Z,{height:50,width:"100%"})})}),(0,c.jsx)("tr",{children:(0,c.jsx)("td",{colSpan:10,children:(0,c.jsx)(i.Z,{height:50,width:"100%"})})}),(0,c.jsx)("tr",{children:(0,c.jsx)("td",{colSpan:10,children:(0,c.jsx)(i.Z,{height:50,width:"100%"})})}),(0,c.jsx)("tr",{children:(0,c.jsx)("td",{colSpan:10,children:(0,c.jsx)(i.Z,{height:50,width:"100%"})})}),(0,c.jsx)("tr",{className:r.Z.table,style:{marginBottom:15},children:(0,c.jsx)("td",{colSpan:10,children:(0,c.jsx)(i.Z,{height:53,width:"100%"})})})]})})}},8418:function(e,t,n){"use strict";n.d(t,{J2:function(){return i},eX:function(){return c},po:function(){return s},yC:function(){return r}});var r=function(e){return new Intl.NumberFormat("ua-UA").format(e)},i=function(e){var t=new RegExp(/\.?0*$/);return e<1e3?String(e).replace(t,""):r(e)},c=function(e){return e<1e-8?Math.trunc(1e10*e)/1e10:e<1e-6?Math.trunc(1e8*e)/1e8:e<1e-4?Math.trunc(1e6*e)/1e6:e<.01?Math.trunc(1e4*e)/1e4:Math.trunc(100*e)/100},s=function(e){return e>0?"percentagePlus":"percentageMinus"}},1694:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)){if(n.length){var s=i.apply(null,n);s&&e.push(s)}}else if("object"===c)if(n.toString===Object.prototype.toString)for(var a in n)r.call(n,a)&&n[a]&&e.push(a);else e.push(n.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},2591:function(e,t,n){"use strict";var r=n(1413),i=n(5987),c=n(1694),s=n.n(c),a=n(2791),o=n(162),l=n(184),h=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],d=a.forwardRef((function(e,t){var n=e.bsPrefix,c=e.className,a=e.striped,d=e.bordered,u=e.borderless,x=e.hover,p=e.size,f=e.variant,g=e.responsive,_=(0,i.Z)(e,h),j=(0,o.vE)(n,"table"),m=s()(c,j,f&&"".concat(j,"-").concat(f),p&&"".concat(j,"-").concat(p),a&&"".concat(j,"-").concat("string"===typeof a?"striped-".concat(a):"striped"),d&&"".concat(j,"-bordered"),u&&"".concat(j,"-borderless"),x&&"".concat(j,"-hover")),v=(0,l.jsx)("table",(0,r.Z)((0,r.Z)({},_),{},{className:m,ref:t}));if(g){var y="".concat(j,"-responsive");return"string"===typeof g&&(y="".concat(y,"-").concat(g)),(0,l.jsx)("div",{className:y,children:v})}return v}));t.Z=d},162:function(e,t,n){"use strict";n.d(t,{SC:function(){return a},vE:function(){return s}});var r=n(2791),i=(n(184),["xxl","xl","lg","md","sm","xs"]),c=r.createContext({prefixes:{},breakpoints:i,minBreakpoint:"xs"});c.Consumer,c.Provider;function s(e,t){var n=(0,r.useContext)(c).prefixes;return e||n[t]||t}function a(){return"rtl"===(0,r.useContext)(c).dir}},3143:function(e,t){"use strict";t.Z={iconTime:"Coins_iconTime__IDcS5",hidden:"Coins_hidden__DEndh",percentagePlus:"Coins_percentagePlus__KBLF9",percentageMinus:"Coins_percentageMinus__SLlw8",tableHeader:"Coins_tableHeader__d9tMf",table:"Coins_table__wX-Uk",tableCoins:"Coins_tableCoins__sh+8A",link:"Coins_link__LJHmC",pagination:"Coins_pagination__Sq0uj",star:"Coins_star__Qer27",starActive:"Coins_starActive__6saVl",starHead:"Coins_starHead__PtMGu",chartImg:"Coins_chartImg__e+Lao"}},6283:function(e,t){"use strict";t.Z={iconTime:"Exchanges_iconTime__Rn2j7",hidden:"Exchanges_hidden__eoGC4",percentagePlus:"Exchanges_percentagePlus__V93Dh",percentageMinus:"Exchanges_percentageMinus__gnDx1",tableHeader:"Exchanges_tableHeader__PQ7hm",table:"Exchanges_table__8yRfY",tableCoins:"Exchanges_tableCoins__1nSfo",link:"Exchanges_link__Fu+aX",pagination:"Exchanges_pagination__PInf8",star:"Exchanges_star__JNV+z",starActive:"Exchanges_starActive__KkWvL",starHead:"Exchanges_starHead__7Iifz",chartImg:"Exchanges_chartImg__Ofg0V",tableExchanges:"Exchanges_tableExchanges__tSgtq",exchangeLink:"Exchanges_exchangeLink__mcBE5"}},2579:function(e,t,n){"use strict";n.d(t,{Z:function(){return h},y:function(){return d}});var r=n(885),i=n(1413),c=n(5987),s=n(2791),a=["count","wrapper","className","containerClassName","containerTestId","circle","style"],o=["children"],l=s.createContext({});function h(e){for(var t,n,o,h=e.count,d=void 0===h?1:h,u=e.wrapper,x=e.className,p=e.containerClassName,f=e.containerTestId,g=e.circle,_=void 0!==g&&g,j=e.style,m=(0,c.Z)(e,a),v=s.useContext(l),y=(0,i.Z)({},m),b=0,Z=Object.entries(m);b<Z.length;b++){var C=(0,r.Z)(Z[b],2),w=C[0];"undefined"===typeof C[1]&&delete y[w]}var S=(0,i.Z)((0,i.Z)((0,i.Z)({},v),y),{},{circle:_}),k=(0,i.Z)((0,i.Z)({},j),function(e){var t=e.baseColor,n=e.highlightColor,r=e.width,i=e.height,c=e.borderRadius,s=e.circle,a=e.direction,o=e.duration,l=e.enableAnimation,h=void 0===l||l,d={};return"rtl"===a&&(d["--animation-direction"]="reverse"),"number"===typeof o&&(d["--animation-duration"]="".concat(o,"s")),h||(d["--pseudo-element-display"]="none"),"string"!==typeof r&&"number"!==typeof r||(d.width=r),"string"!==typeof i&&"number"!==typeof i||(d.height=i),"string"!==typeof c&&"number"!==typeof c||(d.borderRadius=c),s&&(d.borderRadius="50%"),"undefined"!==typeof t&&(d["--base-color"]=t),"undefined"!==typeof n&&(d["--highlight-color"]=n),d}(S)),E="react-loading-skeleton";x&&(E+=" ".concat(x));for(var N=null!==(t=S.inline)&&void 0!==t&&t,M=[],A=Math.ceil(d),I=0;I<A;I++){var P=k;if(A>d&&I===A-1){var L=null!==(n=P.width)&&void 0!==n?n:"100%",H=d%1,R="number"===typeof L?L*H:"calc(".concat(L," * ").concat(H,")");P=(0,i.Z)((0,i.Z)({},P),{},{width:R})}var F=s.createElement("span",{className:E,style:P,key:I},"\u200c");N?M.push(F):M.push(s.createElement(s.Fragment,{key:I},F,s.createElement("br",null)))}return s.createElement("span",{className:p,"data-testid":f,"aria-live":"polite","aria-busy":null===(o=S.enableAnimation)||void 0===o||o},u?M.map((function(e,t){return s.createElement(u,{key:t},e)})):M)}function d(e){var t=e.children,n=(0,c.Z)(e,o);return s.createElement(l.Provider,{value:n},t)}}}]);
//# sourceMappingURL=652.b8edcc30.chunk.js.map