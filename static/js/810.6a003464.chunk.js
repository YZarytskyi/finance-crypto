/*! For license information please see 810.6a003464.chunk.js.LICENSE.txt */
(self.webpackChunkcrypto_project=self.webpackChunkcrypto_project||[]).push([[810],{3683:function(e,n,t){"use strict";t.d(n,{R:function(){return s}});var r=t(6283),i=t(2579),a=t(184),s=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(i.y,{baseColor:"#121212",highlightColor:"#262626",children:[(0,a.jsx)("tr",{children:(0,a.jsx)("td",{colSpan:9,children:(0,a.jsx)(i.Z,{height:55,width:"100%"})})}),(0,a.jsx)("tr",{children:(0,a.jsx)("td",{colSpan:9,children:(0,a.jsx)(i.Z,{height:55,width:"100%"})})}),(0,a.jsx)("tr",{children:(0,a.jsx)("td",{colSpan:9,children:(0,a.jsx)(i.Z,{height:55,width:"100%"})})}),(0,a.jsx)("tr",{children:(0,a.jsx)("td",{colSpan:9,children:(0,a.jsx)(i.Z,{height:55,width:"100%"})})}),(0,a.jsx)("tr",{children:(0,a.jsx)("td",{colSpan:9,children:(0,a.jsx)(i.Z,{height:55,width:"100%"})})}),(0,a.jsx)("tr",{children:(0,a.jsx)("td",{colSpan:9,children:(0,a.jsx)(i.Z,{height:55,width:"100%"})})}),(0,a.jsx)("tr",{children:(0,a.jsx)("td",{colSpan:9,children:(0,a.jsx)(i.Z,{height:55,width:"100%"})})}),(0,a.jsx)("tr",{children:(0,a.jsx)("td",{colSpan:9,children:(0,a.jsx)(i.Z,{height:55,width:"100%"})})}),(0,a.jsx)("tr",{children:(0,a.jsx)("td",{colSpan:9,children:(0,a.jsx)(i.Z,{height:55,width:"100%"})})}),(0,a.jsx)("tr",{children:(0,a.jsx)("td",{colSpan:9,children:(0,a.jsx)(i.Z,{height:55,width:"100%"})})}),(0,a.jsx)("tr",{children:(0,a.jsx)("td",{colSpan:9,children:(0,a.jsx)(i.Z,{height:55,width:"100%"})})}),(0,a.jsx)("tr",{children:(0,a.jsx)("td",{colSpan:9,children:(0,a.jsx)(i.Z,{height:55,width:"100%"})})}),(0,a.jsx)("tr",{children:(0,a.jsx)("td",{colSpan:9,children:(0,a.jsx)(i.Z,{height:55,width:"100%"})})}),(0,a.jsx)("tr",{children:(0,a.jsx)("td",{colSpan:9,children:(0,a.jsx)(i.Z,{height:55,width:"100%"})})}),(0,a.jsx)("tr",{className:r.Z.table,style:{marginBottom:15},children:(0,a.jsx)("td",{colSpan:9,children:(0,a.jsx)(i.Z,{height:53,width:"100%"})})})]})})}},8810:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return m}});var r=t(885),i=t(2791),a=t(2591),s=t(4956),c=t(8872),l=t(3683),o=t(3504),d=t(3593),h=t(8418),u=t(6283),x=t(184),f=function(e){var n=e.exchange;return(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:n.trust_score_rank}),(0,x.jsx)("td",{children:(0,x.jsxs)(o.rU,{to:"".concat(n.id),className:u.Z.exchangeLink,children:[(0,x.jsx)("img",{src:n.image,alt:n.name}),n.name]})}),(0,x.jsx)("td",{children:(0,x.jsxs)("div",{children:[(0,x.jsx)(d.Z,{now:n.trust_score,min:1,max:10}),n.trust_score]})}),(0,x.jsxs)("td",{children:[(0,h.yC)(n.trade_volume_24h_btc),"\xa0BTC"]}),(0,x.jsx)("td",{children:n.year_established||"Unknown"}),(0,x.jsx)("td",{children:n.country||"Unknown"})]},n.id)},p=t(509),m=function(){var e=(0,s.T)(),n=(0,i.useState)(1),t=(0,r.Z)(n,2),o=t[0],d=t[1],h=(0,s.C)((function(e){return e.exchange})),m=h.isLoadingExchanges,j=h.exchanges;return(0,i.useEffect)((function(){e((0,p.s$)(o))}),[o]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("section",{className:"".concat(u.Z.table," ").concat(u.Z.tableExchanges),children:(0,x.jsxs)(a.Z,{hover:!0,variant:"dark",children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{children:"#"}),(0,x.jsx)("th",{children:"Exchange"}),(0,x.jsx)("th",{children:"Trust Score"}),(0,x.jsx)("th",{children:"Total\xa0Volume 24h"}),(0,x.jsx)("th",{children:"Year Established"}),(0,x.jsx)("th",{children:"Country"})]})}),(0,x.jsx)("tbody",{children:m?(0,x.jsx)(l.R,{}):(0,x.jsx)(x.Fragment,{children:j.map((function(e){return(0,x.jsx)(f,{exchange:e},e.id)}))})})]})}),(0,x.jsx)("div",{className:u.Z.pagination,children:(0,x.jsx)(c.vI,{page:o,setPage:d,count:10})})]})}},8418:function(e,n,t){"use strict";t.d(n,{J2:function(){return i},eX:function(){return a},po:function(){return s},yC:function(){return r}});var r=function(e){return new Intl.NumberFormat("ua-UA").format(e)},i=function(e){var n=new RegExp(/\.?0*$/);return e<1e3?String(e).replace(n,""):r(e)},a=function(e){return e<1e-8?Math.trunc(1e10*e)/1e10:e<1e-6?Math.trunc(1e8*e)/1e8:e<1e-4?Math.trunc(1e6*e)/1e6:e<.01?Math.trunc(1e4*e)/1e4:Math.trunc(100*e)/100},s=function(e){return e>0?"percentagePlus":"percentageMinus"}},1694:function(e,n){var t;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var a=typeof t;if("string"===a||"number"===a)e.push(t);else if(Array.isArray(t)){if(t.length){var s=i.apply(null,t);s&&e.push(s)}}else if("object"===a)if(t.toString===Object.prototype.toString)for(var c in t)r.call(t,c)&&t[c]&&e.push(c);else e.push(t.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(t=function(){return i}.apply(n,[]))||(e.exports=t)}()},1701:function(e,n,t){"use strict";t.d(n,{Ed:function(){return a},UI:function(){return i}});var r=t(2791);function i(e,n){var t=0;return r.Children.map(e,(function(e){return r.isValidElement(e)?n(e,t++):e}))}function a(e,n){var t=0;r.Children.forEach(e,(function(e){r.isValidElement(e)&&n(e,t++)}))}},3593:function(e,n,t){"use strict";var r=t(4942),i=t(1413),a=t(5987),s=t(1694),c=t.n(s),l=t(2791),o=t(162),d=t(1701),h=t(184),u=["min","now","max","label","visuallyHidden","striped","animated","className","style","variant","bsPrefix"],x=["isChild"],f=["min","now","max","label","visuallyHidden","striped","animated","bsPrefix","variant","className","children"];function p(e,n,t){var r=(e-n)/(t-n)*100;return Math.round(1e3*r)/1e3}function m(e,n){var t,s=e.min,l=e.now,o=e.max,d=e.label,x=e.visuallyHidden,f=e.striped,m=e.animated,j=e.className,g=e.style,v=e.variant,b=e.bsPrefix,Z=(0,a.Z)(e,u);return(0,h.jsx)("div",(0,i.Z)((0,i.Z)({ref:n},Z),{},{role:"progressbar",className:c()(j,"".concat(b,"-bar"),(t={},(0,r.Z)(t,"bg-".concat(v),v),(0,r.Z)(t,"".concat(b,"-bar-animated"),m),(0,r.Z)(t,"".concat(b,"-bar-striped"),m||f),t)),style:(0,i.Z)({width:"".concat(p(l,s,o),"%")},g),"aria-valuenow":l,"aria-valuemin":s,"aria-valuemax":o,children:x?(0,h.jsx)("span",{className:"visually-hidden",children:d}):d}))}var j=l.forwardRef((function(e,n){var t=e.isChild,r=(0,a.Z)(e,x);if(r.bsPrefix=(0,o.vE)(r.bsPrefix,"progress"),t)return m(r,n);var s=r.min,u=r.now,p=r.max,j=r.label,g=r.visuallyHidden,v=r.striped,b=r.animated,Z=r.bsPrefix,y=r.variant,_=r.className,w=r.children,E=(0,a.Z)(r,f);return(0,h.jsx)("div",(0,i.Z)((0,i.Z)({ref:n},E),{},{className:c()(_,Z),children:w?(0,d.UI)(w,(function(e){return(0,l.cloneElement)(e,{isChild:!0})})):m({min:s,now:u,max:p,label:j,visuallyHidden:g,striped:v,animated:b,bsPrefix:Z,variant:y},n)}))}));j.displayName="ProgressBar",j.defaultProps={min:0,max:100,animated:!1,isChild:!1,visuallyHidden:!1,striped:!1},n.Z=j},2591:function(e,n,t){"use strict";var r=t(1413),i=t(5987),a=t(1694),s=t.n(a),c=t(2791),l=t(162),o=t(184),d=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],h=c.forwardRef((function(e,n){var t=e.bsPrefix,a=e.className,c=e.striped,h=e.bordered,u=e.borderless,x=e.hover,f=e.size,p=e.variant,m=e.responsive,j=(0,i.Z)(e,d),g=(0,l.vE)(t,"table"),v=s()(a,g,p&&"".concat(g,"-").concat(p),f&&"".concat(g,"-").concat(f),c&&"".concat(g,"-").concat("string"===typeof c?"striped-".concat(c):"striped"),h&&"".concat(g,"-bordered"),u&&"".concat(g,"-borderless"),x&&"".concat(g,"-hover")),b=(0,o.jsx)("table",(0,r.Z)((0,r.Z)({},j),{},{className:v,ref:n}));if(m){var Z="".concat(g,"-responsive");return"string"===typeof m&&(Z="".concat(Z,"-").concat(m)),(0,o.jsx)("div",{className:Z,children:b})}return b}));n.Z=h},162:function(e,n,t){"use strict";t.d(n,{SC:function(){return c},vE:function(){return s}});var r=t(2791),i=(t(184),["xxl","xl","lg","md","sm","xs"]),a=r.createContext({prefixes:{},breakpoints:i,minBreakpoint:"xs"});a.Consumer,a.Provider;function s(e,n){var t=(0,r.useContext)(a).prefixes;return e||t[n]||n}function c(){return"rtl"===(0,r.useContext)(a).dir}},6283:function(e,n){"use strict";n.Z={iconTime:"Exchanges_iconTime__Rn2j7",hidden:"Exchanges_hidden__eoGC4",percentagePlus:"Exchanges_percentagePlus__V93Dh",percentageMinus:"Exchanges_percentageMinus__gnDx1",table:"Exchanges_table__8yRfY",tableCoins:"Exchanges_tableCoins__1nSfo",link:"Exchanges_link__Fu+aX",pagination:"Exchanges_pagination__PInf8",tableExchanges:"Exchanges_tableExchanges__tSgtq",exchangeLink:"Exchanges_exchangeLink__mcBE5"}},2579:function(e,n,t){"use strict";t.d(n,{Z:function(){return d},y:function(){return h}});var r=t(885),i=t(1413),a=t(5987),s=t(2791),c=["count","wrapper","className","containerClassName","containerTestId","circle","style"],l=["children"],o=s.createContext({});function d(e){for(var n,t,l,d=e.count,h=void 0===d?1:d,u=e.wrapper,x=e.className,f=e.containerClassName,p=e.containerTestId,m=e.circle,j=void 0!==m&&m,g=e.style,v=(0,a.Z)(e,c),b=s.useContext(o),Z=(0,i.Z)({},v),y=0,_=Object.entries(v);y<_.length;y++){var w=(0,r.Z)(_[y],2),E=w[0];"undefined"===typeof w[1]&&delete Z[E]}var C=(0,i.Z)((0,i.Z)((0,i.Z)({},b),Z),{},{circle:j}),S=(0,i.Z)((0,i.Z)({},g),function(e){var n=e.baseColor,t=e.highlightColor,r=e.width,i=e.height,a=e.borderRadius,s=e.circle,c=e.direction,l=e.duration,o=e.enableAnimation,d=void 0===o||o,h={};return"rtl"===c&&(h["--animation-direction"]="reverse"),"number"===typeof l&&(h["--animation-duration"]="".concat(l,"s")),d||(h["--pseudo-element-display"]="none"),"string"!==typeof r&&"number"!==typeof r||(h.width=r),"string"!==typeof i&&"number"!==typeof i||(h.height=i),"string"!==typeof a&&"number"!==typeof a||(h.borderRadius=a),s&&(h.borderRadius="50%"),"undefined"!==typeof n&&(h["--base-color"]=n),"undefined"!==typeof t&&(h["--highlight-color"]=t),h}(C)),N="react-loading-skeleton";x&&(N+=" ".concat(x));for(var k=null!==(n=C.inline)&&void 0!==n&&n,P=[],M=Math.ceil(h),R=0;R<M;R++){var T=S;if(M>h&&R===M-1){var I=null!==(t=T.width)&&void 0!==t?t:"100%",F=h%1,H="number"===typeof I?I*F:"calc(".concat(I," * ").concat(F,")");T=(0,i.Z)((0,i.Z)({},T),{},{width:H})}var U=s.createElement("span",{className:N,style:T,key:R},"\u200c");k?P.push(U):P.push(s.createElement(s.Fragment,{key:R},U,s.createElement("br",null)))}return s.createElement("span",{className:f,"data-testid":p,"aria-live":"polite","aria-busy":null===(l=C.enableAnimation)||void 0===l||l},u?P.map((function(e,n){return s.createElement(u,{key:n},e)})):P)}function h(e){var n=e.children,t=(0,a.Z)(e,l);return s.createElement(o.Provider,{value:t},n)}}}]);
//# sourceMappingURL=810.6a003464.chunk.js.map