/*! For license information please see 210.22169287.chunk.js.LICENSE.txt */
(self.webpackChunkcrypto_project=self.webpackChunkcrypto_project||[]).push([[210],{9241:function(e,n,t){"use strict";var r=t(2791);n.Z=function(e){var n=(0,r.useRef)(e);return(0,r.useLayoutEffect)((function(){n.current=e}),[e]),n}},8489:function(e,n,t){"use strict";t.d(n,{R:function(){return u}});var r=t(885),i=t(2791),a=t(5671),s=t(3144),c=function(){function e(n){(0,a.Z)(this,e),this.storage=void 0;try{this.storage="local"===n?window.localStorage:window.sessionStorage}catch(t){console.error(t)}}return(0,s.Z)(e,[{key:"get",value:function(e){if(this.storage)try{var n=this.storage.getItem(e);if(!n)return;return JSON.parse(n)}catch(t){console.error(t)}}},{key:"set",value:function(e,n){if(this.storage)try{var t=JSON.stringify(n);this.storage.setItem(e,t)}catch(r){console.error(r)}}},{key:"remove",value:function(e){this.storage&&this.storage.removeItem(e)}},{key:"clear",value:function(){this.storage&&this.storage.clear()}}]),e}(),o=new c("local"),l=(new c("session"),t(9241));function d(e){return"function"===typeof e}function u(e,n){var t=(0,i.useState)((function(){var t=o.get(e);return"undefined"!==typeof t?t:d(n)?n():n})),a=(0,r.Z)(t,2),s=a[0],c=a[1],u=(0,l.Z)(s);return[s,(0,i.useCallback)((function(n){c(n);var t=d(n)?n(u.current):n;o.set(e,t)}),[e,u])]}},3683:function(e,n,t){"use strict";t.d(n,{R:function(){return s}});var r=t(6283),i=t(2579),a=t(184),s=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(i.y,{baseColor:"#121212",highlightColor:"#262626",children:[(0,a.jsx)("tr",{children:(0,a.jsx)("td",{colSpan:10,children:(0,a.jsx)(i.Z,{height:50,width:"100%"})})}),(0,a.jsx)("tr",{children:(0,a.jsx)("td",{colSpan:10,children:(0,a.jsx)(i.Z,{height:50,width:"100%"})})}),(0,a.jsx)("tr",{children:(0,a.jsx)("td",{colSpan:10,children:(0,a.jsx)(i.Z,{height:50,width:"100%"})})}),(0,a.jsx)("tr",{children:(0,a.jsx)("td",{colSpan:10,children:(0,a.jsx)(i.Z,{height:50,width:"100%"})})}),(0,a.jsx)("tr",{children:(0,a.jsx)("td",{colSpan:10,children:(0,a.jsx)(i.Z,{height:50,width:"100%"})})}),(0,a.jsx)("tr",{children:(0,a.jsx)("td",{colSpan:10,children:(0,a.jsx)(i.Z,{height:50,width:"100%"})})}),(0,a.jsx)("tr",{children:(0,a.jsx)("td",{colSpan:10,children:(0,a.jsx)(i.Z,{height:50,width:"100%"})})}),(0,a.jsx)("tr",{children:(0,a.jsx)("td",{colSpan:10,children:(0,a.jsx)(i.Z,{height:50,width:"100%"})})}),(0,a.jsx)("tr",{children:(0,a.jsx)("td",{colSpan:10,children:(0,a.jsx)(i.Z,{height:50,width:"100%"})})}),(0,a.jsx)("tr",{children:(0,a.jsx)("td",{colSpan:10,children:(0,a.jsx)(i.Z,{height:50,width:"100%"})})}),(0,a.jsx)("tr",{children:(0,a.jsx)("td",{colSpan:10,children:(0,a.jsx)(i.Z,{height:50,width:"100%"})})}),(0,a.jsx)("tr",{children:(0,a.jsx)("td",{colSpan:10,children:(0,a.jsx)(i.Z,{height:50,width:"100%"})})}),(0,a.jsx)("tr",{children:(0,a.jsx)("td",{colSpan:10,children:(0,a.jsx)(i.Z,{height:50,width:"100%"})})}),(0,a.jsx)("tr",{children:(0,a.jsx)("td",{colSpan:10,children:(0,a.jsx)(i.Z,{height:50,width:"100%"})})}),(0,a.jsx)("tr",{className:r.Z.table,style:{marginBottom:15},children:(0,a.jsx)("td",{colSpan:10,children:(0,a.jsx)(i.Z,{height:53,width:"100%"})})})]})})}},6210:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Z}});var r=t(885),i=t(2791),a=t(2591),s=t(4956),c=t(8872),o=t(3683),l=t(2982),d=t(3504),u=t(3593),h=t(8418),f=t(6283),x=t(3763),g=t(184),p=function(e){var n=e.exchange,t=e.selectedExchanges,a=e.setNewSelectedExchanges,c=e.openModalAuth,o=(0,s.C)((function(e){return e.auth.isAuth})),p=(0,i.useState)(!1),v=(0,r.Z)(p,2),m=v[0],j=v[1];(0,i.useEffect)((function(){o?t.find((function(e){return e===n.id}))&&j(!0):j(!1)}),[o]);return(0,g.jsxs)("tr",{children:[(0,g.jsx)("td",{children:(0,g.jsx)("svg",{className:"".concat(f.Z.star," ").concat(m?f.Z.starActive:""),onClick:function(e){o?(j((function(e){return!e})),t.includes(n.id)?a(t.filter((function(e){return e!==n.id}))):a([n.id].concat((0,l.Z)(t)))):c()},children:(0,g.jsx)("use",{href:x.Z+"#star"})})}),(0,g.jsx)("td",{children:n.trust_score_rank}),(0,g.jsx)("td",{children:(0,g.jsxs)(d.rU,{to:"".concat(n.id),className:f.Z.exchangeLink,children:[(0,g.jsx)("img",{src:n.image,alt:n.name}),n.name]})}),(0,g.jsx)("td",{children:(0,g.jsxs)("div",{children:[(0,g.jsx)(u.Z,{now:n.trust_score,min:1,max:10}),n.trust_score]})}),(0,g.jsxs)("td",{children:[(0,h.yC)(n.trade_volume_24h_btc),"\xa0BTC"]}),(0,g.jsx)("td",{children:n.year_established||"Unknown"}),(0,g.jsx)("td",{children:n.country||"Unknown"})]},n.id)},v=t(509),m=t(6073),j=t(8489),Z=function(){var e=(0,j.R)("selected-exchanges",[]),n=(0,r.Z)(e,2),t=n[0],l=n[1],d=(0,s.T)(),u=(0,i.useState)(1),h=(0,r.Z)(u,2),Z=h[0],b=h[1],y=(0,i.useState)(!1),_=(0,r.Z)(y,2),w=_[0],E=_[1],S=(0,s.C)((function(e){return e.exchange})),C=S.isLoadingExchanges,N=S.exchanges;(0,i.useEffect)((function(){d((0,v.s$)(Z))}),[Z]);var k=function(e){l(e)},P=function(){E(!0)};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("section",{className:"".concat(f.Z.table," ").concat(f.Z.tableExchanges),children:(0,g.jsxs)(a.Z,{hover:!0,variant:"dark",children:[(0,g.jsx)("thead",{children:(0,g.jsxs)("tr",{children:[(0,g.jsx)("th",{children:(0,g.jsx)("svg",{className:f.Z.starHead,children:(0,g.jsx)("use",{href:x.Z+"#star"})})}),(0,g.jsx)("th",{children:"#"}),(0,g.jsx)("th",{children:"Exchange"}),(0,g.jsx)("th",{children:"Trust Score"}),(0,g.jsx)("th",{children:"Total\xa0Volume 24h"}),(0,g.jsx)("th",{children:"Year Established"}),(0,g.jsx)("th",{children:"Country"})]})}),(0,g.jsx)("tbody",{children:C?(0,g.jsx)(o.R,{}):(0,g.jsx)(g.Fragment,{children:N.map((function(e){return(0,g.jsx)(p,{exchange:e,selectedExchanges:t,setNewSelectedExchanges:k,openModalAuth:P},e.id)}))})})]})}),(0,g.jsx)("div",{className:f.Z.pagination,children:(0,g.jsx)(c.vI,{page:Z,setPage:b,count:10})}),(0,g.jsx)(m.p,{modalAuthShow:w,setModalAuthShow:E,isLogin:!0})]})}},8418:function(e,n,t){"use strict";t.d(n,{J2:function(){return i},eX:function(){return a},po:function(){return s},yC:function(){return r}});var r=function(e){return new Intl.NumberFormat("ua-UA").format(e)},i=function(e){var n=new RegExp(/\.?0*$/);return e<1e3?String(e).replace(n,""):r(e)},a=function(e){return e<1e-8?Math.trunc(1e10*e)/1e10:e<1e-6?Math.trunc(1e8*e)/1e8:e<1e-4?Math.trunc(1e6*e)/1e6:e<.01?Math.trunc(1e4*e)/1e4:Math.trunc(100*e)/100},s=function(e){return e>0?"percentagePlus":"percentageMinus"}},1694:function(e,n){var t;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var a=typeof t;if("string"===a||"number"===a)e.push(t);else if(Array.isArray(t)){if(t.length){var s=i.apply(null,t);s&&e.push(s)}}else if("object"===a)if(t.toString===Object.prototype.toString)for(var c in t)r.call(t,c)&&t[c]&&e.push(c);else e.push(t.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(t=function(){return i}.apply(n,[]))||(e.exports=t)}()},1701:function(e,n,t){"use strict";t.d(n,{Ed:function(){return a},UI:function(){return i}});var r=t(2791);function i(e,n){var t=0;return r.Children.map(e,(function(e){return r.isValidElement(e)?n(e,t++):e}))}function a(e,n){var t=0;r.Children.forEach(e,(function(e){r.isValidElement(e)&&n(e,t++)}))}},3593:function(e,n,t){"use strict";var r=t(4942),i=t(1413),a=t(5987),s=t(1694),c=t.n(s),o=t(2791),l=t(162),d=t(1701),u=t(184),h=["min","now","max","label","visuallyHidden","striped","animated","className","style","variant","bsPrefix"],f=["isChild"],x=["min","now","max","label","visuallyHidden","striped","animated","bsPrefix","variant","className","children"];function g(e,n,t){var r=(e-n)/(t-n)*100;return Math.round(1e3*r)/1e3}function p(e,n){var t,s=e.min,o=e.now,l=e.max,d=e.label,f=e.visuallyHidden,x=e.striped,p=e.animated,v=e.className,m=e.style,j=e.variant,Z=e.bsPrefix,b=(0,a.Z)(e,h);return(0,u.jsx)("div",(0,i.Z)((0,i.Z)({ref:n},b),{},{role:"progressbar",className:c()(v,"".concat(Z,"-bar"),(t={},(0,r.Z)(t,"bg-".concat(j),j),(0,r.Z)(t,"".concat(Z,"-bar-animated"),p),(0,r.Z)(t,"".concat(Z,"-bar-striped"),p||x),t)),style:(0,i.Z)({width:"".concat(g(o,s,l),"%")},m),"aria-valuenow":o,"aria-valuemin":s,"aria-valuemax":l,children:f?(0,u.jsx)("span",{className:"visually-hidden",children:d}):d}))}var v=o.forwardRef((function(e,n){var t=e.isChild,r=(0,a.Z)(e,f);if(r.bsPrefix=(0,l.vE)(r.bsPrefix,"progress"),t)return p(r,n);var s=r.min,h=r.now,g=r.max,v=r.label,m=r.visuallyHidden,j=r.striped,Z=r.animated,b=r.bsPrefix,y=r.variant,_=r.className,w=r.children,E=(0,a.Z)(r,x);return(0,u.jsx)("div",(0,i.Z)((0,i.Z)({ref:n},E),{},{className:c()(_,b),children:w?(0,d.UI)(w,(function(e){return(0,o.cloneElement)(e,{isChild:!0})})):p({min:s,now:h,max:g,label:v,visuallyHidden:m,striped:j,animated:Z,bsPrefix:b,variant:y},n)}))}));v.displayName="ProgressBar",v.defaultProps={min:0,max:100,animated:!1,isChild:!1,visuallyHidden:!1,striped:!1},n.Z=v},2591:function(e,n,t){"use strict";var r=t(1413),i=t(5987),a=t(1694),s=t.n(a),c=t(2791),o=t(162),l=t(184),d=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],u=c.forwardRef((function(e,n){var t=e.bsPrefix,a=e.className,c=e.striped,u=e.bordered,h=e.borderless,f=e.hover,x=e.size,g=e.variant,p=e.responsive,v=(0,i.Z)(e,d),m=(0,o.vE)(t,"table"),j=s()(a,m,g&&"".concat(m,"-").concat(g),x&&"".concat(m,"-").concat(x),c&&"".concat(m,"-").concat("string"===typeof c?"striped-".concat(c):"striped"),u&&"".concat(m,"-bordered"),h&&"".concat(m,"-borderless"),f&&"".concat(m,"-hover")),Z=(0,l.jsx)("table",(0,r.Z)((0,r.Z)({},v),{},{className:j,ref:n}));if(p){var b="".concat(m,"-responsive");return"string"===typeof p&&(b="".concat(b,"-").concat(p)),(0,l.jsx)("div",{className:b,children:Z})}return Z}));n.Z=u},162:function(e,n,t){"use strict";t.d(n,{SC:function(){return c},vE:function(){return s}});var r=t(2791),i=(t(184),["xxl","xl","lg","md","sm","xs"]),a=r.createContext({prefixes:{},breakpoints:i,minBreakpoint:"xs"});a.Consumer,a.Provider;function s(e,n){var t=(0,r.useContext)(a).prefixes;return e||t[n]||n}function c(){return"rtl"===(0,r.useContext)(a).dir}},6283:function(e,n){"use strict";n.Z={iconTime:"Exchanges_iconTime__Rn2j7",hidden:"Exchanges_hidden__eoGC4",percentagePlus:"Exchanges_percentagePlus__V93Dh",percentageMinus:"Exchanges_percentageMinus__gnDx1",table:"Exchanges_table__8yRfY",tableCoins:"Exchanges_tableCoins__1nSfo",link:"Exchanges_link__Fu+aX",pagination:"Exchanges_pagination__PInf8",star:"Exchanges_star__JNV+z",starActive:"Exchanges_starActive__KkWvL",starHead:"Exchanges_starHead__7Iifz",chartImg:"Exchanges_chartImg__Ofg0V",tableExchanges:"Exchanges_tableExchanges__tSgtq",exchangeLink:"Exchanges_exchangeLink__mcBE5"}},2579:function(e,n,t){"use strict";t.d(n,{Z:function(){return d},y:function(){return u}});var r=t(885),i=t(1413),a=t(5987),s=t(2791),c=["count","wrapper","className","containerClassName","containerTestId","circle","style"],o=["children"],l=s.createContext({});function d(e){for(var n,t,o,d=e.count,u=void 0===d?1:d,h=e.wrapper,f=e.className,x=e.containerClassName,g=e.containerTestId,p=e.circle,v=void 0!==p&&p,m=e.style,j=(0,a.Z)(e,c),Z=s.useContext(l),b=(0,i.Z)({},j),y=0,_=Object.entries(j);y<_.length;y++){var w=(0,r.Z)(_[y],2),E=w[0];"undefined"===typeof w[1]&&delete b[E]}var S=(0,i.Z)((0,i.Z)((0,i.Z)({},Z),b),{},{circle:v}),C=(0,i.Z)((0,i.Z)({},m),function(e){var n=e.baseColor,t=e.highlightColor,r=e.width,i=e.height,a=e.borderRadius,s=e.circle,c=e.direction,o=e.duration,l=e.enableAnimation,d=void 0===l||l,u={};return"rtl"===c&&(u["--animation-direction"]="reverse"),"number"===typeof o&&(u["--animation-duration"]="".concat(o,"s")),d||(u["--pseudo-element-display"]="none"),"string"!==typeof r&&"number"!==typeof r||(u.width=r),"string"!==typeof i&&"number"!==typeof i||(u.height=i),"string"!==typeof a&&"number"!==typeof a||(u.borderRadius=a),s&&(u.borderRadius="50%"),"undefined"!==typeof n&&(u["--base-color"]=n),"undefined"!==typeof t&&(u["--highlight-color"]=t),u}(S)),N="react-loading-skeleton";f&&(N+=" ".concat(f));for(var k=null!==(n=S.inline)&&void 0!==n&&n,P=[],A=Math.ceil(u),I=0;I<A;I++){var M=C;if(A>u&&I===A-1){var R=null!==(t=M.width)&&void 0!==t?t:"100%",H=u%1,T="number"===typeof R?R*H:"calc(".concat(R," * ").concat(H,")");M=(0,i.Z)((0,i.Z)({},M),{},{width:T})}var L=s.createElement("span",{className:N,style:M,key:I},"\u200c");k?P.push(L):P.push(s.createElement(s.Fragment,{key:I},L,s.createElement("br",null)))}return s.createElement("span",{className:x,"data-testid":g,"aria-live":"polite","aria-busy":null===(o=S.enableAnimation)||void 0===o||o},h?P.map((function(e,n){return s.createElement(h,{key:n},e)})):P)}function u(e){var n=e.children,t=(0,a.Z)(e,o);return s.createElement(l.Provider,{value:t},n)}}}]);
//# sourceMappingURL=210.22169287.chunk.js.map