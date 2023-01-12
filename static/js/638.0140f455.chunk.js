/*! For license information please see 638.0140f455.chunk.js.LICENSE.txt */
(self.webpackChunkcrypto_project=self.webpackChunkcrypto_project||[]).push([[638],{3638:function(e,n,t){"use strict";t.d(n,{H:function(){return f}});var r=t(2591),i=t(2982),c=t(885),s=t(2791),a=t(3504),o=t(8418),l=t(4956),d=t(3763),h=t(3143),u=t(93),x=t(184),p=function(e){var n,t,r,p=e.coin,_=e.selectedCoins,g=e.openModalAuth,f=e.setNewSelectedCoins,j=(0,l.C)((function(e){return e.auth.isAuth})),m=(0,s.useState)(!1),v=(0,c.Z)(m,2),b=v[0],C=v[1],y=(0,s.useState)(!1),Z=(0,c.Z)(y,2),w=Z[0],S=Z[1];(0,s.useEffect)((function(){j?_.find((function(e){return e===p.id}))&&C(!0):C(!1)}),[j]);var E=p.image.match(/\d+/);return(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:(0,x.jsx)("svg",{className:"".concat(h.Z.star," ").concat(b?h.Z.starActive:""),onClick:function(e){j?(C((function(e){return!e})),_.includes(p.id)?f(_.filter((function(e){return e!==p.id}))):f([p.id].concat((0,i.Z)(_)))):g&&g()},children:(0,x.jsx)("use",{href:d.Z+"#star"})})}),(0,x.jsx)("td",{children:p.market_cap_rank}),(0,x.jsx)("td",{children:(0,x.jsxs)(a.OL,{to:"/crypto/coins/".concat(p.id),className:h.Z.link,children:[(0,x.jsx)("img",{src:p.image,alt:p.name,height:30,width:30,onLoad:function(){S(!0)}}),(0,x.jsxs)("p",{children:[p.name,(0,x.jsx)("span",{children:p.symbol.toUpperCase()})]})]})}),(0,x.jsxs)("td",{children:[(0,o.J2)(p.current_price)," $"]}),(0,x.jsxs)("td",{className:(0,o.po)(p.price_change_percentage_1h_in_currency),children:[null===(n=p.price_change_percentage_1h_in_currency)||void 0===n?void 0:n.toFixed(2)," %"]}),(0,x.jsxs)("td",{className:(0,o.po)(p.price_change_percentage_24h_in_currency),children:[null===(t=p.price_change_percentage_24h_in_currency)||void 0===t?void 0:t.toFixed(2)," %"]}),(0,x.jsxs)("td",{className:(0,o.po)(p.price_change_percentage_7d_in_currency),children:[null===(r=p.price_change_percentage_7d_in_currency)||void 0===r?void 0:r.toFixed(2)," %"]}),(0,x.jsxs)("td",{children:[(0,o.yC)(p.total_volume)," $"]}),(0,x.jsxs)("td",{children:[(0,o.yC)(p.market_cap)," $"]}),(0,x.jsx)("td",{children:w?(0,x.jsx)("img",{src:"https://www.coingecko.com/coins/".concat(E,"/sparkline"),alt:"".concat(p.name," 7d chart"),className:h.Z.chartImg}):(0,x.jsx)(u.p9,{className:"small"})})]})},_=s.memo(p),g=t(3683),f=function(e){var n=e.isLoading,t=e.markets,i=e.selectedCoins,c=e.openModalAuth,s=e.setNewSelectedCoins;return(0,x.jsxs)(r.Z,{hover:!0,variant:"dark",children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{children:(0,x.jsx)("svg",{className:h.Z.starHead,children:(0,x.jsx)("use",{href:d.Z+"#star"})})}),(0,x.jsx)("th",{children:"#"}),(0,x.jsx)("th",{children:"Coin"}),(0,x.jsx)("th",{children:"Price"}),(0,x.jsx)("th",{children:"1h"}),(0,x.jsx)("th",{children:"24h"}),(0,x.jsx)("th",{children:"7d"}),(0,x.jsx)("th",{children:"Total Volume"}),(0,x.jsx)("th",{children:"Market Capitalization"}),(0,x.jsx)("th",{children:"Last\xa07\xa0days"})]})}),(0,x.jsx)("tbody",{children:n?(0,x.jsx)(g.R,{}):(0,x.jsx)(x.Fragment,{children:t.map((function(e){return(0,x.jsx)(_,{coin:e,selectedCoins:i,openModalAuth:c,setNewSelectedCoins:s},e.id)}))})})]})}},3683:function(e,n,t){"use strict";t.d(n,{R:function(){return s}});var r=t(6283),i=t(2579),c=t(184),s=function(){return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(i.y,{baseColor:"#121212",highlightColor:"#262626",children:[(0,c.jsx)("tr",{children:(0,c.jsx)("td",{colSpan:10,children:(0,c.jsx)(i.Z,{height:50,width:"100%"})})}),(0,c.jsx)("tr",{children:(0,c.jsx)("td",{colSpan:10,children:(0,c.jsx)(i.Z,{height:50,width:"100%"})})}),(0,c.jsx)("tr",{children:(0,c.jsx)("td",{colSpan:10,children:(0,c.jsx)(i.Z,{height:50,width:"100%"})})}),(0,c.jsx)("tr",{children:(0,c.jsx)("td",{colSpan:10,children:(0,c.jsx)(i.Z,{height:50,width:"100%"})})}),(0,c.jsx)("tr",{children:(0,c.jsx)("td",{colSpan:10,children:(0,c.jsx)(i.Z,{height:50,width:"100%"})})}),(0,c.jsx)("tr",{children:(0,c.jsx)("td",{colSpan:10,children:(0,c.jsx)(i.Z,{height:50,width:"100%"})})}),(0,c.jsx)("tr",{children:(0,c.jsx)("td",{colSpan:10,children:(0,c.jsx)(i.Z,{height:50,width:"100%"})})}),(0,c.jsx)("tr",{children:(0,c.jsx)("td",{colSpan:10,children:(0,c.jsx)(i.Z,{height:50,width:"100%"})})}),(0,c.jsx)("tr",{children:(0,c.jsx)("td",{colSpan:10,children:(0,c.jsx)(i.Z,{height:50,width:"100%"})})}),(0,c.jsx)("tr",{children:(0,c.jsx)("td",{colSpan:10,children:(0,c.jsx)(i.Z,{height:50,width:"100%"})})}),(0,c.jsx)("tr",{children:(0,c.jsx)("td",{colSpan:10,children:(0,c.jsx)(i.Z,{height:50,width:"100%"})})}),(0,c.jsx)("tr",{children:(0,c.jsx)("td",{colSpan:10,children:(0,c.jsx)(i.Z,{height:50,width:"100%"})})}),(0,c.jsx)("tr",{children:(0,c.jsx)("td",{colSpan:10,children:(0,c.jsx)(i.Z,{height:50,width:"100%"})})}),(0,c.jsx)("tr",{children:(0,c.jsx)("td",{colSpan:10,children:(0,c.jsx)(i.Z,{height:50,width:"100%"})})}),(0,c.jsx)("tr",{className:r.Z.table,style:{marginBottom:15},children:(0,c.jsx)("td",{colSpan:10,children:(0,c.jsx)(i.Z,{height:53,width:"100%"})})})]})})}},8418:function(e,n,t){"use strict";t.d(n,{J2:function(){return i},eX:function(){return c},po:function(){return s},yC:function(){return r}});var r=function(e){return new Intl.NumberFormat("ua-UA").format(e)},i=function(e){var n=new RegExp(/\.?0*$/);return e<1e3?String(e).replace(n,""):r(e)},c=function(e){return e<1e-8?Math.trunc(1e10*e)/1e10:e<1e-6?Math.trunc(1e8*e)/1e8:e<1e-4?Math.trunc(1e6*e)/1e6:e<.01?Math.trunc(1e4*e)/1e4:Math.trunc(100*e)/100},s=function(e){return e>0?"percentagePlus":"percentageMinus"}},1694:function(e,n){var t;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var c=typeof t;if("string"===c||"number"===c)e.push(t);else if(Array.isArray(t)){if(t.length){var s=i.apply(null,t);s&&e.push(s)}}else if("object"===c)if(t.toString===Object.prototype.toString)for(var a in t)r.call(t,a)&&t[a]&&e.push(a);else e.push(t.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(t=function(){return i}.apply(n,[]))||(e.exports=t)}()},2591:function(e,n,t){"use strict";var r=t(1413),i=t(5987),c=t(1694),s=t.n(c),a=t(2791),o=t(162),l=t(184),d=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],h=a.forwardRef((function(e,n){var t=e.bsPrefix,c=e.className,a=e.striped,h=e.bordered,u=e.borderless,x=e.hover,p=e.size,_=e.variant,g=e.responsive,f=(0,i.Z)(e,d),j=(0,o.vE)(t,"table"),m=s()(c,j,_&&"".concat(j,"-").concat(_),p&&"".concat(j,"-").concat(p),a&&"".concat(j,"-").concat("string"===typeof a?"striped-".concat(a):"striped"),h&&"".concat(j,"-bordered"),u&&"".concat(j,"-borderless"),x&&"".concat(j,"-hover")),v=(0,l.jsx)("table",(0,r.Z)((0,r.Z)({},f),{},{className:m,ref:n}));if(g){var b="".concat(j,"-responsive");return"string"===typeof g&&(b="".concat(b,"-").concat(g)),(0,l.jsx)("div",{className:b,children:v})}return v}));n.Z=h},162:function(e,n,t){"use strict";t.d(n,{SC:function(){return a},vE:function(){return s}});var r=t(2791),i=(t(184),["xxl","xl","lg","md","sm","xs"]),c=r.createContext({prefixes:{},breakpoints:i,minBreakpoint:"xs"});c.Consumer,c.Provider;function s(e,n){var t=(0,r.useContext)(c).prefixes;return e||t[n]||n}function a(){return"rtl"===(0,r.useContext)(c).dir}},3143:function(e,n){"use strict";n.Z={iconTime:"Coins_iconTime__IDcS5",hidden:"Coins_hidden__DEndh",percentagePlus:"Coins_percentagePlus__KBLF9",percentageMinus:"Coins_percentageMinus__SLlw8",tableHeader:"Coins_tableHeader__d9tMf",table:"Coins_table__wX-Uk",tableCoins:"Coins_tableCoins__sh+8A",link:"Coins_link__LJHmC",pagination:"Coins_pagination__Sq0uj",star:"Coins_star__Qer27",starActive:"Coins_starActive__6saVl",starHead:"Coins_starHead__PtMGu",chartImg:"Coins_chartImg__e+Lao"}},6283:function(e,n){"use strict";n.Z={iconTime:"Exchanges_iconTime__Rn2j7",hidden:"Exchanges_hidden__eoGC4",percentagePlus:"Exchanges_percentagePlus__V93Dh",percentageMinus:"Exchanges_percentageMinus__gnDx1",tableHeader:"Exchanges_tableHeader__PQ7hm",table:"Exchanges_table__8yRfY",tableCoins:"Exchanges_tableCoins__1nSfo",link:"Exchanges_link__Fu+aX",pagination:"Exchanges_pagination__PInf8",star:"Exchanges_star__JNV+z",starActive:"Exchanges_starActive__KkWvL",starHead:"Exchanges_starHead__7Iifz",chartImg:"Exchanges_chartImg__Ofg0V",tableExchanges:"Exchanges_tableExchanges__tSgtq",exchangeLink:"Exchanges_exchangeLink__mcBE5"}},2579:function(e,n,t){"use strict";t.d(n,{Z:function(){return d},y:function(){return h}});var r=t(885),i=t(1413),c=t(5987),s=t(2791),a=["count","wrapper","className","containerClassName","containerTestId","circle","style"],o=["children"],l=s.createContext({});function d(e){for(var n,t,o,d=e.count,h=void 0===d?1:d,u=e.wrapper,x=e.className,p=e.containerClassName,_=e.containerTestId,g=e.circle,f=void 0!==g&&g,j=e.style,m=(0,c.Z)(e,a),v=s.useContext(l),b=(0,i.Z)({},m),C=0,y=Object.entries(m);C<y.length;C++){var Z=(0,r.Z)(y[C],2),w=Z[0];"undefined"===typeof Z[1]&&delete b[w]}var S=(0,i.Z)((0,i.Z)((0,i.Z)({},v),b),{},{circle:f}),E=(0,i.Z)((0,i.Z)({},j),function(e){var n=e.baseColor,t=e.highlightColor,r=e.width,i=e.height,c=e.borderRadius,s=e.circle,a=e.direction,o=e.duration,l=e.enableAnimation,d=void 0===l||l,h={};return"rtl"===a&&(h["--animation-direction"]="reverse"),"number"===typeof o&&(h["--animation-duration"]="".concat(o,"s")),d||(h["--pseudo-element-display"]="none"),"string"!==typeof r&&"number"!==typeof r||(h.width=r),"string"!==typeof i&&"number"!==typeof i||(h.height=i),"string"!==typeof c&&"number"!==typeof c||(h.borderRadius=c),s&&(h.borderRadius="50%"),"undefined"!==typeof n&&(h["--base-color"]=n),"undefined"!==typeof t&&(h["--highlight-color"]=t),h}(S)),k="react-loading-skeleton";x&&(k+=" ".concat(x));for(var N=null!==(n=S.inline)&&void 0!==n&&n,M=[],A=Math.ceil(h),P=0;P<A;P++){var H=E;if(A>h&&P===A-1){var I=null!==(t=H.width)&&void 0!==t?t:"100%",L=h%1,F="number"===typeof I?I*L:"calc(".concat(I," * ").concat(L,")");H=(0,i.Z)((0,i.Z)({},H),{},{width:F})}var R=s.createElement("span",{className:k,style:H,key:P},"\u200c");N?M.push(R):M.push(s.createElement(s.Fragment,{key:P},R,s.createElement("br",null)))}return s.createElement("span",{className:p,"data-testid":_,"aria-live":"polite","aria-busy":null===(o=S.enableAnimation)||void 0===o||o},u?M.map((function(e,n){return s.createElement(u,{key:n},e)})):M)}function h(e){var n=e.children,t=(0,c.Z)(e,o);return s.createElement(l.Provider,{value:t},n)}}}]);
//# sourceMappingURL=638.0140f455.chunk.js.map