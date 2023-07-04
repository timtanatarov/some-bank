"use strict";(self.webpackChunka_tink_ui=self.webpackChunka_tink_ui||[]).push([[834],{4834:function(e,n,t){t.d(n,{rA:function(){return I},Ej:function(){return H},ZP:function(){return O},_o:function(){return j},Gx:function(){return W}});var o=t(29439),r=t(4942),i=t(63366),a=t(87462),l=t(46189),u=t(72791),d=t(28182),s=t(94419),c=t(54164),p=t(47563),f=t(27979),m=t(93981),h=t(75721),v=t(80184),b=["onChange","maxRows","minRows","style","value"];function y(e,n){return parseInt(e[n],10)||0}var w={visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"};function Z(e){return void 0===e||null===e||0===Object.keys(e).length}var g=u.forwardRef((function(e,n){var t=e.onChange,r=e.maxRows,l=e.minRows,d=void 0===l?1:l,s=e.style,g=e.value,S=(0,i.Z)(e,b),x=u.useRef(null!=g).current,C=u.useRef(null),k=(0,p.Z)(n,C),A=u.useRef(null),R=u.useRef(0),z=u.useState({}),E=(0,o.Z)(z,2),F=E[0],B=E[1],L=u.useCallback((function(){var n=C.current,t=(0,f.Z)(n).getComputedStyle(n);if("0px"===t.width)return{};var o=A.current;o.style.width=t.width,o.value=n.value||e.placeholder||"x","\n"===o.value.slice(-1)&&(o.value+=" ");var i=t["box-sizing"],a=y(t,"padding-bottom")+y(t,"padding-top"),l=y(t,"border-bottom-width")+y(t,"border-top-width"),u=o.scrollHeight;o.value="x";var s=o.scrollHeight,c=u;return d&&(c=Math.max(Number(d)*s,c)),r&&(c=Math.min(Number(r)*s,c)),{outerHeightStyle:(c=Math.max(c,s))+("border-box"===i?a+l:0),overflow:Math.abs(c-u)<=1}}),[r,d,e.placeholder]),M=function(e,n){var t=n.outerHeightStyle,o=n.overflow;return R.current<20&&(t>0&&Math.abs((e.outerHeightStyle||0)-t)>1||e.overflow!==o)?(R.current+=1,{overflow:o,outerHeightStyle:t}):e},N=u.useCallback((function(){var e=L();Z(e)||B((function(n){return M(n,e)}))}),[L]);u.useEffect((function(){var e,n=(0,m.Z)((function(){R.current=0,C.current&&function(){var e=L();Z(e)||(0,c.flushSync)((function(){B((function(n){return M(n,e)}))}))}()})),t=(0,f.Z)(C.current);return t.addEventListener("resize",n),"undefined"!==typeof ResizeObserver&&(e=new ResizeObserver(n)).observe(C.current),function(){n.clear(),t.removeEventListener("resize",n),e&&e.disconnect()}})),(0,h.Z)((function(){N()})),u.useEffect((function(){R.current=0}),[g]);return(0,v.jsxs)(u.Fragment,{children:[(0,v.jsx)("textarea",(0,a.Z)({value:g,onChange:function(e){R.current=0,x||N(),t&&t(e)},ref:k,rows:d,style:(0,a.Z)({height:F.outerHeightStyle,overflow:F.overflow?"hidden":null},s)},S)),(0,v.jsx)("textarea",{"aria-hidden":!0,className:e.className,readOnly:!0,ref:A,tabIndex:-1,style:(0,a.Z)({},w,s,{padding:0})})]})})),S=t(20627),x=t(76147),C=t(93840),k=t(52930),A=t(66934),R=t(31402),z=t(14036),E=t(42071),F=t(40162),B=t(25502),L=t(35470),M=t(55891),N=["aria-describedby","autoComplete","autoFocus","className","color","components","componentsProps","defaultValue","disabled","disableInjectingGlobalStyles","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","maxRows","minRows","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","size","startAdornment","type","value"],W=function(e,n){var t=e.ownerState;return[n.root,t.formControl&&n.formControl,t.startAdornment&&n.adornedStart,t.endAdornment&&n.adornedEnd,t.error&&n.error,"small"===t.size&&n.sizeSmall,t.multiline&&n.multiline,t.color&&n["color".concat((0,z.Z)(t.color))],t.fullWidth&&n.fullWidth,t.hiddenLabel&&n.hiddenLabel]},j=function(e,n){var t=e.ownerState;return[n.input,"small"===t.size&&n.inputSizeSmall,t.multiline&&n.inputMultiline,"search"===t.type&&n.inputTypeSearch,t.startAdornment&&n.inputAdornedStart,t.endAdornment&&n.inputAdornedEnd,t.hiddenLabel&&n.inputHiddenLabel]},H=(0,A.ZP)("div",{name:"MuiInputBase",slot:"Root",overridesResolver:W})((function(e){var n=e.theme,t=e.ownerState;return(0,a.Z)({},n.typography.body1,(0,r.Z)({color:(n.vars||n).palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center"},"&.".concat(M.Z.disabled),{color:(n.vars||n).palette.text.disabled,cursor:"default"}),t.multiline&&(0,a.Z)({padding:"4px 0 5px"},"small"===t.size&&{paddingTop:1}),t.fullWidth&&{width:"100%"})})),I=(0,A.ZP)("input",{name:"MuiInputBase",slot:"Input",overridesResolver:j})((function(e){var n,t=e.theme,o=e.ownerState,i="light"===t.palette.mode,l=(0,a.Z)({color:"currentColor"},t.vars?{opacity:t.vars.opacity.inputPlaceholder}:{opacity:i?.42:.5},{transition:t.transitions.create("opacity",{duration:t.transitions.duration.shorter})}),u={opacity:"0 !important"},d=t.vars?{opacity:t.vars.opacity.inputPlaceholder}:{opacity:i?.42:.5};return(0,a.Z)((n={font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":l,"&::-moz-placeholder":l,"&:-ms-input-placeholder":l,"&::-ms-input-placeholder":l,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"}},(0,r.Z)(n,"label[data-shrink=false] + .".concat(M.Z.formControl," &"),{"&::-webkit-input-placeholder":u,"&::-moz-placeholder":u,"&:-ms-input-placeholder":u,"&::-ms-input-placeholder":u,"&:focus::-webkit-input-placeholder":d,"&:focus::-moz-placeholder":d,"&:focus:-ms-input-placeholder":d,"&:focus::-ms-input-placeholder":d}),(0,r.Z)(n,"&.".concat(M.Z.disabled),{opacity:1,WebkitTextFillColor:(t.vars||t).palette.text.disabled}),(0,r.Z)(n,"&:-webkit-autofill",{animationDuration:"5000s",animationName:"mui-auto-fill"}),n),"small"===o.size&&{paddingTop:1},o.multiline&&{height:"auto",resize:"none",padding:0,paddingTop:0},"search"===o.type&&{MozAppearance:"textfield"})})),P=(0,v.jsx)(B.Z,{styles:{"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}}),T=u.forwardRef((function(e,n){var t=(0,R.Z)({props:e,name:"MuiInputBase"}),r=t["aria-describedby"],c=t.autoComplete,p=t.autoFocus,f=t.className,m=t.components,h=void 0===m?{}:m,b=t.componentsProps,y=void 0===b?{}:b,w=t.defaultValue,Z=t.disabled,A=t.disableInjectingGlobalStyles,B=t.endAdornment,W=t.fullWidth,j=void 0!==W&&W,T=t.id,O=t.inputComponent,K=void 0===O?"input":O,D=t.inputProps,V=void 0===D?{}:D,_=t.inputRef,q=t.maxRows,G=t.minRows,U=t.multiline,J=void 0!==U&&U,Q=t.name,X=t.onBlur,Y=t.onChange,$=t.onClick,ee=t.onFocus,ne=t.onKeyDown,te=t.onKeyUp,oe=t.placeholder,re=t.readOnly,ie=t.renderSuffix,ae=t.rows,le=t.startAdornment,ue=t.type,de=void 0===ue?"text":ue,se=t.value,ce=(0,i.Z)(t,N),pe=null!=V.value?V.value:se,fe=u.useRef(null!=pe).current,me=u.useRef(),he=u.useCallback((function(e){0}),[]),ve=(0,E.Z)(V.ref,he),be=(0,E.Z)(_,ve),ye=(0,E.Z)(me,be),we=u.useState(!1),Ze=(0,o.Z)(we,2),ge=Ze[0],Se=Ze[1],xe=(0,k.Z)();var Ce=(0,x.Z)({props:t,muiFormControl:xe,states:["color","disabled","error","hiddenLabel","size","required","filled"]});Ce.focused=xe?xe.focused:ge,u.useEffect((function(){!xe&&Z&&ge&&(Se(!1),X&&X())}),[xe,Z,ge,X]);var ke=xe&&xe.onFilled,Ae=xe&&xe.onEmpty,Re=u.useCallback((function(e){(0,L.vd)(e)?ke&&ke():Ae&&Ae()}),[ke,Ae]);(0,F.Z)((function(){fe&&Re({value:pe})}),[pe,Re,fe]);u.useEffect((function(){Re(me.current)}),[]);var ze=K,Ee=V;J&&"input"===ze&&(Ee=ae?(0,a.Z)({type:void 0,minRows:ae,maxRows:ae},Ee):(0,a.Z)({type:void 0,maxRows:q,minRows:G},Ee),ze=g);u.useEffect((function(){xe&&xe.setAdornedStart(Boolean(le))}),[xe,le]);var Fe=(0,a.Z)({},t,{color:Ce.color||"primary",disabled:Ce.disabled,endAdornment:B,error:Ce.error,focused:Ce.focused,formControl:xe,fullWidth:j,hiddenLabel:Ce.hiddenLabel,multiline:J,size:Ce.size,startAdornment:le,type:de}),Be=function(e){var n=e.classes,t=e.color,o=e.disabled,r=e.error,i=e.endAdornment,a=e.focused,l=e.formControl,u=e.fullWidth,d=e.hiddenLabel,c=e.multiline,p=e.size,f=e.startAdornment,m=e.type,h={root:["root","color".concat((0,z.Z)(t)),o&&"disabled",r&&"error",u&&"fullWidth",a&&"focused",l&&"formControl","small"===p&&"sizeSmall",c&&"multiline",f&&"adornedStart",i&&"adornedEnd",d&&"hiddenLabel"],input:["input",o&&"disabled","search"===m&&"inputTypeSearch",c&&"inputMultiline","small"===p&&"inputSizeSmall",d&&"inputHiddenLabel",f&&"inputAdornedStart",i&&"inputAdornedEnd"]};return(0,s.Z)(h,M.u,n)}(Fe),Le=h.Root||H,Me=y.root||{},Ne=h.Input||I;return Ee=(0,a.Z)({},Ee,y.input),(0,v.jsxs)(u.Fragment,{children:[!A&&P,(0,v.jsxs)(Le,(0,a.Z)({},Me,!(0,S.Z)(Le)&&{ownerState:(0,a.Z)({},Fe,Me.ownerState)},{ref:n,onClick:function(e){me.current&&e.currentTarget===e.target&&me.current.focus(),$&&$(e)}},ce,{className:(0,d.Z)(Be.root,Me.className,f),children:[le,(0,v.jsx)(C.Z.Provider,{value:null,children:(0,v.jsx)(Ne,(0,a.Z)({ownerState:Fe,"aria-invalid":Ce.error,"aria-describedby":r,autoComplete:c,autoFocus:p,defaultValue:w,disabled:Ce.disabled,id:T,onAnimationStart:function(e){Re("mui-auto-fill-cancel"===e.animationName?me.current:{value:"x"})},name:Q,placeholder:oe,readOnly:re,required:Ce.required,rows:ae,value:pe,onKeyDown:ne,onKeyUp:te,type:de},Ee,!(0,S.Z)(Ne)&&{as:ze,ownerState:(0,a.Z)({},Fe,Ee.ownerState)},{ref:ye,className:(0,d.Z)(Be.input,Ee.className),onBlur:function(e){X&&X(e),V.onBlur&&V.onBlur(e),xe&&xe.onBlur?xe.onBlur(e):Se(!1)},onChange:function(e){if(!fe){var n=e.target||me.current;if(null==n)throw new Error((0,l.Z)(1));Re({value:n.value})}for(var t=arguments.length,o=new Array(t>1?t-1:0),r=1;r<t;r++)o[r-1]=arguments[r];V.onChange&&V.onChange.apply(V,[e].concat(o)),Y&&Y.apply(void 0,[e].concat(o))},onFocus:function(e){Ce.disabled?e.stopPropagation():(ee&&ee(e),V.onFocus&&V.onFocus(e),xe&&xe.onFocus?xe.onFocus(e):Se(!0))}}))}),B,ie?ie((0,a.Z)({},Ce,{startAdornment:le})):null]}))]})})),O=T},55891:function(e,n,t){t.d(n,{u:function(){return r}});var o=t(21217);function r(e){return(0,o.Z)("MuiInputBase",e)}var i=(0,t(75878).Z)("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"]);n.Z=i},35470:function(e,n,t){function o(e){return null!=e&&!(Array.isArray(e)&&0===e.length)}function r(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e&&(o(e.value)&&""!==e.value||n&&o(e.defaultValue)&&""!==e.defaultValue)}function i(e){return e.startAdornment}t.d(n,{B7:function(){return i},vd:function(){return r}})}}]);
//# sourceMappingURL=834.9f5e0ef5.chunk.js.map