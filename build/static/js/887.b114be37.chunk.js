"use strict";(self.webpackChunka_tink_ui=self.webpackChunka_tink_ui||[]).push([[887],{94721:function(e,t,n){var r=n(63366),i=n(87462),o=n(72791),a=n(28182),l=n(94419),c=n(12065),u=n(66934),d=n(31402),s=n(90133),v=n(80184),f=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],h=(0,u.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.absolute&&t.absolute,t[n.variant],n.light&&t.light,"vertical"===n.orientation&&t.vertical,n.flexItem&&t.flexItem,n.children&&t.withChildren,n.children&&"vertical"===n.orientation&&t.withChildrenVertical,"right"===n.textAlign&&"vertical"!==n.orientation&&t.textAlignRight,"left"===n.textAlign&&"vertical"!==n.orientation&&t.textAlignLeft]}})((function(e){var t=e.theme,n=e.ownerState;return(0,i.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},n.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},n.light&&{borderColor:t.vars?"rgba(".concat(t.vars.palette.dividerChannel," / 0.08)"):(0,c.Fq)(t.palette.divider,.08)},"inset"===n.variant&&{marginLeft:72},"middle"===n.variant&&"horizontal"===n.orientation&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},"middle"===n.variant&&"vertical"===n.orientation&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},"vertical"===n.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},n.flexItem&&{alignSelf:"stretch",height:"auto"})}),(function(e){var t=e.theme,n=e.ownerState;return(0,i.Z)({},n.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:"thin solid ".concat((t.vars||t).palette.divider),top:"50%",content:'""',transform:"translateY(50%)"}})}),(function(e){var t=e.theme,n=e.ownerState;return(0,i.Z)({},n.children&&"vertical"===n.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:"thin solid ".concat((t.vars||t).palette.divider),transform:"translateX(0%)"}})}),(function(e){var t=e.ownerState;return(0,i.Z)({},"right"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})})),p=(0,u.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:function(e,t){var n=e.ownerState;return[t.wrapper,"vertical"===n.orientation&&t.wrapperVertical]}})((function(e){var t=e.theme,n=e.ownerState;return(0,i.Z)({display:"inline-block",paddingLeft:"calc(".concat(t.spacing(1)," * 1.2)"),paddingRight:"calc(".concat(t.spacing(1)," * 1.2)")},"vertical"===n.orientation&&{paddingTop:"calc(".concat(t.spacing(1)," * 1.2)"),paddingBottom:"calc(".concat(t.spacing(1)," * 1.2)")})})),m=o.forwardRef((function(e,t){var n=(0,d.Z)({props:e,name:"MuiDivider"}),o=n.absolute,c=void 0!==o&&o,u=n.children,m=n.className,g=n.component,w=void 0===g?u?"div":"hr":g,b=n.flexItem,x=void 0!==b&&b,Z=n.light,y=void 0!==Z&&Z,S=n.orientation,A=void 0===S?"horizontal":S,M=n.role,C=void 0===M?"hr"!==w?"separator":void 0:M,k=n.textAlign,L=void 0===k?"center":k,R=n.variant,D=void 0===R?"fullWidth":R,V=(0,r.Z)(n,f),I=(0,i.Z)({},n,{absolute:c,component:w,flexItem:x,light:y,orientation:A,role:C,textAlign:L,variant:D}),W=function(e){var t=e.absolute,n=e.children,r=e.classes,i=e.flexItem,o=e.light,a=e.orientation,c=e.textAlign,u={root:["root",t&&"absolute",e.variant,o&&"light","vertical"===a&&"vertical",i&&"flexItem",n&&"withChildren",n&&"vertical"===a&&"withChildrenVertical","right"===c&&"vertical"!==a&&"textAlignRight","left"===c&&"vertical"!==a&&"textAlignLeft"],wrapper:["wrapper","vertical"===a&&"wrapperVertical"]};return(0,l.Z)(u,s.V,r)}(I);return(0,v.jsx)(h,(0,i.Z)({as:w,className:(0,a.Z)(W.root,m),role:C,ref:t,ownerState:I},V,{children:u?(0,v.jsx)(p,{className:W.wrapper,ownerState:I,children:u}):null}))}));t.Z=m},90133:function(e,t,n){n.d(t,{V:function(){return i}});var r=n(21217);function i(e){return(0,r.Z)("MuiDivider",e)}var o=(0,n(75878).Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);t.Z=o},50533:function(e,t,n){n.d(t,{Z:function(){return k}});var r=n(93433),i=n(29439),o=n(4942),a=n(63366),l=n(87462),c=n(72791),u=n(28182),d=n(94419),s=n(14036),v=n(66934),f=n(31402),h=n(68221),p=n(42071),m=n(20890),g=n(21217);function w(e){return(0,g.Z)("MuiLink",e)}var b=(0,n(75878).Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),x=n(18529),Z=n(12065),y={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},S=function(e){var t=e.theme,n=e.ownerState,r=function(e){return y[e]||e}(n.color),i=(0,x.D)(t,"palette.".concat(r),!1)||n.color,o=(0,x.D)(t,"palette.".concat(r,"Channel"));return"vars"in t&&o?"rgba(".concat(o," / 0.4)"):(0,Z.Fq)(i,.4)},A=n(80184),M=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],C=(0,v.ZP)(m.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["underline".concat((0,s.Z)(n.underline))],"button"===n.component&&t.button]}})((function(e){var t=e.theme,n=e.ownerState;return(0,l.Z)({},"none"===n.underline&&{textDecoration:"none"},"hover"===n.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===n.underline&&(0,l.Z)({textDecoration:"underline"},"inherit"!==n.color&&{textDecorationColor:S({theme:t,ownerState:n})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===n.component&&(0,o.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(b.focusVisible),{outline:"auto"}))})),k=c.forwardRef((function(e,t){var n=(0,f.Z)({props:e,name:"MuiLink"}),o=n.className,v=n.color,m=void 0===v?"primary":v,g=n.component,b=void 0===g?"a":g,x=n.onBlur,Z=n.onFocus,S=n.TypographyClasses,k=n.underline,L=void 0===k?"always":k,R=n.variant,D=void 0===R?"inherit":R,V=n.sx,I=(0,a.Z)(n,M),W=(0,h.Z)(),B=W.isFocusVisibleRef,N=W.onBlur,F=W.onFocus,T=W.ref,j=c.useState(!1),z=(0,i.Z)(j,2),P=z[0],_=z[1],q=(0,p.Z)(t,T),H=(0,l.Z)({},n,{color:m,component:b,focusVisible:P,underline:L,variant:D}),E=function(e){var t=e.classes,n=e.component,r=e.focusVisible,i=e.underline,o={root:["root","underline".concat((0,s.Z)(i)),"button"===n&&"button",r&&"focusVisible"]};return(0,d.Z)(o,w,t)}(H);return(0,A.jsx)(C,(0,l.Z)({color:m,className:(0,u.Z)(E.root,o),classes:S,component:b,onBlur:function(e){N(e),!1===B.current&&_(!1),x&&x(e)},onFocus:function(e){F(e),!0===B.current&&_(!0),Z&&Z(e)},ref:q,ownerState:H,variant:D,sx:[].concat((0,r.Z)(Object.keys(y).includes(m)?[]:[{color:m}]),(0,r.Z)(Array.isArray(V)?V:[V]))},I))}))},95193:function(e,t,n){var r;n.d(t,{Z:function(){return v}});var i=n(29439),o=n(72791),a=n(69120),l=n(33073),c=n(40162);function u(e,t,n,r,a){var l="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,u=o.useState((function(){return a&&l?n(e).matches:r?r(e).matches:t})),d=(0,i.Z)(u,2),s=d[0],v=d[1];return(0,c.Z)((function(){var t=!0;if(l){var r=n(e),i=function(){t&&v(r.matches)};return i(),r.addListener(i),function(){t=!1,r.removeListener(i)}}}),[e,n,l]),s}var d=(r||(r=n.t(o,2))).useSyncExternalStore;function s(e,t,n,r){var a=o.useCallback((function(){return t}),[t]),l=o.useMemo((function(){if(null!==r){var t=r(e).matches;return function(){return t}}return a}),[a,e,r]),c=o.useMemo((function(){if(null===n)return[a,function(){return function(){}}];var t=n(e);return[function(){return t.matches},function(e){return t.addListener(e),function(){t.removeListener(e)}}]}),[a,n,e]),u=(0,i.Z)(c,2),s=u[0],v=u[1];return d(v,s,l)}function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(0,a.Z)(),r="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,i=(0,l.Z)({name:"MuiUseMediaQuery",props:t,theme:n}),o=i.defaultMatches,c=void 0!==o&&o,v=i.matchMedia,f=void 0===v?r?window.matchMedia:null:v,h=i.ssrMatchMedia,p=void 0===h?null:h,m=i.noSsr;var g="function"===typeof e?e(n):e;g=g.replace(/^@media( ?)/m,"");var w=void 0!==d?s:u,b=w(g,c,f,p,m);return b}}}]);
//# sourceMappingURL=887.b114be37.chunk.js.map