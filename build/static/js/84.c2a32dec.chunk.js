"use strict";(self.webpackChunka_tink_ui=self.webpackChunka_tink_ui||[]).push([[84],{84:function(n,e,t){t.r(e),t.d(e,{ProfileBlock:function(){return v}});var r=t(4942),i=t(13967),a=t(53767),o=t(20890),u=t(63153),l=t(98016),c=t(72281),d=t(29890),f=t(6177),s=t(86637),m=[{label:"\u0418\u043c\u044f",name:"firstName"},{label:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",name:"lastName"},{label:"\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e",name:"middleName"},{label:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",name:"mobilePhone"},{label:"\u041d\u0430\u043b\u043e\u0433\u043e\u0432\u044b\u0439 \u0441\u0442\u0430\u0442\u0443\u0441",name:"countryOfResidence"}],p=t(80184),v=function(){var n,e=(0,i.Z)(),t=(0,s.E)(),v=t.isMobile,h=t.isTablet,b=t.isLaptop,Z=(0,u.C)(l.vI),g=v||h,x=(0,d.gw)(Z,{selectFromResult:function(n){var e=n.data;return{userInfo:{firstName:null===e||void 0===e?void 0:e.firstName,lastName:null===e||void 0===e?void 0:e.lastName,middleName:null===e||void 0===e?void 0:e.middleName,mobilePhone:(null===e||void 0===e?void 0:e.mobilePhone)&&(0,f.Qf)(null===e||void 0===e?void 0:e.mobilePhone.slice(1)),countryOfResidence:null!==e&&void 0!==e&&e.residentOfRussia?"\u0420\u0435\u0437\u0438\u0434\u0435\u043d\u0442 \u0420\u0424":"\u041d\u0435\u0440\u0435\u0437\u0438\u0434\u0435\u043d\u0442 \u0420\u0424"}}}}).userInfo;return(0,p.jsxs)(a.Z,{spacing:"24px",children:[!(h||b)&&(0,p.jsx)(o.Z,{variant:g?"subtitle2Semibold":"bold24",children:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"}),(0,p.jsx)(o.Z,{variant:"descriptionSemiBold",sx:(n={},(0,r.Z)(n,e.breakpoints.down("laptop"),{fontSize:"20px",lineHeight:"30px",fontWeight:400}),(0,r.Z)(n,e.breakpoints.down("tablet"),{fontSize:"16px",lineHeight:"20px"}),n),children:"\u041b\u0438\u0447\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"}),(0,p.jsx)(a.Z,{spacing:"20px",children:x&&m.map((function(n){return x[n.name]&&(0,p.jsxs)(a.Z,{spacing:"8px",children:[(0,p.jsx)(o.Z,{variant:"regular14_20",sx:{color:c.O.neutral600},children:n.label}),(0,p.jsx)(o.Z,{variant:"descriptionRegular",children:x[n.name]})]},n.name)}))})]})}},86637:function(n,e,t){t.d(e,{E:function(){return o}});var r=t(13967),i=t(95193),a={noSsr:!0},o=function(){var n=(0,r.Z)();return{isMobile:(0,i.Z)(n.breakpoints.between("mobile","tablet"),a),isTablet:(0,i.Z)(n.breakpoints.between("tablet","laptop"),a),isLaptop:(0,i.Z)(n.breakpoints.between("laptop","desktop"),a),isDesktop:(0,i.Z)(n.breakpoints.up("desktop"),a)}}},6177:function(n,e,t){t.d(e,{DH:function(){return r},EK:function(){return i},PD:function(){return l},Qf:function(){return o},fy:function(){return u},xN:function(){return a}});var r=function(n){return new Intl.NumberFormat("ru-RU",{maximumFractionDigits:2}).format(n)},i=function(n){var e;if(n.match(/[^\s\d.,]/))return"";if(Number(null===(e=n.match(/[,.]/g))||void 0===e?void 0:e.length)>1)return"";var t=n.match(/[,.]/);return t&&Number(t.index)<n.length-3?"":n.replaceAll(" ","").replace(/(\d)(?=(\d{3})+([^\d]|$))/g,"$1 ")},a=function(n){return+n.replaceAll(/\s/g,"").replace(",",".")},o=function(n){var e=new RegExp("(^\\d{".concat(n.length%10,"})(\\d{3})(\\d{3})(\\d{2})(\\d{2}$)"));return n.replace(e,"+$1 ($2) $3 $4 $5")},u=function(n){return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g,"$1 ")},l=function(n,e){for(var t="",r=0;r<n.length;r++)t+=n[r],(r+1)%e===0&&r<n.length-1&&(t+=" ");return t}},13967:function(n,e,t){t.d(e,{Z:function(){return a}});t(72791);var r=t(30418),i=t(36482);function a(){return(0,r.Z)(i.Z)}},95193:function(n,e,t){var r;t.d(e,{Z:function(){return s}});var i=t(29439),a=t(72791),o=t(69120),u=t(33073),l=t(40162);function c(n,e,t,r,o){var u="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,c=a.useState((function(){return o&&u?t(n).matches:r?r(n).matches:e})),d=(0,i.Z)(c,2),f=d[0],s=d[1];return(0,l.Z)((function(){var e=!0;if(u){var r=t(n),i=function(){e&&s(r.matches)};return i(),r.addListener(i),function(){e=!1,r.removeListener(i)}}}),[n,t,u]),f}var d=(r||(r=t.t(a,2))).useSyncExternalStore;function f(n,e,t,r){var o=a.useCallback((function(){return e}),[e]),u=a.useMemo((function(){if(null!==r){var e=r(n).matches;return function(){return e}}return o}),[o,n,r]),l=a.useMemo((function(){if(null===t)return[o,function(){return function(){}}];var e=t(n);return[function(){return e.matches},function(n){return e.addListener(n),function(){e.removeListener(n)}}]}),[o,t,n]),c=(0,i.Z)(l,2),f=c[0],s=c[1];return d(s,f,u)}function s(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=(0,o.Z)(),r="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,i=(0,u.Z)({name:"MuiUseMediaQuery",props:e,theme:t}),a=i.defaultMatches,l=void 0!==a&&a,s=i.matchMedia,m=void 0===s?r?window.matchMedia:null:s,p=i.ssrMatchMedia,v=void 0===p?null:p,h=i.noSsr;var b="function"===typeof n?n(t):n;b=b.replace(/^@media( ?)/m,"");var Z=void 0!==d?f:c,g=Z(b,l,m,v,h);return g}},40162:function(n,e,t){var r=t(75721);e.Z=r.Z}}]);
//# sourceMappingURL=84.c2a32dec.chunk.js.map