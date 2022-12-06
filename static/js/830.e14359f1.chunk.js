"use strict";(self.webpackChunkcrypto_project=self.webpackChunkcrypto_project||[]).push([[830],{1830:function(e,i,n){n.r(i),n.d(i,{default:function(){return _}});var r=n(885),t={chartButtons:"SelectedCoin_chartButtons__LPnXZ",iconTime:"SelectedCoin_iconTime__z81iO",hidden:"SelectedCoin_hidden__L0mch",coin:"SelectedCoin_coin__32tA6",descriptionChart:"SelectedCoin_descriptionChart__j8l-2",description:"SelectedCoin_description__2Da8W",rank:"SelectedCoin_rank__0MuI+",imgName:"SelectedCoin_imgName__aD4eV",pricePercentage:"SelectedCoin_pricePercentage__qG18+",progressBar:"SelectedCoin_progressBar__G9lO+",lowHigh:"SelectedCoin_lowHigh__p37X-",marketCapInfo:"SelectedCoin_marketCapInfo__SQg1i",chartContainer:"SelectedCoin_chartContainer__02RT-",coinInfo:"SelectedCoin_coinInfo__1HmZk"},a=n(2791),s=n(6871),c=n(3496),l=n(4329),o=n(184),d=function(e){var i=e.setDays,n=(0,l.C)((function(e){return e.crypto.selectedCoinMarketChart})).prices,s=(0,a.useState)(30),d=(0,r.Z)(s,2),h=d[0],u=d[1],p=[{data:n}],x={chart:{id:"area-datetime",type:"area"},yaxis:{tickAmount:6,labels:{show:!0,align:"right",style:{colors:"#eaeaea",fontSize:"12px",fontWeight:400},formatter:function(e){return e?e<1?e.toFixed(6):e>1&&e<100?e.toFixed(2):(i=e,new Intl.NumberFormat("ua-UA").format(i)):0;var i}}},xaxis:{show:!0,type:"datetime",labels:{style:{colors:"#eaeaea",fontSize:"12px",fontFamily:"Helvetica, Arial, sans-serif",fontWeight:400}}},dataLabels:{enabled:!1},markers:{size:0,style:"hollow"},stroke:{show:!0,curve:"straight",lineCap:"butt",width:2,dashArray:0},tooltip:{enabled:!0,theme:"dark",style:{fontSize:"12px",fontFamily:void 0},x:{format:"dd MMM yyyy"},y:{formatter:function(e){return e>5?e.toFixed(2):e.toFixed(5)},title:{formatter:function(){return"$"}}}},fill:{type:"gradient",gradient:{type:"vertical",shadeIntensity:0,opacityFrom:.1,opacityTo:.7,stops:[0,100]}}};return(0,o.jsxs)("div",{className:t.chartTools,children:[(0,o.jsxs)("div",{className:t.chartButtons,children:[(0,o.jsx)("button",{onClick:function(){return i(1)},children:"1d"}),(0,o.jsx)("button",{onClick:function(){return i(7)},children:"7d"}),(0,o.jsx)("button",{onClick:function(){return i(30)},children:"1m"}),(0,o.jsx)("button",{onClick:function(){return i(183)},children:"6m"}),(0,o.jsx)("button",{onClick:function(){return i(365)},children:"1y"}),(0,o.jsx)("button",{onClick:function(){return i("max")},children:"All"}),(0,o.jsxs)("span",{className:t.inputDays,children:[(0,o.jsx)("input",{type:"number",placeholder:"Days",onChange:function(e){return u(Number(e.target.value))}}),(0,o.jsx)("button",{onClick:function(){return i(h)},children:"Show"})]})]}),(0,o.jsx)(c.Z,{options:x,series:p,type:"area",height:"300vw"})]})},h=n(7463),u=n(3593),p=n(5048),x=n(8418),m=n(7359),_=function(){var e=(0,s.UO)().coinId,i=(0,l.C)((function(e){return e.crypto})),n=i.markets,c=i.coinDescription,_=(0,l.T)(),v=(0,a.useState)(30),f=(0,r.Z)(v,2),j=f[0],y=f[1];(0,a.useEffect)((function(){return _((0,h.KE)([e,j])),function(){_((0,h.cq)())}}),[j]),(0,a.useEffect)((function(){N||_((0,h.pd)())}),[]),(0,a.useEffect)((function(){return _((0,h.E3)(e)),function(){_((0,h.Cy)())}}),[]);var C,N=n.find((function(i){return i.id===e})),g=c&&c.replace(/<a\s+href="(.*?)">.*?<\/a>/g,"");return N?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(p.Z,{}),(0,o.jsxs)("section",{className:t.coin,children:[(0,o.jsxs)("div",{className:t.descriptionChart,children:[(0,o.jsxs)("div",{className:t.description,children:[(0,o.jsxs)("p",{className:t.rank,children:["Rank #",N.market_cap_rank]}),(0,o.jsxs)("div",{className:t.imgName,children:[(0,o.jsx)("img",{src:N.image,width:55,height:55,alt:N.name}),(0,o.jsx)("p",{children:"".concat(N.name," (").concat(N.symbol.toUpperCase(),")")})]}),(0,o.jsxs)("div",{className:t.pricePercentage,children:[(0,o.jsxs)("div",{children:[N.current_price," $"]}),(0,o.jsxs)("div",{className:(C=N.price_change_percentage_24h,C>0?t.percentagePlus:t.percentageMinus),children:[N.price_change_percentage_24h.toFixed(2),"%"]})]}),(0,o.jsx)("div",{className:t.progressBar,children:(0,o.jsx)(u.Z,{now:N.current_price,min:N.low_24h,max:N.high_24h})}),(0,o.jsxs)("div",{className:t.lowHigh,children:[(0,o.jsxs)("div",{children:[N.low_24h>N.current_price?N.current_price:N.low_24h," ","$"]}),(0,o.jsx)("div",{children:"24h"}),(0,o.jsxs)("div",{children:[N.high_24h<N.current_price?N.current_price:N.high_24h," ","$"]})]}),(0,o.jsxs)("div",{className:t.marketCapInfo,children:[N.market_cap&&(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{children:"Market Capitalization:"}),(0,o.jsxs)("div",{children:[(0,x.yC)(N.market_cap)," $"]})]}),N.total_volume&&(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{children:"Trading Volume 24h:"}),(0,o.jsxs)("div",{children:[(0,x.yC)(N.total_volume)," $"]})]}),N.fully_diluted_valuation&&(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{children:"Fully diluted valuation:"}),(0,o.jsxs)("div",{children:[(0,x.yC)(N.fully_diluted_valuation)," $"]})]}),N.circulating_supply&&(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{children:"Circulating Supply:"}),(0,o.jsxs)("div",{children:[(0,x.yC)(+N.circulating_supply.toFixed(0))," $"]})]}),N.total_supply&&(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{children:"Total Supply:"}),(0,o.jsxs)("div",{children:[(0,x.yC)(+N.total_supply.toFixed(0))," $"]})]}),N.max_supply&&(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{children:"Max Supply:"}),(0,o.jsxs)("div",{children:[(0,x.yC)(N.max_supply)," $"]})]})]})]}),(0,o.jsx)("div",{className:t.chartContainer,children:(0,o.jsx)(d,{setDays:y})})]}),(0,o.jsx)("p",{className:t.coinInfo,children:g})]})]}):(0,o.jsx)(m.Z,{})}},5048:function(e,i,n){n.d(i,{Z:function(){return c}});var r={iconTime:"NavCrypto_iconTime__lIDAW",hidden:"NavCrypto_hidden__tSxDl",container:"NavCrypto_container__rXDY7",navCrypto:"NavCrypto_navCrypto__3v0Sl",listLeft:"NavCrypto_listLeft__ButfR",leftLink:"NavCrypto_leftLink__cYu5N",arrow:"NavCrypto_arrow__ADYsT",home:"NavCrypto_home__luzbS",currentPath:"NavCrypto_currentPath__hhsNq",listCenter:"NavCrypto_listCenter__ZwodD"},t=n(3504),a=n(3763),s=n(184),c=function(){var e=window.location.hash,i=/#\/crypto\/coins\//i,n=i.test(e);return e=e.replace(n?i:/#\/crypto\//i,""),(0,s.jsx)("div",{className:r.container,children:(0,s.jsxs)("div",{className:r.navCrypto,children:[(0,s.jsxs)("ul",{className:r.listLeft,children:[(0,s.jsx)("li",{children:(0,s.jsxs)(t.OL,{to:"/",className:r.leftLink,children:[(0,s.jsx)("svg",{className:r.home,children:(0,s.jsx)("use",{href:a.Z+"#home"})}),(0,s.jsx)("svg",{className:r.arrow,children:(0,s.jsx)("use",{href:a.Z+"#arrow_right"})})]})}),(0,s.jsx)("li",{children:(0,s.jsxs)(t.OL,{to:"/crypto/coins",className:r.leftLink,children:["Crypto",(0,s.jsx)("svg",{className:r.arrow,children:(0,s.jsx)("use",{href:a.Z+"#arrow_right"})})]})}),(0,s.jsx)("li",{className:n?"":"hidden",children:(0,s.jsxs)(t.OL,{to:"/crypto/coins",className:r.leftLink,children:["Coins",(0,s.jsx)("svg",{className:r.arrow,children:(0,s.jsx)("use",{href:a.Z+"#arrow_right"})})]})}),(0,s.jsx)("li",{children:(0,s.jsx)("span",{className:r.currentPath,children:e})})]}),(0,s.jsxs)("ul",{className:r.listCenter,children:[(0,s.jsx)("li",{children:(0,s.jsx)(t.OL,{to:"/crypto/coins",className:r.centerLink,children:"Coins"})}),(0,s.jsx)("li",{children:(0,s.jsx)(t.OL,{to:"/crypto/exchanges",className:r.centerLink,children:"Exchanges"})}),(0,s.jsx)("li",{children:(0,s.jsx)(t.OL,{to:"/crypto/arbitrage",className:r.centerLink,children:"Arbitrage"})}),(0,s.jsx)("li",{children:(0,s.jsx)(t.OL,{to:"/crypto/converter",className:r.centerLink,children:"Converter"})})]})]})})}},3593:function(e,i,n){var r=n(4942),t=n(1413),a=n(5987),s=n(1694),c=n.n(s),l=n(2791),o=n(162),d=n(1701),h=n(184),u=["min","now","max","label","visuallyHidden","striped","animated","className","style","variant","bsPrefix"],p=["isChild"],x=["min","now","max","label","visuallyHidden","striped","animated","bsPrefix","variant","className","children"];function m(e,i,n){var r=(e-i)/(n-i)*100;return Math.round(1e3*r)/1e3}function _(e,i){var n,s=e.min,l=e.now,o=e.max,d=e.label,p=e.visuallyHidden,x=e.striped,_=e.animated,v=e.className,f=e.style,j=e.variant,y=e.bsPrefix,C=(0,a.Z)(e,u);return(0,h.jsx)("div",(0,t.Z)((0,t.Z)({ref:i},C),{},{role:"progressbar",className:c()(v,"".concat(y,"-bar"),(n={},(0,r.Z)(n,"bg-".concat(j),j),(0,r.Z)(n,"".concat(y,"-bar-animated"),_),(0,r.Z)(n,"".concat(y,"-bar-striped"),_||x),n)),style:(0,t.Z)({width:"".concat(m(l,s,o),"%")},f),"aria-valuenow":l,"aria-valuemin":s,"aria-valuemax":o,children:p?(0,h.jsx)("span",{className:"visually-hidden",children:d}):d}))}var v=l.forwardRef((function(e,i){var n=e.isChild,r=(0,a.Z)(e,p);if(r.bsPrefix=(0,o.vE)(r.bsPrefix,"progress"),n)return _(r,i);var s=r.min,u=r.now,m=r.max,v=r.label,f=r.visuallyHidden,j=r.striped,y=r.animated,C=r.bsPrefix,N=r.variant,g=r.className,b=r.children,k=(0,a.Z)(r,x);return(0,h.jsx)("div",(0,t.Z)((0,t.Z)({ref:i},k),{},{className:c()(g,C),children:b?(0,d.UI)(b,(function(e){return(0,l.cloneElement)(e,{isChild:!0})})):_({min:s,now:u,max:m,label:v,visuallyHidden:f,striped:j,animated:y,bsPrefix:C,variant:N},i)}))}));v.displayName="ProgressBar",v.defaultProps={min:0,max:100,animated:!1,isChild:!1,visuallyHidden:!1,striped:!1},i.Z=v}}]);
//# sourceMappingURL=830.e14359f1.chunk.js.map