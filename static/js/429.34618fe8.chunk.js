"use strict";(self.webpackChunkcrypto_project=self.webpackChunkcrypto_project||[]).push([[429],{5429:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var i=t(885),r=t(2791),a=t(6871),s={chartButtons:"SelectedCoin_chartButtons__+4ybl",iconTime:"SelectedCoin_iconTime__Lc5dp",hidden:"SelectedCoin_hidden__LbAGD",percentagePlus:"SelectedCoin_percentagePlus__1hdtu",percentageMinus:"SelectedCoin_percentageMinus__LQ6tx",coin:"SelectedCoin_coin__kLLTX",descriptionChart:"SelectedCoin_descriptionChart__SAxxQ",description:"SelectedCoin_description__3kPc2",rank:"SelectedCoin_rank__TA2SY",imgName:"SelectedCoin_imgName__1Lgq6",pricePercentage:"SelectedCoin_pricePercentage__xwWqB",progressBar:"SelectedCoin_progressBar__Ycm1O",lowHigh:"SelectedCoin_lowHigh__BJTUW",marketCapInfo:"SelectedCoin_marketCapInfo__TQ+Ff",chartContainer:"SelectedCoin_chartContainer__bvqkp",coinInfo:"SelectedCoin_coinInfo__S8YaG"},c=t(3496),l=t(4956),o=t(184),d=function(e){var n=e.setDays,t=(0,l.C)((function(e){return e.crypto.selectedCoinMarketChart})).prices,a=(0,r.useState)(30),d=(0,i.Z)(a,2),u=d[0],h=d[1],p=[{data:t&&t}],m={chart:{id:"area-datetime",type:"area"},yaxis:{tickAmount:6,labels:{show:!0,align:"right",style:{colors:"#eaeaea",fontSize:"12px",fontWeight:400},formatter:function(e){return e?e<1?e.toFixed(6):e>1&&e<100?e.toFixed(2):(n=e,new Intl.NumberFormat("ua-UA").format(n)):0;var n}}},xaxis:{show:!0,type:"datetime",labels:{style:{colors:"#eaeaea",fontSize:"12px",fontFamily:"Helvetica, Arial, sans-serif",fontWeight:400}}},dataLabels:{enabled:!1},markers:{size:0,style:"hollow"},stroke:{show:!0,curve:"straight",lineCap:"butt",width:2,dashArray:0},tooltip:{enabled:!0,theme:"dark",style:{fontSize:"12px",fontFamily:void 0},x:{format:"dd MMM yyyy"},y:{formatter:function(e){return e>5?e.toFixed(2):e.toFixed(5)},title:{formatter:function(){return"$"}}}},fill:{type:"gradient",gradient:{type:"vertical",shadeIntensity:0,opacityFrom:.1,opacityTo:.7,stops:[0,100]}}};return(0,o.jsxs)("div",{className:s.chartTools,children:[(0,o.jsxs)("div",{className:s.chartButtons,children:[(0,o.jsx)("button",{type:"button",onClick:function(){return n(1)},children:"1d"}),(0,o.jsx)("button",{type:"button",onClick:function(){return n(7)},children:"7d"}),(0,o.jsx)("button",{type:"button",onClick:function(){return n(30)},children:"1m"}),(0,o.jsx)("button",{type:"button",onClick:function(){return n(183)},children:"6m"}),(0,o.jsx)("button",{type:"button",onClick:function(){return n(365)},children:"1y"}),(0,o.jsx)("button",{type:"button",onClick:function(){return n("max")},children:"All"}),(0,o.jsxs)("span",{className:s.inputDays,children:[(0,o.jsx)("input",{type:"number",placeholder:"Days",onChange:function(e){h(Number(e.target.value))}}),(0,o.jsx)("button",{type:"button",onClick:function(e){n(u)},children:"Show"})]})]}),(0,o.jsx)(c.Z,{options:m,series:p,type:"area",height:"300vw"})]})},u=t(7463),h=t(3593),p=t(8418),m=t(692),x=function(){var e=(0,a.UO)().coinId,n=(0,l.C)((function(e){return e.crypto.selectedCoin})),t=(0,l.T)(),c=(0,r.useState)(30),x=(0,i.Z)(c,2),_=x[0],f=x[1];(0,r.useEffect)((function(){return t((0,u.KE)([e,_])),function(){t((0,u.cq)())}}),[_]),(0,r.useEffect)((function(){return e&&t((0,u.F_)(e)),function(){t((0,u.FI)())}}),[e]);var v,y=null===n||void 0===n?void 0:n.description.replace(/<a\s+href="(.*?)">.*?<\/a>,?/g,"");return n?(0,o.jsxs)("section",{className:s.coin,children:[(0,o.jsxs)("div",{className:s.descriptionChart,children:[(0,o.jsxs)("div",{className:s.description,children:[(0,o.jsxs)("p",{className:s.rank,children:["Rank #",n.market_cap_rank]}),(0,o.jsxs)("div",{className:s.imgName,children:[(0,o.jsx)("img",{src:n.image,width:55,height:55,alt:n.name}),(0,o.jsx)("p",{children:"".concat(n.name," (").concat(n.symbol.toUpperCase(),")")})]}),(0,o.jsxs)("div",{className:s.pricePercentage,children:[(0,o.jsxs)("div",{children:[n.current_price," $"]}),(0,o.jsxs)("div",{className:(v=null===n||void 0===n?void 0:n.price_change_percentage_24h,v>0?s.percentagePlus:s.percentageMinus),children:[n.price_change_percentage_24h.toFixed(2),"%"]})]}),(0,o.jsx)("div",{className:s.progressBar,children:(0,o.jsx)(h.Z,{now:n.current_price,min:n.low_24h,max:n.high_24h})}),(0,o.jsxs)("div",{className:s.lowHigh,children:[(0,o.jsxs)("div",{children:[n.low_24h>n.current_price?n.current_price:n.low_24h," ","$"]}),(0,o.jsx)("div",{children:"24h"}),(0,o.jsxs)("div",{children:[n.high_24h<n.current_price?n.current_price:n.high_24h," ","$"]})]}),(0,o.jsxs)("div",{className:s.marketCapInfo,children:[n.market_cap&&(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{children:"Market Capitalization:"}),(0,o.jsxs)("div",{children:[(0,p.yC)(n.market_cap)," $"]})]}),n.total_volume&&(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{children:"Trading Volume 24h:"}),(0,o.jsxs)("div",{children:[(0,p.yC)(n.total_volume)," $"]})]}),n.fully_diluted_valuation&&(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{children:"Fully diluted valuation:"}),(0,o.jsxs)("div",{children:[(0,p.yC)(n.fully_diluted_valuation)," $"]})]}),n.circulating_supply&&(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{children:"Circulating Supply:"}),(0,o.jsxs)("div",{children:[(0,p.yC)(+n.circulating_supply.toFixed(0))," ","$"]})]}),n.total_supply&&(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{children:"Total Supply:"}),(0,o.jsxs)("div",{children:[(0,p.yC)(+n.total_supply.toFixed(0))," $"]})]}),n.max_supply&&(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{children:"Max Supply:"}),(0,o.jsxs)("div",{children:[(0,p.yC)(n.max_supply)," $"]})]})]})]}),(0,o.jsx)("div",{className:s.chartContainer,children:(0,o.jsx)(d,{setDays:f})})]}),(0,o.jsx)("p",{className:s.coinInfo,children:y})]}):(0,o.jsx)(m.p9,{})}},8418:function(e,n,t){t.d(n,{J2:function(){return r},eX:function(){return a},po:function(){return s},yC:function(){return i}});var i=function(e){return new Intl.NumberFormat("ua-UA").format(e)},r=function(e){var n=new RegExp(/\.?0*$/);return e<1e3?String(e).replace(n,""):i(e)},a=function(e){return e<1e-8?Math.trunc(1e10*e)/1e10:e<1e-6?Math.trunc(1e8*e)/1e8:e<1e-4?Math.trunc(1e6*e)/1e6:e<.01?Math.trunc(1e4*e)/1e4:Math.trunc(100*e)/100},s=function(e){return e>0?"percentagePlus":"percentageMinus"}},3593:function(e,n,t){var i=t(4942),r=t(1413),a=t(5987),s=t(1694),c=t.n(s),l=t(2791),o=t(162),d=t(1701),u=t(184),h=["min","now","max","label","visuallyHidden","striped","animated","className","style","variant","bsPrefix"],p=["isChild"],m=["min","now","max","label","visuallyHidden","striped","animated","bsPrefix","variant","className","children"];function x(e,n,t){var i=(e-n)/(t-n)*100;return Math.round(1e3*i)/1e3}function _(e,n){var t,s=e.min,l=e.now,o=e.max,d=e.label,p=e.visuallyHidden,m=e.striped,_=e.animated,f=e.className,v=e.style,y=e.variant,j=e.bsPrefix,C=(0,a.Z)(e,h);return(0,u.jsx)("div",(0,r.Z)((0,r.Z)({ref:n},C),{},{role:"progressbar",className:c()(f,"".concat(j,"-bar"),(t={},(0,i.Z)(t,"bg-".concat(y),y),(0,i.Z)(t,"".concat(j,"-bar-animated"),_),(0,i.Z)(t,"".concat(j,"-bar-striped"),_||m),t)),style:(0,r.Z)({width:"".concat(x(l,s,o),"%")},v),"aria-valuenow":l,"aria-valuemin":s,"aria-valuemax":o,children:p?(0,u.jsx)("span",{className:"visually-hidden",children:d}):d}))}var f=l.forwardRef((function(e,n){var t=e.isChild,i=(0,a.Z)(e,p);if(i.bsPrefix=(0,o.vE)(i.bsPrefix,"progress"),t)return _(i,n);var s=i.min,h=i.now,x=i.max,f=i.label,v=i.visuallyHidden,y=i.striped,j=i.animated,C=i.bsPrefix,g=i.variant,b=i.className,k=i.children,w=(0,a.Z)(i,m);return(0,u.jsx)("div",(0,r.Z)((0,r.Z)({ref:n},w),{},{className:c()(b,C),children:k?(0,d.UI)(k,(function(e){return(0,l.cloneElement)(e,{isChild:!0})})):_({min:s,now:h,max:x,label:f,visuallyHidden:v,striped:y,animated:j,bsPrefix:C,variant:g},n)}))}));f.displayName="ProgressBar",f.defaultProps={min:0,max:100,animated:!1,isChild:!1,visuallyHidden:!1,striped:!1},n.Z=f}}]);
//# sourceMappingURL=429.34618fe8.chunk.js.map