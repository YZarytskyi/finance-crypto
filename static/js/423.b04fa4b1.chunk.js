"use strict";(self.webpackChunkcrypto_project=self.webpackChunkcrypto_project||[]).push([[423],{6669:function(e,n,r){r.r(n),r.d(n,{default:function(){return N}});var s=r(2791),c=r(6871),a=r(4956),t=r(509),l=r(5837),i=r(692),o=r(8418),h="SelectedExchange_exchange__dFBDG",d="SelectedExchange_logo__m9Kgx",_="SelectedExchange_name__mJENM",x="SelectedExchange_list__Z7-Hs",u="SelectedExchange_textMain__VuOo9",m="SelectedExchange_siteLink__9mVsj",p="SelectedExchange_textSecondary__MMB9M",j="SelectedExchange_description__HVcDD",f=r(184),N=function(){var e=(0,c.UO)().exchangeId,n=(0,a.C)((function(e){return e.exchange.selectedExchange})),r=(0,a.T)();return(0,s.useEffect)((function(){return r((0,t.bW)(e)),function(){r((0,t.gz)())}}),[e]),n?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(l.Z,{component:"Exchanges"}),(0,f.jsxs)("section",{className:h,children:[(0,f.jsx)("img",{src:n.image,alt:n.name,className:d}),(0,f.jsx)("p",{className:_,children:n.name}),(0,f.jsxs)("ul",{className:x,children:[(0,f.jsxs)("li",{children:[(0,f.jsx)("p",{className:u,children:n.country||"Unknown"}),(0,f.jsx)("p",{className:p,children:"Country"})]}),(0,f.jsxs)("li",{children:[(0,f.jsxs)("p",{className:u,children:[(0,o.yC)(n.trade_volume_24h_btc)||"Unknown"," ","BTC"]}),(0,f.jsx)("p",{className:p,children:"Trade volume 24h"})]}),(0,f.jsxs)("li",{children:[(0,f.jsxs)("p",{className:u,children:[(0,o.yC)(n.trade_volume_24h_btc_normalized)||"Unknown"," ","BTC"]}),(0,f.jsx)("p",{className:p,children:"Trade volume 24h normalized"})]}),(0,f.jsxs)("li",{children:[(0,f.jsx)("p",{className:u,children:n.year_established||"Unknown"}),(0,f.jsx)("p",{className:p,children:"Established Year"})]}),(0,f.jsxs)("li",{children:[(0,f.jsx)("a",{href:n.url,target:"_blank",rel:"noopener noreferrer nofollow",className:m,children:n.name}),(0,f.jsx)("p",{className:p,children:"Official Web-site"})]})]}),n.description&&(0,f.jsx)("p",{className:j,children:n.description}),(0,f.jsxs)("p",{className:j,children:["If you would like to see more details you can go to"," ",(0,f.jsx)("a",{href:n.name,target:"_blank",rel:"noopener noreferrer nofollow",className:m,children:n.name})," ","official web-site"]})]})]}):(0,f.jsx)(i.p9,{})}},5837:function(e,n,r){r.d(n,{Z:function(){return i}});var s=r(6871),c=r(3504),a=r(3763),t={iconTime:"NavCrypto_iconTime__ojCTf",hidden:"NavCrypto_hidden__ITE8I",percentagePlus:"NavCrypto_percentagePlus__vDGxE",percentageMinus:"NavCrypto_percentageMinus__4U9GD",container:"NavCrypto_container__oAnTn",navCrypto:"NavCrypto_navCrypto__HY5uV",listLeft:"NavCrypto_listLeft__W+JeE",leftLink:"NavCrypto_leftLink__Du-3+",arrow:"NavCrypto_arrow__e4jid",home:"NavCrypto_home__+HgnJ",currentPath:"NavCrypto_currentPath__YSIhV",listCenter:"NavCrypto_listCenter__rK+nc",leftText:"NavCrypto_leftText__SFfO9"},l=r(184),i=function(e){var n=e.component,r=(0,s.TH)().pathname,i=new RegExp("/".concat(n,"/"),"i"),o=i.test(r);return r=o?r.replace(i,"").substring(0,17)+(r.length>18?"...":""):r.replace(/^\//,""),(0,l.jsx)("div",{className:t.container,children:(0,l.jsxs)("div",{className:t.navCrypto,children:[(0,l.jsxs)("ul",{className:t.listLeft,children:[(0,l.jsx)("li",{children:(0,l.jsxs)(c.OL,{to:"/",className:t.leftLink,children:[(0,l.jsx)("svg",{className:t.home,children:(0,l.jsx)("use",{href:a.Z+"#home"})}),(0,l.jsx)("svg",{className:t.arrow,children:(0,l.jsx)("use",{href:a.Z+"#arrow_right"})})]})}),(0,l.jsx)("li",{className:o?"":t.hidden,children:(0,l.jsxs)(c.OL,{to:"/".concat(n),className:t.leftLink,children:[(0,l.jsx)("span",{className:t.leftText,children:n}),(0,l.jsx)("svg",{className:t.arrow,children:(0,l.jsx)("use",{href:a.Z+"#arrow_right"})})]})}),(0,l.jsx)("li",{children:(0,l.jsx)("span",{className:"".concat(t.currentPath," ").concat(t.leftText),children:r})})]}),(0,l.jsxs)("ul",{className:t.listCenter,children:[(0,l.jsx)("li",{children:(0,l.jsx)(c.OL,{to:"/coins",className:t.centerLink,children:"Coins"})}),(0,l.jsx)("li",{children:(0,l.jsx)(c.OL,{to:"/exchanges",className:t.centerLink,children:"Exchanges"})}),(0,l.jsx)("li",{children:(0,l.jsx)(c.OL,{to:"/arbitrage",className:t.centerLink,children:"Arbitrage"})}),(0,l.jsx)("li",{children:(0,l.jsx)(c.OL,{to:"/converter",className:t.centerLink,children:"Converter"})})]})]})})}},8418:function(e,n,r){r.d(n,{J2:function(){return c},eX:function(){return a},po:function(){return t},yC:function(){return s}});var s=function(e){return new Intl.NumberFormat("ua-UA").format(e)},c=function(e){var n=new RegExp(/\.?0*$/);return e<1e3?String(e).replace(n,""):s(e)},a=function(e){return e<1e-8?Math.trunc(1e10*e)/1e10:e<1e-6?Math.trunc(1e8*e)/1e8:e<1e-4?Math.trunc(1e6*e)/1e6:e<.01?Math.trunc(1e4*e)/1e4:Math.trunc(100*e)/100},t=function(e){return e>0?"percentagePlus":"percentageMinus"}}}]);
//# sourceMappingURL=423.b04fa4b1.chunk.js.map