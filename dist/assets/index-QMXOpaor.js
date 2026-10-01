(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Im={exports:{}},jl={},Um={exports:{}},et={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ka=Symbol.for("react.element"),Uv=Symbol.for("react.portal"),Fv=Symbol.for("react.fragment"),Ov=Symbol.for("react.strict_mode"),kv=Symbol.for("react.profiler"),zv=Symbol.for("react.provider"),Bv=Symbol.for("react.context"),Hv=Symbol.for("react.forward_ref"),Gv=Symbol.for("react.suspense"),Vv=Symbol.for("react.memo"),Wv=Symbol.for("react.lazy"),zf=Symbol.iterator;function jv(t){return t===null||typeof t!="object"?null:(t=zf&&t[zf]||t["@@iterator"],typeof t=="function"?t:null)}var Fm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Om=Object.assign,km={};function Xs(t,e,n){this.props=t,this.context=e,this.refs=km,this.updater=n||Fm}Xs.prototype.isReactComponent={};Xs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Xs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function zm(){}zm.prototype=Xs.prototype;function Pd(t,e,n){this.props=t,this.context=e,this.refs=km,this.updater=n||Fm}var Ld=Pd.prototype=new zm;Ld.constructor=Pd;Om(Ld,Xs.prototype);Ld.isPureReactComponent=!0;var Bf=Array.isArray,Bm=Object.prototype.hasOwnProperty,Nd={current:null},Hm={key:!0,ref:!0,__self:!0,__source:!0};function Gm(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Bm.call(e,i)&&!Hm.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Ka,type:t,key:s,ref:a,props:r,_owner:Nd.current}}function Xv(t,e){return{$$typeof:Ka,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Dd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ka}function qv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Hf=/\/+/g;function vc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?qv(""+t.key):e.toString(36)}function el(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Ka:case Uv:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+vc(a,0):i,Bf(r)?(n="",t!=null&&(n=t.replace(Hf,"$&/")+"/"),el(r,e,n,"",function(c){return c})):r!=null&&(Dd(r)&&(r=Xv(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Hf,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Bf(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+vc(s,o);a+=el(s,e,n,l,r)}else if(l=jv(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+vc(s,o++),a+=el(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function ao(t,e,n){if(t==null)return t;var i=[],r=0;return el(t,i,"","",function(s){return e.call(n,s,r++)}),i}function $v(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var nn={current:null},tl={transition:null},Yv={ReactCurrentDispatcher:nn,ReactCurrentBatchConfig:tl,ReactCurrentOwner:Nd};function Vm(){throw Error("act(...) is not supported in production builds of React.")}et.Children={map:ao,forEach:function(t,e,n){ao(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ao(t,function(){e++}),e},toArray:function(t){return ao(t,function(e){return e})||[]},only:function(t){if(!Dd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};et.Component=Xs;et.Fragment=Fv;et.Profiler=kv;et.PureComponent=Pd;et.StrictMode=Ov;et.Suspense=Gv;et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yv;et.act=Vm;et.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Om({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Nd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Bm.call(e,l)&&!Hm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Ka,type:t.type,key:r,ref:s,props:i,_owner:a}};et.createContext=function(t){return t={$$typeof:Bv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:zv,_context:t},t.Consumer=t};et.createElement=Gm;et.createFactory=function(t){var e=Gm.bind(null,t);return e.type=t,e};et.createRef=function(){return{current:null}};et.forwardRef=function(t){return{$$typeof:Hv,render:t}};et.isValidElement=Dd;et.lazy=function(t){return{$$typeof:Wv,_payload:{_status:-1,_result:t},_init:$v}};et.memo=function(t,e){return{$$typeof:Vv,type:t,compare:e===void 0?null:e}};et.startTransition=function(t){var e=tl.transition;tl.transition={};try{t()}finally{tl.transition=e}};et.unstable_act=Vm;et.useCallback=function(t,e){return nn.current.useCallback(t,e)};et.useContext=function(t){return nn.current.useContext(t)};et.useDebugValue=function(){};et.useDeferredValue=function(t){return nn.current.useDeferredValue(t)};et.useEffect=function(t,e){return nn.current.useEffect(t,e)};et.useId=function(){return nn.current.useId()};et.useImperativeHandle=function(t,e,n){return nn.current.useImperativeHandle(t,e,n)};et.useInsertionEffect=function(t,e){return nn.current.useInsertionEffect(t,e)};et.useLayoutEffect=function(t,e){return nn.current.useLayoutEffect(t,e)};et.useMemo=function(t,e){return nn.current.useMemo(t,e)};et.useReducer=function(t,e,n){return nn.current.useReducer(t,e,n)};et.useRef=function(t){return nn.current.useRef(t)};et.useState=function(t){return nn.current.useState(t)};et.useSyncExternalStore=function(t,e,n){return nn.current.useSyncExternalStore(t,e,n)};et.useTransition=function(){return nn.current.useTransition()};et.version="18.3.1";Um.exports=et;var Te=Um.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kv=Te,Zv=Symbol.for("react.element"),Qv=Symbol.for("react.fragment"),Jv=Object.prototype.hasOwnProperty,e_=Kv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,t_={key:!0,ref:!0,__self:!0,__source:!0};function Wm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)Jv.call(e,i)&&!t_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Zv,type:t,key:s,ref:a,props:r,_owner:e_.current}}jl.Fragment=Qv;jl.jsx=Wm;jl.jsxs=Wm;Im.exports=jl;var S=Im.exports,jm={exports:{}},Mn={},Xm={exports:{}},qm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,F){var O=D.length;D.push(F);e:for(;0<O;){var Y=O-1>>>1,de=D[Y];if(0<r(de,F))D[Y]=F,D[O]=de,O=Y;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var F=D[0],O=D.pop();if(O!==F){D[0]=O;e:for(var Y=0,de=D.length,be=de>>>1;Y<be;){var X=2*(Y+1)-1,q=D[X],ne=X+1,Ee=D[ne];if(0>r(q,O))ne<de&&0>r(Ee,q)?(D[Y]=Ee,D[ne]=O,Y=ne):(D[Y]=q,D[X]=O,Y=X);else if(ne<de&&0>r(Ee,O))D[Y]=Ee,D[ne]=O,Y=ne;else break e}}return F}function r(D,F){var O=D.sortIndex-F.sortIndex;return O!==0?O:D.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],d=1,f=null,h=3,m=!1,_=!1,y=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(D){for(var F=n(c);F!==null;){if(F.callback===null)i(c);else if(F.startTime<=D)i(c),F.sortIndex=F.expirationTime,e(l,F);else break;F=n(c)}}function M(D){if(y=!1,g(D),!_)if(n(l)!==null)_=!0,k(R);else{var F=n(c);F!==null&&V(M,F.startTime-D)}}function R(D,F){_=!1,y&&(y=!1,u(N),N=-1),m=!0;var O=h;try{for(g(F),f=n(l);f!==null&&(!(f.expirationTime>F)||D&&!C());){var Y=f.callback;if(typeof Y=="function"){f.callback=null,h=f.priorityLevel;var de=Y(f.expirationTime<=F);F=t.unstable_now(),typeof de=="function"?f.callback=de:f===n(l)&&i(l),g(F)}else i(l);f=n(l)}if(f!==null)var be=!0;else{var X=n(c);X!==null&&V(M,X.startTime-F),be=!1}return be}finally{f=null,h=O,m=!1}}var b=!1,w=null,N=-1,ie=5,x=-1;function C(){return!(t.unstable_now()-x<ie)}function K(){if(w!==null){var D=t.unstable_now();x=D;var F=!0;try{F=w(!0,D)}finally{F?ee():(b=!1,w=null)}}else b=!1}var ee;if(typeof v=="function")ee=function(){v(K)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,Z=I.port2;I.port1.onmessage=K,ee=function(){Z.postMessage(null)}}else ee=function(){p(K,0)};function k(D){w=D,b||(b=!0,ee())}function V(D,F){N=p(function(){D(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,k(R))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ie=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(h){case 1:case 2:case 3:var F=3;break;default:F=h}var O=h;h=F;try{return D()}finally{h=O}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,F){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var O=h;h=D;try{return F()}finally{h=O}},t.unstable_scheduleCallback=function(D,F,O){var Y=t.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?Y+O:Y):O=Y,D){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=O+de,D={id:d++,callback:F,priorityLevel:D,startTime:O,expirationTime:de,sortIndex:-1},O>Y?(D.sortIndex=O,e(c,D),n(l)===null&&D===n(c)&&(y?(u(N),N=-1):y=!0,V(M,O-Y))):(D.sortIndex=de,e(l,D),_||m||(_=!0,k(R))),D},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(D){var F=h;return function(){var O=h;h=F;try{return D.apply(this,arguments)}finally{h=O}}}})(qm);Xm.exports=qm;var n_=Xm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i_=Te,Sn=n_;function ge(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $m=new Set,Ra={};function Or(t,e){Us(t,e),Us(t+"Capture",e)}function Us(t,e){for(Ra[t]=e,t=0;t<e.length;t++)$m.add(e[t])}var vi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bu=Object.prototype.hasOwnProperty,r_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Gf={},Vf={};function s_(t){return bu.call(Vf,t)?!0:bu.call(Gf,t)?!1:r_.test(t)?Vf[t]=!0:(Gf[t]=!0,!1)}function a_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function o_(t,e,n,i){if(e===null||typeof e>"u"||a_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function rn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Bt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Bt[t]=new rn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Bt[e]=new rn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Bt[t]=new rn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Bt[t]=new rn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Bt[t]=new rn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Bt[t]=new rn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Bt[t]=new rn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Bt[t]=new rn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Bt[t]=new rn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Id=/[\-:]([a-z])/g;function Ud(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Id,Ud);Bt[e]=new rn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Id,Ud);Bt[e]=new rn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Id,Ud);Bt[e]=new rn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Bt[t]=new rn(t,1,!1,t.toLowerCase(),null,!1,!1)});Bt.xlinkHref=new rn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Bt[t]=new rn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Fd(t,e,n,i){var r=Bt.hasOwnProperty(e)?Bt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(o_(e,n,r,i)&&(n=null),i||r===null?s_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Mi=i_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oo=Symbol.for("react.element"),fs=Symbol.for("react.portal"),hs=Symbol.for("react.fragment"),Od=Symbol.for("react.strict_mode"),Au=Symbol.for("react.profiler"),Ym=Symbol.for("react.provider"),Km=Symbol.for("react.context"),kd=Symbol.for("react.forward_ref"),Cu=Symbol.for("react.suspense"),Ru=Symbol.for("react.suspense_list"),zd=Symbol.for("react.memo"),Ni=Symbol.for("react.lazy"),Zm=Symbol.for("react.offscreen"),Wf=Symbol.iterator;function Zs(t){return t===null||typeof t!="object"?null:(t=Wf&&t[Wf]||t["@@iterator"],typeof t=="function"?t:null)}var xt=Object.assign,_c;function pa(t){if(_c===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);_c=e&&e[1]||""}return`
`+_c+t}var xc=!1;function yc(t,e){if(!t||xc)return"";xc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{xc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?pa(t):""}function l_(t){switch(t.tag){case 5:return pa(t.type);case 16:return pa("Lazy");case 13:return pa("Suspense");case 19:return pa("SuspenseList");case 0:case 2:case 15:return t=yc(t.type,!1),t;case 11:return t=yc(t.type.render,!1),t;case 1:return t=yc(t.type,!0),t;default:return""}}function Pu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case hs:return"Fragment";case fs:return"Portal";case Au:return"Profiler";case Od:return"StrictMode";case Cu:return"Suspense";case Ru:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Km:return(t.displayName||"Context")+".Consumer";case Ym:return(t._context.displayName||"Context")+".Provider";case kd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case zd:return e=t.displayName||null,e!==null?e:Pu(t.type)||"Memo";case Ni:e=t._payload,t=t._init;try{return Pu(t(e))}catch{}}return null}function c_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pu(e);case 8:return e===Od?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Qi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Qm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function u_(t){var e=Qm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function lo(t){t._valueTracker||(t._valueTracker=u_(t))}function Jm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Qm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function pl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Lu(t,e){var n=e.checked;return xt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function jf(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Qi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function eg(t,e){e=e.checked,e!=null&&Fd(t,"checked",e,!1)}function Nu(t,e){eg(t,e);var n=Qi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Du(t,e.type,n):e.hasOwnProperty("defaultValue")&&Du(t,e.type,Qi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Xf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Du(t,e,n){(e!=="number"||pl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ma=Array.isArray;function As(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Qi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Iu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ge(91));return xt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function qf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ge(92));if(ma(n)){if(1<n.length)throw Error(ge(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Qi(n)}}function tg(t,e){var n=Qi(e.value),i=Qi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function $f(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ng(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Uu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ng(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var co,ig=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(co=co||document.createElement("div"),co.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=co.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Pa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var _a={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},d_=["Webkit","ms","Moz","O"];Object.keys(_a).forEach(function(t){d_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),_a[e]=_a[t]})});function rg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||_a.hasOwnProperty(t)&&_a[t]?(""+e).trim():e+"px"}function sg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=rg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var f_=xt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fu(t,e){if(e){if(f_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ge(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ge(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ge(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ge(62))}}function Ou(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ku=null;function Bd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var zu=null,Cs=null,Rs=null;function Yf(t){if(t=Ja(t)){if(typeof zu!="function")throw Error(ge(280));var e=t.stateNode;e&&(e=Kl(e),zu(t.stateNode,t.type,e))}}function ag(t){Cs?Rs?Rs.push(t):Rs=[t]:Cs=t}function og(){if(Cs){var t=Cs,e=Rs;if(Rs=Cs=null,Yf(t),e)for(t=0;t<e.length;t++)Yf(e[t])}}function lg(t,e){return t(e)}function cg(){}var Sc=!1;function ug(t,e,n){if(Sc)return t(e,n);Sc=!0;try{return lg(t,e,n)}finally{Sc=!1,(Cs!==null||Rs!==null)&&(cg(),og())}}function La(t,e){var n=t.stateNode;if(n===null)return null;var i=Kl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ge(231,e,typeof n));return n}var Bu=!1;if(vi)try{var Qs={};Object.defineProperty(Qs,"passive",{get:function(){Bu=!0}}),window.addEventListener("test",Qs,Qs),window.removeEventListener("test",Qs,Qs)}catch{Bu=!1}function h_(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var xa=!1,ml=null,gl=!1,Hu=null,p_={onError:function(t){xa=!0,ml=t}};function m_(t,e,n,i,r,s,a,o,l){xa=!1,ml=null,h_.apply(p_,arguments)}function g_(t,e,n,i,r,s,a,o,l){if(m_.apply(this,arguments),xa){if(xa){var c=ml;xa=!1,ml=null}else throw Error(ge(198));gl||(gl=!0,Hu=c)}}function kr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function dg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Kf(t){if(kr(t)!==t)throw Error(ge(188))}function v_(t){var e=t.alternate;if(!e){if(e=kr(t),e===null)throw Error(ge(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Kf(r),t;if(s===i)return Kf(r),e;s=s.sibling}throw Error(ge(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ge(189))}}if(n.alternate!==i)throw Error(ge(190))}if(n.tag!==3)throw Error(ge(188));return n.stateNode.current===n?t:e}function fg(t){return t=v_(t),t!==null?hg(t):null}function hg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=hg(t);if(e!==null)return e;t=t.sibling}return null}var pg=Sn.unstable_scheduleCallback,Zf=Sn.unstable_cancelCallback,__=Sn.unstable_shouldYield,x_=Sn.unstable_requestPaint,Mt=Sn.unstable_now,y_=Sn.unstable_getCurrentPriorityLevel,Hd=Sn.unstable_ImmediatePriority,mg=Sn.unstable_UserBlockingPriority,vl=Sn.unstable_NormalPriority,S_=Sn.unstable_LowPriority,gg=Sn.unstable_IdlePriority,Xl=null,ei=null;function M_(t){if(ei&&typeof ei.onCommitFiberRoot=="function")try{ei.onCommitFiberRoot(Xl,t,void 0,(t.current.flags&128)===128)}catch{}}var Vn=Math.clz32?Math.clz32:T_,E_=Math.log,w_=Math.LN2;function T_(t){return t>>>=0,t===0?32:31-(E_(t)/w_|0)|0}var uo=64,fo=4194304;function ga(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function _l(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=ga(o):(s&=a,s!==0&&(i=ga(s)))}else a=n&~r,a!==0?i=ga(a):s!==0&&(i=ga(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Vn(e),r=1<<n,i|=t[n],e&=~r;return i}function b_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function A_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Vn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=b_(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Gu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function vg(){var t=uo;return uo<<=1,!(uo&4194240)&&(uo=64),t}function Mc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Za(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Vn(e),t[e]=n}function C_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Vn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Gd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Vn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var st=0;function _g(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var xg,Vd,yg,Sg,Mg,Vu=!1,ho=[],Hi=null,Gi=null,Vi=null,Na=new Map,Da=new Map,Ui=[],R_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qf(t,e){switch(t){case"focusin":case"focusout":Hi=null;break;case"dragenter":case"dragleave":Gi=null;break;case"mouseover":case"mouseout":Vi=null;break;case"pointerover":case"pointerout":Na.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Da.delete(e.pointerId)}}function Js(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ja(e),e!==null&&Vd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function P_(t,e,n,i,r){switch(e){case"focusin":return Hi=Js(Hi,t,e,n,i,r),!0;case"dragenter":return Gi=Js(Gi,t,e,n,i,r),!0;case"mouseover":return Vi=Js(Vi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Na.set(s,Js(Na.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Da.set(s,Js(Da.get(s)||null,t,e,n,i,r)),!0}return!1}function Eg(t){var e=Mr(t.target);if(e!==null){var n=kr(e);if(n!==null){if(e=n.tag,e===13){if(e=dg(n),e!==null){t.blockedOn=e,Mg(t.priority,function(){yg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function nl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Wu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);ku=i,n.target.dispatchEvent(i),ku=null}else return e=Ja(n),e!==null&&Vd(e),t.blockedOn=n,!1;e.shift()}return!0}function Jf(t,e,n){nl(t)&&n.delete(e)}function L_(){Vu=!1,Hi!==null&&nl(Hi)&&(Hi=null),Gi!==null&&nl(Gi)&&(Gi=null),Vi!==null&&nl(Vi)&&(Vi=null),Na.forEach(Jf),Da.forEach(Jf)}function ea(t,e){t.blockedOn===e&&(t.blockedOn=null,Vu||(Vu=!0,Sn.unstable_scheduleCallback(Sn.unstable_NormalPriority,L_)))}function Ia(t){function e(r){return ea(r,t)}if(0<ho.length){ea(ho[0],t);for(var n=1;n<ho.length;n++){var i=ho[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Hi!==null&&ea(Hi,t),Gi!==null&&ea(Gi,t),Vi!==null&&ea(Vi,t),Na.forEach(e),Da.forEach(e),n=0;n<Ui.length;n++)i=Ui[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ui.length&&(n=Ui[0],n.blockedOn===null);)Eg(n),n.blockedOn===null&&Ui.shift()}var Ps=Mi.ReactCurrentBatchConfig,xl=!0;function N_(t,e,n,i){var r=st,s=Ps.transition;Ps.transition=null;try{st=1,Wd(t,e,n,i)}finally{st=r,Ps.transition=s}}function D_(t,e,n,i){var r=st,s=Ps.transition;Ps.transition=null;try{st=4,Wd(t,e,n,i)}finally{st=r,Ps.transition=s}}function Wd(t,e,n,i){if(xl){var r=Wu(t,e,n,i);if(r===null)Nc(t,e,i,yl,n),Qf(t,i);else if(P_(r,t,e,n,i))i.stopPropagation();else if(Qf(t,i),e&4&&-1<R_.indexOf(t)){for(;r!==null;){var s=Ja(r);if(s!==null&&xg(s),s=Wu(t,e,n,i),s===null&&Nc(t,e,i,yl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Nc(t,e,i,null,n)}}var yl=null;function Wu(t,e,n,i){if(yl=null,t=Bd(i),t=Mr(t),t!==null)if(e=kr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=dg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return yl=t,null}function wg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(y_()){case Hd:return 1;case mg:return 4;case vl:case S_:return 16;case gg:return 536870912;default:return 16}default:return 16}}var ki=null,jd=null,il=null;function Tg(){if(il)return il;var t,e=jd,n=e.length,i,r="value"in ki?ki.value:ki.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return il=r.slice(t,1<i?1-i:void 0)}function rl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function po(){return!0}function eh(){return!1}function En(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?po:eh,this.isPropagationStopped=eh,this}return xt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=po)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=po)},persist:function(){},isPersistent:po}),e}var qs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xd=En(qs),Qa=xt({},qs,{view:0,detail:0}),I_=En(Qa),Ec,wc,ta,ql=xt({},Qa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ta&&(ta&&t.type==="mousemove"?(Ec=t.screenX-ta.screenX,wc=t.screenY-ta.screenY):wc=Ec=0,ta=t),Ec)},movementY:function(t){return"movementY"in t?t.movementY:wc}}),th=En(ql),U_=xt({},ql,{dataTransfer:0}),F_=En(U_),O_=xt({},Qa,{relatedTarget:0}),Tc=En(O_),k_=xt({},qs,{animationName:0,elapsedTime:0,pseudoElement:0}),z_=En(k_),B_=xt({},qs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),H_=En(B_),G_=xt({},qs,{data:0}),nh=En(G_),V_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},W_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},j_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function X_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=j_[t])?!!e[t]:!1}function qd(){return X_}var q_=xt({},Qa,{key:function(t){if(t.key){var e=V_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=rl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?W_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qd,charCode:function(t){return t.type==="keypress"?rl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?rl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$_=En(q_),Y_=xt({},ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ih=En(Y_),K_=xt({},Qa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qd}),Z_=En(K_),Q_=xt({},qs,{propertyName:0,elapsedTime:0,pseudoElement:0}),J_=En(Q_),ex=xt({},ql,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),tx=En(ex),nx=[9,13,27,32],$d=vi&&"CompositionEvent"in window,ya=null;vi&&"documentMode"in document&&(ya=document.documentMode);var ix=vi&&"TextEvent"in window&&!ya,bg=vi&&(!$d||ya&&8<ya&&11>=ya),rh=" ",sh=!1;function Ag(t,e){switch(t){case"keyup":return nx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ps=!1;function rx(t,e){switch(t){case"compositionend":return Cg(e);case"keypress":return e.which!==32?null:(sh=!0,rh);case"textInput":return t=e.data,t===rh&&sh?null:t;default:return null}}function sx(t,e){if(ps)return t==="compositionend"||!$d&&Ag(t,e)?(t=Tg(),il=jd=ki=null,ps=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return bg&&e.locale!=="ko"?null:e.data;default:return null}}var ax={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ah(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ax[t.type]:e==="textarea"}function Rg(t,e,n,i){ag(i),e=Sl(e,"onChange"),0<e.length&&(n=new Xd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Sa=null,Ua=null;function ox(t){Bg(t,0)}function $l(t){var e=vs(t);if(Jm(e))return t}function lx(t,e){if(t==="change")return e}var Pg=!1;if(vi){var bc;if(vi){var Ac="oninput"in document;if(!Ac){var oh=document.createElement("div");oh.setAttribute("oninput","return;"),Ac=typeof oh.oninput=="function"}bc=Ac}else bc=!1;Pg=bc&&(!document.documentMode||9<document.documentMode)}function lh(){Sa&&(Sa.detachEvent("onpropertychange",Lg),Ua=Sa=null)}function Lg(t){if(t.propertyName==="value"&&$l(Ua)){var e=[];Rg(e,Ua,t,Bd(t)),ug(ox,e)}}function cx(t,e,n){t==="focusin"?(lh(),Sa=e,Ua=n,Sa.attachEvent("onpropertychange",Lg)):t==="focusout"&&lh()}function ux(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return $l(Ua)}function dx(t,e){if(t==="click")return $l(e)}function fx(t,e){if(t==="input"||t==="change")return $l(e)}function hx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var jn=typeof Object.is=="function"?Object.is:hx;function Fa(t,e){if(jn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!bu.call(e,r)||!jn(t[r],e[r]))return!1}return!0}function ch(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function uh(t,e){var n=ch(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ch(n)}}function Ng(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ng(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Dg(){for(var t=window,e=pl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=pl(t.document)}return e}function Yd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function px(t){var e=Dg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ng(n.ownerDocument.documentElement,n)){if(i!==null&&Yd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=uh(n,s);var a=uh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var mx=vi&&"documentMode"in document&&11>=document.documentMode,ms=null,ju=null,Ma=null,Xu=!1;function dh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xu||ms==null||ms!==pl(i)||(i=ms,"selectionStart"in i&&Yd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ma&&Fa(Ma,i)||(Ma=i,i=Sl(ju,"onSelect"),0<i.length&&(e=new Xd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ms)))}function mo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var gs={animationend:mo("Animation","AnimationEnd"),animationiteration:mo("Animation","AnimationIteration"),animationstart:mo("Animation","AnimationStart"),transitionend:mo("Transition","TransitionEnd")},Cc={},Ig={};vi&&(Ig=document.createElement("div").style,"AnimationEvent"in window||(delete gs.animationend.animation,delete gs.animationiteration.animation,delete gs.animationstart.animation),"TransitionEvent"in window||delete gs.transitionend.transition);function Yl(t){if(Cc[t])return Cc[t];if(!gs[t])return t;var e=gs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ig)return Cc[t]=e[n];return t}var Ug=Yl("animationend"),Fg=Yl("animationiteration"),Og=Yl("animationstart"),kg=Yl("transitionend"),zg=new Map,fh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nr(t,e){zg.set(t,e),Or(e,[t])}for(var Rc=0;Rc<fh.length;Rc++){var Pc=fh[Rc],gx=Pc.toLowerCase(),vx=Pc[0].toUpperCase()+Pc.slice(1);nr(gx,"on"+vx)}nr(Ug,"onAnimationEnd");nr(Fg,"onAnimationIteration");nr(Og,"onAnimationStart");nr("dblclick","onDoubleClick");nr("focusin","onFocus");nr("focusout","onBlur");nr(kg,"onTransitionEnd");Us("onMouseEnter",["mouseout","mouseover"]);Us("onMouseLeave",["mouseout","mouseover"]);Us("onPointerEnter",["pointerout","pointerover"]);Us("onPointerLeave",["pointerout","pointerover"]);Or("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Or("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Or("onBeforeInput",["compositionend","keypress","textInput","paste"]);Or("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Or("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Or("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var va="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_x=new Set("cancel close invalid load scroll toggle".split(" ").concat(va));function hh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,g_(i,e,void 0,t),t.currentTarget=null}function Bg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;hh(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;hh(r,o,c),s=l}}}if(gl)throw t=Hu,gl=!1,Hu=null,t}function ut(t,e){var n=e[Zu];n===void 0&&(n=e[Zu]=new Set);var i=t+"__bubble";n.has(i)||(Hg(e,t,2,!1),n.add(i))}function Lc(t,e,n){var i=0;e&&(i|=4),Hg(n,t,i,e)}var go="_reactListening"+Math.random().toString(36).slice(2);function Oa(t){if(!t[go]){t[go]=!0,$m.forEach(function(n){n!=="selectionchange"&&(_x.has(n)||Lc(n,!1,t),Lc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[go]||(e[go]=!0,Lc("selectionchange",!1,e))}}function Hg(t,e,n,i){switch(wg(e)){case 1:var r=N_;break;case 4:r=D_;break;default:r=Wd}n=r.bind(null,e,n,t),r=void 0,!Bu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Nc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Mr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}ug(function(){var c=s,d=Bd(n),f=[];e:{var h=zg.get(t);if(h!==void 0){var m=Xd,_=t;switch(t){case"keypress":if(rl(n)===0)break e;case"keydown":case"keyup":m=$_;break;case"focusin":_="focus",m=Tc;break;case"focusout":_="blur",m=Tc;break;case"beforeblur":case"afterblur":m=Tc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=th;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=F_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Z_;break;case Ug:case Fg:case Og:m=z_;break;case kg:m=J_;break;case"scroll":m=I_;break;case"wheel":m=tx;break;case"copy":case"cut":case"paste":m=H_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=ih}var y=(e&4)!==0,p=!y&&t==="scroll",u=y?h!==null?h+"Capture":null:h;y=[];for(var v=c,g;v!==null;){g=v;var M=g.stateNode;if(g.tag===5&&M!==null&&(g=M,u!==null&&(M=La(v,u),M!=null&&y.push(ka(v,M,g)))),p)break;v=v.return}0<y.length&&(h=new m(h,_,null,n,d),f.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==ku&&(_=n.relatedTarget||n.fromElement)&&(Mr(_)||_[_i]))break e;if((m||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=c,_=_?Mr(_):null,_!==null&&(p=kr(_),_!==p||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=c),m!==_)){if(y=th,M="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(y=ih,M="onPointerLeave",u="onPointerEnter",v="pointer"),p=m==null?h:vs(m),g=_==null?h:vs(_),h=new y(M,v+"leave",m,n,d),h.target=p,h.relatedTarget=g,M=null,Mr(d)===c&&(y=new y(u,v+"enter",_,n,d),y.target=g,y.relatedTarget=p,M=y),p=M,m&&_)t:{for(y=m,u=_,v=0,g=y;g;g=Vr(g))v++;for(g=0,M=u;M;M=Vr(M))g++;for(;0<v-g;)y=Vr(y),v--;for(;0<g-v;)u=Vr(u),g--;for(;v--;){if(y===u||u!==null&&y===u.alternate)break t;y=Vr(y),u=Vr(u)}y=null}else y=null;m!==null&&ph(f,h,m,y,!1),_!==null&&p!==null&&ph(f,p,_,y,!0)}}e:{if(h=c?vs(c):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var R=lx;else if(ah(h))if(Pg)R=fx;else{R=ux;var b=cx}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(R=dx);if(R&&(R=R(t,c))){Rg(f,R,n,d);break e}b&&b(t,h,c),t==="focusout"&&(b=h._wrapperState)&&b.controlled&&h.type==="number"&&Du(h,"number",h.value)}switch(b=c?vs(c):window,t){case"focusin":(ah(b)||b.contentEditable==="true")&&(ms=b,ju=c,Ma=null);break;case"focusout":Ma=ju=ms=null;break;case"mousedown":Xu=!0;break;case"contextmenu":case"mouseup":case"dragend":Xu=!1,dh(f,n,d);break;case"selectionchange":if(mx)break;case"keydown":case"keyup":dh(f,n,d)}var w;if($d)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else ps?Ag(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(bg&&n.locale!=="ko"&&(ps||N!=="onCompositionStart"?N==="onCompositionEnd"&&ps&&(w=Tg()):(ki=d,jd="value"in ki?ki.value:ki.textContent,ps=!0)),b=Sl(c,N),0<b.length&&(N=new nh(N,t,null,n,d),f.push({event:N,listeners:b}),w?N.data=w:(w=Cg(n),w!==null&&(N.data=w)))),(w=ix?rx(t,n):sx(t,n))&&(c=Sl(c,"onBeforeInput"),0<c.length&&(d=new nh("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=w))}Bg(f,e)})}function ka(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Sl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=La(t,n),s!=null&&i.unshift(ka(t,s,r)),s=La(t,e),s!=null&&i.push(ka(t,s,r))),t=t.return}return i}function Vr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ph(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=La(n,s),l!=null&&a.unshift(ka(n,l,o))):r||(l=La(n,s),l!=null&&a.push(ka(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var xx=/\r\n?/g,yx=/\u0000|\uFFFD/g;function mh(t){return(typeof t=="string"?t:""+t).replace(xx,`
`).replace(yx,"")}function vo(t,e,n){if(e=mh(e),mh(t)!==e&&n)throw Error(ge(425))}function Ml(){}var qu=null,$u=null;function Yu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ku=typeof setTimeout=="function"?setTimeout:void 0,Sx=typeof clearTimeout=="function"?clearTimeout:void 0,gh=typeof Promise=="function"?Promise:void 0,Mx=typeof queueMicrotask=="function"?queueMicrotask:typeof gh<"u"?function(t){return gh.resolve(null).then(t).catch(Ex)}:Ku;function Ex(t){setTimeout(function(){throw t})}function Dc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ia(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ia(e)}function Wi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function vh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var $s=Math.random().toString(36).slice(2),Qn="__reactFiber$"+$s,za="__reactProps$"+$s,_i="__reactContainer$"+$s,Zu="__reactEvents$"+$s,wx="__reactListeners$"+$s,Tx="__reactHandles$"+$s;function Mr(t){var e=t[Qn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[_i]||n[Qn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=vh(t);t!==null;){if(n=t[Qn])return n;t=vh(t)}return e}t=n,n=t.parentNode}return null}function Ja(t){return t=t[Qn]||t[_i],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function vs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ge(33))}function Kl(t){return t[za]||null}var Qu=[],_s=-1;function ir(t){return{current:t}}function ft(t){0>_s||(t.current=Qu[_s],Qu[_s]=null,_s--)}function lt(t,e){_s++,Qu[_s]=t.current,t.current=e}var Ji={},Yt=ir(Ji),on=ir(!1),Pr=Ji;function Fs(t,e){var n=t.type.contextTypes;if(!n)return Ji;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function ln(t){return t=t.childContextTypes,t!=null}function El(){ft(on),ft(Yt)}function _h(t,e,n){if(Yt.current!==Ji)throw Error(ge(168));lt(Yt,e),lt(on,n)}function Gg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ge(108,c_(t)||"Unknown",r));return xt({},n,i)}function wl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ji,Pr=Yt.current,lt(Yt,t),lt(on,on.current),!0}function xh(t,e,n){var i=t.stateNode;if(!i)throw Error(ge(169));n?(t=Gg(t,e,Pr),i.__reactInternalMemoizedMergedChildContext=t,ft(on),ft(Yt),lt(Yt,t)):ft(on),lt(on,n)}var ui=null,Zl=!1,Ic=!1;function Vg(t){ui===null?ui=[t]:ui.push(t)}function bx(t){Zl=!0,Vg(t)}function rr(){if(!Ic&&ui!==null){Ic=!0;var t=0,e=st;try{var n=ui;for(st=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ui=null,Zl=!1}catch(r){throw ui!==null&&(ui=ui.slice(t+1)),pg(Hd,rr),r}finally{st=e,Ic=!1}}return null}var xs=[],ys=0,Tl=null,bl=0,bn=[],An=0,Lr=null,fi=1,hi="";function gr(t,e){xs[ys++]=bl,xs[ys++]=Tl,Tl=t,bl=e}function Wg(t,e,n){bn[An++]=fi,bn[An++]=hi,bn[An++]=Lr,Lr=t;var i=fi;t=hi;var r=32-Vn(i)-1;i&=~(1<<r),n+=1;var s=32-Vn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,fi=1<<32-Vn(e)+r|n<<r|i,hi=s+t}else fi=1<<s|n<<r|i,hi=t}function Kd(t){t.return!==null&&(gr(t,1),Wg(t,1,0))}function Zd(t){for(;t===Tl;)Tl=xs[--ys],xs[ys]=null,bl=xs[--ys],xs[ys]=null;for(;t===Lr;)Lr=bn[--An],bn[An]=null,hi=bn[--An],bn[An]=null,fi=bn[--An],bn[An]=null}var xn=null,_n=null,pt=!1,kn=null;function jg(t,e){var n=Cn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function yh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,xn=t,_n=Wi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,xn=t,_n=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Lr!==null?{id:fi,overflow:hi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Cn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,xn=t,_n=null,!0):!1;default:return!1}}function Ju(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ed(t){if(pt){var e=_n;if(e){var n=e;if(!yh(t,e)){if(Ju(t))throw Error(ge(418));e=Wi(n.nextSibling);var i=xn;e&&yh(t,e)?jg(i,n):(t.flags=t.flags&-4097|2,pt=!1,xn=t)}}else{if(Ju(t))throw Error(ge(418));t.flags=t.flags&-4097|2,pt=!1,xn=t}}}function Sh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;xn=t}function _o(t){if(t!==xn)return!1;if(!pt)return Sh(t),pt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Yu(t.type,t.memoizedProps)),e&&(e=_n)){if(Ju(t))throw Xg(),Error(ge(418));for(;e;)jg(t,e),e=Wi(e.nextSibling)}if(Sh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ge(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){_n=Wi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}_n=null}}else _n=xn?Wi(t.stateNode.nextSibling):null;return!0}function Xg(){for(var t=_n;t;)t=Wi(t.nextSibling)}function Os(){_n=xn=null,pt=!1}function Qd(t){kn===null?kn=[t]:kn.push(t)}var Ax=Mi.ReactCurrentBatchConfig;function na(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ge(309));var i=n.stateNode}if(!i)throw Error(ge(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ge(284));if(!n._owner)throw Error(ge(290,t))}return t}function xo(t,e){throw t=Object.prototype.toString.call(e),Error(ge(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Mh(t){var e=t._init;return e(t._payload)}function qg(t){function e(u,v){if(t){var g=u.deletions;g===null?(u.deletions=[v],u.flags|=16):g.push(v)}}function n(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function r(u,v){return u=$i(u,v),u.index=0,u.sibling=null,u}function s(u,v,g){return u.index=g,t?(g=u.alternate,g!==null?(g=g.index,g<v?(u.flags|=2,v):g):(u.flags|=2,v)):(u.flags|=1048576,v)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,v,g,M){return v===null||v.tag!==6?(v=Hc(g,u.mode,M),v.return=u,v):(v=r(v,g),v.return=u,v)}function l(u,v,g,M){var R=g.type;return R===hs?d(u,v,g.props.children,M,g.key):v!==null&&(v.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ni&&Mh(R)===v.type)?(M=r(v,g.props),M.ref=na(u,v,g),M.return=u,M):(M=dl(g.type,g.key,g.props,null,u.mode,M),M.ref=na(u,v,g),M.return=u,M)}function c(u,v,g,M){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=Gc(g,u.mode,M),v.return=u,v):(v=r(v,g.children||[]),v.return=u,v)}function d(u,v,g,M,R){return v===null||v.tag!==7?(v=Ar(g,u.mode,M,R),v.return=u,v):(v=r(v,g),v.return=u,v)}function f(u,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Hc(""+v,u.mode,g),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case oo:return g=dl(v.type,v.key,v.props,null,u.mode,g),g.ref=na(u,null,v),g.return=u,g;case fs:return v=Gc(v,u.mode,g),v.return=u,v;case Ni:var M=v._init;return f(u,M(v._payload),g)}if(ma(v)||Zs(v))return v=Ar(v,u.mode,g,null),v.return=u,v;xo(u,v)}return null}function h(u,v,g,M){var R=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return R!==null?null:o(u,v,""+g,M);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case oo:return g.key===R?l(u,v,g,M):null;case fs:return g.key===R?c(u,v,g,M):null;case Ni:return R=g._init,h(u,v,R(g._payload),M)}if(ma(g)||Zs(g))return R!==null?null:d(u,v,g,M,null);xo(u,g)}return null}function m(u,v,g,M,R){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(g)||null,o(v,u,""+M,R);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case oo:return u=u.get(M.key===null?g:M.key)||null,l(v,u,M,R);case fs:return u=u.get(M.key===null?g:M.key)||null,c(v,u,M,R);case Ni:var b=M._init;return m(u,v,g,b(M._payload),R)}if(ma(M)||Zs(M))return u=u.get(g)||null,d(v,u,M,R,null);xo(v,M)}return null}function _(u,v,g,M){for(var R=null,b=null,w=v,N=v=0,ie=null;w!==null&&N<g.length;N++){w.index>N?(ie=w,w=null):ie=w.sibling;var x=h(u,w,g[N],M);if(x===null){w===null&&(w=ie);break}t&&w&&x.alternate===null&&e(u,w),v=s(x,v,N),b===null?R=x:b.sibling=x,b=x,w=ie}if(N===g.length)return n(u,w),pt&&gr(u,N),R;if(w===null){for(;N<g.length;N++)w=f(u,g[N],M),w!==null&&(v=s(w,v,N),b===null?R=w:b.sibling=w,b=w);return pt&&gr(u,N),R}for(w=i(u,w);N<g.length;N++)ie=m(w,u,N,g[N],M),ie!==null&&(t&&ie.alternate!==null&&w.delete(ie.key===null?N:ie.key),v=s(ie,v,N),b===null?R=ie:b.sibling=ie,b=ie);return t&&w.forEach(function(C){return e(u,C)}),pt&&gr(u,N),R}function y(u,v,g,M){var R=Zs(g);if(typeof R!="function")throw Error(ge(150));if(g=R.call(g),g==null)throw Error(ge(151));for(var b=R=null,w=v,N=v=0,ie=null,x=g.next();w!==null&&!x.done;N++,x=g.next()){w.index>N?(ie=w,w=null):ie=w.sibling;var C=h(u,w,x.value,M);if(C===null){w===null&&(w=ie);break}t&&w&&C.alternate===null&&e(u,w),v=s(C,v,N),b===null?R=C:b.sibling=C,b=C,w=ie}if(x.done)return n(u,w),pt&&gr(u,N),R;if(w===null){for(;!x.done;N++,x=g.next())x=f(u,x.value,M),x!==null&&(v=s(x,v,N),b===null?R=x:b.sibling=x,b=x);return pt&&gr(u,N),R}for(w=i(u,w);!x.done;N++,x=g.next())x=m(w,u,N,x.value,M),x!==null&&(t&&x.alternate!==null&&w.delete(x.key===null?N:x.key),v=s(x,v,N),b===null?R=x:b.sibling=x,b=x);return t&&w.forEach(function(K){return e(u,K)}),pt&&gr(u,N),R}function p(u,v,g,M){if(typeof g=="object"&&g!==null&&g.type===hs&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case oo:e:{for(var R=g.key,b=v;b!==null;){if(b.key===R){if(R=g.type,R===hs){if(b.tag===7){n(u,b.sibling),v=r(b,g.props.children),v.return=u,u=v;break e}}else if(b.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ni&&Mh(R)===b.type){n(u,b.sibling),v=r(b,g.props),v.ref=na(u,b,g),v.return=u,u=v;break e}n(u,b);break}else e(u,b);b=b.sibling}g.type===hs?(v=Ar(g.props.children,u.mode,M,g.key),v.return=u,u=v):(M=dl(g.type,g.key,g.props,null,u.mode,M),M.ref=na(u,v,g),M.return=u,u=M)}return a(u);case fs:e:{for(b=g.key;v!==null;){if(v.key===b)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){n(u,v.sibling),v=r(v,g.children||[]),v.return=u,u=v;break e}else{n(u,v);break}else e(u,v);v=v.sibling}v=Gc(g,u.mode,M),v.return=u,u=v}return a(u);case Ni:return b=g._init,p(u,v,b(g._payload),M)}if(ma(g))return _(u,v,g,M);if(Zs(g))return y(u,v,g,M);xo(u,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(n(u,v.sibling),v=r(v,g),v.return=u,u=v):(n(u,v),v=Hc(g,u.mode,M),v.return=u,u=v),a(u)):n(u,v)}return p}var ks=qg(!0),$g=qg(!1),Al=ir(null),Cl=null,Ss=null,Jd=null;function ef(){Jd=Ss=Cl=null}function tf(t){var e=Al.current;ft(Al),t._currentValue=e}function td(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ls(t,e){Cl=t,Jd=Ss=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(an=!0),t.firstContext=null)}function Pn(t){var e=t._currentValue;if(Jd!==t)if(t={context:t,memoizedValue:e,next:null},Ss===null){if(Cl===null)throw Error(ge(308));Ss=t,Cl.dependencies={lanes:0,firstContext:t}}else Ss=Ss.next=t;return e}var Er=null;function nf(t){Er===null?Er=[t]:Er.push(t)}function Yg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,nf(e)):(n.next=r.next,r.next=n),e.interleaved=n,xi(t,i)}function xi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Di=!1;function rf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function mi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ji(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,nt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,xi(t,n)}return r=i.interleaved,r===null?(e.next=e,nf(i)):(e.next=r.next,r.next=e),i.interleaved=e,xi(t,n)}function sl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Gd(t,n)}}function Eh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Rl(t,e,n,i){var r=t.updateQueue;Di=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==a&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;a=0,d=c=l=null,o=s;do{var h=o.lane,m=o.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,y=o;switch(h=e,m=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){f=_.call(m,f,h);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,h=typeof _=="function"?_.call(m,f,h):_,h==null)break e;f=xt({},f,h);break e;case 2:Di=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[o]:h.push(o))}else m={eventTime:m,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=m,l=f):d=d.next=m,a|=h;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;h=o,o=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Dr|=a,t.lanes=a,t.memoizedState=f}}function wh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ge(191,r));r.call(i)}}}var eo={},ti=ir(eo),Ba=ir(eo),Ha=ir(eo);function wr(t){if(t===eo)throw Error(ge(174));return t}function sf(t,e){switch(lt(Ha,e),lt(Ba,t),lt(ti,eo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Uu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Uu(e,t)}ft(ti),lt(ti,e)}function zs(){ft(ti),ft(Ba),ft(Ha)}function Zg(t){wr(Ha.current);var e=wr(ti.current),n=Uu(e,t.type);e!==n&&(lt(Ba,t),lt(ti,n))}function af(t){Ba.current===t&&(ft(ti),ft(Ba))}var vt=ir(0);function Pl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Uc=[];function of(){for(var t=0;t<Uc.length;t++)Uc[t]._workInProgressVersionPrimary=null;Uc.length=0}var al=Mi.ReactCurrentDispatcher,Fc=Mi.ReactCurrentBatchConfig,Nr=0,_t=null,Tt=null,Dt=null,Ll=!1,Ea=!1,Ga=0,Cx=0;function Gt(){throw Error(ge(321))}function lf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!jn(t[n],e[n]))return!1;return!0}function cf(t,e,n,i,r,s){if(Nr=s,_t=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,al.current=t===null||t.memoizedState===null?Nx:Dx,t=n(i,r),Ea){s=0;do{if(Ea=!1,Ga=0,25<=s)throw Error(ge(301));s+=1,Dt=Tt=null,e.updateQueue=null,al.current=Ix,t=n(i,r)}while(Ea)}if(al.current=Nl,e=Tt!==null&&Tt.next!==null,Nr=0,Dt=Tt=_t=null,Ll=!1,e)throw Error(ge(300));return t}function uf(){var t=Ga!==0;return Ga=0,t}function $n(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?_t.memoizedState=Dt=t:Dt=Dt.next=t,Dt}function Ln(){if(Tt===null){var t=_t.alternate;t=t!==null?t.memoizedState:null}else t=Tt.next;var e=Dt===null?_t.memoizedState:Dt.next;if(e!==null)Dt=e,Tt=t;else{if(t===null)throw Error(ge(310));Tt=t,t={memoizedState:Tt.memoizedState,baseState:Tt.baseState,baseQueue:Tt.baseQueue,queue:Tt.queue,next:null},Dt===null?_t.memoizedState=Dt=t:Dt=Dt.next=t}return Dt}function Va(t,e){return typeof e=="function"?e(t):e}function Oc(t){var e=Ln(),n=e.queue;if(n===null)throw Error(ge(311));n.lastRenderedReducer=t;var i=Tt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var d=c.lane;if((Nr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=f,a=i):l=l.next=f,_t.lanes|=d,Dr|=d}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,jn(i,e.memoizedState)||(an=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,_t.lanes|=s,Dr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function kc(t){var e=Ln(),n=e.queue;if(n===null)throw Error(ge(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);jn(s,e.memoizedState)||(an=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Qg(){}function Jg(t,e){var n=_t,i=Ln(),r=e(),s=!jn(i.memoizedState,r);if(s&&(i.memoizedState=r,an=!0),i=i.queue,df(n0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Dt!==null&&Dt.memoizedState.tag&1){if(n.flags|=2048,Wa(9,t0.bind(null,n,i,r,e),void 0,null),It===null)throw Error(ge(349));Nr&30||e0(n,e,r)}return r}function e0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function t0(t,e,n,i){e.value=n,e.getSnapshot=i,i0(e)&&r0(t)}function n0(t,e,n){return n(function(){i0(e)&&r0(t)})}function i0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!jn(t,n)}catch{return!0}}function r0(t){var e=xi(t,1);e!==null&&Wn(e,t,1,-1)}function Th(t){var e=$n();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Va,lastRenderedState:t},e.queue=t,t=t.dispatch=Lx.bind(null,_t,t),[e.memoizedState,t]}function Wa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function s0(){return Ln().memoizedState}function ol(t,e,n,i){var r=$n();_t.flags|=t,r.memoizedState=Wa(1|e,n,void 0,i===void 0?null:i)}function Ql(t,e,n,i){var r=Ln();i=i===void 0?null:i;var s=void 0;if(Tt!==null){var a=Tt.memoizedState;if(s=a.destroy,i!==null&&lf(i,a.deps)){r.memoizedState=Wa(e,n,s,i);return}}_t.flags|=t,r.memoizedState=Wa(1|e,n,s,i)}function bh(t,e){return ol(8390656,8,t,e)}function df(t,e){return Ql(2048,8,t,e)}function a0(t,e){return Ql(4,2,t,e)}function o0(t,e){return Ql(4,4,t,e)}function l0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function c0(t,e,n){return n=n!=null?n.concat([t]):null,Ql(4,4,l0.bind(null,e,t),n)}function ff(){}function u0(t,e){var n=Ln();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&lf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function d0(t,e){var n=Ln();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&lf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function f0(t,e,n){return Nr&21?(jn(n,e)||(n=vg(),_t.lanes|=n,Dr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,an=!0),t.memoizedState=n)}function Rx(t,e){var n=st;st=n!==0&&4>n?n:4,t(!0);var i=Fc.transition;Fc.transition={};try{t(!1),e()}finally{st=n,Fc.transition=i}}function h0(){return Ln().memoizedState}function Px(t,e,n){var i=qi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},p0(t))m0(e,n);else if(n=Yg(t,e,n,i),n!==null){var r=tn();Wn(n,t,i,r),g0(n,e,i)}}function Lx(t,e,n){var i=qi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(p0(t))m0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,jn(o,a)){var l=e.interleaved;l===null?(r.next=r,nf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Yg(t,e,r,i),n!==null&&(r=tn(),Wn(n,t,i,r),g0(n,e,i))}}function p0(t){var e=t.alternate;return t===_t||e!==null&&e===_t}function m0(t,e){Ea=Ll=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function g0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Gd(t,n)}}var Nl={readContext:Pn,useCallback:Gt,useContext:Gt,useEffect:Gt,useImperativeHandle:Gt,useInsertionEffect:Gt,useLayoutEffect:Gt,useMemo:Gt,useReducer:Gt,useRef:Gt,useState:Gt,useDebugValue:Gt,useDeferredValue:Gt,useTransition:Gt,useMutableSource:Gt,useSyncExternalStore:Gt,useId:Gt,unstable_isNewReconciler:!1},Nx={readContext:Pn,useCallback:function(t,e){return $n().memoizedState=[t,e===void 0?null:e],t},useContext:Pn,useEffect:bh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ol(4194308,4,l0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ol(4194308,4,t,e)},useInsertionEffect:function(t,e){return ol(4,2,t,e)},useMemo:function(t,e){var n=$n();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=$n();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Px.bind(null,_t,t),[i.memoizedState,t]},useRef:function(t){var e=$n();return t={current:t},e.memoizedState=t},useState:Th,useDebugValue:ff,useDeferredValue:function(t){return $n().memoizedState=t},useTransition:function(){var t=Th(!1),e=t[0];return t=Rx.bind(null,t[1]),$n().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=_t,r=$n();if(pt){if(n===void 0)throw Error(ge(407));n=n()}else{if(n=e(),It===null)throw Error(ge(349));Nr&30||e0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,bh(n0.bind(null,i,s,t),[t]),i.flags|=2048,Wa(9,t0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=$n(),e=It.identifierPrefix;if(pt){var n=hi,i=fi;n=(i&~(1<<32-Vn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ga++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Cx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Dx={readContext:Pn,useCallback:u0,useContext:Pn,useEffect:df,useImperativeHandle:c0,useInsertionEffect:a0,useLayoutEffect:o0,useMemo:d0,useReducer:Oc,useRef:s0,useState:function(){return Oc(Va)},useDebugValue:ff,useDeferredValue:function(t){var e=Ln();return f0(e,Tt.memoizedState,t)},useTransition:function(){var t=Oc(Va)[0],e=Ln().memoizedState;return[t,e]},useMutableSource:Qg,useSyncExternalStore:Jg,useId:h0,unstable_isNewReconciler:!1},Ix={readContext:Pn,useCallback:u0,useContext:Pn,useEffect:df,useImperativeHandle:c0,useInsertionEffect:a0,useLayoutEffect:o0,useMemo:d0,useReducer:kc,useRef:s0,useState:function(){return kc(Va)},useDebugValue:ff,useDeferredValue:function(t){var e=Ln();return Tt===null?e.memoizedState=t:f0(e,Tt.memoizedState,t)},useTransition:function(){var t=kc(Va)[0],e=Ln().memoizedState;return[t,e]},useMutableSource:Qg,useSyncExternalStore:Jg,useId:h0,unstable_isNewReconciler:!1};function Fn(t,e){if(t&&t.defaultProps){e=xt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function nd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:xt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Jl={isMounted:function(t){return(t=t._reactInternals)?kr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=tn(),r=qi(t),s=mi(i,r);s.payload=e,n!=null&&(s.callback=n),e=ji(t,s,r),e!==null&&(Wn(e,t,r,i),sl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=tn(),r=qi(t),s=mi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ji(t,s,r),e!==null&&(Wn(e,t,r,i),sl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=tn(),i=qi(t),r=mi(n,i);r.tag=2,e!=null&&(r.callback=e),e=ji(t,r,i),e!==null&&(Wn(e,t,i,n),sl(e,t,i))}};function Ah(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Fa(n,i)||!Fa(r,s):!0}function v0(t,e,n){var i=!1,r=Ji,s=e.contextType;return typeof s=="object"&&s!==null?s=Pn(s):(r=ln(e)?Pr:Yt.current,i=e.contextTypes,s=(i=i!=null)?Fs(t,r):Ji),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Jl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ch(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Jl.enqueueReplaceState(e,e.state,null)}function id(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},rf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Pn(s):(s=ln(e)?Pr:Yt.current,r.context=Fs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(nd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Jl.enqueueReplaceState(r,r.state,null),Rl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Bs(t,e){try{var n="",i=e;do n+=l_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function zc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function rd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Ux=typeof WeakMap=="function"?WeakMap:Map;function _0(t,e,n){n=mi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Il||(Il=!0,pd=i),rd(t,e)},n}function x0(t,e,n){n=mi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){rd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){rd(t,e),typeof i!="function"&&(Xi===null?Xi=new Set([this]):Xi.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Rh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Ux;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Yx.bind(null,t,e,n),e.then(t,t))}function Ph(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Lh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=mi(-1,1),e.tag=2,ji(n,e,1))),n.lanes|=1),t)}var Fx=Mi.ReactCurrentOwner,an=!1;function Qt(t,e,n,i){e.child=t===null?$g(e,null,n,i):ks(e,t.child,n,i)}function Nh(t,e,n,i,r){n=n.render;var s=e.ref;return Ls(e,r),i=cf(t,e,n,i,s,r),n=uf(),t!==null&&!an?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,yi(t,e,r)):(pt&&n&&Kd(e),e.flags|=1,Qt(t,e,i,r),e.child)}function Dh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!yf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,y0(t,e,s,i,r)):(t=dl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Fa,n(a,i)&&t.ref===e.ref)return yi(t,e,r)}return e.flags|=1,t=$i(s,i),t.ref=e.ref,t.return=e,e.child=t}function y0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Fa(s,i)&&t.ref===e.ref)if(an=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(an=!0);else return e.lanes=t.lanes,yi(t,e,r)}return sd(t,e,n,i,r)}function S0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},lt(Es,gn),gn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,lt(Es,gn),gn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,lt(Es,gn),gn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,lt(Es,gn),gn|=i;return Qt(t,e,r,n),e.child}function M0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function sd(t,e,n,i,r){var s=ln(n)?Pr:Yt.current;return s=Fs(e,s),Ls(e,r),n=cf(t,e,n,i,s,r),i=uf(),t!==null&&!an?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,yi(t,e,r)):(pt&&i&&Kd(e),e.flags|=1,Qt(t,e,n,r),e.child)}function Ih(t,e,n,i,r){if(ln(n)){var s=!0;wl(e)}else s=!1;if(Ls(e,r),e.stateNode===null)ll(t,e),v0(e,n,i),id(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Pn(c):(c=ln(n)?Pr:Yt.current,c=Fs(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Ch(e,a,i,c),Di=!1;var h=e.memoizedState;a.state=h,Rl(e,i,a,r),l=e.memoizedState,o!==i||h!==l||on.current||Di?(typeof d=="function"&&(nd(e,n,d,i),l=e.memoizedState),(o=Di||Ah(e,n,o,i,h,l,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Kg(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Fn(e.type,o),a.props=c,f=e.pendingProps,h=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Pn(l):(l=ln(n)?Pr:Yt.current,l=Fs(e,l));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||h!==l)&&Ch(e,a,i,l),Di=!1,h=e.memoizedState,a.state=h,Rl(e,i,a,r);var _=e.memoizedState;o!==f||h!==_||on.current||Di?(typeof m=="function"&&(nd(e,n,m,i),_=e.memoizedState),(c=Di||Ah(e,n,c,i,h,_,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return ad(t,e,n,i,s,r)}function ad(t,e,n,i,r,s){M0(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&xh(e,n,!1),yi(t,e,s);i=e.stateNode,Fx.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=ks(e,t.child,null,s),e.child=ks(e,null,o,s)):Qt(t,e,o,s),e.memoizedState=i.state,r&&xh(e,n,!0),e.child}function E0(t){var e=t.stateNode;e.pendingContext?_h(t,e.pendingContext,e.pendingContext!==e.context):e.context&&_h(t,e.context,!1),sf(t,e.containerInfo)}function Uh(t,e,n,i,r){return Os(),Qd(r),e.flags|=256,Qt(t,e,n,i),e.child}var od={dehydrated:null,treeContext:null,retryLane:0};function ld(t){return{baseLanes:t,cachePool:null,transitions:null}}function w0(t,e,n){var i=e.pendingProps,r=vt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),lt(vt,r&1),t===null)return ed(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=nc(a,i,0,null),t=Ar(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ld(n),e.memoizedState=od,t):hf(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return Ox(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=$i(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=$i(o,s):(s=Ar(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?ld(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=od,i}return s=t.child,t=s.sibling,i=$i(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function hf(t,e){return e=nc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function yo(t,e,n,i){return i!==null&&Qd(i),ks(e,t.child,null,n),t=hf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ox(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=zc(Error(ge(422))),yo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=nc({mode:"visible",children:i.children},r,0,null),s=Ar(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ks(e,t.child,null,a),e.child.memoizedState=ld(a),e.memoizedState=od,s);if(!(e.mode&1))return yo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ge(419)),i=zc(s,i,void 0),yo(t,e,a,i)}if(o=(a&t.childLanes)!==0,an||o){if(i=It,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,xi(t,r),Wn(i,t,r,-1))}return xf(),i=zc(Error(ge(421))),yo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Kx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,_n=Wi(r.nextSibling),xn=e,pt=!0,kn=null,t!==null&&(bn[An++]=fi,bn[An++]=hi,bn[An++]=Lr,fi=t.id,hi=t.overflow,Lr=e),e=hf(e,i.children),e.flags|=4096,e)}function Fh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),td(t.return,e,n)}function Bc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function T0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Qt(t,e,i.children,n),i=vt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Fh(t,n,e);else if(t.tag===19)Fh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(lt(vt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Pl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Bc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Pl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Bc(e,!0,n,null,s);break;case"together":Bc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ll(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function yi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Dr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ge(153));if(e.child!==null){for(t=e.child,n=$i(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=$i(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function kx(t,e,n){switch(e.tag){case 3:E0(e),Os();break;case 5:Zg(e);break;case 1:ln(e.type)&&wl(e);break;case 4:sf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;lt(Al,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(lt(vt,vt.current&1),e.flags|=128,null):n&e.child.childLanes?w0(t,e,n):(lt(vt,vt.current&1),t=yi(t,e,n),t!==null?t.sibling:null);lt(vt,vt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return T0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),lt(vt,vt.current),i)break;return null;case 22:case 23:return e.lanes=0,S0(t,e,n)}return yi(t,e,n)}var b0,cd,A0,C0;b0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};cd=function(){};A0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,wr(ti.current);var s=null;switch(n){case"input":r=Lu(t,r),i=Lu(t,i),s=[];break;case"select":r=xt({},r,{value:void 0}),i=xt({},i,{value:void 0}),s=[];break;case"textarea":r=Iu(t,r),i=Iu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ml)}Fu(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ra.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ra.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ut("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};C0=function(t,e,n,i){n!==i&&(e.flags|=4)};function ia(t,e){if(!pt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function zx(t,e,n){var i=e.pendingProps;switch(Zd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(e),null;case 1:return ln(e.type)&&El(),Vt(e),null;case 3:return i=e.stateNode,zs(),ft(on),ft(Yt),of(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(_o(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,kn!==null&&(vd(kn),kn=null))),cd(t,e),Vt(e),null;case 5:af(e);var r=wr(Ha.current);if(n=e.type,t!==null&&e.stateNode!=null)A0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ge(166));return Vt(e),null}if(t=wr(ti.current),_o(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Qn]=e,i[za]=s,t=(e.mode&1)!==0,n){case"dialog":ut("cancel",i),ut("close",i);break;case"iframe":case"object":case"embed":ut("load",i);break;case"video":case"audio":for(r=0;r<va.length;r++)ut(va[r],i);break;case"source":ut("error",i);break;case"img":case"image":case"link":ut("error",i),ut("load",i);break;case"details":ut("toggle",i);break;case"input":jf(i,s),ut("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ut("invalid",i);break;case"textarea":qf(i,s),ut("invalid",i)}Fu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&vo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&vo(i.textContent,o,t),r=["children",""+o]):Ra.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&ut("scroll",i)}switch(n){case"input":lo(i),Xf(i,s,!0);break;case"textarea":lo(i),$f(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ml)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ng(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Qn]=e,t[za]=i,b0(t,e,!1,!1),e.stateNode=t;e:{switch(a=Ou(n,i),n){case"dialog":ut("cancel",t),ut("close",t),r=i;break;case"iframe":case"object":case"embed":ut("load",t),r=i;break;case"video":case"audio":for(r=0;r<va.length;r++)ut(va[r],t);r=i;break;case"source":ut("error",t),r=i;break;case"img":case"image":case"link":ut("error",t),ut("load",t),r=i;break;case"details":ut("toggle",t),r=i;break;case"input":jf(t,i),r=Lu(t,i),ut("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=xt({},i,{value:void 0}),ut("invalid",t);break;case"textarea":qf(t,i),r=Iu(t,i),ut("invalid",t);break;default:r=i}Fu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?sg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ig(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Pa(t,l):typeof l=="number"&&Pa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ra.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ut("scroll",t):l!=null&&Fd(t,s,l,a))}switch(n){case"input":lo(t),Xf(t,i,!1);break;case"textarea":lo(t),$f(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Qi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?As(t,!!i.multiple,s,!1):i.defaultValue!=null&&As(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ml)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Vt(e),null;case 6:if(t&&e.stateNode!=null)C0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ge(166));if(n=wr(Ha.current),wr(ti.current),_o(e)){if(i=e.stateNode,n=e.memoizedProps,i[Qn]=e,(s=i.nodeValue!==n)&&(t=xn,t!==null))switch(t.tag){case 3:vo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&vo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Qn]=e,e.stateNode=i}return Vt(e),null;case 13:if(ft(vt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(pt&&_n!==null&&e.mode&1&&!(e.flags&128))Xg(),Os(),e.flags|=98560,s=!1;else if(s=_o(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ge(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ge(317));s[Qn]=e}else Os(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Vt(e),s=!1}else kn!==null&&(vd(kn),kn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||vt.current&1?bt===0&&(bt=3):xf())),e.updateQueue!==null&&(e.flags|=4),Vt(e),null);case 4:return zs(),cd(t,e),t===null&&Oa(e.stateNode.containerInfo),Vt(e),null;case 10:return tf(e.type._context),Vt(e),null;case 17:return ln(e.type)&&El(),Vt(e),null;case 19:if(ft(vt),s=e.memoizedState,s===null)return Vt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)ia(s,!1);else{if(bt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Pl(t),a!==null){for(e.flags|=128,ia(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return lt(vt,vt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Mt()>Hs&&(e.flags|=128,i=!0,ia(s,!1),e.lanes=4194304)}else{if(!i)if(t=Pl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ia(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!pt)return Vt(e),null}else 2*Mt()-s.renderingStartTime>Hs&&n!==1073741824&&(e.flags|=128,i=!0,ia(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Mt(),e.sibling=null,n=vt.current,lt(vt,i?n&1|2:n&1),e):(Vt(e),null);case 22:case 23:return _f(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?gn&1073741824&&(Vt(e),e.subtreeFlags&6&&(e.flags|=8192)):Vt(e),null;case 24:return null;case 25:return null}throw Error(ge(156,e.tag))}function Bx(t,e){switch(Zd(e),e.tag){case 1:return ln(e.type)&&El(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return zs(),ft(on),ft(Yt),of(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return af(e),null;case 13:if(ft(vt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ge(340));Os()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ft(vt),null;case 4:return zs(),null;case 10:return tf(e.type._context),null;case 22:case 23:return _f(),null;case 24:return null;default:return null}}var So=!1,Xt=!1,Hx=typeof WeakSet=="function"?WeakSet:Set,Ce=null;function Ms(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){yt(t,e,i)}else n.current=null}function ud(t,e,n){try{n()}catch(i){yt(t,e,i)}}var Oh=!1;function Gx(t,e){if(qu=xl,t=Dg(),Yd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,d=0,f=t,h=null;t:for(;;){for(var m;f!==n||r!==0&&f.nodeType!==3||(o=a+r),f!==s||i!==0&&f.nodeType!==3||(l=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(m=f.firstChild)!==null;)h=f,f=m;for(;;){if(f===t)break t;if(h===n&&++c===r&&(o=a),h===s&&++d===i&&(l=a),(m=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for($u={focusedElem:t,selectionRange:n},xl=!1,Ce=e;Ce!==null;)if(e=Ce,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ce=t;else for(;Ce!==null;){e=Ce;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,p=_.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:Fn(e.type,y),p);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ge(163))}}catch(M){yt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,Ce=t;break}Ce=e.return}return _=Oh,Oh=!1,_}function wa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&ud(e,n,s)}r=r.next}while(r!==i)}}function ec(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function dd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function R0(t){var e=t.alternate;e!==null&&(t.alternate=null,R0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Qn],delete e[za],delete e[Zu],delete e[wx],delete e[Tx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function P0(t){return t.tag===5||t.tag===3||t.tag===4}function kh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||P0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function fd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ml));else if(i!==4&&(t=t.child,t!==null))for(fd(t,e,n),t=t.sibling;t!==null;)fd(t,e,n),t=t.sibling}function hd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(hd(t,e,n),t=t.sibling;t!==null;)hd(t,e,n),t=t.sibling}var Ut=null,On=!1;function wi(t,e,n){for(n=n.child;n!==null;)L0(t,e,n),n=n.sibling}function L0(t,e,n){if(ei&&typeof ei.onCommitFiberUnmount=="function")try{ei.onCommitFiberUnmount(Xl,n)}catch{}switch(n.tag){case 5:Xt||Ms(n,e);case 6:var i=Ut,r=On;Ut=null,wi(t,e,n),Ut=i,On=r,Ut!==null&&(On?(t=Ut,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ut.removeChild(n.stateNode));break;case 18:Ut!==null&&(On?(t=Ut,n=n.stateNode,t.nodeType===8?Dc(t.parentNode,n):t.nodeType===1&&Dc(t,n),Ia(t)):Dc(Ut,n.stateNode));break;case 4:i=Ut,r=On,Ut=n.stateNode.containerInfo,On=!0,wi(t,e,n),Ut=i,On=r;break;case 0:case 11:case 14:case 15:if(!Xt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&ud(n,e,a),r=r.next}while(r!==i)}wi(t,e,n);break;case 1:if(!Xt&&(Ms(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){yt(n,e,o)}wi(t,e,n);break;case 21:wi(t,e,n);break;case 22:n.mode&1?(Xt=(i=Xt)||n.memoizedState!==null,wi(t,e,n),Xt=i):wi(t,e,n);break;default:wi(t,e,n)}}function zh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Hx),e.forEach(function(i){var r=Zx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Nn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Ut=o.stateNode,On=!1;break e;case 3:Ut=o.stateNode.containerInfo,On=!0;break e;case 4:Ut=o.stateNode.containerInfo,On=!0;break e}o=o.return}if(Ut===null)throw Error(ge(160));L0(s,a,r),Ut=null,On=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){yt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)N0(e,t),e=e.sibling}function N0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Nn(e,t),qn(t),i&4){try{wa(3,t,t.return),ec(3,t)}catch(y){yt(t,t.return,y)}try{wa(5,t,t.return)}catch(y){yt(t,t.return,y)}}break;case 1:Nn(e,t),qn(t),i&512&&n!==null&&Ms(n,n.return);break;case 5:if(Nn(e,t),qn(t),i&512&&n!==null&&Ms(n,n.return),t.flags&32){var r=t.stateNode;try{Pa(r,"")}catch(y){yt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&eg(r,s),Ou(o,a);var c=Ou(o,s);for(a=0;a<l.length;a+=2){var d=l[a],f=l[a+1];d==="style"?sg(r,f):d==="dangerouslySetInnerHTML"?ig(r,f):d==="children"?Pa(r,f):Fd(r,d,f,c)}switch(o){case"input":Nu(r,s);break;case"textarea":tg(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?As(r,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?As(r,!!s.multiple,s.defaultValue,!0):As(r,!!s.multiple,s.multiple?[]:"",!1))}r[za]=s}catch(y){yt(t,t.return,y)}}break;case 6:if(Nn(e,t),qn(t),i&4){if(t.stateNode===null)throw Error(ge(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){yt(t,t.return,y)}}break;case 3:if(Nn(e,t),qn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ia(e.containerInfo)}catch(y){yt(t,t.return,y)}break;case 4:Nn(e,t),qn(t);break;case 13:Nn(e,t),qn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(gf=Mt())),i&4&&zh(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Xt=(c=Xt)||d,Nn(e,t),Xt=c):Nn(e,t),qn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(Ce=t,d=t.child;d!==null;){for(f=Ce=d;Ce!==null;){switch(h=Ce,m=h.child,h.tag){case 0:case 11:case 14:case 15:wa(4,h,h.return);break;case 1:Ms(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){yt(i,n,y)}}break;case 5:Ms(h,h.return);break;case 22:if(h.memoizedState!==null){Hh(f);continue}}m!==null?(m.return=h,Ce=m):Hh(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=rg("display",a))}catch(y){yt(t,t.return,y)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(y){yt(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Nn(e,t),qn(t),i&4&&zh(t);break;case 21:break;default:Nn(e,t),qn(t)}}function qn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(P0(n)){var i=n;break e}n=n.return}throw Error(ge(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Pa(r,""),i.flags&=-33);var s=kh(t);hd(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=kh(t);fd(t,o,a);break;default:throw Error(ge(161))}}catch(l){yt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Vx(t,e,n){Ce=t,D0(t)}function D0(t,e,n){for(var i=(t.mode&1)!==0;Ce!==null;){var r=Ce,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||So;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Xt;o=So;var c=Xt;if(So=a,(Xt=l)&&!c)for(Ce=r;Ce!==null;)a=Ce,l=a.child,a.tag===22&&a.memoizedState!==null?Gh(r):l!==null?(l.return=a,Ce=l):Gh(r);for(;s!==null;)Ce=s,D0(s),s=s.sibling;Ce=r,So=o,Xt=c}Bh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ce=s):Bh(t)}}function Bh(t){for(;Ce!==null;){var e=Ce;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Xt||ec(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Xt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Fn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&wh(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}wh(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Ia(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ge(163))}Xt||e.flags&512&&dd(e)}catch(h){yt(e,e.return,h)}}if(e===t){Ce=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ce=n;break}Ce=e.return}}function Hh(t){for(;Ce!==null;){var e=Ce;if(e===t){Ce=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ce=n;break}Ce=e.return}}function Gh(t){for(;Ce!==null;){var e=Ce;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ec(4,e)}catch(l){yt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){yt(e,r,l)}}var s=e.return;try{dd(e)}catch(l){yt(e,s,l)}break;case 5:var a=e.return;try{dd(e)}catch(l){yt(e,a,l)}}}catch(l){yt(e,e.return,l)}if(e===t){Ce=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Ce=o;break}Ce=e.return}}var Wx=Math.ceil,Dl=Mi.ReactCurrentDispatcher,pf=Mi.ReactCurrentOwner,Rn=Mi.ReactCurrentBatchConfig,nt=0,It=null,wt=null,kt=0,gn=0,Es=ir(0),bt=0,ja=null,Dr=0,tc=0,mf=0,Ta=null,sn=null,gf=0,Hs=1/0,ci=null,Il=!1,pd=null,Xi=null,Mo=!1,zi=null,Ul=0,ba=0,md=null,cl=-1,ul=0;function tn(){return nt&6?Mt():cl!==-1?cl:cl=Mt()}function qi(t){return t.mode&1?nt&2&&kt!==0?kt&-kt:Ax.transition!==null?(ul===0&&(ul=vg()),ul):(t=st,t!==0||(t=window.event,t=t===void 0?16:wg(t.type)),t):1}function Wn(t,e,n,i){if(50<ba)throw ba=0,md=null,Error(ge(185));Za(t,n,i),(!(nt&2)||t!==It)&&(t===It&&(!(nt&2)&&(tc|=n),bt===4&&Fi(t,kt)),cn(t,i),n===1&&nt===0&&!(e.mode&1)&&(Hs=Mt()+500,Zl&&rr()))}function cn(t,e){var n=t.callbackNode;A_(t,e);var i=_l(t,t===It?kt:0);if(i===0)n!==null&&Zf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Zf(n),e===1)t.tag===0?bx(Vh.bind(null,t)):Vg(Vh.bind(null,t)),Mx(function(){!(nt&6)&&rr()}),n=null;else{switch(_g(i)){case 1:n=Hd;break;case 4:n=mg;break;case 16:n=vl;break;case 536870912:n=gg;break;default:n=vl}n=H0(n,I0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function I0(t,e){if(cl=-1,ul=0,nt&6)throw Error(ge(327));var n=t.callbackNode;if(Ns()&&t.callbackNode!==n)return null;var i=_l(t,t===It?kt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Fl(t,i);else{e=i;var r=nt;nt|=2;var s=F0();(It!==t||kt!==e)&&(ci=null,Hs=Mt()+500,br(t,e));do try{qx();break}catch(o){U0(t,o)}while(!0);ef(),Dl.current=s,nt=r,wt!==null?e=0:(It=null,kt=0,e=bt)}if(e!==0){if(e===2&&(r=Gu(t),r!==0&&(i=r,e=gd(t,r))),e===1)throw n=ja,br(t,0),Fi(t,i),cn(t,Mt()),n;if(e===6)Fi(t,i);else{if(r=t.current.alternate,!(i&30)&&!jx(r)&&(e=Fl(t,i),e===2&&(s=Gu(t),s!==0&&(i=s,e=gd(t,s))),e===1))throw n=ja,br(t,0),Fi(t,i),cn(t,Mt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ge(345));case 2:vr(t,sn,ci);break;case 3:if(Fi(t,i),(i&130023424)===i&&(e=gf+500-Mt(),10<e)){if(_l(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){tn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Ku(vr.bind(null,t,sn,ci),e);break}vr(t,sn,ci);break;case 4:if(Fi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Vn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Mt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Wx(i/1960))-i,10<i){t.timeoutHandle=Ku(vr.bind(null,t,sn,ci),i);break}vr(t,sn,ci);break;case 5:vr(t,sn,ci);break;default:throw Error(ge(329))}}}return cn(t,Mt()),t.callbackNode===n?I0.bind(null,t):null}function gd(t,e){var n=Ta;return t.current.memoizedState.isDehydrated&&(br(t,e).flags|=256),t=Fl(t,e),t!==2&&(e=sn,sn=n,e!==null&&vd(e)),t}function vd(t){sn===null?sn=t:sn.push.apply(sn,t)}function jx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!jn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Fi(t,e){for(e&=~mf,e&=~tc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Vn(e),i=1<<n;t[n]=-1,e&=~i}}function Vh(t){if(nt&6)throw Error(ge(327));Ns();var e=_l(t,0);if(!(e&1))return cn(t,Mt()),null;var n=Fl(t,e);if(t.tag!==0&&n===2){var i=Gu(t);i!==0&&(e=i,n=gd(t,i))}if(n===1)throw n=ja,br(t,0),Fi(t,e),cn(t,Mt()),n;if(n===6)throw Error(ge(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,vr(t,sn,ci),cn(t,Mt()),null}function vf(t,e){var n=nt;nt|=1;try{return t(e)}finally{nt=n,nt===0&&(Hs=Mt()+500,Zl&&rr())}}function Ir(t){zi!==null&&zi.tag===0&&!(nt&6)&&Ns();var e=nt;nt|=1;var n=Rn.transition,i=st;try{if(Rn.transition=null,st=1,t)return t()}finally{st=i,Rn.transition=n,nt=e,!(nt&6)&&rr()}}function _f(){gn=Es.current,ft(Es)}function br(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Sx(n)),wt!==null)for(n=wt.return;n!==null;){var i=n;switch(Zd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&El();break;case 3:zs(),ft(on),ft(Yt),of();break;case 5:af(i);break;case 4:zs();break;case 13:ft(vt);break;case 19:ft(vt);break;case 10:tf(i.type._context);break;case 22:case 23:_f()}n=n.return}if(It=t,wt=t=$i(t.current,null),kt=gn=e,bt=0,ja=null,mf=tc=Dr=0,sn=Ta=null,Er!==null){for(e=0;e<Er.length;e++)if(n=Er[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Er=null}return t}function U0(t,e){do{var n=wt;try{if(ef(),al.current=Nl,Ll){for(var i=_t.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ll=!1}if(Nr=0,Dt=Tt=_t=null,Ea=!1,Ga=0,pf.current=null,n===null||n.return===null){bt=1,ja=e,wt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=kt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=o,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=Ph(a);if(m!==null){m.flags&=-257,Lh(m,a,o,s,e),m.mode&1&&Rh(s,c,e),e=m,l=c;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){Rh(s,c,e),xf();break e}l=Error(ge(426))}}else if(pt&&o.mode&1){var p=Ph(a);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Lh(p,a,o,s,e),Qd(Bs(l,o));break e}}s=l=Bs(l,o),bt!==4&&(bt=2),Ta===null?Ta=[s]:Ta.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=_0(s,l,e);Eh(s,u);break e;case 1:o=l;var v=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Xi===null||!Xi.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=x0(s,o,e);Eh(s,M);break e}}s=s.return}while(s!==null)}k0(n)}catch(R){e=R,wt===n&&n!==null&&(wt=n=n.return);continue}break}while(!0)}function F0(){var t=Dl.current;return Dl.current=Nl,t===null?Nl:t}function xf(){(bt===0||bt===3||bt===2)&&(bt=4),It===null||!(Dr&268435455)&&!(tc&268435455)||Fi(It,kt)}function Fl(t,e){var n=nt;nt|=2;var i=F0();(It!==t||kt!==e)&&(ci=null,br(t,e));do try{Xx();break}catch(r){U0(t,r)}while(!0);if(ef(),nt=n,Dl.current=i,wt!==null)throw Error(ge(261));return It=null,kt=0,bt}function Xx(){for(;wt!==null;)O0(wt)}function qx(){for(;wt!==null&&!__();)O0(wt)}function O0(t){var e=B0(t.alternate,t,gn);t.memoizedProps=t.pendingProps,e===null?k0(t):wt=e,pf.current=null}function k0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Bx(n,e),n!==null){n.flags&=32767,wt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{bt=6,wt=null;return}}else if(n=zx(n,e,gn),n!==null){wt=n;return}if(e=e.sibling,e!==null){wt=e;return}wt=e=t}while(e!==null);bt===0&&(bt=5)}function vr(t,e,n){var i=st,r=Rn.transition;try{Rn.transition=null,st=1,$x(t,e,n,i)}finally{Rn.transition=r,st=i}return null}function $x(t,e,n,i){do Ns();while(zi!==null);if(nt&6)throw Error(ge(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ge(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(C_(t,s),t===It&&(wt=It=null,kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Mo||(Mo=!0,H0(vl,function(){return Ns(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Rn.transition,Rn.transition=null;var a=st;st=1;var o=nt;nt|=4,pf.current=null,Gx(t,n),N0(n,t),px($u),xl=!!qu,$u=qu=null,t.current=n,Vx(n),x_(),nt=o,st=a,Rn.transition=s}else t.current=n;if(Mo&&(Mo=!1,zi=t,Ul=r),s=t.pendingLanes,s===0&&(Xi=null),M_(n.stateNode),cn(t,Mt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Il)throw Il=!1,t=pd,pd=null,t;return Ul&1&&t.tag!==0&&Ns(),s=t.pendingLanes,s&1?t===md?ba++:(ba=0,md=t):ba=0,rr(),null}function Ns(){if(zi!==null){var t=_g(Ul),e=Rn.transition,n=st;try{if(Rn.transition=null,st=16>t?16:t,zi===null)var i=!1;else{if(t=zi,zi=null,Ul=0,nt&6)throw Error(ge(331));var r=nt;for(nt|=4,Ce=t.current;Ce!==null;){var s=Ce,a=s.child;if(Ce.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(Ce=c;Ce!==null;){var d=Ce;switch(d.tag){case 0:case 11:case 15:wa(8,d,s)}var f=d.child;if(f!==null)f.return=d,Ce=f;else for(;Ce!==null;){d=Ce;var h=d.sibling,m=d.return;if(R0(d),d===c){Ce=null;break}if(h!==null){h.return=m,Ce=h;break}Ce=m}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var p=y.sibling;y.sibling=null,y=p}while(y!==null)}}Ce=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Ce=a;else e:for(;Ce!==null;){if(s=Ce,s.flags&2048)switch(s.tag){case 0:case 11:case 15:wa(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Ce=u;break e}Ce=s.return}}var v=t.current;for(Ce=v;Ce!==null;){a=Ce;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,Ce=g;else e:for(a=v;Ce!==null;){if(o=Ce,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:ec(9,o)}}catch(R){yt(o,o.return,R)}if(o===a){Ce=null;break e}var M=o.sibling;if(M!==null){M.return=o.return,Ce=M;break e}Ce=o.return}}if(nt=r,rr(),ei&&typeof ei.onPostCommitFiberRoot=="function")try{ei.onPostCommitFiberRoot(Xl,t)}catch{}i=!0}return i}finally{st=n,Rn.transition=e}}return!1}function Wh(t,e,n){e=Bs(n,e),e=_0(t,e,1),t=ji(t,e,1),e=tn(),t!==null&&(Za(t,1,e),cn(t,e))}function yt(t,e,n){if(t.tag===3)Wh(t,t,n);else for(;e!==null;){if(e.tag===3){Wh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Xi===null||!Xi.has(i))){t=Bs(n,t),t=x0(e,t,1),e=ji(e,t,1),t=tn(),e!==null&&(Za(e,1,t),cn(e,t));break}}e=e.return}}function Yx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=tn(),t.pingedLanes|=t.suspendedLanes&n,It===t&&(kt&n)===n&&(bt===4||bt===3&&(kt&130023424)===kt&&500>Mt()-gf?br(t,0):mf|=n),cn(t,e)}function z0(t,e){e===0&&(t.mode&1?(e=fo,fo<<=1,!(fo&130023424)&&(fo=4194304)):e=1);var n=tn();t=xi(t,e),t!==null&&(Za(t,e,n),cn(t,n))}function Kx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),z0(t,n)}function Zx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ge(314))}i!==null&&i.delete(e),z0(t,n)}var B0;B0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||on.current)an=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return an=!1,kx(t,e,n);an=!!(t.flags&131072)}else an=!1,pt&&e.flags&1048576&&Wg(e,bl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ll(t,e),t=e.pendingProps;var r=Fs(e,Yt.current);Ls(e,n),r=cf(null,e,i,t,r,n);var s=uf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ln(i)?(s=!0,wl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,rf(e),r.updater=Jl,e.stateNode=r,r._reactInternals=e,id(e,i,t,n),e=ad(null,e,i,!0,s,n)):(e.tag=0,pt&&s&&Kd(e),Qt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(ll(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Jx(i),t=Fn(i,t),r){case 0:e=sd(null,e,i,t,n);break e;case 1:e=Ih(null,e,i,t,n);break e;case 11:e=Nh(null,e,i,t,n);break e;case 14:e=Dh(null,e,i,Fn(i.type,t),n);break e}throw Error(ge(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),sd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),Ih(t,e,i,r,n);case 3:e:{if(E0(e),t===null)throw Error(ge(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Kg(t,e),Rl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Bs(Error(ge(423)),e),e=Uh(t,e,i,n,r);break e}else if(i!==r){r=Bs(Error(ge(424)),e),e=Uh(t,e,i,n,r);break e}else for(_n=Wi(e.stateNode.containerInfo.firstChild),xn=e,pt=!0,kn=null,n=$g(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Os(),i===r){e=yi(t,e,n);break e}Qt(t,e,i,n)}e=e.child}return e;case 5:return Zg(e),t===null&&ed(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Yu(i,r)?a=null:s!==null&&Yu(i,s)&&(e.flags|=32),M0(t,e),Qt(t,e,a,n),e.child;case 6:return t===null&&ed(e),null;case 13:return w0(t,e,n);case 4:return sf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ks(e,null,i,n):Qt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),Nh(t,e,i,r,n);case 7:return Qt(t,e,e.pendingProps,n),e.child;case 8:return Qt(t,e,e.pendingProps.children,n),e.child;case 12:return Qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,lt(Al,i._currentValue),i._currentValue=a,s!==null)if(jn(s.value,a)){if(s.children===r.children&&!on.current){e=yi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=mi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),td(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ge(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),td(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Qt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ls(e,n),r=Pn(r),i=i(r),e.flags|=1,Qt(t,e,i,n),e.child;case 14:return i=e.type,r=Fn(i,e.pendingProps),r=Fn(i.type,r),Dh(t,e,i,r,n);case 15:return y0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),ll(t,e),e.tag=1,ln(i)?(t=!0,wl(e)):t=!1,Ls(e,n),v0(e,i,r),id(e,i,r,n),ad(null,e,i,!0,t,n);case 19:return T0(t,e,n);case 22:return S0(t,e,n)}throw Error(ge(156,e.tag))};function H0(t,e){return pg(t,e)}function Qx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Cn(t,e,n,i){return new Qx(t,e,n,i)}function yf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Jx(t){if(typeof t=="function")return yf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===kd)return 11;if(t===zd)return 14}return 2}function $i(t,e){var n=t.alternate;return n===null?(n=Cn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function dl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")yf(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case hs:return Ar(n.children,r,s,e);case Od:a=8,r|=8;break;case Au:return t=Cn(12,n,e,r|2),t.elementType=Au,t.lanes=s,t;case Cu:return t=Cn(13,n,e,r),t.elementType=Cu,t.lanes=s,t;case Ru:return t=Cn(19,n,e,r),t.elementType=Ru,t.lanes=s,t;case Zm:return nc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ym:a=10;break e;case Km:a=9;break e;case kd:a=11;break e;case zd:a=14;break e;case Ni:a=16,i=null;break e}throw Error(ge(130,t==null?t:typeof t,""))}return e=Cn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Ar(t,e,n,i){return t=Cn(7,t,i,e),t.lanes=n,t}function nc(t,e,n,i){return t=Cn(22,t,i,e),t.elementType=Zm,t.lanes=n,t.stateNode={isHidden:!1},t}function Hc(t,e,n){return t=Cn(6,t,null,e),t.lanes=n,t}function Gc(t,e,n){return e=Cn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ey(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mc(0),this.expirationTimes=Mc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Sf(t,e,n,i,r,s,a,o,l){return t=new ey(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Cn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},rf(s),t}function ty(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function G0(t){if(!t)return Ji;t=t._reactInternals;e:{if(kr(t)!==t||t.tag!==1)throw Error(ge(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ln(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ge(171))}if(t.tag===1){var n=t.type;if(ln(n))return Gg(t,n,e)}return e}function V0(t,e,n,i,r,s,a,o,l){return t=Sf(n,i,!0,t,r,s,a,o,l),t.context=G0(null),n=t.current,i=tn(),r=qi(n),s=mi(i,r),s.callback=e??null,ji(n,s,r),t.current.lanes=r,Za(t,r,i),cn(t,i),t}function ic(t,e,n,i){var r=e.current,s=tn(),a=qi(r);return n=G0(n),e.context===null?e.context=n:e.pendingContext=n,e=mi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ji(r,e,a),t!==null&&(Wn(t,r,a,s),sl(t,r,a)),a}function Ol(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function jh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Mf(t,e){jh(t,e),(t=t.alternate)&&jh(t,e)}function ny(){return null}var W0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ef(t){this._internalRoot=t}rc.prototype.render=Ef.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ge(409));ic(t,e,null,null)};rc.prototype.unmount=Ef.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ir(function(){ic(null,t,null,null)}),e[_i]=null}};function rc(t){this._internalRoot=t}rc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Sg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ui.length&&e!==0&&e<Ui[n].priority;n++);Ui.splice(n,0,t),n===0&&Eg(t)}};function wf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function sc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Xh(){}function iy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Ol(a);s.call(c)}}var a=V0(e,i,t,0,null,!1,!1,"",Xh);return t._reactRootContainer=a,t[_i]=a.current,Oa(t.nodeType===8?t.parentNode:t),Ir(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Ol(l);o.call(c)}}var l=Sf(t,0,!1,null,null,!1,!1,"",Xh);return t._reactRootContainer=l,t[_i]=l.current,Oa(t.nodeType===8?t.parentNode:t),Ir(function(){ic(e,l,n,i)}),l}function ac(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Ol(a);o.call(l)}}ic(e,a,t,r)}else a=iy(n,e,t,r,i);return Ol(a)}xg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ga(e.pendingLanes);n!==0&&(Gd(e,n|1),cn(e,Mt()),!(nt&6)&&(Hs=Mt()+500,rr()))}break;case 13:Ir(function(){var i=xi(t,1);if(i!==null){var r=tn();Wn(i,t,1,r)}}),Mf(t,1)}};Vd=function(t){if(t.tag===13){var e=xi(t,134217728);if(e!==null){var n=tn();Wn(e,t,134217728,n)}Mf(t,134217728)}};yg=function(t){if(t.tag===13){var e=qi(t),n=xi(t,e);if(n!==null){var i=tn();Wn(n,t,e,i)}Mf(t,e)}};Sg=function(){return st};Mg=function(t,e){var n=st;try{return st=t,e()}finally{st=n}};zu=function(t,e,n){switch(e){case"input":if(Nu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Kl(i);if(!r)throw Error(ge(90));Jm(i),Nu(i,r)}}}break;case"textarea":tg(t,n);break;case"select":e=n.value,e!=null&&As(t,!!n.multiple,e,!1)}};lg=vf;cg=Ir;var ry={usingClientEntryPoint:!1,Events:[Ja,vs,Kl,ag,og,vf]},ra={findFiberByHostInstance:Mr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},sy={bundleType:ra.bundleType,version:ra.version,rendererPackageName:ra.rendererPackageName,rendererConfig:ra.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=fg(t),t===null?null:t.stateNode},findFiberByHostInstance:ra.findFiberByHostInstance||ny,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Eo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Eo.isDisabled&&Eo.supportsFiber)try{Xl=Eo.inject(sy),ei=Eo}catch{}}Mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ry;Mn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wf(e))throw Error(ge(200));return ty(t,e,null,n)};Mn.createRoot=function(t,e){if(!wf(t))throw Error(ge(299));var n=!1,i="",r=W0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Sf(t,1,!1,null,null,n,!1,i,r),t[_i]=e.current,Oa(t.nodeType===8?t.parentNode:t),new Ef(e)};Mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ge(188)):(t=Object.keys(t).join(","),Error(ge(268,t)));return t=fg(e),t=t===null?null:t.stateNode,t};Mn.flushSync=function(t){return Ir(t)};Mn.hydrate=function(t,e,n){if(!sc(e))throw Error(ge(200));return ac(null,t,e,!0,n)};Mn.hydrateRoot=function(t,e,n){if(!wf(t))throw Error(ge(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=W0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=V0(e,null,t,1,n??null,r,!1,s,a),t[_i]=e.current,Oa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new rc(e)};Mn.render=function(t,e,n){if(!sc(e))throw Error(ge(200));return ac(null,t,e,!1,n)};Mn.unmountComponentAtNode=function(t){if(!sc(t))throw Error(ge(40));return t._reactRootContainer?(Ir(function(){ac(null,null,t,!1,function(){t._reactRootContainer=null,t[_i]=null})}),!0):!1};Mn.unstable_batchedUpdates=vf;Mn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!sc(n))throw Error(ge(200));if(t==null||t._reactInternals===void 0)throw Error(ge(38));return ac(t,e,n,!1,i)};Mn.version="18.3.1-next-f1338f8080-20240426";function j0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(j0)}catch(t){console.error(t)}}j0(),jm.exports=Mn;var ay=jm.exports,X0,qh=ay;X0=qh.createRoot,qh.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Tf="162",Wr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},jr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},oy=0,$h=1,ly=2,bf=1,cy=2,li=3,er=0,qt=1,Jn=2,Yi=0,Ds=1,_d=2,Yh=3,Kh=4,uy=5,xr=100,dy=101,fy=102,Zh=103,Qh=104,hy=200,py=201,my=202,gy=203,xd=204,yd=205,vy=206,_y=207,xy=208,yy=209,Sy=210,My=211,Ey=212,wy=213,Ty=214,by=0,Ay=1,Cy=2,kl=3,Ry=4,Py=5,Ly=6,Ny=7,q0=0,Dy=1,Iy=2,Ki=0,Uy=1,Fy=2,Oy=3,ky=4,zy=5,By=6,Hy=7,$0=300,Gs=301,Vs=302,Sd=303,Md=304,oc=306,Xa=1e3,zn=1001,Ed=1002,Jt=1003,Jh=1004,sa=1005,Ft=1006,Vc=1007,Tr=1008,Gy=1008,Zi=1009,Vy=1010,Wy=1011,Af=1012,Y0=1013,Bi=1014,di=1015,qa=1016,K0=1017,Z0=1018,Cr=1020,jy=1021,Bn=1023,Xy=1024,qy=1025,Rr=1026,Ws=1027,$y=1028,Q0=1029,Yy=1030,J0=1031,ev=1033,Wc=33776,jc=33777,Xc=33778,qc=33779,ep=35840,tp=35841,np=35842,ip=35843,tv=36196,rp=37492,sp=37496,ap=37808,op=37809,lp=37810,cp=37811,up=37812,dp=37813,fp=37814,hp=37815,pp=37816,mp=37817,gp=37818,vp=37819,_p=37820,xp=37821,$c=36492,yp=36494,Sp=36495,Ky=36283,Mp=36284,Ep=36285,wp=36286,Zy=3200,Qy=3201,Jy=0,eS=1,Oi="",Yn="srgb",sr="srgb-linear",Cf="display-p3",lc="display-p3-linear",zl="linear",dt="srgb",Bl="rec709",Hl="p3",Xr=7680,Tp=519,tS=512,nS=513,iS=514,nv=515,rS=516,sS=517,aS=518,oS=519,wd=35044,bp="300 es",Td=1035,pi=2e3,Gl=2001;class zr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ap=1234567;const Aa=Math.PI/180,$a=180/Math.PI;function gi(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[t&255]+Wt[t>>8&255]+Wt[t>>16&255]+Wt[t>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[n&63|128]+Wt[n>>8&255]+"-"+Wt[n>>16&255]+Wt[n>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function Ot(t,e,n){return Math.max(e,Math.min(n,t))}function Rf(t,e){return(t%e+e)%e}function lS(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function cS(t,e,n){return t!==e?(n-t)/(e-t):0}function Ca(t,e,n){return(1-n)*t+n*e}function uS(t,e,n,i){return Ca(t,e,1-Math.exp(-n*i))}function dS(t,e=1){return e-Math.abs(Rf(t,e*2)-e)}function fS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function hS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function pS(t,e){return t+Math.floor(Math.random()*(e-t+1))}function mS(t,e){return t+Math.random()*(e-t)}function gS(t){return t*(.5-Math.random())}function vS(t){t!==void 0&&(Ap=t);let e=Ap+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _S(t){return t*Aa}function xS(t){return t*$a}function bd(t){return(t&t-1)===0&&t!==0}function yS(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Vl(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function SS(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),c=s((e+i)/2),d=a((e+i)/2),f=s((e-i)/2),h=a((e-i)/2),m=s((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":t.set(o*d,l*f,l*h,o*c);break;case"YZY":t.set(l*h,o*d,l*f,o*c);break;case"ZXZ":t.set(l*f,l*h,o*d,o*c);break;case"XZX":t.set(o*d,l*_,l*m,o*c);break;case"YXY":t.set(l*m,o*d,l*_,o*c);break;case"ZYZ":t.set(l*_,l*m,o*d,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Hn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function rt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const iv={DEG2RAD:Aa,RAD2DEG:$a,generateUUID:gi,clamp:Ot,euclideanModulo:Rf,mapLinear:lS,inverseLerp:cS,lerp:Ca,damp:uS,pingpong:dS,smoothstep:fS,smootherstep:hS,randInt:pS,randFloat:mS,randFloatSpread:gS,seededRandom:vS,degToRad:_S,radToDeg:xS,isPowerOfTwo:bd,ceilPowerOfTwo:yS,floorPowerOfTwo:Vl,setQuaternionFromProperEuler:SS,normalize:rt,denormalize:Hn};class Ne{constructor(e=0,n=0){Ne.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(e,n,i,r,s,a,o,l,c){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],f=i[7],h=i[2],m=i[5],_=i[8],y=r[0],p=r[3],u=r[6],v=r[1],g=r[4],M=r[7],R=r[2],b=r[5],w=r[8];return s[0]=a*y+o*v+l*R,s[3]=a*p+o*g+l*b,s[6]=a*u+o*M+l*w,s[1]=c*y+d*v+f*R,s[4]=c*p+d*g+f*b,s[7]=c*u+d*M+f*w,s[2]=h*y+m*v+_*R,s[5]=h*p+m*g+_*b,s[8]=h*u+m*M+_*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return n*a*d-n*o*c-i*s*d+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=d*a-o*c,h=o*l-d*s,m=c*s-a*l,_=n*f+i*h+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=f*y,e[1]=(r*c-d*i)*y,e[2]=(o*i-r*a)*y,e[3]=h*y,e[4]=(d*n-r*l)*y,e[5]=(r*s-o*n)*y,e[6]=m*y,e[7]=(i*l-c*n)*y,e[8]=(a*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Yc.makeScale(e,n)),this}rotate(e){return this.premultiply(Yc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Yc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Yc=new Qe;function rv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ya(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function MS(){const t=Ya("canvas");return t.style.display="block",t}const Cp={};function sv(t){t in Cp||(Cp[t]=!0,console.warn(t))}const Rp=new Qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Pp=new Qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),wo={[sr]:{transfer:zl,primaries:Bl,toReference:t=>t,fromReference:t=>t},[Yn]:{transfer:dt,primaries:Bl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[lc]:{transfer:zl,primaries:Hl,toReference:t=>t.applyMatrix3(Pp),fromReference:t=>t.applyMatrix3(Rp)},[Cf]:{transfer:dt,primaries:Hl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Pp),fromReference:t=>t.applyMatrix3(Rp).convertLinearToSRGB()}},ES=new Set([sr,lc]),at={enabled:!0,_workingColorSpace:sr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!ES.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=wo[e].toReference,r=wo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return wo[t].primaries},getTransfer:function(t){return t===Oi?zl:wo[t].transfer}};function Is(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Kc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let qr;class av{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{qr===void 0&&(qr=Ya("canvas")),qr.width=e.width,qr.height=e.height;const i=qr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=qr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ya("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Is(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Is(n[i]/255)*255):n[i]=Is(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wS=0;class ov{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wS++}),this.uuid=gi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Zc(r[a].image)):s.push(Zc(r[a]))}else s=Zc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Zc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?av.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let TS=0;class $t extends zr{constructor(e=$t.DEFAULT_IMAGE,n=$t.DEFAULT_MAPPING,i=zn,r=zn,s=Ft,a=Tr,o=Bn,l=Zi,c=$t.DEFAULT_ANISOTROPY,d=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:TS++}),this.uuid=gi(),this.name="",this.source=new ov(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xa:e.x=e.x-Math.floor(e.x);break;case zn:e.x=e.x<0?0:1;break;case Ed:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xa:e.y=e.y-Math.floor(e.y);break;case zn:e.y=e.y<0?0:1;break;case Ed:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=$0;$t.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,n=0,i=0,r=1){mt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],f=l[8],h=l[1],m=l[5],_=l[9],y=l[2],p=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-y)<.01&&Math.abs(_-p)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+y)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,M=(m+1)/2,R=(u+1)/2,b=(d+h)/4,w=(f+y)/4,N=(_+p)/4;return g>M&&g>R?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=b/i,s=w/i):M>R?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=b/r,s=N/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=w/s,r=N/s),this.set(i,r,s,n),this}let v=Math.sqrt((p-_)*(p-_)+(f-y)*(f-y)+(h-d)*(h-d));return Math.abs(v)<.001&&(v=1),this.x=(p-_)/v,this.y=(f-y)/v,this.z=(h-d)/v,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bS extends zr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new mt(0,0,e,n),this.scissorTest=!1,this.viewport=new mt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ft,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const s=new $t(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new ov(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ur extends bS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class lv extends $t{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class AS extends $t{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3];const h=s[a+0],m=s[a+1],_=s[a+2],y=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f;return}if(o===1){e[n+0]=h,e[n+1]=m,e[n+2]=_,e[n+3]=y;return}if(f!==y||l!==h||c!==m||d!==_){let p=1-o;const u=l*h+c*m+d*_+f*y,v=u>=0?1:-1,g=1-u*u;if(g>Number.EPSILON){const R=Math.sqrt(g),b=Math.atan2(R,u*v);p=Math.sin(p*b)/R,o=Math.sin(o*b)/R}const M=o*v;if(l=l*p+h*M,c=c*p+m*M,d=d*p+_*M,f=f*p+y*M,p===1-o){const R=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=R,c*=R,d*=R,f*=R}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=s[a],h=s[a+1],m=s[a+2],_=s[a+3];return e[n]=o*_+d*f+l*m-c*h,e[n+1]=l*_+d*h+c*f-o*m,e[n+2]=c*_+d*m+o*h-l*f,e[n+3]=d*_-o*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(r/2),f=o(s/2),h=l(i/2),m=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=h*d*f+c*m*_,this._y=c*m*f-h*d*_,this._z=c*d*_+h*m*f,this._w=c*d*f-h*m*_;break;case"YXZ":this._x=h*d*f+c*m*_,this._y=c*m*f-h*d*_,this._z=c*d*_-h*m*f,this._w=c*d*f+h*m*_;break;case"ZXY":this._x=h*d*f-c*m*_,this._y=c*m*f+h*d*_,this._z=c*d*_+h*m*f,this._w=c*d*f-h*m*_;break;case"ZYX":this._x=h*d*f-c*m*_,this._y=c*m*f+h*d*_,this._z=c*d*_-h*m*f,this._w=c*d*f+h*m*_;break;case"YZX":this._x=h*d*f+c*m*_,this._y=c*m*f+h*d*_,this._z=c*d*_-h*m*f,this._w=c*d*f-h*m*_;break;case"XZY":this._x=h*d*f-c*m*_,this._y=c*m*f-h*d*_,this._z=c*d*_+h*m*f,this._w=c*d*f+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],d=n[6],f=n[10],h=i+o+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(d-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(d-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ot(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-i*c,this._z=s*d+a*c+i*l-r*o,this._w=a*d-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),f=Math.sin((1-n)*d)/c,h=Math.sin(n*d)/c;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,n=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Lp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Lp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),d=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+l*c+a*f-o*d,this.y=i+l*d+o*c-s*f,this.z=r+l*f+s*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Qc.copy(this).projectOnVector(e),this.sub(Qc)}reflect(e){return this.sub(Qc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qc=new U,Lp=new Fr;class to{constructor(e=new U(1/0,1/0,1/0),n=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Dn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Dn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Dn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Dn):Dn.fromBufferAttribute(s,a),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),To.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),To.copy(i.boundingBox)),To.applyMatrix4(e.matrixWorld),this.union(To)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(aa),bo.subVectors(this.max,aa),$r.subVectors(e.a,aa),Yr.subVectors(e.b,aa),Kr.subVectors(e.c,aa),Ti.subVectors(Yr,$r),bi.subVectors(Kr,Yr),ur.subVectors($r,Kr);let n=[0,-Ti.z,Ti.y,0,-bi.z,bi.y,0,-ur.z,ur.y,Ti.z,0,-Ti.x,bi.z,0,-bi.x,ur.z,0,-ur.x,-Ti.y,Ti.x,0,-bi.y,bi.x,0,-ur.y,ur.x,0];return!Jc(n,$r,Yr,Kr,bo)||(n=[1,0,0,0,1,0,0,0,1],!Jc(n,$r,Yr,Kr,bo))?!1:(Ao.crossVectors(Ti,bi),n=[Ao.x,Ao.y,Ao.z],Jc(n,$r,Yr,Kr,bo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ii=[new U,new U,new U,new U,new U,new U,new U,new U],Dn=new U,To=new to,$r=new U,Yr=new U,Kr=new U,Ti=new U,bi=new U,ur=new U,aa=new U,bo=new U,Ao=new U,dr=new U;function Jc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){dr.fromArray(t,s);const o=r.x*Math.abs(dr.x)+r.y*Math.abs(dr.y)+r.z*Math.abs(dr.z),l=e.dot(dr),c=n.dot(dr),d=i.dot(dr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const CS=new to,oa=new U,eu=new U;class no{constructor(e=new U,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):CS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oa.subVectors(e,this.center);const n=oa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(oa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(eu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oa.copy(e.center).add(eu)),this.expandByPoint(oa.copy(e.center).sub(eu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ri=new U,tu=new U,Co=new U,Ai=new U,nu=new U,Ro=new U,iu=new U;class io{constructor(e=new U,n=new U(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ri)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ri.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ri.copy(this.origin).addScaledVector(this.direction,n),ri.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){tu.copy(e).add(n).multiplyScalar(.5),Co.copy(n).sub(e).normalize(),Ai.copy(this.origin).sub(tu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Co),o=Ai.dot(this.direction),l=-Ai.dot(Co),c=Ai.lengthSq(),d=Math.abs(1-a*a);let f,h,m,_;if(d>0)if(f=a*l-o,h=a*o-l,_=s*d,f>=0)if(h>=-_)if(h<=_){const y=1/d;f*=y,h*=y,m=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(tu).addScaledVector(Co,h),m}intersectSphere(e,n){ri.subVectors(e.center,this.origin);const i=ri.dot(this.direction),r=ri.dot(ri)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,a=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,a=(e.min.y-h.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ri)!==null}intersectTriangle(e,n,i,r,s){nu.subVectors(n,e),Ro.subVectors(i,e),iu.crossVectors(nu,Ro);let a=this.direction.dot(iu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ai.subVectors(this.origin,e);const l=o*this.direction.dot(Ro.crossVectors(Ai,Ro));if(l<0)return null;const c=o*this.direction.dot(nu.cross(Ai));if(c<0||l+c>a)return null;const d=-o*Ai.dot(iu);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,n,i,r,s,a,o,l,c,d,f,h,m,_,y,p){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,d,f,h,m,_,y,p)}set(e,n,i,r,s,a,o,l,c,d,f,h,m,_,y,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=h,u[3]=m,u[7]=_,u[11]=y,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Zr.setFromMatrixColumn(e,0).length(),s=1/Zr.setFromMatrixColumn(e,1).length(),a=1/Zr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*d,m=a*f,_=o*d,y=o*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=m+_*c,n[5]=h-y*c,n[9]=-o*l,n[2]=y-h*c,n[6]=_+m*c,n[10]=a*l}else if(e.order==="YXZ"){const h=l*d,m=l*f,_=c*d,y=c*f;n[0]=h+y*o,n[4]=_*o-m,n[8]=a*c,n[1]=a*f,n[5]=a*d,n[9]=-o,n[2]=m*o-_,n[6]=y+h*o,n[10]=a*l}else if(e.order==="ZXY"){const h=l*d,m=l*f,_=c*d,y=c*f;n[0]=h-y*o,n[4]=-a*f,n[8]=_+m*o,n[1]=m+_*o,n[5]=a*d,n[9]=y-h*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const h=a*d,m=a*f,_=o*d,y=o*f;n[0]=l*d,n[4]=_*c-m,n[8]=h*c+y,n[1]=l*f,n[5]=y*c+h,n[9]=m*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,_=o*l,y=o*c;n[0]=l*d,n[4]=y-h*f,n[8]=_*f+m,n[1]=f,n[5]=a*d,n[9]=-o*d,n[2]=-c*d,n[6]=m*f+_,n[10]=h-y*f}else if(e.order==="XZY"){const h=a*l,m=a*c,_=o*l,y=o*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=h*f+y,n[5]=a*d,n[9]=m*f-_,n[2]=_*f-m,n[6]=o*d,n[10]=y*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(RS,e,PS)}lookAt(e,n,i){const r=this.elements;return pn.subVectors(e,n),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),Ci.crossVectors(i,pn),Ci.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),Ci.crossVectors(i,pn)),Ci.normalize(),Po.crossVectors(pn,Ci),r[0]=Ci.x,r[4]=Po.x,r[8]=pn.x,r[1]=Ci.y,r[5]=Po.y,r[9]=pn.y,r[2]=Ci.z,r[6]=Po.z,r[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],f=i[5],h=i[9],m=i[13],_=i[2],y=i[6],p=i[10],u=i[14],v=i[3],g=i[7],M=i[11],R=i[15],b=r[0],w=r[4],N=r[8],ie=r[12],x=r[1],C=r[5],K=r[9],ee=r[13],I=r[2],Z=r[6],k=r[10],V=r[14],D=r[3],F=r[7],O=r[11],Y=r[15];return s[0]=a*b+o*x+l*I+c*D,s[4]=a*w+o*C+l*Z+c*F,s[8]=a*N+o*K+l*k+c*O,s[12]=a*ie+o*ee+l*V+c*Y,s[1]=d*b+f*x+h*I+m*D,s[5]=d*w+f*C+h*Z+m*F,s[9]=d*N+f*K+h*k+m*O,s[13]=d*ie+f*ee+h*V+m*Y,s[2]=_*b+y*x+p*I+u*D,s[6]=_*w+y*C+p*Z+u*F,s[10]=_*N+y*K+p*k+u*O,s[14]=_*ie+y*ee+p*V+u*Y,s[3]=v*b+g*x+M*I+R*D,s[7]=v*w+g*C+M*Z+R*F,s[11]=v*N+g*K+M*k+R*O,s[15]=v*ie+g*ee+M*V+R*Y,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],f=e[6],h=e[10],m=e[14],_=e[3],y=e[7],p=e[11],u=e[15];return _*(+s*l*f-r*c*f-s*o*h+i*c*h+r*o*m-i*l*m)+y*(+n*l*m-n*c*h+s*a*h-r*a*m+r*c*d-s*l*d)+p*(+n*c*f-n*o*m-s*a*f+i*a*m+s*o*d-i*c*d)+u*(-r*o*d-n*l*f+n*o*h+r*a*f-i*a*h+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=e[9],h=e[10],m=e[11],_=e[12],y=e[13],p=e[14],u=e[15],v=f*p*c-y*h*c+y*l*m-o*p*m-f*l*u+o*h*u,g=_*h*c-d*p*c-_*l*m+a*p*m+d*l*u-a*h*u,M=d*y*c-_*f*c+_*o*m-a*y*m-d*o*u+a*f*u,R=_*f*l-d*y*l-_*o*h+a*y*h+d*o*p-a*f*p,b=n*v+i*g+r*M+s*R;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=v*w,e[1]=(y*h*s-f*p*s-y*r*m+i*p*m+f*r*u-i*h*u)*w,e[2]=(o*p*s-y*l*s+y*r*c-i*p*c-o*r*u+i*l*u)*w,e[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*m-i*l*m)*w,e[4]=g*w,e[5]=(d*p*s-_*h*s+_*r*m-n*p*m-d*r*u+n*h*u)*w,e[6]=(_*l*s-a*p*s-_*r*c+n*p*c+a*r*u-n*l*u)*w,e[7]=(a*h*s-d*l*s+d*r*c-n*h*c-a*r*m+n*l*m)*w,e[8]=M*w,e[9]=(_*f*s-d*y*s-_*i*m+n*y*m+d*i*u-n*f*u)*w,e[10]=(a*y*s-_*o*s+_*i*c-n*y*c-a*i*u+n*o*u)*w,e[11]=(d*o*s-a*f*s-d*i*c+n*f*c+a*i*m-n*o*m)*w,e[12]=R*w,e[13]=(d*y*r-_*f*r+_*i*h-n*y*h-d*i*p+n*f*p)*w,e[14]=(_*o*r-a*y*r-_*i*l+n*y*l+a*i*p-n*o*p)*w,e[15]=(a*f*r-d*o*r+d*i*l-n*f*l-a*i*h+n*o*h)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,d=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+i,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,d=a+a,f=o+o,h=s*c,m=s*d,_=s*f,y=a*d,p=a*f,u=o*f,v=l*c,g=l*d,M=l*f,R=i.x,b=i.y,w=i.z;return r[0]=(1-(y+u))*R,r[1]=(m+M)*R,r[2]=(_-g)*R,r[3]=0,r[4]=(m-M)*b,r[5]=(1-(h+u))*b,r[6]=(p+v)*b,r[7]=0,r[8]=(_+g)*w,r[9]=(p-v)*w,r[10]=(1-(h+y))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Zr.set(r[0],r[1],r[2]).length();const a=Zr.set(r[4],r[5],r[6]).length(),o=Zr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],In.copy(this);const c=1/s,d=1/a,f=1/o;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=d,In.elements[5]*=d,In.elements[6]*=d,In.elements[8]*=f,In.elements[9]*=f,In.elements[10]*=f,n.setFromRotationMatrix(In),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=pi){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let m,_;if(o===pi)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Gl)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=pi){const l=this.elements,c=1/(n-e),d=1/(i-r),f=1/(a-s),h=(n+e)*c,m=(i+r)*d;let _,y;if(o===pi)_=(a+s)*f,y=-2*f;else if(o===Gl)_=s*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Zr=new U,In=new ct,RS=new U(0,0,0),PS=new U(1,1,1),Ci=new U,Po=new U,pn=new U,Np=new ct,Dp=new Fr;class Si{constructor(e=0,n=0,i=0,r=Si.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],f=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ot(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ot(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Np.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Np,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Dp.setFromEuler(this),this.setFromQuaternion(Dp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Si.DEFAULT_ORDER="XYZ";class Pf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let LS=0;const Ip=new U,Qr=new Fr,si=new ct,Lo=new U,la=new U,NS=new U,DS=new Fr,Up=new U(1,0,0),Fp=new U(0,1,0),Op=new U(0,0,1),IS={type:"added"},US={type:"removed"},ru={type:"childadded",child:null},su={type:"childremoved",child:null};class zt extends zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:LS++}),this.uuid=gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new U,n=new Si,i=new Fr,r=new U(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ct},normalMatrix:{value:new Qe}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Qr.setFromAxisAngle(e,n),this.quaternion.multiply(Qr),this}rotateOnWorldAxis(e,n){return Qr.setFromAxisAngle(e,n),this.quaternion.premultiply(Qr),this}rotateX(e){return this.rotateOnAxis(Up,e)}rotateY(e){return this.rotateOnAxis(Fp,e)}rotateZ(e){return this.rotateOnAxis(Op,e)}translateOnAxis(e,n){return Ip.copy(e).applyQuaternion(this.quaternion),this.position.add(Ip.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Up,e)}translateY(e){return this.translateOnAxis(Fp,e)}translateZ(e){return this.translateOnAxis(Op,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Lo.copy(e):Lo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),la.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(la,Lo,this.up):si.lookAt(Lo,la,this.up),this.quaternion.setFromRotationMatrix(si),r&&(si.extractRotation(r.matrixWorld),Qr.setFromRotationMatrix(si),this.quaternion.premultiply(Qr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(IS),ru.child=e,this.dispatchEvent(ru),ru.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(US),su.child=e,this.dispatchEvent(su),su.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),si.multiply(e.parent.matrixWorld)),e.applyMatrix4(si),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,e,NS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,DS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),f=a(e.shapes),h=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}zt.DEFAULT_UP=new U(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Un=new U,ai=new U,au=new U,oi=new U,Jr=new U,es=new U,kp=new U,ou=new U,lu=new U,cu=new U;class Gn{constructor(e=new U,n=new U,i=new U){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Un.subVectors(e,n),r.cross(Un);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Un.subVectors(r,n),ai.subVectors(i,n),au.subVectors(e,n);const a=Un.dot(Un),o=Un.dot(ai),l=Un.dot(au),c=ai.dot(ai),d=ai.dot(au),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,m=(c*l-o*d)*h,_=(a*d-o*l)*h;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,oi.x),l.addScaledVector(a,oi.y),l.addScaledVector(o,oi.z),l)}static isFrontFacing(e,n,i,r){return Un.subVectors(i,n),ai.subVectors(e,n),Un.cross(ai).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),Un.cross(ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Gn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Gn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Jr.subVectors(r,i),es.subVectors(s,i),ou.subVectors(e,i);const l=Jr.dot(ou),c=es.dot(ou);if(l<=0&&c<=0)return n.copy(i);lu.subVectors(e,r);const d=Jr.dot(lu),f=es.dot(lu);if(d>=0&&f<=d)return n.copy(r);const h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return a=l/(l-d),n.copy(i).addScaledVector(Jr,a);cu.subVectors(e,s);const m=Jr.dot(cu),_=es.dot(cu);if(_>=0&&m<=_)return n.copy(s);const y=m*c-l*_;if(y<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(es,o);const p=d*_-m*f;if(p<=0&&f-d>=0&&m-_>=0)return kp.subVectors(s,r),o=(f-d)/(f-d+(m-_)),n.copy(r).addScaledVector(kp,o);const u=1/(p+y+h);return a=y*u,o=h*u,n.copy(i).addScaledVector(Jr,a).addScaledVector(es,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const cv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},No={h:0,s:0,l:0};function uu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class it{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=at.workingColorSpace){return this.r=e,this.g=n,this.b=i,at.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=at.workingColorSpace){if(e=Rf(e,1),n=Ot(n,0,1),i=Ot(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=uu(a,s,e+1/3),this.g=uu(a,s,e),this.b=uu(a,s,e-1/3)}return at.toWorkingColorSpace(this,r),this}setStyle(e,n=Yn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Yn){const i=cv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}copyLinearToSRGB(e){return this.r=Kc(e.r),this.g=Kc(e.g),this.b=Kc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yn){return at.fromWorkingColorSpace(jt.copy(this),e),Math.round(Ot(jt.r*255,0,255))*65536+Math.round(Ot(jt.g*255,0,255))*256+Math.round(Ot(jt.b*255,0,255))}getHexString(e=Yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=at.workingColorSpace){at.fromWorkingColorSpace(jt.copy(this),n);const i=jt.r,r=jt.g,s=jt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=d<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=at.workingColorSpace){return at.fromWorkingColorSpace(jt.copy(this),n),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=Yn){at.fromWorkingColorSpace(jt.copy(this),e);const n=jt.r,i=jt.g,r=jt.b;return e!==Yn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ri),this.setHSL(Ri.h+e,Ri.s+n,Ri.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ri),e.getHSL(No);const i=Ca(Ri.h,No.h,n),r=Ca(Ri.s,No.s,n),s=Ca(Ri.l,No.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new it;it.NAMES=cv;let FS=0;class Br extends zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:FS++}),this.uuid=gi(),this.name="",this.type="Material",this.blending=Ds,this.side=er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xd,this.blendDst=yd,this.blendEquation=xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=kl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xr,this.stencilZFail=Xr,this.stencilZPass=Xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ds&&(i.blending=this.blending),this.side!==er&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==xd&&(i.blendSrc=this.blendSrc),this.blendDst!==yd&&(i.blendDst=this.blendDst),this.blendEquation!==xr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==kl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ii extends Br{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=q0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new U,Do=new Ne;class yn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=wd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return sv("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Do.fromBufferAttribute(this,n),Do.applyMatrix3(e),this.setXY(n,Do.x,Do.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix3(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix4(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyNormalMatrix(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.transformDirection(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Hn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=rt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Hn(n,this.array)),n}setX(e,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Hn(n,this.array)),n}setY(e,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Hn(n,this.array)),n}setZ(e,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Hn(n,this.array)),n}setW(e,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=rt(n,this.array),i=rt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=rt(n,this.array),i=rt(i,this.array),r=rt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=rt(n,this.array),i=rt(i,this.array),r=rt(r,this.array),s=rt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wd&&(e.usage=this.usage),e}}class uv extends yn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class dv extends yn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class un extends yn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let OS=0;const Tn=new ct,du=new zt,ts=new U,mn=new to,ca=new to,Nt=new U;class dn extends zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:OS++}),this.uuid=gi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rv(e)?dv:uv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,n,i){return Tn.makeTranslation(e,n,i),this.applyMatrix4(Tn),this}scale(e,n,i){return Tn.makeScale(e,n,i),this.applyMatrix4(Tn),this}lookAt(e){return du.lookAt(e),du.updateMatrix(),this.applyMatrix4(du.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new un(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new to);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new no);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ca.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(mn.min,ca.min),mn.expandByPoint(Nt),Nt.addVectors(mn.max,ca.max),mn.expandByPoint(Nt)):(mn.expandByPoint(ca.min),mn.expandByPoint(ca.max))}mn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Nt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Nt.fromBufferAttribute(o,c),l&&(ts.fromBufferAttribute(e,c),Nt.add(ts)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<i.count;N++)o[N]=new U,l[N]=new U;const c=new U,d=new U,f=new U,h=new Ne,m=new Ne,_=new Ne,y=new U,p=new U;function u(N,ie,x){c.fromBufferAttribute(i,N),d.fromBufferAttribute(i,ie),f.fromBufferAttribute(i,x),h.fromBufferAttribute(s,N),m.fromBufferAttribute(s,ie),_.fromBufferAttribute(s,x),d.sub(c),f.sub(c),m.sub(h),_.sub(h);const C=1/(m.x*_.y-_.x*m.y);isFinite(C)&&(y.copy(d).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(C),p.copy(f).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(C),o[N].add(y),o[ie].add(y),o[x].add(y),l[N].add(p),l[ie].add(p),l[x].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let N=0,ie=v.length;N<ie;++N){const x=v[N],C=x.start,K=x.count;for(let ee=C,I=C+K;ee<I;ee+=3)u(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const g=new U,M=new U,R=new U,b=new U;function w(N){R.fromBufferAttribute(r,N),b.copy(R);const ie=o[N];g.copy(ie),g.sub(R.multiplyScalar(R.dot(ie))).normalize(),M.crossVectors(b,ie);const C=M.dot(l[N])<0?-1:1;a.setXYZW(N,g.x,g.y,g.z,C)}for(let N=0,ie=v.length;N<ie;++N){const x=v[N],C=x.start,K=x.count;for(let ee=C,I=C+K;ee<I;ee+=3)w(e.getX(ee+0)),w(e.getX(ee+1)),w(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new yn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new U,s=new U,a=new U,o=new U,l=new U,c=new U,d=new U,f=new U;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),y=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),a.fromBufferAttribute(n,p),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,p),o.add(d),l.add(d),c.add(d),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Nt.fromBufferAttribute(e,n),Nt.normalize(),e.setXYZ(n,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,f=o.normalized,h=new c.constructor(l.length*d);let m=0,_=0;for(let y=0,p=l.length;y<p;y++){o.isInterleavedBufferAttribute?m=l[y]*o.data.stride+o.offset:m=l[y]*d;for(let u=0;u<d;u++)h[_++]=c[m++]}return new yn(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new dn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,f=c.length;d<f;d++){const h=c[d],m=e(h,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let h=0,m=f.length;h<m;h++)d.push(f[h].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zp=new ct,fr=new io,Io=new no,Bp=new U,ns=new U,is=new U,rs=new U,fu=new U,Uo=new U,Fo=new Ne,Oo=new Ne,ko=new Ne,Hp=new U,Gp=new U,Vp=new U,zo=new U,Bo=new U;class en extends zt{constructor(e=new dn,n=new Ii){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Uo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],f=s[l];d!==0&&(fu.fromBufferAttribute(f,e),a?Uo.addScaledVector(fu,d):Uo.addScaledVector(fu.sub(n),d))}n.add(Uo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Io.copy(i.boundingSphere),Io.applyMatrix4(s),fr.copy(e.ray).recast(e.near),!(Io.containsPoint(fr.origin)===!1&&(fr.intersectSphere(Io,Bp)===null||fr.origin.distanceToSquared(Bp)>(e.far-e.near)**2))&&(zp.copy(s).invert(),fr.copy(e.ray).applyMatrix4(zp),!(i.boundingBox!==null&&fr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,fr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,h=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,y=h.length;_<y;_++){const p=h[_],u=a[p.materialIndex],v=Math.max(p.start,m.start),g=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let M=v,R=g;M<R;M+=3){const b=o.getX(M),w=o.getX(M+1),N=o.getX(M+2);r=Ho(this,u,e,i,c,d,f,b,w,N),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);for(let p=_,u=y;p<u;p+=3){const v=o.getX(p),g=o.getX(p+1),M=o.getX(p+2);r=Ho(this,a,e,i,c,d,f,v,g,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,y=h.length;_<y;_++){const p=h[_],u=a[p.materialIndex],v=Math.max(p.start,m.start),g=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=v,R=g;M<R;M+=3){const b=M,w=M+1,N=M+2;r=Ho(this,u,e,i,c,d,f,b,w,N),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let p=_,u=y;p<u;p+=3){const v=p,g=p+1,M=p+2;r=Ho(this,a,e,i,c,d,f,v,g,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function kS(t,e,n,i,r,s,a,o){let l;if(e.side===qt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===er,o),l===null)return null;Bo.copy(o),Bo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Bo);return c<n.near||c>n.far?null:{distance:c,point:Bo.clone(),object:t}}function Ho(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,ns),t.getVertexPosition(l,is),t.getVertexPosition(c,rs);const d=kS(t,e,n,i,ns,is,rs,zo);if(d){r&&(Fo.fromBufferAttribute(r,o),Oo.fromBufferAttribute(r,l),ko.fromBufferAttribute(r,c),d.uv=Gn.getInterpolation(zo,ns,is,rs,Fo,Oo,ko,new Ne)),s&&(Fo.fromBufferAttribute(s,o),Oo.fromBufferAttribute(s,l),ko.fromBufferAttribute(s,c),d.uv1=Gn.getInterpolation(zo,ns,is,rs,Fo,Oo,ko,new Ne)),a&&(Hp.fromBufferAttribute(a,o),Gp.fromBufferAttribute(a,l),Vp.fromBufferAttribute(a,c),d.normal=Gn.getInterpolation(zo,ns,is,rs,Hp,Gp,Vp,new U),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new U,materialIndex:0};Gn.getNormal(ns,is,rs,f.normal),d.face=f}return d}class ro extends dn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],f=[];let h=0,m=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new un(c,3)),this.setAttribute("normal",new un(d,3)),this.setAttribute("uv",new un(f,2));function _(y,p,u,v,g,M,R,b,w,N,ie){const x=M/w,C=R/N,K=M/2,ee=R/2,I=b/2,Z=w+1,k=N+1;let V=0,D=0;const F=new U;for(let O=0;O<k;O++){const Y=O*C-ee;for(let de=0;de<Z;de++){const be=de*x-K;F[y]=be*v,F[p]=Y*g,F[u]=I,c.push(F.x,F.y,F.z),F[y]=0,F[p]=0,F[u]=b>0?1:-1,d.push(F.x,F.y,F.z),f.push(de/w),f.push(1-O/N),V+=1}}for(let O=0;O<N;O++)for(let Y=0;Y<w;Y++){const de=h+Y+Z*O,be=h+Y+Z*(O+1),X=h+(Y+1)+Z*(O+1),q=h+(Y+1)+Z*O;l.push(de,be,q),l.push(be,X,q),D+=6}o.addGroup(m,D,ie),m+=D,h+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ro(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function js(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Zt(t){const e={};for(let n=0;n<t.length;n++){const i=js(t[n]);for(const r in i)e[r]=i[r]}return e}function zS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function fv(t){return t.getRenderTarget()===null?t.outputColorSpace:at.workingColorSpace}const BS={clone:js,merge:Zt};var HS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,GS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class tr extends Br{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=HS,this.fragmentShader=GS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=js(e.uniforms),this.uniformsGroups=zS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class hv extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=pi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pi=new U,Wp=new Ne,jp=new Ne;class vn extends hv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=$a*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Aa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $a*2*Math.atan(Math.tan(Aa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z),Pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z)}getViewSize(e,n){return this.getViewBounds(e,Wp,jp),n.subVectors(jp,Wp)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Aa*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ss=-90,as=1;class VS extends zt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new vn(ss,as,e,n);r.layers=this.layers,this.add(r);const s=new vn(ss,as,e,n);s.layers=this.layers,this.add(s);const a=new vn(ss,as,e,n);a.layers=this.layers,this.add(a);const o=new vn(ss,as,e,n);o.layers=this.layers,this.add(o);const l=new vn(ss,as,e,n);l.layers=this.layers,this.add(l);const c=new vn(ss,as,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===pi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Gl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,h,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class pv extends $t{constructor(e,n,i,r,s,a,o,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:Gs,super(e,n,i,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class WS extends Ur{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new pv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ft}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ro(5,5,5),s=new tr({name:"CubemapFromEquirect",uniforms:js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qt,blending:Yi});s.uniforms.tEquirect.value=n;const a=new en(r,s),o=n.minFilter;return n.minFilter===Tr&&(n.minFilter=Ft),new VS(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const hu=new U,jS=new U,XS=new Qe;class Kn{constructor(e=new U(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=hu.subVectors(i,n).cross(jS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(hu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||XS.getNormalMatrix(e),r=this.coplanarPoint(hu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hr=new no,Go=new U;class Lf{constructor(e=new Kn,n=new Kn,i=new Kn,r=new Kn,s=new Kn,a=new Kn){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=pi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],d=r[5],f=r[6],h=r[7],m=r[8],_=r[9],y=r[10],p=r[11],u=r[12],v=r[13],g=r[14],M=r[15];if(i[0].setComponents(l-s,h-c,p-m,M-u).normalize(),i[1].setComponents(l+s,h+c,p+m,M+u).normalize(),i[2].setComponents(l+a,h+d,p+_,M+v).normalize(),i[3].setComponents(l-a,h-d,p-_,M-v).normalize(),i[4].setComponents(l-o,h-f,p-y,M-g).normalize(),n===pi)i[5].setComponents(l+o,h+f,p+y,M+g).normalize();else if(n===Gl)i[5].setComponents(o,f,y,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hr)}intersectsSprite(e){return hr.center.set(0,0,0),hr.radius=.7071067811865476,hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Go.x=r.normal.x>0?e.max.x:e.min.x,Go.y=r.normal.y>0?e.max.y:e.min.y,Go.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Go)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function mv(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function qS(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,d){const f=c.array,h=c.usage,m=f.byteLength,_=t.createBuffer();t.bindBuffer(d,_),t.bufferData(d,f,h),c.onUploadCallback();let y;if(f instanceof Float32Array)y=t.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)y=t.SHORT;else if(f instanceof Uint32Array)y=t.UNSIGNED_INT;else if(f instanceof Int32Array)y=t.INT;else if(f instanceof Int8Array)y=t.BYTE;else if(f instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:y,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,d,f){const h=d.array,m=d._updateRange,_=d.updateRanges;if(t.bindBuffer(f,c),m.count===-1&&_.length===0&&t.bufferSubData(f,0,h),_.length!==0){for(let y=0,p=_.length;y<p;y++){const u=_[y];n?t.bufferSubData(f,u.start*h.BYTES_PER_ELEMENT,h,u.start,u.count):t.bufferSubData(f,u.start*h.BYTES_PER_ELEMENT,h.subarray(u.start,u.start+u.count))}d.clearUpdateRanges()}m.count!==-1&&(n?t.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):t.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),d.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d&&(t.deleteBuffer(d.buffer),i.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);if(f===void 0)i.set(c,r(c,d));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,d),f.version=c.version}}return{get:a,remove:o,update:l}}class cc extends dn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,d=l+1,f=e/o,h=n/l,m=[],_=[],y=[],p=[];for(let u=0;u<d;u++){const v=u*h-a;for(let g=0;g<c;g++){const M=g*f-s;_.push(M,-v,0),y.push(0,0,1),p.push(g/o),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<o;v++){const g=v+c*u,M=v+c*(u+1),R=v+1+c*(u+1),b=v+1+c*u;m.push(g,M,b),m.push(M,R,b)}this.setIndex(m),this.setAttribute("position",new un(_,3)),this.setAttribute("normal",new un(y,3)),this.setAttribute("uv",new un(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cc(e.width,e.height,e.widthSegments,e.heightSegments)}}var $S=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,YS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,KS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ZS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,QS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,JS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,tM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nM=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,iM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,rM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,aM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,oM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,lM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,uM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,gM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,vM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_M=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,xM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,SM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,MM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,EM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wM="gl_FragColor = linearToOutputTexel( gl_FragColor );",TM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,bM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,AM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,CM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,RM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,PM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,LM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,NM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,DM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,IM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,UM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,FM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,OM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,BM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,HM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,GM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,VM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,WM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,XM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,qM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$M=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,YM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,KM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ZM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,QM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,eE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,tE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,iE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,aE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,oE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,uE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,dE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,fE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,pE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_E=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,SE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ME=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,EE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,wE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,TE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,AE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,CE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,RE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,PE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,LE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,NE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,DE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,IE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,UE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,FE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,OE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,kE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,BE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,HE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,GE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,VE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,WE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,XE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $E=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,YE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,t1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,n1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,i1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,r1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,s1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,o1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,l1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,c1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,h1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,m1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,g1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,v1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,x1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,S1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,E1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,w1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,b1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,A1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:$S,alphahash_pars_fragment:YS,alphamap_fragment:KS,alphamap_pars_fragment:ZS,alphatest_fragment:QS,alphatest_pars_fragment:JS,aomap_fragment:eM,aomap_pars_fragment:tM,batching_pars_vertex:nM,batching_vertex:iM,begin_vertex:rM,beginnormal_vertex:sM,bsdfs:aM,iridescence_fragment:oM,bumpmap_pars_fragment:lM,clipping_planes_fragment:cM,clipping_planes_pars_fragment:uM,clipping_planes_pars_vertex:dM,clipping_planes_vertex:fM,color_fragment:hM,color_pars_fragment:pM,color_pars_vertex:mM,color_vertex:gM,common:vM,cube_uv_reflection_fragment:_M,defaultnormal_vertex:xM,displacementmap_pars_vertex:yM,displacementmap_vertex:SM,emissivemap_fragment:MM,emissivemap_pars_fragment:EM,colorspace_fragment:wM,colorspace_pars_fragment:TM,envmap_fragment:bM,envmap_common_pars_fragment:AM,envmap_pars_fragment:CM,envmap_pars_vertex:RM,envmap_physical_pars_fragment:HM,envmap_vertex:PM,fog_vertex:LM,fog_pars_vertex:NM,fog_fragment:DM,fog_pars_fragment:IM,gradientmap_pars_fragment:UM,lightmap_fragment:FM,lightmap_pars_fragment:OM,lights_lambert_fragment:kM,lights_lambert_pars_fragment:zM,lights_pars_begin:BM,lights_toon_fragment:GM,lights_toon_pars_fragment:VM,lights_phong_fragment:WM,lights_phong_pars_fragment:jM,lights_physical_fragment:XM,lights_physical_pars_fragment:qM,lights_fragment_begin:$M,lights_fragment_maps:YM,lights_fragment_end:KM,logdepthbuf_fragment:ZM,logdepthbuf_pars_fragment:QM,logdepthbuf_pars_vertex:JM,logdepthbuf_vertex:eE,map_fragment:tE,map_pars_fragment:nE,map_particle_fragment:iE,map_particle_pars_fragment:rE,metalnessmap_fragment:sE,metalnessmap_pars_fragment:aE,morphinstance_vertex:oE,morphcolor_vertex:lE,morphnormal_vertex:cE,morphtarget_pars_vertex:uE,morphtarget_vertex:dE,normal_fragment_begin:fE,normal_fragment_maps:hE,normal_pars_fragment:pE,normal_pars_vertex:mE,normal_vertex:gE,normalmap_pars_fragment:vE,clearcoat_normal_fragment_begin:_E,clearcoat_normal_fragment_maps:xE,clearcoat_pars_fragment:yE,iridescence_pars_fragment:SE,opaque_fragment:ME,packing:EE,premultiplied_alpha_fragment:wE,project_vertex:TE,dithering_fragment:bE,dithering_pars_fragment:AE,roughnessmap_fragment:CE,roughnessmap_pars_fragment:RE,shadowmap_pars_fragment:PE,shadowmap_pars_vertex:LE,shadowmap_vertex:NE,shadowmask_pars_fragment:DE,skinbase_vertex:IE,skinning_pars_vertex:UE,skinning_vertex:FE,skinnormal_vertex:OE,specularmap_fragment:kE,specularmap_pars_fragment:zE,tonemapping_fragment:BE,tonemapping_pars_fragment:HE,transmission_fragment:GE,transmission_pars_fragment:VE,uv_pars_fragment:WE,uv_pars_vertex:jE,uv_vertex:XE,worldpos_vertex:qE,background_vert:$E,background_frag:YE,backgroundCube_vert:KE,backgroundCube_frag:ZE,cube_vert:QE,cube_frag:JE,depth_vert:e1,depth_frag:t1,distanceRGBA_vert:n1,distanceRGBA_frag:i1,equirect_vert:r1,equirect_frag:s1,linedashed_vert:a1,linedashed_frag:o1,meshbasic_vert:l1,meshbasic_frag:c1,meshlambert_vert:u1,meshlambert_frag:d1,meshmatcap_vert:f1,meshmatcap_frag:h1,meshnormal_vert:p1,meshnormal_frag:m1,meshphong_vert:g1,meshphong_frag:v1,meshphysical_vert:_1,meshphysical_frag:x1,meshtoon_vert:y1,meshtoon_frag:S1,points_vert:M1,points_frag:E1,shadow_vert:w1,shadow_frag:T1,sprite_vert:b1,sprite_frag:A1},Me={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Zn={basic:{uniforms:Zt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Zt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new it(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Zt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Zt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Zt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new it(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Zt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Zt([Me.points,Me.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Zt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Zt([Me.common,Me.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Zt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Zt([Me.sprite,Me.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:Zt([Me.common,Me.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:Zt([Me.lights,Me.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Zn.physical={uniforms:Zt([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const Vo={r:0,b:0,g:0},pr=new Si,C1=new ct;function R1(t,e,n,i,r,s,a){const o=new it(0);let l=s===!0?0:1,c,d,f=null,h=0,m=null;function _(p,u){let v=!1,g=u.isScene===!0?u.background:null;g&&g.isTexture&&(g=(u.backgroundBlurriness>0?n:e).get(g)),g===null?y(o,l):g&&g.isColor&&(y(g,1),v=!0);const M=t.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===oc)?(d===void 0&&(d=new en(new ro(1,1,1),new tr({name:"BackgroundCubeMaterial",uniforms:js(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(R,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),pr.copy(u.backgroundRotation),pr.x*=-1,pr.y*=-1,pr.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),d.material.uniforms.envMap.value=g,d.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(C1.makeRotationFromEuler(pr)),d.material.toneMapped=at.getTransfer(g.colorSpace)!==dt,(f!==g||h!==g.version||m!==t.toneMapping)&&(d.material.needsUpdate=!0,f=g,h=g.version,m=t.toneMapping),d.layers.enableAll(),p.unshift(d,d.geometry,d.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new en(new cc(2,2),new tr({name:"BackgroundMaterial",uniforms:js(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:er,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=at.getTransfer(g.colorSpace)!==dt,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(f!==g||h!==g.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,f=g,h=g.version,m=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function y(p,u){p.getRGB(Vo,fv(t)),i.buffers.color.setClear(Vo.r,Vo.g,Vo.b,u,a)}return{getClearColor:function(){return o},setClearColor:function(p,u=1){o.set(p),l=u,y(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,y(o,l)},render:_}}function P1(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=p(null);let c=l,d=!1;function f(I,Z,k,V,D){let F=!1;if(a){const O=y(V,k,Z);c!==O&&(c=O,m(c.object)),F=u(I,V,k,D),F&&v(I,V,k,D)}else{const O=Z.wireframe===!0;(c.geometry!==V.id||c.program!==k.id||c.wireframe!==O)&&(c.geometry=V.id,c.program=k.id,c.wireframe=O,F=!0)}D!==null&&n.update(D,t.ELEMENT_ARRAY_BUFFER),(F||d)&&(d=!1,N(I,Z,k,V),D!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(D).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(I){return i.isWebGL2?t.bindVertexArray(I):s.bindVertexArrayOES(I)}function _(I){return i.isWebGL2?t.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function y(I,Z,k){const V=k.wireframe===!0;let D=o[I.id];D===void 0&&(D={},o[I.id]=D);let F=D[Z.id];F===void 0&&(F={},D[Z.id]=F);let O=F[V];return O===void 0&&(O=p(h()),F[V]=O),O}function p(I){const Z=[],k=[],V=[];for(let D=0;D<r;D++)Z[D]=0,k[D]=0,V[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:k,attributeDivisors:V,object:I,attributes:{},index:null}}function u(I,Z,k,V){const D=c.attributes,F=Z.attributes;let O=0;const Y=k.getAttributes();for(const de in Y)if(Y[de].location>=0){const X=D[de];let q=F[de];if(q===void 0&&(de==="instanceMatrix"&&I.instanceMatrix&&(q=I.instanceMatrix),de==="instanceColor"&&I.instanceColor&&(q=I.instanceColor)),X===void 0||X.attribute!==q||q&&X.data!==q.data)return!0;O++}return c.attributesNum!==O||c.index!==V}function v(I,Z,k,V){const D={},F=Z.attributes;let O=0;const Y=k.getAttributes();for(const de in Y)if(Y[de].location>=0){let X=F[de];X===void 0&&(de==="instanceMatrix"&&I.instanceMatrix&&(X=I.instanceMatrix),de==="instanceColor"&&I.instanceColor&&(X=I.instanceColor));const q={};q.attribute=X,X&&X.data&&(q.data=X.data),D[de]=q,O++}c.attributes=D,c.attributesNum=O,c.index=V}function g(){const I=c.newAttributes;for(let Z=0,k=I.length;Z<k;Z++)I[Z]=0}function M(I){R(I,0)}function R(I,Z){const k=c.newAttributes,V=c.enabledAttributes,D=c.attributeDivisors;k[I]=1,V[I]===0&&(t.enableVertexAttribArray(I),V[I]=1),D[I]!==Z&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,Z),D[I]=Z)}function b(){const I=c.newAttributes,Z=c.enabledAttributes;for(let k=0,V=Z.length;k<V;k++)Z[k]!==I[k]&&(t.disableVertexAttribArray(k),Z[k]=0)}function w(I,Z,k,V,D,F,O){O===!0?t.vertexAttribIPointer(I,Z,k,D,F):t.vertexAttribPointer(I,Z,k,V,D,F)}function N(I,Z,k,V){if(i.isWebGL2===!1&&(I.isInstancedMesh||V.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const D=V.attributes,F=k.getAttributes(),O=Z.defaultAttributeValues;for(const Y in F){const de=F[Y];if(de.location>=0){let be=D[Y];if(be===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&(be=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&(be=I.instanceColor)),be!==void 0){const X=be.normalized,q=be.itemSize,ne=n.get(be);if(ne===void 0)continue;const Ee=ne.buffer,Se=ne.type,_e=ne.bytesPerElement,ze=i.isWebGL2===!0&&(Se===t.INT||Se===t.UNSIGNED_INT||be.gpuType===Y0);if(be.isInterleavedBufferAttribute){const Pe=be.data,H=Pe.stride,ot=be.offset;if(Pe.isInstancedInterleavedBuffer){for(let Re=0;Re<de.locationSize;Re++)R(de.location+Re,Pe.meshPerAttribute);I.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Pe.meshPerAttribute*Pe.count)}else for(let Re=0;Re<de.locationSize;Re++)M(de.location+Re);t.bindBuffer(t.ARRAY_BUFFER,Ee);for(let Re=0;Re<de.locationSize;Re++)w(de.location+Re,q/de.locationSize,Se,X,H*_e,(ot+q/de.locationSize*Re)*_e,ze)}else{if(be.isInstancedBufferAttribute){for(let Pe=0;Pe<de.locationSize;Pe++)R(de.location+Pe,be.meshPerAttribute);I.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Pe=0;Pe<de.locationSize;Pe++)M(de.location+Pe);t.bindBuffer(t.ARRAY_BUFFER,Ee);for(let Pe=0;Pe<de.locationSize;Pe++)w(de.location+Pe,q/de.locationSize,Se,X,q*_e,q/de.locationSize*Pe*_e,ze)}}else if(O!==void 0){const X=O[Y];if(X!==void 0)switch(X.length){case 2:t.vertexAttrib2fv(de.location,X);break;case 3:t.vertexAttrib3fv(de.location,X);break;case 4:t.vertexAttrib4fv(de.location,X);break;default:t.vertexAttrib1fv(de.location,X)}}}}b()}function ie(){K();for(const I in o){const Z=o[I];for(const k in Z){const V=Z[k];for(const D in V)_(V[D].object),delete V[D];delete Z[k]}delete o[I]}}function x(I){if(o[I.id]===void 0)return;const Z=o[I.id];for(const k in Z){const V=Z[k];for(const D in V)_(V[D].object),delete V[D];delete Z[k]}delete o[I.id]}function C(I){for(const Z in o){const k=o[Z];if(k[I.id]===void 0)continue;const V=k[I.id];for(const D in V)_(V[D].object),delete V[D];delete k[I.id]}}function K(){ee(),d=!0,c!==l&&(c=l,m(c.object))}function ee(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:K,resetDefaultState:ee,dispose:ie,releaseStatesOfGeometry:x,releaseStatesOfProgram:C,initAttributes:g,enableAttribute:M,disableUnusedAttributes:b}}function L1(t,e,n,i){const r=i.isWebGL2;let s;function a(d){s=d}function o(d,f){t.drawArrays(s,d,f),n.update(f,s,1)}function l(d,f,h){if(h===0)return;let m,_;if(r)m=t,_="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](s,d,f,h),n.update(f,s,h)}function c(d,f,h){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<h;_++)this.render(d[_],f[_]);else{m.multiDrawArraysWEBGL(s,d,0,f,0,h);let _=0;for(let y=0;y<h;y++)_+=f[y];n.update(_,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function N1(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let o=n.precision!==void 0?n.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),d=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=h>0,M=a||e.has("OES_texture_float"),R=g&&M,b=a?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:v,vertexTextures:g,floatFragmentTextures:M,floatVertexTextures:R,maxSamples:b}}function D1(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Kn,o=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=d(f,h,0)},this.setState=function(f,h,m){const _=f.clippingPlanes,y=f.clipIntersection,p=f.clipShadows,u=t.get(f);if(!r||_===null||_.length===0||s&&!p)s?d(null):c();else{const v=s?0:i,g=v*4;let M=u.clippingState||null;l.value=M,M=d(_,h,g,m);for(let R=0;R!==g;++R)M[R]=n[R];u.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,m,_){const y=f!==null?f.length:0;let p=null;if(y!==0){if(p=l.value,_!==!0||p===null){const u=m+y*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<u)&&(p=new Float32Array(u));for(let g=0,M=m;g!==y;++g,M+=4)a.copy(f[g]).applyMatrix4(v,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function I1(t){let e=new WeakMap;function n(a,o){return o===Sd?a.mapping=Gs:o===Md&&(a.mapping=Vs),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Sd||o===Md)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new WS(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class U1 extends hv{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ws=4,Xp=[.125,.215,.35,.446,.526,.582],yr=20,pu=new U1,qp=new it;let mu=null,gu=0,vu=0;const _r=(1+Math.sqrt(5))/2,os=1/_r,$p=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,_r,os),new U(0,_r,-os),new U(os,0,_r),new U(-os,0,_r),new U(_r,os,0),new U(-_r,os,0)];class Yp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){mu=this._renderer.getRenderTarget(),gu=this._renderer.getActiveCubeFace(),vu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(mu,gu,vu),e.scissorTest=!1,Wo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Gs||e.mapping===Vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mu=this._renderer.getRenderTarget(),gu=this._renderer.getActiveCubeFace(),vu=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ft,minFilter:Ft,generateMipmaps:!1,type:qa,format:Bn,colorSpace:sr,depthBuffer:!1},r=Kp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=F1(s)),this._blurMaterial=O1(s,e,n)}return r}_compileMaterial(e){const n=new en(this._lodPlanes[0],e);this._renderer.compile(n,pu)}_sceneToCubeUV(e,n,i,r){const o=new vn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(qp),d.toneMapping=Ki,d.autoClear=!1;const m=new Ii({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),_=new en(new ro,m);let y=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,y=!0):(m.color.copy(qp),y=!0);for(let u=0;u<6;u++){const v=u%3;v===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):v===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const g=this._cubeSize;Wo(r,v*g,u>2?g:0,g,g),d.setRenderTarget(r),y&&d.render(_,o),d.render(e,o)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Gs||e.mapping===Vs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zp());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new en(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Wo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,pu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=$p[(r-1)%$p.length];this._blur(e,r-1,r,s,a)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new en(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*yr-1),y=s/_,p=isFinite(s)?1+Math.floor(d*y):yr;p>yr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${yr}`);const u=[];let v=0;for(let w=0;w<yr;++w){const N=w/y,ie=Math.exp(-N*N/2);u.push(ie),w===0?v+=ie:w<p&&(v+=2*ie)}for(let w=0;w<u.length;w++)u[w]=u[w]/v;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=u,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:g}=this;h.dTheta.value=_,h.mipInt.value=g-i;const M=this._sizeLods[r],R=3*M*(r>g-ws?r-g+ws:0),b=4*(this._cubeSize-M);Wo(n,R,b,3*M,2*M),l.setRenderTarget(n),l.render(f,pu)}}function F1(t){const e=[],n=[],i=[];let r=t;const s=t-ws+1+Xp.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-ws?l=Xp[a-t+ws-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),d=-c,f=1+c,h=[d,d,f,d,f,f,d,d,f,f,d,f],m=6,_=6,y=3,p=2,u=1,v=new Float32Array(y*_*m),g=new Float32Array(p*_*m),M=new Float32Array(u*_*m);for(let b=0;b<m;b++){const w=b%3*2/3-1,N=b>2?0:-1,ie=[w,N,0,w+2/3,N,0,w+2/3,N+1,0,w,N,0,w+2/3,N+1,0,w,N+1,0];v.set(ie,y*_*b),g.set(h,p*_*b);const x=[b,b,b,b,b,b];M.set(x,u*_*b)}const R=new dn;R.setAttribute("position",new yn(v,y)),R.setAttribute("uv",new yn(g,p)),R.setAttribute("faceIndex",new yn(M,u)),e.push(R),r>ws&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Kp(t,e,n){const i=new Ur(t,e,n);return i.texture.mapping=oc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Wo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function O1(t,e,n){const i=new Float32Array(yr),r=new U(0,1,0);return new tr({name:"SphericalGaussianBlur",defines:{n:yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Nf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Zp(){return new tr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Qp(){return new tr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Nf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function k1(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Sd||l===Md,d=l===Gs||l===Vs;if(c||d)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return n===null&&(n=new Yp(t)),f=c?n.fromEquirectangular(o,f):n.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||d&&f&&r(f)){n===null&&(n=new Yp(t));const h=c?n.fromEquirectangular(o):n.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function z1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function B1(t,e,n,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const y=h.morphAttributes[_];for(let p=0,u=y.length;p<u;p++)e.remove(y[p])}h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const m=f.morphAttributes;for(const _ in m){const y=m[_];for(let p=0,u=y.length;p<u;p++)e.update(y[p],t.ARRAY_BUFFER)}}function c(f){const h=[],m=f.index,_=f.attributes.position;let y=0;if(m!==null){const v=m.array;y=m.version;for(let g=0,M=v.length;g<M;g+=3){const R=v[g+0],b=v[g+1],w=v[g+2];h.push(R,b,b,w,w,R)}}else if(_!==void 0){const v=_.array;y=_.version;for(let g=0,M=v.length/3-1;g<M;g+=3){const R=g+0,b=g+1,w=g+2;h.push(R,b,b,w,w,R)}}else return;const p=new(rv(h)?dv:uv)(h,1);p.version=y;const u=s.get(f);u&&e.remove(u),s.set(f,p)}function d(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:d}}function H1(t,e,n,i){const r=i.isWebGL2;let s;function a(m){s=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function d(m,_){t.drawElements(s,_,o,m*l),n.update(_,s,1)}function f(m,_,y){if(y===0)return;let p,u;if(r)p=t,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](s,_,o,m*l,y),n.update(_,s,y)}function h(m,_,y){if(y===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<y;u++)this.render(m[u]/l,_[u]);else{p.multiDrawElementsWEBGL(s,_,0,o,m,0,y);let u=0;for(let v=0;v<y;v++)u+=_[v];n.update(u,s,1)}}this.setMode=a,this.setIndex=c,this.render=d,this.renderInstances=f,this.renderMultiDraw=h}function G1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function V1(t,e){return t[0]-e[0]}function W1(t,e){return Math.abs(e[1])-Math.abs(t[1])}function j1(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,a=new mt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,d,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,y=_!==void 0?_.length:0;let p=s.get(d);if(p===void 0||p.count!==y){let ee=function(){C.dispose(),s.delete(d),d.removeEventListener("dispose",ee)};var m=ee;p!==void 0&&p.texture.dispose();const u=d.morphAttributes.position!==void 0,v=d.morphAttributes.normal!==void 0,g=d.morphAttributes.color!==void 0,M=d.morphAttributes.position||[],R=d.morphAttributes.normal||[],b=d.morphAttributes.color||[];let w=0;u===!0&&(w=1),v===!0&&(w=2),g===!0&&(w=3);let N=d.attributes.position.count*w,ie=1;N>e.maxTextureSize&&(ie=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const x=new Float32Array(N*ie*4*y),C=new lv(x,N,ie,y);C.type=di,C.needsUpdate=!0;const K=w*4;for(let I=0;I<y;I++){const Z=M[I],k=R[I],V=b[I],D=N*ie*4*I;for(let F=0;F<Z.count;F++){const O=F*K;u===!0&&(a.fromBufferAttribute(Z,F),x[D+O+0]=a.x,x[D+O+1]=a.y,x[D+O+2]=a.z,x[D+O+3]=0),v===!0&&(a.fromBufferAttribute(k,F),x[D+O+4]=a.x,x[D+O+5]=a.y,x[D+O+6]=a.z,x[D+O+7]=0),g===!0&&(a.fromBufferAttribute(V,F),x[D+O+8]=a.x,x[D+O+9]=a.y,x[D+O+10]=a.z,x[D+O+11]=V.itemSize===4?a.w:1)}}p={count:y,texture:C,size:new Ne(N,ie)},s.set(d,p),d.addEventListener("dispose",ee)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(t,"morphTexture",c.morphTexture,n);else{let u=0;for(let g=0;g<h.length;g++)u+=h[g];const v=d.morphTargetsRelative?1:1-u;f.getUniforms().setValue(t,"morphTargetBaseInfluence",v),f.getUniforms().setValue(t,"morphTargetInfluences",h)}f.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const _=h===void 0?0:h.length;let y=i[d.id];if(y===void 0||y.length!==_){y=[];for(let M=0;M<_;M++)y[M]=[M,0];i[d.id]=y}for(let M=0;M<_;M++){const R=y[M];R[0]=M,R[1]=h[M]}y.sort(W1);for(let M=0;M<8;M++)M<_&&y[M][1]?(o[M][0]=y[M][0],o[M][1]=y[M][1]):(o[M][0]=Number.MAX_SAFE_INTEGER,o[M][1]=0);o.sort(V1);const p=d.morphAttributes.position,u=d.morphAttributes.normal;let v=0;for(let M=0;M<8;M++){const R=o[M],b=R[0],w=R[1];b!==Number.MAX_SAFE_INTEGER&&w?(p&&d.getAttribute("morphTarget"+M)!==p[b]&&d.setAttribute("morphTarget"+M,p[b]),u&&d.getAttribute("morphNormal"+M)!==u[b]&&d.setAttribute("morphNormal"+M,u[b]),r[M]=w,v+=w):(p&&d.hasAttribute("morphTarget"+M)===!0&&d.deleteAttribute("morphTarget"+M),u&&d.hasAttribute("morphNormal"+M)===!0&&d.deleteAttribute("morphNormal"+M),r[M]=0)}const g=d.morphTargetsRelative?1:1-v;f.getUniforms().setValue(t,"morphTargetBaseInfluence",g),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function X1(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class gv extends $t{constructor(e,n,i,r,s,a,o,l,c,d){if(d=d!==void 0?d:Rr,d!==Rr&&d!==Ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Rr&&(i=Bi),i===void 0&&d===Ws&&(i=Cr),super(null,r,s,a,o,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:Jt,this.minFilter=l!==void 0?l:Jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const vv=new $t,_v=new gv(1,1);_v.compareFunction=nv;const xv=new lv,yv=new AS,Sv=new pv,Jp=[],em=[],tm=new Float32Array(16),nm=new Float32Array(9),im=new Float32Array(4);function Ys(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Jp[r];if(s===void 0&&(s=new Float32Array(r),Jp[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function At(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ct(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function uc(t,e){let n=em[e];n===void 0&&(n=new Int32Array(e),em[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function q1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function $1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2fv(this.addr,e),Ct(n,e)}}function Y1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(At(n,e))return;t.uniform3fv(this.addr,e),Ct(n,e)}}function K1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4fv(this.addr,e),Ct(n,e)}}function Z1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ct(n,e)}else{if(At(n,i))return;im.set(i),t.uniformMatrix2fv(this.addr,!1,im),Ct(n,i)}}function Q1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ct(n,e)}else{if(At(n,i))return;nm.set(i),t.uniformMatrix3fv(this.addr,!1,nm),Ct(n,i)}}function J1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ct(n,e)}else{if(At(n,i))return;tm.set(i),t.uniformMatrix4fv(this.addr,!1,tm),Ct(n,i)}}function ew(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function tw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2iv(this.addr,e),Ct(n,e)}}function nw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(At(n,e))return;t.uniform3iv(this.addr,e),Ct(n,e)}}function iw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4iv(this.addr,e),Ct(n,e)}}function rw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function sw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2uiv(this.addr,e),Ct(n,e)}}function aw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(At(n,e))return;t.uniform3uiv(this.addr,e),Ct(n,e)}}function ow(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4uiv(this.addr,e),Ct(n,e)}}function lw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?_v:vv;n.setTexture2D(e||s,r)}function cw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||yv,r)}function uw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Sv,r)}function dw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||xv,r)}function fw(t){switch(t){case 5126:return q1;case 35664:return $1;case 35665:return Y1;case 35666:return K1;case 35674:return Z1;case 35675:return Q1;case 35676:return J1;case 5124:case 35670:return ew;case 35667:case 35671:return tw;case 35668:case 35672:return nw;case 35669:case 35673:return iw;case 5125:return rw;case 36294:return sw;case 36295:return aw;case 36296:return ow;case 35678:case 36198:case 36298:case 36306:case 35682:return lw;case 35679:case 36299:case 36307:return cw;case 35680:case 36300:case 36308:case 36293:return uw;case 36289:case 36303:case 36311:case 36292:return dw}}function hw(t,e){t.uniform1fv(this.addr,e)}function pw(t,e){const n=Ys(e,this.size,2);t.uniform2fv(this.addr,n)}function mw(t,e){const n=Ys(e,this.size,3);t.uniform3fv(this.addr,n)}function gw(t,e){const n=Ys(e,this.size,4);t.uniform4fv(this.addr,n)}function vw(t,e){const n=Ys(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function _w(t,e){const n=Ys(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function xw(t,e){const n=Ys(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function yw(t,e){t.uniform1iv(this.addr,e)}function Sw(t,e){t.uniform2iv(this.addr,e)}function Mw(t,e){t.uniform3iv(this.addr,e)}function Ew(t,e){t.uniform4iv(this.addr,e)}function ww(t,e){t.uniform1uiv(this.addr,e)}function Tw(t,e){t.uniform2uiv(this.addr,e)}function bw(t,e){t.uniform3uiv(this.addr,e)}function Aw(t,e){t.uniform4uiv(this.addr,e)}function Cw(t,e,n){const i=this.cache,r=e.length,s=uc(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||vv,s[a])}function Rw(t,e,n){const i=this.cache,r=e.length,s=uc(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||yv,s[a])}function Pw(t,e,n){const i=this.cache,r=e.length,s=uc(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Sv,s[a])}function Lw(t,e,n){const i=this.cache,r=e.length,s=uc(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||xv,s[a])}function Nw(t){switch(t){case 5126:return hw;case 35664:return pw;case 35665:return mw;case 35666:return gw;case 35674:return vw;case 35675:return _w;case 35676:return xw;case 5124:case 35670:return yw;case 35667:case 35671:return Sw;case 35668:case 35672:return Mw;case 35669:case 35673:return Ew;case 5125:return ww;case 36294:return Tw;case 36295:return bw;case 36296:return Aw;case 35678:case 36198:case 36298:case 36306:case 35682:return Cw;case 35679:case 36299:case 36307:return Rw;case 35680:case 36300:case 36308:case 36293:return Pw;case 36289:case 36303:case 36311:case 36292:return Lw}}class Dw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=fw(n.type)}}class Iw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Nw(n.type)}}class Uw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const _u=/(\w+)(\])?(\[|\.)?/g;function rm(t,e){t.seq.push(e),t.map[e.id]=e}function Fw(t,e,n){const i=t.name,r=i.length;for(_u.lastIndex=0;;){const s=_u.exec(i),a=_u.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){rm(n,c===void 0?new Dw(o,t,e):new Iw(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new Uw(o),rm(n,f)),n=f}}}class fl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);Fw(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function sm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Ow=37297;let kw=0;function zw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function Bw(t){const e=at.getPrimaries(at.workingColorSpace),n=at.getPrimaries(t);let i;switch(e===n?i="":e===Hl&&n===Bl?i="LinearDisplayP3ToLinearSRGB":e===Bl&&n===Hl&&(i="LinearSRGBToLinearDisplayP3"),t){case sr:case lc:return[i,"LinearTransferOETF"];case Yn:case Cf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function am(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+zw(t.getShaderSource(e),a)}else return r}function Hw(t,e){const n=Bw(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Gw(t,e){let n;switch(e){case Uy:n="Linear";break;case Fy:n="Reinhard";break;case Oy:n="OptimizedCineon";break;case ky:n="ACESFilmic";break;case By:n="AgX";break;case Hy:n="Neutral";break;case zy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Vw(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.alphaToCoverage||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ts).join(`
`)}function Ww(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ts).join(`
`)}function jw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Xw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Ts(t){return t!==""}function om(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ad(t){return t.replace(qw,Yw)}const $w=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Yw(t,e){let n=Ze[e];if(n===void 0){const i=$w.get(e);if(i!==void 0)n=Ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ad(n)}const Kw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cm(t){return t.replace(Kw,Zw)}function Zw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function um(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	`;return t.isWebGL2&&(e+=`precision ${t.precision} sampler3D;
		precision ${t.precision} sampler2DArray;
		precision ${t.precision} sampler2DShadow;
		precision ${t.precision} samplerCubeShadow;
		precision ${t.precision} sampler2DArrayShadow;
		precision ${t.precision} isampler2D;
		precision ${t.precision} isampler3D;
		precision ${t.precision} isamplerCube;
		precision ${t.precision} isampler2DArray;
		precision ${t.precision} usampler2D;
		precision ${t.precision} usampler3D;
		precision ${t.precision} usamplerCube;
		precision ${t.precision} usampler2DArray;
		`),t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Qw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===bf?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===cy?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===li&&(e="SHADOWMAP_TYPE_VSM"),e}function Jw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Gs:case Vs:e="ENVMAP_TYPE_CUBE";break;case oc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function eT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Vs:e="ENVMAP_MODE_REFRACTION";break}return e}function tT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case q0:e="ENVMAP_BLENDING_MULTIPLY";break;case Dy:e="ENVMAP_BLENDING_MIX";break;case Iy:e="ENVMAP_BLENDING_ADD";break}return e}function nT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function iT(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=Qw(n),c=Jw(n),d=eT(n),f=tT(n),h=nT(n),m=n.isWebGL2?"":Vw(n),_=Ww(n),y=jw(s),p=r.createProgram();let u,v,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Ts).join(`
`),u.length>0&&(u+=`
`),v=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Ts).join(`
`),v.length>0&&(v+=`
`)):(u=[um(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),v=[m,um(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ki?"#define TONE_MAPPING":"",n.toneMapping!==Ki?Ze.tonemapping_pars_fragment:"",n.toneMapping!==Ki?Gw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,Hw("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ts).join(`
`)),a=Ad(a),a=om(a,n),a=lm(a,n),o=Ad(o),o=om(o,n),o=lm(o,n),a=cm(a),o=cm(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,u=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,v=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===bp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===bp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const M=g+u+a,R=g+v+o,b=sm(r,r.VERTEX_SHADER,M),w=sm(r,r.FRAGMENT_SHADER,R);r.attachShader(p,b),r.attachShader(p,w),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function N(K){if(t.debug.checkShaderErrors){const ee=r.getProgramInfoLog(p).trim(),I=r.getShaderInfoLog(b).trim(),Z=r.getShaderInfoLog(w).trim();let k=!0,V=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(k=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,p,b,w);else{const D=am(r,b,"vertex"),F=am(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+K.name+`
Material Type: `+K.type+`

Program Info Log: `+ee+`
`+D+`
`+F)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(I===""||Z==="")&&(V=!1);V&&(K.diagnostics={runnable:k,programLog:ee,vertexShader:{log:I,prefix:u},fragmentShader:{log:Z,prefix:v}})}r.deleteShader(b),r.deleteShader(w),ie=new fl(r,p),x=Xw(r,p)}let ie;this.getUniforms=function(){return ie===void 0&&N(this),ie};let x;this.getAttributes=function(){return x===void 0&&N(this),x};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(p,Ow)),C},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=kw++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=b,this.fragmentShader=w,this}let rT=0;class sT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new aT(e),n.set(e,i)),i}}class aT{constructor(e){this.id=rT++,this.code=e,this.usedTimes=0}}function oT(t,e,n,i,r,s,a){const o=new Pf,l=new sT,c=new Set,d=[],f=r.isWebGL2,h=r.logarithmicDepthBuffer,m=r.vertexTextures;let _=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return c.add(x),x===0?"uv":`uv${x}`}function u(x,C,K,ee,I){const Z=ee.fog,k=I.geometry,V=x.isMeshStandardMaterial?ee.environment:null,D=(x.isMeshStandardMaterial?n:e).get(x.envMap||V),F=D&&D.mapping===oc?D.image.height:null,O=y[x.type];x.precision!==null&&(_=r.getMaxPrecision(x.precision),_!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",_,"instead."));const Y=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,de=Y!==void 0?Y.length:0;let be=0;k.morphAttributes.position!==void 0&&(be=1),k.morphAttributes.normal!==void 0&&(be=2),k.morphAttributes.color!==void 0&&(be=3);let X,q,ne,Ee;if(O){const We=Zn[O];X=We.vertexShader,q=We.fragmentShader}else X=x.vertexShader,q=x.fragmentShader,l.update(x),ne=l.getVertexShaderID(x),Ee=l.getFragmentShaderID(x);const Se=t.getRenderTarget(),_e=I.isInstancedMesh===!0,ze=I.isBatchedMesh===!0,Pe=!!x.map,H=!!x.matcap,ot=!!D,Re=!!x.aoMap,He=!!x.lightMap,ve=!!x.bumpMap,Ue=!!x.normalMap,Ge=!!x.displacementMap,De=!!x.emissiveMap,qe=!!x.metalnessMap,P=!!x.roughnessMap,E=x.anisotropy>0,te=x.clearcoat>0,se=x.iridescence>0,me=x.sheen>0,fe=x.transmission>0,Ve=E&&!!x.anisotropyMap,Fe=te&&!!x.clearcoatMap,xe=te&&!!x.clearcoatNormalMap,we=te&&!!x.clearcoatRoughnessMap,W=se&&!!x.iridescenceMap,B=se&&!!x.iridescenceThicknessMap,ye=me&&!!x.sheenColorMap,he=me&&!!x.sheenRoughnessMap,ce=!!x.specularMap,re=!!x.specularColorMap,ae=!!x.specularIntensityMap,T=fe&&!!x.transmissionMap,j=fe&&!!x.thicknessMap,pe=!!x.gradientMap,L=!!x.alphaMap,oe=x.alphaTest>0,z=!!x.alphaHash,le=!!x.extensions;let ue=Ki;x.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(ue=t.toneMapping);const Le={isWebGL2:f,shaderID:O,shaderType:x.type,shaderName:x.name,vertexShader:X,fragmentShader:q,defines:x.defines,customVertexShaderID:ne,customFragmentShaderID:Ee,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:_,batching:ze,instancing:_e,instancingColor:_e&&I.instanceColor!==null,instancingMorph:_e&&I.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Se===null?t.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:sr,alphaToCoverage:!!x.alphaToCoverage,map:Pe,matcap:H,envMap:ot,envMapMode:ot&&D.mapping,envMapCubeUVHeight:F,aoMap:Re,lightMap:He,bumpMap:ve,normalMap:Ue,displacementMap:m&&Ge,emissiveMap:De,normalMapObjectSpace:Ue&&x.normalMapType===eS,normalMapTangentSpace:Ue&&x.normalMapType===Jy,metalnessMap:qe,roughnessMap:P,anisotropy:E,anisotropyMap:Ve,clearcoat:te,clearcoatMap:Fe,clearcoatNormalMap:xe,clearcoatRoughnessMap:we,iridescence:se,iridescenceMap:W,iridescenceThicknessMap:B,sheen:me,sheenColorMap:ye,sheenRoughnessMap:he,specularMap:ce,specularColorMap:re,specularIntensityMap:ae,transmission:fe,transmissionMap:T,thicknessMap:j,gradientMap:pe,opaque:x.transparent===!1&&x.blending===Ds&&x.alphaToCoverage===!1,alphaMap:L,alphaTest:oe,alphaHash:z,combine:x.combine,mapUv:Pe&&p(x.map.channel),aoMapUv:Re&&p(x.aoMap.channel),lightMapUv:He&&p(x.lightMap.channel),bumpMapUv:ve&&p(x.bumpMap.channel),normalMapUv:Ue&&p(x.normalMap.channel),displacementMapUv:Ge&&p(x.displacementMap.channel),emissiveMapUv:De&&p(x.emissiveMap.channel),metalnessMapUv:qe&&p(x.metalnessMap.channel),roughnessMapUv:P&&p(x.roughnessMap.channel),anisotropyMapUv:Ve&&p(x.anisotropyMap.channel),clearcoatMapUv:Fe&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:xe&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:W&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:B&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:he&&p(x.sheenRoughnessMap.channel),specularMapUv:ce&&p(x.specularMap.channel),specularColorMapUv:re&&p(x.specularColorMap.channel),specularIntensityMapUv:ae&&p(x.specularIntensityMap.channel),transmissionMapUv:T&&p(x.transmissionMap.channel),thicknessMapUv:j&&p(x.thicknessMap.channel),alphaMapUv:L&&p(x.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Ue||E),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!k.attributes.uv&&(Pe||L),fog:!!Z,useFog:x.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:I.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:be,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&K.length>0,shadowMapType:t.shadowMap.type,toneMapping:ue,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Pe&&x.map.isVideoTexture===!0&&at.getTransfer(x.map.colorSpace)===dt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Jn,flipSided:x.side===qt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:le&&x.extensions.derivatives===!0,extensionFragDepth:le&&x.extensions.fragDepth===!0,extensionDrawBuffers:le&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:le&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:le&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:le&&x.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Le.vertexUv1s=c.has(1),Le.vertexUv2s=c.has(2),Le.vertexUv3s=c.has(3),c.clear(),Le}function v(x){const C=[];if(x.shaderID?C.push(x.shaderID):(C.push(x.customVertexShaderID),C.push(x.customFragmentShaderID)),x.defines!==void 0)for(const K in x.defines)C.push(K),C.push(x.defines[K]);return x.isRawShaderMaterial===!1&&(g(C,x),M(C,x),C.push(t.outputColorSpace)),C.push(x.customProgramCacheKey),C.join()}function g(x,C){x.push(C.precision),x.push(C.outputColorSpace),x.push(C.envMapMode),x.push(C.envMapCubeUVHeight),x.push(C.mapUv),x.push(C.alphaMapUv),x.push(C.lightMapUv),x.push(C.aoMapUv),x.push(C.bumpMapUv),x.push(C.normalMapUv),x.push(C.displacementMapUv),x.push(C.emissiveMapUv),x.push(C.metalnessMapUv),x.push(C.roughnessMapUv),x.push(C.anisotropyMapUv),x.push(C.clearcoatMapUv),x.push(C.clearcoatNormalMapUv),x.push(C.clearcoatRoughnessMapUv),x.push(C.iridescenceMapUv),x.push(C.iridescenceThicknessMapUv),x.push(C.sheenColorMapUv),x.push(C.sheenRoughnessMapUv),x.push(C.specularMapUv),x.push(C.specularColorMapUv),x.push(C.specularIntensityMapUv),x.push(C.transmissionMapUv),x.push(C.thicknessMapUv),x.push(C.combine),x.push(C.fogExp2),x.push(C.sizeAttenuation),x.push(C.morphTargetsCount),x.push(C.morphAttributeCount),x.push(C.numDirLights),x.push(C.numPointLights),x.push(C.numSpotLights),x.push(C.numSpotLightMaps),x.push(C.numHemiLights),x.push(C.numRectAreaLights),x.push(C.numDirLightShadows),x.push(C.numPointLightShadows),x.push(C.numSpotLightShadows),x.push(C.numSpotLightShadowsWithMaps),x.push(C.numLightProbes),x.push(C.shadowMapType),x.push(C.toneMapping),x.push(C.numClippingPlanes),x.push(C.numClipIntersection),x.push(C.depthPacking)}function M(x,C){o.disableAll(),C.isWebGL2&&o.enable(0),C.supportsVertexTextures&&o.enable(1),C.instancing&&o.enable(2),C.instancingColor&&o.enable(3),C.instancingMorph&&o.enable(4),C.matcap&&o.enable(5),C.envMap&&o.enable(6),C.normalMapObjectSpace&&o.enable(7),C.normalMapTangentSpace&&o.enable(8),C.clearcoat&&o.enable(9),C.iridescence&&o.enable(10),C.alphaTest&&o.enable(11),C.vertexColors&&o.enable(12),C.vertexAlphas&&o.enable(13),C.vertexUv1s&&o.enable(14),C.vertexUv2s&&o.enable(15),C.vertexUv3s&&o.enable(16),C.vertexTangents&&o.enable(17),C.anisotropy&&o.enable(18),C.alphaHash&&o.enable(19),C.batching&&o.enable(20),x.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.skinning&&o.enable(4),C.morphTargets&&o.enable(5),C.morphNormals&&o.enable(6),C.morphColors&&o.enable(7),C.premultipliedAlpha&&o.enable(8),C.shadowMapEnabled&&o.enable(9),C.useLegacyLights&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.alphaToCoverage&&o.enable(20),x.push(o.mask)}function R(x){const C=y[x.type];let K;if(C){const ee=Zn[C];K=BS.clone(ee.uniforms)}else K=x.uniforms;return K}function b(x,C){let K;for(let ee=0,I=d.length;ee<I;ee++){const Z=d[ee];if(Z.cacheKey===C){K=Z,++K.usedTimes;break}}return K===void 0&&(K=new iT(t,C,x,s),d.push(K)),K}function w(x){if(--x.usedTimes===0){const C=d.indexOf(x);d[C]=d[d.length-1],d.pop(),x.destroy()}}function N(x){l.remove(x)}function ie(){l.dispose()}return{getParameters:u,getProgramCacheKey:v,getUniforms:R,acquireProgram:b,releaseProgram:w,releaseShaderCache:N,programs:d,dispose:ie}}function lT(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function cT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function dm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function fm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f,h,m,_,y,p){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:h,material:m,groupOrder:_,renderOrder:f.renderOrder,z:y,group:p},t[e]=u):(u.id=f.id,u.object=f,u.geometry=h,u.material=m,u.groupOrder=_,u.renderOrder=f.renderOrder,u.z=y,u.group=p),e++,u}function o(f,h,m,_,y,p){const u=a(f,h,m,_,y,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):n.push(u)}function l(f,h,m,_,y,p){const u=a(f,h,m,_,y,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,h){n.length>1&&n.sort(f||cT),i.length>1&&i.sort(h||dm),r.length>1&&r.sort(h||dm)}function d(){for(let f=e,h=t.length;f<h;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:d,sort:c}}function uT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new fm,t.set(i,[a])):r>=s.length?(a=new fm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function dT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new U,color:new it};break;case"SpotLight":n={position:new U,direction:new U,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new U,color:new it,distance:0,decay:0};break;case"HemisphereLight":n={direction:new U,skyColor:new it,groundColor:new it};break;case"RectAreaLight":n={color:new it,position:new U,halfWidth:new U,halfHeight:new U};break}return t[e.id]=n,n}}}function fT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let hT=0;function pT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function mT(t,e){const n=new dT,i=fT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new U);const s=new U,a=new ct,o=new ct;function l(d,f){let h=0,m=0,_=0;for(let K=0;K<9;K++)r.probe[K].set(0,0,0);let y=0,p=0,u=0,v=0,g=0,M=0,R=0,b=0,w=0,N=0,ie=0;d.sort(pT);const x=f===!0?Math.PI:1;for(let K=0,ee=d.length;K<ee;K++){const I=d[K],Z=I.color,k=I.intensity,V=I.distance,D=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=Z.r*k*x,m+=Z.g*k*x,_+=Z.b*k*x;else if(I.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(I.sh.coefficients[F],k);ie++}else if(I.isDirectionalLight){const F=n.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity*x),I.castShadow){const O=I.shadow,Y=i.get(I);Y.shadowBias=O.bias,Y.shadowNormalBias=O.normalBias,Y.shadowRadius=O.radius,Y.shadowMapSize=O.mapSize,r.directionalShadow[y]=Y,r.directionalShadowMap[y]=D,r.directionalShadowMatrix[y]=I.shadow.matrix,M++}r.directional[y]=F,y++}else if(I.isSpotLight){const F=n.get(I);F.position.setFromMatrixPosition(I.matrixWorld),F.color.copy(Z).multiplyScalar(k*x),F.distance=V,F.coneCos=Math.cos(I.angle),F.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),F.decay=I.decay,r.spot[u]=F;const O=I.shadow;if(I.map&&(r.spotLightMap[w]=I.map,w++,O.updateMatrices(I),I.castShadow&&N++),r.spotLightMatrix[u]=O.matrix,I.castShadow){const Y=i.get(I);Y.shadowBias=O.bias,Y.shadowNormalBias=O.normalBias,Y.shadowRadius=O.radius,Y.shadowMapSize=O.mapSize,r.spotShadow[u]=Y,r.spotShadowMap[u]=D,b++}u++}else if(I.isRectAreaLight){const F=n.get(I);F.color.copy(Z).multiplyScalar(k),F.halfWidth.set(I.width*.5,0,0),F.halfHeight.set(0,I.height*.5,0),r.rectArea[v]=F,v++}else if(I.isPointLight){const F=n.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity*x),F.distance=I.distance,F.decay=I.decay,I.castShadow){const O=I.shadow,Y=i.get(I);Y.shadowBias=O.bias,Y.shadowNormalBias=O.normalBias,Y.shadowRadius=O.radius,Y.shadowMapSize=O.mapSize,Y.shadowCameraNear=O.camera.near,Y.shadowCameraFar=O.camera.far,r.pointShadow[p]=Y,r.pointShadowMap[p]=D,r.pointShadowMatrix[p]=I.shadow.matrix,R++}r.point[p]=F,p++}else if(I.isHemisphereLight){const F=n.get(I);F.skyColor.copy(I.color).multiplyScalar(k*x),F.groundColor.copy(I.groundColor).multiplyScalar(k*x),r.hemi[g]=F,g++}}v>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Me.LTC_FLOAT_1,r.rectAreaLTC2=Me.LTC_FLOAT_2):(r.rectAreaLTC1=Me.LTC_HALF_1,r.rectAreaLTC2=Me.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Me.LTC_FLOAT_1,r.rectAreaLTC2=Me.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Me.LTC_HALF_1,r.rectAreaLTC2=Me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=_;const C=r.hash;(C.directionalLength!==y||C.pointLength!==p||C.spotLength!==u||C.rectAreaLength!==v||C.hemiLength!==g||C.numDirectionalShadows!==M||C.numPointShadows!==R||C.numSpotShadows!==b||C.numSpotMaps!==w||C.numLightProbes!==ie)&&(r.directional.length=y,r.spot.length=u,r.rectArea.length=v,r.point.length=p,r.hemi.length=g,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=b+w-N,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=ie,C.directionalLength=y,C.pointLength=p,C.spotLength=u,C.rectAreaLength=v,C.hemiLength=g,C.numDirectionalShadows=M,C.numPointShadows=R,C.numSpotShadows=b,C.numSpotMaps=w,C.numLightProbes=ie,r.version=hT++)}function c(d,f){let h=0,m=0,_=0,y=0,p=0;const u=f.matrixWorldInverse;for(let v=0,g=d.length;v<g;v++){const M=d[v];if(M.isDirectionalLight){const R=r.directional[h];R.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(u),h++}else if(M.isSpotLight){const R=r.spot[_];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(u),R.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(u),_++}else if(M.isRectAreaLight){const R=r.rectArea[y];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(u),o.identity(),a.copy(M.matrixWorld),a.premultiply(u),o.extractRotation(a),R.halfWidth.set(M.width*.5,0,0),R.halfHeight.set(0,M.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),y++}else if(M.isPointLight){const R=r.point[m];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(u),m++}else if(M.isHemisphereLight){const R=r.hemi[p];R.direction.setFromMatrixPosition(M.matrixWorld),R.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:r}}function hm(t,e){const n=new mT(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function gT(t,e){let n=new WeakMap;function i(s,a=0){const o=n.get(s);let l;return o===void 0?(l=new hm(t,e),n.set(s,[l])):a>=o.length?(l=new hm(t,e),o.push(l)):l=o[a],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class vT extends Br{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _T extends Br{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const xT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ST(t,e,n){let i=new Lf;const r=new Ne,s=new Ne,a=new mt,o=new vT({depthPacking:Qy}),l=new _T,c={},d=n.maxTextureSize,f={[er]:qt,[qt]:er,[Jn]:Jn},h=new tr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:xT,fragmentShader:yT}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new dn;_.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new en(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bf;let u=this.type;this.render=function(b,w,N){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const ie=t.getRenderTarget(),x=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),K=t.state;K.setBlending(Yi),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const ee=u!==li&&this.type===li,I=u===li&&this.type!==li;for(let Z=0,k=b.length;Z<k;Z++){const V=b[Z],D=V.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const F=D.getFrameExtents();if(r.multiply(F),s.copy(D.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/F.x),r.x=s.x*F.x,D.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/F.y),r.y=s.y*F.y,D.mapSize.y=s.y)),D.map===null||ee===!0||I===!0){const Y=this.type!==li?{minFilter:Jt,magFilter:Jt}:{};D.map!==null&&D.map.dispose(),D.map=new Ur(r.x,r.y,Y),D.map.texture.name=V.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const O=D.getViewportCount();for(let Y=0;Y<O;Y++){const de=D.getViewport(Y);a.set(s.x*de.x,s.y*de.y,s.x*de.z,s.y*de.w),K.viewport(a),D.updateMatrices(V,Y),i=D.getFrustum(),M(w,N,D.camera,V,this.type)}D.isPointLightShadow!==!0&&this.type===li&&v(D,N),D.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(ie,x,C)};function v(b,w){const N=e.update(y);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Ur(r.x,r.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(w,null,N,h,y,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(w,null,N,m,y,null)}function g(b,w,N,ie){let x=null;const C=N.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)x=C;else if(x=N.isPointLight===!0?l:o,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const K=x.uuid,ee=w.uuid;let I=c[K];I===void 0&&(I={},c[K]=I);let Z=I[ee];Z===void 0&&(Z=x.clone(),I[ee]=Z,w.addEventListener("dispose",R)),x=Z}if(x.visible=w.visible,x.wireframe=w.wireframe,ie===li?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:f[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,N.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const K=t.properties.get(x);K.light=N}return x}function M(b,w,N,ie,x){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===li)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,b.matrixWorld);const ee=e.update(b),I=b.material;if(Array.isArray(I)){const Z=ee.groups;for(let k=0,V=Z.length;k<V;k++){const D=Z[k],F=I[D.materialIndex];if(F&&F.visible){const O=g(b,F,ie,x);b.onBeforeShadow(t,b,w,N,ee,O,D),t.renderBufferDirect(N,null,ee,O,b,D),b.onAfterShadow(t,b,w,N,ee,O,D)}}}else if(I.visible){const Z=g(b,I,ie,x);b.onBeforeShadow(t,b,w,N,ee,Z,null),t.renderBufferDirect(N,null,ee,Z,b,null),b.onAfterShadow(t,b,w,N,ee,Z,null)}}const K=b.children;for(let ee=0,I=K.length;ee<I;ee++)M(K[ee],w,N,ie,x)}function R(b){b.target.removeEventListener("dispose",R);for(const N in c){const ie=c[N],x=b.target.uuid;x in ie&&(ie[x].dispose(),delete ie[x])}}}function MT(t,e,n){const i=n.isWebGL2;function r(){let L=!1;const oe=new mt;let z=null;const le=new mt(0,0,0,0);return{setMask:function(ue){z!==ue&&!L&&(t.colorMask(ue,ue,ue,ue),z=ue)},setLocked:function(ue){L=ue},setClear:function(ue,Le,We,Oe,je){je===!0&&(ue*=Oe,Le*=Oe,We*=Oe),oe.set(ue,Le,We,Oe),le.equals(oe)===!1&&(t.clearColor(ue,Le,We,Oe),le.copy(oe))},reset:function(){L=!1,z=null,le.set(-1,0,0,0)}}}function s(){let L=!1,oe=null,z=null,le=null;return{setTest:function(ue){ue?_e(t.DEPTH_TEST):ze(t.DEPTH_TEST)},setMask:function(ue){oe!==ue&&!L&&(t.depthMask(ue),oe=ue)},setFunc:function(ue){if(z!==ue){switch(ue){case by:t.depthFunc(t.NEVER);break;case Ay:t.depthFunc(t.ALWAYS);break;case Cy:t.depthFunc(t.LESS);break;case kl:t.depthFunc(t.LEQUAL);break;case Ry:t.depthFunc(t.EQUAL);break;case Py:t.depthFunc(t.GEQUAL);break;case Ly:t.depthFunc(t.GREATER);break;case Ny:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}z=ue}},setLocked:function(ue){L=ue},setClear:function(ue){le!==ue&&(t.clearDepth(ue),le=ue)},reset:function(){L=!1,oe=null,z=null,le=null}}}function a(){let L=!1,oe=null,z=null,le=null,ue=null,Le=null,We=null,Oe=null,je=null;return{setTest:function(ke){L||(ke?_e(t.STENCIL_TEST):ze(t.STENCIL_TEST))},setMask:function(ke){oe!==ke&&!L&&(t.stencilMask(ke),oe=ke)},setFunc:function(ke,tt,Rt){(z!==ke||le!==tt||ue!==Rt)&&(t.stencilFunc(ke,tt,Rt),z=ke,le=tt,ue=Rt)},setOp:function(ke,tt,Rt){(Le!==ke||We!==tt||Oe!==Rt)&&(t.stencilOp(ke,tt,Rt),Le=ke,We=tt,Oe=Rt)},setLocked:function(ke){L=ke},setClear:function(ke){je!==ke&&(t.clearStencil(ke),je=ke)},reset:function(){L=!1,oe=null,z=null,le=null,ue=null,Le=null,We=null,Oe=null,je=null}}}const o=new r,l=new s,c=new a,d=new WeakMap,f=new WeakMap;let h={},m={},_=new WeakMap,y=[],p=null,u=!1,v=null,g=null,M=null,R=null,b=null,w=null,N=null,ie=new it(0,0,0),x=0,C=!1,K=null,ee=null,I=null,Z=null,k=null;const V=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,F=0;const O=t.getParameter(t.VERSION);O.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(O)[1]),D=F>=1):O.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),D=F>=2);let Y=null,de={};const be=t.getParameter(t.SCISSOR_BOX),X=t.getParameter(t.VIEWPORT),q=new mt().fromArray(be),ne=new mt().fromArray(X);function Ee(L,oe,z,le){const ue=new Uint8Array(4),Le=t.createTexture();t.bindTexture(L,Le),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let We=0;We<z;We++)i&&(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)?t.texImage3D(oe,0,t.RGBA,1,1,le,0,t.RGBA,t.UNSIGNED_BYTE,ue):t.texImage2D(oe+We,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ue);return Le}const Se={};Se[t.TEXTURE_2D]=Ee(t.TEXTURE_2D,t.TEXTURE_2D,1),Se[t.TEXTURE_CUBE_MAP]=Ee(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Se[t.TEXTURE_2D_ARRAY]=Ee(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Se[t.TEXTURE_3D]=Ee(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),_e(t.DEPTH_TEST),l.setFunc(kl),Ge(!1),De($h),_e(t.CULL_FACE),ve(Yi);function _e(L){h[L]!==!0&&(t.enable(L),h[L]=!0)}function ze(L){h[L]!==!1&&(t.disable(L),h[L]=!1)}function Pe(L,oe){return m[L]!==oe?(t.bindFramebuffer(L,oe),m[L]=oe,i&&(L===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=oe),L===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=oe)),!0):!1}function H(L,oe){let z=y,le=!1;if(L){z=_.get(oe),z===void 0&&(z=[],_.set(oe,z));const ue=L.textures;if(z.length!==ue.length||z[0]!==t.COLOR_ATTACHMENT0){for(let Le=0,We=ue.length;Le<We;Le++)z[Le]=t.COLOR_ATTACHMENT0+Le;z.length=ue.length,le=!0}}else z[0]!==t.BACK&&(z[0]=t.BACK,le=!0);if(le)if(n.isWebGL2)t.drawBuffers(z);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(z);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function ot(L){return p!==L?(t.useProgram(L),p=L,!0):!1}const Re={[xr]:t.FUNC_ADD,[dy]:t.FUNC_SUBTRACT,[fy]:t.FUNC_REVERSE_SUBTRACT};if(i)Re[Zh]=t.MIN,Re[Qh]=t.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(Re[Zh]=L.MIN_EXT,Re[Qh]=L.MAX_EXT)}const He={[hy]:t.ZERO,[py]:t.ONE,[my]:t.SRC_COLOR,[xd]:t.SRC_ALPHA,[Sy]:t.SRC_ALPHA_SATURATE,[xy]:t.DST_COLOR,[vy]:t.DST_ALPHA,[gy]:t.ONE_MINUS_SRC_COLOR,[yd]:t.ONE_MINUS_SRC_ALPHA,[yy]:t.ONE_MINUS_DST_COLOR,[_y]:t.ONE_MINUS_DST_ALPHA,[My]:t.CONSTANT_COLOR,[Ey]:t.ONE_MINUS_CONSTANT_COLOR,[wy]:t.CONSTANT_ALPHA,[Ty]:t.ONE_MINUS_CONSTANT_ALPHA};function ve(L,oe,z,le,ue,Le,We,Oe,je,ke){if(L===Yi){u===!0&&(ze(t.BLEND),u=!1);return}if(u===!1&&(_e(t.BLEND),u=!0),L!==uy){if(L!==v||ke!==C){if((g!==xr||b!==xr)&&(t.blendEquation(t.FUNC_ADD),g=xr,b=xr),ke)switch(L){case Ds:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case _d:t.blendFunc(t.ONE,t.ONE);break;case Yh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Kh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ds:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case _d:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Yh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Kh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}M=null,R=null,w=null,N=null,ie.set(0,0,0),x=0,v=L,C=ke}return}ue=ue||oe,Le=Le||z,We=We||le,(oe!==g||ue!==b)&&(t.blendEquationSeparate(Re[oe],Re[ue]),g=oe,b=ue),(z!==M||le!==R||Le!==w||We!==N)&&(t.blendFuncSeparate(He[z],He[le],He[Le],He[We]),M=z,R=le,w=Le,N=We),(Oe.equals(ie)===!1||je!==x)&&(t.blendColor(Oe.r,Oe.g,Oe.b,je),ie.copy(Oe),x=je),v=L,C=!1}function Ue(L,oe){L.side===Jn?ze(t.CULL_FACE):_e(t.CULL_FACE);let z=L.side===qt;oe&&(z=!z),Ge(z),L.blending===Ds&&L.transparent===!1?ve(Yi):ve(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);const le=L.stencilWrite;c.setTest(le),le&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),P(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?_e(t.SAMPLE_ALPHA_TO_COVERAGE):ze(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(L){K!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),K=L)}function De(L){L!==oy?(_e(t.CULL_FACE),L!==ee&&(L===$h?t.cullFace(t.BACK):L===ly?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ze(t.CULL_FACE),ee=L}function qe(L){L!==I&&(D&&t.lineWidth(L),I=L)}function P(L,oe,z){L?(_e(t.POLYGON_OFFSET_FILL),(Z!==oe||k!==z)&&(t.polygonOffset(oe,z),Z=oe,k=z)):ze(t.POLYGON_OFFSET_FILL)}function E(L){L?_e(t.SCISSOR_TEST):ze(t.SCISSOR_TEST)}function te(L){L===void 0&&(L=t.TEXTURE0+V-1),Y!==L&&(t.activeTexture(L),Y=L)}function se(L,oe,z){z===void 0&&(Y===null?z=t.TEXTURE0+V-1:z=Y);let le=de[z];le===void 0&&(le={type:void 0,texture:void 0},de[z]=le),(le.type!==L||le.texture!==oe)&&(Y!==z&&(t.activeTexture(z),Y=z),t.bindTexture(L,oe||Se[L]),le.type=L,le.texture=oe)}function me(){const L=de[Y];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function fe(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ve(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Fe(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function we(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function W(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function B(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ye(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ce(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(L){q.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),q.copy(L))}function ae(L){ne.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),ne.copy(L))}function T(L,oe){let z=f.get(oe);z===void 0&&(z=new WeakMap,f.set(oe,z));let le=z.get(L);le===void 0&&(le=t.getUniformBlockIndex(oe,L.name),z.set(L,le))}function j(L,oe){const le=f.get(oe).get(L);d.get(oe)!==le&&(t.uniformBlockBinding(oe,le,L.__bindingPointIndex),d.set(oe,le))}function pe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},Y=null,de={},m={},_=new WeakMap,y=[],p=null,u=!1,v=null,g=null,M=null,R=null,b=null,w=null,N=null,ie=new it(0,0,0),x=0,C=!1,K=null,ee=null,I=null,Z=null,k=null,q.set(0,0,t.canvas.width,t.canvas.height),ne.set(0,0,t.canvas.width,t.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:_e,disable:ze,bindFramebuffer:Pe,drawBuffers:H,useProgram:ot,setBlending:ve,setMaterial:Ue,setFlipSided:Ge,setCullFace:De,setLineWidth:qe,setPolygonOffset:P,setScissorTest:E,activeTexture:te,bindTexture:se,unbindTexture:me,compressedTexImage2D:fe,compressedTexImage3D:Ve,texImage2D:he,texImage3D:ce,updateUBOMapping:T,uniformBlockBinding:j,texStorage2D:B,texStorage3D:ye,texSubImage2D:Fe,texSubImage3D:xe,compressedTexSubImage2D:we,compressedTexSubImage3D:W,scissor:re,viewport:ae,reset:pe}}function ET(t,e,n,i,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Ne,f=new WeakMap;let h;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(P,E){return _?new OffscreenCanvas(P,E):Ya("canvas")}function p(P,E,te,se){let me=1;const fe=qe(P);if((fe.width>se||fe.height>se)&&(me=se/Math.max(fe.width,fe.height)),me<1||E===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Ve=E?Vl:Math.floor,Fe=Ve(me*fe.width),xe=Ve(me*fe.height);h===void 0&&(h=y(Fe,xe));const we=te?y(Fe,xe):h;return we.width=Fe,we.height=xe,we.getContext("2d").drawImage(P,0,0,Fe,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+Fe+"x"+xe+")."),we}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),P;return P}function u(P){const E=qe(P);return bd(E.width)&&bd(E.height)}function v(P){return o?!1:P.wrapS!==zn||P.wrapT!==zn||P.minFilter!==Jt&&P.minFilter!==Ft}function g(P,E){return P.generateMipmaps&&E&&P.minFilter!==Jt&&P.minFilter!==Ft}function M(P){t.generateMipmap(P)}function R(P,E,te,se,me=!1){if(o===!1)return E;if(P!==null){if(t[P]!==void 0)return t[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let fe=E;if(E===t.RED&&(te===t.FLOAT&&(fe=t.R32F),te===t.HALF_FLOAT&&(fe=t.R16F),te===t.UNSIGNED_BYTE&&(fe=t.R8)),E===t.RED_INTEGER&&(te===t.UNSIGNED_BYTE&&(fe=t.R8UI),te===t.UNSIGNED_SHORT&&(fe=t.R16UI),te===t.UNSIGNED_INT&&(fe=t.R32UI),te===t.BYTE&&(fe=t.R8I),te===t.SHORT&&(fe=t.R16I),te===t.INT&&(fe=t.R32I)),E===t.RG&&(te===t.FLOAT&&(fe=t.RG32F),te===t.HALF_FLOAT&&(fe=t.RG16F),te===t.UNSIGNED_BYTE&&(fe=t.RG8)),E===t.RG_INTEGER&&(te===t.UNSIGNED_BYTE&&(fe=t.RG8UI),te===t.UNSIGNED_SHORT&&(fe=t.RG16UI),te===t.UNSIGNED_INT&&(fe=t.RG32UI),te===t.BYTE&&(fe=t.RG8I),te===t.SHORT&&(fe=t.RG16I),te===t.INT&&(fe=t.RG32I)),E===t.RGBA){const Ve=me?zl:at.getTransfer(se);te===t.FLOAT&&(fe=t.RGBA32F),te===t.HALF_FLOAT&&(fe=t.RGBA16F),te===t.UNSIGNED_BYTE&&(fe=Ve===dt?t.SRGB8_ALPHA8:t.RGBA8),te===t.UNSIGNED_SHORT_4_4_4_4&&(fe=t.RGBA4),te===t.UNSIGNED_SHORT_5_5_5_1&&(fe=t.RGB5_A1)}return(fe===t.R16F||fe===t.R32F||fe===t.RG16F||fe===t.RG32F||fe===t.RGBA16F||fe===t.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function b(P,E,te){return g(P,te)===!0||P.isFramebufferTexture&&P.minFilter!==Jt&&P.minFilter!==Ft?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function w(P){return P===Jt||P===Jh||P===sa?t.NEAREST:t.LINEAR}function N(P){const E=P.target;E.removeEventListener("dispose",N),x(E),E.isVideoTexture&&f.delete(E)}function ie(P){const E=P.target;E.removeEventListener("dispose",ie),K(E)}function x(P){const E=i.get(P);if(E.__webglInit===void 0)return;const te=P.source,se=m.get(te);if(se){const me=se[E.__cacheKey];me.usedTimes--,me.usedTimes===0&&C(P),Object.keys(se).length===0&&m.delete(te)}i.remove(P)}function C(P){const E=i.get(P);t.deleteTexture(E.__webglTexture);const te=P.source,se=m.get(te);delete se[E.__cacheKey],a.memory.textures--}function K(P){const E=i.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(E.__webglFramebuffer[se]))for(let me=0;me<E.__webglFramebuffer[se].length;me++)t.deleteFramebuffer(E.__webglFramebuffer[se][me]);else t.deleteFramebuffer(E.__webglFramebuffer[se]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[se])}else{if(Array.isArray(E.__webglFramebuffer))for(let se=0;se<E.__webglFramebuffer.length;se++)t.deleteFramebuffer(E.__webglFramebuffer[se]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let se=0;se<E.__webglColorRenderbuffer.length;se++)E.__webglColorRenderbuffer[se]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[se]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const te=P.textures;for(let se=0,me=te.length;se<me;se++){const fe=i.get(te[se]);fe.__webglTexture&&(t.deleteTexture(fe.__webglTexture),a.memory.textures--),i.remove(te[se])}i.remove(P)}let ee=0;function I(){ee=0}function Z(){const P=ee;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),ee+=1,P}function k(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function V(P,E){const te=i.get(P);if(P.isVideoTexture&&Ge(P),P.isRenderTargetTexture===!1&&P.version>0&&te.__version!==P.version){const se=P.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(te,P,E);return}}n.bindTexture(t.TEXTURE_2D,te.__webglTexture,t.TEXTURE0+E)}function D(P,E){const te=i.get(P);if(P.version>0&&te.__version!==P.version){ne(te,P,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,te.__webglTexture,t.TEXTURE0+E)}function F(P,E){const te=i.get(P);if(P.version>0&&te.__version!==P.version){ne(te,P,E);return}n.bindTexture(t.TEXTURE_3D,te.__webglTexture,t.TEXTURE0+E)}function O(P,E){const te=i.get(P);if(P.version>0&&te.__version!==P.version){Ee(te,P,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture,t.TEXTURE0+E)}const Y={[Xa]:t.REPEAT,[zn]:t.CLAMP_TO_EDGE,[Ed]:t.MIRRORED_REPEAT},de={[Jt]:t.NEAREST,[Jh]:t.NEAREST_MIPMAP_NEAREST,[sa]:t.NEAREST_MIPMAP_LINEAR,[Ft]:t.LINEAR,[Vc]:t.LINEAR_MIPMAP_NEAREST,[Tr]:t.LINEAR_MIPMAP_LINEAR},be={[tS]:t.NEVER,[oS]:t.ALWAYS,[nS]:t.LESS,[nv]:t.LEQUAL,[iS]:t.EQUAL,[aS]:t.GEQUAL,[rS]:t.GREATER,[sS]:t.NOTEQUAL};function X(P,E,te){if(E.type===di&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Ft||E.magFilter===Vc||E.magFilter===sa||E.magFilter===Tr||E.minFilter===Ft||E.minFilter===Vc||E.minFilter===sa||E.minFilter===Tr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),te?(t.texParameteri(P,t.TEXTURE_WRAP_S,Y[E.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,Y[E.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,Y[E.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,de[E.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,de[E.minFilter])):(t.texParameteri(P,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(P,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(E.wrapS!==zn||E.wrapT!==zn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(P,t.TEXTURE_MAG_FILTER,w(E.magFilter)),t.texParameteri(P,t.TEXTURE_MIN_FILTER,w(E.minFilter)),E.minFilter!==Jt&&E.minFilter!==Ft&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,be[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Jt||E.minFilter!==sa&&E.minFilter!==Tr||E.type===di&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===qa&&e.has("OES_texture_half_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const se=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function q(P,E){let te=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",N));const se=E.source;let me=m.get(se);me===void 0&&(me={},m.set(se,me));const fe=k(E);if(fe!==P.__cacheKey){me[fe]===void 0&&(me[fe]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,te=!0),me[fe].usedTimes++;const Ve=me[P.__cacheKey];Ve!==void 0&&(me[P.__cacheKey].usedTimes--,Ve.usedTimes===0&&C(E)),P.__cacheKey=fe,P.__webglTexture=me[fe].texture}return te}function ne(P,E,te){let se=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(se=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(se=t.TEXTURE_3D);const me=q(P,E),fe=E.source;n.bindTexture(se,P.__webglTexture,t.TEXTURE0+te);const Ve=i.get(fe);if(fe.version!==Ve.__version||me===!0){n.activeTexture(t.TEXTURE0+te);const Fe=at.getPrimaries(at.workingColorSpace),xe=E.colorSpace===Oi?null:at.getPrimaries(E.colorSpace),we=E.colorSpace===Oi||Fe===xe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const W=v(E)&&u(E.image)===!1;let B=p(E.image,W,!1,r.maxTextureSize);B=De(E,B);const ye=u(B)||o,he=s.convert(E.format,E.colorSpace);let ce=s.convert(E.type),re=R(E.internalFormat,he,ce,E.colorSpace,E.isVideoTexture);X(se,E,ye);let ae;const T=E.mipmaps,j=o&&E.isVideoTexture!==!0&&re!==tv,pe=Ve.__version===void 0||me===!0,L=fe.dataReady,oe=b(E,B,ye);if(E.isDepthTexture)re=t.DEPTH_COMPONENT,o?E.type===di?re=t.DEPTH_COMPONENT32F:E.type===Bi?re=t.DEPTH_COMPONENT24:E.type===Cr?re=t.DEPTH24_STENCIL8:re=t.DEPTH_COMPONENT16:E.type===di&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Rr&&re===t.DEPTH_COMPONENT&&E.type!==Af&&E.type!==Bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Bi,ce=s.convert(E.type)),E.format===Ws&&re===t.DEPTH_COMPONENT&&(re=t.DEPTH_STENCIL,E.type!==Cr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Cr,ce=s.convert(E.type))),pe&&(j?n.texStorage2D(t.TEXTURE_2D,1,re,B.width,B.height):n.texImage2D(t.TEXTURE_2D,0,re,B.width,B.height,0,he,ce,null));else if(E.isDataTexture)if(T.length>0&&ye){j&&pe&&n.texStorage2D(t.TEXTURE_2D,oe,re,T[0].width,T[0].height);for(let z=0,le=T.length;z<le;z++)ae=T[z],j?L&&n.texSubImage2D(t.TEXTURE_2D,z,0,0,ae.width,ae.height,he,ce,ae.data):n.texImage2D(t.TEXTURE_2D,z,re,ae.width,ae.height,0,he,ce,ae.data);E.generateMipmaps=!1}else j?(pe&&n.texStorage2D(t.TEXTURE_2D,oe,re,B.width,B.height),L&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,B.width,B.height,he,ce,B.data)):n.texImage2D(t.TEXTURE_2D,0,re,B.width,B.height,0,he,ce,B.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){j&&pe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,oe,re,T[0].width,T[0].height,B.depth);for(let z=0,le=T.length;z<le;z++)ae=T[z],E.format!==Bn?he!==null?j?L&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,z,0,0,0,ae.width,ae.height,B.depth,he,ae.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,z,re,ae.width,ae.height,B.depth,0,ae.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?L&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,z,0,0,0,ae.width,ae.height,B.depth,he,ce,ae.data):n.texImage3D(t.TEXTURE_2D_ARRAY,z,re,ae.width,ae.height,B.depth,0,he,ce,ae.data)}else{j&&pe&&n.texStorage2D(t.TEXTURE_2D,oe,re,T[0].width,T[0].height);for(let z=0,le=T.length;z<le;z++)ae=T[z],E.format!==Bn?he!==null?j?L&&n.compressedTexSubImage2D(t.TEXTURE_2D,z,0,0,ae.width,ae.height,he,ae.data):n.compressedTexImage2D(t.TEXTURE_2D,z,re,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?L&&n.texSubImage2D(t.TEXTURE_2D,z,0,0,ae.width,ae.height,he,ce,ae.data):n.texImage2D(t.TEXTURE_2D,z,re,ae.width,ae.height,0,he,ce,ae.data)}else if(E.isDataArrayTexture)j?(pe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,oe,re,B.width,B.height,B.depth),L&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,B.width,B.height,B.depth,he,ce,B.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,re,B.width,B.height,B.depth,0,he,ce,B.data);else if(E.isData3DTexture)j?(pe&&n.texStorage3D(t.TEXTURE_3D,oe,re,B.width,B.height,B.depth),L&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,B.width,B.height,B.depth,he,ce,B.data)):n.texImage3D(t.TEXTURE_3D,0,re,B.width,B.height,B.depth,0,he,ce,B.data);else if(E.isFramebufferTexture){if(pe)if(j)n.texStorage2D(t.TEXTURE_2D,oe,re,B.width,B.height);else{let z=B.width,le=B.height;for(let ue=0;ue<oe;ue++)n.texImage2D(t.TEXTURE_2D,ue,re,z,le,0,he,ce,null),z>>=1,le>>=1}}else if(T.length>0&&ye){if(j&&pe){const z=qe(T[0]);n.texStorage2D(t.TEXTURE_2D,oe,re,z.width,z.height)}for(let z=0,le=T.length;z<le;z++)ae=T[z],j?L&&n.texSubImage2D(t.TEXTURE_2D,z,0,0,he,ce,ae):n.texImage2D(t.TEXTURE_2D,z,re,he,ce,ae);E.generateMipmaps=!1}else if(j){if(pe){const z=qe(B);n.texStorage2D(t.TEXTURE_2D,oe,re,z.width,z.height)}L&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,he,ce,B)}else n.texImage2D(t.TEXTURE_2D,0,re,he,ce,B);g(E,ye)&&M(se),Ve.__version=fe.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Ee(P,E,te){if(E.image.length!==6)return;const se=q(P,E),me=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+te);const fe=i.get(me);if(me.version!==fe.__version||se===!0){n.activeTexture(t.TEXTURE0+te);const Ve=at.getPrimaries(at.workingColorSpace),Fe=E.colorSpace===Oi?null:at.getPrimaries(E.colorSpace),xe=E.colorSpace===Oi||Ve===Fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const we=E.isCompressedTexture||E.image[0].isCompressedTexture,W=E.image[0]&&E.image[0].isDataTexture,B=[];for(let z=0;z<6;z++)!we&&!W?B[z]=p(E.image[z],!1,!0,r.maxCubemapSize):B[z]=W?E.image[z].image:E.image[z],B[z]=De(E,B[z]);const ye=B[0],he=u(ye)||o,ce=s.convert(E.format,E.colorSpace),re=s.convert(E.type),ae=R(E.internalFormat,ce,re,E.colorSpace),T=o&&E.isVideoTexture!==!0,j=fe.__version===void 0||se===!0,pe=me.dataReady;let L=b(E,ye,he);X(t.TEXTURE_CUBE_MAP,E,he);let oe;if(we){T&&j&&n.texStorage2D(t.TEXTURE_CUBE_MAP,L,ae,ye.width,ye.height);for(let z=0;z<6;z++){oe=B[z].mipmaps;for(let le=0;le<oe.length;le++){const ue=oe[le];E.format!==Bn?ce!==null?T?pe&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,le,0,0,ue.width,ue.height,ce,ue.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,le,ae,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):T?pe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,le,0,0,ue.width,ue.height,ce,re,ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,le,ae,ue.width,ue.height,0,ce,re,ue.data)}}}else{if(oe=E.mipmaps,T&&j){oe.length>0&&L++;const z=qe(B[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,L,ae,z.width,z.height)}for(let z=0;z<6;z++)if(W){T?pe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,B[z].width,B[z].height,ce,re,B[z].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,ae,B[z].width,B[z].height,0,ce,re,B[z].data);for(let le=0;le<oe.length;le++){const Le=oe[le].image[z].image;T?pe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,le+1,0,0,Le.width,Le.height,ce,re,Le.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,le+1,ae,Le.width,Le.height,0,ce,re,Le.data)}}else{T?pe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,ce,re,B[z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,ae,ce,re,B[z]);for(let le=0;le<oe.length;le++){const ue=oe[le];T?pe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,le+1,0,0,ce,re,ue.image[z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,le+1,ae,ce,re,ue.image[z])}}}g(E,he)&&M(t.TEXTURE_CUBE_MAP),fe.__version=me.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Se(P,E,te,se,me,fe){const Ve=s.convert(te.format,te.colorSpace),Fe=s.convert(te.type),xe=R(te.internalFormat,Ve,Fe,te.colorSpace);if(!i.get(E).__hasExternalTextures){const W=Math.max(1,E.width>>fe),B=Math.max(1,E.height>>fe);me===t.TEXTURE_3D||me===t.TEXTURE_2D_ARRAY?n.texImage3D(me,fe,xe,W,B,E.depth,0,Ve,Fe,null):n.texImage2D(me,fe,xe,W,B,0,Ve,Fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),Ue(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,se,me,i.get(te).__webglTexture,0,ve(E)):(me===t.TEXTURE_2D||me>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,se,me,i.get(te).__webglTexture,fe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function _e(P,E,te){if(t.bindRenderbuffer(t.RENDERBUFFER,P),E.depthBuffer&&!E.stencilBuffer){let se=o===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(te||Ue(E)){const me=E.depthTexture;me&&me.isDepthTexture&&(me.type===di?se=t.DEPTH_COMPONENT32F:me.type===Bi&&(se=t.DEPTH_COMPONENT24));const fe=ve(E);Ue(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,se,E.width,E.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,se,E.width,E.height)}else t.renderbufferStorage(t.RENDERBUFFER,se,E.width,E.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,P)}else if(E.depthBuffer&&E.stencilBuffer){const se=ve(E);te&&Ue(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,se,t.DEPTH24_STENCIL8,E.width,E.height):Ue(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,se,t.DEPTH24_STENCIL8,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,P)}else{const se=E.textures;for(let me=0;me<se.length;me++){const fe=se[me],Ve=s.convert(fe.format,fe.colorSpace),Fe=s.convert(fe.type),xe=R(fe.internalFormat,Ve,Fe,fe.colorSpace),we=ve(E);te&&Ue(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,we,xe,E.width,E.height):Ue(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,we,xe,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,xe,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ze(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),V(E.depthTexture,0);const se=i.get(E.depthTexture).__webglTexture,me=ve(E);if(E.depthTexture.format===Rr)Ue(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0,me):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0);else if(E.depthTexture.format===Ws)Ue(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0,me):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Pe(P){const E=i.get(P),te=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");ze(E.__webglFramebuffer,P)}else if(te){E.__webglDepthbuffer=[];for(let se=0;se<6;se++)n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[se]),E.__webglDepthbuffer[se]=t.createRenderbuffer(),_e(E.__webglDepthbuffer[se],P,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=t.createRenderbuffer(),_e(E.__webglDepthbuffer,P,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function H(P,E,te){const se=i.get(P);E!==void 0&&Se(se.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),te!==void 0&&Pe(P)}function ot(P){const E=P.texture,te=i.get(P),se=i.get(E);P.addEventListener("dispose",ie);const me=P.textures,fe=P.isWebGLCubeRenderTarget===!0,Ve=me.length>1,Fe=u(P)||o;if(Ve||(se.__webglTexture===void 0&&(se.__webglTexture=t.createTexture()),se.__version=E.version,a.memory.textures++),fe){te.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(o&&E.mipmaps&&E.mipmaps.length>0){te.__webglFramebuffer[xe]=[];for(let we=0;we<E.mipmaps.length;we++)te.__webglFramebuffer[xe][we]=t.createFramebuffer()}else te.__webglFramebuffer[xe]=t.createFramebuffer()}else{if(o&&E.mipmaps&&E.mipmaps.length>0){te.__webglFramebuffer=[];for(let xe=0;xe<E.mipmaps.length;xe++)te.__webglFramebuffer[xe]=t.createFramebuffer()}else te.__webglFramebuffer=t.createFramebuffer();if(Ve)if(r.drawBuffers)for(let xe=0,we=me.length;xe<we;xe++){const W=i.get(me[xe]);W.__webglTexture===void 0&&(W.__webglTexture=t.createTexture(),a.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&P.samples>0&&Ue(P)===!1){te.__webglMultisampledFramebuffer=t.createFramebuffer(),te.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let xe=0;xe<me.length;xe++){const we=me[xe];te.__webglColorRenderbuffer[xe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,te.__webglColorRenderbuffer[xe]);const W=s.convert(we.format,we.colorSpace),B=s.convert(we.type),ye=R(we.internalFormat,W,B,we.colorSpace,P.isXRRenderTarget===!0),he=ve(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,he,ye,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,te.__webglColorRenderbuffer[xe])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(te.__webglDepthRenderbuffer=t.createRenderbuffer(),_e(te.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(fe){n.bindTexture(t.TEXTURE_CUBE_MAP,se.__webglTexture),X(t.TEXTURE_CUBE_MAP,E,Fe);for(let xe=0;xe<6;xe++)if(o&&E.mipmaps&&E.mipmaps.length>0)for(let we=0;we<E.mipmaps.length;we++)Se(te.__webglFramebuffer[xe][we],P,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we);else Se(te.__webglFramebuffer[xe],P,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);g(E,Fe)&&M(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ve){for(let xe=0,we=me.length;xe<we;xe++){const W=me[xe],B=i.get(W);n.bindTexture(t.TEXTURE_2D,B.__webglTexture),X(t.TEXTURE_2D,W,Fe),Se(te.__webglFramebuffer,P,W,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,0),g(W,Fe)&&M(t.TEXTURE_2D)}n.unbindTexture()}else{let xe=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(o?xe=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(xe,se.__webglTexture),X(xe,E,Fe),o&&E.mipmaps&&E.mipmaps.length>0)for(let we=0;we<E.mipmaps.length;we++)Se(te.__webglFramebuffer[we],P,E,t.COLOR_ATTACHMENT0,xe,we);else Se(te.__webglFramebuffer,P,E,t.COLOR_ATTACHMENT0,xe,0);g(E,Fe)&&M(xe),n.unbindTexture()}P.depthBuffer&&Pe(P)}function Re(P){const E=u(P)||o,te=P.textures;for(let se=0,me=te.length;se<me;se++){const fe=te[se];if(g(fe,E)){const Ve=P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Fe=i.get(fe).__webglTexture;n.bindTexture(Ve,Fe),M(Ve),n.unbindTexture()}}}function He(P){if(o&&P.samples>0&&Ue(P)===!1){const E=P.textures,te=P.width,se=P.height;let me=t.COLOR_BUFFER_BIT;const fe=[],Ve=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Fe=i.get(P),xe=E.length>1;if(xe)for(let we=0;we<E.length;we++)n.bindFramebuffer(t.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let we=0;we<E.length;we++){fe.push(t.COLOR_ATTACHMENT0+we),P.depthBuffer&&fe.push(Ve);const W=Fe.__ignoreDepthValues!==void 0?Fe.__ignoreDepthValues:!1;if(W===!1&&(P.depthBuffer&&(me|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&(me|=t.STENCIL_BUFFER_BIT)),xe&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Fe.__webglColorRenderbuffer[we]),W===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Ve]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Ve])),xe){const B=i.get(E[we]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,B,0)}t.blitFramebuffer(0,0,te,se,0,0,te,se,me,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,fe)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),xe)for(let we=0;we<E.length;we++){n.bindFramebuffer(t.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,Fe.__webglColorRenderbuffer[we]);const W=i.get(E[we]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,W,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}}function ve(P){return Math.min(r.maxSamples,P.samples)}function Ue(P){const E=i.get(P);return o&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ge(P){const E=a.render.frame;f.get(P)!==E&&(f.set(P,E),P.update())}function De(P,E){const te=P.colorSpace,se=P.format,me=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===Td||te!==sr&&te!==Oi&&(at.getTransfer(te)===dt?o===!1?e.has("EXT_sRGB")===!0&&se===Bn?(P.format=Td,P.minFilter=Ft,P.generateMipmaps=!1):E=av.sRGBToLinear(E):(se!==Bn||me!==Zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),E}function qe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(d.width=P.naturalWidth||P.width,d.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(d.width=P.displayWidth,d.height=P.displayHeight):(d.width=P.width,d.height=P.height),d}this.allocateTextureUnit=Z,this.resetTextureUnits=I,this.setTexture2D=V,this.setTexture2DArray=D,this.setTexture3D=F,this.setTextureCube=O,this.rebindTextures=H,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Ue}function wT(t,e,n){const i=n.isWebGL2;function r(s,a=Oi){let o;const l=at.getTransfer(a);if(s===Zi)return t.UNSIGNED_BYTE;if(s===K0)return t.UNSIGNED_SHORT_4_4_4_4;if(s===Z0)return t.UNSIGNED_SHORT_5_5_5_1;if(s===Vy)return t.BYTE;if(s===Wy)return t.SHORT;if(s===Af)return t.UNSIGNED_SHORT;if(s===Y0)return t.INT;if(s===Bi)return t.UNSIGNED_INT;if(s===di)return t.FLOAT;if(s===qa)return i?t.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===jy)return t.ALPHA;if(s===Bn)return t.RGBA;if(s===Xy)return t.LUMINANCE;if(s===qy)return t.LUMINANCE_ALPHA;if(s===Rr)return t.DEPTH_COMPONENT;if(s===Ws)return t.DEPTH_STENCIL;if(s===Td)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===$y)return t.RED;if(s===Q0)return t.RED_INTEGER;if(s===Yy)return t.RG;if(s===J0)return t.RG_INTEGER;if(s===ev)return t.RGBA_INTEGER;if(s===Wc||s===jc||s===Xc||s===qc)if(l===dt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Wc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===jc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Xc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===qc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Wc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===jc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Xc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===qc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ep||s===tp||s===np||s===ip)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===ep)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===tp)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===np)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ip)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===tv)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===rp||s===sp)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===rp)return l===dt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===sp)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ap||s===op||s===lp||s===cp||s===up||s===dp||s===fp||s===hp||s===pp||s===mp||s===gp||s===vp||s===_p||s===xp)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===ap)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===op)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===lp)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===cp)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===up)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===dp)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===fp)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===hp)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===pp)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===mp)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===gp)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===vp)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===_p)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===xp)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===$c||s===yp||s===Sp)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===$c)return l===dt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===yp)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Sp)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ky||s===Mp||s===Ep||s===wp)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===$c)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Mp)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ep)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===wp)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Cr?i?t.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class TT extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class bs extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bT={type:"move"};class xu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const y of e.hand.values()){const p=n.getJointPose(y,i),u=this._getHandJoint(c,y);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),m=.02,_=.005;c.inputState.pinching&&h>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bT)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new bs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const AT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,CT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class RT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new $t,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new tr({extensions:{fragDepth:!0},vertexShader:AT,fragmentShader:CT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new en(new cc(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class PT extends zr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,f=null,h=null,m=null,_=null;const y=new RT,p=n.getContextAttributes();let u=null,v=null;const g=[],M=[],R=new Ne;let b=null;const w=new vn;w.layers.enable(1),w.viewport=new mt;const N=new vn;N.layers.enable(2),N.viewport=new mt;const ie=[w,N],x=new TT;x.layers.enable(1),x.layers.enable(2);let C=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let q=g[X];return q===void 0&&(q=new xu,g[X]=q),q.getTargetRaySpace()},this.getControllerGrip=function(X){let q=g[X];return q===void 0&&(q=new xu,g[X]=q),q.getGripSpace()},this.getHand=function(X){let q=g[X];return q===void 0&&(q=new xu,g[X]=q),q.getHandSpace()};function ee(X){const q=M.indexOf(X.inputSource);if(q===-1)return;const ne=g[q];ne!==void 0&&(ne.update(X.inputSource,X.frame,c||a),ne.dispatchEvent({type:X.type,data:X.inputSource}))}function I(){r.removeEventListener("select",ee),r.removeEventListener("selectstart",ee),r.removeEventListener("selectend",ee),r.removeEventListener("squeeze",ee),r.removeEventListener("squeezestart",ee),r.removeEventListener("squeezeend",ee),r.removeEventListener("end",I),r.removeEventListener("inputsourceschange",Z);for(let X=0;X<g.length;X++){const q=M[X];q!==null&&(M[X]=null,g[X].disconnect(q))}C=null,K=null,y.reset(),e.setRenderTarget(u),m=null,h=null,f=null,r=null,v=null,be.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",ee),r.addEventListener("selectstart",ee),r.addEventListener("selectend",ee),r.addEventListener("squeeze",ee),r.addEventListener("squeezestart",ee),r.addEventListener("squeezeend",ee),r.addEventListener("end",I),r.addEventListener("inputsourceschange",Z),p.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,q),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new Ur(m.framebufferWidth,m.framebufferHeight,{format:Bn,type:Zi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let q=null,ne=null,Ee=null;p.depth&&(Ee=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,q=p.stencil?Ws:Rr,ne=p.stencil?Cr:Bi);const Se={colorFormat:n.RGBA8,depthFormat:Ee,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(Se),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new Ur(h.textureWidth,h.textureHeight,{format:Bn,type:Zi,depthTexture:new gv(h.textureWidth,h.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const _e=e.properties.get(v);_e.__ignoreDepthValues=h.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),be.setContext(r),be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function Z(X){for(let q=0;q<X.removed.length;q++){const ne=X.removed[q],Ee=M.indexOf(ne);Ee>=0&&(M[Ee]=null,g[Ee].disconnect(ne))}for(let q=0;q<X.added.length;q++){const ne=X.added[q];let Ee=M.indexOf(ne);if(Ee===-1){for(let _e=0;_e<g.length;_e++)if(_e>=M.length){M.push(ne),Ee=_e;break}else if(M[_e]===null){M[_e]=ne,Ee=_e;break}if(Ee===-1)break}const Se=g[Ee];Se&&Se.connect(ne)}}const k=new U,V=new U;function D(X,q,ne){k.setFromMatrixPosition(q.matrixWorld),V.setFromMatrixPosition(ne.matrixWorld);const Ee=k.distanceTo(V),Se=q.projectionMatrix.elements,_e=ne.projectionMatrix.elements,ze=Se[14]/(Se[10]-1),Pe=Se[14]/(Se[10]+1),H=(Se[9]+1)/Se[5],ot=(Se[9]-1)/Se[5],Re=(Se[8]-1)/Se[0],He=(_e[8]+1)/_e[0],ve=ze*Re,Ue=ze*He,Ge=Ee/(-Re+He),De=Ge*-Re;q.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(De),X.translateZ(Ge),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const qe=ze+Ge,P=Pe+Ge,E=ve-De,te=Ue+(Ee-De),se=H*Pe/P*qe,me=ot*Pe/P*qe;X.projectionMatrix.makePerspective(E,te,se,me,qe,P),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function F(X,q){q===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(q.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;y.texture!==null&&(X.near=y.depthNear,X.far=y.depthFar),x.near=N.near=w.near=X.near,x.far=N.far=w.far=X.far,(C!==x.near||K!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),C=x.near,K=x.far,w.near=C,w.far=K,N.near=C,N.far=K,w.updateProjectionMatrix(),N.updateProjectionMatrix(),X.updateProjectionMatrix());const q=X.parent,ne=x.cameras;F(x,q);for(let Ee=0;Ee<ne.length;Ee++)F(ne[Ee],q);ne.length===2?D(x,w,N):x.projectionMatrix.copy(w.projectionMatrix),O(X,x,q)};function O(X,q,ne){ne===null?X.matrix.copy(q.matrixWorld):(X.matrix.copy(ne.matrixWorld),X.matrix.invert(),X.matrix.multiply(q.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(q.projectionMatrix),X.projectionMatrixInverse.copy(q.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=$a*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(X){l=X,h!==null&&(h.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return y.texture!==null};let Y=null;function de(X,q){if(d=q.getViewerPose(c||a),_=q,d!==null){const ne=d.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let Ee=!1;ne.length!==x.cameras.length&&(x.cameras.length=0,Ee=!0);for(let _e=0;_e<ne.length;_e++){const ze=ne[_e];let Pe=null;if(m!==null)Pe=m.getViewport(ze);else{const ot=f.getViewSubImage(h,ze);Pe=ot.viewport,_e===0&&(e.setRenderTargetTextures(v,ot.colorTexture,h.ignoreDepthValues?void 0:ot.depthStencilTexture),e.setRenderTarget(v))}let H=ie[_e];H===void 0&&(H=new vn,H.layers.enable(_e),H.viewport=new mt,ie[_e]=H),H.matrix.fromArray(ze.transform.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale),H.projectionMatrix.fromArray(ze.projectionMatrix),H.projectionMatrixInverse.copy(H.projectionMatrix).invert(),H.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),_e===0&&(x.matrix.copy(H.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),Ee===!0&&x.cameras.push(H)}const Se=r.enabledFeatures;if(Se&&Se.includes("depth-sensing")){const _e=f.getDepthInformation(ne[0]);_e&&_e.isValid&&_e.texture&&y.init(e,_e,r.renderState)}}for(let ne=0;ne<g.length;ne++){const Ee=M[ne],Se=g[ne];Ee!==null&&Se!==void 0&&Se.update(Ee,q,c||a)}y.render(e,x),Y&&Y(X,q),q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:q}),_=null}const be=new mv;be.setAnimationLoop(de),this.setAnimationLoop=function(X){Y=X},this.dispose=function(){}}}const mr=new Si,LT=new ct;function NT(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,fv(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,v,g,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),f(p,u)):u.isMeshPhongMaterial?(s(p,u),d(p,u)):u.isMeshStandardMaterial?(s(p,u),h(p,u),u.isMeshPhysicalMaterial&&m(p,u,M)):u.isMeshMatcapMaterial?(s(p,u),_(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),y(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?l(p,u,v,g):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===qt&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===qt&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const v=e.get(u),g=v.envMap,M=v.envMapRotation;if(g&&(p.envMap.value=g,mr.copy(M),mr.x*=-1,mr.y*=-1,mr.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),p.envMapRotation.value.setFromMatrix4(LT.makeRotationFromEuler(mr)),p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const R=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*R,n(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,v,g){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*v,p.scale.value=g*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function d(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function f(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function h(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,v){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===qt&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,u){u.matcap&&(p.matcap.value=u.matcap)}function y(p,u){const v=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function DT(t,e,n,i){let r={},s={},a=[];const o=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,g){const M=g.program;i.uniformBlockBinding(v,M)}function c(v,g){let M=r[v.id];M===void 0&&(_(v),M=d(v),r[v.id]=M,v.addEventListener("dispose",p));const R=g.program;i.updateUBOMapping(v,R);const b=e.render.frame;s[v.id]!==b&&(h(v),s[v.id]=b)}function d(v){const g=f();v.__bindingPointIndex=g;const M=t.createBuffer(),R=v.__size,b=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,R,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,M),M}function f(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const g=r[v.id],M=v.uniforms,R=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let b=0,w=M.length;b<w;b++){const N=Array.isArray(M[b])?M[b]:[M[b]];for(let ie=0,x=N.length;ie<x;ie++){const C=N[ie];if(m(C,b,ie,R)===!0){const K=C.__offset,ee=Array.isArray(C.value)?C.value:[C.value];let I=0;for(let Z=0;Z<ee.length;Z++){const k=ee[Z],V=y(k);typeof k=="number"||typeof k=="boolean"?(C.__data[0]=k,t.bufferSubData(t.UNIFORM_BUFFER,K+I,C.__data)):k.isMatrix3?(C.__data[0]=k.elements[0],C.__data[1]=k.elements[1],C.__data[2]=k.elements[2],C.__data[3]=0,C.__data[4]=k.elements[3],C.__data[5]=k.elements[4],C.__data[6]=k.elements[5],C.__data[7]=0,C.__data[8]=k.elements[6],C.__data[9]=k.elements[7],C.__data[10]=k.elements[8],C.__data[11]=0):(k.toArray(C.__data,I),I+=V.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,K,C.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(v,g,M,R){const b=v.value,w=g+"_"+M;if(R[w]===void 0)return typeof b=="number"||typeof b=="boolean"?R[w]=b:R[w]=b.clone(),!0;{const N=R[w];if(typeof b=="number"||typeof b=="boolean"){if(N!==b)return R[w]=b,!0}else if(N.equals(b)===!1)return N.copy(b),!0}return!1}function _(v){const g=v.uniforms;let M=0;const R=16;for(let w=0,N=g.length;w<N;w++){const ie=Array.isArray(g[w])?g[w]:[g[w]];for(let x=0,C=ie.length;x<C;x++){const K=ie[x],ee=Array.isArray(K.value)?K.value:[K.value];for(let I=0,Z=ee.length;I<Z;I++){const k=ee[I],V=y(k),D=M%R;D!==0&&R-D<V.boundary&&(M+=R-D),K.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=M,M+=V.storage}}}const b=M%R;return b>0&&(M+=R-b),v.__size=M,v.__cache={},this}function y(v){const g={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function p(v){const g=v.target;g.removeEventListener("dispose",p);const M=a.indexOf(g.__bindingPointIndex);a.splice(M,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function u(){for(const v in r)t.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}class Mv{constructor(e={}){const{canvas:n=MS(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=a;const m=new Uint32Array(4),_=new Int32Array(4);let y=null,p=null;const u=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Yn,this._useLegacyLights=!1,this.toneMapping=Ki,this.toneMappingExposure=1;const g=this;let M=!1,R=0,b=0,w=null,N=-1,ie=null;const x=new mt,C=new mt;let K=null;const ee=new it(0);let I=0,Z=n.width,k=n.height,V=1,D=null,F=null;const O=new mt(0,0,Z,k),Y=new mt(0,0,Z,k);let de=!1;const be=new Lf;let X=!1,q=!1,ne=null;const Ee=new ct,Se=new Ne,_e=new U,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Pe(){return w===null?V:1}let H=i;function ot(A,G){for(let Q=0;Q<A.length;Q++){const J=A[Q],$=n.getContext(J,G);if($!==null)return $}return null}try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Tf}`),n.addEventListener("webglcontextlost",pe,!1),n.addEventListener("webglcontextrestored",L,!1),n.addEventListener("webglcontextcreationerror",oe,!1),H===null){const G=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&G.shift(),H=ot(G,A),H===null)throw ot(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Re,He,ve,Ue,Ge,De,qe,P,E,te,se,me,fe,Ve,Fe,xe,we,W,B,ye,he,ce,re,ae;function T(){Re=new z1(H),He=new N1(H,Re,e),Re.init(He),ce=new wT(H,Re,He),ve=new MT(H,Re,He),Ue=new G1(H),Ge=new lT,De=new ET(H,Re,ve,Ge,He,ce,Ue),qe=new I1(g),P=new k1(g),E=new qS(H,He),re=new P1(H,Re,E,He),te=new B1(H,E,Ue,re),se=new X1(H,te,E,Ue),B=new j1(H,He,De),xe=new D1(Ge),me=new oT(g,qe,P,Re,He,re,xe),fe=new NT(g,Ge),Ve=new uT,Fe=new gT(Re,He),W=new R1(g,qe,P,ve,se,h,l),we=new ST(g,se,He),ae=new DT(H,Ue,He,ve),ye=new L1(H,Re,Ue,He),he=new H1(H,Re,Ue,He),Ue.programs=me.programs,g.capabilities=He,g.extensions=Re,g.properties=Ge,g.renderLists=Ve,g.shadowMap=we,g.state=ve,g.info=Ue}T();const j=new PT(g,H);this.xr=j,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const A=Re.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Re.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(A){A!==void 0&&(V=A,this.setSize(Z,k,!1))},this.getSize=function(A){return A.set(Z,k)},this.setSize=function(A,G,Q=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=A,k=G,n.width=Math.floor(A*V),n.height=Math.floor(G*V),Q===!0&&(n.style.width=A+"px",n.style.height=G+"px"),this.setViewport(0,0,A,G)},this.getDrawingBufferSize=function(A){return A.set(Z*V,k*V).floor()},this.setDrawingBufferSize=function(A,G,Q){Z=A,k=G,V=Q,n.width=Math.floor(A*Q),n.height=Math.floor(G*Q),this.setViewport(0,0,A,G)},this.getCurrentViewport=function(A){return A.copy(x)},this.getViewport=function(A){return A.copy(O)},this.setViewport=function(A,G,Q,J){A.isVector4?O.set(A.x,A.y,A.z,A.w):O.set(A,G,Q,J),ve.viewport(x.copy(O).multiplyScalar(V).round())},this.getScissor=function(A){return A.copy(Y)},this.setScissor=function(A,G,Q,J){A.isVector4?Y.set(A.x,A.y,A.z,A.w):Y.set(A,G,Q,J),ve.scissor(C.copy(Y).multiplyScalar(V).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(A){ve.setScissorTest(de=A)},this.setOpaqueSort=function(A){D=A},this.setTransparentSort=function(A){F=A},this.getClearColor=function(A){return A.copy(W.getClearColor())},this.setClearColor=function(){W.setClearColor.apply(W,arguments)},this.getClearAlpha=function(){return W.getClearAlpha()},this.setClearAlpha=function(){W.setClearAlpha.apply(W,arguments)},this.clear=function(A=!0,G=!0,Q=!0){let J=0;if(A){let $=!1;if(w!==null){const Ae=w.texture.format;$=Ae===ev||Ae===J0||Ae===Q0}if($){const Ae=w.texture.type,Ie=Ae===Zi||Ae===Bi||Ae===Af||Ae===Cr||Ae===K0||Ae===Z0,Be=W.getClearColor(),Xe=W.getClearAlpha(),Je=Be.r,$e=Be.g,Ye=Be.b;Ie?(m[0]=Je,m[1]=$e,m[2]=Ye,m[3]=Xe,H.clearBufferuiv(H.COLOR,0,m)):(_[0]=Je,_[1]=$e,_[2]=Ye,_[3]=Xe,H.clearBufferiv(H.COLOR,0,_))}else J|=H.COLOR_BUFFER_BIT}G&&(J|=H.DEPTH_BUFFER_BIT),Q&&(J|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",pe,!1),n.removeEventListener("webglcontextrestored",L,!1),n.removeEventListener("webglcontextcreationerror",oe,!1),Ve.dispose(),Fe.dispose(),Ge.dispose(),qe.dispose(),P.dispose(),se.dispose(),re.dispose(),ae.dispose(),me.dispose(),j.dispose(),j.removeEventListener("sessionstart",je),j.removeEventListener("sessionend",ke),ne&&(ne.dispose(),ne=null),tt.stop()};function pe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const A=Ue.autoReset,G=we.enabled,Q=we.autoUpdate,J=we.needsUpdate,$=we.type;T(),Ue.autoReset=A,we.enabled=G,we.autoUpdate=Q,we.needsUpdate=J,we.type=$}function oe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function z(A){const G=A.target;G.removeEventListener("dispose",z),le(G)}function le(A){ue(A),Ge.remove(A)}function ue(A){const G=Ge.get(A).programs;G!==void 0&&(G.forEach(function(Q){me.releaseProgram(Q)}),A.isShaderMaterial&&me.releaseShaderCache(A))}this.renderBufferDirect=function(A,G,Q,J,$,Ae){G===null&&(G=ze);const Ie=$.isMesh&&$.matrixWorld.determinant()<0,Be=dc(A,G,Q,J,$);ve.setMaterial(J,Ie);let Xe=Q.index,Je=1;if(J.wireframe===!0){if(Xe=te.getWireframeAttribute(Q),Xe===void 0)return;Je=2}const $e=Q.drawRange,Ye=Q.attributes.position;let St=$e.start*Je,hn=($e.start+$e.count)*Je;Ae!==null&&(St=Math.max(St,Ae.start*Je),hn=Math.min(hn,(Ae.start+Ae.count)*Je)),Xe!==null?(St=Math.max(St,0),hn=Math.min(hn,Xe.count)):Ye!=null&&(St=Math.max(St,0),hn=Math.min(hn,Ye.count));const Lt=hn-St;if(Lt<0||Lt===1/0)return;re.setup($,J,Be,Q,Xe);let ni,gt=ye;if(Xe!==null&&(ni=E.get(Xe),gt=he,gt.setIndex(ni)),$.isMesh)J.wireframe===!0?(ve.setLineWidth(J.wireframeLinewidth*Pe()),gt.setMode(H.LINES)):gt.setMode(H.TRIANGLES);else if($.isLine){let Ke=J.linewidth;Ke===void 0&&(Ke=1),ve.setLineWidth(Ke*Pe()),$.isLineSegments?gt.setMode(H.LINES):$.isLineLoop?gt.setMode(H.LINE_LOOP):gt.setMode(H.LINE_STRIP)}else $.isPoints?gt.setMode(H.POINTS):$.isSprite&&gt.setMode(H.TRIANGLES);if($.isBatchedMesh)gt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else if($.isInstancedMesh)gt.renderInstances(St,Lt,$.count);else if(Q.isInstancedBufferGeometry){const Ke=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,hc=Math.min(Q.instanceCount,Ke);gt.renderInstances(St,Lt,hc)}else gt.render(St,Lt)};function Le(A,G,Q){A.transparent===!0&&A.side===Jn&&A.forceSinglePass===!1?(A.side=qt,A.needsUpdate=!0,ar(A,G,Q),A.side=er,A.needsUpdate=!0,ar(A,G,Q),A.side=Jn):ar(A,G,Q)}this.compile=function(A,G,Q=null){Q===null&&(Q=A),p=Fe.get(Q),p.init(),v.push(p),Q.traverseVisible(function($){$.isLight&&$.layers.test(G.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),A!==Q&&A.traverseVisible(function($){$.isLight&&$.layers.test(G.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),p.setupLights(g._useLegacyLights);const J=new Set;return A.traverse(function($){const Ae=$.material;if(Ae)if(Array.isArray(Ae))for(let Ie=0;Ie<Ae.length;Ie++){const Be=Ae[Ie];Le(Be,Q,$),J.add(Be)}else Le(Ae,Q,$),J.add(Ae)}),v.pop(),p=null,J},this.compileAsync=function(A,G,Q=null){const J=this.compile(A,G,Q);return new Promise($=>{function Ae(){if(J.forEach(function(Ie){Ge.get(Ie).currentProgram.isReady()&&J.delete(Ie)}),J.size===0){$(A);return}setTimeout(Ae,10)}Re.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let We=null;function Oe(A){We&&We(A)}function je(){tt.stop()}function ke(){tt.start()}const tt=new mv;tt.setAnimationLoop(Oe),typeof self<"u"&&tt.setContext(self),this.setAnimationLoop=function(A){We=A,j.setAnimationLoop(A),A===null?tt.stop():tt.start()},j.addEventListener("sessionstart",je),j.addEventListener("sessionend",ke),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(G),G=j.getCamera()),A.isScene===!0&&A.onBeforeRender(g,A,G,w),p=Fe.get(A,v.length),p.init(),v.push(p),Ee.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),be.setFromProjectionMatrix(Ee),q=this.localClippingEnabled,X=xe.init(this.clippingPlanes,q),y=Ve.get(A,u.length),y.init(),u.push(y),Rt(A,G,0,g.sortObjects),y.finish(),g.sortObjects===!0&&y.sort(D,F),this.info.render.frame++,X===!0&&xe.beginShadows();const Q=p.state.shadowsArray;if(we.render(Q,A,G),X===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1)&&W.render(y,A),p.setupLights(g._useLegacyLights),G.isArrayCamera){const J=G.cameras;for(let $=0,Ae=J.length;$<Ae;$++){const Ie=J[$];Pt(y,A,Ie,Ie.viewport)}}else Pt(y,A,G);w!==null&&(De.updateMultisampleRenderTarget(w),De.updateRenderTargetMipmap(w)),A.isScene===!0&&A.onAfterRender(g,A,G),re.resetDefaultState(),N=-1,ie=null,v.pop(),v.length>0?p=v[v.length-1]:p=null,u.pop(),u.length>0?y=u[u.length-1]:y=null};function Rt(A,G,Q,J){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)Q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||be.intersectsSprite(A)){J&&_e.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ee);const Ie=se.update(A),Be=A.material;Be.visible&&y.push(A,Ie,Be,Q,_e.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||be.intersectsObject(A))){const Ie=se.update(A),Be=A.material;if(J&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),_e.copy(A.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),_e.copy(Ie.boundingSphere.center)),_e.applyMatrix4(A.matrixWorld).applyMatrix4(Ee)),Array.isArray(Be)){const Xe=Ie.groups;for(let Je=0,$e=Xe.length;Je<$e;Je++){const Ye=Xe[Je],St=Be[Ye.materialIndex];St&&St.visible&&y.push(A,Ie,St,Q,_e.z,Ye)}}else Be.visible&&y.push(A,Ie,Be,Q,_e.z,null)}}const Ae=A.children;for(let Ie=0,Be=Ae.length;Ie<Be;Ie++)Rt(Ae[Ie],G,Q,J)}function Pt(A,G,Q,J){const $=A.opaque,Ae=A.transmissive,Ie=A.transparent;p.setupLightsView(Q),X===!0&&xe.setGlobalState(g.clippingPlanes,Q),Ae.length>0&&Hr($,Ae,G,Q),J&&ve.viewport(x.copy(J)),$.length>0&&Gr($,G,Q),Ae.length>0&&Gr(Ae,G,Q),Ie.length>0&&Gr(Ie,G,Q),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Hr(A,G,Q,J){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;const Ae=He.isWebGL2;ne===null&&(ne=new Ur(1,1,{generateMipmaps:!0,type:Re.has("EXT_color_buffer_half_float")?qa:Zi,minFilter:Tr,samples:Ae?4:0})),g.getDrawingBufferSize(Se),Ae?ne.setSize(Se.x,Se.y):ne.setSize(Vl(Se.x),Vl(Se.y));const Ie=g.getRenderTarget();g.setRenderTarget(ne),g.getClearColor(ee),I=g.getClearAlpha(),I<1&&g.setClearColor(16777215,.5),g.clear();const Be=g.toneMapping;g.toneMapping=Ki,Gr(A,Q,J),De.updateMultisampleRenderTarget(ne),De.updateRenderTargetMipmap(ne);let Xe=!1;for(let Je=0,$e=G.length;Je<$e;Je++){const Ye=G[Je],St=Ye.object,hn=Ye.geometry,Lt=Ye.material,ni=Ye.group;if(Lt.side===Jn&&St.layers.test(J.layers)){const gt=Lt.side;Lt.side=qt,Lt.needsUpdate=!0,so(St,Q,J,hn,Lt,ni),Lt.side=gt,Lt.needsUpdate=!0,Xe=!0}}Xe===!0&&(De.updateMultisampleRenderTarget(ne),De.updateRenderTargetMipmap(ne)),g.setRenderTarget(Ie),g.setClearColor(ee,I),g.toneMapping=Be}function Gr(A,G,Q){const J=G.isScene===!0?G.overrideMaterial:null;for(let $=0,Ae=A.length;$<Ae;$++){const Ie=A[$],Be=Ie.object,Xe=Ie.geometry,Je=J===null?Ie.material:J,$e=Ie.group;Be.layers.test(Q.layers)&&so(Be,G,Q,Xe,Je,$e)}}function so(A,G,Q,J,$,Ae){A.onBeforeRender(g,G,Q,J,$,Ae),A.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),$.onBeforeRender(g,G,Q,J,A,Ae),$.transparent===!0&&$.side===Jn&&$.forceSinglePass===!1?($.side=qt,$.needsUpdate=!0,g.renderBufferDirect(Q,G,J,$,A,Ae),$.side=er,$.needsUpdate=!0,g.renderBufferDirect(Q,G,J,$,A,Ae),$.side=Jn):g.renderBufferDirect(Q,G,J,$,A,Ae),A.onAfterRender(g,G,Q,J,$,Ae)}function ar(A,G,Q){G.isScene!==!0&&(G=ze);const J=Ge.get(A),$=p.state.lights,Ae=p.state.shadowsArray,Ie=$.state.version,Be=me.getParameters(A,$.state,Ae,G,Q),Xe=me.getProgramCacheKey(Be);let Je=J.programs;J.environment=A.isMeshStandardMaterial?G.environment:null,J.fog=G.fog,J.envMap=(A.isMeshStandardMaterial?P:qe).get(A.envMap||J.environment),J.envMapRotation=J.environment!==null&&A.envMap===null?G.environmentRotation:A.envMapRotation,Je===void 0&&(A.addEventListener("dispose",z),Je=new Map,J.programs=Je);let $e=Je.get(Xe);if($e!==void 0){if(J.currentProgram===$e&&J.lightsStateVersion===Ie)return or(A,Be),$e}else Be.uniforms=me.getUniforms(A),A.onBuild(Q,Be,g),A.onBeforeCompile(Be,g),$e=me.acquireProgram(Be,Xe),Je.set(Xe,$e),J.uniforms=Be.uniforms;const Ye=J.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ye.clippingPlanes=xe.uniform),or(A,Be),J.needsLights=Dv(A),J.lightsStateVersion=Ie,J.needsLights&&(Ye.ambientLightColor.value=$.state.ambient,Ye.lightProbe.value=$.state.probe,Ye.directionalLights.value=$.state.directional,Ye.directionalLightShadows.value=$.state.directionalShadow,Ye.spotLights.value=$.state.spot,Ye.spotLightShadows.value=$.state.spotShadow,Ye.rectAreaLights.value=$.state.rectArea,Ye.ltc_1.value=$.state.rectAreaLTC1,Ye.ltc_2.value=$.state.rectAreaLTC2,Ye.pointLights.value=$.state.point,Ye.pointLightShadows.value=$.state.pointShadow,Ye.hemisphereLights.value=$.state.hemi,Ye.directionalShadowMap.value=$.state.directionalShadowMap,Ye.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ye.spotShadowMap.value=$.state.spotShadowMap,Ye.spotLightMatrix.value=$.state.spotLightMatrix,Ye.spotLightMap.value=$.state.spotLightMap,Ye.pointShadowMap.value=$.state.pointShadowMap,Ye.pointShadowMatrix.value=$.state.pointShadowMatrix),J.currentProgram=$e,J.uniformsList=null,$e}function Ei(A){if(A.uniformsList===null){const G=A.currentProgram.getUniforms();A.uniformsList=fl.seqWithValue(G.seq,A.uniforms)}return A.uniformsList}function or(A,G){const Q=Ge.get(A);Q.outputColorSpace=G.outputColorSpace,Q.batching=G.batching,Q.instancing=G.instancing,Q.instancingColor=G.instancingColor,Q.instancingMorph=G.instancingMorph,Q.skinning=G.skinning,Q.morphTargets=G.morphTargets,Q.morphNormals=G.morphNormals,Q.morphColors=G.morphColors,Q.morphTargetsCount=G.morphTargetsCount,Q.numClippingPlanes=G.numClippingPlanes,Q.numIntersection=G.numClipIntersection,Q.vertexAlphas=G.vertexAlphas,Q.vertexTangents=G.vertexTangents,Q.toneMapping=G.toneMapping}function dc(A,G,Q,J,$){G.isScene!==!0&&(G=ze),De.resetTextureUnits();const Ae=G.fog,Ie=J.isMeshStandardMaterial?G.environment:null,Be=w===null?g.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:sr,Xe=(J.isMeshStandardMaterial?P:qe).get(J.envMap||Ie),Je=J.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,$e=!!Q.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ye=!!Q.morphAttributes.position,St=!!Q.morphAttributes.normal,hn=!!Q.morphAttributes.color;let Lt=Ki;J.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Lt=g.toneMapping);const ni=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,gt=ni!==void 0?ni.length:0,Ke=Ge.get(J),hc=p.state.lights;if(X===!0&&(q===!0||A!==ie)){const wn=A===ie&&J.id===N;xe.setState(J,A,wn)}let ht=!1;J.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==hc.state.version||Ke.outputColorSpace!==Be||$.isBatchedMesh&&Ke.batching===!1||!$.isBatchedMesh&&Ke.batching===!0||$.isInstancedMesh&&Ke.instancing===!1||!$.isInstancedMesh&&Ke.instancing===!0||$.isSkinnedMesh&&Ke.skinning===!1||!$.isSkinnedMesh&&Ke.skinning===!0||$.isInstancedMesh&&Ke.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ke.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ke.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ke.instancingMorph===!1&&$.morphTexture!==null||Ke.envMap!==Xe||J.fog===!0&&Ke.fog!==Ae||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==xe.numPlanes||Ke.numIntersection!==xe.numIntersection)||Ke.vertexAlphas!==Je||Ke.vertexTangents!==$e||Ke.morphTargets!==Ye||Ke.morphNormals!==St||Ke.morphColors!==hn||Ke.toneMapping!==Lt||He.isWebGL2===!0&&Ke.morphTargetsCount!==gt)&&(ht=!0):(ht=!0,Ke.__version=J.version);let lr=Ke.currentProgram;ht===!0&&(lr=ar(J,G,$));let Of=!1,Ks=!1,pc=!1;const Ht=lr.getUniforms(),cr=Ke.uniforms;if(ve.useProgram(lr.program)&&(Of=!0,Ks=!0,pc=!0),J.id!==N&&(N=J.id,Ks=!0),Of||ie!==A){Ht.setValue(H,"projectionMatrix",A.projectionMatrix),Ht.setValue(H,"viewMatrix",A.matrixWorldInverse);const wn=Ht.map.cameraPosition;wn!==void 0&&wn.setValue(H,_e.setFromMatrixPosition(A.matrixWorld)),He.logarithmicDepthBuffer&&Ht.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Ht.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),ie!==A&&(ie=A,Ks=!0,pc=!0)}if($.isSkinnedMesh){Ht.setOptional(H,$,"bindMatrix"),Ht.setOptional(H,$,"bindMatrixInverse");const wn=$.skeleton;wn&&(He.floatVertexTextures?(wn.boneTexture===null&&wn.computeBoneTexture(),Ht.setValue(H,"boneTexture",wn.boneTexture,De)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}$.isBatchedMesh&&(Ht.setOptional(H,$,"batchingTexture"),Ht.setValue(H,"batchingTexture",$._matricesTexture,De));const mc=Q.morphAttributes;if((mc.position!==void 0||mc.normal!==void 0||mc.color!==void 0&&He.isWebGL2===!0)&&B.update($,Q,lr),(Ks||Ke.receiveShadow!==$.receiveShadow)&&(Ke.receiveShadow=$.receiveShadow,Ht.setValue(H,"receiveShadow",$.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(cr.envMap.value=Xe,cr.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),Ks&&(Ht.setValue(H,"toneMappingExposure",g.toneMappingExposure),Ke.needsLights&&fc(cr,pc),Ae&&J.fog===!0&&fe.refreshFogUniforms(cr,Ae),fe.refreshMaterialUniforms(cr,J,V,k,ne),fl.upload(H,Ei(Ke),cr,De)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(fl.upload(H,Ei(Ke),cr,De),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Ht.setValue(H,"center",$.center),Ht.setValue(H,"modelViewMatrix",$.modelViewMatrix),Ht.setValue(H,"normalMatrix",$.normalMatrix),Ht.setValue(H,"modelMatrix",$.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const wn=J.uniformsGroups;for(let gc=0,Iv=wn.length;gc<Iv;gc++)if(He.isWebGL2){const kf=wn[gc];ae.update(kf,lr),ae.bind(kf,lr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return lr}function fc(A,G){A.ambientLightColor.needsUpdate=G,A.lightProbe.needsUpdate=G,A.directionalLights.needsUpdate=G,A.directionalLightShadows.needsUpdate=G,A.pointLights.needsUpdate=G,A.pointLightShadows.needsUpdate=G,A.spotLights.needsUpdate=G,A.spotLightShadows.needsUpdate=G,A.rectAreaLights.needsUpdate=G,A.hemisphereLights.needsUpdate=G}function Dv(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(A,G,Q){Ge.get(A.texture).__webglTexture=G,Ge.get(A.depthTexture).__webglTexture=Q;const J=Ge.get(A);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=Q===void 0,J.__autoAllocateDepthBuffer||Re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,G){const Q=Ge.get(A);Q.__webglFramebuffer=G,Q.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(A,G=0,Q=0){w=A,R=G,b=Q;let J=!0,$=null,Ae=!1,Ie=!1;if(A){const Xe=Ge.get(A);Xe.__useDefaultFramebuffer!==void 0?(ve.bindFramebuffer(H.FRAMEBUFFER,null),J=!1):Xe.__webglFramebuffer===void 0?De.setupRenderTarget(A):Xe.__hasExternalTextures&&De.rebindTextures(A,Ge.get(A.texture).__webglTexture,Ge.get(A.depthTexture).__webglTexture);const Je=A.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Ie=!0);const $e=Ge.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray($e[G])?$=$e[G][Q]:$=$e[G],Ae=!0):He.isWebGL2&&A.samples>0&&De.useMultisampledRTT(A)===!1?$=Ge.get(A).__webglMultisampledFramebuffer:Array.isArray($e)?$=$e[Q]:$=$e,x.copy(A.viewport),C.copy(A.scissor),K=A.scissorTest}else x.copy(O).multiplyScalar(V).floor(),C.copy(Y).multiplyScalar(V).floor(),K=de;if(ve.bindFramebuffer(H.FRAMEBUFFER,$)&&He.drawBuffers&&J&&ve.drawBuffers(A,$),ve.viewport(x),ve.scissor(C),ve.setScissorTest(K),Ae){const Xe=Ge.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+G,Xe.__webglTexture,Q)}else if(Ie){const Xe=Ge.get(A.texture),Je=G||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Xe.__webglTexture,Q||0,Je)}N=-1},this.readRenderTargetPixels=function(A,G,Q,J,$,Ae,Ie){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=Ge.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ie!==void 0&&(Be=Be[Ie]),Be){ve.bindFramebuffer(H.FRAMEBUFFER,Be);try{const Xe=A.texture,Je=Xe.format,$e=Xe.type;if(Je!==Bn&&ce.convert(Je)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ye=$e===qa&&(Re.has("EXT_color_buffer_half_float")||He.isWebGL2&&Re.has("EXT_color_buffer_float"));if($e!==Zi&&ce.convert($e)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!($e===di&&(He.isWebGL2||Re.has("OES_texture_float")||Re.has("WEBGL_color_buffer_float")))&&!Ye){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=A.width-J&&Q>=0&&Q<=A.height-$&&H.readPixels(G,Q,J,$,ce.convert(Je),ce.convert($e),Ae)}finally{const Xe=w!==null?Ge.get(w).__webglFramebuffer:null;ve.bindFramebuffer(H.FRAMEBUFFER,Xe)}}},this.copyFramebufferToTexture=function(A,G,Q=0){const J=Math.pow(2,-Q),$=Math.floor(G.image.width*J),Ae=Math.floor(G.image.height*J);De.setTexture2D(G,0),H.copyTexSubImage2D(H.TEXTURE_2D,Q,0,0,A.x,A.y,$,Ae),ve.unbindTexture()},this.copyTextureToTexture=function(A,G,Q,J=0){const $=G.image.width,Ae=G.image.height,Ie=ce.convert(Q.format),Be=ce.convert(Q.type);De.setTexture2D(Q,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Q.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Q.unpackAlignment),G.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,J,A.x,A.y,$,Ae,Ie,Be,G.image.data):G.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,J,A.x,A.y,G.mipmaps[0].width,G.mipmaps[0].height,Ie,G.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,J,A.x,A.y,Ie,Be,G.image),J===0&&Q.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),ve.unbindTexture()},this.copyTextureToTexture3D=function(A,G,Q,J,$=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ae=Math.round(A.max.x-A.min.x),Ie=Math.round(A.max.y-A.min.y),Be=A.max.z-A.min.z+1,Xe=ce.convert(J.format),Je=ce.convert(J.type);let $e;if(J.isData3DTexture)De.setTexture3D(J,0),$e=H.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)De.setTexture2DArray(J,0),$e=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,J.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,J.unpackAlignment);const Ye=H.getParameter(H.UNPACK_ROW_LENGTH),St=H.getParameter(H.UNPACK_IMAGE_HEIGHT),hn=H.getParameter(H.UNPACK_SKIP_PIXELS),Lt=H.getParameter(H.UNPACK_SKIP_ROWS),ni=H.getParameter(H.UNPACK_SKIP_IMAGES),gt=Q.isCompressedTexture?Q.mipmaps[$]:Q.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,gt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,gt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,A.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,A.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,A.min.z),Q.isDataTexture||Q.isData3DTexture?H.texSubImage3D($e,$,G.x,G.y,G.z,Ae,Ie,Be,Xe,Je,gt.data):J.isCompressedArrayTexture?H.compressedTexSubImage3D($e,$,G.x,G.y,G.z,Ae,Ie,Be,Xe,gt.data):H.texSubImage3D($e,$,G.x,G.y,G.z,Ae,Ie,Be,Xe,Je,gt),H.pixelStorei(H.UNPACK_ROW_LENGTH,Ye),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,St),H.pixelStorei(H.UNPACK_SKIP_PIXELS,hn),H.pixelStorei(H.UNPACK_SKIP_ROWS,Lt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,ni),$===0&&J.generateMipmaps&&H.generateMipmap($e),ve.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?De.setTextureCube(A,0):A.isData3DTexture?De.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?De.setTexture2DArray(A,0):De.setTexture2D(A,0),ve.unbindTexture()},this.resetState=function(){R=0,b=0,w=null,ve.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Cf?"display-p3":"srgb",n.unpackColorSpace=at.workingColorSpace===lc?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class IT extends Mv{}IT.prototype.isWebGL1Renderer=!0;class UT extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class FT{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=wd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=gi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return sv("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Kt=new U;class Wl{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)Kt.fromBufferAttribute(this,n),Kt.applyMatrix4(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Kt.fromBufferAttribute(this,n),Kt.applyNormalMatrix(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Kt.fromBufferAttribute(this,n),Kt.transformDirection(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=Hn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=rt(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Hn(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Hn(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Hn(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Hn(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=rt(n,this.array),i=rt(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=rt(n,this.array),i=rt(i,this.array),r=rt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=rt(n,this.array),i=rt(i,this.array),r=rt(r,this.array),s=rt(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new yn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Wl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class hl extends Br{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ls;const ua=new U,cs=new U,us=new U,ds=new Ne,da=new Ne,Ev=new ct,jo=new U,fa=new U,Xo=new U,pm=new Ne,yu=new Ne,mm=new Ne;class Su extends zt{constructor(e=new hl){if(super(),this.isSprite=!0,this.type="Sprite",ls===void 0){ls=new dn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new FT(n,5);ls.setIndex([0,1,2,0,2,3]),ls.setAttribute("position",new Wl(i,3,0,!1)),ls.setAttribute("uv",new Wl(i,2,3,!1))}this.geometry=ls,this.material=e,this.center=new Ne(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),cs.setFromMatrixScale(this.matrixWorld),Ev.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),us.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&cs.multiplyScalar(-us.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;qo(jo.set(-.5,-.5,0),us,a,cs,r,s),qo(fa.set(.5,-.5,0),us,a,cs,r,s),qo(Xo.set(.5,.5,0),us,a,cs,r,s),pm.set(0,0),yu.set(1,0),mm.set(1,1);let o=e.ray.intersectTriangle(jo,fa,Xo,!1,ua);if(o===null&&(qo(fa.set(-.5,.5,0),us,a,cs,r,s),yu.set(0,1),o=e.ray.intersectTriangle(jo,Xo,fa,!1,ua),o===null))return;const l=e.ray.origin.distanceTo(ua);l<e.near||l>e.far||n.push({distance:l,point:ua.clone(),uv:Gn.getInterpolation(ua,jo,fa,Xo,pm,yu,mm,new Ne),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function qo(t,e,n,i,r,s){ds.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(da.x=s*ds.x-r*ds.y,da.y=r*ds.x+s*ds.y):da.copy(ds),t.copy(e),t.x+=da.x,t.y+=da.y,t.applyMatrix4(Ev)}class wv extends Br{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new it(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const gm=new U,vm=new U,_m=new ct,Mu=new io,$o=new no;class OT extends zt{constructor(e=new dn,n=new wv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)gm.fromBufferAttribute(n,r-1),vm.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=gm.distanceTo(vm);e.setAttribute("lineDistance",new un(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$o.copy(i.boundingSphere),$o.applyMatrix4(r),$o.radius+=s,e.ray.intersectsSphere($o)===!1)return;_m.copy(r).invert(),Mu.copy(e.ray).applyMatrix4(_m);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new U,d=new U,f=new U,h=new U,m=this.isLineSegments?2:1,_=i.index,p=i.attributes.position;if(_!==null){const u=Math.max(0,a.start),v=Math.min(_.count,a.start+a.count);for(let g=u,M=v-1;g<M;g+=m){const R=_.getX(g),b=_.getX(g+1);if(c.fromBufferAttribute(p,R),d.fromBufferAttribute(p,b),Mu.distanceSqToSegment(c,d,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const N=e.ray.origin.distanceTo(h);N<e.near||N>e.far||n.push({distance:N,point:f.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,a.start),v=Math.min(p.count,a.start+a.count);for(let g=u,M=v-1;g<M;g+=m){if(c.fromBufferAttribute(p,g),d.fromBufferAttribute(p,g+1),Mu.distanceSqToSegment(c,d,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(h);b<e.near||b>e.far||n.push({distance:b,point:f.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}class Tv extends Br{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const xm=new ct,Cd=new io,Yo=new no,Ko=new U;class kT extends zt{constructor(e=new dn,n=new Tv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Yo.copy(i.boundingSphere),Yo.applyMatrix4(r),Yo.radius+=s,e.ray.intersectsSphere(Yo)===!1)return;xm.copy(r).invert(),Cd.copy(e.ray).applyMatrix4(xm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let _=h,y=m;_<y;_++){const p=c.getX(_);Ko.fromBufferAttribute(f,p),ym(Ko,p,l,r,e,n,this)}}else{const h=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let _=h,y=m;_<y;_++)Ko.fromBufferAttribute(f,_),ym(Ko,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ym(t,e,n,i,r,s,a){const o=Cd.distanceSqToPoint(t);if(o<n){const l=new U;Cd.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class Sm extends $t{constructor(e,n,i,r,s,a,o,l,c){super(e,n,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Df extends dn{constructor(e=[new Ne(0,-.5),new Ne(.5,0),new Ne(0,.5)],n=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:n,phiStart:i,phiLength:r},n=Math.floor(n),r=Ot(r,0,Math.PI*2);const s=[],a=[],o=[],l=[],c=[],d=1/n,f=new U,h=new Ne,m=new U,_=new U,y=new U;let p=0,u=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:p=e[v+1].x-e[v].x,u=e[v+1].y-e[v].y,m.x=u*1,m.y=-p,m.z=u*0,y.copy(m),m.normalize(),l.push(m.x,m.y,m.z);break;case e.length-1:l.push(y.x,y.y,y.z);break;default:p=e[v+1].x-e[v].x,u=e[v+1].y-e[v].y,m.x=u*1,m.y=-p,m.z=u*0,_.copy(m),m.x+=y.x,m.y+=y.y,m.z+=y.z,m.normalize(),l.push(m.x,m.y,m.z),y.copy(_)}for(let v=0;v<=n;v++){const g=i+v*d*r,M=Math.sin(g),R=Math.cos(g);for(let b=0;b<=e.length-1;b++){f.x=e[b].x*M,f.y=e[b].y,f.z=e[b].x*R,a.push(f.x,f.y,f.z),h.x=v/n,h.y=b/(e.length-1),o.push(h.x,h.y);const w=l[3*b+0]*M,N=l[3*b+1],ie=l[3*b+0]*R;c.push(w,N,ie)}}for(let v=0;v<n;v++)for(let g=0;g<e.length-1;g++){const M=g+v*e.length,R=M,b=M+e.length,w=M+e.length+1,N=M+1;s.push(R,b,N),s.push(w,N,b)}this.setIndex(s),this.setAttribute("position",new un(a,3)),this.setAttribute("uv",new un(o,2)),this.setAttribute("normal",new un(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Df(e.points,e.segments,e.phiStart,e.phiLength)}}class Sr extends dn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const d=[],f=new U,h=new U,m=[],_=[],y=[],p=[];for(let u=0;u<=i;u++){const v=[],g=u/i;let M=0;u===0&&a===0?M=.5/n:u===i&&l===Math.PI&&(M=-.5/n);for(let R=0;R<=n;R++){const b=R/n;f.x=-e*Math.cos(r+b*s)*Math.sin(a+g*o),f.y=e*Math.cos(a+g*o),f.z=e*Math.sin(r+b*s)*Math.sin(a+g*o),_.push(f.x,f.y,f.z),h.copy(f).normalize(),y.push(h.x,h.y,h.z),p.push(b+M,1-g),v.push(c++)}d.push(v)}for(let u=0;u<i;u++)for(let v=0;v<n;v++){const g=d[u][v+1],M=d[u][v],R=d[u+1][v],b=d[u+1][v+1];(u!==0||a>0)&&m.push(g,M,b),(u!==i-1||l<Math.PI)&&m.push(M,R,b)}this.setIndex(m),this.setAttribute("position",new un(_,3)),this.setAttribute("normal",new un(y,3)),this.setAttribute("uv",new un(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const Mm={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class zT{constructor(e,n,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(d){o++,s===!1&&r.onStart!==void 0&&r.onStart(d,a,o),s=!0},this.itemEnd=function(d){a++,r.onProgress!==void 0&&r.onProgress(d,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,f){return c.push(d,f),this},this.removeHandler=function(d){const f=c.indexOf(d);return f!==-1&&c.splice(f,2),this},this.getHandler=function(d){for(let f=0,h=c.length;f<h;f+=2){const m=c[f],_=c[f+1];if(m.global&&(m.lastIndex=0),m.test(d))return _}return null}}}const BT=new zT;class If{constructor(e){this.manager=e!==void 0?e:BT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}If.DEFAULT_MATERIAL_NAME="__DEFAULT";class HT extends If{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Mm.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(a),s.manager.itemEnd(e)},0),a;const o=Ya("img");function l(){d(),Mm.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(f){d(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function d(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class GT extends If{constructor(e){super(e)}load(e,n,i,r){const s=new $t,a=new HT(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class bv extends zt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Eu=new ct,Em=new U,wm=new U;class VT{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lf,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Em.setFromMatrixPosition(e.matrixWorld),n.position.copy(Em),wm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(wm),n.updateMatrixWorld(),Eu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Eu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Tm=new ct,ha=new U,wu=new U;class WT extends VT{constructor(){super(new vn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ne(4,2),this._viewportCount=6,this._viewports=[new mt(2,1,1,1),new mt(0,1,1,1),new mt(3,1,1,1),new mt(1,1,1,1),new mt(3,0,1,1),new mt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ha.setFromMatrixPosition(e.matrixWorld),i.position.copy(ha),wu.copy(i.position),wu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(wu),i.updateMatrixWorld(),r.makeTranslation(-ha.x,-ha.y,-ha.z),Tm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tm)}}class jT extends bv{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new WT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class XT extends bv{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const bm=new ct;class Zo{constructor(e,n,i=0,r=1/0){this.ray=new io(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Pf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return bm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(bm),this}intersectObject(e,n=!0,i=[]){return Rd(e,this,i,n),i.sort(Am),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Rd(e[r],this,i,n);return i.sort(Am),i}}function Am(t,e){return t.distance-e.distance}function Rd(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,a=r.length;s<a;s++)Rd(r[s],e,n,!0)}}class Cm{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ot(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tf);const Rm={type:"change"},Tu={type:"start"},Pm={type:"end"},Qo=new io,Lm=new Kn,qT=Math.cos(70*iv.DEG2RAD);class $T extends zr{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Wr.ROTATE,MIDDLE:Wr.DOLLY,RIGHT:Wr.PAN},this.touches={ONE:jr.ROTATE,TWO:jr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(T){T.addEventListener("keydown",Fe),this._domElementKeyEvents=T},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Fe),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Rm),i.update(),s=r.NONE},this.update=function(){const T=new U,j=new Fr().setFromUnitVectors(e.up,new U(0,1,0)),pe=j.clone().invert(),L=new U,oe=new Fr,z=new U,le=2*Math.PI;return function(Le=null){const We=i.object.position;T.copy(We).sub(i.target),T.applyQuaternion(j),o.setFromVector3(T),i.autoRotate&&s===r.NONE&&K(x(Le)),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Oe=i.minAzimuthAngle,je=i.maxAzimuthAngle;isFinite(Oe)&&isFinite(je)&&(Oe<-Math.PI?Oe+=le:Oe>Math.PI&&(Oe-=le),je<-Math.PI?je+=le:je>Math.PI&&(je-=le),Oe<=je?o.theta=Math.max(Oe,Math.min(je,o.theta)):o.theta=o.theta>(Oe+je)/2?Math.max(Oe,o.theta):Math.min(je,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(d,i.dampingFactor):i.target.add(d),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let ke=!1;if(i.zoomToCursor&&b||i.object.isOrthographicCamera)o.radius=O(o.radius);else{const tt=o.radius;o.radius=O(o.radius*c),ke=tt!=o.radius}if(T.setFromSpherical(o),T.applyQuaternion(pe),We.copy(i.target).add(T),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,d.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),d.set(0,0,0)),i.zoomToCursor&&b){let tt=null;if(i.object.isPerspectiveCamera){const Rt=T.length();tt=O(Rt*c);const Pt=Rt-tt;i.object.position.addScaledVector(M,Pt),i.object.updateMatrixWorld(),ke=!!Pt}else if(i.object.isOrthographicCamera){const Rt=new U(R.x,R.y,0);Rt.unproject(i.object);const Pt=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),ke=Pt!==i.object.zoom;const Hr=new U(R.x,R.y,0);Hr.unproject(i.object),i.object.position.sub(Hr).add(Rt),i.object.updateMatrixWorld(),tt=T.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;tt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(tt).add(i.object.position):(Qo.origin.copy(i.object.position),Qo.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Qo.direction))<qT?e.lookAt(i.target):(Lm.setFromNormalAndCoplanarPoint(i.object.up,i.target),Qo.intersectPlane(Lm,i.target))))}else if(i.object.isOrthographicCamera){const tt=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),tt!==i.object.zoom&&(i.object.updateProjectionMatrix(),ke=!0)}return c=1,b=!1,ke||L.distanceToSquared(i.object.position)>a||8*(1-oe.dot(i.object.quaternion))>a||z.distanceToSquared(i.target)>a?(i.dispatchEvent(Rm),L.copy(i.object.position),oe.copy(i.object.quaternion),z.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",W),i.domElement.removeEventListener("pointerdown",De),i.domElement.removeEventListener("pointercancel",P),i.domElement.removeEventListener("wheel",se),i.domElement.removeEventListener("pointermove",qe),i.domElement.removeEventListener("pointerup",P),i.domElement.getRootNode().removeEventListener("keydown",fe,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Fe),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new Cm,l=new Cm;let c=1;const d=new U,f=new Ne,h=new Ne,m=new Ne,_=new Ne,y=new Ne,p=new Ne,u=new Ne,v=new Ne,g=new Ne,M=new U,R=new Ne;let b=!1;const w=[],N={};let ie=!1;function x(T){return T!==null?2*Math.PI/60*i.autoRotateSpeed*T:2*Math.PI/60/60*i.autoRotateSpeed}function C(T){const j=Math.abs(T*.01);return Math.pow(.95,i.zoomSpeed*j)}function K(T){l.theta-=T}function ee(T){l.phi-=T}const I=function(){const T=new U;return function(pe,L){T.setFromMatrixColumn(L,0),T.multiplyScalar(-pe),d.add(T)}}(),Z=function(){const T=new U;return function(pe,L){i.screenSpacePanning===!0?T.setFromMatrixColumn(L,1):(T.setFromMatrixColumn(L,0),T.crossVectors(i.object.up,T)),T.multiplyScalar(pe),d.add(T)}}(),k=function(){const T=new U;return function(pe,L){const oe=i.domElement;if(i.object.isPerspectiveCamera){const z=i.object.position;T.copy(z).sub(i.target);let le=T.length();le*=Math.tan(i.object.fov/2*Math.PI/180),I(2*pe*le/oe.clientHeight,i.object.matrix),Z(2*L*le/oe.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(I(pe*(i.object.right-i.object.left)/i.object.zoom/oe.clientWidth,i.object.matrix),Z(L*(i.object.top-i.object.bottom)/i.object.zoom/oe.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function V(T){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=T:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function D(T){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=T:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function F(T,j){if(!i.zoomToCursor)return;b=!0;const pe=i.domElement.getBoundingClientRect(),L=T-pe.left,oe=j-pe.top,z=pe.width,le=pe.height;R.x=L/z*2-1,R.y=-(oe/le)*2+1,M.set(R.x,R.y,1).unproject(i.object).sub(i.object.position).normalize()}function O(T){return Math.max(i.minDistance,Math.min(i.maxDistance,T))}function Y(T){f.set(T.clientX,T.clientY)}function de(T){F(T.clientX,T.clientX),u.set(T.clientX,T.clientY)}function be(T){_.set(T.clientX,T.clientY)}function X(T){h.set(T.clientX,T.clientY),m.subVectors(h,f).multiplyScalar(i.rotateSpeed);const j=i.domElement;K(2*Math.PI*m.x/j.clientHeight),ee(2*Math.PI*m.y/j.clientHeight),f.copy(h),i.update()}function q(T){v.set(T.clientX,T.clientY),g.subVectors(v,u),g.y>0?V(C(g.y)):g.y<0&&D(C(g.y)),u.copy(v),i.update()}function ne(T){y.set(T.clientX,T.clientY),p.subVectors(y,_).multiplyScalar(i.panSpeed),k(p.x,p.y),_.copy(y),i.update()}function Ee(T){F(T.clientX,T.clientY),T.deltaY<0?D(C(T.deltaY)):T.deltaY>0&&V(C(T.deltaY)),i.update()}function Se(T){let j=!1;switch(T.code){case i.keys.UP:T.ctrlKey||T.metaKey||T.shiftKey?ee(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(0,i.keyPanSpeed),j=!0;break;case i.keys.BOTTOM:T.ctrlKey||T.metaKey||T.shiftKey?ee(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(0,-i.keyPanSpeed),j=!0;break;case i.keys.LEFT:T.ctrlKey||T.metaKey||T.shiftKey?K(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(i.keyPanSpeed,0),j=!0;break;case i.keys.RIGHT:T.ctrlKey||T.metaKey||T.shiftKey?K(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(-i.keyPanSpeed,0),j=!0;break}j&&(T.preventDefault(),i.update())}function _e(T){if(w.length===1)f.set(T.pageX,T.pageY);else{const j=re(T),pe=.5*(T.pageX+j.x),L=.5*(T.pageY+j.y);f.set(pe,L)}}function ze(T){if(w.length===1)_.set(T.pageX,T.pageY);else{const j=re(T),pe=.5*(T.pageX+j.x),L=.5*(T.pageY+j.y);_.set(pe,L)}}function Pe(T){const j=re(T),pe=T.pageX-j.x,L=T.pageY-j.y,oe=Math.sqrt(pe*pe+L*L);u.set(0,oe)}function H(T){i.enableZoom&&Pe(T),i.enablePan&&ze(T)}function ot(T){i.enableZoom&&Pe(T),i.enableRotate&&_e(T)}function Re(T){if(w.length==1)h.set(T.pageX,T.pageY);else{const pe=re(T),L=.5*(T.pageX+pe.x),oe=.5*(T.pageY+pe.y);h.set(L,oe)}m.subVectors(h,f).multiplyScalar(i.rotateSpeed);const j=i.domElement;K(2*Math.PI*m.x/j.clientHeight),ee(2*Math.PI*m.y/j.clientHeight),f.copy(h)}function He(T){if(w.length===1)y.set(T.pageX,T.pageY);else{const j=re(T),pe=.5*(T.pageX+j.x),L=.5*(T.pageY+j.y);y.set(pe,L)}p.subVectors(y,_).multiplyScalar(i.panSpeed),k(p.x,p.y),_.copy(y)}function ve(T){const j=re(T),pe=T.pageX-j.x,L=T.pageY-j.y,oe=Math.sqrt(pe*pe+L*L);v.set(0,oe),g.set(0,Math.pow(v.y/u.y,i.zoomSpeed)),V(g.y),u.copy(v);const z=(T.pageX+j.x)*.5,le=(T.pageY+j.y)*.5;F(z,le)}function Ue(T){i.enableZoom&&ve(T),i.enablePan&&He(T)}function Ge(T){i.enableZoom&&ve(T),i.enableRotate&&Re(T)}function De(T){i.enabled!==!1&&(w.length===0&&(i.domElement.setPointerCapture(T.pointerId),i.domElement.addEventListener("pointermove",qe),i.domElement.addEventListener("pointerup",P)),!he(T)&&(B(T),T.pointerType==="touch"?xe(T):E(T)))}function qe(T){i.enabled!==!1&&(T.pointerType==="touch"?we(T):te(T))}function P(T){switch(ye(T),w.length){case 0:i.domElement.releasePointerCapture(T.pointerId),i.domElement.removeEventListener("pointermove",qe),i.domElement.removeEventListener("pointerup",P),i.dispatchEvent(Pm),s=r.NONE;break;case 1:const j=w[0],pe=N[j];xe({pointerId:j,pageX:pe.x,pageY:pe.y});break}}function E(T){let j;switch(T.button){case 0:j=i.mouseButtons.LEFT;break;case 1:j=i.mouseButtons.MIDDLE;break;case 2:j=i.mouseButtons.RIGHT;break;default:j=-1}switch(j){case Wr.DOLLY:if(i.enableZoom===!1)return;de(T),s=r.DOLLY;break;case Wr.ROTATE:if(T.ctrlKey||T.metaKey||T.shiftKey){if(i.enablePan===!1)return;be(T),s=r.PAN}else{if(i.enableRotate===!1)return;Y(T),s=r.ROTATE}break;case Wr.PAN:if(T.ctrlKey||T.metaKey||T.shiftKey){if(i.enableRotate===!1)return;Y(T),s=r.ROTATE}else{if(i.enablePan===!1)return;be(T),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Tu)}function te(T){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;X(T);break;case r.DOLLY:if(i.enableZoom===!1)return;q(T);break;case r.PAN:if(i.enablePan===!1)return;ne(T);break}}function se(T){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(T.preventDefault(),i.dispatchEvent(Tu),Ee(me(T)),i.dispatchEvent(Pm))}function me(T){const j=T.deltaMode,pe={clientX:T.clientX,clientY:T.clientY,deltaY:T.deltaY};switch(j){case 1:pe.deltaY*=16;break;case 2:pe.deltaY*=100;break}return T.ctrlKey&&!ie&&(pe.deltaY*=10),pe}function fe(T){T.key==="Control"&&(ie=!0,i.domElement.getRootNode().addEventListener("keyup",Ve,{passive:!0,capture:!0}))}function Ve(T){T.key==="Control"&&(ie=!1,i.domElement.getRootNode().removeEventListener("keyup",Ve,{passive:!0,capture:!0}))}function Fe(T){i.enabled===!1||i.enablePan===!1||Se(T)}function xe(T){switch(ce(T),w.length){case 1:switch(i.touches.ONE){case jr.ROTATE:if(i.enableRotate===!1)return;_e(T),s=r.TOUCH_ROTATE;break;case jr.PAN:if(i.enablePan===!1)return;ze(T),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case jr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;H(T),s=r.TOUCH_DOLLY_PAN;break;case jr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ot(T),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Tu)}function we(T){switch(ce(T),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Re(T),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;He(T),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ue(T),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ge(T),i.update();break;default:s=r.NONE}}function W(T){i.enabled!==!1&&T.preventDefault()}function B(T){w.push(T.pointerId)}function ye(T){delete N[T.pointerId];for(let j=0;j<w.length;j++)if(w[j]==T.pointerId){w.splice(j,1);return}}function he(T){for(let j=0;j<w.length;j++)if(w[j]==T.pointerId)return!0;return!1}function ce(T){let j=N[T.pointerId];j===void 0&&(j=new Ne,N[T.pointerId]=j),j.set(T.pageX,T.pageY)}function re(T){const j=T.pointerId===w[0]?w[1]:w[0];return N[j]}i.domElement.addEventListener("contextmenu",W),i.domElement.addEventListener("pointerdown",De),i.domElement.addEventListener("pointercancel",P),i.domElement.addEventListener("wheel",se,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",fe,{passive:!0,capture:!0}),this.update()}}const Li=[{id:"mercury",name:"Mercury",radius:1.5,distanceFromSun:20,orbitSpeed:.004,texture:"mercury.jpg",description:"Mercury is the smallest and innermost planet in the Solar System. It has a rocky body like Earth but is much smaller, with a diameter of about 4,880 km.",diameter:4880,mass:"3.3 × 10^23 kg",dayLength:"176 Earth days",yearLength:"88 Earth days",avgTemp:"-173°C to 427°C",funFact:'Mercury has wrinkles! As the iron core of the planet cooled and contracted, the surface developed "wrinkles" or compressional features.'},{id:"venus",name:"Venus",radius:2.2,distanceFromSun:30,orbitSpeed:.0035,texture:"venus.jpg",description:"Venus is the second planet from the Sun and is Earth's closest planetary neighbor. It's one of the four inner, terrestrial planets, and it's often called Earth's twin because it's similar in size and density.",diameter:12104,mass:"4.87 × 10^24 kg",dayLength:"243 Earth days",yearLength:"225 Earth days",avgTemp:"462°C",funFact:"Venus rotates in the opposite direction to most planets, meaning the Sun rises in the west and sets in the east."},{id:"earth",name:"Earth",radius:2.5,distanceFromSun:40,orbitSpeed:.003,texture:"earth.jpg",description:"Earth is the third planet from the Sun and the only astronomical object known to harbor life. It is the only world in our solar system with liquid water on the surface.",diameter:12756,mass:"5.97 × 10^24 kg",dayLength:"24 hours",yearLength:"365.25 days",avgTemp:"15°C",funFact:"The Earth's rotation is gradually slowing. This deceleration is happening almost imperceptibly, at approximately 17 milliseconds per hundred years.",moons:[{name:"Moon",radius:.6}]},{id:"mars",name:"Mars",radius:2,distanceFromSun:50,orbitSpeed:.0024,texture:"mars.jpg",description:'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. It is often referred to as the "Red Planet".',diameter:6792,mass:"6.42 × 10^23 kg",dayLength:"24 hours 37 minutes",yearLength:"687 Earth days",avgTemp:"-63°C",funFact:"Mars has the largest dust storms in the solar system. They can last for months and cover the entire planet.",moons:[{name:"Phobos",radius:.3},{name:"Deimos",radius:.2}]},{id:"jupiter",name:"Jupiter",radius:5,distanceFromSun:65,orbitSpeed:.0013,texture:"jupiter.jpg",description:"Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets combined.",diameter:142984,mass:"1.90 × 10^27 kg",dayLength:"9 hours 56 minutes",yearLength:"11.86 Earth years",avgTemp:"-145°C",funFact:"Jupiter has the shortest day of all the planets. It rotates once about every 10 hours.",moons:[{name:"Io",radius:.5},{name:"Europa",radius:.5},{name:"Ganymede",radius:.6},{name:"Callisto",radius:.6}]},{id:"saturn",name:"Saturn",radius:4.5,distanceFromSun:85,orbitSpeed:9e-4,texture:"saturn.jpg",description:"Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius about nine times that of Earth.",diameter:120536,mass:"5.68 × 10^26 kg",dayLength:"10 hours 42 minutes",yearLength:"29.45 Earth years",avgTemp:"-178°C",funFact:"Saturn has a unique feature - its spectacular ring system that stretches out more than 120,000 km from the planet, but is only about 20 meters thick.",moons:[{name:"Titan",radius:.6},{name:"Enceladus",radius:.3},{name:"Mimas",radius:.2},{name:"Rhea",radius:.4},{name:"Iapetus",radius:.4}]},{id:"uranus",name:"Uranus",radius:3.5,distanceFromSun:100,orbitSpeed:7e-4,texture:"uranus.jpg",description:"Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",diameter:51118,mass:"8.68 × 10^25 kg",dayLength:"17 hours 14 minutes",yearLength:"84 Earth years",avgTemp:"-224°C",funFact:"Uranus rotates on its side with an axial tilt of 98 degrees. This means that its poles experience 42 years of continuous sunlight followed by 42 years of darkness.",moons:[{name:"Miranda",radius:.3},{name:"Ariel",radius:.3},{name:"Umbriel",radius:.3},{name:"Titania",radius:.4},{name:"Oberon",radius:.4}]},{id:"neptune",name:"Neptune",radius:3.5,distanceFromSun:120,orbitSpeed:5e-4,texture:"neptune.jpg",description:"Neptune is the eighth and farthest-known planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet.",diameter:49528,mass:"1.02 × 10^26 kg",dayLength:"16 hours 6 minutes",yearLength:"164.8 Earth years",avgTemp:"-214°C",funFact:"Neptune has the strongest winds in the Solar System, reaching speeds of 2,100 km/h (1,300 mph).",moons:[{name:"Triton",radius:.5},{name:"Nereid",radius:.2},{name:"Proteus",radius:.3},{name:"Larissa",radius:.2}]}];function YT(t,e,n){const i=new UT,r=new Mv({antialias:!0,alpha:!0});r.setSize(t.clientWidth,t.clientHeight),r.setPixelRatio(window.devicePixelRatio),r.shadowMap.enabled=!0,r.shadowMap.type=bf,t.appendChild(r.domElement);const s=new vn(45,t.clientWidth/t.clientHeight,.1,2e5);s.position.set(0,50,100);const a=new $T(s,r.domElement);a.enableDamping=!0,a.dampingFactor=.05,a.minDistance=20,a.maxDistance=1e5,i.add(new XT(1118481));const o=new jT(16777215,2,1e3,.5);o.position.set(0,0,0),o.castShadow=!0,o.shadow.mapSize.width=2048,o.shadow.mapSize.height=2048,o.shadow.radius=2,i.add(o);const l=new GT,c=l.load("./images/sun.jpg"),d=l.load("./images/moon.jpg"),f=l.load("./images/saturn_ring1.png"),h=1.8,m=.32,_=20,y=14,p=.35,u=3.5;let v=.6;n==null||n.planetScale;const g={mercury:2439.7,venus:6051.8,earth:6371,mars:3389.5,jupiter:69911,saturn:58232,uranus:25362,neptune:24622,pluto:1188.3},M={mercury:[],venus:[],earth:[{name:"Moon",radius:1737.1}],mars:[{name:"Phobos",radius:11.267},{name:"Deimos",radius:6.2}],jupiter:[{name:"Io",radius:1821.6},{name:"Europa",radius:1560.8},{name:"Ganymede",radius:2634.1},{name:"Callisto",radius:2410.3}],saturn:[{name:"Titan",radius:2574.7},{name:"Rhea",radius:763.8},{name:"Iapetus",radius:734.5},{name:"Dione",radius:561.4},{name:"Tethys",radius:533.1},{name:"Enceladus",radius:252.1},{name:"Mimas",radius:198.2}],uranus:[{name:"Titania",radius:788.9},{name:"Oberon",radius:761.4},{name:"Umbriel",radius:584.7},{name:"Ariel",radius:578.9},{name:"Miranda",radius:235.8}],neptune:[{name:"Triton",radius:1353.4},{name:"Proteus",radius:210},{name:"Nereid",radius:170}],pluto:[{name:"Charon",radius:606},{name:"Nix",radius:49},{name:"Hydra",radius:51}]},R=[],b={},w=[],N={},ie={},x={},C={};let K=null,ee=null,I=null,Z=null,k=null,V=new U,D=!1,F=!1;const O={};function Y(W,B=!1,ye=0,he){const ce=document.createElement("canvas"),re=ce.getContext("2d"),ae=4,T=(n==null?void 0:n.currentLanguage)==="ar"?"Cairo":"Inter",pe=Math.max(8,Math.round(he??(B?30:26)));if(re.font=`${B?"bold ":""}${pe*ae}px ${T}, Arial`,(n==null?void 0:n.currentLanguage)==="ar"||ye===0){const z=re.measureText(W),le=Math.ceil(z.width),ue=z.actualBoundingBoxAscent||pe*ae*.72,Le=z.actualBoundingBoxDescent||pe*ae*.28,We=Math.ceil(ue+Le);ce.width=Math.max(1,le+8),ce.height=Math.max(1,We+8),re.font=`${B?"bold ":""}${pe*ae}px ${T}, Arial`,re.textBaseline="alphabetic",re.textAlign="center",re.fillStyle="#ffffff";const Oe=Math.round(ue)+2;re.fillText(W,ce.width/2,Oe)}else{let z=0;for(let ke=0;ke<W.length;ke++)z+=re.measureText(W[ke]).width+ye*ae;z-=ye*ae;const le=re.measureText(W),ue=le.actualBoundingBoxAscent||pe*ae*.72,Le=le.actualBoundingBoxDescent||pe*ae*.28,We=Math.ceil(ue+Le);ce.width=Math.max(1,Math.ceil(z)+8),ce.height=Math.max(1,We+8),re.font=`${B?"bold ":""}${pe*ae}px ${T}, Arial`,re.textBaseline="alphabetic",re.textAlign="left",re.fillStyle="#ffffff";let Oe=Math.round((ce.width-z)/2);const je=Math.round(ue)+2;for(let ke=0;ke<W.length;ke++){const tt=W[ke];re.fillText(tt,Oe,je),Oe+=re.measureText(tt).width+ye*ae}}const oe=new Sm(ce);return oe.minFilter=Ft,oe.magFilter=Ft,oe}function de(){const W=new Sr(19e3,32,32),B=l.load("./images/stars.jpg"),ye=new Ii({map:B,side:qt}),he=new en(W,ye);i.add(he)}de();let be=null;function X(){const B=new dn,ye=new Float32Array(1500*3),he=new Float32Array(1500*3);for(let L=0;L<1500*3;L+=3){const oe=60+Math.random()*450,z=Math.random()*Math.PI*2,le=Math.acos(Math.random()*2-1);ye[L]=oe*Math.sin(le)*Math.cos(z),ye[L+1]=oe*Math.sin(le)*Math.sin(z),ye[L+2]=oe*Math.cos(le);const ue=Math.random();ue<.4?(he[L]=.2,he[L+1]=.8,he[L+2]=1):ue<.7?(he[L]=.6,he[L+1]=.2,he[L+2]=.9):(he[L]=1,he[L+1]=.85,he[L+2]=.4)}B.setAttribute("position",new yn(ye,3)),B.setAttribute("color",new yn(he,3));const ce=document.createElement("canvas");ce.width=16,ce.height=16;const re=ce.getContext("2d"),ae=re.createRadialGradient(8,8,0,8,8,8);ae.addColorStop(0,"rgba(255, 255, 255, 1)"),ae.addColorStop(1,"rgba(255, 255, 255, 0)"),re.fillStyle=ae,re.fillRect(0,0,16,16);const T=new Sm(ce),j=new Tv({size:1.6,map:T,transparent:!0,opacity:.6,vertexColors:!0,blending:_d,depthWrite:!1}),pe=new kT(B,j);return i.add(pe),pe}be=X();const q=new en(new Sr(8.5,32,32),new Ii({map:c}));q.name="sun",q.userData={isSun:!0},i.add(q);{const W=n!=null&&n.tFunc?n.tFunc("sun"):"Sun",B=Y(W,!0,0,48),ye=new hl({map:B,transparent:!0}),he=new Su(ye);he.position.set(0,15,0);const re=50*.15*m,ae=B.image,T=ae&&ae.width&&ae.height?ae.width/ae.height:1;he.scale.set(T*re,re,1),i.add(he),x.sun=he,C.sun={sprite:he}}Li.forEach(W=>{const B=new bs,ye=256,he=W.distanceFromSun*h,ce=[];for(let ue=0;ue<=ye;ue++){const Le=ue/ye*Math.PI*2;ce.push(new U(Math.cos(Le)*he,0,Math.sin(Le)*he))}const re=new dn().setFromPoints(ce),ae=new wv({color:0,transparent:!0,opacity:.33}),T=new OT(re,ae);T.userData={planetId:W.id},i.add(T),w.push({line:T,planetId:W.id,points:ce});const j=new Sr(W.radius,32,32),pe=new Ii({toneMapped:!1});l.load(`./images/${W.texture}`,ue=>{pe.map=ue,pe.needsUpdate=!0});const L=new en(j,pe);L.castShadow=!0,L.receiveShadow=!0,L.name=W.id,B.add(L),b[W.id]=L;const oe=Math.random()*Math.PI*2;if(B.position.x=Math.cos(oe)*he,B.position.z=Math.sin(oe)*he,B.userData.initialAngle=oe,W.id==="saturn"){const ue=W.radius*1.5,Le=W.radius*2.5,We=new Df([new Ne(ue,0),new Ne(Le,0),new Ne(Le,.1),new Ne(ue,.1)],64);f.wrapS=Xa,f.wrapT=Xa,f.repeat.set(6,1),f.minFilter=Gy,f.magFilter=Ft,f.generateMipmaps=!0;const Oe=new Ii({map:f,transparent:!0,side:Jn,alphaTest:.01,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}),je=new en(We,Oe);je.castShadow=!0,je.receiveShadow=!0,je.rotation.x=0,je.position.y=.04,je.renderOrder=2,B.add(je)}const z=M[W.id];let le=[];if(W.moons&&W.moons.length>0?le=W.moons.map(ue=>({name:ue.name,radius:ue.radius})):Array.isArray(z)&&z.length>0&&(le=z.map(ue=>({name:ue.name,radius:ue.radius}))),le.length>0){const ue=new bs;le.forEach((Le,We)=>{let Oe;const je=Le.radius,ke=g[W.id];if(typeof je=="number"&&je>50&&ke){const fc=je/ke;Oe=W.radius*fc*p}else typeof je=="number"?Oe=Math.max(.08,je):Oe=Math.max(W.radius*.06,.08);Oe=Math.min(Oe,Math.max(W.radius*.6,W.radius*.08));const tt=new Sr(Oe,16,16),Rt=new Ii({map:d}),Pt=new en(tt,Rt);Pt.castShadow=!0,Pt.receiveShadow=!0;const Hr=Math.max(Oe*3,.5),Gr=new Sr(Hr,16,16),so=new Ii({transparent:!0,opacity:0,side:qt}),ar=new en(Gr,so);ar.userData=Pt.userData,Pt.add(ar);let Ei=W.radius*u+We*W.radius*1.1;Ei=Math.max(Ei,W.radius+Oe+.5);const or=Math.random()*Math.PI*2;Pt.position.x=Math.cos(or)*Ei,Pt.position.z=Math.sin(or)*Ei,Pt.userData={name:Le.name||`moon-${We}`,parentId:W.id,realRadiusKm:typeof Le.radius=="number"&&Le.radius>50?Le.radius:void 0,orbitRadius:Ei,orbitSpeed:.02+Math.random()*.02,angle:or,isMoon:!0,initialAngle:or};const dc=`${W.id}:${Pt.userData.name}`;ie[dc]=Pt,ue.add(Pt)}),B.add(ue),N[W.id]=ue}B.userData={orbitSpeed:W.orbitSpeed,angle:oe,planetId:W.id};{const ue=n!=null&&n.tFunc?n.tFunc(W.id):W.name,Le=Y(ue,!0,0,_),We=new hl({map:Le,transparent:!0}),Oe=new Su(We);Oe.position.set(0,W.radius+3,0);const je=W.radius*3*m,ke=Le.image,tt=ke&&ke.width&&ke.height?ke.width/ke.height:1;Oe.scale.set(tt*je*1.05,je,1),Oe.visible=(n==null?void 0:n.showLabels)??!1,B.add(Oe),x[W.id]=Oe,C[W.id]={sprite:Oe,planetGroup:B}}i.add(B),R.push(B)});let ne=null;function Ee(W,B){ne&&(i.remove(ne),ne=null);const ye=Li.find(tt=>tt.id===W);if(!ye)return;const he=ye.distanceFromSun*h,ce=he*Math.PI*2*.1,re=n!=null&&n.tFunc?n.tFunc("circumference"):(n==null?void 0:n.currentLanguage)==="ar"?"المحيط":"Circumference",ae=n!=null&&n.tFunc?n.tFunc("millionKm"):(n==null?void 0:n.currentLanguage)==="ar"?"مليون كم":"million km",T=`${re}: ${ce.toFixed(1)} ${ae}`,j=Y(T,!1,1.2,y),pe=new hl({map:j,transparent:!0,opacity:0});ne=new Su(pe);const L=he*.25*m,oe=j.image,z=oe&&oe.width&&oe.height?oe.width/oe.height:1;ne.scale.set(z*L,L,1);const le=new Zo;le.setFromCamera(B,s);const ue=new U,Le=new Kn(new U(0,1,0),0);le.ray.intersectPlane(Le,ue);const We=ue.normalize(),Oe=he*1.15;ne.position.copy(We.multiplyScalar(Oe)),ne.position.y=8,i.add(ne);let je=0;const ke=()=>{je=Math.min(1,je+.15),ne.material.opacity=je,je<1&&requestAnimationFrame(ke)};ke()}function Se(){if(!ne)return;let W=ne.material.opacity||1;const B=()=>{W=Math.max(0,W-.12),ne.material.opacity=W,W>0?requestAnimationFrame(B):(i.remove(ne),ne=null)};B()}t.addEventListener("mousemove",W=>{const B=t.getBoundingClientRect(),ye=new Ne((W.clientX-B.left)/B.width*2-1,-((W.clientY-B.top)/B.height)*2+1),he=new Zo;he.setFromCamera(ye,s);let ce=1/0,re=null;for(const ae of w)for(const T of ae.points){const j=he.ray.distanceToPoint(T);j<ce&&(ce=j,re=ae)}if(re&&ce<3){if(K!==re.line)K&&(K.material.color.set(0),K.material.opacity=.33),K=re.line,ee=re.planetId,K.material.color.set(16777215),K.material.opacity=.9,Ee(re.planetId,ye);else if(ne&&ee===re.planetId){const ae=Li.find(T=>T.id===ee);if(ae){const T=new Zo;T.setFromCamera(ye,s);const j=new U,pe=new Kn(new U(0,1,0),0);T.ray.intersectPlane(pe,j);const L=j.normalize(),z=ae.distanceFromSun*h*1.15;ne.position.copy(L.multiplyScalar(z)),ne.position.y=8}}}else K&&(K.material.color.set(0),K.material.opacity=.33,K=null,ee=null,Se())}),t.addEventListener("mouseleave",()=>{K&&(K.material.color.set(0),K.material.opacity=.33,K=null,ee=null),Se()});const _e=new Zo,ze=new Ne;t.addEventListener("click",W=>{const B=t.getBoundingClientRect();ze.x=(W.clientX-B.left)/B.width*2-1,ze.y=-((W.clientY-B.top)/B.height)*2+1,_e.setFromCamera(ze,s);const ye=[...Object.values(b),...Object.values(ie),q],he=_e.intersectObjects(ye);if(he.length===0)return;const ce=he[0].object;if(ce.userData&&ce.userData.isSun||ce===q){e({id:"sun",name:"Sun",radius:8.5,distanceFromSun:0,orbitSpeed:0,texture:"sun.jpg",description:"The Sun is the star at the center of the Solar System.",diameter:1391400,mass:"1.989 × 10^30 kg",dayLength:"25 days (equator)",yearLength:"—",avgTemp:"5,505°C (surface)",funFact:"The Sun contains 99.86% of the mass in the Solar System!",moons:[]});return}const re=Object.keys(b).find(T=>b[T]===ce);if(re){const T=Li.find(j=>j.id===re);T&&(Pe(T),e(T));return}const ae=Object.keys(ie).find(T=>ie[T]===ce);if(ae){const T=ie[ae].userData,j=Li.find(oe=>oe.id===T.parentId),pe=ce.geometry.parameters.radius,L={id:`${T.parentId}-${T.name}`,name:T.name,radius:pe,distanceFromSun:j?j.distanceFromSun:0,orbitSpeed:T.orbitSpeed??0,texture:"moon.jpg",description:`Moon of ${j?j.name:T.parentId}.`,diameter:T.realRadiusKm?Math.round(T.realRadiusKm*2):Math.round(pe*1e3),mass:"—",dayLength:"—",yearLength:"—",avgTemp:"—",funFact:"Click Learn More to search NASA.",moons:[]};L.isMoon=!0,L.parentId=j==null?void 0:j.id,H(ie[ae],L),e(L);return}});function Pe(W){const B=b[W.id];if(!B)return;const ye=new U;B.getWorldPosition(ye);const he=ye.clone().add(new U(W.radius*6,W.radius*3,W.radius*6)),ce=s.position.clone(),re=a.target.clone(),ae=900,T=Date.now();function j(){const pe=Math.min(1,(Date.now()-T)/ae);s.position.lerpVectors(ce,he,pe),a.target.lerpVectors(re,ye,pe),a.update(),pe<1&&requestAnimationFrame(j)}j()}function H(W,B){const ye=new U;W.getWorldPosition(ye);const he=ye.clone().add(new U(B.radius*8,B.radius*4,B.radius*8)),ce=s.position.clone(),re=a.target.clone(),ae=900,T=Date.now();function j(){const pe=Math.min(1,(Date.now()-T)/ae);s.position.lerpVectors(ce,he,pe),a.target.lerpVectors(re,ye,pe),a.update(),pe<1&&requestAnimationFrame(j)}j()}function ot(W){v=W}function Re(W,B=2,ye=!1){const he=b[W];if(!he)return;I=W,D=!0,F=!!ye,he.getWorldPosition(V);const ce=V.clone().add(new U(0,B,0));s.position.copy(ce),a.target.copy(V),O.minDistance=a.minDistance,O.maxDistance=a.maxDistance,O.enablePan=a.enablePan,F&&(a.minDistance=.1,a.maxDistance=Math.max(5,B*4),a.enablePan=!1)}function He(){I=null,Z=null,k=null,D=!1,F=!1,O.minDistance!==void 0&&(a.minDistance=O.minDistance),O.maxDistance!==void 0&&(a.maxDistance=O.maxDistance),O.enablePan!==void 0&&(a.enablePan=O.enablePan)}function ve(W){k=W}function Ue(){k=null}function Ge(W,B=2,ye=!1){const he=ie[W];if(!he)return;Z=W,D=!0,F=!!ye,he.getWorldPosition(V);const ce=V.clone().add(new U(0,B,0));s.position.copy(ce),a.target.copy(V),O.minDistance=a.minDistance,O.maxDistance=a.maxDistance,O.enablePan=a.enablePan,F&&(a.minDistance=.1,a.maxDistance=Math.max(5,B*4),a.enablePan=!1)}function De(){He(),R.forEach(T=>{const j=T.userData.initialAngle||0;T.userData.angle=j;const pe=T.position.length()||T.userData.orbitRadius;T.position.x=Math.cos(j)*pe,T.position.z=Math.sin(j)*pe}),Object.values(N).forEach(T=>{T.children.forEach(j=>{const pe=j.userData.initialAngle||Math.random()*Math.PI*2;j.userData.angle=pe,j.position.x=Math.cos(pe)*j.userData.orbitRadius,j.position.z=Math.sin(pe)*j.userData.orbitRadius})});const W=s.position.clone(),B=a.target.clone(),ye=new U(0,50,100),he=new U(0,0,0),ce=1500,re=Date.now();function ae(){const T=Math.min(1,(Date.now()-re)/ce);s.position.lerpVectors(W,ye,T),a.target.lerpVectors(B,he,T),a.update(),T<1&&requestAnimationFrame(ae)}ae()}function qe(){requestAnimationFrame(qe),be&&(be.rotation.y+=12e-5*(v+.15),be.rotation.x+=6e-5*(v+.15)),R.forEach(W=>{const B=(W.userData.orbitSpeed??0)*v;W.userData.angle+=B;const ye=W.position.length();W.position.x=Math.cos(W.userData.angle)*ye,W.position.z=Math.sin(W.userData.angle)*ye;const he=W.userData.planetId,ce=b[he];ce&&(ce.rotation.y+=.01*v);const re=N[he];re&&re.children.forEach(ae=>{if(k&&k===`${he}:${ae.userData.name}`){ae.rotation.y+=.01*v;return}ae.userData.angle+=(ae.userData.orbitSpeed??0)*v,ae.position.x=Math.cos(ae.userData.angle)*ae.userData.orbitRadius,ae.position.z=Math.sin(ae.userData.angle)*ae.userData.orbitRadius})});try{Object.keys(C).forEach(W=>{var ue,Le,We;const B=C[W];if(!B)return;const ye=B.sprite,he=B.planetGroup;if(!he)return;const ce=new U;he.getWorldPosition(ce);const re=(ue=he.userData)==null?void 0:ue.planetId,ae=re?b[re]:void 0,T=ae&&((Le=ae.geometry.parameters)==null?void 0:Le.radius)||0,j=Math.max(1,T+2),pe=ce.clone().add(new U(0,j,0)),L=he.worldToLocal(pe.clone());ye.position.lerp(L,.6);const oe=Math.max(6,T*.45*m),z=(We=ye.material.map)==null?void 0:We.image,le=z&&z.width&&z.height?z.width/z.height:1;ye.scale.set(le*oe,oe,1)})}catch{}if(D&&I){const W=b[I];if(W){const B=new U;W.getWorldPosition(B);const ye=B.clone().sub(V);ye.lengthSq()>0&&(s.position.add(ye),a.target.add(ye)),V.copy(B)}}if(D&&Z){const W=ie[Z];if(W){const B=new U;W.getWorldPosition(B);const ye=B.clone().sub(V);ye.lengthSq()>0&&(s.position.add(ye),a.target.add(ye)),V.copy(B)}}a.update(),r.render(i,s)}qe();function P(){s.aspect=t.clientWidth/t.clientHeight,s.updateProjectionMatrix(),r.setSize(t.clientWidth,t.clientHeight)}window.addEventListener("resize",P);function E(W){Object.values(N).forEach(B=>B.visible=W)}E(!((n==null?void 0:n.hideMoons)??!1));function te(W){Object.values(x).forEach(B=>{B.visible=W})}function se(W){Object.values(b).forEach(B=>B.scale.set(W,W,W))}se((n==null?void 0:n.planetScale)??1);function me(){return s.position.length()}let fe=null;function Ve(W){fe=W}function Fe(){Ve(Math.max(30,me()*.7))}function xe(){Ve(Math.min(a.maxDistance-10,me()*1.4))}(function W(){if(requestAnimationFrame(W),fe!==null){const B=me();if(Math.abs(B-fe)>.5){const ye=s.position.clone().normalize(),he=iv.lerp(B,fe,.12);s.position.copy(ye.multiplyScalar(he)),a.update()}else fe=null}})();function we(){window.removeEventListener("resize",P),r.dispose(),t.innerHTML="",delete window.solarSystem}return window.solarSystem={updateSimulationSpeed:ot,followPlanet:Re,stopFollowPlanet:He,getFollowingPlanetId:()=>I,resetCamera:De},{selectPlanet:W=>{const B=Li.find(ye=>ye.id===W);B&&Pe(B)},selectMoon:(W,B)=>{const ye=`${W}:${B}`,he=ie[ye];if(!he)return;const ce=he.userData,re=Li.find(j=>j.id===ce.parentId),ae=he.geometry.parameters.radius,T={id:`${ce.parentId}-${ce.name}`,name:ce.name,radius:ae,distanceFromSun:re?re.distanceFromSun:0,orbitSpeed:ce.orbitSpeed??0,texture:"moon.jpg",description:`Moon of ${re?re.name:ce.parentId}.`,diameter:ce.realRadiusKm?Math.round(ce.realRadiusKm*2):Math.round(ae*1e3),mass:"—",dayLength:"—",yearLength:"—",avgTemp:"—",funFact:"Click Learn More to search NASA.",moons:[]};T.isMoon=!0,T.parentId=re==null?void 0:re.id,H(he,T),e(T)},updateSimulationSpeed:ot,cleanupScene:we,setMoonsVisible:E,setLabelsVisible:te,setPlanetScale:se,zoomIn:Fe,zoomOut:xe,getCameraDistance:me,followPlanet:Re,followMoon:Ge,stopFollowPlanet:He,pauseMoonOrbit:ve,resumeMoonOrbit:Ue,getFollowingPlanetId:()=>I,resetCamera:De,isGalaxyVisible:()=>!1}}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var KT={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZT=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),fn=(t,e)=>{const n=Te.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:o="",children:l,...c},d)=>Te.createElement("svg",{ref:d,...KT,width:r,height:r,stroke:i,strokeWidth:a?Number(s)*24/Number(r):s,className:["lucide",`lucide-${ZT(t)}`,o].join(" "),...c},[...e.map(([f,h])=>Te.createElement(f,h)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QT=fn("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JT=fn("Disc",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=fn("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eb=fn("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tb=fn("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nb=fn("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ib=fn("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rb=fn("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sb=fn("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uf=fn("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ff=fn("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=fn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ab=fn("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ob=fn("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),Nm={en:{ok:"OK",close:"Close",english:"English",arabic:"عربي",radius:"Radius",millionKm:"million km",circumference:"Circumference",tourGuide:"Tour Guide",next:"Next",skip:"Skip",finishTour:"Finish the Tour",startTour:"Start Tour",stopTour:"Stop Tour",overview:"Overview",quickFacts:"Quick Facts",selectLanguage:"Select Language",chooseLanguage:"Please choose your preferred language",simulationSpeed:"Simulation Speed",slow:"Slow",fast:"Fast",pause:"Pause",play:"Play",hideMoons:"Hide Moons",showMoons:"Show Moons",showLabels:"Show Labels",hideLabels:"Hide Labels",planetScale:"Planet Scale",satelliteOf:"Satellite of",chosenAsA:"Chosen as A",chooseAsA:"Choose as A",chosenAsB:"Chosen as B",chooseAsB:"Choose as B",diameter:"Diameter",mass:"Mass",dayLength:"Day Length",yearLength:"Year Length",avgTemp:"Avg Temperature",funFact:"Fun Fact",learnMore:"Learn More on NASA",satellites:"Satellites",testYourKnowledge:"Test Your Knowledge!",chooseDifficulty:"Choose your difficulty level to begin the quiz",beginner:"Beginner",intermediate:"Intermediate",advanced:"Advanced",questions:"questions",maybeLater:"Maybe Later",question:"Question",complete:"complete",submitAnswer:"Submit Answer",nextQuestion:"Next Question",explanation:"Explanation",excellent:"Excellent!",goodJob:"Good Job!",keepLearning:"Keep Learning!",tryAgain:"Try Again!",outstanding:"Outstanding! You really know your solar system!",greatWork:"Great work! You know quite a bit about our solar system!",keepLearningMessage:"Keep learning! You'll get better with practice!",practiceMakesPerfect:"Give it another try! Practice makes perfect!",level:"Level",retry:"Try Again",finish:"Finish",takeQuiz:"Take Quiz",amazingFact:"Amazing Fact",distanceFromSun:"Distance from Sun",more:"more",moonOf:"Moon of",clickLearnMore:"Click Learn More to search NASA",km:"km",surface:"(surface)",equator:"(equator)",moon:"Moon",phobos:"Phobos",deimos:"Deimos",io:"Io",europa:"Europa",ganymede:"Ganymede",callisto:"Callisto",titan:"Titan",enceladus:"Enceladus",mimas:"Mimas",rhea:"Rhea",iapetus:"Iapetus",miranda:"Miranda",ariel:"Ariel",titania:"Titania",oberon:"Oberon",triton:"Triton",charon:"Charon",hours:"hours",minutes:"minutes",seconds:"seconds",days:"days",earthDays:"Earth days",earthYears:"Earth years",comparisonMode:"Comparison Mode",planet:"Planet",planetComparison:"Planet Comparison",comparePlanets:"Compare Planets",selectTwoPlanets:"Select two planets to compare",exitComparison:"Exit Comparison",noComparison:"No planets selected for comparison",sun:"Sun",mercury:"Mercury",venus:"Venus",earth:"Earth",mars:"Mars",jupiter:"Jupiter",saturn:"Saturn",uranus:"Uranus",neptune:"Neptune",name:"Name",property:"Property",selectPlanetA:"Select Planet A",selectPlanetB:"Select Planet B",clickAPlanet:"Click a planet",comparisonResults:"Comparison Results",sizeDifference:"Size difference",orbitalSpeedRatio:"Orbital speed ratio",distanceBetweenPlanets:"Distance between planets",larger:"larger",smaller:"smaller",than:"than",million:"million",is:"is",times:"times",approximately:"Approximately",kilometers:"kilometers",faster:"faster",slower:"slower",orbitalSpeed:"Orbital Speed",avgTemperature:"Average Temperature",numberOfMoons:"Number of Moons",moons:"Moons",sameSizeMoons:"Same size",reset:"Reset",sunDescription:"The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma and is by far the most important source of energy for life on Earth.",mercuryDescription:"Mercury is the smallest and innermost planet in the Solar System. It has a rocky body like Earth but is much smaller, with a diameter of about 4,880 km.",venusDescription:"Venus is the second planet from the Sun and is Earth's closest planetary neighbor. It's one of the four inner, terrestrial planets.",earthDescription:"Earth is the third planet from the Sun and the only astronomical object known to harbor life. It is the only world in our solar system with liquid water on the surface.",marsDescription:'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. It is often referred to as the "Red Planet".',jupiterDescription:"Jupiter is the fifth planet from the Sun and is significantly the largest planet in the Solar System. It is twice as massive as all other planets combined.",saturnDescription:"Saturn is the sixth planet from the Sun. It is famous for its prominent ring system, which is the most extensive planetary ring system of any planet.",uranusDescription:"Uranus is the seventh planet from the Sun. It is a unique ice giant that rotates on its side, with an axial tilt of 98 degrees.",neptuneDescription:"Neptune is the eighth planet from the Sun and is the most distant planet in our solar system. It is the windiest planet known, with wind speeds reaching 2,100 km/h.",sunFunFact:"The Sun contains 99.86% of the mass in the Solar System!",mercuryFunFact:'Mercury has wrinkles! As the iron core of the planet cooled and contracted, the surface developed "wrinkles" or compressional features.',venusFunFact:"Venus rotates in the opposite direction to most planets, meaning the Sun rises in the west and sets in the east.",earthFunFact:"The Earth's rotation is gradually slowing. This deceleration is happening almost imperceptibly, at approximately 17 milliseconds per hundred years.",marsFunFact:"Mars has the largest volcano in the Solar System - Olympus Mons - which is about 21 km high.",jupiterFunFact:"Jupiter is so large that all other planets can fit inside it!",saturnFunFact:"Saturn's rings contain countless particles of ice and rock, ranging in size from a grain of sand to a skyscraper.",uranusFunFact:"Uranus appears as a featureless ball of cyan-colored clouds, making it one of the most boring looking planets visually.",neptuneFunFact:"Neptune's winds are three times stronger than Jupiter's, making it the windiest place in the Solar System."},ar:{ok:"موافق",close:"إغلاق",english:"English",arabic:"عربي",radius:"نصف القطر",millionKm:"مليون كم",circumference:"المحيط",tourGuide:"جولة المرشد",next:"التالي",skip:"تخطي",finishTour:"انهي الجولة",startTour:"ابدأ الجولة",stopTour:"وقف الجولة",overview:"نظرة عامة",quickFacts:"حقائق سريعة",selectLanguage:"اختر اللغة",chooseLanguage:"يرجى اختيار اللغة المفضلة لديك",simulationSpeed:"سرعة المحاكاة",slow:"بطيء",fast:"سريع",pause:"إيقاف مؤقت",play:"تشغيل",hideMoons:"إخفاء الأقمار",showMoons:"إظهار الأقمار",showLabels:"إظهار التسميات",hideLabels:"إخفاء التسميات",planetScale:"مقياس الكواكب",satelliteOf:"قمر صناعي لـ",chosenAsA:"تم اختياره كـ A",chooseAsA:"اختر كـ A",chosenAsB:"تم اختياره كـ B",chooseAsB:"اختر كـ B",diameter:"القطر",mass:"الكتلة",dayLength:"طول اليوم",yearLength:"طول السنة",avgTemp:"متوسط الحرارة",funFact:"حقيقة مثيرة للاهتمام",learnMore:"تعرف على المزيد من ناسا",satellites:"الأقمار الصناعية",testYourKnowledge:"اختبر معرفتك!",chooseDifficulty:"اختر مستوى الصعوبة لبدء الاختبار",beginner:"مبتدئ",intermediate:"متوسط",advanced:"متقدم",questions:"أسئلة",maybeLater:"ربما لاحقاً",question:"السؤال",complete:"مكتمل",submitAnswer:"إرسال الإجابة",nextQuestion:"السؤال التالي",explanation:"الشرح",excellent:"ممتاز!",goodJob:"عمل جيد!",keepLearning:"واصل التعلم!",tryAgain:"حاول مرة أخرى!",outstanding:"أداء رائع! أنت تعرف نظامك الشمسي حقاً!",greatWork:"عمل رائع! أنت تعرف الكثير عن نظامنا الشمسي!",keepLearningMessage:"استمر في التعلم! ستحسن مع الوقت!",practiceMakesPerfect:"حاول مرة أخرى! الممارسة تجعل الكمال!",level:"المستوى",retry:"إعادة المحاولة",finish:"انتهى",takeQuiz:"خذ اختبار",amazingFact:"حقيقة مذهلة",distanceFromSun:"المسافة من الشمس",more:"أكثر",moonOf:"قمر",clickLearnMore:"انقر للمزيد على NASA",km:"كم",surface:"(السطح)",equator:"(خط الاستواء)",moon:"القمر",phobos:"فوبوس",deimos:"ديموس",io:"آيو",europa:"أوروبا",ganymede:"جانيميد",callisto:"كاليستو",titan:"تيتان",enceladus:"إنسيلادوس",mimas:"ميماس",rhea:"ريا",iapetus:"إيابيتوس",miranda:"ميراندا",ariel:"أرييل",titania:"تيتانيا",oberon:"أوبيرون",triton:"تريتون",charon:"كارون",hours:"ساعات",minutes:"دقائق",seconds:"ثواني",days:"أيام",earthDays:"أيام أرضية",earthYears:"سنوات أرضية",comparisonMode:"وضع المقارنة",planet:"الكوكب",planetComparison:"مقارنة الكواكب",comparePlanets:"مقارنة الكواكب",selectTwoPlanets:"اختر كوكبين للمقارنة",exitComparison:"خروج من المقارنة",noComparison:"لم يتم اختيار أي كواكب للمقارنة",sun:"الشمس",mercury:"عطارد",venus:"الزهرة",earth:"الأرض",mars:"المريخ",jupiter:"المشتري",saturn:"زحل",uranus:"أورانوس",neptune:"نبتون",name:"الاسم",property:"الخاصية",selectPlanetA:"اختر الكوكب A",selectPlanetB:"اختر الكوكب B",clickAPlanet:"انقر على كوكب",comparisonResults:"نتائج المقارنة",sizeDifference:"الفرق في الحجم",orbitalSpeedRatio:"نسبة السرعة المدارية",distanceBetweenPlanets:"المسافة بين الكواكب",larger:"أكبر",smaller:"أصغر",than:"من",million:"مليون",is:"هو",times:"مرة",approximately:"تقريبا",kilometers:"كيلومتر",faster:"أسرع",slower:"أبطأ",orbitalSpeed:"السرعة المدارية",avgTemperature:"متوسط درجة الحرارة",numberOfMoons:"عدد الأقمار",moons:"الأقمار",sameSizeMoons:"نفس الحجم",reset:"إعادة تعيين",sunDescription:"الشمس هي النجم في مركز النظام الشمسي. إنها كرة شبه مثالية من البلازما الساخنة، وهي المصدر الأكثر أهمية للطاقة للحياة على الأرض.",mercuryDescription:"عطارد هو أصغر كواكب النظام الشمسي وأقربها إلى الشمس. يمتلك جسمًا صخريًا مثل الأرض لكنه أصغر بكثير، بقطر يبلغ حوالي 4,880 كم.",venusDescription:"الزهرة هي الكوكب الثاني من الشمس وأقرب جار كوكبي للأرض. إنها واحدة من الكواكب الأرضية الداخلية الأربعة.",earthDescription:"الأرض هي الكوكب الثالث من الشمس والكائن الفلكي الوحيد المعروف بوجود الحياة عليه. إنها العالم الوحيد في نظامنا الشمسي الذي يحتوي على مياه سائلة على سطحه.",marsDescription:'المريخ هو الكوكب الرابع من الشمس وثاني أصغر كواكب النظام الشمسي. يُعرف بلقب "الكوكب الأحمر".',jupiterDescription:"المشتري هو الكوكب الخامس من الشمس وهو بلا منازع أكبر كواكب النظام الشمسي. تساوي كتلته ضعف كتلة جميع الكواكب الأخرى مجتمعة.",saturnDescription:"زحل هو الكوكب السادس من الشمس. يشتهر بنظام حلقاته البارز، وهو الأكثر اتساعًا بين جميع كواكب النظام الشمسي.",uranusDescription:"أورانوس هو الكوكب السابع من الشمس. إنه عملاق جليدي فريد يدور على جانبه، بزاوية ميل محورية تبلغ 98 درجة.",neptuneDescription:"نبتون هو الكوكب الثامن من الشمس وأبعد كواكب نظامنا الشمسي. إنه الكوكب الأكثر عاصفةً، حيث تصل سرعات الرياح إلى 2100 كم/ساعة.",sunFunFact:"الشمس تحتوي على 99.86% من كتلة النظام الشمسي!",mercuryFunFact:'لعطارد تجاعيد! عندما برد لبّه الحديدي وانكمش، تكونت على سطحه "تجاعيد" أو طيات ضاغطة.',venusFunFact:"تدور الزهرة في اتجاه معاكس لمعظم الكواكب، مما يعني أن الشمس تشرق من الغرب وتغرب في الشرق.",earthFunFact:"دوران الأرض يتباطأ تدريجياً. يحدث هذا التباطؤ بشكل غير ملحوظ تقريباً، بمعدل 17 مللي ثانية تقريباً لكل مائة سنة.",marsFunFact:"يضم المريخ أكبر بركان في النظام الشمسي - أولمبس مونس - الذي يبلغ ارتفاعه حوالي 21 كم.",jupiterFunFact:"المشتري ضخم لدرجة أن جميع الكواكب الأخرى يمكن أن تتسع بداخله!",saturnFunFact:"تحتوي حلقات زحل على بلايين الجسيمات الجليدية والصخرية، تتراوح أحجامها من حبة رمل إلى ناطحة سحاب.",uranusFunFact:"يظهر أورانوس ككرة بلا ملامح من السحب الزرقاء المخضرة، مما يجعله أقل الكواكب إثارة للاهتمام من الناحية البصرية.",neptuneFunFact:"رياح نبتون أقوى بثلاث مرات من رياح المشتري، مما يجعله أعاصر الأماكن في النظام الشمسي."}},lb=t=>({sun:{description:"sunDescription",funFact:"sunFunFact"},mercury:{description:"mercuryDescription",funFact:"mercuryFunFact"},venus:{description:"venusDescription",funFact:"venusFunFact"},earth:{description:"earthDescription",funFact:"earthFunFact"},mars:{description:"marsDescription",funFact:"marsFunFact"},jupiter:{description:"jupiterDescription",funFact:"jupiterFunFact"},saturn:{description:"saturnDescription",funFact:"saturnFunFact"},uranus:{description:"uranusDescription",funFact:"uranusFunFact"},neptune:{description:"neptuneDescription",funFact:"neptuneFunFact"}})[t]||null,Rv=Te.createContext(void 0),cb=({children:t})=>{const[e,n]=Te.useState(()=>typeof window<"u"&&localStorage.getItem("language")||"en");Te.useEffect(()=>{document.documentElement.dir=e==="ar"?"rtl":"ltr"},[e]);const i=s=>{n(s),typeof window<"u"&&localStorage.setItem("language",s),document.documentElement.dir=s==="ar"?"rtl":"ltr"},r=s=>Nm[e][s]||Nm.en[s]||s;return S.jsx(Rv.Provider,{value:{language:e,setLanguage:i,t:r},children:t})},Xn=()=>{const t=Te.useContext(Rv);if(!t)throw new Error("useLanguage must be used within LanguageProvider");return t},ub=({planet:t,onClose:e,showComparison:n,comparisonPlanets:i,onChooseAsA:r,onChooseAsB:s,solarApi:a})=>{var C,K,ee,I,Z;let l={mercury:"https://science.nasa.gov/mercury/",venus:"https://science.nasa.gov/venus/",earth:"https://science.nasa.gov/earth/",mars:"https://science.nasa.gov/mars/",jupiter:"https://science.nasa.gov/jupiter/",saturn:"https://science.nasa.gov/saturn/",uranus:"https://science.nasa.gov/uranus/",neptune:"https://science.nasa.gov/neptune/",sun:"https://science.nasa.gov/sun/"}[t.id.toLowerCase()]||"https://science.nasa.gov/solar-system/";(t.isMoon||t.parentId)&&(l=`https://www.nasa.gov/search?q=${encodeURIComponent(t.name)}`);const{t:c,language:d}=Xn(),[f,h]=Te.useState(!1),[m,_]=Te.useState(!1),y=t.parentId,p=k=>{if("AudioContext"in window||"webkitAudioContext"in window)try{const V=window.AudioContext||window.webkitAudioContext,D=new V,F=D.currentTime;if(k==="chime"){const O=D.createOscillator(),Y=D.createOscillator(),de=D.createGain();O.type="sine",O.frequency.setValueAtTime(880,F),O.frequency.exponentialRampToValueAtTime(1760,F+.15),Y.type="triangle",Y.frequency.setValueAtTime(1320,F),de.gain.setValueAtTime(.12,F),de.gain.exponentialRampToValueAtTime(.001,F+.8),O.connect(de),Y.connect(de),de.connect(D.destination),O.start(F),Y.start(F),O.stop(F+.8),Y.stop(F+.8)}else if(k==="swoosh"){const O=D.createOscillator(),Y=D.createBiquadFilter(),de=D.createGain();O.type="sawtooth",O.frequency.setValueAtTime(100,F),O.frequency.exponentialRampToValueAtTime(400,F+.5),Y.type="lowpass",Y.frequency.setValueAtTime(300,F),Y.frequency.exponentialRampToValueAtTime(1500,F+.4),Y.Q.setValueAtTime(5,F),de.gain.setValueAtTime(.06,F),de.gain.exponentialRampToValueAtTime(.001,F+.6),O.connect(Y),Y.connect(de),de.connect(D.destination),O.start(F),O.stop(F+.6)}else if(k==="beep"){const O=D.createOscillator(),Y=D.createGain();O.type="sine",O.frequency.setValueAtTime(1e3,F),Y.gain.setValueAtTime(.04,F),Y.gain.exponentialRampToValueAtTime(.001,F+.12),O.connect(Y),Y.connect(D.destination),O.start(F),O.stop(F+.15)}}catch(V){console.error(V)}},u=()=>{if(!("speechSynthesis"in window)){alert(d==="ar"?"متصفحك لا يدعم توليد الصوت.":"Text-to-speech is not supported in your browser.");return}if(m){window.speechSynthesis.cancel(),_(!1),p("beep");return}p("chime");const k=v?g:c(t.id)||t.name,V=d==="ar"?"معلومات سريعة":"Quick Facts",D=c("diameter"),F=`${t.diameter.toLocaleString()} ${c("km")}`,O=c("funFact");let Y=`${k}. ${N}. ${V}: ${D} ${F}. ${O}: ${ie}.`;Y=Y.replace(/×/g,d==="ar"?"مضروبة في":"times"),Y=Y.replace(/\^/g,d==="ar"?"أس":"power of");const de=Y.match(/[^.!?،؟]+[.!?،؟]*/g)||[Y];let be=0;const X=()=>{if(be>=de.length){_(!1);return}const q=de[be].trim();if(!q){be++,X();return}const ne=new SpeechSynthesisUtterance(q);ne.lang=d==="ar"?"ar-SA":"en-US";const Se=window.speechSynthesis.getVoices().find(_e=>d==="ar"?_e.lang.startsWith("ar"):_e.lang.startsWith("en"));Se&&(ne.voice=Se),ne.rate=d==="ar"?.95:1.05,ne.pitch=1,ne.onend=()=>{be++,X()},ne.onerror=_e=>{_(!1)},window.speechSynthesis.speak(ne)};_(!0),X()};Te.useEffect(()=>{"speechSynthesis"in window&&window.speechSynthesis.cancel(),_(!1)},[t]),Te.useEffect(()=>()=>{"speechSynthesis"in window&&window.speechSynthesis.cancel()},[]);const v=t.isMoon||y;let g=t.name,M=t.description,R=t.funFact;if(v){const k=t.name.toLowerCase().replace(/\s+/g,""),V=c(k);V&&V!==k&&(g=V),M=`${c("moonOf")} ${c(y)||y}.`,R=`${c("clickLearnMore")}.`}const b=y?` • ${c("moonOf")} ${c(y)||y}`:"",w=lb(t.id),N=w?c(w.description):v?M:t.description,ie=w?c(w.funFact):v?R:t.funFact,x=k=>{let V=k;return V=V.replace(/Earth years/g,c("earthYears")),V=V.replace(/Earth days/g,c("earthDays")),V=V.replace(/hours/g,c("hours")),V=V.replace(/minutes/g,c("minutes")),V=V.replace(/seconds/g,c("seconds")),V=V.replace(/days/g,c("days")),V};return Te.useEffect(()=>{var k,V,D;if(a&&t){(k=a==null?void 0:a.stopFollowPlanet)==null||k.call(a);const F=t.isMoon,O=t.parentId,Y=F&&O?`${O}:${t.name}`:null;if(F&&Y&&(a!=null&&a.followMoon)){(V=a==null?void 0:a.pauseMoonOrbit)==null||V.call(a,Y);const de=Math.max(1.5,t.radius+.8);setTimeout(()=>{var be;(be=a==null?void 0:a.followMoon)==null||be.call(a,Y,de,!0)},100)}else{(D=a==null?void 0:a.selectPlanet)==null||D.call(a,t.id);const de=Math.max(1.5,t.radius+.8);setTimeout(()=>{var be;(be=a==null?void 0:a.followPlanet)==null||be.call(a,t.id,de,!0)},100)}}return()=>{var F,O;a&&((F=a==null?void 0:a.stopFollowPlanet)==null||F.call(a),(O=a==null?void 0:a.resumeMoonOrbit)==null||O.call(a))}},[t,a]),S.jsx("div",{className:`absolute top-20 ${d==="ar"?"left-5":"right-5"} w-80 liquid-glass text-white rounded-2xl overflow-hidden z-20 animate-slideIn transition-all duration-500`,children:S.jsxs("div",{className:"relative",children:[S.jsx("button",{onClick:e,className:`absolute top-3 ${d==="ar"?"left-3":"right-3"} p-1 liquid-glass-button`,children:S.jsx(Cv,{size:20})}),S.jsxs("div",{className:"p-5",children:[S.jsxs("div",{className:"flex items-center justify-between mb-1 gap-2",children:[S.jsxs("h2",{className:"text-2xl font-bold pr-6",children:[v?g:c(t.id)||t.name,b]}),S.jsx("button",{onClick:u,className:`p-2 rounded-full transition-all duration-300 flex items-center justify-center relative ${m?"bg-cyan-500/30 text-cyan-300 border border-cyan-400/50 scale-110 shadow-lg shadow-cyan-500/25 pulse-glow":"bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white border border-white/10 hover:scale-105"}`,title:m?d==="ar"?"إيقاف السرد":"Stop Narrator":d==="ar"?"تشغيل السرد الصوتي":"Play Narrator",children:m?S.jsxs("div",{className:"flex items-center gap-1.5 px-1",children:[S.jsxs("div",{className:"flex items-end gap-0.5 h-4 w-5",children:[S.jsx("span",{className:"w-0.5 bg-cyan-300 rounded-full animate-wave-1 origin-bottom h-full"}),S.jsx("span",{className:"w-0.5 bg-cyan-300 rounded-full animate-wave-2 origin-bottom h-3/4"}),S.jsx("span",{className:"w-0.5 bg-cyan-300 rounded-full animate-wave-3 origin-bottom h-full"}),S.jsx("span",{className:"w-0.5 bg-cyan-300 rounded-full animate-wave-4 origin-bottom h-1/2"})]}),S.jsx(Uf,{size:16,className:"text-cyan-300"})]}):S.jsx(Ff,{size:18})})]}),S.jsx("div",{className:"w-full h-0.5 bg-white/20 mb-4"}),S.jsx("style",{children:`
            @keyframes bounce-wave {
              0%, 100% { transform: scaleY(0.3); }
              50% { transform: scaleY(1); }
            }
            .animate-wave-1 { animation: bounce-wave 0.6s ease-in-out infinite; }
            .animate-wave-2 { animation: bounce-wave 0.5s ease-in-out infinite 0.15s; }
            .animate-wave-3 { animation: bounce-wave 0.7s ease-in-out infinite 0.3s; }
            .animate-wave-4 { animation: bounce-wave 0.4s ease-in-out infinite 0.45s; }
            
            @keyframes pulse-glow {
              0%, 100% { box-shadow: 0 0 5px rgba(6, 182, 212, 0.2); }
              50% { box-shadow: 0 0 15px rgba(6, 182, 212, 0.6); }
            }
            .pulse-glow {
              animation: pulse-glow 2s infinite;
            }
          `}),n&&S.jsxs("div",{className:"flex gap-2 mb-4",children:[S.jsx("button",{className:"px-3 py-1 liquid-glass-button text-xs font-semibold disabled:opacity-50",onClick:()=>r&&r(t),disabled:((C=i==null?void 0:i.planetA)==null?void 0:C.id)===t.id,children:((K=i==null?void 0:i.planetA)==null?void 0:K.id)===t.id?c("chosenAsA"):c("chooseAsA")}),S.jsx("button",{className:"px-3 py-1 liquid-glass-button text-xs font-semibold disabled:opacity-50",onClick:()=>s&&s(t),disabled:((ee=i==null?void 0:i.planetB)==null?void 0:ee.id)===t.id||((I=i==null?void 0:i.planetA)==null?void 0:I.id)===t.id,children:((Z=i==null?void 0:i.planetB)==null?void 0:Z.id)===t.id?c("chosenAsB"):c("chooseAsB")})]}),S.jsxs("div",{className:"space-y-4",children:[S.jsx("p",{className:"text-sm text-gray-300",children:N}),S.jsxs("div",{className:"grid grid-cols-2 gap-2 text-sm",children:[S.jsxs("div",{children:[S.jsx("h3",{className:"text-gray-400",children:c("diameter")}),S.jsxs("p",{children:[t.diameter.toLocaleString()," ",c("km")]})]}),S.jsxs("div",{children:[S.jsx("h3",{className:"text-gray-400",children:c("mass")}),S.jsx("p",{children:d==="ar"?t.mass.replace(/\bkg\b/gi,"كغ"):t.mass})]}),S.jsxs("div",{children:[S.jsx("h3",{className:"text-gray-400",children:c("dayLength")}),S.jsx("p",{children:x(t.dayLength).replace(/\(equator\)/g,` ${c("equator")}`)})]}),S.jsxs("div",{children:[S.jsx("h3",{className:"text-gray-400",children:c("yearLength")}),S.jsx("p",{children:x(t.yearLength)})]}),S.jsxs("div",{children:[S.jsx("h3",{className:"text-gray-400",children:c("avgTemp")}),S.jsx("p",{children:t.avgTemp.replace(/\(surface\)/g,` ${c("surface")}`)})]}),S.jsxs("div",{children:[S.jsx("h3",{className:"text-gray-400",children:c("distanceFromSun")}),S.jsxs("p",{children:[(t.distanceFromSun*.1).toFixed(1)," ",c("millionKm")]})]})]}),t.moons&&t.moons.length>0&&S.jsxs("div",{children:[S.jsxs("h3",{className:"text-gray-400 mb-1",children:[c("moons")," (",t.moons.length,")"]}),S.jsxs("div",{className:`flex flex-wrap gap-1 ${d==="ar"?"justify-end":"justify-start"}`,children:[t.moons.slice(0,5).map((k,V)=>S.jsx("button",{onClick:()=>{var D;return(D=a==null?void 0:a.selectMoon)==null?void 0:D.call(a,t.id,k.name)},className:"bg-white/10 hover:bg-white/25 active:bg-white/35 px-2 py-1 rounded-full text-xs transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer text-white border border-white/5 hover:border-white/20",children:d==="ar"&&c(k.name.toLowerCase().replace(/\s+/g,""))||k.name},V)),t.moons.length>5&&S.jsxs("span",{className:"bg-white/10 px-2 py-1 rounded-full text-xs",children:["+",t.moons.length-5," ",c("more")]})]})]}),S.jsxs("div",{children:[S.jsx("h3",{className:"text-gray-400 mb-1",children:c("funFact")}),S.jsx("p",{className:"text-sm italic",children:ie})]}),S.jsx("div",{children:S.jsxs("a",{href:l,target:"_blank",rel:"noopener noreferrer",className:`inline-flex items-center gap-2 mt-2 px-4 py-2 liquid-glass-button text-white font-semibold ${f?"opacity-70 pointer-events-none":""}`,onClick:()=>h(!0),children:[f&&S.jsxs("svg",{className:"animate-spin h-5 w-5 text-blue-400",fill:"none",viewBox:"0 0 24 24",children:[S.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),S.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"})]}),c("learnMore")]})})]})]})]})})},db=({speed:t,onChange:e,paused:n,onPauseToggle:i,hideMoons:r,onHideMoonsChange:s,showLabels:a,onShowLabelsChange:o,planetScale:l,onPlanetScaleChange:c})=>{const{t:d}=Xn();return S.jsxs("div",{className:"liquid-glass liquid-glass-glow rounded-xl p-3 text-white flex items-center gap-3",children:[S.jsx(QT,{size:18,className:"text-gray-400"}),S.jsxs("div",{className:"flex flex-col",children:[S.jsx("div",{className:"text-sm font-medium mb-1",children:d("simulationSpeed")}),S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsx("span",{className:"text-xs",children:d("slow")}),S.jsx("input",{type:"range",min:.1,max:2,step:.1,value:t,onChange:f=>e(parseFloat(f.target.value)),className:"w-32 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer",disabled:n}),S.jsx("span",{className:"text-xs",children:d("fast")})]})]}),S.jsxs("div",{className:"text-sm font-bold ml-2",children:[t.toFixed(1),"x"]}),S.jsx("button",{onClick:i,className:"ml-4 p-2 liquid-glass-button shiny-border-hover","aria-label":d(n?"play":"pause"),type:"button",children:n?S.jsx(nb,{size:18}):S.jsx(tb,{size:18})}),S.jsxs("div",{className:"flex items-center gap-2 ml-2",children:[S.jsxs("label",{className:"flex items-center gap-1 text-xs bg-white/10 px-2 py-1 rounded-lg hover:bg-white/20 transition-colors cursor-pointer",children:[S.jsx("input",{type:"checkbox",checked:!!r,onChange:f=>s==null?void 0:s(f.target.checked),className:"accent-blue-500 w-3 h-3"}),d(r?"showMoons":"hideMoons")]}),S.jsxs("label",{className:"flex items-center gap-1 text-xs bg-white/10 px-2 py-1 rounded-lg hover:bg-white/20 transition-colors cursor-pointer",children:[S.jsx("input",{type:"checkbox",checked:!!a,onChange:f=>o==null?void 0:o(f.target.checked),className:"accent-blue-500 w-3 h-3"}),d(a?"hideLabels":"showLabels")]}),S.jsxs("label",{className:"flex items-center gap-1 text-xs bg-white/10 px-2 py-1 rounded-lg hover:bg-white/20 transition-colors cursor-pointer",children:[S.jsx("span",{children:d("planetScale")}),S.jsx("input",{type:"range",min:.5,max:2,step:.05,value:l,onChange:f=>c==null?void 0:c(parseFloat(f.target.value)),className:"w-16 accent-blue-500"}),S.jsxs("span",{children:[l==null?void 0:l.toFixed(2),"x"]})]})]})]})},fb=({planetA:t,planetB:e,onReset:n,onClose:i})=>{var l,c;const{t:r}=Xn(),s=d=>{let f=d;return f=f.replace(/Earth years/g,r("earthYears")),f=f.replace(/Earth days/g,r("earthDays")),f=f.replace(/hours/g,r("hours")),f=f.replace(/minutes/g,r("minutes")),f=f.replace(/seconds/g,r("seconds")),f=f.replace(/days/g,r("days")),f},a=t&&e?(t.orbitSpeed/e.orbitSpeed).toFixed(2):null,o=t&&e?Math.abs(t.distanceFromSun-e.distanceFromSun)*.1:null;return S.jsx("div",{className:"absolute top-20 left-1/2 transform -translate-x-1/2 w-[600px] max-w-[90vw] liquid-glass liquid-glass-glow text-white rounded-2xl overflow-hidden z-20 transition-all duration-300 ease-in-out animate-slideIn",children:S.jsxs("div",{className:"relative",children:[S.jsxs("div",{className:"flex justify-between items-center p-4 border-b border-white/20",children:[S.jsx("h2",{className:"text-xl font-bold",children:r("planetComparison")}),S.jsxs("div",{className:"flex gap-2",children:[S.jsx("button",{onClick:n,className:"liquid-glass-button shiny-border-hover px-3 py-1 text-sm",children:r("reset")}),S.jsx("button",{onClick:i,className:"liquid-glass-button shiny-border-hover p-1",children:S.jsx(Cv,{size:20})})]})]}),S.jsx("div",{className:"p-5",children:!t&&!e?S.jsx("div",{className:"text-center py-8",children:S.jsx("p",{className:"text-gray-300",children:r("selectTwoPlanets")})}):S.jsxs("div",{children:[S.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[S.jsxs("div",{className:"col-span-1",children:[S.jsx("h3",{className:"text-gray-400 border-b border-gray-700 pb-2 mb-2",children:r("property")}),S.jsxs("div",{className:"space-y-3",children:[S.jsx("p",{className:"py-1",children:r("name")}),S.jsx("p",{className:"py-1",children:r("diameter")}),S.jsx("p",{className:"py-1",children:r("mass")}),S.jsx("p",{className:"py-1",children:r("dayLength")}),S.jsx("p",{className:"py-1",children:r("yearLength")}),S.jsx("p",{className:"py-1",children:r("distanceFromSun")}),S.jsx("p",{className:"py-1",children:r("orbitalSpeed")}),S.jsx("p",{className:"py-1",children:r("avgTemperature")}),S.jsx("p",{className:"py-1",children:r("moons")})]})]}),S.jsxs("div",{className:"col-span-1",children:[S.jsx("h3",{className:`text-center border-b border-gray-700 pb-2 mb-2 ${t?"text-white":"text-gray-500"}`,children:t?r(t.id)||t.name:r("selectPlanetA")}),t?S.jsxs("div",{className:"space-y-3",children:[S.jsx("p",{className:"py-1 text-center",children:r(t.id)||t.name}),S.jsxs("p",{className:"py-1 text-center",children:[t.diameter.toLocaleString()," km"]}),S.jsx("p",{className:"py-1 text-center",children:t.mass}),S.jsx("p",{className:"py-1 text-center",children:s(t.dayLength)}),S.jsx("p",{className:"py-1 text-center",children:s(t.yearLength)}),S.jsxs("p",{className:"py-1 text-center",children:[(t.distanceFromSun*.1).toFixed(1)," ",r("millionKm")]}),S.jsx("p",{className:"py-1 text-center",children:t.orbitSpeed.toFixed(4)}),S.jsx("p",{className:"py-1 text-center",children:t.avgTemp}),S.jsx("p",{className:"py-1 text-center",children:((l=t.moons)==null?void 0:l.length)||0})]}):S.jsx("div",{className:"h-full flex items-center justify-center",children:S.jsx("p",{className:"text-gray-500 text-sm",children:r("clickAPlanet")})})]}),S.jsxs("div",{className:"col-span-1",children:[S.jsx("h3",{className:`text-center border-b border-gray-700 pb-2 mb-2 ${e?"text-white":"text-gray-500"}`,children:e?r(e.id)||e.name:r("selectPlanetB")}),e?S.jsxs("div",{className:"space-y-3",children:[S.jsx("p",{className:"py-1 text-center",children:r(e.id)||e.name}),S.jsxs("p",{className:"py-1 text-center",children:[e.diameter.toLocaleString()," km"]}),S.jsx("p",{className:"py-1 text-center",children:e.mass}),S.jsx("p",{className:"py-1 text-center",children:s(e.dayLength)}),S.jsx("p",{className:"py-1 text-center",children:s(e.yearLength)}),S.jsxs("p",{className:"py-1 text-center",children:[(e.distanceFromSun*.1).toFixed(1)," ",r("millionKm")]}),S.jsx("p",{className:"py-1 text-center",children:e.orbitSpeed.toFixed(4)}),S.jsx("p",{className:"py-1 text-center",children:e.avgTemp}),S.jsx("p",{className:"py-1 text-center",children:((c=e.moons)==null?void 0:c.length)||0})]}):S.jsx("div",{className:"h-full flex items-center justify-center",children:S.jsx("p",{className:"text-gray-500 text-sm",children:r("clickAPlanet")})})]})]}),t&&e&&t.id!==e.id&&S.jsxs("div",{className:"mt-6 p-4 bg-white/10 rounded-lg",children:[S.jsx("h3",{className:"text-lg font-bold mb-3",children:r("comparisonResults")}),S.jsxs("div",{className:"space-y-2",children:[S.jsxs("p",{children:[S.jsxs("span",{className:"text-gray-300",children:[r("sizeDifference"),":"]})," ",t.diameter>e.diameter&&e.diameter!==0?`${r(t.id)||t.name} ${r("is")} ${(t.diameter/e.diameter).toFixed(1)}x ${r("larger")} ${r("than")} ${r(e.id)||e.name}`:e.diameter>t.diameter&&t.diameter!==0?`${r(e.id)||e.name} ${r("is")} ${(e.diameter/t.diameter).toFixed(1)}x ${r("larger")} ${r("than")} ${r(t.id)||t.name}`:r("sameSizeMoons")]}),S.jsxs("p",{children:[S.jsxs("span",{className:"text-gray-300",children:[r("orbitalSpeedRatio"),":"]})," ",a&&e.orbitSpeed!==0?`${r(t.id)||t.name} ${r("is")} ${a}x ${parseFloat(a)>1?r("faster"):r("slower")} ${r("than")} ${r(e.id)||e.name}`:"N/A"]}),S.jsxs("p",{children:[S.jsxs("span",{className:"text-gray-300",children:[r("distanceBetweenPlanets"),":"]})," ",o&&`${r("approximately")} ${o.toFixed(1)} ${r("million")} ${r("kilometers")}`]})]})]})]})})]})})},hb=({isOpen:t,onLanguageSelect:e})=>{Xn();const[n,i]=Te.useState(null);if(!t)return null;const r=a=>{i(a)},s=()=>{n&&e(n)};return S.jsxs("div",{className:"fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[99999]",children:[S.jsxs("div",{className:"liquid-glass liquid-glass-glow rounded-3xl p-10 max-w-md w-full mx-4 animate-fadeIn",children:[S.jsx("div",{className:"flex justify-center mb-8",children:S.jsx("div",{className:"p-4 bg-gradient-to-br from-cyan-500/30 to-blue-500/20 rounded-full border border-cyan-400/50",children:S.jsx(Av,{size:40,className:"text-cyan-400"})})}),S.jsxs("h1",{className:"text-3xl font-bold text-center text-white mb-3 flex flex-col items-center gap-1",children:[S.jsx("span",{className:"text-2xl md:text-3xl",children:"Select Language"}),S.jsx("span",{className:"text-xl md:text-2xl text-cyan-400 font-arabic",children:"اختر لغة"})]}),S.jsxs("div",{className:"text-center text-gray-300 mb-8 flex flex-col gap-1 text-sm md:text-base",children:[S.jsx("span",{children:"Please choose your preferred language"}),S.jsx("span",{className:"text-cyan-300/80 font-arabic",children:"يرجى اختيار لغتك المفضلة"})]}),S.jsxs("div",{className:"flex flex-col gap-4 mb-8",children:[S.jsxs("button",{onClick:()=>r("en"),className:`w-full transition-all duration-200 transform active:scale-110 rounded-xl font-bold py-4 px-6 liquid-glass-button shiny-border-hover flex items-center justify-between ${n==="en"?"scale-110 !bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/35 border border-blue-400":"text-white hover:scale-105"}`,children:[S.jsxs("div",{className:"flex items-center gap-3",children:[S.jsx("span",{className:"text-2xl",children:"🇺🇸"}),S.jsx("span",{className:"text-lg",children:"English"})]}),S.jsx("span",{className:"text-sm text-gray-300",children:"الإنجليزية"})]}),S.jsxs("button",{onClick:()=>r("ar"),className:`w-full transition-all duration-200 transform active:scale-110 rounded-xl font-bold py-4 px-6 liquid-glass-button shiny-border-hover flex items-center justify-between ${n==="ar"?"scale-110 !bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg shadow-green-500/35 border border-green-400":"text-white hover:scale-105"}`,children:[S.jsxs("div",{className:"flex items-center gap-3",children:[S.jsx("span",{className:"text-2xl",children:"🇸🇦"}),S.jsx("span",{className:"text-lg font-arabic",children:"عربي"})]}),S.jsx("span",{className:"text-sm text-gray-300",children:"Arabic"})]})]}),S.jsx("button",{onClick:s,disabled:!n,className:`w-full py-3 px-6 font-bold rounded-xl transition-all duration-200 text-base liquid-glass-button shiny-border-hover ${n?"text-white cursor-pointer hover:scale-105 shadow-md shadow-cyan-500/20":"opacity-40 cursor-not-allowed text-gray-400"}`,children:S.jsxs("span",{className:"flex items-center justify-center gap-2",children:[S.jsx("span",{children:"OK"}),S.jsx("span",{className:"text-gray-400",children:"/"}),S.jsx("span",{className:"font-arabic",children:"حسنا"})]})})]}),S.jsx("style",{children:`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `})]})},pb=()=>{const{language:t,setLanguage:e,t:n}=Xn(),[i,r]=Te.useState(!1),s=[{code:"en",label:n("english"),flag:"🇬🇧",color:"from-blue-600 to-blue-700"},{code:"ar",label:n("arabic"),flag:"🇸🇦",color:"from-green-600 to-green-700"}],a=o=>{e(o),r(!1)};return S.jsxs("div",{className:"relative",children:[S.jsx("button",{onClick:()=>r(!i),className:"p-2 rounded-full liquid-glass-button shiny-border-hover text-cyan-400",title:"Change language",children:S.jsx(Av,{size:20})}),i&&S.jsx("div",{className:"absolute top-12 right-0 liquid-glass liquid-glass-glow rounded-2xl py-2 z-50 min-w-max",children:s.map(o=>S.jsxs("button",{onClick:()=>a(o.code),className:`w-full px-4 py-2 text-left flex items-center gap-3 transition-all duration-200 liquid-glass-button ${t===o.code?`!bg-gradient-to-r ${o.color} text-white font-semibold`:"text-gray-300 hover:text-white"}`,children:[S.jsx("span",{className:"text-lg",children:o.flag}),S.jsx("span",{children:o.label}),t===o.code&&S.jsx("span",{className:"ml-auto text-cyan-300",children:"✓"})]},o.code))}),i&&S.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>r(!1)})]})},Jo={mercury:{prologue:{en:"Meet Mercury 🔴, the speedy messenger of the skies! Racing around the Sun in just 88 days, this little world experiences extreme temperature swings—from scorching 430°C by day to freezing -180°C at night. It's the closest planet to our star, and boy, does it feel the heat!",ar:"تعرف على عطارد 🔴، الرسول السريع في السماء! يدور حول الشمس في 88 يوماً فقط، ويعيش هذا العالم الصغير تقلبات حرارية متطرفة—من 430°C حارقة نهاراً إلى -180°C متجمدة ليلاً. إنه أقرب كوكب إلى نجمنا، ويالها من حرارة شديدة!"},story:{en:"Despite being the smallest planet, Mercury has a giant iron heart—its core makes up 60% of its mass! Imagine squeezing a metal ball the size of a car into a walnut shell. That's essentially what Mercury is—a heavy metal world wearing a thin rocky jacket.",ar:"بالرغم من أنه أصغر كوكب، إلا أن عطارد يحمل قلباً حديدياً ضخماً—يشكل لبّه 60% من كتلته! تخيل أن تضغط كرة معدنية بحجم سيارة داخل قشرة جوز. هذا عطارد بالضبط—عالم معدني ثقيل يرتدي معطفاً صخرياً رقيقاً."},massExplanation:{en:"At 3.3 × 10²³ kg, Mercury may be lightweight compared to Earth, but it's surprisingly dense—second only to Earth in the whole Solar System!",ar:"بكتلة 3.3 × 10²³ كغ، قد يكون عطارد خفيفاً مقارنة بالأرض، لكنه مدهش في كثافته—ثاني أكثر الكواكب كثافة في النظام الشمسي بعد الأرض!"}},venus:{prologue:{en:"Behold Venus 🟡, the dazzling morning and evening star! Shrouded in thick clouds of sulfuric acid, this beauty is actually a hellish world with surface temperatures hot enough to melt lead. She's Earth's 'evil twin'—similar size, totally different personality!",ar:"ألقِ نظرة على الزهرة 🟡، النجم اللامع في الصباح والمساء! مغطاة بغيوم سميكة من حامض الكبريتيك، هذه الجمال عالم جهنمي حقيقي مع درجات حرارة سطح تذيب الرصاص. إنها 'التوأم الشرير' للأرض—نفس الحجم، شخصية مختلفة تماماً!"},story:{en:"Venus is the ultimate rebel—she rotates backwards! While most planets spin like tops, Venus does a slow backspin, making her day longer than her year. Sunrise in the west? On Venus, that's perfectly normal!",ar:"الزهرة هي المتمردة بامتياز—تدور في الاتجاه المعاكس! بينما تدور معظم الكواكب كالأعاصير، تدور الزهرة ببطء للخلف، مما يجعل يومها أطول من سنةها. الشمس تشرق من الغرب؟ على الزهرة، هذا طبيعي تماماً!"},massExplanation:{en:"Weighing 4.87 × 10²⁴ kg, Venus is about 80% of Earth's mass. If Earth is a basketball, Venus is a slightly deflated one—close enough in size that they could swap clothes!",ar:"بكتلة 4.87 × 10²⁴ كغ، تبلغ كتلة الزهرة حوالي 80% من كتلة الأرض. إذا كانت الأرض كرة سلة، فالزهرة كرة مفرغة قليلاً—قريبة جداً في الحجم لدرجة أنهما يمكن أن تتبادلا الملابس!"}},earth:{prologue:{en:"Welcome home to Earth 🌍, the blue marble suspended in space! The only known oasis of life in the cosmos, our planet is 71% water and 100% awesome. From towering mountains to deep ocean trenches, Earth is a masterpiece of cosmic artistry!",ar:"أهلاً بك في المنزل على الأرض 🌍، الكرة الزرقاء المعلقة في الفضاء! الواحة الوحيدة المعروفة للحياة في الكون، كوكبنا 71% ماء و100% رائع. من الجبال الشاهقة إلى خنادق المحيطات العميقة، الأرض تحفة فنية كونية!"},story:{en:"Earth isn't just special—it's a precious jewel. With the perfect distance from the Sun, a protective magnetic shield, and just the right amount of water, it's like the universe won the lottery creating this place. Cherish it, because there's no Planet B!",ar:"الأرض ليست مميزة فقط—إنها جوهرة ثمينة. مع المسافة المثالية من الشمس، ودرع مغناطيسي وقائي، وكمية ماء مناسبة تماماً، ما أعظم الخالق الذي خلق هذا المكان. اعتنِ بها، لأنه لا يوجد كوكب بديل!"},massExplanation:{en:"At 5.97 × 10²⁴ kg, Earth is the densest planet in the Solar System. All that rock and metal packed together makes us the heavyweight champion of the rocky worlds!",ar:"بكتلة 5.97 × 10²⁴ كغ، الأرض هي أكثر الكواكب كثافة في النظام الشمسي. كل هذه الصخور والمعادن المضغوطة معاً تجعلنا بطل الأوزان الثقيل في عالم الكواكب الصخرية!"}},mars:{prologue:{en:"Greetings from Mars 🔴, the Red Planet that has captured human imagination for millennia! With its rusty iron oxide surface and towering Olympus Mons volcano, Mars is the ultimate frontier waiting to be explored. The future home of humanity?",ar:"تحيات من المريخ 🔴، الكوكب الأحمر الذي أسّر خيال البشرية لآلاف السنين! مع سطحه المغطى بأكسيد الحديد الصدئ وبركان أولمبس مونس الشاهق، المريخ هو الحدود المطلقة في انتظار الاستكشاف. الموطن المستقبلي للبشرية؟"},story:{en:"Mars is a world of superlatives! It hosts the Solar System's biggest volcano (Olympus Mons) and deepest canyon (Valles Marineris). Its two tiny moons, Phobos and Deimos, are like captured asteroids racing around their rust-colored master.",ar:"المريخ عالم من القمم! يضم أكبر بركان في النظام الشمسي (أولمبس مونس) وأعمق وادٍ (فاليس مارينيريس). قمراه الصغيران، فوبوس وديموس، ككويكبات مقبوض عليها تتسابقان حول سيدها ذي اللون الصدئ."},massExplanation:{en:"At 6.42 × 10²³ kg, Mars is only about 10% as massive as Earth. It's the lightweight of the rocky planets—but what it lacks in heft, it makes up for in sheer magnificence!",ar:"بكتلة 6.42 × 10²³ كغ، المريخ يمثل فقط 10% من كتلة الأرض. إنه الخفيف بين الكواكب الصخرية—لكن ما ينقصه في الوزن، يعوضه في الروعة المطلقة!"}},jupiter:{prologue:{en:"Marvel at Jupiter 🟠, the undisputed king of planets! This gas giant is so massive that all other planets could fit inside it with room to spare. With its mesmerizing bands of clouds and the Great Red Spot storm raging for centuries, Jupiter is a planet of superlatives!",ar:"تأمل في المشتري 🟠، ملك الكواكب بلا منازع! هذا العملاق الغازي ضخم لدرجة أن جميع الكواكب الأخرى يمكن أن تتسع بداخله مع مساحة فارغة. مع نطاقاته السحابية الرائعة والبقعة الحمراء العظيمة التي تشتعل منذ قرون، المشتري كوكب من القمم!"},story:{en:"Jupiter isn't just big—it's a planetary bodyguard! Its immense gravity shields Earth by flinging away dangerous comets and asteroids. Some scientists think Jupiter might have saved life on Earth countless times. Thanks, big guy!",ar:"المشتري ليس كبيراً فقط—إنه حارس كوكبي! جاذبيته الهائلة تحمي الأرض بإبعاد المذنبات والكويكبات الخطيرة. يعتقد بعض العلماء أن المشتري ربما أنقذ الحياة على الأرض مرات لا تحصى. شكراً يا عملاق!"},massExplanation:{en:"Tipping the scales at 1.90 × 10²⁷ kg, Jupiter is a beast! That's 318 Earth masses packed into one giant ball of gas. You could fit 1,300 Earths inside Jupiter's volume—now that's planetary overachievement!",ar:"بكتلة 1.90 × 10²⁷ كغ، المشتري وحش! هذا يعادل 318 كتلة أرض مضغوطة في كرة غازية واحدة. يمكن أن تتسع 1300 أرض داخل حجم المشتري—هذا إنجاز كوكبي فاق التوقعات!"}},saturn:{prologue:{en:"Be enchanted by Saturn 🪐, the jewel of the Solar System! Adorned with magnificent icy rings that stretch nearly 300,000 kilometers, this gas giant floats like a delicate ornament in space. Despite its enormous size, Saturn is light enough to float in a bathtub—if you could find one big enough!",ar:"انبهر بزحل 🪐، جوهرة النظام الشمسي! مزينة بحلقات جليدية رائعة تمتد لما يقرب من 300,000 كيلومتر، يطفو هذا العملاق الغازي كزخرفة رقيقة في الفضاء. بالرغم من حجمه الهائل، زحل خفيف بما يكفي ليطفو في حوض استحمام—إذا وجدت واحداً كبيراً بما يكفي!"},story:{en:"Saturn's rings aren't solid—they're made of billions of ice chunks, some as small as grains of sand, others as big as mountains! Each ring particle is on its own orbit, dancing around Saturn in a cosmic ballet that has lasted billions of years.",ar:"حلقات زحل ليست صلبة—إنها مصنوعة من مليارات قطع الجليد، بعضها صغير كحبات الرمل، وبعضها كبير كالجبال! كل جزء في الحلقات في مداره الخاص، يرقص حول زحل في باليه كوني استمر مليارات السنين."},massExplanation:{en:"With 5.68 × 10²⁶ kg, Saturn is about 95 times Earth's mass. But here's the kicker—it's so low-density that if you had a bathtub 75,000 kilometers across, Saturn would bob around like a rubber duck!",ar:"بكتلة 5.68 × 10²⁶ كغ، زحل يمثل حوالي 95 كتلة أرضية. لكن المفاجأة—كثافته منخفضة جداً لدرجة أنه لو كان لديك حوض استحمام بعرض 75,000 كيلومتر، سيطفو زحل مثل بطة مطاطية!"}},uranus:{prologue:{en:"Discover Uranus 🔵, the ice giant that rolls through space on its side! With an axial tilt of 98 degrees, Uranus experiences 42-year summers and winters. This cyan-colored wonder is the coldest planet in the Solar System, with temperatures dropping to -224°C!",ar:"اكتشف أورانوس 🔵، العملاق الجليدي الذي يتدحرج في الفضاء على جانبه! مع ميل محوري 98 درجة، يعيش أورانوس صيفاً وشتاءً يستمر 42 سنة لكل منهما. هذا العجيب ذا اللون الأزرق الفيروزي هو أبرد كوكب في النظام الشمسي، مع درجات حرارة تنخفض إلى -224 درجة مئوية!"},story:{en:"Uranus is the ultimate oddball—it spins on its side! Scientists think a massive collision early in its history knocked it over. Imagine lying on the ground and rolling in a circle around a lamp—that's basically how Uranus orbits the Sun!",ar:"أورانوس هو الغريب بامتياز—يدور على جانبه! يعتقد العلماء أن تصادماً هائلاً في بداية تاريخه أطاح به. تخيل نفسك مستلقياً على الأرض وتتدحرج في دائرة حول مصباح—هذا بشكل أساسي كيف يدور أورانوس حول الشمس!"},massExplanation:{en:"At 8.68 × 10²⁵ kg, Uranus is about 14.5 Earth masses. It's the lightest of the gas and ice giants, but don't let that fool you—it can still hold onto 27 moons with that gravity!",ar:"بكتلة 8.68 × 10²⁵ كغ، أورانوس يعادل حوالي 14.5 كتلة أرضية. إنه الأخف بين العمالقة الغازية والجليدية، لكن لا تدع ذلك يخدعك—يمكنه الاحتفاظ بـ 27 قمراً بهذه الجاذبية!"}},neptune:{prologue:{en:"Journey to Neptune 🔵, the windiest world in the Solar System! This deep blue ice giant sits at the frigid edge of our planetary neighborhood, where winds scream at 2,100 km/h—faster than the speed of sound on Earth! It's so far that sunlight takes over 4 hours to reach it.",ar:"رحلة إلى نبتون 🔵، أعاصر عالم في النظام الشمسي! هذا العملاق الجليدي الأزرق العميق يجلس على الحافة المتجمدة لحيّنا الكوكبي، حيث الرياح تصرخ بسرعة 2100 كم/س—أسرع من سرعة الصوت على الأرض! إنه بعيد جداً لدرجة أن ضوء الشمس يستغرق أكثر من 4 ساعات ليصل إليه."},story:{en:"Neptune was the first planet found by math before it was seen! Astronomers noticed Uranus wobbling, calculated where an unseen planet must be, and pointed their telescopes—there it was! Sometimes the pen (and calculator) really is mightier than the sword.",ar:"نبتون أول كوكب تم العثور عليه بالرياضيات قبل رؤيته! لاحظ الفلكيون اهتزاز أورانوس، وحسبوا أين يجب أن يكون كوكب غير مرئي، ووجهوا تلسكوباتهم—وهناك كان! أحياناً القلم (والآلة الحاسبة) أقوى حقاً من السيف."},massExplanation:{en:"At 1.02 × 10²⁶ kg, Neptune is just a bit heavier than Uranus despite being smaller in size. Talk about packing a punch—this ice giant has some serious density hiding beneath those blue clouds!",ar:"بكتلة 1.02 × 10²⁶ كغ، نبتون أثقل قليلاً من أورانوس بالرغم من كونه أصغر حجماً. تحدث عن قوة مدمرة—هذا العملاق الجليدي يخفي بعض الكثافة الجادة تحت تلك الغيوم الزرقاء!"}}},mb=[{id:"easy",name:"Beginner",nameAr:" beginners",ageRange:"Grade 3-6",ageRangeAr:"3-6",difficulty:"easy",questions:[{id:"q1-easy",question:"What is the largest planet in our solar system?",questionAr:"ما هو أكبر كوكب في نظامنا الشمسي؟",options:["Earth","Mars","Jupiter","Saturn"],optionsAr:["الأرض","المريخ","المشتري","زحل"],correctAnswer:2,explanation:"Jupiter is the largest planet in our solar system!",explanationAr:"المشتري هو أكبر كوكب في نظامنا الشمسي!",difficulty:"easy"},{id:"q2-easy",question:'Which planet is known as the "Red Planet"?',questionAr:'أي كوكب يُعرف باسم "الكوكب الأحمر"؟',options:["Venus","Mars","Jupiter","Mercury"],optionsAr:["الزهرة","المريخ","المشتري","عطارد"],correctAnswer:1,explanation:'Mars is called the "Red Planet" because of its red color.',explanationAr:'يُسمى المريخ "الكوكب الأحمر" بسبب لونه الأحمر.',difficulty:"easy"},{id:"q3-easy",question:"What is at the center of our solar system?",questionAr:"ماذا يوجد في مركز نظامنا الشمسي؟",options:["Earth","Moon","Sun","Mars"],optionsAr:["الأرض","القمر","الشمس","المريخ"],correctAnswer:2,explanation:"The Sun is at the center of our solar system.",explanationAr:"الشمس في مركز نظامنا الشمسي.",difficulty:"easy"},{id:"q4-easy",question:"Which planet is closest to the Sun?",questionAr:"أي كوكب هو الأقرب إلى الشمس؟",options:["Mercury","Venus","Earth","Mars"],optionsAr:["عطارد","الزهرة","الأرض","المريخ"],correctAnswer:0,explanation:"Mercury is the closest planet to the Sun.",explanationAr:"عطارد هو الكوكب الأقرب إلى الشمس.",difficulty:"easy"},{id:"q5-easy",question:"What planet do we live on?",questionAr:"على أي كوكب نعيش؟",options:["Mars","Earth","Venus","Jupiter"],optionsAr:["المريخ","الأرض","الزهرة","المشتري"],correctAnswer:1,explanation:"We live on planet Earth!",explanationAr:"نحن نعيش على كوكب الأرض!",difficulty:"easy"},{id:"q6-easy",question:"Which planet has beautiful rings?",questionAr:"أي كوكب يمتلك حلقات جميلة؟",options:["Jupiter","Saturn","Mars","Earth"],optionsAr:["المشتري","زحل","المريخ","الأرض"],correctAnswer:1,explanation:"Saturn is famous for its beautiful ring system.",explanationAr:"زحل مشهور بنظام حلقاته الجميل.",difficulty:"easy"},{id:"q7-easy",question:"How many moons does Earth have?",questionAr:"كم قمراً تمتلكه الأرض؟",options:["0","1","2","3"],optionsAr:["0","1","2","3"],correctAnswer:1,explanation:"Earth has one moon called the Moon.",explanationAr:"الأرض تمتلك قمراً واحداً يسمى القمر.",difficulty:"easy"}]},{id:"medium",name:"Intermediate",nameAr:"intermediate",ageRange:"Grade 6-12",ageRangeAr:"6-12",difficulty:"medium",questions:[{id:"q1-medium",question:"Which planet has the longest day?",questionAr:"أي كوكب يمتلك أطول يوم؟",options:["Mercury","Venus","Earth","Mars"],optionsAr:["عطارد","الزهرة","الأرض","المريخ"],correctAnswer:1,explanation:"Venus has the longest day, taking 243 Earth days to rotate once.",explanationAr:"الزهرة تمتلك أطول يوم، حيث تستغرق 243 يوماً أرضياً للدوران مرة واحدة.",difficulty:"medium"},{id:"q2-medium",question:"What gas makes up most of Jupiter's atmosphere?",questionAr:"ما الغاز الذي يشكل معظم غلاف المشتري الجوي؟",options:["Oxygen","Nitrogen","Hydrogen","Carbon Dioxide"],optionsAr:["الأكسجين","النيتروجين","الهيدروجين","ثاني أكسيد الكربون"],correctAnswer:2,explanation:"Jupiter is mostly made of hydrogen gas.",explanationAr:"المشتري يتكون في الغالب من غاز الهيدروجين.",difficulty:"medium"},{id:"q3-medium",question:"Which planet rotates on its side?",questionAr:"أي كوكب يدور على جانبه؟",options:["Neptune","Saturn","Uranus","Mars"],optionsAr:["نبتون","زحل","أورانوس","المريخ"],correctAnswer:2,explanation:"Uranus rotates on its side with a 98-degree tilt.",explanationAr:"أورانوس يدور على جانبه مع ميل 98 درجة.",difficulty:"medium"},{id:"q4-medium",question:"What is the hottest planet in our solar system?",questionAr:"ما هو أكثر الكواكب سخونة في نظامنا الشمسي؟",options:["Mercury","Venus","Earth","Mars"],optionsAr:["عطارد","الزهرة","الأرض","المريخ"],correctAnswer:1,explanation:"Venus is the hottest planet due to its thick atmosphere.",explanationAr:"الزهرة هو أكثر الكواكب سخونة بسبب غلافه الجوي السميك.",difficulty:"medium"},{id:"q5-medium",question:"Which planet has the most moons?",questionAr:"أي كوكب يمتلك أكبر عدد من الأقمار؟",options:["Earth","Mars","Jupiter","Saturn"],optionsAr:["الأرض","المريخ","المشتري","زحل"],correctAnswer:3,explanation:"Saturn has over 80 known moons, more than any other planet.",explanationAr:"زحل يمتلك أكثر من 80 قمراً معروفاً، أكثر من أي كوكب آخر.",difficulty:"medium"},{id:"q6-medium",question:"What causes seasons on Earth?",questionAr:"ماذا يسبب الفصول على الأرض؟",options:["Distance from Sun","Earth's tilt","Moon phases","Solar flares"],optionsAr:["المسافة من الشمس","ميل الأرض","أطوار القمر","الانفجارات الشمسية"],correctAnswer:1,explanation:"Earth's 23.5-degree tilt causes the seasons.",explanationAr:"ميل الأرض بمقدار 23.5 درجة يسبب الفصول.",difficulty:"medium"},{id:"q7-medium",question:'Which planet is known as the "Blue Planet"?',questionAr:'أي كوكب يُعرف باسم "الكوكب الأزرق"؟',options:["Earth","Neptune","Uranus","Venus"],optionsAr:["الأرض","نبتون","أورانوس","الزهرة"],correctAnswer:0,explanation:'Earth is called the "Blue Planet" because of its oceans.',explanationAr:'تُسمى الأرض "الكوكب الأزرق" بسبب محيطاتها.',difficulty:"medium"}]},{id:"hard",name:"Advanced",nameAr:"advanced",ageRange:"Grade 12+",ageRangeAr:"12+",difficulty:"hard",questions:[{id:"q1-hard",question:"What is the escape velocity from Earth's surface?",questionAr:"ما هي سرعة الهروب من سطح الأرض؟",options:["7.9 km/s","11.2 km/s","15.3 km/s","20.1 km/s"],optionsAr:["7.9 كم/ث","11.2 كم/ث","15.3 كم/ث","20.1 كم/ث"],correctAnswer:1,explanation:"Earth's escape velocity is 11.2 km/s from the surface.",explanationAr:"سرعة الهروب من الأرض هي 11.2 كم/ث من السطح.",difficulty:"hard"},{id:"q2-hard",question:"Which planet has the strongest magnetic field?",questionAr:"أي كوكب يمتلك أقوى مجال مغناطيسي؟",options:["Earth","Jupiter","Saturn","Neptune"],optionsAr:["الأرض","المشتري","زحل","نبتون"],correctAnswer:1,explanation:"Jupiter has the strongest magnetic field in our solar system.",explanationAr:"المشتري يمتلك أقوى مجال مغناطيسي في نظامنا الشمسي.",difficulty:"hard"},{id:"q3-hard",question:"What is the Great Red Spot on Jupiter?",questionAr:"ما هي البقعة الحمراء العظيمة على المشتري؟",options:["A volcano","A storm","A mountain","A crater"],optionsAr:["بركان","عاصفة","جبل","فوهة"],correctAnswer:1,explanation:"The Great Red Spot is a giant storm that has raged for centuries.",explanationAr:"البقعة الحمراء العظيمة هي عاصفة عملاقة استمرت لقرون.",difficulty:"hard"},{id:"q4-hard",question:"Which planet has the shortest year?",questionAr:"أي كوكب يمتلك أقصر سنة؟",options:["Mercury","Venus","Earth","Mars"],optionsAr:["عطارد","الزهرة","الأرض","المريخ"],correctAnswer:0,explanation:"Mercury has the shortest year, only 88 Earth days.",explanationAr:"عطارد يمتلك أقصر سنة، فقط 88 يوماً أرضياً.",difficulty:"hard"},{id:"q5-hard",question:"What causes auroras on Earth?",questionAr:"ماذا يسبب الشفق القطبي على الأرض؟",options:["Moonlight","Solar wind","Lightning","Reflection"],optionsAr:["ضوء القمر","الرياح الشمسية","البرق","الانعكاس"],correctAnswer:1,explanation:"Solar wind particles interacting with Earth's atmosphere cause auroras.",explanationAr:"جسيمات الرياح الشمسية التي تتفاعل مع غلاف الأرض الجوي تسبب الشفق القطبي.",difficulty:"hard"},{id:"q6-hard",question:"Which planet rotates backwards compared to most planets?",questionAr:"أي كوكب يدور للخلف مقارنة بمعظم الكواكب؟",options:["Mercury","Venus","Earth","Mars"],optionsAr:["عطارد","الزهرة","الأرض","المريخ"],correctAnswer:1,explanation:"Venus rotates backwards (retrograde rotation).",explanationAr:"الزهرة يدور للخلف (الدوران التراجعي).",difficulty:"hard"},{id:"q7-hard",question:"What is the approximate temperature of the Sun's surface?",questionAr:"ما هي درجة حرارة سطح الشمس تقريباً؟",options:["2,000°C","3,500°C","5,500°C","7,000°C"],optionsAr:["2,000 درجة مئوية","3,500 درجة مئوية","5,500 درجة مئوية","7,000 درجة مئوية"],correctAnswer:2,explanation:"The Sun's surface temperature is about 5,500°C.",explanationAr:"درجة حرارة سطح الشمس حوالي 5,500 درجة مئوية.",difficulty:"hard"}]}],Pv=({onStageSelect:t,onClose:e})=>{const{t:n,language:i}=Xn();return S.jsx("div",{className:"fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm",children:S.jsxs("div",{className:"relative liquid-glass liquid-glass-glow p-8 rounded-3xl max-w-2xl w-full mx-4",children:[S.jsx("button",{onClick:e,className:`absolute top-4 ${i==="ar"?"left-4":"right-4"} p-2 liquid-glass-button`,children:S.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:S.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),S.jsxs("div",{className:"text-center mb-8",children:[S.jsx("div",{className:"text-5xl mb-4",children:"🧠"}),S.jsx("h2",{className:"text-3xl font-bold text-white mb-2",children:n("testYourKnowledge")}),S.jsx("p",{className:"text-lg text-gray-200 mb-6",children:n("chooseDifficulty")})]}),S.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:mb.map(r=>S.jsxs("button",{onClick:()=>t(r),className:"p-6 liquid-glass-button rounded-2xl text-left transition-all duration-300 hover:scale-105 hover:shadow-xl",children:[S.jsx("div",{className:"text-4xl mb-3",children:r.id==="easy"?"🌱":r.id==="medium"?"🌿":"🌳"}),S.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:n(r.id==="easy"?"beginner":r.id==="medium"?"intermediate":"advanced")}),S.jsx("p",{className:"text-sm text-gray-300 mb-1",children:i==="ar"?r.ageRangeAr:r.ageRange}),S.jsxs("p",{className:"text-xs text-gray-400",children:["7 ",n("questions")]}),S.jsx("div",{className:"mt-3 flex items-center gap-1",children:[...Array(3)].map((s,a)=>S.jsx("div",{className:`w-2 h-2 rounded-full ${a<(r.difficulty==="easy"?1:r.difficulty==="medium"?2:3)?"bg-yellow-400":"bg-gray-600"}`},a))})]},r.id))}),S.jsx("div",{className:"mt-8 text-center",children:S.jsx("button",{onClick:e,className:"px-6 py-2 liquid-glass-button text-gray-300 hover:text-white transition-colors",children:n("maybeLater")})})]})})},Lv=({stage:t,onComplete:e,onClose:n})=>{const{language:i}=Xn(),[r,s]=Te.useState(0),[a,o]=Te.useState(null),[l,c]=Te.useState(!1),[d,f]=Te.useState([]),[h,m]=Te.useState(!1),_=t.questions[r],y=(r+1)/t.questions.length*100;Te.useEffect(()=>{o(null),c(!1)},[r]);const p=M=>{l||o(M)},u=()=>{if(a===null)return;const M=[...d,a];f(M),c(!0),r===t.questions.length-1&&setTimeout(()=>{const R=M.filter((b,w)=>b===t.questions[w].correctAnswer).length;e(R,t.questions.length),m(!0)},3e3)},v=()=>{r<t.questions.length-1&&s(r+1)},g=()=>{const M=[...d,-1];if(f(M),r===t.questions.length-1){const R=M.filter((b,w)=>b===t.questions[w].correctAnswer).length;e(R,t.questions.length),m(!0)}else s(r+1)};return h?null:S.jsx("div",{className:"fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm",children:S.jsxs("div",{className:"relative liquid-glass liquid-glass-glow p-8 rounded-3xl max-w-2xl w-full mx-4",children:[S.jsx("button",{onClick:n,className:`absolute top-4 ${i==="ar"?"left-4":"right-4"} p-2 liquid-glass-button`,children:S.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:S.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),S.jsxs("div",{className:"mb-6",children:[S.jsxs("div",{className:"flex justify-between items-center mb-2",children:[S.jsxs("span",{className:"text-sm text-gray-300",children:[i==="ar"?"السؤال":"Question"," ",r+1," ",i==="ar"?"من":"of"," ",t.questions.length]}),S.jsxs("span",{className:"text-sm text-gray-300",children:[Math.round(y),"% ",i==="ar"?"مكتمل":"complete"]})]}),S.jsx("div",{className:"w-full bg-gray-700 rounded-full h-2",children:S.jsx("div",{className:"bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500",style:{width:`${y}%`}})})]}),S.jsxs("div",{className:"mb-6",children:[S.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[S.jsx("div",{className:"text-3xl",children:t.id==="easy"?"🌱":t.id==="medium"?"🌿":"🌳"}),S.jsx("h2",{className:"text-2xl font-bold text-white",children:i==="ar"?_.questionAr:_.question})]}),S.jsx("div",{className:"space-y-3",children:_.options.map((M,R)=>{const b=i==="ar"?_.optionsAr[R]:M,w=a===R,N=R===_.correctAnswer;return S.jsx("button",{onClick:()=>p(R),disabled:l,className:`w-full p-4 rounded-xl text-left transition-all duration-300 ${l?N?"bg-green-500/20 border-2 border-green-500 text-green-300":w&&!N?"bg-red-500/20 border-2 border-red-500 text-red-300":"bg-gray-700/30 border-2 border-gray-600 text-gray-400":w?"bg-blue-500/20 border-2 border-blue-500 text-blue-300":"bg-gray-700/30 border-2 border-gray-600 text-gray-300 hover:bg-gray-700/50 hover:border-gray-500"}`,children:S.jsxs("div",{className:"flex items-center gap-3",children:[S.jsx("div",{className:`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold ${l?N?"border-green-500 text-green-300":w&&!N?"border-red-500 text-red-300":"border-gray-600 text-gray-500":w?"border-blue-500 text-blue-300":"border-gray-600 text-gray-400"}`,children:String.fromCharCode(65+R)}),S.jsx("span",{className:"text-lg",children:b}),l&&N&&S.jsx("span",{className:"ml-auto text-green-400",children:"✓"}),l&&w&&!N&&S.jsx("span",{className:"ml-auto text-red-400",children:"✗"})]})},R)})})]}),l&&(_.explanation||_.explanationAr)&&S.jsx("div",{className:"mb-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl",children:S.jsxs("p",{className:"text-blue-300 text-sm",children:[S.jsx("span",{className:"font-bold",children:i==="ar"?"الشرح":"Explanation"})," ",i==="ar"?_.explanationAr:_.explanation]})}),S.jsxs("div",{className:"flex justify-between items-center",children:[S.jsx("button",{onClick:g,disabled:l,className:"px-4 py-2 liquid-glass-button text-gray-400 hover:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed",children:i==="ar"?"تخطي":"Skip"}),l?r<t.questions.length-1&&S.jsx("button",{onClick:v,className:"px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl text-white font-bold hover:from-green-600 hover:to-emerald-600 transition-all duration-300",children:i==="ar"?"السؤال التالي":"Next Question"}):S.jsx("button",{onClick:u,disabled:a===null,className:"px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:from-blue-600 hover:to-purple-600 transition-all duration-300",children:i==="ar"?"إدخال الإجابة":"Submit Answer"})]})]})})},Nv=({stage:t,score:e,totalQuestions:n,onClose:i,onRetry:r})=>{const{language:s}=Xn(),a=Math.round(e/n*100),l=a>=80?{emoji:"🏆",title:s==="ar"?"ممتاز!":"Excellent!",message:s==="ar"?"أداء رائع! أنت تعرف نظامك الشمسي حقاً!":"Outstanding! You really know your solar system!",color:"from-yellow-500 to-orange-500"}:a>=60?{emoji:"👍",title:s==="ar"?"عمل جيد!":"Good Job!",message:s==="ar"?"عمل رائع! أنت تعرف الكثير عن نظامنا الشمسي!":"Great work! You know quite a bit about our solar system!",color:"from-blue-500 to-purple-500"}:a>=40?{emoji:"📚",title:s==="ar"?"واصل التعلم!":"Keep Learning!",message:s==="ar"?"استمر في التعلم! ستحسن مع الوقت!":"Keep learning! You'll get better with practice!",color:"from-green-500 to-teal-500"}:{emoji:"🚀",title:s==="ar"?"حاول مرة أخرى!":"Try Again!",message:s==="ar"?"حاول مرة أخرى! الممارسة تجعل الكمال!":"Give it another try! Practice makes perfect!",color:"from-purple-500 to-pink-500"};return S.jsx("div",{className:"fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm",children:S.jsxs("div",{className:"relative liquid-glass liquid-glass-glow p-8 rounded-3xl max-w-lg w-full mx-4 text-center",children:[a>=80&&S.jsxs("div",{className:"absolute inset-0 overflow-hidden rounded-3xl pointer-events-none",children:[[...Array(15)].map((c,d)=>S.jsx("div",{className:"absolute w-2 h-2 bg-yellow-300 rounded-full animate-pulse",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animationDelay:`${Math.random()*2}s`,opacity:Math.random()*.7+.3}},d)),[...Array(10)].map((c,d)=>S.jsx("div",{className:"absolute text-xl",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animationDelay:`${Math.random()*3}s`,transform:`rotate(${Math.random()*360}deg)`},children:"✨"},`star-${d}`))]}),S.jsxs("div",{className:"relative z-10",children:[S.jsx("div",{className:"text-6xl mb-4 animate-bounce",children:l.emoji}),S.jsxs("div",{className:"mb-6",children:[S.jsxs("div",{className:`text-4xl font-bold bg-gradient-to-r ${l.color} bg-clip-text text-transparent mb-2`,children:[e,"/",n]}),S.jsxs("div",{className:"text-2xl font-bold text-white mb-1",children:[a,"%"]})]}),S.jsx("h2",{className:`text-3xl font-bold text-white mb-3 bg-gradient-to-r ${l.color} bg-clip-text text-transparent`,children:l.title}),S.jsx("p",{className:"text-lg text-gray-200 mb-6",children:l.message}),S.jsxs("div",{className:"mb-6 p-3 bg-gray-700/30 rounded-xl",children:[S.jsxs("p",{className:"text-sm text-gray-300",children:[s==="ar"?"انتهى":"Finish",": ",s==="ar"?t.nameAr:t.name]}),S.jsx("p",{className:"text-xs text-gray-400",children:s==="ar"?t.ageRangeAr:t.ageRange})]}),S.jsxs("div",{className:"flex gap-3 justify-center",children:[S.jsx("button",{onClick:r,className:"px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white font-bold hover:from-blue-600 hover:to-purple-600 transition-all duration-300",children:s==="ar"?"إعادة المحاولة":"Try Again"}),S.jsx("button",{onClick:i,className:"px-6 py-3 liquid-glass-button text-white font-bold hover:bg-gray-700/50 transition-all duration-300",children:s==="ar"?"انتهى":"Finish"})]})]})]})})},Dm={sun:"☀️",mercury:"🔴",venus:"🟡",earth:"🌍",mars:"🔴",jupiter:"🟠",saturn:"🪐",uranus:"🔵",neptune:"🔵"};function gb(t,e=!1){return/largest|most|only|unique|volcan|strongest|shortest|longest|fastest|biggest|أكبر|أقوى|أسرع|أطول|أقصر|وحيد|فريد/i.test(t)?S.jsxs(S.Fragment,{children:[t," ",S.jsx("span",{className:"text-red-400 font-bold",children:e?"بوووووم!! 💥":"Booooooom!! 💥"})]}):t}const vb=({solarApi:t,isOpen:e=!1,onClose:n})=>{const{t:i,language:r}=Xn(),s=Li,[a,o]=Te.useState(0),[l,c]=Te.useState(0),[d,f]=Te.useState(!1),[h,m]=Te.useState(!1),_=q=>{if(!("speechSynthesis"in window))return;window.speechSynthesis.cancel();let ne=q.replace(/🔴|🟡|🌍|🟠|🪐|🔵|✨|💥/g,"");ne=ne.replace(/Booooooom!!/gi,""),ne=ne.replace(/بوووووم!!/g,"");const Ee=ne.match(/[^.!?،؟]+[.!?،؟]*/g)||[ne];let Se=0;const _e=()=>{if(Se>=Ee.length)return;const ze=Ee[Se].trim();if(!ze){Se++,_e();return}const Pe=new SpeechSynthesisUtterance(ze);Pe.lang=r==="ar"?"ar-SA":"en-US";const ot=window.speechSynthesis.getVoices().find(Re=>r==="ar"?Re.lang.startsWith("ar"):Re.lang.startsWith("en"));ot&&(Pe.voice=ot),Pe.rate=r==="ar"?.95:1.05,Pe.pitch=1.08,Pe.onend=()=>{Se++,_e()},Pe.onerror=()=>{},window.speechSynthesis.speak(Pe)};_e()};Te.useEffect(()=>{if(h&&e){const q=s[a],ne=Jo[q.id]||Jo.mercury;let Ee="";const Se=r==="ar";if(l===0)Ee=Se?ne.prologue.ar:ne.prologue.en;else if(l===1)Ee=Se?`${ne.story.ar}. ${ne.massExplanation.ar}`:`${ne.story.en}. ${ne.massExplanation.en}`;else if(l===2){const _e=`${q.id}FunFact`,ze=i(_e)||q.funFact;Ee=Se?`هل تعلم؟ حقيقة مذهلة: ${ze}`:`Did you know? Amazing Fact: ${ze}`}_(Ee)}else"speechSynthesis"in window&&window.speechSynthesis.cancel()},[a,l,h,e,r]),Te.useEffect(()=>()=>{"speechSynthesis"in window&&window.speechSynthesis.cancel()},[]),Te.useEffect(()=>{e||("speechSynthesis"in window&&window.speechSynthesis.cancel(),m(!1))},[e]);const y=()=>{m(q=>!q)},[p,u]=Te.useState(!1),[v,g]=Te.useState(null),[M,R]=Te.useState(!1),[b,w]=Te.useState(!1),[N,ie]=Te.useState(0);Te.useEffect(()=>{e&&(o(0),c(0),f(!1),u(!1),g(null),R(!1),w(!1),ie(0))},[e]);const x=Te.useMemo(()=>q=>{const ne=Dm[q.id]||"✨",Ee=r==="ar",Se=Jo[q.id]||Jo.mercury,_e=`${q.id}FunFact`,ze=i(_e)||q.funFact;return[{key:"prologue",title:Ee?`${ne} ${i(q.id)||q.name}`:`${ne} ${q.name}`,content:S.jsx("div",{children:S.jsx("p",{className:"mb-2 text-sm leading-relaxed",children:Ee?Se.prologue.ar:Se.prologue.en})}),highlight:!0},{key:"story",title:Ee?"اكتشف المزيد":"Discover More",content:S.jsxs("div",{children:[S.jsx("p",{className:"mb-2 text-sm leading-relaxed",children:Ee?Se.story.ar:Se.story.en}),S.jsx("p",{className:"text-xs text-gray-400 italic mt-2 border-t border-white/10 pt-2",children:Ee?Se.massExplanation.ar:Se.massExplanation.en})]}),highlight:!0},{key:"fun",title:Ee?"هل تعلم؟":"Did You Know?",content:S.jsxs("div",{children:[S.jsx("p",{className:"mb-1 text-pink-300 font-semibold",children:Ee?"حقيقة مذهلة":"Amazing Fact"}),S.jsx("p",{className:"text-sm text-gray-200 leading-relaxed",children:gb(ze,Ee)})]}),highlight:!0}]},[i,r]);if(Te.useEffect(()=>{var Se;if(!e)return;const q=s[a];if(!q)return;const Ee=x(q)[l];(Se=t==null?void 0:t.stopFollowPlanet)==null||Se.call(t),setTimeout(()=>{var _e;(_e=t==null?void 0:t.selectPlanet)==null||_e.call(t,q.id),Ee&&Ee.highlight&&setTimeout(()=>{var Pe;const ze=Math.max(1.5,q.radius+.8);(Pe=t==null?void 0:t.followPlanet)==null||Pe.call(t,q.id,ze,!0)},200)},100)},[e,a,l,t,x,s]),!e)return null;if(d)return S.jsx("div",{className:"fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm",children:S.jsxs("div",{className:"relative liquid-glass liquid-glass-glow p-8 rounded-3xl max-w-lg text-center",children:[S.jsxs("div",{className:"absolute inset-0 overflow-hidden rounded-3xl pointer-events-none",children:[[...Array(20)].map((q,ne)=>S.jsx("div",{className:"absolute w-2 h-2 bg-yellow-300 rounded-full animate-pulse",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animationDelay:`${Math.random()*2}s`,opacity:Math.random()*.7+.3}},ne)),[...Array(15)].map((q,ne)=>S.jsx("div",{className:"absolute text-2xl",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animationDelay:`${Math.random()*3}s`,transform:`rotate(${Math.random()*360}deg)`},children:"✨"},`star-${ne}`))]}),S.jsxs("div",{className:"relative z-10",children:[S.jsx("div",{className:"text-6xl mb-4",children:"🎉"}),S.jsx("h2",{className:"text-3xl font-bold text-white mb-4",children:r==="ar"?"مبروك يا صاحبي!":"Congratulations!"}),S.jsx("p",{className:"text-lg text-gray-200 mb-6",children:r==="ar"?"خلصت جولة النظام الشمسي أونلاين يا بطل!":"You have completed the Solar System Online Tour!"}),S.jsxs("div",{className:"flex gap-3 justify-center",children:[S.jsx("button",{onClick:D,className:"px-6 py-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl text-white font-bold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl",children:r==="ar"?"خذ اختبار":"Take Quiz"}),S.jsx("button",{onClick:V,className:"px-6 py-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl text-white font-bold text-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl",children:r==="ar"?"تمام":"Awesome"})]})]})]})});const C=s[a],K=x(C),ee=a===s.length-1&&l===K.length-1;function I(){var q;l<K.length-1?c(l+1):a<s.length-1?(o(a+1),c(0)):((q=t==null?void 0:t.stopFollowPlanet)==null||q.call(t),setTimeout(()=>{var ne;(ne=t==null?void 0:t.resetCamera)==null||ne.call(t),setTimeout(()=>{f(!0)},500)},200))}function Z(){if(l>0)c(l-1);else if(a>0){o(a-1);const q=x(s[a-1]);c(q.length-1)}}function k(){var q;(q=t==null?void 0:t.stopFollowPlanet)==null||q.call(t),setTimeout(()=>{n==null||n()},200)}function V(){var q;(q=t==null?void 0:t.stopFollowPlanet)==null||q.call(t),setTimeout(()=>{var ne;(ne=t==null?void 0:t.updateSimulationSpeed)==null||ne.call(t,.5),setTimeout(()=>{n==null||n()},200)},100)}function D(){f(!1),u(!0)}function F(q){g(q),u(!1),R(!0)}function O(q,ne){ie(q),R(!1),w(!0)}function Y(){u(!1),R(!1),w(!1),g(null)}function de(){v&&(w(!1),R(!0))}function be(){Y(),V()}const X=r==="ar";return p?S.jsx(Pv,{onStageSelect:F,onClose:Y}):M&&v?S.jsx(Lv,{stage:v,onComplete:O,onClose:Y}):b&&v?S.jsx(Nv,{stage:v,score:N,totalQuestions:v.questions.length,onClose:be,onRetry:de}):S.jsxs("div",{className:"absolute left-5 top-16 w-96 liquid-glass liquid-glass-glow text-white p-4 rounded-2xl z-40",children:[S.jsxs("div",{className:"flex items-center justify-between mb-3",children:[S.jsxs("div",{className:"font-bold text-lg flex items-center gap-2",children:[S.jsx("span",{children:i("tourGuide")||"Tour Guide"}),S.jsx("button",{onClick:y,className:`p-1.5 rounded-full transition-all duration-300 flex items-center justify-center relative ${h?"bg-cyan-500/30 text-cyan-300 border border-cyan-400/50 scale-105 shadow-md shadow-cyan-500/20 pulse-glow":"bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white border border-white/10"}`,title:h?r==="ar"?"إيقاف السرد":"Stop Narration":r==="ar"?"تشغيل السرد الصوتي":"Play Narration",children:h?S.jsxs("div",{className:"flex items-center gap-1 px-0.5",children:[S.jsxs("div",{className:"flex items-end gap-0.5 h-3 w-4",children:[S.jsx("span",{className:"w-0.5 bg-cyan-300 rounded-full animate-wave-1 origin-bottom h-full"}),S.jsx("span",{className:"w-0.5 bg-cyan-300 rounded-full animate-wave-2 origin-bottom h-3/4"}),S.jsx("span",{className:"w-0.5 bg-cyan-300 rounded-full animate-wave-3 origin-bottom h-full"})]}),S.jsx(Uf,{size:12,className:"text-cyan-300"})]}):S.jsx(Ff,{size:14})})]}),S.jsx("div",{className:"flex items-center gap-2",children:S.jsx("button",{onClick:k,className:"text-sm px-3 py-1 liquid-glass-button",children:i("skip")||"Skip"})})]}),S.jsx("style",{children:`
        @keyframes bounce-wave-tour {
          0%, 100% { transform: scaleY(0.3); }
          50% { transform: scaleY(1); }
        }
        .animate-wave-1 { animation: bounce-wave-tour 0.6s ease-in-out infinite; }
        .animate-wave-2 { animation: bounce-wave-tour 0.5s ease-in-out infinite 0.15s; }
        .animate-wave-3 { animation: bounce-wave-tour 0.7s ease-in-out infinite 0.3s; }
        
        @keyframes pulse-glow-tour {
          0%, 100% { box-shadow: 0 0 5px rgba(6, 182, 212, 0.2); }
          50% { box-shadow: 0 0 10px rgba(6, 182, 212, 0.5); }
        }
        .pulse-glow {
          animation: pulse-glow-tour 2s infinite;
        }
      `}),S.jsxs("div",{className:"mb-4",children:[S.jsx("div",{className:"text-sm text-gray-400 mb-1",dir:X?"rtl":"ltr",children:i(C.id)||C.name}),S.jsxs("div",{className:"text-lg font-extrabold text-white mb-1 flex items-center gap-2",dir:X?"rtl":"ltr",children:[S.jsx("span",{className:"text-2xl",children:Dm[C.id]||"✨"}),S.jsx("span",{children:K[l].title})]}),S.jsx("div",{className:"text-sm text-gray-200",dir:X?"rtl":"ltr",children:K[l].content})]}),S.jsxs("div",{className:"flex justify-between items-center",children:[S.jsx("button",{onClick:Z,disabled:a===0&&l===0,className:"px-3 py-1 liquid-glass-button disabled:opacity-40",children:"◀"}),S.jsx("div",{className:"flex items-center gap-2",children:S.jsx("button",{onClick:I,className:`px-4 py-2 liquid-glass-button shiny-border-hover text-white font-bold ${ee?"!bg-gradient-to-br !from-green-500/80 !to-emerald-600/80":""}`,children:ee?i("finishTour")||"Finish the Tour":i("next")||"Next"})})]})]})},_b=()=>{const{language:t}=Xn(),[e,n]=Te.useState(!1),[i,r]=Te.useState(.5),[s,a]=Te.useState("deep"),[o,l]=Te.useState(!1),c=Te.useRef(null),d=Te.useRef(null),f=Te.useRef(null),h=Te.useRef(null),m=Te.useRef([]),_=Te.useRef([]),y=Te.useRef(null),p={deep:{chord:[65.41,98,130.81,155.56,196],filterFreq:220,filterQ:3,type:"sawtooth",chimeScale:[523.25,587.33,622.25,698.46,783.99,932.33,1046.5]},nebula:{chord:[73.42,110,146.83,185,220],filterFreq:300,filterQ:5,type:"triangle",chimeScale:[587.33,659.25,739.99,880,987.77,1174.66]},solar:{chord:[58.27,87.31,116.54,138.59,174.61],filterFreq:180,filterQ:4,type:"sine",chimeScale:[466.16,523.25,554.37,622.25,698.46,830.61,932.33]}},u=()=>{if(!d.current)try{const x=window.AudioContext||window.webkitAudioContext,C=new x;d.current=C;const K=C.createGain();K.gain.setValueAtTime(i*.15,C.currentTime),K.connect(C.destination),f.current=K;const ee=C.createBiquadFilter();ee.type="lowpass",ee.frequency.setValueAtTime(p[s].filterFreq,C.currentTime),ee.Q.setValueAtTime(p[s].filterQ,C.currentTime),ee.connect(K),h.current=ee;const I=p[s].chord,Z=p[s].type;I.forEach((k,V)=>{const D=C.createOscillator(),F=C.createGain();D.type=Z,D.frequency.setValueAtTime(k+(Math.random()*.8-.4),C.currentTime);const O=.12+Math.random()*.08;F.gain.setValueAtTime(O,C.currentTime),D.connect(F),F.connect(ee),D.start(),m.current.push(D),_.current.push(F)}),v()}catch(x){console.error("Failed to initialize space audio synth:",x)}},v=()=>{y.current&&clearInterval(y.current),y.current=setInterval(()=>{const x=d.current,C=h.current,K=_.current;if(!x||x.state==="suspended"||!C)return;const ee=x.currentTime,I=p[s].filterFreq,Z=I+Math.sin(ee*.1)*(I*.4);C.frequency.exponentialRampToValueAtTime(Math.max(80,Z),ee+3),K.forEach(k=>{const V=.08+Math.random()*.12;k.gain.linearRampToValueAtTime(V,ee+3.5)}),Math.random()<.45&&g()},3500)},g=()=>{const x=d.current,C=f.current;if(!x||!C)return;const K=x.currentTime,ee=p[s].chimeScale,I=ee[Math.floor(Math.random()*ee.length)],Z=x.createOscillator(),k=x.createGain(),V=x.createDelay(),D=x.createGain();Z.type="sine",Z.frequency.setValueAtTime(I,K),k.gain.setValueAtTime(.015,K),k.gain.exponentialRampToValueAtTime(1e-4,K+1.8),V.delayTime.setValueAtTime(.35,K),D.gain.setValueAtTime(.4,K),Z.connect(k),k.connect(C),k.connect(V),V.connect(D),D.connect(V),D.connect(C),Z.start(K),Z.stop(K+2)},M=()=>{y.current&&(clearInterval(y.current),y.current=null);const x=d.current,C=f.current;x&&C&&(C.gain.exponentialRampToValueAtTime(1e-4,x.currentTime+.4),setTimeout(()=>{m.current.forEach(K=>{try{K.stop()}catch{}}),m.current=[],_.current=[],d.current=null,f.current=null,h.current=null},500))},R=()=>{e?(M(),n(!1)):(u(),n(!0))},b=x=>{const C=parseFloat(x.target.value);r(C),f.current&&d.current&&f.current.gain.linearRampToValueAtTime(C*.15,d.current.currentTime+.1)},w=x=>{if(a(x),!e)return;const C=d.current;if(C){const K=C.currentTime,ee=h.current;ee&&(ee.frequency.exponentialRampToValueAtTime(p[x].filterFreq,K+1.5),ee.Q.setValueAtTime(p[x].filterQ,K+1.5));const I=p[x].chord,Z=p[x].type;m.current.forEach((k,V)=>{I[V]&&(k.type=Z,k.frequency.exponentialRampToValueAtTime(I[V]+(Math.random()*.8-.4),K+1.5))})}},N=()=>{l(!0),c.current&&(clearTimeout(c.current),c.current=null)},ie=()=>{c.current=setTimeout(()=>{l(!1)},3500)};return Te.useEffect(()=>()=>{M(),c.current&&clearTimeout(c.current)},[]),o?S.jsxs("div",{onMouseEnter:N,onMouseLeave:ie,className:`liquid-glass text-white p-4 rounded-2xl flex flex-col gap-3 min-w-[240px] shadow-2xl border border-cyan-500/40 animate-scaleIn transition-all duration-300 ${t==="ar"?"rtl":"ltr"}`,children:[S.jsxs("div",{className:"flex items-center justify-between",children:[S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsx(ib,{className:`w-5 h-5 text-cyan-400 ${e?"animate-pulse":""}`}),S.jsxs("h3",{className:"font-bold text-sm tracking-wider flex flex-col",children:[S.jsx("span",{children:"COSMIC RADIO DJ"}),S.jsx("span",{className:"text-[10px] text-cyan-300 font-arabic",children:"الراديو الكوني الموسيقي"})]})]}),S.jsx("button",{onClick:R,className:`p-2 rounded-full transition-all duration-300 border ${e?"bg-red-500/20 border-red-500/40 text-red-300 scale-105 shadow-md shadow-red-500/20":"bg-cyan-500/20 border-cyan-500/40 text-cyan-300 hover:scale-105 hover:bg-cyan-500/30"}`,title:e?t==="ar"?"إيقاف الموسيقى":"Stop Music":t==="ar"?"تشغيل الموسيقى":"Start Music",children:e?S.jsxs("div",{className:"flex items-center gap-1.5 px-0.5",children:[S.jsxs("span",{className:"relative flex h-2 w-2",children:[S.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"}),S.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-red-500"})]}),S.jsx("span",{className:"text-xs font-semibold",children:"OFF"})]}):S.jsxs("div",{className:"flex items-center gap-1.5 px-0.5",children:[S.jsx(eb,{size:14,className:"animate-bounce"}),S.jsx("span",{className:"text-xs font-semibold",children:"ON"})]})})]}),S.jsx("div",{className:"w-full h-[1px] bg-white/10"}),S.jsxs("div",{className:"flex flex-col gap-1.5",children:[S.jsxs("span",{className:"text-[10px] text-gray-400 font-semibold tracking-wider flex justify-between",children:[S.jsx("span",{children:"ATMOSPHERE MODE"}),S.jsx("span",{className:"font-arabic text-gray-500",children:"وضع الغلاف الموسيقي"})]}),S.jsxs("div",{className:"grid grid-cols-3 gap-1",children:[S.jsx("button",{onClick:()=>w("deep"),className:`text-[10px] py-1.5 rounded-lg transition-all duration-200 border font-semibold ${s==="deep"?"bg-cyan-500/30 border-cyan-400 text-cyan-300 scale-105":"bg-white/5 border-white/5 text-gray-400 hover:bg-white/10 hover:text-white"}`,children:"Deep Space"}),S.jsx("button",{onClick:()=>w("nebula"),className:`text-[10px] py-1.5 rounded-lg transition-all duration-200 border font-semibold ${s==="nebula"?"bg-purple-500/30 border-purple-400 text-purple-300 scale-105":"bg-white/5 border-white/5 text-gray-400 hover:bg-white/10 hover:text-white"}`,children:"Nebula Dream"}),S.jsx("button",{onClick:()=>w("solar"),className:`text-[10px] py-1.5 rounded-lg transition-all duration-200 border font-semibold ${s==="solar"?"bg-amber-500/30 border-amber-400 text-amber-300 scale-105":"bg-white/5 border-white/5 text-gray-400 hover:bg-white/10 hover:text-white"}`,children:"Solar Wind"})]})]}),S.jsxs("div",{className:"flex items-center gap-3 mt-1",children:[i===0?S.jsx(Ff,{size:15,className:"text-gray-400"}):S.jsx(Uf,{size:15,className:"text-cyan-300"}),S.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:i,onChange:b,className:"w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-cyan-400 outline-none"}),S.jsxs("span",{className:"text-[10px] font-mono text-cyan-300",children:[Math.round(i*100),"%"]})]}),e&&S.jsxs("div",{className:"flex items-center justify-center gap-1 text-[9px] text-cyan-300/80 animate-pulse mt-0.5 font-mono",children:[S.jsx(rb,{size:10,className:"animate-spin text-cyan-400"}),S.jsx("span",{children:"REAL-TIME DYNAMIC SYNTHESIZER ACTIVE"})]}),S.jsx("style",{children:`
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.92) translateY(5px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-scaleIn {
          animation: scaleIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `})]}):S.jsxs("button",{onMouseEnter:N,onClick:N,className:`liquid-glass text-white p-3 rounded-full flex items-center gap-2.5 shadow-lg border border-cyan-500/30 cursor-pointer animate-pulse-glow transition-all duration-300 hover:scale-110 active:scale-95 ${t==="ar"?"rtl":"ltr"}`,children:[S.jsxs("div",{className:"relative flex items-center justify-center",children:[S.jsx(JT,{className:`w-5 h-5 text-cyan-400 ${e?"animate-spin-slow":""}`}),e&&S.jsxs("span",{className:"absolute -top-1 -right-1 flex h-2.5 w-2.5",children:[S.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"}),S.jsx("span",{className:"relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"})]})]}),S.jsx("span",{className:"text-xs font-bold tracking-wider whitespace-nowrap pr-1 select-none",children:t==="ar"?"الراديو الكوني":"COSMIC DJ"}),S.jsx("style",{children:`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 8s linear infinite;
          }
          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 5px rgba(6, 182, 212, 0.2); border-color: rgba(6, 182, 212, 0.3); }
            50% { box-shadow: 0 0 15px rgba(6, 182, 212, 0.5); border-color: rgba(6, 182, 212, 0.6); }
          }
          .animate-pulse-glow {
            animation: pulse-glow 2.5s infinite;
          }
        `})]})};function xb(){const t=Te.useRef(null),{language:e,setLanguage:n,t:i}=Xn(),[r,s]=Te.useState(null),[a,o]=Te.useState(.5),[l,c]=Te.useState(!1),[d,f]=Te.useState({planetA:null,planetB:null}),[h,m]=Te.useState(!0),[_,y]=Te.useState(()=>!0),[p,u]=Te.useState(!1),[v,g]=Te.useState(!1),[M,R]=Te.useState(!1),[b,w]=Te.useState(1),[N,ie]=Te.useState(null),[x,C]=Te.useState(!1),[K,ee]=Te.useState(!1),[I,Z]=Te.useState(!1),[k,V]=Te.useState(null),[D,F]=Te.useState(!1),[O,Y]=Te.useState(!1),[de,be]=Te.useState(0);Te.useEffect(()=>{var ve,Ue,Ge;if(t.current){const De=YT(t.current,qe=>{if(qe.id==="sun"){s({id:"sun",name:"Sun",radius:8.5,distanceFromSun:0,orbitSpeed:0,texture:"sun.jpg",description:"The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma and is by far the most important source of energy for life on Earth.",diameter:1391400,mass:"1.989 × 10^30 kg",dayLength:"25 days (equator)",yearLength:"—",avgTemp:"5,505°C (surface)",funFact:"The Sun contains 99.86% of the mass in the Solar System!",moons:[]});return}if(l){if(qe.id==="sun")return;typeof qe.name=="string"&&typeof qe.radius=="number"&&typeof qe.distanceFromSun=="number"&&f(P=>{var E,te;if(typeof qe.name=="string"&&typeof qe.radius=="number"&&typeof qe.distanceFromSun=="number"){if(((E=P.planetA)==null?void 0:E.id)===qe.id||((te=P.planetB)==null?void 0:te.id)===qe.id)return P;if(!P.planetA)return{...P,planetA:qe};if(!P.planetB&&P.planetA.id!==qe.id)return{planetA:P.planetA,planetB:qe}}return P})}else s(qe)},{hideMoons:v,showLabels:M,planetScale:b,tFunc:i,currentLanguage:e});return ie(De),ee(!1),De.updateSimulationSpeed(p?0:a),(ve=De.setMoonsVisible)==null||ve.call(De,!v),(Ue=De.setLabelsVisible)==null||Ue.call(De,M),(Ge=De.setPlanetScale)==null||Ge.call(De,b),setTimeout(()=>m(!1),2e3),()=>{De.cleanupScene()}}},[l,v,M,b,p,a,i,e]),Te.useEffect(()=>{if(t.current){const ve=window.solarSystem;ve&&ve.updateSimulationSpeed&&ve.updateSimulationSpeed(p?0:a)}},[a,p]),Te.useEffect(()=>{if(!N)return;let ve;function Ue(){N.isGalaxyVisible&&C(N.isGalaxyVisible()),ve=requestAnimationFrame(Ue)}return Ue(),()=>{ve&&cancelAnimationFrame(ve)}},[N]);const X=ve=>{o(ve)},q=()=>{u(ve=>!ve)},ne=ve=>{n(ve),y(!1)},Ee=()=>{c(ve=>(ve?f({planetA:null,planetB:null}):(f({planetA:null,planetB:null}),s(null)),!ve))},Se=()=>{f({planetA:null,planetB:null})},_e=ve=>{f(Ue=>({...Ue,planetA:ve})),l||c(!0)},ze=ve=>{f(Ue=>({...Ue,planetB:ve})),l||c(!0)},Pe=()=>{ee(!1),s(null),Z(!0)},H=ve=>{V(ve),Z(!1),F(!0)},ot=(ve,Ue)=>{be(ve),F(!1),Y(!0)},Re=()=>{Z(!1),F(!1),Y(!1),V(null)},He=()=>{k&&(Y(!1),F(!0))};return S.jsxs("div",{className:`relative w-full h-screen overflow-hidden bg-black ${e==="ar"?"arabic-text":"english-text"}`,dir:e==="ar"?"rtl":"ltr",children:[S.jsx(hb,{isOpen:_,onLanguageSelect:ne}),h&&!_&&S.jsx("div",{className:"absolute inset-0 z-40 flex flex-col items-center justify-center bg-black/70 backdrop-blur-sm",children:S.jsxs("div",{className:"flex flex-col items-center gap-6",children:[S.jsx(sb,{className:"w-20 h-20 animate-spin text-yellow-400"}),S.jsxs("div",{className:"text-center",children:[S.jsx("h1",{className:"text-3xl font-bold text-white mb-2",children:"Loading Solar System..."}),S.jsx("p",{className:"text-gray-300",children:"Initializing the universe..."})]})]})}),S.jsx("div",{ref:t,className:"absolute inset-0 z-0 bg-black"}),S.jsx("div",{className:`absolute bottom-5 ${e==="ar"?"right-5":"left-5"} z-10 hidden md:block`,children:S.jsx(_b,{})}),S.jsx("div",{className:"absolute bottom-5 left-0 right-0 z-10 flex justify-center",children:S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsx("button",{className:"p-2 rounded-full liquid-glass-button transition-colors","aria-label":"Zoom Out",onClick:()=>{var ve;return(ve=N==null?void 0:N.zoomOut)==null?void 0:ve.call(N)},type:"button",children:S.jsx(ob,{size:20})}),S.jsx(db,{speed:a,onChange:X,paused:p,onPauseToggle:q,hideMoons:v,onHideMoonsChange:g,showLabels:M,onShowLabelsChange:R,planetScale:b,onPlanetScaleChange:w}),S.jsx("button",{className:"p-2 rounded-full liquid-glass-button transition-colors","aria-label":"Zoom In",onClick:()=>{var ve;return(ve=N==null?void 0:N.zoomIn)==null?void 0:ve.call(N)},type:"button",children:S.jsx(ab,{size:20})})]})}),r&&!l&&S.jsx(ub,{planet:r,onClose:()=>s(null),solarApi:N,showComparison:!1,comparisonPlanets:d,onChooseAsA:_e,onChooseAsB:ze}),l&&S.jsx(fb,{planetA:d.planetA,planetB:d.planetB,onReset:Se,onClose:Ee}),S.jsxs("div",{className:`absolute top-5 right-5 z-10 flex items-center gap-4 ${e==="ar"?"space-x-reverse":""}`,children:[S.jsx(pb,{}),S.jsx("button",{className:`px-4 py-2 rounded-lg font-semibold text-sm liquid-glass-button ${l?"bg-blue-500/20 border-blue-500/30":""}`,onClick:Ee,children:i("comparePlanets")})]}),S.jsxs("div",{className:"absolute top-5 left-5 z-10 flex flex-col gap-2",children:[S.jsx("button",{className:`px-4 py-2 rounded-lg font-semibold text-sm liquid-glass-button transition-all duration-200 ${K?"bg-red-500/20 border-red-500/30":""}`,onClick:()=>{ee(ve=>{const Ue=!ve;return Ue&&s(null),Ue})},children:K?i("stopTour")||"Stop Tour":i("startTour")||"Start Tour"}),S.jsx("button",{className:"px-4 py-2 rounded-lg font-semibold text-sm liquid-glass-button transition-all duration-200 bg-blue-500/20 border-blue-500/30",onClick:Pe,children:i("takeQuiz")||"Take Quiz"})]}),S.jsx(vb,{solarApi:N,isOpen:K,onClose:()=>ee(!1)}),I&&S.jsx(Pv,{onStageSelect:H,onClose:Re}),D&&k&&S.jsx(Lv,{stage:k,onComplete:ot,onClose:Re}),O&&k&&S.jsx(Nv,{stage:k,score:de,totalQuestions:k.questions.length,onClose:Re,onRetry:He})]})}X0(document.getElementById("root")).render(S.jsx(Te.StrictMode,{children:S.jsx(cb,{children:S.jsx(xb,{})})}));
