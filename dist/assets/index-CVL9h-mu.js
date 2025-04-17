import{j as b,R as fm,a as mm,o as hm}from"./editor-Dk6_vM5R.js";import{r as en,d as dm,g as gm,R as ui}from"./vendor-WFcsCgN3.js";import{S as pm,F as Pt,B as nu,R as vm,M as To,I as eu,b as bm,c as ym,d as Sm,e as Em,f as xm}from"./ui-C7PlDk65.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerPolicy&&(r.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?r.credentials="include":l.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(l){if(l.ep)return;l.ep=!0;const r=t(l);fetch(l.href,r)}})();var Ao={exports:{}},fr={},wo={exports:{}},No={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(T,U){var z=T.length;T.push(U);n:for(;0<z;){var F=z-1>>>1,sn=T[F];if(0<l(sn,U))T[F]=U,T[z]=sn,z=F;else break n}}function t(T){return T.length===0?null:T[0]}function a(T){if(T.length===0)return null;var U=T[0],z=T.pop();if(z!==U){T[0]=z;n:for(var F=0,sn=T.length,al=sn>>>1;F<al;){var ll=2*(F+1)-1,Cr=T[ll],Ye=ll+1,rl=T[Ye];if(0>l(Cr,z))Ye<sn&&0>l(rl,Cr)?(T[F]=rl,T[Ye]=z,F=Ye):(T[F]=Cr,T[ll]=z,F=ll);else if(Ye<sn&&0>l(rl,z))T[F]=rl,T[Ye]=z,F=Ye;else break n}}return U}function l(T,U){var z=T.sortIndex-U.sortIndex;return z!==0?z:T.id-U.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var r=performance;n.unstable_now=function(){return r.now()}}else{var i=Date,s=i.now();n.unstable_now=function(){return i.now()-s}}var u=[],c=[],p=1,g=null,f=3,h=!1,E=!1,S=!1,N=!1,m=typeof setTimeout=="function"?setTimeout:null,o=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;function v(T){for(var U=t(c);U!==null;){if(U.callback===null)a(c);else if(U.startTime<=T)a(c),U.sortIndex=U.expirationTime,e(u,U);else break;U=t(c)}}function x(T){if(S=!1,v(T),!E)if(t(u)!==null)E=!0,C||(C=!0,kn());else{var U=t(c);U!==null&&Ft(x,U.startTime-T)}}var C=!1,A=-1,w=5,V=-1;function O(){return N?!0:!(n.unstable_now()-V<w)}function bn(){if(N=!1,C){var T=n.unstable_now();V=T;var U=!0;try{n:{E=!1,S&&(S=!1,o(A),A=-1),h=!0;var z=f;try{e:{for(v(T),g=t(u);g!==null&&!(g.expirationTime>T&&O());){var F=g.callback;if(typeof F=="function"){g.callback=null,f=g.priorityLevel;var sn=F(g.expirationTime<=T);if(T=n.unstable_now(),typeof sn=="function"){g.callback=sn,v(T),U=!0;break e}g===t(u)&&a(u),v(T)}else a(u);g=t(u)}if(g!==null)U=!0;else{var al=t(c);al!==null&&Ft(x,al.startTime-T),U=!1}}break n}finally{g=null,f=z,h=!1}U=void 0}}finally{U?kn():C=!1}}}var kn;if(typeof d=="function")kn=function(){d(bn)};else if(typeof MessageChannel<"u"){var mn=new MessageChannel,ut=mn.port2;mn.port1.onmessage=bn,kn=function(){ut.postMessage(null)}}else kn=function(){m(bn,0)};function Ft(T,U){A=m(function(){T(n.unstable_now())},U)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(T){T.callback=null},n.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<T?Math.floor(1e3/T):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_next=function(T){switch(f){case 1:case 2:case 3:var U=3;break;default:U=f}var z=f;f=U;try{return T()}finally{f=z}},n.unstable_requestPaint=function(){N=!0},n.unstable_runWithPriority=function(T,U){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var z=f;f=T;try{return U()}finally{f=z}},n.unstable_scheduleCallback=function(T,U,z){var F=n.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?F+z:F):z=F,T){case 1:var sn=-1;break;case 2:sn=250;break;case 5:sn=1073741823;break;case 4:sn=1e4;break;default:sn=5e3}return sn=z+sn,T={id:p++,callback:U,priorityLevel:T,startTime:z,expirationTime:sn,sortIndex:-1},z>F?(T.sortIndex=z,e(c,T),t(u)===null&&T===t(c)&&(S?(o(A),A=-1):S=!0,Ft(x,z-F))):(T.sortIndex=sn,e(u,T),E||h||(E=!0,C||(C=!0,kn()))),T},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(T){var U=f;return function(){var z=f;f=U;try{return T.apply(this,arguments)}finally{f=z}}}})(No);wo.exports=No;var Tm=wo.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rn=Tm,Co=en,Am=dm;function y(n){var e="https://react.dev/errors/"+n;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Mo(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function _a(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Uo(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function tu(n){if(_a(n)!==n)throw Error(y(188))}function wm(n){var e=n.alternate;if(!e){if(e=_a(n),e===null)throw Error(y(188));return e!==n?null:n}for(var t=n,a=e;;){var l=t.return;if(l===null)break;var r=l.alternate;if(r===null){if(a=l.return,a!==null){t=a;continue}break}if(l.child===r.child){for(r=l.child;r;){if(r===t)return tu(l),n;if(r===a)return tu(l),e;r=r.sibling}throw Error(y(188))}if(t.return!==a.return)t=l,a=r;else{for(var i=!1,s=l.child;s;){if(s===t){i=!0,t=l,a=r;break}if(s===a){i=!0,a=l,t=r;break}s=s.sibling}if(!i){for(s=r.child;s;){if(s===t){i=!0,t=r,a=l;break}if(s===a){i=!0,a=r,t=l;break}s=s.sibling}if(!i)throw Error(y(189))}}if(t.alternate!==a)throw Error(y(190))}if(t.tag!==3)throw Error(y(188));return t.stateNode.current===t?n:e}function Do(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n;for(n=n.child;n!==null;){if(e=Do(n),e!==null)return e;n=n.sibling}return null}var Q=Object.assign,Nm=Symbol.for("react.element"),il=Symbol.for("react.transitional.element"),sa=Symbol.for("react.portal"),dt=Symbol.for("react.fragment"),Oo=Symbol.for("react.strict_mode"),oi=Symbol.for("react.profiler"),Cm=Symbol.for("react.provider"),zo=Symbol.for("react.consumer"),re=Symbol.for("react.context"),ls=Symbol.for("react.forward_ref"),ci=Symbol.for("react.suspense"),fi=Symbol.for("react.suspense_list"),rs=Symbol.for("react.memo"),ye=Symbol.for("react.lazy"),mi=Symbol.for("react.activity"),Mm=Symbol.for("react.memo_cache_sentinel"),au=Symbol.iterator;function $t(n){return n===null||typeof n!="object"?null:(n=au&&n[au]||n["@@iterator"],typeof n=="function"?n:null)}var Um=Symbol.for("react.client.reference");function hi(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===Um?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case dt:return"Fragment";case oi:return"Profiler";case Oo:return"StrictMode";case ci:return"Suspense";case fi:return"SuspenseList";case mi:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case sa:return"Portal";case re:return(n.displayName||"Context")+".Provider";case zo:return(n._context.displayName||"Context")+".Consumer";case ls:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case rs:return e=n.displayName||null,e!==null?e:hi(n.type)||"Memo";case ye:e=n._payload,n=n._init;try{return hi(n(e))}catch{}}return null}var ua=Array.isArray,M=Co.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=Am.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ke={pending:!1,data:null,method:null,action:null},di=[],gt=-1;function $n(n){return{current:n}}function fn(n){0>gt||(n.current=di[gt],di[gt]=null,gt--)}function K(n,e){gt++,di[gt]=n.current,n.current=e}var Wn=$n(null),Ca=$n(null),Ue=$n(null),Bl=$n(null);function Rl(n,e){switch(K(Ue,e),K(Ca,n),K(Wn,null),e.nodeType){case 9:case 11:n=(n=e.documentElement)&&(n=n.namespaceURI)?uo(n):0;break;default:if(n=e.tagName,e=e.namespaceURI)e=uo(e),n=Wf(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}fn(Wn),K(Wn,n)}function Bt(){fn(Wn),fn(Ca),fn(Ue)}function gi(n){n.memoizedState!==null&&K(Bl,n);var e=Wn.current,t=Wf(e,n.type);e!==t&&(K(Ca,n),K(Wn,t))}function ql(n){Ca.current===n&&(fn(Wn),fn(Ca)),Bl.current===n&&(fn(Bl),Ha._currentValue=Ke)}var pi=Object.prototype.hasOwnProperty,is=rn.unstable_scheduleCallback,Mr=rn.unstable_cancelCallback,Dm=rn.unstable_shouldYield,Om=rn.unstable_requestPaint,Fn=rn.unstable_now,zm=rn.unstable_getCurrentPriorityLevel,jo=rn.unstable_ImmediatePriority,Bo=rn.unstable_UserBlockingPriority,Hl=rn.unstable_NormalPriority,jm=rn.unstable_LowPriority,Ro=rn.unstable_IdlePriority,Bm=rn.log,Rm=rn.unstable_setDisableYieldValue,Ya=null,Un=null;function we(n){if(typeof Bm=="function"&&Rm(n),Un&&typeof Un.setStrictMode=="function")try{Un.setStrictMode(Ya,n)}catch{}}var Dn=Math.clz32?Math.clz32:Xm,qm=Math.log,Hm=Math.LN2;function Xm(n){return n>>>=0,n===0?32:31-(qm(n)/Hm|0)|0}var sl=256,ul=4194304;function Qe(n){var e=n&42;if(e!==0)return e;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function mr(n,e,t){var a=n.pendingLanes;if(a===0)return 0;var l=0,r=n.suspendedLanes,i=n.pingedLanes;n=n.warmLanes;var s=a&134217727;return s!==0?(a=s&~r,a!==0?l=Qe(a):(i&=s,i!==0?l=Qe(i):t||(t=s&~n,t!==0&&(l=Qe(t))))):(s=a&~r,s!==0?l=Qe(s):i!==0?l=Qe(i):t||(t=a&~n,t!==0&&(l=Qe(t)))),l===0?0:e!==0&&e!==l&&!(e&r)&&(r=l&-l,t=e&-e,r>=t||r===32&&(t&4194048)!==0)?e:l}function ka(n,e){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&e)===0}function Lm(n,e){switch(n){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qo(){var n=sl;return sl<<=1,!(sl&4194048)&&(sl=256),n}function Ho(){var n=ul;return ul<<=1,!(ul&62914560)&&(ul=4194304),n}function Ur(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Qa(n,e){n.pendingLanes|=e,e!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function Gm(n,e,t,a,l,r){var i=n.pendingLanes;n.pendingLanes=t,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=t,n.entangledLanes&=t,n.errorRecoveryDisabledLanes&=t,n.shellSuspendCounter=0;var s=n.entanglements,u=n.expirationTimes,c=n.hiddenUpdates;for(t=i&~t;0<t;){var p=31-Dn(t),g=1<<p;s[p]=0,u[p]=-1;var f=c[p];if(f!==null)for(c[p]=null,p=0;p<f.length;p++){var h=f[p];h!==null&&(h.lane&=-536870913)}t&=~g}a!==0&&Xo(n,a,0),r!==0&&l===0&&n.tag!==0&&(n.suspendedLanes|=r&~(i&~e))}function Xo(n,e,t){n.pendingLanes|=e,n.suspendedLanes&=~e;var a=31-Dn(e);n.entangledLanes|=e,n.entanglements[a]=n.entanglements[a]|1073741824|t&4194090}function Lo(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var a=31-Dn(t),l=1<<a;l&e|n[a]&e&&(n[a]|=e),t&=~l}}function ss(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function us(n){return n&=-n,2<n?8<n?n&134217727?32:268435456:8:2}function Go(){var n=H.p;return n!==0?n:(n=window.event,n===void 0?32:im(n.type))}function _m(n,e){var t=H.p;try{return H.p=n,e()}finally{H.p=t}}var Ge=Math.random().toString(36).slice(2),pn="__reactFiber$"+Ge,Tn="__reactProps$"+Ge,Vt="__reactContainer$"+Ge,vi="__reactEvents$"+Ge,Ym="__reactListeners$"+Ge,km="__reactHandles$"+Ge,lu="__reactResources$"+Ge,Va="__reactMarker$"+Ge;function os(n){delete n[pn],delete n[Tn],delete n[vi],delete n[Ym],delete n[km]}function pt(n){var e=n[pn];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Vt]||t[pn]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=fo(n);n!==null;){if(t=n[pn])return t;n=fo(n)}return e}n=t,t=n.parentNode}return null}function Zt(n){if(n=n[pn]||n[Vt]){var e=n.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return n}return null}function oa(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n.stateNode;throw Error(y(33))}function Nt(n){var e=n[lu];return e||(e=n[lu]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function on(n){n[Va]=!0}var _o=new Set,Yo={};function lt(n,e){Rt(n,e),Rt(n+"Capture",e)}function Rt(n,e){for(Yo[n]=e,n=0;n<e.length;n++)_o.add(e[n])}var Qm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ru={},iu={};function Vm(n){return pi.call(iu,n)?!0:pi.call(ru,n)?!1:Qm.test(n)?iu[n]=!0:(ru[n]=!0,!1)}function Sl(n,e,t){if(Vm(e))if(t===null)n.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":n.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){n.removeAttribute(e);return}}n.setAttribute(e,""+t)}}function ol(n,e,t){if(t===null)n.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(e);return}n.setAttribute(e,""+t)}}function ee(n,e,t,a){if(a===null)n.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(t);return}n.setAttributeNS(e,t,""+a)}}var Dr,su;function ft(n){if(Dr===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Dr=e&&e[1]||"",su=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Dr+n+su}var Or=!1;function zr(n,e){if(!n||Or)return"";Or=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var g=function(){throw Error()};if(Object.defineProperty(g.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(g,[])}catch(h){var f=h}Reflect.construct(n,[],g)}else{try{g.call()}catch(h){f=h}n.call(g.prototype)}}else{try{throw Error()}catch(h){f=h}(g=n())&&typeof g.catch=="function"&&g.catch(function(){})}}catch(h){if(h&&f&&typeof h.stack=="string")return[h.stack,f.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=a.DetermineComponentFrameRoot(),i=r[0],s=r[1];if(i&&s){var u=i.split(`
`),c=s.split(`
`);for(l=a=0;a<u.length&&!u[a].includes("DetermineComponentFrameRoot");)a++;for(;l<c.length&&!c[l].includes("DetermineComponentFrameRoot");)l++;if(a===u.length||l===c.length)for(a=u.length-1,l=c.length-1;1<=a&&0<=l&&u[a]!==c[l];)l--;for(;1<=a&&0<=l;a--,l--)if(u[a]!==c[l]){if(a!==1||l!==1)do if(a--,l--,0>l||u[a]!==c[l]){var p=`
`+u[a].replace(" at new "," at ");return n.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",n.displayName)),p}while(1<=a&&0<=l);break}}}finally{Or=!1,Error.prepareStackTrace=t}return(t=n?n.displayName||n.name:"")?ft(t):""}function Zm(n){switch(n.tag){case 26:case 27:case 5:return ft(n.type);case 16:return ft("Lazy");case 13:return ft("Suspense");case 19:return ft("SuspenseList");case 0:case 15:return zr(n.type,!1);case 11:return zr(n.type.render,!1);case 1:return zr(n.type,!0);case 31:return ft("Activity");default:return""}}function uu(n){try{var e="";do e+=Zm(n),n=n.return;while(n);return e}catch(t){return`
Error generating stack: `+t.message+`
`+t.stack}}function Rn(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ko(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Km(n){var e=ko(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),a=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,r=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return l.call(this)},set:function(i){a=""+i,r.call(this,i)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return a},setValue:function(i){a=""+i},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Xl(n){n._valueTracker||(n._valueTracker=Km(n))}function Qo(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),a="";return n&&(a=ko(n)?n.checked?"true":"false":n.value),n=a,n!==t?(e.setValue(n),!0):!1}function Ll(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Im=/[\n"\\]/g;function Xn(n){return n.replace(Im,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function bi(n,e,t,a,l,r,i,s){n.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?n.type=i:n.removeAttribute("type"),e!=null?i==="number"?(e===0&&n.value===""||n.value!=e)&&(n.value=""+Rn(e)):n.value!==""+Rn(e)&&(n.value=""+Rn(e)):i!=="submit"&&i!=="reset"||n.removeAttribute("value"),e!=null?yi(n,i,Rn(e)):t!=null?yi(n,i,Rn(t)):a!=null&&n.removeAttribute("value"),l==null&&r!=null&&(n.defaultChecked=!!r),l!=null&&(n.checked=l&&typeof l!="function"&&typeof l!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?n.name=""+Rn(s):n.removeAttribute("name")}function Vo(n,e,t,a,l,r,i,s){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(n.type=r),e!=null||t!=null){if(!(r!=="submit"&&r!=="reset"||e!=null))return;t=t!=null?""+Rn(t):"",e=e!=null?""+Rn(e):t,s||e===n.value||(n.value=e),n.defaultValue=e}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,n.checked=s?n.checked:!!a,n.defaultChecked=!!a,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(n.name=i)}function yi(n,e,t){e==="number"&&Ll(n.ownerDocument)===n||n.defaultValue===""+t||(n.defaultValue=""+t)}function Ct(n,e,t,a){if(n=n.options,e){e={};for(var l=0;l<t.length;l++)e["$"+t[l]]=!0;for(t=0;t<n.length;t++)l=e.hasOwnProperty("$"+n[t].value),n[t].selected!==l&&(n[t].selected=l),l&&a&&(n[t].defaultSelected=!0)}else{for(t=""+Rn(t),e=null,l=0;l<n.length;l++){if(n[l].value===t){n[l].selected=!0,a&&(n[l].defaultSelected=!0);return}e!==null||n[l].disabled||(e=n[l])}e!==null&&(e.selected=!0)}}function Zo(n,e,t){if(e!=null&&(e=""+Rn(e),e!==n.value&&(n.value=e),t==null)){n.defaultValue!==e&&(n.defaultValue=e);return}n.defaultValue=t!=null?""+Rn(t):""}function Ko(n,e,t,a){if(e==null){if(a!=null){if(t!=null)throw Error(y(92));if(ua(a)){if(1<a.length)throw Error(y(93));a=a[0]}t=a}t==null&&(t=""),e=t}t=Rn(e),n.defaultValue=t,a=n.textContent,a===t&&a!==""&&a!==null&&(n.value=a)}function qt(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Jm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ou(n,e,t){var a=e.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?a?n.setProperty(e,""):e==="float"?n.cssFloat="":n[e]="":a?n.setProperty(e,t):typeof t!="number"||t===0||Jm.has(e)?e==="float"?n.cssFloat=t:n[e]=(""+t).trim():n[e]=t+"px"}function Io(n,e,t){if(e!=null&&typeof e!="object")throw Error(y(62));if(n=n.style,t!=null){for(var a in t)!t.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?n.setProperty(a,""):a==="float"?n.cssFloat="":n[a]="");for(var l in e)a=e[l],e.hasOwnProperty(l)&&t[l]!==a&&ou(n,l,a)}else for(var r in e)e.hasOwnProperty(r)&&ou(n,r,e[r])}function cs(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Fm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function El(n){return Fm.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var Si=null;function fs(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var vt=null,Mt=null;function cu(n){var e=Zt(n);if(e&&(n=e.stateNode)){var t=n[Tn]||null;n:switch(n=e.stateNode,e.type){case"input":if(bi(n,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Xn(""+e)+'"][type="radio"]'),e=0;e<t.length;e++){var a=t[e];if(a!==n&&a.form===n.form){var l=a[Tn]||null;if(!l)throw Error(y(90));bi(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(e=0;e<t.length;e++)a=t[e],a.form===n.form&&Qo(a)}break n;case"textarea":Zo(n,t.value,t.defaultValue);break n;case"select":e=t.value,e!=null&&Ct(n,!!t.multiple,e,!1)}}}var jr=!1;function Jo(n,e,t){if(jr)return n(e,t);jr=!0;try{var a=n(e);return a}finally{if(jr=!1,(vt!==null||Mt!==null)&&(xr(),vt&&(e=vt,n=Mt,Mt=vt=null,cu(e),n)))for(e=0;e<n.length;e++)cu(n[e])}}function Ma(n,e){var t=n.stateNode;if(t===null)return null;var a=t[Tn]||null;if(a===null)return null;t=a[e];n:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(n=n.type,a=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!a;break n;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(y(231,e,typeof t));return t}var me=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ei=!1;if(me)try{var na={};Object.defineProperty(na,"passive",{get:function(){Ei=!0}}),window.addEventListener("test",na,na),window.removeEventListener("test",na,na)}catch{Ei=!1}var Ne=null,ms=null,xl=null;function Wo(){if(xl)return xl;var n,e=ms,t=e.length,a,l="value"in Ne?Ne.value:Ne.textContent,r=l.length;for(n=0;n<t&&e[n]===l[n];n++);var i=t-n;for(a=1;a<=i&&e[t-a]===l[r-a];a++);return xl=l.slice(n,1<a?1-a:void 0)}function Tl(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function cl(){return!0}function fu(){return!1}function An(n){function e(t,a,l,r,i){this._reactName=t,this._targetInst=l,this.type=a,this.nativeEvent=r,this.target=i,this.currentTarget=null;for(var s in n)n.hasOwnProperty(s)&&(t=n[s],this[s]=t?t(r):r[s]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?cl:fu,this.isPropagationStopped=fu,this}return Q(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=cl)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=cl)},persist:function(){},isPersistent:cl}),e}var rt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hr=An(rt),Za=Q({},rt,{view:0,detail:0}),Pm=An(Za),Br,Rr,ea,dr=Q({},Za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hs,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ea&&(ea&&n.type==="mousemove"?(Br=n.screenX-ea.screenX,Rr=n.screenY-ea.screenY):Rr=Br=0,ea=n),Br)},movementY:function(n){return"movementY"in n?n.movementY:Rr}}),mu=An(dr),$m=Q({},dr,{dataTransfer:0}),nh=An($m),eh=Q({},Za,{relatedTarget:0}),qr=An(eh),th=Q({},rt,{animationName:0,elapsedTime:0,pseudoElement:0}),ah=An(th),lh=Q({},rt,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),rh=An(lh),ih=Q({},rt,{data:0}),hu=An(ih),sh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},oh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ch(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=oh[n])?!!e[n]:!1}function hs(){return ch}var fh=Q({},Za,{key:function(n){if(n.key){var e=sh[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Tl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?uh[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hs,charCode:function(n){return n.type==="keypress"?Tl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Tl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),mh=An(fh),hh=Q({},dr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),du=An(hh),dh=Q({},Za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hs}),gh=An(dh),ph=Q({},rt,{propertyName:0,elapsedTime:0,pseudoElement:0}),vh=An(ph),bh=Q({},dr,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),yh=An(bh),Sh=Q({},rt,{newState:0,oldState:0}),Eh=An(Sh),xh=[9,13,27,32],ds=me&&"CompositionEvent"in window,ma=null;me&&"documentMode"in document&&(ma=document.documentMode);var Th=me&&"TextEvent"in window&&!ma,Fo=me&&(!ds||ma&&8<ma&&11>=ma),gu=" ",pu=!1;function Po(n,e){switch(n){case"keyup":return xh.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $o(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var bt=!1;function Ah(n,e){switch(n){case"compositionend":return $o(e);case"keypress":return e.which!==32?null:(pu=!0,gu);case"textInput":return n=e.data,n===gu&&pu?null:n;default:return null}}function wh(n,e){if(bt)return n==="compositionend"||!ds&&Po(n,e)?(n=Wo(),xl=ms=Ne=null,bt=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Fo&&e.locale!=="ko"?null:e.data;default:return null}}var Nh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vu(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Nh[n.type]:e==="textarea"}function nc(n,e,t,a){vt?Mt?Mt.push(a):Mt=[a]:vt=a,e=ar(e,"onChange"),0<e.length&&(t=new hr("onChange","change",null,t,a),n.push({event:t,listeners:e}))}var ha=null,Ua=null;function Ch(n){Kf(n,0)}function gr(n){var e=oa(n);if(Qo(e))return n}function bu(n,e){if(n==="change")return e}var ec=!1;if(me){var Hr;if(me){var Xr="oninput"in document;if(!Xr){var yu=document.createElement("div");yu.setAttribute("oninput","return;"),Xr=typeof yu.oninput=="function"}Hr=Xr}else Hr=!1;ec=Hr&&(!document.documentMode||9<document.documentMode)}function Su(){ha&&(ha.detachEvent("onpropertychange",tc),Ua=ha=null)}function tc(n){if(n.propertyName==="value"&&gr(Ua)){var e=[];nc(e,Ua,n,fs(n)),Jo(Ch,e)}}function Mh(n,e,t){n==="focusin"?(Su(),ha=e,Ua=t,ha.attachEvent("onpropertychange",tc)):n==="focusout"&&Su()}function Uh(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return gr(Ua)}function Dh(n,e){if(n==="click")return gr(e)}function Oh(n,e){if(n==="input"||n==="change")return gr(e)}function zh(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var jn=typeof Object.is=="function"?Object.is:zh;function Da(n,e){if(jn(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),a=Object.keys(e);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var l=t[a];if(!pi.call(e,l)||!jn(n[l],e[l]))return!1}return!0}function Eu(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function xu(n,e){var t=Eu(n);n=0;for(var a;t;){if(t.nodeType===3){if(a=n+t.textContent.length,n<=e&&a>=e)return{node:t,offset:e-n};n=a}n:{for(;t;){if(t.nextSibling){t=t.nextSibling;break n}t=t.parentNode}t=void 0}t=Eu(t)}}function ac(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?ac(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function lc(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var e=Ll(n.document);e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Ll(n.document)}return e}function gs(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}var jh=me&&"documentMode"in document&&11>=document.documentMode,yt=null,xi=null,da=null,Ti=!1;function Tu(n,e,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ti||yt==null||yt!==Ll(a)||(a=yt,"selectionStart"in a&&gs(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),da&&Da(da,a)||(da=a,a=ar(xi,"onSelect"),0<a.length&&(e=new hr("onSelect","select",null,e,t),n.push({event:e,listeners:a}),e.target=yt)))}function ke(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var St={animationend:ke("Animation","AnimationEnd"),animationiteration:ke("Animation","AnimationIteration"),animationstart:ke("Animation","AnimationStart"),transitionrun:ke("Transition","TransitionRun"),transitionstart:ke("Transition","TransitionStart"),transitioncancel:ke("Transition","TransitionCancel"),transitionend:ke("Transition","TransitionEnd")},Lr={},rc={};me&&(rc=document.createElement("div").style,"AnimationEvent"in window||(delete St.animationend.animation,delete St.animationiteration.animation,delete St.animationstart.animation),"TransitionEvent"in window||delete St.transitionend.transition);function it(n){if(Lr[n])return Lr[n];if(!St[n])return n;var e=St[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in rc)return Lr[n]=e[t];return n}var ic=it("animationend"),sc=it("animationiteration"),uc=it("animationstart"),Bh=it("transitionrun"),Rh=it("transitionstart"),qh=it("transitioncancel"),oc=it("transitionend"),cc=new Map,Ai="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ai.push("scrollEnd");function Zn(n,e){cc.set(n,e),lt(e,[n])}var Au=new WeakMap;function Ln(n,e){if(typeof n=="object"&&n!==null){var t=Au.get(n);return t!==void 0?t:(e={value:n,source:e,stack:uu(e)},Au.set(n,e),e)}return{value:n,source:e,stack:uu(e)}}var Bn=[],Et=0,ps=0;function pr(){for(var n=Et,e=ps=Et=0;e<n;){var t=Bn[e];Bn[e++]=null;var a=Bn[e];Bn[e++]=null;var l=Bn[e];Bn[e++]=null;var r=Bn[e];if(Bn[e++]=null,a!==null&&l!==null){var i=a.pending;i===null?l.next=l:(l.next=i.next,i.next=l),a.pending=l}r!==0&&fc(t,l,r)}}function vr(n,e,t,a){Bn[Et++]=n,Bn[Et++]=e,Bn[Et++]=t,Bn[Et++]=a,ps|=a,n.lanes|=a,n=n.alternate,n!==null&&(n.lanes|=a)}function vs(n,e,t,a){return vr(n,e,t,a),Gl(n)}function Kt(n,e){return vr(n,null,null,e),Gl(n)}function fc(n,e,t){n.lanes|=t;var a=n.alternate;a!==null&&(a.lanes|=t);for(var l=!1,r=n.return;r!==null;)r.childLanes|=t,a=r.alternate,a!==null&&(a.childLanes|=t),r.tag===22&&(n=r.stateNode,n===null||n._visibility&1||(l=!0)),n=r,r=r.return;return n.tag===3?(r=n.stateNode,l&&e!==null&&(l=31-Dn(t),n=r.hiddenUpdates,a=n[l],a===null?n[l]=[e]:a.push(e),e.lane=t|536870912),r):null}function Gl(n){if(50<Aa)throw Aa=0,Vi=null,Error(y(185));for(var e=n.return;e!==null;)n=e,e=n.return;return n.tag===3?n.stateNode:null}var xt={};function Hh(n,e,t,a){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mn(n,e,t,a){return new Hh(n,e,t,a)}function bs(n){return n=n.prototype,!(!n||!n.isReactComponent)}function ce(n,e){var t=n.alternate;return t===null?(t=Mn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&65011712,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t.refCleanup=n.refCleanup,t}function mc(n,e){n.flags&=65011714;var t=n.alternate;return t===null?(n.childLanes=0,n.lanes=e,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,n.type=t.type,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n}function Al(n,e,t,a,l,r){var i=0;if(a=n,typeof n=="function")bs(n)&&(i=1);else if(typeof n=="string")i=Ld(n,t,Wn.current)?26:n==="html"||n==="head"||n==="body"?27:5;else n:switch(n){case mi:return n=Mn(31,t,e,l),n.elementType=mi,n.lanes=r,n;case dt:return Ie(t.children,l,r,e);case Oo:i=8,l|=24;break;case oi:return n=Mn(12,t,e,l|2),n.elementType=oi,n.lanes=r,n;case ci:return n=Mn(13,t,e,l),n.elementType=ci,n.lanes=r,n;case fi:return n=Mn(19,t,e,l),n.elementType=fi,n.lanes=r,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Cm:case re:i=10;break n;case zo:i=9;break n;case ls:i=11;break n;case rs:i=14;break n;case ye:i=16,a=null;break n}i=29,t=Error(y(130,n===null?"null":typeof n,"")),a=null}return e=Mn(i,t,e,l),e.elementType=n,e.type=a,e.lanes=r,e}function Ie(n,e,t,a){return n=Mn(7,n,a,e),n.lanes=t,n}function Gr(n,e,t){return n=Mn(6,n,null,e),n.lanes=t,n}function _r(n,e,t){return e=Mn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}var Tt=[],At=0,_l=null,Yl=0,qn=[],Hn=0,Je=null,ie=1,se="";function Ve(n,e){Tt[At++]=Yl,Tt[At++]=_l,_l=n,Yl=e}function hc(n,e,t){qn[Hn++]=ie,qn[Hn++]=se,qn[Hn++]=Je,Je=n;var a=ie;n=se;var l=32-Dn(a)-1;a&=~(1<<l),t+=1;var r=32-Dn(e)+l;if(30<r){var i=l-l%5;r=(a&(1<<i)-1).toString(32),a>>=i,l-=i,ie=1<<32-Dn(e)+l|t<<l|a,se=r+n}else ie=1<<r|t<<l|a,se=n}function ys(n){n.return!==null&&(Ve(n,1),hc(n,1,0))}function Ss(n){for(;n===_l;)_l=Tt[--At],Tt[At]=null,Yl=Tt[--At],Tt[At]=null;for(;n===Je;)Je=qn[--Hn],qn[Hn]=null,se=qn[--Hn],qn[Hn]=null,ie=qn[--Hn],qn[Hn]=null}var yn=null,J=null,q=!1,We=null,In=!1,wi=Error(y(519));function nt(n){var e=Error(y(418,""));throw Oa(Ln(e,n)),wi}function wu(n){var e=n.stateNode,t=n.type,a=n.memoizedProps;switch(e[pn]=n,e[Tn]=a,t){case"dialog":j("cancel",e),j("close",e);break;case"iframe":case"object":case"embed":j("load",e);break;case"video":case"audio":for(t=0;t<Ba.length;t++)j(Ba[t],e);break;case"source":j("error",e);break;case"img":case"image":case"link":j("error",e),j("load",e);break;case"details":j("toggle",e);break;case"input":j("invalid",e),Vo(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Xl(e);break;case"select":j("invalid",e);break;case"textarea":j("invalid",e),Ko(e,a.value,a.defaultValue,a.children),Xl(e)}t=a.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||e.textContent===""+t||a.suppressHydrationWarning===!0||Jf(e.textContent,t)?(a.popover!=null&&(j("beforetoggle",e),j("toggle",e)),a.onScroll!=null&&j("scroll",e),a.onScrollEnd!=null&&j("scrollend",e),a.onClick!=null&&(e.onclick=wr),e=!0):e=!1,e||nt(n)}function Nu(n){for(yn=n.return;yn;)switch(yn.tag){case 5:case 13:In=!1;return;case 27:case 3:In=!0;return;default:yn=yn.return}}function ta(n){if(n!==yn)return!1;if(!q)return Nu(n),q=!0,!1;var e=n.tag,t;if((t=e!==3&&e!==27)&&((t=e===5)&&(t=n.type,t=!(t!=="form"&&t!=="button")||Fi(n.type,n.memoizedProps)),t=!t),t&&J&&nt(n),Nu(n),e===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(y(317));n:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8)if(t=n.data,t==="/$"){if(e===0){J=Vn(n.nextSibling);break n}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++;n=n.nextSibling}J=null}}else e===27?(e=J,_e(n.type)?(n=ns,ns=null,J=n):J=e):J=yn?Vn(n.stateNode.nextSibling):null;return!0}function Ka(){J=yn=null,q=!1}function Cu(){var n=We;return n!==null&&(xn===null?xn=n:xn.push.apply(xn,n),We=null),n}function Oa(n){We===null?We=[n]:We.push(n)}var Ni=$n(null),st=null,ue=null;function Ee(n,e,t){K(Ni,e._currentValue),e._currentValue=t}function fe(n){n._currentValue=Ni.current,fn(Ni)}function Ci(n,e,t){for(;n!==null;){var a=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),n===t)break;n=n.return}}function Mi(n,e,t,a){var l=n.child;for(l!==null&&(l.return=n);l!==null;){var r=l.dependencies;if(r!==null){var i=l.child;r=r.firstContext;n:for(;r!==null;){var s=r;r=l;for(var u=0;u<e.length;u++)if(s.context===e[u]){r.lanes|=t,s=r.alternate,s!==null&&(s.lanes|=t),Ci(r.return,t,n),a||(i=null);break n}r=s.next}}else if(l.tag===18){if(i=l.return,i===null)throw Error(y(341));i.lanes|=t,r=i.alternate,r!==null&&(r.lanes|=t),Ci(i,t,n),i=null}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===n){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}}function Ia(n,e,t,a){n=null;for(var l=e,r=!1;l!==null;){if(!r){if(l.flags&524288)r=!0;else if(l.flags&262144)break}if(l.tag===10){var i=l.alternate;if(i===null)throw Error(y(387));if(i=i.memoizedProps,i!==null){var s=l.type;jn(l.pendingProps.value,i.value)||(n!==null?n.push(s):n=[s])}}else if(l===Bl.current){if(i=l.alternate,i===null)throw Error(y(387));i.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(n!==null?n.push(Ha):n=[Ha])}l=l.return}n!==null&&Mi(e,n,t,a),e.flags|=262144}function kl(n){for(n=n.firstContext;n!==null;){if(!jn(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function et(n){st=n,ue=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function vn(n){return dc(st,n)}function fl(n,e){return st===null&&et(n),dc(n,e)}function dc(n,e){var t=e._currentValue;if(e={context:e,memoizedValue:t,next:null},ue===null){if(n===null)throw Error(y(308));ue=e,n.dependencies={lanes:0,firstContext:e},n.flags|=524288}else ue=ue.next=e;return t}var Xh=typeof AbortController<"u"?AbortController:function(){var n=[],e=this.signal={aborted:!1,addEventListener:function(t,a){n.push(a)}};this.abort=function(){e.aborted=!0,n.forEach(function(t){return t()})}},Lh=rn.unstable_scheduleCallback,Gh=rn.unstable_NormalPriority,an={$$typeof:re,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Es(){return{controller:new Xh,data:new Map,refCount:0}}function Ja(n){n.refCount--,n.refCount===0&&Lh(Gh,function(){n.controller.abort()})}var ga=null,Ui=0,Ht=0,Ut=null;function _h(n,e){if(ga===null){var t=ga=[];Ui=0,Ht=Qs(),Ut={status:"pending",value:void 0,then:function(a){t.push(a)}}}return Ui++,e.then(Mu,Mu),e}function Mu(){if(--Ui===0&&ga!==null){Ut!==null&&(Ut.status="fulfilled");var n=ga;ga=null,Ht=0,Ut=null;for(var e=0;e<n.length;e++)(0,n[e])()}}function Yh(n,e){var t=[],a={status:"pending",value:null,reason:null,then:function(l){t.push(l)}};return n.then(function(){a.status="fulfilled",a.value=e;for(var l=0;l<t.length;l++)(0,t[l])(e)},function(l){for(a.status="rejected",a.reason=l,l=0;l<t.length;l++)(0,t[l])(void 0)}),a}var Uu=M.S;M.S=function(n,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&_h(n,e),Uu!==null&&Uu(n,e)};var Fe=$n(null);function xs(){var n=Fe.current;return n!==null?n:k.pooledCache}function wl(n,e){e===null?K(Fe,Fe.current):K(Fe,e.pool)}function gc(){var n=xs();return n===null?null:{parent:an._currentValue,pool:n}}var Wa=Error(y(460)),pc=Error(y(474)),br=Error(y(542)),Di={then:function(){}};function Du(n){return n=n.status,n==="fulfilled"||n==="rejected"}function ml(){}function vc(n,e,t){switch(t=n[t],t===void 0?n.push(e):t!==e&&(e.then(ml,ml),e=t),e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,zu(n),n;default:if(typeof e.status=="string")e.then(ml,ml);else{if(n=k,n!==null&&100<n.shellSuspendCounter)throw Error(y(482));n=e,n.status="pending",n.then(function(a){if(e.status==="pending"){var l=e;l.status="fulfilled",l.value=a}},function(a){if(e.status==="pending"){var l=e;l.status="rejected",l.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,zu(n),n}throw pa=e,Wa}}var pa=null;function Ou(){if(pa===null)throw Error(y(459));var n=pa;return pa=null,n}function zu(n){if(n===Wa||n===br)throw Error(y(483))}var Se=!1;function Ts(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Oi(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function De(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Oe(n,e,t){var a=n.updateQueue;if(a===null)return null;if(a=a.shared,L&2){var l=a.pending;return l===null?e.next=e:(e.next=l.next,l.next=e),a.pending=e,e=Gl(n),fc(n,null,t),e}return vr(n,a,e,t),Gl(n)}function va(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194048)!==0)){var a=e.lanes;a&=n.pendingLanes,t|=a,e.lanes=t,Lo(n,t)}}function Yr(n,e){var t=n.updateQueue,a=n.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var l=null,r=null;if(t=t.firstBaseUpdate,t!==null){do{var i={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};r===null?l=r=i:r=r.next=i,t=t.next}while(t!==null);r===null?l=r=e:r=r.next=e}else l=r=e;t={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:r,shared:a.shared,callbacks:a.callbacks},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}var zi=!1;function ba(){if(zi){var n=Ut;if(n!==null)throw n}}function ya(n,e,t,a){zi=!1;var l=n.updateQueue;Se=!1;var r=l.firstBaseUpdate,i=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var u=s,c=u.next;u.next=null,i===null?r=c:i.next=c,i=u;var p=n.alternate;p!==null&&(p=p.updateQueue,s=p.lastBaseUpdate,s!==i&&(s===null?p.firstBaseUpdate=c:s.next=c,p.lastBaseUpdate=u))}if(r!==null){var g=l.baseState;i=0,p=c=u=null,s=r;do{var f=s.lane&-536870913,h=f!==s.lane;if(h?(R&f)===f:(a&f)===f){f!==0&&f===Ht&&(zi=!0),p!==null&&(p=p.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});n:{var E=n,S=s;f=e;var N=t;switch(S.tag){case 1:if(E=S.payload,typeof E=="function"){g=E.call(N,g,f);break n}g=E;break n;case 3:E.flags=E.flags&-65537|128;case 0:if(E=S.payload,f=typeof E=="function"?E.call(N,g,f):E,f==null)break n;g=Q({},g,f);break n;case 2:Se=!0}}f=s.callback,f!==null&&(n.flags|=64,h&&(n.flags|=8192),h=l.callbacks,h===null?l.callbacks=[f]:h.push(f))}else h={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},p===null?(c=p=h,u=g):p=p.next=h,i|=f;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;h=s,s=h.next,h.next=null,l.lastBaseUpdate=h,l.shared.pending=null}}while(!0);p===null&&(u=g),l.baseState=u,l.firstBaseUpdate=c,l.lastBaseUpdate=p,r===null&&(l.shared.lanes=0),Le|=i,n.lanes=i,n.memoizedState=g}}function bc(n,e){if(typeof n!="function")throw Error(y(191,n));n.call(e)}function yc(n,e){var t=n.callbacks;if(t!==null)for(n.callbacks=null,n=0;n<t.length;n++)bc(t[n],e)}var Xt=$n(null),Ql=$n(0);function ju(n,e){n=ge,K(Ql,n),K(Xt,e),ge=n|e.baseLanes}function ji(){K(Ql,ge),K(Xt,Xt.current)}function As(){ge=Ql.current,fn(Xt),fn(Ql)}var He=0,D=null,_=null,nn=null,Vl=!1,Dt=!1,tt=!1,Zl=0,za=0,Ot=null,kh=0;function P(){throw Error(y(321))}function ws(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!jn(n[t],e[t]))return!1;return!0}function Ns(n,e,t,a,l,r){return He=r,D=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,M.H=n===null||n.memoizedState===null?Wc:Fc,tt=!1,r=t(a,l),tt=!1,Dt&&(r=Ec(e,t,a,l)),Sc(n),r}function Sc(n){M.H=Kl;var e=_!==null&&_.next!==null;if(He=0,nn=_=D=null,Vl=!1,za=0,Ot=null,e)throw Error(y(300));n===null||cn||(n=n.dependencies,n!==null&&kl(n)&&(cn=!0))}function Ec(n,e,t,a){D=n;var l=0;do{if(Dt&&(Ot=null),za=0,Dt=!1,25<=l)throw Error(y(301));if(l+=1,nn=_=null,n.updateQueue!=null){var r=n.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}M.H=Wh,r=e(t,a)}while(Dt);return r}function Qh(){var n=M.H,e=n.useState()[0];return e=typeof e.then=="function"?Fa(e):e,n=n.useState()[0],(_!==null?_.memoizedState:null)!==n&&(D.flags|=1024),e}function Cs(){var n=Zl!==0;return Zl=0,n}function Ms(n,e,t){e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~t}function Us(n){if(Vl){for(n=n.memoizedState;n!==null;){var e=n.queue;e!==null&&(e.pending=null),n=n.next}Vl=!1}He=0,nn=_=D=null,Dt=!1,za=Zl=0,Ot=null}function Sn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?D.memoizedState=nn=n:nn=nn.next=n,nn}function tn(){if(_===null){var n=D.alternate;n=n!==null?n.memoizedState:null}else n=_.next;var e=nn===null?D.memoizedState:nn.next;if(e!==null)nn=e,_=n;else{if(n===null)throw D.alternate===null?Error(y(467)):Error(y(310));_=n,n={memoizedState:_.memoizedState,baseState:_.baseState,baseQueue:_.baseQueue,queue:_.queue,next:null},nn===null?D.memoizedState=nn=n:nn=nn.next=n}return nn}function Ds(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fa(n){var e=za;return za+=1,Ot===null&&(Ot=[]),n=vc(Ot,n,e),e=D,(nn===null?e.memoizedState:nn.next)===null&&(e=e.alternate,M.H=e===null||e.memoizedState===null?Wc:Fc),n}function yr(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Fa(n);if(n.$$typeof===re)return vn(n)}throw Error(y(438,String(n)))}function Os(n){var e=null,t=D.updateQueue;if(t!==null&&(e=t.memoCache),e==null){var a=D.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(l){return l.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),t===null&&(t=Ds(),D.updateQueue=t),t.memoCache=e,t=e.data[e.index],t===void 0)for(t=e.data[e.index]=Array(n),a=0;a<n;a++)t[a]=Mm;return e.index++,t}function he(n,e){return typeof e=="function"?e(n):e}function Nl(n){var e=tn();return zs(e,_,n)}function zs(n,e,t){var a=n.queue;if(a===null)throw Error(y(311));a.lastRenderedReducer=t;var l=n.baseQueue,r=a.pending;if(r!==null){if(l!==null){var i=l.next;l.next=r.next,r.next=i}e.baseQueue=l=r,a.pending=null}if(r=n.baseState,l===null)n.memoizedState=r;else{e=l.next;var s=i=null,u=null,c=e,p=!1;do{var g=c.lane&-536870913;if(g!==c.lane?(R&g)===g:(He&g)===g){var f=c.revertLane;if(f===0)u!==null&&(u=u.next={lane:0,revertLane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),g===Ht&&(p=!0);else if((He&f)===f){c=c.next,f===Ht&&(p=!0);continue}else g={lane:0,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},u===null?(s=u=g,i=r):u=u.next=g,D.lanes|=f,Le|=f;g=c.action,tt&&t(r,g),r=c.hasEagerState?c.eagerState:t(r,g)}else f={lane:g,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},u===null?(s=u=f,i=r):u=u.next=f,D.lanes|=g,Le|=g;c=c.next}while(c!==null&&c!==e);if(u===null?i=r:u.next=s,!jn(r,n.memoizedState)&&(cn=!0,p&&(t=Ut,t!==null)))throw t;n.memoizedState=r,n.baseState=i,n.baseQueue=u,a.lastRenderedState=r}return l===null&&(a.lanes=0),[n.memoizedState,a.dispatch]}function kr(n){var e=tn(),t=e.queue;if(t===null)throw Error(y(311));t.lastRenderedReducer=n;var a=t.dispatch,l=t.pending,r=e.memoizedState;if(l!==null){t.pending=null;var i=l=l.next;do r=n(r,i.action),i=i.next;while(i!==l);jn(r,e.memoizedState)||(cn=!0),e.memoizedState=r,e.baseQueue===null&&(e.baseState=r),t.lastRenderedState=r}return[r,a]}function xc(n,e,t){var a=D,l=tn(),r=q;if(r){if(t===void 0)throw Error(y(407));t=t()}else t=e();var i=!jn((_||l).memoizedState,t);i&&(l.memoizedState=t,cn=!0),l=l.queue;var s=wc.bind(null,a,l,n);if(Pa(2048,8,s,[n]),l.getSnapshot!==e||i||nn!==null&&nn.memoizedState.tag&1){if(a.flags|=2048,Lt(9,Sr(),Ac.bind(null,a,l,t,e),null),k===null)throw Error(y(349));r||He&124||Tc(a,e,t)}return t}function Tc(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=D.updateQueue,e===null?(e=Ds(),D.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Ac(n,e,t,a){e.value=t,e.getSnapshot=a,Nc(e)&&Cc(n)}function wc(n,e,t){return t(function(){Nc(e)&&Cc(n)})}function Nc(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!jn(n,t)}catch{return!0}}function Cc(n){var e=Kt(n,2);e!==null&&zn(e,n,2)}function Bi(n){var e=Sn();if(typeof n=="function"){var t=n;if(n=t(),tt){we(!0);try{t()}finally{we(!1)}}}return e.memoizedState=e.baseState=n,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:he,lastRenderedState:n},e}function Mc(n,e,t,a){return n.baseState=t,zs(n,_,typeof a=="function"?a:he)}function Vh(n,e,t,a,l){if(Er(n))throw Error(y(485));if(n=e.action,n!==null){var r={payload:l,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){r.listeners.push(i)}};M.T!==null?t(!0):r.isTransition=!1,a(r),t=e.pending,t===null?(r.next=e.pending=r,Uc(e,r)):(r.next=t.next,e.pending=t.next=r)}}function Uc(n,e){var t=e.action,a=e.payload,l=n.state;if(e.isTransition){var r=M.T,i={};M.T=i;try{var s=t(l,a),u=M.S;u!==null&&u(i,s),Bu(n,e,s)}catch(c){Ri(n,e,c)}finally{M.T=r}}else try{r=t(l,a),Bu(n,e,r)}catch(c){Ri(n,e,c)}}function Bu(n,e,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(a){Ru(n,e,a)},function(a){return Ri(n,e,a)}):Ru(n,e,t)}function Ru(n,e,t){e.status="fulfilled",e.value=t,Dc(e),n.state=t,e=n.pending,e!==null&&(t=e.next,t===e?n.pending=null:(t=t.next,e.next=t,Uc(n,t)))}function Ri(n,e,t){var a=n.pending;if(n.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=t,Dc(e),e=e.next;while(e!==a)}n.action=null}function Dc(n){n=n.listeners;for(var e=0;e<n.length;e++)(0,n[e])()}function Oc(n,e){return e}function qu(n,e){if(q){var t=k.formState;if(t!==null){n:{var a=D;if(q){if(J){e:{for(var l=J,r=In;l.nodeType!==8;){if(!r){l=null;break e}if(l=Vn(l.nextSibling),l===null){l=null;break e}}r=l.data,l=r==="F!"||r==="F"?l:null}if(l){J=Vn(l.nextSibling),a=l.data==="F!";break n}}nt(a)}a=!1}a&&(e=t[0])}}return t=Sn(),t.memoizedState=t.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oc,lastRenderedState:e},t.queue=a,t=Kc.bind(null,D,a),a.dispatch=t,a=Bi(!1),r=qs.bind(null,D,!1,a.queue),a=Sn(),l={state:e,dispatch:null,action:n,pending:null},a.queue=l,t=Vh.bind(null,D,l,r,t),l.dispatch=t,a.memoizedState=n,[e,t,!1]}function Hu(n){var e=tn();return zc(e,_,n)}function zc(n,e,t){if(e=zs(n,e,Oc)[0],n=Nl(he)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=Fa(e)}catch(i){throw i===Wa?br:i}else a=e;e=tn();var l=e.queue,r=l.dispatch;return t!==e.memoizedState&&(D.flags|=2048,Lt(9,Sr(),Zh.bind(null,l,t),null)),[a,r,n]}function Zh(n,e){n.action=e}function Xu(n){var e=tn(),t=_;if(t!==null)return zc(e,t,n);tn(),e=e.memoizedState,t=tn();var a=t.queue.dispatch;return t.memoizedState=n,[e,a,!1]}function Lt(n,e,t,a){return n={tag:n,create:t,deps:a,inst:e,next:null},e=D.updateQueue,e===null&&(e=Ds(),D.updateQueue=e),t=e.lastEffect,t===null?e.lastEffect=n.next=n:(a=t.next,t.next=n,n.next=a,e.lastEffect=n),n}function Sr(){return{destroy:void 0,resource:void 0}}function jc(){return tn().memoizedState}function Cl(n,e,t,a){var l=Sn();a=a===void 0?null:a,D.flags|=n,l.memoizedState=Lt(1|e,Sr(),t,a)}function Pa(n,e,t,a){var l=tn();a=a===void 0?null:a;var r=l.memoizedState.inst;_!==null&&a!==null&&ws(a,_.memoizedState.deps)?l.memoizedState=Lt(e,r,t,a):(D.flags|=n,l.memoizedState=Lt(1|e,r,t,a))}function Lu(n,e){Cl(8390656,8,n,e)}function Bc(n,e){Pa(2048,8,n,e)}function Rc(n,e){return Pa(4,2,n,e)}function qc(n,e){return Pa(4,4,n,e)}function Hc(n,e){if(typeof e=="function"){n=n();var t=e(n);return function(){typeof t=="function"?t():e(null)}}if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Xc(n,e,t){t=t!=null?t.concat([n]):null,Pa(4,4,Hc.bind(null,e,n),t)}function js(){}function Lc(n,e){var t=tn();e=e===void 0?null:e;var a=t.memoizedState;return e!==null&&ws(e,a[1])?a[0]:(t.memoizedState=[n,e],n)}function Gc(n,e){var t=tn();e=e===void 0?null:e;var a=t.memoizedState;if(e!==null&&ws(e,a[1]))return a[0];if(a=n(),tt){we(!0);try{n()}finally{we(!1)}}return t.memoizedState=[a,e],a}function Bs(n,e,t){return t===void 0||He&1073741824?n.memoizedState=e:(n.memoizedState=t,n=Of(),D.lanes|=n,Le|=n,t)}function _c(n,e,t,a){return jn(t,e)?t:Xt.current!==null?(n=Bs(n,t,a),jn(n,e)||(cn=!0),n):He&42?(n=Of(),D.lanes|=n,Le|=n,e):(cn=!0,n.memoizedState=t)}function Yc(n,e,t,a,l){var r=H.p;H.p=r!==0&&8>r?r:8;var i=M.T,s={};M.T=s,qs(n,!1,e,t);try{var u=l(),c=M.S;if(c!==null&&c(s,u),u!==null&&typeof u=="object"&&typeof u.then=="function"){var p=Yh(u,a);Sa(n,e,p,On(n))}else Sa(n,e,a,On(n))}catch(g){Sa(n,e,{then:function(){},status:"rejected",reason:g},On())}finally{H.p=r,M.T=i}}function Kh(){}function qi(n,e,t,a){if(n.tag!==5)throw Error(y(476));var l=kc(n).queue;Yc(n,l,e,Ke,t===null?Kh:function(){return Qc(n),t(a)})}function kc(n){var e=n.memoizedState;if(e!==null)return e;e={memoizedState:Ke,baseState:Ke,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:he,lastRenderedState:Ke},next:null};var t={};return e.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:he,lastRenderedState:t},next:null},n.memoizedState=e,n=n.alternate,n!==null&&(n.memoizedState=e),e}function Qc(n){var e=kc(n).next.queue;Sa(n,e,{},On())}function Rs(){return vn(Ha)}function Vc(){return tn().memoizedState}function Zc(){return tn().memoizedState}function Ih(n){for(var e=n.return;e!==null;){switch(e.tag){case 24:case 3:var t=On();n=De(t);var a=Oe(e,n,t);a!==null&&(zn(a,e,t),va(a,e,t)),e={cache:Es()},n.payload=e;return}e=e.return}}function Jh(n,e,t){var a=On();t={lane:a,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null},Er(n)?Ic(e,t):(t=vs(n,e,t,a),t!==null&&(zn(t,n,a),Jc(t,e,a)))}function Kc(n,e,t){var a=On();Sa(n,e,t,a)}function Sa(n,e,t,a){var l={lane:a,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null};if(Er(n))Ic(e,l);else{var r=n.alternate;if(n.lanes===0&&(r===null||r.lanes===0)&&(r=e.lastRenderedReducer,r!==null))try{var i=e.lastRenderedState,s=r(i,t);if(l.hasEagerState=!0,l.eagerState=s,jn(s,i))return vr(n,e,l,0),k===null&&pr(),!1}catch{}finally{}if(t=vs(n,e,l,a),t!==null)return zn(t,n,a),Jc(t,e,a),!0}return!1}function qs(n,e,t,a){if(a={lane:2,revertLane:Qs(),action:a,hasEagerState:!1,eagerState:null,next:null},Er(n)){if(e)throw Error(y(479))}else e=vs(n,t,a,2),e!==null&&zn(e,n,2)}function Er(n){var e=n.alternate;return n===D||e!==null&&e===D}function Ic(n,e){Dt=Vl=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Jc(n,e,t){if(t&4194048){var a=e.lanes;a&=n.pendingLanes,t|=a,e.lanes=t,Lo(n,t)}}var Kl={readContext:vn,use:yr,useCallback:P,useContext:P,useEffect:P,useImperativeHandle:P,useLayoutEffect:P,useInsertionEffect:P,useMemo:P,useReducer:P,useRef:P,useState:P,useDebugValue:P,useDeferredValue:P,useTransition:P,useSyncExternalStore:P,useId:P,useHostTransitionStatus:P,useFormState:P,useActionState:P,useOptimistic:P,useMemoCache:P,useCacheRefresh:P},Wc={readContext:vn,use:yr,useCallback:function(n,e){return Sn().memoizedState=[n,e===void 0?null:e],n},useContext:vn,useEffect:Lu,useImperativeHandle:function(n,e,t){t=t!=null?t.concat([n]):null,Cl(4194308,4,Hc.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Cl(4194308,4,n,e)},useInsertionEffect:function(n,e){Cl(4,2,n,e)},useMemo:function(n,e){var t=Sn();e=e===void 0?null:e;var a=n();if(tt){we(!0);try{n()}finally{we(!1)}}return t.memoizedState=[a,e],a},useReducer:function(n,e,t){var a=Sn();if(t!==void 0){var l=t(e);if(tt){we(!0);try{t(e)}finally{we(!1)}}}else l=e;return a.memoizedState=a.baseState=l,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:l},a.queue=n,n=n.dispatch=Jh.bind(null,D,n),[a.memoizedState,n]},useRef:function(n){var e=Sn();return n={current:n},e.memoizedState=n},useState:function(n){n=Bi(n);var e=n.queue,t=Kc.bind(null,D,e);return e.dispatch=t,[n.memoizedState,t]},useDebugValue:js,useDeferredValue:function(n,e){var t=Sn();return Bs(t,n,e)},useTransition:function(){var n=Bi(!1);return n=Yc.bind(null,D,n.queue,!0,!1),Sn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,e,t){var a=D,l=Sn();if(q){if(t===void 0)throw Error(y(407));t=t()}else{if(t=e(),k===null)throw Error(y(349));R&124||Tc(a,e,t)}l.memoizedState=t;var r={value:t,getSnapshot:e};return l.queue=r,Lu(wc.bind(null,a,r,n),[n]),a.flags|=2048,Lt(9,Sr(),Ac.bind(null,a,r,t,e),null),t},useId:function(){var n=Sn(),e=k.identifierPrefix;if(q){var t=se,a=ie;t=(a&~(1<<32-Dn(a)-1)).toString(32)+t,e="«"+e+"R"+t,t=Zl++,0<t&&(e+="H"+t.toString(32)),e+="»"}else t=kh++,e="«"+e+"r"+t.toString(32)+"»";return n.memoizedState=e},useHostTransitionStatus:Rs,useFormState:qu,useActionState:qu,useOptimistic:function(n){var e=Sn();e.memoizedState=e.baseState=n;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=t,e=qs.bind(null,D,!0,t),t.dispatch=e,[n,e]},useMemoCache:Os,useCacheRefresh:function(){return Sn().memoizedState=Ih.bind(null,D)}},Fc={readContext:vn,use:yr,useCallback:Lc,useContext:vn,useEffect:Bc,useImperativeHandle:Xc,useInsertionEffect:Rc,useLayoutEffect:qc,useMemo:Gc,useReducer:Nl,useRef:jc,useState:function(){return Nl(he)},useDebugValue:js,useDeferredValue:function(n,e){var t=tn();return _c(t,_.memoizedState,n,e)},useTransition:function(){var n=Nl(he)[0],e=tn().memoizedState;return[typeof n=="boolean"?n:Fa(n),e]},useSyncExternalStore:xc,useId:Vc,useHostTransitionStatus:Rs,useFormState:Hu,useActionState:Hu,useOptimistic:function(n,e){var t=tn();return Mc(t,_,n,e)},useMemoCache:Os,useCacheRefresh:Zc},Wh={readContext:vn,use:yr,useCallback:Lc,useContext:vn,useEffect:Bc,useImperativeHandle:Xc,useInsertionEffect:Rc,useLayoutEffect:qc,useMemo:Gc,useReducer:kr,useRef:jc,useState:function(){return kr(he)},useDebugValue:js,useDeferredValue:function(n,e){var t=tn();return _===null?Bs(t,n,e):_c(t,_.memoizedState,n,e)},useTransition:function(){var n=kr(he)[0],e=tn().memoizedState;return[typeof n=="boolean"?n:Fa(n),e]},useSyncExternalStore:xc,useId:Vc,useHostTransitionStatus:Rs,useFormState:Xu,useActionState:Xu,useOptimistic:function(n,e){var t=tn();return _!==null?Mc(t,_,n,e):(t.baseState=n,[n,t.queue.dispatch])},useMemoCache:Os,useCacheRefresh:Zc},zt=null,ja=0;function hl(n){var e=ja;return ja+=1,zt===null&&(zt=[]),vc(zt,n,e)}function aa(n,e){e=e.props.ref,n.ref=e!==void 0?e:null}function dl(n,e){throw e.$$typeof===Nm?Error(y(525)):(n=Object.prototype.toString.call(e),Error(y(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)))}function Gu(n){var e=n._init;return e(n._payload)}function Pc(n){function e(m,o){if(n){var d=m.deletions;d===null?(m.deletions=[o],m.flags|=16):d.push(o)}}function t(m,o){if(!n)return null;for(;o!==null;)e(m,o),o=o.sibling;return null}function a(m){for(var o=new Map;m!==null;)m.key!==null?o.set(m.key,m):o.set(m.index,m),m=m.sibling;return o}function l(m,o){return m=ce(m,o),m.index=0,m.sibling=null,m}function r(m,o,d){return m.index=d,n?(d=m.alternate,d!==null?(d=d.index,d<o?(m.flags|=67108866,o):d):(m.flags|=67108866,o)):(m.flags|=1048576,o)}function i(m){return n&&m.alternate===null&&(m.flags|=67108866),m}function s(m,o,d,v){return o===null||o.tag!==6?(o=Gr(d,m.mode,v),o.return=m,o):(o=l(o,d),o.return=m,o)}function u(m,o,d,v){var x=d.type;return x===dt?p(m,o,d.props.children,v,d.key):o!==null&&(o.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===ye&&Gu(x)===o.type)?(o=l(o,d.props),aa(o,d),o.return=m,o):(o=Al(d.type,d.key,d.props,null,m.mode,v),aa(o,d),o.return=m,o)}function c(m,o,d,v){return o===null||o.tag!==4||o.stateNode.containerInfo!==d.containerInfo||o.stateNode.implementation!==d.implementation?(o=_r(d,m.mode,v),o.return=m,o):(o=l(o,d.children||[]),o.return=m,o)}function p(m,o,d,v,x){return o===null||o.tag!==7?(o=Ie(d,m.mode,v,x),o.return=m,o):(o=l(o,d),o.return=m,o)}function g(m,o,d){if(typeof o=="string"&&o!==""||typeof o=="number"||typeof o=="bigint")return o=Gr(""+o,m.mode,d),o.return=m,o;if(typeof o=="object"&&o!==null){switch(o.$$typeof){case il:return d=Al(o.type,o.key,o.props,null,m.mode,d),aa(d,o),d.return=m,d;case sa:return o=_r(o,m.mode,d),o.return=m,o;case ye:var v=o._init;return o=v(o._payload),g(m,o,d)}if(ua(o)||$t(o))return o=Ie(o,m.mode,d,null),o.return=m,o;if(typeof o.then=="function")return g(m,hl(o),d);if(o.$$typeof===re)return g(m,fl(m,o),d);dl(m,o)}return null}function f(m,o,d,v){var x=o!==null?o.key:null;if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return x!==null?null:s(m,o,""+d,v);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case il:return d.key===x?u(m,o,d,v):null;case sa:return d.key===x?c(m,o,d,v):null;case ye:return x=d._init,d=x(d._payload),f(m,o,d,v)}if(ua(d)||$t(d))return x!==null?null:p(m,o,d,v,null);if(typeof d.then=="function")return f(m,o,hl(d),v);if(d.$$typeof===re)return f(m,o,fl(m,d),v);dl(m,d)}return null}function h(m,o,d,v,x){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return m=m.get(d)||null,s(o,m,""+v,x);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case il:return m=m.get(v.key===null?d:v.key)||null,u(o,m,v,x);case sa:return m=m.get(v.key===null?d:v.key)||null,c(o,m,v,x);case ye:var C=v._init;return v=C(v._payload),h(m,o,d,v,x)}if(ua(v)||$t(v))return m=m.get(d)||null,p(o,m,v,x,null);if(typeof v.then=="function")return h(m,o,d,hl(v),x);if(v.$$typeof===re)return h(m,o,d,fl(o,v),x);dl(o,v)}return null}function E(m,o,d,v){for(var x=null,C=null,A=o,w=o=0,V=null;A!==null&&w<d.length;w++){A.index>w?(V=A,A=null):V=A.sibling;var O=f(m,A,d[w],v);if(O===null){A===null&&(A=V);break}n&&A&&O.alternate===null&&e(m,A),o=r(O,o,w),C===null?x=O:C.sibling=O,C=O,A=V}if(w===d.length)return t(m,A),q&&Ve(m,w),x;if(A===null){for(;w<d.length;w++)A=g(m,d[w],v),A!==null&&(o=r(A,o,w),C===null?x=A:C.sibling=A,C=A);return q&&Ve(m,w),x}for(A=a(A);w<d.length;w++)V=h(A,m,w,d[w],v),V!==null&&(n&&V.alternate!==null&&A.delete(V.key===null?w:V.key),o=r(V,o,w),C===null?x=V:C.sibling=V,C=V);return n&&A.forEach(function(bn){return e(m,bn)}),q&&Ve(m,w),x}function S(m,o,d,v){if(d==null)throw Error(y(151));for(var x=null,C=null,A=o,w=o=0,V=null,O=d.next();A!==null&&!O.done;w++,O=d.next()){A.index>w?(V=A,A=null):V=A.sibling;var bn=f(m,A,O.value,v);if(bn===null){A===null&&(A=V);break}n&&A&&bn.alternate===null&&e(m,A),o=r(bn,o,w),C===null?x=bn:C.sibling=bn,C=bn,A=V}if(O.done)return t(m,A),q&&Ve(m,w),x;if(A===null){for(;!O.done;w++,O=d.next())O=g(m,O.value,v),O!==null&&(o=r(O,o,w),C===null?x=O:C.sibling=O,C=O);return q&&Ve(m,w),x}for(A=a(A);!O.done;w++,O=d.next())O=h(A,m,w,O.value,v),O!==null&&(n&&O.alternate!==null&&A.delete(O.key===null?w:O.key),o=r(O,o,w),C===null?x=O:C.sibling=O,C=O);return n&&A.forEach(function(kn){return e(m,kn)}),q&&Ve(m,w),x}function N(m,o,d,v){if(typeof d=="object"&&d!==null&&d.type===dt&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case il:n:{for(var x=d.key;o!==null;){if(o.key===x){if(x=d.type,x===dt){if(o.tag===7){t(m,o.sibling),v=l(o,d.props.children),v.return=m,m=v;break n}}else if(o.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===ye&&Gu(x)===o.type){t(m,o.sibling),v=l(o,d.props),aa(v,d),v.return=m,m=v;break n}t(m,o);break}else e(m,o);o=o.sibling}d.type===dt?(v=Ie(d.props.children,m.mode,v,d.key),v.return=m,m=v):(v=Al(d.type,d.key,d.props,null,m.mode,v),aa(v,d),v.return=m,m=v)}return i(m);case sa:n:{for(x=d.key;o!==null;){if(o.key===x)if(o.tag===4&&o.stateNode.containerInfo===d.containerInfo&&o.stateNode.implementation===d.implementation){t(m,o.sibling),v=l(o,d.children||[]),v.return=m,m=v;break n}else{t(m,o);break}else e(m,o);o=o.sibling}v=_r(d,m.mode,v),v.return=m,m=v}return i(m);case ye:return x=d._init,d=x(d._payload),N(m,o,d,v)}if(ua(d))return E(m,o,d,v);if($t(d)){if(x=$t(d),typeof x!="function")throw Error(y(150));return d=x.call(d),S(m,o,d,v)}if(typeof d.then=="function")return N(m,o,hl(d),v);if(d.$$typeof===re)return N(m,o,fl(m,d),v);dl(m,d)}return typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint"?(d=""+d,o!==null&&o.tag===6?(t(m,o.sibling),v=l(o,d),v.return=m,m=v):(t(m,o),v=Gr(d,m.mode,v),v.return=m,m=v),i(m)):t(m,o)}return function(m,o,d,v){try{ja=0;var x=N(m,o,d,v);return zt=null,x}catch(A){if(A===Wa||A===br)throw A;var C=Mn(29,A,null,m.mode);return C.lanes=v,C.return=m,C}finally{}}}var Gt=Pc(!0),$c=Pc(!1),_n=$n(null),Pn=null;function xe(n){var e=n.alternate;K(ln,ln.current&1),K(_n,n),Pn===null&&(e===null||Xt.current!==null||e.memoizedState!==null)&&(Pn=n)}function nf(n){if(n.tag===22){if(K(ln,ln.current),K(_n,n),Pn===null){var e=n.alternate;e!==null&&e.memoizedState!==null&&(Pn=n)}}else Te()}function Te(){K(ln,ln.current),K(_n,_n.current)}function oe(n){fn(_n),Pn===n&&(Pn=null),fn(ln)}var ln=$n(0);function Il(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||$i(t)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function Qr(n,e,t,a){e=n.memoizedState,t=t(a,e),t=t==null?e:Q({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Hi={enqueueSetState:function(n,e,t){n=n._reactInternals;var a=On(),l=De(a);l.payload=e,t!=null&&(l.callback=t),e=Oe(n,l,a),e!==null&&(zn(e,n,a),va(e,n,a))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var a=On(),l=De(a);l.tag=1,l.payload=e,t!=null&&(l.callback=t),e=Oe(n,l,a),e!==null&&(zn(e,n,a),va(e,n,a))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=On(),a=De(t);a.tag=2,e!=null&&(a.callback=e),e=Oe(n,a,t),e!==null&&(zn(e,n,t),va(e,n,t))}};function _u(n,e,t,a,l,r,i){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(a,r,i):e.prototype&&e.prototype.isPureReactComponent?!Da(t,a)||!Da(l,r):!0}function Yu(n,e,t,a){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,a),e.state!==n&&Hi.enqueueReplaceState(e,e.state,null)}function at(n,e){var t=e;if("ref"in e){t={};for(var a in e)a!=="ref"&&(t[a]=e[a])}if(n=n.defaultProps){t===e&&(t=Q({},t));for(var l in n)t[l]===void 0&&(t[l]=n[l])}return t}var Jl=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function ef(n){Jl(n)}function tf(n){console.error(n)}function af(n){Jl(n)}function Wl(n,e){try{var t=n.onUncaughtError;t(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function ku(n,e,t){try{var a=n.onCaughtError;a(t.value,{componentStack:t.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Xi(n,e,t){return t=De(t),t.tag=3,t.payload={element:null},t.callback=function(){Wl(n,e)},t}function lf(n){return n=De(n),n.tag=3,n}function rf(n,e,t,a){var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var r=a.value;n.payload=function(){return l(r)},n.callback=function(){ku(e,t,a)}}var i=t.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){ku(e,t,a),typeof l!="function"&&(ze===null?ze=new Set([this]):ze.add(this));var s=a.stack;this.componentDidCatch(a.value,{componentStack:s!==null?s:""})})}function Fh(n,e,t,a,l){if(t.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=t.alternate,e!==null&&Ia(e,t,l,!0),t=_n.current,t!==null){switch(t.tag){case 13:return Pn===null?Zi():t.alternate===null&&W===0&&(W=3),t.flags&=-257,t.flags|=65536,t.lanes=l,a===Di?t.flags|=16384:(e=t.updateQueue,e===null?t.updateQueue=new Set([a]):e.add(a),ei(n,a,l)),!1;case 22:return t.flags|=65536,a===Di?t.flags|=16384:(e=t.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},t.updateQueue=e):(t=e.retryQueue,t===null?e.retryQueue=new Set([a]):t.add(a)),ei(n,a,l)),!1}throw Error(y(435,t.tag))}return ei(n,a,l),Zi(),!1}if(q)return e=_n.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=l,a!==wi&&(n=Error(y(422),{cause:a}),Oa(Ln(n,t)))):(a!==wi&&(e=Error(y(423),{cause:a}),Oa(Ln(e,t))),n=n.current.alternate,n.flags|=65536,l&=-l,n.lanes|=l,a=Ln(a,t),l=Xi(n.stateNode,a,l),Yr(n,l),W!==4&&(W=2)),!1;var r=Error(y(520),{cause:a});if(r=Ln(r,t),Ta===null?Ta=[r]:Ta.push(r),W!==4&&(W=2),e===null)return!0;a=Ln(a,t),t=e;do{switch(t.tag){case 3:return t.flags|=65536,n=l&-l,t.lanes|=n,n=Xi(t.stateNode,a,n),Yr(t,n),!1;case 1:if(e=t.type,r=t.stateNode,(t.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(ze===null||!ze.has(r))))return t.flags|=65536,l&=-l,t.lanes|=l,l=lf(l),rf(l,n,t,a),Yr(t,l),!1}t=t.return}while(t!==null);return!1}var sf=Error(y(461)),cn=!1;function hn(n,e,t,a){e.child=n===null?$c(e,null,t,a):Gt(e,n.child,t,a)}function Qu(n,e,t,a,l){t=t.render;var r=e.ref;if("ref"in a){var i={};for(var s in a)s!=="ref"&&(i[s]=a[s])}else i=a;return et(e),a=Ns(n,e,t,i,r,l),s=Cs(),n!==null&&!cn?(Ms(n,e,l),de(n,e,l)):(q&&s&&ys(e),e.flags|=1,hn(n,e,a,l),e.child)}function Vu(n,e,t,a,l){if(n===null){var r=t.type;return typeof r=="function"&&!bs(r)&&r.defaultProps===void 0&&t.compare===null?(e.tag=15,e.type=r,uf(n,e,r,a,l)):(n=Al(t.type,null,a,e,e.mode,l),n.ref=e.ref,n.return=e,e.child=n)}if(r=n.child,!Hs(n,l)){var i=r.memoizedProps;if(t=t.compare,t=t!==null?t:Da,t(i,a)&&n.ref===e.ref)return de(n,e,l)}return e.flags|=1,n=ce(r,a),n.ref=e.ref,n.return=e,e.child=n}function uf(n,e,t,a,l){if(n!==null){var r=n.memoizedProps;if(Da(r,a)&&n.ref===e.ref)if(cn=!1,e.pendingProps=a=r,Hs(n,l))n.flags&131072&&(cn=!0);else return e.lanes=n.lanes,de(n,e,l)}return Li(n,e,t,a,l)}function of(n,e,t){var a=e.pendingProps,l=a.children,r=n!==null?n.memoizedState:null;if(a.mode==="hidden"){if(e.flags&128){if(a=r!==null?r.baseLanes|t:t,n!==null){for(l=e.child=n.child,r=0;l!==null;)r=r|l.lanes|l.childLanes,l=l.sibling;e.childLanes=r&~a}else e.childLanes=0,e.child=null;return Zu(n,e,a,t)}if(t&536870912)e.memoizedState={baseLanes:0,cachePool:null},n!==null&&wl(e,r!==null?r.cachePool:null),r!==null?ju(e,r):ji(),nf(e);else return e.lanes=e.childLanes=536870912,Zu(n,e,r!==null?r.baseLanes|t:t,t)}else r!==null?(wl(e,r.cachePool),ju(e,r),Te(),e.memoizedState=null):(n!==null&&wl(e,null),ji(),Te());return hn(n,e,l,t),e.child}function Zu(n,e,t,a){var l=xs();return l=l===null?null:{parent:an._currentValue,pool:l},e.memoizedState={baseLanes:t,cachePool:l},n!==null&&wl(e,null),ji(),nf(e),n!==null&&Ia(n,e,a,!0),null}function Ml(n,e){var t=e.ref;if(t===null)n!==null&&n.ref!==null&&(e.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(y(284));(n===null||n.ref!==t)&&(e.flags|=4194816)}}function Li(n,e,t,a,l){return et(e),t=Ns(n,e,t,a,void 0,l),a=Cs(),n!==null&&!cn?(Ms(n,e,l),de(n,e,l)):(q&&a&&ys(e),e.flags|=1,hn(n,e,t,l),e.child)}function Ku(n,e,t,a,l,r){return et(e),e.updateQueue=null,t=Ec(e,a,t,l),Sc(n),a=Cs(),n!==null&&!cn?(Ms(n,e,r),de(n,e,r)):(q&&a&&ys(e),e.flags|=1,hn(n,e,t,r),e.child)}function Iu(n,e,t,a,l){if(et(e),e.stateNode===null){var r=xt,i=t.contextType;typeof i=="object"&&i!==null&&(r=vn(i)),r=new t(a,r),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Hi,e.stateNode=r,r._reactInternals=e,r=e.stateNode,r.props=a,r.state=e.memoizedState,r.refs={},Ts(e),i=t.contextType,r.context=typeof i=="object"&&i!==null?vn(i):xt,r.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Qr(e,t,i,a),r.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(i=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),i!==r.state&&Hi.enqueueReplaceState(r,r.state,null),ya(e,a,r,l),ba(),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(n===null){r=e.stateNode;var s=e.memoizedProps,u=at(t,s);r.props=u;var c=r.context,p=t.contextType;i=xt,typeof p=="object"&&p!==null&&(i=vn(p));var g=t.getDerivedStateFromProps;p=typeof g=="function"||typeof r.getSnapshotBeforeUpdate=="function",s=e.pendingProps!==s,p||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s||c!==i)&&Yu(e,r,a,i),Se=!1;var f=e.memoizedState;r.state=f,ya(e,a,r,l),ba(),c=e.memoizedState,s||f!==c||Se?(typeof g=="function"&&(Qr(e,t,g,a),c=e.memoizedState),(u=Se||_u(e,t,u,a,f,c,i))?(p||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(e.flags|=4194308)):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=c),r.props=a,r.state=c,r.context=i,a=u):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{r=e.stateNode,Oi(n,e),i=e.memoizedProps,p=at(t,i),r.props=p,g=e.pendingProps,f=r.context,c=t.contextType,u=xt,typeof c=="object"&&c!==null&&(u=vn(c)),s=t.getDerivedStateFromProps,(c=typeof s=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(i!==g||f!==u)&&Yu(e,r,a,u),Se=!1,f=e.memoizedState,r.state=f,ya(e,a,r,l),ba();var h=e.memoizedState;i!==g||f!==h||Se||n!==null&&n.dependencies!==null&&kl(n.dependencies)?(typeof s=="function"&&(Qr(e,t,s,a),h=e.memoizedState),(p=Se||_u(e,t,p,a,f,h,u)||n!==null&&n.dependencies!==null&&kl(n.dependencies))?(c||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(a,h,u),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(a,h,u)),typeof r.componentDidUpdate=="function"&&(e.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof r.componentDidUpdate!="function"||i===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||i===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=h),r.props=a,r.state=h,r.context=u,a=p):(typeof r.componentDidUpdate!="function"||i===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||i===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),a=!1)}return r=a,Ml(n,e),a=(e.flags&128)!==0,r||a?(r=e.stateNode,t=a&&typeof t.getDerivedStateFromError!="function"?null:r.render(),e.flags|=1,n!==null&&a?(e.child=Gt(e,n.child,null,l),e.child=Gt(e,null,t,l)):hn(n,e,t,l),e.memoizedState=r.state,n=e.child):n=de(n,e,l),n}function Ju(n,e,t,a){return Ka(),e.flags|=256,hn(n,e,t,a),e.child}var Vr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Zr(n){return{baseLanes:n,cachePool:gc()}}function Kr(n,e,t){return n=n!==null?n.childLanes&~t:0,e&&(n|=Gn),n}function cf(n,e,t){var a=e.pendingProps,l=!1,r=(e.flags&128)!==0,i;if((i=r)||(i=n!==null&&n.memoizedState===null?!1:(ln.current&2)!==0),i&&(l=!0,e.flags&=-129),i=(e.flags&32)!==0,e.flags&=-33,n===null){if(q){if(l?xe(e):Te(),q){var s=J,u;if(u=s){n:{for(u=s,s=In;u.nodeType!==8;){if(!s){s=null;break n}if(u=Vn(u.nextSibling),u===null){s=null;break n}}s=u}s!==null?(e.memoizedState={dehydrated:s,treeContext:Je!==null?{id:ie,overflow:se}:null,retryLane:536870912,hydrationErrors:null},u=Mn(18,null,null,0),u.stateNode=s,u.return=e,e.child=u,yn=e,J=null,u=!0):u=!1}u||nt(e)}if(s=e.memoizedState,s!==null&&(s=s.dehydrated,s!==null))return $i(s)?e.lanes=32:e.lanes=536870912,null;oe(e)}return s=a.children,a=a.fallback,l?(Te(),l=e.mode,s=Fl({mode:"hidden",children:s},l),a=Ie(a,l,t,null),s.return=e,a.return=e,s.sibling=a,e.child=s,l=e.child,l.memoizedState=Zr(t),l.childLanes=Kr(n,i,t),e.memoizedState=Vr,a):(xe(e),Gi(e,s))}if(u=n.memoizedState,u!==null&&(s=u.dehydrated,s!==null)){if(r)e.flags&256?(xe(e),e.flags&=-257,e=Ir(n,e,t)):e.memoizedState!==null?(Te(),e.child=n.child,e.flags|=128,e=null):(Te(),l=a.fallback,s=e.mode,a=Fl({mode:"visible",children:a.children},s),l=Ie(l,s,t,null),l.flags|=2,a.return=e,l.return=e,a.sibling=l,e.child=a,Gt(e,n.child,null,t),a=e.child,a.memoizedState=Zr(t),a.childLanes=Kr(n,i,t),e.memoizedState=Vr,e=l);else if(xe(e),$i(s)){if(i=s.nextSibling&&s.nextSibling.dataset,i)var c=i.dgst;i=c,a=Error(y(419)),a.stack="",a.digest=i,Oa({value:a,source:null,stack:null}),e=Ir(n,e,t)}else if(cn||Ia(n,e,t,!1),i=(t&n.childLanes)!==0,cn||i){if(i=k,i!==null&&(a=t&-t,a=a&42?1:ss(a),a=a&(i.suspendedLanes|t)?0:a,a!==0&&a!==u.retryLane))throw u.retryLane=a,Kt(n,a),zn(i,n,a),sf;s.data==="$?"||Zi(),e=Ir(n,e,t)}else s.data==="$?"?(e.flags|=192,e.child=n.child,e=null):(n=u.treeContext,J=Vn(s.nextSibling),yn=e,q=!0,We=null,In=!1,n!==null&&(qn[Hn++]=ie,qn[Hn++]=se,qn[Hn++]=Je,ie=n.id,se=n.overflow,Je=e),e=Gi(e,a.children),e.flags|=4096);return e}return l?(Te(),l=a.fallback,s=e.mode,u=n.child,c=u.sibling,a=ce(u,{mode:"hidden",children:a.children}),a.subtreeFlags=u.subtreeFlags&65011712,c!==null?l=ce(c,l):(l=Ie(l,s,t,null),l.flags|=2),l.return=e,a.return=e,a.sibling=l,e.child=a,a=l,l=e.child,s=n.child.memoizedState,s===null?s=Zr(t):(u=s.cachePool,u!==null?(c=an._currentValue,u=u.parent!==c?{parent:c,pool:c}:u):u=gc(),s={baseLanes:s.baseLanes|t,cachePool:u}),l.memoizedState=s,l.childLanes=Kr(n,i,t),e.memoizedState=Vr,a):(xe(e),t=n.child,n=t.sibling,t=ce(t,{mode:"visible",children:a.children}),t.return=e,t.sibling=null,n!==null&&(i=e.deletions,i===null?(e.deletions=[n],e.flags|=16):i.push(n)),e.child=t,e.memoizedState=null,t)}function Gi(n,e){return e=Fl({mode:"visible",children:e},n.mode),e.return=n,n.child=e}function Fl(n,e){return n=Mn(22,n,null,e),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function Ir(n,e,t){return Gt(e,n.child,null,t),n=Gi(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function Wu(n,e,t){n.lanes|=e;var a=n.alternate;a!==null&&(a.lanes|=e),Ci(n.return,e,t)}function Jr(n,e,t,a,l){var r=n.memoizedState;r===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:l}:(r.isBackwards=e,r.rendering=null,r.renderingStartTime=0,r.last=a,r.tail=t,r.tailMode=l)}function ff(n,e,t){var a=e.pendingProps,l=a.revealOrder,r=a.tail;if(hn(n,e,a.children,t),a=ln.current,a&2)a=a&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)n:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Wu(n,t,e);else if(n.tag===19)Wu(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break n;for(;n.sibling===null;){if(n.return===null||n.return===e)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}a&=1}switch(K(ln,a),l){case"forwards":for(t=e.child,l=null;t!==null;)n=t.alternate,n!==null&&Il(n)===null&&(l=t),t=t.sibling;t=l,t===null?(l=e.child,e.child=null):(l=t.sibling,t.sibling=null),Jr(e,!1,l,t,r);break;case"backwards":for(t=null,l=e.child,e.child=null;l!==null;){if(n=l.alternate,n!==null&&Il(n)===null){e.child=l;break}n=l.sibling,l.sibling=t,t=l,l=n}Jr(e,!0,t,null,r);break;case"together":Jr(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function de(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Le|=e.lanes,!(t&e.childLanes))if(n!==null){if(Ia(n,e,t,!1),(t&e.childLanes)===0)return null}else return null;if(n!==null&&e.child!==n.child)throw Error(y(153));if(e.child!==null){for(n=e.child,t=ce(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=ce(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function Hs(n,e){return n.lanes&e?!0:(n=n.dependencies,!!(n!==null&&kl(n)))}function Ph(n,e,t){switch(e.tag){case 3:Rl(e,e.stateNode.containerInfo),Ee(e,an,n.memoizedState.cache),Ka();break;case 27:case 5:gi(e);break;case 4:Rl(e,e.stateNode.containerInfo);break;case 10:Ee(e,e.type,e.memoizedProps.value);break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(xe(e),e.flags|=128,null):t&e.child.childLanes?cf(n,e,t):(xe(e),n=de(n,e,t),n!==null?n.sibling:null);xe(e);break;case 19:var l=(n.flags&128)!==0;if(a=(t&e.childLanes)!==0,a||(Ia(n,e,t,!1),a=(t&e.childLanes)!==0),l){if(a)return ff(n,e,t);e.flags|=128}if(l=e.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),K(ln,ln.current),a)break;return null;case 22:case 23:return e.lanes=0,of(n,e,t);case 24:Ee(e,an,n.memoizedState.cache)}return de(n,e,t)}function mf(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps)cn=!0;else{if(!Hs(n,t)&&!(e.flags&128))return cn=!1,Ph(n,e,t);cn=!!(n.flags&131072)}else cn=!1,q&&e.flags&1048576&&hc(e,Yl,e.index);switch(e.lanes=0,e.tag){case 16:n:{n=e.pendingProps;var a=e.elementType,l=a._init;if(a=l(a._payload),e.type=a,typeof a=="function")bs(a)?(n=at(a,n),e.tag=1,e=Iu(null,e,a,n,t)):(e.tag=0,e=Li(null,e,a,n,t));else{if(a!=null){if(l=a.$$typeof,l===ls){e.tag=11,e=Qu(null,e,a,n,t);break n}else if(l===rs){e.tag=14,e=Vu(null,e,a,n,t);break n}}throw e=hi(a)||a,Error(y(306,e,""))}}return e;case 0:return Li(n,e,e.type,e.pendingProps,t);case 1:return a=e.type,l=at(a,e.pendingProps),Iu(n,e,a,l,t);case 3:n:{if(Rl(e,e.stateNode.containerInfo),n===null)throw Error(y(387));a=e.pendingProps;var r=e.memoizedState;l=r.element,Oi(n,e),ya(e,a,null,t);var i=e.memoizedState;if(a=i.cache,Ee(e,an,a),a!==r.cache&&Mi(e,[an],t,!0),ba(),a=i.element,r.isDehydrated)if(r={element:a,isDehydrated:!1,cache:i.cache},e.updateQueue.baseState=r,e.memoizedState=r,e.flags&256){e=Ju(n,e,a,t);break n}else if(a!==l){l=Ln(Error(y(424)),e),Oa(l),e=Ju(n,e,a,t);break n}else{switch(n=e.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(J=Vn(n.firstChild),yn=e,q=!0,We=null,In=!0,t=$c(e,null,a,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(Ka(),a===l){e=de(n,e,t);break n}hn(n,e,a,t)}e=e.child}return e;case 26:return Ml(n,e),n===null?(t=ho(e.type,null,e.pendingProps,null))?e.memoizedState=t:q||(t=e.type,n=e.pendingProps,a=lr(Ue.current).createElement(t),a[pn]=e,a[Tn]=n,gn(a,t,n),on(a),e.stateNode=a):e.memoizedState=ho(e.type,n.memoizedProps,e.pendingProps,n.memoizedState),null;case 27:return gi(e),n===null&&q&&(a=e.stateNode=Pf(e.type,e.pendingProps,Ue.current),yn=e,In=!0,l=J,_e(e.type)?(ns=l,J=Vn(a.firstChild)):J=l),hn(n,e,e.pendingProps.children,t),Ml(n,e),n===null&&(e.flags|=4194304),e.child;case 5:return n===null&&q&&((l=a=J)&&(a=Nd(a,e.type,e.pendingProps,In),a!==null?(e.stateNode=a,yn=e,J=Vn(a.firstChild),In=!1,l=!0):l=!1),l||nt(e)),gi(e),l=e.type,r=e.pendingProps,i=n!==null?n.memoizedProps:null,a=r.children,Fi(l,r)?a=null:i!==null&&Fi(l,i)&&(e.flags|=32),e.memoizedState!==null&&(l=Ns(n,e,Qh,null,null,t),Ha._currentValue=l),Ml(n,e),hn(n,e,a,t),e.child;case 6:return n===null&&q&&((n=t=J)&&(t=Cd(t,e.pendingProps,In),t!==null?(e.stateNode=t,yn=e,J=null,n=!0):n=!1),n||nt(e)),null;case 13:return cf(n,e,t);case 4:return Rl(e,e.stateNode.containerInfo),a=e.pendingProps,n===null?e.child=Gt(e,null,a,t):hn(n,e,a,t),e.child;case 11:return Qu(n,e,e.type,e.pendingProps,t);case 7:return hn(n,e,e.pendingProps,t),e.child;case 8:return hn(n,e,e.pendingProps.children,t),e.child;case 12:return hn(n,e,e.pendingProps.children,t),e.child;case 10:return a=e.pendingProps,Ee(e,e.type,a.value),hn(n,e,a.children,t),e.child;case 9:return l=e.type._context,a=e.pendingProps.children,et(e),l=vn(l),a=a(l),e.flags|=1,hn(n,e,a,t),e.child;case 14:return Vu(n,e,e.type,e.pendingProps,t);case 15:return uf(n,e,e.type,e.pendingProps,t);case 19:return ff(n,e,t);case 31:return a=e.pendingProps,t=e.mode,a={mode:a.mode,children:a.children},n===null?(t=Fl(a,t),t.ref=e.ref,e.child=t,t.return=e,e=t):(t=ce(n.child,a),t.ref=e.ref,e.child=t,t.return=e,e=t),e;case 22:return of(n,e,t);case 24:return et(e),a=vn(an),n===null?(l=xs(),l===null&&(l=k,r=Es(),l.pooledCache=r,r.refCount++,r!==null&&(l.pooledCacheLanes|=t),l=r),e.memoizedState={parent:a,cache:l},Ts(e),Ee(e,an,l)):(n.lanes&t&&(Oi(n,e),ya(e,null,null,t),ba()),l=n.memoizedState,r=e.memoizedState,l.parent!==a?(l={parent:a,cache:a},e.memoizedState=l,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=l),Ee(e,an,a)):(a=r.cache,Ee(e,an,a),a!==l.cache&&Mi(e,[an],t,!0))),hn(n,e,e.pendingProps.children,t),e.child;case 29:throw e.pendingProps}throw Error(y(156,e.tag))}function te(n){n.flags|=4}function Fu(n,e){if(e.type!=="stylesheet"||e.state.loading&4)n.flags&=-16777217;else if(n.flags|=16777216,!em(e)){if(e=_n.current,e!==null&&((R&4194048)===R?Pn!==null:(R&62914560)!==R&&!(R&536870912)||e!==Pn))throw pa=Di,pc;n.flags|=8192}}function gl(n,e){e!==null&&(n.flags|=4),n.flags&16384&&(e=n.tag!==22?Ho():536870912,n.lanes|=e,_t|=e)}function la(n,e){if(!q)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:a.sibling=null}}function I(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,a=0;if(e)for(var l=n.child;l!==null;)t|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=n,l=l.sibling;else for(l=n.child;l!==null;)t|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=n,l=l.sibling;return n.subtreeFlags|=a,n.childLanes=t,e}function $h(n,e,t){var a=e.pendingProps;switch(Ss(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return I(e),null;case 1:return I(e),null;case 3:return t=e.stateNode,a=null,n!==null&&(a=n.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),fe(an),Bt(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(n===null||n.child===null)&&(ta(e)?te(e):n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Cu())),I(e),null;case 26:return t=e.memoizedState,n===null?(te(e),t!==null?(I(e),Fu(e,t)):(I(e),e.flags&=-16777217)):t?t!==n.memoizedState?(te(e),I(e),Fu(e,t)):(I(e),e.flags&=-16777217):(n.memoizedProps!==a&&te(e),I(e),e.flags&=-16777217),null;case 27:ql(e),t=Ue.current;var l=e.type;if(n!==null&&e.stateNode!=null)n.memoizedProps!==a&&te(e);else{if(!a){if(e.stateNode===null)throw Error(y(166));return I(e),null}n=Wn.current,ta(e)?wu(e):(n=Pf(l,a,t),e.stateNode=n,te(e))}return I(e),null;case 5:if(ql(e),t=e.type,n!==null&&e.stateNode!=null)n.memoizedProps!==a&&te(e);else{if(!a){if(e.stateNode===null)throw Error(y(166));return I(e),null}if(n=Wn.current,ta(e))wu(e);else{switch(l=lr(Ue.current),n){case 1:n=l.createElementNS("http://www.w3.org/2000/svg",t);break;case 2:n=l.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;default:switch(t){case"svg":n=l.createElementNS("http://www.w3.org/2000/svg",t);break;case"math":n=l.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;case"script":n=l.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof a.is=="string"?l.createElement("select",{is:a.is}):l.createElement("select"),a.multiple?n.multiple=!0:a.size&&(n.size=a.size);break;default:n=typeof a.is=="string"?l.createElement(t,{is:a.is}):l.createElement(t)}}n[pn]=e,n[Tn]=a;n:for(l=e.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===e)break n;for(;l.sibling===null;){if(l.return===null||l.return===e)break n;l=l.return}l.sibling.return=l.return,l=l.sibling}e.stateNode=n;n:switch(gn(n,t,a),t){case"button":case"input":case"select":case"textarea":n=!!a.autoFocus;break n;case"img":n=!0;break n;default:n=!1}n&&te(e)}}return I(e),e.flags&=-16777217,null;case 6:if(n&&e.stateNode!=null)n.memoizedProps!==a&&te(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(y(166));if(n=Ue.current,ta(e)){if(n=e.stateNode,t=e.memoizedProps,a=null,l=yn,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}n[pn]=e,n=!!(n.nodeValue===t||a!==null&&a.suppressHydrationWarning===!0||Jf(n.nodeValue,t)),n||nt(e)}else n=lr(n).createTextNode(a),n[pn]=e,e.stateNode=n}return I(e),null;case 13:if(a=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(l=ta(e),a!==null&&a.dehydrated!==null){if(n===null){if(!l)throw Error(y(318));if(l=e.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(y(317));l[pn]=e}else Ka(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;I(e),l=!1}else l=Cu(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=l),l=!0;if(!l)return e.flags&256?(oe(e),e):(oe(e),null)}if(oe(e),e.flags&128)return e.lanes=t,e;if(t=a!==null,n=n!==null&&n.memoizedState!==null,t){a=e.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool);var r=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(r=a.memoizedState.cachePool.pool),r!==l&&(a.flags|=2048)}return t!==n&&t&&(e.child.flags|=8192),gl(e,e.updateQueue),I(e),null;case 4:return Bt(),n===null&&Vs(e.stateNode.containerInfo),I(e),null;case 10:return fe(e.type),I(e),null;case 19:if(fn(ln),l=e.memoizedState,l===null)return I(e),null;if(a=(e.flags&128)!==0,r=l.rendering,r===null)if(a)la(l,!1);else{if(W!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(r=Il(n),r!==null){for(e.flags|=128,la(l,!1),n=r.updateQueue,e.updateQueue=n,gl(e,n),e.subtreeFlags=0,n=t,t=e.child;t!==null;)mc(t,n),t=t.sibling;return K(ln,ln.current&1|2),e.child}n=n.sibling}l.tail!==null&&Fn()>$l&&(e.flags|=128,a=!0,la(l,!1),e.lanes=4194304)}else{if(!a)if(n=Il(r),n!==null){if(e.flags|=128,a=!0,n=n.updateQueue,e.updateQueue=n,gl(e,n),la(l,!0),l.tail===null&&l.tailMode==="hidden"&&!r.alternate&&!q)return I(e),null}else 2*Fn()-l.renderingStartTime>$l&&t!==536870912&&(e.flags|=128,a=!0,la(l,!1),e.lanes=4194304);l.isBackwards?(r.sibling=e.child,e.child=r):(n=l.last,n!==null?n.sibling=r:e.child=r,l.last=r)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Fn(),e.sibling=null,n=ln.current,K(ln,a?n&1|2:n&1),e):(I(e),null);case 22:case 23:return oe(e),As(),a=e.memoizedState!==null,n!==null?n.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?t&536870912&&!(e.flags&128)&&(I(e),e.subtreeFlags&6&&(e.flags|=8192)):I(e),t=e.updateQueue,t!==null&&gl(e,t.retryQueue),t=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==t&&(e.flags|=2048),n!==null&&fn(Fe),null;case 24:return t=null,n!==null&&(t=n.memoizedState.cache),e.memoizedState.cache!==t&&(e.flags|=2048),fe(an),I(e),null;case 25:return null;case 30:return null}throw Error(y(156,e.tag))}function nd(n,e){switch(Ss(e),e.tag){case 1:return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return fe(an),Bt(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 26:case 27:case 5:return ql(e),null;case 13:if(oe(e),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(y(340));Ka()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return fn(ln),null;case 4:return Bt(),null;case 10:return fe(e.type),null;case 22:case 23:return oe(e),As(),n!==null&&fn(Fe),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 24:return fe(an),null;case 25:return null;default:return null}}function hf(n,e){switch(Ss(e),e.tag){case 3:fe(an),Bt();break;case 26:case 27:case 5:ql(e);break;case 4:Bt();break;case 13:oe(e);break;case 19:fn(ln);break;case 10:fe(e.type);break;case 22:case 23:oe(e),As(),n!==null&&fn(Fe);break;case 24:fe(an)}}function $a(n,e){try{var t=e.updateQueue,a=t!==null?t.lastEffect:null;if(a!==null){var l=a.next;t=l;do{if((t.tag&n)===n){a=void 0;var r=t.create,i=t.inst;a=r(),i.destroy=a}t=t.next}while(t!==l)}}catch(s){Y(e,e.return,s)}}function Xe(n,e,t){try{var a=e.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var r=l.next;a=r;do{if((a.tag&n)===n){var i=a.inst,s=i.destroy;if(s!==void 0){i.destroy=void 0,l=e;var u=t,c=s;try{c()}catch(p){Y(l,u,p)}}}a=a.next}while(a!==r)}}catch(p){Y(e,e.return,p)}}function df(n){var e=n.updateQueue;if(e!==null){var t=n.stateNode;try{yc(e,t)}catch(a){Y(n,n.return,a)}}}function gf(n,e,t){t.props=at(n.type,n.memoizedProps),t.state=n.memoizedState;try{t.componentWillUnmount()}catch(a){Y(n,e,a)}}function Ea(n,e){try{var t=n.ref;if(t!==null){switch(n.tag){case 26:case 27:case 5:var a=n.stateNode;break;case 30:a=n.stateNode;break;default:a=n.stateNode}typeof t=="function"?n.refCleanup=t(a):t.current=a}}catch(l){Y(n,e,l)}}function Jn(n,e){var t=n.ref,a=n.refCleanup;if(t!==null)if(typeof a=="function")try{a()}catch(l){Y(n,e,l)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(l){Y(n,e,l)}else t.current=null}function pf(n){var e=n.type,t=n.memoizedProps,a=n.stateNode;try{n:switch(e){case"button":case"input":case"select":case"textarea":t.autoFocus&&a.focus();break n;case"img":t.src?a.src=t.src:t.srcSet&&(a.srcset=t.srcSet)}}catch(l){Y(n,n.return,l)}}function Wr(n,e,t){try{var a=n.stateNode;Ed(a,n.type,t,e),a[Tn]=e}catch(l){Y(n,n.return,l)}}function vf(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&_e(n.type)||n.tag===4}function Fr(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||vf(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&_e(n.type)||n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function _i(n,e,t){var a=n.tag;if(a===5||a===6)n=n.stateNode,e?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(n,e):(e=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,e.appendChild(n),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=wr));else if(a!==4&&(a===27&&_e(n.type)&&(t=n.stateNode,e=null),n=n.child,n!==null))for(_i(n,e,t),n=n.sibling;n!==null;)_i(n,e,t),n=n.sibling}function Pl(n,e,t){var a=n.tag;if(a===5||a===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(a!==4&&(a===27&&_e(n.type)&&(t=n.stateNode),n=n.child,n!==null))for(Pl(n,e,t),n=n.sibling;n!==null;)Pl(n,e,t),n=n.sibling}function bf(n){var e=n.stateNode,t=n.memoizedProps;try{for(var a=n.type,l=e.attributes;l.length;)e.removeAttributeNode(l[0]);gn(e,a,t),e[pn]=n,e[Tn]=t}catch(r){Y(n,n.return,r)}}var le=!1,$=!1,Pr=!1,Pu=typeof WeakSet=="function"?WeakSet:Set,un=null;function ed(n,e){if(n=n.containerInfo,Ji=ur,n=lc(n),gs(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else n:{t=(t=n.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var l=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{t.nodeType,r.nodeType}catch{t=null;break n}var i=0,s=-1,u=-1,c=0,p=0,g=n,f=null;e:for(;;){for(var h;g!==t||l!==0&&g.nodeType!==3||(s=i+l),g!==r||a!==0&&g.nodeType!==3||(u=i+a),g.nodeType===3&&(i+=g.nodeValue.length),(h=g.firstChild)!==null;)f=g,g=h;for(;;){if(g===n)break e;if(f===t&&++c===l&&(s=i),f===r&&++p===a&&(u=i),(h=g.nextSibling)!==null)break;g=f,f=g.parentNode}g=h}t=s===-1||u===-1?null:{start:s,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(Wi={focusedElem:n,selectionRange:t},ur=!1,un=e;un!==null;)if(e=un,n=e.child,(e.subtreeFlags&1024)!==0&&n!==null)n.return=e,un=n;else for(;un!==null;){switch(e=un,r=e.alternate,n=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if(n&1024&&r!==null){n=void 0,t=e,l=r.memoizedProps,r=r.memoizedState,a=t.stateNode;try{var E=at(t.type,l,t.elementType===t.type);n=a.getSnapshotBeforeUpdate(E,r),a.__reactInternalSnapshotBeforeUpdate=n}catch(S){Y(t,t.return,S)}}break;case 3:if(n&1024){if(n=e.stateNode.containerInfo,t=n.nodeType,t===9)Pi(n);else if(t===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Pi(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(n&1024)throw Error(y(163))}if(n=e.sibling,n!==null){n.return=e.return,un=n;break}un=e.return}}function yf(n,e,t){var a=t.flags;switch(t.tag){case 0:case 11:case 15:ve(n,t),a&4&&$a(5,t);break;case 1:if(ve(n,t),a&4)if(n=t.stateNode,e===null)try{n.componentDidMount()}catch(i){Y(t,t.return,i)}else{var l=at(t.type,e.memoizedProps);e=e.memoizedState;try{n.componentDidUpdate(l,e,n.__reactInternalSnapshotBeforeUpdate)}catch(i){Y(t,t.return,i)}}a&64&&df(t),a&512&&Ea(t,t.return);break;case 3:if(ve(n,t),a&64&&(n=t.updateQueue,n!==null)){if(e=null,t.child!==null)switch(t.child.tag){case 27:case 5:e=t.child.stateNode;break;case 1:e=t.child.stateNode}try{yc(n,e)}catch(i){Y(t,t.return,i)}}break;case 27:e===null&&a&4&&bf(t);case 26:case 5:ve(n,t),e===null&&a&4&&pf(t),a&512&&Ea(t,t.return);break;case 12:ve(n,t);break;case 13:ve(n,t),a&4&&xf(n,t),a&64&&(n=t.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(t=cd.bind(null,t),Md(n,t))));break;case 22:if(a=t.memoizedState!==null||le,!a){e=e!==null&&e.memoizedState!==null||$,l=le;var r=$;le=a,($=e)&&!r?be(n,t,(t.subtreeFlags&8772)!==0):ve(n,t),le=l,$=r}break;case 30:break;default:ve(n,t)}}function Sf(n){var e=n.alternate;e!==null&&(n.alternate=null,Sf(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&os(e)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var Z=null,En=!1;function ae(n,e,t){for(t=t.child;t!==null;)Ef(n,e,t),t=t.sibling}function Ef(n,e,t){if(Un&&typeof Un.onCommitFiberUnmount=="function")try{Un.onCommitFiberUnmount(Ya,t)}catch{}switch(t.tag){case 26:$||Jn(t,e),ae(n,e,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:$||Jn(t,e);var a=Z,l=En;_e(t.type)&&(Z=t.stateNode,En=!1),ae(n,e,t),wa(t.stateNode),Z=a,En=l;break;case 5:$||Jn(t,e);case 6:if(a=Z,l=En,Z=null,ae(n,e,t),Z=a,En=l,Z!==null)if(En)try{(Z.nodeType===9?Z.body:Z.nodeName==="HTML"?Z.ownerDocument.body:Z).removeChild(t.stateNode)}catch(r){Y(t,e,r)}else try{Z.removeChild(t.stateNode)}catch(r){Y(t,e,r)}break;case 18:Z!==null&&(En?(n=Z,co(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.stateNode),Ga(n)):co(Z,t.stateNode));break;case 4:a=Z,l=En,Z=t.stateNode.containerInfo,En=!0,ae(n,e,t),Z=a,En=l;break;case 0:case 11:case 14:case 15:$||Xe(2,t,e),$||Xe(4,t,e),ae(n,e,t);break;case 1:$||(Jn(t,e),a=t.stateNode,typeof a.componentWillUnmount=="function"&&gf(t,e,a)),ae(n,e,t);break;case 21:ae(n,e,t);break;case 22:$=(a=$)||t.memoizedState!==null,ae(n,e,t),$=a;break;default:ae(n,e,t)}}function xf(n,e){if(e.memoizedState===null&&(n=e.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Ga(n)}catch(t){Y(e,e.return,t)}}function td(n){switch(n.tag){case 13:case 19:var e=n.stateNode;return e===null&&(e=n.stateNode=new Pu),e;case 22:return n=n.stateNode,e=n._retryCache,e===null&&(e=n._retryCache=new Pu),e;default:throw Error(y(435,n.tag))}}function $r(n,e){var t=td(n);e.forEach(function(a){var l=fd.bind(null,n,a);t.has(a)||(t.add(a),a.then(l,l))})}function wn(n,e){var t=e.deletions;if(t!==null)for(var a=0;a<t.length;a++){var l=t[a],r=n,i=e,s=i;n:for(;s!==null;){switch(s.tag){case 27:if(_e(s.type)){Z=s.stateNode,En=!1;break n}break;case 5:Z=s.stateNode,En=!1;break n;case 3:case 4:Z=s.stateNode.containerInfo,En=!0;break n}s=s.return}if(Z===null)throw Error(y(160));Ef(r,i,l),Z=null,En=!1,r=l.alternate,r!==null&&(r.return=null),l.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)Tf(e,n),e=e.sibling}var Qn=null;function Tf(n,e){var t=n.alternate,a=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:wn(e,n),Nn(n),a&4&&(Xe(3,n,n.return),$a(3,n),Xe(5,n,n.return));break;case 1:wn(e,n),Nn(n),a&512&&($||t===null||Jn(t,t.return)),a&64&&le&&(n=n.updateQueue,n!==null&&(a=n.callbacks,a!==null&&(t=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=t===null?a:t.concat(a))));break;case 26:var l=Qn;if(wn(e,n),Nn(n),a&512&&($||t===null||Jn(t,t.return)),a&4){var r=t!==null?t.memoizedState:null;if(a=n.memoizedState,t===null)if(a===null)if(n.stateNode===null){n:{a=n.type,t=n.memoizedProps,l=l.ownerDocument||l;e:switch(a){case"title":r=l.getElementsByTagName("title")[0],(!r||r[Va]||r[pn]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(a),l.head.insertBefore(r,l.querySelector("head > title"))),gn(r,a,t),r[pn]=n,on(r),a=r;break n;case"link":var i=po("link","href",l).get(a+(t.href||""));if(i){for(var s=0;s<i.length;s++)if(r=i[s],r.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&r.getAttribute("rel")===(t.rel==null?null:t.rel)&&r.getAttribute("title")===(t.title==null?null:t.title)&&r.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){i.splice(s,1);break e}}r=l.createElement(a),gn(r,a,t),l.head.appendChild(r);break;case"meta":if(i=po("meta","content",l).get(a+(t.content||""))){for(s=0;s<i.length;s++)if(r=i[s],r.getAttribute("content")===(t.content==null?null:""+t.content)&&r.getAttribute("name")===(t.name==null?null:t.name)&&r.getAttribute("property")===(t.property==null?null:t.property)&&r.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&r.getAttribute("charset")===(t.charSet==null?null:t.charSet)){i.splice(s,1);break e}}r=l.createElement(a),gn(r,a,t),l.head.appendChild(r);break;default:throw Error(y(468,a))}r[pn]=n,on(r),a=r}n.stateNode=a}else vo(l,n.type,n.stateNode);else n.stateNode=go(l,a,n.memoizedProps);else r!==a?(r===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):r.count--,a===null?vo(l,n.type,n.stateNode):go(l,a,n.memoizedProps)):a===null&&n.stateNode!==null&&Wr(n,n.memoizedProps,t.memoizedProps)}break;case 27:wn(e,n),Nn(n),a&512&&($||t===null||Jn(t,t.return)),t!==null&&a&4&&Wr(n,n.memoizedProps,t.memoizedProps);break;case 5:if(wn(e,n),Nn(n),a&512&&($||t===null||Jn(t,t.return)),n.flags&32){l=n.stateNode;try{qt(l,"")}catch(h){Y(n,n.return,h)}}a&4&&n.stateNode!=null&&(l=n.memoizedProps,Wr(n,l,t!==null?t.memoizedProps:l)),a&1024&&(Pr=!0);break;case 6:if(wn(e,n),Nn(n),a&4){if(n.stateNode===null)throw Error(y(162));a=n.memoizedProps,t=n.stateNode;try{t.nodeValue=a}catch(h){Y(n,n.return,h)}}break;case 3:if(Ol=null,l=Qn,Qn=rr(e.containerInfo),wn(e,n),Qn=l,Nn(n),a&4&&t!==null&&t.memoizedState.isDehydrated)try{Ga(e.containerInfo)}catch(h){Y(n,n.return,h)}Pr&&(Pr=!1,Af(n));break;case 4:a=Qn,Qn=rr(n.stateNode.containerInfo),wn(e,n),Nn(n),Qn=a;break;case 12:wn(e,n),Nn(n);break;case 13:wn(e,n),Nn(n),n.child.flags&8192&&n.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(Ys=Fn()),a&4&&(a=n.updateQueue,a!==null&&(n.updateQueue=null,$r(n,a)));break;case 22:l=n.memoizedState!==null;var u=t!==null&&t.memoizedState!==null,c=le,p=$;if(le=c||l,$=p||u,wn(e,n),$=p,le=c,Nn(n),a&8192)n:for(e=n.stateNode,e._visibility=l?e._visibility&-2:e._visibility|1,l&&(t===null||u||le||$||Ze(n)),t=null,e=n;;){if(e.tag===5||e.tag===26){if(t===null){u=t=e;try{if(r=u.stateNode,l)i=r.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{s=u.stateNode;var g=u.memoizedProps.style,f=g!=null&&g.hasOwnProperty("display")?g.display:null;s.style.display=f==null||typeof f=="boolean"?"":(""+f).trim()}}catch(h){Y(u,u.return,h)}}}else if(e.tag===6){if(t===null){u=e;try{u.stateNode.nodeValue=l?"":u.memoizedProps}catch(h){Y(u,u.return,h)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===n)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break n;for(;e.sibling===null;){if(e.return===null||e.return===n)break n;t===e&&(t=null),e=e.return}t===e&&(t=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=n.updateQueue,a!==null&&(t=a.retryQueue,t!==null&&(a.retryQueue=null,$r(n,t))));break;case 19:wn(e,n),Nn(n),a&4&&(a=n.updateQueue,a!==null&&(n.updateQueue=null,$r(n,a)));break;case 30:break;case 21:break;default:wn(e,n),Nn(n)}}function Nn(n){var e=n.flags;if(e&2){try{for(var t,a=n.return;a!==null;){if(vf(a)){t=a;break}a=a.return}if(t==null)throw Error(y(160));switch(t.tag){case 27:var l=t.stateNode,r=Fr(n);Pl(n,r,l);break;case 5:var i=t.stateNode;t.flags&32&&(qt(i,""),t.flags&=-33);var s=Fr(n);Pl(n,s,i);break;case 3:case 4:var u=t.stateNode.containerInfo,c=Fr(n);_i(n,c,u);break;default:throw Error(y(161))}}catch(p){Y(n,n.return,p)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function Af(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var e=n;Af(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),n=n.sibling}}function ve(n,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)yf(n,e.alternate,e),e=e.sibling}function Ze(n){for(n=n.child;n!==null;){var e=n;switch(e.tag){case 0:case 11:case 14:case 15:Xe(4,e,e.return),Ze(e);break;case 1:Jn(e,e.return);var t=e.stateNode;typeof t.componentWillUnmount=="function"&&gf(e,e.return,t),Ze(e);break;case 27:wa(e.stateNode);case 26:case 5:Jn(e,e.return),Ze(e);break;case 22:e.memoizedState===null&&Ze(e);break;case 30:Ze(e);break;default:Ze(e)}n=n.sibling}}function be(n,e,t){for(t=t&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,l=n,r=e,i=r.flags;switch(r.tag){case 0:case 11:case 15:be(l,r,t),$a(4,r);break;case 1:if(be(l,r,t),a=r,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(c){Y(a,a.return,c)}if(a=r,l=a.updateQueue,l!==null){var s=a.stateNode;try{var u=l.shared.hiddenCallbacks;if(u!==null)for(l.shared.hiddenCallbacks=null,l=0;l<u.length;l++)bc(u[l],s)}catch(c){Y(a,a.return,c)}}t&&i&64&&df(r),Ea(r,r.return);break;case 27:bf(r);case 26:case 5:be(l,r,t),t&&a===null&&i&4&&pf(r),Ea(r,r.return);break;case 12:be(l,r,t);break;case 13:be(l,r,t),t&&i&4&&xf(l,r);break;case 22:r.memoizedState===null&&be(l,r,t),Ea(r,r.return);break;case 30:break;default:be(l,r,t)}e=e.sibling}}function Xs(n,e){var t=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==t&&(n!=null&&n.refCount++,t!=null&&Ja(t))}function Ls(n,e){n=null,e.alternate!==null&&(n=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==n&&(e.refCount++,n!=null&&Ja(n))}function Kn(n,e,t,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)wf(n,e,t,a),e=e.sibling}function wf(n,e,t,a){var l=e.flags;switch(e.tag){case 0:case 11:case 15:Kn(n,e,t,a),l&2048&&$a(9,e);break;case 1:Kn(n,e,t,a);break;case 3:Kn(n,e,t,a),l&2048&&(n=null,e.alternate!==null&&(n=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==n&&(e.refCount++,n!=null&&Ja(n)));break;case 12:if(l&2048){Kn(n,e,t,a),n=e.stateNode;try{var r=e.memoizedProps,i=r.id,s=r.onPostCommit;typeof s=="function"&&s(i,e.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(u){Y(e,e.return,u)}}else Kn(n,e,t,a);break;case 13:Kn(n,e,t,a);break;case 23:break;case 22:r=e.stateNode,i=e.alternate,e.memoizedState!==null?r._visibility&2?Kn(n,e,t,a):xa(n,e):r._visibility&2?Kn(n,e,t,a):(r._visibility|=2,mt(n,e,t,a,(e.subtreeFlags&10256)!==0)),l&2048&&Xs(i,e);break;case 24:Kn(n,e,t,a),l&2048&&Ls(e.alternate,e);break;default:Kn(n,e,t,a)}}function mt(n,e,t,a,l){for(l=l&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var r=n,i=e,s=t,u=a,c=i.flags;switch(i.tag){case 0:case 11:case 15:mt(r,i,s,u,l),$a(8,i);break;case 23:break;case 22:var p=i.stateNode;i.memoizedState!==null?p._visibility&2?mt(r,i,s,u,l):xa(r,i):(p._visibility|=2,mt(r,i,s,u,l)),l&&c&2048&&Xs(i.alternate,i);break;case 24:mt(r,i,s,u,l),l&&c&2048&&Ls(i.alternate,i);break;default:mt(r,i,s,u,l)}e=e.sibling}}function xa(n,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var t=n,a=e,l=a.flags;switch(a.tag){case 22:xa(t,a),l&2048&&Xs(a.alternate,a);break;case 24:xa(t,a),l&2048&&Ls(a.alternate,a);break;default:xa(t,a)}e=e.sibling}}var ca=8192;function ot(n){if(n.subtreeFlags&ca)for(n=n.child;n!==null;)Nf(n),n=n.sibling}function Nf(n){switch(n.tag){case 26:ot(n),n.flags&ca&&n.memoizedState!==null&&_d(Qn,n.memoizedState,n.memoizedProps);break;case 5:ot(n);break;case 3:case 4:var e=Qn;Qn=rr(n.stateNode.containerInfo),ot(n),Qn=e;break;case 22:n.memoizedState===null&&(e=n.alternate,e!==null&&e.memoizedState!==null?(e=ca,ca=16777216,ot(n),ca=e):ot(n));break;default:ot(n)}}function Cf(n){var e=n.alternate;if(e!==null&&(n=e.child,n!==null)){e.child=null;do e=n.sibling,n.sibling=null,n=e;while(n!==null)}}function ra(n){var e=n.deletions;if(n.flags&16){if(e!==null)for(var t=0;t<e.length;t++){var a=e[t];un=a,Uf(a,n)}Cf(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Mf(n),n=n.sibling}function Mf(n){switch(n.tag){case 0:case 11:case 15:ra(n),n.flags&2048&&Xe(9,n,n.return);break;case 3:ra(n);break;case 12:ra(n);break;case 22:var e=n.stateNode;n.memoizedState!==null&&e._visibility&2&&(n.return===null||n.return.tag!==13)?(e._visibility&=-3,Ul(n)):ra(n);break;default:ra(n)}}function Ul(n){var e=n.deletions;if(n.flags&16){if(e!==null)for(var t=0;t<e.length;t++){var a=e[t];un=a,Uf(a,n)}Cf(n)}for(n=n.child;n!==null;){switch(e=n,e.tag){case 0:case 11:case 15:Xe(8,e,e.return),Ul(e);break;case 22:t=e.stateNode,t._visibility&2&&(t._visibility&=-3,Ul(e));break;default:Ul(e)}n=n.sibling}}function Uf(n,e){for(;un!==null;){var t=un;switch(t.tag){case 0:case 11:case 15:Xe(8,t,e);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var a=t.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Ja(t.memoizedState.cache)}if(a=t.child,a!==null)a.return=t,un=a;else n:for(t=n;un!==null;){a=un;var l=a.sibling,r=a.return;if(Sf(a),a===t){un=null;break n}if(l!==null){l.return=r,un=l;break n}un=r}}}var ad={getCacheForType:function(n){var e=vn(an),t=e.data.get(n);return t===void 0&&(t=n(),e.data.set(n,t)),t}},ld=typeof WeakMap=="function"?WeakMap:Map,L=0,k=null,B=null,R=0,X=0,Cn=null,Ce=!1,It=!1,Gs=!1,ge=0,W=0,Le=0,Pe=0,_s=0,Gn=0,_t=0,Ta=null,xn=null,Yi=!1,Ys=0,$l=1/0,nr=null,ze=null,dn=0,je=null,Yt=null,jt=0,ki=0,Qi=null,Df=null,Aa=0,Vi=null;function On(){if(L&2&&R!==0)return R&-R;if(M.T!==null){var n=Ht;return n!==0?n:Qs()}return Go()}function Of(){Gn===0&&(Gn=!(R&536870912)||q?qo():536870912);var n=_n.current;return n!==null&&(n.flags|=32),Gn}function zn(n,e,t){(n===k&&(X===2||X===9)||n.cancelPendingCommit!==null)&&(kt(n,0),Me(n,R,Gn,!1)),Qa(n,t),(!(L&2)||n!==k)&&(n===k&&(!(L&2)&&(Pe|=t),W===4&&Me(n,R,Gn,!1)),ne(n))}function zf(n,e,t){if(L&6)throw Error(y(327));var a=!t&&(e&124)===0&&(e&n.expiredLanes)===0||ka(n,e),l=a?sd(n,e):ni(n,e,!0),r=a;do{if(l===0){It&&!a&&Me(n,e,0,!1);break}else{if(t=n.current.alternate,r&&!rd(t)){l=ni(n,e,!1),r=!1;continue}if(l===2){if(r=e,n.errorRecoveryDisabledLanes&r)var i=0;else i=n.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){e=i;n:{var s=n;l=Ta;var u=s.current.memoizedState.isDehydrated;if(u&&(kt(s,i).flags|=256),i=ni(s,i,!1),i!==2){if(Gs&&!u){s.errorRecoveryDisabledLanes|=r,Pe|=r,l=4;break n}r=xn,xn=l,r!==null&&(xn===null?xn=r:xn.push.apply(xn,r))}l=i}if(r=!1,l!==2)continue}}if(l===1){kt(n,0),Me(n,e,0,!0);break}n:{switch(a=n,r=l,r){case 0:case 1:throw Error(y(345));case 4:if((e&4194048)!==e)break;case 6:Me(a,e,Gn,!Ce);break n;case 2:xn=null;break;case 3:case 5:break;default:throw Error(y(329))}if((e&62914560)===e&&(l=Ys+300-Fn(),10<l)){if(Me(a,e,Gn,!Ce),mr(a,0,!0)!==0)break n;a.timeoutHandle=Ff($u.bind(null,a,t,xn,nr,Yi,e,Gn,Pe,_t,Ce,r,2,-0,0),l);break n}$u(a,t,xn,nr,Yi,e,Gn,Pe,_t,Ce,r,0,-0,0)}}break}while(!0);ne(n)}function $u(n,e,t,a,l,r,i,s,u,c,p,g,f,h){if(n.timeoutHandle=-1,g=e.subtreeFlags,(g&8192||(g&16785408)===16785408)&&(qa={stylesheets:null,count:0,unsuspend:Gd},Nf(e),g=Yd(),g!==null)){n.cancelPendingCommit=g(eo.bind(null,n,e,r,t,a,l,i,s,u,p,1,f,h)),Me(n,r,i,!c);return}eo(n,e,r,t,a,l,i,s,u)}function rd(n){for(var e=n;;){var t=e.tag;if((t===0||t===11||t===15)&&e.flags&16384&&(t=e.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var a=0;a<t.length;a++){var l=t[a],r=l.getSnapshot;l=l.value;try{if(!jn(r(),l))return!1}catch{return!1}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Me(n,e,t,a){e&=~_s,e&=~Pe,n.suspendedLanes|=e,n.pingedLanes&=~e,a&&(n.warmLanes|=e),a=n.expirationTimes;for(var l=e;0<l;){var r=31-Dn(l),i=1<<r;a[r]=-1,l&=~i}t!==0&&Xo(n,t,e)}function xr(){return L&6?!0:(nl(0),!1)}function ks(){if(B!==null){if(X===0)var n=B.return;else n=B,ue=st=null,Us(n),zt=null,ja=0,n=B;for(;n!==null;)hf(n.alternate,n),n=n.return;B=null}}function kt(n,e){var t=n.timeoutHandle;t!==-1&&(n.timeoutHandle=-1,Td(t)),t=n.cancelPendingCommit,t!==null&&(n.cancelPendingCommit=null,t()),ks(),k=n,B=t=ce(n.current,null),R=e,X=0,Cn=null,Ce=!1,It=ka(n,e),Gs=!1,_t=Gn=_s=Pe=Le=W=0,xn=Ta=null,Yi=!1,e&8&&(e|=e&32);var a=n.entangledLanes;if(a!==0)for(n=n.entanglements,a&=e;0<a;){var l=31-Dn(a),r=1<<l;e|=n[l],a&=~r}return ge=e,pr(),t}function jf(n,e){D=null,M.H=Kl,e===Wa||e===br?(e=Ou(),X=3):e===pc?(e=Ou(),X=4):X=e===sf?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Cn=e,B===null&&(W=1,Wl(n,Ln(e,n.current)))}function Bf(){var n=M.H;return M.H=Kl,n===null?Kl:n}function Rf(){var n=M.A;return M.A=ad,n}function Zi(){W=4,Ce||(R&4194048)!==R&&_n.current!==null||(It=!0),!(Le&134217727)&&!(Pe&134217727)||k===null||Me(k,R,Gn,!1)}function ni(n,e,t){var a=L;L|=2;var l=Bf(),r=Rf();(k!==n||R!==e)&&(nr=null,kt(n,e)),e=!1;var i=W;n:do try{if(X!==0&&B!==null){var s=B,u=Cn;switch(X){case 8:ks(),i=6;break n;case 3:case 2:case 9:case 6:_n.current===null&&(e=!0);var c=X;if(X=0,Cn=null,wt(n,s,u,c),t&&It){i=0;break n}break;default:c=X,X=0,Cn=null,wt(n,s,u,c)}}id(),i=W;break}catch(p){jf(n,p)}while(!0);return e&&n.shellSuspendCounter++,ue=st=null,L=a,M.H=l,M.A=r,B===null&&(k=null,R=0,pr()),i}function id(){for(;B!==null;)qf(B)}function sd(n,e){var t=L;L|=2;var a=Bf(),l=Rf();k!==n||R!==e?(nr=null,$l=Fn()+500,kt(n,e)):It=ka(n,e);n:do try{if(X!==0&&B!==null){e=B;var r=Cn;e:switch(X){case 1:X=0,Cn=null,wt(n,e,r,1);break;case 2:case 9:if(Du(r)){X=0,Cn=null,no(e);break}e=function(){X!==2&&X!==9||k!==n||(X=7),ne(n)},r.then(e,e);break n;case 3:X=7;break n;case 4:X=5;break n;case 7:Du(r)?(X=0,Cn=null,no(e)):(X=0,Cn=null,wt(n,e,r,7));break;case 5:var i=null;switch(B.tag){case 26:i=B.memoizedState;case 5:case 27:var s=B;if(!i||em(i)){X=0,Cn=null;var u=s.sibling;if(u!==null)B=u;else{var c=s.return;c!==null?(B=c,Tr(c)):B=null}break e}}X=0,Cn=null,wt(n,e,r,5);break;case 6:X=0,Cn=null,wt(n,e,r,6);break;case 8:ks(),W=6;break n;default:throw Error(y(462))}}ud();break}catch(p){jf(n,p)}while(!0);return ue=st=null,M.H=a,M.A=l,L=t,B!==null?0:(k=null,R=0,pr(),W)}function ud(){for(;B!==null&&!Dm();)qf(B)}function qf(n){var e=mf(n.alternate,n,ge);n.memoizedProps=n.pendingProps,e===null?Tr(n):B=e}function no(n){var e=n,t=e.alternate;switch(e.tag){case 15:case 0:e=Ku(t,e,e.pendingProps,e.type,void 0,R);break;case 11:e=Ku(t,e,e.pendingProps,e.type.render,e.ref,R);break;case 5:Us(e);default:hf(t,e),e=B=mc(e,ge),e=mf(t,e,ge)}n.memoizedProps=n.pendingProps,e===null?Tr(n):B=e}function wt(n,e,t,a){ue=st=null,Us(e),zt=null,ja=0;var l=e.return;try{if(Fh(n,l,e,t,R)){W=1,Wl(n,Ln(t,n.current)),B=null;return}}catch(r){if(l!==null)throw B=l,r;W=1,Wl(n,Ln(t,n.current)),B=null;return}e.flags&32768?(q||a===1?n=!0:It||R&536870912?n=!1:(Ce=n=!0,(a===2||a===9||a===3||a===6)&&(a=_n.current,a!==null&&a.tag===13&&(a.flags|=16384))),Hf(e,n)):Tr(e)}function Tr(n){var e=n;do{if(e.flags&32768){Hf(e,Ce);return}n=e.return;var t=$h(e.alternate,e,ge);if(t!==null){B=t;return}if(e=e.sibling,e!==null){B=e;return}B=e=n}while(e!==null);W===0&&(W=5)}function Hf(n,e){do{var t=nd(n.alternate,n);if(t!==null){t.flags&=32767,B=t;return}if(t=n.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!e&&(n=n.sibling,n!==null)){B=n;return}B=n=t}while(n!==null);W=6,B=null}function eo(n,e,t,a,l,r,i,s,u){n.cancelPendingCommit=null;do Ar();while(dn!==0);if(L&6)throw Error(y(327));if(e!==null){if(e===n.current)throw Error(y(177));if(r=e.lanes|e.childLanes,r|=ps,Gm(n,t,r,i,s,u),n===k&&(B=k=null,R=0),Yt=e,je=n,jt=t,ki=r,Qi=l,Df=a,e.subtreeFlags&10256||e.flags&10256?(n.callbackNode=null,n.callbackPriority=0,md(Hl,function(){return Yf(),null})):(n.callbackNode=null,n.callbackPriority=0),a=(e.flags&13878)!==0,e.subtreeFlags&13878||a){a=M.T,M.T=null,l=H.p,H.p=2,i=L,L|=4;try{ed(n,e,t)}finally{L=i,H.p=l,M.T=a}}dn=1,Xf(),Lf(),Gf()}}function Xf(){if(dn===1){dn=0;var n=je,e=Yt,t=(e.flags&13878)!==0;if(e.subtreeFlags&13878||t){t=M.T,M.T=null;var a=H.p;H.p=2;var l=L;L|=4;try{Tf(e,n);var r=Wi,i=lc(n.containerInfo),s=r.focusedElem,u=r.selectionRange;if(i!==s&&s&&s.ownerDocument&&ac(s.ownerDocument.documentElement,s)){if(u!==null&&gs(s)){var c=u.start,p=u.end;if(p===void 0&&(p=c),"selectionStart"in s)s.selectionStart=c,s.selectionEnd=Math.min(p,s.value.length);else{var g=s.ownerDocument||document,f=g&&g.defaultView||window;if(f.getSelection){var h=f.getSelection(),E=s.textContent.length,S=Math.min(u.start,E),N=u.end===void 0?S:Math.min(u.end,E);!h.extend&&S>N&&(i=N,N=S,S=i);var m=xu(s,S),o=xu(s,N);if(m&&o&&(h.rangeCount!==1||h.anchorNode!==m.node||h.anchorOffset!==m.offset||h.focusNode!==o.node||h.focusOffset!==o.offset)){var d=g.createRange();d.setStart(m.node,m.offset),h.removeAllRanges(),S>N?(h.addRange(d),h.extend(o.node,o.offset)):(d.setEnd(o.node,o.offset),h.addRange(d))}}}}for(g=[],h=s;h=h.parentNode;)h.nodeType===1&&g.push({element:h,left:h.scrollLeft,top:h.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<g.length;s++){var v=g[s];v.element.scrollLeft=v.left,v.element.scrollTop=v.top}}ur=!!Ji,Wi=Ji=null}finally{L=l,H.p=a,M.T=t}}n.current=e,dn=2}}function Lf(){if(dn===2){dn=0;var n=je,e=Yt,t=(e.flags&8772)!==0;if(e.subtreeFlags&8772||t){t=M.T,M.T=null;var a=H.p;H.p=2;var l=L;L|=4;try{yf(n,e.alternate,e)}finally{L=l,H.p=a,M.T=t}}dn=3}}function Gf(){if(dn===4||dn===3){dn=0,Om();var n=je,e=Yt,t=jt,a=Df;e.subtreeFlags&10256||e.flags&10256?dn=5:(dn=0,Yt=je=null,_f(n,n.pendingLanes));var l=n.pendingLanes;if(l===0&&(ze=null),us(t),e=e.stateNode,Un&&typeof Un.onCommitFiberRoot=="function")try{Un.onCommitFiberRoot(Ya,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=M.T,l=H.p,H.p=2,M.T=null;try{for(var r=n.onRecoverableError,i=0;i<a.length;i++){var s=a[i];r(s.value,{componentStack:s.stack})}}finally{M.T=e,H.p=l}}jt&3&&Ar(),ne(n),l=n.pendingLanes,t&4194090&&l&42?n===Vi?Aa++:(Aa=0,Vi=n):Aa=0,nl(0)}}function _f(n,e){(n.pooledCacheLanes&=e)===0&&(e=n.pooledCache,e!=null&&(n.pooledCache=null,Ja(e)))}function Ar(n){return Xf(),Lf(),Gf(),Yf()}function Yf(){if(dn!==5)return!1;var n=je,e=ki;ki=0;var t=us(jt),a=M.T,l=H.p;try{H.p=32>t?32:t,M.T=null,t=Qi,Qi=null;var r=je,i=jt;if(dn=0,Yt=je=null,jt=0,L&6)throw Error(y(331));var s=L;if(L|=4,Mf(r.current),wf(r,r.current,i,t),L=s,nl(0,!1),Un&&typeof Un.onPostCommitFiberRoot=="function")try{Un.onPostCommitFiberRoot(Ya,r)}catch{}return!0}finally{H.p=l,M.T=a,_f(n,e)}}function to(n,e,t){e=Ln(t,e),e=Xi(n.stateNode,e,2),n=Oe(n,e,2),n!==null&&(Qa(n,2),ne(n))}function Y(n,e,t){if(n.tag===3)to(n,n,t);else for(;e!==null;){if(e.tag===3){to(e,n,t);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(ze===null||!ze.has(a))){n=Ln(t,n),t=lf(2),a=Oe(e,t,2),a!==null&&(rf(t,a,e,n),Qa(a,2),ne(a));break}}e=e.return}}function ei(n,e,t){var a=n.pingCache;if(a===null){a=n.pingCache=new ld;var l=new Set;a.set(e,l)}else l=a.get(e),l===void 0&&(l=new Set,a.set(e,l));l.has(t)||(Gs=!0,l.add(t),n=od.bind(null,n,e,t),e.then(n,n))}function od(n,e,t){var a=n.pingCache;a!==null&&a.delete(e),n.pingedLanes|=n.suspendedLanes&t,n.warmLanes&=~t,k===n&&(R&t)===t&&(W===4||W===3&&(R&62914560)===R&&300>Fn()-Ys?!(L&2)&&kt(n,0):_s|=t,_t===R&&(_t=0)),ne(n)}function kf(n,e){e===0&&(e=Ho()),n=Kt(n,e),n!==null&&(Qa(n,e),ne(n))}function cd(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),kf(n,t)}function fd(n,e){var t=0;switch(n.tag){case 13:var a=n.stateNode,l=n.memoizedState;l!==null&&(t=l.retryLane);break;case 19:a=n.stateNode;break;case 22:a=n.stateNode._retryCache;break;default:throw Error(y(314))}a!==null&&a.delete(e),kf(n,t)}function md(n,e){return is(n,e)}var er=null,ht=null,Ki=!1,tr=!1,ti=!1,$e=0;function ne(n){n!==ht&&n.next===null&&(ht===null?er=ht=n:ht=ht.next=n),tr=!0,Ki||(Ki=!0,dd())}function nl(n,e){if(!ti&&tr){ti=!0;do for(var t=!1,a=er;a!==null;){if(n!==0){var l=a.pendingLanes;if(l===0)var r=0;else{var i=a.suspendedLanes,s=a.pingedLanes;r=(1<<31-Dn(42|n)+1)-1,r&=l&~(i&~s),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(t=!0,ao(a,r))}else r=R,r=mr(a,a===k?r:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),!(r&3)||ka(a,r)||(t=!0,ao(a,r));a=a.next}while(t);ti=!1}}function hd(){Qf()}function Qf(){tr=Ki=!1;var n=0;$e!==0&&(xd()&&(n=$e),$e=0);for(var e=Fn(),t=null,a=er;a!==null;){var l=a.next,r=Vf(a,e);r===0?(a.next=null,t===null?er=l:t.next=l,l===null&&(ht=t)):(t=a,(n!==0||r&3)&&(tr=!0)),a=l}nl(n)}function Vf(n,e){for(var t=n.suspendedLanes,a=n.pingedLanes,l=n.expirationTimes,r=n.pendingLanes&-62914561;0<r;){var i=31-Dn(r),s=1<<i,u=l[i];u===-1?(!(s&t)||s&a)&&(l[i]=Lm(s,e)):u<=e&&(n.expiredLanes|=s),r&=~s}if(e=k,t=R,t=mr(n,n===e?t:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),a=n.callbackNode,t===0||n===e&&(X===2||X===9)||n.cancelPendingCommit!==null)return a!==null&&a!==null&&Mr(a),n.callbackNode=null,n.callbackPriority=0;if(!(t&3)||ka(n,t)){if(e=t&-t,e===n.callbackPriority)return e;switch(a!==null&&Mr(a),us(t)){case 2:case 8:t=Bo;break;case 32:t=Hl;break;case 268435456:t=Ro;break;default:t=Hl}return a=Zf.bind(null,n),t=is(t,a),n.callbackPriority=e,n.callbackNode=t,e}return a!==null&&a!==null&&Mr(a),n.callbackPriority=2,n.callbackNode=null,2}function Zf(n,e){if(dn!==0&&dn!==5)return n.callbackNode=null,n.callbackPriority=0,null;var t=n.callbackNode;if(Ar()&&n.callbackNode!==t)return null;var a=R;return a=mr(n,n===k?a:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),a===0?null:(zf(n,a,e),Vf(n,Fn()),n.callbackNode!=null&&n.callbackNode===t?Zf.bind(null,n):null)}function ao(n,e){if(Ar())return null;zf(n,e,!0)}function dd(){Ad(function(){L&6?is(jo,hd):Qf()})}function Qs(){return $e===0&&($e=qo()),$e}function lo(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:El(""+n)}function ro(n,e){var t=e.ownerDocument.createElement("input");return t.name=e.name,t.value=e.value,n.id&&t.setAttribute("form",n.id),e.parentNode.insertBefore(t,e),n=new FormData(n),t.parentNode.removeChild(t),n}function gd(n,e,t,a,l){if(e==="submit"&&t&&t.stateNode===l){var r=lo((l[Tn]||null).action),i=a.submitter;i&&(e=(e=i[Tn]||null)?lo(e.formAction):i.getAttribute("formAction"),e!==null&&(r=e,i=null));var s=new hr("action","action",null,a,l);n.push({event:s,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if($e!==0){var u=i?ro(l,i):new FormData(l);qi(t,{pending:!0,data:u,method:l.method,action:r},null,u)}}else typeof r=="function"&&(s.preventDefault(),u=i?ro(l,i):new FormData(l),qi(t,{pending:!0,data:u,method:l.method,action:r},r,u))},currentTarget:l}]})}}for(var ai=0;ai<Ai.length;ai++){var li=Ai[ai],pd=li.toLowerCase(),vd=li[0].toUpperCase()+li.slice(1);Zn(pd,"on"+vd)}Zn(ic,"onAnimationEnd");Zn(sc,"onAnimationIteration");Zn(uc,"onAnimationStart");Zn("dblclick","onDoubleClick");Zn("focusin","onFocus");Zn("focusout","onBlur");Zn(Bh,"onTransitionRun");Zn(Rh,"onTransitionStart");Zn(qh,"onTransitionCancel");Zn(oc,"onTransitionEnd");Rt("onMouseEnter",["mouseout","mouseover"]);Rt("onMouseLeave",["mouseout","mouseover"]);Rt("onPointerEnter",["pointerout","pointerover"]);Rt("onPointerLeave",["pointerout","pointerover"]);lt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));lt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));lt("onBeforeInput",["compositionend","keypress","textInput","paste"]);lt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));lt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));lt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ba="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bd=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ba));function Kf(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var a=n[t],l=a.event;a=a.listeners;n:{var r=void 0;if(e)for(var i=a.length-1;0<=i;i--){var s=a[i],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==r&&l.isPropagationStopped())break n;r=s,l.currentTarget=c;try{r(l)}catch(p){Jl(p)}l.currentTarget=null,r=u}else for(i=0;i<a.length;i++){if(s=a[i],u=s.instance,c=s.currentTarget,s=s.listener,u!==r&&l.isPropagationStopped())break n;r=s,l.currentTarget=c;try{r(l)}catch(p){Jl(p)}l.currentTarget=null,r=u}}}}function j(n,e){var t=e[vi];t===void 0&&(t=e[vi]=new Set);var a=n+"__bubble";t.has(a)||(If(e,n,2,!1),t.add(a))}function ri(n,e,t){var a=0;e&&(a|=4),If(t,n,a,e)}var pl="_reactListening"+Math.random().toString(36).slice(2);function Vs(n){if(!n[pl]){n[pl]=!0,_o.forEach(function(t){t!=="selectionchange"&&(bd.has(t)||ri(t,!1,n),ri(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[pl]||(e[pl]=!0,ri("selectionchange",!1,e))}}function If(n,e,t,a){switch(im(e)){case 2:var l=Vd;break;case 8:l=Zd;break;default:l=Js}t=l.bind(null,e,t,n),l=void 0,!Ei||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(l=!0),a?l!==void 0?n.addEventListener(e,t,{capture:!0,passive:l}):n.addEventListener(e,t,!0):l!==void 0?n.addEventListener(e,t,{passive:l}):n.addEventListener(e,t,!1)}function ii(n,e,t,a,l){var r=a;if(!(e&1)&&!(e&2)&&a!==null)n:for(;;){if(a===null)return;var i=a.tag;if(i===3||i===4){var s=a.stateNode.containerInfo;if(s===l)break;if(i===4)for(i=a.return;i!==null;){var u=i.tag;if((u===3||u===4)&&i.stateNode.containerInfo===l)return;i=i.return}for(;s!==null;){if(i=pt(s),i===null)return;if(u=i.tag,u===5||u===6||u===26||u===27){a=r=i;continue n}s=s.parentNode}}a=a.return}Jo(function(){var c=r,p=fs(t),g=[];n:{var f=cc.get(n);if(f!==void 0){var h=hr,E=n;switch(n){case"keypress":if(Tl(t)===0)break n;case"keydown":case"keyup":h=mh;break;case"focusin":E="focus",h=qr;break;case"focusout":E="blur",h=qr;break;case"beforeblur":case"afterblur":h=qr;break;case"click":if(t.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=mu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=nh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=gh;break;case ic:case sc:case uc:h=ah;break;case oc:h=vh;break;case"scroll":case"scrollend":h=Pm;break;case"wheel":h=yh;break;case"copy":case"cut":case"paste":h=rh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=du;break;case"toggle":case"beforetoggle":h=Eh}var S=(e&4)!==0,N=!S&&(n==="scroll"||n==="scrollend"),m=S?f!==null?f+"Capture":null:f;S=[];for(var o=c,d;o!==null;){var v=o;if(d=v.stateNode,v=v.tag,v!==5&&v!==26&&v!==27||d===null||m===null||(v=Ma(o,m),v!=null&&S.push(Ra(o,v,d))),N)break;o=o.return}0<S.length&&(f=new h(f,E,null,t,p),g.push({event:f,listeners:S}))}}if(!(e&7)){n:{if(f=n==="mouseover"||n==="pointerover",h=n==="mouseout"||n==="pointerout",f&&t!==Si&&(E=t.relatedTarget||t.fromElement)&&(pt(E)||E[Vt]))break n;if((h||f)&&(f=p.window===p?p:(f=p.ownerDocument)?f.defaultView||f.parentWindow:window,h?(E=t.relatedTarget||t.toElement,h=c,E=E?pt(E):null,E!==null&&(N=_a(E),S=E.tag,E!==N||S!==5&&S!==27&&S!==6)&&(E=null)):(h=null,E=c),h!==E)){if(S=mu,v="onMouseLeave",m="onMouseEnter",o="mouse",(n==="pointerout"||n==="pointerover")&&(S=du,v="onPointerLeave",m="onPointerEnter",o="pointer"),N=h==null?f:oa(h),d=E==null?f:oa(E),f=new S(v,o+"leave",h,t,p),f.target=N,f.relatedTarget=d,v=null,pt(p)===c&&(S=new S(m,o+"enter",E,t,p),S.target=d,S.relatedTarget=N,v=S),N=v,h&&E)e:{for(S=h,m=E,o=0,d=S;d;d=ct(d))o++;for(d=0,v=m;v;v=ct(v))d++;for(;0<o-d;)S=ct(S),o--;for(;0<d-o;)m=ct(m),d--;for(;o--;){if(S===m||m!==null&&S===m.alternate)break e;S=ct(S),m=ct(m)}S=null}else S=null;h!==null&&io(g,f,h,S,!1),E!==null&&N!==null&&io(g,N,E,S,!0)}}n:{if(f=c?oa(c):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var x=bu;else if(vu(f))if(ec)x=Oh;else{x=Uh;var C=Mh}else h=f.nodeName,!h||h.toLowerCase()!=="input"||f.type!=="checkbox"&&f.type!=="radio"?c&&cs(c.elementType)&&(x=bu):x=Dh;if(x&&(x=x(n,c))){nc(g,x,t,p);break n}C&&C(n,f,c),n==="focusout"&&c&&f.type==="number"&&c.memoizedProps.value!=null&&yi(f,"number",f.value)}switch(C=c?oa(c):window,n){case"focusin":(vu(C)||C.contentEditable==="true")&&(yt=C,xi=c,da=null);break;case"focusout":da=xi=yt=null;break;case"mousedown":Ti=!0;break;case"contextmenu":case"mouseup":case"dragend":Ti=!1,Tu(g,t,p);break;case"selectionchange":if(jh)break;case"keydown":case"keyup":Tu(g,t,p)}var A;if(ds)n:{switch(n){case"compositionstart":var w="onCompositionStart";break n;case"compositionend":w="onCompositionEnd";break n;case"compositionupdate":w="onCompositionUpdate";break n}w=void 0}else bt?Po(n,t)&&(w="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(w="onCompositionStart");w&&(Fo&&t.locale!=="ko"&&(bt||w!=="onCompositionStart"?w==="onCompositionEnd"&&bt&&(A=Wo()):(Ne=p,ms="value"in Ne?Ne.value:Ne.textContent,bt=!0)),C=ar(c,w),0<C.length&&(w=new hu(w,n,null,t,p),g.push({event:w,listeners:C}),A?w.data=A:(A=$o(t),A!==null&&(w.data=A)))),(A=Th?Ah(n,t):wh(n,t))&&(w=ar(c,"onBeforeInput"),0<w.length&&(C=new hu("onBeforeInput","beforeinput",null,t,p),g.push({event:C,listeners:w}),C.data=A)),gd(g,n,c,t,p)}Kf(g,e)})}function Ra(n,e,t){return{instance:n,listener:e,currentTarget:t}}function ar(n,e){for(var t=e+"Capture",a=[];n!==null;){var l=n,r=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||r===null||(l=Ma(n,t),l!=null&&a.unshift(Ra(n,l,r)),l=Ma(n,e),l!=null&&a.push(Ra(n,l,r))),n.tag===3)return a;n=n.return}return[]}function ct(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function io(n,e,t,a,l){for(var r=e._reactName,i=[];t!==null&&t!==a;){var s=t,u=s.alternate,c=s.stateNode;if(s=s.tag,u!==null&&u===a)break;s!==5&&s!==26&&s!==27||c===null||(u=c,l?(c=Ma(t,r),c!=null&&i.unshift(Ra(t,c,u))):l||(c=Ma(t,r),c!=null&&i.push(Ra(t,c,u)))),t=t.return}i.length!==0&&n.push({event:e,listeners:i})}var yd=/\r\n?/g,Sd=/\u0000|\uFFFD/g;function so(n){return(typeof n=="string"?n:""+n).replace(yd,`
`).replace(Sd,"")}function Jf(n,e){return e=so(e),so(n)===e}function wr(){}function G(n,e,t,a,l,r){switch(t){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||qt(n,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&qt(n,""+a);break;case"className":ol(n,"class",a);break;case"tabIndex":ol(n,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":ol(n,t,a);break;case"style":Io(n,a,r);break;case"data":if(e!=="object"){ol(n,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||t!=="href")){n.removeAttribute(t);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){n.removeAttribute(t);break}a=El(""+a),n.setAttribute(t,a);break;case"action":case"formAction":if(typeof a=="function"){n.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(t==="formAction"?(e!=="input"&&G(n,e,"name",l.name,l,null),G(n,e,"formEncType",l.formEncType,l,null),G(n,e,"formMethod",l.formMethod,l,null),G(n,e,"formTarget",l.formTarget,l,null)):(G(n,e,"encType",l.encType,l,null),G(n,e,"method",l.method,l,null),G(n,e,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){n.removeAttribute(t);break}a=El(""+a),n.setAttribute(t,a);break;case"onClick":a!=null&&(n.onclick=wr);break;case"onScroll":a!=null&&j("scroll",n);break;case"onScrollEnd":a!=null&&j("scrollend",n);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(y(61));if(t=a.__html,t!=null){if(l.children!=null)throw Error(y(60));n.innerHTML=t}}break;case"multiple":n.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":n.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){n.removeAttribute("xlink:href");break}t=El(""+a),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?n.setAttribute(t,""+a):n.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?n.setAttribute(t,""):n.removeAttribute(t);break;case"capture":case"download":a===!0?n.setAttribute(t,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?n.setAttribute(t,a):n.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?n.setAttribute(t,a):n.removeAttribute(t);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?n.removeAttribute(t):n.setAttribute(t,a);break;case"popover":j("beforetoggle",n),j("toggle",n),Sl(n,"popover",a);break;case"xlinkActuate":ee(n,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":ee(n,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":ee(n,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":ee(n,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":ee(n,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":ee(n,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":ee(n,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":ee(n,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":ee(n,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Sl(n,"is",a);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=Wm.get(t)||t,Sl(n,t,a))}}function Ii(n,e,t,a,l,r){switch(t){case"style":Io(n,a,r);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(y(61));if(t=a.__html,t!=null){if(l.children!=null)throw Error(y(60));n.innerHTML=t}}break;case"children":typeof a=="string"?qt(n,a):(typeof a=="number"||typeof a=="bigint")&&qt(n,""+a);break;case"onScroll":a!=null&&j("scroll",n);break;case"onScrollEnd":a!=null&&j("scrollend",n);break;case"onClick":a!=null&&(n.onclick=wr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Yo.hasOwnProperty(t))n:{if(t[0]==="o"&&t[1]==="n"&&(l=t.endsWith("Capture"),e=t.slice(2,l?t.length-7:void 0),r=n[Tn]||null,r=r!=null?r[t]:null,typeof r=="function"&&n.removeEventListener(e,r,l),typeof a=="function")){typeof r!="function"&&r!==null&&(t in n?n[t]=null:n.hasAttribute(t)&&n.removeAttribute(t)),n.addEventListener(e,a,l);break n}t in n?n[t]=a:a===!0?n.setAttribute(t,""):Sl(n,t,a)}}}function gn(n,e,t){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":j("error",n),j("load",n);var a=!1,l=!1,r;for(r in t)if(t.hasOwnProperty(r)){var i=t[r];if(i!=null)switch(r){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(y(137,e));default:G(n,e,r,i,t,null)}}l&&G(n,e,"srcSet",t.srcSet,t,null),a&&G(n,e,"src",t.src,t,null);return;case"input":j("invalid",n);var s=r=i=l=null,u=null,c=null;for(a in t)if(t.hasOwnProperty(a)){var p=t[a];if(p!=null)switch(a){case"name":l=p;break;case"type":i=p;break;case"checked":u=p;break;case"defaultChecked":c=p;break;case"value":r=p;break;case"defaultValue":s=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(y(137,e));break;default:G(n,e,a,p,t,null)}}Vo(n,r,s,u,c,i,l,!1),Xl(n);return;case"select":j("invalid",n),a=i=r=null;for(l in t)if(t.hasOwnProperty(l)&&(s=t[l],s!=null))switch(l){case"value":r=s;break;case"defaultValue":i=s;break;case"multiple":a=s;default:G(n,e,l,s,t,null)}e=r,t=i,n.multiple=!!a,e!=null?Ct(n,!!a,e,!1):t!=null&&Ct(n,!!a,t,!0);return;case"textarea":j("invalid",n),r=l=a=null;for(i in t)if(t.hasOwnProperty(i)&&(s=t[i],s!=null))switch(i){case"value":a=s;break;case"defaultValue":l=s;break;case"children":r=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(y(91));break;default:G(n,e,i,s,t,null)}Ko(n,a,l,r),Xl(n);return;case"option":for(u in t)if(t.hasOwnProperty(u)&&(a=t[u],a!=null))switch(u){case"selected":n.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:G(n,e,u,a,t,null)}return;case"dialog":j("beforetoggle",n),j("toggle",n),j("cancel",n),j("close",n);break;case"iframe":case"object":j("load",n);break;case"video":case"audio":for(a=0;a<Ba.length;a++)j(Ba[a],n);break;case"image":j("error",n),j("load",n);break;case"details":j("toggle",n);break;case"embed":case"source":case"link":j("error",n),j("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in t)if(t.hasOwnProperty(c)&&(a=t[c],a!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(y(137,e));default:G(n,e,c,a,t,null)}return;default:if(cs(e)){for(p in t)t.hasOwnProperty(p)&&(a=t[p],a!==void 0&&Ii(n,e,p,a,t,void 0));return}}for(s in t)t.hasOwnProperty(s)&&(a=t[s],a!=null&&G(n,e,s,a,t,null))}function Ed(n,e,t,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,r=null,i=null,s=null,u=null,c=null,p=null;for(h in t){var g=t[h];if(t.hasOwnProperty(h)&&g!=null)switch(h){case"checked":break;case"value":break;case"defaultValue":u=g;default:a.hasOwnProperty(h)||G(n,e,h,null,a,g)}}for(var f in a){var h=a[f];if(g=t[f],a.hasOwnProperty(f)&&(h!=null||g!=null))switch(f){case"type":r=h;break;case"name":l=h;break;case"checked":c=h;break;case"defaultChecked":p=h;break;case"value":i=h;break;case"defaultValue":s=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(y(137,e));break;default:h!==g&&G(n,e,f,h,a,g)}}bi(n,i,s,u,c,p,r,l);return;case"select":h=i=s=f=null;for(r in t)if(u=t[r],t.hasOwnProperty(r)&&u!=null)switch(r){case"value":break;case"multiple":h=u;default:a.hasOwnProperty(r)||G(n,e,r,null,a,u)}for(l in a)if(r=a[l],u=t[l],a.hasOwnProperty(l)&&(r!=null||u!=null))switch(l){case"value":f=r;break;case"defaultValue":s=r;break;case"multiple":i=r;default:r!==u&&G(n,e,l,r,a,u)}e=s,t=i,a=h,f!=null?Ct(n,!!t,f,!1):!!a!=!!t&&(e!=null?Ct(n,!!t,e,!0):Ct(n,!!t,t?[]:"",!1));return;case"textarea":h=f=null;for(s in t)if(l=t[s],t.hasOwnProperty(s)&&l!=null&&!a.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:G(n,e,s,null,a,l)}for(i in a)if(l=a[i],r=t[i],a.hasOwnProperty(i)&&(l!=null||r!=null))switch(i){case"value":f=l;break;case"defaultValue":h=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(y(91));break;default:l!==r&&G(n,e,i,l,a,r)}Zo(n,f,h);return;case"option":for(var E in t)if(f=t[E],t.hasOwnProperty(E)&&f!=null&&!a.hasOwnProperty(E))switch(E){case"selected":n.selected=!1;break;default:G(n,e,E,null,a,f)}for(u in a)if(f=a[u],h=t[u],a.hasOwnProperty(u)&&f!==h&&(f!=null||h!=null))switch(u){case"selected":n.selected=f&&typeof f!="function"&&typeof f!="symbol";break;default:G(n,e,u,f,a,h)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var S in t)f=t[S],t.hasOwnProperty(S)&&f!=null&&!a.hasOwnProperty(S)&&G(n,e,S,null,a,f);for(c in a)if(f=a[c],h=t[c],a.hasOwnProperty(c)&&f!==h&&(f!=null||h!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(y(137,e));break;default:G(n,e,c,f,a,h)}return;default:if(cs(e)){for(var N in t)f=t[N],t.hasOwnProperty(N)&&f!==void 0&&!a.hasOwnProperty(N)&&Ii(n,e,N,void 0,a,f);for(p in a)f=a[p],h=t[p],!a.hasOwnProperty(p)||f===h||f===void 0&&h===void 0||Ii(n,e,p,f,a,h);return}}for(var m in t)f=t[m],t.hasOwnProperty(m)&&f!=null&&!a.hasOwnProperty(m)&&G(n,e,m,null,a,f);for(g in a)f=a[g],h=t[g],!a.hasOwnProperty(g)||f===h||f==null&&h==null||G(n,e,g,f,a,h)}var Ji=null,Wi=null;function lr(n){return n.nodeType===9?n:n.ownerDocument}function uo(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Wf(n,e){if(n===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&e==="foreignObject"?0:n}function Fi(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var si=null;function xd(){var n=window.event;return n&&n.type==="popstate"?n===si?!1:(si=n,!0):(si=null,!1)}var Ff=typeof setTimeout=="function"?setTimeout:void 0,Td=typeof clearTimeout=="function"?clearTimeout:void 0,oo=typeof Promise=="function"?Promise:void 0,Ad=typeof queueMicrotask=="function"?queueMicrotask:typeof oo<"u"?function(n){return oo.resolve(null).then(n).catch(wd)}:Ff;function wd(n){setTimeout(function(){throw n})}function _e(n){return n==="head"}function co(n,e){var t=e,a=0,l=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(0<a&&8>a){t=a;var i=n.ownerDocument;if(t&1&&wa(i.documentElement),t&2&&wa(i.body),t&4)for(t=i.head,wa(t),i=t.firstChild;i;){var s=i.nextSibling,u=i.nodeName;i[Va]||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&i.rel.toLowerCase()==="stylesheet"||t.removeChild(i),i=s}}if(l===0){n.removeChild(r),Ga(e);return}l--}else t==="$"||t==="$?"||t==="$!"?l++:a=t.charCodeAt(0)-48;else a=0;t=r}while(t);Ga(e)}function Pi(n){var e=n.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var t=e;switch(e=e.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":Pi(t),os(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}n.removeChild(t)}}function Nd(n,e,t,a){for(;n.nodeType===1;){var l=t;if(n.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(a){if(!n[Va])switch(e){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(r=n.getAttribute("rel"),r==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(r!==l.rel||n.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||n.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||n.getAttribute("title")!==(l.title==null?null:l.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(r=n.getAttribute("src"),(r!==(l.src==null?null:l.src)||n.getAttribute("type")!==(l.type==null?null:l.type)||n.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&r&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(e==="input"&&n.type==="hidden"){var r=l.name==null?null:""+l.name;if(l.type==="hidden"&&n.getAttribute("name")===r)return n}else return n;if(n=Vn(n.nextSibling),n===null)break}return null}function Cd(n,e,t){if(e==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!t||(n=Vn(n.nextSibling),n===null))return null;return n}function $i(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function Md(n,e){var t=n.ownerDocument;if(n.data!=="$?"||t.readyState==="complete")e();else{var a=function(){e(),t.removeEventListener("DOMContentLoaded",a)};t.addEventListener("DOMContentLoaded",a),n._reactRetry=a}}function Vn(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return n}var ns=null;function fo(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}function Pf(n,e,t){switch(e=lr(t),n){case"html":if(n=e.documentElement,!n)throw Error(y(452));return n;case"head":if(n=e.head,!n)throw Error(y(453));return n;case"body":if(n=e.body,!n)throw Error(y(454));return n;default:throw Error(y(451))}}function wa(n){for(var e=n.attributes;e.length;)n.removeAttributeNode(e[0]);os(n)}var Yn=new Map,mo=new Set;function rr(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var pe=H.d;H.d={f:Ud,r:Dd,D:Od,C:zd,L:jd,m:Bd,X:qd,S:Rd,M:Hd};function Ud(){var n=pe.f(),e=xr();return n||e}function Dd(n){var e=Zt(n);e!==null&&e.tag===5&&e.type==="form"?Qc(e):pe.r(n)}var Jt=typeof document>"u"?null:document;function $f(n,e,t){var a=Jt;if(a&&typeof e=="string"&&e){var l=Xn(e);l='link[rel="'+n+'"][href="'+l+'"]',typeof t=="string"&&(l+='[crossorigin="'+t+'"]'),mo.has(l)||(mo.add(l),n={rel:n,crossOrigin:t,href:e},a.querySelector(l)===null&&(e=a.createElement("link"),gn(e,"link",n),on(e),a.head.appendChild(e)))}}function Od(n){pe.D(n),$f("dns-prefetch",n,null)}function zd(n,e){pe.C(n,e),$f("preconnect",n,e)}function jd(n,e,t){pe.L(n,e,t);var a=Jt;if(a&&n&&e){var l='link[rel="preload"][as="'+Xn(e)+'"]';e==="image"&&t&&t.imageSrcSet?(l+='[imagesrcset="'+Xn(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(l+='[imagesizes="'+Xn(t.imageSizes)+'"]')):l+='[href="'+Xn(n)+'"]';var r=l;switch(e){case"style":r=Qt(n);break;case"script":r=Wt(n)}Yn.has(r)||(n=Q({rel:"preload",href:e==="image"&&t&&t.imageSrcSet?void 0:n,as:e},t),Yn.set(r,n),a.querySelector(l)!==null||e==="style"&&a.querySelector(el(r))||e==="script"&&a.querySelector(tl(r))||(e=a.createElement("link"),gn(e,"link",n),on(e),a.head.appendChild(e)))}}function Bd(n,e){pe.m(n,e);var t=Jt;if(t&&n){var a=e&&typeof e.as=="string"?e.as:"script",l='link[rel="modulepreload"][as="'+Xn(a)+'"][href="'+Xn(n)+'"]',r=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Wt(n)}if(!Yn.has(r)&&(n=Q({rel:"modulepreload",href:n},e),Yn.set(r,n),t.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(tl(r)))return}a=t.createElement("link"),gn(a,"link",n),on(a),t.head.appendChild(a)}}}function Rd(n,e,t){pe.S(n,e,t);var a=Jt;if(a&&n){var l=Nt(a).hoistableStyles,r=Qt(n);e=e||"default";var i=l.get(r);if(!i){var s={loading:0,preload:null};if(i=a.querySelector(el(r)))s.loading=5;else{n=Q({rel:"stylesheet",href:n,"data-precedence":e},t),(t=Yn.get(r))&&Zs(n,t);var u=i=a.createElement("link");on(u),gn(u,"link",n),u._p=new Promise(function(c,p){u.onload=c,u.onerror=p}),u.addEventListener("load",function(){s.loading|=1}),u.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Dl(i,e,a)}i={type:"stylesheet",instance:i,count:1,state:s},l.set(r,i)}}}function qd(n,e){pe.X(n,e);var t=Jt;if(t&&n){var a=Nt(t).hoistableScripts,l=Wt(n),r=a.get(l);r||(r=t.querySelector(tl(l)),r||(n=Q({src:n,async:!0},e),(e=Yn.get(l))&&Ks(n,e),r=t.createElement("script"),on(r),gn(r,"link",n),t.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(l,r))}}function Hd(n,e){pe.M(n,e);var t=Jt;if(t&&n){var a=Nt(t).hoistableScripts,l=Wt(n),r=a.get(l);r||(r=t.querySelector(tl(l)),r||(n=Q({src:n,async:!0,type:"module"},e),(e=Yn.get(l))&&Ks(n,e),r=t.createElement("script"),on(r),gn(r,"link",n),t.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(l,r))}}function ho(n,e,t,a){var l=(l=Ue.current)?rr(l):null;if(!l)throw Error(y(446));switch(n){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(e=Qt(t.href),t=Nt(l).hoistableStyles,a=t.get(e),a||(a={type:"style",instance:null,count:0,state:null},t.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){n=Qt(t.href);var r=Nt(l).hoistableStyles,i=r.get(n);if(i||(l=l.ownerDocument||l,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(n,i),(r=l.querySelector(el(n)))&&!r._p&&(i.instance=r,i.state.loading=5),Yn.has(n)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Yn.set(n,t),r||Xd(l,n,t,i.state))),e&&a===null)throw Error(y(528,""));return i}if(e&&a!==null)throw Error(y(529,""));return null;case"script":return e=t.async,t=t.src,typeof t=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Wt(t),t=Nt(l).hoistableScripts,a=t.get(e),a||(a={type:"script",instance:null,count:0,state:null},t.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(y(444,n))}}function Qt(n){return'href="'+Xn(n)+'"'}function el(n){return'link[rel="stylesheet"]['+n+"]"}function nm(n){return Q({},n,{"data-precedence":n.precedence,precedence:null})}function Xd(n,e,t,a){n.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=n.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),gn(e,"link",t),on(e),n.head.appendChild(e))}function Wt(n){return'[src="'+Xn(n)+'"]'}function tl(n){return"script[async]"+n}function go(n,e,t){if(e.count++,e.instance===null)switch(e.type){case"style":var a=n.querySelector('style[data-href~="'+Xn(t.href)+'"]');if(a)return e.instance=a,on(a),a;var l=Q({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return a=(n.ownerDocument||n).createElement("style"),on(a),gn(a,"style",l),Dl(a,t.precedence,n),e.instance=a;case"stylesheet":l=Qt(t.href);var r=n.querySelector(el(l));if(r)return e.state.loading|=4,e.instance=r,on(r),r;a=nm(t),(l=Yn.get(l))&&Zs(a,l),r=(n.ownerDocument||n).createElement("link"),on(r);var i=r;return i._p=new Promise(function(s,u){i.onload=s,i.onerror=u}),gn(r,"link",a),e.state.loading|=4,Dl(r,t.precedence,n),e.instance=r;case"script":return r=Wt(t.src),(l=n.querySelector(tl(r)))?(e.instance=l,on(l),l):(a=t,(l=Yn.get(r))&&(a=Q({},t),Ks(a,l)),n=n.ownerDocument||n,l=n.createElement("script"),on(l),gn(l,"link",a),n.head.appendChild(l),e.instance=l);case"void":return null;default:throw Error(y(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(a=e.instance,e.state.loading|=4,Dl(a,t.precedence,n));return e.instance}function Dl(n,e,t){for(var a=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,r=l,i=0;i<a.length;i++){var s=a[i];if(s.dataset.precedence===e)r=s;else if(r!==l)break}r?r.parentNode.insertBefore(n,r.nextSibling):(e=t.nodeType===9?t.head:t,e.insertBefore(n,e.firstChild))}function Zs(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.title==null&&(n.title=e.title)}function Ks(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.integrity==null&&(n.integrity=e.integrity)}var Ol=null;function po(n,e,t){if(Ol===null){var a=new Map,l=Ol=new Map;l.set(t,a)}else l=Ol,a=l.get(t),a||(a=new Map,l.set(t,a));if(a.has(n))return a;for(a.set(n,null),t=t.getElementsByTagName(n),l=0;l<t.length;l++){var r=t[l];if(!(r[Va]||r[pn]||n==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var i=r.getAttribute(e)||"";i=n+i;var s=a.get(i);s?s.push(r):a.set(i,[r])}}return a}function vo(n,e,t){n=n.ownerDocument||n,n.head.insertBefore(t,e==="title"?n.querySelector("head > title"):null)}function Ld(n,e,t){if(t===1||e.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return n=e.disabled,typeof e.precedence=="string"&&n==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function em(n){return!(n.type==="stylesheet"&&!(n.state.loading&3))}var qa=null;function Gd(){}function _d(n,e,t){if(qa===null)throw Error(y(475));var a=qa;if(e.type==="stylesheet"&&(typeof t.media!="string"||matchMedia(t.media).matches!==!1)&&!(e.state.loading&4)){if(e.instance===null){var l=Qt(t.href),r=n.querySelector(el(l));if(r){n=r._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(a.count++,a=ir.bind(a),n.then(a,a)),e.state.loading|=4,e.instance=r,on(r);return}r=n.ownerDocument||n,t=nm(t),(l=Yn.get(l))&&Zs(t,l),r=r.createElement("link"),on(r);var i=r;i._p=new Promise(function(s,u){i.onload=s,i.onerror=u}),gn(r,"link",t),e.instance=r}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(e,n),(n=e.state.preload)&&!(e.state.loading&3)&&(a.count++,e=ir.bind(a),n.addEventListener("load",e),n.addEventListener("error",e))}}function Yd(){if(qa===null)throw Error(y(475));var n=qa;return n.stylesheets&&n.count===0&&es(n,n.stylesheets),0<n.count?function(e){var t=setTimeout(function(){if(n.stylesheets&&es(n,n.stylesheets),n.unsuspend){var a=n.unsuspend;n.unsuspend=null,a()}},6e4);return n.unsuspend=e,function(){n.unsuspend=null,clearTimeout(t)}}:null}function ir(){if(this.count--,this.count===0){if(this.stylesheets)es(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var sr=null;function es(n,e){n.stylesheets=null,n.unsuspend!==null&&(n.count++,sr=new Map,e.forEach(kd,n),sr=null,ir.call(n))}function kd(n,e){if(!(e.state.loading&4)){var t=sr.get(n);if(t)var a=t.get(null);else{t=new Map,sr.set(n,t);for(var l=n.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<l.length;r++){var i=l[r];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(t.set(i.dataset.precedence,i),a=i)}a&&t.set(null,a)}l=e.instance,i=l.getAttribute("data-precedence"),r=t.get(i)||a,r===a&&t.set(null,l),t.set(i,l),this.count++,a=ir.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),r?r.parentNode.insertBefore(l,r.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(l,n.firstChild)),e.state.loading|=4}}var Ha={$$typeof:re,Provider:null,Consumer:null,_currentValue:Ke,_currentValue2:Ke,_threadCount:0};function Qd(n,e,t,a,l,r,i,s){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ur(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ur(0),this.hiddenUpdates=Ur(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=r,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function tm(n,e,t,a,l,r,i,s,u,c,p,g){return n=new Qd(n,e,t,i,s,u,c,g),e=1,r===!0&&(e|=24),r=Mn(3,null,null,e),n.current=r,r.stateNode=n,e=Es(),e.refCount++,n.pooledCache=e,e.refCount++,r.memoizedState={element:a,isDehydrated:t,cache:e},Ts(r),n}function am(n){return n?(n=xt,n):xt}function lm(n,e,t,a,l,r){l=am(l),a.context===null?a.context=l:a.pendingContext=l,a=De(e),a.payload={element:t},r=r===void 0?null:r,r!==null&&(a.callback=r),t=Oe(n,a,e),t!==null&&(zn(t,n,e),va(t,n,e))}function bo(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Is(n,e){bo(n,e),(n=n.alternate)&&bo(n,e)}function rm(n){if(n.tag===13){var e=Kt(n,67108864);e!==null&&zn(e,n,67108864),Is(n,67108864)}}var ur=!0;function Vd(n,e,t,a){var l=M.T;M.T=null;var r=H.p;try{H.p=2,Js(n,e,t,a)}finally{H.p=r,M.T=l}}function Zd(n,e,t,a){var l=M.T;M.T=null;var r=H.p;try{H.p=8,Js(n,e,t,a)}finally{H.p=r,M.T=l}}function Js(n,e,t,a){if(ur){var l=ts(a);if(l===null)ii(n,e,a,or,t),yo(n,a);else if(Id(l,n,e,t,a))a.stopPropagation();else if(yo(n,a),e&4&&-1<Kd.indexOf(n)){for(;l!==null;){var r=Zt(l);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var i=Qe(r.pendingLanes);if(i!==0){var s=r;for(s.pendingLanes|=2,s.entangledLanes|=2;i;){var u=1<<31-Dn(i);s.entanglements[1]|=u,i&=~u}ne(r),!(L&6)&&($l=Fn()+500,nl(0))}}break;case 13:s=Kt(r,2),s!==null&&zn(s,r,2),xr(),Is(r,2)}if(r=ts(a),r===null&&ii(n,e,a,or,t),r===l)break;l=r}l!==null&&a.stopPropagation()}else ii(n,e,a,null,t)}}function ts(n){return n=fs(n),Ws(n)}var or=null;function Ws(n){if(or=null,n=pt(n),n!==null){var e=_a(n);if(e===null)n=null;else{var t=e.tag;if(t===13){if(n=Uo(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null)}}return or=n,null}function im(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(zm()){case jo:return 2;case Bo:return 8;case Hl:case jm:return 32;case Ro:return 268435456;default:return 32}default:return 32}}var as=!1,Be=null,Re=null,qe=null,Xa=new Map,La=new Map,Ae=[],Kd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function yo(n,e){switch(n){case"focusin":case"focusout":Be=null;break;case"dragenter":case"dragleave":Re=null;break;case"mouseover":case"mouseout":qe=null;break;case"pointerover":case"pointerout":Xa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":La.delete(e.pointerId)}}function ia(n,e,t,a,l,r){return n===null||n.nativeEvent!==r?(n={blockedOn:e,domEventName:t,eventSystemFlags:a,nativeEvent:r,targetContainers:[l]},e!==null&&(e=Zt(e),e!==null&&rm(e)),n):(n.eventSystemFlags|=a,e=n.targetContainers,l!==null&&e.indexOf(l)===-1&&e.push(l),n)}function Id(n,e,t,a,l){switch(e){case"focusin":return Be=ia(Be,n,e,t,a,l),!0;case"dragenter":return Re=ia(Re,n,e,t,a,l),!0;case"mouseover":return qe=ia(qe,n,e,t,a,l),!0;case"pointerover":var r=l.pointerId;return Xa.set(r,ia(Xa.get(r)||null,n,e,t,a,l)),!0;case"gotpointercapture":return r=l.pointerId,La.set(r,ia(La.get(r)||null,n,e,t,a,l)),!0}return!1}function sm(n){var e=pt(n.target);if(e!==null){var t=_a(e);if(t!==null){if(e=t.tag,e===13){if(e=Uo(t),e!==null){n.blockedOn=e,_m(n.priority,function(){if(t.tag===13){var a=On();a=ss(a);var l=Kt(t,a);l!==null&&zn(l,t,a),Is(t,a)}});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function zl(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=ts(n.nativeEvent);if(t===null){t=n.nativeEvent;var a=new t.constructor(t.type,t);Si=a,t.target.dispatchEvent(a),Si=null}else return e=Zt(t),e!==null&&rm(e),n.blockedOn=t,!1;e.shift()}return!0}function So(n,e,t){zl(n)&&t.delete(e)}function Jd(){as=!1,Be!==null&&zl(Be)&&(Be=null),Re!==null&&zl(Re)&&(Re=null),qe!==null&&zl(qe)&&(qe=null),Xa.forEach(So),La.forEach(So)}function vl(n,e){n.blockedOn===e&&(n.blockedOn=null,as||(as=!0,rn.unstable_scheduleCallback(rn.unstable_NormalPriority,Jd)))}var bl=null;function Eo(n){bl!==n&&(bl=n,rn.unstable_scheduleCallback(rn.unstable_NormalPriority,function(){bl===n&&(bl=null);for(var e=0;e<n.length;e+=3){var t=n[e],a=n[e+1],l=n[e+2];if(typeof a!="function"){if(Ws(a||t)===null)continue;break}var r=Zt(t);r!==null&&(n.splice(e,3),e-=3,qi(r,{pending:!0,data:l,method:t.method,action:a},a,l))}}))}function Ga(n){function e(u){return vl(u,n)}Be!==null&&vl(Be,n),Re!==null&&vl(Re,n),qe!==null&&vl(qe,n),Xa.forEach(e),La.forEach(e);for(var t=0;t<Ae.length;t++){var a=Ae[t];a.blockedOn===n&&(a.blockedOn=null)}for(;0<Ae.length&&(t=Ae[0],t.blockedOn===null);)sm(t),t.blockedOn===null&&Ae.shift();if(t=(n.ownerDocument||n).$$reactFormReplay,t!=null)for(a=0;a<t.length;a+=3){var l=t[a],r=t[a+1],i=l[Tn]||null;if(typeof r=="function")i||Eo(t);else if(i){var s=null;if(r&&r.hasAttribute("formAction")){if(l=r,i=r[Tn]||null)s=i.formAction;else if(Ws(l)!==null)continue}else s=i.action;typeof s=="function"?t[a+1]=s:(t.splice(a,3),a-=3),Eo(t)}}}function Fs(n){this._internalRoot=n}Nr.prototype.render=Fs.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(y(409));var t=e.current,a=On();lm(t,a,n,e,null,null)};Nr.prototype.unmount=Fs.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;lm(n.current,2,null,n,null,null),xr(),e[Vt]=null}};function Nr(n){this._internalRoot=n}Nr.prototype.unstable_scheduleHydration=function(n){if(n){var e=Go();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Ae.length&&e!==0&&e<Ae[t].priority;t++);Ae.splice(t,0,n),t===0&&sm(n)}};var xo=Co.version;if(xo!=="19.1.0")throw Error(y(527,xo,"19.1.0"));H.findDOMNode=function(n){var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(y(188)):(n=Object.keys(n).join(","),Error(y(268,n)));return n=wm(e),n=n!==null?Do(n):null,n=n===null?null:n.stateNode,n};var Wd={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yl.isDisabled&&yl.supportsFiber)try{Ya=yl.inject(Wd),Un=yl}catch{}}fr.createRoot=function(n,e){if(!Mo(n))throw Error(y(299));var t=!1,a="",l=ef,r=tf,i=af,s=null;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(l=e.onUncaughtError),e.onCaughtError!==void 0&&(r=e.onCaughtError),e.onRecoverableError!==void 0&&(i=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(s=e.unstable_transitionCallbacks)),e=tm(n,1,!1,null,null,t,a,l,r,i,s,null),n[Vt]=e.current,Vs(n),new Fs(e)};fr.hydrateRoot=function(n,e,t){if(!Mo(n))throw Error(y(299));var a=!1,l="",r=ef,i=tf,s=af,u=null,c=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(u=t.unstable_transitionCallbacks),t.formState!==void 0&&(c=t.formState)),e=tm(n,1,!0,e,t??null,a,l,r,i,s,u,c),e.context=am(null),t=e.current,a=On(),a=ss(a),l=De(a),l.callback=null,Oe(t,l,a),t=a,e.current.lanes=t,Qa(e,t),ne(e),n[Vt]=e.current,Vs(n),new Nr(e)};fr.version="19.1.0";function um(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(um)}catch(n){console.error(n)}}um(),Ao.exports=fr;var Fd=Ao.exports;const Pd=gm(Fd),Na={1:{name:"01.js",title:"Exercise 1",content:`<h2>Exercise 1 - Welcome</h2>
<p>Use <span class="code">prompt()</span> to read a first name and a last name.</p>
<p>Declare the variable <span class="code">fullName</span>, and then welcome the user by his full name.</p>
`,solution:`console.log('EX 01')\r
console.log('Read first name and last name, and welcome the user by his full name.')\r
// reviewed ✔️\r
\r
// 1. Read (prompt) a first name and a last name. Declare the variable fullName, and then\r
// welcome the user by his full name.\r
\r
var firstName = prompt('Please enter your first name:')\r
var lastName = prompt('Please enter your last name:')\r
var fullName = firstName + ' ' + lastName\r
\r
alert('Welcome ' + fullName)\r
`},2:{name:"02.js",title:"Exercise 2",content:`<h2>Exercise 2 - Basic math operations</h2>
<p>Read two numbers and use <span class="code">console.log()</span> to print the result of the following operations on them: <span class="code">( % , / , *)</span></p>`,solution:`console.log('EX 02')\r
console.log('Read 2 numbers from the user and print the following operations (%,/,*) on them.')\r
// reviewed ✔️\r
\r
// 2. Read two numbers and print (to the console) the result of the following operations on\r
// them:\r
// (% ,/ ,*)\r
\r
var num1 = +prompt('Please enter a number: ')\r
var num2 = +prompt('Please enter another number: ')\r
\r
var moduloRes = num1 % num2\r
console.log(num1 + ' % ' + num2 + ' = ' + moduloRes)\r
\r
var divisionRes = num1 / num2\r
console.log(num1 + ' / ' + num2 + ' = ' + divisionRes)\r
\r
var multRes = num1 * num2\r
console.log(num1 + ' * ' + num2 + ' = ' + multRes)\r
`},3:{name:"03.js",title:"Exercise 3",content:`<h2>Exercise 3 - Temprature convertion</h2>
<p>Read a temperature in Celsius from the user, and print it converted to Fahrenheit.</p>`,solution:`console.log('EX 03')\r
console.log('Read a temperature in Celsius from the user, and print it converted to Fahrenheit')\r
// reviewed ✔️\r
\r
// 3. Read a temperature in Celsius from the user, and print it converted to Fahrenheit\r
\r
var celsius = +prompt('Please enter degrees in Celsius: ')\r
var fahrenheit = celsius * (9 / 5) + 32\r
\r
console.log('Result: ' + celsius + ' Celsius degrees in Fahrenheit is ' + fahrenheit)\r
`},4:{name:"04.js",title:"Exercise 4",content:`<h2>Exercise 4 - Calculate Time</h2>
<p>Read a number from the user for distance and a number for speed and print the time.</p>
<img src="../assets/img/std.png" alt="">`,solution:`console.log('EX 04')\r
console.log('Read a number from the user for distance and a number for speed and print the time.')\r
// reviewed ✔️\r
\r
// 4. Read a number from the user for distance and a number for speed and print the time.\r
\r
var distance = +prompt('Enter a distance (km):')\r
var speed = +prompt('Enter speed (km/h):')\r
\r
var time = distance / speed\r
\r
console.log('Result:')\r
console.log('For the distance: ' + distance + ' kilometers')\r
console.log('and the speed: ' + speed + ' km/h')\r
console.log('it will take ' + time + ' hours to get to the destination')\r
`},5:{name:"05.js",title:"Exercise 5",content:`<h2>Exercise 5 - Number from Digits</h2>
<p>Read 3 digits from the user, join them to one number and print it.</p>
<p>For example: if the user enters the digits 3, 2 and 6, we should store them in a variable holding the value <span class="code">'326'</span> and then print that variable to the console.</p>

<p>BONUS: In this case, working with strings is easier. try solving the task while using numeric variables.</p>
`,solution:`console.log('Ex 05')\r
console.log('Print the number');\r
// reviewed ✔️\r
\r
//5. Read 3 digits from the user and print the number in full: for example: if the user entered the numbers 3,2,6, we should store them in a variable holding the value of 326 and then print that variable to the console.\r
//● BONUS: In this case, working with strings is easier, try solving the task while using numeric variables.\r
\r
var strDigit1 = prompt('Enter first digit')\r
var strDigit2 = prompt('Enter second digit')\r
var strDigit3 = prompt('Enter third digit')\r
\r
var strNum = strDigit1 + strDigit2 + strDigit3\r
console.log('The full number is: ' + strNum)\r
\r
//BONUS:\r
var digit1 = +prompt('Enter first digit')\r
var digit2 = +prompt('Enter second digit')\r
var digit3 = +prompt('Enter third digit')\r
\r
var num = digit1 * 100 + digit2 * 10 + digit3\r
console.log('The full number is: ' + num)`},6:{name:"06.js",title:"Exercise 6",content:`<h2>Exercise 6 - Quadratic Equation</h2>
<p>Read 3 variables from the user: <span class="code">a, b</span>and <span class="code">c</span>.</p>
<p>These will be the  <span class="math">a, b</span> and <span class="math">c</span> coefficients of a quadratic equation. (מקדמי משוואה ריבועית)</p>
<ol>
    <li>Print the values of the following calculations to the console:
        <ul>
            <li><span class="math">-b</span></li>
            <li><span class="math">2a</span></li>
            <li><span class="math">b&sup2 - 4ac</span></li>
        </ul>
    </li>
    <li>
        BONUS: a quadratic equation looks like this: <span class="math">ax² + bx + c = 0</span>
        <p>The two solutions for of this equation are <span class="math">X&#8321</span> and <span class="math">X&#8322;</span>:</p>
        <img src="../assets/img/quadratic_formula.png" alt="">

        <ul>
            <li>Print the quadratic equation as a string to the console</li>
            <li>Print the solutions of <span class="math">X&#8321</span> and <span class="math">X&#8322;</span>  to the console.</li>
            <li>If the discriminant is 0 – the equation has a single solution</li>
            <li>If the discriminant is negative – the equation has no solutions</li>
        </ul>
        <br>
        <p>Here’s an example:</p>
        <section id="quadratic-example">
            <p class="example-title">For the following equation:</p>	
            <p class="example-body"><span class="math">2x² – 5x + 2 = 0</span></p>
            <p class="example-title">Your inputs are:</p>
            <p class="example-body"><span class="math">a = 2,    b = -5,    c = 2</span></p>
            <p class="example-title">your output to the console should be:
            <article class="example-body flex-column">
                <p><span class="code">2x² – 5x + 2 = 0</span></p>
                <p><span class="code">x&#8321; = 2 ; x&#8322; = 0.5</span></p>
            </article>
        </section>
        <br>
        <p>Hint: To print the <span class="code">x²</span> to the console, use this: string: <span class="code">'x\\u00B2'</span></p>
    </li>
</ol>`,solution:`console.log('Ex 06')\r
console.log('Quadratic equation')\r
// reviewed ✔️\r
\r
// 6. Read 3 variables from the user: a, b, c. These will be the a, b, c variables of a\r
// quadratic equation. ( (משוואה ריבועית\r
// a. Calculations for the solution of the quadratic equation:\r
// • Print to the console the value of “-b”\r
// • Print to the console the value of “2*a”\r
// • Print to the console the value of the discriminant. Discriminant=b*b-4*a*c\r
// b. BONUS:\r
// Now, a quadratic equation looks like:\r
// The two solutions for of this equation are X1 and X2:\r
// Your tasks:\r
// • Print the quadratic equation as a string to the console\r
// • Print the solutions of X1 and X2 to the console.\r
// Example: for the following equation: 2X² – 5x + 2 = 0\r
// Your inputs are: a=2, b=-5, c=2\r
// your output to the console should be:\r
// 2X² - 5x + 2 = 0\r
// x1 = 2 ; x2 = 0.5\r
// Hint: To print the x² to the console, use this: string: 'x\\u00B2'\r
\r
var a = +prompt('Enter variable a')\r
var b = +prompt('Enter variable b')\r
var c = +prompt('Enter variable c')\r
\r
var minusB = -b\r
var doubleA = a * 2\r
var discriminant = b * b - 4 * a * c\r
\r
console.log('-b: ' + minusB)\r
console.log('2*a: ' + doubleA)\r
console.log('The discriminant is: ', discriminant)\r
\r
//BONUS:\r
var equation = ''\r
var bOperator = ''\r
var cOperator = ''\r
\r
if (a) {\r
    if(a === 1) {\r
        equation = 'x\\u00B2'\r
    } else {\r
        equation = a + 'x\\u00B2'\r
    }\r
}\r
if (b) {\r
  if (b > 0 && a) {\r
    bOperator = '+'\r
  }\r
  equation += bOperator + b + 'x'\r
}\r
if (c) {\r
  if (c > 0 && b) {\r
    cOperator = '+'\r
  }\r
  equation += cOperator + c\r
}\r
\r
console.log('The quadratic equation is: ' + equation)\r
\r
if(discriminant < 0) {\r
    console.log('This quadratic equation has no solution');\r
} else {\r
    var x1 = (minusB + discriminant ** 0.5) / doubleA\r
    console.log('x1: ', x1)\r
    if(discriminant === 0) {\r
        console.log('This quadratic equation has a single solution');\r
    } else {\r
        var x2 = (minusB - discriminant ** 0.5) / doubleA\r
        console.log('x2: ', x2)\r
    }\r
}\r
\r
// Example input for single solution:\r
\r
// x2 + 2x + 1 = 0 (solution: x = -1)\r
// x2 + 4x + 4 = 0 (solution: x = -2)\r
// x2 + 6x + 9 = 0 (solution: x = -3)\r
// x2 + 8x + 16 = 0 (solution: x = -4)\r
// x2 + 10x + 25 = 0 (solution: x = -5)\r
\r
// Example input for two solutions:\r
// 4x2 + 26x + 12 = 0\r
// x2 + 5x - 4 = 0 r\r
// x2 + 5x + 6 = 0 \r
// x2 + 10x + 16 = 0 \r
\r
// Example input for no solution:\r
// x2 + x + 5 = 0\r
// x2 + x + 4 = 0\r
// x2 + 5x + 12 = 0`},7:{name:"07.js",title:"Exercise 7",content:`<h2>Exercise 7 - Two Numbers Equal the Third</h2>
<p>Read 3 numbers from the user and check if the 3rd is the sum of the first two.</p> 
<p>If it is, print all the numbers to the console like this: <span class="console">6 + 4 = 10</span></p>
<p>If not, print them like this: <span class="console">3 + 5 != 10</span></p>
`,solution:`console.log('Ex 07')\r
console.log('Is the 3rd number is the sum of the first two?');\r
// reviewed ✔️\r
\r
// 7. Read 3 numbers from the user and check if the 3rd is the\r
//  sum of the first two, if so, \r
// print all the numbers to the console in this way: 6 + 4 = 10\r
\r
var num1 = +prompt('First number?')\r
var num2 = +prompt('Second number?')\r
var num3 = +prompt('Third number?')\r
\r
var operator = ' != '\r
\r
if (num1 + num2 === num3) {\r
    operator = ' = '\r
}\r
\r
console.log(num1 + ' + ' + num2 + operator + num3)`},8:{name:"08.js",title:"Exercise 8",content:`<h2>Exercise 8 - The Smallest of Three Numbers</h2>
<p>Read three numbers from the user and print the smallest one.</p>`,solution:`console.log('Ex 08')\r
console.log('The smallest number')\r
// reviewed ✔️\r
\r
// 8. Read 3 numbers from the user and print the smallest one.\r
\r
var num1 = +prompt('First number?')\r
var num2 = +prompt('Second number?')\r
var num3 = +prompt('Third number?')\r
\r
var smallestNum = num3\r
\r
if (num2 < smallestNum) {\r
  smallestNum = num2\r
}\r
if (num1 < smallestNum) {\r
  smallestNum = num1\r
}\r
\r
console.log('The smallest number is:', smallestNum)\r
\r
// Another option:\r
\r
// if (num1 > num2) {\r
//     if (num3 > num2) {\r
//         smallestNum = num2\r
//     }\r
// } else {\r
//     if (num3 > num1) {\r
//         smallestNum = num1\r
//     }\r
// }\r
\r
// Another option:\r
\r
// if (num1 > num2) {\r
//     if (num3 > num2) {\r
//         smallestNum = num2\r
//     } else {\r
//         smallestNum = num3\r
//     }\r
// } else {\r
//     if (num3 > num1) {\r
//         smallestNum = num1\r
//     } else {\r
//         smallestNum = num3\r
//     }\r
// }\r
\r
// Another option:\r
\r
if (num1 < num3 && num1 < num2) {\r
  console.log('The first number is the smallest: ', num1)\r
} else if (num2 < num1 && num2 < num3) {\r
  console.log('The second number is the smallest: ', num2)\r
} else {\r
  console.log('The third number is the smallest: ', num3)\r
}\r
`},9:{name:"09.js",title:"Exercise 9",content:`<h2>Exercise 9 - Absolute Value</h2>
<p>Read two positive numbers from the user.</p>
<p>Calculate the difference between them (the absolute value).</p>
<ul>
    <li>First, check that the input values are numbers (try googling something like ‘javascript check if number’)</li>
    <li>Print the inputs and the absolute difference between them to the console.</li>
    <li>If the difference is smaller than both input values, print a message to the console saying that those numbers are relatively close.</li>
</ul>
<p>It should look something like this – </p>

<p class="console">num1 = 5, num2 = 9, diff = 4 (numbers are relatively close!)</p>
<p class="console">num1 = 15, num2 = 89, diff = 74 </p>
`,solution:`console.log('Ex 09')\r
console.log('Difference between two positive numbers');\r
// reviewed ✔️\r
\r
// EX09: Read 2 positive numbers from the user. Calculate the difference between the two of \r
// them (the absolute value).\r
// If the diff variable is smaller than both values, print that those numbers are \r
// relatively-close (i.e. – num1=5, num2=9 then diff=4 => relatively-close!)\r
// • Validate that your values are numbers (hint: google something like: ‘javascript \r
// check if number’)\r
\r
var num1 = +prompt('Please enter a number')\r
var num2 = +prompt('Please enter another number')\r
var diff\r
\r
if (isNaN(num1) || isNaN(num2)) {\r
    console.log('Invalid input - not numbers')\r
} else if (num1 < 0 || num2 < 0) {\r
    console.log('Invalid input - negative numbers')\r
} else {\r
    if (num1 > num2) {\r
        diff = num1 - num2\r
    } else {\r
        diff = num2 - num1\r
    }\r
\r
    // // Another option \r
    // diff = num1 - num2\r
    // if (diff < 0) {\r
    //     diff *= -1\r
    // }\r
\r
    // Another option\r
    // diff = Math.abs(num1 - num2)\r
\r
    if (diff < num1 && diff < num2) {\r
        console.log('Numbers are relatively close')\r
    }\r
    console.log('The diff between the numbers is: ', diff)\r
}\r
`},10:{name:"10.js",title:"Exercise 10",content:`<h2>Exercise 10 - Facebook Friends</h2>
<p>Ask the user how many friends he has on FB and print out an analysis:</p>
<ul>
    <li>More than 500 friends – <strong><em>'OMG, a celebrity!'</em></strong></li>
    <li>More than 300 friends (and up to 500) – <strong><em>'You are well connected!'</em></strong></li>
    <li>More than 100 friends – <strong><em>'You know some people...'</em></strong></li>
    <li>Up to 100 friends  – <strong><em>'Quite picky, aren't you?'</em></strong></li>
    <li>0 – <strong><em>'Let’s be friends!'</em></strong></li>
</ul>





`,solution:`console.log('Ex 10')\r
console.log('Friends on FB')\r
// reviewed ✔️\r
\r
// EX10: Ask the user how many friends he has on FB and print out an analysis: \r
// • More than 500 – ‘OMG, a celebrity!’\r
// • More than 300 (and up to 500) – ‘You are well connected!’\r
// • More than 100– ‘You know some people...’\r
// • Up to 100 – ‘Quite picky aren't you?’\r
// • 0 – ‘Let’s be friends!’\r
\r
var friendCount = +prompt('How many friends do you have on FB?')\r
var msg\r
\r
if (friendCount > 500) {\r
    msg = 'OMG, a celebrity!'\r
} else if (friendCount > 300) {\r
    msg = 'You are well connected!'\r
} else if (friendCount > 100) {\r
    msg = 'You know some people...'\r
} else if (friendCount > 0) {\r
    msg = 'Quite picky arent you?'\r
} else {\r
    msg = 'Let’s be friends!'\r
}\r
\r
console.log(msg)\r
`},11:{name:"11.js",title:"Exercise 11",content:`<h2>Exercise 11 - Bank System</h2>
<ul>
    <li>Initialize a variable named currBalance with the value: <span class="code">1000</span></li>
    <li>Initialize a constant named  PIN  with the value: <span class="code">'0796'</span></li>
    <li>Prompt the user to enter a secret pin code.</li>
    <li>If the user entered the correct pin code, ask him how much he would like to withdraw. Print a nice message with the new balance.</li>
    <li>If the pin code was wrong, alert the user with a different message, and don’t allow him make a withdrawal. </li>
    <li>Add a feature: don’t let the user withdraw more than he has in his account. </li>
</ul>

`,solution:`console.log('Ex 11')\r
console.log('Banking system')\r
// reviewed ✔️\r
\r
// EX11: Rolling Project: BankSystem\r
// • Initialize a variable: currBalance with the value: 1000\r
// • Prompt the user to get a secret pin code, ‘0796’.\r
// • After it was validated to be true, ask the user how much would he like to withdraw.\r
// Print a nice message with the new balance.\r
// • If the code was wrong, alert with a different message, and don’t let him to withdraw\r
// the sum.\r
// • Add a feature: don’t let the user withdraw more than he has in his account.\r
\r
var currBalance = 1000\r
var pinCode = '0796'\r
var enteredPinCode = prompt('Please enter your pin code')\r
\r
if (pinCode !== enteredPinCode) {\r
  console.error('Wrong pin code')\r
} else {\r
  var withdraw = +prompt('How much would you like to withdraw')\r
\r
  if (withdraw > currBalance) {\r
    console.error('Maximum amount to withdraw: ', currBalance)\r
  } else {\r
    currBalance -= withdraw\r
    console.log('Your new balance:', currBalance)\r
  }\r
}\r
`},12:{name:"12.js",title:"Exercise 12",content:`<h2>Exercise 12 - Guess Who</h2>
<p>Use the alert function, and ask the user to think about an actor.</p>
<p>Use the confirm function and ask the user two yes/no questions:</p>

<p>Question 1: <span class="console">'Is he a man?'</span></p>
<br>
<ul>
    <li>If the answer to question 1 is <span class="console">'Yes'</span>, then Question 2 becomes: <span class="console">'Is he blonde?'</span></li>
        <ul>
            <li>If the answer to question 2 is <span class="console">'Yes'</span> - <span class="console">Philip Seymour!</span></li>
            <li>If the answer to question 2 is <span class="console">'No'</span> - <span class="console">Tom Cruise!</span></li>
        </ul>
    <br>
    <li>If the answer to question 1 is <span class="console">'No'</span>, then Question 2 becomes: <span class="console">'Is she English?'</span></p>
        <ul>
            <li>If the answer to question 2 is <span class="console">'Yes'</span> - <span class="console">Keira Knightley!</span></li>
            <li>If the answer to question 2 is <span class="console">'No'</span> - <span class="console">Natalie Portman!</span></li>
        </ul>
</ul>
`,solution:`console.log('Ex 12')\r
console.log('Guess Who')\r
// reviewed ✔️\r
\r
/*\r
• Use the alert function, and ask the user to think about an actor\r
• Use the confirm function and ask the user 2 yes/no questions:\r
Question 1: Is he a man?\r
 Yes:\r
● Question 2: Is he Blonde?\r
○ Yes: Philip Seymour!\r
○ No: Tom Cruise!\r
 No:\r
● Question 2: Is she English?\r
○ Yes: Keira Knightley!\r
○ No: Natalie Portman!\r
*/\r
\r
alert('Think about an actor/actress........')\r
\r
var isMan = confirm('Is he a man?')\r
if (isMan) {\r
  var isBlonde = confirm('Is he blonde?')\r
  if (isBlonde) {\r
    console.log('Philip Seymour!')\r
  } else {\r
    console.log('Tom Cruise!')\r
  }\r
} else {\r
  var isEnglish = confirm('Is she English?')\r
  if (isEnglish) {\r
    console.log('Keira Knightley!')\r
  } else {\r
    console.log('Natalie Portman!')\r
  }\r
}\r
`},13:{name:"13.js",title:"Exercise 13",content:`<h2>Exercise 13 - The Elevator</h2>
<ul>
    <li>Keep a <span class="code">currentFloor</span> variable, initialize it to 0</li>
    <li>Ask the user which floor would he like to go to. </li>
    <li>Validate the floor is between -2 and 4.</li>
    <li>Update the <span class="code">currentFloor</span> variable accordingly.</li>
    <li>Let the user know his current floor.</li>
    <li>If the user goes to floor 0 alert 'Bye Bye'.</li>
    <li>If the user goes to the parking lot (negative floors) alert: 'Drive Safely'. </li>
</ul>
`,solution:`console.log('Ex 13')\r
console.log('The Elevator')\r
// reviewed ✔️\r
\r
// • Keep a currentFloor variable, initialize it to 0\r
// • Ask the user which floor would he like to go to.\r
// • Validate the floor is between -2 and 4.\r
// • Update the currentFloor variable accordingly.\r
// • Let the user know his current floor.\r
// • If the user goes to floor 0 alert 'Bye Bye'.\r
// • If the user goes to the parking lot (negative floors) alert: 'Drive Safely'.\r
\r
var currFloor = 0\r
var wantedFloor = +prompt('Which floor you would like to go to?')\r
\r
if (wantedFloor >= -2 && wantedFloor <= 4) {\r
  currFloor = wantedFloor\r
  console.log('Your current floor is', currFloor)\r
\r
  if (currFloor === 0) {\r
    alert('Bye bye...')\r
  } else if (currFloor < 0) {\r
    alert('Drive safely!')\r
  }\r
} else {\r
  console.log('Invalid floor. choose one from -2 to 4.')\r
}\r
`},14:{name:"14.js",title:"Exercise 14",content:`<h2>Exercise 14 - Greet Function</h2>
<p>Write a function which receives a user name as a parameter and greets the user.</p>`,solution:`console.log('Ex 14');\r
console.log('Write a function that gets a user name as a parameter and greets the user.');\r
// reviewed ✔️\r
\r
// Write a function that gets a user name as a parameter and greets the user.\r
\r
\r
console.log('INPUT: Puki Ben David');\r
console.log('EXPECTED: Hello and welcome Puki Ben David');\r
console.log('ACTUAL: ');\r
greetUser('Puki Ben David');\r
\r
function greetUser(username) {\r
  console.log('Hello and welcome', username);\r
}\r
`},15:{name:"15.js",title:"Exercise 15",content:`<h2>Exercise 15 - Sum of two Numbers</h2>
<p>Write a function which receives two numbers and returns their sum</p>`,solution:`console.log('Ex 15');\r
console.log('Write a function that gets 2 numbers and returns their sum.');\r
// reviewed ✔️\r
\r
// Write a function that gets 2 numbers and returns their sum.\r
\r
console.log('INPUT: num1: 1, num2: 2');\r
console.log('EXPECTED: 3');\r
console.log('ACTUAL: ');\r
var sum = sumTheNums(1, 2);\r
console.log('sum :>> ', sum);\r
\r
console.log('INPUT: num1: 0, num2: 0');\r
console.log('EXPECTED: 0');\r
console.log('ACTUAL: ');\r
sum = sumTheNums(0, 0);\r
console.log('sum :>> ', sum);\r
\r
console.log('INPUT: num1: -5, num2: 80');\r
console.log('EXPECTED: 75');\r
console.log('ACTUAL: ');\r
sum = sumTheNums(-5, 80);\r
console.log('sum :>> ', sum);\r
\r
function sumTheNums(num1, num2) {\r
  return num1 + num2;\r
}\r
`},16:{name:"16.js",title:"Exercise 16",content:`<h2>Exercise 16 - Even and Odd</h2>
<p>Write a function named <span class="code">isEven(num)</span> which receives a number, and returns <span class="code">true</span>if the number is even, and <span class="code">false</span>if it is odd.</p>`,solution:`console.log('Ex 16');\r
console.log(\r
  'Write a function named isEven that gets a number, and returns true if the number is even. Otherwise the function will return false.'\r
);\r
// reviewed ✔️\r
\r
// Write a function named isEven that gets a number, and returns true if the number is even. Otherwise the function will return false.\r
\r
console.log('INPUT: 2');\r
console.log('EXPECTED: true');\r
console.log('ACTUAL: ', isEven(2));\r
\r
console.log('INPUT: 3');\r
console.log('EXPECTED: false');\r
console.log('ACTUAL: ', isEven(3));\r
\r
console.log('INPUT: -2');\r
console.log('EXPECTED: true');\r
console.log('ACTUAL: ', isEven(-2));\r
\r
function isEven(num) {\r
  return num % 2 === 0;\r
}\r
`},17:{name:"17.js",title:"Exercise 17",content:`<h2>Exercise 17 - Get the Bigger Num</h2>
<p>Write a function named <span class="code">getBigger</span>  which receives two numbers and returns the bigger one.</p>`,solution:`console.log('Ex 17');\r
console.log('Write a function named getBigger that gets 2 numbers and returns the bigger one');\r
// reviewed ✔️\r
\r
// Write a function named getBigger that gets 2 numbers and returns the bigger one\r
\r
console.log('INPUT: num1: 3, num2: 1');\r
console.log('EXPECTED: 3');\r
console.log('ACTUAL: ', getBigger(3, 1));\r
\r
console.log('INPUT: num1: -5, num2: 7');\r
console.log('EXPECTED: 7');\r
console.log('ACTUAL: ', getBigger(-5, 7));\r
\r
// For very smart people\r
// console.log('ACTUAL: ', getBiggerHack(3, 1));\r
\r
function getBigger(num1, num2) {\r
  if (num1 > num2) {\r
    return num1;\r
  }\r
  return num2;\r
}\r
\r
function getBiggerHack(num1, num2) {\r
  return Math.max(num1, num2);\r
}\r
`},18:{name:"18.js",title:"Exercise 18",content:`<h2>Exercise 18 - Age Check</h2>
<p>Write a function named <span class="code">isAbove18</span> which receives a name and an age.</p>
<p>The function should check if the age is above eighteen and use alert to show a message :</p>

<p>If the user is younger than eighteen, the message will be &nbsp &nbsp -  &nbsp<span class="console">'You are too young.'</span></p> 
<p>otherwise, the message will be  &nbsp &nbsp -  &nbsp<span class="console">'You are over 18!'</span> </p>
<ul>
    <li>Use the user's name within the alerts.</li>
    <li>The function should also return a boolean value - print it to the console. </li>
</ul>
`,solution:`console.log('Ex 18');\r
console.log('This function checks if the age is above 18');\r
// reviewed ✔️\r
\r
// Write a function named isAbove18 that gets a name and an age. This function checks if the age is above eighteen. In case the user is younger than eighteen, alert 'You are too young', otherwise alert 'You're allowed to buy a beer' (Use the user's name within the alerts). Also, the function should return a boolean value. * For now, we will make no use of the returned value.\r
\r
console.log('INPUT: username: puki, age: 12');\r
console.log('EXPECTED: false');\r
console.log('ACTUAL: ', isAbove18('Puki Ben David', 12));\r
\r
console.log('INPUT: username: puki, age: 18');\r
console.log('EXPECTED: true');\r
console.log('ACTUAL: ', isAbove18('Puki Ben David', 18));\r
\r
console.log('INPUT: username: puki, age: 54');\r
console.log('EXPECTED: true');\r
console.log('ACTUAL: ', isAbove18('Puki Ben David', 54));\r
\r
function isAbove18(username, age) {\r
  if (age < 18) {\r
    alert('Sorry ' + username + ' You are a minor...');\r
    return false;\r
  }\r
  alert(username + " You're allowed to buy a beer");\r
  return true;\r
}\r
`},19:{name:"19.js",title:"Exercise 19",content:`<h2>Exercise 19 - Even and Odd Numbers</h2>
<p>Read 10 numbers from the user. Check each number and print it along with a short message indicating whether it is even or odd.</p>
<p>For example:</p>
<ul>
    <li class="console">21 is Odd</li>
    <li class="console">48 is Even</li>
</ul>`,solution:`'use strict';\r
\r
console.log('Ex 19');\r
console.log(\r
  'Read 10 numbers from the user, if the number is even, print it, otherwise print that the number is odd.'\r
);\r
// reviewed ✔️\r
\r
// Read 10 numbers from the user, if the number is even, print it, otherwise print that the number is odd.\r
\r
var count = 0;\r
\r
while (count < 10) {\r
  var num = +prompt('Enter a number');\r
  if (num % 2 === 0) {\r
    console.log('The number ' + num + ' is Even');\r
  } else {\r
    console.log('The number ' + num + ' is Odd');\r
  }\r
  count++;\r
}\r
\r
// for (var i = 0; i < 10; i++) {\r
//   num = +prompt('Enter a number');\r
//   if (num % 2 === 0) {\r
//     console.log('The number ' + num + ' is Even');\r
//   } else {\r
//     console.log('The number ' + num + ' is Odd');\r
//   }\r
// }\r
`},20:{name:"20.js",title:"Exercise 20",content:`<h2>Exercise 20 - Min, Max and Avg.</h2>
<p>Read 10 numbers from the user and print:</p>
<ul>
    <li>The maximum number.</li>
    <li>The minimum number.</li>
    <li>The average.</li>
</ul>
`,solution:`'use strict'\r
\r
console.log('Ex 20')\r
console.log('Read 10 numbers from the user and print: max, min, avg')\r
// reviewed ✔️\r
\r
// Read 10 numbers from the user and print:\r
// a. The maximum number.\r
// b. The minimum number.\r
// c. The average.\r
\r
var maxNum = -Infinity\r
var minNum = Infinity\r
\r
var sum = 0\r
var count = 0\r
while (count < 10) {\r
  var num = +prompt('Enter a number')\r
  if (num > maxNum) {\r
    maxNum = num\r
  }\r
\r
  if (num < minNum) {\r
    minNum = num\r
  }\r
\r
  sum += num\r
  count++\r
}\r
\r
console.log('maxNum: ', maxNum)\r
console.log('minNum: ', minNum)\r
console.log('avg: ', sum / count)\r
`},21:{name:"21.js",title:"Exercise 21",content:`<h2>Exercise 21 - Divisible by 3</h2>
<p>
    Read numbers from the user, until the number 999 is entered. For each number:
</p>
<ul>
    <li>Print if it is divisible by 3.</li>
    <li>If it is bigger by more than 10 from the previous number, print a suitable message.</li>
</ul>`,solution:`'use strict'\r
\r
console.log('Ex 21')\r
console.log('Read numbers from the user until 999 is entered')\r
// reviewed ✔️\r
\r
// Read numbers from the user, until the number 999 is entered. For each number:\r
// a. Print if it’s divided by 3.\r
// b. Print whether this number is much bigger (more than 10) than the previous number.\r
\r
var currNum = +prompt('Please enter a number (enter 999 to exit)')\r
var prevNum = currNum\r
\r
while (currNum !== 999) {\r
  if (currNum % 3 === 0) {\r
    console.log(currNum, 'is divided by 3')\r
  } else {\r
    console.log(currNum, 'is not divided by 3')\r
  }\r
\r
  if (currNum > prevNum + 10) {\r
    console.log(currNum, 'is much bigger than', prevNum)\r
  }\r
  prevNum = currNum\r
  currNum = +prompt('Please enter a number (enter 999 to exit)')\r
}\r
`},22:{name:"22.js",title:"Exercise 22",content:`<h2>Exercise 22 - <span class="code">myPow()</span></h2>
<p>Write a function named <span class="code">myPow()</span> which receives 2 parameters: a base (<span class="code">n</span>), and an exponent (<span class="code">exp</span>) and returns <span class="code">n<sup>exp</sup></span></p>
<p>Sample unit testing:</p>
<p><span class="console">INPUT: 2, 3</span></p>
<p><span class="console">EXPECTED: 8</span></p>
<p><span class="console">ACTUAL: 8</span></p>
`,solution:`'use strict'\r
\r
console.log("Ex 22")\r
console.log('Write pow func')\r
// reviewed ✔️\r
\r
// +UnitTesting Write a function named myPow that gets 2 parameters: base, exponent and returns the power. (use a loop…)\r
\r
console.log('INPUT:', 2, 3)\r
console.log('EXPECTED:', 8)\r
console.log('ACTUAL: ', myPow(2, 3))\r
\r
console.log('INPUT: 3,2')\r
console.log('EXPECTED: 9')\r
console.log('ACTUAL: ', myPow(3, 2))\r
\r
console.log('INPUT: 10,3')\r
console.log('EXPECTED: 1000')\r
console.log('ACTUAL: ', myPow(10, 3))\r
\r
function myPow(base, exponent) {\r
    var power = 1\r
    while (exponent > 0) {\r
        power *= base\r
        exponent--\r
    }\r
    return power\r
}\r
\r
// function myPow(base, exponent) {\r
//     var number = base;\r
//     for (var i = 1; i < exponent; i++) {\r
//         number *= base;\r
//     }\r
\r
//     return (number);\r
// }\r
\r
\r
// supports negative exponent\r
\r
// function myPow(base, exponent) {\r
//    if (exponent === 0) return 1;\r
//     var counter = 1;\r
//     var pow = base;\r
\r
//     while (counter < Math.abs(exponent)) {\r
//         pow *= base;\r
//         counter++;\r
//     }\r
//     if (exponent < 0) return (1 / pow);\r
//     return pow;\r
// }`},23:{name:"23.js",title:"Exercise 23",content:`<h2>Exercise 23 - Factorial!</h2>
<p>Write the function <span class="code">getFactorial</span> which receives a number and returns <span class="math">n!</span> (Google ‘factorial’ if you are not sure what the mathematical definition of it is).</p>`,solution:`'use strict'

console.log('Ex 23')
console.log('get factorial')
// reviewed ✔️

// Write the function getFactorial that gets a number and returns n! (Google factorial if
// you are not sure what is the mathematical definition of it).

console.log('INPUT: 3')
console.log('EXPECTED: 6')
console.log('ACTUAL: ', getFactorial(3))

console.log('INPUT: 4')
console.log('EXPECTED: 24')
console.log('ACTUAL: ', getFactorial(4))

console.log('INPUT: 4')
console.log('EXPECTED: 24')
console.log('ACTUAL: ', getFactorialFor(4))

function getFactorial(num) {
  var factorial = 1
  while (num > 1) {
    factorial *= num
    num--
  }
  return factorial
}

// function getFactorialFor(num) {
//   var factorial = 1
//   for (var i = num; i > 1; i--) {
//     factorial *= i
//   }
//   return factorial
// }
`},24:{name:"24.js",title:"Exercise 24",content:`<h2>Exercise 24 - <span class="code">myAbs()</span></h2>
<p>Try playing around with the function <span class="code">Math.abs()</span> and read its documentation on <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs">MDN</a>. Implement a function called <span class="code">myAbs()</span>, which mimics the behavior of <span class="code">Math.abs()</span>.</p>`,solution:`'use strict'

console.log("Ex 24")
console.log('my abs')
// reviewed ✔️

// +UnitTesting Play with the function Math.abs(), read the documentation in MDN.
// Implement myAbs(), write the function yourself.


console.log('INPUT: 4')
console.log('EXPECTED: 4')
console.log('ACTUAL: ', myAbs(4))

console.log('INPUT: -2')
console.log('EXPECTED: 2')
console.log('ACTUAL: ', myAbs(2))

console.log('INPUT: 0')
console.log('EXPECTED: 0')
console.log('ACTUAL: ', myAbs(0))



function myAbs(num) {
    if (num >= 0) return num
    return -num
    // return num * -1

    // return (num < 0) ? -num : num
}`},25:{name:"25.js",title:"Exercise 25",content:`<h2>Exercise 25 - <span class="code">getRandomInt()</span></h2>
<p>Write A function named <span class="code">getRandomInt(min, max)</span>. The function should generate a random integer between <span class="code">min</span> and up to, but not including, <span class="code">max</span>.</p>
<p>Tip: use <span class="code">Math.Random()</span> and <span class="code">Math.Floor()</span>.</p>
<p>After you've worked it out, read <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random">this page</a> and look at the implementation of the <span class="code">getRandomInt()</span> function.</p>`,solution:`'use strict'

console.log('Ex 25')
console.log('my random integer')
// reviewed ✔️

// Write A function named getRandomInteger(min, max). The function should generate
// a random integer between the min and max parameters.
// Hint: Use Math.Random & Math.Floor.
// a. After you've played with it enough, read this page. Look at the getRandomInt
// function.
// b. Yes, it's better, now remember you can always use it later on in the course.
// (how amazing is that?)

console.log('INPUT: 5, 7')
console.log('EXPECTED: random int btween 5 - 7')
console.log('ACTUAL: ', getRandomInteger(5, 7))

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min) + min) // 0 - 0.9999999
}
`},26:{name:"26.js",title:"Exercise 26",content:`<h2>Exercise 26 - Ascending Random Numbers</h2>
<p>
    Write a program which generates 10 ascending random numbers (each number is greater than the previously generated number).
    <p class="tight-paragraph">The first number n , should be in the range	<span class="math">0 &ndash; 1000</span>,</p> 
    <p class="tight-paragraph">and each subsequent number, should be  in the range	<span class="math">(n+1) &ndash; (n+1000)</span></p> 
    
</p>
<section id="ex26-example" class="two-column-table">
    <p>For example:</p>                 <p></p>
    <p>First random number:</p> 		<p><span class="math">0 &ndash; 1000  	=> 	100</span></p>
    <p>Second random number:</p> 		<p><span class="math">101 &ndash; 1101 	=> 	748</span></p>
    <p>Third random number:</p> 		<p><span class="math">749 &ndash; 1749 	=> 	1650…</span></p>
</section>`,solution:`'use strict'

console.log('Ex 26')
console.log('get 10 random numbers')
// reviewed ✔️

// Write a program that generates 10 random numbers. The numbers should be
// generated so each number is greater than the previously generated number.
// To simplify, generate the first number n so it is between (0→1000), and each
// subsequent number will be in the range of ( n+1 → n+1001).
// example:
// First random number: (0→1000) 100
// Second random number: (101→1101) 748
// Third random number: (749→1749) 1650…

console.log('ACTUAL:')
getRandomNumbers()

function getRandomNumbers() {
  var min = 0
  var count = 0
  while (count < 10) {
    var randomInt = getRandomInteger(min, min + 1000)
    console.log(randomInt)
    min = randomInt + 1
    count++
  }

  // for (var i = 0; i < 10; i++) {
  //     var randomInt = getRandomInteger(minVal, minVal + 1000)
  //     console.log(randomInt);
  //     minVal = randomInt + 1
  // }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}
`},27:{name:"27.js",title:"Exercise 27",content:`<h2>Exercise 27 - Asterisks!</h2>
<ol>
    <li>
        Implement the function  <span class="code">getAsterisks(length)</span> which returns a string of asterisks. The number of asterisks in the string is determined by <span class="code">length</span>. 
        <p>For example: when the requested length is 4,  it returns <span class="console">'****'</span></p>
    </li>
    <li>
        Implement the function <span class="code">getTriangle(height)</span>  which returns a triangle.
        For example,  <span class="code">getTriangle(4)</span> , will return a string which will look like this when printed to the console:
        <pre class="console">

    *
    **
    ***
    ****
    ***
    **
    *
        </pre> 
        <p>Hint: use the function <span class="code">getAsterisks()</span> in a loop. Also, use <span class="console">'\\n'</span>  to create new lines.</p>
    </li>
    <li>
        Implement the function  <span class="code">getMusicEqualizer(rowCount)</span> which generates random numbers between 1 and 10 and returns rows of random lengths.
        <p>For example,  <span class="code">getMusicEqualizer(5)</span> , will return a string which will look something like this when printed to the console:</p>
        <pre class="console">

    **
    ******
    *****
    ***
    *****
        </pre>
    </li>
    <li>
        Implement the function <span class="code">getBlock(rows, cols)</span>  which returns a block of asterisks in the dimensions given by its parameters. 
        For example,  <span class="code">getBlock(4, 5)</span> , will return a string which will look like this when printed to the console:
        <pre class="console">

    *****
    *****
    *****
    *****
        </pre>
    </li>
    <li>
        Now Implement  <span class="code">getBlockOutline(rows, cols)</span>,  which only returns the block outline:
        <pre class="console">

    *****
    *   *
    *   *
    *****    
        </pre>
    </li>
    <li>
        Surprise! There is a new requirement to support any character (not necessarily asterisks). The character should be decided by the user. 
        Refactor your code to support this requirement
        How would you rename the function to better describe its new functionality?</li>
    </li>
</ol>
`,solution:`'use strict'\r
\r
console.log('Ex 27')\r
console.log('print Asterisks')\r
// reviewed ✔️\r
\r
// a. Write the function getAsterisks(length) that returns a string containing asterisks according to the number supplied. For example: when the requested length is 4, it returns '****'\r
// b. Write a function named: getTriangle(height) that returns a triangle:\r
// c. Write a function named: getMusicEqualizer(rowsCount) that generates random numbers between 1 and 10 and return columns in random lengths:\r
// d. Write a function that returns a block of asterisks (*) by the following parameters: rowsCount and colsCount. I.e: for 4, 5\r
// e. Surprise, there is a new requirement to support any character (not necessarily asterisk), how easy would it be to refactor your code? The character should be decided by the user\r
\r
// Printing patterns of Asterisks.\r
// const CHAR = prompt('What char you want?')\r
const CHAR = '*'\r
/*\r
*****\r
*   *\r
*   *\r
*   *\r
*****\r
*/\r
// a.\r
console.log('print string that contains the given char:')\r
console.log(getSymbol(4, CHAR))\r
console.log('====================')\r
\r
// b.\r
console.log('print triangle:')\r
console.log(getTriangle(5, CHAR))\r
console.log('====================')\r
\r
// c.\r
console.log('print equalizer:')\r
console.log(getMusicEqualizer(4, CHAR))\r
console.log('====================')\r
\r
// d.\r
console.log('print block:')\r
console.log(patternBlock(4, 5, CHAR))\r
console.log('====================')\r
\r
// e.\r
console.log('print block outlined:')\r
console.log(getPatternOutline(5, 4, CHAR))\r
\r
function getSymbol(length, char) {\r
  var count = 0\r
  var str = ''\r
  while (count < length) {\r
    str += char // '*'\r
    count++\r
  }\r
  return str\r
\r
  // Another option:\r
  // return char.repeat(length)\r
}\r
\r
function getTriangle(height, char) {\r
  if (height === 1) return char\r
  var count = 1\r
  var triangle = ''\r
  while (count < height) {\r
    triangle += getSymbol(count, char) + '\\n'\r
    count++\r
  }\r
  while (count > 0) {\r
    triangle += getSymbol(count, char) + '\\n'\r
    count--\r
  }\r
  return triangle\r
}\r
\r
/*\r
***\r
*\r
*****\r
*\r
*/\r
function getMusicEqualizer(rowsCount, char) {\r
  var count = 0\r
  var equalizer = ''\r
  while (count < rowsCount) {\r
    var randomNum = getRandomInteger(1, 10)\r
    equalizer += getSymbol(randomNum, char) + '\\n'\r
    count++\r
  }\r
  return equalizer\r
}\r
\r
function patternBlock(rows, cols, char) {\r
  var count = 0\r
  var str = ''\r
  while (count < rows) {\r
    str += getSymbol(cols, char) + '\\n'\r
    count++\r
  }\r
  return str\r
}\r
\r
function getPatternOutline(rows, cols, char) {\r
  var count = 0\r
  var str = ''\r
  while (count < rows) {\r
    if (count === 0 || count === rows - 1) {\r
      str += getSymbol(cols, char) + '\\r'\r
    } else {\r
      str += _getEmptyLine(cols, char) + '\\r'\r
    }\r
    count++\r
  }\r
  return str\r
}\r
\r
function _getEmptyLine(length, char) {\r
  var str = char\r
  var count = length - 2\r
  while (count > 0) {\r
    str += ' '\r
    count--\r
  }\r
  str += char\r
  return str\r
}\r
\r
function getRandomInteger(min, max) {\r
  min = Math.ceil(min)\r
  max = Math.floor(max)\r
  return Math.floor(Math.random() * (max - min) + min) //The maximum is exclusive and the minimum is inclusive\r
}\r
`},28:{name:"28.js",title:"Exercise 28",content:`<h2>Exercise 28 - Greatest Common Devisor</h2>
<p class="mb-m">Write a program which calculates the greatest common divisor (GCD) of two positive integers.</p>
<p class="mb-l">For example: if the input are  6 and 15,  the calculation’s result should be 3.</p>
<p class="tip">Tip: we need a loop that runs from 6 to 2 and checks the modulus… </p>
`,solution:`'use strict'\r
\r
console.log('Ex 28')\r
console.log('Find GCD')\r
// reviewed ✔️\r
\r
// Write a program that computes the greatest common divisor (GCD) of two positive integers.\r
// Example: 6, 15 => gcd: 3 Hint: we need something like a loop: i 6 -> 2 and check modulus.\r
\r
console.log('INPUT: num1: 6, num2: 24')\r
console.log('EXPECTED: 6')\r
console.log('ACTUAL: ', findGCD(6, 8))\r
\r
console.log('\\n')\r
\r
console.log('INPUT: num1: 9, num2: 36')\r
console.log('EXPECTED: 9')\r
console.log('ACTUAL: ', findGCD(9, 36))\r
\r
console.log('\\n')\r
\r
console.log('INPUT: num1: 60, num2: 72')\r
console.log('EXPECTED: 12')\r
console.log('ACTUAL: ', findGCD(60, 72))\r
\r
function findGCD(num1, num2) {\r
  var divider\r
  if (num1 < num2) {\r
    divider = num1\r
  } else {\r
    divider = num2\r
  }\r
\r
  // short-if\r
  var divider = num1 < num2 ? num1 : num2\r
\r
  while (divider) {\r
    if (num1 % divider === 0 && num2 % divider === 0) return divider\r
    divider--\r
  }\r
}\r
\r
// var dividerSqrt = Math.sqrt(startingDivider)\r
// var startingDivider = divider\r
`},29:{name:"29.js",title:"Exercise 29",content:`<h2>Exercise 29 - Digit Manipulation</h2>
<p>Read a number from the user (&nbsp;keep it as a string i.e. <span class="console">"24367"</span>) and then:</p>		
<ol type="a">
    <li>
        <p class="mb-xl">Basic operations:</p>
        <ol>
            <li class="mb-s">Print each of its digits in a separate line.</li>
            <li class="mb-s">Calculate the sum of its digits.</li>
            <li class="mb-s">Calculate the multiplication (מכפלה) of its digits.</li>
            <li class="mb-s">Sum its first and last digits.</li>
            <li class="mb-s">Print it with its first and last digits swapped.	 (<span class="console">2731</span> => <span class="console">1732</span>)</li>
            <li class="mb-s">Check whether it is symmetric.	 (&nbsp;like this number: <span class="console">95459</span>)</li>
            <li class="mb-s">Print the number reversed.</li>
            <li>BONUS: Print the number reversed as a number and not as string.</li>
        </ol>
    </li>
    <li class="mt-xl">
        <p class="mb-xl">BONUS: Special Numbers</p>
        <ol>
            <li class="mb-l">
                <p class="mb-l">Check if the number is an Armstrong number. An Armstrong number is an integer, such that the sum of each of its digits, raised to a power equal to the number of its digits, is equal to the number itself.</p> 
                <p>For example: <span class="math">371</span>  is an Armstrong number, because  <span class="math">3&nbsp;&sup3;+7&nbsp;&sup3;+1&nbsp;&sup3; = 371</span>.</p>
                <p>Another example: <span class="math">548,834</span> is an Armstrong number, because  <span class="math">5&#8310;+4&#8310;+8&#8310;+8&#8310;+3&#8310;+3&#8310; = 548,834</span></p>
                <p class="mb-l mt-l">If the number passed the test, print it to the console.</p>
            </li>
            <li class="mb-xl">Check if the number is a Perfect number. A Perfect number is a positive integer that is equal to the sum of its divisors.
                For example:  <span class="math">6</span>  is a Perfect number <span class="math">(1+2+3)</span>.</li>
            <li>Read a number from the user and store it in a variable named  max. 
                Implement a function which will print all the Perfect numbers and all the Armstrong numbers that are smaller than  max. </li>
        </ol>
    </li>

</ol>
    
`,solution:`'use strict'\r
\r
console.log('Ex 29')\r
console.log('Operations on number')\r
// CR needed ✏️\r
\r
// 29.Read a number from the user (keep it as string such as “24367”) and then:\r
// var number = prompt('Enter a number')\r
var numberStr = '1234'\r
\r
// a. Basic operations:\r
// i. Print each of its digits in a separate line.\r
printDigits()\r
\r
function printDigits() {\r
  var idx = 0\r
  while (idx < numberStr.length) {\r
    console.log(numberStr.charAt(idx))\r
    idx++\r
  }\r
}\r
\r
// ii. Calculate the sum of its digits.\r
console.log('INPUT:', numberStr)\r
console.log('EXPECTED: 10')\r
console.log('ACTUAL: ', getDigitsSum(numberStr))\r
console.log('~~~~~~~~~~~~~')\r
\r
function getDigitsSum(numberStr) {\r
  var idx = 0\r
  var sum = 0\r
  while (idx < numberStr.length) {\r
    sum += be + numrStr.charAt(idx)\r
    idx++\r
  }\r
  return sum\r
}\r
\r
// iii. Calculate the multiplication (מכפלה (of its digits\r
console.log('INPUT:', numberStr)\r
console.log('EXPECTED: 24')\r
console.log('ACTUAL: ', getDigitsMult(numberStr))\r
console.log('~~~~~~~~~~~~~')\r
\r
function getDigitsMult(numberStr) {\r
  var idx = 0\r
  var mult = 1\r
  while (idx < numberStr.length) {\r
    mult *= +numberStr.charAt(idx)\r
    idx++\r
  }\r
  return mult\r
}\r
\r
// iv. Sum it’s first and last digits.\r
console.log('INPUT:', numberStr)\r
console.log('EXPECTED: 5')\r
console.log('ACTUAL: ', getFirstLastSum(numberStr))\r
console.log('~~~~~~~~~~~~~')\r
\r
function getFirstLastSum(numberStr) {\r
  var lastDigit = +numberStr.charAt(numberStr.length - 1)\r
  var firstDigit = +numberStr.charAt(0)\r
  return lastDigit + firstDigit\r
}\r
\r
// v. Print it with it’s first and last digits swapped (2731=>1732)\r
console.log('INPUT:', numberStr)\r
console.log('EXPECTED: 4231')\r
console.log('ACTUAL: ')\r
getFirstLastSwap(numberStr)\r
console.log('~~~~~~~~~~~~~')\r
\r
function getFirstLastSwap(numberStr) {\r
  var str = numberStr.charAt(numberStr.length - 1) + numberStr.substring(1, numberStr.length - 1) + numberStr.charAt(0)\r
  console.log('Swapped str is', str)\r
}\r
\r
// vi. Check whether it’s symmetric (like this number: 95459)\r
var symmetricNum = '95459'\r
var unSymmetricNum = '1234'\r
\r
console.log('INPUT: ', symmetricNum)\r
console.log('EXPECTED: true')\r
console.log('ACTUAL: ', isSymmetric(symmetricNum))\r
console.log('INPUT: ', unSymmetricNum)\r
console.log('EXPECTED: false')\r
console.log('ACTUAL: ', isSymmetric(unSymmetricNum))\r
console.log('~~~~~~~~~~~~~')\r
\r
function isSymmetric(num) {\r
  var idx = 0\r
  while (idx < Math.floor(num.length / 2)) {\r
    if (num.charAt(idx) !== num.charAt(num.length - idx - 1)) return false\r
    idx++\r
  }\r
  return true\r
}\r
\r
// vii. Print the number reversed (BONUS: as a number and not as string).\r
console.log('INPUT:', numberStr)\r
console.log('EXPECTED: 4321')\r
console.log('ACTUAL: ')\r
printReversedStr(numberStr)\r
console.log('~~~~~~~~~~~~~')\r
\r
function printReversedStr(numStr) {\r
  var idx = numStr.length - 1\r
  var reveresedStr = ''\r
  while (idx >= 0) {\r
    reveresedStr += numStr.charAt(idx--)\r
  }\r
  console.log('Reveresed string', reveresedStr)\r
}\r
\r
// BONUS:\r
console.log('INPUT:', numberStr)\r
console.log('EXPECTED:', 8764321)\r
console.log('ACTUAL: ')\r
printReversedNum(numberStr)\r
console.log('~~~~~~~~~~~~~')\r
\r
function printReversedNum() {\r
  var num = 1234678\r
  var reversedNum = 0\r
  while (num) {\r
    reversedNum *= 10\r
    reversedNum += num % 10\r
    num = Math.floor(num / 10)\r
  }\r
  console.log('Reveresed number', reversedNum)\r
}\r
\r
// b. BONUS: Special Numbers\r
// i. Check if the number is an Armstrong number. I.e 371 is an Armstrong number: 3**3+7**3+1**3 =371. If the number passed the test, print it to the\r
// console.\r
\r
console.log('INPUT: ', 153)\r
console.log('EXPECTED: 153 is an Armstrong number')\r
console.log('ACTUAL: ')\r
printArmstrong(153)\r
console.log('INPUT: ', 154)\r
console.log('EXPECTED: 154 is NOT an Armstrong number')\r
console.log('ACTUAL: ')\r
printArmstrong(154)\r
console.log('~~~~~~~~~~~~~')\r
\r
function printArmstrong(num) {\r
  var numCopy = num\r
  var sum = 0\r
  var length = ('' + num).length\r
\r
  while (numCopy > 0) {\r
    var digit = numCopy % 10\r
    sum += digit ** length\r
    numCopy = parseInt(numCopy / 10)\r
  }\r
\r
  if (sum === num) console.log(num + ' is an Armstrong number')\r
  else console.log(num + ' is NOT an Armstrong number')\r
}\r
\r
// ii. Check if the number is a Perfect number. Perfect number is a number that the sum of all its dividers is the number itself. I.e 6 is a perfect number (1+2+3).\r
\r
console.log('INPUT: ', 6)\r
console.log('EXPECTED: true')\r
console.log('ACTUAL: ', isPerfect(6))\r
console.log('INPUT: ', 7)\r
console.log('EXPECTED: false')\r
console.log('ACTUAL: ', isPerfect(7))\r
console.log('~~~~~~~~~~~~~')\r
\r
function isPerfect(num) {\r
  var divider = 1\r
  var dividersSum = 0\r
\r
  while (divider <= Math.ceil(num / 2)) {\r
    if (num % divider === 0) dividersSum += divider\r
    divider++\r
  }\r
\r
  return dividersSum === num\r
}\r
// iii. Read a number from the user. Store it in a variable called max. The function should print all the perfect numbers and all the Armstrong numbers that are smaller than max.\r
\r
// printSpecialNumbers()\r
\r
function printSpecialNumbers() {\r
  var max = +prompt('Enter a number')\r
  for (var i = 0; i < max; i++) {\r
    if (isArmstrong(i)) console.log('the number ' + i + ' is an Armstrong number')\r
    if (isPerfect(i)) console.log('the number ' + i + ' is an Perfect number')\r
  }\r
}\r
`},30:{name:"30.js",title:"Exercise 30",content:`<h2>Exercise 30 - Print the Longer String</h2>
<p>Read two names from the user and print the longer one.</p>`,solution:`'use strict'\r
\r
console.log('EX 30');\r
console.log('Read 2 names from the user and print the longest');\r
// CR needed ✏️\r
\r
// 30. Read 2 names from the user and print the longest.\r
\r
\r
printLongestName()\r
\r
function printLongestName() {\r
    var name1 = prompt('Enter first name')\r
    var name2 = prompt('Enter second name')\r
\r
    var longestName = name1\r
\r
    if (name2.length > name1.length) {\r
        longestName = name2\r
    }\r
    console.log('The longest name is:', longestName);\r
}\r
`},31:{name:"31.js",title:"Exercise 31",content:`<h2>Exercise 31 - Basic String Manipulation</h2>
<p>Read a string from the user and print:</p>
<ol type="a">
    <li>Its length.</li>
    <li>Its first and last characters.</li>
    <li>The string in all uppercase and then, in all lowercase letters.</li>
</ol>`,solution:`'use strict'\r
\r
console.log('EX 31');\r
console.log('string manipulations');\r
// CR needed ✏️\r
\r
// 31. Read a string from the user and print:\r
// c. Its length.\r
// d. Its first and last characters.\r
// e. The string in uppercase and lowercase letters.\r
\r
var str = prompt('Enter a string')\r
console.log('Length:', str.length);\r
console.log('First Character:', str.charAt(0) + 'Last Character:', str.charAt(str.length - 1));\r
console.log('UpperCase:', str.toUpperCase());\r
console.log('LowerCase:', str.toLowerCase());`},32:{name:"32.js",title:"Exercise 32",content:`<h2>Exercise 32 - Reverse a String</h2>
<p>Read a string from the user and print it backwards using a loop.</p>`,solution:`'use strict'\r
\r
console.log('EX 32');\r
console.log('reversing a string');\r
// CR needed ✏️\r
\r
// 32. Read a string from the user and print it backwards using a loop.\r
\r
var str = prompt('Enter a string')\r
var reversedStr = ''\r
\r
for (var i = str.length - 1; i >= 0; i--) {\r
    reversedStr += str.charAt(i)\r
}\r
console.log('The backward str is:', reversedStr);\r
`},33:{name:"33.js",title:"Exercise 33",content:`<h2>Exercise 33 - Vowels (a, e, i, o, u)</h2>
<p>Write the following functions:</p>
<ol>
    <li><span class="code"> printVowelsCount(str)</span>- which receives a string and prints how many times each vowel appears.</li>
    <li><span class="code">flipCase</span>- which gets a string and changes the vowels to lowercase letters, and the rest to uppercase letters (i.e. <span class="console">Upset uPSeT</span>).</li>
    <li><span class="code">doubleVowels</span>- which gets a string and doubles all the vowels in it.</li>
</ol>
<p>Test the functions using these inputs: <span class="console">'aeiouAEIOU'</span> & <span class="console">'TelAvivBeach'</span></p>
`,solution:`'use strict';\r
\r
console.log('EX 33');\r
console.log('fun with vowels - string manipulations');\r
// reviewed ✔️\r
\r
/*\r
33.+UnitTesting VOWELS (aeiou)\r
code the following functions:\r
a. Write a function named printVowelsCount(str) that gets a string and print how\r
many times each vowel appears.\r
*/\r
\r
const VOWELS = 'aeiouAEIOU';\r
\r
console.log('INPUT: TelAvivBeach');\r
console.log(\r
  'EXPECTED:\\n Char a appears 1 times\\n Char e appears 2 times\\n Char i appears 1 times\\n Char o appears 0 times\\n Char u appears 0 times\\n Char A appears 1 times\\n Char E appears 0 times\\n Char I appears 0 times\\n Char O appears 0 times\\n Char U appears 0 times'\r
);\r
console.log('ACTUAL:');\r
printVowelsCount('TelAvivBeach');\r
\r
function printVowelsCount(str) {\r
  for (var i = 0; i < VOWELS.length; i++) {\r
    var currVowel = VOWELS.charAt(i);\r
    var vowelCount = 0;\r
    for (var j = 0; j < str.length; j++) {\r
      var char = str.charAt(j);\r
      if (currVowel === char) {\r
        vowelCount++;\r
      }\r
    }\r
    console.log('Char', currVowel, 'appears', vowelCount, 'times');\r
  }\r
}\r
\r
console.log('\\n====================\\n');\r
\r
// b. Write a function that gets a string and changes the vowels to lowercase letters,\r
// and the rest to uppercase letters (GiZiM GiDoo).\r
\r
// console.log('INPUT: gizim gidoo');\r
// console.log('EXPECTED: GiZiM GiDoo');\r
console.log('ACTUAL:', flipCase('gizim gidoo'));\r
\r
function flipCase(str) {\r
  var res = '';\r
  for (var i = 0; i < str.length; i++) {\r
    var char = str.charAt(i);\r
    char = (VOWELS.includes(char)) ? char.toLowerCase() : char.toUpperCase();\r
    res += char;\r
  }\r
  return 'The selective case string is: ' + res;\r
}\r
\r
console.log('\\n====================\\n');\r
\r
// c. Write a function that gets a string and doubles all the vowels in it.\r
// Test the functions using the inputs: “aeiouAEIOU” “TelAvivBeach"\r
\r
console.log('INPUT - aeiouAEIOU');\r
console.log('EXPECTED - aaeeiioouuAAEEIIOOUU');\r
console.log('ACTUAL - ', changeToDoubleVowels('aeiouAEIOU'));\r
\r
console.log('INPUT - TelAvivBeach');\r
console.log('EXPECTED - TeelAAviivBeeaach');\r
console.log('ACTUAL - ', changeToDoubleVowels('TelAvivBeach'));\r
\r
function changeToDoubleVowels(str) {\r
  var doubleVowelStr = '';\r
  var char = '';\r
  for (var i = 0; i < str.length; i++) {\r
    char = str.charAt(i);\r
    if (VOWELS.includes(char)) {\r
      doubleVowelStr += char;\r
    }\r
    doubleVowelStr += char;\r
  }\r
  return 'The double vowels string is: ' + doubleVowelStr;\r
}\r
`},34:{name:"34.js",title:"Exercise 34",content:`<h2>Exercise 34 - myIndexOf()</h2>
<p>Implement a function named <span class="code">myIndexOf(str, searchStr)</span> which receives two strings.</p>
<p>The function returns the index of the second string within the first, or -1  if it wasn’t found (do not use the built-in <span class="code">indexOf()</span>function… ). </p>`,solution:`'use strict'\r
\r
console.log('EX 34')\r
console.log('My Index Of')\r
// reviewed ✔️\r
\r
// 34.+UnitTesting write a function named myIndexOf(str, searchStr) that accepts 2 strings.\r
// The function returns the index of the second string in the first, if it wasn’t found, return\r
// -1 (don’t use the built-in indexOf...).\r
\r
console.log('INPUT: abbcd,bc')\r
console.log('EXPECTED: 2')\r
console.log('ACTUAL: ', myIndexOf1('abbcd', 'bc'))\r
\r
console.log('INPUT: hello index, idx')\r
console.log('EXPECTED: -1')\r
console.log('ACTUAL: ', myIndexOf('hello index', 'idx'))\r
\r
function myIndexOf(str, searchStr) {\r
  for (var i = 0; i <= str.length - searchStr.length; i++) {\r
    if (str.substring(i, i + searchStr.length) === searchStr) {\r
      return i\r
    }\r
  }\r
  return -1\r
}\r
\r
\r
\r
// without substring:\r
function myIndexOf1(str, searchStr) {\r
  var currLength = 0\r
  var index = 0\r
  for (var i = 0; i < str.length; i++) {\r
    while (str.charAt(i + index) === searchStr.charAt(index)) {\r
      currLength++\r
      if (currLength === searchStr.length) return i\r
      index++\r
    }\r
    currLength = 0\r
    index = 0\r
  }\r
  return -1\r
}\r
`},35:{name:"35.js",title:"Exercise 35",content:`<h2>Exercise 35 - Encrypt</h2>
<p>Write the function <span class="code">encrypt</span> which gets a string and encrypts it.</p>
<ol>
    <li>
        Implement the function by replacing each character <span class="code">code</span> with <span class="code">code + 5</span> (i.e. <span class="console">'r'</span> will be replaced by: <span class="console">'w'</span>).
    </li>
    <li>Write the function <span class="code">decrypt</span> which decrypts a message.</li>
</ol>
<p class="tip">Tip: try writing this in the console: <span class="console">'ABC'.charCodeAt(0)</span><br>
Tip: search for the opposite function to <span class="code">charCodeAt</span></p>
<p>Bonus: extract the common logic to an <span class="code">encode</span> function which both encrypts and decrypts.</p>
`,solution:`'use strict'\r
\r
console.log('EX 35')\r
console.log('encrypt - decrypt');\r
// reviewed ✔️\r
\r
// 35.+UnitTesting Write the function encrypt that gets a string and encrypts it. It replaces each character code with the code+5 (I.e. 'r' will be replaced by: 'w'). NOTE: The function should encrypt the entire string by shifting each letter as described above. Now write the function decrypt that decrypts a message. Tip: try to write in the console: 'ABC'.charCodeAt(0)\r
// Tip - search for the opposite function to charCodeAt\r
// Bonus: extract the common logic to an encode function that both encrypts and decrypts.\r
\r
console.log('INPUT - rrr')\r
console.log('EXPECTED - www',)\r
console.log('ACTUAL - ', encrypt('Zrr'))\r
\r
console.log('INPUT - www')\r
console.log('EXPECTED - rrr',)\r
console.log('ACTUAL - ', decrypt('Zww'))\r
\r
\r
function encrypt(str) {\r
    var encryptedStr = ''\r
    for (var i = 0; i < str.length; i++) {\r
        var currCharCode = str.charCodeAt(i)\r
        var encryptedChar = String.fromCharCode(currCharCode + 5)\r
        encryptedStr += encryptedChar\r
    }\r
    return encryptedStr\r
}\r
\r
function decrypt(str) {\r
    var encryptedStr = ''\r
    for (var i = 0; i < str.length; i++) {\r
        var currCharCode = str.charCodeAt(i)\r
        var encryptedChar = String.fromCharCode(currCharCode - 5)\r
        encryptedStr += encryptedChar\r
    }\r
    return encryptedStr\r
}\r
\r
// BONUS:\r
console.log('INPUT - abc,true',)\r
console.log('EXPECTED - fgh ',)\r
console.log('ACTUAL - ', encode('abc', true))\r
\r
console.log('INPUT - fgh,false',)\r
console.log('EXPECTED - abc ',)\r
console.log('ACTUAL - ', encode('fgh', false))\r
\r
function encode(str, isEncrypt) {\r
    var encryptedStr = ''\r
    var diff = isEncrypt ? 5 : -5\r
    for (var i = 0; i < str.length; i++) {\r
        var currCharCode = str.charCodeAt(i)\r
        var encryptedChar = String.fromCharCode(currCharCode + diff)\r
        encryptedStr += encryptedChar\r
    }\r
    return encryptedStr\r
} 3`},36:{name:"36.js",title:"Exercise 36",content:`<h2>Exercise 36 - Longest and Shortest Names</h2>
<p>Implement a function which receives a string of comma separated names, for example: <span class="console">'Igal,Moshe,Haim',</span>and prints the longest and shortest names.</p>
<p class="tip">Tip: use the function indexOf. note that the function accepts two parameters.</p>
`,solution:`'use strict'\r
\r
console.log('EX 36')\r
console.log('A function that gets a string of names delimited by a comma and prints the longest name and the shortest name.')\r
// CR needed ✏️\r
\r
// +UnitTesting Write a function that gets a string of names delimited by a comma. I.e: 'igal,moshe,haim' and prints the longest name, and the shortest name. Tip: use the function indexOf, note that the function accepts 2 parameters\r
\r
console.log('INPUT - d,igaladbdmgmne,haim')\r
console.log('EXPECTED - The longest name is: igaladbdmgmne and the shortest name is: da')\r
console.log('ACTUAL - ', printNames('igaladbdmgmne,haim,da'))\r
\r
function printNames(namesStr) {\r
  var longestName = ''\r
  var shortestName = namesStr\r
  var commaIdx = 0\r
  namesStr += ','\r
\r
  for (var i = 0; i < namesStr.length; i = commaIdx + 1) { // Omri - corrected to 'commaIdx+1'\r
    commaIdx = namesStr.indexOf(',', i)\r
    var name = namesStr.substring(i, commaIdx) // Omri - corrected to 'substring(i, commaIdx)'\r
\r
    if (name.length > longestName.length) longestName = name\r
    if (name.length < shortestName.length) shortestName = name\r
  }\r
  return 'The longest name is: ' + longestName + ' and the shortest name is: ' + shortestName\r
}\r
`},37:{name:"37.js",title:"Exercise 37",content:`<h2>Exercise 37 - Generate Password</h2>
<p>Implement a function named <span class="code">generatePass(passLength)</span> which generates a password of the specified length. The password is made out of random digits and letters.</p>`,solution:`'use strict'\r
\r
console.log('EX 37')\r
console.log('that generates a password of a specified length. The password is made out of random digits and letters');\r
// CR needed ✏️\r
\r
// Write a function named generatePass(passLength) that generates a password of a specified length. The password is made out of random digits and letters.\r
\r
console.log(generatePass(5))\r
\r
function generatePass(passLength) {\r
  var charStr = 'absdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'\r
  var password = ''\r
  for (var i = 0; i < passLength; i++) {\r
    var randomIdx = getRandomInteger(0, charStr.length)\r
    password += charStr.charAt(randomIdx)\r
  }\r
  return password\r
}\r
\r
// Another option:\r
// var str = '';\r
// for (var i = 0; i < passLength; i++) {\r
//     str += String.fromCharCode(97 + Math.floor(Math.random() * 26)); //just lowercase\r
// }\r
// return str\r
\r
\r
function getRandomInteger(min, max) {\r
  min = Math.ceil(min)\r
  max = Math.floor(max)\r
  return Math.floor(Math.random() * (max - min) + min) //The maximum is exclusive and the minimum is inclusive\r
}`},38:{name:"38.js",title:"Exercise 38",content:`<h2>Exercise 38 - Bigger than 100</h2>
<p>Implement a function named <span class="code">biggerThan100</span>. It receives an array of numbers and returns a new array containing only the numbers which are greater than 100.</p>`,solution:`'use strict'\r
\r
console.log('EX 38')\r
console.log('biggerThan100');\r
// CR needed ✏️\r
\r
// 38. Write a function named biggerThan100. It gets an array of numbers and returns an array of only the numbers that are bigger than 100.\r
\r
console.log('INPUT: [1, 3, 400, 60, 300, 500]')\r
console.log('EXPECTED: [400, 300, 500]')\r
console.log('ACTUAL:', biggerThan100([1, 3, 400, 60, 300, 500]))\r
/**\r
 * \r
 * @param {*} nums \r
 * @returns \r
 */\r
function biggerThan100(nums) {\r
    var biggerNums = []\r
    for (var i = 0; i < nums.length; i++) {\r
        if (nums[i] > 100) biggerNums.push(nums[i])\r
    }\r
    return biggerNums\r
}`},39:{name:"39.js",title:"Exercise 39",content:`<h2>Exercise 39 - Count Votes</h2>
<p>Implement a function named <span class="code">countVotes(votes, candidateName)</span> which counts how many votes a candidate received.</p>
<p>For example: if the votes  array looks like this: <span class="console">['Nuli', 'Pingi', 'Uza', 'Shabi', ‘Uza’],</span>and the candidate name is <span class="console">'Uza',</span>the function returns <span class="console">2</span>.</p>  


`,solution:`'use strict'\r
\r
console.log('EX 39')\r
console.log('Count votes');\r
// CR needed ✏️\r
\r
// Write a function named countVotes(votes, candidateName) that counts how many votes this candidate got. i.e.: if the votes array looks like this: ['Nuli', 'Pingi', 'Uza', 'Shabi', 'Uza'] And the candidateName is : 'Uza', the function returns 2.\r
\r
var votes = ['Nuli', 'Pingi', 'Uza', 'Shabi', 'Uza']\r
var candidateName = 'Uza'\r
console.log('INPUT: ', votes, candidateName)\r
console.log('EXPECTED: ', 2)\r
console.log('ACTUAL:', countVotes(votes, candidateName))\r
\r
function countVotes(votes, candidateName) {\r
    var count = 0\r
    for (var i = 0; i < votes.length; i++) {\r
        if (votes[i] === candidateName) count++\r
    }\r
    return count\r
}`},40:{name:"40.js",title:"Exercise 40",content:`<h2>Exercise 40 - Lorem Ipsum</h2>
<p>Implement a function named <span class="code">getLoremIpsum(wordsCount)</span> which return a sentence with random dummy text (google: lorem ipsum...) </p>
<p>Here are the steps you may use to solve this: </p>
<ol type="a">
    <li class="mb-m">Create a string or an array of all the characters in the English alphabet.</li>
    <li class="mb-m">Write a function named <span class="code">getWord()</span> which returns a single word made of 3 - 5 random letters. The length of the word will be generated randomly. </li>
    <li class="mb-m">Call this function in a loop to create a sentence.</li>
</ol>`,solution:`'use strict'\r
\r
console.log('EX 40')\r
console.log('My Lorem Ipsum');\r
// CR needed ✏️\r
\r
/*\r
Write a function named getLoremIpsum(wordsCount) that return a sentence with random dummy text (google: lorem ipsum...) TIP, here are the steps you may use to solve this:\r
a. First, write a function named getWord(). The function returns a single word made out of 3-5 random letters the length of the word will be generated randomly. Tip: you can create a string or an array of all the characters in the English alphabet.\r
b. Lastly, call this function in a loop to create a sentence. \r
*/\r
\r
var res = getLoremIpsum(4)\r
console.log('res:', res)\r
\r
\r
function getLoremIpsum(wordsCount) {\r
    var sentence = ''\r
\r
    for (var i = 0; i < wordsCount; i++) {\r
        sentence += getWord()\r
\r
        // if (i === wordsCount - 1) sentence += '.'\r
        // else sentence += ' '\r
        sentence += (i === wordsCount - 1) ? '.' : ' '\r
    }\r
    return sentence\r
}\r
\r
function getWord() {\r
    const letters = 'abcdefghiklmnopqrstvxwyz'\r
    var randomLength = getRandomInteger(3, 5)\r
    var word = ''\r
    for (var i = 0; i < randomLength; i++) {\r
        var randIdx = getRandomInteger(0, letters.length - 1);\r
        word += letters.charAt(randIdx)\r
    }\r
    return word\r
}\r
\r
function getRandomInteger(min, max) {\r
    return Math.floor(Math.random() * (max - min + 1) + min)\r
}\r
\r
\r
// function getRandomInt(min, max){\r
//     min = Math.ceil(min);\r
//     max = Math.floor(max);\r
//     return Math.floor(Math.random() * (max - min + 1) + min);\r
// }`},41:{name:"41.js",title:"Exercise 41",content:`<h2>Exercise 41 - Digits to Words</h2>
<p>Write a function named sayNum(num) which prints each digit in words</p> 
<p> For example: </p>

<p><span class="console">123&nbsp; => One Two Three.</span></p>
<p><span class="console">7294 => Seven Two Nine Four.</span></p>

<p class="tip">Tip: You may use  switch  inside a loop or an array named digitNames. 
(Or maybe… just try them both!)</p>
`,solution:`'use strict'\r
\r
console.log('Ex 41')\r
console.log('prints each digit in words')\r
// CR needed ✏️\r
\r
//  EX41 +UnitTesting Write a function named sayNum(num) that prints each digit in words. \r
// I.e: 123 => One Two Three. 7294 => Seven Two Nine Four. TIP: You may use \r
// Switch inside a loop OR an array named digitNames. (Or what the heck, try them \r
// both.)\r
\r
const digitNames = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']\r
\r
console.log('INPUT:', 325)\r
console.log('EXPECTED:', 'three two five')\r
console.log('ACTUAL:', sayNum(325))\r
\r
console.log('INPUT:', 0)\r
console.log('EXPECTED:', 'zero')\r
console.log('ACTUAL:', sayNum(0))\r
\r
function sayNum(num) {\r
    var numsStr = '' + num //'325'\r
    var digitStr = ''\r
    for (var i = 0; i < numsStr.length; i++) {\r
        var currNum = +numsStr.charAt(i) // 3\r
        digitStr += digitNames[currNum] + ' '\r
    }\r
    return digitStr.trim()\r
}\r
\r
// WITH SWITCH\r
function sayNum2(num) {\r
    var str = '';\r
    num += '';\r
    for (var i = 0; i < num.length; i++) {\r
        var currNum = num[i];\r
        switch (currNum) {\r
            case '1':\r
                str += 'One ';\r
                break;\r
            case '2':\r
                str += 'Two ';\r
                break;\r
            case '3':\r
                str += 'Three ';\r
                break;\r
            case '4':\r
                str += 'Four ';\r
                break;\r
            case '5':\r
                str += 'Five ';\r
                break;\r
            case '6':\r
                str += 'Six ';\r
                break;\r
            case '7':\r
                str += 'Seven ';\r
                break;\r
            case '8':\r
                str += 'Eight ';\r
                break;\r
            case '9':\r
                str += 'Nine ';\r
                break;\r
            case '0':\r
                str += 'Zero ';\r
                break;\r
        }\r
    }\r
    return str.trim();\r
}\r
`},42:{name:"42.js",title:"Exercise 42",content:`<h2>Exercise 42 - Starts with...</h2>
<p>Write a function named startsWithS , which receives an array of names and returns a new array, containing only those names which begin with S.</p>
<p>Now, refactor your function to work on any letter by adding a letter parameter. Rename the function to reflect its new functionality. </p>
`,solution:`'use strict'\r
\r
console.log('Ex 42')\r
console.log('Start with S')\r
// CR needed ✏️\r
\r
// EX42 Write a function named startsWithS that gets an array of names and returns an array of the names that start with S.\r
// a. Refactor your function to work on any letter by adding a letter parameter, you might need to rename the function so it will suit it’s new capacity.\r
\r
var names = ['Matan', 'David', 'Susu', 'Sasa', 'Sansa']\r
\r
console.log('INPUT: [Matan, David, Susu, Sasa, Sansa]')\r
console.log('EXPECTED:', '[Susu, Sasa, Sansa]')\r
console.log('ACTUAL:', startsWithS(names))\r
\r
function startsWithS(names) {\r
    var namesWithS = []\r
    for (var i = 0; i < names.length; i++) {\r
        var name = names[i]\r
        var firstChar = name.charAt(0)\r
        if (firstChar.toLowerCase() === 's') {\r
            namesWithS.push(names[i]);\r
        }\r
    }\r
    return namesWithS\r
}\r
\r
//Step 2\r
names = ['Matan', 'David', 'Dusu', 'Dasa', 'Dansa']\r
\r
console.log('INPUT: [Matan, David, Dusu, Dasa, Dansa]')\r
console.log('EXPECTED:', '[ David, Dusu, Dasa, Dansa]')\r
console.log('ACTUAL:', startsWithLetter(names, 'D'))\r
\r
// Any letter\r
function startsWithLetter(names, letter) {\r
    var namesWithLetter = []\r
    for (var i = 0; i < names.length; i++) {\r
        if (names[i].charAt(0).toLowerCase() === letter.toLowerCase()) {\r
            namesWithLetter.push(names[i])\r
        }\r
    }\r
    return namesWithLetter\r
}`},43:{name:"43.js",title:"Exercise 43",content:`<h2>Exercise 43 - Sum Arrays</h2>
<ol>
    <li>
        <p>Write the function  sumArrays  which receives two arrays and returns their sum.</p>
        <p>For example: <span class="console">[1, 4, 3] & [2, 5, 1, 9] => [3, 9, 4, 9]</span></p>
        <p class="tip">Tip: this can be done in a single loop by first identifying the shorter or longer array of the two.</p>
    </li>
    <div class="spacer"></div>
    <li>
        <p>Now, read these arrays from the user (until the number 999 is entered)</p>
        <p class="tip">Tip: write the function: getArrayFromUser and call it twice</p>
    </li>
</ol>
`,solution:`'use strict'\r
\r
console.log('Ex 43')\r
console.log('Sum arrays')\r
// reviewed ✔️\r
\r
// EX43 Write the function sumArrays that gets 2 arrays and returns the sum of the two\r
// arrays. I.e: [1, 4, 3] [2, 5, 1, 9] => [3, 9, 4, 9]\r
// TIP: this can be done in a single loop by first identifying the shorter or longer array from the two.\r
// Step2: Read these arrays from the user (until the number 999 is entered) TIP: write the function: getArrayFromUser and call it twice\r
\r
// var nums1 = getArrayFromUser()\r
// var nums2 = getArrayFromUser()\r
var nums1 = [1, 4, 3]\r
var nums2 = [2, 5, 1, 9]\r
\r
console.log('INPUT: ', nums1, nums2)\r
console.log('ACTUAL: ', sumArrays(nums1, nums2))\r
\r
function sumArrays(nums1, nums2) {\r
  var shorterNums = nums1.length > nums2.length ? nums2.slice() : nums1.slice()\r
  var longerNums = nums1.length > nums2.length ? nums1.slice() : nums2.slice()\r
\r
  for (var i = 0; i < shorterNums.length; i++) {\r
    if (isNaN(longerNums[i]) || isNaN(shorterNums[i]))\r
      return console.error('One of the inputs in the array is not a number')\r
    longerNums[i] += shorterNums[i]\r
  }\r
  return longerNums\r
}\r
\r
function getArrayFromUser() {\r
  const MSG = 'Please enter a number, (enter 999 to QUIT)'\r
  var num = +prompt(MSG)\r
  var nums = []\r
  while (num !== 999) {\r
    nums.push(num)\r
    num = +prompt(MSG)\r
  }\r
  return nums\r
}\r
\r
//Todo expected result\r
// function getArrayFromUser(){\r
//     return [2, 5, 1, 9]\r
// }\r
`},44:{name:"44.js",title:"Exercise 44",content:`<h2>Exercise 44 - printNumsCount()</h2>
<p>
    Write the function <span class="code">printNumsCount(nums)</span>. 
    The parameter <span class="code">nums</span>, is an array of integers in the range 0 - 3 like this one:
</p>
<table class="array">
    <tr>
        <td>3</td>
        <td>2</td>
        <td>0</td>
        <td>2</td>
        <td>2</td>
        <td>0</td>
        <td>3</td>
    </tr>
</table>

<p>The function prints how many times each of these numbers appears in the array.</p>
<p>For example: for this input array <span class="console">[3,2,0,2,2,0,3]</span> </p>
<p>the output will look like this:<span class="console">[2,0,3,2]</span> </p>
<p class="tip">Tip: the fact that the values are in a specific range allows us to use a second array, in which the index, is actually the number itself.
The values of this second array, will store the occurrences of the numbers in  nums.</p>
`,solution:`"use strict";\r
\r
console.log("Ex 44");\r
console.log("counts the appearances of the numbers");\r
// reviewed ✔️\r
\r
// EX44 Write the function printNumsCount(nums). The array nums will contain integers in the\r
// range of 0-3 such as:\r
// [3,2,0,2,2,0,3]\r
// GUIDANCE: the fact that the values are in a specific range allows us to use an array\r
// where the index is actually the number itself. The value in the array counts the\r
// appearances of the numbers.\r
\r
var nums = [3, 2, 0, 2, 3];\r
\r
console.log("INPUT: ", nums);\r
console.log("EXPECTED: [1, 0, 2, 2]");\r
console.log("ACTUAL:", printNumsCount(nums));\r
\r
nums = [3, 2, 0, 2, 8];\r
console.log("INPUT: ", nums);\r
console.log("EXPECTED: Not valid number");\r
console.log("ACTUAL:", printNumsCount(nums));\r
\r
nums = [3, 2, 0, 2, -3];\r
console.log("INPUT: ", nums);\r
console.log("EXPECTED: Not valid number");\r
console.log("ACTUAL:", printNumsCount(nums));\r
\r
function printNumsCount(nums) {\r
  var counts = [0, 0, 0, 0];\r
  for (var i = 0; i < nums.length; i++) {\r
    var num = nums[i];\r
    if (isNaN(num) || num < 0 || num > 3) return "Not valid number";\r
    counts[num]++;\r
  }\r
\r
  // for (var i = 0; i < counts.length; i++) {\r
  //   console.log('The number', i, 'appears', counts[i], 'times');\r
  // }\r
\r
  return counts;\r
}\r
`},45:{name:"45.js",title:"Exercise 45",content:`<h2>Exercise 45 - Remove Duplicates</h2>
<p>
    Write the function <span class="code">removeDuplicates(nums)</span>. 
    The parameter<span class="code">nums</span>, is an array of integers in the range 0 - 5 like this one: 
</p>
<table class="array">
    <tr class="array">
        <td>5</td>
        <td>4</td>
        <td>5</td>
        <td>2</td>
        <td>1</td>
        <td>2</td>
        <td>4</td>
    </tr>
</table>
<p>For example: for this input array <span class="console">[5,4,5,2,1,2,4]</span></p>
<p>the output will look like this:<span class="console">[5,4,2,1]</span></p>
<p class="tip">Tip: Notice that the values are in a specific range</p>
`,solution:`'use strict'\r
\r
console.log('Ex 45')\r
console.log('Remove duplicates')\r
// reviewed ✔️\r
\r
// Write the function removeDuplicates(nums). The array nums should contain numbers in the range of 0-5 such as: 5 4 5 1  4\r
// the function returns a new array in which each value appears only once (e.g. in this case: 5, 4, 1)\r
// TIP: Notice that the values are in a specific range.\r
\r
var nums = [5, 1, 5, 1, 0]\r
\r
console.log('INPUT: [5, 1, 5, 1, 0]')\r
console.log('EXPECTED: [5, 1, 0]')\r
console.log('ACTUAL:', removeDuplicates(nums))\r
\r
nums = []\r
console.log('INPUT: []')\r
console.log('EXPECTED: Array is empty')\r
console.log('ACTUAL:', removeDuplicates(nums))\r
\r
function removeDuplicates(nums) {\r
  var numCounters = [0, 0, 0, 0, 0, 0]\r
  var res = []\r
  for (var i = 0; i < nums.length; i++) {\r
    if (numCounters[nums[i]] === 0) {\r
      numCounters[nums[i]]++\r
      res.push(nums[i])\r
    }\r
  }\r
  return res\r
}\r
\r
//Another Option o(n^2)\r
// function removeDuplicates(nums) {\r
//     var res = []\r
//     for (var i = 0; i < nums.length; i++) {\r
//         if (!res.includes(nums[i])) res.push(nums[i])\r
//     }\r
//     return res\r
// }\r
\r
// Another option - Avior (o^2) - no includes\r
// function removeDuplicates(nums) {\r
//   var res = []\r
\r
//   for (var i = 0; i < nums.length; i++) {\r
//     var isDuplicate = false\r
//     var currNum = nums[i]\r
//     for (var j = 0; j < res.length; j++) {\r
//       if (currNum === res[j]) {\r
//         isDuplicate = true\r
//         break\r
//       }\r
//     }\r
\r
//     if (!isDuplicate) res.push(currNum)\r
//   }\r
//   return res\r
// }\r
`},46:{name:"46.js",title:"Exercise 46",content:`<h2>Exercise 46 - Multiply Nums</h2>
<ol>
    <li>
        <p>Write the function: <span class="code">multBy(nums, multiplier)</span> which modifies the <span class="code">nums</span> array so that each of its items, is multiplied by <span class="code">multiplier</span>.</p>
        <p>The function returns the modified array.</p>
    </li>
    <li>
        <p>Add another parameter to this function named <span class="code">isImmutable</span>. </p>
        <p>When this parameter is true, use <span class="code">array.slice()</span>to perform the function’s calculation on a copy of the array, and leave the original array unchanged.</p>
        <p>The function should return the modified array.</p>
    </li>
</ol>`,solution:`'use strict'\r
\r
console.log('Ex 46')\r
console.log('multBy nums array')\r
// CR needed ✏️\r
\r
// EX46: +UnitTesting Write the function: multBy(nums, multiplier) that returns a modified array in which each item in the array is multiplied by a multiplier.\r
// Step2: Add another param: isImmutable. It will be a variable that when it’s value is set to true, use array.slice() to work on a new array. Leave the original array as it was. \r
\r
var nums = [5, -4, 0, 1]\r
\r
console.log('INPUT:', nums, 'multiplier', 3)\r
console.log('EXPECTED: [15, -12, 0, 3]')\r
console.log('ACTUAL:', multBy(nums, 3, true))\r
\r
function multBy(nums, multiplier) {\r
    for (var i = 0; i < nums.length; i++) {\r
        nums[i] *= multiplier;\r
    }\r
    return nums\r
}\r
\r
//Part b\r
function multBy(nums, multiplier, isImmutable) {\r
    var newNums = isImmutable ? nums.slice() : nums\r
    for (var i = 0; i < newNums.length; i++) {\r
        newNums[i] *= multiplier\r
    }\r
    return newNums\r
}\r
\r
`},47:{name:"47.js",title:"Exercise 47",content:`<h2>exercise 47 - <span class="code">mySplit()</span></h2>
<p>Implement your own version of the built-in javaScript <span class="code">split</span> function - <span class="code">mySplit(str, sep)</span>.</p>
<p>Test it with different types of strings and separators:</p>
<ul>
    <li>
        <p>You can try – <span class="console">'Japan,Russia,Sweden'</span> or <span class="console">'1-800-652-0198'</span></p>
    </li>
    <li>
        <p>You can assume that the separator (delimiter) is a single character. </p>
    </li>
    <li>
        <p>BONUS: don’t assume that, e.g: <span class="console">'A|||B|||C'</span></p>
    </li>
</ul>
`,solution:`'use strict'\r
\r
console.log('Ex 47')\r
console.log('My Split')\r
// reviewed ✔️\r
\r
// 47.Implement your own version of the split function: mySplit(str, sep) Test it with different\r
// types of strings and separators. I.e ‘Japan,Russia,Sweden'\r
// You can assume that the separator (delimiter) is a single character. (BONUS: don’t assume that)\r
\r
var strings = 'Japan,Russia,Sweden,USA,Israel'\r
var seperator = ','\r
var splitted = mySplit(strings, seperator)\r
console.log(splitted)\r
\r
strings = 'Japan|||Ru👑ssia|||Swe👑den|||US👑A|||👑Israel'\r
seperator = '|||'\r
splitted = mySplit(strings, seperator)\r
console.log(splitted)\r
\r
// Option (without bonus):\r
function mySplit(str, sep) {\r
  var words = []\r
  var startIdx = 0\r
  str += sep\r
  for (var i = 0; i < str.length; i++) {\r
    var currChar = str.charAt(i)\r
    if (currChar === sep) {\r
      var word = str.substring(startIdx, i)\r
      words.push(word)\r
      startIdx = i + 1\r
    }\r
  }\r
  return words\r
}\r
\r
// Option (without bonus) using indexOf and substring\r
function mySplit(str, sep) {\r
  var strs = []\r
  str += sep\r
  for (var i = 0; i < str.length; i++) {\r
    var sepIdx = str.indexOf(sep)\r
    var word = str.substring(0, sepIdx)\r
    strs.push(word)\r
    str = str.substring(sepIdx + sep.length)\r
  }\r
  return strs\r
}\r
\r
// Option (without bonus) using if else inside for loop:\r
// function mySplit(str, sep) {\r
//   var strs = []\r
\r
//   var word = ''\r
//   for (var i = 0; i < str.length; i++) {\r
//     if (str[i] !== sep && i !== str.length - 1) {\r
//       word += str[i]\r
//     } else {\r
//       strs.push(word)\r
//       word = ''\r
//       console.log(str.indexOf(sep));\r
//     }\r
//   }\r
//   console.log('strs', strs);\r
//   return strs\r
// }\r
\r
// Option (with bonus) using the indexOf with 2 parameters\r
// (second is where to start searching):\r
function mySplit(str, sep) {\r
  var strs = [];\r
  var nextIdx;\r
  for (var i = 0; i < str.length; i = nextIdx + sep.length) {\r
    nextIdx = str.indexOf(sep, i);\r
    if (nextIdx === -1) {\r
      nextIdx = str.length;\r
    }\r
    var word = str.substring(i, nextIdx)\r
    strs.push(word);\r
  }\r
  return strs;\r
}\r
\r
// Option (with bonus) using if else inside for loop:\r
// function mySplit(str, sep) {\r
//     str += sep\r
//     var word = ''\r
//     var strs = []\r
//     for (var i = 0; i < str.length; i++) {\r
//         if (str.substr(i, sep.length) === sep) {\r
//             i += sep.length - 1\r
//             strs.push(word)\r
//             word = ''\r
//         } else {\r
//             word += str.charAt(i)\r
//         }\r
//     }\r
//     return strs\r
// }\r
`},48:{name:"48.js",title:"Exercise 48",content:`<h2>Exercise 48 - <span class="code">sortNums()</span></h2>
<p>
    Implement the function <span class="code">sortNums(nums)</span>. 
    This function returns a sorted version of the original nums array. 
    It works by looping through the array, finding the minimum, splicing it out, and adding it to a new array. 
</p>
<p>Read about how to sort an array yourself, by using the bubble sort algorithm. Google it, copy it, adjust it to match our coding conventions and use it.</p>
`,solution:`'use strict'

console.log('Ex 48')
console.log('Sort array of nums')
// CR needed ✏️

/*
Implement the function sortNums(nums) this function returns a sorted array (without changing the given array).
It works by looping through the array, finding the minimum, splicing it out, and adding it to the new array.
Read about how to sort an array yourself, by using the bubble sort algorithm, google it, copy it and use it.
*/

var nums = [50, 78, 1, 3, 5]
console.log('INPUT: [50, 78, 1, 3, 5]')
console.log('EXPECTED: [1, 3, 5, 50, 78]')
console.log('ACTUAL: ', sortNums(nums))

nums = [560, 88, 3, 90, -1]
console.log('INPUT: [560, 88, 3, 90, -1]')
console.log('EXPECTED: [-1, 3, 88, 90, 560]')
console.log('ACTUAL: ', sortNums(nums))

function sortNums(nums) {
  var copyNums = nums.slice()
  var sortedNums = []
  var currMin = Infinity
  var currMinIdx = 0

  for (var i = 0; i < nums.length; i++) {
    currMin = Infinity
    for (var j = 0; j < copyNums.length; j++) {
      if (copyNums[j] < currMin) {
        currMin = copyNums[j]
        currMinIdx = j
      }
    }
    sortedNums.push(currMin)
    copyNums.splice(currMinIdx, 1)
  }
  return sortedNums
}`},49:{name:"49.js",title:"Exercise 49",content:`<h2>Exercise 49 - <span class="code">getNthLargest()</span></h2>
<p>Write the function <span class="code">getNthLargest(nums, nthNum)</span> to get the n<sup>th</sup> largest element from an array of unique numbers.</p>
<p>For example: <span class="code">getNthLargest([ 7, 56, 88, 92, 99, 89, 11], 3)</span></p>
<p>will return: <span class="console">89</span></p>

<p class="tip">Tip: This can be done more easily by first sorting the array.</p>
<p>BONUS: Try writing the algorithm without sorting the array.</p>
`,solution:`'use strict'\r
\r
console.log('Ex 49');\r
console.log('get nth lagest num');\r
// CR needed ✏️\r
\r
// 48.+UnitTesting Write the function getNthLargest(nums, nthNum) to get the nth largest element from an array of unique numbers. I.e: getNthLargest ([ 7, 56, 23, 8928, , 99, 89, 11], 3) Result: 89 \r
\r
\r
\r
console.log('INPUT: [7, 56, 23, 88, 92, 99, 89, 11]');\r
console.log('EXPECTED: 89');\r
console.log('ACTUAL: ', getNthLargest([7, 56, 23, 88, 92, 99, 89, 11], 3));\r
\r
console.log('INPUT: [7, 56, 101, 100, 92, 99, 89, 11]');\r
console.log('EXPECTED: 100');\r
console.log('ACTUAL: ', getNthLargest([7, 56, 101, 100, 92, 99, 89, 11], 2));\r
\r
console.log('INPUT: [7, 56, 101, 100, 92, 99, 89, 11]');\r
console.log('EXPECTED: 100');\r
console.log('ACTUAL: ', getNthLargestBonus([7, 56, 101, 100, 92, 99, 89, 11], 2));\r
\r
\r
function getNthLargest(nums, nthNum) {\r
    nums.sort(function (num1, num2) {\r
        return num1 - num2\r
    })\r
    return nums[nums.length - nthNum]\r
}\r
\r
// function getNthLargest(nums, nthNum) {\r
//     nums.sort(function (num1, num2) {\r
//         return num2 - num1\r
//     })\r
//     return nums[nthNum - 1]\r
// }\r
\r
function getNthLargestBonus(nums, nthNum) {\r
    var currLargestNumIdx = 0\r
    for (var i = 0; i < nthNum; i++) {\r
        var currLargestNum = -Infinity\r
        for (var j = 0; j < nums.length; j++) {\r
            if (nums[j] > currLargestNum) {\r
                currLargestNum = nums[j]\r
                currLargestNumIdx = j\r
            }\r
        }\r
        nums.splice(currLargestNumIdx, 1)\r
    }\r
    return currLargestNum\r
}`},50:{name:"50.js",title:"Exercise 50",content:`<h2>Exercise 50 - Making Water</h2>
<p>Making Water! Let's imagine that we have the following atoms:</p>
<section class="two-column-table">
    <p>Hydrogen</p>	<p>H</p>
    <p>Boron</p>	<p>B</p>
    <p>Carbon</p>	<p>C</p>
    <p>Nitrogen</p>	<p>N</p>
    <p>Oxygen</p>	<p>O</p>
    <p>Fluorine</p>	<p>F</p>
</section>
<ul>
    <li>Create an array of letters, each one representing one type of atom from the above list.</li>
    <li>Pick random atoms from the array to create molecules of 3 atoms.</li>
    <li>Stop when you get <span class="console">'HOH'</span> (Water – two Hydrogen atoms and one Oxygen atom).</li>
    <li>Print the number of attempts it took to get <span class="console">'HOH'</span>. </li>
</ul>`,solution:`'use strict'\r
\r
console.log('Ex 50')\r
console.log('Build a function makeWater() that makes water')\r
// CR needed ✏️\r
\r
// 50.Making Water! Let's imagine that we have the following atoms:\r
// 'H', 'B', 'C', 'N', 'O', 'F'\r
// a. Use an array with letters that stands for each atom.\r
// b. Pick random atoms from the array to create molecules of 3 atoms.\r
// c. Stop when you got ‘HOH’ for water. (Two Hydrogens and one Oxygen)\r
// d. Print how many tries you had before ‘HOH’ was drawn.\r
\r
console.log('It took', makeWater(), 'tries to get HOH')\r
\r
function makeWater() {\r
  var atoms = ['H', 'B', 'C', 'N', 'O', 'F']\r
  var count = 0\r
  var currMol = ''\r
\r
  while (currMol !== 'HOH') {\r
    currMol = ''\r
    for (var i = 0; i < 3; i++) {\r
      currMol += atoms[getRandomInt(0, atoms.length)]\r
    }\r
    count++\r
  }\r
  return count\r
}\r
\r
function getRandomInt(min, max) {\r
  min = Math.ceil(min)\r
  max = Math.floor(max)\r
  return Math.floor(Math.random() * (max - min)) + min\r
}\r
`},51:{name:"51.js",title:"Exercise 51",content:`<h2>Exercise 51 - Object Map</h2>
<p>Implement the function <span class="code">countWordApperances(txt)</span> which returns an object map.</p>
<ul>
    <li>The object keys will be the words in the string.</li>
    <li>The values will be the number of times each of these words appears in the string.</li>
</ul>
<section class="two-column-table">
    <p>For example:</p> <p class="code">countWordApperances ('puki ben david and muki ben david')</p>
    <p>will return:</p> <p class="console">{ puki: 1, ben: 2, david: 2, and: 1, muki: 1 }</p>
</section>
`,solution:`'use strict'\r
\r
console.log('Ex 51')\r
console.log('Find apperances in text')\r
// CR needed ✏️\r
\r
// +UnitTesting Object as a Map: Write the function countWordApperances(txt) that returns an object map. This object will have a key that will be the word. The value will be the count (how many times this word appeared in the string).\r
// example: countWordApperances('puki ben david and muki ben david') will return: { puki: 1, ben: 2, david: 2, and: 1, muki: 1 }\r
\r
var str = 'puki ben david and muki ben david'\r
console.log('INPUT: puki ben david and muki ben david')\r
console.log('EXPECTED:', { puki: 1, ben: 2, david: 2, and: 1, muki: 1 })\r
console.log('ACTUAL: ', countWordApperances(str))\r
\r
function countWordApperances(txt) {\r
  var words = txt.split(' ')\r
  var wordCountMap = {}\r
\r
  for (var i = 0; i < words.length; i++) {\r
    var currWord = words[i]\r
    if (!wordCountMap[currWord]) {\r
      wordCountMap[currWord] = 0\r
    }\r
    wordCountMap[currWord]++\r
\r
    // // short-if\r
    // wordCountMap[currWord] = (wordCountMap[currWord]) ? wordCountMap[currWord] + 1 : 1\r
\r
    // // short-circuit\r
    // wordCountMap[currWord] = (wordCountMap[currWord] + 1) || 1\r
  }\r
  return wordCountMap\r
}\r
\r
`},52:{name:"52.js",title:"Exercise 52",content:`<h2>Exercise 52 - Monsters</h2>
<p>Create an array of monsters with 4 monsters (use a <span class="code">createMonsters()</span> function).</p>
<ol>
    <li>
        <p>Each monster object should have the following keys –</p>
        <ul>
            <li><span class="code">id</span> – a unique sequential number</li>
            <li><span class="code">name</span> – a name that will be read from the user</li>
            <li><span class="code">power</span> a random number (1 - 100)</li>
        </ul>
    </li>
    <li>
        <p>Implement the following functions:</p>
        <ul>
            <li><span class="code">createMonsters()</span></li>
            <li><span class="code">createMonster(name, power)</span> – returns a new monster object. The name and power parameters are optional – set them to default values if they aren’t passed to the function.</li>
            <li><span class="code">getMonsterById(id)</span> – scans the array for a monster  with the provided id and returns it.</li>
            <li><span class="code">deleteMonster(id)</span> – the function removes the specified monster from the array.</li>
            <li><span class="code">updateMonster(id, newPower)</span> – the function updates the specified monster, setting a new power.</li>
        </ul>
    </li>
    <li>
        <p>Write the function: <span class="code">findMostPowerful(monsters)</span>.</p>
    </li>
    <li>
        <p>
           Write the function: <span class="code">breedMonsters(monsterId1, monsterId2)</span>.
           This function returns a new monster. The breeded monster's power is an average of its parents power. 
           Its name is the beginning half of the first parent name, and the second half is the end of the second parent name.
        </p>
    </li>
</ol>`,solution:`'use strict'

console.log('Ex 52 Solution');
console.log('monsters');
// reviewed ✔️

var gNextId = 100
var gMonsters = createMonsters()

console.log('gMonsters', gMonsters);
// console.log('get by id', getMonsterById(101));
updateMonster(101, 9000);
console.log('updated monsters', gMonsters);
console.log('most powerful monster', findMostPowerfulSort(gMonsters));
console.log('breeded monster', breedMonsters(101, 102));
removeMonster(103);
console.log('gMonsters after remove', gMonsters);

function createMonsters() {
    var monsters = []
    for (var i = 0; i < 4; i++) {
        var monster = createMonster(getRandomStr())
        // var monster = createMonster(prompt('monster name: '))

        monsters.push(monster)
    }
    return monsters
}

function createMonster(name = 'monster', power = 100) {
    return {
        id: gNextId++,
        name: name,
        power: power
    }
}

function getMonsterById(id) {
    for (var i = 0; i < gMonsters.length; i++) {
        if (gMonsters[i].id === id) return gMonsters[i]
    }
    return null
}

function removeMonster(id) {
    for (var i = 0; i < gMonsters.length; i++) {
        if (gMonsters[i].id === id) {
            gMonsters.splice(i, 1)
            break
        }
    }
}

function updateMonster(id, newPower) {
    var monster = getMonsterById(id)
    if (monster) monster.power = newPower
    return monster
}

function findMostPowerful(monsters) {
    if (!monsters.length) return null
    var mostPowerfulMonster = monsters[0]
    for (var i = 1; i < monsters.length; i++) {
        if (monsters[i].power > mostPowerfulMonster.power) {
            mostPowerfulMonster = monsters[i]
        }
    }
    return mostPowerfulMonster
}

//Another option O(N*log(N))
function findMostPowerfulSort(monsters) {
    if (!monsters.length) return null
    monsters.sort(function (monster1, monster2) {
        return monster2.power - monster1.power
    })
    return monsters[0]
}

function breedMonsters(monsterId1, monsterId2) {
    var monster1 = getMonsterById(monsterId1)
    var monster2 = getMonsterById(monsterId2)
    var name = monster1.name.substring(0, Math.floor(monster1.name.length / 2)) +
        monster2.name.substring(Math.floor(monster2.name.length / 2), monster2.name.length)
    var power = (monster1.power + monster2.power) / 2
    var breededMonster = createMonster(name, power)
    return breededMonster
}


function getRandomStr() {
    const LETTERS = 'abcdefghijklmnopqrstuvwxyz'
    var str = '';
    for (var i = 0; i < getRandomInteger(3, 5); i++) {
        str += LETTERS.charAt(getRandomInteger(0, 23));
    }
    return str;
}
function getRandomInteger(min, max) {
    return (Math.floor(Math.random() * (max - min + 1) + min));
}`},53:{name:"53.js",title:"Exercise 53",content:`<h2>Exercise 53 - Students</h2>
<ol>
    <li>Create a students array – use the same algorithm as before and name it <span class="code">createStudents()</span>.</li>
    <li>Read a student name from the user until ‘quit’ is entered. Populate the students array with student objects.</li>
    <li>Read 3 grades for each student (each student should have a grades array). <p></p></li>
    <li>Write the function <span class="code">calcAverageGrade(student)</span>.</li>
    <li>Write the function <span class="code">findWorstStudent(students)</span>.</li>
    <li>Write the function <span class="code">factorGrades(student)</span>,&nbsp;which adds 5% to all of the student’s grades. <p></p></li>
    <li>Write the function <span class="code">forEach(students, func)</span>,&nbsp;which receives an array of student objects and a pointer to a function. It loops through the array and invokes the function, passing it the current element of the array on each iteration.</li>
    <li>Use <span class="code">forEach()</span> to invoke <span class="code">factorGrades(student)</span> on all students in the array.</li>
    <li>Find a way to imlement  <span class="code">findWorstStudent(students)</span> using <span class="code">forEach()</span>.</li>
</ol>`,solution:`'use strict'\r
\r
console.log('Ex 53')\r
console.log('Students')\r
// reviewed ✔️\r
\r
/*\r
53. Students:\r
a. Create a students array (use the same algorithm as before and name it createStudents())\r
b. Read the student name from the user until “quit” is entered. Populate the students array with student objects.\r
c. Read 3 grades for each student (each student should have a grades array).\r
d. Calculate the average of each student.\r
e. Write the function findWorstStudent(students).\r
f. Write the function sortStudentsByGrade(students).\r
g. Write the function sortStudentsByName(students) \r
*/\r
\r
var gNextId = 101\r
var gStudents = createStudents()\r
console.log('gStudents : ', gStudents)\r
\r
enterGrades(gStudents)\r
// calcAvg(gStudents)\r
\r
var worstStudent = findWorstStudent(gStudents)\r
console.log('worstStudent : ', worstStudent)\r
\r
worstStudent = findWorstStudent2(gStudents) // Using forEach()...\r
console.log('worstStudent : ', worstStudent)\r
\r
// The sort challenge was removed from this exercise...\r
\r
// sortStudentsByGrade(gStudents)\r
// console.log('After sort gStudents : ', gStudents)\r
\r
function createStudents() {\r
	var students = []\r
	// var studentName = prompt('Enter student name. type quit to exit')\r
	// while (studentName !== 'quit') {\r
	// var student = createStudent(studentName)\r
	students.push(createStudent('tal'), createStudent('tal'), createStudent('tal'))\r
	// studentName = prompt('Enter student name. type quit to exit')\r
	// }\r
	return students\r
}\r
\r
function createStudent(name) {\r
	var student = {\r
		id: gNextId++,\r
		name: name,\r
	}\r
	return student\r
}\r
\r
function enterGrades(students) {\r
	for (var i = 0; i < students.length; i++) {\r
		var currStudent = students[i]\r
		currStudent.grades = [20, 20, 20] || readGrades(currStudent.name)\r
		calcAvg(currStudent)\r
	}\r
}\r
\r
function readGrades(studentName) {\r
	var grades = []\r
	for (var i = 0; i < 3; i++) {\r
		var grade = +prompt('Enter a grade for ' + studentName)\r
		grades.push(grade)\r
	}\r
	return grades\r
}\r
\r
function calcAvg(student) {\r
	var sum = 0\r
	var gradesLength = student.grades.length\r
	for (var i = 0; i < gradesLength; i++) {\r
		sum += student.grades[i]\r
	}\r
	student.avg = sum / gradesLength\r
}\r
\r
// function calcAvg(students) {\r
// 	for (var i = 0; i < students.length; i++) {\r
// 		var currStudent = students[i]\r
// 		var sum = 0\r
// 		var gradesLength = currStudent.grades.length\r
// 		for (var j = 0; j < gradesLength; j++) {\r
// 			sum += currStudent.grades[j]\r
// 		}\r
// 		currStudent.avg = sum / gradesLength\r
// 	}\r
// }\r
\r
function findWorstStudent(students) {\r
	var worstStudent = null\r
\r
	for (var i = 0; i < students.length; i++) {\r
		var currStudent = students[i]\r
		if (!worstStudent || currStudent.avg < worstStudent.avg) {\r
			worstStudent = currStudent\r
		}\r
	}\r
	return worstStudent\r
}\r
\r
// The sort challenge was removed from this exercise...\r
\r
// function sortStudentsByGrade(students) {\r
//   students.sort((s1, s2) => {\r
//     return s2.avg - s1.avg\r
//   })\r
// }\r
\r
// function sortStudentsByName(students) {\r
//   students.sort(function (s1, s2) {\r
//     if (s1.name.toLowerCase() > s2.name.toLowerCase()) return 1\r
//     if (s2.name.toLowerCase() > s1.name.toLowerCase()) return -1\r
//     return 0\r
//   })\r
// }\r
\r
// New version from CaJan23\r
\r
/*\r
// Exercise 53 - Students\r
// Create a students array – use the same algorithm as before and name it createStudents().\r
// Read a student name from the user until ‘quit’ is entered. Populate the students array with student objects.\r
// Read 3 grades for each student (each student should have a grades array).\r
// Write the function calcAvergaeGrade(student).\r
// Write the function factorGrades(student), which adds 5% to all of the student’s grades.\r
// Write the function findWorstStudent(students).\r
// Write the function forEach(students, func), which receives an array of student objects and a pointer to a function. It loops through the array and invokes the function, passing it the current element of the array on each iteration.\r
// Use forEach() to invoke factorGrades(student) on all students in the array.\r
// Find a way to imlement findWorstStudent(students) using forEach().\r
*/\r
\r
function factorGrades(student) {\r
	for (var i = 0; i < student.grades.length; i++) {\r
		student.grades[i] *= 1.05\r
	}\r
	if (student.avg) calcAvg(student)\r
}\r
\r
function forEach(students, func) {\r
	for (var i = 0; i < students.length; i++) {\r
		func(students[i])\r
	}\r
}\r
console.table(gStudents)\r
forEach(gStudents, factorGrades)\r
console.table(gStudents)\r
\r
function findWorstStudent2(students) {\r
	var gMinAvg = Infinity\r
	var worstStudent = null\r
\r
	forEach(students, (student) => {\r
		if (student.avg < gMinAvg) {\r
			gMinAvg = student.avg\r
			worstStudent = student\r
		}\r
	})\r
	return worstStudent\r
}\r
`},54:{name:"54.js",title:"Exercise 54",content:`<h2>Exercise 54 - Airline</h2>
<ol>
    <p>
        Build a data structure for an airline company with the enteties listed below. 
        For each type of entity, define an object and implement a <span class="code">create</span> function. 
    </p>
    <li>
        <p>
            A <span class="code">Plane</span> object with the following keys: 
        </p>
        <ol type="i">
            <li><span class="code">model</span></li>
            <li><span class="code">seatCount</span></li>
        </ol>
        <p class="tip">
            Tip: implement <span class="code">createPlane(model, seatCount)</span>
        </p>
    </li>
    <li>
        <p>A <span class="code">passenger</span> object –</p>
        <ol type="i">
            <li><span class="code">id</span>  –  composed of 7 random digits</li>
            <li><span class="code">fullName</span></li>
            <li><span class="code">flights</span>  –  an array of pointers to the relevant flight objects</li>
        </ol>
    </li>
    <li>
        <p>A <span class="code">flight</span> object –</p>
        <ol type="i">
            <li><span class="code">date</span></li>
            <li><span class="code">departure</span>  – where the flights takes off from…</li>
            <li><span class="code">destination</span>  – …and where it lands.</li>
            <li><span class="code">plane</span>  –  a pointer to a plane object</li>
            <li><span class="code">passengers</span>  – an array of pointers to the relevant passenger objects</li>
        </ol>
    </li>
    <li>
        <p>Initialize all variables with consistent data – <span class="code">date</span> should be 0, <span class="code">passengers</span> should be an empty array, etc…</p>
        <ol type="i">
            <li>Create an array of 5 passengers (<span class="code">gPassengers</span> is a good name) </li>
            <li>Create an array of 2 planes.</li>
            <li>Create an array of 2 flights. Each flight should have a plane property that points to a plane object, and a passengers property that points to a passengers array. </li>
        </ol>
        <p class="tip">TIP: first create a passenger with an empty flights array, and the flight with an empty passengers array, and then connect them. </p>
    </li>
    <li>
        <p>Write the functions:</p>
        <ol type="i">
            <li><span class="code">bookFlight(flight, passenger)</span> – this function connects between the pointers of the passengers and their flights. </li>
            <li><span class="code">getFrequentFlyers()</span> – returns the passengers with the maximal flights count. </li>
            <li><span class="code">isFullyBooked(flight)</span> – checks if all seats are booked, and returns true if they are. Where would it make sense to invoke this function?</li>
        </ol>
    </li>
</ol>
<p>The following illustration may help understand the data structure:</p>
<div class="airline-img"><img src="https://i.ibb.co/6sKx934/airline.png" alt=""></div>
`,solution:`'use strict'\r
\r
console.log('Ex 54')\r
console.log('Airline company')\r
// reviewed ✔️\r
\r
/*\r
Build a data structure for an airline company.(use the create function for each object).\r
Create to following entities:\r
​\r
i. A Plane. The plane will contain:\r
1. model.\r
2. seatCount.\r
​\r
ii. A passenger - tip: use createPassenger(fullName, flights)\r
1. id (7 random digits)\r
2. fullName\r
3. flights (array of pointers to the relevant flights)\r
​\r
iii. A flight\r
1. date\r
2. departure\r
3. destination\r
4. plane (pointer to a plane)\r
5. passengers (array of pointers to the relevant passengers)\r
​\r
Initialize all variables with consistent data. i.e (date should be 0\r
and passengers should be an empty array).\r
​\r
i. Create an array of 5 passengers (gPassengers is a good name)\r
ii. Create an array of 2 planes.\r
iii. Create an array of 2 flights, each flight has a plane property that points\r
to a plane object, and a passengers property that points to the passengers array.\r
TIP: first create a passenger with an empty flights array,\r
and the flight with an empty passengers array, then you can push the objects.\r
​\r
Write the functions:\r
​\r
i. bookFlight(flight, passenger) - this function connects between the pointers \r
of the passengers and their flights.\r
​\r
ii. getFrequentFlyers() - returns the passengers with the maximal \r
flights count.\r
​\r
iii. checkIfFlightFullyBooked(flight) - checks if there are available \r
seats on the flights, and returns true if there are. \r
Think where would it make sense to invoke it.\r
*/\r
\r
var gPassengers = []\r
createPassengers()\r
\r
var gPlanes = [createPlane('707', 5), createPlane('DC10', 3)]\r
\r
var gFlights = [\r
  createFlight('Israel', 'CosteRica', gPlanes[0]),\r
  createFlight('Israel', 'SriLanka', gPlanes[1]),\r
]\r
\r
\r
console.log('Booking flights...')\r
bookFlight(gFlights[1], gPassengers[3])\r
bookFlight(gFlights[1], gPassengers[0])\r
bookFlight(gFlights[0], gPassengers[3])\r
bookFlight(gFlights[1], gPassengers[2])\r
bookFlight(gFlights[1], gPassengers[4])\r
bookFlight(gFlights[0], gPassengers[2])\r
bookFlight(gFlights[0], gPassengers[4])\r
bookFlight(gFlights[0], gPassengers[0])\r
bookFlight(gFlights[0], gPassengers[1])\r
\r
var frequentFlyers = getFrequentFlyers()\r
\r
console.log('Passengers:', gPassengers)\r
console.log('Flights:', gFlights)\r
console.log('the frequent flyers are:', frequentFlyers)\r
\r
function bookFlight(flight, passenger) {\r
  if (isFullyBooked(flight)) {\r
    console.log('Sorry', passenger.fullname, 'this flight is fully booked.')\r
    return\r
  }\r
  passenger.flights.push(flight)\r
  flight.passengers.push(passenger)\r
  console.log('Flight successfully booked!')\r
}\r
\r
function getFrequentFlyers() {\r
  var max = 0\r
  var frequentFlyers = [] // Required in case array is zero length\r
\r
  for (var i = 0; i < gPassengers.length; i++) {\r
    var currPassenger = gPassengers[i]\r
    var flightCount = currPassenger.flights.length\r
\r
    if (flightCount > max) {\r
      frequentFlyers = [currPassenger]\r
      max = flightCount\r
    } else if (flightCount === max) {\r
      frequentFlyers.push(currPassenger)\r
    }\r
  }\r
  return frequentFlyers\r
}\r
\r
// Helper functions\r
function isFullyBooked(flight) {\r
  return flight.passengers.length >= flight.plane.seatCount\r
}\r
\r
function createPlane(model, seatCount) {\r
  return {\r
    model: model,\r
    seatCount: seatCount,\r
  }\r
}\r
\r
function createPassenger(fullname) {\r
  return {\r
    id: makeId(7),\r
    fullname: fullname,\r
    flights: [],\r
  }\r
}\r
\r
function createFlight(departure, detination, plane) {\r
  return {\r
    date: 0,\r
    departure: departure,\r
    detination: detination,\r
    plane: plane,\r
    passengers: [],\r
  }\r
}\r
\r
function createPassengers() {\r
  var names = ['Muki', 'Shuki', 'Puki', 'Lala', 'Baba']\r
\r
  for (var i = 0; i < names.length; i++) {\r
    gPassengers.push(createPassenger(names[i]))\r
  }\r
}\r
\r
function makeId(length) {\r
  var text = ''\r
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'\r
\r
  for (var i = 0; i < length; i++) {\r
    text += possible.charAt(Math.floor(Math.random() * possible.length))\r
  }\r
  return text\r
}\r
`},55:{name:"55.js",title:"Exercise 55",content:`<h2>Exercise 55 - Matrix Operations</h2>
<p>Fill up a matrix with numbers, and then, write the following functions: </p>
<ol type="1">
    <li><span class="code">sumCol(mat, colIdx)</span></li>
    <li><span class="code">sumRow(mat, rowIdx)</span></li>
    <li><span class="code">findMax(mat, colIdx)</span></li>
    <li><span class="code">findAvg(mat)</span></li>
    <li><span class="code">sumArea(mat, rowIdxStart, rowIdxEnd, colIdxStart, colIdxEnd)</span></li>
</ol>`,solution:`'use strict'\r
\r
console.log('EX 55');\r
console.log('Fill up a multi-dimensional array with numbers, and then, Sharon.');\r
// reviewed ✔️\r
\r
// 55.Fill up a multi-dimensional array with numbers, and then, Write the following\r
// functions:\r
// a. sumCol(mat, colIdx)\r
// b. sumRow(mat, rowIdx)\r
// c. findMax(mat, colIdx)\r
// d. findAvg(mat)\r
// e. sumArea(mat, rowIdxStart, rowIdxEnd, colIdxStart, colIdxEnd)\r
//*************************** ?????????????IS MATRIX OR MULTI-DIMENSIONAL ARRAY?????? ***************************\r
var mat = [\r
    [8, 6, 7, 4, 2],\r
    [3, 6, 9, 1, 6],\r
    [5, 8, 7, 3, 2],\r
    [3, 1, 7, 4, 0],\r
]\r
console.table(mat)\r
console.log('INPUT: sumCol(mat, 1)');\r
console.log('EXPECTED: 21');\r
console.log('ACTUAL:', sumCol(mat, 1));\r
console.log('~~~~~~~~~~~~~~');\r
console.log('INPUT: sumRow(mat, 1)');\r
console.log('EXPECTED: 25');\r
console.log('ACTUAL:', sumRow(mat, 1));\r
console.log('~~~~~~~~~~~~~~');\r
console.log('INPUT: findMax(mat, 1)');\r
console.log('EXPECTED: 8');\r
console.log('ACTUAL:', findMax(mat, 1));\r
console.log('~~~~~~~~~~~~~~');\r
console.log('INPUT: findAvg(mat)');\r
console.log('EXPECTED: 4.6');\r
console.log('ACTUAL:', findAvg(mat));\r
console.log('~~~~~~~~~~~~~~');\r
console.log('INPUT: sumArea(mat, 1, 3, 1, 3)');\r
console.log('EXPECTED: 46');\r
console.log('ACTUAL:', sumArea(mat, 1, 3, 1, 3));\r
\r
\r
function sumCol(mat, colIdx) {\r
    var sum = 0\r
    for (var i = 0; i < mat.length; i++) {\r
        sum += mat[i][colIdx];\r
    }\r
    return sum\r
}\r
\r
function sumRow(mat, rowIdx) {\r
    var sum = 0\r
    for (var i = 0; i < mat[rowIdx].length; i++) {\r
        sum += mat[rowIdx][i]\r
    }\r
    return sum\r
}\r
\r
//in a matrix rows are simple arrays\r
function sumRow2(row) {\r
    var sum = 0\r
    for (var i = 0; i < row.length; i++) {\r
        sum += row[i]\r
    }\r
    return sum\r
}\r
\r
function findMax(mat, colIdx) {\r
    var max = -Infinity\r
    for (var i = 0; i < mat.length; i++) {\r
        var currCell = mat[i][colIdx]\r
        if (currCell > max) max = currCell\r
    }\r
    return max\r
}\r
\r
function findAvg(mat) {\r
    var sum = 0\r
    for (var i = 0; i < mat.length; i++) {\r
        sum += sumRow(mat, i)\r
    }\r
    var cellCount = mat.length * mat[0].length\r
    return sum / cellCount\r
}\r
\r
function sumArea(mat, rowIdxStart, rowIdxEnd, colIdxStart, colIdxEnd) {\r
\r
    var sum = 0\r
    for (var i = rowIdxStart; i <= rowIdxEnd; i++) {\r
        for (var j = colIdxStart; j <= colIdxEnd; j++) {\r
            sum += mat[i][j]\r
        }\r
    }\r
    return sum\r
}`},56:{name:"56.js",title:"Exercise 56",content:`<h2>Exercise 56 - Symmetric Matrices</h2>
<p>A symmetric matrix is a matrix that passes this boolean condition: </p>
<pre class="code">      mat[i][j] === mat[j][i]</pre>
<p>Write the function <span class="code">checkIfSymmetric(mat)</span>.</p>`,solution:`'use strict'\r
\r
console.log('EX 56')\r
console.log('Symmetric Matrix')\r
// reviewed ✔️\r
\r
// Symmetric Matrix:\r
// A symmetric matrix is a matrix that passes this boolean condition:\r
// mat[i][j] === mat[j][i]\r
// Write the function checkIfSymmetric(mat).\r
\r
var symmetricMat = [\r
  [1, 2, 3],\r
  [2, 0, 2],\r
  [3, 2, 8],\r
]\r
\r
\r
\r
var asymmetricMat = [\r
  [2, 0, 0, 0, 0],\r
  [0, 5, 0, 0, 0],\r
  [0, 0, 0, 0, 0],\r
  [0, 0, 0, 0, 0],\r
  [0, 0, 0, 1, 0],\r
]\r
\r
console.log('INPUT:')\r
console.table(symmetricMat)\r
console.log('EXPECTED: true')\r
console.log('ACTUAL:', checkIfSymmetric(symmetricMat))\r
console.log('INPUT:')\r
console.table(asymmetricMat)\r
console.log('EXPECTED: false')\r
console.log('ACTUAL:', checkIfSymmetric(asymmetricMat))\r
\r
function checkIfSymmetric(mat) {\r
  for (var i = 0; i < mat.length - 1; i++) {\r
    for (var j = i + 1; j < mat[0].length; j++) {\r
      if (mat[i][j] !== mat[j][i]) return false\r
      console.log(mat[i][j]);\r
    }\r
  }\r
  return true\r
}\r
\r
`},57:{name:"57.js",title:"Exercise 57",content:`<h2>Exercise 57 - find the matrix mode</h2>
<p>In statistics, the most common value in a set of data, is called the mode &nbsp;(שכיח).</p>
<ol>
    <li>Write the function <span class="code">findMode(mat)</span> . The function prints the number which appears most frequently in a matrix.</li>
    <li>BONUS: If there are ties, e.g. both 47 and 53 appeared 17 times, print both of them, or all of them.</li>
</ol>
<p class="tip">Tip: use an object map to count the numbers.</p>`,solution:`'use strict'\r
\r
console.log('EX 57')\r
console.log(\r
  'Print out the number that appears most frequently in the multi-dimensional array'\r
)\r
// reviewed ✔️\r
\r
// 57. Write the function findMode(mat) that will print out the number that appears most frequently in the multi-dimensional array.\r
// BONUS: If there are ties (e.g.: both 47 and 53 appeared 17 times), print both of them, or all of them. (TIP: use an object map to count the numbers)\r
\r
var mat = [\r
  [4, 5, 2, 0],\r
  [5, 1, 2, 4],\r
  [3, 0, 9, 4],\r
  [5, 6, 8, 1],\r
]\r
\r
//{4:3,5:3} -->key:the num in the matrix, value - times appear\r
console.log('INPUT:')\r
console.table(mat)\r
console.log('EXPECTED: The numbers: 4, 5 appeared 3 times')\r
console.log('ACTUAL:')\r
findMode(mat)\r
\r
function findMode(mat) {\r
  var itemCountMap = {}\r
  //mat.length height - num of arrays inside\r
  //mat[0].length width - num of cols in a row , row length\r
  for (var i = 0; i < mat.length; i++) {\r
    for (var j = 0; j < mat[0].length; j++) {\r
      var item = mat[i][j]\r
      if (!itemCountMap[item]) itemCountMap[item] = 0\r
      itemCountMap[item]++\r
    }\r
  }\r
  console.log('itemCountMap', itemCountMap)\r
  //No Bonus\r
  // var mostFrequentItem\r
  // var max = 0\r
\r
  // for (var item in itemCountMap) {\r
  //   if (itemCountMap[item] > max) {\r
  //     max = itemCountMap[item]\r
  //     mostFrequentItem = item\r
  //   }\r
  // }\r
  // console.log('The number: ' + mostFrequentItem + ' appeared ' + max + ' times')\r
\r
  //   BONUS\r
  var mostFrequentItems = []\r
  var max = 0\r
\r
  for (var item in itemCountMap) {\r
    if (itemCountMap[item] > max) {\r
      max = itemCountMap[item]\r
      mostFrequentItems = [item]\r
    } else if (itemCountMap[item] === max) {\r
      mostFrequentItems.push(item)\r
    }\r
  }\r
\r
  console.log('The numbers: ' + mostFrequentItems.join(', ') + ' appeared ' + max + ' times')\r
}\r
\r
//shani solution Bonus\r
// function findModes(mat) {\r
//   var countMap = {}\r
//   var modes = []\r
//   var mode = -Infinity\r
//   for (var i = 0; i < mat.length; i++) {\r
//     for (var j = 0; j < mat[0].length; j++) {\r
//       var num = mat[i][j]\r
//       countMap[num] = countMap[num] + 1 || 1\r
//       if (countMap[num] > mode) {\r
//         modes = [num]\r
//         mode = countMap[num]\r
//       } else if (countMap[num] === mode) modes.push(num)\r
//     }\r
//   }\r
//   console.log('countMap', countMap)\r
//   console.log('The modes are', modes)\r
// }\r
`},58:{name:"58.js",title:"Exercise 58",content:`<h2>Exercise 58 - Magic Square</h2>
For a matrix to be a Magic Square, it must meet the following conditions:
<ol>
    <li>It must be a square.</li>
    <li>The sums of the rows, columns, and the two diagonals should all be equal.</li>
</ol>


<p>For example:</p>
<div class="magic-square-img"><img src="../assets/img/magic_square.png" alt=""></div>
<p>Write a function which receives a 2D array, and tests whether it is a magic square:</p>
`,solution:`// console.log('ex 58');\r
/*\r
Write a function which receives a 2D array, and tests whether it is a magic square:\r
a. It must be a square\r
b. The sums of the rows, columns, and the two diagonals should all be equal. For example:\r
' */\r
\r
console.log('58 - is magic square? ')\r
const mat1 = [\r
    [1, 2, 3],\r
    [4, 5, 6],\r
    [7, 8, 9],\r
]\r
const mat2 = [\r
    [2, 7, 6],\r
    [9, 5, 1],\r
    [4, 3, 8],\r
]\r
\r
const res1 = isMagicSquare(mat1)\r
console.log('INPUT: ', mat1)\r
console.log('EXPECTED:', false)\r
console.log('ACTUAL:', res1)\r
console.table(mat1);\r
\r
const res2 = isMagicSquare(mat2)\r
console.log('INPUT: ', mat2)\r
console.log('EXPECTED:', true)\r
console.log('ACTUAL:', res2)\r
console.table(mat2);\r
\r
\r
function isMagicSquare(mat) {\r
    if (!isSquare(mat)) return false\r
    var sumMainD = getSumPrDiagonal(mat)\r
    var sumSecD = getSumSecDiagonal(mat)\r
    if (sumMainD !== sumSecD) return false\r
    for (var i = 0; i < mat.length; i++) {\r
        if (getSumRow(mat, i) !== sumSecD) return false\r
        if (getSumCol(mat, i) !== sumSecD) return false\r
    }\r
    return true\r
}\r
\r
function isSquare(mat) {\r
    for (var i = 0; i < mat.length; i++) {\r
        if (mat.length !== mat[i].length) return false\r
    }\r
    return true\r
}\r
\r
function getSumRow(mat, rowIdx) {\r
    var sum = 0\r
    for (var i = 0; i < mat.length; i++) {\r
        sum += mat[rowIdx][i]\r
    }\r
    return sum\r
}\r
\r
function getSumCol(mat, colIdx) {\r
    var sum = 0\r
    for (var i = 0; i < mat.length; i++) {\r
        sum += mat[i][colIdx]\r
    }\r
    return sum\r
}\r
\r
function getSumPrDiagonal(mat) {\r
    var sum = 0\r
    for (var i = 0; i < mat.length; i++) {\r
        sum += mat[i][i]\r
    }\r
    return sum\r
}\r
\r
function getSumSecDiagonal(mat) {\r
    var sum = 0\r
    for (var i = 0; i < mat.length; i++) {\r
        sum += mat[i][mat[i].length - 1 - i]\r
    }\r
    return sum\r
}\r
`},59:{name:"59.js",title:"Exercise 59",content:`<h2>Exercise 59 - BINGO</h2>
<p>
    Your challenge is to implement the famous game of BINGO. 
    In this version of the game, there are two players. 
    Numbers are drawn at random, and each player marks the number if it appears in his board. 
    The first player to mark all the numbers on his board, wins.
</p>

<p>Here is the suggested data structure: </p>
    <pre class="code">
        var gPlayers = [
            {name: ‘Muki’, hitCount: 0, board: createBingoBoard()},
            {name: ‘Puki, hitCount: 0, board: createBingoBoard()}
        ]
    </pre>

<p>Every cell in board  will hold an object like <this:span class="code">{value: 17, isHit: false}</this:span></p>
<p>
    It is common practice to implement our code in several stages, 
    starting with simplified version for some of the functions, 
    which allow us to test other parts of our code first. 
    Let’s try this approach:
</p>
<ol>
    <li>
        <p>
            Implement the <span class="code">createBingoBoard()</span> function:
            It returns a 5 by 5 matrix containing cell object as described above, 
            with the numbers <span class="console">1 – 25</span> (Later on we will change it to <span class="console">1 – 99</span>).
        </p>
    </li>
    <li>
        <p>Implement the function <span class="code">printBingoBoard(board)</span> which prints the board by showing the number (value) in each cell.</p>
        <p>If  isHit is true, add 'v' to the printed number.</p>
        <p>
            Check your function by manually setting a cell's isHit to true like this: 
            <span class="code">gPlayers[0].board[0][0].isHit = true</span> and printing the board (remember you can run code from the console).
        </p>
        <p>Implement some empty (placeholder) functions:</p>
        <ol>
            <li><span class="code">drawNum()</span> code a simple function returning a fixed number (e.g. 17)</li>
            <li><span class="code">markBoard()</span> an empty function for now.</li>
            <li><span class="code">checkBingo()</span> a simple function returning true (note, that if it returns false  it will cause an infinite loop).</li>
        </ol>
    </li>
    <li>
        <p>
            Implement the <span class="code">playBingo</span> function:
        </p>
        <div class="code-block">
            <button class="copy-play-bingo-func">Copy</button>
            <div class="play-bingo-msg"></div>
            <pre class="code play-bingo-func">
 function playBingo(){
    var isVictory = false

    while(!isVictory){
      var calledNum = drawNum()
      
      for(var i = 0; i &lt; gPlayers.length && !isVictory; i++){
        var player = gPlayers[i]
        markBoard(player, calledNum)
        isVictory = checkBingo(player)
      }
    }
  }        </pre>
        </div>
        <!-- <div class="play-bingo-img"><img src="../assets/img/play_bingo_function.png" alt=""></div> -->
    </li>
    <li>
        <p>
            Implement the <span class="code">markBoard</span> function:
        </p>
        <ol>
            <li>If the board contains a cell with <span class="code">calledNum</span>  in its value, update that cell's <span class="code">isHit</span> value accordingly and increase the player’s <span class="code">hitCount</span> .</li>
            <li>Use the <span class="code">printBingoBoard</span> function to debug your function and make sure it works correctly.</li>
        </ol>
    </li>
    <li>
        <p>
            Implement the <span class="code">checkBingo</span> function – Just check if the player’s <span class="code">hitCount</span>  has reached 25.            
        </p>
    </li>
    <li>
        <p>
            Implement the <span class="code">drawNum</span> function:                
        </p>
        <ol>
            <li>We will later need this function to return a unique random number, so we will use an array - <span class="code">gNums</span>.</li>
            <li>Add the function <span class="code">resetNums</span> which updates the global variable <span class="code">gNums</span> to be an array with the numbers 1 – 25. This function should be called at the beginning of <span class="code">createBoard</span> and also at the beginning of the <span class="code">playBingo</span> function.</li>
            <li>The function <span class="code">drawNum</span> can just pop from that array for now (predictable order helps while developing)</li>
        </ol>
    </li>
    <li>
        <p>
            Make sure you have a basic working game that ends after 25 iterations before moving on
        </p>
    </li>
    <li>
        <p>
            Implement the following additions and modification:
        </p>
        <ol>
            <li>
                <p>
                    The <span class="code">gNums</span> array should hold the numbers from 1 to 99.
                </p>
            </li>
            <li>
                <p>
                    <span class="code">drawNum</span> should return a random number from the array. Use splice for that, to make sure the drawn numbers do not repeat.
                </p>
            <li>
                <p>
                    Print a happy greeting when a player –
                </p>
            </li>
            <ol>
                <li>completes a row – ‘Muki has completed a row!’.</li>
                <li>completes the main diagonal – ‘Muki has completed the main diagonal!’</li>
                <li>completes the secondary diagonal – ‘Muki has completed the secondary diagonal!’.</li>
            </ol>
            <li>
                <p>
                    Slow down the game so it feels more realistic and easy to follow:
                </p>
                <ol>
                    <li>Use <span class="code">setInterval</span> instead of the while loop: <span class="code">var gameInterval = setInterval(playTurn, 1000)</span></li>
                    <li>Use <span class="code">clearInterval(gameInterval)</span> when the game is over.</li>
                </ol>
            </li>
        </ol>
    </li>
    <li>
        <p>
            Finalizing
        </p>
        <ol>
            <li>
                <p>How easy would it be to make your game to work with a 6 by 6 Bingo board?</p>
            </li>
            <li>
                <p>How easy would it be, to add more players?</p>
            </li>
        </ol>
    </li>
</ol>
`,solution:`'use strict'\r
\r
console.log('EX 59')\r
console.log('Bingo')\r
// CR needed ✏️ sended to yaron waiting for approval\r
\r
// initialize nums array to get numbers from:\r
const NUMS_LENGTH = 100\r
var gNums\r
var gPlayers = [\r
  {\r
    name: 'miki',\r
    hitCounts: 0,\r
    board: createBingoBoard(),\r
    accomplishments: [],\r
  },\r
  {\r
    name: 'shuki',\r
    hitCounts: 0,\r
    board: createBingoBoard(),\r
    accomplishments: [],\r
  },\r
]\r
var gPlayInterval\r
\r
// playBingo()\r
\r
// Interval for the game :\r
function playBingo() {\r
  resetNums()\r
  gPlayInterval = setInterval(playTurn, 1000)\r
}\r
//a. create board function : initialize the board for each user\r
\r
function createBingoBoard(rowLength = 5) {\r
  // nums array for creating the board:\r
  resetNums() // put in gNums nums between 1-99\r
  //start to build the board:\r
  var board = []\r
  for (var i = 0; i < rowLength; i++) {\r
    board.push([])\r
    for (var j = 0; j < rowLength; j++) {\r
      //option 1:\r
      // adding random index from nums that points to a specific value that didn't got yet\r
      //   var randomIdx = getRandomInt(0, gNums.length - 1)\r
      //   board[i].push({ value: gNums[randomIdx], isHit: false })\r
      //   // removing the number from gNums to assure it won't pick again\r
      //   gNums.splice(randomIdx, 1)\r
\r
      // option 2: After they actualized the drawNum function :\r
      board[i].push({ value: drawNum(), isHit: false })\r
      // board[i][j] = { value: drawNum(), isHit: false };\r
    }\r
  }\r
  console.log('board objects', board)\r
  printBoard(board)\r
  resetNums()\r
  return board\r
}\r
\r
// b. print board function: priniting the board values to the console\r
\r
function printBoard(board) {\r
  var boardNums = []\r
  for (var i = 0; i < board.length; i++) {\r
    boardNums.push([])\r
    for (var j = 0; j < board[i].length; j++) {\r
      boardNums[i].push(board[i][j].value)\r
      if (board[i][j].isHit) boardNums[i][j] += 'v'\r
    }\r
  }\r
\r
  console.table(boardNums)\r
}\r
\r
//c. play bingo function : the main function - works until one of the player wins. using an playInterval or while loop .\r
function playTurn() {\r
  var isVictory = false\r
  var calledNum = drawNum()\r
  // while (!isVictory){ // before using interval\r
  // console.clear()\r
  for (var i = 0; !isVictory && i < gPlayers.length; i++) {\r
    var player = gPlayers[i]\r
    markBoard(player, calledNum)\r
    isVictory = checkBingo(player)\r
    if (isVictory) {\r
      console.log('Victory!', player)\r
      greetPlayer(player, 'all the board!')\r
      clearInterval(gPlayInterval)\r
      // console.log('player1', gPlayers[0].board);\r
      // console.log('player2', gPlayers[1].board);\r
      // break\r
    }\r
    //}\r
  }\r
}\r
\r
// b.i.1 draw num function: returns random number from the global array without duplications\r
\r
function drawNum() {\r
  // option 1: numbers can be duplicated:\r
  // return getRandomInt(0, NUMS_LENGTH)\r
\r
  // option 2: numbers cannot be duplicated:\r
  var randomIdx = getRandomInt(0, gNums.length - 1)\r
  var num = gNums.splice(randomIdx, 1)\r
  return num[0]\r
}\r
\r
// d. markBoard function : mark a specific cell if the player have the same value on his board\r
// and then call to printBoard in order to show the changes\r
function markBoard(player, calledNum) {\r
  var { board } = player\r
  for (var i = 0; i < board.length; i++) {\r
    for (var j = 0; j < board[i].length; j++) {\r
      // check if there is a match between cell and calledNum :\r
      var currCell = board[i][j]\r
      //option 1: if numbers can be duplicated:\r
      //   if (calledNum === currCell.value && !currCell.isHit) {\r
      //     currCell.isHit = true\r
      //     hitCounts++\r
      //   }\r
\r
      //option 2: if there is a global array - numbers cannot be duplicated\r
      if (calledNum === currCell.value) {\r
        console.log(calledNum === currCell.value)\r
        currCell.isHit = true\r
        player.hitCounts++\r
        break\r
      }\r
    }\r
    //print the board:\r
    printBoard(board)\r
  }\r
}\r
\r
//e. checkBingo function : check whether the player finished parts of the board and returns boolan wheather he finished all of it\r
\r
function checkBingo(player) {\r
  // without board checking:\r
  // return player.hitCounts === NUMS_LENGTH\r
\r
  // with board checking :\r
  var { board } = player\r
  if (!player.accomplishments.includes('mainD') && checkMainDiagonal(board)) {\r
    greetPlayer(player, 'Main diagonal copmpleted!')\r
    player.accomplishments.push('mainD')\r
  }\r
  if (!player.accomplishments.includes('secD') && checkSecDiagonal(board)) {\r
    greetPlayer(player, 'Secondary diagonal copmpleted!')\r
    player.accomplishments.push('secD')\r
  }\r
  for (var i = 0; i < board.length; i++) {\r
    if (!player.accomplishments.includes('row' + i) && checkRow(board, i)) {\r
      greetPlayer(player, ' row- ' + i + ' copmpleted!')\r
      player.accomplishments.push('row' + i)\r
    }\r
    if (!player.accomplishments.includes('col' + i) && checkCol(board, i)) {\r
      greetPlayer(player, ' col- ' + i + ' copmpleted!')\r
      player.accomplishments.push('col' + i)\r
    }\r
  }\r
  return player.hitCounts === 25\r
}\r
\r
// h.3 greet player function : greet the player with the given accomplishment\r
function greetPlayer(player, accomplishment) {\r
  console.log(player.name + ' has completed the ' + accomplishment)\r
}\r
\r
// e.2: resetNums function : initializing the global array gNums\r
function resetNums() {\r
  //initialize nums from 1 - 100:\r
  gNums = []\r
  for (var i = 1; i <= NUMS_LENGTH; i++) {\r
    gNums.push(i)\r
  }\r
}\r
\r
// helper functions :\r
function checkRow(board, rowIdx) {\r
  for (let i = 0; i < board.length; i++) {\r
    if (!board[rowIdx][i].isHit) return false\r
  }\r
  return true\r
}\r
\r
function checkCol(board, colIdx) {\r
  for (let i = 0; i < board.length; i++) {\r
    if (!board[i][colIdx].isHit) return false\r
  }\r
  return true\r
}\r
\r
function checkMainDiagonal(board) {\r
  for (let i = 0; i < board.length; i++) {\r
    if (!board[i][i].isHit) return false\r
  }\r
  return true\r
}\r
\r
function checkSecDiagonal(board) {\r
  for (let i = 0; i < board.length; i++) {\r
    if (!board[i][board[i].length - 1 - i].isHit) return false\r
  }\r
  return true\r
}\r
\r
function getRandomInt(min, max) {\r
  min = Math.ceil(min)\r
  max = Math.floor(max)\r
  return Math.floor(Math.random() * (max - min + 1) + min)\r
}\r
`},60:{name:"60.js",title:"Exercise 60",content:`<h2>Exercise 60 - Game of Life</h2>
<p>
    The Game of Life is a simulation of how a population of creatures evolves from 
    one generation to the next, based on a set of simple rules.
    This colony is described by a matrix of a user determined size, where each cell 
    is either populated by a creature (marked by an asterisk <span class="console">'*'</span>), or vacant. 
    As with any matrix, each cell can have 8 neighboring cells at the most.
</p>
<p>Start with a population of your choice, for example:</p>
<div class="game-of-life"><img src="../assets/img/game_of_life.png" alt=""></div>
<p>Here are the rules which govern the evolution of the colony:</p>
<ol>
    <li>if a creature has 0 – 2 neighboring creatures, it will die of loneliness and the cell which it occupies will become vacant in the next generation.</li>
    <li>if a cell has 3 – 5 occupied neighboring cells, it will have a creature in it in the next generation – either a newborn creature or the creature which previously occupied it.</li>
    <li>if a creature has 6 – 8 occupied neighboring creatures, it will suffocate and die, and the cell which it occupies will become vacant in the next generation.</li>
</ol>
<p class="tip">Tip: use  setInterval  to run a function which looks something like this:
    <pre class="tip">
        function play()
            gBoard = runGeneration(gBoard)	
            renderBoard(gBoard) 
        }
    </pre>
</p>					
<p class="tip">Tip: use a second matrix to generate the new generations of the colony so that you do not modify the current state of the colony while still calculating the next generation.</p>
`,solution:`'use strict'\r
\r
console.log('Ex 60 Solution - NEVO SOLUTION')\r
\r
// const TABLE_LENGTH = 10\r
const EMPTY = ''\r
const LIFE = '👼🏼'\r
const MAXGEN = 10\r
\r
var gBoard = []\r
var gGenCnt = 2\r
\r
// var gBoard = []\r
console.clear()\r
// var gGenCnt = 2\r
makeFirstBoard()\r
var interID = setInterval(play, 1000)\r
setTimeout(() => clearInterval(interID), 8000)\r
\r
function renderBoard(gBoard) {\r
    // console.clear()\r
    console.table(gBoard)\r
}\r
\r
function makeFirstBoard() {\r
    var rowNum = +prompt('Enter number of rows')\r
    var colNum = +prompt('Enter number of columns')\r
    for (var i = 0; i < rowNum; i++) {\r
        gBoard[i] = []\r
        for (var j = 0; j < colNum; j++) {\r
            if (Math.random() > 0.7) gBoard[i][j] = LIFE\r
            else gBoard[i][j] = EMPTY\r
        }\r
    }\r
    console.log('FIRST GENERATION')\r
    renderBoard(gBoard)\r
}\r
\r
function runGeneration() {\r
    var nextGen = gBoard.slice()\r
    for (var i = 0; i < gBoard.length; i++) {\r
        var row = gBoard[i]\r
        for (var j = 0; j < row.length; j++) {\r
            var cell = row[j]\r
            var neighborNum = getNeighbors(i, j)\r
            if (cell === LIFE) {\r
                if (neighborNum <= 2) nextGen[i][j] = EMPTY\r
                else if (neighborNum >= 6) nextGen[i][j] = EMPTY\r
            } else {\r
                if (neighborNum >= 3 && neighborNum <= 5) nextGen[i][j] = LIFE\r
            }\r
        }\r
    }\r
    return nextGen\r
}\r
\r
function getNeighbors(rowId, colId) {\r
    var neighborCnt = 0\r
    for (var i = rowId - 1; i <= rowId + 1; i++) {\r
        // if i is out of bounderies - go to the next i\r
        if (i < 0 || i > gBoard.length - 1) continue //continue to the next i\r
\r
        for (var j = colId - 1; j <= colId + 1; j++) {\r
            // if j is out of bounderies - go to the next j:\r
            if (j < 0 || j > gBoard[0].length - 1) continue // continue to the next j.\r
\r
            if (i === rowId && j === colId) continue\r
\r
            if (gBoard[i][j] === LIFE) neighborCnt++\r
        }\r
    }\r
    return neighborCnt\r
}\r
\r
function isOver() {\r
    for (var i = 0; i < gBoard.length; i++) {\r
        const row = gBoard[i]\r
        for (var j = 0; j < gBoard[0].length; j++) {\r
            const col = gBoard[i][j]\r
            if (col === LIFE) return false\r
        }\r
    }\r
    return true\r
}\r
\r
function play() {\r
    console.log('GENERATION  ', gGenCnt)\r
    gBoard = runGeneration()\r
    renderBoard(gBoard)\r
    if (isOver()) {\r
        console.log('LIFE IS GONE ! !')\r
        clearInterval(interID)\r
    }\r
    gGenCnt++\r
}\r
`}},$d={async getAssignmentFeedback(n,e,t,a){var l,r,i,s;try{const u=`
        Please review this student's JavaScript assignment and provide a very brief response:

        Task Description:
        ${e}

        Student's Solution:
        ${n}

        Example Solution:
        ${t}

        Specific Guidelines:
        ${a}

        General Guidelines:
        1. name variables in english in a way that aAccurately describes the data they hold
        2. name functions in english in a way that accurately describes what they do

        Respond in this exact format:
        {
          works: true/false,
          explanation: [1-2 sentences only] in Hebrew
        }
      `,c=localStorage.getItem("geminiApiKey");if(!c)return localStorage.setItem("autoGenEnabled","false"),{works:!1,explanation:"No Gemini API key found",error:"No Gemini API key found"};const g=await(await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${c}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:u}]}]})})).json();if(g.error)return{works:!1,explanation:"Error getting feedback. Please try again.",error:g.error.status};if(!g.candidates||!((s=(i=(r=(l=g.candidates[0])==null?void 0:l.content)==null?void 0:r.parts)==null?void 0:i[0])!=null&&s.text))throw new Error("Invalid response format from API");const h=g.candidates[0].content.parts[0].text.replace(/```json|```/g,"").trim().replace(/(\r\n|\n|\r)/gm,"").replace(/works:\s*(true|false)/,'"works": $1').replace(/explanation:\s*"/,'"explanation": "');return JSON.parse(h)}catch(u){return console.error("Error getting AI feedback:",u),"Error getting feedback. Please try again."}}},Ps="STUDENT_DATA",jl="assignment_feedback",om=1e6,fa=3e3,cr={saveToLocalStorage:$s,getFromLocalStorage:cm,addQuestionComment:ng,uploadFiles:eg,wrapCodeForRunningLocally:tg,MAX_ITERATIONS:om,MAX_EXECUTION_TIME:fa};function $s(n,e){localStorage.setItem(n,JSON.stringify(e))}function cm(n){return JSON.parse(localStorage.getItem(n)||"null")}function ng(n,e,t){const a=cm(n);a&&$s(n,[...a,`
${e} - ${t}`])}async function eg(n){console.log("handleFileChange");const e=n.target.files;if(!e)return Promise.resolve({});const t=Array.from(e),a={},l=t.length>0?t[0].webkitRelativePath.split("/")[0]:"Unknown Folder";console.log("Uploaded folder:",l);const r=new Set;t.forEach(s=>{const u=s.webkitRelativePath.split("/");u.length>2&&u[0].includes("ExerciseSubmissions")&&r.add(u[1])}),console.log("Student names:",Array.from(r));const i=t.map(s=>new Promise((u,c)=>{if(!s.webkitRelativePath.includes("/ex/")||!s.name.endsWith(".js"))return u();const p=s.webkitRelativePath.split("/");let g="Unknown";p.length>2&&p[0].includes("ExerciseSubmissions")&&(g=p[1]);const f=parseInt(s.name.replace(".js",""));if(isNaN(f)||f<1||f>60)return u();const h=new FileReader;h.onload=()=>{const E=h.result,S={number:f,filename:s.name,content:E};a[g]||(a[g]=[]),a[g].push(S),u()},h.onerror=c,h.readAsText(s)}));return Promise.all(i).then(()=>{for(const c in a)a[c].sort((p,g)=>p.number-g.number);const u=(new TextEncoder().encode(JSON.stringify(a)).length/(1024*1024)).toFixed(2);return console.log(`Student data size: ${u} MB`),$s(Ps,a),a}).catch(s=>(console.error("Error reading files",s),{}))}function tg(n){const e=n.trim().startsWith("'use strict'")||n.trim().startsWith('"use strict"');let t="",a=n;if(e){const l=n.split(`
`);t=l[0],a=l.slice(1).join(`
`)}return`
    ${t}
    
    let __iterationCount = 0;
    const __checkInfiniteLoop = () => {
      __iterationCount++;
      if (__iterationCount > ${om}) {
        throw new Error('Excessive iterations detected. Possible infinite loop.');
      }
    };
    
    // Override setTimeout and setInterval locally
    const originalSetTimeout = setTimeout;
    const originalSetInterval = setInterval;
    
    setTimeout = (fn, delay, ...args) => {
      if (delay > ${fa}) {
        console.log('Warning: setTimeout duration capped at 3 seconds');
        delay = ${fa};
      }
      return originalSetTimeout(fn, delay, ...args);
    };
    
    setInterval = (fn, delay, ...args) => {
      if (delay > ${fa}) {
        console.log('Warning: setInterval duration capped at 3 seconds');
        delay = ${fa};
      }
      return originalSetInterval(fn, delay, ...args);
    };
    
    ${a.replace(/for\s*\(([^;]*);([^;]*);([^)]*)\)/g,(l,r,i)=>l.trim().startsWith("var ")||l.trim().startsWith("let ")||l.trim().startsWith("const ")?`for (${l}; __checkInfiniteLoop(), ${r}; ${i})`:`for (__checkInfiniteLoop(), ${l}; ${r}; ${i})`).replace(/while\s*\(/g,"while (__checkInfiniteLoop(), ").replace(/do\s*{/g,"do { __checkInfiniteLoop();")}
  `}const ag=({code:n,taskContent:e,taskSolution:t,guidelines:a,studentName:l,taskName:r,handleAlert:i})=>{const[s,u]=en.useState(null),[c,p]=en.useState(!1),g=localStorage.getItem("autoGenEnabled")==="true";en.useEffect(()=>{u(null);const h=localStorage.getItem(jl)||"{}",E=JSON.parse(h),S=`${r}_${l}`;E[S]?u(E[S]):g&&(p(!0),f())},[r]);const f=async()=>{p(!0);const h=localStorage.getItem(jl),E=h?JSON.parse(h):{},S=`${r}_${l}`;if(E[S]){u(E[S]),p(!1);return}try{const N=await $d.getAssignmentFeedback(n,e,t,a||"");N.error&&i({message:N.error,type:"error",isOpen:!0}),u(N),E[S]=N,N.error||localStorage.setItem(jl,JSON.stringify(E))}catch(N){console.error("Error getting feedback:",N)}finally{p(!1)}};return b.jsxs("div",{className:"section ai-feedback-section",children:[!g&&b.jsx("button",{onClick:f,disabled:c,className:"js-playground-feedback-btn",children:c?"Getting Feedback...":"Get AI Feedback"}),c&&b.jsx("div",{className:"feedback-loading",children:b.jsx(pm,{size:"large"})}),s&&b.jsx("div",{className:"feedback-content",children:b.jsx("div",{className:"feedback-content-inner",children:c?b.jsx(b.Fragment,{}):b.jsxs(b.Fragment,{children:[b.jsx("h3",{children:"AI Feedback"}),b.jsx("div",{className:`feedback-status ${s.works?"success":"error"}`,children:s.works?"Works":"Does not work"}),b.jsx("br",{}),s.explanation]})})})]})};function lg(){const[n,e]=ui.useState(`${localStorage.getItem("hebrewUserName")} - `),[t,a]=ui.useState(!1),l=()=>{a(!0),navigator.clipboard.writeText(n).then(()=>{setTimeout(()=>{a(!1)},1e3)}).catch(i=>{console.error("Failed to copy text: ",i),a(!1)})},r=()=>{const i=localStorage.getItem("hebrewUserName");e(`${i} - `)};return b.jsxs("div",{className:"section comments-container",style:{marginLeft:"0px"},children:[b.jsx("label",{className:"comments-label",children:"Feedback"}),b.jsx("textarea",{value:n,onChange:i=>e(i.target.value),className:"comments-textarea",rows:6,dir:"rtl"}),b.jsxs("div",{className:"comments-controls",children:[b.jsx("button",{onClick:l,className:"copy-button",children:t?"Copied!":"Copy Feedback"}),b.jsx("button",{onClick:r,className:"clear-button",children:"Clear"})]})]})}function rg({startAssignment:n,endAssignment:e,selectedStudent:t,studentData:a,onStartAssignmentChange:l,onEndAssignmentChange:r,onStudentChange:i,onPrevious:s,onNext:u,currentAssignmentIndex:c,totalAssignments:p,setIsTaskContentOpen:g,isTaskContentOpen:f}){return b.jsx("div",{className:"section",children:b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[b.jsxs("div",{children:[b.jsx("label",{style:{fontWeight:500},children:"Assignment Range"}),b.jsxs("div",{style:{display:"flex",gap:"8px",marginTop:"8px"},children:[b.jsx("input",{type:"number",value:n,onChange:h=>l(parseInt(h.target.value)),min:"1",max:"60",placeholder:"From",style:{width:"80px",padding:"8px",border:"1px solid #ddd",borderRadius:"4px"}}),b.jsx("span",{style:{alignSelf:"center"},children:"to"}),b.jsx("input",{type:"number",value:e,onChange:h=>r(parseInt(h.target.value)),min:"1",max:"60",placeholder:"To",style:{width:"80px",padding:"8px",border:"1px solid #ddd",borderRadius:"4px"}})]})]}),b.jsxs("div",{children:[b.jsx("label",{style:{fontWeight:500},children:"Select Student"}),b.jsx("div",{style:{marginTop:"8px"},children:b.jsxs("select",{value:t,onChange:i,style:{padding:"8px",width:"200px",border:"1px solid #ddd",borderRadius:"4px"},children:[b.jsx("option",{value:"",children:"Choose a student"}),Object.keys(a).sort().map(h=>b.jsx("option",{value:h,children:h},h))]})})]}),b.jsxs("div",{children:[b.jsx("label",{style:{fontWeight:500},children:"Navigate Assignments"}),b.jsxs("div",{style:{display:"flex",gap:"8px",marginTop:"8px"},children:[b.jsx("button",{onClick:s,disabled:c===0||n>=e,className:"secondary-btn",children:"Previous"}),b.jsx("button",{onClick:u,disabled:c===p-1||n>=e,className:"primary-btn",children:"Next"})]})]}),b.jsx("div",{children:b.jsx("button",{className:"primary-btn",style:{marginTop:"28px"},onClick:()=>g(!f),children:f?"Close Task":"Open Task"})})]})})}function ig({onFileChange:n}){return b.jsxs("div",{className:"section",children:[b.jsx("h2",{style:{marginBottom:"1rem",marginTop:"0"},children:"Upload Student Submissions"}),b.jsxs("div",{className:"upload-container",style:{padding:"2rem",border:"2px dashed #ccc",borderRadius:"8px",textAlign:"center",backgroundColor:"#f9fafb",position:"relative"},children:[b.jsx("div",{style:{marginBottom:"1rem"},children:b.jsx("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"#6B7280",style:{margin:"auto"},children:b.jsx("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"})})}),b.jsxs("div",{children:[b.jsx("p",{style:{color:"#374151",marginBottom:"0.5rem"},children:"Drop folder here or click to upload"}),b.jsxs("p",{style:{color:"#6B7280",fontSize:"0.875rem"},children:["Upload class root submission folder, for example:",b.jsx("br",{}),b.jsx("code",{children:"CaEveFeb25-ExerciseSubmissions"})]})]}),b.jsx("input",{type:"file",webkitdirectory:"true",onChange:n,style:{position:"absolute",top:0,left:0,height:"100%",width:"100%",opacity:0,cursor:"pointer"}})]})]})}function sg(){const n=localStorage.getItem("hebrewUserName"),[e,t]=en.useState(!n),[a]=Pt.useForm();en.useEffect(()=>{const s=localStorage.getItem("geminiApiKey")||"",u=localStorage.getItem("hebrewUserName")||"",c=localStorage.getItem("autoGenEnabled")!=="false";a.setFieldsValue({geminiApiKey:s,hebrewUserName:u,autoGenEnabled:c})},[a]);const l=()=>{t(!0)},r=()=>{a.validateFields().then(s=>{localStorage.setItem("geminiApiKey",s.geminiApiKey),localStorage.setItem("hebrewUserName",s.hebrewUserName),localStorage.setItem("autoGenEnabled",s.autoGenEnabled.toString()),t(!1)}).catch(s=>{console.error("Form validation failed:",s)})},i=()=>{t(!1)};return b.jsxs(b.Fragment,{children:[b.jsx(nu,{type:"primary",onClick:l,icon:b.jsx(vm,{}),children:"הגדרות"}),b.jsx(To,{title:"הגדרות",open:e,onOk:r,onCancel:i,footer:[b.jsx(nu,{type:"primary",onClick:r,children:"Save"},"submit")],children:b.jsxs(Pt,{form:a,layout:"vertical",dir:"rtl",children:[b.jsx(Pt.Item,{label:"Gemini API Key",name:"geminiApiKey",style:{textAlign:"right"},extra:b.jsxs("span",{children:["Get your API key from"," ",b.jsx("a",{href:"https://aistudio.google.com/app/apikey",target:"_blank",rel:"noopener noreferrer",children:"Google AI Studio"})]}),children:b.jsx(eu.Password,{})}),b.jsx(Pt.Item,{label:"שם משתמש",name:"hebrewUserName",rules:[{required:!0,message:"נא להזין שם משתמש!"}],children:b.jsx(eu,{})}),b.jsx(Pt.Item,{label:"Auto Generate Feedback",name:"autoGenEnabled",valuePropName:"checked",initialValue:!0,children:b.jsx(bm,{})})]})})]})}function ug({isFilesUploaded:n}){const e=()=>{localStorage.removeItem(Ps),localStorage.removeItem(jl),window.location.reload()};return b.jsxs("section",{style:{textAlign:"left",borderBottom:"1px solid #E5E7EB",paddingLeft:"32px",backgroundColor:"white",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0 32px"},children:[b.jsx("h1",{style:{fontSize:"24px",fontWeight:"bold",margin:"0",padding:"10px"},children:"ExRunner Code Review"}),n&&b.jsxs("div",{style:{display:"flex",gap:"10px"},children:[b.jsx(sg,{}),b.jsx("button",{onClick:e,style:{padding:"8px 16px",backgroundColor:"#EF4444",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontWeight:"500"},children:"Clear Assignments"})]})]})}function og({initialCode:n,assignmentNumber:e}){const[t,a]=en.useState(n),[l,r]=en.useState([]),[i,s]=en.useState(!1),[u,c]=en.useState(!1);en.useEffect(()=>{a(n)},[n]);const p=()=>{s(!0),r([]);const h=[],E=console.log;console.log=(...S)=>{if(h.length>=1e3)throw new Error("Too many console.log calls (limit: 1000). Execution stopped.");h.push(S.map(N=>typeof N=="object"?JSON.stringify(N):String(N)).join(" ")),E(...S)};try{new Promise((N,m)=>{const o=setTimeout(()=>{m(new Error("Execution timed out after 3 seconds. Your code might contain an infinite loop."))},cr.MAX_EXECUTION_TIME);try{const d=cr.wrapCodeForRunningLocally(t),x=new Function(d)();clearTimeout(o),N(x)}catch(d){clearTimeout(o),m(d)}}).then(()=>{r(h),s(!1)}).catch(N=>{r([...h,`Error: ${N instanceof Error?N.message:String(N)}`]),s(!1)})}catch(S){r([...h,`Error: ${S instanceof Error?S.message:String(S)}`]),s(!1)}finally{console.log=E}},g=()=>{c(!0),navigator.clipboard.writeText(t).then(()=>{setTimeout(()=>{c(!1)},1e3)})},f=ui.useCallback(h=>{a(h)},[]);return b.jsxs("div",{className:"section js-playground",children:[b.jsxs("div",{className:"js-playground-header",children:[b.jsxs("div",{className:"filename",children:["Assignment ",e,": ",Na[e].title]}),b.jsxs("div",{className:"js-playground-controls",children:[b.jsx("button",{onClick:p,disabled:i,className:"js-playground-run-btn",children:i?"Running...":"Run"}),b.jsx("button",{onClick:g,className:"js-playground-copy-btn",children:u?"Code Copied!":"Copy Code"})]})]}),b.jsxs("div",{className:"js-playground-content",children:[b.jsx(fm,{value:t,theme:hm,width:"100%",style:{width:"100%",borderRadius:"10px"},extensions:[mm({jsx:!0})],onChange:f,basicSetup:{lineNumbers:!0,highlightActiveLineGutter:!0,highlightSpecialChars:!0,foldGutter:!0,drawSelection:!0,dropCursor:!0,allowMultipleSelections:!0,indentOnInput:!0,syntaxHighlighting:!0,bracketMatching:!0,closeBrackets:!0,autocompletion:!0,rectangularSelection:!0,crosshairCursor:!0,highlightActiveLine:!0,highlightSelectionMatches:!0,closeBracketsKeymap:!0,defaultKeymap:!0,searchKeymap:!0,historyKeymap:!0,foldKeymap:!0,completionKeymap:!0,lintKeymap:!0}}),b.jsxs("div",{className:"js-playground-console",children:[b.jsx("label",{children:"Console Output:"}),b.jsx("pre",{children:l.length===0?b.jsx("div",{style:{color:"#888",fontStyle:"italic"},children:"No output yet. Run the code to see results."}):l.map((h,E)=>b.jsx("div",{children:h},E))})]})]})]})}function cg({taskId:n}){const e=Na[n];return b.jsx("div",{className:"section task-content open",children:b.jsx("div",{dangerouslySetInnerHTML:{__html:e.content}})})}const fg=({message:n,type:e,isOpen:t,onClose:a})=>{const l=()=>{switch(e){case"success":return b.jsx(xm,{style:{color:"#52c41a"}});case"error":return b.jsx(Em,{style:{color:"#ff4d4f"}});case"warning":return b.jsx(Sm,{style:{color:"#faad14"}});case"info":return b.jsx(ym,{style:{color:"#1890ff"}});default:return null}};return b.jsx(To,{title:b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[l(),b.jsx("span",{style:{textTransform:"capitalize"},children:e})]}),open:t,onCancel:a,footer:[b.jsx("button",{onClick:a,className:"close-btn",children:"Close"},"close")],children:n==="PERMISSION_DENIED"?b.jsxs("p",{children:["Please check your API key in the settings.",b.jsx("br",{}),b.jsx("br",{}),"If the problem persists, please contact the developer."]}):b.jsx("p",{children:n})})},mg=()=>{const[n,e]=en.useState({});return en.useEffect(()=>{const a=cr.getFromLocalStorage(Ps);a&&e(a)},[]),{studentsData:n,handleFileChange:async a=>{const l=await cr.uploadFiles(a);Object.keys(l).length>0&&e(l)}}};function hg(){var C,A,w,V,O,bn,kn;const[n,e]=en.useState(""),[t,a]=en.useState(1),[l,r]=en.useState(60),[i,s]=en.useState(!1),[u,c]=en.useState([]),[p,g]=en.useState(0),[f,h]=en.useState({message:"Hello",type:"error",isOpen:!1}),{studentsData:E,handleFileChange:S}=mg(),N=Object.keys(E).length>0,m=mn=>{const ut=mn.target.value;e(ut),o(ut,t,l)},o=(mn,ut,Ft)=>{if(E[mn]){const T=E[mn].filter(U=>U.number>=ut&&U.number<=Ft);c(T),g(0)}},d=mn=>{a(mn),g(0),o(n,mn,l)},v=mn=>{r(mn),g(0),o(n,t,mn)},x=()=>{h({message:"Hello",type:"info",isOpen:!1})};return b.jsxs("div",{className:"dashboard",children:[b.jsx(ug,{isFilesUploaded:N}),b.jsx(fg,{message:f.message,type:f.type,isOpen:f.isOpen,onClose:x}),b.jsxs("div",{className:"dashboard-container",children:[!N&&b.jsx(ig,{onFileChange:S}),N&&b.jsx(rg,{startAssignment:t,endAssignment:l,selectedStudent:n,studentData:E,onStartAssignmentChange:d,onEndAssignmentChange:v,onStudentChange:m,onPrevious:()=>g(mn=>Math.max(mn-1,0)),onNext:()=>g(mn=>Math.min(mn+1,u.length-1)),currentAssignmentIndex:p,totalAssignments:u.length,setIsTaskContentOpen:s,isTaskContentOpen:i}),u.length>0&&i&&b.jsx(cg,{taskId:u[p].number}),n&&b.jsxs("div",{style:{display:"flex"},className:"dashboard-js-playground-container",children:[u.length>0?b.jsx(og,{initialCode:u[p].content,filename:u[p].filename,assignmentNumber:p+t}):b.jsx("article",{className:"section no-assignments-found",children:b.jsx("p",{className:"no-assignments-found-p",children:"No assignments found in the specified range."})}),b.jsxs("div",{className:"ai-feedback-section",children:[b.jsx(ag,{code:(C=u[p])==null?void 0:C.content,taskContent:(w=Na[(A=u[p])==null?void 0:A.number])==null?void 0:w.content,taskSolution:(O=Na[(V=u[p])==null?void 0:V.number])==null?void 0:O.solution,taskName:(kn=Na[(bn=u[p])==null?void 0:bn.number])==null?void 0:kn.name,studentName:n,handleAlert:h}),b.jsx(lg,{})]})]})]})]})}const dg=()=>b.jsx(hg,{}),gg=Pd.createRoot(document.getElementById("root"));gg.render(b.jsx(dg,{}));
