/*! For license information please see 630.62c7d70e.chunk.js.LICENSE.txt */
(self.webpackChunkcrypto_project=self.webpackChunkcrypto_project||[]).push([[630],{7931:function(e,r,n){"use strict";var t=n(7246),s=n(184);r.Z=function(e){var r=e.page,n=e.setPage,i=e.count;return(0,s.jsx)(t.Z,{count:i,shape:"rounded",page:r,onChange:function(e,r){n(r)},style:{marginBottom:15}})}},8801:function(e,r,n){"use strict";n.d(r,{R:function(){return a}});var t=n(5716),s=n(2579),i=n(184),a=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.y,{baseColor:"#2c2b2b",highlightColor:"#4d4d4d",children:(0,i.jsx)("div",{className:t.Z.table,style:{marginBottom:-17,marginTop:-1},children:(0,i.jsx)("div",{children:(0,i.jsx)(s.Z,{height:50,width:"100%"})})})}),(0,i.jsx)(s.y,{baseColor:"#121212",highlightColor:"#262626",children:(0,i.jsx)("div",{className:t.Z.table,style:{marginBottom:15},children:(0,i.jsx)("div",{children:(0,i.jsx)(s.Z,{count:15,height:53,width:"100%"})})})})]})}},6630:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return p}});var t=n(885),s=n(5716),i=n(2791),a=n(5048),c=n(2591),o=n(3593),l=n(4329),d=n(8418),h=n(184),u=function(){var e=(0,l.C)((function(e){return e.crypto.exchanges}));return(0,h.jsx)(h.Fragment,{children:e.map((function(e){return(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{children:e.trust_score_rank}),(0,h.jsx)("td",{children:(0,h.jsx)("div",{children:"kraken"===e.id?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("a",{href:"https://www.kraken.com/en-us",target:"_blank",rel:"noopener noreferrer nofollow",children:(0,h.jsx)("img",{src:e.image,alt:e.name})}),(0,h.jsx)("a",{href:"https://www.kraken.com/en-us",target:"_blank",rel:"noopener noreferrer nofollow",children:e.name})]}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer nofollow",children:(0,h.jsx)("img",{src:e.image,alt:e.name})}),(0,h.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer nofollow",children:e.name})]})})}),(0,h.jsx)("td",{children:(0,h.jsxs)("div",{children:[(0,h.jsx)(o.Z,{now:e.trust_score,min:1,max:10}),e.trust_score]})}),(0,h.jsxs)("td",{children:[(0,d.y)(e.trade_volume_24h_btc),"\xa0BTC"]}),(0,h.jsx)("td",{children:e.year_established||"Unknown"}),(0,h.jsx)("td",{children:e.country||"Unknown"})]},e.id)}))})},x=n(7463),f=n(7931),m=n(8801),p=function(){var e=(0,l.T)(),r=(0,i.useState)(1),n=(0,t.Z)(r,2),o=n[0],d=n[1],p=(0,l.C)((function(e){return e.crypto.isLoadingCrypto}));return(0,i.useEffect)((function(){e((0,x.s$)(o))}),[o]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a.Z,{}),p?(0,h.jsx)(m.R,{}):(0,h.jsx)("section",{className:"".concat(s.Z.table," ").concat(s.Z.tableExchanges),children:(0,h.jsxs)(c.Z,{hover:!0,variant:"dark",children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{children:"#"}),(0,h.jsx)("th",{children:"Exchange"}),(0,h.jsx)("th",{children:"Trust Score"}),(0,h.jsx)("th",{children:"Total\xa0Volume 24h"}),(0,h.jsx)("th",{children:"Year Established"}),(0,h.jsx)("th",{children:"Country"})]})}),(0,h.jsx)("tbody",{children:(0,h.jsx)(u,{})})]})}),(0,h.jsx)("div",{className:s.Z.pagination,children:(0,h.jsx)(f.Z,{page:o,setPage:d,count:30})})]})}},5048:function(e,r,n){"use strict";n.d(r,{Z:function(){return c}});var t={iconTime:"NavCrypto_iconTime__I4Vhv",hidden:"NavCrypto_hidden__tN0cv",navCrypto:"NavCrypto_navCrypto__C9pNy",listLeft:"NavCrypto_listLeft__NSkYO",leftLink:"NavCrypto_leftLink__Y2MD1",arrow:"NavCrypto_arrow__v0AAw",home:"NavCrypto_home__deF99",currentPath:"NavCrypto_currentPath__sTRX4",listCenter:"NavCrypto_listCenter__bfrWA"},s=n(3504),i=n(3763),a=n(184),c=function(){var e=window.location.hash,r=/#\/crypto\/coins\//i,n=r.test(e);return e=e.replace(n?r:/#\/crypto\//i,""),(0,a.jsxs)("div",{className:t.navCrypto,children:[(0,a.jsxs)("ul",{className:t.listLeft,children:[(0,a.jsx)("li",{children:(0,a.jsxs)(s.OL,{to:"/",className:t.leftLink,children:[(0,a.jsx)("svg",{className:t.home,children:(0,a.jsx)("use",{href:i.Z+"#home"})}),(0,a.jsx)("svg",{className:t.arrow,children:(0,a.jsx)("use",{href:i.Z+"#arrow_right"})})]})}),(0,a.jsx)("li",{children:(0,a.jsxs)(s.OL,{to:"/crypto/coins",className:t.leftLink,children:["Crypto",(0,a.jsx)("svg",{className:t.arrow,children:(0,a.jsx)("use",{href:i.Z+"#arrow_right"})})]})}),(0,a.jsx)("li",{className:n?"":"hidden",children:(0,a.jsxs)(s.OL,{to:"/crypto/coins",className:t.leftLink,children:["Coins",(0,a.jsx)("svg",{className:t.arrow,children:(0,a.jsx)("use",{href:i.Z+"#arrow_right"})})]})}),(0,a.jsx)("li",{children:(0,a.jsx)("span",{className:t.currentPath,children:e})})]}),(0,a.jsxs)("ul",{className:t.listCenter,children:[(0,a.jsx)("li",{children:(0,a.jsx)(s.OL,{to:"/crypto/coins",className:t.centerLink,children:"Coins"})}),(0,a.jsx)("li",{children:(0,a.jsx)(s.OL,{to:"/crypto/exchanges",className:t.centerLink,children:"Exchanges"})}),(0,a.jsx)("li",{children:(0,a.jsx)(s.OL,{to:"/crypto/arbitrage",className:t.centerLink,children:"Arbitrage"})}),(0,a.jsx)("li",{children:(0,a.jsx)(s.OL,{to:"/crypto/converter",className:t.centerLink,children:"Converter"})})]})]})}},8418:function(e,r,n){"use strict";n.d(r,{J:function(){return s},y:function(){return t}});var t=function(e){return new Intl.NumberFormat("ua-UA").format(e)},s=function(e){var r=new RegExp(/\.?0*$/);return e<1e3?String(e).replace(r,""):t(e)}},1694:function(e,r){var n;!function(){"use strict";var t={}.hasOwnProperty;function s(){for(var e=[],r=0;r<arguments.length;r++){var n=arguments[r];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var a=s.apply(null,n);a&&e.push(a)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var c in n)t.call(n,c)&&n[c]&&e.push(c);else e.push(n.toString())}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(n=function(){return s}.apply(r,[]))||(e.exports=n)}()},1701:function(e,r,n){"use strict";n.d(r,{Ed:function(){return i},UI:function(){return s}});var t=n(2791);function s(e,r){var n=0;return t.Children.map(e,(function(e){return t.isValidElement(e)?r(e,n++):e}))}function i(e,r){var n=0;t.Children.forEach(e,(function(e){t.isValidElement(e)&&r(e,n++)}))}},3593:function(e,r,n){"use strict";var t=n(4942),s=n(1413),i=n(5987),a=n(1694),c=n.n(a),o=n(2791),l=n(162),d=n(1701),h=n(184),u=["min","now","max","label","visuallyHidden","striped","animated","className","style","variant","bsPrefix"],x=["isChild"],f=["min","now","max","label","visuallyHidden","striped","animated","bsPrefix","variant","className","children"];function m(e,r,n){var t=(e-r)/(n-r)*100;return Math.round(1e3*t)/1e3}function p(e,r){var n,a=e.min,o=e.now,l=e.max,d=e.label,x=e.visuallyHidden,f=e.striped,p=e.animated,v=e.className,j=e.style,g=e.variant,_=e.bsPrefix,b=(0,i.Z)(e,u);return(0,h.jsx)("div",(0,s.Z)((0,s.Z)({ref:r},b),{},{role:"progressbar",className:c()(v,"".concat(_,"-bar"),(n={},(0,t.Z)(n,"bg-".concat(g),g),(0,t.Z)(n,"".concat(_,"-bar-animated"),p),(0,t.Z)(n,"".concat(_,"-bar-striped"),p||f),n)),style:(0,s.Z)({width:"".concat(m(o,a,l),"%")},j),"aria-valuenow":o,"aria-valuemin":a,"aria-valuemax":l,children:x?(0,h.jsx)("span",{className:"visually-hidden",children:d}):d}))}var v=o.forwardRef((function(e,r){var n=e.isChild,t=(0,i.Z)(e,x);if(t.bsPrefix=(0,l.vE)(t.bsPrefix,"progress"),n)return p(t,r);var a=t.min,u=t.now,m=t.max,v=t.label,j=t.visuallyHidden,g=t.striped,_=t.animated,b=t.bsPrefix,y=t.variant,N=t.className,C=t.children,w=(0,i.Z)(t,f);return(0,h.jsx)("div",(0,s.Z)((0,s.Z)({ref:r},w),{},{className:c()(N,b),children:C?(0,d.UI)(C,(function(e){return(0,o.cloneElement)(e,{isChild:!0})})):p({min:a,now:u,max:m,label:v,visuallyHidden:j,striped:g,animated:_,bsPrefix:b,variant:y},r)}))}));v.displayName="ProgressBar",v.defaultProps={min:0,max:100,animated:!1,isChild:!1,visuallyHidden:!1,striped:!1},r.Z=v},2591:function(e,r,n){"use strict";var t=n(1413),s=n(5987),i=n(1694),a=n.n(i),c=n(2791),o=n(162),l=n(184),d=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],h=c.forwardRef((function(e,r){var n=e.bsPrefix,i=e.className,c=e.striped,h=e.bordered,u=e.borderless,x=e.hover,f=e.size,m=e.variant,p=e.responsive,v=(0,s.Z)(e,d),j=(0,o.vE)(n,"table"),g=a()(i,j,m&&"".concat(j,"-").concat(m),f&&"".concat(j,"-").concat(f),c&&"".concat(j,"-").concat("string"===typeof c?"striped-".concat(c):"striped"),h&&"".concat(j,"-bordered"),u&&"".concat(j,"-borderless"),x&&"".concat(j,"-hover")),_=(0,l.jsx)("table",(0,t.Z)((0,t.Z)({},v),{},{className:g,ref:r}));if(p){var b="".concat(j,"-responsive");return"string"===typeof p&&(b="".concat(b,"-").concat(p)),(0,l.jsx)("div",{className:b,children:_})}return _}));r.Z=h},162:function(e,r,n){"use strict";n.d(r,{SC:function(){return c},vE:function(){return a}});var t=n(2791),s=(n(184),["xxl","xl","lg","md","sm","xs"]),i=t.createContext({prefixes:{},breakpoints:s,minBreakpoint:"xs"});i.Consumer,i.Provider;function a(e,r){var n=(0,t.useContext)(i).prefixes;return e||n[r]||r}function c(){return"rtl"===(0,t.useContext)(i).dir}},5716:function(e,r){"use strict";r.Z={iconTime:"Exchanges_iconTime__NBobL",hidden:"Exchanges_hidden__uYU1h",table:"Exchanges_table__uW4Zi",tableCoins:"Exchanges_tableCoins__gnOYL",link:"Exchanges_link__sYGLk",percentagePlus:"Exchanges_percentagePlus__B2f1-",percentageMinus:"Exchanges_percentageMinus__LV62d",pagination:"Exchanges_pagination__pd8z5",tableExchanges:"Exchanges_tableExchanges__LnRmN"}}}]);
//# sourceMappingURL=630.62c7d70e.chunk.js.map