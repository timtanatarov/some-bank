"use strict";(self.webpackChunka_tink_ui=self.webpackChunka_tink_ui||[]).push([[306],{10218:function(n,e,t){t(72791);e.Z=t.p+"static/media/creditCoverBlue.ef94b533da240fbb32c2f92db62c7865.svg"},89306:function(n,e,t){t.r(e),t.d(e,{CreditDetails:function(){return C}});var i=t(29439),r=t(72791),c=t(57689),o=t(11087),a=t(68870),s=t(53767),u=t(50533),l=t(20890),d=t(36151),p=t(6177),x=t(95750),f=t(46220),g=t(72281),m=t(4882),h=t(52646),j=t(42198),v=t(36908),y=t(6435),Z=t(46008),b=t(80184),C=function(){var n=(0,r.useState)(!1),e=(0,i.Z)(n,2),t=e[0],C=e[1],B=(0,c.UO)().id,D=void 0===B?"":B,S=(0,m.a9)(D),w=S.data,k=S.isError,U=S.isLoading;(0,y.x)((null===w||void 0===w?void 0:w.name)||"");var O=function(){C(!0)},R=(0,r.useMemo)((function(){return w?[{id:1,title:"\u0421\u0443\u043c\u043c\u0430 \u043a\u0440\u0435\u0434\u0438\u0442\u0430",info:"".concat((0,p.fy)(String(w.principalDebt))," RUB"),copyButton:!1},{id:2,title:"\u0421\u0440\u043e\u043a \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043a\u0440\u0435\u0434\u0438\u0442\u0430",info:String(w.terminationDate),copyButton:!1},{id:3,title:"\u0421\u0442\u0430\u0432\u043a\u0430 \u0433\u043e\u0434\u043e\u0432\u044b\u0445",info:"".concat(w.interestRate,"%"),copyButton:!1},{id:4,title:"\u041d\u043e\u043c\u0435\u0440 \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0430",info:(0,p.PD)(String(w.accountNumber),4),copyButton:!0},{id:5,title:"\u041d\u043e\u043c\u0435\u0440 \u0441\u0447\u0435\u0442\u0430",info:(0,p.PD)("1234123412341234",4),copyButton:!0}]:null}),[w]);return k?(0,b.jsx)(v.h,{message:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430"}):U?(0,b.jsx)(v.h,{message:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c \u0434\u0430\u043d\u043d\u044b\u0435"}):(0,b.jsxs)(a.Z,{sx:{display:"flex",alignItems:"flex-start",gap:"48px",padding:{tablet:"0 36px",mobile:"0 24px"}},children:[(0,b.jsxs)(s.Z,{spacing:"44px",children:[(0,b.jsx)(u.Z,{component:o.rU,to:f.$w.creditsRoute,underline:"none",children:(0,b.jsx)(x.X,{sx:{color:g.O.primary,svg:{color:g.O.primary}}})}),w?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(l.Z,{variant:"subtitle2Semibold",sx:{lineHeight:"30px"},children:w.name}),(0,b.jsxs)(s.Z,{direction:"row",spacing:2,children:[(0,b.jsx)(s.Z,{spacing:"56px",alignItems:"flex-start",children:(0,b.jsxs)(s.Z,{spacing:"24px",maxWidth:"282px",children:[(0,b.jsx)(h.a,{name:w.name,currencyCode:"RUB",principalDebt:w.principalDebt,size:"large"}),(0,b.jsx)(d.Z,{variant:"primary",onClick:O,children:"\u041f\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u044c"}),(0,b.jsx)(d.Z,{variant:"secondary",onClick:O,children:"\u041f\u043e\u0433\u0430\u0441\u0438\u0442\u044c \u0434\u043e\u0441\u0440\u043e\u0447\u043d\u043e"})]})}),(0,b.jsxs)(s.Z,{children:[(0,b.jsx)(v.h,{message:"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043e\u043f\u043b\u0430\u0442\u0438\u0442\u044c ".concat(w.paymentInterest.toFixed(2)," RUB, \u0434\u043e ").concat(w.paymentDate)}),(0,b.jsx)(Z.C,{data:R})]})]})]}):(0,b.jsx)(v.h,{message:"\u041d\u0435\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043f\u043e \u0434\u0430\u043d\u043d\u043e\u043c\u0443 \u043a\u0440\u0435\u0434\u0438\u0442\u0443"})]}),(0,b.jsx)(j.U,{isOpen:t,onClose:function(){C(!1)}})]})}},71716:function(n,e,t){t.d(e,{DE:function(){return r},Nv:function(){return o},SU:function(){return a},X4:function(){return s},aR:function(){return i},f2:function(){return c}});var i=function(n){var e=new Date(n),t=e.toTimeString().slice(0,5),i=e.toLocaleDateString("en-GB",{year:"2-digit",month:"2-digit",day:"2-digit"}),r=(new Date).setHours(0,0,0);return e.getTime()<r-864e5?i+" "+t:e.getTime()<r?"\u0412\u0447\u0435\u0440\u0430 ".concat(t):t},r=function(n,e){var t="card"===e;return String(n).replace(/(\d)(?=(\d{3})+([^\d]|$))/g,t?"$1,":"$1 ")},c=function(n){return n.slice(5,7)+"/"+n.slice(2,4)},o=function(n){return"**** "+n.slice(-4)},a=function(n,e){switch(e){case"incoming":return"\u041f\u0435\u0440\u0435\u0432\u043e\u0434 \u043e\u0442 ".concat(function(n){var e=n.split(" ");return e[0]+" "+e[1].slice(0,1)+"."}(n));case"internal":return"\u041f\u0435\u0440\u0435\u0432\u043e\u0434 \u043c\u0435\u0436\u0434\u0443 \u0441\u0447\u0435\u0442\u0430\u043c\u0438";case"withdraw":return"\u0421\u043d\u044f\u0442\u0438\u0435 \u043d\u0430\u043b\u0438\u0447\u043d\u044b\u0445";default:return n}},s=function(n,e){return n?e.filter((function(e){return e.payeeId.toLowerCase().includes(n.toLowerCase())})):e}},52646:function(n,e,t){t.d(e,{a:function(){return d}});var i=t(20890),r=t(53767),c=t(72281),o=t(71716),a=t(13346),s=t(10218),u=t(52576),l=t(80184),d=function(n){var e=n.name,t=n.principalDebt,d=n.currencyCode,p=n.size,x=void 0===p?"normal":p,f=n.periodMonths;return(0,l.jsxs)(u.b,{cardCover:{imgSrc:s.Z,defaultBackgroundColor:c.O.creditCoverBlue},size:x,children:[(0,l.jsx)(i.Z,{variant:"descriptionSemiBold",component:"h4",sx:{fontSize:"16px",height:"28px",width:"128px"},children:"\xab".concat(e,"\xbb")}),(0,l.jsxs)(r.Z,{spacing:"15px",style:{marginTop:"25px"},sx:{color:c.O.neutral0},children:[(0,l.jsx)(i.Z,{children:"\u041e\u0441\u0442\u0430\u0442\u043e\u043a \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0433\u043e \u0434\u043e\u043b\u0433\u0430"}),(0,l.jsxs)(i.Z,{variant:"descriptionSemiBold",sx:{lineHeight:"8px",fontSize:"24px"},children:[a.Z[d].symbol," ",(0,o.DE)(t,"")]}),(0,l.jsxs)(i.Z,{children:[f," \u043c\u0435\u0441\u044f\u0446\u0435\u0432"]})]})]})}}}]);
//# sourceMappingURL=306.8bcbc9d5.chunk.js.map