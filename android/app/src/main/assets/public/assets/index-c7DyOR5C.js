(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}})();var L_={exports:{}},Nc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ZS;function iP(){if(ZS)return Nc;ZS=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(i,s,n){var o=null;if(n!==void 0&&(o=""+n),s.key!==void 0&&(o=""+s.key),"key"in s){n={};for(var l in s)l!=="key"&&(n[l]=s[l])}else n=s;return s=n.ref,{$$typeof:r,type:i,key:o,ref:s!==void 0?s:null,props:n}}return Nc.Fragment=e,Nc.jsx=t,Nc.jsxs=t,Nc}var QS;function sP(){return QS||(QS=1,L_.exports=iP()),L_.exports}var Ke=sP(),F_={exports:{}},Uc={},N_={exports:{}},U_={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $S;function rP(){return $S||($S=1,(function(r){function e(Z,J){var he=Z.length;Z.push(J);e:for(;0<he;){var K=he-1>>>1,ie=Z[K];if(0<s(ie,J))Z[K]=J,Z[he]=ie,he=K;else break e}}function t(Z){return Z.length===0?null:Z[0]}function i(Z){if(Z.length===0)return null;var J=Z[0],he=Z.pop();if(he!==J){Z[0]=he;e:for(var K=0,ie=Z.length,O=ie>>>1;K<O;){var b=2*(K+1)-1,V=Z[b],H=b+1,G=Z[H];if(0>s(V,he))H<ie&&0>s(G,V)?(Z[K]=G,Z[H]=he,K=H):(Z[K]=V,Z[b]=he,K=b);else if(H<ie&&0>s(G,he))Z[K]=G,Z[H]=he,K=H;else break e}}return J}function s(Z,J){var he=Z.sortIndex-J.sortIndex;return he!==0?he:Z.id-J.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var n=performance;r.unstable_now=function(){return n.now()}}else{var o=Date,l=o.now();r.unstable_now=function(){return o.now()-l}}var h=[],f=[],d=1,_=null,p=3,g=!1,v=!1,x=!1,T=!1,y=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function w(Z){for(var J=t(f);J!==null;){if(J.callback===null)i(f);else if(J.startTime<=Z)i(f),J.sortIndex=J.expirationTime,e(h,J);else break;J=t(f)}}function A(Z){if(x=!1,w(Z),!v)if(t(h)!==null)v=!0,P||(P=!0,fe());else{var J=t(f);J!==null&&re(A,J.startTime-Z)}}var P=!1,D=-1,U=5,z=-1;function k(){return T?!0:!(r.unstable_now()-z<U)}function ne(){if(T=!1,P){var Z=r.unstable_now();z=Z;var J=!0;try{e:{v=!1,x&&(x=!1,R(D),D=-1),g=!0;var he=p;try{t:{for(w(Z),_=t(h);_!==null&&!(_.expirationTime>Z&&k());){var K=_.callback;if(typeof K=="function"){_.callback=null,p=_.priorityLevel;var ie=K(_.expirationTime<=Z);if(Z=r.unstable_now(),typeof ie=="function"){_.callback=ie,w(Z),J=!0;break t}_===t(h)&&i(h),w(Z)}else i(h);_=t(h)}if(_!==null)J=!0;else{var O=t(f);O!==null&&re(A,O.startTime-Z),J=!1}}break e}finally{_=null,p=he,g=!1}J=void 0}}finally{J?fe():P=!1}}}var fe;if(typeof I=="function")fe=function(){I(ne)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,B=me.port2;me.port1.onmessage=ne,fe=function(){B.postMessage(null)}}else fe=function(){y(ne,0)};function re(Z,J){D=y(function(){Z(r.unstable_now())},J)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(Z){Z.callback=null},r.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<Z?Math.floor(1e3/Z):5},r.unstable_getCurrentPriorityLevel=function(){return p},r.unstable_next=function(Z){switch(p){case 1:case 2:case 3:var J=3;break;default:J=p}var he=p;p=J;try{return Z()}finally{p=he}},r.unstable_requestPaint=function(){T=!0},r.unstable_runWithPriority=function(Z,J){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var he=p;p=Z;try{return J()}finally{p=he}},r.unstable_scheduleCallback=function(Z,J,he){var K=r.unstable_now();switch(typeof he=="object"&&he!==null?(he=he.delay,he=typeof he=="number"&&0<he?K+he:K):he=K,Z){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=he+ie,Z={id:d++,callback:J,priorityLevel:Z,startTime:he,expirationTime:ie,sortIndex:-1},he>K?(Z.sortIndex=he,e(f,Z),t(h)===null&&Z===t(f)&&(x?(R(D),D=-1):x=!0,re(A,he-K))):(Z.sortIndex=ie,e(h,Z),v||g||(v=!0,P||(P=!0,fe()))),Z},r.unstable_shouldYield=k,r.unstable_wrapCallback=function(Z){var J=p;return function(){var he=p;p=J;try{return Z.apply(this,arguments)}finally{p=he}}}})(U_)),U_}var JS;function nP(){return JS||(JS=1,N_.exports=rP()),N_.exports}var B_={exports:{}},yt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eT;function aP(){if(eT)return yt;eT=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),n=Symbol.for("react.consumer"),o=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),p=Symbol.iterator;function g(O){return O===null||typeof O!="object"?null:(O=p&&O[p]||O["@@iterator"],typeof O=="function"?O:null)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,T={};function y(O,b,V){this.props=O,this.context=b,this.refs=T,this.updater=V||v}y.prototype.isReactComponent={},y.prototype.setState=function(O,b){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,b,"setState")},y.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function R(){}R.prototype=y.prototype;function I(O,b,V){this.props=O,this.context=b,this.refs=T,this.updater=V||v}var w=I.prototype=new R;w.constructor=I,x(w,y.prototype),w.isPureReactComponent=!0;var A=Array.isArray;function P(){}var D={H:null,A:null,T:null,S:null},U=Object.prototype.hasOwnProperty;function z(O,b,V){var H=V.ref;return{$$typeof:r,type:O,key:b,ref:H!==void 0?H:null,props:V}}function k(O,b){return z(O.type,b,O.props)}function ne(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function fe(O){var b={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(V){return b[V]})}var me=/\/+/g;function B(O,b){return typeof O=="object"&&O!==null&&O.key!=null?fe(""+O.key):b.toString(36)}function re(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(P,P):(O.status="pending",O.then(function(b){O.status==="pending"&&(O.status="fulfilled",O.value=b)},function(b){O.status==="pending"&&(O.status="rejected",O.reason=b)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function Z(O,b,V,H,G){var ee=typeof O;(ee==="undefined"||ee==="boolean")&&(O=null);var pe=!1;if(O===null)pe=!0;else switch(ee){case"bigint":case"string":case"number":pe=!0;break;case"object":switch(O.$$typeof){case r:case e:pe=!0;break;case d:return pe=O._init,Z(pe(O._payload),b,V,H,G)}}if(pe)return G=G(O),pe=H===""?"."+B(O,0):H,A(G)?(V="",pe!=null&&(V=pe.replace(me,"$&/")+"/"),Z(G,b,V,"",function($){return $})):G!=null&&(ne(G)&&(G=k(G,V+(G.key==null||O&&O.key===G.key?"":(""+G.key).replace(me,"$&/")+"/")+pe)),b.push(G)),1;pe=0;var Pe=H===""?".":H+":";if(A(O))for(var Fe=0;Fe<O.length;Fe++)H=O[Fe],ee=Pe+B(H,Fe),pe+=Z(H,b,V,ee,G);else if(Fe=g(O),typeof Fe=="function")for(O=Fe.call(O),Fe=0;!(H=O.next()).done;)H=H.value,ee=Pe+B(H,Fe++),pe+=Z(H,b,V,ee,G);else if(ee==="object"){if(typeof O.then=="function")return Z(re(O),b,V,H,G);throw b=String(O),Error("Objects are not valid as a React child (found: "+(b==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.")}return pe}function J(O,b,V){if(O==null)return O;var H=[],G=0;return Z(O,H,"","",function(ee){return b.call(V,ee,G++)}),H}function he(O){if(O._status===-1){var b=O._result;b=b(),b.then(function(V){(O._status===0||O._status===-1)&&(O._status=1,O._result=V)},function(V){(O._status===0||O._status===-1)&&(O._status=2,O._result=V)}),O._status===-1&&(O._status=0,O._result=b)}if(O._status===1)return O._result.default;throw O._result}var K=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var b=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(b))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},ie={map:J,forEach:function(O,b,V){J(O,function(){b.apply(this,arguments)},V)},count:function(O){var b=0;return J(O,function(){b++}),b},toArray:function(O){return J(O,function(b){return b})||[]},only:function(O){if(!ne(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return yt.Activity=_,yt.Children=ie,yt.Component=y,yt.Fragment=t,yt.Profiler=s,yt.PureComponent=I,yt.StrictMode=i,yt.Suspense=h,yt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=D,yt.__COMPILER_RUNTIME={__proto__:null,c:function(O){return D.H.useMemoCache(O)}},yt.cache=function(O){return function(){return O.apply(null,arguments)}},yt.cacheSignal=function(){return null},yt.cloneElement=function(O,b,V){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var H=x({},O.props),G=O.key;if(b!=null)for(ee in b.key!==void 0&&(G=""+b.key),b)!U.call(b,ee)||ee==="key"||ee==="__self"||ee==="__source"||ee==="ref"&&b.ref===void 0||(H[ee]=b[ee]);var ee=arguments.length-2;if(ee===1)H.children=V;else if(1<ee){for(var pe=Array(ee),Pe=0;Pe<ee;Pe++)pe[Pe]=arguments[Pe+2];H.children=pe}return z(O.type,G,H)},yt.createContext=function(O){return O={$$typeof:o,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:n,_context:O},O},yt.createElement=function(O,b,V){var H,G={},ee=null;if(b!=null)for(H in b.key!==void 0&&(ee=""+b.key),b)U.call(b,H)&&H!=="key"&&H!=="__self"&&H!=="__source"&&(G[H]=b[H]);var pe=arguments.length-2;if(pe===1)G.children=V;else if(1<pe){for(var Pe=Array(pe),Fe=0;Fe<pe;Fe++)Pe[Fe]=arguments[Fe+2];G.children=Pe}if(O&&O.defaultProps)for(H in pe=O.defaultProps,pe)G[H]===void 0&&(G[H]=pe[H]);return z(O,ee,G)},yt.createRef=function(){return{current:null}},yt.forwardRef=function(O){return{$$typeof:l,render:O}},yt.isValidElement=ne,yt.lazy=function(O){return{$$typeof:d,_payload:{_status:-1,_result:O},_init:he}},yt.memo=function(O,b){return{$$typeof:f,type:O,compare:b===void 0?null:b}},yt.startTransition=function(O){var b=D.T,V={};D.T=V;try{var H=O(),G=D.S;G!==null&&G(V,H),typeof H=="object"&&H!==null&&typeof H.then=="function"&&H.then(P,K)}catch(ee){K(ee)}finally{b!==null&&V.types!==null&&(b.types=V.types),D.T=b}},yt.unstable_useCacheRefresh=function(){return D.H.useCacheRefresh()},yt.use=function(O){return D.H.use(O)},yt.useActionState=function(O,b,V){return D.H.useActionState(O,b,V)},yt.useCallback=function(O,b){return D.H.useCallback(O,b)},yt.useContext=function(O){return D.H.useContext(O)},yt.useDebugValue=function(){},yt.useDeferredValue=function(O,b){return D.H.useDeferredValue(O,b)},yt.useEffect=function(O,b){return D.H.useEffect(O,b)},yt.useEffectEvent=function(O){return D.H.useEffectEvent(O)},yt.useId=function(){return D.H.useId()},yt.useImperativeHandle=function(O,b,V){return D.H.useImperativeHandle(O,b,V)},yt.useInsertionEffect=function(O,b){return D.H.useInsertionEffect(O,b)},yt.useLayoutEffect=function(O,b){return D.H.useLayoutEffect(O,b)},yt.useMemo=function(O,b){return D.H.useMemo(O,b)},yt.useOptimistic=function(O,b){return D.H.useOptimistic(O,b)},yt.useReducer=function(O,b,V){return D.H.useReducer(O,b,V)},yt.useRef=function(O){return D.H.useRef(O)},yt.useState=function(O){return D.H.useState(O)},yt.useSyncExternalStore=function(O,b,V){return D.H.useSyncExternalStore(O,b,V)},yt.useTransition=function(){return D.H.useTransition()},yt.version="19.2.1",yt}var tT;function uv(){return tT||(tT=1,B_.exports=aP()),B_.exports}var V_={exports:{}},us={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iT;function oP(){if(iT)return us;iT=1;var r=uv();function e(h){var f="https://react.dev/errors/"+h;if(1<arguments.length){f+="?args[]="+encodeURIComponent(arguments[1]);for(var d=2;d<arguments.length;d++)f+="&args[]="+encodeURIComponent(arguments[d])}return"Minified React error #"+h+"; visit "+f+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var i={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},s=Symbol.for("react.portal");function n(h,f,d){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:_==null?null:""+_,children:h,containerInfo:f,implementation:d}}var o=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function l(h,f){if(h==="font")return"";if(typeof f=="string")return f==="use-credentials"?f:""}return us.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,us.createPortal=function(h,f){var d=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!f||f.nodeType!==1&&f.nodeType!==9&&f.nodeType!==11)throw Error(e(299));return n(h,f,null,d)},us.flushSync=function(h){var f=o.T,d=i.p;try{if(o.T=null,i.p=2,h)return h()}finally{o.T=f,i.p=d,i.d.f()}},us.preconnect=function(h,f){typeof h=="string"&&(f?(f=f.crossOrigin,f=typeof f=="string"?f==="use-credentials"?f:"":void 0):f=null,i.d.C(h,f))},us.prefetchDNS=function(h){typeof h=="string"&&i.d.D(h)},us.preinit=function(h,f){if(typeof h=="string"&&f&&typeof f.as=="string"){var d=f.as,_=l(d,f.crossOrigin),p=typeof f.integrity=="string"?f.integrity:void 0,g=typeof f.fetchPriority=="string"?f.fetchPriority:void 0;d==="style"?i.d.S(h,typeof f.precedence=="string"?f.precedence:void 0,{crossOrigin:_,integrity:p,fetchPriority:g}):d==="script"&&i.d.X(h,{crossOrigin:_,integrity:p,fetchPriority:g,nonce:typeof f.nonce=="string"?f.nonce:void 0})}},us.preinitModule=function(h,f){if(typeof h=="string")if(typeof f=="object"&&f!==null){if(f.as==null||f.as==="script"){var d=l(f.as,f.crossOrigin);i.d.M(h,{crossOrigin:d,integrity:typeof f.integrity=="string"?f.integrity:void 0,nonce:typeof f.nonce=="string"?f.nonce:void 0})}}else f==null&&i.d.M(h)},us.preload=function(h,f){if(typeof h=="string"&&typeof f=="object"&&f!==null&&typeof f.as=="string"){var d=f.as,_=l(d,f.crossOrigin);i.d.L(h,d,{crossOrigin:_,integrity:typeof f.integrity=="string"?f.integrity:void 0,nonce:typeof f.nonce=="string"?f.nonce:void 0,type:typeof f.type=="string"?f.type:void 0,fetchPriority:typeof f.fetchPriority=="string"?f.fetchPriority:void 0,referrerPolicy:typeof f.referrerPolicy=="string"?f.referrerPolicy:void 0,imageSrcSet:typeof f.imageSrcSet=="string"?f.imageSrcSet:void 0,imageSizes:typeof f.imageSizes=="string"?f.imageSizes:void 0,media:typeof f.media=="string"?f.media:void 0})}},us.preloadModule=function(h,f){if(typeof h=="string")if(f){var d=l(f.as,f.crossOrigin);i.d.m(h,{as:typeof f.as=="string"&&f.as!=="script"?f.as:void 0,crossOrigin:d,integrity:typeof f.integrity=="string"?f.integrity:void 0})}else i.d.m(h)},us.requestFormReset=function(h){i.d.r(h)},us.unstable_batchedUpdates=function(h,f){return h(f)},us.useFormState=function(h,f,d){return o.H.useFormState(h,f,d)},us.useFormStatus=function(){return o.H.useHostTransitionStatus()},us.version="19.2.1",us}var sT;function lP(){if(sT)return V_.exports;sT=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),V_.exports=oP(),V_.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rT;function cP(){if(rT)return Uc;rT=1;var r=nP(),e=uv(),t=lP();function i(a){var c="https://react.dev/errors/"+a;if(1<arguments.length){c+="?args[]="+encodeURIComponent(arguments[1]);for(var u=2;u<arguments.length;u++)c+="&args[]="+encodeURIComponent(arguments[u])}return"Minified React error #"+a+"; visit "+c+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(a){return!(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11)}function n(a){var c=a,u=a;if(a.alternate)for(;c.return;)c=c.return;else{a=c;do c=a,(c.flags&4098)!==0&&(u=c.return),a=c.return;while(a)}return c.tag===3?u:null}function o(a){if(a.tag===13){var c=a.memoizedState;if(c===null&&(a=a.alternate,a!==null&&(c=a.memoizedState)),c!==null)return c.dehydrated}return null}function l(a){if(a.tag===31){var c=a.memoizedState;if(c===null&&(a=a.alternate,a!==null&&(c=a.memoizedState)),c!==null)return c.dehydrated}return null}function h(a){if(n(a)!==a)throw Error(i(188))}function f(a){var c=a.alternate;if(!c){if(c=n(a),c===null)throw Error(i(188));return c!==a?null:a}for(var u=a,m=c;;){var S=u.return;if(S===null)break;var E=S.alternate;if(E===null){if(m=S.return,m!==null){u=m;continue}break}if(S.child===E.child){for(E=S.child;E;){if(E===u)return h(S),a;if(E===m)return h(S),c;E=E.sibling}throw Error(i(188))}if(u.return!==m.return)u=S,m=E;else{for(var F=!1,Y=S.child;Y;){if(Y===u){F=!0,u=S,m=E;break}if(Y===m){F=!0,m=S,u=E;break}Y=Y.sibling}if(!F){for(Y=E.child;Y;){if(Y===u){F=!0,u=E,m=S;break}if(Y===m){F=!0,m=E,u=S;break}Y=Y.sibling}if(!F)throw Error(i(189))}}if(u.alternate!==m)throw Error(i(190))}if(u.tag!==3)throw Error(i(188));return u.stateNode.current===u?a:c}function d(a){var c=a.tag;if(c===5||c===26||c===27||c===6)return a;for(a=a.child;a!==null;){if(c=d(a),c!==null)return c;a=a.sibling}return null}var _=Object.assign,p=Symbol.for("react.element"),g=Symbol.for("react.transitional.element"),v=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),R=Symbol.for("react.consumer"),I=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),z=Symbol.for("react.activity"),k=Symbol.for("react.memo_cache_sentinel"),ne=Symbol.iterator;function fe(a){return a===null||typeof a!="object"?null:(a=ne&&a[ne]||a["@@iterator"],typeof a=="function"?a:null)}var me=Symbol.for("react.client.reference");function B(a){if(a==null)return null;if(typeof a=="function")return a.$$typeof===me?null:a.displayName||a.name||null;if(typeof a=="string")return a;switch(a){case x:return"Fragment";case y:return"Profiler";case T:return"StrictMode";case A:return"Suspense";case P:return"SuspenseList";case z:return"Activity"}if(typeof a=="object")switch(a.$$typeof){case v:return"Portal";case I:return a.displayName||"Context";case R:return(a._context.displayName||"Context")+".Consumer";case w:var c=a.render;return a=a.displayName,a||(a=c.displayName||c.name||"",a=a!==""?"ForwardRef("+a+")":"ForwardRef"),a;case D:return c=a.displayName||null,c!==null?c:B(a.type)||"Memo";case U:c=a._payload,a=a._init;try{return B(a(c))}catch{}}return null}var re=Array.isArray,Z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,he={pending:!1,data:null,method:null,action:null},K=[],ie=-1;function O(a){return{current:a}}function b(a){0>ie||(a.current=K[ie],K[ie]=null,ie--)}function V(a,c){ie++,K[ie]=a.current,a.current=c}var H=O(null),G=O(null),ee=O(null),pe=O(null);function Pe(a,c){switch(V(ee,c),V(G,a),V(H,null),c.nodeType){case 9:case 11:a=(a=c.documentElement)&&(a=a.namespaceURI)?xS(a):0;break;default:if(a=c.tagName,c=c.namespaceURI)c=xS(c),a=SS(c,a);else switch(a){case"svg":a=1;break;case"math":a=2;break;default:a=0}}b(H),V(H,a)}function Fe(){b(H),b(G),b(ee)}function $(a){a.memoizedState!==null&&V(pe,a);var c=H.current,u=SS(c,a.type);c!==u&&(V(G,a),V(H,u))}function X(a){G.current===a&&(b(H),b(G)),pe.current===a&&(b(pe),wc._currentValue=he)}var te,xe;function Oe(a){if(te===void 0)try{throw Error()}catch(u){var c=u.stack.trim().match(/\n( *(at )?)/);te=c&&c[1]||"",xe=-1<u.stack.indexOf(`
    at`)?" (<anonymous>)":-1<u.stack.indexOf("@")?"@unknown:0:0":""}return`
`+te+a+xe}var Re=!1;function Qe(a,c){if(!a||Re)return"";Re=!0;var u=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var m={DetermineComponentFrameRoot:function(){try{if(c){var Le=function(){throw Error()};if(Object.defineProperty(Le.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Le,[])}catch(be){var ye=be}Reflect.construct(a,[],Le)}else{try{Le.call()}catch(be){ye=be}a.call(Le.prototype)}}else{try{throw Error()}catch(be){ye=be}(Le=a())&&typeof Le.catch=="function"&&Le.catch(function(){})}}catch(be){if(be&&ye&&typeof be.stack=="string")return[be.stack,ye.stack]}return[null,null]}};m.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var S=Object.getOwnPropertyDescriptor(m.DetermineComponentFrameRoot,"name");S&&S.configurable&&Object.defineProperty(m.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var E=m.DetermineComponentFrameRoot(),F=E[0],Y=E[1];if(F&&Y){var ce=F.split(`
`),Ee=Y.split(`
`);for(S=m=0;m<ce.length&&!ce[m].includes("DetermineComponentFrameRoot");)m++;for(;S<Ee.length&&!Ee[S].includes("DetermineComponentFrameRoot");)S++;if(m===ce.length||S===Ee.length)for(m=ce.length-1,S=Ee.length-1;1<=m&&0<=S&&ce[m]!==Ee[S];)S--;for(;1<=m&&0<=S;m--,S--)if(ce[m]!==Ee[S]){if(m!==1||S!==1)do if(m--,S--,0>S||ce[m]!==Ee[S]){var Me=`
`+ce[m].replace(" at new "," at ");return a.displayName&&Me.includes("<anonymous>")&&(Me=Me.replace("<anonymous>",a.displayName)),Me}while(1<=m&&0<=S);break}}}finally{Re=!1,Error.prepareStackTrace=u}return(u=a?a.displayName||a.name:"")?Oe(u):""}function bt(a,c){switch(a.tag){case 26:case 27:case 5:return Oe(a.type);case 16:return Oe("Lazy");case 13:return a.child!==c&&c!==null?Oe("Suspense Fallback"):Oe("Suspense");case 19:return Oe("SuspenseList");case 0:case 15:return Qe(a.type,!1);case 11:return Qe(a.type.render,!1);case 1:return Qe(a.type,!0);case 31:return Oe("Activity");default:return""}}function _t(a){try{var c="",u=null;do c+=bt(a,u),u=a,a=a.return;while(a);return c}catch(m){return`
Error generating stack: `+m.message+`
`+m.stack}}var dt=Object.prototype.hasOwnProperty,vt=r.unstable_scheduleCallback,xt=r.unstable_cancelCallback,nt=r.unstable_shouldYield,oe=r.unstable_requestPaint,Ne=r.unstable_now,Lt=r.unstable_getCurrentPriorityLevel,Ft=r.unstable_ImmediatePriority,Ot=r.unstable_UserBlockingPriority,wt=r.unstable_NormalPriority,ei=r.unstable_LowPriority,Nt=r.unstable_IdlePriority,pt=r.log,ti=r.unstable_setDisableYieldValue,Qt=null,ci=null;function Ai(a){if(typeof pt=="function"&&ti(a),ci&&typeof ci.setStrictMode=="function")try{ci.setStrictMode(Qt,a)}catch{}}var Ri=Math.clz32?Math.clz32:Ar,yr=Math.log,br=Math.LN2;function Ar(a){return a>>>=0,a===0?32:31-(yr(a)/br|0)|0}var Ps=256,ws=262144,Os=4194304;function as(a){var c=a&42;if(c!==0)return c;switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return a&261888;case 262144:case 524288:case 1048576:case 2097152:return a&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return a&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return a}}function Ls(a,c,u){var m=a.pendingLanes;if(m===0)return 0;var S=0,E=a.suspendedLanes,F=a.pingedLanes;a=a.warmLanes;var Y=m&134217727;return Y!==0?(m=Y&~E,m!==0?S=as(m):(F&=Y,F!==0?S=as(F):u||(u=Y&~a,u!==0&&(S=as(u))))):(Y=m&~E,Y!==0?S=as(Y):F!==0?S=as(F):u||(u=m&~a,u!==0&&(S=as(u)))),S===0?0:c!==0&&c!==S&&(c&E)===0&&(E=S&-S,u=c&-c,E>=u||E===32&&(u&4194048)!==0)?c:S}function it(a,c){return(a.pendingLanes&~(a.suspendedLanes&~a.pingedLanes)&c)===0}function W(a,c){switch(a){case 1:case 2:case 4:case 8:case 64:return c+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return c+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ce(){var a=Os;return Os<<=1,(Os&62914560)===0&&(Os=4194304),a}function Et(a){for(var c=[],u=0;31>u;u++)c.push(a);return c}function Ye(a,c){a.pendingLanes|=c,c!==268435456&&(a.suspendedLanes=0,a.pingedLanes=0,a.warmLanes=0)}function j(a,c,u,m,S,E){var F=a.pendingLanes;a.pendingLanes=u,a.suspendedLanes=0,a.pingedLanes=0,a.warmLanes=0,a.expiredLanes&=u,a.entangledLanes&=u,a.errorRecoveryDisabledLanes&=u,a.shellSuspendCounter=0;var Y=a.entanglements,ce=a.expirationTimes,Ee=a.hiddenUpdates;for(u=F&~u;0<u;){var Me=31-Ri(u),Le=1<<Me;Y[Me]=0,ce[Me]=-1;var ye=Ee[Me];if(ye!==null)for(Ee[Me]=null,Me=0;Me<ye.length;Me++){var be=ye[Me];be!==null&&(be.lane&=-536870913)}u&=~Le}m!==0&&We(a,m,0),E!==0&&S===0&&a.tag!==0&&(a.suspendedLanes|=E&~(F&~c))}function We(a,c,u){a.pendingLanes|=c,a.suspendedLanes&=~c;var m=31-Ri(c);a.entangledLanes|=c,a.entanglements[m]=a.entanglements[m]|1073741824|u&261930}function ri(a,c){var u=a.entangledLanes|=c;for(a=a.entanglements;u;){var m=31-Ri(u),S=1<<m;S&c|a[m]&c&&(a[m]|=c),u&=~S}}function os(a,c){var u=c&-c;return u=(u&42)!==0?1:Rr(u),(u&(a.suspendedLanes|c))!==0?0:u}function Rr(a){switch(a){case 2:a=1;break;case 8:a=4;break;case 32:a=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:a=128;break;case 268435456:a=134217728;break;default:a=0}return a}function ls(a){return a&=-a,2<a?8<a?(a&134217727)!==0?32:268435456:8:2}function ms(){var a=J.p;return a!==0?a:(a=window.event,a===void 0?32:XS(a.type))}function cs(a,c){var u=J.p;try{return J.p=a,c()}finally{J.p=u}}var Fs=Math.random().toString(36).slice(2),Ni="__reactFiber$"+Fs,Qi="__reactProps$"+Fs,qr="__reactContainer$"+Fs,ao="__reactEvents$"+Fs,dh="__reactListeners$"+Fs,_h="__reactHandles$"+Fs,gl="__reactResources$"+Fs,Ln="__reactMarker$"+Fs;function oo(a){delete a[Ni],delete a[Qi],delete a[ao],delete a[dh],delete a[_h]}function jr(a){var c=a[Ni];if(c)return c;for(var u=a.parentNode;u;){if(c=u[qr]||u[Ni]){if(u=c.alternate,c.child!==null||u!==null&&u.child!==null)for(a=IS(a);a!==null;){if(u=a[Ni])return u;a=IS(a)}return c}a=u,u=a.parentNode}return null}function Kr(a){if(a=a[Ni]||a[qr]){var c=a.tag;if(c===5||c===6||c===13||c===31||c===26||c===27||c===3)return a}return null}function Fn(a){var c=a.tag;if(c===5||c===26||c===27||c===6)return a.stateNode;throw Error(i(33))}function Zr(a){var c=a[gl];return c||(c=a[gl]={hoistableStyles:new Map,hoistableScripts:new Map}),c}function wi(a){a[Ln]=!0}var vl=new Set,xl={};function Ir(a,c){Qr(a,c),Qr(a+"Capture",c)}function Qr(a,c){for(xl[a]=c,a=0;a<c.length;a++)vl.add(c[a])}var mh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Sl={},Tl={};function ph(a){return dt.call(Tl,a)?!0:dt.call(Sl,a)?!1:mh.test(a)?Tl[a]=!0:(Sl[a]=!0,!1)}function Aa(a,c,u){if(ph(c))if(u===null)a.removeAttribute(c);else{switch(typeof u){case"undefined":case"function":case"symbol":a.removeAttribute(c);return;case"boolean":var m=c.toLowerCase().slice(0,5);if(m!=="data-"&&m!=="aria-"){a.removeAttribute(c);return}}a.setAttribute(c,""+u)}}function Ra(a,c,u){if(u===null)a.removeAttribute(c);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":a.removeAttribute(c);return}a.setAttribute(c,""+u)}}function Zs(a,c,u,m){if(m===null)a.removeAttribute(u);else{switch(typeof m){case"undefined":case"function":case"symbol":case"boolean":a.removeAttribute(u);return}a.setAttributeNS(c,u,""+m)}}function ps(a){switch(typeof a){case"bigint":case"boolean":case"number":case"string":case"undefined":return a;case"object":return a;default:return""}}function El(a){var c=a.type;return(a=a.nodeName)&&a.toLowerCase()==="input"&&(c==="checkbox"||c==="radio")}function gh(a,c,u){var m=Object.getOwnPropertyDescriptor(a.constructor.prototype,c);if(!a.hasOwnProperty(c)&&typeof m<"u"&&typeof m.get=="function"&&typeof m.set=="function"){var S=m.get,E=m.set;return Object.defineProperty(a,c,{configurable:!0,get:function(){return S.call(this)},set:function(F){u=""+F,E.call(this,F)}}),Object.defineProperty(a,c,{enumerable:m.enumerable}),{getValue:function(){return u},setValue:function(F){u=""+F},stopTracking:function(){a._valueTracker=null,delete a[c]}}}}function lo(a){if(!a._valueTracker){var c=El(a)?"checked":"value";a._valueTracker=gh(a,c,""+a[c])}}function yl(a){if(!a)return!1;var c=a._valueTracker;if(!c)return!0;var u=c.getValue(),m="";return a&&(m=El(a)?a.checked?"true":"false":a.value),a=m,a!==u?(c.setValue(a),!0):!1}function Ia(a){if(a=a||(typeof document<"u"?document:void 0),typeof a>"u")return null;try{return a.activeElement||a.body}catch{return a.body}}var vh=/[\n"\\]/g;function gs(a){return a.replace(vh,function(c){return"\\"+c.charCodeAt(0).toString(16)+" "})}function co(a,c,u,m,S,E,F,Y){a.name="",F!=null&&typeof F!="function"&&typeof F!="symbol"&&typeof F!="boolean"?a.type=F:a.removeAttribute("type"),c!=null?F==="number"?(c===0&&a.value===""||a.value!=c)&&(a.value=""+ps(c)):a.value!==""+ps(c)&&(a.value=""+ps(c)):F!=="submit"&&F!=="reset"||a.removeAttribute("value"),c!=null?ho(a,F,ps(c)):u!=null?ho(a,F,ps(u)):m!=null&&a.removeAttribute("value"),S==null&&E!=null&&(a.defaultChecked=!!E),S!=null&&(a.checked=S&&typeof S!="function"&&typeof S!="symbol"),Y!=null&&typeof Y!="function"&&typeof Y!="symbol"&&typeof Y!="boolean"?a.name=""+ps(Y):a.removeAttribute("name")}function bl(a,c,u,m,S,E,F,Y){if(E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(a.type=E),c!=null||u!=null){if(!(E!=="submit"&&E!=="reset"||c!=null)){lo(a);return}u=u!=null?""+ps(u):"",c=c!=null?""+ps(c):u,Y||c===a.value||(a.value=c),a.defaultValue=c}m=m??S,m=typeof m!="function"&&typeof m!="symbol"&&!!m,a.checked=Y?a.checked:!!m,a.defaultChecked=!!m,F!=null&&typeof F!="function"&&typeof F!="symbol"&&typeof F!="boolean"&&(a.name=F),lo(a)}function ho(a,c,u){c==="number"&&Ia(a.ownerDocument)===a||a.defaultValue===""+u||(a.defaultValue=""+u)}function $r(a,c,u,m){if(a=a.options,c){c={};for(var S=0;S<u.length;S++)c["$"+u[S]]=!0;for(u=0;u<a.length;u++)S=c.hasOwnProperty("$"+a[u].value),a[u].selected!==S&&(a[u].selected=S),S&&m&&(a[u].defaultSelected=!0)}else{for(u=""+ps(u),c=null,S=0;S<a.length;S++){if(a[S].value===u){a[S].selected=!0,m&&(a[S].defaultSelected=!0);return}c!==null||a[S].disabled||(c=a[S])}c!==null&&(c.selected=!0)}}function Al(a,c,u){if(c!=null&&(c=""+ps(c),c!==a.value&&(a.value=c),u==null)){a.defaultValue!==c&&(a.defaultValue=c);return}a.defaultValue=u!=null?""+ps(u):""}function Rl(a,c,u,m){if(c==null){if(m!=null){if(u!=null)throw Error(i(92));if(re(m)){if(1<m.length)throw Error(i(93));m=m[0]}u=m}u==null&&(u=""),c=u}u=ps(c),a.defaultValue=u,m=a.textContent,m===u&&m!==""&&m!==null&&(a.value=m),lo(a)}function Jr(a,c){if(c){var u=a.firstChild;if(u&&u===a.lastChild&&u.nodeType===3){u.nodeValue=c;return}}a.textContent=c}var xh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Il(a,c,u){var m=c.indexOf("--")===0;u==null||typeof u=="boolean"||u===""?m?a.setProperty(c,""):c==="float"?a.cssFloat="":a[c]="":m?a.setProperty(c,u):typeof u!="number"||u===0||xh.has(c)?c==="float"?a.cssFloat=u:a[c]=(""+u).trim():a[c]=u+"px"}function Cl(a,c,u){if(c!=null&&typeof c!="object")throw Error(i(62));if(a=a.style,u!=null){for(var m in u)!u.hasOwnProperty(m)||c!=null&&c.hasOwnProperty(m)||(m.indexOf("--")===0?a.setProperty(m,""):m==="float"?a.cssFloat="":a[m]="");for(var S in c)m=c[S],c.hasOwnProperty(S)&&u[S]!==m&&Il(a,S,m)}else for(var E in c)c.hasOwnProperty(E)&&Il(a,E,c[E])}function fo(a){if(a.indexOf("-")===-1)return!1;switch(a){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Th=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ca(a){return Th.test(""+a)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":a}function Qs(){}var uo=null;function _o(a){return a=a.target||a.srcElement||window,a.correspondingUseElement&&(a=a.correspondingUseElement),a.nodeType===3?a.parentNode:a}var en=null,tn=null;function Ml(a){var c=Kr(a);if(c&&(a=c.stateNode)){var u=a[Qi]||null;e:switch(a=c.stateNode,c.type){case"input":if(co(a,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name),c=u.name,u.type==="radio"&&c!=null){for(u=a;u.parentNode;)u=u.parentNode;for(u=u.querySelectorAll('input[name="'+gs(""+c)+'"][type="radio"]'),c=0;c<u.length;c++){var m=u[c];if(m!==a&&m.form===a.form){var S=m[Qi]||null;if(!S)throw Error(i(90));co(m,S.value,S.defaultValue,S.defaultValue,S.checked,S.defaultChecked,S.type,S.name)}}for(c=0;c<u.length;c++)m=u[c],m.form===a.form&&yl(m)}break e;case"textarea":Al(a,u.value,u.defaultValue);break e;case"select":c=u.value,c!=null&&$r(a,!!u.multiple,c,!1)}}}var mo=!1;function Dl(a,c,u){if(mo)return a(c,u);mo=!0;try{var m=a(c);return m}finally{if(mo=!1,(en!==null||tn!==null)&&(zf(),en&&(c=en,a=tn,tn=en=null,Ml(c),a)))for(c=0;c<a.length;c++)Ml(a[c])}}function Nn(a,c){var u=a.stateNode;if(u===null)return null;var m=u[Qi]||null;if(m===null)return null;u=m[c];e:switch(c){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(m=!m.disabled)||(a=a.type,m=!(a==="button"||a==="input"||a==="select"||a==="textarea")),a=!m;break e;default:a=!1}if(a)return null;if(u&&typeof u!="function")throw Error(i(231,c,typeof u));return u}var $s=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),po=!1;if($s)try{var Un={};Object.defineProperty(Un,"passive",{get:function(){po=!0}}),window.addEventListener("test",Un,Un),window.removeEventListener("test",Un,Un)}catch{po=!1}var dr=null,go=null,Ma=null;function Pl(){if(Ma)return Ma;var a,c=go,u=c.length,m,S="value"in dr?dr.value:dr.textContent,E=S.length;for(a=0;a<u&&c[a]===S[a];a++);var F=u-a;for(m=1;m<=F&&c[u-m]===S[E-m];m++);return Ma=S.slice(a,1<m?1-m:void 0)}function Da(a){var c=a.keyCode;return"charCode"in a?(a=a.charCode,a===0&&c===13&&(a=13)):a=c,a===10&&(a=13),32<=a||a===13?a:0}function Pa(){return!0}function wl(){return!1}function $i(a){function c(u,m,S,E,F){this._reactName=u,this._targetInst=S,this.type=m,this.nativeEvent=E,this.target=F,this.currentTarget=null;for(var Y in a)a.hasOwnProperty(Y)&&(u=a[Y],this[Y]=u?u(E):E[Y]);return this.isDefaultPrevented=(E.defaultPrevented!=null?E.defaultPrevented:E.returnValue===!1)?Pa:wl,this.isPropagationStopped=wl,this}return _(c.prototype,{preventDefault:function(){this.defaultPrevented=!0;var u=this.nativeEvent;u&&(u.preventDefault?u.preventDefault():typeof u.returnValue!="unknown"&&(u.returnValue=!1),this.isDefaultPrevented=Pa)},stopPropagation:function(){var u=this.nativeEvent;u&&(u.stopPropagation?u.stopPropagation():typeof u.cancelBubble!="unknown"&&(u.cancelBubble=!0),this.isPropagationStopped=Pa)},persist:function(){},isPersistent:Pa}),c}var Cr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wa=$i(Cr),Bn=_({},Cr,{view:0,detail:0}),Eh=$i(Bn),vo,xo,Vn,Oa=_({},Bn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:To,button:0,buttons:0,relatedTarget:function(a){return a.relatedTarget===void 0?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){return"movementX"in a?a.movementX:(a!==Vn&&(Vn&&a.type==="mousemove"?(vo=a.screenX-Vn.screenX,xo=a.screenY-Vn.screenY):xo=vo=0,Vn=a),vo)},movementY:function(a){return"movementY"in a?a.movementY:xo}}),Ol=$i(Oa),yh=_({},Oa,{dataTransfer:0}),bh=$i(yh),Ah=_({},Bn,{relatedTarget:0}),So=$i(Ah),Rh=_({},Cr,{animationName:0,elapsedTime:0,pseudoElement:0}),Ih=$i(Rh),Ch=_({},Cr,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),Mh=$i(Ch),Dh=_({},Cr,{data:0}),Ll=$i(Dh),Ph={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Oh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lh(a){var c=this.nativeEvent;return c.getModifierState?c.getModifierState(a):(a=Oh[a])?!!c[a]:!1}function To(){return Lh}var Fh=_({},Bn,{key:function(a){if(a.key){var c=Ph[a.key]||a.key;if(c!=="Unidentified")return c}return a.type==="keypress"?(a=Da(a),a===13?"Enter":String.fromCharCode(a)):a.type==="keydown"||a.type==="keyup"?wh[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:To,charCode:function(a){return a.type==="keypress"?Da(a):0},keyCode:function(a){return a.type==="keydown"||a.type==="keyup"?a.keyCode:0},which:function(a){return a.type==="keypress"?Da(a):a.type==="keydown"||a.type==="keyup"?a.keyCode:0}}),Nh=$i(Fh),Uh=_({},Oa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fl=$i(Uh),Bh=_({},Bn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:To}),Vh=$i(Bh),zh=_({},Cr,{propertyName:0,elapsedTime:0,pseudoElement:0}),kh=$i(zh),Gh=_({},Oa,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Xh=$i(Gh),Wh=_({},Cr,{newState:0,oldState:0}),Hh=$i(Wh),Yh=[9,13,27,32],Eo=$s&&"CompositionEvent"in window,zn=null;$s&&"documentMode"in document&&(zn=document.documentMode);var qh=$s&&"TextEvent"in window&&!zn,Nl=$s&&(!Eo||zn&&8<zn&&11>=zn),Ul=" ",Bl=!1;function Vl(a,c){switch(a){case"keyup":return Yh.indexOf(c.keyCode)!==-1;case"keydown":return c.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zl(a){return a=a.detail,typeof a=="object"&&"data"in a?a.data:null}var sn=!1;function jh(a,c){switch(a){case"compositionend":return zl(c);case"keypress":return c.which!==32?null:(Bl=!0,Ul);case"textInput":return a=c.data,a===Ul&&Bl?null:a;default:return null}}function Kh(a,c){if(sn)return a==="compositionend"||!Eo&&Vl(a,c)?(a=Pl(),Ma=go=dr=null,sn=!1,a):null;switch(a){case"paste":return null;case"keypress":if(!(c.ctrlKey||c.altKey||c.metaKey)||c.ctrlKey&&c.altKey){if(c.char&&1<c.char.length)return c.char;if(c.which)return String.fromCharCode(c.which)}return null;case"compositionend":return Nl&&c.locale!=="ko"?null:c.data;default:return null}}var Zh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kl(a){var c=a&&a.nodeName&&a.nodeName.toLowerCase();return c==="input"?!!Zh[a.type]:c==="textarea"}function Gl(a,c,u,m){en?tn?tn.push(m):tn=[m]:en=m,c=qf(c,"onChange"),0<c.length&&(u=new wa("onChange","change",null,u,m),a.push({event:u,listeners:c}))}var kn=null,Gn=null;function Qh(a){dS(a,0)}function La(a){var c=Fn(a);if(yl(c))return a}function Xl(a,c){if(a==="change")return c}var Wl=!1;if($s){var yo;if($s){var bo="oninput"in document;if(!bo){var Hl=document.createElement("div");Hl.setAttribute("oninput","return;"),bo=typeof Hl.oninput=="function"}yo=bo}else yo=!1;Wl=yo&&(!document.documentMode||9<document.documentMode)}function Yl(){kn&&(kn.detachEvent("onpropertychange",ql),Gn=kn=null)}function ql(a){if(a.propertyName==="value"&&La(Gn)){var c=[];Gl(c,Gn,a,_o(a)),Dl(Qh,c)}}function $h(a,c,u){a==="focusin"?(Yl(),kn=c,Gn=u,kn.attachEvent("onpropertychange",ql)):a==="focusout"&&Yl()}function Jh(a){if(a==="selectionchange"||a==="keyup"||a==="keydown")return La(Gn)}function ef(a,c){if(a==="click")return La(c)}function tf(a,c){if(a==="input"||a==="change")return La(c)}function sf(a,c){return a===c&&(a!==0||1/a===1/c)||a!==a&&c!==c}var hs=typeof Object.is=="function"?Object.is:sf;function Xn(a,c){if(hs(a,c))return!0;if(typeof a!="object"||a===null||typeof c!="object"||c===null)return!1;var u=Object.keys(a),m=Object.keys(c);if(u.length!==m.length)return!1;for(m=0;m<u.length;m++){var S=u[m];if(!dt.call(c,S)||!hs(a[S],c[S]))return!1}return!0}function jl(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function Kl(a,c){var u=jl(a);a=0;for(var m;u;){if(u.nodeType===3){if(m=a+u.textContent.length,a<=c&&m>=c)return{node:u,offset:c-a};a=m}e:{for(;u;){if(u.nextSibling){u=u.nextSibling;break e}u=u.parentNode}u=void 0}u=jl(u)}}function Zl(a,c){return a&&c?a===c?!0:a&&a.nodeType===3?!1:c&&c.nodeType===3?Zl(a,c.parentNode):"contains"in a?a.contains(c):a.compareDocumentPosition?!!(a.compareDocumentPosition(c)&16):!1:!1}function Ql(a){a=a!=null&&a.ownerDocument!=null&&a.ownerDocument.defaultView!=null?a.ownerDocument.defaultView:window;for(var c=Ia(a.document);c instanceof a.HTMLIFrameElement;){try{var u=typeof c.contentWindow.location.href=="string"}catch{u=!1}if(u)a=c.contentWindow;else break;c=Ia(a.document)}return c}function Ao(a){var c=a&&a.nodeName&&a.nodeName.toLowerCase();return c&&(c==="input"&&(a.type==="text"||a.type==="search"||a.type==="tel"||a.type==="url"||a.type==="password")||c==="textarea"||a.contentEditable==="true")}var rf=$s&&"documentMode"in document&&11>=document.documentMode,rn=null,Ro=null,Wn=null,Io=!1;function $l(a,c,u){var m=u.window===u?u.document:u.nodeType===9?u:u.ownerDocument;Io||rn==null||rn!==Ia(m)||(m=rn,"selectionStart"in m&&Ao(m)?m={start:m.selectionStart,end:m.selectionEnd}:(m=(m.ownerDocument&&m.ownerDocument.defaultView||window).getSelection(),m={anchorNode:m.anchorNode,anchorOffset:m.anchorOffset,focusNode:m.focusNode,focusOffset:m.focusOffset}),Wn&&Xn(Wn,m)||(Wn=m,m=qf(Ro,"onSelect"),0<m.length&&(c=new wa("onSelect","select",null,c,u),a.push({event:c,listeners:m}),c.target=rn)))}function Mr(a,c){var u={};return u[a.toLowerCase()]=c.toLowerCase(),u["Webkit"+a]="webkit"+c,u["Moz"+a]="moz"+c,u}var nn={animationend:Mr("Animation","AnimationEnd"),animationiteration:Mr("Animation","AnimationIteration"),animationstart:Mr("Animation","AnimationStart"),transitionrun:Mr("Transition","TransitionRun"),transitionstart:Mr("Transition","TransitionStart"),transitioncancel:Mr("Transition","TransitionCancel"),transitionend:Mr("Transition","TransitionEnd")},Co={},Jl={};$s&&(Jl=document.createElement("div").style,"AnimationEvent"in window||(delete nn.animationend.animation,delete nn.animationiteration.animation,delete nn.animationstart.animation),"TransitionEvent"in window||delete nn.transitionend.transition);function Dr(a){if(Co[a])return Co[a];if(!nn[a])return a;var c=nn[a],u;for(u in c)if(c.hasOwnProperty(u)&&u in Jl)return Co[a]=c[u];return a}var ec=Dr("animationend"),tc=Dr("animationiteration"),ic=Dr("animationstart"),nf=Dr("transitionrun"),af=Dr("transitionstart"),of=Dr("transitioncancel"),je=Dr("transitionend"),M=new Map,_e="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");_e.push("scrollEnd");function ii(a,c){M.set(a,c),Ir(c,[a])}var Mt=typeof reportError=="function"?reportError:function(a){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var c=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof a=="object"&&a!==null&&typeof a.message=="string"?String(a.message):String(a),error:a});if(!window.dispatchEvent(c))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",a);return}console.error(a)},Dt=[],Se=0,Ns=0;function Js(){for(var a=Se,c=Ns=Se=0;c<a;){var u=Dt[c];Dt[c++]=null;var m=Dt[c];Dt[c++]=null;var S=Dt[c];Dt[c++]=null;var E=Dt[c];if(Dt[c++]=null,m!==null&&S!==null){var F=m.pending;F===null?S.next=S:(S.next=F.next,F.next=S),m.pending=S}E!==0&&Ui(u,S,E)}}function _r(a,c,u,m){Dt[Se++]=a,Dt[Se++]=c,Dt[Se++]=u,Dt[Se++]=m,Ns|=m,a.lanes|=m,a=a.alternate,a!==null&&(a.lanes|=m)}function fs(a,c,u,m){return _r(a,c,u,m),mr(a)}function et(a,c){return _r(a,null,null,c),mr(a)}function Ui(a,c,u){a.lanes|=u;var m=a.alternate;m!==null&&(m.lanes|=u);for(var S=!1,E=a.return;E!==null;)E.childLanes|=u,m=E.alternate,m!==null&&(m.childLanes|=u),E.tag===22&&(a=E.stateNode,a===null||a._visibility&1||(S=!0)),a=E,E=E.return;return a.tag===3?(E=a.stateNode,S&&c!==null&&(S=31-Ri(u),a=E.hiddenUpdates,m=a[S],m===null?a[S]=[c]:m.push(c),c.lane=u|536870912),E):null}function mr(a){if(50<Ac)throw Ac=0,r_=null,Error(i(185));for(var c=a.return;c!==null;)a=c,c=a.return;return a.tag===3?a.stateNode:null}var Ji={};function an(a,c,u,m){this.tag=a,this.key=u,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=c,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=m,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yi(a,c,u,m){return new an(a,c,u,m)}function Mo(a){return a=a.prototype,!(!a||!a.isReactComponent)}function er(a,c){var u=a.alternate;return u===null?(u=Yi(a.tag,c,a.key,a.mode),u.elementType=a.elementType,u.type=a.type,u.stateNode=a.stateNode,u.alternate=a,a.alternate=u):(u.pendingProps=c,u.type=a.type,u.flags=0,u.subtreeFlags=0,u.deletions=null),u.flags=a.flags&65011712,u.childLanes=a.childLanes,u.lanes=a.lanes,u.child=a.child,u.memoizedProps=a.memoizedProps,u.memoizedState=a.memoizedState,u.updateQueue=a.updateQueue,c=a.dependencies,u.dependencies=c===null?null:{lanes:c.lanes,firstContext:c.firstContext},u.sibling=a.sibling,u.index=a.index,u.ref=a.ref,u.refCleanup=a.refCleanup,u}function lf(a,c){a.flags&=65011714;var u=a.alternate;return u===null?(a.childLanes=0,a.lanes=c,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=u.childLanes,a.lanes=u.lanes,a.child=u.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=u.memoizedProps,a.memoizedState=u.memoizedState,a.updateQueue=u.updateQueue,a.type=u.type,c=u.dependencies,a.dependencies=c===null?null:{lanes:c.lanes,firstContext:c.firstContext}),a}function Do(a,c,u,m,S,E){var F=0;if(m=a,typeof a=="function")Mo(a)&&(F=1);else if(typeof a=="string")F=WD(a,u,H.current)?26:a==="html"||a==="head"||a==="body"?27:5;else e:switch(a){case z:return a=Yi(31,u,c,S),a.elementType=z,a.lanes=E,a;case x:return tr(u.children,S,E,c);case T:F=8,S|=24;break;case y:return a=Yi(12,u,c,S|2),a.elementType=y,a.lanes=E,a;case A:return a=Yi(13,u,c,S),a.elementType=A,a.lanes=E,a;case P:return a=Yi(19,u,c,S),a.elementType=P,a.lanes=E,a;default:if(typeof a=="object"&&a!==null)switch(a.$$typeof){case I:F=10;break e;case R:F=9;break e;case w:F=11;break e;case D:F=14;break e;case U:F=16,m=null;break e}F=29,u=Error(i(130,a===null?"null":typeof a,"")),m=null}return c=Yi(F,u,c,S),c.elementType=a,c.type=m,c.lanes=E,c}function tr(a,c,u,m){return a=Yi(7,a,m,c),a.lanes=u,a}function Pr(a,c,u){return a=Yi(6,a,null,c),a.lanes=u,a}function sc(a){var c=Yi(18,null,null,0);return c.stateNode=a,c}function cf(a,c,u){return c=Yi(4,a.children!==null?a.children:[],a.key,c),c.lanes=u,c.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation},c}var hf=new WeakMap;function ir(a,c){if(typeof a=="object"&&a!==null){var u=hf.get(a);return u!==void 0?u:(c={value:a,source:c,stack:_t(c)},hf.set(a,c),c)}return{value:a,source:c,stack:_t(c)}}var Po=[],wo=0,ff=null,rc=0,sr=[],rr=0,Hn=null,wr=1,Or="";function on(a,c){Po[wo++]=rc,Po[wo++]=ff,ff=a,rc=c}function $v(a,c,u){sr[rr++]=wr,sr[rr++]=Or,sr[rr++]=Hn,Hn=a;var m=wr;a=Or;var S=32-Ri(m)-1;m&=~(1<<S),u+=1;var E=32-Ri(c)+S;if(30<E){var F=S-S%5;E=(m&(1<<F)-1).toString(32),m>>=F,S-=F,wr=1<<32-Ri(c)+S|u<<S|m,Or=E+a}else wr=1<<E|u<<S|m,Or=a}function Ju(a){a.return!==null&&(on(a,1),$v(a,1,0))}function ed(a){for(;a===ff;)ff=Po[--wo],Po[wo]=null,rc=Po[--wo],Po[wo]=null;for(;a===Hn;)Hn=sr[--rr],sr[rr]=null,Or=sr[--rr],sr[rr]=null,wr=sr[--rr],sr[rr]=null}function Jv(a,c){sr[rr++]=wr,sr[rr++]=Or,sr[rr++]=Hn,wr=c.id,Or=c.overflow,Hn=a}var es=null,Si=null,qt=!1,Yn=null,nr=!1,td=Error(i(519));function qn(a){var c=Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw nc(ir(c,a)),td}function e0(a){var c=a.stateNode,u=a.type,m=a.memoizedProps;switch(c[Ni]=a,c[Qi]=m,u){case"dialog":Bt("cancel",c),Bt("close",c);break;case"iframe":case"object":case"embed":Bt("load",c);break;case"video":case"audio":for(u=0;u<Ic.length;u++)Bt(Ic[u],c);break;case"source":Bt("error",c);break;case"img":case"image":case"link":Bt("error",c),Bt("load",c);break;case"details":Bt("toggle",c);break;case"input":Bt("invalid",c),bl(c,m.value,m.defaultValue,m.checked,m.defaultChecked,m.type,m.name,!0);break;case"select":Bt("invalid",c);break;case"textarea":Bt("invalid",c),Rl(c,m.value,m.defaultValue,m.children)}u=m.children,typeof u!="string"&&typeof u!="number"&&typeof u!="bigint"||c.textContent===""+u||m.suppressHydrationWarning===!0||gS(c.textContent,u)?(m.popover!=null&&(Bt("beforetoggle",c),Bt("toggle",c)),m.onScroll!=null&&Bt("scroll",c),m.onScrollEnd!=null&&Bt("scrollend",c),m.onClick!=null&&(c.onclick=Qs),c=!0):c=!1,c||qn(a,!0)}function t0(a){for(es=a.return;es;)switch(es.tag){case 5:case 31:case 13:nr=!1;return;case 27:case 3:nr=!0;return;default:es=es.return}}function Oo(a){if(a!==es)return!1;if(!qt)return t0(a),qt=!0,!1;var c=a.tag,u;if((u=c!==3&&c!==27)&&((u=c===5)&&(u=a.type,u=!(u!=="form"&&u!=="button")||x_(a.type,a.memoizedProps)),u=!u),u&&Si&&qn(a),t0(a),c===13){if(a=a.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(i(317));Si=RS(a)}else if(c===31){if(a=a.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(i(317));Si=RS(a)}else c===27?(c=Si,oa(a.type)?(a=b_,b_=null,Si=a):Si=c):Si=es?or(a.stateNode.nextSibling):null;return!0}function Fa(){Si=es=null,qt=!1}function id(){var a=Yn;return a!==null&&(As===null?As=a:As.push.apply(As,a),Yn=null),a}function nc(a){Yn===null?Yn=[a]:Yn.push(a)}var sd=O(null),Na=null,ln=null;function jn(a,c,u){V(sd,c._currentValue),c._currentValue=u}function cn(a){a._currentValue=sd.current,b(sd)}function rd(a,c,u){for(;a!==null;){var m=a.alternate;if((a.childLanes&c)!==c?(a.childLanes|=c,m!==null&&(m.childLanes|=c)):m!==null&&(m.childLanes&c)!==c&&(m.childLanes|=c),a===u)break;a=a.return}}function nd(a,c,u,m){var S=a.child;for(S!==null&&(S.return=a);S!==null;){var E=S.dependencies;if(E!==null){var F=S.child;E=E.firstContext;e:for(;E!==null;){var Y=E;E=S;for(var ce=0;ce<c.length;ce++)if(Y.context===c[ce]){E.lanes|=u,Y=E.alternate,Y!==null&&(Y.lanes|=u),rd(E.return,u,a),m||(F=null);break e}E=Y.next}}else if(S.tag===18){if(F=S.return,F===null)throw Error(i(341));F.lanes|=u,E=F.alternate,E!==null&&(E.lanes|=u),rd(F,u,a),F=null}else F=S.child;if(F!==null)F.return=S;else for(F=S;F!==null;){if(F===a){F=null;break}if(S=F.sibling,S!==null){S.return=F.return,F=S;break}F=F.return}S=F}}function Lo(a,c,u,m){a=null;for(var S=c,E=!1;S!==null;){if(!E){if((S.flags&524288)!==0)E=!0;else if((S.flags&262144)!==0)break}if(S.tag===10){var F=S.alternate;if(F===null)throw Error(i(387));if(F=F.memoizedProps,F!==null){var Y=S.type;hs(S.pendingProps.value,F.value)||(a!==null?a.push(Y):a=[Y])}}else if(S===pe.current){if(F=S.alternate,F===null)throw Error(i(387));F.memoizedState.memoizedState!==S.memoizedState.memoizedState&&(a!==null?a.push(wc):a=[wc])}S=S.return}a!==null&&nd(c,a,u,m),c.flags|=262144}function uf(a){for(a=a.firstContext;a!==null;){if(!hs(a.context._currentValue,a.memoizedValue))return!0;a=a.next}return!1}function Ua(a){Na=a,ln=null,a=a.dependencies,a!==null&&(a.firstContext=null)}function ts(a){return i0(Na,a)}function df(a,c){return Na===null&&Ua(a),i0(a,c)}function i0(a,c){var u=c._currentValue;if(c={context:c,memoizedValue:u,next:null},ln===null){if(a===null)throw Error(i(308));ln=c,a.dependencies={lanes:0,firstContext:c},a.flags|=524288}else ln=ln.next=c;return u}var z1=typeof AbortController<"u"?AbortController:function(){var a=[],c=this.signal={aborted:!1,addEventListener:function(u,m){a.push(m)}};this.abort=function(){c.aborted=!0,a.forEach(function(u){return u()})}},k1=r.unstable_scheduleCallback,G1=r.unstable_NormalPriority,Bi={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ad(){return{controller:new z1,data:new Map,refCount:0}}function ac(a){a.refCount--,a.refCount===0&&k1(G1,function(){a.controller.abort()})}var oc=null,od=0,Fo=0,No=null;function X1(a,c){if(oc===null){var u=oc=[];od=0,Fo=h_(),No={status:"pending",value:void 0,then:function(m){u.push(m)}}}return od++,c.then(s0,s0),c}function s0(){if(--od===0&&oc!==null){No!==null&&(No.status="fulfilled");var a=oc;oc=null,Fo=0,No=null;for(var c=0;c<a.length;c++)(0,a[c])()}}function W1(a,c){var u=[],m={status:"pending",value:null,reason:null,then:function(S){u.push(S)}};return a.then(function(){m.status="fulfilled",m.value=c;for(var S=0;S<u.length;S++)(0,u[S])(c)},function(S){for(m.status="rejected",m.reason=S,S=0;S<u.length;S++)(0,u[S])(void 0)}),m}var r0=Z.S;Z.S=function(a,c){kx=Ne(),typeof c=="object"&&c!==null&&typeof c.then=="function"&&X1(a,c),r0!==null&&r0(a,c)};var Ba=O(null);function ld(){var a=Ba.current;return a!==null?a:di.pooledCache}function _f(a,c){c===null?V(Ba,Ba.current):V(Ba,c.pool)}function n0(){var a=ld();return a===null?null:{parent:Bi._currentValue,pool:a}}var Uo=Error(i(460)),cd=Error(i(474)),mf=Error(i(542)),pf={then:function(){}};function a0(a){return a=a.status,a==="fulfilled"||a==="rejected"}function o0(a,c,u){switch(u=a[u],u===void 0?a.push(c):u!==c&&(c.then(Qs,Qs),c=u),c.status){case"fulfilled":return c.value;case"rejected":throw a=c.reason,c0(a),a;default:if(typeof c.status=="string")c.then(Qs,Qs);else{if(a=di,a!==null&&100<a.shellSuspendCounter)throw Error(i(482));a=c,a.status="pending",a.then(function(m){if(c.status==="pending"){var S=c;S.status="fulfilled",S.value=m}},function(m){if(c.status==="pending"){var S=c;S.status="rejected",S.reason=m}})}switch(c.status){case"fulfilled":return c.value;case"rejected":throw a=c.reason,c0(a),a}throw za=c,Uo}}function Va(a){try{var c=a._init;return c(a._payload)}catch(u){throw u!==null&&typeof u=="object"&&typeof u.then=="function"?(za=u,Uo):u}}var za=null;function l0(){if(za===null)throw Error(i(459));var a=za;return za=null,a}function c0(a){if(a===Uo||a===mf)throw Error(i(483))}var Bo=null,lc=0;function gf(a){var c=lc;return lc+=1,Bo===null&&(Bo=[]),o0(Bo,a,c)}function cc(a,c){c=c.props.ref,a.ref=c!==void 0?c:null}function vf(a,c){throw c.$$typeof===p?Error(i(525)):(a=Object.prototype.toString.call(c),Error(i(31,a==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":a)))}function h0(a){function c(ve,ue){if(a){var Te=ve.deletions;Te===null?(ve.deletions=[ue],ve.flags|=16):Te.push(ue)}}function u(ve,ue){if(!a)return null;for(;ue!==null;)c(ve,ue),ue=ue.sibling;return null}function m(ve){for(var ue=new Map;ve!==null;)ve.key!==null?ue.set(ve.key,ve):ue.set(ve.index,ve),ve=ve.sibling;return ue}function S(ve,ue){return ve=er(ve,ue),ve.index=0,ve.sibling=null,ve}function E(ve,ue,Te){return ve.index=Te,a?(Te=ve.alternate,Te!==null?(Te=Te.index,Te<ue?(ve.flags|=67108866,ue):Te):(ve.flags|=67108866,ue)):(ve.flags|=1048576,ue)}function F(ve){return a&&ve.alternate===null&&(ve.flags|=67108866),ve}function Y(ve,ue,Te,we){return ue===null||ue.tag!==6?(ue=Pr(Te,ve.mode,we),ue.return=ve,ue):(ue=S(ue,Te),ue.return=ve,ue)}function ce(ve,ue,Te,we){var ht=Te.type;return ht===x?Me(ve,ue,Te.props.children,we,Te.key):ue!==null&&(ue.elementType===ht||typeof ht=="object"&&ht!==null&&ht.$$typeof===U&&Va(ht)===ue.type)?(ue=S(ue,Te.props),cc(ue,Te),ue.return=ve,ue):(ue=Do(Te.type,Te.key,Te.props,null,ve.mode,we),cc(ue,Te),ue.return=ve,ue)}function Ee(ve,ue,Te,we){return ue===null||ue.tag!==4||ue.stateNode.containerInfo!==Te.containerInfo||ue.stateNode.implementation!==Te.implementation?(ue=cf(Te,ve.mode,we),ue.return=ve,ue):(ue=S(ue,Te.children||[]),ue.return=ve,ue)}function Me(ve,ue,Te,we,ht){return ue===null||ue.tag!==7?(ue=tr(Te,ve.mode,we,ht),ue.return=ve,ue):(ue=S(ue,Te),ue.return=ve,ue)}function Le(ve,ue,Te){if(typeof ue=="string"&&ue!==""||typeof ue=="number"||typeof ue=="bigint")return ue=Pr(""+ue,ve.mode,Te),ue.return=ve,ue;if(typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case g:return Te=Do(ue.type,ue.key,ue.props,null,ve.mode,Te),cc(Te,ue),Te.return=ve,Te;case v:return ue=cf(ue,ve.mode,Te),ue.return=ve,ue;case U:return ue=Va(ue),Le(ve,ue,Te)}if(re(ue)||fe(ue))return ue=tr(ue,ve.mode,Te,null),ue.return=ve,ue;if(typeof ue.then=="function")return Le(ve,gf(ue),Te);if(ue.$$typeof===I)return Le(ve,df(ve,ue),Te);vf(ve,ue)}return null}function ye(ve,ue,Te,we){var ht=ue!==null?ue.key:null;if(typeof Te=="string"&&Te!==""||typeof Te=="number"||typeof Te=="bigint")return ht!==null?null:Y(ve,ue,""+Te,we);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case g:return Te.key===ht?ce(ve,ue,Te,we):null;case v:return Te.key===ht?Ee(ve,ue,Te,we):null;case U:return Te=Va(Te),ye(ve,ue,Te,we)}if(re(Te)||fe(Te))return ht!==null?null:Me(ve,ue,Te,we,null);if(typeof Te.then=="function")return ye(ve,ue,gf(Te),we);if(Te.$$typeof===I)return ye(ve,ue,df(ve,Te),we);vf(ve,Te)}return null}function be(ve,ue,Te,we,ht){if(typeof we=="string"&&we!==""||typeof we=="number"||typeof we=="bigint")return ve=ve.get(Te)||null,Y(ue,ve,""+we,ht);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case g:return ve=ve.get(we.key===null?Te:we.key)||null,ce(ue,ve,we,ht);case v:return ve=ve.get(we.key===null?Te:we.key)||null,Ee(ue,ve,we,ht);case U:return we=Va(we),be(ve,ue,Te,we,ht)}if(re(we)||fe(we))return ve=ve.get(Te)||null,Me(ue,ve,we,ht,null);if(typeof we.then=="function")return be(ve,ue,Te,gf(we),ht);if(we.$$typeof===I)return be(ve,ue,Te,df(ue,we),ht);vf(ue,we)}return null}function rt(ve,ue,Te,we){for(var ht=null,$t=null,at=ue,It=ue=0,kt=null;at!==null&&It<Te.length;It++){at.index>It?(kt=at,at=null):kt=at.sibling;var Jt=ye(ve,at,Te[It],we);if(Jt===null){at===null&&(at=kt);break}a&&at&&Jt.alternate===null&&c(ve,at),ue=E(Jt,ue,It),$t===null?ht=Jt:$t.sibling=Jt,$t=Jt,at=kt}if(It===Te.length)return u(ve,at),qt&&on(ve,It),ht;if(at===null){for(;It<Te.length;It++)at=Le(ve,Te[It],we),at!==null&&(ue=E(at,ue,It),$t===null?ht=at:$t.sibling=at,$t=at);return qt&&on(ve,It),ht}for(at=m(at);It<Te.length;It++)kt=be(at,ve,It,Te[It],we),kt!==null&&(a&&kt.alternate!==null&&at.delete(kt.key===null?It:kt.key),ue=E(kt,ue,It),$t===null?ht=kt:$t.sibling=kt,$t=kt);return a&&at.forEach(function(ua){return c(ve,ua)}),qt&&on(ve,It),ht}function mt(ve,ue,Te,we){if(Te==null)throw Error(i(151));for(var ht=null,$t=null,at=ue,It=ue=0,kt=null,Jt=Te.next();at!==null&&!Jt.done;It++,Jt=Te.next()){at.index>It?(kt=at,at=null):kt=at.sibling;var ua=ye(ve,at,Jt.value,we);if(ua===null){at===null&&(at=kt);break}a&&at&&ua.alternate===null&&c(ve,at),ue=E(ua,ue,It),$t===null?ht=ua:$t.sibling=ua,$t=ua,at=kt}if(Jt.done)return u(ve,at),qt&&on(ve,It),ht;if(at===null){for(;!Jt.done;It++,Jt=Te.next())Jt=Le(ve,Jt.value,we),Jt!==null&&(ue=E(Jt,ue,It),$t===null?ht=Jt:$t.sibling=Jt,$t=Jt);return qt&&on(ve,It),ht}for(at=m(at);!Jt.done;It++,Jt=Te.next())Jt=be(at,ve,It,Jt.value,we),Jt!==null&&(a&&Jt.alternate!==null&&at.delete(Jt.key===null?It:Jt.key),ue=E(Jt,ue,It),$t===null?ht=Jt:$t.sibling=Jt,$t=Jt);return a&&at.forEach(function(tP){return c(ve,tP)}),qt&&on(ve,It),ht}function ui(ve,ue,Te,we){if(typeof Te=="object"&&Te!==null&&Te.type===x&&Te.key===null&&(Te=Te.props.children),typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case g:e:{for(var ht=Te.key;ue!==null;){if(ue.key===ht){if(ht=Te.type,ht===x){if(ue.tag===7){u(ve,ue.sibling),we=S(ue,Te.props.children),we.return=ve,ve=we;break e}}else if(ue.elementType===ht||typeof ht=="object"&&ht!==null&&ht.$$typeof===U&&Va(ht)===ue.type){u(ve,ue.sibling),we=S(ue,Te.props),cc(we,Te),we.return=ve,ve=we;break e}u(ve,ue);break}else c(ve,ue);ue=ue.sibling}Te.type===x?(we=tr(Te.props.children,ve.mode,we,Te.key),we.return=ve,ve=we):(we=Do(Te.type,Te.key,Te.props,null,ve.mode,we),cc(we,Te),we.return=ve,ve=we)}return F(ve);case v:e:{for(ht=Te.key;ue!==null;){if(ue.key===ht)if(ue.tag===4&&ue.stateNode.containerInfo===Te.containerInfo&&ue.stateNode.implementation===Te.implementation){u(ve,ue.sibling),we=S(ue,Te.children||[]),we.return=ve,ve=we;break e}else{u(ve,ue);break}else c(ve,ue);ue=ue.sibling}we=cf(Te,ve.mode,we),we.return=ve,ve=we}return F(ve);case U:return Te=Va(Te),ui(ve,ue,Te,we)}if(re(Te))return rt(ve,ue,Te,we);if(fe(Te)){if(ht=fe(Te),typeof ht!="function")throw Error(i(150));return Te=ht.call(Te),mt(ve,ue,Te,we)}if(typeof Te.then=="function")return ui(ve,ue,gf(Te),we);if(Te.$$typeof===I)return ui(ve,ue,df(ve,Te),we);vf(ve,Te)}return typeof Te=="string"&&Te!==""||typeof Te=="number"||typeof Te=="bigint"?(Te=""+Te,ue!==null&&ue.tag===6?(u(ve,ue.sibling),we=S(ue,Te),we.return=ve,ve=we):(u(ve,ue),we=Pr(Te,ve.mode,we),we.return=ve,ve=we),F(ve)):u(ve,ue)}return function(ve,ue,Te,we){try{lc=0;var ht=ui(ve,ue,Te,we);return Bo=null,ht}catch(at){if(at===Uo||at===mf)throw at;var $t=Yi(29,at,null,ve.mode);return $t.lanes=we,$t.return=ve,$t}finally{}}}var ka=h0(!0),f0=h0(!1),Kn=!1;function hd(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function fd(a,c){a=a.updateQueue,c.updateQueue===a&&(c.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,callbacks:null})}function Zn(a){return{lane:a,tag:0,payload:null,callback:null,next:null}}function Qn(a,c,u){var m=a.updateQueue;if(m===null)return null;if(m=m.shared,(si&2)!==0){var S=m.pending;return S===null?c.next=c:(c.next=S.next,S.next=c),m.pending=c,c=mr(a),Ui(a,null,u),c}return _r(a,m,c,u),mr(a)}function hc(a,c,u){if(c=c.updateQueue,c!==null&&(c=c.shared,(u&4194048)!==0)){var m=c.lanes;m&=a.pendingLanes,u|=m,c.lanes=u,ri(a,u)}}function ud(a,c){var u=a.updateQueue,m=a.alternate;if(m!==null&&(m=m.updateQueue,u===m)){var S=null,E=null;if(u=u.firstBaseUpdate,u!==null){do{var F={lane:u.lane,tag:u.tag,payload:u.payload,callback:null,next:null};E===null?S=E=F:E=E.next=F,u=u.next}while(u!==null);E===null?S=E=c:E=E.next=c}else S=E=c;u={baseState:m.baseState,firstBaseUpdate:S,lastBaseUpdate:E,shared:m.shared,callbacks:m.callbacks},a.updateQueue=u;return}a=u.lastBaseUpdate,a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=c}var dd=!1;function fc(){if(dd){var a=No;if(a!==null)throw a}}function uc(a,c,u,m){dd=!1;var S=a.updateQueue;Kn=!1;var E=S.firstBaseUpdate,F=S.lastBaseUpdate,Y=S.shared.pending;if(Y!==null){S.shared.pending=null;var ce=Y,Ee=ce.next;ce.next=null,F===null?E=Ee:F.next=Ee,F=ce;var Me=a.alternate;Me!==null&&(Me=Me.updateQueue,Y=Me.lastBaseUpdate,Y!==F&&(Y===null?Me.firstBaseUpdate=Ee:Y.next=Ee,Me.lastBaseUpdate=ce))}if(E!==null){var Le=S.baseState;F=0,Me=Ee=ce=null,Y=E;do{var ye=Y.lane&-536870913,be=ye!==Y.lane;if(be?(zt&ye)===ye:(m&ye)===ye){ye!==0&&ye===Fo&&(dd=!0),Me!==null&&(Me=Me.next={lane:0,tag:Y.tag,payload:Y.payload,callback:null,next:null});e:{var rt=a,mt=Y;ye=c;var ui=u;switch(mt.tag){case 1:if(rt=mt.payload,typeof rt=="function"){Le=rt.call(ui,Le,ye);break e}Le=rt;break e;case 3:rt.flags=rt.flags&-65537|128;case 0:if(rt=mt.payload,ye=typeof rt=="function"?rt.call(ui,Le,ye):rt,ye==null)break e;Le=_({},Le,ye);break e;case 2:Kn=!0}}ye=Y.callback,ye!==null&&(a.flags|=64,be&&(a.flags|=8192),be=S.callbacks,be===null?S.callbacks=[ye]:be.push(ye))}else be={lane:ye,tag:Y.tag,payload:Y.payload,callback:Y.callback,next:null},Me===null?(Ee=Me=be,ce=Le):Me=Me.next=be,F|=ye;if(Y=Y.next,Y===null){if(Y=S.shared.pending,Y===null)break;be=Y,Y=be.next,be.next=null,S.lastBaseUpdate=be,S.shared.pending=null}}while(!0);Me===null&&(ce=Le),S.baseState=ce,S.firstBaseUpdate=Ee,S.lastBaseUpdate=Me,E===null&&(S.shared.lanes=0),ia|=F,a.lanes=F,a.memoizedState=Le}}function u0(a,c){if(typeof a!="function")throw Error(i(191,a));a.call(c)}function d0(a,c){var u=a.callbacks;if(u!==null)for(a.callbacks=null,a=0;a<u.length;a++)u0(u[a],c)}var Vo=O(null),xf=O(0);function _0(a,c){a=vn,V(xf,a),V(Vo,c),vn=a|c.baseLanes}function _d(){V(xf,vn),V(Vo,Vo.current)}function md(){vn=xf.current,b(Vo),b(xf)}var Us=O(null),ar=null;function $n(a){var c=a.alternate;V(Oi,Oi.current&1),V(Us,a),ar===null&&(c===null||Vo.current!==null||c.memoizedState!==null)&&(ar=a)}function pd(a){V(Oi,Oi.current),V(Us,a),ar===null&&(ar=a)}function m0(a){a.tag===22?(V(Oi,Oi.current),V(Us,a),ar===null&&(ar=a)):Jn()}function Jn(){V(Oi,Oi.current),V(Us,Us.current)}function Bs(a){b(Us),ar===a&&(ar=null),b(Oi)}var Oi=O(0);function Sf(a){for(var c=a;c!==null;){if(c.tag===13){var u=c.memoizedState;if(u!==null&&(u=u.dehydrated,u===null||E_(u)||y_(u)))return c}else if(c.tag===19&&(c.memoizedProps.revealOrder==="forwards"||c.memoizedProps.revealOrder==="backwards"||c.memoizedProps.revealOrder==="unstable_legacy-backwards"||c.memoizedProps.revealOrder==="together")){if((c.flags&128)!==0)return c}else if(c.child!==null){c.child.return=c,c=c.child;continue}if(c===a)break;for(;c.sibling===null;){if(c.return===null||c.return===a)return null;c=c.return}c.sibling.return=c.return,c=c.sibling}return null}var hn=0,Rt=null,hi=null,Vi=null,Tf=!1,zo=!1,Ga=!1,Ef=0,dc=0,ko=null,H1=0;function Ii(){throw Error(i(321))}function gd(a,c){if(c===null)return!1;for(var u=0;u<c.length&&u<a.length;u++)if(!hs(a[u],c[u]))return!1;return!0}function vd(a,c,u,m,S,E){return hn=E,Rt=c,c.memoizedState=null,c.updateQueue=null,c.lanes=0,Z.H=a===null||a.memoizedState===null?$0:Od,Ga=!1,E=u(m,S),Ga=!1,zo&&(E=g0(c,u,m,S)),p0(a),E}function p0(a){Z.H=pc;var c=hi!==null&&hi.next!==null;if(hn=0,Vi=hi=Rt=null,Tf=!1,dc=0,ko=null,c)throw Error(i(300));a===null||zi||(a=a.dependencies,a!==null&&uf(a)&&(zi=!0))}function g0(a,c,u,m){Rt=a;var S=0;do{if(zo&&(ko=null),dc=0,zo=!1,25<=S)throw Error(i(301));if(S+=1,Vi=hi=null,a.updateQueue!=null){var E=a.updateQueue;E.lastEffect=null,E.events=null,E.stores=null,E.memoCache!=null&&(E.memoCache.index=0)}Z.H=J0,E=c(u,m)}while(zo);return E}function Y1(){var a=Z.H,c=a.useState()[0];return c=typeof c.then=="function"?_c(c):c,a=a.useState()[0],(hi!==null?hi.memoizedState:null)!==a&&(Rt.flags|=1024),c}function xd(){var a=Ef!==0;return Ef=0,a}function Sd(a,c,u){c.updateQueue=a.updateQueue,c.flags&=-2053,a.lanes&=~u}function Td(a){if(Tf){for(a=a.memoizedState;a!==null;){var c=a.queue;c!==null&&(c.pending=null),a=a.next}Tf=!1}hn=0,Vi=hi=Rt=null,zo=!1,dc=Ef=0,ko=null}function vs(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Vi===null?Rt.memoizedState=Vi=a:Vi=Vi.next=a,Vi}function Li(){if(hi===null){var a=Rt.alternate;a=a!==null?a.memoizedState:null}else a=hi.next;var c=Vi===null?Rt.memoizedState:Vi.next;if(c!==null)Vi=c,hi=a;else{if(a===null)throw Rt.alternate===null?Error(i(467)):Error(i(310));hi=a,a={memoizedState:hi.memoizedState,baseState:hi.baseState,baseQueue:hi.baseQueue,queue:hi.queue,next:null},Vi===null?Rt.memoizedState=Vi=a:Vi=Vi.next=a}return Vi}function yf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function _c(a){var c=dc;return dc+=1,ko===null&&(ko=[]),a=o0(ko,a,c),c=Rt,(Vi===null?c.memoizedState:Vi.next)===null&&(c=c.alternate,Z.H=c===null||c.memoizedState===null?$0:Od),a}function bf(a){if(a!==null&&typeof a=="object"){if(typeof a.then=="function")return _c(a);if(a.$$typeof===I)return ts(a)}throw Error(i(438,String(a)))}function Ed(a){var c=null,u=Rt.updateQueue;if(u!==null&&(c=u.memoCache),c==null){var m=Rt.alternate;m!==null&&(m=m.updateQueue,m!==null&&(m=m.memoCache,m!=null&&(c={data:m.data.map(function(S){return S.slice()}),index:0})))}if(c==null&&(c={data:[],index:0}),u===null&&(u=yf(),Rt.updateQueue=u),u.memoCache=c,u=c.data[c.index],u===void 0)for(u=c.data[c.index]=Array(a),m=0;m<a;m++)u[m]=k;return c.index++,u}function fn(a,c){return typeof c=="function"?c(a):c}function Af(a){var c=Li();return yd(c,hi,a)}function yd(a,c,u){var m=a.queue;if(m===null)throw Error(i(311));m.lastRenderedReducer=u;var S=a.baseQueue,E=m.pending;if(E!==null){if(S!==null){var F=S.next;S.next=E.next,E.next=F}c.baseQueue=S=E,m.pending=null}if(E=a.baseState,S===null)a.memoizedState=E;else{c=S.next;var Y=F=null,ce=null,Ee=c,Me=!1;do{var Le=Ee.lane&-536870913;if(Le!==Ee.lane?(zt&Le)===Le:(hn&Le)===Le){var ye=Ee.revertLane;if(ye===0)ce!==null&&(ce=ce.next={lane:0,revertLane:0,gesture:null,action:Ee.action,hasEagerState:Ee.hasEagerState,eagerState:Ee.eagerState,next:null}),Le===Fo&&(Me=!0);else if((hn&ye)===ye){Ee=Ee.next,ye===Fo&&(Me=!0);continue}else Le={lane:0,revertLane:Ee.revertLane,gesture:null,action:Ee.action,hasEagerState:Ee.hasEagerState,eagerState:Ee.eagerState,next:null},ce===null?(Y=ce=Le,F=E):ce=ce.next=Le,Rt.lanes|=ye,ia|=ye;Le=Ee.action,Ga&&u(E,Le),E=Ee.hasEagerState?Ee.eagerState:u(E,Le)}else ye={lane:Le,revertLane:Ee.revertLane,gesture:Ee.gesture,action:Ee.action,hasEagerState:Ee.hasEagerState,eagerState:Ee.eagerState,next:null},ce===null?(Y=ce=ye,F=E):ce=ce.next=ye,Rt.lanes|=Le,ia|=Le;Ee=Ee.next}while(Ee!==null&&Ee!==c);if(ce===null?F=E:ce.next=Y,!hs(E,a.memoizedState)&&(zi=!0,Me&&(u=No,u!==null)))throw u;a.memoizedState=E,a.baseState=F,a.baseQueue=ce,m.lastRenderedState=E}return S===null&&(m.lanes=0),[a.memoizedState,m.dispatch]}function bd(a){var c=Li(),u=c.queue;if(u===null)throw Error(i(311));u.lastRenderedReducer=a;var m=u.dispatch,S=u.pending,E=c.memoizedState;if(S!==null){u.pending=null;var F=S=S.next;do E=a(E,F.action),F=F.next;while(F!==S);hs(E,c.memoizedState)||(zi=!0),c.memoizedState=E,c.baseQueue===null&&(c.baseState=E),u.lastRenderedState=E}return[E,m]}function v0(a,c,u){var m=Rt,S=Li(),E=qt;if(E){if(u===void 0)throw Error(i(407));u=u()}else u=c();var F=!hs((hi||S).memoizedState,u);if(F&&(S.memoizedState=u,zi=!0),S=S.queue,Id(T0.bind(null,m,S,a),[a]),S.getSnapshot!==c||F||Vi!==null&&Vi.memoizedState.tag&1){if(m.flags|=2048,Go(9,{destroy:void 0},S0.bind(null,m,S,u,c),null),di===null)throw Error(i(349));E||(hn&127)!==0||x0(m,c,u)}return u}function x0(a,c,u){a.flags|=16384,a={getSnapshot:c,value:u},c=Rt.updateQueue,c===null?(c=yf(),Rt.updateQueue=c,c.stores=[a]):(u=c.stores,u===null?c.stores=[a]:u.push(a))}function S0(a,c,u,m){c.value=u,c.getSnapshot=m,E0(c)&&y0(a)}function T0(a,c,u){return u(function(){E0(c)&&y0(a)})}function E0(a){var c=a.getSnapshot;a=a.value;try{var u=c();return!hs(a,u)}catch{return!0}}function y0(a){var c=et(a,2);c!==null&&Rs(c,a,2)}function Ad(a){var c=vs();if(typeof a=="function"){var u=a;if(a=u(),Ga){Ai(!0);try{u()}finally{Ai(!1)}}}return c.memoizedState=c.baseState=a,c.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fn,lastRenderedState:a},c}function b0(a,c,u,m){return a.baseState=u,yd(a,hi,typeof m=="function"?m:fn)}function q1(a,c,u,m,S){if(Cf(a))throw Error(i(485));if(a=c.action,a!==null){var E={payload:S,action:a,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(F){E.listeners.push(F)}};Z.T!==null?u(!0):E.isTransition=!1,m(E),u=c.pending,u===null?(E.next=c.pending=E,A0(c,E)):(E.next=u.next,c.pending=u.next=E)}}function A0(a,c){var u=c.action,m=c.payload,S=a.state;if(c.isTransition){var E=Z.T,F={};Z.T=F;try{var Y=u(S,m),ce=Z.S;ce!==null&&ce(F,Y),R0(a,c,Y)}catch(Ee){Rd(a,c,Ee)}finally{E!==null&&F.types!==null&&(E.types=F.types),Z.T=E}}else try{E=u(S,m),R0(a,c,E)}catch(Ee){Rd(a,c,Ee)}}function R0(a,c,u){u!==null&&typeof u=="object"&&typeof u.then=="function"?u.then(function(m){I0(a,c,m)},function(m){return Rd(a,c,m)}):I0(a,c,u)}function I0(a,c,u){c.status="fulfilled",c.value=u,C0(c),a.state=u,c=a.pending,c!==null&&(u=c.next,u===c?a.pending=null:(u=u.next,c.next=u,A0(a,u)))}function Rd(a,c,u){var m=a.pending;if(a.pending=null,m!==null){m=m.next;do c.status="rejected",c.reason=u,C0(c),c=c.next;while(c!==m)}a.action=null}function C0(a){a=a.listeners;for(var c=0;c<a.length;c++)(0,a[c])()}function M0(a,c){return c}function D0(a,c){if(qt){var u=di.formState;if(u!==null){e:{var m=Rt;if(qt){if(Si){t:{for(var S=Si,E=nr;S.nodeType!==8;){if(!E){S=null;break t}if(S=or(S.nextSibling),S===null){S=null;break t}}E=S.data,S=E==="F!"||E==="F"?S:null}if(S){Si=or(S.nextSibling),m=S.data==="F!";break e}}qn(m)}m=!1}m&&(c=u[0])}}return u=vs(),u.memoizedState=u.baseState=c,m={pending:null,lanes:0,dispatch:null,lastRenderedReducer:M0,lastRenderedState:c},u.queue=m,u=K0.bind(null,Rt,m),m.dispatch=u,m=Ad(!1),E=wd.bind(null,Rt,!1,m.queue),m=vs(),S={state:c,dispatch:null,action:a,pending:null},m.queue=S,u=q1.bind(null,Rt,S,E,u),S.dispatch=u,m.memoizedState=a,[c,u,!1]}function P0(a){var c=Li();return w0(c,hi,a)}function w0(a,c,u){if(c=yd(a,c,M0)[0],a=Af(fn)[0],typeof c=="object"&&c!==null&&typeof c.then=="function")try{var m=_c(c)}catch(F){throw F===Uo?mf:F}else m=c;c=Li();var S=c.queue,E=S.dispatch;return u!==c.memoizedState&&(Rt.flags|=2048,Go(9,{destroy:void 0},j1.bind(null,S,u),null)),[m,E,a]}function j1(a,c){a.action=c}function O0(a){var c=Li(),u=hi;if(u!==null)return w0(c,u,a);Li(),c=c.memoizedState,u=Li();var m=u.queue.dispatch;return u.memoizedState=a,[c,m,!1]}function Go(a,c,u,m){return a={tag:a,create:u,deps:m,inst:c,next:null},c=Rt.updateQueue,c===null&&(c=yf(),Rt.updateQueue=c),u=c.lastEffect,u===null?c.lastEffect=a.next=a:(m=u.next,u.next=a,a.next=m,c.lastEffect=a),a}function L0(){return Li().memoizedState}function Rf(a,c,u,m){var S=vs();Rt.flags|=a,S.memoizedState=Go(1|c,{destroy:void 0},u,m===void 0?null:m)}function If(a,c,u,m){var S=Li();m=m===void 0?null:m;var E=S.memoizedState.inst;hi!==null&&m!==null&&gd(m,hi.memoizedState.deps)?S.memoizedState=Go(c,E,u,m):(Rt.flags|=a,S.memoizedState=Go(1|c,E,u,m))}function F0(a,c){Rf(8390656,8,a,c)}function Id(a,c){If(2048,8,a,c)}function K1(a){Rt.flags|=4;var c=Rt.updateQueue;if(c===null)c=yf(),Rt.updateQueue=c,c.events=[a];else{var u=c.events;u===null?c.events=[a]:u.push(a)}}function N0(a){var c=Li().memoizedState;return K1({ref:c,nextImpl:a}),function(){if((si&2)!==0)throw Error(i(440));return c.impl.apply(void 0,arguments)}}function U0(a,c){return If(4,2,a,c)}function B0(a,c){return If(4,4,a,c)}function V0(a,c){if(typeof c=="function"){a=a();var u=c(a);return function(){typeof u=="function"?u():c(null)}}if(c!=null)return a=a(),c.current=a,function(){c.current=null}}function z0(a,c,u){u=u!=null?u.concat([a]):null,If(4,4,V0.bind(null,c,a),u)}function Cd(){}function k0(a,c){var u=Li();c=c===void 0?null:c;var m=u.memoizedState;return c!==null&&gd(c,m[1])?m[0]:(u.memoizedState=[a,c],a)}function G0(a,c){var u=Li();c=c===void 0?null:c;var m=u.memoizedState;if(c!==null&&gd(c,m[1]))return m[0];if(m=a(),Ga){Ai(!0);try{a()}finally{Ai(!1)}}return u.memoizedState=[m,c],m}function Md(a,c,u){return u===void 0||(hn&1073741824)!==0&&(zt&261930)===0?a.memoizedState=c:(a.memoizedState=u,a=Xx(),Rt.lanes|=a,ia|=a,u)}function X0(a,c,u,m){return hs(u,c)?u:Vo.current!==null?(a=Md(a,u,m),hs(a,c)||(zi=!0),a):(hn&42)===0||(hn&1073741824)!==0&&(zt&261930)===0?(zi=!0,a.memoizedState=u):(a=Xx(),Rt.lanes|=a,ia|=a,c)}function W0(a,c,u,m,S){var E=J.p;J.p=E!==0&&8>E?E:8;var F=Z.T,Y={};Z.T=Y,wd(a,!1,c,u);try{var ce=S(),Ee=Z.S;if(Ee!==null&&Ee(Y,ce),ce!==null&&typeof ce=="object"&&typeof ce.then=="function"){var Me=W1(ce,m);mc(a,c,Me,ks(a))}else mc(a,c,m,ks(a))}catch(Le){mc(a,c,{then:function(){},status:"rejected",reason:Le},ks())}finally{J.p=E,F!==null&&Y.types!==null&&(F.types=Y.types),Z.T=F}}function Z1(){}function Dd(a,c,u,m){if(a.tag!==5)throw Error(i(476));var S=H0(a).queue;W0(a,S,c,he,u===null?Z1:function(){return Y0(a),u(m)})}function H0(a){var c=a.memoizedState;if(c!==null)return c;c={memoizedState:he,baseState:he,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fn,lastRenderedState:he},next:null};var u={};return c.next={memoizedState:u,baseState:u,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fn,lastRenderedState:u},next:null},a.memoizedState=c,a=a.alternate,a!==null&&(a.memoizedState=c),c}function Y0(a){var c=H0(a);c.next===null&&(c=a.alternate.memoizedState),mc(a,c.next.queue,{},ks())}function Pd(){return ts(wc)}function q0(){return Li().memoizedState}function j0(){return Li().memoizedState}function Q1(a){for(var c=a.return;c!==null;){switch(c.tag){case 24:case 3:var u=ks();a=Zn(u);var m=Qn(c,a,u);m!==null&&(Rs(m,c,u),hc(m,c,u)),c={cache:ad()},a.payload=c;return}c=c.return}}function $1(a,c,u){var m=ks();u={lane:m,revertLane:0,gesture:null,action:u,hasEagerState:!1,eagerState:null,next:null},Cf(a)?Z0(c,u):(u=fs(a,c,u,m),u!==null&&(Rs(u,a,m),Q0(u,c,m)))}function K0(a,c,u){var m=ks();mc(a,c,u,m)}function mc(a,c,u,m){var S={lane:m,revertLane:0,gesture:null,action:u,hasEagerState:!1,eagerState:null,next:null};if(Cf(a))Z0(c,S);else{var E=a.alternate;if(a.lanes===0&&(E===null||E.lanes===0)&&(E=c.lastRenderedReducer,E!==null))try{var F=c.lastRenderedState,Y=E(F,u);if(S.hasEagerState=!0,S.eagerState=Y,hs(Y,F))return _r(a,c,S,0),di===null&&Js(),!1}catch{}finally{}if(u=fs(a,c,S,m),u!==null)return Rs(u,a,m),Q0(u,c,m),!0}return!1}function wd(a,c,u,m){if(m={lane:2,revertLane:h_(),gesture:null,action:m,hasEagerState:!1,eagerState:null,next:null},Cf(a)){if(c)throw Error(i(479))}else c=fs(a,u,m,2),c!==null&&Rs(c,a,2)}function Cf(a){var c=a.alternate;return a===Rt||c!==null&&c===Rt}function Z0(a,c){zo=Tf=!0;var u=a.pending;u===null?c.next=c:(c.next=u.next,u.next=c),a.pending=c}function Q0(a,c,u){if((u&4194048)!==0){var m=c.lanes;m&=a.pendingLanes,u|=m,c.lanes=u,ri(a,u)}}var pc={readContext:ts,use:bf,useCallback:Ii,useContext:Ii,useEffect:Ii,useImperativeHandle:Ii,useLayoutEffect:Ii,useInsertionEffect:Ii,useMemo:Ii,useReducer:Ii,useRef:Ii,useState:Ii,useDebugValue:Ii,useDeferredValue:Ii,useTransition:Ii,useSyncExternalStore:Ii,useId:Ii,useHostTransitionStatus:Ii,useFormState:Ii,useActionState:Ii,useOptimistic:Ii,useMemoCache:Ii,useCacheRefresh:Ii};pc.useEffectEvent=Ii;var $0={readContext:ts,use:bf,useCallback:function(a,c){return vs().memoizedState=[a,c===void 0?null:c],a},useContext:ts,useEffect:F0,useImperativeHandle:function(a,c,u){u=u!=null?u.concat([a]):null,Rf(4194308,4,V0.bind(null,c,a),u)},useLayoutEffect:function(a,c){return Rf(4194308,4,a,c)},useInsertionEffect:function(a,c){Rf(4,2,a,c)},useMemo:function(a,c){var u=vs();c=c===void 0?null:c;var m=a();if(Ga){Ai(!0);try{a()}finally{Ai(!1)}}return u.memoizedState=[m,c],m},useReducer:function(a,c,u){var m=vs();if(u!==void 0){var S=u(c);if(Ga){Ai(!0);try{u(c)}finally{Ai(!1)}}}else S=c;return m.memoizedState=m.baseState=S,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:S},m.queue=a,a=a.dispatch=$1.bind(null,Rt,a),[m.memoizedState,a]},useRef:function(a){var c=vs();return a={current:a},c.memoizedState=a},useState:function(a){a=Ad(a);var c=a.queue,u=K0.bind(null,Rt,c);return c.dispatch=u,[a.memoizedState,u]},useDebugValue:Cd,useDeferredValue:function(a,c){var u=vs();return Md(u,a,c)},useTransition:function(){var a=Ad(!1);return a=W0.bind(null,Rt,a.queue,!0,!1),vs().memoizedState=a,[!1,a]},useSyncExternalStore:function(a,c,u){var m=Rt,S=vs();if(qt){if(u===void 0)throw Error(i(407));u=u()}else{if(u=c(),di===null)throw Error(i(349));(zt&127)!==0||x0(m,c,u)}S.memoizedState=u;var E={value:u,getSnapshot:c};return S.queue=E,F0(T0.bind(null,m,E,a),[a]),m.flags|=2048,Go(9,{destroy:void 0},S0.bind(null,m,E,u,c),null),u},useId:function(){var a=vs(),c=di.identifierPrefix;if(qt){var u=Or,m=wr;u=(m&~(1<<32-Ri(m)-1)).toString(32)+u,c="_"+c+"R_"+u,u=Ef++,0<u&&(c+="H"+u.toString(32)),c+="_"}else u=H1++,c="_"+c+"r_"+u.toString(32)+"_";return a.memoizedState=c},useHostTransitionStatus:Pd,useFormState:D0,useActionState:D0,useOptimistic:function(a){var c=vs();c.memoizedState=c.baseState=a;var u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return c.queue=u,c=wd.bind(null,Rt,!0,u),u.dispatch=c,[a,c]},useMemoCache:Ed,useCacheRefresh:function(){return vs().memoizedState=Q1.bind(null,Rt)},useEffectEvent:function(a){var c=vs(),u={impl:a};return c.memoizedState=u,function(){if((si&2)!==0)throw Error(i(440));return u.impl.apply(void 0,arguments)}}},Od={readContext:ts,use:bf,useCallback:k0,useContext:ts,useEffect:Id,useImperativeHandle:z0,useInsertionEffect:U0,useLayoutEffect:B0,useMemo:G0,useReducer:Af,useRef:L0,useState:function(){return Af(fn)},useDebugValue:Cd,useDeferredValue:function(a,c){var u=Li();return X0(u,hi.memoizedState,a,c)},useTransition:function(){var a=Af(fn)[0],c=Li().memoizedState;return[typeof a=="boolean"?a:_c(a),c]},useSyncExternalStore:v0,useId:q0,useHostTransitionStatus:Pd,useFormState:P0,useActionState:P0,useOptimistic:function(a,c){var u=Li();return b0(u,hi,a,c)},useMemoCache:Ed,useCacheRefresh:j0};Od.useEffectEvent=N0;var J0={readContext:ts,use:bf,useCallback:k0,useContext:ts,useEffect:Id,useImperativeHandle:z0,useInsertionEffect:U0,useLayoutEffect:B0,useMemo:G0,useReducer:bd,useRef:L0,useState:function(){return bd(fn)},useDebugValue:Cd,useDeferredValue:function(a,c){var u=Li();return hi===null?Md(u,a,c):X0(u,hi.memoizedState,a,c)},useTransition:function(){var a=bd(fn)[0],c=Li().memoizedState;return[typeof a=="boolean"?a:_c(a),c]},useSyncExternalStore:v0,useId:q0,useHostTransitionStatus:Pd,useFormState:O0,useActionState:O0,useOptimistic:function(a,c){var u=Li();return hi!==null?b0(u,hi,a,c):(u.baseState=a,[a,u.queue.dispatch])},useMemoCache:Ed,useCacheRefresh:j0};J0.useEffectEvent=N0;function Ld(a,c,u,m){c=a.memoizedState,u=u(m,c),u=u==null?c:_({},c,u),a.memoizedState=u,a.lanes===0&&(a.updateQueue.baseState=u)}var Fd={enqueueSetState:function(a,c,u){a=a._reactInternals;var m=ks(),S=Zn(m);S.payload=c,u!=null&&(S.callback=u),c=Qn(a,S,m),c!==null&&(Rs(c,a,m),hc(c,a,m))},enqueueReplaceState:function(a,c,u){a=a._reactInternals;var m=ks(),S=Zn(m);S.tag=1,S.payload=c,u!=null&&(S.callback=u),c=Qn(a,S,m),c!==null&&(Rs(c,a,m),hc(c,a,m))},enqueueForceUpdate:function(a,c){a=a._reactInternals;var u=ks(),m=Zn(u);m.tag=2,c!=null&&(m.callback=c),c=Qn(a,m,u),c!==null&&(Rs(c,a,u),hc(c,a,u))}};function ex(a,c,u,m,S,E,F){return a=a.stateNode,typeof a.shouldComponentUpdate=="function"?a.shouldComponentUpdate(m,E,F):c.prototype&&c.prototype.isPureReactComponent?!Xn(u,m)||!Xn(S,E):!0}function tx(a,c,u,m){a=c.state,typeof c.componentWillReceiveProps=="function"&&c.componentWillReceiveProps(u,m),typeof c.UNSAFE_componentWillReceiveProps=="function"&&c.UNSAFE_componentWillReceiveProps(u,m),c.state!==a&&Fd.enqueueReplaceState(c,c.state,null)}function Xa(a,c){var u=c;if("ref"in c){u={};for(var m in c)m!=="ref"&&(u[m]=c[m])}if(a=a.defaultProps){u===c&&(u=_({},u));for(var S in a)u[S]===void 0&&(u[S]=a[S])}return u}function ix(a){Mt(a)}function sx(a){console.error(a)}function rx(a){Mt(a)}function Mf(a,c){try{var u=a.onUncaughtError;u(c.value,{componentStack:c.stack})}catch(m){setTimeout(function(){throw m})}}function nx(a,c,u){try{var m=a.onCaughtError;m(u.value,{componentStack:u.stack,errorBoundary:c.tag===1?c.stateNode:null})}catch(S){setTimeout(function(){throw S})}}function Nd(a,c,u){return u=Zn(u),u.tag=3,u.payload={element:null},u.callback=function(){Mf(a,c)},u}function ax(a){return a=Zn(a),a.tag=3,a}function ox(a,c,u,m){var S=u.type.getDerivedStateFromError;if(typeof S=="function"){var E=m.value;a.payload=function(){return S(E)},a.callback=function(){nx(c,u,m)}}var F=u.stateNode;F!==null&&typeof F.componentDidCatch=="function"&&(a.callback=function(){nx(c,u,m),typeof S!="function"&&(sa===null?sa=new Set([this]):sa.add(this));var Y=m.stack;this.componentDidCatch(m.value,{componentStack:Y!==null?Y:""})})}function J1(a,c,u,m,S){if(u.flags|=32768,m!==null&&typeof m=="object"&&typeof m.then=="function"){if(c=u.alternate,c!==null&&Lo(c,u,S,!0),u=Us.current,u!==null){switch(u.tag){case 31:case 13:return ar===null?kf():u.alternate===null&&Ci===0&&(Ci=3),u.flags&=-257,u.flags|=65536,u.lanes=S,m===pf?u.flags|=16384:(c=u.updateQueue,c===null?u.updateQueue=new Set([m]):c.add(m),o_(a,m,S)),!1;case 22:return u.flags|=65536,m===pf?u.flags|=16384:(c=u.updateQueue,c===null?(c={transitions:null,markerInstances:null,retryQueue:new Set([m])},u.updateQueue=c):(u=c.retryQueue,u===null?c.retryQueue=new Set([m]):u.add(m)),o_(a,m,S)),!1}throw Error(i(435,u.tag))}return o_(a,m,S),kf(),!1}if(qt)return c=Us.current,c!==null?((c.flags&65536)===0&&(c.flags|=256),c.flags|=65536,c.lanes=S,m!==td&&(a=Error(i(422),{cause:m}),nc(ir(a,u)))):(m!==td&&(c=Error(i(423),{cause:m}),nc(ir(c,u))),a=a.current.alternate,a.flags|=65536,S&=-S,a.lanes|=S,m=ir(m,u),S=Nd(a.stateNode,m,S),ud(a,S),Ci!==4&&(Ci=2)),!1;var E=Error(i(520),{cause:m});if(E=ir(E,u),bc===null?bc=[E]:bc.push(E),Ci!==4&&(Ci=2),c===null)return!0;m=ir(m,u),u=c;do{switch(u.tag){case 3:return u.flags|=65536,a=S&-S,u.lanes|=a,a=Nd(u.stateNode,m,a),ud(u,a),!1;case 1:if(c=u.type,E=u.stateNode,(u.flags&128)===0&&(typeof c.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(sa===null||!sa.has(E))))return u.flags|=65536,S&=-S,u.lanes|=S,S=ax(S),ox(S,a,u,m),ud(u,S),!1}u=u.return}while(u!==null);return!1}var Ud=Error(i(461)),zi=!1;function is(a,c,u,m){c.child=a===null?f0(c,null,u,m):ka(c,a.child,u,m)}function lx(a,c,u,m,S){u=u.render;var E=c.ref;if("ref"in m){var F={};for(var Y in m)Y!=="ref"&&(F[Y]=m[Y])}else F=m;return Ua(c),m=vd(a,c,u,F,E,S),Y=xd(),a!==null&&!zi?(Sd(a,c,S),un(a,c,S)):(qt&&Y&&Ju(c),c.flags|=1,is(a,c,m,S),c.child)}function cx(a,c,u,m,S){if(a===null){var E=u.type;return typeof E=="function"&&!Mo(E)&&E.defaultProps===void 0&&u.compare===null?(c.tag=15,c.type=E,hx(a,c,E,m,S)):(a=Do(u.type,null,m,c,c.mode,S),a.ref=c.ref,a.return=c,c.child=a)}if(E=a.child,!Hd(a,S)){var F=E.memoizedProps;if(u=u.compare,u=u!==null?u:Xn,u(F,m)&&a.ref===c.ref)return un(a,c,S)}return c.flags|=1,a=er(E,m),a.ref=c.ref,a.return=c,c.child=a}function hx(a,c,u,m,S){if(a!==null){var E=a.memoizedProps;if(Xn(E,m)&&a.ref===c.ref)if(zi=!1,c.pendingProps=m=E,Hd(a,S))(a.flags&131072)!==0&&(zi=!0);else return c.lanes=a.lanes,un(a,c,S)}return Bd(a,c,u,m,S)}function fx(a,c,u,m){var S=m.children,E=a!==null?a.memoizedState:null;if(a===null&&c.stateNode===null&&(c.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),m.mode==="hidden"){if((c.flags&128)!==0){if(E=E!==null?E.baseLanes|u:u,a!==null){for(m=c.child=a.child,S=0;m!==null;)S=S|m.lanes|m.childLanes,m=m.sibling;m=S&~E}else m=0,c.child=null;return ux(a,c,E,u,m)}if((u&536870912)!==0)c.memoizedState={baseLanes:0,cachePool:null},a!==null&&_f(c,E!==null?E.cachePool:null),E!==null?_0(c,E):_d(),m0(c);else return m=c.lanes=536870912,ux(a,c,E!==null?E.baseLanes|u:u,u,m)}else E!==null?(_f(c,E.cachePool),_0(c,E),Jn(),c.memoizedState=null):(a!==null&&_f(c,null),_d(),Jn());return is(a,c,S,u),c.child}function gc(a,c){return a!==null&&a.tag===22||c.stateNode!==null||(c.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),c.sibling}function ux(a,c,u,m,S){var E=ld();return E=E===null?null:{parent:Bi._currentValue,pool:E},c.memoizedState={baseLanes:u,cachePool:E},a!==null&&_f(c,null),_d(),m0(c),a!==null&&Lo(a,c,m,!0),c.childLanes=S,null}function Df(a,c){return c=wf({mode:c.mode,children:c.children},a.mode),c.ref=a.ref,a.child=c,c.return=a,c}function dx(a,c,u){return ka(c,a.child,null,u),a=Df(c,c.pendingProps),a.flags|=2,Bs(c),c.memoizedState=null,a}function eD(a,c,u){var m=c.pendingProps,S=(c.flags&128)!==0;if(c.flags&=-129,a===null){if(qt){if(m.mode==="hidden")return a=Df(c,m),c.lanes=536870912,gc(null,a);if(pd(c),(a=Si)?(a=AS(a,nr),a=a!==null&&a.data==="&"?a:null,a!==null&&(c.memoizedState={dehydrated:a,treeContext:Hn!==null?{id:wr,overflow:Or}:null,retryLane:536870912,hydrationErrors:null},u=sc(a),u.return=c,c.child=u,es=c,Si=null)):a=null,a===null)throw qn(c);return c.lanes=536870912,null}return Df(c,m)}var E=a.memoizedState;if(E!==null){var F=E.dehydrated;if(pd(c),S)if(c.flags&256)c.flags&=-257,c=dx(a,c,u);else if(c.memoizedState!==null)c.child=a.child,c.flags|=128,c=null;else throw Error(i(558));else if(zi||Lo(a,c,u,!1),S=(u&a.childLanes)!==0,zi||S){if(m=di,m!==null&&(F=os(m,u),F!==0&&F!==E.retryLane))throw E.retryLane=F,et(a,F),Rs(m,a,F),Ud;kf(),c=dx(a,c,u)}else a=E.treeContext,Si=or(F.nextSibling),es=c,qt=!0,Yn=null,nr=!1,a!==null&&Jv(c,a),c=Df(c,m),c.flags|=4096;return c}return a=er(a.child,{mode:m.mode,children:m.children}),a.ref=c.ref,c.child=a,a.return=c,a}function Pf(a,c){var u=c.ref;if(u===null)a!==null&&a.ref!==null&&(c.flags|=4194816);else{if(typeof u!="function"&&typeof u!="object")throw Error(i(284));(a===null||a.ref!==u)&&(c.flags|=4194816)}}function Bd(a,c,u,m,S){return Ua(c),u=vd(a,c,u,m,void 0,S),m=xd(),a!==null&&!zi?(Sd(a,c,S),un(a,c,S)):(qt&&m&&Ju(c),c.flags|=1,is(a,c,u,S),c.child)}function _x(a,c,u,m,S,E){return Ua(c),c.updateQueue=null,u=g0(c,m,u,S),p0(a),m=xd(),a!==null&&!zi?(Sd(a,c,E),un(a,c,E)):(qt&&m&&Ju(c),c.flags|=1,is(a,c,u,E),c.child)}function mx(a,c,u,m,S){if(Ua(c),c.stateNode===null){var E=Ji,F=u.contextType;typeof F=="object"&&F!==null&&(E=ts(F)),E=new u(m,E),c.memoizedState=E.state!==null&&E.state!==void 0?E.state:null,E.updater=Fd,c.stateNode=E,E._reactInternals=c,E=c.stateNode,E.props=m,E.state=c.memoizedState,E.refs={},hd(c),F=u.contextType,E.context=typeof F=="object"&&F!==null?ts(F):Ji,E.state=c.memoizedState,F=u.getDerivedStateFromProps,typeof F=="function"&&(Ld(c,u,F,m),E.state=c.memoizedState),typeof u.getDerivedStateFromProps=="function"||typeof E.getSnapshotBeforeUpdate=="function"||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(F=E.state,typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount(),F!==E.state&&Fd.enqueueReplaceState(E,E.state,null),uc(c,m,E,S),fc(),E.state=c.memoizedState),typeof E.componentDidMount=="function"&&(c.flags|=4194308),m=!0}else if(a===null){E=c.stateNode;var Y=c.memoizedProps,ce=Xa(u,Y);E.props=ce;var Ee=E.context,Me=u.contextType;F=Ji,typeof Me=="object"&&Me!==null&&(F=ts(Me));var Le=u.getDerivedStateFromProps;Me=typeof Le=="function"||typeof E.getSnapshotBeforeUpdate=="function",Y=c.pendingProps!==Y,Me||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(Y||Ee!==F)&&tx(c,E,m,F),Kn=!1;var ye=c.memoizedState;E.state=ye,uc(c,m,E,S),fc(),Ee=c.memoizedState,Y||ye!==Ee||Kn?(typeof Le=="function"&&(Ld(c,u,Le,m),Ee=c.memoizedState),(ce=Kn||ex(c,u,ce,m,ye,Ee,F))?(Me||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(c.flags|=4194308)):(typeof E.componentDidMount=="function"&&(c.flags|=4194308),c.memoizedProps=m,c.memoizedState=Ee),E.props=m,E.state=Ee,E.context=F,m=ce):(typeof E.componentDidMount=="function"&&(c.flags|=4194308),m=!1)}else{E=c.stateNode,fd(a,c),F=c.memoizedProps,Me=Xa(u,F),E.props=Me,Le=c.pendingProps,ye=E.context,Ee=u.contextType,ce=Ji,typeof Ee=="object"&&Ee!==null&&(ce=ts(Ee)),Y=u.getDerivedStateFromProps,(Ee=typeof Y=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(F!==Le||ye!==ce)&&tx(c,E,m,ce),Kn=!1,ye=c.memoizedState,E.state=ye,uc(c,m,E,S),fc();var be=c.memoizedState;F!==Le||ye!==be||Kn||a!==null&&a.dependencies!==null&&uf(a.dependencies)?(typeof Y=="function"&&(Ld(c,u,Y,m),be=c.memoizedState),(Me=Kn||ex(c,u,Me,m,ye,be,ce)||a!==null&&a.dependencies!==null&&uf(a.dependencies))?(Ee||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(m,be,ce),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(m,be,ce)),typeof E.componentDidUpdate=="function"&&(c.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(c.flags|=1024)):(typeof E.componentDidUpdate!="function"||F===a.memoizedProps&&ye===a.memoizedState||(c.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||F===a.memoizedProps&&ye===a.memoizedState||(c.flags|=1024),c.memoizedProps=m,c.memoizedState=be),E.props=m,E.state=be,E.context=ce,m=Me):(typeof E.componentDidUpdate!="function"||F===a.memoizedProps&&ye===a.memoizedState||(c.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||F===a.memoizedProps&&ye===a.memoizedState||(c.flags|=1024),m=!1)}return E=m,Pf(a,c),m=(c.flags&128)!==0,E||m?(E=c.stateNode,u=m&&typeof u.getDerivedStateFromError!="function"?null:E.render(),c.flags|=1,a!==null&&m?(c.child=ka(c,a.child,null,S),c.child=ka(c,null,u,S)):is(a,c,u,S),c.memoizedState=E.state,a=c.child):a=un(a,c,S),a}function px(a,c,u,m){return Fa(),c.flags|=256,is(a,c,u,m),c.child}var Vd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function zd(a){return{baseLanes:a,cachePool:n0()}}function kd(a,c,u){return a=a!==null?a.childLanes&~u:0,c&&(a|=zs),a}function gx(a,c,u){var m=c.pendingProps,S=!1,E=(c.flags&128)!==0,F;if((F=E)||(F=a!==null&&a.memoizedState===null?!1:(Oi.current&2)!==0),F&&(S=!0,c.flags&=-129),F=(c.flags&32)!==0,c.flags&=-33,a===null){if(qt){if(S?$n(c):Jn(),(a=Si)?(a=AS(a,nr),a=a!==null&&a.data!=="&"?a:null,a!==null&&(c.memoizedState={dehydrated:a,treeContext:Hn!==null?{id:wr,overflow:Or}:null,retryLane:536870912,hydrationErrors:null},u=sc(a),u.return=c,c.child=u,es=c,Si=null)):a=null,a===null)throw qn(c);return y_(a)?c.lanes=32:c.lanes=536870912,null}var Y=m.children;return m=m.fallback,S?(Jn(),S=c.mode,Y=wf({mode:"hidden",children:Y},S),m=tr(m,S,u,null),Y.return=c,m.return=c,Y.sibling=m,c.child=Y,m=c.child,m.memoizedState=zd(u),m.childLanes=kd(a,F,u),c.memoizedState=Vd,gc(null,m)):($n(c),Gd(c,Y))}var ce=a.memoizedState;if(ce!==null&&(Y=ce.dehydrated,Y!==null)){if(E)c.flags&256?($n(c),c.flags&=-257,c=Xd(a,c,u)):c.memoizedState!==null?(Jn(),c.child=a.child,c.flags|=128,c=null):(Jn(),Y=m.fallback,S=c.mode,m=wf({mode:"visible",children:m.children},S),Y=tr(Y,S,u,null),Y.flags|=2,m.return=c,Y.return=c,m.sibling=Y,c.child=m,ka(c,a.child,null,u),m=c.child,m.memoizedState=zd(u),m.childLanes=kd(a,F,u),c.memoizedState=Vd,c=gc(null,m));else if($n(c),y_(Y)){if(F=Y.nextSibling&&Y.nextSibling.dataset,F)var Ee=F.dgst;F=Ee,m=Error(i(419)),m.stack="",m.digest=F,nc({value:m,source:null,stack:null}),c=Xd(a,c,u)}else if(zi||Lo(a,c,u,!1),F=(u&a.childLanes)!==0,zi||F){if(F=di,F!==null&&(m=os(F,u),m!==0&&m!==ce.retryLane))throw ce.retryLane=m,et(a,m),Rs(F,a,m),Ud;E_(Y)||kf(),c=Xd(a,c,u)}else E_(Y)?(c.flags|=192,c.child=a.child,c=null):(a=ce.treeContext,Si=or(Y.nextSibling),es=c,qt=!0,Yn=null,nr=!1,a!==null&&Jv(c,a),c=Gd(c,m.children),c.flags|=4096);return c}return S?(Jn(),Y=m.fallback,S=c.mode,ce=a.child,Ee=ce.sibling,m=er(ce,{mode:"hidden",children:m.children}),m.subtreeFlags=ce.subtreeFlags&65011712,Ee!==null?Y=er(Ee,Y):(Y=tr(Y,S,u,null),Y.flags|=2),Y.return=c,m.return=c,m.sibling=Y,c.child=m,gc(null,m),m=c.child,Y=a.child.memoizedState,Y===null?Y=zd(u):(S=Y.cachePool,S!==null?(ce=Bi._currentValue,S=S.parent!==ce?{parent:ce,pool:ce}:S):S=n0(),Y={baseLanes:Y.baseLanes|u,cachePool:S}),m.memoizedState=Y,m.childLanes=kd(a,F,u),c.memoizedState=Vd,gc(a.child,m)):($n(c),u=a.child,a=u.sibling,u=er(u,{mode:"visible",children:m.children}),u.return=c,u.sibling=null,a!==null&&(F=c.deletions,F===null?(c.deletions=[a],c.flags|=16):F.push(a)),c.child=u,c.memoizedState=null,u)}function Gd(a,c){return c=wf({mode:"visible",children:c},a.mode),c.return=a,a.child=c}function wf(a,c){return a=Yi(22,a,null,c),a.lanes=0,a}function Xd(a,c,u){return ka(c,a.child,null,u),a=Gd(c,c.pendingProps.children),a.flags|=2,c.memoizedState=null,a}function vx(a,c,u){a.lanes|=c;var m=a.alternate;m!==null&&(m.lanes|=c),rd(a.return,c,u)}function Wd(a,c,u,m,S,E){var F=a.memoizedState;F===null?a.memoizedState={isBackwards:c,rendering:null,renderingStartTime:0,last:m,tail:u,tailMode:S,treeForkCount:E}:(F.isBackwards=c,F.rendering=null,F.renderingStartTime=0,F.last=m,F.tail=u,F.tailMode=S,F.treeForkCount=E)}function xx(a,c,u){var m=c.pendingProps,S=m.revealOrder,E=m.tail;m=m.children;var F=Oi.current,Y=(F&2)!==0;if(Y?(F=F&1|2,c.flags|=128):F&=1,V(Oi,F),is(a,c,m,u),m=qt?rc:0,!Y&&a!==null&&(a.flags&128)!==0)e:for(a=c.child;a!==null;){if(a.tag===13)a.memoizedState!==null&&vx(a,u,c);else if(a.tag===19)vx(a,u,c);else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===c)break e;for(;a.sibling===null;){if(a.return===null||a.return===c)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}switch(S){case"forwards":for(u=c.child,S=null;u!==null;)a=u.alternate,a!==null&&Sf(a)===null&&(S=u),u=u.sibling;u=S,u===null?(S=c.child,c.child=null):(S=u.sibling,u.sibling=null),Wd(c,!1,S,u,E,m);break;case"backwards":case"unstable_legacy-backwards":for(u=null,S=c.child,c.child=null;S!==null;){if(a=S.alternate,a!==null&&Sf(a)===null){c.child=S;break}a=S.sibling,S.sibling=u,u=S,S=a}Wd(c,!0,u,null,E,m);break;case"together":Wd(c,!1,null,null,void 0,m);break;default:c.memoizedState=null}return c.child}function un(a,c,u){if(a!==null&&(c.dependencies=a.dependencies),ia|=c.lanes,(u&c.childLanes)===0)if(a!==null){if(Lo(a,c,u,!1),(u&c.childLanes)===0)return null}else return null;if(a!==null&&c.child!==a.child)throw Error(i(153));if(c.child!==null){for(a=c.child,u=er(a,a.pendingProps),c.child=u,u.return=c;a.sibling!==null;)a=a.sibling,u=u.sibling=er(a,a.pendingProps),u.return=c;u.sibling=null}return c.child}function Hd(a,c){return(a.lanes&c)!==0?!0:(a=a.dependencies,!!(a!==null&&uf(a)))}function tD(a,c,u){switch(c.tag){case 3:Pe(c,c.stateNode.containerInfo),jn(c,Bi,a.memoizedState.cache),Fa();break;case 27:case 5:$(c);break;case 4:Pe(c,c.stateNode.containerInfo);break;case 10:jn(c,c.type,c.memoizedProps.value);break;case 31:if(c.memoizedState!==null)return c.flags|=128,pd(c),null;break;case 13:var m=c.memoizedState;if(m!==null)return m.dehydrated!==null?($n(c),c.flags|=128,null):(u&c.child.childLanes)!==0?gx(a,c,u):($n(c),a=un(a,c,u),a!==null?a.sibling:null);$n(c);break;case 19:var S=(a.flags&128)!==0;if(m=(u&c.childLanes)!==0,m||(Lo(a,c,u,!1),m=(u&c.childLanes)!==0),S){if(m)return xx(a,c,u);c.flags|=128}if(S=c.memoizedState,S!==null&&(S.rendering=null,S.tail=null,S.lastEffect=null),V(Oi,Oi.current),m)break;return null;case 22:return c.lanes=0,fx(a,c,u,c.pendingProps);case 24:jn(c,Bi,a.memoizedState.cache)}return un(a,c,u)}function Sx(a,c,u){if(a!==null)if(a.memoizedProps!==c.pendingProps)zi=!0;else{if(!Hd(a,u)&&(c.flags&128)===0)return zi=!1,tD(a,c,u);zi=(a.flags&131072)!==0}else zi=!1,qt&&(c.flags&1048576)!==0&&$v(c,rc,c.index);switch(c.lanes=0,c.tag){case 16:e:{var m=c.pendingProps;if(a=Va(c.elementType),c.type=a,typeof a=="function")Mo(a)?(m=Xa(a,m),c.tag=1,c=mx(null,c,a,m,u)):(c.tag=0,c=Bd(null,c,a,m,u));else{if(a!=null){var S=a.$$typeof;if(S===w){c.tag=11,c=lx(null,c,a,m,u);break e}else if(S===D){c.tag=14,c=cx(null,c,a,m,u);break e}}throw c=B(a)||a,Error(i(306,c,""))}}return c;case 0:return Bd(a,c,c.type,c.pendingProps,u);case 1:return m=c.type,S=Xa(m,c.pendingProps),mx(a,c,m,S,u);case 3:e:{if(Pe(c,c.stateNode.containerInfo),a===null)throw Error(i(387));m=c.pendingProps;var E=c.memoizedState;S=E.element,fd(a,c),uc(c,m,null,u);var F=c.memoizedState;if(m=F.cache,jn(c,Bi,m),m!==E.cache&&nd(c,[Bi],u,!0),fc(),m=F.element,E.isDehydrated)if(E={element:m,isDehydrated:!1,cache:F.cache},c.updateQueue.baseState=E,c.memoizedState=E,c.flags&256){c=px(a,c,m,u);break e}else if(m!==S){S=ir(Error(i(424)),c),nc(S),c=px(a,c,m,u);break e}else{switch(a=c.stateNode.containerInfo,a.nodeType){case 9:a=a.body;break;default:a=a.nodeName==="HTML"?a.ownerDocument.body:a}for(Si=or(a.firstChild),es=c,qt=!0,Yn=null,nr=!0,u=f0(c,null,m,u),c.child=u;u;)u.flags=u.flags&-3|4096,u=u.sibling}else{if(Fa(),m===S){c=un(a,c,u);break e}is(a,c,m,u)}c=c.child}return c;case 26:return Pf(a,c),a===null?(u=PS(c.type,null,c.pendingProps,null))?c.memoizedState=u:qt||(u=c.type,a=c.pendingProps,m=jf(ee.current).createElement(u),m[Ni]=c,m[Qi]=a,ss(m,u,a),wi(m),c.stateNode=m):c.memoizedState=PS(c.type,a.memoizedProps,c.pendingProps,a.memoizedState),null;case 27:return $(c),a===null&&qt&&(m=c.stateNode=CS(c.type,c.pendingProps,ee.current),es=c,nr=!0,S=Si,oa(c.type)?(b_=S,Si=or(m.firstChild)):Si=S),is(a,c,c.pendingProps.children,u),Pf(a,c),a===null&&(c.flags|=4194304),c.child;case 5:return a===null&&qt&&((S=m=Si)&&(m=PD(m,c.type,c.pendingProps,nr),m!==null?(c.stateNode=m,es=c,Si=or(m.firstChild),nr=!1,S=!0):S=!1),S||qn(c)),$(c),S=c.type,E=c.pendingProps,F=a!==null?a.memoizedProps:null,m=E.children,x_(S,E)?m=null:F!==null&&x_(S,F)&&(c.flags|=32),c.memoizedState!==null&&(S=vd(a,c,Y1,null,null,u),wc._currentValue=S),Pf(a,c),is(a,c,m,u),c.child;case 6:return a===null&&qt&&((a=u=Si)&&(u=wD(u,c.pendingProps,nr),u!==null?(c.stateNode=u,es=c,Si=null,a=!0):a=!1),a||qn(c)),null;case 13:return gx(a,c,u);case 4:return Pe(c,c.stateNode.containerInfo),m=c.pendingProps,a===null?c.child=ka(c,null,m,u):is(a,c,m,u),c.child;case 11:return lx(a,c,c.type,c.pendingProps,u);case 7:return is(a,c,c.pendingProps,u),c.child;case 8:return is(a,c,c.pendingProps.children,u),c.child;case 12:return is(a,c,c.pendingProps.children,u),c.child;case 10:return m=c.pendingProps,jn(c,c.type,m.value),is(a,c,m.children,u),c.child;case 9:return S=c.type._context,m=c.pendingProps.children,Ua(c),S=ts(S),m=m(S),c.flags|=1,is(a,c,m,u),c.child;case 14:return cx(a,c,c.type,c.pendingProps,u);case 15:return hx(a,c,c.type,c.pendingProps,u);case 19:return xx(a,c,u);case 31:return eD(a,c,u);case 22:return fx(a,c,u,c.pendingProps);case 24:return Ua(c),m=ts(Bi),a===null?(S=ld(),S===null&&(S=di,E=ad(),S.pooledCache=E,E.refCount++,E!==null&&(S.pooledCacheLanes|=u),S=E),c.memoizedState={parent:m,cache:S},hd(c),jn(c,Bi,S)):((a.lanes&u)!==0&&(fd(a,c),uc(c,null,null,u),fc()),S=a.memoizedState,E=c.memoizedState,S.parent!==m?(S={parent:m,cache:m},c.memoizedState=S,c.lanes===0&&(c.memoizedState=c.updateQueue.baseState=S),jn(c,Bi,m)):(m=E.cache,jn(c,Bi,m),m!==S.cache&&nd(c,[Bi],u,!0))),is(a,c,c.pendingProps.children,u),c.child;case 29:throw c.pendingProps}throw Error(i(156,c.tag))}function dn(a){a.flags|=4}function Yd(a,c,u,m,S){if((c=(a.mode&32)!==0)&&(c=!1),c){if(a.flags|=16777216,(S&335544128)===S)if(a.stateNode.complete)a.flags|=8192;else if(qx())a.flags|=8192;else throw za=pf,cd}else a.flags&=-16777217}function Tx(a,c){if(c.type!=="stylesheet"||(c.state.loading&4)!==0)a.flags&=-16777217;else if(a.flags|=16777216,!NS(c))if(qx())a.flags|=8192;else throw za=pf,cd}function Of(a,c){c!==null&&(a.flags|=4),a.flags&16384&&(c=a.tag!==22?Ce():536870912,a.lanes|=c,Yo|=c)}function vc(a,c){if(!qt)switch(a.tailMode){case"hidden":c=a.tail;for(var u=null;c!==null;)c.alternate!==null&&(u=c),c=c.sibling;u===null?a.tail=null:u.sibling=null;break;case"collapsed":u=a.tail;for(var m=null;u!==null;)u.alternate!==null&&(m=u),u=u.sibling;m===null?c||a.tail===null?a.tail=null:a.tail.sibling=null:m.sibling=null}}function Ti(a){var c=a.alternate!==null&&a.alternate.child===a.child,u=0,m=0;if(c)for(var S=a.child;S!==null;)u|=S.lanes|S.childLanes,m|=S.subtreeFlags&65011712,m|=S.flags&65011712,S.return=a,S=S.sibling;else for(S=a.child;S!==null;)u|=S.lanes|S.childLanes,m|=S.subtreeFlags,m|=S.flags,S.return=a,S=S.sibling;return a.subtreeFlags|=m,a.childLanes=u,c}function iD(a,c,u){var m=c.pendingProps;switch(ed(c),c.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ti(c),null;case 1:return Ti(c),null;case 3:return u=c.stateNode,m=null,a!==null&&(m=a.memoizedState.cache),c.memoizedState.cache!==m&&(c.flags|=2048),cn(Bi),Fe(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(a===null||a.child===null)&&(Oo(c)?dn(c):a===null||a.memoizedState.isDehydrated&&(c.flags&256)===0||(c.flags|=1024,id())),Ti(c),null;case 26:var S=c.type,E=c.memoizedState;return a===null?(dn(c),E!==null?(Ti(c),Tx(c,E)):(Ti(c),Yd(c,S,null,m,u))):E?E!==a.memoizedState?(dn(c),Ti(c),Tx(c,E)):(Ti(c),c.flags&=-16777217):(a=a.memoizedProps,a!==m&&dn(c),Ti(c),Yd(c,S,a,m,u)),null;case 27:if(X(c),u=ee.current,S=c.type,a!==null&&c.stateNode!=null)a.memoizedProps!==m&&dn(c);else{if(!m){if(c.stateNode===null)throw Error(i(166));return Ti(c),null}a=H.current,Oo(c)?e0(c):(a=CS(S,m,u),c.stateNode=a,dn(c))}return Ti(c),null;case 5:if(X(c),S=c.type,a!==null&&c.stateNode!=null)a.memoizedProps!==m&&dn(c);else{if(!m){if(c.stateNode===null)throw Error(i(166));return Ti(c),null}if(E=H.current,Oo(c))e0(c);else{var F=jf(ee.current);switch(E){case 1:E=F.createElementNS("http://www.w3.org/2000/svg",S);break;case 2:E=F.createElementNS("http://www.w3.org/1998/Math/MathML",S);break;default:switch(S){case"svg":E=F.createElementNS("http://www.w3.org/2000/svg",S);break;case"math":E=F.createElementNS("http://www.w3.org/1998/Math/MathML",S);break;case"script":E=F.createElement("div"),E.innerHTML="<script><\/script>",E=E.removeChild(E.firstChild);break;case"select":E=typeof m.is=="string"?F.createElement("select",{is:m.is}):F.createElement("select"),m.multiple?E.multiple=!0:m.size&&(E.size=m.size);break;default:E=typeof m.is=="string"?F.createElement(S,{is:m.is}):F.createElement(S)}}E[Ni]=c,E[Qi]=m;e:for(F=c.child;F!==null;){if(F.tag===5||F.tag===6)E.appendChild(F.stateNode);else if(F.tag!==4&&F.tag!==27&&F.child!==null){F.child.return=F,F=F.child;continue}if(F===c)break e;for(;F.sibling===null;){if(F.return===null||F.return===c)break e;F=F.return}F.sibling.return=F.return,F=F.sibling}c.stateNode=E;e:switch(ss(E,S,m),S){case"button":case"input":case"select":case"textarea":m=!!m.autoFocus;break e;case"img":m=!0;break e;default:m=!1}m&&dn(c)}}return Ti(c),Yd(c,c.type,a===null?null:a.memoizedProps,c.pendingProps,u),null;case 6:if(a&&c.stateNode!=null)a.memoizedProps!==m&&dn(c);else{if(typeof m!="string"&&c.stateNode===null)throw Error(i(166));if(a=ee.current,Oo(c)){if(a=c.stateNode,u=c.memoizedProps,m=null,S=es,S!==null)switch(S.tag){case 27:case 5:m=S.memoizedProps}a[Ni]=c,a=!!(a.nodeValue===u||m!==null&&m.suppressHydrationWarning===!0||gS(a.nodeValue,u)),a||qn(c,!0)}else a=jf(a).createTextNode(m),a[Ni]=c,c.stateNode=a}return Ti(c),null;case 31:if(u=c.memoizedState,a===null||a.memoizedState!==null){if(m=Oo(c),u!==null){if(a===null){if(!m)throw Error(i(318));if(a=c.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(i(557));a[Ni]=c}else Fa(),(c.flags&128)===0&&(c.memoizedState=null),c.flags|=4;Ti(c),a=!1}else u=id(),a!==null&&a.memoizedState!==null&&(a.memoizedState.hydrationErrors=u),a=!0;if(!a)return c.flags&256?(Bs(c),c):(Bs(c),null);if((c.flags&128)!==0)throw Error(i(558))}return Ti(c),null;case 13:if(m=c.memoizedState,a===null||a.memoizedState!==null&&a.memoizedState.dehydrated!==null){if(S=Oo(c),m!==null&&m.dehydrated!==null){if(a===null){if(!S)throw Error(i(318));if(S=c.memoizedState,S=S!==null?S.dehydrated:null,!S)throw Error(i(317));S[Ni]=c}else Fa(),(c.flags&128)===0&&(c.memoizedState=null),c.flags|=4;Ti(c),S=!1}else S=id(),a!==null&&a.memoizedState!==null&&(a.memoizedState.hydrationErrors=S),S=!0;if(!S)return c.flags&256?(Bs(c),c):(Bs(c),null)}return Bs(c),(c.flags&128)!==0?(c.lanes=u,c):(u=m!==null,a=a!==null&&a.memoizedState!==null,u&&(m=c.child,S=null,m.alternate!==null&&m.alternate.memoizedState!==null&&m.alternate.memoizedState.cachePool!==null&&(S=m.alternate.memoizedState.cachePool.pool),E=null,m.memoizedState!==null&&m.memoizedState.cachePool!==null&&(E=m.memoizedState.cachePool.pool),E!==S&&(m.flags|=2048)),u!==a&&u&&(c.child.flags|=8192),Of(c,c.updateQueue),Ti(c),null);case 4:return Fe(),a===null&&__(c.stateNode.containerInfo),Ti(c),null;case 10:return cn(c.type),Ti(c),null;case 19:if(b(Oi),m=c.memoizedState,m===null)return Ti(c),null;if(S=(c.flags&128)!==0,E=m.rendering,E===null)if(S)vc(m,!1);else{if(Ci!==0||a!==null&&(a.flags&128)!==0)for(a=c.child;a!==null;){if(E=Sf(a),E!==null){for(c.flags|=128,vc(m,!1),a=E.updateQueue,c.updateQueue=a,Of(c,a),c.subtreeFlags=0,a=u,u=c.child;u!==null;)lf(u,a),u=u.sibling;return V(Oi,Oi.current&1|2),qt&&on(c,m.treeForkCount),c.child}a=a.sibling}m.tail!==null&&Ne()>Bf&&(c.flags|=128,S=!0,vc(m,!1),c.lanes=4194304)}else{if(!S)if(a=Sf(E),a!==null){if(c.flags|=128,S=!0,a=a.updateQueue,c.updateQueue=a,Of(c,a),vc(m,!0),m.tail===null&&m.tailMode==="hidden"&&!E.alternate&&!qt)return Ti(c),null}else 2*Ne()-m.renderingStartTime>Bf&&u!==536870912&&(c.flags|=128,S=!0,vc(m,!1),c.lanes=4194304);m.isBackwards?(E.sibling=c.child,c.child=E):(a=m.last,a!==null?a.sibling=E:c.child=E,m.last=E)}return m.tail!==null?(a=m.tail,m.rendering=a,m.tail=a.sibling,m.renderingStartTime=Ne(),a.sibling=null,u=Oi.current,V(Oi,S?u&1|2:u&1),qt&&on(c,m.treeForkCount),a):(Ti(c),null);case 22:case 23:return Bs(c),md(),m=c.memoizedState!==null,a!==null?a.memoizedState!==null!==m&&(c.flags|=8192):m&&(c.flags|=8192),m?(u&536870912)!==0&&(c.flags&128)===0&&(Ti(c),c.subtreeFlags&6&&(c.flags|=8192)):Ti(c),u=c.updateQueue,u!==null&&Of(c,u.retryQueue),u=null,a!==null&&a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(u=a.memoizedState.cachePool.pool),m=null,c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(m=c.memoizedState.cachePool.pool),m!==u&&(c.flags|=2048),a!==null&&b(Ba),null;case 24:return u=null,a!==null&&(u=a.memoizedState.cache),c.memoizedState.cache!==u&&(c.flags|=2048),cn(Bi),Ti(c),null;case 25:return null;case 30:return null}throw Error(i(156,c.tag))}function sD(a,c){switch(ed(c),c.tag){case 1:return a=c.flags,a&65536?(c.flags=a&-65537|128,c):null;case 3:return cn(Bi),Fe(),a=c.flags,(a&65536)!==0&&(a&128)===0?(c.flags=a&-65537|128,c):null;case 26:case 27:case 5:return X(c),null;case 31:if(c.memoizedState!==null){if(Bs(c),c.alternate===null)throw Error(i(340));Fa()}return a=c.flags,a&65536?(c.flags=a&-65537|128,c):null;case 13:if(Bs(c),a=c.memoizedState,a!==null&&a.dehydrated!==null){if(c.alternate===null)throw Error(i(340));Fa()}return a=c.flags,a&65536?(c.flags=a&-65537|128,c):null;case 19:return b(Oi),null;case 4:return Fe(),null;case 10:return cn(c.type),null;case 22:case 23:return Bs(c),md(),a!==null&&b(Ba),a=c.flags,a&65536?(c.flags=a&-65537|128,c):null;case 24:return cn(Bi),null;case 25:return null;default:return null}}function Ex(a,c){switch(ed(c),c.tag){case 3:cn(Bi),Fe();break;case 26:case 27:case 5:X(c);break;case 4:Fe();break;case 31:c.memoizedState!==null&&Bs(c);break;case 13:Bs(c);break;case 19:b(Oi);break;case 10:cn(c.type);break;case 22:case 23:Bs(c),md(),a!==null&&b(Ba);break;case 24:cn(Bi)}}function xc(a,c){try{var u=c.updateQueue,m=u!==null?u.lastEffect:null;if(m!==null){var S=m.next;u=S;do{if((u.tag&a)===a){m=void 0;var E=u.create,F=u.inst;m=E(),F.destroy=m}u=u.next}while(u!==S)}}catch(Y){ai(c,c.return,Y)}}function ea(a,c,u){try{var m=c.updateQueue,S=m!==null?m.lastEffect:null;if(S!==null){var E=S.next;m=E;do{if((m.tag&a)===a){var F=m.inst,Y=F.destroy;if(Y!==void 0){F.destroy=void 0,S=c;var ce=u,Ee=Y;try{Ee()}catch(Me){ai(S,ce,Me)}}}m=m.next}while(m!==E)}}catch(Me){ai(c,c.return,Me)}}function yx(a){var c=a.updateQueue;if(c!==null){var u=a.stateNode;try{d0(c,u)}catch(m){ai(a,a.return,m)}}}function bx(a,c,u){u.props=Xa(a.type,a.memoizedProps),u.state=a.memoizedState;try{u.componentWillUnmount()}catch(m){ai(a,c,m)}}function Sc(a,c){try{var u=a.ref;if(u!==null){switch(a.tag){case 26:case 27:case 5:var m=a.stateNode;break;case 30:m=a.stateNode;break;default:m=a.stateNode}typeof u=="function"?a.refCleanup=u(m):u.current=m}}catch(S){ai(a,c,S)}}function Lr(a,c){var u=a.ref,m=a.refCleanup;if(u!==null)if(typeof m=="function")try{m()}catch(S){ai(a,c,S)}finally{a.refCleanup=null,a=a.alternate,a!=null&&(a.refCleanup=null)}else if(typeof u=="function")try{u(null)}catch(S){ai(a,c,S)}else u.current=null}function Ax(a){var c=a.type,u=a.memoizedProps,m=a.stateNode;try{e:switch(c){case"button":case"input":case"select":case"textarea":u.autoFocus&&m.focus();break e;case"img":u.src?m.src=u.src:u.srcSet&&(m.srcset=u.srcSet)}}catch(S){ai(a,a.return,S)}}function qd(a,c,u){try{var m=a.stateNode;AD(m,a.type,u,c),m[Qi]=c}catch(S){ai(a,a.return,S)}}function Rx(a){return a.tag===5||a.tag===3||a.tag===26||a.tag===27&&oa(a.type)||a.tag===4}function jd(a){e:for(;;){for(;a.sibling===null;){if(a.return===null||Rx(a.return))return null;a=a.return}for(a.sibling.return=a.return,a=a.sibling;a.tag!==5&&a.tag!==6&&a.tag!==18;){if(a.tag===27&&oa(a.type)||a.flags&2||a.child===null||a.tag===4)continue e;a.child.return=a,a=a.child}if(!(a.flags&2))return a.stateNode}}function Kd(a,c,u){var m=a.tag;if(m===5||m===6)a=a.stateNode,c?(u.nodeType===9?u.body:u.nodeName==="HTML"?u.ownerDocument.body:u).insertBefore(a,c):(c=u.nodeType===9?u.body:u.nodeName==="HTML"?u.ownerDocument.body:u,c.appendChild(a),u=u._reactRootContainer,u!=null||c.onclick!==null||(c.onclick=Qs));else if(m!==4&&(m===27&&oa(a.type)&&(u=a.stateNode,c=null),a=a.child,a!==null))for(Kd(a,c,u),a=a.sibling;a!==null;)Kd(a,c,u),a=a.sibling}function Lf(a,c,u){var m=a.tag;if(m===5||m===6)a=a.stateNode,c?u.insertBefore(a,c):u.appendChild(a);else if(m!==4&&(m===27&&oa(a.type)&&(u=a.stateNode),a=a.child,a!==null))for(Lf(a,c,u),a=a.sibling;a!==null;)Lf(a,c,u),a=a.sibling}function Ix(a){var c=a.stateNode,u=a.memoizedProps;try{for(var m=a.type,S=c.attributes;S.length;)c.removeAttributeNode(S[0]);ss(c,m,u),c[Ni]=a,c[Qi]=u}catch(E){ai(a,a.return,E)}}var _n=!1,ki=!1,Zd=!1,Cx=typeof WeakSet=="function"?WeakSet:Set,qi=null;function rD(a,c){if(a=a.containerInfo,g_=tu,a=Ql(a),Ao(a)){if("selectionStart"in a)var u={start:a.selectionStart,end:a.selectionEnd};else e:{u=(u=a.ownerDocument)&&u.defaultView||window;var m=u.getSelection&&u.getSelection();if(m&&m.rangeCount!==0){u=m.anchorNode;var S=m.anchorOffset,E=m.focusNode;m=m.focusOffset;try{u.nodeType,E.nodeType}catch{u=null;break e}var F=0,Y=-1,ce=-1,Ee=0,Me=0,Le=a,ye=null;t:for(;;){for(var be;Le!==u||S!==0&&Le.nodeType!==3||(Y=F+S),Le!==E||m!==0&&Le.nodeType!==3||(ce=F+m),Le.nodeType===3&&(F+=Le.nodeValue.length),(be=Le.firstChild)!==null;)ye=Le,Le=be;for(;;){if(Le===a)break t;if(ye===u&&++Ee===S&&(Y=F),ye===E&&++Me===m&&(ce=F),(be=Le.nextSibling)!==null)break;Le=ye,ye=Le.parentNode}Le=be}u=Y===-1||ce===-1?null:{start:Y,end:ce}}else u=null}u=u||{start:0,end:0}}else u=null;for(v_={focusedElem:a,selectionRange:u},tu=!1,qi=c;qi!==null;)if(c=qi,a=c.child,(c.subtreeFlags&1028)!==0&&a!==null)a.return=c,qi=a;else for(;qi!==null;){switch(c=qi,E=c.alternate,a=c.flags,c.tag){case 0:if((a&4)!==0&&(a=c.updateQueue,a=a!==null?a.events:null,a!==null))for(u=0;u<a.length;u++)S=a[u],S.ref.impl=S.nextImpl;break;case 11:case 15:break;case 1:if((a&1024)!==0&&E!==null){a=void 0,u=c,S=E.memoizedProps,E=E.memoizedState,m=u.stateNode;try{var rt=Xa(u.type,S);a=m.getSnapshotBeforeUpdate(rt,E),m.__reactInternalSnapshotBeforeUpdate=a}catch(mt){ai(u,u.return,mt)}}break;case 3:if((a&1024)!==0){if(a=c.stateNode.containerInfo,u=a.nodeType,u===9)T_(a);else if(u===1)switch(a.nodeName){case"HEAD":case"HTML":case"BODY":T_(a);break;default:a.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((a&1024)!==0)throw Error(i(163))}if(a=c.sibling,a!==null){a.return=c.return,qi=a;break}qi=c.return}}function Mx(a,c,u){var m=u.flags;switch(u.tag){case 0:case 11:case 15:pn(a,u),m&4&&xc(5,u);break;case 1:if(pn(a,u),m&4)if(a=u.stateNode,c===null)try{a.componentDidMount()}catch(F){ai(u,u.return,F)}else{var S=Xa(u.type,c.memoizedProps);c=c.memoizedState;try{a.componentDidUpdate(S,c,a.__reactInternalSnapshotBeforeUpdate)}catch(F){ai(u,u.return,F)}}m&64&&yx(u),m&512&&Sc(u,u.return);break;case 3:if(pn(a,u),m&64&&(a=u.updateQueue,a!==null)){if(c=null,u.child!==null)switch(u.child.tag){case 27:case 5:c=u.child.stateNode;break;case 1:c=u.child.stateNode}try{d0(a,c)}catch(F){ai(u,u.return,F)}}break;case 27:c===null&&m&4&&Ix(u);case 26:case 5:pn(a,u),c===null&&m&4&&Ax(u),m&512&&Sc(u,u.return);break;case 12:pn(a,u);break;case 31:pn(a,u),m&4&&wx(a,u);break;case 13:pn(a,u),m&4&&Ox(a,u),m&64&&(a=u.memoizedState,a!==null&&(a=a.dehydrated,a!==null&&(u=dD.bind(null,u),OD(a,u))));break;case 22:if(m=u.memoizedState!==null||_n,!m){c=c!==null&&c.memoizedState!==null||ki,S=_n;var E=ki;_n=m,(ki=c)&&!E?gn(a,u,(u.subtreeFlags&8772)!==0):pn(a,u),_n=S,ki=E}break;case 30:break;default:pn(a,u)}}function Dx(a){var c=a.alternate;c!==null&&(a.alternate=null,Dx(c)),a.child=null,a.deletions=null,a.sibling=null,a.tag===5&&(c=a.stateNode,c!==null&&oo(c)),a.stateNode=null,a.return=null,a.dependencies=null,a.memoizedProps=null,a.memoizedState=null,a.pendingProps=null,a.stateNode=null,a.updateQueue=null}var yi=null,Es=!1;function mn(a,c,u){for(u=u.child;u!==null;)Px(a,c,u),u=u.sibling}function Px(a,c,u){if(ci&&typeof ci.onCommitFiberUnmount=="function")try{ci.onCommitFiberUnmount(Qt,u)}catch{}switch(u.tag){case 26:ki||Lr(u,c),mn(a,c,u),u.memoizedState?u.memoizedState.count--:u.stateNode&&(u=u.stateNode,u.parentNode.removeChild(u));break;case 27:ki||Lr(u,c);var m=yi,S=Es;oa(u.type)&&(yi=u.stateNode,Es=!1),mn(a,c,u),Mc(u.stateNode),yi=m,Es=S;break;case 5:ki||Lr(u,c);case 6:if(m=yi,S=Es,yi=null,mn(a,c,u),yi=m,Es=S,yi!==null)if(Es)try{(yi.nodeType===9?yi.body:yi.nodeName==="HTML"?yi.ownerDocument.body:yi).removeChild(u.stateNode)}catch(E){ai(u,c,E)}else try{yi.removeChild(u.stateNode)}catch(E){ai(u,c,E)}break;case 18:yi!==null&&(Es?(a=yi,yS(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,u.stateNode),el(a)):yS(yi,u.stateNode));break;case 4:m=yi,S=Es,yi=u.stateNode.containerInfo,Es=!0,mn(a,c,u),yi=m,Es=S;break;case 0:case 11:case 14:case 15:ea(2,u,c),ki||ea(4,u,c),mn(a,c,u);break;case 1:ki||(Lr(u,c),m=u.stateNode,typeof m.componentWillUnmount=="function"&&bx(u,c,m)),mn(a,c,u);break;case 21:mn(a,c,u);break;case 22:ki=(m=ki)||u.memoizedState!==null,mn(a,c,u),ki=m;break;default:mn(a,c,u)}}function wx(a,c){if(c.memoizedState===null&&(a=c.alternate,a!==null&&(a=a.memoizedState,a!==null))){a=a.dehydrated;try{el(a)}catch(u){ai(c,c.return,u)}}}function Ox(a,c){if(c.memoizedState===null&&(a=c.alternate,a!==null&&(a=a.memoizedState,a!==null&&(a=a.dehydrated,a!==null))))try{el(a)}catch(u){ai(c,c.return,u)}}function nD(a){switch(a.tag){case 31:case 13:case 19:var c=a.stateNode;return c===null&&(c=a.stateNode=new Cx),c;case 22:return a=a.stateNode,c=a._retryCache,c===null&&(c=a._retryCache=new Cx),c;default:throw Error(i(435,a.tag))}}function Ff(a,c){var u=nD(a);c.forEach(function(m){if(!u.has(m)){u.add(m);var S=_D.bind(null,a,m);m.then(S,S)}})}function ys(a,c){var u=c.deletions;if(u!==null)for(var m=0;m<u.length;m++){var S=u[m],E=a,F=c,Y=F;e:for(;Y!==null;){switch(Y.tag){case 27:if(oa(Y.type)){yi=Y.stateNode,Es=!1;break e}break;case 5:yi=Y.stateNode,Es=!1;break e;case 3:case 4:yi=Y.stateNode.containerInfo,Es=!0;break e}Y=Y.return}if(yi===null)throw Error(i(160));Px(E,F,S),yi=null,Es=!1,E=S.alternate,E!==null&&(E.return=null),S.return=null}if(c.subtreeFlags&13886)for(c=c.child;c!==null;)Lx(c,a),c=c.sibling}var pr=null;function Lx(a,c){var u=a.alternate,m=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:ys(c,a),bs(a),m&4&&(ea(3,a,a.return),xc(3,a),ea(5,a,a.return));break;case 1:ys(c,a),bs(a),m&512&&(ki||u===null||Lr(u,u.return)),m&64&&_n&&(a=a.updateQueue,a!==null&&(m=a.callbacks,m!==null&&(u=a.shared.hiddenCallbacks,a.shared.hiddenCallbacks=u===null?m:u.concat(m))));break;case 26:var S=pr;if(ys(c,a),bs(a),m&512&&(ki||u===null||Lr(u,u.return)),m&4){var E=u!==null?u.memoizedState:null;if(m=a.memoizedState,u===null)if(m===null)if(a.stateNode===null){e:{m=a.type,u=a.memoizedProps,S=S.ownerDocument||S;t:switch(m){case"title":E=S.getElementsByTagName("title")[0],(!E||E[Ln]||E[Ni]||E.namespaceURI==="http://www.w3.org/2000/svg"||E.hasAttribute("itemprop"))&&(E=S.createElement(m),S.head.insertBefore(E,S.querySelector("head > title"))),ss(E,m,u),E[Ni]=a,wi(E),m=E;break e;case"link":var F=LS("link","href",S).get(m+(u.href||""));if(F){for(var Y=0;Y<F.length;Y++)if(E=F[Y],E.getAttribute("href")===(u.href==null||u.href===""?null:u.href)&&E.getAttribute("rel")===(u.rel==null?null:u.rel)&&E.getAttribute("title")===(u.title==null?null:u.title)&&E.getAttribute("crossorigin")===(u.crossOrigin==null?null:u.crossOrigin)){F.splice(Y,1);break t}}E=S.createElement(m),ss(E,m,u),S.head.appendChild(E);break;case"meta":if(F=LS("meta","content",S).get(m+(u.content||""))){for(Y=0;Y<F.length;Y++)if(E=F[Y],E.getAttribute("content")===(u.content==null?null:""+u.content)&&E.getAttribute("name")===(u.name==null?null:u.name)&&E.getAttribute("property")===(u.property==null?null:u.property)&&E.getAttribute("http-equiv")===(u.httpEquiv==null?null:u.httpEquiv)&&E.getAttribute("charset")===(u.charSet==null?null:u.charSet)){F.splice(Y,1);break t}}E=S.createElement(m),ss(E,m,u),S.head.appendChild(E);break;default:throw Error(i(468,m))}E[Ni]=a,wi(E),m=E}a.stateNode=m}else FS(S,a.type,a.stateNode);else a.stateNode=OS(S,m,a.memoizedProps);else E!==m?(E===null?u.stateNode!==null&&(u=u.stateNode,u.parentNode.removeChild(u)):E.count--,m===null?FS(S,a.type,a.stateNode):OS(S,m,a.memoizedProps)):m===null&&a.stateNode!==null&&qd(a,a.memoizedProps,u.memoizedProps)}break;case 27:ys(c,a),bs(a),m&512&&(ki||u===null||Lr(u,u.return)),u!==null&&m&4&&qd(a,a.memoizedProps,u.memoizedProps);break;case 5:if(ys(c,a),bs(a),m&512&&(ki||u===null||Lr(u,u.return)),a.flags&32){S=a.stateNode;try{Jr(S,"")}catch(rt){ai(a,a.return,rt)}}m&4&&a.stateNode!=null&&(S=a.memoizedProps,qd(a,S,u!==null?u.memoizedProps:S)),m&1024&&(Zd=!0);break;case 6:if(ys(c,a),bs(a),m&4){if(a.stateNode===null)throw Error(i(162));m=a.memoizedProps,u=a.stateNode;try{u.nodeValue=m}catch(rt){ai(a,a.return,rt)}}break;case 3:if(Qf=null,S=pr,pr=Kf(c.containerInfo),ys(c,a),pr=S,bs(a),m&4&&u!==null&&u.memoizedState.isDehydrated)try{el(c.containerInfo)}catch(rt){ai(a,a.return,rt)}Zd&&(Zd=!1,Fx(a));break;case 4:m=pr,pr=Kf(a.stateNode.containerInfo),ys(c,a),bs(a),pr=m;break;case 12:ys(c,a),bs(a);break;case 31:ys(c,a),bs(a),m&4&&(m=a.updateQueue,m!==null&&(a.updateQueue=null,Ff(a,m)));break;case 13:ys(c,a),bs(a),a.child.flags&8192&&a.memoizedState!==null!=(u!==null&&u.memoizedState!==null)&&(Uf=Ne()),m&4&&(m=a.updateQueue,m!==null&&(a.updateQueue=null,Ff(a,m)));break;case 22:S=a.memoizedState!==null;var ce=u!==null&&u.memoizedState!==null,Ee=_n,Me=ki;if(_n=Ee||S,ki=Me||ce,ys(c,a),ki=Me,_n=Ee,bs(a),m&8192)e:for(c=a.stateNode,c._visibility=S?c._visibility&-2:c._visibility|1,S&&(u===null||ce||_n||ki||Wa(a)),u=null,c=a;;){if(c.tag===5||c.tag===26){if(u===null){ce=u=c;try{if(E=ce.stateNode,S)F=E.style,typeof F.setProperty=="function"?F.setProperty("display","none","important"):F.display="none";else{Y=ce.stateNode;var Le=ce.memoizedProps.style,ye=Le!=null&&Le.hasOwnProperty("display")?Le.display:null;Y.style.display=ye==null||typeof ye=="boolean"?"":(""+ye).trim()}}catch(rt){ai(ce,ce.return,rt)}}}else if(c.tag===6){if(u===null){ce=c;try{ce.stateNode.nodeValue=S?"":ce.memoizedProps}catch(rt){ai(ce,ce.return,rt)}}}else if(c.tag===18){if(u===null){ce=c;try{var be=ce.stateNode;S?bS(be,!0):bS(ce.stateNode,!1)}catch(rt){ai(ce,ce.return,rt)}}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===a)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===a)break e;for(;c.sibling===null;){if(c.return===null||c.return===a)break e;u===c&&(u=null),c=c.return}u===c&&(u=null),c.sibling.return=c.return,c=c.sibling}m&4&&(m=a.updateQueue,m!==null&&(u=m.retryQueue,u!==null&&(m.retryQueue=null,Ff(a,u))));break;case 19:ys(c,a),bs(a),m&4&&(m=a.updateQueue,m!==null&&(a.updateQueue=null,Ff(a,m)));break;case 30:break;case 21:break;default:ys(c,a),bs(a)}}function bs(a){var c=a.flags;if(c&2){try{for(var u,m=a.return;m!==null;){if(Rx(m)){u=m;break}m=m.return}if(u==null)throw Error(i(160));switch(u.tag){case 27:var S=u.stateNode,E=jd(a);Lf(a,E,S);break;case 5:var F=u.stateNode;u.flags&32&&(Jr(F,""),u.flags&=-33);var Y=jd(a);Lf(a,Y,F);break;case 3:case 4:var ce=u.stateNode.containerInfo,Ee=jd(a);Kd(a,Ee,ce);break;default:throw Error(i(161))}}catch(Me){ai(a,a.return,Me)}a.flags&=-3}c&4096&&(a.flags&=-4097)}function Fx(a){if(a.subtreeFlags&1024)for(a=a.child;a!==null;){var c=a;Fx(c),c.tag===5&&c.flags&1024&&c.stateNode.reset(),a=a.sibling}}function pn(a,c){if(c.subtreeFlags&8772)for(c=c.child;c!==null;)Mx(a,c.alternate,c),c=c.sibling}function Wa(a){for(a=a.child;a!==null;){var c=a;switch(c.tag){case 0:case 11:case 14:case 15:ea(4,c,c.return),Wa(c);break;case 1:Lr(c,c.return);var u=c.stateNode;typeof u.componentWillUnmount=="function"&&bx(c,c.return,u),Wa(c);break;case 27:Mc(c.stateNode);case 26:case 5:Lr(c,c.return),Wa(c);break;case 22:c.memoizedState===null&&Wa(c);break;case 30:Wa(c);break;default:Wa(c)}a=a.sibling}}function gn(a,c,u){for(u=u&&(c.subtreeFlags&8772)!==0,c=c.child;c!==null;){var m=c.alternate,S=a,E=c,F=E.flags;switch(E.tag){case 0:case 11:case 15:gn(S,E,u),xc(4,E);break;case 1:if(gn(S,E,u),m=E,S=m.stateNode,typeof S.componentDidMount=="function")try{S.componentDidMount()}catch(Ee){ai(m,m.return,Ee)}if(m=E,S=m.updateQueue,S!==null){var Y=m.stateNode;try{var ce=S.shared.hiddenCallbacks;if(ce!==null)for(S.shared.hiddenCallbacks=null,S=0;S<ce.length;S++)u0(ce[S],Y)}catch(Ee){ai(m,m.return,Ee)}}u&&F&64&&yx(E),Sc(E,E.return);break;case 27:Ix(E);case 26:case 5:gn(S,E,u),u&&m===null&&F&4&&Ax(E),Sc(E,E.return);break;case 12:gn(S,E,u);break;case 31:gn(S,E,u),u&&F&4&&wx(S,E);break;case 13:gn(S,E,u),u&&F&4&&Ox(S,E);break;case 22:E.memoizedState===null&&gn(S,E,u),Sc(E,E.return);break;case 30:break;default:gn(S,E,u)}c=c.sibling}}function Qd(a,c){var u=null;a!==null&&a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(u=a.memoizedState.cachePool.pool),a=null,c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(a=c.memoizedState.cachePool.pool),a!==u&&(a!=null&&a.refCount++,u!=null&&ac(u))}function $d(a,c){a=null,c.alternate!==null&&(a=c.alternate.memoizedState.cache),c=c.memoizedState.cache,c!==a&&(c.refCount++,a!=null&&ac(a))}function gr(a,c,u,m){if(c.subtreeFlags&10256)for(c=c.child;c!==null;)Nx(a,c,u,m),c=c.sibling}function Nx(a,c,u,m){var S=c.flags;switch(c.tag){case 0:case 11:case 15:gr(a,c,u,m),S&2048&&xc(9,c);break;case 1:gr(a,c,u,m);break;case 3:gr(a,c,u,m),S&2048&&(a=null,c.alternate!==null&&(a=c.alternate.memoizedState.cache),c=c.memoizedState.cache,c!==a&&(c.refCount++,a!=null&&ac(a)));break;case 12:if(S&2048){gr(a,c,u,m),a=c.stateNode;try{var E=c.memoizedProps,F=E.id,Y=E.onPostCommit;typeof Y=="function"&&Y(F,c.alternate===null?"mount":"update",a.passiveEffectDuration,-0)}catch(ce){ai(c,c.return,ce)}}else gr(a,c,u,m);break;case 31:gr(a,c,u,m);break;case 13:gr(a,c,u,m);break;case 23:break;case 22:E=c.stateNode,F=c.alternate,c.memoizedState!==null?E._visibility&2?gr(a,c,u,m):Tc(a,c):E._visibility&2?gr(a,c,u,m):(E._visibility|=2,Xo(a,c,u,m,(c.subtreeFlags&10256)!==0||!1)),S&2048&&Qd(F,c);break;case 24:gr(a,c,u,m),S&2048&&$d(c.alternate,c);break;default:gr(a,c,u,m)}}function Xo(a,c,u,m,S){for(S=S&&((c.subtreeFlags&10256)!==0||!1),c=c.child;c!==null;){var E=a,F=c,Y=u,ce=m,Ee=F.flags;switch(F.tag){case 0:case 11:case 15:Xo(E,F,Y,ce,S),xc(8,F);break;case 23:break;case 22:var Me=F.stateNode;F.memoizedState!==null?Me._visibility&2?Xo(E,F,Y,ce,S):Tc(E,F):(Me._visibility|=2,Xo(E,F,Y,ce,S)),S&&Ee&2048&&Qd(F.alternate,F);break;case 24:Xo(E,F,Y,ce,S),S&&Ee&2048&&$d(F.alternate,F);break;default:Xo(E,F,Y,ce,S)}c=c.sibling}}function Tc(a,c){if(c.subtreeFlags&10256)for(c=c.child;c!==null;){var u=a,m=c,S=m.flags;switch(m.tag){case 22:Tc(u,m),S&2048&&Qd(m.alternate,m);break;case 24:Tc(u,m),S&2048&&$d(m.alternate,m);break;default:Tc(u,m)}c=c.sibling}}var Ec=8192;function Wo(a,c,u){if(a.subtreeFlags&Ec)for(a=a.child;a!==null;)Ux(a,c,u),a=a.sibling}function Ux(a,c,u){switch(a.tag){case 26:Wo(a,c,u),a.flags&Ec&&a.memoizedState!==null&&HD(u,pr,a.memoizedState,a.memoizedProps);break;case 5:Wo(a,c,u);break;case 3:case 4:var m=pr;pr=Kf(a.stateNode.containerInfo),Wo(a,c,u),pr=m;break;case 22:a.memoizedState===null&&(m=a.alternate,m!==null&&m.memoizedState!==null?(m=Ec,Ec=16777216,Wo(a,c,u),Ec=m):Wo(a,c,u));break;default:Wo(a,c,u)}}function Bx(a){var c=a.alternate;if(c!==null&&(a=c.child,a!==null)){c.child=null;do c=a.sibling,a.sibling=null,a=c;while(a!==null)}}function yc(a){var c=a.deletions;if((a.flags&16)!==0){if(c!==null)for(var u=0;u<c.length;u++){var m=c[u];qi=m,zx(m,a)}Bx(a)}if(a.subtreeFlags&10256)for(a=a.child;a!==null;)Vx(a),a=a.sibling}function Vx(a){switch(a.tag){case 0:case 11:case 15:yc(a),a.flags&2048&&ea(9,a,a.return);break;case 3:yc(a);break;case 12:yc(a);break;case 22:var c=a.stateNode;a.memoizedState!==null&&c._visibility&2&&(a.return===null||a.return.tag!==13)?(c._visibility&=-3,Nf(a)):yc(a);break;default:yc(a)}}function Nf(a){var c=a.deletions;if((a.flags&16)!==0){if(c!==null)for(var u=0;u<c.length;u++){var m=c[u];qi=m,zx(m,a)}Bx(a)}for(a=a.child;a!==null;){switch(c=a,c.tag){case 0:case 11:case 15:ea(8,c,c.return),Nf(c);break;case 22:u=c.stateNode,u._visibility&2&&(u._visibility&=-3,Nf(c));break;default:Nf(c)}a=a.sibling}}function zx(a,c){for(;qi!==null;){var u=qi;switch(u.tag){case 0:case 11:case 15:ea(8,u,c);break;case 23:case 22:if(u.memoizedState!==null&&u.memoizedState.cachePool!==null){var m=u.memoizedState.cachePool.pool;m!=null&&m.refCount++}break;case 24:ac(u.memoizedState.cache)}if(m=u.child,m!==null)m.return=u,qi=m;else e:for(u=a;qi!==null;){m=qi;var S=m.sibling,E=m.return;if(Dx(m),m===u){qi=null;break e}if(S!==null){S.return=E,qi=S;break e}qi=E}}}var aD={getCacheForType:function(a){var c=ts(Bi),u=c.data.get(a);return u===void 0&&(u=a(),c.data.set(a,u)),u},cacheSignal:function(){return ts(Bi).controller.signal}},oD=typeof WeakMap=="function"?WeakMap:Map,si=0,di=null,Ut=null,zt=0,ni=0,Vs=null,ta=!1,Ho=!1,Jd=!1,vn=0,Ci=0,ia=0,Ha=0,e_=0,zs=0,Yo=0,bc=null,As=null,t_=!1,Uf=0,kx=0,Bf=1/0,Vf=null,sa=null,Wi=0,ra=null,qo=null,xn=0,i_=0,s_=null,Gx=null,Ac=0,r_=null;function ks(){return(si&2)!==0&&zt!==0?zt&-zt:Z.T!==null?h_():ms()}function Xx(){if(zs===0)if((zt&536870912)===0||qt){var a=ws;ws<<=1,(ws&3932160)===0&&(ws=262144),zs=a}else zs=536870912;return a=Us.current,a!==null&&(a.flags|=32),zs}function Rs(a,c,u){(a===di&&(ni===2||ni===9)||a.cancelPendingCommit!==null)&&(jo(a,0),na(a,zt,zs,!1)),Ye(a,u),((si&2)===0||a!==di)&&(a===di&&((si&2)===0&&(Ha|=u),Ci===4&&na(a,zt,zs,!1)),Fr(a))}function Wx(a,c,u){if((si&6)!==0)throw Error(i(327));var m=!u&&(c&127)===0&&(c&a.expiredLanes)===0||it(a,c),S=m?hD(a,c):a_(a,c,!0),E=m;do{if(S===0){Ho&&!m&&na(a,c,0,!1);break}else{if(u=a.current.alternate,E&&!lD(u)){S=a_(a,c,!1),E=!1;continue}if(S===2){if(E=c,a.errorRecoveryDisabledLanes&E)var F=0;else F=a.pendingLanes&-536870913,F=F!==0?F:F&536870912?536870912:0;if(F!==0){c=F;e:{var Y=a;S=bc;var ce=Y.current.memoizedState.isDehydrated;if(ce&&(jo(Y,F).flags|=256),F=a_(Y,F,!1),F!==2){if(Jd&&!ce){Y.errorRecoveryDisabledLanes|=E,Ha|=E,S=4;break e}E=As,As=S,E!==null&&(As===null?As=E:As.push.apply(As,E))}S=F}if(E=!1,S!==2)continue}}if(S===1){jo(a,0),na(a,c,0,!0);break}e:{switch(m=a,E=S,E){case 0:case 1:throw Error(i(345));case 4:if((c&4194048)!==c)break;case 6:na(m,c,zs,!ta);break e;case 2:As=null;break;case 3:case 5:break;default:throw Error(i(329))}if((c&62914560)===c&&(S=Uf+300-Ne(),10<S)){if(na(m,c,zs,!ta),Ls(m,0,!0)!==0)break e;xn=c,m.timeoutHandle=TS(Hx.bind(null,m,u,As,Vf,t_,c,zs,Ha,Yo,ta,E,"Throttled",-0,0),S);break e}Hx(m,u,As,Vf,t_,c,zs,Ha,Yo,ta,E,null,-0,0)}}break}while(!0);Fr(a)}function Hx(a,c,u,m,S,E,F,Y,ce,Ee,Me,Le,ye,be){if(a.timeoutHandle=-1,Le=c.subtreeFlags,Le&8192||(Le&16785408)===16785408){Le={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Qs},Ux(c,E,Le);var rt=(E&62914560)===E?Uf-Ne():(E&4194048)===E?kx-Ne():0;if(rt=YD(Le,rt),rt!==null){xn=E,a.cancelPendingCommit=rt(Jx.bind(null,a,c,E,u,m,S,F,Y,ce,Me,Le,null,ye,be)),na(a,E,F,!Ee);return}}Jx(a,c,E,u,m,S,F,Y,ce)}function lD(a){for(var c=a;;){var u=c.tag;if((u===0||u===11||u===15)&&c.flags&16384&&(u=c.updateQueue,u!==null&&(u=u.stores,u!==null)))for(var m=0;m<u.length;m++){var S=u[m],E=S.getSnapshot;S=S.value;try{if(!hs(E(),S))return!1}catch{return!1}}if(u=c.child,c.subtreeFlags&16384&&u!==null)u.return=c,c=u;else{if(c===a)break;for(;c.sibling===null;){if(c.return===null||c.return===a)return!0;c=c.return}c.sibling.return=c.return,c=c.sibling}}return!0}function na(a,c,u,m){c&=~e_,c&=~Ha,a.suspendedLanes|=c,a.pingedLanes&=~c,m&&(a.warmLanes|=c),m=a.expirationTimes;for(var S=c;0<S;){var E=31-Ri(S),F=1<<E;m[E]=-1,S&=~F}u!==0&&We(a,u,c)}function zf(){return(si&6)===0?(Rc(0),!1):!0}function n_(){if(Ut!==null){if(ni===0)var a=Ut.return;else a=Ut,ln=Na=null,Td(a),Bo=null,lc=0,a=Ut;for(;a!==null;)Ex(a.alternate,a),a=a.return;Ut=null}}function jo(a,c){var u=a.timeoutHandle;u!==-1&&(a.timeoutHandle=-1,CD(u)),u=a.cancelPendingCommit,u!==null&&(a.cancelPendingCommit=null,u()),xn=0,n_(),di=a,Ut=u=er(a.current,null),zt=c,ni=0,Vs=null,ta=!1,Ho=it(a,c),Jd=!1,Yo=zs=e_=Ha=ia=Ci=0,As=bc=null,t_=!1,(c&8)!==0&&(c|=c&32);var m=a.entangledLanes;if(m!==0)for(a=a.entanglements,m&=c;0<m;){var S=31-Ri(m),E=1<<S;c|=a[S],m&=~E}return vn=c,Js(),u}function Yx(a,c){Rt=null,Z.H=pc,c===Uo||c===mf?(c=l0(),ni=3):c===cd?(c=l0(),ni=4):ni=c===Ud?8:c!==null&&typeof c=="object"&&typeof c.then=="function"?6:1,Vs=c,Ut===null&&(Ci=1,Mf(a,ir(c,a.current)))}function qx(){var a=Us.current;return a===null?!0:(zt&4194048)===zt?ar===null:(zt&62914560)===zt||(zt&536870912)!==0?a===ar:!1}function jx(){var a=Z.H;return Z.H=pc,a===null?pc:a}function Kx(){var a=Z.A;return Z.A=aD,a}function kf(){Ci=4,ta||(zt&4194048)!==zt&&Us.current!==null||(Ho=!0),(ia&134217727)===0&&(Ha&134217727)===0||di===null||na(di,zt,zs,!1)}function a_(a,c,u){var m=si;si|=2;var S=jx(),E=Kx();(di!==a||zt!==c)&&(Vf=null,jo(a,c)),c=!1;var F=Ci;e:do try{if(ni!==0&&Ut!==null){var Y=Ut,ce=Vs;switch(ni){case 8:n_(),F=6;break e;case 3:case 2:case 9:case 6:Us.current===null&&(c=!0);var Ee=ni;if(ni=0,Vs=null,Ko(a,Y,ce,Ee),u&&Ho){F=0;break e}break;default:Ee=ni,ni=0,Vs=null,Ko(a,Y,ce,Ee)}}cD(),F=Ci;break}catch(Me){Yx(a,Me)}while(!0);return c&&a.shellSuspendCounter++,ln=Na=null,si=m,Z.H=S,Z.A=E,Ut===null&&(di=null,zt=0,Js()),F}function cD(){for(;Ut!==null;)Zx(Ut)}function hD(a,c){var u=si;si|=2;var m=jx(),S=Kx();di!==a||zt!==c?(Vf=null,Bf=Ne()+500,jo(a,c)):Ho=it(a,c);e:do try{if(ni!==0&&Ut!==null){c=Ut;var E=Vs;t:switch(ni){case 1:ni=0,Vs=null,Ko(a,c,E,1);break;case 2:case 9:if(a0(E)){ni=0,Vs=null,Qx(c);break}c=function(){ni!==2&&ni!==9||di!==a||(ni=7),Fr(a)},E.then(c,c);break e;case 3:ni=7;break e;case 4:ni=5;break e;case 7:a0(E)?(ni=0,Vs=null,Qx(c)):(ni=0,Vs=null,Ko(a,c,E,7));break;case 5:var F=null;switch(Ut.tag){case 26:F=Ut.memoizedState;case 5:case 27:var Y=Ut;if(F?NS(F):Y.stateNode.complete){ni=0,Vs=null;var ce=Y.sibling;if(ce!==null)Ut=ce;else{var Ee=Y.return;Ee!==null?(Ut=Ee,Gf(Ee)):Ut=null}break t}}ni=0,Vs=null,Ko(a,c,E,5);break;case 6:ni=0,Vs=null,Ko(a,c,E,6);break;case 8:n_(),Ci=6;break e;default:throw Error(i(462))}}fD();break}catch(Me){Yx(a,Me)}while(!0);return ln=Na=null,Z.H=m,Z.A=S,si=u,Ut!==null?0:(di=null,zt=0,Js(),Ci)}function fD(){for(;Ut!==null&&!nt();)Zx(Ut)}function Zx(a){var c=Sx(a.alternate,a,vn);a.memoizedProps=a.pendingProps,c===null?Gf(a):Ut=c}function Qx(a){var c=a,u=c.alternate;switch(c.tag){case 15:case 0:c=_x(u,c,c.pendingProps,c.type,void 0,zt);break;case 11:c=_x(u,c,c.pendingProps,c.type.render,c.ref,zt);break;case 5:Td(c);default:Ex(u,c),c=Ut=lf(c,vn),c=Sx(u,c,vn)}a.memoizedProps=a.pendingProps,c===null?Gf(a):Ut=c}function Ko(a,c,u,m){ln=Na=null,Td(c),Bo=null,lc=0;var S=c.return;try{if(J1(a,S,c,u,zt)){Ci=1,Mf(a,ir(u,a.current)),Ut=null;return}}catch(E){if(S!==null)throw Ut=S,E;Ci=1,Mf(a,ir(u,a.current)),Ut=null;return}c.flags&32768?(qt||m===1?a=!0:Ho||(zt&536870912)!==0?a=!1:(ta=a=!0,(m===2||m===9||m===3||m===6)&&(m=Us.current,m!==null&&m.tag===13&&(m.flags|=16384))),$x(c,a)):Gf(c)}function Gf(a){var c=a;do{if((c.flags&32768)!==0){$x(c,ta);return}a=c.return;var u=iD(c.alternate,c,vn);if(u!==null){Ut=u;return}if(c=c.sibling,c!==null){Ut=c;return}Ut=c=a}while(c!==null);Ci===0&&(Ci=5)}function $x(a,c){do{var u=sD(a.alternate,a);if(u!==null){u.flags&=32767,Ut=u;return}if(u=a.return,u!==null&&(u.flags|=32768,u.subtreeFlags=0,u.deletions=null),!c&&(a=a.sibling,a!==null)){Ut=a;return}Ut=a=u}while(a!==null);Ci=6,Ut=null}function Jx(a,c,u,m,S,E,F,Y,ce){a.cancelPendingCommit=null;do Xf();while(Wi!==0);if((si&6)!==0)throw Error(i(327));if(c!==null){if(c===a.current)throw Error(i(177));if(E=c.lanes|c.childLanes,E|=Ns,j(a,u,E,F,Y,ce),a===di&&(Ut=di=null,zt=0),qo=c,ra=a,xn=u,i_=E,s_=S,Gx=m,(c.subtreeFlags&10256)!==0||(c.flags&10256)!==0?(a.callbackNode=null,a.callbackPriority=0,mD(wt,function(){return rS(),null})):(a.callbackNode=null,a.callbackPriority=0),m=(c.flags&13878)!==0,(c.subtreeFlags&13878)!==0||m){m=Z.T,Z.T=null,S=J.p,J.p=2,F=si,si|=4;try{rD(a,c,u)}finally{si=F,J.p=S,Z.T=m}}Wi=1,eS(),tS(),iS()}}function eS(){if(Wi===1){Wi=0;var a=ra,c=qo,u=(c.flags&13878)!==0;if((c.subtreeFlags&13878)!==0||u){u=Z.T,Z.T=null;var m=J.p;J.p=2;var S=si;si|=4;try{Lx(c,a);var E=v_,F=Ql(a.containerInfo),Y=E.focusedElem,ce=E.selectionRange;if(F!==Y&&Y&&Y.ownerDocument&&Zl(Y.ownerDocument.documentElement,Y)){if(ce!==null&&Ao(Y)){var Ee=ce.start,Me=ce.end;if(Me===void 0&&(Me=Ee),"selectionStart"in Y)Y.selectionStart=Ee,Y.selectionEnd=Math.min(Me,Y.value.length);else{var Le=Y.ownerDocument||document,ye=Le&&Le.defaultView||window;if(ye.getSelection){var be=ye.getSelection(),rt=Y.textContent.length,mt=Math.min(ce.start,rt),ui=ce.end===void 0?mt:Math.min(ce.end,rt);!be.extend&&mt>ui&&(F=ui,ui=mt,mt=F);var ve=Kl(Y,mt),ue=Kl(Y,ui);if(ve&&ue&&(be.rangeCount!==1||be.anchorNode!==ve.node||be.anchorOffset!==ve.offset||be.focusNode!==ue.node||be.focusOffset!==ue.offset)){var Te=Le.createRange();Te.setStart(ve.node,ve.offset),be.removeAllRanges(),mt>ui?(be.addRange(Te),be.extend(ue.node,ue.offset)):(Te.setEnd(ue.node,ue.offset),be.addRange(Te))}}}}for(Le=[],be=Y;be=be.parentNode;)be.nodeType===1&&Le.push({element:be,left:be.scrollLeft,top:be.scrollTop});for(typeof Y.focus=="function"&&Y.focus(),Y=0;Y<Le.length;Y++){var we=Le[Y];we.element.scrollLeft=we.left,we.element.scrollTop=we.top}}tu=!!g_,v_=g_=null}finally{si=S,J.p=m,Z.T=u}}a.current=c,Wi=2}}function tS(){if(Wi===2){Wi=0;var a=ra,c=qo,u=(c.flags&8772)!==0;if((c.subtreeFlags&8772)!==0||u){u=Z.T,Z.T=null;var m=J.p;J.p=2;var S=si;si|=4;try{Mx(a,c.alternate,c)}finally{si=S,J.p=m,Z.T=u}}Wi=3}}function iS(){if(Wi===4||Wi===3){Wi=0,oe();var a=ra,c=qo,u=xn,m=Gx;(c.subtreeFlags&10256)!==0||(c.flags&10256)!==0?Wi=5:(Wi=0,qo=ra=null,sS(a,a.pendingLanes));var S=a.pendingLanes;if(S===0&&(sa=null),ls(u),c=c.stateNode,ci&&typeof ci.onCommitFiberRoot=="function")try{ci.onCommitFiberRoot(Qt,c,void 0,(c.current.flags&128)===128)}catch{}if(m!==null){c=Z.T,S=J.p,J.p=2,Z.T=null;try{for(var E=a.onRecoverableError,F=0;F<m.length;F++){var Y=m[F];E(Y.value,{componentStack:Y.stack})}}finally{Z.T=c,J.p=S}}(xn&3)!==0&&Xf(),Fr(a),S=a.pendingLanes,(u&261930)!==0&&(S&42)!==0?a===r_?Ac++:(Ac=0,r_=a):Ac=0,Rc(0)}}function sS(a,c){(a.pooledCacheLanes&=c)===0&&(c=a.pooledCache,c!=null&&(a.pooledCache=null,ac(c)))}function Xf(){return eS(),tS(),iS(),rS()}function rS(){if(Wi!==5)return!1;var a=ra,c=i_;i_=0;var u=ls(xn),m=Z.T,S=J.p;try{J.p=32>u?32:u,Z.T=null,u=s_,s_=null;var E=ra,F=xn;if(Wi=0,qo=ra=null,xn=0,(si&6)!==0)throw Error(i(331));var Y=si;if(si|=4,Vx(E.current),Nx(E,E.current,F,u),si=Y,Rc(0,!1),ci&&typeof ci.onPostCommitFiberRoot=="function")try{ci.onPostCommitFiberRoot(Qt,E)}catch{}return!0}finally{J.p=S,Z.T=m,sS(a,c)}}function nS(a,c,u){c=ir(u,c),c=Nd(a.stateNode,c,2),a=Qn(a,c,2),a!==null&&(Ye(a,2),Fr(a))}function ai(a,c,u){if(a.tag===3)nS(a,a,u);else for(;c!==null;){if(c.tag===3){nS(c,a,u);break}else if(c.tag===1){var m=c.stateNode;if(typeof c.type.getDerivedStateFromError=="function"||typeof m.componentDidCatch=="function"&&(sa===null||!sa.has(m))){a=ir(u,a),u=ax(2),m=Qn(c,u,2),m!==null&&(ox(u,m,c,a),Ye(m,2),Fr(m));break}}c=c.return}}function o_(a,c,u){var m=a.pingCache;if(m===null){m=a.pingCache=new oD;var S=new Set;m.set(c,S)}else S=m.get(c),S===void 0&&(S=new Set,m.set(c,S));S.has(u)||(Jd=!0,S.add(u),a=uD.bind(null,a,c,u),c.then(a,a))}function uD(a,c,u){var m=a.pingCache;m!==null&&m.delete(c),a.pingedLanes|=a.suspendedLanes&u,a.warmLanes&=~u,di===a&&(zt&u)===u&&(Ci===4||Ci===3&&(zt&62914560)===zt&&300>Ne()-Uf?(si&2)===0&&jo(a,0):e_|=u,Yo===zt&&(Yo=0)),Fr(a)}function aS(a,c){c===0&&(c=Ce()),a=et(a,c),a!==null&&(Ye(a,c),Fr(a))}function dD(a){var c=a.memoizedState,u=0;c!==null&&(u=c.retryLane),aS(a,u)}function _D(a,c){var u=0;switch(a.tag){case 31:case 13:var m=a.stateNode,S=a.memoizedState;S!==null&&(u=S.retryLane);break;case 19:m=a.stateNode;break;case 22:m=a.stateNode._retryCache;break;default:throw Error(i(314))}m!==null&&m.delete(c),aS(a,u)}function mD(a,c){return vt(a,c)}var Wf=null,Zo=null,l_=!1,Hf=!1,c_=!1,aa=0;function Fr(a){a!==Zo&&a.next===null&&(Zo===null?Wf=Zo=a:Zo=Zo.next=a),Hf=!0,l_||(l_=!0,gD())}function Rc(a,c){if(!c_&&Hf){c_=!0;do for(var u=!1,m=Wf;m!==null;){if(a!==0){var S=m.pendingLanes;if(S===0)var E=0;else{var F=m.suspendedLanes,Y=m.pingedLanes;E=(1<<31-Ri(42|a)+1)-1,E&=S&~(F&~Y),E=E&201326741?E&201326741|1:E?E|2:0}E!==0&&(u=!0,hS(m,E))}else E=zt,E=Ls(m,m===di?E:0,m.cancelPendingCommit!==null||m.timeoutHandle!==-1),(E&3)===0||it(m,E)||(u=!0,hS(m,E));m=m.next}while(u);c_=!1}}function pD(){oS()}function oS(){Hf=l_=!1;var a=0;aa!==0&&ID()&&(a=aa);for(var c=Ne(),u=null,m=Wf;m!==null;){var S=m.next,E=lS(m,c);E===0?(m.next=null,u===null?Wf=S:u.next=S,S===null&&(Zo=u)):(u=m,(a!==0||(E&3)!==0)&&(Hf=!0)),m=S}Wi!==0&&Wi!==5||Rc(a),aa!==0&&(aa=0)}function lS(a,c){for(var u=a.suspendedLanes,m=a.pingedLanes,S=a.expirationTimes,E=a.pendingLanes&-62914561;0<E;){var F=31-Ri(E),Y=1<<F,ce=S[F];ce===-1?((Y&u)===0||(Y&m)!==0)&&(S[F]=W(Y,c)):ce<=c&&(a.expiredLanes|=Y),E&=~Y}if(c=di,u=zt,u=Ls(a,a===c?u:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),m=a.callbackNode,u===0||a===c&&(ni===2||ni===9)||a.cancelPendingCommit!==null)return m!==null&&m!==null&&xt(m),a.callbackNode=null,a.callbackPriority=0;if((u&3)===0||it(a,u)){if(c=u&-u,c===a.callbackPriority)return c;switch(m!==null&&xt(m),ls(u)){case 2:case 8:u=Ot;break;case 32:u=wt;break;case 268435456:u=Nt;break;default:u=wt}return m=cS.bind(null,a),u=vt(u,m),a.callbackPriority=c,a.callbackNode=u,c}return m!==null&&m!==null&&xt(m),a.callbackPriority=2,a.callbackNode=null,2}function cS(a,c){if(Wi!==0&&Wi!==5)return a.callbackNode=null,a.callbackPriority=0,null;var u=a.callbackNode;if(Xf()&&a.callbackNode!==u)return null;var m=zt;return m=Ls(a,a===di?m:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),m===0?null:(Wx(a,m,c),lS(a,Ne()),a.callbackNode!=null&&a.callbackNode===u?cS.bind(null,a):null)}function hS(a,c){if(Xf())return null;Wx(a,c,!0)}function gD(){MD(function(){(si&6)!==0?vt(Ft,pD):oS()})}function h_(){if(aa===0){var a=Fo;a===0&&(a=Ps,Ps<<=1,(Ps&261888)===0&&(Ps=256)),aa=a}return aa}function fS(a){return a==null||typeof a=="symbol"||typeof a=="boolean"?null:typeof a=="function"?a:Ca(""+a)}function uS(a,c){var u=c.ownerDocument.createElement("input");return u.name=c.name,u.value=c.value,a.id&&u.setAttribute("form",a.id),c.parentNode.insertBefore(u,c),a=new FormData(a),u.parentNode.removeChild(u),a}function vD(a,c,u,m,S){if(c==="submit"&&u&&u.stateNode===S){var E=fS((S[Qi]||null).action),F=m.submitter;F&&(c=(c=F[Qi]||null)?fS(c.formAction):F.getAttribute("formAction"),c!==null&&(E=c,F=null));var Y=new wa("action","action",null,m,S);a.push({event:Y,listeners:[{instance:null,listener:function(){if(m.defaultPrevented){if(aa!==0){var ce=F?uS(S,F):new FormData(S);Dd(u,{pending:!0,data:ce,method:S.method,action:E},null,ce)}}else typeof E=="function"&&(Y.preventDefault(),ce=F?uS(S,F):new FormData(S),Dd(u,{pending:!0,data:ce,method:S.method,action:E},E,ce))},currentTarget:S}]})}}for(var f_=0;f_<_e.length;f_++){var u_=_e[f_],xD=u_.toLowerCase(),SD=u_[0].toUpperCase()+u_.slice(1);ii(xD,"on"+SD)}ii(ec,"onAnimationEnd"),ii(tc,"onAnimationIteration"),ii(ic,"onAnimationStart"),ii("dblclick","onDoubleClick"),ii("focusin","onFocus"),ii("focusout","onBlur"),ii(nf,"onTransitionRun"),ii(af,"onTransitionStart"),ii(of,"onTransitionCancel"),ii(je,"onTransitionEnd"),Qr("onMouseEnter",["mouseout","mouseover"]),Qr("onMouseLeave",["mouseout","mouseover"]),Qr("onPointerEnter",["pointerout","pointerover"]),Qr("onPointerLeave",["pointerout","pointerover"]),Ir("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ir("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ir("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ir("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ir("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ir("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ic="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),TD=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ic));function dS(a,c){c=(c&4)!==0;for(var u=0;u<a.length;u++){var m=a[u],S=m.event;m=m.listeners;e:{var E=void 0;if(c)for(var F=m.length-1;0<=F;F--){var Y=m[F],ce=Y.instance,Ee=Y.currentTarget;if(Y=Y.listener,ce!==E&&S.isPropagationStopped())break e;E=Y,S.currentTarget=Ee;try{E(S)}catch(Me){Mt(Me)}S.currentTarget=null,E=ce}else for(F=0;F<m.length;F++){if(Y=m[F],ce=Y.instance,Ee=Y.currentTarget,Y=Y.listener,ce!==E&&S.isPropagationStopped())break e;E=Y,S.currentTarget=Ee;try{E(S)}catch(Me){Mt(Me)}S.currentTarget=null,E=ce}}}}function Bt(a,c){var u=c[ao];u===void 0&&(u=c[ao]=new Set);var m=a+"__bubble";u.has(m)||(_S(c,a,2,!1),u.add(m))}function d_(a,c,u){var m=0;c&&(m|=4),_S(u,a,m,c)}var Yf="_reactListening"+Math.random().toString(36).slice(2);function __(a){if(!a[Yf]){a[Yf]=!0,vl.forEach(function(u){u!=="selectionchange"&&(TD.has(u)||d_(u,!1,a),d_(u,!0,a))});var c=a.nodeType===9?a:a.ownerDocument;c===null||c[Yf]||(c[Yf]=!0,d_("selectionchange",!1,c))}}function _S(a,c,u,m){switch(XS(c)){case 2:var S=KD;break;case 8:S=ZD;break;default:S=M_}u=S.bind(null,c,u,a),S=void 0,!po||c!=="touchstart"&&c!=="touchmove"&&c!=="wheel"||(S=!0),m?S!==void 0?a.addEventListener(c,u,{capture:!0,passive:S}):a.addEventListener(c,u,!0):S!==void 0?a.addEventListener(c,u,{passive:S}):a.addEventListener(c,u,!1)}function m_(a,c,u,m,S){var E=m;if((c&1)===0&&(c&2)===0&&m!==null)e:for(;;){if(m===null)return;var F=m.tag;if(F===3||F===4){var Y=m.stateNode.containerInfo;if(Y===S)break;if(F===4)for(F=m.return;F!==null;){var ce=F.tag;if((ce===3||ce===4)&&F.stateNode.containerInfo===S)return;F=F.return}for(;Y!==null;){if(F=jr(Y),F===null)return;if(ce=F.tag,ce===5||ce===6||ce===26||ce===27){m=E=F;continue e}Y=Y.parentNode}}m=m.return}Dl(function(){var Ee=E,Me=_o(u),Le=[];e:{var ye=M.get(a);if(ye!==void 0){var be=wa,rt=a;switch(a){case"keypress":if(Da(u)===0)break e;case"keydown":case"keyup":be=Nh;break;case"focusin":rt="focus",be=So;break;case"focusout":rt="blur",be=So;break;case"beforeblur":case"afterblur":be=So;break;case"click":if(u.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":be=Ol;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":be=bh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":be=Vh;break;case ec:case tc:case ic:be=Ih;break;case je:be=kh;break;case"scroll":case"scrollend":be=Eh;break;case"wheel":be=Xh;break;case"copy":case"cut":case"paste":be=Mh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":be=Fl;break;case"toggle":case"beforetoggle":be=Hh}var mt=(c&4)!==0,ui=!mt&&(a==="scroll"||a==="scrollend"),ve=mt?ye!==null?ye+"Capture":null:ye;mt=[];for(var ue=Ee,Te;ue!==null;){var we=ue;if(Te=we.stateNode,we=we.tag,we!==5&&we!==26&&we!==27||Te===null||ve===null||(we=Nn(ue,ve),we!=null&&mt.push(Cc(ue,we,Te))),ui)break;ue=ue.return}0<mt.length&&(ye=new be(ye,rt,null,u,Me),Le.push({event:ye,listeners:mt}))}}if((c&7)===0){e:{if(ye=a==="mouseover"||a==="pointerover",be=a==="mouseout"||a==="pointerout",ye&&u!==uo&&(rt=u.relatedTarget||u.fromElement)&&(jr(rt)||rt[qr]))break e;if((be||ye)&&(ye=Me.window===Me?Me:(ye=Me.ownerDocument)?ye.defaultView||ye.parentWindow:window,be?(rt=u.relatedTarget||u.toElement,be=Ee,rt=rt?jr(rt):null,rt!==null&&(ui=n(rt),mt=rt.tag,rt!==ui||mt!==5&&mt!==27&&mt!==6)&&(rt=null)):(be=null,rt=Ee),be!==rt)){if(mt=Ol,we="onMouseLeave",ve="onMouseEnter",ue="mouse",(a==="pointerout"||a==="pointerover")&&(mt=Fl,we="onPointerLeave",ve="onPointerEnter",ue="pointer"),ui=be==null?ye:Fn(be),Te=rt==null?ye:Fn(rt),ye=new mt(we,ue+"leave",be,u,Me),ye.target=ui,ye.relatedTarget=Te,we=null,jr(Me)===Ee&&(mt=new mt(ve,ue+"enter",rt,u,Me),mt.target=Te,mt.relatedTarget=ui,we=mt),ui=we,be&&rt)t:{for(mt=ED,ve=be,ue=rt,Te=0,we=ve;we;we=mt(we))Te++;we=0;for(var ht=ue;ht;ht=mt(ht))we++;for(;0<Te-we;)ve=mt(ve),Te--;for(;0<we-Te;)ue=mt(ue),we--;for(;Te--;){if(ve===ue||ue!==null&&ve===ue.alternate){mt=ve;break t}ve=mt(ve),ue=mt(ue)}mt=null}else mt=null;be!==null&&mS(Le,ye,be,mt,!1),rt!==null&&ui!==null&&mS(Le,ui,rt,mt,!0)}}e:{if(ye=Ee?Fn(Ee):window,be=ye.nodeName&&ye.nodeName.toLowerCase(),be==="select"||be==="input"&&ye.type==="file")var $t=Xl;else if(kl(ye))if(Wl)$t=tf;else{$t=Jh;var at=$h}else be=ye.nodeName,!be||be.toLowerCase()!=="input"||ye.type!=="checkbox"&&ye.type!=="radio"?Ee&&fo(Ee.elementType)&&($t=Xl):$t=ef;if($t&&($t=$t(a,Ee))){Gl(Le,$t,u,Me);break e}at&&at(a,ye,Ee),a==="focusout"&&Ee&&ye.type==="number"&&Ee.memoizedProps.value!=null&&ho(ye,"number",ye.value)}switch(at=Ee?Fn(Ee):window,a){case"focusin":(kl(at)||at.contentEditable==="true")&&(rn=at,Ro=Ee,Wn=null);break;case"focusout":Wn=Ro=rn=null;break;case"mousedown":Io=!0;break;case"contextmenu":case"mouseup":case"dragend":Io=!1,$l(Le,u,Me);break;case"selectionchange":if(rf)break;case"keydown":case"keyup":$l(Le,u,Me)}var It;if(Eo)e:{switch(a){case"compositionstart":var kt="onCompositionStart";break e;case"compositionend":kt="onCompositionEnd";break e;case"compositionupdate":kt="onCompositionUpdate";break e}kt=void 0}else sn?Vl(a,u)&&(kt="onCompositionEnd"):a==="keydown"&&u.keyCode===229&&(kt="onCompositionStart");kt&&(Nl&&u.locale!=="ko"&&(sn||kt!=="onCompositionStart"?kt==="onCompositionEnd"&&sn&&(It=Pl()):(dr=Me,go="value"in dr?dr.value:dr.textContent,sn=!0)),at=qf(Ee,kt),0<at.length&&(kt=new Ll(kt,a,null,u,Me),Le.push({event:kt,listeners:at}),It?kt.data=It:(It=zl(u),It!==null&&(kt.data=It)))),(It=qh?jh(a,u):Kh(a,u))&&(kt=qf(Ee,"onBeforeInput"),0<kt.length&&(at=new Ll("onBeforeInput","beforeinput",null,u,Me),Le.push({event:at,listeners:kt}),at.data=It)),vD(Le,a,Ee,u,Me)}dS(Le,c)})}function Cc(a,c,u){return{instance:a,listener:c,currentTarget:u}}function qf(a,c){for(var u=c+"Capture",m=[];a!==null;){var S=a,E=S.stateNode;if(S=S.tag,S!==5&&S!==26&&S!==27||E===null||(S=Nn(a,u),S!=null&&m.unshift(Cc(a,S,E)),S=Nn(a,c),S!=null&&m.push(Cc(a,S,E))),a.tag===3)return m;a=a.return}return[]}function ED(a){if(a===null)return null;do a=a.return;while(a&&a.tag!==5&&a.tag!==27);return a||null}function mS(a,c,u,m,S){for(var E=c._reactName,F=[];u!==null&&u!==m;){var Y=u,ce=Y.alternate,Ee=Y.stateNode;if(Y=Y.tag,ce!==null&&ce===m)break;Y!==5&&Y!==26&&Y!==27||Ee===null||(ce=Ee,S?(Ee=Nn(u,E),Ee!=null&&F.unshift(Cc(u,Ee,ce))):S||(Ee=Nn(u,E),Ee!=null&&F.push(Cc(u,Ee,ce)))),u=u.return}F.length!==0&&a.push({event:c,listeners:F})}var yD=/\r\n?/g,bD=/\u0000|\uFFFD/g;function pS(a){return(typeof a=="string"?a:""+a).replace(yD,`
`).replace(bD,"")}function gS(a,c){return c=pS(c),pS(a)===c}function fi(a,c,u,m,S,E){switch(u){case"children":typeof m=="string"?c==="body"||c==="textarea"&&m===""||Jr(a,m):(typeof m=="number"||typeof m=="bigint")&&c!=="body"&&Jr(a,""+m);break;case"className":Ra(a,"class",m);break;case"tabIndex":Ra(a,"tabindex",m);break;case"dir":case"role":case"viewBox":case"width":case"height":Ra(a,u,m);break;case"style":Cl(a,m,E);break;case"data":if(c!=="object"){Ra(a,"data",m);break}case"src":case"href":if(m===""&&(c!=="a"||u!=="href")){a.removeAttribute(u);break}if(m==null||typeof m=="function"||typeof m=="symbol"||typeof m=="boolean"){a.removeAttribute(u);break}m=Ca(""+m),a.setAttribute(u,m);break;case"action":case"formAction":if(typeof m=="function"){a.setAttribute(u,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof E=="function"&&(u==="formAction"?(c!=="input"&&fi(a,c,"name",S.name,S,null),fi(a,c,"formEncType",S.formEncType,S,null),fi(a,c,"formMethod",S.formMethod,S,null),fi(a,c,"formTarget",S.formTarget,S,null)):(fi(a,c,"encType",S.encType,S,null),fi(a,c,"method",S.method,S,null),fi(a,c,"target",S.target,S,null)));if(m==null||typeof m=="symbol"||typeof m=="boolean"){a.removeAttribute(u);break}m=Ca(""+m),a.setAttribute(u,m);break;case"onClick":m!=null&&(a.onclick=Qs);break;case"onScroll":m!=null&&Bt("scroll",a);break;case"onScrollEnd":m!=null&&Bt("scrollend",a);break;case"dangerouslySetInnerHTML":if(m!=null){if(typeof m!="object"||!("__html"in m))throw Error(i(61));if(u=m.__html,u!=null){if(S.children!=null)throw Error(i(60));a.innerHTML=u}}break;case"multiple":a.multiple=m&&typeof m!="function"&&typeof m!="symbol";break;case"muted":a.muted=m&&typeof m!="function"&&typeof m!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(m==null||typeof m=="function"||typeof m=="boolean"||typeof m=="symbol"){a.removeAttribute("xlink:href");break}u=Ca(""+m),a.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",u);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":m!=null&&typeof m!="function"&&typeof m!="symbol"?a.setAttribute(u,""+m):a.removeAttribute(u);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":m&&typeof m!="function"&&typeof m!="symbol"?a.setAttribute(u,""):a.removeAttribute(u);break;case"capture":case"download":m===!0?a.setAttribute(u,""):m!==!1&&m!=null&&typeof m!="function"&&typeof m!="symbol"?a.setAttribute(u,m):a.removeAttribute(u);break;case"cols":case"rows":case"size":case"span":m!=null&&typeof m!="function"&&typeof m!="symbol"&&!isNaN(m)&&1<=m?a.setAttribute(u,m):a.removeAttribute(u);break;case"rowSpan":case"start":m==null||typeof m=="function"||typeof m=="symbol"||isNaN(m)?a.removeAttribute(u):a.setAttribute(u,m);break;case"popover":Bt("beforetoggle",a),Bt("toggle",a),Aa(a,"popover",m);break;case"xlinkActuate":Zs(a,"http://www.w3.org/1999/xlink","xlink:actuate",m);break;case"xlinkArcrole":Zs(a,"http://www.w3.org/1999/xlink","xlink:arcrole",m);break;case"xlinkRole":Zs(a,"http://www.w3.org/1999/xlink","xlink:role",m);break;case"xlinkShow":Zs(a,"http://www.w3.org/1999/xlink","xlink:show",m);break;case"xlinkTitle":Zs(a,"http://www.w3.org/1999/xlink","xlink:title",m);break;case"xlinkType":Zs(a,"http://www.w3.org/1999/xlink","xlink:type",m);break;case"xmlBase":Zs(a,"http://www.w3.org/XML/1998/namespace","xml:base",m);break;case"xmlLang":Zs(a,"http://www.w3.org/XML/1998/namespace","xml:lang",m);break;case"xmlSpace":Zs(a,"http://www.w3.org/XML/1998/namespace","xml:space",m);break;case"is":Aa(a,"is",m);break;case"innerText":case"textContent":break;default:(!(2<u.length)||u[0]!=="o"&&u[0]!=="O"||u[1]!=="n"&&u[1]!=="N")&&(u=Sh.get(u)||u,Aa(a,u,m))}}function p_(a,c,u,m,S,E){switch(u){case"style":Cl(a,m,E);break;case"dangerouslySetInnerHTML":if(m!=null){if(typeof m!="object"||!("__html"in m))throw Error(i(61));if(u=m.__html,u!=null){if(S.children!=null)throw Error(i(60));a.innerHTML=u}}break;case"children":typeof m=="string"?Jr(a,m):(typeof m=="number"||typeof m=="bigint")&&Jr(a,""+m);break;case"onScroll":m!=null&&Bt("scroll",a);break;case"onScrollEnd":m!=null&&Bt("scrollend",a);break;case"onClick":m!=null&&(a.onclick=Qs);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!xl.hasOwnProperty(u))e:{if(u[0]==="o"&&u[1]==="n"&&(S=u.endsWith("Capture"),c=u.slice(2,S?u.length-7:void 0),E=a[Qi]||null,E=E!=null?E[u]:null,typeof E=="function"&&a.removeEventListener(c,E,S),typeof m=="function")){typeof E!="function"&&E!==null&&(u in a?a[u]=null:a.hasAttribute(u)&&a.removeAttribute(u)),a.addEventListener(c,m,S);break e}u in a?a[u]=m:m===!0?a.setAttribute(u,""):Aa(a,u,m)}}}function ss(a,c,u){switch(c){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Bt("error",a),Bt("load",a);var m=!1,S=!1,E;for(E in u)if(u.hasOwnProperty(E)){var F=u[E];if(F!=null)switch(E){case"src":m=!0;break;case"srcSet":S=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,c));default:fi(a,c,E,F,u,null)}}S&&fi(a,c,"srcSet",u.srcSet,u,null),m&&fi(a,c,"src",u.src,u,null);return;case"input":Bt("invalid",a);var Y=E=F=S=null,ce=null,Ee=null;for(m in u)if(u.hasOwnProperty(m)){var Me=u[m];if(Me!=null)switch(m){case"name":S=Me;break;case"type":F=Me;break;case"checked":ce=Me;break;case"defaultChecked":Ee=Me;break;case"value":E=Me;break;case"defaultValue":Y=Me;break;case"children":case"dangerouslySetInnerHTML":if(Me!=null)throw Error(i(137,c));break;default:fi(a,c,m,Me,u,null)}}bl(a,E,Y,ce,Ee,F,S,!1);return;case"select":Bt("invalid",a),m=F=E=null;for(S in u)if(u.hasOwnProperty(S)&&(Y=u[S],Y!=null))switch(S){case"value":E=Y;break;case"defaultValue":F=Y;break;case"multiple":m=Y;default:fi(a,c,S,Y,u,null)}c=E,u=F,a.multiple=!!m,c!=null?$r(a,!!m,c,!1):u!=null&&$r(a,!!m,u,!0);return;case"textarea":Bt("invalid",a),E=S=m=null;for(F in u)if(u.hasOwnProperty(F)&&(Y=u[F],Y!=null))switch(F){case"value":m=Y;break;case"defaultValue":S=Y;break;case"children":E=Y;break;case"dangerouslySetInnerHTML":if(Y!=null)throw Error(i(91));break;default:fi(a,c,F,Y,u,null)}Rl(a,m,S,E);return;case"option":for(ce in u)if(u.hasOwnProperty(ce)&&(m=u[ce],m!=null))switch(ce){case"selected":a.selected=m&&typeof m!="function"&&typeof m!="symbol";break;default:fi(a,c,ce,m,u,null)}return;case"dialog":Bt("beforetoggle",a),Bt("toggle",a),Bt("cancel",a),Bt("close",a);break;case"iframe":case"object":Bt("load",a);break;case"video":case"audio":for(m=0;m<Ic.length;m++)Bt(Ic[m],a);break;case"image":Bt("error",a),Bt("load",a);break;case"details":Bt("toggle",a);break;case"embed":case"source":case"link":Bt("error",a),Bt("load",a);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Ee in u)if(u.hasOwnProperty(Ee)&&(m=u[Ee],m!=null))switch(Ee){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,c));default:fi(a,c,Ee,m,u,null)}return;default:if(fo(c)){for(Me in u)u.hasOwnProperty(Me)&&(m=u[Me],m!==void 0&&p_(a,c,Me,m,u,void 0));return}}for(Y in u)u.hasOwnProperty(Y)&&(m=u[Y],m!=null&&fi(a,c,Y,m,u,null))}function AD(a,c,u,m){switch(c){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var S=null,E=null,F=null,Y=null,ce=null,Ee=null,Me=null;for(be in u){var Le=u[be];if(u.hasOwnProperty(be)&&Le!=null)switch(be){case"checked":break;case"value":break;case"defaultValue":ce=Le;default:m.hasOwnProperty(be)||fi(a,c,be,null,m,Le)}}for(var ye in m){var be=m[ye];if(Le=u[ye],m.hasOwnProperty(ye)&&(be!=null||Le!=null))switch(ye){case"type":E=be;break;case"name":S=be;break;case"checked":Ee=be;break;case"defaultChecked":Me=be;break;case"value":F=be;break;case"defaultValue":Y=be;break;case"children":case"dangerouslySetInnerHTML":if(be!=null)throw Error(i(137,c));break;default:be!==Le&&fi(a,c,ye,be,m,Le)}}co(a,F,Y,ce,Ee,Me,E,S);return;case"select":be=F=Y=ye=null;for(E in u)if(ce=u[E],u.hasOwnProperty(E)&&ce!=null)switch(E){case"value":break;case"multiple":be=ce;default:m.hasOwnProperty(E)||fi(a,c,E,null,m,ce)}for(S in m)if(E=m[S],ce=u[S],m.hasOwnProperty(S)&&(E!=null||ce!=null))switch(S){case"value":ye=E;break;case"defaultValue":Y=E;break;case"multiple":F=E;default:E!==ce&&fi(a,c,S,E,m,ce)}c=Y,u=F,m=be,ye!=null?$r(a,!!u,ye,!1):!!m!=!!u&&(c!=null?$r(a,!!u,c,!0):$r(a,!!u,u?[]:"",!1));return;case"textarea":be=ye=null;for(Y in u)if(S=u[Y],u.hasOwnProperty(Y)&&S!=null&&!m.hasOwnProperty(Y))switch(Y){case"value":break;case"children":break;default:fi(a,c,Y,null,m,S)}for(F in m)if(S=m[F],E=u[F],m.hasOwnProperty(F)&&(S!=null||E!=null))switch(F){case"value":ye=S;break;case"defaultValue":be=S;break;case"children":break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(i(91));break;default:S!==E&&fi(a,c,F,S,m,E)}Al(a,ye,be);return;case"option":for(var rt in u)if(ye=u[rt],u.hasOwnProperty(rt)&&ye!=null&&!m.hasOwnProperty(rt))switch(rt){case"selected":a.selected=!1;break;default:fi(a,c,rt,null,m,ye)}for(ce in m)if(ye=m[ce],be=u[ce],m.hasOwnProperty(ce)&&ye!==be&&(ye!=null||be!=null))switch(ce){case"selected":a.selected=ye&&typeof ye!="function"&&typeof ye!="symbol";break;default:fi(a,c,ce,ye,m,be)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var mt in u)ye=u[mt],u.hasOwnProperty(mt)&&ye!=null&&!m.hasOwnProperty(mt)&&fi(a,c,mt,null,m,ye);for(Ee in m)if(ye=m[Ee],be=u[Ee],m.hasOwnProperty(Ee)&&ye!==be&&(ye!=null||be!=null))switch(Ee){case"children":case"dangerouslySetInnerHTML":if(ye!=null)throw Error(i(137,c));break;default:fi(a,c,Ee,ye,m,be)}return;default:if(fo(c)){for(var ui in u)ye=u[ui],u.hasOwnProperty(ui)&&ye!==void 0&&!m.hasOwnProperty(ui)&&p_(a,c,ui,void 0,m,ye);for(Me in m)ye=m[Me],be=u[Me],!m.hasOwnProperty(Me)||ye===be||ye===void 0&&be===void 0||p_(a,c,Me,ye,m,be);return}}for(var ve in u)ye=u[ve],u.hasOwnProperty(ve)&&ye!=null&&!m.hasOwnProperty(ve)&&fi(a,c,ve,null,m,ye);for(Le in m)ye=m[Le],be=u[Le],!m.hasOwnProperty(Le)||ye===be||ye==null&&be==null||fi(a,c,Le,ye,m,be)}function vS(a){switch(a){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function RD(){if(typeof performance.getEntriesByType=="function"){for(var a=0,c=0,u=performance.getEntriesByType("resource"),m=0;m<u.length;m++){var S=u[m],E=S.transferSize,F=S.initiatorType,Y=S.duration;if(E&&Y&&vS(F)){for(F=0,Y=S.responseEnd,m+=1;m<u.length;m++){var ce=u[m],Ee=ce.startTime;if(Ee>Y)break;var Me=ce.transferSize,Le=ce.initiatorType;Me&&vS(Le)&&(ce=ce.responseEnd,F+=Me*(ce<Y?1:(Y-Ee)/(ce-Ee)))}if(--m,c+=8*(E+F)/(S.duration/1e3),a++,10<a)break}}if(0<a)return c/a/1e6}return navigator.connection&&(a=navigator.connection.downlink,typeof a=="number")?a:5}var g_=null,v_=null;function jf(a){return a.nodeType===9?a:a.ownerDocument}function xS(a){switch(a){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function SS(a,c){if(a===0)switch(c){case"svg":return 1;case"math":return 2;default:return 0}return a===1&&c==="foreignObject"?0:a}function x_(a,c){return a==="textarea"||a==="noscript"||typeof c.children=="string"||typeof c.children=="number"||typeof c.children=="bigint"||typeof c.dangerouslySetInnerHTML=="object"&&c.dangerouslySetInnerHTML!==null&&c.dangerouslySetInnerHTML.__html!=null}var S_=null;function ID(){var a=window.event;return a&&a.type==="popstate"?a===S_?!1:(S_=a,!0):(S_=null,!1)}var TS=typeof setTimeout=="function"?setTimeout:void 0,CD=typeof clearTimeout=="function"?clearTimeout:void 0,ES=typeof Promise=="function"?Promise:void 0,MD=typeof queueMicrotask=="function"?queueMicrotask:typeof ES<"u"?function(a){return ES.resolve(null).then(a).catch(DD)}:TS;function DD(a){setTimeout(function(){throw a})}function oa(a){return a==="head"}function yS(a,c){var u=c,m=0;do{var S=u.nextSibling;if(a.removeChild(u),S&&S.nodeType===8)if(u=S.data,u==="/$"||u==="/&"){if(m===0){a.removeChild(S),el(c);return}m--}else if(u==="$"||u==="$?"||u==="$~"||u==="$!"||u==="&")m++;else if(u==="html")Mc(a.ownerDocument.documentElement);else if(u==="head"){u=a.ownerDocument.head,Mc(u);for(var E=u.firstChild;E;){var F=E.nextSibling,Y=E.nodeName;E[Ln]||Y==="SCRIPT"||Y==="STYLE"||Y==="LINK"&&E.rel.toLowerCase()==="stylesheet"||u.removeChild(E),E=F}}else u==="body"&&Mc(a.ownerDocument.body);u=S}while(u);el(c)}function bS(a,c){var u=a;a=0;do{var m=u.nextSibling;if(u.nodeType===1?c?(u._stashedDisplay=u.style.display,u.style.display="none"):(u.style.display=u._stashedDisplay||"",u.getAttribute("style")===""&&u.removeAttribute("style")):u.nodeType===3&&(c?(u._stashedText=u.nodeValue,u.nodeValue=""):u.nodeValue=u._stashedText||""),m&&m.nodeType===8)if(u=m.data,u==="/$"){if(a===0)break;a--}else u!=="$"&&u!=="$?"&&u!=="$~"&&u!=="$!"||a++;u=m}while(u)}function T_(a){var c=a.firstChild;for(c&&c.nodeType===10&&(c=c.nextSibling);c;){var u=c;switch(c=c.nextSibling,u.nodeName){case"HTML":case"HEAD":case"BODY":T_(u),oo(u);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(u.rel.toLowerCase()==="stylesheet")continue}a.removeChild(u)}}function PD(a,c,u,m){for(;a.nodeType===1;){var S=u;if(a.nodeName.toLowerCase()!==c.toLowerCase()){if(!m&&(a.nodeName!=="INPUT"||a.type!=="hidden"))break}else if(m){if(!a[Ln])switch(c){case"meta":if(!a.hasAttribute("itemprop"))break;return a;case"link":if(E=a.getAttribute("rel"),E==="stylesheet"&&a.hasAttribute("data-precedence"))break;if(E!==S.rel||a.getAttribute("href")!==(S.href==null||S.href===""?null:S.href)||a.getAttribute("crossorigin")!==(S.crossOrigin==null?null:S.crossOrigin)||a.getAttribute("title")!==(S.title==null?null:S.title))break;return a;case"style":if(a.hasAttribute("data-precedence"))break;return a;case"script":if(E=a.getAttribute("src"),(E!==(S.src==null?null:S.src)||a.getAttribute("type")!==(S.type==null?null:S.type)||a.getAttribute("crossorigin")!==(S.crossOrigin==null?null:S.crossOrigin))&&E&&a.hasAttribute("async")&&!a.hasAttribute("itemprop"))break;return a;default:return a}}else if(c==="input"&&a.type==="hidden"){var E=S.name==null?null:""+S.name;if(S.type==="hidden"&&a.getAttribute("name")===E)return a}else return a;if(a=or(a.nextSibling),a===null)break}return null}function wD(a,c,u){if(c==="")return null;for(;a.nodeType!==3;)if((a.nodeType!==1||a.nodeName!=="INPUT"||a.type!=="hidden")&&!u||(a=or(a.nextSibling),a===null))return null;return a}function AS(a,c){for(;a.nodeType!==8;)if((a.nodeType!==1||a.nodeName!=="INPUT"||a.type!=="hidden")&&!c||(a=or(a.nextSibling),a===null))return null;return a}function E_(a){return a.data==="$?"||a.data==="$~"}function y_(a){return a.data==="$!"||a.data==="$?"&&a.ownerDocument.readyState!=="loading"}function OD(a,c){var u=a.ownerDocument;if(a.data==="$~")a._reactRetry=c;else if(a.data!=="$?"||u.readyState!=="loading")c();else{var m=function(){c(),u.removeEventListener("DOMContentLoaded",m)};u.addEventListener("DOMContentLoaded",m),a._reactRetry=m}}function or(a){for(;a!=null;a=a.nextSibling){var c=a.nodeType;if(c===1||c===3)break;if(c===8){if(c=a.data,c==="$"||c==="$!"||c==="$?"||c==="$~"||c==="&"||c==="F!"||c==="F")break;if(c==="/$"||c==="/&")return null}}return a}var b_=null;function RS(a){a=a.nextSibling;for(var c=0;a;){if(a.nodeType===8){var u=a.data;if(u==="/$"||u==="/&"){if(c===0)return or(a.nextSibling);c--}else u!=="$"&&u!=="$!"&&u!=="$?"&&u!=="$~"&&u!=="&"||c++}a=a.nextSibling}return null}function IS(a){a=a.previousSibling;for(var c=0;a;){if(a.nodeType===8){var u=a.data;if(u==="$"||u==="$!"||u==="$?"||u==="$~"||u==="&"){if(c===0)return a;c--}else u!=="/$"&&u!=="/&"||c++}a=a.previousSibling}return null}function CS(a,c,u){switch(c=jf(u),a){case"html":if(a=c.documentElement,!a)throw Error(i(452));return a;case"head":if(a=c.head,!a)throw Error(i(453));return a;case"body":if(a=c.body,!a)throw Error(i(454));return a;default:throw Error(i(451))}}function Mc(a){for(var c=a.attributes;c.length;)a.removeAttributeNode(c[0]);oo(a)}var lr=new Map,MS=new Set;function Kf(a){return typeof a.getRootNode=="function"?a.getRootNode():a.nodeType===9?a:a.ownerDocument}var Sn=J.d;J.d={f:LD,r:FD,D:ND,C:UD,L:BD,m:VD,X:kD,S:zD,M:GD};function LD(){var a=Sn.f(),c=zf();return a||c}function FD(a){var c=Kr(a);c!==null&&c.tag===5&&c.type==="form"?Y0(c):Sn.r(a)}var Qo=typeof document>"u"?null:document;function DS(a,c,u){var m=Qo;if(m&&typeof c=="string"&&c){var S=gs(c);S='link[rel="'+a+'"][href="'+S+'"]',typeof u=="string"&&(S+='[crossorigin="'+u+'"]'),MS.has(S)||(MS.add(S),a={rel:a,crossOrigin:u,href:c},m.querySelector(S)===null&&(c=m.createElement("link"),ss(c,"link",a),wi(c),m.head.appendChild(c)))}}function ND(a){Sn.D(a),DS("dns-prefetch",a,null)}function UD(a,c){Sn.C(a,c),DS("preconnect",a,c)}function BD(a,c,u){Sn.L(a,c,u);var m=Qo;if(m&&a&&c){var S='link[rel="preload"][as="'+gs(c)+'"]';c==="image"&&u&&u.imageSrcSet?(S+='[imagesrcset="'+gs(u.imageSrcSet)+'"]',typeof u.imageSizes=="string"&&(S+='[imagesizes="'+gs(u.imageSizes)+'"]')):S+='[href="'+gs(a)+'"]';var E=S;switch(c){case"style":E=$o(a);break;case"script":E=Jo(a)}lr.has(E)||(a=_({rel:"preload",href:c==="image"&&u&&u.imageSrcSet?void 0:a,as:c},u),lr.set(E,a),m.querySelector(S)!==null||c==="style"&&m.querySelector(Dc(E))||c==="script"&&m.querySelector(Pc(E))||(c=m.createElement("link"),ss(c,"link",a),wi(c),m.head.appendChild(c)))}}function VD(a,c){Sn.m(a,c);var u=Qo;if(u&&a){var m=c&&typeof c.as=="string"?c.as:"script",S='link[rel="modulepreload"][as="'+gs(m)+'"][href="'+gs(a)+'"]',E=S;switch(m){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":E=Jo(a)}if(!lr.has(E)&&(a=_({rel:"modulepreload",href:a},c),lr.set(E,a),u.querySelector(S)===null)){switch(m){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(u.querySelector(Pc(E)))return}m=u.createElement("link"),ss(m,"link",a),wi(m),u.head.appendChild(m)}}}function zD(a,c,u){Sn.S(a,c,u);var m=Qo;if(m&&a){var S=Zr(m).hoistableStyles,E=$o(a);c=c||"default";var F=S.get(E);if(!F){var Y={loading:0,preload:null};if(F=m.querySelector(Dc(E)))Y.loading=5;else{a=_({rel:"stylesheet",href:a,"data-precedence":c},u),(u=lr.get(E))&&A_(a,u);var ce=F=m.createElement("link");wi(ce),ss(ce,"link",a),ce._p=new Promise(function(Ee,Me){ce.onload=Ee,ce.onerror=Me}),ce.addEventListener("load",function(){Y.loading|=1}),ce.addEventListener("error",function(){Y.loading|=2}),Y.loading|=4,Zf(F,c,m)}F={type:"stylesheet",instance:F,count:1,state:Y},S.set(E,F)}}}function kD(a,c){Sn.X(a,c);var u=Qo;if(u&&a){var m=Zr(u).hoistableScripts,S=Jo(a),E=m.get(S);E||(E=u.querySelector(Pc(S)),E||(a=_({src:a,async:!0},c),(c=lr.get(S))&&R_(a,c),E=u.createElement("script"),wi(E),ss(E,"link",a),u.head.appendChild(E)),E={type:"script",instance:E,count:1,state:null},m.set(S,E))}}function GD(a,c){Sn.M(a,c);var u=Qo;if(u&&a){var m=Zr(u).hoistableScripts,S=Jo(a),E=m.get(S);E||(E=u.querySelector(Pc(S)),E||(a=_({src:a,async:!0,type:"module"},c),(c=lr.get(S))&&R_(a,c),E=u.createElement("script"),wi(E),ss(E,"link",a),u.head.appendChild(E)),E={type:"script",instance:E,count:1,state:null},m.set(S,E))}}function PS(a,c,u,m){var S=(S=ee.current)?Kf(S):null;if(!S)throw Error(i(446));switch(a){case"meta":case"title":return null;case"style":return typeof u.precedence=="string"&&typeof u.href=="string"?(c=$o(u.href),u=Zr(S).hoistableStyles,m=u.get(c),m||(m={type:"style",instance:null,count:0,state:null},u.set(c,m)),m):{type:"void",instance:null,count:0,state:null};case"link":if(u.rel==="stylesheet"&&typeof u.href=="string"&&typeof u.precedence=="string"){a=$o(u.href);var E=Zr(S).hoistableStyles,F=E.get(a);if(F||(S=S.ownerDocument||S,F={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},E.set(a,F),(E=S.querySelector(Dc(a)))&&!E._p&&(F.instance=E,F.state.loading=5),lr.has(a)||(u={rel:"preload",as:"style",href:u.href,crossOrigin:u.crossOrigin,integrity:u.integrity,media:u.media,hrefLang:u.hrefLang,referrerPolicy:u.referrerPolicy},lr.set(a,u),E||XD(S,a,u,F.state))),c&&m===null)throw Error(i(528,""));return F}if(c&&m!==null)throw Error(i(529,""));return null;case"script":return c=u.async,u=u.src,typeof u=="string"&&c&&typeof c!="function"&&typeof c!="symbol"?(c=Jo(u),u=Zr(S).hoistableScripts,m=u.get(c),m||(m={type:"script",instance:null,count:0,state:null},u.set(c,m)),m):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,a))}}function $o(a){return'href="'+gs(a)+'"'}function Dc(a){return'link[rel="stylesheet"]['+a+"]"}function wS(a){return _({},a,{"data-precedence":a.precedence,precedence:null})}function XD(a,c,u,m){a.querySelector('link[rel="preload"][as="style"]['+c+"]")?m.loading=1:(c=a.createElement("link"),m.preload=c,c.addEventListener("load",function(){return m.loading|=1}),c.addEventListener("error",function(){return m.loading|=2}),ss(c,"link",u),wi(c),a.head.appendChild(c))}function Jo(a){return'[src="'+gs(a)+'"]'}function Pc(a){return"script[async]"+a}function OS(a,c,u){if(c.count++,c.instance===null)switch(c.type){case"style":var m=a.querySelector('style[data-href~="'+gs(u.href)+'"]');if(m)return c.instance=m,wi(m),m;var S=_({},u,{"data-href":u.href,"data-precedence":u.precedence,href:null,precedence:null});return m=(a.ownerDocument||a).createElement("style"),wi(m),ss(m,"style",S),Zf(m,u.precedence,a),c.instance=m;case"stylesheet":S=$o(u.href);var E=a.querySelector(Dc(S));if(E)return c.state.loading|=4,c.instance=E,wi(E),E;m=wS(u),(S=lr.get(S))&&A_(m,S),E=(a.ownerDocument||a).createElement("link"),wi(E);var F=E;return F._p=new Promise(function(Y,ce){F.onload=Y,F.onerror=ce}),ss(E,"link",m),c.state.loading|=4,Zf(E,u.precedence,a),c.instance=E;case"script":return E=Jo(u.src),(S=a.querySelector(Pc(E)))?(c.instance=S,wi(S),S):(m=u,(S=lr.get(E))&&(m=_({},u),R_(m,S)),a=a.ownerDocument||a,S=a.createElement("script"),wi(S),ss(S,"link",m),a.head.appendChild(S),c.instance=S);case"void":return null;default:throw Error(i(443,c.type))}else c.type==="stylesheet"&&(c.state.loading&4)===0&&(m=c.instance,c.state.loading|=4,Zf(m,u.precedence,a));return c.instance}function Zf(a,c,u){for(var m=u.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),S=m.length?m[m.length-1]:null,E=S,F=0;F<m.length;F++){var Y=m[F];if(Y.dataset.precedence===c)E=Y;else if(E!==S)break}E?E.parentNode.insertBefore(a,E.nextSibling):(c=u.nodeType===9?u.head:u,c.insertBefore(a,c.firstChild))}function A_(a,c){a.crossOrigin==null&&(a.crossOrigin=c.crossOrigin),a.referrerPolicy==null&&(a.referrerPolicy=c.referrerPolicy),a.title==null&&(a.title=c.title)}function R_(a,c){a.crossOrigin==null&&(a.crossOrigin=c.crossOrigin),a.referrerPolicy==null&&(a.referrerPolicy=c.referrerPolicy),a.integrity==null&&(a.integrity=c.integrity)}var Qf=null;function LS(a,c,u){if(Qf===null){var m=new Map,S=Qf=new Map;S.set(u,m)}else S=Qf,m=S.get(u),m||(m=new Map,S.set(u,m));if(m.has(a))return m;for(m.set(a,null),u=u.getElementsByTagName(a),S=0;S<u.length;S++){var E=u[S];if(!(E[Ln]||E[Ni]||a==="link"&&E.getAttribute("rel")==="stylesheet")&&E.namespaceURI!=="http://www.w3.org/2000/svg"){var F=E.getAttribute(c)||"";F=a+F;var Y=m.get(F);Y?Y.push(E):m.set(F,[E])}}return m}function FS(a,c,u){a=a.ownerDocument||a,a.head.insertBefore(u,c==="title"?a.querySelector("head > title"):null)}function WD(a,c,u){if(u===1||c.itemProp!=null)return!1;switch(a){case"meta":case"title":return!0;case"style":if(typeof c.precedence!="string"||typeof c.href!="string"||c.href==="")break;return!0;case"link":if(typeof c.rel!="string"||typeof c.href!="string"||c.href===""||c.onLoad||c.onError)break;switch(c.rel){case"stylesheet":return a=c.disabled,typeof c.precedence=="string"&&a==null;default:return!0}case"script":if(c.async&&typeof c.async!="function"&&typeof c.async!="symbol"&&!c.onLoad&&!c.onError&&c.src&&typeof c.src=="string")return!0}return!1}function NS(a){return!(a.type==="stylesheet"&&(a.state.loading&3)===0)}function HD(a,c,u,m){if(u.type==="stylesheet"&&(typeof m.media!="string"||matchMedia(m.media).matches!==!1)&&(u.state.loading&4)===0){if(u.instance===null){var S=$o(m.href),E=c.querySelector(Dc(S));if(E){c=E._p,c!==null&&typeof c=="object"&&typeof c.then=="function"&&(a.count++,a=$f.bind(a),c.then(a,a)),u.state.loading|=4,u.instance=E,wi(E);return}E=c.ownerDocument||c,m=wS(m),(S=lr.get(S))&&A_(m,S),E=E.createElement("link"),wi(E);var F=E;F._p=new Promise(function(Y,ce){F.onload=Y,F.onerror=ce}),ss(E,"link",m),u.instance=E}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(u,c),(c=u.state.preload)&&(u.state.loading&3)===0&&(a.count++,u=$f.bind(a),c.addEventListener("load",u),c.addEventListener("error",u))}}var I_=0;function YD(a,c){return a.stylesheets&&a.count===0&&eu(a,a.stylesheets),0<a.count||0<a.imgCount?function(u){var m=setTimeout(function(){if(a.stylesheets&&eu(a,a.stylesheets),a.unsuspend){var E=a.unsuspend;a.unsuspend=null,E()}},6e4+c);0<a.imgBytes&&I_===0&&(I_=62500*RD());var S=setTimeout(function(){if(a.waitingForImages=!1,a.count===0&&(a.stylesheets&&eu(a,a.stylesheets),a.unsuspend)){var E=a.unsuspend;a.unsuspend=null,E()}},(a.imgBytes>I_?50:800)+c);return a.unsuspend=u,function(){a.unsuspend=null,clearTimeout(m),clearTimeout(S)}}:null}function $f(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)eu(this,this.stylesheets);else if(this.unsuspend){var a=this.unsuspend;this.unsuspend=null,a()}}}var Jf=null;function eu(a,c){a.stylesheets=null,a.unsuspend!==null&&(a.count++,Jf=new Map,c.forEach(qD,a),Jf=null,$f.call(a))}function qD(a,c){if(!(c.state.loading&4)){var u=Jf.get(a);if(u)var m=u.get(null);else{u=new Map,Jf.set(a,u);for(var S=a.querySelectorAll("link[data-precedence],style[data-precedence]"),E=0;E<S.length;E++){var F=S[E];(F.nodeName==="LINK"||F.getAttribute("media")!=="not all")&&(u.set(F.dataset.precedence,F),m=F)}m&&u.set(null,m)}S=c.instance,F=S.getAttribute("data-precedence"),E=u.get(F)||m,E===m&&u.set(null,S),u.set(F,S),this.count++,m=$f.bind(this),S.addEventListener("load",m),S.addEventListener("error",m),E?E.parentNode.insertBefore(S,E.nextSibling):(a=a.nodeType===9?a.head:a,a.insertBefore(S,a.firstChild)),c.state.loading|=4}}var wc={$$typeof:I,Provider:null,Consumer:null,_currentValue:he,_currentValue2:he,_threadCount:0};function jD(a,c,u,m,S,E,F,Y,ce){this.tag=1,this.containerInfo=a,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Et(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Et(0),this.hiddenUpdates=Et(null),this.identifierPrefix=m,this.onUncaughtError=S,this.onCaughtError=E,this.onRecoverableError=F,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=ce,this.incompleteTransitions=new Map}function US(a,c,u,m,S,E,F,Y,ce,Ee,Me,Le){return a=new jD(a,c,u,F,ce,Ee,Me,Le,Y),c=1,E===!0&&(c|=24),E=Yi(3,null,null,c),a.current=E,E.stateNode=a,c=ad(),c.refCount++,a.pooledCache=c,c.refCount++,E.memoizedState={element:m,isDehydrated:u,cache:c},hd(E),a}function BS(a){return a?(a=Ji,a):Ji}function VS(a,c,u,m,S,E){S=BS(S),m.context===null?m.context=S:m.pendingContext=S,m=Zn(c),m.payload={element:u},E=E===void 0?null:E,E!==null&&(m.callback=E),u=Qn(a,m,c),u!==null&&(Rs(u,a,c),hc(u,a,c))}function zS(a,c){if(a=a.memoizedState,a!==null&&a.dehydrated!==null){var u=a.retryLane;a.retryLane=u!==0&&u<c?u:c}}function C_(a,c){zS(a,c),(a=a.alternate)&&zS(a,c)}function kS(a){if(a.tag===13||a.tag===31){var c=et(a,67108864);c!==null&&Rs(c,a,67108864),C_(a,67108864)}}function GS(a){if(a.tag===13||a.tag===31){var c=ks();c=Rr(c);var u=et(a,c);u!==null&&Rs(u,a,c),C_(a,c)}}var tu=!0;function KD(a,c,u,m){var S=Z.T;Z.T=null;var E=J.p;try{J.p=2,M_(a,c,u,m)}finally{J.p=E,Z.T=S}}function ZD(a,c,u,m){var S=Z.T;Z.T=null;var E=J.p;try{J.p=8,M_(a,c,u,m)}finally{J.p=E,Z.T=S}}function M_(a,c,u,m){if(tu){var S=D_(m);if(S===null)m_(a,c,m,iu,u),WS(a,m);else if($D(S,a,c,u,m))m.stopPropagation();else if(WS(a,m),c&4&&-1<QD.indexOf(a)){for(;S!==null;){var E=Kr(S);if(E!==null)switch(E.tag){case 3:if(E=E.stateNode,E.current.memoizedState.isDehydrated){var F=as(E.pendingLanes);if(F!==0){var Y=E;for(Y.pendingLanes|=2,Y.entangledLanes|=2;F;){var ce=1<<31-Ri(F);Y.entanglements[1]|=ce,F&=~ce}Fr(E),(si&6)===0&&(Bf=Ne()+500,Rc(0))}}break;case 31:case 13:Y=et(E,2),Y!==null&&Rs(Y,E,2),zf(),C_(E,2)}if(E=D_(m),E===null&&m_(a,c,m,iu,u),E===S)break;S=E}S!==null&&m.stopPropagation()}else m_(a,c,m,null,u)}}function D_(a){return a=_o(a),P_(a)}var iu=null;function P_(a){if(iu=null,a=jr(a),a!==null){var c=n(a);if(c===null)a=null;else{var u=c.tag;if(u===13){if(a=o(c),a!==null)return a;a=null}else if(u===31){if(a=l(c),a!==null)return a;a=null}else if(u===3){if(c.stateNode.current.memoizedState.isDehydrated)return c.tag===3?c.stateNode.containerInfo:null;a=null}else c!==a&&(a=null)}}return iu=a,null}function XS(a){switch(a){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Lt()){case Ft:return 2;case Ot:return 8;case wt:case ei:return 32;case Nt:return 268435456;default:return 32}default:return 32}}var w_=!1,la=null,ca=null,ha=null,Oc=new Map,Lc=new Map,fa=[],QD="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function WS(a,c){switch(a){case"focusin":case"focusout":la=null;break;case"dragenter":case"dragleave":ca=null;break;case"mouseover":case"mouseout":ha=null;break;case"pointerover":case"pointerout":Oc.delete(c.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lc.delete(c.pointerId)}}function Fc(a,c,u,m,S,E){return a===null||a.nativeEvent!==E?(a={blockedOn:c,domEventName:u,eventSystemFlags:m,nativeEvent:E,targetContainers:[S]},c!==null&&(c=Kr(c),c!==null&&kS(c)),a):(a.eventSystemFlags|=m,c=a.targetContainers,S!==null&&c.indexOf(S)===-1&&c.push(S),a)}function $D(a,c,u,m,S){switch(c){case"focusin":return la=Fc(la,a,c,u,m,S),!0;case"dragenter":return ca=Fc(ca,a,c,u,m,S),!0;case"mouseover":return ha=Fc(ha,a,c,u,m,S),!0;case"pointerover":var E=S.pointerId;return Oc.set(E,Fc(Oc.get(E)||null,a,c,u,m,S)),!0;case"gotpointercapture":return E=S.pointerId,Lc.set(E,Fc(Lc.get(E)||null,a,c,u,m,S)),!0}return!1}function HS(a){var c=jr(a.target);if(c!==null){var u=n(c);if(u!==null){if(c=u.tag,c===13){if(c=o(u),c!==null){a.blockedOn=c,cs(a.priority,function(){GS(u)});return}}else if(c===31){if(c=l(u),c!==null){a.blockedOn=c,cs(a.priority,function(){GS(u)});return}}else if(c===3&&u.stateNode.current.memoizedState.isDehydrated){a.blockedOn=u.tag===3?u.stateNode.containerInfo:null;return}}}a.blockedOn=null}function su(a){if(a.blockedOn!==null)return!1;for(var c=a.targetContainers;0<c.length;){var u=D_(a.nativeEvent);if(u===null){u=a.nativeEvent;var m=new u.constructor(u.type,u);uo=m,u.target.dispatchEvent(m),uo=null}else return c=Kr(u),c!==null&&kS(c),a.blockedOn=u,!1;c.shift()}return!0}function YS(a,c,u){su(a)&&u.delete(c)}function JD(){w_=!1,la!==null&&su(la)&&(la=null),ca!==null&&su(ca)&&(ca=null),ha!==null&&su(ha)&&(ha=null),Oc.forEach(YS),Lc.forEach(YS)}function ru(a,c){a.blockedOn===c&&(a.blockedOn=null,w_||(w_=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,JD)))}var nu=null;function qS(a){nu!==a&&(nu=a,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){nu===a&&(nu=null);for(var c=0;c<a.length;c+=3){var u=a[c],m=a[c+1],S=a[c+2];if(typeof m!="function"){if(P_(m||u)===null)continue;break}var E=Kr(u);E!==null&&(a.splice(c,3),c-=3,Dd(E,{pending:!0,data:S,method:u.method,action:m},m,S))}}))}function el(a){function c(ce){return ru(ce,a)}la!==null&&ru(la,a),ca!==null&&ru(ca,a),ha!==null&&ru(ha,a),Oc.forEach(c),Lc.forEach(c);for(var u=0;u<fa.length;u++){var m=fa[u];m.blockedOn===a&&(m.blockedOn=null)}for(;0<fa.length&&(u=fa[0],u.blockedOn===null);)HS(u),u.blockedOn===null&&fa.shift();if(u=(a.ownerDocument||a).$$reactFormReplay,u!=null)for(m=0;m<u.length;m+=3){var S=u[m],E=u[m+1],F=S[Qi]||null;if(typeof E=="function")F||qS(u);else if(F){var Y=null;if(E&&E.hasAttribute("formAction")){if(S=E,F=E[Qi]||null)Y=F.formAction;else if(P_(S)!==null)continue}else Y=F.action;typeof Y=="function"?u[m+1]=Y:(u.splice(m,3),m-=3),qS(u)}}}function jS(){function a(E){E.canIntercept&&E.info==="react-transition"&&E.intercept({handler:function(){return new Promise(function(F){return S=F})},focusReset:"manual",scroll:"manual"})}function c(){S!==null&&(S(),S=null),m||setTimeout(u,20)}function u(){if(!m&&!navigation.transition){var E=navigation.currentEntry;E&&E.url!=null&&navigation.navigate(E.url,{state:E.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var m=!1,S=null;return navigation.addEventListener("navigate",a),navigation.addEventListener("navigatesuccess",c),navigation.addEventListener("navigateerror",c),setTimeout(u,100),function(){m=!0,navigation.removeEventListener("navigate",a),navigation.removeEventListener("navigatesuccess",c),navigation.removeEventListener("navigateerror",c),S!==null&&(S(),S=null)}}}function O_(a){this._internalRoot=a}au.prototype.render=O_.prototype.render=function(a){var c=this._internalRoot;if(c===null)throw Error(i(409));var u=c.current,m=ks();VS(u,m,a,c,null,null)},au.prototype.unmount=O_.prototype.unmount=function(){var a=this._internalRoot;if(a!==null){this._internalRoot=null;var c=a.containerInfo;VS(a.current,2,null,a,null,null),zf(),c[qr]=null}};function au(a){this._internalRoot=a}au.prototype.unstable_scheduleHydration=function(a){if(a){var c=ms();a={blockedOn:null,target:a,priority:c};for(var u=0;u<fa.length&&c!==0&&c<fa[u].priority;u++);fa.splice(u,0,a),u===0&&HS(a)}};var KS=e.version;if(KS!=="19.2.1")throw Error(i(527,KS,"19.2.1"));J.findDOMNode=function(a){var c=a._reactInternals;if(c===void 0)throw typeof a.render=="function"?Error(i(188)):(a=Object.keys(a).join(","),Error(i(268,a)));return a=f(c),a=a!==null?d(a):null,a=a===null?null:a.stateNode,a};var eP={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:Z,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ou=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ou.isDisabled&&ou.supportsFiber)try{Qt=ou.inject(eP),ci=ou}catch{}}return Uc.createRoot=function(a,c){if(!s(a))throw Error(i(299));var u=!1,m="",S=ix,E=sx,F=rx;return c!=null&&(c.unstable_strictMode===!0&&(u=!0),c.identifierPrefix!==void 0&&(m=c.identifierPrefix),c.onUncaughtError!==void 0&&(S=c.onUncaughtError),c.onCaughtError!==void 0&&(E=c.onCaughtError),c.onRecoverableError!==void 0&&(F=c.onRecoverableError)),c=US(a,1,!1,null,null,u,m,null,S,E,F,jS),a[qr]=c.current,__(a),new O_(c)},Uc.hydrateRoot=function(a,c,u){if(!s(a))throw Error(i(299));var m=!1,S="",E=ix,F=sx,Y=rx,ce=null;return u!=null&&(u.unstable_strictMode===!0&&(m=!0),u.identifierPrefix!==void 0&&(S=u.identifierPrefix),u.onUncaughtError!==void 0&&(E=u.onUncaughtError),u.onCaughtError!==void 0&&(F=u.onCaughtError),u.onRecoverableError!==void 0&&(Y=u.onRecoverableError),u.formState!==void 0&&(ce=u.formState)),c=US(a,1,!0,c,u??null,m,S,ce,E,F,Y,jS),c.context=BS(null),u=c.current,m=ks(),m=Rr(m),S=Zn(m),S.callback=null,Qn(u,S,m),u=m,c.current.lanes=u,Ye(c,u),Fr(c),a[qr]=c.current,__(a),new au(c)},Uc.version="19.2.1",Uc}var nT;function hP(){if(nT)return F_.exports;nT=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),F_.exports=cP(),F_.exports}var fP=hP(),Xs=uv();const uP=typeof WeakRef<"u";class dP{constructor(e,t=!1,i,s){this.initialize(e,t,i,s)}initialize(e,t=!1,i,s){return this.mask=e,this.skipNextObservers=t,this.target=i,this.currentTarget=s,this}}class _P{constructor(e,t,i=null){this.callback=e,this.mask=t,this.scope=i,this._willBeUnregistered=!1,this.unregisterOnNextCall=!1,this._remove=null}remove(e=!1){this._remove&&this._remove(e)}}class Ae{static FromPromise(e,t){const i=new Ae;return e.then(s=>{i.notifyObservers(s)}).catch(s=>{if(t)t.notifyObservers(s);else throw s}),i}get observers(){return this._observers}constructor(e,t=!1){this.notifyIfTriggered=t,this._observers=new Array,this._numObserversMarkedAsDeleted=0,this._hasNotified=!1,this._eventState=new dP(0),e&&(this._onObserverAdded=e)}add(e,t=-1,i=!1,s=null,n=!1){if(!e)return null;const o=new _P(e,t,s);o.unregisterOnNextCall=n,i?this._observers.unshift(o):this._observers.push(o),this._onObserverAdded&&this._onObserverAdded(o),this._hasNotified&&this.notifyIfTriggered&&this.notifyObserver(o,this._lastNotifiedValue);const l=uP?new WeakRef(this):{deref:()=>this};return o._remove=(h=!1)=>{const f=l.deref();f&&(h?f.remove(o):f._remove(o))},o}addOnce(e){return this.add(e,void 0,void 0,void 0,!0)}remove(e){return e?(e._remove=null,this._observers.indexOf(e)!==-1?(this._deferUnregister(e),!0):!1):!1}removeCallback(e,t){for(let i=0;i<this._observers.length;i++){const s=this._observers[i];if(!s._willBeUnregistered&&s.callback===e&&(!t||t===s.scope))return this._deferUnregister(s),!0}return!1}_deferUnregister(e){e._willBeUnregistered||(this._numObserversMarkedAsDeleted++,e.unregisterOnNextCall=!1,e._willBeUnregistered=!0,setTimeout(()=>{this._remove(e)},0))}_remove(e,t=!0){if(!e)return!1;const i=this._observers.indexOf(e);return i!==-1?(t&&this._numObserversMarkedAsDeleted--,this._observers.splice(i,1),!0):!1}makeObserverTopPriority(e){this._remove(e,!1),this._observers.unshift(e)}makeObserverBottomPriority(e){this._remove(e,!1),this._observers.push(e)}notifyObservers(e,t=-1,i,s,n){if(this.notifyIfTriggered&&(this._hasNotified=!0,this._lastNotifiedValue=e),!this._observers.length)return!0;const o=this._eventState;o.mask=t,o.target=i,o.currentTarget=s,o.skipNextObservers=!1,o.lastReturnValue=e,o.userInfo=n;for(const l of this._observers)if(!l._willBeUnregistered&&(l.mask&t&&(l.unregisterOnNextCall&&this._deferUnregister(l),l.scope?o.lastReturnValue=l.callback.apply(l.scope,[e,o]):o.lastReturnValue=l.callback(e,o)),o.skipNextObservers))return!1;return!0}notifyObserver(e,t,i=-1){if(this.notifyIfTriggered&&(this._hasNotified=!0,this._lastNotifiedValue=t),e._willBeUnregistered)return;const s=this._eventState;s.mask=i,s.skipNextObservers=!1,e.unregisterOnNextCall&&this._deferUnregister(e),e.callback(t,s)}hasObservers(){return this._observers.length-this._numObserversMarkedAsDeleted>0}clear(){for(;this._observers.length;){const e=this._observers.pop();e&&(e._remove=null)}this._onObserverAdded=null,this._numObserversMarkedAsDeleted=0,this.cleanLastNotifiedState()}cleanLastNotifiedState(){this._hasNotified=!1,this._lastNotifiedValue=void 0}clone(){const e=new Ae;return e._observers=this._observers.slice(0),e}hasSpecificMask(e=-1){for(const t of this._observers)if(t.mask&e||t.mask===e)return!0;return!1}}class mP{get wrapU(){return this._cachedWrapU}set wrapU(e){this._cachedWrapU=e}get wrapV(){return this._cachedWrapV}set wrapV(e){this._cachedWrapV=e}get wrapR(){return this._cachedWrapR}set wrapR(e){this._cachedWrapR=e}get anisotropicFilteringLevel(){return this._cachedAnisotropicFilteringLevel}set anisotropicFilteringLevel(e){this._cachedAnisotropicFilteringLevel=e}get comparisonFunction(){return this._comparisonFunction}set comparisonFunction(e){this._comparisonFunction=e}get useMipMaps(){return this._useMipMaps}set useMipMaps(e){this._useMipMaps=e}constructor(){this.samplingMode=-1,this._useMipMaps=!0,this._cachedWrapU=null,this._cachedWrapV=null,this._cachedWrapR=null,this._cachedAnisotropicFilteringLevel=null,this._comparisonFunction=0}setParameters(e=1,t=1,i=1,s=1,n=2,o=0){return this._cachedWrapU=e,this._cachedWrapV=t,this._cachedWrapR=i,this._cachedAnisotropicFilteringLevel=s,this.samplingMode=n,this._comparisonFunction=o,this}compareSampler(e){return this._cachedWrapU===e._cachedWrapU&&this._cachedWrapV===e._cachedWrapV&&this._cachedWrapR===e._cachedWrapR&&this._cachedAnisotropicFilteringLevel===e._cachedAnisotropicFilteringLevel&&this.samplingMode===e.samplingMode&&this._comparisonFunction===e._comparisonFunction&&this._useMipMaps===e._useMipMaps}}var aT;(function(r){r[r.Unknown=0]="Unknown",r[r.Url=1]="Url",r[r.Temp=2]="Temp",r[r.Raw=3]="Raw",r[r.Dynamic=4]="Dynamic",r[r.RenderTarget=5]="RenderTarget",r[r.MultiRenderTarget=6]="MultiRenderTarget",r[r.Cube=7]="Cube",r[r.CubeRaw=8]="CubeRaw",r[r.CubePrefiltered=9]="CubePrefiltered",r[r.Raw3D=10]="Raw3D",r[r.Raw2DArray=11]="Raw2DArray",r[r.DepthStencil=12]="DepthStencil",r[r.CubeRawRGBD=13]="CubeRawRGBD",r[r.Depth=14]="Depth",r[r.External=15]="External"})(aT||(aT={}));class Zi extends mP{get useMipMaps(){return this._useMipMaps===null?this.generateMipMaps:this._useMipMaps}set useMipMaps(e){this._useMipMaps=e}get uniqueId(){return this._uniqueId}_setUniqueId(e){this._uniqueId=e}getEngine(){return this._engine}get source(){return this._source}constructor(e,t,i=!1){super(),this.isReady=!1,this.isCube=!1,this.is3D=!1,this.is2DArray=!1,this.isMultiview=!1,this.url="",this.generateMipMaps=!1,this._useMipMaps=null,this.mipLevelCount=1,this.samples=0,this.type=-1,this.format=-1,this.onLoadedObservable=new Ae,this.onErrorObservable=new Ae,this.onRebuildCallback=null,this.width=0,this.height=0,this.depth=0,this.baseWidth=0,this.baseHeight=0,this.baseDepth=0,this.invertY=!1,this._invertVScale=!1,this._associatedChannel=-1,this._source=0,this._buffer=null,this._bufferView=null,this._bufferViewArray=null,this._bufferViewArrayArray=null,this._size=0,this._extension="",this._files=null,this._workingCanvas=null,this._workingContext=null,this._cachedCoordinatesMode=null,this._isDisabled=!1,this._compression=null,this._sphericalPolynomial=null,this._sphericalPolynomialPromise=null,this._sphericalPolynomialComputed=!1,this._lodGenerationScale=0,this._lodGenerationOffset=0,this._useSRGBBuffer=!1,this._creationFlags=0,this._lodTextureHigh=null,this._lodTextureMid=null,this._lodTextureLow=null,this._isRGBD=!1,this._linearSpecularLOD=!1,this._irradianceTexture=null,this._hardwareTexture=null,this._maxLodLevel=null,this._references=1,this._gammaSpace=null,this._premulAlpha=!1,this._dynamicTextureSource=null,this._autoMSAAManagement=!1,this._engine=e,this._source=t,this._uniqueId=Zi._Counter++,i||(this._hardwareTexture=e._createHardwareTexture())}incrementReferences(){this._references++}updateSize(e,t,i=1){this._engine.updateTextureDimensions(this,e,t,i),this.width=e,this.height=t,this.depth=i,this.baseWidth=e,this.baseHeight=t,this.baseDepth=i,this._size=e*t*i}_rebuild(){if(this.isReady=!1,this._cachedCoordinatesMode=null,this._cachedWrapU=null,this._cachedWrapV=null,this._cachedWrapR=null,this._cachedAnisotropicFilteringLevel=null,this.onRebuildCallback){const t=this.onRebuildCallback(this),i=s=>{s._swapAndDie(this,!1),this.isReady=t.isReady};t.isAsync?t.proxy.then(i):i(t.proxy);return}let e;switch(this.source){case 2:break;case 1:e=this._engine.createTexture(this._originalUrl??this.url,!this.generateMipMaps,this.invertY,null,this.samplingMode,t=>{t._swapAndDie(this,!1),this.isReady=!0},null,this._buffer,void 0,this.format,this._extension,void 0,void 0,void 0,this._useSRGBBuffer);return;case 3:if(e=this._engine.createRawTexture(this._bufferView,this.baseWidth,this.baseHeight,this.format,this.generateMipMaps,this.invertY,this.samplingMode,this._compression,this.type,this._creationFlags,this._useSRGBBuffer,this.mipLevelCount),e._swapAndDie(this,!1),this._bufferViewArray)for(let t=0;t<this._bufferViewArray.length;t++){const i=this._bufferViewArray[t];i&&this._engine.updateRawTexture(this,i,this.format,this.invertY,this._compression,this.type,this._useSRGBBuffer,t)}this.isReady=!0;break;case 10:e=this._engine.createRawTexture3D(this._bufferView,this.baseWidth,this.baseHeight,this.baseDepth,this.format,this.generateMipMaps,this.invertY,this.samplingMode,this._compression,this.type),e._swapAndDie(this,!1),this.isReady=!0;break;case 11:if(e=this._engine.createRawTexture2DArray(this._bufferView,this.baseWidth,this.baseHeight,this.baseDepth,this.format,this.generateMipMaps,this.invertY,this.samplingMode,this._compression,this.type,this._creationFlags,this.mipLevelCount),e._swapAndDie(this,!1),this._bufferViewArray)for(let t=0;t<this._bufferViewArray.length;t++){const i=this._bufferViewArray[t];i&&this._engine.updateRawTexture2DArray(this,i,this.format,this.invertY,this._compression,this.type,t)}this.isReady=!0;break;case 4:e=this._engine.createDynamicTexture(this.baseWidth,this.baseHeight,this.generateMipMaps,this.samplingMode),e._swapAndDie(this,!1),this._dynamicTextureSource&&this._engine.updateDynamicTexture(this,this._dynamicTextureSource,this.invertY,this._premulAlpha,this.format,!0);break;case 7:e=this._engine.createCubeTexture(this.url,null,this._files,!this.generateMipMaps,()=>{e._swapAndDie(this,!1),this.isReady=!0},null,this.format,this._extension,!1,0,0,null,void 0,this._useSRGBBuffer,ArrayBuffer.isView(this._buffer)?this._buffer:null);return;case 8:e=this._engine.createRawCubeTexture(this._bufferViewArray,this.width,this._originalFormat??this.format,this.type,this.generateMipMaps,this.invertY,this.samplingMode,this._compression),e._swapAndDie(this,!1),this.isReady=!0;break;case 13:return;case 9:e=this._engine.createPrefilteredCubeTexture(this.url,null,this._lodGenerationScale,this._lodGenerationOffset,t=>{t&&t._swapAndDie(this,!1),this.isReady=!0},null,this.format,this._extension),e._sphericalPolynomial=this._sphericalPolynomial;return}}_swapAndDie(e,t=!0){this._hardwareTexture?.setUsage(e._source,this.generateMipMaps,this.is2DArray,this.isCube,this.is3D,this.width,this.height,this.depth),e._hardwareTexture=this._hardwareTexture,e._setUniqueId(Zi._Counter++),t&&(e._isRGBD=this._isRGBD),this._lodTextureHigh&&(e._lodTextureHigh&&e._lodTextureHigh.dispose(),e._lodTextureHigh=this._lodTextureHigh),this._lodTextureMid&&(e._lodTextureMid&&e._lodTextureMid.dispose(),e._lodTextureMid=this._lodTextureMid),this._lodTextureLow&&(e._lodTextureLow&&e._lodTextureLow.dispose(),e._lodTextureLow=this._lodTextureLow),this._irradianceTexture&&(e._irradianceTexture&&e._irradianceTexture.dispose(),e._irradianceTexture=this._irradianceTexture);const i=this._engine.getLoadedTexturesCache();let s=i.indexOf(this);s!==-1&&i.splice(s,1),s=i.indexOf(e),s===-1&&i.push(e)}dispose(){this._references--,this._references===0&&(this.onLoadedObservable.clear(),this.onErrorObservable.clear(),this._engine._releaseTexture(this),this._hardwareTexture=null,this._dynamicTextureSource=null)}}Zi._Counter=0;class St{static get LastCreatedEngine(){return this.Instances.length===0?null:this.Instances[this.Instances.length-1]}static get LastCreatedScene(){return this._LastCreatedScene}}St.Instances=[];St.OnEnginesDisposedObservable=new Ae;St._LastCreatedScene=null;St.UseFallbackTexture=!0;St.FallbackTexture="";class ge{static _CheckLimit(e,t){let i=ge._LogLimitOutputs[e];return i?i.current++:(i={limit:t,current:1},ge._LogLimitOutputs[e]=i),i.current<=i.limit}static _GenerateLimitMessage(e,t=1){const i=ge._LogLimitOutputs[e];if(!i||!ge.MessageLimitReached)return;const s=this._Levels[t];i.current===i.limit&&ge[s.name](ge.MessageLimitReached.replace(/%LIMIT%/g,""+i.limit).replace(/%TYPE%/g,s.name??""))}static _AddLogEntry(e){ge._LogCache=e+ge._LogCache,ge.OnNewCacheEntry&&ge.OnNewCacheEntry(e)}static _FormatMessage(e){const t=s=>s<10?"0"+s:""+s,i=new Date;return"["+t(i.getHours())+":"+t(i.getMinutes())+":"+t(i.getSeconds())+"]: "+e}static _LogDisabled(e,t){}static _LogEnabled(e=1,t,i){const s=Array.isArray(t)?t[0]:t;if(i!==void 0&&!ge._CheckLimit(s,i))return;const n=ge._FormatMessage(s),o=this._Levels[e],l=Array.isArray(t)?t.slice(1):[];o.logFunc&&o.logFunc("BJS - "+n,...l);const h=`<div style='color:${o.color}'>${n}</div><br>`;ge._AddLogEntry(h),ge._GenerateLimitMessage(s,e)}static get LogCache(){return ge._LogCache}static ClearLogCache(){ge._LogCache="",ge._LogLimitOutputs={},ge.errorsCount=0}static set LogLevels(e){ge.Log=ge._LogDisabled,ge.Warn=ge._LogDisabled,ge.Error=ge._LogDisabled;const t=[ge.MessageLogLevel,ge.WarningLogLevel,ge.ErrorLogLevel];for(const i of t)if((e&i)===i){const s=this._Levels[i];ge[s.name]=ge._LogEnabled.bind(ge,i)}}}ge.NoneLogLevel=0;ge.MessageLogLevel=1;ge.WarningLogLevel=2;ge.ErrorLogLevel=4;ge.AllLogLevel=7;ge.MessageLimitReached="Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.";ge._LogCache="";ge._LogLimitOutputs={};ge._Levels=[{},{color:"white",logFunc:console.log,name:"Log"},{color:"orange",logFunc:console.warn,name:"Warn"},{},{color:"red",logFunc:console.error,name:"Error"}];ge.errorsCount=0;ge.Log=ge._LogEnabled.bind(ge,ge.MessageLogLevel);ge.Warn=ge._LogEnabled.bind(ge,ge.WarningLogLevel);ge.Error=ge._LogEnabled.bind(ge,ge.ErrorLogLevel);class q{static GetShadersRepository(e=0){return e===0?q.ShadersRepository:q.ShadersRepositoryWGSL}static GetShadersStore(e=0){return e===0?q.ShadersStore:q.ShadersStoreWGSL}static GetIncludesShadersStore(e=0){return e===0?q.IncludesShadersStore:q.IncludesShadersStoreWGSL}}q.ShadersRepository="src/Shaders/";q.ShadersStore={};q.IncludesShadersStore={};q.ShadersRepositoryWGSL="src/ShadersWGSL/";q.ShadersStoreWGSL={};q.IncludesShadersStoreWGSL={};function Hi(){return typeof window<"u"}function al(){return typeof navigator<"u"}function to(){return typeof document<"u"}function uA(r){let e="",t=r.firstChild;for(;t;)t.nodeType===3&&(e+=t.textContent),t=t.nextSibling;return e}class pP{constructor(){this._valueCache={},this.vertexCompilationError=null,this.fragmentCompilationError=null,this.programLinkError=null,this.programValidationError=null,this._isDisposed=!1}get isAsync(){return this.isParallelCompiled}get isReady(){return this.program?this.isParallelCompiled?this.engine._isRenderingStateCompiled(this):!0:!1}_handlesSpectorRebuildCallback(e){e&&this.program&&e(this.program)}setEngine(e){this.engine=e}_fillEffectInformation(e,t,i,s,n,o,l,h){const f=this.engine;if(f.supportsUniformBuffers)for(const p in t)e.bindUniformBlock(p,t[p]);this.engine.getUniforms(this,i).forEach((p,g)=>{s[i[g]]=p}),this._uniforms=s;let _;for(_=0;_<n.length;_++)e.getUniform(n[_])==null&&(n.splice(_,1),_--);n.forEach((p,g)=>{o[p]=g});for(const p of f.getAttributes(this,l))h.push(p)}dispose(){this._uniforms={},this._isDisposed=!0}_cacheMatrix(e,t){const i=this._valueCache[e],s=t.updateFlag;return i!==void 0&&i===s?!1:(this._valueCache[e]=s,!0)}_cacheFloat2(e,t,i){let s=this._valueCache[e];if(!s||s.length!==2)return s=[t,i],this._valueCache[e]=s,!0;let n=!1;return s[0]!==t&&(s[0]=t,n=!0),s[1]!==i&&(s[1]=i,n=!0),n}_cacheFloat3(e,t,i,s){let n=this._valueCache[e];if(!n||n.length!==3)return n=[t,i,s],this._valueCache[e]=n,!0;let o=!1;return n[0]!==t&&(n[0]=t,o=!0),n[1]!==i&&(n[1]=i,o=!0),n[2]!==s&&(n[2]=s,o=!0),o}_cacheFloat4(e,t,i,s,n){let o=this._valueCache[e];if(!o||o.length!==4)return o=[t,i,s,n],this._valueCache[e]=o,!0;let l=!1;return o[0]!==t&&(o[0]=t,l=!0),o[1]!==i&&(o[1]=i,l=!0),o[2]!==s&&(o[2]=s,l=!0),o[3]!==n&&(o[3]=n,l=!0),l}setInt(e,t){const i=this._valueCache[e];i!==void 0&&i===t||this.engine.setInt(this._uniforms[e],t)&&(this._valueCache[e]=t)}setInt2(e,t,i){this._cacheFloat2(e,t,i)&&(this.engine.setInt2(this._uniforms[e],t,i)||(this._valueCache[e]=null))}setInt3(e,t,i,s){this._cacheFloat3(e,t,i,s)&&(this.engine.setInt3(this._uniforms[e],t,i,s)||(this._valueCache[e]=null))}setInt4(e,t,i,s,n){this._cacheFloat4(e,t,i,s,n)&&(this.engine.setInt4(this._uniforms[e],t,i,s,n)||(this._valueCache[e]=null))}setIntArray(e,t){this._valueCache[e]=null,this.engine.setIntArray(this._uniforms[e],t)}setIntArray2(e,t){this._valueCache[e]=null,this.engine.setIntArray2(this._uniforms[e],t)}setIntArray3(e,t){this._valueCache[e]=null,this.engine.setIntArray3(this._uniforms[e],t)}setIntArray4(e,t){this._valueCache[e]=null,this.engine.setIntArray4(this._uniforms[e],t)}setUInt(e,t){const i=this._valueCache[e];i!==void 0&&i===t||this.engine.setUInt(this._uniforms[e],t)&&(this._valueCache[e]=t)}setUInt2(e,t,i){this._cacheFloat2(e,t,i)&&(this.engine.setUInt2(this._uniforms[e],t,i)||(this._valueCache[e]=null))}setUInt3(e,t,i,s){this._cacheFloat3(e,t,i,s)&&(this.engine.setUInt3(this._uniforms[e],t,i,s)||(this._valueCache[e]=null))}setUInt4(e,t,i,s,n){this._cacheFloat4(e,t,i,s,n)&&(this.engine.setUInt4(this._uniforms[e],t,i,s,n)||(this._valueCache[e]=null))}setUIntArray(e,t){this._valueCache[e]=null,this.engine.setUIntArray(this._uniforms[e],t)}setUIntArray2(e,t){this._valueCache[e]=null,this.engine.setUIntArray2(this._uniforms[e],t)}setUIntArray3(e,t){this._valueCache[e]=null,this.engine.setUIntArray3(this._uniforms[e],t)}setUIntArray4(e,t){this._valueCache[e]=null,this.engine.setUIntArray4(this._uniforms[e],t)}setArray(e,t){this._valueCache[e]=null,this.engine.setArray(this._uniforms[e],t)}setArray2(e,t){this._valueCache[e]=null,this.engine.setArray2(this._uniforms[e],t)}setArray3(e,t){this._valueCache[e]=null,this.engine.setArray3(this._uniforms[e],t)}setArray4(e,t){this._valueCache[e]=null,this.engine.setArray4(this._uniforms[e],t)}setMatrices(e,t){t&&(this._valueCache[e]=null,this.engine.setMatrices(this._uniforms[e],t))}setMatrix(e,t){this._cacheMatrix(e,t)&&(this.engine.setMatrices(this._uniforms[e],t.asArray())||(this._valueCache[e]=null))}setMatrix3x3(e,t){this._valueCache[e]=null,this.engine.setMatrix3x3(this._uniforms[e],t)}setMatrix2x2(e,t){this._valueCache[e]=null,this.engine.setMatrix2x2(this._uniforms[e],t)}setFloat(e,t){const i=this._valueCache[e];i!==void 0&&i===t||this.engine.setFloat(this._uniforms[e],t)&&(this._valueCache[e]=t)}setVector2(e,t){this._cacheFloat2(e,t.x,t.y)&&(this.engine.setFloat2(this._uniforms[e],t.x,t.y)||(this._valueCache[e]=null))}setFloat2(e,t,i){this._cacheFloat2(e,t,i)&&(this.engine.setFloat2(this._uniforms[e],t,i)||(this._valueCache[e]=null))}setVector3(e,t){this._cacheFloat3(e,t.x,t.y,t.z)&&(this.engine.setFloat3(this._uniforms[e],t.x,t.y,t.z)||(this._valueCache[e]=null))}setFloat3(e,t,i,s){this._cacheFloat3(e,t,i,s)&&(this.engine.setFloat3(this._uniforms[e],t,i,s)||(this._valueCache[e]=null))}setVector4(e,t){this._cacheFloat4(e,t.x,t.y,t.z,t.w)&&(this.engine.setFloat4(this._uniforms[e],t.x,t.y,t.z,t.w)||(this._valueCache[e]=null))}setQuaternion(e,t){this._cacheFloat4(e,t.x,t.y,t.z,t.w)&&(this.engine.setFloat4(this._uniforms[e],t.x,t.y,t.z,t.w)||(this._valueCache[e]=null))}setFloat4(e,t,i,s,n){this._cacheFloat4(e,t,i,s,n)&&(this.engine.setFloat4(this._uniforms[e],t,i,s,n)||(this._valueCache[e]=null))}setColor3(e,t){this._cacheFloat3(e,t.r,t.g,t.b)&&(this.engine.setFloat3(this._uniforms[e],t.r,t.g,t.b)||(this._valueCache[e]=null))}setColor4(e,t,i){this._cacheFloat4(e,t.r,t.g,t.b,i)&&(this.engine.setFloat4(this._uniforms[e],t.r,t.g,t.b,i)||(this._valueCache[e]=null))}setDirectColor4(e,t){this._cacheFloat4(e,t.r,t.g,t.b,t.a)&&(this.engine.setFloat4(this._uniforms[e],t.r,t.g,t.b,t.a)||(this._valueCache[e]=null))}_getVertexShaderCode(){return this.vertexShader?this.engine._getShaderSource(this.vertexShader):null}_getFragmentShaderCode(){return this.fragmentShader?this.engine._getShaderSource(this.fragmentShader):null}}const oT={};function $e(r,e=!1){if(!(e&&oT[r]))return oT[r]=!0,`${r} needs to be imported before as it contains a side-effect required by your code.`}const lT={};let gP=!1,vP=0;function qe(r,e,t=!1){const i=function(){if((t||gP)&&vP===0){const s=`${r}.${e}`;lT[s]||(lT[s]=!0,console.warn(`[Babylon.js] ${s}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))}};return i.__isSideEffectStub=!0,i}function dv(r){return r?!r.__isSideEffectStub:!1}function Tt(r,e){return{get(){},set(t){Object.defineProperty(this,e,{value:t,writable:!0,configurable:!0,enumerable:!0})},configurable:!0,enumerable:!0}}const Qa={};function dA(r,e,t=""){return t+(e?e+`
`:"")+r}function _A(r,e,t,i,s,n,o){const l=o||Qa.loadFile;if(!l)throw $e("FileTools");return l(r,e,t,i,s,n)}function mA(r,e,t,i){if(r){e?r.IS_NDC_HALF_ZRANGE="":delete r.IS_NDC_HALF_ZRANGE,t?r.USE_REVERSE_DEPTHBUFFER="":delete r.USE_REVERSE_DEPTHBUFFER,i?r.USE_EXACT_SRGB_CONVERSIONS="":delete r.USE_EXACT_SRGB_CONVERSIONS;return}else{let s="";return e&&(s+="#define IS_NDC_HALF_ZRANGE"),t&&(s&&(s+=`
`),s+="#define USE_REVERSE_DEPTHBUFFER"),i&&(s&&(s+=`
`),s+="#define USE_EXACT_SRGB_CONVERSIONS"),s}}function xP(r,e,t=!1,i){switch(r){case 3:return new Int8Array(e);case 0:return new Uint8Array(e);case 4:return typeof e!="number"?new Int16Array(e):new Int16Array(t?e/2:e);case 5:case 8:case 9:case 10:case 2:return typeof e!="number"?new Uint16Array(e):new Uint16Array(t?e/2:e);case 6:return typeof e!="number"?new Int32Array(e):new Int32Array(t?e/4:e);case 7:case 11:case 12:case 13:case 14:case 15:return typeof e!="number"?new Uint32Array(e):new Uint32Array(t?e/4:e);case 1:return typeof e!="number"?new Float32Array(e):new Float32Array(t?e/4:e)}return new Uint8Array(e)}const cm=new WeakMap,SP={_webGLVersion:2,cachedPipelines:{}};function Ms(r){let e=cm.get(r);if(!e){if(!r)return SP;e={_webGLVersion:r.TEXTURE_BINDING_3D?2:1,_context:r,parallelShaderCompile:r.getExtension("KHR_parallel_shader_compile")||void 0,cachedPipelines:{}},cm.set(r,e)}return e}function z_(r){cm.delete(r)}function pA(r,e,t,i,s,n){const o=Ms(i);n||(n=o._createShaderProgramInjection??_v);const l=hm(e,"vertex",i,o._contextWasLost),h=hm(t,"fragment",i,o._contextWasLost);return n(r,l,h,i,s,o.validateShaderPrograms)}function gA(r,e,t,i,s,n=null,o){const l=Ms(s);o||(o=l._createShaderProgramInjection??_v);const h=l._webGLVersion>1?`#version 300 es
#define WEBGL2 
`:"",f=cT(e,"vertex",i,h,s,l._contextWasLost),d=cT(t,"fragment",i,h,s,l._contextWasLost);return o(r,f,d,s,n,l.validateShaderPrograms)}function TP(r,e){const t=new pP,i=Ms(r);return i.parallelShaderCompile&&!i.disableParallelShaderCompile&&(t.isParallelCompiled=!0),t.context=i._context,t}function _v(r,e,t,i,s=null,n){const o=i.createProgram();if(r.program=o,!o)throw new Error("Unable to create program");return i.attachShader(o,e),i.attachShader(o,t),i.linkProgram(o),r.context=i,r.vertexShader=e,r.fragmentShader=t,r.isParallelCompiled||mv(r,i,n),o}function EP(r,e,t){const i=r;if(i._isDisposed)return!1;const s=Ms(e);return s&&s.parallelShaderCompile&&s.parallelShaderCompile.COMPLETION_STATUS_KHR&&i.program&&e.getProgramParameter(i.program,s.parallelShaderCompile.COMPLETION_STATUS_KHR)?(mv(i,e,t),!0):!1}function mv(r,e,t){const i=r.context,s=r.vertexShader,n=r.fragmentShader,o=r.program;if(!i.getProgramParameter(o,i.LINK_STATUS)){if(!e.getShaderParameter(s,e.COMPILE_STATUS)){const f=e.getShaderInfoLog(s);if(f)throw r.vertexCompilationError=f,new Error("VERTEX SHADER "+f)}if(!e.getShaderParameter(n,e.COMPILE_STATUS)){const f=e.getShaderInfoLog(n);if(f)throw r.fragmentCompilationError=f,new Error("FRAGMENT SHADER "+f)}const h=i.getProgramInfoLog(o);if(h)throw r.programLinkError=h,new Error(h)}if(t&&(i.validateProgram(o),!i.getProgramParameter(o,i.VALIDATE_STATUS))){const f=i.getProgramInfoLog(o);if(f)throw r.programValidationError=f,new Error(f)}i.deleteShader(s),i.deleteShader(n),r.vertexShader=void 0,r.fragmentShader=void 0,r.onCompiled&&(r.onCompiled(),r.onCompiled=void 0)}function yP(r,e,t,i,s,n,o,l,h,f="",d,_,p){const g=Ms(r.context);_||(_=g.createRawShaderProgramInjection??pA),p||(p=g.createShaderProgramInjection??gA);const v=r;i?v.program=_(v,e,t,v.context,h):v.program=p(v,e,t,l,v.context,h),v.program.__SPECTOR_rebuildProgram=o,d()}function cT(r,e,t,i,s,n){return hm(dA(r,t,i),e,s,n)}function hm(r,e,t,i){const s=t.createShader(e==="vertex"?t.VERTEX_SHADER:t.FRAGMENT_SHADER);if(!s){let n=t.NO_ERROR,o;for(;(o=t.getError())!==t.NO_ERROR;)n=o;throw new Error(`Something went wrong while creating a gl ${e} shader object. gl error=${n}, gl isContextLost=${t.isContextLost()}, _contextWasLost=${i}`)}return t.shaderSource(s,r),t.compileShader(s),s}function bP(r,e){e.useProgram(r)}function AP(r,e){const t=r;if(!t.isParallelCompiled){e(r);return}const i=t.onCompiled;t.onCompiled=()=>{i?.(),e(r)}}const RP="attribute",IP="varying";class oh{constructor(){this.children=[]}isValid(e){return!0}process(e,t,i){let s="";if(this.line){let n=this.line;const o=t.processor;if(o){o.lineProcessor&&(n=o.lineProcessor(n,t.isFragment,t.processingContext));const l=t.processor?.attributeKeywordName??RP,h=t.isFragment&&t.processor?.varyingFragmentKeywordName?t.processor?.varyingFragmentKeywordName:!t.isFragment&&t.processor?.varyingVertexKeywordName?t.processor?.varyingVertexKeywordName:IP;!t.isFragment&&o.attributeProcessor&&this.line.startsWith(l)?n=o.attributeProcessor(this.line,e,t.processingContext):o.varyingProcessor&&(o.varyingCheck?.(this.line,t.isFragment)||!o.varyingCheck&&this.line.startsWith(h))?n=o.varyingProcessor(this.line,t.isFragment,e,t.processingContext):o.uniformProcessor&&o.uniformRegexp&&o.uniformRegexp.test(this.line)?t.lookForClosingBracketForUniformBuffer||(n=o.uniformProcessor(this.line,t.isFragment,e,t.processingContext)):o.uniformBufferProcessor&&o.uniformBufferRegexp&&o.uniformBufferRegexp.test(this.line)?t.lookForClosingBracketForUniformBuffer||(n=o.uniformBufferProcessor(this.line,t.isFragment,t.processingContext),t.lookForClosingBracketForUniformBuffer=!0):o.textureProcessor&&o.textureRegexp&&o.textureRegexp.test(this.line)?n=o.textureProcessor(this.line,t.isFragment,e,t.processingContext):(o.uniformProcessor||o.uniformBufferProcessor)&&this.line.startsWith("uniform")&&!t.lookForClosingBracketForUniformBuffer&&(/uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/.test(this.line)?o.uniformProcessor&&(n=o.uniformProcessor(this.line,t.isFragment,e,t.processingContext)):o.uniformBufferProcessor&&(n=o.uniformBufferProcessor(this.line,t.isFragment,t.processingContext),t.lookForClosingBracketForUniformBuffer=!0)),t.lookForClosingBracketForUniformBuffer&&this.line.indexOf("}")!==-1&&(t.lookForClosingBracketForUniformBuffer=!1,o.endOfUniformBufferProcessor&&(n=o.endOfUniformBufferProcessor(this.line,t.isFragment,t.processingContext)))}s+=n+`
`}for(const n of this.children)s+=n.process(e,t,i);return this.additionalDefineKey&&(e[this.additionalDefineKey]=this.additionalDefineValue||"true",i[this.additionalDefineKey]=e[this.additionalDefineKey]),s}}class CP{constructor(){this._lines=[]}get currentLine(){return this._lines[this.lineIndex]}get canRead(){return this.lineIndex<this._lines.length-1}set lines(e){this._lines.length=0;for(const t of e){if(!t||t==="\r")continue;if(t[0]==="#"){this._lines.push(t);continue}const i=t.trim();if(!i)continue;if(i.startsWith("//")){this._lines.push(t);continue}const s=i.indexOf(";");if(s===-1)this._lines.push(i);else if(s===i.length-1)i.length>1&&this._lines.push(i);else{const n=t.split(";");for(let o=0;o<n.length;o++){let l=n[o];l&&(l=l.trim(),l&&this._lines.push(l+(o!==n.length-1?";":"")))}}}}}class k_ extends oh{process(e,t,i){for(let s=0;s<this.children.length;s++){const n=this.children[s];if(n.isValid(e))return n.process(e,t,i)}return""}}class MP extends oh{isValid(e){return this.testExpression.isTrue(e)}}class _i{isTrue(e){return!0}static postfixToInfix(e){const t=[];for(const i of e)if(_i._OperatorPriority[i]===void 0)t.push(i);else{const s=t[t.length-1],n=t[t.length-2];t.length-=2,t.push(`(${n}${i}${s})`)}return t[t.length-1]}static infixToPostfix(e){const t=_i._InfixToPostfixCache.get(e);if(t)return t.accessTime=Date.now(),t.result;if(!e.includes("&&")&&!e.includes("||")&&!e.includes(")")&&!e.includes("("))return[e];const i=[];let s=-1;const n=()=>{d=d.trim(),d!==""&&(i.push(d),d="")},o=_=>{s<_i._Stack.length-1&&(_i._Stack[++s]=_)},l=()=>_i._Stack[s],h=()=>s===-1?"!!INVALID EXPRESSION!!":_i._Stack[s--];let f=0,d="";for(;f<e.length;){const _=e.charAt(f),p=f<e.length-1?e.substring(f,2+f):"";if(_==="(")d="",o(_);else if(_===")"){for(n();s!==-1&&l()!=="(";)i.push(h());h()}else if(_i._OperatorPriority[p]>1){for(n();s!==-1&&_i._OperatorPriority[l()]>=_i._OperatorPriority[p];)i.push(h());o(p),f++}else d+=_;f++}for(n();s!==-1;)l()==="("?h():i.push(h());return _i._InfixToPostfixCache.size>=_i.InfixToPostfixCacheLimitSize&&_i.ClearCache(),_i._InfixToPostfixCache.set(e,{result:i,accessTime:Date.now()}),i}static ClearCache(){const e=Array.from(_i._InfixToPostfixCache.entries()).sort((t,i)=>t[1].accessTime-i[1].accessTime);for(let t=0;t<_i.InfixToPostfixCacheCleanupSize;t++)_i._InfixToPostfixCache.delete(e[t][0])}}_i.InfixToPostfixCacheLimitSize=5e4;_i.InfixToPostfixCacheCleanupSize=25e3;_i._InfixToPostfixCache=new Map;_i._OperatorPriority={")":0,"(":1,"||":2,"&&":3};_i._Stack=["","","","","","","","","","","","","","","","","","","",""];class Su extends _i{constructor(e,t=!1){super(),this.define=e,this.not=t}isTrue(e){let t=e[this.define]!==void 0;return this.not&&(t=!t),t}}class DP extends _i{isTrue(e){return this.leftOperand.isTrue(e)||this.rightOperand.isTrue(e)}}class PP extends _i{isTrue(e){return this.leftOperand.isTrue(e)&&this.rightOperand.isTrue(e)}}class wP extends _i{constructor(e,t,i){super(),this.define=e,this.operand=t,this.testValue=i}toString(){return`${this.define} ${this.operand} ${this.testValue}`}isTrue(e){let t=!1;const i=parseInt(e[this.define]!=null?e[this.define]:this.define),s=parseInt(e[this.testValue]!=null?e[this.testValue]:this.testValue);if(isNaN(i)||isNaN(s))return!1;switch(this.operand){case">":t=i>s;break;case"<":t=i<s;break;case"<=":t=i<=s;break;case">=":t=i>=s;break;case"==":t=i===s;break;case"!=":t=i!==s;break}return t}}const OP=/defined\s*?\((.+?)\)/g,G_=/defined\s*?\[(.+?)\]/g,LP=/#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,FP=/__decl__/,hT=/light\{X\}.(\w*)/g,fT=/\{X\}/g,lu=[],NP=/(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;function UP(r){r.processor&&r.processor.initializeShaders&&r.processor.initializeShaders(r.processingContext)}function uT(r,e,t,i){e.processor?.preProcessShaderCode&&(r=e.processor.preProcessShaderCode(r,e.isFragment)),Tu(r,e,s=>{e.processCodeAfterIncludes&&(s=e.processCodeAfterIncludes(e.isFragment?"fragment":"vertex",s,e.defines));const n=XP(s,e,i);t(n,s)})}function BP(r,e,t){return!t.processor||!t.processor.finalizeShaders?{vertexCode:r,fragmentCode:e}:t.processor.finalizeShaders(r,e,t.processingContext)}function VP(r,e){if(e.processor?.noPrecision)return r;const t=e.shouldUseHighPrecisionShader;return r.indexOf("precision highp float")===-1?t?r=`precision highp float;
`+r:r=`precision mediump float;
`+r:t||(r=r.replace("precision highp float","precision mediump float")),r}function X_(r){const t=/defined\((.+)\)/.exec(r);if(t&&t.length)return new Su(t[1].trim(),r[0]==="!");const i=["==","!=",">=","<=","<",">"];let s="",n=0;for(s of i)if(n=r.indexOf(s),n>-1)break;if(n===-1)return new Su(r);const o=r.substring(0,n).trim(),l=r.substring(n+s.length).trim();return new wP(o,s,l)}function zP(r){r=r.replace(OP,"defined[$1]");const e=_i.infixToPostfix(r),t=[];for(const s of e)if(s!=="||"&&s!=="&&")t.push(s);else if(t.length>=2){let n=t[t.length-1],o=t[t.length-2];t.length-=2;const l=s=="&&"?new PP:new DP;typeof n=="string"&&(n=n.replace(G_,"defined($1)")),typeof o=="string"&&(o=o.replace(G_,"defined($1)")),l.leftOperand=typeof o=="string"?X_(o):o,l.rightOperand=typeof n=="string"?X_(n):n,t.push(l)}let i=t[t.length-1];return typeof i=="string"&&(i=i.replace(G_,"defined($1)")),typeof i=="string"?X_(i):i}function gu(r,e){const t=new MP,i=r.substring(0,e);let s=r.substring(e);return s=s.substring(0,(s.indexOf("//")+1||s.length+1)-1).trim(),i==="#ifdef"?t.testExpression=new Su(s):i==="#ifndef"?t.testExpression=new Su(s,!0):t.testExpression=zP(s),t}function W_(r,e,t,i){let s;for(;fm(r,t);){s=r.currentLine;const n=s.substring(0,5).toLowerCase();if(n==="#else"){const o=new oh;e.children.push(o),fm(r,o);return}else if(n==="#elif"){const o=gu(s,5);e.children.push(o),t=o}}}function fm(r,e,t){for(;r.canRead;){r.lineIndex++;const i=r.currentLine;if(i.indexOf("#")>=0){const n=NP.exec(i);if(n&&n.length){switch(n[0]){case"#ifdef":{const l=new k_;e.children.push(l);const h=gu(i,6);l.children.push(h),W_(r,l,h);break}case"#else":case"#elif":return!0;case"#endif":return!1;case"#ifndef":{const l=new k_;e.children.push(l);const h=gu(i,7);l.children.push(h),W_(r,l,h);break}case"#if":{const l=new k_,h=gu(i,3);e.children.push(l),l.children.push(h),W_(r,l,h);break}}continue}}const s=new oh;if(s.line=i,e.children.push(s),i[0]==="#"&&i[1]==="d"){const n=i.replace(";","").split(" ");s.additionalDefineKey=n[1],n.length===3&&(s.additionalDefineValue=n[2])}}return!1}function kP(r,e,t,i){const s=new oh,n=new CP;return n.lineIndex=-1,n.lines=r.split(`
`),fm(n,s),s.process(e,t,i)}function GP(r,e){const t=r.defines,i={};for(const s of t){const o=s.replace("#define","").replace(";","").trim().split(" ");i[o[0]]=o.length>1?o[1]:""}return r.processor?.shaderLanguage===0&&(i.GL_ES="true"),i.__VERSION__=r.version,i[r.platformName]="true",mA(i,e?.isNDCHalfZRange,e?.useReverseDepthBuffer,e?.useExactSrgbConversions),i}function XP(r,e,t){let i=VP(r,e);if(!e.processor||e.processor.shaderLanguage===0&&i.indexOf("#version 3")!==-1&&(i=i.replace("#version 300 es",""),!e.processor.parseGLES3))return i;const s=e.defines,n=GP(e,t);e.processor.preProcessor&&(i=e.processor.preProcessor(i,s,n,e.isFragment,e.processingContext));const o={};return i=kP(i,n,e,o),e.processor.postProcessor&&(i=e.processor.postProcessor(i,s,e.isFragment,e.processingContext,t?{drawBuffersExtensionDisabled:!t.getCaps().drawBuffersExtension}:{},n,o)),t?._features.needShaderCodeInlining&&(i=t.inlineShaderCode(i)),i}function Tu(r,e,t){lu.length=0;let i;for(;(i=LP.exec(r))!==null;)lu.push(i);let s=[r],n=!1;for(const l of lu){let h=l[1];if(h.indexOf("__decl__")!==-1&&(h=h.replace(FP,""),e.supportsUniformBuffers&&(h=h.replace("Vertex","Ubo").replace("Fragment","Ubo")),h=h+"Declaration"),e.includesShadersStore[h]){let f=e.includesShadersStore[h];if(l[2]){const _=l[3].split(",");for(let p=0;p<_.length;p+=2){const g=new RegExp(_[p],"g"),v=_[p+1];f=f.replace(g,v)}}if(l[4]){const _=l[5];if(_.indexOf("..")!==-1){const p=_.split(".."),g=parseInt(p[0]);let v=parseInt(p[1]),x=f.slice(0);f="",isNaN(v)&&(v=e.indexParameters[p[1]]);for(let T=g;T<v;T++)e.supportsUniformBuffers||(x=x.replace(hT,(y,R)=>R+"{X}")),f+=x.replace(fT,T.toString())+`
`}else e.supportsUniformBuffers||(f=f.replace(hT,(p,g)=>g+"{X}")),f=f.replace(fT,_)}const d=[];for(const _ of s){const p=_.split(l[0]);for(let g=0;g<p.length-1;g++)d.push(p[g]),d.push(f);d.push(p[p.length-1])}s=d,n=n||f.indexOf("#include<")>=0||f.indexOf("#include <")>=0}else{const f=e.shadersRepository+"ShadersInclude/"+h+".fx";vA.loadFile(f,d=>{e.includesShadersStore[h]=d,Tu(s.join(""),e,t)});return}}lu.length=0;const o=s.join("");n?Tu(o.toString(),e,t):t(o)}const vA={loadFile:(r,e,t,i,s,n)=>{throw $e("FileTools")}};function WP(r,e){return Ms(e).cachedPipelines[r]}function xA(r){const e=r._name,t=r.context;if(e&&t){const i=Ms(t);i.cachedPipelines[e]?.dispose(),delete i.cachedPipelines[e]}}function HP(r,e,t,i,s,n,o){let l,h;const f=Hi()?n?.getHostDocument():null;typeof e=="string"?l=e:typeof e.vertexSource=="string"?l="source:"+e.vertexSource:typeof e.vertexElement=="string"?l=f?.getElementById(e.vertexElement)||e.vertexElement:l=e.vertex||e,typeof e=="string"?h=e:typeof e.fragmentSource=="string"?h="source:"+e.fragmentSource:typeof e.fragmentElement=="string"?h=f?.getElementById(e.fragmentElement)||e.fragmentElement:h=e.fragment||e;const d=[void 0,void 0],_=()=>{if(d[0]&&d[1]){const[p,g]=d;UP(r),uT(p,r,(v,x)=>{o&&(o._vertexSourceCodeBeforeMigration=x),t&&(v=t("vertex",v)),r.isFragment=!0,uT(g,r,(T,y)=>{o&&(o._fragmentSourceCodeBeforeMigration=y),t&&(T=t("fragment",T));const R=BP(v,T,r);r=null;const I=YP(R.vertexCode,R.fragmentCode,e,s);i?.(I.vertexSourceCode,I.fragmentSourceCode)},n)},n)}};dT(l,"Vertex","",p=>{o&&(o._rawVertexSourceCode=p),d[0]=p,_()},s),dT(h,"Fragment","Pixel",p=>{o&&(o._rawFragmentSourceCode=p),d[1]=p,_()},s)}function dT(r,e,t,i,s,n){if(typeof HTMLElement<"u"&&r instanceof HTMLElement){const h=uA(r);i(h);return}if(r.substring(0,7)==="source:"){i(r.substring(7));return}if(r.substring(0,7)==="base64:"){const h=window.atob(r.substring(7));i(h);return}const o=q.GetShadersStore(s);if(o[r+e+"Shader"]){i(o[r+e+"Shader"]);return}if(t&&o[r+t+"Shader"]){i(o[r+t+"Shader"]);return}let l;if(r[0]==="."||r[0]==="/"||r.indexOf("http")>-1?l=r:l=q.GetShadersRepository(s)+r,n=n||_A,!n)throw new Error("loadFileInjection is not defined");n(l+"."+e.toLowerCase()+".fx",i)}function YP(r,e,t,i){if(t){const s=t.vertexElement||t.vertex||t.spectorName||t,n=t.fragmentElement||t.fragment||t.spectorName||t;return{vertexSourceCode:(i===1?"//":"")+"#define SHADER_NAME vertex:"+s+`
`+r,fragmentSourceCode:(i===1?"//":"")+"#define SHADER_NAME fragment:"+n+`
`+e}}else return{vertexSourceCode:r,fragmentSourceCode:e}}const qP=(r,e,t,i)=>{try{const s=r.context?Ms(r.context):null;s&&(s.disableParallelShaderCompile=r.disableParallelCompilation);const n=r.existingPipelineContext||e(r.shaderProcessingContext);return n._name=r.name,r.name&&s&&(s.cachedPipelines[r.name]=n),t(n,r.vertex,r.fragment,!!r.createAsRaw,"","",r.rebuildRebind,r.defines,r.transformFeedbackVaryings,"",()=>{i(n,()=>{r.onRenderingStateCompiled?.(n)})}),n}catch(s){throw ge.Error("Error compiling effect"),s}};let cu=[];class ji{static SetImmediate(e){cu.length===0&&setTimeout(()=>{const t=cu;cu=[];for(const i of t)i()},1),cu.push(e)}}function _T(r,e,t){try{if(r())return e(),!0}catch(i){return t?.(i),!0}return!1}const pv=(r,e,t,i=16,s=3e4,n=!0,o)=>{if(n&&_T(r,e,t))return null;const l=setInterval(()=>{_T(r,e,t)?clearInterval(l):(s-=i,s<0&&(clearInterval(l),t?.(new Error("Operation timed out after maximum retries. "+(o||"")),!0)))},i);return()=>clearInterval(l)};class xi{static get ShadersRepository(){return q.ShadersRepository}static set ShadersRepository(e){q.ShadersRepository=e}get isDisposed(){return this._isDisposed}get onBindObservable(){return this._onBindObservable||(this._onBindObservable=new Ae),this._onBindObservable}get shaderLanguage(){return this._shaderLanguage}constructor(e,t,i,s=null,n,o=null,l=null,h=null,f=null,d,_="",p=0,g){this.defines="",this.onCompiled=null,this.onError=null,this.onBind=null,this.uniqueId=0,this.onCompileObservable=new Ae,this.onErrorObservable=new Ae,this._onBindObservable=null,this._isDisposed=!1,this._refCount=1,this._bonesComputationForcedToCPU=!1,this._uniformBuffersNames={},this._multiTarget=!1,this._samplers={},this._isReady=!1,this._compilationError="",this._allFallbacksProcessed=!1,this._uniforms={},this._key="",this._fallbacks=null,this._vertexSourceCodeOverride="",this._fragmentSourceCodeOverride="",this._transformFeedbackVaryings=null,this._disableParallelShaderCompilation=!1,this._pipelineContext=null,this._vertexSourceCode="",this._fragmentSourceCode="",this._vertexSourceCodeBeforeMigration="",this._fragmentSourceCodeBeforeMigration="",this._rawVertexSourceCode="",this._rawFragmentSourceCode="",this._processCodeAfterIncludes=void 0,this._processFinalCode=null,this._onReleaseEffectsObserver=null,this.name=e,this._key=_;const v=this._key.replace(/\r/g,"").replace(/\n/g,"|");let x;if(t.attributes){const T=t;if(this._engine=i,this._attributesNames=T.attributes,this._uniformsNames=T.uniformsNames.concat(T.samplers),this._samplerList=T.samplers.slice(),this.defines=T.defines,this.onError=T.onError,this.onCompiled=T.onCompiled,this._fallbacks=T.fallbacks,this._indexParameters=T.indexParameters,this._transformFeedbackVaryings=T.transformFeedbackVaryings||null,this._multiTarget=!!T.multiTarget,this._shaderLanguage=T.shaderLanguage??0,this._disableParallelShaderCompilation=!!T.disableParallelShaderCompilation,T.uniformBuffersNames){this._uniformBuffersNamesList=T.uniformBuffersNames.slice();for(let y=0;y<T.uniformBuffersNames.length;y++)this._uniformBuffersNames[T.uniformBuffersNames[y]]=y}this._processFinalCode=T.processFinalCode??null,this._processCodeAfterIncludes=T.processCodeAfterIncludes??void 0,g=T.extraInitializationsAsync,x=T.existingPipelineContext}else this._engine=n,this.defines=o??"",this._uniformsNames=i.concat(s),this._samplerList=s?s.slice():[],this._attributesNames=t,this._uniformBuffersNamesList=[],this._shaderLanguage=p,this.onError=f,this.onCompiled=h,this._indexParameters=d,this._fallbacks=l;this._engine.shaderPlatformName==="WEBGL2"&&(x=WP(v,this._engine._gl)??x),this._attributeLocationByName={},this.uniqueId=xi._UniqueIdSeed++,x?(this._pipelineContext=x,this._pipelineContext.setEngine(this._engine),this._onRenderingStateCompiled(this._pipelineContext),this._pipelineContext.program&&(this._pipelineContext.program.__SPECTOR_rebuildProgram=this._rebuildProgram.bind(this))):this._processShaderCodeAsync(null,!1,null,g).catch(T=>{const y=T?.message??String(T),R=new Error(`Effect async shader preparation failed for "${String(this.name)}": ${y}`);T&&typeof T.stack=="string"&&(R.stack=`${R.message}
Caused by: ${T.stack}`),this._processCompilationErrors(R)}),this._onReleaseEffectsObserver=this._engine.onReleaseEffectsObservable.addOnce(()=>{this._onReleaseEffectsObserver=null,!this.isDisposed&&this.dispose(!0)})}async _processShaderCodeAsync(e=null,t=!1,i=null,s){s&&await s(),this._processingContext=i||this._engine._getShaderProcessingContext(this._shaderLanguage,!1);const n={defines:this.defines.split(`
`),indexParameters:this._indexParameters,isFragment:!1,shouldUseHighPrecisionShader:this._engine._shouldUseHighPrecisionShader,processor:e??this._engine._getShaderProcessor(this._shaderLanguage),supportsUniformBuffers:this._engine.supportsUniformBuffers,shadersRepository:q.GetShadersRepository(this._shaderLanguage),includesShadersStore:q.GetIncludesShadersStore(this._shaderLanguage),version:(this._engine.version*100).toString(),platformName:this._engine.shaderPlatformName,processingContext:this._processingContext,isNDCHalfZRange:this._engine.isNDCHalfZRange,useReverseDepthBuffer:this._engine.useReverseDepthBuffer,processCodeAfterIncludes:this._processCodeAfterIncludes};HP(n,this.name,this._processFinalCode,(o,l)=>{this._vertexSourceCode=o,this._fragmentSourceCode=l,this._prepareEffect(t)},this._shaderLanguage,this._engine,this)}get key(){return this._key}isReady(){try{return this._isReadyInternal()}catch{return!1}}_isReadyInternal(){return this._engine.isDisposed||this._isReady?!0:this._pipelineContext?this._pipelineContext.isReady:!1}getEngine(){return this._engine}getPipelineContext(){return this._pipelineContext}getAttributesNames(){return this._attributesNames}getAttributeLocation(e){return this._attributes[e]}getAttributeLocationByName(e){return this._attributeLocationByName[e]}getAttributesCount(){return this._attributes.length}getUniformIndex(e){return this._uniformsNames.indexOf(e)}getUniform(e){return this._uniforms[e]}getSamplers(){return this._samplerList}getUniformNames(){return this._uniformsNames}getUniformBuffersNames(){return this._uniformBuffersNamesList}getIndexParameters(){return this._indexParameters}getCompilationError(){return this._compilationError}allFallbacksProcessed(){return this._allFallbacksProcessed}async whenCompiledAsync(){return await new Promise(e=>{this.executeWhenCompiled(e)})}executeWhenCompiled(e){if(this.isReady()){e(this);return}this.onCompileObservable.add(t=>{e(t)}),(!this._pipelineContext||this._pipelineContext.isAsync)&&this._checkIsReady(null)}_checkIsReady(e){pv(()=>this._isReadyInternal()||this._isDisposed,()=>{},t=>{this._processCompilationErrors(t,e)},16,12e4,!0,` - Effect: ${typeof this.name=="string"?this.name:this.key}`)}get vertexSourceCode(){return this._vertexSourceCodeOverride&&this._fragmentSourceCodeOverride?this._vertexSourceCodeOverride:this._pipelineContext?._getVertexShaderCode()??this._vertexSourceCode}get fragmentSourceCode(){return this._vertexSourceCodeOverride&&this._fragmentSourceCodeOverride?this._fragmentSourceCodeOverride:this._pipelineContext?._getFragmentShaderCode()??this._fragmentSourceCode}get vertexSourceCodeBeforeMigration(){return this._vertexSourceCodeBeforeMigration}get fragmentSourceCodeBeforeMigration(){return this._fragmentSourceCodeBeforeMigration}get rawVertexSourceCode(){return this._rawVertexSourceCode}get rawFragmentSourceCode(){return this._rawFragmentSourceCode}getPipelineGenerationOptions(){return{platformName:this._engine.shaderPlatformName,shaderLanguage:this._shaderLanguage,shaderNameOrContent:this.name,key:this._key,defines:this.defines.split(`
`),addGlobalDefines:!1,extendedProcessingOptions:{indexParameters:this._indexParameters,isNDCHalfZRange:this._engine.isNDCHalfZRange,useReverseDepthBuffer:this._engine.useReverseDepthBuffer,supportsUniformBuffers:this._engine.supportsUniformBuffers},extendedCreatePipelineOptions:{transformFeedbackVaryings:this._transformFeedbackVaryings,createAsRaw:!!(this._vertexSourceCodeOverride&&this._fragmentSourceCodeOverride)}}}_rebuildProgram(e,t,i,s){this._isReady=!1,this._vertexSourceCodeOverride=e,this._fragmentSourceCodeOverride=t,this.onError=(n,o)=>{s&&s(o)},this.onCompiled=()=>{const n=this.getEngine().scenes;if(n)for(let o=0;o<n.length;o++)n[o].markAllMaterialsAsDirty(127);this._pipelineContext._handlesSpectorRebuildCallback?.(i)},this._fallbacks=null,this._prepareEffect()}_onRenderingStateCompiled(e){if(this._pipelineContext=e,this._pipelineContext.setEngine(this._engine),this._attributes=[],this._pipelineContext._fillEffectInformation(this,this._uniformBuffersNames,this._uniformsNames,this._uniforms,this._samplerList,this._samplers,this._attributesNames,this._attributes),this._attributesNames)for(let t=0;t<this._attributesNames.length;t++){const i=this._attributesNames[t];this._attributeLocationByName[i]=this._attributes[t]}this._engine.bindSamplers(this),this._compilationError="",this._isReady=!0,this.onCompiled&&this.onCompiled(this),this.onCompileObservable.notifyObservers(this),this.onCompileObservable.clear(),this._fallbacks&&this._fallbacks.unBindMesh(),xi.AutomaticallyClearCodeCache&&this.clearCodeCache()}_prepareEffect(e=!1){const t=this._pipelineContext;this._isReady=!1;try{const i=!!(this._vertexSourceCodeOverride&&this._fragmentSourceCodeOverride),s=i?null:this.defines,n=i?this._vertexSourceCodeOverride:this._vertexSourceCode,o=i?this._fragmentSourceCodeOverride:this._fragmentSourceCode,l=this._engine;this._pipelineContext=qP({existingPipelineContext:e?t:null,vertex:n,fragment:o,context:l.shaderPlatformName==="WEBGL2"||l.shaderPlatformName==="WEBGL1"?l._gl:void 0,rebuildRebind:(h,f,d,_)=>this._rebuildProgram(h,f,d,_),defines:s,transformFeedbackVaryings:this._transformFeedbackVaryings,name:this._key.replace(/\r/g,"").replace(/\n/g,"|"),createAsRaw:i,disableParallelCompilation:this._disableParallelShaderCompilation,shaderProcessingContext:this._processingContext,onRenderingStateCompiled:h=>{t&&!e&&this._engine._deletePipelineContext(t),h&&this._onRenderingStateCompiled(h)}},this._engine.createPipelineContext.bind(this._engine),this._engine._preparePipelineContextAsync.bind(this._engine),this._engine._executeWhenRenderingStateIsCompiled.bind(this._engine)),this._pipelineContext.isAsync&&this._checkIsReady(t)}catch(i){this._processCompilationErrors(i,t)}}_getShaderCodeAndErrorLine(e,t,i){const s=i?/FRAGMENT SHADER ERROR: 0:(\d+?):/:/VERTEX SHADER ERROR: 0:(\d+?):/;let n=null;if(t&&e){const o=t.match(s);if(o&&o.length===2){const l=parseInt(o[1]),h=e.split(`
`,-1);h.length>=l&&(n=`Offending line [${l}] in ${i?"fragment":"vertex"} code: ${h[l-1]}`)}}return[e,n]}_processCompilationErrors(e,t=null){this._compilationError=typeof e?.stack=="string"?e.stack:e?.message??String(e);const i=this._attributesNames,s=this._fallbacks;if(ge.Error("Unable to compile effect:"),ge.Error(`Uniforms: ${this._uniformsNames.join(" ")}`),ge.Error(`Attributes: ${i.join(" ")}`),ge.Error(`Defines:
`+this.defines),xi.LogShaderCodeOnCompilationError){let o=null,l=null,h;this._pipelineContext?._getVertexShaderCode()&&([h,o]=this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(),this._compilationError,!1),h&&(ge.Error("Vertex code:"),ge.Error(h))),this._pipelineContext?._getFragmentShaderCode()&&([h,l]=this._getShaderCodeAndErrorLine(this._pipelineContext?._getFragmentShaderCode(),this._compilationError,!0),h&&(ge.Error("Fragment code:"),ge.Error(h))),o&&ge.Error(o),l&&ge.Error(l)}ge.Error("Error: "+this._compilationError);const n=()=>{this.onError&&this.onError(this,this._compilationError),this.onErrorObservable.notifyObservers(this),this._engine.onEffectErrorObservable.notifyObservers({effect:this,errors:this._compilationError})};t&&(this._pipelineContext=t,this._isReady=!0,n()),s?(this._pipelineContext=null,s.hasMoreFallbacks?(this._allFallbacksProcessed=!1,ge.Error("Trying next fallback."),this.defines=s.reduce(this.defines,this),this._prepareEffect()):(this._allFallbacksProcessed=!0,n(),this.onErrorObservable.clear(),this._fallbacks&&this._fallbacks.unBindMesh())):(this._allFallbacksProcessed=!0,t||n())}get isSupported(){return this._compilationError===""}_bindTexture(e,t){this._engine._bindTexture(this._samplers[e],t,e)}setTexture(e,t){this._engine.setTexture(this._samplers[e],this._uniforms[e],t,e)}setTextureArray(e,t){const i=e+"Ex";if(this._samplerList.indexOf(i+"0")===-1){const s=this._samplerList.indexOf(e);for(let o=1;o<t.length;o++){const l=i+(o-1).toString();this._samplerList.splice(s+o,0,l)}let n=0;for(const o of this._samplerList)this._samplers[o]=n,n+=1}this._engine.setTextureArray(this._samplers[e],this._uniforms[e],t,e)}bindUniformBuffer(e,t){const i=this._uniformBuffersNames[t];i===void 0||xi._BaseCache[i]===e&&this._engine._features.useUBOBindingCache||(xi._BaseCache[i]=e,this._engine.bindUniformBufferBase(e,i,t))}bindUniformBlock(e,t){this._engine.bindUniformBlock(this._pipelineContext,e,t)}setInt(e,t){return this._pipelineContext.setInt(e,t),this}setInt2(e,t,i){return this._pipelineContext.setInt2(e,t,i),this}setInt3(e,t,i,s){return this._pipelineContext.setInt3(e,t,i,s),this}setInt4(e,t,i,s,n){return this._pipelineContext.setInt4(e,t,i,s,n),this}setIntArray(e,t){return this._pipelineContext.setIntArray(e,t),this}setIntArray2(e,t){return this._pipelineContext.setIntArray2(e,t),this}setIntArray3(e,t){return this._pipelineContext.setIntArray3(e,t),this}setIntArray4(e,t){return this._pipelineContext.setIntArray4(e,t),this}setUInt(e,t){return this._pipelineContext.setUInt(e,t),this}setUInt2(e,t,i){return this._pipelineContext.setUInt2(e,t,i),this}setUInt3(e,t,i,s){return this._pipelineContext.setUInt3(e,t,i,s),this}setUInt4(e,t,i,s,n){return this._pipelineContext.setUInt4(e,t,i,s,n),this}setUIntArray(e,t){return this._pipelineContext.setUIntArray(e,t),this}setUIntArray2(e,t){return this._pipelineContext.setUIntArray2(e,t),this}setUIntArray3(e,t){return this._pipelineContext.setUIntArray3(e,t),this}setUIntArray4(e,t){return this._pipelineContext.setUIntArray4(e,t),this}setFloatArray(e,t){return this._pipelineContext.setArray(e,t),this}setFloatArray2(e,t){return this._pipelineContext.setArray2(e,t),this}setFloatArray3(e,t){return this._pipelineContext.setArray3(e,t),this}setFloatArray4(e,t){return this._pipelineContext.setArray4(e,t),this}setArray(e,t){return this._pipelineContext.setArray(e,t),this}setArray2(e,t){return this._pipelineContext.setArray2(e,t),this}setArray3(e,t){return this._pipelineContext.setArray3(e,t),this}setArray4(e,t){return this._pipelineContext.setArray4(e,t),this}setMatrices(e,t){return this._pipelineContext.setMatrices(e,t),this}setMatrix(e,t){return this._pipelineContext.setMatrix(e,t),this}setMatrix3x3(e,t){return this._pipelineContext.setMatrix3x3(e,t),this}setMatrix2x2(e,t){return this._pipelineContext.setMatrix2x2(e,t),this}setFloat(e,t){return this._pipelineContext.setFloat(e,t),this}setBool(e,t){return this._pipelineContext.setInt(e,t?1:0),this}setVector2(e,t){return this._pipelineContext.setVector2(e,t),this}setFloat2(e,t,i){return this._pipelineContext.setFloat2(e,t,i),this}setVector3(e,t){return this._pipelineContext.setVector3(e,t),this}setFloat3(e,t,i,s){return this._pipelineContext.setFloat3(e,t,i,s),this}setVector4(e,t){return this._pipelineContext.setVector4(e,t),this}setQuaternion(e,t){return this._pipelineContext.setQuaternion(e,t),this}setFloat4(e,t,i,s,n){return this._pipelineContext.setFloat4(e,t,i,s,n),this}setColor3(e,t){return this._pipelineContext.setColor3(e,t),this}setColor4(e,t,i){return this._pipelineContext.setColor4(e,t,i),this}setDirectColor4(e,t){return this._pipelineContext.setDirectColor4(e,t),this}clearCodeCache(){this._vertexSourceCode="",this._fragmentSourceCode="",this._fragmentSourceCodeBeforeMigration="",this._vertexSourceCodeBeforeMigration=""}dispose(e=!1){if(e)this._refCount=0;else{if(xi.PersistentMode)return;this._refCount--}this._refCount>0||this._isDisposed||(this._onReleaseEffectsObserver&&(this._engine.onReleaseEffectsObservable.remove(this._onReleaseEffectsObserver),this._onReleaseEffectsObserver=null),this._pipelineContext&&xA(this._pipelineContext),this._engine._releaseEffect(this),this.clearCodeCache(),this._isDisposed=!0)}static RegisterShader(e,t,i,s=0){t&&(q.GetShadersStore(s)[`${e}PixelShader`]=t),i&&(q.GetShadersStore(s)[`${e}VertexShader`]=i)}static ResetCache(){xi._BaseCache={}}}xi.LogShaderCodeOnCompilationError=!0;xi.PersistentMode=!1;xi.AutomaticallyClearCodeCache=!1;xi._UniqueIdSeed=0;xi._BaseCache={};xi.ShadersStore=q.ShadersStore;xi.IncludesShadersStore=q.IncludesShadersStore;class Fi{static SetMatrixPrecision(e){if(Fi.MatrixTrackPrecisionChange=!1,e&&!Fi.MatrixUse64Bits&&Fi.MatrixTrackedMatrices)for(let t=0;t<Fi.MatrixTrackedMatrices.length;++t){const i=Fi.MatrixTrackedMatrices[t],s=i._m;i._m=new Array(16);for(let n=0;n<16;++n)i._m[n]=s[n]}Fi.MatrixUse64Bits=e,Fi.MatrixCurrentType=Fi.MatrixUse64Bits?Array:Float32Array,Fi.MatrixTrackedMatrices=null}}Fi.MatrixUse64Bits=!1;Fi.MatrixTrackPrecisionChange=!0;Fi.MatrixCurrentType=Float32Array;Fi.MatrixTrackedMatrices=[];class Mn{static get Now(){return Hi()&&window.performance&&window.performance.now?window.performance.now():Date.now()}}class jP{constructor(e=!0){this._isDepthTestDirty=!1,this._isDepthMaskDirty=!1,this._isDepthFuncDirty=!1,this._isCullFaceDirty=!1,this._isCullDirty=!1,this._isZOffsetDirty=!1,this._isFrontFaceDirty=!1,e&&this.reset()}get isDirty(){return this._isDepthFuncDirty||this._isDepthTestDirty||this._isDepthMaskDirty||this._isCullFaceDirty||this._isCullDirty||this._isZOffsetDirty||this._isFrontFaceDirty}get zOffset(){return this._zOffset}set zOffset(e){this._zOffset!==e&&(this._zOffset=e,this._isZOffsetDirty=!0)}get zOffsetUnits(){return this._zOffsetUnits}set zOffsetUnits(e){this._zOffsetUnits!==e&&(this._zOffsetUnits=e,this._isZOffsetDirty=!0)}get cullFace(){return this._cullFace}set cullFace(e){this._cullFace!==e&&(this._cullFace=e,this._isCullFaceDirty=!0)}get cull(){return this._cull}set cull(e){this._cull!==e&&(this._cull=e,this._isCullDirty=!0)}get depthFunc(){return this._depthFunc}set depthFunc(e){this._depthFunc!==e&&(this._depthFunc=e,this._isDepthFuncDirty=!0)}get depthMask(){return this._depthMask}set depthMask(e){this._depthMask!==e&&(this._depthMask=e,this._isDepthMaskDirty=!0)}get depthTest(){return this._depthTest}set depthTest(e){this._depthTest!==e&&(this._depthTest=e,this._isDepthTestDirty=!0)}get frontFace(){return this._frontFace}set frontFace(e){this._frontFace!==e&&(this._frontFace=e,this._isFrontFaceDirty=!0)}reset(){this._depthMask=!0,this._depthTest=!0,this._depthFunc=null,this._cullFace=null,this._cull=null,this._zOffset=0,this._zOffsetUnits=0,this._frontFace=null,this._isDepthTestDirty=!0,this._isDepthMaskDirty=!0,this._isDepthFuncDirty=!1,this._isCullFaceDirty=!1,this._isCullDirty=!1,this._isZOffsetDirty=!0,this._isFrontFaceDirty=!1}apply(e){this.isDirty&&(this._isCullDirty&&(this.cull?e.enable(e.CULL_FACE):e.disable(e.CULL_FACE),this._isCullDirty=!1),this._isCullFaceDirty&&(e.cullFace(this.cullFace),this._isCullFaceDirty=!1),this._isDepthMaskDirty&&(e.depthMask(this.depthMask),this._isDepthMaskDirty=!1),this._isDepthTestDirty&&(this.depthTest?e.enable(e.DEPTH_TEST):e.disable(e.DEPTH_TEST),this._isDepthTestDirty=!1),this._isDepthFuncDirty&&(e.depthFunc(this.depthFunc),this._isDepthFuncDirty=!1),this._isZOffsetDirty&&(this.zOffset||this.zOffsetUnits?(e.enable(e.POLYGON_OFFSET_FILL),e.polygonOffset(this.zOffset,this.zOffsetUnits)):e.disable(e.POLYGON_OFFSET_FILL),this._isZOffsetDirty=!1),this._isFrontFaceDirty&&(e.frontFace(this.frontFace),this._isFrontFaceDirty=!1))}}class KP{get isDirty(){return this._isStencilTestDirty||this._isStencilMaskDirty||this._isStencilFuncDirty||this._isStencilOpDirty}get func(){return this._func}set func(e){this._func!==e&&(this._func=e,this._isStencilFuncDirty=!0)}get backFunc(){return this._func}set backFunc(e){this._backFunc!==e&&(this._backFunc=e,this._isStencilFuncDirty=!0)}get funcRef(){return this._funcRef}set funcRef(e){this._funcRef!==e&&(this._funcRef=e,this._isStencilFuncDirty=!0)}get funcMask(){return this._funcMask}set funcMask(e){this._funcMask!==e&&(this._funcMask=e,this._isStencilFuncDirty=!0)}get opStencilFail(){return this._opStencilFail}set opStencilFail(e){this._opStencilFail!==e&&(this._opStencilFail=e,this._isStencilOpDirty=!0)}get opDepthFail(){return this._opDepthFail}set opDepthFail(e){this._opDepthFail!==e&&(this._opDepthFail=e,this._isStencilOpDirty=!0)}get opStencilDepthPass(){return this._opStencilDepthPass}set opStencilDepthPass(e){this._opStencilDepthPass!==e&&(this._opStencilDepthPass=e,this._isStencilOpDirty=!0)}get backOpStencilFail(){return this._backOpStencilFail}set backOpStencilFail(e){this._backOpStencilFail!==e&&(this._backOpStencilFail=e,this._isStencilOpDirty=!0)}get backOpDepthFail(){return this._backOpDepthFail}set backOpDepthFail(e){this._backOpDepthFail!==e&&(this._backOpDepthFail=e,this._isStencilOpDirty=!0)}get backOpStencilDepthPass(){return this._backOpStencilDepthPass}set backOpStencilDepthPass(e){this._backOpStencilDepthPass!==e&&(this._backOpStencilDepthPass=e,this._isStencilOpDirty=!0)}get mask(){return this._mask}set mask(e){this._mask!==e&&(this._mask=e,this._isStencilMaskDirty=!0)}get enabled(){return this._enabled}set enabled(e){this._enabled!==e&&(this._enabled=e,this._isStencilTestDirty=!0)}constructor(e=!0){this._isStencilTestDirty=!1,this._isStencilMaskDirty=!1,this._isStencilFuncDirty=!1,this._isStencilOpDirty=!1,this.useStencilGlobalOnly=!1,e&&this.reset()}reset(){this.stencilMaterial=void 0,this.stencilGlobal?.reset(),this._isStencilTestDirty=!0,this._isStencilMaskDirty=!0,this._isStencilFuncDirty=!0,this._isStencilOpDirty=!0}apply(e){if(!e)return;const t=!this.useStencilGlobalOnly&&!!this.stencilMaterial?.enabled;this.enabled=t?this.stencilMaterial.enabled:this.stencilGlobal.enabled,this.func=t?this.stencilMaterial.func:this.stencilGlobal.func,this.backFunc=t?this.stencilMaterial.backFunc:this.stencilGlobal.backFunc,this.funcRef=t?this.stencilMaterial.funcRef:this.stencilGlobal.funcRef,this.funcMask=t?this.stencilMaterial.funcMask:this.stencilGlobal.funcMask,this.opStencilFail=t?this.stencilMaterial.opStencilFail:this.stencilGlobal.opStencilFail,this.opDepthFail=t?this.stencilMaterial.opDepthFail:this.stencilGlobal.opDepthFail,this.opStencilDepthPass=t?this.stencilMaterial.opStencilDepthPass:this.stencilGlobal.opStencilDepthPass,this.backOpStencilFail=t?this.stencilMaterial.backOpStencilFail:this.stencilGlobal.backOpStencilFail,this.backOpDepthFail=t?this.stencilMaterial.backOpDepthFail:this.stencilGlobal.backOpDepthFail,this.backOpStencilDepthPass=t?this.stencilMaterial.backOpStencilDepthPass:this.stencilGlobal.backOpStencilDepthPass,this.mask=t?this.stencilMaterial.mask:this.stencilGlobal.mask,this.isDirty&&(this._isStencilTestDirty&&(this.enabled?e.enable(e.STENCIL_TEST):e.disable(e.STENCIL_TEST),this._isStencilTestDirty=!1),this._isStencilMaskDirty&&(e.stencilMask(this.mask),this._isStencilMaskDirty=!1),this._isStencilFuncDirty&&(e.stencilFuncSeparate(e.FRONT,this.func,this.funcRef,this.funcMask),e.stencilFuncSeparate(e.BACK,this.backFunc,this.funcRef,this.funcMask),this._isStencilFuncDirty=!1),this._isStencilOpDirty&&(e.stencilOpSeparate(e.FRONT,this.opStencilFail,this.opDepthFail,this.opStencilDepthPass),e.stencilOpSeparate(e.BACK,this.backOpStencilFail,this.backOpDepthFail,this.backOpStencilDepthPass),this._isStencilOpDirty=!1))}}class Hs{constructor(){this.reset()}reset(){this.enabled=!1,this.mask=255,this.funcRef=1,this.funcMask=255,this.func=Hs.ALWAYS,this.opStencilFail=Hs.KEEP,this.opDepthFail=Hs.KEEP,this.opStencilDepthPass=Hs.REPLACE,this.backFunc=Hs.ALWAYS,this.backOpStencilFail=Hs.KEEP,this.backOpDepthFail=Hs.KEEP,this.backOpStencilDepthPass=Hs.REPLACE}get stencilFunc(){return this.func}set stencilFunc(e){this.func=e}get stencilBackFunc(){return this.backFunc}set stencilBackFunc(e){this.backFunc=e}get stencilFuncRef(){return this.funcRef}set stencilFuncRef(e){this.funcRef=e}get stencilFuncMask(){return this.funcMask}set stencilFuncMask(e){this.funcMask=e}get stencilOpStencilFail(){return this.opStencilFail}set stencilOpStencilFail(e){this.opStencilFail=e}get stencilOpDepthFail(){return this.opDepthFail}set stencilOpDepthFail(e){this.opDepthFail=e}get stencilOpStencilDepthPass(){return this.opStencilDepthPass}set stencilOpStencilDepthPass(e){this.opStencilDepthPass=e}get stencilBackOpStencilFail(){return this.backOpStencilFail}set stencilBackOpStencilFail(e){this.backOpStencilFail=e}get stencilBackOpDepthFail(){return this.backOpDepthFail}set stencilBackOpDepthFail(e){this.backOpDepthFail=e}get stencilBackOpStencilDepthPass(){return this.backOpStencilDepthPass}set stencilBackOpStencilDepthPass(e){this.backOpStencilDepthPass=e}get stencilMask(){return this.mask}set stencilMask(e){this.mask=e}get stencilTest(){return this.enabled}set stencilTest(e){this.enabled=e}}Hs.ALWAYS=519;Hs.KEEP=7680;Hs.REPLACE=7681;class SA{constructor(e){this._supportBlendParametersPerTarget=e,this._blendFunctionParameters=new Array(32),this._blendEquationParameters=new Array(16),this._blendConstants=new Array(4),this._isBlendConstantsDirty=!1,this._alphaBlend=Array(8).fill(!1),this._numTargetEnabled=0,this._isAlphaBlendDirty=!1,this._isBlendFunctionParametersDirty=!1,this._isBlendEquationParametersDirty=!1,this.reset()}get isDirty(){return this._isAlphaBlendDirty||this._isBlendFunctionParametersDirty||this._isBlendEquationParametersDirty}get alphaBlend(){return this._numTargetEnabled>0}set alphaBlend(e){this.setAlphaBlend(e)}setAlphaBlend(e,t=0){this._alphaBlend[t]!==e&&(e?this._numTargetEnabled++:this._numTargetEnabled--,this._alphaBlend[t]=e,this._isAlphaBlendDirty=!0)}setAlphaBlendConstants(e,t,i,s){this._blendConstants[0]===e&&this._blendConstants[1]===t&&this._blendConstants[2]===i&&this._blendConstants[3]===s||(this._blendConstants[0]=e,this._blendConstants[1]=t,this._blendConstants[2]=i,this._blendConstants[3]=s,this._isBlendConstantsDirty=!0)}setAlphaBlendFunctionParameters(e,t,i,s,n=0){const o=n*4;this._blendFunctionParameters[o+0]===e&&this._blendFunctionParameters[o+1]===t&&this._blendFunctionParameters[o+2]===i&&this._blendFunctionParameters[o+3]===s||(this._blendFunctionParameters[o+0]=e,this._blendFunctionParameters[o+1]=t,this._blendFunctionParameters[o+2]=i,this._blendFunctionParameters[o+3]=s,this._isBlendFunctionParametersDirty=!0)}setAlphaEquationParameters(e,t,i=0){const s=i*2;this._blendEquationParameters[s+0]===e&&this._blendEquationParameters[s+1]===t||(this._blendEquationParameters[s+0]=e,this._blendEquationParameters[s+1]=t,this._isBlendEquationParametersDirty=!0)}reset(){this._alphaBlend.fill(!1),this._numTargetEnabled=0,this._blendFunctionParameters.fill(null),this._blendEquationParameters.fill(null),this._blendConstants[0]=null,this._blendConstants[1]=null,this._blendConstants[2]=null,this._blendConstants[3]=null,this._isAlphaBlendDirty=!0,this._isBlendFunctionParametersDirty=!1,this._isBlendEquationParametersDirty=!1,this._isBlendConstantsDirty=!1}apply(e,t=1){if(!this.isDirty)return;if(this._isBlendConstantsDirty&&(e.blendColor(this._blendConstants[0],this._blendConstants[1],this._blendConstants[2],this._blendConstants[3]),this._isBlendConstantsDirty=!1),t===1||!this._supportBlendParametersPerTarget){this._isAlphaBlendDirty&&(this._alphaBlend[0]?e.enable(e.BLEND):e.disable(e.BLEND),this._isAlphaBlendDirty=!1),this._isBlendFunctionParametersDirty&&(e.blendFuncSeparate(this._blendFunctionParameters[0],this._blendFunctionParameters[1],this._blendFunctionParameters[2],this._blendFunctionParameters[3]),this._isBlendFunctionParametersDirty=!1),this._isBlendEquationParametersDirty&&(e.blendEquationSeparate(this._blendEquationParameters[0],this._blendEquationParameters[1]),this._isBlendEquationParametersDirty=!1);return}const i=e;if(this._isAlphaBlendDirty){for(let s=0;s<t;s++){const n=s<this._numTargetEnabled?s:0;this._alphaBlend[n]?i.enableIndexed(e.BLEND,s):i.disableIndexed(e.BLEND,s)}this._isAlphaBlendDirty=!1}if(this._isBlendFunctionParametersDirty){for(let s=0;s<t;s++){const n=s<this._numTargetEnabled?s*4:0;i.blendFuncSeparateIndexed(s,this._blendFunctionParameters[n+0],this._blendFunctionParameters[n+1],this._blendFunctionParameters[n+2],this._blendFunctionParameters[n+3])}this._isBlendFunctionParametersDirty=!1}if(this._isBlendEquationParametersDirty){for(let s=0;s<t;s++){const n=s<this._numTargetEnabled?s*2:0;i.blendEquationSeparateIndexed(s,this._blendEquationParameters[n+0],this._blendEquationParameters[n+1])}this._isBlendEquationParametersDirty=!1}}setAlphaMode(e,t){let i=32774;switch(e){case 0:break;case 7:this.setAlphaBlendFunctionParameters(1,771,1,1,t);break;case 8:this.setAlphaBlendFunctionParameters(1,771,1,771,t);break;case 2:this.setAlphaBlendFunctionParameters(770,771,1,1,t);break;case 6:this.setAlphaBlendFunctionParameters(1,1,0,1,t);break;case 1:this.setAlphaBlendFunctionParameters(770,1,0,1,t);break;case 3:this.setAlphaBlendFunctionParameters(0,769,1,1,t);break;case 4:this.setAlphaBlendFunctionParameters(774,0,1,1,t);break;case 5:this.setAlphaBlendFunctionParameters(770,769,1,1,t);break;case 9:this.setAlphaBlendFunctionParameters(32769,32770,32771,32772,t);break;case 10:this.setAlphaBlendFunctionParameters(1,769,1,771,t);break;case 11:this.setAlphaBlendFunctionParameters(1,1,1,1,t);break;case 12:this.setAlphaBlendFunctionParameters(772,1,0,0,t);break;case 13:this.setAlphaBlendFunctionParameters(775,769,773,771,t);break;case 14:this.setAlphaBlendFunctionParameters(1,771,1,771,t);break;case 15:this.setAlphaBlendFunctionParameters(1,1,1,0,t);break;case 16:this.setAlphaBlendFunctionParameters(775,769,0,1,t);break;case 17:this.setAlphaBlendFunctionParameters(770,771,1,771,t);break;case 18:this.setAlphaBlendFunctionParameters(1,1,1,1,t),i=32775;break;case 19:this.setAlphaBlendFunctionParameters(1,1,1,1,t),i=32776;break;case 20:this.setAlphaBlendFunctionParameters(1,35065,0,1,t);break;case 21:this.setAlphaBlendFunctionParameters(1,0,1,771,t);break}this.setAlphaEquationParameters(i,i,t)}}function TA(r,e){if(e){const{requestAnimationFrame:t}=e;if(typeof t=="function")return t(r)}if(Hi()){const{requestAnimationFrame:t}=e||window;if(typeof t=="function")return t(r)}else if(typeof requestAnimationFrame=="function")return requestAnimationFrame(r);return setTimeout(r,16)}class Ue{get frameId(){return this._frameId}get isWebGPU(){return this._isWebGPU}_getShaderProcessor(e){return this._shaderProcessor}_resetAlphaMode(){this._alphaMode.fill(-1),this._alphaEquation.fill(-1)}get shaderPlatformName(){return this._shaderPlatformName}_clearEmptyResources(){this._emptyTexture=null,this._emptyCubeTexture=null,this._emptyTexture3D=null,this._emptyTexture2DArray=null}get useReverseDepthBuffer(){return this._useReverseDepthBuffer}set useReverseDepthBuffer(e){e!==this._useReverseDepthBuffer&&(this._useReverseDepthBuffer=e,e?this._depthCullingState.depthFunc=518:this._depthCullingState.depthFunc=515)}setColorWrite(e){e!==this._colorWrite&&(this._colorWriteChanged=!0,this._colorWrite=e)}getColorWrite(){return this._colorWrite}get depthCullingState(){return this._depthCullingState}get alphaState(){return this._alphaState}get stencilState(){return this._stencilState}get stencilStateComposer(){return this._stencilStateComposer}_getGlobalDefines(e){if(e){this.isNDCHalfZRange?e.IS_NDC_HALF_ZRANGE="":delete e.IS_NDC_HALF_ZRANGE,this.useReverseDepthBuffer?e.USE_REVERSE_DEPTHBUFFER="":delete e.USE_REVERSE_DEPTHBUFFER,this.useExactSrgbConversions?e.USE_EXACT_SRGB_CONVERSIONS="":delete e.USE_EXACT_SRGB_CONVERSIONS;return}else{let t="";return this.isNDCHalfZRange&&(t+="#define IS_NDC_HALF_ZRANGE"),this.useReverseDepthBuffer&&(t&&(t+=`
`),t+="#define USE_REVERSE_DEPTHBUFFER"),this.useExactSrgbConversions&&(t&&(t+=`
`),t+="#define USE_EXACT_SRGB_CONVERSIONS"),t}}_rebuildInternalTextures(){const e=this._internalTexturesCache.slice();for(const t of e)t._rebuild()}_rebuildRenderTargetWrappers(){const e=this._renderTargetWrapperCache.slice();for(const t of e)t.textures?.some(i=>i.source===15)||t._rebuild()}_rebuildEffects(){for(const e in this._compiledEffects){const t=this._compiledEffects[e];t._pipelineContext=null,t._prepareEffect()}xi.ResetCache()}_rebuildGraphicsResources(){this.wipeCaches(!0),this._rebuildEffects(),this._rebuildComputeEffects?.(),this._rebuildBuffers(),this._rebuildInternalTextures(),this._rebuildTextures(),this._rebuildRenderTargetWrappers(),this.wipeCaches(!0)}_flagContextRestored(){ge.Warn(this.name+" context successfully restored."),this.onContextRestoredObservable.notifyObservers(this),this._contextWasLost=!1}_restoreEngineAfterContextLost(e){setTimeout(()=>{this._clearEmptyResources();const t=this._depthCullingState.depthTest,i=this._depthCullingState.depthFunc,s=this._depthCullingState.depthMask,n=this._stencilState.stencilTest;e(),this._rebuildGraphicsResources(),this._depthCullingState.depthTest=t,this._depthCullingState.depthFunc=i,this._depthCullingState.depthMask=s,this._stencilState.stencilTest=n,this._flagContextRestored()},0)}get isDisposed(){return this._isDisposed}get snapshotRendering(){return!1}set snapshotRendering(e){}get snapshotRenderingMode(){return 0}set snapshotRenderingMode(e){}getClassName(){return"AbstractEngine"}get emptyTexture(){return this._emptyTexture||(this._emptyTexture=this.createRawTexture(new Uint8Array(4),1,1,5,!1,!1,1)),this._emptyTexture}get emptyTexture3D(){return this._emptyTexture3D||(this._emptyTexture3D=this.createRawTexture3D(new Uint8Array(4),1,1,1,5,!1,!1,1)),this._emptyTexture3D}get emptyTexture2DArray(){return this._emptyTexture2DArray||(this._emptyTexture2DArray=this.createRawTexture2DArray(new Uint8Array(4),1,1,1,5,!1,!1,1)),this._emptyTexture2DArray}get emptyCubeTexture(){if(!this._emptyCubeTexture){const e=new Uint8Array(4),t=[e,e,e,e,e,e];this._emptyCubeTexture=this.createRawCubeTexture(t,1,5,0,!1,!1,1)}return this._emptyCubeTexture}set framebufferDimensionsObject(e){this._framebufferDimensionsObject=e}get activeRenderLoops(){return this._activeRenderLoops}stopRenderLoop(e){if(!e){this._activeRenderLoops.length=0,this._cancelFrame();return}const t=this._activeRenderLoops.indexOf(e);t>=0&&(this._activeRenderLoops.splice(t,1),this._activeRenderLoops.length==0&&this._cancelFrame())}_cancelFrame(){if(this.customAnimationFrameRequester){if(this._frameHandler!==0){this._frameHandler=0;const{cancelAnimationFrame:e}=this.customAnimationFrameRequester;e&&e(this.customAnimationFrameRequester.requestID),delete this.customAnimationFrameRequester.requestID}return}if(this._frameHandler!==0){const e=this._frameHandler;if(this._frameHandler=0,Hi()){const{cancelAnimationFrame:t}=this.getHostWindow()||window;if(typeof t=="function")return t(e)}else if(typeof cancelAnimationFrame=="function")return cancelAnimationFrame(e);return clearTimeout(e)}}beginFrame(){this.onBeginFrameObservable.notifyObservers(this)}endFrame(){this._frameId++,this.onEndFrameObservable.notifyObservers(this)}get maxFPS(){return this._maxFPS}set maxFPS(e){if(this._maxFPS=e,e!==void 0){if(e<=0){this._minFrameTime=Number.MAX_VALUE;return}this._minFrameTime=1e3/e}}_isOverFrameTime(e){if(!e||this._maxFPS===void 0)return!1;const t=e-this._lastFrameTime;return this._lastFrameTime=e,this._renderAccumulator+=t,this._renderAccumulator<this._minFrameTime?!0:(this._renderAccumulator-=this._minFrameTime,this._renderAccumulator>this._minFrameTime&&(this._renderAccumulator=this._minFrameTime),!1)}_processFrame(e){if(this._frameHandler=0,!this._contextWasLost&&!this._isOverFrameTime(e)){let t=!0;(this.isDisposed||!this.renderEvenInBackground&&this._windowIsBackground)&&(t=!1),t&&(this.beginFrame(),!this.skipFrameRender&&!this._renderViews()&&this._renderFrame(),this.endFrame())}}_renderLoop(e){this._processFrame(e),this._activeRenderLoops.length>0&&this._frameHandler===0&&this._queueNewFrameForRenderLoop()}_renderFrame(){for(let e=0;e<this._activeRenderLoops.length;e++){const t=this._activeRenderLoops[e];t()}}_renderViews(){return!1}_queueNewFrame(e,t){return TA(e,t)}_queueNewFrameForRenderLoop(){this.customAnimationFrameRequester?(this.customAnimationFrameRequester.requestID=this._queueNewFrame(this.customAnimationFrameRequester.renderFunction||this._boundRenderFunction,this.customAnimationFrameRequester),this._frameHandler=this.customAnimationFrameRequester.requestID):this._frameHandler=this._queueNewFrame(this._boundRenderFunction,this.getHostWindow())}runRenderLoop(e){this._activeRenderLoops.indexOf(e)===-1&&(this._activeRenderLoops.push(e),this._activeRenderLoops.length===1&&this._frameHandler===0&&this._queueNewFrameForRenderLoop())}getDepthBuffer(){return this._depthCullingState.depthTest}setDepthBuffer(e){this._depthCullingState.depthTest=e}setZOffset(e){this._depthCullingState.zOffset=this.useReverseDepthBuffer?-e:e}getZOffset(){const e=this._depthCullingState.zOffset;return this.useReverseDepthBuffer?-e:e}setZOffsetUnits(e){this._depthCullingState.zOffsetUnits=this.useReverseDepthBuffer?-e:e}getZOffsetUnits(){const e=this._depthCullingState.zOffsetUnits;return this.useReverseDepthBuffer?-e:e}getHostWindow(){return Hi()?this._renderingCanvas&&this._renderingCanvas.ownerDocument&&this._renderingCanvas.ownerDocument.defaultView?this._renderingCanvas.ownerDocument.defaultView:window:null}get compatibilityMode(){return this._compatibilityMode}set compatibilityMode(e){this._compatibilityMode=!0}_rebuildTextures(){for(const e of this.scenes)e._rebuildTextures();for(const e of this._virtualScenes)e._rebuildTextures()}_releaseRenderTargetWrapper(e){const t=this._renderTargetWrapperCache.indexOf(e);t!==-1&&this._renderTargetWrapperCache.splice(t,1)}get currentViewport(){return this._cachedViewport}setViewport(e,t,i){const s=t||this.getRenderWidth(),n=i||this.getRenderHeight(),o=e.x||0,l=e.y||0;this._cachedViewport=e,this._viewport(o*s,l*n,s*e.width,n*e.height)}createCanvasImage(){return document.createElement("img")}createCanvasPath2D(e){return new Path2D(e)}get description(){let e=this.name+this.version;return this._caps.parallelShaderCompile&&(e+=" - Parallel shader compilation"),e}_createTextureBase(e,t,i,s,n=3,o=null,l=null,h,f,d=null,_=null,p=null,g=null,v,x,T){e=e||"";const y=e.substring(0,5)==="data:",R=e.substring(0,5)==="blob:",I=y&&e.indexOf(";base64,")!==-1,w=_||new Zi(this,1);w!==_&&(w.label=e.substring(0,60));const A=e;this._transformTextureUrl&&!I&&!_&&!d&&(e=this._transformTextureUrl(e)),A!==e&&(w._originalUrl=A);const P=e.lastIndexOf(".");let D=g||(P>-1?e.substring(P).toLowerCase():"");D.indexOf("?")>-1&&(D=D.split("?")[0]);const z=Ue.GetCompatibleTextureLoader(D,v);s&&s.addPendingData(w),w.url=e,w.generateMipMaps=!t,w.samplingMode=n,w.invertY=i,w._useSRGBBuffer=this._getUseSRGBBuffer(!!T,t),this._doNotHandleContextLost||(w._buffer=d);let k=null;o&&!_&&(k=w.onLoadedObservable.add(o)),_||this._internalTexturesCache.push(w);const ne=(fe,me)=>{s&&s.removePendingData(w),e===A?(k&&w.onLoadedObservable.remove(k),St.UseFallbackTexture&&e!==St.FallbackTexture&&this._createTextureBase(St.FallbackTexture,t,w.invertY,s,n,null,l,h,f,d,w),fe=(fe||"Unknown error")+(St.UseFallbackTexture?" - Fallback texture was used":""),w.onErrorObservable.notifyObservers({message:fe,exception:me}),l&&l(fe,me)):(ge.Warn(`Failed to load ${e}, falling back to ${A}`),this._createTextureBase(A,t,w.invertY,s,n,o,l,h,f,d,w,p,g,v,x,T))};if(z){const fe=async me=>{(await z).loadData(me,w,(re,Z,J,he,K,ie)=>{ie?ne("TextureLoader failed to load data"):h(w,D,s,{width:re,height:Z},w.invertY,!J,he,()=>(K(),!1),n)},x)};if(!d)this._loadFile(e,async me=>{try{await fe(new Uint8Array(me))}catch(B){ne("Failed to parse texture data",B)}},void 0,s?s.offlineProvider:void 0,!0,(me,B)=>{ne("Unable to load "+(me&&me.responseURL,B))});else{const me=async B=>{try{await fe(B)}catch(re){ne("Failed to parse texture data",re)}};d instanceof ArrayBuffer?me(new Uint8Array(d)):ArrayBuffer.isView(d)?me(d):l&&l("Unable to load: only ArrayBuffer or ArrayBufferView is supported",null)}}else{const fe=me=>{R&&!this._doNotHandleContextLost&&(w._buffer=me),h(w,D,s,me,w.invertY,t,!1,f,n)};!y||I?d&&(typeof d.decoding=="string"||d.close)?fe(d):Ue._FileToolsLoadImage(e||"",fe,ne,s?s.offlineProvider:null,v,w.invertY&&this._features.needsInvertingBitmap?{imageOrientation:"flipY"}:void 0,this):typeof d=="string"||d instanceof ArrayBuffer||ArrayBuffer.isView(d)||d instanceof Blob?Ue._FileToolsLoadImage(d,fe,ne,s?s.offlineProvider:null,v,w.invertY&&this._features.needsInvertingBitmap?{imageOrientation:"flipY"}:void 0,this):d&&fe(d)}return w}_rebuildBuffers(){for(const e of this._uniformBuffers)e._rebuildAfterContextLost()}get _shouldUseHighPrecisionShader(){return!!(this._caps.highPrecisionShaderSupported&&this._highPrecisionShadersAllowed)}getHostDocument(){return this._renderingCanvas&&this._renderingCanvas.ownerDocument?this._renderingCanvas.ownerDocument:to()?document:null}getLoadedTexturesCache(){return this._internalTexturesCache}clearInternalTexturesCache(){this._internalTexturesCache.length=0}getCaps(){return this._caps}resetTextureCache(){for(const e in this._boundTexturesCache)Object.prototype.hasOwnProperty.call(this._boundTexturesCache,e)&&(this._boundTexturesCache[e]=null);this._currentTextureChannel=-1}get name(){return this._name}set name(e){this._name=e}static get NpmPackage(){return"babylonjs@9.25.0"}static get Version(){return"9.25.0"}getRenderingCanvas(){return this._renderingCanvas}getAudioContext(){return this._audioContext}getAudioDestination(){return this._audioDestination}setHardwareScalingLevel(e){this._hardwareScalingLevel=e,this.resize()}getHardwareScalingLevel(){return this._hardwareScalingLevel}get doNotHandleContextLost(){return this._doNotHandleContextLost}set doNotHandleContextLost(e){this._doNotHandleContextLost=e}get isStencilEnable(){return this._isStencilEnable}getCreationOptions(){return this._creationOptions}constructor(e,t,i){this._colorWrite=!0,this._colorWriteChanged=!0,this._depthCullingState=new jP,this._stencilStateComposer=new KP,this._stencilState=new Hs,this._alphaState=new SA(!1),this._alphaMode=Array(8).fill(-1),this._alphaEquation=Array(8).fill(-1),this._activeRequests=[],this._badOS=!1,this._badDesktopOS=!1,this._compatibilityMode=!0,this._internalTexturesCache=new Array,this._currentRenderTarget=null,this._boundTexturesCache={},this._activeChannel=0,this._currentTextureChannel=-1,this._viewportCached={x:0,y:0,z:0,w:0},this._isWebGPU=!1,this._enableGPUDebugMarkers=!1,this.onCanvasBlurObservable=new Ae,this.onCanvasFocusObservable=new Ae,this.onNewSceneAddedObservable=new Ae,this.onResizeObservable=new Ae,this.onCanvasPointerOutObservable=new Ae,this.onEffectErrorObservable=new Ae,this.disablePerformanceMonitorInBackground=!1,this.disableVertexArrayObjects=!1,this._frameId=0,this.hostInformation={isMobile:!1},this.isFullscreen=!1,this.enableOfflineSupport=!1,this.disableManifestCheck=!1,this.disableContextMenu=!0,this.currentRenderPassId=0,this.isPointerLock=!1,this.postProcesses=[],this.canvasTabIndex=1,this._contextWasLost=!1,this._useReverseDepthBuffer=!1,this.isNDCHalfZRange=!1,this.hasOriginBottomLeft=!0,this._renderTargetWrapperCache=new Array,this._compiledEffects={},this._isDisposed=!1,this.scenes=[],this._virtualScenes=new Array,this.onBeforeTextureInitObservable=new Ae,this.renderEvenInBackground=!0,this.preventCacheWipeBetweenFrames=!1,this._frameHandler=0,this._activeRenderLoops=new Array,this.customAnimationFrameRequester=null,this._windowIsBackground=!1,this._boundRenderFunction=o=>this._renderLoop(o),this._lastFrameTime=0,this._renderAccumulator=0,this.skipFrameRender=!1,this.onBeforeShaderCompilationObservable=new Ae,this.onAfterShaderCompilationObservable=new Ae,this.onBeginFrameObservable=new Ae,this.onEndFrameObservable=new Ae,this._transformTextureUrl=null,this._uniformBuffers=new Array,this._storageBuffers=new Array,this._highPrecisionShadersAllowed=!0,this.onContextLostObservable=new Ae,this.onContextRestoredObservable=new Ae,this._name="",this.premultipliedAlpha=!0,this.adaptToDeviceRatio=!1,this._lastDevicePixelRatio=1,this._doNotHandleContextLost=!1,this.cullBackFaces=null,this._renderPassNames=["main"],this._fps=60,this._deltaTime=0,this._deterministicLockstep=!1,this._lockstepMaxSteps=4,this._timeStep=1/60,this.onDisposeObservable=new Ae,this.onReleaseEffectsObservable=new Ae,St.Instances.push(this),this.startTime=Mn.Now,this._stencilStateComposer.stencilGlobal=this._stencilState,Fi.SetMatrixPrecision(!!t.useLargeWorldRendering||!!t.useHighPrecisionMatrix),al()&&navigator.userAgent&&(this._badOS=/iPad/i.test(navigator.userAgent)||/iPhone/i.test(navigator.userAgent),this._badDesktopOS=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)),t.antialias=e??t.antialias,t.deterministicLockstep=t.deterministicLockstep??!1,t.lockstepMaxSteps=t.lockstepMaxSteps??4,t.timeStep=t.timeStep??1/60,t.stencil=t.stencil??!0,this._audioContext=t.audioEngineOptions?.audioContext??null,this._audioDestination=t.audioEngineOptions?.audioDestination??null,this.premultipliedAlpha=t.premultipliedAlpha??!0,this._doNotHandleContextLost=!!t.doNotHandleContextLost,this._isStencilEnable=!!t.stencil,this.useExactSrgbConversions=t.useExactSrgbConversions??!1,this.canvasTabIndex=t.canvasTabIndex??this.canvasTabIndex;const s=Hi()&&window.devicePixelRatio||1,n=t.limitDeviceRatio||s;i=i||t.adaptToDeviceRatio||!1,this.adaptToDeviceRatio=i,this._hardwareScalingLevel=i?1/Math.min(n,s):1,this._lastDevicePixelRatio=s,this._creationOptions=t}resize(e=!1){let t,i;if(this.adaptToDeviceRatio){const s=Hi()&&window.devicePixelRatio||1,n=this._lastDevicePixelRatio/s;this._lastDevicePixelRatio=s,this._hardwareScalingLevel*=n}if(Hi()&&to())if(this._renderingCanvas){const s=this._renderingCanvas.getBoundingClientRect?.();t=this._renderingCanvas.clientWidth||s?.width||this._renderingCanvas.width*this._hardwareScalingLevel||100,i=this._renderingCanvas.clientHeight||s?.height||this._renderingCanvas.height*this._hardwareScalingLevel||100}else t=window.innerWidth,i=window.innerHeight;else t=this._renderingCanvas?this._renderingCanvas.width:100,i=this._renderingCanvas?this._renderingCanvas.height:100;this.setSize(t/this._hardwareScalingLevel,i/this._hardwareScalingLevel,e)}setSize(e,t,i=!1){if(!this._renderingCanvas||(e=e|0,t=t|0,!i&&this._renderingCanvas.width===e&&this._renderingCanvas.height===t))return!1;if(this._renderingCanvas.width=e,this._renderingCanvas.height=t,this.scenes){for(let s=0;s<this.scenes.length;s++){const n=this.scenes[s];for(let o=0;o<n.cameras.length;o++){const l=n.cameras[o];l._currentRenderId=0}}this.onResizeObservable.hasObservers()&&this.onResizeObservable.notifyObservers(this)}return!0}createRawTexture(e,t,i,s,n,o,l,h,f,d,_,p){throw $e("engine.rawTexture")}createRawCubeTexture(e,t,i,s,n,o,l,h){throw $e("engine.rawTexture")}createRawTexture3D(e,t,i,s,n,o,l,h,f,d,_){throw $e("engine.rawTexture")}createRawTexture2DArray(e,t,i,s,n,o,l,h,f,d,_,p){throw $e("engine.rawTexture")}_sharedInit(e){this._renderingCanvas=e}_setupMobileChecks(){navigator&&navigator.userAgent&&(this._checkForMobile=()=>{const e=navigator.userAgent;this.hostInformation.isMobile=e.indexOf("Mobile")!==-1||e.indexOf("Mac")!==-1&&to()&&"ontouchend"in document},this._checkForMobile(),Hi()&&window.addEventListener("resize",this._checkForMobile))}createVideoElement(e){return document.createElement("video")}_reportDrawCall(e=1){this._drawCalls?.addCount(e,!1)}getFps(){return this._fps}getDeltaTime(){return this._deltaTime}isDeterministicLockStep(){return this._deterministicLockstep}getLockstepMaxSteps(){return this._lockstepMaxSteps}getTimeStep(){return this._timeStep*1e3}_createImageBitmapFromSource(e,t){throw new Error("createImageBitmapFromSource is not implemented")}createImageBitmap(e,t){return createImageBitmap(e,t)}resizeImageBitmap(e,t,i){throw new Error("resizeImageBitmap is not implemented")}getFontOffset(e){throw new Error("getFontOffset is not implemented")}static _CreateCanvas(e,t){if(typeof document>"u")return new OffscreenCanvas(e,t);const i=document.createElement("canvas");return i.width=e,i.height=t,i}createCanvas(e,t){return Ue._CreateCanvas(e,t)}static _FileToolsLoadImage(e,t,i,s,n,o,l){if(!Qa.loadImage)throw $e("FileTools");return Qa.loadImage(e,t,i,s,n,o,l)}_loadFile(e,t,i,s,n,o){const l=_A(e,t,i,s,n,o);return this._activeRequests.push(l),l.onCompleteObservable.add(()=>{const h=this._activeRequests.indexOf(l);h!==-1&&this._activeRequests.splice(h,1)}),l}static _FileToolsLoadFile(e,t,i,s,n,o){if(Qa.loadFile)return Qa.loadFile(e,t,i,s,n,o);throw $e("FileTools")}dispose(){for(this.releaseEffects(),this._isDisposed=!0,this.stopRenderLoop(),this._emptyTexture&&(this._releaseTexture(this._emptyTexture),this._emptyTexture=null),this._emptyCubeTexture&&(this._releaseTexture(this._emptyCubeTexture),this._emptyCubeTexture=null),this._renderingCanvas=null,this.onBeforeTextureInitObservable&&this.onBeforeTextureInitObservable.clear();this.postProcesses.length;)this.postProcesses[0].dispose();for(;this.scenes.length;)this.scenes[0].dispose();for(;this._virtualScenes.length;)this._virtualScenes[0].dispose();this.releaseComputeEffects?.(),xi.ResetCache();for(const t of this._activeRequests)t.abort();this._boundRenderFunction=null,this.onDisposeObservable.notifyObservers(this),this.onDisposeObservable.clear(),this.onResizeObservable.clear(),this.onCanvasBlurObservable.clear(),this.onCanvasFocusObservable.clear(),this.onCanvasPointerOutObservable.clear(),this.onNewSceneAddedObservable.clear(),this.onEffectErrorObservable.clear(),Hi()&&window.removeEventListener("resize",this._checkForMobile);const e=St.Instances.indexOf(this);e>=0&&St.Instances.splice(e,1),St.Instances.length||(St.OnEnginesDisposedObservable.notifyObservers(this),St.OnEnginesDisposedObservable.clear()),this.onBeginFrameObservable.clear(),this.onEndFrameObservable.clear()}static DefaultLoadingScreenFactory(e){throw $e("LoadingScreen")}static MarkAllMaterialsAsDirty(e,t){for(let i=0;i<St.Instances.length;i++){const s=St.Instances[i];for(let n=0;n<s.scenes.length;n++)s.scenes[n].markAllMaterialsAsDirty(e,t)}}static GetCompatibleTextureLoader(e,t){return null}}Ue._RenderPassIdCounter=0;Ue._RescalePostProcessFactory=null;Ue.CollisionsEpsilon=.001;Ue.QueueNewFrame=TA;function EA(r){return r.getPipelineContext===void 0}class ZP{constructor(){this.shaderLanguage=0}postProcessor(e,t,i,s,n){if(n.drawBuffersExtensionDisabled){const o=/#extension.+GL_EXT_draw_buffers.+(enable|require)/g;e=e.replace(o,"")}return e}}const QP=/(flat\s)?\s*varying\s*.*/;class $P{constructor(){this.shaderLanguage=0}attributeProcessor(e){return e.replace("attribute","in")}varyingCheck(e,t){return QP.test(e)}varyingProcessor(e,t){return e.replace("varying",t?"in":"out")}postProcessor(e,t,i){const s=e.search(/#extension.+GL_EXT_draw_buffers.+require/)!==-1,n=/#extension.+(GL_OVR_multiview2|GL_OES_standard_derivatives|GL_EXT_shader_texture_lod|GL_EXT_frag_depth|GL_EXT_draw_buffers).+(enable|require)/g;if(e=e.replace(n,""),e=e.replace(/texture2D\s*\(/g,"texture("),i){const o=e.search(/layout *\(location *= *0\) *out/g)!==-1,l=t.indexOf("#define DUAL_SOURCE_BLENDING")!==-1,h=l?`layout(location = 0, index = 0) out vec4 glFragColor;
layout(location = 0, index = 1) out vec4 glFragColor2;
`:`layout(location = 0) out vec4 glFragColor;
`;l&&(e=`#extension GL_EXT_blend_func_extended : require
`+e),e=e.replace(/texture2DLodEXT\s*\(/g,"textureLod("),e=e.replace(/textureCubeLodEXT\s*\(/g,"textureLod("),e=e.replace(/textureCube\s*\(/g,"texture("),e=e.replace(/gl_FragDepthEXT/g,"gl_FragDepth"),e=e.replace(/gl_FragColor/g,"glFragColor"),e=e.replace(/gl_FragData/g,"glFragData"),e=e.replace(/void\s+?main\s*\(/g,(s||o?"":h)+"void main(")}else if(t.indexOf("#define VERTEXOUTPUT_INVARIANT")>=0&&(e=`invariant gl_Position;
`+e),t.indexOf("#define MULTIVIEW")!==-1)return`#extension GL_OVR_multiview2 : require
layout (num_views = 2) in;
`+e;return e}}class lh{get underlyingResource(){return null}constructor(){this.references=0,this.capacity=0,this.is32Bits=!1,this.uniqueId=lh._Counter++}}lh._Counter=0;class jc extends lh{constructor(e){super(),this._buffer=e}get underlyingResource(){return this._buffer}}function kc(r){let e=1;do e*=2;while(e<r);return e===r}function mT(r,e,t){return r*(1-t)+e*t}function JP(r){const e=yA(r),t=bA(r);return e-r>r-t?t:e}function yA(r){return r--,r|=r>>1,r|=r>>2,r|=r>>4,r|=r>>8,r|=r>>16,r++,r}function bA(r){return r=r|r>>1,r=r|r>>2,r=r|r>>4,r=r|r>>8,r=r|r>>16,r-(r>>1)}function Kc(r,e,t=2){let i;switch(t){case 1:i=bA(r);break;case 2:i=JP(r);break;case 3:default:i=yA(r);break}return Math.min(i,e)}class um{get underlyingResource(){return this._webGLTexture}constructor(e=null,t){if(this._MSAARenderBuffers=null,this._context=t,!e&&(e=t.createTexture(),!e))throw new Error("Unable to create webGL texture");this.set(e)}setUsage(){}set(e){this._webGLTexture=e}reset(){this._webGLTexture=null,this._MSAARenderBuffers=null}addMSAARenderBuffer(e){this._MSAARenderBuffers||(this._MSAARenderBuffers=[]),this._MSAARenderBuffers.push(e)}releaseMSAARenderBuffers(){if(this._MSAARenderBuffers){for(const e of this._MSAARenderBuffers)this._context.deleteRenderbuffer(e);this._MSAARenderBuffers=null}}getMSAARenderBuffer(e=0){return this._MSAARenderBuffers?.[e]??null}release(){this.releaseMSAARenderBuffers(),this._webGLTexture&&this._context.deleteTexture(this._webGLTexture),this.reset()}}function pT(r){return r===13||r===14||r===15||r===16||r===17||r===18||r===19}function Zc(r){return r===13||r===17||r===18||r===19}class ew{}class lt extends Ue{get name(){return this._name}set name(e){this._name=e}get version(){return this._webGLVersion}static get ShadersRepository(){return xi.ShadersRepository}static set ShadersRepository(e){xi.ShadersRepository=e}get supportsUniformBuffers(){return this.webGLVersion>1&&!this.disableUniformBuffers}get needPOTTextures(){return this._webGLVersion<2||this.forcePOTTextures}get _supportsHardwareTextureRescaling(){return!1}snapshotRenderingReset(){this.snapshotRendering=!1}constructor(e,t,i,s){if(i=i||{},super(t??i.antialias,i,s),this._name="WebGL",this.forcePOTTextures=!1,this.validateShaderPrograms=!1,this.disableUniformBuffers=!1,this._webGLVersion=1,this._vertexAttribArraysEnabled=[],this._uintIndicesCurrentlySet=!1,this._currentBoundBuffer=new Array,this._currentFramebuffer=null,this._dummyFramebuffer=null,this._currentBufferPointers=new Array,this._currentInstanceLocations=new Array,this._currentInstanceBuffers=new Array,this._vaoRecordInProgress=!1,this._mustWipeVertexAttributes=!1,this._nextFreeTextureSlots=new Array,this._maxSimultaneousTextures=0,this._maxMSAASamplesOverride=null,this._unpackFlipYCached=null,this.enableUnpackFlipYCached=!0,this._boundUniforms={},!e)return;let n;if(e.getContext){if(n=e,i.preserveDrawingBuffer===void 0&&(i.preserveDrawingBuffer=!1),i.xrCompatible===void 0&&(i.xrCompatible=!1),navigator&&navigator.userAgent){this._setupMobileChecks();const h=navigator.userAgent;for(const f of lt.ExceptionList){const d=f.key,_=f.targets;if(new RegExp(d).test(h)){if(f.capture&&f.captureConstraint){const g=f.capture,v=f.captureConstraint,T=new RegExp(g).exec(h);if(T&&T.length>0&&parseInt(T[T.length-1])>=v)continue}for(const g of _)switch(g){case"uniformBuffer":this.disableUniformBuffers=!0;break;case"vao":this.disableVertexArrayObjects=!0;break;case"antialias":i.antialias=!1;break;case"maxMSAASamples":this._maxMSAASamplesOverride=1;break}}}}if(this._doNotHandleContextLost?this._onContextLost=()=>{z_(this._gl)}:(this._onContextLost=h=>{h.preventDefault(),this._contextWasLost=!0,z_(this._gl),ge.Warn("WebGL context lost."),this.onContextLostObservable.notifyObservers(this)},this._onContextRestored=()=>{this._restoreEngineAfterContextLost(()=>this._initGLContext())},n.addEventListener("webglcontextrestored",this._onContextRestored,!1),i.powerPreference=i.powerPreference||"high-performance"),n.addEventListener("webglcontextlost",this._onContextLost,!1),this._badDesktopOS&&(i.xrCompatible=!1),!i.disableWebGL2Support)try{this._gl=n.getContext("webgl2",i)||n.getContext("experimental-webgl2",i),this._gl&&(this._webGLVersion=2,this._shaderPlatformName="WEBGL2",this._gl.deleteQuery||(this._webGLVersion=1,this._shaderPlatformName="WEBGL1"))}catch{}if(!this._gl){if(!n)throw new Error("The provided canvas is null or undefined.");try{this._gl=n.getContext("webgl",i)||n.getContext("experimental-webgl",i)}catch(h){throw new Error("WebGL not supported",{cause:h})}}if(!this._gl)throw new Error("WebGL not supported")}else{this._gl=e,n=this._gl.canvas,this._gl.renderbufferStorageMultisample?(this._webGLVersion=2,this._shaderPlatformName="WEBGL2"):this._shaderPlatformName="WEBGL1";const h=this._gl.getContextAttributes();h&&(i.stencil=h.stencil)}this._sharedInit(n),this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL,this._gl.NONE),i.useHighPrecisionFloats!==void 0&&(this._highPrecisionShadersAllowed=i.useHighPrecisionFloats),this.resize(),this._initGLContext(),this._initFeatures();for(let h=0;h<this._caps.maxVertexAttribs;h++)this._currentBufferPointers[h]=new ew;this._shaderProcessor=this.webGLVersion>1?new $P:new ZP;const o=`Babylon.js v${lt.Version}`;ge.Log(o+` - ${this.description}`),this._renderingCanvas&&this._renderingCanvas.setAttribute&&this._renderingCanvas.setAttribute("data-engine",o);const l=Ms(this._gl);l.validateShaderPrograms=this.validateShaderPrograms,l.parallelShaderCompile=this._caps.parallelShaderCompile}_clearEmptyResources(){this._dummyFramebuffer=null,super._clearEmptyResources()}_getShaderProcessingContext(e){return null}areAllEffectsReady(){for(const e in this._compiledEffects)if(!this._compiledEffects[e].isReady())return!1;return!0}_initGLContext(){this._caps={maxTexturesImageUnits:this._gl.getParameter(this._gl.MAX_TEXTURE_IMAGE_UNITS),maxCombinedTexturesImageUnits:this._gl.getParameter(this._gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),maxVertexTextureImageUnits:this._gl.getParameter(this._gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS),maxTextureSize:this._gl.getParameter(this._gl.MAX_TEXTURE_SIZE),maxSamples:this._webGLVersion>1?this._gl.getParameter(this._gl.MAX_SAMPLES):1,maxCubemapTextureSize:this._gl.getParameter(this._gl.MAX_CUBE_MAP_TEXTURE_SIZE),maxRenderTextureSize:this._gl.getParameter(this._gl.MAX_RENDERBUFFER_SIZE),maxVertexAttribs:this._gl.getParameter(this._gl.MAX_VERTEX_ATTRIBS),maxVaryingVectors:this._gl.getParameter(this._gl.MAX_VARYING_VECTORS),maxFragmentUniformVectors:this._gl.getParameter(this._gl.MAX_FRAGMENT_UNIFORM_VECTORS),maxVertexUniformVectors:this._gl.getParameter(this._gl.MAX_VERTEX_UNIFORM_VECTORS),shaderFloatPrecision:0,parallelShaderCompile:this._gl.getExtension("KHR_parallel_shader_compile")||void 0,standardDerivatives:this._webGLVersion>1||this._gl.getExtension("OES_standard_derivatives")!==null,maxAnisotropy:1,astc:this._gl.getExtension("WEBGL_compressed_texture_astc")||this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_astc"),bptc:this._gl.getExtension("EXT_texture_compression_bptc")||this._gl.getExtension("WEBKIT_EXT_texture_compression_bptc"),s3tc:this._gl.getExtension("WEBGL_compressed_texture_s3tc")||this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc"),s3tc_srgb:this._gl.getExtension("WEBGL_compressed_texture_s3tc_srgb")||this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc_srgb"),pvrtc:this._gl.getExtension("WEBGL_compressed_texture_pvrtc")||this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),etc1:this._gl.getExtension("WEBGL_compressed_texture_etc1")||this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_etc1"),etc2:this._gl.getExtension("WEBGL_compressed_texture_etc")||this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_etc")||this._gl.getExtension("WEBGL_compressed_texture_es3_0"),textureAnisotropicFilterExtension:this._gl.getExtension("EXT_texture_filter_anisotropic")||this._gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic")||this._gl.getExtension("MOZ_EXT_texture_filter_anisotropic"),uintIndices:this._webGLVersion>1||this._gl.getExtension("OES_element_index_uint")!==null,fragmentDepthSupported:this._webGLVersion>1||this._gl.getExtension("EXT_frag_depth")!==null,highPrecisionShaderSupported:!1,timerQuery:this._gl.getExtension("EXT_disjoint_timer_query_webgl2")||this._gl.getExtension("EXT_disjoint_timer_query"),supportOcclusionQuery:this._webGLVersion>1,canUseTimestampForTimerQuery:!1,drawBuffersExtension:!1,maxMSAASamples:1,colorBufferFloat:!!(this._webGLVersion>1&&this._gl.getExtension("EXT_color_buffer_float")),blendFloat:this._gl.getExtension("EXT_float_blend")!==null,supportFloatTexturesResolve:!1,rg11b10ufColorRenderable:!1,colorBufferHalfFloat:!!(this._webGLVersion>1&&this._gl.getExtension("EXT_color_buffer_half_float")),textureFloat:!!(this._webGLVersion>1||this._gl.getExtension("OES_texture_float")),textureHalfFloat:!!(this._webGLVersion>1||this._gl.getExtension("OES_texture_half_float")),textureHalfFloatRender:!1,textureFloatLinearFiltering:!1,textureFloatRender:!1,textureHalfFloatLinearFiltering:!1,vertexArrayObject:!1,instancedArrays:!1,textureLOD:!!(this._webGLVersion>1||this._gl.getExtension("EXT_shader_texture_lod")),texelFetch:this._webGLVersion!==1,blendMinMax:!1,multiview:this._gl.getExtension("OVR_multiview2"),oculusMultiview:this._gl.getExtension("OCULUS_multiview"),depthTextureExtension:!1,canUseGLInstanceID:this._webGLVersion>1,canUseGLVertexID:this._webGLVersion>1,supportComputeShaders:!1,supportSRGBBuffers:!1,supportTransformFeedbacks:this._webGLVersion>1,textureMaxLevel:this._webGLVersion>1,texture2DArrayMaxLayerCount:this._webGLVersion>1?this._gl.getParameter(this._gl.MAX_ARRAY_TEXTURE_LAYERS):128,disableMorphTargetTexture:!1,textureNorm16:!!this._gl.getExtension("EXT_texture_norm16"),blendParametersPerTarget:!1,dualSourceBlending:!1,supportReadWriteStorageTextures:!1},this._caps.supportFloatTexturesResolve=this._caps.colorBufferFloat,this._caps.rg11b10ufColorRenderable=this._caps.colorBufferFloat,this._glVersion=this._gl.getParameter(this._gl.VERSION);const e=this._gl.getExtension("WEBGL_debug_renderer_info");e!=null&&(this._glRenderer=this._gl.getParameter(e.UNMASKED_RENDERER_WEBGL),this._glVendor=this._gl.getParameter(e.UNMASKED_VENDOR_WEBGL)),this._glVendor||(this._glVendor=this._gl.getParameter(this._gl.VENDOR)||"Unknown vendor"),this._glRenderer||(this._glRenderer=this._gl.getParameter(this._gl.RENDERER)||"Unknown renderer"),this._gl.HALF_FLOAT_OES!==36193&&(this._gl.HALF_FLOAT_OES=36193),this._gl.RGBA16F!==34842&&(this._gl.RGBA16F=34842),this._gl.RGBA32F!==34836&&(this._gl.RGBA32F=34836),this._gl.DEPTH24_STENCIL8!==35056&&(this._gl.DEPTH24_STENCIL8=35056),this._caps.timerQuery&&(this._webGLVersion===1&&(this._gl.getQuery=this._caps.timerQuery.getQueryEXT.bind(this._caps.timerQuery)),this._caps.canUseTimestampForTimerQuery=(this._gl.getQuery(this._caps.timerQuery.TIMESTAMP_EXT,this._caps.timerQuery.QUERY_COUNTER_BITS_EXT)??0)>0),this._caps.maxAnisotropy=this._caps.textureAnisotropicFilterExtension?this._gl.getParameter(this._caps.textureAnisotropicFilterExtension.MAX_TEXTURE_MAX_ANISOTROPY_EXT):0,this._caps.textureFloatLinearFiltering=!!(this._caps.textureFloat&&this._gl.getExtension("OES_texture_float_linear")),this._caps.textureFloatRender=!!(this._caps.textureFloat&&this._canRenderToFloatFramebuffer()),this._caps.textureHalfFloatLinearFiltering=!!(this._webGLVersion>1||this._caps.textureHalfFloat&&this._gl.getExtension("OES_texture_half_float_linear")),this._caps.textureNorm16&&(this._gl.R16_EXT=33322,this._gl.RG16_EXT=33324,this._gl.RGB16_EXT=32852,this._gl.RGBA16_EXT=32859,this._gl.R16_SNORM_EXT=36760,this._gl.RG16_SNORM_EXT=36761,this._gl.RGB16_SNORM_EXT=36762,this._gl.RGBA16_SNORM_EXT=36763);const t=this._gl.getExtension("OES_draw_buffers_indexed");if(this._caps.blendParametersPerTarget=!!t,this._alphaState=new SA(this._caps.blendParametersPerTarget),t&&(this._gl.blendEquationSeparateIndexed=t.blendEquationSeparateiOES.bind(t),this._gl.blendEquationIndexed=t.blendEquationiOES.bind(t),this._gl.blendFuncSeparateIndexed=t.blendFuncSeparateiOES.bind(t),this._gl.blendFuncIndexed=t.blendFunciOES.bind(t),this._gl.colorMaskIndexed=t.colorMaskiOES.bind(t),this._gl.disableIndexed=t.disableiOES.bind(t),this._gl.enableIndexed=t.enableiOES.bind(t)),this._caps.dualSourceBlending=!!this._gl.getExtension("WEBGL_blend_func_extended"),this._caps.astc&&(this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR=this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR,this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR=this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR,this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR=this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR,this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR=this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR,this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR=this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR,this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR=this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR,this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR=this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR,this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR=this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR,this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR=this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR,this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR=this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR,this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR=this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR,this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR=this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR,this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR=this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR,this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR=this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR),this._caps.bptc&&(this._gl.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT=this._caps.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT),this._caps.s3tc_srgb&&(this._gl.COMPRESSED_SRGB_S3TC_DXT1_EXT=this._caps.s3tc_srgb.COMPRESSED_SRGB_S3TC_DXT1_EXT,this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT=this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT,this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT=this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT),this._caps.etc2&&(this._gl.COMPRESSED_SRGB8_ETC2=this._caps.etc2.COMPRESSED_SRGB8_ETC2,this._gl.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=this._caps.etc2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC),this._webGLVersion>1&&this._gl.HALF_FLOAT_OES!==5131&&(this._gl.HALF_FLOAT_OES=5131),this._caps.textureHalfFloatRender=this._caps.textureHalfFloat&&this._canRenderToHalfFloatFramebuffer(),this._webGLVersion>1)this._caps.drawBuffersExtension=!0,this._caps.maxMSAASamples=this._maxMSAASamplesOverride!==null?this._maxMSAASamplesOverride:this._gl.getParameter(this._gl.MAX_SAMPLES),this._caps.maxDrawBuffers=this._gl.getParameter(this._gl.MAX_DRAW_BUFFERS);else{const i=this._gl.getExtension("WEBGL_draw_buffers");if(i!==null){this._caps.drawBuffersExtension=!0,this._gl.drawBuffers=i.drawBuffersWEBGL.bind(i),this._caps.maxDrawBuffers=this._gl.getParameter(i.MAX_DRAW_BUFFERS_WEBGL),this._gl.DRAW_FRAMEBUFFER=this._gl.FRAMEBUFFER;for(let s=0;s<16;s++)this._gl["COLOR_ATTACHMENT"+s+"_WEBGL"]=i["COLOR_ATTACHMENT"+s+"_WEBGL"]}}if(this._webGLVersion>1)this._caps.depthTextureExtension=!0;else{const i=this._gl.getExtension("WEBGL_depth_texture");i!=null&&(this._caps.depthTextureExtension=!0,this._gl.UNSIGNED_INT_24_8=i.UNSIGNED_INT_24_8_WEBGL)}if(this.disableVertexArrayObjects)this._caps.vertexArrayObject=!1;else if(this._webGLVersion>1)this._caps.vertexArrayObject=!0;else{const i=this._gl.getExtension("OES_vertex_array_object");i!=null&&(this._caps.vertexArrayObject=!0,this._gl.createVertexArray=i.createVertexArrayOES.bind(i),this._gl.bindVertexArray=i.bindVertexArrayOES.bind(i),this._gl.deleteVertexArray=i.deleteVertexArrayOES.bind(i))}if(this._webGLVersion>1)this._caps.instancedArrays=!0;else{const i=this._gl.getExtension("ANGLE_instanced_arrays");i!=null?(this._caps.instancedArrays=!0,this._gl.drawArraysInstanced=i.drawArraysInstancedANGLE.bind(i),this._gl.drawElementsInstanced=i.drawElementsInstancedANGLE.bind(i),this._gl.vertexAttribDivisor=i.vertexAttribDivisorANGLE.bind(i)):this._caps.instancedArrays=!1}if(this._gl.getShaderPrecisionFormat){const i=this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER,this._gl.HIGH_FLOAT),s=this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER,this._gl.HIGH_FLOAT);if(i&&s&&(this._caps.highPrecisionShaderSupported=i.precision!==0&&s.precision!==0,this._caps.shaderFloatPrecision=Math.min(i.precision,s.precision)),!this._shouldUseHighPrecisionShader){const n=this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER,this._gl.MEDIUM_FLOAT),o=this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER,this._gl.MEDIUM_FLOAT);n&&o&&(this._caps.shaderFloatPrecision=Math.min(n.precision,o.precision))}this._caps.shaderFloatPrecision<10&&(this._caps.shaderFloatPrecision=10)}if(this._webGLVersion>1)this._caps.blendMinMax=!0;else{const i=this._gl.getExtension("EXT_blend_minmax");i!=null&&(this._caps.blendMinMax=!0,this._gl.MAX=i.MAX_EXT,this._gl.MIN=i.MIN_EXT)}if(!this._caps.supportSRGBBuffers){if(this._webGLVersion>1)this._caps.supportSRGBBuffers=!0,this._glSRGBExtensionValues={SRGB:WebGL2RenderingContext.SRGB,SRGB8:WebGL2RenderingContext.SRGB8,SRGB8_ALPHA8:WebGL2RenderingContext.SRGB8_ALPHA8};else{const i=this._gl.getExtension("EXT_sRGB");i!=null&&(this._caps.supportSRGBBuffers=!0,this._glSRGBExtensionValues={SRGB:i.SRGB_EXT,SRGB8:i.SRGB_ALPHA_EXT,SRGB8_ALPHA8:i.SRGB_ALPHA_EXT})}if(this._creationOptions){const i=this._creationOptions.forceSRGBBufferSupportState;i!==void 0&&(this._caps.supportSRGBBuffers=this._caps.supportSRGBBuffers&&i)}}this._depthCullingState.depthTest=!0,this._depthCullingState.depthFunc=this._gl.LEQUAL,this._depthCullingState.depthMask=!0,this._maxSimultaneousTextures=this._caps.maxCombinedTexturesImageUnits;for(let i=0;i<this._maxSimultaneousTextures;i++)this._nextFreeTextureSlots.push(i);this._glRenderer==="Mali-G72"&&(this._caps.disableMorphTargetTexture=!0)}_initFeatures(){this._features={forceBitmapOverHTMLImageElement:typeof HTMLImageElement>"u",supportRenderAndCopyToLodForFloatTextures:this._webGLVersion!==1,supportDepthStencilTexture:this._webGLVersion!==1,supportShadowSamplers:this._webGLVersion!==1,uniformBufferHardCheckMatrix:!1,allowTexturePrefiltering:this._webGLVersion!==1,trackUbosInFrame:!1,checkUbosContentBeforeUpload:!1,supportCSM:this._webGLVersion!==1,basisNeedsPOT:this._webGLVersion===1,support3DTextures:this._webGLVersion!==1,needTypeSuffixInShaderConstants:this._webGLVersion!==1,supportMSAA:this._webGLVersion!==1,supportSSAO2:this._webGLVersion!==1,supportIBLShadows:this._webGLVersion!==1,supportExtendedTextureFormats:this._webGLVersion!==1,supportSwitchCaseInShader:this._webGLVersion!==1,supportSyncTextureRead:!0,needsInvertingBitmap:!0,useUBOBindingCache:!0,needShaderCodeInlining:!1,needToAlwaysBindUniformBuffers:!1,supportRenderPasses:!1,supportSpriteInstancing:!0,forceVertexBufferStrideAndOffsetMultiple4Bytes:!1,_checkNonFloatVertexBuffersDontRecreatePipelineContext:!1}}get webGLVersion(){return this._webGLVersion}getClassName(){return"ThinEngine"}_prepareWorkingCanvas(){if(this._workingCanvas)return;this._workingCanvas=this.createCanvas(1,1);const e=this._workingCanvas.getContext("2d");e&&(this._workingContext=e)}getInfo(){return this.getGlInfo()}getGlInfo(){return{vendor:this._glVendor,renderer:this._glRenderer,version:this._glVersion}}extractDriverInfo(){const e=this.getGlInfo();return e&&e.renderer?e.renderer:""}getRenderWidth(e=!1){return!e&&this._currentRenderTarget?this._currentRenderTarget.width:this._framebufferDimensionsObject?this._framebufferDimensionsObject.framebufferWidth:this._gl.drawingBufferWidth}getRenderHeight(e=!1){return!e&&this._currentRenderTarget?this._currentRenderTarget.height:this._framebufferDimensionsObject?this._framebufferDimensionsObject.framebufferHeight:this._gl.drawingBufferHeight}clear(e,t,i,s=!1,n=0){const o=this.stencilStateComposer.useStencilGlobalOnly;this.stencilStateComposer.useStencilGlobalOnly=!0,this.applyStates(),this.stencilStateComposer.useStencilGlobalOnly=o;let l=0;if(t&&e){let h=!0;if(this._currentRenderTarget){const f=this._currentRenderTarget.texture?.format;if(f===8||f===9||f===10||f===11){const d=this._currentRenderTarget.texture?.type;d===7||d===5?(lt._TempClearColorUint32[0]=e.r*255,lt._TempClearColorUint32[1]=e.g*255,lt._TempClearColorUint32[2]=e.b*255,lt._TempClearColorUint32[3]=e.a*255,this._gl.clearBufferuiv(this._gl.COLOR,0,lt._TempClearColorUint32),h=!1):(lt._TempClearColorInt32[0]=e.r*255,lt._TempClearColorInt32[1]=e.g*255,lt._TempClearColorInt32[2]=e.b*255,lt._TempClearColorInt32[3]=e.a*255,this._gl.clearBufferiv(this._gl.COLOR,0,lt._TempClearColorInt32),h=!1)}}h&&(this._gl.clearColor(e.r,e.g,e.b,e.a!==void 0?e.a:1),l|=this._gl.COLOR_BUFFER_BIT)}i&&(this.useReverseDepthBuffer?(this._depthCullingState.depthFunc=this._gl.GEQUAL,this._gl.clearDepth(0)):this._gl.clearDepth(1),l|=this._gl.DEPTH_BUFFER_BIT),s&&(this._gl.clearStencil(n),l|=this._gl.STENCIL_BUFFER_BIT),this._gl.clear(l)}_viewport(e,t,i,s){(e!==this._viewportCached.x||t!==this._viewportCached.y||i!==this._viewportCached.z||s!==this._viewportCached.w)&&(this._viewportCached.x=e,this._viewportCached.y=t,this._viewportCached.z=i,this._viewportCached.w=s,this._gl.viewport(e,t,i,s))}endFrame(){super.endFrame(),this._badOS&&this.flushFramebuffer()}get performanceMonitor(){throw new Error("Not Supported by ThinEngine")}bindFramebuffer(e,t=0,i,s,n,o=0,l=0){const h=e;this._currentRenderTarget&&this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget),this._currentRenderTarget=e,this._bindUnboundFramebuffer(h._framebuffer);const f=this._gl;e.isMulti||(e.is2DArray||e.is3D?(f.framebufferTextureLayer(f.FRAMEBUFFER,f.COLOR_ATTACHMENT0,e.texture._hardwareTexture?.underlyingResource,o,l),h._currentLOD=o):e.isCube?f.framebufferTexture2D(f.FRAMEBUFFER,f.COLOR_ATTACHMENT0,f.TEXTURE_CUBE_MAP_POSITIVE_X+t,e.texture._hardwareTexture?.underlyingResource,o):h._currentLOD!==o&&(f.framebufferTexture2D(f.FRAMEBUFFER,f.COLOR_ATTACHMENT0,f.TEXTURE_2D,e.texture._hardwareTexture?.underlyingResource,o),h._currentLOD=o));const d=e._depthStencilTexture;if(d){e.is3D&&(e.texture.width!==d.width||e.texture.height!==d.height||e.texture.depth!==d.depth)&&ge.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment");const _=e._depthStencilTextureWithStencil?f.DEPTH_STENCIL_ATTACHMENT:f.DEPTH_ATTACHMENT;e.is2DArray||e.is3D?f.framebufferTextureLayer(f.FRAMEBUFFER,_,d._hardwareTexture?.underlyingResource,o,l):e.isCube?f.framebufferTexture2D(f.FRAMEBUFFER,_,f.TEXTURE_CUBE_MAP_POSITIVE_X+t,d._hardwareTexture?.underlyingResource,o):f.framebufferTexture2D(f.FRAMEBUFFER,_,f.TEXTURE_2D,d._hardwareTexture?.underlyingResource,o)}h._MSAAFramebuffer&&this._bindUnboundFramebuffer(h._MSAAFramebuffer),this._cachedViewport&&!n?this.setViewport(this._cachedViewport,i,s):(i||(i=e.width,o&&(i=i/Math.pow(2,o))),s||(s=e.height,o&&(s=s/Math.pow(2,o))),this._viewport(0,0,i,s)),this.wipeCaches()}setStateCullFaceType(e,t){const i=this.cullBackFaces??e??!0?this._gl.BACK:this._gl.FRONT;(this._depthCullingState.cullFace!==i||t)&&(this._depthCullingState.cullFace=i)}setState(e,t=0,i,s=!1,n,o,l=0){(this._depthCullingState.cull!==e||i)&&(this._depthCullingState.cull=e),this.setStateCullFaceType(n,i),this.setZOffset(t),this.setZOffsetUnits(l);const h=s?this._gl.CW:this._gl.CCW;(this._depthCullingState.frontFace!==h||i)&&(this._depthCullingState.frontFace=h),this._stencilStateComposer.stencilMaterial=o}_resolveAndGenerateMipMapsFramebuffer(e,t=!1){e.disableAutomaticMSAAResolve||(e.isMulti?this.resolveMultiFramebuffer(e):this.resolveFramebuffer(e)),t||(e.isMulti?this.generateMipMapsMultiFramebuffer(e):this.generateMipMapsFramebuffer(e))}_bindUnboundFramebuffer(e){this._currentFramebuffer!==e&&(this._gl.bindFramebuffer(this._gl.FRAMEBUFFER,e),this._currentFramebuffer=e)}_currentFrameBufferIsDefaultFrameBuffer(){return this._currentFramebuffer===null}generateMipmaps(e){const t=this._getTextureTarget(e);this._bindTextureDirectly(t,e,!0),this._gl.generateMipmap(t),this._bindTextureDirectly(t,null)}unBindFramebuffer(e,t,i){const s=e;this._currentRenderTarget=null,this._resolveAndGenerateMipMapsFramebuffer(e,t),i&&(s._MSAAFramebuffer&&this._bindUnboundFramebuffer(s._framebuffer),i()),this._bindUnboundFramebuffer(null)}generateMipMapsFramebuffer(e){!e.isMulti&&e.texture?.generateMipMaps&&!e.isCube&&this.generateMipmaps(e.texture)}resolveFramebuffer(e){const t=e,i=this._gl;if(!t._MSAAFramebuffer||t.isMulti)return;let s=t.resolveMSAAColors?i.COLOR_BUFFER_BIT:0;s|=t._generateDepthBuffer&&t.resolveMSAADepth?i.DEPTH_BUFFER_BIT:0,s|=t._generateStencilBuffer&&t.resolveMSAAStencil?i.STENCIL_BUFFER_BIT:0,i.bindFramebuffer(i.READ_FRAMEBUFFER,t._MSAAFramebuffer),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,t._framebuffer),i.blitFramebuffer(0,0,e.width,e.height,0,0,e.width,e.height,s,i.NEAREST)}flushFramebuffer(){this._gl.flush()}restoreDefaultFramebuffer(){this._currentRenderTarget?this.unBindFramebuffer(this._currentRenderTarget):this._bindUnboundFramebuffer(null),this._cachedViewport&&this.setViewport(this._cachedViewport),this.wipeCaches()}_resetVertexBufferBinding(){this.bindArrayBuffer(null),this._cachedVertexBuffers=null}createVertexBuffer(e,t,i){return this._createVertexBuffer(e,this._gl.STATIC_DRAW)}_createVertexBuffer(e,t){const i=this._gl.createBuffer();if(!i)throw new Error("Unable to create vertex buffer");const s=new jc(i);return this.bindArrayBuffer(s),typeof e!="number"?e instanceof Array?(this._gl.bufferData(this._gl.ARRAY_BUFFER,new Float32Array(e),t),s.capacity=e.length*4):(this._gl.bufferData(this._gl.ARRAY_BUFFER,e,t),s.capacity=e.byteLength):(this._gl.bufferData(this._gl.ARRAY_BUFFER,new Uint8Array(e),t),s.capacity=e),this._resetVertexBufferBinding(),s.references=1,s}createDynamicVertexBuffer(e,t){return this._createVertexBuffer(e,this._gl.DYNAMIC_DRAW)}_resetIndexBufferBinding(){this.bindIndexBuffer(null),this._cachedIndexBuffer=null}createIndexBuffer(e,t,i){const s=this._gl.createBuffer(),n=new jc(s);if(!s)throw new Error("Unable to create index buffer");this.bindIndexBuffer(n);const o=this._normalizeIndexData(e);return this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER,o,t?this._gl.DYNAMIC_DRAW:this._gl.STATIC_DRAW),this._resetIndexBufferBinding(),n.references=1,n.is32Bits=o.BYTES_PER_ELEMENT===4,n}_normalizeIndexData(e){if(e.BYTES_PER_ELEMENT===2)return e;if(this._caps.uintIndices){if(e instanceof Uint32Array)return e;for(let i=0;i<e.length;i++)if(e[i]>=65535)return new Uint32Array(e);return new Uint16Array(e)}return new Uint16Array(e)}bindArrayBuffer(e){this._vaoRecordInProgress||this._unbindVertexArrayObject(),this._bindBuffer(e,this._gl.ARRAY_BUFFER)}bindUniformBlock(e,t,i){const s=e.program,n=this._gl.getUniformBlockIndex(s,t);this._gl.uniformBlockBinding(s,n,i)}bindIndexBuffer(e){this._vaoRecordInProgress||this._unbindVertexArrayObject(),this._bindBuffer(e,this._gl.ELEMENT_ARRAY_BUFFER)}_bindBuffer(e,t){(this._vaoRecordInProgress||this._currentBoundBuffer[t]!==e)&&(this._gl.bindBuffer(t,e?e.underlyingResource:null),this._currentBoundBuffer[t]=e)}updateArrayBuffer(e){this._gl.bufferSubData(this._gl.ARRAY_BUFFER,0,e)}_vertexAttribPointer(e,t,i,s,n,o,l){const h=this._currentBufferPointers[t];if(!h)return;let f=!1;h.active?(h.buffer!==e&&(h.buffer=e,f=!0),h.size!==i&&(h.size=i,f=!0),h.type!==s&&(h.type=s,f=!0),h.normalized!==n&&(h.normalized=n,f=!0),h.stride!==o&&(h.stride=o,f=!0),h.offset!==l&&(h.offset=l,f=!0)):(f=!0,h.active=!0,h.index=t,h.size=i,h.type=s,h.normalized=n,h.stride=o,h.offset=l,h.buffer=e),(f||this._vaoRecordInProgress)&&(this.bindArrayBuffer(e),s===this._gl.UNSIGNED_INT||s===this._gl.INT?this._gl.vertexAttribIPointer(t,i,s,o,l):this._gl.vertexAttribPointer(t,i,s,n,o,l))}_bindIndexBufferWithCache(e){e!=null&&this._cachedIndexBuffer!==e&&(this._cachedIndexBuffer=e,this.bindIndexBuffer(e),this._uintIndicesCurrentlySet=e.is32Bits)}_bindVertexBuffersAttributes(e,t,i){const s=t.getAttributesNames();this._vaoRecordInProgress||this._unbindVertexArrayObject(),this.unbindAllAttributes();for(let n=0;n<s.length;n++){const o=t.getAttributeLocation(n);if(o>=0){const l=s[n];let h=null;if(i&&(h=i[l]),h||(h=e[l]),!h)continue;this._gl.enableVertexAttribArray(o),this._vaoRecordInProgress||(this._vertexAttribArraysEnabled[o]=!0);const f=h.getBuffer();f&&(this._vertexAttribPointer(f,o,h.getSize(),h.type,h.normalized,h.byteStride,h.byteOffset),h.getIsInstanced()&&(this._gl.vertexAttribDivisor(o,h.getInstanceDivisor()),this._vaoRecordInProgress||(this._currentInstanceLocations.push(o),this._currentInstanceBuffers.push(f))))}}}recordVertexArrayObject(e,t,i,s){const n=this._gl.createVertexArray();if(!n)throw new Error("Unable to create VAO");return this._vaoRecordInProgress=!0,this._gl.bindVertexArray(n),this._mustWipeVertexAttributes=!0,this._bindVertexBuffersAttributes(e,i,s),this.bindIndexBuffer(t),this._vaoRecordInProgress=!1,this._gl.bindVertexArray(null),n}bindVertexArrayObject(e,t){this._cachedVertexArrayObject!==e&&(this._cachedVertexArrayObject=e,this._gl.bindVertexArray(e),this._cachedVertexBuffers=null,this._cachedIndexBuffer=null,this._uintIndicesCurrentlySet=t!=null&&t.is32Bits,this._mustWipeVertexAttributes=!0)}bindBuffersDirectly(e,t,i,s,n){if(this._cachedVertexBuffers!==e||this._cachedEffectForVertexBuffers!==n){this._cachedVertexBuffers=e,this._cachedEffectForVertexBuffers=n;const o=n.getAttributesCount();this._unbindVertexArrayObject(),this.unbindAllAttributes();let l=0;for(let h=0;h<o;h++)if(h<i.length){const f=n.getAttributeLocation(h);f>=0&&(this._gl.enableVertexAttribArray(f),this._vertexAttribArraysEnabled[f]=!0,this._vertexAttribPointer(e,f,i[h],this._gl.FLOAT,!1,s,l)),l+=i[h]*4}}this._bindIndexBufferWithCache(t)}_unbindVertexArrayObject(){this._cachedVertexArrayObject&&(this._cachedVertexArrayObject=null,this._gl.bindVertexArray(null))}bindBuffers(e,t,i,s){(this._cachedVertexBuffers!==e||this._cachedEffectForVertexBuffers!==i)&&(this._cachedVertexBuffers=e,this._cachedEffectForVertexBuffers=i,this._bindVertexBuffersAttributes(e,i,s)),this._bindIndexBufferWithCache(t)}unbindInstanceAttributes(){let e;for(let t=0,i=this._currentInstanceLocations.length;t<i;t++){const s=this._currentInstanceBuffers[t];e!=s&&s.references&&(e=s,this.bindArrayBuffer(s));const n=this._currentInstanceLocations[t];this._gl.vertexAttribDivisor(n,0)}this._currentInstanceBuffers.length=0,this._currentInstanceLocations.length=0}releaseVertexArrayObject(e){this._gl.deleteVertexArray(e)}_releaseBuffer(e){return e.references--,e.references===0?(this._deleteBuffer(e),!0):!1}_deleteBuffer(e){this._gl.deleteBuffer(e.underlyingResource)}updateAndBindInstancesBuffer(e,t,i){if(this.bindArrayBuffer(e),t&&this._gl.bufferSubData(this._gl.ARRAY_BUFFER,0,t),i[0].index!==void 0)this.bindInstancesBuffer(e,i,!0);else for(let s=0;s<4;s++){const n=i[s];this._vertexAttribArraysEnabled[n]||(this._gl.enableVertexAttribArray(n),this._vertexAttribArraysEnabled[n]=!0),this._vertexAttribPointer(e,n,4,this._gl.FLOAT,!1,64,s*16),this._gl.vertexAttribDivisor(n,1),this._currentInstanceLocations.push(n),this._currentInstanceBuffers.push(e)}}bindInstancesBuffer(e,t,i=!0){this.bindArrayBuffer(e);let s=0;if(i)for(let n=0;n<t.length;n++){const o=t[n];s+=o.attributeSize*4}for(let n=0;n<t.length;n++){const o=t[n];o.index===void 0&&(o.index=this._currentEffect.getAttributeLocationByName(o.attributeName)),!(o.index<0)&&(this._vertexAttribArraysEnabled[o.index]||(this._gl.enableVertexAttribArray(o.index),this._vertexAttribArraysEnabled[o.index]=!0),this._vertexAttribPointer(e,o.index,o.attributeSize,o.attributeType||this._gl.FLOAT,o.normalized||!1,s,o.offset),this._gl.vertexAttribDivisor(o.index,o.divisor===void 0?1:o.divisor),this._currentInstanceLocations.push(o.index),this._currentInstanceBuffers.push(e))}}disableInstanceAttributeByName(e){if(!this._currentEffect)return;const t=this._currentEffect.getAttributeLocationByName(e);this.disableInstanceAttribute(t)}disableInstanceAttribute(e){let t=!1,i;for(;(i=this._currentInstanceLocations.indexOf(e))!==-1;)this._currentInstanceLocations.splice(i,1),this._currentInstanceBuffers.splice(i,1),t=!0;t&&(this._gl.vertexAttribDivisor(e,0),this.disableAttributeByIndex(e))}disableAttributeByIndex(e){this._gl.disableVertexAttribArray(e),this._vertexAttribArraysEnabled[e]=!1,this._currentBufferPointers[e].active=!1}draw(e,t,i,s){this.drawElementsType(e?0:1,t,i,s)}drawPointClouds(e,t,i){this.drawArraysType(2,e,t,i)}drawUnIndexed(e,t,i,s){this.drawArraysType(e?0:1,t,i,s)}drawElementsType(e,t,i,s){this.applyStates(),this._reportDrawCall();const n=this._drawMode(e),o=this._uintIndicesCurrentlySet?this._gl.UNSIGNED_INT:this._gl.UNSIGNED_SHORT,l=this._uintIndicesCurrentlySet?4:2;s?this._gl.drawElementsInstanced(n,i,o,t*l,s):this._gl.drawElements(n,i,o,t*l)}drawArraysType(e,t,i,s){this.applyStates(),this._reportDrawCall();const n=this._drawMode(e);s?this._gl.drawArraysInstanced(n,t,i,s):this._gl.drawArrays(n,t,i)}_drawMode(e){switch(e){case 0:return this._gl.TRIANGLES;case 2:return this._gl.POINTS;case 1:return this._gl.LINES;case 3:return this._gl.POINTS;case 4:return this._gl.LINES;case 5:return this._gl.LINE_LOOP;case 6:return this._gl.LINE_STRIP;case 7:return this._gl.TRIANGLE_STRIP;case 8:return this._gl.TRIANGLE_FAN;default:return this._gl.TRIANGLES}}_releaseEffect(e){this._compiledEffects[e._key]&&delete this._compiledEffects[e._key];const t=e.getPipelineContext();t&&this._deletePipelineContext(t)}_deletePipelineContext(e){const t=e;t&&t.program&&(t.program.__SPECTOR_rebuildProgram=null,xA(t),this._gl&&(this._currentProgram===t.program&&this._setProgram(null),this._gl.deleteProgram(t.program)))}_getGlobalDefines(e){return mA(e,this.isNDCHalfZRange,this.useReverseDepthBuffer,this.useExactSrgbConversions)}createEffect(e,t,i,s,n,o,l,h,f,d=0,_){const p=typeof e=="string"?e:e.vertexToken||e.vertexSource||e.vertexElement||e.vertex,g=typeof e=="string"?e:e.fragmentToken||e.fragmentSource||e.fragmentElement||e.fragment,v=this._getGlobalDefines(),x=t.attributes!==void 0;let T=n??t.defines??"";v&&(T+=v);const y=p+"+"+g+"@"+T;if(this._compiledEffects[y]){const I=this._compiledEffects[y];return l&&I.isReady()&&l(I),I._refCount++,I}this._gl&&Ms(this._gl);const R=new xi(e,t,x?this:i,s,this,n,o,l,h,f,y,t.shaderLanguage??d,t.extraInitializationsAsync??_);return this._compiledEffects[y]=R,R}_getShaderSource(e){return this._gl.getShaderSource(e)}createRawShaderProgram(e,t,i,s,n=null){const o=Ms(this._gl);return o._contextWasLost=this._contextWasLost,o.validateShaderPrograms=this.validateShaderPrograms,pA(e,t,i,s||this._gl,n)}createShaderProgram(e,t,i,s,n,o=null){const l=Ms(this._gl);return l._contextWasLost=this._contextWasLost,l.validateShaderPrograms=this.validateShaderPrograms,gA(e,t,i,s,n||this._gl,o)}inlineShaderCode(e){return e}createPipelineContext(e){if(this._gl){const i=Ms(this._gl);i.parallelShaderCompile=this._caps.parallelShaderCompile}const t=TP(this._gl);return t.engine=this,t}createMaterialContext(){}createDrawContext(){}_finalizePipelineContext(e){return mv(e,this._gl,this.validateShaderPrograms)}_preparePipelineContextAsync(e,t,i,s,n,o,l,h,f,d,_){const p=Ms(this._gl);return p._contextWasLost=this._contextWasLost,p.validateShaderPrograms=this.validateShaderPrograms,p._createShaderProgramInjection=this._createShaderProgram.bind(this),p.createRawShaderProgramInjection=this.createRawShaderProgram.bind(this),p.createShaderProgramInjection=this.createShaderProgram.bind(this),p.loadFileInjection=this._loadFile.bind(this),yP(e,t,i,s,n,o,l,h,f,d,_)}_createShaderProgram(e,t,i,s,n=null){return _v(e,t,i,s,n)}_isRenderingStateCompiled(e){return this._isDisposed?!1:EP(e,this._gl,this.validateShaderPrograms)}_executeWhenRenderingStateIsCompiled(e,t){AP(e,t)}getUniforms(e,t){const i=new Array,s=e;for(let n=0;n<t.length;n++)i.push(this._gl.getUniformLocation(s.program,t[n]));return i}getAttributes(e,t){const i=[],s=e;for(let n=0;n<t.length;n++)try{i.push(this._gl.getAttribLocation(s.program,t[n]))}catch{i.push(-1)}return i}enableEffect(e){e=e!==null&&EA(e)?e.effect:e,!(!e||e===this._currentEffect)&&(this._stencilStateComposer.stencilMaterial=void 0,this.bindSamplers(e),this._currentEffect=e,e.onBind&&e.onBind(e),e._onBindObservable&&e._onBindObservable.notifyObservers(e))}setInt(e,t){return e?(this._gl.uniform1i(e,t),!0):!1}setInt2(e,t,i){return e?(this._gl.uniform2i(e,t,i),!0):!1}setInt3(e,t,i,s){return e?(this._gl.uniform3i(e,t,i,s),!0):!1}setInt4(e,t,i,s,n){return e?(this._gl.uniform4i(e,t,i,s,n),!0):!1}setIntArray(e,t){return e?(this._gl.uniform1iv(e,t),!0):!1}setIntArray2(e,t){return!e||t.length%2!==0?!1:(this._gl.uniform2iv(e,t),!0)}setIntArray3(e,t){return!e||t.length%3!==0?!1:(this._gl.uniform3iv(e,t),!0)}setIntArray4(e,t){return!e||t.length%4!==0?!1:(this._gl.uniform4iv(e,t),!0)}setUInt(e,t){return e?(this._gl.uniform1ui(e,t),!0):!1}setUInt2(e,t,i){return e?(this._gl.uniform2ui(e,t,i),!0):!1}setUInt3(e,t,i,s){return e?(this._gl.uniform3ui(e,t,i,s),!0):!1}setUInt4(e,t,i,s,n){return e?(this._gl.uniform4ui(e,t,i,s,n),!0):!1}setUIntArray(e,t){return e?(this._gl.uniform1uiv(e,t),!0):!1}setUIntArray2(e,t){return!e||t.length%2!==0?!1:(this._gl.uniform2uiv(e,t),!0)}setUIntArray3(e,t){return!e||t.length%3!==0?!1:(this._gl.uniform3uiv(e,t),!0)}setUIntArray4(e,t){return!e||t.length%4!==0?!1:(this._gl.uniform4uiv(e,t),!0)}setArray(e,t){return!e||t.length<1?!1:(this._gl.uniform1fv(e,t),!0)}setArray2(e,t){return!e||t.length%2!==0?!1:(this._gl.uniform2fv(e,t),!0)}setArray3(e,t){return!e||t.length%3!==0?!1:(this._gl.uniform3fv(e,t),!0)}setArray4(e,t){return!e||t.length%4!==0?!1:(this._gl.uniform4fv(e,t),!0)}setMatrices(e,t){return e?(this._gl.uniformMatrix4fv(e,!1,t),!0):!1}setMatrix3x3(e,t){return e?(this._gl.uniformMatrix3fv(e,!1,t),!0):!1}setMatrix2x2(e,t){return e?(this._gl.uniformMatrix2fv(e,!1,t),!0):!1}setFloat(e,t){return e?(this._gl.uniform1f(e,t),!0):!1}setFloat2(e,t,i){return e?(this._gl.uniform2f(e,t,i),!0):!1}setFloat3(e,t,i,s){return e?(this._gl.uniform3f(e,t,i,s),!0):!1}setFloat4(e,t,i,s,n){return e?(this._gl.uniform4f(e,t,i,s,n),!0):!1}applyStates(){if(this._depthCullingState.apply(this._gl),this._stencilStateComposer.apply(this._gl),this._alphaState.apply(this._gl,this._currentRenderTarget&&this._currentRenderTarget.textures?this._currentRenderTarget.textures.length:1),this._colorWriteChanged){this._colorWriteChanged=!1;const e=this._colorWrite;this._gl.colorMask(e,e,e,e)}}wipeCaches(e){this.preventCacheWipeBetweenFrames&&!e||(this._currentEffect=null,this._viewportCached.x=0,this._viewportCached.y=0,this._viewportCached.z=0,this._viewportCached.w=0,this._unbindVertexArrayObject(),e&&(this._currentProgram=null,this.resetTextureCache(),this._stencilStateComposer.reset(),this._depthCullingState.reset(),this._depthCullingState.depthFunc=this._gl.LEQUAL,this._alphaState.reset(),this._resetAlphaMode(),this._colorWrite=!0,this._colorWriteChanged=!0,this._unpackFlipYCached=null,this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL,this._gl.NONE),this._gl.pixelStorei(this._gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,0),this._mustWipeVertexAttributes=!0,this.unbindAllAttributes()),this._resetVertexBufferBinding(),this._cachedIndexBuffer=null,this._cachedEffectForVertexBuffers=null,this.bindIndexBuffer(null))}_getSamplingParameters(e,t){const i=this._gl;let s=i.NEAREST,n=i.NEAREST,o=!1;switch(e){case 11:s=i.LINEAR,t?n=i.LINEAR_MIPMAP_NEAREST:n=i.LINEAR;break;case 3:s=i.LINEAR,o=!0,t?n=i.LINEAR_MIPMAP_LINEAR:n=i.LINEAR;break;case 8:o=!0,s=i.NEAREST,t?n=i.NEAREST_MIPMAP_LINEAR:n=i.NEAREST;break;case 4:s=i.NEAREST,t?n=i.NEAREST_MIPMAP_NEAREST:n=i.NEAREST;break;case 5:s=i.NEAREST,t?n=i.LINEAR_MIPMAP_NEAREST:n=i.LINEAR;break;case 6:o=!0,s=i.NEAREST,t?n=i.LINEAR_MIPMAP_LINEAR:n=i.LINEAR;break;case 7:s=i.NEAREST,n=i.LINEAR;break;case 1:s=i.NEAREST,n=i.NEAREST;break;case 9:s=i.LINEAR,t?n=i.NEAREST_MIPMAP_NEAREST:n=i.NEAREST;break;case 10:o=!0,s=i.LINEAR,t?n=i.NEAREST_MIPMAP_LINEAR:n=i.NEAREST;break;case 2:s=i.LINEAR,n=i.LINEAR;break;case 12:s=i.LINEAR,n=i.NEAREST;break}return{min:n,mag:s,hasMipMaps:o}}_createTexture(){const e=this._gl.createTexture();if(!e)throw new Error("Unable to create texture");return e}_createHardwareTexture(){return new um(this._createTexture(),this._gl)}_createInternalTexture(e,t,i=!0,s=0){let n,o=!1,l=0,h=3,f=5,d=!1,_=1,p,g=!1,v=0,x=!1;t!==void 0&&typeof t=="object"?(n=!!t.generateMipMaps,o=!!t.createMipMaps,l=t.type===void 0?0:t.type,h=t.samplingMode===void 0?3:t.samplingMode,f=t.format===void 0?5:t.format,d=t.useSRGBBuffer===void 0?!1:t.useSRGBBuffer,_=t.samples??1,p=t.label,g=!!t.createMSAATexture,v=t.comparisonFunction||0,x=!!t.isCube):n=!!t,d&&(d=this._caps.supportSRGBBuffers&&(this.webGLVersion>1||this.isWebGPU)),(l===1&&!this._caps.textureFloatLinearFiltering||l===2&&!this._caps.textureHalfFloatLinearFiltering)&&(h=1),l===1&&!this._caps.textureFloat&&(l=0,ge.Warn("Float textures are not supported. Type forced to TEXTURETYPE_UNSIGNED_BYTE"));const T=pT(f),y=Zc(f),R=this._gl,I=new Zi(this,s),w=e.width||e,A=e.height||e,P=e.depth||0,D=e.layers||0,U=this._getSamplingParameters(h,(n||o)&&!T),z=D!==0?R.TEXTURE_2D_ARRAY:P!==0?R.TEXTURE_3D:x?R.TEXTURE_CUBE_MAP:R.TEXTURE_2D,k=T?this._getInternalFormatFromDepthTextureFormat(f,!0,y):this._getRGBABufferInternalSizedFormat(l,f,d),ne=T?y?R.DEPTH_STENCIL:R.DEPTH_COMPONENT:this._getInternalFormat(f),fe=T?this._getWebGLTextureTypeFromDepthTextureFormat(f):this._getWebGLTextureType(l);if(this._bindTextureDirectly(z,I),D!==0)I.is2DArray=!0,R.texImage3D(z,0,k,w,A,D,0,ne,fe,null);else if(P!==0)I.is3D=!0,R.texImage3D(z,0,k,w,A,P,0,ne,fe,null);else if(x){I.isCube=!0;for(let me=0;me<6;me++)R.texImage2D(R.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,k,w,A,0,ne,fe,null)}else R.texImage2D(z,0,k,w,A,0,ne,fe,null);if(R.texParameteri(z,R.TEXTURE_MAG_FILTER,U.mag),R.texParameteri(z,R.TEXTURE_MIN_FILTER,U.min),R.texParameteri(z,R.TEXTURE_WRAP_S,R.CLAMP_TO_EDGE),R.texParameteri(z,R.TEXTURE_WRAP_T,R.CLAMP_TO_EDGE),T&&this.webGLVersion>1&&(v===0?(R.texParameteri(z,R.TEXTURE_COMPARE_FUNC,515),R.texParameteri(z,R.TEXTURE_COMPARE_MODE,R.NONE)):(R.texParameteri(z,R.TEXTURE_COMPARE_FUNC,v),R.texParameteri(z,R.TEXTURE_COMPARE_MODE,R.COMPARE_REF_TO_TEXTURE))),(n||o)&&this._gl.generateMipmap(z),this._bindTextureDirectly(z,null),I._useSRGBBuffer=d,I.baseWidth=w,I.baseHeight=A,I.width=w,I.height=A,I.depth=D||P,I.isReady=!0,I.samples=_,I.generateMipMaps=n,I.samplingMode=h,I.type=l,I.format=f,I.label=p,I.comparisonFunction=v,this._internalTexturesCache.push(I),g){let me;if(pT(I.format)?me=this._setupFramebufferDepthAttachments(Zc(I.format),I.format!==19,I.width,I.height,_,I.format,!0):me=this._createRenderBuffer(I.width,I.height,_,-1,this._getRGBABufferInternalSizedFormat(I.type,I.format,I._useSRGBBuffer),-1),!me)throw new Error("Unable to create render buffer");I._autoMSAAManagement=!0;let B=I._hardwareTexture;B||(B=I._hardwareTexture=this._createHardwareTexture()),B.addMSAARenderBuffer(me)}return I}_getUseSRGBBuffer(e,t){return e&&this._caps.supportSRGBBuffers&&(this.webGLVersion>1||t)}createTexture(e,t,i,s,n=3,o=null,l=null,h=null,f=null,d=null,_=null,p,g,v,x){return this._createTextureBase(e,t,i,s,n,o,l,(...T)=>this._prepareWebGLTexture(...T,d),(T,y,R,I,w,A)=>{const P=this._gl,D=R.width===T&&R.height===y;w._creationFlags=v??0;const U=this._getTexImageParametersForCreateTexture(w.format,w._useSRGBBuffer);if(D)return P.texImage2D(P.TEXTURE_2D,0,U.internalFormat,U.format,U.type,R),!1;const z=this._caps.maxTextureSize;if(R.width>z||R.height>z||!this._supportsHardwareTextureRescaling)return this._prepareWorkingCanvas(),!this._workingCanvas||!this._workingContext||(this._workingCanvas.width=T,this._workingCanvas.height=y,this._workingContext.drawImage(R,0,0,R.width,R.height,0,0,T,y),P.texImage2D(P.TEXTURE_2D,0,U.internalFormat,U.format,U.type,this._workingCanvas),w.width=T,w.height=y),!1;{const k=new Zi(this,2);this._bindTextureDirectly(P.TEXTURE_2D,k,!0),P.texImage2D(P.TEXTURE_2D,0,U.internalFormat,U.format,U.type,R),this._rescaleTexture(k,w,s,U.format,()=>{this._releaseTexture(k),this._bindTextureDirectly(P.TEXTURE_2D,w,!0),A()})}return!0},h,f,d,_,p,g,x)}_getTexImageParametersForCreateTexture(e,t){let i,s;return this.webGLVersion===1?(i=this._getInternalFormat(e,t),s=i):(i=this._getInternalFormat(e,!1),s=this._getRGBABufferInternalSizedFormat(0,e,t)),{internalFormat:s,format:i,type:this._gl.UNSIGNED_BYTE}}_rescaleTexture(e,t,i,s,n){}_unpackFlipY(e){this._unpackFlipYCached!==e&&(this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL,e?1:0),this.enableUnpackFlipYCached&&(this._unpackFlipYCached=e))}_getUnpackAlignement(){return this._gl.getParameter(this._gl.UNPACK_ALIGNMENT)}_getTextureTarget(e){return e.isCube?this._gl.TEXTURE_CUBE_MAP:e.is3D?this._gl.TEXTURE_3D:e.is2DArray||e.isMultiview?this._gl.TEXTURE_2D_ARRAY:this._gl.TEXTURE_2D}updateTextureSamplingMode(e,t,i=!1){const s=this._getTextureTarget(t),n=this._getSamplingParameters(e,t.useMipMaps||i);this._setTextureParameterInteger(s,this._gl.TEXTURE_MAG_FILTER,n.mag,t),this._setTextureParameterInteger(s,this._gl.TEXTURE_MIN_FILTER,n.min),i&&n.hasMipMaps&&(t.generateMipMaps=!0,this._gl.generateMipmap(s)),this._bindTextureDirectly(s,null),t.samplingMode=e}updateTextureDimensions(e,t,i,s=1){}updateTextureWrappingMode(e,t,i=null,s=null){const n=this._getTextureTarget(e);t!==null&&(this._setTextureParameterInteger(n,this._gl.TEXTURE_WRAP_S,this._getTextureWrapMode(t),e),e._cachedWrapU=t),i!==null&&(this._setTextureParameterInteger(n,this._gl.TEXTURE_WRAP_T,this._getTextureWrapMode(i),e),e._cachedWrapV=i),(e.is2DArray||e.is3D)&&s!==null&&(this._setTextureParameterInteger(n,this._gl.TEXTURE_WRAP_R,this._getTextureWrapMode(s),e),e._cachedWrapR=s),this._bindTextureDirectly(n,null)}_uploadCompressedDataToTextureDirectly(e,t,i,s,n,o=0,l=0){const h=this._gl;let f=h.TEXTURE_2D;if(e.isCube&&(f=h.TEXTURE_CUBE_MAP_POSITIVE_X+o),e._useSRGBBuffer)switch(t){case 37492:case 36196:this._caps.etc2?t=h.COMPRESSED_SRGB8_ETC2:e._useSRGBBuffer=!1;break;case 37496:this._caps.etc2?t=h.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:e._useSRGBBuffer=!1;break;case 36492:t=h.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT;break;case 37808:t=h.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;break;case 37809:t=h.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;break;case 37810:t=h.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;break;case 37811:t=h.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;break;case 37812:t=h.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;break;case 37813:t=h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;break;case 37814:t=h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;break;case 37815:t=h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;break;case 37816:t=h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;break;case 37817:t=h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;break;case 37818:t=h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR;break;case 37819:t=h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;break;case 37820:t=h.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;break;case 37821:t=h.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;break;case 33776:this._caps.s3tc_srgb?t=h.COMPRESSED_SRGB_S3TC_DXT1_EXT:e._useSRGBBuffer=!1;break;case 33777:this._caps.s3tc_srgb?t=h.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT:e._useSRGBBuffer=!1;break;case 33779:this._caps.s3tc_srgb?t=h.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT:e._useSRGBBuffer=!1;break;default:e._useSRGBBuffer=!1;break}if(e.generateMipMaps){const d=e._hardwareTexture;d.memoryAllocated||(h.texStorage2D(e.isCube?h.TEXTURE_CUBE_MAP:h.TEXTURE_2D,Math.floor(Math.log2(Math.max(i,s)))+1,t,e.width,e.height),d.memoryAllocated=!0),this._gl.compressedTexSubImage2D(f,l,0,0,i,s,t,n)}else this._gl.compressedTexImage2D(f,l,t,i,s,0,n)}_uploadDataToTextureDirectly(e,t,i=0,s=0,n,o=!1){const l=this._gl,h=this._getWebGLTextureType(e.type),f=this._getInternalFormat(e.format),d=n===void 0?this._getRGBABufferInternalSizedFormat(e.type,e.format,e._useSRGBBuffer):this._getInternalFormat(n,e._useSRGBBuffer);this._unpackFlipY(e.invertY);let _=l.TEXTURE_2D;e.isCube&&(_=l.TEXTURE_CUBE_MAP_POSITIVE_X+i);const p=Math.round(Math.log(e.width)*Math.LOG2E),g=Math.round(Math.log(e.height)*Math.LOG2E),v=o?e.width:Math.pow(2,Math.max(p-s,0)),x=o?e.height:Math.pow(2,Math.max(g-s,0));l.texImage2D(_,s,d,v,x,0,f,h,t)}updateTextureData(e,t,i,s,n,o,l=0,h=0,f=!1){const d=this._gl,_=this._getWebGLTextureType(e.type),p=this._getInternalFormat(e.format);this._unpackFlipY(e.invertY);let g=d.TEXTURE_2D,v=d.TEXTURE_2D;e.isCube&&(v=d.TEXTURE_CUBE_MAP_POSITIVE_X+l,g=d.TEXTURE_CUBE_MAP),this._bindTextureDirectly(g,e,!0),d.texSubImage2D(v,h,i,s,n,o,p,_,t),f&&this._gl.generateMipmap(v),this._bindTextureDirectly(g,null)}_uploadArrayBufferViewToTexture(e,t,i=0,s=0){const n=this._gl,o=e.isCube?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D;this._bindTextureDirectly(o,e,!0),this._uploadDataToTextureDirectly(e,t,i,s),this._bindTextureDirectly(o,null,!0)}_prepareWebGLTextureContinuation(e,t,i,s,n){const o=this._gl;if(!o)return;const l=this._getSamplingParameters(n,!i);o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,l.mag),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,l.min),!i&&!s&&o.generateMipmap(o.TEXTURE_2D),this._bindTextureDirectly(o.TEXTURE_2D,null),t&&t.removePendingData(e),e.onLoadedObservable.notifyObservers(e),e.onLoadedObservable.clear()}_prepareWebGLTexture(e,t,i,s,n,o,l,h,f,d){const _=this.getCaps().maxTextureSize,p=Math.min(_,this.needPOTTextures?Kc(s.width,_):s.width),g=Math.min(_,this.needPOTTextures?Kc(s.height,_):s.height),v=this._gl;if(v){if(!e._hardwareTexture){i&&i.removePendingData(e);return}this._bindTextureDirectly(v.TEXTURE_2D,e,!0),this._unpackFlipY(n===void 0?!0:!!n),e.baseWidth=s.width,e.baseHeight=s.height,e.width=p,e.height=g,e.isReady=!0,e.type=e.type!==-1?e.type:0,e.format=e.format!==-1?e.format:d??(t===".jpg"&&!e._useSRGBBuffer?4:5),!h(p,g,s,t,e,()=>{this._prepareWebGLTextureContinuation(e,i,o,l,f)})&&this._prepareWebGLTextureContinuation(e,i,o,l,f)}}_getInternalFormatFromDepthTextureFormat(e,t,i){const s=this._gl;if(!t)return s.STENCIL_INDEX8;let o=i?s.DEPTH_STENCIL:s.DEPTH_COMPONENT;return this.webGLVersion>1?e===15?o=s.DEPTH_COMPONENT16:e===16?o=s.DEPTH_COMPONENT24:e===17||e===13?o=i?s.DEPTH24_STENCIL8:s.DEPTH_COMPONENT24:e===14?o=s.DEPTH_COMPONENT32F:e===18&&(o=i?s.DEPTH32F_STENCIL8:s.DEPTH_COMPONENT32F):o=s.DEPTH_COMPONENT16,o}_getWebGLTextureTypeFromDepthTextureFormat(e){const t=this._gl;let i=t.UNSIGNED_INT;return e===15?i=t.UNSIGNED_SHORT:e===17||e===13?i=t.UNSIGNED_INT_24_8:e===14?i=t.FLOAT:e===18?i=t.FLOAT_32_UNSIGNED_INT_24_8_REV:e===19&&(i=t.UNSIGNED_BYTE),i}_setupFramebufferDepthAttachments(e,t,i,s,n=1,o,l=!1){const h=this._gl;o=o??(e?13:14);const f=this._getInternalFormatFromDepthTextureFormat(o,t,e);return e&&t?this._createRenderBuffer(i,s,n,h.DEPTH_STENCIL,f,l?-1:h.DEPTH_STENCIL_ATTACHMENT):t?this._createRenderBuffer(i,s,n,f,f,l?-1:h.DEPTH_ATTACHMENT):e?this._createRenderBuffer(i,s,n,f,f,l?-1:h.STENCIL_ATTACHMENT):null}_createRenderBuffer(e,t,i,s,n,o,l=!0){const f=this._gl.createRenderbuffer();return this._updateRenderBuffer(f,e,t,i,s,n,o,l)}_updateRenderBuffer(e,t,i,s,n,o,l,h=!0){const f=this._gl;return f.bindRenderbuffer(f.RENDERBUFFER,e),s>1&&f.renderbufferStorageMultisample?f.renderbufferStorageMultisample(f.RENDERBUFFER,s,o,t,i):f.renderbufferStorage(f.RENDERBUFFER,n,t,i),l!==-1&&f.framebufferRenderbuffer(f.FRAMEBUFFER,l,f.RENDERBUFFER,e),h&&f.bindRenderbuffer(f.RENDERBUFFER,null),e}_releaseTexture(e){this._deleteTexture(e._hardwareTexture),this.unbindAllTextures();const t=this._internalTexturesCache.indexOf(e);t!==-1&&this._internalTexturesCache.splice(t,1),e._lodTextureHigh&&e._lodTextureHigh.dispose(),e._lodTextureMid&&e._lodTextureMid.dispose(),e._lodTextureLow&&e._lodTextureLow.dispose(),e._irradianceTexture&&e._irradianceTexture.dispose()}_deleteTexture(e){e?.release()}_setProgram(e){this._currentProgram!==e&&(bP(e,this._gl),this._currentProgram=e)}bindSamplers(e){const t=e.getPipelineContext();this._setProgram(t.program);const i=e.getSamplers();for(let s=0;s<i.length;s++){const n=e.getUniform(i[s]);n&&(this._boundUniforms[s]=n)}this._currentEffect=null}_activateCurrentTexture(){this._currentTextureChannel!==this._activeChannel&&(this._gl.activeTexture(this._gl.TEXTURE0+this._activeChannel),this._currentTextureChannel=this._activeChannel)}_bindTextureDirectly(e,t,i=!1,s=!1){let n=!1;const o=t&&t._associatedChannel>-1;if(i&&o&&(this._activeChannel=t._associatedChannel),this._boundTexturesCache[this._activeChannel]!==t||s){if(this._activateCurrentTexture(),t&&t.isMultiview)throw ge.Error(["_bindTextureDirectly called with a multiview texture!",e,t]),"_bindTextureDirectly called with a multiview texture!";this._gl.bindTexture(e,t?._hardwareTexture?.underlyingResource??null),this._boundTexturesCache[this._activeChannel]=t,t&&(t._associatedChannel=this._activeChannel)}else i&&(n=!0,this._activateCurrentTexture());return o&&!i&&this._bindSamplerUniformToChannel(t._associatedChannel,this._activeChannel),n}_bindTexture(e,t,i){if(e===void 0)return;t&&(t._associatedChannel=e),this._activeChannel=e;const s=t?this._getTextureTarget(t):this._gl.TEXTURE_2D;this._bindTextureDirectly(s,t)}unbindAllTextures(){for(let e=0;e<this._maxSimultaneousTextures;e++)this._activeChannel=e,this._bindTextureDirectly(this._gl.TEXTURE_2D,null),this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP,null),this.webGLVersion>1&&(this._bindTextureDirectly(this._gl.TEXTURE_3D,null),this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY,null))}setTexture(e,t,i,s){e!==void 0&&(t&&(this._boundUniforms[e]=t),this._setTexture(e,i))}_bindSamplerUniformToChannel(e,t){const i=this._boundUniforms[e];!i||i._currentState===t||(this._gl.uniform1i(i,t),i._currentState=t)}_getTextureWrapMode(e){switch(e){case 1:return this._gl.REPEAT;case 0:return this._gl.CLAMP_TO_EDGE;case 2:return this._gl.MIRRORED_REPEAT}return this._gl.REPEAT}_setTexture(e,t,i=!1,s=!1,n=""){if(!t)return this._boundTexturesCache[e]!=null&&(this._activeChannel=e,this._bindTextureDirectly(this._gl.TEXTURE_2D,null),this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP,null),this.webGLVersion>1&&(this._bindTextureDirectly(this._gl.TEXTURE_3D,null),this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY,null))),!1;if(t.video){this._activeChannel=e;const f=t.getInternalTexture();f&&(f._associatedChannel=e),t.update()}else if(t.delayLoadState===4)return t.delayLoad(),!1;let o;s?o=t.depthStencilTexture:t.isReady()?o=t.getInternalTexture():t.isCube?o=this.emptyCubeTexture:t.is3D?o=this.emptyTexture3D:t.is2DArray?o=this.emptyTexture2DArray:o=this.emptyTexture,!i&&o&&(o._associatedChannel=e);let l=!0;this._boundTexturesCache[e]===o&&(i||this._bindSamplerUniformToChannel(o._associatedChannel,e),l=!1),this._activeChannel=e;const h=this._getTextureTarget(o);if(l&&this._bindTextureDirectly(h,o,i),o&&!o.isMultiview){if(o.isCube&&o._cachedCoordinatesMode!==t.coordinatesMode){o._cachedCoordinatesMode=t.coordinatesMode;const f=t.coordinatesMode!==3&&t.coordinatesMode!==5?1:0;t.wrapU=f,t.wrapV=f}o._cachedWrapU!==t.wrapU&&(o._cachedWrapU=t.wrapU,this._setTextureParameterInteger(h,this._gl.TEXTURE_WRAP_S,this._getTextureWrapMode(t.wrapU),o)),o._cachedWrapV!==t.wrapV&&(o._cachedWrapV=t.wrapV,this._setTextureParameterInteger(h,this._gl.TEXTURE_WRAP_T,this._getTextureWrapMode(t.wrapV),o)),o.is3D&&o._cachedWrapR!==t.wrapR&&(o._cachedWrapR=t.wrapR,this._setTextureParameterInteger(h,this._gl.TEXTURE_WRAP_R,this._getTextureWrapMode(t.wrapR),o)),this._setAnisotropicLevel(h,o,t.anisotropicFilteringLevel)}return!0}setTextureArray(e,t,i,s){if(!(e===void 0||!t)){(!this._textureUnits||this._textureUnits.length!==i.length)&&(this._textureUnits=new Int32Array(i.length));for(let n=0;n<i.length;n++){const o=i[n].getInternalTexture();o?(this._textureUnits[n]=e+n,o._associatedChannel=e+n):this._textureUnits[n]=-1}this._gl.uniform1iv(t,this._textureUnits);for(let n=0;n<i.length;n++)this._setTexture(this._textureUnits[n],i[n],!0)}}_setAnisotropicLevel(e,t,i){const s=this._caps.textureAnisotropicFilterExtension;t.samplingMode!==11&&t.samplingMode!==3&&t.samplingMode!==2&&(i=1),s&&t._cachedAnisotropicFilteringLevel!==i&&(this._setTextureParameterFloat(e,s.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(i,this._caps.maxAnisotropy),t),t._cachedAnisotropicFilteringLevel=i)}_setTextureParameterFloat(e,t,i,s){this._bindTextureDirectly(e,s,!0,!0),this._gl.texParameterf(e,t,i)}_setTextureParameterInteger(e,t,i,s){s&&this._bindTextureDirectly(e,s,!0,!0),this._gl.texParameteri(e,t,i)}unbindAllAttributes(){if(this._mustWipeVertexAttributes){this._mustWipeVertexAttributes=!1;for(let e=0;e<this._caps.maxVertexAttribs;e++)this.disableAttributeByIndex(e);return}for(let e=0,t=this._vertexAttribArraysEnabled.length;e<t;e++)e>=this._caps.maxVertexAttribs||!this._vertexAttribArraysEnabled[e]||this.disableAttributeByIndex(e)}releaseEffects(){this._compiledEffects={},this.onReleaseEffectsObservable.notifyObservers(this)}dispose(){Hi()&&this._renderingCanvas&&(this._renderingCanvas.removeEventListener("webglcontextlost",this._onContextLost),this._onContextRestored&&this._renderingCanvas.removeEventListener("webglcontextrestored",this._onContextRestored)),super.dispose(),this._dummyFramebuffer&&this._gl.deleteFramebuffer(this._dummyFramebuffer),this.unbindAllAttributes(),this._boundUniforms={},this._workingCanvas=null,this._workingContext=null,this._currentBufferPointers.length=0,this._currentProgram=null,this._creationOptions.loseContextOnDispose&&this._gl.getExtension("WEBGL_lose_context")?.loseContext(),z_(this._gl)}attachContextLostEvent(e){this._renderingCanvas&&this._renderingCanvas.addEventListener("webglcontextlost",e,!1)}attachContextRestoredEvent(e){this._renderingCanvas&&this._renderingCanvas.addEventListener("webglcontextrestored",e,!1)}getError(){return this._gl.getError()}_canRenderToFloatFramebuffer(){return this._webGLVersion>1?this._caps.colorBufferFloat:this._canRenderToFramebuffer(1)}_canRenderToHalfFloatFramebuffer(){return this._webGLVersion>1?this._caps.colorBufferFloat:this._canRenderToFramebuffer(2)}_canRenderToFramebuffer(e){const t=this._gl;for(;t.getError()!==t.NO_ERROR;);let i=!0;const s=t.createTexture();t.bindTexture(t.TEXTURE_2D,s),t.texImage2D(t.TEXTURE_2D,0,this._getRGBABufferInternalSizedFormat(e),1,1,0,t.RGBA,this._getWebGLTextureType(e),null),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST);const n=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,n),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,s,0);const o=t.checkFramebufferStatus(t.FRAMEBUFFER);if(i=i&&o===t.FRAMEBUFFER_COMPLETE,i=i&&t.getError()===t.NO_ERROR,i&&(t.clear(t.COLOR_BUFFER_BIT),i=i&&t.getError()===t.NO_ERROR),i){t.bindFramebuffer(t.FRAMEBUFFER,null);const l=t.RGBA,h=t.UNSIGNED_BYTE,f=new Uint8Array(4);t.readPixels(0,0,1,1,l,h,f),i=i&&t.getError()===t.NO_ERROR}for(t.deleteTexture(s),t.deleteFramebuffer(n),t.bindFramebuffer(t.FRAMEBUFFER,null);!i&&t.getError()!==t.NO_ERROR;);return i}_getWebGLTextureType(e){if(this._webGLVersion===1){switch(e){case 1:return this._gl.FLOAT;case 2:return this._gl.HALF_FLOAT_OES;case 0:return this._gl.UNSIGNED_BYTE;case 8:return this._gl.UNSIGNED_SHORT_4_4_4_4;case 9:return this._gl.UNSIGNED_SHORT_5_5_5_1;case 10:return this._gl.UNSIGNED_SHORT_5_6_5}return this._gl.UNSIGNED_BYTE}switch(e){case 3:return this._gl.BYTE;case 0:return this._gl.UNSIGNED_BYTE;case 4:return this._gl.SHORT;case 5:return this._gl.UNSIGNED_SHORT;case 6:return this._gl.INT;case 7:return this._gl.UNSIGNED_INT;case 1:return this._gl.FLOAT;case 2:return this._gl.HALF_FLOAT;case 8:return this._gl.UNSIGNED_SHORT_4_4_4_4;case 9:return this._gl.UNSIGNED_SHORT_5_5_5_1;case 10:return this._gl.UNSIGNED_SHORT_5_6_5;case 11:return this._gl.UNSIGNED_INT_2_10_10_10_REV;case 12:return this._gl.UNSIGNED_INT_24_8;case 13:return this._gl.UNSIGNED_INT_10F_11F_11F_REV;case 14:return this._gl.UNSIGNED_INT_5_9_9_9_REV;case 15:return this._gl.FLOAT_32_UNSIGNED_INT_24_8_REV}return this._gl.UNSIGNED_BYTE}_getInternalFormat(e,t=!1){let i=t?this._glSRGBExtensionValues.SRGB8_ALPHA8:this._gl.RGBA;switch(e){case 0:i=this._gl.ALPHA;break;case 1:i=this._gl.LUMINANCE;break;case 2:i=this._gl.LUMINANCE_ALPHA;break;case 6:case 33322:case 36760:i=this._gl.RED;break;case 7:case 33324:case 36761:i=this._gl.RG;break;case 4:case 32852:case 36762:i=t?this._glSRGBExtensionValues.SRGB:this._gl.RGB;break;case 5:case 32859:case 36763:i=t?this._glSRGBExtensionValues.SRGB8_ALPHA8:this._gl.RGBA;break}if(this._webGLVersion>1)switch(e){case 8:i=this._gl.RED_INTEGER;break;case 9:i=this._gl.RG_INTEGER;break;case 10:i=this._gl.RGB_INTEGER;break;case 11:i=this._gl.RGBA_INTEGER;break}return i}_getRGBABufferInternalSizedFormat(e,t,i=!1){if(this._webGLVersion===1){if(t!==void 0)switch(t){case 0:return this._gl.ALPHA;case 1:return this._gl.LUMINANCE;case 2:return this._gl.LUMINANCE_ALPHA;case 4:return i?this._glSRGBExtensionValues.SRGB:this._gl.RGB}return this._gl.RGBA}switch(e){case 3:switch(t){case 6:return this._gl.R8_SNORM;case 7:return this._gl.RG8_SNORM;case 4:return this._gl.RGB8_SNORM;case 8:return this._gl.R8I;case 9:return this._gl.RG8I;case 10:return this._gl.RGB8I;case 11:return this._gl.RGBA8I;default:return this._gl.RGBA8_SNORM}case 0:switch(t){case 6:return this._gl.R8;case 7:return this._gl.RG8;case 4:return i?this._glSRGBExtensionValues.SRGB8:this._gl.RGB8;case 5:return i?this._glSRGBExtensionValues.SRGB8_ALPHA8:this._gl.RGBA8;case 8:return this._gl.R8UI;case 9:return this._gl.RG8UI;case 10:return this._gl.RGB8UI;case 11:return this._gl.RGBA8UI;case 0:return this._gl.ALPHA;case 1:return this._gl.LUMINANCE;case 2:return this._gl.LUMINANCE_ALPHA;default:return this._gl.RGBA8}case 4:switch(t){case 8:return this._gl.R16I;case 36760:return this._gl.R16_SNORM_EXT;case 36761:return this._gl.RG16_SNORM_EXT;case 36762:return this._gl.RGB16_SNORM_EXT;case 36763:return this._gl.RGBA16_SNORM_EXT;case 9:return this._gl.RG16I;case 10:return this._gl.RGB16I;case 11:return this._gl.RGBA16I;default:return this._gl.RGBA16I}case 5:switch(t){case 8:return this._gl.R16UI;case 33322:return this._gl.R16_EXT;case 33324:return this._gl.RG16_EXT;case 32852:return this._gl.RGB16_EXT;case 32859:return this._gl.RGBA16_EXT;case 9:return this._gl.RG16UI;case 10:return this._gl.RGB16UI;case 11:return this._gl.RGBA16UI;default:return this._gl.RGBA16UI}case 6:switch(t){case 8:return this._gl.R32I;case 9:return this._gl.RG32I;case 10:return this._gl.RGB32I;case 11:return this._gl.RGBA32I;default:return this._gl.RGBA32I}case 7:switch(t){case 8:return this._gl.R32UI;case 9:return this._gl.RG32UI;case 10:return this._gl.RGB32UI;case 11:return this._gl.RGBA32UI;default:return this._gl.RGBA32UI}case 1:switch(t){case 6:return this._gl.R32F;case 7:return this._gl.RG32F;case 4:return this._gl.RGB32F;case 5:return this._gl.RGBA32F;default:return this._gl.RGBA32F}case 2:switch(t){case 6:return this._gl.R16F;case 7:return this._gl.RG16F;case 4:return this._gl.RGB16F;case 5:return this._gl.RGBA16F;default:return this._gl.RGBA16F}case 10:return this._gl.RGB565;case 13:return this._gl.R11F_G11F_B10F;case 14:return this._gl.RGB9_E5;case 8:return this._gl.RGBA4;case 9:return this._gl.RGB5_A1;case 11:switch(t){case 5:return this._gl.RGB10_A2;case 11:return this._gl.RGB10_A2UI;default:return this._gl.RGB10_A2}}return i?this._glSRGBExtensionValues.SRGB8_ALPHA8:this._gl.RGBA8}readPixels(e,t,i,s,n=!0,o=!0,l=null){const h=n?4:3,f=n?this._gl.RGBA:this._gl.RGB,d=i*s*h;if(!l)l=new Uint8Array(d);else if(l.length<d)return ge.Error(`Data buffer is too small to store the read pixels (${l.length} should be more than ${d})`),Promise.resolve(l);return o&&this.flushFramebuffer(),this._gl.readPixels(e,t,i,s,f,this._gl.UNSIGNED_BYTE,l),Promise.resolve(l)}static get IsSupportedAsync(){return Promise.resolve(this.isSupported())}static get IsSupported(){return this.isSupported()}static isSupported(){if(this._HasMajorPerformanceCaveat!==null)return!this._HasMajorPerformanceCaveat;if(this._IsSupported===null)try{const e=Ue._CreateCanvas(1,1),t=e.getContext("webgl")||e.getContext("experimental-webgl");this._IsSupported=t!=null&&!!globalThis.WebGLRenderingContext}catch{this._IsSupported=!1}return this._IsSupported}static get HasMajorPerformanceCaveat(){if(this._HasMajorPerformanceCaveat===null)try{const e=Ue._CreateCanvas(1,1),t=e.getContext("webgl",{failIfMajorPerformanceCaveat:!0})||e.getContext("experimental-webgl",{failIfMajorPerformanceCaveat:!0});this._HasMajorPerformanceCaveat=!t}catch{this._HasMajorPerformanceCaveat=!1}return this._HasMajorPerformanceCaveat}}lt._TempClearColorUint32=new Uint32Array(4);lt._TempClearColorInt32=new Int32Array(4);lt.ExceptionList=[{key:"Chrome/63.0",capture:"63\\.0\\.3239\\.(\\d+)",captureConstraint:108,targets:["uniformBuffer"]},{key:"Firefox/58",capture:null,captureConstraint:null,targets:["uniformBuffer"]},{key:"Firefox/59",capture:null,captureConstraint:null,targets:["uniformBuffer"]},{key:"Chrome/72.+?Mobile",capture:null,captureConstraint:null,targets:["vao"]},{key:"Chrome/73.+?Mobile",capture:null,captureConstraint:null,targets:["vao"]},{key:"Chrome/74.+?Mobile",capture:null,captureConstraint:null,targets:["vao"]},{key:"Mac OS.+Chrome/71",capture:null,captureConstraint:null,targets:["vao"]},{key:"Mac OS.+Chrome/72",capture:null,captureConstraint:null,targets:["vao"]},{key:"Mac OS.+Chrome",capture:null,captureConstraint:null,targets:["uniformBuffer"]},{key:"Chrome/12\\d\\..+?Mobile",capture:null,captureConstraint:null,targets:["uniformBuffer"]},{key:".*AppleWebKit.*(15.4).*Safari",capture:null,captureConstraint:null,targets:["antialias","maxMSAASamples"]},{key:".*(15.4).*AppleWebKit.*Safari",capture:null,captureConstraint:null,targets:["antialias","maxMSAASamples"]}];lt._ConcatenateShader=dA;lt._IsSupported=null;lt._HasMajorPerformanceCaveat=null;class tw{constructor(e=30){this._enabled=!0,this._rollingFrameTime=new iw(e)}sampleFrame(e=Mn.Now){if(this._enabled){if(this._lastFrameTimeMs!=null){const t=e-this._lastFrameTimeMs;this._rollingFrameTime.add(t)}this._lastFrameTimeMs=e}}get averageFrameTime(){return this._rollingFrameTime.average}get averageFrameTimeVariance(){return this._rollingFrameTime.variance}get instantaneousFrameTime(){return this._rollingFrameTime.history(0)}get averageFPS(){return 1e3/this._rollingFrameTime.average}get instantaneousFPS(){const e=this._rollingFrameTime.history(0);return e===0?0:1e3/e}get isSaturated(){return this._rollingFrameTime.isSaturated()}enable(){this._enabled=!0}disable(){this._enabled=!1,this._lastFrameTimeMs=null}get isEnabled(){return this._enabled}reset(){this._lastFrameTimeMs=null,this._rollingFrameTime.reset()}}class iw{constructor(e){this._samples=new Array(e),this.reset()}add(e){let t;if(this.isSaturated()){const i=this._samples[this._pos];t=i-this.average,this.average-=t/(this._sampleCount-1),this._m2-=t*(i-this.average)}else this._sampleCount++;t=e-this.average,this.average+=t/this._sampleCount,this._m2+=t*(e-this.average),this.variance=this._m2/(this._sampleCount-1),this._samples[this._pos]=e,this._pos++,this._pos%=this._samples.length}history(e){if(e>=this._sampleCount||e>=this._samples.length)return 0;const t=this._wrapPosition(this._pos-1);return this._samples[this._wrapPosition(t-e)]}isSaturated(){return this._sampleCount>=this._samples.length}reset(){this.average=0,this.variance=0,this._sampleCount=0,this._pos=0,this._m2=0}_wrapPosition(e){const t=this._samples.length;return(e%t+t)%t}}function sw(r){!r||!r.setAttribute||(r.setAttribute("touch-action","none"),r.style.touchAction="none",r.style.webkitTapHighlightColor="transparent")}function rw(r,e,t){r._onCanvasFocus=()=>{r.onCanvasFocusObservable.notifyObservers(r)},r._onCanvasBlur=()=>{r.onCanvasBlurObservable.notifyObservers(r)},r._onCanvasContextMenu=s=>{r.disableContextMenu&&s.preventDefault()},e.addEventListener("focus",r._onCanvasFocus),e.addEventListener("blur",r._onCanvasBlur),e.addEventListener("contextmenu",r._onCanvasContextMenu),r._onBlur=()=>{r.disablePerformanceMonitorInBackground&&r.performanceMonitor.disable(),r._windowIsBackground=!0},r._onFocus=()=>{r.disablePerformanceMonitorInBackground&&r.performanceMonitor.enable(),r._windowIsBackground=!1},r._onCanvasPointerOut=s=>{document.elementFromPoint(s.clientX,s.clientY)!==e&&r.onCanvasPointerOutObservable.notifyObservers(s)};const i=r.getHostWindow();i&&typeof i.addEventListener=="function"&&(i.addEventListener("blur",r._onBlur),i.addEventListener("focus",r._onFocus)),e.addEventListener("pointerout",r._onCanvasPointerOut),t.doNotHandleTouchAction||sw(e),!Ue.audioEngine&&t.audioEngine&&Ue.AudioEngineFactory&&(Ue.audioEngine=Ue.AudioEngineFactory(r.getRenderingCanvas(),r.getAudioContext(),r.getAudioDestination())),to()&&(r._onFullscreenChange=()=>{r.isFullscreen=!!document.fullscreenElement,r.isFullscreen&&r._pointerLockRequested&&e&&RA(e)},document.addEventListener("fullscreenchange",r._onFullscreenChange,!1),document.addEventListener("webkitfullscreenchange",r._onFullscreenChange,!1),r._onPointerLockChange=()=>{r.isPointerLock=document.pointerLockElement===e},document.addEventListener("pointerlockchange",r._onPointerLockChange,!1),document.addEventListener("webkitpointerlockchange",r._onPointerLockChange,!1)),r.enableOfflineSupport=Ue.OfflineProviderFactory!==void 0,r._deterministicLockstep=!!t.deterministicLockstep,r._lockstepMaxSteps=t.lockstepMaxSteps||0,r._timeStep=t.timeStep||1/60}function nw(r,e){St.Instances.length===1&&Ue.audioEngine&&(Ue.audioEngine.dispose(),Ue.audioEngine=null);const t=r.getHostWindow();t&&typeof t.removeEventListener=="function"&&(t.removeEventListener("blur",r._onBlur),t.removeEventListener("focus",r._onFocus)),e&&(e.removeEventListener("focus",r._onCanvasFocus),e.removeEventListener("blur",r._onCanvasBlur),e.removeEventListener("pointerout",r._onCanvasPointerOut),e.removeEventListener("contextmenu",r._onCanvasContextMenu)),to()&&(document.removeEventListener("fullscreenchange",r._onFullscreenChange),document.removeEventListener("mozfullscreenchange",r._onFullscreenChange),document.removeEventListener("webkitfullscreenchange",r._onFullscreenChange),document.removeEventListener("msfullscreenchange",r._onFullscreenChange),document.removeEventListener("pointerlockchange",r._onPointerLockChange),document.removeEventListener("mspointerlockchange",r._onPointerLockChange),document.removeEventListener("mozpointerlockchange",r._onPointerLockChange),document.removeEventListener("webkitpointerlockchange",r._onPointerLockChange))}function aw(r){const e=ow(r);if(e)return e;const t=lw(r);return t||cw(r)}function ow(r){if(!to()||!document.body)return null;const e=document.createElement("span");e.textContent="Hg",e.style.font=r;const t=document.createElement("div");t.style.display="inline-block",t.style.width="1px",t.style.height="0px",t.style.verticalAlign="bottom";const i=document.createElement("div");i.style.whiteSpace="nowrap",i.appendChild(e),i.appendChild(t),document.body.appendChild(i);let s,n;try{n=t.getBoundingClientRect().top-e.getBoundingClientRect().top,t.style.verticalAlign="baseline",s=t.getBoundingClientRect().top-e.getBoundingClientRect().top}finally{document.body.removeChild(i)}const o={ascent:s,height:n,descent:n-s};return AA(o)?o:null}function lw(r){let e=null;try{typeof OffscreenCanvas<"u"?e=new OffscreenCanvas(64,64):to()&&typeof document.createElement=="function"&&(e=document.createElement("canvas"),e.width=64,e.height=64);const t=e?.getContext("2d");if(!t)return null;t.font=r;const i=t.measureText("Hg"),s=Number(i.actualBoundingBoxAscent??i.fontBoundingBoxAscent),n=Number(i.actualBoundingBoxDescent??i.fontBoundingBoxDescent),o={ascent:s,height:s+n,descent:n};return AA(o)?o:null}catch{return null}finally{const t=e;typeof t?.dispose=="function"&&t.dispose()}}function cw(r){const e=Math.max(1,hw(r)),t=e*.8,i=e*.2;return{ascent:t,height:t+i,descent:i}}function hw(r){const e=/(?:^|\s)([0-9]+(?:\.[0-9]+)?)px(?:\/|\s|$)/.exec(String(r||""));return e?Number(e[1]):16}function AA(r){return Number.isFinite(r.ascent)&&Number.isFinite(r.height)&&Number.isFinite(r.descent)&&r.height>0}async function fw(r,e,t){return await new Promise((i,s)=>{const n=new Image;n.onload=()=>{n.decode().then(()=>{r.createImageBitmap(n,t).then(o=>{i(o)})})},n.onerror=()=>{s(`Error loading image ${n.src}`)},n.src=e})}function uw(r,e,t,i){const n=r.createCanvas(t,i).getContext("2d");if(!n)throw new Error("Unable to get 2d context for resizeImageBitmap");return n.drawImage(e,0,0),n.getImageData(0,0,t,i).data}function dw(r){const e=r.requestFullscreen||r.webkitRequestFullscreen;e&&e.call(r)}function _w(){const r=document;document.exitFullscreen?document.exitFullscreen():r.webkitCancelFullScreen&&r.webkitCancelFullScreen()}function RA(r){if(r.requestPointerLock){const e=r.requestPointerLock();e instanceof Promise?e.then(()=>{r.focus()}).catch(()=>{}):r.focus()}}function mw(){document.exitPointerLock&&document.exitPointerLock()}class Sr{get min(){return this._min}get max(){return this._max}get average(){return this._average}get lastSecAverage(){return this._lastSecAverage}get current(){return this._current}get total(){return this._totalAccumulated}get count(){return this._totalValueCount}constructor(){this._startMonitoringTime=0,this._min=0,this._max=0,this._hasResult=!1,this._hasCurrentValue=!1,this._average=0,this._lastSecAverage=0,this._current=0,this._totalValueCount=0,this._totalAccumulated=0,this._lastSecAccumulated=0,this._lastSecTime=0,this._lastSecValueCount=0}fetchNewFrame(){this._totalValueCount++,this._current=0,this._hasCurrentValue=Sr.Enabled,this._lastSecValueCount++}addCount(e,t){Sr.Enabled&&(this._current+=e,this._hasCurrentValue=!0,t&&this._fetchResult())}beginMonitoring(){Sr.Enabled&&(this._startMonitoringTime=Mn.Now)}endMonitoring(e=!0){if(!Sr.Enabled)return;e&&this.fetchNewFrame();const t=Mn.Now;this._current=t-this._startMonitoringTime,this._hasCurrentValue=!0,e&&this._fetchResult()}endFrame(){this._fetchResult()}_fetchResult(){if(!this._hasCurrentValue)return;this._totalAccumulated+=this._current,this._lastSecAccumulated+=this._current,this._hasResult?(this._min=Math.min(this._min,this._current),this._max=Math.max(this._max,this._current)):(this._min=this._current,this._max=this._current,this._hasResult=!0),this._average=this._totalAccumulated/this._totalValueCount;const e=Mn.Now;e-this._lastSecTime>1e3&&(this._lastSecAverage=this._lastSecAccumulated/this._lastSecValueCount,this._lastSecTime=e,this._lastSecAccumulated=0,this._lastSecValueCount=0)}}Sr.Enabled=!0;let gT=!1;function IA(){gT||(gT=!0,Ue.prototype.getInputElement=function(){return this._renderingCanvas},Ue.prototype.getRenderingCanvasClientRect=function(){return this._renderingCanvas?this._renderingCanvas.getBoundingClientRect():null},Ue.prototype.getInputElementClientRect=function(){return this._renderingCanvas?this.getInputElement().getBoundingClientRect():null},Ue.prototype.getAspectRatio=function(r,e=!1){const t=r.viewport;return this.getRenderWidth(e)*t.width/(this.getRenderHeight(e)*t.height)},Ue.prototype.getScreenAspectRatio=function(){return this.getRenderWidth(!0)/this.getRenderHeight(!0)},Ue.prototype._verifyPointerLock=function(){this._onPointerLockChange?.()})}let vT=!1;function gv(){vT||(vT=!0,Ue.prototype.getRenderPassNames=function(){return this._renderPassNames},Ue.prototype.getCurrentRenderPassName=function(){return this._renderPassNames[this.currentRenderPassId]},Ue.prototype.createRenderPassId=function(r){const e=++Ue._RenderPassIdCounter;return this._renderPassNames[e]=r??"NONAME",e},Ue.prototype.releaseRenderPassId=function(r){this._renderPassNames[r]=void 0;for(let e=0;e<this.scenes.length;++e){const t=this.scenes[e];for(let i=0;i<t.meshes.length;++i){const s=t.meshes[i];if(s._releaseRenderPassId(r),s.subMeshes)for(let n=0;n<s.subMeshes.length;++n)s.subMeshes[n]._removeDrawWrapper(r)}}})}class Be extends lt{static get NpmPackage(){return Ue.NpmPackage}static get Version(){return Ue.Version}static get Instances(){return St.Instances}static get LastCreatedEngine(){return St.LastCreatedEngine}static get LastCreatedScene(){return St.LastCreatedScene}static DefaultLoadingScreenFactory(e){return Ue.DefaultLoadingScreenFactory(e)}get _supportsHardwareTextureRescaling(){return!!Be._RescalePostProcessFactory}_measureFps(){this._performanceMonitor.sampleFrame(),this._fps=this._performanceMonitor.averageFPS,this._deltaTime=this._performanceMonitor.instantaneousFrameTime||0}get performanceMonitor(){return this._performanceMonitor}constructor(e,t,i,s=!1){IA(),gv(),super(e,t,i,s),this._performanceMonitor=new tw,this._drawCalls=new Sr,e&&(this._features.supportRenderPasses=!0)}_initGLContext(){super._initGLContext(),this._rescalePostProcess=null}_sharedInit(e){super._sharedInit(e),rw(this,e,this._creationOptions)}resizeImageBitmap(e,t,i){return uw(this,e,t,i)}async _createImageBitmapFromSource(e,t){return await fw(this,e,t)}switchFullscreen(e){this.isFullscreen?this.exitFullscreen():this.enterFullscreen(e)}enterFullscreen(e){this.isFullscreen||(this._pointerLockRequested=e,this._renderingCanvas&&dw(this._renderingCanvas))}exitFullscreen(){this.isFullscreen&&_w()}setDitheringState(e){e?this._gl.enable(this._gl.DITHER):this._gl.disable(this._gl.DITHER)}setRasterizerState(e){e?this._gl.disable(this._gl.RASTERIZER_DISCARD):this._gl.enable(this._gl.RASTERIZER_DISCARD)}setDirectViewport(e,t,i,s){const n=this._cachedViewport;return this._cachedViewport=null,this._viewport(e,t,i,s),n}scissorClear(e,t,i,s,n){this.enableScissor(e,t,i,s),this.clear(n,!0,!0,!0),this.disableScissor()}getVertexShaderSource(e){const t=this._gl.getAttachedShaders(e);return t?this._gl.getShaderSource(t[0]):null}getFragmentShaderSource(e){const t=this._gl.getAttachedShaders(e);return t?this._gl.getShaderSource(t[1]):null}set framebufferDimensionsObject(e){this._framebufferDimensionsObject=e,this._framebufferDimensionsObject&&this.onResizeObservable.notifyObservers(this)}_rebuildBuffers(){for(const e of this.scenes)e.resetCachedMaterial(),e._rebuildGeometries();for(const e of this._virtualScenes)e.resetCachedMaterial(),e._rebuildGeometries();super._rebuildBuffers()}getFontOffset(e){return aw(e)}enterPointerlock(){this._renderingCanvas&&RA(this._renderingCanvas)}exitPointerlock(){mw()}beginFrame(){this._measureFps(),super.beginFrame()}_deletePipelineContext(e){const t=e;t&&t.program&&t.transformFeedback&&(this.deleteTransformFeedback(t.transformFeedback),t.transformFeedback=null),super._deletePipelineContext(e)}createShaderProgram(e,t,i,s,n,o=null){n=n||this._gl,this.onBeforeShaderCompilationObservable.notifyObservers(this);const l=super.createShaderProgram(e,t,i,s,n,o);return this.onAfterShaderCompilationObservable.notifyObservers(this),l}_createShaderProgram(e,t,i,s,n=null){const o=s.createProgram();if(e.program=o,!o)throw new Error("Unable to create program");if(s.attachShader(o,t),s.attachShader(o,i),this.webGLVersion>1&&n){const l=this.createTransformFeedback();this.bindTransformFeedback(l),this.setTranformFeedbackVaryings(o,n),e.transformFeedback=l}return s.linkProgram(o),this.webGLVersion>1&&n&&this.bindTransformFeedback(null),e.context=s,e.vertexShader=t,e.fragmentShader=i,e.isParallelCompiled||this._finalizePipelineContext(e),o}_releaseTexture(e){super._releaseTexture(e)}_releaseRenderTargetWrapper(e){super._releaseRenderTargetWrapper(e);for(const t of this.scenes){for(const i of t.postProcesses)i._outputTexture===e&&(i._outputTexture=null);for(const i of t.cameras)for(const s of i._postProcesses)s&&s._outputTexture===e&&(s._outputTexture=null)}}_rescaleTexture(e,t,i,s,n){this._gl.texParameteri(this._gl.TEXTURE_2D,this._gl.TEXTURE_MAG_FILTER,this._gl.LINEAR),this._gl.texParameteri(this._gl.TEXTURE_2D,this._gl.TEXTURE_MIN_FILTER,this._gl.LINEAR),this._gl.texParameteri(this._gl.TEXTURE_2D,this._gl.TEXTURE_WRAP_S,this._gl.CLAMP_TO_EDGE),this._gl.texParameteri(this._gl.TEXTURE_2D,this._gl.TEXTURE_WRAP_T,this._gl.CLAMP_TO_EDGE);const o=this.createRenderTargetTexture({width:t.width,height:t.height},{generateMipMaps:!1,type:0,samplingMode:2,generateDepthBuffer:!1,generateStencilBuffer:!1});if(!this._rescalePostProcess&&Be._RescalePostProcessFactory&&(this._rescalePostProcess=Be._RescalePostProcessFactory(this)),this._rescalePostProcess){this._rescalePostProcess.externalTextureSamplerBinding=!0;const l=()=>{this._rescalePostProcess.onApply=function(d){d._bindTexture("textureSampler",e)};let f=i;f||(f=this.scenes[this.scenes.length-1]),f.postProcessManager.directRender([this._rescalePostProcess],o,!0),this._bindTextureDirectly(this._gl.TEXTURE_2D,t,!0),this._gl.copyTexImage2D(this._gl.TEXTURE_2D,0,s,0,0,t.width,t.height,0),this.unBindFramebuffer(o),o.dispose(),n&&n()},h=this._rescalePostProcess.getEffect();h?h.executeWhenCompiled(l):this._rescalePostProcess.onEffectCreatedObservable.addOnce(f=>{f.executeWhenCompiled(l)})}}wrapWebGLTexture(e,t=!1,i=3,s=0,n=0){const o=new um(e,this._gl),l=new Zi(this,15,!0);return l._hardwareTexture=o,l.baseWidth=s,l.baseHeight=n,l.width=s,l.height=n,l.isReady=!0,l.useMipMaps=t,this.updateTextureSamplingMode(i,l),l}updateWrappedWebGLTexture(e,t){if(e.source!==15)throw new Error("updateWrappedWebGLTexture: target InternalTexture was not produced by wrapWebGLTexture.");for(const s of this._renderTargetWrapperCache)if(s.textures?.includes(e)){if(s.isMulti)throw new Error("updateWrappedWebGLTexture: wrapped texture is part of a multi render-target; not supported. Dispose and re-wrap.");if(s._depthStencilTexture)throw new Error("updateWrappedWebGLTexture: wrapped texture's render-target wrapper has a depth/stencil texture; not supported. Dispose and re-wrap.")}e._hardwareTexture=new um(t,this._gl),e.isReady=!0,e._cachedCoordinatesMode=null,e._cachedWrapU=null,e._cachedWrapV=null,e._cachedWrapR=null,e._cachedAnisotropicFilteringLevel=null;for(const s in this._boundTexturesCache)this._boundTexturesCache[s]===e&&(this._boundTexturesCache[s]=null);this.updateTextureSamplingMode(e.samplingMode,e);const i=this._gl;for(const s of this._renderTargetWrapperCache){if(s.texture!==e)continue;const n=s,o=s.samples,l=o>1;n._framebuffer&&i.deleteFramebuffer(n._framebuffer),!l&&n._depthStencilBuffer&&(i.deleteRenderbuffer(n._depthStencilBuffer),n._depthStencilBuffer=null);const h=this._currentFramebuffer,f=i.createFramebuffer();this._bindUnboundFramebuffer(f),i.framebufferTexture2D(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,t,0),l||(n._depthStencilBuffer=this._setupFramebufferDepthAttachments(s._generateStencilBuffer,s._generateDepthBuffer,s.width,s.height)),this._bindUnboundFramebuffer(h),n._framebuffer=f,l&&(s._samples=1,this.updateRenderTargetTextureSampleCount(n,o))}}_uploadImageToTexture(e,t,i=0,s=0){const n=this._gl,o=this._getWebGLTextureType(e.type),l=this._getInternalFormat(e.format),h=this._getRGBABufferInternalSizedFormat(e.type,l),f=e.isCube?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D;this._bindTextureDirectly(f,e,!0),this._unpackFlipY(e.invertY);let d=n.TEXTURE_2D;e.isCube&&(d=n.TEXTURE_CUBE_MAP_POSITIVE_X+i),n.texImage2D(d,s,h,l,o,t),this._bindTextureDirectly(f,null,!0)}updateTextureComparisonFunction(e,t){if(this.webGLVersion===1){ge.Error("WebGL 1 does not support texture comparison.");return}const i=this._gl;e.isCube?(this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP,e,!0),t===0?(i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_COMPARE_FUNC,515),i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_COMPARE_MODE,i.NONE)):(i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_COMPARE_FUNC,t),i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE)),this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP,null)):(this._bindTextureDirectly(this._gl.TEXTURE_2D,e,!0),t===0?(i.texParameteri(i.TEXTURE_2D,i.TEXTURE_COMPARE_FUNC,515),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_COMPARE_MODE,i.NONE)):(i.texParameteri(i.TEXTURE_2D,i.TEXTURE_COMPARE_FUNC,t),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE)),this._bindTextureDirectly(this._gl.TEXTURE_2D,null)),e._comparisonFunction=t}createInstancesBuffer(e){const t=this._gl.createBuffer();if(!t)throw new Error("Unable to create instance buffer");const i=new jc(t);return i.capacity=e,this.bindArrayBuffer(i),this._gl.bufferData(this._gl.ARRAY_BUFFER,e,this._gl.DYNAMIC_DRAW),i.references=1,i}deleteInstancesBuffer(e){this._gl.deleteBuffer(e)}async _clientWaitAsync(e,t=0,i=10){const s=this._gl;return await new Promise((n,o)=>{pv(()=>{const l=s.clientWaitSync(e,t,0);if(l==s.WAIT_FAILED)throw new Error("clientWaitSync failed");return l!=s.TIMEOUT_EXPIRED},n,o,i)})}_readPixelsAsync(e,t,i,s,n,o,l){if(this._webGLVersion<2)throw new Error("_readPixelsAsync only work on WebGL2+");const h=this._gl,f=h.createBuffer();h.bindBuffer(h.PIXEL_PACK_BUFFER,f),h.bufferData(h.PIXEL_PACK_BUFFER,l.byteLength,h.STREAM_READ),h.readPixels(e,t,i,s,n,o,0),h.bindBuffer(h.PIXEL_PACK_BUFFER,null);const d=h.fenceSync(h.SYNC_GPU_COMMANDS_COMPLETE,0);return d?(h.flush(),this._clientWaitAsync(d,0,10).then(()=>(h.deleteSync(d),h.bindBuffer(h.PIXEL_PACK_BUFFER,f),h.getBufferSubData(h.PIXEL_PACK_BUFFER,0,l),h.bindBuffer(h.PIXEL_PACK_BUFFER,null),h.deleteBuffer(f),l))):null}dispose(){this.hideLoadingUI?.(),this._rescalePostProcess&&this._rescalePostProcess.dispose(),nw(this,this._renderingCanvas),super.dispose()}}Be.ALPHA_DISABLE=0;Be.ALPHA_ADD=1;Be.ALPHA_COMBINE=2;Be.ALPHA_SUBTRACT=3;Be.ALPHA_MULTIPLY=4;Be.ALPHA_MAXIMIZED=5;Be.ALPHA_ONEONE=6;Be.ALPHA_PREMULTIPLIED=7;Be.ALPHA_PREMULTIPLIED_PORTERDUFF=8;Be.ALPHA_INTERPOLATE=9;Be.ALPHA_SCREENMODE=10;Be.DELAYLOADSTATE_NONE=0;Be.DELAYLOADSTATE_LOADED=1;Be.DELAYLOADSTATE_LOADING=2;Be.DELAYLOADSTATE_NOTLOADED=4;Be.NEVER=512;Be.ALWAYS=519;Be.LESS=513;Be.EQUAL=514;Be.LEQUAL=515;Be.GREATER=516;Be.GEQUAL=518;Be.NOTEQUAL=517;Be.KEEP=7680;Be.REPLACE=7681;Be.INCR=7682;Be.DECR=7683;Be.INVERT=5386;Be.INCR_WRAP=34055;Be.DECR_WRAP=34056;Be.TEXTURE_CLAMP_ADDRESSMODE=0;Be.TEXTURE_WRAP_ADDRESSMODE=1;Be.TEXTURE_MIRROR_ADDRESSMODE=2;Be.TEXTUREFORMAT_ALPHA=0;Be.TEXTUREFORMAT_LUMINANCE=1;Be.TEXTUREFORMAT_LUMINANCE_ALPHA=2;Be.TEXTUREFORMAT_RGB=4;Be.TEXTUREFORMAT_RGBA=5;Be.TEXTUREFORMAT_RED=6;Be.TEXTUREFORMAT_R=6;Be.TEXTUREFORMAT_R16_UNORM=33322;Be.TEXTUREFORMAT_RG16_UNORM=33324;Be.TEXTUREFORMAT_RGB16_UNORM=32852;Be.TEXTUREFORMAT_RGBA16_UNORM=32859;Be.TEXTUREFORMAT_R16_SNORM=36760;Be.TEXTUREFORMAT_RG16_SNORM=36761;Be.TEXTUREFORMAT_RGB16_SNORM=36762;Be.TEXTUREFORMAT_RGBA16_SNORM=36763;Be.TEXTUREFORMAT_RG=7;Be.TEXTUREFORMAT_RED_INTEGER=8;Be.TEXTUREFORMAT_R_INTEGER=8;Be.TEXTUREFORMAT_RG_INTEGER=9;Be.TEXTUREFORMAT_RGB_INTEGER=10;Be.TEXTUREFORMAT_RGBA_INTEGER=11;Be.TEXTURETYPE_UNSIGNED_BYTE=0;Be.TEXTURETYPE_UNSIGNED_INT=0;Be.TEXTURETYPE_FLOAT=1;Be.TEXTURETYPE_HALF_FLOAT=2;Be.TEXTURETYPE_BYTE=3;Be.TEXTURETYPE_SHORT=4;Be.TEXTURETYPE_UNSIGNED_SHORT=5;Be.TEXTURETYPE_INT=6;Be.TEXTURETYPE_UNSIGNED_INTEGER=7;Be.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4=8;Be.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1=9;Be.TEXTURETYPE_UNSIGNED_SHORT_5_6_5=10;Be.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV=11;Be.TEXTURETYPE_UNSIGNED_INT_24_8=12;Be.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV=13;Be.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV=14;Be.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV=15;Be.TEXTURE_NEAREST_SAMPLINGMODE=1;Be.TEXTURE_BILINEAR_SAMPLINGMODE=2;Be.TEXTURE_TRILINEAR_SAMPLINGMODE=3;Be.TEXTURE_NEAREST_NEAREST_MIPLINEAR=8;Be.TEXTURE_LINEAR_LINEAR_MIPNEAREST=11;Be.TEXTURE_LINEAR_LINEAR_MIPLINEAR=3;Be.TEXTURE_NEAREST_NEAREST_MIPNEAREST=4;Be.TEXTURE_NEAREST_LINEAR_MIPNEAREST=5;Be.TEXTURE_NEAREST_LINEAR_MIPLINEAR=6;Be.TEXTURE_NEAREST_LINEAR=7;Be.TEXTURE_NEAREST_NEAREST=1;Be.TEXTURE_LINEAR_NEAREST_MIPNEAREST=9;Be.TEXTURE_LINEAR_NEAREST_MIPLINEAR=10;Be.TEXTURE_LINEAR_LINEAR=2;Be.TEXTURE_LINEAR_NEAREST=12;Be.TEXTURE_EXPLICIT_MODE=0;Be.TEXTURE_SPHERICAL_MODE=1;Be.TEXTURE_PLANAR_MODE=2;Be.TEXTURE_CUBIC_MODE=3;Be.TEXTURE_PROJECTION_MODE=4;Be.TEXTURE_SKYBOX_MODE=5;Be.TEXTURE_INVCUBIC_MODE=6;Be.TEXTURE_EQUIRECTANGULAR_MODE=7;Be.TEXTURE_FIXED_EQUIRECTANGULAR_MODE=8;Be.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE=9;Be.SCALEMODE_FLOOR=1;Be.SCALEMODE_NEAREST=2;Be.SCALEMODE_CEILING=3;let xT=!1;function pw(){xT||(xT=!0,lt.prototype.setAlphaMode=function(r,e=!1,t=0){if(this._alphaMode[t]===r){if(!e){const s=r===0;this.depthCullingState.depthMask!==s&&(this.depthCullingState.depthMask=s)}return}const i=r===0;this._alphaState.setAlphaBlend(!i,t),this._alphaState.setAlphaMode(r,t),e||(this.depthCullingState.depthMask=i),this._alphaMode[t]=r})}pw();let ST=!1;function gw(){if(ST)return;ST=!0;const r=new WeakMap,e=new WeakMap,t=new WeakMap,i=new WeakMap;lt.prototype.getAlphaToCoverage=function(){return r.get(this)??!1},lt.prototype.setAlphaToCoverage=function(s){r.get(this)===s&&(!this._gl||e.get(this)===this._gl)||(r.set(this,s),this._gl&&(s?this._gl.enable(this._gl.SAMPLE_ALPHA_TO_COVERAGE):this._gl.disable(this._gl.SAMPLE_ALPHA_TO_COVERAGE),e.set(this,this._gl)))},Object.defineProperty(lt.prototype,"currentSampleCount",{get:function(){return this._currentRenderTarget?this._currentRenderTarget.samples:this._gl?(i.get(this)!==this._gl&&(t.set(this,this._gl.getContextAttributes()?.antialias?Math.max(1,this._gl.getParameter(this._gl.SAMPLES)):1),i.set(this,this._gl)),t.get(this)):1},enumerable:!1,configurable:!0})}gw();let TT=!1;function vw(){if(TT)return;TT=!0;function r(i,s,n,o){let l,h=1;o===1?l=new Float32Array(s*n*4):o===2?(l=new Uint16Array(s*n*4),h=15360):o===7?l=new Uint32Array(s*n*4):l=new Uint8Array(s*n*4);for(let f=0;f<s;f++)for(let d=0;d<n;d++){const _=(d*s+f)*3,p=(d*s+f)*4;l[p+0]=i[_+0],l[p+1]=i[_+1],l[p+2]=i[_+2],l[p+3]=h}return l}function e(i){return function(s,n,o,l,h,f,d,_,p=null,g=0){const v=i?this._gl.TEXTURE_3D:this._gl.TEXTURE_2D_ARRAY,x=i?10:11,T=new Zi(this,x);T.baseWidth=n,T.baseHeight=o,T.baseDepth=l,T.width=n,T.height=o,T.depth=l,T.format=h,T.type=g,T.generateMipMaps=f,T.samplingMode=_,i?T.is3D=!0:T.is2DArray=!0,this._doNotHandleContextLost||(T._bufferView=s),i?this.updateRawTexture3D(T,s,h,d,p,g):this.updateRawTexture2DArray(T,s,h,d,p,g),this._bindTextureDirectly(v,T,!0);const y=this._getSamplingParameters(_,f);return this._gl.texParameteri(v,this._gl.TEXTURE_MAG_FILTER,y.mag),this._gl.texParameteri(v,this._gl.TEXTURE_MIN_FILTER,y.min),f&&this._gl.generateMipmap(v),this._bindTextureDirectly(v,null),this._internalTexturesCache.push(T),T}}function t(i){return function(s,n,o,l,h=null,f=0){const d=i?this._gl.TEXTURE_3D:this._gl.TEXTURE_2D_ARRAY,_=this._getWebGLTextureType(f),p=this._getInternalFormat(o),g=this._getRGBABufferInternalSizedFormat(f,o);this._bindTextureDirectly(d,s,!0),this._unpackFlipY(l===void 0?!0:!!l),this._doNotHandleContextLost||(s._bufferView=n,s.format=o,s.invertY=l,s._compression=h),s.width%4!==0&&this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT,1),h&&n?this._gl.compressedTexImage3D(d,0,this.getCaps().s3tc[h],s.width,s.height,s.depth,0,n):this._gl.texImage3D(d,0,g,s.width,s.height,s.depth,0,p,_,n),s.generateMipMaps&&this._gl.generateMipmap(d),this._bindTextureDirectly(d,null),s.isReady=!0}}lt.prototype.updateRawTexture=function(i,s,n,o,l=null,h=0,f=!1){if(!i)return;const d=this._getRGBABufferInternalSizedFormat(h,n,f),_=this._getInternalFormat(n),p=this._getWebGLTextureType(h);this._bindTextureDirectly(this._gl.TEXTURE_2D,i,!0),this._unpackFlipY(o===void 0?!0:!!o),this._doNotHandleContextLost||(i._bufferView=s,i.format=n,i.type=h,i.invertY=o,i._compression=l),i.width%4!==0&&this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT,1),l&&s?this._gl.compressedTexImage2D(this._gl.TEXTURE_2D,0,this.getCaps().s3tc[l],i.width,i.height,0,s):this._gl.texImage2D(this._gl.TEXTURE_2D,0,d,i.width,i.height,0,_,p,s),i.generateMipMaps&&this._gl.generateMipmap(this._gl.TEXTURE_2D),this._bindTextureDirectly(this._gl.TEXTURE_2D,null),i.isReady=!0},lt.prototype.createRawTexture=function(i,s,n,o,l,h,f,d=null,_=0,p=0,g=!1){const v=new Zi(this,3);v.baseWidth=s,v.baseHeight=n,v.width=s,v.height=n,v.format=o,v.generateMipMaps=l,v.samplingMode=f,v.invertY=h,v._compression=d,v.type=_,v._useSRGBBuffer=this._getUseSRGBBuffer(g,!l),this._doNotHandleContextLost||(v._bufferView=i),this.updateRawTexture(v,i,o,h,d,_,v._useSRGBBuffer),this._bindTextureDirectly(this._gl.TEXTURE_2D,v,!0);const x=this._getSamplingParameters(f,l);return this._gl.texParameteri(this._gl.TEXTURE_2D,this._gl.TEXTURE_MAG_FILTER,x.mag),this._gl.texParameteri(this._gl.TEXTURE_2D,this._gl.TEXTURE_MIN_FILTER,x.min),l&&this._gl.generateMipmap(this._gl.TEXTURE_2D),this._bindTextureDirectly(this._gl.TEXTURE_2D,null),this._internalTexturesCache.push(v),v},lt.prototype.createRawCubeTexture=function(i,s,n,o,l,h,f,d=null){const _=this._gl,p=new Zi(this,8);p.isCube=!0,p.format=n,p.type=o,this._doNotHandleContextLost||(p._bufferViewArray=i);const g=this._getWebGLTextureType(o);let v=this._getInternalFormat(n);v===_.RGB&&(v=_.RGBA),g===_.FLOAT&&!this._caps.textureFloatLinearFiltering?(l=!1,f=1,ge.Warn("Float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively.")):g===this._gl.HALF_FLOAT_OES&&!this._caps.textureHalfFloatLinearFiltering?(l=!1,f=1,ge.Warn("Half float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively.")):g===_.FLOAT&&!this._caps.textureFloatRender?(l=!1,ge.Warn("Render to float textures is not supported. Mipmap generation forced to false.")):g===_.HALF_FLOAT&&!this._caps.colorBufferFloat&&(l=!1,ge.Warn("Render to half float textures is not supported. Mipmap generation forced to false."));const x=s,T=x;if(p.width=x,p.height=T,p.invertY=h,p._compression=d,!this.needPOTTextures||kc(p.width)&&kc(p.height)||(l=!1),i)this.updateRawCubeTexture(p,i,n,o,h,d);else{const I=this._getRGBABufferInternalSizedFormat(o),w=0;this._bindTextureDirectly(_.TEXTURE_CUBE_MAP,p,!0);for(let A=0;A<6;A++)d?_.compressedTexImage2D(_.TEXTURE_CUBE_MAP_POSITIVE_X+A,w,this.getCaps().s3tc[d],p.width,p.height,0,void 0):_.texImage2D(_.TEXTURE_CUBE_MAP_POSITIVE_X+A,w,I,p.width,p.height,0,v,g,null);this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP,null)}this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP,p,!0),i&&l&&this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP);const R=this._getSamplingParameters(f,l);return _.texParameteri(_.TEXTURE_CUBE_MAP,_.TEXTURE_MAG_FILTER,R.mag),_.texParameteri(_.TEXTURE_CUBE_MAP,_.TEXTURE_MIN_FILTER,R.min),_.texParameteri(_.TEXTURE_CUBE_MAP,_.TEXTURE_WRAP_S,_.CLAMP_TO_EDGE),_.texParameteri(_.TEXTURE_CUBE_MAP,_.TEXTURE_WRAP_T,_.CLAMP_TO_EDGE),this._bindTextureDirectly(_.TEXTURE_CUBE_MAP,null),p.generateMipMaps=l,p.samplingMode=f,p.isReady=!0,p},lt.prototype.updateRawCubeTexture=function(i,s,n,o,l,h=null,f=0){i._bufferViewArray=s,i.format=n,i.type=o,i.invertY=l,i._compression=h;const d=this._gl,_=this._getWebGLTextureType(o);let p=this._getInternalFormat(n);const g=this._getRGBABufferInternalSizedFormat(o);let v=!1;p===d.RGB&&(p=d.RGBA,v=!0),this._bindTextureDirectly(d.TEXTURE_CUBE_MAP,i,!0),this._unpackFlipY(l===void 0?!0:!!l),i.width%4!==0&&d.pixelStorei(d.UNPACK_ALIGNMENT,1);for(let T=0;T<6;T++){let y=s[T];h?d.compressedTexImage2D(d.TEXTURE_CUBE_MAP_POSITIVE_X+T,f,this.getCaps().s3tc[h],i.width,i.height,0,y):(v&&(y=r(y,i.width,i.height,o)),d.texImage2D(d.TEXTURE_CUBE_MAP_POSITIVE_X+T,f,g,i.width,i.height,0,p,_,y))}(!this.needPOTTextures||kc(i.width)&&kc(i.height))&&i.generateMipMaps&&f===0&&this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP),this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP,null),i.isReady=!0},lt.prototype.createRawCubeTextureFromUrl=function(i,s,n,o,l,h,f,d,_=null,p=null,g=3,v=!1){const x=this._gl,T=this.createRawCubeTexture(null,n,o,l,!h,v,g,null);s?.addPendingData(T),T.url=i,T.isReady=!1,this._internalTexturesCache.push(T);const y=(I,w)=>{s?.removePendingData(T),p&&p(I?I.status+" "+I.statusText:"Failed to parse texture data",w)},R=async I=>{if(!T._hardwareTexture)return;const w=f(I);if(!w)return;const A=w instanceof Promise?await w:w,P=T.width;if(d){const D=this._getWebGLTextureType(l);let U=this._getInternalFormat(o);const z=this._getRGBABufferInternalSizedFormat(l);let k=!1;U===x.RGB&&(U=x.RGBA,k=!0),this._bindTextureDirectly(x.TEXTURE_CUBE_MAP,T,!0),this._unpackFlipY(!1);const ne=d(A);for(let fe=0;fe<ne.length;fe++){const me=P>>fe;for(let B=0;B<6;B++){let re=ne[fe][B];k&&(re=r(re,me,me,l)),x.texImage2D(B,fe,z,me,me,0,U,D,re)}}this._bindTextureDirectly(x.TEXTURE_CUBE_MAP,null)}else this.updateRawCubeTexture(T,A,o,l,v);T.isReady=!0,s?.removePendingData(T),T.onLoadedObservable.notifyObservers(T),T.onLoadedObservable.clear(),_&&_()};return this._loadFile(i,I=>{R(I).catch(w=>{y(void 0,w)})},void 0,s?.offlineProvider,!0,y),T},lt.prototype.createRawTexture2DArray=e(!1),lt.prototype.createRawTexture3D=e(!0),lt.prototype.updateRawTexture2DArray=t(!1),lt.prototype.updateRawTexture3D=t(!0)}vw();let ET=!1;function xw(){ET||(ET=!0,lt.prototype._readTexturePixelsSync=function(r,e,t,i=-1,s=0,n=null,o=!0,l=!1,h=0,f=0){const d=this._gl;if(!d)throw new Error("Engine does not have gl rendering context.");if(!this._dummyFramebuffer){const p=d.createFramebuffer();if(!p)throw new Error("Unable to create dummy framebuffer");this._dummyFramebuffer=p}d.bindFramebuffer(d.FRAMEBUFFER,this._dummyFramebuffer),i>-1&&(r.is2DArray||r.is3D)?d.framebufferTextureLayer(d.FRAMEBUFFER,d.COLOR_ATTACHMENT0,r._hardwareTexture?.underlyingResource,s,i):i>-1?d.framebufferTexture2D(d.FRAMEBUFFER,d.COLOR_ATTACHMENT0,d.TEXTURE_CUBE_MAP_POSITIVE_X+i,r._hardwareTexture?.underlyingResource,s):d.framebufferTexture2D(d.FRAMEBUFFER,d.COLOR_ATTACHMENT0,d.TEXTURE_2D,r._hardwareTexture?.underlyingResource,s);let _=r.type!==void 0?this._getWebGLTextureType(r.type):d.UNSIGNED_BYTE;if(l)n||(n=xP(r.type,4*e*t));else switch(_){case d.UNSIGNED_BYTE:n||(n=new Uint8Array(4*e*t)),_=d.UNSIGNED_BYTE;break;default:n||(n=new Float32Array(4*e*t)),_=d.FLOAT;break}return o&&this.flushFramebuffer(),d.readPixels(h,f,e,t,d.RGBA,_,n),d.bindFramebuffer(d.FRAMEBUFFER,this._currentFramebuffer),n},lt.prototype._readTexturePixels=function(r,e,t,i=-1,s=0,n=null,o=!0,l=!1,h=0,f=0){return Promise.resolve(this._readTexturePixelsSync(r,e,t,i,s,n,o,l,h,f))})}xw();let yT=!1;function CA(){yT||(yT=!0,lt.prototype.updateDynamicIndexBuffer=function(r,e,t=0){this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER]=null,this.bindIndexBuffer(r);let i;r.is32Bits?i=e instanceof Uint32Array?e:new Uint32Array(e):i=e instanceof Uint16Array?e:new Uint16Array(e),this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER,i,this._gl.DYNAMIC_DRAW),this._resetIndexBufferBinding()},lt.prototype.updateDynamicVertexBuffer=function(r,e,t,i){this.bindArrayBuffer(r),t===void 0&&(t=0);const s=e.byteLength||e.length;i===void 0||i>=s&&t===0?e instanceof Array?this._gl.bufferSubData(this._gl.ARRAY_BUFFER,t,new Float32Array(e)):this._gl.bufferSubData(this._gl.ARRAY_BUFFER,t,e):e instanceof Array?this._gl.bufferSubData(this._gl.ARRAY_BUFFER,t,new Float32Array(e).subarray(0,i/4)):(ArrayBuffer.isView(e)?e=new Uint8Array(e.buffer,e.byteOffset,i):e=new Uint8Array(e,0,i),this._gl.bufferSubData(this._gl.ARRAY_BUFFER,t,e)),this._resetVertexBufferBinding()})}CA();let bT=!1;function Sw(){bT||(bT=!0,lt.prototype._createDepthStencilCubeTexture=function(r,e){const t=new Zi(this,12);if(t.isCube=!0,this.webGLVersion===1)return ge.Error("Depth cube texture is not supported by WebGL 1."),t;const i={bilinearFiltering:!1,comparisonFunction:0,generateStencil:!1,...e},s=this._gl;this._bindTextureDirectly(s.TEXTURE_CUBE_MAP,t,!0),this._setupDepthStencilTexture(t,r,i.bilinearFiltering,i.comparisonFunction);for(let n=0;n<6;n++)i.generateStencil?s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,s.DEPTH24_STENCIL8,r,r,0,s.DEPTH_STENCIL,s.UNSIGNED_INT_24_8,null):s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,s.DEPTH_COMPONENT24,r,r,0,s.DEPTH_COMPONENT,s.UNSIGNED_INT,null);return this._bindTextureDirectly(s.TEXTURE_CUBE_MAP,null),this._internalTexturesCache.push(t),t},lt.prototype._setCubeMapTextureParams=function(r,e,t){const i=this._gl;i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAG_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MIN_FILTER,e?i.LINEAR_MIPMAP_LINEAR:i.LINEAR),i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),r.samplingMode=e?3:2,e&&this.getCaps().textureMaxLevel&&t!==void 0&&t>0&&(i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,t),r._maxLodLevel=t),this._bindTextureDirectly(i.TEXTURE_CUBE_MAP,null)},lt.prototype.createCubeTexture=function(r,e,t,i,s=null,n=null,o,l=null,h=!1,f=0,d=0,_=null,p,g=!1,v=null){const x=this._gl;return this.createCubeTextureBase(r,e,t,!!i,s,n,o,l,h,f,d,_,T=>this._bindTextureDirectly(x.TEXTURE_CUBE_MAP,T,!0),(T,y)=>{const R=this.needPOTTextures?Kc(y[0].width,this._caps.maxCubemapTextureSize):y[0].width,I=R,w=[x.TEXTURE_CUBE_MAP_POSITIVE_X,x.TEXTURE_CUBE_MAP_POSITIVE_Y,x.TEXTURE_CUBE_MAP_POSITIVE_Z,x.TEXTURE_CUBE_MAP_NEGATIVE_X,x.TEXTURE_CUBE_MAP_NEGATIVE_Y,x.TEXTURE_CUBE_MAP_NEGATIVE_Z];this._bindTextureDirectly(x.TEXTURE_CUBE_MAP,T,!0),this._unpackFlipY(!1);const A=o?this._getInternalFormat(o,T._useSRGBBuffer):T._useSRGBBuffer?this._glSRGBExtensionValues.SRGB8_ALPHA8:x.RGBA;let P=o?this._getInternalFormat(o):x.RGBA;T._useSRGBBuffer&&this.webGLVersion===1&&(P=A);for(let D=0;D<w.length;D++)if(y[D].width!==R||y[D].height!==I){if(this._prepareWorkingCanvas(),!this._workingCanvas||!this._workingContext){ge.Warn("Cannot create canvas to resize texture.");return}this._workingCanvas.width=R,this._workingCanvas.height=I,this._workingContext.drawImage(y[D],0,0,y[D].width,y[D].height,0,0,R,I),x.texImage2D(w[D],0,A,P,x.UNSIGNED_BYTE,this._workingCanvas)}else x.texImage2D(w[D],0,A,P,x.UNSIGNED_BYTE,y[D]);i||x.generateMipmap(x.TEXTURE_CUBE_MAP),this._setCubeMapTextureParams(T,!i),T.width=R,T.height=I,T.isReady=!0,o&&(T.format=o),T.onLoadedObservable.notifyObservers(T),T.onLoadedObservable.clear(),s&&s()},!!g,v)},lt.prototype.generateMipMapsForCubemap=function(r,e=!0){if(r.generateMipMaps){const t=this._gl;this._bindTextureDirectly(t.TEXTURE_CUBE_MAP,r,!0),t.generateMipmap(t.TEXTURE_CUBE_MAP),e&&this._bindTextureDirectly(t.TEXTURE_CUBE_MAP,null)}})}Sw();class Tw{get depthStencilTexture(){return this._depthStencilTexture}setDepthStencilTexture(e,t=!0){t&&this._depthStencilTexture&&this._depthStencilTexture.dispose(),this._depthStencilTexture=e,this._generateDepthBuffer=this._generateStencilBuffer=this._depthStencilTextureWithStencil=!1,e&&(this._generateDepthBuffer=!0,this._generateStencilBuffer=this._depthStencilTextureWithStencil=Zc(e.format))}get depthStencilTextureWithStencil(){return this._depthStencilTextureWithStencil}get isCube(){return this._isCube}get isMulti(){return this._isMulti}get is2DArray(){return this.layers>0}get is3D(){return this.depth>0}get size(){return this.width}get width(){return this._size.width??this._size}get height(){return this._size.height??this._size}get layers(){return this._size.layers||0}get depth(){return this._size.depth||0}get texture(){return this._textures?.[0]??null}get textures(){return this._textures}get faceIndices(){return this._faceIndices}get layerIndices(){return this._layerIndices}getBaseArrayLayer(e){if(!this._textures)return-1;const t=this._textures[e],i=this._layerIndices?.[e]??0,s=this._faceIndices?.[e]??0;return t.isCube?i*6+s:t.is3D?0:i}get samples(){return this._samples}setSamples(e,t=!0,i=!1){if(this.samples===e&&!i)return e;const s=this._isMulti?this._engine.updateMultipleRenderTargetTextureSampleCount(this,e,t):this._engine.updateRenderTargetTextureSampleCount(this,e);return this._samples=e,s}resolveMSAATextures(){this.isMulti?this._engine.resolveMultiFramebuffer(this):this._engine.resolveFramebuffer(this)}generateMipMaps(){this._engine._currentRenderTarget===this&&(this.isMulti?this._engine.unBindMultiColorAttachmentFramebuffer(this,!0):this._engine.unBindFramebuffer(this,!0)),this.isMulti?this._engine.generateMipMapsMultiFramebuffer(this):this._engine.generateMipMapsFramebuffer(this)}constructor(e,t,i,s,n){this._textures=null,this._faceIndices=null,this._layerIndices=null,this._samples=1,this._attachments=null,this._generateStencilBuffer=!1,this._generateDepthBuffer=!1,this._depthStencilTextureWithStencil=!1,this.disableAutomaticMSAAResolve=!1,this.resolveMSAAColors=!0,this.resolveMSAADepth=!1,this.resolveMSAAStencil=!1,this.depthReadOnly=!1,this.stencilReadOnly=!1,this._isMulti=e,this._isCube=t,this._size=i,this._engine=s,this._depthStencilTexture=null,this.label=n}setTextures(e){Array.isArray(e)?this._textures=e:e?this._textures=[e]:this._textures=null}setTexture(e,t=0,i=!0){this._textures||(this._textures=[]),this._textures[t]!==e&&(this._textures[t]&&i&&this._textures[t].dispose(),this._textures[t]=e)}setLayerAndFaceIndices(e,t){this._layerIndices=e,this._faceIndices=t}setLayerAndFaceIndex(e=0,t,i){this._layerIndices||(this._layerIndices=[]),this._faceIndices||(this._faceIndices=[]),t!==void 0&&t>=0&&(this._layerIndices[e]=t),i!==void 0&&i>=0&&(this._faceIndices[e]=i)}createDepthStencilTexture(e=0,t=!0,i=!1,s=1,n=14,o){return this._depthStencilTexture?.dispose(),this._depthStencilTextureWithStencil=i,this._depthStencilTextureLabel=o,this._depthStencilTexture=this._engine.createDepthStencilTexture(this._size,{bilinearFiltering:t,comparisonFunction:e,generateStencil:i,isCube:this._isCube,samples:s,depthTextureFormat:n,label:o},this),this._depthStencilTexture}_shareDepth(e){this.shareDepth(e)}shareDepth(e){this._depthStencilTexture&&(e._depthStencilTexture&&e._depthStencilTexture.dispose(),e._depthStencilTexture=this._depthStencilTexture,e._depthStencilTextureWithStencil=this._depthStencilTextureWithStencil,this._depthStencilTexture.incrementReferences())}_swapAndDie(e){this.texture&&this.texture._swapAndDie(e),this._textures=null,this.dispose(!0)}_cloneRenderTargetWrapper(){let e=null;if(this._isMulti){const t=this.textures;if(t&&t.length>0){let i=!1,s=t.length,n=-1;const o=t[t.length-1]._source;(o===14||o===12)&&(i=!0,n=t[t.length-1].format,s--);const l=[],h=[],f=[],d=[],_=[],p=[],g=[],v={};for(let y=0;y<s;++y){const R=t[y];l.push(R.samplingMode),h.push(R.type),f.push(R.format),v[R.uniqueId]!==void 0?(d.push(-1),g.push(0)):(v[R.uniqueId]=y,R.is2DArray?(d.push(35866),g.push(R.depth)):R.isCube?(d.push(34067),g.push(0)):R.is3D?(d.push(32879),g.push(R.depth)):(d.push(3553),g.push(0))),this._faceIndices&&_.push(this._faceIndices[y]??0),this._layerIndices&&p.push(this._layerIndices[y]??0)}const x={samplingModes:l,generateMipMaps:t[0].generateMipMaps,generateDepthBuffer:this._generateDepthBuffer,generateStencilBuffer:this._generateStencilBuffer,generateDepthTexture:i,depthTextureFormat:n,types:h,formats:f,textureCount:s,targetTypes:d,faceIndex:_,layerIndex:p,layerCounts:g,label:this.label},T={width:this.width,height:this.height,depth:this.depth};e=this._engine.createMultipleRenderTarget(T,x);for(let y=0;y<s;++y){if(d[y]!==-1)continue;const R=v[t[y].uniqueId];e.setTexture(e.textures[R],y)}}}else{const t={};if(t.generateDepthBuffer=this._generateDepthBuffer,t.generateMipMaps=this.texture?.generateMipMaps??!1,t.generateStencilBuffer=this._generateStencilBuffer,t.samplingMode=this.texture?.samplingMode,t.type=this.texture?.type,t.format=this.texture?.format,t.noColorAttachment=!this._textures,t.label=this.label,this.isCube)e=this._engine.createRenderTargetCubeTexture(this.width,t);else{const i={width:this.width,height:this.height,layers:this.is2DArray||this.is3D?this.texture?.depth:void 0};e=this._engine.createRenderTargetTexture(i,t)}e.texture&&(e.texture.isReady=!0)}return e}_swapRenderTargetWrapper(e){if(this._textures&&e._textures)for(let t=0;t<this._textures.length;++t)this._textures[t]._swapAndDie(e._textures[t],!1),e._textures[t].isReady=!0;this._depthStencilTexture&&e._depthStencilTexture&&(this._depthStencilTexture._swapAndDie(e._depthStencilTexture),e._depthStencilTexture.isReady=!0),this._textures=null,this._depthStencilTexture=null}_rebuild(){×=÷ÏÊ×¬¢h­µç]SÙ™œÙ]
ÞKK˜Y™™\‹ŠK	‰–OL	‰™œ\Ú
—ÑÙ]›Ø]‘ÐP\œ˜^PY™™\Š‹K˜ž]SÙ™œÙ]
ÞKK˜Y™™\‹ŠJJN‘OOM	‰ŠU—ÑÙ][‘›Ø]\ÕR[‘ÐP\œ˜^PY™™\Š‹K˜ž]SÙ™œÙ]
ÞKK˜Y™™\‹ŠK	‰–OL	‰™œ\Ú
—ÑÙ][‘›Ø]\Ñ›Ø]‘ÐP\œ˜^PY™™\Š‹K˜ž]SÙ™œÙ]
ÞKK˜Y™™\‹ŠJJK\OLÙ[Ù^ØÛÛœÝOP‹^\™Q›Ø]	‰Š‰‰‹^\™Q›Ø][™X\‘š[\š[™ßYŠKÏP‹^\™R[‘›Ø]	‰Š‰‰‹^\™R[‘›Ø][™X\‘š[\š[™ßYŠKYOJOOLLŽOOM	‰ˆRÊI‰šOÌNŠOOMOOLLŽ	‰ˆZJI‰’ÏÌŽŒÛ]Ë[[ÜÝÚ]Ú

^ØØ\ÙHLŽžÜÝÚ]Ú
YJ^ØØ\ÙHN“ÏU—ÑÙ]›Ø]‘ÐP\œ˜^PY™™\‹[[Øœ™XZÎØØ\ÙHŽ“ÏU—ÑÙ]›Ø]\Ò[‘›Ø]‘ÐP\œ˜^PY™™\‹U—ÑÙ]›Ø]‘ÐP\œ˜^PY™™\ŽØœ™XZÎØØ\ÙH“ÏU—ÑÙ]›Ø]\ÕR[‘ÐP\œ˜^PY™™\‹U—ÑÙ]›Ø]‘ÐP\œ˜^PY™™\ŽØœ™XZßXœ™XZßYY˜][žÜÝÚ]Ú
YJ^ØØ\ÙHN“ÏU—ÑÙ][‘›Ø]\Ñ›Ø]‘ÐP\œ˜^PY™™\‹[[Øœ™XZÎØØ\ÙHŽ“ÏU—ÑÙ][‘›Ø]‘ÐP\œ˜^PY™™\‹U—ÑÙ][‘›Ø]\Ñ›Ø]‘ÐP\œ˜^PY™™\ŽØœ™XZÎØØ\ÙH“ÏU—ÑÙ][‘›Ø]\ÕR[‘ÐP\œ˜^PY™™\‹U—ÑÙ][‘›Ø]\Ñ›Ø]‘ÐP\œ˜^PY™™\ŽØœ™XZßXœ™XZß_]\OZYKSÊ‹K˜ž]SÙ™œÙ]
ÞKK˜Y™™\‹ŠK	‰–OL	‰™œ\Ú
ØŠ‹K˜ž]SÙ™œÙ]
ÞKK˜Y™™\‹ŠN’Š_R‰‰™K—Ý\ØY]UÕ^\™Q\™XÝJ‹™KŠ_Y[ÙHYŠËš\Ô‘ÐŠ]\OLOOLÊ™›Ü›X]M]Šž
ŒËU—ÑÙ]‘Ð\œ˜^PY™™\Š‹K˜ž]SÙ™œÙ]
ÞKK˜Y™™\‹‹Ë™JKK—Ý\ØY]UÕ^\™Q\™XÝJ‹™KŠJNŠ™›Ü›X]MK]Šž
U—ÑÙ]‘ÐP\œ˜^PY™™\Š‹K˜ž]SÙ™œÙ]
ÞKK˜Y™™\‹‹Ë™K™JKK—Ý\ØY]UÕ^\™Q\™XÝJ‹™KŠJNÙ[ÙHYŠËš\Ó[Z[˜[˜ÙJ^ØÛÛœÝYK—ÙÙ][œXÚÐ[YÛ™[Y[

KO]ŽÕSX]™›ÛÜŠ
ŠÒ‹LJKÒŠJ’ŠŠLJJÚKU—ÑÙ][Z[˜[˜ÙP\œ˜^PY™™\Š‹K˜ž]SÙ™œÙ]
ÞKK˜Y™™\ŠK™›Ü›X]LK\OLK—Ý\ØY]UÕ^\™Q\™XÝJ‹™KŠ_Y[ÙHSX]›X^
ŠKÍ
“X]›X^

KÍ
”[™]ÈZ[\œ˜^JK˜Y™™\‹K˜ž]SÙ™œÙ]
ÞK
K\OLK—Ý\ØYÛÛ\™\ÜÙY]UÕ^\™Q\™XÝJK‹‹™KŠ_^JÏQÝŠž
ŠÎ
N•ŠKK
KKSX]›X^
KŠKSX]›X^
K
_ZYŠOO]›ÚY
Xœ™XZßY	‰™›[™ÝŒÜËœÜ\šXØ[Û[›ÛZX[YšÛÛ™\ÝX™SX\ÔÜ\šXØ[Û[›ÛZX[
ÜÚ^™NœÜÛWKšYÚ™ÌKY™ÌWK\™Ì—KÝÛŽ™Ì×Kœ›Û™ÍK˜XÚÎ™ÍWK›Ü›X]K\NŒKØ[[XTÜXÙNˆL_JNœËœÜ\šXØ[Û[›ÛZX[]›ÚY_U”ÝÜ™SÑ[[PÚ[›™[HLNØÛÛœÝ‘SØš™XÝ™œ™Y^™JØš™XÝ™Yš[™T›Ü\J××Ü›Ý××Î›[ÕÛÛÎ•KÞ[X›ÛÔÝš[™ÕYËÝ˜[YNˆ“[Ù[HŸJJNÙ[˜Ý[ÛˆÒJŠ^Ü™]\›ˆ‹œÜ]
ˆŠK™š[\ŠOO™HOOHˆŠK›X\
OOœ\œÙQ›Ø]
JJ_Y[˜Ý[Ûˆ›J‹K
^Ù›ÜŠÝ›[™ÝOOYNÊ^ØÛÛœÝOWÒJ‹›[™\ÖÜ‹š[™^
Ê×JNÝœ\Ú
‹‹šJ__Y[˜Ý[ÛˆQŠ‹K
^Û]OLÏLLÏLLLÙ›ÜŠ]OLÞO‹›[X™\“Ù’Üš^›Û[[™Û\ËLNÞJÊÊZYŠ‹šÜš^›Û[[™Û\ÖÞJÌW_OOO\‹›[X™\“Ù’Üš^›Û[[™Û\ËLŠ^ÜÏ^K\‹šÜš^›Û[[™Û\ÖÞWKÏ\‹šÜš^›Û[[™Û\ÖÞJÌWNØœ™XZßY›ÜŠ]OLÞO‹›[X™\“Ù•™\XØ[[™Û\ËLNÞJÊÊZYŠO‹™\XØ[[™Û\ÖÞJÌW_OOO\‹›[X™\“Ù•™\XØ[[™Û\ËLŠ^ÚO^K\‹™\XØ[[™Û\ÖÞWK\‹™\XØ[[™Û\ÖÞJÌWNØœ™XZßXÛÛœÝ[Ë[‹Z[ÚYŠOOL
\™]\›ˆØÛÛœÝÏYOOLÌŠ[ŠKÙ‹JK[
KÙÏYOOLÜÎœÊÌK[Û
‹˜Ø[™[U˜[Y\ÖÜ×VÚWK‹˜Ø[™[U˜[Y\ÖÙ×VÚWKÊK[Û
‹˜Ø[™[U˜[Y\ÖÜ×VÚJÌWK‹˜Ø[™[U˜[Y\ÖÙ×VÚJÌWKÊNÜ™]\›ˆÛ
‹
_Y[˜Ý[Ûˆ‘ŠŠ^ØÛÛœÝO^Û[™\Î›™]È^XÛÙ\Š]‹NŠK™XÛÙJŠKœÜ]
˜
K[™^ŒKÏ^Ý™\œÚ[ÛŽšK›[™\ÖÌKØ[™[U˜[Y\Î–×KÜš^›Û[[™Û\Î–×K™\XØ[[™Û\Î–×K[X™\“Ù’Üš^›Û[[™Û\ÎŒ[X™\“Ù•™\XØ[[™Û\ÎŒNÙ›ÜŠKš[™^LNÚK›[™\Ë›[™ÝŒ	‰ˆZK›[™\ÖÚKš[™^Kš[˜ÛY\Ê•SHŠNÊZKš[™^
ÊÎÚK›[™\ÖÚKš[™^Kš[˜ÛY\Ê’SÓQHŠKKš[™^
ÊÎØÛÛœÝWÒJK›[™\ÖÚKš[™^
Ê×JNÜË›[X™\“Ù“YÚÏ[–ÌKË›[Y[œÔ\“[\[–ÌWKË›[X™\“Ù•™\XØ[[™Û\Ï[–Ì×KË›[X™\“Ù’Üš^›Û[[™Û\Ï[–ÍKËœÝÛY]šXÕ\O[–ÍWKË[š]Õ\O[–Í—KËÚY[–Í×KË›[™Ý[–ÎKËšZYÚ[–ÎWKKš[™^
ÊÎÙ›ÜŠ]ÏLÙÏË›[X™\“Ù’Üš^›Û[[™Û\ÎÙÊÊÊ\Ë˜Ø[™[U˜[Y\ÖÙ×OV×NÛ›JKË›[X™\“Ù•™\XØ[[™Û\ËË™\XØ[[™Û\ÊK›JKË›[X™\“Ù’Üš^›Û[[™Û\ËËšÜš^›Û[[™Û\ÊNÙ›ÜŠ]ÏLÙÏË›[X™\“Ù’Üš^›Û[[™Û\ÎÙÊÊÊ[›JKË›[X™\“Ù•™\XØ[[™Û\ËË˜Ø[™[U˜[Y\ÖÙ×JNÛ]ÏKLNÙ›ÜŠ]ÏLÙÏË›[X™\“Ù’Üš^›Û[[™Û\ÎÙÊÊÊY›ÜŠ]LÝË›[X™\“Ù•™\XØ[[™Û\ÎÝŠÊÊ[ÏSX]›X^
ËË˜Ø[™[U˜[Y\ÖÙ×VÝ—JNÚYŠÏŒ
Y›ÜŠ]ÏLÙÏË›[X™\“Ù’Üš^›Û[[™Û\ÎÙÊÊÊY›ÜŠ]LÝË›[X™\“Ù•™\XØ[[™Û\ÎÝŠÊÊ\Ë˜Ø[™[U˜[Y\ÖÙ×VÝ—KÏ[ÎØÛÛœÝLN[
Œ‹Z
›[™]È›Ø]Ì\œ˜^J
›
KÏ\ËšÜš^›Û[[™Û\ÖÌK\ËšÜš^›Û[[™Û\ÖÜË›[X™\“Ù’Üš^›Û[[™Û\ËLWNÙ›ÜŠ]ÏLÙÏŽÙÊÊÊ^Û]YÉZØÛÛœÝSX]™›ÛÜŠËÚ
NÜWÈOOL	‰Šß\
I‰Š‰O\
Œ‹œ	‰Š\
Œ‹]ŠJKÞ
ÝŠ›OPQŠËŠ_\™]\›žÝÚYšÌ‹ZYÚŒK]N™_XÛ\ÜÈQžØÛÛœÝXÝÜŠ
^Ý\ËœÝ\ÜØ\ØØY\ÏHL_[ØYÝX™Q]J
^Ý›ÝÈ‹šY\È›ÝÝ\ÜY[ˆÝX™KˆŸ[ØY]JKJ^ØÛÛœÝÏ[™]ÈZ[\œ˜^JK˜Y™™\‹K˜ž]SÙ™œÙ]K˜ž]S[™Ý
KT‘ŠÊNÚJ‹ÚY‹šZYÚH]\ÙSZ\X\ËLK

OOžØÛÛœÝÏ]™Ù][™Ú[™J
NÝ\OLK™›Ü›X]M‹—ÙØ[[XTÜXÙOHLKË—Ý\ØY]UÕ^\™Q\™XÝJ‹™]J_J__XÛÛœÝÑSØš™XÝ™œ™Y^™JØš™XÝ™Yš[™T›Ü\J××Ü›Ý××Î›[ÒQTÕ^\™SØY\Ž’QŸKÞ[X›ÛÔÝš[™ÕYËÝ˜[YNˆ“[Ù[HŸJJNØÛ\ÜÈQžØÛÛœÝXÝÜŠ
^Ý\ËœÝ\ÜØ\ØØY\ÏHL[ØYÝX™Q]JKKÊ^ØÛÛœÝ]™Ù][™Ú[™J
NÛ]ËHLKLYLÎÚYŠ\œ˜^Kš\Ð\œ˜^JJJY›ÜŠ]LÙK›[™ÝÙŠÊÊ^ØÛÛœÝYVÙ—NÛÏU‘Ù]Ò[™›Ê
KÚY[ËÚYšZYÚ[ËšZYÚJËš\Ô‘ÐŸËš\Ó[Z[˜[˜Ù_Ë›Z\X\ÛÝ[ŒJI‰™Ù[™\˜]SZ\X\Ë‹—Ý[œXÚÑ›\JËš\ÐÛÛ\™\ÜÙY
K•\ØYÓ]™[Ê‹Ë‹LKŠK[Ëš\Ñ›Ý\ÐÉ‰›Ë›Z\X\ÛÝ[OOLOÛ‹™Ù[™\˜]SZ\X\Ñ›ÜÝX™[X\

Nš[Ë›Z\X\ÛÝ[L_Y[Ù^ØÛÛœÝYNÛÏU‘Ù]Ò[™›ÊŠKÚY[ËÚYšZYÚ[ËšZYÚI‰ŠËœÜ\šXØ[Û[›ÛZX[[™]È›ÊKJËš\Ô‘ÐŸËš\Ó[Z[˜[˜Ù_Ë›Z\X\ÛÝ[ŒJI‰™Ù[™\˜]SZ\X\Ë‹—Ý[œXÚÑ›\JËš\ÐÛÛ\™\ÜÙY
K•\ØYÓ]™[Ê‹‹ËŠK[Ëš\Ñ›Ý\ÐÉ‰›Ë›Z\X\ÛÝ[OOLOÛ‹™Ù[™\˜]SZ\X\Ñ›ÜÝX™[X\
LJNš[Ë›Z\X\ÛÝ[L_[‹—ÜÙ]ÝX™SX\^\™T\˜[\Ê
Kš\Ô™XYOHL›Û“ØYYØœÙ\˜X›K››ÝYžSØœÙ\™\œÊ
K›Û“ØYYØœÙ\˜X›K˜ÛX\Š
KÉ‰œÊÚ\ÑÎˆLÚYÚY[™›Î›Ë]N™K^\™NJ_[ØY]JKJ^ØÛÛœÝÏU‘Ù]Ò[™›ÊJKJËš\Ô‘ÐŸËš\Ó[Z[˜[˜Ù_Ë›Z\X\ÛÝ[ŒJI‰™Ù[™\˜]SZ\X\É‰“X]›X^
ËÚYËšZYÚ
OœË›Z\X\ÛÝ[LOOOLNÚJËÚYËšZYÚ‹Ëš\Ñ›Ý\ÐË

OOžÕ•\ØYÓ]™[Ê™Ù][™Ú[™J
KKË‹J_J__XÛÛœÝSØš™XÝ™œ™Y^™JØš™XÝ™Yš[™T›Ü\J××Ü›Ý××Î›[ÑÕ^\™SØY\Ž“QŸKÞ[X›ÛÔÝš[™ÕYËÝ˜[YNˆ“[Ù[HŸJJNÙ[˜Ý[ÛˆŠ
^ØÛÛœÝ^ØÕ‘UÌNŒÕ‘UÌŽŒKÕÌNŒ‹ÕÌÎŒËÕÍÎ‹Õ””•ÌWÍÔ‘ÐŽŽÕ””•ÌWÍÔ‘ÐNŽKÕTÕ×ÍŒLÕ”‘ÐMNŒMNÛ]O[[ÛÛ›Y\ÜØYÙO[ÏOžÚYŠË™]K˜XÝ[ÛOOHš[š]Š^ÚYŠË™]K\›
]ž^Ú[\ÜØÜš\ÊË™]K\›
_XØ]Ú

^ÜÜÝY\ÜØYÙJØXÝ[ÛŽˆ™\œ›Üˆ‹\œ›ÜŽ›J_Y_
OPTÒTÊÝØ\ÛPš[˜\žN›Ë™]KØ\ÛPš[˜\ž_JJKHOO[[	‰™K[ŠOžÐTÒTÏ[š[š]X[^™P˜\Ú\Ê
KÜÝY\ÜØYÙJØXÝ[ÛŽˆš[š]ŸJ_J_Y[ÙHYŠË™]K˜XÝ[ÛOOH˜[œØÛÙHŠ^ØÛÛœÝ[Ë™]K˜ÛÛ™šYË[Ë™]Kš[XYÙQ]K[™]ÈTÒTË˜\Ú\Ñš[J
KZJŠNÛ]Ï[Ë™]KšYÛ›Ü™TÝ\ÜY›Ü›X]ÏÛ[
Ë™]K˜ÛÛ™šYË
KHLN×ÏOO[[	‰ŠHLÏYš\Ð[OÜ‹˜ÕÌÎœ‹˜ÕÌJNÛ]ÏHLÙ‹œÝ\˜[œØÛÙ[™Ê
_
ÏHLJNØÛÛœÝV×NÙ›ÜŠ]LÞš[XYÙ\Ë›[™Ý	‰™ÎÞ
ÊÊ^ØÛÛœÝYš[XYÙ\ÖÞNÚYŠ›ØYÚ[™ÛR[XYÙOOO]›ÚY›ØYÚ[™ÛR[XYÙOOO^
^Û]OU›]™[Ë›[™ÝÛ›ØYZ\X\]™[ÏOOHLI‰ŠOLJNÙ›ÜŠ]LÔNÔŠÊÊ^ØÛÛœÝOU›]™[ÖÔ—KÏ\Ê‹‹Ë
NÚYŠ]Ê^ÙÏHLNØœ™XZßRK˜[œØÛÙY^[Ï]Ë‹œ\Ú
K˜[œØÛÙY^[Ë˜Y™™\Š___Y‹˜ÛÜÙJ
K‹™[]J
K	‰ŠÏKLJKÏÜÜÝY\ÜØYÙJØXÝ[ÛŽˆ˜[œØÛÙH‹ÝXØÙ\ÜÎ™ËY›Ë™]KšYš[R[™›Î™›Ü›X]—ßKŠNœÜÝY\ÜØYÙJØXÝ[ÛŽˆ˜[œØÛÙH‹ÝXØÙ\ÜÎ™ËY›Ë™]KšYJ__NÙ[˜Ý[Ûˆ
Ë
^Û][[Ü™]\›ˆËœÝ\ÜYÛÛ\™\ÜÚ[Û‘›Ü›X]É‰ŠËœÝ\ÜYÛÛ\™\ÜÚ[Û‘›Ü›X]Ë˜\ÝÏÚ\‹˜ÕTÕ×Í›ËœÝ\ÜYÛÛ\™\ÜÚ[Û‘›Ü›X]Ë˜˜ÍÏÚ\‹˜ÕÍÎ›ËœÝ\ÜYÛÛ\™\ÜÚ[Û‘›Ü›X]ËœÌÝÏÚ[š\Ð[OÜ‹˜ÕÌÎœ‹˜ÕÌN›ËœÝ\ÜYÛÛ\™\ÜÚ[Û‘›Ü›X]ËœœÏÚ[š\Ð[OÜ‹˜Õ””•ÌWÍÔ‘ÐNœ‹˜Õ””•ÌWÍÔ‘ÐŽ›ËœÝ\ÜYÛÛ\™\ÜÚ[Û‘›Ü›X]Ë™]ÌÚ\‹˜Õ‘UÌŽ›ËœÝ\ÜYÛÛ\™\ÜÚ[Û‘›Ü›X]Ë™]ÌOÚ\‹˜Õ‘UÌNš\‹˜Õ”‘ÐMJKY[˜Ý[ÛˆJÊ^ØÛÛœÝ[Ë™Ù]\Ð[J
K[Ë™Ù][R[XYÙ\Ê
KV×NÙ›ÜŠ]ÏL×Ï×ÊÊÊ^ØÛÛœÝ^Û]™[Î–×_KÏ[Ë™Ù][S]™[ÊÊNÙ›ÜŠ]LÝÎÝŠÊÊ^ØÛÛœÝ^ÝÚY›Ë™Ù][XYÙUÚY
ËŠKZYÚ›Ë™Ù][XYÙRZYÚ
ËŠ_NÜ›]™[Ëœ\Ú

_Y‹œ\Ú

_\™]\›žÚ\Ð[N›[XYÙ\Î™Ÿ_Y[˜Ý[ÛˆÊË‹
^ØÛÛœÝÏ[Ë™Ù][XYÙU˜[œØÛÙYÚ^™R[ž]\ÊŠNÛ][™]ÈZ[\œ˜^JÊNÚYŠ[Ë˜[œØÛÙR[XYÙJ‹K
J\™]\›ˆ[ÚYŠ
^ØÛÛœÝÏ[Ë™Ù][XYÙUÚY

JÌÉ‹M[Ë™Ù][XYÙRZYÚ

JÌÉ‹MÜ[ŠËŠ_\™]\›ˆY[˜Ý[ÛˆŠËŠ^ØÛÛœÝ[™]ÈZ[M\œ˜^J
KÏ[™]ÈZ[M\œ˜^J
™ŠKZÍÏY‹ÍÙ›ÜŠ]LÝÎÝŠÊÊY›ÜŠ]LÞÞ
ÊÊ^ØÛÛœÝ[
Î
ŠŠœ
Þ
NÙÌO[ÖÕ_ÖÕ
ÌWOÌWO[ÖÕ
Ì—_ÖÕ
Ì×OÌ—OJŠŠÌIŒÌJJÌJŠÌWIŒÌJJKÌß
ŠŠÌIŒŒMŠJÌJŠÌWIŒŒMŠJKÌÉŒŒMŸ
ŠŠÌIŒÍ
JÌJŠÌWIŒÍ
JKÌÉŒÍÌ×OJŠŠÌWIŒÌJJÌJŠÌIŒÌJJKÌß
ŠŠÌWIŒŒMŠJÌJŠÌIŒŒMŠJKÌÉŒŒMŸ
ŠŠÌWIŒÍ
JÌJŠÌIŒÍ
JKÌÉŒÍÙ›ÜŠ]OLÞOÞJÊÊ^ØÛÛœÝ[ÖÕ
Í
ÞWNÛ]OJŠ
ÞJJš
Þ
×ÖÒJÊ×OYÔ‰Œ×KÖÒJÊ×OYÔŒ‰Œ×KÖÒJÊ×OYÔ	Œ×KÖÒWOYÔ‰Œ×__\™]\›ˆß_X\Þ[˜È[˜Ý[ÛˆÑŠ‹K
^Ü™]\›ˆ]ØZ]™]È›ÛZ\ÙJ
KÊOOžØÛÛœÝ[ÏOžÛË™]K˜XÝ[ÛOOHš[š]Ê‹œ™[[Ý™Q]™[\Ý[™\Š›Y\ÜØYÙH‹ŠKJŠJN›Ë™]K˜XÝ[ÛOOH™\œ›Üˆ‰‰œÊË™]K™\œ›ÜŸ™\œ›Üˆ[š]X[^š[™ÈÛÜšÙ\ˆŠ_NÜ‹˜Y]™[\Ý[™\Š›Y\ÜØYÙH‹ŠK‹œÜÝY\ÜØYÙJØXÝ[ÛŽˆš[š]‹\›Ý‘Ù]˜Xž[Û”ØÜš\T“

N›ÚYØ\ÛPš[˜\žN™_KÙWJ_J_]˜\ˆ[ŽÊ[˜Ý[ÛŠŠ^Ü–Ü‹˜Õ‘UÌOLOH˜Õ‘UÌH‹–Ü‹˜Õ‘UÌLWOH˜Õ‘UÌˆ‹–Ü‹˜ÕÌOL—OH˜ÕÌH‹–Ü‹˜ÕÌÏL×OH˜ÕÌÈ‹–Ü‹˜ÕÍMOH˜ÕÍ‹–Ü‹˜ÕÍOMWOH˜ÕÍH‹–Ü‹˜ÕÍÏM—OH˜ÕÍÈ‹–Ü‹˜Õ””•ÌWÍÔ‘ÐNOH˜Õ””•ÌWÍÔ‘Ðˆ‹–Ü‹˜Õ””•ÌWÍÔ‘ÐONWOH˜Õ””•ÌWÍÔ‘ÐH‹–Ü‹˜ÕTÕ×ÍLLOH˜ÕTÕ×Í‹–Ü‹˜ÕU×Ô‘ÐLLWOH˜ÕU×Ô‘Ðˆ‹–Ü‹˜ÕU×Ô‘ÐWÒS•T”ÓUQÐSOLL—OH˜ÕU×Ô‘ÐWÒS•T”ÓUQÐSH‹–Ü‹˜Õ”‘ÐLÌLL×OH˜Õ”‘ÐLÌˆ‹–Ü‹˜Õ”‘ÐMOLMOH˜Õ”‘ÐMH‹–Ü‹˜Õ‘ÔMOLMWOH˜Õ‘ÔMH‹–Ü‹˜Õ”‘ÐMLM—OH˜Õ”‘ÐM‹–Ü‹˜Õ‘–WÔ‘ÐLM×OH˜Õ‘–WÔ‘Ðˆ‹–Ü‹˜Õ””•Ì—ÍÔ‘ÐLNOH˜Õ””•Ì—ÍÔ‘Ðˆ‹–Ü‹˜Õ””•Ì—ÍÔ‘ÐOLNWOH˜Õ””•Ì—ÍÔ‘ÐH‹–Ü‹˜Õ‘UÌ—ÑPP×ÔŒLOLŒOH˜Õ‘UÌ—ÑPP×ÔŒLH‹–Ü‹˜Õ‘UÌ—ÑPP×Ô‘ÌLOLŒWOH˜Õ‘UÌ—ÑPP×Ô‘ÌLHŸJJ[Ÿ
[^ßJJNØÛÛœÝO^Ò”Ó[Ù[UT“˜	Ý—ÑY˜][Ù•\›KØ˜\Ú\Õ˜[œØÛÙ\‹ÌKØ˜\Ú\×Ý˜[œØÛÙ\‹šœØØ\ÛS[Ù[UT“˜	Ý—ÑY˜][Ù•\›KØ˜\Ú\Õ˜[œØÛÙ\‹ÌKØ˜\Ú\×Ý˜[œØÛÙ\‹Ø\ÛXKÑJ‹JOOžÛ]ÜÝÚ]Ú
Š^ØØ\ÙH[‹˜Õ‘UÌNLÍŒNMŽØœ™XZÎØØ\ÙH[‹˜ÕÌNLÌÍÍÍŽØœ™XZÎØØ\ÙH[‹˜ÕÍLÌÍÍÎNØœ™XZÎØØ\ÙH[‹˜ÕTÕ×ÍLÍÎØœ™XZÎØØ\ÙH[‹˜Õ‘UÌŽLÍÍMŽØœ™XZÎØØ\ÙH[‹˜ÕÍÎLÍLŽØœ™XZßZYŠOO]›ÚY
]›ÝÈ•HÚÜÙ[ˆ˜\Ú\È˜[œØÛÙ\ˆ›Ü›X]\È›ÝÝ\œ™[HÝ\ÜYŽÜ™]\›ˆNÛ][O[[[Ï[[LØÛÛœÝ‘HLK‘X\Þ[˜Ê
OOŠ[_
[O[™]È›ÛZ\ÙJ
‹JOOžÙ[ÏÜŠ[ÊN“ØYš[P\Þ[˜Ê‘Ù]˜Xž[Û”ØÜš\T“
K•Ø\ÛS[Ù[UT“
JK[ŠOžÚYŠ\[ÙˆT“OH™[˜Ý[ÛˆŠ\™]\›ˆJ˜\Ú\È˜[œØÛÙ\ˆ™\]Z\™\È[ˆ[š\›Û›Y[Ú]HT“ÛÛœÝXÝÜˆŠNØÛÛœÝOUT“˜Ü™X]SØš™XÝT“
™]È›ØŠØ
	ÔŸJJ
XKÝ\Nˆ˜\XØ][Û‹Ú˜]˜\ØÜš\ŸJJNÙ[Ï[™]ÈÛÜšÙ\ŠJKÑŠ[ËK’”Ó[Ù[UT“
K[Š‹J_JK˜Ø]Ú
J_JJK]ØZ][JK[OX\Þ[˜Ê‹JOOžØÛÛœÝ\ˆ[œÝ[˜Ù[Ùˆ\œ˜^PY™™\Û™]ÈZ[\œ˜^JŠNœŽÜ™]\›ˆ]ØZ]™]È›ÛZ\ÙJ
KÊOOžÓ‘Š
K[Š

OOžØÛÛœÝSŠÊËÏZOžÚ™]K˜XÝ[ÛOOH˜[œØÛÙH‰‰š™]KšYOO[‰‰Š[Ëœ™[[Ý™Q]™[\Ý[™\Š›Y\ÜØYÙH‹ÊK™]KœÝXØÙ\ÜÏÚJ™]JNœÊ•˜[œØÛÙH\È›ÝÝ\ÜYÛˆ\È]šXÙHŠJ_NÙ[Ë˜Y]™[\Ý[™\Š›Y\ÜØYÙH‹ÊNØÛÛœÝ[™]ÈZ[\œ˜^J˜ž]S[™Ý
NÛœÙ]
™]ÈZ[\œ˜^J˜Y™™\‹˜ž]SÙ™œÙ]˜ž]S[™Ý
JK[ËœÜÝY\ÜØYÙJØXÝ[ÛŽˆ˜[œØÛÙH‹Y›‹[XYÙQ]N›ÛÛ™šYÎ™KYÛ›Ü™TÝ\ÜY›Ü›X]Î‘‘ŸKÛ˜Y™™\—J_KOžÜÊŠ_J_J_KOJ‹JOOžÛ]YK—ÙÛË•VT‘WÌ‘Ü‹š\ÐÝX™I‰ŠYK—ÙÛË•VT‘WÐÕP‘WÓPT
KK—Øš[™^\™Q\™XÝJ‹L
_K›OJ‹JOOžØÛÛœÝ\‹™Ù][™Ú[™J
NÙ›ÜŠ]OLÚOK™š[R[™›Ëš[XYÙ\Ë›[™ÝÚJÊÊ^ØÛÛœÝÏYK™š[R[™›Ëš[XYÙ\ÖÚWK›]™[ÖÌNÚYŠ‹—Ú[™\”ØØ[O\‹š[™\KK™›Ü›X]OOKL_K™›Ü›X]OOR[‹˜Õ”‘ÐMJZYŠ‹\OLL‹™›Ü›X]M—Ù™X]\™\Ë˜˜\Ú\Ó™YYÔÕ	‰ŠX]›ÙÌŠËÚY
ILHOOLX]›ÙÌŠËšZYÚ
ILHOOL
J^ØÛÛœÝ[™]ÈšJŠNÜ‹—Ú[™\”ØØ[O\‹š[™\K‹\OLL‹™›Ü›X]M‹ÚY\ËÚY
ÌÉ‹M‹šZYÚ\ËšZYÚ
ÌÉ‹MJ‹
K—Ý\ØY]UÕ^\™Q\™XÝJ‹™]ÈZ[M\œ˜^JË˜[œØÛÙY^[Ë˜Y™™\ŠKKL
K—Ü™\ØØ[U^\™J‹‹œØÙ[™\ÖÌK—ÙÙ][\›˜[›Ü›X]

K

OOžÝ—Ü™[X\ÙU^\™JŠKJ‹
_J_Y[ÙH‹—Ú[™\”ØØ[OH\‹š[™\K‹ÚY\ËÚY
ÌÉ‹M‹šZYÚ\ËšZYÚ
ÌÉ‹M‹œØ[\[™Ó[ÙOL‹J‹
K—Ý\ØY]UÕ^\™Q\™XÝJ‹™]ÈZ[M\œ˜^JË˜[œØÛÙY^[Ë˜Y™™\ŠKKL
NÙ[Ù^Ü‹ÚY\ËÚY‹šZYÚ\ËšZYÚ‹™Ù[™\˜]SZ\X\ÏYK™š[R[™›Ëš[XYÙ\ÖÚWK›]™[Ë›[™ÝŒNØÛÛœÝUQ‹‘Ù][\›˜[›Ü›X]œ›ÛP˜\Ú\Ñ›Ü›X]
K™›Ü›X]
NÜ‹™›Ü›X][‹J‹
NØÛÛœÝÏYK™š[R[™›Ëš[XYÙ\ÖÚWK›]™[ÎÙ›ÜŠ]LÛË›[™ÝÛ
ÊÊ^ØÛÛœÝ[ÖÛNÝ—Ý\ØYÛÛ\™\ÜÙY]UÕ^\™Q\™XÝJ‹‹ÚYšZYÚ˜[œØÛÙY^[ËK
_]—Ù™X]\™\Ë˜˜\Ú\Ó™YYÔÕ	‰ŠX]›ÙÌŠ‹ÚY
ILHOOLX]›ÙÌŠ‹šZYÚ
ILHOOL
I‰ŠÙK•Ø\›Š“ØYY˜˜\Ú\È^\™HÚY[™ZYÚ\™H›ÝHÝÙ\ˆÙˆÛËˆ^\™HÜ˜\[™ÈÚ[™HÙ]È^\™KÓSTÐQ‘TÔÓSÑH\ÈÝ\ˆ[Ù\È\™H›ÝÝ\ÜYÚ]›ÛˆÝÙ\ˆÙˆÛÈ[Y[œÚ[ÛœÈ[ˆÙX‘ÓKˆŠK‹—ØØXÚYÜ˜\OXZÓSTÐQ‘TÔÓSÑK‹—ØØXÚYÜ˜\XZÓSTÐQ‘TÔÓSÑJ___KQ^Ò”Ó[Ù[UT“‘K’”Ó[Ù[UT“Ø\ÛS[Ù[UT“‘K•Ø\ÛS[Ù[UT“Ù][\›˜[›Ü›X]œ›ÛP˜\Ú\Ñ›Ü›X]“Ñ‹˜[œØÛÙP\Þ[˜Îž[KØY^\™Qœ›ÛU˜[œØÛÙT™\Ý[˜›_NØÛ\ÜÈ‘žØÛÛœÝXÝÜŠ
^Ý\ËœÝ\ÜØ\ØØY\ÏHL_[ØYÝX™Q]JKKËŠ^ÚYŠ\œ˜^Kš\Ð\œ˜^JJJ\™]\›ŽØÛÛœÝÏ]™Ù][™Ú[™J
K™Ù]Ø\Ê
K^ÜÝ\ÜYÛÛ\™\ÜÚ[Û‘›Ü›X]ÎžÙ]ÌNˆH[Ë™]ÌKÌÝÎˆH[ËœÌÝËœÎˆH[ËœœË]ÌŽˆH[Ë™]Ì‹\ÝÎˆH[Ë˜\ÝË˜ÍÎˆH[Ë˜œß_NÞ[JK
K[ŠOžØÛÛœÝZ™š[R[™›Ëš[XYÙ\ÖÌK›]™[Ë›[™ÝŒI‰™Ù[™\˜]SZ\X\ÎØ›J
K™Ù][™Ú[™J
K—ÜÙ]ÝX™SX\^\™T\˜[\ÊŠKš\Ô™XYOHL›Û“ØYYØœÙ\˜X›K››ÝYžSØœÙ\™\œÊ
K›Û“ØYYØœÙ\˜X›K˜ÛX\Š
KÉ‰œÊ
_JK˜Ø]Ú
OžÝ•Ø\›Š‘˜Z[YÈ˜[œØÛÙH˜\Ú\Èš[K˜[œØÛÙ[™ÈX^H›Ý™HÝ\ÜYÛˆ\È]šXÙHŠKš\Ô™XYOHL‰‰›Š
_J_[ØY]JKJ^ØÛÛœÝÏ]™Ù][™Ú[™J
K™Ù]Ø\Ê
K^ÜÝ\ÜYÛÛ\™\ÜÚ[Û‘›Ü›X]ÎžÙ]ÌNˆH\Ë™]ÌKÌÝÎˆH\ËœÌÝËœÎˆH\ËœœË]ÌŽˆH\Ë™]Ì‹\ÝÎˆH\Ë˜\ÝË˜ÍÎˆH\Ë˜œß_NÞ[JKŠK[ŠÏOžØÛÛœÝ[Ë™š[R[™›Ëš[XYÙ\ÖÌK›]™[ÖÌK[Ë™š[R[™›Ëš[XYÙ\ÖÌK›]™[Ë›[™ÝŒI‰™Ù[™\˜]SZ\X\ÎÚJÚYšZYÚË™›Ü›X]OOKLK

OOžØ›JÊ_J_JK˜Ø]Ú
ÏOžÝ•Ø\›Š‘˜Z[YÈ˜[œØÛÙH˜\Ú\Èš[K˜[œØÛÙ[™ÈX^H›Ý™HÝ\ÜYÛˆ\È]šXÙHŠK•Ø\›Š˜Z[YÈ˜[œØÛÙH˜\Ú\Èš[Nˆ	ÛßX
KJLKLK

OOžßKL
_J__XÛÛœÝ‘SØš™XÝ™œ™Y^™JØš™XÝ™Yš[™T›Ü\J××Ü›Ý××Î›[Ð˜\Ú\Õ^\™SØY\Ž‘ŸKÞ[X›ÛÔÝš[™ÕYËÝ˜[YNˆ“[Ù[HŸJJKOHš[XYÙKÜ™È‹˜L‹XVÌLÍŒ‹LÍKML‹ŒMMLMNÙ[˜Ý[Ûˆ‘ŠŠ^ØÛÛœÝO[™]È]UšY]Ê‹˜Y™™\‹‹˜ž]SÙ™œÙ]‹˜ž]S[™Ý
NÛ]LÙ›ÜŠ]ÏLÛÏX‹›[™ÝÛÊÊÊZYŠK™Ù]Z[

ÊÊHOOTX–Û×J\™]\›ˆÙK‘\œ›ÜŠ“›ÝH˜Xž[Ûˆ[š\›Û›Y[X\ŠK[Û]OHˆ‹ÎÙ›ÜŠÜÏYK™Ù]Z[

ÊÊNÊZJÏTÝš[™Ë™œ›ÛPÚ\ÛÙJÊNÛ]R”ÓÓ‹œ\œÙJJNÜ™]\›ˆ]Z
ŠK‹˜š[˜\žQ]TÜÚ][Û]‹œÜXÝ[\‰‰Š‹œÜXÝ[\‹›ÙÙ[™\˜][Û”ØØ[O[‹œÜXÝ[\‹›ÙÙ[™\˜][Û”ØØ[_Ž
KŸY[˜Ý[ÛˆZ
Š^ÚYŠ‹™\œÚ[Û–˜Š]›ÝÈ™]È\œ›ÜŠ[œÝ\ÜY˜Xž[Ûˆ[š\›Û›Y[X\™\œÚ[Ûˆ‰Ü‹™\œÚ[ÛŸH‹ˆ]\ÝÝ\ÜY™\œÚ[Ûˆ\È‰Ö˜ŸH‹˜
NÜ™]\›ˆ‹™\œÚ[ÛOOLŸ
^Ë‹‹œ‹™\œÚ[ÛŽŒ‹[XYÙU\Nš_JKŸY[˜Ý[ÛˆÑŠ‹J^ÙO]Z
JNØÛÛœÝYKœÜXÝ[\ŽÛ]OSX]›ÙÌŠKÚY
NÚYŠOSX]œ›Ý[™
JJÌK›Z\X\Ë›[™ÝOOMŠšJ]›ÝÈ™]È\œ›ÜŠ[œÝ\ÜYÜXÝ[\ˆZ\X\È[X™\ˆ‰Ý›Z\X\Ë›[™ÝH˜
NØÛÛœÝÏ[™]È\œ˜^JJNÙ›ÜŠ]LÛNÛŠÊÊ^ÜÖÛ—O[™]È\œ˜^JŠNÙ›ÜŠ]ÏLÛÏŽÛÊÊÊ^ØÛÛœÝ]›Z\X\ÖÛŠŠÛ×NÜÖÛ—VÛ×O[™]ÈZ[\œ˜^J‹˜Y™™\‹‹˜ž]SÙ™œÙ]
ÙK˜š[˜\žQ]TÜÚ][ÛŠÛœÜÚ][Û‹›[™Ý
__\™]\›ˆßY[˜Ý[ÛˆÑŠ‹J^ÙO]Z
JNØÛÛœÝ[™]È\œ˜^JŠKOYKš\œ˜YX[˜ÙOËš\œ˜YX[˜ÙU^\™NÚYŠJ^ÚYŠK™˜XÙ\Ë›[™ÝOOMŠ]›ÝÈ™]È\œ›ÜŠ[˜ÛÜœ™XÝ\œ˜YX[˜ÙH^\™H˜XÙ\È[X™\ˆ‰ÚK™˜XÙ\Ë›[™ÝH˜
NÙ›ÜŠ]ÏLÜÏŽÜÊÊÊ^ØÛÛœÝZK™˜XÙ\ÖÜ×NÝÜ×O[™]ÈZ[\œ˜^J‹˜Y™™\‹‹˜ž]SÙ™œÙ]
ÙK˜š[˜\žQ]TÜÚ][ÛŠÛ‹œÜÚ][Û‹‹›[™Ý
__\™]\›ˆY[˜Ý[ÛˆŠ‹K
^Ý]Z

NØÛÛœÝO]œÜXÝ[\ŽÚYŠZJ\™]\›ˆ›ÛZ\ÙKœ™\ÛÛ™J×JNÜ‹—ÛÙÙ[™\˜][Û”ØØ[OZK›ÙÙ[™\˜][Û”ØØ[NØÛÛœÝÏV×KZÑŠK
NÜËœ\Ú
ÑŠ‹‹š[XYÙU\JJNØÛÛœÝÏ]š\œ˜YX[˜ÙOËš\œ˜YX[˜ÙU^\™NÚYŠÊ^ØÛÛœÝQÑŠK
NÛ][[Ýš\œ˜YX[˜ÙOËš\œ˜YX[˜ÙU^\™OË™ÛZ[˜[\™XÝ[Û‰‰ŠPË‘œ›ÛP\œ˜^Jš\œ˜YX[˜ÙKš\œ˜YX[˜ÙU^\™K™ÛZ[˜[\™XÝ[ÛŠJKËœ\Ú
Š‹ËœÚ^™Kš[XYÙU\K
J_\™]\›ˆ›ÛZ\ÙK˜[
Ê_X\Þ[˜È[˜Ý[Ûˆ	Š‹KKË‹Ë‹
^Ü™]\›ˆ]ØZ]™]È›ÛZ\ÙJ
Ë
OOžÚYŠ
^ØÛÛœÝÏYK˜Ü™X]U^\™J[LL[K[OžÜ
Š_KŠNÚOË›Û‘Y™™XÝÜ™X]YØœÙ\˜X›K˜YÛ˜ÙJOžÝ‹™^XÝ]UÚ[ÛÛ\[Y


OOžÚK™^\›˜[^\™TØ[\\š[™[™ÏHLK›Û\O^OžÞ—Øš[™^\™J^\™TØ[\\ˆ‹ÊKœÙ]›Ø]ŠœØØ[H‹KK—Ù™X]\™\Ë›™YYÒ[™\[™Ðš]X\	‰œˆ[œÝ[˜Ù[Ùˆ[XYÙPš]X\ËLNŒJ_KKœØÙ[™\Ë›[™Ý	‰ŠKœØÙ[™\ÖÌKœÜÝ›ØÙ\ÜÓX[˜YÙ\‹™\™XÝ™[™\ŠÚWK‹L‹ÊKKœ™\ÝÜ™QY˜][œ˜[YXY™™\Š
KË™\ÜÜÙJ
KT“œ™]›ÚÙSØš™XÝT“
ÊKÊ
J_J_J_Y[Ù^ÚYŠK—Ý\ØY[XYÙUÕ^\™J‹‹ÊK
^ØÛÛœÝÏZÛ×NÙÉ‰™K—Ý\ØY[XYÙUÕ^\™JË—Ý^\™K‹‹
_WÊ
__J_X\Þ[˜È[˜Ý[ÛˆÑŠ‹KZJ^ØÛÛœÝO\‹™Ù][™Ú[™J
NÜ‹™›Ü›X]MK‹\OL‹™Ù[™\˜]SZ\X\ÏHL‹—ØØXÚY[š\ÛÝ›ÜXÑš[\š[™Ó]™[[[K\]U^\™TØ[\[™Ó[ÙJËŠK]ØZ]RJ‹KL
K‹š\Ô™XYOHLX\Þ[˜È[˜Ý[ÛˆŠ‹KOZKÏ[[
^ØÛÛœÝ\‹™Ù][™Ú[™J
KÏ[™]ÈšJ‹JK[™]È\Š‹ÊNÜ‹—Ú\œ˜YX[˜ÙU^\™O[—ÙÛZ[˜[\™XÝ[Û\ËËš\ÐÝX™OHLË™›Ü›X]MKË\OLË™Ù[™\˜]SZ\X\ÏHLË—ØØXÚY[š\ÛÝ›ÜXÑš[\š[™Ó]™[[[Ë™Ù[™\˜]SZ\X\ÏHLËÚY]ËšZYÚ]‹\]U^\™TØ[\[™Ó[ÙJËÊK]ØZ]RJËÙWKLKJK‹™Ù[™\˜]SZ\X\Ñ›ÜÝX™[X\
ÊKËš\Ô™XYOHLX\Þ[˜È[˜Ý[ÛˆRJ‹KOZJ^ÚYŠZØÊ‹ÚY
J]›ÝÈ™]È\œ›ÜŠ•^\™HÚ^™H]\Ý™HHÝÙ\ˆÙˆÛÈŠNØÛÛœÝÏSÝÊ‹ÚY
JÌK\‹™Ù][™Ú[™J
NÛ]ÏHLKHLK[[[[[[ØÛÛœÝÏ[‹™Ù]Ø\Ê
N×Ë^\™SÑÛ‹—Ù™X]\™\ËœÝ\Ü™[™\[™ÛÜUÓÙ›Ü‘›Ø]^\™\Ï×Ë^\™R[‘›Ø]™[™\‰‰—Ë^\™R[‘›Ø][™X\‘š[\š[™ÏÊÏHL‹\OLŠN—Ë^\™Q›Ø]™[™\‰‰—Ë^\™Q›Ø][™X\‘š[\š[™É‰ŠÏHL‹\OLJN›ÏHLNŠÏHLK]
NÛ]LÚYŠÊ[‹š\ÕÙX‘ÔOÊLK]ØZ]J

OO”›ÛZ\ÙKœ™\ÛÛ™J
K[Š

OO”ŠK›ÚY[\Ü›Y]K\›
JN˜]ØZ]J

OO”›ÛZ\ÙKœ™\ÛÛ™J
K[Š

OO“PŠK›ÚY[\Ü›Y]K\›
K[™]ÈJœ™Ø™XÛÙH‹œ™Ø™XÛÙH‹[[K[Ë‹LK›ÚY‹\K›ÚY[LK›ÚY
K‹—Ú\Ô‘Ð‘HLK‹š[™\OHLK[‹˜Ü™X]T™[™\•\™Ù]ÝX™U^\™J‹ÚYÙÙ[™\˜]Q\Y™™\ŽˆLKÙ[™\˜]SZ\X\ÎˆLÙ[™\˜]TÝ[˜Ú[Y™™\ŽˆLKØ[\[™Ó[ÙNŒË\Nœ‹\K›Ü›X]_JNÙ[ÙHYŠ‹—Ú\Ô‘Ð‘HL‹š[™\OHL
^Ù^ßNØÛÛœÝ\‹—ÛÙÙ[™\˜][Û”ØØ[K\‹—ÛÙÙ[™\˜][Û“Ù™œÙ]Ù›ÜŠ]OLÞOÎÞJÊÊ^ØÛÛœÝOLK^KÌ‹ÏUOJËLJJž
Õ]ÊÊK]ÊJ’KSX]œ›Ý[™
X]›Z[ŠX]›X^

KJJKO[™]ÈšJ‹ŠNÕKš\ÐÝX™OHLKš[™\OHLK™Ù[™\˜]SZ\X\ÏHLK‹\]U^\™TØ[\[™Ó[ÙJ‹JNØÛÛœÝ[™]È\Š[
NÜÝÚ]Ú
‹—Ú\ÐÝX™OHL‹—Ý^\™OUKÑO^‹J^ØØ\ÙHœ‹—ÛÙ^\™SÝÏ^ŽØœ™XZÎØØ\ÙHNœ‹—ÛÙ^\™SZY^ŽØœ™XZÎØØ\ÙHŽœ‹—ÛÙ^\™RYÚ^ŽØœ™XZß__XÛÛœÝÏV×NÙ›ÜŠ]LÝK›[™ÝÝŠÊÊY›ÜŠ]LÞŽÞ
ÊÊ^ØÛÛœÝYVÝ—VÞKOQÐJ
K[™]È›ØŠÞWKÝ\Nš_JKOUT“˜Ü™X]SØš™XÝT“
ŠNÛ]ÎÚYŠ‹—Ù™X]\™\Ë™›Ü˜ÙPš]X\Ý™\’S[XYÙQ[[Y[
]Ï[‹˜Ü™X]R[XYÙPš]X\
‹Ü™[][\P[Nˆ››Û™H‹ÛÛÜ”ÜXÙPÛÛ™\œÚ[ÛŽˆ››Û™HŸJK[Š\Þ[˜ÈOO˜]ØZ]	ŠK‹ËK‹‹ŠJNÙ[Ù^ØÛÛœÝO[™]È[XYÙNÐKœÜ˜ÏRKÏ[™]È›ÛZ\ÙJ

OOžÐK›Û›ØYJ
OOžÉŠK‹ËK‹‹ŠK[Š

OO”

JK˜Ø]Ú
OOžÑ
J_J_KK›Û™\œ›ÜUOOžÑ
J__J_YËœ\Ú
Ê_ZYŠ]ØZ]›ÛZ\ÙK˜[
ÊKK›[™ÝÊ^Û]ŽØÛÛœÝSX]œÝÊ‹ËLKYK›[™Ý
K^
ž
ÜÝÚ]Ú
‹\J^ØØ\ÙHžÝ[™]ÈZ[\œ˜^J
NØœ™XZßXØ\ÙHŽžÝ[™]ÈZ[M\œ˜^J
NØœ™XZßXØ\ÙHNžÝ[™]È›Ø]Ì\œ˜^J
NØœ™XZß_Y›ÜŠ]OYK›[™ÝÞOÎÞJÊÊY›ÜŠ]LÔŽÔŠÊÊ[‹—Ý\ØY\œ˜^PY™™\•šY]ÕÕ^\™JË^\™_‹‹‹J_ZYŠŠ^ØÛÛœÝ\‹—Ú\œ˜YX[˜ÙU^\™NÜ‹—Ú\œ˜YX[˜ÙU^\™O[[‹—Ü™[X\ÙU^\™JŠK‹—ÜÝØ\[™YJŠK‹—Ú\œ˜YX[˜ÙU^\™O]ŸZ	‰š™\ÜÜÙJ
K	‰Š‹—ÛÙ^\™RYÚ	‰œ‹—ÛÙ^\™RYÚ—Ý^\™I‰Š‹—ÛÙ^\™RYÚ—Ý^\™Kš\Ô™XYOHL
K‹—ÛÙ^\™SZY	‰œ‹—ÛÙ^\™SZY—Ý^\™I‰Š‹—ÛÙ^\™SZY—Ý^\™Kš\Ô™XYOHL
K‹—ÛÙ^\™SÝÉ‰œ‹—ÛÙ^\™SÝË—Ý^\™I‰Š‹—ÛÙ^\™SÝË—Ý^\™Kš\Ô™XYOHL
J_Y[˜Ý[ÛˆQŠ‹J^ÙO]Z
JNØÛÛœÝYKš\œ˜YX[˜ÙNÚYŠ]
\™]\›ŽØÛÛœÝO[™]È›ÎÐË‘œ›ÛP\œ˜^UÔ™YŠžKž
KË‘œ›ÛP\œ˜^UÔ™YŠžKKžJKË‘œ›ÛP\œ˜^UÔ™YŠž‹KžŠKË‘œ›ÛP\œ˜^UÔ™YŠžKž
KË‘œ›ÛP\œ˜^UÔ™YŠž^KKž^JKË‘œ›ÛP\œ˜^UÔ™YŠžž‹KžžŠKË‘œ›ÛP\œ˜^UÔ™YŠž^‹Kž^ŠKË‘œ›ÛP\œ˜^UÔ™YŠžžKžž
KË‘œ›ÛP\œ˜^UÔ™YŠžKKžJK‹—ÜÜ\šXØ[Û[›ÛZX[Z_[]˜HLNÙ[˜Ý[ÛˆQŠ
^Ò˜Ÿ
˜HL\‹œ›ÝÝ\K—ÜÜ\šXØ[Û[›ÛZX[\™Ù]Ú^™OL\‹œ›ÝÝ\K™›Ü˜ÙTÜ\šXØ[Û[›ÛZX[Ô™XÛÛ\]OY[˜Ý[ÛŠ
^Ý\Ë—Ý^\™I‰Š\Ë—Ý^\™K—ÜÜ\šXØ[Û[›ÛZX[[[\Ë—Ý^\™K—ÜÜ\šXØ[Û[›ÛZX[›ÛZ\ÙO[[\Ë—Ý^\™K—ÜÜ\šXØ[Û[›ÛZX[ÛÛ\]YHLJ_KØš™XÝ™Yš[™T›Ü\J\‹œ›ÝÝ\KœÜ\šXØ[Û[›ÛZX[‹ÙÙ]™[˜Ý[ÛŠ
^ÚYŠ\Ë—Ý^\™J^ÚYŠ\Ë—Ý^\™K—ÜÜ\šXØ[Û[›ÛZX[\Ë—Ý^\™K—ÜÜ\šXØ[Û[›ÛZX[ÛÛ\]Y
\™]\›ˆ\Ë—Ý^\™K—ÜÜ\šXØ[Û[›ÛZX[ÚYŠ\Ë—Ý^\™Kš\Ô™XYJ\™]\›ˆ\Ë—Ý^\™K—ÜÜ\šXØ[Û[›ÛZX[›ÛZ\Ù_
\Ë—Ý^\™K—ÜÜ\šXØ[Û[›ÛZX[›ÛZ\ÙOYšÛÛ™\ÝX™SX\^\™UÔÜ\šXØ[Û[›ÛZX[
\ÊK\Ë—Ý^\™K—ÜÜ\šXØ[Û[›ÛZX[›ÛZ\ÙOOO[[Ý\Ë—Ý^\™K—ÜÜ\šXØ[Û[›ÛZX[ÛÛ\]YHL\Ë—Ý^\™K—ÜÜ\šXØ[Û[›ÛZX[›ÛZ\ÙK[ŠOžÝ\Ë—Ý^\™K—ÜÜ\šXØ[Û[›ÛZX[\‹\Ë—Ý^\™K—ÜÜ\šXØ[Û[›ÛZX[ÛÛ\]YHLJJK[\™]\›ˆ[KÙ]™[˜Ý[ÛŠŠ^Ý\Ë—Ý^\™I‰Š\Ë—Ý^\™K—ÜÜ\šXØ[Û[›ÛZX[\Š_K[[Y\˜X›NˆLÛÛ™šYÝ\˜X›NˆLJJ_XÛ\ÜÈ‘žØÛÛœÝXÝÜŠ
^Ý\ËœÝ\ÜØ\ØØY\ÏHL_[ØYÝX™Q]JKKËŠ^ÚYŠ\œ˜^Kš\Ð\œ˜^JJJ\™]\›ŽØÛÛœÝÏ^‘ŠJNÚYŠÊ^ÝÚY[ËÚYšZYÚ[ËÚYÝž^ÜQŠ
KQŠÊKŠKÊK[Š

OOžÝš\Ô™XYOHL›Û“ØYYØœÙ\˜X›K››ÝYžSØœÙ\™\œÊ
K›Û“ØYYØœÙ\˜X›K˜ÛX\Š
KÉ‰œÊ
_KOžÛËŠØ[ˆ›Ý\ØY[š\›Û›Y[]™[È‹
_J_XØ]Ú

^ÛËŠØ[ˆ›Ý\ØY[š\›Û›Y[š[H‹
__Y[ÙH‰‰›ŠØ[ˆ›Ý\œÙHH[š\›Û›Y[š[H‹[
_[ØY]J
^Ý›ÝÈ‹™[ˆ›ÝÝ\ÜY[ˆ™ˆŸ_XÛÛœÝÑSØš™XÝ™œ™Y^™JØš™XÝ™Yš[™T›Ü\J××Ü›Ý××Î›[ÑS••^\™SØY\Žš‘ŸKÞ[X›ÛÔÝš[™ÕYËÝ˜[YNˆ“[Ù[HŸJJNÙ[˜Ý[Ûˆ‘Š‹J^Ü™]\›ˆOŒLŒÏÜŠ“X]œÝÊ‹LŒÊJ“X]œÝÊ‹KLLŒÊN™OLLÍÜŠ“X]œÝÊ‹LLÍ
J“X]œÝÊ‹JÌLÍ
NœŠ“X]œÝÊ‹J_Y[˜Ý[ÛˆJ‹KKËŠ^ÜÏŒÊÏV‘ŠKËLLÍŠK–ÛŠÌOYJœË–ÛŠÌWO]
œË–ÛŠÌ—OZJœÊNŠ–ÛŠÌOL–ÛŠÌWOL–ÛŠÌ—OL
_Y[˜Ý[ÛˆÛJ‹J^Û]Hˆ‹NÙ›ÜŠ]ÏYNÜÏ‹›[™ÝYI‰ŠOTÝš[™Ë™œ›ÛPÚ\ÛÙJ–Ü×JKHOX˜
NÜÊÊÊ]
ÏZNÜ™]\›ˆY[˜Ý[ÛˆQŠŠ^Û]O[ÛJ‹
NÚYŠVÌHOHˆÈŸVÌWHOHÈŠ]›ÝÈ˜Yˆ›Ü›X]ˆŽÛ]HLKOHLKÏLÙÈÊÏYK›[™Ý
ÌKO[ÛJ‹ÊKOOH‘“Ô“PULÌ‹Xš]Ü›WÜ™Ø™HÚOHL™K›[™ÝOL	‰ŠHL
NÝÚ[J]
NÚYŠZJ]›ÝÈ’ˆ˜YXY\ˆ›Ü›X][œÝ\ÜY“Ô“PUŽÜÊÏYK›[™Ý
ÌKO[ÛJ‹ÊNØÛÛœÝÏK×‹VH
ŠŠH
Ö
ŠŠIÙË™^XÊJNÚYŠ[ßË›[™ÝÊ]›ÝÈ’ˆ˜YXY\ˆ›Ü›X]›ÈÚ^™HŽØÛÛœÝ\\œÙR[
ÖÌ—JK\\œÙR[
ÖÌWJNÚYŠŒÌÍÊ]›ÝÈ’ˆ˜YXY\ˆ›Ü›X][œÝ\ÜYÚ^™HŽÜ™]\›ˆÊÏYK›[™Ý
ÌKÚZYÚšÚY›]TÜÚ][ÛŽœß_Y[˜Ý[Ûˆ	Š‹J^Ü™]\›ˆ‘Š‹J_Y[˜Ý[Ûˆ‘Š‹J^Û]YKšZYÚØÛÛœÝOYKÚYÛ]Ë‹ËYK™]TÜÚ][Û‹ËØÛÛœÝÏ[™]È\œ˜^PY™™\ŠJ
K[™]ÈZ[\œ˜^JÊK[™]È\œ˜^PY™™\ŠKÚY
™KšZYÚ

ŒÊK[™]È›Ø]Ì\œ˜^J
NÙ›ÜŠÝŒÊ^ÚYŠÏ\–ÙŠÊ×K\–ÙŠÊ×KÏ\–ÙŠÊ×K\–ÙŠÊ×KÈOLŸˆOLŸÉŒLŽKÚYKÚYŒÌÍÊ\™]\›ˆLÊ‹JNÚYŠ
Ï
HOZJ]›ÝÈ’ˆ˜YXY\ˆ›Ü›X]Ü›Û™ÈØØ[ˆ[™HÚYŽÙ›ÜŠLLÜÜ
ÊÊY›ÜŠÏJ
ÌJJšNÙÎÊZYŠÏ\–ÙŠÊ×K\–ÙŠÊ×KÏŒLŽ
^ÚYŠ\ËLLŽOL—ËY
]›ÝÈ’ˆ˜Y›Ü›X]˜YØØ[›[™H]H
[ŠHŽÙ›ÜŠÚKHŒÊ]–Ù
Ê×O[ŸY[Ù^ÚYŠ\ËOL—ËY
]›ÝÈ’ˆ˜Y›Ü›X]˜YØØ[›[™H]H
›Û‹\[ŠHŽÚYŠ–Ù
Ê×O[‹KZŒ
Y›ÜŠ]OLÞOÞJÊÊ]–Ù
Ê×O\–ÙŠÊ×_Y›ÜŠLÜNÜ
ÊÊ\Ï]–ÜK]–Ü
ÚWKÏ]–Ü
ÌŠšWK]–Ü
ÌÊšWKJË‹Ë
KšZYÚ]
JšJŒÊÜ
ŒÊNÝK_\™]\›ˆY[˜Ý[ÛˆLÊ‹J^Û]YKšZYÚØÛÛœÝOYKÚYÛ]Ë‹ËYK™]TÜÚ][ÛŽØÛÛœÝ[™]È\œ˜^PY™™\ŠKÚY
™KšZYÚ

ŒÊKÏ[™]È›Ø]Ì\œ˜^J
NÙ›ÜŠÝŒÊ^Ù›ÜŠLÚKÚYÚ
ÊÊ\Ï\–ÙŠÊ×K\–ÙŠÊ×KÏ\–ÙŠÊ×K\–ÙŠÊ×KJËË‹Ë
KšZYÚ]
JšJŒÊÚ
ŒÊNÝK_\™]\›ˆßXÛ\ÜÈÞØÛÛœÝXÝÜŠ
^Ý\ËœÝ\ÜØ\ØØY\ÏHL_[ØYÝX™Q]J
^Ý›ÝÈ‹šˆ›ÝÝ\ÜY[ˆÝX™KˆŸ[ØY]JKJ^ØÛÛœÝÏ[™]ÈZ[\œ˜^JK˜Y™™\‹K˜ž]SÙ™œÙ]K˜ž]S[™Ý
KTQŠÊKÏIŠËŠK[‹ÚY
›‹šZYÚ[™]È›Ø]Ì\œ˜^J

NÙ›ÜŠ]LÙÙŠÏLJZÙŠO[ÖÙŠŒ×KÙŠ
ÌWO[ÖÙŠŒÊÌWKÙŠ
Ì—O[ÖÙŠŒÊÌ—KÙŠ
Ì×OLNÚJ‹ÚY‹šZYÚ™Ù[™\˜]SZ\X\ËLK

OOžØÛÛœÝ]™Ù][™Ú[™J
NÝ\OLK™›Ü›X]MK—ÙØ[[XTÜXÙOHLK‹—Ý\ØY]UÕ^\™Q\™XÝJ
_J__XÛÛœÝLÏSØš™XÝ™œ™Y^™JØš™XÝ™Yš[™T›Ü\J××Ü›Ý××Î›[Ò•^\™SØY\ŽßKÞ[X›ÛÔÝš[™ÕYËÝ˜[YNˆ“[Ù[HŸJJNØÛ\ÜÈÜÞØÛÛœÝXÝÜŠK
^ÚYŠ\Ë™]OYK\Ëš\Ò[˜[YHLKRÜË’\Õ˜[Y
JJ^Ý\Ëš\Ò[˜[YHLÙK‘\œ›ÜŠ^\™HZ\ÜÚ[™ÈÕY[YšY\ˆŠNÜ™]\›ŸXÛÛœÝOUZ[Ì\œ˜^K–UT×ÔT—ÑSSQS•Ï[™]È]UšY]Ê\Ë™]K˜Y™™\‹\Ë™]K˜ž]SÙ™œÙ]
ÌL‹LÊšJKÏ\Ë™Ù]Z[ÌŠL
OOOMÌÌNNNÚYŠ\Ë™Û\O\Ë™Ù]Z[ÌŠJšKÊK\Ë™Û\TÚ^™O\Ë™Ù]Z[ÌŠŠšKÊK\Ë™Û›Ü›X]\Ë™Ù]Z[ÌŠÊšKÊK\Ë™Û[\›˜[›Ü›X]\Ë™Ù]Z[ÌŠ
šKÊK\Ë™Û˜\ÙR[\›˜[›Ü›X]\Ë™Ù]Z[ÌŠJšKÊK\Ëœ^[ÚY\Ë™Ù]Z[ÌŠŠšKÊK\Ëœ^[ZYÚ\Ë™Ù]Z[ÌŠÊšKÊK\Ëœ^[\\Ë™Ù]Z[ÌŠ
šKÊK\Ë›[X™\“Ù\œ˜^Q[[Y[Ï\Ë™Ù]Z[ÌŠJšKÊK\Ë›[X™\“Ù‘˜XÙ\Ï\Ë™Ù]Z[ÌŠL
šKÊK\Ë›[X™\“Ù“Z\X\]™[Ï\Ë™Ù]Z[ÌŠLJšKÊK\Ë˜ž]\ÓÙ’Ù^U˜[YQ]O\Ë™Ù]Z[ÌŠLŠšKÊK\Ë™Û\HOOL
^ÙÙK‘\œ›ÜŠ›Û›HÛÛ\™\ÜÙY›Ü›X]ÈÝ\œ™[HÝ\ÜYŠK\Ëš\Ò[˜[YHLÜ™]\›ŸY[ÙH\Ë›[X™\“Ù“Z\X\]™[ÏSX]›X^
K\Ë›[X™\“Ù“Z\X\]™[ÊNÚYŠ\Ëœ^[ZYÚOOL\Ëœ^[\OOL
^ÙÙK‘\œ›ÜŠ›Û›H‘^\™\ÈÝ\œ™[HÝ\ÜYŠK\Ëš\Ò[˜[YHLÜ™]\›ŸZYŠ\Ë›[X™\“Ù\œ˜^Q[[Y[ÈOOL
^ÙÙK‘\œ›ÜŠ^\™H\œ˜^\È›ÝÝ\œ™[HÝ\ÜYŠK\Ëš\Ò[˜[YHLÜ™]\›ŸZYŠ\Ë›[X™\“Ù‘˜XÙ\ÈOO]
^ÙÙK‘\œ›ÜŠ›[X™\ˆÙˆ˜XÙ\È^XÝYŠÝ
È‹]›Ý[™ŠÝ\Ë›[X™\“Ù‘˜XÙ\ÊK\Ëš\Ò[˜[YHLÜ™]\›Ÿ]\Ë›ØY\ORÜËÓÓT‘TÔÑQÌ‘]\ØY]™[ÊK
^ÜÝÚ]Ú
\Ë›ØY\J^ØØ\ÙHÜËÓÓT‘TÔÑQÌ‘\Ë—Ý\ØY‘ÛÛ\™\ÜÙY]™[ÊK
NØœ™XZß_WÝ\ØY‘ÛÛ\™\ÜÙY]™[ÊK
^Û]ORÜË’PQT—ÓSŠÝ\Ë˜ž]\ÓÙ’Ù^U˜[YQ]KÏ]\Ëœ^[ÚY]\Ëœ^[ZYÚØÛÛœÝÏ]Ý\Ë›[X™\“Ù“Z\X\]™[ÎŒNÙ›ÜŠ]LÛÎÛ
ÊÊ^ØÛÛœÝ[™]È[Ì\œ˜^J\Ë™]K˜Y™™\‹\Ë™]K˜ž]SÙ™œÙ]
ÚKJVÌNÚJÏMÙ›ÜŠ]LÙ\Ë›[X™\“Ù‘˜XÙ\ÎÙŠÊÊ^ØÛÛœÝ[™]ÈZ[\œ˜^J\Ë™]K˜Y™™\‹\Ë™]K˜ž]SÙ™œÙ]
ÚK
NÙK™Ù][™Ú[™J
K—Ý\ØYÛÛ\™\ÜÙY]UÕ^\™Q\™XÝJKK™›Ü›X]Ë‹‹
KJÏZJÏLËJ
ÌÊIM\ÏSX]›X^
KÊ‹JKSX]›X^
KŠ‹J__\Ý]XÈ\Õ˜[Y
J^ÚYŠK˜ž]S[™ÝLLŠ^ØÛÛœÝ[™]ÈZ[\œ˜^JK˜Y™™\‹K˜ž]SÙ™œÙ]LŠNÚYŠÌOOOLMÌI‰ÌWOOOMÍI‰Ì—OOON	‰Ì×OOON	‰ÍOOOLÌ‰‰ÍWOOOMI‰Í—OOOMI‰Í×OOOLNÉ‰ÎOOOLLÉ‰ÎWOOOLL	‰ÌLOOOL‰‰ÌLWOOOLL
\™]\›ˆL\™]\›ˆL__RÜË’PQT—ÓSMÒÜËÓÓT‘TÔÑQÌ‘LÒÜËÓÓT‘TÔÑQÌÑLNÒÜË•VÌ‘LŽÒÜË•VÌÑLÎØÛ\ÜÈÌÞØÛÛœÝXÝÜŠJ^Ý\Ë—Ü[™[™ÐXÝ[ÛœÏ[™]È\œ˜^K\Ë—ÝÛÜšÙ\’[™›ÜÏYK›X\
OŠÝÛÜšÙ\”›ÛZ\ÙN”›ÛZ\ÙKœ™\ÛÛ™J
KYNˆLJJ_Y\ÜÜÙJ
^Ù›ÜŠÛÛœÝHÙˆ\Ë—ÝÛÜšÙ\’[™›ÜÊYKÛÜšÙ\”›ÛZ\ÙK[ŠOžÝ\›Z[˜]J
_JNÝ\Ë—ÝÛÜšÙ\’[™›ÜË›[™ÝL\Ë—Ü[™[™ÐXÝ[ÛœË›[™ÝL\\Ú
J^Ý\Ë—Ù^XÝ]SÛ’YUÛÜšÙ\ŠJ_\Ë—Ü[™[™ÐXÝ[ÛœËœ\Ú
J_WÙ^XÝ]SÛ’YUÛÜšÙ\ŠJ^Ù›ÜŠÛÛœÝÙˆ\Ë—ÝÛÜšÙ\’[™›ÜÊZYŠšYJ\™]\›ˆ\Ë—Ù^XÝ]JJKLÜ™]\›ˆL_WÙ^XÝ]JK
^ÙKšYOHLKKÛÜšÙ\”›ÛZ\ÙK[ŠOOžÝ
K

OOžØÛÛœÝÏ]\Ë—Ü[™[™ÐXÝ[ÛœËœÚY

NÜÏÝ\Ë—Ù^XÝ]JKÊN™KšYOHLJ_J__XÛ\ÜÈÝH^[™ÈÌÞØÛÛœÝXÝÜŠKORÝK‘Y˜][Ü[ÛœÊ^ÜÝ\\Š×JK\Ë—ÛX^ÛÜšÙ\œÏYK\Ë—ØÜ™X]UÛÜšÙ\\Þ[˜Ï]\Ë—ÛÜ[ÛœÏZ_\\Ú
J^ÚYŠ]\Ë—Ù^XÝ]SÛ’YUÛÜšÙ\ŠJJZYŠ\Ë—ÝÛÜšÙ\’[™›ÜË›[™Ý\Ë—ÛX^ÛÜšÙ\œÊ^ØÛÛœÝ^ÝÛÜšÙ\”›ÛZ\ÙN\Ë—ØÜ™X]UÛÜšÙ\\Þ[˜Ê
KYNˆL_NÝ\Ë—ÝÛÜšÙ\’[™›ÜËœ\Ú

K\Ë—Ù^XÝ]JJ_Y[ÙH\Ë—Ü[™[™ÐXÝ[ÛœËœ\Ú
J_WÙ^XÝ]JK
^ÙK[Y[Ý]Y	‰ŠÛX\•[Y[Ý]
K[Y[Ý]Y
K[]HK[Y[Ý]Y
KÝ\\‹—Ù^XÝ]JK
KÊOOžÝ
K

OOžÜÊ
KKšYI‰ŠK[Y[Ý]Y\Ù][Y[Ý]


OOžÙKÛÜšÙ\”›ÛZ\ÙK[ŠÏOžÛË\›Z[˜]J
_JNØÛÛœÝ]\Ë—ÝÛÜšÙ\’[™›ÜËš[™^ÙŠJNÛˆOOKLI‰\Ë—ÝÛÜšÙ\’[™›ÜËœÜXÙJ‹J_K\Ë—ÛÜ[ÛœËšYU[YQ[\ÙY™Y›Ü™T™[X\ÙJJ_J_J__RÝK‘Y˜][Ü[ÛœÏ^ÚYU[YQ[\ÙY™Y›Ü™T™[X\ÙNŒYLßNÝ˜\ˆPNÊ[˜Ý[ÛŠŠ^Ü–Ü‹‘UÌTÏLOH‘UÌTÈ‹–Ü‹•PTÕÍLWOH•PTÕÍ‹–Ü‹”‘ÐLÌL—OH”‘ÐLÌˆŸJJP_
PO^ßJJNÝ˜\ˆXÎÊ[˜Ý[ÛŠŠ^Ü–Ü‹TÕ×ÍÔ‘ÐOLOHTÕ×ÍÔ‘ÐH‹–Ü‹TÕ×ÍÔ‘ÐOLOHTÕ×ÍÔ‘ÐH‹–Ü‹Í×Ô‘ÐOLWOHÍ×Ô‘ÐH‹–Ü‹Ì×Ô‘ÐOL—OHÌ×Ô‘ÐH‹–Ü‹ÌWÔ‘ÐL×OHÌWÔ‘Ðˆ‹–Ü‹””•ÌWÍÔ‘ÐOMOH””•ÌWÍÔ‘ÐH‹–Ü‹””•ÌWÍÔ‘ÐMWOH””•ÌWÍÔ‘Ðˆ‹–Ü‹‘UÌ—Ô‘ÐOM—OH‘UÌ—Ô‘ÐH‹–Ü‹‘UÌWÔ‘ÐM×OH‘UÌWÔ‘Ðˆ‹–Ü‹”‘ÐLÌNOH”‘ÐLÌˆ‹–Ü‹”ŽNWOH”Ž‹–Ü‹”‘ÎLLOH”‘ÎŸJJXß
XÏ^ßJJNÝ˜\ˆNÊ[˜Ý[ÛŠŠ^Ü–Ü‹ÓÓT‘TÔÑQÔ‘ÐWÐ”×ÕS“Ô“WÑVLÍL—OHÓÓT‘TÔÑQÔ‘ÐWÐ”×ÕS“Ô“WÑV‹–Ü‹ÓÓT‘TÔÑQÔ‘ÐWÐTÕ×ÍÒÒLÍÎOHÓÓT‘TÔÑQÔ‘ÐWÐTÕ×ÍÒÒˆ‹–Ü‹ÓÓT‘TÔÑQÔ‘Ð—ÔÌÕ×ÑWÑVLÌÍÍÍ—OHÓÓT‘TÔÑQÔ‘Ð—ÔÌÕ×ÑWÑV‹–Ü‹ÓÓT‘TÔÑQÔ‘ÐWÔÌÕ×ÑWÑVLÌÍÍÎWOHÓÓT‘TÔÑQÔ‘ÐWÔÌÕ×ÑWÑV‹–Ü‹ÓÓT‘TÔÑQÔ‘ÐWÔ”•×Í”ŒWÒSQÏLÍN—OHÓÓT‘TÔÑQÔ‘ÐWÔ”•×Í”ŒWÒSQÈ‹–Ü‹ÓÓT‘TÔÑQÔ‘Ð—Ô”•×Í”ŒWÒSQÏLÍNOHÓÓT‘TÔÑQÔ‘Ð—Ô”•×Í”ŒWÒSQÈ‹–Ü‹ÓÓT‘TÔÑQÔ‘ÐNÑUÌ—ÑPPÏLÍÍM—OHÓÓT‘TÔÑQÔ‘ÐNÑUÌ—ÑPPÈ‹–Ü‹ÓÓT‘TÔÑQÔ‘ÐŽÑUÌLÍÍL—OHÓÓT‘TÔÑQÔ‘ÐŽÑUÌˆ‹–Ü‹ÓÓT‘TÔÑQÔ‘Ð—ÑUÌWÕÑP‘ÓLÍŒNM—OHÓÓT‘TÔÑQÔ‘Ð—ÑUÌWÕÑP‘Ó‹–Ü‹”‘ÐN›Ü›X]LÌŽM—OH”‘ÐN›Ü›X]‹–Ü‹”Ž›Ü›X]LÌÌÌŒWOH”Ž›Ü›X]‹–Ü‹”‘Î›Ü›X]LÌÌÌŒ×OH”‘Î›Ü›X]ŸJJ_
O^ßJJNÙ[˜Ý[ÛˆJ‹J^ØÛÛœÝYOËšœÑXÛÙ\“[Ù[_Õ‘PÓÑTŽÜ‰‰Š‹Ø\ÛP˜\ÙU\›	‰Š•˜[œØÛÙ\‹•Ø\ÛP˜\ÙU\›\‹Ø\ÛP˜\ÙU\›
K‹Ø\ÛUPTÕÕÐTÕÉ‰Š“]U˜[œØÛÙ\—ÕPTÕ×ÐTÕË•Ø\ÛS[Ù[UT“\‹Ø\ÛUPTÕÕÐTÕÊK‹Ø\ÛUPTÕÕÐÍÉ‰Š“]U˜[œØÛÙ\—ÕPTÕ×ÐÍË•Ø\ÛS[Ù[UT“\‹Ø\ÛUPTÕÕÐÍÊK‹Ø\ÛUPTÕÕÔ‘ÐWÕS“Ô“I‰Š“]U˜[œØÛÙ\—ÕPTÕ×Ô‘ÐWÕS“Ô“K•Ø\ÛS[Ù[UT“\‹Ø\ÛUPTÕÕÔ‘ÐWÕS“Ô“JK‹Ø\ÛUPTÕÕÔ‘ÐWÔÔ‘Ð‰‰Š“]U˜[œØÛÙ\—ÕPTÕ×Ô‘ÐWÔÔ‘Ð‹•Ø\ÛS[Ù[UT“\‹Ø\ÛUPTÕÕÔ‘ÐWÔÔ‘ÐŠK‹Ø\ÛUPTÕÕÔŽÕS“Ô“I‰Š“]U˜[œØÛÙ\—ÕPTÕ×ÔŽÕS“Ô“K•Ø\ÛS[Ù[UT“\‹Ø\ÛUPTÕÕÔŽÕS“Ô“JK‹Ø\ÛUPTÕÕÔ‘ÎÕS“Ô“I‰Š“]U˜[œØÛÙ\—ÕPTÕ×Ô‘ÎÕS“Ô“K•Ø\ÛS[Ù[UT“\‹Ø\ÛUPTÕÕÔ‘ÎÕS“Ô“JK‹šœÓTÐÕ˜[œØÛÙ\‰‰Š“TÐÕ˜[œØÛÙ\‹’”Ó[Ù[UT“\‹šœÓTÐÕ˜[œØÛÙ\ŠK‹Ø\ÛSTÐÕ˜[œØÛÙ\‰‰Š“TÐÕ˜[œØÛÙ\‹•Ø\ÛS[Ù[UT“\‹Ø\ÛSTÐÕ˜[œØÛÙ\ŠK‹Ø\ÛV”ÕXÛÙ\‰‰Š–”ÕXÛÙ\‹•Ø\ÛS[Ù[UT“\‹Ø\ÛV”ÕXÛÙ\ŠJKI‰ŠKØ\ÛUPTÕÕÐTÕÉ‰Š“]U˜[œØÛÙ\—ÕPTÕ×ÐTÕË•Ø\ÛPš[˜\žOYKØ\ÛUPTÕÕÐTÕÊKKØ\ÛUPTÕÕÐÍÉ‰Š“]U˜[œØÛÙ\—ÕPTÕ×ÐÍË•Ø\ÛPš[˜\žOYKØ\ÛUPTÕÕÐÍÊKKØ\ÛUPTÕÕÔ‘ÐWÕS“Ô“I‰Š“]U˜[œØÛÙ\—ÕPTÕ×Ô‘ÐWÕS“Ô“K•Ø\ÛPš[˜\žOYKØ\ÛUPTÕÕÔ‘ÐWÕS“Ô“JKKØ\ÛUPTÕÕÔ‘ÐWÔÔ‘Ð‰‰Š“]U˜[œØÛÙ\—ÕPTÕ×Ô‘ÐWÔÔ‘Ð‹•Ø\ÛPš[˜\žOYKØ\ÛUPTÕÕÔ‘ÐWÔÔ‘ÐŠKKØ\ÛUPTÕÕÔŽÕS“Ô“I‰Š“]U˜[œØÛÙ\—ÕPTÕ×ÔŽÕS“Ô“K•Ø\ÛPš[˜\žOYKØ\ÛUPTÕÕÔŽÕS“Ô“JKKØ\ÛUPTÕÕÔ‘ÎÕS“Ô“I‰Š“]U˜[œØÛÙ\—ÕPTÕ×Ô‘ÎÕS“Ô“K•Ø\ÛPš[˜\žOYKØ\ÛUPTÕÕÔ‘ÎÕS“Ô“JKKšœÓTÐÕ˜[œØÛÙ\‰‰Š“TÐÕ˜[œØÛÙ\‹’”Ó[Ù[OYKšœÓTÐÕ˜[œØÛÙ\ŠKKØ\ÛSTÐÕ˜[œØÛÙ\‰‰Š“TÐÕ˜[œØÛÙ\‹•Ø\ÛPš[˜\žOYKØ\ÛSTÐÕ˜[œØÛÙ\ŠKKØ\ÛV”ÕXÛÙ\‰‰Š–”ÕXÛÙ\‹•Ø\ÛPš[˜\žOYKØ\ÛV”ÕXÛÙ\ŠJ_Y[˜Ý[ÛˆŒÊŠ^Ý\[ÙˆˆH‰‰\[ÙˆÕ‘PÓÑTH‰‰ŠRÕ‘PÓÑTŠNÛ]NÛÛ›Y\ÜØYÙO]OžÚYŠ™]J\ÝÚ]Ú
™]K˜XÝ[ÛŠ^ØØ\ÙHš[š]ŽžØÛÛœÝO]™]K\›ÎÚI‰ŠKšœÑXÛÙ\“[Ù[I‰\[ÙˆˆH‰‰Š[\ÜØÜš\ÊKšœÑXÛÙ\“[Ù[JKRÕ‘PÓÑTŠKJJJK™]KØ\ÛPš[˜\šY\É‰“J›ÚYË‹‹™]KØ\ÛPš[˜\šY\ËœÑXÛÙ\“[Ù[NœŸJKO[™]È‹’Õ‘XÛÙ\‹ÜÝY\ÜØYÙJØXÝ[ÛŽˆš[š]ŸJNØœ™XZßXØ\ÙHœÙ]Y˜][XÛÙ\“Ü[ÛœÈŽžÜ‹’Õ‘XÛÙ\‹‘Y˜][XÛÙ\“Ü[ÛœÏ]™]K›Ü[ÛœÎØœ™XZßXØ\ÙH™XÛÙHŽ™K™XÛÙJ™]K™]K™]K˜Ø\Ë™]K›Ü[ÛœÊK[ŠOOžØÛÛœÝÏV×NÙ›ÜŠ]LÛK›Z\X\Ë›[™ÝÊÊÛŠ^ØÛÛœÝÏZK›Z\X\ÖÛ—NÛÉ‰›Ë™]I‰œËœ\Ú
Ë™]K˜Y™™\Š_\ÜÝY\ÜØYÙJØXÝ[ÛŽˆ™XÛÙY‹ÝXØÙ\ÜÎˆLXÛÙY]Nš_KÊ_JK˜Ø]Ú
OOžÜÜÝY\ÜØYÙJØXÝ[ÛŽˆ™XÛÙY‹ÝXØÙ\ÜÎˆLK\ÙÎš_J_JNØœ™XZß__X\Þ[˜È[˜Ý[ÛˆŒÊ‹K
^Ü™]\›ˆ]ØZ]™]È›ÛZ\ÙJ
KÊOOžØÛÛœÝ[OžÜ‹œ™[[Ý™Q]™[\Ý[™\Š™\œ›Üˆ‹ŠK‹œ™[[Ý™Q]™[\Ý[™\Š›Y\ÜØYÙH‹ÊKÊ
_KÏ[OžÛ™]K˜XÝ[ÛOOHš[š]‰‰Š‹œ™[[Ý™Q]™[\Ý[™\Š™\œ›Üˆ‹ŠK‹œ™[[Ý™Q]™[\Ý[™\Š›Y\ÜØYÙH‹ÊKJŠJ_NÜ‹˜Y]™[\Ý[™\Š™\œ›Üˆ‹ŠK‹˜Y]™[\Ý[™\Š›Y\ÜØYÙH‹ÊK‹œÜÝY\ÜØYÙJØXÝ[ÛŽˆš[š]‹\›ÎØ\ÛPš[˜\šY\Î™_J_J_XÛ\ÜÈLÞØÛÛœÝXÝÜŠ
^Ý\Ë—Ú\Ñ\OHL\Ë—Ý\ÙT‘ÐRY“Û›PÌPÌÐ]˜Z[X›UÚ[•PTÕÏHL\Ë—ÚÝ‘XÛÙ\“Ü[ÛœÏ^ß_YÙ]\Ñ\J
^Ü™]\›ˆ\Ë—Ú\Ñ\_YÙ]\ÙT‘ÐRYTÕÐÍÓ›Ý]˜Z[X›UÚ[•PTÕÊ
^Ü™]\›ˆ\Ë—Ý\ÙT‘ÐRYTÕÐÍÓ›Ý]˜Z[X›UÚ[•PTÕß\Ù]\ÙT‘ÐRYTÕÐÍÓ›Ý]˜Z[X›UÚ[•PTÕÊJ^Ý\Ë—Ý\ÙT‘ÐRYTÕÐÍÓ›Ý]˜Z[X›UÚ[•PTÕÈOOYI‰Š\Ë—Ý\ÙT‘ÐRYTÕÐÍÓ›Ý]˜Z[X›UÚ[•PTÕÏYK\Ë—Ú\Ñ\OHL
_YÙ]\ÙT‘ÐRY“Û›PÌPÌÐ]˜Z[X›UÚ[•PTÕÊ
^Ü™]\›ˆ\Ë—Ý\ÙT‘ÐRY“Û›PÌPÌÐ]˜Z[X›UÚ[•PTÕß\Ù]\ÙT‘ÐRY“Û›PÌPÌÐ]˜Z[X›UÚ[•PTÕÊJ^Ý\Ë—Ý\ÙT‘ÐRY“Û›PÌPÌÐ]˜Z[X›UÚ[•PTÕÈOOYI‰Š\Ë—Ý\ÙT‘ÐRY“Û›PÌPÌÐ]˜Z[X›UÚ[•PTÕÏYK\Ë—Ú\Ñ\OHL
_YÙ]›Ü˜ÙT‘ÐJ
^Ü™]\›ˆ\Ë—Ù›Ü˜ÙT‘Ð_\Ù]›Ü˜ÙT‘ÐJJ^Ý\Ë—Ù›Ü˜ÙT‘ÐHOOYI‰Š\Ë—Ù›Ü˜ÙT‘ÐOYK\Ë—Ú\Ñ\OHL
_YÙ]›Ü˜ÙTŽ

^Ü™]\›ˆ\Ë—Ù›Ü˜ÙTŽ\Ù]›Ü˜ÙTŽ
J^Ý\Ë—Ù›Ü˜ÙTŽOOYI‰Š\Ë—Ù›Ü˜ÙTŽYK\Ë—Ú\Ñ\OHL
_YÙ]›Ü˜ÙT‘Î

^Ü™]\›ˆ\Ë—Ù›Ü˜ÙT‘Î\Ù]›Ü˜ÙT‘Î
J^Ý\Ë—Ù›Ü˜ÙT‘ÎOOYI‰Š\Ë—Ù›Ü˜ÙT‘ÎYK\Ë—Ú\Ñ\OHL
_YÙ]ž\\ÜÕ˜[œØÛÙ\œÊ
^Ü™]\›ˆ\Ë—Øž\\ÜÕ˜[œØÛÙ\œß\Ù]ž\\ÜÕ˜[œØÛÙ\œÊJ^Ý\Ë—Øž\\ÜÕ˜[œØÛÙ\œÈOOYI‰Š\Ë—Øž\\ÜÕ˜[œØÛÙ\œÏYK\Ë—Ú\Ñ\OHL
_WÙÙ]Õ‘XÛÙ\“Ü[ÛœÊ
^ÚYŠ]\Ë—Ú\Ñ\J\™]\›ˆ\Ë—ÚÝ‘XÛÙ\“Ü[ÛœÎÝ\Ë—Ú\Ñ\OHLNØÛÛœÝO^ßNÜ™]\›ˆ\Ë—Ý\ÙT‘ÐRYTÕÐÍÓ›Ý]˜Z[X›UÚ[•PTÕÈOO]›ÚY	‰ŠK\ÙT‘ÐRYTÕÐÍÓ›Ý]˜Z[X›UÚ[•PTÕÏ]\Ë—Ý\ÙT‘ÐRYTÕÐÍÓ›Ý]˜Z[X›UÚ[•PTÕÊK\Ë—Ù›Ü˜ÙT‘ÐHOO]›ÚY	‰ŠK™›Ü˜ÙT‘ÐO]\Ë—Ù›Ü˜ÙT‘ÐJK\Ë—Ù›Ü˜ÙTŽOO]›ÚY	‰ŠK™›Ü˜ÙTŽ]\Ë—Ù›Ü˜ÙTŽ
K\Ë—Ù›Ü˜ÙT‘ÎOO]›ÚY	‰ŠK™›Ü˜ÙT‘Î]\Ë—Ù›Ü˜ÙT‘Î
K\Ë—Øž\\ÜÕ˜[œØÛÙ\œÈOO]›ÚY	‰ŠK˜ž\\ÜÕ˜[œØÛÙ\œÏ]\Ë—Øž\\ÜÕ˜[œØÛÙ\œÊK\Ë\ÙT‘ÐRY“Û›PÌPÌÐ]˜Z[X›UÚ[•PTÕÉ‰ŠK˜[œØÛÙQ›Ü›X]XÚ\Ú[Û•™YO^ÕPTÕÎžÝ˜[œØÛÙQ›Ü›X]–ÖXËÌWÔ‘Ð‹XËÌ×Ô‘ÐWKY\ÎžÝ˜[œØÛÙQ›Ü›X]–XË”‘ÐLÌ‹[™Ú[™Q›Ü›X]ŒÌŽM‹›Ý[™Ó][\MˆL___JK\Ë—ÚÝ‘XÛÙ\“Ü[ÛœÏYK__XÛ\ÜÈÜÝ]XÈÙ]Y˜][[UÛÜšÙ\œÊ
^Ü™]\›ˆ\[Ùˆ˜]šYØ]ÜˆOH›Øš™XÝŸ[˜]šYØ]Ü‹š\™Ø\™PÛÛ˜Ý\œ™[˜ÞOÌN“X]›Z[ŠX]™›ÛÜŠ˜]šYØ]Ü‹š\™Ø\™PÛÛ˜Ý\œ™[˜ÞJ‹JK
_\Ý]XÈÒ[š]X[^™JJ^ÚYŠ—ÕÛÜšÙ\”ÛÛ›ÛZ\Ù_—ÑXÛÙ\“[Ù[T›ÛZ\ÙJ\™]\›ŽØÛÛœÝ^ÝØ\ÛP˜\ÙU\›”ØÜš\˜\ÙU\›œÑXÛÙ\“[Ù[N‘Ù]˜Xž[Û”ØÜš\T“
\Ë•T“ÛÛ™šYËšœÑXÛÙ\“[Ù[KL
KØ\ÛUPTÕÕÐTÕÎ‘Ù]˜Xž[Û”ØÜš\T“
\Ë•T“ÛÛ™šYËØ\ÛUPTÕÕÐTÕËL
KØ\ÛUPTÕÕÐÍÎ‘Ù]˜Xž[Û”ØÜš\T“
\Ë•T“ÛÛ™šYËØ\ÛUPTÕÕÐÍËL
KØ\ÛUPTÕÕÔ‘ÐWÕS“Ô“N‘Ù]˜Xž[Û”ØÜš\T“
\Ë•T“ÛÛ™šYËØ\ÛUPTÕÕÔ‘ÐWÕS“Ô“KL
KØ\ÛUPTÕÕÔ‘ÐWÔÔ‘ÐŽ‘Ù]˜Xž[Û”ØÜš\T“
\Ë•T“ÛÛ™šYËØ\ÛUPTÕÕÔ‘ÐWÔÔ‘Ð‹L
KØ\ÛUPTÕÕÔŽÕS“Ô“N‘Ù]˜Xž[Û”ØÜš\T“
\Ë•T“ÛÛ™šYËØ\ÛUPTÕÕÔŽÕS“Ô“KL
KØ\ÛUPTÕÕÔ‘ÎÕS“Ô“N‘Ù]˜Xž[Û”ØÜš\T“
\Ë•T“ÛÛ™šYËØ\ÛUPTÕÕÔ‘ÎÕS“Ô“KL
KœÓTÐÕ˜[œØÛÙ\Ž‘Ù]˜Xž[Û”ØÜš\T“
\Ë•T“ÛÛ™šYËšœÓTÐÕ˜[œØÛÙ\‹L
KØ\ÛSTÐÕ˜[œØÛÙ\Ž‘Ù]˜Xž[Û”ØÜš\T“
\Ë•T“ÛÛ™šYËØ\ÛSTÐÕ˜[œØÛÙ\‹L
KØ\ÛV”ÕXÛÙ\Ž‘Ù]˜Xž[Û”ØÜš\T“
\Ë•T“ÛÛ™šYËØ\ÛV”ÕXÛÙ\‹L
_NÙI‰\[ÙˆÛÜšÙ\OH™[˜Ý[Ûˆ‰‰\[ÙˆT“HÒ—ÕÛÜšÙ\”ÛÛ›ÛZ\ÙO[™]È›ÛZ\ÙJOOžØÛÛœÝÏX	Ó_J	ÜŒßJJ
XUT“˜Ü™X]SØš™XÝT“
™]È›ØŠÜ×KÝ\Nˆ˜\XØ][Û‹Ú˜]˜\ØÜš\ŸJJNÚJ™]ÈÝJK\Þ[˜Ê
OO˜]ØZ]ŒÊ™]ÈÛÜšÙ\ŠŠK›ÚY
JJ_JN\[Ùˆ—ÒÕ‘XÛÙ\“[Ù[OˆHÒ—ÑXÛÙ\“[Ù[T›ÛZ\ÙO]“ØY˜Xž[Û”ØÜš\\Þ[˜ÊšœÑXÛÙ\“[Ù[JK[Š

OOŠ—ÒÕ‘XÛÙ\“[Ù[ORÕ‘PÓÑT‹—ÒÕ‘XÛÙ\“[Ù[K“TÐÕ˜[œØÛÙ\‹•\ÙQœ›ÛUÛÜšÙ\•™XYHLK—ÒÕ‘XÛÙ\“[Ù[K•ÐTÓSY[[ÜžSX[˜YÙ\‹“ØYš[˜\šY\Ñœ›ÛPÝ\œ™[™XYHLJ—ÒÕ‘XÛÙ\“[Ù[JK™]È—ÒÕ‘XÛÙ\“[Ù[K’Õ‘XÛÙ\ŠJNŠ—ÒÕ‘XÛÙ\“[Ù[K“TÐÕ˜[œØÛÙ\‹•\ÙQœ›ÛUÛÜšÙ\•™XYHLK—ÒÕ‘XÛÙ\“[Ù[K•ÐTÓSY[[ÜžSX[˜YÙ\‹“ØYš[˜\šY\Ñœ›ÛPÝ\œ™[™XYHL—ÑXÛÙ\“[Ù[T›ÛZ\ÙOT›ÛZ\ÙKœ™\ÛÛ™J™]È—ÒÕ‘XÛÙ\“[Ù[K’Õ‘XÛÙ\ŠJ_XÛÛœÝXÝÜŠKR‘Y˜][[UÛÜšÙ\œÊ^Ý\Ë—Ù[™Ú[™OYNØÛÛœÝO]\[ÙˆOH›Øš™XÝ‰‰ÛÜšÙ\”ÛÛ•ÛÜšÙ\”ÛÛÚYŠJR—ÕÛÜšÙ\”ÛÛ›ÛZ\ÙOT›ÛZ\ÙKœ™\ÛÛ™JJNÙ[Ù^Ý\[ÙˆOH›Øš™XÝÒ—ÒÕ‘XÛÙ\“[Ù[O]Ë˜š[˜\šY\Ð[™[Ù[\ÐÛÛZ[™\ËšœÑXÛÙ\“[Ù[N\[ÙˆÕ‘PÓÑTH‰‰Š—ÒÕ‘XÛÙ\“[Ù[ORÕ‘PÓÑTŠNØÛÛœÝÏ]\[ÙˆOH›[X™\ˆÝ›[UÛÜšÙ\œÏÏÒ‘Y˜][[UÛÜšÙ\œÎÒ—Ò[š]X[^™JÊ__X\Þ[˜ÈÝ\ØY\Þ[˜ÊKJ^ØÛÛœÝÏX]ØZ]\Ë—ÙXÛÙP\Þ[˜ÊKJNÝ\Ë—ØÜ™X]U^\™JËJ_X\Þ[˜ÈÙXÛÙP\Þ[˜ÊK
^ØÛÛœÝO]\Ë—Ù[™Ú[™K™Ù]Ø\Ê
KÏ^Ø\ÝÎˆHZK˜\ÝËœÎˆHZK˜œËÌÝÎˆHZKœÌÝËœÎˆHZKœœË]ÌŽˆHZK™]Ì‹]ÌNˆHZK™]Ì_NÚYŠ—ÕÛÜšÙ\”ÛÛ›ÛZ\ÙJ^ØÛÛœÝX]ØZ]—ÕÛÜšÙ\”ÛÛ›ÛZ\ÙNÜ™]\›ˆ]ØZ]™]È›ÛZ\ÙJ
Ë
OOžÛ‹œ\Ú

ŠOOžØÛÛœÝYÏOžÚœ™[[Ý™Q]™[\Ý[™\Š™\œ›Üˆ‹
Kœ™[[Ý™Q]™[\Ý[™\Š›Y\ÜØYÙH‹ÊK
ÊKŠ
_KÏYÏOžÙË™]K˜XÝ[ÛOOH™XÛÙY‰‰Šœ™[[Ý™Q]™[\Ý[™\Š™\œ›Üˆ‹
Kœ™[[Ý™Q]™[\Ý[™\Š›Y\ÜØYÙH‹ÊKË™]KœÝXØÙ\ÜÏÛÊË™]K™XÛÙY]JN›
ÛY\ÜØYÙN™Ë™]K›\ÙßJKŠ
J_NÚ˜Y]™[\Ý[™\Š™\œ›Üˆ‹
K˜Y]™[\Ý[™\Š›Y\ÜØYÙH‹ÊKœÜÝY\ÜØYÙJØXÝ[ÛŽˆœÙ]Y˜][XÛÙ\“Ü[ÛœÈ‹Ü[ÛœÎ’‘Y˜][XÛÙ\“Ü[ÛœË—ÙÙ]Õ‘XÛÙ\“Ü[ÛœÊ
_JNØÛÛœÝ[™]ÈZ[\œ˜^JK˜ž]S[™Ý
NÜœÙ]
™]ÈZ[\œ˜^JK˜Y™™\‹K˜ž]SÙ™œÙ]K˜ž]S[™Ý
JKœÜÝY\ÜØYÙJØXÝ[ÛŽˆ™XÛÙH‹]NœØ\ÎœËÜ[ÛœÎKÜ˜Y™™\—J_J_J_Y[ÙHYŠ—ÑXÛÙ\“[Ù[T›ÛZ\ÙJ^ØÛÛœÝX]ØZ]—ÑXÛÙ\“[Ù[T›ÛZ\ÙNÜ™]\›ˆ‘Y˜][XÛÙ\“Ü[ÛœËš\Ñ\I‰Š—ÒÕ‘XÛÙ\“[Ù[K’Õ‘XÛÙ\‹‘Y˜][XÛÙ\“Ü[ÛœÏR‘Y˜][XÛÙ\“Ü[ÛœË—ÙÙ]Õ‘XÛÙ\“Ü[ÛœÊ
JK]ØZ]™]È›ÛZ\ÙJ
Ë
OOžÛ‹™XÛÙJKK
K[ŠOžÛÊ
_JK˜Ø]Ú
OžÛ
ÛY\ÜØYÙNšJ_J_J_]›ÝÈ™]È\œ›ÜŠ’ÕˆXÛÙ\ˆ[Ù[H\È›Ý]˜Z[X›HŠ_WØÜ™X]U^\™JKJ^ÚYŠ
K›^Y\ÛÝ[ÏÌJOŒJ]›ÝÈ™]È\œ›ÜŠ’ÕˆÛÛZ[™\ˆH\œ˜^H^\™\È\™H›ÝÝ\ÜYžH\È^\™HØY\‹ˆŠNØÛÛœÝÏLÍMLÎÝ\Ë—Ù[™Ú[™K—Øš[™^\™Q\™XÝJË
KI‰ŠK˜[œØÛÙY›Ü›X]YK˜[œØÛÙY›Ü›X]Kš\Ò[‘Ø[[XTÜXÙOYKš\Ò[‘Ø[[XTÜXÙKKš\Ð[OYKš\Ð[KK˜[œØÛÙ\“˜[YOYK˜[œØÛÙ\“˜[YJNÛ]HLÜÝÚ]Ú
K˜[œØÛÙY›Ü›X]
^ØØ\ÙHÌŽMŽ\OL™›Ü›X]MNØœ™XZÎØØ\ÙHÌÌÌŒN\OL™›Ü›X]MŽØœ™XZÎØØ\ÙHÌÌÌŒÎ\OL™›Ü›X]MÎØœ™XZÎÙY˜][™›Ü›X]YK˜[œØÛÙY›Ü›X]HLNØœ™XZßZYŠ—ÙØ[[XTÜXÙOYKš\Ò[‘Ø[[XTÜXÙK™Ù[™\˜]SZ\X\ÏYK›Z\X\Ë›[™ÝŒKÚYYK›Z\X\ÖÌKÚYšZYÚYK›Z\X\ÖÌKšZYÚK™\œ›ÜœÊ]›ÝÈ™]È\œ›ÜŠ’ÕˆÛÛZ[™\ˆHÛÝ[›Ý˜[œØÛÙHH]KˆŠÙK™\œ›ÜœÊNÙ›ÜŠ]ÏLÛÏK›Z\X\Ë›[™ÝÊÊÛÊ^ØÛÛœÝYK›Z\X\ÖÛ×NÚYŠ[[™]J]›ÝÈ™]È\œ›ÜŠ’ÕˆÛÛZ[™\ˆHÛÝ[›Ý˜[œØÛÙHÛ™HÙˆH[XYÙHŠNÛÊÚY[ÚYšZYÚ[šZYÚ\Ë—Ù[™Ú[™K—Ý\ØY]UÕ^\™Q\™XÝJ™]KË›ÚYL
JN\Ë—Ù[™Ú[™K—Ý\ØYÛÛ\™\ÜÙY]UÕ^\™Q\™XÝJK˜[œØÛÙY›Ü›X]ÚYšZYÚ™]KÊ_]—Ù^[œÚ[ÛH‹šÝˆ‹š\Ô™XYOHL\Ë—Ù[™Ú[™K—Øš[™^\™Q\™XÝJË[
_\Ý]XÈ\Õ˜[Y
J^ÚYŠK˜ž]S[™ÝLLŠ^ØÛÛœÝ[™]ÈZ[\œ˜^JK˜Y™™\‹K˜ž]SÙ™œÙ]LŠNÚYŠÌOOOLMÌI‰ÌWOOOMÍI‰Ì—OOON	‰Ì×OOON	‰ÍOOOLÌ‰‰ÍWOOOML	‰Í—OOOM	‰Í×OOOLNÉ‰ÎOOOLLÉ‰ÎWOOOLL	‰ÌLOOOL‰‰ÌLWOOOLL
\™]\›ˆL\™]\›ˆL__R•T“ÛÛ™šYÏ^ÚœÑXÛÙ\“[Ù[NˆšÎ‹ËØÙ‹˜˜Xž[ÛšœË˜ÛÛKØ˜Xž[Û‹šÝ‘XÛÙ\‹šœÈ‹Ø\ÛUPTÕÕÐTÕÎ›[Ø\ÛUPTÕÕÐÍÎ›[Ø\ÛUPTÕÕÔ‘ÐWÕS“Ô“N›[Ø\ÛUPTÕÕÔ‘ÐWÔÔ‘ÐŽ›[Ø\ÛUPTÕÕÔŽÕS“Ô“N›[Ø\ÛUPTÕÕÔ‘ÎÕS“Ô“N›[œÓTÐÕ˜[œØÛÙ\Ž›[Ø\ÛSTÐÕ˜[œØÛÙ\Ž›[Ø\ÛV”ÕXÛÙ\Ž›[NÒ‘Y˜][[UÛÜšÙ\œÏR‘Ù]Y˜][[UÛÜšÙ\œÊ
NÒ‘Y˜][XÛÙ\“Ü[ÛœÏ[™]ÈLÎÙ[˜Ý[ÛˆPJŠ^ÜÝÚ]Ú
Š^ØØ\ÙHÍNLMŽœ™]\›ˆÌÍÍÍŽØØ\ÙHÍNLNœ™]\›ˆÌÍÍÎØØ\ÙHÍNLNNœ™]\›ˆÌÍÍÎNØØ\ÙHÍÍLÎœ™]\›ˆÍÍLŽØØ\ÙHÍÍMÎœ™]\›ˆÍÍMŽØØ\ÙHÍÍMNœ™]\›ˆÍÍMØØ\ÙHÍÎœ™]\›ˆÍÎØØ\ÙHÍÎNœ™]\›ˆÍÎNØØ\ÙHÍÎŽœ™]\›ˆÍÎLØØ\ÙHÍÎÎœ™]\›ˆÍÎLNØØ\ÙHÍÎœ™]\›ˆÍÎLŽØØ\ÙHÍÎNœ™]\›ˆÍÎLÎØØ\ÙHÍÎŽœ™]\›ˆÍÎMØØ\ÙHÍÎÎœ™]\›ˆÍÎMNØØ\ÙHÍÎœ™]\›ˆÍÎMŽØØ\ÙHÍÎNœ™]\›ˆÍÎMÎØØ\ÙHÍÎLœ™]\›ˆÍÎNØØ\ÙHÍÎLNœ™]\›ˆÍÎNNØØ\ÙHÍÎLŽœ™]\›ˆÍÎŒØØ\ÙHÍÎLÎœ™]\›ˆÍÎŒNØØ\ÙHÍLÎœ™]\›ˆÍLŸ\™]\›ˆ[XÛ\ÜÈÌÞØÛÛœÝXÝÜŠ
^Ý\ËœÝ\ÜØ\ØØY\ÏHL_[ØYÝX™Q]JKKÊ^ÚYŠ\œ˜^Kš\Ð\œ˜^JJJ\™]\›ŽÝ—Ú[™\”ØØ[OH]š[™\NØÛÛœÝ]™Ù][™Ú[™J
KÏ[™]ÈÜÊKŠKZPJË™Û[\›˜[›Ü›X]
NÛOO[[Ê™›Ü›X][—Ý\ÙTÔ‘ÐY™™\[‹—ÙÙ]\ÙTÔ‘ÐY™™\ŠL]™Ù[™\˜]SZ\X\ÊK—ÙØ[[XTÜXÙOHL
N™›Ü›X][Ë™Û[\›˜[›Ü›X]ØÛÛœÝ[Ë›[X™\“Ù“Z\X\]™[ÏŒI‰™Ù[™\˜]SZ\X\ÎÛ‹—Ý[œXÚÑ›\JL
KË\ØY]™[Ê™Ù[™\˜]SZ\X\ÊKÚY[Ëœ^[ÚYšZYÚ[Ëœ^[ZYÚ‹—ÜÙ]ÝX™SX\^\™T\˜[\ÊË›[X™\“Ù“Z\X\]™[ËLJKš\Ô™XYOHL›Û“ØYYØœÙ\˜X›K››ÝYžSØœÙ\™\œÊ
K›Û“ØYYØœÙ\˜X›K˜ÛX\Š
KÉ‰œÊ
_[ØY]JKKÊ^ÚYŠÜË’\Õ˜[Y
JJ^Ý—Ú[™\”ØØ[OH]š[™\NØÛÛœÝ[™]ÈÜÊKJKÏZPJ‹™Û[\›˜[›Ü›X]
NÛÈOO[[Ê™›Ü›X][Ë—Ý\ÙTÔ‘ÐY™™\]™Ù][™Ú[™J
K—ÙÙ]\ÙTÔ‘ÐY™™\ŠL]™Ù[™\˜]SZ\X\ÊK—ÙØ[[XTÜXÙOHL
N™›Ü›X][‹™Û[\›˜[›Ü›X]J‹œ^[ÚY‹œ^[ZYÚ™Ù[™\˜]SZ\X\ËL

OOžÛ‹\ØY]™[Ê™Ù[™\˜]SZ\X\Ê_K‹š\Ò[˜[Y
_Y[ÙH’\Õ˜[Y
JOÛ™]È
™Ù][™Ú[™J
JK—Ý\ØY\Þ[˜ÊKÊK[Š

OOžÚJÚYšZYÚ™Ù[™\˜]SZ\X\ËL

OOžßKLJ_KÏOžÙÙK•Ø\›Š˜Z[YÈØYÕˆ^\™H]Nˆ	ÛË›Y\ÜØYÙ_X
KJLKLK

OOžßKL
_JNŠÙK‘\œ›ÜŠ^\™HZ\ÜÚ[™ÈÕY[YšY\ˆŠKJLKLK

OOžßKL
J__XÛÛœÝÐOSØš™XÝ™œ™Y^™JØš™XÝ™Yš[™T›Ü\J××Ü›Ý××Î›[ÒÕ^\™SØY\Ž›ÌßKÞ[X›ÛÔÝš[™ÕYËÝ˜[YNˆ“[Ù[HŸJJKÏLKÌÏL‹ÏLËŒÏNKLÏLLÏLLKÌÏMLÏMÏLÌÏLKŒÏL‹ÏLÎÙ[˜Ý[ÛˆÝŠŠ^Û]OLÜ™]\›žÚYÛ[™Ýœ–ÙJÊ×KÛÛÜ›X\Ý\Nœ–ÙJÊ×K[XYÙWÝ\Nœ–ÙJÊ×KÛÛÜ›X\Ú[™^œ–ÙJÊ×_–ÙJÊ×OÛÛÜ›X\Û[™Ýœ–ÙJÊ×_–ÙJÊ×OÛÛÜ›X\ÜÚ^™Nœ–ÙJÊ×KÜšYÚ[Ž–Ü–ÙJÊ×_–ÙJÊ×O–ÙJÊ×_–ÙJÊ×OKÚYœ–ÙJÊ×_–ÙJÊ×OZYÚœ–ÙJÊ×_–ÙJÊ×O^[ÜÚ^™Nœ–ÙJÊ×K›YÜÎœ–ÙW__Y[˜Ý[ÛˆÒJ‹J^ÚYŠK›[™ÝNJ^ÙÙK‘\œ›ÜŠ•[˜X›HÈØYÐHš[HH›Ý[›ÝYÚ]HÈÛÛZ[ˆXY\ˆŠNÜ™]\›Ÿ[]LNØÛÛœÝO]ÝŠJNÚYŠKšYÛ[™Ý
Ý™K›[™Ý
^ÙÙK‘\œ›ÜŠ•[˜X›HÈØYÐHš[HH›Ý[›ÝYÚ]HŠNÜ™]\›Ÿ]
ÏZKšYÛ[™ÝÛ]ÏHLKHLKÏHLNÜÝÚ]Ú
Kš[XYÙWÝ\J^ØØ\ÙHŒÎœÏHLØØ\ÙHÎ›HLØœ™XZÎØØ\ÙHLÎœÏHLØØ\ÙHÌÎ˜œ™XZÎØØ\ÙHÎœÏHLØØ\ÙHÎ›ÏHLØœ™XZß[]ØÛÛœÝZKœ^[ÜÚ^™OŒËZKÚY
šKšZYÚ
šÛ]ÚYŠ‰‰ŠYKœÝX˜\œ˜^J
ÏZK˜ÛÛÜ›X\Û[™Ý
ŠK˜ÛÛÜ›X\ÜÚ^™OŒÊJJKÊ^Û[™]ÈZ[\œ˜^JŠNÛ]ËKLØÛÛœÝO[™]ÈZ[\œ˜^J
NÙ›ÜŠÝ‰‰‘ŽÊZYŠÏYVÝ
Ê×KOJÉŒLÊJÌKÉŒLŽ
^Ù›ÜŠLÔÊÊÔ
UVÔOYVÝ
Ê×NÙ›ÜŠLÔNÊÊÔ
[œÙ]
K
Ô
š
NÑ
ÏZ
_Y[Ù^Ù›ÜŠJZLÔNÊÊÔ
[Ñ
ÔOYVÝ
Ê×NÑ
ÏP__Y[ÙHYKœÝX˜\œ˜^J
ÊÚKÚY
šKšZYÚ™ŠJNÛ]ËË‹ÜÝÚ]Ú

K™›YÜÉ—ÌÊO›LÊ^ÙY˜][˜Ø\ÙHŒÎ—ÏLÏLKZKÚYLLKZKšZYÚØœ™XZÎØØ\ÙHÎ—ÏLÏLKZKÚYZKšZYÚLKKLKKLNØœ™XZÎØØ\ÙHÎ—ÏZKÚYLKÏKLKKLKLLKZKšZYÚØœ™XZÎØØ\ÙHÌÎ—ÏZKÚYLKÏKLKKLKZKšZYÚLKKLKKLNØœ™XZßXÛÛœÝOH—ÙÙ][XYÙQ]HŠÊÏÈ‘Ü™^HŽˆˆŠJÚKœ^[ÜÚ^™JÈ˜š]È‹TŒÖÞWJK‹ËË
NÜ‹™Ù][™Ú[™J
K—Ý\ØY]UÕ^\™Q\™XÝJ‹Š_Y[˜Ý[ÛˆÌÊ‹KKË‹Ë
^ØÛÛœÝ]YKÏ\‹ÚY\‹šZYÚÛ]ËLØÛÛœÝO[™]ÈZ[\œ˜^JÊœ

NÙ›ÜŠZNÕOO[ŽÕ
Ï\ÊY›ÜŠ[ÎÞOOZÞ
Ï[ŠÊÊYÏY–Ý—KVÊ
×Ê•
J
Ì×OLMKVÊ
×Ê•
J
Ì—OYÙÊŒÊÌKVÊ
×Ê•
J
ÌWOYÙÊŒÊÌWKVÊ
×Ê•
J
ÌOYÙÊŒÊÌ—NÜ™]\›ˆ_Y[˜Ý[ÛˆÊ‹KKË‹Ë
^ØÛÛœÝ]\‹ÚYÏ\‹šZYÚÛ]ÏL‹ØÛÛœÝ[™]ÈZ[\œ˜^J
—Ê
NÙ›ÜŠZNÞOO[ŽÞ
Ï\ÊY›ÜŠ[ÎÝˆOOZÝŠÏ[ÊÏLŠ^ÜY–ÙÊÌJÊ–ÙÊÌWO
NØÛÛœÝOJ
	ŒÌMÍ
OŒL
JŒMKÌÌ_J
	ŽNLŠOJJŒMKÌÌ_OJ	ŒÌJJŒMKÌÌ_ÕÊŠÙ
ž
J
ÌO^KÊŠÙ
ž
J
ÌWOT‹ÊŠÙ
ž
J
Ì—ORKÊŠÙ
ž
J
Ì×O\	ŒÌÍŽÌŒM_\™]\›ˆY[˜Ý[ÛˆLÊ‹KKË‹Ë
^ØÛÛœÝ]\‹ÚYÏ\‹šZYÚÛ]LËŽØÛÛœÝ[™]ÈZ[\œ˜^J
—Ê
NÙ›ÜŠZNÝˆOO[ŽÝŠÏ\ÊY›ÜŠÏ[ÎÙÈOOZÙÊÏ[
ÏLÊ^ÊÊÙ
ŠJ
Ì×OLMKÊÊÙ
ŠJ
Ì—OY–Ü
ÌKÊÊÙ
ŠJ
ÌWOY–Ü
ÌWKÊÊÙ
ŠJ
ÌOY–Ü
Ì—NÜ™]\›ˆY[˜Ý[ÛˆLÊ‹KKË‹Ë
^ØÛÛœÝ]\‹ÚYÏ\‹šZYÚÛ]LËŽØÛÛœÝ[™]ÈZ[\œ˜^J
—Ê
NÙ›ÜŠZNÝˆOO[ŽÝŠÏ\ÊY›ÜŠÏ[ÎÙÈOOZÙÊÏ[
ÏM
^ÊÊÙ
ŠJ
Ì—OY–Ü
ÌKÊÊÙ
ŠJ
ÌWOY–Ü
ÌWKÊÊÙ
ŠJ
ÌOY–Ü
Ì—KÊÊÙ
ŠJ
Ì×OY–Ü
Ì×NÜ™]\›ˆY[˜Ý[ÛˆŒÊ‹KKË‹Ë
^ØÛÛœÝ]\‹ÚYÏ\‹šZYÚÛ]ÏL‹ØÛÛœÝ[™]ÈZ[\œ˜^J
—Ê
NÙ›ÜŠZNÞOO[ŽÞ
Ï\ÊY›ÜŠ[ÎÝˆOOZÝŠÏ[ÊÊÊ\Y–Ù×KÊŠÙ
ž
J
ÌO\ÊŠÙ
ž
J
ÌWO\ÊŠÙ
ž
J
Ì—O\ÊŠÙ
ž
J
Ì×OLMNÜ™]\›ˆY[˜Ý[ÛˆLÊ‹KKË‹Ë
^ØÛÛœÝ]\‹ÚYÏ\‹šZYÚÛ]LËŽØÛÛœÝ[™]ÈZ[\œ˜^J
—Ê
NÙ›ÜŠZNÝˆOO[ŽÝŠÏ\ÊY›ÜŠÏ[ÎÙÈOOZÙÊÏ[
ÏLŠ^ÊÊÙ
ŠJ
ÌOY–Ü
ÌKÊÊÙ
ŠJ
ÌWOY–Ü
ÌKÊÊÙ
ŠJ
Ì—OY–Ü
ÌKÊÊÙ
ŠJ
Ì×OY–Ü
ÌWNÜ™]\›ˆXÛÛœÝŒÏ^ÑÙ]ÐRXY\ŽÝ‹\ØYÛÛ[™ÒKÙÙ][XYÙQ]Nš]Î”ÌËÙÙ][XYÙQ]LM˜š]Î•ËÙÙ][XYÙQ]Lš]Î‘LËÙÙ][XYÙQ]LÌ˜š]ÎžLËÙÙ][XYÙQ]QÜ™^Nš]Î˜ŒËÙÙ][XYÙQ]QÜ™^LM˜š]ÎLßNØÛ\ÜÈLÞØÛÛœÝXÝÜŠ
^Ý\ËœÝ\ÜØ\ØØY\ÏHL_[ØYÝX™Q]J
^Ý›ÝÈ‹™[ˆ›ÝÝ\ÜY[ˆÝX™KˆŸ[ØY]JKJ^ØÛÛœÝÏ[™]ÈZ[\œ˜^JK˜Y™™\‹K˜ž]SÙ™œÙ]K˜ž]S[™Ý
K]ÝŠÊNÚJ‹ÚY‹šZYÚ™Ù[™\˜]SZ\X\ËLK

OOžÙÒJÊ_J__XÛÛœÝÌÏSØš™XÝ™œ™Y^™JØš™XÝ™Yš[™T›Ü\J××Ü›Ý××Î›[ÕÐU^\™SØY\Ž’LßKÞ[X›ÛÔÝš[™ÕYËÝ˜[YNˆ“[Ù[HŸJJK’OM[OMOLK[L‹LÏN]OMMLÍ‹OU]OŒËÏLM‹ØOLMXÏJOÊJÌKÝLOØKOSÝ‹LK›OMNKÒOMŒËÏLŠÔÒKT›NÝ˜\ˆ›ŽÊ[˜Ý[ÛŠŠ^Ü–Ü‹““×ÐÓÓT‘TÔÒSÓLOH““×ÐÓÓT‘TÔÒSÓˆ‹–Ü‹”“WÐÓÓT‘TÔÒSÓLWOH”“WÐÓÓT‘TÔÒSÓˆ‹–Ü‹–’T×ÐÓÓT‘TÔÒSÓL—OH–’T×ÐÓÓT‘TÔÒSÓˆ‹–Ü‹–’TÐÓÓT‘TÔÒSÓL×OH–’TÐÓÓT‘TÔÒSÓˆ‹–Ü‹”V—ÐÓÓT‘TÔÒSÓMOH”V—ÐÓÓT‘TÔÒSÓˆ‹–Ü‹”ŒÐÓÓT‘TÔÒSÓMWOH”ŒÐÓÓT‘TÔÒSÓˆŸJJ›Ÿ
›^ßJJNÝ˜\ˆ[NÊ[˜Ý[ÛŠŠ^Ü–Ü‹’SÔ‘PTÒS‘×ÖOLOH’SÔ‘PTÒS‘×ÖH‹–Ü‹‘PÔ‘PTÒS‘×ÖOLWOH‘PÔ‘PTÒS‘×ÖHŸJJ[_
[O^ßJJNÙ[˜Ý[ÛˆÛJ‹J^ØÛÛœÝ[™]ÈZ[\œ˜^JŠNÛ]OLÙ›ÜŠÝÙK˜[YJÚWHOLÊZJÏLNØÛÛœÝÏ[™]È^XÛÙ\Š
K™XÛÙJœÛXÙJK˜[YKK˜[YJÚJJNÜ™]\›ˆK˜[YOYK˜[YJÚJÌKßY[˜Ý[ÛˆŠ‹J^ØÛÛœÝ\‹™Ù][ÌŠK˜[YKL
NÜ™]\›ˆK˜[YJÏ]’KY[˜Ý[ÛˆÛŠ‹J^ØÛÛœÝ\‹™Ù]Z[ÌŠK˜[YKL
NÜ™]\›ˆK˜[YJÏ]’KY[˜Ý[ÛˆJ‹J^ØÛÛœÝ\‹™Ù]Z[
K˜[YJNÜ™]\›ˆK˜[YJÏ^KY[˜Ý[ÛˆJ‹J^ØÛÛœÝ\‹™Ù]Z[MŠK˜[YKL
NÜ™]\›ˆK˜[YJÏ][Y[˜Ý[ÛˆJ‹J^ØÛÛœÝ\–ÙK˜[YWNÜ™]\›ˆK˜[YJÏ^KY[˜Ý[ÛˆÌÊ‹J^Û]Ü™]\›ˆ™Ù]šYÒ[š[ˆ]UšY]Ëœ›ÝÝ\OÝS[X™\Š‹™Ù]šYÒ[
K˜[YKL
JN\‹™Ù]Z[ÌŠK˜[YJÍL
JÓ[X™\Š‹™Ù]Z[ÌŠK˜[YKL
OÌŠKK˜[YJÏSLËY[˜Ý[ÛˆÜÊ‹J^ØÛÛœÝ\‹™Ù]›Ø]ÌŠK˜[YKL
NÜ™]\›ˆK˜[YJÏP[KY[˜Ý[ÛˆÌÊ‹J^Ü™]\›ˆÚJJ‹JJ_Y[˜Ý[ÛˆÊ‹J^Ü™]\›ˆJ]
ÜÊ‹JKV
J_Y[˜Ý[ÛˆŒÊ‹K
^ØÛÛœÝO[™]È^XÛÙ\Š
K™XÛÙJ™]ÈZ[\œ˜^JŠKœÛXÙJK˜[YKK˜[YJÝ
JNÜ™]\›ˆK˜[YOYK˜[YJÝ_Y[˜Ý[ÛˆŒÊ‹J^ØÛÛœÝRŠ‹JKO]ÛŠ‹JNÜ™]\›–ÝW_Y[˜Ý[ÛˆLÊ‹J^ØÛÛœÝ]ÛŠ‹JKO]ÛŠ‹JNÜ™]\›–ÝW_Y[˜Ý[ÛˆŒÊ‹J^ØÛÛœÝWÜÊ‹JKOWÜÊ‹JNÜ™]\›–ÝW_Y[˜Ý[ÛˆŒÊ‹J^ØÛÛœÝWÜÊ‹JKOWÜÊ‹JKÏWÜÊ‹JNÜ™]\›–ÝK×_Y[˜Ý[ÛˆŒÊ‹K
^ØÛÛœÝOYK˜[YKÏV×NÙ›ÜŠÙK˜[YOJÝLNÊ^ØÛÛœÝPÛJ‹˜Y™™\‹JKÏRŠ‹JKVJ‹JNÙK˜[YJÏLÎØÛÛœÝRŠ‹JKRŠ‹JNÜËœ\Ú
Û˜[YN›‹^[\N›Ë[™X\Ž›Ø[\[™ÎšTØ[\[™Î™ŸJ_\™]\›ˆK˜[YJÏLKßY[˜Ý[ÛˆÌÊ‹J^ØÛÛœÝWÜÊ‹JKOWÜÊ‹JKÏWÜÊ‹JKWÜÊ‹JKÏWÜÊ‹JKWÜÊ‹JKWÜÊ‹JKWÜÊ‹JNÜ™]\›žÜ™Y™YNšKÜ™Y[–œËÜ™Y[–N›‹›YV›Ë›YVN›Ú]VšÚ]VN™Ÿ_Y[˜Ý[ÛˆÌÊ‹J^Ü™]\›ˆJ‹J_Y[˜Ý[ÛˆÊ‹J^ØÛÛœÝRŠ‹JKORŠ‹JKÏRŠ‹JKRŠ‹JNÜ™]\›žÞZ[ŽSZ[ŽšKX^œËSX^›Ÿ_Y[˜Ý[ÛˆÌÊ‹J^ØÛÛœÝVJ‹JNÜ™]\›ˆ[VÝ_Y[˜Ý[ÛˆÊ‹KJ^ÜÝÚ]Ú

^ØØ\ÙHœÝš[™ÈŽ˜Ø\ÙHœÝš[™Ý™XÝÜˆŽ˜Ø\ÙHšXØÔ›Ùš[HŽœ™]\›ˆŒÊ‹˜Y™™\‹KJNØØ\ÙH˜Ú\ÝŽœ™]\›ˆŒÊ‹KJNØØ\ÙH˜Ú›ÛX]XÚ]Y\ÈŽœ™]\›ˆÌÊ‹JNØØ\ÙH˜ÛÛ\™\ÜÚ[ÛˆŽœ™]\›ˆÌÊ‹JNØØ\ÙH˜›ÞšHŽœ™]\›ˆÊ‹JNØØ\ÙH›[™SÜ™\ˆŽœ™]\›ˆÌÊ‹JNØØ\ÙH™›Ø]Žœ™]\›ˆÜÊ‹JNØØ\ÙHŒ™ˆŽœ™]\›ˆŒÊ‹JNØØ\ÙHŒÙˆŽœ™]\›ˆŒÊ‹JNØØ\ÙHš[Žœ™]\›ˆŠ‹JNØØ\ÙHœ˜][Û˜[Žœ™]\›ˆŒÊ‹JNØØ\ÙH[YXÛÙHŽœ™]\›ˆLÊ‹JNØØ\ÙHœ™]šY]ÈŽœ™]\›ˆK˜[YJÏZKœÚÚ\YŽÙY˜][™K˜[YJÏZNÜ™]\›Ÿ_Y[˜Ý[ÛˆRJŠ^Ù›ÜŠ]OLNÙO‹›[™ÝÙJÊÊ^ØÛÛœÝ\–ÙKLWJÜ–ÙWKLLŽÜ–ÙWO]_Y[˜Ý[ÛˆRJ‹J^Û]LOSX]™›ÛÜŠ
‹›[™Ý
ÌJKÌŠKÏLØÛÛœÝ\‹›[™ÝLNÙ›ÜŠÈJÏ›Ÿ
VÜÊÊ×O\–Ý
Ê×KÏ›ŠJNÊYVÜÊÊ×O\–ÚJÊ×_XÛÛœÝLÏLŒŒÌÙ[˜Ý[Ûˆ’J‹J^ÚYŠ‹™Ù]Z[ÌŠL
HOVLÊ]›ÝÈ™]È\œ›ÜŠ’[˜ÛÜœ™XÝÜ[‘Vˆ›Ü›X]ŠNØÛÛœÝ\‹™Ù]Z[

KO\‹™Ù]Z[
JKÏ^ÜÚ[™ÛU[NˆHJIŒŠKÛ™Ó˜[YNˆHJI
KY\›Ü›X]ˆHJIŽ
K][T\ˆHJIŒMŠ_NÙK˜[YONØÛÛœÝ^ßNÛ]ÏHLÙ›ÜŠÛÎÊ^ØÛÛœÝPÛJ‹˜Y™™\‹JNÚYŠ[
[ÏHLNÙ[Ù^ØÛÛœÝPÛJ‹˜Y™™\‹JK]ÛŠ‹JKRÊ‹KŠNÙOO]›ÚYÙÙK•Ø\›Š[šÛ›ÝÛˆXY\ˆ]šX]H\H	ÚIË˜
N›–ÛOY_ZYŠ
I‹MJHOL
]›ÝÈ™]È\œ›ÜŠ•[œÝ\ÜYš[H›Ü›X]ŠNÜ™]\›žÝ™\œÚ[ÛŽÜXÎœË‹‹›Ÿ_XÛÛœÝROLM‹LÏLORKLKPOJORJKLNÙ[˜Ý[ÛˆŒÊ‹J^Û]LÙ›ÜŠ]ÏLÜÏ]NÊÊÜÊJÏOL–ÜÏŒ×IŒO
ÉÊJI‰ŠVÝ
Ê×O\ÊNØÛÛœÝO]LNÙ›ÜŠÝ]NÊYVÝ
Ê×OLÜ™]\›ˆ_Y[˜Ý[ÛˆÌÊŠ^Ù›ÜŠ]OLÙOÝŽÙJÊÊ\–ÙWO^ßK–ÙWK›[L–ÙWK›]L–ÙWKœ[[Y[˜Ý[ÛˆÐJ‹KKÊ^Ù›ÜŠÝŽÊYOYOJKÊK
ÏNÜ™]\›ˆO\‹Û™O	ŠOŠKLKÎ™KÎ_Y[˜Ý[Ûˆ[J‹KJ^Ü™]\›ˆ\JJKJÏNØÎœ‹Î™__Y[˜Ý[ÛˆJ‹KKË‹Ë
^ÚYŠOYJ^ÚYŠO
^ØÛÛœÝÏS[JKËŠNÝWË˜ËOWË›ßZKONÛ]]šNÚYŠ[™]ÈZ[\œ˜^JÙ—JVÌK˜[YJÙš
\™]\›ˆ[ØÛÛœÝ[ÖÛ˜[YKLWNÙ›ÜŠÙ‹KHŒÊ[ÖÛ˜[YJÊ×OYY[ÙHYŠ˜[YO
[ÖÛ˜[YJÊ×O\ŽÙ[ÙH™]\›ˆ[Ü™]\›žØÎÎš__XÛÛœÝ˜Ï[™]È\œ˜^JNJNÙ[˜Ý[ÛˆŒÊŠ^Ù›ÜŠ]LÝMNÊÊÝ
^˜ÖÝOLÙ›ÜŠ]LÝXÎÊÊÝ
^˜ÖÜ–ÝWJÏLNÛ]OLÙ›ÜŠ]MNÝŒËK]
^ØÛÛœÝOYJÞ˜ÖÝOŒNÞ˜ÖÝOYKOZ_Y›ÜŠ]LÝXÎÊÊÝ
^ØÛÛœÝO\–ÝNÚOŒ	‰Š–ÝOZ_˜ÖÚWJÊÏŠ__Y[˜Ý[ÛˆLÊ‹KKËŠ^ØÛÛœÝÏYNÛ]LLÙ›ÜŠÚO\ÎÚJÊÊ^ÚYŠË˜[YKYK˜[YO
\™]\›ŽÛ][ÐJ‹‹ÊNØÛÛœÝY‹›ÚYŠY‹˜ËY‹›Ë–ÚWOYOTÒJ^ÚYŠË˜[YKYK˜[YO
]›ÝÈ™]È\œ›ÜŠ‘\œ›Üˆ[ˆY•[œXÚÑ[˜ÕX›HŠNÙ[ÐJ‹ÊNÛ]ÏY‹›
ÔÎÚYŠY‹˜ËY‹›ËJ×ÏœÊÌJ]›ÝÈ™]È\œ›ÜŠ‘\œ›Üˆ[ˆY•[œXÚÑ[˜ÕX›HŠNÙ›ÜŠ×ËKNÊ[–ÚJÊ×OLÚKK_Y[ÙHYŠT›J^Û]ÏYT›JÌŽÚYŠJ×ÏœÊÌJ]›ÝÈ™]È\œ›ÜŠ‘\œ›Üˆ[ˆY•[œXÚÑ[˜ÕX›HŠNÙ›ÜŠ×ËKNÊ[–ÚJÊ×OLÚKK__VŒÊŠ_Y[˜Ý[Ûˆ’JŠ^Ü™]\›ˆ‰ŒßY[˜Ý[ÛˆRJŠ^Ü™]\›ˆŸY[˜Ý[Ûˆ	Ê‹KJ^Ù›ÜŠÙO]ÙJÊÊ^ØÛÛœÝÏRRJ–ÙWJKT’J–ÙWJNÚYŠÏ›Š]›ÝÈ™]È\œ›ÜŠ’[˜[YX›H[žHŠNÚYŠ”ØJ^ØÛÛœÝÏZVÜÏ›‹TØWNÚYŠË›[Š]›ÝÈ™]È\œ›ÜŠ’[˜[YX›H[žHŠNÚYŠË›]
ÊËËœ
^ØÛÛœÝ[ËœÛËœ[™]È\œ˜^JË›]
NÙ›ÜŠ]LÚË›]LNÊÊÚ
[ËœÚO[Ú_Y[ÙHËœ[™]È\œ˜^JJNÛËœÛË›]LWOY_Y[ÙHYŠŠ^Û]ÏLÙ›ÜŠ]LOØK[ŽÛŒÛKJ^ØÛÛœÝZVÊÏØK[ŠJÛ×NÚYŠ›[Ÿœ
]›ÝÈ™]È\œ›ÜŠ’[˜[YX›H[žHŠNÚ›[[‹›]YKÊÊß__\™]\›ˆLY[˜Ý[ÛˆŒÊ‹KKË‹Ë
^Û]LLØÛÛœÝÏ[ËSX][˜ÊK˜[YJÊÊÍÊKÎ
NÙ›ÜŠÚK˜[YOÊ^Û]S[J‹JNÙ›ÜŠ]‹˜Ë]‹›ÎÙTØNÊ^ØÛÛœÝY™TØI›KYVÞNÚYŠ›[Š^ÙOU›[ŽØÛÛœÝO[J›]‹‹KÊNÞI‰Š^K˜Ë^K›Ê_Y[Ù^ÚYŠUœ
]›ÝÈ™]È\œ›ÜŠšY‘XÛÙH\ÜÝY\ÈŠNÛ]NÙ›ÜŠOLÞO›]ÞJÊÊ^ØÛÛœÝT’J–ÕœÞWWJNÙ›ÜŠÙ‰‰šK˜[YOÊ]S[J‹JK]‹˜Ë]‹›ÎÚYŠT‰‰’RJ–ÕœÞWWJOOJ™T‰ŠOŠKLJJ^ÙOTŽØÛÛœÝO[JœÞWK‹‹KÊNÒI‰ŠRK˜ËRK›ÊNØœ™XZß_ZYŠOOU›]
]›ÝÈ™]È\œ›ÜŠ’Y‘XÛÙH\ÜÝY\ÈŠ___XÛÛœÝÏN\ÉÎÙ›ÜŠYËOYÎÙŒÊ^ØÛÛœÝYVÙØKY	›WNÚYŠ‹›[Š^ÙO]‹›[ŽØÛÛœÝ[J‹›]‹‹KÊNÞ	‰Š^˜Ë^›Ê_Y[ÙH›ÝÈ™]È\œ›ÜŠ’Y‘XÛÙH\ÜÝY\ÈŠ_\™]\›ˆLY[˜Ý[ÛˆSŠ‹KKËŠ^ØÛÛœÝÏ^Ý˜[YNŒK]˜[YK]ÛŠK
K]ÛŠK
NÝ˜[YJÏMØÛÛœÝ]ÛŠK
NÚYŠ˜[YJÏM\Xß\XÊ]›ÝÈ™]È\œ›ÜŠ•Ü›Û™ÈQ—ÑSÔÒV‘HŠNØÛÛœÝÏ[™]È\œ˜^JXÊK[™]È\œ˜^JÝŠNÒÌÊ
NØÛÛœÝÏZKJ˜[YK[
NÚYŠLÊ‹Ë‹ÊKŽ
ŠKJ˜[YK[
JJ]›ÝÈ™]È\œ›ÜŠ•Ü›Û™ÈY•[˜ÛÛ\™\ÜÈŠNÉÊË‹
KŒÊË‹‹‹ËÊ_Y[˜Ý[ÛˆJŠ^Ü™]\›ˆ‰MLÍ_Y[˜Ý[ÛˆJŠ^ØÛÛœÝOQJŠNÜ™]\›ˆOŒÌÍÏÙKMMLÍŽ™_Y[˜Ý[Ûˆ›
‹J^ØÛÛœÝ[JŠKÏ[JJK]
ÊÉŒJJÊÏŒJKÏ[‹[‹\ÎÜ™]\›žØN›ËŽ›_Y[˜Ý[Ûˆ›
‹J^ØÛÛœÝQJŠKOQJJKÏ]JOŒJI˜PNÜ™]\›žØNšJÜË\LÉ˜PKŽœß_Y[˜Ý[ÛˆŠ‹KKË‹Ê^ØÛÛœÝ[ÏMŒÎ]œÏÜÎÛ]LKÎÙ›ÜŠÙZÊYLNÙ›ÜŠLKY‹LNÙLNÊ^×ÏLØÛÛœÝWÊÛŠŠËY
KÏ[Š™‹[Š™ZJ™‹ZJ™Û]K‹KÎÙ›ÜŠ×Ï\×ÊÏ]Š^Û]OWÎØÛÛœÝWÊÚJŠY
NÙ›ÜŠÐOTÐJÏU
^ØÛÛœÝPJÞOPJÙËUJÞÚYŠ
^Û]Ï\›
–ÐJÙWK–ÕJÙWJNÞOZË˜KOZË˜‹Ï\›
–Ñ
ÙWK–ÞŠÙWJKZË˜KÏZË˜‹Ï\›
KŠK–ÐJÙWOZË˜K–Ñ
ÙWOZË˜‹Ï\›
KÊK–ÕJÙWOZË˜K–ÞŠÙWOZË˜ŸY[Ù^Û]Ï[›
–ÐJÙWK–ÕJÙWJNÞOZË˜KOZË˜‹Ï[›
–Ñ
ÙWK–ÞŠÙWJKZË˜KÏZË˜‹Ï[›
KŠK–ÐJÙWOZË˜K–Ñ
ÙWOZË˜‹Ï[›
KÊK–ÕJÙWOZË˜K–ÞŠÙWOZË˜Ÿ_ZYŠ	™Š^ØÛÛœÝPJÙÎÛ]NÛÕO\›
–ÐJÙWK–Ñ
ÙWJN•O[›
–ÐJÙWK–Ñ
ÙWJKOUK˜K–Ñ
ÙWOUK˜‹–ÐJÙWO^__ZYŠÉ™Š^Û]OWÎØÛÛœÝWÊÚJŠY
NÙ›ÜŠÐOTÐJÏU
^ØÛÛœÝPJÞÛ]NÛÕO\›
–ÐJÙWK–Ñ
ÙWJN•O[›
–ÐJÙWK–Ñ
ÙWJKOUK˜K–Ñ
ÙWOUK˜‹–ÐJÙWO^__YY‹L_\™]\›ˆßY[˜Ý[ÛˆSŠ‹K
^Ù›ÜŠ]OLÚOÊÊÚJYVÚWO\–ÙVÚWW_Y[˜Ý[ÛˆÓŠŠ^Û]O\‹˜ž]S[™ÝØÛÛœÝV×NÛ]OLØÛÛœÝÏ[™]È]UšY]ÊŠNÙ›ÜŠÙOŒÊ^ØÛÛœÝ\Ë™Ù][
JÊÊNÚYŠ
^ØÛÛœÝÏK[ŽÙKO[ÊÌNÙ›ÜŠ]LÛÎÛ
ÊÊ]œ\Ú
Ë™Ù]Z[
JÊÊJ_Y[Ù^ØÛÛœÝÏ[ŽÙKOLŽØÛÛœÝ\Ë™Ù]Z[
JÊÊNÙ›ÜŠ]LÚÊÌNÚ
ÊÊ]œ\Ú

__\™]\›ˆY[˜Ý[ÛˆÒJŠ^Ü™]\›ˆ™]È]UšY]Ê‹˜\œ˜^K˜Y™™\‹‹›Ù™œÙ]˜[YK‹œÚ^™J_Y[˜Ý[Ûˆ“ŠŠ^ØÛÛœÝO\‹šY]Ù\‹˜Y™™\‹œÛXÙJ‹›Ù™œÙ]˜[YK‹›Ù™œÙ]˜[YJÜ‹œÚ^™JK[™]ÈZ[\œ˜^JÓŠJJKO[™]ÈZ[\œ˜^J›[™Ý
NÜ™]\›ˆRJ
KRJJK™]È]UšY]ÊK˜Y™™\Š_Y[˜Ý[ÛˆÐJŠ^ØÛÛœÝO\‹˜\œ˜^KœÛXÙJ‹›Ù™œÙ]˜[YK‹›Ù™œÙ]˜[YJÜ‹œÚ^™JKY™›]K[ž›X”Þ[˜ÊJKO[™]ÈZ[\œ˜^J›[™Ý
NÜ™]\›ˆRJ
KRJJK™]È]UšY]ÊK˜Y™™\Š_Y[˜Ý[Ûˆ“ŠŠ^ØÛÛœÝO\‹˜\œ˜^KœÛXÙJ‹›Ù™œÙ]˜[YK‹›Ù™œÙ]˜[YJÜ‹œÚ^™JKY™›]K[ž›X”Þ[˜ÊJKO\‹›[™\Êœ‹˜Ú[›™[Êœ‹ÚYÏ\‹\OOLOÛ™]ÈZ[M\œ˜^JJN›™]ÈZ[Ì\œ˜^JJNÛ]LÏLØÛÛœÝ[™]È\œ˜^J
NÙ›ÜŠ]LÚ‹›[™\ÎÚ
ÊÊY›ÜŠ]LÙ‹˜Ú[›™[ÎÙŠÊÊ^Û]LÜÝÚ]Ú
‹\J^ØØ\ÙHN›ÌO[‹ÌWO[ÌJÜ‹ÚY[ÌWJÜ‹ÚYÙ›ÜŠ]ÏL×Ï‹ÚYÊÊ×Ê^ØÛÛœÝ]ÛÌJÊ×OÛÌWJÊ×NÙ
Ï\ÖÛ×OYÊÊßXœ™XZÎØØ\ÙHŽ›ÌO[‹ÌWO[ÌJÜ‹ÚYÌ—O[ÌWJÜ‹ÚY[Ì—JÜ‹ÚYÙ›ÜŠ]ÏL×Ï‹ÚYÊÊ×Ê^ØÛÛœÝ]ÛÌJÊ×OÛÌWJÊ×OMŸÛÌ—JÊ×OÙ
Ï\ÖÛ×OYÊÊßXœ™XZß_\™]\›ˆ™]È]UšY]ÊË˜Y™™\Š_Y[˜Ý[ÛˆSŠŠ^ØÛÛœÝO\‹šY]Ù\‹^Ý˜[YNœ‹›Ù™œÙ]˜[Y_KO[™]ÈZ[M\œ˜^J‹ÚY
œ‹œØØ[›[™P›ØÚÔÚ^™JŠ‹˜Ú[›™[Êœ‹\JJKÏ[™]ÈZ[\œ˜^JJNÛ]LØÛÛœÝÏ[™]È\œ˜^J‹˜Ú[›™[ÊNÙ›ÜŠ]LÝ‹˜Ú[›™[ÎÝŠÊÊ[ÖÝ—O^ßKÖÝ—KœÝ\[‹ÖÝ—K™[™[ÖÝ—KœÝ\ÖÝ—K›ž\‹ÚYÖÝ—K›žO\‹›[™\ËÖÝ—KœÚ^™O\‹\KŠÏ[ÖÝ—K›ž
›ÖÝ—K›žJ›ÖÝ—KœÚ^™NØÛÛœÝPJK
KPJK
NÚYŠ\J]›ÝÈ™]È\œ›ÜŠ•Ü›Û™ÈV—ÐÓÓT‘TÔÒSÓˆ’UPTÔÒV‘HŠNÚYŠZ
Y›ÜŠ]LÝ[
ÌNÝŠÊÊ\ÖÝŠÛOVJK
NØÛÛœÝ[™]ÈZ[M\œ˜^J]JKZŒÊËŠKÏ]ÛŠK
NÙSŠ‹˜\œ˜^KKËKŠNÙ›ÜŠ]LÝ‹˜Ú[›™[ÎÊÊÝŠ^ØÛÛœÝ[ÖÝ—NÙ›ÜŠ]LÕÖÝ—KœÚ^™NÊÊÕ
]ŠKœÝ\
Õ›žœÚ^™K›žK›ž
žœÚ^™K
_ZSŠ‹KŠNÛ]LØÛÛœÝÏ[™]ÈZ[\œ˜^JK˜Y™™\‹˜ž]S[™Ý
NÙ›ÜŠ]LÝ‹›[™\ÎÝŠÊÊY›ÜŠ]LÞ‹˜Ú[›™[ÎÞ
ÊÊ^ØÛÛœÝ[ÖÞKOU›ž
•œÚ^™K[™]ÈZ[\œ˜^JK˜Y™™\‹™[™
[J[
NÙËœÙ]
‹
K
Ï^J[™[™
Ï^_\™]\›ˆ™]È]UšY]ÊË˜Y™™\Š_]˜\ˆÜŽÊ[˜Ý[ÛŠŠ^Ü–Ü‹‘›Ø]LOH‘›Ø]‹–Ü‹’[‘›Ø]LWOH’[‘›Ø]ŸJJÜŸ
Ü^ßJJNØÛ\ÜÈßY‘Y˜][Ý]]\OZÜ‹’[‘›Ø]Ù‘‘“UU\›HšÎ‹ËÝ[œÙË˜ÛÛKÙ™›]PŽŒˆŽØ\Þ[˜È[˜Ý[ÛˆRJ‹KJ^ØÛÛœÝÏ^ÜÚ^™NŒšY]Ù\Ž™K\œ˜^N›™]ÈZ[\œ˜^JK˜Y™™\ŠKÙ™œÙ]ÚYœ‹™]UÚ[™ÝËžX^\‹™]UÚ[™ÝËžZ[ŠÌKZYÚœ‹™]UÚ[™ÝËžSX^\‹™]UÚ[™ÝËžSZ[ŠÌKÚ[›™[Îœ‹˜Ú[›™[Ë›[™ÝÚ[›™[[™SÙ™œÙ]ÎžßKØØ[“Ü™\ŽŠ
OOŒž]\Ô\“[™NŒÝ][™UÚYŒ[™\ÎŒØØ[›[™P›ØÚÔÚ^™NŒ[œ]Ú^™N›[\NŒ[˜ÛÛ\™\ÜÎ›[Ù]\ŽŠ
OOŒ›Ü›X]KÝ]]Ú[›™[ÎŒXÛÙPÚ[›™[ÎžßK›ØÚÐÛÝ[›[ž]P\œ˜^N›[[™X\”ÜXÙNˆLK^\™U\NŒNÜÝÚ]Ú
‹˜ÛÛ\™\ÜÚ[ÛŠ^ØØ\ÙH›‹““×ÐÓÓT‘TÔÒSÓŽœË›[™\ÏLKË[˜ÛÛ\™\ÜÏPÒNØœ™XZÎØØ\ÙH›‹”“WÐÓÓT‘TÔÒSÓŽœË›[™\ÏLKË[˜ÛÛ\™\ÜÏ\“ŽØœ™XZÎØØ\ÙH›‹–’T×ÐÓÓT‘TÔÒSÓŽœË›[™\ÏLKË[˜ÛÛ\™\ÜÏXÐK]ØZ]“ØYØÜš\\Þ[˜Ê‘‘“UU\›
NØœ™XZÎØØ\ÙH›‹–’TÐÓÓT‘TÔÒSÓŽœË›[™\ÏLM‹Ë[˜ÛÛ\™\ÜÏXÐK]ØZ]“ØYØÜš\\Þ[˜Ê‘‘“UU\›
NØœ™XZÎØØ\ÙH›‹”V—ÐÓÓT‘TÔÒSÓŽœË›[™\ÏLÌ‹Ë[˜ÛÛ\™\ÜÏXSŽØœ™XZÎØØ\ÙH›‹”ŒÐÓÓT‘TÔÒSÓŽœË›[™\ÏLM‹Ë[˜ÛÛ\™\ÜÏ[“‹]ØZ]“ØYØÜš\\Þ[˜Ê‘‘“UU\›
NØœ™XZÎÙY˜][›ÝÈ™]È\œ›ÜŠ›–Ü‹˜ÛÛ\™\ÜÚ[Û—JÈˆ\È[œÝ\ÜYŠ_\ËœØØ[›[™P›ØÚÔÚ^™O\Ë›[™\ÎØÛÛœÝ^ßNÙ›ÜŠÛÛœÝˆÙˆ‹˜Ú[›™[Ê\ÝÚ]Ú
‹›˜[YJ^ØØ\ÙH”ˆŽ˜Ø\ÙH‘ÈŽ˜Ø\ÙHˆŽ˜Ø\ÙHHŽ›–Ù‹›˜[YWOHLË\OY‹œ^[\NØœ™XZÎØØ\ÙH–HŽ›–Ù‹›˜[YWOHLË\OY‹œ^[\NØœ™XZß[]ÏHLNÚYŠ‹”‰‰›‹‘É‰›‹‰‰›‹J\Ë›Ý]]Ú[›™[ÏMË™XÛÙPÚ[›™[Ï^ÔŽŒÎŒKŽŒ‹NŒßNÙ[ÙHYŠ‹”‰‰›‹‘É‰›‹Š[ÏHLË›Ý]]Ú[›™[ÏMË™XÛÙPÚ[›™[Ï^ÔŽŒÎŒKŽŒ‹NŒßNÙ[ÙHYŠ‹”‰‰›‹‘Ê\Ë›Ý]]Ú[›™[ÏL‹Ë™XÛÙPÚ[›™[Ï^ÔŽŒÎŒ_NÙ[ÙHYŠ‹”Š\Ë›Ý]]Ú[›™[ÏLKË™XÛÙPÚ[›™[Ï^ÔŽŒNÙ[ÙHYŠ‹–J\Ë›Ý]]Ú[›™[ÏLKË™XÛÙPÚ[›™[Ï^ÖNŒNÙ[ÙH›ÝÈ™]È\œ›ÜŠ‘V“ØY\‹œ\œÙNˆš[HÛÛZ[œÈ[œÝ\ÜY]HÚ[›™[ËˆŠNÚYŠË\OOOLJ\ÝÚ]Ú
J^ØØ\ÙHÜ‹‘›Ø]œË™Ù]\SÌËËš[œ]Ú^™O][Øœ™XZÎØØ\ÙHÜ‹’[‘›Ø]œË™Ù]\PKËš[œ]Ú^™O][Øœ™XZßY[ÙHYŠË\OOOLŠ\ÝÚ]Ú
J^ØØ\ÙHÜ‹‘›Ø]œË™Ù]\WÜËËš[œ]Ú^™OP[NØœ™XZÎØØ\ÙHÜ‹’[‘›Ø]œË™Ù]\SËËš[œ]Ú^™OP[_Y[ÙH›ÝÈ™]È\œ›ÜŠ•[œÝ\ÜY^[\HŠÜË\JÈˆ›ÜˆŠÜ‹˜ÛÛ\™\ÜÚ[ÛŠNÜË˜›ØÚÐÛÝ[\ËšZYÚÜËœØØ[›[™P›ØÚÔÚ^™NÙ›ÜŠ]LÙË˜›ØÚÐÛÝ[ÙŠÊÊ]ÌÊK
NØÛÛœÝ\ËÚY
œËšZYÚ
œË›Ý]]Ú[›™[ÎÜÝÚ]Ú
J^ØØ\ÙHÜ‹‘›Ø]œË˜ž]P\œ˜^O[™]È›Ø]Ì\œ˜^J
KË^\™U\OLKÉ‰œË˜ž]P\œ˜^K™š[
K
NØœ™XZÎØØ\ÙHÜ‹’[‘›Ø]œË˜ž]P\œ˜^O[™]ÈZ[M\œ˜^J
KË^\™U\OL‹É‰œË˜ž]P\œ˜^K™š[
MLÍŒ
NØœ™XZÎÙY˜][›ÝÈ™]È\œ›ÜŠ•[œÝ\ÜY\NˆŠÚJ_[]LÙ›ÜŠÛÛœÝˆÙˆ‹˜Ú[›™[Ê\Ë™XÛÙPÚ[›™[ÖÙ‹›˜[YWHOO]›ÚY	‰ŠË˜Ú[›™[[™SÙ™œÙ]ÖÙ‹›˜[YWOZ
œËÚY
K
ÏY‹œ^[\JŒŽÜ™]\›ˆË˜ž]\Ô\“[™O\ËÚY
šË›Ý][™UÚY\ËÚY
œË›Ý]]Ú[›™[Ë‹›[™SÜ™\OOH’SÔ‘PTÒS‘×ÖHÜËœØØ[“Ü™\YO™ŽœËœØØ[“Ü™\YOœËšZYÚLKY‹Ë›Ý]]Ú[›™[ÏOMÊË™›Ü›X]MKË›[™X\”ÜXÙOHL
NŠË™›Ü›X]M‹Ë›[™X\”ÜXÙOHLJKßY[˜Ý[ÛˆJ‹KJ^ØÛÛœÝÏ^Ý˜[YNŒNÙ›ÜŠ]LÛ‹šZYÚÜ‹œØØ[›[™P›ØÚÔÚ^™NÛŠÊÊ^ØÛÛœÝÏRŠJKYK™]UÚ[™ÝËžSZ[ŽÜ‹œÚ^™O]ÛŠJK‹›[™\Ï[ÊÜ‹œØØ[›[™P›ØÚÔÚ^™Oœ‹šZYÚÜ‹šZYÚ[Îœ‹œØØ[›[™P›ØÚÔÚ^™NØÛÛœÝ\‹œÚ^™O‹›[™\Êœ‹˜ž]\Ô\“[™I‰œ‹[˜ÛÛ\™\ÜÏÜ‹[˜ÛÛ\™\ÜÊŠNÒJŠNÚK˜[YJÏ\‹œÚ^™NÙ›ÜŠ]LÙ‹œØØ[›[™P›ØÚÔÚ^™NÙŠÊÊ^ØÛÛœÝ[Šœ‹œØØ[›[™P›ØÚÔÚ^™KÏYŠÜ‹œØØ[“Ü™\Š
NÚYŠÏ\‹šZYÚ
XÛÛ[YNØÛÛœÝYŠœ‹˜ž]\Ô\“[™KÏJ‹šZYÚLKWÊJœ‹›Ý][™UÚYÙ›ÜŠ]LÝ‹˜Ú[›™[ÎÝŠÊÊ^ØÛÛœÝYK˜Ú[›™[ÖÝ—K›˜[YK\‹˜Ú[›™[[™SÙ™œÙ]ÖÞKO\‹™XÛÙPÚ[›™[ÖÞNÚYŠHOO]›ÚY
^ÜË˜[YO\
ÕÙ›ÜŠ]LÔ‹ÚYÔŠÊÊ^ØÛÛœÝOYÊÔŠœ‹›Ý]]Ú[›™[ÊÞNÜ‹˜ž]P\œ˜^I‰Š‹˜ž]P\œ˜^VÒWO\‹™Ù]\ŠÊJ______XÛ\ÜÈÓžØÛÛœÝXÝÜŠ
^Ý\ËœÝ\ÜØ\ØØY\ÏHL_[ØYÝX™Q]JKKËŠ^Ý›ÝÈ‹™^ˆ›ÝÝ\ÜY[ˆÝX™KˆŸ[ØY]JKJ^ØÛÛœÝÏ[™]È]UšY]ÊK˜Y™™\ŠK^Ý˜[YNŒKÏX’JËŠNÓRJËË‹‘Y˜][Ý]]\JK[ŠOžÑJËËŠNØÛÛœÝ[Ë™]UÚ[™ÝËžX^[Ë™]UÚ[™ÝËžZ[ŠÌK[Ë™]UÚ[™ÝËžSX^[Ë™]UÚ[™ÝËžSZ[ŠÌNÚJ‹™Ù[™\˜]SZ\X\ËLK

OOžØÛÛœÝ]™Ù][™Ú[™J
NÝ™›Ü›X][Ë™›Ü›X]\O[^\™U\Kš[™\OHLK—ÙØ[[XTÜXÙOH[Ë›[™X\”ÜXÙK˜ž]P\œ˜^I‰™—Ý\ØY]UÕ^\™Q\™XÝJ˜ž]P\œ˜^K›ÚYL
_J_JK˜Ø]Ú
OžÙÙK‘\œ›ÜŠ‘˜Z[YÈØYVˆ^\™Nˆ‹
_J__X\Þ[˜È[˜Ý[ÛˆŠŠ^ØÛÛœÝO[™]È]UšY]ÊŠK^Ý˜[YNŒKOX’JK
NÝž^ØÛÛœÝÏX]ØZ]RJKKÜ‹‘›Ø]
NÜ™]\›ˆJËKK
KË˜ž]P\œ˜^OÞÝÚYšK™]UÚ[™ÝËžX^ZK™]UÚ[™ÝËžZ[ŠÌKZYÚšK™]UÚ[™ÝËžSX^ZK™]UÚ[™ÝËžSZ[ŠÌK]N›™]È›Ø]Ì\œ˜^JË˜ž]P\œ˜^J_NŠÙK‘\œ›ÜŠ‘˜Z[YÈXÛÙHVˆ]Nˆ›Èž]H\œ˜^H]˜Z[X›KˆŠKÝÚYŒZYÚŒ]N›[J_XØ]Ú
Ê^ÙÙK‘\œ›ÜŠ‘˜Z[YÈØYVˆ]Nˆ‹Ê_\™]\›žÝÚYŒZYÚŒ]N›[_XÛÛœÝÓSØš™XÝ™œ™Y^™JØš™XÝ™Yš[™T›Ü\J××Ü›Ý××Î›[™XY^‘]P\Þ[˜Î›‹Ñ^•^\™SØY\Ž›ÓŸKÞ[X›ÛÔÝš[™ÕYËÝ˜[YNˆ“[Ù[HŸJJNÙ[˜Ý[ÛˆJŠ^Ü™]\›ˆX]™›ÛÜŠ‹Î
_Y[˜Ý[ÛˆJŠ^Ü™]\›ˆO‰NXÛ\ÜÈžØÛÛœÝXÝÜŠJ^Ý\ËœÚ^™OYK\Ë—Øž]P\œ˜^O[™]ÈZ[\œ˜^JX]˜ÙZ[
\ËœÚ^™KÎ
J_YÙ]
J^ÚYŠO]\ËœÚ^™J]›ÝÈ™]È˜[™ÙQ\œ›ÜŠš][™^Ý]Ùˆ˜[™ÙHŠNØÛÛœÝZJJKOYJJNÜ™]\›Š\Ë—Øž]P\œ˜^VÝIšJHOOL\Ù]
K
^ÚYŠO]\ËœÚ^™J]›ÝÈ™]È˜[™ÙQ\œ›ÜŠš][™^Ý]Ùˆ˜[™ÙHŠNØÛÛœÝOZJJKÏYJJNÝÝ\Ë—Øž]P\œ˜^VÚW_\Î\Ë—Øž]P\œ˜^VÚWI_œß_Y[˜Ý[Ûˆ“ŠŠ^ØÛÛœÝOV×K\‹›[™ÝÌÎÙ›ÜŠ]LÚÚ
ÊÊYKœ\Ú
Ü–Ú
Œ×K–Ú
ŒÊÌWK–Ú
ŒÊÌ—WJNØÛÛœÝO[™]ÈX\Ù›ÜŠ]LÚK›[™ÝÚ
ÊÊ^ØÛÛœÝYVÚNÙ›ÜŠÛÛœÝÙˆŠ^Û]ÏZK™Ù]

N×ßKœÙ]
ÏV×JKËœ\Ú

__XÛÛœÝÏ[™]ÈŠ
KV×KÏZOžØÛÛœÝVÚNÙ›ÜŠÙ‹›[™ÝŒÊ^ØÛÛœÝY‹œÜ

NÚYŠ\Ë™Ù]

J^ÜËœÙ]
L
K‹œ\Ú
VÙJNÙ›ÜŠÛÛœÝÈÙˆVÙJ^ØÛÛœÝZK™Ù]
ÊNÚYŠ\
\™]\›ŽÙ›ÜŠÛÛœÝÈÙˆ
\Ë™Ù]
Ê_‹œ\Ú
Ê____NÙ›ÜŠ]LÚÚ
ÊÊ\Ë™Ù]

_Ê
NÛ]LÙ›ÜŠÛÛœÝÙˆŠ\–Û
Ê×OZÌK–Û
Ê×OZÌWK–Û
Ê×OZÌ—_XÛÛœÝSSØš™XÝ™œ™Y^™JØš™XÝ™Yš[™T›Ü\J××Ü›Ý××Î›[Ü[Z^™R[™XÙ\Î™“ŸKÞ[X›ÛÔÝš[™ÕYËÝ˜[YNˆ“[Ù[HŸJJKOH˜›Û™\ÑXÛ\˜][Ûˆ‹OXÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”ÏŒˆÚY›™YˆTÑWÕ‘T•VÔSS‘Â˜]šX]HX]šXÙ\Ò[™XÙ\Èˆ™XÍŽØ]šX]HX]šXÙ\ÕÙZYÚÈˆ™XÍŽÂˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”Ï˜]šX]HX]šXÙ\Ò[™XÙ\Ñ^˜Hˆ™XÍŽØ]šX]HX]šXÙ\ÕÙZYÚÑ^˜Hˆ™XÍŽÂˆÙ[™Y‚ˆÙ[™Y‚ˆÚY›™YˆRÑQÕ‘T•VÐS’SPUSÓ—ÕVT‘BˆÚY™Yˆ“Ó‘UVT‘B˜\ˆ›Û™TØ[\\ˆˆ^\™WÌ™ŒÌŽÝ[šY›Ü›H›Û™U^\™R[™›Èˆ™XÌ™ŽÂˆÙ[ÙB[šY›Ü›HP›Û™\Èˆ\œ˜^OX]‹›Û™\Ô\“Y\ÚŽÂˆÙ[™Y‚ˆÚY™Yˆ“Ó‘T×Õ‘SÐÒUWÑSP“Q[šY›Ü›HT™]š[Ý\Ð›Û™\Èˆ\œ˜^OX]‹›Û™\Ô\“Y\ÚŽÂˆÙ[™Y‚ˆÚY™Yˆ“Ó‘UVT‘B™›ˆ™XYX]š^œ›ÛT˜]ÔØ[\\ŠÛ\ˆ^\™WÌ™ŒÌ‹[™^ˆŒÌŠKO›X]‚žÛ]Ù™œÙ]ZLÌŠ[™^
JÈ›]^\™UÚYZLÌŠ[šY›Ü›\Ë˜›Û™U^\™R[™›Ëž
NÛ]O[Ù™œÙ]Ý^\™UÚYÛ][Ù™œÙ]	H^\™UÚYÛ]L]^\™SØY
Û\™XÌLÌŠ
ÌJK
NÛ]LO]^\™SØY
Û\™XÌLÌŠ
ÌKJK
NÛ]L]^\™SØY
Û\™XÌLÌŠ
Ì‹JK
NÛ]LÏ]^\™SØY
Û\™XÌLÌŠ
ÌËJK
NÜ™]\›ˆX]ŠLLKL‹LÊNßBˆÙ[™Y‚ˆÙ[™Y‚ˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÔW_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÔWOTJNØÛÛœÝÒO^Û˜[YN”KÚY\Ž”_KÛOH˜˜ZÙY™\^[š[X][Û‘XÛ\˜][Ûˆ‹ÒOXÚY™YˆRÑQÕ‘T•VÐS’SPUSÓ—ÕVT‘B[šY›Ü›H˜ZÙY™\^[š[X][Û•[YNˆŒÌŽÝ[šY›Ü›H˜ZÙY™\^[š[X][Û”Ù][™ÜÎˆ™XÍŒÌŽÝ˜\ˆ˜ZÙY™\^[š[X][Û•^\™Hˆ^\™WÌ™ŒÌŽÂˆÚY™YˆS”ÕSÑTÂ˜]šX]H˜ZÙY™\^[š[X][Û”Ù][™ÜÒ[œÝ[˜ÙYˆ™XÍŒÌŽÂˆÙ[™Y‚™›ˆ™XYX]š^œ›ÛT˜]ÔØ[\\•U
Û\ˆ^\™WÌ™ŒÌ‹[™^ˆŒÌ‹œ˜[YHˆŒÌŠKO›X]ŒÌ‚žÛ]Ù™œÙ]ZLÌŠ[™^
JÛ]œ˜[YUUZLÌŠœ˜[YJNÛ]L]^\™SØY
Û\™XÌLÌŠÙ™œÙ]
Ìœ˜[YUUŠK
NÛ]LO]^\™SØY
Û\™XÌLÌŠÙ™œÙ]
ÌKœ˜[YUUŠK
NÛ]L]^\™SØY
Û\™XÌLÌŠÙ™œÙ]
Ì‹œ˜[YUUŠK
NÛ]LÏ]^\™SØY
Û\™XÌLÌŠÙ™œÙ]
ÌËœ˜[YUUŠK
NÜ™]\›ˆX]ŒÌŠLLKL‹LÊNßBˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÝÛW_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÝÛWOSÒJNØÛÛœÝO^Û˜[YNÛKÚY\Ž“Ò_KÛOH˜Û\[™U™\^XÛ\˜][Ûˆ‹’OXÚY™YˆÓTS‘B[šY›Ü›HÛ\[™Nˆ™XÍŒÌŽÝ˜\žZ[™ÈÛ\\Ý[˜ÙNˆŒÌŽÂˆÙ[™Y‚ˆÚY™YˆÓTS‘L‚[šY›Ü›HÛ\[™LŽˆ™XÍŒÌŽÝ˜\žZ[™ÈÛ\\Ý[˜ÙLŽˆŒÌŽÂˆÙ[™Y‚ˆÚY™YˆÓTS‘LÂ[šY›Ü›HÛ\[™LÎˆ™XÍŒÌŽÝ˜\žZ[™ÈÛ\\Ý[˜ÙLÎˆŒÌŽÂˆÙ[™Y‚ˆÚY™YˆÓTS‘M[šY›Ü›HÛ\[™Mˆ™XÍŒÌŽÝ˜\žZ[™ÈÛ\\Ý[˜ÙMˆŒÌŽÂˆÙ[™Y‚ˆÚY™YˆÓTS‘MB[šY›Ü›HÛ\[™MNˆ™XÍŒÌŽÝ˜\žZ[™ÈÛ\\Ý[˜ÙMNˆŒÌŽÂˆÙ[™Y‚ˆÚY™YˆÓTS‘M‚[šY›Ü›HÛ\[™MŽˆ™XÍŒÌŽÝ˜\žZ[™ÈÛ\\Ý[˜ÙMŽˆŒÌŽÂˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÓÛW_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÓÛWOQ’JNØÛÛœÝ^Û˜[YN“ÛKÚY\Ž‘’_KOH™›ÙÕ™\^XÛ\˜][Ûˆ‹’OXÚY™Yˆ“ÑÂ˜\žZ[™È‘›ÙÑ\Ý[˜ÙNˆ™XÌÙŽÂˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÓW_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÓWOS’JNØÛÛœÝRO^Û˜[YN“KÚY\Ž“’_K›OHš[œÝ[˜Ù\ÑXÛ\˜][Ûˆ‹’OXÚY™YˆS”ÕSÑTÂ˜]šX]HÛÜ›ˆ™XÍŒÌŽØ]šX]HÛÜ›Hˆ™XÍŒÌŽØ]šX]HÛÜ›ˆˆ™XÍŒÌŽØ]šX]HÛÜ›Èˆ™XÍŒÌŽÂˆÚY™YˆS”ÕSÑTÐÓÓÔ‚˜]šX]H[œÝ[˜ÙPÛÛÜˆˆ™XÍŒÌŽÂˆÙ[™Y‚ˆÚYˆYš[™Y
S—ÒS”ÕSÑTÊH	‰ˆYYš[™Y
ÓÔ“ÕP“ÊB[šY›Ü›HÛÜ›ˆX]ŒÌŽÂˆÙ[™Y‚ˆÚYˆYš[™Y
‘SÐÒUJHYš[™Y
‘TTÔ×Õ‘SÐÒUJHYš[™Y
‘TTÔ×Õ‘SÐÒUWÓS‘PTŠHYš[™Y
‘SÐÒUWÓS‘PTŠB˜]šX]H™]š[Ý\ÕÛÜ›ˆ™XÍŒÌŽØ]šX]H™]š[Ý\ÕÛÜ›Hˆ™XÍŒÌŽØ]šX]H™]š[Ý\ÕÛÜ›ˆˆ™XÍŒÌŽØ]šX]H™]š[Ý\ÕÛÜ›Èˆ™XÍŒÌŽÂˆÚY™YˆS—ÒS”ÕSÑTÂ[šY›Ü›H™]š[Ý\ÕÛÜ›ˆX]ŒÌŽÂˆÙ[™Y‚ˆÙ[™Y‚ˆÙ[ÙBˆÚYˆYYš[™Y
ÓÔ“ÕP“ÊB[šY›Ü›HÛÜ›ˆX]ŒÌŽÂˆÙ[™Y‚ˆÚYˆYš[™Y
‘SÐÒUJHYš[™Y
‘TTÔ×Õ‘SÐÒUJHYš[™Y
‘TTÔ×Õ‘SÐÒUWÓS‘PTŠHYš[™Y
‘SÐÒUWÓS‘PTŠB[šY›Ü›H™]š[Ý\ÕÛÜ›ˆX]ŒÌŽÂˆÙ[™Y‚ˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÑ›W_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÑ›WOP’JNØÛÛœÝ^Û˜[YN‘›KÚY\Ž’_K›OHš[œÝ[˜Ù\Õ™\^‹’OXÚY™YˆS”ÕSÑTÂ˜\ˆš[˜[ÛÜ›[X]ŒÌŠ™\^[œ]ËÛÜ›™\^[œ]ËÛÜ›K™\^[œ]ËÛÜ›‹™\^[œ]ËÛÜ›ÊNÂˆÚYˆYš[™Y
‘TTÔ×Õ‘SÐÒUJHYš[™Y
‘SÐÒUJHYš[™Y
‘TTÔ×Õ‘SÐÒUWÓS‘PTŠHYš[™Y
‘SÐÒUWÓS‘PTŠB˜\ˆš[˜[™]š[Ý\ÕÛÜ›[X]ŒÌŠ™\^[œ]Ëœ™]š[Ý\ÕÛÜ›™\^[œ]Ëœ™]š[Ý\ÕÛÜ›K™\^[œ]Ëœ™]š[Ý\ÕÛÜ›‹™\^[œ]Ëœ™]š[Ý\ÕÛÜ›ÊNÂˆÙ[™Y‚ˆÚY™YˆS—ÒS”ÕSÑTÂˆÚYˆYYš[™Y
ÓÔ“ÕP“ÊB™š[˜[ÛÜ›][šY›Ü›\ËÛÜ›
™š[˜[ÛÜ›ÂˆÙ[ÙB™š[˜[ÛÜ›[Y\ÚÛÜ›
™š[˜[ÛÜ›ÂˆÙ[™Y‚ˆÚYˆYš[™Y
‘TTÔ×Õ‘SÐÒUJHYš[™Y
‘SÐÒUJHYš[™Y
‘TTÔ×Õ‘SÐÒUWÓS‘PTŠHYš[™Y
‘SÐÒUWÓS‘PTŠB™š[˜[™]š[Ý\ÕÛÜ›][šY›Ü›\Ëœ™]š[Ý\ÕÛÜ›
™š[˜[™]š[Ý\ÕÛÜ›ÂˆÙ[™Y‚ˆÙ[™Y‚ˆÙ[ÙBˆÚYˆYYš[™Y
ÓÔ“ÕP“ÊB˜\ˆš[˜[ÛÜ›][šY›Ü›\ËÛÜ›ÂˆÙ[ÙB˜\ˆš[˜[ÛÜ›[Y\ÚÛÜ›ÂˆÙ[™Y‚ˆÚYˆYš[™Y
‘TTÔ×Õ‘SÐÒUJHYš[™Y
‘SÐÒUJHYš[™Y
‘TTÔ×Õ‘SÐÒUWÓS‘PTŠHYš[™Y
‘SÐÒUWÓS‘PTŠB˜\ˆš[˜[™]š[Ý\ÕÛÜ›][šY›Ü›\Ëœ™]š[Ý\ÕÛÜ›ÂˆÙ[™Y‚ˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÓ›W_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÓ›WOU’JNØÛÛœÝ^Û˜[YN“›KÚY\Ž•’_K[OH˜›Û™\Õ™\^‹’OXÚY›™YˆRÑQÕ‘T•VÐS’SPUSÓ—ÕVT‘BˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”ÏŒ˜\ˆ[™›Y[˜ÙHˆX]ŒÌŽÂˆÚY™Yˆ“Ó‘UVT‘Bš[™›Y[˜ÙO\™XYX]š^œ›ÛT˜]ÔØ[\\Š›Û™TØ[\\‹™\^[œ]Ë›X]šXÙ\Ò[™XÙ\ÖÌJJ™\^[œ]Ë›X]šXÙ\ÕÙZYÚÖÌNÂˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”ÏŒBš[™›Y[˜ÙOZ[™›Y[˜ÙJÜ™XYX]š^œ›ÛT˜]ÔØ[\\Š›Û™TØ[\\‹™\^[œ]Ë›X]šXÙ\Ò[™XÙ\ÖÌWJJ™\^[œ]Ë›X]šXÙ\ÕÙZYÚÖÌWNÂˆÙ[™YˆˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”ÏŒ‚š[™›Y[˜ÙOZ[™›Y[˜ÙJÜ™XYX]š^œ›ÛT˜]ÔØ[\\Š›Û™TØ[\\‹™\^[œ]Ë›X]šXÙ\Ò[™XÙ\ÖÌ—JJ™\^[œ]Ë›X]šXÙ\ÕÙZYÚÖÌ—NÂˆÙ[™YˆˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”ÏŒÂš[™›Y[˜ÙOZ[™›Y[˜ÙJÜ™XYX]š^œ›ÛT˜]ÔØ[\\Š›Û™TØ[\\‹™\^[œ]Ë›X]šXÙ\Ò[™XÙ\ÖÌ×JJ™\^[œ]Ë›X]šXÙ\ÕÙZYÚÖÌ×NÂˆÙ[™YˆˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”Ïš[™›Y[˜ÙOZ[™›Y[˜ÙJÜ™XYX]š^œ›ÛT˜]ÔØ[\\Š›Û™TØ[\\‹™\^[œ]Ë›X]šXÙ\Ò[™XÙ\Ñ^˜VÌJJ™\^[œ]Ë›X]šXÙ\ÕÙZYÚÑ^˜VÌNÂˆÙ[™YˆˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”ÏBš[™›Y[˜ÙOZ[™›Y[˜ÙJÜ™XYX]š^œ›ÛT˜]ÔØ[\\Š›Û™TØ[\\‹™\^[œ]Ë›X]šXÙ\Ò[™XÙ\Ñ^˜VÌWJJ™\^[œ]Ë›X]šXÙ\ÕÙZYÚÑ^˜VÌWNÂˆÙ[™YˆˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”Ï‚š[™›Y[˜ÙOZ[™›Y[˜ÙJÜ™XYX]š^œ›ÛT˜]ÔØ[\\Š›Û™TØ[\\‹™\^[œ]Ë›X]šXÙ\Ò[™XÙ\Ñ^˜VÌ—JJ™\^[œ]Ë›X]šXÙ\ÕÙZYÚÑ^˜VÌ—NÂˆÙ[™YˆˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”ÏÂš[™›Y[˜ÙOZ[™›Y[˜ÙJÜ™XYX]š^œ›ÛT˜]ÔØ[\\Š›Û™TØ[\\‹™\^[œ]Ë›X]šXÙ\Ò[™XÙ\Ñ^˜VÌ×JJ™\^[œ]Ë›X]šXÙ\ÕÙZYÚÑ^˜VÌ×NÂˆÙ[™YˆˆÙ[ÙHš[™›Y[˜ÙO][šY›Ü›\Ë›P›Û™\ÖÚLÌŠ™\^[œ]Ë›X]šXÙ\Ò[™XÙ\ÖÌJWJ™\^[œ]Ë›X]šXÙ\ÕÙZYÚÖÌNÂˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”ÏŒBš[™›Y[˜ÙOZ[™›Y[˜ÙJÝ[šY›Ü›\Ë›P›Û™\ÖÚLÌŠ™\^[œ]Ë›X]šXÙ\Ò[™XÙ\ÖÌWJWJ™\^[œ]Ë›X]šXÙ\ÕÙZYÚÖÌWNÂˆÙ[™YˆˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”ÏŒ‚š[™›Y[˜ÙOZ[™›Y[˜ÙJÝ[šY›Ü›\Ë›P›Û™\ÖÚLÌŠ™\^[œ]Ë›X]šXÙ\Ò[™XÙ\ÖÌ—JWJ™\^[œ]Ë›X]šXÙ\ÕÙZYÚÖÌ—NÂˆÙ[™YˆˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”ÏŒÂš[™›Y[˜ÙOZ[™›Y[˜ÙJÝ[šY›Ü›\Ë›P›Û™\ÖÚLÌŠ™\^[œ]Ë›X]šXÙ\Ò[™XÙ\ÖÌ×JWJ™\^[œ]Ë›X]šXÙ\ÕÙZYÚÖÌ×NÂˆÙ[™YˆˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”Ïš[™›Y[˜ÙOZ[™›Y[˜ÙJÝ[šY›Ü›\Ë›P›Û™\ÖÚLÌŠ™\^[œ]Ë›X]šXÙ\Ò[™XÙ\Ñ^˜VÌJWJ™\^[œ]Ë›X]šXÙ\ÕÙZYÚÑ^˜VÌNÂˆÙ[™YˆˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”ÏBš[™›Y[˜ÙOZ[™›Y[˜ÙJÝ[šY›Ü›\Ë›P›Û™\ÖÚLÌŠ™\^[œ]Ë›X]šXÙ\Ò[™XÙ\Ñ^˜VÌWJWJ™\^[œ]Ë›X]šXÙ\ÕÙZYÚÑ^˜VÌWNÂˆÙ[™YˆˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”Ï‚š[™›Y[˜ÙOZ[™›Y[˜ÙJÝ[šY›Ü›\Ë›P›Û™\ÖÚLÌŠ™\^[œ]Ë›X]šXÙ\Ò[™XÙ\Ñ^˜VÌ—JWJ™\^[œ]Ë›X]šXÙ\ÕÙZYÚÑ^˜VÌ—NÂˆÙ[™YˆˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”ÏÂš[™›Y[˜ÙOZ[™›Y[˜ÙJÝ[šY›Ü›\Ë›P›Û™\ÖÚLÌŠ™\^[œ]Ë›X]šXÙ\Ò[™XÙ\Ñ^˜VÌ×JWJ™\^[œ]Ë›X]šXÙ\ÕÙZYÚÑ^˜VÌ×NÂˆÙ[™YˆˆÙ[™Y‚™š[˜[ÛÜ›Yš[˜[ÛÜ›
š[™›Y[˜ÙNÂˆÙ[™Y‚ˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÕ[W_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÕ[WO^’JNØÛÛœÝÒO^Û˜[YN•[KÚY\Žž’_K›OH˜˜ZÙY™\^[š[X][Ûˆ‹ÒOXÚY™YˆRÑQÕ‘T•VÐS’SPUSÓ—ÕVT‘BžÂˆÚY™YˆS”ÕSÑTÂ›]UÝ\œ˜[YNˆŒÌ]™\^[œ]Ë˜˜ZÙY™\^[š[X][Û”Ù][™ÜÒ[œÝ[˜ÙYžÛ]U[™œ˜[YNˆŒÌ]™\^[œ]Ë˜˜ZÙY™\^[š[X][Û”Ù][™ÜÒ[œÝ[˜ÙYžNÛ]UÙ™œÙ]œ˜[YNˆŒÌ]™\^[œ]Ë˜˜ZÙY™\^[š[X][Û”Ù][™ÜÒ[œÝ[˜ÙYžŽÛ]UÜYYˆŒÌ]™\^[œ]Ë˜˜ZÙY™\^[š[X][Û”Ù][™ÜÒ[œÝ[˜ÙYÎÂˆÙ[ÙB›]UÝ\œ˜[YNˆŒÌ][šY›Ü›\Ë˜˜ZÙY™\^[š[X][Û”Ù][™ÜËžÛ]U[™œ˜[YNˆŒÌ][šY›Ü›\Ë˜˜ZÙY™\^[š[X][Û”Ù][™ÜËžNÛ]UÙ™œÙ]œ˜[YNˆŒÌ][šY›Ü›\Ë˜˜ZÙY™\^[š[X][Û”Ù][™ÜËžŽÛ]UÜYYˆŒÌ][šY›Ü›\Ë˜˜ZÙY™\^[š[X][Û”Ù][™ÜËÎÂˆÙ[™Y‚›]Ý[œ˜[Y\ÎˆŒÌUU[™œ˜[YKUUÝ\œ˜[YJÌKŒÛ][YNˆŒÌ][šY›Ü›\Ë˜˜ZÙY™\^[š[X][Û•[YJ•UÜYYÝÝ[œ˜[Y\ÎÛ]œ˜[YPÛÜœ™XÝ[ÛŽˆŒÌ\Ù[XÝ
KŒŒ[YOKŒ
NÛ][SÙ‘œ˜[Y\ÎˆŒÌ]Ý[œ˜[Y\ËYœ˜[YPÛÜœ™XÝ[ÛŽÝ˜\ˆUœ˜[YS[NˆŒÌYœ˜XÝ
[YJJ›[SÙ‘œ˜[Y\ÎÕUœ˜[YS[OJUœ˜[YS[JÕUÙ™œÙ]œ˜[YJH	H[SÙ‘œ˜[Y\ÎÕUœ˜[YS[OY›ÛÜŠUœ˜[YS[JNÕUœ˜[YS[OUUœ˜[YS[JÕUÝ\œ˜[YJÙœ˜[YPÛÜœ™XÝ[ÛŽÝ˜\ˆU[™›Y[˜ÙHˆX]ŒÌŽÕU[™›Y[˜ÙO\™XYX]š^œ›ÛT˜]ÔØ[\\•U
˜ZÙY™\^[š[X][Û•^\™K™\^[œ]Ë›X]šXÙ\Ò[™XÙ\ÖÌKUœ˜[YS[JJ™\^[œ]Ë›X]šXÙ\ÕÙZYÚÖÌNÂˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”ÏŒB•U[™›Y[˜ÙOUU[™›Y[˜ÙJÜ™XYX]š^œ›ÛT˜]ÔØ[\\•U
˜ZÙY™\^[š[X][Û•^\™K™\^[œ]Ë›X]šXÙ\Ò[™XÙ\ÖÌWKUœ˜[YS[JJ™\^[œ]Ë›X]šXÙ\ÕÙZYÚÖÌWNÂˆÙ[™Y‚ˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”ÏŒ‚•U[™›Y[˜ÙOUU[™›Y[˜ÙJÜ™XYX]š^œ›ÛT˜]ÔØ[\\•U
˜ZÙY™\^[š[X][Û•^\™K™\^[œ]Ë›X]šXÙ\Ò[™XÙ\ÖÌ—KUœ˜[YS[JJ™\^[œ]Ë›X]šXÙ\ÕÙZYÚÖÌ—NÂˆÙ[™Y‚ˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”ÏŒÂ•U[™›Y[˜ÙOUU[™›Y[˜ÙJÜ™XYX]š^œ›ÛT˜]ÔØ[\\•U
˜ZÙY™\^[š[X][Û•^\™K™\^[œ]Ë›X]šXÙ\Ò[™XÙ\ÖÌ×KUœ˜[YS[JJ™\^[œ]Ë›X]šXÙ\ÕÙZYÚÖÌ×NÂˆÙ[™Y‚ˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”Ï•U[™›Y[˜ÙOUU[™›Y[˜ÙJÜ™XYX]š^œ›ÛT˜]ÔØ[\\•U
˜ZÙY™\^[š[X][Û•^\™K™\^[œ]Ë›X]šXÙ\Ò[™XÙ\Ñ^˜VÌKUœ˜[YS[JJ™\^[œ]Ë›X]šXÙ\ÕÙZYÚÑ^˜VÌNÂˆÙ[™Y‚ˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”ÏB•U[™›Y[˜ÙOUU[™›Y[˜ÙJÜ™XYX]š^œ›ÛT˜]ÔØ[\\•U
˜ZÙY™\^[š[X][Û•^\™K™\^[œ]Ë›X]šXÙ\Ò[™XÙ\Ñ^˜VÌWKUœ˜[YS[JJ™\^[œ]Ë›X]šXÙ\ÕÙZYÚÑ^˜VÌWNÂˆÙ[™Y‚ˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”Ï‚•U[™›Y[˜ÙOUU[™›Y[˜ÙJÜ™XYX]š^œ›ÛT˜]ÔØ[\\•U
˜ZÙY™\^[š[X][Û•^\™K™\^[œ]Ë›X]šXÙ\Ò[™XÙ\Ñ^˜VÌ—KUœ˜[YS[JJ™\^[œ]Ë›X]šXÙ\ÕÙZYÚÑ^˜VÌ—NÂˆÙ[™Y‚ˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”ÏÂ•U[™›Y[˜ÙOUU[™›Y[˜ÙJÜ™XYX]š^œ›ÛT˜]ÔØ[\\•U
˜ZÙY™\^[š[X][Û•^\™K™\^[œ]Ë›X]šXÙ\Ò[™XÙ\Ñ^˜VÌ×KUœ˜[YS[JJ™\^[œ]Ë›X]šXÙ\ÕÙZYÚÑ^˜VÌ×NÂˆÙ[™Y‚™š[˜[ÛÜ›Yš[˜[ÛÜ›
•U[™›Y[˜ÙNßBˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÐ›W_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÐ›WOQÒJNØÛÛœÝO^Û˜[YN›KÚY\Ž‘Ò_K›OH˜Û\[™U™\^‹ÒOXÚY™YˆÓTS‘B™\^Ý]]Ë™Û\\Ý[˜ÙOYÝ
ÛÜ›ÜË[šY›Ü›\ËÛ\[™JNÂˆÙ[™Y‚ˆÚY™YˆÓTS‘L‚™\^Ý]]Ë™Û\\Ý[˜ÙLYÝ
ÛÜ›ÜË[šY›Ü›\ËÛ\[™LŠNÂˆÙ[™Y‚ˆÚY™YˆÓTS‘LÂ™\^Ý]]Ë™Û\\Ý[˜ÙLÏYÝ
ÛÜ›ÜË[šY›Ü›\ËÛ\[™LÊNÂˆÙ[™Y‚ˆÚY™YˆÓTS‘M™\^Ý]]Ë™Û\\Ý[˜ÙMYÝ
ÛÜ›ÜË[šY›Ü›\ËÛ\[™M
NÂˆÙ[™Y‚ˆÚY™YˆÓTS‘MB™\^Ý]]Ë™Û\\Ý[˜ÙMOYÝ
ÛÜ›ÜË[šY›Ü›\ËÛ\[™MJNÂˆÙ[™Y‚ˆÚY™YˆÓTS‘M‚™\^Ý]]Ë™Û\\Ý[˜ÙMYÝ
ÛÜ›ÜË[šY›Ü›\ËÛ\[™MŠNÂˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÕ›W_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÕ›WOUÒJNØÛÛœÝ]^Û˜[YN•›KÚY\Ž•Ò_K›OH™›ÙÕ™\^‹OXÚY™Yˆ“ÑÂˆÚY™YˆÐÑS‘WÕP“Â™\^Ý]]Ë‘›ÙÑ\Ý[˜ÙOJØÙ[™KšY]ÊÛÜ›ÜÊKž^ŽÂˆÙ[ÙB™\^Ý]]Ë‘›ÙÑ\Ý[˜ÙOJ[šY›Ü›\ËšY]ÊÛÜ›ÜÊKž^ŽÂˆÙ[™Y‚ˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÞ›W_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÞ›WORJNØÛÛœÝRO^Û˜[YNž›KÚY\Ž’_KÛOH™\^ÛÛÜ“Z^[™È‹ROXÚYˆYš[™Y
‘T•VÓÓÔŠHYš[™Y
S”ÕSÑTÐÓÓÔŠH	‰ˆYš[™Y
S”ÕSÑTÊB™\^Ý]]ËÛÛÜ]™XÍŠKŒ
NÂˆÚY™Yˆ‘T•VÓÓÔ‚ˆÚY™Yˆ‘T•VSB™\^Ý]]ËÛÛÜŠXÛÛÜ•\]YÂˆÙ[ÙB™\^Ý]]ËÛÛÜ]™XÍŠ™\^Ý]]ËÛÛÜ‹œ™ØŠ˜ÛÛÜ•\]Yœ™Ø‹™\^Ý]]ËÛÛÜ‹˜JNÂˆÙ[™Y‚ˆÙ[™Y‚ˆÚY™YˆS”ÕSÑTÐÓÓÔ‚™\^Ý]]ËÛÛÜŠ]™\^[œ]Ëš[œÝ[˜ÙPÛÛÜŽÂˆÙ[™Y‚ˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÚÛW_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÚÛWO\RJNØÛÛœÝ’O^Û˜[YNšÛKÚY\ŽœR_KÛOH˜ÛÛÜ•™\^ÚY\ˆ‹ÒOX]šX]HÜÚ][ÛŽˆ™XÌÙŽÂˆÚY™Yˆ‘T•VÓÓÔ‚˜]šX]HÛÛÜŽˆ™XÍŽÂˆÙ[™Y‚ˆÚ[˜ÛYO›Û™\ÑXÛ\˜][Û‚ˆÚ[˜ÛYO˜ZÙY™\^[š[X][Û‘XÛ\˜][Û‚ˆÚ[˜ÛYOÛ\[™U™\^XÛ\˜][Û‚ˆÚ[˜ÛYO›ÙÕ™\^XÛ\˜][Û‚ˆÚY™Yˆ“ÑÂ[šY›Ü›HšY]ÎˆX]ŽÂˆÙ[™Y‚ˆÚ[˜ÛYO[œÝ[˜Ù\ÑXÛ\˜][Û‚[šY›Ü›HšY]Ô›Ú™XÝ[ÛŽˆX]ŽÂˆÚYˆYš[™Y
‘T•VÓÓÔŠHYš[™Y
S”ÕSÑTÐÓÓÔŠH	‰ˆYš[™Y
S”ÕSÑTÊB˜\žZ[™ÈÛÛÜŽˆ™XÍŽÂˆÙ[™Y‚ˆÙYš[™HÕTÕÓWÕ‘T•VÑQ’S’USÓ”Â™\^™›ˆXZ[Š[œ]ˆ™\^[œ]ÊKO‘œ˜YÛY[[œ]ÈÂˆÙYš[™HÕTÕÓWÕ‘T•VÓPRS—Ð‘QÒS‚ˆÚY™Yˆ‘T•VÓÓÔ‚˜\ˆÛÛÜ•\]Yˆ™XÍ]™\^[œ]Ë˜ÛÛÜŽÂˆÙ[™Y‚ˆÚ[˜ÛYO[œÝ[˜Ù\Õ™\^‚ˆÚ[˜ÛYO›Û™\Õ™\^‚ˆÚ[˜ÛYO˜ZÙY™\^[š[X][Û‚˜\ˆÛÜ›ÜÎˆ™XÍYš[˜[ÛÜ›
ˆ™XÍŠ™\^[œ]ËœÜÚ][Û‹KŒ
NÝ™\^Ý]]ËœÜÚ][Û][šY›Ü›\ËšY]Ô›Ú™XÝ[ÛŠÛÜ›ÜÎÂˆÚ[˜ÛYOÛ\[™U™\^‚ˆÚ[˜ÛYO›ÙÕ™\^‚ˆÚ[˜ÛYO™\^ÛÛÜ“Z^[™Ï‚ˆÙYš[™HÕTÕÓWÕ‘T•VÓPRS—ÑS‘ŸXÜK”ÚY\œÔÝÜ™UÑÔÓÑÛW_
K”ÚY\œÔÝÜ™UÑÔÓÑÛWORÒJNØÛÛœÝVÝÒKK‹RK‹‹ÒKK]‹RK’WNÙ›ÜŠÛÛœÝˆÙˆŠ\K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÜ‹›˜[YW_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÜ‹›˜[YWO\‹œÚY\ŠNØÛÛœÝÓ^Û˜[YN‘ÛKÚY\Ž’Ò_KSSØš™XÝ™œ™Y^™JØš™XÝ™Yš[™T›Ü\J××Ü›Ý××Î›[ÛÛÜ•™\^ÚY\•ÑÔÓ—ÓŸKÞ[X›ÛÔÝš[™ÕYËÝ˜[YNˆ“[Ù[HŸJJKOH˜Û\[™Qœ˜YÛY[XÛ\˜][Ûˆ‹’OXÚY™YˆÓTS‘B˜\žZ[™ÈÛ\\Ý[˜ÙNˆŒÌŽÂˆÙ[™Y‚ˆÚY™YˆÓTS‘L‚˜\žZ[™ÈÛ\\Ý[˜ÙLŽˆŒÌŽÂˆÙ[™Y‚ˆÚY™YˆÓTS‘LÂ˜\žZ[™ÈÛ\\Ý[˜ÙLÎˆŒÌŽÂˆÙ[™Y‚ˆÚY™YˆÓTS‘M˜\žZ[™ÈÛ\\Ý[˜ÙMˆŒÌŽÂˆÙ[™Y‚ˆÚY™YˆÓTS‘MB˜\žZ[™ÈÛ\\Ý[˜ÙMNˆŒÌŽÂˆÙ[™Y‚ˆÚY™YˆÓTS‘M‚˜\žZ[™ÈÛ\\Ý[˜ÙMŽˆŒÌŽÂˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÖW_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÖWOV’JNØÛÛœÝ^Û˜[YN–KÚY\Ž–’_KÛOH™›ÙÑœ˜YÛY[XÛ\˜][Ûˆ‹ROXÚY™Yˆ“ÑÂˆÙYš[™H“ÑÓSÑWÓ“Ó‘H‚ˆÙYš[™H“ÑÓSÑWÑVK‚ˆÙYš[™H“ÑÓSÑWÑVˆ‹‚ˆÙYš[™H“ÑÓSÑWÓS‘PTˆË‚˜ÛÛœÝOL‹ÌNŽÝ[šY›Ü›H‘›ÙÒ[™›ÜÎˆ™XÍŽÝ[šY›Ü›H‘›ÙÐÛÛÜŽˆ™XÌÙŽÝ˜\žZ[™È‘›ÙÑ\Ý[˜ÙNˆ™XÌÙŽÙ›ˆØ[Ñ›ÙÑ˜XÝÜŠ
KO™ŒÌ‚žÝ˜\ˆ›ÙÐÛÙY™ŽˆŒÌLKŒÝ˜\ˆ›ÙÔÝ\ˆŒÌ][šY›Ü›\Ë‘›ÙÒ[™›ÜËžNÝ˜\ˆ›ÙÑ[™ˆŒÌ][šY›Ü›\Ë‘›ÙÒ[™›ÜËžŽÝ˜\ˆ›ÙÑ[œÚ]NˆŒÌ][šY›Ü›\Ë‘›ÙÒ[™›ÜËÎÝ˜\ˆ›ÙÑ\Ý[˜ÙNˆŒÌ[[™Ý
œ˜YÛY[[œ]Ë‘›ÙÑ\Ý[˜ÙJNÚYˆ
“ÑÓSÑWÓS‘PTO][šY›Ü›\Ë‘›ÙÒ[™›ÜËž
BžÙ›ÙÐÛÙY™J›ÙÑ[™Y›ÙÑ\Ý[˜ÙJKÊ›ÙÑ[™Y›ÙÔÝ\
NßB™[ÙHYˆ
“ÑÓSÑWÑVO][šY›Ü›\Ë‘›ÙÒ[™›ÜËž
BžÙ›ÙÐÛÙY™LKŒÜÝÊK›ÙÑ\Ý[˜ÙJ™›ÙÑ[œÚ]JNßB™[ÙHYˆ
“ÑÓSÑWÑVO][šY›Ü›\Ë‘›ÙÒ[™›ÜËž
BžÙ›ÙÐÛÙY™LKŒÜÝÊK›ÙÑ\Ý[˜ÙJ™›ÙÑ\Ý[˜ÙJ™›ÙÑ[œÚ]J™›ÙÑ[œÚ]JNßBœ™]\›ˆÛ[\
›ÙÐÛÙY™‹ŒKŒ
NßBˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÕÛW_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÕÛWOTRJNØÛÛœÝ	O^Û˜[YN•ÛKÚY\Ž”R_KOH˜Û\[™Qœ˜YÛY[‹’OXÚYˆYš[™Y
ÓTS‘JHYš[™Y
ÓTS‘LŠHYš[™Y
ÓTS‘LÊHYš[™Y
ÓTS‘M
HYš[™Y
ÓTS‘MJHYš[™Y
ÓTS‘MŠBšYˆ
˜[ÙJHßBˆÙ[™Y‚ˆÚY™YˆÓTS‘B™[ÙHYˆ
œ˜YÛY[[œ]Ë™Û\\Ý[˜ÙOŒŒ
BžÙ\ØØ\™ßBˆÙ[™Y‚ˆÚY™YˆÓTS‘L‚™[ÙHYˆ
œ˜YÛY[[œ]Ë™Û\\Ý[˜ÙLŒŒ
BžÙ\ØØ\™ßBˆÙ[™Y‚ˆÚY™YˆÓTS‘LÂ™[ÙHYˆ
œ˜YÛY[[œ]Ë™Û\\Ý[˜ÙLÏŒŒ
BžÙ\ØØ\™ßBˆÙ[™Y‚ˆÚY™YˆÓTS‘M™[ÙHYˆ
œ˜YÛY[[œ]Ë™Û\\Ý[˜ÙMŒŒ
BžÙ\ØØ\™ßBˆÙ[™Y‚ˆÚY™YˆÓTS‘MB™[ÙHYˆ
œ˜YÛY[[œ]Ë™Û\\Ý[˜ÙMOŒŒ
BžÙ\ØØ\™ßBˆÙ[™Y‚ˆÚY™YˆÓTS‘M‚™[ÙHYˆ
œ˜YÛY[[œ]Ë™Û\\Ý[˜ÙMŒŒ
BžÙ\ØØ\™ßBˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÒW_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÒWOR’JNØÛÛœÝ^Û˜[YN’KÚY\Ž’’_K[OH™›ÙÑœ˜YÛY[‹PÏXÚY™Yˆ“ÑÂ˜\ˆ›ÙÎˆŒÌPØ[Ñ›ÙÑ˜XÝÜŠ
NÂˆÚY™Yˆ”‚™›ÙÏ]Ó[™X\”ÜXÙJ›ÙÊNÂˆÙ[™Y‚˜ÛÛÜH™XÍŠZ^
[šY›Ü›\Ë‘›ÙÐÛÛÜ‹ÛÛÜ‹œ™Ø‹›ÙÊKÛÛÜ‹˜JNÂˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÖ[W_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÖ[WOYPÊNØÛÛœÝÏ^Û˜[YN–[KÚY\Ž™PßK[OH˜ÛÛÜ”^[ÚY\ˆ‹PÏXÚYˆYš[™Y
‘T•VÓÓÔŠHYš[™Y
S”ÕSÑTÐÓÓÔŠH	‰ˆYš[™Y
S”ÕSÑTÊBˆÙYš[™H‘T•VÓÓÔ‚˜\žZ[™ÈÛÛÜŽˆ™XÍŽÂˆÙ[ÙB[šY›Ü›HÛÛÜŽˆ™XÍŽÂˆÙ[™Y‚ˆÚ[˜ÛYOÛ\[™Qœ˜YÛY[XÛ\˜][Û‚ˆÚ[˜ÛYO›ÙÑœ˜YÛY[XÛ\˜][Û‚ˆÙYš[™HÕTÕÓWÑ”QÓQS•ÑQ’S’USÓ”Âœ˜YÛY[™›ˆXZ[Š[œ]ˆœ˜YÛY[[œ]ÊKO‘œ˜YÛY[Ý]]ÈÂˆÙYš[™HÕTÕÓWÑ”QÓQS•ÓPRS—Ð‘QÒS‚ˆÚ[˜ÛYOÛ\[™Qœ˜YÛY[‚ˆÚYˆYš[™Y
‘T•VÓÓÔŠHYš[™Y
S”ÕSÑTÐÓÓÔŠH	‰ˆYš[™Y
S”ÕSÑTÊB™œ˜YÛY[Ý]]Ë˜ÛÛÜZ[œ]ÛÛÜŽÂˆÙ[ÙB™œ˜YÛY[Ý]]Ë˜ÛÛÜ][šY›Ü›\Ë˜ÛÛÜŽÂˆÙ[™Y‚ˆÚ[˜ÛYO›ÙÑœ˜YÛY[ŠÛÛÜ‹œ˜YÛY[Ý]]Ë˜ÛÛÜŠBˆÙYš[™HÕTÕÓWÑ”QÓQS•ÓPRS—ÑS‘ŸXÜK”ÚY\œÔÝÜ™UÑÔÓÜ[W_
K”ÚY\œÔÝÜ™UÑÔÓÜ[WOZPÊNØÛÛœÝVÐ‹	K‹×NÙ›ÜŠÛÛœÝˆÙˆŠ\K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÜ‹›˜[YW_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÜ‹›˜[YWO\‹œÚY\ŠNØÛÛœÝÓ^Û˜[YNœ[KÚY\ŽšPßK“SØš™XÝ™œ™Y^™JØš™XÝ™Yš[™T›Ü\J××Ü›Ý××Î›[ÛÛÜ”^[ÚY\•ÑÔÓ™ÓŸKÞ[X›ÛÔÝš[™ÕYËÝ˜[YNˆ“[Ù[HŸJJK›OH˜›Û™\ÑXÛ\˜][Ûˆ‹ÐÏXÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”ÏŒ˜]šX]H™XÍX]šXÙ\Ò[™XÙ\ÎØ]šX]H™XÍX]šXÙ\ÕÙZYÚÎÂˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”Ï˜]šX]H™XÍX]šXÙ\Ò[™XÙ\Ñ^˜NØ]šX]H™XÍX]šXÙ\ÕÙZYÚÑ^˜NÂˆÙ[™Y‚ˆÚY›™YˆRÑQÕ‘T•VÐS’SPUSÓ—ÕVT‘BˆÚY™Yˆ“Ó‘UVT‘B[šY›Ü›HYÚØ[\\Œ‘›Û™TØ[\\ŽÝ[šY›Ü›H™XÌˆ›Û™U^\™R[™›ÎÂˆÙ[ÙB[šY›Ü›HX]P›Û™\ÖÐ›Û™\Ô\“Y\ÚNÂˆÙ[™Y‚ˆÚY™Yˆ“Ó‘T×Õ‘SÐÒUWÑSP“Q[šY›Ü›HX]T™]š[Ý\Ð›Û™\ÖÐ›Û™\Ô\“Y\ÚNÂˆÙ[™Y‚ˆÚY™Yˆ“Ó‘UVT‘BˆÙYš[™H[›[™B›X]™XYX]š^œ›ÛT˜]ÔØ[\\ŠØ[\\Œ‘Û\›Ø][™^
BžÂˆÚYˆYš[™Y
ÑP‘ÓŠHYš[™Y
ÑP‘ÔJBš[Ù™œÙ]Z[
[™^
JÈš[^\™UÚYZ[
›Û™U^\™R[™›Ëž
NÚ[OZ[
Ù™œÙ]
KÝ^\™UÚYÚ[Z[
Ù™œÙ]
H	H^\™UÚYÝ™XÍL]^[™]Ú
Û\]™XÌŠ
ÌJK
NÝ™XÍLO]^[™]Ú
Û\]™XÌŠ
ÌKJK
NÝ™XÍL]^[™]Ú
Û\]™XÌŠ
Ì‹JK
NÝ™XÍLÏ]^[™]Ú
Û\]™XÌŠ
ÌËJK
NÜ™]\›ˆX]
LLKL‹LÊNÂˆÙ[ÙB™›Ø]Ù™œÙ]Z[™^
ŒÙ›Ø]OY›ÛÜŠÙ™œÙ]Ø›Û™U^\™R[™›Ëž
NÙ›Ø][Ù™œÙ]^J˜›Û™U^\™R[™›ËžÙ›Ø]OLKŒØ›Û™U^\™R[™›ËžNÙ›Ø]LKŒØ›Û™U^\™R[™›ËžÝ™XÍL]^\™L‘
Û\™XÌŠ
Š
ÌJKJŠJÌJJJNÝ™XÍLO]^\™L‘
Û\™XÌŠ
Š
ÌKJKJŠJÌJJJNÝ™XÍL]^\™L‘
Û\™XÌŠ
Š
Ì‹JKJŠJÌJJJNÝ™XÍLÏ]^\™L‘
Û\™XÌŠ
Š
ÌËJKJŠJÌJJJNÈœ™]\›ˆX]
LLKL‹LÊNÂˆÙ[™Y‚ŸBˆÙ[™Y‚ˆÙ[™Y‚ˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VÚ›W_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÚ›WO\ÐÊNØÛÛœÝÏ^Û˜[YNš›KÚY\ŽœÐßKÛOH˜˜ZÙY™\^[š[X][Û‘XÛ\˜][Ûˆ‹ÏXÚY™YˆRÑQÕ‘T•VÐS’SPUSÓ—ÕVT‘B[šY›Ü›H›Ø]˜ZÙY™\^[š[X][Û•[YNÂˆÚYˆYYš[™Y
ÑP‘ÓŠH	‰ˆYYš[™Y
ÑP‘ÔJB[šY›Ü›H™XÌˆ˜ZÙY™\^[š[X][Û•^\™TÚ^™R[™\YÂˆÙ[™Y‚[šY›Ü›H™XÍ˜ZÙY™\^[š[X][Û”Ù][™ÜÎÝ[šY›Ü›HØ[\\Œ‘˜ZÙY™\^[š[X][Û•^\™NÂˆÚY™YˆS”ÕSÑTÂ˜]šX]H™XÍ˜ZÙY™\^[š[X][Û”Ù][™ÜÒ[œÝ[˜ÙYÂˆÙ[™Y‚ˆÙYš[™H[›[™B›X]™XYX]š^œ›ÛT˜]ÔØ[\\•U
Ø[\\Œ‘Û\›Ø][™^›Ø]œ˜[YJBžÂˆÚYˆYš[™Y
ÑP‘ÓŠHYš[™Y
ÑP‘ÔJBš[Ù™œÙ]Z[
[™^
JÚ[œ˜[YUUZ[
œ˜[YJNÝ™XÍL]^[™]Ú
Û\]™XÌŠÙ™œÙ]
Ìœ˜[YUUŠK
NÝ™XÍLO]^[™]Ú
Û\]™XÌŠÙ™œÙ]
ÌKœ˜[YUUŠK
NÝ™XÍL]^[™]Ú
Û\]™XÌŠÙ™œÙ]
Ì‹œ˜[YUUŠK
NÝ™XÍLÏ]^[™]Ú
Û\]™XÌŠÙ™œÙ]
ÌËœ˜[YUUŠK
NÜ™]\›ˆX]
LLKL‹LÊNÂˆÙ[ÙB™›Ø]Ù™œÙ]Z[™^
ŒÙ›Ø]œ˜[YUUJœ˜[YJÌJJ˜˜ZÙY™\^[š[X][Û•^\™TÚ^™R[™\YžNÙ›Ø]X˜ZÙY™\^[š[X][Û•^\™TÚ^™R[™\YžÝ™XÍL]^\™L‘
Û\™XÌŠ
ŠÙ™œÙ]
ÌJKœ˜[YUUŠJNÝ™XÍLO]^\™L‘
Û\™XÌŠ
ŠÙ™œÙ]
ÌKJKœ˜[YUUŠJNÝ™XÍL]^\™L‘
Û\™XÌŠ
ŠÙ™œÙ]
Ì‹JKœ˜[YUUŠJNÝ™XÍLÏ]^\™L‘
Û\™XÌŠ
ŠÙ™œÙ]
ÌËJKœ˜[YUUŠJNÜ™]\›ˆX]
LLKL‹LÊNÂˆÙ[™Y‚ŸBˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VÒÛW_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÒÛWO[ÊNØÛÛœÝPÏ^Û˜[YN’ÛKÚY\Ž›ßK›OH˜Û\[™U™\^XÛ\˜][Ûˆ‹ÐÏXÚY™YˆÓTS‘B[šY›Ü›H™XÍÛ\[™NÝ˜\žZ[™È›Ø]Û\\Ý[˜ÙNÂˆÙ[™Y‚ˆÚY™YˆÓTS‘L‚[šY›Ü›H™XÍÛ\[™LŽÝ˜\žZ[™È›Ø]Û\\Ý[˜ÙLŽÂˆÙ[™Y‚ˆÚY™YˆÓTS‘LÂ[šY›Ü›H™XÍÛ\[™LÎÝ˜\žZ[™È›Ø]Û\\Ý[˜ÙLÎÂˆÙ[™Y‚ˆÚY™YˆÓTS‘M[šY›Ü›H™XÍÛ\[™MÝ˜\žZ[™È›Ø]Û\\Ý[˜ÙMÂˆÙ[™Y‚ˆÚY™YˆÓTS‘MB[šY›Ü›H™XÍÛ\[™MNÝ˜\žZ[™È›Ø]Û\\Ý[˜ÙMNÂˆÙ[™Y‚ˆÚY™YˆÓTS‘M‚[šY›Ü›H™XÍÛ\[™MŽÝ˜\žZ[™È›Ø]Û\\Ý[˜ÙMŽÂˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VÖ›W_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÖ›WO[ÐÊNØÛÛœÝ^Û˜[YN–›KÚY\Ž›ÐßK[OH™›ÙÕ™\^XÛ\˜][Ûˆ‹ÏXÚY™Yˆ“ÑÂ˜\žZ[™È™XÌÈ‘›ÙÑ\Ý[˜ÙNÂˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VÔ[W_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÔ[WO[ÊNØÛÛœÝÐÏ^Û˜[YN”[KÚY\Ž›ßK	OHš[œÝ[˜Ù\ÑXÛ\˜][Ûˆ‹ÏXÚY™YˆS”ÕSÑTÂ˜]šX]H™XÍÛÜ›Ø]šX]H™XÍÛÜ›NØ]šX]H™XÍÛÜ›ŽØ]šX]H™XÍÛÜ›ÎÂˆÚY™YˆS”ÕSÑTÐÓÓÔ‚˜]šX]H™XÍ[œÝ[˜ÙPÛÛÜŽÂˆÙ[™Y‚ˆÚYˆYš[™Y
S—ÒS”ÕSÑTÊH	‰ˆYYš[™Y
ÓÔ“ÕP“ÊB[šY›Ü›HX]ÛÜ›ÂˆÙ[™Y‚ˆÚYˆYš[™Y
‘SÐÒUJHYš[™Y
‘TTÔ×Õ‘SÐÒUJHYš[™Y
‘TTÔ×Õ‘SÐÒUWÓS‘PTŠHYš[™Y
‘SÐÒUWÓS‘PTŠB˜]šX]H™XÍ™]š[Ý\ÕÛÜ›Ø]šX]H™XÍ™]š[Ý\ÕÛÜ›NØ]šX]H™XÍ™]š[Ý\ÕÛÜ›ŽØ]šX]H™XÍ™]š[Ý\ÕÛÜ›ÎÂˆÚY™YˆS—ÒS”ÕSÑTÂ[šY›Ü›HX]™]š[Ý\ÕÛÜ›ÂˆÙ[™Y‚ˆÙ[™Y‚ˆÙ[ÙBˆÚYˆYYš[™Y
ÓÔ“ÕP“ÊB[šY›Ü›HX]ÛÜ›ÂˆÙ[™Y‚ˆÚYˆYš[™Y
‘SÐÒUJHYš[™Y
‘TTÔ×Õ‘SÐÒUJHYš[™Y
‘TTÔ×Õ‘SÐÒUWÓS‘PTŠHYš[™Y
‘SÐÒUWÓS‘PTŠB[šY›Ü›HX]™]š[Ý\ÕÛÜ›ÂˆÙ[™Y‚ˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VÉW_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÉWOZÊNØÛÛœÝÝ^Û˜[YN‰KÚY\ŽšßK›OHš[œÝ[˜Ù\Õ™\^‹ÏXÚY™YˆS”ÕSÑTÂ›X]š[˜[ÛÜ›[X]
ÛÜ›ÛÜ›KÛÜ›‹ÛÜ›ÊNÂˆÚYˆYš[™Y
‘TTÔ×Õ‘SÐÒUJHYš[™Y
‘SÐÒUJHYš[™Y
‘TTÔ×Õ‘SÐÒUWÓS‘PTŠHYš[™Y
‘SÐÒUWÓS‘PTŠB›X]š[˜[™]š[Ý\ÕÛÜ›[X]
™]š[Ý\ÕÛÜ›™]š[Ý\ÕÛÜ›Kœ™]š[Ý\ÕÛÜ›‹™]š[Ý\ÕÛÜ›ÊNÂˆÙ[™Y‚ˆÚY™YˆS—ÒS”ÕSÑTÂ™š[˜[ÛÜ›]ÛÜ›
™š[˜[ÛÜ›ÂˆÚYˆYš[™Y
‘TTÔ×Õ‘SÐÒUJHYš[™Y
‘SÐÒUJHYš[™Y
‘TTÔ×Õ‘SÐÒUWÓS‘PTŠHYš[™Y
‘SÐÒUWÓS‘PTŠB™š[˜[™]š[Ý\ÕÛÜ›\™]š[Ý\ÕÛÜ›
™š[˜[™]š[Ý\ÕÛÜ›ÂˆÙ[™Y‚ˆÙ[™Y‚ˆÙ[ÙB›X]š[˜[ÛÜ›]ÛÜ›ÂˆÚYˆYš[™Y
‘TTÔ×Õ‘SÐÒUJHYš[™Y
‘SÐÒUJHYš[™Y
‘TTÔ×Õ‘SÐÒUWÓS‘PTŠHYš[™Y
‘SÐÒUWÓS‘PTŠB›X]š[˜[™]š[Ý\ÕÛÜ›\™]š[Ý\ÕÛÜ›ÂˆÙ[™Y‚ˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VÒ›W_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÒ›WOYÊNØÛÛœÝÝ^Û˜[YN’›KÚY\Ž™ßK\H˜›Û™\Õ™\^‹PÏXÚY›™YˆRÑQÕ‘T•VÐS’SPUSÓ—ÕVT‘BˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”ÏŒ›X][™›Y[˜ÙNÂˆÚY™Yˆ“Ó‘UVT‘Bš[™›Y[˜ÙO\™XYX]š^œ›ÛT˜]ÔØ[\\Š›Û™TØ[\\‹X]šXÙ\Ò[™XÙ\ÖÌJJ›X]šXÙ\ÕÙZYÚÖÌNÂˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”ÏŒBš[™›Y[˜ÙJÏ\™XYX]š^œ›ÛT˜]ÔØ[\\Š›Û™TØ[\\‹X]šXÙ\Ò[™XÙ\ÖÌWJJ›X]šXÙ\ÕÙZYÚÖÌWNÂˆÙ[™Y‚ˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”ÏŒ‚š[™›Y[˜ÙJÏ\™XYX]š^œ›ÛT˜]ÔØ[\\Š›Û™TØ[\\‹X]šXÙ\Ò[™XÙ\ÖÌ—JJ›X]šXÙ\ÕÙZYÚÖÌ—NÂˆÙ[™Y‚ˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”ÏŒÂš[™›Y[˜ÙJÏ\™XYX]š^œ›ÛT˜]ÔØ[\\Š›Û™TØ[\\‹X]šXÙ\Ò[™XÙ\ÖÌ×JJ›X]šXÙ\ÕÙZYÚÖÌ×NÂˆÙ[™Y‚ˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”Ïš[™›Y[˜ÙJÏ\™XYX]š^œ›ÛT˜]ÔØ[\\Š›Û™TØ[\\‹X]šXÙ\Ò[™XÙ\Ñ^˜VÌJJ›X]šXÙ\ÕÙZYÚÑ^˜VÌNÂˆÙ[™Y‚ˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”ÏBš[™›Y[˜ÙJÏ\™XYX]š^œ›ÛT˜]ÔØ[\\Š›Û™TØ[\\‹X]šXÙ\Ò[™XÙ\Ñ^˜VÌWJJ›X]šXÙ\ÕÙZYÚÑ^˜VÌWNÂˆÙ[™Y‚ˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”Ï‚š[™›Y[˜ÙJÏ\™XYX]š^œ›ÛT˜]ÔØ[\\Š›Û™TØ[\\‹X]šXÙ\Ò[™XÙ\Ñ^˜VÌ—JJ›X]šXÙ\ÕÙZYÚÑ^˜VÌ—NÂˆÙ[™Y‚ˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”ÏÂš[™›Y[˜ÙJÏ\™XYX]š^œ›ÛT˜]ÔØ[\\Š›Û™TØ[\\‹X]šXÙ\Ò[™XÙ\Ñ^˜VÌ×JJ›X]šXÙ\ÕÙZYÚÑ^˜VÌ×NÂˆÙ[™Y‚ˆÙ[ÙBš[™›Y[˜ÙO[P›Û™\ÖÚ[
X]šXÙ\Ò[™XÙ\ÖÌJWJ›X]šXÙ\ÕÙZYÚÖÌNÂˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”ÏŒBš[™›Y[˜ÙJÏ[P›Û™\ÖÚ[
X]šXÙ\Ò[™XÙ\ÖÌWJWJ›X]šXÙ\ÕÙZYÚÖÌWNÂˆÙ[™Y‚ˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”ÏŒ‚š[™›Y[˜ÙJÏ[P›Û™\ÖÚ[
X]šXÙ\Ò[™XÙ\ÖÌ—JWJ›X]šXÙ\ÕÙZYÚÖÌ—NÂˆÙ[™Y‚ˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”ÏŒÂš[™›Y[˜ÙJÏ[P›Û™\ÖÚ[
X]šXÙ\Ò[™XÙ\ÖÌ×JWJ›X]šXÙ\ÕÙZYÚÖÌ×NÂˆÙ[™Y‚ˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”Ïš[™›Y[˜ÙJÏ[P›Û™\ÖÚ[
X]šXÙ\Ò[™XÙ\Ñ^˜VÌJWJ›X]šXÙ\ÕÙZYÚÑ^˜VÌNÂˆÙ[™Y‚ˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”ÏBš[™›Y[˜ÙJÏ[P›Û™\ÖÚ[
X]šXÙ\Ò[™XÙ\Ñ^˜VÌWJWJ›X]šXÙ\ÕÙZYÚÑ^˜VÌWNÂˆÙ[™Y‚ˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”Ï‚š[™›Y[˜ÙJÏ[P›Û™\ÖÚ[
X]šXÙ\Ò[™XÙ\Ñ^˜VÌ—JWJ›X]šXÙ\ÕÙZYÚÑ^˜VÌ—NÂˆÙ[™Y‚ˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”ÏÂš[™›Y[˜ÙJÏ[P›Û™\ÖÚ[
X]šXÙ\Ò[™XÙ\Ñ^˜VÌ×JWJ›X]šXÙ\ÕÙZYÚÑ^˜VÌ×NÂˆÙ[™Y‚ˆÙ[™Y‚™š[˜[ÛÜ›Yš[˜[ÛÜ›
š[™›Y[˜ÙNÂˆÙ[™Y‚ˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VÙ\_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÙ\O]PÊNØÛÛœÝÏ^Û˜[YN™\ÚY\ŽPßKH˜˜ZÙY™\^[š[X][Ûˆ‹ÐÏXÚY™YˆRÑQÕ‘T•VÐS’SPUSÓ—ÕVT‘BžÂˆÚY™YˆS”ÕSÑTÂˆÙYš[™H•TÓSQH˜ZÙY™\^[š[X][Û”Ù][™ÜÒ[œÝ[˜ÙYˆÙ[ÙBˆÙYš[™H•TÓSQH˜ZÙY™\^[š[X][Û”Ù][™ÜÂˆÙ[™Y‚™›Ø]UÝ\œ˜[YOP•TÓSQKžÙ›Ø]U[™œ˜[YOP•TÓSQKžNÙ›Ø]UÙ™œÙ]œ˜[YOP•TÓSQKžŽÙ›Ø]UÜYYP•TÓSQKÎÙ›Ø]Ý[œ˜[Y\ÏUU[™œ˜[YKUUÝ\œ˜[YJÌKŒÙ›Ø][YOX˜ZÙY™\^[š[X][Û•[YJ•UÜYYÝÝ[œ˜[Y\ÎÙ›Ø]œ˜[YPÛÜœ™XÝ[Û][YOKŒÈŒˆKŒÙ›Ø][SÙ‘œ˜[Y\Ï]Ý[œ˜[Y\ËYœ˜[YPÛÜœ™XÝ[ÛŽÙ›Ø]Uœ˜[YS[OYœ˜XÝ
[YJJ›[SÙ‘œ˜[Y\ÎÕUœ˜[YS[O[[Ù
Uœ˜[YS[JÕUÙ™œÙ]œ˜[YK[SÙ‘œ˜[Y\ÊNÕUœ˜[YS[OY›ÛÜŠUœ˜[YS[JNÕUœ˜[YS[JÏUUÝ\œ˜[YJÙœ˜[YPÛÜœ™XÝ[ÛŽÛX]U[™›Y[˜ÙNÕU[™›Y[˜ÙO\™XYX]š^œ›ÛT˜]ÔØ[\\•U
˜ZÙY™\^[š[X][Û•^\™KX]šXÙ\Ò[™XÙ\ÖÌKUœ˜[YS[JJ›X]šXÙ\ÕÙZYÚÖÌNÂˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”ÏŒB•U[™›Y[˜ÙJÏ\™XYX]š^œ›ÛT˜]ÔØ[\\•U
˜ZÙY™\^[š[X][Û•^\™KX]šXÙ\Ò[™XÙ\ÖÌWKUœ˜[YS[JJ›X]šXÙ\ÕÙZYÚÖÌWNÂˆÙ[™Y‚ˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”ÏŒ‚•U[™›Y[˜ÙJÏ\™XYX]š^œ›ÛT˜]ÔØ[\\•U
˜ZÙY™\^[š[X][Û•^\™KX]šXÙ\Ò[™XÙ\ÖÌ—KUœ˜[YS[JJ›X]šXÙ\ÕÙZYÚÖÌ—NÂˆÙ[™Y‚ˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”ÏŒÂ•U[™›Y[˜ÙJÏ\™XYX]š^œ›ÛT˜]ÔØ[\\•U
˜ZÙY™\^[š[X][Û•^\™KX]šXÙ\Ò[™XÙ\ÖÌ×KUœ˜[YS[JJ›X]šXÙ\ÕÙZYÚÖÌ×NÂˆÙ[™Y‚ˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”Ï•U[™›Y[˜ÙJÏ\™XYX]š^œ›ÛT˜]ÔØ[\\•U
˜ZÙY™\^[š[X][Û•^\™KX]šXÙ\Ò[™XÙ\Ñ^˜VÌKUœ˜[YS[JJ›X]šXÙ\ÕÙZYÚÑ^˜VÌNÂˆÙ[™Y‚ˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”ÏB•U[™›Y[˜ÙJÏ\™XYX]š^œ›ÛT˜]ÔØ[\\•U
˜ZÙY™\^[š[X][Û•^\™KX]šXÙ\Ò[™XÙ\Ñ^˜VÌWKUœ˜[YS[JJ›X]šXÙ\ÕÙZYÚÑ^˜VÌWNÂˆÙ[™Y‚ˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”Ï‚•U[™›Y[˜ÙJÏ\™XYX]š^œ›ÛT˜]ÔØ[\\•U
˜ZÙY™\^[š[X][Û•^\™KX]šXÙ\Ò[™XÙ\Ñ^˜VÌ—KUœ˜[YS[JJ›X]šXÙ\ÕÙZYÚÑ^˜VÌ—NÂˆÙ[™Y‚ˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”ÏÂ•U[™›Y[˜ÙJÏ\™XYX]š^œ›ÛT˜]ÔØ[\\•U
˜ZÙY™\^[š[X][Û•^\™KX]šXÙ\Ò[™XÙ\Ñ^˜VÌ×KUœ˜[YS[JJ›X]šXÙ\ÕÙZYÚÑ^˜VÌ×NÂˆÙ[™Y‚™š[˜[ÛÜ›Yš[˜[ÛÜ›
•U[™›Y[˜ÙNßBˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VÝ_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÝOWÐÊNØÛÛœÝPÏ^Û˜[YNÚY\Ž—ÐßK\H˜Û\[™U™\^‹ÏXÚY™YˆÓTS‘B™Û\\Ý[˜ÙOYÝ
ÛÜ›ÜËÛ\[™JNÂˆÙ[™Y‚ˆÚY™YˆÓTS‘L‚™Û\\Ý[˜ÙLYÝ
ÛÜ›ÜËÛ\[™LŠNÂˆÙ[™Y‚ˆÚY™YˆÓTS‘LÂ™Û\\Ý[˜ÙLÏYÝ
ÛÜ›ÜËÛ\[™LÊNÂˆÙ[™Y‚ˆÚY™YˆÓTS‘M™Û\\Ý[˜ÙMYÝ
ÛÜ›ÜËÛ\[™M
NÂˆÙ[™Y‚ˆÚY™YˆÓTS‘MB™Û\\Ý[˜ÙMOYÝ
ÛÜ›ÜËÛ\[™MJNÂˆÙ[™Y‚ˆÚY™YˆÓTS‘M‚™Û\\Ý[˜ÙMYÝ
ÛÜ›ÜËÛ\[™MŠNÂˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VÚ\_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÚ\O\ÊNØÛÛœÝ^Û˜[YNš\ÚY\ŽœßKÜH™›ÙÕ™\^‹ÐÏXÚY™Yˆ“ÑÂ‘›ÙÑ\Ý[˜ÙOJšY]ÊÛÜ›ÜÊKž^ŽÂˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VÜÜ_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÜÜOYÐÊNØÛÛœÝÏ^Û˜[YNœÜÚY\Ž™ÐßKœH™\^ÛÛÜ“Z^[™È‹ÏXÚYˆYš[™Y
‘T•VÓÓÔŠHYš[™Y
S”ÕSÑTÐÓÓÔŠH	‰ˆYš[™Y
S”ÕSÑTÊBÛÛÜ]™XÍ
KŒ
NÂˆÚY™Yˆ‘T•VÓÓÔ‚ˆÚY™Yˆ‘T•VSBÛÛÜŠXÛÛÜ•\]YÂˆÙ[ÙBÛÛÜ‹œ™ØŠXÛÛÜ•\]Yœ™ØŽÂˆÙ[™Y‚ˆÙ[™Y‚ˆÚY™YˆS”ÕSÑTÐÓÓÔ‚ÛÛÜŠZ[œÝ[˜ÙPÛÛÜŽÂˆÙ[™Y‚ˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VÜœ_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÜœO^ÊNØÛÛœÝÐÏ^Û˜[YNœœÚY\ŽžßKœH˜ÛÛÜ•™\^ÚY\ˆ‹ÏX]šX]H™XÌÈÜÚ][ÛŽÂˆÚY™Yˆ‘T•VÓÓÔ‚˜]šX]H™XÍÛÛÜŽÂˆÙ[™Y‚ˆÚ[˜ÛYO›Û™\ÑXÛ\˜][Û‚ˆÚ[˜ÛYO˜ZÙY™\^[š[X][Û‘XÛ\˜][Û‚ˆÚ[˜ÛYOÛ\[™U™\^XÛ\˜][Û‚ˆÚ[˜ÛYO›ÙÕ™\^XÛ\˜][Û‚ˆÚY™Yˆ“ÑÂ[šY›Ü›HX]šY]ÎÂˆÙ[™Y‚ˆÚ[˜ÛYO[œÝ[˜Ù\ÑXÛ\˜][Û‚[šY›Ü›HX]šY]Ô›Ú™XÝ[ÛŽÂˆÚY™YˆUSU’QUÂ[šY›Ü›HX]šY]Ô›Ú™XÝ[Û”ŽÂˆÙ[™Y‚ˆÚYˆYš[™Y
‘T•VÓÓÔŠHYš[™Y
S”ÕSÑTÐÓÓÔŠH	‰ˆYš[™Y
S”ÕSÑTÊB˜\žZ[™È™XÍÛÛÜŽÂˆÙ[™Y‚ˆÙYš[™HÕTÕÓWÕ‘T•VÑQ’S’USÓ”Â›ÚYXZ[Š›ÚY
HÂˆÙYš[™HÕTÕÓWÕ‘T•VÓPRS—Ð‘QÒS‚ˆÚY™Yˆ‘T•VÓÓÔ‚™XÍÛÛÜ•\]YXÛÛÜŽÂˆÙ[™Y‚ˆÚ[˜ÛYO[œÝ[˜Ù\Õ™\^‚ˆÚ[˜ÛYO›Û™\Õ™\^‚ˆÚ[˜ÛYO˜ZÙY™\^[š[X][Û‚™XÍÛÜ›ÜÏYš[˜[ÛÜ›
™XÍ
ÜÚ][Û‹KŒ
NÂˆÚY™YˆUSU’QUÂšYˆ
ÛÕšY]ÒQÓÕ”OLJHÙÛÔÜÚ][Û]šY]Ô›Ú™XÝ[ÛŠÛÜ›ÜÎßH[ÙHÙÛÔÜÚ][Û]šY]Ô›Ú™XÝ[Û”ŠÛÜ›ÜÎßBˆÙ[ÙB™ÛÔÜÚ][Û]šY]Ô›Ú™XÝ[ÛŠÛÜ›ÜÎÂˆÙ[™Y‚ˆÚ[˜ÛYOÛ\[™U™\^‚ˆÚ[˜ÛYO›ÙÕ™\^‚ˆÚ[˜ÛYO™\^ÛÛÜ“Z^[™Ï‚ˆÙYš[™HÕTÕÓWÕ‘T•VÓPRS—ÑS‘ŸXÜK”ÚY\œÔÝÜ™VÛœ_
K”ÚY\œÔÝÜ™VÛœOUÊNØÛÛœÝVÜËPË‹ÐËÝ‹Ý‹ËPË‹ËÐ×NÙ›ÜŠÛÛœÝˆÙˆŠ\K’[˜ÛY\ÔÚY\œÔÝÜ™VÜ‹›˜[YW_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÜ‹›˜[YWO\‹œÚY\ŠNØÛÛœÝÓ^Û˜[YN›œÚY\Ž•ßKSØš™XÝ™œ™Y^™JØš™XÝ™Yš[™T›Ü\J××Ü›Ý××Î›[ÛÛÜ•™\^ÚY\Ž”ÓŸKÞ[X›ÛÔÝš[™ÕYËÝ˜[YNˆ“[Ù[HŸJJK\H˜Û\[™Qœ˜YÛY[XÛ\˜][Ûˆ‹PÏXÚY™YˆÓTS‘B˜\žZ[™È›Ø]Û\\Ý[˜ÙNÂˆÙ[™Y‚ˆÚY™YˆÓTS‘L‚˜\žZ[™È›Ø]Û\\Ý[˜ÙLŽÂˆÙ[™Y‚ˆÚY™YˆÓTS‘LÂ˜\žZ[™È›Ø]Û\\Ý[˜ÙLÎÂˆÙ[™Y‚ˆÚY™YˆÓTS‘M˜\žZ[™È›Ø]Û\\Ý[˜ÙMÂˆÙ[™Y‚ˆÚY™YˆÓTS‘MB˜\žZ[™È›Ø]Û\\Ý[˜ÙMNÂˆÙ[™Y‚ˆÚY™YˆÓTS‘M‚˜\žZ[™È›Ø]Û\\Ý[˜ÙMŽÂˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VØ\_
K’[˜ÛY\ÔÚY\œÔÝÜ™VØ\OQPÊNØÛÛœÝÝ^Û˜[YN˜\ÚY\Ž‘PßKÜH™›ÙÑœ˜YÛY[XÛ\˜][Ûˆ‹PÏXÚY™Yˆ“ÑÂˆÙYš[™H“ÑÓSÑWÓ“Ó‘H‚ˆÙYš[™H“ÑÓSÑWÑVK‚ˆÙYš[™H“ÑÓSÑWÑVˆ‹‚ˆÙYš[™H“ÑÓSÑWÓS‘PTˆË‚ˆÙYš[™HH‹ÌNŽ[šY›Ü›H™XÍ‘›ÙÒ[™›ÜÎÝ[šY›Ü›H™XÌÈ‘›ÙÐÛÛÜŽÝ˜\žZ[™È™XÌÈ‘›ÙÑ\Ý[˜ÙNÙ›Ø]Ø[Ñ›ÙÑ˜XÝÜŠ
BžÙ›Ø]›ÙÐÛÙY™LKŒÙ›Ø]›ÙÔÝ\]‘›ÙÒ[™›ÜËžNÙ›Ø]›ÙÑ[™]‘›ÙÒ[™›ÜËžŽÙ›Ø]›ÙÑ[œÚ]O]‘›ÙÒ[™›ÜËÎÙ›Ø]›ÙÑ\Ý[˜ÙO[[™Ý
‘›ÙÑ\Ý[˜ÙJNÚYˆ
“ÑÓSÑWÓS‘PTO]‘›ÙÒ[™›ÜËž
BžÙ›ÙÐÛÙY™J›ÙÑ[™Y›ÙÑ\Ý[˜ÙJKÊ›ÙÑ[™Y›ÙÔÝ\
NßB™[ÙHYˆ
“ÑÓSÑWÑVO]‘›ÙÒ[™›ÜËž
BžÙ›ÙÐÛÙY™LKŒÜÝÊK›ÙÑ\Ý[˜ÙJ™›ÙÑ[œÚ]JNßB™[ÙHYˆ
“ÑÓSÑWÑVO]‘›ÙÒ[™›ÜËž
BžÙ›ÙÐÛÙY™LKŒÜÝÊK›ÙÑ\Ý[˜ÙJ™›ÙÑ\Ý[˜ÙJ™›ÙÑ[œÚ]J™›ÙÑ[œÚ]JNßBœ™]\›ˆÛ[\
›ÙÐÛÙY™‹ŒKŒ
NßBˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VÛÜ_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÛÜO^PÊNØÛÛœÝÏ^Û˜[YN›ÜÚY\ŽžPßKH˜Û\[™Qœ˜YÛY[‹PÏXÚYˆYš[™Y
ÓTS‘JHYš[™Y
ÓTS‘LŠHYš[™Y
ÓTS‘LÊHYš[™Y
ÓTS‘M
HYš[™Y
ÓTS‘MJHYš[™Y
ÓTS‘MŠBšYˆ
˜[ÙJHßBˆÙ[™Y‚ˆÚY™YˆÓTS‘B™[ÙHYˆ
Û\\Ý[˜ÙOŒŒ
BžÙ\ØØ\™ßBˆÙ[™Y‚ˆÚY™YˆÓTS‘L‚™[ÙHYˆ
Û\\Ý[˜ÙLŒŒ
BžÙ\ØØ\™ßBˆÙ[™Y‚ˆÚY™YˆÓTS‘LÂ™[ÙHYˆ
Û\\Ý[˜ÙLÏŒŒ
BžÙ\ØØ\™ßBˆÙ[™Y‚ˆÚY™YˆÓTS‘M™[ÙHYˆ
Û\\Ý[˜ÙMŒŒ
BžÙ\ØØ\™ßBˆÙ[™Y‚ˆÚY™YˆÓTS‘MB™[ÙHYˆ
Û\\Ý[˜ÙMOŒŒ
BžÙ\ØØ\™ßBˆÙ[™Y‚ˆÚY™YˆÓTS‘M‚™[ÙHYˆ
Û\\Ý[˜ÙMŒŒ
BžÙ\ØØ\™ßBˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VÛ_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÛOPPÊNØÛÛœÝ^Û˜[YN›ÚY\ŽPßKÜH™›ÙÑœ˜YÛY[‹ÏXÚY™Yˆ“ÑÂ™›Ø]›ÙÏPØ[Ñ›ÙÑ˜XÝÜŠ
NÂˆÚY™Yˆ”‚™›ÙÏ]Ó[™X\”ÜXÙJ›ÙÊNÂˆÙ[™Y‚˜ÛÛÜ‹œ™Ø[Z^
‘›ÙÐÛÛÜ‹ÛÛÜ‹œ™Ø‹›ÙÊNÂˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VØÜ_
K’[˜ÛY\ÔÚY\œÔÝÜ™VØÜOTÊNØÛÛœÝPÏ^Û˜[YN˜ÜÚY\Ž”ßKH˜ÛÛÜ”^[ÚY\ˆ‹ÐÏXÚYˆYš[™Y
‘T•VÓÓÔŠHYš[™Y
S”ÕSÑTÐÓÓÔŠH	‰ˆYš[™Y
S”ÕSÑTÊBˆÙYš[™H‘T•VÓÓÔ‚˜\žZ[™È™XÍÛÛÜŽÂˆÙ[ÙB[šY›Ü›H™XÍÛÛÜŽÂˆÙ[™Y‚ˆÚ[˜ÛYOÛ\[™Qœ˜YÛY[XÛ\˜][Û‚ˆÚ[˜ÛYO›ÙÑœ˜YÛY[XÛ\˜][Û‚ˆÙYš[™HÕTÕÓWÑ”QÓQS•ÑQ’S’USÓ”Â›ÚYXZ[Š›ÚY
HÂˆÙYš[™HÕTÕÓWÑ”QÓQS•ÓPRS—Ð‘QÒS‚ˆÚ[˜ÛYOÛ\[™Qœ˜YÛY[‚ˆÚYˆYš[™Y
‘T•VÓÓÔŠHYš[™Y
S”ÕSÑTÐÓÓÔŠH	‰ˆYš[™Y
S”ÕSÑTÊB™ÛÑœ˜YÐÛÛÜ]ÛÛÜŽÂˆÙ[ÙB™ÛÑœ˜YÐÛÛÜXÛÛÜŽÂˆÙ[™Y‚ˆÚ[˜ÛYO›ÙÑœ˜YÛY[ŠÛÛÜ‹ÛÑœ˜YÐÛÛÜŠBˆÙYš[™HÕTÕÓWÑ”QÓQS•ÓPRS—ÑS‘ŸXÜK”ÚY\œÔÝÜ™VÚ_
K”ÚY\œÔÝÜ™VÚOPÐÊNØÛÛœÝSVÕÝ‹Ë‹P×NÙ›ÜŠÛÛœÝˆÙˆSŠ\K’[˜ÛY\ÔÚY\œÔÝÜ™VÜ‹›˜[YW_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÜ‹›˜[YWO\‹œÚY\ŠNØÛÛœÝS^Û˜[YNšÚY\ŽÐßK“SØš™XÝ™œ™Y^™JØš™XÝ™Yš[™T›Ü\J××Ü›Ý××Î›[ÛÛÜ”^[ÚY\ŽžSŸKÞ[X›ÛÔÝš[™ÕYËÝ˜[YNˆ“[Ù[HŸJJKœH™XØ[™\^XÛ\˜][Ûˆ‹PÏXÚY™YˆPÐS[šY›Ü›H™XÍ‘XØ[[™›ÜÎÝ[šY›Ü›HX]XØ[X]š^ÂˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VÙœ_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÙœOSPÊNØÛÛœÝS^Û˜[YN™œÚY\Ž“PßK\H™Y˜][™\^XÛ\˜][Ûˆ‹ÏX[šY›Ü›HX]šY]Ô›Ú™XÝ[ÛŽÂˆÚY™YˆUSU’QUÂ›X]šY]Ô›Ú™XÝ[Û”ŽÂˆÙ[™Yˆ[šY›Ü›HX]šY]ÎÂˆÚY™YˆQ‘•TÑB[šY›Ü›HX]Y™\ÙSX]š^Ý[šY›Ü›H™XÌˆ‘Y™\ÙR[™›ÜÎÂˆÙ[™Y‚ˆÚY™YˆSP’QS•[šY›Ü›HX][XšY[X]š^Ý[šY›Ü›H™XÌˆ[XšY[[™›ÜÎÂˆÙ[™Y‚ˆÚY™YˆÔPÒUB[šY›Ü›HX]ÜXÚ]SX]š^Ý[šY›Ü›H™XÌˆ“ÜXÚ]R[™›ÜÎÂˆÙ[™Y‚ˆÚY™YˆSRTÔÒU‘B[šY›Ü›H™XÌˆ‘[Z\ÜÚ]™R[™›ÜÎÝ[šY›Ü›HX][Z\ÜÚ]™SX]š^ÂˆÙ[™Y‚ˆÚY™YˆQÒPT[šY›Ü›H™XÌˆ“YÚX\[™›ÜÎÝ[šY›Ü›HX]YÚX\X]š^ÂˆÙ[™Y‚ˆÚYˆYš[™Y
ÔPÕSTŠH	‰ˆYš[™Y
ÔPÕST•T“JB[šY›Ü›H™XÌˆ”ÜXÝ[\’[™›ÜÎÝ[šY›Ü›HX]ÜXÝ[\“X]š^ÂˆÙ[™Y‚ˆÚY™Yˆ•ST[šY›Ü›H™XÌÈ[\[™›ÜÎÝ[šY›Ü›HX][\X]š^ÂˆÙ[™Y‚ˆÚY™Yˆ‘Q“PÕSÓ‚[šY›Ü›HX]™Y›XÝ[Û“X]š^ÂˆÙ[™Y‚ˆÚY™YˆÒS•ÒV‘B[šY›Ü›H›Ø]Ú[Ú^™NÂˆÙ[™Y‚ˆÚY™YˆURS[šY›Ü›H™XÍ‘]Z[[™›ÜÎÝ[šY›Ü›HX]]Z[X]š^ÂˆÙ[™Y‚[šY›Ü›H™XÍØ[Y\˜R[™›ÎÝ[šY›Ü›H™XÍ•^\™T™\]][Û’^[[™Ô\˜[\ÎÂˆÚ[˜ÛYOXØ[™\^XÛ\˜][Û‚ˆÙYš[™HQUSÓSÕ‘T•VÑPÓTUSÓ‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VÝ\_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÝ\OQÊNØÛÛœÝ“^Û˜[YN\ÚY\Ž‘ßKHœØÙ[™UX›ÑXÛ\˜][Ûˆ‹ÏX^[Ý]
ÝMÛÛ[[—ÛXZ›ÜŠH[šY›Ü›NÝ[šY›Ü›HØÙ[™HÛX]šY]Ô›Ú™XÝ[ÛŽÂˆÚY™YˆUSU’QUÂ›X]šY]Ô›Ú™XÝ[Û”ŽÂˆÙ[™Yˆ›X]šY]ÎÛX]›Ú™XÝ[ÛŽÝ™XÍ‘^YTÜÚ][ÛŽÛX][™\œÙT›Ú™XÝ[ÛŽßNÂ˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VÙ_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÙOTÊNØÛÛœÝ]^Û˜[YN™ÚY\Ž”ßKÜH›Y\ÚX›ÑXÛ\˜][Ûˆ‹ÐÏXÚY™YˆÑP‘Ó‚[šY›Ü›HX]ÛÜ›Ý[šY›Ü›H›Ø]š\ÚXš[]NÂˆÙ[ÙB›^[Ý]
ÝMÛÛ[[—ÛXZ›ÜŠH[šY›Ü›NÝ[šY›Ü›HY\ÚžÛX]ÛÜ›Ù›Ø]š\ÚXš[]NßNÂˆÙ[™Y‚ˆÙYš[™HÓÔ“ÕP“Â˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™V×Ü_
K’[˜ÛY\ÔÚY\œÔÝÜ™V×ÜO]ÐÊNØÛÛœÝ]^Û˜[YN—ÜÚY\ŽÐßK\H™Y˜][X›ÑXÛ\˜][Ûˆ‹ÐÏX^[Ý]
ÝMÛÛ[[—ÛXZ›ÜŠH[šY›Ü›NÝ[šY›Ü›HX]\šX[žÝ™XÍY™\ÙSYÛÛÜŽÝ™XÍY™\ÙTšYÚÛÛÜŽÝ™XÍÜXÚ]T\ÎÝ™XÍ™Y›XÝ[Û“YÛÛÜŽÝ™XÍ™Y›XÝ[Û”šYÚÛÛÜŽÝ™XÍ™Yœ˜XÝ[Û“YÛÛÜŽÝ™XÍ™Yœ˜XÝ[Û”šYÚÛÛÜŽÝ™XÍ[Z\ÜÚ]™SYÛÛÜŽÝ™XÍ[Z\ÜÚ]™TšYÚÛÛÜŽÝ™XÌˆ‘Y™\ÙR[™›ÜÎÝ™XÌˆ[XšY[[™›ÜÎÝ™XÌˆ“ÜXÚ]R[™›ÜÎÝ™XÌˆ‘[Z\ÜÚ]™R[™›ÜÎÝ™XÌˆ“YÚX\[™›ÜÎÝ™XÌˆ”ÜXÝ[\’[™›ÜÎÝ™XÌÈ[\[™›ÜÎÛX]Y™\ÙSX]š^ÛX][XšY[X]š^ÛX]ÜXÚ]SX]š^ÛX][Z\ÜÚ]™SX]š^ÛX]YÚX\X]š^ÛX]ÜXÝ[\“X]š^ÛX][\X]š^Ý™XÌˆ•[™Ù[ÜXÙT\˜[\ÎÙ›Ø]Ú[Ú^™NÙ›Ø][PÝ]Ù™ŽÛX]™Yœ˜XÝ[Û“X]š^Ý™XÍ”™Yœ˜XÝ[Û’[™›ÜÎÝ™XÌÈ”™Yœ˜XÝ[Û”ÜÚ][ÛŽÝ™XÌÈ”™Yœ˜XÝ[Û”Ú^™NÝ™XÍ”ÜXÝ[\ÛÛÜŽÝ™XÌÈ‘[Z\ÜÚ]™PÛÛÜŽÝ™XÍ‘Y™\ÙPÛÛÜŽÝ™XÌÈ[XšY[ÛÛÜŽÝ™XÍØ[Y\˜R[™›ÎÝ™XÍ•^\™T™\]][Û’^[[™Ô\˜[\ÎÝ™XÌˆ”™Y›XÝ[Û’[™›ÜÎÛX]™Y›XÝ[Û“X]š^Ý™XÌÈ”™Y›XÝ[Û”ÜÚ][ÛŽÝ™XÌÈ”™Y›XÝ[Û”Ú^™NÂˆÙYš[™HQUSÓSÕP“×ÑPÓTUSÓ‚ŸNÂˆÚ[˜ÛYOØÙ[™UX›ÑXÛ\˜][Û‚ˆÚ[˜ÛYOY\ÚX›ÑXÛ\˜][Û‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VÛ\_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÛ\OSÐÊNØÛÛœÝÏ^Û˜[YN›\ÚY\Ž“ÐßKH]]šX]QXÛ\˜][Ûˆ‹ÏXÚY™YˆUžÖB˜]šX]H™XÌˆ]žÖNÂˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VÜ_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÜOQÊNØÛÛœÝS^Û˜[YNœÚY\Ž‘ßKÜHš[\‘[˜Ý[ÛœÈ‹ÏXÛÛœÝ›Ø]OLËŒMMNLLÍNMÎLÌŒÎŒÌÎÌÎMNØÛÛœÝ›Ø]Ó×ÔOM‹ŒŽÌNLÌÌMÎMNŽØÛÛœÝ›Ø]S—ÔOLKMÌÎMŒÌÎMMŽØÛÛœÝ›Ø]‘PÒT“ÐÐSÔOLŒÌNÌNŒNÍÎLÎØÛÛœÝ›Ø]‘PÒT“ÐÐSÔLLŒMNLMMMÌLNMLÍNØÛÛœÝ›Ø]‘PÒT“ÐÐSÔMLŒÎMMÍÍÌMMNMÍÎØÛÛœÝ›Ø]S—ÓRSMKŽMŒKLÈ˜ÛÛœÝ›Ø][™X\‘[˜ÛÙTÝÙ\\›ÞL‹ŒŽØÛÛœÝ›Ø]Ø[[XQ[˜ÛÙTÝÙ\\›ÞLKŒÓ[™X\‘[˜ÛÙTÝÙ\\›ÞØÛÛœÝ™XÌÈ[Z[˜[˜ÙQ[˜ÛÙP\›Þ]™XÌÊŒŒL‹ÌML‹ŒÌŒŠNØÛÛœÝ›Ø]\Ú[ÛLŒNÂˆÙYš[™HØ]\˜]J
HÛ[\
ŒKŒ
BˆÙYš[™HXœÑ\Ê
HXœÊ
JÑ\Ú[Û‚ˆÙYš[™HX^\Ê
HX^
\Ú[ÛŠBˆÙYš[™HØ]\˜]Q\Ê
HÛ[\
\Ú[Û‹KŒ
B›X]È˜[œÜÜÙSX]ÊX]È[“X]š^
HÝ™XÌÈLZ[“X]š^ÌNÝ™XÌÈLOZ[“X]š^ÌWNÝ™XÌÈLZ[“X]š^Ì—NÛX]ÈÝ]X]š^[X]Ê™XÌÊLžLKžL‹ž
K™XÌÊLžKLKžKL‹žJK™XÌÊLž‹LKž‹L‹žŠBŠNÜ™]\›ˆÝ]X]š^ßB›X]È[™\œÙSX]ÊX]È[“X]š^
HÙ›Ø]LZ[“X]š^ÌVÌKLOZ[“X]š^ÌVÌWKLZ[“X]š^ÌVÌ—NÙ›Ø]LLZ[“X]š^ÌWVÌKLLOZ[“X]š^ÌWVÌWKLLZ[“X]š^ÌWVÌ—NÙ›Ø]LŒZ[“X]š^Ì—VÌKLŒOZ[“X]š^Ì—VÌWKLŒZ[“X]š^Ì—VÌ—NÙ›Ø]ŒOXLŒŠ˜LLKXLLŠ˜LŒNÙ›Ø]ŒLOKXLŒŠ˜LL
ØLLŠ˜LŒÙ›Ø]ŒŒOXLŒJ˜LLXLLJ˜LŒÙ›Ø]]XL
˜ŒJØLJ˜ŒLJØLŠ˜ŒŒNÜ™]\›ˆX]ÊŒK
XLŒŠ˜LJØLŠ˜LŒJK
LLŠ˜LKXLŠ˜LLJK˜ŒLK
LŒŠ˜LXLŠ˜LŒ
K
XLLŠ˜L
ØLŠ˜LL
K˜ŒŒK
XLŒJ˜L
ØLJ˜LŒ
K
LLJ˜LXLJ˜LL
JKÙ]ßBˆÚYˆTÑWÑVPÕÔÔ‘Ð—ÐÓÓ•‘T”ÒSÓ”Â™XÌÈÓ[™X\”ÜXÙQ^XÝ
™XÌÈÛÛÜŠBžÝ™XÌÈ™X\–™\›ÔÙXÝ[ÛLŒÍÌÎNLÎ
˜ÛÛÜŽÝ™XÌÈ™[XZ[š[™ÔÙXÝ[Û\ÝÊŽMÎÌŽNJŠÛÛÜŠÝ™XÌÊŒMJJK™XÌÊ‹
JNÂˆÚYˆYš[™Y
ÑP‘ÓŠHYš[™Y
ÑP‘ÔJHYš[™Y
UU‘JBœ™]\›ˆZ^
™[XZ[š[™ÔÙXÝ[Û‹™X\–™\›ÔÙXÝ[Û‹\ÜÕ[‘\]X[
ÛÛÜ‹™XÌÊŒJJJNÂˆÙ[ÙBœ™]\›‚™XÌÊ˜ÛÛÜ‹œLŒHÈ™X\–™\›ÔÙXÝ[Û‹œˆˆ™[XZ[š[™ÔÙXÝ[Û‹œ‹˜ÛÛÜ‹™ÏLŒHÈ™X\–™\›ÔÙXÝ[Û‹™Èˆ™[XZ[š[™ÔÙXÝ[Û‹™Ë˜ÛÛÜ‹˜LŒHÈ™X\–™\›ÔÙXÝ[Û‹˜ˆˆ™[XZ[š[™ÔÙXÝ[Û‹˜ŠNÂˆÙ[™Y‚ŸB™XÌÈÑØ[[XTÜXÙQ^XÝ
™XÌÈÛÛÜŠBžÝ™XÌÈ™X\–™\›ÔÙXÝ[ÛLL‹ŽLŠ˜ÛÛÜŽÝ™XÌÈ™[XZ[š[™ÔÙXÝ[ÛLKŒMJœÝÊÛÛÜ‹™XÌÊMŠJK]™XÌÊŒMJNÂˆÚYˆYš[™Y
ÑP‘ÓŠHYš[™Y
ÑP‘ÔJHYš[™Y
UU‘JBœ™]\›ˆZ^
™[XZ[š[™ÔÙXÝ[Û‹™X\–™\›ÔÙXÝ[Û‹\ÜÕ[‘\]X[
ÛÛÜ‹™XÌÊŒÌLÌ
JJNÂˆÙ[ÙBœ™]\›‚™XÌÊ˜ÛÛÜ‹œLŒÌLÌÈ™X\–™\›ÔÙXÝ[Û‹œˆˆ™[XZ[š[™ÔÙXÝ[Û‹œ‹˜ÛÛÜ‹™ÏLŒÌLÌÈ™X\–™\›ÔÙXÝ[Û‹™Èˆ™[XZ[š[™ÔÙXÝ[Û‹™Ë˜ÛÛÜ‹˜LŒÌLÌÈ™X\–™\›ÔÙXÝ[Û‹˜ˆˆ™[XZ[š[™ÔÙXÝ[Û‹˜ŠNÂˆÙ[™Y‚ŸBˆÙ[™Y‚™›Ø]Ó[™X\”ÜXÙJ›Ø]ÛÛÜŠBžÂˆÚYˆTÑWÑVPÕÔÔ‘Ð—ÐÓÓ•‘T”ÒSÓ”Â™›Ø]™X\–™\›ÔÙXÝ[ÛLŒÍÌÎNLÎ
˜ÛÛÜŽÙ›Ø]™[XZ[š[™ÔÙXÝ[Û\ÝÊŽMÎÌŽNJŠÛÛÜŠÌŒMJK‹
NÜ™]\›ˆÛÛÜLŒHÈ™X\–™\›ÔÙXÝ[Ûˆˆ™[XZ[š[™ÔÙXÝ[ÛŽÂˆÙ[ÙBœ™]\›ˆÝÊÛÛÜ‹[™X\‘[˜ÛÙTÝÙ\\›Þ
NÂˆÙ[™Y‚ŸB™XÌÈÓ[™X\”ÜXÙJ™XÌÈÛÛÜŠBžÂˆÚYˆTÑWÑVPÕÔÔ‘Ð—ÐÓÓ•‘T”ÒSÓ”Âœ™]\›ˆÓ[™X\”ÜXÙQ^XÝ
ÛÛÜŠNÂˆÙ[ÙBœ™]\›ˆÝÊÛÛÜ‹™XÌÊ[™X\‘[˜ÛÙTÝÙ\\›Þ
JNÂˆÙ[™Y‚ŸB™XÍÓ[™X\”ÜXÙJ™XÍÛÛÜŠBžÂˆÚYˆTÑWÑVPÕÔÔ‘Ð—ÐÓÓ•‘T”ÒSÓ”Âœ™]\›ˆ™XÍ
Ó[™X\”ÜXÙQ^XÝ
ÛÛÜ‹œ™ØŠKÛÛÜ‹˜JNÂˆÙ[ÙBœ™]\›ˆ™XÍ
ÝÊÛÛÜ‹œ™Ø‹™XÌÊ[™X\‘[˜ÛÙTÝÙ\\›Þ
JKÛÛÜ‹˜JNÂˆÙ[™Y‚ŸB™›Ø]ÑØ[[XTÜXÙJ›Ø]ÛÛÜŠBžÂˆÚYˆTÑWÑVPÕÔÔ‘Ð—ÐÓÓ•‘T”ÒSÓ”Â™›Ø]™X\–™\›ÔÙXÝ[ÛLL‹ŽLŠ˜ÛÛÜŽÙ›Ø]™[XZ[š[™ÔÙXÝ[ÛLKŒMJœÝÊÛÛÜ‹MŠKLŒMNÜ™]\›ˆÛÛÜLŒÌLÌÈ™X\–™\›ÔÙXÝ[Ûˆˆ™[XZ[š[™ÔÙXÝ[ÛŽÂˆÙ[ÙBœ™]\›ˆÝÊÛÛÜ‹Ø[[XQ[˜ÛÙTÝÙ\\›Þ
NÂˆÙ[™Y‚ŸB™XÌÈÑØ[[XTÜXÙJ™XÌÈÛÛÜŠBžÂˆÚYˆTÑWÑVPÕÔÔ‘Ð—ÐÓÓ•‘T”ÒSÓ”Âœ™]\›ˆÑØ[[XTÜXÙQ^XÝ
ÛÛÜŠNÂˆÙ[ÙBœ™]\›ˆÝÊÛÛÜ‹™XÌÊØ[[XQ[˜ÛÙTÝÙ\\›Þ
JNÂˆÙ[™Y‚ŸB™XÍÑØ[[XTÜXÙJ™XÍÛÛÜŠBžÂˆÚYˆTÑWÑVPÕÔÔ‘Ð—ÐÓÓ•‘T”ÒSÓ”Âœ™]\›ˆ™XÍ
ÑØ[[XTÜXÙQ^XÝ
ÛÛÜ‹œ™ØŠKÛÛÜ‹˜JNÂˆÙ[ÙBœ™]\›ˆ™XÍ
ÝÊÛÛÜ‹œ™Ø‹™XÌÊØ[[XQ[˜ÛÙTÝÙ\\›Þ
JKÛÛÜ‹˜JNÂˆÙ[™Y‚ŸB™›Ø]Ü]X\™J›Ø]˜[YJBžÜ™]\›ˆ˜[YJ˜[YNßB™XÌÈÜ]X\™J™XÌÈ˜[YJBžÜ™]\›ˆ˜[YJ˜[YNßB™›Ø]ÝÍJ›Ø]˜[YJHÙ›Ø]ÜO]˜[YJ˜[YNÜ™]\›ˆÜJœÜJ˜[YNßB™XÌÈÝX›WÜ™Yœ˜XÝ
™XÌÈK™XÌÈ‹›Ø]]JHÝ™XÌÈœ›Û\™Yœ˜XÝ
K‹KŒÙ]JNÝ™XÌÈ˜˜XÚÏ[›Ü›X[^™J™Y›XÝ
‹œ›Û
JNÜ™]\›ˆ™Yœ˜XÝ
œ›ÛS˜˜XÚË]JNßB™›Ø]Ù][Z[˜[˜ÙU[˜Û[\Y
™XÌÈÛÛÜŠBžÜ™]\›ˆÝ
ÛÛÜ‹[Z[˜[˜ÙQ[˜ÛÙP\›Þ
NßB™›Ø]Ù][Z[˜[˜ÙJ™XÌÈÛÛÜŠBžÜ™]\›ˆØ]\˜]JÙ][Z[˜[˜ÙU[˜Û[\Y
ÛÛÜŠJNßB™›Ø]Ù]˜[™
™XÌˆÙYY
HÜ™]\›ˆœ˜XÝ
Ú[ŠÝ
ÙYYžH™XÌŠL‹ŽNNÎŒŒÌÊJJJÍÍNMLÊNßB™›Ø]]\Š™XÌˆÙYY›Ø]˜\šX[˜ÙP[[Ý[
HÙ›Ø]˜[™YÙ]˜[™
ÙYY
NÙ›Ø]›Ü›U˜\šX[˜ÙO]˜\šX[˜ÙP[[Ý[ÌMKŒÙ›Ø]]\[Z^
[›Ü›U˜\šX[˜ÙK›Ü›U˜\šX[˜ÙK˜[™
NÜ™]\›ˆ]\ŽßB˜ÛÛœÝ›Ø]™Ø™X^˜[™ÙOLMKŽÝ™XÍÔ‘Ð‘
™XÌÈÛÛÜŠHÙ›Ø]X^‘Ð[X^\ÊX^
ÛÛÜ‹œ‹X^
ÛÛÜ‹™ËÛÛÜ‹˜ŠJJNÙ›Ø][X^
™Ø™X^˜[™ÙKÛX^‘Ð‹KŠNÑ\Ø]\˜]J›ÛÜŠ
KÌMKŠNÝ™XÌÈ™ØXÛÛÜ‹œ™ØŠ‘Ü™Ø]ÑØ[[XTÜXÙJ™ØŠNÜ™]\›ˆ™XÍ
Ø]\˜]J™ØŠK
NßB™XÌÈœ›ÛT‘Ð‘
™XÍ™Ø™
HÜ™Ø™œ™Ø]Ó[™X\”ÜXÙJ™Ø™œ™ØŠNÜ™]\›ˆ™Ø™œ™Ø‹Ü™Ø™˜NßB™XÌÈ\˜[^ÛÜœ™XÝ›Ü›X[
™XÌÈ™\^ÜË™XÌÈÜšYÕ™XË™XÌÈÝX™TÚ^™K™XÌÈÝX™TÜÈ
HÝ™XÌÈ[“ÜšYÕ™XÏ]™XÌÊKŠKÛÜšYÕ™XÎÝ™XÌÈ[”Ú^™OXÝX™TÚ^™JŒNÝ™XÌÈ[\œÙXÐ]X^[™OJÝX™TÜÊÚ[”Ú^™K]™\^ÜÊJš[“ÜšYÕ™XÎÝ™XÌÈ[\œÙXÐ]Z[”[™OJÝX™TÜËZ[”Ú^™K]™\^ÜÊJš[“ÜšYÕ™XÎÝ™XÌÈ\™Ù\Ý[\œÙXÏ[X^
[\œÙXÐ]X^[™K[\œÙXÐ]Z[”[™JNÙ›Ø]\Ý[˜ÙO[Z[ŠZ[Š\™Ù\Ý[\œÙXËž\™Ù\Ý[\œÙXËžJK\™Ù\Ý[\œÙXËžŠNÝ™XÌÈ[\œÙXÝÜÚ][Û•ÔÏ]™\^ÜÊÛÜšYÕ™XÊ™\Ý[˜ÙNÜ™]\›ˆ[\œÙXÝÜÚ][Û•ÔËXÝX™TÜÎßB™XÌÈ\]Z\™XÝ[™Ý[\•ÐÝX™[X\\™XÝ[ÛŠ™XÌˆ]ŠHÙ›Ø]Û™Ú]YO]]‹ž
•Ó×ÔKTNÙ›Ø]]]YORS—ÔK]]‹žJ”NÝ™XÌÈ\™XÝ[ÛŽÙ\™XÝ[Û‹žXÛÜÊ]]YJJœÚ[ŠÛ™Ú]YJNÙ\™XÝ[Û‹žO\Ú[Š]]YJNÙ\™XÝ[Û‹žXÛÜÊ]]YJJ˜ÛÜÊÛ™Ú]YJNÜ™]\›ˆ\™XÝ[ÛŽßB™›Ø]Ü\Û[\Y
›Ø]˜[YJHÜ™]\›ˆÜ\
X^
˜[YKŠJNßB™›Ø]]™Ê™XÌÈ˜[YJHÜ™]\›ˆÝ
˜[YK™XÌÊŒÌÌÌÌÌÌÌÌÊJNßBˆÚYˆYš[™Y
ÑP‘ÓŠHYš[™Y
ÑP‘ÔJHYš[™Y
UU‘JBœ™XÚ\Ú[ÛˆYÚ[ÝZ[^˜XÝš]ÊZ[˜[YK[Ù™œÙ][ÚY
HÜ™]\›ˆ
˜[YO›Ù™œÙ]
H	ˆ

]OÚY
KL]JNßBš[Û›Pš]ÜÚ][ÛŠZ[˜[YJHÜ™]\›ˆ
›Ø]š]ÕÒ[
›Ø]
˜[YJJOŒŒÊKLÙŽßB™XÌÈÚ[™ÛTØØ]\•Ó][TØØ]\[™YÊ™XÌÈš×ÜÜÊHÝ™XÌÈÏ\Ü\
X^
™XÌÊKŒ
K\š×ÜÜË™XÌÊŒ
JJNÜ™]\›ˆ
™XÌÊKŒ
K\ÊJŠ™XÌÊKŒ
K]™XÌÊŒLÎJJœÊKÊ™XÌÊKŒ
JÝ™XÌÊKŒMÊJœÊNßB™XÌÈ][TØØ]\•ÔÚ[™ÛTØØ]\[™YÊ™XÌÈš×Û\ÊHÝ™XÌÈÏMŒMÌLŠÍŒŒŒÊœš×Û\Ë\Ü\
KNLŒMÊÍKŽ
œš×Û\ÊÌMËÌLŠœš×Û\Êœš×Û\ÊNÜ™]\›ˆKŒ\ÊœÎßB™XÌÈ][TØØ]\•ÔÚ[™ÛTØØ]\[™YÊ™XÌÈš×Û\Ë›Ø][š\ÛÊHÝ™XÌÈÏMŒMÌLŠÍŒŒŒÊœš×Û\Ë\Ü\
KNLŒMÊÍKŽ
œš×Û\ÊÌMËÌLŠœš×Û\Êœš×Û\ÊNÜ™]\›ˆ
KŒ\ÊœÊKÛX^\ÊKŒX[š\ÛÊœÊœÊNßB™›Ø]Z[ŒÊ™XÌÈŠHÜ™]\›ˆZ[Š‹žZ[Š‹žK‹žŠJNßB™›Ø]X^Ê™XÌÈŠHÜ™]\›ˆX^
‹žX^
‹žK‹žŠJNßB™›Ø]Z[™›Ø]
Z[JHÜ™]\›ˆZ[š]ÕÑ›Ø]
ÑŽH
OŽ]JJKLKŒßB™XÌˆ\ÝXÔÙ\]Y[˜ÙJÛÛœÝZ[œÝ]JHÜ™]\›ˆ™XÌŠZ[™›Ø]
œÝ]JŒÌŒMÍ]JKZ[™›Ø]
œÝ]JŒÍMMJJNßBˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VÙÜ_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÙÜOSÊNØÛÛœÝ^Û˜[YN™ÜÚY\Ž“ßKœHœ™T\ÜÕ™\^XÛ\˜][Ûˆ‹PÏXÚY™Yˆ‘TTÔÂˆÚY™Yˆ‘TTÔ×ÓÐÐSÔÔÒUSÓ‚˜\žZ[™È™XÌÈ”ÜÚ][ÛŽÂˆÙ[™Y‚ˆÚY™Yˆ‘TTÔ×ÑT˜\žZ[™È™XÌÈ•šY]ÔÜÎÂˆÙ[™Y‚ˆÚY™Yˆ‘TTÔ×Ó“Ô“PSV‘QÕ’QU×ÑT˜\žZ[™È›Ø]“›Ü›UšY]Ñ\ÂˆÙ[™Y‚ˆÚYˆYš[™Y
‘TTÔ×Õ‘SÐÒUJHYš[™Y
‘TTÔ×Õ‘SÐÒUWÓS‘PTŠB[šY›Ü›HX]™]š[Ý\ÕšY]Ô›Ú™XÝ[ÛŽÝ˜\žZ[™È™XÍÝ\œ™[ÜÚ][ÛŽÝ˜\žZ[™È™XÍ”™]š[Ý\ÔÜÚ][ÛŽÂˆÙ[™Y‚ˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VÝœ_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÝœOUPÊNØÛÛœÝÓ^Û˜[YNœÚY\Ž•PßKH›XZ[•U•˜\žZ[™ÑXÛ\˜][Ûˆ‹ÏXÚY™YˆPRS•UžÖB˜\žZ[™È™XÌˆ“XZ[•UžÖNÂˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VÞ_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÞOPÊNØÛÛœÝÏ^Û˜[YNžÚY\ŽßKÜHœØ[\\•™\^XÛ\˜][Ûˆ‹ÏXÚYˆYš[™Y
ÑQ’S‘SSQWÊH	‰ˆÑQ’S‘SSQWÑT‘PÕUOL˜\žZ[™È™XÌˆ—ÕT–RS‘ÓSQWÕUŽÂˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VÔÜ_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÔÜO^ÊNØÛÛœÝS^Û˜[YN”ÜÚY\ŽžßKH˜[\™\^XÛ\˜][Ûˆ‹ÐÏXÚYˆYš[™Y
•ST
HYš[™Y
TSV
HYš[™Y
ÓPTÓÐUÐ•ST
HYš[™Y
S’TÓÕ“ÔPÊBˆÚYˆYš[™Y
S‘ÑS•
H	‰ˆYš[™Y
“Ô“PS
H˜\žZ[™ÈX]È•“ŽÂˆÙ[™Y‚ˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VÕ_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÕOZÐÊNØÛÛœÝ^Û˜[YN•ÚY\ŽšÐßK\H›YÚžœ˜YÛY[XÛ\˜][Ûˆ‹ÐÏXÚY™YˆQÒÖB[šY›Ü›H™XÍ“YÚ]^ÖNÝ[šY›Ü›H™XÍ“YÚY™\Ù^ÖNÂˆÚY™YˆÔPÕST•T“B[šY›Ü›H™XÍ“YÚÜXÝ[\žÖNÂˆÙ[ÙB™XÍ“YÚÜXÝ[\žÖO]™XÍ
ŠNÂˆÙ[™Y‚ˆÚY™YˆÒQÕÞÖBˆÚY™YˆÒQÕÐÔÓ^ÖB[šY›Ü›HX]YÚX]š^ÖVÔÒQÕÐÔÓS•SWÐÐTÐÐQTÞÖWNÝ˜\žZ[™È™XÍ”ÜÚ][Û‘œ›ÛSYÚÖVÔÒQÕÐÔÓS•SWÐÐTÐÐQTÞÖWNÝ˜\žZ[™È›Ø]‘\Y]šXÞÖVÔÒQÕÐÔÓS•SWÐÐTÐÐQTÞÖWNÝ˜\žZ[™È™XÍ”ÜÚ][Û‘œ›ÛPØ[Y\˜^ÖNÂˆÙ[YˆYš[™Y
ÒQÕÐÕP‘^ÖJBˆÙ[ÙB˜\žZ[™È™XÍ”ÜÚ][Û‘œ›ÛSYÚÖNÝ˜\žZ[™È›Ø]‘\Y]šXÞÖNÝ[šY›Ü›HX]YÚX]š^ÖNÂˆÙ[™Y‚[šY›Ü›H™XÍÚYÝÜÒ[™›ÞÖNÝ[šY›Ü›H™XÌˆ\˜[Y\ÞÖNÂˆÙ[™Y‚ˆÚY™YˆÔÕQÒÖB[šY›Ü›H™XÍ“YÚ\™XÝ[ÛžÖNÝ[šY›Ü›H™XÍ“YÚ˜[Ù™žÖNÂˆÙ[YˆYš[™Y
ÒS•QÒÖJB[šY›Ü›H™XÍ“YÚ˜[Ù™žÖNÂˆÙ[YˆYš[™Y
SRSQÒÖJB[šY›Ü›H™XÌÈ“YÚÜ›Ý[™ÖNÂˆÙ[™Y‚ˆÚYˆYš[™Y
T‘PSQÒÖJH	‰ˆYš[™Y
T‘PSQÒTÑQ
H	‰ˆYš[™Y
T‘PSQÒÕTÔ•Q
B[šY›Ü›H™XÍ“YÚÚYÖNÝ[šY›Ü›H™XÍ“YÚZYÚÖNÂˆÙ[™Y‚ˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VÑ\_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÑ\OQÐÊNØÛÛœÝ^Û˜[YN‘\ÚY\Ž‘ÐßK\H›YÚžX›ÑXÛ\˜][Ûˆ‹ÏXÚY™YˆQÒÖB[šY›Ü›HYÚÖBžÝ™XÍ“YÚ]NÝ™XÍ“YÚY™\ÙNÝ™XÍ“YÚÜXÝ[\ŽÂˆÚY™YˆÔÕQÒÖB™XÍ“YÚ\™XÝ[ÛŽÝ™XÍ“YÚ˜[Ù™ŽÂˆÙ[YˆYš[™Y
ÒS•QÒÖJB™XÍ“YÚ˜[Ù™ŽÂˆÙ[YˆYš[™Y
SRSQÒÖJB™XÌÈ“YÚÜ›Ý[™ÂˆÙ[YˆYš[™Y
ÓTÕQÒÖJB™XÌˆ”ÛXÙQ]NÝ™XÌˆ”ÛXÙT˜[™Ù\ÖÐÓTÕQÒÔÓPÑT×NÂˆÙ[™Y‚ˆÚYˆYš[™Y
T‘PSQÒÖJH	‰ˆYš[™Y
T‘PSQÒTÑQ
H	‰ˆYš[™Y
T‘PSQÒÕTÔ•Q
B™XÍ“YÚÚYÝ™XÍ“YÚZYÚÂˆÙ[™Y‚™XÍÚYÝÜÒ[™›ÎÝ™XÌˆ\˜[Y\ÎßHYÚÖNÂˆÚY™YˆÒQÕÞÖBˆÚY™YˆÒQÕÐÔÓ^ÖB[šY›Ü›HX]YÚX]š^ÖVÔÒQÕÐÔÓS•SWÐÐTÐÐQTÞÖWNÝ˜\žZ[™È™XÍ”ÜÚ][Û‘œ›ÛSYÚÖVÔÒQÕÐÔÓS•SWÐÐTÐÐQTÞÖWNÝ˜\žZ[™È›Ø]‘\Y]šXÞÖVÔÒQÕÐÔÓS•SWÐÐTÐÐQTÞÖWNÝ˜\žZ[™È™XÍ”ÜÚ][Û‘œ›ÛPØ[Y\˜^ÖNÂˆÙ[YˆYš[™Y
ÒQÕÐÕP‘^ÖJBˆÙ[ÙB˜\žZ[™È™XÍ”ÜÚ][Û‘œ›ÛSYÚÖNÝ˜\žZ[™È›Ø]‘\Y]šXÞÖNÝ[šY›Ü›HX]YÚX]š^ÖNÂˆÙ[™Y‚ˆÙ[™Y‚ˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VÞ\_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÞ\OVÊNØÛÛœÝÓ^Û˜[YNž\ÚY\Ž–ßKœH›[Üœ\™Ù]Õ™\^ÛØ˜[XÛ\˜][Ûˆ‹ÐÏXÚY™YˆSÔ”T‘ÑUÂ[šY›Ü›H›Ø][Üœ\™Ù][™›Y[˜Ù\ÖÓ•SWÓSÔ”ÒS‘“QSÑT”×NÂˆÚY™YˆSÔ”T‘ÑU×ÕVT‘H[šY›Ü›H›Ø][Üœ\™Ù]^\™R[™XÙ\ÖÓ•SWÓSÔ”ÒS‘“QSÑT”×NÝ[šY›Ü›H™XÌÈ[Üœ\™Ù]^\™R[™›ÎÝ[šY›Ü›HYÚØ[\\Œ‘\œ˜^H[Üœ\™Ù]ÎÝ™XÌÈ™XY™XÝÜŒÑœ›ÛT˜]ÔØ[\\Š[\™Ù][™^›Ø]™\^[™^
BžÈˆÚYˆYš[™Y
ÑP‘ÓŠHYš[™Y
ÑP‘ÔJBš[^\™UÚYZ[
[Üœ\™Ù]^\™R[™›ËžJNÚ[OZ[
™\^[™^
KÝ^\™UÚYÚ[Z[
™\^[™^
H	H^\™UÚYÜ™]\›ˆ^[™]Ú
[Üœ\™Ù]Ë]™XÌÊK[
[Üœ\™Ù]^\™R[™XÙ\ÖÝ\™Ù][™^JJK
Kž^ŽÂˆÙ[ÙB™›Ø]OY›ÛÜŠ™\^[™^Û[Üœ\™Ù]^\™R[™›ËžJNÙ›Ø]]™\^[™^^J›[Üœ\™Ù]^\™R[™›ËžNÝ™XÌÈ^\™UU]™XÌÊ

ÌJKÛ[Üœ\™Ù]^\™R[™›ËžK
JÌJKÛ[Üœ\™Ù]^\™R[™›Ëž‹[Üœ\™Ù]^\™R[™XÙ\ÖÝ\™Ù][™^JNÜ™]\›ˆ^\™J[Üœ\™Ù]Ë^\™UUŠKž^ŽÂˆÙ[™Y‚ŸB™XÍ™XY™XÝÜœ›ÛT˜]ÔØ[\\Š[\™Ù][™^›Ø]™\^[™^
BžÈˆÚYˆYš[™Y
ÑP‘ÓŠHYš[™Y
ÑP‘ÔJBš[^\™UÚYZ[
[Üœ\™Ù]^\™R[™›ËžJNÚ[OZ[
™\^[™^
KÝ^\™UÚYÚ[Z[
™\^[™^
H	H^\™UÚYÜ™]\›ˆ^[™]Ú
[Üœ\™Ù]Ë]™XÌÊK[
[Üœ\™Ù]^\™R[™XÙ\ÖÝ\™Ù][™^JJK
NÂˆÙ[ÙB™›Ø]OY›ÛÜŠ™\^[™^Û[Üœ\™Ù]^\™R[™›ËžJNÙ›Ø]]™\^[™^^J›[Üœ\™Ù]^\™R[™›ËžNÝ™XÌÈ^\™UU]™XÌÊ

ÌJKÛ[Üœ\™Ù]^\™R[™›ËžK
JÌJKÛ[Üœ\™Ù]^\™R[™›Ëž‹[Üœ\™Ù]^\™R[™XÙ\ÖÝ\™Ù][™^JNÜ™]\›ˆ^\™J[Üœ\™Ù]Ë^\™UUŠNÂˆÙ[™Y‚ŸBˆÙ[™Y‚ˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VØœ_
K’[˜ÛY\ÔÚY\œÔÝÜ™VØœOUÐÊNØÛÛœÝÓ^Û˜[YN˜œÚY\Ž•ÐßK\H›[Üœ\™Ù]Õ™\^XÛ\˜][Ûˆ‹ÏXÚY™YˆSÔ”T‘ÑUÂˆÚY›™YˆSÔ”T‘ÑU×ÕVT‘BˆÚY™YˆSÔ”T‘ÑU×ÔÔÒUSÓ‚˜]šX]H™XÌÈÜÚ][ÛžÖNÂˆÙ[™Y‚ˆÚY™YˆSÔ”T‘ÑU×Ó“Ô“PS˜]šX]H™XÌÈ›Ü›X[ÖNÂˆÙ[™Y‚ˆÚY™YˆSÔ”T‘ÑU×ÕS‘ÑS•˜]šX]H™XÌÈ[™Ù[ÖNÂˆÙ[™Y‚ˆÚY™YˆSÔ”T‘ÑU×ÕU‚˜]šX]H™XÌˆ]—ÞÖNÂˆÙ[™Y‚ˆÚY™YˆSÔ”T‘ÑU×ÕUŒ‚˜]šX]H™XÌˆ]Œ—ÞÖNÂˆÙ[™Y‚ˆÚY™YˆSÔ”T‘ÑU×ÐÓÓÔ‚˜]šX]H™XÍÛÛÜžÖNÂˆÙ[™Y‚ˆÙ[YˆÖOOL[šY›Ü›H›Ø][Üœ\™Ù]ÛÝ[ÂˆÙ[™Y‚ˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VÐ\_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÐ\ORÊNØÛÛœÝ^Û˜[YN\ÚY\Ž’ßKœH›ÙÑ\XÛ\˜][Ûˆ‹PÏXÚY™YˆÑÐT’URPÑT[šY›Ü›H›Ø]ÙØ\š]ZXÑ\ÛÛœÝ[Ý˜\žZ[™È›Ø]‘œ˜YÛY[\ÂˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VÔœ_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÔœOVPÊNØÛÛœÝ]O^Û˜[YN”œÚY\Ž–PßK\H›[Üœ\™Ù]Õ™\^ÛØ˜[‹PÏXÚY™YˆSÔ”T‘ÑUÂˆÚY™YˆSÔ”T‘ÑU×ÕVT‘B™›Ø]™\^QÂˆÙ[™Y‚ˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VÒ\_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÒ\O\PÊNØÛÛœÝ“^Û˜[YN’\ÚY\ŽœPßKÜH›[Üœ\™Ù]Õ™\^‹ÏXÚY™YˆSÔ”T‘ÑUÂˆÚY™YˆSÔ”T‘ÑU×ÕVT‘BˆÚYˆÖOOL™›Üˆ
[OLÈO•SWÓSÔ”ÒS‘“QSÑT”ÎÈJÊÊHÚYˆ
›Ø]
JO[[Üœ\™Ù]ÛÝ[
Hœ™XZÎÝ™\^QY›Ø]
ÛÕ™\^Q
J›[Üœ\™Ù]^\™R[™›ËžÂˆÚY™YˆSÔ”T‘ÑU×ÔÔÒUSÓ‚œÜÚ][Û•\]Y
ÏJ™XY™XÝÜŒÑœ›ÛT˜]ÔØ[\\ŠK™\^Q
K\ÜÚ][ÛŠJ›[Üœ\™Ù][™›Y[˜Ù\ÖÚWNÂˆÙ[™Y‚ˆÚY™YˆSÔ”T‘ÑUVT‘WÒTÔÔÒUSÓ”Â™\^Q
ÏLKŒÂˆÙ[™Y‚ˆÚY™YˆSÔ”T‘ÑU×Ó“Ô“PS››Ü›X[\]Y
ÏJ™XY™XÝÜŒÑœ›ÛT˜]ÔØ[\\ŠK™\^Q
H[›Ü›X[
J›[Üœ\™Ù][™›Y[˜Ù\ÖÚWNÂˆÙ[™Y‚ˆÚY™YˆSÔ”T‘ÑUVT‘WÒTÓ“Ô“PSÂ™\^Q
ÏLKŒÂˆÙ[™Y‚ˆÚY™YˆSÔ”T‘ÑU×ÕU‚]•\]Y
ÏJ™XY™XÝÜŒÑœ›ÛT˜]ÔØ[\\ŠK™\^Q
KžK]]ŠJ›[Üœ\™Ù][™›Y[˜Ù\ÖÚWNÂˆÙ[™Y‚ˆÚY™YˆSÔ”T‘ÑUVT‘WÒTÕU”Â™\^Q
ÏLKŒÂˆÙ[™Y‚ˆÚY™YˆSÔ”T‘ÑU×ÕS‘ÑS•[™Ù[\]Yž^ŠÏJ™XY™XÝÜŒÑœ›ÛT˜]ÔØ[\\ŠK™\^Q
H][™Ù[ž^ŠJ›[Üœ\™Ù][™›Y[˜Ù\ÖÚWNÂˆÙ[™Y‚ˆÚY™YˆSÔ”T‘ÑUVT‘WÒTÕS‘ÑS•Â™\^Q
ÏLKŒÂˆÙ[™Y‚ˆÚY™YˆSÔ”T‘ÑU×ÕUŒ‚]Œ•\]Y
ÏJ™XY™XÝÜŒÑœ›ÛT˜]ÔØ[\\ŠK™\^Q
KžK]]ŒŠJ›[Üœ\™Ù][™›Y[˜Ù\ÖÚWNÂˆÙ[™Y‚ˆÚY™YˆSÔ”T‘ÑUVT‘WÒTÕUŒ”Â™\^Q
ÏLKŒÂˆÙ[™Y‚ˆÚY™YˆSÔ”T‘ÑU×ÐÓÓÔ‚˜ÛÛÜ•\]Y
ÏJ™XY™XÝÜœ›ÛT˜]ÔØ[\\ŠK™\^Q
KXÛÛÜŠJ›[Üœ\™Ù][™›Y[˜Ù\ÖÚWNÂˆÙ[™Y‚ŸBˆÙ[™Y‚ˆÙ[ÙBˆÚY™YˆSÔ”T‘ÑU×ÔÔÒUSÓ‚œÜÚ][Û•\]Y
ÏJÜÚ][ÛžÖK\ÜÚ][ÛŠJ›[Üœ\™Ù][™›Y[˜Ù\ÖÞÖWNÂˆÙ[™Y‚ˆÚY™YˆSÔ”T‘ÑU×Ó“Ô“PS››Ü›X[\]Y
ÏJ›Ü›X[ÖK[›Ü›X[
J›[Üœ\™Ù][™›Y[˜Ù\ÖÞÖWNÂˆÙ[™Y‚ˆÚY™YˆSÔ”T‘ÑU×ÕS‘ÑS•[™Ù[\]Yž^ŠÏJ[™Ù[ÖK][™Ù[ž^ŠJ›[Üœ\™Ù][™›Y[˜Ù\ÖÞÖWNÂˆÙ[™Y‚ˆÚY™YˆSÔ”T‘ÑU×ÕU‚]•\]Y
ÏJ]—ÞÖK]]ŠJ›[Üœ\™Ù][™›Y[˜Ù\ÖÞÖWNÂˆÙ[™Y‚ˆÚY™YˆSÔ”T‘ÑU×ÕUŒ‚]Œ•\]Y
ÏJ]Œ—ÞÖK]]ŒŠJ›[Üœ\™Ù][™›Y[˜Ù\ÖÞÖWNÂˆÙ[™Y‚ˆÚY™YˆSÔ”T‘ÑU×ÐÓÓÔ‚˜ÛÛÜ•\]Y
ÏJÛÛÜžÖKXÛÛÜŠJ›[Üœ\™Ù][™›Y[˜Ù\ÖÞÖWNÂˆÙ[™Y‚ˆÙ[™Y‚ˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VÐÜ_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÐÜOZÊNØÛÛœÝ“^Û˜[YNÜÚY\ŽšßK\Hœ™T\ÜÕ™\^‹ÐÏXÚY™Yˆ‘TTÔ×ÑT•šY]ÔÜÏJšY]ÊÛÜ›ÜÊKœ™ØŽÂˆÙ[™Y‚ˆÚY™Yˆ‘TTÔ×Ó“Ô“PSV‘QÕ’QU×ÑT“›Ü›UšY]Ñ\J
šY]ÊÛÜ›ÜÊKž‹XØ[Y\˜R[™›Ëž
KÊØ[Y\˜R[™›ËžKXØ[Y\˜R[™›Ëž
NÂˆÙ[™Y‚ˆÚY™Yˆ‘TTÔ×ÓÐÐSÔÔÒUSÓ‚”ÜÚ][Û\ÜÚ][Û•\]Yž^ŽÂˆÙ[™Y‚ˆÚYˆ
Yš[™Y
‘TTÔ×Õ‘SÐÒUJHYš[™Y
‘TTÔ×Õ‘SÐÒUWÓS‘PTŠJH	‰ˆYš[™Y
“Ó‘T×Õ‘SÐÒUWÑSP“Q
BÝ\œ™[ÜÚ][Û]šY]Ô›Ú™XÝ[ÛŠÛÜ›ÜÎÂˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”ÏŒ›X]™]š[Ý\Ò[™›Y[˜ÙNÜ™]š[Ý\Ò[™›Y[˜ÙO[T™]š[Ý\Ð›Û™\ÖÚ[
X]šXÙ\Ò[™XÙ\ÖÌJWJ›X]šXÙ\ÕÙZYÚÖÌNÂˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”ÏŒBœ™]š[Ý\Ò[™›Y[˜ÙJÏ[T™]š[Ý\Ð›Û™\ÖÚ[
X]šXÙ\Ò[™XÙ\ÖÌWJWJ›X]šXÙ\ÕÙZYÚÖÌWNÂˆÙ[™YˆˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”ÏŒ‚œ™]š[Ý\Ò[™›Y[˜ÙJÏ[T™]š[Ý\Ð›Û™\ÖÚ[
X]šXÙ\Ò[™XÙ\ÖÌ—JWJ›X]šXÙ\ÕÙZYÚÖÌ—NÂˆÙ[™YˆˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”ÏŒÂœ™]š[Ý\Ò[™›Y[˜ÙJÏ[T™]š[Ý\Ð›Û™\ÖÚ[
X]šXÙ\Ò[™XÙ\ÖÌ×JWJ›X]šXÙ\ÕÙZYÚÖÌ×NÂˆÙ[™Y‚ˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”Ïœ™]š[Ý\Ò[™›Y[˜ÙJÏ[T™]š[Ý\Ð›Û™\ÖÚ[
X]šXÙ\Ò[™XÙ\Ñ^˜VÌJWJ›X]šXÙ\ÕÙZYÚÑ^˜VÌNÂˆÙ[™YˆˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”ÏBœ™]š[Ý\Ò[™›Y[˜ÙJÏ[T™]š[Ý\Ð›Û™\ÖÚ[
X]šXÙ\Ò[™XÙ\Ñ^˜VÌWJWJ›X]šXÙ\ÕÙZYÚÑ^˜VÌWNÂˆÙ[™YˆˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”Ï‚œ™]š[Ý\Ò[™›Y[˜ÙJÏ[T™]š[Ý\Ð›Û™\ÖÚ[
X]šXÙ\Ò[™XÙ\Ñ^˜VÌ—JWJ›X]šXÙ\ÕÙZYÚÑ^˜VÌ—NÂˆÙ[™YˆˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”ÏÂœ™]š[Ý\Ò[™›Y[˜ÙJÏ[T™]š[Ý\Ð›Û™\ÖÚ[
X]šXÙ\Ò[™XÙ\Ñ^˜VÌ×JWJ›X]šXÙ\ÕÙZYÚÑ^˜VÌ×NÂˆÙ[™Y‚”™]š[Ý\ÔÜÚ][Û\™]š[Ý\ÕšY]Ô›Ú™XÝ[ÛŠ™š[˜[™]š[Ý\ÕÛÜ›
œ™]š[Ý\Ò[™›Y[˜ÙJ™XÍ
ÜÚ][Û•\]YKŒ
NÂˆÙ[ÙB”™]š[Ý\ÔÜÚ][Û\™]š[Ý\ÕšY]Ô›Ú™XÝ[ÛŠ™š[˜[™]š[Ý\ÕÛÜ›
™XÍ
ÜÚ][Û•\]YKŒ
NÂˆÙ[™Y‚ˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VÓ\_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÓ\ORÐÊNØÛÛœÝS^Û˜[YN“\ÚY\Ž’ÐßKH]•˜\šXX›QXÛ\˜][Ûˆ‹ÏXÚYˆYYš[™Y
UžÖJH	‰ˆYš[™Y
PRS•UžÖJB™XÌˆ]žÖO]™XÌŠ‹ŠNÂˆÙ[™Y‚ˆÚY™YˆPRS•UžÖB“XZ[•UžÖO]]žÖNÂˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VÑ_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÑOVÊNØÛÛœÝ“^Û˜[YN‘ÚY\Ž–ßKHœØ[\\•™\^[\[Y[][Ûˆ‹PÏXÚYˆYš[™Y
ÑQ’S‘SSQWÊH	‰ˆÑQ’S‘SSQWÑT‘PÕUOLšYˆ
—ÒS‘“ÓSQWÏOLŠBžÝ—ÕT–RS‘ÓSQWÕU]™XÌŠÓPU’VSQWÓX]š^
™XÍ
]•\]YKŒŒ
JNßBˆÚY™YˆUŒ‚™[ÙHYˆ
—ÒS‘“ÓSQWÏOLKŠBžÝ—ÕT–RS‘ÓSQWÕU]™XÌŠÓPU’VSQWÓX]š^
™XÍ
]Œ•\]YKŒŒ
JNßBˆÙ[™Y‚ˆÚY™YˆUŒÂ™[ÙHYˆ
—ÒS‘“ÓSQWÏOL‹ŠBžÝ—ÕT–RS‘ÓSQWÕU]™XÌŠÓPU’VSQWÓX]š^
™XÍ
]ŒËKŒŒ
JNßBˆÙ[™Y‚ˆÚY™YˆU™[ÙHYˆ
—ÒS‘“ÓSQWÏOLËŠBžÝ—ÕT–RS‘ÓSQWÕU]™XÌŠÓPU’VSQWÓX]š^
™XÍ
]KŒŒ
JNßBˆÙ[™Y‚ˆÚY™YˆUB™[ÙHYˆ
—ÒS‘“ÓSQWÏOMŠBžÝ—ÕT–RS‘ÓSQWÕU]™XÌŠÓPU’VSQWÓX]š^
™XÍ
]KKŒŒ
JNßBˆÙ[™Y‚ˆÚY™YˆU‚™[ÙHYˆ
—ÒS‘“ÓSQWÏOMKŠBžÝ—ÕT–RS‘ÓSQWÕU]™XÌŠÓPU’VSQWÓX]š^
™XÍ
]‹KŒŒ
JNßBˆÙ[™Y‚ˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VÔ_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÔOTPÊNØÛÛœÝ“^Û˜[YN”ÚY\Ž”PßKÜH˜[\™\^‹	ÏXÚYˆYš[™Y
•ST
HYš[™Y
TSV
HYš[™Y
ÓPTÓÐUÐ•ST
HYš[™Y
S’TÓÕ“ÔPÊBˆÚYˆYš[™Y
S‘ÑS•
H	‰ˆYš[™Y
“Ô“PS
B™XÌÈ›“›Ü›X[[›Ü›X[^™J›Ü›X[\]Y
NÝ™XÌÈ›•[™Ù[[›Ü›X[^™J[™Ù[\]Yž^ŠNÝ™XÌÈ›š][™Ù[XÜ›ÜÜÊ›“›Ü›X[›•[™Ù[
J[™Ù[\]YÎÝ•“[X]Êš[˜[ÛÜ›
J›X]Ê›•[™Ù[›š][™Ù[›“›Ü›X[
NÂˆÙ[™Y‚ˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VÝÜ_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÝÜOIÊNØÛÛœÝ“^Û˜[YNÜÚY\Ž‰ßKÜHœÚYÝÜÕ™\^‹ÏXÚY™YˆÒQÕÔÂˆÚYˆYš[™Y
ÒQÕÐÔÓ^ÖJB”ÜÚ][Û‘œ›ÛPØ[Y\˜^ÖO]šY]ÊÛÜ›ÜÎÙ›Üˆ
[OLÈOÒQÕÐÔÓS•SWÐÐTÐÐQTÞÖNÈJÊÊHÝ”ÜÚ][Û‘œ›ÛSYÚÖVÚWO[YÚX]š^ÖVÚWJÛÜ›ÜÎÂˆÚY™YˆTÑWÔ‘U‘T”ÑWÑT•Q‘‘T‚‘\Y]šXÞÖVÚWOJ]”ÜÚ][Û‘œ›ÛSYÚÖVÚWKžŠÛYÚÖK™\˜[Y\Ëž
KÛYÚÖK™\˜[Y\ËžNÂˆÙ[ÙB‘\Y]šXÞÖVÚWOJ”ÜÚ][Û‘œ›ÛSYÚÖVÚWKžŠÛYÚÖK™\˜[Y\Ëž
KÛYÚÖK™\˜[Y\ËžNÂˆÙ[™Y‚ŸBˆÙ[YˆYš[™Y
ÒQÕÞÖJH	‰ˆYYš[™Y
ÒQÕÐÕP‘^ÖJB”ÜÚ][Û‘œ›ÛSYÚÖO[YÚX]š^ÖJÛÜ›ÜÎÂˆÚY™YˆTÑWÔ‘U‘T”ÑWÑT•Q‘‘T‚‘\Y]šXÞÖOJ]”ÜÚ][Û‘œ›ÛSYÚÖKžŠÛYÚÖK™\˜[Y\Ëž
KÛYÚÖK™\˜[Y\ËžNÂˆÙ[ÙB‘\Y]šXÞÖOJ”ÜÚ][Û‘œ›ÛSYÚÖKžŠÛYÚÖK™\˜[Y\Ëž
KÛYÚÖK™\˜[Y\ËžNÂˆÙ[™Y‚ˆÙ[™Y‚ˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VÓÜ_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÓÜORÊNØÛÛœÝÓ^Û˜[YN“ÜÚY\Ž’ßKHœÚ[ÛÝY™\^‹SOXÚYˆYš[™Y
ÒS•ÒV‘JH	‰ˆYYš[™Y
ÑP‘ÔJB™ÛÔÚ[Ú^™O\Ú[Ú^™NÂˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VÓ_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÓOYSJNØÛÛœÝÓ^Û˜[YN“ÚY\Ž™S_KœH›ÙÑ\™\^‹OXÚY™YˆÑÐT’URPÑT‘œ˜YÛY[\LKŒ
ÙÛÔÜÚ][Û‹ÎÙÛÔÜÚ][Û‹ž[ÙÌŠX^
ŒK‘œ˜YÛY[\
JJ›ÙØ\š]ZXÑ\ÛÛœÝ[ÂˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VÑœ_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÑœO]JNØÛÛœÝSO^Û˜[YN‘œÚY\Ž_KœH™Y˜][™\^ÚY\ˆ‹ÓOXÙYš[™HÕTÕÓWÕ‘T•VÑVS”ÒSÓ‚ˆÚ[˜ÛYO×ÙXÛ×ÙY˜][™\^‚ˆÙYš[™HÕTÕÓWÕ‘T•VÐ‘QÒS‚˜]šX]H™XÌÈÜÚ][ÛŽÂˆÚY™Yˆ“Ô“PS˜]šX]H™XÌÈ›Ü›X[ÂˆÙ[™Y‚ˆÚY™YˆS‘ÑS•˜]šX]H™XÍ[™Ù[ÂˆÙ[™Y‚ˆÚY™YˆUŒB˜]šX]H™XÌˆ]ŽÂˆÙ[™Y‚ˆÚ[˜ÛYO]]šX]QXÛ\˜][Û–Ì‹‹×BˆÚY™Yˆ‘T•VÓÓÔ‚˜]šX]H™XÍÛÛÜŽÂˆÙ[™Y‚ˆÚ[˜ÛYO[\‘[˜Ý[ÛœÏ‚ˆÚ[˜ÛYO›Û™\ÑXÛ\˜][Û‚ˆÚ[˜ÛYO˜ZÙY™\^[š[X][Û‘XÛ\˜][Û‚ˆÚ[˜ÛYO[œÝ[˜Ù\ÑXÛ\˜][Û‚ˆÚ[˜ÛYO™T\ÜÕ™\^XÛ\˜][Û‚ˆÚ[˜ÛYOXZ[•U•˜\žZ[™ÑXÛ\˜][Û–ÌK‹×BˆÚ[˜ÛYOØ[\\•™\^XÛ\˜][ÛŠÑQ’S‘SSQWËQ‘•TÑKÕT–RS‘ÓSQWËY™\ÙJBˆÚ[˜ÛYOØ[\\•™\^XÛ\˜][ÛŠÑQ’S‘SSQWËURSÕT–RS‘ÓSQWË]Z[
BˆÚ[˜ÛYOØ[\\•™\^XÛ\˜][ÛŠÑQ’S‘SSQWËSP’QS•ÕT–RS‘ÓSQWË[XšY[
BˆÚ[˜ÛYOØ[\\•™\^XÛ\˜][ÛŠÑQ’S‘SSQWËÔPÒUKÕT–RS‘ÓSQWËÜXÚ]JBˆÚ[˜ÛYOØ[\\•™\^XÛ\˜][ÛŠÑQ’S‘SSQWËSRTÔÒU‘KÕT–RS‘ÓSQWË[Z\ÜÚ]™JBˆÚ[˜ÛYOØ[\\•™\^XÛ\˜][ÛŠÑQ’S‘SSQWËQÒPTÕT–RS‘ÓSQWËYÚX\
BˆÚYˆYš[™Y
ÔPÕST•T“JBˆÚ[˜ÛYOØ[\\•™\^XÛ\˜][ÛŠÑQ’S‘SSQWËÔPÕST‹ÕT–RS‘ÓSQWËÜXÝ[\ŠBˆÙ[™Y‚ˆÚ[˜ÛYOØ[\\•™\^XÛ\˜][ÛŠÑQ’S‘SSQWË•STÕT–RS‘ÓSQWË[\
BˆÚ[˜ÛYOØ[\\•™\^XÛ\˜][ÛŠÑQ’S‘SSQWËPÐSÕT–RS‘ÓSQWËXØ[
B˜\žZ[™È™XÌÈ”ÜÚ][Û•ÎÂˆÚY™Yˆ“Ô“PS˜\žZ[™È™XÌÈ“›Ü›X[ÎÂˆÙ[™Y‚ˆÚYˆYš[™Y
‘T•VÓÓÔŠHYš[™Y
S”ÕSÑTÐÓÓÔŠH	‰ˆYš[™Y
S”ÕSÑTÊB˜\žZ[™È™XÍÛÛÜŽÂˆÙ[™Y‚ˆÚ[˜ÛYO[\™\^XÛ\˜][Û‚ˆÚ[˜ÛYOÛ\[™U™\^XÛ\˜][Û‚ˆÚ[˜ÛYO›ÙÕ™\^XÛ\˜][Û‚ˆÚ[˜ÛYO×ÙXÛ×ÛYÚžœ˜YÛY[–Ì‹›X^Ú[][[™[Ý\ÓYÚ×BˆÚ[˜ÛYO[Üœ\™Ù]Õ™\^ÛØ˜[XÛ\˜][Û‚ˆÚ[˜ÛYO[Üœ\™Ù]Õ™\^XÛ\˜][Û–Ì‹›X^Ú[][[™[Ý\Ó[Üœ\™Ù]×BˆÚY™Yˆ‘Q“PÕSÓ“PTÔÒÖP“Ö˜\žZ[™È™XÌÈ”ÜÚ][Û•U•ÎÂˆÙ[™Y‚ˆÚYˆYš[™Y
‘Q“PÕSÓ“PTÑTURT‘PÕS‘ÕST—Ñ’VQ
HYš[™Y
‘Q“PÕSÓ“PTÓRT”“Ô‘QTURT‘PÕS‘ÕST—Ñ’VQ
B˜\žZ[™È™XÌÈ‘\™XÝ[Û•ÎÂˆÙ[™Y‚ˆÚYˆYš[™Y
ÓTÕQÒÐUÒ
H	‰ˆÓTÕQÒÐUÒŒ˜\žZ[™È›Ø]•šY]Ñ\ÂˆÙ[™Y‚ˆÚ[˜ÛYOÙÑ\XÛ\˜][Û‚ˆÙYš[™HÕTÕÓWÕ‘T•VÑQ’S’USÓ”Â›ÚYXZ[Š›ÚY
HÂˆÙYš[™HÕTÕÓWÕ‘T•VÓPRS—Ð‘QÒS‚™XÌÈÜÚ][Û•\]Y\ÜÚ][ÛŽÂˆÚY™Yˆ“Ô“PS™XÌÈ›Ü›X[\]Y[›Ü›X[ÂˆÙ[™Y‚ˆÚY™YˆS‘ÑS•™XÍ[™Ù[\]Y][™Ù[ÂˆÙ[™Y‚ˆÚY™YˆUŒB™XÌˆ]•\]Y]]ŽÂˆÙ[™Y‚ˆÚY™YˆUŒ‚™XÌˆ]Œ•\]Y]]ŒŽÂˆÙ[™Y‚ˆÚY™Yˆ‘T•VÓÓÔ‚™XÍÛÛÜ•\]YXÛÛÜŽÂˆÙ[™Y‚ˆÚ[˜ÛYO[Üœ\™Ù]Õ™\^ÛØ˜[‚ˆÚ[˜ÛYO[Üœ\™Ù]Õ™\^–Ì‹›X^Ú[][[™[Ý\Ó[Üœ\™Ù]×BˆÚY™Yˆ‘Q“PÕSÓ“PTÔÒÖP“Ö”ÜÚ][Û•U•Ï\ÜÚ][Û•\]YÂˆÙ[™Y‚ˆÙYš[™HÕTÕÓWÕ‘T•VÕTUWÔÔÒUSÓ‚ˆÙYš[™HÕTÕÓWÕ‘T•VÕTUWÓ“Ô“PSˆÚ[˜ÛYO[œÝ[˜Ù\Õ™\^‚ˆÚYˆYš[™Y
‘TTÔÊH	‰ˆ

Yš[™Y
‘TTÔ×Õ‘SÐÒUJHYš[™Y
‘TTÔ×Õ‘SÐÒUWÓS‘PTŠJH	‰ˆYYš[™Y
“Ó‘T×Õ‘SÐÒUWÑSP“Q
BÝ\œ™[ÜÚ][Û]šY]Ô›Ú™XÝ[ÛŠ™š[˜[ÛÜ›
™XÍ
ÜÚ][Û•\]YKŒ
NÝ”™]š[Ý\ÔÜÚ][Û\™]š[Ý\ÕšY]Ô›Ú™XÝ[ÛŠ™š[˜[™]š[Ý\ÕÛÜ›
™XÍ
ÜÚ][Û•\]YKŒ
NÂˆÙ[™Y‚ˆÚ[˜ÛYO›Û™\Õ™\^‚ˆÚ[˜ÛYO˜ZÙY™\^[š[X][Û‚™XÍÛÜ›ÜÏYš[˜[ÛÜ›
™XÍ
ÜÚ][Û•\]YKŒ
NÂˆÚY™Yˆ“Ô“PS›X]È›Ü›X[ÛÜ›[X]Êš[˜[ÛÜ›
NÂˆÚYˆYš[™Y
S”ÕSÑTÊH	‰ˆYš[™Y
S—ÒS”ÕSÑTÊB“›Ü›X[Ï[›Ü›X[\]YÝ™XÌÊÝ
›Ü›X[ÛÜ›ÌK›Ü›X[ÛÜ›ÌJKÝ
›Ü›X[ÛÜ›ÌWK›Ü›X[ÛÜ›ÌWJKÝ
›Ü›X[ÛÜ›Ì—K›Ü›X[ÛÜ›Ì—JJNÝ“›Ü›X[Ï[›Ü›X[^™J›Ü›X[ÛÜ›
“›Ü›X[ÊNÂˆÙ[ÙBˆÚY™Yˆ“Ó•S’Q“Ô“TÐÐSS‘Â››Ü›X[ÛÜ›]˜[œÜÜÙSX]Ê[™\œÙSX]Ê›Ü›X[ÛÜ›
JNÂˆÙ[™Y‚“›Ü›X[Ï[›Ü›X[^™J›Ü›X[ÛÜ›
››Ü›X[\]Y
NÂˆÙ[™Y‚ˆÙ[™Y‚ˆÙYš[™HÕTÕÓWÕ‘T•VÕTUWÕÓÔ“ÔÂˆÚY™YˆUSU’QUÂšYˆ
ÛÕšY]ÒQÓÕ”OLJHÙÛÔÜÚ][Û]šY]Ô›Ú™XÝ[ÛŠÛÜ›ÜÎßH[ÙHÙÛÔÜÚ][Û]šY]Ô›Ú™XÝ[Û”ŠÛÜ›ÜÎßBˆÙ[ÙB™ÛÔÜÚ][Û]šY]Ô›Ú™XÝ[ÛŠÛÜ›ÜÎÂˆÙ[™Y‚”ÜÚ][Û•Ï]™XÌÊÛÜ›ÜÊNÂˆÚY™Yˆ‘TTÔÂˆÚ[˜ÛYO™T\ÜÕ™\^‚ˆÙ[™Y‚ˆÚYˆYš[™Y
‘Q“PÕSÓ“PTÑTURT‘PÕS‘ÕST—Ñ’VQ
HYš[™Y
‘Q“PÕSÓ“PTÓRT”“Ô‘QTURT‘PÕS‘ÕST—Ñ’VQ
B‘\™XÝ[Û•Ï[›Ü›X[^™J™XÌÊš[˜[ÛÜ›
™XÍ
ÜÚ][Û•\]YŒ
JJNÂˆÙ[™Y‚ˆÚYˆYš[™Y
ÓTÕQÒÐUÒ
H	‰ˆÓTÕQÒÐUÒŒˆÚY™Yˆ’QÒÒS‘Q•šY]Ñ\KJšY]ÊÛÜ›ÜÊKžŽÂˆÙ[ÙB•šY]Ñ\JšY]ÊÛÜ›ÜÊKžŽÂˆÙ[™Y‚ˆÙ[™Y‚ˆÚY›™YˆUŒB™XÌˆ]•\]Y]™XÌŠ‹ŠNÂˆÙ[™Y‚ˆÚY›™YˆUŒ‚™XÌˆ]Œ•\]Y]™XÌŠ‹ŠNÂˆÙ[™Y‚ˆÚY™YˆPRS•UŒB“XZ[•UŒO]]•\]YÂˆÙ[™Y‚ˆÚY™YˆPRS•UŒ‚“XZ[•UŒ]]Œ•\]YÂˆÙ[™Y‚ˆÚ[˜ÛYO]•˜\šXX›QXÛ\˜][Û–ÌË‹×BˆÚ[˜ÛYOØ[\\•™\^[\[Y[][ÛŠÑQ’S‘SSQWËQ‘•TÑKÕT–RS‘ÓSQWËY™\ÙKÓPU’VSQWËY™\ÙKÒS‘“ÓSQWËY™\ÙR[™›ÜËž
BˆÚ[˜ÛYOØ[\\•™\^[\[Y[][ÛŠÑQ’S‘SSQWËURSÕT–RS‘ÓSQWË]Z[ÓPU’VSQWË]Z[ÒS‘“ÓSQWË]Z[[™›ÜËž
BˆÚ[˜ÛYOØ[\\•™\^[\[Y[][ÛŠÑQ’S‘SSQWËSP’QS•ÕT–RS‘ÓSQWË[XšY[ÓPU’VSQWË[XšY[ÒS‘“ÓSQWË[XšY[[™›ÜËž
BˆÚ[˜ÛYOØ[\\•™\^[\[Y[][ÛŠÑQ’S‘SSQWËÔPÒUKÕT–RS‘ÓSQWËÜXÚ]KÓPU’VSQWËÜXÚ]KÒS‘“ÓSQWËÜXÚ]R[™›ÜËž
BˆÚ[˜ÛYOØ[\\•™\^[\[Y[][ÛŠÑQ’S‘SSQWËSRTÔÒU‘KÕT–RS‘ÓSQWË[Z\ÜÚ]™KÓPU’VSQWË[Z\ÜÚ]™KÒS‘“ÓSQWË[Z\ÜÚ]™R[™›ÜËž
BˆÚ[˜ÛYOØ[\\•™\^[\[Y[][ÛŠÑQ’S‘SSQWËQÒPTÕT–RS‘ÓSQWËYÚX\ÓPU’VSQWËYÚX\ÒS‘“ÓSQWËYÚX\[™›ÜËž
BˆÚYˆYš[™Y
ÔPÕST•T“JBˆÚ[˜ÛYOØ[\\•™\^[\[Y[][ÛŠÑQ’S‘SSQWËÔPÕST‹ÕT–RS‘ÓSQWËÜXÝ[\‹ÓPU’VSQWËÜXÝ[\‹ÒS‘“ÓSQWËÜXÝ[\’[™›ÜËž
BˆÙ[™Y‚ˆÚ[˜ÛYOØ[\\•™\^[\[Y[][ÛŠÑQ’S‘SSQWË•STÕT–RS‘ÓSQWË[\ÓPU’VSQWË[\ÒS‘“ÓSQWË[\[™›ÜËž
BˆÚ[˜ÛYOØ[\\•™\^[\[Y[][ÛŠÑQ’S‘SSQWËPÐSÕT–RS‘ÓSQWËXØ[ÓPU’VSQWËXØ[ÒS‘“ÓSQWËXØ[[™›ÜËž
BˆÚ[˜ÛYO[\™\^‚ˆÚ[˜ÛYOÛ\[™U™\^‚ˆÚ[˜ÛYO›ÙÕ™\^‚ˆÚ[˜ÛYOÚYÝÜÕ™\^–Ì‹›X^Ú[][[™[Ý\ÓYÚ×BˆÚ[˜ÛYO™\^ÛÛÜ“Z^[™Ï‚ˆÚ[˜ÛYOÚ[ÛÝY™\^‚ˆÚ[˜ÛYOÙÑ\™\^‚ˆÙYš[™HÕTÕÓWÕ‘T•VÓPRS—ÑS‘ŸB˜ÜK”ÚY\œÔÝÜ™VÓœ_
K”ÚY\œÔÝÜ™VÓœO\ÓJNØÛÛœÝVÐS‹“‹]‹]‹ËS‹‹ËPËÝ‹Ó‹ËS‹‹‹ÐË‹Ó‹Ó‹‹]K“‹“‹Ý‹ËPËS‹“‹“‹“‹‹ËÓ‹ÐËÓ‹SWNÙ›ÜŠÛÛœÝˆÙˆŠ\K’[˜ÛY\ÔÚY\œÔÝÜ™VÜ‹›˜[YW_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÜ‹›˜[YWO\‹œÚY\ŠNØÛÛœÝÓ^Û˜[YN“œÚY\ŽœÓ_KSØš™XÝ™œ™Y^™JØš™XÝ™Yš[™T›Ü\J××Ü›Ý××Î›[Y˜][™\^ÚY\Ž•ÓŸKÞ[X›ÛÔÝš[™ÕYËÝ˜[YNˆ“[Ù[HŸJJK\H™XØ[œ˜YÛY[XÛ\˜][Ûˆ‹“OXÚY™YˆPÐS[šY›Ü›H™XÍ‘XØ[[™›ÜÎÂˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VÕ\_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÕ\O\“JNØÛÛœÝS^Û˜[YN•\ÚY\Žœ“_KœH™Y˜][œ˜YÛY[XÛ\˜][Ûˆ‹“OX[šY›Ü›H™XÍ‘^YTÜÚ][ÛŽÝ[šY›Ü›H™XÍ‘Y™\ÙPÛÛÜŽÝ[šY›Ü›H™XÍ”ÜXÝ[\ÛÛÜŽÝ[šY›Ü›H™XÌÈ‘[Z\ÜÚ]™PÛÛÜŽÝ[šY›Ü›H™XÌÈ[XšY[ÛÛÜŽÝ[šY›Ü›H›Ø]š\ÚXš[]NÂˆÚY™YˆQ‘•TÑB[šY›Ü›H™XÌˆ‘Y™\ÙR[™›ÜÎÂˆÙ[™Y‚ˆÚY™YˆSP’QS•[šY›Ü›H™XÌˆ[XšY[[™›ÜÎÂˆÙ[™Y‚ˆÚY™YˆÔPÒUH[šY›Ü›H™XÌˆ“ÜXÚ]R[™›ÜÎÂˆÙ[™Y‚ˆÚY™YˆSRTÔÒU‘B[šY›Ü›H™XÌˆ‘[Z\ÜÚ]™R[™›ÜÎÂˆÙ[™Y‚ˆÚY™YˆQÒPT[šY›Ü›H™XÌˆ“YÚX\[™›ÜÎÂˆÙ[™Y‚ˆÚY™Yˆ•ST[šY›Ü›H™XÌÈ[\[™›ÜÎÝ[šY›Ü›H™XÌˆ•[™Ù[ÜXÙT\˜[\ÎÂˆÙ[™Y‚ˆÚY™YˆSUTÕ[šY›Ü›H›Ø][PÝ]Ù™ŽÂˆÙ[™Y‚ˆÚYˆYš[™Y
‘Q“PÕSÓ“PTÔÔT’PÐS
HYš[™Y
‘Q“PÕSÓ“PTÔ“Ò‘PÕSÓŠHYš[™Y
‘Q”PÕSÓŠHYš[™Y
‘TTÔÊB[šY›Ü›HX]šY]ÎÂˆÙ[™Y‚ˆÚY™Yˆ‘Q”PÕSÓ‚[šY›Ü›H™XÍ”™Yœ˜XÝ[Û’[™›ÜÎÂˆÚY›™Yˆ‘Q”PÕSÓ“PTÌÑ[šY›Ü›HX]™Yœ˜XÝ[Û“X]š^ÂˆÙ[™Y‚ˆÚY™Yˆ‘Q”PÕSÓ‘”‘TÓ‘S[šY›Ü›H™XÍ™Yœ˜XÝ[Û“YÛÛÜŽÝ[šY›Ü›H™XÍ™Yœ˜XÝ[Û”šYÚÛÛÜŽÂˆÙ[™Y‚ˆÚYˆYš[™Y
TÑWÓÐÐSÔ‘Q”PÕSÓ“PTÐÕP’PÊH	‰ˆYš[™Y
‘Q”PÕSÓ“PTÌÑ
B[šY›Ü›H™XÌÈ”™Yœ˜XÝ[Û”ÜÚ][ÛŽÝ[šY›Ü›H™XÌÈ”™Yœ˜XÝ[Û”Ú^™NÈˆÙ[™Y‚ˆÙ[™Y‚ˆÚYˆYš[™Y
ÔPÕSTŠH	‰ˆYš[™Y
ÔPÕST•T“JB[šY›Ü›H™XÌˆ”ÜXÝ[\’[™›ÜÎÂˆÙ[™Y‚ˆÚY™YˆQ‘•TÑQ”‘TÓ‘S[šY›Ü›H™XÍY™\ÙSYÛÛÜŽÝ[šY›Ü›H™XÍY™\ÙTšYÚÛÛÜŽÂˆÙ[™Y‚ˆÚY™YˆÔPÒUQ”‘TÓ‘S[šY›Ü›H™XÍÜXÚ]T\ÎÂˆÙ[™Y‚ˆÚY™YˆSRTÔÒU‘Q”‘TÓ‘S[šY›Ü›H™XÍ[Z\ÜÚ]™SYÛÛÜŽÝ[šY›Ü›H™XÍ[Z\ÜÚ]™TšYÚÛÛÜŽÂˆÙ[™Y‚ˆÚYˆYš[™Y
‘Q“PÕSÓŠH
Yš[™Y
T‘PSQÒTÑQ
H	‰ˆYš[™Y
T‘PSQÒÕTÔ•Q
JB[šY›Ü›H™XÌˆ”™Y›XÝ[Û’[™›ÜÎÂˆÚYˆYš[™Y
‘Q“PÕSÓ“PTÔSTŠHYš[™Y
‘Q“PÕSÓ“PTÐÕP’PÊHYš[™Y
‘Q“PÕSÓ“PTÔ“Ò‘PÕSÓŠHYš[™Y
‘Q“PÕSÓ“PTÑTURT‘PÕS‘ÕSTŠHYš[™Y
‘Q“PÕSÓ“PTÔÔT’PÐS
HYš[™Y
‘Q“PÕSÓ“PTÔÒÖP“Ö
B[šY›Ü›HX]™Y›XÝ[Û“X]š^ÂˆÙ[™Y‚ˆÚY›™Yˆ‘Q“PÕSÓ“PTÔÒÖP“ÖˆÚYˆYš[™Y
TÑWÓÐÐSÔ‘Q“PÕSÓ“PTÐÕP’PÊH	‰ˆYš[™Y
‘Q“PÕSÓ“PTÐÕP’PÊB[šY›Ü›H™XÌÈ”™Y›XÝ[Û”ÜÚ][ÛŽÝ[šY›Ü›H™XÌÈ”™Y›XÝ[Û”Ú^™NÈˆÙ[™Y‚ˆÙ[™Y‚ˆÚY™Yˆ‘Q“PÕSÓ‘”‘TÓ‘S[šY›Ü›H™XÍ™Y›XÝ[Û“YÛÛÜŽÝ[šY›Ü›H™XÍ™Y›XÝ[Û”šYÚÛÛÜŽÂˆÙ[™Y‚ˆÙ[™Y‚ˆÚY™YˆURS[šY›Ü›H™XÍ‘]Z[[™›ÜÎÂˆÙ[™Y‚ˆÚ[˜ÛYOXØ[œ˜YÛY[XÛ\˜][Û‚ˆÚYˆVT‘WÔ‘TUUSÓ—ÓSÑOŒ[šY›Ü›H™XÍ•^\™T™\]][Û’^[[™Ô\˜[\ÎÂˆÙ[™Y‚ˆÙYš[™HQUSÓSÑ”QÓQS•ÑPÓTUSÓ‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VÐœ_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÐœO[“JNØÛÛœÝS^Û˜[YNœÚY\Ž›“_KœHœ™T\ÜÑXÛ\˜][Ûˆ‹SOXÚY™Yˆ‘TTÔÂˆÙ^[œÚ[ÛˆÓÑVÙ˜]×ØY™™\œÈˆ™\]Z\™B›^[Ý]
ØØ][ÛL
HÝ]YÚ™XÍÛœ˜YÑ]VÞÖWNÚYÚ™XÍÛÑœ˜YÐÛÛÜŽÂˆÚY™Yˆ‘TTÔ×ÓÐÐSÔÔÒUSÓ‚˜\žZ[™ÈYÚ™XÌÈ”ÜÚ][ÛŽÂˆÙ[™Y‚ˆÚY™Yˆ‘TTÔ×ÑT˜\žZ[™ÈYÚ™XÌÈ•šY]ÔÜÎÂˆÙ[™Y‚ˆÚY™Yˆ‘TTÔ×Ó“Ô“PSV‘QÕ’QU×ÑT˜\žZ[™ÈYÚ›Ø]“›Ü›UšY]Ñ\ÂˆÙ[™Y‚ˆÚYˆYš[™Y
‘TTÔ×Õ‘SÐÒUJHYš[™Y
‘TTÔ×Õ‘SÐÒUWÓS‘PTŠB˜\žZ[™ÈYÚ™XÍÝ\œ™[ÜÚ][ÛŽÝ˜\žZ[™ÈYÚ™XÍ”™]š[Ý\ÔÜÚ][ÛŽÂˆÙ[™Y‚ˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VÕœ_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÕœOXSJNØÛÛœÝ“^Û˜[YN•œÚY\Ž˜S_KœH›Ú]XÛ\˜][Ûˆ‹ÓOXÚY™YˆÔ‘T—ÒS‘TS‘S•ÕS”ÔT‘SÖBˆÙ^[œÚ[ÛˆÓÑVÙ˜]×ØY™™\œÈˆ™\]Z\™B›^[Ý]
ØØ][ÛL
HÝ]™XÌˆ\È›^[Ý]
ØØ][ÛLJHÝ]™XÍœ›ÛÛÛÜŽÛ^[Ý]
ØØ][ÛLŠHÝ]™XÍ˜XÚÐÛÛÜŽÂˆÙYš[™HPVÑTNNNNKŒšYÚ™XÍÛÑœ˜YÐÛÛÜŽÝ[šY›Ü›HØ[\\Œ‘Ú]\Ø[\\ŽÝ[šY›Ü›HØ[\\Œ‘Ú]œ›ÛÛÛÜ”Ø[\\ŽÂˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VÞœ_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÞœO[ÓJNØÛÛœÝÓ^Û˜[YNžœÚY\Ž›Ó_KÜH›YÚœ˜YÛY[XÛ\˜][Ûˆ‹OXÚY™YˆQÒÖB[šY›Ü›H™XÍ“YÚ]^ÖNÝ[šY›Ü›H™XÍ“YÚY™\Ù^ÖNÂˆÚY™YˆÔPÕST•T“B[šY›Ü›H™XÍ“YÚÜXÝ[\žÖNÂˆÙ[ÙB™XÍ“YÚÜXÝ[\žÖO]™XÍ
ŠNÂˆÙ[™Y‚ˆÚY™YˆÒQÕÞÖBˆÚY™YˆÒQÕÐÔÓ^ÖB[šY›Ü›HX]YÚX]š^ÖVÔÒQÕÐÔÓS•SWÐÐTÐÐQTÞÖWNÝ[šY›Ü›H›Ø]šY]Ñœ\Ý[VžÖVÔÒQÕÐÔÓS•SWÐÐTÐÐQTÞÖWNÝ[šY›Ü›H›Ø]œ\Ý[S[™ÝÞÖVÔÒQÕÐÔÓS•SWÐÐTÐÐQTÞÖWNÝ[šY›Ü›H›Ø]Ø\ØØYP›[™˜XÝÜžÖNÝ˜\žZ[™È™XÍ”ÜÚ][Û‘œ›ÛSYÚÖVÔÒQÕÐÔÓS•SWÐÐTÐÐQTÞÖWNÝ˜\žZ[™È›Ø]‘\Y]šXÞÖVÔÒQÕÐÔÓS•SWÐÐTÐÐQTÞÖWNÝ˜\žZ[™È™XÍ”ÜÚ][Û‘œ›ÛPØ[Y\˜^ÖNÂˆÚYˆYš[™Y
ÒQÕÔÔÔÞÖJB[šY›Ü›HYÚØ[\\Œ‘\œ˜^TÚYÝÈÚYÝÕ^\™^ÖNÝ[šY›Ü›HYÚØ[\\Œ‘\œ˜^H\^\™^ÖNÝ[šY›Ü›H™XÌˆYÚÚ^™UUÛÜœ™XÝ[ÛžÖVÔÒQÕÐÔÓS•SWÐÐTÐÐQTÞÖWNÝ[šY›Ü›H›Ø]\ÛÜœ™XÝ[ÛžÖVÔÒQÕÐÔÓS•SWÐÐTÐÐQTÞÖWNÝ[šY›Ü›H›Ø][[Xœ˜Q\šÛ™\ÜÞÖNÂˆÙ[YˆYš[™Y
ÒQÕÔÑžÖJB[šY›Ü›HYÚØ[\\Œ‘\œ˜^TÚYÝÈÚYÝÕ^\™^ÖNÂˆÙ[ÙB[šY›Ü›HYÚØ[\\Œ‘\œ˜^HÚYÝÕ^\™^ÖNÂˆÙ[™Y‚ˆÚY™YˆÒQÕÐÔÓQP•QÞÖB˜ÛÛœÝ™XÌÈØ\ØØYPÛÛÜœÓ][\Y\žÖVÎO]™XÌÖÎBŠ™XÌÈ
KKŒŒ
K™XÌÈ
ŒKKŒ
K™XÌÈ
ŒŒKH
K™XÌÈ
KKŒKH
K™XÌÈ
KKKKŒ
K™XÌÈ
KŒKŒKŒ
K™XÌÈ
ŒKŒKH
K™XÌÈ
KËKÍH
BŠNÝ™XÌÈÚYÝÑXYÞÖNÂˆÙ[™Y‚ˆÚY™YˆÒQÕÐÔÓUTÑTÒQÕÓPVžÖBš[[™^ÖOKLNÂˆÙ[ÙBš[[™^ÖOTÒQÕÐÔÓS•SWÐÐTÐÐQTÞÖKLNÂˆÙ[™Y‚™›Ø]Y™žÖOLŽÂˆÙ[YˆYš[™Y
ÒQÕÐÕP‘^ÖJB[šY›Ü›HØ[\\ÝX™HÚYÝÕ^\™^ÖNÂˆÙ[ÙB˜\žZ[™È™XÍ”ÜÚ][Û‘œ›ÛSYÚÖNÝ˜\žZ[™È›Ø]‘\Y]šXÞÖNÂˆÚYˆYš[™Y
ÒQÕÔÔÔÞÖJB[šY›Ü›HYÚØ[\\Œ‘ÚYÝÈÚYÝÕ^\™^ÖNÝ[šY›Ü›HYÚØ[\\Œ‘\^\™^ÖNÂˆÙ[YˆYš[™Y
ÒQÕÔÑžÖJB[šY›Ü›HYÚØ[\\Œ‘ÚYÝÈÚYÝÕ^\™^ÖNÂˆÙ[ÙB[šY›Ü›HØ[\\Œ‘ÚYÝÕ^\™^ÖNÂˆÙ[™Y‚[šY›Ü›HX]YÚX]š^ÖNÂˆÙ[™Y‚[šY›Ü›H™XÍÚYÝÜÒ[™›ÞÖNÝ[šY›Ü›H™XÌˆ\˜[Y\ÞÖNÂˆÙ[™Y‚ˆÚY™YˆÔÕQÒÖB[šY›Ü›H™XÍ“YÚ\™XÝ[ÛžÖNÝ[šY›Ü›H™XÍ“YÚ˜[Ù™žÖNÂˆÙ[YˆYš[™Y
ÒS•QÒÖJB[šY›Ü›H™XÍ“YÚ˜[Ù™žÖNÂˆÙ[YˆYš[™Y
SRSQÒÖJB[šY›Ü›H™XÌÈ“YÚÜ›Ý[™ÖNÂˆÙ[™Y‚ˆÚY™YˆT‘PSQÒÖB[šY›Ü›H™XÍ“YÚÚYÖNÝ[šY›Ü›H™XÍ“YÚZYÚÖNÂˆÚY™Yˆ‘PÕT‘PSQÒSRTÔÒSÓ•VT‘^ÖB[šY›Ü›HØ[\\Œ‘™XÝ\™XSYÚ[Z\ÜÚ[Û•^\™^ÖNÂˆÙ[™Y‚ˆÙ[™Y‚ˆÚY™YˆQTÓQÒVT‘^ÖB[šY›Ü›HØ[\\Œ‘Y\ÓYÚ^\™^ÖNÂˆÙ[™Y‚ˆÚY™Yˆ“Ò‘PÕQQÒVT‘^ÖB[šY›Ü›HX]^\™T›Ú™XÝ[Û“X]š^ÖNÝ[šY›Ü›HØ[\\Œ‘›Ú™XÝ[Û“YÚ^\™^ÖNÂˆÙ[™Y‚ˆÚY™YˆÓTÕQÒÖB[šY›Ü›H™XÌˆ”ÛXÙQ]^ÖNÝ[šY›Ü›H™XÌˆ”ÛXÙT˜[™Ù\ÞÖVÐÓTÕQÒÔÓPÑT×NÝ[šY›Ü›HØ[\\Œ‘YÚ]U^\™^ÖNÝ[šY›Ü›HYÚØ[\\Œ‘[SX\ÚÕ^\™^ÖNÂˆÙ[™Y‚ˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VÚÜ_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÚÜO[JNØÛÛœÝ“^Û˜[YNšÜÚY\Ž›_KÜH›YÚX›ÑXÛ\˜][Ûˆ‹ÓOXÚY™YˆQÒÖB[šY›Ü›HYÚÖBžÝ™XÍ“YÚ]NÝ™XÍ“YÚY™\ÙNÝ™XÍ“YÚÜXÝ[\ŽÂˆÚY™YˆÔÕQÒÖB™XÍ“YÚ\™XÝ[ÛŽÝ™XÍ“YÚ˜[Ù™ŽÂˆÙ[YˆYš[™Y
ÒS•QÒÖJB™XÍ“YÚ˜[Ù™ŽÂˆÙ[YˆYš[™Y
SRSQÒÖJB™XÌÈ“YÚÜ›Ý[™ÂˆÙ[YˆYš[™Y
ÓTÕQÒÖJB™XÌˆ”ÛXÙQ]NÝ™XÌˆ”ÛXÙT˜[™Ù\ÖÐÓTÕQÒÔÓPÑT×NÂˆÙ[™Y‚ˆÚYˆYš[™Y
T‘PSQÒÖJH	‰ˆYš[™Y
T‘PSQÒTÑQ
H	‰ˆYš[™Y
T‘PSQÒÕTÔ•Q
B™XÍ“YÚÚYÝ™XÍ“YÚZYÚÂˆÙ[™Y‚™XÍÚYÝÜÒ[™›ÎÝ™XÌˆ\˜[Y\ÎßHYÚÖNÂˆÚY™YˆQTÓQÒVT‘^ÖB[šY›Ü›HØ[\\Œ‘Y\ÓYÚ^\™^ÖNÂˆÙ[™Y‚ˆÚY™Yˆ‘PÕT‘PSQÒSRTÔÒSÓ•VT‘^ÖB[šY›Ü›HØ[\\Œ‘™XÝ\™XSYÚ[Z\ÜÚ[Û•^\™^ÖNÂˆÙ[™Y‚ˆÚY™Yˆ“Ò‘PÕQQÒVT‘^ÖB[šY›Ü›HX]^\™T›Ú™XÝ[Û“X]š^ÖNÝ[šY›Ü›HØ[\\Œ‘›Ú™XÝ[Û“YÚ^\™^ÖNÂˆÙ[™Y‚ˆÚY™YˆÓTÕQÒÖB[šY›Ü›HØ[\\Œ‘YÚ]U^\™^ÖNÝ[šY›Ü›HYÚØ[\\Œ‘[SX\ÚÕ^\™^ÖNÂˆÙ[™Y‚ˆÚY™YˆÒQÕÞÖBˆÚY™YˆÒQÕÐÔÓ^ÖB[šY›Ü›HX]YÚX]š^ÖVÔÒQÕÐÔÓS•SWÐÐTÐÐQTÞÖWNÝ[šY›Ü›H›Ø]šY]Ñœ\Ý[VžÖVÔÒQÕÐÔÓS•SWÐÐTÐÐQTÞÖWNÝ[šY›Ü›H›Ø]œ\Ý[S[™ÝÞÖVÔÒQÕÐÔÓS•SWÐÐTÐÐQTÞÖWNÝ[šY›Ü›H›Ø]Ø\ØØYP›[™˜XÝÜžÖNÝ˜\žZ[™È™XÍ”ÜÚ][Û‘œ›ÛSYÚÖVÔÒQÕÐÔÓS•SWÐÐTÐÐQTÞÖWNÝ˜\žZ[™È›Ø]‘\Y]šXÞÖVÔÒQÕÐÔÓS•SWÐÐTÐÐQTÞÖWNÝ˜\žZ[™È™XÍ”ÜÚ][Û‘œ›ÛPØ[Y\˜^ÖNÂˆÚYˆYš[™Y
ÒQÕÔÔÔÞÖJB[šY›Ü›HYÚØ[\\Œ‘\œ˜^TÚYÝÈÚYÝÕ^\™^ÖNÝ[šY›Ü›HYÚØ[\\Œ‘\œ˜^H\^\™^ÖNÝ[šY›Ü›H™XÌˆYÚÚ^™UUÛÜœ™XÝ[ÛžÖVÔÒQÕÐÔÓS•SWÐÐTÐÐQTÞÖWNÝ[šY›Ü›H›Ø]\ÛÜœ™XÝ[ÛžÖVÔÒQÕÐÔÓS•SWÐÐTÐÐQTÞÖWNÝ[šY›Ü›H›Ø][[Xœ˜Q\šÛ™\ÜÞÖNÂˆÙ[YˆYš[™Y
ÒQÕÔÑžÖJB[šY›Ü›HYÚØ[\\Œ‘\œ˜^TÚYÝÈÚYÝÕ^\™^ÖNÂˆÙ[ÙB[šY›Ü›HYÚØ[\\Œ‘\œ˜^HÚYÝÕ^\™^ÖNÂˆÙ[™Y‚ˆÚY™YˆÒQÕÐÔÓQP•QÞÖB˜ÛÛœÝ™XÌÈØ\ØØYPÛÛÜœÓ][\Y\žÖVÎO]™XÌÖÎBŠ™XÌÈ
KKŒŒ
K™XÌÈ
ŒKKŒ
K™XÌÈ
ŒŒKH
K™XÌÈ
KKŒKH
K™XÌÈ
KKKKŒ
K™XÌÈ
KŒKŒKŒ
K™XÌÈ
ŒKŒKH
K™XÌÈ
KËKÍH
BŠNÝ™XÌÈÚYÝÑXYÞÖNÂˆÙ[™Y‚ˆÚY™YˆÒQÕÐÔÓUTÑTÒQÕÓPVžÖBš[[™^ÖOKLNÂˆÙ[ÙBš[[™^ÖOTÒQÕÐÔÓS•SWÐÐTÐÐQTÞÖKLNÂˆÙ[™Y‚™›Ø]Y™žÖOLŽÂˆÙ[YˆYš[™Y
ÒQÕÐÕP‘^ÖJB[šY›Ü›HØ[\\ÝX™HÚYÝÕ^\™^ÖNÈˆÙ[ÙB˜\žZ[™È™XÍ”ÜÚ][Û‘œ›ÛSYÚÖNÝ˜\žZ[™È›Ø]‘\Y]šXÞÖNÂˆÚYˆYš[™Y
ÒQÕÔÔÔÞÖJB[šY›Ü›HYÚØ[\\Œ‘ÚYÝÈÚYÝÕ^\™^ÖNÝ[šY›Ü›HYÚØ[\\Œ‘\^\™^ÖNÂˆÙ[YˆYš[™Y
ÒQÕÔÑžÖJB[šY›Ü›HYÚØ[\\Œ‘ÚYÝÈÚYÝÕ^\™^ÖNÂˆÙ[ÙB[šY›Ü›HØ[\\Œ‘ÚYÝÕ^\™^ÖNÂˆÙ[™Y‚[šY›Ü›HX]YÚX]š^ÖNÂˆÙ[™Y‚ˆÙ[™Y‚ˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VÑÜ_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÑÜOXÓJNØÛÛœÝS^Û˜[YN‘ÜÚY\Ž˜Ó_KH›Ò[\‘[˜Ý[ÛœÈ‹OX™XÌˆÕ]ŠÛÛœÝ[ˆ™XÌÈ‹ÛÛœÝ[ˆ™XÌÈ‹ÛÛœÝ[ˆ›Ø]›ÝYÚ™\ÜÈ
HØÛÛœÝ›Ø]UÒV‘OMŒØÛÛœÝ›Ø]UÐÐSOJUÒV‘KLKŒ
KÓUÒV‘NØÛÛœÝ›Ø]U’PTÏLKÓUÒV‘NÙ›Ø]Ý•\Ø]\˜]JÝ
‹ˆ
H
NÝ™XÌˆ]]™XÌŠ›ÝYÚ™\ÜËÜ\
KŒYÝ•ˆ
H
NÝ]]]Š“UÐÐSJÓU’PTÎÜ™]\›ˆ]ŽßB™›Ø]ÐÛ\YÜ\™Q›Ü›Q˜XÝÜŠÛÛœÝ[ˆ™XÌÈˆ
HÙ›Ø][[™Ý
ˆ
NÜ™]\›ˆX^


›
Ù‹žˆ
KÊ
ÌKŒ
KŒ
NßB™XÌÈÑYÙU™XÝÜ‘›Ü›Q˜XÝÜŠÛÛœÝ[ˆ™XÌÈŒKÛÛœÝ[ˆ™XÌÈŒˆ
HÙ›Ø]YÝ
ŒKŒˆ
NÙ›Ø]OXXœÊ
NÙ›Ø]OLŽMÎNJÊMLMMJÌŒMLŒŠžH
JžNÙ›Ø]LËMÍNM
ÊŒMŒMÌ
ÞH
JžNÙ›Ø]XKØŽÙ›Ø]]TÚ[]OLŒÚYŠŒŒ
BžÝ]TÚ[]O]ŽßB™[ÙBžÝ]TÚ[]OLJš[™\œÙ\Ü\
X^
KŒ^
žYKMÈ
H
K]ŽßBœ™]\›ˆÜ›ÜÜÊŒKŒˆ
J]TÚ[]NßB™XÌÈÑ]˜[X]JÛÛœÝ[ˆ™XÌÈ‹ÛÛœÝ[ˆ™XÌÈ‹ÛÛœÝ[ˆ™XÌÈÛÛœÝ[ˆX]ÈR[‹ÛÛœÝ[ˆ™XÌÈ™XÝÛÛÜ™ÖÈH
HÝ™XÌÈŒO\™XÝÛÛÜ™ÖÈHK\™XÝÛÛÜ™ÖÈNÝ™XÌÈŒ\™XÝÛÛÜ™ÖÈÈK\™XÝÛÛÜ™ÖÈNÝ™XÌÈYÚ›Ü›X[XÜ›ÜÜÊŒKŒˆ
NÚYŠÝ
YÚ›Ü›X[\™XÝÛÛÜ™ÖÈH
OŒ
H™]\›ˆ™XÌÊŒ
NÝ™XÌÈKŽÕO[›Ü›X[^™J‹SŠ™Ý
‹ˆ
H
NÕKHÜ›ÜÜÊ‹H
NÈ›X]ÈX][R[Š˜[œÜÜÙSX]ÊX]ÊK‹ˆ
H
NÝ™XÌÈÛÛÜ™ÖÈNØÛÛÜ™ÖÈO[X]
Š™XÝÛÛÜ™ÖÈKT
NØÛÛÜ™ÖÈHO[X]
Š™XÝÛÛÜ™ÖÈHKT
NØÛÛÜ™ÖÈˆO[X]
Š™XÝÛÛÜ™ÖÈˆKT
NØÛÛÜ™ÖÈÈO[X]
Š™XÝÛÛÜ™ÖÈÈKT
NØÛÛÜ™ÖÈO[›Ü›X[^™JÛÛÜ™ÖÈH
NØÛÛÜ™ÖÈHO[›Ü›X[^™JÛÛÜ™ÖÈHH
NØÛÛÜ™ÖÈˆO[›Ü›X[^™JÛÛÜ™ÖÈˆH
NØÛÛÜ™ÖÈÈO[›Ü›X[^™JÛÛÜ™ÖÈÈH
NÝ™XÌÈ™XÝÜ‘›Ü›Q˜XÝÜ]™XÌÊŒ
NÝ™XÝÜ‘›Ü›Q˜XÝÜŠÏSÑYÙU™XÝÜ‘›Ü›Q˜XÝÜŠÛÛÜ™ÖÈKÛÛÜ™ÖÈHH
NÝ™XÝÜ‘›Ü›Q˜XÝÜŠÏSÑYÙU™XÝÜ‘›Ü›Q˜XÝÜŠÛÛÜ™ÖÈHKÛÛÜ™ÖÈˆH
NÝ™XÝÜ‘›Ü›Q˜XÝÜŠÏSÑYÙU™XÝÜ‘›Ü›Q˜XÝÜŠÛÛÜ™ÖÈˆKÛÛÜ™ÖÈÈH
NÝ™XÝÜ‘›Ü›Q˜XÝÜŠÏSÑYÙU™XÝÜ‘›Ü›Q˜XÝÜŠÛÛÜ™ÖÈÈKÛÛÜ™ÖÈH
NÙ›Ø]™\Ý[SÐÛ\YÜ\™Q›Ü›Q˜XÝÜŠ™XÝÜ‘›Ü›Q˜XÝÜˆ
NÜ™]\›ˆ™XÌÊ™\Ý[
NßB™XÌÈ™]ÚY™\ÙQš[\™Y^\™JØ[\\Œ‘^YÚš[\™Y™XÌÈWË™XÌÈ—Ë™XÌÈ×Ë™XÌÈÊBžÝ™XÌÈŒO\—Ë\WÎÝ™XÌÈŒ\Ë\WÎÝ™XÌÈ[™SÜÏJÜ›ÜÜÊŒKŒŠJNÙ›Ø][™P\™XTÜ]X\™YYÝ
[™SÜË[™SÜÊNÙ›Ø][™Q\Ý[™P\™XOYÝ
[™SÜËWÊNÝ™XÌÈ\[™Q\Ý[™P\™XJœ[™SÜËÜ[™P\™XTÜ]X\™Y\WÎÙ›Ø]ÝÕŒWÕŒYÝ
ŒKŒŠNÙ›Ø][—ÙÝÕŒWÕŒOLKŒÙÝ
ŒKŒJNÝ™XÌÈŒ—ÏUŒ‹UŒJ™ÝÕŒWÕŒŠš[—ÙÝÕŒWÕŒNÝ™XÌˆ]ŽÔ]‹žOYÝ
Œ—Ë
KÙÝ
Œ—ËŒ—ÊNÔ]‹žYÝ
ŒK
Jš[—ÙÝÕŒWÕŒKYÝÕŒWÕŒŠš[—ÙÝÕŒWÕŒJ”]‹žHÙ›Ø]XXœÊ[™Q\Ý[™P\™XJKÜÝÊ[™P\™XTÜ]X\™YÍJNÙ›Ø]Ø[\SÑ[ÙÊŒŒ
™
KÛÙÊËŒ
NÝ™XÌˆØ[\UU]™XÌŠŒLKŒLJJÊ™XÌŠÍJJ”]ŠNÜØ[\UU‹žLKŒ\Ø[\UU‹žÜ™]\›ˆ^\™L‘ÙV
^YÚš[\™YØ[\UU‹Ø[\SÑ
Kœ™ØŽßB™XÌÈÑ]˜[X]UÚ][Z\ÜÚ[ÛŠÛÛœÝ[ˆ™XÌÈ‹ÛÛœÝ[ˆ™XÌÈ‹ÛÛœÝ[ˆ™XÌÈÛÛœÝ[ˆX]ÈR[‹ÛÛœÝ[ˆ™XÌÈ™XÝÛÛÜ™ÖÈKÛÛœÝ[ˆØ[\\Œ‘^š[\™YX\
HÝ™XÌÈŒO\™XÝÛÛÜ™ÖÈHK\™XÝÛÛÜ™ÖÈNÝ™XÌÈŒ\™XÝÛÛÜ™ÖÈÈK\™XÝÛÛÜ™ÖÈNÝ™XÌÈYÚ›Ü›X[XÜ›ÜÜÊŒKŒˆ
NÚYŠÝ
YÚ›Ü›X[\™XÝÛÛÜ™ÖÈH
OŒ
H™]\›ˆ™XÌÊŒ
NÝ™XÌÈKŽÕO[›Ü›X[^™J‹SŠ™Ý
‹ˆ
H
NÕKHÜ›ÜÜÊ‹H
NÈ›X]ÈX][R[Š˜[œÜÜÙSX]ÊX]ÊK‹ˆ
H
NÝ™XÌÈÛÛÜ™ÖÈNØÛÛÜ™ÖÈO[X]
Š™XÝÛÛÜ™ÖÈKT
NØÛÛÜ™ÖÈHO[X]
Š™XÝÛÛÜ™ÖÈHKT
NØÛÛÜ™ÖÈˆO[X]
Š™XÝÛÛÜ™ÖÈˆKT
NØÛÛÜ™ÖÈÈO[X]
Š™XÝÛÛÜ™ÖÈÈKT
NÝ™XÌÈ^\™SYÚQ™]ÚY™\ÙQš[\™Y^\™J^š[\™YX\ÛÛÜ™ÖÌKÛÛÜ™ÖÌWKÛÛÜ™ÖÌ—KÛÛÜ™ÖÌ×JNØÛÛÜ™ÖÈO[›Ü›X[^™JÛÛÜ™ÖÈH
NØÛÛÜ™ÖÈHO[›Ü›X[^™JÛÛÜ™ÖÈHH
NØÛÛÜ™ÖÈˆO[›Ü›X[^™JÛÛÜ™ÖÈˆH
NØÛÛÜ™ÖÈÈO[›Ü›X[^™JÛÛÜ™ÖÈÈH
NÝ™XÌÈ™XÝÜ‘›Ü›Q˜XÝÜ]™XÌÊŒ
NÝ™XÝÜ‘›Ü›Q˜XÝÜŠÏSÑYÙU™XÝÜ‘›Ü›Q˜XÝÜŠÛÛÜ™ÖÈKÛÛÜ™ÖÈHH
NÝ™XÝÜ‘›Ü›Q˜XÝÜŠÏSÑYÙU™XÝÜ‘›Ü›Q˜XÝÜŠÛÛÜ™ÖÈHKÛÛÜ™ÖÈˆH
NÝ™XÝÜ‘›Ü›Q˜XÝÜŠÏSÑYÙU™XÝÜ‘›Ü›Q˜XÝÜŠÛÛÜ™ÖÈˆKÛÛÜ™ÖÈÈH
NÝ™XÝÜ‘›Ü›Q˜XÝÜŠÏSÑYÙU™XÝÜ‘›Ü›Q˜XÝÜŠÛÛÜ™ÖÈÈKÛÛÜ™ÖÈH
NÙ›Ø]™\Ý[SÐÛ\YÜ\™Q›Ü›Q˜XÝÜŠ™XÝÜ‘›Ü›Q˜XÝÜˆ
NÜ™]\›ˆ™XÌÊ™\Ý[
J^\™SYÚßBœÝXÝ\™XSYÚ]BžÝ™XÌÈY™\ÙNÝ™XÌÈÜXÝ[\ŽÝ™XÍœ™\Û™[ßNÂˆÙYš[™H[›[™B˜\™XSYÚ]HÛÛ\]P\™XSYÚÜXÝ[\‘Y™\ÙQœ™\Û™[
ÛÛœÝ[ˆØ[\\Œ‘ÌKÛÛœÝ[ˆØ[\\Œ‘Ì‹ÛÛœÝ[ˆ™XÌÈšY]Ñ\‹ÛÛœÝ[ˆ™XÌÈ›Ü›X[ÛÛœÝ[ˆ™XÌÈÜÚ][Û‹ÛÛœÝ[ˆ™XÌÈYÚÜËÛÛœÝ[ˆ™XÌÈ[•ÚYÛÛœÝ[ˆ™XÌÈ[’ZYÚÛÛœÝ[ˆ›Ø]›ÝYÚ™\ÜÊHžØ\™XSYÚ]H™\Ý[Ý™XÌÈ™XÝÛÛÜ™ÖÈNÜ™XÝÛÛÜ™ÖÈO[YÚÜÊÚ[•ÚYZ[’ZYÚÈœ™XÝÛÛÜ™ÖÈHO[YÚÜËZ[•ÚYZ[’ZYÚÜ™XÝÛÛÜ™ÖÈˆO[YÚÜËZ[•ÚY
Ú[’ZYÚÜ™XÝÛÛÜ™ÖÈÈO[YÚÜÊÚ[•ÚY
Ú[’ZYÚÂˆÚY™YˆÔPÕST•T“B™XÌˆ]SÕ]Š›Ü›X[šY]Ñ\‹›ÝYÚ™\ÜÈ
NÝ™XÍO]^\™L‘
ÌK]ˆ
NÝ™XÍ]^\™L‘
Ì‹]ˆ
NÛX]ÈR[[X]Ê™XÌÊKžKžH
K™XÌÊK
K™XÌÊKž‹KÈ
BŠNÜ™\Ý[”ÜXÝ[\SÑ]˜[X]J›Ü›X[šY]Ñ\‹ÜÚ][Û‹R[‹™XÝÛÛÜ™È
NÜ™\Ý[‘œ™\Û™[]ŽÂˆÙ[™Y‚œ™\Ý[‘Y™\ÙOSÑ]˜[X]J›Ü›X[šY]Ñ\‹ÜÚ][Û‹X]ÊKŒ
K™XÝÛÛÜ™È
NÜ™]\›ˆ™\Ý[ßBˆÙYš[™H[›[™B˜\™XSYÚ]HÛÛ\]P\™XSYÚÜXÝ[\‘Y™\ÙQœ™\Û™[Ú][Z\ÜÚ[ÛŠÛÛœÝ[ˆØ[\\Œ‘ÌKÛÛœÝ[ˆØ[\\Œ‘Ì‹ÛÛœÝ[ˆØ[\\Œ‘^š[\™YX\ÛÛœÝ[ˆ™XÌÈšY]Ñ\‹ÛÛœÝ[ˆ™XÌÈ›Ü›X[ÛÛœÝ[ˆ™XÌÈÜÚ][Û‹ÛÛœÝ[ˆ™XÌÈYÚÜËÛÛœÝ[ˆ™XÌÈ[•ÚYÛÛœÝ[ˆ™XÌÈ[’ZYÚÛÛœÝ[ˆ›Ø]›ÝYÚ™\ÜÊHžØ\™XSYÚ]H™\Ý[Ý™XÌÈ™XÝÛÛÜ™ÖÈNÜ™XÝÛÛÜ™ÖÈO[YÚÜÊÚ[•ÚYZ[’ZYÚÈœ™XÝÛÛÜ™ÖÈHO[YÚÜËZ[•ÚYZ[’ZYÚÜ™XÝÛÛÜ™ÖÈˆO[YÚÜËZ[•ÚY
Ú[’ZYÚÜ™XÝÛÛÜ™ÖÈÈO[YÚÜÊÚ[•ÚY
Ú[’ZYÚÂˆÚY™YˆÔPÕST•T“B™XÌˆ]SÕ]Š›Ü›X[šY]Ñ\‹›ÝYÚ™\ÜÈ
NÝ™XÍO]^\™L‘
ÌK]ˆ
NÝ™XÍ]^\™L‘
Ì‹]ˆ
NÛX]ÈR[[X]Ê™XÌÊKžKžH
K™XÌÊK
K™XÌÊKž‹KÈ
BŠNÜ™\Ý[”ÜXÝ[\SÑ]˜[X]UÚ][Z\ÜÚ[ÛŠ›Ü›X[šY]Ñ\‹ÜÚ][Û‹R[‹™XÝÛÛÜ™Ë^š[\™YX\
NÜ™\Ý[‘œ™\Û™[]ŽÂˆÙ[™Y‚œ™\Ý[‘Y™\ÙOSÑ]˜[X]UÚ][Z\ÜÚ[ÛŠ›Ü›X[šY]Ñ\‹ÜÚ][Û‹X]ÊKŒ
K™XÝÛÛÜ™Ë^š[\™YX\
NÜ™]\›ˆ™\Ý[ßXÜK’[˜ÛY\ÔÚY\œÔÝÜ™VÖ_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÖOZJNØÛÛœÝ	^Û˜[YN–ÚY\Žš_KÜH˜Û\Ý\™YYÚ[™Ñ[˜Ý[ÛœÈ‹“OXÝXÝÛ\Ý\™YYÚÝ™XÍ“YÚ]NÝ™XÍ“YÚY™\ÙNÝ™XÍ“YÚÜXÝ[\ŽÝ™XÍ“YÚ\™XÝ[ÛŽÝ™XÍ“YÚ˜[Ù™ŽßNÂˆÙYš[™H[›[™BÛ\Ý\™YYÚÙ]Û\Ý\™YYÚ
Ø[\\Œ‘YÚ]U^\™K[[™^
HÜ™]\›ˆÛ\Ý\™YYÚ
^[™]Ú
YÚ]U^\™K]™XÌŠ[™^
K
K^[™]Ú
YÚ]U^\™K]™XÌŠK[™^
K
K^[™]Ú
YÚ]U^\™K]™XÌŠ‹[™^
K
K^[™]Ú
YÚ]U^\™K]™XÌŠË[™^
K
K^[™]Ú
YÚ]U^\™K]™XÌŠ[™^
K
BŠNßBš[Ù]Û\Ý\™YÛXÙR[™^
™XÌˆÛXÙQ]K›Ø]šY]Ñ\
HÜ™]\›ˆ[
ÙÊšY]Ñ\
JœÛXÙQ]Kž
ÜÛXÙQ]KžJNßB˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VÕÜ_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÕÜOY“JNØÛÛœÝ“^Û˜[YN•ÜÚY\Ž™“_KH›YÚÑœ˜YÛY[[˜Ý[ÛœÈ‹SOXÝXÝYÚ[™Ò[™›ÂžÝ™XÌÈY™\ÙNÂˆÚY™YˆÔPÕST•T“B™XÌÈÜXÝ[\ŽÂˆÙ[™Y‚ˆÚY™Yˆ‘Õ™›Ø]™ÂˆÙ[™Y‚ŸNÛYÚ[™Ò[™›ÈÛÛ\]SYÚ[™Ê™XÌÈšY]Ñ\™XÝ[Û•Ë™XÌÈ“›Ü›X[™XÍYÚ]K™XÌÈY™\ÙPÛÛÜ‹™XÌÈÜXÝ[\ÛÛÜ‹›Ø]˜[™ÙK›Ø]ÛÜÜÚ[™\ÜÊHÛYÚ[™Ò[™›È™\Ý[Ý™XÌÈYÚ™XÝÜ•ÎÙ›Ø]][X][ÛLKŒÚYˆ
YÚ]KÏOLŠBžÝ™XÌÈ\™XÝ[Û[YÚ]Kž^‹]”ÜÚ][Û•ÎØ][X][Û[X^
‹KŒ[[™Ý
\™XÝ[ÛŠKÜ˜[™ÙJNÛYÚ™XÝÜ•Ï[›Ü›X[^™J\™XÝ[ÛŠNßB™[ÙBžÛYÚ™XÝÜ•Ï[›Ü›X[^™J[YÚ]Kž^ŠNßB™›Ø]™[X^
‹Ý
“›Ü›X[YÚ™XÝÜ•ÊJNÂˆÚY™Yˆ‘Õœ™\Ý[›™[™ÂˆÙ[™Y‚œ™\Ý[™Y™\ÙO[™
™Y™\ÙPÛÛÜŠ˜][X][ÛŽÂˆÚY™YˆÔPÕST•T“B™XÌÈ[™ÛUÏ[›Ü›X[^™JšY]Ñ\™XÝ[Û•ÊÛYÚ™XÝÜ•ÊNÙ›Ø]ÜXÐÛÛ\[X^
‹Ý
“›Ü›X[[™ÛUÊJNÜÜXÐÛÛ\\ÝÊÜXÐÛÛ\X^
K‹ÛÜÜÚ[™\ÜÊJNÜ™\Ý[œÜXÝ[\\ÜXÐÛÛ\
œÜXÝ[\ÛÛÜŠ˜][X][ÛŽÂˆÙ[™Y‚œ™]\›ˆ™\Ý[ßB™›Ø]Ù]][X][ÛŠ›Ø]ÛÜÐ[™ÛK›Ø]^Û™[
HÜ™]\›ˆX^
‹ÝÊÛÜÐ[™ÛK^Û™[
JNßB™›Ø]Ù]QTÐ][X][ÛŠ›Ø]ÛÜÐ[™ÛKØ[\\Œ‘Y\ÓYÚØ[\\ŠHÙ›Ø][™ÛOXXÛÜÊÛÜÐ[™ÛJKÔNÜ™]\›ˆ^\™L‘
Y\ÓYÚØ[\\‹™XÌŠ[™ÛKŠJKœŽßB›YÚ[™Ò[™›È˜\ÚXÔÜÝYÚ[™Ê™XÌÈšY]Ñ\™XÝ[Û•Ë™XÌÈYÚ™XÝÜ•Ë™XÌÈ“›Ü›X[›Ø]][X][Û‹™XÌÈY™\ÙPÛÛÜ‹™XÌÈÜXÝ[\ÛÛÜ‹›Ø]ÛÜÜÚ[™\ÜÊHÛYÚ[™Ò[™›È™\Ý[È™›Ø]™[X^
‹Ý
“›Ü›X[YÚ™XÝÜ•ÊJNÂˆÚY™Yˆ‘Õœ™\Ý[›™[™ÂˆÙ[™Y‚œ™\Ý[™Y™\ÙO[™
™Y™\ÙPÛÛÜŠ˜][X][ÛŽÂˆÚY™YˆÔPÕST•T“B™XÌÈ[™ÛUÏ[›Ü›X[^™JšY]Ñ\™XÝ[Û•ÊÛYÚ™XÝÜ•ÊNÙ›Ø]ÜXÐÛÛ\[X^
‹Ý
“›Ü›X[[™ÛUÊJNÜÜXÐÛÛ\\ÝÊÜXÐÛÛ\X^
K‹ÛÜÜÚ[™\ÜÊJNÜ™\Ý[œÜXÝ[\\ÜXÐÛÛ\
œÜXÝ[\ÛÛÜŠ˜][X][ÛŽÂˆÙ[™Y‚œ™]\›ˆ™\Ý[ßB›YÚ[™Ò[™›ÈÛÛ\]RQTÔÜÝYÚ[™Ê™XÌÈšY]Ñ\™XÝ[Û•Ë™XÌÈ“›Ü›X[™XÍYÚ]K™XÍYÚ\™XÝ[Û‹™XÌÈY™\ÙPÛÛÜ‹™XÌÈÜXÝ[\ÛÛÜ‹›Ø]˜[™ÙK›Ø]ÛÜÜÚ[™\ÜËØ[\\Œ‘Y\ÓYÚØ[\\ŠHÈ™XÌÈ\™XÝ[Û[YÚ]Kž^‹]”ÜÚ][Û•ÎÝ™XÌÈYÚ™XÝÜ•Ï[›Ü›X[^™J\™XÝ[ÛŠNÙ›Ø]][X][Û[X^
‹KŒ[[™Ý
\™XÝ[ÛŠKÜ˜[™ÙJNÙ›Ø]Ý›ÙXÝYÝ
YÚ\™XÝ[Û‹ž^‹[YÚ™XÝÜ•ÊNÙ›Ø]ÛÜÐ[™ÛO[X^
‹Ý›ÙXÝ
NÚYˆ
ÛÜÐ[™ÛO[YÚ\™XÝ[Û‹ÊBžÈ˜][X][ÛŠYÙ]QTÐ][X][ÛŠÝ›ÙXÝY\ÓYÚØ[\\ŠNÜ™]\›ˆ˜\ÚXÔÜÝYÚ[™ÊšY]Ñ\™XÝ[Û•ËYÚ™XÝÜ•Ë“›Ü›X[][X][Û‹Y™\ÙPÛÛÜ‹ÜXÝ[\ÛÛÜ‹ÛÜÜÚ[™\ÜÊNßB›YÚ[™Ò[™›È™\Ý[Ü™\Ý[™Y™\ÙO]™XÌÊŠNÂˆÚY™YˆÔPÕST•T“Bœ™\Ý[œÜXÝ[\]™XÌÊŠNÂˆÙ[™Y‚ˆÚY™Yˆ‘Õœ™\Ý[›™LŽÂˆÙ[™Y‚œ™]\›ˆ™\Ý[ßB›YÚ[™Ò[™›ÈÛÛ\]TÜÝYÚ[™Ê™XÌÈšY]Ñ\™XÝ[Û•Ë™XÌÈ“›Ü›X[™XÍYÚ]K™XÍYÚ\™XÝ[Û‹™XÌÈY™\ÙPÛÛÜ‹™XÌÈÜXÝ[\ÛÛÜ‹›Ø]˜[™ÙK›Ø]ÛÜÜÚ[™\ÜÊHÝ™XÌÈ\™XÝ[Û[YÚ]Kž^‹]”ÜÚ][Û•ÎÝ™XÌÈYÚ™XÝÜ•Ï[›Ü›X[^™J\™XÝ[ÛŠNÙ›Ø]][X][Û[X^
‹KŒ[[™Ý
\™XÝ[ÛŠKÜ˜[™ÙJNÙ›Ø]ÛÜÐ[™ÛO[X^
‹Ý
YÚ\™XÝ[Û‹ž^‹[YÚ™XÝÜ•ÊJNÚYˆ
ÛÜÐ[™ÛO[YÚ\™XÝ[Û‹ÊBžÈ˜][X][ÛŠYÙ]][X][ÛŠÛÜÐ[™ÛKYÚ]KÊNÜ™]\›ˆ˜\ÚXÔÜÝYÚ[™ÊšY]Ñ\™XÝ[Û•ËYÚ™XÝÜ•Ë“›Ü›X[][X][Û‹Y™\ÙPÛÛÜ‹ÜXÝ[\ÛÛÜ‹ÛÜÜÚ[™\ÜÊNßB›YÚ[™Ò[™›È™\Ý[Ü™\Ý[™Y™\ÙO]™XÌÊŠNÂˆÚY™YˆÔPÕST•T“Bœ™\Ý[œÜXÝ[\]™XÌÊŠNÂˆÙ[™Y‚ˆÚY™Yˆ‘Õœ™\Ý[›™LŽÂˆÙ[™Y‚œ™]\›ˆ™\Ý[ßB›YÚ[™Ò[™›ÈÛÛ\]R[Z\Ü\šXÓYÚ[™Ê™XÌÈšY]Ñ\™XÝ[Û•Ë™XÌÈ“›Ü›X[™XÍYÚ]K™XÌÈY™\ÙPÛÛÜ‹™XÌÈÜXÝ[\ÛÛÜ‹™XÌÈÜ›Ý[™ÛÛÜ‹›Ø]ÛÜÜÚ[™\ÜÊHÛYÚ[™Ò[™›È™\Ý[Ù›Ø]™YÝ
“›Ü›X[YÚ]Kž^ŠJŒJÌNÂˆÚY™Yˆ‘Õœ™\Ý[›™[™ÂˆÙ[™Y‚œ™\Ý[™Y™\ÙO[Z^
Ü›Ý[™ÛÛÜ‹Y™\ÙPÛÛÜ‹™
NÂˆÚY™YˆÔPÕST•T“B™XÌÈ[™ÛUÏ[›Ü›X[^™JšY]Ñ\™XÝ[Û•ÊÛYÚ]Kž^ŠNÙ›Ø]ÜXÐÛÛ\[X^
‹Ý
“›Ü›X[[™ÛUÊJNÜÜXÐÛÛ\\ÝÊÜXÐÛÛ\X^
K‹ÛÜÜÚ[™\ÜÊJNÜ™\Ý[œÜXÝ[\\ÜXÐÛÛ\
œÜXÝ[\ÛÛÜŽÂˆÙ[™Y‚œ™]\›ˆ™\Ý[ßBˆÙYš[™H[›[™B™XÌÈÛÛ\]T›Ú™XÝ[Û•^\™QY™\ÙSYÚ[™ÊØ[\\Œ‘›Ú™XÝ[Û“YÚØ[\\‹X]^\™T›Ú™XÝ[Û“X]š^™XÌÈÜÕÊ^Ý™XÍÝœO]^\™T›Ú™XÝ[Û“X]š^
™XÍ
ÜÕËKŒ
NÜÝœKÏ\ÝœKÎÝ™XÌÈ^\™PÛÛÜ]^\™L‘
›Ú™XÝ[Û“YÚØ[\\‹ÝœKžJKœ™ØŽÜ™]\›ˆ^\™PÛÛÜŽßBˆÚYˆYš[™Y
T‘PSQÒTÑQ
H	‰ˆYš[™Y
T‘PSQÒÕTÔ•Q
BˆÚ[˜ÛYOÒ[\‘[˜Ý[ÛœÏ‚[šY›Ü›HØ[\\Œ‘\™XSYÚÓÌTØ[\\ŽÝ[šY›Ü›HØ[\\Œ‘\™XSYÚÓÌ”Ø[\\ŽÂˆÙYš[™H[›[™B›YÚ[™Ò[™›ÈÛÛ\]P\™XSYÚ[™ÊØ[\\Œ‘ÌKØ[\\Œ‘Ì‹™XÌÈšY]Ñ\™XÝ[Û•Ë™XÌÈ“›Ü›X[™XÌÈ”ÜÚ][Û‹™XÌÈYÚÜÚ][Û‹™XÌÈ[•ÚY™XÌÈ[’ZYÚ™XÌÈY™\ÙPÛÛÜ‹™XÌÈÜXÝ[\ÛÛÜ‹›Ø]›ÝYÚ™\ÜÊHžÛYÚ[™Ò[™›È™\Ý[Ø\™XSYÚ]H]OXÛÛ\]P\™XSYÚÜXÝ[\‘Y™\ÙQœ™\Û™[
ÌKÌ‹šY]Ñ\™XÝ[Û•Ë“›Ü›X[”ÜÚ][Û‹YÚÜÚ][Û‹[•ÚY[’ZYÚ›ÝYÚ™\ÜÊNÂˆÚY™YˆÔPÕST•T“B™XÌÈœ™\Û™[JÜXÝ[\ÛÛÜŠ™]K‘œ™\Û™[ž
Ê™XÌÊKŒ
K\ÜXÝ[\ÛÛÜˆ
J™]K‘œ™\Û™[žH
NÜ™\Ý[œÜXÝ[\ŠÏ\ÜXÝ[\ÛÛÜŠ™œ™\Û™[
™]K”ÜXÝ[\ŽÂˆÙ[™Y‚œ™\Ý[™Y™\ÙJÏYY™\ÙPÛÛÜŠ™]K‘Y™\ÙNÜ™]\›ˆ™\Ý[ßB›YÚ[™Ò[™›ÈÛÛ\]P\™XSYÚ[™ÕÚ]^\™JØ[\\Œ‘ÌKØ[\\Œ‘Ì‹Ø[\\Œ‘[Z\ÜÚ[Û•^\™K™XÌÈšY]Ñ\™XÝ[Û•Ë™XÌÈ“›Ü›X[™XÌÈ”ÜÚ][Û‹™XÌÈYÚÜÚ][Û‹™XÌÈ[•ÚY™XÌÈ[’ZYÚ™XÌÈY™\ÙPÛÛÜ‹™XÌÈÜXÝ[\ÛÛÜ‹›Ø]›ÝYÚ™\ÜÊHžÛYÚ[™Ò[™›È™\Ý[Ø\™XSYÚ]H]OXÛÛ\]P\™XSYÚÜXÝ[\‘Y™\ÙQœ™\Û™[Ú][Z\ÜÚ[ÛŠÌKÌ‹[Z\ÜÚ[Û•^\™KšY]Ñ\™XÝ[Û•Ë“›Ü›X[”ÜÚ][Û‹YÚÜÚ][Û‹[•ÚY[’ZYÚ›ÝYÚ™\ÜÊNÂˆÚY™YˆÔPÕST•T“B™XÌÈœ™\Û™[JÜXÝ[\ÛÛÜŠ™]K‘œ™\Û™[ž
Ê™XÌÊKŒ
K\ÜXÝ[\ÛÛÜˆ
J™]K‘œ™\Û™[žH
NÜ™\Ý[œÜXÝ[\ŠÏ\ÜXÝ[\ÛÛÜŠ™œ™\Û™[
™]K”ÜXÝ[\ŽÂˆÙ[™Y‚œ™\Ý[™Y™\ÙJÏYY™\ÙPÛÛÜŠ™]K‘Y™\ÙNÜ™]\›ˆ™\Ý[ßBˆÙ[™Y‚ˆÚYˆYš[™Y
ÓTÕQÒÐUÒ
H	‰ˆÓTÕQÒÐUÒŒˆÚ[˜ÛYOÛ\Ý\™YYÚ[™Ñ[˜Ý[ÛœÏ‚ˆÙYš[™H[›[™B›YÚ[™Ò[™›ÈÛÛ\]PÛ\Ý\™YYÚ[™ÊœØ[\\Œ‘YÚ]U^\™KœØ[\\Œ‘[SX\ÚÕ^\™K™XÌÈšY]Ñ\™XÝ[Û•Ë™XÌÈ“›Ü›X[™XÍYÚ]Kš]™XÌˆÛXÙT˜[™ÙK™›Ø]ÛÜÜÚ[™\ÜÂŠHÛYÚ[™Ò[™›È™\Ý[Ú]™XÌˆ[TÜÚ][ÛZ]™XÌŠÛÑœ˜YÐÛÛÜ™žJ›YÚ]KžJNÚ[X\ÚÒZYÚZ[
YÚ]KžŠNÝ[TÜÚ][Û‹žO[Z[Š[TÜÚ][Û‹žKX\ÚÒZYÚLJNÚ]™XÌˆ˜]Ú˜[™ÙO\ÛXÙT˜[™ÙKÐÓTÕQÒÐUÒÚ[˜]ÚÙ™œÙ]X˜]Ú˜[™ÙKž
ÓTÕQÒÐUÒÝ[TÜÚ][Û‹žJÏ[X\ÚÒZYÚ
˜˜]Ú˜[™ÙKžÙ›Üˆ
[OX˜]Ú˜[™ÙKžÈOX˜]Ú˜[™ÙKžNÈJÏLJHÝZ[X\ÚÏ]Z[
^[™]Ú
[SX\ÚÕ^\™K[TÜÚ][Û‹
KœŠNÝ[TÜÚ][Û‹žJÏ[X\ÚÒZYÚÚ[X\ÚÓÙ™œÙ][X^
ÛXÙT˜[™ÙKžX˜]ÚÙ™œÙ]
NÚ[X\ÚÕÚY[Z[ŠÛXÙT˜[™ÙKžKX˜]ÚÙ™œÙ]
ÌKÓTÕQÒÐUÒ
NÛX\ÚÏY^˜XÝš]ÊX\ÚËX\ÚÓÙ™œÙ]X\ÚÕÚY
NÝÚ[H
X\ÚÈOHJHÝZ[š][X\ÚÈ	ˆ[X\ÚÎÛX\ÚÈHš]Ú[ÜÚ][Û[Û›Pš]ÜÚ][ÛŠš]
NÐÛ\Ý\™YYÚYÚYÙ]Û\Ý\™YYÚ
YÚ]U^\™K˜]ÚÙ™œÙ]
ÛX\ÚÓÙ™œÙ]
ÜÜÚ][ÛŠNÛYÚ[™Ò[™›È[™›ÎÚYˆ
YÚ“YÚ\™XÝ[Û‹ÏŒ
HÚ[™›ÏXÛÛ\]SYÚ[™ÊšY]Ñ\™XÝ[Û•Ë“›Ü›X[YÚ“YÚ]KYÚ“YÚY™\ÙKœ™Ø‹YÚ“YÚÜXÝ[\‹œ™Ø‹YÚ“YÚY™\ÙK˜KÛÜÜÚ[™\ÜÊNßH[ÙHÚ[™›ÏXÛÛ\]TÜÝYÚ[™ÊšY]Ñ\™XÝ[Û•Ë“›Ü›X[YÚ“YÚ]KYÚ“YÚ\™XÝ[Û‹YÚ“YÚY™\ÙKœ™Ø‹YÚ“YÚÜXÝ[\‹œ™Ø‹YÚ“YÚY™\ÙK˜KÛÜÜÚ[™\ÜÊNßBœ™\Ý[™Y™\ÙJÏZ[™›Ë™Y™\ÙNÂˆÚY™YˆÔPÕST•T“Bœ™\Ý[œÜXÝ[\ŠÏZ[™›ËœÜXÝ[\ŽÂˆÙ[™Y‚ŸB˜˜]ÚÙ™œÙ]
ÏPÓTÕQÒÐUÒßBœ™]\›ˆ™\Ý[ßBˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VÒ_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÒO]SJNØÛÛœÝUO^Û˜[YN’ÚY\ŽS_K\HœÚYÝÜÑœ˜YÛY[[˜Ý[ÛœÈ‹OXÚY™YˆÒQÕÔÂˆÚYˆYš[™Y
ÑP‘ÓŠHYš[™Y
ÑP‘ÔJHYš[™Y
UU‘JBˆÙYš[™HVT‘Q•SÊËË
H^\™L‘ÙV
ËË
BˆÙ[ÙBˆÙYš[™HVT‘Q•SÊËËŠH^\™L‘
ËËŠBˆÙ[™Y‚ˆÚY›™YˆÒQÕÑ“ÐU™›Ø][œXÚÊ™XÍÛÛÜŠBžØÛÛœÝ™XÍš]ÜÚY]™XÍ
KŒÊMKŒ
ŒMKŒ
ŒMKŒ
KKŒÊMKŒ
ŒMKŒ
KKŒÌMKŒKŒ
NÜ™]\›ˆÝ
ÛÛÜ‹š]ÜÚY
NßBˆÙ[™Y‚™›Ø]ÛÛ\]Q˜[Ù™Š›Ø]˜[YK™XÌˆÛ\ÜXÙK›Ø]œ\Ý[QYÙQ˜[Ù™ŠBžÙ›Ø]X\ÚÏ\Û[ÛÝÝ\
KŒYœ\Ý[QYÙQ˜[Ù™‹KŒL‹Û[\
Ý
Û\ÜXÙKÛ\ÜXÙJK‹KŠJNÜ™]\›ˆZ^
˜[YKKŒX\ÚÊNßBˆÙYš[™H[›[™B™›Ø]ÛÛ\]TÚYÝÐÝX™J™XÌÈÛÜ›ÜË™XÌÈYÚÜÚ][Û‹Ø[\\ÝX™HÚYÝÔØ[\\‹›Ø]\šÛ™\ÜË™XÌˆ\˜[Y\ÊBžÝ™XÌÈ\™XÝ[Û•ÓYÚ]ÛÜ›ÜË[YÚÜÚ][ÛŽÙ›Ø]\[[™Ý
\™XÝ[Û•ÓYÚ
NÙ\J\
Ù\˜[Y\Ëž
KÊ\˜[Y\ËžJNÙ\XÛ[\
\‹KŒ
NÙ\™XÝ[Û•ÓYÚ[›Ü›X[^™J\™XÝ[Û•ÓYÚ
NÙ\™XÝ[Û•ÓYÚžOKY\™XÝ[Û•ÓYÚžNÂˆÚY›™YˆÒQÕÑ“ÐU™›Ø]ÚYÝÏ][œXÚÊ^\™PÝX™JÚYÝÔØ[\\‹\™XÝ[Û•ÓYÚ
JNÂˆÙ[ÙB™›Ø]ÚYÝÏ]^\™PÝX™JÚYÝÔØ[\\‹\™XÝ[Û•ÓYÚ
KžÂˆÙ[™Y‚œ™]\›ˆ\œÚYÝÈÈ\šÛ™\ÜÈˆKŒßBˆÙYš[™H[›[™B™›Ø]ÛÛ\]TÚYÝÕÚ]Ú\ÜÛÛ”Ø[\[™ÐÝX™J™XÌÈÛÜ›ÜË™XÌÈYÚÜÚ][Û‹Ø[\\ÝX™HÚYÝÔØ[\\‹›Ø]X\Ú^™K›Ø]\šÛ™\ÜË™XÌˆ\˜[Y\ÊBžÝ™XÌÈ\™XÝ[Û•ÓYÚ]ÛÜ›ÜË[YÚÜÚ][ÛŽÙ›Ø]\[[™Ý
\™XÝ[Û•ÓYÚ
NÙ\J\
Ù\˜[Y\Ëž
KÊ\˜[Y\ËžJNÙ\XÛ[\
\‹KŒ
NÙ\™XÝ[Û•ÓYÚ[›Ü›X[^™J\™XÝ[Û•ÓYÚ
NÙ\™XÝ[Û•ÓYÚžOKY\™XÝ[Û•ÓYÚžNÙ›Ø]š\ÚXš[]OLKŽÝ™XÌÈÚ\ÜÛÛ‘\ÚÖÍNÜÚ\ÜÛÛ‘\ÚÖÌO]™XÌÊLKŒKŒLKŒ
NÜÚ\ÜÛÛ‘\ÚÖÌWO]™XÌÊKŒLKŒLKŒ
NÜÚ\ÜÛÛ‘\ÚÖÌ—O]™XÌÊLKŒLKŒLKŒ
NÜÚ\ÜÛÛ‘\ÚÖÌ×O]™XÌÊKŒLKŒKŒ
NÂˆÚY›™YˆÒQÕÑ“ÐUšYˆ
[œXÚÊ^\™PÝX™JÚYÝÔØ[\\‹\™XÝ[Û•ÓYÚ
ÜÚ\ÜÛÛ‘\ÚÖÌJ›X\Ú^™JJO\
Hš\ÚXš[]KOLŒNÚYˆ
[œXÚÊ^\™PÝX™JÚYÝÔØ[\\‹\™XÝ[Û•ÓYÚ
ÜÚ\ÜÛÛ‘\ÚÖÌWJ›X\Ú^™JJO\
Hš\ÚXš[]KOLŒNÚYˆ
[œXÚÊ^\™PÝX™JÚYÝÔØ[\\‹\™XÝ[Û•ÓYÚ
ÜÚ\ÜÛÛ‘\ÚÖÌ—J›X\Ú^™JJO\
Hš\ÚXš[]KOLŒNÚYˆ
[œXÚÊ^\™PÝX™JÚYÝÔØ[\\‹\™XÝ[Û•ÓYÚ
ÜÚ\ÜÛÛ‘\ÚÖÌ×J›X\Ú^™JJO\
Hš\ÚXš[]KOLŒNÂˆÙ[ÙBšYˆ
^\™PÝX™JÚYÝÔØ[\\‹\™XÝ[Û•ÓYÚ
ÜÚ\ÜÛÛ‘\ÚÖÌJ›X\Ú^™JKž\
Hš\ÚXš[]KOLŒNÚYˆ
^\™PÝX™JÚYÝÔØ[\\‹\™XÝ[Û•ÓYÚ
ÜÚ\ÜÛÛ‘\ÚÖÌWJ›X\Ú^™JKž\
Hš\ÚXš[]KOLŒNÚYˆ
^\™PÝX™JÚYÝÔØ[\\‹\™XÝ[Û•ÓYÚ
ÜÚ\ÜÛÛ‘\ÚÖÌ—J›X\Ú^™JKž\
Hš\ÚXš[]KOLŒNÚYˆ
^\™PÝX™JÚYÝÔØ[\\‹\™XÝ[Û•ÓYÚ
ÜÚ\ÜÛÛ‘\ÚÖÌ×J›X\Ú^™JKž\
Hš\ÚXš[]KOLŒNÂˆÙ[™Y‚œ™]\›ˆZ[ŠKŒš\ÚXš[]JÙ\šÛ™\ÜÊNßBˆÙYš[™H[›[™B™›Ø]ÛÛ\]TÚYÝÕÚ]TÓPÝX™J™XÌÈÛÜ›ÜË™XÌÈYÚÜÚ][Û‹Ø[\\ÝX™HÚYÝÔØ[\\‹›Ø]\šÛ™\ÜË›Ø]\ØØ[K™XÌˆ\˜[Y\ÊBžÝ™XÌÈ\™XÝ[Û•ÓYÚ]ÛÜ›ÜË[YÚÜÚ][ÛŽÙ›Ø]\[[™Ý
\™XÝ[Û•ÓYÚ
NÙ\J\
Ù\˜[Y\Ëž
KÊ\˜[Y\ËžJNÙ›Ø]ÚYÝÔ^[\XÛ[\
\‹KŒ
NÙ\™XÝ[Û•ÓYÚ[›Ü›X[^™J\™XÝ[Û•ÓYÚ
NÙ\™XÝ[Û•ÓYÚžOKY\™XÝ[Û•ÓYÚžNÂˆÚY›™YˆÒQÕÑ“ÐU™›Ø]ÚYÝÓX\Ø[\O][œXÚÊ^\™PÝX™JÚYÝÔØ[\\‹\™XÝ[Û•ÓYÚ
JNÂˆÙ[ÙB™›Ø]ÚYÝÓX\Ø[\O]^\™PÝX™JÚYÝÔØ[\\‹\™XÝ[Û•ÓYÚ
KžÂˆÙ[™Y‚™›Ø]\ÛOLKŒXÛ[\
^
Z[ŠË‹\ØØ[JœÚYÝÔ^[\
JJœÚYÝÓX\Ø[\K‹K‹Y\šÛ™\ÜÊNÜ™]\›ˆ\ÛNßBˆÙYš[™H[›[™B™›Ø]ÛÛ\]TÚYÝÕÚ]ÛÜÙQTÓPÝX™J™XÌÈÛÜ›ÜË™XÌÈYÚÜÚ][Û‹Ø[\\ÝX™HÚYÝÔØ[\\‹›Ø]\šÛ™\ÜË›Ø]\ØØ[K™XÌˆ\˜[Y\ÊBžÝ™XÌÈ\™XÝ[Û•ÓYÚ]ÛÜ›ÜË[YÚÜÚ][ÛŽÙ›Ø]\[[™Ý
\™XÝ[Û•ÓYÚ
NÙ\J\
Ù\˜[Y\Ëž
KÊ\˜[Y\ËžJNÙ›Ø]ÚYÝÔ^[\XÛ[\
\‹KŒ
NÙ\™XÝ[Û•ÓYÚ[›Ü›X[^™J\™XÝ[Û•ÓYÚ
NÙ\™XÝ[Û•ÓYÚžOKY\™XÝ[Û•ÓYÚžNÂˆÚY›™YˆÒQÕÑ“ÐU™›Ø]ÚYÝÓX\Ø[\O][œXÚÊ^\™PÝX™JÚYÝÔØ[\\‹\™XÝ[Û•ÓYÚ
JNÂˆÙ[ÙB™›Ø]ÚYÝÓX\Ø[\O]^\™PÝX™JÚYÝÔØ[\\‹\™XÝ[Û•ÓYÚ
KžÂˆÙ[™Y‚™›Ø]\ÛOXÛ[\
^
Z[ŠË‹Y\ØØ[JŠÚYÝÔ^[\\ÚYÝÓX\Ø[\JJJK\šÛ™\ÜËKŠNÜ™]\›ˆ\ÛNßBˆÚYˆYš[™Y
ÑP‘ÓŠHYš[™Y
ÑP‘ÔJHYš[™Y
UU‘JBˆÙYš[™H[›[™B™›Ø]ÛÛ\]TÚYÝÐÔÓJ›Ø]^Y\‹™XÍ”ÜÚ][Û‘œ›ÛSYÚ›Ø]\Y]šXËYÚØ[\\Œ‘\œ˜^HÚYÝÔØ[\\‹›Ø]\šÛ™\ÜË›Ø]œ\Ý[QYÙQ˜[Ù™ŠBžÝ™XÌÈÛ\ÜXÙO]”ÜÚ][Û‘œ›ÛSYÚž^‹Ý”ÜÚ][Û‘œ›ÛSYÚÎÝ™XÌˆ]LJ˜Û\ÜXÙKžJÝ™XÌŠJNÝ™XÌÈ]“^Y\]™XÌÊ]‹ž]‹žK^Y\ŠNÙ›Ø]ÚYÝÔ^[\XÛ[\
\Y]šXË‹KŒ
NÂˆÚY›™YˆÒQÕÑ“ÐU™›Ø]ÚYÝÏ][œXÚÊ^\™L‘
ÚYÝÔØ[\\‹]“^Y\ŠJNÂˆÙ[ÙB™›Ø]ÚYÝÏ]^\™L‘
ÚYÝÔØ[\\‹]“^Y\ŠKžÂˆÙ[™Y‚œ™]\›ˆÚYÝÔ^[\œÚYÝÈÈÛÛ\]Q˜[Ù™Š\šÛ™\ÜËÛ\ÜXÙKžKœ\Ý[QYÙQ˜[Ù™ŠHˆKŽßBˆÙ[™Y‚ˆÙYš[™H[›[™B™›Ø]ÛÛ\]TÚYÝÊ™XÍ”ÜÚ][Û‘œ›ÛSYÚ›Ø]\Y]šXËØ[\\Œ‘ÚYÝÔØ[\\‹›Ø]\šÛ™\ÜË›Ø]œ\Ý[QYÙQ˜[Ù™ŠBžÝ™XÌÈÛ\ÜXÙO]”ÜÚ][Û‘œ›ÛSYÚž^‹Ý”ÜÚ][Û‘œ›ÛSYÚÎÝ™XÌˆ]LJ˜Û\ÜXÙKžJÝ™XÌŠJNÚYˆ
]‹žˆ]‹žŒKŒ]‹žOˆ]‹žOŒKŒ
BžÜ™]\›ˆKŒßB™[ÙBžÙ›Ø]ÚYÝÔ^[\XÛ[\
\Y]šXË‹KŒ
NÂˆÚY›™YˆÒQÕÑ“ÐU™›Ø]ÚYÝÏ][œXÚÊVT‘Q•SÊÚYÝÔØ[\\‹]‹ŠJNÂˆÙ[ÙB™›Ø]ÚYÝÏUVT‘Q•SÊÚYÝÔØ[\\‹]‹ŠKžÂˆÙ[™Y‚œ™]\›ˆÚYÝÔ^[\œÚYÝÈÈÛÛ\]Q˜[Ù™Š\šÛ™\ÜËÛ\ÜXÙKžKœ\Ý[QYÙQ˜[Ù™ŠHˆKŽß_BˆÙYš[™H[›[™B™›Ø]ÛÛ\]TÚYÝÕÚ]Ú\ÜÛÛ”Ø[\[™Ê™XÍ”ÜÚ][Û‘œ›ÛSYÚ›Ø]\Y]šXËØ[\\Œ‘ÚYÝÔØ[\\‹›Ø]X\Ú^™K›Ø]\šÛ™\ÜË›Ø]œ\Ý[QYÙQ˜[Ù™ŠBžÝ™XÌÈÛ\ÜXÙO]”ÜÚ][Û‘œ›ÛSYÚž^‹Ý”ÜÚ][Û‘œ›ÛSYÚÎÝ™XÌˆ]LJ˜Û\ÜXÙKžJÝ™XÌŠJNÚYˆ
]‹žˆ]‹žŒKŒ]‹žOˆ]‹žOŒKŒ
BžÜ™]\›ˆKŒßB™[ÙBžÙ›Ø]ÚYÝÔ^[\XÛ[\
\Y]šXË‹KŒ
NÙ›Ø]š\ÚXš[]OLKŽÝ™XÌˆÚ\ÜÛÛ‘\ÚÖÍNÜÚ\ÜÛÛ‘\ÚÖÌO]™XÌŠLŽMŒMŒLŒÎNLŒŒMŠNÜÚ\ÜÛÛ‘\ÚÖÌWO]™XÌŠŽMMNŒKLÍŽLÌJNÜÚ\ÜÛÛ‘\ÚÖÌ—O]™XÌŠLŒMNLKLŽLŽLÎÌ
NÜÚ\ÜÛÛ‘\ÚÖÌ×O]™XÌŠŒÍMNLÎŒŽLÎÍÍŒ
NÂˆÚY›™YˆÒQÕÑ“ÐUšYˆ
[œXÚÊVT‘Q•SÊÚYÝÔØ[\\‹]ŠÜÚ\ÜÛÛ‘\ÚÖÌJ›X\Ú^™KŠJOÚYÝÔ^[\
Hš\ÚXš[]KOLŒNÚYˆ
[œXÚÊVT‘Q•SÊÚYÝÔØ[\\‹]ŠÜÚ\ÜÛÛ‘\ÚÖÌWJ›X\Ú^™KŠJOÚYÝÔ^[\
Hš\ÚXš[]KOLŒNÚYˆ
[œXÚÊVT‘Q•SÊÚYÝÔØ[\\‹]ŠÜÚ\ÜÛÛ‘\ÚÖÌ—J›X\Ú^™KŠJOÚYÝÔ^[\
Hš\ÚXš[]KOLŒNÚYˆ
[œXÚÊVT‘Q•SÊÚYÝÔØ[\\‹]ŠÜÚ\ÜÛÛ‘\ÚÖÌ×J›X\Ú^™KŠJOÚYÝÔ^[\
Hš\ÚXš[]KOLŒNÂˆÙ[ÙBšYˆ
VT‘Q•SÊÚYÝÔØ[\\‹]ŠÜÚ\ÜÛÛ‘\ÚÖÌJ›X\Ú^™KŠKžÚYÝÔ^[\
Hš\ÚXš[]KOLŒNÚYˆ
VT‘Q•SÊÚYÝÔØ[\\‹]ŠÜÚ\ÜÛÛ‘\ÚÖÌWJ›X\Ú^™KŠKžÚYÝÔ^[\
Hš\ÚXš[]KOLŒNÚYˆ
VT‘Q•SÊÚYÝÔØ[\\‹]ŠÜÚ\ÜÛÛ‘\ÚÖÌ—J›X\Ú^™KŠKžÚYÝÔ^[\
Hš\ÚXš[]KOLŒNÚYˆ
VT‘Q•SÊÚYÝÔØ[\\‹]ŠÜÚ\ÜÛÛ‘\ÚÖÌ×J›X\Ú^™KŠKžÚYÝÔ^[\
Hš\ÚXš[]KOLŒNÂˆÙ[™Y‚œ™]\›ˆÛÛ\]Q˜[Ù™ŠZ[ŠKŒš\ÚXš[]JÙ\šÛ™\ÜÊKÛ\ÜXÙKžKœ\Ý[QYÙQ˜[Ù™ŠNß_BˆÙYš[™H[›[™B™›Ø]ÛÛ\]TÚYÝÕÚ]TÓJ™XÍ”ÜÚ][Û‘œ›ÛSYÚ›Ø]\Y]šXËØ[\\Œ‘ÚYÝÔØ[\\‹›Ø]\šÛ™\ÜË›Ø]\ØØ[K›Ø]œ\Ý[QYÙQ˜[Ù™ŠBžÝ™XÌÈÛ\ÜXÙO]”ÜÚ][Û‘œ›ÛSYÚž^‹Ý”ÜÚ][Û‘œ›ÛSYÚÎÝ™XÌˆ]LJ˜Û\ÜXÙKžJÝ™XÌŠJNÚYˆ
]‹žˆ]‹žŒKŒ]‹žOˆ]‹žOŒKŒ
BžÜ™]\›ˆKŒßB™[ÙBžÙ›Ø]ÚYÝÔ^[\XÛ[\
\Y]šXË‹KŒ
NÂˆÚY›™YˆÒQÕÑ“ÐU™›Ø]ÚYÝÓX\Ø[\O][œXÚÊVT‘Q•SÊÚYÝÔØ[\\‹]‹ŠJNÂˆÙ[ÙB™›Ø]ÚYÝÓX\Ø[\OUVT‘Q•SÊÚYÝÔØ[\\‹]‹ŠKžÂˆÙ[™Y‚™›Ø]\ÛOLKŒXÛ[\
^
Z[ŠË‹\ØØ[JœÚYÝÔ^[\
JJœÚYÝÓX\Ø[\K‹K‹Y\šÛ™\ÜÊNÜ™]\›ˆÛÛ\]Q˜[Ù™Š\ÛKÛ\ÜXÙKžKœ\Ý[QYÙQ˜[Ù™ŠNß_BˆÙYš[™H[›[™B™›Ø]ÛÛ\]TÚYÝÕÚ]ÛÜÙQTÓJ™XÍ”ÜÚ][Û‘œ›ÛSYÚ›Ø]\Y]šXËØ[\\Œ‘ÚYÝÔØ[\\‹›Ø]\šÛ™\ÜË›Ø]\ØØ[K›Ø]œ\Ý[QYÙQ˜[Ù™ŠBžÝ™XÌÈÛ\ÜXÙO]”ÜÚ][Û‘œ›ÛSYÚž^‹Ý”ÜÚ][Û‘œ›ÛSYÚÎÝ™XÌˆ]LJ˜Û\ÜXÙKžJÝ™XÌŠJNÚYˆ
]‹žˆ]‹žŒKŒ]‹žOˆ]‹žOŒKŒ
BžÜ™]\›ˆKŒßB™[ÙBžÙ›Ø]ÚYÝÔ^[\XÛ[\
\Y]šXË‹KŒ
NÈˆÚY›™YˆÒQÕÑ“ÐU™›Ø]ÚYÝÓX\Ø[\O][œXÚÊVT‘Q•SÊÚYÝÔØ[\\‹]‹ŠJNÂˆÙ[ÙB™›Ø]ÚYÝÓX\Ø[\OUVT‘Q•SÊÚYÝÔØ[\\‹]‹ŠKžÂˆÙ[™Y‚™›Ø]\ÛOXÛ[\
^
Z[ŠË‹Y\ØØ[JŠÚYÝÔ^[\\ÚYÝÓX\Ø[\JJJK\šÛ™\ÜËKŠNÜ™]\›ˆÛÛ\]Q˜[Ù™Š\ÛKÛ\ÜXÙKžKœ\Ý[QYÙQ˜[Ù™ŠNß_BˆÚY™YˆT×Ó‘×ÒS—Ö”S‘ÑBˆÙYš[™H’SÓTÛ\ÜXÙKž‚ˆÙ[ÙBˆÙYš[™H’SÓT]‘\ž‚ˆÙ[™Y‚ˆÚYˆYš[™Y
ÑP‘ÓŠHYš[™Y
ÑP‘ÔJHYš[™Y
UU‘JBˆÙYš[™HÓPSTÕÐP“Õ‘WÖ‘T“ÈKŒMÍMMÍLKLÎˆÙYš[™HÔ‘PUTÕÓTÔ×ÕS—ÓÓ‘HŽNNNNNNMˆÙYš[™HTÐP“WÕS’Q“Ô“RUWÐSSTÒTÂˆÙYš[™H[›[™B™›Ø]ÛÛ\]TÚYÝÕÚ]ÔÓTÑŒJ›Ø]^Y\‹™XÍ”ÜÚ][Û‘œ›ÛSYÚ›Ø]\Y]šXËYÚØ[\\Œ‘\œ˜^TÚYÝÈÚYÝÔØ[\\‹›Ø]\šÛ™\ÜË›Ø]œ\Ý[QYÙQ˜[Ù™ŠBžÝ™XÌÈÛ\ÜXÙO]”ÜÚ][Û‘œ›ÛSYÚž^‹Ý”ÜÚ][Û‘œ›ÛSYÚÎÝ™XÌÈ]‘\]™XÌÊJ˜Û\ÜXÙKž^ŠÝ™XÌÊJJNÂˆÚY™YˆTÑWÔ‘U‘T”ÑWÑT•Q‘‘T‚]‘\žXÛ[\
’SÓTÓPSTÕÐP“Õ‘WÖ‘T“ËKŠNÂˆÙ[ÙB]‘\žXÛ[\
’SÓT‹Ô‘PUTÕÓTÔ×ÕS—ÓÓ‘JNÂˆÙ[™Y‚™XÍ]‘\^Y\]™XÍ
]‘\ž]‘\žK^Y\‹]‘\žŠNÙ›Ø]ÚYÝÏ]^\™L‘
ÚYÝÔØ[\\‹]‘\^Y\ŠNÜÚYÝÏ[Z^
\šÛ™\ÜËK‹ÚYÝÊNÜ™]\›ˆÛÛ\]Q˜[Ù™ŠÚYÝËÛ\ÜXÙKžKœ\Ý[QYÙQ˜[Ù™ŠNßBˆÙYš[™H[›[™B™›Ø]ÛÛ\]TÚYÝÕÚ]ÔÓTÑŒÊ›Ø]^Y\‹™XÍ”ÜÚ][Û‘œ›ÛSYÚ›Ø]\Y]šXËYÚØ[\\Œ‘\œ˜^TÚYÝÈÚYÝÔØ[\\‹™XÌˆÚYÝÓX\Ú^™P[™[™\œÙK›Ø]\šÛ™\ÜË›Ø]œ\Ý[QYÙQ˜[Ù™ŠBžÝ™XÌÈÛ\ÜXÙO]”ÜÚ][Û‘œ›ÛSYÚž^‹Ý”ÜÚ][Û‘œ›ÛSYÚÎÝ™XÌÈ]‘\]™XÌÊJ˜Û\ÜXÙKž^ŠÝ™XÌÊJJNÂˆÚY™YˆTÑWÔ‘U‘T”ÑWÑT•Q‘‘T‚]‘\žXÛ[\
’SÓTÓPSTÕÐP“Õ‘WÖ‘T“ËKŠNÂˆÙ[ÙB]‘\žXÛ[\
’SÓT‹Ô‘PUTÕÓTÔ×ÕS—ÓÓ‘JNÂˆÙ[™Y‚™XÌˆ]]]‘\žJœÚYÝÓX\Ú^™P[™[™\œÙKžÈ]ŠÏLNÈ™XÌˆÝYœ˜XÝ
]ŠNÈ™XÌˆ˜\ÙWÝ]Y›ÛÜŠ]ŠKLNÈ˜˜\ÙWÝ]Š\ÚYÝÓX\Ú^™P[™[™\œÙKžNÈ™XÌˆ]ÌLË‹L‹ŠœÝÝ™XÌˆ]ÌOLKŠÌ‹ŠœÝÝ™XÌˆO]™XÌŠ
‹‹\Ýž
KÝ]ÌžLK‹ÝžÝ]ÌKž
ÌKŠJœÚYÝÓX\Ú^™P[™[™\œÙKžNÝ™XÌˆ]™XÌŠ
‹‹\ÝžJKÝ]ÌžKLK‹ÝžKÝ]ÌKžJÌKŠJœÚYÝÓX\Ú^™P[™[™\œÙKžNÙ›Ø]ÚYÝÏLŽÜÚYÝÊÏ]]Ìž
]ÌžJ^\™L‘
ÚYÝÔØ[\\‹™XÍ
˜\ÙWÝ]‹žJÝ™XÌŠVÌK–ÌJK^Y\‹]‘\žŠJNÜÚYÝÊÏ]]ÌKž
]ÌžJ^\™L‘
ÚYÝÔØ[\\‹™XÍ
˜\ÙWÝ]‹žJÝ™XÌŠVÌWK–ÌJK^Y\‹]‘\žŠJNÜÚYÝÊÏ]]Ìž
]ÌKžJ^\™L‘
ÚYÝÔØ[\\‹™XÍ
˜\ÙWÝ]‹žJÝ™XÌŠVÌK–ÌWJK^Y\‹]‘\žŠJNÜÚYÝÊÏ]]ÌKž
]ÌKžJ^\™L‘
ÚYÝÔØ[\\‹™XÍ
˜\ÙWÝ]‹žJÝ™XÌŠVÌWK–ÌWJK^Y\‹]‘\žŠJNÜÚYÝÏ\ÚYÝËÌM‹ŽÜÚYÝÏ[Z^
\šÛ™\ÜËK‹ÚYÝÊNÜ™]\›ˆÛÛ\]Q˜[Ù™ŠÚYÝËÛ\ÜXÙKžKœ\Ý[QYÙQ˜[Ù™ŠNßBˆÙYš[™H[›[™B™›Ø]ÛÛ\]TÚYÝÕÚ]ÔÓTÑJ›Ø]^Y\‹™XÍ”ÜÚ][Û‘œ›ÛSYÚ›Ø]\Y]šXËYÚØ[\\Œ‘\œ˜^TÚYÝÈÚYÝÔØ[\\‹™XÌˆÚYÝÓX\Ú^™P[™[™\œÙK›Ø]\šÛ™\ÜË›Ø]œ\Ý[QYÙQ˜[Ù™ŠBžÝ™XÌÈÛ\ÜXÙO]”ÜÚ][Û‘œ›ÛSYÚž^‹Ý”ÜÚ][Û‘œ›ÛSYÚÎÝ™XÌÈ]‘\]™XÌÊJ˜Û\ÜXÙKž^ŠÝ™XÌÊJJNÂˆÚY™YˆTÑWÔ‘U‘T”ÑWÑT•Q‘‘T‚]‘\žXÛ[\
’SÓTÓPSTÕÐP“Õ‘WÖ‘T“ËKŠNÂˆÙ[ÙB]‘\žXÛ[\
’SÓT‹Ô‘PUTÕÓTÔ×ÕS—ÓÓ‘JNÂˆÙ[™Y‚™XÌˆ]]]‘\žJœÚYÝÓX\Ú^™P[™[™\œÙKžÈ]ŠÏLNÈ™XÌˆÝYœ˜XÝ
]ŠNÈ™XÌˆ˜\ÙWÝ]Y›ÛÜŠ]ŠKLNÈ˜˜\ÙWÝ]Š\ÚYÝÓX\Ú^™P[™[™\œÙKžNÈ™XÌˆ]ÌM‹LËŠœÝÝ™XÌˆ]ÌO]™XÌŠËŠNÝ™XÌˆ]ÌLKŠÌËŠœÝÝ™XÌÈO]™XÌÊ
Ë‹L‹ŠœÝž
KÝ]ÌžL‹‹
ËŠÜÝž
KÝ]ÌKžÝžÝ]Ì‹ž
Ì‹ŠJœÚYÝÓX\Ú^™P[™[™\œÙKžNÝ™XÌÈ]™XÌÊ
Ë‹L‹ŠœÝžJKÝ]ÌžKL‹‹
ËŠÜÝžJKÝ]ÌKžKÝžKÝ]Ì‹žJÌ‹ŠJœÚYÝÓX\Ú^™P[™[™\œÙKžNÙ›Ø]ÚYÝÏLŽÜÚYÝÊÏ]]Ìž
]ÌžJ^\™L‘
ÚYÝÔØ[\\‹™XÍ
˜\ÙWÝ]‹žJÝ™XÌŠVÌK–ÌJK^Y\‹]‘\žŠJNÜÚYÝÊÏ]]ÌKž
]ÌžJ^\™L‘
ÚYÝÔØ[\\‹™XÍ
˜\ÙWÝ]‹žJÝ™XÌŠVÌWK–ÌJK^Y\‹]‘\žŠJNÜÚYÝÊÏ]]Ì‹ž
]ÌžJ^\™L‘
ÚYÝÔØ[\\‹™XÍ
˜\ÙWÝ]‹žJÝ™XÌŠVÌ—K–ÌJK^Y\‹]‘\žŠJNÜÚYÝÊÏ]]Ìž
]ÌKžJ^\™L‘
ÚYÝÔØ[\\‹™XÍ
˜\ÙWÝ]‹žJÝ™XÌŠVÌK–ÌWJK^Y\‹]‘\žŠJNÜÚYÝÊÏ]]ÌKž
]ÌKžJ^\™L‘
ÚYÝÔØ[\\‹™XÍ
˜\ÙWÝ]‹žJÝ™XÌŠVÌWK–ÌWJK^Y\‹]‘\žŠJNÜÚYÝÊÏ]]Ì‹ž
]ÌKžJ^\™L‘
ÚYÝÔØ[\\‹™XÍ
˜\ÙWÝ]‹žJÝ™XÌŠVÌ—K–ÌWJK^Y\‹]‘\žŠJNÜÚYÝÊÏ]]Ìž
]Ì‹žJ^\™L‘
ÚYÝÔØ[\\‹™XÍ
˜\ÙWÝ]‹žJÝ™XÌŠVÌK–Ì—JK^Y\‹]‘\žŠJNÜÚYÝÊÏ]]ÌKž
]Ì‹žJ^\™L‘
ÚYÝÔØ[\\‹™XÍ
˜\ÙWÝ]‹žJÝ™XÌŠVÌWK–Ì—JK^Y\‹]‘\žŠJNÜÚYÝÊÏ]]Ì‹ž
]Ì‹žJ^\™L‘
ÚYÝÔØ[\\‹™XÍ
˜\ÙWÝ]‹žJÝ™XÌŠVÌ—K–Ì—JK^Y\‹]‘\žŠJNÜÚYÝÏ\ÚYÝËÌMŽÜÚYÝÏ[Z^
\šÛ™\ÜËK‹ÚYÝÊNÜ™]\›ˆÛÛ\]Q˜[Ù™ŠÚYÝËÛ\ÜXÙKžKœ\Ý[QYÙQ˜[Ù™ŠNßBˆÙYš[™H[›[™B™›Ø]ÛÛ\]TÚYÝÕÚ]ÑŒJ™XÍ”ÜÚ][Û‘œ›ÛSYÚ›Ø]\Y]šXËYÚØ[\\Œ‘ÚYÝÈÚYÝÔØ[\\‹›Ø]\šÛ™\ÜË›Ø]œ\Ý[QYÙQ˜[Ù™ŠBžÝ™XÌÈÛ\ÜXÙO]”ÜÚ][Û‘œ›ÛSYÚž^‹Ý”ÜÚ][Û‘œ›ÛSYÚÎÝ™XÌÈ]‘\]™XÌÊJ˜Û\ÜXÙKž^ŠÝ™XÌÊJJNÝ]‘\žV’SÓTÚYˆ
\Y]šXÏŒ\Y]šXÏŒKŒ]‘\žˆ]‘\žŒKŒ]‘\žOˆ]‘\žOŒKŒ
HÜ™]\›ˆKŒßH[ÙHÙ›Ø]ÚYÝÏUVT‘Q•SÊÚYÝÔØ[\\‹]‘\ŠNÜÚYÝÏ[Z^
\šÛ™\ÜËK‹ÚYÝÊNÜ™]\›ˆÛÛ\]Q˜[Ù™ŠÚYÝËÛ\ÜXÙKžKœ\Ý[QYÙQ˜[Ù™ŠNß_BˆÙYš[™H[›[™B™›Ø]ÛÛ\]TÚYÝÕÚ]ÑŒÊ™XÍ”ÜÚ][Û‘œ›ÛSYÚ›Ø]\Y]šXËYÚØ[\\Œ‘ÚYÝÈÚYÝÔØ[\\‹™XÌˆÚYÝÓX\Ú^™P[™[™\œÙK›Ø]\šÛ™\ÜË›Ø]œ\Ý[QYÙQ˜[Ù™ŠBžÝ™XÌÈÛ\ÜXÙO]”ÜÚ][Û‘œ›ÛSYÚž^‹Ý”ÜÚ][Û‘œ›ÛSYÚÎÝ™XÌÈ]‘\]™XÌÊJ˜Û\ÜXÙKž^ŠÝ™XÌÊJJNÝ]‘\žV’SÓTÚYˆ
\Y]šXÏŒ\Y]šXÏŒKŒ]‘\žˆ]‘\žŒKŒ]‘\žOˆ]‘\žOŒKŒ
HÜ™]\›ˆKŒßH[ÙHÝ™XÌˆ]]]‘\žJœÚYÝÓX\Ú^™P[™[™\œÙKžÈ]ŠÏLNÈ™XÌˆÝYœ˜XÝ
]ŠNÈ™XÌˆ˜\ÙWÝ]Y›ÛÜŠ]ŠKLNÈ˜˜\ÙWÝ]Š\ÚYÝÓX\Ú^™P[™[™\œÙKžNÈ™XÌˆ]ÌLË‹L‹ŠœÝÝ™XÌˆ]ÌOLKŠÌ‹ŠœÝÝ™XÌˆO]™XÌŠ
‹‹\Ýž
KÝ]ÌžLK‹ÝžÝ]ÌKž
ÌKŠJœÚYÝÓX\Ú^™P[™[™\œÙKžNÝ™XÌˆ]™XÌŠ
‹‹\ÝžJKÝ]ÌžKLK‹ÝžKÝ]ÌKžJÌKŠJœÚYÝÓX\Ú^™P[™[™\œÙKžNÙ›Ø]ÚYÝÏLŽÜÚYÝÊÏ]]Ìž
]ÌžJ•VT‘Q•SÊÚYÝÔØ[\\‹™XÌÊ˜\ÙWÝ]‹žJÝ™XÌŠVÌK–ÌJK]‘\žŠKŠNÜÚYÝÊÏ]]ÌKž
]ÌžJ•VT‘Q•SÊÚYÝÔØ[\\‹™XÌÊ˜\ÙWÝ]‹žJÝ™XÌŠVÌWK–ÌJK]‘\žŠKŠNÜÚYÝÊÏ]]Ìž
]ÌKžJ•VT‘Q•SÊÚYÝÔØ[\\‹™XÌÊ˜\ÙWÝ]‹žJÝ™XÌŠVÌK–ÌWJK]‘\žŠKŠNÜÚYÝÊÏ]]ÌKž
]ÌKžJ•VT‘Q•SÊÚYÝÔØ[\\‹™XÌÊ˜\ÙWÝ]‹žJÝ™XÌŠVÌWK–ÌWJK]‘\žŠKŠNÜÚYÝÏ\ÚYÝËÌM‹ŽÜÚYÝÏ[Z^
\šÛ™\ÜËK‹ÚYÝÊNÜ™]\›ˆÛÛ\]Q˜[Ù™ŠÚYÝËÛ\ÜXÙKžKœ\Ý[QYÙQ˜[Ù™ŠNß_BˆÙYš[™H[›[™B™›Ø]ÛÛ\]TÚYÝÕÚ]ÑJ™XÍ”ÜÚ][Û‘œ›ÛSYÚ›Ø]\Y]šXËYÚØ[\\Œ‘ÚYÝÈÚYÝÔØ[\\‹™XÌˆÚYÝÓX\Ú^™P[™[™\œÙK›Ø]\šÛ™\ÜË›Ø]œ\Ý[QYÙQ˜[Ù™ŠBžÝ™XÌÈÛ\ÜXÙO]”ÜÚ][Û‘œ›ÛSYÚž^‹Ý”ÜÚ][Û‘œ›ÛSYÚÎÝ™XÌÈ]‘\]™XÌÊJ˜Û\ÜXÙKž^ŠÝ™XÌÊJJNÝ]‘\žV’SÓTÚYˆ
\Y]šXÏŒ\Y]šXÏŒKŒ]‘\žˆ]‘\žŒKŒ]‘\žOˆ]‘\žOŒKŒ
HÜ™]\›ˆKŒßH[ÙHÝ™XÌˆ]]]‘\žJœÚYÝÓX\Ú^™P[™[™\œÙKžÈ]ŠÏLNÈ™XÌˆÝYœ˜XÝ
]ŠNÈ™XÌˆ˜\ÙWÝ]Y›ÛÜŠ]ŠKLNÈ˜˜\ÙWÝ]Š\ÚYÝÓX\Ú^™P[™[™\œÙKžNÈ™XÌˆ]ÌM‹LËŠœÝÝ™XÌˆ]ÌO]™XÌŠËŠNÝ™XÌˆ]ÌLKŠÌËŠœÝÝ™XÌÈO]™XÌÊ
Ë‹L‹ŠœÝž
KÝ]ÌžL‹‹
ËŠÜÝž
KÝ]ÌKžÝžÝ]Ì‹ž
Ì‹ŠJœÚYÝÓX\Ú^™P[™[™\œÙKžNÝ™XÌÈ]™XÌÊ
Ë‹L‹ŠœÝžJKÝ]ÌžKL‹‹
ËŠÜÝžJKÝ]ÌKžKÝžKÝ]Ì‹žJÌ‹ŠJœÚYÝÓX\Ú^™P[™[™\œÙKžNÙ›Ø]ÚYÝÏLŽÜÚYÝÊÏ]]Ìž
]ÌžJ•VT‘Q•SÊÚYÝÔØ[\\‹™XÌÊ˜\ÙWÝ]‹žJÝ™XÌŠVÌK–ÌJK]‘\žŠKŠNÜÚYÝÊÏ]]ÌKž
]ÌžJ•VT‘Q•SÊÚYÝÔØ[\\‹™XÌÊ˜\ÙWÝ]‹žJÝ™XÌŠVÌWK–ÌJK]‘\žŠKŠNÜÚYÝÊÏ]]Ì‹ž
]ÌžJ•VT‘Q•SÊÚYÝÔØ[\\‹™XÌÊ˜\ÙWÝ]‹žJÝ™XÌŠVÌ—K–ÌJK]‘\žŠKŠNÜÚYÝÊÏ]]Ìž
]ÌKžJ•VT‘Q•SÊÚYÝÔØ[\\‹™XÌÊ˜\ÙWÝ]‹žJÝ™XÌŠVÌK–ÌWJK]‘\žŠKŠNÜÚYÝÊÏ]]ÌKž
]ÌKžJ•VT‘Q•SÊÚYÝÔØ[\\‹™XÌÊ˜\ÙWÝ]‹žJÝ™XÌŠVÌWK–ÌWJK]‘\žŠKŠNÜÚYÝÊÏ]]Ì‹ž
]ÌKžJ•VT‘Q•SÊÚYÝÔØ[\\‹™XÌÊ˜\ÙWÝ]‹žJÝ™XÌŠVÌ—K–ÌWJK]‘\žŠKŠNÜÚYÝÊÏ]]Ìž
]Ì‹žJ•VT‘Q•SÊÚYÝÔØ[\\‹™XÌÊ˜\ÙWÝ]‹žJÝ™XÌŠVÌK–Ì—JK]‘\žŠKŠNÜÚYÝÊÏ]]ÌKž
]Ì‹žJ•VT‘Q•SÊÚYÝÔØ[\\‹™XÌÊ˜\ÙWÝ]‹žJÝ™XÌŠVÌWK–Ì—JK]‘\žŠKŠNÜÚYÝÊÏ]]Ì‹ž
]Ì‹žJ•VT‘Q•SÊÚYÝÔØ[\\‹™XÌÊ˜\ÙWÝ]‹žJÝ™XÌŠVÌ—K–Ì—JK]‘\žŠKŠNÜÚYÝÏ\ÚYÝËÌMŽÜÚYÝÏ[Z^
\šÛ™\ÜËK‹ÚYÝÊNÜ™]\›ˆÛÛ\]Q˜[Ù™ŠÚYÝËÛ\ÜXÙKžKœ\Ý[QYÙQ˜[Ù™ŠNß_B˜ÛÛœÝ™XÌÈÚ\ÜÛÛ”Ø[\\œÌÌ–ÍO]™XÌÖÍJ™XÌÊŒÌLËŒMNLËŠK™XÌÊÌÍMÍËMÎLÎMŠK™XÌÊLŒÌM‹LLÌŒÎŠK™XÌÊLMŒLËŽLLMKŠK™XÌÊŽMMLNLNŠK™XÌÊLŽÍNKLŒMÎMÌÍKŠK™XÌÊŽNNNNNŒN‹ŠK™XÌÊLŒLŒMÎLŽLMLMKŠK™XÌÊŒNMÍŒËŽMÍÍËŠK™XÌÊLŒŒLÎLKŒŒÍNNŠK™XÌÊŒLNKŒÎÎKŠK™XÌÊŒŽÍÍMKLŒÍNLÍŠK™XÌÊŒÍÍÌËLÍŒL‹ŠK™XÌÊŒÌÎLLÌ‹LŒLŒMÍŒËŠK™XÌÊLŒÍÎMÌÍKLŽÌMNËŠK™XÌÊLŒŒÎÎLŒÍÌMLÍŠK™XÌÊNLLŽMËŒMŽMÎNKŠK™XÌÊLŽŽKŒÌÌMÎŠK™XÌÊLLŽŽÍÌŒ‹ŠK™XÌÊLNLMMÍËŠK™XÌÊŒMÍÎNKLŒMÌMŠK™XÌÊLMMMNKŒMMNNNMËŠK™XÌÊLŒÌMŒÍŽKLŒÎLLŽŠK™XÌÊLMMLŒÌ‹LŒMÌŒÍÍŒ‹ŠK™XÌÊŽLLŽKŒŽNMLKŠK™XÌÊLŒÌÌLÍËMLÎLKŠK™XÌÊŽLNÌÍËLŒŽŒŒÎL‹ŠK™XÌÊŒŽMŒKÌNÌL‹ŠK™XÌÊŒÎLMŒÎMËLÌŽŒKŠK™XÌÊLŒÍMÍŽLËLŒŒŒÌ‹ŠK™XÌÊLŒŒLMKÎNMLŒKŠK™XÌÊŽLŒÍÌL‹ŠK™XÌÊŠK™XÌÊŠK™XÌÊŠK™XÌÊŠK™XÌÊŠK™XÌÊŠK™XÌÊŠK™XÌÊŠK™XÌÊŠK™XÌÊŠK™XÌÊŠK™XÌÊŠK™XÌÊŠK™XÌÊŠK™XÌÊŠK™XÌÊŠK™XÌÊŠK™XÌÊŠK™XÌÊŠK™XÌÊŠK™XÌÊŠK™XÌÊŠK™XÌÊŠK™XÌÊŠK™XÌÊŠK™XÌÊŠK™XÌÊŠK™XÌÊŠK™XÌÊŠK™XÌÊŠK™XÌÊŠK™XÌÊŠBŠNØÛÛœÝ™XÌÈÚ\ÜÛÛ”Ø[\\œÍÍO]™XÌÖÍJ™XÌÊLŒLÌÎL‹ŒMÍKŠK™XÌÊŒMÌNKLŒMŠK™XÌÊLŒŽNMMËÎLNLKŠK™XÌÊMŽLÌŒLŠK™XÌÊLLMÎÌMÎËŠK™XÌÊŒLËŒÌÌŠK™XÌÊLŽMÌNMLŒÌLM‹ŠK™XÌÊLÌLÍÍLŽŒËŠK™XÌÊŽMÍÌLLŒLŒMKŠK™XÌÊŒŒÌÌ‹ŒMŒÍŽKŠK™XÌÊŒŒÍLŽŒŒMÌÌKŠK™XÌÊLÍLÌKŒÌŒLŠK™XÌÊLŒNŒ‹LŒŽMMÍMKŠK™XÌÊLŽNLŒ‹ŒŒMLÍŽKŠK™XÌÊMŒÍËŒLŒLËŠK™XÌÊŒÎMÍ‹LŒÎMŒLŠK™XÌÊÍLNM‹LÌÍL‹ŠK™XÌÊŒÎÌËLÌMLÌŒËŠK™XÌÊLŒÍNÎLLŽLÍŠK™XÌÊÌÎKLNÎNŠK™XÌÊŒŒŒŽNNKLŒŒMLLKŠK™XÌÊLÍMÍLMÎŠK™XÌÊLŒŽLŽMÍLËŠK™XÌÊŒÍMLKLŽÍMÌŠK™XÌÊŒMÍNMËŒÎŒÍ‹ŠK™XÌÊÍÌ‹LŒŒÌ‹ŠK™XÌÊLŒÎŽNÌL‹ŠK™XÌÊÍ‹LÎÍKŠK™XÌÊÌM‹ŒŒMÎLÌËŠK™XÌÊLŽMŽLLMMÎLKŠK™XÌÊLŒMMŽLËŒMÍŒ‹ŠK™XÌÊŒÍŒLKŽMÎNNŠK™XÌÊLÌNLŒÌÎŠK™XÌÊLŒMŒŒKLŽÌŽLŒKŠK™XÌÊŒÎMÎLŒÎLÎL‹ŠK™XÌÊLŒMŽ‹LŽNLKŠK™XÌÊÌÍŒKŒMNŠK™XÌÊŒÍÎLŒMÌKŠK™XÌÊLŽMŒÎËŠK™XÌÊÍLŒNNŠK™XÌÊLŒLÍÍ‹ŠK™XÌÊŒÍËLLMÌŠK™XÌÊŒÍŽŒÌNMŽŠK™XÌÊŒNLMLŒÌŒËŠK™XÌÊŽLÎMŒLŒÍŒLËŠK™XÌÊÎLŒŒŽŠK™XÌÊŒNKÎÌŽŠK™XÌÊŒMLMÍËLŽNNŠK™XÌÊŒŒMKLŒLN‹ŠK™XÌÊŒÌMLŒ‹LŒŽMËŠK™XÌÊLÎMKŒLKŠK™XÌÊLŒÍÌNŽŽŒLÎŠK™XÌÊŒŒÍ‹MÌŠK™XÌÊLMML‹LÌLLLKŠK™XÌÊŒLÍ‹ÌLL‹ŠK™XÌÊLMÎKLÍŽÎL‹ŠK™XÌÊLÍÌMLŒLMÍ‹ŠK™XÌÊLŒÍÌŒŽMKŠK™XÌÊŒMMMÌÍ‹ŒLMMËŠK™XÌÊŒÎLMLŒ‹ŽMŒKŠK™XÌÊLŒŒL‹LŒÌŽLŠK™XÌÊÎLŒÎKLNNMKŠK™XÌÊLMLÎM‹LÎLÌËŠK™XÌÊLŒMÎMLNMŒMËŠBŠNÂˆÙYš[™H[›[™B™›Ø]ÛÛ\]TÚYÝÕÚ]ÔÓTÔÔÊ›Ø]^Y\‹™XÍ”ÜÚ][Û‘œ›ÛSYÚ›Ø]\Y]šXËYÚØ[\\Œ‘\œ˜^H\Ø[\\‹YÚØ[\\Œ‘\œ˜^TÚYÝÈÚYÝÔØ[\\‹›Ø]ÚYÝÓX\Ú^™R[™\œÙK›Ø]YÚÚ^™UU‹›Ø]\šÛ™\ÜË›Ø]œ\Ý[QYÙQ˜[Ù™‹[ÙX\˜Ú\ÛÝ[[Ù•\ÛÝ[™XÌÖÍHÚ\ÜÛÛ”Ø[\\œË™XÌˆYÚÚ^™UUÛÜœ™XÝ[Û‹›Ø]\ÛÜœ™XÝ[Û‹›Ø][[Xœ˜Q\šÛ™\ÜÊBžÝ™XÌÈÛ\ÜXÙO]”ÜÚ][Û‘œ›ÛSYÚž^‹Ý”ÜÚ][Û‘œ›ÛSYÚÎÝ™XÌÈ]‘\]™XÌÊJ˜Û\ÜXÙKž^ŠÝ™XÌÊJJNÂˆÚY™YˆTÑWÔ‘U‘T”ÑWÑT•Q‘‘T‚]‘\žXÛ[\
’SÓTÓPSTÕÐP“Õ‘WÖ‘T“ËKŠNÂˆÙ[ÙB]‘\žXÛ[\
’SÓT‹Ô‘PUTÕÓTÔ×ÕS—ÓÓ‘JNÂˆÙ[™Y‚™XÍ]‘\^Y\]™XÍ
]‘\ž]‘\žK^Y\‹]‘\žŠNÙ›Ø]›ØÚÙ\‘\LŒÙ›Ø]Ý[P›ØÚÙ\‘\LŒÙ›Ø][P›ØÚÙ\LŒÙ›Üˆ
[OLÈOÙX\˜Ú\ÛÝ[ÈH
ÊÊHØ›ØÚÙ\‘\]^\™L‘
\Ø[\\‹™XÌÊ]‘\žJÊYÚÚ^™UUŠ›YÚÚ^™UUÛÜœ™XÝ[ÛŠœÚYÝÓX\Ú^™R[™\œÙJ”Ú\ÜÛÛ”Ø[\\œÌÌ–ÚWKžJK^Y\ŠJKœŽÚYˆ
›ØÚÙ\‘\\Y]šXÊHÜÝ[P›ØÚÙ\‘\
ÏX›ØÚÙ\‘\Û[P›ØÚÙ\ŠÊÎß_B™›Ø]]™Ð›ØÚÙ\‘\\Ý[P›ØÚÙ\‘\Û[P›ØÚÙ\ŽÙ›Ø]PSÙ™œÙ]\ÚYÝÓX\Ú^™R[™\œÙJŒLŽÙ›Ø][[Xœ˜T˜][ÏJ
\Y]šXËX]™Ð›ØÚÙ\‘\
J™\ÛÜœ™XÝ[ÛŠÐPSÙ™œÙ]
NÝ™XÍš[\”˜Y]\Ï]™XÍ
[[Xœ˜T˜][Ê›YÚÚ^™UUŠ›YÚÚ^™UUÛÜœ™XÝ[ÛŠœÚYÝÓX\Ú^™R[™\œÙK‹ŠNÙ›Ø]˜[™ÛOYÙ]˜[™
”ÜÚ][Û‘œ›ÛSYÚžJNÙ›Ø]›Ý][Û[™ÛO\˜[™ÛJŒËŒMMNLŽÝ™XÌˆ›Ý][Û•™XÝÜ]™XÌŠÛÜÊ›Ý][Û[™ÛJKÚ[Š›Ý][Û[™ÛJJNÙ›Ø]ÚYÝÏLŽÙ›Üˆ
[OLÈOÙ•\ÛÝ[ÈJÊÊHÝ™XÍÙ™œÙ]]™XÍ
Ú\ÜÛÛ”Ø[\\œÖÚWKŠNÛÙ™œÙ]]™XÍ
Ù™œÙ]ž
œ›Ý][Û•™XÝÜ‹ž[Ù™œÙ]žJœ›Ý][Û•™XÝÜ‹žKÙ™œÙ]žJœ›Ý][Û•™XÝÜ‹ž
ÛÙ™œÙ]ž
œ›Ý][Û•™XÝÜ‹žK‹ŠNÜÚYÝÊÏ]^\™L‘
ÚYÝÔØ[\\‹]‘\^Y\ŠÛÙ™œÙ]
™š[\”˜Y]\ÊNßBœÚYÝËÏY›Ø]
Ù•\ÛÝ[
NÜÚYÝÏ[Z^
ÚYÝËK‹Z[Š
\Y]šXËX]™Ð›ØÚÙ\‘\
J™\ÛÜœ™XÝ[ÛŠœ[[Xœ˜Q\šÛ™\ÜËKŠJNÜÚYÝÏ[Z^
\šÛ™\ÜËK‹ÚYÝÊNÚYˆ
[P›ØÚÙ\KŒ
HÜ™]\›ˆKŒßB™[ÙBžÜ™]\›ˆÛÛ\]Q˜[Ù™ŠÚYÝËÛ\ÜXÙKžKœ\Ý[QYÙQ˜[Ù™ŠNß_BˆÙYš[™H[›[™B™›Ø]ÛÛ\]TÚYÝÕÚ]ÔÔÊ™XÍ”ÜÚ][Û‘œ›ÛSYÚ›Ø]\Y]šXËØ[\\Œ‘\Ø[\\‹YÚØ[\\Œ‘ÚYÝÈÚYÝÔØ[\\‹›Ø]ÚYÝÓX\Ú^™R[™\œÙK›Ø]YÚÚ^™UU‹›Ø]\šÛ™\ÜË›Ø]œ\Ý[QYÙQ˜[Ù™‹[ÙX\˜Ú\ÛÝ[[Ù•\ÛÝ[™XÌÖÍHÚ\ÜÛÛ”Ø[\\œÊBžÝ™XÌÈÛ\ÜXÙO]”ÜÚ][Û‘œ›ÛSYÚž^‹Ý”ÜÚ][Û‘œ›ÛSYÚÎÝ™XÌÈ]‘\]™XÌÊJ˜Û\ÜXÙKž^ŠÝ™XÌÊJJNÝ]‘\žV’SÓTÚYˆ
\Y]šXÏŒ\Y]šXÏŒKŒ]‘\žˆ]‘\žŒKŒ]‘\žOˆ]‘\žOŒKŒ
HÜ™]\›ˆKŒßH[ÙHÙ›Ø]›ØÚÙ\‘\LŒÙ›Ø]Ý[P›ØÚÙ\‘\LŒÙ›Ø][P›ØÚÙ\LŒÙ›Üˆ
[OLÈOÙX\˜Ú\ÛÝ[ÈH
ÊÊHØ›ØÚÙ\‘\UVT‘Q•SÊ\Ø[\\‹]‘\žJÊYÚÚ^™UUŠœÚYÝÓX\Ú^™R[™\œÙJ”Ú\ÜÛÛ”Ø[\\œÌÌ–ÚWKžJKŠKœŽÚYˆ
›ØÚÙ\‘\\Y]šXÊHÜÝ[P›ØÚÙ\‘\
ÏX›ØÚÙ\‘\Û[P›ØÚÙ\ŠÊÎß_BšYˆ
[P›ØÚÙ\KŒ
HÜ™]\›ˆKŒßB™[ÙBžÙ›Ø]]™Ð›ØÚÙ\‘\\Ý[P›ØÚÙ\‘\Û[P›ØÚÙ\ŽÙ›Ø]PSÙ™œÙ]\ÚYÝÓX\Ú^™R[™\œÙJŒLŽÙ›Ø][[Xœ˜T˜][ÏJ
\Y]šXËX]™Ð›ØÚÙ\‘\
JÐPSÙ™œÙ]
NÙ›Ø]š[\”˜Y]\Ï\[[Xœ˜T˜][Ê›YÚÚ^™UUŠœÚYÝÓX\Ú^™R[™\œÙNÙ›Ø]˜[™ÛOYÙ]˜[™
”ÜÚ][Û‘œ›ÛSYÚžJNÙ›Ø]›Ý][Û[™ÛO\˜[™ÛJŒËŒMMNLŽÝ™XÌˆ›Ý][Û•™XÝÜ]™XÌŠÛÜÊ›Ý][Û[™ÛJKÚ[Š›Ý][Û[™ÛJJNÙ›Ø]ÚYÝÏLŽÙ›Üˆ
[OLÈOÙ•\ÛÝ[ÈJÊÊHÝ™XÌÈÙ™œÙ]\Ú\ÜÛÛ”Ø[\\œÖÚWNÛÙ™œÙ]]™XÌÊÙ™œÙ]ž
œ›Ý][Û•™XÝÜ‹ž[Ù™œÙ]žJœ›Ý][Û•™XÝÜ‹žKÙ™œÙ]žJœ›Ý][Û•™XÝÜ‹ž
ÛÙ™œÙ]ž
œ›Ý][Û•™XÝÜ‹žKŠNÜÚYÝÊÏUVT‘Q•SÊÚYÝÔØ[\\‹]‘\
ÛÙ™œÙ]
™š[\”˜Y]\ËŠNßBœÚYÝËÏY›Ø]
Ù•\ÛÝ[
NÜÚYÝÏ[Z^
ÚYÝËK‹\Y]šXËX]™Ð›ØÚÙ\‘\
NÜÚYÝÏ[Z^
\šÛ™\ÜËK‹ÚYÝÊNÜ™]\›ˆÛÛ\]Q˜[Ù™ŠÚYÝËÛ\ÜXÙKžKœ\Ý[QYÙQ˜[Ù™ŠNß__BˆÙYš[™H[›[™B™›Ø]ÛÛ\]TÚYÝÕÚ]ÔÔÌMŠ™XÍ”ÜÚ][Û‘œ›ÛSYÚ›Ø]\Y]šXËØ[\\Œ‘\Ø[\\‹YÚØ[\\Œ‘ÚYÝÈÚYÝÔØ[\\‹›Ø]ÚYÝÓX\Ú^™R[™\œÙK›Ø]YÚÚ^™UU‹›Ø]\šÛ™\ÜË›Ø]œ\Ý[QYÙQ˜[Ù™ŠBžÜ™]\›ˆÛÛ\]TÚYÝÕÚ]ÔÔÊ”ÜÚ][Û‘œ›ÛSYÚ\Y]šXË\Ø[\\‹ÚYÝÔØ[\\‹ÚYÝÓX\Ú^™R[™\œÙKYÚÚ^™UU‹\šÛ™\ÜËœ\Ý[QYÙQ˜[Ù™‹M‹M‹Ú\ÜÛÛ”Ø[\\œÌÌŠNßBˆÙYš[™H[›[™B™›Ø]ÛÛ\]TÚYÝÕÚ]ÔÔÌÌŠ™XÍ”ÜÚ][Û‘œ›ÛSYÚ›Ø]\Y]šXËØ[\\Œ‘\Ø[\\‹YÚØ[\\Œ‘ÚYÝÈÚYÝÔØ[\\‹›Ø]ÚYÝÓX\Ú^™R[™\œÙK›Ø]YÚÚ^™UU‹›Ø]\šÛ™\ÜË›Ø]œ\Ý[QYÙQ˜[Ù™ŠBžÜ™]\›ˆÛÛ\]TÚYÝÕÚ]ÔÔÊ”ÜÚ][Û‘œ›ÛSYÚ\Y]šXË\Ø[\\‹ÚYÝÔØ[\\‹ÚYÝÓX\Ú^™R[™\œÙKYÚÚ^™UU‹\šÛ™\ÜËœ\Ý[QYÙQ˜[Ù™‹M‹Ì‹Ú\ÜÛÛ”Ø[\\œÌÌŠNßBˆÙYš[™H[›[™B™›Ø]ÛÛ\]TÚYÝÕÚ]ÔÔÍ
™XÍ”ÜÚ][Û‘œ›ÛSYÚ›Ø]\Y]šXËØ[\\Œ‘\Ø[\\‹YÚØ[\\Œ‘ÚYÝÈÚYÝÔØ[\\‹›Ø]ÚYÝÓX\Ú^™R[™\œÙK›Ø]YÚÚ^™UU‹›Ø]\šÛ™\ÜË›Ø]œ\Ý[QYÙQ˜[Ù™ŠBžÜ™]\›ˆÛÛ\]TÚYÝÕÚ]ÔÔÊ”ÜÚ][Û‘œ›ÛSYÚ\Y]šXË\Ø[\\‹ÚYÝÔØ[\\‹ÚYÝÓX\Ú^™R[™\œÙKYÚÚ^™UU‹\šÛ™\ÜËœ\Ý[QYÙQ˜[Ù™‹Ì‹Ú\ÜÛÛ”Ø[\\œÍ
NßBˆÙYš[™H[›[™B™›Ø]ÛÛ\]TÚYÝÕÚ]ÔÓTÔÔÌMŠ›Ø]^Y\‹™XÍ”ÜÚ][Û‘œ›ÛSYÚ›Ø]\Y]šXËYÚØ[\\Œ‘\œ˜^H\Ø[\\‹YÚØ[\\Œ‘\œ˜^TÚYÝÈÚYÝÔØ[\\‹›Ø]ÚYÝÓX\Ú^™R[™\œÙK›Ø]YÚÚ^™UU‹›Ø]\šÛ™\ÜË›Ø]œ\Ý[QYÙQ˜[Ù™‹™XÌˆYÚÚ^™UUÛÜœ™XÝ[Û‹›Ø]\ÛÜœ™XÝ[Û‹›Ø][[Xœ˜Q\šÛ™\ÜÊBžÜ™]\›ˆÛÛ\]TÚYÝÕÚ]ÔÓTÔÔÊ^Y\‹”ÜÚ][Û‘œ›ÛSYÚ\Y]šXË\Ø[\\‹ÚYÝÔØ[\\‹ÚYÝÓX\Ú^™R[™\œÙKYÚÚ^™UU‹\šÛ™\ÜËœ\Ý[QYÙQ˜[Ù™‹M‹M‹Ú\ÜÛÛ”Ø[\\œÌÌ‹YÚÚ^™UUÛÜœ™XÝ[Û‹\ÛÜœ™XÝ[Û‹[[Xœ˜Q\šÛ™\ÜÊNßBˆÙYš[™H[›[™B™›Ø]ÛÛ\]TÚYÝÕÚ]ÔÓTÔÔÌÌŠ›Ø]^Y\‹™XÍ”ÜÚ][Û‘œ›ÛSYÚ›Ø]\Y]šXËYÚØ[\\Œ‘\œ˜^H\Ø[\\‹YÚØ[\\Œ‘\œ˜^TÚYÝÈÚYÝÔØ[\\‹›Ø]ÚYÝÓX\Ú^™R[™\œÙK›Ø]YÚÚ^™UU‹›Ø]\šÛ™\ÜË›Ø]œ\Ý[QYÙQ˜[Ù™‹™XÌˆYÚÚ^™UUÛÜœ™XÝ[Û‹›Ø]\ÛÜœ™XÝ[Û‹›Ø][[Xœ˜Q\šÛ™\ÜÊBžÜ™]\›ˆÛÛ\]TÚYÝÕÚ]ÔÓTÔÔÊ^Y\‹”ÜÚ][Û‘œ›ÛSYÚ\Y]šXË\Ø[\\‹ÚYÝÔØ[\\‹ÚYÝÓX\Ú^™R[™\œÙKYÚÚ^™UU‹\šÛ™\ÜËœ\Ý[QYÙQ˜[Ù™‹M‹Ì‹Ú\ÜÛÛ”Ø[\\œÌÌ‹YÚÚ^™UUÛÜœ™XÝ[Û‹\ÛÜœ™XÝ[Û‹[[Xœ˜Q\šÛ™\ÜÊNßBˆÙYš[™H[›[™B™›Ø]ÛÛ\]TÚYÝÕÚ]ÔÓTÔÔÍ
›Ø]^Y\‹™XÍ”ÜÚ][Û‘œ›ÛSYÚ›Ø]\Y]šXËYÚØ[\\Œ‘\œ˜^H\Ø[\\‹YÚØ[\\Œ‘\œ˜^TÚYÝÈÚYÝÔØ[\\‹›Ø]ÚYÝÓX\Ú^™R[™\œÙK›Ø]YÚÚ^™UU‹›Ø]\šÛ™\ÜË›Ø]œ\Ý[QYÙQ˜[Ù™‹™XÌˆYÚÚ^™UUÛÜœ™XÝ[Û‹›Ø]\ÛÜœ™XÝ[Û‹›Ø][[Xœ˜Q\šÛ™\ÜÊBžÜ™]\›ˆÛÛ\]TÚYÝÕÚ]ÔÓTÔÔÊ^Y\‹”ÜÚ][Û‘œ›ÛSYÚ\Y]šXË\Ø[\\‹ÚYÝÔØ[\\‹ÚYÝÓX\Ú^™R[™\œÙKYÚÚ^™UU‹\šÛ™\ÜËœ\Ý[QYÙQ˜[Ù™‹Ì‹Ú\ÜÛÛ”Ø[\\œÍYÚÚ^™UUÛÜœ™XÝ[Û‹\ÛÜœ™XÝ[Û‹[[Xœ˜Q\šÛ™\ÜÊNßBˆÙ[™Y‚ˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VÖ\_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÖ\OYJNØÛÛœÝO^Û˜[YN–\ÚY\Ž™_K\HœØ[\\‘œ˜YÛY[XÛ\˜][Ûˆ‹ÓOXÚY™YˆÑQ’S‘SSQWÂˆÚYˆÑQ’S‘SSQWÑT‘PÕUOLBˆÙYš[™H—ÕT–RS‘ÓSQWÕUˆ“XZ[•UŒBˆÙ[YˆÑQ’S‘SSQWÑT‘PÕUOL‚ˆÙYš[™H—ÕT–RS‘ÓSQWÕUˆ“XZ[•UŒ‚ˆÙ[YˆÑQ’S‘SSQWÑT‘PÕUOLÂˆÙYš[™H—ÕT–RS‘ÓSQWÕUˆ“XZ[•UŒÂˆÙ[YˆÑQ’S‘SSQWÑT‘PÕUOMˆÙYš[™H—ÕT–RS‘ÓSQWÕUˆ“XZ[•UˆÙ[YˆÑQ’S‘SSQWÑT‘PÕUOMBˆÙYš[™H—ÕT–RS‘ÓSQWÕUˆ“XZ[•UBˆÙ[YˆÑQ’S‘SSQWÑT‘PÕUOM‚ˆÙYš[™H—ÕT–RS‘ÓSQWÕUˆ“XZ[•U‚ˆÙ[ÙB˜\žZ[™È™XÌˆ—ÕT–RS‘ÓSQWÕUŽÂˆÙ[™Y‚[šY›Ü›HØ[\\Œ‘ÔÐSTT“SQWÔØ[\\ŽÂˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VÜ\_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÜ\OWÓJNØÛÛœÝUO^Û˜[YNœ\ÚY\Ž—Ó_KœH™œ™\Û™[[˜Ý[Ûˆ‹SOXÚY™Yˆ”‘TÓ‘S™›Ø]ÛÛ\]Qœ™\Û™[\›J™XÌÈšY]Ñ\™XÝ[Û‹™XÌÈÛÜ››Ü›X[›Ø]šX\Ë›Ø]ÝÙ\ŠBžÙ›Ø]œ™\Û™[\›O\ÝÊšX\ÊØXœÊÝ
šY]Ñ\™XÝ[Û‹ÛÜ››Ü›X[
JKÝÙ\ŠNÜ™]\›ˆÛ[\
œ™\Û™[\›K‹KŠNßBˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VÚœ_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÚœO[SJNØÛÛœÝÕO^Û˜[YNšœÚY\Ž›S_KÜHœ™Y›XÝ[Û‘[˜Ý[Ûˆ‹OX™XÌÈÛÛ\]Qš^Y\]Z\™XÝ[™Ý[\ÛÛÜ™Ê™XÍÛÜ›ÜË™XÌÈÛÜ››Ü›X[™XÌÈ\™XÝ[ÛŠBžÙ›Ø]ÛX][Š\™XÝ[Û‹ž‹\™XÝ[Û‹ž
NÙ›Ø]]XXÛÜÊ\™XÝ[Û‹žJNÝ™XÌˆÜ\™PÛÛÜ™Ï]™XÌŠÛ‹]
J”‘PÒT“ÐÐSÔLŠŒ‹ŒÙ›Ø]Ï\Ü\™PÛÛÜ™Ëž
ŒJÌNÙ›Ø]\Ü\™PÛÛÜ™ËžNÜ™]\›ˆ™XÌÊË
NÈB™XÌÈÛÛ\]SZ\œ›Ü™Yš^Y\]Z\™XÝ[™Ý[\ÛÛÜ™Ê™XÍÛÜ›ÜË™XÌÈÛÜ››Ü›X[™XÌÈ\™XÝ[ÛŠBžÙ›Ø]ÛX][Š\™XÝ[Û‹ž‹\™XÝ[Û‹ž
NÙ›Ø]]XXÛÜÊ\™XÝ[Û‹žJNÝ™XÌˆÜ\™PÛÛÜ™Ï]™XÌŠÛ‹]
J”‘PÒT“ÐÐSÔLŠŒ‹ŒÙ›Ø]Ï\Ü\™PÛÛÜ™Ëž
ŒJÌNÙ›Ø]\Ü\™PÛÛÜ™ËžNÜ™]\›ˆ™XÌÊKŒ\Ë
NÈB™XÌÈÛÛ\]Q\]Z\™XÝ[™Ý[\ÛÛÜ™Ê™XÍÛÜ›ÜË™XÌÈÛÜ››Ü›X[™XÌÈ^YTÜÚ][Û‹X]™Y›XÝ[Û“X]š^
BžÝ™XÌÈØ[Y\˜UÕ™\^[›Ü›X[^™JÛÜ›ÜËž^‹Y^YTÜÚ][ÛŠNÝ™XÌÈ[›Ü›X[^™J™Y›XÝ
Ø[Y\˜UÕ™\^ÛÜ››Ü›X[
JNÜ]™XÌÊ™Y›XÝ[Û“X]š^
™XÍ
‹
JNÙ›Ø]ÛX][Š‹ž‹‹ž
NÙ›Ø]]XXÛÜÊ‹žJNÝ™XÌˆÜ\™PÛÛÜ™Ï]™XÌŠÛ‹]
J”‘PÒT“ÐÐSÔLŠŒ‹ŒÙ›Ø]Ï\Ü\™PÛÛÜ™Ëž
ŒJÌNÙ›Ø]\Ü\™PÛÛÜ™ËžNÜ™]\›ˆ™XÌÊË
NßB™XÌÈÛÛ\]TÜ\šXØ[ÛÛÜ™Ê™XÍÛÜ›ÜË™XÌÈÛÜ››Ü›X[X]šY]ËX]™Y›XÝ[Û“X]š^
BžÝ™XÌÈšY]Ñ\[›Ü›X[^™J™XÌÊšY]ÊÛÜ›ÜÊJNÝ™XÌÈšY]Ó›Ü›X[[›Ü›X[^™J™XÌÊšY]Ê™XÍ
ÛÜ››Ü›X[Œ
JJNÝ™XÌÈ\™Y›XÝ
šY]Ñ\‹šY]Ó›Ü›X[
NÜ]™XÌÊ™Y›XÝ[Û“X]š^
™XÍ
‹
JNÜ‹ž\‹ž‹LKŒÙ›Ø]OL‹Œ
›[™Ý
ŠNÜ™]\›ˆ™XÌÊ‹žÛJÌKKŒ\‹žKÛKLK
NßB™XÌÈÛÛ\]T[˜\ÛÛÜ™Ê™XÍÛÜ›ÜË™XÌÈÛÜ››Ü›X[™XÌÈ^YTÜÚ][Û‹X]™Y›XÝ[Û“X]š^
BžÝ™XÌÈšY]Ñ\]ÛÜ›ÜËž^‹Y^YTÜÚ][ÛŽÝ™XÌÈÛÛÜ™Ï[›Ü›X[^™J™Y›XÝ
šY]Ñ\‹ÛÜ››Ü›X[
JNÜ™]\›ˆ™XÌÊ™Y›XÝ[Û“X]š^
™XÍ
ÛÛÜ™ËJJNßB™XÌÈÛÛ\]PÝXšXÐÛÛÜ™Ê™XÍÛÜ›ÜË™XÌÈÛÜ››Ü›X[™XÌÈ^YTÜÚ][Û‹X]™Y›XÝ[Û“X]š^
BžÝ™XÌÈšY]Ñ\[›Ü›X[^™JÛÜ›ÜËž^‹Y^YTÜÚ][ÛŠNÝ™XÌÈÛÛÜ™Ï\™Y›XÝ
šY]Ñ\‹ÛÜ››Ü›X[
NØÛÛÜ™Ï]™XÌÊ™Y›XÝ[Û“X]š^
™XÍ
ÛÛÜ™Ë
JNÂˆÚY™YˆS•‘T•ÕP’PÓPT˜ÛÛÜ™ËžJKLKŒÂˆÙ[™Y‚œ™]\›ˆÛÛÜ™ÎßB™XÌÈÛÛ\]PÝXšXÓØØ[ÛÛÜ™Ê™XÍÛÜ›ÜË™XÌÈÛÜ››Ü›X[™XÌÈ^YTÜÚ][Û‹X]™Y›XÝ[Û“X]š^™XÌÈ™Y›XÝ[Û”Ú^™K™XÌÈ™Y›XÝ[Û”ÜÚ][ÛŠBžÝ™XÌÈšY]Ñ\[›Ü›X[^™JÛÜ›ÜËž^‹Y^YTÜÚ][ÛŠNÝ™XÌÈÛÛÜ™Ï\™Y›XÝ
šY]Ñ\‹ÛÜ››Ü›X[
NØÛÛÜ™Ï\\˜[^ÛÜœ™XÝ›Ü›X[
ÛÜ›ÜËž^‹ÛÛÜ™Ë™Y›XÝ[Û”Ú^™K™Y›XÝ[Û”ÜÚ][ÛŠNØÛÛÜ™Ï]™XÌÊ™Y›XÝ[Û“X]š^
™XÍ
ÛÛÜ™Ë
JNÂˆÚY™YˆS•‘T•ÕP’PÓPT˜ÛÛÜ™ËžJKLKŒÂˆÙ[™Y‚œ™]\›ˆÛÛÜ™ÎßB™XÌÈÛÛ\]T›Ú™XÝ[ÛÛÛÜ™Ê™XÍÛÜ›ÜËX]šY]ËX]™Y›XÝ[Û“X]š^
BžÜ™]\›ˆ™XÌÊ™Y›XÝ[Û“X]š^
ŠšY]ÊÛÜ›ÜÊJNßB™XÌÈÛÛ\]TÚÞP›ÞÛÛÜ™Ê™XÌÈÜÚ][Û•ËX]™Y›XÝ[Û“X]š^
BžÜ™]\›ˆ™XÌÊ™Y›XÝ[Û“X]š^
™XÍ
ÜÚ][Û•ËKŠJNßBˆÚY™Yˆ‘Q“PÕSÓ‚™XÌÈÛÛ\]T™Y›XÝ[ÛÛÛÜ™Ê™XÍÛÜ›ÜË™XÌÈÛÜ››Ü›X[
BžÂˆÚY™Yˆ‘Q“PÕSÓ“PTÓRT”“Ô‘QTURT‘PÕS‘ÕST—Ñ’VQ™XÌÈ\™XÝ[Û[›Ü›X[^™J‘\™XÝ[Û•ÊNÜ™]\›ˆÛÛ\]SZ\œ›Ü™Yš^Y\]Z\™XÝ[™Ý[\ÛÛÜ™ÊÛÜ›ÜËÛÜ››Ü›X[\™XÝ[ÛŠNÂˆÙ[™Y‚ˆÚY™Yˆ‘Q“PÕSÓ“PTÑTURT‘PÕS‘ÕST—Ñ’VQ™XÌÈ\™XÝ[Û[›Ü›X[^™J‘\™XÝ[Û•ÊNÜ™]\›ˆÛÛ\]Qš^Y\]Z\™XÝ[™Ý[\ÛÛÜ™ÊÛÜ›ÜËÛÜ››Ü›X[\™XÝ[ÛŠNÂˆÙ[™Y‚ˆÚY™Yˆ‘Q“PÕSÓ“PTÑTURT‘PÕS‘ÕST‚œ™]\›ˆÛÛ\]Q\]Z\™XÝ[™Ý[\ÛÛÜ™ÊÛÜ›ÜËÛÜ››Ü›X[‘^YTÜÚ][Û‹ž^‹™Y›XÝ[Û“X]š^
NÂˆÙ[™Y‚ˆÚY™Yˆ‘Q“PÕSÓ“PTÔÔT’PÐSœ™]\›ˆÛÛ\]TÜ\šXØ[ÛÛÜ™ÊÛÜ›ÜËÛÜ››Ü›X[šY]Ë™Y›XÝ[Û“X]š^
NÂˆÙ[™Y‚ˆÚY™Yˆ‘Q“PÕSÓ“PTÔST‚œ™]\›ˆÛÛ\]T[˜\ÛÛÜ™ÊÛÜ›ÜËÛÜ››Ü›X[‘^YTÜÚ][Û‹ž^‹™Y›XÝ[Û“X]š^
NÂˆÙ[™Y‚ˆÚY™Yˆ‘Q“PÕSÓ“PTÐÕP’PÂˆÚY™YˆTÑWÓÐÐSÔ‘Q“PÕSÓ“PTÐÕP’PÂœ™]\›ˆÛÛ\]PÝXšXÓØØ[ÛÛÜ™ÊÛÜ›ÜËÛÜ››Ü›X[‘^YTÜÚ][Û‹ž^‹™Y›XÝ[Û“X]š^”™Y›XÝ[Û”Ú^™K”™Y›XÝ[Û”ÜÚ][ÛŠNÂˆÙ[ÙBœ™]\›ˆÛÛ\]PÝXšXÐÛÛÜ™ÊÛÜ›ÜËÛÜ››Ü›X[‘^YTÜÚ][Û‹ž^‹™Y›XÝ[Û“X]š^
NÂˆÙ[™Y‚ˆÙ[™Y‚ˆÚY™Yˆ‘Q“PÕSÓ“PTÔ“Ò‘PÕSÓ‚œ™]\›ˆÛÛ\]T›Ú™XÝ[ÛÛÛÜ™ÊÛÜ›ÜËšY]Ë™Y›XÝ[Û“X]š^
NÂˆÙ[™Y‚ˆÚY™Yˆ‘Q“PÕSÓ“PTÔÒÖP“Öœ™]\›ˆÛÛ\]TÚÞP›ÞÛÛÜ™Ê”ÜÚ][Û•U•Ë™Y›XÝ[Û“X]š^
NÂˆÙ[™Y‚ˆÚY™Yˆ‘Q“PÕSÓ“PTÑVPÒUœ™]\›ˆ™XÌÊ
NÂˆÙ[™Y‚ŸBˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VÒÜ_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÒÜO\JNØÛÛœÝ•O^Û˜[YN’ÜÚY\Žœ_KœHš[XYÙT›ØÙ\ÜÚ[™ÑXÛ\˜][Ûˆ‹ÓOXÚY™YˆVÔÕT‘B[šY›Ü›H›Ø]^ÜÝ\™S[™X\ŽÂˆÙ[™Y‚ˆÚY™YˆÓÓ•TÕ[šY›Ü›H›Ø]ÛÛ˜\ÝÂˆÙ[™Y‚ˆÚY™YˆÒUPSSÑB[šY›Ü›HX]ÈÚ]P˜[[˜ÙSX]š^ÂˆÙ[™Y‚ˆÚYˆYš[™Y
’QÓ‘UJHYš[™Y
UTŠB[šY›Ü›H™XÌˆ’[™\œÙTØÜ™Y[”Ú^™NÂˆÙ[™Y‚ˆÚY™Yˆ’QÓ‘UB[šY›Ü›H™XÍšYÛ™]TÙ][™ÜÌNÝ[šY›Ü›H™XÍšYÛ™]TÙ][™ÜÌŽÂˆÙ[™Y‚ˆÚY™YˆÓÓÔÕT•‘TÂ[šY›Ü›H™XÍØ[Y\˜PÛÛÜÝ\™S™YØ]]™NÝ[šY›Ü›H™XÍØ[Y\˜PÛÛÜÝ\™S™]]˜[Ý[šY›Ü›H™XÍØ[Y\˜PÛÛÜÝ\™TÜÚ]]™NÂˆÙ[™Y‚ˆÚY™YˆÓÓÔ‘ÔQS‘ÂˆÚY™YˆÓÓÔ‘ÔQS‘ÌÑ[šY›Ü›HYÚØ[\\ŒÑÛÛÜ•˜[œÙ›Ü›NÂˆÙ[ÙB[šY›Ü›HØ[\\Œ‘ÛÛÜ•˜[œÙ›Ü›NÂˆÙ[™Y‚[šY›Ü›H™XÍÛÛÜ•˜[œÙ›Ü›TÙ][™ÜÎÂˆÙ[™Y‚ˆÚY™YˆUT‚[šY›Ü›H›Ø]]\’[[œÚ]NÂˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VÖœ_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÖœOYÓJNØÛÛœÝ•O^Û˜[YN–œÚY\Ž™Ó_K\Hš[XYÙT›ØÙ\ÜÚ[™Ñ[˜Ý[ÛœÈ‹“OXÚYˆYš[™Y
ÓÓÔ‘ÔQS‘ÊH	‰ˆYYš[™Y
ÓÓÔ‘ÔQS‘ÌÑ
B‹ÊŠˆŠˆÛYš[›ÜˆÐSTWÕVT‘WÌÑÚXÚ\È[œÝ\ÜY[ˆÙX‘Ó‚ŠˆØ[\\ŒÙÙ][™Ëž]^\™SÙ™œÙ]
KÝ^\™TÚ^™JK‚ŠˆØ[\\ŒÙÙ][™ËžO]^\™TÚ^™K‚Š‹ÂˆÙYš[™H[›[™B™XÌÈØ[\U^\™LÑ
Ø[\\Œ‘ÛÛÜ•˜[œÙ›Ü›K™XÌÈÛÛÜ‹™XÌˆØ[\\ŒÙÙ][™ÊBžÙ›Ø]ÛXÙTÚ^™OL‹Œ
œØ[\\ŒÙÙ][™ËžÈˆÚY™YˆÐSTTŒÑÔ‘QS‘T™›Ø]ÛXÙPÛÛ[[Ý\ÏJÛÛÜ‹™Ë\Ø[\\ŒÙÙ][™Ëž
JœØ[\\ŒÙÙ][™ËžNÂˆÙ[ÙB™›Ø]ÛXÙPÛÛ[[Ý\ÏJÛÛÜ‹˜‹\Ø[\\ŒÙÙ][™Ëž
JœØ[\\ŒÙÙ][™ËžNÂˆÙ[™Y‚™›Ø]ÛXÙR[YÙ\Y›ÛÜŠÛXÙPÛÛ[[Ý\ÊNÙ›Ø]ÛXÙQœ˜XÝ[Û\ÛXÙPÛÛ[[Ý\Ë\ÛXÙR[YÙ\ŽÂˆÚY™YˆÐSTTŒÑÔ‘QS‘T™XÌˆÛXÙUUXÛÛÜ‹œ˜ŽÂˆÙ[ÙB™XÌˆÛXÙUUXÛÛÜ‹œ™ÎÂˆÙ[™Y‚œÛXÙUU‹ž
\ÛXÙTÚ^™NÜÛXÙUU‹ž
Ï\ÛXÙR[YÙ\ŠœÛXÙTÚ^™NÜÛXÙUU\Ø]\˜]JÛXÙUUŠNÝ™XÍÛXÙLÛÛÜ]^\™L‘
ÛÛÜ•˜[œÙ›Ü›KÛXÙUUŠNÜÛXÙUU‹ž
Ï\ÛXÙTÚ^™NÜÛXÙUU\Ø]\˜]JÛXÙUUŠNÝ™XÍÛXÙLPÛÛÜ]^\™L‘
ÛÛÜ•˜[œÙ›Ü›KÛXÙUUŠNÝ™XÌÈ™\Ý[[Z^
ÛXÙLÛÛÜ‹œ™Ø‹ÛXÙLPÛÛÜ‹œ™Ø‹ÛXÙQœ˜XÝ[ÛŠNÂˆÚY™YˆÐSTTŒÑ‘Ô“PT˜ÛÛÜ‹œ™Ø\™\Ý[œ™ØŽÂˆÙ[ÙB˜ÛÛÜ‹œ™Ø\™\Ý[˜™ÜŽÂˆÙ[™Y‚œ™]\›ˆÛÛÜŽßBˆÙ[™Y‚ˆÚYˆÓ‘SPTS‘ÏOLÂ˜ÛÛœÝ›Ø]”“™]]˜[Ý\ÛÛ\™\ÜÚ[ÛLŽLŒØÛÛœÝ›Ø]”“™]]˜[\Ø]\˜][ÛLŒMNÝ™XÌÈ”“™]]˜[Û™SX\[™Ê™XÌÈÛÛÜˆ
HÙ›Ø][Z[ŠÛÛÜ‹œ‹Z[ŠÛÛÜ‹™ËÛÛÜ‹˜ŠJNÙ›Ø]Ù™œÙ]^ŒÈM‹ŒJž
žˆŒØÛÛÜ‹O[Ù™œÙ]Ù›Ø]XZÏ[X^
ÛÛÜ‹œ‹X^
ÛÛÜ‹™ËÛÛÜ‹˜ŠJNÚYˆ
XZÏ”“™]]˜[Ý\ÛÛ\™\ÜÚ[ÛŠH™]\›ˆÛÛÜŽÙ›Ø]LK‹T”“™]]˜[Ý\ÛÛ\™\ÜÚ[ÛŽÙ›Ø]™]ÔXZÏLK‹Y
™ÊXZÊÙT”“™]]˜[Ý\ÛÛ\™\ÜÚ[ÛŠNØÛÛÜŠ[™]ÔXZËÜXZÎÙ›Ø]ÏLK‹LK‹Ê”“™]]˜[\Ø]\˜][ÛŠŠXZË[™]ÔXZÊJÌKŠNÜ™]\›ˆZ^
ÛÛÜ‹™]ÔXZÊ™XÌÊKKJKÊNßBˆÙ[™Y‚ˆÚYˆÓ‘SPTS‘ÏOL‚˜ÛÛœÝX]ÈPÑTÒ[œ]X][X]Ê™XÌÊNMÌNKŒÍŒŒŽ
K™XÌÊŒÍMNŽLÍŒLÌÎÊK™XÌÊŒŒËŒMM‹ŽÍÍÍÊBŠNØÛÛœÝX]ÈPÑTÓÝ]]X][X]Ê™XÌÊKŒÍKLŒLŒLŒÌÊK™XÌÊLLÌLKŒLLËLŒÌÍŠK™XÌÊLŒÌÍËLŒŒKKŒÍŒŠBŠNÝ™XÌÈ”•[™Ñš]
™XÌÈŠBžÝ™XÌÈO]ŠŠŠÌŒMÎŠKLŒLLÍÎÝ™XÌÈ]ŠŠŽNÍÌŽJŠÌÌŽMLL
JÌŒŒÎNÜ™]\›ˆKØŽßB™XÌÈPÑTÑš]Y
™XÌÈÛÛÜŠBžØÛÛÜPPÑTÒ[œ]X]
˜ÛÛÜŽØÛÛÜT”•[™Ñš]
ÛÛÜŠNØÛÛÜPPÑTÓÝ]]X]
˜ÛÛÜŽØÛÛÜ\Ø]\˜]JÛÛÜŠNÜ™]\›ˆÛÛÜŽßBˆÙ[™Y‚ˆÙYš[™HÕTÕÓWÒSPQÑT“ÐÑTÔÒS‘Ñ•SÕSÓ”×ÑQ’S’USÓ”Â™XÍ\R[XYÙT›ØÙ\ÜÚ[™Ê™XÍ™\Ý[
HÂˆÙYš[™HÕTÕÓWÒSPQÑT“ÐÑTÔÒS‘Ñ•SÕSÓ”×ÕTUT‘TÕSÐUÕT•ˆÚY™YˆÒUPSSÑBœ™\Ý[œ™Ø]Ú]P˜[[˜ÙSX]š^
œ™\Ý[œ™ØŽÜ™\Ý[œ™Ø[X^
™\Ý[œ™Ø‹Œ
NÂˆÙ[™Y‚ˆÚY™YˆVÔÕT‘Bœ™\Ý[œ™ØŠY^ÜÝ\™S[™X\ŽÂˆÙ[™Y‚ˆÚY™Yˆ’QÓ‘UB™XÌˆšY]ÜÜOYÛÑœ˜YÐÛÛÜ™žJ’[™\œÙTØÜ™Y[”Ú^™NÝšY]ÜÜO]šY]ÜÜJŒ‹ŒLKŒÝ™XÌÈšYÛ™]VLO]™XÌÊšY]ÜÜJšYÛ™]TÙ][™ÜÌKžJÝšYÛ™]TÙ][™ÜÌKžËKŒ
NÙ›Ø]šYÛ™]U\›OYÝ
šYÛ™]VLKšYÛ™]VLJNÙ›Ø]šYÛ™]O\ÝÊšYÛ™]U\›KšYÛ™]TÙ][™ÜÌ‹ÊNÝ™XÌÈšYÛ™]PÛÛÜ]šYÛ™]TÙ][™ÜÌ‹œ™ØŽÂˆÚY™Yˆ’QÓ‘UP“S‘SÑSUSTB™XÌÈšYÛ™]PÛÛÜ“][\Y\[Z^
šYÛ™]PÛÛÜ‹™XÌÊKKJKšYÛ™]JNÜ™\Ý[œ™ØŠ]šYÛ™]PÛÛÜ“][\Y\ŽÂˆÙ[™Y‚ˆÚY™Yˆ’QÓ‘UP“S‘SÑSÔTUQBœ™\Ý[œ™Ø[Z^
šYÛ™]PÛÛÜ‹™\Ý[œ™Ø‹šYÛ™]JNÂˆÙ[™Y‚ˆÙ[™Y‚ˆÚYˆÓ‘SPTS‘ÏOLÂœ™\Ý[œ™ØT”“™]]˜[Û™SX\[™Ê™\Ý[œ™ØŠNÂˆÙ[YˆÓ‘SPTS‘ÏOL‚œ™\Ý[œ™ØPPÑTÑš]Y
™\Ý[œ™ØŠNÂˆÙ[YˆÓ‘SPTS‘ÏOLB˜ÛÛœÝ›Ø]Û™[X\[™ÐØ[Xœ˜][ÛLKNLMÎNÜ™\Ý[œ™ØLKŒY^Š]Û™[X\[™ÐØ[Xœ˜][ÛŠœ™\Ý[œ™ØŠNÂˆÙ[™Y‚œ™\Ý[œ™Ø]ÑØ[[XTÜXÙJ™\Ý[œ™ØŠNÜ™\Ý[œ™Ø\Ø]\˜]J™\Ý[œ™ØŠNÂˆÚY™YˆÓÓ•TÕ™XÌÈ™\Ý[YÚÛÛ˜\Ý\™\Ý[œ™ØŠœ™\Ý[œ™ØŠŠËŒL‹Œ
œ™\Ý[œ™ØŠNÚYˆ
ÛÛ˜\ÝKŒ
HÜ™\Ý[œ™Ø[Z^
™XÌÊKKJK™\Ý[œ™Ø‹ÛÛ˜\Ý
NßH[ÙHÜ™\Ý[œ™Ø[Z^
™\Ý[œ™Ø‹™\Ý[YÚÛÛ˜\ÝÛÛ˜\ÝLKŒ
NßBœ™\Ý[œ™Ø[X^
™\Ý[œ™Ø‹ŠNÂˆÙ[™Y‚ˆÚY™YˆÓÓÔ‘ÔQS‘Â™XÌÈÛÛÜ•˜[œÙ›Ü›R[œ]\™\Ý[œ™ØŠ˜ÛÛÜ•˜[œÙ›Ü›TÙ][™ÜËž
ØÛÛÜ•˜[œÙ›Ü›TÙ][™ÜËž^^NÂˆÚY™YˆÓÓÔ‘ÔQS‘ÌÑ™XÌÈÛÛÜ•˜[œÙ›Ü›SÝ]]]^\™JÛÛÜ•˜[œÙ›Ü›KÛÛÜ•˜[œÙ›Ü›R[œ]
Kœ™ØŽÂˆÙ[ÙB™XÌÈÛÛÜ•˜[œÙ›Ü›SÝ]]\Ø[\U^\™LÑ
ÛÛÜ•˜[œÙ›Ü›KÛÛÜ•˜[œÙ›Ü›R[œ]ÛÛÜ•˜[œÙ›Ü›TÙ][™ÜËž^ŠKœ™ØŽÂˆÙ[™Y‚œ™\Ý[œ™Ø[Z^
™\Ý[œ™Ø‹ÛÛÜ•˜[œÙ›Ü›SÝ]]ÛÛÜ•˜[œÙ›Ü›TÙ][™ÜËÝÝÊNÂˆÙ[™Y‚ˆÚY™YˆÓÓÔÕT•‘TÂ™›Ø][XOYÙ][Z[˜[˜ÙJ™\Ý[œ™ØŠNÝ™XÌˆÝ\™SZ^XÛ[\
™XÌŠ[XJŒËŒLKK[XJ‹LËŒ
ÌKJK™XÌŠŒ
K™XÌŠKŒ
JNÝ™XÍÛÛÜÝ\™O]Ø[Y\˜PÛÛÜÝ\™S™]]˜[
ØÝ\™SZ^ž
Ø[Y\˜PÛÛÜÝ\™TÜÚ]]™KXÝ\™SZ^žJØ[Y\˜PÛÛÜÝ\™S™YØ]]™NÜ™\Ý[œ™ØŠXÛÛÜÝ\™Kœ™ØŽÜ™\Ý[œ™Ø[Z^
™XÌÊ[XJK™\Ý[œ™Ø‹ÛÛÜÝ\™K˜JNÂˆÙ[™Y‚ˆÚY™YˆUT‚™›Ø]˜[™YÙ]˜[™
ÛÑœ˜YÐÛÛÜ™žJ’[™\œÙTØÜ™Y[”Ú^™JNÙ›Ø]]\[Z^
Y]\’[[œÚ]K]\’[[œÚ]K˜[™
NÜ™\Ý[œ™Ø\Ø]\˜]J™\Ý[œ™ØŠÝ™XÌÊ]\ŠJNÂˆÙ[™Y‚ˆÙYš[™HÕTÕÓWÒSPQÑT“ÐÑTÔÒS‘Ñ•SÕSÓ”×ÕTUT‘TÕSÐUS‘œ™]\›ˆ™\Ý[ßXÜK’[˜ÛY\ÔÚY\œÔÝÜ™VÔ\_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÔ\O]“JNØÛÛœÝUO^Û˜[YN”\ÚY\Ž“_K	H^\™T™\]][Û‘[˜Ý[ÛœÈ‹OXÚYˆVT‘WÔ‘TUUSÓ—ÓSÑOŒ™XÍÝ^™\\Ú
™XÌˆ
HÜ™]\›ˆœ˜XÝ
Ú[Š™XÍ
ŒKŒ
ÙÝ
™XÌŠÍËŒMËŒ
JKŒ‹Œ
ÙÝ
™XÌŠLKŒËŒ
JKŒËŒ
ÙÝ
™XÌŠKŒŽKŒ
JKŒ
ÙÝ
™XÌŠŒËŒÌKŒ
JBŠJJŒLËŒ
NßBˆÙ[™Y‚ˆÚYˆVT‘WÔ‘TUUSÓ—ÓSÑOOLB™XÍÝ^™\Ø[\JØ[\\Œ‘Ø[\™XÌˆ]ŠHÙ›Ø]Ï]^\™L‘
Ø[\ŒJ]ŠKžÙ›Ø][™^ZÊŽŒÙ›Ø]Yœ˜XÝ
[™^
NÙ›Ø]OY›ÛÜŠ[™^
ÌJNÙ›Ø]XY›ÛÜŠ[™^
NÙ[Z[Š‹KŒYŠJŒ‹ŒÝ™XÌˆÙ™˜O\Ú[Š™XÌŠËŒËŒ
JšJNÝ™XÌˆÙ™˜\Ú[Š™XÌŠËŒËŒ
JšXŠNÝ™XÌˆY™
]ŠNÝ™XÌˆOY™J]ŠNÝ™XÍÛÛO]^\™QÜ˜Y
Ø[\]ŠÌŒÊ›Ù™˜KJNÝ™XÍÛÛ]^\™QÜ˜Y
Ø[\]ŠÌŒÊ›Ù™˜‹JNÙ›Ø]ÛÛÝ[OXÛÛKž
ØÛÛKžJØÛÛKž‹XÛÛ‹žXÛÛ‹žKXÛÛ‹žŽÜ™]\›ˆZ^
ÛÛKÛÛ‹Û[ÛÝÝ\
Œ‹Ž‹LŒJ˜ÛÛÝ[JJNßBˆÙ[YˆVT‘WÔ‘TUUSÓ—ÓSÑOOL‚ˆÚY›™YˆVT‘WÔ‘TUUSÓ—ÓWÔBˆÙYš[™HVT‘WÔ‘TUUSÓ—ÓWÔHËŒMMNLLÍNMÎBˆÙ[™Y‚™XÌˆÝ^™\^\Ú
™XÌˆ
HÝ™XÌˆ[X]ŠLËŒKŽKKÌLKËNËŒÊJœÜ™]\›ˆœ˜XÝ
Ú[ŠŠJÍÍNMLÊNßB›ÚYÝ^™\šX[™ÛQÜšY
›Ý]›Ø]ÌKÝ]›Ø]Ì‹Ý]›Ø]ÌË›Ý]]™XÌˆ™\^KÝ]]™XÌˆ™\^‹Ý]]™XÌˆ™\^Ë™XÌˆÝŠHÜÝ
L‹Œ
œÜ\
ËŒ
NÛX]ˆÜšYÔÚÙ]ÙYÜšY[X]ŠKŒŒLMÍÌÍLËKŒMMÌM
NÝ™XÌˆÚÙ]ÙYÛÛÜ™YÜšYÔÚÙ]ÙYÜšY
œÝÚ]™XÌˆ˜\ÙRYZ]™XÌŠ›ÛÜŠÚÙ]ÙYÛÛÜ™
JNÝ™XÌÈ[\]™XÌÊœ˜XÝ
ÚÙ]ÙYÛÛÜ™
KŒ
NÝ[\žLKŒ][\ž][\žNÙ›Ø]Ï\Ý\
Œ][\žŠNÙ›Ø]ÌL‹Œ
œËLKŒÝÌOK][\žŠœÌŽÝÌ\Ë][\žJœÌŽÝÌÏ\Ë][\ž
œÌŽÝ™\^OX˜\ÙRY
Ú]™XÌŠ[
ÊK[
ÊJNÝ™\^X˜\ÙRY
Ú]™XÌŠ[
ÊK[
KŒ\ÊJNÝ™\^ÏX˜\ÙRY
Ú]™XÌŠ[
KŒ\ÊK[
ÊJNßB™XÌˆÝ^™\XZÙPÙ[”Õ
]™XÌˆ™\^
HÛX]ˆ[”ÚÙ]ÓX][X]ŠKŒŒKKŒÌKŒMMÌM
NÜ™]\›ˆ
[”ÚÙ]ÓX]
™XÌŠ™\^
JKÊ‹Œ
œÜ\
ËŒ
JNßB›X]ˆÝ^™\ØY›ÝžŠ]™XÌˆY›Ø]›ÝÝŠHÙ›Ø][™ÛOY›Ø]
XœÊYž
šYžJJØXœÊYž
ÚYžJJJÕVT‘WÔ‘TUUSÓ—ÓWÔNØ[™ÛO[[Ù
[™ÛK‹Œ
•VT‘WÔ‘TUUSÓ—ÓWÔJNÚYˆ
[™ÛOŒ
H[™ÛJÏL‹Œ
•VT‘WÔ‘TUUSÓ—ÓWÔNÚYˆ
[™ÛO•VT‘WÔ‘TUUSÓ—ÓWÔJH[™ÛKOUVT‘WÔ‘TUUSÓ—ÓWÔNØ[™ÛJ\›ÝÝŽÙ›Ø]ÜÏXÛÜÊ[™ÛJNÙ›Ø]ÚO\Ú[Š[™ÛJNÜ™]\›ˆX]ŠÜËÚK\ÚKÜÊNßB™XÌÈÝ^™\ØZ[ŒÊ™XÌÈ›Ø]ŠHÙ›Ø]Ï[ÙÊKŒ\ŠKÛÙÊJNÝ™XÌÈÏL‹Œ
œÝ\
K
NÝ™XÌÈOL‹Œ
ŠKŒ\ÊNÝ™XÌÈ™\ÏLJœÊÌŒJ›JœÝÊX^
™XÌÊŒ
KÊÞ
›JK™XÌÊÊJNÜ™]\›ˆ™\ËÊ™\Ëž
Ü™\ËžJÜ™\ËžŠNßB™XÍÝ^™\Ø[\JØ[\\Œ‘Ø[\™XÌˆ]ŠHÙ›Ø]›ÝÝ™[™Ý]•^\™T™\]][Û’^[[™Ô\˜[\ËžÙ›Ø]˜[Ù™ÛÛ˜\Ý]•^\™T™\]][Û’^[[™Ô\˜[\ËžNÙ›Ø]^˜[]•^\™T™\]][Û’^[[™Ô\˜[\ËžŽÙ›Ø]]•^\™T™\]][Û’^[[™Ô\˜[\ËÎÝ™XÌˆÕY™
]ŠNÝ™XÌˆÕOY™J]ŠNÙ›Ø]ÌKÌ‹ÌÎÚ]™XÌˆ™\^K™\^‹™\^Î×Ý^™\šX[™ÛQÜšY
ÌKÌ‹ÌË™\^K™\^‹™\^Ë]ŠNÛX]ˆ›ÝOWÝ^™\ØY›ÝžŠ™\^K›ÝÝ™[™Ý
NÛX]ˆ›ÝWÝ^™\ØY›ÝžŠ™\^‹›ÝÝ™[™Ý
NÛX]ˆ›ÝÏWÝ^™\ØY›ÝžŠ™\^Ë›ÝÝ™[™Ý
NÝ™XÌˆÙ[ŒOWÝ^™\XZÙPÙ[”Õ
™\^JNÝ™XÌˆÙ[ŒWÝ^™\XZÙPÙ[”Õ
™\^ŠNÝ™XÌˆÙ[ŒÏWÝ^™\XZÙPÙ[”Õ
™\^ÊNÝ™XÌˆÝOJ]‹XÙ[ŒJJœ›ÝJØÙ[ŒJ×Ý^™\^\Ú
™XÌŠ™\^JJNÝ™XÌˆÝJ]‹XÙ[ŒŠJœ›ÝŠØÙ[ŒŠ×Ý^™\^\Ú
™XÌŠ™\^ŠJNÝ™XÌˆÝÏJ]‹XÙ[ŒÊJœ›ÝÊØÙ[ŒÊ×Ý^™\^\Ú
™XÌŠ™\^ÊJNÝ™XÍÌO]^\™QÜ˜Y
Ø[\ÝKÕ
œ›ÝKÕJœ›ÝJNÝ™XÍÌ]^\™QÜ˜Y
Ø[\Ý‹Õ
œ›Ý‹ÕJœ›ÝŠNÝ™XÍÌÏ]^\™QÜ˜Y
Ø[\ÝËÕ
œ›ÝËÕJœ›ÝÊNÝ™XÌÈÏ]™XÌÊŒŽNKNËŒLM
NÝ™XÌÈÏ]™XÌÊÝ
ÌKœ™Ø‹ÊKÝ
Ì‹œ™Ø‹ÊKÝ
ÌËœ™Ø‹ÊJNÑÏ[Z^
™XÌÊKŒ
KË˜[Ù™ÛÛ˜\Ý
NÝ™XÌÈÏQÊœÝÊ™XÌÊÌKÌ‹ÌÊK™XÌÊ^˜[
JNÕËÏJËž
ÕËžJÕËžŠNÚYˆ
ˆOHJHÕÏWÝ^™\ØZ[ŒÊËŠNßBœ™]\›ˆËž
˜ÌJÕËžJ˜ÌŠÕËžŠ˜ÌÎßBˆÙ[YˆVT‘WÔ‘TUUSÓ—ÓSÑOOLÂ™XÍÝ^™\Ø[\JØ[\\Œ‘Ø[\™XÌˆ]ŠHÝ™XÌˆ]]Y›ÛÜŠ]ŠNÝ™XÌˆ]Yœ˜XÝ
]ŠNÝ™XÍÙ˜OWÝ^™\\Ú
]]ŠÝ™XÌŠŒŒ
JNÝ™XÍÙ˜WÝ^™\\Ú
]]ŠÝ™XÌŠKŒŒ
JNÝ™XÍÙ˜ÏWÝ^™\\Ú
]]ŠÝ™XÌŠŒKŒ
JNÝ™XÍÙ™WÝ^™\\Ú
]]ŠÝ™XÌŠKŒKŒ
JNÝ™XÌˆY™
]ŠNÝ™XÌˆOY™J]ŠNÛÙ˜KžÏ\ÚYÛŠÙ˜KžËLJNÛÙ˜‹žÏ\ÚYÛŠÙ˜‹žËLJNÛÙ˜ËžÏ\ÚYÛŠÙ˜ËžËLJNÛÙ™žÏ\ÚYÛŠÙ™žËLJNÝ™XÌˆ]˜O]]Š›Ù˜KžÊÛÙ˜KžNÈ™XÌˆOY
›Ù˜KžÎÈ™XÌˆXOYJ›Ù˜KžÎÝ™XÌˆ]˜]]Š›Ù˜‹žÊÛÙ˜‹žNÈ™XÌˆY
›Ù˜‹žÎÈ™XÌˆXYJ›Ù˜‹žÎÝ™XÌˆ]˜Ï]]Š›Ù˜ËžÊÛÙ˜ËžNÈ™XÌˆÏY
›Ù˜ËžÎÈ™XÌˆXÏYJ›Ù˜ËžÎÝ™XÌˆ]™]]Š›Ù™žÊÛÙ™žNÈ™XÌˆY
›Ù™žÎÈ™XÌˆYYJ›Ù™žÎÝ™XÌˆ\Û[ÛÝÝ\
ŒKÍK]ŠNÜ™]\›ˆZ^
›Z^
^\™QÜ˜Y
Ø[\]˜KKXJK^\™QÜ˜Y
Ø[\]˜‹‹XŠK‹ž
K›Z^
^\™QÜ˜Y
Ø[\]˜ËËXÊK^\™QÜ˜Y
Ø[\]™Y
K‹ž
K˜‹žBŠNßBˆÙ[YˆVT‘WÔ‘TUUSÓ—ÓSÑOOM™XÍÝ^™\Ø[\JØ[\\Œ‘Ø[\™XÌˆ]ŠHÝ™XÌˆY›ÛÜŠ]ŠNÝ™XÌˆYœ˜XÝ
]ŠNÝ™XÌˆY™
]ŠNÝ™XÌˆOY™J]ŠNÝ™XÍ˜O]™XÍ
Œ
NÙ›Ø]ÝLŒÙ›Ø]ÌLŒÙ›Üˆ
[KLNÈLNÈŠÊÊHÙ›Üˆ
[OKLNÈOLNÈJÊÊHÝ™XÌˆÏ]™XÌŠ›Ø]
JK›Ø]
ŠJNÝ™XÍÏWÝ^™\\Ú

ÙÊNÝ™XÌˆYËYŠÛËžNÙ›Ø]YÝ
‹ŠNÙ›Ø]ÏY^
MKŒ
™
NÝ™XÍÏ]^\™QÜ˜Y
Ø[\]ŠÛËžËJNÝ˜JÏ]Ê˜ÎÝÝ
Ï]ÎÝÌŠÏ]ÊÎß_B™›Ø]YX[LŒÎÝ™XÍ™\Ï[YX[ŠÊ˜K]Ý
›YX[ŠKÜÜ\
ÌŠNÜ™]\›ˆZ^
˜KÝÝ™\Ë
NßBˆÙ[™Y‚ˆÚYˆVT‘WÔ‘TUUSÓ—ÓSÑOŒˆÙYš[™HV‘
Ë]ŠHÝ^™\Ø[\JË]ŠBˆÙ[ÙBˆÙYš[™HV‘
Ë]ŠH^\™L‘
Ë]ŠBˆÙ[™Y‚ˆÙYš[™HV‘ÑQ’S‘Q˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VÉ_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÉO^JNØÛÛœÝÕO^Û˜[YN‰ÚY\Žž_KœH˜[\œ˜YÛY[XZ[‘[˜Ý[ÛœÈ‹ÓOXÚY›™YˆV‘ÑQ’S‘QˆÙYš[™HV‘
Ë]ŠH^\™L‘
Ë]ŠBˆÙYš[™HV‘ÑQ’S‘QˆÙ[™Y‚ˆÚYˆYš[™Y
•ST
HYš[™Y
ÓPTÓÐUÐ•ST
HYš[™Y
S’TÓÕ“ÔPÊHYš[™Y
URS
BˆÚYˆYš[™Y
S‘ÑS•
H	‰ˆYš[™Y
“Ô“PS
H˜\žZ[™ÈX]È•“ŽÂˆÙ[™Y‚ˆÚY™YˆÐ’‘PÕÔPÑWÓ“Ô“PSPT[šY›Ü›HX]›Ü›X[X]š^ÂˆÚYˆYš[™Y
ÑP‘ÓŠHYš[™Y
ÑP‘ÔJB›X]Ó›Ü›X[X]š^
X]ÓX]š^
BžÛX]™]Z[™\œÙJÓX]š^
NÜ™]]˜[œÜÜÙJ™]
NÜ™]ÌVÌ×OLŽÜ™]ÌWVÌ×OLŽÜ™]Ì—VÌ×OLŽÜ™]Ì×O]™XÍ
‹‹‹KŠNÜ™]\›ˆ™]ßBˆÙ[ÙB›X]Ó›Ü›X[X]š^
X]JBžÙ›Ø]˜L[VÌVÌKLO[VÌVÌWKL[VÌVÌ—KLÏ[VÌVÌ×K˜LL[VÌWVÌKLLO[VÌWVÌWKLL[VÌWVÌ—KLLÏ[VÌWVÌ×K˜LŒ[VÌ—VÌKLŒO[VÌ—VÌWKLŒ[VÌ—VÌ—KLŒÏ[VÌ—VÌ×K˜LÌ[VÌ×VÌKLÌO[VÌ×VÌWKLÌ[VÌ×VÌ—KLÌÏ[VÌ×VÌ×K˜ŒXL
˜LLKXLJ˜LL˜ŒOXL
˜LL‹XLŠ˜LL˜ŒXL
˜LLËXLÊ˜LL˜ŒÏXLJ˜LL‹XLŠ˜LLK˜ŒXLJ˜LLËXLÊ˜LLK˜ŒOXLŠ˜LLËXLÊ˜LL‹˜ŒXLŒ
˜LÌKXLŒJ˜LÌ˜ŒÏXLŒ
˜LÌ‹XLŒŠ˜LÌ˜ŒXLŒ
˜LÌËXLŒÊ˜LÌ˜ŒOXLŒJ˜LÌ‹XLŒŠ˜LÌK˜ŒLXLŒJ˜LÌËXLŒÊ˜LÌK˜ŒLOXLŒŠ˜LÌËXLŒÊ˜LÌ‹™]XŒ
˜ŒLKXŒJ˜ŒL
ØŒŠ˜ŒJØŒÊ˜ŒXŒ
˜ŒÊØŒJ˜ŒŽÛX]ZO[X]
˜LLJ˜ŒLKXLLŠ˜ŒL
ØLLÊ˜ŒK˜LŠ˜ŒLXLJ˜ŒLKXLÊ˜ŒK˜LÌJ˜ŒKXLÌŠ˜Œ
ØLÌÊ˜ŒË˜LŒŠ˜ŒXLŒJ˜ŒKXLŒÊ˜ŒË˜LLŠ˜ŒXLL
˜ŒLKXLLÊ˜ŒË˜L
˜ŒLKXLŠ˜Œ
ØLÊ˜ŒË˜LÌŠ˜Œ‹XLÌ
˜ŒKXLÌÊ˜ŒK˜LŒ
˜ŒKXLŒŠ˜ŒŠØLŒÊ˜ŒK˜LL
˜ŒLXLLJ˜Œ
ØLLÊ˜Œ‹˜LJ˜ŒXL
˜ŒLXLÊ˜Œ‹˜LÌ
˜ŒXLÌJ˜ŒŠØLÌÊ˜Œ˜LŒJ˜Œ‹XLŒ
˜ŒXLŒÊ˜Œ˜LLJ˜ŒËXLL
˜ŒKXLLŠ˜Œ‹˜L
˜ŒKXLJ˜ŒÊØLŠ˜Œ‹˜LÌJ˜ŒKXLÌ
˜ŒËXLÌŠ˜Œ˜LŒ
˜ŒËXLŒJ˜ŒJØLŒŠ˜Œ
KÙ]Ü™]\›ˆX]
ZVÌVÌKZVÌWVÌKZVÌ—VÌKZVÌ×VÌK›ZVÌVÌWKZVÌWVÌWKZVÌ—VÌWKZVÌ×VÌWK›ZVÌVÌ—KZVÌWVÌ—KZVÌ—VÌ—KZVÌ×VÌ—K›ZVÌVÌ×KZVÌWVÌ×KZVÌ—VÌ×KZVÌ×VÌ×JNßBˆÙ[™Y‚ˆÙ[™Y‚™XÌÈ\\˜“›Ü›X[˜\ÙJX]ÈÛÝ[™Ù[œ˜[YK™XÌÈ›Ü›X[›Ø]ØØ[JBžÂˆÚY™Yˆ“Ô“PSTÐÐSB››Ü›X[[›Ü›X[^™J›Ü›X[
™XÌÊØØ[KØØ[KKŒ
JNÂˆÙ[™Y‚œ™]\›ˆ›Ü›X[^™JÛÝ[™Ù[œ˜[YJ››Ü›X[
NßB™XÌÈ\\˜“›Ü›X[
X]ÈÛÝ[™Ù[œ˜[YK™XÌÈ^\™TØ[\K›Ø]ØØ[JBžÜ™]\›ˆ\\˜“›Ü›X[˜\ÙJÛÝ[™Ù[œ˜[YK^\™TØ[\JŒ‹ŒLKŒØØ[JNßB›X]ÈÛÝ[™Ù[Ùœ˜[YJ™XÌÈ›Ü›X[™XÌÈ™XÌˆ]‹™XÌˆ[™Ù[ÜXÙT\˜[\ÊBžÝ™XÌÈOY™

NÝ™XÌÈY™J
NÝ™XÌˆ]ŒOY™
]ŠNÝ™XÌˆ]ŒY™J]ŠNÝ™XÌÈœ\œXÜ›ÜÜÊ‹›Ü›X[
NÝ™XÌÈ\\œXÜ›ÜÜÊ›Ü›X[JNÝ™XÌÈ[™Ù[Yœ\œ
™]ŒKž
Ù\\œ
™]Œ‹žÝ™XÌÈš][™Ù[Yœ\œ
™]ŒKžJÙ\\œ
™]Œ‹žNÝ[™Ù[
][™Ù[ÜXÙT\˜[\ËžØš][™Ù[
][™Ù[ÜXÙT\˜[\ËžNÙ›Ø]][X^
Ý
[™Ù[[™Ù[
KÝ
š][™Ù[š][™Ù[
JNÙ›Ø][›X^Y]OLŒÈŒˆ[™\œÙ\Ü\
]
NÜ™]\›ˆX]Ê[™Ù[
š[›X^š][™Ù[
š[›X^›Ü›X[
NßBˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VÒœ_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÒœOTÓJNØÛÛœÝO^Û˜[YN’œÚY\Ž”Ó_KYÏH˜[\œ˜YÛY[[˜Ý[ÛœÈ‹OXÚYˆYš[™Y
•ST
BˆÚ[˜ÛYOØ[\\‘œ˜YÛY[XÛ\˜][ÛŠÑQ’S‘SSQWË•STÕT–RS‘ÓSQWË[\ÔÐSTT“SQWË[\
BˆÙ[™Y‚ˆÚYˆYš[™Y
URS
BˆÚ[˜ÛYOØ[\\‘œ˜YÛY[XÛ\˜][ÛŠÑQ’S‘SSQWËURSÕT–RS‘ÓSQWË]Z[ÔÐSTT“SQWË]Z[
BˆÙ[™Y‚ˆÚYˆYš[™Y
•ST
H	‰ˆYš[™Y
TSV
B˜ÛÛœÝ›Ø]Z[”Ø[\\ÏMŽØÛÛœÝ›Ø]X^Ø[\\ÏLMKŽØÛÛœÝ[SX^Ø[\\ÏLMNÝ™XÌˆ\˜[^ØØÛ\Ú[ÛŠ™XÌÈ•šY]Ñ\ÛÕ™XÌÈ“›Ü›X[ÛÕ™XÌˆ^ÛÛÜ™›Ø]\˜[^ØØ[JHÙ›Ø]\˜[^[Z][[™Ý
•šY]Ñ\ÛÕžJKÝ•šY]Ñ\ÛÕžŽÜ\˜[^[Z]
\\˜[^ØØ[NÝ™XÌˆ“Ù™œÙ]\[›Ü›X[^™J•šY]Ñ\ÛÕžJNÝ™XÌˆ“X^Ù™œÙ]]“Ù™œÙ]\Šœ\˜[^[Z]Ù›Ø][TØ[\\Ï[X^Ø[\\ÊÊÝ
•šY]Ñ\ÛÕ“›Ü›X[ÛÕ
JŠZ[”Ø[\\Ë[X^Ø[\\ÊJNÙ›Ø]Ý\Ú^™OLKŒÛ[TØ[\\ÎÙ›Ø]Ý\œ”˜^RZYÚLKŒÝ™XÌˆÝ\œ“Ù™œÙ]]™XÌŠ
NÝ™XÌˆ“\ÝÙ™œÙ]]™XÌŠ
NÙ›Ø]\ÝØ[\YZYÚLKŒÙ›Ø]Ý\œ”Ø[\YZYÚLKŒØ›ÛÛÙY\ÛÜšÚ[™Ï]YNÙ›Üˆ
[OLÈOSX^Ø[\\ÎÈJÊÊBžØÝ\œ”Ø[\YZYÚ]^\™L‘
[\Ø[\\‹^ÛÛÜ™
ÝÝ\œ“Ù™œÙ]
KÎÚYˆ
ZÙY\ÛÜšÚ[™ÊBžßB™[ÙHYˆ
Ý\œ”Ø[\YZYÚ˜Ý\œ”˜^RZYÚ
BžÙ›Ø][LOXÝ\œ”Ø[\YZYÚXÝ\œ”˜^RZYÚÙ›Ø][LJÝ\œ”˜^RZYÚ
ÜÝ\Ú^™JK[\ÝØ[\YZYÚÙ›Ø]˜][ÏY[LKÊ[LJÙ[LŠNÝÝ\œ“Ù™œÙ]J˜][ÊJˆ“\ÝÙ™œÙ]
ÊKŒ\˜][ÊJÝ\œ“Ù™œÙ]ÚÙY\ÛÜšÚ[™ÏY˜[ÙNßB™[ÙBžØÝ\œ”˜^RZYÚO\Ý\Ú^™NÝ“\ÝÙ™œÙ]]Ý\œ“Ù™œÙ]ÂˆÚY™YˆTSVÔ’ÂÝ\œ“Ù™œÙ]O\Ý\Ú^™J“X^Ù™œÙ]ÂˆÙ[ÙBÝ\œ“Ù™œÙ]
Ï\Ý\Ú^™J“X^Ù™œÙ]ÂˆÙ[™Y‚›\ÝØ[\YZYÚXÝ\œ”Ø[\YZYÚß_Bœ™]\›ˆÝ\œ“Ù™œÙ]ßB™XÌˆ\˜[^Ù™œÙ]
™XÌÈšY]Ñ\‹›Ø]ZYÚØØ[JBžÙ›Ø]ZYÚ]^\™L‘
[\Ø[\\‹[\UŠKÎÝ™XÌˆ^ÛÛÜ™Ù™œÙ]ZZYÚØØ[JšY]Ñ\‹žJšZYÚÂˆÚY™YˆTSVÔ’Âœ™]\›ˆ^ÛÛÜ™Ù™œÙ]ÂˆÙ[ÙBœ™]\›ˆ]^ÛÛÜ™Ù™œÙ]ÂˆÙ[™Y‚ŸBˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VÙY×_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÙY×OUJNØÛÛœÝÕO^Û˜[YN™YËÚY\Ž•_KÏH˜[\œ˜YÛY[‹SOX™XÌˆ]“Ù™œÙ]]™XÌŠŒŒ
NÂˆÚYˆYš[™Y
•ST
HYš[™Y
TSV
HYš[™Y
URS
BˆÚY™Yˆ“Ô“PSTÐÐSB™›Ø]›Ü›X[ØØ[OLKŒÂˆÙ[YˆYš[™Y
•ST
B™›Ø]›Ü›X[ØØ[O][\[™›ÜËžNÂˆÙ[ÙB™›Ø]›Ü›X[ØØ[OLKŒÂˆÙ[™Y‚ˆÚYˆYš[™Y
S‘ÑS•
H	‰ˆYš[™Y
“Ô“PS
B›X]È“]•“ŽÂˆÙ[YˆYš[™Y
•ST
B™XÌˆ“•UYÛÑœ›Û˜XÚ[™ÈÈ[\Uˆˆ][\UŽÛX]È“XÛÝ[™Ù[Ùœ˜[YJ›Ü›X[Ê››Ü›X[ØØ[K”ÜÚ][Û•Ë“•U‹•[™Ù[ÜXÙT\˜[\ÊNÂˆÙ[ÙB™XÌˆ“•UYÛÑœ›Û˜XÚ[™ÈÈ‘]Z[Uˆˆ]‘]Z[UŽÛX]È“XÛÝ[™Ù[Ùœ˜[YJ›Ü›X[Ê››Ü›X[ØØ[K”ÜÚ][Û•Ë“•U‹™XÌŠK‹KŠJNÂˆÙ[™Y‚ˆÙ[YˆYš[™Y
S’TÓÕ“ÔPÊBˆÚYˆYš[™Y
S‘ÑS•
H	‰ˆYš[™Y
“Ô“PS
B›X]È“]•“ŽÂˆÙ[ÙB™XÌˆ“•UYÛÑœ›Û˜XÚ[™ÈÈ“XZ[•UŒHˆ]“XZ[•UŒNÛX]È“XÛÝ[™Ù[Ùœ˜[YJ›Ü›X[Ë”ÜÚ][Û•Ë“•U‹™XÌŠK‹KŠJNÂˆÙ[™Y‚ˆÙ[™Y‚ˆÚY™YˆTSV›X]È[•“]˜[œÜÜÙSX]Ê“ŠNÂˆÚY™YˆTSVÐÐÓTÒSÓ‚]“Ù™œÙ]\\˜[^ØØÛ\Ú[ÛŠ[•“Š‹]šY]Ñ\™XÝ[Û•Ë[•“Š››Ü›X[Ë[\U‹[\[™›ÜËžŠNÂˆÙ[ÙB]“Ù™œÙ]\\˜[^Ù™œÙ]
[•“ŠšY]Ñ\™XÝ[Û•Ë[\[™›ÜËžŠNÂˆÙ[™Y‚ˆÙ[™Y‚ˆÚY™YˆURS™XÍ]Z[ÛÛÜ]^\™L‘
]Z[Ø[\\‹‘]Z[UŠÝ]“Ù™œÙ]
NÝ™XÌˆ]Z[›Ü›X[‘ÏY]Z[ÛÛÜ‹ÞJŒ‹ŒLKŒÙ›Ø]]Z[›Ü›X[\Ü\
K‹\Ø]\˜]JÝ
]Z[›Ü›X[‘Ë]Z[›Ü›X[‘ÊJJNÝ™XÌÈ]Z[›Ü›X[]™XÌÊ]Z[›Ü›X[‘Ë]Z[›Ü›X[ŠNÂˆÙ[™Y‚ˆÚY™Yˆ•STˆÚY™YˆÐ’‘PÕÔPÑWÓ“Ô“PSPTˆÙYš[™HÕTÕÓWÑ”QÓQS•Ð•STÑ”QÓQS•››Ü›X[Ï[›Ü›X[^™JV‘
[\Ø[\\‹[\UŠKž^ˆ
Œ‹ŒLKŒ
NÛ›Ü›X[Ï[›Ü›X[^™JX]Ê›Ü›X[X]š^
J››Ü›X[ÊNÂˆÙ[YˆYYš[™Y
URS
B››Ü›X[Ï\\\˜“›Ü›X[
“‹V‘
[\Ø[\\‹[\UŠÝ]“Ù™œÙ]
Kž^‹[\[™›ÜËžJNÂˆÙ[ÙB™XÌÈ[\›Ü›X[UV‘
[\Ø[\\‹[\UŠÝ]“Ù™œÙ]
Kž^ŠŒ‹ŒLKŒÂˆÚYˆURSÓ“Ô“PS“S‘QUÑOL™]Z[›Ü›X[žJ]‘]Z[[™›ÜËžŽÝ™XÌÈ›[™Y›Ü›X[[›Ü›X[^™J™XÌÊ[\›Ü›X[žJÙ]Z[›Ü›X[žK[\›Ü›X[žŠ™]Z[›Ü›X[žŠJNÂˆÙ[YˆURSÓ“Ô“PS“S‘QUÑOLH™]Z[›Ü›X[žJ]‘]Z[[™›ÜËžŽØ[\›Ü›X[
Ï]™XÌÊŒŒKŒ
NÙ]Z[›Ü›X[
]™XÌÊLKŒLKŒKŒ
NÝ™XÌÈ›[™Y›Ü›X[X[\›Ü›X[
™Ý
[\›Ü›X[]Z[›Ü›X[
KØ[\›Ü›X[ž‹Y]Z[›Ü›X[ÂˆÙ[™Y‚››Ü›X[Ï\\\˜“›Ü›X[˜\ÙJ“‹›[™Y›Ü›X[[\[™›ÜËžJNÂˆÙ[™Y‚ˆÙ[YˆYš[™Y
URS
B™]Z[›Ü›X[žJ]‘]Z[[™›ÜËžŽÛ›Ü›X[Ï\\\˜“›Ü›X[˜\ÙJ“‹]Z[›Ü›X[‘]Z[[™›ÜËžŠNÂˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VÝ×_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÝ×OQSJNØÛÛœÝO^Û˜[YNËÚY\Ž‘S_KYÏH™XØ[œ˜YÛY[‹SOXÚY™YˆPÐSˆÚY™YˆÐSSPQPÐS™XØ[ÛÛÜ‹œ™Ø]Ó[™X\”ÜXÙJXØ[ÛÛÜ‹œ™ØŠNÂˆÙ[™Y‚ˆÚY™YˆPÐSÔÓSÓÕSB™XØ[ÛÛÜ‹˜JYXØ[ÛÛÜ‹˜NÂˆÙ[™Y‚œÝ\™˜XÙP[™YËœ™Ø[Z^
Ý\™˜XÙP[™YËœ™Ø‹XØ[ÛÛÜ‹œ™Ø‹XØ[ÛÛÜ‹˜JNÂˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VÚY×_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÚY×O^SJNØÛÛœÝ•O^Û˜[YNšYËÚY\ŽžS_KÙÏH™\™T\ÜÈ‹“OXÚY™YˆT‘TTÔÂ™ÛÑœ˜YÐÛÛÜ]™XÍ
‹‹‹KŒ
NÜ™]\›ŽÂˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VÜÙ×_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÜÙ×OX“JNØÛÛœÝUO^Û˜[YNœÙËÚY\Ž˜“_K™ÏH›YÚœ˜YÛY[‹SOXÚY™YˆQÒÖBˆÚYˆYš[™Y
ÒQÕÓÓ“JHYš[™Y
QÒPT
H	‰ˆYš[™Y
QÒPTVÓQQÖJH	‰ˆYš[™Y
QÒPT“ÔÔPÕSTžÖJBˆÙ[ÙB™XÍY™\Ù^ÖO[YÚÖK“YÚY™\ÙNÂˆÙYš[™HÕTÕÓWÓQÒÖWÐÓÓÔˆˆÚYˆYš[™Y
”ŠH	‰ˆYš[™Y
ÓTÕQÒÖJH	‰ˆYš[™Y
ÓTÕQÒÐUÒ
H	‰ˆÓTÕQÒÐUÒŒžÚ[ÛXÙR[™^[Z[ŠÙ]Û\Ý\™YÛXÙR[™^
YÚÖK”ÛXÙQ]K•šY]Ñ\
KÓTÕQÒÔÓPÑTËLJNÚ[™›ÏXÛÛ\]PÛ\Ý\™YYÚ[™Ê›YÚ]U^\™^ÖK[SX\ÚÕ^\™^ÖK›YÚÖK“YÚ]Kš]™XÌŠYÚÖK”ÛXÙT˜[™Ù\ÖÜÛXÙR[™^JKšY]Ñ\™XÝ[Û•Ë››Ü›X[Ë”ÜÚ][Û•ËœÝ\™˜XÙP[™YËœ™Y›XÝ]š]SÝ]ˆÚY™YˆT’QTÐÑSÑB‹\šY\ØÙ[˜ÙR[[œÚ]BˆÙ[™Y‚ˆÚY™YˆÔ×ÕS”ÓPÑSÖB‹ÝX”Ý\™˜XÙSÝ]ˆÙ[™Y‚ˆÚY™YˆÔPÕST•T“B‹PT›ÝYÚ™\ÜÑ˜XÝÜœËžˆÙ[™Y‚ˆÚY™YˆS’TÓÕ“ÔPÂ‹[š\ÛÝ›ÜXÓÝ]ˆÙ[™Y‚ˆÚY™YˆÒQS‚‹ÚY[“Ý]ˆÙ[™Y‚ˆÚY™YˆÓPTÓÐU‹ÛX\˜ÛØ]Ý]ˆÙ[™Y‚ŠNßBˆÙ[YˆYš[™Y
”ŠBˆÚY™YˆÔÕQÒÖBœ™R[™›ÏXÛÛ\]TÚ[[™ÜÝ™SYÚ[™Ò[™›ÊYÚÖK“YÚ]KšY]Ñ\™XÝ[Û•Ë›Ü›X[Ë”ÜÚ][Û•ÊNÂˆÙ[YˆYš[™Y
ÒS•QÒÖJBœ™R[™›ÏXÛÛ\]TÚ[[™ÜÝ™SYÚ[™Ò[™›ÊYÚÖK“YÚ]KšY]Ñ\™XÝ[Û•Ë›Ü›X[Ë”ÜÚ][Û•ÊNÂˆÙ[YˆYš[™Y
SRSQÒÖJBœ™R[™›ÏXÛÛ\]R[Z\Ü\šXÔ™SYÚ[™Ò[™›ÊYÚÖK“YÚ]KšY]Ñ\™XÝ[Û•Ë›Ü›X[ÊNÂˆÙ[YˆYš[™Y
T“QÒÖJBœ™R[™›ÏXÛÛ\]Q\™XÝ[Û˜[™SYÚ[™Ò[™›ÊYÚÖK“YÚ]KšY]Ñ\™XÝ[Û•Ë›Ü›X[ÊNÂˆÙ[YˆYš[™Y
T‘PSQÒÖJH	‰ˆYš[™Y
T‘PSQÒTÑQ
H	‰ˆYš[™Y
T‘PSQÒÕTÔ•Q
BˆÚYˆYš[™Y
‘PÕT‘PSQÒSRTÔÒSÓ•VT‘^ÖJBœ™R[™›ÏXÛÛ\]P\™XT™SYÚ[™Ò[™›ÕÚ]^\™J\™XSYÚÓÌTØ[\\‹\™XSYÚÓÌ”Ø[\\‹™XÝ\™XSYÚ[Z\ÜÚ[Û•^\™^ÖKšY]Ñ\™XÝ[Û•Ë›Ü›X[Ë”ÜÚ][Û•ËYÚÖK“YÚ]KYÚÖK“YÚÚYž^‹YÚÖK“YÚZYÚž^‹›ÝYÚ™\ÜÊNÂˆÙ[ÙBœ™R[™›ÏXÛÛ\]P\™XT™SYÚ[™Ò[™›Ê\™XSYÚÓÌTØ[\\‹\™XSYÚÓÌ”Ø[\\‹šY]Ñ\™XÝ[Û•Ë›Ü›X[Ë”ÜÚ][Û•ËYÚÖK“YÚ]KYÚÖK“YÚÚYž^‹YÚÖK“YÚZYÚž^‹›ÝYÚ™\ÜÊNÂˆÙ[™Y‚ˆÙ[™Y‚œ™R[™›Ë“™ÝS™ÝŽÂˆÚY™YˆÔÕQÒÖBˆÚY™YˆQÒÑSÑ‘—ÑÓžÖBœ™R[™›Ë˜][X][ÛXÛÛ\]Q\Ý[˜ÙSYÚ˜[Ù™—ÑÓŠ™R[™›Ë›YÚ\Ý[˜ÙTÜ]X\™YYÚÖK“YÚ˜[Ù™‹žJNÂˆÚY™YˆQTÓQÒVT‘^ÖBœ™R[™›Ë˜][X][ÛŠXÛÛ\]Q\™XÝ[Û˜[YÚ˜[Ù™—ÒQTÊYÚÖK“YÚ\™XÝ[Û‹ž^‹™R[™›Ë“Y\ÓYÚ^\™^ÖJNÂˆÙ[ÙBœ™R[™›Ë˜][X][ÛŠXÛÛ\]Q\™XÝ[Û˜[YÚ˜[Ù™—ÑÓŠYÚÖK“YÚ\™XÝ[Û‹ž^‹™R[™›Ë“YÚÖK“YÚ˜[Ù™‹ž‹YÚÖK“YÚ˜[Ù™‹ÊNÂˆÙ[™Y‚ˆÙ[YˆYš[™Y
QÒÑSÑ‘—ÔTÒPÐSÖJBœ™R[™›Ë˜][X][ÛXÛÛ\]Q\Ý[˜ÙSYÚ˜[Ù™—Ô\ÚXØ[
™R[™›Ë›YÚ\Ý[˜ÙTÜ]X\™Y
NÂˆÚY™YˆQTÓQÒVT‘^ÖBœ™R[™›Ë˜][X][ÛŠXÛÛ\]Q\™XÝ[Û˜[YÚ˜[Ù™—ÒQTÊYÚÖK“YÚ\™XÝ[Û‹ž^‹™R[™›Ë“Y\ÓYÚ^\™^ÖJNÂˆÙ[ÙBœ™R[™›Ë˜][X][ÛŠXÛÛ\]Q\™XÝ[Û˜[YÚ˜[Ù™—Ô\ÚXØ[
YÚÖK“YÚ\™XÝ[Û‹ž^‹™R[™›Ë“YÚÖK“YÚ\™XÝ[Û‹ÊNÂˆÙ[™Y‚ˆÙ[YˆYš[™Y
QÒÑSÑ‘—ÔÕS‘T‘ÖJBœ™R[™›Ë˜][X][ÛXÛÛ\]Q\Ý[˜ÙSYÚ˜[Ù™—ÔÝ[™\™
™R[™›Ë›YÚÙ™œÙ]YÚÖK“YÚ˜[Ù™‹ž
NÂˆÚY™YˆQTÓQÒVT‘^ÖBœ™R[™›Ë˜][X][ÛŠXÛÛ\]Q\™XÝ[Û˜[YÚ˜[Ù™—ÒQTÊYÚÖK“YÚ\™XÝ[Û‹ž^‹™R[™›Ë“Y\ÓYÚ^\™^ÖJNÂˆÙ[ÙBœ™R[™›Ë˜][X][ÛŠXÛÛ\]Q\™XÝ[Û˜[YÚ˜[Ù™—ÔÝ[™\™
YÚÖK“YÚ\™XÝ[Û‹ž^‹™R[™›Ë“YÚÖK“YÚ\™XÝ[Û‹ËYÚÖK“YÚ]KÊNÂˆÙ[™Y‚ˆÙ[ÙBœ™R[™›Ë˜][X][ÛXÛÛ\]Q\Ý[˜ÙSYÚ˜[Ù™Š™R[™›Ë›YÚÙ™œÙ]™R[™›Ë›YÚ\Ý[˜ÙTÜ]X\™YYÚÖK“YÚ˜[Ù™‹žYÚÖK“YÚ˜[Ù™‹žJNÂˆÚY™YˆQTÓQÒVT‘^ÖBœ™R[™›Ë˜][X][ÛŠXÛÛ\]Q\™XÝ[Û˜[YÚ˜[Ù™—ÒQTÊYÚÖK“YÚ\™XÝ[Û‹ž^‹™R[™›Ë“Y\ÓYÚ^\™^ÖJNÂˆÙ[ÙBœ™R[™›Ë˜][X][ÛŠXÛÛ\]Q\™XÝ[Û˜[YÚ˜[Ù™ŠYÚÖK“YÚ\™XÝ[Û‹ž^‹™R[™›Ë“YÚÖK“YÚ\™XÝ[Û‹ËYÚÖK“YÚ]KËYÚÖK“YÚ˜[Ù™‹ž‹YÚÖK“YÚ˜[Ù™‹ÊNÂˆÙ[™Y‚ˆÙ[™Y‚ˆÙ[YˆYš[™Y
ÒS•QÒÖJBˆÚY™YˆQÒÑSÑ‘—ÑÓžÖBœ™R[™›Ë˜][X][ÛXÛÛ\]Q\Ý[˜ÙSYÚ˜[Ù™—ÑÓŠ™R[™›Ë›YÚ\Ý[˜ÙTÜ]X\™YYÚÖK“YÚ˜[Ù™‹žJNÂˆÙ[YˆYš[™Y
QÒÑSÑ‘—ÔTÒPÐSÖJBœ™R[™›Ë˜][X][ÛXÛÛ\]Q\Ý[˜ÙSYÚ˜[Ù™—Ô\ÚXØ[
™R[™›Ë›YÚ\Ý[˜ÙTÜ]X\™Y
NÂˆÙ[YˆYš[™Y
QÒÑSÑ‘—ÔÕS‘T‘ÖJBœ™R[™›Ë˜][X][ÛXÛÛ\]Q\Ý[˜ÙSYÚ˜[Ù™—ÔÝ[™\™
™R[™›Ë›YÚÙ™œÙ]YÚÖK“YÚ˜[Ù™‹ž
NÂˆÙ[ÙBœ™R[™›Ë˜][X][ÛXÛÛ\]Q\Ý[˜ÙSYÚ˜[Ù™Š™R[™›Ë›YÚÙ™œÙ]™R[™›Ë›YÚ\Ý[˜ÙTÜ]X\™YYÚÖK“YÚ˜[Ù™‹žYÚÖK“YÚ˜[Ù™‹žJNÂˆÙ[™Y‚ˆÙ[ÙBœ™R[™›Ë˜][X][ÛLKŒÂˆÙ[™Y‚ˆÚYˆYš[™Y
SRSQÒÖJBœ™R[™›Ëœ›ÝYÚ™\ÜÏ\›ÝYÚ™\ÜÎÂˆÙ[YˆYš[™Y
T‘PSQÒÖJH	‰ˆYš[™Y
T‘PSQÒTÑQ
H	‰ˆYš[™Y
T‘PSQÒÕTÔ•Q
Bœ™R[™›Ëœ›ÝYÚ™\ÜÏ\›ÝYÚ™\ÜÎÂˆÙ[ÙBœ™R[™›Ëœ›ÝYÚ™\ÜÏXY\Ý›ÝYÚ™\ÜÑœ›ÛSYÚ›Ü\Y\Ê›ÝYÚ™\ÜËYÚÖK“YÚÜXÝ[\‹˜K™R[™›Ë›YÚ\Ý[˜ÙJNÂˆÙ[™Y‚œ™R[™›Ë™Y™\ÙT›ÝYÚ™\ÜÏYY™\ÙT›ÝYÚ™\ÜÎÜ™R[™›ËœÝ\™˜XÙP[™YÏ\Ý\™˜XÙP[™YÎÂˆÚY™YˆT’QTÐÑSÑBœ™R[™›Ëš\šY\ØÙ[˜ÙR[[œÚ]OZ\šY\ØÙ[˜ÙR[[œÚ]NÂˆÙ[™Y‚ˆÚY™YˆÔ×ÕS”ÓPÑSÖBš[™›Ë™Y™\ÙU˜[œÛZ\ÜÚ[Û]™XÌÊŒ
NÂˆÙ[™Y‚ˆÚY™YˆSRSQÒÖBš[™›Ë™Y™\ÙOXÛÛ\]R[Z\Ü\šXÑY™\ÙSYÚ[™Ê™R[™›ËY™\Ù^ÖKœ™Ø‹YÚÖK“YÚÜ›Ý[™
NÂˆÙ[YˆYš[™Y
T‘PSQÒÖJH	‰ˆYš[™Y
T‘PSQÒTÑQ
H	‰ˆYš[™Y
T‘PSQÒÕTÔ•Q
Bš[™›Ë™Y™\ÙOXÛÛ\]P\™XQY™\ÙSYÚ[™Ê™R[™›ËY™\Ù^ÖKœ™ØŠNÂˆÙ[YˆYš[™Y
Ô×ÕS”ÓPÑSÖJBˆÚY›™YˆÔ×ÕS”ÓPÑSÖWÓQÐPÖBš[™›Ë™Y™\ÙOXÛÛ\]QY™\ÙSYÚ[™Ê™R[™›ËY™\Ù^ÖKœ™ØŠJŠKŒ\ÝX”Ý\™˜XÙSÝ]˜[œÛXÙ[˜ÞR[[œÚ]JNÚ[™›Ë™Y™\ÙU˜[œÛZ\ÜÚ[ÛXÛÛ\]QY™\ÙU˜[œÛZ]YYÚ[™Ê™R[™›ËY™\Ù^ÖKœ™Ø‹ÝX”Ý\™˜XÙSÝ]˜[œÛZ][˜ÙJNÈˆÙ[ÙBš[™›Ë™Y™\ÙOXÛÛ\]QY™\ÙU˜[œÛZ]YYÚ[™Ê™R[™›ËY™\Ù^ÖKœ™Ø‹ÝX”Ý\™˜XÙSÝ]˜[œÛZ][˜ÙJNÂˆÙ[™Y‚ˆÙ[ÙBš[™›Ë™Y™\ÙOXÛÛ\]QY™\ÙSYÚ[™Ê™R[™›ËY™\Ù^ÖKœ™ØŠNÂˆÙ[™Y‚ˆÚY™YˆÔPÕST•T“BˆÚYˆYš[™Y
T‘PSQÒÖJH	‰ˆYš[™Y
T‘PSQÒTÑQ
H	‰ˆYš[™Y
T‘PSQÒÕTÔ•Q
Bš[™›ËœÜXÝ[\XÛÛ\]P\™XTÜXÝ[\“YÚ[™Ê™R[™›ËYÚÖK“YÚÜXÝ[\‹œ™Ø‹ÛX\˜ÛØ]Ý]œÜXÝ[\‘[š\›Û›Y[Œ™Y›XÝ]š]SÝ]˜ÛÛÜ”™Y›XÝ[˜ÙQŽL
NÂˆÙ[ÙBˆÚYˆ
ÓÓ‘PÕÔ—ÔÔPÕST—ÓSÑSOPÓÓ‘PÕÔ—ÔÔPÕST—ÓSÑSÓÔS””ŠBžÝ™XÌÈY][œ™\Û™[\™Y›XÝ]š]SÝ]œÜXÝ[\•ÙZYÚ
™Ù]Ž”ÜXÝ[\Š™R[™›Ë•™ÝÛX\˜ÛØ]Ý]œÜXÝ[\‘[š\›Û›Y[Œ™Y›XÝ]š]SÝ]˜ÛÛÜ”™Y›XÝ[˜ÙQŽL™Y›XÝ]š]SÝ]œ›ÝYÚ™\ÜÊNÝ™XÌÈY[XÝšXÑœ™\Û™[Yœ™\Û™[ØÚXÚÑÑÖ
™R[™›Ë•™Ý™Y›XÝ]š]SÝ]™Y[XÝšXÐÛÛÜ‘Œ™Y›XÝ]š]SÝ]˜ÛÛÜ”™Y›XÝ[˜ÙQŽL
NØÛÛÜ™Yœ™\Û™[[Z^
Y[XÝšXÑœ™\Û™[Y][œ™\Û™[™Y›XÝ]š]SÝ]›Y][XÊNßBˆÙ[ÙB˜ÛÛÜ™Yœ™\Û™[Yœ™\Û™[ØÚXÚÑÑÖ
™R[™›Ë•™ÝÛX\˜ÛØ]Ý]œÜXÝ[\‘[š\›Û›Y[Œ™Y›XÝ]š]SÝ]˜ÛÛÜ”™Y›XÝ[˜ÙQŽL
NÂˆÙ[™Y‚ˆÚY›™YˆQÐPÖWÔÔPÕST—ÑS‘T‘ÖWÐÓÓ”ÑT•USÓ‚žÙ›Ø]™ÝYÝ
›Ü›X[Ë™R[™›Ë’
NÝ™XÌÈœ™\Û™[Yœ™\Û™[ØÚXÚÑÑÖ
™Ý™XÌÊ™Y›XÝ[˜ÙQŒ
KÜXÝ[\‘[š\›Û›Y[ŽL
NÚ[™›Ë™Y™\ÙJJ™XÌÊKŒ
KYœ™\Û™[
NßBˆÙ[™Y‚ˆÚY™YˆS’TÓÕ“ÔPÂš[™›ËœÜXÝ[\XÛÛ\]P[š\ÛÝ›ÜXÔÜXÝ[\“YÚ[™Ê™R[™›ËšY]Ñ\™XÝ[Û•Ë›Ü›X[Ë[š\ÛÝ›ÜXÓÝ]˜[š\ÛÝ›ÜXÕ[™Ù[[š\ÛÝ›ÜXÓÝ]˜[š\ÛÝ›ÜXÐš][™Ù[[š\ÛÝ›ÜXÓÝ]˜[š\ÛÝ›ÜKÛX\˜ÛØ]Ý]œÜXÝ[\‘[š\›Û›Y[ŒÜXÝ[\‘[š\›Û›Y[ŽLPT›ÝYÚ™\ÜÑ˜XÝÜœËžY™\Ù^ÖKœ™ØŠNÂˆÙ[ÙBš[™›ËœÜXÝ[\XÛÛ\]TÜXÝ[\“YÚ[™Ê™R[™›Ë›Ü›X[ËÛX\˜ÛØ]Ý]œÜXÝ[\‘[š\›Û›Y[ŒÛÛÜ™Yœ™\Û™[PT›ÝYÚ™\ÜÑ˜XÝÜœËžY™\Ù^ÖKœ™ØŠNÂˆÙ[™Y‚ˆÙ[™Y‚ˆÙ[™Y‚ˆÚY›™YˆT‘PSQÒÖBˆÚY™YˆÒQS‚ˆÚY™YˆÒQS—ÓS’ÕÒUS‘QÂœ™R[™›Ëœ›ÝYÚ™\ÜÏ\ÚY[“Ý]œÚY[’[[œÚ]NÂˆÙ[ÙBˆÚY™YˆSRSQÒÖBœ™R[™›Ëœ›ÝYÚ™\ÜÏ\ÚY[“Ý]œÚY[”›ÝYÚ™\ÜÎÂˆÙ[ÙBœ™R[™›Ëœ›ÝYÚ™\ÜÏXY\Ý›ÝYÚ™\ÜÑœ›ÛSYÚ›Ü\Y\ÊÚY[“Ý]œÚY[”›ÝYÚ™\ÜËYÚÖK“YÚÜXÝ[\‹˜K™R[™›Ë›YÚ\Ý[˜ÙJNÂˆÙ[™Y‚ˆÙ[™Y‚š[™›ËœÚY[XÛÛ\]TÚY[“YÚ[™Ê™R[™›Ë›Ü›X[ËÚY[“Ý]œÚY[ÛÛÜ‹ÜXÝ[\‘[š\›Û›Y[ŽLPT›ÝYÚ™\ÜÑ˜XÝÜœËžY™\Ù^ÖKœ™ØŠNÂˆÙ[™Y‚ˆÚY™YˆÓPTÓÐUˆÚY™YˆSRSQÒÖBœ™R[™›Ëœ›ÝYÚ™\ÜÏXÛX\˜ÛØ]Ý]˜ÛX\ÛØ]›ÝYÚ™\ÜÎÂˆÙ[ÙBœ™R[™›Ëœ›ÝYÚ™\ÜÏXY\Ý›ÝYÚ™\ÜÑœ›ÛSYÚ›Ü\Y\ÊÛX\˜ÛØ]Ý]˜ÛX\ÛØ]›ÝYÚ™\ÜËYÚÖK“YÚÜXÝ[\‹˜K™R[™›Ë›YÚ\Ý[˜ÙJNÂˆÙ[™Y‚š[™›Ë˜ÛX\ÛØ]XÛÛ\]PÛX\ÛØ]YÚ[™Ê™R[™›ËÛX\˜ÛØ]Ý]˜ÛX\ÛØ]›Ü›X[ËÛX\˜ÛØ]Ý]˜ÛX\ÛØ]PT›ÝYÚ™\ÜÑ˜XÝÜœËžÛX\˜ÛØ]Ý]˜ÛX\ÛØ][[œÚ]KY™\Ù^ÖKœ™ØŠNÂˆÚY™YˆÓPTÓÐUÕS•˜XœÛÜœ[ÛXÛÛ\]PÛX\ÛØ]YÚ[™ÐXœÛÜœ[ÛŠÛX\˜ÛØ]Ý]˜ÛX\ÛØ]™Ý”™Yœ˜XÝ™R[™›Ë“ÛX\˜ÛØ]Ý]˜ÛX\ÛØ]›Ü›X[ËÛX\˜ÛØ]Ý]˜ÛX\ÛØ]ÛÛÜ‹ÛX\˜ÛØ]Ý]˜ÛX\ÛØ]XÚÛ™\ÜËÛX\˜ÛØ]Ý]˜ÛX\ÛØ][[œÚ]JNÚ[™›Ë™Y™\ÙJXXœÛÜœ[ÛŽÂˆÚY™YˆÔ×ÕS”ÓPÑSÖBš[™›Ë™Y™\ÙU˜[œÛZ\ÜÚ[ÛŠXXœÛÜœ[ÛŽÂˆÙ[™Y‚ˆÚY™YˆÔPÕST•T“Bš[™›ËœÜXÝ[\ŠXXœÛÜœ[ÛŽÂˆÙ[™Y‚ˆÙ[™Y‚š[™›Ë™Y™\ÙJZ[™›Ë˜ÛX\ÛØ]ÎÂˆÚY™YˆÔ×ÕS”ÓPÑSÖBš[™›Ë™Y™\ÙU˜[œÛZ\ÜÚ[ÛŠZ[™›Ë˜ÛX\ÛØ]ÎÂˆÙ[™Y‚ˆÚY™YˆÔPÕST•T“Bš[™›ËœÜXÝ[\ŠZ[™›Ë˜ÛX\ÛØ]ÎÂˆÙ[™Y‚ˆÚY™YˆÒQS‚š[™›ËœÚY[ŠZ[™›Ë˜ÛX\ÛØ]ÎÂˆÙ[™Y‚ˆÙ[™Y‚ˆÙ[™Y‚ˆÙ[ÙBˆÚY™YˆÔÕQÒÖBˆÚY™YˆQTÓQÒVT‘^ÖBš[™›ÏXÛÛ\]RQTÔÜÝYÚ[™ÊšY]Ñ\™XÝ[Û•Ë›Ü›X[ËYÚÖK“YÚ]KYÚÖK“YÚ\™XÝ[Û‹Y™\Ù^ÖKœ™Ø‹YÚÖK“YÚÜXÝ[\‹œ™Ø‹Y™\Ù^ÖK˜KÛÜÜÚ[™\ÜËY\ÓYÚ^\™^ÖJNÂˆÙ[ÙBš[™›ÏXÛÛ\]TÜÝYÚ[™ÊšY]Ñ\™XÝ[Û•Ë›Ü›X[ËYÚÖK“YÚ]KYÚÖK“YÚ\™XÝ[Û‹Y™\Ù^ÖKœ™Ø‹YÚÖK“YÚÜXÝ[\‹œ™Ø‹Y™\Ù^ÖK˜KÛÜÜÚ[™\ÜÊNÂˆÙ[™Y‚ˆÙ[YˆYš[™Y
SRSQÒÖJBš[™›ÏXÛÛ\]R[Z\Ü\šXÓYÚ[™ÊšY]Ñ\™XÝ[Û•Ë›Ü›X[ËYÚÖK“YÚ]KY™\Ù^ÖKœ™Ø‹YÚÖK“YÚÜXÝ[\‹œ™Ø‹YÚÖK“YÚÜ›Ý[™ÛÜÜÚ[™\ÜÊNÂˆÙ[YˆYš[™Y
ÒS•QÒÖJHYš[™Y
T“QÒÖJBš[™›ÏXÛÛ\]SYÚ[™ÊšY]Ñ\™XÝ[Û•Ë›Ü›X[ËYÚÖK“YÚ]KY™\Ù^ÖKœ™Ø‹YÚÖK“YÚÜXÝ[\‹œ™Ø‹Y™\Ù^ÖK˜KÛÜÜÚ[™\ÜÊNÂˆÙ[YˆYš[™Y
T‘PSQÒÖJH	‰ˆYš[™Y
T‘PSQÒTÑQ
H	‰ˆYš[™Y
T‘PSQÒÕTÔ•Q
BˆÚYˆYš[™Y
‘PÕT‘PSQÒSRTÔÒSÓ•VT‘^ÖJBš[™›ÏXÛÛ\]P\™XSYÚ[™ÕÚ]^\™J\™XSYÚÓÌTØ[\\‹\™XSYÚÓÌ”Ø[\\‹™XÝ\™XSYÚ[Z\ÜÚ[Û•^\™^ÖKšY]Ñ\™XÝ[Û•Ë›Ü›X[Ë”ÜÚ][Û•ËYÚÖK“YÚ]Kž^‹YÚÖK“YÚÚYœ™Ø‹YÚÖK“YÚZYÚœ™Ø‹Y™\Ù^ÖKœ™Ø‹YÚÖK“YÚÜXÝ[\‹œ™Ø‹ˆÚY™YˆT‘PSQÒ“Ô“ÕQÒ‘TÔÂŒBˆÙ[ÙB”™Y›XÝ[Û’[™›ÜËžBˆÙ[™Y‚ˆÙ[ÙBš[™›ÏXÛÛ\]P\™XSYÚ[™Ê\™XSYÚÓÌTØ[\\‹\™XSYÚÓÌ”Ø[\\‹šY]Ñ\™XÝ[Û•Ë›Ü›X[Ë”ÜÚ][Û•ËYÚÖK“YÚ]Kž^‹YÚÖK“YÚÚYœ™Ø‹YÚÖK“YÚZYÚœ™Ø‹Y™\Ù^ÖKœ™Ø‹YÚÖK“YÚÜXÝ[\‹œ™Ø‹ˆÚY™YˆT‘PSQÒ“Ô“ÕQÒ‘TÔÂŒBˆÙ[ÙB”™Y›XÝ[Û’[™›ÜËžBˆÙ[™Y‚ˆÙ[™Y‚ŠNÂˆÙ[YˆYš[™Y
ÓTÕQÒÖJH	‰ˆÓTÕQÒÐUÒŒžÚ[ÛXÙR[™^[Z[ŠÙ]Û\Ý\™YÛXÙR[™^
YÚÖK”ÛXÙQ]K•šY]Ñ\
KÓTÕQÒÔÓPÑTËLJNÚ[™›ÏXÛÛ\]PÛ\Ý\™YYÚ[™ÊYÚ]U^\™^ÖK[SX\ÚÕ^\™^ÖKšY]Ñ\™XÝ[Û•Ë›Ü›X[ËYÚÖK“YÚ]K]™XÌŠYÚÖK”ÛXÙT˜[™Ù\ÖÜÛXÙR[™^JKÛÜÜÚ[™\ÜÊNßBˆÙ[™Y‚ˆÙ[™Y‚ˆÚY™Yˆ“Ò‘PÕQQÒVT‘^ÖBš[™›Ë™Y™\ÙJXÛÛ\]T›Ú™XÝ[Û•^\™QY™\ÙSYÚ[™Ê›Ú™XÝ[Û“YÚ^\™^ÖK^\™T›Ú™XÝ[Û“X]š^ÖK”ÜÚ][Û•ÊNÂˆÙ[™Y‚ˆÙ[™Y‚ˆÚY™YˆÒQÕÞÖBˆÚY™YˆÒQÕÐÔÓ^ÖB™›Üˆ
[OLÈOÒQÕÐÔÓS•SWÐÐTÐÐQTÞÖNÈJÊÊBžÂˆÚY™YˆÒQÕÐÔÓWÔ’QÒS‘QÖB™Y™žÖO]šY]Ñœ\Ý[VžÖVÚWJÝ”ÜÚ][Û‘œ›ÛPØ[Y\˜^ÖKžŽÂˆÙ[ÙB™Y™žÖO]šY]Ñœ\Ý[VžÖVÚWK]”ÜÚ][Û‘œ›ÛPØ[Y\˜^ÖKžŽÂˆÙ[™Y‚šYˆ
Y™žÖOLŠHÚ[™^ÖOZNØœ™XZÎß_BˆÚY™YˆÒQÕÐÔÓUTÑTÒQÕÓPVžÖBšYˆ
[™^ÖOL
BˆÙ[™Y‚žÂˆÚYˆYš[™Y
ÒQÕÔÑžÖJBˆÚYˆYš[™Y
ÒQÕÓÕÔUPSU^ÖJBœÚYÝÏXÛÛ\]TÚYÝÕÚ]ÔÓTÑŒJ›Ø]
[™^ÖJK”ÜÚ][Û‘œ›ÛSYÚÖVÚ[™^ÖWK‘\Y]šXÞÖVÚ[™^ÖWKÚYÝÕ^\™^ÖKYÚÖKœÚYÝÜÒ[™›ËžYÚÖKœÚYÝÜÒ[™›ËÊNÂˆÙ[YˆYš[™Y
ÒQÕÓQQUSTUPSU^ÖJBœÚYÝÏXÛÛ\]TÚYÝÕÚ]ÔÓTÑŒÊ›Ø]
[™^ÖJK”ÜÚ][Û‘œ›ÛSYÚÖVÚ[™^ÖWK‘\Y]šXÞÖVÚ[™^ÖWKÚYÝÕ^\™^ÖKYÚÖKœÚYÝÜÒ[™›Ëž^‹YÚÖKœÚYÝÜÒ[™›ËžYÚÖKœÚYÝÜÒ[™›ËÊNÂˆÙ[ÙBœÚYÝÏXÛÛ\]TÚYÝÕÚ]ÔÓTÑJ›Ø]
[™^ÖJK”ÜÚ][Û‘œ›ÛSYÚÖVÚ[™^ÖWK‘\Y]šXÞÖVÚ[™^ÖWKÚYÝÕ^\™^ÖKYÚÖKœÚYÝÜÒ[™›Ëž^‹YÚÖKœÚYÝÜÒ[™›ËžYÚÖKœÚYÝÜÒ[™›ËÊNÂˆÙ[™Y‚ˆÙ[YˆYš[™Y
ÒQÕÔÔÔÞÖJBˆÚYˆYš[™Y
ÒQÕÓÕÔUPSU^ÖJBœÚYÝÏXÛÛ\]TÚYÝÕÚ]ÔÓTÔÔÌMŠ›Ø]
[™^ÖJK”ÜÚ][Û‘œ›ÛSYÚÖVÚ[™^ÖWK‘\Y]šXÞÖVÚ[™^ÖWK\^\™^ÖKÚYÝÕ^\™^ÖKYÚÖKœÚYÝÜÒ[™›ËžKYÚÖKœÚYÝÜÒ[™›Ëž‹YÚÖKœÚYÝÜÒ[™›ËžYÚÖKœÚYÝÜÒ[™›ËËYÚÚ^™UUÛÜœ™XÝ[ÛžÖVÚ[™^ÖWK\ÛÜœ™XÝ[ÛžÖVÚ[™^ÖWK[[Xœ˜Q\šÛ™\ÜÞÖJNÂˆÙ[YˆYš[™Y
ÒQÕÓQQUSTUPSU^ÖJBœÚYÝÏXÛÛ\]TÚYÝÕÚ]ÔÓTÔÔÌÌŠ›Ø]
[™^ÖJK”ÜÚ][Û‘œ›ÛSYÚÖVÚ[™^ÖWK‘\Y]šXÞÖVÚ[™^ÖWK\^\™^ÖKÚYÝÕ^\™^ÖKYÚÖKœÚYÝÜÒ[™›ËžKYÚÖKœÚYÝÜÒ[™›Ëž‹YÚÖKœÚYÝÜÒ[™›ËžYÚÖKœÚYÝÜÒ[™›ËËYÚÚ^™UUÛÜœ™XÝ[ÛžÖVÚ[™^ÖWK\ÛÜœ™XÝ[ÛžÖVÚ[™^ÖWK[[Xœ˜Q\šÛ™\ÜÞÖJNÂˆÙ[ÙBœÚYÝÏXÛÛ\]TÚYÝÕÚ]ÔÓTÔÔÍ
›Ø]
[™^ÖJK”ÜÚ][Û‘œ›ÛSYÚÖVÚ[™^ÖWK‘\Y]šXÞÖVÚ[™^ÖWK\^\™^ÖKÚYÝÕ^\™^ÖKYÚÖKœÚYÝÜÒ[™›ËžKYÚÖKœÚYÝÜÒ[™›Ëž‹YÚÖKœÚYÝÜÒ[™›ËžYÚÖKœÚYÝÜÒ[™›ËËYÚÚ^™UUÛÜœ™XÝ[ÛžÖVÚ[™^ÖWK\ÛÜœ™XÝ[ÛžÖVÚ[™^ÖWK[[Xœ˜Q\šÛ™\ÜÞÖJNÂˆÙ[™Y‚ˆÙ[ÙBœÚYÝÏXÛÛ\]TÚYÝÐÔÓJ›Ø]
[™^ÖJK”ÜÚ][Û‘œ›ÛSYÚÖVÚ[™^ÖWK‘\Y]šXÞÖVÚ[™^ÖWKÚYÝÕ^\™^ÖKYÚÖKœÚYÝÜÒ[™›ËžYÚÖKœÚYÝÜÒ[™›ËÊNÂˆÙ[™Y‚ˆÚY™YˆÒQÕÐÔÓQP•QÞÖBœÚYÝÑXYÞÖO]™XÌÊÚYÝÊJØ\ØØYPÛÛÜœÓ][\Y\žÖVÚ[™^ÖWNÂˆÙ[™Y‚ˆÚY›™YˆÒQÕÐÔÓS“Ð“S‘ÖB™›Ø]œ\Ý[S[™ÝYœ\Ý[S[™ÝÞÖVÚ[™^ÖWNÙ›Ø]Y™”˜][ÏXÛ[\
Y™žÖKÙœ\Ý[S[™Ý‹KŠJ˜Ø\ØØYP›[™˜XÝÜžÖNÚYˆ
[™^ÖO
ÒQÕÐÔÓS•SWÐÐTÐÐQTÞÖKLJH	‰ˆY™”˜][ÏKŠBžÚ[™^ÖJÏLNÙ›Ø]™^ÚYÝÏLŽÂˆÚYˆYš[™Y
ÒQÕÔÑžÖJBˆÚYˆYš[™Y
ÒQÕÓÕÔUPSU^ÖJB›™^ÚYÝÏXÛÛ\]TÚYÝÕÚ]ÔÓTÑŒJ›Ø]
[™^ÖJK”ÜÚ][Û‘œ›ÛSYÚÖVÚ[™^ÖWK‘\Y]šXÞÖVÚ[™^ÖWKÚYÝÕ^\™^ÖKYÚÖKœÚYÝÜÒ[™›ËžYÚÖKœÚYÝÜÒ[™›ËÊNÂˆÙ[YˆYš[™Y
ÒQÕÓQQUSTUPSU^ÖJB›™^ÚYÝÏXÛÛ\]TÚYÝÕÚ]ÔÓTÑŒÊ›Ø]
[™^ÖJK”ÜÚ][Û‘œ›ÛSYÚÖVÚ[™^ÖWK‘\Y]šXÞÖVÚ[™^ÖWKÚYÝÕ^\™^ÖKYÚÖKœÚYÝÜÒ[™›Ëž^‹YÚÖKœÚYÝÜÒ[™›ËžYÚÖKœÚYÝÜÒ[™›ËÊNÂˆÙ[ÙB›™^ÚYÝÏXÛÛ\]TÚYÝÕÚ]ÔÓTÑJ›Ø]
[™^ÖJK”ÜÚ][Û‘œ›ÛSYÚÖVÚ[™^ÖWK‘\Y]šXÞÖVÚ[™^ÖWKÚYÝÕ^\™^ÖKYÚÖKœÚYÝÜÒ[™›Ëž^‹YÚÖKœÚYÝÜÒ[™›ËžYÚÖKœÚYÝÜÒ[™›ËÊNÂˆÙ[™Y‚ˆÙ[YˆYš[™Y
ÒQÕÔÔÔÞÖJBˆÚYˆYš[™Y
ÒQÕÓÕÔUPSU^ÖJB›™^ÚYÝÏXÛÛ\]TÚYÝÕÚ]ÔÓTÔÔÌMŠ›Ø]
[™^ÖJK”ÜÚ][Û‘œ›ÛSYÚÖVÚ[™^ÖWK‘\Y]šXÞÖVÚ[™^ÖWK\^\™^ÖKÚYÝÕ^\™^ÖKYÚÖKœÚYÝÜÒ[™›ËžKYÚÖKœÚYÝÜÒ[™›Ëž‹YÚÖKœÚYÝÜÒ[™›ËžYÚÖKœÚYÝÜÒ[™›ËËYÚÚ^™UUÛÜœ™XÝ[ÛžÖVÚ[™^ÖWK\ÛÜœ™XÝ[ÛžÖVÚ[™^ÖWK[[Xœ˜Q\šÛ™\ÜÞÖJNÂˆÙ[YˆYš[™Y
ÒQÕÓQQUSTUPSU^ÖJB›™^ÚYÝÏXÛÛ\]TÚYÝÕÚ]ÔÓTÔÔÌÌŠ›Ø]
[™^ÖJK”ÜÚ][Û‘œ›ÛSYÚÖVÚ[™^ÖWK‘\Y]šXÞÖVÚ[™^ÖWK\^\™^ÖKÚYÝÕ^\™^ÖKYÚÖKœÚYÝÜÒ[™›ËžKYÚÖKœÚYÝÜÒ[™›Ëž‹YÚÖKœÚYÝÜÒ[™›ËžYÚÖKœÚYÝÜÒ[™›ËËYÚÚ^™UUÛÜœ™XÝ[ÛžÖVÚ[™^ÖWK\ÛÜœ™XÝ[ÛžÖVÚ[™^ÖWK[[Xœ˜Q\šÛ™\ÜÞÖJNÂˆÙ[ÙB›™^ÚYÝÏXÛÛ\]TÚYÝÕÚ]ÔÓTÔÔÍ
›Ø]
[™^ÖJK”ÜÚ][Û‘œ›ÛSYÚÖVÚ[™^ÖWK‘\Y]šXÞÖVÚ[™^ÖWK\^\™^ÖKÚYÝÕ^\™^ÖKYÚÖKœÚYÝÜÒ[™›ËžKYÚÖKœÚYÝÜÒ[™›Ëž‹YÚÖKœÚYÝÜÒ[™›ËžYÚÖKœÚYÝÜÒ[™›ËËYÚÚ^™UUÛÜœ™XÝ[ÛžÖVÚ[™^ÖWK\ÛÜœ™XÝ[ÛžÖVÚ[™^ÖWK[[Xœ˜Q\šÛ™\ÜÞÖJNÂˆÙ[™Y‚ˆÙ[ÙB›™^ÚYÝÏXÛÛ\]TÚYÝÐÔÓJ›Ø]
[™^ÖJK”ÜÚ][Û‘œ›ÛSYÚÖVÚ[™^ÖWK‘\Y]šXÞÖVÚ[™^ÖWKÚYÝÕ^\™^ÖKYÚÖKœÚYÝÜÒ[™›ËžYÚÖKœÚYÝÜÒ[™›ËÊNÂˆÙ[™Y‚œÚYÝÏ[Z^
™^ÚYÝËÚYÝËY™”˜][ÊNÂˆÚY™YˆÒQÕÐÔÓQP•QÞÖBœÚYÝÑXYÞÖO[Z^
™XÌÊ™^ÚYÝÊJØ\ØØYPÛÛÜœÓ][\Y\žÖVÚ[™^ÖWKÚYÝÑXYÞÖKY™”˜][ÊNÂˆÙ[™Y‚ŸBˆÙ[™Y‚ŸBˆÙ[YˆYš[™Y
ÒQÕÐÓÔÑQTÓ^ÖJBˆÚYˆYš[™Y
ÒQÕÐÕP‘^ÖJBœÚYÝÏXÛÛ\]TÚYÝÕÚ]ÛÜÙQTÓPÝX™J”ÜÚ][Û•ËYÚÖK“YÚ]Kž^‹ÚYÝÕ^\™^ÖKYÚÖKœÚYÝÜÒ[™›ËžYÚÖKœÚYÝÜÒ[™›Ëž‹YÚÖK™\˜[Y\ÊNÂˆÙ[ÙBœÚYÝÏXÛÛ\]TÚYÝÕÚ]ÛÜÙQTÓJ”ÜÚ][Û‘œ›ÛSYÚÖK‘\Y]šXÞÖKÚYÝÕ^\™^ÖKYÚÖKœÚYÝÜÒ[™›ËžYÚÖKœÚYÝÜÒ[™›Ëž‹YÚÖKœÚYÝÜÒ[™›ËÊNÂˆÙ[™Y‚ˆÙ[YˆYš[™Y
ÒQÕÑTÓ^ÖJBˆÚYˆYš[™Y
ÒQÕÐÕP‘^ÖJBœÚYÝÏXÛÛ\]TÚYÝÕÚ]TÓPÝX™J”ÜÚ][Û•ËYÚÖK“YÚ]Kž^‹ÚYÝÕ^\™^ÖKYÚÖKœÚYÝÜÒ[™›ËžYÚÖKœÚYÝÜÒ[™›Ëž‹YÚÖK™\˜[Y\ÊNÂˆÙ[ÙBœÚYÝÏXÛÛ\]TÚYÝÕÚ]TÓJ”ÜÚ][Û‘œ›ÛSYÚÖK‘\Y]šXÞÖKÚYÝÕ^\™^ÖKYÚÖKœÚYÝÜÒ[™›ËžYÚÖKœÚYÝÜÒ[™›Ëž‹YÚÖKœÚYÝÜÒ[™›ËÊNÂˆÙ[™Y‚ˆÙ[YˆYš[™Y
ÒQÕÔÒTÔÓÓžÖJBˆÚYˆYš[™Y
ÒQÕÐÕP‘^ÖJBœÚYÝÏXÛÛ\]TÚYÝÕÚ]Ú\ÜÛÛ”Ø[\[™ÐÝX™J”ÜÚ][Û•ËYÚÖK“YÚ]Kž^‹ÚYÝÕ^\™^ÖKYÚÖKœÚYÝÜÒ[™›ËžKYÚÖKœÚYÝÜÒ[™›ËžYÚÖK™\˜[Y\ÊNÂˆÙ[ÙBœÚYÝÏXÛÛ\]TÚYÝÕÚ]Ú\ÜÛÛ”Ø[\[™Ê”ÜÚ][Û‘œ›ÛSYÚÖK‘\Y]šXÞÖKÚYÝÕ^\™^ÖKYÚÖKœÚYÝÜÒ[™›ËžKYÚÖKœÚYÝÜÒ[™›ËžYÚÖKœÚYÝÜÒ[™›ËÊNÂˆÙ[™Y‚ˆÙ[YˆYš[™Y
ÒQÕÔÑžÖJBˆÚYˆYš[™Y
ÒQÕÓÕÔUPSU^ÖJBœÚYÝÏXÛÛ\]TÚYÝÕÚ]ÑŒJ”ÜÚ][Û‘œ›ÛSYÚÖK‘\Y]šXÞÖKÚYÝÕ^\™^ÖKYÚÖKœÚYÝÜÒ[™›ËžYÚÖKœÚYÝÜÒ[™›ËÊNÂˆÙ[YˆYš[™Y
ÒQÕÓQQUSTUPSU^ÖJBœÚYÝÏXÛÛ\]TÚYÝÕÚ]ÑŒÊ”ÜÚ][Û‘œ›ÛSYÚÖK‘\Y]šXÞÖKÚYÝÕ^\™^ÖKYÚÖKœÚYÝÜÒ[™›Ëž^‹YÚÖKœÚYÝÜÒ[™›ËžYÚÖKœÚYÝÜÒ[™›ËÊNÂˆÙ[ÙBœÚYÝÏXÛÛ\]TÚYÝÕÚ]ÑJ”ÜÚ][Û‘œ›ÛSYÚÖK‘\Y]šXÞÖKÚYÝÕ^\™^ÖKYÚÖKœÚYÝÜÒ[™›Ëž^‹YÚÖKœÚYÝÜÒ[™›ËžYÚÖKœÚYÝÜÒ[™›ËÊNÂˆÙ[™Y‚ˆÙ[YˆYš[™Y
ÒQÕÔÔÔÞÖJBˆÚYˆYš[™Y
ÒQÕÓÕÔUPSU^ÖJBœÚYÝÏXÛÛ\]TÚYÝÕÚ]ÔÔÌMŠ”ÜÚ][Û‘œ›ÛSYÚÖK‘\Y]šXÞÖK\^\™^ÖKÚYÝÕ^\™^ÖKYÚÖKœÚYÝÜÒ[™›ËžKYÚÖKœÚYÝÜÒ[™›Ëž‹YÚÖKœÚYÝÜÒ[™›ËžYÚÖKœÚYÝÜÒ[™›ËÊNÂˆÙ[YˆYš[™Y
ÒQÕÓQQUSTUPSU^ÖJBœÚYÝÏXÛÛ\]TÚYÝÕÚ]ÔÔÌÌŠ”ÜÚ][Û‘œ›ÛSYÚÖK‘\Y]šXÞÖK\^\™^ÖKÚYÝÕ^\™^ÖKYÚÖKœÚYÝÜÒ[™›ËžKYÚÖKœÚYÝÜÒ[™›Ëž‹YÚÖKœÚYÝÜÒ[™›ËžYÚÖKœÚYÝÜÒ[™›ËÊNÂˆÙ[ÙBœÚYÝÏXÛÛ\]TÚYÝÕÚ]ÔÔÍ
”ÜÚ][Û‘œ›ÛSYÚÖK‘\Y]šXÞÖK\^\™^ÖKÚYÝÕ^\™^ÖKYÚÖKœÚYÝÜÒ[™›ËžKYÚÖKœÚYÝÜÒ[™›Ëž‹YÚÖKœÚYÝÜÒ[™›ËžYÚÖKœÚYÝÜÒ[™›ËÊNÂˆÙ[™Y‚ˆÙ[ÙBˆÚYˆYš[™Y
ÒQÕÐÕP‘^ÖJBœÚYÝÏXÛÛ\]TÚYÝÐÝX™J”ÜÚ][Û•ËYÚÖK“YÚ]Kž^‹ÚYÝÕ^\™^ÖKYÚÖKœÚYÝÜÒ[™›ËžYÚÖK™\˜[Y\ÊNÂˆÙ[ÙBœÚYÝÏXÛÛ\]TÚYÝÊ”ÜÚ][Û‘œ›ÛSYÚÖK‘\Y]šXÞÖKÚYÝÕ^\™^ÖKYÚÖKœÚYÝÜÒ[™›ËžYÚÖKœÚYÝÜÒ[™›ËÊNÂˆÙ[™Y‚ˆÙ[™Y‚ˆÚY™YˆÒQÕÓÓ“BˆÚY›™YˆÒQÕÒS•TÑBˆÙYš[™HÒQÕÒS•TÑBˆÙ[™Y‚™ÛØ˜[ÚYÝÊÏ\ÚYÝÎÜÚYÝÓYÚÛÝ[
ÏLKŒÂˆÙ[™Y‚ˆÙ[ÙBœÚYÝÏLKŽÂˆÙ[™Y‚˜YÙÔÚYÝÊÏ\ÚYÝÎÛ[SYÚÊÏLKŒÂˆÚY›™YˆÒQÕÓÓ“BˆÚY™YˆÕTÕÓUTÑT“QÒS‘Â™Y™\ÙP˜\ÙJÏXÛÛ\]PÝ\ÝÛQY™\ÙSYÚ[™Ê[™›ËY™\ÙP˜\ÙKÚYÝÊNÂˆÚY™YˆÔPÕST•T“BœÜXÝ[\˜\ÙJÏXÛÛ\]PÝ\ÝÛTÜXÝ[\“YÚ[™Ê[™›ËÜXÝ[\˜\ÙKÚYÝÊNÂˆÙ[™Y‚ˆÙ[YˆYš[™Y
QÒPT
H	‰ˆYš[™Y
QÒPTVÓQQÖJB™Y™\ÙP˜\ÙJÏ[YÚX\ÛÛÜ‹œ™ØŠœÚYÝÎÂˆÚY™YˆÔPÕST•T“BˆÚY›™YˆQÒPT“ÔÔPÕSTžÖBœÜXÝ[\˜\ÙJÏZ[™›ËœÜXÝ[\ŠœÚYÝÊ›YÚX\ÛÛÜ‹œ™ØŽÂˆÙ[™Y‚ˆÙ[™Y‚ˆÚY™YˆÓPTÓÐUˆÚY›™YˆQÒPT“ÔÔPÕSTžÖB˜ÛX\ÛØ]˜\ÙJÏZ[™›Ë˜ÛX\ÛØ]œ™ØŠœÚYÝÊ›YÚX\ÛÛÜ‹œ™ØŽÂˆÙ[™Y‚ˆÙ[™Y‚ˆÚY™YˆÒQS‚ˆÚY›™YˆQÒPT“ÔÔPÕSTžÖBœÚY[˜\ÙJÏZ[™›ËœÚY[‹œ™ØŠœÚYÝÎÂˆÙ[™Y‚ˆÙ[™Y‚ˆÙ[ÙBˆÚY™YˆÒQÕÐÔÓQP•QÞÖB™Y™\ÙP˜\ÙJÏZ[™›Ë™Y™\ÙJœÚYÝÑXYÞÖNÂˆÙ[ÙB™Y™\ÙP˜\ÙJÏZ[™›Ë™Y™\ÙJœÚYÝÎÂˆÙ[™Y‚ˆÚY™YˆÔ×ÕS”ÓPÑSÖB™Y™\ÙU˜[œÛZ\ÜÚ[Û˜\ÙJÏZ[™›Ë™Y™\ÙU˜[œÛZ\ÜÚ[ÛŠœÚYÝÎÂˆÙ[™Y‚ˆÚY™YˆÔPÕST•T“BœÜXÝ[\˜\ÙJÏZ[™›ËœÜXÝ[\ŠœÚYÝÎÂˆÙ[™Y‚ˆÚY™YˆÓPTÓÐU˜ÛX\ÛØ]˜\ÙJÏZ[™›Ë˜ÛX\ÛØ]œ™ØŠœÚYÝÎÂˆÙ[™Y‚ˆÚY™YˆÒQS‚œÚY[˜\ÙJÏZ[™›ËœÚY[‹œ™ØŠœÚYÝÎÂˆÙ[™Y‚ˆÙ[™Y‚ˆÙ[™Y‚ˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VÜ™×_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÜ™×OPSJNØÛÛœÝO^Û˜[YNœ™ËÚY\ŽS_K™ÏH›ÙÑ\œ˜YÛY[‹“OXÚY™YˆÑÐT’URPÑT™ÛÑœ˜YÑ\V[ÙÌŠ‘œ˜YÛY[\
J›ÙØ\š]ZXÑ\ÛÛœÝ[
ŒNÂˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VÛ™×_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÛ™×OT“JNØÛÛœÝSO^Û˜[YN›™ËÚY\Ž”“_KYÏH›Ú]œ˜YÛY[‹ÓOXÚY™YˆÔ‘T—ÒS‘TS‘S•ÕS”ÔT‘SÖB™›Ø]œ˜YÑ\YÛÑœ˜YÐÛÛÜ™žŽÈˆÚY™YˆÔ‘T—ÒS‘TS‘S•ÕS”ÔT‘SÖWÌM’UÂZ[[‘›Ø]\XÚÒ[ŒžMŠ™XÌŠœ˜YÑ\
JNÝ™XÌˆ[][œXÚÒ[ŒžMŠ[‘›Ø]
NÙœ˜YÑ\Y[žÂˆÙ[™Y‚š]™XÌˆœ˜YÐÛÛÜ™Z]™XÌŠÛÑœ˜YÐÛÛÜ™žJNÝ™XÌˆ\Ý\]^[™]Ú
Ú]\Ø[\\‹œ˜YÐÛÛÜ™
Kœ™ÎÝ™XÍ\Ýœ›ÛÛÛÜ]^[™]Ú
Ú]œ›ÛÛÛÜ”Ø[\\‹œ˜YÐÛÛÜ™
NÙ\œ™Ï]™XÌŠSPVÑT
NÙœ›ÛÛÛÜ[\Ýœ›ÛÛÛÜŽØ˜XÚÐÛÛÜ]™XÍ
Œ
NÂˆÚY™YˆTÑWÔ‘U‘T”ÑWÑT•Q‘‘T‚™›Ø]\\Ý\K[\Ý\žÙ›Ø]™X\™\Ý\[\Ý\žNÂˆÙ[ÙB™›Ø]™X\™\Ý\K[\Ý\žÙ›Ø]\\Ý\[\Ý\žNÂˆÙ[™Y‚™›Ø][S][\Y\LKŒ[\Ýœ›ÛÛÛÜ‹˜NÂˆÚY™YˆTÑWÔ‘U‘T”ÑWÑT•Q‘‘T‚šYˆ
œ˜YÑ\›™X\™\Ý\œ˜YÑ\\\Ý\
HÂˆÙ[ÙBšYˆ
œ˜YÑ\™X\™\Ý\œ˜YÑ\™\\Ý\
HÂˆÙ[™Y‚œ™]\›ŽßBˆÚY™YˆTÑWÔ‘U‘T”ÑWÑT•Q‘‘T‚šYˆ
œ˜YÑ\™X\™\Ý\	‰ˆœ˜YÑ\™\\Ý\
HÂˆÙ[ÙBšYˆ
œ˜YÑ\›™X\™\Ý\	‰ˆœ˜YÑ\\\Ý\
HÂˆÙ[™Y‚™\œ™Ï]™XÌŠYœ˜YÑ\œ˜YÑ\
NÜ™]\›ŽßBˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VØY×_
K’[˜ÛY\ÔÚY\œÔÝÜ™VØY×OPÓJNØÛÛœÝÕO^Û˜[YN˜YËÚY\ŽÓ_KÙÏH™Y˜][^[ÚY\ˆ‹SOXÙYš[™HÕTÕÓWÑ”QÓQS•ÑVS”ÒSÓ‚ˆÚ[˜ÛYO×ÙXÛ×ÙY˜][œ˜YÛY[‚ˆÚYˆYš[™Y
•ST
HYYš[™Y
“Ô“PS
BˆÙ^[œÚ[ÛˆÓÓÑT×ÜÝ[™\™Ù\š]˜]]™\Èˆ[˜X›BˆÙ[™Y‚ˆÚ[˜ÛYO™T\ÜÑXÛ\˜][Û–ÔÐÑS‘WÓT•ÐÓÕS•BˆÚ[˜ÛYOÚ]XÛ\˜][Û‚ˆÙYš[™HÕTÕÓWÑ”QÓQS•Ð‘QÒS‚ˆÚY™YˆÑÐT’URPÑTˆÙ^[œÚ[ÛˆÓÑVÙœ˜Y×Ù\ˆ[˜X›BˆÙ[™Y‚˜\žZ[™È™XÌÈ”ÜÚ][Û•ÎÂˆÚY™Yˆ“Ô“PS˜\žZ[™È™XÌÈ“›Ü›X[ÎÂˆÙ[™Y‚ˆÚYˆYš[™Y
‘T•VÓÓÔŠHYš[™Y
S”ÕSÑTÐÓÓÔŠH	‰ˆYš[™Y
S”ÕSÑTÊB˜\žZ[™È™XÍÛÛÜŽÂˆÙ[™Y‚ˆÚYˆYš[™Y
ÓTÕQÒÐUÒ
H	‰ˆÓTÕQÒÐUÒŒ˜\žZ[™È›Ø]•šY]Ñ\ÂˆÙ[™Y‚ˆÚ[˜ÛYOXZ[•U•˜\žZ[™ÑXÛ\˜][Û–ÌK‹×BˆÚ[˜ÛYO[\‘[˜Ý[ÛœÏ‚ˆÚ[˜ÛYO×ÙXÛ×ÛYÚœ˜YÛY[–Ì‹›X^Ú[][[™[Ý\ÓYÚ×BˆÚ[˜ÛYOYÚÑœ˜YÛY[[˜Ý[ÛœÏ‚ˆÚ[˜ÛYOÚYÝÜÑœ˜YÛY[[˜Ý[ÛœÏ‚ˆÚ[˜ÛYOØ[\\‘œ˜YÛY[XÛ\˜][ÛŠÑQ’S‘SSQWËQ‘•TÑKÕT–RS‘ÓSQWËY™\ÙKÔÐSTT“SQWËY™\ÙJBˆÚ[˜ÛYOØ[\\‘œ˜YÛY[XÛ\˜][ÛŠÑQ’S‘SSQWËSP’QS•ÕT–RS‘ÓSQWË[XšY[ÔÐSTT“SQWË[XšY[
BˆÚ[˜ÛYOØ[\\‘œ˜YÛY[XÛ\˜][ÛŠÑQ’S‘SSQWËÔPÒUKÕT–RS‘ÓSQWËÜXÚ]KÔÐSTT“SQWËÜXÚ]JBˆÚ[˜ÛYOØ[\\‘œ˜YÛY[XÛ\˜][ÛŠÑQ’S‘SSQWËSRTÔÒU‘KÕT–RS‘ÓSQWË[Z\ÜÚ]™KÔÐSTT“SQWË[Z\ÜÚ]™JBˆÚ[˜ÛYOØ[\\‘œ˜YÛY[XÛ\˜][ÛŠÑQ’S‘SSQWËQÒPTÕT–RS‘ÓSQWËYÚX\ÔÐSTT“SQWËYÚX\
BˆÚ[˜ÛYOØ[\\‘œ˜YÛY[XÛ\˜][ÛŠÑQ’S‘SSQWËPÐSÕT–RS‘ÓSQWËXØ[ÔÐSTT“SQWËXØ[
BˆÚY™Yˆ‘Q”PÕSÓ‚ˆÚY™Yˆ‘Q”PÕSÓ“PTÌÑ[šY›Ü›HØ[\\ÝX™H™Yœ˜XÝ[ÛÝX™TØ[\\ŽÂˆÙ[ÙB[šY›Ü›HØ[\\Œ‘™Yœ˜XÝ[ÛŒ‘Ø[\\ŽÂˆÙ[™Y‚ˆÙ[™Y‚ˆÚYˆYš[™Y
ÔPÕST•T“JBˆÚ[˜ÛYOØ[\\‘œ˜YÛY[XÛ\˜][ÛŠÑQ’S‘SSQWËÔPÕST‹ÕT–RS‘ÓSQWËÜXÝ[\‹ÔÐSTT“SQWËÜXÝ[\ŠBˆÙ[™Y‚ˆÚ[˜ÛYOœ™\Û™[[˜Ý[Û‚ˆÚY™Yˆ‘Q“PÕSÓ‚ˆÚY™Yˆ‘Q“PÕSÓ“PTÌÑ[šY›Ü›HØ[\\ÝX™H™Y›XÝ[ÛÝX™TØ[\\ŽÂˆÙ[ÙB[šY›Ü›HØ[\\Œ‘™Y›XÝ[ÛŒ‘Ø[\\ŽÂˆÙ[™Y‚ˆÚY™Yˆ‘Q“PÕSÓ“PTÔÒÖP“Ö˜\žZ[™È™XÌÈ”ÜÚ][Û•U•ÎÂˆÙ[ÙBˆÚYˆYš[™Y
‘Q“PÕSÓ“PTÑTURT‘PÕS‘ÕST—Ñ’VQ
HYš[™Y
‘Q“PÕSÓ“PTÓRT”“Ô‘QTURT‘PÕS‘ÕST—Ñ’VQ
B˜\žZ[™È™XÌÈ‘\™XÝ[Û•ÎÂˆÙ[™Y‚ˆÙ[™Y‚ˆÚ[˜ÛYO™Y›XÝ[Û‘[˜Ý[Û‚ˆÙ[™Y‚ˆÚ[˜ÛYO[XYÙT›ØÙ\ÜÚ[™ÑXÛ\˜][Û‚ˆÚ[˜ÛYO[XYÙT›ØÙ\ÜÚ[™Ñ[˜Ý[ÛœÏ‚ˆÚ[˜ÛYO^\™T™\]][Û‘[˜Ý[ÛœÏ‚ˆÚ[˜ÛYO[\œ˜YÛY[XZ[‘[˜Ý[ÛœÏ‚ˆÚ[˜ÛYO[\œ˜YÛY[[˜Ý[ÛœÏ‚ˆÚ[˜ÛYOÛ\[™Qœ˜YÛY[XÛ\˜][Û‚ˆÚ[˜ÛYOÙÑ\XÛ\˜][Û‚ˆÚ[˜ÛYO›ÙÑœ˜YÛY[XÛ\˜][Û‚ˆÙYš[™HÕTÕÓWÑ”QÓQS•ÑQ’S’USÓ”Â›ÚYXZ[Š›ÚY
HÂˆÙYš[™HÕTÕÓWÑ”QÓQS•ÓPRS—Ð‘QÒS‚ˆÚ[˜ÛYOÛ\[™Qœ˜YÛY[‚™XÌÈšY]Ñ\™XÝ[Û•Ï[›Ü›X[^™J‘^YTÜÚ][Û‹ž^‹]”ÜÚ][Û•ÊNÝ™XÍ˜\ÙPÛÛÜ]™XÍ
K‹K‹K‹KŠNÝ™XÌÈY™\ÙPÛÛÜ]‘Y™\ÙPÛÛÜ‹œ™ØŽÙ›Ø][O]‘Y™\ÙPÛÛÜ‹˜NÂˆÚY™Yˆ“Ô“PS™XÌÈ›Ü›X[Ï[›Ü›X[^™J“›Ü›X[ÊNÂˆÙ[ÙB™XÌÈ›Ü›X[Ï[›Ü›X[^™JÜ›ÜÜÊ™
”ÜÚ][Û•ÊK™J”ÜÚ][Û•ÊJJJ‘^YTÜÚ][Û‹ÎÂˆÙ[™Y‚ˆÚ[˜ÛYO[\œ˜YÛY[‚ˆÚY™YˆÓÔÒQQQÒS‘Â››Ü›X[ÏYÛÑœ›Û˜XÚ[™ÈÈ›Ü›X[Èˆ[›Ü›X[ÎÂˆÙ[™Y‚ˆÚY™YˆQ‘•TÑB˜˜\ÙPÛÛÜUV‘
Y™\ÙTØ[\\‹‘Y™\ÙUUŠÝ]“Ù™œÙ]
NÂˆÚYˆYš[™Y
SUTÕ
H	‰ˆYYš[™Y
SUTÕÐQ•TSSPÓÓTUUSÓ”ÊBšYˆ
˜\ÙPÛÛÜ‹˜O[PÝ]Ù™ŠB™\ØØ\™ÂˆÙ[™Y‚ˆÚY™YˆSQ”“ÓQQ‘•TÑB˜[JX˜\ÙPÛÛÜ‹˜NÂˆÙ[™Y‚ˆÙYš[™HÕTÕÓWÑ”QÓQS•ÕTUWÐSB˜˜\ÙPÛÛÜ‹œ™ØŠ]‘Y™\ÙR[™›ÜËžNÂˆÙ[™Y‚ˆÚYˆYš[™Y
PÐS
H	‰ˆYYš[™Y
PÐSÐQ•T—ÑURS
B™XÍXØ[ÛÛÜ]^\™L‘
XØ[Ø[\\‹‘XØ[UŠÝ]“Ù™œÙ]
NÂˆÚ[˜ÛYOXØ[œ˜YÛY[ŠÝ\™˜XÙP[™YË˜\ÙPÛÛÜ‹ÐSSPQPÐSÑÐSSPQPÐSÓ“ÕTÑQÊBˆÙ[™Y‚ˆÚ[˜ÛYO\™T\ÜÏ‚ˆÚYˆYš[™Y
‘T•VÓÓÔŠHYš[™Y
S”ÕSÑTÐÓÓÔŠH	‰ˆYš[™Y
S”ÕSÑTÊB˜˜\ÙPÛÛÜ‹œ™ØŠ]ÛÛÜ‹œ™ØŽÂˆÙ[™Y‚ˆÚY™YˆURS˜˜\ÙPÛÛÜ‹œ™ØX˜\ÙPÛÛÜ‹œ™ØŠŒ‹Œ
›Z^
K]Z[ÛÛÜ‹œ‹‘]Z[[™›ÜËžJNÂˆÙ[™Y‚ˆÚYˆYš[™Y
PÐS
H	‰ˆYš[™Y
PÐSÐQ•T—ÑURS
B™XÍXØ[ÛÛÜ]^\™L‘
XØ[Ø[\\‹‘XØ[UŠÝ]“Ù™œÙ]
NÂˆÚ[˜ÛYOXØ[œ˜YÛY[ŠÝ\™˜XÙP[™YË˜\ÙPÛÛÜ‹ÐSSPQPÐSÑÐSSPQPÐSÓ“ÕTÑQÊBˆÙ[™Y‚ˆÙYš[™HÕTÕÓWÑ”QÓQS•ÕTUWÑQ‘•TÑB™XÌÈ˜\ÙP[XšY[ÛÛÜ]™XÌÊK‹K‹KŠNÂˆÚY™YˆSP’QS•˜˜\ÙP[XšY[ÛÛÜUV‘
[XšY[Ø[\\‹[XšY[UŠÝ]“Ù™œÙ]
Kœ™ØŠ[XšY[[™›ÜËžNÂˆÙ[™Y‚ˆÙYš[™HÕTÕÓWÑ”QÓQS•Ð‘Q“Ô‘WÓQÒÂ™›Ø]ÛÜÜÚ[™\ÜÏ]”ÜXÝ[\ÛÛÜ‹˜NÝ™XÌÈÜXÝ[\ÛÛÜ]”ÜXÝ[\ÛÛÜ‹œ™ØŽÂˆÚY™YˆÔPÕST•T“BˆÚY™YˆÔPÕST‚™XÍÜXÝ[\“X\ÛÛÜUV‘
ÜXÝ[\”Ø[\\‹”ÜXÝ[\•UŠÝ]“Ù™œÙ]
NÜÜXÝ[\ÛÛÜ\ÜXÝ[\“X\ÛÛÜ‹œ™ØŽÂˆÚY™YˆÓÔÔÒS‘TÔÂ™ÛÜÜÚ[™\ÜÏYÛÜÜÚ[™\ÜÊœÜXÝ[\“X\ÛÛÜ‹˜NÂˆÙ[™Y‚ˆÙ[™Y‚ˆÙ[™Y‚™XÌÈY™\ÙP˜\ÙO]™XÌÊ‹‹ŠNÛYÚ[™Ò[™›È[™›ÎÂˆÚY™YˆÔPÕST•T“B™XÌÈÜXÝ[\˜\ÙO]™XÌÊ‹‹ŠNÂˆÙ[™Y‚™›Ø]ÚYÝÏLKŽÙ›Ø]YÙÔÚYÝÏLŽÙ›Ø][SYÚÏLŽÂˆÚY™YˆQÒPT™XÍYÚX\ÛÛÜUV‘
YÚX\Ø[\\‹“YÚX\UŠÝ]“Ù™œÙ]
NÂˆÚY™Yˆ‘Ð‘QÒPT›YÚX\ÛÛÜ‹œ™ØYœ›ÛT‘Ð‘
YÚX\ÛÛÜŠNÂˆÙ[™Y‚›YÚX\ÛÛÜ‹œ™ØŠ]“YÚX\[™›ÜËžNÂˆÙ[™Y‚ˆÚ[˜ÛYOYÚœ˜YÛY[–Ì‹›X^Ú[][[™[Ý\ÓYÚ×B˜YÙÔÚYÝÏXYÙÔÚYÝËÛ[SYÚÎÝ™XÍ™Yœ˜XÝ[ÛÛÛÜ]™XÍ
‹‹‹KŠNÂˆÚY™Yˆ‘Q”PÕSÓ‚™XÌÈ™Yœ˜XÝ[Û•™XÝÜ[›Ü›X[^™J™Yœ˜XÝ
]šY]Ñ\™XÝ[Û•Ë›Ü›X[Ë”™Yœ˜XÝ[Û’[™›ÜËžJJNÂˆÚY™Yˆ‘Q”PÕSÓ“PTÌÑˆÚY™YˆTÑWÓÐÐSÔ‘Q”PÕSÓ“PTÐÕP’PÂœ™Yœ˜XÝ[Û•™XÝÜ\\˜[^ÛÜœ™XÝ›Ü›X[
”ÜÚ][Û•Ë™Yœ˜XÝ[Û•™XÝÜ‹”™Yœ˜XÝ[Û”Ú^™K”™Yœ˜XÝ[Û”ÜÚ][ÛŠNÂˆÙ[™Y‚œ™Yœ˜XÝ[Û•™XÝÜ‹žO\™Yœ˜XÝ[Û•™XÝÜ‹žJ”™Yœ˜XÝ[Û’[™›ÜËÎÝ™XÍ™Yœ˜XÝ[Û“ÛÚÝ\]^\™PÝX™J™Yœ˜XÝ[ÛÝX™TØ[\\‹™Yœ˜XÝ[Û•™XÝÜŠNÚYˆ
Ý
™Yœ˜XÝ[Û•™XÝÜ‹šY]Ñ\™XÝ[Û•ÊOKŒ
HÜ™Yœ˜XÝ[ÛÛÛÜ\™Yœ˜XÝ[Û“ÛÚÝ\ßBˆÙ[ÙB™XÌÈ”™Yœ˜XÝ[Û•U•Ï]™XÌÊ™Yœ˜XÝ[Û“X]š^
ŠšY]Ê™XÍ
”ÜÚ][Û•ÊÜ™Yœ˜XÝ[Û•™XÝÜŠ”™Yœ˜XÝ[Û’[™›ÜËž‹KŒ
JJNÝ™XÌˆ™Yœ˜XÝ[ÛÛÛÜ™Ï]”™Yœ˜XÝ[Û•U•ËžKÝ”™Yœ˜XÝ[Û•U•ËžŽÜ™Yœ˜XÝ[ÛÛÛÜ™ËžOLKŒ\™Yœ˜XÝ[ÛÛÛÜ™ËžNÜ™Yœ˜XÝ[ÛÛÛÜ]^\™L‘
™Yœ˜XÝ[ÛŒ‘Ø[\\‹™Yœ˜XÝ[ÛÛÛÜ™ÊNÂˆÙ[™Y‚ˆÚY™Yˆ‘Ð‘‘Q”PÕSÓ‚œ™Yœ˜XÝ[ÛÛÛÜ‹œ™ØYœ›ÛT‘Ð‘
™Yœ˜XÝ[ÛÛÛÜŠNÂˆÙ[™Y‚ˆÚY™YˆT×Ô‘Q”PÕSÓ—ÓS‘PT‚œ™Yœ˜XÝ[ÛÛÛÜ‹œ™Ø]ÑØ[[XTÜXÙJ™Yœ˜XÝ[ÛÛÛÜ‹œ™ØŠNÂˆÙ[™Y‚œ™Yœ˜XÝ[ÛÛÛÜ‹œ™ØŠ]”™Yœ˜XÝ[Û’[™›ÜËžÂˆÙ[™Y‚™XÍ™Y›XÝ[ÛÛÛÜ]™XÍ
‹‹‹KŠNÂˆÚY™Yˆ‘Q“PÕSÓ‚™XÌÈ”™Y›XÝ[Û•U•ÏXÛÛ\]T™Y›XÝ[ÛÛÛÜ™Ê™XÍ
”ÜÚ][Û•ËKŒ
K›Ü›X[ÊNÂˆÚY™Yˆ‘Q“PÕSÓ“PTÓÔÔÒUV‚”™Y›XÝ[Û•U•ËžŠKLKŒÂˆÙ[™Y‚ˆÚY™Yˆ‘Q“PÕSÓ“PTÌÑˆÚY™Yˆ“ÕQÒ‘TÔÂ™›Ø]šX\Ï]”™Y›XÝ[Û’[™›ÜËžNÂˆÚY™YˆÔPÕST•T“BˆÚY™YˆÔPÕST‚ˆÚY™YˆÓÔÔÒS‘TÔÂ˜šX\ÊJKŒ\ÜXÝ[\“X\ÛÛÜ‹˜JNÂˆÙ[™Y‚ˆÙ[™Y‚ˆÙ[™Y‚œ™Y›XÝ[ÛÛÛÜ]^\™PÝX™J™Y›XÝ[ÛÝX™TØ[\\‹”™Y›XÝ[Û•U•ËšX\ÊNÂˆÙ[ÙBœ™Y›XÝ[ÛÛÛÜ]^\™PÝX™J™Y›XÝ[ÛÝX™TØ[\\‹”™Y›XÝ[Û•U•ÊNÂˆÙ[™Y‚ˆÙ[ÙB™XÌˆÛÛÜ™Ï]”™Y›XÝ[Û•U•ËžNÂˆÚY™Yˆ‘Q“PÕSÓ“PTÔ“Ò‘PÕSÓ‚˜ÛÛÜ™ËÏ]”™Y›XÝ[Û•U•ËžŽÂˆÙ[™Y‚˜ÛÛÜ™ËžOLKŒXÛÛÜ™ËžNÜ™Y›XÝ[ÛÛÛÜ]^\™L‘
™Y›XÝ[ÛŒ‘Ø[\\‹ÛÛÜ™ÊNÂˆÙ[™Y‚ˆÚY™Yˆ‘Ð‘‘Q“PÕSÓ‚œ™Y›XÝ[ÛÛÛÜ‹œ™ØYœ›ÛT‘Ð‘
™Y›XÝ[ÛÛÛÜŠNÂˆÙ[™Y‚ˆÚY™YˆT×Ô‘Q“PÕSÓ—ÓS‘PT‚œ™Y›XÝ[ÛÛÛÜ‹œ™Ø]ÑØ[[XTÜXÙJ™Y›XÝ[ÛÛÛÜ‹œ™ØŠNÂˆÙ[™Y‚œ™Y›XÝ[ÛÛÛÜ‹œ™ØŠ]”™Y›XÝ[Û’[™›ÜËžÂˆÚY™Yˆ‘Q“PÕSÓ‘”‘TÓ‘S™›Ø]™Y›XÝ[Û‘œ™\Û™[\›OXÛÛ\]Qœ™\Û™[\›JšY]Ñ\™XÝ[Û•Ë›Ü›X[Ë™Y›XÝ[Û”šYÚÛÛÜ‹˜K™Y›XÝ[Û“YÛÛÜ‹˜JNÂˆÚY™Yˆ‘Q“PÕSÓ‘”‘TÓ‘S”“ÓTÔPÕST‚ˆÚY™YˆÔPÕST•T“Bœ™Y›XÝ[ÛÛÛÜ‹œ™ØŠ\ÜXÝ[\ÛÛÜ‹œ™ØŠŠKŒ\™Y›XÝ[Û‘œ™\Û™[\›JJÜ™Y›XÝ[Û‘œ™\Û™[\›Jœ™Y›XÝ[Û”šYÚÛÛÜ‹œ™ØŽÂˆÙ[ÙBœ™Y›XÝ[ÛÛÛÜ‹œ™ØŠ\™Y›XÝ[Û“YÛÛÜ‹œ™ØŠŠKŒ\™Y›XÝ[Û‘œ™\Û™[\›JJÜ™Y›XÝ[Û‘œ™\Û™[\›Jœ™Y›XÝ[Û”šYÚÛÛÜ‹œ™ØŽÂˆÙ[™Y‚ˆÙ[ÙBœ™Y›XÝ[ÛÛÛÜ‹œ™ØŠ\™Y›XÝ[Û“YÛÛÜ‹œ™ØŠŠKŒ\™Y›XÝ[Û‘œ™\Û™[\›JJÜ™Y›XÝ[Û‘œ™\Û™[\›Jœ™Y›XÝ[Û”šYÚÛÛÜ‹œ™ØŽÂˆÙ[™Y‚ˆÙ[™Y‚ˆÙ[™Y‚ˆÚY™Yˆ‘Q”PÕSÓ‘”‘TÓ‘S™›Ø]™Yœ˜XÝ[Û‘œ™\Û™[\›OXÛÛ\]Qœ™\Û™[\›JšY]Ñ\™XÝ[Û•Ë›Ü›X[Ë™Yœ˜XÝ[Û”šYÚÛÛÜ‹˜K™Yœ˜XÝ[Û“YÛÛÜ‹˜JNÜ™Yœ˜XÝ[ÛÛÛÜ‹œ™ØŠ\™Yœ˜XÝ[Û“YÛÛÜ‹œ™ØŠŠKŒ\™Yœ˜XÝ[Û‘œ™\Û™[\›JJÜ™Yœ˜XÝ[Û‘œ™\Û™[\›Jœ™Yœ˜XÝ[Û”šYÚÛÛÜ‹œ™ØŽÂˆÙ[™Y‚ˆÚY™YˆÔPÒUB™XÍÜXÚ]SX\UV‘
ÜXÚ]TØ[\\‹“ÜXÚ]UUŠÝ]“Ù™œÙ]
NÂˆÚY™YˆÔPÒUT‘Ð‚›ÜXÚ]SX\œ™Ø[ÜXÚ]SX\œ™ØŠ™XÌÊŒËNKŒLJNØ[JJÜXÚ]SX\ž
ÛÜXÚ]SX\žJÛÜXÚ]SX\žŠJˆ“ÜXÚ]R[™›ÜËžNÂˆÙ[ÙB˜[J[ÜXÚ]SX\˜J“ÜXÚ]R[™›ÜËžNÂˆÙ[™Y‚ˆÙ[™Y‚ˆÚYˆYš[™Y
‘T•VSJHYš[™Y
S”ÕSÑTÐÓÓÔŠH	‰ˆYš[™Y
S”ÕSÑTÊB˜[J]ÛÛÜ‹˜NÂˆÙ[™Y‚ˆÚY™YˆÔPÒUQ”‘TÓ‘S™›Ø]ÜXÚ]Qœ™\Û™[\›OXÛÛ\]Qœ™\Û™[\›JšY]Ñ\™XÝ[Û•Ë›Ü›X[ËÜXÚ]T\Ëž‹ÜXÚ]T\ËÊNØ[JÏ[ÜXÚ]T\Ëž
ŠKŒ[ÜXÚ]Qœ™\Û™[\›JJÛÜXÚ]Qœ™\Û™[\›J›ÜXÚ]T\ËžNÂˆÙ[™Y‚ˆÚY™YˆSUTÕˆÚY™YˆSUTÕÐQ•TSSPÓÓTUUSÓ”ÂšYˆ
[O[PÝ]Ù™ŠB™\ØØ\™ÂˆÙ[™Y‚ˆÚY›™YˆSP“S‘˜[OLKŒÂˆÙ[™Y‚ˆÙ[™Y‚™XÌÈ[Z\ÜÚ]™PÛÛÜ]‘[Z\ÜÚ]™PÛÛÜŽÂˆÚY™YˆSRTÔÒU‘B™[Z\ÜÚ]™PÛÛÜŠÏUV‘
[Z\ÜÚ]™TØ[\\‹‘[Z\ÜÚ]™UUŠÝ]“Ù™œÙ]
Kœ™ØŠ‘[Z\ÜÚ]™R[™›ÜËžNÂˆÙ[™Y‚ˆÚY™YˆSRTÔÒU‘Q”‘TÓ‘S™›Ø][Z\ÜÚ]™Qœ™\Û™[\›OXÛÛ\]Qœ™\Û™[\›JšY]Ñ\™XÝ[Û•Ë›Ü›X[Ë[Z\ÜÚ]™TšYÚÛÛÜ‹˜K[Z\ÜÚ]™SYÛÛÜ‹˜JNÙ[Z\ÜÚ]™PÛÛÜŠY[Z\ÜÚ]™SYÛÛÜ‹œ™ØŠŠKŒY[Z\ÜÚ]™Qœ™\Û™[\›JJÙ[Z\ÜÚ]™Qœ™\Û™[\›J™[Z\ÜÚ]™TšYÚÛÛÜ‹œ™ØŽÂˆÙ[™Y‚ˆÚY™YˆQ‘•TÑQ”‘TÓ‘S™›Ø]Y™\ÙQœ™\Û™[\›OXÛÛ\]Qœ™\Û™[\›JšY]Ñ\™XÝ[Û•Ë›Ü›X[ËY™\ÙTšYÚÛÛÜ‹˜KY™\ÙSYÛÛÜ‹˜JNÙY™\ÙP˜\ÙJYY™\ÙSYÛÛÜ‹œ™ØŠŠKŒYY™\ÙQœ™\Û™[\›JJÙY™\ÙQœ™\Û™[\›J™Y™\ÙTšYÚÛÛÜ‹œ™ØŽÂˆÙ[™Y‚ˆÚY™YˆSRTÔÒU‘PTÒSSRSUSÓ‚™XÌÈš[˜[Y™\ÙOXÛ[\
Y™\ÙP˜\ÙJ™Y™\ÙPÛÛÜŠÝ[XšY[ÛÛÜ‹ŒKŒ
J˜˜\ÙPÛÛÜ‹œ™ØŽÂˆÙ[ÙBˆÚY™YˆS’ÑSRTÔÒU‘UÒUQ‘•TÑB™XÌÈš[˜[Y™\ÙOXÛ[\

Y™\ÙP˜\ÙJÙ[Z\ÜÚ]™PÛÛÜŠJ™Y™\ÙPÛÛÜŠÝ[XšY[ÛÛÜ‹ŒKŒ
J˜˜\ÙPÛÛÜ‹œ™ØŽÂˆÙ[ÙB™XÌÈš[˜[Y™\ÙOXÛ[\
Y™\ÙP˜\ÙJ™Y™\ÙPÛÛÜŠÙ[Z\ÜÚ]™PÛÛÜŠÝ[XšY[ÛÛÜ‹ŒKŒ
J˜˜\ÙPÛÛÜ‹œ™ØŽÂˆÙ[™Y‚ˆÙ[™Y‚ˆÚY™YˆÔPÕST•T“B™XÌÈš[˜[ÜXÝ[\\ÜXÝ[\˜\ÙJœÜXÝ[\ÛÛÜŽÂˆÚY™YˆÔPÕST“Õ‘TSB˜[OXÛ[\
[JÙÝ
š[˜[ÜXÝ[\‹™XÌÊŒËNKŒLJJK‹KŠNÂˆÙ[™Y‚ˆÙ[ÙB™XÌÈš[˜[ÜXÝ[\]™XÌÊŒ
NÂˆÙ[™Y‚ˆÚY™Yˆ‘Q“PÕSÓ“Õ‘TSB˜[OXÛ[\
[JÙÝ
™Y›XÝ[ÛÛÛÜ‹œ™Ø‹™XÌÊŒËNKŒLJJK‹KŠNÂˆÙ[™Y‚ˆÚY™YˆSRTÔÒU‘PTÒSSRSUSÓ‚™XÍÛÛÜ]™XÍ
Û[\
š[˜[Y™\ÙJ˜˜\ÙP[XšY[ÛÛÜŠÙš[˜[ÜXÝ[\ŠÜ™Y›XÝ[ÛÛÛÜ‹œ™ØŠÙ[Z\ÜÚ]™PÛÛÜŠÜ™Yœ˜XÝ[ÛÛÛÜ‹œ™Ø‹ŒKŒ
K[JNÂˆÙ[ÙB™XÍÛÛÜ]™XÍ
š[˜[Y™\ÙJ˜˜\ÙP[XšY[ÛÛÜŠÙš[˜[ÜXÝ[\ŠÜ™Y›XÝ[ÛÛÛÜ‹œ™ØŠÜ™Yœ˜XÝ[ÛÛÛÜ‹œ™Ø‹[JNÂˆÙ[™Y‚ˆÚY™YˆQÒPTˆÚY›™YˆQÒPTVÓQQˆÚY™YˆTÑSQÒPTTÔÒQÕÓPT˜ÛÛÜ‹œ™ØŠ[YÚX\ÛÛÜ‹œ™ØŽÂˆÙ[ÙB˜ÛÛÜ‹œ™ØŠÏ[YÚX\ÛÛÜ‹œ™ØŽÂˆÙ[™Y‚ˆÙ[™Y‚ˆÙ[™Y‚ˆÙYš[™HÕTÕÓWÑ”QÓQS•Ð‘Q“Ô‘WÑ“ÑÂ˜ÛÛÜ‹œ™Ø[X^
ÛÛÜ‹œ™Ø‹ŠNÂˆÚ[˜ÛYOÙÑ\œ˜YÛY[‚ˆÚ[˜ÛYO›ÙÑœ˜YÛY[‚ˆÚY™YˆSPQÑT“ÐÑTÔÒS‘ÔÔÕ“ÐÑTÔÂ˜ÛÛÜ‹œ™Ø]Ó[™X\”ÜXÙJÛÛÜ‹œ™ØŠNÂˆÙ[ÙBˆÚY™YˆSPQÑT“ÐÑTÔÒS‘Â˜ÛÛÜ‹œ™Ø]Ó[™X\”ÜXÙJÛÛÜ‹œ™ØŠNØÛÛÜX\R[XYÙT›ØÙ\ÜÚ[™ÊÛÛÜŠNÂˆÙ[™Y‚ˆÙ[™Y‚˜ÛÛÜ‹˜J]š\ÚXš[]NÂˆÚY™Yˆ‘SUSTPSB˜ÛÛÜ‹œ™ØŠXÛÛÜ‹˜NÂˆÙ[™Y‚ˆÙYš[™HÕTÕÓWÑ”QÓQS•Ð‘Q“Ô‘WÑ”QÐÓÓÔ‚ˆÚY™Yˆ‘TTÔÂˆÚYˆÐÑS‘WÓT•ÐÓÕS•Œ™›Ø]Üš]QÙ[ÛY]žR[™›ÏXÛÛÜ‹˜OŒÈKŒˆŒÂˆÚY™Yˆ‘TTÔ×ÐÓÓÔ‚™ÛÑœ˜YÑ]VÔ‘TTÔ×ÐÓÓÔ—ÒS‘VOXÛÛÜŽÈˆÙ[™Y‚ˆÚY™Yˆ‘TTÔ×ÔÔÒUSÓ‚™ÛÑœ˜YÑ]VÔ‘TTÔ×ÔÔÒUSÓ—ÒS‘VO]™XÍ
”ÜÚ][Û•ËÜš]QÙ[ÛY]žR[™›ÊNÂˆÙ[™Y‚ˆÚY™Yˆ‘TTÔ×ÓÐÐSÔÔÒUSÓ‚™ÛÑœ˜YÑ]VÔ‘TTÔ×ÓÐÐSÔÔÒUSÓ—ÒS‘VO]™XÍ
”ÜÚ][Û‹Üš]QÙ[ÛY]žR[™›ÊNÂˆÙ[™Y‚ˆÚYˆYš[™Y
‘TTÔ×Õ‘SÐÒUJB™XÌˆOJÝ\œ™[ÜÚ][Û‹žKÝÝ\œ™[ÜÚ][Û‹ÊJŒJÌNÝ™XÌˆJ”™]š[Ý\ÔÜÚ][Û‹žKÝ”™]š[Ý\ÔÜÚ][Û‹ÊJŒJÌNÝ™XÌˆ™[ØÚ]OXXœÊKXŠNÝ™[ØÚ]O]™XÌŠÝÊ™[ØÚ]KžKŒÌËŒ
KÝÊ™[ØÚ]KžKKŒÌËŒ
JJœÚYÛŠKXŠJŒJÌNÙÛÑœ˜YÑ]VÔ‘TTÔ×Õ‘SÐÒUWÒS‘VO]™XÍ
™[ØÚ]KŒÜš]QÙ[ÛY]žR[™›ÊNÂˆÙ[YˆYš[™Y
‘TTÔ×Õ‘SÐÒUWÓS‘PTŠB™XÌˆ™[ØÚ]O]™XÌŠJJŠ
”™]š[Ý\ÔÜÚ][Û‹žKÝ”™]š[Ý\ÔÜÚ][Û‹ÊKJÝ\œ™[ÜÚ][Û‹žKÝÝ\œ™[ÜÚ][Û‹ÊJNÙÛÑœ˜YÑ]VÔ‘TTÔ×Õ‘SÐÒUWÓS‘PT—ÒS‘VO]™XÍ
™[ØÚ]KŒÜš]QÙ[ÛY]žR[™›ÊNÂˆÙ[™Y‚ˆÚY™Yˆ‘TTÔ×ÒT”QPSÑB™ÛÑœ˜YÑ]VÔ‘TTÔ×ÒT”QPSÑWÒS‘VO]™XÍ
ŒŒŒÜš]QÙ[ÛY]žR[™›ÊNÈˆÙ[™Y‚ˆÚY™Yˆ‘TTÔ×ÑT™ÛÑœ˜YÑ]VÔ‘TTÔ×ÑTÒS‘VO]™XÍ
•šY]ÔÜËž‹ŒŒÜš]QÙ[ÛY]žR[™›ÊNÈˆÙ[™Y‚ˆÚY™Yˆ‘TTÔ×ÔÐÔ‘QS”ÔPÑWÑT™ÛÑœ˜YÑ]VÔ‘TTÔ×ÔÐÔ‘QS”ÔPÑWÑTÒS‘VO]™XÍ
ÛÑœ˜YÐÛÛÜ™ž‹ŒŒÜš]QÙ[ÛY]žR[™›ÊNÂˆÙ[™Y‚ˆÚY™Yˆ‘TTÔ×Ó“Ô“PSV‘QÕ’QU×ÑT™ÛÑœ˜YÑ]VÔ‘TTÔ×Ó“Ô“PSV‘QÕ’QU×ÑTÒS‘VO]™XÍ
“›Ü›UšY]Ñ\ŒŒÜš]QÙ[ÛY]žR[™›ÊNÂˆÙ[™Y‚ˆÚY™Yˆ‘TTÔ×Ó“Ô“PSˆÚY™Yˆ‘TTÔ×Ó“Ô“PSÕÓÔ“ÔPÑB™ÛÑœ˜YÑ]VÔ‘TTÔ×Ó“Ô“PSÒS‘VO]™XÍ
›Ü›X[ËÜš]QÙ[ÛY]žR[™›ÊNÂˆÙ[ÙB™ÛÑœ˜YÑ]VÔ‘TTÔ×Ó“Ô“PSÒS‘VO]™XÍ
›Ü›X[^™J
šY]Ê™XÍ
›Ü›X[ËŒ
JKœ™ØŠKÜš]QÙ[ÛY]žR[™›ÊNÂˆÙ[™Y‚ˆÙ[™Y‚ˆÚY™Yˆ‘TTÔ×ÕÓÔ“Ó“Ô“PS™ÛÑœ˜YÑ]VÔ‘TTÔ×ÕÓÔ“Ó“Ô“PSÒS‘VO]™XÍ
›Ü›X[ÊŒJÌKÜš]QÙ[ÛY]žR[™›ÊNÂˆÙ[™Y‚ˆÚY™Yˆ‘TTÔ×ÐS‘QÂ™ÛÑœ˜YÑ]VÔ‘TTÔ×ÐS‘Q×ÒS‘VO]™XÍ
˜\ÙPÛÛÜ‹œ™Ø‹Üš]QÙ[ÛY]žR[™›ÊNÂˆÙ[™Y‚ˆÚY™Yˆ‘TTÔ×ÐS‘Q×ÔÔT•™ÛÑœ˜YÑ]VÔ‘TTÔ×ÐS‘Q×ÔÔT•ÒS‘VO]™XÍ
Ü\
˜\ÙPÛÛÜ‹œ™ØŠKÜš]QÙ[ÛY]žR[™›ÊNÂˆÙ[™Y‚ˆÚY™Yˆ‘TTÔ×Ô‘Q“PÕU’UBˆÚYˆYš[™Y
ÔPÕSTŠB™ÛÑœ˜YÑ]VÔ‘TTÔ×Ô‘Q“PÕU’UWÒS‘VO]™XÍ
Ó[™X\”ÜXÙJÜXÝ[\“X\ÛÛÜŠJJÜš]QÙ[ÛY]žR[™›ÎÈˆÙ[ÙB™ÛÑœ˜YÑ]VÔ‘TTÔ×Ô‘Q“PÕU’UWÒS‘VO]™XÍ
Ó[™X\”ÜXÙJÜXÝ[\ÛÛÜŠKKŒ
JÜš]QÙ[ÛY]žR[™›ÎÂˆÙ[™Y‚ˆÙ[™Y‚ˆÙ[™Y‚ˆÙ[™Y‚ˆÚYˆYYš[™Y
‘TTÔÊHYš[™Y
ÑP‘ÓŠB™ÛÑœ˜YÐÛÛÜXÛÛÜŽÂˆÙ[™Y‚ˆÚ[˜ÛYOÚ]œ˜YÛY[‚ˆÚYˆÔ‘T—ÒS‘TS‘S•ÕS”ÔT‘SÖBšYˆ
œ˜YÑ\O[™X\™\Ý\
HÙœ›ÛÛÛÜ‹œ™ØŠÏXÛÛÜ‹œ™ØŠ˜ÛÛÜ‹˜J˜[S][\Y\ŽÙœ›ÛÛÛÜ‹˜OLKŒX[S][\Y\ŠŠKŒXÛÛÜ‹˜JNßH[ÙHØ˜XÚÐÛÛÜŠÏXÛÛÜŽßBˆÙ[™Y‚ˆÙYš[™HÕTÕÓWÑ”QÓQS•ÓPRS—ÑS‘ŸB˜ÜK”ÚY\œÔÝÜ™VÛÙ×_
K”ÚY\œÔÝÜ™VÛÙ×OSSJNØÛÛœÝUOVÖS‹S‹]‹]‹Ë“‹Ó‹Ë‹“‹S‹	‹“‹UKKUKÕK•K•KUKÕKKÕKÝ‹]KË‹K•KUKKSKPËÕWNÙ›ÜŠÛÛœÝˆÙˆUJ\K’[˜ÛY\ÔÚY\œÔÝÜ™VÜ‹›˜[YW_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÜ‹›˜[YWO\‹œÚY\ŠNØÛÛœÝO^Û˜[YN›ÙËÚY\Ž“S_KÕOSØš™XÝ™œ™Y^™JØš™XÝ™Yš[™T›Ü\J××Ü›Ý××Î›[Y˜][^[ÚY\Žœ_KÞ[X›ÛÔÝš[™ÕYËÝ˜[YNˆ“[Ù[HŸJJKÏHœØÙ[™UX›ÑXÛ\˜][Ûˆ‹OXÝXÝØÙ[™HÝšY]Ô›Ú™XÝ[ÛˆˆX]ŒÌ‹ˆÚY™YˆUSU’QUÂšY]Ô›Ú™XÝ[Û”ˆˆX]ŒÌ‹ˆÙ[™YˆšY]ÈˆX]ŒÌ‹œ›Ú™XÝ[ÛˆˆX]ŒÌ‹‘^YTÜÚ][Ûˆˆ™XÍŒÌ‹š[™\œÙT›Ú™XÝ[ÛˆˆX]ŒÌ‹NÂˆÙYš[™HÐÑS‘WÕP“Â˜\[šY›Ü›OˆØÙ[™HˆØÙ[™NÂ˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÛ×_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÛ×OQJNØÛÛœÝÝ^Û˜[YN›ËÚY\Ž‘_KÙÏH›Y\ÚX›ÑXÛ\˜][Ûˆ‹OXÝXÝY\ÚÝÛÜ›ˆX]ŒÌ‹š\ÚXš[]HˆŒÌ‹NÝ˜\[šY›Ü›OˆY\ÚˆY\ÚÂˆÙYš[™HÓÔ“ÕP“Â˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓØÙ×_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓØÙ×OTJNØÛÛœÝ^Û˜[YN˜ÙËÚY\Ž”_KÏH™Y˜][X›ÑXÛ\˜][Ûˆ‹ÓOX[šY›Ü›HY™\ÙSYÛÛÜŽˆ™XÍŽÝ[šY›Ü›HY™\ÙTšYÚÛÛÜŽˆ™XÍŽÝ[šY›Ü›HÜXÚ]T\Îˆ™XÍŽÝ[šY›Ü›H™Y›XÝ[Û“YÛÛÜŽˆ™XÍŽÝ[šY›Ü›H™Y›XÝ[Û”šYÚÛÛÜŽˆ™XÍŽÝ[šY›Ü›H™Yœ˜XÝ[Û“YÛÛÜŽˆ™XÍŽÝ[šY›Ü›H™Yœ˜XÝ[Û”šYÚÛÛÜŽˆ™XÍŽÝ[šY›Ü›H[Z\ÜÚ]™SYÛÛÜŽˆ™XÍŽÝ[šY›Ü›H[Z\ÜÚ]™TšYÚÛÛÜŽˆ™XÍŽÝ[šY›Ü›H‘Y™\ÙR[™›ÜÎˆ™XÌ™ŽÝ[šY›Ü›H[XšY[[™›ÜÎˆ™XÌ™ŽÝ[šY›Ü›H“ÜXÚ]R[™›ÜÎˆ™XÌ™ŽÝ[šY›Ü›H‘[Z\ÜÚ]™R[™›ÜÎˆ™XÌ™ŽÝ[šY›Ü›H“YÚX\[™›ÜÎˆ™XÌ™ŽÝ[šY›Ü›H”ÜXÝ[\’[™›ÜÎˆ™XÌ™ŽÝ[šY›Ü›H[\[™›ÜÎˆ™XÌÙŽÝ[šY›Ü›HY™\ÙSX]š^ˆX]ŽÝ[šY›Ü›H[XšY[X]š^ˆX]ŽÝ[šY›Ü›HÜXÚ]SX]š^ˆX]ŽÝ[šY›Ü›H[Z\ÜÚ]™SX]š^ˆX]ŽÝ[šY›Ü›HYÚX\X]š^ˆX]ŽÝ[šY›Ü›HÜXÝ[\“X]š^ˆX]ŽÝ[šY›Ü›H[\X]š^ˆX]ŽÝ[šY›Ü›H•[™Ù[ÜXÙT\˜[\Îˆ™XÌ™ŽÝ[šY›Ü›HÚ[Ú^™NˆŒÌŽÝ[šY›Ü›H[PÝ]Ù™ŽˆŒÌŽÝ[šY›Ü›H™Yœ˜XÝ[Û“X]š^ˆX]ŽÝ[šY›Ü›H”™Yœ˜XÝ[Û’[™›ÜÎˆ™XÍŽÝ[šY›Ü›H”™Yœ˜XÝ[Û”ÜÚ][ÛŽˆ™XÌÙŽÝ[šY›Ü›H”™Yœ˜XÝ[Û”Ú^™Nˆ™XÌÙŽÝ[šY›Ü›H”ÜXÝ[\ÛÛÜŽˆ™XÍŽÝ[šY›Ü›H‘[Z\ÜÚ]™PÛÛÜŽˆ™XÌÙŽÝ[šY›Ü›H‘Y™\ÙPÛÛÜŽˆ™XÍŽÝ[šY›Ü›H[XšY[ÛÛÜŽˆ™XÌÙŽÝ[šY›Ü›HØ[Y\˜R[™›Îˆ™XÍŽÝ[šY›Ü›H•^\™T™\]][Û’^[[™Ô\˜[\Îˆ™XÍŽÝ[šY›Ü›H”™Y›XÝ[Û’[™›ÜÎˆ™XÌ™ŽÝ[šY›Ü›H™Y›XÝ[Û“X]š^ˆX]ŽÝ[šY›Ü›H”™Y›XÝ[Û”ÜÚ][ÛŽˆ™XÌÙŽÝ[šY›Ü›H”™Y›XÝ[Û”Ú^™Nˆ™XÌÙŽÂˆÙYš[™HQUSÓSÕP“×ÑPÓTUSÓ‚ˆÚ[˜ÛYOØÙ[™UX›ÑXÛ\˜][Û‚ˆÚ[˜ÛYOY\ÚX›ÑXÛ\˜][Û‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÚ×_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÚ×O]ÓJNØÛÛœÝÓO^Û˜[YNšËÚY\ŽÓ_K™ÏH]]šX]QXÛ\˜][Ûˆ‹OXÚYˆYš[™Y
UžÖJH	‰ˆYYš[™Y
TÑWÕ‘T•VÔSS‘ÊB˜]šX]H]žÖNˆ™XÌ™ŽÂˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÙ™×_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÙ™×OSJNØÛÛœÝ•O^Û˜[YN™™ËÚY\Ž“_KYÏHš[\‘[˜Ý[ÛœÈ‹“OXÛÛœÝNˆŒÌLËŒMMNLLÍNMÎLÌŒÎŒÌÎÌÎMNØÛÛœÝÓ×ÔNˆŒÌM‹ŒŽÌNLÌÌMÎMNŽØÛÛœÝS—ÔNˆŒÌLKMÌÎMŒÌÎMMŽØÛÛœÝ‘PÒT“ÐÐSÔNˆŒÌLŒÌNÌNŒNÍÎLÎØÛÛœÝ‘PÒT“ÐÐSÔLŽˆŒÌLŒMNLMMMÌLNMLÍNØÛÛœÝ‘PÒT“ÐÐSÔMˆŒÌLŒÎMMÍÍÌMMNMÍÎØÛÛœÝS—ÓRSŽˆŒÌMKŽMŒKLÈ˜ÛÛœÝ[™X\‘[˜ÛÙTÝÙ\\›ÞˆŒÌL‹ŒŽØÛÛœÝØ[[XQ[˜ÛÙTÝÙ\\›ÞˆŒÌLKŒÓ[™X\‘[˜ÛÙTÝÙ\\›ÞØÛÛœÝ[Z[˜[˜ÙQ[˜ÛÙP\›Þˆ™XÌÙ]™XÌÙŠŒŒL‹ÌML‹ŒÌŒŠNØÛÛœÝ\Ú[ÛŽ™ŒÌLŒNÙ›ˆÜ]X\™JˆŒÌŠKO™ŒÌˆÜ™]\›ˆ
žßB™›ˆØ]\˜]JˆŒÌŠKO™ŒÌˆÜ™]\›ˆÛ[\
ŒKŒ
NßB™›ˆØ]\˜]U™XÌÊˆ™XÌÙŠKO™XÌÙˆÜ™]\›ˆÛ[\
™XÌÙŠ
K™XÌÙŠKŒ
JNßB™›ˆØ]\˜]Q\ÊˆŒÌŠKO™ŒÌˆÜ™]\›ˆÛ[\
\Ú[Û‹KŒ
NßB™›ˆX^\ÊˆŒÌŠKO™ŒÌˆÜ™]\›ˆX^
\Ú[ÛŠNßB™›ˆX^\Õ™XÌÊˆ™XÌÙŠKO™XÌÙˆÜ™]\›ˆX^
™XÌÙŠ\Ú[ÛŠJNßB™›ˆXœÑ\ÊˆŒÌŠKO™ŒÌˆÜ™]\›ˆXœÊ
JÑ\Ú[ÛŽßB™›ˆ˜[œÜÜÙSX]Ê[“X]š^ˆX]ÞÙŠKO›X]ÞÙˆÛ]Lˆ™XÌÙZ[“X]š^ÌNÛ]LNˆ™XÌÙZ[“X]š^ÌWNÛ]LŽˆ™XÌÙZ[“X]š^Ì—NÛ]Ý]X]š^›X]ÞÙ[X]ÞÙŠ™XÌÊLžLKžL‹ž
K™XÌÊLžKLKžKL‹žJK™XÌÊLž‹LKž‹L‹žŠBŠNÜ™]\›ˆÝ]X]š^ßB™›ˆ[™\œÙSX]Ê[“X]š^ˆX]ÞÙŠKO›X]ÞÙˆÛ]LˆŒÌZ[“X]š^ÌVÌNÛ]LNˆŒÌZ[“X]š^ÌVÌWNÛ]LŽˆŒÌZ[“X]š^ÌVÌ—NÛ]LLˆŒÌZ[“X]š^ÌWVÌNÛ]LLNˆŒÌZ[“X]š^ÌWVÌWNÛ]LLŽˆŒÌZ[“X]š^ÌWVÌ—NÛ]LŒˆŒÌZ[“X]š^Ì—VÌNÛ]LŒNˆŒÌZ[“X]š^Ì—VÌWNÛ]LŒŽˆŒÌZ[“X]š^Ì—VÌ—NÛ]ŒNˆŒÌXLŒŠ˜LLKXLLŠ˜LŒNÛ]ŒLNˆŒÌKXLŒŠ˜LL
ØLLŠ˜LŒÛ]ŒŒNˆŒÌXLŒJ˜LLXLLJ˜LŒÛ]]ˆŒÌXL
˜ŒJØLJ˜ŒLJØLŠ˜ŒŒNÜ™]\›ˆX]ÞÙŠŒKÙ]
XLŒŠ˜LJØLŠ˜LŒJKÙ]
LLŠ˜LKXLŠ˜LLJKÙ]˜ŒLKÙ]
LŒŠ˜LXLŠ˜LŒ
KÙ]
XLLŠ˜L
ØLŠ˜LL
KÙ]˜ŒŒKÙ]
XLŒJ˜L
ØLJ˜LŒ
KÙ]
LLJ˜LXLJ˜LL
KÙ]
NßBˆÚYˆTÑWÑVPÕÔÔ‘Ð—ÐÓÓ•‘T”ÒSÓ”Â™›ˆÓ[™X\”ÜXÙQ^XÝ
ÛÛÜŽˆ™XÌÙŠKO™XÌÙ‚žÛ]™X\–™\›ÔÙXÝ[ÛŽˆ™XÌÙLŒÍÌÎNLÎ
˜ÛÛÜŽÛ]™[XZ[š[™ÔÙXÝ[ÛŽˆ™XÌÙ\ÝÊŽMÎÌŽNJŠÛÛÜŠÝ™XÌÙŠŒMJJK™XÌÙŠ‹
JNÜ™]\›ˆÙ[XÝ
™[XZ[š[™ÔÙXÝ[Û‹™X\–™\›ÔÙXÝ[Û‹ÛÛÜ]™XÌÙŠŒJJNßB™›ˆÑØ[[XTÜXÙQ^XÝ
ÛÛÜŽˆ™XÌÙŠKO™XÌÙ‚žÛ]™X\–™\›ÔÙXÝ[ÛŽˆ™XÌÙLL‹ŽLŠ˜ÛÛÜŽÛ]™[XZ[š[™ÔÙXÝ[ÛŽˆ™XÌÙLKŒMJœÝÊÛÛÜ‹™XÌÙŠMŠJK]™XÌÙŠŒMJNÜ™]\›ˆÙ[XÝ
™[XZ[š[™ÔÙXÝ[Û‹™X\–™\›ÔÙXÝ[Û‹ÛÛÜ]™XÌÙŠŒÌLÌ
JNßBˆÙ[™Y‚™›ˆÓ[™X\”ÜXÙJÛÛÜŽˆŒÌŠKO™ŒÌ‚žÂˆÚYˆTÑWÑVPÕÔÔ‘Ð—ÐÓÓ•‘T”ÒSÓ”Â˜\ˆ™X\–™\›ÔÙXÝ[ÛLŒÍÌÎNLÎ
˜ÛÛÜŽÝ˜\ˆ™[XZ[š[™ÔÙXÝ[Û\ÝÊŽMÎÌŽNJŠÛÛÜŠÌŒMJK‹
NÜ™]\›ˆÙ[XÝ
™[XZ[š[™ÔÙXÝ[Û‹™X\–™\›ÔÙXÝ[Û‹ÛÛÜLŒJNÂˆÙ[ÙBœ™]\›ˆÝÊÛÛÜ‹[™X\‘[˜ÛÙTÝÙ\\›Þ
NÂˆÙ[™Y‚ŸB™›ˆÓ[™X\”ÜXÙU™XÌÊÛÛÜŽˆ™XÌÙŠKO™XÌÙ‚žÂˆÚYˆTÑWÑVPÕÔÔ‘Ð—ÐÓÓ•‘T”ÒSÓ”Âœ™]\›ˆÓ[™X\”ÜXÙQ^XÝ
ÛÛÜŠNÂˆÙ[ÙBœ™]\›ˆÝÊÛÛÜ‹™XÌÙŠ[™X\‘[˜ÛÙTÝÙ\\›Þ
JNÂˆÙ[™Y‚ŸB™›ˆÓ[™X\”ÜXÙU™XÍ
ÛÛÜŽˆ™XÍŒÌŠKO™XÍŒÌ‚žÂˆÚYˆTÑWÑVPÕÔÔ‘Ð—ÐÓÓ•‘T”ÒSÓ”Âœ™]\›ˆ™XÍŠÓ[™X\”ÜXÙQ^XÝ
ÛÛÜ‹œ™ØŠKÛÛÜ‹˜JNÂˆÙ[ÙBœ™]\›ˆ™XÍŠÝÊÛÛÜ‹œ™Ø‹™XÌÙŠ[™X\‘[˜ÛÙTÝÙ\\›Þ
JKÛÛÜ‹˜JNÂˆÙ[™Y‚ŸB™›ˆÑØ[[XTÜXÙJÛÛÜŽˆ™XÍŒÌŠKO™XÍŒÌ‚žÂˆÚYˆTÑWÑVPÕÔÔ‘Ð—ÐÓÓ•‘T”ÒSÓ”Âœ™]\›ˆ™XÍŒÌŠÑØ[[XTÜXÙQ^XÝ
ÛÛÜ‹œ™ØŠKÛÛÜ‹˜JNÂˆÙ[ÙBœ™]\›ˆ™XÍŒÌŠÝÊÛÛÜ‹œ™Ø‹™XÌÙŠØ[[XQ[˜ÛÙTÝÙ\\›Þ
JKÛÛÜ‹˜JNÂˆÙ[™Y‚ŸB™›ˆÑØ[[XTÜXÙU™XÌÊÛÛÜŽˆ™XÌÙŠKO™XÌÙ‚žÂˆÚYˆTÑWÑVPÕÔÔ‘Ð—ÐÓÓ•‘T”ÒSÓ”Âœ™]\›ˆÑØ[[XTÜXÙQ^XÝ
ÛÛÜŠNÂˆÙ[ÙBœ™]\›ˆÝÊÛÛÜ‹™XÌÙŠØ[[XQ[˜ÛÙTÝÙ\\›Þ
JNÂˆÙ[™Y‚ŸB™›ˆÜ]X\™U™XÌÊ˜[YNˆ™XÌÙŠKO™XÌÙ‚žÜ™]\›ˆ˜[YJ˜[YNßB™›ˆÝÍJ˜[YNˆŒÌŠKO™ŒÌˆÛ]ÜNˆŒÌ]˜[YJ˜[YNÜ™]\›ˆÜJœÜJ˜[YNßB™›ˆÝX›WÜ™Yœ˜XÝ
Nˆ™XÌÙ‹Žˆ™XÌÙ‹]NˆŒÌŠKO™XÌÙˆÛ]œ›Ûˆ™XÌÙ\™Yœ˜XÝ
K‹KŒÙ]JNÛ]˜˜XÚÎˆ™XÌÙ[›Ü›X[^™J™Y›XÝ
‹œ›Û
JNÜ™]\›ˆ™Yœ˜XÝ
œ›ÛS˜˜XÚË]JNßB™›ˆÙ][Z[˜[˜ÙU[˜Û[\Y
ÛÛÜŽˆ™XÌÙŠKO™ŒÌ‚žÜ™]\›ˆÝ
ÛÛÜ‹[Z[˜[˜ÙQ[˜ÛÙP\›Þ
NßB™›ˆÙ][Z[˜[˜ÙJÛÛÜŽˆ™XÌÙŠKO™ŒÌ‚žÜ™]\›ˆØ]\˜]JÙ][Z[˜[˜ÙU[˜Û[\Y
ÛÛÜŠJNßB™›ˆÙ]˜[™
ÙYYˆ™XÌŒÌŠKO™ŒÌˆÜ™]\›ˆœ˜XÝ
Ú[ŠÝ
ÙYYžH™XÌŒÌŠL‹ŽNNÎŒŒÌÊJJJÍÍNMLÊNßB™›ˆ]\ŠÙYYˆ™XÌŒÌ‹˜\šX[˜ÙP[[Ý[ˆŒÌŠKO™ŒÌˆÛ]˜[™ˆŒÌYÙ]˜[™
ÙYY
NÛ]›Ü›U˜\šX[˜ÙNˆŒÌ]˜\šX[˜ÙP[[Ý[ÌMKŒÛ]]\ŽˆŒÌ[Z^
[›Ü›U˜\šX[˜ÙK›Ü›U˜\šX[˜ÙK˜[™
NÜ™]\›ˆ]\ŽßB˜ÛÛœÝ™Ø™X^˜[™ÙNˆŒÌLMKŒÙ›ˆÔ‘Ð‘
ÛÛÜŽˆ™XÌÙŠKO™XÍŒÌˆÛ]X^‘ÐŽˆŒÌ[X^
X^
ÛÛÜ‹œ‹X^
ÛÛÜ‹™ËÛÛÜ‹˜ŠJK\Ú[ÛŠNÝ˜\ˆˆŒÌˆ[X^
™Ø™X^˜[™ÙKÛX^‘Ð‹KŠNÑXÛ[\
›ÛÜŠ
KÌMKŒ‹KŠNÝ˜\ˆ™ØŽˆ™XÌÙˆXÛÛÜ‹œ™ØŠ‘Ü™Ø]ÑØ[[XTÜXÙU™XÌÊ™ØŠNÜ™]\›ˆ™XÍŒÌŠØ]\˜]U™XÌÊ™ØŠK
NßB™›ˆœ›ÛT‘Ð‘
™Ø™ˆ™XÍŒÌŠKO™XÌÙˆÛ]™Ø]Ó[™X\”ÜXÙU™XÌÊ™Ø™œ™ØŠNÜ™]\›ˆ™Ø‹Ü™Ø™˜NßB™›ˆ\˜[^ÛÜœ™XÝ›Ü›X[
™\^ÜÎˆ™XÌÙ‹ÜšYÕ™XÎˆ™XÌÙ‹ÝX™TÚ^™Nˆ™XÌÙ‹ÝX™TÜÎˆ™XÌÙŠKO™XÌÙˆÛ][“ÜšYÕ™XÎˆ™XÌÙ]™XÌÙŠKŠKÛÜšYÕ™XÎÛ][”Ú^™Nˆ™XÌÙXÝX™TÚ^™JŒNÛ][\œÙXÐ]X^[™Nˆ™XÌÙJÝX™TÜÊÚ[”Ú^™K]™\^ÜÊJš[“ÜšYÕ™XÎÛ][\œÙXÐ]Z[”[™Nˆ™XÌÙJÝX™TÜËZ[”Ú^™K]™\^ÜÊJš[“ÜšYÕ™XÎÛ]\™Ù\Ý[\œÙXÎˆ™XÌÙ[X^
[\œÙXÐ]X^[™K[\œÙXÐ]Z[”[™JNÛ]\Ý[˜ÙNˆŒÌ[Z[ŠZ[Š\™Ù\Ý[\œÙXËž\™Ù\Ý[\œÙXËžJK\™Ù\Ý[\œÙXËžŠNÛ][\œÙXÝÜÚ][Û•ÔÎˆ™XÌÙ]™\^ÜÊÛÜšYÕ™XÊ™\Ý[˜ÙNÜ™]\›ˆ[\œÙXÝÜÚ][Û•ÔËXÝX™TÜÎßB™›ˆ\]Z\™XÝ[™Ý[\•ÐÝX™[X\\™XÝ[ÛŠ]ˆˆ™XÌ™ŠKO™XÌÙˆÝ˜\ˆÛ™Ú]YHˆŒÌ]]‹ž
•Ó×ÔKTNÝ˜\ˆ]]YHˆŒÌRS—ÔK]]‹žJ”NÝ˜\ˆ\™XÝ[Ûˆˆ™XÌÙŽÙ\™XÝ[Û‹žXÛÜÊ]]YJJœÚ[ŠÛ™Ú]YJNÙ\™XÝ[Û‹žO\Ú[Š]]YJNÙ\™XÝ[Û‹žXÛÜÊ]]YJJ˜ÛÜÊÛ™Ú]YJNÜ™]\›ˆ\™XÝ[ÛŽßB™›ˆÜ\Û[\Y
˜[YNˆŒÌŠKO™ŒÌˆÜ™]\›ˆÜ\
X^
˜[YKŠJNßB™›ˆ]™Ê˜[YNˆ™XÌÙŠKO™ŒÌˆÜ™]\›ˆÝ
˜[YK™XÌÙŠŒÌÌÌÌÌÌÌÌÊJNßB™›ˆÚ[™ÛTØØ]\•Ó][TØØ]\[™YÊš×ÜÜÎˆ™XÌÙŠKO™XÌÙˆÛ]Îˆ™XÌÙ\Ü\
X^
™XÌÙŠKŒ
K\š×ÜÜË™XÌÙŠŒ
JJNÜ™]\›ˆ
™XÌÙŠKŒ
K\ÊJŠ™XÌÙŠKŒ
K]™XÌÙŠŒLÎJJœÊKÊ™XÌÙŠKŒ
JÝ™XÌÙŠKŒMÊJœÊNßB™›ˆ][TØØ]\•ÔÚ[™ÛTØØ]\[™YÊš×Û\Îˆ™XÌÙŠKO™XÌÙˆÛ]Îˆ™XÌÙMŒMÌL™ŠÍŒŒŒÙŠœš×Û\Ë\Ü\
KNLŒMÙŠÍKŽŠœš×Û\ÊÌMËÌL™Šœš×Û\Êœš×Û\ÊNÜ™]\›ˆKŒ‹\ÊœÎßB™›ˆ][TØØ]\•ÔÚ[™ÛTØØ]\[™YÕÚ][š\ÛÊš×Û\Îˆ™XÌÙ‹[š\ÛÎˆŒÌŠKO™XÌÙˆÛ]Îˆ™XÌÙMŒMÌLŠÍŒŒŒÙŠœš×Û\Ë\Ü\
KNLŒMÙŠÍKŽŠœš×Û\ÊÌMËÌL™Šœš×Û\Êœš×Û\ÊNÜ™]\›ˆ
™XÌÙŠKŒŠK\ÊœÊKÛX^\Õ™XÌÊ™XÌÙŠKŒŠK]™XÌÙŠ[š\ÛÊJœÊœÊNßB™›ˆZ[ŒÊŽˆ™XÌÙŠKO™ŒÌˆÜ™]\›ˆZ[Š‹žZ[Š‹žK‹žŠJNßB™›ˆX^ÊŽˆ™XÌÙŠKO™ŒÌˆÜ™]\›ˆX^
‹žX^
‹žK‹žŠJNßB™›ˆZ[™›Ø]
NˆLÌŠKO™ŒÌˆÜ™]\›ˆš]Ø\ÝŒÌŠÑŽH
OŽ]JJKLKŒßB™›ˆ\ÝXÔÙ\]Y[˜ÙJœÝ]NˆLÌŠKO™XÌ™ˆÜ™]\›ˆ™XÌ™ŠZ[™›Ø]
œÝ]JŒÌŒMÍ]JKZ[™›Ø]
œÝ]JŒÍMMJJNßB˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÝY×_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÝY×OQ“JNØÛÛœÝ]^Û˜[YNYËÚY\Ž‘“_KÏHœ™T\ÜÕ™\^XÛ\˜][Ûˆ‹“OXÚY™Yˆ‘TTÔÂˆÚY™Yˆ‘TTÔ×ÓÐÐSÔÔÒUSÓ‚˜\žZ[™È”ÜÚ][Ûˆˆ™XÌÙŽÂˆÙ[™Y‚ˆÚY™Yˆ‘TTÔ×ÑT˜\žZ[™È•šY]ÔÜÎˆ™XÌÙŽÂˆÙ[™Y‚ˆÚY™Yˆ‘TTÔ×Ó“Ô“PSV‘QÕ’QU×ÑT˜\žZ[™È“›Ü›UšY]Ñ\ˆŒÌŽÂˆÙ[™Y‚ˆÚYˆYš[™Y
‘TTÔ×Õ‘SÐÒUJHYš[™Y
‘TTÔ×Õ‘SÐÒUWÓS‘PTŠB[šY›Ü›H™]š[Ý\ÕšY]Ô›Ú™XÝ[ÛŽˆX]ŽÝ˜\žZ[™ÈÝ\œ™[ÜÚ][ÛŽˆ™XÍŽÝ˜\žZ[™È”™]š[Ý\ÔÜÚ][ÛŽˆ™XÍŽÂˆÙ[™Y‚ˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÙ×_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÙ×OS“JNØÛÛœÝO^Û˜[YN™ËÚY\Ž““_KÙÏH›XZ[•U•˜\žZ[™ÑXÛ\˜][Ûˆ‹SOXÚY™YˆPRS•UžÖB˜\žZ[™È“XZ[•UžÖNˆ™XÌ™ŽÂˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓ×Ù×_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓ×Ù×OUSJNØÛÛœÝ“O^Û˜[YN—ÙËÚY\Ž•S_KYÏHœØ[\\•™\^XÛ\˜][Ûˆ‹“OXÚYˆYš[™Y
ÑQ’S‘SSQWÊH	‰ˆÑQ’S‘SSQWÑT‘PÕUOL˜\žZ[™È—ÕT–RS‘ÓSQWÕUŽˆ™XÌ™ŽÂˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÛY×_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÛY×OU“JNØÛÛœÝÕO^Û˜[YN›YËÚY\Ž•“_KÏH˜[\™\^XÛ\˜][Ûˆ‹“OXÚYˆYš[™Y
•ST
HYš[™Y
TSV
HYš[™Y
ÓPTÓÐUÐ•ST
HYš[™Y
S’TÓÕ“ÔPÊBˆÚYˆYš[™Y
S‘ÑS•
H	‰ˆYš[™Y
“Ô“PS
H˜\žZ[™È•“Œˆ™XÌÙŽÝ˜\žZ[™È•“ŒNˆ™XÌÙŽÝ˜\žZ[™È•“ŒŽˆ™XÌÙŽÂˆÙ[™Y‚ˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÜ×_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÜ×O^“JNØÛÛœÝO^Û˜[YNœËÚY\Žž“_KÙÏH›YÚžœ˜YÛY[XÛ\˜][Ûˆ‹ÓOXÚY™YˆQÒÖB[šY›Ü›H“YÚ]^ÖNˆ™XÍŽÝ[šY›Ü›H“YÚY™\Ù^ÖNˆ™XÍŽÂˆÚY™YˆÔPÕST•T“B[šY›Ü›H“YÚÜXÝ[\žÖNˆ™XÍŽÂˆÙ[ÙB˜\ˆ“YÚÜXÝ[\žÖNˆ™XÍH™XÍŠŠNÂˆÙ[™Y‚ˆÚY™YˆÒQÕÞÖBˆÚY™YˆÒQÕÐÔÓ^ÖB[šY›Ü›HYÚX]š^ÖNˆX]–ÔÒQÕÐÔÓS•SWÐÐTÐÐQTÞÖWNÝ˜\žZ[™È˜\ˆ”ÜÚ][Û‘œ›ÛSYÚÖNˆ™XÍ–ÔÒQÕÐÔÓS•SWÐÐTÐÐQTÞÖWNÝ˜\žZ[™È˜\ˆ‘\Y]šXÞÖNˆŒÌ–ÔÒQÕÐÔÓS•SWÐÐTÐÐQTÞÖWNÝ˜\žZ[™È˜\ˆ”ÜÚ][Û‘œ›ÛPØ[Y\˜^ÖNˆ™XÍŽÂˆÙ[YˆYš[™Y
ÒQÕÐÕP‘^ÖJBˆÙ[ÙB˜\žZ[™È˜\ˆ”ÜÚ][Û‘œ›ÛSYÚÖNˆ™XÍŽÝ˜\žZ[™È˜\ˆ‘\Y]šXÞÖNˆŒÌŽÝ[šY›Ü›HYÚX]š^ÖNˆX]ŽÂˆÙ[™Y‚[šY›Ü›HÚYÝÜÒ[™›ÞÖNˆ™XÍŽÝ[šY›Ü›H\˜[Y\ÞÖNˆ™XÌ™ŽÂˆÙ[™Y‚ˆÚY™YˆÔÕQÒÖB[šY›Ü›H“YÚ\™XÝ[ÛžÖNˆ™XÍŽÝ[šY›Ü›H“YÚ˜[Ù™žÖNˆ™XÍŽÂˆÙ[YˆYš[™Y
ÒS•QÒÖJB[šY›Ü›H“YÚ˜[Ù™žÖNˆ™XÍŽÂˆÙ[YˆYš[™Y
SRSQÒÖJB[šY›Ü›H“YÚÜ›Ý[™ÖNˆ™XÌÙŽÂˆÙ[™Y‚ˆÚYˆYš[™Y
T‘PSQÒÖJH	‰ˆYš[™Y
T‘PSQÒTÑQ
H	‰ˆYš[™Y
T‘PSQÒÕTÔ•Q
B[šY›Ü›H“YÚÚYÖNˆ™XÍŽÝ[šY›Ü›H“YÚZYÚÖNˆ™XÍŽÂˆÙ[™Y‚ˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÙÙ×_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÙÙ×OZÓJNØÛÛœÝUO^Û˜[YN™ÙËÚY\ŽšÓ_K™ÏH›YÚžX›ÑXÛ\˜][Ûˆ‹ÓOXÚY™YˆQÒÖBœÝXÝYÚÖBžÝ“YÚ]Nˆ™XÍ‹“YÚY™\ÙNˆ™XÍ‹“YÚÜXÝ[\Žˆ™XÍ‹ˆÚY™YˆÔÕQÒÖB“YÚ\™XÝ[ÛŽˆ™XÍ‹“YÚ˜[Ù™Žˆ™XÍ‹ˆÙ[YˆYš[™Y
ÒS•QÒÖJB“YÚ˜[Ù™Žˆ™XÍ‹ˆÙ[YˆYš[™Y
SRSQÒÖJB“YÚÜ›Ý[™ˆ™XÌÙ‹ˆÙ[YˆYš[™Y
ÓTÕQÒÖJB”ÛXÙQ]Nˆ™XÌ™‹”ÛXÙT˜[™Ù\Îˆ\œ˜^O™XÍ‹ÓTÕQÒÔÓPÑTÏ‹ˆÙ[™Y‚ˆÚYˆYš[™Y
T‘PSQÒÖJH	‰ˆYš[™Y
T‘PSQÒTÑQ
H	‰ˆYš[™Y
T‘PSQÒÕTÔ•Q
B“YÚÚYˆ™XÍ‹“YÚZYÚˆ™XÍ‹ˆÙ[™Y‚œÚYÝÜÒ[™›Îˆ™XÍ‹™\˜[Y\Îˆ™XÌ™ŸHÝ˜\[šY›Ü›OˆYÚÖHˆYÚÖNÂˆÚY™YˆÒQÕÞÖBˆÚY™YˆÒQÕÐÔÓ^ÖB[šY›Ü›HYÚX]š^ÖNˆ\œ˜^OX]‹ÒQÕÐÔÓS•SWÐÐTÐÐQTÞÖOŽÝ˜\žZ[™È”ÜÚ][Û‘œ›ÛSYÚÖWÌˆ™XÍŽÝ˜\žZ[™È‘\Y]šXÞÖWÌˆŒÌŽÝ˜\žZ[™È”ÜÚ][Û‘œ›ÛSYÚÖWÌNˆ™XÍŽÝ˜\žZ[™È‘\Y]šXÞÖWÌNˆŒÌŽÝ˜\žZ[™È”ÜÚ][Û‘œ›ÛSYÚÖWÌŽˆ™XÍŽÝ˜\žZ[™È‘\Y]šXÞÖWÌŽˆŒÌŽÝ˜\žZ[™È”ÜÚ][Û‘œ›ÛSYÚÖWÌÎˆ™XÍŽÝ˜\žZ[™È‘\Y]šXÞÖWÌÎˆŒÌŽÝ˜\žZ[™È”ÜÚ][Û‘œ›ÛPØ[Y\˜^ÖNˆ™XÍŽÂˆÙ[YˆYš[™Y
ÒQÕÐÕP‘^ÖJBˆÙ[ÙB˜\žZ[™È”ÜÚ][Û‘œ›ÛSYÚÖNˆ™XÍŽÝ˜\žZ[™È‘\Y]šXÞÖNˆŒÌŽÝ[šY›Ü›HYÚX]š^ÖNˆX]ŽÂˆÙ[™Y‚ˆÙ[™Y‚ˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÝ™×_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÝ™×OQÓJNØÛÛœÝUO^Û˜[YN™ËÚY\Ž‘Ó_KÏH›[Üœ\™Ù]Õ™\^ÛØ˜[XÛ\˜][Ûˆ‹OXÚY™YˆSÔ”T‘ÑUÂ[šY›Ü›H[Üœ\™Ù][™›Y[˜Ù\Èˆ\œ˜^OŒÌ‹•SWÓSÔ”ÒS‘“QSÑT”ÏŽÂˆÚY™YˆSÔ”T‘ÑU×ÕVT‘H[šY›Ü›H[Üœ\™Ù]^\™R[™XÙ\Èˆ\œ˜^OŒÌ‹•SWÓSÔ”ÒS‘“QSÑT”ÏŽÝ[šY›Ü›H[Üœ\™Ù]^\™R[™›Èˆ™XÌÏŒÌŽÝ˜\ˆ[Üœ\™Ù]Èˆ^\™WÌ™Ø\œ˜^OŒÌŽÙ›ˆ™XY™XÝÜŒÑœ›ÛT˜]ÔØ[\\Š\™Ù][™^ˆLÌ‹™\^[™^ˆŒÌŠKO™XÌÏŒÌ‚žÈ›]^\™UÚYˆLÌZLÌŠ[šY›Ü›\Ë›[Üœ\™Ù]^\™R[™›ËžJNÛ]NˆLÌZLÌŠ™\^[™^
KÝ^\™UÚYÛ]ˆLÌZLÌŠ™\^[™^
H	H^\™UÚYÜ™]\›ˆ^\™SØY
[Üœ\™Ù]Ë™XÌšJJKLÌŠ[šY›Ü›\Ë›[Üœ\™Ù]^\™R[™XÙ\ÖÝ\™Ù][™^JK
Kž^ŽßB™›ˆ™XY™XÝÜœ›ÛT˜]ÔØ[\\Š\™Ù][™^ˆLÌ‹™\^[™^ˆŒÌŠKO™XÍŒÌ‚žÈ›]^\™UÚYˆLÌZLÌŠ[šY›Ü›\Ë›[Üœ\™Ù]^\™R[™›ËžJNÈ›]NˆLÌZLÌŠ™\^[™^
KÝ^\™UÚYÛ]ˆLÌZLÌŠ™\^[™^
H	H^\™UÚYÜ™]\›ˆ^\™SØY
[Üœ\™Ù]Ë™XÌšJJKLÌŠ[šY›Ü›\Ë›[Üœ\™Ù]^\™R[™XÙ\ÖÝ\™Ù][™^JK
NßBˆÙ[™Y‚ˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÞ×_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÞ×OVJNØÛÛœÝ•O^Û˜[YNžËÚY\Ž–_KÙÏH›[Üœ\™Ù]Õ™\^XÛ\˜][Ûˆ‹ÓOXÚY™YˆSÔ”T‘ÑUÂˆÚY›™YˆSÔ”T‘ÑU×ÕVT‘BˆÚY™YˆSÔ”T‘ÑU×ÔÔÒUSÓ‚˜]šX]HÜÚ][ÛžÖHˆ™XÌÏŒÌŽÂˆÙ[™Y‚ˆÚY™YˆSÔ”T‘ÑU×Ó“Ô“PS˜]šX]H›Ü›X[ÖHˆ™XÌÏŒÌŽÂˆÙ[™Y‚ˆÚY™YˆSÔ”T‘ÑU×ÕS‘ÑS•˜]šX]H[™Ù[ÖHˆ™XÌÏŒÌŽÂˆÙ[™Y‚ˆÚY™YˆSÔ”T‘ÑU×ÕU‚˜]šX]H]—ÞÖHˆ™XÌŒÌŽÂˆÙ[™Y‚ˆÚY™YˆSÔ”T‘ÑU×ÕUŒ‚˜]šX]H]Œ—ÞÖHˆ™XÌŒÌŽÂˆÙ[™Y‚ˆÚY™YˆSÔ”T‘ÑU×ÐÓÓÔ‚˜]šX]HÛÛÜžÖHˆ™XÍŒÌŽÂˆÙ[™Y‚ˆÙ[YˆÖOOL[šY›Ü›H[Üœ\™Ù]ÛÝ[ˆŒÌŽÂˆÙ[™Y‚ˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÔÙ×_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÔÙ×OUÓJNØÛÛœÝUO^Û˜[YN”ÙËÚY\Ž•Ó_KÏH›ÙÑ\XÛ\˜][Ûˆ‹OXÚY™YˆÑÐT’URPÑT[šY›Ü›HÙØ\š]ZXÑ\ÛÛœÝ[ˆŒÌŽÝ˜\žZ[™È‘œ˜YÛY[\ˆŒÌŽÂˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÕ×_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÕ×ORJNØÛÛœÝ	O^Û˜[YN•ËÚY\Ž’_KYÏH™\^[[™ÑXÛ\˜][Ûˆ‹SOXÚY™YˆTÑWÕ‘T•VÔSS‘ÂˆÚY™Yˆ‘T•VÔSS‘×ÕTÑWÒS‘VÐ•Q‘‘T‚˜\ÝÜ˜YÙK™XYˆ[™XÙ\Èˆ\œ˜^OLÌŽÂˆÙ[™Y‚˜\ÝÜ˜YÙK™XYˆÜÚ][Ûˆˆ\œ˜^OŒÌŽÝ[šY›Ü›HœÜÜÚ][Û—Ú[™›Èˆ™XÍŽÂˆÚY™Yˆ“Ô“PS˜\ÝÜ˜YÙK™XYˆ›Ü›X[ˆ\œ˜^OŒÌŽÝ[šY›Ü›HœÛ›Ü›X[Ú[™›Èˆ™XÍŽÂˆÙ[™Y‚ˆÚY™YˆS‘ÑS•˜\ÝÜ˜YÙK™XYˆ[™Ù[ˆ\œ˜^OŒÌŽÝ[šY›Ü›HœÝ[™Ù[Ú[™›Èˆ™XÍŽÂˆÙ[™Y‚ˆÚY™YˆUŒB˜\ÝÜ˜YÙK™XYˆ]ˆˆ\œ˜^OŒÌŽÝ[šY›Ü›HœÝ]—Ú[™›Èˆ™XÍŽÂˆÙYš[™H”ÕUŒWÔÕTÔ•QˆÙ[™Y‚ˆÚY™YˆUŒ‚˜\ÝÜ˜YÙK™XYˆ]Œˆˆ\œ˜^OŒÌŽÝ[šY›Ü›HœÝ]Œ—Ú[™›Èˆ™XÍŽÂˆÙYš[™H”ÕUŒ—ÔÕTÔ•QˆÙ[™Y‚ˆÚY™YˆUŒÂ˜\ÝÜ˜YÙK™XYˆ]ŒÈˆ\œ˜^OŒÌŽÝ[šY›Ü›HœÝ]Œ×Ú[™›Èˆ™XÍŽÂˆÙYš[™H”ÕUŒ×ÔÕTÔ•QˆÙ[™Y‚ˆÚY™YˆU˜\ÝÜ˜YÙK™XYˆ]ˆ\œ˜^OŒÌŽÝ[šY›Ü›HœÝ]Ú[™›Èˆ™XÍŽÂˆÙYš[™H”ÕUÔÕTÔ•QˆÙ[™Y‚ˆÚY™YˆUB˜\ÝÜ˜YÙK™XYˆ]Hˆ\œ˜^OŒÌŽÝ[šY›Ü›HœÝ]WÚ[™›Èˆ™XÍŽÂˆÙYš[™H”ÕUWÔÕTÔ•QˆÙ[™Y‚ˆÚY™YˆU‚˜\ÝÜ˜YÙK™XYˆ]ˆˆ\œ˜^OŒÌŽÝ[šY›Ü›HœÝ]—Ú[™›Èˆ™XÍŽÂˆÙYš[™H”ÕU—ÔÕTÔ•QˆÙ[™Y‚ˆÚY™Yˆ‘T•VÓÓÔ‚˜\ÝÜ˜YÙK™XYˆÛÛÜˆˆ\œ˜^OŒÌŽÝ[šY›Ü›HœØÛÛÜ—Ú[™›Èˆ™XÍŽÂˆÙ[™Y‚ˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”ÏŒ˜\ÝÜ˜YÙK™XYˆX]šXÙ\Ò[™XÙ\Èˆ\œ˜^OLÌŽÝ˜\ÝÜ˜YÙK™XYˆX]šXÙ\ÕÙZYÚÈˆ\œ˜^OŒÌŽÝ[šY›Ü›HœÛX]šXÙ\Ò[™XÙ\×Ú[™›Èˆ™XÍŽÝ[šY›Ü›HœÛX]šXÙ\ÕÙZYÚ×Ú[™›Èˆ™XÍŽÂˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”Ï˜\ÝÜ˜YÙK™XYˆX]šXÙ\Ò[™XÙ\Ñ^˜Hˆ\œ˜^OLÌŽÝ˜\ÝÜ˜YÙK™XYˆX]šXÙ\ÕÙZYÚÑ^˜Hˆ\œ˜^OŒÌŽÝ[šY›Ü›HœÛX]šXÙ\Ò[™XÙ\Ñ^˜WÚ[™›Èˆ™XÍŽÝ[šY›Ü›HœÛX]šXÙ\ÕÙZYÚÑ^˜WÚ[™›Èˆ™XÍŽÂˆÙ[™Y‚ˆÙ[™Y‚™›ˆœØÛÛ™\Ñ›Ø]
ÛÜ™ˆLÌ‹ž]R[•ÛÜ™ˆLÌ‹]U\HˆLÌ‹›Ü›X[^™Yˆ›ÛÛ
KO™ŒÌˆÜÝÚ]Ú
]U\JHØØ\ÙHLLŒNˆÈ›]ÚYXž]R[•ÛÜ™
ŽNÛ]˜[YOJÛÜ™œÚY
H	ˆ‘NÛ]ÚYÛ™Y˜[YOYŒÌŠLÌŠ˜[YOJOŒJNÚYˆ
›Ü›X[^™Y
HÈ™]\›ˆÚYÛ™Y˜[YKÌLËŒÈBœ™]\›ˆÚYÛ™Y˜[YNßB˜Ø\ÙHLLŒ]NˆÈ›]ÚYXž]R[•ÛÜ™
ŽNÛ]˜[YOJÛÜ™œÚY
H	ˆ‘NÚYˆ
›Ü›X[^™Y
HÈ™]\›ˆŒÌŠ˜[YJKÌMKŒÈBœ™]\›ˆŒÌŠ˜[YJNßB˜Ø\ÙHLLŒNˆÈ›]ÚYJž]R[•ÛÜ™	ˆ‘‘‘‘‘‘‘]JJŽNÛ]˜[YOJÛÜ™œÚY
H	ˆ‘‘‘NÛ]ÚYÛ™Y˜[YOYŒÌŠLÌŠ˜[YOMJOŒMJNÚYˆ
›Ü›X[^™Y
HÈ™]\›ˆÚYÛ™Y˜[YKÌÌÍËŒÈBœ™]\›ˆÚYÛ™Y˜[YNßB˜Ø\ÙHLLŒÝNˆÈ›]ÚYJž]R[•ÛÜ™	ˆ‘‘‘‘‘‘‘]JJŽNÛ]˜[YOJÛÜ™œÚY
H	ˆ‘‘‘NÚYˆ
›Ü›X[^™Y
HÈ™]\›ˆŒÌŠ˜[YJKÍMLÍKŒÈBœ™]\›ˆŒÌŠ˜[YJNßB˜Ø\ÙHLLNˆÈœ™]\›ˆš]Ø\ÝŒÌŠÛÜ™
NßB™Y˜][ˆÈ™]\›ˆŒÈ__B™›ˆœØÛÛ\Û™[Ú^™J]U\HˆLÌŠKOLÌˆÜ™]\›ˆÙ[XÝ
Ù[XÝ
K]K]U\OOMLLŒH]U\OOMLLŒ]JKK]U\OOMLLJNßB™›ˆœÜ™XY™\^[™^
[™^ˆLÌŠKOLÌˆÂˆÚY›™Yˆ‘T•VÔSS‘×ÕTÑWÒS‘VÐ•Q‘‘T‚œ™]\›ˆ[™^ÂˆÙ[ÙBˆÚY™Yˆ‘T•VÔSS‘×ÒS‘VÐ•Q‘‘T—ÌÌ’UÂœ™]\›ˆ[™XÙ\ÖÚ[™^NÂˆÙ[ÙB›]LÌ—Ú[™^Z[™^ÌNÛ]š]ÛÙ™œÙ]J[™^	ˆ]JJŒMNÜ™]\›ˆ
[™XÙ\ÖÝLÌ—Ú[™^O˜š]ÛÙ™œÙ]
H	ˆ‘‘‘NÂˆÙ[™Y‚ˆÙ[™Y‚ŸB™›ˆœÜ™XYÜÚ][Û•˜[YJž]SÙ™œÙ]ˆLÌ‹]U\HˆLÌ‹›Ü›X[^™Yˆ›ÛÛ
KO™ŒÌˆÜ™]\›ˆœØÛÛ™\Ñ›Ø]
š]Ø\ÝLÌŠÜÚ][Û–Øž]SÙ™œÙ]ÍWJKž]SÙ™œÙ]	HK]U\K›Ü›X[^™Y
NßB™›ˆœÜ™XYÜÚ][ÛŠ[™›Èˆ™XÍ‹™\^[™^ˆLÌŠKO™XÌÙˆÛ]˜\ÙSÙ™œÙ]]LÌŠ[™›Ëž
NÛ]ÝšYO]LÌŠ[™›ËžJNÛ]]U\O]LÌŠ[™›ËžŠNÛ]›Ü›X[^™YZ[™›ËÈOHŒÛ]Ù™œÙ]X˜\ÙSÙ™œÙ]
Ý™\^[™^
œÝšYNÛ]ÜÏ]œØÛÛ\Û™[Ú^™J]U\JNÜ™]\›ˆ™XÌÙŠœÜ™XYÜÚ][Û•˜[YJÙ™œÙ]]U\K›Ü›X[^™Y
KœÜ™XYÜÚ][Û•˜[YJÙ™œÙ]
ØÜË]U\K›Ü›X[^™Y
KœÜ™XYÜÚ][Û•˜[YJÙ™œÙ]
ØÜÊŒK]U\K›Ü›X[^™Y
BŠNßBˆÚY™Yˆ“Ô“PS™›ˆœÜ™XY›Ü›X[˜[YJž]SÙ™œÙ]ˆLÌ‹]U\HˆLÌ‹›Ü›X[^™Yˆ›ÛÛ
KO™ŒÌˆÜ™]\›ˆœØÛÛ™\Ñ›Ø]
š]Ø\ÝLÌŠ›Ü›X[Øž]SÙ™œÙ]ÍWJKž]SÙ™œÙ]	HK]U\K›Ü›X[^™Y
NßB™›ˆœÜ™XY›Ü›X[
[™›Èˆ™XÍ‹™\^[™^ˆLÌŠKO™XÌÙˆÛ]˜\ÙSÙ™œÙ]]LÌŠ[™›Ëž
NÛ]ÝšYO]LÌŠ[™›ËžJNÛ]]U\O]LÌŠ[™›ËžŠNÛ]›Ü›X[^™YZ[™›ËÈOHŒÛ]Ù™œÙ]X˜\ÙSÙ™œÙ]
Ý™\^[™^
œÝšYNÛ]ÜÏ]œØÛÛ\Û™[Ú^™J]U\JNÜ™]\›ˆ™XÌÙŠœÜ™XY›Ü›X[˜[YJÙ™œÙ]]U\K›Ü›X[^™Y
KœÜ™XY›Ü›X[˜[YJÙ™œÙ]
ØÜË]U\K›Ü›X[^™Y
KœÜ™XY›Ü›X[˜[YJÙ™œÙ]
ØÜÊŒK]U\K›Ü›X[^™Y
BŠNßBˆÙ[™Y‚ˆÚY™YˆS‘ÑS•™›ˆœÜ™XY[™Ù[˜[YJž]SÙ™œÙ]ˆLÌ‹]U\HˆLÌ‹›Ü›X[^™Yˆ›ÛÛ
KO™ŒÌˆÜ™]\›ˆœØÛÛ™\Ñ›Ø]
š]Ø\ÝLÌŠ[™Ù[Øž]SÙ™œÙ]ÍWJKž]SÙ™œÙ]	HK]U\K›Ü›X[^™Y
NßB™›ˆœÜ™XY[™Ù[
[™›Èˆ™XÍ‹™\^[™^ˆLÌŠKO™XÍˆÛ]˜\ÙSÙ™œÙ]]LÌŠ[™›Ëž
NÛ]ÝšYO]LÌŠ[™›ËžJNÛ]]U\O]LÌŠ[™›ËžŠNÛ]›Ü›X[^™YZ[™›ËÈOHŒÛ]Ù™œÙ]X˜\ÙSÙ™œÙ]
Ý™\^[™^
œÝšYNÛ]ÜÏ]œØÛÛ\Û™[Ú^™J]U\JNÜ™]\›ˆ™XÍŠœÜ™XY[™Ù[˜[YJÙ™œÙ]]U\K›Ü›X[^™Y
KœÜ™XY[™Ù[˜[YJÙ™œÙ]
ØÜË]U\K›Ü›X[^™Y
KœÜ™XY[™Ù[˜[YJÙ™œÙ]
ØÜÊŒK]U\K›Ü›X[^™Y
KœÜ™XY[™Ù[˜[YJÙ™œÙ]
ØÜÊŒÝK]U\K›Ü›X[^™Y
BŠNßBˆÙ[™Y‚ˆÚY™YˆUŒB™›ˆœÜ™XYU•˜[YJž]SÙ™œÙ]ˆLÌ‹]U\HˆLÌ‹›Ü›X[^™Yˆ›ÛÛ
KO™ŒÌˆÜ™]\›ˆœØÛÛ™\Ñ›Ø]
š]Ø\ÝLÌŠ]–Øž]SÙ™œÙ]ÍWJKž]SÙ™œÙ]	HK]U\K›Ü›X[^™Y
NßB™›ˆœÜ™XYUŠ[™›Èˆ™XÍ‹™\^[™^ˆLÌŠKO™XÌ™ˆÛ]˜\ÙSÙ™œÙ]]LÌŠ[™›Ëž
NÛ]ÝšYO]LÌŠ[™›ËžJNÛ]]U\O]LÌŠ[™›ËžŠNÛ]›Ü›X[^™YZ[™›ËÈOHŒÛ]Ù™œÙ]X˜\ÙSÙ™œÙ]
Ý™\^[™^
œÝšYNÛ]ÜÏ]œØÛÛ\Û™[Ú^™J]U\JNÜ™]\›ˆ™XÌ™ŠœÜ™XYU•˜[YJÙ™œÙ]]U\K›Ü›X[^™Y
KœÜ™XYU•˜[YJÙ™œÙ]
ØÜË]U\K›Ü›X[^™Y
BŠNßBˆÙ[™Y‚ˆÚY™YˆUŒ‚™›ˆœÜ™XYUŒ•˜[YJž]SÙ™œÙ]ˆLÌ‹]U\HˆLÌ‹›Ü›X[^™Yˆ›ÛÛ
KO™ŒÌˆÜ™]\›ˆœØÛÛ™\Ñ›Ø]
š]Ø\ÝLÌŠ]Œ–Øž]SÙ™œÙ]ÍWJKž]SÙ™œÙ]	HK]U\K›Ü›X[^™Y
NßB™›ˆœÜ™XYUŒŠ[™›Èˆ™XÍ‹™\^[™^ˆLÌŠKO™XÌ™ˆÛ]˜\ÙSÙ™œÙ]]LÌŠ[™›Ëž
NÛ]ÝšYO]LÌŠ[™›ËžJNÛ]]U\O]LÌŠ[™›ËžŠNÛ]›Ü›X[^™YZ[™›ËÈOHŒÛ]Ù™œÙ]X˜\ÙSÙ™œÙ]
Ý™\^[™^
œÝšYNÛ]ÜÏ]œØÛÛ\Û™[Ú^™J]U\JNÜ™]\›ˆ™XÌ™ŠœÜ™XYUŒ•˜[YJÙ™œÙ]]U\K›Ü›X[^™Y
KœÜ™XYUŒ•˜[YJÙ™œÙ]
ØÜË]U\K›Ü›X[^™Y
BŠNßBˆÙ[™Y‚ˆÚY™YˆUŒÂ™›ˆœÜ™XYUŒÕ˜[YJž]SÙ™œÙ]ˆLÌ‹]U\HˆLÌ‹›Ü›X[^™Yˆ›ÛÛ
KO™ŒÌˆÜ™]\›ˆœØÛÛ™\Ñ›Ø]
š]Ø\ÝLÌŠ]ŒÖØž]SÙ™œÙ]ÍWJKž]SÙ™œÙ]	HK]U\K›Ü›X[^™Y
NßB™›ˆœÜ™XYUŒÊ[™›Èˆ™XÍ‹™\^[™^ˆLÌŠKO™XÌ™ˆÛ]˜\ÙSÙ™œÙ]]LÌŠ[™›Ëž
NÛ]ÝšYO]LÌŠ[™›ËžJNÛ]]U\O]LÌŠ[™›ËžŠNÛ]›Ü›X[^™YZ[™›ËÈOHŒÛ]Ù™œÙ]X˜\ÙSÙ™œÙ]
Ý™\^[™^
œÝšYNÛ]ÜÏ]œØÛÛ\Û™[Ú^™J]U\JNÜ™]\›ˆ™XÌ™ŠœÜ™XYUŒÕ˜[YJÙ™œÙ]]U\K›Ü›X[^™Y
KœÜ™XYUŒÕ˜[YJÙ™œÙ]
ØÜË]U\K›Ü›X[^™Y
BŠNßBˆÙ[™Y‚ˆÚY™YˆU™›ˆœÜ™XYU˜[YJž]SÙ™œÙ]ˆLÌ‹]U\HˆLÌ‹›Ü›X[^™Yˆ›ÛÛ
KO™ŒÌˆÜ™]\›ˆœØÛÛ™\Ñ›Ø]
š]Ø\ÝLÌŠ]Øž]SÙ™œÙ]ÍWJKž]SÙ™œÙ]	HK]U\K›Ü›X[^™Y
NßB™›ˆœÜ™XYU
[™›Èˆ™XÍ‹™\^[™^ˆLÌŠKO™XÌ™ˆÛ]˜\ÙSÙ™œÙ]]LÌŠ[™›Ëž
NÛ]ÝšYO]LÌŠ[™›ËžJNÛ]]U\O]LÌŠ[™›ËžŠNÛ]›Ü›X[^™YZ[™›ËÈOHŒÛ]Ù™œÙ]X˜\ÙSÙ™œÙ]
Ý™\^[™^
œÝšYNÛ]ÜÏ]œØÛÛ\Û™[Ú^™J]U\JNÜ™]\›ˆ™XÌ™ŠœÜ™XYU˜[YJÙ™œÙ]]U\K›Ü›X[^™Y
KœÜ™XYU˜[YJÙ™œÙ]
ØÜË]U\K›Ü›X[^™Y
BŠNßBˆÙ[™Y‚ˆÚY™YˆUB™›ˆœÜ™XYUU˜[YJž]SÙ™œÙ]ˆLÌ‹]U\HˆLÌ‹›Ü›X[^™Yˆ›ÛÛ
KO™ŒÌˆÜ™]\›ˆœØÛÛ™\Ñ›Ø]
š]Ø\ÝLÌŠ]VØž]SÙ™œÙ]ÍWJKž]SÙ™œÙ]	HK]U\K›Ü›X[^™Y
NßB™›ˆœÜ™XYUJ[™›Èˆ™XÍ‹™\^[™^ˆLÌŠKO™XÌ™ˆÛ]˜\ÙSÙ™œÙ]]LÌŠ[™›Ëž
NÛ]ÝšYO]LÌŠ[™›ËžJNÛ]]U\O]LÌŠ[™›ËžŠNÛ]›Ü›X[^™YZ[™›ËÈOHŒÛ]Ù™œÙ]X˜\ÙSÙ™œÙ]
Ý™\^[™^
œÝšYNÛ]ÜÏ]œØÛÛ\Û™[Ú^™J]U\JNÜ™]\›ˆ™XÌ™ŠœÜ™XYUU˜[YJÙ™œÙ]]U\K›Ü›X[^™Y
KœÜ™XYUU˜[YJÙ™œÙ]
ØÜË]U\K›Ü›X[^™Y
BŠNßBˆÙ[™Y‚ˆÚY™YˆU‚™›ˆœÜ™XYU•˜[YJž]SÙ™œÙ]ˆLÌ‹]U\HˆLÌ‹›Ü›X[^™Yˆ›ÛÛ
KO™ŒÌˆÜ™]\›ˆœØÛÛ™\Ñ›Ø]
š]Ø\ÝLÌŠ]–Øž]SÙ™œÙ]ÍWJKž]SÙ™œÙ]	HK]U\K›Ü›X[^™Y
NßB™›ˆœÜ™XYUŠ[™›Èˆ™XÍ‹™\^[™^ˆLÌŠKO™XÌ™ˆÛ]˜\ÙSÙ™œÙ]]LÌŠ[™›Ëž
NÛ]ÝšYO]LÌŠ[™›ËžJNÛ]]U\O]LÌŠ[™›ËžŠNÛ]›Ü›X[^™YZ[™›ËÈOHŒÛ]Ù™œÙ]X˜\ÙSÙ™œÙ]
Ý™\^[™^
œÝšYNÛ]ÜÏ]œØÛÛ\Û™[Ú^™J]U\JNÜ™]\›ˆ™XÌ™ŠœÜ™XYU•˜[YJÙ™œÙ]]U\K›Ü›X[^™Y
KœÜ™XYU•˜[YJÙ™œÙ]
ØÜË]U\K›Ü›X[^™Y
BŠNßBˆÙ[™Y‚ˆÚY™Yˆ‘T•VÓÓÔ‚™›ˆœÜ™XYÛÛÜ•˜[YJž]SÙ™œÙ]ˆLÌ‹]U\HˆLÌ‹›Ü›X[^™Yˆ›ÛÛ
KO™ŒÌˆÜ™]\›ˆœØÛÛ™\Ñ›Ø]
š]Ø\ÝLÌŠÛÛÜ–Øž]SÙ™œÙ]ÍWJKž]SÙ™œÙ]	HK]U\K›Ü›X[^™Y
NßB™›ˆœÜ™XYÛÛÜŠ[™›Èˆ™XÍ‹™\^[™^ˆLÌŠKO™XÍˆÛ]˜\ÙSÙ™œÙ]]LÌŠ[™›Ëž
NÛ]ÝšYO]LÌŠ[™›ËžJNÛ]]U\O]LÌŠ[™›ËžŠNÛ]›Ü›X[^™YZ[™›ËÈOHŒÛ]Ù™œÙ]X˜\ÙSÙ™œÙ]
Ý™\^[™^
œÝšYNÛ]ÜÏ]œØÛÛ\Û™[Ú^™J]U\JNÜ™]\›ˆ™XÍŠœÜ™XYÛÛÜ•˜[YJÙ™œÙ]]U\K›Ü›X[^™Y
KœÜ™XYÛÛÜ•˜[YJÙ™œÙ]
ØÜË]U\K›Ü›X[^™Y
KœÜ™XYÛÛÜ•˜[YJÙ™œÙ]
ØÜÊŒK]U\K›Ü›X[^™Y
KœÜ™XYÛÛÜ•˜[YJÙ™œÙ]
ØÜÊŒÝK]U\K›Ü›X[^™Y
BŠNßBˆÙ[™Y‚ˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”ÏŒ™›ˆœÜ™XYX]š^[™^˜[YJž]SÙ™œÙ]ˆLÌ‹]U\HˆLÌ‹›Ü›X[^™Yˆ›ÛÛ
KO™ŒÌˆÜ™]\›ˆœØÛÛ™\Ñ›Ø]
X]šXÙ\Ò[™XÙ\ÖØž]SÙ™œÙ]ÍWKž]SÙ™œÙ]	HK]U\K›Ü›X[^™Y
NßB™›ˆœÜ™XY›Û™R[™XÙ\Ê[™›Èˆ™XÍ‹™\^[™^ˆLÌŠKO™XÍˆÛ]˜\ÙSÙ™œÙ]]LÌŠ[™›Ëž
NÛ]ÝšYO]LÌŠ[™›ËžJNÛ]]U\O]LÌŠ[™›ËžŠNÛ]›Ü›X[^™YZ[™›ËÈOHŒÛ]Ù™œÙ]X˜\ÙSÙ™œÙ]
Ý™\^[™^
œÝšYNÛ]ÜÏ]œØÛÛ\Û™[Ú^™J]U\JNÜ™]\›ˆ™XÍŠœÜ™XYX]š^[™^˜[YJÙ™œÙ]]U\K›Ü›X[^™Y
KœÜ™XYX]š^[™^˜[YJÙ™œÙ]
ØÜË]U\K›Ü›X[^™Y
KœÜ™XYX]š^[™^˜[YJÙ™œÙ]
ØÜÊŒK]U\K›Ü›X[^™Y
KœÜ™XYX]š^[™^˜[YJÙ™œÙ]
ØÜÊŒÝK]U\K›Ü›X[^™Y
BŠNßB™›ˆœÜ™XYX]š^ÙZYÚ˜[YJž]SÙ™œÙ]ˆLÌ‹]U\HˆLÌ‹›Ü›X[^™Yˆ›ÛÛ
KO™ŒÌˆÜ™]\›ˆœØÛÛ™\Ñ›Ø]
š]Ø\ÝLÌŠX]šXÙ\ÕÙZYÚÖØž]SÙ™œÙ]ÍWJKž]SÙ™œÙ]	HK]U\K›Ü›X[^™Y
NßB™›ˆœÜ™XY›Û™UÙZYÚÊ[™›Èˆ™XÍ‹™\^[™^ˆLÌŠKO™XÍˆÛ]˜\ÙSÙ™œÙ]]LÌŠ[™›Ëž
NÛ]ÝšYO]LÌŠ[™›ËžJNÛ]]U\O]LÌŠ[™›ËžŠNÛ]›Ü›X[^™YZ[™›ËÈOHŒÛ]Ù™œÙ]X˜\ÙSÙ™œÙ]
Ý™\^[™^
œÝšYNÛ]ÜÏ]œØÛÛ\Û™[Ú^™J]U\JNÜ™]\›ˆ™XÍŠœÜ™XYX]š^ÙZYÚ˜[YJÙ™œÙ]]U\K›Ü›X[^™Y
KœÜ™XYX]š^ÙZYÚ˜[YJÙ™œÙ]
ØÜË]U\K›Ü›X[^™Y
KœÜ™XYX]š^ÙZYÚ˜[YJÙ™œÙ]
ØÜÊŒK]U\K›Ü›X[^™Y
KœÜ™XYX]š^ÙZYÚ˜[YJÙ™œÙ]
ØÜÊŒÝK]U\K›Ü›X[^™Y
BŠNßBˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”Ï™›ˆœÜ™XYX]š^[™^^˜U˜[YJž]SÙ™œÙ]ˆLÌ‹]U\HˆLÌ‹›Ü›X[^™Yˆ›ÛÛ
KO™ŒÌˆÜ™]\›ˆœØÛÛ™\Ñ›Ø]
X]šXÙ\Ò[™XÙ\Ñ^˜VØž]SÙ™œÙ]ÍWKž]SÙ™œÙ]	HK]U\K›Ü›X[^™Y
NßB™›ˆœÜ™XY›Û™R[™XÙ\Ñ^˜J[™›Èˆ™XÍ‹™\^[™^ˆLÌŠKO™XÍˆÛ]˜\ÙSÙ™œÙ]]LÌŠ[™›Ëž
NÛ]ÝšYO]LÌŠ[™›ËžJNÛ]]U\O]LÌŠ[™›ËžŠNÛ]›Ü›X[^™YZ[™›ËÈOHŒÛ]Ù™œÙ]X˜\ÙSÙ™œÙ]
Ý™\^[™^
œÝšYNÛ]ÜÏ]œØÛÛ\Û™[Ú^™J]U\JNÜ™]\›ˆ™XÍŠœÜ™XYX]š^[™^^˜U˜[YJÙ™œÙ]]U\K›Ü›X[^™Y
KœÜ™XYX]š^[™^^˜U˜[YJÙ™œÙ]
ØÜË]U\K›Ü›X[^™Y
KœÜ™XYX]š^[™^^˜U˜[YJÙ™œÙ]
ØÜÊŒK]U\K›Ü›X[^™Y
KœÜ™XYX]š^[™^^˜U˜[YJÙ™œÙ]
ØÜÊŒÝK]U\K›Ü›X[^™Y
BŠNßB™›ˆœÜ™XYX]š^ÙZYÚ^˜U˜[YJž]SÙ™œÙ]ˆLÌ‹]U\HˆLÌ‹›Ü›X[^™Yˆ›ÛÛ
KO™ŒÌˆÜ™]\›ˆœØÛÛ™\Ñ›Ø]
š]Ø\ÝLÌŠX]šXÙ\ÕÙZYÚÑ^˜VØž]SÙ™œÙ]ÍWJKž]SÙ™œÙ]	HK]U\K›Ü›X[^™Y
NßB™›ˆœÜ™XY›Û™UÙZYÚÑ^˜J[™›Èˆ™XÍ‹™\^[™^ˆLÌŠKO™XÍˆÛ]˜\ÙSÙ™œÙ]]LÌŠ[™›Ëž
NÛ]ÝšYO]LÌŠ[™›ËžJNÛ]]U\O]LÌŠ[™›ËžŠNÛ]›Ü›X[^™YZ[™›ËÈOHŒÛ]Ù™œÙ]X˜\ÙSÙ™œÙ]
Ý™\^[™^
œÝšYNÛ]ÜÏ]œØÛÛ\Û™[Ú^™J]U\JNÜ™]\›ˆ™XÍŠœÜ™XYX]š^ÙZYÚ^˜U˜[YJÙ™œÙ]]U\K›Ü›X[^™Y
KœÜ™XYX]š^ÙZYÚ^˜U˜[YJÙ™œÙ]
ØÜË]U\K›Ü›X[^™Y
KœÜ™XYX]š^ÙZYÚ^˜U˜[YJÙ™œÙ]
ØÜÊŒK]U\K›Ü›X[^™Y
KœÜ™XYX]š^ÙZYÚ^˜U˜[YJÙ™œÙ]
ØÜÊŒÝK]U\K›Ü›X[^™Y
BŠNßBˆÙ[™Y‚ˆÙ[™Y‚ˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÑY×_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÑY×OVSJNØÛÛœÝ•O^Û˜[YN‘YËÚY\Ž–S_KYÏH™\^[[™Õ™\^‹SOXÚY™YˆTÑWÕ‘T•VÔSS‘Â›]œ™\^[™^ˆLÌ]œÜ™XY™\^[™^
™\^[œ]Ë™\^[™^
NÜÜÚ][Û•\]Y]œÜ™XYÜÚ][ÛŠ[šY›Ü›\ËœÜÜÚ][Û—Ú[™›Ëœ™\^[™^
NÂˆÚY™Yˆ“Ô“PS››Ü›X[\]Y]œÜ™XY›Ü›X[
[šY›Ü›\ËœÛ›Ü›X[Ú[™›Ëœ™\^[™^
NÂˆÙ[™Y‚ˆÚY™YˆS‘ÑS•[™Ù[\]Y]œÜ™XY[™Ù[
[šY›Ü›\ËœÝ[™Ù[Ú[™›Ëœ™\^[™^
NÂˆÙ[™Y‚ˆÚY™YˆUŒB]•\]Y]œÜ™XYUŠ[šY›Ü›\ËœÝ]—Ú[™›Ëœ™\^[™^
NÂˆÙ[™Y‚ˆÚY™YˆUŒ‚]Œ•\]Y]œÜ™XYUŒŠ[šY›Ü›\ËœÝ]Œ—Ú[™›Ëœ™\^[™^
NÂˆÙ[™Y‚ˆÚY™YˆUŒÂ˜\ˆ]ŒÕ\]Yˆ™XÌ™]œÜ™XYUŒÊ[šY›Ü›\ËœÝ]Œ×Ú[™›Ëœ™\^[™^
NÂˆÙ[™Y‚ˆÚY™YˆU˜\ˆ]\]Yˆ™XÌ™]œÜ™XYU
[šY›Ü›\ËœÝ]Ú[™›Ëœ™\^[™^
NÂˆÙ[™Y‚ˆÚY™YˆUB˜\ˆ]U\]Yˆ™XÌ™]œÜ™XYUJ[šY›Ü›\ËœÝ]WÚ[™›Ëœ™\^[™^
NÂˆÙ[™Y‚ˆÚY™YˆU‚˜\ˆ]•\]Yˆ™XÌ™]œÜ™XYUŠ[šY›Ü›\ËœÝ]—Ú[™›Ëœ™\^[™^
NÂˆÙ[™Y‚ˆÚY™Yˆ‘T•VÓÓÔ‚˜ÛÛÜ•\]Y]œÜ™XYÛÛÜŠ[šY›Ü›\ËœØÛÛÜ—Ú[™›Ëœ™\^[™^
NÂˆÙ[™Y‚ˆÚY™YˆSÔ”T‘ÑUÂ›]œØ˜\ÙTÜÚ][ÛŽˆ™XÌÙ\ÜÚ][Û•\]YÂˆÚY™Yˆ“Ô“PS›]œØ˜\ÙS›Ü›X[ˆ™XÌÙ[›Ü›X[\]YÂˆÙ[™Y‚ˆÚY™YˆS‘ÑS•›]œØ˜\ÙU[™Ù[ˆ™XÍ][™Ù[\]YÂˆÙ[™Y‚ˆÚY™YˆUŒB›]œØ˜\ÙUUŽˆ™XÌ™]]•\]YÂˆÙ[™Y‚ˆÚY™YˆUŒ‚›]œØ˜\ÙUUŒŽˆ™XÌ™]]Œ•\]YÂˆÙ[™Y‚ˆÚY™Yˆ‘T•VÓÓÔ‚›]œØ˜\ÙPÛÛÜŽˆ™XÍXÛÛÜ•\]YÂˆÙ[™Y‚ˆÙ[™Y‚ˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”ÏŒ˜\ˆœÛX]šXÙ\Ò[™XÙ\Îˆ™XÍ]œÜ™XY›Û™R[™XÙ\Ê[šY›Ü›\ËœÛX]šXÙ\Ò[™XÙ\×Ú[™›Ëœ™\^[™^
NÝ˜\ˆœÛX]šXÙ\ÕÙZYÚÎˆ™XÍ]œÜ™XY›Û™UÙZYÚÊ[šY›Ü›\ËœÛX]šXÙ\ÕÙZYÚ×Ú[™›Ëœ™\^[™^
NÂˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”Ï˜\ˆœÛX]šXÙ\Ò[™XÙ\Ñ^˜Nˆ™XÍ]œÜ™XY›Û™R[™XÙ\Ñ^˜J[šY›Ü›\ËœÛX]šXÙ\Ò[™XÙ\Ñ^˜WÚ[™›Ëœ™\^[™^
NÝ˜\ˆœÛX]šXÙ\ÕÙZYÚÑ^˜Nˆ™XÍ]œÜ™XY›Û™UÙZYÚÑ^˜J[šY›Ü›\ËœÛX]šXÙ\ÕÙZYÚÑ^˜WÚ[™›Ëœ™\^[™^
NÂˆÙ[™Y‚ˆÙ[™Y‚ˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÞY×_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÞY×O\SJNØÛÛœÝUO^Û˜[YNžYËÚY\ŽœS_K™ÏH›[Üœ\™Ù]Õ™\^ÛØ˜[‹“OXÚY™YˆSÔ”T‘ÑUÂˆÚY™YˆSÔ”T‘ÑU×ÕVT‘B˜\ˆ™\^QˆŒÌŽÂˆÙ[™Y‚ˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓØ™×_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓØ™×OZ“JNØÛÛœÝÕO^Û˜[YN˜™ËÚY\Žš“_KYÏH›[Üœ\™Ù]Õ™\^‹ÓOXÚY™YˆSÔ”T‘ÑUÂˆÚY™YˆSÔ”T‘ÑU×ÕVT‘BˆÚYˆÖOOL™›Üˆ
˜\ˆOLÈO•SWÓSÔ”ÒS‘“QSÑT”ÎÈOZJÌJHÚYˆ
ŒÌŠJO][šY›Ü›\Ë›[Üœ\™Ù]ÛÝ[
HØœ™XZÎßBˆÚY™YˆTÑWÕ‘T•VÔSS‘Â™\^QYŒÌŠœ™\^[™^
J[šY›Ü›\Ë›[Üœ\™Ù]^\™R[™›ËžÂˆÙ[ÙB™\^QYŒÌŠ™\^[œ]Ë™\^[™^
J[šY›Ü›\Ë›[Üœ\™Ù]^\™R[™›ËžÂˆÙ[™Y‚ˆÚY™YˆSÔ”T‘ÑU×ÔÔÒUSÓ‚ˆÚY™YˆTÑWÕ‘T•VÔSS‘ÂœÜÚ][Û•\]Y\ÜÚ][Û•\]Y
Ê™XY™XÝÜŒÑœ›ÛT˜]ÔØ[\\ŠK™\^Q
K]œØ˜\ÙTÜÚ][ÛŠJ[šY›Ü›\Ë›[Üœ\™Ù][™›Y[˜Ù\ÖÚWNÂˆÙ[ÙBœÜÚ][Û•\]Y\ÜÚ][Û•\]Y
Ê™XY™XÝÜŒÑœ›ÛT˜]ÔØ[\\ŠK™\^Q
K]™\^[œ]ËœÜÚ][ÛŠJ[šY›Ü›\Ë›[Üœ\™Ù][™›Y[˜Ù\ÖÚWNÂˆÙ[™Y‚ˆÙ[™Y‚ˆÚY™YˆSÔ”T‘ÑUVT‘WÒTÔÔÒUSÓ”Â™\^Q]™\^Q
ÌKŒÂˆÙ[™Y‚ˆÚY™YˆSÔ”T‘ÑU×Ó“Ô“PSˆÚY™YˆTÑWÕ‘T•VÔSS‘Â››Ü›X[\]Y[›Ü›X[\]Y
Ê™XY™XÝÜŒÑœ›ÛT˜]ÔØ[\\ŠK™\^Q
H]œØ˜\ÙS›Ü›X[
J[šY›Ü›\Ë›[Üœ\™Ù][™›Y[˜Ù\ÖÚWNÂˆÙ[ÙB››Ü›X[\]Y[›Ü›X[\]Y
Ê™XY™XÝÜŒÑœ›ÛT˜]ÔØ[\\ŠK™\^Q
H]™\^[œ]Ë››Ü›X[
J[šY›Ü›\Ë›[Üœ\™Ù][™›Y[˜Ù\ÖÚWNÂˆÙ[™Y‚ˆÙ[™Y‚ˆÚY™YˆSÔ”T‘ÑUVT‘WÒTÓ“Ô“PSÂ™\^Q]™\^Q
ÌKŒÂˆÙ[™Y‚ˆÚY™YˆSÔ”T‘ÑU×ÕU‚ˆÚY™YˆTÑWÕ‘T•VÔSS‘Â]•\]Y]]•\]Y
Ê™XY™XÝÜŒÑœ›ÛT˜]ÔØ[\\ŠK™\^Q
KžK]œØ˜\ÙUUŠJ[šY›Ü›\Ë›[Üœ\™Ù][™›Y[˜Ù\ÖÚWNÂˆÙ[ÙB]•\]Y]]•\]Y
Ê™XY™XÝÜŒÑœ›ÛT˜]ÔØ[\\ŠK™\^Q
KžK]™\^[œ]Ë]ŠJ[šY›Ü›\Ë›[Üœ\™Ù][™›Y[˜Ù\ÖÚWNÂˆÙ[™Y‚ˆÙ[™Y‚ˆÚY™YˆSÔ”T‘ÑUVT‘WÒTÕU”Â™\^Q]™\^Q
ÌKŒÂˆÙ[™Y‚ˆÚY™YˆSÔ”T‘ÑU×ÕS‘ÑS•ˆÚY™YˆTÑWÕ‘T•VÔSS‘Â[™Ù[\]Y]™XÍŠ[™Ù[\]Yž^ŠÊ™XY™XÝÜŒÑœ›ÛT˜]ÔØ[\\ŠK™\^Q
H]œØ˜\ÙU[™Ù[ž^ŠJ[šY›Ü›\Ë›[Üœ\™Ù][™›Y[˜Ù\ÖÚWK[™Ù[\]Y˜JNÂˆÙ[ÙB[™Ù[\]Y]™XÍŠ[™Ù[\]Yž^ŠÊ™XY™XÝÜŒÑœ›ÛT˜]ÔØ[\\ŠK™\^Q
H]™\^[œ]Ë[™Ù[ž^ŠJ[šY›Ü›\Ë›[Üœ\™Ù][™›Y[˜Ù\ÖÚWK[™Ù[\]Y˜JNÂˆÙ[™Y‚ˆÙ[™Y‚ˆÚY™YˆSÔ”T‘ÑUVT‘WÒTÕS‘ÑS•Â™\^Q]™\^Q
ÌKŒÂˆÙ[™Y‚ˆÚY™YˆSÔ”T‘ÑU×ÕUŒ‚ˆÚY™YˆTÑWÕ‘T•VÔSS‘Â]Œ•\]Y]]Œ•\]Y
Ê™XY™XÝÜŒÑœ›ÛT˜]ÔØ[\\ŠK™\^Q
KžK]œØ˜\ÙUUŒŠJ[šY›Ü›\Ë›[Üœ\™Ù][™›Y[˜Ù\ÖÚWNÂˆÙ[ÙB]Œ•\]Y]]Œ•\]Y
Ê™XY™XÝÜŒÑœ›ÛT˜]ÔØ[\\ŠK™\^Q
KžK]™\^[œ]Ë]ŒŠJ[šY›Ü›\Ë›[Üœ\™Ù][™›Y[˜Ù\ÖÚWNÂˆÙ[™Y‚ˆÙ[™Y‚ˆÚY™YˆSÔ”T‘ÑU×ÐÓÓÔ‚ˆÚY™YˆTÑWÕ‘T•VÔSS‘Â˜ÛÛÜ•\]YXÛÛÜ•\]Y
Ê™XY™XÝÜœ›ÛT˜]ÔØ[\\ŠK™\^Q
K]œØ˜\ÙPÛÛÜŠJ[šY›Ü›\Ë›[Üœ\™Ù][™›Y[˜Ù\ÖÚWNÂˆÙ[ÙB˜ÛÛÜ•\]YXÛÛÜ•\]Y
Ê™XY™XÝÜœ›ÛT˜]ÔØ[\\ŠK™\^Q
K]™\^[œ]Ë˜ÛÛÜŠJ[šY›Ü›\Ë›[Üœ\™Ù][™›Y[˜Ù\ÖÚWNÂˆÙ[™Y‚ˆÙ[™Y‚ŸBˆÙ[™Y‚ˆÙ[ÙBˆÚY™YˆSÔ”T‘ÑU×ÔÔÒUSÓ‚ˆÚY™YˆTÑWÕ‘T•VÔSS‘ÂœÜÚ][Û•\]Y\ÜÚ][Û•\]Y
Ê™\^[œ]ËœÜÚ][ÛžÖK]œØ˜\ÙTÜÚ][ÛŠJ[šY›Ü›\Ë›[Üœ\™Ù][™›Y[˜Ù\ÖÞÖWNÂˆÙ[ÙBœÜÚ][Û•\]Y\ÜÚ][Û•\]Y
Ê™\^[œ]ËœÜÚ][ÛžÖK]™\^[œ]ËœÜÚ][ÛŠJ[šY›Ü›\Ë›[Üœ\™Ù][™›Y[˜Ù\ÖÞÖWNÂˆÙ[™Y‚ˆÙ[™Y‚ˆÚY™YˆSÔ”T‘ÑU×Ó“Ô“PSˆÚY™YˆTÑWÕ‘T•VÔSS‘Â››Ü›X[\]Y[›Ü›X[\]Y
Ê™\^[œ]Ë››Ü›X[ÖK]œØ˜\ÙS›Ü›X[
J[šY›Ü›\Ë›[Üœ\™Ù][™›Y[˜Ù\ÖÞÖWNÂˆÙ[ÙB››Ü›X[\]Y[›Ü›X[\]Y
Ê™\^[œ]Ë››Ü›X[ÖK]™\^[œ]Ë››Ü›X[
J[šY›Ü›\Ë›[Üœ\™Ù][™›Y[˜Ù\ÖÞÖWNÂˆÙ[™Y‚ˆÙ[™Y‚ˆÚY™YˆSÔ”T‘ÑU×ÕS‘ÑS•ˆÚY™YˆTÑWÕ‘T•VÔSS‘Â[™Ù[\]Y]™XÍŠ[™Ù[\]Yž^ŠÊ™\^[œ]Ë[™Ù[ÖK]œØ˜\ÙU[™Ù[ž^ŠJ[šY›Ü›\Ë›[Üœ\™Ù][™›Y[˜Ù\ÖÞÖWK[™Ù[\]Y˜JNÂˆÙ[ÙB[™Ù[\]Y]™XÍŠ[™Ù[\]Yž^ŠÊ™\^[œ]Ë[™Ù[ÖK]™\^[œ]Ë[™Ù[ž^ŠJ[šY›Ü›\Ë›[Üœ\™Ù][™›Y[˜Ù\ÖÞÖWK[™Ù[\]Y˜JNÂˆÙ[™Y‚ˆÙ[™Y‚ˆÚY™YˆSÔ”T‘ÑU×ÕU‚ˆÚY™YˆTÑWÕ‘T•VÔSS‘Â]•\]Y]]•\]Y
Ê™\^[œ]Ë]—ÞÖK]œØ˜\ÙUUŠJ[šY›Ü›\Ë›[Üœ\™Ù][™›Y[˜Ù\ÖÞÖWNÂˆÙ[ÙB]•\]Y]]•\]Y
Ê™\^[œ]Ë]—ÞÖK]™\^[œ]Ë]ŠJ[šY›Ü›\Ë›[Üœ\™Ù][™›Y[˜Ù\ÖÞÖWNÂˆÙ[™Y‚ˆÙ[™Y‚ˆÚY™YˆSÔ”T‘ÑU×ÕUŒ‚ˆÚY™YˆTÑWÕ‘T•VÔSS‘Â]Œ•\]Y]]Œ•\]Y
Ê™\^[œ]Ë]Œ—ÞÖK]œØ˜\ÙUUŒŠJ[šY›Ü›\Ë›[Üœ\™Ù][™›Y[˜Ù\ÖÞÖWNÂˆÙ[ÙB]Œ•\]Y]]Œ•\]Y
Ê™\^[œ]Ë]Œ—ÞÖK]™\^[œ]Ë]ŒŠJ[šY›Ü›\Ë›[Üœ\™Ù][™›Y[˜Ù\ÖÞÖWNÂˆÙ[™Y‚ˆÙ[™Y‚ˆÚY™YˆSÔ”T‘ÑU×ÐÓÓÔ‚ˆÚY™YˆTÑWÕ‘T•VÔSS‘Â˜ÛÛÜ•\]YXÛÛÜ•\]Y
Ê™\^[œ]Ë˜ÛÛÜžÖK]œØ˜\ÙPÛÛÜŠJ[šY›Ü›\Ë›[Üœ\™Ù][™›Y[˜Ù\ÖÞÖWNÂˆÙ[ÙB˜ÛÛÜ•\]YXÛÛÜ•\]Y
Ê™\^[œ]Ë˜ÛÛÜžÖK]™\^[œ]Ë˜ÛÛÜŠJ[šY›Ü›\Ë›[Üœ\™Ù][™›Y[˜Ù\ÖÞÖWNÂˆÙ[™Y‚ˆÙ[™Y‚ˆÙ[™Y‚ˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÐY×_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÐY×ORÓJNØÛÛœÝUO^Û˜[YNYËÚY\Ž’Ó_K™ÏHœ™T\ÜÕ™\^‹“OXÚY™Yˆ‘TTÔ×ÑT™\^Ý]]Ë•šY]ÔÜÏJØÙ[™KšY]ÊÛÜ›ÜÊKœ™ØŽÂˆÙ[™Y‚ˆÚY™Yˆ‘TTÔ×Ó“Ô“PSV‘QÕ’QU×ÑT™\^Ý]]Ë“›Ü›UšY]Ñ\J
ØÙ[™KšY]ÊÛÜ›ÜÊKž‹][šY›Ü›\Ë˜Ø[Y\˜R[™›Ëž
KÊ[šY›Ü›\Ë˜Ø[Y\˜R[™›ËžK][šY›Ü›\Ë˜Ø[Y\˜R[™›Ëž
NÂˆÙ[™Y‚ˆÚY™Yˆ‘TTÔ×ÓÐÐSÔÔÒUSÓ‚™\^Ý]]Ë”ÜÚ][Û\ÜÚ][Û•\]Yž^ŽÂˆÙ[™Y‚ˆÚYˆ
Yš[™Y
‘TTÔ×Õ‘SÐÒUJHYš[™Y
‘TTÔ×Õ‘SÐÒUWÓS‘PTŠJH	‰ˆYš[™Y
“Ó‘T×Õ‘SÐÒUWÑSP“Q
B™\^Ý]]ËÝ\œ™[ÜÚ][Û\ØÙ[™KšY]Ô›Ú™XÝ[ÛŠÛÜ›ÜÎÂˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”ÏŒ˜\ˆ™]š[Ý\Ò[™›Y[˜ÙNˆX]ŽÜ™]š[Ý\Ò[™›Y[˜ÙO][šY›Ü›\Ë›T™]š[Ý\Ð›Û™\ÖÈLÌŠ™\^[œ]Ë›X]šXÙ\Ò[™XÙ\ÖÌJWJ™\^[œ]Ë›X]šXÙ\ÕÙZYÚÖÌNÂˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”ÏŒBœ™]š[Ý\Ò[™›Y[˜ÙJÏ][šY›Ü›\Ë›T™]š[Ý\Ð›Û™\ÖÈLÌŠ™\^[œ]Ë›X]šXÙ\Ò[™XÙ\ÖÌWJWJ™\^[œ]Ë›X]šXÙ\ÕÙZYÚÖÌWNÂˆÙ[™YˆˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”ÏŒ‚œ™]š[Ý\Ò[™›Y[˜ÙJÏ][šY›Ü›\Ë›T™]š[Ý\Ð›Û™\ÖÈLÌŠ™\^[œ]Ë›X]šXÙ\Ò[™XÙ\ÖÌ—JWJ™\^[œ]Ë›X]šXÙ\ÕÙZYÚÖÌ—NÂˆÙ[™YˆˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”ÏŒÂœ™]š[Ý\Ò[™›Y[˜ÙJÏ][šY›Ü›\Ë›T™]š[Ý\Ð›Û™\ÖÈLÌŠ™\^[œ]Ë›X]šXÙ\Ò[™XÙ\ÖÌ×JWJ™\^[œ]Ë›X]šXÙ\ÕÙZYÚÖÌ×NÂˆÙ[™Y‚ˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”Ïœ™]š[Ý\Ò[™›Y[˜ÙJÏ][šY›Ü›\Ë›T™]š[Ý\Ð›Û™\ÖÈLÌŠ™\^[œ]Ë›X]šXÙ\Ò[™XÙ\Ñ^˜VÌJWJ™\^[œ]Ë›X]šXÙ\ÕÙZYÚÑ^˜VÌNÂˆÙ[™YˆˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”ÏBœ™]š[Ý\Ò[™›Y[˜ÙJÏ][šY›Ü›\Ë›T™]š[Ý\Ð›Û™\ÖÈLÌŠ™\^[œ]Ë›X]šXÙ\Ò[™XÙ\Ñ^˜VÌWJWJ™\^[œ]Ë›X]šXÙ\ÕÙZYÚÑ^˜VÌWNÂˆÙ[™YˆˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”Ï‚œ™]š[Ý\Ò[™›Y[˜ÙJÏ][šY›Ü›\Ë›T™]š[Ý\Ð›Û™\ÖÈLÌŠ™\^[œ]Ë›X]šXÙ\Ò[™XÙ\Ñ^˜VÌ—JWJ™\^[œ]Ë›X]šXÙ\ÕÙZYÚÑ^˜VÌ—NÂˆÙ[™YˆˆÚYˆ•SWÐ“Ó‘WÒS‘“QSÑT”ÏÂœ™]š[Ý\Ò[™›Y[˜ÙJÏ][šY›Ü›\Ë›T™]š[Ý\Ð›Û™\ÖÈLÌŠ™\^[œ]Ë›X]šXÙ\Ò[™XÙ\Ñ^˜VÌ×JWJ™\^[œ]Ë›X]šXÙ\ÕÙZYÚÑ^˜VÌ×NÂˆÙ[™Y‚™\^Ý]]Ë”™]š[Ý\ÔÜÚ][Û][šY›Ü›\Ëœ™]š[Ý\ÕšY]Ô›Ú™XÝ[ÛŠ™š[˜[™]š[Ý\ÕÛÜ›
œ™]š[Ý\Ò[™›Y[˜ÙJˆ™XÍŠÜÚ][Û•\]YKŒ
NÂˆÙ[ÙB™\^Ý]]Ë”™]š[Ý\ÔÜÚ][Û][šY›Ü›\Ëœ™]š[Ý\ÕšY]Ô›Ú™XÝ[ÛŠ™š[˜[™]š[Ý\ÕÛÜ›
ˆ™XÍŠÜÚ][Û•\]YKŒ
NÂˆÙ[™Y‚ˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÔ™×_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÔ™×OV“JNØÛÛœÝO^Û˜[YN”™ËÚY\Ž–“_KYÏH]•˜\šXX›QXÛ\˜][Ûˆ‹SOXÚY™YˆPRS•UžÖBˆÚYˆYYš[™Y
UžÖJB˜\ˆ]žÖNˆ™XÌ™]™XÌ™Š‹ŠNÂˆÙ[YˆYš[™Y
TÑWÕ‘T•VÔSS‘ÊB˜\ˆ]žÖNˆ™XÌ™]]žÖU\]YÂˆÙ[ÙB˜\ˆ]žÖNˆ™XÌ™]™\^[œ]Ë]žÖNÂˆÙ[™Y‚™\^Ý]]Ë“XZ[•UžÖO]]žÖNÂˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÒY×_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÒY×OTSJNØÛÛœÝO^Û˜[YN’YËÚY\Ž”S_KÙÏHœØ[\\•™\^[\[Y[][Ûˆ‹	OXÚYˆYš[™Y
ÑQ’S‘SSQWÊH	‰ˆÑQ’S‘SSQWÑT‘PÕUOLšYˆ
[šY›Ü›\Ë—ÒS‘“ÓSQWÏOLŠBžÝ™\^Ý]]Ë—ÕT–RS‘ÓSQWÕUH
[šY›Ü›\Ë—ÓPU’VSQWÓX]š^
ˆ™XÍŠ]•\]YKŒŒ
JKžNßBˆÚY™YˆUŒ‚™[ÙHYˆ
[šY›Ü›\Ë—ÒS‘“ÓSQWÏOLKŠBžÝ™\^Ý]]Ë—ÕT–RS‘ÓSQWÕUH
[šY›Ü›\Ë—ÓPU’VSQWÓX]š^
ˆ™XÍŠ]Œ•\]YKŒŒ
JKžNßBˆÙ[™Y‚ˆÚY™YˆUŒÂ™[ÙHYˆ
[šY›Ü›\Ë—ÒS‘“ÓSQWÏOL‹ŠBžÝ™\^Ý]]Ë—ÕT–RS‘ÓSQWÕUH
[šY›Ü›\Ë—ÓPU’VSQWÓX]š^
ˆ™XÍŠ™\^[œ]Ë]ŒËKŒŒ
JKžNßBˆÙ[™Y‚ˆÚY™YˆU™[ÙHYˆ
[šY›Ü›\Ë—ÒS‘“ÓSQWÏOLËŠBžÝ™\^Ý]]Ë—ÕT–RS‘ÓSQWÕUH
[šY›Ü›\Ë—ÓPU’VSQWÓX]š^
ˆ™XÍŠ™\^[œ]Ë]KŒŒ
JKžNßBˆÙ[™Y‚ˆÚY™YˆUB™[ÙHYˆ
[šY›Ü›\Ë—ÒS‘“ÓSQWÏOMŠBžÝ™\^Ý]]Ë—ÕT–RS‘ÓSQWÕUH
[šY›Ü›\Ë—ÓPU’VSQWÓX]š^
ˆ™XÍŠ™\^[œ]Ë]KKŒŒ
JKžNßBˆÙ[™Y‚ˆÚY™YˆU‚™[ÙHYˆ
[šY›Ü›\Ë—ÒS‘“ÓSQWÏOMKŠBžÝ™\^Ý]]Ë—ÕT–RS‘ÓSQWÕUH
[šY›Ü›\Ë—ÓPU’VSQWÓX]š^
ˆ™XÍŠ™\^[œ]Ë]‹KŒŒ
JKžNßBˆÙ[™Y‚ˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÐÙ×_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÐÙ×OIJNØÛÛœÝÕO^Û˜[YNÙËÚY\Ž‰_KYÏH˜[\™\^‹“OXÚYˆYš[™Y
•ST
HYš[™Y
TSV
HYš[™Y
ÓPTÓÐUÐ•ST
HYš[™Y
S’TÓÕ“ÔPÊBˆÚYˆYš[™Y
S‘ÑS•
H	‰ˆYš[™Y
“Ô“PS
B˜\ˆ›“›Ü›X[ˆ™XÌÙ[›Ü›X[^™J›Ü›X[\]Y
NÝ˜\ˆ›•[™Ù[ˆ™XÌÙ[›Ü›X[^™J[™Ù[\]Yž^ŠNÝ˜\ˆ›š][™Ù[ˆ™XÌÙXÜ›ÜÜÊ›“›Ü›X[›•[™Ù[
J[™Ù[\]YÎÝ˜\ˆX][\HX]ÞÙŠš[˜[ÛÜ›ÌKž^‹š[˜[ÛÜ›ÌWKž^‹š[˜[ÛÜ›Ì—Kž^ŠJˆX]ÞÙŠ›•[™Ù[›š][™Ù[›“›Ü›X[
NÝ™\^Ý]]Ë•“Œ[X][\ÌNÝ™\^Ý]]Ë•“ŒO[X][\ÌWNÝ™\^Ý]]Ë•“Œ[X][\Ì—NÂˆÙ[™Y‚ˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÓY×_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÓY×OR“JNØÛÛœÝÕO^Û˜[YN“YËÚY\Ž’“_KÏHœÚYÝÜÕ™\^‹LOXÚY™YˆÒQÕÔÂˆÚYˆYš[™Y
ÒQÕÐÔÓ^ÖJBˆÚY™YˆÐÑS‘WÕP“Â™\^Ý]]Ë”ÜÚ][Û‘œ›ÛPØ[Y\˜^ÖO\ØÙ[™KšY]ÊÛÜ›ÜÎÂˆÙ[ÙB™\^Ý]]Ë”ÜÚ][Û‘œ›ÛPØ[Y\˜^ÖO][šY›Ü›\ËšY]ÊÛÜ›ÜÎÂˆÙ[™Y‚ˆÚYˆÒQÕÐÔÓS•SWÐÐTÐÐQTÞÖOŒ™\^Ý]]Ë”ÜÚ][Û‘œ›ÛSYÚÖWÌ][šY›Ü›\Ë›YÚX]š^ÖVÌJÛÜ›ÜÎÂˆÚY™YˆTÑWÔ‘U‘T”ÑWÑT•Q‘‘T‚™\^Ý]]Ë‘\Y]šXÞÖWÌJ]™\^Ý]]Ë”ÜÚ][Û‘œ›ÛSYÚÖWÌžŠÛYÚÖK™\˜[Y\Ëž
KÛYÚÖK™\˜[Y\ËžNÂˆÙ[ÙB™\^Ý]]Ë‘\Y]šXÞÖWÌH
™\^Ý]]Ë”ÜÚ][Û‘œ›ÛSYÚÖWÌžŠÛYÚÖK™\˜[Y\Ëž
KÛYÚÖK™\˜[Y\ËžNÂˆÙ[™Y‚ˆÙ[™Y‚ˆÚYˆÒQÕÐÔÓS•SWÐÐTÐÐQTÞÖOŒB™\^Ý]]Ë”ÜÚ][Û‘œ›ÛSYÚÖWÌO][šY›Ü›\Ë›YÚX]š^ÖVÌWJÛÜ›ÜÎÂˆÚY™YˆTÑWÔ‘U‘T”ÑWÑT•Q‘‘T‚™\^Ý]]Ë‘\Y]šXÞÖWÌOJ]™\^Ý]]Ë”ÜÚ][Û‘œ›ÛSYÚÖWÌKžŠÛYÚÖK™\˜[Y\Ëž
KÛYÚÖK™\˜[Y\ËžNÂˆÙ[ÙB™\^Ý]]Ë‘\Y]šXÞÖWÌOH
™\^Ý]]Ë”ÜÚ][Û‘œ›ÛSYÚÖWÌKžŠÛYÚÖK™\˜[Y\Ëž
KÛYÚÖK™\˜[Y\ËžNÂˆÙ[™Y‚ˆÙ[™YˆˆÚYˆÒQÕÐÔÓS•SWÐÐTÐÐQTÞÖOŒ‚™\^Ý]]Ë”ÜÚ][Û‘œ›ÛSYÚÖWÌ][šY›Ü›\Ë›YÚX]š^ÖVÌ—JÛÜ›ÜÎÂˆÚY™YˆTÑWÔ‘U‘T”ÑWÑT•Q‘‘T‚™\^Ý]]Ë‘\Y]šXÞÖWÌJ]™\^Ý]]Ë”ÜÚ][Û‘œ›ÛSYÚÖWÌ‹žŠÛYÚÖK™\˜[Y\Ëž
KÛYÚÖK™\˜[Y\ËžNÂˆÙ[ÙB™\^Ý]]Ë‘\Y]šXÞÖWÌH
™\^Ý]]Ë”ÜÚ][Û‘œ›ÛSYÚÖWÌ‹žŠÛYÚÖK™\˜[Y\Ëž
KÛYÚÖK™\˜[Y\ËžNÂˆÙ[™Y‚ˆÙ[™YˆˆÚYˆÒQÕÐÔÓS•SWÐÐTÐÐQTÞÖOŒÂ™\^Ý]]Ë”ÜÚ][Û‘œ›ÛSYÚÖWÌÏ][šY›Ü›\Ë›YÚX]š^ÖVÌ×JÛÜ›ÜÎÂˆÚY™YˆTÑWÔ‘U‘T”ÑWÑT•Q‘‘T‚™\^Ý]]Ë‘\Y]šXÞÖWÌÏJ]™\^Ý]]Ë”ÜÚ][Û‘œ›ÛSYÚÖWÌËžŠÛYÚÖK™\˜[Y\Ëž
KÛYÚÖK™\˜[Y\ËžNÂˆÙ[ÙB™\^Ý]]Ë‘\Y]šXÞÖWÌÏH
™\^Ý]]Ë”ÜÚ][Û‘œ›ÛSYÚÖWÌËžŠÛYÚÖK™\˜[Y\Ëž
KÛYÚÖK™\˜[Y\ËžNÂˆÙ[™Y‚ˆÙ[™YˆˆÙ[YˆYš[™Y
ÒQÕÞÖJH	‰ˆYYš[™Y
ÒQÕÐÕP‘^ÖJB™\^Ý]]Ë”ÜÚ][Û‘œ›ÛSYÚÖO][šY›Ü›\Ë›YÚX]š^ÖJÛÜ›ÜÎÂˆÚY™YˆTÑWÔ‘U‘T”ÑWÑT•Q‘‘T‚™\^Ý]]Ë‘\Y]šXÞÖOJ]™\^Ý]]Ë”ÜÚ][Û‘œ›ÛSYÚÖKžŠÛYÚÖK™\˜[Y\Ëž
KÛYÚÖK™\˜[Y\ËžNÂˆÙ[ÙB™\^Ý]]Ë‘\Y]šXÞÖOJ™\^Ý]]Ë”ÜÚ][Û‘œ›ÛSYÚÖKžŠÛYÚÖK™\˜[Y\Ëž
KÛYÚÖK™\˜[Y\ËžNÂˆÙ[™Y‚ˆÙ[™Y‚ˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÑ×_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÑ×OYLJNØÛÛœÝO^Û˜[YN‘ËÚY\Ž™L_KÏH›ÙÑ\™\^‹OXÚY™YˆÑÐT’URPÑT™\^Ý]]Ë‘œ˜YÛY[\LKŒ
Ý™\^Ý]]ËœÜÚ][Û‹ÎÝ™\^Ý]]ËœÜÚ][Û‹ž[ÙÌŠX^
ŒK™\^Ý]]Ë‘œ˜YÛY[\
JJ[šY›Ü›\Ë›ÙØ\š]ZXÑ\ÛÛœÝ[ÂˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÔ×_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÔ×O]JNØÛÛœÝLO^Û˜[YN”ËÚY\Ž_KÙÏH™Y˜][™\^ÚY\ˆ‹ÌOXÚ[˜ÛYOY˜][X›ÑXÛ\˜][Û‚ˆÙYš[™HÕTÕÓWÕ‘T•VÐ‘QÒS‚ˆÚY›™YˆTÑWÕ‘T•VÔSS‘Â˜]šX]HÜÚ][ÛŽˆ™XÌÙŽÂˆÚY™Yˆ“Ô“PS˜]šX]H›Ü›X[ˆ™XÌÙŽÂˆÙ[™Y‚ˆÚY™YˆS‘ÑS•˜]šX]H[™Ù[ˆ™XÍŽÂˆÙ[™Y‚ˆÚY™YˆUŒB˜]šX]H]Žˆ™XÌ™ŽÂˆÙ[™Y‚ˆÚ[˜ÛYO]]šX]QXÛ\˜][Û–Ì‹‹×BˆÚY™Yˆ‘T•VÓÓÔ‚˜]šX]HÛÛÜŽˆ™XÍŽÂˆÙ[™Y‚ˆÙ[™Y‚ˆÚ[˜ÛYO[\‘[˜Ý[ÛœÏ‚ˆÚ[˜ÛYO›Û™\ÑXÛ\˜][Û‚ˆÚ[˜ÛYO˜ZÙY™\^[š[X][Û‘XÛ\˜][Û‚ˆÚ[˜ÛYO[œÝ[˜Ù\ÑXÛ\˜][Û‚ˆÚ[˜ÛYO™T\ÜÕ™\^XÛ\˜][Û‚ˆÚ[˜ÛYOXZ[•U•˜\žZ[™ÑXÛ\˜][Û–ÌK‹×BˆÚ[˜ÛYOØ[\\•™\^XÛ\˜][ÛŠÑQ’S‘SSQWËQ‘•TÑKÕT–RS‘ÓSQWËY™\ÙJBˆÚ[˜ÛYOØ[\\•™\^XÛ\˜][ÛŠÑQ’S‘SSQWËURSÕT–RS‘ÓSQWË]Z[
BˆÚ[˜ÛYOØ[\\•™\^XÛ\˜][ÛŠÑQ’S‘SSQWËSP’QS•ÕT–RS‘ÓSQWË[XšY[
BˆÚ[˜ÛYOØ[\\•™\^XÛ\˜][ÛŠÑQ’S‘SSQWËÔPÒUKÕT–RS‘ÓSQWËÜXÚ]JBˆÚ[˜ÛYOØ[\\•™\^XÛ\˜][ÛŠÑQ’S‘SSQWËSRTÔÒU‘KÕT–RS‘ÓSQWË[Z\ÜÚ]™JBˆÚ[˜ÛYOØ[\\•™\^XÛ\˜][ÛŠÑQ’S‘SSQWËQÒPTÕT–RS‘ÓSQWËYÚX\
BˆÚYˆYš[™Y
ÔPÕST•T“JBˆÚ[˜ÛYOØ[\\•™\^XÛ\˜][ÛŠÑQ’S‘SSQWËÔPÕST‹ÕT–RS‘ÓSQWËÜXÝ[\ŠBˆÙ[™Y‚ˆÚ[˜ÛYOØ[\\•™\^XÛ\˜][ÛŠÑQ’S‘SSQWË•STÕT–RS‘ÓSQWË[\
BˆÚ[˜ÛYOØ[\\•™\^XÛ\˜][ÛŠÑQ’S‘SSQWËPÐSÕT–RS‘ÓSQWËXØ[
B˜\žZ[™È”ÜÚ][Û•Îˆ™XÌÙŽÂˆÚY™Yˆ“Ô“PS˜\žZ[™È“›Ü›X[Îˆ™XÌÙŽÂˆÙ[™Y‚ˆÚYˆYš[™Y
‘T•VÓÓÔŠHYš[™Y
S”ÕSÑTÐÓÓÔŠH	‰ˆYš[™Y
S”ÕSÑTÊB˜\žZ[™ÈÛÛÜŽˆ™XÍŽÂˆÙ[™Y‚ˆÚ[˜ÛYO[\™\^XÛ\˜][Û‚ˆÚ[˜ÛYOÛ\[™U™\^XÛ\˜][Û‚ˆÚ[˜ÛYO›ÙÕ™\^XÛ\˜][Û‚ˆÚ[˜ÛYO×ÙXÛ×ÛYÚžœ˜YÛY[–Ì‹›X^Ú[][[™[Ý\ÓYÚ×BˆÚ[˜ÛYO[Üœ\™Ù]Õ™\^ÛØ˜[XÛ\˜][Û‚ˆÚ[˜ÛYO[Üœ\™Ù]Õ™\^XÛ\˜][Û–Ì‹›X^Ú[][[™[Ý\Ó[Üœ\™Ù]×BˆÚY™Yˆ‘Q“PÕSÓ“PTÔÒÖP“Ö˜\žZ[™È”ÜÚ][Û•U•Îˆ™XÌÙŽÂˆÙ[™Y‚ˆÚYˆYš[™Y
‘Q“PÕSÓ“PTÑTURT‘PÕS‘ÕST—Ñ’VQ
HYš[™Y
‘Q“PÕSÓ“PTÓRT”“Ô‘QTURT‘PÕS‘ÕST—Ñ’VQ
B˜\žZ[™È‘\™XÝ[Û•Îˆ™XÌÙŽÂˆÙ[™Y‚ˆÚYˆYš[™Y
ÓTÕQÒÐUÒ
H	‰ˆÓTÕQÒÐUÒŒ˜\žZ[™È•šY]Ñ\ˆŒÌŽÂˆÙ[™Y‚ˆÚ[˜ÛYOÙÑ\XÛ\˜][Û‚ˆÚ[˜ÛYO™\^[[™ÑXÛ\˜][Û‚ˆÙYš[™HÕTÕÓWÕ‘T•VÑQ’S’USÓ”Â™\^™›ˆXZ[Š[œ]ˆ™\^[œ]ÊKO‘œ˜YÛY[[œ]ÈÂˆÙYš[™HÕTÕÓWÕ‘T•VÓPRS—Ð‘QÒS‚ˆÚY™YˆTÑWÕ‘T•VÔSS‘Â˜\ˆÜÚ][Û•\]Yˆ™XÌÙ]™XÌÙŠŒ
NÂˆÚY™Yˆ“Ô“PS˜\ˆ›Ü›X[\]Yˆ™XÌÙ]™XÌÙŠŒ
NÂˆÙ[™Y‚ˆÚY™YˆS‘ÑS•˜\ˆ[™Ù[\]Yˆ™XÍ]™XÍŠŒ
NÂˆÙ[™Y‚ˆÚY™YˆUŒB˜\ˆ]•\]Yˆ™XÌ™]™XÌ™ŠŒ
NÂˆÙ[™Y‚ˆÚY™YˆUŒ‚˜\ˆ]Œ•\]Yˆ™XÌ™]™XÌ™ŠŒ
NÂˆÙ[™Y‚ˆÚY™Yˆ‘T•VÓÓÔ‚˜\ˆÛÛÜ•\]Yˆ™XÍ]™XÍŠŒ
NÂˆÙ[™Y‚ˆÙ[ÙB˜\ˆÜÚ][Û•\]Yˆ™XÌÙ]™\^[œ]ËœÜÚ][ÛŽÂˆÚY™Yˆ“Ô“PS˜\ˆ›Ü›X[\]Yˆ™XÌÙ]™\^[œ]Ë››Ü›X[ÂˆÙ[™Y‚ˆÚY™YˆS‘ÑS•˜\ˆ[™Ù[\]Yˆ™XÍ]™\^[œ]Ë[™Ù[ÂˆÙ[™Y‚ˆÚY™YˆUŒB˜\ˆ]•\]Yˆ™XÌ™]™\^[œ]Ë]ŽÂˆÙ[™Y‚ˆÚY™YˆUŒ‚˜\ˆ]Œ•\]Yˆ™XÌ™]™\^[œ]Ë]ŒŽÂˆÙ[™Y‚ˆÚY™Yˆ‘T•VÓÓÔ‚˜\ˆÛÛÜ•\]Yˆ™XÍ]™\^[œ]Ë˜ÛÛÜŽÂˆÙ[™Y‚ˆÙ[™Y‚ˆÚ[˜ÛYO™\^[[™Õ™\^‚ˆÚ[˜ÛYO[Üœ\™Ù]Õ™\^ÛØ˜[‚ˆÚ[˜ÛYO[Üœ\™Ù]Õ™\^–Ì‹›X^Ú[][[™[Ý\Ó[Üœ\™Ù]×BˆÚY™Yˆ‘Q“PÕSÓ“PTÔÒÖP“Ö™\^Ý]]Ë”ÜÚ][Û•U•Ï\ÜÚ][Û•\]YÂˆÙ[™Y‚ˆÙYš[™HÕTÕÓWÕ‘T•VÕTUWÔÔÒUSÓ‚ˆÙYš[™HÕTÕÓWÕ‘T•VÕTUWÓ“Ô“PSˆÚ[˜ÛYO[œÝ[˜Ù\Õ™\^‚ˆÚYˆYš[™Y
‘TTÔÊH	‰ˆ

Yš[™Y
‘TTÔ×Õ‘SÐÒUJHYš[™Y
‘TTÔ×Õ‘SÐÒUWÓS‘PTŠJH	‰ˆYYš[™Y
“Ó‘T×Õ‘SÐÒUWÑSP“Q
B™\^Ý]]ËÝ\œ™[ÜÚ][Û\ØÙ[™KšY]Ô›Ú™XÝ[ÛŠ™š[˜[ÛÜ›
™XÍŠÜÚ][Û•\]YKŒ
NÝ™\^Ý]]Ë”™]š[Ý\ÔÜÚ][Û][šY›Ü›\Ëœ™]š[Ý\ÕšY]Ô›Ú™XÝ[ÛŠ™š[˜[™]š[Ý\ÕÛÜ›
™XÍŠÜÚ][Û•\]YKŒ
NÂˆÙ[™Y‚ˆÚY™YˆTÑWÕ‘T•VÔSS‘ÂˆÚ[˜ÛYO›Û™\Õ™\^Š™\^[œ]Ë›X]šXÙ\Ò[™XÙ\ËœÛX]šXÙ\Ò[™XÙ\Ë™\^[œ]Ë›X]šXÙ\ÕÙZYÚËœÛX]šXÙ\ÕÙZYÚË™\^[œ]Ë›X]šXÙ\Ò[™XÙ\Ñ^˜KœÛX]šXÙ\Ò[™XÙ\Ñ^˜K™\^[œ]Ë›X]šXÙ\ÕÙZYÚÑ^˜KœÛX]šXÙ\ÕÙZYÚÑ^˜JBˆÚ[˜ÛYO˜ZÙY™\^[š[X][ÛŠ™\^[œ]Ë›X]šXÙ\Ò[™XÙ\ËœÛX]šXÙ\Ò[™XÙ\Ë™\^[œ]Ë›X]šXÙ\ÕÙZYÚËœÛX]šXÙ\ÕÙZYÚË™\^[œ]Ë›X]šXÙ\Ò[™XÙ\Ñ^˜KœÛX]šXÙ\Ò[™XÙ\Ñ^˜K™\^[œ]Ë›X]šXÙ\ÕÙZYÚÑ^˜KœÛX]šXÙ\ÕÙZYÚÑ^˜JBˆÙ[ÙBˆÚ[˜ÛYO›Û™\Õ™\^‚ˆÚ[˜ÛYO˜ZÙY™\^[š[X][Û‚ˆÙ[™Y‚˜\ˆÛÜ›ÜÎˆ™XÍYš[˜[ÛÜ›
™XÍŠÜÚ][Û•\]YKŒ
NÂˆÚY™Yˆ“Ô“PS˜\ˆ›Ü›X[ÛÜ›ˆX]ÞÙHX]ÞÙŠš[˜[ÛÜ›ÌKž^‹š[˜[ÛÜ›ÌWKž^‹š[˜[ÛÜ›Ì—Kž^ŠNÂˆÚYˆYš[™Y
S”ÕSÑTÊH	‰ˆYš[™Y
S—ÒS”ÕSÑTÊB™\^Ý]]Ë“›Ü›X[Ï[›Ü›X[\]YÈ™XÌÙŠÝ
›Ü›X[ÛÜ›ÌK›Ü›X[ÛÜ›ÌJKÝ
›Ü›X[ÛÜ›ÌWK›Ü›X[ÛÜ›ÌWJKÝ
›Ü›X[ÛÜ›Ì—K›Ü›X[ÛÜ›Ì—JJNÝ™\^Ý]]Ë“›Ü›X[Ï[›Ü›X[^™J›Ü›X[ÛÜ›
™\^Ý]]Ë“›Ü›X[ÊNÂˆÙ[ÙBˆÚY™Yˆ“Ó•S’Q“Ô“TÐÐSS‘Â››Ü›X[ÛÜ›]˜[œÜÜÙSX]Ê[™\œÙSX]Ê›Ü›X[ÛÜ›
JNÂˆÙ[™Y‚™\^Ý]]Ë“›Ü›X[Ï[›Ü›X[^™J›Ü›X[ÛÜ›
››Ü›X[\]Y
NÂˆÙ[™Y‚ˆÙ[™Y‚ˆÙYš[™HÕTÕÓWÕ‘T•VÕTUWÕÓÔ“ÔÂˆÚY™YˆUSU’QUÂšYˆ
ÛÕšY]ÒQÓÕ”OLJHÝ™\^Ý]]ËœÜÚ][Û\ØÙ[™KšY]Ô›Ú™XÝ[ÛŠÛÜ›ÜÎßH[ÙHÝ™\^Ý]]ËœÜÚ][Û\ØÙ[™KšY]Ô›Ú™XÝ[Û”ŠÛÜ›ÜÎßBˆÙ[ÙB™\^Ý]]ËœÜÚ][Û\ØÙ[™KšY]Ô›Ú™XÝ[ÛŠÛÜ›ÜÎÂˆÙ[™Y‚™\^Ý]]Ë”ÜÚ][Û•ÏHÛÜ›ÜËž^ŽÂˆÚY™Yˆ‘TTÔÂˆÚ[˜ÛYO™T\ÜÕ™\^‚ˆÙ[™Y‚ˆÚYˆYš[™Y
‘Q“PÕSÓ“PTÑTURT‘PÕS‘ÕST—Ñ’VQ
HYš[™Y
‘Q“PÕSÓ“PTÓRT”“Ô‘QTURT‘PÕS‘ÕST—Ñ’VQ
B™\^Ý]]Ë‘\™XÝ[Û•Ï[›Ü›X[^™J
š[˜[ÛÜ›
ˆ™XÍŠÜÚ][Û•\]YŒ
JKž^ŠNÂˆÙ[™Y‚ˆÚYˆYš[™Y
ÓTÕQÒÐUÒ
H	‰ˆÓTÕQÒÐUÒŒˆÚY™Yˆ’QÒÒS‘Q™\^Ý]]Ë•šY]Ñ\KJØÙ[™KšY]ÊÛÜ›ÜÊKžŽÂˆÙ[ÙB™\^Ý]]Ë•šY]Ñ\JØÙ[™KšY]ÊÛÜ›ÜÊKžŽÂˆÙ[™Y‚ˆÙ[™Y‚ˆÚY›™YˆUŒB˜\ˆ]•\]Yˆ™XÌ™]™XÌ™Š‹ŠNÂˆÙ[™Y‚ˆÚY™YˆPRS•UŒB™\^Ý]]Ë“XZ[•UŒO]]•\]YÂˆÙ[™Y‚ˆÚY›™YˆUŒ‚˜\ˆ]Œ•\]Yˆ™XÌ™]™XÌ™Š‹ŠNÂˆÙ[™Y‚ˆÚY™YˆPRS•UŒ‚™\^Ý]]Ë“XZ[•UŒ]]Œ•\]YÂˆÙ[™Y‚ˆÚ[˜ÛYO]•˜\šXX›QXÛ\˜][Û–ÌË‹×BˆÚ[˜ÛYOØ[\\•™\^[\[Y[][ÛŠÑQ’S‘SSQWËQ‘•TÑKÕT–RS‘ÓSQWËY™\ÙKÓPU’VSQWËY™\ÙKÒS‘“ÓSQWËY™\ÙR[™›ÜËž
BˆÚ[˜ÛYOØ[\\•™\^[\[Y[][ÛŠÑQ’S‘SSQWËURSÕT–RS‘ÓSQWË]Z[ÓPU’VSQWË]Z[ÒS‘“ÓSQWË]Z[[™›ÜËž
BˆÚ[˜ÛYOØ[\\•™\^[\[Y[][ÛŠÑQ’S‘SSQWËSP’QS•ÕT–RS‘ÓSQWË[XšY[ÓPU’VSQWË[XšY[ÒS‘“ÓSQWË[XšY[[™›ÜËž
BˆÚ[˜ÛYOØ[\\•™\^[\[Y[][ÛŠÑQ’S‘SSQWËÔPÒUKÕT–RS‘ÓSQWËÜXÚ]KÓPU’VSQWËÜXÚ]KÒS‘“ÓSQWËÜXÚ]R[™›ÜËž
BˆÚ[˜ÛYOØ[\\•™\^[\[Y[][ÛŠÑQ’S‘SSQWËSRTÔÒU‘KÕT–RS‘ÓSQWË[Z\ÜÚ]™KÓPU’VSQWË[Z\ÜÚ]™KÒS‘“ÓSQWË[Z\ÜÚ]™R[™›ÜËž
BˆÚ[˜ÛYOØ[\\•™\^[\[Y[][ÛŠÑQ’S‘SSQWËQÒPTÕT–RS‘ÓSQWËYÚX\ÓPU’VSQWËYÚX\ÒS‘“ÓSQWËYÚX\[™›ÜËž
BˆÚYˆYš[™Y
ÔPÕST•T“JBˆÚ[˜ÛYOØ[\\•™\^[\[Y[][ÛŠÑQ’S‘SSQWËÔPÕST‹ÕT–RS‘ÓSQWËÜXÝ[\‹ÓPU’VSQWËÜXÝ[\‹ÒS‘“ÓSQWËÜXÝ[\’[™›ÜËž
BˆÙ[™Y‚ˆÚ[˜ÛYOØ[\\•™\^[\[Y[][ÛŠÑQ’S‘SSQWË•STÕT–RS‘ÓSQWË[\ÓPU’VSQWË[\ÒS‘“ÓSQWË[\[™›ÜËž
BˆÚ[˜ÛYOØ[\\•™\^[\[Y[][ÛŠÑQ’S‘SSQWËPÐSÕT–RS‘ÓSQWËXØ[ÓPU’VSQWËXØ[ÒS‘“ÓSQWËXØ[[™›ÜËž
BˆÚ[˜ÛYO[\™\^‚ˆÚ[˜ÛYOÛ\[™U™\^‚ˆÚ[˜ÛYO›ÙÕ™\^‚ˆÚ[˜ÛYOÚYÝÜÕ™\^–Ì‹›X^Ú[][[™[Ý\ÓYÚ×BˆÚ[˜ÛYO™\^ÛÛÜ“Z^[™Ï‚ˆÚ[˜ÛYOÙÑ\™\^‚ˆÙYš[™HÕTÕÓWÕ‘T•VÓPRS—ÑS‘ŸB˜ÜK”ÚY\œÔÝÜ™UÑÔÓÝÙ×_
K”ÚY\œÔÝÜ™UÑÔÓÝÙ×O\ÌJNØÛÛœÝ•OVÒÝ‹‹ÓK•K]‹ÒKK‹K“KÕKK‹RKUKUK•KUK	K•KUKÕKUK‹ÒKKKKÕKÕK]‹RKK’KLWNÙ›ÜŠÛÛœÝˆÙˆ•J\K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÜ‹›˜[YW_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÜ‹›˜[YWO\‹œÚY\ŠNØÛÛœÝ•O^Û˜[YNÙËÚY\ŽœÌ_KUOSØš™XÝ™œ™Y^™JØš™XÝ™Yš[™T›Ü\J××Ü›Ý××Î›[Y˜][™\^ÚY\•ÑÔÓ“•_KÞ[X›ÛÔÝš[™ÕYËÝ˜[YNˆ“[Ù[HŸJJKÙÏHœ™T\ÜÑXÛ\˜][Ûˆ‹ŒOXÚY™Yˆ‘TTÔÂˆÚY™Yˆ‘TTÔ×ÓÐÐSÔÔÒUSÓ‚˜\žZ[™È”ÜÚ][Ûˆˆ™XÌÙŽÂˆÙ[™Y‚ˆÚY™Yˆ‘TTÔ×ÑT˜\žZ[™È•šY]ÔÜÎˆ™XÌÙŽÂˆÙ[™Y‚ˆÚY™Yˆ‘TTÔ×Ó“Ô“PSV‘QÕ’QU×ÑT˜\žZ[™È“›Ü›UšY]Ñ\ˆŒÌŽÂˆÙ[™Y‚ˆÚYˆYš[™Y
‘TTÔ×Õ‘SÐÒUJHYš[™Y
‘TTÔ×Õ‘SÐÒUWÓS‘PTŠB˜\žZ[™ÈÝ\œ™[ÜÚ][ÛŽˆ™XÍŽÝ˜\žZ[™È”™]š[Ý\ÔÜÚ][ÛŽˆ™XÍŽÂˆÙ[™Y‚ˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÓÙ×_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÓÙ×O\ŒJNØÛÛœÝ•O^Û˜[YN“ÙËÚY\ŽœŒ_KÏH›Ú]XÛ\˜][Ûˆ‹ŒOXÚY™YˆÔ‘T—ÒS‘TS‘S•ÕS”ÔT‘SÖBˆÙYš[™HPVÑTNNNNKŒ˜\ˆÚ]\Ø[\\”Ø[\\ŽˆØ[\\ŽÝ˜\ˆÚ]\Ø[\\Žˆ^\™WÌ™ŒÌŽÝ˜\ˆÚ]œ›ÛÛÛÜ”Ø[\\”Ø[\\ŽˆØ[\\ŽÝ˜\ˆÚ]œ›ÛÛÛÜ”Ø[\\Žˆ^\™WÌ™ŒÌŽÂˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÓ×_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÓ×O[ŒJNØÛÛœÝ•O^Û˜[YN“ËÚY\Ž›Œ_K™ÏH›YÚX›ÑXÛ\˜][Ûˆ‹LOXÚY™YˆQÒÖBœÝXÝYÚÖBžÝ“YÚ]Nˆ™XÍ‹“YÚY™\ÙNˆ™XÍ‹“YÚÜXÝ[\Žˆ™XÍ‹ˆÚY™YˆÔÕQÒÖB“YÚ\™XÝ[ÛŽˆ™XÍ‹“YÚ˜[Ù™Žˆ™XÍ‹ˆÙ[YˆYš[™Y
ÒS•QÒÖJB“YÚ˜[Ù™Žˆ™XÍ‹ˆÙ[YˆYš[™Y
SRSQÒÖJB“YÚÜ›Ý[™ˆ™XÌÙ‹ˆÙ[YˆYš[™Y
ÓTÕQÒÖJB”ÛXÙQ]Nˆ™XÌ™‹”ÛXÙT˜[™Ù\Îˆ\œ˜^O™XÍ‹ÓTÕQÒÔÓPÑTÏ‹ˆÙ[™Y‚ˆÚYˆYš[™Y
T‘PSQÒÖJH	‰ˆYš[™Y
T‘PSQÒTÑQ
H	‰ˆYš[™Y
T‘PSQÒÕTÔ•Q
B“YÚÚYˆ™XÍ‹“YÚZYÚˆ™XÍ‹ˆÙ[™Y‚œÚYÝÜÒ[™›Îˆ™XÍ‹™\˜[Y\Îˆ™XÌ™ŸHÝ˜\[šY›Ü›OˆYÚÖHˆYÚÖNÂˆÚY™YˆQTÓQÒVT‘^ÖB˜\ˆY\ÓYÚ^\™^ÖTØ[\\ŽˆØ[\\ŽÝ˜\ˆY\ÓYÚ^\™^ÖNˆ^\™WÌ™ŒÌŽÂˆÙ[™Y‚ˆÚY™Yˆ‘PÕT‘PSQÒSRTÔÒSÓ•VT‘^ÖB˜\ˆ™XÝ\™XSYÚ[Z\ÜÚ[Û•^\™^ÖTØ[\\ŽˆØ[\\ŽÝ˜\ˆ™XÝ\™XSYÚ[Z\ÜÚ[Û•^\™^ÖNˆ^\™WÌ™ŒÌŽÂˆÙ[™Y‚ˆÚY™Yˆ“Ò‘PÕQQÒVT‘^ÖB[šY›Ü›H^\™T›Ú™XÝ[Û“X]š^ÖNˆX]ŽÝ˜\ˆ›Ú™XÝ[Û“YÚ^\™^ÖTØ[\\ŽˆØ[\\ŽÝ˜\ˆ›Ú™XÝ[Û“YÚ^\™^ÖNˆ^\™WÌ™ŒÌŽÂˆÙ[™Y‚ˆÚY™YˆÓTÕQÒÖB˜\ˆYÚ]U^\™^ÖNˆ^\™WÌ™ŒÌŽÝ˜\ÝÜ˜YÙK™XYˆ[SX\ÚÐY™™\žÖNˆ\œ˜^OLÌŽÂˆÙ[™Y‚ˆÚY™YˆÒQÕÞÖBˆÚY™YˆÒQÕÐÔÓ^ÖB[šY›Ü›HYÚX]š^ÖNˆ\œ˜^OX]‹ÒQÕÐÔÓS•SWÐÐTÐÐQTÞÖOŽÝ[šY›Ü›HšY]Ñœ\Ý[VžÖNˆ\œ˜^OŒÌ‹ÒQÕÐÔÓS•SWÐÐTÐÐQTÞÖOŽÝ[šY›Ü›Hœ\Ý[S[™ÝÞÖNˆ\œ˜^OŒÌ‹ÒQÕÐÔÓS•SWÐÐTÐÐQTÞÖOŽÝ[šY›Ü›HØ\ØØYP›[™˜XÝÜžÖNˆŒÌŽÝ˜\žZ[™È”ÜÚ][Û‘œ›ÛSYÚÖWÌˆ™XÍŽÝ˜\žZ[™È‘\Y]šXÞÖWÌˆŒÌŽÝ˜\žZ[™È”ÜÚ][Û‘œ›ÛSYÚÖWÌNˆ™XÍŽÝ˜\žZ[™È‘\Y]šXÞÖWÌNˆŒÌŽÝ˜\žZ[™È”ÜÚ][Û‘œ›ÛSYÚÖWÌŽˆ™XÍŽÝ˜\žZ[™È‘\Y]šXÞÖWÌŽˆŒÌŽÝ˜\žZ[™È”ÜÚ][Û‘œ›ÛSYÚÖWÌÎˆ™XÍŽÝ˜\žZ[™È‘\Y]šXÞÖWÌÎˆŒÌŽÝ˜\žZ[™È”ÜÚ][Û‘œ›ÛPØ[Y\˜^ÖNˆ™XÍŽÝ˜\š]˜]Oˆ”ÜÚ][Û‘œ›ÛSYÚÖNˆ\œ˜^O™XÍ‹ŽÝ˜\š]˜]Oˆ‘\Y]šXÞÖHˆ\œ˜^OŒÌ‹ŽÂˆÚYˆYš[™Y
ÒQÕÔÔÔÞÖJB˜\ˆÚYÝÕ^\™^ÖTØ[\\ŽˆØ[\\—ØÛÛ\\š\ÛÛŽÈ˜\ˆÚYÝÕ^\™^ÖNˆ^\™WÙ\Ì™Ø\œ˜^NÝ˜\ˆ\^\™^ÖTØ[\\ŽˆØ[\\ŽÝ˜\ˆ\^\™^ÖNˆ^\™WÌ™Ø\œ˜^OŒÌŽÝ[šY›Ü›HYÚÚ^™UUÛÜœ™XÝ[ÛžÖNˆ\œ˜^O™XÌ™‹ÒQÕÐÔÓS•SWÐÐTÐÐQTÞÖOŽÝ[šY›Ü›H\ÛÜœ™XÝ[ÛžÖNˆ\œ˜^OŒÌ‹ÒQÕÐÔÓS•SWÐÐTÐÐQTÞÖOŽÝ[šY›Ü›H[[Xœ˜Q\šÛ™\ÜÞÖNˆŒÌŽÂˆÙ[YˆYš[™Y
ÒQÕÔÑžÖJB˜\ˆÚYÝÕ^\™^ÖTØ[\\ŽˆØ[\\—ØÛÛ\\š\ÛÛŽÝ˜\ˆÚYÝÕ^\™^ÖNˆ^\™WÙ\Ì™Ø\œ˜^NÂˆÙ[ÙH˜\ˆÚYÝÕ^\™^ÖTØ[\\ŽˆØ[\\ŽÈ˜\ˆÚYÝÕ^\™^ÖNˆ^\™WÌ™Ø\œ˜^OŒÌŽÂˆÙ[™Y‚ˆÚY™YˆÒQÕÐÔÓQP•QÞÖB˜ÛÛœÝØ\ØØYPÛÛÜœÓ][\Y\žÖNˆ\œ˜^O™XÌÙ‹X\œ˜^O™XÌÙ‹‚Š™XÌÙˆ
KKŒŒ
K™XÌÙˆ
ŒKKŒ
K™XÌÙˆ
ŒŒKH
K™XÌÙˆ
KKŒKH
K™XÌÙˆ
KKKKŒ
K™XÌÙˆ
KŒKŒKŒ
K™XÌÙˆ
ŒKŒKH
K™XÌÙˆ
KËKÍH
BŠNÂˆÙ[™Y‚ˆÙ[YˆYš[™Y
ÒQÕÐÕP‘^ÖJB˜\ˆÚYÝÕ^\™^ÖTØ[\\ŽˆØ[\\ŽÝ˜\ˆÚYÝÕ^\™^ÖNˆ^\™WØÝX™OŒÌŽÂˆÙ[ÙB˜\žZ[™È”ÜÚ][Û‘œ›ÛSYÚÖNˆ™XÍŽÝ˜\žZ[™È‘\Y]šXÞÖNˆŒÌŽÂˆÚYˆYš[™Y
ÒQÕÔÔÔÞÖJB˜\ˆÚYÝÕ^\™^ÖTØ[\\ŽˆØ[\\—ØÛÛ\\š\ÛÛŽÈ˜\ˆÚYÝÕ^\™^ÖNˆ^\™WÙ\Ì™Ý˜\ˆ\^\™^ÖTØ[\\ŽˆØ[\\ŽÈ˜\ˆ\^\™^ÖNˆ^\™WÌ™ŒÌŽÂˆÙ[YˆYš[™Y
ÒQÕÔÑžÖJB˜\ˆÚYÝÕ^\™^ÖTØ[\\ŽˆØ[\\—ØÛÛ\\š\ÛÛŽÝ˜\ˆÚYÝÕ^\™^ÖNˆ^\™WÙ\Ì™ÂˆÙ[ÙB˜\ˆÚYÝÕ^\™^ÖTØ[\\ŽˆØ[\\ŽÈ˜\ˆÚYÝÕ^\™^ÖNˆ^\™WÌ™ŒÌŽÂˆÙ[™Y‚[šY›Ü›HYÚX]š^ÖNˆX]ŽÂˆÙ[™Y‚ˆÙ[™Y‚ˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÑ™×_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÑ™×OXLJNØÛÛœÝ•O^Û˜[YN‘™ËÚY\Ž˜L_K™ÏH›Ò[\‘[˜Ý[ÛœÈ‹ÌOX›ˆÕ]ŠŽˆ™XÌÙ‹Žˆ™XÌÙ‹›ÝYÚ™\ÜÎˆŒÌŠKO™XÌ™ˆÝ˜\ˆUÒV‘NˆŒÌMŒÝ˜\ˆUÐÐSNˆŒÌJUÒV‘KLKŒ
KÓUÒV‘NÝ˜\ˆU’PTÎ™ŒÌLKÓUÒV‘NÝ˜\ˆÝ•Ž™ŒÌ\Ø]\˜]JÝ
‹ˆ
H
NÝ˜\ˆ]Ž™XÌ™]™XÌ™Š›ÝYÚ™\ÜËÜ\
KŒYÝ•ˆ
H
NÝ]]]Š“UÐÐSJÓU’PTÎÜ™]\›ˆ]ŽßB™›ˆÐÛ\YÜ\™Q›Ü›Q˜XÝÜŠŽ™XÌÙˆ
KO™ŒÌˆÝ˜\ˆˆŒÌ[[™Ý
ˆ
NÜ™]\›ˆX^


›
Ù‹žˆ
KÊ
ÌKŒ
KŒ
NßB™›ˆÑYÙU™XÝÜ‘›Ü›Q˜XÝÜŠŒN™XÌÙ‹ŒŽ™XÌÙˆ
KO™XÌÙˆÝ˜\ˆ™ŒÌYÝ
ŒKŒˆ
NÝ˜\ˆN™ŒÌXXœÊ
NÝ˜\ˆN™ŒÌLŽMÎNJÊMLMMJÌŒMLŒŠžH
JžNÝ˜\ˆŽ™ŒÌLËMÍNM
ÊŒMŒMÌ
ÞH
JžNÝ˜\ˆŽ™ŒÌXKØŽÝ˜\ˆ]TÚ[]N™ŒÌLŒÚYŠŒŒ
BžÝ]TÚ[]O]ŽßB™[ÙBžÝ]TÚ[]OLJš[™\œÙTÜ\
X^
KŒ^
žŒH
H
K]ŽßBœ™]\›ˆÜ›ÜÜÊŒKŒˆ
J]TÚ[]NßB™›ˆÑ]˜[X]JŽ™XÌÙ‹Ž™XÌÙ‹™XÌÙ‹R[ŽˆX]ÞÏŒÌ‹™XÝÛÛÜ™Ì™XÌÙ‹™XÝÛÛÜ™ÌN™XÌÙ‹™XÝÛÛÜ™ÌŽ™XÌÙ‹™XÝÛÛÜ™ÌÎ™XÌÙˆ
KO™XÌÙˆÝ˜\ˆŒN™XÌÙ\™XÝÛÛÜ™ÌK\™XÝÛÛÜ™ÌÝ˜\ˆŒŽ™XÌÙ\™XÝÛÛÜ™ÌË\™XÝÛÛÜ™ÌÝ˜\ˆYÚ›Ü›X[™XÌÙXÜ›ÜÜÊŒKŒˆ
NÚYŠÝ
YÚ›Ü›X[\™XÝÛÛÜ™Ì
OŒ
^Ü™]\›ˆ™XÌÙŠŒ
NßB˜\ˆN™XÌÙ[›Ü›X[^™J‹SŠ™Ý
‹ˆ
H
NÝ˜\ˆŽ™XÌÙKHÜ›ÜÜÊ‹H
NÈ˜\ˆX]ˆX]ÞÏŒÌ[R[Š˜[œÜÜÙSX]ÊX]ÞÏŒÌŠK‹ˆ
H
NÝ˜\ˆÛÛÜ™Ìˆ™XÌÙ[X]
Š™XÝÛÛÜ™ÌT
NÝ˜\ˆÛÛÜ™ÌNˆ™XÌÙ[X]
Š™XÝÛÛÜ™ÌKT
NÝ˜\ˆÛÛÜ™ÌŽˆ™XÌÙ[X]
Š™XÝÛÛÜ™Ì‹T
NÝ˜\ˆÛÛÜ™ÌÎˆ™XÌÙ[X]
Š™XÝÛÛÜ™ÌËT
NØÛÛÜ™Ì[›Ü›X[^™JÛÛÜ™Ì
NØÛÛÜ™ÌO[›Ü›X[^™JÛÛÜ™ÌH
NØÛÛÜ™Ì[›Ü›X[^™JÛÛÜ™Ìˆ
NØÛÛÜ™ÌÏ[›Ü›X[^™JÛÛÜ™ÌÈ
NÝ˜\ˆ™XÝÜ‘›Ü›Q˜XÝÜŽ™XÌÙ]™XÌÊŒ
NÝ™XÝÜ‘›Ü›Q˜XÝÜŠÏSÑYÙU™XÝÜ‘›Ü›Q˜XÝÜŠÛÛÜ™ÌÛÛÜ™ÌH
NÝ™XÝÜ‘›Ü›Q˜XÝÜŠÏSÑYÙU™XÝÜ‘›Ü›Q˜XÝÜŠÛÛÜ™ÌKÛÛÜ™Ìˆ
NÝ™XÝÜ‘›Ü›Q˜XÝÜŠÏSÑYÙU™XÝÜ‘›Ü›Q˜XÝÜŠÛÛÜ™Ì‹ÛÛÜ™ÌÈ
NÝ™XÝÜ‘›Ü›Q˜XÝÜŠÏSÑYÙU™XÝÜ‘›Ü›Q˜XÝÜŠÛÛÜ™ÌËÛÛÜ™Ì
NÝ˜\ˆ™\Ý[™ŒÌSÐÛ\YÜ\™Q›Ü›Q˜XÝÜŠ™XÝÜ‘›Ü›Q˜XÝÜˆ
NÜ™]\›ˆ™XÌÙŠ™\Ý[
NßBœÝXÝ\™XSYÚ]BžÑY™\ÙNˆ™XÌÙ‹”ÜXÝ[\Žˆ™XÌÙ‹‘œ™\Û™[ˆ™XÍŸNÙ›ˆÛÛ\]P\™XSYÚÜXÝ[\‘Y™\ÙQœ™\Û™[
ÌNˆ^\™WÌ™ŒÌ‹ÌTØ[\\ŽœØ[\\‹ÌŽ^\™WÌ™ŒÌ‹Ì”Ø[\\ŽœØ[\\‹šY]Ñ\Žˆ™XÌÙ‹›Ü›X[™XÌÙ‹ÜÚ][ÛŽ™XÌÙ‹YÚÜÎ™XÌÙ‹[•ÚY™XÌÙ‹[’ZYÚ™XÌÙ‹›ÝYÚ™\ÜÎ™ŒÌŠKO˜\™XSYÚ]HÝ˜\ˆ™\Ý[ˆ\™XSYÚ]NÝ˜\ˆ™XÝÛÛÜ™Ì™XÌÙ[YÚÜÊÚ[•ÚYZ[’ZYÚÈ˜\ˆ™XÝÛÛÜ™ÌN™XÌÙ[YÚÜËZ[•ÚYZ[’ZYÚÝ˜\ˆ™XÝÛÛÜ™ÌŽ™XÌÙ[YÚÜËZ[•ÚY
Ú[’ZYÚÝ˜\ˆ™XÝÛÛÜ™ÌÎ™XÌÙ[YÚÜÊÚ[•ÚY
Ú[’ZYÚÂˆÚY™YˆÔPÕST•T“B˜\ˆ]Ž™XÌ™SÕ]Š›Ü›X[šY]Ñ\‹›ÝYÚ™\ÜÈ
NÝ˜\ˆN™XÍ]^\™TØ[\JÌKÌTØ[\\‹]ˆ
NÝ˜\ˆŽ™XÍ]^\™TØ[\JÌ‹Ì”Ø[\\‹]ˆ
NÝ˜\ˆR[Ž›X]ÞÏŒÌ[X]ÞÏŒÌŠ™XÌÙŠKžKžH
K™XÌÙŠK
K™XÌÙŠKž‹KÈ
BŠNÜ™\Ý[‘œ™\Û™[]ŽÜ™\Ý[”ÜXÝ[\SÑ]˜[X]J›Ü›X[šY]Ñ\‹ÜÚ][Û‹R[‹™XÝÛÛÜ™Ì™XÝÛÛÜ™ÌK™XÝÛÛÜ™Ì‹™XÝÛÛÜ™ÌÈ
NÂˆÙ[™Y‚˜\ˆR[‘[\N›X]ÞÏŒÌ[X]ÞÏŒÌŠ™XÌÙŠK
K™XÌÙŠK
K™XÌÙŠH
BŠNÜ™\Ý[‘Y™\ÙJÏSÑ]˜[X]J›Ü›X[šY]Ñ\‹ÜÚ][Û‹R[‘[\K™XÝÛÛÜ™Ì™XÝÛÛÜ™ÌK™XÝÛÛÜ™Ì‹™XÝÛÛÜ™ÌÈ
NÜ™]\›ˆ™\Ý[ßB™›ˆ™]ÚY™\ÙQš[\™Y^\™J^YÚš[\™Yˆ^\™WÌ™ŒÌ‹^YÚš[\™YØ[\\ŽˆØ[\\‹WÎˆ™XÌÙ‹—Îˆ™XÌÙ‹×Îˆ™XÌÙ‹Îˆ™XÌÙŠKO™XÌÙˆÝ˜\ˆŒNˆ™XÌÙ\—Ë\WÎÝ˜\ˆŒŽˆ™XÌÙ\Ë\WÎÝ˜\ˆ[™SÜÎˆ™XÌÙXÜ›ÜÜÊŒKŒŠNÝ˜\ˆ[™P\™XTÜ]X\™YˆŒÌYÝ
[™SÜË[™SÜÊNÝ˜\ˆ[™Q\Ý[™P\™XNˆŒÌYÝ
[™SÜËWÊNÝ˜\ˆˆ™XÌÙ\[™Q\Ý[™P\™XJœ[™SÜËÜ[™P\™XTÜ]X\™Y\WÎÝ˜\ˆÝÕŒWÕŒŽˆŒÌYÝ
ŒKŒŠNÝ˜\ˆ[—ÙÝÕŒWÕŒNˆŒÌLKŒÙÝ
ŒKŒJNÝ˜\ˆŒ—Îˆ™XÌÙUŒ‹UŒJ™ÝÕŒWÕŒŠš[—ÙÝÕŒWÕŒNÝ˜\ˆ]Žˆ™XÌ™ŽÔ]‹žOYÝ
Œ—Ë
KÙÝ
Œ—ËŒ—ÊNÔ]‹žYÝ
ŒK
Jš[—ÙÝÕŒWÕŒKYÝÕŒWÕŒŠš[—ÙÝÕŒWÕŒJ”]‹žNÝ˜\ˆˆŒÌXXœÊ[™Q\Ý[™P\™XJKÜÝÊ[™P\™XTÜ]X\™YÍJNÝ˜\ˆØ[\SÑˆŒÌ[ÙÊŒŒ
™
KÛÙÊËŒ
NÝ˜\ˆØ[\UUŽˆ™XÌ™]™XÌ™ŠŒLKŒLJJÊ™XÌ™ŠÍJJ”]ŠNÜØ[\UU‹žLKŒ\Ø[\UU‹žÜ™]\›ˆ^\™TØ[\S]™[
^YÚš[\™Y^YÚš[\™YØ[\\‹Ø[\UU‹Ø[\SÑ
Kœ™ØŽßB™›ˆÑ]˜[X]UÚ][Z\ÜÚ[ÛŠŽˆ™XÌÙ‹Žˆ™XÌÙ‹ˆ™XÌÙ‹R[ŽˆX]ÞÏŒÌ‹™XÝÛÛÜ™Ìˆ™XÌÙ‹™XÝÛÛÜ™ÌNˆ™XÌÙ‹™XÝÛÛÜ™ÌŽˆ™XÌÙ‹™XÝÛÛÜ™ÌÎˆ™XÌÙ‹^š[\™YX\ˆ^\™WÌ™ŒÌ‹^š[\™YX\Ø[\\ŽˆØ[\\ŠKO™XÌÙˆÝ˜\ˆŒNˆ™XÌÙ\™XÝÛÛÜ™ÌK\™XÝÛÛÜ™ÌÝ˜\ˆŒŽˆ™XÌÙ\™XÝÛÛÜ™ÌË\™XÝÛÛÜ™ÌÝ˜\ˆYÚ›Ü›X[ˆ™XÌÙXÜ›ÜÜÊŒKŒŠNÚYˆ
Ý
YÚ›Ü›X[\™XÝÛÛÜ™Ì
OŒ
HÜ™]\›ˆ™XÌÙŠŒ
NßB˜\ˆNˆ™XÌÙ[›Ü›X[^™J‹SŠ™Ý
‹ŠJNÝ˜\ˆŽˆ™XÌÙKXÜ›ÜÜÊ‹JNÝ˜\ˆX]ˆX]ÞÏŒÌ[R[Š˜[œÜÜÙSX]ÊX]ÞÏŒÌŠK‹ŠJNÝ˜\ˆÛÛÜ™Ìˆ™XÌÙ[X]
Š™XÝÛÛÜ™ÌT
NÝ˜\ˆÛÛÜ™ÌNˆ™XÌÙ[X]
Š™XÝÛÛÜ™ÌKT
NÝ˜\ˆÛÛÜ™ÌŽˆ™XÌÙ[X]
Š™XÝÛÛÜ™Ì‹T
NÝ˜\ˆÛÛÜ™ÌÎˆ™XÌÙ[X]
Š™XÝÛÛÜ™ÌËT
NÝ˜\ˆ^\™SYÚˆ™XÌÙQ™]ÚY™\ÙQš[\™Y^\™J^š[\™YX\^š[\™YX\Ø[\\‹ÛÛÜ™ÌÛÛÜ™ÌKÛÛÜ™Ì‹ÛÛÜ™ÌÊNØÛÛÜ™Ì[›Ü›X[^™JÛÛÜ™Ì
NØÛÛÜ™ÌO[›Ü›X[^™JÛÛÜ™ÌJNØÛÛÜ™Ì[›Ü›X[^™JÛÛÜ™ÌŠNØÛÛÜ™ÌÏ[›Ü›X[^™JÛÛÜ™ÌÊNÝ˜\ˆ™XÝÜ‘›Ü›Q˜XÝÜŽˆ™XÌÙ]™XÌÙŠŒ
NÝ™XÝÜ‘›Ü›Q˜XÝÜŠÏSÑYÙU™XÝÜ‘›Ü›Q˜XÝÜŠÛÛÜ™ÌÛÛÜ™ÌJNÝ™XÝÜ‘›Ü›Q˜XÝÜŠÏSÑYÙU™XÝÜ‘›Ü›Q˜XÝÜŠÛÛÜ™ÌKÛÛÜ™ÌŠNÝ™XÝÜ‘›Ü›Q˜XÝÜŠÏSÑYÙU™XÝÜ‘›Ü›Q˜XÝÜŠÛÛÜ™Ì‹ÛÛÜ™ÌÊNÝ™XÝÜ‘›Ü›Q˜XÝÜŠÏSÑYÙU™XÝÜ‘›Ü›Q˜XÝÜŠÛÛÜ™ÌËÛÛÜ™Ì
NÝ˜\ˆ™\Ý[ˆŒÌSÐÛ\YÜ\™Q›Ü›Q˜XÝÜŠ™XÝÜ‘›Ü›Q˜XÝÜŠNÜ™]\›ˆ™XÌÙŠ™\Ý[
J^\™SYÚßB™›ˆÛÛ\]P\™XSYÚÜXÝ[\‘Y™\ÙQœ™\Û™[Ú][Z\ÜÚ[ÛŠÌNˆ^\™WÌ™ŒÌ‹ÌTØ[\\ŽœØ[\\‹ÌŽ^\™WÌ™ŒÌ‹Ì”Ø[\\ŽœØ[\\‹[Z\ÜÚ[Û•^\™Nˆ^\™WÌ™ŒÌ‹[Z\ÜÚ[Û•^\™TØ[\\ŽœØ[\\‹šY]Ñ\Žˆ™XÌÙ‹›Ü›X[™XÌÙ‹ÜÚ][ÛŽ™XÌÙ‹YÚÜÎ™XÌÙ‹[•ÚY™XÌÙ‹[’ZYÚ™XÌÙ‹›ÝYÚ™\ÜÎ™ŒÌŠKO˜\™XSYÚ]HÝ˜\ˆ™\Ý[ˆ\™XSYÚ]NÝ˜\ˆ™XÝÛÛÜ™Ìˆ™XÌÙ[YÚÜÊÚ[•ÚYZ[’ZYÚÈ˜\ˆ™XÝÛÛÜ™ÌNˆ™XÌÙ[YÚÜËZ[•ÚYZ[’ZYÚÝ˜\ˆ™XÝÛÛÜ™ÌŽˆ™XÌÙ[YÚÜËZ[•ÚY
Ú[’ZYÚÝ˜\ˆ™XÝÛÛÜ™ÌÎˆ™XÌÙ[YÚÜÊÚ[•ÚY
Ú[’ZYÚÂˆÚY™YˆÔPÕST•T“B˜\ˆ]Žˆ™XÌ™SÕ]Š›Ü›X[šY]Ñ\‹›ÝYÚ™\ÜÊNÝ˜\ˆNˆ™XÍ]^\™TØ[\JÌKÌTØ[\\‹]ŠNÝ˜\ˆŽˆ™XÍ]^\™TØ[\JÌ‹Ì”Ø[\\‹]ŠNÝ˜\ˆR[ŽˆX]ÞÏŒÌ[X]ÞÏŒÌŠ™XÌÙŠKžKžJK™XÌÙŠK
K™XÌÙŠKž‹KÊBŠNÜ™\Ý[”ÜXÝ[\SÑ]˜[X]UÚ][Z\ÜÚ[ÛŠ›Ü›X[šY]Ñ\‹ÜÚ][Û‹R[‹™XÝÛÛÜ™Ì™XÝÛÛÜ™ÌK™XÝÛÛÜ™Ì‹™XÝÛÛÜ™ÌË[Z\ÜÚ[Û•^\™K[Z\ÜÚ[Û•^\™TØ[\\ŠNÜ™\Ý[‘œ™\Û™[]ŽÂˆÙ[™Y‚˜\ˆR[‘[\NˆX]ÞÏŒÌ[X]ÞÏŒÌŠ™XÌÙŠK
K™XÌÙŠK
K™XÌÙŠJBŠNÜ™\Ý[‘Y™\ÙOSÑ]˜[X]UÚ][Z\ÜÚ[ÛŠ›Ü›X[šY]Ñ\‹ÜÚ][Û‹R[‘[\K™XÝÛÛÜ™Ì™XÝÛÛÜ™ÌK™XÝÛÛÜ™Ì‹™XÝÛÛÜ™ÌË[Z\ÜÚ[Û•^\™K[Z\ÜÚ[Û•^\™TØ[\\ŠNÜ™]\›ˆ™\Ý[ßB˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÓ™×_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÓ™×O[ÌJNØÛÛœÝÕO^Û˜[YN“™ËÚY\Ž›Ì_KYÏH˜Û\Ý\™YYÚ[™Ñ[˜Ý[ÛœÈ‹OXÝXÝÛ\Ý\™YYÚÝ“YÚ]Nˆ™XÍ‹“YÚY™\ÙNˆ™XÍ‹“YÚÜXÝ[\Žˆ™XÍ‹“YÚ\™XÝ[ÛŽˆ™XÍ‹“YÚ˜[Ù™Žˆ™XÍ‹B™›ˆÙ]Û\Ý\™YYÚ
YÚ]U^\™Nˆ^\™WÌ™ŒÌ‹[™^ˆLÌŠKOÛ\Ý\™YYÚÜ™]\›ˆÛ\Ý\™YYÚ
^\™SØY
YÚ]U^\™K™XÌJ[™^
K
K^\™SØY
YÚ]U^\™K™XÌJK[™^
K
K^\™SØY
YÚ]U^\™K™XÌJ‹[™^
K
K^\™SØY
YÚ]U^\™K™XÌJË[™^
K
K^\™SØY
YÚ]U^\™K™XÌJ[™^
K
BŠNßB™›ˆÙ]Û\Ý\™YÛXÙR[™^
ÛXÙQ]Nˆ™XÌ™‹šY]Ñ\ˆŒÌŠKOšLÌˆÜ™]\›ˆLÌŠÙÊšY]Ñ\
JœÛXÙQ]Kž
ÜÛXÙQ]KžJNßB˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÕY×_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÕY×O[JNØÛÛœÝÕO^Û˜[YN•YËÚY\Ž›_K™ÏH˜Û\Ý\™YYÚ[™ÐÛÛ\]H‹ÌOXÚYˆYš[™Y
ÓTÕQÒÖJH	‰ˆYš[™Y
ÓTÕQÒÐUÒ
H	‰ˆÓTÕQÒÐUÒŒ™›ˆÛÛ\]PÛ\Ý\™YYÚ[™ÞÖJ›YÚ]U^\™Nˆ^\™WÌ™ŒÌ‹šY]Ñ\™XÝ[Û•Îˆ™XÌÙ‹“›Ü›X[ˆ™XÌÙ‹›YÚ]Nˆ™XÍ‹œÛXÙT˜[™ÙNˆ™XÌK™ÛÜÜÚ[™\ÜÎˆŒÌ‚ŠKO›YÚ[™Ò[™›ÈÝ˜\ˆ™\Ý[ˆYÚ[™Ò[™›ÎÛ][TÜÚ][Û]™XÌJœ˜YÛY[[œ]ËœÜÚ][Û‹žJ›YÚ]KžJNÛ]X\ÚÔ™\ÛÛ][Û]™XÌJYÚ]KžÊNÝ˜\ˆ[R[™^J[TÜÚ][Û‹ž
›X\ÚÔ™\ÛÛ][Û‹ž
Ý[TÜÚ][Û‹žJJ›X\ÚÔ™\ÛÛ][Û‹žNÛ]˜]Ú˜[™ÙO\ÛXÙT˜[™ÙKÐÓTÕQÒÐUÒÝ˜\ˆ˜]ÚÙ™œÙ]X˜]Ú˜[™ÙKž
ÓTÕQÒÐUÒÝ[R[™^
ÏX˜]Ú˜[™ÙKžÙ›Üˆ
˜\ˆOX˜]Ú˜[™ÙKžÈOX˜]Ú˜[™ÙKžNÈJÏLJHÝ˜\ˆX\ÚÏ][SX\ÚÐY™™\žÖVÝ[R[™^NÝ[R[™^
ÏLNÛ]X\ÚÓÙ™œÙ][X^
ÛXÙT˜[™ÙKž˜]ÚÙ™œÙ]
KX˜]ÚÙ™œÙ]È›]X\ÚÕÚY[Z[ŠÛXÙT˜[™ÙKžKX˜]ÚÙ™œÙ]
ÌKÓTÕQÒÐUÒ
NÛX\ÚÏY^˜XÝš]ÊX\ÚËX\ÚÓÙ™œÙ]X\ÚÕÚY
NÝÚ[HX\ÚÈOHÛ]˜Z[[™ÏYš\œÝ˜Z[[™Ðš]
X\ÚÊNÛX\ÚÈH]O˜Z[[™ÎÛ]YÚYÙ]Û\Ý\™YYÚ
YÚ]U^\™K˜]ÚÙ™œÙ]
ÛX\ÚÓÙ™œÙ]
Ý˜Z[[™ÊNÝ˜\ˆ[™›ÎˆYÚ[™Ò[™›ÎÚYˆYÚ“YÚ\™XÝ[Û‹ÏŒÚ[™›ÏXÛÛ\]SYÚ[™ÊšY]Ñ\™XÝ[Û•Ë“›Ü›X[YÚ“YÚ]KYÚ“YÚY™\ÙKœ™Ø‹YÚ“YÚÜXÝ[\‹œ™Ø‹YÚ“YÚY™\ÙK˜KÛÜÜÚ[™\ÜÊNßH[ÙHÚ[™›ÏXÛÛ\]TÜÝYÚ[™ÊšY]Ñ\™XÝ[Û•Ë“›Ü›X[YÚ“YÚ]KYÚ“YÚ\™XÝ[Û‹YÚ“YÚY™\ÙKœ™Ø‹YÚ“YÚÜXÝ[\‹œ™Ø‹YÚ“YÚY™\ÙK˜KÛÜÜÚ[™\ÜÊNßBœ™\Ý[™Y™\ÙJÏZ[™›Ë™Y™\ÙNÂˆÚY™YˆÔPÕST•T“Bœ™\Ý[œÜXÝ[\ŠÏZ[™›ËœÜXÝ[\ŽÂˆÙ[™Y‚ŸB˜˜]ÚÙ™œÙ]
ÏPÓTÕQÒÐUÒßBœ™]\›ˆ™\Ý[ßBˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÐ™×_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÐ™×OXÌJNØÛÛœÝO^Û˜[YN™ËÚY\Ž˜Ì_K™ÏH›YÚÑœ˜YÛY[[˜Ý[ÛœÈ‹OXÝXÝYÚ[™Ò[™›ÂžÙY™\ÙNˆ™XÌÙ‹ˆÚY™YˆÔPÕST•T“BœÜXÝ[\Žˆ™XÌÙ‹ˆÙ[™Y‚ˆÚY™Yˆ‘Õ›™ˆŒÌ‹ˆÙ[™Y‚ŸNÙ›ˆÛÛ\]SYÚ[™ÊšY]Ñ\™XÝ[Û•Îˆ™XÌÙ‹“›Ü›X[ˆ™XÌÙ‹YÚ]Nˆ™XÍ‹Y™\ÙPÛÛÜŽˆ™XÌÙ‹ÜXÝ[\ÛÛÜŽˆ™XÌÙ‹˜[™ÙNˆŒÌ‹ÛÜÜÚ[™\ÜÎˆŒÌŠKO›YÚ[™Ò[™›ÈÝ˜\ˆ™\Ý[ˆYÚ[™Ò[™›ÎÝ˜\ˆYÚ™XÝÜ•Îˆ™XÌÙŽÝ˜\ˆ][X][ÛŽˆŒÌLKŒÚYˆ
YÚ]KÏOLŠBžÝ˜\ˆ\™XÝ[ÛŽˆ™XÌÙ[YÚ]Kž^‹Yœ˜YÛY[[œ]Ë”ÜÚ][Û•ÎØ][X][Û[X^
‹KŒ[[™Ý
\™XÝ[ÛŠKÜ˜[™ÙJNÛYÚ™XÝÜ•Ï[›Ü›X[^™J\™XÝ[ÛŠNßB™[ÙBžÛYÚ™XÝÜ•Ï[›Ü›X[^™J[YÚ]Kž^ŠNßB˜\ˆ™ˆŒÌ[X^
‹Ý
“›Ü›X[YÚ™XÝÜ•ÊJNÂˆÚY™Yˆ‘Õœ™\Ý[›™[™ÂˆÙ[™Y‚œ™\Ý[™Y™\ÙO[™
™Y™\ÙPÛÛÜŠ˜][X][ÛŽÂˆÚY™YˆÔPÕST•T“B˜\ˆ[™ÛUÎˆ™XÌÙ[›Ü›X[^™JšY]Ñ\™XÝ[Û•ÊÛYÚ™XÝÜ•ÊNÝ˜\ˆÜXÐÛÛ\ˆŒÌ[X^
‹Ý
“›Ü›X[[™ÛUÊJNÜÜXÐÛÛ\\ÝÊÜXÐÛÛ\X^
K‹ÛÜÜÚ[™\ÜÊJNÜ™\Ý[œÜXÝ[\\ÜXÐÛÛ\
œÜXÝ[\ÛÛÜŠ˜][X][ÛŽÂˆÙ[™Y‚œ™]\›ˆ™\Ý[ßB™›ˆÙ]][X][ÛŠÛÜÐ[™ÛNˆŒÌ‹^Û™[ˆŒÌŠKO™ŒÌˆÜ™]\›ˆX^
‹ÝÊÛÜÐ[™ÛK^Û™[
JNßB™›ˆÙ]QTÐ][X][ÛŠÛÜÐ[™ÛNˆŒÌ‹Y\ÓYÚ^\™Nˆ^\™WÌ™ŒÌ‹Y\ÓYÚ^\™TØ[\\ŽˆØ[\\ŠKO™ŒÌˆÝ˜\ˆ[™ÛOXXÛÜÊÛÜÐ[™ÛJKÔNÜ™]\›ˆ^\™TØ[\S]™[
Y\ÓYÚ^\™KY\ÓYÚ^\™TØ[\\‹™XÌ™Š[™ÛK
KŠKœŽßB™›ˆÛÛ\]P˜\ÚXÔÜÝYÚ[™ÊšY]Ñ\™XÝ[Û•Îˆ™XÌÙ‹YÚ™XÝÜ•Îˆ™XÌÙ‹“›Ü›X[ˆ™XÌÙ‹][X][ÛŽˆŒÌ‹Y™\ÙPÛÛÜŽˆ™XÌÙ‹ÜXÝ[\ÛÛÜŽˆ™XÌÙ‹ÛÜÜÚ[™\ÜÎˆŒÌŠKO›YÚ[™Ò[™›ÈÝ˜\ˆ™\Ý[ˆYÚ[™Ò[™›ÎÝ˜\ˆ™ˆŒÌ[X^
‹Ý
“›Ü›X[YÚ™XÝÜ•ÊJNÂˆÚY™Yˆ‘Õœ™\Ý[›™[™ÂˆÙ[™Y‚œ™\Ý[™Y™\ÙO[™
™Y™\ÙPÛÛÜŠ˜][X][ÛŽÂˆÚY™YˆÔPÕST•T“B˜\ˆ[™ÛUÎˆ™XÌÙ[›Ü›X[^™JšY]Ñ\™XÝ[Û•ÊÛYÚ™XÝÜ•ÊNÝ˜\ˆÜXÐÛÛ\ˆŒÌ[X^
‹Ý
“›Ü›X[[™ÛUÊJNÜÜXÐÛÛ\\ÝÊÜXÐÛÛ\X^
K‹ÛÜÜÚ[™\ÜÊJNÜ™\Ý[œÜXÝ[\\ÜXÐÛÛ\
œÜXÝ[\ÛÛÜŠ˜][X][ÛŽÂˆÙ[™Y‚œ™]\›ˆ™\Ý[ßB™›ˆÛÛ\]RQTÔÜÝYÚ[™ÊšY]Ñ\™XÝ[Û•Îˆ™XÌÙ‹“›Ü›X[ˆ™XÌÙ‹YÚ]Nˆ™XÍ‹YÚ\™XÝ[ÛŽˆ™XÍ‹Y™\ÙPÛÛÜŽˆ™XÌÙ‹ÜXÝ[\ÛÛÜŽˆ™XÌÙ‹˜[™ÙNˆŒÌ‹ÛÜÜÚ[™\ÜÎˆŒÌ‹Y\ÓYÚ^\™Nˆ^\™WÌ™ŒÌ‹Y\ÓYÚ^\™TØ[\\ŽˆØ[\\ŠKO›YÚ[™Ò[™›ÈÝ˜\ˆ\™XÝ[ÛŽˆ™XÌÙ[YÚ]Kž^‹Yœ˜YÛY[[œ]Ë”ÜÚ][Û•ÎÝ˜\ˆYÚ™XÝÜ•Îˆ™XÌÙ[›Ü›X[^™J\™XÝ[ÛŠNÝ˜\ˆ][X][ÛŽˆŒÌ[X^
‹KŒ[[™Ý
\™XÝ[ÛŠKÜ˜[™ÙJNÝ˜\ˆÝ›ÙXÝYÝ
YÚ\™XÝ[Û‹ž^‹[YÚ™XÝÜ•ÊNÝ˜\ˆÛÜÐ[™ÛNˆŒÌ[X^
‹Ý›ÙXÝ
NÚYˆ
ÛÜÐ[™ÛO[YÚ\™XÝ[Û‹ÊBžØ][X][ÛŠYÙ]QTÐ][X][ÛŠÝ›ÙXÝY\ÓYÚ^\™KY\ÓYÚ^\™TØ[\\ŠNÜ™]\›ˆÛÛ\]P˜\ÚXÔÜÝYÚ[™ÊšY]Ñ\™XÝ[Û•ËYÚ™XÝÜ•Ë“›Ü›X[][X][Û‹Y™\ÙPÛÛÜ‹ÜXÝ[\ÛÛÜ‹ÛÜÜÚ[™\ÜÊNßB˜\ˆ™\Ý[ˆYÚ[™Ò[™›ÎÜ™\Ý[™Y™\ÙO]™XÌÙŠŠNÂˆÚY™YˆÔPÕST•T“Bœ™\Ý[œÜXÝ[\]™XÌÙŠŠNÂˆÙ[™Y‚ˆÚY™Yˆ‘Õœ™\Ý[›™LŽÂˆÙ[™Y‚œ™]\›ˆ™\Ý[ßB™›ˆÛÛ\]TÜÝYÚ[™ÊšY]Ñ\™XÝ[Û•Îˆ™XÌÙ‹“›Ü›X[ˆ™XÌÙˆYÚ]Nˆ™XÍ‹YÚ\™XÝ[ÛŽˆ™XÍ‹Y™\ÙPÛÛÜŽˆ™XÌÙ‹ÜXÝ[\ÛÛÜŽˆ™XÌÙ‹˜[™ÙNˆŒÌ‹ÛÜÜÚ[™\ÜÎˆŒÌŠKO›YÚ[™Ò[™›ÈÝ˜\ˆ\™XÝ[ÛŽˆ™XÌÙ[YÚ]Kž^‹Yœ˜YÛY[[œ]Ë”ÜÚ][Û•ÎÝ˜\ˆYÚ™XÝÜ•Îˆ™XÌÙ[›Ü›X[^™J\™XÝ[ÛŠNÝ˜\ˆ][X][ÛŽˆŒÌ[X^
‹KŒ[[™Ý
\™XÝ[ÛŠKÜ˜[™ÙJNÝ˜\ˆÛÜÐ[™ÛNˆŒÌ[X^
‹Ý
YÚ\™XÝ[Û‹ž^‹[YÚ™XÝÜ•ÊJNÚYˆ
ÛÜÐ[™ÛO[YÚ\™XÝ[Û‹ÊBžØ][X][ÛŠYÙ]][X][ÛŠÛÜÐ[™ÛKYÚ]KÊNÜ™]\›ˆÛÛ\]P˜\ÚXÔÜÝYÚ[™ÊšY]Ñ\™XÝ[Û•ËYÚ™XÝÜ•Ë“›Ü›X[][X][Û‹Y™\ÙPÛÛÜ‹ÜXÝ[\ÛÛÜ‹ÛÜÜÚ[™\ÜÊNßB˜\ˆ™\Ý[ˆYÚ[™Ò[™›ÎÜ™\Ý[™Y™\ÙO]™XÌÙŠŠNÂˆÚY™YˆÔPÕST•T“Bœ™\Ý[œÜXÝ[\]™XÌÙŠŠNÂˆÙ[™Y‚ˆÚY™Yˆ‘Õœ™\Ý[›™LŽÂˆÙ[™Y‚œ™]\›ˆ™\Ý[ßB™›ˆÛÛ\]R[Z\Ü\šXÓYÚ[™ÊšY]Ñ\™XÝ[Û•Îˆ™XÌÙ‹“›Ü›X[ˆ™XÌÙ‹YÚ]Nˆ™XÍ‹Y™\ÙPÛÛÜŽˆ™XÌÙ‹ÜXÝ[\ÛÛÜŽˆ™XÌÙ‹Ü›Ý[™ÛÛÜŽˆ™XÌÙ‹ÛÜÜÚ[™\ÜÎˆŒÌŠKO›YÚ[™Ò[™›ÈÝ˜\ˆ™\Ý[ˆYÚ[™Ò[™›ÎÝ˜\ˆ™ˆŒÌYÝ
“›Ü›X[YÚ]Kž^ŠJŒJÌNÂˆÚY™Yˆ‘Õœ™\Ý[›™[™ÂˆÙ[™Y‚œ™\Ý[™Y™\ÙO[Z^
Ü›Ý[™ÛÛÜ‹Y™\ÙPÛÛÜ‹™
NÂˆÚY™YˆÔPÕST•T“B˜\ˆ[™ÛUÎˆ™XÌÙ[›Ü›X[^™JšY]Ñ\™XÝ[Û•ÊÛYÚ]Kž^ŠNÝ˜\ˆÜXÐÛÛ\ˆŒÌ[X^
‹Ý
“›Ü›X[[™ÛUÊJNÜÜXÐÛÛ\\ÝÊÜXÐÛÛ\X^
K‹ÛÜÜÚ[™\ÜÊJNÜ™\Ý[œÜXÝ[\\ÜXÐÛÛ\
œÜXÝ[\ÛÛÜŽÂˆÙ[™Y‚œ™]\›ˆ™\Ý[ßB™›ˆÛÛ\]T›Ú™XÝ[Û•^\™QY™\ÙSYÚ[™Ê›Ú™XÝ[Û“YÚ^\™Nˆ^\™WÌ™ŒÌ‹›Ú™XÝ[Û“YÚØ[\\ŽˆØ[\\‹^\™T›Ú™XÝ[Û“X]š^ˆX]‹ÜÕÎˆ™XÌÙŠKO™XÌÙˆÝ˜\ˆÝœNˆ™XÍ]^\™T›Ú™XÝ[Û“X]š^
™XÍŠÜÕËKŒ
NÜÝœKÏ\ÝœKÎÝ˜\ˆ^\™PÛÛÜŽˆ™XÌÙ]^\™TØ[\J›Ú™XÝ[Û“YÚ^\™K›Ú™XÝ[Û“YÚØ[\\‹ÝœKžJKœ™ØŽÜ™]\›ˆ^\™PÛÛÜŽßBˆÚYˆYš[™Y
T‘PSQÒTÑQ
H	‰ˆYš[™Y
T‘PSQÒÕTÔ•Q
BˆÚ[˜ÛYOÒ[\‘[˜Ý[ÛœÏ‚˜\ˆ\™XSYÚÓÌTØ[\\”Ø[\\ŽˆØ[\\ŽÝ˜\ˆ\™XSYÚÓÌTØ[\\Žˆ^\™WÌ™ŒÌŽÝ˜\ˆ\™XSYÚÓÌ”Ø[\\”Ø[\\ŽˆØ[\\ŽÝ˜\ˆ\™XSYÚÓÌ”Ø[\\Žˆ^\™WÌ™ŒÌŽÙ›ˆÛÛ\]P\™XSYÚ[™ÊÌNˆ^\™WÌ™ŒÌ‹ÌTØ[\\ŽœØ[\\‹ÌŽ^\™WÌ™ŒÌ‹Ì”Ø[\\ŽœØ[\\‹šY]Ñ\™XÝ[Û•Îˆ™XÌÙ‹“›Ü›X[™XÌÙ‹”ÜÚ][ÛŽ™XÌÙ‹YÚÜÚ][ÛŽ™XÌÙ‹[•ÚY™XÌÙ‹[’ZYÚ™XÌÙ‹Y™\ÙPÛÛÜŽ™XÌÙ‹ÜXÝ[\ÛÛÜŽ™XÌÙ‹›ÝYÚ™\ÜÎ™ŒÌˆ
KO›YÚ[™Ò[™›ÂžÝ˜\ˆ™\Ý[ˆYÚ[™Ò[™›ÎÝ˜\ˆ]Nˆ\™XSYÚ]OXÛÛ\]P\™XSYÚÜXÝ[\‘Y™\ÙQœ™\Û™[
ÌKÌTØ[\\‹Ì‹Ì”Ø[\\‹šY]Ñ\™XÝ[Û•Ë“›Ü›X[”ÜÚ][Û‹YÚÜÚ][Û‹[•ÚY[’ZYÚ›ÝYÚ™\ÜÊNÂˆÚY™YˆÔPÕST•T“B˜\ˆœ™\Û™[™XÌÙJÜXÝ[\ÛÛÜŠ™]K‘œ™\Û™[ž
Ê™XÌÙŠKŒ
K\ÜXÝ[\ÛÛÜˆ
J™]K‘œ™\Û™[žH
NÜ™\Ý[œÜXÝ[\ŠÏ\ÜXÝ[\ÛÛÜŠ™œ™\Û™[
™]K”ÜXÝ[\ŽÂˆÙ[™Y‚œ™\Ý[™Y™\ÙJÏYY™\ÙPÛÛÜŠ™]K‘Y™\ÙNÜ™]\›ˆ™\Ý[ßB™›ˆÛÛ\]P\™XSYÚ[™ÕÚ]^\™JÌNˆ^\™WÌ™ŒÌ‹ÌTØ[\\ŽœØ[\\‹ÌŽ^\™WÌ™ŒÌ‹Ì”Ø[\\ŽœØ[\\‹[Z\ÜÚ[Û•^\™Nˆ^\™WÌ™ŒÌ‹[Z\ÜÚ[Û•^\™TØ[\\ŽœØ[\\‹šY]Ñ\™XÝ[Û•Îˆ™XÌÙ‹“›Ü›X[™XÌÙ‹”ÜÚ][ÛŽ™XÌÙ‹YÚÜÚ][ÛŽ™XÌÙ‹[•ÚY™XÌÙ‹[’ZYÚ™XÌÙ‹Y™\ÙPÛÛÜŽ™XÌÙ‹ÜXÝ[\ÛÛÜŽ™XÌÙ‹›ÝYÚ™\ÜÎ™ŒÌˆ
KO›YÚ[™Ò[™›ÂžÝ˜\ˆ™\Ý[ˆYÚ[™Ò[™›ÎÝ˜\ˆ]Nˆ\™XSYÚ]OXÛÛ\]P\™XSYÚÜXÝ[\‘Y™\ÙQœ™\Û™[Ú][Z\ÜÚ[ÛŠÌKÌTØ[\\‹Ì‹Ì”Ø[\\‹[Z\ÜÚ[Û•^\™K[Z\ÜÚ[Û•^\™TØ[\\‹šY]Ñ\™XÝ[Û•Ë“›Ü›X[”ÜÚ][Û‹YÚÜÚ][Û‹[•ÚY[’ZYÚ›ÝYÚ™\ÜÊNÂˆÚY™YˆÔPÕST•T“B˜\ˆœ™\Û™[ˆ™XÌÙJÜXÝ[\ÛÛÜŠ™]K‘œ™\Û™[ž
Ê™XÌÙŠKŒ
K\ÜXÝ[\ÛÛÜˆ
J™]K‘œ™\Û™[žH
NÜ™\Ý[œÜXÝ[\ŠÏ\ÜXÝ[\ÛÛÜŠ™œ™\Û™[
™]K”ÜXÝ[\ŽÂˆÙ[™Y‚œ™\Ý[™Y™\ÙJÏYY™\ÙPÛÛÜŠ™]K‘Y™\ÙNÜ™]\›ˆ™\Ý[ßBˆÙ[™Y‚ˆÚYˆYš[™Y
ÓTÕQÒÐUÒ
H	‰ˆÓTÕQÒÐUÒŒˆÚ[˜ÛYOÛ\Ý\™YYÚ[™Ñ[˜Ý[ÛœÏ‚ˆÚ[˜ÛYOÛ\Ý\™YYÚ[™ÐÛÛ\]O–Ì‹›X^Ú[][[™[Ý\ÓYÚ×BˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÕ™×_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÕ™×OZJNØÛÛœÝÕO^Û˜[YN•™ËÚY\Žš_K™ÏHœÚYÝÜÑœ˜YÛY[[˜Ý[ÛœÈ‹ŒOXÚY™YˆÒQÕÔÂˆÚY›™YˆÒQÕÑ“ÐU™›ˆ[œXÚÊÛÛÜŽˆ™XÍŠKO™ŒÌ‚žØÛÛœÝš]ÜÚYˆ™XÍH™XÍŠKŒÊMKŒ
ŒMKŒ
ŒMKŒ
KKŒÊMKŒ
ŒMKŒ
KKŒÌMKŒKŒ
NÜ™]\›ˆÝ
ÛÛÜ‹š]ÜÚY
NßBˆÙ[™Y‚™›ˆÛÛ\]Q˜[Ù™Š˜[YNˆŒÌ‹Û\ÜXÙNˆ™XÌ™‹œ\Ý[QYÙQ˜[Ù™ŽˆŒÌŠKO™ŒÌ‚žÝ˜\ˆX\ÚÎˆŒÌ\Û[ÛÝÝ\
KŒYœ\Ý[QYÙQ˜[Ù™‹KŒL‹Û[\
Ý
Û\ÜXÙKÛ\ÜXÙJK‹KŠJNÜ™]\›ˆZ^
˜[YKKŒX\ÚÊNßB™›ˆÛÛ\]TÚYÝÐÝX™JÛÜ›ÜÎˆ™XÌÙ‹YÚÜÚ][ÛŽˆ™XÌÙ‹ÚYÝÕ^\™Nˆ^\™WØÝX™OŒÌ‹ÚYÝÔØ[\\ŽˆØ[\\‹\šÛ™\ÜÎˆŒÌ‹\˜[Y\Îˆ™XÌ™ŠKO™ŒÌ‚žÝ˜\ˆ\™XÝ[Û•ÓYÚˆ™XÌÙ]ÛÜ›ÜË[YÚÜÚ][ÛŽÝ˜\ˆ\ˆŒÌ[[™Ý
\™XÝ[Û•ÓYÚ
NÙ\J\
Ù\˜[Y\Ëž
KÊ\˜[Y\ËžJNÙ\XÛ[\
\‹KŒ
NÙ\™XÝ[Û•ÓYÚ[›Ü›X[^™J\™XÝ[Û•ÓYÚ
NÙ\™XÝ[Û•ÓYÚžOKY\™XÝ[Û•ÓYÚžNÂˆÚY›™YˆÒQÕÑ“ÐU˜\ˆÚYÝÎˆŒÌ][œXÚÊ^\™TØ[\JÚYÝÕ^\™KÚYÝÔØ[\\‹\™XÝ[Û•ÓYÚ
JNÂˆÙ[ÙB˜\ˆÚYÝÎˆŒÌ]^\™TØ[\JÚYÝÕ^\™KÚYÝÔØ[\\‹\™XÝ[Û•ÓYÚ
KžÂˆÙ[™Y‚œ™]\›ˆÙ[XÝ
KŒ\šÛ™\ÜË\œÚYÝÊNßB™›ˆÛÛ\]TÚYÝÕÚ]Ú\ÜÛÛ”Ø[\[™ÐÝX™JÛÜ›ÜÎˆ™XÌÙ‹YÚÜÚ][ÛŽˆ™XÌÙ‹ÚYÝÕ^\™Nˆ^\™WØÝX™OŒÌ‹ÚYÝÔØ[\\ŽˆØ[\\‹X\Ú^™NˆŒÌ‹\šÛ™\ÜÎˆŒÌ‹\˜[Y\Îˆ™XÌ™ŠKO™ŒÌ‚žÝ˜\ˆ\™XÝ[Û•ÓYÚˆ™XÌÙ]ÛÜ›ÜË[YÚÜÚ][ÛŽÝ˜\ˆ\ˆŒÌ[[™Ý
\™XÝ[Û•ÓYÚ
NÙ\J\
Ù\˜[Y\Ëž
KÊ\˜[Y\ËžJNÙ\XÛ[\
\‹KŒ
NÙ\™XÝ[Û•ÓYÚ[›Ü›X[^™J\™XÝ[Û•ÓYÚ
NÙ\™XÝ[Û•ÓYÚžOKY\™XÝ[Û•ÓYÚžNÝ˜\ˆš\ÚXš[]NˆŒÌLKŽÝ˜\ˆÚ\ÜÛÛ‘\ÚÎˆ\œ˜^O™XÌÙ‹ŽÜÚ\ÜÛÛ‘\ÚÖÌOH™XÌÙŠLKŒKŒLKŒ
NÜÚ\ÜÛÛ‘\ÚÖÌWOH™XÌÙŠKŒLKŒLKŒ
NÜÚ\ÜÛÛ‘\ÚÖÌ—OH™XÌÙŠLKŒLKŒLKŒ
NÜÚ\ÜÛÛ‘\ÚÖÌ×OH™XÌÙŠKŒLKŒKŒ
NÂˆÚY›™YˆÒQÕÑ“ÐUšYˆ
[œXÚÊ^\™TØ[\JÚYÝÕ^\™KÚYÝÔØ[\\‹\™XÝ[Û•ÓYÚ
ÜÚ\ÜÛÛ‘\ÚÖÌJ›X\Ú^™JJO\
HÝš\ÚXš[]KOLŒNßNÚYˆ
[œXÚÊ^\™TØ[\JÚYÝÕ^\™KÚYÝÔØ[\\‹\™XÝ[Û•ÓYÚ
ÜÚ\ÜÛÛ‘\ÚÖÌWJ›X\Ú^™JJO\
HÝš\ÚXš[]KOLŒNßNÚYˆ
[œXÚÊ^\™TØ[\JÚYÝÕ^\™KÚYÝÔØ[\\‹\™XÝ[Û•ÓYÚ
ÜÚ\ÜÛÛ‘\ÚÖÌ—J›X\Ú^™JJO\
HÝš\ÚXš[]KOLŒNßNÚYˆ
[œXÚÊ^\™TØ[\JÚYÝÕ^\™KÚYÝÔØ[\\‹\™XÝ[Û•ÓYÚ
ÜÚ\ÜÛÛ‘\ÚÖÌ×J›X\Ú^™JJO\
HÝš\ÚXš[]KOLŒNßNÂˆÙ[ÙBšYˆ
^\™TØ[\JÚYÝÕ^\™KÚYÝÔØ[\\‹\™XÝ[Û•ÓYÚ
ÜÚ\ÜÛÛ‘\ÚÖÌJ›X\Ú^™JKž\
HÝš\ÚXš[]KOLŒNßNÚYˆ
^\™TØ[\JÚYÝÕ^\™KÚYÝÔØ[\\‹\™XÝ[Û•ÓYÚ
ÜÚ\ÜÛÛ‘\ÚÖÌWJ›X\Ú^™JKž\
HÝš\ÚXš[]KOLŒNßNÚYˆ
^\™TØ[\JÚYÝÕ^\™KÚYÝÔØ[\\‹\™XÝ[Û•ÓYÚ
ÜÚ\ÜÛÛ‘\ÚÖÌ—J›X\Ú^™JKž\
HÝš\ÚXš[]KOLŒNßNÚYˆ
^\™TØ[\JÚYÝÕ^\™KÚYÝÔØ[\\‹\™XÝ[Û•ÓYÚ
ÜÚ\ÜÛÛ‘\ÚÖÌ×J›X\Ú^™JKž\
HÝš\ÚXš[]KOLŒNßNÂˆÙ[™Y‚œ™]\›ˆZ[ŠKŒš\ÚXš[]JÙ\šÛ™\ÜÊNßB™›ˆÛÛ\]TÚYÝÕÚ]TÓPÝX™JÛÜ›ÜÎˆ™XÌÙ‹YÚÜÚ][ÛŽˆ™XÌÙ‹ÚYÝÕ^\™Nˆ^\™WØÝX™OŒÌ‹ÚYÝÔØ[\\ŽˆØ[\\‹\šÛ™\ÜÎˆŒÌ‹\ØØ[NˆŒÌ‹\˜[Y\Îˆ™XÌ™ŠKO™ŒÌ‚žÝ˜\ˆ\™XÝ[Û•ÓYÚˆ™XÌÙ]ÛÜ›ÜË[YÚÜÚ][ÛŽÝ˜\ˆ\ˆŒÌ[[™Ý
\™XÝ[Û•ÓYÚ
NÙ\J\
Ù\˜[Y\Ëž
KÊ\˜[Y\ËžJNÝ˜\ˆÚYÝÔ^[\ˆŒÌXÛ[\
\‹KŒ
NÙ\™XÝ[Û•ÓYÚ[›Ü›X[^™J\™XÝ[Û•ÓYÚ
NÙ\™XÝ[Û•ÓYÚžOKY\™XÝ[Û•ÓYÚžNÂˆÚY›™YˆÒQÕÑ“ÐU˜\ˆÚYÝÓX\Ø[\NˆŒÌ][œXÚÊ^\™TØ[\JÚYÝÕ^\™KÚYÝÔØ[\\‹\™XÝ[Û•ÓYÚ
JNÂˆÙ[ÙB˜\ˆÚYÝÓX\Ø[\NˆŒÌ]^\™TØ[\JÚYÝÕ^\™KÚYÝÔØ[\\‹\™XÝ[Û•ÓYÚ
KžÂˆÙ[™Y‚˜\ˆ\ÛNˆŒÌLKŒXÛ[\
^
Z[ŠË‹\ØØ[JœÚYÝÔ^[\
JJœÚYÝÓX\Ø[\K‹K‹Y\šÛ™\ÜÊNÜ™]\›ˆ\ÛNßB™›ˆÛÛ\]TÚYÝÕÚ]ÛÜÙQTÓPÝX™JÛÜ›ÜÎˆ™XÌÙ‹YÚÜÚ][ÛŽˆ™XÌÙ‹ÚYÝÕ^\™Nˆ^\™WØÝX™OŒÌ‹ÚYÝÔØ[\\ŽˆØ[\\‹\šÛ™\ÜÎˆŒÌ‹\ØØ[NˆŒÌ‹\˜[Y\Îˆ™XÌ™ŠKO™ŒÌ‚žÝ˜\ˆ\™XÝ[Û•ÓYÚˆ™XÌÙ]ÛÜ›ÜË[YÚÜÚ][ÛŽÝ˜\ˆ\ˆŒÌ[[™Ý
\™XÝ[Û•ÓYÚ
NÙ\J\
Ù\˜[Y\Ëž
KÊ\˜[Y\ËžJNÝ˜\ˆÚYÝÔ^[\ˆŒÌXÛ[\
\‹KŒ
NÙ\™XÝ[Û•ÓYÚ[›Ü›X[^™J\™XÝ[Û•ÓYÚ
NÙ\™XÝ[Û•ÓYÚžOKY\™XÝ[Û•ÓYÚžNÂˆÚY›™YˆÒQÕÑ“ÐU˜\ˆÚYÝÓX\Ø[\NˆŒÌ][œXÚÊ^\™TØ[\JÚYÝÕ^\™KÚYÝÔØ[\\‹\™XÝ[Û•ÓYÚ
JNÂˆÙ[ÙB˜\ˆÚYÝÓX\Ø[\NˆŒÌ]^\™TØ[\JÚYÝÕ^\™KÚYÝÔØ[\\‹\™XÝ[Û•ÓYÚ
KžÂˆÙ[™Y‚˜\ˆ\ÛNˆŒÌXÛ[\
^
Z[ŠË‹Y\ØØ[JŠÚYÝÔ^[\\ÚYÝÓX\Ø[\JJJK\šÛ™\ÜËKŠNÜ™]\›ˆ\ÛNßB™›ˆÛÛ\]TÚYÝÐÔÓJ^Y\ŽˆLÌ‹”ÜÚ][Û‘œ›ÛSYÚˆ™XÍ‹\Y]šXÎˆŒÌ‹ÚYÝÕ^\™Nˆ^\™WÌ™Ø\œ˜^OŒÌ‹ÚYÝÔØ[\\ŽˆØ[\\‹\šÛ™\ÜÎˆŒÌ‹œ\Ý[QYÙQ˜[Ù™ŽˆŒÌŠKO™ŒÌ‚žÝ˜\ˆÛ\ÜXÙNˆ™XÌÙ]”ÜÚ][Û‘œ›ÛSYÚž^‹Ý”ÜÚ][Û‘œ›ÛSYÚÎÝ˜\ˆ]Žˆ™XÌ™LJ˜Û\ÜXÙKžJÈ™XÌ™ŠJNÝ˜\ˆÚYÝÔ^[\ˆŒÌXÛ[\
\Y]šXË‹KŒ
NÂˆÚY›™YˆÒQÕÑ“ÐU˜\ˆÚYÝÎˆŒÌ][œXÚÊ^\™TØ[\JÚYÝÕ^\™KÚYÝÔØ[\\‹]‹^Y\ŠJNÂˆÙ[ÙB˜\ˆÚYÝÎˆŒÌ]^\™TØ[\JÚYÝÕ^\™KÚYÝÔØ[\\‹]‹^Y\ŠKžÂˆÙ[™Y‚œ™]\›ˆÙ[XÝ
K‹ÛÛ\]Q˜[Ù™Š\šÛ™\ÜËÛ\ÜXÙKžKœ\Ý[QYÙQ˜[Ù™ŠKÚYÝÔ^[\œÚYÝÈ
NßB™›ˆÛÛ\]TÚYÝÊ”ÜÚ][Û‘œ›ÛSYÚˆ™XÍ‹\Y]šXÎˆŒÌ‹ÚYÝÕ^\™Nˆ^\™WÌ™ŒÌ‹ÚYÝÔØ[\\ŽˆØ[\\‹\šÛ™\ÜÎˆŒÌ‹œ\Ý[QYÙQ˜[Ù™ŽˆŒÌŠKO™ŒÌ‚žÝ˜\ˆÛ\ÜXÙNˆ™XÌÙ]”ÜÚ][Û‘œ›ÛSYÚž^‹Ý”ÜÚ][Û‘œ›ÛSYÚÎÝ˜\ˆ]Žˆ™XÌ™LJ˜Û\ÜXÙKžJÈ™XÌ™ŠJNÚYˆ
]‹žˆ]‹žŒKŒ]‹žOˆ]‹žOŒKŒ
BžÜ™]\›ˆKŒßB™[ÙBžÝ˜\ˆÚYÝÔ^[\ˆŒÌXÛ[\
\Y]šXË‹KŒ
NÂˆÚY›™YˆÒQÕÑ“ÐU˜\ˆÚYÝÎˆŒÌ][œXÚÊ^\™TØ[\S]™[
ÚYÝÕ^\™KÚYÝÔØ[\\‹]‹ŠJNÂˆÙ[ÙB˜\ˆÚYÝÎˆŒÌ]^\™TØ[\S]™[
ÚYÝÕ^\™KÚYÝÔØ[\\‹]‹ŠKžÂˆÙ[™Y‚œ™]\›ˆÙ[XÝ
K‹ÛÛ\]Q˜[Ù™Š\šÛ™\ÜËÛ\ÜXÙKžKœ\Ý[QYÙQ˜[Ù™ŠKÚYÝÔ^[\œÚYÝÈ
Nß_B™›ˆÛÛ\]TÚYÝÕÚ]Ú\ÜÛÛ”Ø[\[™Ê”ÜÚ][Û‘œ›ÛSYÚˆ™XÍ‹\Y]šXÎˆŒÌ‹ÚYÝÕ^\™Nˆ^\™WÌ™ŒÌ‹ÚYÝÔØ[\\ŽˆØ[\\‹X\Ú^™NˆŒÌ‹\šÛ™\ÜÎˆŒÌ‹œ\Ý[QYÙQ˜[Ù™ŽˆŒÌŠKO™ŒÌ‚žÝ˜\ˆÛ\ÜXÙNˆ™XÌÙ]”ÜÚ][Û‘œ›ÛSYÚž^‹Ý”ÜÚ][Û‘œ›ÛSYÚÎÝ˜\ˆ]Žˆ™XÌ™LJ˜Û\ÜXÙKžJÈ™XÌ™ŠJNÚYˆ
]‹žˆ]‹žŒKŒ]‹žOˆ]‹žOŒKŒ
BžÜ™]\›ˆKŒßB™[ÙBžÝ˜\ˆÚYÝÔ^[\ˆŒÌXÛ[\
\Y]šXË‹KŒ
NÝ˜\ˆš\ÚXš[]NˆŒÌLKŽÝ˜\ˆÚ\ÜÛÛ‘\ÚÎˆ\œ˜^O™XÌ™‹ŽÜÚ\ÜÛÛ‘\ÚÖÌOH™XÌ™ŠLŽMŒMŒLŒÎNLŒŒMŠNÜÚ\ÜÛÛ‘\ÚÖÌWOH™XÌ™ŠŽMMNŒKLÍŽLÌJNÜÚ\ÜÛÛ‘\ÚÖÌ—OH™XÌ™ŠLŒMNLKLŽLŽLÎÌ
NÜÚ\ÜÛÛ‘\ÚÖÌ×OH™XÌ™ŠŒÍMNLÎŒŽLÎÍÍŒ
NÂˆÚY›™YˆÒQÕÑ“ÐUšYˆ
[œXÚÊ^\™TØ[\S]™[
ÚYÝÕ^\™KÚYÝÔØ[\\‹]ŠÜÚ\ÜÛÛ‘\ÚÖÌJ›X\Ú^™KŠJOÚYÝÔ^[\
HÝš\ÚXš[]KOLŒNßBšYˆ
[œXÚÊ^\™TØ[\S]™[
ÚYÝÕ^\™KÚYÝÔØ[\\‹]ŠÜÚ\ÜÛÛ‘\ÚÖÌWJ›X\Ú^™KŠJOÚYÝÔ^[\
HÝš\ÚXš[]KOLŒNßBšYˆ
[œXÚÊ^\™TØ[\S]™[
ÚYÝÕ^\™KÚYÝÔØ[\\‹]ŠÜÚ\ÜÛÛ‘\ÚÖÌ—J›X\Ú^™KŠJOÚYÝÔ^[\
HÝš\ÚXš[]KOLŒNßBšYˆ
[œXÚÊ^\™TØ[\S]™[
ÚYÝÕ^\™KÚYÝÔØ[\\‹]ŠÜÚ\ÜÛÛ‘\ÚÖÌ×J›X\Ú^™KŠJOÚYÝÔ^[\
HÝš\ÚXš[]KOLŒNßBˆÙ[ÙBšYˆ
^\™TØ[\S]™[
ÚYÝÕ^\™KÚYÝÔØ[\\‹]ŠÜÚ\ÜÛÛ‘\ÚÖÌJ›X\Ú^™KŠKžÚYÝÔ^[\
HÝš\ÚXš[]KOLŒNßBšYˆ
^\™TØ[\S]™[
ÚYÝÕ^\™KÚYÝÔØ[\\‹]ŠÜÚ\ÜÛÛ‘\ÚÖÌWJ›X\Ú^™KŠKžÚYÝÔ^[\
HÝš\ÚXš[]KOLŒNßBšYˆ
^\™TØ[\S]™[
ÚYÝÕ^\™KÚYÝÔØ[\\‹]ŠÜÚ\ÜÛÛ‘\ÚÖÌ—J›X\Ú^™KŠKžÚYÝÔ^[\
HÝš\ÚXš[]KOLŒNßBšYˆ
^\™TØ[\S]™[
ÚYÝÕ^\™KÚYÝÔØ[\\‹]ŠÜÚ\ÜÛÛ‘\ÚÖÌ×J›X\Ú^™KŠKžÚYÝÔ^[\
HÝš\ÚXš[]KOLŒNßBˆÙ[™Y‚œ™]\›ˆÛÛ\]Q˜[Ù™ŠZ[ŠKŒš\ÚXš[]JÙ\šÛ™\ÜÊKÛ\ÜXÙKžKœ\Ý[QYÙQ˜[Ù™ŠNß_B™›ˆÛÛ\]TÚYÝÕÚ]TÓJ”ÜÚ][Û‘œ›ÛSYÚˆ™XÍ‹\Y]šXÎˆŒÌ‹ÚYÝÕ^\™Nˆ^\™WÌ™ŒÌ‹ÚYÝÔØ[\\ŽˆØ[\\‹\šÛ™\ÜÎˆŒÌ‹\ØØ[NˆŒÌ‹œ\Ý[QYÙQ˜[Ù™ŽˆŒÌŠKO™ŒÌ‚žÝ˜\ˆÛ\ÜXÙNˆ™XÌÙ]”ÜÚ][Û‘œ›ÛSYÚž^‹Ý”ÜÚ][Û‘œ›ÛSYÚÎÝ˜\ˆ]Žˆ™XÌ™LJ˜Û\ÜXÙKžJÈ™XÌ™ŠJNÚYˆ
]‹žˆ]‹žŒKŒ]‹žOˆ]‹žOŒKŒ
BžÜ™]\›ˆKŒßB™[ÙBžÝ˜\ˆÚYÝÔ^[\ˆŒÌXÛ[\
\Y]šXË‹KŒ
NÂˆÚY›™YˆÒQÕÑ“ÐU˜\ˆÚYÝÓX\Ø[\NˆŒÌ][œXÚÊ^\™TØ[\S]™[
ÚYÝÕ^\™KÚYÝÔØ[\\‹]‹ŠJNÂˆÙ[ÙB˜\ˆÚYÝÓX\Ø[\NˆŒÌ]^\™TØ[\S]™[
ÚYÝÕ^\™KÚYÝÔØ[\\‹]‹ŠKžÂˆÙ[™Y‚˜\ˆ\ÛNˆŒÌLKŒXÛ[\
^
Z[ŠË‹\ØØ[JœÚYÝÔ^[\
JJœÚYÝÓX\Ø[\K‹K‹Y\šÛ™\ÜÊNÜ™]\›ˆÛÛ\]Q˜[Ù™Š\ÛKÛ\ÜXÙKžKœ\Ý[QYÙQ˜[Ù™ŠNß_B™›ˆÛÛ\]TÚYÝÕÚ]ÛÜÙQTÓJ”ÜÚ][Û‘œ›ÛSYÚˆ™XÍ‹\Y]šXÎˆŒÌ‹ÚYÝÕ^\™Nˆ^\™WÌ™ŒÌ‹ÚYÝÔØ[\\ŽˆØ[\\‹\šÛ™\ÜÎˆŒÌ‹\ØØ[NˆŒÌ‹œ\Ý[QYÙQ˜[Ù™ŽˆŒÌŠKO™ŒÌ‚žÝ˜\ˆÛ\ÜXÙNˆ™XÌÙ]”ÜÚ][Û‘œ›ÛSYÚž^‹Ý”ÜÚ][Û‘œ›ÛSYÚÎÝ˜\ˆ]Žˆ™XÌ™LJ˜Û\ÜXÙKžJÈ™XÌ™ŠJNÚYˆ
]‹žˆ]‹žŒKŒ]‹žOˆ]‹žOŒKŒ
BžÜ™]\›ˆKŒßB™[ÙBžÝ˜\ˆÚYÝÔ^[\ˆŒÌXÛ[\
\Y]šXË‹KŒ
NÈˆÚY›™YˆÒQÕÑ“ÐU˜\ˆÚYÝÓX\Ø[\NˆŒÌ][œXÚÊ^\™TØ[\S]™[
ÚYÝÕ^\™KÚYÝÔØ[\\‹]‹ŠJNÂˆÙ[ÙB˜\ˆÚYÝÓX\Ø[\NˆŒÌ]^\™TØ[\S]™[
ÚYÝÕ^\™KÚYÝÔØ[\\‹]‹ŠKžÂˆÙ[™Y‚˜\ˆ\ÛNˆŒÌXÛ[\
^
Z[ŠË‹Y\ØØ[JŠÚYÝÔ^[\\ÚYÝÓX\Ø[\JJJK\šÛ™\ÜËKŠNÜ™]\›ˆÛÛ\]Q˜[Ù™Š\ÛKÛ\ÜXÙKžKœ\Ý[QYÙQ˜[Ù™ŠNß_B™›ˆÙ]’[Û\
Û\ÜXÙNˆ™XÌÙ‹]‘\ˆ™XÌÙŠKO™ŒÌ‚žÂˆÚY™YˆT×Ó‘×ÒS—Ö”S‘ÑBœ™]\›ˆÛ\ÜXÙKžŽÂˆÙ[ÙBœ™]\›ˆ]‘\žŽÂˆÙ[™Y‚ŸB˜ÛÛœÝÔ‘PUTÕÓTÔ×ÕS—ÓÓ‘NˆŒÌLŽNNNNNNMÂˆÙYš[™HTÐP“WÕS’Q“Ô“RUWÐSSTÒTÂ™›ˆÛÛ\]TÚYÝÕÚ]ÔÓTÑŒJ^Y\ŽˆLÌ‹”ÜÚ][Û‘œ›ÛSYÚˆ™XÍ‹\Y]šXÎˆŒÌ‹ÚYÝÕ^\™Nˆ^\™WÙ\Ì™Ø\œ˜^KÚYÝÔØ[\\ŽˆØ[\\—ØÛÛ\\š\ÛÛ‹\šÛ™\ÜÎˆŒÌ‹œ\Ý[QYÙQ˜[Ù™ŽˆŒÌŠKO™ŒÌ‚žÝ˜\ˆÛ\ÜXÙNˆ™XÌÙ]”ÜÚ][Û‘œ›ÛSYÚž^‹Ý”ÜÚ][Û‘œ›ÛSYÚÎÝ˜\ˆ]‘\ˆ™XÌÙH™XÌÙŠJ˜Û\ÜXÙKž^ŠÈ™XÌÙŠJJNÝ]‘\žXÛ[\
Ù]’[Û\
Û\ÜXÙK]‘\
K‹Ô‘PUTÕÓTÔ×ÕS—ÓÓ‘JNÝ˜\ˆÚYÝÎˆŒÌ]^\™TØ[\PÛÛ\\™JÚYÝÕ^\™KÚYÝÔØ[\\‹]‘\žK^Y\‹]‘\žŠNÜÚYÝÏ[Z^
\šÛ™\ÜËK‹ÚYÝÊNÜ™]\›ˆÛÛ\]Q˜[Ù™ŠÚYÝËÛ\ÜXÙKžKœ\Ý[QYÙQ˜[Ù™ŠNßB™›ˆÛÛ\]TÚYÝÕÚ]ÔÓTÑŒÊ^Y\ŽˆLÌ‹”ÜÚ][Û‘œ›ÛSYÚˆ™XÍ‹\Y]šXÎˆŒÌ‹ÚYÝÕ^\™Nˆ^\™WÙ\Ì™Ø\œ˜^KÚYÝÔØ[\\ŽˆØ[\\—ØÛÛ\\š\ÛÛ‹ÚYÝÓX\Ú^™P[™[™\œÙNˆ™XÌ™‹\šÛ™\ÜÎˆŒÌ‹œ\Ý[QYÙQ˜[Ù™ŽˆŒÌŠKO™ŒÌ‚žÝ˜\ˆÛ\ÜXÙNˆ™XÌÙ]”ÜÚ][Û‘œ›ÛSYÚž^‹Ý”ÜÚ][Û‘œ›ÛSYÚÎÝ˜\ˆ]‘\ˆ™XÌÙH™XÌÙŠJ˜Û\ÜXÙKž^ŠÈ™XÌÙŠJJNÝ]‘\žXÛ[\
Ù]’[Û\
Û\ÜXÙK]‘\
K‹Ô‘PUTÕÓTÔ×ÕS—ÓÓ‘JNÝ˜\ˆ]Žˆ™XÌ™]]‘\žJœÚYÝÓX\Ú^™P[™[™\œÙKžÈ]ŠÏLNÈ˜\ˆÝˆ™XÌ™Yœ˜XÝ
]ŠNÈ˜\ˆ˜\ÙWÝ]Žˆ™XÌ™Y›ÛÜŠ]ŠKLNÈ˜˜\ÙWÝ]Š\ÚYÝÓX\Ú^™P[™[™\œÙKžNÈ˜\ˆ]Ìˆ™XÌ™LË‹L‹ŠœÝÝ˜\ˆ]ÌNˆ™XÌ™LKŠÌ‹ŠœÝÝ˜\ˆNˆ™XÌ™H™XÌ™Š
‹‹\Ýž
KÝ]ÌžLK‹ÝžÝ]ÌKž
ÌKŠJœÚYÝÓX\Ú^™P[™[™\œÙKžNÝ˜\ˆŽˆ™XÌ™H™XÌ™Š
‹‹\ÝžJKÝ]ÌžKLK‹ÝžKÝ]ÌKžJÌKŠJœÚYÝÓX\Ú^™P[™[™\œÙKžNÝ˜\ˆÚYÝÎˆŒÌLŽÜÚYÝÊÏ]]Ìž
]ÌžJ^\™TØ[\PÛÛ\\™JÚYÝÕ^\™KÚYÝÔØ[\\‹˜\ÙWÝ]‹žJÈ™XÌ™ŠVÌK–ÌJK^Y\‹]‘\žŠNÜÚYÝÊÏ]]ÌKž
]ÌžJ^\™TØ[\PÛÛ\\™JÚYÝÕ^\™KÚYÝÔØ[\\‹˜\ÙWÝ]‹žJÈ™XÌ™ŠVÌWK–ÌJK^Y\‹]‘\žŠNÜÚYÝÊÏ]]Ìž
]ÌKžJ^\™TØ[\PÛÛ\\™JÚYÝÕ^\™KÚYÝÔØ[\\‹˜\ÙWÝ]‹žJÈ™XÌ™ŠVÌK–ÌWJK^Y\‹]‘\žŠNÜÚYÝÊÏ]]ÌKž
]ÌKžJ^\™TØ[\PÛÛ\\™JÚYÝÕ^\™KÚYÝÔØ[\\‹˜\ÙWÝ]‹žJÈ™XÌ™ŠVÌWK–ÌWJK^Y\‹]‘\žŠNÜÚYÝÏ\ÚYÝËÌM‹ŽÜÚYÝÏ[Z^
\šÛ™\ÜËK‹ÚYÝÊNÜ™]\›ˆÛÛ\]Q˜[Ù™ŠÚYÝËÛ\ÜXÙKžKœ\Ý[QYÙQ˜[Ù™ŠNßB™›ˆÛÛ\]TÚYÝÕÚ]ÔÓTÑJ^Y\ŽˆLÌ‹”ÜÚ][Û‘œ›ÛSYÚˆ™XÍ‹\Y]šXÎˆŒÌ‹ÚYÝÕ^\™Nˆ^\™WÙ\Ì™Ø\œ˜^KÚYÝÔØ[\\ŽˆØ[\\—ØÛÛ\\š\ÛÛ‹ÚYÝÓX\Ú^™P[™[™\œÙNˆ™XÌ™‹\šÛ™\ÜÎˆŒÌ‹œ\Ý[QYÙQ˜[Ù™ŽˆŒÌŠKO™ŒÌ‚žÝ˜\ˆÛ\ÜXÙNˆ™XÌÙ]”ÜÚ][Û‘œ›ÛSYÚž^‹Ý”ÜÚ][Û‘œ›ÛSYÚÎÝ˜\ˆ]‘\ˆ™XÌÙH™XÌÙŠJ˜Û\ÜXÙKž^ŠÈ™XÌÙŠJJNÝ]‘\žXÛ[\
Ù]’[Û\
Û\ÜXÙK]‘\
K‹Ô‘PUTÕÓTÔ×ÕS—ÓÓ‘JNÝ˜\ˆ]Žˆ™XÌ™]]‘\žJœÚYÝÓX\Ú^™P[™[™\œÙKžÈ]ŠÏLNÈ˜\ˆÝˆ™XÌ™Yœ˜XÝ
]ŠNÈ˜\ˆ˜\ÙWÝ]Žˆ™XÌ™Y›ÛÜŠ]ŠKLNÈ˜˜\ÙWÝ]Š\ÚYÝÓX\Ú^™P[™[™\œÙKžNÈ˜\ˆ]Ìˆ™XÌ™M‹LËŠœÝÝ˜\ˆ]ÌNˆ™XÌ™H™XÌ™ŠËŠNÝ˜\ˆ]ÌŽˆ™XÌ™LKŠÌËŠœÝÝ˜\ˆNˆ™XÌÙH™XÌÙŠ
Ë‹L‹ŠœÝž
KÝ]ÌžL‹‹
ËŠÜÝž
KÝ]ÌKžÝžÝ]Ì‹ž
Ì‹ŠJœÚYÝÓX\Ú^™P[™[™\œÙKžNÝ˜\ˆŽˆ™XÌÙH™XÌÙŠ
Ë‹L‹ŠœÝžJKÝ]ÌžKL‹‹
ËŠÜÝžJKÝ]ÌKžKÝžKÝ]Ì‹žJÌ‹ŠJœÚYÝÓX\Ú^™P[™[™\œÙKžNÝ˜\ˆÚYÝÎˆŒÌLŽÜÚYÝÊÏ]]Ìž
]ÌžJ^\™TØ[\PÛÛ\\™JÚYÝÕ^\™KÚYÝÔØ[\\‹˜\ÙWÝ]‹žJÈ™XÌ™ŠVÌK–ÌJK^Y\‹]‘\žŠNÜÚYÝÊÏ]]ÌKž
]ÌžJ^\™TØ[\PÛÛ\\™JÚYÝÕ^\™KÚYÝÔØ[\\‹˜\ÙWÝ]‹žJÈ™XÌ™ŠVÌWK–ÌJK^Y\‹]‘\žŠNÜÚYÝÊÏ]]Ì‹ž
]ÌžJ^\™TØ[\PÛÛ\\™JÚYÝÕ^\™KÚYÝÔØ[\\‹˜\ÙWÝ]‹žJÈ™XÌ™ŠVÌ—K–ÌJK^Y\‹]‘\žŠNÜÚYÝÊÏ]]Ìž
]ÌKžJ^\™TØ[\PÛÛ\\™JÚYÝÕ^\™KÚYÝÔØ[\\‹˜\ÙWÝ]‹žJÈ™XÌ™ŠVÌK–ÌWJK^Y\‹]‘\žŠNÜÚYÝÊÏ]]ÌKž
]ÌKžJ^\™TØ[\PÛÛ\\™JÚYÝÕ^\™KÚYÝÔØ[\\‹˜\ÙWÝ]‹žJÈ™XÌ™ŠVÌWK–ÌWJK^Y\‹]‘\žŠNÜÚYÝÊÏ]]Ì‹ž
]ÌKžJ^\™TØ[\PÛÛ\\™JÚYÝÕ^\™KÚYÝÔØ[\\‹˜\ÙWÝ]‹žJÈ™XÌ™ŠVÌ—K–ÌWJK^Y\‹]‘\žŠNÜÚYÝÊÏ]]Ìž
]Ì‹žJ^\™TØ[\PÛÛ\\™JÚYÝÕ^\™KÚYÝÔØ[\\‹˜\ÙWÝ]‹žJÈ™XÌ™ŠVÌK–Ì—JK^Y\‹]‘\žŠNÜÚYÝÊÏ]]ÌKž
]Ì‹žJ^\™TØ[\PÛÛ\\™JÚYÝÕ^\™KÚYÝÔØ[\\‹˜\ÙWÝ]‹žJÈ™XÌ™ŠVÌWK–Ì—JK^Y\‹]‘\žŠNÜÚYÝÊÏ]]Ì‹ž
]Ì‹žJ^\™TØ[\PÛÛ\\™JÚYÝÕ^\™KÚYÝÔØ[\\‹˜\ÙWÝ]‹žJÈ™XÌ™ŠVÌ—K–Ì—JK^Y\‹]‘\žŠNÜÚYÝÏ\ÚYÝËÌMŽÜÚYÝÏ[Z^
\šÛ™\ÜËK‹ÚYÝÊNÜ™]\›ˆÛÛ\]Q˜[Ù™ŠÚYÝËÛ\ÜXÙKžKœ\Ý[QYÙQ˜[Ù™ŠNßB™›ˆÛÛ\]TÚYÝÕÚ]ÑŒJ”ÜÚ][Û‘œ›ÛSYÚˆ™XÍ‹\Y]šXÎˆŒÌ‹ÚYÝÕ^\™Nˆ^\™WÙ\Ì™ÚYÝÔØ[\\ŽˆØ[\\—ØÛÛ\\š\ÛÛ‹\šÛ™\ÜÎˆŒÌ‹œ\Ý[QYÙQ˜[Ù™ŽˆŒÌŠKO™ŒÌ‚žÝ˜\ˆÛ\ÜXÙNˆ™XÌÙ]”ÜÚ][Û‘œ›ÛSYÚž^‹Ý”ÜÚ][Û‘œ›ÛSYÚÎÝ˜\ˆ]‘\ˆ™XÌÙH™XÌÙŠJ˜Û\ÜXÙKž^ŠÈ™XÌÙŠJJNÝ]‘\žYÙ]’[Û\
Û\ÜXÙK]‘\
NÚYˆ
\Y]šXÏŒ\Y]šXÏŒKŒ]‘\žˆ]‘\žŒKŒ]‘\žOˆ]‘\žOŒKŒ
HÜ™]\›ˆKŒßH[ÙHÝ˜\ˆÚYÝÎˆŒÌ]^\™TØ[\PÛÛ\\™S]™[
ÚYÝÕ^\™KÚYÝÔØ[\\‹]‘\žK]‘\žŠNÜÚYÝÏ[Z^
\šÛ™\ÜËK‹ÚYÝÊNÜ™]\›ˆÛÛ\]Q˜[Ù™ŠÚYÝËÛ\ÜXÙKžKœ\Ý[QYÙQ˜[Ù™ŠNß_B™›ˆÛÛ\]TÚYÝÕÚ]ÑŒÊ”ÜÚ][Û‘œ›ÛSYÚˆ™XÍ‹\Y]šXÎˆŒÌ‹ÚYÝÕ^\™Nˆ^\™WÙ\Ì™ÚYÝÔØ[\\ŽˆØ[\\—ØÛÛ\\š\ÛÛ‹ÚYÝÓX\Ú^™P[™[™\œÙNˆ™XÌ™‹\šÛ™\ÜÎˆŒÌ‹œ\Ý[QYÙQ˜[Ù™ŽˆŒÌŠKO™ŒÌ‚žÝ˜\ˆÛ\ÜXÙNˆ™XÌÙ]”ÜÚ][Û‘œ›ÛSYÚž^‹Ý”ÜÚ][Û‘œ›ÛSYÚÎÝ˜\ˆ]‘\ˆ™XÌÙH™XÌÙŠJ˜Û\ÜXÙKž^ŠÈ™XÌÙŠJJNÝ]‘\žYÙ]’[Û\
Û\ÜXÙK]‘\
NÚYˆ
\Y]šXÏŒ\Y]šXÏŒKŒ]‘\žˆ]‘\žŒKŒ]‘\žOˆ]‘\žOŒKŒ
HÜ™]\›ˆKŒßH[ÙHÝ˜\ˆ]Žˆ™XÌ™]]‘\žJœÚYÝÓX\Ú^™P[™[™\œÙKžÈ]ŠÏLNÈ˜\ˆÝˆ™XÌ™Yœ˜XÝ
]ŠNÈ˜\ˆ˜\ÙWÝ]Žˆ™XÌ™Y›ÛÜŠ]ŠKLNÈ˜˜\ÙWÝ]Š\ÚYÝÓX\Ú^™P[™[™\œÙKžNÈ˜\ˆ]Ìˆ™XÌ™LË‹L‹ŠœÝÝ˜\ˆ]ÌNˆ™XÌ™LKŠÌ‹ŠœÝÝ˜\ˆNˆ™XÌ™H™XÌ™Š
‹‹\Ýž
KÝ]ÌžLK‹ÝžÝ]ÌKž
ÌKŠJœÚYÝÓX\Ú^™P[™[™\œÙKžNÝ˜\ˆŽˆ™XÌ™H™XÌ™Š
‹‹\ÝžJKÝ]ÌžKLK‹ÝžKÝ]ÌKžJÌKŠJœÚYÝÓX\Ú^™P[™[™\œÙKžNÝ˜\ˆÚYÝÎˆŒÌLŽÜÚYÝÊÏ]]Ìž
]ÌžJ^\™TØ[\PÛÛ\\™S]™[
ÚYÝÕ^\™KÚYÝÔØ[\\‹˜\ÙWÝ]‹žJÈ™XÌ™ŠVÌK–ÌJK]‘\žŠNÜÚYÝÊÏ]]ÌKž
]ÌžJ^\™TØ[\PÛÛ\\™S]™[
ÚYÝÕ^\™KÚYÝÔØ[\\‹˜\ÙWÝ]‹žJÈ™XÌ™ŠVÌWK–ÌJK]‘\žŠNÜÚYÝÊÏ]]Ìž
]ÌKžJ^\™TØ[\PÛÛ\\™S]™[
ÚYÝÕ^\™KÚYÝÔØ[\\‹˜\ÙWÝ]‹žJÈ™XÌ™ŠVÌK–ÌWJK]‘\žŠNÜÚYÝÊÏ]]ÌKž
]ÌKžJ^\™TØ[\PÛÛ\\™S]™[
ÚYÝÕ^\™KÚYÝÔØ[\\‹˜\ÙWÝ]‹žJÈ™XÌ™ŠVÌWK–ÌWJK]‘\žŠNÜÚYÝÏ\ÚYÝËÌM‹ŽÜÚYÝÏ[Z^
\šÛ™\ÜËK‹ÚYÝÊNÜ™]\›ˆÛÛ\]Q˜[Ù™ŠÚYÝËÛ\ÜXÙKžKœ\Ý[QYÙQ˜[Ù™ŠNß_B™›ˆÛÛ\]TÚYÝÕÚ]ÑJ”ÜÚ][Û‘œ›ÛSYÚˆ™XÍ‹\Y]šXÎˆŒÌ‹ÚYÝÕ^\™Nˆ^\™WÙ\Ì™ÚYÝÔØ[\\ŽˆØ[\\—ØÛÛ\\š\ÛÛ‹ÚYÝÓX\Ú^™P[™[™\œÙNˆ™XÌ™‹\šÛ™\ÜÎˆŒÌ‹œ\Ý[QYÙQ˜[Ù™ŽˆŒÌŠKO™ŒÌ‚žÝ˜\ˆÛ\ÜXÙNˆ™XÌÙ]”ÜÚ][Û‘œ›ÛSYÚž^‹Ý”ÜÚ][Û‘œ›ÛSYÚÎÝ˜\ˆ]‘\ˆ™XÌÙH™XÌÙŠJ˜Û\ÜXÙKž^ŠÈ™XÌÙŠJJNÝ]‘\žYÙ]’[Û\
Û\ÜXÙK]‘\
NÚYˆ
\Y]šXÏŒ\Y]šXÏŒKŒ]‘\žˆ]‘\žŒKŒ]‘\žOˆ]‘\žOŒKŒ
HÜ™]\›ˆKŒßH[ÙHÝ˜\ˆ]Žˆ™XÌ™]]‘\žJœÚYÝÓX\Ú^™P[™[™\œÙKžÈ]ŠÏLNÈ˜\ˆÝˆ™XÌ™Yœ˜XÝ
]ŠNÈ˜\ˆ˜\ÙWÝ]Žˆ™XÌ™Y›ÛÜŠ]ŠKLNÈ˜˜\ÙWÝ]Š\ÚYÝÓX\Ú^™P[™[™\œÙKžNÈ˜\ˆ]Ìˆ™XÌ™M‹LËŠœÝÝ˜\ˆ]ÌNˆ™XÌ™H™XÌ™ŠËŠNÝ˜\ˆ]ÌŽˆ™XÌ™LKŠÌËŠœÝÝ˜\ˆNˆ™XÌÙH™XÌÙŠ
Ë‹L‹ŠœÝž
KÝ]ÌžL‹‹
ËŠÜÝž
KÝ]ÌKžÝžÝ]Ì‹ž
Ì‹ŠJœÚYÝÓX\Ú^™P[™[™\œÙKžNÝ˜\ˆŽˆ™XÌÙH™XÌÙŠ
Ë‹L‹ŠœÝžJKÝ]ÌžKL‹‹
ËŠÜÝžJKÝ]ÌKžKÝžKÝ]Ì‹žJÌ‹ŠJœÚYÝÓX\Ú^™P[™[™\œÙKžNÝ˜\ˆÚYÝÎˆŒÌLŽÜÚYÝÊÏ]]Ìž
]ÌžJ^\™TØ[\PÛÛ\\™S]™[
ÚYÝÕ^\™KÚYÝÔØ[\\‹˜\ÙWÝ]‹žJÈ™XÌ™ŠVÌK–ÌJK]‘\žŠNÜÚYÝÊÏ]]ÌKž
]ÌžJ^\™TØ[\PÛÛ\\™S]™[
ÚYÝÕ^\™KÚYÝÔØ[\\‹˜\ÙWÝ]‹žJÈ™XÌ™ŠVÌWK–ÌJK]‘\žŠNÜÚYÝÊÏ]]Ì‹ž
]ÌžJ^\™TØ[\PÛÛ\\™S]™[
ÚYÝÕ^\™KÚYÝÔØ[\\‹˜\ÙWÝ]‹žJÈ™XÌ™ŠVÌ—K–ÌJK]‘\žŠNÜÚYÝÊÏ]]Ìž
]ÌKžJ^\™TØ[\PÛÛ\\™S]™[
ÚYÝÕ^\™KÚYÝÔØ[\\‹˜\ÙWÝ]‹žJÈ™XÌ™ŠVÌK–ÌWJK]‘\žŠNÜÚYÝÊÏ]]ÌKž
]ÌKžJ^\™TØ[\PÛÛ\\™S]™[
ÚYÝÕ^\™KÚYÝÔØ[\\‹˜\ÙWÝ]‹žJÈ™XÌ™ŠVÌWK–ÌWJK]‘\žŠNÜÚYÝÊÏ]]Ì‹ž
]ÌKžJ^\™TØ[\PÛÛ\\™S]™[
ÚYÝÕ^\™KÚYÝÔØ[\\‹˜\ÙWÝ]‹žJÈ™XÌ™ŠVÌ—K–ÌWJK]‘\žŠNÜÚYÝÊÏ]]Ìž
]Ì‹žJ^\™TØ[\PÛÛ\\™S]™[
ÚYÝÕ^\™KÚYÝÔØ[\\‹˜\ÙWÝ]‹žJÈ™XÌ™ŠVÌK–Ì—JK]‘\žŠNÜÚYÝÊÏ]]ÌKž
]Ì‹žJ^\™TØ[\PÛÛ\\™S]™[
ÚYÝÕ^\™KÚYÝÔØ[\\‹˜\ÙWÝ]‹žJÈ™XÌ™ŠVÌWK–Ì—JK]‘\žŠNÜÚYÝÊÏ]]Ì‹ž
]Ì‹žJ^\™TØ[\PÛÛ\\™S]™[
ÚYÝÕ^\™KÚYÝÔØ[\\‹˜\ÙWÝ]‹žJÈ™XÌ™ŠVÌ—K–Ì—JK]‘\žŠNÜÚYÝÏ\ÚYÝËÌMŽÜÚYÝÏ[Z^
\šÛ™\ÜËK‹ÚYÝÊNÜ™]\›ˆÛÛ\]Q˜[Ù™ŠÚYÝËÛ\ÜXÙKžKœ\Ý[QYÙQ˜[Ù™ŠNß_B˜ÛÛœÝÚ\ÜÛÛ”Ø[\\œÌÌŽˆ\œ˜^O™XÌÙ‹X\œ˜^O™XÌÙ‹ˆ
™XÌÙŠŒÌLËŒMNLËŠK™XÌÙŠÌÍMÍËMÎLÎMŠK™XÌÙŠLŒÌM‹LLÌŒÎŠK™XÌÙŠLMŒLËŽLLMKŠK™XÌÙŠŽMMLNLNŠK™XÌÙŠLŽÍNKLŒMÎMÌÍKŠK™XÌÙŠŽNNNNNŒN‹ŠK™XÌÙŠLŒLŒMÎLŽLMLMKŠK™XÌÙŠŒNMÍŒËŽMÍÍËŠK™XÌÙŠLŒŒLÎLKŒŒÍNNŠK™XÌÙŠŒLNKŒÎÎKŠK™XÌÙŠŒŽÍÍMKLŒÍNLÍŠK™XÌÙŠŒÍÍÌËLÍŒL‹ŠK™XÌÙŠŒÌÎLLÌ‹LŒLŒMÍŒËŠK™XÌÙŠLŒÍÎMÌÍKLŽÌMNËŠK™XÌÙŠLŒŒÎÎLŒÍÌMLÍŠK™XÌÙŠNLLŽMËŒMŽMÎNKŠK™XÌÙŠLŽŽKŒÌÌMÎŠK™XÌÙŠLLŽŽÍÌŒ‹ŠK™XÌÙŠLNLMMÍËŠK™XÌÙŠŒMÍÎNKLŒMÌMŠK™XÌÙŠLMMMNKŒMMNNNMËŠK™XÌÙŠLŒÌMŒÍŽKLŒÎLLŽŠK™XÌÙŠLMMLŒÌ‹LŒMÌŒÍÍŒ‹ŠK™XÌÙŠŽLLŽKŒŽNMLKŠK™XÌÙŠLŒÌÌLÍËMLÎLKŠK™XÌÙŠŽLNÌÍËLŒŽŒŒÎL‹ŠK™XÌÙŠŒŽMŒKÌNÌL‹ŠK™XÌÙŠŒÎLMŒÎMËLÌŽŒKŠK™XÌÙŠLŒÍMÍŽLËLŒŒŒÌ‹ŠK™XÌÙŠLŒŒLMKÎNMLŒKŠK™XÌÙŠŽLŒÍÌL‹ŠK™XÌÙŠŠK™XÌÙŠŠK™XÌÙŠŠK™XÌÙŠŠK™XÌÙŠŠK™XÌÙŠŠK™XÌÙŠŠK™XÌÙŠŠK™XÌÙŠŠK™XÌÙŠŠK™XÌÙŠŠK™XÌÙŠŠK™XÌÙŠŠK™XÌÙŠŠK™XÌÙŠŠK™XÌÙŠŠK™XÌÙŠŠK™XÌÙŠŠK™XÌÙŠŠK™XÌÙŠŠK™XÌÙŠŠK™XÌÙŠŠK™XÌÙŠŠK™XÌÙŠŠK™XÌÙŠŠK™XÌÙŠŠK™XÌÙŠŠK™XÌÙŠŠK™XÌÙŠŠK™XÌÙŠŠK™XÌÙŠŠK™XÌÙŠŠBŠNØÛÛœÝÚ\ÜÛÛ”Ø[\\œÍˆ\œ˜^O™XÌÙ‹X\œ˜^O™XÌÙ‹ˆ
™XÌÙŠLŒLÌÎL‹ŒMÍKŠK™XÌÙŠŒMÌNKLŒMŠK™XÌÙŠLŒŽNMMËÎLNLKŠK™XÌÙŠMŽLÌŒLŠK™XÌÙŠLLMÎÌMÎËŠK™XÌÙŠŒLËŒÌÌŠK™XÌÙŠLŽMÌNMLŒÌLM‹ŠK™XÌÙŠLÌLÍÍLŽŒËŠK™XÌÙŠŽMÍÌLLŒLŒMKŠK™XÌÙŠŒŒÌÌ‹ŒMŒÍŽKŠK™XÌÙŠŒŒÍLŽŒŒMÌÌKŠK™XÌÙŠLÍLÌKŒÌŒLŠK™XÌÙŠLŒNŒ‹LŒŽMMÍMKŠK™XÌÙŠLŽNLŒ‹ŒŒMLÍŽKŠK™XÌÙŠMŒÍËŒLŒLËŠK™XÌÙŠŒÎMÍ‹LŒÎMŒLŠK™XÌÙŠÍLNM‹LÌÍL‹ŠK™XÌÙŠŒÎÌËLÌMLÌŒËŠK™XÌÙŠLŒÍNÎLLŽLÍŠK™XÌÙŠÌÎKLNÎNŠK™XÌÙŠŒŒŒŽNNKLŒŒMLLKŠK™XÌÙŠLÍMÍLMÎŠK™XÌÙŠLŒŽLŽMÍLËŠK™XÌÙŠŒÍMLKLŽÍMÌŠK™XÌÙŠŒMÍNMËŒÎŒÍ‹ŠK™XÌÙŠÍÌ‹LŒŒÌ‹ŠK™XÌÙŠLŒÎŽNÌL‹ŠK™XÌÙŠÍ‹LÎÍKŠK™XÌÙŠÌM‹ŒŒMÎLÌËŠK™XÌÙŠLŽMŽLLMMÎLKŠK™XÌÙŠLŒMMŽLËŒMÍŒ‹ŠK™XÌÙŠŒÍŒLKŽMÎNNŠK™XÌÙŠLÌNLŒÌÎŠK™XÌÙŠLŒMŒŒKLŽÌŽLŒKŠK™XÌÙŠŒÎMÎLŒÎLÎL‹ŠK™XÌÙŠLŒMŽ‹LŽNLKŠK™XÌÙŠÌÍŒKŒMNŠK™XÌÙŠŒÍÎLŒMÌKŠK™XÌÙŠLŽMŒÎËŠK™XÌÙŠÍLŒNNŠK™XÌÙŠLŒLÍÍ‹ŠK™XÌÙŠŒÍËLLMÌŠK™XÌÙŠŒÍŽŒÌNMŽŠK™XÌÙŠŒNLMLŒÌŒËŠK™XÌÙŠŽLÎMŒLŒÍŒLËŠK™XÌÙŠÎLŒŒŽŠK™XÌÙŠŒNKÎÌŽŠK™XÌÙŠŒMLMÍËLŽNNŠK™XÌÙŠŒŒMKLŒLN‹ŠK™XÌÙŠŒÌMLŒ‹LŒŽMËŠK™XÌÙŠLÎMKŒLKŠK™XÌÙŠLŒÍÌNŽŽŒLÎŠK™XÌÙŠŒŒÍ‹MÌŠK™XÌÙŠLMML‹LÌLLLKŠK™XÌÙŠŒLÍ‹ÌLL‹ŠK™XÌÙŠLMÎKLÍŽÎL‹ŠK™XÌÙŠLÍÌMLŒLMÍ‹ŠK™XÌÙŠLŒÍÌŒŽMKŠK™XÌÙŠŒMMMÌÍ‹ŒLMMËŠK™XÌÙŠŒÎLMLŒ‹ŽMŒKŠK™XÌÙŠLŒŒL‹LŒÌŽLŠK™XÌÙŠÎLŒÎKLNNMKŠK™XÌÙŠLMLÎM‹LÎLÌËŠK™XÌÙŠLŒMÎMLNMŒMËŠBŠNÙ›ˆÛÛ\]TÚYÝÕÚ]ÔÓTÔÔÊ^Y\ŽˆLÌ‹”ÜÚ][Û‘œ›ÛSYÚˆ™XÍ‹\Y]šXÎˆŒÌ‹\^\™Nˆ^\™WÌ™Ø\œ˜^OŒÌ‹\Ø[\\ŽˆØ[\\‹ÚYÝÕ^\™Nˆ^\™WÙ\Ì™Ø\œ˜^KÚYÝÔØ[\\ŽˆØ[\\—ØÛÛ\\š\ÛÛ‹ÚYÝÓX\Ú^™R[™\œÙNˆŒÌ‹YÚÚ^™UUŽˆŒÌ‹\šÛ™\ÜÎˆŒÌ‹œ\Ý[QYÙQ˜[Ù™ŽˆŒÌ‹ÙX\˜Ú\ÛÝ[ˆLÌ‹Ù•\ÛÝ[ˆLÌ‹Ú\ÜÛÛ”Ø[\\œÎˆ\œ˜^O™XÌÙ‹‹YÚÚ^™UUÛÜœ™XÝ[ÛŽˆ™XÌ™‹\ÛÜœ™XÝ[ÛŽˆŒÌ‹[[Xœ˜Q\šÛ™\ÜÎˆŒÌŠKO™ŒÌ‚žÝ˜\ˆÛ\ÜXÙNˆ™XÌÙ]”ÜÚ][Û‘œ›ÛSYÚž^‹Ý”ÜÚ][Û‘œ›ÛSYÚÎÝ˜\ˆ]‘\ˆ™XÌÙH™XÌÙŠJ˜Û\ÜXÙKž^ŠÈ™XÌÙŠJJNÝ]‘\žXÛ[\
Ù]’[Û\
Û\ÜXÙK]‘\
K‹Ô‘PUTÕÓTÔ×ÕS—ÓÓ‘JNÝ˜\ˆ]‘\^Y\Žˆ™XÍH™XÍŠ]‘\ž]‘\žKŒÌŠ^Y\ŠK]‘\žŠNÝ˜\ˆ›ØÚÙ\‘\ˆŒÌLŒÝ˜\ˆÝ[P›ØÚÙ\‘\ˆŒÌLŒÝ˜\ˆ[P›ØÚÙ\ŽˆŒÌLŒÙ›Üˆ
˜\ˆNˆLÌLÈOÙX\˜Ú\ÛÝ[ÈH
ÊÊHØ›ØÚÙ\‘\]^\™TØ[\J\^\™K\Ø[\\‹]‘\žJÊYÚÚ^™UUŠ›YÚÚ^™UUÛÜœ™XÝ[ÛŠœÚYÝÓX\Ú^™R[™\œÙJ”Ú\ÜÛÛ”Ø[\\œÌÌ–ÚWKžJK^Y\ŠKœŽÛ[P›ØÚÙ\ŠÏ\Ù[XÝ
‹K‹›ØÚÙ\‘\\Y]šXÊNÜÝ[P›ØÚÙ\‘\
Ï\Ù[XÝ
‹›ØÚÙ\‘\›ØÚÙ\‘\\Y]šXÊNßB˜\ˆ]™Ð›ØÚÙ\‘\ˆŒÌ\Ý[P›ØÚÙ\‘\Û[P›ØÚÙ\ŽÝ˜\ˆPSÙ™œÙ]ˆŒÌ\ÚYÝÓX\Ú^™R[™\œÙJŒLŽÝ˜\ˆ[[Xœ˜T˜][ÎˆŒÌJ
\Y]šXËX]™Ð›ØÚÙ\‘\
J™\ÛÜœ™XÝ[ÛŠÐPSÙ™œÙ]
NÝ˜\ˆš[\”˜Y]\Îˆ™XÍH™XÍŠ[[Xœ˜T˜][Ê›YÚÚ^™UUŠ›YÚÚ^™UUÛÜœ™XÝ[ÛŠœÚYÝÓX\Ú^™R[™\œÙK‹ŠNÝ˜\ˆ˜[™ÛNˆŒÌYÙ]˜[™
”ÜÚ][Û‘œ›ÛSYÚžJNÝ˜\ˆ›Ý][Û[™ÛNˆŒÌ\˜[™ÛJŒËŒMMNLŽÝ˜\ˆ›Ý][Û•™XÝÜŽˆ™XÌ™H™XÌ™ŠÛÜÊ›Ý][Û[™ÛJKÚ[Š›Ý][Û[™ÛJJNÝ˜\ˆÚYÝÎˆŒÌLŽÙ›Üˆ
˜\ˆNˆLÌLÈOÙ•\ÛÝ[ÈJÊÊHÝ˜\ˆÙ™œÙ]ˆ™XÍH™XÍŠÚ\ÜÛÛ”Ø[\\œÖÚWKŠNÛÙ™œÙ]H™XÍŠÙ™œÙ]ž
œ›Ý][Û•™XÝÜ‹ž[Ù™œÙ]žJœ›Ý][Û•™XÝÜ‹žKÙ™œÙ]žJœ›Ý][Û•™XÝÜ‹ž
ÛÙ™œÙ]ž
œ›Ý][Û•™XÝÜ‹žK‹ŠNÛ]ÛÛÜ™Ï]]‘\^Y\ŠÛÙ™œÙ]
™š[\”˜Y]\ÎÜÚYÝÊÏ]^\™TØ[\PÛÛ\\™JÚYÝÕ^\™KÚYÝÔØ[\\‹ÛÛÜ™ËžKLÌŠÛÛÜ™ËžŠKÛÛÜ™ËÊNßBœÚYÝËÏHŒÌŠÙ•\ÛÝ[
NÜÚYÝÏ[Z^
ÚYÝËK‹Z[Š
\Y]šXËX]™Ð›ØÚÙ\‘\
J™\ÛÜœ™XÝ[ÛŠœ[[Xœ˜Q\šÛ™\ÜËKŠJNÜÚYÝÏ[Z^
\šÛ™\ÜËK‹ÚYÝÊNÜ™]\›ˆÙ[XÝ
ÛÛ\]Q˜[Ù™ŠÚYÝËÛ\ÜXÙKžKœ\Ý[QYÙQ˜[Ù™ŠKKŒ[P›ØÚÙ\KŒ
NßB™›ˆÛÛ\]TÚYÝÕÚ]ÔÔÊ”ÜÚ][Û‘œ›ÛSYÚˆ™XÍ‹\Y]šXÎˆŒÌ‹\^\™Nˆ^\™WÌ™ŒÌ‹\Ø[\\ŽˆØ[\\‹ÚYÝÕ^\™Nˆ^\™WÙ\Ì™ÚYÝÔØ[\\ŽˆØ[\\—ØÛÛ\\š\ÛÛ‹ÚYÝÓX\Ú^™R[™\œÙNˆŒÌ‹YÚÚ^™UUŽˆŒÌ‹\šÛ™\ÜÎˆŒÌ‹œ\Ý[QYÙQ˜[Ù™ŽˆŒÌ‹ÙX\˜Ú\ÛÝ[ˆLÌ‹Ù•\ÛÝ[ˆLÌ‹Ú\ÜÛÛ”Ø[\\œÎˆ\œ˜^O™XÌÙ‹ŠKO™ŒÌ‚žÝ˜\ˆÛ\ÜXÙNˆ™XÌÙ]”ÜÚ][Û‘œ›ÛSYÚž^‹Ý”ÜÚ][Û‘œ›ÛSYÚÎÝ˜\ˆ]‘\ˆ™XÌÙH™XÌÙŠJ˜Û\ÜXÙKž^ŠÈ™XÌÙŠJJNÝ]‘\žYÙ]’[Û\
Û\ÜXÙK]‘\
NÚYˆ
\Y]šXÏŒ\Y]šXÏŒKŒ]‘\žˆ]‘\žŒKŒ]‘\žOˆ]‘\žOŒKŒ
HÜ™]\›ˆKŒßB˜\ˆ›ØÚÙ\‘\ˆŒÌLŒÝ˜\ˆÝ[P›ØÚÙ\‘\ˆŒÌLŒÝ˜\ˆ[P›ØÚÙ\ŽˆŒÌLŒÙ›Üˆ
˜\ˆNˆLÌLÈOÙX\˜Ú\ÛÝ[ÈH
ÊÊHØ›ØÚÙ\‘\]^\™TØ[\S]™[
\^\™K\Ø[\\‹]‘\žJÊYÚÚ^™UUŠœÚYÝÓX\Ú^™R[™\œÙJ”Ú\ÜÛÛ”Ø[\\œÌÌ–ÚWKžJK
KœŽÛ[P›ØÚÙ\ŠÏ\Ù[XÝ
‹K‹›ØÚÙ\‘\\Y]šXÊNÜÝ[P›ØÚÙ\‘\
Ï\Ù[XÝ
‹›ØÚÙ\‘\›ØÚÙ\‘\\Y]šXÊNßBšYˆ
[P›ØÚÙ\KŒ
HÜ™]\›ˆKŒßB˜\ˆ]™Ð›ØÚÙ\‘\ˆŒÌ\Ý[P›ØÚÙ\‘\Û[P›ØÚÙ\ŽÝ˜\ˆPSÙ™œÙ]ˆŒÌ\ÚYÝÓX\Ú^™R[™\œÙJŒLŽÝ˜\ˆ[[Xœ˜T˜][ÎˆŒÌJ
\Y]šXËX]™Ð›ØÚÙ\‘\
JÐPSÙ™œÙ]
NÝ˜\ˆš[\”˜Y]\ÎˆŒÌ\[[Xœ˜T˜][Ê›YÚÚ^™UUŠœÚYÝÓX\Ú^™R[™\œÙNÝ˜\ˆ˜[™ÛNˆŒÌYÙ]˜[™
”ÜÚ][Û‘œ›ÛSYÚžJNÝ˜\ˆ›Ý][Û[™ÛNˆŒÌ\˜[™ÛJŒËŒMMNLŽÝ˜\ˆ›Ý][Û•™XÝÜŽˆ™XÌ™H™XÌ™ŠÛÜÊ›Ý][Û[™ÛJKÚ[Š›Ý][Û[™ÛJJNÝ˜\ˆÚYÝÎˆŒÌLŽÙ›Üˆ
˜\ˆNˆLÌLÈOÙ•\ÛÝ[ÈJÊÊHÝ˜\ˆÙ™œÙ]ˆ™XÌÙ\Ú\ÜÛÛ”Ø[\\œÖÚWNÛÙ™œÙ]H™XÌÙŠÙ™œÙ]ž
œ›Ý][Û•™XÝÜ‹ž[Ù™œÙ]žJœ›Ý][Û•™XÝÜ‹žKÙ™œÙ]žJœ›Ý][Û•™XÝÜ‹ž
ÛÙ™œÙ]ž
œ›Ý][Û•™XÝÜ‹žKŠNÛ]ÛÛÜ™Ï]]‘\
ÛÙ™œÙ]
™š[\”˜Y]\ÎÜÚYÝÊÏ]^\™TØ[\PÛÛ\\™S]™[
ÚYÝÕ^\™KÚYÝÔØ[\\‹ÛÛÜ™ËžKÛÛÜ™ËžŠNßBœÚYÝËÏHŒÌŠÙ•\ÛÝ[
NÜÚYÝÏ[Z^
ÚYÝËK‹\Y]šXËX]™Ð›ØÚÙ\‘\
NÜÚYÝÏ[Z^
\šÛ™\ÜËK‹ÚYÝÊNÜ™]\›ˆÛÛ\]Q˜[Ù™ŠÚYÝËÛ\ÜXÙKžKœ\Ý[QYÙQ˜[Ù™ŠNßB™›ˆÛÛ\]TÚYÝÕÚ]ÔÔÌMŠ”ÜÚ][Û‘œ›ÛSYÚˆ™XÍ‹\Y]šXÎˆŒÌ‹\^\™Nˆ^\™WÌ™ŒÌ‹\Ø[\\ŽˆØ[\\‹ÚYÝÕ^\™Nˆ^\™WÙ\Ì™ÚYÝÔØ[\\ŽˆØ[\\—ØÛÛ\\š\ÛÛ‹ÚYÝÓX\Ú^™R[™\œÙNˆŒÌ‹YÚÚ^™UUŽˆŒÌ‹\šÛ™\ÜÎˆŒÌ‹œ\Ý[QYÙQ˜[Ù™ŽˆŒÌŠKO™ŒÌ‚žÜ™]\›ˆÛÛ\]TÚYÝÕÚ]ÔÔÊ”ÜÚ][Û‘œ›ÛSYÚ\Y]šXË\^\™K\Ø[\\‹ÚYÝÕ^\™KÚYÝÔØ[\\‹ÚYÝÓX\Ú^™R[™\œÙKYÚÚ^™UU‹\šÛ™\ÜËœ\Ý[QYÙQ˜[Ù™‹M‹M‹Ú\ÜÛÛ”Ø[\\œÌÌŠNßB™›ˆÛÛ\]TÚYÝÕÚ]ÔÔÌÌŠ”ÜÚ][Û‘œ›ÛSYÚˆ™XÍ‹\Y]šXÎˆŒÌ‹\^\™Nˆ^\™WÌ™ŒÌ‹\Ø[\\ŽˆØ[\\‹ÚYÝÕ^\™Nˆ^\™WÙ\Ì™ÚYÝÔØ[\\ŽˆØ[\\—ØÛÛ\\š\ÛÛ‹ÚYÝÓX\Ú^™R[™\œÙNˆŒÌ‹YÚÚ^™UUŽˆŒÌ‹\šÛ™\ÜÎˆŒÌ‹œ\Ý[QYÙQ˜[Ù™ŽˆŒÌŠKO™ŒÌ‚žÜ™]\›ˆÛÛ\]TÚYÝÕÚ]ÔÔÊ”ÜÚ][Û‘œ›ÛSYÚ\Y]šXË\^\™K\Ø[\\‹ÚYÝÕ^\™KÚYÝÔØ[\\‹ÚYÝÓX\Ú^™R[™\œÙKYÚÚ^™UU‹\šÛ™\ÜËœ\Ý[QYÙQ˜[Ù™‹M‹Ì‹Ú\ÜÛÛ”Ø[\\œÌÌŠNßB™›ˆÛÛ\]TÚYÝÕÚ]ÔÔÍ
”ÜÚ][Û‘œ›ÛSYÚˆ™XÍ‹\Y]šXÎˆŒÌ‹\^\™Nˆ^\™WÌ™ŒÌ‹\Ø[\\ŽˆØ[\\‹ÚYÝÕ^\™Nˆ^\™WÙ\Ì™ÚYÝÔØ[\\ŽˆØ[\\—ØÛÛ\\š\ÛÛ‹ÚYÝÓX\Ú^™R[™\œÙNˆŒÌ‹YÚÚ^™UUŽˆŒÌ‹\šÛ™\ÜÎˆŒÌ‹œ\Ý[QYÙQ˜[Ù™ŽˆŒÌŠKO™ŒÌ‚žÜ™]\›ˆÛÛ\]TÚYÝÕÚ]ÔÔÊ”ÜÚ][Û‘œ›ÛSYÚ\Y]šXË\^\™K\Ø[\\‹ÚYÝÕ^\™KÚYÝÔØ[\\‹ÚYÝÓX\Ú^™R[™\œÙKYÚÚ^™UU‹\šÛ™\ÜËœ\Ý[QYÙQ˜[Ù™‹Ì‹Ú\ÜÛÛ”Ø[\\œÍ
NßB™›ˆÛÛ\]TÚYÝÕÚ]ÔÓTÔÔÌMŠ^Y\ŽˆLÌ‹”ÜÚ][Û‘œ›ÛSYÚˆ™XÍ‹\Y]šXÎˆŒÌ‹\^\™Nˆ^\™WÌ™Ø\œ˜^OŒÌ‹\Ø[\\ŽˆØ[\\‹ÚYÝÕ^\™Nˆ^\™WÙ\Ì™Ø\œ˜^KÚYÝÔØ[\\ŽˆØ[\\—ØÛÛ\\š\ÛÛ‹ÚYÝÓX\Ú^™R[™\œÙNˆŒÌ‹YÚÚ^™UUŽˆŒÌ‹\šÛ™\ÜÎˆŒÌ‹œ\Ý[QYÙQ˜[Ù™ŽˆŒÌ‹YÚÚ^™UUÛÜœ™XÝ[ÛŽˆ™XÌ™‹\ÛÜœ™XÝ[ÛŽˆŒÌ‹[[Xœ˜Q\šÛ™\ÜÎˆŒÌŠKO™ŒÌ‚žÜ™]\›ˆÛÛ\]TÚYÝÕÚ]ÔÓTÔÔÊ^Y\‹”ÜÚ][Û‘œ›ÛSYÚ\Y]šXË\^\™K\Ø[\\‹ÚYÝÕ^\™KÚYÝÔØ[\\‹ÚYÝÓX\Ú^™R[™\œÙKYÚÚ^™UU‹\šÛ™\ÜËœ\Ý[QYÙQ˜[Ù™‹M‹M‹Ú\ÜÛÛ”Ø[\\œÌÌ‹YÚÚ^™UUÛÜœ™XÝ[Û‹\ÛÜœ™XÝ[Û‹[[Xœ˜Q\šÛ™\ÜÊNßB™›ˆÛÛ\]TÚYÝÕÚ]ÔÓTÔÔÌÌŠ^Y\ŽˆLÌ‹”ÜÚ][Û‘œ›ÛSYÚˆ™XÍ‹\Y]šXÎˆŒÌ‹\^\™Nˆ^\™WÌ™Ø\œ˜^OŒÌ‹\Ø[\\ŽˆØ[\\‹ÚYÝÕ^\™Nˆ^\™WÙ\Ì™Ø\œ˜^KÚYÝÔØ[\\ŽˆØ[\\—ØÛÛ\\š\ÛÛ‹ÚYÝÓX\Ú^™R[™\œÙNˆŒÌ‹YÚÚ^™UUŽˆŒÌ‹\šÛ™\ÜÎˆŒÌ‹œ\Ý[QYÙQ˜[Ù™ŽˆŒÌ‹YÚÚ^™UUÛÜœ™XÝ[ÛŽˆ™XÌ™‹\ÛÜœ™XÝ[ÛŽˆŒÌ‹[[Xœ˜Q\šÛ™\ÜÎˆŒÌŠKO™ŒÌ‚žÜ™]\›ˆÛÛ\]TÚYÝÕÚ]ÔÓTÔÔÊ^Y\‹”ÜÚ][Û‘œ›ÛSYÚ\Y]šXË\^\™K\Ø[\\‹ÚYÝÕ^\™KÚYÝÔØ[\\‹ÚYÝÓX\Ú^™R[™\œÙKYÚÚ^™UU‹\šÛ™\ÜËœ\Ý[QYÙQ˜[Ù™‹M‹Ì‹Ú\ÜÛÛ”Ø[\\œÌÌ‹YÚÚ^™UUÛÜœ™XÝ[Û‹\ÛÜœ™XÝ[Û‹[[Xœ˜Q\šÛ™\ÜÊNßB™›ˆÛÛ\]TÚYÝÕÚ]ÔÓTÔÔÍ
^Y\ŽˆLÌ‹”ÜÚ][Û‘œ›ÛSYÚˆ™XÍ‹\Y]šXÎˆŒÌ‹\^\™Nˆ^\™WÌ™Ø\œ˜^OŒÌ‹\Ø[\\ŽˆØ[\\‹ÚYÝÕ^\™Nˆ^\™WÙ\Ì™Ø\œ˜^KÚYÝÔØ[\\ŽˆØ[\\—ØÛÛ\\š\ÛÛ‹ÚYÝÓX\Ú^™R[™\œÙNˆŒÌ‹YÚÚ^™UUŽˆŒÌ‹\šÛ™\ÜÎˆŒÌ‹œ\Ý[QYÙQ˜[Ù™ŽˆŒÌ‹YÚÚ^™UUÛÜœ™XÝ[ÛŽˆ™XÌ™‹\ÛÜœ™XÝ[ÛŽˆŒÌ‹[[Xœ˜Q\šÛ™\ÜÎˆŒÌŠKO™ŒÌ‚žÜ™]\›ˆÛÛ\]TÚYÝÕÚ]ÔÓTÔÔÊ^Y\‹”ÜÚ][Û‘œ›ÛSYÚ\Y]šXË\^\™K\Ø[\\‹ÚYÝÕ^\™KÚYÝÔØ[\\‹ÚYÝÓX\Ú^™R[™\œÙKYÚÚ^™UU‹\šÛ™\ÜËœ\Ý[QYÙQ˜[Ù™‹Ì‹Ú\ÜÛÛ”Ø[\\œÍYÚÚ^™UUÛÜœ™XÝ[Û‹\ÛÜœ™XÝ[Û‹[[Xœ˜Q\šÛ™\ÜÊNßBˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÞ™×_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÞ™×OYŒJNØÛÛœÝO^Û˜[YNž™ËÚY\Ž™Œ_KÙÏHœØ[\\‘œ˜YÛY[XÛ\˜][Ûˆ‹LOXÚY™YˆÑQ’S‘SSQWÂˆÚYˆÑQ’S‘SSQWÑT‘PÕUOLBˆÙYš[™H—ÕT–RS‘ÓSQWÕUˆ“XZ[•UŒBˆÙ[YˆÑQ’S‘SSQWÑT‘PÕUOL‚ˆÙYš[™H—ÕT–RS‘ÓSQWÕUˆ“XZ[•UŒ‚ˆÙ[YˆÑQ’S‘SSQWÑT‘PÕUOLÂˆÙYš[™H—ÕT–RS‘ÓSQWÕUˆ“XZ[•UŒÂˆÙ[YˆÑQ’S‘SSQWÑT‘PÕUOMˆÙYš[™H—ÕT–RS‘ÓSQWÕUˆ“XZ[•UˆÙ[YˆÑQ’S‘SSQWÑT‘PÕUOMBˆÙYš[™H—ÕT–RS‘ÓSQWÕUˆ“XZ[•UBˆÙ[YˆÑQ’S‘SSQWÑT‘PÕUOM‚ˆÙYš[™H—ÕT–RS‘ÓSQWÕUˆ“XZ[•U‚ˆÙ[ÙB˜\žZ[™È—ÕT–RS‘ÓSQWÕUŽˆ™XÌ™ŽÂˆÙ[™Y‚˜\ˆÔÐSTT“SQWÔØ[\\”Ø[\\ŽˆØ[\\ŽÝ˜\ˆÔÐSTT“SQWÔØ[\\Žˆ^\™WÌ™ŒÌŽÂˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÚÙ×_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÚÙ×O]LJNØÛÛœÝUO^Û˜[YNšÙËÚY\ŽL_KÙÏH™œ™\Û™[[˜Ý[Ûˆ‹OXÚY™Yˆ”‘TÓ‘S™›ˆÛÛ\]Qœ™\Û™[\›JšY]Ñ\™XÝ[ÛŽˆ™XÌÙ‹ÛÜ››Ü›X[ˆ™XÌÙ‹šX\ÎˆŒÌ‹ÝÙ\ŽˆŒÌŠKO™ŒÌ‚žÛ]œ™\Û™[\›NˆŒÌ\ÝÊšX\ÊØXœÊÝ
šY]Ñ\™XÝ[Û‹ÛÜ››Ü›X[
JKÝÙ\ŠNÜ™]\›ˆÛ[\
œ™\Û™[\›K‹KŠNßBˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÑÙ×_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÑÙ×OYJNØÛÛœÝUO^Û˜[YN‘ÙËÚY\Ž™_KÏHœ™Y›XÝ[Û‘[˜Ý[Ûˆ‹ÌOX›ˆÛÛ\]Qš^Y\]Z\™XÝ[™Ý[\ÛÛÜ™ÊÛÜ›ÜÎˆ™XÍ‹ÛÜ››Ü›X[ˆ™XÌÙ‹\™XÝ[ÛŽˆ™XÌÙŠKO™XÌÙ‚žÝ˜\ˆÛŽˆŒÌX][ŒŠ\™XÝ[Û‹ž‹\™XÝ[Û‹ž
NÝ˜\ˆ]ˆŒÌXXÛÜÊ\™XÝ[Û‹žJNÝ˜\ˆÜ\™PÛÛÜ™Îˆ™XÌ™H™XÌ™ŠÛ‹]
J”‘PÒT“ÐÐSÔLŠŒ‹ŒÝ˜\ˆÎˆŒÌ\Ü\™PÛÛÜ™Ëž
ŒJÌNÝ˜\ˆˆŒÌ\Ü\™PÛÛÜ™ËžNÜ™]\›ˆ™XÌÙŠË
NÈB™›ˆÛÛ\]SZ\œ›Ü™Yš^Y\]Z\™XÝ[™Ý[\ÛÛÜ™ÊÛÜ›ÜÎˆ™XÍ‹ÛÜ››Ü›X[ˆ™XÌÙ‹\™XÝ[ÛŽˆ™XÌÙŠKO™XÌÙ‚žÝ˜\ˆÛŽˆŒÌX][ŒŠ\™XÝ[Û‹ž‹\™XÝ[Û‹ž
NÝ˜\ˆ]ˆŒÌXXÛÜÊ\™XÝ[Û‹žJNÝ˜\ˆÜ\™PÛÛÜ™Îˆ™XÌ™H™XÌ™ŠÛ‹]
J”‘PÒT“ÐÐSÔLŠŒ‹ŒÝ˜\ˆÎˆŒÌ\Ü\™PÛÛÜ™Ëž
ŒJÌNÝ˜\ˆˆŒÌ\Ü\™PÛÛÜ™ËžNÜ™]\›ˆ™XÌÙŠKŒ\Ë
NÈB™›ˆÛÛ\]Q\]Z\™XÝ[™Ý[\ÛÛÜ™ÊÛÜ›ÜÎˆ™XÍ‹ÛÜ››Ü›X[ˆ™XÌÙ‹^YTÜÚ][ÛŽˆ™XÌÙ‹™Y›XÝ[Û“X]š^ˆX]ŠKO™XÌÙ‚žÝ˜\ˆØ[Y\˜UÕ™\^ˆ™XÌÙ[›Ü›X[^™JÛÜ›ÜËž^‹Y^YTÜÚ][ÛŠNÝ˜\ˆŽˆ™XÌÙ[›Ü›X[^™J™Y›XÝ
Ø[Y\˜UÕ™\^ÛÜ››Ü›X[
JNÜH
™Y›XÝ[Û“X]š^
ˆ™XÍŠ‹
JKž^ŽÝ˜\ˆÛŽˆŒÌX][ŒŠ‹ž‹‹ž
NÝ˜\ˆ]ˆŒÌXXÛÜÊ‹žJNÝ˜\ˆÜ\™PÛÛÜ™Îˆ™XÌ™H™XÌ™ŠÛ‹]
J”‘PÒT“ÐÐSÔLŠŒ‹ŒÝ˜\ˆÎˆŒÌ\Ü\™PÛÛÜ™Ëž
ŒJÌNÝ˜\ˆˆŒÌ\Ü\™PÛÛÜ™ËžNÜ™]\›ˆ™XÌÙŠË
NßB™›ˆÛÛ\]TÜ\šXØ[ÛÛÜ™ÊÛÜ›ÜÎˆ™XÍ‹ÛÜ››Ü›X[ˆ™XÌÙ‹šY]ÎˆX]‹™Y›XÝ[Û“X]š^ˆX]ŠKO™XÌÙ‚žÝ˜\ˆšY]Ñ\Žˆ™XÌÙ[›Ü›X[^™J
šY]ÊÛÜ›ÜÊKž^ŠNÝ˜\ˆšY]Ó›Ü›X[ˆ™XÌÙ[›Ü›X[^™J
šY]Êˆ™XÍŠÛÜ››Ü›X[Œ
JKž^ŠNÝ˜\ˆŽˆ™XÌÙ\™Y›XÝ
šY]Ñ\‹šY]Ó›Ü›X[
NÜH
™Y›XÝ[Û“X]š^
ˆ™XÍŠ‹
JKž^ŽÜ‹ž\‹ž‹LKŒÝ˜\ˆNˆŒÌL‹Œ
›[™Ý
ŠNÜ™]\›ˆ™XÌÙŠ‹žÛJÌKKŒ\‹žKÛKLK
NßB™›ˆÛÛ\]T[˜\ÛÛÜ™ÊÛÜ›ÜÎˆ™XÍ‹ÛÜ››Ü›X[ˆ™XÌÙ‹^YTÜÚ][ÛŽˆ™XÌÙ‹™Y›XÝ[Û“X]š^ˆX]ŠKO™XÌÙ‚žÝ˜\ˆšY]Ñ\Žˆ™XÌÙ]ÛÜ›ÜËž^‹Y^YTÜÚ][ÛŽÝ˜\ˆÛÛÜ™Îˆ™XÌÙ[›Ü›X[^™J™Y›XÝ
šY]Ñ\‹ÛÜ››Ü›X[
JNÜ™]\›ˆ
™Y›XÝ[Û“X]š^
ˆ™XÍŠÛÛÜ™ËJJKž^ŽßB™›ˆÛÛ\]PÝXšXÐÛÛÜ™ÊÛÜ›ÜÎˆ™XÍ‹ÛÜ››Ü›X[ˆ™XÌÙ‹^YTÜÚ][ÛŽˆ™XÌÙ‹™Y›XÝ[Û“X]š^ˆX]ŠKO™XÌÙ‚žÝ˜\ˆšY]Ñ\Žˆ™XÌÙ[›Ü›X[^™JÛÜ›ÜËž^‹Y^YTÜÚ][ÛŠNÝ˜\ˆÛÛÜ™Îˆ™XÌÙ\™Y›XÝ
šY]Ñ\‹ÛÜ››Ü›X[
NØÛÛÜ™ÏH
™Y›XÝ[Û“X]š^
ˆ™XÍŠÛÛÜ™Ë
JKž^ŽÂˆÚY™YˆS•‘T•ÕP’PÓPT˜ÛÛÜ™ËžJKLKŒÂˆÙ[™Y‚œ™]\›ˆÛÛÜ™ÎßB™›ˆÛÛ\]PÝXšXÓØØ[ÛÛÜ™ÊÛÜ›ÜÎˆ™XÍ‹ÛÜ››Ü›X[ˆ™XÌÙ‹^YTÜÚ][ÛŽˆ™XÌÙ‹™Y›XÝ[Û“X]š^ˆX]‹™Y›XÝ[Û”Ú^™Nˆ™XÌÙ‹™Y›XÝ[Û”ÜÚ][ÛŽˆ™XÌÙŠKO™XÌÙ‚žÝ˜\ˆšY]Ñ\Žˆ™XÌÙ[›Ü›X[^™JÛÜ›ÜËž^‹Y^YTÜÚ][ÛŠNÝ˜\ˆÛÛÜ™Îˆ™XÌÙ\™Y›XÝ
šY]Ñ\‹ÛÜ››Ü›X[
NØÛÛÜ™Ï\\˜[^ÛÜœ™XÝ›Ü›X[
ÛÜ›ÜËž^‹ÛÛÜ™Ë™Y›XÝ[Û”Ú^™K™Y›XÝ[Û”ÜÚ][ÛŠNØÛÛÜ™ÏJ™Y›XÝ[Û“X]š^
ˆ™XÍŠÛÛÜ™Ë
JKž^ŽÂˆÚY™YˆS•‘T•ÕP’PÓPT˜ÛÛÜ™ËžJKLKŒÂˆÙ[™Y‚œ™]\›ˆÛÛÜ™ÎßB™›ˆÛÛ\]T›Ú™XÝ[ÛÛÛÜ™ÊÛÜ›ÜÎˆ™XÍ‹šY]ÎˆX]‹™Y›XÝ[Û“X]š^ˆX]ŠKO™XÌÙ‚žÜ™]\›ˆ
™Y›XÝ[Û“X]š^
ŠšY]ÊÛÜ›ÜÊJKž^ŽßB™›ˆÛÛ\]TÚÞP›ÞÛÛÜ™ÊÜÚ][Û•Îˆ™XÌÙ‹™Y›XÝ[Û“X]š^ˆX]ŠKO™XÌÙ‚žÜ™]\›ˆ
™Y›XÝ[Û“X]š^
ˆ™XÍŠÜÚ][Û•ËKŠJKž^ŽßBˆÚY™Yˆ‘Q“PÕSÓ‚™›ˆÛÛ\]T™Y›XÝ[ÛÛÛÜ™ÊÛÜ›ÜÎˆ™XÍ‹ÛÜ››Ü›X[ˆ™XÌÙŠKO™XÌÙ‚žÂˆÚY™Yˆ‘Q“PÕSÓ“PTÓRT”“Ô‘QTURT‘PÕS‘ÕST—Ñ’VQ˜\ˆ\™XÝ[ÛŽˆ™XÌÙ[›Ü›X[^™Jœ˜YÛY[[œ]Ë‘\™XÝ[Û•ÊNÜ™]\›ˆÛÛ\]SZ\œ›Ü™Yš^Y\]Z\™XÝ[™Ý[\ÛÛÜ™ÊÛÜ›ÜËÛÜ››Ü›X[\™XÝ[ÛŠNÂˆÙ[™Y‚ˆÚY™Yˆ‘Q“PÕSÓ“PTÑTURT‘PÕS‘ÕST—Ñ’VQ˜\ˆ\™XÝ[ÛŽˆ™XÌÙ[›Ü›X[^™Jœ˜YÛY[[œ]Ë‘\™XÝ[Û•ÊNÜ™]\›ˆÛÛ\]Qš^Y\]Z\™XÝ[™Ý[\ÛÛÜ™ÊÛÜ›ÜËÛÜ››Ü›X[\™XÝ[ÛŠNÂˆÙ[™Y‚ˆÚY™Yˆ‘Q“PÕSÓ“PTÑTURT‘PÕS‘ÕST‚œ™]\›ˆÛÛ\]Q\]Z\™XÝ[™Ý[\ÛÛÜ™ÊÛÜ›ÜËÛÜ››Ü›X[ØÙ[™K‘^YTÜÚ][Û‹ž^‹[šY›Ü›\Ëœ™Y›XÝ[Û“X]š^
NÂˆÙ[™Y‚ˆÚY™Yˆ‘Q“PÕSÓ“PTÔÔT’PÐSœ™]\›ˆÛÛ\]TÜ\šXØ[ÛÛÜ™ÊÛÜ›ÜËÛÜ››Ü›X[ØÙ[™KšY]Ë[šY›Ü›\Ëœ™Y›XÝ[Û“X]š^
NÂˆÙ[™Y‚ˆÚY™Yˆ‘Q“PÕSÓ“PTÔST‚œ™]\›ˆÛÛ\]T[˜\ÛÛÜ™ÊÛÜ›ÜËÛÜ››Ü›X[ØÙ[™K‘^YTÜÚ][Û‹ž^‹[šY›Ü›\Ëœ™Y›XÝ[Û“X]š^
NÂˆÙ[™Y‚ˆÚY™Yˆ‘Q“PÕSÓ“PTÐÕP’PÂˆÚY™YˆTÑWÓÐÐSÔ‘Q“PÕSÓ“PTÐÕP’PÂœ™]\›ˆÛÛ\]PÝXšXÓØØ[ÛÛÜ™ÊÛÜ›ÜËÛÜ››Ü›X[ØÙ[™K‘^YTÜÚ][Û‹ž^‹[šY›Ü›\Ëœ™Y›XÝ[Û“X]š^[šY›Ü›\Ë”™Y›XÝ[Û”Ú^™K[šY›Ü›\Ë”™Y›XÝ[Û”ÜÚ][ÛŠNÂˆÙ[ÙBœ™]\›ˆÛÛ\]PÝXšXÐÛÛÜ™ÊÛÜ›ÜËÛÜ››Ü›X[ØÙ[™K‘^YTÜÚ][Û‹ž^‹[šY›Ü›\Ëœ™Y›XÝ[Û“X]š^
NÂˆÙ[™Y‚ˆÙ[™Y‚ˆÚY™Yˆ‘Q“PÕSÓ“PTÔ“Ò‘PÕSÓ‚œ™]\›ˆÛÛ\]T›Ú™XÝ[ÛÛÛÜ™ÊÛÜ›ÜËØÙ[™KšY]Ë[šY›Ü›\Ëœ™Y›XÝ[Û“X]š^
NÂˆÙ[™Y‚ˆÚY›™Yˆ‘Q“PÕSÓ“PTÐÕP’PÂˆÚY™Yˆ‘Q“PÕSÓ“PTÔÒÖP“Öœ™]\›ˆÛÛ\]TÚÞP›ÞÛÛÜ™Êœ˜YÛY[[œ]Ë”ÜÚ][Û•U•Ë[šY›Ü›\Ëœ™Y›XÝ[Û“X]š^
NÂˆÙ[™Y‚ˆÙ[™Y‚ˆÚY™Yˆ‘Q“PÕSÓ“PTÑVPÒUœ™]\›ˆ™XÌÙŠ
NÂˆÙ[™Y‚ŸBˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÖ×_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÖ×OWÌJNØÛÛœÝ•O^Û˜[YN–ËÚY\Ž—Ì_KÙÏHš[XYÙT›ØÙ\ÜÚ[™ÑXÛ\˜][Ûˆ‹LOXÚY™YˆVÔÕT‘B[šY›Ü›H^ÜÝ\™S[™X\ŽˆŒÌŽÂˆÙ[™Y‚ˆÚY™YˆÓÓ•TÕ[šY›Ü›HÛÛ˜\ÝˆŒÌŽÂˆÙ[™Y‚ˆÚY™YˆÒUPSSÑB[šY›Ü›HÚ]P˜[[˜ÙSX]š^ˆX]ÞÙŽÂˆÙ[™Y‚ˆÚYˆYš[™Y
’QÓ‘UJHYš[™Y
UTŠB[šY›Ü›H’[™\œÙTØÜ™Y[”Ú^™Nˆ™XÌ™ŽÂˆÙ[™Y‚ˆÚY™Yˆ’QÓ‘UB[šY›Ü›HšYÛ™]TÙ][™ÜÌNˆ™XÍŽÝ[šY›Ü›HšYÛ™]TÙ][™ÜÌŽˆ™XÍŽÂˆÙ[™Y‚ˆÚY™YˆÓÓÔÕT•‘TÂ[šY›Ü›HØ[Y\˜PÛÛÜÝ\™S™YØ]]™Nˆ™XÍŽÝ[šY›Ü›HØ[Y\˜PÛÛÜÝ\™S™]]˜[ˆ™XÍŽÝ[šY›Ü›HØ[Y\˜PÛÛÜÝ\™TÜÚ]]™Nˆ™XÍŽÂˆÙ[™Y‚ˆÚY™YˆÓÓÔ‘ÔQS‘ÂˆÚY™YˆÓÓÔ‘ÔQS‘ÌÑ˜\ˆÛÛÜ•˜[œÙ›Ü›TØ[\\ŽˆØ[\\ŽÝ˜\ˆÛÛÜ•˜[œÙ›Ü›Nˆ^\™WÌÙŒÌŽÂˆÙ[ÙB˜\ˆÛÛÜ•˜[œÙ›Ü›TØ[\\ŽˆØ[\\ŽÝ˜\ˆÛÛÜ•˜[œÙ›Ü›Nˆ^\™WÌ™ŒÌŽÂˆÙ[™Y‚[šY›Ü›HÛÛÜ•˜[œÙ›Ü›TÙ][™ÜÎˆ™XÍŽÂˆÙ[™Y‚ˆÚY™YˆUT‚[šY›Ü›H]\’[[œÚ]NˆŒÌŽÂˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÕÙ×_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÕÙ×O[LJNØÛÛœÝÕO^Û˜[YN•ÙËÚY\Ž›L_KÏHš[XYÙT›ØÙ\ÜÚ[™Ñ[˜Ý[ÛœÈ‹OXÚYˆÓ‘SPTS‘ÏOLÂ˜ÛÛœÝ”“™]]˜[Ý\ÛÛ\™\ÜÚ[ÛŽˆŒÌLŽLŒØÛÛœÝ”“™]]˜[\Ø]\˜][ÛŽˆŒÌLŒMNÙ›ˆ”“™]]˜[Û™SX\[™ÊÛÛÜŽˆ™XÌÙˆ
KO™XÌÙˆÝ˜\ˆˆŒÌ[Z[ŠÛÛÜ‹œ‹Z[ŠÛÛÜ‹™ËÛÛÜ‹˜ŠJNÝ˜\ˆÙ™œÙ]ˆŒÌ\Ù[XÝ
ŒM‹ŒJž
žŒ
NÝ˜\ˆ™\Ý[XÛÛÜŽÜ™\Ý[O[Ù™œÙ]Ý˜\ˆXZÎˆŒÌ[X^
™\Ý[œ‹X^
™\Ý[™Ë™\Ý[˜ŠJNÚYˆ
XZÏ”“™]]˜[Ý\ÛÛ\™\ÜÚ[ÛŠHÜ™]\›ˆ™\Ý[ßB˜\ˆˆŒÌLK‹T”“™]]˜[Ý\ÛÛ\™\ÜÚ[ÛŽÝ˜\ˆ™]ÔXZÎˆŒÌLK‹Y
™ÊXZÊÙT”“™]]˜[Ý\ÛÛ\™\ÜÚ[ÛŠNÜ™\Ý[
[™]ÔXZËÜXZÎÝ˜\ˆÎˆŒÌLK‹LK‹Ê”“™]]˜[\Ø]\˜][ÛŠŠXZË[™]ÔXZÊJÌKŠNÜ™]\›ˆZ^
™\Ý[™]ÔXZÊˆ™XÌÙŠKKJKÊNßBˆÙ[™Y‚ˆÚYˆÓ‘SPTS‘ÏOL‚˜ÛÛœÝPÑTÒ[œ]X]ˆX]ÞÙHX]ÞÙŠ™XÌÙŠNMÌNKŒÍŒŒŽ
K™XÌÙŠŒÍMNŽLÍŒLÌÎÊK™XÌÙŠŒŒËŒMM‹ŽÍÍÍÊBŠNØÛÛœÝPÑTÓÝ]]X]ˆX]ÞÙHX]ÞÙŠ™XÌÙŠKŒÍKLŒLŒLŒÌÊK™XÌÙŠLLÌLKŒLLËLŒÌÍŠK™XÌÙŠLŒÌÍËLŒŒKKŒÍŒŠBŠNÙ›ˆ”•[™Ñš]
Žˆ™XÌÙŠKO™XÌÙ‚žÝ˜\ˆNˆ™XÌÙ]ŠŠŠÌŒMÎŠKLŒLLÍÎÝ˜\ˆŽˆ™XÌÙ]ŠŠŽNÍÌŽJŠÌÌŽMLL
JÌŒŒÎNÜ™]\›ˆKØŽßB™›ˆPÑTÑš]Y
ÛÛÜŽˆ™XÌÙŠKO™XÌÙ‚žÝ˜\ˆÝ]]PPÑTÒ[œ]X]
˜ÛÛÜŽÛÝ]]T”•[™Ñš]
Ý]]
NÛÝ]]PPÑTÓÝ]]X]
›Ý]]ÛÝ]]\Ø]\˜]U™XÌÊÝ]]
NÜ™]\›ˆÝ]]ßBˆÙ[™Y‚ˆÙYš[™HÕTÕÓWÒSPQÑT“ÐÑTÔÒS‘Ñ•SÕSÓ”×ÑQ’S’USÓ”Â™›ˆ\R[XYÙT›ØÙ\ÜÚ[™Ê™\Ý[ˆ™XÍŠKO™XÍˆÂˆÙYš[™HÕTÕÓWÒSPQÑT“ÐÑTÔÒS‘Ñ•SÕSÓ”×ÕTUT‘TÕSÐUÕT•˜\ˆ™Ø\™\Ý[œ™ØŽÎÂˆÚY™YˆÒUPSSÑBœ™Ø][šY›Ü›\ËÚ]P˜[[˜ÙSX]š^
œ™ØŽÜ™Ø[X^
™Ø‹™XÌÙŠŒ
JNÂˆÙ[™Y‚ˆÚY™YˆVÔÕT‘Bœ™ØŠ][šY›Ü›\Ë™^ÜÝ\™S[™X\ŽÂˆÙ[™Y‚ˆÚY™Yˆ’QÓ‘UB˜\ˆšY]ÜÜNˆ™XÌ™Yœ˜YÛY[[œ]ËœÜÚ][Û‹žJ[šY›Ü›\Ë’[™\œÙTØÜ™Y[”Ú^™NÝšY]ÜÜO]šY]ÜÜJŒ‹ŒLKŒÝ˜\ˆšYÛ™]VLNˆ™XÌÙH™XÌÙŠšY]ÜÜJ[šY›Ü›\ËšYÛ™]TÙ][™ÜÌKžJÝ[šY›Ü›\ËšYÛ™]TÙ][™ÜÌKžËKŒ
NÝ˜\ˆšYÛ™]U\›NˆŒÌYÝ
šYÛ™]VLKšYÛ™]VLJNÝ˜\ˆšYÛ™]NˆŒÌ\ÝÊšYÛ™]U\›K[šY›Ü›\ËšYÛ™]TÙ][™ÜÌ‹ÊNÝ˜\ˆšYÛ™]PÛÛÜŽˆ™XÌÙ][šY›Ü›\ËšYÛ™]TÙ][™ÜÌ‹œ™ØŽÂˆÚY™Yˆ’QÓ‘UP“S‘SÑSUSTB˜\ˆšYÛ™]PÛÛÜ“][\Y\Žˆ™XÌÙ[Z^
šYÛ™]PÛÛÜ‹™XÌÙŠKKJKšYÛ™]JNÜ™ØŠ]šYÛ™]PÛÛÜ“][\Y\ŽÂˆÙ[™Y‚ˆÚY™Yˆ’QÓ‘UP“S‘SÑSÔTUQBœ™Ø[Z^
šYÛ™]PÛÛÜ‹™Ø‹šYÛ™]JNÂˆÙ[™Y‚ˆÙ[™Y‚ˆÚYˆÓ‘SPTS‘ÏOLÂœ™ØT”“™]]˜[Û™SX\[™Ê™ØŠNÂˆÙ[YˆÓ‘SPTS‘ÏOL‚œ™ØPPÑTÑš]Y
™ØŠNÂˆÙ[YˆÓ‘SPTS‘ÏOLB˜ÛÛœÝÛ™[X\[™ÐØ[Xœ˜][ÛŽˆŒÌLKNLMÎNÜ™ØLKŒY^Š]Û™[X\[™ÐØ[Xœ˜][ÛŠœ™ØŠNÂˆÙ[™Y‚œ™Ø]ÑØ[[XTÜXÙU™XÌÊ™ØŠNÜ™Ø\Ø]\˜]U™XÌÊ™ØŠNÂˆÚY™YˆÓÓ•TÕ˜\ˆ™\Ý[YÚÛÛ˜\Ýˆ™XÌÙ\™ØŠœ™ØŠŠËŒL‹Œ
œ™ØŠNÚYˆ
[šY›Ü›\Ë˜ÛÛ˜\ÝKŒ
HÜ™Ø[Z^
™XÌÙŠKKJK™Ø‹[šY›Ü›\Ë˜ÛÛ˜\Ý
NßH[ÙHÜ™Ø[Z^
™Ø‹™\Ý[YÚÛÛ˜\Ý[šY›Ü›\Ë˜ÛÛ˜\ÝLKŒ
NßBœ™Ø[X^
™Ø‹™XÌÙŠŠJNÂˆÙ[™Y‚ˆÚY™YˆÓÓÔ‘ÔQS‘Â˜\ˆÛÛÜ•˜[œÙ›Ü›R[œ]ˆ™XÌÙ\™ØŠ[šY›Ü›\Ë˜ÛÛÜ•˜[œÙ›Ü›TÙ][™ÜËž
Ý[šY›Ü›\Ë˜ÛÛÜ•˜[œÙ›Ü›TÙ][™ÜËž^^NÂˆÚY™YˆÓÓÔ‘ÔQS‘ÌÑ˜\ˆÛÛÜ•˜[œÙ›Ü›SÝ]]ˆ™XÌÙ]^\™TØ[\JÛÛÜ•˜[œÙ›Ü›KÛÛÜ•˜[œÙ›Ü›TØ[\\‹ÛÛÜ•˜[œÙ›Ü›R[œ]
Kœ™ØŽÂˆÙ[ÙB˜\ˆÛÛÜ•˜[œÙ›Ü›SÝ]]ˆ™XÌÙ]^\™TØ[\JÛÛÜ•˜[œÙ›Ü›KÛÛÜ•˜[œÙ›Ü›TØ[\\‹ÛÛÜ•˜[œÙ›Ü›R[œ][šY›Ü›\Ë˜ÛÛÜ•˜[œÙ›Ü›TÙ][™ÜËž^ŠKœ™ØŽÂˆÙ[™Y‚œ™Ø[Z^
™Ø‹ÛÛÜ•˜[œÙ›Ü›SÝ]][šY›Ü›\Ë˜ÛÛÜ•˜[œÙ›Ü›TÙ][™ÜËÝÝÊNÂˆÙ[™Y‚ˆÚY™YˆÓÓÔÕT•‘TÂ˜\ˆ[XNˆŒÌYÙ][Z[˜[˜ÙJ™ØŠNÝ˜\ˆÝ\™SZ^ˆ™XÌ™XÛ[\
™XÌ™Š[XJŒËŒLKK[XJ‹LËŒ
ÌKJK™XÌ™ŠŒ
K™XÌ™ŠKŒ
JNÝ˜\ˆÛÛÜÝ\™Nˆ™XÍ][šY›Ü›\ËØ[Y\˜PÛÛÜÝ\™S™]]˜[
ØÝ\™SZ^ž
[šY›Ü›\ËØ[Y\˜PÛÛÜÝ\™TÜÚ]]™KXÝ\™SZ^žJ[šY›Ü›\ËØ[Y\˜PÛÛÜÝ\™S™YØ]]™NÜ™ØŠXÛÛÜÝ\™Kœ™ØŽÜ™Ø[Z^
™XÌÙŠ[XJK™Ø‹ÛÛÜÝ\™K˜JNÂˆÙ[™Y‚ˆÚY™YˆUT‚˜\ˆ˜[™ˆŒÌYÙ]˜[™
œ˜YÛY[[œ]ËœÜÚ][Û‹žJ[šY›Ü›\Ë’[™\œÙTØÜ™Y[”Ú^™JNÝ˜\ˆ]\ŽˆŒÌ[Z^
][šY›Ü›\Ë™]\’[[œÚ]K[šY›Ü›\Ë™]\’[[œÚ]K˜[™
NÜ™Ø\Ø]\˜]U™XÌÊ™ØŠÈ™XÌÙŠ]\ŠJNÂˆÙ[™Y‚ˆÙYš[™HÕTÕÓWÒSPQÑT“ÐÑTÔÒS‘Ñ•SÕSÓ”×ÕTUT‘TÕSÐUS‘œ™]\›ˆ™XÍŠ™Ø‹™\Ý[˜JNßXÜK’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÒ×_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÒ×O\JNØÛÛœÝ•O^Û˜[YN’ËÚY\Žœ_KYÏH^\™T™\]][Û‘[˜Ý[ÛœÈ‹ÌOXÚYˆVT‘WÔ‘TUUSÓ—ÓSÑOŒ™›ˆÝ^™\\Ú
ˆ™XÌ™ŠKO™XÍˆÜ™]\›ˆœ˜XÝ
Ú[Š™XÍŠŒKŒ
ÙÝ
™XÌ™ŠÍËŒMËŒ
JKŒ‹Œ
ÙÝ
™XÌ™ŠLKŒËŒ
JKŒËŒ
ÙÝ
™XÌ™ŠKŒŽKŒ
JKŒ
ÙÝ
™XÌ™ŠŒËŒÌKŒ
JBŠJJŒLËŒ
NßBˆÙ[™Y‚ˆÚYˆVT‘WÔ‘TUUSÓ—ÓSÑOOLB™›ˆÝ^™\Ø[\J^ˆ^\™WÌ™ŒÌ‹Ø[\ˆØ[\\‹]Žˆ™XÌ™ŠKO™XÍˆÝ˜\ˆÎˆŒÌ]^\™TØ[\J^Ø[\ŒJ]ŠKžÝ˜\ˆ[™^ˆŒÌZÊŽŒÝ˜\ˆŽˆŒÌYœ˜XÝ
[™^
NÝ˜\ˆNˆŒÌY›ÛÜŠ[™^
ÌJNÝ˜\ˆXŽˆŒÌY›ÛÜŠ[™^
NÙ[Z[Š‹KŒYŠJŒ‹ŒÝ˜\ˆÙ™˜Nˆ™XÌ™\Ú[Š™XÌ™ŠËŒËŒ
JšJNÝ˜\ˆÙ™˜Žˆ™XÌ™\Ú[Š™XÌ™ŠËŒËŒ
JšXŠNÝ˜\ˆˆ™XÌ™Y
]ŠNÝ˜\ˆNˆ™XÌ™YJ]ŠNÝ˜\ˆÛÛNˆ™XÍ]^\™TØ[\QÜ˜Y
^Ø[\]ŠÌŒÊ›Ù™˜KJNÝ˜\ˆÛÛŽˆ™XÍ]^\™TØ[\QÜ˜Y
^Ø[\]ŠÌŒÊ›Ù™˜‹JNÝ˜\ˆÛÛÝ[NˆŒÌXÛÛKž
ØÛÛKžJØÛÛKž‹XÛÛ‹žXÛÛ‹žKXÛÛ‹žŽÜ™]\›ˆZ^
ÛÛKÛÛ‹™XÍŠÛ[ÛÝÝ\
Œ‹Ž‹LŒJ˜ÛÛÝ[JJJNßBˆÙ[YˆVT‘WÔ‘TUUSÓ—ÓSÑOOL‚™›ˆÝ^™\^\Ú
ˆ™XÌ™ŠKO™XÌ™ˆÝ˜\ˆŽˆ™XÌ™[X]ž™ŠLËŒKŽKKÌLKËNËŒÊJœÜ™]\›ˆœ˜XÝ
Ú[ŠŠJÍÍNMLÊNßBœÝXÝÕ^™\šQÜšYÝÌNˆŒÌ‹ÌŽˆŒÌ‹ÌÎˆŒÌ‹™\^Nˆ™XÌšK™\^Žˆ™XÌšK™\^Îˆ™XÌšKNÙ›ˆÝ^™\šX[™ÛQÜšY
ÝÚ[Žˆ™XÌ™ŠKO—Õ^™\šQÜšYÝ˜\ˆÝˆ™XÌ™\ÝÚ[ŠŒ‹Œ
œÜ\
ËŒ
NÝ˜\ˆÜšYÔÚÙ]ÙYÜšYˆX]ž™[X]ž™ŠKŒŒLMÍÌÍLËKŒMMÌM
NÝ˜\ˆÚÙ]ÙYÛÛÜ™ˆ™XÌ™YÜšYÔÚÙ]ÙYÜšY
œÝÝ˜\ˆ˜\ÙRYˆ™XÌšO]™XÌšJ›ÛÜŠÚÙ]ÙYÛÛÜ™
JNÝ˜\ˆ[\ˆ™XÌÙ]™XÌÙŠœ˜XÝ
ÚÙ]ÙYÛÛÜ™
KŒ
NÝ[\žLKŒ][\ž][\žNÝ˜\ˆÎˆŒÌ\Ý\
Œ][\žŠNÝ˜\ˆÌŽˆŒÌL‹Œ
œËLKŒÝ˜\ˆ™\Ý[ˆÕ^™\šQÜšYÜ™\Ý[ÌOK][\žŠœÌŽÜ™\Ý[Ì\Ë][\žJœÌŽÜ™\Ý[ÌÏ\Ë][\ž
œÌŽÜ™\Ý[™\^OX˜\ÙRY
Ý™XÌšJLÌŠÊKLÌŠÊJNÜ™\Ý[™\^X˜\ÙRY
Ý™XÌšJLÌŠÊKLÌŠKŒ\ÊJNÜ™\Ý[™\^ÏX˜\ÙRY
Ý™XÌšJLÌŠKŒ\ÊKLÌŠÊJNÜ™]\›ˆ™\Ý[ßB™›ˆÝ^™\XZÙPÙ[”Õ
™\^ˆ™XÌšJKO™XÌ™ˆÝ˜\ˆ[”ÚÙ]ÓX]ˆX]ž™[X]ž™ŠKŒŒKKŒÌKŒMMÌM
NÜ™]\›ˆ
[”ÚÙ]ÓX]
™XÌ™Š™\^
JKÊ‹Œ
œÜ\
ËŒ
JNßB™›ˆÝ^™\ØY›ÝžŠYˆ™XÌšK›ÝÝŽˆŒÌŠKO›X]ž™ˆÝ˜\ˆ[™ÛNˆŒÌYŒÌŠXœÊYž
šYžJJØXœÊYž
ÚYžJJJÌËŒMMNLLÍNMÎNØ[™ÛOX[™ÛH	H
‹Œ
ŒËŒMMNLLÍNMÎJNÚYˆ
[™ÛOŒ
HÈ[™ÛJÏL‹Œ
ŒËŒMMNLLÍNMÎNÈBšYˆ
[™ÛOŒËŒMMNLLÍNMÎJHÈ[™ÛKOLËŒMMNLLÍNMÎNÈB˜[™ÛJ\›ÝÝŽÝ˜\ˆÜÎˆŒÌXÛÜÊ[™ÛJNÝ˜\ˆÚNˆŒÌ\Ú[Š[™ÛJNÜ™]\›ˆX]ž™ŠÜËÚK\ÚKÜÊNßB™›ˆÝ^™\ØZ[ŒÊˆ™XÌÙ‹ŽˆŒÌŠKO™XÌÙˆÝ˜\ˆÎˆŒÌ[ÙÊKŒ\ŠKÛÙÊJNÝ˜\ˆÎˆ™XÌÙL‹Œ
œÝ\
™XÌÙŠJK
NÝ˜\ˆNˆ™XÌÙL‹Œ
ŠKŒ\ÊNÝ˜\ˆ™\Îˆ™XÌÙLJœÊÌŒJ›JœÝÊX^
™XÌÙŠŒ
KÊÞ
›JK™XÌÙŠÊJNÜ™]\›ˆ™\ËÊ™\Ëž
Ü™\ËžJÜ™\ËžŠNßB™›ˆÝ^™\Ø[\J^ˆ^\™WÌ™ŒÌ‹Ø[\ˆØ[\\‹]Žˆ™XÌ™ŠKO™XÍˆÝ˜\ˆ›ÝÝ™[™ÝˆŒÌ][šY›Ü›\Ë•^\™T™\]][Û’^[[™Ô\˜[\ËžÝ˜\ˆ˜[Ù™ÛÛ˜\ÝˆŒÌ][šY›Ü›\Ë•^\™T™\]][Û’^[[™Ô\˜[\ËžNÝ˜\ˆ^˜[ˆŒÌ][šY›Ü›\Ë•^\™T™\]][Û’^[[™Ô\˜[\ËžŽÝ˜\ˆŽˆŒÌ][šY›Ü›\Ë•^\™T™\]][Û’^[[™Ô\˜[\ËÎÝ˜\ˆÕˆ™XÌ™Y
]ŠNÝ˜\ˆÕNˆ™XÌ™YJ]ŠNÝ˜\ˆÜšYˆÕ^™\šQÜšYWÝ^™\šX[™ÛQÜšY
]ŠNÝ˜\ˆ›ÝNˆX]ž™WÝ^™\ØY›ÝžŠÜšY™\^K›ÝÝ™[™Ý
NÝ˜\ˆ›ÝŽˆX]ž™WÝ^™\ØY›ÝžŠÜšY™\^‹›ÝÝ™[™Ý
NÝ˜\ˆ›ÝÎˆX]ž™WÝ^™\ØY›ÝžŠÜšY™\^Ë›ÝÝ™[™Ý
NÝ˜\ˆÙ[ŒNˆ™XÌ™WÝ^™\XZÙPÙ[”Õ
ÜšY™\^JNÝ˜\ˆÙ[ŒŽˆ™XÌ™WÝ^™\XZÙPÙ[”Õ
ÜšY™\^ŠNÝ˜\ˆÙ[ŒÎˆ™XÌ™WÝ^™\XZÙPÙ[”Õ
ÜšY™\^ÊNÝ˜\ˆÝNˆ™XÌ™J]‹XÙ[ŒJJœ›ÝJØÙ[ŒJ×Ý^™\^\Ú
™XÌ™ŠÜšY™\^JJNÝ˜\ˆÝŽˆ™XÌ™J]‹XÙ[ŒŠJœ›ÝŠØÙ[ŒŠ×Ý^™\^\Ú
™XÌ™ŠÜšY™\^ŠJNÝ˜\ˆÝÎˆ™XÌ™J]‹XÙ[ŒÊJœ›ÝÊØÙ[ŒÊ×Ý^™\^\Ú
™XÌ™ŠÜšY™\^ÊJNÝ˜\ˆÌNˆ™XÍ]^\™TØ[\QÜ˜Y
^Ø[\ÝKÕ
œ›ÝKÕJœ›ÝJNÝ˜\ˆÌŽˆ™XÍ]^\™TØ[\QÜ˜Y
^Ø[\Ý‹Õ
œ›Ý‹ÕJœ›ÝŠNÝ˜\ˆÌÎˆ™XÍ]^\™TØ[\QÜ˜Y
^Ø[\ÝËÕ
œ›ÝËÕJœ›ÝÊNÝ˜\ˆÎˆ™XÌÙ]™XÌÙŠŒŽNKNËŒLM
NÝ˜\ˆÎˆ™XÌÙ]™XÌÙŠÝ
ÌKœ™Ø‹ÊKÝ
Ì‹œ™Ø‹ÊKÝ
ÌËœ™Ø‹ÊJNÑÏ[Z^
™XÌÙŠKŒ
KË˜[Ù™ÛÛ˜\Ý
NÝ˜\ˆÎˆ™XÌÙQÊœÝÊ™XÌÙŠÜšYÌKÜšYÌ‹ÜšYÌÊK™XÌÙŠ^˜[
JNÕÏUËÊËž
ÕËžJÕËžŠNÚYˆ
ˆOHJHÕÏWÝ^™\ØZ[ŒÊËŠNßBœ™]\›ˆËž
˜ÌJÕËžJ˜ÌŠÕËžŠ˜ÌÎßBˆÙ[YˆVT‘WÔ‘TUUSÓ—ÓSÑOOLÂ™›ˆÝ^™\Ø[\J^ˆ^\™WÌ™ŒÌ‹Ø[\ˆØ[\\‹]Žˆ™XÌ™ŠKO™XÍˆÝ˜\ˆ]]Žˆ™XÌ™Y›ÛÜŠ]ŠNÝ˜\ˆ]Žˆ™XÌ™Yœ˜XÝ
]ŠNÝ˜\ˆÙ˜Nˆ™XÍWÝ^™\\Ú
]]ŠÝ™XÌ™ŠŒŒ
JNÝ˜\ˆÙ˜Žˆ™XÍWÝ^™\\Ú
]]ŠÝ™XÌ™ŠKŒŒ
JNÝ˜\ˆÙ˜Îˆ™XÍWÝ^™\\Ú
]]ŠÝ™XÌ™ŠŒKŒ
JNÝ˜\ˆÙ™ˆ™XÍWÝ^™\\Ú
]]ŠÝ™XÌ™ŠKŒKŒ
JNÝ˜\ˆˆ™XÌ™Y
]ŠNÝ˜\ˆNˆ™XÌ™YJ]ŠNÛÙ˜O]™XÍŠÙ˜KžKÚYÛŠÙ˜KžËLJJNÛÙ˜]™XÍŠÙ˜‹žKÚYÛŠÙ˜‹žËLJJNÛÙ˜Ï]™XÍŠÙ˜ËžKÚYÛŠÙ˜ËžËLJJNÛÙ™]™XÍŠÙ™žKÚYÛŠÙ™žËLJJNÝ˜\ˆ]˜Nˆ™XÌ™]]Š›Ù˜KžÊÛÙ˜KžNÈ˜\ˆNˆ™XÌ™Y
›Ù˜KžÎÈ˜\ˆXNˆ™XÌ™YJ›Ù˜KžÎÝ˜\ˆ]˜Žˆ™XÌ™]]Š›Ù˜‹žÊÛÙ˜‹žNÈ˜\ˆŽˆ™XÌ™Y
›Ù˜‹žÎÈ˜\ˆXŽˆ™XÌ™YJ›Ù˜‹žÎÝ˜\ˆ]˜Îˆ™XÌ™]]Š›Ù˜ËžÊÛÙ˜ËžNÈ˜\ˆÎˆ™XÌ™Y
›Ù˜ËžÎÈ˜\ˆXÎˆ™XÌ™YJ›Ù˜ËžÎÝ˜\ˆ]™ˆ™XÌ™]]Š›Ù™žÊÛÙ™žNÈ˜\ˆˆ™XÌ™Y
›Ù™žÎÈ˜\ˆYˆ™XÌ™YJ›Ù™žÎÝ˜\ˆŽˆ™XÌ™\Û[ÛÝÝ\
™XÌ™ŠŒJK™XÌ™ŠÍJK]ŠNÜ™]\›ˆZ^
›Z^
^\™TØ[\QÜ˜Y
^Ø[\]˜KKXJK^\™TØ[\QÜ˜Y
^Ø[\]˜‹‹XŠK‹ž
K›Z^
^\™TØ[\QÜ˜Y
^Ø[\]˜ËËXÊK^\™TØ[\QÜ˜Y
^Ø[\]™Y
K‹ž
K˜‹žBŠNßBˆÙ[YˆVT‘WÔ‘TUUSÓ—ÓSÑOOM™›ˆÝ^™\Ø[\J^ˆ^\™WÌ™ŒÌ‹Ø[\ˆØ[\\‹]Žˆ™XÌ™ŠKO™XÍˆÝ˜\ˆˆ™XÌ™Y›ÛÜŠ]ŠNÝ˜\ˆŽˆ™XÌ™Yœ˜XÝ
]ŠNÝ˜\ˆˆ™XÌ™Y
]ŠNÝ˜\ˆNˆ™XÌ™YJ]ŠNÝ˜\ˆ˜Nˆ™XÍ]™XÍŠŒ
NÝ˜\ˆÝˆŒÌLŒÝ˜\ˆÌŽˆŒÌLŒÙ›Üˆ
˜\ˆŽˆLÌKLNÈLNÈŠÊÊHÙ›Üˆ
˜\ˆNˆLÌKLNÈOLNÈJÊÊHÝ˜\ˆÎˆ™XÌ™]™XÌ™ŠŒÌŠJKŒÌŠŠJNÝ˜\ˆÎˆ™XÍWÝ^™\\Ú

ÙÊNÝ˜\ˆŽˆ™XÌ™YËYŠÛËžNÝ˜\ˆˆŒÌYÝ
‹ŠNÝ˜\ˆÎˆŒÌY^
MKŒ
™
NÝ˜\ˆÎˆ™XÍ]^\™TØ[\QÜ˜Y
^Ø[\]ŠÛËžËJNÝ˜JÏ]Ê˜ÎÝÝ
Ï]ÎÝÌŠÏ]ÊÎß_B˜\ˆYX[ŽˆŒÌLŒÎÝ˜\ˆ™\Îˆ™XÍ[YX[ŠÊ˜K]Ý
›YX[ŠKÜÜ\
ÌŠNÜ™]\›ˆZ^
˜KÝÝ™\Ë
NßBˆÙ[™Y‚ˆÚYˆVT‘WÔ‘TUUSÓ—ÓSÑOŒ™›ˆV‘
ˆ^\™WÌ™ŒÌ‹ÎˆØ[\\‹]Žˆ™XÌ™ŠKO™XÍˆÜ™]\›ˆÝ^™\Ø[\JË]ŠNßBˆÙ[ÙB™›ˆV‘
ˆ^\™WÌ™ŒÌ‹ÎˆØ[\\‹]Žˆ™XÌ™ŠKO™XÍˆÜ™]\›ˆ^\™TØ[\JË]ŠNßBˆÙ[™Y‚ˆÙYš[™HV‘ÑQ’S‘Q˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÖY×_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÖY×OYÌJNØÛÛœÝUO^Û˜[YN–YËÚY\Ž™Ì_KYÏH˜[\œ˜YÛY[XZ[‘[˜Ý[ÛœÈ‹ŒOXÚY›™YˆV‘ÑQ’S‘Q™›ˆV‘
ˆ^\™WÌ™ŒÌ‹ÎˆØ[\\‹]Žˆ™XÌ™ŠKO™XÍˆÜ™]\›ˆ^\™TØ[\JË]ŠNßBˆÙYš[™HV‘ÑQ’S‘QˆÙ[™Y‚ˆÚYˆYš[™Y
•ST
HYš[™Y
ÓPTÓÐUÐ•ST
HYš[™Y
S’TÓÕ“ÔPÊHYš[™Y
URS
BˆÚYˆYš[™Y
S‘ÑS•
H	‰ˆYš[™Y
“Ô“PS
H˜\žZ[™È•“Œˆ™XÌÙŽÝ˜\žZ[™È•“ŒNˆ™XÌÙŽÝ˜\žZ[™È•“ŒŽˆ™XÌÙŽÂˆÙ[™Y‚ˆÚY™YˆÐ’‘PÕÔPÑWÓ“Ô“PSPT[šY›Ü›H›Ü›X[X]š^ˆX]ŽÙ›ˆÓ›Ü›X[X]š^
NˆX]ŠKO›X]‚žÝ˜\ˆL[VÌVÌNÝ˜\ˆLO[VÌVÌWNÝ˜\ˆL[VÌVÌ—NÝ˜\ˆLÏ[VÌVÌ×NÝ˜\ˆLL[VÌWVÌNÝ˜\ˆLLO[VÌWVÌWNÝ˜\ˆLL[VÌWVÌ—NÝ˜\ˆLLÏ[VÌWVÌ×NÝ˜\ˆLŒ[VÌ—VÌNÈ˜\ˆLŒO[VÌ—VÌWNÝ˜\ˆLŒ[VÌ—VÌ—NÝ˜\ˆLŒÏ[VÌ—VÌ×NÝ˜\ˆLÌ[VÌ×VÌNÈ˜\ˆLÌO[VÌ×VÌWNÝ˜\ˆLÌ[VÌ×VÌ—NÝ˜\ˆLÌÏ[VÌ×VÌ×NÝ˜\ˆŒXL
˜LLKXLJ˜LLÝ˜\ˆŒOXL
˜LL‹XLŠ˜LLÝ˜\ˆŒXL
˜LLËXLÊ˜LLÝ˜\ˆŒÏXLJ˜LL‹XLŠ˜LLNÝ˜\ˆŒXLJ˜LLËXLÊ˜LLNÝ˜\ˆŒOXLŠ˜LLËXLÊ˜LLŽÝ˜\ˆŒXLŒ
˜LÌKXLŒJ˜LÌÝ˜\ˆŒÏXLŒ
˜LÌ‹XLŒŠ˜LÌÝ˜\ˆŒXLŒ
˜LÌËXLŒÊ˜LÌÝ˜\ˆŒOXLŒJ˜LÌ‹XLŒŠ˜LÌNÝ˜\ˆŒLXLŒJ˜LÌËXLŒÊ˜LÌNÝ˜\ˆŒLOXLŒŠ˜LÌËXLŒÊ˜LÌŽÝ˜\ˆ]XŒ
˜ŒLKXŒJ˜ŒL
ØŒŠ˜ŒJØŒÊ˜ŒXŒ
˜ŒÊØŒJ˜ŒŽÝ˜\ˆZO[X]ŒÌŠŠLLJ˜ŒLKXLLŠ˜ŒL
ØLLÊ˜ŒJKÙ]ŠLŠ˜ŒLXLJ˜ŒLKXLÊ˜ŒJKÙ]ŠLÌJ˜ŒKXLÌŠ˜Œ
ØLÌÊ˜ŒÊKÙ]ŠLŒŠ˜ŒXLŒJ˜ŒKXLŒÊ˜ŒÊKÙ]ŠLLŠ˜ŒXLL
˜ŒLKXLLÊ˜ŒÊKÙ]ŠL
˜ŒLKXLŠ˜Œ
ØLÊ˜ŒÊKÙ]ŠLÌŠ˜Œ‹XLÌ
˜ŒKXLÌÊ˜ŒJKÙ]ŠLŒ
˜ŒKXLŒŠ˜ŒŠØLŒÊ˜ŒJKÙ]ŠLL
˜ŒLXLLJ˜Œ
ØLLÊ˜ŒŠKÙ]ŠLJ˜ŒXL
˜ŒLXLÊ˜ŒŠKÙ]ŠLÌ
˜ŒXLÌJ˜ŒŠØLÌÊ˜Œ
KÙ]ŠLŒJ˜Œ‹XLŒ
˜ŒXLŒÊ˜Œ
KÙ]ŠLLJ˜ŒËXLL
˜ŒKXLLŠ˜ŒŠKÙ]ŠL
˜ŒKXLJ˜ŒÊØLŠ˜ŒŠKÙ]ŠLÌJ˜ŒKXLÌ
˜ŒËXLÌŠ˜Œ
KÙ]ŠLŒ
˜ŒËXLŒJ˜ŒJØLŒŠ˜Œ
KÙ]
NÜ™]\›ˆX]ŒÌŠZVÌVÌKZVÌWVÌKZVÌ—VÌKZVÌ×VÌK›ZVÌVÌWKZVÌWVÌWKZVÌ—VÌWKZVÌ×VÌWK›ZVÌVÌ—KZVÌWVÌ—KZVÌ—VÌ—KZVÌ×VÌ—K›ZVÌVÌ×KZVÌWVÌ×KZVÌ—VÌ×KZVÌ×VÌ×JNßBˆÙ[™Y‚™›ˆ\\˜“›Ü›X[˜\ÙJÛÝ[™Ù[œ˜[YNˆX]ÞÙ‹›Ü›X[ˆ™XÌÙ‹ØØ[NˆŒÌŠKO™XÌÙ‚žÝ˜\ˆÝ]][›Ü›X[ÂˆÚY™Yˆ“Ô“PSTÐÐSB›Ý]][›Ü›X[^™JÝ]]
ˆ™XÌÙŠØØ[KØØ[KKŒ
JNÂˆÙ[™Y‚œ™]\›ˆ›Ü›X[^™JÛÝ[™Ù[œ˜[YJ›Ý]]
NßB™›ˆ\\˜“›Ü›X[
ÛÝ[™Ù[œ˜[YNˆX]ÞÙ‹^\™TØ[\Nˆ™XÌÙ‹ØØ[NˆŒÌŠKO™XÌÙ‚žÜ™]\›ˆ\\˜“›Ü›X[˜\ÙJÛÝ[™Ù[œ˜[YK^\™TØ[\JŒ‹ŒLKŒØØ[JNßB™›ˆÛÝ[™Ù[Ùœ˜[YJ›Ü›X[ˆ™XÌÙ‹ˆ™XÌÙ‹]Žˆ™XÌ™‹[™Ù[ÜXÙT\˜[\Îˆ™XÌ™ŠKO›X]ÞÙ‚žÝ˜\ˆNˆ™XÌÙY

NÝ˜\ˆŽˆ™XÌÙYJ
NÝ˜\ˆ]ŒNˆ™XÌ™Y
]ŠNÝ˜\ˆ]ŒŽˆ™XÌ™YJ]ŠNÝ˜\ˆœ\œˆ™XÌÙXÜ›ÜÜÊ‹›Ü›X[
NÝ˜\ˆ\\œˆ™XÌÙXÜ›ÜÜÊ›Ü›X[JNÝ˜\ˆ[™Ù[ˆ™XÌÙYœ\œ
™]ŒKž
Ù\\œ
™]Œ‹žÝ˜\ˆš][™Ù[ˆ™XÌÙYœ\œ
™]ŒKžJÙ\\œ
™]Œ‹žNÝ[™Ù[
][™Ù[ÜXÙT\˜[\ËžØš][™Ù[
][™Ù[ÜXÙT\˜[\ËžNÝ˜\ˆ]ˆŒÌ[X^
Ý
[™Ù[[™Ù[
KÝ
š][™Ù[š][™Ù[
JNÝ˜\ˆ[›X^ˆŒÌ\Ù[XÝ
[™\œÙTÜ\
]
KŒ]OLŒ
NÜ™]\›ˆX]ÞÙŠ[™Ù[
š[›X^š][™Ù[
š[›X^›Ü›X[
NßBˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÜY×_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÜY×O]ŒJNØÛÛœÝ	O^Û˜[YNœYËÚY\ŽŒ_K™ÏH˜[\œ˜YÛY[[˜Ý[ÛœÈ‹OXÚYˆYš[™Y
•ST
BˆÚ[˜ÛYOØ[\\‘œ˜YÛY[XÛ\˜][ÛŠÑQ’S‘SSQWË•STÕT–RS‘ÓSQWË[\ÔÐSTT“SQWË[\
BˆÙ[™Y‚ˆÚYˆYš[™Y
URS
BˆÚ[˜ÛYOØ[\\‘œ˜YÛY[XÛ\˜][ÛŠÑQ’S‘SSQWËURSÕT–RS‘ÓSQWË]Z[ÔÐSTT“SQWË]Z[
BˆÙ[™Y‚ˆÚYˆYš[™Y
•ST
H	‰ˆYš[™Y
TSV
B˜ÛÛœÝZ[”Ø[\\ÎˆŒÌMŽØÛÛœÝX^Ø[\\ÎˆŒÌLMKŽØÛÛœÝSX^Ø[\\ÎˆLÌLMNÙ›ˆ\˜[^ØØÛ\Ú[ÛŠ•šY]Ñ\ÛÕˆ™XÌÙ‹“›Ü›X[ÛÕˆ™XÌÙ‹^ÛÛÜ™ˆ™XÌ™‹\˜[^ØØ[NˆŒÌŠKO™XÌ™ˆÝ˜\ˆ\˜[^[Z]ˆŒÌ[[™Ý
•šY]Ñ\ÛÕžJKÝ•šY]Ñ\ÛÕžŽÜ\˜[^[Z]
\\˜[^ØØ[NÝ˜\ˆ“Ù™œÙ]\Žˆ™XÌ™[›Ü›X[^™J•šY]Ñ\ÛÕžJNÝ˜\ˆ“X^Ù™œÙ]ˆ™XÌ™]“Ù™œÙ]\Šœ\˜[^[Z]Ý˜\ˆ[TØ[\\ÎˆŒÌ[X^Ø[\\ÊÊÝ
•šY]Ñ\ÛÕ“›Ü›X[ÛÕ
JŠZ[”Ø[\\Ë[X^Ø[\\ÊJNÝ˜\ˆÝ\Ú^™NˆŒÌLKŒÛ[TØ[\\ÎÝ˜\ˆÝ\œ”˜^RZYÚˆŒÌLKŒÝ˜\ˆÝ\œ“Ù™œÙ]ˆ™XÌ™H™XÌ™Š
NÝ˜\ˆ“\ÝÙ™œÙ]ˆ™XÌ™H™XÌ™Š
NÝ˜\ˆ\ÝØ[\YZYÚˆŒÌLKŒÝ˜\ˆÝ\œ”Ø[\YZYÚˆŒÌLKŒÝ˜\ˆÙY\ÛÜšÚ[™Îˆ›ÛÛ]YNÙ›Üˆ
˜\ˆNˆLÌLÈOSX^Ø[\\ÎÈJÊÊBžØÝ\œ”Ø[\YZYÚ]^\™TØ[\J[\Ø[\\‹[\Ø[\\”Ø[\\‹^ÛÛÜ™
ÝÝ\œ“Ù™œÙ]
KÎÚYˆ
ZÙY\ÛÜšÚ[™ÊBžßB™[ÙHYˆ
Ý\œ”Ø[\YZYÚ˜Ý\œ”˜^RZYÚ
BžÝ˜\ˆ[LNˆŒÌXÝ\œ”Ø[\YZYÚXÝ\œ”˜^RZYÚÝ˜\ˆ[LŽˆŒÌJÝ\œ”˜^RZYÚ
ÜÝ\Ú^™JK[\ÝØ[\YZYÚÝ˜\ˆ˜][ÎˆŒÌY[LKÊ[LJÙ[LŠNÝÝ\œ“Ù™œÙ]J˜][ÊJˆ“\ÝÙ™œÙ]
ÊKŒ\˜][ÊJÝ\œ“Ù™œÙ]ÚÙY\ÛÜšÚ[™ÏY˜[ÙNßB™[ÙBžØÝ\œ”˜^RZYÚO\Ý\Ú^™NÝ“\ÝÙ™œÙ]]Ý\œ“Ù™œÙ]ÂˆÚY™YˆTSVÔ’ÂÝ\œ“Ù™œÙ]O\Ý\Ú^™J“X^Ù™œÙ]ÂˆÙ[ÙBÝ\œ“Ù™œÙ]
Ï\Ý\Ú^™J“X^Ù™œÙ]ÂˆÙ[™Y‚›\ÝØ[\YZYÚXÝ\œ”Ø[\YZYÚß_Bœ™]\›ˆÝ\œ“Ù™œÙ]ßB™›ˆ\˜[^Ù™œÙ]
šY]Ñ\Žˆ™XÌÙ‹ZYÚØØ[NˆŒÌŠKO™XÌ™‚žÝ˜\ˆZYÚˆŒÌ]^\™TØ[\J[\Ø[\\‹[\Ø[\\”Ø[\\‹œ˜YÛY[[œ]Ë[\UŠKÎÝ˜\ˆ^ÛÛÜ™Ù™œÙ]ˆ™XÌ™ZZYÚØØ[JšY]Ñ\‹žJšZYÚÂˆÚY™YˆTSVÔ’Âœ™]\›ˆ^ÛÛÜ™Ù™œÙ]ÂˆÙ[ÙBœ™]\›ˆ]^ÛÛÜ™Ù™œÙ]ÂˆÙ[™Y‚ŸBˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÚ™×_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÚ™×O^JNØÛÛœÝ•O^Û˜[YNš™ËÚY\Žž_KÙÏH˜[\œ˜YÛY[‹ÌOX˜\ˆ]“Ù™œÙ]ˆ™XÌ™H™XÌ™ŠŒŒ
NÂˆÚYˆYš[™Y
•ST
HYš[™Y
TSV
HYš[™Y
URS
BˆÚY™Yˆ“Ô“PSTÐÐSB˜\ˆ›Ü›X[ØØ[NˆŒÌLKŒÂˆÙ[YˆYš[™Y
•ST
B˜\ˆ›Ü›X[ØØ[NˆŒÌ][šY›Ü›\Ë[\[™›ÜËžNÂˆÙ[ÙB˜\ˆ›Ü›X[ØØ[NˆŒÌLKŒÂˆÙ[™Y‚ˆÚYˆYš[™Y
S‘ÑS•
H	‰ˆYš[™Y
“Ô“PS
B˜\ˆ“ŽˆX]ÞÙ[X]ÞÏŒÌŠ[œ]•“Œ[œ]•“ŒK[œ]•“ŒŠNÈˆÙ[YˆYš[™Y
•ST
B˜\ˆ“•UŽˆ™XÌ™\Ù[XÝ
Yœ˜YÛY[[œ]Ë[\U‹œ˜YÛY[[œ]Ë[\U‹œ˜YÛY[[œ]Ë™œ›Û˜XÚ[™ÊNÝ˜\ˆ“ŽˆX]ÞÙXÛÝ[™Ù[Ùœ˜[YJ›Ü›X[Ê››Ü›X[ØØ[K[œ]”ÜÚ][Û•Ë“•U‹[šY›Ü›\Ë•[™Ù[ÜXÙT\˜[\ÊNÂˆÙ[ÙB˜\ˆ“•UŽˆ™XÌ™\Ù[XÝ
Yœ˜YÛY[[œ]Ë‘]Z[U‹œ˜YÛY[[œ]Ë‘]Z[U‹œ˜YÛY[[œ]Ë™œ›Û˜XÚ[™ÊNÝ˜\ˆ“ŽˆX]ÞÙXÛÝ[™Ù[Ùœ˜[YJ›Ü›X[Ê››Ü›X[ØØ[K[œ]”ÜÚ][Û•Ë“•U‹™XÌ™ŠK‹KŠJNÂˆÙ[™Y‚ˆÙ[YˆYš[™Y
S’TÓÕ“ÔPÊBˆÚYˆYš[™Y
S‘ÑS•
H	‰ˆYš[™Y
“Ô“PS
B˜\ˆ“ŽˆX]ÞÙ[X]ÞÏŒÌŠ[œ]•“Œ[œ]•“ŒK[œ]•“ŒŠNÈˆÙ[ÙB˜\ˆ“•UŽˆ™XÌ™\Ù[XÝ
Yœ˜YÛY[[œ]Ë“XZ[•UŒKœ˜YÛY[[œ]Ë“XZ[•UŒKœ˜YÛY[[œ]Ë™œ›Û˜XÚ[™ÊNÝ˜\ˆ“ŽˆX]ÞÙXÛÝ[™Ù[Ùœ˜[YJ›Ü›X[Ë[œ]”ÜÚ][Û•Ë“•U‹™XÌ™ŠK‹KŠJNÂˆÙ[™Y‚ˆÙ[™Y‚ˆÚY™YˆTSV˜\ˆ[•“ŽˆX]ÞÙ]˜[œÜÜÙSX]Ê“ŠNÂˆÚY™YˆTSVÐÐÓTÒSÓ‚]“Ù™œÙ]\\˜[^ØØÛ\Ú[ÛŠ[•“Š‹]šY]Ñ\™XÝ[Û•Ë[•“Š››Ü›X[Ëœ˜YÛY[[œ]Ë[\U‹[šY›Ü›\Ë[\[™›ÜËžŠNÂˆÙ[ÙB]“Ù™œÙ]\\˜[^Ù™œÙ]
[•“ŠšY]Ñ\™XÝ[Û•Ë[šY›Ü›\Ë[\[™›ÜËžŠNÂˆÙ[™Y‚ˆÙ[™Y‚ˆÚY™YˆURS˜\ˆ]Z[ÛÛÜŽˆ™XÍ]^\™TØ[\J]Z[Ø[\\‹]Z[Ø[\\”Ø[\\‹œ˜YÛY[[œ]Ë‘]Z[UŠÝ]“Ù™œÙ]
NÝ˜\ˆ]Z[›Ü›X[‘Îˆ™XÌ™Y]Z[ÛÛÜ‹ÞJŒ‹ŒLKŒÝ˜\ˆ]Z[›Ü›X[ŽˆŒÌ\Ü\
K‹\Ø]\˜]JÝ
]Z[›Ü›X[‘Ë]Z[›Ü›X[‘ÊJJNÝ˜\ˆ]Z[›Ü›X[ˆ™XÌÙH™XÌÙŠ]Z[›Ü›X[‘Ë]Z[›Ü›X[ŠNÂˆÙ[™Y‚ˆÚY™Yˆ•STˆÚY™YˆÐ’‘PÕÔPÑWÓ“Ô“PSPTˆÙYš[™HÕTÕÓWÑ”QÓQS•Ð•STÑ”QÓQS•››Ü›X[Ï[›Ü›X[^™JV‘
[\Ø[\\‹[\Ø[\\”Ø[\\‹œ˜YÛY[[œ]Ë[\UŠKž^ˆ
Œ‹ŒLKŒ
NÛ›Ü›X[Ï[›Ü›X[^™JX]ÞÙŠ[šY›Ü›\Ë››Ü›X[X]š^ÌKž^‹[šY›Ü›\Ë››Ü›X[X]š^ÌWKž^‹[šY›Ü›\Ë››Ü›X[X]š^Ì—Kž^ŠJ››Ü›X[ÊNÂˆÙ[YˆYYš[™Y
URS
B››Ü›X[Ï\\\˜“›Ü›X[
“‹V‘
[\Ø[\\‹[\Ø[\\”Ø[\\‹œ˜YÛY[[œ]Ë[\UŠÝ]“Ù™œÙ]
Kž^‹[šY›Ü›\Ë[\[™›ÜËžJNÂˆÙ[ÙB˜\ˆ[\›Ü›X[ˆ™XÌÙUV‘
[\Ø[\\‹[\Ø[\\”Ø[\\‹œ˜YÛY[[œ]Ë[\UŠÝ]“Ù™œÙ]
Kž^ŠŒ‹ŒLKŒÂˆÚYˆURSÓ“Ô“PS“S‘QUÑOL™]Z[›Ü›X[]™XÌÙŠ]Z[›Ü›X[žJ[šY›Ü›\Ë‘]Z[[™›ÜËž‹]Z[›Ü›X[žŠNÝ˜\ˆ›[™Y›Ü›X[ˆ™XÌÙ[›Ü›X[^™J™XÌÙŠ[\›Ü›X[žJÙ]Z[›Ü›X[žK[\›Ü›X[žŠ™]Z[›Ü›X[žŠJNÂˆÙ[YˆURSÓ“Ô“PS“S‘QUÑOLH™]Z[›Ü›X[]™XÌÙŠ]Z[›Ü›X[žJ[šY›Ü›\Ë‘]Z[[™›ÜËž‹]Z[›Ü›X[žŠNØ[\›Ü›X[
ÏH™XÌÙŠŒŒKŒ
NÙ]Z[›Ü›X[
H™XÌÙŠLKŒLKŒKŒ
NÝ˜\ˆ›[™Y›Ü›X[ˆ™XÌÙX[\›Ü›X[
™Ý
[\›Ü›X[]Z[›Ü›X[
KØ[\›Ü›X[ž‹Y]Z[›Ü›X[ÂˆÙ[™Y‚››Ü›X[Ï\\\˜“›Ü›X[˜\ÙJ“‹›[™Y›Ü›X[[šY›Ü›\Ë[\[™›ÜËžJNÂˆÙ[™Y‚ˆÙ[YˆYš[™Y
URS
B™]Z[›Ü›X[]™XÌÙŠ]Z[›Ü›X[žJ[šY›Ü›\Ë‘]Z[[™›ÜËž‹]Z[›Ü›X[žŠNÛ›Ü›X[Ï\\\˜“›Ü›X[˜\ÙJ“‹]Z[›Ü›X[[šY›Ü›\Ë‘]Z[[™›ÜËžŠNÂˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÒÙ×_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÒÙ×OTÌJNØÛÛœÝP^Û˜[YN’ÙËÚY\Ž”Ì_K™ÏH™XØ[œ˜YÛY[‹OXÚY™YˆPÐS˜\ˆXØ[[\ÛÛÜYXØ[ÛÛÜ‹œ™ØŽÝ˜\ˆXØ[[\[OYXØ[ÛÛÜ‹˜NÂˆÚY™YˆÐSSPQPÐS™XØ[[\ÛÛÜ]Ó[™X\”ÜXÙU™XÌÊXØ[ÛÛÜ‹œ™ØŠNÂˆÙ[™Y‚ˆÚY™YˆPÐSÔÓSÓÕSB™XØ[[\[OYXØ[ÛÛÜ‹˜J™XØ[ÛÛÜ‹˜NÂˆÙ[™Y‚œÝ\™˜XÙP[™YÏ[Z^
Ý\™˜XÙP[™YËœ™Ø‹XØ[[\ÛÛÜ‹XØ[[\[JNÂˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÖ™×_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÖ™×OUJNØÛÛœÝ^Û˜[YN–™ËÚY\Ž•_KYÏH™\™T\ÜÈ‹LOXÚY™YˆT‘TTÔÂˆÚYˆYYš[™Y
‘TTÔÊH	‰ˆYYš[™Y
Ô‘T—ÒS‘TS‘S•ÕS”ÔT‘SÖJB™œ˜YÛY[Ý]]Ë˜ÛÛÜH™XÍŠ‹‹‹KŒ
NÂˆÙ[™Y‚ˆÚY›™YˆT‘TTÔ×ÔÒÒTÑPT“WÔ‘UT“‚œ™]\›ˆœ˜YÛY[Ý]]ÎÂˆÙ[™Y‚ˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÔY×_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÔY×OQLJNØÛÛœÝP^Û˜[YN”YËÚY\Ž‘L_K	ÏH›YÚœ˜YÛY[‹LOXÚY™YˆQÒÖBˆÚYˆYš[™Y
ÒQÕÓÓ“JHYš[™Y
QÒPT
H	‰ˆYš[™Y
QÒPTVÓQQÖJH	‰ˆYš[™Y
QÒPT“ÔÔPÕSTžÖJBˆÙ[ÙB˜\ˆY™\Ù^ÖNˆ™XÍ[YÚÖK“YÚY™\ÙNÂˆÙYš[™HÕTÕÓWÓQÒÖWÐÓÓÔˆˆÚYˆYš[™Y
”ŠH	‰ˆYš[™Y
ÓTÕQÒÖJBžÛ]ÛXÙR[™^[Z[ŠÙ]Û\Ý\™YÛXÙR[™^
YÚÖK”ÛXÙQ]Kœ˜YÛY[[œ]Ë•šY]Ñ\
KÓTÕQÒÔÓPÑTËLJNÚ[™›ÏXÛÛ\]PÛ\Ý\™YYÚ[™ÞÖJ›YÚ]U^\™^ÖK›YÚÖK“YÚ]K™XÌJYÚÖK”ÛXÙT˜[™Ù\ÖÜÛXÙR[™^KžJKšY]Ñ\™XÝ[Û•Ë››Ü›X[Ë™œ˜YÛY[[œ]Ë”ÜÚ][Û•ËœÝ\™˜XÙP[™YËœ™Y›XÝ]š]SÝ]ˆÚY™YˆT’QTÐÑSÑBš\šY\ØÙ[˜ÙR[[œÚ]KˆÙ[™Y‚ˆÚY™YˆÔ×ÕS”ÓPÑSÖBœÝX”Ý\™˜XÙSÝ]ˆÙ[™Y‚ˆÚY™YˆÔPÕST•T“BPT›ÝYÚ™\ÜÑ˜XÝÜœËžˆÙ[™Y‚ˆÚY™YˆS’TÓÕ“ÔPÂ˜[š\ÛÝ›ÜXÓÝ]ˆÙ[™Y‚ˆÚY™YˆÒQS‚œÚY[“Ý]ˆÙ[™Y‚ˆÚY™YˆÓPTÓÐU˜ÛX\˜ÛØ]Ý]ˆÙ[™Y‚ŠNßBˆÙ[YˆYš[™Y
”ŠBˆÚY™YˆÔÕQÒÖBœ™R[™›ÏXÛÛ\]TÚ[[™ÜÝ™SYÚ[™Ò[™›ÊYÚÖK“YÚ]KšY]Ñ\™XÝ[Û•Ë›Ü›X[Ëœ˜YÛY[[œ]Ë”ÜÚ][Û•ÊNÂˆÙ[YˆYš[™Y
ÒS•QÒÖJBœ™R[™›ÏXÛÛ\]TÚ[[™ÜÝ™SYÚ[™Ò[™›ÊYÚÖK“YÚ]KšY]Ñ\™XÝ[Û•Ë›Ü›X[Ëœ˜YÛY[[œ]Ë”ÜÚ][Û•ÊNÂˆÙ[YˆYš[™Y
SRSQÒÖJBœ™R[™›ÏXÛÛ\]R[Z\Ü\šXÔ™SYÚ[™Ò[™›ÊYÚÖK“YÚ]KšY]Ñ\™XÝ[Û•Ë›Ü›X[ÊNÂˆÙ[YˆYš[™Y
T“QÒÖJBœ™R[™›ÏXÛÛ\]Q\™XÝ[Û˜[™SYÚ[™Ò[™›ÊYÚÖK“YÚ]KšY]Ñ\™XÝ[Û•Ë›Ü›X[ÊNÂˆÙ[YˆYš[™Y
T‘PSQÒÖJH	‰ˆYš[™Y
T‘PSQÒTÑQ
H	‰ˆYš[™Y
T‘PSQÒÕTÔ•Q
BˆÚYˆYš[™Y
‘PÕT‘PSQÒSRTÔÒSÓ•VT‘^ÖJBœ™R[™›ÏXÛÛ\]P\™XT™SYÚ[™Ò[™›ÕÚ]^\™J\™XSYÚÓÌTØ[\\‹\™XSYÚÓÌTØ[\\”Ø[\\‹\™XSYÚÓÌ”Ø[\\‹\™XSYÚÓÌ”Ø[\\”Ø[\\‹™XÝ\™XSYÚ[Z\ÜÚ[Û•^\™^ÖK™XÝ\™XSYÚ[Z\ÜÚ[Û•^\™^ÖTØ[\\‹šY]Ñ\™XÝ[Û•Ë›Ü›X[Ëœ˜YÛY[[œ]Ë”ÜÚ][Û•ËYÚÖK“YÚ]Kž^‹YÚÖK“YÚÚYž^‹YÚÖK“YÚZYÚž^‹›ÝYÚ™\ÜÊNÂˆÙ[ÙBœ™R[™›ÏXÛÛ\]P\™XT™SYÚ[™Ò[™›Ê\™XSYÚÓÌTØ[\\‹\™XSYÚÓÌTØ[\\”Ø[\\‹\™XSYÚÓÌ”Ø[\\‹\™XSYÚÓÌ”Ø[\\”Ø[\\‹šY]Ñ\™XÝ[Û•Ë›Ü›X[Ëœ˜YÛY[[œ]Ë”ÜÚ][Û•ËYÚÖK“YÚ]Kž^‹YÚÖK“YÚÚYž^‹YÚÖK“YÚZYÚž^‹›ÝYÚ™\ÜÊNÂˆÙ[™Y‚ˆÙ[™Y‚œ™R[™›Ë“™ÝS™ÝŽÂˆÚY™YˆÔÕQÒÖBˆÚY™YˆQÒÑSÑ‘—ÑÓžÖBœ™R[™›Ë˜][X][ÛXÛÛ\]Q\Ý[˜ÙSYÚ˜[Ù™—ÑÓŠ™R[™›Ë›YÚ\Ý[˜ÙTÜ]X\™YYÚÖK“YÚ˜[Ù™‹žJNÂˆÚY™YˆQTÓQÒVT‘^ÖBœ™R[™›Ë˜][X][ÛŠXÛÛ\]Q\™XÝ[Û˜[YÚ˜[Ù™—ÒQTÊYÚÖK“YÚ\™XÝ[Û‹ž^‹™R[™›Ë“Y\ÓYÚ^\™^ÖKY\ÓYÚ^\™^ÖTØ[\\ŠNÂˆÙ[ÙBœ™R[™›Ë˜][X][ÛŠXÛÛ\]Q\™XÝ[Û˜[YÚ˜[Ù™—ÑÓŠYÚÖK“YÚ\™XÝ[Û‹ž^‹™R[™›Ë“YÚÖK“YÚ˜[Ù™‹ž‹YÚÖK“YÚ˜[Ù™‹ÊNÂˆÙ[™Y‚ˆÙ[YˆYš[™Y
QÒÑSÑ‘—ÔTÒPÐSÖJBœ™R[™›Ë˜][X][ÛXÛÛ\]Q\Ý[˜ÙSYÚ˜[Ù™—Ô\ÚXØ[
™R[™›Ë›YÚ\Ý[˜ÙTÜ]X\™Y
NÂˆÚY™YˆQTÓQÒVT‘^ÖBœ™R[™›Ë˜][X][ÛŠXÛÛ\]Q\™XÝ[Û˜[YÚ˜[Ù™—ÒQTÊYÚÖK“YÚ\™XÝ[Û‹ž^‹™R[™›Ë“Y\ÓYÚ^\™^ÖKY\ÓYÚ^\™^ÖTØ[\\ŠNÂˆÙ[ÙBœ™R[™›Ë˜][X][ÛŠXÛÛ\]Q\™XÝ[Û˜[YÚ˜[Ù™—Ô\ÚXØ[
YÚÖK“YÚ\™XÝ[Û‹ž^‹™R[™›Ë“YÚÖK“YÚ\™XÝ[Û‹ÊNÂˆÙ[™Y‚ˆÙ[YˆYš[™Y
QÒÑSÑ‘—ÔÕS‘T‘ÖJBœ™R[™›Ë˜][X][ÛXÛÛ\]Q\Ý[˜ÙSYÚ˜[Ù™—ÔÝ[™\™
™R[™›Ë›YÚÙ™œÙ]YÚÖK“YÚ˜[Ù™‹ž
NÂˆÚY™YˆQTÓQÒVT‘^ÖBœ™R[™›Ë˜][X][ÛŠXÛÛ\]Q\™XÝ[Û˜[YÚ˜[Ù™—ÒQTÊYÚÖK“YÚ\™XÝ[Û‹ž^‹™R[™›Ë“Y\ÓYÚ^\™^ÖKY\ÓYÚ^\™^ÖTØ[\\ŠNÂˆÙ[ÙBœ™R[™›Ë˜][X][ÛŠXÛÛ\]Q\™XÝ[Û˜[YÚ˜[Ù™—ÔÝ[™\™
YÚÖK“YÚ\™XÝ[Û‹ž^‹™R[™›Ë“YÚÖK“YÚ\™XÝ[Û‹ËYÚÖK“YÚ]KÊNÂˆÙ[™Y‚ˆÙ[ÙBœ™R[™›Ë˜][X][ÛXÛÛ\]Q\Ý[˜ÙSYÚ˜[Ù™Š™R[™›Ë›YÚÙ™œÙ]™R[™›Ë›YÚ\Ý[˜ÙTÜ]X\™YYÚÖK“YÚ˜[Ù™‹žYÚÖK“YÚ˜[Ù™‹žJNÂˆÚY™YˆQTÓQÒVT‘^ÖBœ™R[™›Ë˜][X][ÛŠXÛÛ\]Q\™XÝ[Û˜[YÚ˜[Ù™—ÒQTÊYÚÖK“YÚ\™XÝ[Û‹ž^‹™R[™›Ë“Y\ÓYÚ^\™^ÖKY\ÓYÚ^\™^ÖTØ[\\ŠNÂˆÙ[ÙBœ™R[™›Ë˜][X][ÛŠXÛÛ\]Q\™XÝ[Û˜[YÚ˜[Ù™ŠYÚÖK“YÚ\™XÝ[Û‹ž^‹™R[™›Ë“YÚÖK“YÚ\™XÝ[Û‹ËYÚÖK“YÚ]KËYÚÖK“YÚ˜[Ù™‹ž‹YÚÖK“YÚ˜[Ù™‹ÊNÂˆÙ[™Y‚ˆÙ[™Y‚ˆÙ[YˆYš[™Y
ÒS•QÒÖJBˆÚY™YˆQÒÑSÑ‘—ÑÓžÖBœ™R[™›Ë˜][X][ÛXÛÛ\]Q\Ý[˜ÙSYÚ˜[Ù™—ÑÓŠ™R[™›Ë›YÚ\Ý[˜ÙTÜ]X\™YYÚÖK“YÚ˜[Ù™‹žJNÂˆÙ[YˆYš[™Y
QÒÑSÑ‘—ÔTÒPÐSÖJBœ™R[™›Ë˜][X][ÛXÛÛ\]Q\Ý[˜ÙSYÚ˜[Ù™—Ô\ÚXØ[
™R[™›Ë›YÚ\Ý[˜ÙTÜ]X\™Y
NÂˆÙ[YˆYš[™Y
QÒÑSÑ‘—ÔÕS‘T‘ÖJBœ™R[™›Ë˜][X][ÛXÛÛ\]Q\Ý[˜ÙSYÚ˜[Ù™—ÔÝ[™\™
™R[™›Ë›YÚÙ™œÙ]YÚÖK“YÚ˜[Ù™‹ž
NÂˆÙ[ÙBœ™R[™›Ë˜][X][ÛXÛÛ\]Q\Ý[˜ÙSYÚ˜[Ù™Š™R[™›Ë›YÚÙ™œÙ]™R[™›Ë›YÚ\Ý[˜ÙTÜ]X\™YYÚÖK“YÚ˜[Ù™‹žYÚÖK“YÚ˜[Ù™‹žJNÂˆÙ[™Y‚ˆÙ[ÙBœ™R[™›Ë˜][X][ÛLKŒÂˆÙ[™Y‚ˆÚYˆYš[™Y
SRSQÒÖJBœ™R[™›Ëœ›ÝYÚ™\ÜÏ\›ÝYÚ™\ÜÎÂˆÙ[YˆYš[™Y
T‘PSQÒÖJH	‰ˆYš[™Y
T‘PSQÒTÑQ
H	‰ˆYš[™Y
T‘PSQÒÕTÔ•Q
Bœ™R[™›Ëœ›ÝYÚ™\ÜÏ\›ÝYÚ™\ÜÎÂˆÙ[ÙBœ™R[™›Ëœ›ÝYÚ™\ÜÏXY\Ý›ÝYÚ™\ÜÑœ›ÛSYÚ›Ü\Y\Ê›ÝYÚ™\ÜËYÚÖK“YÚÜXÝ[\‹˜K™R[™›Ë›YÚ\Ý[˜ÙJNÂˆÙ[™Y‚œ™R[™›Ë™Y™\ÙT›ÝYÚ™\ÜÏYY™\ÙT›ÝYÚ™\ÜÎÜ™R[™›ËœÝ\™˜XÙP[™YÏ\Ý\™˜XÙP[™YÎÂˆÚY™YˆT’QTÐÑSÑBœ™R[™›Ëš\šY\ØÙ[˜ÙR[[œÚ]OZ\šY\ØÙ[˜ÙR[[œÚ]NÂˆÙ[™Y‚ˆÚY™YˆÔ×ÕS”ÓPÑSÖBš[™›Ë™Y™\ÙU˜[œÛZ\ÜÚ[Û]™XÌÙŠŒ
NÂˆÙ[™Y‚ˆÚY™YˆSRSQÒÖBš[™›Ë™Y™\ÙOXÛÛ\]R[Z\Ü\šXÑY™\ÙSYÚ[™Ê™R[™›ËY™\Ù^ÖKœ™Ø‹YÚÖK“YÚÜ›Ý[™
NÂˆÙ[YˆYš[™Y
T‘PSQÒÖJH	‰ˆYš[™Y
T‘PSQÒTÑQ
H	‰ˆYš[™Y
T‘PSQÒÕTÔ•Q
Bš[™›Ë™Y™\ÙOXÛÛ\]P\™XQY™\ÙSYÚ[™Ê™R[™›ËY™\Ù^ÖKœ™ØŠNÂˆÙ[YˆYš[™Y
Ô×ÕS”ÓPÑSÖJBˆÚY›™YˆÔ×ÕS”ÓPÑSÖWÓQÐPÖBš[™›Ë™Y™\ÙOXÛÛ\]QY™\ÙSYÚ[™Ê™R[™›ËY™\Ù^ÖKœ™ØŠJŠKŒ\ÝX”Ý\™˜XÙSÝ]˜[œÛXÙ[˜ÞR[[œÚ]JNÚ[™›Ë™Y™\ÙU˜[œÛZ\ÜÚ[ÛXÛÛ\]QY™\ÙU˜[œÛZ]YYÚ[™Ê™R[™›ËY™\Ù^ÖKœ™Ø‹ÝX”Ý\™˜XÙSÝ]˜[œÛZ][˜ÙJNÈˆÙ[ÙBš[™›Ë™Y™\ÙOXÛÛ\]QY™\ÙU˜[œÛZ]YYÚ[™Ê™R[™›ËY™\Ù^ÖKœ™Ø‹ÝX”Ý\™˜XÙSÝ]˜[œÛZ][˜ÙJNÂˆÙ[™Y‚ˆÙ[ÙBš[™›Ë™Y™\ÙOXÛÛ\]QY™\ÙSYÚ[™Ê™R[™›ËY™\Ù^ÖKœ™ØŠNÂˆÙ[™Y‚ˆÚY™YˆÔPÕST•T“BˆÚYˆYš[™Y
T‘PSQÒÖJH	‰ˆYš[™Y
T‘PSQÒTÑQ
H	‰ˆYš[™Y
T‘PSQÒÕTÔ•Q
Bš[™›ËœÜXÝ[\XÛÛ\]P\™XTÜXÝ[\“YÚ[™Ê™R[™›ËYÚÖK“YÚÜXÝ[\‹œ™Ø‹ÛX\˜ÛØ]Ý]œÜXÝ[\‘[š\›Û›Y[Œ™Y›XÝ]š]SÝ]˜ÛÛÜ”™Y›XÝ[˜ÙQŽL
NÂˆÙ[ÙBˆÚYˆ
ÓÓ‘PÕÔ—ÔÔPÕST—ÓSÑSOPÓÓ‘PÕÔ—ÔÔPÕST—ÓSÑSÓÔS””ŠBžÛ]Y][œ™\Û™[ˆ™XÌÙ]™XÌÙŠ™Y›XÝ]š]SÝ]œÜXÝ[\•ÙZYÚ
J™Ù]Ž”ÜXÝ[\Š™R[™›Ë•™ÝÛX\˜ÛØ]Ý]œÜXÝ[\‘[š\›Û›Y[Œ™Y›XÝ]š]SÝ]˜ÛÛÜ”™Y›XÝ[˜ÙQŽL™Y›XÝ]š]SÝ]œ›ÝYÚ™\ÜÊNÛ]Y[XÝšXÑœ™\Û™[ˆ™XÌÙYœ™\Û™[ØÚXÚÑÑÖ™XÌÊ™R[™›Ë•™Ý™Y›XÝ]š]SÝ]™Y[XÝšXÐÛÛÜ‘Œ™Y›XÝ]š]SÝ]˜ÛÛÜ”™Y›XÝ[˜ÙQŽL
NØÛÛÜ™Yœ™\Û™[[Z^
Y[XÝšXÑœ™\Û™[Y][œ™\Û™[™Y›XÝ]š]SÝ]›Y][XÊNßBˆÙ[ÙB˜ÛÛÜ™Yœ™\Û™[Yœ™\Û™[ØÚXÚÑÑÖ™XÌÊ™R[™›Ë•™ÝÛX\˜ÛØ]Ý]œÜXÝ[\‘[š\›Û›Y[Œ™Y›XÝ]š]SÝ]˜ÛÛÜ”™Y›XÝ[˜ÙQŽL
NÂˆÙ[™Y‚ˆÚY›™YˆQÐPÖWÔÔPÕST—ÑS‘T‘ÖWÐÓÓ”ÑT•USÓ‚žÛ]™ÝˆŒÌYÝ
›Ü›X[Ë™R[™›Ë’
NÛ]œ™\Û™[ˆ™XÌÙYœ™\Û™[ØÚXÚÑÑÖ™XÌÊ™Ý™XÌÙŠ™Y›XÝ[˜ÙQŒ
KÜXÝ[\‘[š\›Û›Y[ŽL
NÚ[™›Ë™Y™\ÙJJ™XÌÙŠKŒ
KYœ™\Û™[
NßBˆÙ[™Y‚ˆÚY™YˆS’TÓÕ“ÔPÂš[™›ËœÜXÝ[\XÛÛ\]P[š\ÛÝ›ÜXÔÜXÝ[\“YÚ[™Ê™R[™›ËšY]Ñ\™XÝ[Û•Ë›Ü›X[Ë[š\ÛÝ›ÜXÓÝ]˜[š\ÛÝ›ÜXÕ[™Ù[[š\ÛÝ›ÜXÓÝ]˜[š\ÛÝ›ÜXÐš][™Ù[[š\ÛÝ›ÜXÓÝ]˜[š\ÛÝ›ÜKÛX\˜ÛØ]Ý]œÜXÝ[\‘[š\›Û›Y[ŒÜXÝ[\‘[š\›Û›Y[ŽLPT›ÝYÚ™\ÜÑ˜XÝÜœËžY™\Ù^ÖKœ™ØŠNÂˆÙ[ÙBš[™›ËœÜXÝ[\XÛÛ\]TÜXÝ[\“YÚ[™Ê™R[™›Ë›Ü›X[ËÛX\˜ÛØ]Ý]œÜXÝ[\‘[š\›Û›Y[ŒÛÛÜ™Yœ™\Û™[PT›ÝYÚ™\ÜÑ˜XÝÜœËžY™\Ù^ÖKœ™ØŠNÂˆÙ[™Y‚ˆÙ[™Y‚ˆÙ[™Y‚ˆÚY›™YˆT‘PSQÒÖBˆÚY™YˆÒQS‚ˆÚY™YˆÒQS—ÓS’ÕÒUS‘QÂœ™R[™›Ëœ›ÝYÚ™\ÜÏ\ÚY[“Ý]œÚY[’[[œÚ]NÂˆÙ[ÙBˆÚY™YˆSRSQÒÖBœ™R[™›Ëœ›ÝYÚ™\ÜÏ\ÚY[“Ý]œÚY[”›ÝYÚ™\ÜÎÂˆÙ[ÙBœ™R[™›Ëœ›ÝYÚ™\ÜÏXY\Ý›ÝYÚ™\ÜÑœ›ÛSYÚ›Ü\Y\ÊÚY[“Ý]œÚY[”›ÝYÚ™\ÜËYÚÖK“YÚÜXÝ[\‹˜K™R[™›Ë›YÚ\Ý[˜ÙJNÂˆÙ[™Y‚ˆÙ[™Y‚š[™›ËœÚY[XÛÛ\]TÚY[“YÚ[™Ê™R[™›Ë›Ü›X[ËÚY[“Ý]œÚY[ÛÛÜ‹ÜXÝ[\‘[š\›Û›Y[ŽLPT›ÝYÚ™\ÜÑ˜XÝÜœËžY™\Ù^ÖKœ™ØŠNÂˆÙ[™Y‚ˆÚY™YˆÓPTÓÐUˆÚY™YˆSRSQÒÖBœ™R[™›Ëœ›ÝYÚ™\ÜÏXÛX\˜ÛØ]Ý]˜ÛX\ÛØ]›ÝYÚ™\ÜÎÂˆÙ[ÙBœ™R[™›Ëœ›ÝYÚ™\ÜÏXY\Ý›ÝYÚ™\ÜÑœ›ÛSYÚ›Ü\Y\ÊÛX\˜ÛØ]Ý]˜ÛX\ÛØ]›ÝYÚ™\ÜËYÚÖK“YÚÜXÝ[\‹˜K™R[™›Ë›YÚ\Ý[˜ÙJNÂˆÙ[™Y‚š[™›Ë˜ÛX\ÛØ]XÛÛ\]PÛX\ÛØ]YÚ[™Ê™R[™›ËÛX\˜ÛØ]Ý]˜ÛX\ÛØ]›Ü›X[ËÛX\˜ÛØ]Ý]˜ÛX\ÛØ]PT›ÝYÚ™\ÜÑ˜XÝÜœËžÛX\˜ÛØ]Ý]˜ÛX\ÛØ][[œÚ]KY™\Ù^ÖKœ™ØŠNÂˆÚY™YˆÓPTÓÐUÕS•˜XœÛÜœ[ÛXÛÛ\]PÛX\ÛØ]YÚ[™ÐXœÛÜœ[ÛŠÛX\˜ÛØ]Ý]˜ÛX\ÛØ]™Ý”™Yœ˜XÝ™R[™›Ë“ÛX\˜ÛØ]Ý]˜ÛX\ÛØ]›Ü›X[ËÛX\˜ÛØ]Ý]˜ÛX\ÛØ]ÛÛÜ‹ÛX\˜ÛØ]Ý]˜ÛX\ÛØ]XÚÛ™\ÜËÛX\˜ÛØ]Ý]˜ÛX\ÛØ][[œÚ]JNÚ[™›Ë™Y™\ÙJXXœÛÜœ[ÛŽÂˆÚY™YˆÔ×ÕS”ÓPÑSÖBš[™›Ë™Y™\ÙU˜[œÛZ\ÜÚ[ÛŠXXœÛÜœ[ÛŽÂˆÙ[™Y‚ˆÚY™YˆÔPÕST•T“Bš[™›ËœÜXÝ[\ŠXXœÛÜœ[ÛŽÂˆÙ[™Y‚ˆÙ[™Y‚š[™›Ë™Y™\ÙJZ[™›Ë˜ÛX\ÛØ]ÎÂˆÚY™YˆÔ×ÕS”ÓPÑSÖBš[™›Ë™Y™\ÙU˜[œÛZ\ÜÚ[ÛŠZ[™›Ë˜ÛX\ÛØ]ÎÂˆÙ[™Y‚ˆÚY™YˆÔPÕST•T“Bš[™›ËœÜXÝ[\ŠZ[™›Ë˜ÛX\ÛØ]ÎÂˆÙ[™Y‚ˆÚY™YˆÒQS‚š[™›ËœÚY[ŠZ[™›Ë˜ÛX\ÛØ]ÎÂˆÙ[™Y‚ˆÙ[™Y‚ˆÙ[™Y‚ˆÙ[ÙBˆÚY™YˆÔÕQÒÖBˆÚY™YˆQTÓQÒVT‘^ÖBš[™›ÏXÛÛ\]RQTÔÜÝYÚ[™ÊšY]Ñ\™XÝ[Û•Ë›Ü›X[ËYÚÖK“YÚ]KYÚÖK“YÚ\™XÝ[Û‹Y™\Ù^ÖKœ™Ø‹YÚÖK“YÚÜXÝ[\‹œ™Ø‹Y™\Ù^ÖK˜KÛÜÜÚ[™\ÜËY\ÓYÚ^\™^ÖKY\ÓYÚ^\™^ÖTØ[\\ŠNÂˆÙ[ÙBš[™›ÏXÛÛ\]TÜÝYÚ[™ÊšY]Ñ\™XÝ[Û•Ë›Ü›X[ËYÚÖK“YÚ]KYÚÖK“YÚ\™XÝ[Û‹Y™\Ù^ÖKœ™Ø‹YÚÖK“YÚÜXÝ[\‹œ™Ø‹Y™\Ù^ÖK˜KÛÜÜÚ[™\ÜÊNÂˆÙ[™Y‚ˆÙ[YˆYš[™Y
SRSQÒÖJBš[™›ÏXÛÛ\]R[Z\Ü\šXÓYÚ[™ÊšY]Ñ\™XÝ[Û•Ë›Ü›X[ËYÚÖK“YÚ]KY™\Ù^ÖKœ™Ø‹YÚÖK“YÚÜXÝ[\‹œ™Ø‹YÚÖK“YÚÜ›Ý[™ÛÜÜÚ[™\ÜÊNÂˆÙ[YˆYš[™Y
ÒS•QÒÖJHYš[™Y
T“QÒÖJBš[™›ÏXÛÛ\]SYÚ[™ÊšY]Ñ\™XÝ[Û•Ë›Ü›X[ËYÚÖK“YÚ]KY™\Ù^ÖKœ™Ø‹YÚÖK“YÚÜXÝ[\‹œ™Ø‹Y™\Ù^ÖK˜KÛÜÜÚ[™\ÜÊNÂˆÙ[YˆYš[™JT‘PSQÒÖJH	‰ˆYš[™Y
T‘PSQÒÕTÔ•Q
BˆÚYˆYš[™Y
‘PÕT‘PSQÒSRTÔÒSÓ•VT‘^ÖJBš[™›ÏXÛÛ\]P\™XSYÚ[™ÕÚ]^\™J\™XSYÚÓÌTØ[\\‹\™XSYÚÓÌTØ[\\”Ø[\\‹\™XSYÚÓÌ”Ø[\\‹\™XSYÚÓÌ”Ø[\\”Ø[\\‹™XÝ\™XSYÚ[Z\ÜÚ[Û•^\™^ÖK™XÝ\™XSYÚ[Z\ÜÚ[Û•^\™^ÖTØ[\\‹šY]Ñ\™XÝ[Û•Ë›Ü›X[Ëœ˜YÛY[[œ]Ë”ÜÚ][Û•ËYÚÖK“YÚ]Kž^‹YÚÖK“YÚÚYž^‹YÚÖK“YÚZYÚž^‹Y™\Ù^ÖKœ™Ø‹YÚÖK“YÚÜXÝ[\‹œ™Ø‹ˆÚY™YˆT‘PSQÒ“Ô“ÕQÒ‘TÔÂŒBˆÙ[ÙB[šY›Ü›\Ë”™Y›XÝ[Û’[™›ÜËžBˆÙ[™Y‚ŠNÂˆÙ[ÙBš[™›ÏXÛÛ\]P\™XSYÚ[™Ê\™XSYÚÓÌTØ[\\‹\™XSYÚÓÌTØ[\\”Ø[\\‹\™XSYÚÓÌ”Ø[\\‹\™XSYÚÓÌ”Ø[\\”Ø[\\‹šY]Ñ\™XÝ[Û•Ë›Ü›X[Ëœ˜YÛY[[œ]Ë”ÜÚ][Û•ËYÚÖK“YÚ]Kž^‹YÚÖK“YÚÚYž^‹YÚÖK“YÚZYÚž^‹Y™\Ù^ÖKœ™Ø‹YÚÖK“YÚÜXÝ[\‹œ™Ø‹ˆÚY™YˆT‘PSQÒ“Ô“ÕQÒ‘TÔÂŒBˆÙ[ÙB[šY›Ü›\Ë”™Y›XÝ[Û’[™›ÜËžBˆÙ[™Y‚ŠNÂˆÙ[™Y‚ˆÙ[YˆYš[™Y
ÓTÕQÒÖJBžÛ]ÛXÙR[™^[Z[ŠÙ]Û\Ý\™YÛXÙR[™^
YÚÖK”ÛXÙQ]Kœ˜YÛY[[œ]Ë•šY]Ñ\
KÓTÕQÒÔÓPÑTËLJNÚ[™›ÏXÛÛ\]PÛ\Ý\™YYÚ[™ÞÖJYÚ]U^\™^ÖKšY]Ñ\™XÝ[Û•Ë›Ü›X[ËYÚÖK“YÚ]K™XÌJYÚÖK”ÛXÙT˜[™Ù\ÖÜÛXÙR[™^KžJKÛÜÜÚ[™\ÜÊNßBˆÙ[™Y‚ˆÙ[™Y‚ˆÚY™Yˆ“Ò‘PÕQQÒVT‘^ÖBš[™›Ë™Y™\ÙJXÛÛ\]T›Ú™XÝ[Û•^\™QY™\ÙSYÚ[™Ê›Ú™XÝ[Û“YÚ^\™^ÖK›Ú™XÝ[Û“YÚ^\™^ÖTØ[\\‹[šY›Ü›\Ë^\™T›Ú™XÝ[Û“X]š^ÖKœ˜YÛY[[œ]Ë”ÜÚ][Û•ÊNÂˆÙ[™Y‚ˆÙ[™Y‚ˆÚY™YˆÒQÕÞÖBˆÚY™YˆÒQÕÐÔÓQP•QÞÖB˜\ˆÚYÝÑXYÞÖNˆ™XÌÙŽÂˆÙ[™Y‚ˆÚY™YˆÒQÕÐÔÓ^ÖBˆÚY™YˆÒQÕÐÔÓUTÑTÒQÕÓPVžÖB˜\ˆ[™^ÖNˆLÌKLNÂˆÙ[ÙB˜\ˆ[™^ÖNˆLÌTÒQÕÐÔÓS•SWÐÐTÐÐQTÞÖKLNÂˆÙ[™Y‚˜\ˆY™žÖNˆŒÌLŽÝ”ÜÚ][Û‘œ›ÛSYÚÖVÌOYœ˜YÛY[[œ]Ë”ÜÚ][Û‘œ›ÛSYÚÖWÌÝ”ÜÚ][Û‘œ›ÛSYÚÖVÌWOYœ˜YÛY[[œ]Ë”ÜÚ][Û‘œ›ÛSYÚÖWÌNÝ”ÜÚ][Û‘œ›ÛSYÚÖVÌ—OYœ˜YÛY[[œ]Ë”ÜÚ][Û‘œ›ÛSYÚÖWÌŽÝ”ÜÚ][Û‘œ›ÛSYÚÖVÌ×OYœ˜YÛY[[œ]Ë”ÜÚ][Û‘œ›ÛSYÚÖWÌÎÝ‘\Y]šXÞÖVÌOYœ˜YÛY[[œ]Ë‘\Y]šXÞÖWÌÝ‘\Y]šXÞÖVÌWOYœ˜YÛY[[œ]Ë‘\Y]šXÞÖWÌNÝ‘\Y]šXÞÖVÌ—OYœ˜YÛY[[œ]Ë‘\Y]šXÞÖWÌŽÝ‘\Y]šXÞÖVÌ×OYœ˜YÛY[[œ]Ë‘\Y]šXÞÖWÌÎÙ›Üˆ
˜\ˆNšLÌLÈOÒQÕÐÔÓS•SWÐÐTÐÐQTÞÖNÈJÊÊBžÂˆÚY™YˆÒQÕÐÔÓWÔ’QÒS‘QÖB™Y™žÖO][šY›Ü›\ËšY]Ñœ\Ý[VžÖVÚWJÙœ˜YÛY[[œ]Ë”ÜÚ][Û‘œ›ÛPØ[Y\˜^ÖKžŽÂˆÙ[ÙB™Y™žÖO][šY›Ü›\ËšY]Ñœ\Ý[VžÖVÚWKYœ˜YÛY[[œ]Ë”ÜÚ][Û‘œ›ÛPØ[Y\˜^ÖKžŽÂˆÙ[™Y‚šYˆ
Y™žÖOLŠHÚ[™^ÖOZNØœ™XZÎß_BˆÚY™YˆÒQÕÐÔÓUTÑTÒQÕÓPVžÖBšYˆ
[™^ÖOL
BˆÙ[™Y‚žÂˆÚYˆYš[™Y
ÒQÕÔÑžÖJBˆÚYˆYš[™Y
ÒQÕÓÕÔUPSU^ÖJBœÚYÝÏXÛÛ\]TÚYÝÕÚ]ÔÓTÑŒJ[™^ÖK”ÜÚ][Û‘œ›ÛSYÚÖVÚ[™^ÖWK‘\Y]šXÞÖVÚ[™^ÖWKÚYÝÕ^\™^ÖKÚYÝÕ^\™^ÖTØ[\\‹YÚÖKœÚYÝÜÒ[™›ËžYÚÖKœÚYÝÜÒ[™›ËÊNÂˆÙ[YˆYš[™Y
ÒQÕÓQQUSTUPSU^ÖJBœÚYÝÏXÛÛ\]TÚYÝÕÚ]ÔÓTÑŒÊ[™^ÖK”ÜÚ][Û‘œ›ÛSYÚÖVÚ[™^ÖWK‘\Y]šXÞÖVÚ[™^ÖWKÚYÝÕ^\™^ÖKÚYÝÕ^\™^ÖTØ[\\‹YÚÖKœÚYÝÜÒ[™›Ëž^‹YÚÖKœÚYÝÜÒ[™›ËžYÚÖKœÚYÝÜÒ[™›ËÊNÂˆÙ[ÙBœÚYÝÏXÛÛ\]TÚYÝÕÚ]ÔÓTÑJ[™^ÖK”ÜÚ][Û‘œ›ÛSYÚÖVÚ[™^ÖWK‘\Y]šXÞÖVÚ[™^ÖWKÚYÝÕ^\™^ÖKÚYÝÕ^\™^ÖTØ[\\‹YÚÖKœÚYÝÜÒ[™›Ëž^‹YÚÖKœÚYÝÜÒ[™›ËžYÚÖKœÚYÝÜÒ[™›ËÊNÂˆÙ[™Y‚ˆÙ[YˆYš[™Y
ÒQÕÔÔÔÞÖJBˆÚYˆYš[™Y
ÒQÕÓÕÔUPSU^ÖJBœÚYÝÏXÛÛ\]TÚYÝÕÚ]ÔÓTÔÔÌMŠ[™^ÖK”ÜÚ][Û‘œ›ÛSYÚÖVÚ[™^ÖWK‘\Y]šXÞÖVÚ[™^ÖWK\^\™^ÖK\^\™^ÖTØ[\\‹ÚYÝÕ^\™^ÖKÚYÝÕ^\™^ÖTØ[\\‹YÚÖKœÚYÝÜÒ[™›ËžKYÚÖKœÚYÝÜÒ[™›Ëž‹YÚÖKœÚYÝÜÒ[™›ËžYÚÖKœÚYÝÜÒ[™›ËË[šY›Ü›\Ë›YÚÚ^™UUÛÜœ™XÝ[ÛžÖVÚ[™^ÖWK[šY›Ü›\Ë™\ÛÜœ™XÝ[ÛžÖVÚ[™^ÖWK[šY›Ü›\Ëœ[[Xœ˜Q\šÛ™\ÜÞÖJNÂˆÙ[YˆYš[™Y
ÒQÕÓQQUSTUPSU^ÖJBœÚYÝÏXÛÛ\]TÚYÝÕÚ]ÔÓTÔÔÌÌŠ[™^ÖK”ÜÚ][Û‘œ›ÛSYÚÖVÚ[™^ÖWK‘\Y]šXÞÖVÚ[™^ÖWK\^\™^ÖK\^\™^ÖTØ[\\‹ÚYÝÕ^\™^ÖKÚYÝÕ^\™^ÖTØ[\\‹YÚÖKœÚYÝÜÒ[™›ËžKYÚÖKœÚYÝÜÒ[™›Ëž‹YÚÖKœÚYÝÜÒ[™›ËžYÚÖKœÚYÝÜÒ[™›ËË[šY›Ü›\Ë›YÚÚ^™UUÛÜœ™XÝ[ÛžÖVÚ[™^ÖWK[šY›Ü›\Ë™\ÛÜœ™XÝ[ÛžÖVÚ[™^ÖWK[šY›Ü›\Ëœ[[Xœ˜Q\šÛ™\ÜÞÖJNÂˆÙ[ÙBœÚYÝÏXÛÛ\]TÚYÝÕÚ]ÔÓTÔÔÍ
[™^ÖK”ÜÚ][Û‘œ›ÛSYÚÖVÚ[™^ÖWK‘\Y]šXÞÖVÚ[™^ÖWK\^\™^ÖK\^\™^ÖTØ[\\‹ÚYÝÕ^\™^ÖKÚYÝÕ^\™^ÖTØ[\\‹YÚÖKœÚYÝÜÒ[™›ËžKYÚÖKœÚYÝÜÒ[™›Ëž‹YÚÖKœÚYÝÜÒ[™›ËžYÚÖKœÚYÝÜÒ[™›ËË[šY›Ü›\Ë›YÚÚ^™UUÛÜœ™XÝ[ÛžÖVÚ[™^ÖWK[šY›Ü›\Ë™\ÛÜœ™XÝ[ÛžÖVÚ[™^ÖWK[šY›Ü›\Ëœ[[Xœ˜Q\šÛ™\ÜÞÖJNÂˆÙ[™Y‚ˆÙ[ÙBœÚYÝÏXÛÛ\]TÚYÝÐÔÓJ[™^ÖK”ÜÚ][Û‘œ›ÛSYÚÖVÚ[™^ÖWK‘\Y]šXÞÖVÚ[™^ÖWKÚYÝÕ^\™^ÖKÚYÝÕ^\™^ÖTØ[\\‹YÚÖKœÚYÝÜÒ[™›ËžYÚÖKœÚYÝÜÒ[™›ËÊNÂˆÙ[™Y‚ˆÚY™YˆÒQÕÐÔÓQP•QÞÖBœÚYÝÑXYÞÖO]™XÌÙŠÚYÝÊJØ\ØØYPÛÛÜœÓ][\Y\žÖVÚ[™^ÖWNÂˆÙ[™Y‚ˆÚY›™YˆÒQÕÐÔÓS“Ð“S‘ÖB˜\ˆœ\Ý[S[™Ý™ŒÌ][šY›Ü›\Ë™œ\Ý[S[™ÝÞÖVÚ[™^ÖWNÝ˜\ˆY™”˜][Î™ŒÌXÛ[\
Y™žÖKÙœ\Ý[S[™Ý‹KŠJ[šY›Ü›\Ë˜Ø\ØØYP›[™˜XÝÜžÖNÚYˆ
[™^ÖO
ÒQÕÐÔÓS•SWÐÐTÐÐQTÞÖKLJH	‰ˆY™”˜][ÏKŠBžÚ[™^ÖJÏLNÝ˜\ˆ™^ÚYÝÎˆŒÌLŽÂˆÚYˆYš[™Y
ÒQÕÔÑžÖJBˆÚYˆYš[™Y
ÒQÕÓÕÔUPSU^ÖJB›™^ÚYÝÏXÛÛ\]TÚYÝÕÚ]ÔÓTÑŒJ[™^ÖK”ÜÚ][Û‘œ›ÛSYÚÖVÚ[™^ÖWK‘\Y]šXÞÖVÚ[™^ÖWKÚYÝÕ^\™^ÖTØ[\\‹YÚÖKœÚYÝÜÒ[™›ËžYÚÖKœÚYÝÜÒ[™›ËÊNÂˆÙ[YˆYš[™Y
ÒQÕÓQQUSTUPSU^ÖJB›™^ÚYÝÏXÛÛ\]TÚYÝÕÚ]ÔÓTÑŒÊ[™^ÖK”ÜÚ][Û‘œ›ÛSYÚÖVÚ[™^ÖWK‘\Y]šXÞÖVÚ[™^ÖWKÚYÝÕ^\™^ÖKÚYÝÕ^\™^ÖTØ[\\‹YÚÖKœÚYÝÜÒ[™›Ëž^‹YÚÖKœÚYÝÜÒ[™›ËžYÚÖKœÚYÝÜÒ[™›ËÊNÂˆÙ[ÙB›™^ÚYÝÏXÛÛ\]TÚYÝÕÚ]ÔÓTÑJ[™^ÖK”ÜÚ][Û‘œ›ÛSYÚÖVÚ[™^ÖWK‘\Y]šXÞÖVÚ[™^ÖWKÚYÝÕ^\™^ÖKÚYÝÕ^\™^ÖTØ[\\‹YÚÖKœÚYÝÜÒ[™›Ëž^‹YÚÖKœÚYÝÜÒ[™›ËžYÚÖKœÚYÝÜÒ[™›ËÊNÂˆÙ[™Y‚ˆÙ[YˆYš[™Y
ÒQÕÔÔÔÞÖJBˆÚYˆYš[™Y
ÒQÕÓÕÔUPSU^ÖJB›™^ÚYÝÏXÛÛ\]TÚYÝÕÚ]ÔÓTÔÔÌMŠ[™^ÖK”ÜÚ][Û‘œ›ÛSYÚÖVÚ[™^ÖWK‘\Y]šXÞÖVÚ[™^ÖWK\^\™^ÖK\^\™^ÖTØ[\\‹ÚYÝÕ^\™^ÖKÚYÝÕ^\™^ÖTØ[\\‹YÚÖKœÚYÝÜÒ[™›ËžKYÚÖKœÚYÝÜÒ[™›Ëž‹YÚÖKœÚYÝÜÒ[™›ËžYÚÖKœÚYÝÜÒ[™›ËË[šY›Ü›\Ë›YÚÚ^™UUÛÜœ™XÝ[ÛžÖVÚ[™^ÖWK[šY›Ü›\Ë™\ÛÜœ™XÝ[ÛžÖVÚ[™^ÖWK[šY›Ü›\Ëœ[[Xœ˜Q\šÛ™\ÜÞÖJNÂˆÙ[YˆYš[™Y
ÒQÕÓQQUSTUPSU^ÖJB›™^ÚYÝÏXÛÛ\]TÚYÝÕÚ]ÔÓTÔÔÌÌŠ[™^ÖK”ÜÚ][Û‘œ›ÛSYÚÖVÚ[™^ÖWK‘\Y]šXÞÖVÚ[™^ÖWK\^\™^ÖK\^\™^ÖTØ[\\‹ÚYÝÕ^\™^ÖKÚYÝÕ^\™^ÖTØ[\\‹YÚÖKœÚYÝÜÒ[™›ËžKYÚÖKœÚYÝÜÒ[™›Ëž‹YÚÖKœÚYÝÜÒ[™›ËžYÚÖKœÚYÝÜÒ[™›ËË[šY›Ü›\Ë›YÚÚ^™UUÛÜœ™XÝ[ÛžÖVÚ[™^ÖWK[šY›Ü›\Ë™\ÛÜœ™XÝ[ÛžÖVÚ[™^ÖWK[šY›Ü›\Ëœ[[Xœ˜Q\šÛ™\ÜÞÖJNÂˆÙ[ÙB›™^ÚYÝÏXÛÛ\]TÚYÝÕÚ]ÔÓTÔÔÍ
[™^ÖK”ÜÚ][Û‘œ›ÛSYÚÖVÚ[™^ÖWK‘\Y]šXÞÖVÚ[™^ÖWK\^\™^ÖK\^\™^ÖTØ[\\‹ÚYÝÕ^\™^ÖKÚYÝÕ^\™^ÖTØ[\\‹YÚÖKœÚYÝÜÒ[™›ËžKYÚÖKœÚYÝÜÒ[™›Ëž‹YÚÖKœÚYÝÜÒ[™›ËžYÚÖKœÚYÝÜÒ[™›ËË[šY›Ü›\Ë›YÚÚ^™UUÛÜœ™XÝ[ÛžÖVÚ[™^ÖWK[šY›Ü›\Ë™\ÛÜœ™XÝ[ÛžÖVÚ[™^ÖWK[šY›Ü›\Ëœ[[Xœ˜Q\šÛ™\ÜÞÖJNÂˆÙ[™Y‚ˆÙ[ÙB›™^ÚYÝÏXÛÛ\]TÚYÝÐÔÓJ[™^ÖK”ÜÚ][Û‘œ›ÛSYÚÖVÚ[™^ÖWK‘\Y]šXÞÖVÚ[™^ÖWKÚYÝÕ^\™^ÖKÚYÝÕ^\™^ÖTØ[\\‹YÚÖKœÚYÝÜÒ[™›ËžYÚÖKœÚYÝÜÒ[™›ËÊNÂˆÙ[™Y‚œÚYÝÏ[Z^
™^ÚYÝËÚYÝËY™”˜][ÊNÂˆÚY™YˆÒQÕÐÔÓQP•QÞÖBœÚYÝÑXYÞÖO[Z^
™XÌÊ™^ÚYÝÊJØ\ØØYPÛÛÜœÓ][\Y\žÖVÚ[™^ÖWKÚYÝÑXYÞÖKY™”˜][ÊNÂˆÙ[™Y‚ŸBˆÙ[™Y‚ŸBˆÙ[YˆYš[™Y
ÒQÕÐÓÔÑQTÓ^ÖJBˆÚYˆYš[™Y
ÒQÕÐÕP‘^ÖJBœÚYÝÏXÛÛ\]TÚYÝÕÚ]ÛÜÙQTÓPÝX™Jœ˜YÛY[[œ]Ë”ÜÚ][Û•ËYÚÖK“YÚ]Kž^‹ÚYÝÕ^\™^ÖKÚYÝÕ^\™^ÖTØ[\\‹YÚÖKœÚYÝÜÒ[™›ËžYÚÖKœÚYÝÜÒ[™›Ëž‹YÚÖK™\˜[Y\ÊNÂˆÙ[ÙBœÚYÝÏXÛÛ\]TÚYÝÕÚ]ÛÜÙQTÓJœ˜YÛY[[œ]Ë”ÜÚ][Û‘œ›ÛSYÚÖKœ˜YÛY[[œ]Ë‘\Y]šXÞÖKÚYÝÕ^\™^ÖKÚYÝÕ^\™^ÖTØ[\\‹YÚÖKœÚYÝÜÒ[™›ËžYÚÖKœÚYÝÜÒ[™›Ëž‹YÚÖKœÚYÝÜÒ[™›ËÊNÂˆÙ[™Y‚ˆÙ[YˆYš[™Y
ÒQÕÑTÓ^ÖJBˆÚYˆYš[™Y
ÒQÕÐÕP‘^ÖJBœÚYÝÏXÛÛ\]TÚYÝÕÚ]TÓPÝX™Jœ˜YÛY[[œ]Ë”ÜÚ][Û•ËYÚÖK“YÚ]Kž^‹ÚYÝÕ^\™^ÖKÚYÝÕ^\™^ÖTØ[\\‹YÚÖKœÚYÝÜÒ[™›ËžYÚÖKœÚYÝÜÒ[™›Ëž‹YÚÖK™\˜[Y\ÊNÂˆÙ[ÙBœÚYÝÏXÛÛ\]TÚYÝÕÚ]TÓJœ˜YÛY[[œ]Ë”ÜÚ][Û‘œ›ÛSYÚÖKœ˜YÛY[[œ]Ë‘\Y]šXÞÖKÚYÝÕ^\™^ÖKÚYÝÕ^\™^ÖTØ[\\‹YÚÖKœÚYÝÜÒ[™›ËžYÚÖKœÚYÝÜÒ[™›Ëž‹YÚÖKœÚYÝÜÒ[™›ËÊNÂˆÙ[™Y‚ˆÙ[YˆYš[™Y
ÒQÕÔÒTÔÓÓžÖJBˆÚYˆYš[™Y
ÒQÕÐÕP‘^ÖJBœÚYÝÏXÛÛ\]TÚYÝÕÚ]Ú\ÜÛÛ”Ø[\[™ÐÝX™Jœ˜YÛY[[œ]Ë”ÜÚ][Û•ËYÚÖK“YÚ]Kž^‹ÚYÝÕ^\™^ÖKÚYÝÕ^\™^ÖTØ[\\‹YÚÖKœÚYÝÜÒ[™›ËžKYÚÖKœÚYÝÜÒ[™›ËžYÚÖK™\˜[Y\ÊNÂˆÙ[ÙBœÚYÝÏXÛÛ\]TÚYÝÕÚ]Ú\ÜÛÛ”Ø[\[™Êœ˜YÛY[[œ]Ë”ÜÚ][Û‘œ›ÛSYÚÖKœ˜YÛY[[œ]Ë‘\Y]šXÞÖKÚYÝÕ^\™^ÖKÚYÝÕ^\™^ÖTØ[\\‹YÚÖKœÚYÝÜÒ[™›ËžKYÚÖKœÚYÝÜÒ[™›ËžYÚÖKœÚYÝÜÒ[™›ËÊNÂˆÙ[™Y‚ˆÙ[YˆYš[™Y
ÒQÕÔÑžÖJBˆÚYˆYš[™Y
ÒQÕÓÕÔUPSU^ÖJBœÚYÝÏXÛÛ\]TÚYÝÕÚ]ÑŒJœ˜YÛY[[œ]Ë”ÜÚ][Û‘œ›ÛSYÚÖKœ˜YÛY[[œ]Ë‘\Y]šXÞÖKÚYÝÕ^\™^ÖKÚYÝÕ^\™^ÖTØ[\\‹YÚÖKœÚYÝÜÒ[™›ËžYÚÖKœÚYÝÜÒ[™›ËÊNÂˆÙ[YˆYš[™Y
ÒQÕÓQQUSTUPSU^ÖJBœÚYÝÏXÛÛ\]TÚYÝÕÚ]ÑŒÊœ˜YÛY[[œ]Ë”ÜÚ][Û‘œ›ÛSYÚÖKœ˜YÛY[[œ]Ë‘\Y]šXÞÖKÚYÝÕ^\™^ÖKÚYÝÕ^\™^ÖTØ[\\‹YÚÖKœÚYÝÜÒ[™›Ëž^‹YÚÖKœÚYÝÜÒ[™›ËžYÚÖKœÚYÝÜÒ[™›ËÊNÂˆÙ[ÙBœÚYÝÏXÛÛ\]TÚYÝÕÚ]ÑJœ˜YÛY[[œ]Ë”ÜÚ][Û‘œ›ÛSYÚÖKœ˜YÛY[[œ]Ë‘\Y]šXÞÖKÚYÝÕ^\™^ÖKÚYÝÕ^\™^ÖTØ[\\‹YÚÖKœÚYÝÜÒ[™›Ëž^‹YÚÖKœÚYÝÜÒ[™›ËžYÚÖKœÚYÝÜÒ[™›ËÊNÂˆÙ[™Y‚ˆÙ[YˆYš[™Y
ÒQÕÔÔÔÞÖJBˆÚYˆYš[™Y
ÒQÕÓÕÔUPSU^ÖJBœÚYÝÏXÛÛ\]TÚYÝÕÚ]ÔÔÌMŠœ˜YÛY[[œ]Ë”ÜÚ][Û‘œ›ÛSYÚÖKœ˜YÛY[[œ]Ë‘\Y]šXÞÖK\^\™^ÖK\^\™^ÖTØ[\\‹ÚYÝÕ^\™^ÖKÚYÝÕ^\™^ÖTØ[\\‹YÚÖKœÚYÝÜÒ[™›ËžKYÚÖKœÚYÝÜÒ[™›Ëž‹YÚÖKœÚYÝÜÒ[™›ËžYÚÖKœÚYÝÜÒ[™›ËÊNÂˆÙ[YˆYš[™Y
ÒQÕÓQQUSTUPSU^ÖJBœÚYÝÏXÛÛ\]TÚYÝÕÚ]ÔÔÌÌŠœ˜YÛY[[œ]Ë”ÜÚ][Û‘œ›ÛSYÚÖKœ˜YÛY[[œ]Ë‘\Y]šXÞÖK\^\™^ÖK\^\™^ÖTØ[\\‹ÚYÝÕ^\™^ÖKÚYÝÕ^\™^ÖTØ[\\‹YÚÖKœÚYÝÜÒ[™›ËžKYÚÖKœÚYÝÜÒ[™›Ëž‹YÚÖKœÚYÝÜÒ[™›ËžYÚÖKœÚYÝÜÒ[™›ËÊNÂˆÙ[ÙBœÚYÝÏXÛÛ\]TÚYÝÕÚ]ÔÔÍ
œ˜YÛY[[œ]Ë”ÜÚ][Û‘œ›ÛSYÚÖKœ˜YÛY[[œ]Ë‘\Y]šXÞÖK\^\™^ÖK\^\™^ÖTØ[\\‹ÚYÝÕ^\™^ÖKÚYÝÕ^\™^ÖTØ[\\‹YÚÖKœÚYÝÜÒ[™›ËžKYÚÖKœÚYÝÜÒ[™›Ëž‹YÚÖKœÚYÝÜÒ[™›ËžYÚÖKœÚYÝÜÒ[™›ËÊNÂˆÙ[™Y‚ˆÙ[ÙBˆÚYˆYš[™Y
ÒQÕÐÕP‘^ÖJBœÚYÝÏXÛÛ\]TÚYÝÐÝX™Jœ˜YÛY[[œ]Ë”ÜÚ][Û•ËYÚÖK“YÚ]Kž^‹ÚYÝÕ^\™^ÖKÚYÝÕ^\™^ÖTØ[\\‹YÚÖKœÚYÝÜÒ[™›ËžYÚÖK™\˜[Y\ÊNÂˆÙ[ÙBœÚYÝÏXÛÛ\]TÚYÝÊœ˜YÛY[[œ]Ë”ÜÚ][Û‘œ›ÛSYÚÖKœ˜YÛY[[œ]Ë‘\Y]šXÞÖKÚYÝÕ^\™^ÖKÚYÝÕ^\™^ÖTØ[\\‹YÚÖKœÚYÝÜÒ[™›ËžYÚÖKœÚYÝÜÒ[™›ËÊNÂˆÙ[™Y‚ˆÙ[™Y‚ˆÚY™YˆÒQÕÓÓ“BˆÚY›™YˆÒQÕÒS•TÑBˆÙYš[™HÒQÕÒS•TÑBˆÙ[™Y‚™ÛØ˜[ÚYÝÊÏ\ÚYÝÎÜÚYÝÓYÚÛÝ[
ÏLKŒÂˆÙ[™Y‚ˆÙ[ÙBœÚYÝÏLKŽÂˆÙ[™Y‚˜YÙÔÚYÝÊÏ\ÚYÝÎÛ[SYÚÊÏLKŒÂˆÚY›™YˆÒQÕÓÓ“BˆÚY™YˆÕTÕÓUTÑT“QÒS‘Â™Y™\ÙP˜\ÙJÏXÛÛ\]PÝ\ÝÛQY™\ÙSYÚ[™Ê[™›ËY™\ÙP˜\ÙKÚYÝÊNÂˆÚY™YˆÔPÕST•T“BœÜXÝ[\˜\ÙJÏXÛÛ\]PÝ\ÝÛTÜXÝ[\“YÚ[™Ê[™›ËÜXÝ[\˜\ÙKÚYÝÊNÂˆÙ[™Y‚ˆÙ[YˆYš[™Y
QÒPT
H	‰ˆYš[™Y
QÒPTVÓQQÖJB™Y™\ÙP˜\ÙJÏ[YÚX\ÛÛÜ‹œ™ØŠœÚYÝÎÂˆÚY™YˆÔPÕST•T“BˆÚY›™YˆQÒPT“ÔÔPÕSTžÖBœÜXÝ[\˜\ÙJÏZ[™›ËœÜXÝ[\ŠœÚYÝÊ›YÚX\ÛÛÜ‹œ™ØŽÂˆÙ[™Y‚ˆÙ[™Y‚ˆÚY™YˆÓPTÓÐUˆÚY›™YˆQÒPT“ÔÔPÕSTžÖB˜ÛX\ÛØ]˜\ÙJÏZ[™›Ë˜ÛX\ÛØ]œ™ØŠœÚYÝÊ›YÚX\ÛÛÜ‹œ™ØŽÂˆÙ[™Y‚ˆÙ[™Y‚ˆÚY™YˆÒQS‚ˆÚY›™YˆQÒPT“ÔÔPÕSTžÖBœÚY[˜\ÙJÏZ[™›ËœÚY[‹œ™ØŠœÚYÝÎÂˆÙ[™Y‚ˆÙ[™Y‚ˆÙ[ÙBˆÚY™YˆÒQÕÐÔÓQP•QÞÖB™Y™\ÙP˜\ÙJÏZ[™›Ë™Y™\ÙJœÚYÝÑXYÞÖNÂˆÙ[ÙB™Y™\ÙP˜\ÙJÏZ[™›Ë™Y™\ÙJœÚYÝÎÂˆÙ[™Y‚ˆÚY™YˆÔ×ÕS”ÓPÑSÖB™Y™\ÙU˜[œÛZ\ÜÚ[Û˜\ÙJÏZ[™›Ë™Y™\ÙU˜[œÛZ\ÜÚ[ÛŠœÚYÝÎÂˆÙ[™Y‚ˆÚY™YˆÔPÕST•T“BœÜXÝ[\˜\ÙJÏZ[™›ËœÜXÝ[\ŠœÚYÝÎÂˆÙ[™Y‚ˆÚY™YˆÓPTÓÐU˜ÛX\ÛØ]˜\ÙJÏZ[™›Ë˜ÛX\ÛØ]œ™ØŠœÚYÝÎÂˆÙ[™Y‚ˆÚY™YˆÒQS‚œÚY[˜\ÙJÏZ[™›ËœÚY[‹œ™ØŠœÚYÝÎÂˆÙ[™Y‚ˆÙ[™Y‚ˆÙ[™Y‚ˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÉ×_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÉ×O^LJNØÛÛœÝÐ^Û˜[YN‰ËÚY\ŽžL_K™ÏH›ÙÑ\œ˜YÛY[‹ŒOXÚY™YˆÑÐT’URPÑT™œ˜YÛY[Ý]]Ë™œ˜YÑ\[ÙÌŠœ˜YÛY[[œ]Ë‘œ˜YÛY[\
J[šY›Ü›\Ë›ÙØ\š]ZXÑ\ÛÛœÝ[
ŒNÂˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÒ™×_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÒ™×OXŒJNØÛÛœÝLO^Û˜[YN’™ËÚY\Ž˜Œ_K]H›Ú]œ˜YÛY[‹ŒOXÚY™YˆÔ‘T—ÒS‘TS‘S•ÕS”ÔT‘SÖB˜\ˆœ˜YÑ\ˆŒÌYœ˜YÛY[[œ]ËœÜÚ][Û‹žŽÈˆÚY™YˆÔ‘T—ÒS‘TS‘S•ÕS”ÔT‘SÖWÌM’UÂ˜\ˆ[‘›Ø]ˆLÌ\XÚÌžM™›Ø]
™XÌ™Šœ˜YÑ\
JNÝ˜\ˆ[ˆ™XÌ™][œXÚÌžM™›Ø]
[‘›Ø]
NÙœ˜YÑ\Y[žÂˆÙ[™Y‚˜\ˆœ˜YÐÛÛÜ™ˆ™XÌšO]™XÌšJœ˜YÛY[[œ]ËœÜÚ][Û‹žJNÝ˜\ˆ\Ý\ˆ™XÌ™]^\™SØY
Ú]\Ø[\\‹œ˜YÐÛÛÜ™
Kœ™ÎÝ˜\ˆ\Ýœ›ÛÛÛÜŽˆ™XÍ]^\™SØY
Ú]œ›ÛÛÛÜ”Ø[\\‹œ˜YÐÛÛÜ™
NÙœ˜YÛY[Ý]]Ë™\]™XÌ™ŠSPVÑT
NÙœ˜YÛY[Ý]]Ë™œ›ÛÛÛÜ[\Ýœ›ÛÛÛÜŽÙœ˜YÛY[Ý]]Ë˜˜XÚÐÛÛÜH™XÍŠŒ
NÂˆÚY™YˆTÑWÔ‘U‘T”ÑWÑT•Q‘‘T‚˜\ˆ\\Ý\ˆŒÌK[\Ý\žÝ˜\ˆ™X\™\Ý\ˆŒÌ[\Ý\žNÂˆÙ[ÙB˜\ˆ™X\™\Ý\ˆŒÌK[\Ý\žÝ˜\ˆ\\Ý\ˆŒÌ[\Ý\žNÂˆÙ[™Y‚˜\ˆ[S][\Y\ŽˆŒÌLKŒ[\Ýœ›ÛÛÛÜ‹˜NÂˆÚY™YˆTÑWÔ‘U‘T”ÑWÑT•Q‘‘T‚šYˆ
œ˜YÑ\›™X\™\Ý\œ˜YÑ\\\Ý\
HÂˆÙ[ÙBšYˆ
œ˜YÑ\™X\™\Ý\œ˜YÑ\™\\Ý\
HÂˆÙ[™Y‚œ™]\›ˆœ˜YÛY[Ý]]ÎßBˆÚY™YˆTÑWÔ‘U‘T”ÑWÑT•Q‘‘T‚šYˆ
œ˜YÑ\™X\™\Ý\	‰ˆœ˜YÑ\™\\Ý\
HÂˆÙ[ÙBšYˆ
œ˜YÑ\›™X\™\Ý\	‰ˆœ˜YÑ\\\Ý\
HÂˆÙ[™Y‚™œ˜YÛY[Ý]]Ë™\]™XÌ™ŠYœ˜YÑ\œ˜YÑ\
NÜ™]\›ˆœ˜YÛY[Ý]]ÎßBˆÙ[™Y‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÙ]—_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÙ]—OTŒJNØÛÛœÝ^Û˜[YN™]‹ÚY\Ž”Œ_KH™Y˜][^[ÚY\ˆ‹LOXÚ[˜ÛYOY˜][X›ÑXÛ\˜][Û‚ˆÚ[˜ÛYO™T\ÜÑXÛ\˜][Û–ÔÐÑS‘WÓT•ÐÓÕS•BˆÚ[˜ÛYOÚ]XÛ\˜][Û‚ˆÙYš[™HÕTÕÓWÑ”QÓQS•Ð‘QÒS‚˜\žZ[™È”ÜÚ][Û•Îˆ™XÌÙŽÂˆÚY™Yˆ“Ô“PS˜\žZ[™È“›Ü›X[Îˆ™XÌÙŽÂˆÙ[™Y‚ˆÚYˆYš[™Y
‘T•VÓÓÔŠHYš[™Y
S”ÕSÑTÐÓÓÔŠH	‰ˆYš[™Y
S”ÕSÑTÊB˜\žZ[™ÈÛÛÜŽˆ™XÍŽÂˆÙ[™Y‚ˆÚYˆYš[™Y
ÓTÕQÒÐUÒ
H	‰ˆÓTÕQÒÐUÒŒ˜\žZ[™È•šY]Ñ\ˆŒÌŽÂˆÙ[™Y‚ˆÚ[˜ÛYOXZ[•U•˜\žZ[™ÑXÛ\˜][Û–ÌK‹×BˆÚ[˜ÛYO[\‘[˜Ý[ÛœÏ‚ˆÚ[˜ÛYOYÚX›ÑXÛ\˜][Û–Ì‹›X^Ú[][[™[Ý\ÓYÚ×BˆÚ[˜ÛYOYÚÑœ˜YÛY[[˜Ý[ÛœÏ‚ˆÚ[˜ÛYOÚYÝÜÑœ˜YÛY[[˜Ý[ÛœÏ‚ˆÚ[˜ÛYOØ[\\‘œ˜YÛY[XÛ\˜][ÛŠÑQ’S‘SSQWËQ‘•TÑKÕT–RS‘ÓSQWËY™\ÙKÔÐSTT“SQWËY™\ÙJBˆÚ[˜ÛYOØ[\\‘œ˜YÛY[XÛ\˜][ÛŠÑQ’S‘SSQWËSP’QS•ÕT–RS‘ÓSQWË[XšY[ÔÐSTT“SQWË[XšY[
BˆÚ[˜ÛYOØ[\\‘œ˜YÛY[XÛ\˜][ÛŠÑQ’S‘SSQWËÔPÒUKÕT–RS‘ÓSQWËÜXÚ]KÔÐSTT“SQWËÜXÚ]JBˆÚ[˜ÛYOØ[\\‘œ˜YÛY[XÛ\˜][ÛŠÑQ’S‘SSQWËSRTÔÒU‘KÕT–RS‘ÓSQWË[Z\ÜÚ]™KÔÐSTT“SQWË[Z\ÜÚ]™JBˆÚ[˜ÛYOØ[\\‘œ˜YÛY[XÛ\˜][ÛŠÑQ’S‘SSQWËQÒPTÕT–RS‘ÓSQWËYÚX\ÔÐSTT“SQWËYÚX\
BˆÚ[˜ÛYOØ[\\‘œ˜YÛY[XÛ\˜][ÛŠÑQ’S‘SSQWËPÐSÕT–RS‘ÓSQWËXØ[ÔÐSTT“SQWËXØ[
BˆÚY™Yˆ‘Q”PÕSÓ‚ˆÚY™Yˆ‘Q”PÕSÓ“PTÌÑ˜\ˆ™Yœ˜XÝ[ÛÝX™TØ[\\”Ø[\\ŽˆØ[\\ŽÝ˜\ˆ™Yœ˜XÝ[ÛÝX™TØ[\\Žˆ^\™WØÝX™OŒÌŽÂˆÙ[ÙB˜\ˆ™Yœ˜XÝ[ÛŒ‘Ø[\\”Ø[\\ŽˆØ[\\ŽÝ˜\ˆ™Yœ˜XÝ[ÛŒ‘Ø[\\Žˆ^\™WÌ™ŒÌŽÂˆÙ[™Y‚ˆÙ[™Y‚ˆÚYˆYš[™Y
ÔPÕST•T“JBˆÚ[˜ÛYOØ[\\‘œ˜YÛY[XÛ\˜][ÛŠÑQ’S‘SSQWËÔPÕST‹ÕT–RS‘ÓSQWËÜXÝ[\‹ÔÐSTT“SQWËÜXÝ[\ŠBˆÙ[™Y‚ˆÚ[˜ÛYOœ™\Û™[[˜Ý[Û‚ˆÚY™Yˆ‘Q“PÕSÓ‚ˆÚY™Yˆ‘Q“PÕSÓ“PTÌÑ˜\ˆ™Y›XÝ[ÛÝX™TØ[\\”Ø[\\ŽˆØ[\\ŽÝ˜\ˆ™Y›XÝ[ÛÝX™TØ[\\Žˆ^\™WØÝX™OŒÌŽÂˆÙ[ÙB˜\ˆ™Y›XÝ[ÛŒ‘Ø[\\”Ø[\\ŽˆØ[\\ŽÝ˜\ˆ™Y›XÝ[ÛŒ‘Ø[\\Žˆ^\™WÌ™ŒÌŽÂˆÙ[™Y‚ˆÚY™Yˆ‘Q“PÕSÓ“PTÔÒÖP“Ö˜\žZ[™È”ÜÚ][Û•U•Îˆ™XÌÙŽÂˆÙ[ÙBˆÚYˆYš[™Y
‘Q“PÕSÓ“PTÑTURT‘PÕS‘ÕST—Ñ’VQ
HYš[™Y
‘Q“PÕSÓ“PTÓRT”“Ô‘QTURT‘PÕS‘ÕST—Ñ’VQ
B˜\žZ[™È‘\™XÝ[Û•Îˆ™XÌÙŽÂˆÙ[™Y‚ˆÙ[™Y‚ˆÚ[˜ÛYO™Y›XÝ[Û‘[˜Ý[Û‚ˆÙ[™Y‚ˆÚ[˜ÛYO[XYÙT›ØÙ\ÜÚ[™ÑXÛ\˜][Û‚ˆÚ[˜ÛYO[XYÙT›ØÙ\ÜÚ[™Ñ[˜Ý[ÛœÏ‚ˆÚ[˜ÛYO^\™T™\]][Û‘[˜Ý[ÛœÏ‚ˆÚ[˜ÛYO[\œ˜YÛY[XZ[‘[˜Ý[ÛœÏ‚ˆÚ[˜ÛYO[\œ˜YÛY[[˜Ý[ÛœÏ‚ˆÚ[˜ÛYOÛ\[™Qœ˜YÛY[XÛ\˜][Û‚ˆÚ[˜ÛYOÙÑ\XÛ\˜][Û‚ˆÚ[˜ÛYO›ÙÑœ˜YÛY[XÛ\˜][Û‚ˆÙYš[™HÕTÕÓWÑ”QÓQS•ÑQ’S’USÓ”Âœ˜YÛY[™›ˆXZ[Š[œ]ˆœ˜YÛY[[œ]ÊKO‘œ˜YÛY[Ý]]ÈÂˆÙYš[™HÕTÕÓWÑ”QÓQS•ÓPRS—Ð‘QÒS‚ˆÚ[˜ÛYOÛ\[™Qœ˜YÛY[‚˜\ˆšY]Ñ\™XÝ[Û•Îˆ™XÌÙ[›Ü›X[^™JØÙ[™K‘^YTÜÚ][Û‹ž^‹Yœ˜YÛY[[œ]Ë”ÜÚ][Û•ÊNÝ˜\ˆ˜\ÙPÛÛÜŽˆ™XÍH™XÍŠK‹K‹K‹KŠNÝ˜\ˆY™\ÙPÛÛÜŽˆ™XÌÙ][šY›Ü›\Ë‘Y™\ÙPÛÛÜ‹œ™ØŽÝ˜\ˆ[NˆŒÌ][šY›Ü›\Ë‘Y™\ÙPÛÛÜ‹˜NÂˆÚY™Yˆ“Ô“PS˜\ˆ›Ü›X[Îˆ™XÌÙ[›Ü›X[^™Jœ˜YÛY[[œ]Ë“›Ü›X[ÊNÂˆÙ[ÙB˜\ˆ›Ü›X[Îˆ™XÌÙ[›Ü›X[^™JÜ›ÜÜÊ
œ˜YÛY[[œ]Ë”ÜÚ][Û•ÊKJœ˜YÛY[[œ]Ë”ÜÚ][Û•ÊJJJˆØÙ[™K‘^YTÜÚ][Û‹ÎÂˆÙ[™Y‚ˆÚ[˜ÛYO[\œ˜YÛY[‚ˆÚY™YˆÓÔÒQQQÒS‘Â››Ü›X[Ï\Ù[XÝ
[›Ü›X[Ë›Ü›X[Ëœ˜YÛY[[œ]Ë™œ›Û˜XÚ[™ÊNÂˆÙ[™Y‚ˆÚY™YˆQ‘•TÑB˜˜\ÙPÛÛÜUV‘
Y™\ÙTØ[\\‹Y™\ÙTØ[\\”Ø[\\‹œ˜YÛY[[œ]Ë‘Y™\ÙUUŠÝ]“Ù™œÙ]
NÂˆÚYˆYš[™Y
SUTÕ
H	‰ˆYYš[™Y
SUTÕÐQ•TSSPÓÓTUUSÓ”ÊBšYˆ
˜\ÙPÛÛÜ‹˜O[šY›Ü›\Ë˜[PÝ]Ù™ŠHÙ\ØØ\™ßBˆÙ[™Y‚ˆÚY™YˆSQ”“ÓQQ‘•TÑB˜[JX˜\ÙPÛÛÜ‹˜NÂˆÙ[™Y‚ˆÙYš[™HÕTÕÓWÑ”QÓQS•ÕTUWÐSB˜˜\ÙPÛÛÜ]™XÍŠ˜\ÙPÛÛÜ‹œ™ØŠ[šY›Ü›\Ë‘Y™\ÙR[™›ÜËžK˜\ÙPÛÛÜ‹˜JNÂˆÙ[™Y‚ˆÚYˆYš[™Y
PÐS
H	‰ˆYYš[™Y
PÐSÐQ•T—ÑURS
B˜\ˆXØ[ÛÛÜŽˆ™XÍ]^\™TØ[\JXØ[Ø[\\‹XØ[Ø[\\”Ø[\\‹œ˜YÛY[[œ]Ë‘XØ[UŠÝ]“Ù™œÙ]
NÂˆÚ[˜ÛYOXØ[œ˜YÛY[ŠÝ\™˜XÙP[™YË˜\ÙPÛÛÜ‹ÐSSPQPÐSÑÐSSPQPÐSÓ“ÕTÑQÊBˆÙ[™Y‚ˆÙYš[™HT‘TTÔ×ÔÒÒTÑPT“WÔ‘UT“‚ˆÚ[˜ÛYO\™T\ÜÏ‚ˆÚY›™YˆT‘TTÔÂˆÚYˆYš[™Y
‘T•VÓÓÔŠHYš[™Y
S”ÕSÑTÐÓÓÔŠH	‰ˆYš[™Y
S”ÕSÑTÊB˜˜\ÙPÛÛÜ]™XÍŠ˜\ÙPÛÛÜ‹œ™ØŠ™œ˜YÛY[[œ]ËÛÛÜ‹œ™Ø‹˜\ÙPÛÛÜ‹˜JNÂˆÙ[™Y‚ˆÚY™YˆURS˜˜\ÙPÛÛÜ]™XÍŠ˜\ÙPÛÛÜ‹œ™ØŠŒ‹Œ
›Z^
K]Z[ÛÛÜ‹œ‹[šY›Ü›\Ë‘]Z[[™›ÜËžJK˜\ÙPÛÛÜ‹˜JNÂˆÙ[™Y‚ˆÚYˆYš[™Y
PÐS
H	‰ˆYš[™Y
PÐSÐQ•T—ÑURS
B˜\ˆXØ[ÛÛÜŽˆ™XÍ]^\™TØ[\JXØ[Ø[\\‹XØ[Ø[\\”Ø[\\‹œ˜YÛY[[œ]Ë‘XØ[UŠÝ]“Ù™œÙ]
NÂˆÚ[˜ÛYOXØ[œ˜YÛY[ŠÝ\™˜XÙP[™YË˜\ÙPÛÛÜ‹ÐSSPQPÐSÑÐSSPQPÐSÓ“ÕTÑQÊBˆÙ[™Y‚ˆÙYš[™HÕTÕÓWÑ”QÓQS•ÕTUWÑQ‘•TÑB˜\ˆ˜\ÙP[XšY[ÛÛÜŽˆ™XÌÙH™XÌÙŠK‹K‹KŠNÂˆÚY™YˆSP’QS•˜˜\ÙP[XšY[ÛÛÜUV‘
[XšY[Ø[\\‹[XšY[Ø[\\”Ø[\\‹œ˜YÛY[[œ]Ë[XšY[UŠÝ]“Ù™œÙ]
Kœ™ØŠ[šY›Ü›\Ë[XšY[[™›ÜËžNÂˆÙ[™Y‚ˆÙYš[™HÕTÕÓWÑ”QÓQS•Ð‘Q“Ô‘WÓQÒÂ˜\ˆÛÜÜÚ[™\ÜÎˆŒÌ][šY›Ü›\Ë”ÜXÝ[\ÛÛÜ‹˜NÝ˜\ˆÜXÝ[\ÛÛÜŽˆ™XÌÙ][šY›Ü›\Ë”ÜXÝ[\ÛÛÜ‹œ™ØŽÂˆÚY™YˆÔPÕST•T“BˆÚY™YˆÔPÕST‚˜\ˆÜXÝ[\“X\ÛÛÜŽˆ™XÍUV‘
ÜXÝ[\”Ø[\\‹ÜXÝ[\”Ø[\\”Ø[\\‹œ˜YÛY[[œ]Ë”ÜXÝ[\•UŠÝ]“Ù™œÙ]
NÜÜXÝ[\ÛÛÜ\ÜXÝ[\“X\ÛÛÜ‹œ™ØŽÂˆÚY™YˆÓÔÔÒS‘TÔÂ™ÛÜÜÚ[™\ÜÏYÛÜÜÚ[™\ÜÊœÜXÝ[\“X\ÛÛÜ‹˜NÂˆÙ[™Y‚ˆÙ[™Y‚ˆÙ[™Y‚˜\ˆY™\ÙP˜\ÙNˆ™XÌÙH™XÌÙŠ‹‹ŠNÝ˜\ˆ[™›ÎˆYÚ[™Ò[™›ÎÂˆÚY™YˆÔPÕST•T“B˜\ˆÜXÝ[\˜\ÙNˆ™XÌÙH™XÌÙŠ‹‹ŠNÂˆÙ[™Y‚˜\ˆÚYÝÎˆŒÌLKŽÝ˜\ˆYÙÔÚYÝÎˆŒÌLŽÝ˜\ˆ[SYÚÎˆŒÌLŽÂˆÚY™YˆQÒPT˜\ˆYÚX\ÛÛÜŽˆ™XÍUV‘
YÚX\Ø[\\‹YÚX\Ø[\\”Ø[\\‹œ˜YÛY[[œ]Ë“YÚX\UŠÝ]“Ù™œÙ]
NÂˆÚY™Yˆ‘Ð‘QÒPT›YÚX\ÛÛÜ]™XÍŠœ›ÛT‘Ð‘
YÚX\ÛÛÜŠKYÚX\ÛÛÜ‹˜JNÂˆÙ[™Y‚›YÚX\ÛÛÜ]™XÍŠYÚX\ÛÛÜ‹œ™ØŠ[šY›Ü›\Ë“YÚX\[™›ÜËžKYÚX\ÛÛÜ‹˜JNÂˆÙ[™Y‚ˆÚ[˜ÛYOYÚœ˜YÛY[–Ì‹›X^Ú[][[™[Ý\ÓYÚ×B˜YÙÔÚYÝÏXYÙÔÚYÝËÛ[SYÚÎÝ˜\ˆ™Yœ˜XÝ[ÛÛÛÜŽˆ™XÍH™XÍŠ‹‹‹KŠNÂˆÚY™Yˆ‘Q”PÕSÓ‚˜\ˆ™Yœ˜XÝ[Û•™XÝÜŽˆ™XÌÙ[›Ü›X[^™J™Yœ˜XÝ
]šY]Ñ\™XÝ[Û•Ë›Ü›X[Ë[šY›Ü›\Ë”™Yœ˜XÝ[Û’[™›ÜËžJJNÂˆÚY™Yˆ‘Q”PÕSÓ“PTÌÑˆÚY™YˆTÑWÓÐÐSÔ‘Q”PÕSÓ“PTÐÕP’PÂœ™Yœ˜XÝ[Û•™XÝÜ\\˜[^ÛÜœ™XÝ›Ü›X[
œ˜YÛY[[œ]Ë”ÜÚ][Û•Ë™Yœ˜XÝ[Û•™XÝÜ‹[šY›Ü›\Ë”™Yœ˜XÝ[Û”Ú^™K[šY›Ü›\Ë”™Yœ˜XÝ[Û”ÜÚ][ÛŠNÂˆÙ[™Y‚œ™Yœ˜XÝ[Û•™XÝÜ‹žO\™Yœ˜XÝ[Û•™XÝÜ‹žJ[šY›Ü›\Ë”™Yœ˜XÝ[Û’[™›ÜËÎÝ˜\ˆ™Yœ˜XÝ[Û“ÛÚÝ\ˆ™XÍ]^\™TØ[\J™Yœ˜XÝ[ÛÝX™TØ[\\‹™Yœ˜XÝ[ÛÝX™TØ[\\”Ø[\\‹™Yœ˜XÝ[Û•™XÝÜŠNÚYˆ
Ý
™Yœ˜XÝ[Û•™XÝÜ‹šY]Ñ\™XÝ[Û•ÊOKŒ
HÜ™Yœ˜XÝ[ÛÛÛÜ\™Yœ˜XÝ[Û“ÛÚÝ\ßBˆÙ[ÙB˜\ˆ”™Yœ˜XÝ[Û•U•Îˆ™XÌÙH
[šY›Ü›\Ëœ™Yœ˜XÝ[Û“X]š^
ŠØÙ[™KšY]Êˆ™XÍŠœ˜YÛY[[œ]Ë”ÜÚ][Û•ÊÜ™Yœ˜XÝ[Û•™XÝÜŠ[šY›Ü›\Ë”™Yœ˜XÝ[Û’[™›ÜËž‹KŒ
JJKž^ŽÝ˜\ˆ™Yœ˜XÝ[ÛÛÛÜ™Îˆ™XÌ™]”™Yœ˜XÝ[Û•U•ËžKÝ”™Yœ˜XÝ[Û•U•ËžŽÜ™Yœ˜XÝ[ÛÛÛÜ™ËžOLKŒ\™Yœ˜XÝ[ÛÛÛÜ™ËžNÜ™Yœ˜XÝ[ÛÛÛÜ]^\™TØ[\J™Yœ˜XÝ[ÛŒ‘Ø[\\‹™Yœ˜XÝ[ÛŒ‘Ø[\\”Ø[\\‹™Yœ˜XÝ[ÛÛÛÜ™ÊNÂˆÙ[™Y‚ˆÚY™Yˆ‘Ð‘‘Q”PÕSÓ‚œ™Yœ˜XÝ[ÛÛÛÜ]™XÍŠœ›ÛT‘Ð‘
™Yœ˜XÝ[ÛÛÛÜŠK™Yœ˜XÝ[ÛÛÛÜ‹˜JNÂˆÙ[™Y‚ˆÚY™YˆT×Ô‘Q”PÕSÓ—ÓS‘PT‚œ™Yœ˜XÝ[ÛÛÛÜ]™XÍŠÑØ[[XTÜXÙU™XÌÊ™Yœ˜XÝ[ÛÛÛÜ‹œ™ØŠK™Yœ˜XÝ[ÛÛÛÜ‹˜JNÂˆÙ[™Y‚œ™Yœ˜XÝ[ÛÛÛÜ]™XÍŠ™Yœ˜XÝ[ÛÛÛÜ‹œ™ØŠ[šY›Ü›\Ë”™Yœ˜XÝ[Û’[™›ÜËž™Yœ˜XÝ[ÛÛÛÜ‹˜JNÂˆÙ[™Y‚˜\ˆ™Y›XÝ[ÛÛÛÜŽˆ™XÍH™XÍŠ‹‹‹KŠNÂˆÚY™Yˆ‘Q“PÕSÓ‚˜\ˆ”™Y›XÝ[Û•U•Îˆ™XÌÙXÛÛ\]T™Y›XÝ[ÛÛÛÜ™Ê™XÍŠœ˜YÛY[[œ]Ë”ÜÚ][Û•ËKŒ
K›Ü›X[ÊNÂˆÚY™Yˆ‘Q“PÕSÓ“PTÓÔÔÒUV‚”™Y›XÝ[Û•U•Ï]™XÌÙŠ”™Y›XÝ[Û•U•Ëž”™Y›XÝ[Û•U•ËžK”™Y›XÝ[Û•U•ËžŠ‹LKŒ
NÂˆÙ[™Y‚ˆÚY™Yˆ‘Q“PÕSÓ“PTÌÑˆÚY™Yˆ“ÕQÒ‘TÔÂ˜\ˆšX\ÎˆŒÌ][šY›Ü›\Ë”™Y›XÝ[Û’[™›ÜËžNÂˆÚY™YˆÔPÕST•T“BˆÚY™YˆÔPÕST‚ˆÚY™YˆÓÔÔÒS‘TÔÂ˜šX\ÊJKŒ\ÜXÝ[\“X\ÛÛÜ‹˜JNÂˆÙ[™Y‚ˆÙ[™Y‚ˆÙ[™Y‚œ™Y›XÝ[ÛÛÛÜ]^\™TØ[\S]™[
™Y›XÝ[ÛÝX™TØ[\\‹™Y›XÝ[ÛÝX™TØ[\\”Ø[\\‹”™Y›XÝ[Û•U•ËšX\ÊNÂˆÙ[ÙBœ™Y›XÝ[ÛÛÛÜ]^\™TØ[\J™Y›XÝ[ÛÝX™TØ[\\‹™Y›XÝ[ÛÝX™TØ[\\”Ø[\\‹”™Y›XÝ[Û•U•ÊNÂˆÙ[™Y‚ˆÙ[ÙB˜\ˆÛÛÜ™Îˆ™XÌ™]”™Y›XÝ[Û•U•ËžNÂˆÚY™Yˆ‘Q“PÕSÓ“PTÔ“Ò‘PÕSÓ‚˜ÛÛÜ™ËÏ]”™Y›XÝ[Û•U•ËžŽÂˆÙ[™Y‚˜ÛÛÜ™ËžOLKŒXÛÛÜ™ËžNÜ™Y›XÝ[ÛÛÛÜ]^\™TØ[\J™Y›XÝ[ÛŒ‘Ø[\\‹™Y›XÝ[ÛŒ‘Ø[\\”Ø[\\‹ÛÛÜ™ÊNÂˆÙ[™Y‚ˆÚY™Yˆ‘Ð‘‘Q“PÕSÓ‚œ™Y›XÝ[ÛÛÛÜ]™XÍŠœ›ÛT‘Ð‘
™Y›XÝ[ÛÛÛÜŠK™Y›XÝ[ÛÛÛÜ‹˜JNÂˆÙ[™Y‚ˆÚY™YˆT×Ô‘Q“PÕSÓ—ÓS‘PT‚œ™Y›XÝ[ÛÛÛÜ]™XÍŠÑØ[[XTÜXÙU™XÌÊ™Y›XÝ[ÛÛÛÜ‹œ™ØŠK™Y›XÝ[ÛÛÛÜ‹˜JNÂˆÙ[™Y‚œ™Y›XÝ[ÛÛÛÜ]™XÍŠ™Y›XÝ[ÛÛÛÜ‹œ™ØŠ[šY›Ü›\Ë”™Y›XÝ[Û’[™›ÜËž™Y›XÝ[ÛÛÛÜ‹˜JNÂˆÚY™Yˆ‘Q“PÕSÓ‘”‘TÓ‘S˜\ˆ™Y›XÝ[Û‘œ™\Û™[\›NˆŒÌXÛÛ\]Qœ™\Û™[\›JšY]Ñ\™XÝ[Û•Ë›Ü›X[Ë[šY›Ü›\Ëœ™Y›XÝ[Û”šYÚÛÛÜ‹˜K[šY›Ü›\Ëœ™Y›XÝ[Û“YÛÛÜ‹˜JNÂˆÚY™Yˆ‘Q“PÕSÓ‘”‘TÓ‘S”“ÓTÔPÕST‚ˆÚY™YˆÔPÕST•T“Bœ™Y›XÝ[ÛÛÛÜ]™XÍŠ™Y›XÝ[ÛÛÛÜ‹œ™ØŠœÜXÝ[\ÛÛÜ‹œ™ØŠŠKŒ\™Y›XÝ[Û‘œ™\Û™[\›JJÜ™Y›XÝ[Û‘œ™\Û™[\›J[šY›Ü›\Ëœ™Y›XÝ[Û”šYÚÛÛÜ‹œ™Ø‹™Y›XÝ[ÛÛÛÜ‹˜JNÂˆÙ[ÙBœ™Y›XÝ[ÛÛÛÜ]™XÍŠ™Y›XÝ[ÛÛÛÜ‹œ™ØŠ[šY›Ü›\Ëœ™Y›XÝ[Û“YÛÛÜ‹œ™ØŠŠKŒ\™Y›XÝ[Û‘œ™\Û™[\›JJÜ™Y›XÝ[Û‘œ™\Û™[\›J[šY›Ü›\Ëœ™Y›XÝ[Û”šYÚÛÛÜ‹œ™Ø‹™Y›XÝ[ÛÛÛÜ‹˜JNÂˆÙ[™Y‚ˆÙ[ÙBœ™Y›XÝ[ÛÛÛÜ]™XÍŠ™Y›XÝ[ÛÛÛÜ‹œ™ØŠ[šY›Ü›\Ëœ™Y›XÝ[Û“YÛÛÜ‹œ™ØŠŠKŒ\™Y›XÝ[Û‘œ™\Û™[\›JJÜ™Y›XÝ[Û‘œ™\Û™[\›J[šY›Ü›\Ëœ™Y›XÝ[Û”šYÚÛÛÜ‹œ™Ø‹™Y›XÝ[ÛÛÛÜ‹˜JNÂˆÙ[™Y‚ˆÙ[™Y‚ˆÙ[™Y‚ˆÚY™Yˆ‘Q”PÕSÓ‘”‘TÓ‘S˜\ˆ™Yœ˜XÝ[Û‘œ™\Û™[\›NˆŒÌXÛÛ\]Qœ™\Û™[\›JšY]Ñ\™XÝ[Û•Ë›Ü›X[Ë[šY›Ü›\Ëœ™Yœ˜XÝ[Û”šYÚÛÛÜ‹˜K[šY›Ü›\Ëœ™Yœ˜XÝ[Û“YÛÛÜ‹˜JNÜ™Yœ˜XÝ[ÛÛÛÜ]™XÍŠ™Yœ˜XÝ[ÛÛÛÜ‹œ™ØŠ[šY›Ü›\Ëœ™Yœ˜XÝ[Û“YÛÛÜ‹œ™ØŠŠKŒ\™Yœ˜XÝ[Û‘œ™\Û™[\›JJÜ™Yœ˜XÝ[Û‘œ™\Û™[\›J[šY›Ü›\Ëœ™Yœ˜XÝ[Û”šYÚÛÛÜ‹œ™Ø‹™Yœ˜XÝ[ÛÛÛÜ‹˜JNÂˆÙ[™Y‚ˆÚY™YˆÔPÒUB˜\ˆÜXÚ]SX\ˆ™XÍUV‘
ÜXÚ]TØ[\\‹ÜXÚ]TØ[\\”Ø[\\‹œ˜YÛY[[œ]Ë“ÜXÚ]UUŠÝ]“Ù™œÙ]
NÂˆÚY™YˆÔPÒUT‘Ð‚›ÜXÚ]SX\]™XÍŠÜXÚ]SX\œ™ØŠˆ™XÌÙŠŒËNKŒLJKÜXÚ]SX\˜JNØ[JJÜXÚ]SX\ž
ÛÜXÚ]SX\žJÛÜXÚ]SX\žŠJˆ[šY›Ü›\Ë“ÜXÚ]R[™›ÜËžNÂˆÙ[ÙB˜[J[ÜXÚ]SX\˜J[šY›Ü›\Ë“ÜXÚ]R[™›ÜËžNÂˆÙ[™Y‚ˆÙ[™Y‚ˆÚYˆYš[™Y
‘T•VSJHYš[™Y
S”ÕSÑTÐÓÓÔŠH	‰ˆYš[™Y
S”ÕSÑTÊB˜[JYœ˜YÛY[[œ]ËÛÛÜ‹˜NÂˆÙ[™Y‚ˆÚY™YˆÔPÒUQ”‘TÓ‘S˜\ˆÜXÚ]Qœ™\Û™[\›NˆŒÌXÛÛ\]Qœ™\Û™[\›JšY]Ñ\™XÝ[Û•Ë›Ü›X[Ë[šY›Ü›\Ë›ÜXÚ]T\Ëž‹[šY›Ü›\Ë›ÜXÚ]T\ËÊNØ[JÏ][šY›Ü›\Ë›ÜXÚ]T\Ëž
ŠKŒ[ÜXÚ]Qœ™\Û™[\›JJÛÜXÚ]Qœ™\Û™[\›J[šY›Ü›\Ë›ÜXÚ]T\ËžNÂˆÙ[™Y‚ˆÚY™YˆSUTÕˆÚY™YˆSUTÕÐQ•TSSPÓÓTUUSÓ”ÂšYˆ
[O[šY›Ü›\Ë˜[PÝ]Ù™ŠHÙ\ØØ\™ßBˆÙ[™Y‚ˆÚY›™YˆSP“S‘˜[OLKŒÂˆÙ[™Y‚ˆÙ[™Y‚˜\ˆ[Z\ÜÚ]™PÛÛÜŽˆ™XÌÙ][šY›Ü›\Ë‘[Z\ÜÚ]™PÛÛÜŽÂˆÚY™YˆSRTÔÒU‘B™[Z\ÜÚ]™PÛÛÜŠÏUV‘
[Z\ÜÚ]™TØ[\\‹[Z\ÜÚ]™TØ[\\”Ø[\\‹œ˜YÛY[[œ]Ë‘[Z\ÜÚ]™UUŠÝ]“Ù™œÙ]
Kœ™ØŠ[šY›Ü›\Ë‘[Z\ÜÚ]™R[™›ÜËžNÂˆÙ[™Y‚ˆÚY™YˆSRTÔÒU‘Q”‘TÓ‘S˜\ˆ[Z\ÜÚ]™Qœ™\Û™[\›NˆŒÌXÛÛ\]Qœ™\Û™[\›JšY]Ñ\™XÝ[Û•Ë›Ü›X[Ë[šY›Ü›\Ë™[Z\ÜÚ]™TšYÚÛÛÜ‹˜K[šY›Ü›\Ë™[Z\ÜÚ]™SYÛÛÜ‹˜JNÙ[Z\ÜÚ]™PÛÛÜŠ][šY›Ü›\Ë™[Z\ÜÚ]™SYÛÛÜ‹œ™ØŠŠKŒY[Z\ÜÚ]™Qœ™\Û™[\›JJÙ[Z\ÜÚ]™Qœ™\Û™[\›J[šY›Ü›\Ë™[Z\ÜÚ]™TšYÚÛÛÜ‹œ™ØŽÂˆÙ[™Y‚ˆÚY™YˆQ‘•TÑQ”‘TÓ‘S˜\ˆY™\ÙQœ™\Û™[\›NˆŒÌXÛÛ\]Qœ™\Û™[\›JšY]Ñ\™XÝ[Û•Ë›Ü›X[Ë[šY›Ü›\Ë™Y™\ÙTšYÚÛÛÜ‹˜K[šY›Ü›\Ë™Y™\ÙSYÛÛÜ‹˜JNÙY™\ÙP˜\ÙJ][šY›Ü›\Ë™Y™\ÙSYÛÛÜ‹œ™ØŠŠKŒYY™\ÙQœ™\Û™[\›JJÙY™\ÙQœ™\Û™[\›J[šY›Ü›\Ë™Y™\ÙTšYÚÛÛÜ‹œ™ØŽÂˆÙ[™Y‚ˆÚY™YˆSRTÔÒU‘PTÒSSRSUSÓ‚˜\ˆš[˜[Y™\ÙNˆ™XÌÙXÛ[\
Y™\ÙP˜\ÙJ™Y™\ÙPÛÛÜŠÝ[šY›Ü›\Ë[XšY[ÛÛÜ‹™XÌÙŠŒ
K™XÌÙŠKŒ
JJ˜˜\ÙPÛÛÜ‹œ™ØŽÂˆÙ[ÙBˆÚY™YˆS’ÑSRTÔÒU‘UÒUQ‘•TÑB˜\ˆš[˜[Y™\ÙNˆ™XÌÙXÛ[\

Y™\ÙP˜\ÙJÙ[Z\ÜÚ]™PÛÛÜŠJ™Y™\ÙPÛÛÜŠÝ[šY›Ü›\Ë[XšY[ÛÛÜ‹™XÌÙŠŒ
K™XÌÙŠKŒ
JJ˜˜\ÙPÛÛÜ‹œ™ØŽÂˆÙ[ÙB˜\ˆš[˜[Y™\ÙNˆ™XÌÙXÛ[\
Y™\ÙP˜\ÙJ™Y™\ÙPÛÛÜŠÙ[Z\ÜÚ]™PÛÛÜŠÝ[šY›Ü›\Ë[XšY[ÛÛÜ‹™XÌÙŠŒ
K™XÌÙŠKŒ
JJ˜˜\ÙPÛÛÜ‹œ™ØŽÂˆÙ[™Y‚ˆÙ[™Y‚ˆÚY™YˆÔPÕST•T“B˜\ˆš[˜[ÜXÝ[\Žˆ™XÌÙ\ÜXÝ[\˜\ÙJœÜXÝ[\ÛÛÜŽÂˆÚY™YˆÔPÕST“Õ‘TSB˜[OXÛ[\
[JÙÝ
š[˜[ÜXÝ[\‹™XÌÙŠŒËNKŒLJJKŒKŒ
NÂˆÙ[™Y‚ˆÙ[ÙB˜\ˆš[˜[ÜXÝ[\Žˆ™XÌÙH™XÌÙŠŒ
NÂˆÙ[™Y‚ˆÚY™Yˆ‘Q“PÕSÓ“Õ‘TSB˜[OXÛ[\
[JÙÝ
™Y›XÝ[ÛÛÛÜ‹œ™Ø‹™XÌÙŠŒËNKŒLJJKŒKŒ
NÂˆÙ[™Y‚ˆÚY™YˆSRTÔÒU‘PTÒSSRSUSÓ‚˜\ˆÛÛÜŽˆ™XÍH™XÍŠÛ[\
š[˜[Y™\ÙJ˜˜\ÙP[XšY[ÛÛÜŠÙš[˜[ÜXÝ[\ŠÜ™Y›XÝ[ÛÛÛÜ‹œ™ØŠÙ[Z\ÜÚ]™PÛÛÜŠÜ™Yœ˜XÝ[ÛÛÛÜ‹œ™Ø‹™XÌÙŠŒ
K™XÌÙŠKŒ
JK[JNÂˆÙ[ÙB˜\ˆÛÛÜŽˆ™XÍH™XÍŠš[˜[Y™\ÙJ˜˜\ÙP[XšY[ÛÛÜŠÙš[˜[ÜXÝ[\ŠÜ™Y›XÝ[ÛÛÛÜ‹œ™ØŠÜ™Yœ˜XÝ[ÛÛÛÜ‹œ™Ø‹[JNÂˆÙ[™Y‚ˆÚY™YˆQÒPTˆÚY›™YˆQÒPTVÓQQˆÚY™YˆTÑSQÒPTTÔÒQÕÓPT˜ÛÛÜ]™XÍŠÛÛÜ‹œ™ØŠ›YÚX\ÛÛÜ‹œ™Ø‹ÛÛÜ‹˜JNÂˆÙ[ÙB˜ÛÛÜ]™XÍŠÛÛÜ‹œ™ØŠÛYÚX\ÛÛÜ‹œ™Ø‹ÛÛÜ‹˜JNÂˆÙ[™Y‚ˆÙ[™Y‚ˆÙ[™Y‚ˆÙYš[™HÕTÕÓWÑ”QÓQS•Ð‘Q“Ô‘WÑ“ÑÂ˜ÛÛÜ]™XÍŠX^
ÛÛÜ‹œ™Ø‹™XÌÙŠŠJKÛÛÜ‹˜JNÂˆÚ[˜ÛYOÙÑ\œ˜YÛY[‚ˆÚ[˜ÛYO›ÙÑœ˜YÛY[‚ˆÚY™YˆSPQÑT“ÐÑTÔÒS‘ÔÔÕ“ÐÑTÔÂ˜ÛÛÜ]™XÍŠÓ[™X\”ÜXÙU™XÌÊÛÛÜ‹œ™ØŠKÛÛÜ‹˜JNÂˆÙ[ÙBˆÚY™YˆSPQÑT“ÐÑTÔÒS‘Â˜ÛÛÜ]™XÍŠÓ[™X\”ÜXÙU™XÌÊÛÛÜ‹œ™ØŠKÛÛÜ‹˜JNØÛÛÜX\R[XYÙT›ØÙ\ÜÚ[™ÊÛÛÜŠNÂˆÙ[™Y‚ˆÙ[™Y‚˜ÛÛÜ]™XÍŠÛÛÜ‹œ™Ø‹ÛÛÜ‹˜J›Y\Úš\ÚXš[]JNÂˆÚY™Yˆ‘SUSTPSB˜ÛÛÜ]™XÍŠÛÛÜ‹œ™ØŠ˜ÛÛÜ‹˜KÛÛÜ‹˜JNÂˆÙ[™Y‚ˆÙYš[™HÕTÕÓWÑ”QÓQS•Ð‘Q“Ô‘WÑ”QÐÓÓÔ‚ˆÚY™Yˆ‘TTÔÂˆÚYˆÐÑS‘WÓT•ÐÓÕS•Œ˜\ˆÜš]QÙ[ÛY]žR[™›ÎˆŒÌ\Ù[XÝ
ŒKŒÛÛÜ‹˜OŒ
NÝ˜\ˆœ˜YÑ]Nˆ\œ˜^O™XÍŒÌ‹ÐÑS‘WÓT•ÐÓÕS•ŽÂˆÚY™Yˆ‘TTÔ×ÐÓÓÔ‚™œ˜YÑ]VÔ‘TTÔ×ÐÓÓÔ—ÒS‘VOXÛÛÜŽÈˆÙ[™Y‚ˆÚY™Yˆ‘TTÔ×ÔÔÒUSÓ‚™œ˜YÑ]VÔ‘TTÔ×ÔÔÒUSÓ—ÒS‘VO]™XÍŠœ˜YÛY[[œ]Ë”ÜÚ][Û•ËÜš]QÙ[ÛY]žR[™›ÊNÂˆÙ[™Y‚ˆÚY™Yˆ‘TTÔ×ÓÐÐSÔÔÒUSÓ‚™œ˜YÑ]VÔ‘TTÔ×ÓÐÐSÔÔÒUSÓ—ÒS‘VO]™XÍŠœ˜YÛY[[œ]Ë”ÜÚ][Û‹Üš]QÙ[ÛY]žR[™›ÊNÂˆÙ[™Y‚ˆÚY™Yˆ‘TTÔ×Õ‘SÐÒUB˜\ˆNˆ™XÌ™Jœ˜YÛY[[œ]ËÝ\œ™[ÜÚ][Û‹žKÙœ˜YÛY[[œ]ËÝ\œ™[ÜÚ][Û‹ÊJŒJÌNÝ˜\ˆŽˆ™XÌ™Jœ˜YÛY[[œ]Ë”™]š[Ý\ÔÜÚ][Û‹žKÙœ˜YÛY[[œ]Ë”™]š[Ý\ÔÜÚ][Û‹ÊJŒJÌNÝ˜\ˆ™[ØÚ]Nˆ™XÌ™XXœÊKXŠNÝ™[ØÚ]OH™XÌ™ŠÝÊ™[ØÚ]KžKŒÌËŒ
KÝÊ™[ØÚ]KžKKŒÌËŒ
JJœÚYÛŠKXŠJŒJÌNÙœ˜YÑ]VÔ‘TTÔ×Õ‘SÐÒUWÒS‘VOH™XÍŠ™[ØÚ]KŒÜš]QÙ[ÛY]žR[™›ÊNÂˆÙ[YˆYš[™Y
‘TTÔ×Õ‘SÐÒUWÓS‘PTŠB˜\ˆ™[ØÚ]Hˆ™XÌ™]™XÌ™ŠJJŠ
œ˜YÛY[[œ]Ë”™]š[Ý\ÔÜÚ][Û‹žKÙœ˜YÛY[[œ]Ë”™]š[Ý\ÔÜÚ][Û‹ÊHBŠœ˜YÛY[[œ]ËÝ\œ™[ÜÚ][Û‹žKÙœ˜YÛY[[œ]ËÝ\œ™[ÜÚ][Û‹ÊJNÙœ˜YÑ]VÔ‘TTÔ×Õ‘SÐÒUWÓS‘PT—ÒS‘VO]™XÍŠ™[ØÚ]KŒÜš]QÙ[ÛY]žR[™›ÊNÂˆÙ[™Y‚ˆÚY™Yˆ‘TTÔ×ÒT”QPSÑB™œ˜YÑ]VÔ‘TTÔ×ÒT”QPSÑWÒS‘VO]™XÍŠŒŒŒÜš]QÙ[ÛY]žR[™›ÊNÈˆÙ[™Y‚ˆÚY™Yˆ‘TTÔ×ÑT™œ˜YÑ]VÔ‘TTÔ×ÑTÒS‘VO]™XÍŠœ˜YÛY[[œ]Ë•šY]ÔÜËž‹ŒŒÜš]QÙ[ÛY]žR[™›ÊNÈˆÙ[™Y‚ˆÚY™Yˆ‘TTÔ×ÔÐÔ‘QS”ÔPÑWÑT™œ˜YÑ]VÔ‘TTÔ×ÔÐÔ‘QS”ÔPÑWÑTÒS‘VO]™XÍŠœ˜YÛY[[œ]ËœÜÚ][Û‹ž‹ŒŒÜš]QÙ[ÛY]žR[™›ÊNÂˆÙ[™Y‚ˆÚY™Yˆ‘TTÔ×Ó“Ô“PSV‘QÕ’QU×ÑT™œ˜YÑ]VÔ‘TTÔ×Ó“Ô“PSV‘QÕ’QU×ÑTÒS‘VO]™XÍŠœ˜YÛY[[œ]Ë“›Ü›UšY]Ñ\ŒŒÜš]QÙ[ÛY]žR[™›ÊNÂˆÙ[™Y‚ˆÚY™Yˆ‘TTÔ×Ó“Ô“PSˆÚY™Yˆ‘TTÔ×Ó“Ô“PSÕÓÔ“ÔPÑB™œ˜YÑ]VÔ‘TTÔ×Ó“Ô“PSÒS‘VO]™XÍŠ›Ü›X[ËÜš]QÙ[ÛY]žR[™›ÊNÂˆÙ[ÙB™œ˜YÑ]VÔ‘TTÔ×Ó“Ô“PSÒS‘VO]™XÍŠ›Ü›X[^™J
ØÙ[™KšY]Ê™XÍŠ›Ü›X[ËŒ
JKœ™ØŠKÜš]QÙ[ÛY]žR[™›ÊNÂˆÙ[™Y‚ˆÙ[™Y‚ˆÚY™Yˆ‘TTÔ×ÕÓÔ“Ó“Ô“PS™œ˜YÑ]VÔ‘TTÔ×ÕÓÔ“Ó“Ô“PSÒS‘VO]™XÍŠ›Ü›X[ÊŒJÌKÜš]QÙ[ÛY]žR[™›ÊNÂˆÙ[™Y‚ˆÚY™Yˆ‘TTÔ×ÐS‘QÂ™œ˜YÑ]VÔ‘TTÔ×ÐS‘Q×ÒS‘VO]™XÍŠ˜\ÙPÛÛÜ‹œ™Ø‹Üš]QÙ[ÛY]žR[™›ÊNÂˆÙ[™Y‚ˆÚY™Yˆ‘TTÔ×ÐS‘Q×ÔÔT•™œ˜YÑ]VÔ‘TTÔ×ÐS‘Q×ÔÔT•ÒS‘VO]™XÍŠÜ\
˜\ÙPÛÛÜ‹œ™ØŠKÜš]QÙ[ÛY]žR[™›ÊNÂˆÙ[™Y‚ˆÚY™Yˆ‘TTÔ×Ô‘Q“PÕU’UBˆÚYˆYš[™Y
ÔPÕSTŠB™œ˜YÑ]VÔ‘TTÔ×Ô‘Q“PÕU’UWÒS‘VO]™XÍŠÓ[™X\”ÜXÙU™XÍ
ÜXÝ[\“X\ÛÛÜŠJJÜš]QÙ[ÛY]žR[™›ÎÈˆÙ[ÙB™œ˜YÑ]VÔ‘TTÔ×Ô‘Q“PÕU’UWÒS‘VO]™XÍŠÓ[™X\”ÜXÙU™XÌÊÜXÝ[\ÛÛÜŠKKŒ
JÜš]QÙ[ÛY]žR[™›ÎÂˆÙ[™Y‚ˆÙ[™Y‚ˆÚYˆÐÑS‘WÓT•ÐÓÕS•Œ™œ˜YÛY[Ý]]Ë™œ˜YÑ]LYœ˜YÑ]VÌNÂˆÙ[™Y‚ˆÚYˆÐÑS‘WÓT•ÐÓÕS•ŒB™œ˜YÛY[Ý]]Ë™œ˜YÑ]LOYœ˜YÑ]VÌWNÂˆÙ[™Y‚ˆÚYˆÐÑS‘WÓT•ÐÓÕS•Œ‚™œ˜YÛY[Ý]]Ë™œ˜YÑ]LYœ˜YÑ]VÌ—NÂˆÙ[™Y‚ˆÚYˆÐÑS‘WÓT•ÐÓÕS•ŒÂ™œ˜YÛY[Ý]]Ë™œ˜YÑ]LÏYœ˜YÑ]VÌ×NÂˆÙ[™Y‚ˆÚYˆÐÑS‘WÓT•ÐÓÕS•™œ˜YÛY[Ý]]Ë™œ˜YÑ]MYœ˜YÑ]VÍNÂˆÙ[™Y‚ˆÚYˆÐÑS‘WÓT•ÐÓÕS•B™œ˜YÛY[Ý]]Ë™œ˜YÑ]MOYœ˜YÑ]VÍWNÂˆÙ[™Y‚ˆÚYˆÐÑS‘WÓT•ÐÓÕS•‚™œ˜YÛY[Ý]]Ë™œ˜YÑ]MYœ˜YÑ]VÍ—NÂˆÙ[™Y‚ˆÚYˆÐÑS‘WÓT•ÐÓÕS•Â™œ˜YÛY[Ý]]Ë™œ˜YÑ]MÏYœ˜YÑ]VÍ×NÂˆÙ[™Y‚ˆÙ[™Y‚ˆÙ[™Y‚ˆÚYˆYYš[™Y
‘TTÔÊH	‰ˆYYš[™Y
Ô‘T—ÒS‘TS‘S•ÕS”ÔT‘SÖJB™œ˜YÛY[Ý]]Ë˜ÛÛÜXÛÛÜŽÂˆÙ[™Y‚ˆÚ[˜ÛYOÚ]œ˜YÛY[‚ˆÚYˆÔ‘T—ÒS‘TS‘S•ÕS”ÔT‘SÖBšYˆ
œ˜YÑ\O[™X\™\Ý\
HÙœ˜YÛY[Ý]]Ë™œ›ÛÛÛÜ]™XÍŠœ˜YÛY[Ý]]Ë™œ›ÛÛÛÜ‹œ™ØŠØÛÛÜ‹œ™ØŠ˜ÛÛÜ‹˜J˜[S][\Y\‹KŒX[S][\Y\ŠŠKŒXÛÛÜ‹˜JJNßH[ÙHÙœ˜YÛY[Ý]]Ë˜˜XÚÐÛÛÜŠÏXÛÛÜŽßBˆÙ[™Y‚ˆÙYš[™HÕTÕÓWÑ”QÓQS•ÓPRS—ÑS‘ˆÙ[™Y‚ŸB˜ÜK”ÚY\œÔÝÜ™UÑÔÓÝ—_
K”ÚY\œÔÝÜ™UÑÔÓÝ—ORLJNØÛÛœÝVÒÝ‹‹ÓK•K•K“K]‹•KÕKÕKKÕKKUKUK•KÕK•KUK	K•K‹	K	K‹P‹‹P‹Ð‹LKË—NÙ›ÜŠÛÛœÝˆÙˆŠ\K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÜ‹›˜[YW_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÜ‹›˜[YWO\‹œÚY\ŠNØÛÛœÝP^Û˜[YN‹ÚY\Ž’L_KÐSØš™XÝ™œ™Y^™JØš™XÝ™Yš[™T›Ü\J××Ü›Ý××Î›[Y˜][^[ÚY\•ÑÔÓ˜PŸKÞ[X›ÛÔÝš[™ÕYËÝ˜[YNˆ“[Ù[HŸJJK]H›[™U™\^ÚY\ˆ‹ÌOXÙYš[™HQUSÓSÕ‘T•VÑPÓTUSÓ‚ˆÚ[˜ÛYO[œÝ[˜Ù\ÑXÛ\˜][Û‚ˆÚ[˜ÛYOÛ\[™U™\^XÛ\˜][Û‚ˆÚ[˜ÛYOØÙ[™UX›ÑXÛ\˜][Û‚ˆÚ[˜ÛYOY\ÚX›ÑXÛ\˜][Û‚˜]šX]HÜÚ][ÛŽˆ™XÌÙŽØ]šX]H›Ü›X[ˆ™XÍŽÝ[šY›Ü›HÚYˆŒÌŽÝ[šY›Ü›H\ÜXÝ˜][ÎˆŒÌŽÂˆÚ[˜ÛYOÙÑ\XÛ\˜][Û‚ˆÙYš[™HÕTÕÓWÕ‘T•VÑQ’S’USÓ”Â™\^™›ˆXZ[Š[œ]ˆ™\^[œ]ÊKO‘œ˜YÛY[[œ]ÈÂˆÙYš[™HÕTÕÓWÕ‘T•VÓPRS—Ð‘QÒS‚ˆÚ[˜ÛYO[œÝ[˜Ù\Õ™\^‚˜\ˆÛÜ›šY]Ô›Ú™XÝ[ÛŽˆX]\ØÙ[™KšY]Ô›Ú™XÝ[ÛŠ™š[˜[ÛÜ›Ý˜\ˆšY]ÔÜÚ][ÛŽˆ™XÍ]ÛÜ›šY]Ô›Ú™XÝ[ÛŠˆ™XÍŠ™\^[œ]ËœÜÚ][Û‹KŒ
NÝ˜\ˆšY]ÔÜÚ][Û“™^ˆ™XÍ]ÛÜ›šY]Ô›Ú™XÝ[ÛŠˆ™XÍŠ™\^[œ]Ë››Ü›X[ž^‹KŒ
NÝ˜\ˆÝ\œ™[ØÜ™Y[Žˆ™XÌ™]šY]ÔÜÚ][Û‹žKÝšY]ÔÜÚ][Û‹ÎÝ˜\ˆ™^ØÜ™Y[Žˆ™XÌ™]šY]ÔÜÚ][Û“™^žKÝšY]ÔÜÚ][Û“™^ÎØÝ\œ™[ØÜ™Y[]™XÌ™ŠÝ\œ™[ØÜ™Y[‹ž
[šY›Ü›\Ë˜\ÜXÝ˜][ËÝ\œ™[ØÜ™Y[‹žJNÛ™^ØÜ™Y[]™XÌ™Š™^ØÜ™Y[‹ž
[šY›Ü›\Ë˜\ÜXÝ˜][Ë™^ØÜ™Y[‹žJNÝ˜\ˆ\Žˆ™XÌ™[›Ü›X[^™J™^ØÜ™Y[‹XÝ\œ™[ØÜ™Y[ŠNÝ˜\ˆ›Ü›X[\Žˆ™XÌ™H™XÌ™ŠY\‹žK\‹ž
NÛ›Ü›X[\Š][šY›Ü›\ËÚYÌ‹ŒÛ›Ü›X[\]™XÌ™Š›Ü›X[\‹žÝ[šY›Ü›\Ë˜\ÜXÝ˜][Ë›Ü›X[\‹žJNÝ˜\ˆÙ™œÙ]ˆ™XÍH™XÍŠ›Ü›X[\Š™\^[œ]Ë››Ü›X[ËŒŒ
NÝ™\^Ý]]ËœÜÚ][Û]šY]ÔÜÚ][ÛŠÛÙ™œÙ]ÂˆÚYˆYš[™Y
ÓTS‘JHYš[™Y
ÓTS‘LŠHYš[™Y
ÓTS‘LÊHYš[™Y
ÓTS‘M
HYš[™Y
ÓTS‘MJHYš[™Y
ÓTS‘MŠB˜\ˆÛÜ›ÜÎˆ™XÍYš[˜[ÛÜ›
™XÍŠ™\^[œ]ËœÜÚ][Û‹KŒ
NÂˆÚ[˜ÛYOÛ\[™U™\^‚ˆÙ[™Y‚ˆÚ[˜ÛYOÙÑ\™\^‚ˆÙYš[™HÕTÕÓWÕ‘T•VÓPRS—ÑS‘ŸXÜK”ÚY\œÔÝÜ™UÑÔÓÚ]—_
K”ÚY\œÔÝÜ™UÑÔÓÚ]—OPÌJNØÛÛœÝVÑ‹‹Ý‹‹	K‹]‹LWNÙ›ÜŠÛÛœÝˆÙˆŠ\K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÜ‹›˜[YW_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÜ‹›˜[YWO\‹œÚY\ŠNØÛÛœÝÐ^Û˜[YNš]‹ÚY\ŽÌ_KSØš™XÝ™œ™Y^™JØš™XÝ™Yš[™T›Ü\J××Ü›Ý××Î›[[™U™\^ÚY\•ÑÔÓ˜ÐŸKÞ[X›ÛÔÝš[™ÕYËÝ˜[YNˆ“[Ù[HŸJJKÝH›[™T^[ÚY\ˆ‹LOXÚ[˜ÛYOÛ\[™Qœ˜YÛY[XÛ\˜][Û‚[šY›Ü›HÛÛÜŽˆ™XÍŽÂˆÚ[˜ÛYOÙÑ\XÛ\˜][Û‚ˆÙYš[™HÕTÕÓWÑ”QÓQS•ÑQ’S’USÓ”Âœ˜YÛY[™›ˆXZ[Š[œ]ˆœ˜YÛY[[œ]ÊKO‘œ˜YÛY[Ý]]ÈÂˆÙYš[™HÕTÕÓWÑ”QÓQS•ÓPRS—Ð‘QÒS‚ˆÚ[˜ÛYOÙÑ\œ˜YÛY[‚ˆÚ[˜ÛYOÛ\[™Qœ˜YÛY[‚™œ˜YÛY[Ý]]Ë˜ÛÛÜ][šY›Ü›\Ë˜ÛÛÜŽÂˆÙYš[™HÕTÕÓWÑ”QÓQS•ÓPRS—ÑS‘ŸXÜK”ÚY\œÔÝÜ™UÑÔÓÜÝ—_
K”ÚY\œÔÝÜ™UÑÔÓÜÝ—OSLJNØÛÛœÝVÐ‹	KLK—NÙ›ÜŠÛÛœÝˆÙˆŠ\K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÜ‹›˜[YW_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÜ‹›˜[YWO\‹œÚY\ŠNØÛÛœÝP^Û˜[YNœÝ‹ÚY\Ž“L_KSØš™XÝ™œ™Y^™JØš™XÝ™Yš[™T›Ü\J××Ü›Ý××Î›[[™T^[ÚY\•ÑÔÓPŸKÞ[X›ÛÔÝš[™ÕYËÝ˜[YNˆ“[Ù[HŸJJKH›[™U™\^XÛ\˜][Ûˆ‹OX[šY›Ü›HX]šY]Ô›Ú™XÝ[ÛŽÂˆÙYš[™HQUSÓSÕ‘T•VÑPÓTUSÓ‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VÜ—_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÜ—OQJNØÛÛœÝÐ^Û˜[YNœ‹ÚY\Ž‘_KH›[™UX›ÑXÛ\˜][Ûˆ‹OX^[Ý]
ÝMÛÛ[[—ÛXZ›ÜŠH[šY›Ü›NÂˆÚ[˜ÛYOØÙ[™UX›ÑXÛ\˜][Û‚ˆÚ[˜ÛYOY\ÚX›ÑXÛ\˜][Û‚˜ÜK’[˜ÛY\ÔÚY\œÔÝÜ™VÛ—_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÛ—OTJNØÛÛœÝP^Û˜[YN›‹ÚY\Ž”_K]H›[™U™\^ÚY\ˆ‹ÌOXÚ[˜ÛYO×ÙXÛ×Û[™U™\^‚ˆÚ[˜ÛYO[œÝ[˜Ù\ÑXÛ\˜][Û‚ˆÚ[˜ÛYOÛ\[™U™\^XÛ\˜][Û‚˜]šX]H™XÌÈÜÚ][ÛŽØ]šX]H™XÍ›Ü›X[Ý[šY›Ü›H›Ø]ÚYÝ[šY›Ü›H›Ø]\ÜXÝ˜][ÎÂˆÚ[˜ÛYOÙÑ\XÛ\˜][Û‚ˆÙYš[™HÕTÕÓWÕ‘T•VÑQ’S’USÓ”Â›ÚYXZ[Š›ÚY
HÂˆÙYš[™HÕTÕÓWÕ‘T•VÓPRS—Ð‘QÒS‚ˆÚ[˜ÛYO[œÝ[˜Ù\Õ™\^‚›X]ÛÜ›šY]Ô›Ú™XÝ[Û]šY]Ô›Ú™XÝ[ÛŠ™š[˜[ÛÜ›Ý™XÍšY]ÔÜÚ][Û]ÛÜ›šY]Ô›Ú™XÝ[ÛŠ™XÍ
ÜÚ][Û‹KŒ
NÝ™XÍšY]ÔÜÚ][Û“™^]ÛÜ›šY]Ô›Ú™XÝ[ÛŠ™XÍ
›Ü›X[ž^‹KŒ
NÝ™XÌˆÝ\œ™[ØÜ™Y[]šY]ÔÜÚ][Û‹žKÝšY]ÔÜÚ][Û‹ÎÝ™XÌˆ™^ØÜ™Y[]šY]ÔÜÚ][Û“™^žKÝšY]ÔÜÚ][Û“™^ÎØÝ\œ™[ØÜ™Y[‹ž
X\ÜXÝ˜][ÎÛ™^ØÜ™Y[‹ž
X\ÜXÝ˜][ÎÝ™XÌˆ\[›Ü›X[^™J™^ØÜ™Y[‹XÝ\œ™[ØÜ™Y[ŠNÝ™XÌˆ›Ü›X[\]™XÌŠY\‹žK\‹ž
NÛ›Ü›X[\Š]ÚYÌ‹ŒÛ›Ü›X[\‹žÏX\ÜXÝ˜][ÎÝ™XÍÙ™œÙ]]™XÍ
›Ü›X[\Š››Ü›X[ËŒŒ
NÙÛÔÜÚ][Û]šY]ÔÜÚ][ÛŠÛÙ™œÙ]ÂˆÚYˆYš[™Y
ÓTS‘JHYš[™Y
ÓTS‘LŠHYš[™Y
ÓTS‘LÊHYš[™Y
ÓTS‘M
HYš[™Y
ÓTS‘MJHYš[™Y
ÓTS‘MŠB™XÍÛÜ›ÜÏYš[˜[ÛÜ›
™XÍ
ÜÚ][Û‹KŒ
NÂˆÚ[˜ÛYOÛ\[™U™\^‚ˆÙ[™Y‚ˆÚ[˜ÛYOÙÑ\™\^‚ˆÙYš[™HÕTÕÓWÕ‘T•VÓPRS—ÑS‘ŸXÜK”ÚY\œÔÝÜ™VØ]—_
K”ÚY\œÔÝÜ™VØ]—O]ÌJNØÛÛœÝV×Ð‹]‹]‹P‹Ý‹‹]KÝ‹‹SWNÙ›ÜŠÛÛœÝˆÙˆŠ\K’[˜ÛY\ÔÚY\œÔÝÜ™VÜ‹›˜[YW_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÜ‹›˜[YWO\‹œÚY\ŠNØÛÛœÝÐ^Û˜[YN˜]‹ÚY\ŽÌ_KSØš™XÝ™œ™Y^™JØš™XÝ™Yš[™T›Ü\J××Ü›Ý××Î›[[™U™\^ÚY\Ž™ÐŸKÞ[X›ÛÔÝš[™ÕYËÝ˜[YNˆ“[Ù[HŸJJKÝH›[™T^[ÚY\ˆ‹ÌOXÚ[˜ÛYOÛ\[™Qœ˜YÛY[XÛ\˜][Û‚[šY›Ü›H™XÍÛÛÜŽÂˆÚY™YˆÑÐT’URPÑTˆÙ^[œÚ[ÛˆÓÑVÙœ˜Y×Ù\ˆ[˜X›BˆÙ[™Y‚ˆÚ[˜ÛYOÙÑ\XÛ\˜][Û‚ˆÙYš[™HÕTÕÓWÑ”QÓQS•ÑQ’S’USÓ”Â›ÚYXZ[Š›ÚY
HÂˆÙYš[™HÕTÕÓWÑ”QÓQS•ÓPRS—Ð‘QÒS‚ˆÚ[˜ÛYOÙÑ\œ˜YÛY[‚ˆÚ[˜ÛYOÛ\[™Qœ˜YÛY[‚™ÛÑœ˜YÐÛÛÜXÛÛÜŽÂˆÙYš[™HÕTÕÓWÑ”QÓQS•ÓPRS—ÑS‘ŸXÜK”ÚY\œÔÝÜ™VÛÝ—_
K”ÚY\œÔÝÜ™VÛÝ—OSÌJNØÛÛœÝVÕÝ‹]KSK—NÙ›ÜŠÛÛœÝˆÙˆŠ\K’[˜ÛY\ÔÚY\œÔÝÜ™VÜ‹›˜[YW_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÜ‹›˜[YWO\‹œÚY\ŠNØÛÛœÝÐ^Û˜[YN›Ý‹ÚY\Ž“Ì_KSØš™XÝ™œ™Y^™JØš™XÝ™Yš[™T›Ü\J××Ü›Ý××Î›[[™T^[ÚY\Ž”ÐŸKÞ[X›ÛÔÝš[™ÕYËÝ˜[YNˆ“[Ù[HŸJJKHœÜÝ›ØÙ\ÜÕ™\^ÚY\ˆ‹OX]šX]HÜÚ][ÛŽˆ™XÌŒÌŽÝ[šY›Ü›HØØ[Nˆ™XÌŒÌŽÝ˜\žZ[™È•UŽˆ™XÌŒÌŽØÛÛœÝXY]™XÌŠKJNÂˆÙYš[™HÕTÕÓWÕ‘T•VÑQ’S’USÓ”Â™\^™›ˆXZ[Š[œ]ˆ™\^[œ]ÊKO‘œ˜YÛY[[œ]ÈÂˆÙYš[™HÕTÕÓWÕ‘T•VÓPRS—Ð‘QÒS‚™\^Ý]]Ë•UJ™\^[œ]ËœÜÚ][ÛŠ›XY
ÛXY
J[šY›Ü›\ËœØØ[NÝ™\^Ý]]ËœÜÚ][Û]™XÍ
™\^[œ]ËœÜÚ][Û‹ŒKŒ
NÂˆÙYš[™HÕTÕÓWÕ‘T•VÓPRS—ÑS‘ŸB˜ÜK”ÚY\œÔÝÜ™UÑÔÓÛ—_
K”ÚY\œÔÝÜ™UÑÔÓÛ—OSJNØÛÛœÝP^Û˜[YN›‹ÚY\Ž“_KŒOSØš™XÝ™œ™Y^™JØš™XÝ™Yš[™T›Ü\J××Ü›Ý××Î›[ÜÝ›ØÙ\ÜÕ™\^ÚY\•ÑÔÓ‘PŸKÞ[X›ÛÔÝš[™ÕYËÝ˜[YNˆ“[Ù[HŸJJKÝHœÜÝ›ØÙ\ÜÕ™\^ÚY\ˆ‹ŒOX]šX]H™XÌˆÜÚ][ÛŽÝ[šY›Ü›H™XÌˆØØ[NÝ˜\žZ[™È™XÌˆ•UŽØÛÛœÝ™XÌˆXY]™XÌŠKJNÂˆÙYš[™HÕTÕÓWÕ‘T•VÑQ’S’USÓ”Â›ÚYXZ[Š›ÚY
HÂˆÙYš[™HÕTÕÓWÕ‘T•VÓPRS—Ð‘QÒS‚•UJÜÚ][ÛŠ›XY
ÛXY
JœØØ[NÙÛÔÜÚ][Û]™XÍ
ÜÚ][Û‹ŒKŒ
NÂˆÙYš[™HÕTÕÓWÕ‘T•VÓPRS—ÑS‘ŸXÜK”ÚY\œÔÝÜ™VØÝ—_
K”ÚY\œÔÝÜ™VØÝ—OSŒJNØÛÛœÝP^Û˜[YN˜Ý‹ÚY\Ž“Œ_KLOSØš™XÝ™œ™Y^™JØš™XÝ™Yš[™T›Ü\J××Ü›Ý××Î›[ÜÝ›ØÙ\ÜÕ™\^ÚY\ŽžPŸKÞ[X›ÛÔÝš[™ÕYËÝ˜[YNˆ“[Ù[HŸJJKHœ™Ø™XÛÙT^[ÚY\ˆ‹ŒOX˜\žZ[™È•UŽˆ™XÌ™ŽÝ˜\ˆ^\™TØ[\\”Ø[\\ŽˆØ[\\ŽÝ˜\ˆ^\™TØ[\\Žˆ^\™WÌ™ŒÌŽÂˆÚ[˜ÛYO[\‘[˜Ý[ÛœÏ‚ˆÙYš[™HÕTÕÓWÑ”QÓQS•ÑQ’S’USÓ”Âœ˜YÛY[™›ˆXZ[Š[œ]ˆœ˜YÛY[[œ]ÊKO‘œ˜YÛY[Ý]]ÈÙœ˜YÛY[Ý]]Ë˜ÛÛÜ]™XÍŠœ›ÛT‘Ð‘
^\™TØ[\J^\™TØ[\\‹^\™TØ[\\”Ø[\\‹[œ]•UŠJKKŒ
NßXÜK”ÚY\œÔÝÜ™UÑÔÓÚ—_
K”ÚY\œÔÝÜ™UÑÔÓÚ—OPŒJNØÛÛœÝVÔ]—NÙ›ÜŠÛÛœÝˆÙˆŠ\K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÜ‹›˜[YW_
K’[˜ÛY\ÔÚY\œÔÝÜ™UÑÔÓÜ‹›˜[YWO\‹œÚY\ŠNØÛÛœÝP^Û˜[YNš‹ÚY\ŽŒ_KSØš™XÝ™œ™Y^™JØš™XÝ™Yš[™T›Ü\J××Ü›Ý××Î›[™Ø™XÛÙT^[ÚY\•ÑÔÓPŸKÞ[X›ÛÔÝš[™ÕYËÝ˜[YNˆ“[Ù[HŸJJKHœ™Ø™XÛÙT^[ÚY\ˆ‹ŒOX˜\žZ[™È™XÌˆ•UŽÝ[šY›Ü›HØ[\\Œ‘^\™TØ[\\ŽÂˆÚ[˜ÛYO[\‘[˜Ý[ÛœÏ‚ˆÙYš[™HÕTÕÓWÑ”QÓQS•ÑQ’S’USÓ”Â›ÚYXZ[Š›ÚY
HžÙÛÑœ˜YÐÛÛÜ]™XÍ
œ›ÛT‘Ð‘
^\™L‘
^\™TØ[\\‹•UŠJKKŒ
NßXÜK”ÚY\œÔÝÜ™VÙ—_
K”ÚY\œÔÝÜ™VÙ—OUŒJNØÛÛœÝPVÚ—NÙ›ÜŠÛÛœÝˆÙˆPŠ\K’[˜ÛY\ÔÚY\œÔÝÜ™VÜ‹›˜[YW_
K’[˜ÛY\ÔÚY\œÔÝÜ™VÜ‹›˜[YWO\‹œÚY\ŠNØÛÛœÝÐ^Û˜[YN™‹ÚY\Ž•Œ_KPSØš™XÝ™œ™Y^™JØš™XÝ™Yš[™T›Ü\J××Ü›Ý××Î›[™Ø™XÛÙT^[ÚY\ŽÐŸKÞ[X›ÛÔÝš[™ÕYËÝ˜[YNˆ“[Ù[HŸJJNÂ