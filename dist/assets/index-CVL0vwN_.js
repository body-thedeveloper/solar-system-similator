(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Gm={exports:{}},Ql={},Wm={exports:{}},tt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var no=Symbol.for("react.element"),$v=Symbol.for("react.portal"),Yv=Symbol.for("react.fragment"),Kv=Symbol.for("react.strict_mode"),Zv=Symbol.for("react.profiler"),Qv=Symbol.for("react.provider"),Jv=Symbol.for("react.context"),e_=Symbol.for("react.forward_ref"),t_=Symbol.for("react.suspense"),n_=Symbol.for("react.memo"),i_=Symbol.for("react.lazy"),$f=Symbol.iterator;function r_(t){return t===null||typeof t!="object"?null:(t=$f&&t[$f]||t["@@iterator"],typeof t=="function"?t:null)}var jm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xm=Object.assign,qm={};function Zs(t,e,n){this.props=t,this.context=e,this.refs=qm,this.updater=n||jm}Zs.prototype.isReactComponent={};Zs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Zs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function $m(){}$m.prototype=Zs.prototype;function kd(t,e,n){this.props=t,this.context=e,this.refs=qm,this.updater=n||jm}var zd=kd.prototype=new $m;zd.constructor=kd;Xm(zd,Zs.prototype);zd.isPureReactComponent=!0;var Yf=Array.isArray,Ym=Object.prototype.hasOwnProperty,Bd={current:null},Km={key:!0,ref:!0,__self:!0,__source:!0};function Zm(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Ym.call(e,i)&&!Km.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:no,type:t,key:s,ref:a,props:r,_owner:Bd.current}}function s_(t,e){return{$$typeof:no,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Hd(t){return typeof t=="object"&&t!==null&&t.$$typeof===no}function a_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Kf=/\/+/g;function wc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?a_(""+t.key):e.toString(36)}function sl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case no:case $v:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+wc(a,0):i,Yf(r)?(n="",t!=null&&(n=t.replace(Kf,"$&/")+"/"),sl(r,e,n,"",function(c){return c})):r!=null&&(Hd(r)&&(r=s_(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Kf,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Yf(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+wc(s,o);a+=sl(s,e,n,l,r)}else if(l=r_(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+wc(s,o++),a+=sl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function fo(t,e,n){if(t==null)return t;var i=[],r=0;return sl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function o_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var cn={current:null},al={transition:null},l_={ReactCurrentDispatcher:cn,ReactCurrentBatchConfig:al,ReactCurrentOwner:Bd};function Qm(){throw Error("act(...) is not supported in production builds of React.")}tt.Children={map:fo,forEach:function(t,e,n){fo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return fo(t,function(){e++}),e},toArray:function(t){return fo(t,function(e){return e})||[]},only:function(t){if(!Hd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};tt.Component=Zs;tt.Fragment=Yv;tt.Profiler=Zv;tt.PureComponent=kd;tt.StrictMode=Kv;tt.Suspense=t_;tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=l_;tt.act=Qm;tt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Xm({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Bd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Ym.call(e,l)&&!Km.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:no,type:t.type,key:r,ref:s,props:i,_owner:a}};tt.createContext=function(t){return t={$$typeof:Jv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Qv,_context:t},t.Consumer=t};tt.createElement=Zm;tt.createFactory=function(t){var e=Zm.bind(null,t);return e.type=t,e};tt.createRef=function(){return{current:null}};tt.forwardRef=function(t){return{$$typeof:e_,render:t}};tt.isValidElement=Hd;tt.lazy=function(t){return{$$typeof:i_,_payload:{_status:-1,_result:t},_init:o_}};tt.memo=function(t,e){return{$$typeof:n_,type:t,compare:e===void 0?null:e}};tt.startTransition=function(t){var e=al.transition;al.transition={};try{t()}finally{al.transition=e}};tt.unstable_act=Qm;tt.useCallback=function(t,e){return cn.current.useCallback(t,e)};tt.useContext=function(t){return cn.current.useContext(t)};tt.useDebugValue=function(){};tt.useDeferredValue=function(t){return cn.current.useDeferredValue(t)};tt.useEffect=function(t,e){return cn.current.useEffect(t,e)};tt.useId=function(){return cn.current.useId()};tt.useImperativeHandle=function(t,e,n){return cn.current.useImperativeHandle(t,e,n)};tt.useInsertionEffect=function(t,e){return cn.current.useInsertionEffect(t,e)};tt.useLayoutEffect=function(t,e){return cn.current.useLayoutEffect(t,e)};tt.useMemo=function(t,e){return cn.current.useMemo(t,e)};tt.useReducer=function(t,e,n){return cn.current.useReducer(t,e,n)};tt.useRef=function(t){return cn.current.useRef(t)};tt.useState=function(t){return cn.current.useState(t)};tt.useSyncExternalStore=function(t,e,n){return cn.current.useSyncExternalStore(t,e,n)};tt.useTransition=function(){return cn.current.useTransition()};tt.version="18.3.1";Wm.exports=tt;var Me=Wm.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c_=Me,u_=Symbol.for("react.element"),d_=Symbol.for("react.fragment"),f_=Object.prototype.hasOwnProperty,h_=c_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p_={key:!0,ref:!0,__self:!0,__source:!0};function Jm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)f_.call(e,i)&&!p_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:u_,type:t,key:s,ref:a,props:r,_owner:h_.current}}Ql.Fragment=d_;Ql.jsx=Jm;Ql.jsxs=Jm;Gm.exports=Ql;var S=Gm.exports,eg={exports:{}},An={},tg={exports:{}},ng={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,F){var z=D.length;D.push(F);e:for(;0<z;){var K=z-1>>>1,ae=D[K];if(0<r(ae,F))D[K]=F,D[z]=ae,z=K;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var F=D[0],z=D.pop();if(z!==F){D[0]=z;e:for(var K=0,ae=D.length,Ae=ae>>>1;K<Ae;){var W=2*(K+1)-1,j=D[W],oe=W+1,Se=D[oe];if(0>r(j,z))oe<ae&&0>r(Se,j)?(D[K]=Se,D[oe]=z,K=oe):(D[K]=j,D[W]=z,K=W);else if(oe<ae&&0>r(Se,z))D[K]=Se,D[oe]=z,K=oe;else break e}}return F}function r(D,F){var z=D.sortIndex-F.sortIndex;return z!==0?z:D.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],f=1,d=null,h=3,m=!1,_=!1,x=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(D){for(var F=n(c);F!==null;){if(F.callback===null)i(c);else if(F.startTime<=D)i(c),F.sortIndex=F.expirationTime,e(l,F);else break;F=n(c)}}function M(D){if(x=!1,g(D),!_)if(n(l)!==null)_=!0,B(P);else{var F=n(c);F!==null&&H(M,F.startTime-D)}}function P(D,F){_=!1,x&&(x=!1,u(N),N=-1),m=!0;var z=h;try{for(g(F),d=n(l);d!==null&&(!(d.expirationTime>F)||D&&!C());){var K=d.callback;if(typeof K=="function"){d.callback=null,h=d.priorityLevel;var ae=K(d.expirationTime<=F);F=t.unstable_now(),typeof ae=="function"?d.callback=ae:d===n(l)&&i(l),g(F)}else i(l);d=n(l)}if(d!==null)var Ae=!0;else{var W=n(c);W!==null&&H(M,W.startTime-F),Ae=!1}return Ae}finally{d=null,h=z,m=!1}}var A=!1,T=null,N=-1,re=5,y=-1;function C(){return!(t.unstable_now()-y<re)}function Q(){if(T!==null){var D=t.unstable_now();y=D;var F=!0;try{F=T(!0,D)}finally{F?ee():(A=!1,T=null)}}else A=!1}var ee;if(typeof v=="function")ee=function(){v(Q)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,J=I.port2;I.port1.onmessage=Q,ee=function(){J.postMessage(null)}}else ee=function(){p(Q,0)};function B(D){T=D,A||(A=!0,ee())}function H(D,F){N=p(function(){D(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,B(P))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):re=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(h){case 1:case 2:case 3:var F=3;break;default:F=h}var z=h;h=F;try{return D()}finally{h=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,F){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var z=h;h=D;try{return F()}finally{h=z}},t.unstable_scheduleCallback=function(D,F,z){var K=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?K+z:K):z=K,D){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=z+ae,D={id:f++,callback:F,priorityLevel:D,startTime:z,expirationTime:ae,sortIndex:-1},z>K?(D.sortIndex=z,e(c,D),n(l)===null&&D===n(c)&&(x?(u(N),N=-1):x=!0,H(M,z-K))):(D.sortIndex=ae,e(l,D),_||m||(_=!0,B(P))),D},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(D){var F=h;return function(){var z=h;h=F;try{return D.apply(this,arguments)}finally{h=z}}}})(ng);tg.exports=ng;var m_=tg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g_=Me,bn=m_;function ue(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ig=new Set,Ia={};function Vr(t,e){Bs(t,e),Bs(t+"Capture",e)}function Bs(t,e){for(Ia[t]=e,t=0;t<e.length;t++)ig.add(e[t])}var wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Iu=Object.prototype.hasOwnProperty,v_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Zf={},Qf={};function __(t){return Iu.call(Qf,t)?!0:Iu.call(Zf,t)?!1:v_.test(t)?Qf[t]=!0:(Zf[t]=!0,!1)}function x_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function y_(t,e,n,i){if(e===null||typeof e>"u"||x_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function un(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){jt[t]=new un(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];jt[e]=new un(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){jt[t]=new un(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){jt[t]=new un(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){jt[t]=new un(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){jt[t]=new un(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){jt[t]=new un(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){jt[t]=new un(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){jt[t]=new un(t,5,!1,t.toLowerCase(),null,!1,!1)});var Vd=/[\-:]([a-z])/g;function Gd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Vd,Gd);jt[e]=new un(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Vd,Gd);jt[e]=new un(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Vd,Gd);jt[e]=new un(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){jt[t]=new un(t,1,!1,t.toLowerCase(),null,!1,!1)});jt.xlinkHref=new un("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){jt[t]=new un(t,1,!1,t.toLowerCase(),null,!0,!0)});function Wd(t,e,n,i){var r=jt.hasOwnProperty(e)?jt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(y_(e,n,r,i)&&(n=null),i||r===null?__(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ri=g_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ho=Symbol.for("react.element"),gs=Symbol.for("react.portal"),vs=Symbol.for("react.fragment"),jd=Symbol.for("react.strict_mode"),Uu=Symbol.for("react.profiler"),rg=Symbol.for("react.provider"),sg=Symbol.for("react.context"),Xd=Symbol.for("react.forward_ref"),Fu=Symbol.for("react.suspense"),Ou=Symbol.for("react.suspense_list"),qd=Symbol.for("react.memo"),ki=Symbol.for("react.lazy"),ag=Symbol.for("react.offscreen"),Jf=Symbol.iterator;function na(t){return t===null||typeof t!="object"?null:(t=Jf&&t[Jf]||t["@@iterator"],typeof t=="function"?t:null)}var wt=Object.assign,Tc;function xa(t){if(Tc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Tc=e&&e[1]||""}return`
`+Tc+t}var bc=!1;function Ac(t,e){if(!t||bc)return"";bc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{bc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?xa(t):""}function S_(t){switch(t.tag){case 5:return xa(t.type);case 16:return xa("Lazy");case 13:return xa("Suspense");case 19:return xa("SuspenseList");case 0:case 2:case 15:return t=Ac(t.type,!1),t;case 11:return t=Ac(t.type.render,!1),t;case 1:return t=Ac(t.type,!0),t;default:return""}}function ku(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case vs:return"Fragment";case gs:return"Portal";case Uu:return"Profiler";case jd:return"StrictMode";case Fu:return"Suspense";case Ou:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case sg:return(t.displayName||"Context")+".Consumer";case rg:return(t._context.displayName||"Context")+".Provider";case Xd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case qd:return e=t.displayName||null,e!==null?e:ku(t.type)||"Memo";case ki:e=t._payload,t=t._init;try{return ku(t(e))}catch{}}return null}function M_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ku(e);case 8:return e===jd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function rr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function og(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function E_(t){var e=og(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function po(t){t._valueTracker||(t._valueTracker=E_(t))}function lg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=og(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function yl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function zu(t,e){var n=e.checked;return wt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function eh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=rr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function cg(t,e){e=e.checked,e!=null&&Wd(t,"checked",e,!1)}function Bu(t,e){cg(t,e);var n=rr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Hu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Hu(t,e.type,rr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function th(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Hu(t,e,n){(e!=="number"||yl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ya=Array.isArray;function Ls(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+rr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Vu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ue(91));return wt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function nh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ue(92));if(ya(n)){if(1<n.length)throw Error(ue(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:rr(n)}}function ug(t,e){var n=rr(e.value),i=rr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function ih(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function dg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?dg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var mo,fg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(mo=mo||document.createElement("div"),mo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=mo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ua(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ea={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},w_=["Webkit","ms","Moz","O"];Object.keys(Ea).forEach(function(t){w_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ea[e]=Ea[t]})});function hg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ea.hasOwnProperty(t)&&Ea[t]?(""+e).trim():e+"px"}function pg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=hg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var T_=wt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wu(t,e){if(e){if(T_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ue(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ue(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ue(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ue(62))}}function ju(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xu=null;function $d(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var qu=null,Ns=null,Ds=null;function rh(t){if(t=so(t)){if(typeof qu!="function")throw Error(ue(280));var e=t.stateNode;e&&(e=ic(e),qu(t.stateNode,t.type,e))}}function mg(t){Ns?Ds?Ds.push(t):Ds=[t]:Ns=t}function gg(){if(Ns){var t=Ns,e=Ds;if(Ds=Ns=null,rh(t),e)for(t=0;t<e.length;t++)rh(e[t])}}function vg(t,e){return t(e)}function _g(){}var Cc=!1;function xg(t,e,n){if(Cc)return t(e,n);Cc=!0;try{return vg(t,e,n)}finally{Cc=!1,(Ns!==null||Ds!==null)&&(_g(),gg())}}function Fa(t,e){var n=t.stateNode;if(n===null)return null;var i=ic(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ue(231,e,typeof n));return n}var $u=!1;if(wi)try{var ia={};Object.defineProperty(ia,"passive",{get:function(){$u=!0}}),window.addEventListener("test",ia,ia),window.removeEventListener("test",ia,ia)}catch{$u=!1}function b_(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var wa=!1,Sl=null,Ml=!1,Yu=null,A_={onError:function(t){wa=!0,Sl=t}};function C_(t,e,n,i,r,s,a,o,l){wa=!1,Sl=null,b_.apply(A_,arguments)}function R_(t,e,n,i,r,s,a,o,l){if(C_.apply(this,arguments),wa){if(wa){var c=Sl;wa=!1,Sl=null}else throw Error(ue(198));Ml||(Ml=!0,Yu=c)}}function Gr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function yg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function sh(t){if(Gr(t)!==t)throw Error(ue(188))}function P_(t){var e=t.alternate;if(!e){if(e=Gr(t),e===null)throw Error(ue(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return sh(r),t;if(s===i)return sh(r),e;s=s.sibling}throw Error(ue(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ue(189))}}if(n.alternate!==i)throw Error(ue(190))}if(n.tag!==3)throw Error(ue(188));return n.stateNode.current===n?t:e}function Sg(t){return t=P_(t),t!==null?Mg(t):null}function Mg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Mg(t);if(e!==null)return e;t=t.sibling}return null}var Eg=bn.unstable_scheduleCallback,ah=bn.unstable_cancelCallback,L_=bn.unstable_shouldYield,N_=bn.unstable_requestPaint,At=bn.unstable_now,D_=bn.unstable_getCurrentPriorityLevel,Yd=bn.unstable_ImmediatePriority,wg=bn.unstable_UserBlockingPriority,El=bn.unstable_NormalPriority,I_=bn.unstable_LowPriority,Tg=bn.unstable_IdlePriority,Jl=null,ai=null;function U_(t){if(ai&&typeof ai.onCommitFiberRoot=="function")try{ai.onCommitFiberRoot(Jl,t,void 0,(t.current.flags&128)===128)}catch{}}var Yn=Math.clz32?Math.clz32:k_,F_=Math.log,O_=Math.LN2;function k_(t){return t>>>=0,t===0?32:31-(F_(t)/O_|0)|0}var go=64,vo=4194304;function Sa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function wl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Sa(o):(s&=a,s!==0&&(i=Sa(s)))}else a=n&~r,a!==0?i=Sa(a):s!==0&&(i=Sa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Yn(e),r=1<<n,i|=t[n],e&=~r;return i}function z_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function B_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Yn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=z_(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Ku(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function bg(){var t=go;return go<<=1,!(go&4194240)&&(go=64),t}function Rc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function io(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Yn(e),t[e]=n}function H_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Yn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Kd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Yn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ot=0;function Ag(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Cg,Zd,Rg,Pg,Lg,Zu=!1,_o=[],qi=null,$i=null,Yi=null,Oa=new Map,ka=new Map,Hi=[],V_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function oh(t,e){switch(t){case"focusin":case"focusout":qi=null;break;case"dragenter":case"dragleave":$i=null;break;case"mouseover":case"mouseout":Yi=null;break;case"pointerover":case"pointerout":Oa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ka.delete(e.pointerId)}}function ra(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=so(e),e!==null&&Zd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function G_(t,e,n,i,r){switch(e){case"focusin":return qi=ra(qi,t,e,n,i,r),!0;case"dragenter":return $i=ra($i,t,e,n,i,r),!0;case"mouseover":return Yi=ra(Yi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Oa.set(s,ra(Oa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ka.set(s,ra(ka.get(s)||null,t,e,n,i,r)),!0}return!1}function Ng(t){var e=br(t.target);if(e!==null){var n=Gr(e);if(n!==null){if(e=n.tag,e===13){if(e=yg(n),e!==null){t.blockedOn=e,Lg(t.priority,function(){Rg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ol(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Qu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Xu=i,n.target.dispatchEvent(i),Xu=null}else return e=so(n),e!==null&&Zd(e),t.blockedOn=n,!1;e.shift()}return!0}function lh(t,e,n){ol(t)&&n.delete(e)}function W_(){Zu=!1,qi!==null&&ol(qi)&&(qi=null),$i!==null&&ol($i)&&($i=null),Yi!==null&&ol(Yi)&&(Yi=null),Oa.forEach(lh),ka.forEach(lh)}function sa(t,e){t.blockedOn===e&&(t.blockedOn=null,Zu||(Zu=!0,bn.unstable_scheduleCallback(bn.unstable_NormalPriority,W_)))}function za(t){function e(r){return sa(r,t)}if(0<_o.length){sa(_o[0],t);for(var n=1;n<_o.length;n++){var i=_o[n];i.blockedOn===t&&(i.blockedOn=null)}}for(qi!==null&&sa(qi,t),$i!==null&&sa($i,t),Yi!==null&&sa(Yi,t),Oa.forEach(e),ka.forEach(e),n=0;n<Hi.length;n++)i=Hi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Hi.length&&(n=Hi[0],n.blockedOn===null);)Ng(n),n.blockedOn===null&&Hi.shift()}var Is=Ri.ReactCurrentBatchConfig,Tl=!0;function j_(t,e,n,i){var r=ot,s=Is.transition;Is.transition=null;try{ot=1,Qd(t,e,n,i)}finally{ot=r,Is.transition=s}}function X_(t,e,n,i){var r=ot,s=Is.transition;Is.transition=null;try{ot=4,Qd(t,e,n,i)}finally{ot=r,Is.transition=s}}function Qd(t,e,n,i){if(Tl){var r=Qu(t,e,n,i);if(r===null)zc(t,e,i,bl,n),oh(t,i);else if(G_(r,t,e,n,i))i.stopPropagation();else if(oh(t,i),e&4&&-1<V_.indexOf(t)){for(;r!==null;){var s=so(r);if(s!==null&&Cg(s),s=Qu(t,e,n,i),s===null&&zc(t,e,i,bl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else zc(t,e,i,null,n)}}var bl=null;function Qu(t,e,n,i){if(bl=null,t=$d(i),t=br(t),t!==null)if(e=Gr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=yg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return bl=t,null}function Dg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(D_()){case Yd:return 1;case wg:return 4;case El:case I_:return 16;case Tg:return 536870912;default:return 16}default:return 16}}var Wi=null,Jd=null,ll=null;function Ig(){if(ll)return ll;var t,e=Jd,n=e.length,i,r="value"in Wi?Wi.value:Wi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return ll=r.slice(t,1<i?1-i:void 0)}function cl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function xo(){return!0}function ch(){return!1}function Cn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?xo:ch,this.isPropagationStopped=ch,this}return wt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xo)},persist:function(){},isPersistent:xo}),e}var Qs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ef=Cn(Qs),ro=wt({},Qs,{view:0,detail:0}),q_=Cn(ro),Pc,Lc,aa,ec=wt({},ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==aa&&(aa&&t.type==="mousemove"?(Pc=t.screenX-aa.screenX,Lc=t.screenY-aa.screenY):Lc=Pc=0,aa=t),Pc)},movementY:function(t){return"movementY"in t?t.movementY:Lc}}),uh=Cn(ec),$_=wt({},ec,{dataTransfer:0}),Y_=Cn($_),K_=wt({},ro,{relatedTarget:0}),Nc=Cn(K_),Z_=wt({},Qs,{animationName:0,elapsedTime:0,pseudoElement:0}),Q_=Cn(Z_),J_=wt({},Qs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ex=Cn(J_),tx=wt({},Qs,{data:0}),dh=Cn(tx),nx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ix={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=rx[t])?!!e[t]:!1}function tf(){return sx}var ax=wt({},ro,{key:function(t){if(t.key){var e=nx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=cl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ix[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tf,charCode:function(t){return t.type==="keypress"?cl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?cl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ox=Cn(ax),lx=wt({},ec,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fh=Cn(lx),cx=wt({},ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tf}),ux=Cn(cx),dx=wt({},Qs,{propertyName:0,elapsedTime:0,pseudoElement:0}),fx=Cn(dx),hx=wt({},ec,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),px=Cn(hx),mx=[9,13,27,32],nf=wi&&"CompositionEvent"in window,Ta=null;wi&&"documentMode"in document&&(Ta=document.documentMode);var gx=wi&&"TextEvent"in window&&!Ta,Ug=wi&&(!nf||Ta&&8<Ta&&11>=Ta),hh=" ",ph=!1;function Fg(t,e){switch(t){case"keyup":return mx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Og(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var _s=!1;function vx(t,e){switch(t){case"compositionend":return Og(e);case"keypress":return e.which!==32?null:(ph=!0,hh);case"textInput":return t=e.data,t===hh&&ph?null:t;default:return null}}function _x(t,e){if(_s)return t==="compositionend"||!nf&&Fg(t,e)?(t=Ig(),ll=Jd=Wi=null,_s=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ug&&e.locale!=="ko"?null:e.data;default:return null}}var xx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!xx[t.type]:e==="textarea"}function kg(t,e,n,i){mg(i),e=Al(e,"onChange"),0<e.length&&(n=new ef("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ba=null,Ba=null;function yx(t){Yg(t,0)}function tc(t){var e=Ss(t);if(lg(e))return t}function Sx(t,e){if(t==="change")return e}var zg=!1;if(wi){var Dc;if(wi){var Ic="oninput"in document;if(!Ic){var gh=document.createElement("div");gh.setAttribute("oninput","return;"),Ic=typeof gh.oninput=="function"}Dc=Ic}else Dc=!1;zg=Dc&&(!document.documentMode||9<document.documentMode)}function vh(){ba&&(ba.detachEvent("onpropertychange",Bg),Ba=ba=null)}function Bg(t){if(t.propertyName==="value"&&tc(Ba)){var e=[];kg(e,Ba,t,$d(t)),xg(yx,e)}}function Mx(t,e,n){t==="focusin"?(vh(),ba=e,Ba=n,ba.attachEvent("onpropertychange",Bg)):t==="focusout"&&vh()}function Ex(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return tc(Ba)}function wx(t,e){if(t==="click")return tc(e)}function Tx(t,e){if(t==="input"||t==="change")return tc(e)}function bx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Zn=typeof Object.is=="function"?Object.is:bx;function Ha(t,e){if(Zn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Iu.call(e,r)||!Zn(t[r],e[r]))return!1}return!0}function _h(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function xh(t,e){var n=_h(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=_h(n)}}function Hg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Hg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Vg(){for(var t=window,e=yl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=yl(t.document)}return e}function rf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Ax(t){var e=Vg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Hg(n.ownerDocument.documentElement,n)){if(i!==null&&rf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=xh(n,s);var a=xh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Cx=wi&&"documentMode"in document&&11>=document.documentMode,xs=null,Ju=null,Aa=null,ed=!1;function yh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ed||xs==null||xs!==yl(i)||(i=xs,"selectionStart"in i&&rf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Aa&&Ha(Aa,i)||(Aa=i,i=Al(Ju,"onSelect"),0<i.length&&(e=new ef("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=xs)))}function yo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ys={animationend:yo("Animation","AnimationEnd"),animationiteration:yo("Animation","AnimationIteration"),animationstart:yo("Animation","AnimationStart"),transitionend:yo("Transition","TransitionEnd")},Uc={},Gg={};wi&&(Gg=document.createElement("div").style,"AnimationEvent"in window||(delete ys.animationend.animation,delete ys.animationiteration.animation,delete ys.animationstart.animation),"TransitionEvent"in window||delete ys.transitionend.transition);function nc(t){if(Uc[t])return Uc[t];if(!ys[t])return t;var e=ys[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Gg)return Uc[t]=e[n];return t}var Wg=nc("animationend"),jg=nc("animationiteration"),Xg=nc("animationstart"),qg=nc("transitionend"),$g=new Map,Sh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function lr(t,e){$g.set(t,e),Vr(e,[t])}for(var Fc=0;Fc<Sh.length;Fc++){var Oc=Sh[Fc],Rx=Oc.toLowerCase(),Px=Oc[0].toUpperCase()+Oc.slice(1);lr(Rx,"on"+Px)}lr(Wg,"onAnimationEnd");lr(jg,"onAnimationIteration");lr(Xg,"onAnimationStart");lr("dblclick","onDoubleClick");lr("focusin","onFocus");lr("focusout","onBlur");lr(qg,"onTransitionEnd");Bs("onMouseEnter",["mouseout","mouseover"]);Bs("onMouseLeave",["mouseout","mouseover"]);Bs("onPointerEnter",["pointerout","pointerover"]);Bs("onPointerLeave",["pointerout","pointerover"]);Vr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ma="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ma));function Mh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,R_(i,e,void 0,t),t.currentTarget=null}function Yg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Mh(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Mh(r,o,c),s=l}}}if(Ml)throw t=Yu,Ml=!1,Yu=null,t}function pt(t,e){var n=e[sd];n===void 0&&(n=e[sd]=new Set);var i=t+"__bubble";n.has(i)||(Kg(e,t,2,!1),n.add(i))}function kc(t,e,n){var i=0;e&&(i|=4),Kg(n,t,i,e)}var So="_reactListening"+Math.random().toString(36).slice(2);function Va(t){if(!t[So]){t[So]=!0,ig.forEach(function(n){n!=="selectionchange"&&(Lx.has(n)||kc(n,!1,t),kc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[So]||(e[So]=!0,kc("selectionchange",!1,e))}}function Kg(t,e,n,i){switch(Dg(e)){case 1:var r=j_;break;case 4:r=X_;break;default:r=Qd}n=r.bind(null,e,n,t),r=void 0,!$u||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function zc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=br(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}xg(function(){var c=s,f=$d(n),d=[];e:{var h=$g.get(t);if(h!==void 0){var m=ef,_=t;switch(t){case"keypress":if(cl(n)===0)break e;case"keydown":case"keyup":m=ox;break;case"focusin":_="focus",m=Nc;break;case"focusout":_="blur",m=Nc;break;case"beforeblur":case"afterblur":m=Nc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=uh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Y_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=ux;break;case Wg:case jg:case Xg:m=Q_;break;case qg:m=fx;break;case"scroll":m=q_;break;case"wheel":m=px;break;case"copy":case"cut":case"paste":m=ex;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=fh}var x=(e&4)!==0,p=!x&&t==="scroll",u=x?h!==null?h+"Capture":null:h;x=[];for(var v=c,g;v!==null;){g=v;var M=g.stateNode;if(g.tag===5&&M!==null&&(g=M,u!==null&&(M=Fa(v,u),M!=null&&x.push(Ga(v,M,g)))),p)break;v=v.return}0<x.length&&(h=new m(h,_,null,n,f),d.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==Xu&&(_=n.relatedTarget||n.fromElement)&&(br(_)||_[Ti]))break e;if((m||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=c,_=_?br(_):null,_!==null&&(p=Gr(_),_!==p||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=c),m!==_)){if(x=uh,M="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(x=fh,M="onPointerLeave",u="onPointerEnter",v="pointer"),p=m==null?h:Ss(m),g=_==null?h:Ss(_),h=new x(M,v+"leave",m,n,f),h.target=p,h.relatedTarget=g,M=null,br(f)===c&&(x=new x(u,v+"enter",_,n,f),x.target=g,x.relatedTarget=p,M=x),p=M,m&&_)t:{for(x=m,u=_,v=0,g=x;g;g=qr(g))v++;for(g=0,M=u;M;M=qr(M))g++;for(;0<v-g;)x=qr(x),v--;for(;0<g-v;)u=qr(u),g--;for(;v--;){if(x===u||u!==null&&x===u.alternate)break t;x=qr(x),u=qr(u)}x=null}else x=null;m!==null&&Eh(d,h,m,x,!1),_!==null&&p!==null&&Eh(d,p,_,x,!0)}}e:{if(h=c?Ss(c):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var P=Sx;else if(mh(h))if(zg)P=Tx;else{P=Ex;var A=Mx}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(P=wx);if(P&&(P=P(t,c))){kg(d,P,n,f);break e}A&&A(t,h,c),t==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&Hu(h,"number",h.value)}switch(A=c?Ss(c):window,t){case"focusin":(mh(A)||A.contentEditable==="true")&&(xs=A,Ju=c,Aa=null);break;case"focusout":Aa=Ju=xs=null;break;case"mousedown":ed=!0;break;case"contextmenu":case"mouseup":case"dragend":ed=!1,yh(d,n,f);break;case"selectionchange":if(Cx)break;case"keydown":case"keyup":yh(d,n,f)}var T;if(nf)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else _s?Fg(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Ug&&n.locale!=="ko"&&(_s||N!=="onCompositionStart"?N==="onCompositionEnd"&&_s&&(T=Ig()):(Wi=f,Jd="value"in Wi?Wi.value:Wi.textContent,_s=!0)),A=Al(c,N),0<A.length&&(N=new dh(N,t,null,n,f),d.push({event:N,listeners:A}),T?N.data=T:(T=Og(n),T!==null&&(N.data=T)))),(T=gx?vx(t,n):_x(t,n))&&(c=Al(c,"onBeforeInput"),0<c.length&&(f=new dh("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=T))}Yg(d,e)})}function Ga(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Al(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Fa(t,n),s!=null&&i.unshift(Ga(t,s,r)),s=Fa(t,e),s!=null&&i.push(Ga(t,s,r))),t=t.return}return i}function qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Eh(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Fa(n,s),l!=null&&a.unshift(Ga(n,l,o))):r||(l=Fa(n,s),l!=null&&a.push(Ga(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var Nx=/\r\n?/g,Dx=/\u0000|\uFFFD/g;function wh(t){return(typeof t=="string"?t:""+t).replace(Nx,`
`).replace(Dx,"")}function Mo(t,e,n){if(e=wh(e),wh(t)!==e&&n)throw Error(ue(425))}function Cl(){}var td=null,nd=null;function id(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var rd=typeof setTimeout=="function"?setTimeout:void 0,Ix=typeof clearTimeout=="function"?clearTimeout:void 0,Th=typeof Promise=="function"?Promise:void 0,Ux=typeof queueMicrotask=="function"?queueMicrotask:typeof Th<"u"?function(t){return Th.resolve(null).then(t).catch(Fx)}:rd;function Fx(t){setTimeout(function(){throw t})}function Bc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),za(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);za(e)}function Ki(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function bh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Js=Math.random().toString(36).slice(2),ri="__reactFiber$"+Js,Wa="__reactProps$"+Js,Ti="__reactContainer$"+Js,sd="__reactEvents$"+Js,Ox="__reactListeners$"+Js,kx="__reactHandles$"+Js;function br(t){var e=t[ri];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ti]||n[ri]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=bh(t);t!==null;){if(n=t[ri])return n;t=bh(t)}return e}t=n,n=t.parentNode}return null}function so(t){return t=t[ri]||t[Ti],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ss(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ue(33))}function ic(t){return t[Wa]||null}var ad=[],Ms=-1;function cr(t){return{current:t}}function gt(t){0>Ms||(t.current=ad[Ms],ad[Ms]=null,Ms--)}function dt(t,e){Ms++,ad[Ms]=t.current,t.current=e}var sr={},en=cr(sr),hn=cr(!1),Ur=sr;function Hs(t,e){var n=t.type.contextTypes;if(!n)return sr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function pn(t){return t=t.childContextTypes,t!=null}function Rl(){gt(hn),gt(en)}function Ah(t,e,n){if(en.current!==sr)throw Error(ue(168));dt(en,e),dt(hn,n)}function Zg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ue(108,M_(t)||"Unknown",r));return wt({},n,i)}function Pl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||sr,Ur=en.current,dt(en,t),dt(hn,hn.current),!0}function Ch(t,e,n){var i=t.stateNode;if(!i)throw Error(ue(169));n?(t=Zg(t,e,Ur),i.__reactInternalMemoizedMergedChildContext=t,gt(hn),gt(en),dt(en,t)):gt(hn),dt(hn,n)}var gi=null,rc=!1,Hc=!1;function Qg(t){gi===null?gi=[t]:gi.push(t)}function zx(t){rc=!0,Qg(t)}function ur(){if(!Hc&&gi!==null){Hc=!0;var t=0,e=ot;try{var n=gi;for(ot=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}gi=null,rc=!1}catch(r){throw gi!==null&&(gi=gi.slice(t+1)),Eg(Yd,ur),r}finally{ot=e,Hc=!1}}return null}var Es=[],ws=0,Ll=null,Nl=0,Nn=[],Dn=0,Fr=null,_i=1,xi="";function yr(t,e){Es[ws++]=Nl,Es[ws++]=Ll,Ll=t,Nl=e}function Jg(t,e,n){Nn[Dn++]=_i,Nn[Dn++]=xi,Nn[Dn++]=Fr,Fr=t;var i=_i;t=xi;var r=32-Yn(i)-1;i&=~(1<<r),n+=1;var s=32-Yn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,_i=1<<32-Yn(e)+r|n<<r|i,xi=s+t}else _i=1<<s|n<<r|i,xi=t}function sf(t){t.return!==null&&(yr(t,1),Jg(t,1,0))}function af(t){for(;t===Ll;)Ll=Es[--ws],Es[ws]=null,Nl=Es[--ws],Es[ws]=null;for(;t===Fr;)Fr=Nn[--Dn],Nn[Dn]=null,xi=Nn[--Dn],Nn[Dn]=null,_i=Nn[--Dn],Nn[Dn]=null}var wn=null,En=null,xt=!1,Wn=null;function e0(t,e){var n=In(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Rh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,wn=t,En=Ki(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,wn=t,En=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Fr!==null?{id:_i,overflow:xi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=In(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,wn=t,En=null,!0):!1;default:return!1}}function od(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ld(t){if(xt){var e=En;if(e){var n=e;if(!Rh(t,e)){if(od(t))throw Error(ue(418));e=Ki(n.nextSibling);var i=wn;e&&Rh(t,e)?e0(i,n):(t.flags=t.flags&-4097|2,xt=!1,wn=t)}}else{if(od(t))throw Error(ue(418));t.flags=t.flags&-4097|2,xt=!1,wn=t}}}function Ph(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;wn=t}function Eo(t){if(t!==wn)return!1;if(!xt)return Ph(t),xt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!id(t.type,t.memoizedProps)),e&&(e=En)){if(od(t))throw t0(),Error(ue(418));for(;e;)e0(t,e),e=Ki(e.nextSibling)}if(Ph(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ue(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){En=Ki(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}En=null}}else En=wn?Ki(t.stateNode.nextSibling):null;return!0}function t0(){for(var t=En;t;)t=Ki(t.nextSibling)}function Vs(){En=wn=null,xt=!1}function of(t){Wn===null?Wn=[t]:Wn.push(t)}var Bx=Ri.ReactCurrentBatchConfig;function oa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ue(309));var i=n.stateNode}if(!i)throw Error(ue(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ue(284));if(!n._owner)throw Error(ue(290,t))}return t}function wo(t,e){throw t=Object.prototype.toString.call(e),Error(ue(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Lh(t){var e=t._init;return e(t._payload)}function n0(t){function e(u,v){if(t){var g=u.deletions;g===null?(u.deletions=[v],u.flags|=16):g.push(v)}}function n(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function r(u,v){return u=er(u,v),u.index=0,u.sibling=null,u}function s(u,v,g){return u.index=g,t?(g=u.alternate,g!==null?(g=g.index,g<v?(u.flags|=2,v):g):(u.flags|=2,v)):(u.flags|=1048576,v)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,v,g,M){return v===null||v.tag!==6?(v=$c(g,u.mode,M),v.return=u,v):(v=r(v,g),v.return=u,v)}function l(u,v,g,M){var P=g.type;return P===vs?f(u,v,g.props.children,M,g.key):v!==null&&(v.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===ki&&Lh(P)===v.type)?(M=r(v,g.props),M.ref=oa(u,v,g),M.return=u,M):(M=gl(g.type,g.key,g.props,null,u.mode,M),M.ref=oa(u,v,g),M.return=u,M)}function c(u,v,g,M){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=Yc(g,u.mode,M),v.return=u,v):(v=r(v,g.children||[]),v.return=u,v)}function f(u,v,g,M,P){return v===null||v.tag!==7?(v=Lr(g,u.mode,M,P),v.return=u,v):(v=r(v,g),v.return=u,v)}function d(u,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=$c(""+v,u.mode,g),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ho:return g=gl(v.type,v.key,v.props,null,u.mode,g),g.ref=oa(u,null,v),g.return=u,g;case gs:return v=Yc(v,u.mode,g),v.return=u,v;case ki:var M=v._init;return d(u,M(v._payload),g)}if(ya(v)||na(v))return v=Lr(v,u.mode,g,null),v.return=u,v;wo(u,v)}return null}function h(u,v,g,M){var P=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return P!==null?null:o(u,v,""+g,M);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ho:return g.key===P?l(u,v,g,M):null;case gs:return g.key===P?c(u,v,g,M):null;case ki:return P=g._init,h(u,v,P(g._payload),M)}if(ya(g)||na(g))return P!==null?null:f(u,v,g,M,null);wo(u,g)}return null}function m(u,v,g,M,P){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(g)||null,o(v,u,""+M,P);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case ho:return u=u.get(M.key===null?g:M.key)||null,l(v,u,M,P);case gs:return u=u.get(M.key===null?g:M.key)||null,c(v,u,M,P);case ki:var A=M._init;return m(u,v,g,A(M._payload),P)}if(ya(M)||na(M))return u=u.get(g)||null,f(v,u,M,P,null);wo(v,M)}return null}function _(u,v,g,M){for(var P=null,A=null,T=v,N=v=0,re=null;T!==null&&N<g.length;N++){T.index>N?(re=T,T=null):re=T.sibling;var y=h(u,T,g[N],M);if(y===null){T===null&&(T=re);break}t&&T&&y.alternate===null&&e(u,T),v=s(y,v,N),A===null?P=y:A.sibling=y,A=y,T=re}if(N===g.length)return n(u,T),xt&&yr(u,N),P;if(T===null){for(;N<g.length;N++)T=d(u,g[N],M),T!==null&&(v=s(T,v,N),A===null?P=T:A.sibling=T,A=T);return xt&&yr(u,N),P}for(T=i(u,T);N<g.length;N++)re=m(T,u,N,g[N],M),re!==null&&(t&&re.alternate!==null&&T.delete(re.key===null?N:re.key),v=s(re,v,N),A===null?P=re:A.sibling=re,A=re);return t&&T.forEach(function(C){return e(u,C)}),xt&&yr(u,N),P}function x(u,v,g,M){var P=na(g);if(typeof P!="function")throw Error(ue(150));if(g=P.call(g),g==null)throw Error(ue(151));for(var A=P=null,T=v,N=v=0,re=null,y=g.next();T!==null&&!y.done;N++,y=g.next()){T.index>N?(re=T,T=null):re=T.sibling;var C=h(u,T,y.value,M);if(C===null){T===null&&(T=re);break}t&&T&&C.alternate===null&&e(u,T),v=s(C,v,N),A===null?P=C:A.sibling=C,A=C,T=re}if(y.done)return n(u,T),xt&&yr(u,N),P;if(T===null){for(;!y.done;N++,y=g.next())y=d(u,y.value,M),y!==null&&(v=s(y,v,N),A===null?P=y:A.sibling=y,A=y);return xt&&yr(u,N),P}for(T=i(u,T);!y.done;N++,y=g.next())y=m(T,u,N,y.value,M),y!==null&&(t&&y.alternate!==null&&T.delete(y.key===null?N:y.key),v=s(y,v,N),A===null?P=y:A.sibling=y,A=y);return t&&T.forEach(function(Q){return e(u,Q)}),xt&&yr(u,N),P}function p(u,v,g,M){if(typeof g=="object"&&g!==null&&g.type===vs&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case ho:e:{for(var P=g.key,A=v;A!==null;){if(A.key===P){if(P=g.type,P===vs){if(A.tag===7){n(u,A.sibling),v=r(A,g.props.children),v.return=u,u=v;break e}}else if(A.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===ki&&Lh(P)===A.type){n(u,A.sibling),v=r(A,g.props),v.ref=oa(u,A,g),v.return=u,u=v;break e}n(u,A);break}else e(u,A);A=A.sibling}g.type===vs?(v=Lr(g.props.children,u.mode,M,g.key),v.return=u,u=v):(M=gl(g.type,g.key,g.props,null,u.mode,M),M.ref=oa(u,v,g),M.return=u,u=M)}return a(u);case gs:e:{for(A=g.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){n(u,v.sibling),v=r(v,g.children||[]),v.return=u,u=v;break e}else{n(u,v);break}else e(u,v);v=v.sibling}v=Yc(g,u.mode,M),v.return=u,u=v}return a(u);case ki:return A=g._init,p(u,v,A(g._payload),M)}if(ya(g))return _(u,v,g,M);if(na(g))return x(u,v,g,M);wo(u,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(n(u,v.sibling),v=r(v,g),v.return=u,u=v):(n(u,v),v=$c(g,u.mode,M),v.return=u,u=v),a(u)):n(u,v)}return p}var Gs=n0(!0),i0=n0(!1),Dl=cr(null),Il=null,Ts=null,lf=null;function cf(){lf=Ts=Il=null}function uf(t){var e=Dl.current;gt(Dl),t._currentValue=e}function cd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Us(t,e){Il=t,lf=Ts=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(fn=!0),t.firstContext=null)}function Fn(t){var e=t._currentValue;if(lf!==t)if(t={context:t,memoizedValue:e,next:null},Ts===null){if(Il===null)throw Error(ue(308));Ts=t,Il.dependencies={lanes:0,firstContext:t}}else Ts=Ts.next=t;return e}var Ar=null;function df(t){Ar===null?Ar=[t]:Ar.push(t)}function r0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,df(e)):(n.next=r.next,r.next=n),e.interleaved=n,bi(t,i)}function bi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var zi=!1;function ff(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function s0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Si(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Zi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,nt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,bi(t,n)}return r=i.interleaved,r===null?(e.next=e,df(i)):(e.next=r.next,r.next=e),i.interleaved=e,bi(t,n)}function ul(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Kd(t,n)}}function Nh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ul(t,e,n,i){var r=t.updateQueue;zi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var f=t.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==a&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;a=0,f=c=l=null,o=s;do{var h=o.lane,m=o.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,x=o;switch(h=e,m=n,x.tag){case 1:if(_=x.payload,typeof _=="function"){d=_.call(m,d,h);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=x.payload,h=typeof _=="function"?_.call(m,d,h):_,h==null)break e;d=wt({},d,h);break e;case 2:zi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[o]:h.push(o))}else m={eventTime:m,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=m,l=d):f=f.next=m,a|=h;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;h=o,o=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);kr|=a,t.lanes=a,t.memoizedState=d}}function Dh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ue(191,r));r.call(i)}}}var ao={},oi=cr(ao),ja=cr(ao),Xa=cr(ao);function Cr(t){if(t===ao)throw Error(ue(174));return t}function hf(t,e){switch(dt(Xa,e),dt(ja,t),dt(oi,ao),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Gu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Gu(e,t)}gt(oi),dt(oi,e)}function Ws(){gt(oi),gt(ja),gt(Xa)}function a0(t){Cr(Xa.current);var e=Cr(oi.current),n=Gu(e,t.type);e!==n&&(dt(ja,t),dt(oi,n))}function pf(t){ja.current===t&&(gt(oi),gt(ja))}var Mt=cr(0);function Fl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Vc=[];function mf(){for(var t=0;t<Vc.length;t++)Vc[t]._workInProgressVersionPrimary=null;Vc.length=0}var dl=Ri.ReactCurrentDispatcher,Gc=Ri.ReactCurrentBatchConfig,Or=0,Et=null,Lt=null,Ot=null,Ol=!1,Ca=!1,qa=0,Hx=0;function qt(){throw Error(ue(321))}function gf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Zn(t[n],e[n]))return!1;return!0}function vf(t,e,n,i,r,s){if(Or=s,Et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,dl.current=t===null||t.memoizedState===null?jx:Xx,t=n(i,r),Ca){s=0;do{if(Ca=!1,qa=0,25<=s)throw Error(ue(301));s+=1,Ot=Lt=null,e.updateQueue=null,dl.current=qx,t=n(i,r)}while(Ca)}if(dl.current=kl,e=Lt!==null&&Lt.next!==null,Or=0,Ot=Lt=Et=null,Ol=!1,e)throw Error(ue(300));return t}function _f(){var t=qa!==0;return qa=0,t}function ei(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ot===null?Et.memoizedState=Ot=t:Ot=Ot.next=t,Ot}function On(){if(Lt===null){var t=Et.alternate;t=t!==null?t.memoizedState:null}else t=Lt.next;var e=Ot===null?Et.memoizedState:Ot.next;if(e!==null)Ot=e,Lt=t;else{if(t===null)throw Error(ue(310));Lt=t,t={memoizedState:Lt.memoizedState,baseState:Lt.baseState,baseQueue:Lt.baseQueue,queue:Lt.queue,next:null},Ot===null?Et.memoizedState=Ot=t:Ot=Ot.next=t}return Ot}function $a(t,e){return typeof e=="function"?e(t):e}function Wc(t){var e=On(),n=e.queue;if(n===null)throw Error(ue(311));n.lastRenderedReducer=t;var i=Lt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var f=c.lane;if((Or&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=d,a=i):l=l.next=d,Et.lanes|=f,kr|=f}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,Zn(i,e.memoizedState)||(fn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Et.lanes|=s,kr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function jc(t){var e=On(),n=e.queue;if(n===null)throw Error(ue(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Zn(s,e.memoizedState)||(fn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function o0(){}function l0(t,e){var n=Et,i=On(),r=e(),s=!Zn(i.memoizedState,r);if(s&&(i.memoizedState=r,fn=!0),i=i.queue,xf(d0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ot!==null&&Ot.memoizedState.tag&1){if(n.flags|=2048,Ya(9,u0.bind(null,n,i,r,e),void 0,null),kt===null)throw Error(ue(349));Or&30||c0(n,e,r)}return r}function c0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function u0(t,e,n,i){e.value=n,e.getSnapshot=i,f0(e)&&h0(t)}function d0(t,e,n){return n(function(){f0(e)&&h0(t)})}function f0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Zn(t,n)}catch{return!0}}function h0(t){var e=bi(t,1);e!==null&&Kn(e,t,1,-1)}function Ih(t){var e=ei();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$a,lastRenderedState:t},e.queue=t,t=t.dispatch=Wx.bind(null,Et,t),[e.memoizedState,t]}function Ya(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function p0(){return On().memoizedState}function fl(t,e,n,i){var r=ei();Et.flags|=t,r.memoizedState=Ya(1|e,n,void 0,i===void 0?null:i)}function sc(t,e,n,i){var r=On();i=i===void 0?null:i;var s=void 0;if(Lt!==null){var a=Lt.memoizedState;if(s=a.destroy,i!==null&&gf(i,a.deps)){r.memoizedState=Ya(e,n,s,i);return}}Et.flags|=t,r.memoizedState=Ya(1|e,n,s,i)}function Uh(t,e){return fl(8390656,8,t,e)}function xf(t,e){return sc(2048,8,t,e)}function m0(t,e){return sc(4,2,t,e)}function g0(t,e){return sc(4,4,t,e)}function v0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function _0(t,e,n){return n=n!=null?n.concat([t]):null,sc(4,4,v0.bind(null,e,t),n)}function yf(){}function x0(t,e){var n=On();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&gf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function y0(t,e){var n=On();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&gf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function S0(t,e,n){return Or&21?(Zn(n,e)||(n=bg(),Et.lanes|=n,kr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,fn=!0),t.memoizedState=n)}function Vx(t,e){var n=ot;ot=n!==0&&4>n?n:4,t(!0);var i=Gc.transition;Gc.transition={};try{t(!1),e()}finally{ot=n,Gc.transition=i}}function M0(){return On().memoizedState}function Gx(t,e,n){var i=Ji(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},E0(t))w0(e,n);else if(n=r0(t,e,n,i),n!==null){var r=ln();Kn(n,t,i,r),T0(n,e,i)}}function Wx(t,e,n){var i=Ji(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(E0(t))w0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Zn(o,a)){var l=e.interleaved;l===null?(r.next=r,df(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=r0(t,e,r,i),n!==null&&(r=ln(),Kn(n,t,i,r),T0(n,e,i))}}function E0(t){var e=t.alternate;return t===Et||e!==null&&e===Et}function w0(t,e){Ca=Ol=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function T0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Kd(t,n)}}var kl={readContext:Fn,useCallback:qt,useContext:qt,useEffect:qt,useImperativeHandle:qt,useInsertionEffect:qt,useLayoutEffect:qt,useMemo:qt,useReducer:qt,useRef:qt,useState:qt,useDebugValue:qt,useDeferredValue:qt,useTransition:qt,useMutableSource:qt,useSyncExternalStore:qt,useId:qt,unstable_isNewReconciler:!1},jx={readContext:Fn,useCallback:function(t,e){return ei().memoizedState=[t,e===void 0?null:e],t},useContext:Fn,useEffect:Uh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,fl(4194308,4,v0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return fl(4194308,4,t,e)},useInsertionEffect:function(t,e){return fl(4,2,t,e)},useMemo:function(t,e){var n=ei();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ei();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Gx.bind(null,Et,t),[i.memoizedState,t]},useRef:function(t){var e=ei();return t={current:t},e.memoizedState=t},useState:Ih,useDebugValue:yf,useDeferredValue:function(t){return ei().memoizedState=t},useTransition:function(){var t=Ih(!1),e=t[0];return t=Vx.bind(null,t[1]),ei().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Et,r=ei();if(xt){if(n===void 0)throw Error(ue(407));n=n()}else{if(n=e(),kt===null)throw Error(ue(349));Or&30||c0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Uh(d0.bind(null,i,s,t),[t]),i.flags|=2048,Ya(9,u0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ei(),e=kt.identifierPrefix;if(xt){var n=xi,i=_i;n=(i&~(1<<32-Yn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=qa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Hx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Xx={readContext:Fn,useCallback:x0,useContext:Fn,useEffect:xf,useImperativeHandle:_0,useInsertionEffect:m0,useLayoutEffect:g0,useMemo:y0,useReducer:Wc,useRef:p0,useState:function(){return Wc($a)},useDebugValue:yf,useDeferredValue:function(t){var e=On();return S0(e,Lt.memoizedState,t)},useTransition:function(){var t=Wc($a)[0],e=On().memoizedState;return[t,e]},useMutableSource:o0,useSyncExternalStore:l0,useId:M0,unstable_isNewReconciler:!1},qx={readContext:Fn,useCallback:x0,useContext:Fn,useEffect:xf,useImperativeHandle:_0,useInsertionEffect:m0,useLayoutEffect:g0,useMemo:y0,useReducer:jc,useRef:p0,useState:function(){return jc($a)},useDebugValue:yf,useDeferredValue:function(t){var e=On();return Lt===null?e.memoizedState=t:S0(e,Lt.memoizedState,t)},useTransition:function(){var t=jc($a)[0],e=On().memoizedState;return[t,e]},useMutableSource:o0,useSyncExternalStore:l0,useId:M0,unstable_isNewReconciler:!1};function Vn(t,e){if(t&&t.defaultProps){e=wt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ud(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:wt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ac={isMounted:function(t){return(t=t._reactInternals)?Gr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=ln(),r=Ji(t),s=Si(i,r);s.payload=e,n!=null&&(s.callback=n),e=Zi(t,s,r),e!==null&&(Kn(e,t,r,i),ul(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=ln(),r=Ji(t),s=Si(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Zi(t,s,r),e!==null&&(Kn(e,t,r,i),ul(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ln(),i=Ji(t),r=Si(n,i);r.tag=2,e!=null&&(r.callback=e),e=Zi(t,r,i),e!==null&&(Kn(e,t,i,n),ul(e,t,i))}};function Fh(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Ha(n,i)||!Ha(r,s):!0}function b0(t,e,n){var i=!1,r=sr,s=e.contextType;return typeof s=="object"&&s!==null?s=Fn(s):(r=pn(e)?Ur:en.current,i=e.contextTypes,s=(i=i!=null)?Hs(t,r):sr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ac,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Oh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&ac.enqueueReplaceState(e,e.state,null)}function dd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},ff(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Fn(s):(s=pn(e)?Ur:en.current,r.context=Hs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ud(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&ac.enqueueReplaceState(r,r.state,null),Ul(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function js(t,e){try{var n="",i=e;do n+=S_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Xc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function fd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var $x=typeof WeakMap=="function"?WeakMap:Map;function A0(t,e,n){n=Si(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Bl||(Bl=!0,Md=i),fd(t,e)},n}function C0(t,e,n){n=Si(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){fd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){fd(t,e),typeof i!="function"&&(Qi===null?Qi=new Set([this]):Qi.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function kh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new $x;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=ly.bind(null,t,e,n),e.then(t,t))}function zh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Bh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Si(-1,1),e.tag=2,Zi(n,e,1))),n.lanes|=1),t)}var Yx=Ri.ReactCurrentOwner,fn=!1;function sn(t,e,n,i){e.child=t===null?i0(e,null,n,i):Gs(e,t.child,n,i)}function Hh(t,e,n,i,r){n=n.render;var s=e.ref;return Us(e,r),i=vf(t,e,n,i,s,r),n=_f(),t!==null&&!fn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ai(t,e,r)):(xt&&n&&sf(e),e.flags|=1,sn(t,e,i,r),e.child)}function Vh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Cf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,R0(t,e,s,i,r)):(t=gl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ha,n(a,i)&&t.ref===e.ref)return Ai(t,e,r)}return e.flags|=1,t=er(s,i),t.ref=e.ref,t.return=e,e.child=t}function R0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ha(s,i)&&t.ref===e.ref)if(fn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(fn=!0);else return e.lanes=t.lanes,Ai(t,e,r)}return hd(t,e,n,i,r)}function P0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},dt(As,Sn),Sn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,dt(As,Sn),Sn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,dt(As,Sn),Sn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,dt(As,Sn),Sn|=i;return sn(t,e,r,n),e.child}function L0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function hd(t,e,n,i,r){var s=pn(n)?Ur:en.current;return s=Hs(e,s),Us(e,r),n=vf(t,e,n,i,s,r),i=_f(),t!==null&&!fn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ai(t,e,r)):(xt&&i&&sf(e),e.flags|=1,sn(t,e,n,r),e.child)}function Gh(t,e,n,i,r){if(pn(n)){var s=!0;Pl(e)}else s=!1;if(Us(e,r),e.stateNode===null)hl(t,e),b0(e,n,i),dd(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Fn(c):(c=pn(n)?Ur:en.current,c=Hs(e,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Oh(e,a,i,c),zi=!1;var h=e.memoizedState;a.state=h,Ul(e,i,a,r),l=e.memoizedState,o!==i||h!==l||hn.current||zi?(typeof f=="function"&&(ud(e,n,f,i),l=e.memoizedState),(o=zi||Fh(e,n,o,i,h,l,c))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,s0(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Vn(e.type,o),a.props=c,d=e.pendingProps,h=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Fn(l):(l=pn(n)?Ur:en.current,l=Hs(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==d||h!==l)&&Oh(e,a,i,l),zi=!1,h=e.memoizedState,a.state=h,Ul(e,i,a,r);var _=e.memoizedState;o!==d||h!==_||hn.current||zi?(typeof m=="function"&&(ud(e,n,m,i),_=e.memoizedState),(c=zi||Fh(e,n,c,i,h,_,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return pd(t,e,n,i,s,r)}function pd(t,e,n,i,r,s){L0(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Ch(e,n,!1),Ai(t,e,s);i=e.stateNode,Yx.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Gs(e,t.child,null,s),e.child=Gs(e,null,o,s)):sn(t,e,o,s),e.memoizedState=i.state,r&&Ch(e,n,!0),e.child}function N0(t){var e=t.stateNode;e.pendingContext?Ah(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ah(t,e.context,!1),hf(t,e.containerInfo)}function Wh(t,e,n,i,r){return Vs(),of(r),e.flags|=256,sn(t,e,n,i),e.child}var md={dehydrated:null,treeContext:null,retryLane:0};function gd(t){return{baseLanes:t,cachePool:null,transitions:null}}function D0(t,e,n){var i=e.pendingProps,r=Mt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),dt(Mt,r&1),t===null)return ld(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=cc(a,i,0,null),t=Lr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=gd(n),e.memoizedState=md,t):Sf(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return Kx(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=er(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=er(o,s):(s=Lr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?gd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=md,i}return s=t.child,t=s.sibling,i=er(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Sf(t,e){return e=cc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function To(t,e,n,i){return i!==null&&of(i),Gs(e,t.child,null,n),t=Sf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Kx(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Xc(Error(ue(422))),To(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=cc({mode:"visible",children:i.children},r,0,null),s=Lr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Gs(e,t.child,null,a),e.child.memoizedState=gd(a),e.memoizedState=md,s);if(!(e.mode&1))return To(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ue(419)),i=Xc(s,i,void 0),To(t,e,a,i)}if(o=(a&t.childLanes)!==0,fn||o){if(i=kt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,bi(t,r),Kn(i,t,r,-1))}return Af(),i=Xc(Error(ue(421))),To(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=cy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,En=Ki(r.nextSibling),wn=e,xt=!0,Wn=null,t!==null&&(Nn[Dn++]=_i,Nn[Dn++]=xi,Nn[Dn++]=Fr,_i=t.id,xi=t.overflow,Fr=e),e=Sf(e,i.children),e.flags|=4096,e)}function jh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),cd(t.return,e,n)}function qc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function I0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(sn(t,e,i.children,n),i=Mt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&jh(t,n,e);else if(t.tag===19)jh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(dt(Mt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Fl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),qc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Fl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}qc(e,!0,n,null,s);break;case"together":qc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function hl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ai(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),kr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ue(153));if(e.child!==null){for(t=e.child,n=er(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=er(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Zx(t,e,n){switch(e.tag){case 3:N0(e),Vs();break;case 5:a0(e);break;case 1:pn(e.type)&&Pl(e);break;case 4:hf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;dt(Dl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(dt(Mt,Mt.current&1),e.flags|=128,null):n&e.child.childLanes?D0(t,e,n):(dt(Mt,Mt.current&1),t=Ai(t,e,n),t!==null?t.sibling:null);dt(Mt,Mt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return I0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),dt(Mt,Mt.current),i)break;return null;case 22:case 23:return e.lanes=0,P0(t,e,n)}return Ai(t,e,n)}var U0,vd,F0,O0;U0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};vd=function(){};F0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Cr(oi.current);var s=null;switch(n){case"input":r=zu(t,r),i=zu(t,i),s=[];break;case"select":r=wt({},r,{value:void 0}),i=wt({},i,{value:void 0}),s=[];break;case"textarea":r=Vu(t,r),i=Vu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Cl)}Wu(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ia.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ia.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&pt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};O0=function(t,e,n,i){n!==i&&(e.flags|=4)};function la(t,e){if(!xt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function $t(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Qx(t,e,n){var i=e.pendingProps;switch(af(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(e),null;case 1:return pn(e.type)&&Rl(),$t(e),null;case 3:return i=e.stateNode,Ws(),gt(hn),gt(en),mf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Eo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Wn!==null&&(Td(Wn),Wn=null))),vd(t,e),$t(e),null;case 5:pf(e);var r=Cr(Xa.current);if(n=e.type,t!==null&&e.stateNode!=null)F0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ue(166));return $t(e),null}if(t=Cr(oi.current),Eo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ri]=e,i[Wa]=s,t=(e.mode&1)!==0,n){case"dialog":pt("cancel",i),pt("close",i);break;case"iframe":case"object":case"embed":pt("load",i);break;case"video":case"audio":for(r=0;r<Ma.length;r++)pt(Ma[r],i);break;case"source":pt("error",i);break;case"img":case"image":case"link":pt("error",i),pt("load",i);break;case"details":pt("toggle",i);break;case"input":eh(i,s),pt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},pt("invalid",i);break;case"textarea":nh(i,s),pt("invalid",i)}Wu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Mo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Mo(i.textContent,o,t),r=["children",""+o]):Ia.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&pt("scroll",i)}switch(n){case"input":po(i),th(i,s,!0);break;case"textarea":po(i),ih(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Cl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=dg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[ri]=e,t[Wa]=i,U0(t,e,!1,!1),e.stateNode=t;e:{switch(a=ju(n,i),n){case"dialog":pt("cancel",t),pt("close",t),r=i;break;case"iframe":case"object":case"embed":pt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ma.length;r++)pt(Ma[r],t);r=i;break;case"source":pt("error",t),r=i;break;case"img":case"image":case"link":pt("error",t),pt("load",t),r=i;break;case"details":pt("toggle",t),r=i;break;case"input":eh(t,i),r=zu(t,i),pt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=wt({},i,{value:void 0}),pt("invalid",t);break;case"textarea":nh(t,i),r=Vu(t,i),pt("invalid",t);break;default:r=i}Wu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?pg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&fg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ua(t,l):typeof l=="number"&&Ua(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ia.hasOwnProperty(s)?l!=null&&s==="onScroll"&&pt("scroll",t):l!=null&&Wd(t,s,l,a))}switch(n){case"input":po(t),th(t,i,!1);break;case"textarea":po(t),ih(t);break;case"option":i.value!=null&&t.setAttribute("value",""+rr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ls(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ls(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Cl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return $t(e),null;case 6:if(t&&e.stateNode!=null)O0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ue(166));if(n=Cr(Xa.current),Cr(oi.current),Eo(e)){if(i=e.stateNode,n=e.memoizedProps,i[ri]=e,(s=i.nodeValue!==n)&&(t=wn,t!==null))switch(t.tag){case 3:Mo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Mo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ri]=e,e.stateNode=i}return $t(e),null;case 13:if(gt(Mt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(xt&&En!==null&&e.mode&1&&!(e.flags&128))t0(),Vs(),e.flags|=98560,s=!1;else if(s=Eo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ue(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ue(317));s[ri]=e}else Vs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;$t(e),s=!1}else Wn!==null&&(Td(Wn),Wn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Mt.current&1?Nt===0&&(Nt=3):Af())),e.updateQueue!==null&&(e.flags|=4),$t(e),null);case 4:return Ws(),vd(t,e),t===null&&Va(e.stateNode.containerInfo),$t(e),null;case 10:return uf(e.type._context),$t(e),null;case 17:return pn(e.type)&&Rl(),$t(e),null;case 19:if(gt(Mt),s=e.memoizedState,s===null)return $t(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)la(s,!1);else{if(Nt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Fl(t),a!==null){for(e.flags|=128,la(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return dt(Mt,Mt.current&1|2),e.child}t=t.sibling}s.tail!==null&&At()>Xs&&(e.flags|=128,i=!0,la(s,!1),e.lanes=4194304)}else{if(!i)if(t=Fl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),la(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!xt)return $t(e),null}else 2*At()-s.renderingStartTime>Xs&&n!==1073741824&&(e.flags|=128,i=!0,la(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=At(),e.sibling=null,n=Mt.current,dt(Mt,i?n&1|2:n&1),e):($t(e),null);case 22:case 23:return bf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Sn&1073741824&&($t(e),e.subtreeFlags&6&&(e.flags|=8192)):$t(e),null;case 24:return null;case 25:return null}throw Error(ue(156,e.tag))}function Jx(t,e){switch(af(e),e.tag){case 1:return pn(e.type)&&Rl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ws(),gt(hn),gt(en),mf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return pf(e),null;case 13:if(gt(Mt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ue(340));Vs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return gt(Mt),null;case 4:return Ws(),null;case 10:return uf(e.type._context),null;case 22:case 23:return bf(),null;case 24:return null;default:return null}}var bo=!1,Zt=!1,ey=typeof WeakSet=="function"?WeakSet:Set,Te=null;function bs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Tt(t,e,i)}else n.current=null}function _d(t,e,n){try{n()}catch(i){Tt(t,e,i)}}var Xh=!1;function ty(t,e){if(td=Tl,t=Vg(),rf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,f=0,d=t,h=null;t:for(;;){for(var m;d!==n||r!==0&&d.nodeType!==3||(o=a+r),d!==s||i!==0&&d.nodeType!==3||(l=a+i),d.nodeType===3&&(a+=d.nodeValue.length),(m=d.firstChild)!==null;)h=d,d=m;for(;;){if(d===t)break t;if(h===n&&++c===r&&(o=a),h===s&&++f===i&&(l=a),(m=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(nd={focusedElem:t,selectionRange:n},Tl=!1,Te=e;Te!==null;)if(e=Te,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Te=t;else for(;Te!==null;){e=Te;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var x=_.memoizedProps,p=_.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?x:Vn(e.type,x),p);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ue(163))}}catch(M){Tt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,Te=t;break}Te=e.return}return _=Xh,Xh=!1,_}function Ra(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&_d(e,n,s)}r=r.next}while(r!==i)}}function oc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function xd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function k0(t){var e=t.alternate;e!==null&&(t.alternate=null,k0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ri],delete e[Wa],delete e[sd],delete e[Ox],delete e[kx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function z0(t){return t.tag===5||t.tag===3||t.tag===4}function qh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||z0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function yd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Cl));else if(i!==4&&(t=t.child,t!==null))for(yd(t,e,n),t=t.sibling;t!==null;)yd(t,e,n),t=t.sibling}function Sd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Sd(t,e,n),t=t.sibling;t!==null;)Sd(t,e,n),t=t.sibling}var Bt=null,Gn=!1;function Pi(t,e,n){for(n=n.child;n!==null;)B0(t,e,n),n=n.sibling}function B0(t,e,n){if(ai&&typeof ai.onCommitFiberUnmount=="function")try{ai.onCommitFiberUnmount(Jl,n)}catch{}switch(n.tag){case 5:Zt||bs(n,e);case 6:var i=Bt,r=Gn;Bt=null,Pi(t,e,n),Bt=i,Gn=r,Bt!==null&&(Gn?(t=Bt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Bt.removeChild(n.stateNode));break;case 18:Bt!==null&&(Gn?(t=Bt,n=n.stateNode,t.nodeType===8?Bc(t.parentNode,n):t.nodeType===1&&Bc(t,n),za(t)):Bc(Bt,n.stateNode));break;case 4:i=Bt,r=Gn,Bt=n.stateNode.containerInfo,Gn=!0,Pi(t,e,n),Bt=i,Gn=r;break;case 0:case 11:case 14:case 15:if(!Zt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&_d(n,e,a),r=r.next}while(r!==i)}Pi(t,e,n);break;case 1:if(!Zt&&(bs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Tt(n,e,o)}Pi(t,e,n);break;case 21:Pi(t,e,n);break;case 22:n.mode&1?(Zt=(i=Zt)||n.memoizedState!==null,Pi(t,e,n),Zt=i):Pi(t,e,n);break;default:Pi(t,e,n)}}function $h(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new ey),e.forEach(function(i){var r=uy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function kn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Bt=o.stateNode,Gn=!1;break e;case 3:Bt=o.stateNode.containerInfo,Gn=!0;break e;case 4:Bt=o.stateNode.containerInfo,Gn=!0;break e}o=o.return}if(Bt===null)throw Error(ue(160));B0(s,a,r),Bt=null,Gn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Tt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)H0(e,t),e=e.sibling}function H0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(kn(e,t),Jn(t),i&4){try{Ra(3,t,t.return),oc(3,t)}catch(x){Tt(t,t.return,x)}try{Ra(5,t,t.return)}catch(x){Tt(t,t.return,x)}}break;case 1:kn(e,t),Jn(t),i&512&&n!==null&&bs(n,n.return);break;case 5:if(kn(e,t),Jn(t),i&512&&n!==null&&bs(n,n.return),t.flags&32){var r=t.stateNode;try{Ua(r,"")}catch(x){Tt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&cg(r,s),ju(o,a);var c=ju(o,s);for(a=0;a<l.length;a+=2){var f=l[a],d=l[a+1];f==="style"?pg(r,d):f==="dangerouslySetInnerHTML"?fg(r,d):f==="children"?Ua(r,d):Wd(r,f,d,c)}switch(o){case"input":Bu(r,s);break;case"textarea":ug(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Ls(r,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?Ls(r,!!s.multiple,s.defaultValue,!0):Ls(r,!!s.multiple,s.multiple?[]:"",!1))}r[Wa]=s}catch(x){Tt(t,t.return,x)}}break;case 6:if(kn(e,t),Jn(t),i&4){if(t.stateNode===null)throw Error(ue(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){Tt(t,t.return,x)}}break;case 3:if(kn(e,t),Jn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{za(e.containerInfo)}catch(x){Tt(t,t.return,x)}break;case 4:kn(e,t),Jn(t);break;case 13:kn(e,t),Jn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(wf=At())),i&4&&$h(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Zt=(c=Zt)||f,kn(e,t),Zt=c):kn(e,t),Jn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(Te=t,f=t.child;f!==null;){for(d=Te=f;Te!==null;){switch(h=Te,m=h.child,h.tag){case 0:case 11:case 14:case 15:Ra(4,h,h.return);break;case 1:bs(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(x){Tt(i,n,x)}}break;case 5:bs(h,h.return);break;case 22:if(h.memoizedState!==null){Kh(d);continue}}m!==null?(m.return=h,Te=m):Kh(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=d.stateNode,l=d.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=hg("display",a))}catch(x){Tt(t,t.return,x)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(x){Tt(t,t.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:kn(e,t),Jn(t),i&4&&$h(t);break;case 21:break;default:kn(e,t),Jn(t)}}function Jn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(z0(n)){var i=n;break e}n=n.return}throw Error(ue(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ua(r,""),i.flags&=-33);var s=qh(t);Sd(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=qh(t);yd(t,o,a);break;default:throw Error(ue(161))}}catch(l){Tt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ny(t,e,n){Te=t,V0(t)}function V0(t,e,n){for(var i=(t.mode&1)!==0;Te!==null;){var r=Te,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||bo;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Zt;o=bo;var c=Zt;if(bo=a,(Zt=l)&&!c)for(Te=r;Te!==null;)a=Te,l=a.child,a.tag===22&&a.memoizedState!==null?Zh(r):l!==null?(l.return=a,Te=l):Zh(r);for(;s!==null;)Te=s,V0(s),s=s.sibling;Te=r,bo=o,Zt=c}Yh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Te=s):Yh(t)}}function Yh(t){for(;Te!==null;){var e=Te;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Zt||oc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Zt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Vn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Dh(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Dh(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&za(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ue(163))}Zt||e.flags&512&&xd(e)}catch(h){Tt(e,e.return,h)}}if(e===t){Te=null;break}if(n=e.sibling,n!==null){n.return=e.return,Te=n;break}Te=e.return}}function Kh(t){for(;Te!==null;){var e=Te;if(e===t){Te=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Te=n;break}Te=e.return}}function Zh(t){for(;Te!==null;){var e=Te;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{oc(4,e)}catch(l){Tt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Tt(e,r,l)}}var s=e.return;try{xd(e)}catch(l){Tt(e,s,l)}break;case 5:var a=e.return;try{xd(e)}catch(l){Tt(e,a,l)}}}catch(l){Tt(e,e.return,l)}if(e===t){Te=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Te=o;break}Te=e.return}}var iy=Math.ceil,zl=Ri.ReactCurrentDispatcher,Mf=Ri.ReactCurrentOwner,Un=Ri.ReactCurrentBatchConfig,nt=0,kt=null,Pt=null,Gt=0,Sn=0,As=cr(0),Nt=0,Ka=null,kr=0,lc=0,Ef=0,Pa=null,dn=null,wf=0,Xs=1/0,mi=null,Bl=!1,Md=null,Qi=null,Ao=!1,ji=null,Hl=0,La=0,Ed=null,pl=-1,ml=0;function ln(){return nt&6?At():pl!==-1?pl:pl=At()}function Ji(t){return t.mode&1?nt&2&&Gt!==0?Gt&-Gt:Bx.transition!==null?(ml===0&&(ml=bg()),ml):(t=ot,t!==0||(t=window.event,t=t===void 0?16:Dg(t.type)),t):1}function Kn(t,e,n,i){if(50<La)throw La=0,Ed=null,Error(ue(185));io(t,n,i),(!(nt&2)||t!==kt)&&(t===kt&&(!(nt&2)&&(lc|=n),Nt===4&&Vi(t,Gt)),mn(t,i),n===1&&nt===0&&!(e.mode&1)&&(Xs=At()+500,rc&&ur()))}function mn(t,e){var n=t.callbackNode;B_(t,e);var i=wl(t,t===kt?Gt:0);if(i===0)n!==null&&ah(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&ah(n),e===1)t.tag===0?zx(Qh.bind(null,t)):Qg(Qh.bind(null,t)),Ux(function(){!(nt&6)&&ur()}),n=null;else{switch(Ag(i)){case 1:n=Yd;break;case 4:n=wg;break;case 16:n=El;break;case 536870912:n=Tg;break;default:n=El}n=K0(n,G0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function G0(t,e){if(pl=-1,ml=0,nt&6)throw Error(ue(327));var n=t.callbackNode;if(Fs()&&t.callbackNode!==n)return null;var i=wl(t,t===kt?Gt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Vl(t,i);else{e=i;var r=nt;nt|=2;var s=j0();(kt!==t||Gt!==e)&&(mi=null,Xs=At()+500,Pr(t,e));do try{ay();break}catch(o){W0(t,o)}while(!0);cf(),zl.current=s,nt=r,Pt!==null?e=0:(kt=null,Gt=0,e=Nt)}if(e!==0){if(e===2&&(r=Ku(t),r!==0&&(i=r,e=wd(t,r))),e===1)throw n=Ka,Pr(t,0),Vi(t,i),mn(t,At()),n;if(e===6)Vi(t,i);else{if(r=t.current.alternate,!(i&30)&&!ry(r)&&(e=Vl(t,i),e===2&&(s=Ku(t),s!==0&&(i=s,e=wd(t,s))),e===1))throw n=Ka,Pr(t,0),Vi(t,i),mn(t,At()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ue(345));case 2:Sr(t,dn,mi);break;case 3:if(Vi(t,i),(i&130023424)===i&&(e=wf+500-At(),10<e)){if(wl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){ln(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=rd(Sr.bind(null,t,dn,mi),e);break}Sr(t,dn,mi);break;case 4:if(Vi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Yn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=At()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*iy(i/1960))-i,10<i){t.timeoutHandle=rd(Sr.bind(null,t,dn,mi),i);break}Sr(t,dn,mi);break;case 5:Sr(t,dn,mi);break;default:throw Error(ue(329))}}}return mn(t,At()),t.callbackNode===n?G0.bind(null,t):null}function wd(t,e){var n=Pa;return t.current.memoizedState.isDehydrated&&(Pr(t,e).flags|=256),t=Vl(t,e),t!==2&&(e=dn,dn=n,e!==null&&Td(e)),t}function Td(t){dn===null?dn=t:dn.push.apply(dn,t)}function ry(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Zn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Vi(t,e){for(e&=~Ef,e&=~lc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Yn(e),i=1<<n;t[n]=-1,e&=~i}}function Qh(t){if(nt&6)throw Error(ue(327));Fs();var e=wl(t,0);if(!(e&1))return mn(t,At()),null;var n=Vl(t,e);if(t.tag!==0&&n===2){var i=Ku(t);i!==0&&(e=i,n=wd(t,i))}if(n===1)throw n=Ka,Pr(t,0),Vi(t,e),mn(t,At()),n;if(n===6)throw Error(ue(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Sr(t,dn,mi),mn(t,At()),null}function Tf(t,e){var n=nt;nt|=1;try{return t(e)}finally{nt=n,nt===0&&(Xs=At()+500,rc&&ur())}}function zr(t){ji!==null&&ji.tag===0&&!(nt&6)&&Fs();var e=nt;nt|=1;var n=Un.transition,i=ot;try{if(Un.transition=null,ot=1,t)return t()}finally{ot=i,Un.transition=n,nt=e,!(nt&6)&&ur()}}function bf(){Sn=As.current,gt(As)}function Pr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Ix(n)),Pt!==null)for(n=Pt.return;n!==null;){var i=n;switch(af(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Rl();break;case 3:Ws(),gt(hn),gt(en),mf();break;case 5:pf(i);break;case 4:Ws();break;case 13:gt(Mt);break;case 19:gt(Mt);break;case 10:uf(i.type._context);break;case 22:case 23:bf()}n=n.return}if(kt=t,Pt=t=er(t.current,null),Gt=Sn=e,Nt=0,Ka=null,Ef=lc=kr=0,dn=Pa=null,Ar!==null){for(e=0;e<Ar.length;e++)if(n=Ar[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Ar=null}return t}function W0(t,e){do{var n=Pt;try{if(cf(),dl.current=kl,Ol){for(var i=Et.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ol=!1}if(Or=0,Ot=Lt=Et=null,Ca=!1,qa=0,Mf.current=null,n===null||n.return===null){Nt=1,Ka=e,Pt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Gt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=o,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=zh(a);if(m!==null){m.flags&=-257,Bh(m,a,o,s,e),m.mode&1&&kh(s,c,e),e=m,l=c;var _=e.updateQueue;if(_===null){var x=new Set;x.add(l),e.updateQueue=x}else _.add(l);break e}else{if(!(e&1)){kh(s,c,e),Af();break e}l=Error(ue(426))}}else if(xt&&o.mode&1){var p=zh(a);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Bh(p,a,o,s,e),of(js(l,o));break e}}s=l=js(l,o),Nt!==4&&(Nt=2),Pa===null?Pa=[s]:Pa.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=A0(s,l,e);Nh(s,u);break e;case 1:o=l;var v=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Qi===null||!Qi.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=C0(s,o,e);Nh(s,M);break e}}s=s.return}while(s!==null)}q0(n)}catch(P){e=P,Pt===n&&n!==null&&(Pt=n=n.return);continue}break}while(!0)}function j0(){var t=zl.current;return zl.current=kl,t===null?kl:t}function Af(){(Nt===0||Nt===3||Nt===2)&&(Nt=4),kt===null||!(kr&268435455)&&!(lc&268435455)||Vi(kt,Gt)}function Vl(t,e){var n=nt;nt|=2;var i=j0();(kt!==t||Gt!==e)&&(mi=null,Pr(t,e));do try{sy();break}catch(r){W0(t,r)}while(!0);if(cf(),nt=n,zl.current=i,Pt!==null)throw Error(ue(261));return kt=null,Gt=0,Nt}function sy(){for(;Pt!==null;)X0(Pt)}function ay(){for(;Pt!==null&&!L_();)X0(Pt)}function X0(t){var e=Y0(t.alternate,t,Sn);t.memoizedProps=t.pendingProps,e===null?q0(t):Pt=e,Mf.current=null}function q0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Jx(n,e),n!==null){n.flags&=32767,Pt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Nt=6,Pt=null;return}}else if(n=Qx(n,e,Sn),n!==null){Pt=n;return}if(e=e.sibling,e!==null){Pt=e;return}Pt=e=t}while(e!==null);Nt===0&&(Nt=5)}function Sr(t,e,n){var i=ot,r=Un.transition;try{Un.transition=null,ot=1,oy(t,e,n,i)}finally{Un.transition=r,ot=i}return null}function oy(t,e,n,i){do Fs();while(ji!==null);if(nt&6)throw Error(ue(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ue(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(H_(t,s),t===kt&&(Pt=kt=null,Gt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ao||(Ao=!0,K0(El,function(){return Fs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Un.transition,Un.transition=null;var a=ot;ot=1;var o=nt;nt|=4,Mf.current=null,ty(t,n),H0(n,t),Ax(nd),Tl=!!td,nd=td=null,t.current=n,ny(n),N_(),nt=o,ot=a,Un.transition=s}else t.current=n;if(Ao&&(Ao=!1,ji=t,Hl=r),s=t.pendingLanes,s===0&&(Qi=null),U_(n.stateNode),mn(t,At()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Bl)throw Bl=!1,t=Md,Md=null,t;return Hl&1&&t.tag!==0&&Fs(),s=t.pendingLanes,s&1?t===Ed?La++:(La=0,Ed=t):La=0,ur(),null}function Fs(){if(ji!==null){var t=Ag(Hl),e=Un.transition,n=ot;try{if(Un.transition=null,ot=16>t?16:t,ji===null)var i=!1;else{if(t=ji,ji=null,Hl=0,nt&6)throw Error(ue(331));var r=nt;for(nt|=4,Te=t.current;Te!==null;){var s=Te,a=s.child;if(Te.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(Te=c;Te!==null;){var f=Te;switch(f.tag){case 0:case 11:case 15:Ra(8,f,s)}var d=f.child;if(d!==null)d.return=f,Te=d;else for(;Te!==null;){f=Te;var h=f.sibling,m=f.return;if(k0(f),f===c){Te=null;break}if(h!==null){h.return=m,Te=h;break}Te=m}}}var _=s.alternate;if(_!==null){var x=_.child;if(x!==null){_.child=null;do{var p=x.sibling;x.sibling=null,x=p}while(x!==null)}}Te=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Te=a;else e:for(;Te!==null;){if(s=Te,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ra(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Te=u;break e}Te=s.return}}var v=t.current;for(Te=v;Te!==null;){a=Te;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,Te=g;else e:for(a=v;Te!==null;){if(o=Te,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:oc(9,o)}}catch(P){Tt(o,o.return,P)}if(o===a){Te=null;break e}var M=o.sibling;if(M!==null){M.return=o.return,Te=M;break e}Te=o.return}}if(nt=r,ur(),ai&&typeof ai.onPostCommitFiberRoot=="function")try{ai.onPostCommitFiberRoot(Jl,t)}catch{}i=!0}return i}finally{ot=n,Un.transition=e}}return!1}function Jh(t,e,n){e=js(n,e),e=A0(t,e,1),t=Zi(t,e,1),e=ln(),t!==null&&(io(t,1,e),mn(t,e))}function Tt(t,e,n){if(t.tag===3)Jh(t,t,n);else for(;e!==null;){if(e.tag===3){Jh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Qi===null||!Qi.has(i))){t=js(n,t),t=C0(e,t,1),e=Zi(e,t,1),t=ln(),e!==null&&(io(e,1,t),mn(e,t));break}}e=e.return}}function ly(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=ln(),t.pingedLanes|=t.suspendedLanes&n,kt===t&&(Gt&n)===n&&(Nt===4||Nt===3&&(Gt&130023424)===Gt&&500>At()-wf?Pr(t,0):Ef|=n),mn(t,e)}function $0(t,e){e===0&&(t.mode&1?(e=vo,vo<<=1,!(vo&130023424)&&(vo=4194304)):e=1);var n=ln();t=bi(t,e),t!==null&&(io(t,e,n),mn(t,n))}function cy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),$0(t,n)}function uy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ue(314))}i!==null&&i.delete(e),$0(t,n)}var Y0;Y0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||hn.current)fn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return fn=!1,Zx(t,e,n);fn=!!(t.flags&131072)}else fn=!1,xt&&e.flags&1048576&&Jg(e,Nl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;hl(t,e),t=e.pendingProps;var r=Hs(e,en.current);Us(e,n),r=vf(null,e,i,t,r,n);var s=_f();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,pn(i)?(s=!0,Pl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,ff(e),r.updater=ac,e.stateNode=r,r._reactInternals=e,dd(e,i,t,n),e=pd(null,e,i,!0,s,n)):(e.tag=0,xt&&s&&sf(e),sn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(hl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=fy(i),t=Vn(i,t),r){case 0:e=hd(null,e,i,t,n);break e;case 1:e=Gh(null,e,i,t,n);break e;case 11:e=Hh(null,e,i,t,n);break e;case 14:e=Vh(null,e,i,Vn(i.type,t),n);break e}throw Error(ue(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),hd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),Gh(t,e,i,r,n);case 3:e:{if(N0(e),t===null)throw Error(ue(387));i=e.pendingProps,s=e.memoizedState,r=s.element,s0(t,e),Ul(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=js(Error(ue(423)),e),e=Wh(t,e,i,n,r);break e}else if(i!==r){r=js(Error(ue(424)),e),e=Wh(t,e,i,n,r);break e}else for(En=Ki(e.stateNode.containerInfo.firstChild),wn=e,xt=!0,Wn=null,n=i0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vs(),i===r){e=Ai(t,e,n);break e}sn(t,e,i,n)}e=e.child}return e;case 5:return a0(e),t===null&&ld(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,id(i,r)?a=null:s!==null&&id(i,s)&&(e.flags|=32),L0(t,e),sn(t,e,a,n),e.child;case 6:return t===null&&ld(e),null;case 13:return D0(t,e,n);case 4:return hf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Gs(e,null,i,n):sn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),Hh(t,e,i,r,n);case 7:return sn(t,e,e.pendingProps,n),e.child;case 8:return sn(t,e,e.pendingProps.children,n),e.child;case 12:return sn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,dt(Dl,i._currentValue),i._currentValue=a,s!==null)if(Zn(s.value,a)){if(s.children===r.children&&!hn.current){e=Ai(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Si(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),cd(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ue(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),cd(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}sn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Us(e,n),r=Fn(r),i=i(r),e.flags|=1,sn(t,e,i,n),e.child;case 14:return i=e.type,r=Vn(i,e.pendingProps),r=Vn(i.type,r),Vh(t,e,i,r,n);case 15:return R0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),hl(t,e),e.tag=1,pn(i)?(t=!0,Pl(e)):t=!1,Us(e,n),b0(e,i,r),dd(e,i,r,n),pd(null,e,i,!0,t,n);case 19:return I0(t,e,n);case 22:return P0(t,e,n)}throw Error(ue(156,e.tag))};function K0(t,e){return Eg(t,e)}function dy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(t,e,n,i){return new dy(t,e,n,i)}function Cf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function fy(t){if(typeof t=="function")return Cf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Xd)return 11;if(t===qd)return 14}return 2}function er(t,e){var n=t.alternate;return n===null?(n=In(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function gl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Cf(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case vs:return Lr(n.children,r,s,e);case jd:a=8,r|=8;break;case Uu:return t=In(12,n,e,r|2),t.elementType=Uu,t.lanes=s,t;case Fu:return t=In(13,n,e,r),t.elementType=Fu,t.lanes=s,t;case Ou:return t=In(19,n,e,r),t.elementType=Ou,t.lanes=s,t;case ag:return cc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case rg:a=10;break e;case sg:a=9;break e;case Xd:a=11;break e;case qd:a=14;break e;case ki:a=16,i=null;break e}throw Error(ue(130,t==null?t:typeof t,""))}return e=In(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Lr(t,e,n,i){return t=In(7,t,i,e),t.lanes=n,t}function cc(t,e,n,i){return t=In(22,t,i,e),t.elementType=ag,t.lanes=n,t.stateNode={isHidden:!1},t}function $c(t,e,n){return t=In(6,t,null,e),t.lanes=n,t}function Yc(t,e,n){return e=In(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function hy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Rc(0),this.expirationTimes=Rc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Rf(t,e,n,i,r,s,a,o,l){return t=new hy(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=In(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ff(s),t}function py(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Z0(t){if(!t)return sr;t=t._reactInternals;e:{if(Gr(t)!==t||t.tag!==1)throw Error(ue(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(pn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ue(171))}if(t.tag===1){var n=t.type;if(pn(n))return Zg(t,n,e)}return e}function Q0(t,e,n,i,r,s,a,o,l){return t=Rf(n,i,!0,t,r,s,a,o,l),t.context=Z0(null),n=t.current,i=ln(),r=Ji(n),s=Si(i,r),s.callback=e??null,Zi(n,s,r),t.current.lanes=r,io(t,r,i),mn(t,i),t}function uc(t,e,n,i){var r=e.current,s=ln(),a=Ji(r);return n=Z0(n),e.context===null?e.context=n:e.pendingContext=n,e=Si(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Zi(r,e,a),t!==null&&(Kn(t,r,a,s),ul(t,r,a)),a}function Gl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ep(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Pf(t,e){ep(t,e),(t=t.alternate)&&ep(t,e)}function my(){return null}var J0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Lf(t){this._internalRoot=t}dc.prototype.render=Lf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ue(409));uc(t,e,null,null)};dc.prototype.unmount=Lf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;zr(function(){uc(null,t,null,null)}),e[Ti]=null}};function dc(t){this._internalRoot=t}dc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Pg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Hi.length&&e!==0&&e<Hi[n].priority;n++);Hi.splice(n,0,t),n===0&&Ng(t)}};function Nf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function fc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function tp(){}function gy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Gl(a);s.call(c)}}var a=Q0(e,i,t,0,null,!1,!1,"",tp);return t._reactRootContainer=a,t[Ti]=a.current,Va(t.nodeType===8?t.parentNode:t),zr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Gl(l);o.call(c)}}var l=Rf(t,0,!1,null,null,!1,!1,"",tp);return t._reactRootContainer=l,t[Ti]=l.current,Va(t.nodeType===8?t.parentNode:t),zr(function(){uc(e,l,n,i)}),l}function hc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Gl(a);o.call(l)}}uc(e,a,t,r)}else a=gy(n,e,t,r,i);return Gl(a)}Cg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Sa(e.pendingLanes);n!==0&&(Kd(e,n|1),mn(e,At()),!(nt&6)&&(Xs=At()+500,ur()))}break;case 13:zr(function(){var i=bi(t,1);if(i!==null){var r=ln();Kn(i,t,1,r)}}),Pf(t,1)}};Zd=function(t){if(t.tag===13){var e=bi(t,134217728);if(e!==null){var n=ln();Kn(e,t,134217728,n)}Pf(t,134217728)}};Rg=function(t){if(t.tag===13){var e=Ji(t),n=bi(t,e);if(n!==null){var i=ln();Kn(n,t,e,i)}Pf(t,e)}};Pg=function(){return ot};Lg=function(t,e){var n=ot;try{return ot=t,e()}finally{ot=n}};qu=function(t,e,n){switch(e){case"input":if(Bu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=ic(i);if(!r)throw Error(ue(90));lg(i),Bu(i,r)}}}break;case"textarea":ug(t,n);break;case"select":e=n.value,e!=null&&Ls(t,!!n.multiple,e,!1)}};vg=Tf;_g=zr;var vy={usingClientEntryPoint:!1,Events:[so,Ss,ic,mg,gg,Tf]},ca={findFiberByHostInstance:br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_y={bundleType:ca.bundleType,version:ca.version,rendererPackageName:ca.rendererPackageName,rendererConfig:ca.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ri.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Sg(t),t===null?null:t.stateNode},findFiberByHostInstance:ca.findFiberByHostInstance||my,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Co=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Co.isDisabled&&Co.supportsFiber)try{Jl=Co.inject(_y),ai=Co}catch{}}An.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vy;An.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nf(e))throw Error(ue(200));return py(t,e,null,n)};An.createRoot=function(t,e){if(!Nf(t))throw Error(ue(299));var n=!1,i="",r=J0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Rf(t,1,!1,null,null,n,!1,i,r),t[Ti]=e.current,Va(t.nodeType===8?t.parentNode:t),new Lf(e)};An.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ue(188)):(t=Object.keys(t).join(","),Error(ue(268,t)));return t=Sg(e),t=t===null?null:t.stateNode,t};An.flushSync=function(t){return zr(t)};An.hydrate=function(t,e,n){if(!fc(e))throw Error(ue(200));return hc(null,t,e,!0,n)};An.hydrateRoot=function(t,e,n){if(!Nf(t))throw Error(ue(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=J0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Q0(e,null,t,1,n??null,r,!1,s,a),t[Ti]=e.current,Va(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new dc(e)};An.render=function(t,e,n){if(!fc(e))throw Error(ue(200));return hc(null,t,e,!1,n)};An.unmountComponentAtNode=function(t){if(!fc(t))throw Error(ue(40));return t._reactRootContainer?(zr(function(){hc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ti]=null})}),!0):!1};An.unstable_batchedUpdates=Tf;An.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!fc(n))throw Error(ue(200));if(t==null||t._reactInternals===void 0)throw Error(ue(38));return hc(t,e,n,!1,i)};An.version="18.3.1-next-f1338f8080-20240426";function ev(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ev)}catch(t){console.error(t)}}ev(),eg.exports=An;var xy=eg.exports,tv,np=xy;tv=np.createRoot,np.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Df="162",$r={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Yr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},yy=0,ip=1,Sy=2,If=1,My=2,pi=3,ar=0,Qt=1,si=2,tr=0,Os=1,bd=2,rp=3,sp=4,Ey=5,Er=100,wy=101,Ty=102,ap=103,op=104,by=200,Ay=201,Cy=202,Ry=203,Ad=204,Cd=205,Py=206,Ly=207,Ny=208,Dy=209,Iy=210,Uy=211,Fy=212,Oy=213,ky=214,zy=0,By=1,Hy=2,Wl=3,Vy=4,Gy=5,Wy=6,jy=7,nv=0,Xy=1,qy=2,nr=0,$y=1,Yy=2,Ky=3,Zy=4,Qy=5,Jy=6,eS=7,iv=300,qs=301,$s=302,Rd=303,Pd=304,pc=306,Za=1e3,jn=1001,Ld=1002,an=1003,lp=1004,ua=1005,Ht=1006,Kc=1007,Rr=1008,tS=1008,ir=1009,nS=1010,iS=1011,Uf=1012,rv=1013,Xi=1014,vi=1015,Qa=1016,sv=1017,av=1018,Nr=1020,rS=1021,Xn=1023,sS=1024,aS=1025,Dr=1026,Ys=1027,oS=1028,ov=1029,lS=1030,lv=1031,cv=1033,Zc=33776,Qc=33777,Jc=33778,eu=33779,cp=35840,up=35841,dp=35842,fp=35843,uv=36196,hp=37492,pp=37496,mp=37808,gp=37809,vp=37810,_p=37811,xp=37812,yp=37813,Sp=37814,Mp=37815,Ep=37816,wp=37817,Tp=37818,bp=37819,Ap=37820,Cp=37821,tu=36492,Rp=36494,Pp=36495,cS=36283,Lp=36284,Np=36285,Dp=36286,uS=3200,dS=3201,fS=0,hS=1,Gi="",ti="srgb",dr="srgb-linear",Ff="display-p3",mc="display-p3-linear",jl="linear",mt="srgb",Xl="rec709",ql="p3",Kr=7680,Ip=519,pS=512,mS=513,gS=514,dv=515,vS=516,_S=517,xS=518,yS=519,Nd=35044,Up="300 es",Dd=1035,yi=2e3,$l=2001;class Wr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fp=1234567;const Na=Math.PI/180,Ja=180/Math.PI;function Mi(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[t&255]+Yt[t>>8&255]+Yt[t>>16&255]+Yt[t>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[n&63|128]+Yt[n>>8&255]+"-"+Yt[n>>16&255]+Yt[n>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function Vt(t,e,n){return Math.max(e,Math.min(n,t))}function Of(t,e){return(t%e+e)%e}function SS(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function MS(t,e,n){return t!==e?(n-t)/(e-t):0}function Da(t,e,n){return(1-n)*t+n*e}function ES(t,e,n,i){return Da(t,e,1-Math.exp(-n*i))}function wS(t,e=1){return e-Math.abs(Of(t,e*2)-e)}function TS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function bS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function AS(t,e){return t+Math.floor(Math.random()*(e-t+1))}function CS(t,e){return t+Math.random()*(e-t)}function RS(t){return t*(.5-Math.random())}function PS(t){t!==void 0&&(Fp=t);let e=Fp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function LS(t){return t*Na}function NS(t){return t*Ja}function Id(t){return(t&t-1)===0&&t!==0}function DS(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Yl(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function IS(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),c=s((e+i)/2),f=a((e+i)/2),d=s((e-i)/2),h=a((e-i)/2),m=s((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":t.set(o*f,l*d,l*h,o*c);break;case"YZY":t.set(l*h,o*f,l*d,o*c);break;case"ZXZ":t.set(l*d,l*h,o*f,o*c);break;case"XZX":t.set(o*f,l*_,l*m,o*c);break;case"YXY":t.set(l*m,o*f,l*_,o*c);break;case"ZYZ":t.set(l*_,l*m,o*f,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function qn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function at(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const fv={DEG2RAD:Na,RAD2DEG:Ja,generateUUID:Mi,clamp:Vt,euclideanModulo:Of,mapLinear:SS,inverseLerp:MS,lerp:Da,damp:ES,pingpong:wS,smoothstep:TS,smootherstep:bS,randInt:AS,randFloat:CS,randFloatSpread:RS,seededRandom:PS,degToRad:LS,radToDeg:NS,isPowerOfTwo:Id,ceilPowerOfTwo:DS,floorPowerOfTwo:Yl,setQuaternionFromProperEuler:IS,normalize:at,denormalize:qn};class Ce{constructor(e=0,n=0){Ce.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Je{constructor(e,n,i,r,s,a,o,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],f=i[4],d=i[7],h=i[2],m=i[5],_=i[8],x=r[0],p=r[3],u=r[6],v=r[1],g=r[4],M=r[7],P=r[2],A=r[5],T=r[8];return s[0]=a*x+o*v+l*P,s[3]=a*p+o*g+l*A,s[6]=a*u+o*M+l*T,s[1]=c*x+f*v+d*P,s[4]=c*p+f*g+d*A,s[7]=c*u+f*M+d*T,s[2]=h*x+m*v+_*P,s[5]=h*p+m*g+_*A,s[8]=h*u+m*M+_*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return n*a*f-n*o*c-i*s*f+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],d=f*a-o*c,h=o*l-f*s,m=c*s-a*l,_=n*d+i*h+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=d*x,e[1]=(r*c-f*i)*x,e[2]=(o*i-r*a)*x,e[3]=h*x,e[4]=(f*n-r*l)*x,e[5]=(r*s-o*n)*x,e[6]=m*x,e[7]=(i*l-c*n)*x,e[8]=(a*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(nu.makeScale(e,n)),this}rotate(e){return this.premultiply(nu.makeRotation(-e)),this}translate(e,n){return this.premultiply(nu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const nu=new Je;function hv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function eo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function US(){const t=eo("canvas");return t.style.display="block",t}const Op={};function pv(t){t in Op||(Op[t]=!0,console.warn(t))}const kp=new Je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),zp=new Je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ro={[dr]:{transfer:jl,primaries:Xl,toReference:t=>t,fromReference:t=>t},[ti]:{transfer:mt,primaries:Xl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[mc]:{transfer:jl,primaries:ql,toReference:t=>t.applyMatrix3(zp),fromReference:t=>t.applyMatrix3(kp)},[Ff]:{transfer:mt,primaries:ql,toReference:t=>t.convertSRGBToLinear().applyMatrix3(zp),fromReference:t=>t.applyMatrix3(kp).convertLinearToSRGB()}},FS=new Set([dr,mc]),ct={enabled:!0,_workingColorSpace:dr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!FS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Ro[e].toReference,r=Ro[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ro[t].primaries},getTransfer:function(t){return t===Gi?jl:Ro[t].transfer}};function ks(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function iu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Zr;class mv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Zr===void 0&&(Zr=eo("canvas")),Zr.width=e.width,Zr.height=e.height;const i=Zr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Zr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=eo("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ks(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ks(n[i]/255)*255):n[i]=ks(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let OS=0;class gv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:OS++}),this.uuid=Mi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ru(r[a].image)):s.push(ru(r[a]))}else s=ru(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function ru(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?mv.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kS=0;class Jt extends Wr{constructor(e=Jt.DEFAULT_IMAGE,n=Jt.DEFAULT_MAPPING,i=jn,r=jn,s=Ht,a=Rr,o=Xn,l=ir,c=Jt.DEFAULT_ANISOTROPY,f=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kS++}),this.uuid=Mi(),this.name="",this.source=new gv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==iv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Za:e.x=e.x-Math.floor(e.x);break;case jn:e.x=e.x<0?0:1;break;case Ld:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Za:e.y=e.y-Math.floor(e.y);break;case jn:e.y=e.y<0?0:1;break;case Ld:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=iv;Jt.DEFAULT_ANISOTROPY=1;class yt{constructor(e=0,n=0,i=0,r=1){yt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],d=l[8],h=l[1],m=l[5],_=l[9],x=l[2],p=l[6],u=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-x)<.01&&Math.abs(_-p)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+x)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,M=(m+1)/2,P=(u+1)/2,A=(f+h)/4,T=(d+x)/4,N=(_+p)/4;return g>M&&g>P?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=A/i,s=T/i):M>P?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=A/r,s=N/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=T/s,r=N/s),this.set(i,r,s,n),this}let v=Math.sqrt((p-_)*(p-_)+(d-x)*(d-x)+(h-f)*(h-f));return Math.abs(v)<.001&&(v=1),this.x=(p-_)/v,this.y=(d-x)/v,this.z=(h-f)/v,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zS extends Wr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new yt(0,0,e,n),this.scissorTest=!1,this.viewport=new yt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const s=new Jt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new gv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Br extends zS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class vv extends Jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class BS extends Jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],f=i[r+2],d=i[r+3];const h=s[a+0],m=s[a+1],_=s[a+2],x=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d;return}if(o===1){e[n+0]=h,e[n+1]=m,e[n+2]=_,e[n+3]=x;return}if(d!==x||l!==h||c!==m||f!==_){let p=1-o;const u=l*h+c*m+f*_+d*x,v=u>=0?1:-1,g=1-u*u;if(g>Number.EPSILON){const P=Math.sqrt(g),A=Math.atan2(P,u*v);p=Math.sin(p*A)/P,o=Math.sin(o*A)/P}const M=o*v;if(l=l*p+h*M,c=c*p+m*M,f=f*p+_*M,d=d*p+x*M,p===1-o){const P=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=P,c*=P,f*=P,d*=P}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],f=i[r+3],d=s[a],h=s[a+1],m=s[a+2],_=s[a+3];return e[n]=o*_+f*d+l*m-c*h,e[n+1]=l*_+f*h+c*d-o*m,e[n+2]=c*_+f*m+o*h-l*d,e[n+3]=f*_-o*d-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(r/2),d=o(s/2),h=l(i/2),m=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=h*f*d+c*m*_,this._y=c*m*d-h*f*_,this._z=c*f*_+h*m*d,this._w=c*f*d-h*m*_;break;case"YXZ":this._x=h*f*d+c*m*_,this._y=c*m*d-h*f*_,this._z=c*f*_-h*m*d,this._w=c*f*d+h*m*_;break;case"ZXY":this._x=h*f*d-c*m*_,this._y=c*m*d+h*f*_,this._z=c*f*_+h*m*d,this._w=c*f*d-h*m*_;break;case"ZYX":this._x=h*f*d-c*m*_,this._y=c*m*d+h*f*_,this._z=c*f*_-h*m*d,this._w=c*f*d+h*m*_;break;case"YZX":this._x=h*f*d+c*m*_,this._y=c*m*d+h*f*_,this._z=c*f*_-h*m*d,this._w=c*f*d-h*m*_;break;case"XZY":this._x=h*f*d-c*m*_,this._y=c*m*d-h*f*_,this._z=c*f*_+h*m*d,this._w=c*f*d+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],f=n[6],d=n[10],h=i+o+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>d){const m=2*Math.sqrt(1+i-o-d);this._w=(f-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-i-d);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+d-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+a*o+r*c-s*l,this._y=r*f+a*l+s*o-i*c,this._z=s*f+a*c+i*l-r*o,this._w=a*f-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,o),d=Math.sin((1-n)*f)/c,h=Math.sin(n*f)/c;return this._w=a*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,n=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Bp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Bp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),f=2*(o*n-s*r),d=2*(s*i-a*n);return this.x=n+l*c+a*d-o*f,this.y=i+l*f+o*c-s*d,this.z=r+l*d+s*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return su.copy(this).projectOnVector(e),this.sub(su)}reflect(e){return this.sub(su.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const su=new O,Bp=new Hr;class oo{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(zn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(zn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=zn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,zn):zn.fromBufferAttribute(s,a),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Po.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Po.copy(i.boundingBox)),Po.applyMatrix4(e.matrixWorld),this.union(Po)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(da),Lo.subVectors(this.max,da),Qr.subVectors(e.a,da),Jr.subVectors(e.b,da),es.subVectors(e.c,da),Li.subVectors(Jr,Qr),Ni.subVectors(es,Jr),pr.subVectors(Qr,es);let n=[0,-Li.z,Li.y,0,-Ni.z,Ni.y,0,-pr.z,pr.y,Li.z,0,-Li.x,Ni.z,0,-Ni.x,pr.z,0,-pr.x,-Li.y,Li.x,0,-Ni.y,Ni.x,0,-pr.y,pr.x,0];return!au(n,Qr,Jr,es,Lo)||(n=[1,0,0,0,1,0,0,0,1],!au(n,Qr,Jr,es,Lo))?!1:(No.crossVectors(Li,Ni),n=[No.x,No.y,No.z],au(n,Qr,Jr,es,Lo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ci=[new O,new O,new O,new O,new O,new O,new O,new O],zn=new O,Po=new oo,Qr=new O,Jr=new O,es=new O,Li=new O,Ni=new O,pr=new O,da=new O,Lo=new O,No=new O,mr=new O;function au(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){mr.fromArray(t,s);const o=r.x*Math.abs(mr.x)+r.y*Math.abs(mr.y)+r.z*Math.abs(mr.z),l=e.dot(mr),c=n.dot(mr),f=i.dot(mr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const HS=new oo,fa=new O,ou=new O;class lo{constructor(e=new O,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):HS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fa.subVectors(e,this.center);const n=fa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(fa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ou.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fa.copy(e.center).add(ou)),this.expandByPoint(fa.copy(e.center).sub(ou))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ui=new O,lu=new O,Do=new O,Di=new O,cu=new O,Io=new O,uu=new O;class co{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ui.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ui.copy(this.origin).addScaledVector(this.direction,n),ui.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){lu.copy(e).add(n).multiplyScalar(.5),Do.copy(n).sub(e).normalize(),Di.copy(this.origin).sub(lu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Do),o=Di.dot(this.direction),l=-Di.dot(Do),c=Di.lengthSq(),f=Math.abs(1-a*a);let d,h,m,_;if(f>0)if(d=a*l-o,h=a*o-l,_=s*f,d>=0)if(h>=-_)if(h<=_){const x=1/f;d*=x,h*=x,m=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=s,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+c);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(lu).addScaledVector(Do,h),m}intersectSphere(e,n){ui.subVectors(e.center,this.origin);const i=ui.dot(this.direction),r=ui.dot(ui)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),f>=0?(s=(e.min.y-h.y)*f,a=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,a=(e.min.y-h.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,n,i,r,s){cu.subVectors(n,e),Io.subVectors(i,e),uu.crossVectors(cu,Io);let a=this.direction.dot(uu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Di.subVectors(this.origin,e);const l=o*this.direction.dot(Io.crossVectors(Di,Io));if(l<0)return null;const c=o*this.direction.dot(cu.cross(Di));if(c<0||l+c>a)return null;const f=-o*Di.dot(uu);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(e,n,i,r,s,a,o,l,c,f,d,h,m,_,x,p){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,f,d,h,m,_,x,p)}set(e,n,i,r,s,a,o,l,c,f,d,h,m,_,x,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=f,u[10]=d,u[14]=h,u[3]=m,u[7]=_,u[11]=x,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/ts.setFromMatrixColumn(e,0).length(),s=1/ts.setFromMatrixColumn(e,1).length(),a=1/ts.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*f,m=a*d,_=o*f,x=o*d;n[0]=l*f,n[4]=-l*d,n[8]=c,n[1]=m+_*c,n[5]=h-x*c,n[9]=-o*l,n[2]=x-h*c,n[6]=_+m*c,n[10]=a*l}else if(e.order==="YXZ"){const h=l*f,m=l*d,_=c*f,x=c*d;n[0]=h+x*o,n[4]=_*o-m,n[8]=a*c,n[1]=a*d,n[5]=a*f,n[9]=-o,n[2]=m*o-_,n[6]=x+h*o,n[10]=a*l}else if(e.order==="ZXY"){const h=l*f,m=l*d,_=c*f,x=c*d;n[0]=h-x*o,n[4]=-a*d,n[8]=_+m*o,n[1]=m+_*o,n[5]=a*f,n[9]=x-h*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const h=a*f,m=a*d,_=o*f,x=o*d;n[0]=l*f,n[4]=_*c-m,n[8]=h*c+x,n[1]=l*d,n[5]=x*c+h,n[9]=m*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,_=o*l,x=o*c;n[0]=l*f,n[4]=x-h*d,n[8]=_*d+m,n[1]=d,n[5]=a*f,n[9]=-o*f,n[2]=-c*f,n[6]=m*d+_,n[10]=h-x*d}else if(e.order==="XZY"){const h=a*l,m=a*c,_=o*l,x=o*c;n[0]=l*f,n[4]=-d,n[8]=c*f,n[1]=h*d+x,n[5]=a*f,n[9]=m*d-_,n[2]=_*d-m,n[6]=o*f,n[10]=x*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(VS,e,GS)}lookAt(e,n,i){const r=this.elements;return xn.subVectors(e,n),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Ii.crossVectors(i,xn),Ii.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Ii.crossVectors(i,xn)),Ii.normalize(),Uo.crossVectors(xn,Ii),r[0]=Ii.x,r[4]=Uo.x,r[8]=xn.x,r[1]=Ii.y,r[5]=Uo.y,r[9]=xn.y,r[2]=Ii.z,r[6]=Uo.z,r[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],f=i[1],d=i[5],h=i[9],m=i[13],_=i[2],x=i[6],p=i[10],u=i[14],v=i[3],g=i[7],M=i[11],P=i[15],A=r[0],T=r[4],N=r[8],re=r[12],y=r[1],C=r[5],Q=r[9],ee=r[13],I=r[2],J=r[6],B=r[10],H=r[14],D=r[3],F=r[7],z=r[11],K=r[15];return s[0]=a*A+o*y+l*I+c*D,s[4]=a*T+o*C+l*J+c*F,s[8]=a*N+o*Q+l*B+c*z,s[12]=a*re+o*ee+l*H+c*K,s[1]=f*A+d*y+h*I+m*D,s[5]=f*T+d*C+h*J+m*F,s[9]=f*N+d*Q+h*B+m*z,s[13]=f*re+d*ee+h*H+m*K,s[2]=_*A+x*y+p*I+u*D,s[6]=_*T+x*C+p*J+u*F,s[10]=_*N+x*Q+p*B+u*z,s[14]=_*re+x*ee+p*H+u*K,s[3]=v*A+g*y+M*I+P*D,s[7]=v*T+g*C+M*J+P*F,s[11]=v*N+g*Q+M*B+P*z,s[15]=v*re+g*ee+M*H+P*K,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],d=e[6],h=e[10],m=e[14],_=e[3],x=e[7],p=e[11],u=e[15];return _*(+s*l*d-r*c*d-s*o*h+i*c*h+r*o*m-i*l*m)+x*(+n*l*m-n*c*h+s*a*h-r*a*m+r*c*f-s*l*f)+p*(+n*c*d-n*o*m-s*a*d+i*a*m+s*o*f-i*c*f)+u*(-r*o*f-n*l*d+n*o*h+r*a*d-i*a*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],d=e[9],h=e[10],m=e[11],_=e[12],x=e[13],p=e[14],u=e[15],v=d*p*c-x*h*c+x*l*m-o*p*m-d*l*u+o*h*u,g=_*h*c-f*p*c-_*l*m+a*p*m+f*l*u-a*h*u,M=f*x*c-_*d*c+_*o*m-a*x*m-f*o*u+a*d*u,P=_*d*l-f*x*l-_*o*h+a*x*h+f*o*p-a*d*p,A=n*v+i*g+r*M+s*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=v*T,e[1]=(x*h*s-d*p*s-x*r*m+i*p*m+d*r*u-i*h*u)*T,e[2]=(o*p*s-x*l*s+x*r*c-i*p*c-o*r*u+i*l*u)*T,e[3]=(d*l*s-o*h*s-d*r*c+i*h*c+o*r*m-i*l*m)*T,e[4]=g*T,e[5]=(f*p*s-_*h*s+_*r*m-n*p*m-f*r*u+n*h*u)*T,e[6]=(_*l*s-a*p*s-_*r*c+n*p*c+a*r*u-n*l*u)*T,e[7]=(a*h*s-f*l*s+f*r*c-n*h*c-a*r*m+n*l*m)*T,e[8]=M*T,e[9]=(_*d*s-f*x*s-_*i*m+n*x*m+f*i*u-n*d*u)*T,e[10]=(a*x*s-_*o*s+_*i*c-n*x*c-a*i*u+n*o*u)*T,e[11]=(f*o*s-a*d*s-f*i*c+n*d*c+a*i*m-n*o*m)*T,e[12]=P*T,e[13]=(f*x*r-_*d*r+_*i*h-n*x*h-f*i*p+n*d*p)*T,e[14]=(_*o*r-a*x*r-_*i*l+n*x*l+a*i*p-n*o*p)*T,e[15]=(a*d*r-f*o*r+f*i*l-n*d*l-a*i*h+n*o*h)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,f=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,f*o+i,f*l-r*a,0,c*l-r*o,f*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,f=a+a,d=o+o,h=s*c,m=s*f,_=s*d,x=a*f,p=a*d,u=o*d,v=l*c,g=l*f,M=l*d,P=i.x,A=i.y,T=i.z;return r[0]=(1-(x+u))*P,r[1]=(m+M)*P,r[2]=(_-g)*P,r[3]=0,r[4]=(m-M)*A,r[5]=(1-(h+u))*A,r[6]=(p+v)*A,r[7]=0,r[8]=(_+g)*T,r[9]=(p-v)*T,r[10]=(1-(h+x))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=ts.set(r[0],r[1],r[2]).length();const a=ts.set(r[4],r[5],r[6]).length(),o=ts.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Bn.copy(this);const c=1/s,f=1/a,d=1/o;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=f,Bn.elements[5]*=f,Bn.elements[6]*=f,Bn.elements[8]*=d,Bn.elements[9]*=d,Bn.elements[10]*=d,n.setFromRotationMatrix(Bn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=yi){const l=this.elements,c=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let m,_;if(o===yi)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===$l)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=yi){const l=this.elements,c=1/(n-e),f=1/(i-r),d=1/(a-s),h=(n+e)*c,m=(i+r)*f;let _,x;if(o===yi)_=(a+s)*d,x=-2*d;else if(o===$l)_=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ts=new O,Bn=new ft,VS=new O(0,0,0),GS=new O(1,1,1),Ii=new O,Uo=new O,xn=new O,Hp=new ft,Vp=new Hr;class Ci{constructor(e=0,n=0,i=0,r=Ci.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],f=r[9],d=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Vt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Hp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Vp.setFromEuler(this),this.setFromQuaternion(Vp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ci.DEFAULT_ORDER="XYZ";class kf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let WS=0;const Gp=new O,ns=new Hr,di=new ft,Fo=new O,ha=new O,jS=new O,XS=new Hr,Wp=new O(1,0,0),jp=new O(0,1,0),Xp=new O(0,0,1),qS={type:"added"},$S={type:"removed"},du={type:"childadded",child:null},fu={type:"childremoved",child:null};class Wt extends Wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:WS++}),this.uuid=Mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wt.DEFAULT_UP.clone();const e=new O,n=new Ci,i=new Hr,r=new O(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ft},normalMatrix:{value:new Je}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=Wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ns.setFromAxisAngle(e,n),this.quaternion.multiply(ns),this}rotateOnWorldAxis(e,n){return ns.setFromAxisAngle(e,n),this.quaternion.premultiply(ns),this}rotateX(e){return this.rotateOnAxis(Wp,e)}rotateY(e){return this.rotateOnAxis(jp,e)}rotateZ(e){return this.rotateOnAxis(Xp,e)}translateOnAxis(e,n){return Gp.copy(e).applyQuaternion(this.quaternion),this.position.add(Gp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Wp,e)}translateY(e){return this.translateOnAxis(jp,e)}translateZ(e){return this.translateOnAxis(Xp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Fo.copy(e):Fo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ha.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(ha,Fo,this.up):di.lookAt(Fo,ha,this.up),this.quaternion.setFromRotationMatrix(di),r&&(di.extractRotation(r.matrixWorld),ns.setFromRotationMatrix(di),this.quaternion.premultiply(ns.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(qS),du.child=e,this.dispatchEvent(du),du.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent($S),fu.child=e,this.dispatchEvent(fu),fu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,e,jS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,XS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),d=a(e.shapes),h=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Wt.DEFAULT_UP=new O(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Hn=new O,fi=new O,hu=new O,hi=new O,is=new O,rs=new O,qp=new O,pu=new O,mu=new O,gu=new O;class $n{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Hn.subVectors(e,n),r.cross(Hn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Hn.subVectors(r,n),fi.subVectors(i,n),hu.subVectors(e,n);const a=Hn.dot(Hn),o=Hn.dot(fi),l=Hn.dot(hu),c=fi.dot(fi),f=fi.dot(hu),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,m=(c*l-o*f)*h,_=(a*f-o*l)*h;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,hi.x),l.addScaledVector(a,hi.y),l.addScaledVector(o,hi.z),l)}static isFrontFacing(e,n,i,r){return Hn.subVectors(i,n),fi.subVectors(e,n),Hn.cross(fi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),Hn.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return $n.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return $n.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return $n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;is.subVectors(r,i),rs.subVectors(s,i),pu.subVectors(e,i);const l=is.dot(pu),c=rs.dot(pu);if(l<=0&&c<=0)return n.copy(i);mu.subVectors(e,r);const f=is.dot(mu),d=rs.dot(mu);if(f>=0&&d<=f)return n.copy(r);const h=l*d-f*c;if(h<=0&&l>=0&&f<=0)return a=l/(l-f),n.copy(i).addScaledVector(is,a);gu.subVectors(e,s);const m=is.dot(gu),_=rs.dot(gu);if(_>=0&&m<=_)return n.copy(s);const x=m*c-l*_;if(x<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(rs,o);const p=f*_-m*d;if(p<=0&&d-f>=0&&m-_>=0)return qp.subVectors(s,r),o=(d-f)/(d-f+(m-_)),n.copy(r).addScaledVector(qp,o);const u=1/(p+x+h);return a=x*u,o=h*u,n.copy(i).addScaledVector(is,a).addScaledVector(rs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _v={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},Oo={h:0,s:0,l:0};function vu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class rt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=ct.workingColorSpace){return this.r=e,this.g=n,this.b=i,ct.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=ct.workingColorSpace){if(e=Of(e,1),n=Vt(n,0,1),i=Vt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=vu(a,s,e+1/3),this.g=vu(a,s,e),this.b=vu(a,s,e-1/3)}return ct.toWorkingColorSpace(this,r),this}setStyle(e,n=ti){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ti){const i=_v[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ks(e.r),this.g=ks(e.g),this.b=ks(e.b),this}copyLinearToSRGB(e){return this.r=iu(e.r),this.g=iu(e.g),this.b=iu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ti){return ct.fromWorkingColorSpace(Kt.copy(this),e),Math.round(Vt(Kt.r*255,0,255))*65536+Math.round(Vt(Kt.g*255,0,255))*256+Math.round(Vt(Kt.b*255,0,255))}getHexString(e=ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ct.workingColorSpace){ct.fromWorkingColorSpace(Kt.copy(this),n);const i=Kt.r,r=Kt.g,s=Kt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=f<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=ct.workingColorSpace){return ct.fromWorkingColorSpace(Kt.copy(this),n),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=ti){ct.fromWorkingColorSpace(Kt.copy(this),e);const n=Kt.r,i=Kt.g,r=Kt.b;return e!==ti?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ui),this.setHSL(Ui.h+e,Ui.s+n,Ui.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ui),e.getHSL(Oo);const i=Da(Ui.h,Oo.h,n),r=Da(Ui.s,Oo.s,n),s=Da(Ui.l,Oo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new rt;rt.NAMES=_v;let YS=0;class jr extends Wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:YS++}),this.uuid=Mi(),this.name="",this.type="Material",this.blending=Os,this.side=ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ad,this.blendDst=Cd,this.blendEquation=Er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=Wl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ip,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kr,this.stencilZFail=Kr,this.stencilZPass=Kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(i.blending=this.blending),this.side!==ar&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ad&&(i.blendSrc=this.blendSrc),this.blendDst!==Cd&&(i.blendDst=this.blendDst),this.blendEquation!==Er&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Wl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ip&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Kr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Kr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Kr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Bi extends jr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=nv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rt=new O,ko=new Ce;class Tn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Nd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return pv("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ko.fromBufferAttribute(this,n),ko.applyMatrix3(e),this.setXY(n,ko.x,ko.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyMatrix3(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyMatrix4(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyNormalMatrix(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.transformDirection(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=qn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=at(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=qn(n,this.array)),n}setX(e,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=qn(n,this.array)),n}setY(e,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=qn(n,this.array)),n}setZ(e,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=qn(n,this.array)),n}setW(e,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=at(n,this.array),i=at(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=at(n,this.array),i=at(i,this.array),r=at(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=at(n,this.array),i=at(i,this.array),r=at(r,this.array),s=at(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nd&&(e.usage=this.usage),e}}class xv extends Tn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class yv extends Tn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class gn extends Tn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let KS=0;const Ln=new ft,_u=new Wt,ss=new O,yn=new oo,pa=new oo,Ft=new O;class vn extends Wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:KS++}),this.uuid=Mi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hv(e)?yv:xv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,n,i){return Ln.makeTranslation(e,n,i),this.applyMatrix4(Ln),this}scale(e,n,i){return Ln.makeScale(e,n,i),this.applyMatrix4(Ln),this}lookAt(e){return _u.lookAt(e),_u.updateMatrix(),this.applyMatrix4(_u.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new gn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];yn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];pa.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(yn.min,pa.min),yn.expandByPoint(Ft),Ft.addVectors(yn.max,pa.max),yn.expandByPoint(Ft)):(yn.expandByPoint(pa.min),yn.expandByPoint(pa.max))}yn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ft.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ft));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)Ft.fromBufferAttribute(o,c),l&&(ss.fromBufferAttribute(e,c),Ft.add(ss)),r=Math.max(r,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<i.count;N++)o[N]=new O,l[N]=new O;const c=new O,f=new O,d=new O,h=new Ce,m=new Ce,_=new Ce,x=new O,p=new O;function u(N,re,y){c.fromBufferAttribute(i,N),f.fromBufferAttribute(i,re),d.fromBufferAttribute(i,y),h.fromBufferAttribute(s,N),m.fromBufferAttribute(s,re),_.fromBufferAttribute(s,y),f.sub(c),d.sub(c),m.sub(h),_.sub(h);const C=1/(m.x*_.y-_.x*m.y);isFinite(C)&&(x.copy(f).multiplyScalar(_.y).addScaledVector(d,-m.y).multiplyScalar(C),p.copy(d).multiplyScalar(m.x).addScaledVector(f,-_.x).multiplyScalar(C),o[N].add(x),o[re].add(x),o[y].add(x),l[N].add(p),l[re].add(p),l[y].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let N=0,re=v.length;N<re;++N){const y=v[N],C=y.start,Q=y.count;for(let ee=C,I=C+Q;ee<I;ee+=3)u(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const g=new O,M=new O,P=new O,A=new O;function T(N){P.fromBufferAttribute(r,N),A.copy(P);const re=o[N];g.copy(re),g.sub(P.multiplyScalar(P.dot(re))).normalize(),M.crossVectors(A,re);const C=M.dot(l[N])<0?-1:1;a.setXYZW(N,g.x,g.y,g.z,C)}for(let N=0,re=v.length;N<re;++N){const y=v[N],C=y.start,Q=y.count;for(let ee=C,I=C+Q;ee<I;ee+=3)T(e.getX(ee+0)),T(e.getX(ee+1)),T(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Tn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new O,s=new O,a=new O,o=new O,l=new O,c=new O,f=new O,d=new O;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),x=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,x),a.fromBufferAttribute(n,p),f.subVectors(a,s),d.subVectors(r,s),f.cross(d),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),o.add(f),l.add(f),c.add(f),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),f.subVectors(a,s),d.subVectors(r,s),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ft.fromBufferAttribute(e,n),Ft.normalize(),e.setXYZ(n,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,l){const c=o.array,f=o.itemSize,d=o.normalized,h=new c.constructor(l.length*f);let m=0,_=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?m=l[x]*o.data.stride+o.offset:m=l[x]*f;for(let u=0;u<f;u++)h[_++]=c[m++]}return new Tn(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new vn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let f=0,d=c.length;f<d;f++){const h=c[f],m=e(h,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let d=0,h=c.length;d<h;d++){const m=c[d];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],d=s[c];for(let h=0,m=d.length;h<m;h++)f.push(d[h].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,f=a.length;c<f;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $p=new ft,gr=new co,zo=new lo,Yp=new O,as=new O,os=new O,ls=new O,xu=new O,Bo=new O,Ho=new Ce,Vo=new Ce,Go=new Ce,Kp=new O,Zp=new O,Qp=new O,Wo=new O,jo=new O;class on extends Wt{constructor(e=new vn,n=new Bi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Bo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=o[l],d=s[l];f!==0&&(xu.fromBufferAttribute(d,e),a?Bo.addScaledVector(xu,f):Bo.addScaledVector(xu.sub(n),f))}n.add(Bo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),zo.copy(i.boundingSphere),zo.applyMatrix4(s),gr.copy(e.ray).recast(e.near),!(zo.containsPoint(gr.origin)===!1&&(gr.intersectSphere(zo,Yp)===null||gr.origin.distanceToSquared(Yp)>(e.far-e.near)**2))&&($p.copy(s).invert(),gr.copy(e.ray).applyMatrix4($p),!(i.boundingBox!==null&&gr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,gr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,h=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=h.length;_<x;_++){const p=h[_],u=a[p.materialIndex],v=Math.max(p.start,m.start),g=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let M=v,P=g;M<P;M+=3){const A=o.getX(M),T=o.getX(M+1),N=o.getX(M+2);r=Xo(this,u,e,i,c,f,d,A,T,N),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let p=_,u=x;p<u;p+=3){const v=o.getX(p),g=o.getX(p+1),M=o.getX(p+2);r=Xo(this,a,e,i,c,f,d,v,g,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,x=h.length;_<x;_++){const p=h[_],u=a[p.materialIndex],v=Math.max(p.start,m.start),g=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=v,P=g;M<P;M+=3){const A=M,T=M+1,N=M+2;r=Xo(this,u,e,i,c,f,d,A,T,N),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=_,u=x;p<u;p+=3){const v=p,g=p+1,M=p+2;r=Xo(this,a,e,i,c,f,d,v,g,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function ZS(t,e,n,i,r,s,a,o){let l;if(e.side===Qt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===ar,o),l===null)return null;jo.copy(o),jo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(jo);return c<n.near||c>n.far?null:{distance:c,point:jo.clone(),object:t}}function Xo(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,as),t.getVertexPosition(l,os),t.getVertexPosition(c,ls);const f=ZS(t,e,n,i,as,os,ls,Wo);if(f){r&&(Ho.fromBufferAttribute(r,o),Vo.fromBufferAttribute(r,l),Go.fromBufferAttribute(r,c),f.uv=$n.getInterpolation(Wo,as,os,ls,Ho,Vo,Go,new Ce)),s&&(Ho.fromBufferAttribute(s,o),Vo.fromBufferAttribute(s,l),Go.fromBufferAttribute(s,c),f.uv1=$n.getInterpolation(Wo,as,os,ls,Ho,Vo,Go,new Ce)),a&&(Kp.fromBufferAttribute(a,o),Zp.fromBufferAttribute(a,l),Qp.fromBufferAttribute(a,c),f.normal=$n.getInterpolation(Wo,as,os,ls,Kp,Zp,Qp,new O),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new O,materialIndex:0};$n.getNormal(as,os,ls,d.normal),f.face=d}return f}class uo extends vn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],f=[],d=[];let h=0,m=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new gn(c,3)),this.setAttribute("normal",new gn(f,3)),this.setAttribute("uv",new gn(d,2));function _(x,p,u,v,g,M,P,A,T,N,re){const y=M/T,C=P/N,Q=M/2,ee=P/2,I=A/2,J=T+1,B=N+1;let H=0,D=0;const F=new O;for(let z=0;z<B;z++){const K=z*C-ee;for(let ae=0;ae<J;ae++){const Ae=ae*y-Q;F[x]=Ae*v,F[p]=K*g,F[u]=I,c.push(F.x,F.y,F.z),F[x]=0,F[p]=0,F[u]=A>0?1:-1,f.push(F.x,F.y,F.z),d.push(ae/T),d.push(1-z/N),H+=1}}for(let z=0;z<N;z++)for(let K=0;K<T;K++){const ae=h+K+J*z,Ae=h+K+J*(z+1),W=h+(K+1)+J*(z+1),j=h+(K+1)+J*z;l.push(ae,Ae,j),l.push(Ae,W,j),D+=6}o.addGroup(m,D,re),m+=D,h+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ks(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function rn(t){const e={};for(let n=0;n<t.length;n++){const i=Ks(t[n]);for(const r in i)e[r]=i[r]}return e}function QS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Sv(t){return t.getRenderTarget()===null?t.outputColorSpace:ct.workingColorSpace}const JS={clone:Ks,merge:rn};var eM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class or extends jr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eM,this.fragmentShader=tM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=QS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Mv extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=yi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fi=new O,Jp=new Ce,em=new Ce;class Mn extends Mv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ja*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Na*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ja*2*Math.atan(Math.tan(Na*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z),Fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z)}getViewSize(e,n){return this.getViewBounds(e,Jp,em),n.subVectors(em,Jp)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Na*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const cs=-90,us=1;class nM extends Wt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Mn(cs,us,e,n);r.layers=this.layers,this.add(r);const s=new Mn(cs,us,e,n);s.layers=this.layers,this.add(s);const a=new Mn(cs,us,e,n);a.layers=this.layers,this.add(a);const o=new Mn(cs,us,e,n);o.layers=this.layers,this.add(o);const l=new Mn(cs,us,e,n);l.layers=this.layers,this.add(l);const c=new Mn(cs,us,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===yi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$l)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,f]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(d,h,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Ev extends Jt{constructor(e,n,i,r,s,a,o,l,c,f){e=e!==void 0?e:[],n=n!==void 0?n:qs,super(e,n,i,r,s,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class iM extends Br{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ev(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ht}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new uo(5,5,5),s=new or({name:"CubemapFromEquirect",uniforms:Ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qt,blending:tr});s.uniforms.tEquirect.value=n;const a=new on(r,s),o=n.minFilter;return n.minFilter===Rr&&(n.minFilter=Ht),new nM(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const yu=new O,rM=new O,sM=new Je;class ni{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=yu.subVectors(i,n).cross(rM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(yu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||sM.getNormalMatrix(e),r=this.coplanarPoint(yu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vr=new lo,qo=new O;class zf{constructor(e=new ni,n=new ni,i=new ni,r=new ni,s=new ni,a=new ni){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=yi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],f=r[5],d=r[6],h=r[7],m=r[8],_=r[9],x=r[10],p=r[11],u=r[12],v=r[13],g=r[14],M=r[15];if(i[0].setComponents(l-s,h-c,p-m,M-u).normalize(),i[1].setComponents(l+s,h+c,p+m,M+u).normalize(),i[2].setComponents(l+a,h+f,p+_,M+v).normalize(),i[3].setComponents(l-a,h-f,p-_,M-v).normalize(),i[4].setComponents(l-o,h-d,p-x,M-g).normalize(),n===yi)i[5].setComponents(l+o,h+d,p+x,M+g).normalize();else if(n===$l)i[5].setComponents(o,d,x,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),vr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(e){return vr.center.set(0,0,0),vr.radius=.7071067811865476,vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(qo.x=r.normal.x>0?e.max.x:e.min.x,qo.y=r.normal.y>0?e.max.y:e.min.y,qo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(qo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function wv(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function aM(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,f){const d=c.array,h=c.usage,m=d.byteLength,_=t.createBuffer();t.bindBuffer(f,_),t.bufferData(f,d,h),c.onUploadCallback();let x;if(d instanceof Float32Array)x=t.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)x=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=t.SHORT;else if(d instanceof Uint32Array)x=t.UNSIGNED_INT;else if(d instanceof Int32Array)x=t.INT;else if(d instanceof Int8Array)x=t.BYTE;else if(d instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,f,d){const h=f.array,m=f._updateRange,_=f.updateRanges;if(t.bindBuffer(d,c),m.count===-1&&_.length===0&&t.bufferSubData(d,0,h),_.length!==0){for(let x=0,p=_.length;x<p;x++){const u=_[x];n?t.bufferSubData(d,u.start*h.BYTES_PER_ELEMENT,h,u.start,u.count):t.bufferSubData(d,u.start*h.BYTES_PER_ELEMENT,h.subarray(u.start,u.start+u.count))}f.clearUpdateRanges()}m.count!==-1&&(n?t.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):t.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),f.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f&&(t.deleteBuffer(f.buffer),i.delete(c))}function l(c,f){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);if(d===void 0)i.set(c,r(c,f));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,c,f),d.version=c.version}}return{get:a,remove:o,update:l}}class gc extends vn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,f=l+1,d=e/o,h=n/l,m=[],_=[],x=[],p=[];for(let u=0;u<f;u++){const v=u*h-a;for(let g=0;g<c;g++){const M=g*d-s;_.push(M,-v,0),x.push(0,0,1),p.push(g/o),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<o;v++){const g=v+c*u,M=v+c*(u+1),P=v+1+c*(u+1),A=v+1+c*u;m.push(g,M,A),m.push(M,P,A)}this.setIndex(m),this.setAttribute("position",new gn(_,3)),this.setAttribute("normal",new gn(x,3)),this.setAttribute("uv",new gn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gc(e.width,e.height,e.widthSegments,e.heightSegments)}}var oM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lM=`#ifdef USE_ALPHAHASH
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
#endif`,cM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hM=`#ifdef USE_AOMAP
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
#endif`,pM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mM=`#ifdef USE_BATCHING
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
#endif`,gM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,vM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_M=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yM=`#ifdef USE_IRIDESCENCE
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
#endif`,SM=`#ifdef USE_BUMPMAP
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
#endif`,MM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,EM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,TM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,AM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,CM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,RM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,PM=`#define PI 3.141592653589793
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
} // validated`,LM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,NM=`vec3 transformedNormal = objectNormal;
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
#endif`,DM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,IM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,UM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,FM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,OM="gl_FragColor = linearToOutputTexel( gl_FragColor );",kM=`
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
}`,zM=`#ifdef USE_ENVMAP
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
#endif`,BM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,HM=`#ifdef USE_ENVMAP
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
#endif`,VM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,GM=`#ifdef USE_ENVMAP
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
#endif`,WM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,XM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$M=`#ifdef USE_GRADIENTMAP
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
}`,YM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,KM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ZM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,QM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,JM=`uniform bool receiveShadow;
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
#endif`,e1=`#ifdef USE_ENVMAP
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
#endif`,t1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,n1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,i1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,r1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,s1=`PhysicalMaterial material;
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
#endif`,a1=`struct PhysicalMaterial {
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
}`,o1=`
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
#endif`,l1=`#if defined( RE_IndirectDiffuse )
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
#endif`,c1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,u1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,d1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,h1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,p1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,m1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,g1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,v1=`#if defined( USE_POINTS_UV )
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
#endif`,_1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,x1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,y1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,S1=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,M1=`#ifdef USE_MORPHNORMALS
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
#endif`,E1=`#ifdef USE_MORPHTARGETS
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
#endif`,w1=`#ifdef USE_MORPHTARGETS
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
#endif`,T1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,b1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,A1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,P1=`#ifdef USE_NORMALMAP
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
#endif`,L1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,N1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,D1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,I1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,U1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,F1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,O1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,k1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,z1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,B1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,H1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,V1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,G1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,W1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,j1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,X1=`float getShadowMask() {
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
}`,q1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$1=`#ifdef USE_SKINNING
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
#endif`,Y1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,K1=`#ifdef USE_SKINNING
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
#endif`,Z1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Q1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,J1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tE=`#ifdef USE_TRANSMISSION
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
#endif`,nE=`#ifdef USE_TRANSMISSION
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
#endif`,iE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const oE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lE=`uniform sampler2D t2D;
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
}`,cE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,dE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hE=`#include <common>
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
}`,pE=`#if DEPTH_PACKING == 3200
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
}`,mE=`#define DISTANCE
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
}`,gE=`#define DISTANCE
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
}`,vE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_E=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xE=`uniform float scale;
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
}`,yE=`uniform vec3 diffuse;
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
}`,SE=`#include <common>
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
}`,ME=`uniform vec3 diffuse;
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
}`,EE=`#define LAMBERT
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
}`,wE=`#define LAMBERT
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
}`,TE=`#define MATCAP
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
}`,bE=`#define MATCAP
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
}`,AE=`#define NORMAL
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
}`,CE=`#define NORMAL
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
}`,RE=`#define PHONG
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
}`,PE=`#define PHONG
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
}`,LE=`#define STANDARD
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
}`,NE=`#define STANDARD
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
}`,DE=`#define TOON
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
}`,IE=`#define TOON
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
}`,UE=`uniform float size;
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
}`,FE=`uniform vec3 diffuse;
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
}`,OE=`#include <common>
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
}`,kE=`uniform vec3 color;
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
}`,zE=`uniform float rotation;
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
}`,BE=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:oM,alphahash_pars_fragment:lM,alphamap_fragment:cM,alphamap_pars_fragment:uM,alphatest_fragment:dM,alphatest_pars_fragment:fM,aomap_fragment:hM,aomap_pars_fragment:pM,batching_pars_vertex:mM,batching_vertex:gM,begin_vertex:vM,beginnormal_vertex:_M,bsdfs:xM,iridescence_fragment:yM,bumpmap_pars_fragment:SM,clipping_planes_fragment:MM,clipping_planes_pars_fragment:EM,clipping_planes_pars_vertex:wM,clipping_planes_vertex:TM,color_fragment:bM,color_pars_fragment:AM,color_pars_vertex:CM,color_vertex:RM,common:PM,cube_uv_reflection_fragment:LM,defaultnormal_vertex:NM,displacementmap_pars_vertex:DM,displacementmap_vertex:IM,emissivemap_fragment:UM,emissivemap_pars_fragment:FM,colorspace_fragment:OM,colorspace_pars_fragment:kM,envmap_fragment:zM,envmap_common_pars_fragment:BM,envmap_pars_fragment:HM,envmap_pars_vertex:VM,envmap_physical_pars_fragment:e1,envmap_vertex:GM,fog_vertex:WM,fog_pars_vertex:jM,fog_fragment:XM,fog_pars_fragment:qM,gradientmap_pars_fragment:$M,lightmap_fragment:YM,lightmap_pars_fragment:KM,lights_lambert_fragment:ZM,lights_lambert_pars_fragment:QM,lights_pars_begin:JM,lights_toon_fragment:t1,lights_toon_pars_fragment:n1,lights_phong_fragment:i1,lights_phong_pars_fragment:r1,lights_physical_fragment:s1,lights_physical_pars_fragment:a1,lights_fragment_begin:o1,lights_fragment_maps:l1,lights_fragment_end:c1,logdepthbuf_fragment:u1,logdepthbuf_pars_fragment:d1,logdepthbuf_pars_vertex:f1,logdepthbuf_vertex:h1,map_fragment:p1,map_pars_fragment:m1,map_particle_fragment:g1,map_particle_pars_fragment:v1,metalnessmap_fragment:_1,metalnessmap_pars_fragment:x1,morphinstance_vertex:y1,morphcolor_vertex:S1,morphnormal_vertex:M1,morphtarget_pars_vertex:E1,morphtarget_vertex:w1,normal_fragment_begin:T1,normal_fragment_maps:b1,normal_pars_fragment:A1,normal_pars_vertex:C1,normal_vertex:R1,normalmap_pars_fragment:P1,clearcoat_normal_fragment_begin:L1,clearcoat_normal_fragment_maps:N1,clearcoat_pars_fragment:D1,iridescence_pars_fragment:I1,opaque_fragment:U1,packing:F1,premultiplied_alpha_fragment:O1,project_vertex:k1,dithering_fragment:z1,dithering_pars_fragment:B1,roughnessmap_fragment:H1,roughnessmap_pars_fragment:V1,shadowmap_pars_fragment:G1,shadowmap_pars_vertex:W1,shadowmap_vertex:j1,shadowmask_pars_fragment:X1,skinbase_vertex:q1,skinning_pars_vertex:$1,skinning_vertex:Y1,skinnormal_vertex:K1,specularmap_fragment:Z1,specularmap_pars_fragment:Q1,tonemapping_fragment:J1,tonemapping_pars_fragment:eE,transmission_fragment:tE,transmission_pars_fragment:nE,uv_pars_fragment:iE,uv_pars_vertex:rE,uv_vertex:sE,worldpos_vertex:aE,background_vert:oE,background_frag:lE,backgroundCube_vert:cE,backgroundCube_frag:uE,cube_vert:dE,cube_frag:fE,depth_vert:hE,depth_frag:pE,distanceRGBA_vert:mE,distanceRGBA_frag:gE,equirect_vert:vE,equirect_frag:_E,linedashed_vert:xE,linedashed_frag:yE,meshbasic_vert:SE,meshbasic_frag:ME,meshlambert_vert:EE,meshlambert_frag:wE,meshmatcap_vert:TE,meshmatcap_frag:bE,meshnormal_vert:AE,meshnormal_frag:CE,meshphong_vert:RE,meshphong_frag:PE,meshphysical_vert:LE,meshphysical_frag:NE,meshtoon_vert:DE,meshtoon_frag:IE,points_vert:UE,points_frag:FE,shadow_vert:OE,shadow_frag:kE,sprite_vert:zE,sprite_frag:BE},me={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},ii={basic:{uniforms:rn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:rn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new rt(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:rn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:rn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:rn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new rt(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:rn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:rn([me.points,me.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:rn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:rn([me.common,me.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:rn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:rn([me.sprite,me.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:rn([me.common,me.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:rn([me.lights,me.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};ii.physical={uniforms:rn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const $o={r:0,b:0,g:0},_r=new Ci,HE=new ft;function VE(t,e,n,i,r,s,a){const o=new rt(0);let l=s===!0?0:1,c,f,d=null,h=0,m=null;function _(p,u){let v=!1,g=u.isScene===!0?u.background:null;g&&g.isTexture&&(g=(u.backgroundBlurriness>0?n:e).get(g)),g===null?x(o,l):g&&g.isColor&&(x(g,1),v=!0);const M=t.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===pc)?(f===void 0&&(f=new on(new uo(1,1,1),new or({name:"BackgroundCubeMaterial",uniforms:Ks(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(P,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),_r.copy(u.backgroundRotation),_r.x*=-1,_r.y*=-1,_r.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),f.material.uniforms.envMap.value=g,f.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(HE.makeRotationFromEuler(_r)),f.material.toneMapped=ct.getTransfer(g.colorSpace)!==mt,(d!==g||h!==g.version||m!==t.toneMapping)&&(f.material.needsUpdate=!0,d=g,h=g.version,m=t.toneMapping),f.layers.enableAll(),p.unshift(f,f.geometry,f.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new on(new gc(2,2),new or({name:"BackgroundMaterial",uniforms:Ks(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:ar,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=ct.getTransfer(g.colorSpace)!==mt,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(d!==g||h!==g.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,d=g,h=g.version,m=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function x(p,u){p.getRGB($o,Sv(t)),i.buffers.color.setClear($o.r,$o.g,$o.b,u,a)}return{getClearColor:function(){return o},setClearColor:function(p,u=1){o.set(p),l=u,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,x(o,l)},render:_}}function GE(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=p(null);let c=l,f=!1;function d(I,J,B,H,D){let F=!1;if(a){const z=x(H,B,J);c!==z&&(c=z,m(c.object)),F=u(I,H,B,D),F&&v(I,H,B,D)}else{const z=J.wireframe===!0;(c.geometry!==H.id||c.program!==B.id||c.wireframe!==z)&&(c.geometry=H.id,c.program=B.id,c.wireframe=z,F=!0)}D!==null&&n.update(D,t.ELEMENT_ARRAY_BUFFER),(F||f)&&(f=!1,N(I,J,B,H),D!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(D).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(I){return i.isWebGL2?t.bindVertexArray(I):s.bindVertexArrayOES(I)}function _(I){return i.isWebGL2?t.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function x(I,J,B){const H=B.wireframe===!0;let D=o[I.id];D===void 0&&(D={},o[I.id]=D);let F=D[J.id];F===void 0&&(F={},D[J.id]=F);let z=F[H];return z===void 0&&(z=p(h()),F[H]=z),z}function p(I){const J=[],B=[],H=[];for(let D=0;D<r;D++)J[D]=0,B[D]=0,H[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:B,attributeDivisors:H,object:I,attributes:{},index:null}}function u(I,J,B,H){const D=c.attributes,F=J.attributes;let z=0;const K=B.getAttributes();for(const ae in K)if(K[ae].location>=0){const W=D[ae];let j=F[ae];if(j===void 0&&(ae==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),ae==="instanceColor"&&I.instanceColor&&(j=I.instanceColor)),W===void 0||W.attribute!==j||j&&W.data!==j.data)return!0;z++}return c.attributesNum!==z||c.index!==H}function v(I,J,B,H){const D={},F=J.attributes;let z=0;const K=B.getAttributes();for(const ae in K)if(K[ae].location>=0){let W=F[ae];W===void 0&&(ae==="instanceMatrix"&&I.instanceMatrix&&(W=I.instanceMatrix),ae==="instanceColor"&&I.instanceColor&&(W=I.instanceColor));const j={};j.attribute=W,W&&W.data&&(j.data=W.data),D[ae]=j,z++}c.attributes=D,c.attributesNum=z,c.index=H}function g(){const I=c.newAttributes;for(let J=0,B=I.length;J<B;J++)I[J]=0}function M(I){P(I,0)}function P(I,J){const B=c.newAttributes,H=c.enabledAttributes,D=c.attributeDivisors;B[I]=1,H[I]===0&&(t.enableVertexAttribArray(I),H[I]=1),D[I]!==J&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,J),D[I]=J)}function A(){const I=c.newAttributes,J=c.enabledAttributes;for(let B=0,H=J.length;B<H;B++)J[B]!==I[B]&&(t.disableVertexAttribArray(B),J[B]=0)}function T(I,J,B,H,D,F,z){z===!0?t.vertexAttribIPointer(I,J,B,D,F):t.vertexAttribPointer(I,J,B,H,D,F)}function N(I,J,B,H){if(i.isWebGL2===!1&&(I.isInstancedMesh||H.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const D=H.attributes,F=B.getAttributes(),z=J.defaultAttributeValues;for(const K in F){const ae=F[K];if(ae.location>=0){let Ae=D[K];if(Ae===void 0&&(K==="instanceMatrix"&&I.instanceMatrix&&(Ae=I.instanceMatrix),K==="instanceColor"&&I.instanceColor&&(Ae=I.instanceColor)),Ae!==void 0){const W=Ae.normalized,j=Ae.itemSize,oe=n.get(Ae);if(oe===void 0)continue;const Se=oe.buffer,_e=oe.type,xe=oe.bytesPerElement,He=i.isWebGL2===!0&&(_e===t.INT||_e===t.UNSIGNED_INT||Ae.gpuType===rv);if(Ae.isInterleavedBufferAttribute){const Ee=Ae.data,G=Ee.stride,vt=Ae.offset;if(Ee.isInstancedInterleavedBuffer){for(let Re=0;Re<ae.locationSize;Re++)P(ae.location+Re,Ee.meshPerAttribute);I.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Re=0;Re<ae.locationSize;Re++)M(ae.location+Re);t.bindBuffer(t.ARRAY_BUFFER,Se);for(let Re=0;Re<ae.locationSize;Re++)T(ae.location+Re,j/ae.locationSize,_e,W,G*xe,(vt+j/ae.locationSize*Re)*xe,He)}else{if(Ae.isInstancedBufferAttribute){for(let Ee=0;Ee<ae.locationSize;Ee++)P(ae.location+Ee,Ae.meshPerAttribute);I.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let Ee=0;Ee<ae.locationSize;Ee++)M(ae.location+Ee);t.bindBuffer(t.ARRAY_BUFFER,Se);for(let Ee=0;Ee<ae.locationSize;Ee++)T(ae.location+Ee,j/ae.locationSize,_e,W,j*xe,j/ae.locationSize*Ee*xe,He)}}else if(z!==void 0){const W=z[K];if(W!==void 0)switch(W.length){case 2:t.vertexAttrib2fv(ae.location,W);break;case 3:t.vertexAttrib3fv(ae.location,W);break;case 4:t.vertexAttrib4fv(ae.location,W);break;default:t.vertexAttrib1fv(ae.location,W)}}}}A()}function re(){Q();for(const I in o){const J=o[I];for(const B in J){const H=J[B];for(const D in H)_(H[D].object),delete H[D];delete J[B]}delete o[I]}}function y(I){if(o[I.id]===void 0)return;const J=o[I.id];for(const B in J){const H=J[B];for(const D in H)_(H[D].object),delete H[D];delete J[B]}delete o[I.id]}function C(I){for(const J in o){const B=o[J];if(B[I.id]===void 0)continue;const H=B[I.id];for(const D in H)_(H[D].object),delete H[D];delete B[I.id]}}function Q(){ee(),f=!0,c!==l&&(c=l,m(c.object))}function ee(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Q,resetDefaultState:ee,dispose:re,releaseStatesOfGeometry:y,releaseStatesOfProgram:C,initAttributes:g,enableAttribute:M,disableUnusedAttributes:A}}function WE(t,e,n,i){const r=i.isWebGL2;let s;function a(f){s=f}function o(f,d){t.drawArrays(s,f,d),n.update(d,s,1)}function l(f,d,h){if(h===0)return;let m,_;if(r)m=t,_="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](s,f,d,h),n.update(d,s,h)}function c(f,d,h){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<h;_++)this.render(f[_],d[_]);else{m.multiDrawArraysWEBGL(s,f,0,d,0,h);let _=0;for(let x=0;x<h;x++)_+=d[x];n.update(_,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function jE(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let o=n.precision!==void 0?n.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=h>0,M=a||e.has("OES_texture_float"),P=g&&M,A=a?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:v,vertexTextures:g,floatFragmentTextures:M,floatVertexTextures:P,maxSamples:A}}function XE(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new ni,o=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||i!==0||r;return r=h,i=d.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,m){const _=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,u=t.get(d);if(!r||_===null||_.length===0||s&&!p)s?f(null):c();else{const v=s?0:i,g=v*4;let M=u.clippingState||null;l.value=M,M=f(_,h,g,m);for(let P=0;P!==g;++P)M[P]=n[P];u.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,h,m,_){const x=d!==null?d.length:0;let p=null;if(x!==0){if(p=l.value,_!==!0||p===null){const u=m+x*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<u)&&(p=new Float32Array(u));for(let g=0,M=m;g!==x;++g,M+=4)a.copy(d[g]).applyMatrix4(v,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function qE(t){let e=new WeakMap;function n(a,o){return o===Rd?a.mapping=qs:o===Pd&&(a.mapping=$s),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Rd||o===Pd)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new iM(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class $E extends Mv{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Cs=4,tm=[.125,.215,.35,.446,.526,.582],wr=20,Su=new $E,nm=new rt;let Mu=null,Eu=0,wu=0;const Mr=(1+Math.sqrt(5))/2,ds=1/Mr,im=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,Mr,ds),new O(0,Mr,-ds),new O(ds,0,Mr),new O(-ds,0,Mr),new O(Mr,ds,0),new O(-Mr,ds,0)];class rm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Mu=this._renderer.getRenderTarget(),Eu=this._renderer.getActiveCubeFace(),wu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=om(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=am(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Mu,Eu,wu),e.scissorTest=!1,Yo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===qs||e.mapping===$s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mu=this._renderer.getRenderTarget(),Eu=this._renderer.getActiveCubeFace(),wu=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:Qa,format:Xn,colorSpace:dr,depthBuffer:!1},r=sm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=YE(s)),this._blurMaterial=KE(s,e,n)}return r}_compileMaterial(e){const n=new on(this._lodPlanes[0],e);this._renderer.compile(n,Su)}_sceneToCubeUV(e,n,i,r){const o=new Mn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(nm),f.toneMapping=nr,f.autoClear=!1;const m=new Bi({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),_=new on(new uo,m);let x=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(nm),x=!0);for(let u=0;u<6;u++){const v=u%3;v===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):v===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const g=this._cubeSize;Yo(r,v*g,u>2?g:0,g,g),f.setRenderTarget(r),x&&f.render(_,o),f.render(e,o)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===qs||e.mapping===$s;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=om()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=am());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new on(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Yo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Su)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=im[(r-1)%im.length];this._blur(e,r-1,r,s,a)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new on(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*wr-1),x=s/_,p=isFinite(s)?1+Math.floor(f*x):wr;p>wr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${wr}`);const u=[];let v=0;for(let T=0;T<wr;++T){const N=T/x,re=Math.exp(-N*N/2);u.push(re),T===0?v+=re:T<p&&(v+=2*re)}for(let T=0;T<u.length;T++)u[T]=u[T]/v;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=u,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:g}=this;h.dTheta.value=_,h.mipInt.value=g-i;const M=this._sizeLods[r],P=3*M*(r>g-Cs?r-g+Cs:0),A=4*(this._cubeSize-M);Yo(n,P,A,3*M,2*M),l.setRenderTarget(n),l.render(d,Su)}}function YE(t){const e=[],n=[],i=[];let r=t;const s=t-Cs+1+tm.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-Cs?l=tm[a-t+Cs-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),f=-c,d=1+c,h=[f,f,d,f,d,d,f,f,d,d,f,d],m=6,_=6,x=3,p=2,u=1,v=new Float32Array(x*_*m),g=new Float32Array(p*_*m),M=new Float32Array(u*_*m);for(let A=0;A<m;A++){const T=A%3*2/3-1,N=A>2?0:-1,re=[T,N,0,T+2/3,N,0,T+2/3,N+1,0,T,N,0,T+2/3,N+1,0,T,N+1,0];v.set(re,x*_*A),g.set(h,p*_*A);const y=[A,A,A,A,A,A];M.set(y,u*_*A)}const P=new vn;P.setAttribute("position",new Tn(v,x)),P.setAttribute("uv",new Tn(g,p)),P.setAttribute("faceIndex",new Tn(M,u)),e.push(P),r>Cs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function sm(t,e,n){const i=new Br(t,e,n);return i.texture.mapping=pc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Yo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function KE(t,e,n){const i=new Float32Array(wr),r=new O(0,1,0);return new or({name:"SphericalGaussianBlur",defines:{n:wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Bf(),fragmentShader:`

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
		`,blending:tr,depthTest:!1,depthWrite:!1})}function am(){return new or({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bf(),fragmentShader:`

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
		`,blending:tr,depthTest:!1,depthWrite:!1})}function om(){return new or({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Bf(){return`

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
	`}function ZE(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Rd||l===Pd,f=l===qs||l===$s;if(c||f)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return n===null&&(n=new rm(t)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||f&&d&&r(d)){n===null&&(n=new rm(t));const h=c?n.fromEquirectangular(o):n.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let f=0;f<c;f++)o[f]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function QE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function JE(t,e,n,i){const r={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const x=h.morphAttributes[_];for(let p=0,u=x.length;p<u;p++)e.remove(x[p])}h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(d,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const m=d.morphAttributes;for(const _ in m){const x=m[_];for(let p=0,u=x.length;p<u;p++)e.update(x[p],t.ARRAY_BUFFER)}}function c(d){const h=[],m=d.index,_=d.attributes.position;let x=0;if(m!==null){const v=m.array;x=m.version;for(let g=0,M=v.length;g<M;g+=3){const P=v[g+0],A=v[g+1],T=v[g+2];h.push(P,A,A,T,T,P)}}else if(_!==void 0){const v=_.array;x=_.version;for(let g=0,M=v.length/3-1;g<M;g+=3){const P=g+0,A=g+1,T=g+2;h.push(P,A,A,T,T,P)}}else return;const p=new(hv(h)?yv:xv)(h,1);p.version=x;const u=s.get(d);u&&e.remove(u),s.set(d,p)}function f(d){const h=s.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:f}}function ew(t,e,n,i){const r=i.isWebGL2;let s;function a(m){s=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function f(m,_){t.drawElements(s,_,o,m*l),n.update(_,s,1)}function d(m,_,x){if(x===0)return;let p,u;if(r)p=t,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](s,_,o,m*l,x),n.update(_,s,x)}function h(m,_,x){if(x===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<x;u++)this.render(m[u]/l,_[u]);else{p.multiDrawElementsWEBGL(s,_,0,o,m,0,x);let u=0;for(let v=0;v<x;v++)u+=_[v];n.update(u,s,1)}}this.setMode=a,this.setIndex=c,this.render=f,this.renderInstances=d,this.renderMultiDraw=h}function tw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function nw(t,e){return t[0]-e[0]}function iw(t,e){return Math.abs(e[1])-Math.abs(t[1])}function rw(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,a=new yt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,f,d){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,x=_!==void 0?_.length:0;let p=s.get(f);if(p===void 0||p.count!==x){let ee=function(){C.dispose(),s.delete(f),f.removeEventListener("dispose",ee)};var m=ee;p!==void 0&&p.texture.dispose();const u=f.morphAttributes.position!==void 0,v=f.morphAttributes.normal!==void 0,g=f.morphAttributes.color!==void 0,M=f.morphAttributes.position||[],P=f.morphAttributes.normal||[],A=f.morphAttributes.color||[];let T=0;u===!0&&(T=1),v===!0&&(T=2),g===!0&&(T=3);let N=f.attributes.position.count*T,re=1;N>e.maxTextureSize&&(re=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const y=new Float32Array(N*re*4*x),C=new vv(y,N,re,x);C.type=vi,C.needsUpdate=!0;const Q=T*4;for(let I=0;I<x;I++){const J=M[I],B=P[I],H=A[I],D=N*re*4*I;for(let F=0;F<J.count;F++){const z=F*Q;u===!0&&(a.fromBufferAttribute(J,F),y[D+z+0]=a.x,y[D+z+1]=a.y,y[D+z+2]=a.z,y[D+z+3]=0),v===!0&&(a.fromBufferAttribute(B,F),y[D+z+4]=a.x,y[D+z+5]=a.y,y[D+z+6]=a.z,y[D+z+7]=0),g===!0&&(a.fromBufferAttribute(H,F),y[D+z+8]=a.x,y[D+z+9]=a.y,y[D+z+10]=a.z,y[D+z+11]=H.itemSize===4?a.w:1)}}p={count:x,texture:C,size:new Ce(N,re)},s.set(f,p),f.addEventListener("dispose",ee)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(t,"morphTexture",c.morphTexture,n);else{let u=0;for(let g=0;g<h.length;g++)u+=h[g];const v=f.morphTargetsRelative?1:1-u;d.getUniforms().setValue(t,"morphTargetBaseInfluence",v),d.getUniforms().setValue(t,"morphTargetInfluences",h)}d.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const _=h===void 0?0:h.length;let x=i[f.id];if(x===void 0||x.length!==_){x=[];for(let M=0;M<_;M++)x[M]=[M,0];i[f.id]=x}for(let M=0;M<_;M++){const P=x[M];P[0]=M,P[1]=h[M]}x.sort(iw);for(let M=0;M<8;M++)M<_&&x[M][1]?(o[M][0]=x[M][0],o[M][1]=x[M][1]):(o[M][0]=Number.MAX_SAFE_INTEGER,o[M][1]=0);o.sort(nw);const p=f.morphAttributes.position,u=f.morphAttributes.normal;let v=0;for(let M=0;M<8;M++){const P=o[M],A=P[0],T=P[1];A!==Number.MAX_SAFE_INTEGER&&T?(p&&f.getAttribute("morphTarget"+M)!==p[A]&&f.setAttribute("morphTarget"+M,p[A]),u&&f.getAttribute("morphNormal"+M)!==u[A]&&f.setAttribute("morphNormal"+M,u[A]),r[M]=T,v+=T):(p&&f.hasAttribute("morphTarget"+M)===!0&&f.deleteAttribute("morphTarget"+M),u&&f.hasAttribute("morphNormal"+M)===!0&&f.deleteAttribute("morphNormal"+M),r[M]=0)}const g=f.morphTargetsRelative?1:1-v;d.getUniforms().setValue(t,"morphTargetBaseInfluence",g),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function sw(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class Tv extends Jt{constructor(e,n,i,r,s,a,o,l,c,f){if(f=f!==void 0?f:Dr,f!==Dr&&f!==Ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Dr&&(i=Xi),i===void 0&&f===Ys&&(i=Nr),super(null,r,s,a,o,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:an,this.minFilter=l!==void 0?l:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const bv=new Jt,Av=new Tv(1,1);Av.compareFunction=dv;const Cv=new vv,Rv=new BS,Pv=new Ev,lm=[],cm=[],um=new Float32Array(16),dm=new Float32Array(9),fm=new Float32Array(4);function ea(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=lm[r];if(s===void 0&&(s=new Float32Array(r),lm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Dt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function It(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function vc(t,e){let n=cm[e];n===void 0&&(n=new Int32Array(e),cm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function aw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function ow(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2fv(this.addr,e),It(n,e)}}function lw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Dt(n,e))return;t.uniform3fv(this.addr,e),It(n,e)}}function cw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4fv(this.addr,e),It(n,e)}}function uw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),It(n,e)}else{if(Dt(n,i))return;fm.set(i),t.uniformMatrix2fv(this.addr,!1,fm),It(n,i)}}function dw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),It(n,e)}else{if(Dt(n,i))return;dm.set(i),t.uniformMatrix3fv(this.addr,!1,dm),It(n,i)}}function fw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),It(n,e)}else{if(Dt(n,i))return;um.set(i),t.uniformMatrix4fv(this.addr,!1,um),It(n,i)}}function hw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function pw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2iv(this.addr,e),It(n,e)}}function mw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3iv(this.addr,e),It(n,e)}}function gw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4iv(this.addr,e),It(n,e)}}function vw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function _w(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2uiv(this.addr,e),It(n,e)}}function xw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3uiv(this.addr,e),It(n,e)}}function yw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4uiv(this.addr,e),It(n,e)}}function Sw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?Av:bv;n.setTexture2D(e||s,r)}function Mw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Rv,r)}function Ew(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Pv,r)}function ww(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Cv,r)}function Tw(t){switch(t){case 5126:return aw;case 35664:return ow;case 35665:return lw;case 35666:return cw;case 35674:return uw;case 35675:return dw;case 35676:return fw;case 5124:case 35670:return hw;case 35667:case 35671:return pw;case 35668:case 35672:return mw;case 35669:case 35673:return gw;case 5125:return vw;case 36294:return _w;case 36295:return xw;case 36296:return yw;case 35678:case 36198:case 36298:case 36306:case 35682:return Sw;case 35679:case 36299:case 36307:return Mw;case 35680:case 36300:case 36308:case 36293:return Ew;case 36289:case 36303:case 36311:case 36292:return ww}}function bw(t,e){t.uniform1fv(this.addr,e)}function Aw(t,e){const n=ea(e,this.size,2);t.uniform2fv(this.addr,n)}function Cw(t,e){const n=ea(e,this.size,3);t.uniform3fv(this.addr,n)}function Rw(t,e){const n=ea(e,this.size,4);t.uniform4fv(this.addr,n)}function Pw(t,e){const n=ea(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Lw(t,e){const n=ea(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Nw(t,e){const n=ea(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Dw(t,e){t.uniform1iv(this.addr,e)}function Iw(t,e){t.uniform2iv(this.addr,e)}function Uw(t,e){t.uniform3iv(this.addr,e)}function Fw(t,e){t.uniform4iv(this.addr,e)}function Ow(t,e){t.uniform1uiv(this.addr,e)}function kw(t,e){t.uniform2uiv(this.addr,e)}function zw(t,e){t.uniform3uiv(this.addr,e)}function Bw(t,e){t.uniform4uiv(this.addr,e)}function Hw(t,e,n){const i=this.cache,r=e.length,s=vc(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||bv,s[a])}function Vw(t,e,n){const i=this.cache,r=e.length,s=vc(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Rv,s[a])}function Gw(t,e,n){const i=this.cache,r=e.length,s=vc(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Pv,s[a])}function Ww(t,e,n){const i=this.cache,r=e.length,s=vc(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Cv,s[a])}function jw(t){switch(t){case 5126:return bw;case 35664:return Aw;case 35665:return Cw;case 35666:return Rw;case 35674:return Pw;case 35675:return Lw;case 35676:return Nw;case 5124:case 35670:return Dw;case 35667:case 35671:return Iw;case 35668:case 35672:return Uw;case 35669:case 35673:return Fw;case 5125:return Ow;case 36294:return kw;case 36295:return zw;case 36296:return Bw;case 35678:case 36198:case 36298:case 36306:case 35682:return Hw;case 35679:case 36299:case 36307:return Vw;case 35680:case 36300:case 36308:case 36293:return Gw;case 36289:case 36303:case 36311:case 36292:return Ww}}class Xw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Tw(n.type)}}class qw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=jw(n.type)}}class $w{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Tu=/(\w+)(\])?(\[|\.)?/g;function hm(t,e){t.seq.push(e),t.map[e.id]=e}function Yw(t,e,n){const i=t.name,r=i.length;for(Tu.lastIndex=0;;){const s=Tu.exec(i),a=Tu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){hm(n,c===void 0?new Xw(o,t,e):new qw(o,t,e));break}else{let d=n.map[o];d===void 0&&(d=new $w(o),hm(n,d)),n=d}}}class vl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);Yw(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function pm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Kw=37297;let Zw=0;function Qw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function Jw(t){const e=ct.getPrimaries(ct.workingColorSpace),n=ct.getPrimaries(t);let i;switch(e===n?i="":e===ql&&n===Xl?i="LinearDisplayP3ToLinearSRGB":e===Xl&&n===ql&&(i="LinearSRGBToLinearDisplayP3"),t){case dr:case mc:return[i,"LinearTransferOETF"];case ti:case Ff:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function mm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Qw(t.getShaderSource(e),a)}else return r}function eT(t,e){const n=Jw(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function tT(t,e){let n;switch(e){case $y:n="Linear";break;case Yy:n="Reinhard";break;case Ky:n="OptimizedCineon";break;case Zy:n="ACESFilmic";break;case Jy:n="AgX";break;case eS:n="Neutral";break;case Qy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function nT(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.alphaToCoverage||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Rs).join(`
`)}function iT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rs).join(`
`)}function rT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function sT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Rs(t){return t!==""}function gm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ud(t){return t.replace(aT,lT)}const oT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function lT(t,e){let n=Qe[e];if(n===void 0){const i=oT.get(e);if(i!==void 0)n=Qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ud(n)}const cT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _m(t){return t.replace(cT,uT)}function uT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function xm(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function dT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===If?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===My?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===pi&&(e="SHADOWMAP_TYPE_VSM"),e}function fT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case qs:case $s:e="ENVMAP_TYPE_CUBE";break;case pc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case $s:e="ENVMAP_MODE_REFRACTION";break}return e}function pT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case nv:e="ENVMAP_BLENDING_MULTIPLY";break;case Xy:e="ENVMAP_BLENDING_MIX";break;case qy:e="ENVMAP_BLENDING_ADD";break}return e}function mT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function gT(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=dT(n),c=fT(n),f=hT(n),d=pT(n),h=mT(n),m=n.isWebGL2?"":nT(n),_=iT(n),x=rT(s),p=r.createProgram();let u,v,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Rs).join(`
`),u.length>0&&(u+=`
`),v=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Rs).join(`
`),v.length>0&&(v+=`
`)):(u=[xm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rs).join(`
`),v=[m,xm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==nr?"#define TONE_MAPPING":"",n.toneMapping!==nr?Qe.tonemapping_pars_fragment:"",n.toneMapping!==nr?tT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,eT("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Rs).join(`
`)),a=Ud(a),a=gm(a,n),a=vm(a,n),o=Ud(o),o=gm(o,n),o=vm(o,n),a=_m(a),o=_m(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,u=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,v=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Up?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Up?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const M=g+u+a,P=g+v+o,A=pm(r,r.VERTEX_SHADER,M),T=pm(r,r.FRAGMENT_SHADER,P);r.attachShader(p,A),r.attachShader(p,T),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function N(Q){if(t.debug.checkShaderErrors){const ee=r.getProgramInfoLog(p).trim(),I=r.getShaderInfoLog(A).trim(),J=r.getShaderInfoLog(T).trim();let B=!0,H=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(B=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,p,A,T);else{const D=mm(r,A,"vertex"),F=mm(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+Q.name+`
Material Type: `+Q.type+`

Program Info Log: `+ee+`
`+D+`
`+F)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(I===""||J==="")&&(H=!1);H&&(Q.diagnostics={runnable:B,programLog:ee,vertexShader:{log:I,prefix:u},fragmentShader:{log:J,prefix:v}})}r.deleteShader(A),r.deleteShader(T),re=new vl(r,p),y=sT(r,p)}let re;this.getUniforms=function(){return re===void 0&&N(this),re};let y;this.getAttributes=function(){return y===void 0&&N(this),y};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(p,Kw)),C},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Zw++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=A,this.fragmentShader=T,this}let vT=0;class _T{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new xT(e),n.set(e,i)),i}}class xT{constructor(e){this.id=vT++,this.code=e,this.usedTimes=0}}function yT(t,e,n,i,r,s,a){const o=new kf,l=new _T,c=new Set,f=[],d=r.isWebGL2,h=r.logarithmicDepthBuffer,m=r.vertexTextures;let _=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return c.add(y),y===0?"uv":`uv${y}`}function u(y,C,Q,ee,I){const J=ee.fog,B=I.geometry,H=y.isMeshStandardMaterial?ee.environment:null,D=(y.isMeshStandardMaterial?n:e).get(y.envMap||H),F=D&&D.mapping===pc?D.image.height:null,z=x[y.type];y.precision!==null&&(_=r.getMaxPrecision(y.precision),_!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",_,"instead."));const K=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ae=K!==void 0?K.length:0;let Ae=0;B.morphAttributes.position!==void 0&&(Ae=1),B.morphAttributes.normal!==void 0&&(Ae=2),B.morphAttributes.color!==void 0&&(Ae=3);let W,j,oe,Se;if(z){const ye=ii[z];W=ye.vertexShader,j=ye.fragmentShader}else W=y.vertexShader,j=y.fragmentShader,l.update(y),oe=l.getVertexShaderID(y),Se=l.getFragmentShaderID(y);const _e=t.getRenderTarget(),xe=I.isInstancedMesh===!0,He=I.isBatchedMesh===!0,Ee=!!y.map,G=!!y.matcap,vt=!!D,Re=!!y.aoMap,Ve=!!y.lightMap,de=!!y.bumpMap,Ue=!!y.normalMap,Ge=!!y.displacementMap,Le=!!y.emissiveMap,Xe=!!y.metalnessMap,L=!!y.roughnessMap,w=y.anisotropy>0,te=y.clearcoat>0,se=y.iridescence>0,ce=y.sheen>0,le=y.transmission>0,je=w&&!!y.anisotropyMap,Fe=te&&!!y.clearcoatMap,pe=te&&!!y.clearcoatNormalMap,ge=te&&!!y.clearcoatRoughnessMap,ze=se&&!!y.iridescenceMap,fe=se&&!!y.iridescenceThicknessMap,ht=ce&&!!y.sheenColorMap,Ye=ce&&!!y.sheenRoughnessMap,Ne=!!y.specularMap,be=!!y.specularColorMap,Pe=!!y.specularIntensityMap,E=le&&!!y.transmissionMap,k=le&&!!y.thicknessMap,ie=!!y.gradientMap,R=!!y.alphaMap,q=y.alphaTest>0,U=!!y.alphaHash,X=!!y.extensions;let ne=nr;y.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(ne=t.toneMapping);const he={isWebGL2:d,shaderID:z,shaderType:y.type,shaderName:y.name,vertexShader:W,fragmentShader:j,defines:y.defines,customVertexShaderID:oe,customFragmentShaderID:Se,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:_,batching:He,instancing:xe,instancingColor:xe&&I.instanceColor!==null,instancingMorph:xe&&I.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:_e===null?t.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:dr,alphaToCoverage:!!y.alphaToCoverage,map:Ee,matcap:G,envMap:vt,envMapMode:vt&&D.mapping,envMapCubeUVHeight:F,aoMap:Re,lightMap:Ve,bumpMap:de,normalMap:Ue,displacementMap:m&&Ge,emissiveMap:Le,normalMapObjectSpace:Ue&&y.normalMapType===hS,normalMapTangentSpace:Ue&&y.normalMapType===fS,metalnessMap:Xe,roughnessMap:L,anisotropy:w,anisotropyMap:je,clearcoat:te,clearcoatMap:Fe,clearcoatNormalMap:pe,clearcoatRoughnessMap:ge,iridescence:se,iridescenceMap:ze,iridescenceThicknessMap:fe,sheen:ce,sheenColorMap:ht,sheenRoughnessMap:Ye,specularMap:Ne,specularColorMap:be,specularIntensityMap:Pe,transmission:le,transmissionMap:E,thicknessMap:k,gradientMap:ie,opaque:y.transparent===!1&&y.blending===Os&&y.alphaToCoverage===!1,alphaMap:R,alphaTest:q,alphaHash:U,combine:y.combine,mapUv:Ee&&p(y.map.channel),aoMapUv:Re&&p(y.aoMap.channel),lightMapUv:Ve&&p(y.lightMap.channel),bumpMapUv:de&&p(y.bumpMap.channel),normalMapUv:Ue&&p(y.normalMap.channel),displacementMapUv:Ge&&p(y.displacementMap.channel),emissiveMapUv:Le&&p(y.emissiveMap.channel),metalnessMapUv:Xe&&p(y.metalnessMap.channel),roughnessMapUv:L&&p(y.roughnessMap.channel),anisotropyMapUv:je&&p(y.anisotropyMap.channel),clearcoatMapUv:Fe&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:pe&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&p(y.sheenRoughnessMap.channel),specularMapUv:Ne&&p(y.specularMap.channel),specularColorMapUv:be&&p(y.specularColorMap.channel),specularIntensityMapUv:Pe&&p(y.specularIntensityMap.channel),transmissionMapUv:E&&p(y.transmissionMap.channel),thicknessMapUv:k&&p(y.thicknessMap.channel),alphaMapUv:R&&p(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Ue||w),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!B.attributes.uv&&(Ee||R),fog:!!J,useFog:y.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:I.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:Ae,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&Q.length>0,shadowMapType:t.shadowMap.type,toneMapping:ne,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Ee&&y.map.isVideoTexture===!0&&ct.getTransfer(y.map.colorSpace)===mt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===si,flipSided:y.side===Qt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:X&&y.extensions.derivatives===!0,extensionFragDepth:X&&y.extensions.fragDepth===!0,extensionDrawBuffers:X&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:X&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:X&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:X&&y.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return he.vertexUv1s=c.has(1),he.vertexUv2s=c.has(2),he.vertexUv3s=c.has(3),c.clear(),he}function v(y){const C=[];if(y.shaderID?C.push(y.shaderID):(C.push(y.customVertexShaderID),C.push(y.customFragmentShaderID)),y.defines!==void 0)for(const Q in y.defines)C.push(Q),C.push(y.defines[Q]);return y.isRawShaderMaterial===!1&&(g(C,y),M(C,y),C.push(t.outputColorSpace)),C.push(y.customProgramCacheKey),C.join()}function g(y,C){y.push(C.precision),y.push(C.outputColorSpace),y.push(C.envMapMode),y.push(C.envMapCubeUVHeight),y.push(C.mapUv),y.push(C.alphaMapUv),y.push(C.lightMapUv),y.push(C.aoMapUv),y.push(C.bumpMapUv),y.push(C.normalMapUv),y.push(C.displacementMapUv),y.push(C.emissiveMapUv),y.push(C.metalnessMapUv),y.push(C.roughnessMapUv),y.push(C.anisotropyMapUv),y.push(C.clearcoatMapUv),y.push(C.clearcoatNormalMapUv),y.push(C.clearcoatRoughnessMapUv),y.push(C.iridescenceMapUv),y.push(C.iridescenceThicknessMapUv),y.push(C.sheenColorMapUv),y.push(C.sheenRoughnessMapUv),y.push(C.specularMapUv),y.push(C.specularColorMapUv),y.push(C.specularIntensityMapUv),y.push(C.transmissionMapUv),y.push(C.thicknessMapUv),y.push(C.combine),y.push(C.fogExp2),y.push(C.sizeAttenuation),y.push(C.morphTargetsCount),y.push(C.morphAttributeCount),y.push(C.numDirLights),y.push(C.numPointLights),y.push(C.numSpotLights),y.push(C.numSpotLightMaps),y.push(C.numHemiLights),y.push(C.numRectAreaLights),y.push(C.numDirLightShadows),y.push(C.numPointLightShadows),y.push(C.numSpotLightShadows),y.push(C.numSpotLightShadowsWithMaps),y.push(C.numLightProbes),y.push(C.shadowMapType),y.push(C.toneMapping),y.push(C.numClippingPlanes),y.push(C.numClipIntersection),y.push(C.depthPacking)}function M(y,C){o.disableAll(),C.isWebGL2&&o.enable(0),C.supportsVertexTextures&&o.enable(1),C.instancing&&o.enable(2),C.instancingColor&&o.enable(3),C.instancingMorph&&o.enable(4),C.matcap&&o.enable(5),C.envMap&&o.enable(6),C.normalMapObjectSpace&&o.enable(7),C.normalMapTangentSpace&&o.enable(8),C.clearcoat&&o.enable(9),C.iridescence&&o.enable(10),C.alphaTest&&o.enable(11),C.vertexColors&&o.enable(12),C.vertexAlphas&&o.enable(13),C.vertexUv1s&&o.enable(14),C.vertexUv2s&&o.enable(15),C.vertexUv3s&&o.enable(16),C.vertexTangents&&o.enable(17),C.anisotropy&&o.enable(18),C.alphaHash&&o.enable(19),C.batching&&o.enable(20),y.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.skinning&&o.enable(4),C.morphTargets&&o.enable(5),C.morphNormals&&o.enable(6),C.morphColors&&o.enable(7),C.premultipliedAlpha&&o.enable(8),C.shadowMapEnabled&&o.enable(9),C.useLegacyLights&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.alphaToCoverage&&o.enable(20),y.push(o.mask)}function P(y){const C=x[y.type];let Q;if(C){const ee=ii[C];Q=JS.clone(ee.uniforms)}else Q=y.uniforms;return Q}function A(y,C){let Q;for(let ee=0,I=f.length;ee<I;ee++){const J=f[ee];if(J.cacheKey===C){Q=J,++Q.usedTimes;break}}return Q===void 0&&(Q=new gT(t,C,y,s),f.push(Q)),Q}function T(y){if(--y.usedTimes===0){const C=f.indexOf(y);f[C]=f[f.length-1],f.pop(),y.destroy()}}function N(y){l.remove(y)}function re(){l.dispose()}return{getParameters:u,getProgramCacheKey:v,getUniforms:P,acquireProgram:A,releaseProgram:T,releaseShaderCache:N,programs:f,dispose:re}}function ST(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function MT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function ym(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Sm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d,h,m,_,x,p){let u=t[e];return u===void 0?(u={id:d.id,object:d,geometry:h,material:m,groupOrder:_,renderOrder:d.renderOrder,z:x,group:p},t[e]=u):(u.id=d.id,u.object=d,u.geometry=h,u.material=m,u.groupOrder=_,u.renderOrder=d.renderOrder,u.z=x,u.group=p),e++,u}function o(d,h,m,_,x,p){const u=a(d,h,m,_,x,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):n.push(u)}function l(d,h,m,_,x,p){const u=a(d,h,m,_,x,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):n.unshift(u)}function c(d,h){n.length>1&&n.sort(d||MT),i.length>1&&i.sort(h||ym),r.length>1&&r.sort(h||ym)}function f(){for(let d=e,h=t.length;d<h;d++){const m=t[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:f,sort:c}}function ET(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Sm,t.set(i,[a])):r>=s.length?(a=new Sm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function wT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new O,color:new rt};break;case"SpotLight":n={position:new O,direction:new O,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new rt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":n={color:new rt,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function TT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let bT=0;function AT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function CT(t,e){const n=new wT,i=TT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new O);const s=new O,a=new ft,o=new ft;function l(f,d){let h=0,m=0,_=0;for(let Q=0;Q<9;Q++)r.probe[Q].set(0,0,0);let x=0,p=0,u=0,v=0,g=0,M=0,P=0,A=0,T=0,N=0,re=0;f.sort(AT);const y=d===!0?Math.PI:1;for(let Q=0,ee=f.length;Q<ee;Q++){const I=f[Q],J=I.color,B=I.intensity,H=I.distance,D=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=J.r*B*y,m+=J.g*B*y,_+=J.b*B*y;else if(I.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(I.sh.coefficients[F],B);re++}else if(I.isDirectionalLight){const F=n.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity*y),I.castShadow){const z=I.shadow,K=i.get(I);K.shadowBias=z.bias,K.shadowNormalBias=z.normalBias,K.shadowRadius=z.radius,K.shadowMapSize=z.mapSize,r.directionalShadow[x]=K,r.directionalShadowMap[x]=D,r.directionalShadowMatrix[x]=I.shadow.matrix,M++}r.directional[x]=F,x++}else if(I.isSpotLight){const F=n.get(I);F.position.setFromMatrixPosition(I.matrixWorld),F.color.copy(J).multiplyScalar(B*y),F.distance=H,F.coneCos=Math.cos(I.angle),F.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),F.decay=I.decay,r.spot[u]=F;const z=I.shadow;if(I.map&&(r.spotLightMap[T]=I.map,T++,z.updateMatrices(I),I.castShadow&&N++),r.spotLightMatrix[u]=z.matrix,I.castShadow){const K=i.get(I);K.shadowBias=z.bias,K.shadowNormalBias=z.normalBias,K.shadowRadius=z.radius,K.shadowMapSize=z.mapSize,r.spotShadow[u]=K,r.spotShadowMap[u]=D,A++}u++}else if(I.isRectAreaLight){const F=n.get(I);F.color.copy(J).multiplyScalar(B),F.halfWidth.set(I.width*.5,0,0),F.halfHeight.set(0,I.height*.5,0),r.rectArea[v]=F,v++}else if(I.isPointLight){const F=n.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity*y),F.distance=I.distance,F.decay=I.decay,I.castShadow){const z=I.shadow,K=i.get(I);K.shadowBias=z.bias,K.shadowNormalBias=z.normalBias,K.shadowRadius=z.radius,K.shadowMapSize=z.mapSize,K.shadowCameraNear=z.camera.near,K.shadowCameraFar=z.camera.far,r.pointShadow[p]=K,r.pointShadowMap[p]=D,r.pointShadowMatrix[p]=I.shadow.matrix,P++}r.point[p]=F,p++}else if(I.isHemisphereLight){const F=n.get(I);F.skyColor.copy(I.color).multiplyScalar(B*y),F.groundColor.copy(I.groundColor).multiplyScalar(B*y),r.hemi[g]=F,g++}}v>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=me.LTC_FLOAT_1,r.rectAreaLTC2=me.LTC_FLOAT_2):(r.rectAreaLTC1=me.LTC_HALF_1,r.rectAreaLTC2=me.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=me.LTC_FLOAT_1,r.rectAreaLTC2=me.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=me.LTC_HALF_1,r.rectAreaLTC2=me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=_;const C=r.hash;(C.directionalLength!==x||C.pointLength!==p||C.spotLength!==u||C.rectAreaLength!==v||C.hemiLength!==g||C.numDirectionalShadows!==M||C.numPointShadows!==P||C.numSpotShadows!==A||C.numSpotMaps!==T||C.numLightProbes!==re)&&(r.directional.length=x,r.spot.length=u,r.rectArea.length=v,r.point.length=p,r.hemi.length=g,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=A+T-N,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=re,C.directionalLength=x,C.pointLength=p,C.spotLength=u,C.rectAreaLength=v,C.hemiLength=g,C.numDirectionalShadows=M,C.numPointShadows=P,C.numSpotShadows=A,C.numSpotMaps=T,C.numLightProbes=re,r.version=bT++)}function c(f,d){let h=0,m=0,_=0,x=0,p=0;const u=d.matrixWorldInverse;for(let v=0,g=f.length;v<g;v++){const M=f[v];if(M.isDirectionalLight){const P=r.directional[h];P.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(u),h++}else if(M.isSpotLight){const P=r.spot[_];P.position.setFromMatrixPosition(M.matrixWorld),P.position.applyMatrix4(u),P.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(u),_++}else if(M.isRectAreaLight){const P=r.rectArea[x];P.position.setFromMatrixPosition(M.matrixWorld),P.position.applyMatrix4(u),o.identity(),a.copy(M.matrixWorld),a.premultiply(u),o.extractRotation(a),P.halfWidth.set(M.width*.5,0,0),P.halfHeight.set(0,M.height*.5,0),P.halfWidth.applyMatrix4(o),P.halfHeight.applyMatrix4(o),x++}else if(M.isPointLight){const P=r.point[m];P.position.setFromMatrixPosition(M.matrixWorld),P.position.applyMatrix4(u),m++}else if(M.isHemisphereLight){const P=r.hemi[p];P.direction.setFromMatrixPosition(M.matrixWorld),P.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:r}}function Mm(t,e){const n=new CT(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(d){i.push(d)}function o(d){r.push(d)}function l(d){n.setup(i,d)}function c(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function RT(t,e){let n=new WeakMap;function i(s,a=0){const o=n.get(s);let l;return o===void 0?(l=new Mm(t,e),n.set(s,[l])):a>=o.length?(l=new Mm(t,e),o.push(l)):l=o[a],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class PT extends jr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class LT extends jr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const NT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DT=`uniform sampler2D shadow_pass;
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
}`;function IT(t,e,n){let i=new zf;const r=new Ce,s=new Ce,a=new yt,o=new PT({depthPacking:dS}),l=new LT,c={},f=n.maxTextureSize,d={[ar]:Qt,[Qt]:ar,[si]:si},h=new or({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:NT,fragmentShader:DT}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new vn;_.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new on(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=If;let u=this.type;this.render=function(A,T,N){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const re=t.getRenderTarget(),y=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),Q=t.state;Q.setBlending(tr),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const ee=u!==pi&&this.type===pi,I=u===pi&&this.type!==pi;for(let J=0,B=A.length;J<B;J++){const H=A[J],D=H.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const F=D.getFrameExtents();if(r.multiply(F),s.copy(D.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/F.x),r.x=s.x*F.x,D.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/F.y),r.y=s.y*F.y,D.mapSize.y=s.y)),D.map===null||ee===!0||I===!0){const K=this.type!==pi?{minFilter:an,magFilter:an}:{};D.map!==null&&D.map.dispose(),D.map=new Br(r.x,r.y,K),D.map.texture.name=H.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const z=D.getViewportCount();for(let K=0;K<z;K++){const ae=D.getViewport(K);a.set(s.x*ae.x,s.y*ae.y,s.x*ae.z,s.y*ae.w),Q.viewport(a),D.updateMatrices(H,K),i=D.getFrustum(),M(T,N,D.camera,H,this.type)}D.isPointLightShadow!==!0&&this.type===pi&&v(D,N),D.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(re,y,C)};function v(A,T){const N=e.update(x);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Br(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(T,null,N,h,x,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(T,null,N,m,x,null)}function g(A,T,N,re){let y=null;const C=N.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)y=C;else if(y=N.isPointLight===!0?l:o,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const Q=y.uuid,ee=T.uuid;let I=c[Q];I===void 0&&(I={},c[Q]=I);let J=I[ee];J===void 0&&(J=y.clone(),I[ee]=J,T.addEventListener("dispose",P)),y=J}if(y.visible=T.visible,y.wireframe=T.wireframe,re===pi?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:d[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,N.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const Q=t.properties.get(y);Q.light=N}return y}function M(A,T,N,re,y){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===pi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,A.matrixWorld);const ee=e.update(A),I=A.material;if(Array.isArray(I)){const J=ee.groups;for(let B=0,H=J.length;B<H;B++){const D=J[B],F=I[D.materialIndex];if(F&&F.visible){const z=g(A,F,re,y);A.onBeforeShadow(t,A,T,N,ee,z,D),t.renderBufferDirect(N,null,ee,z,A,D),A.onAfterShadow(t,A,T,N,ee,z,D)}}}else if(I.visible){const J=g(A,I,re,y);A.onBeforeShadow(t,A,T,N,ee,J,null),t.renderBufferDirect(N,null,ee,J,A,null),A.onAfterShadow(t,A,T,N,ee,J,null)}}const Q=A.children;for(let ee=0,I=Q.length;ee<I;ee++)M(Q[ee],T,N,re,y)}function P(A){A.target.removeEventListener("dispose",P);for(const N in c){const re=c[N],y=A.target.uuid;y in re&&(re[y].dispose(),delete re[y])}}}function UT(t,e,n){const i=n.isWebGL2;function r(){let R=!1;const q=new yt;let U=null;const X=new yt(0,0,0,0);return{setMask:function(ne){U!==ne&&!R&&(t.colorMask(ne,ne,ne,ne),U=ne)},setLocked:function(ne){R=ne},setClear:function(ne,he,ye,ve,We){We===!0&&(ne*=ve,he*=ve,ye*=ve),q.set(ne,he,ye,ve),X.equals(q)===!1&&(t.clearColor(ne,he,ye,ve),X.copy(q))},reset:function(){R=!1,U=null,X.set(-1,0,0,0)}}}function s(){let R=!1,q=null,U=null,X=null;return{setTest:function(ne){ne?xe(t.DEPTH_TEST):He(t.DEPTH_TEST)},setMask:function(ne){q!==ne&&!R&&(t.depthMask(ne),q=ne)},setFunc:function(ne){if(U!==ne){switch(ne){case zy:t.depthFunc(t.NEVER);break;case By:t.depthFunc(t.ALWAYS);break;case Hy:t.depthFunc(t.LESS);break;case Wl:t.depthFunc(t.LEQUAL);break;case Vy:t.depthFunc(t.EQUAL);break;case Gy:t.depthFunc(t.GEQUAL);break;case Wy:t.depthFunc(t.GREATER);break;case jy:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}U=ne}},setLocked:function(ne){R=ne},setClear:function(ne){X!==ne&&(t.clearDepth(ne),X=ne)},reset:function(){R=!1,q=null,U=null,X=null}}}function a(){let R=!1,q=null,U=null,X=null,ne=null,he=null,ye=null,ve=null,We=null;return{setTest:function(Ie){R||(Ie?xe(t.STENCIL_TEST):He(t.STENCIL_TEST))},setMask:function(Ie){q!==Ie&&!R&&(t.stencilMask(Ie),q=Ie)},setFunc:function(Ie,ke,Oe){(U!==Ie||X!==ke||ne!==Oe)&&(t.stencilFunc(Ie,ke,Oe),U=Ie,X=ke,ne=Oe)},setOp:function(Ie,ke,Oe){(he!==Ie||ye!==ke||ve!==Oe)&&(t.stencilOp(Ie,ke,Oe),he=Ie,ye=ke,ve=Oe)},setLocked:function(Ie){R=Ie},setClear:function(Ie){We!==Ie&&(t.clearStencil(Ie),We=Ie)},reset:function(){R=!1,q=null,U=null,X=null,ne=null,he=null,ye=null,ve=null,We=null}}}const o=new r,l=new s,c=new a,f=new WeakMap,d=new WeakMap;let h={},m={},_=new WeakMap,x=[],p=null,u=!1,v=null,g=null,M=null,P=null,A=null,T=null,N=null,re=new rt(0,0,0),y=0,C=!1,Q=null,ee=null,I=null,J=null,B=null;const H=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,F=0;const z=t.getParameter(t.VERSION);z.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(z)[1]),D=F>=1):z.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),D=F>=2);let K=null,ae={};const Ae=t.getParameter(t.SCISSOR_BOX),W=t.getParameter(t.VIEWPORT),j=new yt().fromArray(Ae),oe=new yt().fromArray(W);function Se(R,q,U,X){const ne=new Uint8Array(4),he=t.createTexture();t.bindTexture(R,he),t.texParameteri(R,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(R,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ye=0;ye<U;ye++)i&&(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)?t.texImage3D(q,0,t.RGBA,1,1,X,0,t.RGBA,t.UNSIGNED_BYTE,ne):t.texImage2D(q+ye,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ne);return he}const _e={};_e[t.TEXTURE_2D]=Se(t.TEXTURE_2D,t.TEXTURE_2D,1),_e[t.TEXTURE_CUBE_MAP]=Se(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(_e[t.TEXTURE_2D_ARRAY]=Se(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),_e[t.TEXTURE_3D]=Se(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),xe(t.DEPTH_TEST),l.setFunc(Wl),Ge(!1),Le(ip),xe(t.CULL_FACE),de(tr);function xe(R){h[R]!==!0&&(t.enable(R),h[R]=!0)}function He(R){h[R]!==!1&&(t.disable(R),h[R]=!1)}function Ee(R,q){return m[R]!==q?(t.bindFramebuffer(R,q),m[R]=q,i&&(R===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=q),R===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=q)),!0):!1}function G(R,q){let U=x,X=!1;if(R){U=_.get(q),U===void 0&&(U=[],_.set(q,U));const ne=R.textures;if(U.length!==ne.length||U[0]!==t.COLOR_ATTACHMENT0){for(let he=0,ye=ne.length;he<ye;he++)U[he]=t.COLOR_ATTACHMENT0+he;U.length=ne.length,X=!0}}else U[0]!==t.BACK&&(U[0]=t.BACK,X=!0);if(X)if(n.isWebGL2)t.drawBuffers(U);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(U);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function vt(R){return p!==R?(t.useProgram(R),p=R,!0):!1}const Re={[Er]:t.FUNC_ADD,[wy]:t.FUNC_SUBTRACT,[Ty]:t.FUNC_REVERSE_SUBTRACT};if(i)Re[ap]=t.MIN,Re[op]=t.MAX;else{const R=e.get("EXT_blend_minmax");R!==null&&(Re[ap]=R.MIN_EXT,Re[op]=R.MAX_EXT)}const Ve={[by]:t.ZERO,[Ay]:t.ONE,[Cy]:t.SRC_COLOR,[Ad]:t.SRC_ALPHA,[Iy]:t.SRC_ALPHA_SATURATE,[Ny]:t.DST_COLOR,[Py]:t.DST_ALPHA,[Ry]:t.ONE_MINUS_SRC_COLOR,[Cd]:t.ONE_MINUS_SRC_ALPHA,[Dy]:t.ONE_MINUS_DST_COLOR,[Ly]:t.ONE_MINUS_DST_ALPHA,[Uy]:t.CONSTANT_COLOR,[Fy]:t.ONE_MINUS_CONSTANT_COLOR,[Oy]:t.CONSTANT_ALPHA,[ky]:t.ONE_MINUS_CONSTANT_ALPHA};function de(R,q,U,X,ne,he,ye,ve,We,Ie){if(R===tr){u===!0&&(He(t.BLEND),u=!1);return}if(u===!1&&(xe(t.BLEND),u=!0),R!==Ey){if(R!==v||Ie!==C){if((g!==Er||A!==Er)&&(t.blendEquation(t.FUNC_ADD),g=Er,A=Er),Ie)switch(R){case Os:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case bd:t.blendFunc(t.ONE,t.ONE);break;case rp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case sp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Os:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case bd:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case rp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case sp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}M=null,P=null,T=null,N=null,re.set(0,0,0),y=0,v=R,C=Ie}return}ne=ne||q,he=he||U,ye=ye||X,(q!==g||ne!==A)&&(t.blendEquationSeparate(Re[q],Re[ne]),g=q,A=ne),(U!==M||X!==P||he!==T||ye!==N)&&(t.blendFuncSeparate(Ve[U],Ve[X],Ve[he],Ve[ye]),M=U,P=X,T=he,N=ye),(ve.equals(re)===!1||We!==y)&&(t.blendColor(ve.r,ve.g,ve.b,We),re.copy(ve),y=We),v=R,C=!1}function Ue(R,q){R.side===si?He(t.CULL_FACE):xe(t.CULL_FACE);let U=R.side===Qt;q&&(U=!U),Ge(U),R.blending===Os&&R.transparent===!1?de(tr):de(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),o.setMask(R.colorWrite);const X=R.stencilWrite;c.setTest(X),X&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),L(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?xe(t.SAMPLE_ALPHA_TO_COVERAGE):He(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(R){Q!==R&&(R?t.frontFace(t.CW):t.frontFace(t.CCW),Q=R)}function Le(R){R!==yy?(xe(t.CULL_FACE),R!==ee&&(R===ip?t.cullFace(t.BACK):R===Sy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):He(t.CULL_FACE),ee=R}function Xe(R){R!==I&&(D&&t.lineWidth(R),I=R)}function L(R,q,U){R?(xe(t.POLYGON_OFFSET_FILL),(J!==q||B!==U)&&(t.polygonOffset(q,U),J=q,B=U)):He(t.POLYGON_OFFSET_FILL)}function w(R){R?xe(t.SCISSOR_TEST):He(t.SCISSOR_TEST)}function te(R){R===void 0&&(R=t.TEXTURE0+H-1),K!==R&&(t.activeTexture(R),K=R)}function se(R,q,U){U===void 0&&(K===null?U=t.TEXTURE0+H-1:U=K);let X=ae[U];X===void 0&&(X={type:void 0,texture:void 0},ae[U]=X),(X.type!==R||X.texture!==q)&&(K!==U&&(t.activeTexture(U),K=U),t.bindTexture(R,q||_e[R]),X.type=R,X.texture=q)}function ce(){const R=ae[K];R!==void 0&&R.type!==void 0&&(t.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function le(){try{t.compressedTexImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function je(){try{t.compressedTexImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Fe(){try{t.texSubImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function pe(){try{t.texSubImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ge(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ze(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function fe(){try{t.texStorage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ht(){try{t.texStorage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ye(){try{t.texImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ne(){try{t.texImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function be(R){j.equals(R)===!1&&(t.scissor(R.x,R.y,R.z,R.w),j.copy(R))}function Pe(R){oe.equals(R)===!1&&(t.viewport(R.x,R.y,R.z,R.w),oe.copy(R))}function E(R,q){let U=d.get(q);U===void 0&&(U=new WeakMap,d.set(q,U));let X=U.get(R);X===void 0&&(X=t.getUniformBlockIndex(q,R.name),U.set(R,X))}function k(R,q){const X=d.get(q).get(R);f.get(q)!==X&&(t.uniformBlockBinding(q,X,R.__bindingPointIndex),f.set(q,X))}function ie(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},K=null,ae={},m={},_=new WeakMap,x=[],p=null,u=!1,v=null,g=null,M=null,P=null,A=null,T=null,N=null,re=new rt(0,0,0),y=0,C=!1,Q=null,ee=null,I=null,J=null,B=null,j.set(0,0,t.canvas.width,t.canvas.height),oe.set(0,0,t.canvas.width,t.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:xe,disable:He,bindFramebuffer:Ee,drawBuffers:G,useProgram:vt,setBlending:de,setMaterial:Ue,setFlipSided:Ge,setCullFace:Le,setLineWidth:Xe,setPolygonOffset:L,setScissorTest:w,activeTexture:te,bindTexture:se,unbindTexture:ce,compressedTexImage2D:le,compressedTexImage3D:je,texImage2D:Ye,texImage3D:Ne,updateUBOMapping:E,uniformBlockBinding:k,texStorage2D:fe,texStorage3D:ht,texSubImage2D:Fe,texSubImage3D:pe,compressedTexSubImage2D:ge,compressedTexSubImage3D:ze,scissor:be,viewport:Pe,reset:ie}}function FT(t,e,n,i,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new Ce,d=new WeakMap;let h;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,w){return _?new OffscreenCanvas(L,w):eo("canvas")}function p(L,w,te,se){let ce=1;const le=Xe(L);if((le.width>se||le.height>se)&&(ce=se/Math.max(le.width,le.height)),ce<1||w===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const je=w?Yl:Math.floor,Fe=je(ce*le.width),pe=je(ce*le.height);h===void 0&&(h=x(Fe,pe));const ge=te?x(Fe,pe):h;return ge.width=Fe,ge.height=pe,ge.getContext("2d").drawImage(L,0,0,Fe,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+Fe+"x"+pe+")."),ge}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),L;return L}function u(L){const w=Xe(L);return Id(w.width)&&Id(w.height)}function v(L){return o?!1:L.wrapS!==jn||L.wrapT!==jn||L.minFilter!==an&&L.minFilter!==Ht}function g(L,w){return L.generateMipmaps&&w&&L.minFilter!==an&&L.minFilter!==Ht}function M(L){t.generateMipmap(L)}function P(L,w,te,se,ce=!1){if(o===!1)return w;if(L!==null){if(t[L]!==void 0)return t[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let le=w;if(w===t.RED&&(te===t.FLOAT&&(le=t.R32F),te===t.HALF_FLOAT&&(le=t.R16F),te===t.UNSIGNED_BYTE&&(le=t.R8)),w===t.RED_INTEGER&&(te===t.UNSIGNED_BYTE&&(le=t.R8UI),te===t.UNSIGNED_SHORT&&(le=t.R16UI),te===t.UNSIGNED_INT&&(le=t.R32UI),te===t.BYTE&&(le=t.R8I),te===t.SHORT&&(le=t.R16I),te===t.INT&&(le=t.R32I)),w===t.RG&&(te===t.FLOAT&&(le=t.RG32F),te===t.HALF_FLOAT&&(le=t.RG16F),te===t.UNSIGNED_BYTE&&(le=t.RG8)),w===t.RG_INTEGER&&(te===t.UNSIGNED_BYTE&&(le=t.RG8UI),te===t.UNSIGNED_SHORT&&(le=t.RG16UI),te===t.UNSIGNED_INT&&(le=t.RG32UI),te===t.BYTE&&(le=t.RG8I),te===t.SHORT&&(le=t.RG16I),te===t.INT&&(le=t.RG32I)),w===t.RGBA){const je=ce?jl:ct.getTransfer(se);te===t.FLOAT&&(le=t.RGBA32F),te===t.HALF_FLOAT&&(le=t.RGBA16F),te===t.UNSIGNED_BYTE&&(le=je===mt?t.SRGB8_ALPHA8:t.RGBA8),te===t.UNSIGNED_SHORT_4_4_4_4&&(le=t.RGBA4),te===t.UNSIGNED_SHORT_5_5_5_1&&(le=t.RGB5_A1)}return(le===t.R16F||le===t.R32F||le===t.RG16F||le===t.RG32F||le===t.RGBA16F||le===t.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function A(L,w,te){return g(L,te)===!0||L.isFramebufferTexture&&L.minFilter!==an&&L.minFilter!==Ht?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function T(L){return L===an||L===lp||L===ua?t.NEAREST:t.LINEAR}function N(L){const w=L.target;w.removeEventListener("dispose",N),y(w),w.isVideoTexture&&d.delete(w)}function re(L){const w=L.target;w.removeEventListener("dispose",re),Q(w)}function y(L){const w=i.get(L);if(w.__webglInit===void 0)return;const te=L.source,se=m.get(te);if(se){const ce=se[w.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&C(L),Object.keys(se).length===0&&m.delete(te)}i.remove(L)}function C(L){const w=i.get(L);t.deleteTexture(w.__webglTexture);const te=L.source,se=m.get(te);delete se[w.__cacheKey],a.memory.textures--}function Q(L){const w=i.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(w.__webglFramebuffer[se]))for(let ce=0;ce<w.__webglFramebuffer[se].length;ce++)t.deleteFramebuffer(w.__webglFramebuffer[se][ce]);else t.deleteFramebuffer(w.__webglFramebuffer[se]);w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer[se])}else{if(Array.isArray(w.__webglFramebuffer))for(let se=0;se<w.__webglFramebuffer.length;se++)t.deleteFramebuffer(w.__webglFramebuffer[se]);else t.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&t.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let se=0;se<w.__webglColorRenderbuffer.length;se++)w.__webglColorRenderbuffer[se]&&t.deleteRenderbuffer(w.__webglColorRenderbuffer[se]);w.__webglDepthRenderbuffer&&t.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const te=L.textures;for(let se=0,ce=te.length;se<ce;se++){const le=i.get(te[se]);le.__webglTexture&&(t.deleteTexture(le.__webglTexture),a.memory.textures--),i.remove(te[se])}i.remove(L)}let ee=0;function I(){ee=0}function J(){const L=ee;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),ee+=1,L}function B(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function H(L,w){const te=i.get(L);if(L.isVideoTexture&&Ge(L),L.isRenderTargetTexture===!1&&L.version>0&&te.__version!==L.version){const se=L.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(te,L,w);return}}n.bindTexture(t.TEXTURE_2D,te.__webglTexture,t.TEXTURE0+w)}function D(L,w){const te=i.get(L);if(L.version>0&&te.__version!==L.version){oe(te,L,w);return}n.bindTexture(t.TEXTURE_2D_ARRAY,te.__webglTexture,t.TEXTURE0+w)}function F(L,w){const te=i.get(L);if(L.version>0&&te.__version!==L.version){oe(te,L,w);return}n.bindTexture(t.TEXTURE_3D,te.__webglTexture,t.TEXTURE0+w)}function z(L,w){const te=i.get(L);if(L.version>0&&te.__version!==L.version){Se(te,L,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture,t.TEXTURE0+w)}const K={[Za]:t.REPEAT,[jn]:t.CLAMP_TO_EDGE,[Ld]:t.MIRRORED_REPEAT},ae={[an]:t.NEAREST,[lp]:t.NEAREST_MIPMAP_NEAREST,[ua]:t.NEAREST_MIPMAP_LINEAR,[Ht]:t.LINEAR,[Kc]:t.LINEAR_MIPMAP_NEAREST,[Rr]:t.LINEAR_MIPMAP_LINEAR},Ae={[pS]:t.NEVER,[yS]:t.ALWAYS,[mS]:t.LESS,[dv]:t.LEQUAL,[gS]:t.EQUAL,[xS]:t.GEQUAL,[vS]:t.GREATER,[_S]:t.NOTEQUAL};function W(L,w,te){if(w.type===vi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Ht||w.magFilter===Kc||w.magFilter===ua||w.magFilter===Rr||w.minFilter===Ht||w.minFilter===Kc||w.minFilter===ua||w.minFilter===Rr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),te?(t.texParameteri(L,t.TEXTURE_WRAP_S,K[w.wrapS]),t.texParameteri(L,t.TEXTURE_WRAP_T,K[w.wrapT]),(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)&&t.texParameteri(L,t.TEXTURE_WRAP_R,K[w.wrapR]),t.texParameteri(L,t.TEXTURE_MAG_FILTER,ae[w.magFilter]),t.texParameteri(L,t.TEXTURE_MIN_FILTER,ae[w.minFilter])):(t.texParameteri(L,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(L,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)&&t.texParameteri(L,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(w.wrapS!==jn||w.wrapT!==jn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(L,t.TEXTURE_MAG_FILTER,T(w.magFilter)),t.texParameteri(L,t.TEXTURE_MIN_FILTER,T(w.minFilter)),w.minFilter!==an&&w.minFilter!==Ht&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(t.texParameteri(L,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(L,t.TEXTURE_COMPARE_FUNC,Ae[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===an||w.minFilter!==ua&&w.minFilter!==Rr||w.type===vi&&e.has("OES_texture_float_linear")===!1||o===!1&&w.type===Qa&&e.has("OES_texture_half_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const se=e.get("EXT_texture_filter_anisotropic");t.texParameterf(L,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function j(L,w){let te=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",N));const se=w.source;let ce=m.get(se);ce===void 0&&(ce={},m.set(se,ce));const le=B(w);if(le!==L.__cacheKey){ce[le]===void 0&&(ce[le]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,te=!0),ce[le].usedTimes++;const je=ce[L.__cacheKey];je!==void 0&&(ce[L.__cacheKey].usedTimes--,je.usedTimes===0&&C(w)),L.__cacheKey=le,L.__webglTexture=ce[le].texture}return te}function oe(L,w,te){let se=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(se=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(se=t.TEXTURE_3D);const ce=j(L,w),le=w.source;n.bindTexture(se,L.__webglTexture,t.TEXTURE0+te);const je=i.get(le);if(le.version!==je.__version||ce===!0){n.activeTexture(t.TEXTURE0+te);const Fe=ct.getPrimaries(ct.workingColorSpace),pe=w.colorSpace===Gi?null:ct.getPrimaries(w.colorSpace),ge=w.colorSpace===Gi||Fe===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const ze=v(w)&&u(w.image)===!1;let fe=p(w.image,ze,!1,r.maxTextureSize);fe=Le(w,fe);const ht=u(fe)||o,Ye=s.convert(w.format,w.colorSpace);let Ne=s.convert(w.type),be=P(w.internalFormat,Ye,Ne,w.colorSpace,w.isVideoTexture);W(se,w,ht);let Pe;const E=w.mipmaps,k=o&&w.isVideoTexture!==!0&&be!==uv,ie=je.__version===void 0||ce===!0,R=le.dataReady,q=A(w,fe,ht);if(w.isDepthTexture)be=t.DEPTH_COMPONENT,o?w.type===vi?be=t.DEPTH_COMPONENT32F:w.type===Xi?be=t.DEPTH_COMPONENT24:w.type===Nr?be=t.DEPTH24_STENCIL8:be=t.DEPTH_COMPONENT16:w.type===vi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Dr&&be===t.DEPTH_COMPONENT&&w.type!==Uf&&w.type!==Xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Xi,Ne=s.convert(w.type)),w.format===Ys&&be===t.DEPTH_COMPONENT&&(be=t.DEPTH_STENCIL,w.type!==Nr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Nr,Ne=s.convert(w.type))),ie&&(k?n.texStorage2D(t.TEXTURE_2D,1,be,fe.width,fe.height):n.texImage2D(t.TEXTURE_2D,0,be,fe.width,fe.height,0,Ye,Ne,null));else if(w.isDataTexture)if(E.length>0&&ht){k&&ie&&n.texStorage2D(t.TEXTURE_2D,q,be,E[0].width,E[0].height);for(let U=0,X=E.length;U<X;U++)Pe=E[U],k?R&&n.texSubImage2D(t.TEXTURE_2D,U,0,0,Pe.width,Pe.height,Ye,Ne,Pe.data):n.texImage2D(t.TEXTURE_2D,U,be,Pe.width,Pe.height,0,Ye,Ne,Pe.data);w.generateMipmaps=!1}else k?(ie&&n.texStorage2D(t.TEXTURE_2D,q,be,fe.width,fe.height),R&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,fe.width,fe.height,Ye,Ne,fe.data)):n.texImage2D(t.TEXTURE_2D,0,be,fe.width,fe.height,0,Ye,Ne,fe.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){k&&ie&&n.texStorage3D(t.TEXTURE_2D_ARRAY,q,be,E[0].width,E[0].height,fe.depth);for(let U=0,X=E.length;U<X;U++)Pe=E[U],w.format!==Xn?Ye!==null?k?R&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,U,0,0,0,Pe.width,Pe.height,fe.depth,Ye,Pe.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,U,be,Pe.width,Pe.height,fe.depth,0,Pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?R&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,U,0,0,0,Pe.width,Pe.height,fe.depth,Ye,Ne,Pe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,U,be,Pe.width,Pe.height,fe.depth,0,Ye,Ne,Pe.data)}else{k&&ie&&n.texStorage2D(t.TEXTURE_2D,q,be,E[0].width,E[0].height);for(let U=0,X=E.length;U<X;U++)Pe=E[U],w.format!==Xn?Ye!==null?k?R&&n.compressedTexSubImage2D(t.TEXTURE_2D,U,0,0,Pe.width,Pe.height,Ye,Pe.data):n.compressedTexImage2D(t.TEXTURE_2D,U,be,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?R&&n.texSubImage2D(t.TEXTURE_2D,U,0,0,Pe.width,Pe.height,Ye,Ne,Pe.data):n.texImage2D(t.TEXTURE_2D,U,be,Pe.width,Pe.height,0,Ye,Ne,Pe.data)}else if(w.isDataArrayTexture)k?(ie&&n.texStorage3D(t.TEXTURE_2D_ARRAY,q,be,fe.width,fe.height,fe.depth),R&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Ye,Ne,fe.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,be,fe.width,fe.height,fe.depth,0,Ye,Ne,fe.data);else if(w.isData3DTexture)k?(ie&&n.texStorage3D(t.TEXTURE_3D,q,be,fe.width,fe.height,fe.depth),R&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Ye,Ne,fe.data)):n.texImage3D(t.TEXTURE_3D,0,be,fe.width,fe.height,fe.depth,0,Ye,Ne,fe.data);else if(w.isFramebufferTexture){if(ie)if(k)n.texStorage2D(t.TEXTURE_2D,q,be,fe.width,fe.height);else{let U=fe.width,X=fe.height;for(let ne=0;ne<q;ne++)n.texImage2D(t.TEXTURE_2D,ne,be,U,X,0,Ye,Ne,null),U>>=1,X>>=1}}else if(E.length>0&&ht){if(k&&ie){const U=Xe(E[0]);n.texStorage2D(t.TEXTURE_2D,q,be,U.width,U.height)}for(let U=0,X=E.length;U<X;U++)Pe=E[U],k?R&&n.texSubImage2D(t.TEXTURE_2D,U,0,0,Ye,Ne,Pe):n.texImage2D(t.TEXTURE_2D,U,be,Ye,Ne,Pe);w.generateMipmaps=!1}else if(k){if(ie){const U=Xe(fe);n.texStorage2D(t.TEXTURE_2D,q,be,U.width,U.height)}R&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ye,Ne,fe)}else n.texImage2D(t.TEXTURE_2D,0,be,Ye,Ne,fe);g(w,ht)&&M(se),je.__version=le.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function Se(L,w,te){if(w.image.length!==6)return;const se=j(L,w),ce=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,L.__webglTexture,t.TEXTURE0+te);const le=i.get(ce);if(ce.version!==le.__version||se===!0){n.activeTexture(t.TEXTURE0+te);const je=ct.getPrimaries(ct.workingColorSpace),Fe=w.colorSpace===Gi?null:ct.getPrimaries(w.colorSpace),pe=w.colorSpace===Gi||je===Fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const ge=w.isCompressedTexture||w.image[0].isCompressedTexture,ze=w.image[0]&&w.image[0].isDataTexture,fe=[];for(let U=0;U<6;U++)!ge&&!ze?fe[U]=p(w.image[U],!1,!0,r.maxCubemapSize):fe[U]=ze?w.image[U].image:w.image[U],fe[U]=Le(w,fe[U]);const ht=fe[0],Ye=u(ht)||o,Ne=s.convert(w.format,w.colorSpace),be=s.convert(w.type),Pe=P(w.internalFormat,Ne,be,w.colorSpace),E=o&&w.isVideoTexture!==!0,k=le.__version===void 0||se===!0,ie=ce.dataReady;let R=A(w,ht,Ye);W(t.TEXTURE_CUBE_MAP,w,Ye);let q;if(ge){E&&k&&n.texStorage2D(t.TEXTURE_CUBE_MAP,R,Pe,ht.width,ht.height);for(let U=0;U<6;U++){q=fe[U].mipmaps;for(let X=0;X<q.length;X++){const ne=q[X];w.format!==Xn?Ne!==null?E?ie&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+U,X,0,0,ne.width,ne.height,Ne,ne.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+U,X,Pe,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):E?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+U,X,0,0,ne.width,ne.height,Ne,be,ne.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+U,X,Pe,ne.width,ne.height,0,Ne,be,ne.data)}}}else{if(q=w.mipmaps,E&&k){q.length>0&&R++;const U=Xe(fe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,R,Pe,U.width,U.height)}for(let U=0;U<6;U++)if(ze){E?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,0,0,fe[U].width,fe[U].height,Ne,be,fe[U].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,Pe,fe[U].width,fe[U].height,0,Ne,be,fe[U].data);for(let X=0;X<q.length;X++){const he=q[X].image[U].image;E?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+U,X+1,0,0,he.width,he.height,Ne,be,he.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+U,X+1,Pe,he.width,he.height,0,Ne,be,he.data)}}else{E?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,0,0,Ne,be,fe[U]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,Pe,Ne,be,fe[U]);for(let X=0;X<q.length;X++){const ne=q[X];E?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+U,X+1,0,0,Ne,be,ne.image[U]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+U,X+1,Pe,Ne,be,ne.image[U])}}}g(w,Ye)&&M(t.TEXTURE_CUBE_MAP),le.__version=ce.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function _e(L,w,te,se,ce,le){const je=s.convert(te.format,te.colorSpace),Fe=s.convert(te.type),pe=P(te.internalFormat,je,Fe,te.colorSpace);if(!i.get(w).__hasExternalTextures){const ze=Math.max(1,w.width>>le),fe=Math.max(1,w.height>>le);ce===t.TEXTURE_3D||ce===t.TEXTURE_2D_ARRAY?n.texImage3D(ce,le,pe,ze,fe,w.depth,0,je,Fe,null):n.texImage2D(ce,le,pe,ze,fe,0,je,Fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,L),Ue(w)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,se,ce,i.get(te).__webglTexture,0,de(w)):(ce===t.TEXTURE_2D||ce>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,se,ce,i.get(te).__webglTexture,le),n.bindFramebuffer(t.FRAMEBUFFER,null)}function xe(L,w,te){if(t.bindRenderbuffer(t.RENDERBUFFER,L),w.depthBuffer&&!w.stencilBuffer){let se=o===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(te||Ue(w)){const ce=w.depthTexture;ce&&ce.isDepthTexture&&(ce.type===vi?se=t.DEPTH_COMPONENT32F:ce.type===Xi&&(se=t.DEPTH_COMPONENT24));const le=de(w);Ue(w)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,se,w.width,w.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,le,se,w.width,w.height)}else t.renderbufferStorage(t.RENDERBUFFER,se,w.width,w.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,L)}else if(w.depthBuffer&&w.stencilBuffer){const se=de(w);te&&Ue(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,se,t.DEPTH24_STENCIL8,w.width,w.height):Ue(w)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,se,t.DEPTH24_STENCIL8,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,L)}else{const se=w.textures;for(let ce=0;ce<se.length;ce++){const le=se[ce],je=s.convert(le.format,le.colorSpace),Fe=s.convert(le.type),pe=P(le.internalFormat,je,Fe,le.colorSpace),ge=de(w);te&&Ue(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ge,pe,w.width,w.height):Ue(w)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ge,pe,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,pe,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function He(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),H(w.depthTexture,0);const se=i.get(w.depthTexture).__webglTexture,ce=de(w);if(w.depthTexture.format===Dr)Ue(w)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0,ce):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0);else if(w.depthTexture.format===Ys)Ue(w)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0,ce):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Ee(L){const w=i.get(L),te=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");He(w.__webglFramebuffer,L)}else if(te){w.__webglDepthbuffer=[];for(let se=0;se<6;se++)n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[se]),w.__webglDepthbuffer[se]=t.createRenderbuffer(),xe(w.__webglDepthbuffer[se],L,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=t.createRenderbuffer(),xe(w.__webglDepthbuffer,L,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function G(L,w,te){const se=i.get(L);w!==void 0&&_e(se.__webglFramebuffer,L,L.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),te!==void 0&&Ee(L)}function vt(L){const w=L.texture,te=i.get(L),se=i.get(w);L.addEventListener("dispose",re);const ce=L.textures,le=L.isWebGLCubeRenderTarget===!0,je=ce.length>1,Fe=u(L)||o;if(je||(se.__webglTexture===void 0&&(se.__webglTexture=t.createTexture()),se.__version=w.version,a.memory.textures++),le){te.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(o&&w.mipmaps&&w.mipmaps.length>0){te.__webglFramebuffer[pe]=[];for(let ge=0;ge<w.mipmaps.length;ge++)te.__webglFramebuffer[pe][ge]=t.createFramebuffer()}else te.__webglFramebuffer[pe]=t.createFramebuffer()}else{if(o&&w.mipmaps&&w.mipmaps.length>0){te.__webglFramebuffer=[];for(let pe=0;pe<w.mipmaps.length;pe++)te.__webglFramebuffer[pe]=t.createFramebuffer()}else te.__webglFramebuffer=t.createFramebuffer();if(je)if(r.drawBuffers)for(let pe=0,ge=ce.length;pe<ge;pe++){const ze=i.get(ce[pe]);ze.__webglTexture===void 0&&(ze.__webglTexture=t.createTexture(),a.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&L.samples>0&&Ue(L)===!1){te.__webglMultisampledFramebuffer=t.createFramebuffer(),te.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let pe=0;pe<ce.length;pe++){const ge=ce[pe];te.__webglColorRenderbuffer[pe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,te.__webglColorRenderbuffer[pe]);const ze=s.convert(ge.format,ge.colorSpace),fe=s.convert(ge.type),ht=P(ge.internalFormat,ze,fe,ge.colorSpace,L.isXRRenderTarget===!0),Ye=de(L);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ye,ht,L.width,L.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,te.__webglColorRenderbuffer[pe])}t.bindRenderbuffer(t.RENDERBUFFER,null),L.depthBuffer&&(te.__webglDepthRenderbuffer=t.createRenderbuffer(),xe(te.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(le){n.bindTexture(t.TEXTURE_CUBE_MAP,se.__webglTexture),W(t.TEXTURE_CUBE_MAP,w,Fe);for(let pe=0;pe<6;pe++)if(o&&w.mipmaps&&w.mipmaps.length>0)for(let ge=0;ge<w.mipmaps.length;ge++)_e(te.__webglFramebuffer[pe][ge],L,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ge);else _e(te.__webglFramebuffer[pe],L,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);g(w,Fe)&&M(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(je){for(let pe=0,ge=ce.length;pe<ge;pe++){const ze=ce[pe],fe=i.get(ze);n.bindTexture(t.TEXTURE_2D,fe.__webglTexture),W(t.TEXTURE_2D,ze,Fe),_e(te.__webglFramebuffer,L,ze,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,0),g(ze,Fe)&&M(t.TEXTURE_2D)}n.unbindTexture()}else{let pe=t.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(o?pe=L.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(pe,se.__webglTexture),W(pe,w,Fe),o&&w.mipmaps&&w.mipmaps.length>0)for(let ge=0;ge<w.mipmaps.length;ge++)_e(te.__webglFramebuffer[ge],L,w,t.COLOR_ATTACHMENT0,pe,ge);else _e(te.__webglFramebuffer,L,w,t.COLOR_ATTACHMENT0,pe,0);g(w,Fe)&&M(pe),n.unbindTexture()}L.depthBuffer&&Ee(L)}function Re(L){const w=u(L)||o,te=L.textures;for(let se=0,ce=te.length;se<ce;se++){const le=te[se];if(g(le,w)){const je=L.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Fe=i.get(le).__webglTexture;n.bindTexture(je,Fe),M(je),n.unbindTexture()}}}function Ve(L){if(o&&L.samples>0&&Ue(L)===!1){const w=L.textures,te=L.width,se=L.height;let ce=t.COLOR_BUFFER_BIT;const le=[],je=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Fe=i.get(L),pe=w.length>1;if(pe)for(let ge=0;ge<w.length;ge++)n.bindFramebuffer(t.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let ge=0;ge<w.length;ge++){le.push(t.COLOR_ATTACHMENT0+ge),L.depthBuffer&&le.push(je);const ze=Fe.__ignoreDepthValues!==void 0?Fe.__ignoreDepthValues:!1;if(ze===!1&&(L.depthBuffer&&(ce|=t.DEPTH_BUFFER_BIT),L.stencilBuffer&&(ce|=t.STENCIL_BUFFER_BIT)),pe&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Fe.__webglColorRenderbuffer[ge]),ze===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[je]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[je])),pe){const fe=i.get(w[ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,fe,0)}t.blitFramebuffer(0,0,te,se,0,0,te,se,ce,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,le)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),pe)for(let ge=0;ge<w.length;ge++){n.bindFramebuffer(t.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,Fe.__webglColorRenderbuffer[ge]);const ze=i.get(w[ge]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,ze,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}}function de(L){return Math.min(r.maxSamples,L.samples)}function Ue(L){const w=i.get(L);return o&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ge(L){const w=a.render.frame;d.get(L)!==w&&(d.set(L,w),L.update())}function Le(L,w){const te=L.colorSpace,se=L.format,ce=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===Dd||te!==dr&&te!==Gi&&(ct.getTransfer(te)===mt?o===!1?e.has("EXT_sRGB")===!0&&se===Xn?(L.format=Dd,L.minFilter=Ht,L.generateMipmaps=!1):w=mv.sRGBToLinear(w):(se!==Xn||ce!==ir)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),w}function Xe(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(f.width=L.naturalWidth||L.width,f.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(f.width=L.displayWidth,f.height=L.displayHeight):(f.width=L.width,f.height=L.height),f}this.allocateTextureUnit=J,this.resetTextureUnits=I,this.setTexture2D=H,this.setTexture2DArray=D,this.setTexture3D=F,this.setTextureCube=z,this.rebindTextures=G,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Ue}function OT(t,e,n){const i=n.isWebGL2;function r(s,a=Gi){let o;const l=ct.getTransfer(a);if(s===ir)return t.UNSIGNED_BYTE;if(s===sv)return t.UNSIGNED_SHORT_4_4_4_4;if(s===av)return t.UNSIGNED_SHORT_5_5_5_1;if(s===nS)return t.BYTE;if(s===iS)return t.SHORT;if(s===Uf)return t.UNSIGNED_SHORT;if(s===rv)return t.INT;if(s===Xi)return t.UNSIGNED_INT;if(s===vi)return t.FLOAT;if(s===Qa)return i?t.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===rS)return t.ALPHA;if(s===Xn)return t.RGBA;if(s===sS)return t.LUMINANCE;if(s===aS)return t.LUMINANCE_ALPHA;if(s===Dr)return t.DEPTH_COMPONENT;if(s===Ys)return t.DEPTH_STENCIL;if(s===Dd)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===oS)return t.RED;if(s===ov)return t.RED_INTEGER;if(s===lS)return t.RG;if(s===lv)return t.RG_INTEGER;if(s===cv)return t.RGBA_INTEGER;if(s===Zc||s===Qc||s===Jc||s===eu)if(l===mt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Zc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Qc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Jc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===eu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Zc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Qc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Jc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===eu)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===cp||s===up||s===dp||s===fp)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===cp)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===up)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===dp)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===fp)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===uv)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===hp||s===pp)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===hp)return l===mt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===pp)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===mp||s===gp||s===vp||s===_p||s===xp||s===yp||s===Sp||s===Mp||s===Ep||s===wp||s===Tp||s===bp||s===Ap||s===Cp)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===mp)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===gp)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===vp)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===_p)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===xp)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===yp)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Sp)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Mp)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ep)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===wp)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Tp)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===bp)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ap)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Cp)return l===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===tu||s===Rp||s===Pp)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===tu)return l===mt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Rp)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Pp)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===cS||s===Lp||s===Np||s===Dp)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===tu)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Lp)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Np)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Dp)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Nr?i?t.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class kT extends Mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ps extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zT={type:"move"};class bu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ps,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ps,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ps,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const p=n.getJointPose(x,i),u=this._getHandJoint(c,x);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=f.position.distanceTo(d.position),m=.02,_=.005;c.inputState.pinching&&h>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zT)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ps;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const BT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,HT=`
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

}`;class VT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Jt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new or({extensions:{fragDepth:!0},vertexShader:BT,fragmentShader:HT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new on(new gc(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class GT extends Wr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,f=null,d=null,h=null,m=null,_=null;const x=new VT,p=n.getContextAttributes();let u=null,v=null;const g=[],M=[],P=new Ce;let A=null;const T=new Mn;T.layers.enable(1),T.viewport=new yt;const N=new Mn;N.layers.enable(2),N.viewport=new yt;const re=[T,N],y=new kT;y.layers.enable(1),y.layers.enable(2);let C=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let j=g[W];return j===void 0&&(j=new bu,g[W]=j),j.getTargetRaySpace()},this.getControllerGrip=function(W){let j=g[W];return j===void 0&&(j=new bu,g[W]=j),j.getGripSpace()},this.getHand=function(W){let j=g[W];return j===void 0&&(j=new bu,g[W]=j),j.getHandSpace()};function ee(W){const j=M.indexOf(W.inputSource);if(j===-1)return;const oe=g[j];oe!==void 0&&(oe.update(W.inputSource,W.frame,c||a),oe.dispatchEvent({type:W.type,data:W.inputSource}))}function I(){r.removeEventListener("select",ee),r.removeEventListener("selectstart",ee),r.removeEventListener("selectend",ee),r.removeEventListener("squeeze",ee),r.removeEventListener("squeezestart",ee),r.removeEventListener("squeezeend",ee),r.removeEventListener("end",I),r.removeEventListener("inputsourceschange",J);for(let W=0;W<g.length;W++){const j=M[W];j!==null&&(M[W]=null,g[W].disconnect(j))}C=null,Q=null,x.reset(),e.setRenderTarget(u),m=null,h=null,d=null,r=null,v=null,Ae.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",ee),r.addEventListener("selectstart",ee),r.addEventListener("selectend",ee),r.addEventListener("squeeze",ee),r.addEventListener("squeezestart",ee),r.addEventListener("squeezeend",ee),r.addEventListener("end",I),r.addEventListener("inputsourceschange",J),p.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const j={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,j),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new Br(m.framebufferWidth,m.framebufferHeight,{format:Xn,type:ir,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let j=null,oe=null,Se=null;p.depth&&(Se=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,j=p.stencil?Ys:Dr,oe=p.stencil?Nr:Xi);const _e={colorFormat:n.RGBA8,depthFormat:Se,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(_e),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new Br(h.textureWidth,h.textureHeight,{format:Xn,type:ir,depthTexture:new Tv(h.textureWidth,h.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const xe=e.properties.get(v);xe.__ignoreDepthValues=h.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ae.setContext(r),Ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function J(W){for(let j=0;j<W.removed.length;j++){const oe=W.removed[j],Se=M.indexOf(oe);Se>=0&&(M[Se]=null,g[Se].disconnect(oe))}for(let j=0;j<W.added.length;j++){const oe=W.added[j];let Se=M.indexOf(oe);if(Se===-1){for(let xe=0;xe<g.length;xe++)if(xe>=M.length){M.push(oe),Se=xe;break}else if(M[xe]===null){M[xe]=oe,Se=xe;break}if(Se===-1)break}const _e=g[Se];_e&&_e.connect(oe)}}const B=new O,H=new O;function D(W,j,oe){B.setFromMatrixPosition(j.matrixWorld),H.setFromMatrixPosition(oe.matrixWorld);const Se=B.distanceTo(H),_e=j.projectionMatrix.elements,xe=oe.projectionMatrix.elements,He=_e[14]/(_e[10]-1),Ee=_e[14]/(_e[10]+1),G=(_e[9]+1)/_e[5],vt=(_e[9]-1)/_e[5],Re=(_e[8]-1)/_e[0],Ve=(xe[8]+1)/xe[0],de=He*Re,Ue=He*Ve,Ge=Se/(-Re+Ve),Le=Ge*-Re;j.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Le),W.translateZ(Ge),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const Xe=He+Ge,L=Ee+Ge,w=de-Le,te=Ue+(Se-Le),se=G*Ee/L*Xe,ce=vt*Ee/L*Xe;W.projectionMatrix.makePerspective(w,te,se,ce,Xe,L),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function F(W,j){j===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(j.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;x.texture!==null&&(W.near=x.depthNear,W.far=x.depthFar),y.near=N.near=T.near=W.near,y.far=N.far=T.far=W.far,(C!==y.near||Q!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),C=y.near,Q=y.far,T.near=C,T.far=Q,N.near=C,N.far=Q,T.updateProjectionMatrix(),N.updateProjectionMatrix(),W.updateProjectionMatrix());const j=W.parent,oe=y.cameras;F(y,j);for(let Se=0;Se<oe.length;Se++)F(oe[Se],j);oe.length===2?D(y,T,N):y.projectionMatrix.copy(T.projectionMatrix),z(W,y,j)};function z(W,j,oe){oe===null?W.matrix.copy(j.matrixWorld):(W.matrix.copy(oe.matrixWorld),W.matrix.invert(),W.matrix.multiply(j.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(j.projectionMatrix),W.projectionMatrixInverse.copy(j.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Ja*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(W){l=W,h!==null&&(h.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)},this.hasDepthSensing=function(){return x.texture!==null};let K=null;function ae(W,j){if(f=j.getViewerPose(c||a),_=j,f!==null){const oe=f.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let Se=!1;oe.length!==y.cameras.length&&(y.cameras.length=0,Se=!0);for(let xe=0;xe<oe.length;xe++){const He=oe[xe];let Ee=null;if(m!==null)Ee=m.getViewport(He);else{const vt=d.getViewSubImage(h,He);Ee=vt.viewport,xe===0&&(e.setRenderTargetTextures(v,vt.colorTexture,h.ignoreDepthValues?void 0:vt.depthStencilTexture),e.setRenderTarget(v))}let G=re[xe];G===void 0&&(G=new Mn,G.layers.enable(xe),G.viewport=new yt,re[xe]=G),G.matrix.fromArray(He.transform.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale),G.projectionMatrix.fromArray(He.projectionMatrix),G.projectionMatrixInverse.copy(G.projectionMatrix).invert(),G.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),xe===0&&(y.matrix.copy(G.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Se===!0&&y.cameras.push(G)}const _e=r.enabledFeatures;if(_e&&_e.includes("depth-sensing")){const xe=d.getDepthInformation(oe[0]);xe&&xe.isValid&&xe.texture&&x.init(e,xe,r.renderState)}}for(let oe=0;oe<g.length;oe++){const Se=M[oe],_e=g[oe];Se!==null&&_e!==void 0&&_e.update(Se,j,c||a)}x.render(e,y),K&&K(W,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),_=null}const Ae=new wv;Ae.setAnimationLoop(ae),this.setAnimationLoop=function(W){K=W},this.dispose=function(){}}}const xr=new Ci,WT=new ft;function jT(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,Sv(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,v,g,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),d(p,u)):u.isMeshPhongMaterial?(s(p,u),f(p,u)):u.isMeshStandardMaterial?(s(p,u),h(p,u),u.isMeshPhysicalMaterial&&m(p,u,M)):u.isMeshMatcapMaterial?(s(p,u),_(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),x(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?l(p,u,v,g):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Qt&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Qt&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const v=e.get(u),g=v.envMap,M=v.envMapRotation;if(g&&(p.envMap.value=g,xr.copy(M),xr.x*=-1,xr.y*=-1,xr.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),p.envMapRotation.value.setFromMatrix4(WT.makeRotationFromEuler(xr)),p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const P=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*P,n(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,v,g){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*v,p.scale.value=g*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function f(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function h(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,v){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Qt&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,u){u.matcap&&(p.matcap.value=u.matcap)}function x(p,u){const v=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function XT(t,e,n,i){let r={},s={},a=[];const o=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,g){const M=g.program;i.uniformBlockBinding(v,M)}function c(v,g){let M=r[v.id];M===void 0&&(_(v),M=f(v),r[v.id]=M,v.addEventListener("dispose",p));const P=g.program;i.updateUBOMapping(v,P);const A=e.render.frame;s[v.id]!==A&&(h(v),s[v.id]=A)}function f(v){const g=d();v.__bindingPointIndex=g;const M=t.createBuffer(),P=v.__size,A=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,P,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,M),M}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const g=r[v.id],M=v.uniforms,P=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let A=0,T=M.length;A<T;A++){const N=Array.isArray(M[A])?M[A]:[M[A]];for(let re=0,y=N.length;re<y;re++){const C=N[re];if(m(C,A,re,P)===!0){const Q=C.__offset,ee=Array.isArray(C.value)?C.value:[C.value];let I=0;for(let J=0;J<ee.length;J++){const B=ee[J],H=x(B);typeof B=="number"||typeof B=="boolean"?(C.__data[0]=B,t.bufferSubData(t.UNIFORM_BUFFER,Q+I,C.__data)):B.isMatrix3?(C.__data[0]=B.elements[0],C.__data[1]=B.elements[1],C.__data[2]=B.elements[2],C.__data[3]=0,C.__data[4]=B.elements[3],C.__data[5]=B.elements[4],C.__data[6]=B.elements[5],C.__data[7]=0,C.__data[8]=B.elements[6],C.__data[9]=B.elements[7],C.__data[10]=B.elements[8],C.__data[11]=0):(B.toArray(C.__data,I),I+=H.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,Q,C.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(v,g,M,P){const A=v.value,T=g+"_"+M;if(P[T]===void 0)return typeof A=="number"||typeof A=="boolean"?P[T]=A:P[T]=A.clone(),!0;{const N=P[T];if(typeof A=="number"||typeof A=="boolean"){if(N!==A)return P[T]=A,!0}else if(N.equals(A)===!1)return N.copy(A),!0}return!1}function _(v){const g=v.uniforms;let M=0;const P=16;for(let T=0,N=g.length;T<N;T++){const re=Array.isArray(g[T])?g[T]:[g[T]];for(let y=0,C=re.length;y<C;y++){const Q=re[y],ee=Array.isArray(Q.value)?Q.value:[Q.value];for(let I=0,J=ee.length;I<J;I++){const B=ee[I],H=x(B),D=M%P;D!==0&&P-D<H.boundary&&(M+=P-D),Q.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=M,M+=H.storage}}}const A=M%P;return A>0&&(M+=P-A),v.__size=M,v.__cache={},this}function x(v){const g={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function p(v){const g=v.target;g.removeEventListener("dispose",p);const M=a.indexOf(g.__bindingPointIndex);a.splice(M,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function u(){for(const v in r)t.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}class Lv{constructor(e={}){const{canvas:n=US(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=a;const m=new Uint32Array(4),_=new Int32Array(4);let x=null,p=null;const u=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ti,this._useLegacyLights=!1,this.toneMapping=nr,this.toneMappingExposure=1;const g=this;let M=!1,P=0,A=0,T=null,N=-1,re=null;const y=new yt,C=new yt;let Q=null;const ee=new rt(0);let I=0,J=n.width,B=n.height,H=1,D=null,F=null;const z=new yt(0,0,J,B),K=new yt(0,0,J,B);let ae=!1;const Ae=new zf;let W=!1,j=!1,oe=null;const Se=new ft,_e=new Ce,xe=new O,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ee(){return T===null?H:1}let G=i;function vt(b,V){for(let Y=0;Y<b.length;Y++){const Z=b[Y],$=n.getContext(Z,V);if($!==null)return $}return null}try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Df}`),n.addEventListener("webglcontextlost",ie,!1),n.addEventListener("webglcontextrestored",R,!1),n.addEventListener("webglcontextcreationerror",q,!1),G===null){const V=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&V.shift(),G=vt(V,b),G===null)throw vt(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Re,Ve,de,Ue,Ge,Le,Xe,L,w,te,se,ce,le,je,Fe,pe,ge,ze,fe,ht,Ye,Ne,be,Pe;function E(){Re=new QE(G),Ve=new jE(G,Re,e),Re.init(Ve),Ne=new OT(G,Re,Ve),de=new UT(G,Re,Ve),Ue=new tw(G),Ge=new ST,Le=new FT(G,Re,de,Ge,Ve,Ne,Ue),Xe=new qE(g),L=new ZE(g),w=new aM(G,Ve),be=new GE(G,Re,w,Ve),te=new JE(G,w,Ue,be),se=new sw(G,te,w,Ue),fe=new rw(G,Ve,Le),pe=new XE(Ge),ce=new yT(g,Xe,L,Re,Ve,be,pe),le=new jT(g,Ge),je=new ET,Fe=new RT(Re,Ve),ze=new VE(g,Xe,L,de,se,h,l),ge=new IT(g,se,Ve),Pe=new XT(G,Ue,Ve,de),ht=new WE(G,Re,Ue,Ve),Ye=new ew(G,Re,Ue,Ve),Ue.programs=ce.programs,g.capabilities=Ve,g.extensions=Re,g.properties=Ge,g.renderLists=je,g.shadowMap=ge,g.state=de,g.info=Ue}E();const k=new GT(g,G);this.xr=k,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const b=Re.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Re.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(b){b!==void 0&&(H=b,this.setSize(J,B,!1))},this.getSize=function(b){return b.set(J,B)},this.setSize=function(b,V,Y=!0){if(k.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=b,B=V,n.width=Math.floor(b*H),n.height=Math.floor(V*H),Y===!0&&(n.style.width=b+"px",n.style.height=V+"px"),this.setViewport(0,0,b,V)},this.getDrawingBufferSize=function(b){return b.set(J*H,B*H).floor()},this.setDrawingBufferSize=function(b,V,Y){J=b,B=V,H=Y,n.width=Math.floor(b*Y),n.height=Math.floor(V*Y),this.setViewport(0,0,b,V)},this.getCurrentViewport=function(b){return b.copy(y)},this.getViewport=function(b){return b.copy(z)},this.setViewport=function(b,V,Y,Z){b.isVector4?z.set(b.x,b.y,b.z,b.w):z.set(b,V,Y,Z),de.viewport(y.copy(z).multiplyScalar(H).round())},this.getScissor=function(b){return b.copy(K)},this.setScissor=function(b,V,Y,Z){b.isVector4?K.set(b.x,b.y,b.z,b.w):K.set(b,V,Y,Z),de.scissor(C.copy(K).multiplyScalar(H).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(b){de.setScissorTest(ae=b)},this.setOpaqueSort=function(b){D=b},this.setTransparentSort=function(b){F=b},this.getClearColor=function(b){return b.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor.apply(ze,arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha.apply(ze,arguments)},this.clear=function(b=!0,V=!0,Y=!0){let Z=0;if(b){let $=!1;if(T!==null){const we=T.texture.format;$=we===cv||we===lv||we===ov}if($){const we=T.texture.type,De=we===ir||we===Xi||we===Uf||we===Nr||we===sv||we===av,Be=ze.getClearColor(),qe=ze.getClearAlpha(),et=Be.r,$e=Be.g,Ke=Be.b;De?(m[0]=et,m[1]=$e,m[2]=Ke,m[3]=qe,G.clearBufferuiv(G.COLOR,0,m)):(_[0]=et,_[1]=$e,_[2]=Ke,_[3]=qe,G.clearBufferiv(G.COLOR,0,_))}else Z|=G.COLOR_BUFFER_BIT}V&&(Z|=G.DEPTH_BUFFER_BIT),Y&&(Z|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ie,!1),n.removeEventListener("webglcontextrestored",R,!1),n.removeEventListener("webglcontextcreationerror",q,!1),je.dispose(),Fe.dispose(),Ge.dispose(),Xe.dispose(),L.dispose(),se.dispose(),be.dispose(),Pe.dispose(),ce.dispose(),k.dispose(),k.removeEventListener("sessionstart",We),k.removeEventListener("sessionend",Ie),oe&&(oe.dispose(),oe=null),ke.stop()};function ie(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function R(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const b=Ue.autoReset,V=ge.enabled,Y=ge.autoUpdate,Z=ge.needsUpdate,$=ge.type;E(),Ue.autoReset=b,ge.enabled=V,ge.autoUpdate=Y,ge.needsUpdate=Z,ge.type=$}function q(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function U(b){const V=b.target;V.removeEventListener("dispose",U),X(V)}function X(b){ne(b),Ge.remove(b)}function ne(b){const V=Ge.get(b).programs;V!==void 0&&(V.forEach(function(Y){ce.releaseProgram(Y)}),b.isShaderMaterial&&ce.releaseShaderCache(b))}this.renderBufferDirect=function(b,V,Y,Z,$,we){V===null&&(V=He);const De=$.isMesh&&$.matrixWorld.determinant()<0,Be=Rn(b,V,Y,Z,$);de.setMaterial(Z,De);let qe=Y.index,et=1;if(Z.wireframe===!0){if(qe=te.getWireframeAttribute(Y),qe===void 0)return;et=2}const $e=Y.drawRange,Ke=Y.attributes.position;let bt=$e.start*et,_n=($e.start+$e.count)*et;we!==null&&(bt=Math.max(bt,we.start*et),_n=Math.min(_n,(we.start+we.count)*et)),qe!==null?(bt=Math.max(bt,0),_n=Math.min(_n,qe.count)):Ke!=null&&(bt=Math.max(bt,0),_n=Math.min(_n,Ke.count));const Ut=_n-bt;if(Ut<0||Ut===1/0)return;be.setup($,Z,Be,Y,qe);let li,St=ht;if(qe!==null&&(li=w.get(qe),St=Ye,St.setIndex(li)),$.isMesh)Z.wireframe===!0?(de.setLineWidth(Z.wireframeLinewidth*Ee()),St.setMode(G.LINES)):St.setMode(G.TRIANGLES);else if($.isLine){let Ze=Z.linewidth;Ze===void 0&&(Ze=1),de.setLineWidth(Ze*Ee()),$.isLineSegments?St.setMode(G.LINES):$.isLineLoop?St.setMode(G.LINE_LOOP):St.setMode(G.LINE_STRIP)}else $.isPoints?St.setMode(G.POINTS):$.isSprite&&St.setMode(G.TRIANGLES);if($.isBatchedMesh)St.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else if($.isInstancedMesh)St.renderInstances(bt,Ut,$.count);else if(Y.isInstancedBufferGeometry){const Ze=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,yc=Math.min(Y.instanceCount,Ze);St.renderInstances(bt,Ut,yc)}else St.render(bt,Ut)};function he(b,V,Y){b.transparent===!0&&b.side===si&&b.forceSinglePass===!1?(b.side=Qt,b.needsUpdate=!0,ut(b,V,Y),b.side=ar,b.needsUpdate=!0,ut(b,V,Y),b.side=si):ut(b,V,Y)}this.compile=function(b,V,Y=null){Y===null&&(Y=b),p=Fe.get(Y),p.init(),v.push(p),Y.traverseVisible(function($){$.isLight&&$.layers.test(V.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),b!==Y&&b.traverseVisible(function($){$.isLight&&$.layers.test(V.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),p.setupLights(g._useLegacyLights);const Z=new Set;return b.traverse(function($){const we=$.material;if(we)if(Array.isArray(we))for(let De=0;De<we.length;De++){const Be=we[De];he(Be,Y,$),Z.add(Be)}else he(we,Y,$),Z.add(we)}),v.pop(),p=null,Z},this.compileAsync=function(b,V,Y=null){const Z=this.compile(b,V,Y);return new Promise($=>{function we(){if(Z.forEach(function(De){Ge.get(De).currentProgram.isReady()&&Z.delete(De)}),Z.size===0){$(b);return}setTimeout(we,10)}Re.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let ye=null;function ve(b){ye&&ye(b)}function We(){ke.stop()}function Ie(){ke.start()}const ke=new wv;ke.setAnimationLoop(ve),typeof self<"u"&&ke.setContext(self),this.setAnimationLoop=function(b){ye=b,k.setAnimationLoop(b),b===null?ke.stop():ke.start()},k.addEventListener("sessionstart",We),k.addEventListener("sessionend",Ie),this.render=function(b,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),k.enabled===!0&&k.isPresenting===!0&&(k.cameraAutoUpdate===!0&&k.updateCamera(V),V=k.getCamera()),b.isScene===!0&&b.onBeforeRender(g,b,V,T),p=Fe.get(b,v.length),p.init(),v.push(p),Se.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Ae.setFromProjectionMatrix(Se),j=this.localClippingEnabled,W=pe.init(this.clippingPlanes,j),x=je.get(b,u.length),x.init(),u.push(x),Oe(b,V,0,g.sortObjects),x.finish(),g.sortObjects===!0&&x.sort(D,F),this.info.render.frame++,W===!0&&pe.beginShadows();const Y=p.state.shadowsArray;if(ge.render(Y,b,V),W===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(k.enabled===!1||k.isPresenting===!1||k.hasDepthSensing()===!1)&&ze.render(x,b),p.setupLights(g._useLegacyLights),V.isArrayCamera){const Z=V.cameras;for(let $=0,we=Z.length;$<we;$++){const De=Z[$];st(x,b,De,De.viewport)}}else st(x,b,V);T!==null&&(Le.updateMultisampleRenderTarget(T),Le.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(g,b,V),be.resetDefaultState(),N=-1,re=null,v.pop(),v.length>0?p=v[v.length-1]:p=null,u.pop(),u.length>0?x=u[u.length-1]:x=null};function Oe(b,V,Y,Z){if(b.visible===!1)return;if(b.layers.test(V.layers)){if(b.isGroup)Y=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(V);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ae.intersectsSprite(b)){Z&&xe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Se);const De=se.update(b),Be=b.material;Be.visible&&x.push(b,De,Be,Y,xe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ae.intersectsObject(b))){const De=se.update(b),Be=b.material;if(Z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),xe.copy(b.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),xe.copy(De.boundingSphere.center)),xe.applyMatrix4(b.matrixWorld).applyMatrix4(Se)),Array.isArray(Be)){const qe=De.groups;for(let et=0,$e=qe.length;et<$e;et++){const Ke=qe[et],bt=Be[Ke.materialIndex];bt&&bt.visible&&x.push(b,De,bt,Y,xe.z,Ke)}}else Be.visible&&x.push(b,De,Be,Y,xe.z,null)}}const we=b.children;for(let De=0,Be=we.length;De<Be;De++)Oe(we[De],V,Y,Z)}function st(b,V,Y,Z){const $=b.opaque,we=b.transmissive,De=b.transparent;p.setupLightsView(Y),W===!0&&pe.setGlobalState(g.clippingPlanes,Y),we.length>0&&Ct($,we,V,Y),Z&&de.viewport(y.copy(Z)),$.length>0&&it($,V,Y),we.length>0&&it(we,V,Y),De.length>0&&it(De,V,Y),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function Ct(b,V,Y,Z){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;const we=Ve.isWebGL2;oe===null&&(oe=new Br(1,1,{generateMipmaps:!0,type:Re.has("EXT_color_buffer_half_float")?Qa:ir,minFilter:Rr,samples:we?4:0})),g.getDrawingBufferSize(_e),we?oe.setSize(_e.x,_e.y):oe.setSize(Yl(_e.x),Yl(_e.y));const De=g.getRenderTarget();g.setRenderTarget(oe),g.getClearColor(ee),I=g.getClearAlpha(),I<1&&g.setClearColor(16777215,.5),g.clear();const Be=g.toneMapping;g.toneMapping=nr,it(b,Y,Z),Le.updateMultisampleRenderTarget(oe),Le.updateRenderTargetMipmap(oe);let qe=!1;for(let et=0,$e=V.length;et<$e;et++){const Ke=V[et],bt=Ke.object,_n=Ke.geometry,Ut=Ke.material,li=Ke.group;if(Ut.side===si&&bt.layers.test(Z.layers)){const St=Ut.side;Ut.side=Qt,Ut.needsUpdate=!0,lt(bt,Y,Z,_n,Ut,li),Ut.side=St,Ut.needsUpdate=!0,qe=!0}}qe===!0&&(Le.updateMultisampleRenderTarget(oe),Le.updateRenderTargetMipmap(oe)),g.setRenderTarget(De),g.setClearColor(ee,I),g.toneMapping=Be}function it(b,V,Y){const Z=V.isScene===!0?V.overrideMaterial:null;for(let $=0,we=b.length;$<we;$++){const De=b[$],Be=De.object,qe=De.geometry,et=Z===null?De.material:Z,$e=De.group;Be.layers.test(Y.layers)&&lt(Be,V,Y,qe,et,$e)}}function lt(b,V,Y,Z,$,we){b.onBeforeRender(g,V,Y,Z,$,we),b.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),$.onBeforeRender(g,V,Y,Z,b,we),$.transparent===!0&&$.side===si&&$.forceSinglePass===!1?($.side=Qt,$.needsUpdate=!0,g.renderBufferDirect(Y,V,Z,$,b,we),$.side=ar,$.needsUpdate=!0,g.renderBufferDirect(Y,V,Z,$,b,we),$.side=si):g.renderBufferDirect(Y,V,Z,$,b,we),b.onAfterRender(g,V,Y,Z,$,we)}function ut(b,V,Y){V.isScene!==!0&&(V=He);const Z=Ge.get(b),$=p.state.lights,we=p.state.shadowsArray,De=$.state.version,Be=ce.getParameters(b,$.state,we,V,Y),qe=ce.getProgramCacheKey(Be);let et=Z.programs;Z.environment=b.isMeshStandardMaterial?V.environment:null,Z.fog=V.fog,Z.envMap=(b.isMeshStandardMaterial?L:Xe).get(b.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&b.envMap===null?V.environmentRotation:b.envMapRotation,et===void 0&&(b.addEventListener("dispose",U),et=new Map,Z.programs=et);let $e=et.get(qe);if($e!==void 0){if(Z.currentProgram===$e&&Z.lightsStateVersion===De)return Xr(b,Be),$e}else Be.uniforms=ce.getUniforms(b),b.onBuild(Y,Be,g),b.onBeforeCompile(Be,g),$e=ce.acquireProgram(Be,qe),et.set(qe,$e),Z.uniforms=Be.uniforms;const Ke=Z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ke.clippingPlanes=pe.uniform),Xr(b,Be),Z.needsLights=xc(b),Z.lightsStateVersion=De,Z.needsLights&&(Ke.ambientLightColor.value=$.state.ambient,Ke.lightProbe.value=$.state.probe,Ke.directionalLights.value=$.state.directional,Ke.directionalLightShadows.value=$.state.directionalShadow,Ke.spotLights.value=$.state.spot,Ke.spotLightShadows.value=$.state.spotShadow,Ke.rectAreaLights.value=$.state.rectArea,Ke.ltc_1.value=$.state.rectAreaLTC1,Ke.ltc_2.value=$.state.rectAreaLTC2,Ke.pointLights.value=$.state.point,Ke.pointLightShadows.value=$.state.pointShadow,Ke.hemisphereLights.value=$.state.hemi,Ke.directionalShadowMap.value=$.state.directionalShadowMap,Ke.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ke.spotShadowMap.value=$.state.spotShadowMap,Ke.spotLightMatrix.value=$.state.spotLightMatrix,Ke.spotLightMap.value=$.state.spotLightMap,Ke.pointShadowMap.value=$.state.pointShadowMap,Ke.pointShadowMatrix.value=$.state.pointShadowMatrix),Z.currentProgram=$e,Z.uniformsList=null,$e}function zt(b){if(b.uniformsList===null){const V=b.currentProgram.getUniforms();b.uniformsList=vl.seqWithValue(V.seq,b.uniforms)}return b.uniformsList}function Xr(b,V){const Y=Ge.get(b);Y.outputColorSpace=V.outputColorSpace,Y.batching=V.batching,Y.instancing=V.instancing,Y.instancingColor=V.instancingColor,Y.instancingMorph=V.instancingMorph,Y.skinning=V.skinning,Y.morphTargets=V.morphTargets,Y.morphNormals=V.morphNormals,Y.morphColors=V.morphColors,Y.morphTargetsCount=V.morphTargetsCount,Y.numClippingPlanes=V.numClippingPlanes,Y.numIntersection=V.numClipIntersection,Y.vertexAlphas=V.vertexAlphas,Y.vertexTangents=V.vertexTangents,Y.toneMapping=V.toneMapping}function Rn(b,V,Y,Z,$){V.isScene!==!0&&(V=He),Le.resetTextureUnits();const we=V.fog,De=Z.isMeshStandardMaterial?V.environment:null,Be=T===null?g.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:dr,qe=(Z.isMeshStandardMaterial?L:Xe).get(Z.envMap||De),et=Z.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,$e=!!Y.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ke=!!Y.morphAttributes.position,bt=!!Y.morphAttributes.normal,_n=!!Y.morphAttributes.color;let Ut=nr;Z.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Ut=g.toneMapping);const li=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,St=li!==void 0?li.length:0,Ze=Ge.get(Z),yc=p.state.lights;if(W===!0&&(j===!0||b!==re)){const Pn=b===re&&Z.id===N;pe.setState(Z,b,Pn)}let _t=!1;Z.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==yc.state.version||Ze.outputColorSpace!==Be||$.isBatchedMesh&&Ze.batching===!1||!$.isBatchedMesh&&Ze.batching===!0||$.isInstancedMesh&&Ze.instancing===!1||!$.isInstancedMesh&&Ze.instancing===!0||$.isSkinnedMesh&&Ze.skinning===!1||!$.isSkinnedMesh&&Ze.skinning===!0||$.isInstancedMesh&&Ze.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ze.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ze.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ze.instancingMorph===!1&&$.morphTexture!==null||Ze.envMap!==qe||Z.fog===!0&&Ze.fog!==we||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==pe.numPlanes||Ze.numIntersection!==pe.numIntersection)||Ze.vertexAlphas!==et||Ze.vertexTangents!==$e||Ze.morphTargets!==Ke||Ze.morphNormals!==bt||Ze.morphColors!==_n||Ze.toneMapping!==Ut||Ve.isWebGL2===!0&&Ze.morphTargetsCount!==St)&&(_t=!0):(_t=!0,Ze.__version=Z.version);let fr=Ze.currentProgram;_t===!0&&(fr=ut(Z,V,$));let Xf=!1,ta=!1,Sc=!1;const Xt=fr.getUniforms(),hr=Ze.uniforms;if(de.useProgram(fr.program)&&(Xf=!0,ta=!0,Sc=!0),Z.id!==N&&(N=Z.id,ta=!0),Xf||re!==b){Xt.setValue(G,"projectionMatrix",b.projectionMatrix),Xt.setValue(G,"viewMatrix",b.matrixWorldInverse);const Pn=Xt.map.cameraPosition;Pn!==void 0&&Pn.setValue(G,xe.setFromMatrixPosition(b.matrixWorld)),Ve.logarithmicDepthBuffer&&Xt.setValue(G,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Xt.setValue(G,"isOrthographic",b.isOrthographicCamera===!0),re!==b&&(re=b,ta=!0,Sc=!0)}if($.isSkinnedMesh){Xt.setOptional(G,$,"bindMatrix"),Xt.setOptional(G,$,"bindMatrixInverse");const Pn=$.skeleton;Pn&&(Ve.floatVertexTextures?(Pn.boneTexture===null&&Pn.computeBoneTexture(),Xt.setValue(G,"boneTexture",Pn.boneTexture,Le)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}$.isBatchedMesh&&(Xt.setOptional(G,$,"batchingTexture"),Xt.setValue(G,"batchingTexture",$._matricesTexture,Le));const Mc=Y.morphAttributes;if((Mc.position!==void 0||Mc.normal!==void 0||Mc.color!==void 0&&Ve.isWebGL2===!0)&&fe.update($,Y,fr),(ta||Ze.receiveShadow!==$.receiveShadow)&&(Ze.receiveShadow=$.receiveShadow,Xt.setValue(G,"receiveShadow",$.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(hr.envMap.value=qe,hr.flipEnvMap.value=qe.isCubeTexture&&qe.isRenderTargetTexture===!1?-1:1),ta&&(Xt.setValue(G,"toneMappingExposure",g.toneMappingExposure),Ze.needsLights&&_c(hr,Sc),we&&Z.fog===!0&&le.refreshFogUniforms(hr,we),le.refreshMaterialUniforms(hr,Z,H,B,oe),vl.upload(G,zt(Ze),hr,Le)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(vl.upload(G,zt(Ze),hr,Le),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Xt.setValue(G,"center",$.center),Xt.setValue(G,"modelViewMatrix",$.modelViewMatrix),Xt.setValue(G,"normalMatrix",$.normalMatrix),Xt.setValue(G,"modelMatrix",$.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const Pn=Z.uniformsGroups;for(let Ec=0,qv=Pn.length;Ec<qv;Ec++)if(Ve.isWebGL2){const qf=Pn[Ec];Pe.update(qf,fr),Pe.bind(qf,fr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return fr}function _c(b,V){b.ambientLightColor.needsUpdate=V,b.lightProbe.needsUpdate=V,b.directionalLights.needsUpdate=V,b.directionalLightShadows.needsUpdate=V,b.pointLights.needsUpdate=V,b.pointLightShadows.needsUpdate=V,b.spotLights.needsUpdate=V,b.spotLightShadows.needsUpdate=V,b.rectAreaLights.needsUpdate=V,b.hemisphereLights.needsUpdate=V}function xc(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,V,Y){Ge.get(b.texture).__webglTexture=V,Ge.get(b.depthTexture).__webglTexture=Y;const Z=Ge.get(b);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=Y===void 0,Z.__autoAllocateDepthBuffer||Re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,V){const Y=Ge.get(b);Y.__webglFramebuffer=V,Y.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(b,V=0,Y=0){T=b,P=V,A=Y;let Z=!0,$=null,we=!1,De=!1;if(b){const qe=Ge.get(b);qe.__useDefaultFramebuffer!==void 0?(de.bindFramebuffer(G.FRAMEBUFFER,null),Z=!1):qe.__webglFramebuffer===void 0?Le.setupRenderTarget(b):qe.__hasExternalTextures&&Le.rebindTextures(b,Ge.get(b.texture).__webglTexture,Ge.get(b.depthTexture).__webglTexture);const et=b.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(De=!0);const $e=Ge.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray($e[V])?$=$e[V][Y]:$=$e[V],we=!0):Ve.isWebGL2&&b.samples>0&&Le.useMultisampledRTT(b)===!1?$=Ge.get(b).__webglMultisampledFramebuffer:Array.isArray($e)?$=$e[Y]:$=$e,y.copy(b.viewport),C.copy(b.scissor),Q=b.scissorTest}else y.copy(z).multiplyScalar(H).floor(),C.copy(K).multiplyScalar(H).floor(),Q=ae;if(de.bindFramebuffer(G.FRAMEBUFFER,$)&&Ve.drawBuffers&&Z&&de.drawBuffers(b,$),de.viewport(y),de.scissor(C),de.setScissorTest(Q),we){const qe=Ge.get(b.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+V,qe.__webglTexture,Y)}else if(De){const qe=Ge.get(b.texture),et=V||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,qe.__webglTexture,Y||0,et)}N=-1},this.readRenderTargetPixels=function(b,V,Y,Z,$,we,De){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=Ge.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&De!==void 0&&(Be=Be[De]),Be){de.bindFramebuffer(G.FRAMEBUFFER,Be);try{const qe=b.texture,et=qe.format,$e=qe.type;if(et!==Xn&&Ne.convert(et)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ke=$e===Qa&&(Re.has("EXT_color_buffer_half_float")||Ve.isWebGL2&&Re.has("EXT_color_buffer_float"));if($e!==ir&&Ne.convert($e)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&!($e===vi&&(Ve.isWebGL2||Re.has("OES_texture_float")||Re.has("WEBGL_color_buffer_float")))&&!Ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=b.width-Z&&Y>=0&&Y<=b.height-$&&G.readPixels(V,Y,Z,$,Ne.convert(et),Ne.convert($e),we)}finally{const qe=T!==null?Ge.get(T).__webglFramebuffer:null;de.bindFramebuffer(G.FRAMEBUFFER,qe)}}},this.copyFramebufferToTexture=function(b,V,Y=0){const Z=Math.pow(2,-Y),$=Math.floor(V.image.width*Z),we=Math.floor(V.image.height*Z);Le.setTexture2D(V,0),G.copyTexSubImage2D(G.TEXTURE_2D,Y,0,0,b.x,b.y,$,we),de.unbindTexture()},this.copyTextureToTexture=function(b,V,Y,Z=0){const $=V.image.width,we=V.image.height,De=Ne.convert(Y.format),Be=Ne.convert(Y.type);Le.setTexture2D(Y,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Y.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Y.unpackAlignment),V.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Z,b.x,b.y,$,we,De,Be,V.image.data):V.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Z,b.x,b.y,V.mipmaps[0].width,V.mipmaps[0].height,De,V.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,Z,b.x,b.y,De,Be,V.image),Z===0&&Y.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),de.unbindTexture()},this.copyTextureToTexture3D=function(b,V,Y,Z,$=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const we=Math.round(b.max.x-b.min.x),De=Math.round(b.max.y-b.min.y),Be=b.max.z-b.min.z+1,qe=Ne.convert(Z.format),et=Ne.convert(Z.type);let $e;if(Z.isData3DTexture)Le.setTexture3D(Z,0),$e=G.TEXTURE_3D;else if(Z.isDataArrayTexture||Z.isCompressedArrayTexture)Le.setTexture2DArray(Z,0),$e=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Z.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Z.unpackAlignment);const Ke=G.getParameter(G.UNPACK_ROW_LENGTH),bt=G.getParameter(G.UNPACK_IMAGE_HEIGHT),_n=G.getParameter(G.UNPACK_SKIP_PIXELS),Ut=G.getParameter(G.UNPACK_SKIP_ROWS),li=G.getParameter(G.UNPACK_SKIP_IMAGES),St=Y.isCompressedTexture?Y.mipmaps[$]:Y.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,St.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,St.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,b.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,b.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,b.min.z),Y.isDataTexture||Y.isData3DTexture?G.texSubImage3D($e,$,V.x,V.y,V.z,we,De,Be,qe,et,St.data):Z.isCompressedArrayTexture?G.compressedTexSubImage3D($e,$,V.x,V.y,V.z,we,De,Be,qe,St.data):G.texSubImage3D($e,$,V.x,V.y,V.z,we,De,Be,qe,et,St),G.pixelStorei(G.UNPACK_ROW_LENGTH,Ke),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,bt),G.pixelStorei(G.UNPACK_SKIP_PIXELS,_n),G.pixelStorei(G.UNPACK_SKIP_ROWS,Ut),G.pixelStorei(G.UNPACK_SKIP_IMAGES,li),$===0&&Z.generateMipmaps&&G.generateMipmap($e),de.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?Le.setTextureCube(b,0):b.isData3DTexture?Le.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Le.setTexture2DArray(b,0):Le.setTexture2D(b,0),de.unbindTexture()},this.resetState=function(){P=0,A=0,T=null,de.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Ff?"display-p3":"srgb",n.unpackColorSpace=ct.workingColorSpace===mc?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class qT extends Lv{}qT.prototype.isWebGL1Renderer=!0;class $T extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ci,this.environmentRotation=new Ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class YT{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Nd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Mi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return pv("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const nn=new O;class Kl{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.applyMatrix4(e),this.setXYZ(n,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.applyNormalMatrix(e),this.setXYZ(n,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.transformDirection(e),this.setXYZ(n,nn.x,nn.y,nn.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=qn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=at(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=qn(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=qn(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=qn(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=qn(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=at(n,this.array),i=at(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=at(n,this.array),i=at(i,this.array),r=at(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=at(n,this.array),i=at(i,this.array),r=at(r,this.array),s=at(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new Tn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Kl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class _l extends jr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let fs;const ma=new O,hs=new O,ps=new O,ms=new Ce,ga=new Ce,Nv=new ft,Ko=new O,va=new O,Zo=new O,Em=new Ce,Au=new Ce,wm=new Ce;class Cu extends Wt{constructor(e=new _l){if(super(),this.isSprite=!0,this.type="Sprite",fs===void 0){fs=new vn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new YT(n,5);fs.setIndex([0,1,2,0,2,3]),fs.setAttribute("position",new Kl(i,3,0,!1)),fs.setAttribute("uv",new Kl(i,2,3,!1))}this.geometry=fs,this.material=e,this.center=new Ce(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),hs.setFromMatrixScale(this.matrixWorld),Nv.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ps.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&hs.multiplyScalar(-ps.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;Qo(Ko.set(-.5,-.5,0),ps,a,hs,r,s),Qo(va.set(.5,-.5,0),ps,a,hs,r,s),Qo(Zo.set(.5,.5,0),ps,a,hs,r,s),Em.set(0,0),Au.set(1,0),wm.set(1,1);let o=e.ray.intersectTriangle(Ko,va,Zo,!1,ma);if(o===null&&(Qo(va.set(-.5,.5,0),ps,a,hs,r,s),Au.set(0,1),o=e.ray.intersectTriangle(Ko,Zo,va,!1,ma),o===null))return;const l=e.ray.origin.distanceTo(ma);l<e.near||l>e.far||n.push({distance:l,point:ma.clone(),uv:$n.getInterpolation(ma,Ko,va,Zo,Em,Au,wm,new Ce),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Qo(t,e,n,i,r,s){ms.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(ga.x=s*ms.x-r*ms.y,ga.y=r*ms.x+s*ms.y):ga.copy(ms),t.copy(e),t.x+=ga.x,t.y+=ga.y,t.applyMatrix4(Nv)}class Dv extends jr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Tm=new O,bm=new O,Am=new ft,Ru=new co,Jo=new lo;class KT extends Wt{constructor(e=new vn,n=new Dv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Tm.fromBufferAttribute(n,r-1),bm.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Tm.distanceTo(bm);e.setAttribute("lineDistance",new gn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Jo.copy(i.boundingSphere),Jo.applyMatrix4(r),Jo.radius+=s,e.ray.intersectsSphere(Jo)===!1)return;Am.copy(r).invert(),Ru.copy(e.ray).applyMatrix4(Am);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new O,f=new O,d=new O,h=new O,m=this.isLineSegments?2:1,_=i.index,p=i.attributes.position;if(_!==null){const u=Math.max(0,a.start),v=Math.min(_.count,a.start+a.count);for(let g=u,M=v-1;g<M;g+=m){const P=_.getX(g),A=_.getX(g+1);if(c.fromBufferAttribute(p,P),f.fromBufferAttribute(p,A),Ru.distanceSqToSegment(c,f,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const N=e.ray.origin.distanceTo(h);N<e.near||N>e.far||n.push({distance:N,point:d.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,a.start),v=Math.min(p.count,a.start+a.count);for(let g=u,M=v-1;g<M;g+=m){if(c.fromBufferAttribute(p,g),f.fromBufferAttribute(p,g+1),Ru.distanceSqToSegment(c,f,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(h);A<e.near||A>e.far||n.push({distance:A,point:d.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}class Iv extends jr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Cm=new ft,Fd=new co,el=new lo,tl=new O;class ZT extends Wt{constructor(e=new vn,n=new Iv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),el.copy(i.boundingSphere),el.applyMatrix4(r),el.radius+=s,e.ray.intersectsSphere(el)===!1)return;Cm.copy(r).invert(),Fd.copy(e.ray).applyMatrix4(Cm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let _=h,x=m;_<x;_++){const p=c.getX(_);tl.fromBufferAttribute(d,p),Rm(tl,p,l,r,e,n,this)}}else{const h=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let _=h,x=m;_<x;_++)tl.fromBufferAttribute(d,_),Rm(tl,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Rm(t,e,n,i,r,s,a){const o=Fd.distanceSqToPoint(t);if(o<n){const l=new O;Fd.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class Pm extends Jt{constructor(e,n,i,r,s,a,o,l,c){super(e,n,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Hf extends vn{constructor(e=[new Ce(0,-.5),new Ce(.5,0),new Ce(0,.5)],n=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:n,phiStart:i,phiLength:r},n=Math.floor(n),r=Vt(r,0,Math.PI*2);const s=[],a=[],o=[],l=[],c=[],f=1/n,d=new O,h=new Ce,m=new O,_=new O,x=new O;let p=0,u=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:p=e[v+1].x-e[v].x,u=e[v+1].y-e[v].y,m.x=u*1,m.y=-p,m.z=u*0,x.copy(m),m.normalize(),l.push(m.x,m.y,m.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:p=e[v+1].x-e[v].x,u=e[v+1].y-e[v].y,m.x=u*1,m.y=-p,m.z=u*0,_.copy(m),m.x+=x.x,m.y+=x.y,m.z+=x.z,m.normalize(),l.push(m.x,m.y,m.z),x.copy(_)}for(let v=0;v<=n;v++){const g=i+v*f*r,M=Math.sin(g),P=Math.cos(g);for(let A=0;A<=e.length-1;A++){d.x=e[A].x*M,d.y=e[A].y,d.z=e[A].x*P,a.push(d.x,d.y,d.z),h.x=v/n,h.y=A/(e.length-1),o.push(h.x,h.y);const T=l[3*A+0]*M,N=l[3*A+1],re=l[3*A+0]*P;c.push(T,N,re)}}for(let v=0;v<n;v++)for(let g=0;g<e.length-1;g++){const M=g+v*e.length,P=M,A=M+e.length,T=M+e.length+1,N=M+1;s.push(P,A,N),s.push(T,N,A)}this.setIndex(s),this.setAttribute("position",new gn(a,3)),this.setAttribute("uv",new gn(o,2)),this.setAttribute("normal",new gn(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hf(e.points,e.segments,e.phiStart,e.phiLength)}}class Tr extends vn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const f=[],d=new O,h=new O,m=[],_=[],x=[],p=[];for(let u=0;u<=i;u++){const v=[],g=u/i;let M=0;u===0&&a===0?M=.5/n:u===i&&l===Math.PI&&(M=-.5/n);for(let P=0;P<=n;P++){const A=P/n;d.x=-e*Math.cos(r+A*s)*Math.sin(a+g*o),d.y=e*Math.cos(a+g*o),d.z=e*Math.sin(r+A*s)*Math.sin(a+g*o),_.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),p.push(A+M,1-g),v.push(c++)}f.push(v)}for(let u=0;u<i;u++)for(let v=0;v<n;v++){const g=f[u][v+1],M=f[u][v],P=f[u+1][v],A=f[u+1][v+1];(u!==0||a>0)&&m.push(g,M,A),(u!==i-1||l<Math.PI)&&m.push(M,P,A)}this.setIndex(m),this.setAttribute("position",new gn(_,3)),this.setAttribute("normal",new gn(x,3)),this.setAttribute("uv",new gn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const Lm={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class QT{constructor(e,n,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(f){o++,s===!1&&r.onStart!==void 0&&r.onStart(f,a,o),s=!0},this.itemEnd=function(f){a++,r.onProgress!==void 0&&r.onProgress(f,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,d){return c.push(f,d),this},this.removeHandler=function(f){const d=c.indexOf(f);return d!==-1&&c.splice(d,2),this},this.getHandler=function(f){for(let d=0,h=c.length;d<h;d+=2){const m=c[d],_=c[d+1];if(m.global&&(m.lastIndex=0),m.test(f))return _}return null}}}const JT=new QT;class Vf{constructor(e){this.manager=e!==void 0?e:JT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Vf.DEFAULT_MATERIAL_NAME="__DEFAULT";class eb extends Vf{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Lm.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(a),s.manager.itemEnd(e)},0),a;const o=eo("img");function l(){f(),Lm.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(d){f(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class tb extends Vf{constructor(e){super(e)}load(e,n,i,r){const s=new Jt,a=new eb(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class Uv extends Wt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Pu=new ft,Nm=new O,Dm=new O;class nb{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zf,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Nm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Nm),Dm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Dm),n.updateMatrixWorld(),Pu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Pu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Im=new ft,_a=new O,Lu=new O;class ib extends nb{constructor(){super(new Mn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ce(4,2),this._viewportCount=6,this._viewports=[new yt(2,1,1,1),new yt(0,1,1,1),new yt(3,1,1,1),new yt(1,1,1,1),new yt(3,0,1,1),new yt(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),_a.setFromMatrixPosition(e.matrixWorld),i.position.copy(_a),Lu.copy(i.position),Lu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Lu),i.updateMatrixWorld(),r.makeTranslation(-_a.x,-_a.y,-_a.z),Im.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Im)}}class rb extends Uv{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new ib}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class sb extends Uv{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Um=new ft;class nl{constructor(e,n,i=0,r=1/0){this.ray=new co(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new kf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Um.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Um),this}intersectObject(e,n=!0,i=[]){return Od(e,this,i,n),i.sort(Fm),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Od(e[r],this,i,n);return i.sort(Fm),i}}function Fm(t,e){return t.distance-e.distance}function Od(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,a=r.length;s<a;s++)Od(r[s],e,n,!0)}}class Om{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Vt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Df}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Df);const km={type:"change"},Nu={type:"start"},zm={type:"end"},il=new co,Bm=new ni,ab=Math.cos(70*fv.DEG2RAD);class ob extends Wr{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:$r.ROTATE,MIDDLE:$r.DOLLY,RIGHT:$r.PAN},this.touches={ONE:Yr.ROTATE,TWO:Yr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(E){E.addEventListener("keydown",Fe),this._domElementKeyEvents=E},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Fe),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(km),i.update(),s=r.NONE},this.update=function(){const E=new O,k=new Hr().setFromUnitVectors(e.up,new O(0,1,0)),ie=k.clone().invert(),R=new O,q=new Hr,U=new O,X=2*Math.PI;return function(he=null){const ye=i.object.position;E.copy(ye).sub(i.target),E.applyQuaternion(k),o.setFromVector3(E),i.autoRotate&&s===r.NONE&&Q(y(he)),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let ve=i.minAzimuthAngle,We=i.maxAzimuthAngle;isFinite(ve)&&isFinite(We)&&(ve<-Math.PI?ve+=X:ve>Math.PI&&(ve-=X),We<-Math.PI?We+=X:We>Math.PI&&(We-=X),ve<=We?o.theta=Math.max(ve,Math.min(We,o.theta)):o.theta=o.theta>(ve+We)/2?Math.max(ve,o.theta):Math.min(We,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(f,i.dampingFactor):i.target.add(f),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let Ie=!1;if(i.zoomToCursor&&A||i.object.isOrthographicCamera)o.radius=z(o.radius);else{const ke=o.radius;o.radius=z(o.radius*c),Ie=ke!=o.radius}if(E.setFromSpherical(o),E.applyQuaternion(ie),ye.copy(i.target).add(E),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,f.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),f.set(0,0,0)),i.zoomToCursor&&A){let ke=null;if(i.object.isPerspectiveCamera){const Oe=E.length();ke=z(Oe*c);const st=Oe-ke;i.object.position.addScaledVector(M,st),i.object.updateMatrixWorld(),Ie=!!st}else if(i.object.isOrthographicCamera){const Oe=new O(P.x,P.y,0);Oe.unproject(i.object);const st=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Ie=st!==i.object.zoom;const Ct=new O(P.x,P.y,0);Ct.unproject(i.object),i.object.position.sub(Ct).add(Oe),i.object.updateMatrixWorld(),ke=E.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;ke!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(ke).add(i.object.position):(il.origin.copy(i.object.position),il.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(il.direction))<ab?e.lookAt(i.target):(Bm.setFromNormalAndCoplanarPoint(i.object.up,i.target),il.intersectPlane(Bm,i.target))))}else if(i.object.isOrthographicCamera){const ke=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),ke!==i.object.zoom&&(i.object.updateProjectionMatrix(),Ie=!0)}return c=1,A=!1,Ie||R.distanceToSquared(i.object.position)>a||8*(1-q.dot(i.object.quaternion))>a||U.distanceToSquared(i.target)>a?(i.dispatchEvent(km),R.copy(i.object.position),q.copy(i.object.quaternion),U.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",ze),i.domElement.removeEventListener("pointerdown",Le),i.domElement.removeEventListener("pointercancel",L),i.domElement.removeEventListener("wheel",se),i.domElement.removeEventListener("pointermove",Xe),i.domElement.removeEventListener("pointerup",L),i.domElement.getRootNode().removeEventListener("keydown",le,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Fe),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new Om,l=new Om;let c=1;const f=new O,d=new Ce,h=new Ce,m=new Ce,_=new Ce,x=new Ce,p=new Ce,u=new Ce,v=new Ce,g=new Ce,M=new O,P=new Ce;let A=!1;const T=[],N={};let re=!1;function y(E){return E!==null?2*Math.PI/60*i.autoRotateSpeed*E:2*Math.PI/60/60*i.autoRotateSpeed}function C(E){const k=Math.abs(E*.01);return Math.pow(.95,i.zoomSpeed*k)}function Q(E){l.theta-=E}function ee(E){l.phi-=E}const I=function(){const E=new O;return function(ie,R){E.setFromMatrixColumn(R,0),E.multiplyScalar(-ie),f.add(E)}}(),J=function(){const E=new O;return function(ie,R){i.screenSpacePanning===!0?E.setFromMatrixColumn(R,1):(E.setFromMatrixColumn(R,0),E.crossVectors(i.object.up,E)),E.multiplyScalar(ie),f.add(E)}}(),B=function(){const E=new O;return function(ie,R){const q=i.domElement;if(i.object.isPerspectiveCamera){const U=i.object.position;E.copy(U).sub(i.target);let X=E.length();X*=Math.tan(i.object.fov/2*Math.PI/180),I(2*ie*X/q.clientHeight,i.object.matrix),J(2*R*X/q.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(I(ie*(i.object.right-i.object.left)/i.object.zoom/q.clientWidth,i.object.matrix),J(R*(i.object.top-i.object.bottom)/i.object.zoom/q.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function H(E){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=E:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function D(E){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=E:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function F(E,k){if(!i.zoomToCursor)return;A=!0;const ie=i.domElement.getBoundingClientRect(),R=E-ie.left,q=k-ie.top,U=ie.width,X=ie.height;P.x=R/U*2-1,P.y=-(q/X)*2+1,M.set(P.x,P.y,1).unproject(i.object).sub(i.object.position).normalize()}function z(E){return Math.max(i.minDistance,Math.min(i.maxDistance,E))}function K(E){d.set(E.clientX,E.clientY)}function ae(E){F(E.clientX,E.clientX),u.set(E.clientX,E.clientY)}function Ae(E){_.set(E.clientX,E.clientY)}function W(E){h.set(E.clientX,E.clientY),m.subVectors(h,d).multiplyScalar(i.rotateSpeed);const k=i.domElement;Q(2*Math.PI*m.x/k.clientHeight),ee(2*Math.PI*m.y/k.clientHeight),d.copy(h),i.update()}function j(E){v.set(E.clientX,E.clientY),g.subVectors(v,u),g.y>0?H(C(g.y)):g.y<0&&D(C(g.y)),u.copy(v),i.update()}function oe(E){x.set(E.clientX,E.clientY),p.subVectors(x,_).multiplyScalar(i.panSpeed),B(p.x,p.y),_.copy(x),i.update()}function Se(E){F(E.clientX,E.clientY),E.deltaY<0?D(C(E.deltaY)):E.deltaY>0&&H(C(E.deltaY)),i.update()}function _e(E){let k=!1;switch(E.code){case i.keys.UP:E.ctrlKey||E.metaKey||E.shiftKey?ee(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(0,i.keyPanSpeed),k=!0;break;case i.keys.BOTTOM:E.ctrlKey||E.metaKey||E.shiftKey?ee(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(0,-i.keyPanSpeed),k=!0;break;case i.keys.LEFT:E.ctrlKey||E.metaKey||E.shiftKey?Q(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(i.keyPanSpeed,0),k=!0;break;case i.keys.RIGHT:E.ctrlKey||E.metaKey||E.shiftKey?Q(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(-i.keyPanSpeed,0),k=!0;break}k&&(E.preventDefault(),i.update())}function xe(E){if(T.length===1)d.set(E.pageX,E.pageY);else{const k=be(E),ie=.5*(E.pageX+k.x),R=.5*(E.pageY+k.y);d.set(ie,R)}}function He(E){if(T.length===1)_.set(E.pageX,E.pageY);else{const k=be(E),ie=.5*(E.pageX+k.x),R=.5*(E.pageY+k.y);_.set(ie,R)}}function Ee(E){const k=be(E),ie=E.pageX-k.x,R=E.pageY-k.y,q=Math.sqrt(ie*ie+R*R);u.set(0,q)}function G(E){i.enableZoom&&Ee(E),i.enablePan&&He(E)}function vt(E){i.enableZoom&&Ee(E),i.enableRotate&&xe(E)}function Re(E){if(T.length==1)h.set(E.pageX,E.pageY);else{const ie=be(E),R=.5*(E.pageX+ie.x),q=.5*(E.pageY+ie.y);h.set(R,q)}m.subVectors(h,d).multiplyScalar(i.rotateSpeed);const k=i.domElement;Q(2*Math.PI*m.x/k.clientHeight),ee(2*Math.PI*m.y/k.clientHeight),d.copy(h)}function Ve(E){if(T.length===1)x.set(E.pageX,E.pageY);else{const k=be(E),ie=.5*(E.pageX+k.x),R=.5*(E.pageY+k.y);x.set(ie,R)}p.subVectors(x,_).multiplyScalar(i.panSpeed),B(p.x,p.y),_.copy(x)}function de(E){const k=be(E),ie=E.pageX-k.x,R=E.pageY-k.y,q=Math.sqrt(ie*ie+R*R);v.set(0,q),g.set(0,Math.pow(v.y/u.y,i.zoomSpeed)),H(g.y),u.copy(v);const U=(E.pageX+k.x)*.5,X=(E.pageY+k.y)*.5;F(U,X)}function Ue(E){i.enableZoom&&de(E),i.enablePan&&Ve(E)}function Ge(E){i.enableZoom&&de(E),i.enableRotate&&Re(E)}function Le(E){i.enabled!==!1&&(T.length===0&&(i.domElement.setPointerCapture(E.pointerId),i.domElement.addEventListener("pointermove",Xe),i.domElement.addEventListener("pointerup",L)),!Ye(E)&&(fe(E),E.pointerType==="touch"?pe(E):w(E)))}function Xe(E){i.enabled!==!1&&(E.pointerType==="touch"?ge(E):te(E))}function L(E){switch(ht(E),T.length){case 0:i.domElement.releasePointerCapture(E.pointerId),i.domElement.removeEventListener("pointermove",Xe),i.domElement.removeEventListener("pointerup",L),i.dispatchEvent(zm),s=r.NONE;break;case 1:const k=T[0],ie=N[k];pe({pointerId:k,pageX:ie.x,pageY:ie.y});break}}function w(E){let k;switch(E.button){case 0:k=i.mouseButtons.LEFT;break;case 1:k=i.mouseButtons.MIDDLE;break;case 2:k=i.mouseButtons.RIGHT;break;default:k=-1}switch(k){case $r.DOLLY:if(i.enableZoom===!1)return;ae(E),s=r.DOLLY;break;case $r.ROTATE:if(E.ctrlKey||E.metaKey||E.shiftKey){if(i.enablePan===!1)return;Ae(E),s=r.PAN}else{if(i.enableRotate===!1)return;K(E),s=r.ROTATE}break;case $r.PAN:if(E.ctrlKey||E.metaKey||E.shiftKey){if(i.enableRotate===!1)return;K(E),s=r.ROTATE}else{if(i.enablePan===!1)return;Ae(E),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Nu)}function te(E){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;W(E);break;case r.DOLLY:if(i.enableZoom===!1)return;j(E);break;case r.PAN:if(i.enablePan===!1)return;oe(E);break}}function se(E){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(E.preventDefault(),i.dispatchEvent(Nu),Se(ce(E)),i.dispatchEvent(zm))}function ce(E){const k=E.deltaMode,ie={clientX:E.clientX,clientY:E.clientY,deltaY:E.deltaY};switch(k){case 1:ie.deltaY*=16;break;case 2:ie.deltaY*=100;break}return E.ctrlKey&&!re&&(ie.deltaY*=10),ie}function le(E){E.key==="Control"&&(re=!0,i.domElement.getRootNode().addEventListener("keyup",je,{passive:!0,capture:!0}))}function je(E){E.key==="Control"&&(re=!1,i.domElement.getRootNode().removeEventListener("keyup",je,{passive:!0,capture:!0}))}function Fe(E){i.enabled===!1||i.enablePan===!1||_e(E)}function pe(E){switch(Ne(E),T.length){case 1:switch(i.touches.ONE){case Yr.ROTATE:if(i.enableRotate===!1)return;xe(E),s=r.TOUCH_ROTATE;break;case Yr.PAN:if(i.enablePan===!1)return;He(E),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Yr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;G(E),s=r.TOUCH_DOLLY_PAN;break;case Yr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;vt(E),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Nu)}function ge(E){switch(Ne(E),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Re(E),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Ve(E),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ue(E),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ge(E),i.update();break;default:s=r.NONE}}function ze(E){i.enabled!==!1&&E.preventDefault()}function fe(E){T.push(E.pointerId)}function ht(E){delete N[E.pointerId];for(let k=0;k<T.length;k++)if(T[k]==E.pointerId){T.splice(k,1);return}}function Ye(E){for(let k=0;k<T.length;k++)if(T[k]==E.pointerId)return!0;return!1}function Ne(E){let k=N[E.pointerId];k===void 0&&(k=new Ce,N[E.pointerId]=k),k.set(E.pageX,E.pageY)}function be(E){const k=E.pointerId===T[0]?T[1]:T[0];return N[k]}i.domElement.addEventListener("contextmenu",ze),i.domElement.addEventListener("pointerdown",Le),i.domElement.addEventListener("pointercancel",L),i.domElement.addEventListener("wheel",se,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",le,{passive:!0,capture:!0}),this.update()}}const Oi=[{id:"mercury",name:"Mercury",radius:1.5,distanceFromSun:20,orbitSpeed:.004,texture:"mercury.jpg",description:"Mercury is the smallest and innermost planet in the Solar System. It has a rocky body like Earth but is much smaller, with a diameter of about 4,880 km.",diameter:4880,mass:"3.3 × 10^23 kg",dayLength:"176 Earth days",yearLength:"88 Earth days",avgTemp:"-173°C to 427°C",funFact:'Mercury has wrinkles! As the iron core of the planet cooled and contracted, the surface developed "wrinkles" or compressional features.'},{id:"venus",name:"Venus",radius:2.2,distanceFromSun:30,orbitSpeed:.0035,texture:"venus.jpg",description:"Venus is the second planet from the Sun and is Earth's closest planetary neighbor. It's one of the four inner, terrestrial planets, and it's often called Earth's twin because it's similar in size and density.",diameter:12104,mass:"4.87 × 10^24 kg",dayLength:"243 Earth days",yearLength:"225 Earth days",avgTemp:"462°C",funFact:"Venus rotates in the opposite direction to most planets, meaning the Sun rises in the west and sets in the east."},{id:"earth",name:"Earth",radius:2.5,distanceFromSun:40,orbitSpeed:.003,texture:"earth.jpg",description:"Earth is the third planet from the Sun and the only astronomical object known to harbor life. It is the only world in our solar system with liquid water on the surface.",diameter:12756,mass:"5.97 × 10^24 kg",dayLength:"24 hours",yearLength:"365.25 days",avgTemp:"15°C",funFact:"The Earth's rotation is gradually slowing. This deceleration is happening almost imperceptibly, at approximately 17 milliseconds per hundred years.",moons:[{name:"Moon",radius:.6}]},{id:"mars",name:"Mars",radius:2,distanceFromSun:50,orbitSpeed:.0024,texture:"mars.jpg",description:'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. It is often referred to as the "Red Planet".',diameter:6792,mass:"6.42 × 10^23 kg",dayLength:"24 hours 37 minutes",yearLength:"687 Earth days",avgTemp:"-63°C",funFact:"Mars has the largest dust storms in the solar system. They can last for months and cover the entire planet.",moons:[{name:"Phobos",radius:.3},{name:"Deimos",radius:.2}]},{id:"jupiter",name:"Jupiter",radius:5,distanceFromSun:65,orbitSpeed:.0013,texture:"jupiter.jpg",description:"Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets combined.",diameter:142984,mass:"1.90 × 10^27 kg",dayLength:"9 hours 56 minutes",yearLength:"11.86 Earth years",avgTemp:"-145°C",funFact:"Jupiter has the shortest day of all the planets. It rotates once about every 10 hours.",moons:[{name:"Io",radius:.5},{name:"Europa",radius:.5},{name:"Ganymede",radius:.6},{name:"Callisto",radius:.6}]},{id:"saturn",name:"Saturn",radius:4.5,distanceFromSun:85,orbitSpeed:9e-4,texture:"saturn.jpg",description:"Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius about nine times that of Earth.",diameter:120536,mass:"5.68 × 10^26 kg",dayLength:"10 hours 42 minutes",yearLength:"29.45 Earth years",avgTemp:"-178°C",funFact:"Saturn has a unique feature - its spectacular ring system that stretches out more than 120,000 km from the planet, but is only about 20 meters thick.",moons:[{name:"Titan",radius:.6},{name:"Enceladus",radius:.3},{name:"Mimas",radius:.2},{name:"Rhea",radius:.4},{name:"Iapetus",radius:.4}]},{id:"uranus",name:"Uranus",radius:3.5,distanceFromSun:100,orbitSpeed:7e-4,texture:"uranus.jpg",description:"Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",diameter:51118,mass:"8.68 × 10^25 kg",dayLength:"17 hours 14 minutes",yearLength:"84 Earth years",avgTemp:"-224°C",funFact:"Uranus rotates on its side with an axial tilt of 98 degrees. This means that its poles experience 42 years of continuous sunlight followed by 42 years of darkness.",moons:[{name:"Miranda",radius:.3},{name:"Ariel",radius:.3},{name:"Umbriel",radius:.3},{name:"Titania",radius:.4},{name:"Oberon",radius:.4}]},{id:"neptune",name:"Neptune",radius:3.5,distanceFromSun:120,orbitSpeed:5e-4,texture:"neptune.jpg",description:"Neptune is the eighth and farthest-known planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet.",diameter:49528,mass:"1.02 × 10^26 kg",dayLength:"16 hours 6 minutes",yearLength:"164.8 Earth years",avgTemp:"-214°C",funFact:"Neptune has the strongest winds in the Solar System, reaching speeds of 2,100 km/h (1,300 mph).",moons:[{name:"Triton",radius:.5},{name:"Nereid",radius:.2},{name:"Proteus",radius:.3},{name:"Larissa",radius:.2}]}];function lb(t,e,n){const i=new $T,r=new Lv({antialias:!0,alpha:!0});r.setSize(t.clientWidth,t.clientHeight),r.setPixelRatio(window.devicePixelRatio),r.shadowMap.enabled=!0,r.shadowMap.type=If,t.appendChild(r.domElement);const s=new Mn(45,t.clientWidth/t.clientHeight,.1,2e5),a=new O(0,164,164),o=new O(0,0,0),l=20,c=1e5;let f=0;s.position.copy(a);const d=new ob(s,r.domElement);d.enableDamping=!0,d.dampingFactor=.05,d.minDistance=l,d.maxDistance=c,i.add(new sb(1118481));const h=new rb(16777215,2,1e3,.5);h.position.set(0,0,0),h.castShadow=!0,h.shadow.mapSize.width=2048,h.shadow.mapSize.height=2048,h.shadow.radius=2,i.add(h);const m=new tb,_=m.load("./images/sun.jpg"),x=m.load("./images/moon.jpg"),p=m.load("./images/saturn_ring1.png"),u=1.8,v=.32,g=20,M=14,P=.35,A=3.5;let T=.6;n==null||n.planetScale;const N={mercury:2439.7,venus:6051.8,earth:6371,mars:3389.5,jupiter:69911,saturn:58232,uranus:25362,neptune:24622,pluto:1188.3},re={mercury:[],venus:[],earth:[{name:"Moon",radius:1737.1}],mars:[{name:"Phobos",radius:11.267},{name:"Deimos",radius:6.2}],jupiter:[{name:"Io",radius:1821.6},{name:"Europa",radius:1560.8},{name:"Ganymede",radius:2634.1},{name:"Callisto",radius:2410.3}],saturn:[{name:"Titan",radius:2574.7},{name:"Rhea",radius:763.8},{name:"Iapetus",radius:734.5},{name:"Dione",radius:561.4},{name:"Tethys",radius:533.1},{name:"Enceladus",radius:252.1},{name:"Mimas",radius:198.2}],uranus:[{name:"Titania",radius:788.9},{name:"Oberon",radius:761.4},{name:"Umbriel",radius:584.7},{name:"Ariel",radius:578.9},{name:"Miranda",radius:235.8}],neptune:[{name:"Triton",radius:1353.4},{name:"Proteus",radius:210},{name:"Nereid",radius:170}],pluto:[{name:"Charon",radius:606},{name:"Nix",radius:49},{name:"Hydra",radius:51}]},y=[],C={},Q=[],ee={},I={},J={},B={};let H=null,D=null,F=null,z=null,K=null,ae=new O,Ae=!1,W=!1;const j={};function oe(E,k=!1,ie=0,R){const q=document.createElement("canvas"),U=q.getContext("2d"),X=4,ne=(n==null?void 0:n.currentLanguage)==="ar"?"Cairo":"Inter",ye=Math.max(8,Math.round(R??(k?30:26)));if(U.font=`${k?"bold ":""}${ye*X}px ${ne}, Arial`,(n==null?void 0:n.currentLanguage)==="ar"||ie===0){const Ie=U.measureText(E),ke=Math.ceil(Ie.width),Oe=Ie.actualBoundingBoxAscent||ye*X*.72,st=Ie.actualBoundingBoxDescent||ye*X*.28,Ct=Math.ceil(Oe+st);q.width=Math.max(1,ke+8),q.height=Math.max(1,Ct+8),U.font=`${k?"bold ":""}${ye*X}px ${ne}, Arial`,U.textBaseline="alphabetic",U.textAlign="center",U.fillStyle="#ffffff";const it=Math.round(Oe)+2;U.fillText(E,q.width/2,it)}else{let Ie=0;for(let ut=0;ut<E.length;ut++)Ie+=U.measureText(E[ut]).width+ie*X;Ie-=ie*X;const ke=U.measureText(E),Oe=ke.actualBoundingBoxAscent||ye*X*.72,st=ke.actualBoundingBoxDescent||ye*X*.28,Ct=Math.ceil(Oe+st);q.width=Math.max(1,Math.ceil(Ie)+8),q.height=Math.max(1,Ct+8),U.font=`${k?"bold ":""}${ye*X}px ${ne}, Arial`,U.textBaseline="alphabetic",U.textAlign="left",U.fillStyle="#ffffff";let it=Math.round((q.width-Ie)/2);const lt=Math.round(Oe)+2;for(let ut=0;ut<E.length;ut++){const zt=E[ut];U.fillText(zt,it,lt),it+=U.measureText(zt).width+ie*X}}const We=new Pm(q);return We.minFilter=Ht,We.magFilter=Ht,We}function Se(){const E=new Tr(19e3,32,32),k=m.load("./images/stars.jpg"),ie=new Bi({map:k,side:Qt}),R=new on(E,ie);i.add(R)}Se();let _e=null;function xe(){const k=new vn,ie=new Float32Array(1500*3),R=new Float32Array(1500*3);for(let ve=0;ve<1500*3;ve+=3){const We=60+Math.random()*450,Ie=Math.random()*Math.PI*2,ke=Math.acos(Math.random()*2-1);ie[ve]=We*Math.sin(ke)*Math.cos(Ie),ie[ve+1]=We*Math.sin(ke)*Math.sin(Ie),ie[ve+2]=We*Math.cos(ke);const Oe=Math.random();Oe<.4?(R[ve]=.2,R[ve+1]=.8,R[ve+2]=1):Oe<.7?(R[ve]=.6,R[ve+1]=.2,R[ve+2]=.9):(R[ve]=1,R[ve+1]=.85,R[ve+2]=.4)}k.setAttribute("position",new Tn(ie,3)),k.setAttribute("color",new Tn(R,3));const q=document.createElement("canvas");q.width=16,q.height=16;const U=q.getContext("2d"),X=U.createRadialGradient(8,8,0,8,8,8);X.addColorStop(0,"rgba(255, 255, 255, 1)"),X.addColorStop(1,"rgba(255, 255, 255, 0)"),U.fillStyle=X,U.fillRect(0,0,16,16);const ne=new Pm(q),he=new Iv({size:1.6,map:ne,transparent:!0,opacity:.6,vertexColors:!0,blending:bd,depthWrite:!1}),ye=new ZT(k,he);return i.add(ye),ye}_e=xe();const He=new on(new Tr(8.5,32,32),new Bi({map:_}));He.name="sun",He.userData={isSun:!0},i.add(He);{const E=n!=null&&n.tFunc?n.tFunc("sun"):"Sun",k=oe(E,!0,0,48),ie=new _l({map:k,transparent:!0}),R=new Cu(ie);R.position.set(0,15,0);const U=50*.15*v,X=k.image,ne=X&&X.width&&X.height?X.width/X.height:1;R.scale.set(ne*U,U,1),i.add(R),J.sun=R,B.sun={sprite:R}}Oi.forEach(E=>{const k=new Ps,ie=256,R=E.distanceFromSun*u,q=[];for(let Oe=0;Oe<=ie;Oe++){const st=Oe/ie*Math.PI*2;q.push(new O(Math.cos(st)*R,0,Math.sin(st)*R))}const U=new vn().setFromPoints(q),X=new Dv({color:0,transparent:!0,opacity:.33}),ne=new KT(U,X);ne.userData={planetId:E.id},i.add(ne),Q.push({line:ne,planetId:E.id,points:q});const he=new Tr(E.radius,32,32),ye=new Bi({toneMapped:!1});m.load(`./images/${E.texture}`,Oe=>{ye.map=Oe,ye.needsUpdate=!0});const ve=new on(he,ye);ve.castShadow=!0,ve.receiveShadow=!0,ve.name=E.id,k.add(ve),C[E.id]=ve;const We=Math.random()*Math.PI*2;if(k.position.x=Math.cos(We)*R,k.position.z=Math.sin(We)*R,k.userData.initialAngle=We,E.id==="saturn"){const Oe=E.radius*1.5,st=E.radius*2.5,Ct=new Hf([new Ce(Oe,0),new Ce(st,0),new Ce(st,.1),new Ce(Oe,.1)],64);p.wrapS=Za,p.wrapT=Za,p.repeat.set(6,1),p.minFilter=tS,p.magFilter=Ht,p.generateMipmaps=!0;const it=new Bi({map:p,transparent:!0,side:si,alphaTest:.01,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}),lt=new on(Ct,it);lt.castShadow=!0,lt.receiveShadow=!0,lt.rotation.x=0,lt.position.y=.04,lt.renderOrder=2,k.add(lt)}const Ie=re[E.id];let ke=[];if(E.moons&&E.moons.length>0?ke=E.moons.map(Oe=>({name:Oe.name,radius:Oe.radius})):Array.isArray(Ie)&&Ie.length>0&&(ke=Ie.map(Oe=>({name:Oe.name,radius:Oe.radius}))),ke.length>0){const Oe=new Ps;ke.forEach((st,Ct)=>{let it;const lt=st.radius,ut=N[E.id];if(typeof lt=="number"&&lt>50&&ut){const we=lt/ut;it=E.radius*we*P}else typeof lt=="number"?it=Math.max(.08,lt):it=Math.max(E.radius*.06,.08);it=Math.min(it,Math.max(E.radius*.6,E.radius*.08));const zt=new Tr(it,16,16),Xr=new Bi({map:x}),Rn=new on(zt,Xr);Rn.castShadow=!0,Rn.receiveShadow=!0;const _c=Math.max(it*3,.5),xc=new Tr(_c,16,16),b=new Bi({transparent:!0,opacity:0,side:Qt}),V=new on(xc,b);V.userData=Rn.userData,Rn.add(V);let Y=E.radius*A+Ct*E.radius*1.1;Y=Math.max(Y,E.radius+it+.5);const Z=Math.random()*Math.PI*2;Rn.position.x=Math.cos(Z)*Y,Rn.position.z=Math.sin(Z)*Y,Rn.userData={name:st.name||`moon-${Ct}`,parentId:E.id,realRadiusKm:typeof st.radius=="number"&&st.radius>50?st.radius:void 0,orbitRadius:Y,orbitSpeed:.02+Math.random()*.02,angle:Z,isMoon:!0,initialAngle:Z};const $=`${E.id}:${Rn.userData.name}`;I[$]=Rn,Oe.add(Rn)}),k.add(Oe),ee[E.id]=Oe}k.userData={orbitSpeed:E.orbitSpeed,angle:We,planetId:E.id};{const Oe=n!=null&&n.tFunc?n.tFunc(E.id):E.name,st=oe(Oe,!0,0,g),Ct=new _l({map:st,transparent:!0}),it=new Cu(Ct);it.position.set(0,E.radius+3,0);const lt=E.radius*3*v,ut=st.image,zt=ut&&ut.width&&ut.height?ut.width/ut.height:1;it.scale.set(zt*lt*1.05,lt,1),it.visible=(n==null?void 0:n.showLabels)??!1,k.add(it),J[E.id]=it,B[E.id]={sprite:it,planetGroup:k}}i.add(k),y.push(k)});let Ee=null;function G(E,k){Ee&&(i.remove(Ee),Ee=null);const ie=Oi.find(zt=>zt.id===E);if(!ie)return;const R=ie.distanceFromSun*u,q=R*Math.PI*2*.1,U=n!=null&&n.tFunc?n.tFunc("circumference"):(n==null?void 0:n.currentLanguage)==="ar"?"المحيط":"Circumference",X=n!=null&&n.tFunc?n.tFunc("millionKm"):(n==null?void 0:n.currentLanguage)==="ar"?"مليون كم":"million km",ne=`${U}: ${q.toFixed(1)} ${X}`,he=oe(ne,!1,1.2,M),ye=new _l({map:he,transparent:!0,opacity:0});Ee=new Cu(ye);const ve=Math.max(R*.25*v,s.position.distanceTo(d.target)*.03),We=he.image,Ie=We&&We.width&&We.height?We.width/We.height:1;Ee.scale.set(Ie*ve,ve,1);const ke=new nl;ke.setFromCamera(k,s);const Oe=new O,st=new ni(new O(0,1,0),0);ke.ray.intersectPlane(st,Oe);const Ct=Oe.normalize(),it=R*1.15;Ee.position.copy(Ct.multiplyScalar(it)),Ee.position.y=8,i.add(Ee);let lt=0;const ut=()=>{lt=Math.min(1,lt+.15),Ee.material.opacity=lt,lt<1&&requestAnimationFrame(ut)};ut()}function vt(){if(!Ee)return;let E=Ee.material.opacity||1;const k=()=>{E=Math.max(0,E-.12),Ee.material.opacity=E,E>0?requestAnimationFrame(k):(i.remove(Ee),Ee=null)};k()}t.addEventListener("mousemove",E=>{const k=t.getBoundingClientRect(),ie=new Ce((E.clientX-k.left)/k.width*2-1,-((E.clientY-k.top)/k.height)*2+1),R=new nl;R.setFromCamera(ie,s);let q=1/0,U=null;for(const ne of Q)for(const he of ne.points){const ye=R.ray.distanceToPoint(he);ye<q&&(q=ye,U=ne)}const X=Math.max(3,s.position.distanceTo(d.target)*.012);if(U&&q<X){if(H!==U.line)H&&(H.material.color.set(0),H.material.opacity=.33),H=U.line,D=U.planetId,H.material.color.set(16777215),H.material.opacity=.9,G(U.planetId,ie);else if(Ee&&D===U.planetId){const ne=Oi.find(he=>he.id===D);if(ne){const he=new nl;he.setFromCamera(ie,s);const ye=new O,ve=new ni(new O(0,1,0),0);he.ray.intersectPlane(ve,ye);const We=ye.normalize(),ke=ne.distanceFromSun*u*1.15;Ee.position.copy(We.multiplyScalar(ke)),Ee.position.y=8}}}else H&&(H.material.color.set(0),H.material.opacity=.33,H=null,D=null,vt())}),t.addEventListener("mouseleave",()=>{H&&(H.material.color.set(0),H.material.opacity=.33,H=null,D=null),vt()});const Re=new nl,Ve=new Ce;t.addEventListener("click",E=>{const k=t.getBoundingClientRect();Ve.x=(E.clientX-k.left)/k.width*2-1,Ve.y=-((E.clientY-k.top)/k.height)*2+1,Re.setFromCamera(Ve,s);const ie=[...Object.values(C),...Object.values(I),He],R=Re.intersectObjects(ie);if(R.length===0)return;const q=R[0].object;if(q.userData&&q.userData.isSun||q===He){e({id:"sun",name:"Sun",radius:8.5,distanceFromSun:0,orbitSpeed:0,texture:"sun.jpg",description:"The Sun is the star at the center of the Solar System.",diameter:1391400,mass:"1.989 × 10^30 kg",dayLength:"25 days (equator)",yearLength:"—",avgTemp:"5,505°C (surface)",funFact:"The Sun contains 99.86% of the mass in the Solar System!",moons:[]});return}const U=Object.keys(C).find(ne=>C[ne]===q);if(U){const ne=Oi.find(he=>he.id===U);ne&&(de(ne),e(ne));return}const X=Object.keys(I).find(ne=>I[ne]===q);if(X){const ne=I[X].userData,he=Oi.find(We=>We.id===ne.parentId),ye=q.geometry.parameters.radius,ve={id:`${ne.parentId}-${ne.name}`,name:ne.name,radius:ye,distanceFromSun:he?he.distanceFromSun:0,orbitSpeed:ne.orbitSpeed??0,texture:"moon.jpg",description:`Moon of ${he?he.name:ne.parentId}.`,diameter:ne.realRadiusKm?Math.round(ne.realRadiusKm*2):Math.round(ye*1e3),mass:"—",dayLength:"—",yearLength:"—",avgTemp:"—",funFact:"Click Learn More to search NASA.",moons:[]};ve.isMoon=!0,ve.parentId=he==null?void 0:he.id,Ue(I[X],ve),e(ve);return}});function de(E){const k=C[E.id];if(!k)return;const ie=new O;k.getWorldPosition(ie);const R=ie.clone().add(new O(E.radius*6,E.radius*3,E.radius*6)),q=s.position.clone(),U=d.target.clone(),X=900,ne=Date.now(),he=++f;function ye(){if(he!==f)return;const ve=Math.min(1,(Date.now()-ne)/X);s.position.lerpVectors(q,R,ve),d.target.lerpVectors(U,ie,ve),d.update(),ve<1&&requestAnimationFrame(ye)}ye()}function Ue(E,k){const ie=new O;E.getWorldPosition(ie);const R=ie.clone().add(new O(k.radius*8,k.radius*4,k.radius*8)),q=s.position.clone(),U=d.target.clone(),X=900,ne=Date.now(),he=++f;function ye(){if(he!==f)return;const ve=Math.min(1,(Date.now()-ne)/X);s.position.lerpVectors(q,R,ve),d.target.lerpVectors(U,ie,ve),d.update(),ve<1&&requestAnimationFrame(ye)}ye()}function Ge(E){T=E}function Le(E,k=2,ie=!1){const R=C[E];if(!R)return;F=E,Ae=!0,W=!!ie,R.getWorldPosition(ae);const q=ae.clone().add(new O(0,k,0));s.position.copy(q),d.target.copy(ae),j.minDistance=d.minDistance,j.maxDistance=d.maxDistance,j.enablePan=d.enablePan,W&&(d.minDistance=.1,d.maxDistance=Math.max(5,k*4),d.enablePan=!1)}function Xe(){F=null,z=null,K=null,Ae=!1,W=!1,j.minDistance!==void 0&&(d.minDistance=j.minDistance),j.maxDistance!==void 0&&(d.maxDistance=j.maxDistance),j.enablePan!==void 0&&(d.enablePan=j.enablePan)}function L(){d.minDistance=l,d.maxDistance=c,d.enablePan=!0,s.up.set(0,1,0)}function w(E){K=E}function te(){K=null}function se(E,k=2,ie=!1){const R=I[E];if(!R)return;z=E,Ae=!0,W=!!ie,R.getWorldPosition(ae);const q=ae.clone().add(new O(0,k,0));s.position.copy(q),d.target.copy(ae),j.minDistance=d.minDistance,j.maxDistance=d.maxDistance,j.enablePan=d.enablePan,W&&(d.minDistance=.1,d.maxDistance=Math.max(5,k*4),d.enablePan=!1)}function ce(){Xe(),y.forEach(he=>{const ye=he.userData.initialAngle||0;he.userData.angle=ye;const ve=he.position.length()||he.userData.orbitRadius;he.position.x=Math.cos(ye)*ve,he.position.z=Math.sin(ye)*ve}),Object.values(ee).forEach(he=>{he.children.forEach(ye=>{const ve=ye.userData.initialAngle||Math.random()*Math.PI*2;ye.userData.angle=ve,ye.position.x=Math.cos(ve)*ye.userData.orbitRadius,ye.position.z=Math.sin(ve)*ye.userData.orbitRadius})}),L();const E=s.position.clone(),k=d.target.clone(),ie=a.clone(),R=o.clone(),q=1500,U=Date.now(),X=++f;function ne(){if(X!==f)return;const he=Math.min(1,(Date.now()-U)/q);s.position.lerpVectors(E,ie,he),d.target.lerpVectors(k,R,he),d.update(),he<1&&requestAnimationFrame(ne)}ne()}function le(){requestAnimationFrame(le),_e&&(_e.rotation.y+=12e-5*(T+.15),_e.rotation.x+=6e-5*(T+.15)),y.forEach(E=>{const k=(E.userData.orbitSpeed??0)*T;E.userData.angle+=k;const ie=E.position.length();E.position.x=Math.cos(E.userData.angle)*ie,E.position.z=Math.sin(E.userData.angle)*ie;const R=E.userData.planetId,q=C[R];q&&(q.rotation.y+=.01*T);const U=ee[R];U&&U.children.forEach(X=>{if(K&&K===`${R}:${X.userData.name}`){X.rotation.y+=.01*T;return}X.userData.angle+=(X.userData.orbitSpeed??0)*T,X.position.x=Math.cos(X.userData.angle)*X.userData.orbitRadius,X.position.z=Math.sin(X.userData.angle)*X.userData.orbitRadius})});try{Object.keys(B).forEach(E=>{var st,Ct,it,lt;const k=B[E];if(!k)return;const ie=k.sprite,R=k.planetGroup,q=s.position.distanceTo(d.target);if(!R){const ut=Math.max(2,q*.025),zt=(st=ie.material.map)==null?void 0:st.image,Xr=zt&&zt.width&&zt.height?zt.width/zt.height:1;ie.scale.set(Xr*ut,ut,1);return}const U=new O;R.getWorldPosition(U);const X=(Ct=R.userData)==null?void 0:Ct.planetId,ne=X?C[X]:void 0,he=ne&&((it=ne.geometry.parameters)==null?void 0:it.radius)||0,ye=Math.max(1,he+2),ve=U.clone().add(new O(0,ye,0)),We=R.worldToLocal(ve.clone());ie.position.lerp(We,.6);const Ie=Math.max(6,he*.45*v,q*.02),ke=(lt=ie.material.map)==null?void 0:lt.image,Oe=ke&&ke.width&&ke.height?ke.width/ke.height:1;ie.scale.set(Oe*Ie,Ie,1)})}catch{}if(Ae&&F){const E=C[F];if(E){const k=new O;E.getWorldPosition(k);const ie=k.clone().sub(ae);ie.lengthSq()>0&&(s.position.add(ie),d.target.add(ie)),ae.copy(k)}}if(Ae&&z){const E=I[z];if(E){const k=new O;E.getWorldPosition(k);const ie=k.clone().sub(ae);ie.lengthSq()>0&&(s.position.add(ie),d.target.add(ie)),ae.copy(k)}}d.update(),r.render(i,s)}le();function je(){s.aspect=t.clientWidth/t.clientHeight,s.updateProjectionMatrix(),r.setSize(t.clientWidth,t.clientHeight)}window.addEventListener("resize",je);function Fe(E){Object.values(ee).forEach(k=>k.visible=E)}Fe(!((n==null?void 0:n.hideMoons)??!1));function pe(E){Object.values(J).forEach(k=>{k.visible=E})}function ge(E){Object.values(C).forEach(k=>k.scale.set(E,E,E))}ge((n==null?void 0:n.planetScale)??1);function ze(){return s.position.length()}let fe=null;function ht(E){f++,fe=E}function Ye(){ht(Math.max(30,ze()*.7))}function Ne(){ht(Math.min(d.maxDistance-10,ze()*1.4))}(function E(){if(requestAnimationFrame(E),fe!==null){const k=ze();if(Math.abs(k-fe)>.5){const ie=s.position.clone().normalize(),R=fv.lerp(k,fe,.12);s.position.copy(ie.multiplyScalar(R)),d.update()}else fe=null}})();function be(){Xe(),fe=null,L();const E=s.position.clone(),k=d.target.clone(),ie=a.clone(),R=o.clone(),q=1200,U=Date.now(),X=++f;function ne(){if(X!==f)return;const he=Math.min(1,(Date.now()-U)/q);s.position.lerpVectors(E,ie,he),d.target.lerpVectors(k,R,he),d.update(),he<1&&requestAnimationFrame(ne)}ne()}function Pe(){window.removeEventListener("resize",je),r.dispose(),t.innerHTML="",delete window.solarSystem}return window.solarSystem={updateSimulationSpeed:Ge,followPlanet:Le,stopFollowPlanet:Xe,getFollowingPlanetId:()=>F,resetCamera:ce},{selectPlanet:E=>{const k=Oi.find(ie=>ie.id===E);k&&de(k)},selectMoon:(E,k)=>{const ie=`${E}:${k}`,R=I[ie];if(!R)return;const q=R.userData,U=Oi.find(he=>he.id===q.parentId),X=R.geometry.parameters.radius,ne={id:`${q.parentId}-${q.name}`,name:q.name,radius:X,distanceFromSun:U?U.distanceFromSun:0,orbitSpeed:q.orbitSpeed??0,texture:"moon.jpg",description:`Moon of ${U?U.name:q.parentId}.`,diameter:q.realRadiusKm?Math.round(q.realRadiusKm*2):Math.round(X*1e3),mass:"—",dayLength:"—",yearLength:"—",avgTemp:"—",funFact:"Click Learn More to search NASA.",moons:[]};ne.isMoon=!0,ne.parentId=U==null?void 0:U.id,Ue(R,ne),e(ne)},updateSimulationSpeed:Ge,cleanupScene:Pe,setMoonsVisible:Fe,setLabelsVisible:pe,setPlanetScale:ge,zoomIn:Ye,zoomOut:Ne,getCameraDistance:ze,followPlanet:Le,followMoon:se,stopFollowPlanet:Xe,pauseMoonOrbit:w,resumeMoonOrbit:te,getFollowingPlanetId:()=>F,resetCamera:ce,resetCameraView:be,isGalaxyVisible:()=>!1}}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var cb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ub=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),tn=(t,e)=>{const n=Me.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:o="",children:l,...c},f)=>Me.createElement("svg",{ref:f,...cb,width:r,height:r,stroke:i,strokeWidth:a?Number(s)*24/Number(r):s,className:["lucide",`lucide-${ub(t)}`,o].join(" "),...c},[...e.map(([d,h])=>Me.createElement(d,h)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const db=tn("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fb=tn("Crosshair",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hb=tn("Disc",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=tn("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb=tn("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mb=tn("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gb=tn("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vb=tn("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _b=tn("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xb=tn("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yb=tn("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=tn("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wf=tn("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=tn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sb=tn("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mb=tn("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),Hm={en:{ok:"OK",close:"Close",english:"English",arabic:"Arabic",radius:"Radius",millionKm:"million km",circumference:"Circumference",tourGuide:"Tour Guide",next:"Next",skip:"Skip",finishTour:"Finish the Tour",startTour:"Start Tour",stopTour:"Stop Tour",overview:"Overview",quickFacts:"Quick Facts",selectLanguage:"Select Language",chooseLanguage:"Please choose your preferred language",simulationSpeed:"Simulation Speed",slow:"Slow",fast:"Fast",pause:"Pause",play:"Play",hideMoons:"Hide Moons",showMoons:"Show Moons",showLabels:"Show Labels",hideLabels:"Hide Labels",planetScale:"Planet Scale",satelliteOf:"Satellite of",chosenAsA:"Chosen as A",chooseAsA:"Choose as A",chosenAsB:"Chosen as B",chooseAsB:"Choose as B",diameter:"Diameter",mass:"Mass",dayLength:"Day Length",yearLength:"Year Length",avgTemp:"Avg Temperature",funFact:"Fun Fact",learnMore:"Learn More on NASA",satellites:"Satellites",testYourKnowledge:"Test Your Knowledge!",chooseDifficulty:"Choose your difficulty level to begin the quiz",beginner:"Beginner",intermediate:"Intermediate",advanced:"Advanced",questions:"questions",maybeLater:"Maybe Later",question:"Question",complete:"complete",submitAnswer:"Submit Answer",nextQuestion:"Next Question",explanation:"Explanation",excellent:"Excellent!",goodJob:"Good Job!",keepLearning:"Keep Learning!",tryAgain:"Try Again!",outstanding:"Outstanding! You really know your solar system!",greatWork:"Great work! You know quite a bit about our solar system!",keepLearningMessage:"Keep learning! You'll get better with practice!",practiceMakesPerfect:"Give it another try! Practice makes perfect!",level:"Level",retry:"Try Again",finish:"Finish",takeQuiz:"Take Quiz",amazingFact:"Amazing Fact",distanceFromSun:"Distance from Sun",more:"more",moonOf:"Moon of",clickLearnMore:"Click Learn More to search NASA",km:"km",surface:"(surface)",equator:"(equator)",moon:"Moon",phobos:"Phobos",deimos:"Deimos",io:"Io",europa:"Europa",ganymede:"Ganymede",callisto:"Callisto",titan:"Titan",enceladus:"Enceladus",mimas:"Mimas",rhea:"Rhea",iapetus:"Iapetus",miranda:"Miranda",ariel:"Ariel",titania:"Titania",oberon:"Oberon",triton:"Triton",charon:"Charon",hours:"hours",minutes:"minutes",seconds:"seconds",days:"days",earthDays:"Earth days",earthYears:"Earth years",comparisonMode:"Comparison Mode",planet:"Planet",planetComparison:"Planet Comparison",comparePlanets:"Compare Planets",selectTwoPlanets:"Select two planets to compare",exitComparison:"Exit Comparison",noComparison:"No planets selected for comparison",sun:"Sun",mercury:"Mercury",venus:"Venus",earth:"Earth",mars:"Mars",jupiter:"Jupiter",saturn:"Saturn",uranus:"Uranus",neptune:"Neptune",name:"Name",property:"Property",selectPlanetA:"Select Planet A",selectPlanetB:"Select Planet B",clickAPlanet:"Click a planet",comparisonResults:"Comparison Results",sizeDifference:"Size difference",orbitalSpeedRatio:"Orbital speed ratio",distanceBetweenPlanets:"Distance between planets",larger:"larger",smaller:"smaller",than:"than",million:"million",is:"is",times:"times",approximately:"Approximately",kilometers:"kilometers",faster:"faster",slower:"slower",orbitalSpeed:"Orbital Speed",avgTemperature:"Average Temperature",numberOfMoons:"Number of Moons",moons:"Moons",sameSizeMoons:"Same size",reset:"Reset",sunDescription:"The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma and is by far the most important source of energy for life on Earth.",mercuryDescription:"Mercury is the smallest and innermost planet in the Solar System. It has a rocky body like Earth but is much smaller, with a diameter of about 4,880 km.",venusDescription:"Venus is the second planet from the Sun and is Earth's closest planetary neighbor. It's one of the four inner, terrestrial planets.",earthDescription:"Earth is the third planet from the Sun and the only astronomical object known to harbor life. It is the only world in our solar system with liquid water on the surface.",marsDescription:'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. It is often referred to as the "Red Planet".',jupiterDescription:"Jupiter is the fifth planet from the Sun and is significantly the largest planet in the Solar System. It is twice as massive as all other planets combined.",saturnDescription:"Saturn is the sixth planet from the Sun. It is famous for its prominent ring system, which is the most extensive planetary ring system of any planet.",uranusDescription:"Uranus is the seventh planet from the Sun. It is a unique ice giant that rotates on its side, with an axial tilt of 98 degrees.",neptuneDescription:"Neptune is the eighth planet from the Sun and is the most distant planet in our solar system. It is the windiest planet known, with wind speeds reaching 2,100 km/h.",sunFunFact:"The Sun contains 99.86% of the mass in the Solar System!",mercuryFunFact:'Mercury has wrinkles! As the iron core of the planet cooled and contracted, the surface developed "wrinkles" or compressional features.',venusFunFact:"Venus rotates in the opposite direction to most planets, meaning the Sun rises in the west and sets in the east.",earthFunFact:"The Earth's rotation is gradually slowing. This deceleration is happening almost imperceptibly, at approximately 17 milliseconds per hundred years.",marsFunFact:"Mars has the largest volcano in the Solar System - Olympus Mons - which is about 21 km high.",jupiterFunFact:"Jupiter is so large that all other planets can fit inside it!",saturnFunFact:"Saturn's rings contain countless particles of ice and rock, ranging in size from a grain of sand to a skyscraper.",uranusFunFact:"Uranus appears as a featureless ball of cyan-colored clouds, making it one of the most boring looking planets visually.",neptuneFunFact:"Neptune's winds are three times stronger than Jupiter's, making it the windiest place in the Solar System."},ar:{ok:"موافق",close:"إغلاق",english:"الإنجليزية",arabic:"عربي",radius:"نصف القطر",millionKm:"مليون كم",circumference:"المحيط",tourGuide:"جولة المرشد",next:"التالي",skip:"تخطي",finishTour:"انهي الجولة",startTour:"ابدأ الجولة",stopTour:"وقف الجولة",overview:"نظرة عامة",quickFacts:"حقائق سريعة",selectLanguage:"اختر اللغة",chooseLanguage:"يرجى اختيار اللغة المفضلة لديك",simulationSpeed:"سرعة المحاكاة",slow:"بطيء",fast:"سريع",pause:"إيقاف مؤقت",play:"تشغيل",hideMoons:"إخفاء الأقمار",showMoons:"إظهار الأقمار",showLabels:"إظهار التسميات",hideLabels:"إخفاء التسميات",planetScale:"مقياس الكواكب",satelliteOf:"قمر صناعي لـ",chosenAsA:"تم اختياره كـ A",chooseAsA:"اختر كـ A",chosenAsB:"تم اختياره كـ B",chooseAsB:"اختر كـ B",diameter:"القطر",mass:"الكتلة",dayLength:"طول اليوم",yearLength:"طول السنة",avgTemp:"متوسط الحرارة",funFact:"حقيقة مثيرة للاهتمام",learnMore:"تعرف على المزيد من ناسا",satellites:"الأقمار الصناعية",testYourKnowledge:"اختبر معرفتك!",chooseDifficulty:"اختر مستوى الصعوبة لبدء الاختبار",beginner:"مبتدئ",intermediate:"متوسط",advanced:"متقدم",questions:"أسئلة",maybeLater:"ربما لاحقاً",question:"السؤال",complete:"مكتمل",submitAnswer:"إرسال الإجابة",nextQuestion:"السؤال التالي",explanation:"الشرح",excellent:"ممتاز!",goodJob:"عمل جيد!",keepLearning:"واصل التعلم!",tryAgain:"حاول مرة أخرى!",outstanding:"أداء رائع! أنت تعرف نظامك الشمسي حقاً!",greatWork:"عمل رائع! أنت تعرف الكثير عن نظامنا الشمسي!",keepLearningMessage:"استمر في التعلم! ستحسن مع الوقت!",practiceMakesPerfect:"حاول مرة أخرى! الممارسة تجعل الكمال!",level:"المستوى",retry:"إعادة المحاولة",finish:"انتهى",takeQuiz:"خذ اختبار",amazingFact:"حقيقة مذهلة",distanceFromSun:"المسافة من الشمس",more:"أكثر",moonOf:"قمر",clickLearnMore:"انقر للمزيد على NASA",km:"كم",surface:"(السطح)",equator:"(خط الاستواء)",moon:"القمر",phobos:"فوبوس",deimos:"ديموس",io:"آيو",europa:"أوروبا",ganymede:"جانيميد",callisto:"كاليستو",titan:"تيتان",enceladus:"إنسيلادوس",mimas:"ميماس",rhea:"ريا",iapetus:"إيابيتوس",miranda:"ميراندا",ariel:"أرييل",titania:"تيتانيا",oberon:"أوبيرون",triton:"تريتون",charon:"كارون",hours:"ساعات",minutes:"دقائق",seconds:"ثواني",days:"أيام",earthDays:"أيام أرضية",earthYears:"سنوات أرضية",comparisonMode:"وضع المقارنة",planet:"الكوكب",planetComparison:"مقارنة الكواكب",comparePlanets:"مقارنة الكواكب",selectTwoPlanets:"اختر كوكبين للمقارنة",exitComparison:"خروج من المقارنة",noComparison:"لم يتم اختيار أي كواكب للمقارنة",sun:"الشمس",mercury:"عطارد",venus:"الزهرة",earth:"الأرض",mars:"المريخ",jupiter:"المشتري",saturn:"زحل",uranus:"أورانوس",neptune:"نبتون",name:"الاسم",property:"الخاصية",selectPlanetA:"اختر الكوكب A",selectPlanetB:"اختر الكوكب B",clickAPlanet:"انقر على كوكب",comparisonResults:"نتائج المقارنة",sizeDifference:"الفرق في الحجم",orbitalSpeedRatio:"نسبة السرعة المدارية",distanceBetweenPlanets:"المسافة بين الكواكب",larger:"أكبر",smaller:"أصغر",than:"من",million:"مليون",is:"هو",times:"مرة",approximately:"تقريبا",kilometers:"كيلومتر",faster:"أسرع",slower:"أبطأ",orbitalSpeed:"السرعة المدارية",avgTemperature:"متوسط درجة الحرارة",numberOfMoons:"عدد الأقمار",moons:"الأقمار",sameSizeMoons:"نفس الحجم",reset:"إعادة تعيين",sunDescription:"الشمس هي النجم في مركز النظام الشمسي. إنها كرة شبه مثالية من البلازما الساخنة، وهي المصدر الأكثر أهمية للطاقة للحياة على الأرض.",mercuryDescription:"عطارد هو أصغر كواكب النظام الشمسي وأقربها إلى الشمس. يمتلك جسمًا صخريًا مثل الأرض لكنه أصغر بكثير، بقطر يبلغ حوالي 4,880 كم.",venusDescription:"الزهرة هي الكوكب الثاني من الشمس وأقرب جار كوكبي للأرض. إنها واحدة من الكواكب الأرضية الداخلية الأربعة.",earthDescription:"الأرض هي الكوكب الثالث من الشمس والكائن الفلكي الوحيد المعروف بوجود الحياة عليه. إنها العالم الوحيد في نظامنا الشمسي الذي يحتوي على مياه سائلة على سطحه.",marsDescription:'المريخ هو الكوكب الرابع من الشمس وثاني أصغر كواكب النظام الشمسي. يُعرف بلقب "الكوكب الأحمر".',jupiterDescription:"المشتري هو الكوكب الخامس من الشمس وهو بلا منازع أكبر كواكب النظام الشمسي. تساوي كتلته ضعف كتلة جميع الكواكب الأخرى مجتمعة.",saturnDescription:"زحل هو الكوكب السادس من الشمس. يشتهر بنظام حلقاته البارز، وهو الأكثر اتساعًا بين جميع كواكب النظام الشمسي.",uranusDescription:"أورانوس هو الكوكب السابع من الشمس. إنه عملاق جليدي فريد يدور على جانبه، بزاوية ميل محورية تبلغ 98 درجة.",neptuneDescription:"نبتون هو الكوكب الثامن من الشمس وأبعد كواكب نظامنا الشمسي. إنه الكوكب الأكثر عاصفةً، حيث تصل سرعات الرياح إلى 2100 كم/ساعة.",sunFunFact:"الشمس تحتوي على 99.86% من كتلة النظام الشمسي!",mercuryFunFact:'لعطارد تجاعيد! عندما برد لبّه الحديدي وانكمش، تكونت على سطحه "تجاعيد" أو طيات ضاغطة.',venusFunFact:"تدور الزهرة في اتجاه معاكس لمعظم الكواكب، مما يعني أن الشمس تشرق من الغرب وتغرب في الشرق.",earthFunFact:"دوران الأرض يتباطأ تدريجياً. يحدث هذا التباطؤ بشكل غير ملحوظ تقريباً، بمعدل 17 مللي ثانية تقريباً لكل مائة سنة.",marsFunFact:"يضم المريخ أكبر بركان في النظام الشمسي - أولمبس مونس - الذي يبلغ ارتفاعه حوالي 21 كم.",jupiterFunFact:"المشتري ضخم لدرجة أن جميع الكواكب الأخرى يمكن أن تتسع بداخله!",saturnFunFact:"تحتوي حلقات زحل على بلايين الجسيمات الجليدية والصخرية، تتراوح أحجامها من حبة رمل إلى ناطحة سحاب.",uranusFunFact:"يظهر أورانوس ككرة بلا ملامح من السحب الزرقاء المخضرة، مما يجعله أقل الكواكب إثارة للاهتمام من الناحية البصرية.",neptuneFunFact:"رياح نبتون أقوى بثلاث مرات من رياح المشتري، مما يجعله أعاصر الأماكن في النظام الشمسي."}},Eb=t=>({sun:{description:"sunDescription",funFact:"sunFunFact"},mercury:{description:"mercuryDescription",funFact:"mercuryFunFact"},venus:{description:"venusDescription",funFact:"venusFunFact"},earth:{description:"earthDescription",funFact:"earthFunFact"},mars:{description:"marsDescription",funFact:"marsFunFact"},jupiter:{description:"jupiterDescription",funFact:"jupiterFunFact"},saturn:{description:"saturnDescription",funFact:"saturnFunFact"},uranus:{description:"uranusDescription",funFact:"uranusFunFact"},neptune:{description:"neptuneDescription",funFact:"neptuneFunFact"}})[t]||null,kv=Me.createContext(void 0),wb=({children:t})=>{const[e,n]=Me.useState(()=>typeof window<"u"&&localStorage.getItem("language")||"en");Me.useEffect(()=>{document.documentElement.dir=e==="ar"?"rtl":"ltr"},[e]);const i=s=>{n(s),typeof window<"u"&&localStorage.setItem("language",s),document.documentElement.dir=s==="ar"?"rtl":"ltr"},r=s=>Hm[e][s]||Hm.en[s]||s;return S.jsx(kv.Provider,{value:{language:e,setLanguage:i,t:r},children:t})},Qn=()=>{const t=Me.useContext(kv);if(!t)throw new Error("useLanguage must be used within LanguageProvider");return t},Tb={الرسول:"الرَّسُول",السريع:"السَّرِيع",سريع:"سَرِيع",سريعة:"سَرِيعَة",سريعا:"سَرِيعًا",يوماً:"يَوْمًا",تقلبات:"تَقَلُّبَات",حرارية:"حَرَارِيَّة",نهاراً:"نَهَارًا",متجمدة:"مُتَجَمِّدَة",ويالها:"وَيَا لَهَا",بالرغم:"بِالرَّغْم",قلباً:"قَلْبًا",حديدياً:"حَدِيدِيًّا",تضغط:"تَضْغَطُ",معدنية:"مَعْدَنِيَّة",بحجم:"بِحَجْم",سيارة:"سَيَّارَة",بالضبط:"بِالضَّبْط",صخرياً:"صَخْرِيًّا",خفيفاً:"خَفِيفًا",نظرة:"نَظْرَة",اللامع:"اللَّامِع",الصباح:"الصَّبَاح",المساء:"المَسَاء",مغطاة:"مُغَطَّاة",بغيوم:"بِغُيُوم",غيوم:"غُيُوم",حامض:"حَامِض",جهنمي:"جَهَنَّمِيّ",تذيب:"تُذِيبُ",الرصاص:"الرَّصَاص",شخصية:"شَخْصِيَّة",مختلفة:"مُخْتَلِفَة",بامتياز:"بِامْتِيَاز",المعاكس:"المُعَاكِس",معظم:"مُعْظَم",ببطء:"بِبُطْء",للخلف:"لِلْخَلْف",مما:"مِمَّا",الغرب:"الغَرْب",مفرغة:"مُفْرَغَة",قليلاً:"قَلِيلًا",تتبادلا:"تَتَبَادَلَا",المعلقة:"المُعَلَّقَة",الواحة:"الوَاحَة",الوحيدة:"الوَحِيدَة",المعروفة:"المَعْرُوفَة",الشاهقة:"الشَّاهِقَة",خنادق:"خَنَادِق",المحيطات:"المُحِيطَات",العميقة:"العَمِيقَة",تحفة:"تُحْفَة",فنية:"فَنِّيَّة",جوهرة:"جَوْهَرَة",ثمينة:"ثَمِينَة",الأحمر:"الأَحْمَر",مونس:"مُونْس",ارتفاعه:"ارْتِفَاعُهُ",حلقات:"حَلَقَات",صلبة:"صُلْبَة",مصنوعة:"مَصْنُوعَة",كالجبال:"كَالجِبَال",مداره:"مَدَارُهُ",يرقص:"يَرْقُصُ",باليه:"بَالِيه",المفاجأة:"المُفَاجَأَة",لدرجة:"لِدَرَجَة",سيطفو:"سَيَطْفُو",يتدحرج:"يَتَدَحْرَجُ",جانبه:"جَانِبُهُ",محوري:"مِحْوَرِيّ",صيفاً:"صَيْفًا",شتاء:"شِتَاء",تنخفض:"تَنْخَفِضُ",تصادماً:"تَصَادُمًا",هائلاً:"هَائِلًا",تاريخه:"تَارِيخِهِ",مستلقياً:"مُسْتَلْقِيًا",تتدحرج:"تَتَدَحْرَجُ",مصباح:"مِصْبَاح",الأخف:"الأَخَفّ",يخدعك:"يَخْدَعْكَ",رحلة:"رِحْلَة",أعاصر:"أَعَاصِر",الحافة:"الحَافَّة",تصرخ:"تَصْرُخُ",يستغرق:"يَسْتَغْرِقُ",الفلكيون:"الفَلَكِيُّونَ",اهتزاز:"اهْتِزَاز",تلسكوباتهم:"تِلِسْكُوبَاتِهِم",وهناك:"وَهُنَاكَ",أحياناً:"أَحْيَانًا",حجماً:"حَجْمًا",مدمرة:"مُدَمِّرَة",يخفي:"يُخْفِي",تجاعيد:"تَجَاعِيد",وانكمش:"وَانْكَمَشَ",طيات:"طَيَّات",يضم:"يَضُمُّ",تتفاعل:"تَتَفَاعَلُ",تسبب:"تُسَبِّبُ",الشفق:"الشَّفَق",القطبي:"القُطْبِيّ",معلومات:"مَعْلُومَات",درجة:"دَرَجَة",مئوية:"مِئَوِيَّة",كيلومتر:"كِيلُومِتَر",الزهرة:"الزُّهْرَة",عطارد:"عُطَارِد",زحل:"زُحَل",نبتون:"نِبْتُون"},bb=/[\u064B-\u0653\u0670]/g,Ab=/[\u064B-\u0652\u0670]/,Cb=/\u0640/g;function zv(t){return t.replace(bb,"").replace(Cb,"").replace(/[\u0622\u0623\u0625\u0671]/g,"ا").replace(/\u0649/g,"ي").replace(/\u0629/g,"ه").replace(/\u0624/g,"و").replace(/\u0626/g,"ي")}function Rb(t){const e=s=>{const a=s.charCodeAt(0);return a>=1611&&a<=1619||a===1648};let n="",i=[];const r=()=>{i.length&&(i.sort(),n+=i.join(""),i=[])};for(const s of t)e(s)?i.push(s):(r(),n+=s);return r(),n}const Pb={من:"مِنْ",في:"فِي",على:"عَلَى",إلى:"إِلَى",عن:"عَنْ",مع:"مَعَ",بين:"بَيْنَ",حول:"حَوْلَ",قبل:"قَبْلَ",بعد:"بَعْدَ",منذ:"مُنْذُ",حتى:"حَتَّى",مثل:"مِثْلَ",أمام:"أَمامَ",دون:"دُونَ",نحو:"نَحْوَ",ضمن:"ضِمْنَ",وفق:"وَفقَ",بدون:"بِدونَ",بسبب:"بِسَبَبِ",هذا:"هَذَا",هذه:"هَذِهِ",ذلك:"ذَلِكَ",التي:"الَّتِي",الذي:"الَّذِي",الذين:"الَّذِينَ",هو:"هُوَ",هي:"هِيَ",وهو:"وَهُوَ",وهي:"وَهِيَ",وأن:"وَأَنْ",أن:"أَنْ",أنه:"أَنَّهُ",إنها:"إِنَّهَا",إنه:"إِنَّهُ",لكنه:"لَكِنَّهُ",ولكن:"وَلَكِنْ",لا:"لَا",ما:"مَا",لم:"لَمْ",لن:"لَنْ",لكن:"لَكِنْ",أو:"أَوْ",ثم:"ثُمَّ",إذا:"إِذَا",حيث:"حَيْثُ",فقط:"فَقَطْ",الآن:"الآنَ",قد:"قَدْ",لقد:"لَقَدْ",بل:"بَلْ",غير:"غَيْر",بعض:"بَعْض",هل:"هَلْ",لديك:"لَدَيْكَ",أنت:"أَنْتَ",كما:"كَما",أهلا:"أَهْلاً",كان:"كَانَ",كانت:"كَانَتْ",يكون:"يَكُونُ",تكون:"تَكُونُ",يدور:"يَدُورُ",تدور:"تَدُورُ",يعيش:"يَعِيشُ",تعيش:"تَعِيشُ",يصنع:"يَصْنَعُ",يعتبر:"يُعْتَبَرُ",يعتقد:"يَعْتَقِدُ",يمتلك:"يَمْلِكُ",يمكن:"يُمْكِنُ",تصل:"تَصِلُ",يصل:"يَصِلُ",يعرف:"يَعْرِفُ",يوجد:"يُوجَدُ",يبدأ:"يَبْدَأُ",يرتدي:"يَرْتَدِي",يضم:"يَضُمُّ",يكفي:"يَكْفِي",يجعل:"يَجْعَلُ",يجعله:"يَجْعَلُهُ",تحتوي:"تَحْتَوِي",تتسع:"تَتَّسِعُ",تبلغ:"تَبْلُغُ",يبلغ:"يَبْلُغُ",يمثل:"يُمَثِّلُ",يعادل:"يُعادِلُ",تشرق:"تَشْرَقُ",يشرق:"يَشْرَقُ",تتميز:"تَتَمَيَّزُ",يتميز:"يَتَمَيَّزُ",استمر:"اسْتَمَرَّ",تم:"تَمَّ",حسبوا:"احْتَسَبُوا",اكتشف:"اكْتَشَفَ",انبهر:"انْبَهَرَ",استغرق:"اسْتَغْرَقَ",لاحظ:"لاحَظَ",تخيل:"تَخَيَّلْ",انقر:"انْقُرْ",اختر:"اخْتَرْ",أظهر:"أَظْهِرْ",تعرّف:"تَعَرَّفْ",يفتح:"يَفْتَحُ",يظهر:"يَظْهَرُ",تظهر:"تَظْهَرُ",الشمس:"الشَّمْس",الشمسي:"الشَّمْسِيّ",الأرض:"الأَرْض",أرض:"أَرْض",أرضية:"أَرْضِيَّة",النظام:"النِّظام",نظام:"نِظام",نظامنا:"نِظامَنا",الكوكب:"الكَوْكَب",كوكب:"كَوْكَب",كواكب:"كَوَاكِب",الكواكب:"الكَوَاكِب",كوكبي:"كَوْكِيّ",الزهرة:"الزَّهْرَة",زحل:"زَحْل",المشتري:"المِشْتَرِي",المريخ:"المِرِّيخ",عطارد:"عُطارِد",نبتون:"نِبْتون",أورانوس:"أُورانوس",القمر:"القَمْر",قمر:"قَمْر",قمراً:"قَمَراً",الأقمار:"الأَقْمار",أقمار:"أَقْمار",القمم:"القِمم",النجم:"النَّجْم",نجم:"نَجْم",نجمنا:"نَجْمَنا",المدار:"المَدار",المدارية:"المَدارِيَّة",الفضاء:"الفَضاء",المجرة:"المَجَرَّة",الكون:"الكَوْن",كون:"كَوْن",كونية:"كَوْنِيَّة",الفلك:"الفَلَك",العلماء:"العِلَماء",العالم:"العالَم",عالم:"عالَم",الحياة:"الحَياة",للحياة:"لِلْحَياة",حياة:"حَياة",كتلة:"كَتْلَة",كتلته:"كَتْلَتِهِ",بكتلة:"بِكَتْلَة",الكتلة:"الكَتْلَة",كثافة:"كَثافة",كثافته:"كَثافَتِهِ",الكثافة:"الكَثافة",درجة:"دَرَجَة",درجات:"دَرَجات",حرارة:"حَرارَة",الحرارة:"الحَرارَة",السرعة:"السَّرْعَة",سرعة:"سَرْعَة",المسافة:"المَسافة",مسافة:"مَسافة",القطر:"القَطْر",الجاذبية:"الجاذِبَة",الضوء:"الضَّوْء",الغلاف:"الغِلاف",السماء:"السَّماء",كيلومتر:"كيلوميتَر",كيلومترات:"كيلوميتَرات",كيلومتراً:"كيلوميتَراً",كيلوجرام:"كيلوجرام",ناسا:"ناسا",الكسوف:"الكُسُوف",الأكثر:"الأَكْثَر",أكثر:"أَكْثَر",أكبر:"أَكْبَر",أصغر:"أَصْغَر",أقوى:"أَقْوى",أسرع:"أَسْرَع",أبرد:"أَبْرَد",الوحيد:"الوَحِيد",وحيد:"وَحِيد",الثاني:"الثَّانِي",الثامن:"الثَّامِن",التالي:"التَّالِي",الأشهر:"الأَشْهَر",جميع:"جَمِيع",نفس:"نَفْس",واحدة:"واحِدة",أخرى:"أُخْرى",الأخرى:"الأُخْرى",مرات:"مَرات",أيام:"أَيَّام",ساعات:"ساعات",سنوات:"سَنَوات",السنوات:"السَّنَوات",السنين:"السِّنِين",سنة:"سَنَة",يوم:"يَوْم",يومها:"يَوْمَها",ماء:"ماء",كرة:"كُرَة",جوهرة:"جَوْهَرَة",عملاق:"عَملاق",العملاق:"العَملاق",العمالقة:"العَمالِقَة",مليارات:"مِليارات",مليون:"مِليون",صخرية:"صَخْرِيَّة",الصخرية:"الصَّخْرِيَّة",رقيقا:"رَقِيقاً",رقيقة:"رَقِيقَة",الصدئ:"الصَّدِئ",ضخم:"ضَخْم",ضخماً:"ضَخْماً",كبير:"كَبِير",كبيرا:"كَبِيراً",رائع:"رائِع",رائعا:"رائِعاً",طبيعي:"طَبِيعِي",طبيعية:"طَبِيعِيَّة",مدهش:"مُدْهِش",مدهشا:"مُدْهِشاً",متوسط:"مُتَوَسِّط",منخفضة:"مُنْخَفِضَة",متطرفة:"مُتَطَرِّفَة",متجمدة:"مُتَجَمِّدَة",حارقة:"حارِقَة",سميكة:"سَمِيكَة",ثقيلة:"ثَقِيلَة",الغريب:"الغَرِيب",غريب:"غَرِيب",المتمردة:"المُتَمَرِّدَة",الشرير:"الشَّرِير",التوأم:"التَّوْأَم",شديدة:"شَدِيدَة",المطلقة:"المُطْلَقة",الحلقات:"الحَلَقات",حلقات:"حَلَقات",الرياح:"الرِّياح",رياح:"رِياح",الغازي:"الغازِي",الغازية:"الغازِيَّة",غازية:"غازِيَّة",الجليدي:"الجَلِيدي",الجليدية:"الجَلِيدِيَّة",جليدية:"جَلِيدِيَّة",الزرقاء:"الزَّرْقاء",الأزرق:"الأَزْرَق",الأحمر:"الأَحْمَر",اللون:"اللَّوْن",الحجم:"الحَجْم",سطحه:"سَطْحِهِ",سطح:"سَطْح",لبّ:"لُبّ",قشرة:"قَشَرَة",معطف:"مَعْطَف",معطفا:"مَعْطَفاً",حديدي:"حَدِيدِي",معدني:"مَعْدَنِي",ثقيل:"ثَقِيل",ميل:"مَيْل",دائرة:"دائِرَة",نقطة:"نُقْطَة",سلة:"سَلَّة",مفرغة:"مُفْرَغَة",بطة:"بَطَّة",مطاطية:"مَطاطِيَّة",حوض:"حَوْض",استحمام:"اسْتِحمام",ملابس:"مَلابِس",الملابس:"المَلابِس",الأشعة:"الأشِعَّة",المادة:"المادَّة",الجولة:"الجَوْلة",جولة:"جَوْلة",المرشد:"المُرْشِد",التسميات:"التَّسْمِيَات",المقارنة:"المُقارَنَة",للمقارنة:"لِلْمُقارَنَة",السؤال:"السُّؤال",سؤال:"سُؤال",الإجابة:"الإِجابَة",إجابة:"إِجابَة",الصعوبة:"الصُّعوبة",المستوى:"المُسْتَوى",التعلم:"التَّعْلِم",المحاولة:"المُحاوَلَة",محاولة:"مُحاوَلَة",إعادة:"إِعادة",إخفاء:"إِخْفاء",إظهار:"إِظْهار",اختيار:"اخْتِيار",اختياره:"اخْتِيارِهِ",نتيجة:"نَتيجَة",النتيجة:"النَتيجَة",حقيقة:"حَقِيقَة",معرفة:"مَعْرِفَة",تعلم:"تَعْلَمْ",مذهلة:"مُذْهِلَة",أيضاً:"أَيْضاً",جداً:"جِدًّا"},to=new Map;for(const[t,e]of Object.entries({...Pb,...Tb})){const n=zv(t);n&&!to.has(n)&&to.set(n,Rb(e))}const Bv={و:"وَ",ف:"فَ",ب:"بِ",ك:"كَ",ل:"لِ"};function Lb(t,e){if(e.startsWith("ال")){const n=e.slice(2);if(t==="ل")return"لِلْ"+n;if(t==="ك")return"كَالْ"+n}return Bv[t]+e}function jf(t,e){if(e>2)return null;for(const n of Object.keys(Bv)){if(!t.startsWith(n)||t.length<=n.length+1)continue;const i=t.slice(1),r=to.get(i)??jf(i,e+1);if(r)return Lb(n,r)}return null}function Nb(t){return to.get(t)??jf(t,0)??Db(t)}function Db(t){const e=[[/^(.*)(ون|ين|ان|ات|ة|ه|ها|هم|هن|كم|نا|ي|ك|ته|ية|يته|تهما)$/u,"$1"],[/^(.*)(هما|كما|هما)$/u,"$1"]];for(const[n]of e){const i=t.match(n);if(!i||i[1].length<2)continue;const r=i[1],s=to.get(r)??jf(r,0);if(!s)continue;const a=t.slice(r.length),o=Ib(a);if(o)return s+o}return null}function Ib(t){return{ون:"ُونَ",ين:"ِينَ",ان:"َانِ",ات:"َات",ة:"َة",ه:"ُهُ",ها:"ُهَا",هم:"ُهُم",هن:"ُهُنَّ",كم:"ُكُم",نا:"ُنَا",ي:"ِي",ك:"ُكَ",كما:"ُكُمَا",هما:"ُهُمَا"}[t]??null}function Ub(t){const e=t.match(/^([^\u0621-\u064A]*)([\u0621-\u064A\u0640\u064B-\u0652\u0670]+)(.*)$/u);if(!e)return t;const[,n,i,r]=e;if(Ab.test(i))return t;const s=Nb(zv(i));if(s)return n+Fb(s)+r;const a=Ob(i);return n+a+r}function Fb(t){return t.replace(/الش([بتثدذرزسشصضطظلن])/g,"الشَّ$1").replace(/الذ([بتثدذرزسشصضطظلن])/g,"الذَّ$1")}function Ob(t){let e=t;return e=e.replace(/^ال([تثدذرزسشصضطظلن])/u,"الشَّ$1".replace("الش","الش")),/^ال/u.test(e)&&(e=e.replace(/^ال([ابجحخعغفقكموهي])/u,"الْ$1")),e}function kb(t){return t&&t.split(/(\s+)/).map(e=>e.trim()?Ub(e):e).join("")}const zb="https://translate.google.com/translate_tts",Du=180;let Ei=0,zs=null,xl=null;function Bb(){return typeof window<"u"&&("speechSynthesis"in window||typeof Audio<"u")}function Ir(){if(Ei+=1,Zl(),zs){const t=zs;zs=null,t.onended=null,t.onerror=null;try{t.pause()}catch{}t.removeAttribute("src");try{t.load()}catch{}}typeof window<"u"&&"speechSynthesis"in window&&window.speechSynthesis.cancel()}function Hv(t,e){var s;Ir();const n=Ei,i=jb(t,e.lang);if(!i.length){(s=e.onEnd)==null||s.call(e);return}const r=()=>{var a;n===Ei&&(Zl(),(a=e.onEnd)==null||a.call(e))};e.lang==="ar"?Vv(i,0,n,e,r):Gv(i,0,n,e,r)}function Vv(t,e,n,i,r){if(n!==Ei)return;if(e>=t.length){r();return}const s=`${zb}?ie=UTF-8&client=tw-ob&tl=${i.lang}&q=${encodeURIComponent(t[e])}`,a=new Audio;zs=a;let o=!1;const l=()=>{o=!0,zs===a&&(zs=null),a.onended=null,a.onerror=null},c=()=>{o||(l(),Vv(t,e+1,n,i,r))},f=()=>{o||(l(),n===Ei&&Gv(t.slice(e),0,n,i,r))};a.onended=c,a.onerror=f,a.src=s;const d=a.play();d&&typeof d.catch=="function"&&d.catch(f)}async function Gv(t,e,n,i,r){if(n!==Ei)return;if(typeof window>"u"||!("speechSynthesis"in window)){r();return}const s=await Vb();if(n!==Ei)return;const a=Gb(i.lang,s);Wb(n);for(let o=e;o<t.length;o++){if(n!==Ei)return;if(!await Hb(t[o],a,i.lang))break}r()}function Hb(t,e,n){return new Promise(i=>{const r=new SpeechSynthesisUtterance(t);r.lang=n==="ar"?"ar-SA":"en-US",e&&(r.voice=e),r.rate=n==="ar"?.92:1.05,r.pitch=n==="ar"?.75:1;let s=!1;const a=o=>{s||(s=!0,i(o))};r.onend=()=>a(!0),r.onerror=()=>a(!1),window.speechSynthesis.speak(r),window.setTimeout(()=>{if(!s){try{window.speechSynthesis.cancel()}catch{}a(!1)}},t.length*150+12e3)})}function Vb(){const t=window.speechSynthesis,e=t.getVoices();return e.length?Promise.resolve(e):new Promise(n=>{let i=!1;const r=()=>{i||(i=!0,t.removeEventListener("voiceschanged",r),n(t.getVoices()))};t.addEventListener("voiceschanged",r),window.setTimeout(r,1500)})}function Gb(t,e){const n=t,i=e.filter(s=>(s.lang||"").toLowerCase().replace("_","-").startsWith(n));if(!i.length)return null;const r=s=>{const a=(s.name||"").toLowerCase(),o=(s.lang||"").toLowerCase().replace("_","-");let l=0;return s.localService||(l+=60),/natural|neural|online|premium|enhanced/.test(a)&&(l+=40),/google/.test(a)&&(l+=25),n==="ar"?(/hoda|salma|amira|zariyah|zira|jenny|aria|jenny|female|نساء|أنثى/.test(a)&&(l-=45),/majed|hamed|naayf|طارق|ماجد|حامد|نايف|male|رجل|ذكر/.test(a)&&(l+=50),/microsoft (laid|majed|hamad|naif|tariq)/.test(a)&&(l+=20)):/hoda|hamed|salma|majed|zariyah|amira|david|zira|aria|jenny/.test(a)&&(l+=10),/naayf|hazel/.test(a)&&(l-=15),(o.startsWith(`${n}-sa`)||o.startsWith(`${n}-us`)||o.startsWith(`${n}-gb`))&&(l+=8),s.default&&(l+=3),l};return i.slice().sort((s,a)=>r(a)-r(s))[0]}function Wb(t){Zl(),xl=window.setInterval(()=>{if(t!==Ei){Zl();return}const e=window.speechSynthesis;e.speaking&&!e.paused&&(e.pause(),e.resume())},9e3)}function Zl(){xl!==null&&(window.clearInterval(xl),xl=null)}function jb(t,e){const n=Xb(t);if(!n)return[];const i=qb(n,e),r=e==="ar"?kb(i):i,s=r.match(/[^.!?؟]+[.!?؟]*/g)||[r],a=[];for(const o of s){let l=o.trim();if(l){for(;l.length>Du;){let c=l.lastIndexOf(" ",Du);c<40&&(c=Du),a.push(l.slice(0,c).trim()),l=l.slice(c).trim()}l&&a.push(l)}}return a}function Xb(t){return t.replace(/[\u{1F000}-\u{1FAFF}\u{2190}-\u{2BFF}\u{FE0F}]/gu," ").replace(/Booooooom!!?/gi," ").replace(/بو+وم!?/g," ").replace(/\s+/g," ").trim()}function qb(t,e){const n=e==="ar";let i=t;const r=s=>{const a=s.startsWith("-"),o=a?s.slice(1):s;return n?`${a?"سالب ":""}${o} درجة مئوية`:`${a?"minus ":""}${o} degrees Celsius`};return i=i.replace(/(-?\d+(?:[.,]\d+)?)\s*°\s*C/gi,(s,a)=>r(a)),i=i.replace(/(-?\d+(?:[.,]\d+)?)\s*°/g,(s,a)=>r(a)),i=i.replace(/(\d+(?:[.,]\d+)?)\s*%/g,(s,a)=>n?`${a} بالمئة`:`${a} percent`),i=i.replace(/(\d+(?:[.,]\d+)?)\s*كم\/س/g,"$1 كيلومتر في الساعة"),i=i.replace(/(\d+(?:[.,]\d+)?)\s*km\/h/gi,n?"$1 كيلومتر في الساعة":"$1 kilometres per hour"),i=i.replace(/(\d)\s*كم(?=\s|$|[.,،!?؟])/g,"$1 كيلومتر"),i=i.replace(/(\d)\s*km(?=\s|$|[.,!?])/gi,n?"$1 كيلومتر":"$1 kilometres"),i=i.replace(/كغ/g,n?"كيلوجرام":"kilograms"),i=i.replace(/\bkg\b/gi,n?"كيلوجرام":"kilograms"),i=i.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g,s=>String("⁰¹²³⁴⁵⁶⁷⁸⁹".indexOf(s))),i=i.replace(/×\s*10\s*(\d+)/g,n?"في عشرة أس $1":"times ten to the power of $1"),i=i.replace(/×/g,n?"في":"times"),i=i.replace(/\^(\d+)/g,n?"أس $1":"power $1"),i=i.replace(/(\d),(\d{3})\b/g,"$1$2"),i=i.replace(/[—–]+/g,n?"، ":", "),i=i.replace(/\//g,n?" أو ":" or "),i=i.replace(/[[\](){}«»"]/g," "),i.replace(/\s+/g," ").trim()}const $b=({planet:t,onClose:e,showComparison:n,comparisonPlanets:i,onChooseAsA:r,onChooseAsB:s,solarApi:a})=>{var C,Q,ee,I,J;let l={mercury:"https://science.nasa.gov/mercury/",venus:"https://science.nasa.gov/venus/",earth:"https://science.nasa.gov/earth/",mars:"https://science.nasa.gov/mars/",jupiter:"https://science.nasa.gov/jupiter/",saturn:"https://science.nasa.gov/saturn/",uranus:"https://science.nasa.gov/uranus/",neptune:"https://science.nasa.gov/neptune/",sun:"https://science.nasa.gov/sun/"}[t.id.toLowerCase()]||"https://science.nasa.gov/solar-system/";(t.isMoon||t.parentId)&&(l=`https://www.nasa.gov/search?q=${encodeURIComponent(t.name)}`);const{t:c,language:f}=Qn(),[d,h]=Me.useState(!1),[m,_]=Me.useState(!1),x=t.parentId,p=B=>{if("AudioContext"in window||"webkitAudioContext"in window)try{const H=window.AudioContext||window.webkitAudioContext,D=new H,F=D.currentTime;if(B==="chime"){const z=D.createOscillator(),K=D.createOscillator(),ae=D.createGain();z.type="sine",z.frequency.setValueAtTime(880,F),z.frequency.exponentialRampToValueAtTime(1760,F+.15),K.type="triangle",K.frequency.setValueAtTime(1320,F),ae.gain.setValueAtTime(.12,F),ae.gain.exponentialRampToValueAtTime(.001,F+.8),z.connect(ae),K.connect(ae),ae.connect(D.destination),z.start(F),K.start(F),z.stop(F+.8),K.stop(F+.8)}else if(B==="swoosh"){const z=D.createOscillator(),K=D.createBiquadFilter(),ae=D.createGain();z.type="sawtooth",z.frequency.setValueAtTime(100,F),z.frequency.exponentialRampToValueAtTime(400,F+.5),K.type="lowpass",K.frequency.setValueAtTime(300,F),K.frequency.exponentialRampToValueAtTime(1500,F+.4),K.Q.setValueAtTime(5,F),ae.gain.setValueAtTime(.06,F),ae.gain.exponentialRampToValueAtTime(.001,F+.6),z.connect(K),K.connect(ae),ae.connect(D.destination),z.start(F),z.stop(F+.6)}else if(B==="beep"){const z=D.createOscillator(),K=D.createGain();z.type="sine",z.frequency.setValueAtTime(1e3,F),K.gain.setValueAtTime(.04,F),K.gain.exponentialRampToValueAtTime(.001,F+.12),z.connect(K),K.connect(D.destination),z.start(F),z.stop(F+.15)}}catch(H){console.error(H)}},u=()=>{if(!Bb()){alert(f==="ar"?"متصفحك لا يدعم توليد الصوت.":"Text-to-speech is not supported in your browser.");return}if(m){Ir(),_(!1),p("beep");return}p("chime");const B=v?g:c(t.id)||t.name,H=f==="ar"?"معلومات سريعة":"Quick Facts",D=c("diameter"),F=`${t.diameter.toLocaleString()} ${c("km")}`,z=c("funFact"),K=`${B}. ${N}. ${H}. ${D} ${F}. ${z} ${re}.`;_(!0),Hv(K,{lang:f==="ar"?"ar":"en",onEnd:()=>_(!1)})};Me.useEffect(()=>{Ir(),_(!1)},[t]),Me.useEffect(()=>()=>{Ir()},[]);const v=t.isMoon||x;let g=t.name,M=t.description,P=t.funFact;if(v){const B=t.name.toLowerCase().replace(/\s+/g,""),H=c(B);H&&H!==B&&(g=H),M=`${c("moonOf")} ${c(x)||x}.`,P=`${c("clickLearnMore")}.`}const A=x?` • ${c("moonOf")} ${c(x)||x}`:"",T=Eb(t.id),N=T?c(T.description):v?M:t.description,re=T?c(T.funFact):v?P:t.funFact,y=B=>{let H=B;return H=H.replace(/Earth years/g,c("earthYears")),H=H.replace(/Earth days/g,c("earthDays")),H=H.replace(/hours/g,c("hours")),H=H.replace(/minutes/g,c("minutes")),H=H.replace(/seconds/g,c("seconds")),H=H.replace(/days/g,c("days")),H};return Me.useEffect(()=>{var B,H,D;if(a&&t){(B=a==null?void 0:a.stopFollowPlanet)==null||B.call(a);const F=t.isMoon,z=t.parentId,K=F&&z?`${z}:${t.name}`:null;if(F&&K&&(a!=null&&a.followMoon)){(H=a==null?void 0:a.pauseMoonOrbit)==null||H.call(a,K);const ae=Math.max(1.5,t.radius+.8);setTimeout(()=>{var Ae;(Ae=a==null?void 0:a.followMoon)==null||Ae.call(a,K,ae,!0)},100)}else{(D=a==null?void 0:a.selectPlanet)==null||D.call(a,t.id);const ae=Math.max(1.5,t.radius+.8);setTimeout(()=>{var Ae;(Ae=a==null?void 0:a.followPlanet)==null||Ae.call(a,t.id,ae,!0)},100)}}return()=>{var F,z;a&&((F=a==null?void 0:a.stopFollowPlanet)==null||F.call(a),(z=a==null?void 0:a.resumeMoonOrbit)==null||z.call(a))}},[t,a]),S.jsx("div",{className:`absolute top-20 ${f==="ar"?"left-5":"right-5"} w-80 liquid-glass text-white rounded-2xl overflow-hidden z-20 animate-slideIn transition-all duration-500`,children:S.jsxs("div",{className:"relative",children:[S.jsx("button",{onClick:e,className:`absolute top-3 ${f==="ar"?"left-3":"right-3"} p-1 liquid-glass-button`,children:S.jsx(Ov,{size:20})}),S.jsxs("div",{className:"p-5",children:[S.jsxs("div",{className:"flex items-center justify-between mb-1 gap-2",children:[S.jsxs("h2",{className:"text-2xl font-bold pr-6",children:[v?g:c(t.id)||t.name,A]}),S.jsx("button",{onClick:u,className:`p-2 rounded-full transition-all duration-300 flex items-center justify-center relative ${m?"bg-cyan-500/30 text-cyan-300 border border-cyan-400/50 scale-110 shadow-lg shadow-cyan-500/25 pulse-glow":"bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white border border-white/10 hover:scale-105"}`,title:m?f==="ar"?"إيقاف السرد":"Stop Narrator":f==="ar"?"تشغيل السرد الصوتي":"Play Narrator",children:m?S.jsxs("div",{className:"flex items-center gap-1.5 px-1",children:[S.jsxs("div",{className:"flex items-end gap-0.5 h-4 w-5",children:[S.jsx("span",{className:"w-0.5 bg-cyan-300 rounded-full animate-wave-1 origin-bottom h-full"}),S.jsx("span",{className:"w-0.5 bg-cyan-300 rounded-full animate-wave-2 origin-bottom h-3/4"}),S.jsx("span",{className:"w-0.5 bg-cyan-300 rounded-full animate-wave-3 origin-bottom h-full"}),S.jsx("span",{className:"w-0.5 bg-cyan-300 rounded-full animate-wave-4 origin-bottom h-1/2"})]}),S.jsx(Gf,{size:16,className:"text-cyan-300"})]}):S.jsx(Wf,{size:18})})]}),S.jsx("div",{className:"w-full h-0.5 bg-white/20 mb-4"}),S.jsx("style",{children:`
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
          `}),n&&S.jsxs("div",{className:"flex gap-2 mb-4",children:[S.jsx("button",{className:"px-3 py-1 liquid-glass-button text-xs font-semibold disabled:opacity-50",onClick:()=>r&&r(t),disabled:((C=i==null?void 0:i.planetA)==null?void 0:C.id)===t.id,children:((Q=i==null?void 0:i.planetA)==null?void 0:Q.id)===t.id?c("chosenAsA"):c("chooseAsA")}),S.jsx("button",{className:"px-3 py-1 liquid-glass-button text-xs font-semibold disabled:opacity-50",onClick:()=>s&&s(t),disabled:((ee=i==null?void 0:i.planetB)==null?void 0:ee.id)===t.id||((I=i==null?void 0:i.planetA)==null?void 0:I.id)===t.id,children:((J=i==null?void 0:i.planetB)==null?void 0:J.id)===t.id?c("chosenAsB"):c("chooseAsB")})]}),S.jsxs("div",{className:"space-y-4",children:[S.jsx("p",{className:"text-sm text-gray-300",children:N}),S.jsxs("div",{className:"grid grid-cols-2 gap-2 text-sm",children:[S.jsxs("div",{children:[S.jsx("h3",{className:"text-gray-400",children:c("diameter")}),S.jsxs("p",{children:[t.diameter.toLocaleString()," ",c("km")]})]}),S.jsxs("div",{children:[S.jsx("h3",{className:"text-gray-400",children:c("mass")}),S.jsx("p",{children:f==="ar"?t.mass.replace(/\bkg\b/gi,"كغ"):t.mass})]}),S.jsxs("div",{children:[S.jsx("h3",{className:"text-gray-400",children:c("dayLength")}),S.jsx("p",{children:y(t.dayLength).replace(/\(equator\)/g,` ${c("equator")}`)})]}),S.jsxs("div",{children:[S.jsx("h3",{className:"text-gray-400",children:c("yearLength")}),S.jsx("p",{children:y(t.yearLength)})]}),S.jsxs("div",{children:[S.jsx("h3",{className:"text-gray-400",children:c("avgTemp")}),S.jsx("p",{children:t.avgTemp.replace(/\(surface\)/g,` ${c("surface")}`)})]}),S.jsxs("div",{children:[S.jsx("h3",{className:"text-gray-400",children:c("distanceFromSun")}),S.jsxs("p",{children:[(t.distanceFromSun*.1).toFixed(1)," ",c("millionKm")]})]})]}),t.moons&&t.moons.length>0&&S.jsxs("div",{children:[S.jsxs("h3",{className:"text-gray-400 mb-1",children:[c("moons")," (",t.moons.length,")"]}),S.jsxs("div",{className:`flex flex-wrap gap-1 ${f==="ar"?"justify-end":"justify-start"}`,children:[t.moons.slice(0,5).map((B,H)=>S.jsx("button",{onClick:()=>{var D;return(D=a==null?void 0:a.selectMoon)==null?void 0:D.call(a,t.id,B.name)},className:"bg-white/10 hover:bg-white/25 active:bg-white/35 px-2 py-1 rounded-full text-xs transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer text-white border border-white/5 hover:border-white/20",children:f==="ar"&&c(B.name.toLowerCase().replace(/\s+/g,""))||B.name},H)),t.moons.length>5&&S.jsxs("span",{className:"bg-white/10 px-2 py-1 rounded-full text-xs",children:["+",t.moons.length-5," ",c("more")]})]})]}),S.jsxs("div",{children:[S.jsx("h3",{className:"text-gray-400 mb-1",children:c("funFact")}),S.jsx("p",{className:"text-sm italic",children:re})]}),S.jsx("div",{children:S.jsxs("a",{href:l,target:"_blank",rel:"noopener noreferrer",className:`inline-flex items-center gap-2 mt-2 px-4 py-2 liquid-glass-button text-white font-semibold ${d?"opacity-70 pointer-events-none":""}`,onClick:()=>h(!0),children:[d&&S.jsxs("svg",{className:"animate-spin h-5 w-5 text-blue-400",fill:"none",viewBox:"0 0 24 24",children:[S.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),S.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"})]}),c("learnMore")]})})]})]})]})})},Yb=({speed:t,onChange:e,paused:n,onPauseToggle:i,hideMoons:r,onHideMoonsChange:s,showLabels:a,onShowLabelsChange:o,planetScale:l,onPlanetScaleChange:c})=>{const{t:f}=Qn();return S.jsxs("div",{className:"liquid-glass liquid-glass-glow rounded-xl p-3 text-white flex items-center gap-3",children:[S.jsx(db,{size:18,className:"text-gray-400"}),S.jsxs("div",{className:"flex flex-col",children:[S.jsx("div",{className:"text-sm font-medium mb-1",children:f("simulationSpeed")}),S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsx("span",{className:"text-xs",children:f("slow")}),S.jsx("input",{type:"range",min:.1,max:2,step:.1,value:t,onChange:d=>e(parseFloat(d.target.value)),className:"w-32 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer",disabled:n}),S.jsx("span",{className:"text-xs",children:f("fast")})]})]}),S.jsxs("div",{className:"text-sm font-bold ml-2",children:[t.toFixed(1),"x"]}),S.jsx("button",{onClick:i,className:"ml-4 p-2 liquid-glass-button shiny-border-hover","aria-label":f(n?"play":"pause"),type:"button",children:n?S.jsx(gb,{size:18}):S.jsx(mb,{size:18})}),S.jsxs("div",{className:"flex items-center gap-2 ml-2",children:[S.jsxs("label",{className:"flex items-center gap-1 text-xs bg-white/10 px-2 py-1 rounded-lg hover:bg-white/20 transition-colors cursor-pointer",children:[S.jsx("input",{type:"checkbox",checked:!!r,onChange:d=>s==null?void 0:s(d.target.checked),className:"accent-blue-500 w-3 h-3"}),f(r?"showMoons":"hideMoons")]}),S.jsxs("label",{className:"flex items-center gap-1 text-xs bg-white/10 px-2 py-1 rounded-lg hover:bg-white/20 transition-colors cursor-pointer",children:[S.jsx("input",{type:"checkbox",checked:!!a,onChange:d=>o==null?void 0:o(d.target.checked),className:"accent-blue-500 w-3 h-3"}),f(a?"hideLabels":"showLabels")]}),S.jsxs("label",{className:"flex items-center gap-1 text-xs bg-white/10 px-2 py-1 rounded-lg hover:bg-white/20 transition-colors cursor-pointer",children:[S.jsx("span",{children:f("planetScale")}),S.jsx("input",{type:"range",min:.5,max:2,step:.05,value:l,onChange:d=>c==null?void 0:c(parseFloat(d.target.value)),className:"w-16 accent-blue-500"}),S.jsxs("span",{children:[l==null?void 0:l.toFixed(2),"x"]})]})]})]})},Kb=({planetA:t,planetB:e,onReset:n,onClose:i})=>{var l,c;const{t:r}=Qn(),s=f=>{let d=f;return d=d.replace(/Earth years/g,r("earthYears")),d=d.replace(/Earth days/g,r("earthDays")),d=d.replace(/hours/g,r("hours")),d=d.replace(/minutes/g,r("minutes")),d=d.replace(/seconds/g,r("seconds")),d=d.replace(/days/g,r("days")),d},a=t&&e?(t.orbitSpeed/e.orbitSpeed).toFixed(2):null,o=t&&e?Math.abs(t.distanceFromSun-e.distanceFromSun)*.1:null;return S.jsx("div",{className:"absolute top-20 left-1/2 transform -translate-x-1/2 w-[600px] max-w-[90vw] liquid-glass liquid-glass-glow text-white rounded-2xl overflow-hidden z-20 transition-all duration-300 ease-in-out animate-slideIn",children:S.jsxs("div",{className:"relative",children:[S.jsxs("div",{className:"flex justify-between items-center p-4 border-b border-white/20",children:[S.jsx("h2",{className:"text-xl font-bold",children:r("planetComparison")}),S.jsxs("div",{className:"flex gap-2",children:[S.jsx("button",{onClick:n,className:"liquid-glass-button shiny-border-hover px-3 py-1 text-sm",children:r("reset")}),S.jsx("button",{onClick:i,className:"liquid-glass-button shiny-border-hover p-1",children:S.jsx(Ov,{size:20})})]})]}),S.jsx("div",{className:"p-5",children:!t&&!e?S.jsx("div",{className:"text-center py-8",children:S.jsx("p",{className:"text-gray-300",children:r("selectTwoPlanets")})}):S.jsxs("div",{children:[S.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[S.jsxs("div",{className:"col-span-1",children:[S.jsx("h3",{className:"text-gray-400 border-b border-gray-700 pb-2 mb-2",children:r("property")}),S.jsxs("div",{className:"space-y-3",children:[S.jsx("p",{className:"py-1",children:r("name")}),S.jsx("p",{className:"py-1",children:r("diameter")}),S.jsx("p",{className:"py-1",children:r("mass")}),S.jsx("p",{className:"py-1",children:r("dayLength")}),S.jsx("p",{className:"py-1",children:r("yearLength")}),S.jsx("p",{className:"py-1",children:r("distanceFromSun")}),S.jsx("p",{className:"py-1",children:r("orbitalSpeed")}),S.jsx("p",{className:"py-1",children:r("avgTemperature")}),S.jsx("p",{className:"py-1",children:r("moons")})]})]}),S.jsxs("div",{className:"col-span-1",children:[S.jsx("h3",{className:`text-center border-b border-gray-700 pb-2 mb-2 ${t?"text-white":"text-gray-500"}`,children:t?r(t.id)||t.name:r("selectPlanetA")}),t?S.jsxs("div",{className:"space-y-3",children:[S.jsx("p",{className:"py-1 text-center",children:r(t.id)||t.name}),S.jsxs("p",{className:"py-1 text-center",children:[t.diameter.toLocaleString()," km"]}),S.jsx("p",{className:"py-1 text-center",children:t.mass}),S.jsx("p",{className:"py-1 text-center",children:s(t.dayLength)}),S.jsx("p",{className:"py-1 text-center",children:s(t.yearLength)}),S.jsxs("p",{className:"py-1 text-center",children:[(t.distanceFromSun*.1).toFixed(1)," ",r("millionKm")]}),S.jsx("p",{className:"py-1 text-center",children:t.orbitSpeed.toFixed(4)}),S.jsx("p",{className:"py-1 text-center",children:t.avgTemp}),S.jsx("p",{className:"py-1 text-center",children:((l=t.moons)==null?void 0:l.length)||0})]}):S.jsx("div",{className:"h-full flex items-center justify-center",children:S.jsx("p",{className:"text-gray-500 text-sm",children:r("clickAPlanet")})})]}),S.jsxs("div",{className:"col-span-1",children:[S.jsx("h3",{className:`text-center border-b border-gray-700 pb-2 mb-2 ${e?"text-white":"text-gray-500"}`,children:e?r(e.id)||e.name:r("selectPlanetB")}),e?S.jsxs("div",{className:"space-y-3",children:[S.jsx("p",{className:"py-1 text-center",children:r(e.id)||e.name}),S.jsxs("p",{className:"py-1 text-center",children:[e.diameter.toLocaleString()," km"]}),S.jsx("p",{className:"py-1 text-center",children:e.mass}),S.jsx("p",{className:"py-1 text-center",children:s(e.dayLength)}),S.jsx("p",{className:"py-1 text-center",children:s(e.yearLength)}),S.jsxs("p",{className:"py-1 text-center",children:[(e.distanceFromSun*.1).toFixed(1)," ",r("millionKm")]}),S.jsx("p",{className:"py-1 text-center",children:e.orbitSpeed.toFixed(4)}),S.jsx("p",{className:"py-1 text-center",children:e.avgTemp}),S.jsx("p",{className:"py-1 text-center",children:((c=e.moons)==null?void 0:c.length)||0})]}):S.jsx("div",{className:"h-full flex items-center justify-center",children:S.jsx("p",{className:"text-gray-500 text-sm",children:r("clickAPlanet")})})]})]}),t&&e&&t.id!==e.id&&S.jsxs("div",{className:"mt-6 p-4 bg-white/10 rounded-lg",children:[S.jsx("h3",{className:"text-lg font-bold mb-3",children:r("comparisonResults")}),S.jsxs("div",{className:"space-y-2",children:[S.jsxs("p",{children:[S.jsxs("span",{className:"text-gray-300",children:[r("sizeDifference"),":"]})," ",t.diameter>e.diameter&&e.diameter!==0?`${r(t.id)||t.name} ${r("is")} ${(t.diameter/e.diameter).toFixed(1)}x ${r("larger")} ${r("than")} ${r(e.id)||e.name}`:e.diameter>t.diameter&&t.diameter!==0?`${r(e.id)||e.name} ${r("is")} ${(e.diameter/t.diameter).toFixed(1)}x ${r("larger")} ${r("than")} ${r(t.id)||t.name}`:r("sameSizeMoons")]}),S.jsxs("p",{children:[S.jsxs("span",{className:"text-gray-300",children:[r("orbitalSpeedRatio"),":"]})," ",a&&e.orbitSpeed!==0?`${r(t.id)||t.name} ${r("is")} ${a}x ${parseFloat(a)>1?r("faster"):r("slower")} ${r("than")} ${r(e.id)||e.name}`:"N/A"]}),S.jsxs("p",{children:[S.jsxs("span",{className:"text-gray-300",children:[r("distanceBetweenPlanets"),":"]})," ",o&&`${r("approximately")} ${o.toFixed(1)} ${r("million")} ${r("kilometers")}`]})]})]})]})})]})})},Zb=({isOpen:t,onLanguageSelect:e})=>{Qn();const[n,i]=Me.useState(null);if(!t)return null;const r=a=>{i(a)},s=()=>{n&&e(n)};return S.jsxs("div",{className:"fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[99999]",children:[S.jsxs("div",{className:"liquid-glass liquid-glass-glow rounded-3xl p-10 max-w-md w-full mx-4 animate-fadeIn",children:[S.jsx("div",{className:"flex justify-center mb-8",children:S.jsx("div",{className:"p-4 bg-gradient-to-br from-cyan-500/30 to-blue-500/20 rounded-full border border-cyan-400/50",children:S.jsx(Fv,{size:40,className:"text-cyan-400"})})}),S.jsxs("h1",{className:"text-3xl font-bold text-center text-white mb-3 flex flex-col items-center gap-1",children:[S.jsx("span",{className:"text-2xl md:text-3xl",children:"Select Language"}),S.jsx("span",{className:"text-xl md:text-2xl text-cyan-400 font-arabic",children:"اختر لغة"})]}),S.jsxs("div",{className:"text-center text-gray-300 mb-8 flex flex-col gap-1 text-sm md:text-base",children:[S.jsx("span",{children:"Please choose your preferred language"}),S.jsx("span",{className:"text-cyan-300/80 font-arabic",children:"يرجى اختيار لغتك المفضلة"})]}),S.jsxs("div",{className:"flex flex-col gap-4 mb-8",children:[S.jsxs("button",{onClick:()=>r("en"),className:`w-full transition-all duration-200 transform active:scale-110 rounded-xl font-bold py-4 px-6 liquid-glass-button shiny-border-hover flex items-center justify-between ${n==="en"?"scale-110 !bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/35 border border-blue-400":"text-white hover:scale-105"}`,children:[S.jsxs("div",{className:"flex items-center gap-3",children:[S.jsx("span",{className:"text-2xl",children:"🇺🇸"}),S.jsx("span",{className:"text-lg",children:"English"})]}),S.jsx("span",{className:"text-sm text-gray-300",children:"الإنجليزية"})]}),S.jsxs("button",{onClick:()=>r("ar"),className:`w-full transition-all duration-200 transform active:scale-110 rounded-xl font-bold py-4 px-6 liquid-glass-button shiny-border-hover flex items-center justify-between ${n==="ar"?"scale-110 !bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg shadow-green-500/35 border border-green-400":"text-white hover:scale-105"}`,children:[S.jsxs("div",{className:"flex items-center gap-3",children:[S.jsx("span",{className:"text-2xl",children:"🇸🇦"}),S.jsx("span",{className:"text-lg font-arabic",children:"عربي"})]}),S.jsx("span",{className:"text-sm text-gray-300",children:"Arabic"})]})]}),S.jsx("button",{onClick:s,disabled:!n,className:`w-full py-3 px-6 font-bold rounded-xl transition-all duration-200 text-base liquid-glass-button shiny-border-hover ${n?"text-white cursor-pointer hover:scale-105 shadow-md shadow-cyan-500/20":"opacity-40 cursor-not-allowed text-gray-400"}`,children:S.jsxs("span",{className:"flex items-center justify-center gap-2",children:[S.jsx("span",{children:"OK"}),S.jsx("span",{className:"text-gray-400",children:"/"}),S.jsx("span",{className:"font-arabic",children:"حسنا"})]})})]}),S.jsx("style",{children:`
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
      `})]})},Qb=()=>{const{language:t,setLanguage:e,t:n}=Qn(),[i,r]=Me.useState(!1),s=[{code:"en",label:n("english"),flag:"🇬🇧",color:"from-blue-600 to-blue-700"},{code:"ar",label:n("arabic"),flag:"🇸🇦",color:"from-green-600 to-green-700"}],a=o=>{e(o),r(!1)};return S.jsxs("div",{className:"relative",children:[S.jsx("button",{onClick:()=>r(!i),className:"p-2 rounded-full liquid-glass-button shiny-border-hover text-cyan-400",title:t==="ar"?"تغيير اللغة":"Change language",children:S.jsx(Fv,{size:20})}),i&&S.jsx("div",{className:"absolute top-12 right-0 liquid-glass liquid-glass-glow rounded-2xl py-2 z-50 min-w-max",children:s.map(o=>S.jsxs("button",{onClick:()=>a(o.code),className:`w-full px-4 py-2 text-left flex items-center gap-3 transition-all duration-200 liquid-glass-button ${t===o.code?`!bg-gradient-to-r ${o.color} text-white font-semibold`:"text-gray-300 hover:text-white"}`,children:[S.jsx("span",{className:"text-lg",children:o.flag}),S.jsx("span",{children:o.label}),t===o.code&&S.jsx("span",{className:"ml-auto text-cyan-300",children:"✓"})]},o.code))}),i&&S.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>r(!1)})]})},rl={mercury:{prologue:{en:"Meet Mercury 🔴, the speedy messenger of the skies! Racing around the Sun in just 88 days, this little world experiences extreme temperature swings—from scorching 430°C by day to freezing -180°C at night. It's the closest planet to our star, and boy, does it feel the heat!",ar:"تعرف على عطارد 🔴، الرسول السريع في السماء! يدور حول الشمس في 88 يوماً فقط، ويعيش هذا العالم الصغير تقلبات حرارية متطرفة—من 430°C حارقة نهاراً إلى -180°C متجمدة ليلاً. إنه أقرب كوكب إلى نجمنا، ويالها من حرارة شديدة!"},story:{en:"Despite being the smallest planet, Mercury has a giant iron heart—its core makes up 60% of its mass! Imagine squeezing a metal ball the size of a car into a walnut shell. That's essentially what Mercury is—a heavy metal world wearing a thin rocky jacket.",ar:"بالرغم من أنه أصغر كوكب، إلا أن عطارد يحمل قلباً حديدياً ضخماً—يشكل لبّه 60% من كتلته! تخيل أن تضغط كرة معدنية بحجم سيارة داخل قشرة جوز. هذا عطارد بالضبط—عالم معدني ثقيل يرتدي معطفاً صخرياً رقيقاً."},massExplanation:{en:"At 3.3 × 10²³ kg, Mercury may be lightweight compared to Earth, but it's surprisingly dense—second only to Earth in the whole Solar System!",ar:"بكتلة 3.3 × 10²³ كغ، قد يكون عطارد خفيفاً مقارنة بالأرض، لكنه مدهش في كثافته—ثاني أكثر الكواكب كثافة في النظام الشمسي بعد الأرض!"}},venus:{prologue:{en:"Behold Venus 🟡, the dazzling morning and evening star! Shrouded in thick clouds of sulfuric acid, this beauty is actually a hellish world with surface temperatures hot enough to melt lead. She's Earth's 'evil twin'—similar size, totally different personality!",ar:"ألقِ نظرة على الزهرة 🟡، النجم اللامع في الصباح والمساء! مغطاة بغيوم سميكة من حامض الكبريتيك، هذه الجمال عالم جهنمي حقيقي مع درجات حرارة سطح تذيب الرصاص. إنها 'التوأم الشرير' للأرض—نفس الحجم، شخصية مختلفة تماماً!"},story:{en:"Venus is the ultimate rebel—she rotates backwards! While most planets spin like tops, Venus does a slow backspin, making her day longer than her year. Sunrise in the west? On Venus, that's perfectly normal!",ar:"الزهرة هي المتمردة بامتياز—تدور في الاتجاه المعاكس! بينما تدور معظم الكواكب كالأعاصير، تدور الزهرة ببطء للخلف، مما يجعل يومها أطول من سنةها. الشمس تشرق من الغرب؟ على الزهرة، هذا طبيعي تماماً!"},massExplanation:{en:"Weighing 4.87 × 10²⁴ kg, Venus is about 80% of Earth's mass. If Earth is a basketball, Venus is a slightly deflated one—close enough in size that they could swap clothes!",ar:"بكتلة 4.87 × 10²⁴ كغ، تبلغ كتلة الزهرة حوالي 80% من كتلة الأرض. إذا كانت الأرض كرة سلة، فالزهرة كرة مفرغة قليلاً—قريبة جداً في الحجم لدرجة أنهما يمكن أن تتبادلا الملابس!"}},earth:{prologue:{en:"Welcome home to Earth 🌍, the blue marble suspended in space! The only known oasis of life in the cosmos, our planet is 71% water and 100% awesome. From towering mountains to deep ocean trenches, Earth is a masterpiece of cosmic artistry!",ar:"أهلاً بك في المنزل على الأرض 🌍، الكرة الزرقاء المعلقة في الفضاء! الواحة الوحيدة المعروفة للحياة في الكون، كوكبنا 71% ماء و100% رائع. من الجبال الشاهقة إلى خنادق المحيطات العميقة، الأرض تحفة فنية كونية!"},story:{en:"Earth isn't just special—it's a precious jewel. With the perfect distance from the Sun, a protective magnetic shield, and just the right amount of water, it's like the universe won the lottery creating this place. Cherish it, because there's no Planet B!",ar:"الأرض ليست مميزة فقط—إنها جوهرة ثمينة. مع المسافة المثالية من الشمس، ودرع مغناطيسي وقائي، وكمية ماء مناسبة تماماً، ما أعظم الخالق الذي خلق هذا المكان. اعتنِ بها، لأنه لا يوجد كوكب بديل!"},massExplanation:{en:"At 5.97 × 10²⁴ kg, Earth is the densest planet in the Solar System. All that rock and metal packed together makes us the heavyweight champion of the rocky worlds!",ar:"بكتلة 5.97 × 10²⁴ كغ، الأرض هي أكثر الكواكب كثافة في النظام الشمسي. كل هذه الصخور والمعادن المضغوطة معاً تجعلنا بطل الأوزان الثقيل في عالم الكواكب الصخرية!"}},mars:{prologue:{en:"Greetings from Mars 🔴, the Red Planet that has captured human imagination for millennia! With its rusty iron oxide surface and towering Olympus Mons volcano, Mars is the ultimate frontier waiting to be explored. The future home of humanity?",ar:"تحيات من المريخ 🔴، الكوكب الأحمر الذي أسّر خيال البشرية لآلاف السنين! مع سطحه المغطى بأكسيد الحديد الصدئ وبركان أولمبس مونس الشاهق، المريخ هو الحدود المطلقة في انتظار الاستكشاف. الموطن المستقبلي للبشرية؟"},story:{en:"Mars is a world of superlatives! It hosts the Solar System's biggest volcano (Olympus Mons) and deepest canyon (Valles Marineris). Its two tiny moons, Phobos and Deimos, are like captured asteroids racing around their rust-colored master.",ar:"المريخ عالم من القمم! يضم أكبر بركان في النظام الشمسي (أولمبس مونس) وأعمق وادٍ (فاليس مارينيريس). قمراه الصغيران، فوبوس وديموس، ككويكبات مقبوض عليها تتسابقان حول سيدها ذي اللون الصدئ."},massExplanation:{en:"At 6.42 × 10²³ kg, Mars is only about 10% as massive as Earth. It's the lightweight of the rocky planets—but what it lacks in heft, it makes up for in sheer magnificence!",ar:"بكتلة 6.42 × 10²³ كغ، المريخ يمثل فقط 10% من كتلة الأرض. إنه الخفيف بين الكواكب الصخرية—لكن ما ينقصه في الوزن، يعوضه في الروعة المطلقة!"}},jupiter:{prologue:{en:"Marvel at Jupiter 🟠, the undisputed king of planets! This gas giant is so massive that all other planets could fit inside it with room to spare. With its mesmerizing bands of clouds and the Great Red Spot storm raging for centuries, Jupiter is a planet of superlatives!",ar:"تأمل في المشتري 🟠، ملك الكواكب بلا منازع! هذا العملاق الغازي ضخم لدرجة أن جميع الكواكب الأخرى يمكن أن تتسع بداخله مع مساحة فارغة. مع نطاقاته السحابية الرائعة والبقعة الحمراء العظيمة التي تشتعل منذ قرون، المشتري كوكب من القمم!"},story:{en:"Jupiter isn't just big—it's a planetary bodyguard! Its immense gravity shields Earth by flinging away dangerous comets and asteroids. Some scientists think Jupiter might have saved life on Earth countless times. Thanks, big guy!",ar:"المشتري ليس كبيراً فقط—إنه حارس كوكبي! جاذبيته الهائلة تحمي الأرض بإبعاد المذنبات والكويكبات الخطيرة. يعتقد بعض العلماء أن المشتري ربما أنقذ الحياة على الأرض مرات لا تحصى. شكراً يا عملاق!"},massExplanation:{en:"Tipping the scales at 1.90 × 10²⁷ kg, Jupiter is a beast! That's 318 Earth masses packed into one giant ball of gas. You could fit 1,300 Earths inside Jupiter's volume—now that's planetary overachievement!",ar:"بكتلة 1.90 × 10²⁷ كغ، المشتري وحش! هذا يعادل 318 كتلة أرض مضغوطة في كرة غازية واحدة. يمكن أن تتسع 1300 أرض داخل حجم المشتري—هذا إنجاز كوكبي فاق التوقعات!"}},saturn:{prologue:{en:"Be enchanted by Saturn 🪐, the jewel of the Solar System! Adorned with magnificent icy rings that stretch nearly 300,000 kilometers, this gas giant floats like a delicate ornament in space. Despite its enormous size, Saturn is light enough to float in a bathtub—if you could find one big enough!",ar:"انبهر بزحل 🪐، جوهرة النظام الشمسي! مزينة بحلقات جليدية رائعة تمتد لما يقرب من 300,000 كيلومتر، يطفو هذا العملاق الغازي كزخرفة رقيقة في الفضاء. بالرغم من حجمه الهائل، زحل خفيف بما يكفي ليطفو في حوض استحمام—إذا وجدت واحداً كبيراً بما يكفي!"},story:{en:"Saturn's rings aren't solid—they're made of billions of ice chunks, some as small as grains of sand, others as big as mountains! Each ring particle is on its own orbit, dancing around Saturn in a cosmic ballet that has lasted billions of years.",ar:"حلقات زحل ليست صلبة—إنها مصنوعة من مليارات قطع الجليد، بعضها صغير كحبات الرمل، وبعضها كبير كالجبال! كل جزء في الحلقات في مداره الخاص، يرقص حول زحل في باليه كوني استمر مليارات السنين."},massExplanation:{en:"With 5.68 × 10²⁶ kg, Saturn is about 95 times Earth's mass. But here's the kicker—it's so low-density that if you had a bathtub 75,000 kilometers across, Saturn would bob around like a rubber duck!",ar:"بكتلة 5.68 × 10²⁶ كغ، زحل يمثل حوالي 95 كتلة أرضية. لكن المفاجأة—كثافته منخفضة جداً لدرجة أنه لو كان لديك حوض استحمام بعرض 75,000 كيلومتر، سيطفو زحل مثل بطة مطاطية!"}},uranus:{prologue:{en:"Discover Uranus 🔵, the ice giant that rolls through space on its side! With an axial tilt of 98 degrees, Uranus experiences 42-year summers and winters. This cyan-colored wonder is the coldest planet in the Solar System, with temperatures dropping to -224°C!",ar:"اكتشف أورانوس 🔵، العملاق الجليدي الذي يتدحرج في الفضاء على جانبه! مع ميل محوري 98 درجة، يعيش أورانوس صيفاً وشتاءً يستمر 42 سنة لكل منهما. هذا العجيب ذا اللون الأزرق الفيروزي هو أبرد كوكب في النظام الشمسي، مع درجات حرارة تنخفض إلى -224 درجة مئوية!"},story:{en:"Uranus is the ultimate oddball—it spins on its side! Scientists think a massive collision early in its history knocked it over. Imagine lying on the ground and rolling in a circle around a lamp—that's basically how Uranus orbits the Sun!",ar:"أورانوس هو الغريب بامتياز—يدور على جانبه! يعتقد العلماء أن تصادماً هائلاً في بداية تاريخه أطاح به. تخيل نفسك مستلقياً على الأرض وتتدحرج في دائرة حول مصباح—هذا بشكل أساسي كيف يدور أورانوس حول الشمس!"},massExplanation:{en:"At 8.68 × 10²⁵ kg, Uranus is about 14.5 Earth masses. It's the lightest of the gas and ice giants, but don't let that fool you—it can still hold onto 27 moons with that gravity!",ar:"بكتلة 8.68 × 10²⁵ كغ، أورانوس يعادل حوالي 14.5 كتلة أرضية. إنه الأخف بين العمالقة الغازية والجليدية، لكن لا تدع ذلك يخدعك—يمكنه الاحتفاظ بـ 27 قمراً بهذه الجاذبية!"}},neptune:{prologue:{en:"Journey to Neptune 🔵, the windiest world in the Solar System! This deep blue ice giant sits at the frigid edge of our planetary neighborhood, where winds scream at 2,100 km/h—faster than the speed of sound on Earth! It's so far that sunlight takes over 4 hours to reach it.",ar:"رحلة إلى نبتون 🔵، أعاصر عالم في النظام الشمسي! هذا العملاق الجليدي الأزرق العميق يجلس على الحافة المتجمدة لحيّنا الكوكبي، حيث الرياح تصرخ بسرعة 2100 كم/س—أسرع من سرعة الصوت على الأرض! إنه بعيد جداً لدرجة أن ضوء الشمس يستغرق أكثر من 4 ساعات ليصل إليه."},story:{en:"Neptune was the first planet found by math before it was seen! Astronomers noticed Uranus wobbling, calculated where an unseen planet must be, and pointed their telescopes—there it was! Sometimes the pen (and calculator) really is mightier than the sword.",ar:"نبتون أول كوكب تم العثور عليه بالرياضيات قبل رؤيته! لاحظ الفلكيون اهتزاز أورانوس، وحسبوا أين يجب أن يكون كوكب غير مرئي، ووجهوا تلسكوباتهم—وهناك كان! أحياناً القلم (والآلة الحاسبة) أقوى حقاً من السيف."},massExplanation:{en:"At 1.02 × 10²⁶ kg, Neptune is just a bit heavier than Uranus despite being smaller in size. Talk about packing a punch—this ice giant has some serious density hiding beneath those blue clouds!",ar:"بكتلة 1.02 × 10²⁶ كغ، نبتون أثقل قليلاً من أورانوس بالرغم من كونه أصغر حجماً. تحدث عن قوة مدمرة—هذا العملاق الجليدي يخفي بعض الكثافة الجادة تحت تلك الغيوم الزرقاء!"}}},Jb=[{id:"easy",name:"Beginner",nameAr:" beginners",ageRange:"Grade 3-6",ageRangeAr:"3-6",difficulty:"easy",questions:[{id:"q1-easy",question:"What is the largest planet in our solar system?",questionAr:"ما هو أكبر كوكب في نظامنا الشمسي؟",options:["Earth","Mars","Jupiter","Saturn"],optionsAr:["الأرض","المريخ","المشتري","زحل"],correctAnswer:2,explanation:"Jupiter is the largest planet in our solar system!",explanationAr:"المشتري هو أكبر كوكب في نظامنا الشمسي!",difficulty:"easy"},{id:"q2-easy",question:'Which planet is known as the "Red Planet"?',questionAr:'أي كوكب يُعرف باسم "الكوكب الأحمر"؟',options:["Venus","Mars","Jupiter","Mercury"],optionsAr:["الزهرة","المريخ","المشتري","عطارد"],correctAnswer:1,explanation:'Mars is called the "Red Planet" because of its red color.',explanationAr:'يُسمى المريخ "الكوكب الأحمر" بسبب لونه الأحمر.',difficulty:"easy"},{id:"q3-easy",question:"What is at the center of our solar system?",questionAr:"ماذا يوجد في مركز نظامنا الشمسي؟",options:["Earth","Moon","Sun","Mars"],optionsAr:["الأرض","القمر","الشمس","المريخ"],correctAnswer:2,explanation:"The Sun is at the center of our solar system.",explanationAr:"الشمس في مركز نظامنا الشمسي.",difficulty:"easy"},{id:"q4-easy",question:"Which planet is closest to the Sun?",questionAr:"أي كوكب هو الأقرب إلى الشمس؟",options:["Mercury","Venus","Earth","Mars"],optionsAr:["عطارد","الزهرة","الأرض","المريخ"],correctAnswer:0,explanation:"Mercury is the closest planet to the Sun.",explanationAr:"عطارد هو الكوكب الأقرب إلى الشمس.",difficulty:"easy"},{id:"q5-easy",question:"What planet do we live on?",questionAr:"على أي كوكب نعيش؟",options:["Mars","Earth","Venus","Jupiter"],optionsAr:["المريخ","الأرض","الزهرة","المشتري"],correctAnswer:1,explanation:"We live on planet Earth!",explanationAr:"نحن نعيش على كوكب الأرض!",difficulty:"easy"},{id:"q6-easy",question:"Which planet has beautiful rings?",questionAr:"أي كوكب يمتلك حلقات جميلة؟",options:["Jupiter","Saturn","Mars","Earth"],optionsAr:["المشتري","زحل","المريخ","الأرض"],correctAnswer:1,explanation:"Saturn is famous for its beautiful ring system.",explanationAr:"زحل مشهور بنظام حلقاته الجميل.",difficulty:"easy"},{id:"q7-easy",question:"How many moons does Earth have?",questionAr:"كم قمراً تمتلكه الأرض؟",options:["0","1","2","3"],optionsAr:["0","1","2","3"],correctAnswer:1,explanation:"Earth has one moon called the Moon.",explanationAr:"الأرض تمتلك قمراً واحداً يسمى القمر.",difficulty:"easy"}]},{id:"medium",name:"Intermediate",nameAr:"intermediate",ageRange:"Grade 6-12",ageRangeAr:"6-12",difficulty:"medium",questions:[{id:"q1-medium",question:"Which planet has the longest day?",questionAr:"أي كوكب يمتلك أطول يوم؟",options:["Mercury","Venus","Earth","Mars"],optionsAr:["عطارد","الزهرة","الأرض","المريخ"],correctAnswer:1,explanation:"Venus has the longest day, taking 243 Earth days to rotate once.",explanationAr:"الزهرة تمتلك أطول يوم، حيث تستغرق 243 يوماً أرضياً للدوران مرة واحدة.",difficulty:"medium"},{id:"q2-medium",question:"What gas makes up most of Jupiter's atmosphere?",questionAr:"ما الغاز الذي يشكل معظم غلاف المشتري الجوي؟",options:["Oxygen","Nitrogen","Hydrogen","Carbon Dioxide"],optionsAr:["الأكسجين","النيتروجين","الهيدروجين","ثاني أكسيد الكربون"],correctAnswer:2,explanation:"Jupiter is mostly made of hydrogen gas.",explanationAr:"المشتري يتكون في الغالب من غاز الهيدروجين.",difficulty:"medium"},{id:"q3-medium",question:"Which planet rotates on its side?",questionAr:"أي كوكب يدور على جانبه؟",options:["Neptune","Saturn","Uranus","Mars"],optionsAr:["نبتون","زحل","أورانوس","المريخ"],correctAnswer:2,explanation:"Uranus rotates on its side with a 98-degree tilt.",explanationAr:"أورانوس يدور على جانبه مع ميل 98 درجة.",difficulty:"medium"},{id:"q4-medium",question:"What is the hottest planet in our solar system?",questionAr:"ما هو أكثر الكواكب سخونة في نظامنا الشمسي؟",options:["Mercury","Venus","Earth","Mars"],optionsAr:["عطارد","الزهرة","الأرض","المريخ"],correctAnswer:1,explanation:"Venus is the hottest planet due to its thick atmosphere.",explanationAr:"الزهرة هو أكثر الكواكب سخونة بسبب غلافه الجوي السميك.",difficulty:"medium"},{id:"q5-medium",question:"Which planet has the most moons?",questionAr:"أي كوكب يمتلك أكبر عدد من الأقمار؟",options:["Earth","Mars","Jupiter","Saturn"],optionsAr:["الأرض","المريخ","المشتري","زحل"],correctAnswer:3,explanation:"Saturn has over 80 known moons, more than any other planet.",explanationAr:"زحل يمتلك أكثر من 80 قمراً معروفاً، أكثر من أي كوكب آخر.",difficulty:"medium"},{id:"q6-medium",question:"What causes seasons on Earth?",questionAr:"ماذا يسبب الفصول على الأرض؟",options:["Distance from Sun","Earth's tilt","Moon phases","Solar flares"],optionsAr:["المسافة من الشمس","ميل الأرض","أطوار القمر","الانفجارات الشمسية"],correctAnswer:1,explanation:"Earth's 23.5-degree tilt causes the seasons.",explanationAr:"ميل الأرض بمقدار 23.5 درجة يسبب الفصول.",difficulty:"medium"},{id:"q7-medium",question:'Which planet is known as the "Blue Planet"?',questionAr:'أي كوكب يُعرف باسم "الكوكب الأزرق"؟',options:["Earth","Neptune","Uranus","Venus"],optionsAr:["الأرض","نبتون","أورانوس","الزهرة"],correctAnswer:0,explanation:'Earth is called the "Blue Planet" because of its oceans.',explanationAr:'تُسمى الأرض "الكوكب الأزرق" بسبب محيطاتها.',difficulty:"medium"}]},{id:"hard",name:"Advanced",nameAr:"advanced",ageRange:"Grade 12+",ageRangeAr:"12+",difficulty:"hard",questions:[{id:"q1-hard",question:"What is the escape velocity from Earth's surface?",questionAr:"ما هي سرعة الهروب من سطح الأرض؟",options:["7.9 km/s","11.2 km/s","15.3 km/s","20.1 km/s"],optionsAr:["7.9 كم/ث","11.2 كم/ث","15.3 كم/ث","20.1 كم/ث"],correctAnswer:1,explanation:"Earth's escape velocity is 11.2 km/s from the surface.",explanationAr:"سرعة الهروب من الأرض هي 11.2 كم/ث من السطح.",difficulty:"hard"},{id:"q2-hard",question:"Which planet has the strongest magnetic field?",questionAr:"أي كوكب يمتلك أقوى مجال مغناطيسي؟",options:["Earth","Jupiter","Saturn","Neptune"],optionsAr:["الأرض","المشتري","زحل","نبتون"],correctAnswer:1,explanation:"Jupiter has the strongest magnetic field in our solar system.",explanationAr:"المشتري يمتلك أقوى مجال مغناطيسي في نظامنا الشمسي.",difficulty:"hard"},{id:"q3-hard",question:"What is the Great Red Spot on Jupiter?",questionAr:"ما هي البقعة الحمراء العظيمة على المشتري؟",options:["A volcano","A storm","A mountain","A crater"],optionsAr:["بركان","عاصفة","جبل","فوهة"],correctAnswer:1,explanation:"The Great Red Spot is a giant storm that has raged for centuries.",explanationAr:"البقعة الحمراء العظيمة هي عاصفة عملاقة استمرت لقرون.",difficulty:"hard"},{id:"q4-hard",question:"Which planet has the shortest year?",questionAr:"أي كوكب يمتلك أقصر سنة؟",options:["Mercury","Venus","Earth","Mars"],optionsAr:["عطارد","الزهرة","الأرض","المريخ"],correctAnswer:0,explanation:"Mercury has the shortest year, only 88 Earth days.",explanationAr:"عطارد يمتلك أقصر سنة، فقط 88 يوماً أرضياً.",difficulty:"hard"},{id:"q5-hard",question:"What causes auroras on Earth?",questionAr:"ماذا يسبب الشفق القطبي على الأرض؟",options:["Moonlight","Solar wind","Lightning","Reflection"],optionsAr:["ضوء القمر","الرياح الشمسية","البرق","الانعكاس"],correctAnswer:1,explanation:"Solar wind particles interacting with Earth's atmosphere cause auroras.",explanationAr:"جسيمات الرياح الشمسية التي تتفاعل مع غلاف الأرض الجوي تسبب الشفق القطبي.",difficulty:"hard"},{id:"q6-hard",question:"Which planet rotates backwards compared to most planets?",questionAr:"أي كوكب يدور للخلف مقارنة بمعظم الكواكب؟",options:["Mercury","Venus","Earth","Mars"],optionsAr:["عطارد","الزهرة","الأرض","المريخ"],correctAnswer:1,explanation:"Venus rotates backwards (retrograde rotation).",explanationAr:"الزهرة يدور للخلف (الدوران التراجعي).",difficulty:"hard"},{id:"q7-hard",question:"What is the approximate temperature of the Sun's surface?",questionAr:"ما هي درجة حرارة سطح الشمس تقريباً؟",options:["2,000°C","3,500°C","5,500°C","7,000°C"],optionsAr:["2,000 درجة مئوية","3,500 درجة مئوية","5,500 درجة مئوية","7,000 درجة مئوية"],correctAnswer:2,explanation:"The Sun's surface temperature is about 5,500°C.",explanationAr:"درجة حرارة سطح الشمس حوالي 5,500 درجة مئوية.",difficulty:"hard"}]}],Wv=({onStageSelect:t,onClose:e})=>{const{t:n,language:i}=Qn();return S.jsx("div",{className:"fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm",children:S.jsxs("div",{className:"relative liquid-glass liquid-glass-glow p-8 rounded-3xl max-w-2xl w-full mx-4",children:[S.jsx("button",{onClick:e,className:`absolute top-4 ${i==="ar"?"left-4":"right-4"} p-2 liquid-glass-button`,children:S.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:S.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),S.jsxs("div",{className:"text-center mb-8",children:[S.jsx("div",{className:"text-5xl mb-4",children:"🧠"}),S.jsx("h2",{className:"text-3xl font-bold text-white mb-2",children:n("testYourKnowledge")}),S.jsx("p",{className:"text-lg text-gray-200 mb-6",children:n("chooseDifficulty")})]}),S.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:Jb.map(r=>S.jsxs("button",{onClick:()=>t(r),className:"p-6 liquid-glass-button rounded-2xl text-left transition-all duration-300 hover:scale-105 hover:shadow-xl",children:[S.jsx("div",{className:"text-4xl mb-3",children:r.id==="easy"?"🌱":r.id==="medium"?"🌿":"🌳"}),S.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:n(r.id==="easy"?"beginner":r.id==="medium"?"intermediate":"advanced")}),S.jsx("p",{className:"text-sm text-gray-300 mb-1",children:i==="ar"?r.ageRangeAr:r.ageRange}),S.jsxs("p",{className:"text-xs text-gray-400",children:["7 ",n("questions")]}),S.jsx("div",{className:"mt-3 flex items-center gap-1",children:[...Array(3)].map((s,a)=>S.jsx("div",{className:`w-2 h-2 rounded-full ${a<(r.difficulty==="easy"?1:r.difficulty==="medium"?2:3)?"bg-yellow-400":"bg-gray-600"}`},a))})]},r.id))}),S.jsx("div",{className:"mt-8 text-center",children:S.jsx("button",{onClick:e,className:"px-6 py-2 liquid-glass-button text-gray-300 hover:text-white transition-colors",children:n("maybeLater")})})]})})},jv=({stage:t,onComplete:e,onClose:n})=>{const{language:i}=Qn(),[r,s]=Me.useState(0),[a,o]=Me.useState(null),[l,c]=Me.useState(!1),[f,d]=Me.useState([]),[h,m]=Me.useState(!1),_=t.questions[r],x=(r+1)/t.questions.length*100;Me.useEffect(()=>{o(null),c(!1)},[r]);const p=M=>{l||o(M)},u=()=>{if(a===null)return;const M=[...f,a];d(M),c(!0),r===t.questions.length-1&&setTimeout(()=>{const P=M.filter((A,T)=>A===t.questions[T].correctAnswer).length;e(P,t.questions.length),m(!0)},3e3)},v=()=>{r<t.questions.length-1&&s(r+1)},g=()=>{const M=[...f,-1];if(d(M),r===t.questions.length-1){const P=M.filter((A,T)=>A===t.questions[T].correctAnswer).length;e(P,t.questions.length),m(!0)}else s(r+1)};return h?null:S.jsx("div",{className:"fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm",children:S.jsxs("div",{className:"relative liquid-glass liquid-glass-glow p-8 rounded-3xl max-w-2xl w-full mx-4",children:[S.jsx("button",{onClick:n,className:`absolute top-4 ${i==="ar"?"left-4":"right-4"} p-2 liquid-glass-button`,children:S.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:S.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),S.jsxs("div",{className:"mb-6",children:[S.jsxs("div",{className:"flex justify-between items-center mb-2",children:[S.jsxs("span",{className:"text-sm text-gray-300",children:[i==="ar"?"السؤال":"Question"," ",r+1," ",i==="ar"?"من":"of"," ",t.questions.length]}),S.jsxs("span",{className:"text-sm text-gray-300",children:[Math.round(x),"% ",i==="ar"?"مكتمل":"complete"]})]}),S.jsx("div",{className:"w-full bg-gray-700 rounded-full h-2",children:S.jsx("div",{className:"bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500",style:{width:`${x}%`}})})]}),S.jsxs("div",{className:"mb-6",children:[S.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[S.jsx("div",{className:"text-3xl",children:t.id==="easy"?"🌱":t.id==="medium"?"🌿":"🌳"}),S.jsx("h2",{className:"text-2xl font-bold text-white",children:i==="ar"?_.questionAr:_.question})]}),S.jsx("div",{className:"space-y-3",children:_.options.map((M,P)=>{const A=i==="ar"?_.optionsAr[P]:M,T=a===P,N=P===_.correctAnswer;return S.jsx("button",{onClick:()=>p(P),disabled:l,className:`w-full p-4 rounded-xl text-left transition-all duration-300 ${l?N?"bg-green-500/20 border-2 border-green-500 text-green-300":T&&!N?"bg-red-500/20 border-2 border-red-500 text-red-300":"bg-gray-700/30 border-2 border-gray-600 text-gray-400":T?"bg-blue-500/20 border-2 border-blue-500 text-blue-300":"bg-gray-700/30 border-2 border-gray-600 text-gray-300 hover:bg-gray-700/50 hover:border-gray-500"}`,children:S.jsxs("div",{className:"flex items-center gap-3",children:[S.jsx("div",{className:`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold ${l?N?"border-green-500 text-green-300":T&&!N?"border-red-500 text-red-300":"border-gray-600 text-gray-500":T?"border-blue-500 text-blue-300":"border-gray-600 text-gray-400"}`,children:String.fromCharCode(65+P)}),S.jsx("span",{className:"text-lg",children:A}),l&&N&&S.jsx("span",{className:"ml-auto text-green-400",children:"✓"}),l&&T&&!N&&S.jsx("span",{className:"ml-auto text-red-400",children:"✗"})]})},P)})})]}),l&&(_.explanation||_.explanationAr)&&S.jsx("div",{className:"mb-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl",children:S.jsxs("p",{className:"text-blue-300 text-sm",children:[S.jsx("span",{className:"font-bold",children:i==="ar"?"الشرح":"Explanation"})," ",i==="ar"?_.explanationAr:_.explanation]})}),S.jsxs("div",{className:"flex justify-between items-center",children:[S.jsx("button",{onClick:g,disabled:l,className:"px-4 py-2 liquid-glass-button text-gray-400 hover:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed",children:i==="ar"?"تخطي":"Skip"}),l?r<t.questions.length-1&&S.jsx("button",{onClick:v,className:"px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl text-white font-bold hover:from-green-600 hover:to-emerald-600 transition-all duration-300",children:i==="ar"?"السؤال التالي":"Next Question"}):S.jsx("button",{onClick:u,disabled:a===null,className:"px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:from-blue-600 hover:to-purple-600 transition-all duration-300",children:i==="ar"?"إدخال الإجابة":"Submit Answer"})]})]})})},Xv=({stage:t,score:e,totalQuestions:n,onClose:i,onRetry:r})=>{const{language:s}=Qn(),a=Math.round(e/n*100),l=a>=80?{emoji:"🏆",title:s==="ar"?"ممتاز!":"Excellent!",message:s==="ar"?"أداء رائع! أنت تعرف نظامك الشمسي حقاً!":"Outstanding! You really know your solar system!",color:"from-yellow-500 to-orange-500"}:a>=60?{emoji:"👍",title:s==="ar"?"عمل جيد!":"Good Job!",message:s==="ar"?"عمل رائع! أنت تعرف الكثير عن نظامنا الشمسي!":"Great work! You know quite a bit about our solar system!",color:"from-blue-500 to-purple-500"}:a>=40?{emoji:"📚",title:s==="ar"?"واصل التعلم!":"Keep Learning!",message:s==="ar"?"استمر في التعلم! ستحسن مع الوقت!":"Keep learning! You'll get better with practice!",color:"from-green-500 to-teal-500"}:{emoji:"🚀",title:s==="ar"?"حاول مرة أخرى!":"Try Again!",message:s==="ar"?"حاول مرة أخرى! الممارسة تجعل الكمال!":"Give it another try! Practice makes perfect!",color:"from-purple-500 to-pink-500"};return S.jsx("div",{className:"fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm",children:S.jsxs("div",{className:"relative liquid-glass liquid-glass-glow p-8 rounded-3xl max-w-lg w-full mx-4 text-center",children:[a>=80&&S.jsxs("div",{className:"absolute inset-0 overflow-hidden rounded-3xl pointer-events-none",children:[[...Array(15)].map((c,f)=>S.jsx("div",{className:"absolute w-2 h-2 bg-yellow-300 rounded-full animate-pulse",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animationDelay:`${Math.random()*2}s`,opacity:Math.random()*.7+.3}},f)),[...Array(10)].map((c,f)=>S.jsx("div",{className:"absolute text-xl",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animationDelay:`${Math.random()*3}s`,transform:`rotate(${Math.random()*360}deg)`},children:"✨"},`star-${f}`))]}),S.jsxs("div",{className:"relative z-10",children:[S.jsx("div",{className:"text-6xl mb-4 animate-bounce",children:l.emoji}),S.jsxs("div",{className:"mb-6",children:[S.jsxs("div",{className:`text-4xl font-bold bg-gradient-to-r ${l.color} bg-clip-text text-transparent mb-2`,children:[e,"/",n]}),S.jsxs("div",{className:"text-2xl font-bold text-white mb-1",children:[a,"%"]})]}),S.jsx("h2",{className:`text-3xl font-bold text-white mb-3 bg-gradient-to-r ${l.color} bg-clip-text text-transparent`,children:l.title}),S.jsx("p",{className:"text-lg text-gray-200 mb-6",children:l.message}),S.jsxs("div",{className:"mb-6 p-3 bg-gray-700/30 rounded-xl",children:[S.jsxs("p",{className:"text-sm text-gray-300",children:[s==="ar"?"انتهى":"Finish",": ",s==="ar"?t.nameAr:t.name]}),S.jsx("p",{className:"text-xs text-gray-400",children:s==="ar"?t.ageRangeAr:t.ageRange})]}),S.jsxs("div",{className:"flex gap-3 justify-center",children:[S.jsx("button",{onClick:r,className:"px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white font-bold hover:from-blue-600 hover:to-purple-600 transition-all duration-300",children:s==="ar"?"إعادة المحاولة":"Try Again"}),S.jsx("button",{onClick:i,className:"px-6 py-3 liquid-glass-button text-white font-bold hover:bg-gray-700/50 transition-all duration-300",children:s==="ar"?"انتهى":"Finish"})]})]})]})})},Vm={sun:"☀️",mercury:"🔴",venus:"🟡",earth:"🌍",mars:"🔴",jupiter:"🟠",saturn:"🪐",uranus:"🔵",neptune:"🔵"};function eA(t,e=!1){return/largest|most|only|unique|volcan|strongest|shortest|longest|fastest|biggest|أكبر|أقوى|أسرع|أطول|أقصر|وحيد|فريد/i.test(t)?S.jsxs(S.Fragment,{children:[t," ",S.jsx("span",{className:"text-red-400 font-bold",children:e?"بوووووم!! 💥":"Booooooom!! 💥"})]}):t}const tA=({solarApi:t,isOpen:e=!1,onClose:n})=>{const{t:i,language:r}=Qn(),s=Oi,[a,o]=Me.useState(0),[l,c]=Me.useState(0),[f,d]=Me.useState(!1),[h,m]=Me.useState(!1),_=j=>{Hv(j,{lang:r==="ar"?"ar":"en"})};Me.useEffect(()=>{if(h&&e){const j=s[a],oe=rl[j.id]||rl.mercury;let Se="";const _e=r==="ar";if(l===0)Se=_e?oe.prologue.ar:oe.prologue.en;else if(l===1)Se=_e?`${oe.story.ar}. ${oe.massExplanation.ar}`:`${oe.story.en}. ${oe.massExplanation.en}`;else if(l===2){const xe=`${j.id}FunFact`,He=i(xe)||j.funFact;Se=_e?`هل تعلم؟ حقيقة مذهلة: ${He}`:`Did you know? Amazing Fact: ${He}`}_(Se)}else Ir()},[a,l,h,e,r]),Me.useEffect(()=>()=>{Ir()},[]),Me.useEffect(()=>{e||(Ir(),m(!1))},[e]);const x=()=>{m(j=>!j)},[p,u]=Me.useState(!1),[v,g]=Me.useState(null),[M,P]=Me.useState(!1),[A,T]=Me.useState(!1),[N,re]=Me.useState(0);Me.useEffect(()=>{e&&(o(0),c(0),d(!1),u(!1),g(null),P(!1),T(!1),re(0))},[e]);const y=Me.useMemo(()=>j=>{const oe=Vm[j.id]||"✨",Se=r==="ar",_e=rl[j.id]||rl.mercury,xe=`${j.id}FunFact`,He=i(xe)||j.funFact;return[{key:"prologue",title:Se?`${oe} ${i(j.id)||j.name}`:`${oe} ${j.name}`,content:S.jsx("div",{children:S.jsx("p",{className:"mb-2 text-sm leading-relaxed",children:Se?_e.prologue.ar:_e.prologue.en})}),highlight:!0},{key:"story",title:Se?"اكتشف المزيد":"Discover More",content:S.jsxs("div",{children:[S.jsx("p",{className:"mb-2 text-sm leading-relaxed",children:Se?_e.story.ar:_e.story.en}),S.jsx("p",{className:"text-xs text-gray-400 italic mt-2 border-t border-white/10 pt-2",children:Se?_e.massExplanation.ar:_e.massExplanation.en})]}),highlight:!0},{key:"fun",title:Se?"هل تعلم؟":"Did You Know?",content:S.jsxs("div",{children:[S.jsx("p",{className:"mb-1 text-pink-300 font-semibold",children:Se?"حقيقة مذهلة":"Amazing Fact"}),S.jsx("p",{className:"text-sm text-gray-200 leading-relaxed",children:eA(He,Se)})]}),highlight:!0}]},[i,r]);if(Me.useEffect(()=>{var _e;if(!e)return;const j=s[a];if(!j)return;const Se=y(j)[l];(_e=t==null?void 0:t.stopFollowPlanet)==null||_e.call(t),setTimeout(()=>{var xe;(xe=t==null?void 0:t.selectPlanet)==null||xe.call(t,j.id),Se&&Se.highlight&&setTimeout(()=>{var Ee;const He=Math.max(1.5,j.radius+.8);(Ee=t==null?void 0:t.followPlanet)==null||Ee.call(t,j.id,He,!0)},200)},100)},[e,a,l,t,y,s]),!e)return null;if(f)return S.jsx("div",{className:"fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm",children:S.jsxs("div",{className:"relative liquid-glass liquid-glass-glow p-8 rounded-3xl max-w-lg text-center",children:[S.jsxs("div",{className:"absolute inset-0 overflow-hidden rounded-3xl pointer-events-none",children:[[...Array(20)].map((j,oe)=>S.jsx("div",{className:"absolute w-2 h-2 bg-yellow-300 rounded-full animate-pulse",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animationDelay:`${Math.random()*2}s`,opacity:Math.random()*.7+.3}},oe)),[...Array(15)].map((j,oe)=>S.jsx("div",{className:"absolute text-2xl",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animationDelay:`${Math.random()*3}s`,transform:`rotate(${Math.random()*360}deg)`},children:"✨"},`star-${oe}`))]}),S.jsxs("div",{className:"relative z-10",children:[S.jsx("div",{className:"text-6xl mb-4",children:"🎉"}),S.jsx("h2",{className:"text-3xl font-bold text-white mb-4",children:r==="ar"?"مبروك يا صاحبي!":"Congratulations!"}),S.jsx("p",{className:"text-lg text-gray-200 mb-6",children:r==="ar"?"خلصت جولة النظام الشمسي أونلاين يا بطل!":"You have completed the Solar System Online Tour!"}),S.jsxs("div",{className:"flex gap-3 justify-center",children:[S.jsx("button",{onClick:D,className:"px-6 py-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl text-white font-bold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl",children:r==="ar"?"خذ اختبار":"Take Quiz"}),S.jsx("button",{onClick:H,className:"px-6 py-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl text-white font-bold text-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl",children:r==="ar"?"تمام":"Awesome"})]})]})]})});const C=s[a],Q=y(C),ee=a===s.length-1&&l===Q.length-1;function I(){var j;l<Q.length-1?c(l+1):a<s.length-1?(o(a+1),c(0)):((j=t==null?void 0:t.stopFollowPlanet)==null||j.call(t),setTimeout(()=>{var oe;(oe=t==null?void 0:t.resetCamera)==null||oe.call(t),setTimeout(()=>{d(!0)},500)},200))}function J(){if(l>0)c(l-1);else if(a>0){o(a-1);const j=y(s[a-1]);c(j.length-1)}}function B(){var j;(j=t==null?void 0:t.stopFollowPlanet)==null||j.call(t),setTimeout(()=>{n==null||n()},200)}function H(){var j;(j=t==null?void 0:t.stopFollowPlanet)==null||j.call(t),setTimeout(()=>{var oe;(oe=t==null?void 0:t.updateSimulationSpeed)==null||oe.call(t,.5),setTimeout(()=>{n==null||n()},200)},100)}function D(){d(!1),u(!0)}function F(j){g(j),u(!1),P(!0)}function z(j,oe){re(j),P(!1),T(!0)}function K(){u(!1),P(!1),T(!1),g(null)}function ae(){v&&(T(!1),P(!0))}function Ae(){K(),H()}const W=r==="ar";return p?S.jsx(Wv,{onStageSelect:F,onClose:K}):M&&v?S.jsx(jv,{stage:v,onComplete:z,onClose:K}):A&&v?S.jsx(Xv,{stage:v,score:N,totalQuestions:v.questions.length,onClose:Ae,onRetry:ae}):S.jsxs("div",{className:"absolute left-5 top-16 w-96 liquid-glass liquid-glass-glow text-white p-4 rounded-2xl z-40",children:[S.jsxs("div",{className:"flex items-center justify-between mb-3",children:[S.jsxs("div",{className:"font-bold text-lg flex items-center gap-2",children:[S.jsx("span",{children:i("tourGuide")||"Tour Guide"}),S.jsx("button",{onClick:x,className:`p-1.5 rounded-full transition-all duration-300 flex items-center justify-center relative ${h?"bg-cyan-500/30 text-cyan-300 border border-cyan-400/50 scale-105 shadow-md shadow-cyan-500/20 pulse-glow":"bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white border border-white/10"}`,title:h?r==="ar"?"إيقاف السرد":"Stop Narration":r==="ar"?"تشغيل السرد الصوتي":"Play Narration",children:h?S.jsxs("div",{className:"flex items-center gap-1 px-0.5",children:[S.jsxs("div",{className:"flex items-end gap-0.5 h-3 w-4",children:[S.jsx("span",{className:"w-0.5 bg-cyan-300 rounded-full animate-wave-1 origin-bottom h-full"}),S.jsx("span",{className:"w-0.5 bg-cyan-300 rounded-full animate-wave-2 origin-bottom h-3/4"}),S.jsx("span",{className:"w-0.5 bg-cyan-300 rounded-full animate-wave-3 origin-bottom h-full"})]}),S.jsx(Gf,{size:12,className:"text-cyan-300"})]}):S.jsx(Wf,{size:14})})]}),S.jsx("div",{className:"flex items-center gap-2",children:S.jsx("button",{onClick:B,className:"text-sm px-3 py-1 liquid-glass-button",children:i("skip")||"Skip"})})]}),S.jsx("style",{children:`
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
      `}),S.jsxs("div",{className:"mb-4",children:[S.jsx("div",{className:"text-sm text-gray-400 mb-1",dir:W?"rtl":"ltr",children:i(C.id)||C.name}),S.jsxs("div",{className:"text-lg font-extrabold text-white mb-1 flex items-center gap-2",dir:W?"rtl":"ltr",children:[S.jsx("span",{className:"text-2xl",children:Vm[C.id]||"✨"}),S.jsx("span",{children:Q[l].title})]}),S.jsx("div",{className:"text-sm text-gray-200",dir:W?"rtl":"ltr",children:Q[l].content})]}),S.jsxs("div",{className:"flex justify-between items-center",children:[S.jsx("button",{onClick:J,disabled:a===0&&l===0,className:"px-3 py-1 liquid-glass-button disabled:opacity-40",children:"◀"}),S.jsx("div",{className:"flex items-center gap-2",children:S.jsx("button",{onClick:I,className:`px-4 py-2 liquid-glass-button shiny-border-hover text-white font-bold ${ee?"!bg-gradient-to-br !from-green-500/80 !to-emerald-600/80":""}`,children:ee?i("finishTour")||"Finish the Tour":i("next")||"Next"})})]})]})},nA=()=>{const{language:t}=Qn(),[e,n]=Me.useState(!1),[i,r]=Me.useState(.5),[s,a]=Me.useState("deep"),[o,l]=Me.useState(!1),c=Me.useRef(null),f=Me.useRef(null),d=Me.useRef(null),h=Me.useRef(null),m=Me.useRef([]),_=Me.useRef([]),x=Me.useRef(null),p={deep:{chord:[65.41,98,130.81,155.56,196],filterFreq:220,filterQ:3,type:"sawtooth",chimeScale:[523.25,587.33,622.25,698.46,783.99,932.33,1046.5]},nebula:{chord:[73.42,110,146.83,185,220],filterFreq:300,filterQ:5,type:"triangle",chimeScale:[587.33,659.25,739.99,880,987.77,1174.66]},solar:{chord:[58.27,87.31,116.54,138.59,174.61],filterFreq:180,filterQ:4,type:"sine",chimeScale:[466.16,523.25,554.37,622.25,698.46,830.61,932.33]}},u=async()=>{if(f.current){f.current.state==="suspended"&&await f.current.resume();return}try{const C=window.AudioContext||window.webkitAudioContext,Q=new C;f.current=Q,Q.state==="suspended"&&await Q.resume();const ee=Q.createGain();ee.gain.setValueAtTime(i*.15,Q.currentTime),ee.connect(Q.destination),d.current=ee;const I=Q.createBiquadFilter();I.type="lowpass",I.frequency.setValueAtTime(p[s].filterFreq,Q.currentTime),I.Q.setValueAtTime(p[s].filterQ,Q.currentTime),I.connect(ee),h.current=I;const J=p[s].chord,B=p[s].type;J.forEach((H,D)=>{const F=Q.createOscillator(),z=Q.createGain();F.type=B,F.frequency.setValueAtTime(H+(Math.random()*.8-.4),Q.currentTime);const K=.12+Math.random()*.08;z.gain.setValueAtTime(K,Q.currentTime),F.connect(z),z.connect(I),F.start(),m.current.push(F),_.current.push(z)}),v()}catch(C){console.error("Failed to initialize space audio synth:",C)}},v=()=>{x.current&&clearInterval(x.current),x.current=setInterval(()=>{const C=f.current,Q=h.current,ee=_.current;if(!C||C.state==="suspended"||!Q)return;const I=C.currentTime,J=p[s].filterFreq,B=J+Math.sin(I*.1)*(J*.4);Q.frequency.exponentialRampToValueAtTime(Math.max(80,B),I+3),ee.forEach(H=>{const D=.08+Math.random()*.12;H.gain.linearRampToValueAtTime(D,I+3.5)}),Math.random()<.45&&g()},3500)},g=()=>{const C=f.current,Q=d.current;if(!C||!Q)return;const ee=C.currentTime,I=p[s].chimeScale,J=I[Math.floor(Math.random()*I.length)],B=C.createOscillator(),H=C.createGain(),D=C.createDelay(),F=C.createGain();B.type="sine",B.frequency.setValueAtTime(J,ee),H.gain.setValueAtTime(.015,ee),H.gain.exponentialRampToValueAtTime(1e-4,ee+1.8),D.delayTime.setValueAtTime(.35,ee),F.gain.setValueAtTime(.4,ee),B.connect(H),H.connect(Q),H.connect(D),D.connect(F),F.connect(D),F.connect(Q),B.start(ee),B.stop(ee+2)},M=()=>{x.current&&(clearInterval(x.current),x.current=null);const C=f.current,Q=d.current;C&&Q&&(Q.gain.exponentialRampToValueAtTime(1e-4,C.currentTime+.4),setTimeout(()=>{m.current.forEach(ee=>{try{ee.stop()}catch{}}),m.current=[],_.current=[],f.current=null,d.current=null,h.current=null},500))},P=()=>{e?(M(),n(!1)):(u(),n(!0))},A=()=>{re(),e||(u(),n(!0))},T=C=>{const Q=parseFloat(C.target.value);r(Q),d.current&&f.current&&d.current.gain.linearRampToValueAtTime(Q*.15,f.current.currentTime+.1)},N=C=>{if(a(C),!e)return;const Q=f.current;if(Q){const ee=Q.currentTime,I=h.current;I&&(I.frequency.exponentialRampToValueAtTime(p[C].filterFreq,ee+1.5),I.Q.setValueAtTime(p[C].filterQ,ee+1.5));const J=p[C].chord,B=p[C].type;m.current.forEach((H,D)=>{J[D]&&(H.type=B,H.frequency.exponentialRampToValueAtTime(J[D]+(Math.random()*.8-.4),ee+1.5))})}},re=()=>{l(!0),c.current&&(clearTimeout(c.current),c.current=null)},y=()=>{c.current=setTimeout(()=>{l(!1)},3500)};return Me.useEffect(()=>()=>{M(),c.current&&clearTimeout(c.current)},[]),o?S.jsxs("div",{onMouseEnter:re,onMouseLeave:y,dir:t==="ar"?"rtl":"ltr",className:"liquid-glass text-white p-4 rounded-2xl flex flex-col gap-3 w-[320px] shadow-2xl border border-cyan-500/40 animate-scaleIn transition-all duration-300",children:[S.jsxs("div",{className:"flex items-center justify-between gap-2",children:[S.jsxs("div",{className:"flex items-center gap-2 min-w-0 flex-1",children:[S.jsx(vb,{className:`w-5 h-5 shrink-0 text-cyan-400 ${e?"animate-pulse":""}`}),S.jsxs("h3",{className:`font-bold text-sm flex flex-col min-w-0 flex-1 ${t==="ar"?"":"tracking-wider"}`,children:[S.jsx("span",{className:"truncate",children:t==="ar"?"الراديو الكوني الموسيقي":"COSMIC RADIO DJ"}),S.jsx("span",{className:`text-[10px] font-arabic truncate ${e?"text-cyan-300":"text-gray-500"}`,children:e?t==="ar"?"يعمل الآن":"NOW PLAYING":t==="ar"?"متوقف":"PAUSED"})]})]}),S.jsx("button",{onClick:P,className:`shrink-0 p-2.5 rounded-full transition-all duration-300 border ${e?"bg-red-500/20 border-red-500/40 text-red-300 shadow-md shadow-red-500/20":"bg-cyan-500/20 border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/30"}`,title:e?t==="ar"?"إيقاف الموسيقى":"Stop Music":t==="ar"?"تشغيل الموسيقى":"Start Music",children:e?S.jsxs("span",{className:"relative flex h-4 w-4 items-center justify-center",children:[S.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"}),S.jsx(xb,{size:11,className:"relative fill-current text-red-400 drop-shadow"})]}):S.jsx(pb,{size:16,className:"animate-bounce"})})]}),S.jsx("div",{className:"w-full h-[1px] bg-white/10"}),S.jsxs("div",{className:"flex flex-col gap-1.5",children:[S.jsx("span",{className:`text-[10px] text-gray-400 font-semibold truncate ${t==="ar"?"":"tracking-wider"}`,children:t==="ar"?"وضع الغلاف الموسيقي":"ATMOSPHERE MODE"}),S.jsxs("div",{className:"grid grid-cols-3 gap-1",children:[S.jsx("button",{onClick:()=>N("deep"),className:`text-[10px] leading-tight py-1.5 px-1 rounded-lg transition-all duration-200 border font-semibold text-center ${s==="deep"?"bg-cyan-500/30 border-cyan-400 text-cyan-300 shadow-md":"bg-white/5 border-white/5 text-gray-400 hover:bg-white/10 hover:text-white"}`,children:t==="ar"?"الفضاء العميق":"Deep Space"}),S.jsx("button",{onClick:()=>N("nebula"),className:`text-[10px] leading-tight py-1.5 px-1 rounded-lg transition-all duration-200 border font-semibold text-center ${s==="nebula"?"bg-purple-500/30 border-purple-400 text-purple-300 shadow-md":"bg-white/5 border-white/5 text-gray-400 hover:bg-white/10 hover:text-white"}`,children:t==="ar"?"حلم السديم":"Nebula Dream"}),S.jsx("button",{onClick:()=>N("solar"),className:`text-[10px] leading-tight py-1.5 px-1 rounded-lg transition-all duration-200 border font-semibold text-center ${s==="solar"?"bg-amber-500/30 border-amber-400 text-amber-300 shadow-md":"bg-white/5 border-white/5 text-gray-400 hover:bg-white/10 hover:text-white"}`,children:t==="ar"?"رياح الشمس":"Solar Wind"})]})]}),S.jsxs("div",{className:"flex items-center gap-3 mt-1",children:[i===0?S.jsx(Wf,{size:15,className:"text-gray-400"}):S.jsx(Gf,{size:15,className:"text-cyan-300"}),S.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:i,onChange:T,className:"w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-cyan-400 outline-none"}),S.jsxs("span",{className:"text-[10px] font-mono text-cyan-300",children:[Math.round(i*100),"%"]})]}),e&&S.jsxs("div",{className:"flex items-center justify-center gap-1.5 text-[9px] text-cyan-300/80 animate-pulse mt-0.5 text-center",children:[S.jsx(_b,{size:10,className:"animate-spin shrink-0 text-cyan-400"}),S.jsx("span",{className:"font-arabic",children:t==="ar"?"المُركّب الصوتي الحي يعمل الآن":"REAL-TIME DYNAMIC SYNTHESIZER ACTIVE"})]}),S.jsx("style",{children:`
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.92) translateY(5px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-scaleIn {
          animation: scaleIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `})]}):S.jsxs("button",{onMouseEnter:re,onClick:A,dir:t==="ar"?"rtl":"ltr",className:"liquid-glass text-white p-3 rounded-full flex items-center gap-2.5 shadow-lg border border-cyan-500/30 cursor-pointer animate-pulse-glow transition-all duration-300 hover:scale-110 active:scale-95",children:[S.jsxs("div",{className:"relative flex items-center justify-center",children:[S.jsx(hb,{className:`w-5 h-5 text-cyan-400 ${e?"animate-spin-slow":""}`}),e&&S.jsxs("span",{className:"absolute -top-1 -right-1 flex h-2.5 w-2.5",children:[S.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"}),S.jsx("span",{className:"relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"})]})]}),S.jsx("span",{className:"text-xs font-bold whitespace-nowrap px-1 select-none",children:t==="ar"?"الراديو الكوني":"COSMIC DJ"}),S.jsx("span",{className:`text-[9px] font-bold px-1.5 py-0.5 rounded-full select-none ${e?"bg-cyan-500/30 text-cyan-300":"bg-white/10 text-gray-400"}`,children:e?t==="ar"?"يعمل":"ON":t==="ar"?"متوقف":"OFF"}),S.jsx("style",{children:`
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
        `})]})};function iA(){const t=Me.useRef(null),{language:e,setLanguage:n,t:i}=Qn(),[r,s]=Me.useState(null),[a,o]=Me.useState(.5),[l,c]=Me.useState(!1),[f,d]=Me.useState({planetA:null,planetB:null}),[h,m]=Me.useState(!0),[_,x]=Me.useState(()=>!0),[p,u]=Me.useState(!1),[v,g]=Me.useState(!1),[M,P]=Me.useState(!1),[A,T]=Me.useState(1),[N,re]=Me.useState(null),[y,C]=Me.useState(!1),[Q,ee]=Me.useState(!1),[I,J]=Me.useState(!1),[B,H]=Me.useState(null),[D,F]=Me.useState(!1),[z,K]=Me.useState(!1),[ae,Ae]=Me.useState(0);Me.useEffect(()=>{var de,Ue,Ge;if(t.current){const Le=lb(t.current,Xe=>{if(Xe.id==="sun"){s({id:"sun",name:"Sun",radius:8.5,distanceFromSun:0,orbitSpeed:0,texture:"sun.jpg",description:"The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma and is by far the most important source of energy for life on Earth.",diameter:1391400,mass:"1.989 × 10^30 kg",dayLength:"25 days (equator)",yearLength:"—",avgTemp:"5,505°C (surface)",funFact:"The Sun contains 99.86% of the mass in the Solar System!",moons:[]});return}if(l){if(Xe.id==="sun")return;typeof Xe.name=="string"&&typeof Xe.radius=="number"&&typeof Xe.distanceFromSun=="number"&&d(L=>{var w,te;if(typeof Xe.name=="string"&&typeof Xe.radius=="number"&&typeof Xe.distanceFromSun=="number"){if(((w=L.planetA)==null?void 0:w.id)===Xe.id||((te=L.planetB)==null?void 0:te.id)===Xe.id)return L;if(!L.planetA)return{...L,planetA:Xe};if(!L.planetB&&L.planetA.id!==Xe.id)return{planetA:L.planetA,planetB:Xe}}return L})}else s(Xe)},{hideMoons:v,showLabels:M,planetScale:A,tFunc:i,currentLanguage:e});return re(Le),ee(!1),Le.updateSimulationSpeed(p?0:a),(de=Le.setMoonsVisible)==null||de.call(Le,!v),(Ue=Le.setLabelsVisible)==null||Ue.call(Le,M),(Ge=Le.setPlanetScale)==null||Ge.call(Le,A),setTimeout(()=>m(!1),2e3),()=>{Le.cleanupScene()}}},[l,v,M,A,p,a,i,e]),Me.useEffect(()=>{if(t.current){const de=window.solarSystem;de&&de.updateSimulationSpeed&&de.updateSimulationSpeed(p?0:a)}},[a,p]),Me.useEffect(()=>{if(!N)return;let de;function Ue(){N.isGalaxyVisible&&C(N.isGalaxyVisible()),de=requestAnimationFrame(Ue)}return Ue(),()=>{de&&cancelAnimationFrame(de)}},[N]);const W=de=>{o(de)},j=()=>{u(de=>!de)},oe=de=>{n(de),x(!1)},Se=()=>{c(de=>(de?d({planetA:null,planetB:null}):(d({planetA:null,planetB:null}),s(null)),!de))},_e=()=>{d({planetA:null,planetB:null})},xe=de=>{d(Ue=>({...Ue,planetA:de})),l||c(!0)},He=de=>{d(Ue=>({...Ue,planetB:de})),l||c(!0)},Ee=()=>{ee(!1),s(null),J(!0)},G=de=>{H(de),J(!1),F(!0)},vt=(de,Ue)=>{Ae(de),F(!1),K(!0)},Re=()=>{J(!1),F(!1),K(!1),H(null)},Ve=()=>{B&&(K(!1),F(!0))};return S.jsxs("div",{className:`relative w-full h-screen overflow-hidden bg-black ${e==="ar"?"arabic-text":"english-text"}`,dir:e==="ar"?"rtl":"ltr",children:[S.jsx(Zb,{isOpen:_,onLanguageSelect:oe}),h&&!_&&S.jsx("div",{className:"absolute inset-0 z-40 flex flex-col items-center justify-center bg-black/70 backdrop-blur-sm",children:S.jsxs("div",{className:"flex flex-col items-center gap-6",children:[S.jsx(yb,{className:"w-20 h-20 animate-spin text-yellow-400"}),S.jsxs("div",{className:"text-center",children:[S.jsx("h1",{className:"text-3xl font-bold text-white mb-2",children:e==="ar"?"جارٍ تحميل النظام الشمسي...":"Loading Solar System..."}),S.jsx("p",{className:"text-gray-300",children:e==="ar"?"جارٍ تهيئة الكون...":"Initializing the universe..."})]})]})}),S.jsx("div",{ref:t,className:"absolute inset-0 z-0 bg-black"}),S.jsx("div",{className:`absolute bottom-28 ${e==="ar"?"right-5":"left-5"} z-30`,children:S.jsx(nA,{})}),S.jsx("div",{className:"absolute bottom-5 left-0 right-0 z-10 flex justify-center pointer-events-none",children:S.jsxs("div",{className:"flex items-center gap-2 pointer-events-auto",children:[S.jsx("button",{className:"p-2 rounded-full liquid-glass-button transition-colors","aria-label":"Zoom Out",onClick:()=>{var de;return(de=N==null?void 0:N.zoomOut)==null?void 0:de.call(N)},type:"button",children:S.jsx(Mb,{size:20})}),S.jsx(Yb,{speed:a,onChange:W,paused:p,onPauseToggle:j,hideMoons:v,onHideMoonsChange:g,showLabels:M,onShowLabelsChange:P,planetScale:A,onPlanetScaleChange:T}),S.jsx("button",{className:"p-2 rounded-full liquid-glass-button transition-colors","aria-label":"Zoom In",onClick:()=>{var de;return(de=N==null?void 0:N.zoomIn)==null?void 0:de.call(N)},type:"button",children:S.jsx(Sb,{size:20})}),S.jsxs("button",{className:"px-3 py-2 rounded-full liquid-glass-button transition-colors flex items-center gap-1.5","aria-label":e==="ar"?"إعادة توسيط الكاميرا":"Re-center Camera",title:e==="ar"?"إعادة توسيط الكاميرا":"Re-center Camera",onClick:()=>{var de;return(de=N==null?void 0:N.resetCameraView)==null?void 0:de.call(N)},type:"button",children:[S.jsx(fb,{size:20}),S.jsx("span",{className:"text-xs font-semibold whitespace-nowrap",children:e==="ar"?"إعادة التوسيط":"Re-center"})]})]})}),r&&!l&&S.jsx($b,{planet:r,onClose:()=>s(null),solarApi:N,showComparison:!1,comparisonPlanets:f,onChooseAsA:xe,onChooseAsB:He}),l&&S.jsx(Kb,{planetA:f.planetA,planetB:f.planetB,onReset:_e,onClose:Se}),S.jsxs("div",{className:`absolute top-5 right-5 z-10 flex items-center gap-4 ${e==="ar"?"space-x-reverse":""}`,children:[S.jsx(Qb,{}),S.jsx("button",{className:`px-4 py-2 rounded-lg font-semibold text-sm liquid-glass-button ${l?"bg-blue-500/20 border-blue-500/30":""}`,onClick:Se,children:i("comparePlanets")})]}),S.jsxs("div",{className:"absolute top-5 left-5 z-10 flex flex-col gap-2",children:[S.jsx("button",{className:`px-4 py-2 rounded-lg font-semibold text-sm liquid-glass-button transition-all duration-200 ${Q?"bg-red-500/20 border-red-500/30":""}`,onClick:()=>{ee(de=>{const Ue=!de;return Ue&&s(null),Ue})},children:Q?i("stopTour")||"Stop Tour":i("startTour")||"Start Tour"}),S.jsx("button",{className:"px-4 py-2 rounded-lg font-semibold text-sm liquid-glass-button transition-all duration-200 bg-blue-500/20 border-blue-500/30",onClick:Ee,children:i("takeQuiz")||"Take Quiz"})]}),S.jsx(tA,{solarApi:N,isOpen:Q,onClose:()=>ee(!1)}),I&&S.jsx(Wv,{onStageSelect:G,onClose:Re}),D&&B&&S.jsx(jv,{stage:B,onComplete:vt,onClose:Re}),z&&B&&S.jsx(Xv,{stage:B,score:ae,totalQuestions:B.questions.length,onClose:Re,onRetry:Ve})]})}tv(document.getElementById("root")).render(S.jsx(Me.StrictMode,{children:S.jsx(wb,{children:S.jsx(iA,{})})}));
