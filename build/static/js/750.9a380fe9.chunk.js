"use strict";(self.webpackChunka_tink_ui=self.webpackChunka_tink_ui||[]).push([[750],{23005:function(e,t,r){r.d(t,{Nr:function(){return s},kS:function(){return l},_l:function(){return f},il:function(){return u}});r(72791);var i=r.p+"static/media/incoming.2470b31f07b603f233341fc74bbce24e.svg";var a=r.p+"static/media/internal.f7ca349a0700faabb0088f6577fd047e.svg";var c=r.p+"static/media/withdraw.af74ca840a6706dfa81b1a36f567ee00.svg";var n=r.p+"static/media/purchase.3164e44fe3959789e17d856db76de4ea.svg";var d=r.p+"static/media/visa.2a09759e8e6c41c7e2c2258bf10170ca.svg";var o=r.p+"static/media/mastercard.2338dc1d4e39bded35b1c3866ab4100b.svg";var u={VISA:d,MASTERCARD:o,MIR:r.p+"static/media/mir.c723ce2a0756b70c88c205d7a8d0e3e2.svg"},s={incoming:i,internal:a,withdraw:c,purchase:n},l={incoming:"\u041f\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f",internal:"\u041f\u0435\u0440\u0435\u0432\u043e\u0434\u044b",withdraw:"\u041d\u0430\u043b\u0438\u0447\u043d\u044b\u0435",purchase:"\u041f\u043e\u043a\u0443\u043f\u043a\u0438"},f={incoming:"+",internal:"",withdraw:"-",purchase:"-"}},71716:function(e,t,r){r.d(t,{DE:function(){return a},Nv:function(){return n},SU:function(){return d},X4:function(){return o},aR:function(){return i},f2:function(){return c}});var i=function(e){var t=new Date(e),r=t.toTimeString().slice(0,5),i=t.toLocaleDateString("en-GB",{year:"2-digit",month:"2-digit",day:"2-digit"}),a=(new Date).setHours(0,0,0);return t.getTime()<a-864e5?i+" "+r:t.getTime()<a?"\u0412\u0447\u0435\u0440\u0430 ".concat(r):r},a=function(e,t){var r="card"===t;return String(e).replace(/(\d)(?=(\d{3})+([^\d]|$))/g,r?"$1,":"$1 ")},c=function(e){return e.slice(5,7)+"/"+e.slice(2,4)},n=function(e){return"**** "+e.slice(-4)},d=function(e,t){switch(t){case"incoming":return"\u041f\u0435\u0440\u0435\u0432\u043e\u0434 \u043e\u0442 ".concat(function(e){var t=e.split(" ");return t[0]+" "+t[1].slice(0,1)+"."}(e));case"internal":return"\u041f\u0435\u0440\u0435\u0432\u043e\u0434 \u043c\u0435\u0436\u0434\u0443 \u0441\u0447\u0435\u0442\u0430\u043c\u0438";case"withdraw":return"\u0421\u043d\u044f\u0442\u0438\u0435 \u043d\u0430\u043b\u0438\u0447\u043d\u044b\u0445";default:return e}},o=function(e,t){return e?t.filter((function(t){return t.payeeId.toLowerCase().includes(e.toLowerCase())})):t}},2750:function(e,t,r){r.d(t,{c:function(){return B}});var i=r(20890),a=r(53767),c=r(68870),n=r(23005),d=r(71716),o=r(13346),u=r(72281);r(72791);var s=r.p+"static/media/debitRubleDark.f11de1f4c441b4a814fe78c6d925e8cc.svg";var l=r.p+"static/media/debitNotRuble.400fe0dd70e05c468e3501e182388fc4.svg";var f=r.p+"static/media/debitRubleBlue.fcfa2c609aa9335bab65edcb6b483aa4.svg";var b=r.p+"static/media/creditRubleLight.6b2d4794f144bc9d5ff7a04f5e9e8bfc.svg";var g=r.p+"static/media/creditRubleVisa.b8788aab3675b4f5f6ed4c7e392af376.svg";var m=r.p+"static/media/creditNotRuble.39610fd33f958f13b41536a88096dadd.svg";var v,p=r.p+"static/media/creditNotRubleVisa.ea360f9649b83bca35362928dcb7119a.svg",R={RUB:{debit:{MIR:{imgSrc:f,defaultBackgroundColor:u.O.debitRubleBlue},VISA:{imgSrc:s,defaultBackgroundColor:u.O.debitRubleDark},MASTERCARD:{imgSrc:s,defaultBackgroundColor:u.O.debitRubleDark}},credit:{VISA:{imgSrc:g,defaultBackgroundColor:u.O.creditRubleVisa},MASTERCARD:{imgSrc:b,defaultBackgroundColor:u.O.creditRubleLight},MIR:{imgSrc:g,defaultBackgroundColor:u.O.creditRubleVisa}}},notRUB:{debit:{MIR:{imgSrc:l,defaultBackgroundColor:u.O.debitNotRuble},VISA:{imgSrc:l,defaultBackgroundColor:u.O.debitNotRuble},MASTERCARD:{imgSrc:l,defaultBackgroundColor:u.O.debitNotRuble}},credit:{VISA:{imgSrc:p,defaultBackgroundColor:u.O.creditNotRubleVisa},MASTERCARD:{imgSrc:m,defaultBackgroundColor:u.O.creditNotRubleMastercard}}}},S=function(e,t,r){var i=r;return R["RUB"===e?"RUB":"notRUB"][t][i]},C=r(52576),h=r(80184);!function(e){e.CreditCard="credit",e.DebitCard="debit"}(v||(v={}));var B=function(e){var t=e.type,r=e.currency,s=e.currentBalance,l=e.cardNumber,f=e.expirationDate,b=e.paymentSystem,g=e.size,m=void 0===g?"normal":g,p=o.Z.hasOwnProperty(r)?o.Z[r].symbol:"";return(0,h.jsxs)(C.b,{cardCover:S(r,t,b),size:m,children:[(0,h.jsx)(i.Z,{variant:"descriptionSemiBold",sx:{lineHeight:"19px",color:t===v.CreditCard&&"RUB"===r?u.O.primary:u.O.neutral0},children:t===v.CreditCard?"\u041a\u0440\u0435\u0434\u0438\u0442\u043d\u0430\u044f \u043a\u0430\u0440\u0442\u0430":"\u0414\u0435\u0431\u0435\u0442\u043e\u0432\u0430\u044f \u043a\u0430\u0440\u0442\u0430"}),(0,h.jsxs)(a.Z,{spacing:"33px",sx:{color:t===v.CreditCard&&"RUB"===r?u.O.primary:u.O.neutral0},children:[(0,h.jsx)(i.Z,{variant:"descriptionSemiBold",sx:{lineHeight:"28px",fontSize:"24px"},children:"".concat(p," ").concat((0,d.DE)(s,"card"))}),(0,h.jsxs)(a.Z,{direction:"row",justifyContent:"space-between",children:[(0,h.jsx)(i.Z,{variant:"descriptionSemiBold",sx:{lineHeight:"19px"},children:(0,d.Nv)(l)}),(0,h.jsx)(i.Z,{variant:"descriptionSemiBold",sx:{lineHeight:"19px"},children:(0,d.f2)(f)}),(0,h.jsx)(c.Z,{component:"img",src:n.il[b],alt:"payment system"})]})]})]})}}}]);
//# sourceMappingURL=750.9a380fe9.chunk.js.map