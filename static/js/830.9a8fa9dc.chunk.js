"use strict";(self.webpackChunkcrypto_project=self.webpackChunkcrypto_project||[]).push([[830],{1830:function(e,n,i){i.r(n),i.d(n,{default:function(){return x}});var r=i(885),t={iconTime:"SelectedCoin_iconTime__V4jRz",hidden:"SelectedCoin_hidden__I83JN",coin:"SelectedCoin_coin__X3Uxn",descriptionChart:"SelectedCoin_descriptionChart__97Ku9",description:"SelectedCoin_description__6bK8-",rank:"SelectedCoin_rank__T2fby",imgName:"SelectedCoin_imgName__ZoaeZ",pricePercentage:"SelectedCoin_pricePercentage__J0nUT",progressBar:"SelectedCoin_progressBar__04Qnm",lowHigh:"SelectedCoin_lowHigh__6HfiP",marketCapInfo:"SelectedCoin_marketCapInfo__VCiwx",chartContainer:"SelectedCoin_chartContainer__8bwzy",chartButtons:"SelectedCoin_chartButtons__qIOCP",coinInfo:"SelectedCoin_coinInfo__ueEqR"},a=i(2791),s=i(6871),c=i(3496),l=i(4329),o=i(184),d=function(e){var n=e.setDays,i=(0,l.C)((function(e){return e.crypto.selectedCoinMarketChart})).prices,s=(0,a.useState)(30),d=(0,r.Z)(s,2),h=d[0],u=d[1],p=[{data:i}],m={chart:{id:"area-datetime",type:"area"},yaxis:{tickAmount:6,labels:{show:!0,align:"right",style:{colors:"#eaeaea",fontSize:"12px",fontWeight:400},formatter:function(e){return 0===e?0:e<1?e.toFixed(6):e>1&&e<100?e.toFixed(2):(n=e,new Intl.NumberFormat("ua-UA").format(n));var n}}},xaxis:{show:!0,type:"datetime",labels:{style:{colors:"#eaeaea",fontSize:"12px",fontFamily:"Helvetica, Arial, sans-serif",fontWeight:400}}},dataLabels:{enabled:!1},markers:{size:0,style:"hollow"},stroke:{show:!0,curve:"straight",lineCap:"butt",width:2,dashArray:0},tooltip:{enabled:!0,theme:"dark",style:{fontSize:"12px",fontFamily:void 0},x:{format:"dd MMM yyyy"},y:{formatter:function(e){return e>5?e.toFixed(2):e.toFixed(5)},title:{formatter:function(){return"$"}}}},fill:{type:"gradient",gradient:{type:"vertical",shadeIntensity:0,opacityFrom:.1,opacityTo:.7,stops:[0,100]}}};return(0,o.jsxs)("div",{className:t.chartTools,children:[(0,o.jsxs)("div",{className:t.chartButtons,children:[(0,o.jsx)("button",{onClick:function(){return n(1)},children:"1d"}),(0,o.jsx)("button",{onClick:function(){return n(7)},children:"7d"}),(0,o.jsx)("button",{onClick:function(){return n(30)},children:"1m"}),(0,o.jsx)("button",{onClick:function(){return n(183)},children:"6m"}),(0,o.jsx)("button",{onClick:function(){return n(365)},children:"1y"}),(0,o.jsx)("button",{onClick:function(){return n("max")},children:"All"}),(0,o.jsxs)("span",{className:t.inputDays,children:[(0,o.jsx)("input",{type:"number",placeholder:"Days",onChange:function(e){return u(Number(e.target.value))}}),(0,o.jsx)("button",{onClick:function(){return n(h)},children:"Show"})]})]}),(0,o.jsx)(c.Z,{options:m,series:p,type:"area",height:"300vw"})]})},h=i(7463),u=i(3593),p=i(5048),m=i(8418),x=function(){var e=(0,s.UO)().coinId,n=(0,l.C)((function(e){return e.crypto})),i=n.markets,c=n.coinDescription,x=(0,l.T)(),_=(0,a.useState)(30),f=(0,r.Z)(_,2),v=f[0],y=f[1];(0,a.useEffect)((function(){return x((0,h.KE)([e,v])),function(){x((0,h.cq)())}}),[v]),(0,a.useEffect)((function(){C||x((0,h.pd)())}),[]),(0,a.useEffect)((function(){return x((0,h.E3)(e)),function(){x((0,h.Cy)())}}),[]);var j,C=i.find((function(n){return n.id===e})),N=c&&c.replace(/<a\s+href="(.*?)">.*?<\/a>/g,"");return C?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(p.Z,{}),(0,o.jsxs)("section",{className:t.coin,children:[(0,o.jsxs)("div",{className:t.descriptionChart,children:[(0,o.jsxs)("div",{className:t.description,children:[(0,o.jsxs)("p",{className:t.rank,children:["Rank #",C.market_cap_rank]}),(0,o.jsxs)("div",{className:t.imgName,children:[(0,o.jsx)("img",{src:C.image,width:55,height:55,alt:C.name}),(0,o.jsx)("p",{children:"".concat(C.name," (").concat(C.symbol.toUpperCase(),")")})]}),(0,o.jsxs)("div",{className:t.pricePercentage,children:[(0,o.jsxs)("div",{children:[C.current_price," $"]}),(0,o.jsxs)("div",{className:(j=C.price_change_percentage_24h,j>0?t.percentagePlus:t.percentageMinus),children:[C.price_change_percentage_24h.toFixed(2),"%"]})]}),(0,o.jsx)("div",{className:t.progressBar,children:(0,o.jsx)(u.Z,{now:C.current_price,min:C.low_24h,max:C.high_24h})}),(0,o.jsxs)("div",{className:t.lowHigh,children:[(0,o.jsxs)("div",{children:[C.low_24h>C.current_price?C.current_price:C.low_24h," ","$"]}),(0,o.jsx)("div",{children:"24h"}),(0,o.jsxs)("div",{children:[C.high_24h<C.current_price?C.current_price:C.high_24h," ","$"]})]}),(0,o.jsxs)("div",{className:t.marketCapInfo,children:[C.market_cap&&(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{children:"Market Capitalization:"}),(0,o.jsxs)("div",{children:[(0,m.y)(C.market_cap)," $"]})]}),C.total_volume&&(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{children:"Trading Volume 24h:"}),(0,o.jsxs)("div",{children:[(0,m.y)(C.total_volume)," $"]})]}),C.fully_diluted_valuation&&(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{children:"Fully diluted valuation:"}),(0,o.jsxs)("div",{children:[(0,m.y)(C.fully_diluted_valuation)," $"]})]}),C.circulating_supply&&(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{children:"Circulating Supply:"}),(0,o.jsxs)("div",{children:[(0,m.y)(+C.circulating_supply.toFixed(0))," $"]})]}),C.total_supply&&(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{children:"Total Supply:"}),(0,o.jsxs)("div",{children:[(0,m.y)(+C.total_supply.toFixed(0))," $"]})]}),C.max_supply&&(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{children:"Max Supply:"}),(0,o.jsxs)("div",{children:[(0,m.y)(C.max_supply)," $"]})]})]})]}),(0,o.jsx)("div",{className:t.chartContainer,children:(0,o.jsx)(d,{setDays:y})})]}),(0,o.jsx)("p",{className:t.coinInfo,children:N})]})]}):null}},5048:function(e,n,i){i.d(n,{Z:function(){return c}});var r={iconTime:"NavCrypto_iconTime__I4Vhv",hidden:"NavCrypto_hidden__tN0cv",navCrypto:"NavCrypto_navCrypto__C9pNy",listLeft:"NavCrypto_listLeft__NSkYO",leftLink:"NavCrypto_leftLink__Y2MD1",arrow:"NavCrypto_arrow__v0AAw",home:"NavCrypto_home__deF99",currentPath:"NavCrypto_currentPath__sTRX4",listCenter:"NavCrypto_listCenter__bfrWA"},t=i(3504),a=i(3763),s=i(184),c=function(){var e=window.location.hash,n=/#\/crypto\/coins\//i,i=n.test(e);return e=e.replace(i?n:/#\/crypto\//i,""),(0,s.jsxs)("div",{className:r.navCrypto,children:[(0,s.jsxs)("ul",{className:r.listLeft,children:[(0,s.jsx)("li",{children:(0,s.jsxs)(t.OL,{to:"/",className:r.leftLink,children:[(0,s.jsx)("svg",{className:r.home,children:(0,s.jsx)("use",{href:a.Z+"#home"})}),(0,s.jsx)("svg",{className:r.arrow,children:(0,s.jsx)("use",{href:a.Z+"#arrow_right"})})]})}),(0,s.jsx)("li",{children:(0,s.jsxs)(t.OL,{to:"/crypto/coins",className:r.leftLink,children:["Crypto",(0,s.jsx)("svg",{className:r.arrow,children:(0,s.jsx)("use",{href:a.Z+"#arrow_right"})})]})}),(0,s.jsx)("li",{className:i?"":"hidden",children:(0,s.jsxs)(t.OL,{to:"/crypto/coins",className:r.leftLink,children:["Coins",(0,s.jsx)("svg",{className:r.arrow,children:(0,s.jsx)("use",{href:a.Z+"#arrow_right"})})]})}),(0,s.jsx)("li",{children:(0,s.jsx)("span",{className:r.currentPath,children:e})})]}),(0,s.jsxs)("ul",{className:r.listCenter,children:[(0,s.jsx)("li",{children:(0,s.jsx)(t.OL,{to:"/crypto/coins",className:r.centerLink,children:"Coins"})}),(0,s.jsx)("li",{children:(0,s.jsx)(t.OL,{to:"/crypto/exchanges",className:r.centerLink,children:"Exchanges"})}),(0,s.jsx)("li",{children:(0,s.jsx)(t.OL,{to:"/crypto/arbitrage",className:r.centerLink,children:"Arbitrage"})}),(0,s.jsx)("li",{children:(0,s.jsx)(t.OL,{to:"/crypto/converter",className:r.centerLink,children:"Converter"})})]})]})}},8418:function(e,n,i){i.d(n,{J:function(){return t},y:function(){return r}});var r=function(e){return new Intl.NumberFormat("ua-UA").format(e)},t=function(e){var n=new RegExp(/\.?0*$/);return e<1e3?String(e).replace(n,""):r(e)}},1701:function(e,n,i){i.d(n,{Ed:function(){return a},UI:function(){return t}});var r=i(2791);function t(e,n){var i=0;return r.Children.map(e,(function(e){return r.isValidElement(e)?n(e,i++):e}))}function a(e,n){var i=0;r.Children.forEach(e,(function(e){r.isValidElement(e)&&n(e,i++)}))}},3593:function(e,n,i){var r=i(4942),t=i(1413),a=i(5987),s=i(1694),c=i.n(s),l=i(2791),o=i(162),d=i(1701),h=i(184),u=["min","now","max","label","visuallyHidden","striped","animated","className","style","variant","bsPrefix"],p=["isChild"],m=["min","now","max","label","visuallyHidden","striped","animated","bsPrefix","variant","className","children"];function x(e,n,i){var r=(e-n)/(i-n)*100;return Math.round(1e3*r)/1e3}function _(e,n){var i,s=e.min,l=e.now,o=e.max,d=e.label,p=e.visuallyHidden,m=e.striped,_=e.animated,f=e.className,v=e.style,y=e.variant,j=e.bsPrefix,C=(0,a.Z)(e,u);return(0,h.jsx)("div",(0,t.Z)((0,t.Z)({ref:n},C),{},{role:"progressbar",className:c()(f,"".concat(j,"-bar"),(i={},(0,r.Z)(i,"bg-".concat(y),y),(0,r.Z)(i,"".concat(j,"-bar-animated"),_),(0,r.Z)(i,"".concat(j,"-bar-striped"),_||m),i)),style:(0,t.Z)({width:"".concat(x(l,s,o),"%")},v),"aria-valuenow":l,"aria-valuemin":s,"aria-valuemax":o,children:p?(0,h.jsx)("span",{className:"visually-hidden",children:d}):d}))}var f=l.forwardRef((function(e,n){var i=e.isChild,r=(0,a.Z)(e,p);if(r.bsPrefix=(0,o.vE)(r.bsPrefix,"progress"),i)return _(r,n);var s=r.min,u=r.now,x=r.max,f=r.label,v=r.visuallyHidden,y=r.striped,j=r.animated,C=r.bsPrefix,N=r.variant,g=r.className,b=r.children,w=(0,a.Z)(r,m);return(0,h.jsx)("div",(0,t.Z)((0,t.Z)({ref:n},w),{},{className:c()(g,C),children:b?(0,d.UI)(b,(function(e){return(0,l.cloneElement)(e,{isChild:!0})})):_({min:s,now:u,max:x,label:f,visuallyHidden:v,striped:y,animated:j,bsPrefix:C,variant:N},n)}))}));f.displayName="ProgressBar",f.defaultProps={min:0,max:100,animated:!1,isChild:!1,visuallyHidden:!1,striped:!1},n.Z=f}}]);
//# sourceMappingURL=830.9a8fa9dc.chunk.js.map