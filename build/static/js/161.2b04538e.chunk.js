"use strict";(self.webpackChunka_tink_ui=self.webpackChunka_tink_ui||[]).push([[161],{76172:function(e,n,t){t.r(n),t.d(n,{DepositDetails:function(){return w}});var i=t(29439),r=t(72791),o=t(68870),a=t(53767),c=t(50533),s=t(20890),d=t(36151),l=t(9955),u=t(57689),p=t(11087),x=t(34784),h=t(42198),m=t(72281),g=t(6177),b=function(e,n){var t=e.split("-"),r=(0,i.Z)(t,2),o=r[0],a=r[1],c=n.split("-"),s=(0,i.Z)(c,2),d=s[0],l=s[1],u=parseInt(a)-parseInt(l);return parseInt(a)-parseInt(l)===0&&(u=Math.abs(12*(parseInt(o)-parseInt(d)))),u},v=t(95750),f=t(37196),j=t(46220),Z=t(36908),C=t(6435),y=t(46008),k=t(80184),B={pr:0,pl:"18px","& .MuiButtonBase-root":{"&.MuiSwitch-switchBase":{pl:"18px",color:m.O.neutral0,"&:hover":{background:"none"},"& + .MuiSwitch-track":{background:m.O.neutral400},"&.Mui-checked":{color:m.O.secondary600,"& + .MuiSwitch-track":{background:m.O.secondary200}}}}},w=function(){var e=(0,r.useState)(!1),n=(0,i.Z)(e,2),t=n[0],w=n[1],O=(0,u.UO)().id,S=void 0===O?"":O,M=(0,f.H0)(S).data,R=(0,f.JB)(),I=(0,i.Z)(R,1)[0],D=(0,f.Ar)(),U=(0,i.Z)(D,2),z=U[0],H=U[1].isError;(0,C.x)((null===M||void 0===M?void 0:M.name)||"");var N=(0,r.useMemo)((function(){return M?[{id:1,title:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0434\u0435\u043f\u043e\u0437\u0438\u0442\u0430",info:"".concat(M.name),copyButton:!1},{id:2,title:"\u041d\u043e\u043c\u0435\u0440 \u0441\u0447\u0435\u0442\u0430",info:"".concat((0,g.PD)(M.accountNumber,4)),copyButton:!0},{id:3,title:"\u041f\u0440\u043e\u0446\u0435\u043d\u0442\u043d\u0430\u044f \u0441\u0442\u0430\u0432\u043a\u0430",info:"".concat(String(M.interestRate)," %"),copyButton:!1},{id:4,title:"\u0421\u0440\u043e\u043a \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f",info:"\u0414\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0434\u043e ".concat(M.endDate),copyButton:!1},{id:5,title:"\u041a\u0430\u043f\u0438\u0442\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f",info:"".concat(M.capitalization?"\u041f\u0440\u0435\u0434\u0443\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u043e":"\u041d\u0435 \u043f\u0440\u0435\u0434\u0443\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u043e"),copyButton:!1},{id:6,title:"\u0414\u043e\u0441\u0440\u043e\u0447\u043d\u043e\u0435 \u0440\u0430\u0441\u0442\u043e\u0440\u0436\u0435\u043d\u0438\u0435",info:"".concat(M.revocable?"\u041f\u0440\u0435\u0434\u0443\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u043e":"\u041d\u0435 \u043f\u0440\u0435\u0434\u0443\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u043e"),copyButton:!1}]:null}),[M]);return(0,k.jsx)(o.Z,{sx:{padding:{tablet:"0 36px",mobile:"0 24px"}},children:(0,k.jsxs)(a.Z,{spacing:"44px",children:[(0,k.jsx)(c.Z,{component:p.rU,to:j.$w.depositsRoute,underline:"none",children:(0,k.jsx)(v.X,{sx:{color:m.O.primary,svg:{color:m.O.primary}}})}),void 0===M?(0,k.jsx)(Z.h,{message:"\u041d\u0435\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043f\u043e \u0434\u0430\u043d\u043d\u043e\u043c\u0443 \u0434\u0435\u043f\u043e\u0437\u0438\u0442\u0443"}):(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(s.Z,{variant:"subtitle2Semibold",sx:{lineHeight:"30px"},children:"\u0414\u0435\u043f\u043e\u0437\u0438\u0442 \xab".concat(M.name,"\xbb")}),(0,k.jsxs)(a.Z,{direction:"row",spacing:2,children:[(0,k.jsx)(a.Z,{spacing:"56px",alignItems:"flex-start",children:(0,k.jsxs)(a.Z,{spacing:"24px",maxWidth:"282px",children:[(0,k.jsx)(x.R,{currencyCode:M.currencyCode,name:M.name,amountMin:M.currentBalance,durationMonths:b(M.endDate,M.startDate),size:"large"}),(0,k.jsx)(d.Z,{variant:"primary",sx:{marginTop:"20px"},onClick:function(){z({agreementId:S,accountNumber:null===M||void 0===M?void 0:M.accountNumber})},children:"\u041e\u0442\u043e\u0437\u0432\u0430\u0442\u044c \u0434\u0435\u043f\u043e\u0437\u0438\u0442"}),H?(0,k.jsx)(Z.h,{message:"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043e\u0442\u043e\u0437\u0432\u0430\u0442\u044c \u0434\u0435\u043f\u043e\u0437\u0438\u0442",sx:{border:1,borderColor:m.O.alert}}):null,(0,k.jsxs)(a.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[(0,k.jsx)(s.Z,{variant:"descriptionRegular",children:"\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u043f\u0440\u043e\u0434\u043b\u0435\u043d\u0438\u0435"}),(0,k.jsx)(l.Z,{sx:B,disableRipple:!0,checked:M.autoRenewal,onChange:function(e){return I({agreementId:S,autoRenewal:e.target.checked})}})]})]})}),(0,k.jsx)(y.C,{data:N})]})]}),(0,k.jsx)(h.U,{isOpen:t,onClose:function(){w(!1)}})]})})}},34784:function(e,n,t){t.d(n,{R:function(){return h}});var i=t(20890),r=t(53767),o=t.p+"static/media/depositRubleCover.ab8c1616b06a7b709aba.png",a=t.p+"static/media/depositDollarCover.d45b8dbedefcd43d8175.png",c=t.p+"static/media/depositEuroCover.87a48d9b152e8b07e791.png",s={RUB:o,USD:a,EUR:c,CNY:c},d=t(13346),l=t(72281),u=t(6177),p=t(52576),x=t(80184),h=function(e){var n=e.name,t=e.amountMin,o=e.durationMonths,a=e.currencyCode,c=e.size,h=void 0===c?"normal":c;return(0,x.jsxs)(p.b,{cardCover:{imgSrc:s[a],defaultBackgroundColor:l.O.creditCoverBlue},size:h,children:[(0,x.jsx)(i.Z,{variant:"descriptionSemiBold",sx:{lineHeight:"19px",color:l.O.neutral0},children:"\xab".concat(n,"\xbb")}),(0,x.jsxs)(r.Z,{spacing:"33px",sx:{color:l.O.neutral0},children:[(0,x.jsx)(i.Z,{variant:"descriptionSemiBold",sx:{lineHeight:"28px",fontSize:"24px"},children:"\u043e\u0442 ".concat((0,u.fy)(String(t))," ").concat(d.Z[a].symbol)}),(0,x.jsx)(i.Z,{children:"".concat(o," \u043c\u0435\u0441\u044f\u0446\u0435\u0432")})]})]})}}}]);
//# sourceMappingURL=161.2b04538e.chunk.js.map