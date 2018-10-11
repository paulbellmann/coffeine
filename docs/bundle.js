!function(e){var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,t){if(!w[e]||!g[e])return;for(var n in g[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(h[n]=t[n]);0==--b&&0===m&&S()}(e,n),t&&t(e,n)};var n,r=!0,o="0842b2821d18efb377f6",i=1e4,c={},u=[],a=[];function s(e){var t=E[e];if(!t)return I;var r=function(r){return t.hot.active?(E[r]?-1===E[r].parents.indexOf(e)&&E[r].parents.push(e):(u=[e],n=r),-1===t.children.indexOf(r)&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),u=[]),I(r)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return I[e]},set:function(t){I[e]=t}}};for(var i in I)Object.prototype.hasOwnProperty.call(I,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(r,i,o(i));return r.e=function(e){return"ready"===l&&p("prepare"),m++,I.e(e).then(t,function(e){throw t(),e});function t(){m--,"prepare"===l&&(v[e]||j(e),0===m&&0===b&&S())}},r.t=function(e,t){return 1&t&&(e=r(e)),I.t(e,-2&t)},r}var f=[],l="idle";function p(e){l=e;for(var t=0;t<f.length;t++)f[t].call(null,e)}var d,h,y,b=0,m=0,v={},g={},w={};function x(e){return+e+""===e?+e:e}function O(e){if("idle"!==l)throw new Error("check() is only allowed in idle status");return r=e,p("check"),function(e){return e=e||1e4,new Promise(function(t,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,i=I.p+""+o+".hot-update.json";r.open("GET",i,!0),r.timeout=e,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+i+" timed out."));else if(404===r.status)t();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+i+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(e){return void n(e)}t(e)}}})}(i).then(function(e){if(!e)return p("idle"),null;g={},v={},w=e.c,y=e.h,p("prepare");var t=new Promise(function(e,t){d={resolve:e,reject:t}});h={};return j(0),"prepare"===l&&0===m&&0===b&&S(),t})}function j(e){w[e]?(g[e]=!0,b++,function(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.charset="utf-8",n.src=I.p+""+e+"."+o+".hot-update.js",t.appendChild(n)}(e)):v[e]=!0}function S(){p("ready");var e=d;if(d=null,e)if(r)Promise.resolve().then(function(){return _(r)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in h)Object.prototype.hasOwnProperty.call(h,n)&&t.push(x(n));e.resolve(t)}}function _(t){if("ready"!==l)throw new Error("apply() is only allowed in ready status");var n,r,i,a,s;function f(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),i=o.id,c=o.chain;if((a=E[i])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(a.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var u=0;u<a.parents.length;u++){var s=a.parents[u],f=E[s];if(f){if(f.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([s]),moduleId:i,parentId:s};-1===t.indexOf(s)&&(f.hot._acceptedDependencies[i]?(n[s]||(n[s]=[]),d(n[s],[i])):(delete n[s],t.push(s),r.push({chain:c.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var b={},m=[],v={},g=function(){console.warn("[HMR] unexpected require("+j.moduleId+") to disposed module")};for(var O in h)if(Object.prototype.hasOwnProperty.call(h,O)){var j;s=x(O);var S=!1,_=!1,P=!1,k="";switch((j=h[O]?f(s):{type:"disposed",moduleId:O}).chain&&(k="\nUpdate propagation: "+j.chain.join(" -> ")),j.type){case"self-declined":t.onDeclined&&t.onDeclined(j),t.ignoreDeclined||(S=new Error("Aborted because of self decline: "+j.moduleId+k));break;case"declined":t.onDeclined&&t.onDeclined(j),t.ignoreDeclined||(S=new Error("Aborted because of declined dependency: "+j.moduleId+" in "+j.parentId+k));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(j),t.ignoreUnaccepted||(S=new Error("Aborted because "+s+" is not accepted"+k));break;case"accepted":t.onAccepted&&t.onAccepted(j),_=!0;break;case"disposed":t.onDisposed&&t.onDisposed(j),P=!0;break;default:throw new Error("Unexception type "+j.type)}if(S)return p("abort"),Promise.reject(S);if(_)for(s in v[s]=h[s],d(m,j.outdatedModules),j.outdatedDependencies)Object.prototype.hasOwnProperty.call(j.outdatedDependencies,s)&&(b[s]||(b[s]=[]),d(b[s],j.outdatedDependencies[s]));P&&(d(m,[j.moduleId]),v[s]=g)}var A,C=[];for(r=0;r<m.length;r++)s=m[r],E[s]&&E[s].hot._selfAccepted&&C.push({module:s,errorHandler:E[s].hot._selfAccepted});p("dispose"),Object.keys(w).forEach(function(e){!1===w[e]&&function(e){delete installedChunks[e]}(e)});for(var M,R,T=m.slice();T.length>0;)if(s=T.pop(),a=E[s]){var D={},U=a.hot._disposeHandlers;for(i=0;i<U.length;i++)(n=U[i])(D);for(c[s]=D,a.hot.active=!1,delete E[s],delete b[s],i=0;i<a.children.length;i++){var H=E[a.children[i]];H&&((A=H.parents.indexOf(s))>=0&&H.parents.splice(A,1))}}for(s in b)if(Object.prototype.hasOwnProperty.call(b,s)&&(a=E[s]))for(R=b[s],i=0;i<R.length;i++)M=R[i],(A=a.children.indexOf(M))>=0&&a.children.splice(A,1);for(s in p("apply"),o=y,v)Object.prototype.hasOwnProperty.call(v,s)&&(e[s]=v[s]);var L=null;for(s in b)if(Object.prototype.hasOwnProperty.call(b,s)&&(a=E[s])){R=b[s];var B=[];for(r=0;r<R.length;r++)if(M=R[r],n=a.hot._acceptedDependencies[M]){if(-1!==B.indexOf(n))continue;B.push(n)}for(r=0;r<B.length;r++){n=B[r];try{n(R)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:s,dependencyId:R[r],error:e}),t.ignoreErrored||L||(L=e)}}}for(r=0;r<C.length;r++){var N=C[r];s=N.module,u=[s];try{I(s)}catch(e){if("function"==typeof N.errorHandler)try{N.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:n,originalError:e}),t.ignoreErrored||L||(L=n),L||(L=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:s,error:e}),t.ignoreErrored||L||(L=e)}}return L?(p("fail"),Promise.reject(L)):(p("idle"),new Promise(function(e){e(m)}))}var E={};function I(t){if(E[t])return E[t].exports;var r=E[t]={i:t,l:!1,exports:{},hot:function(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:n!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:O,apply:_,status:function(e){if(!e)return l;f.push(e)},addStatusHandler:function(e){f.push(e)},removeStatusHandler:function(e){var t=f.indexOf(e);t>=0&&f.splice(t,1)},data:c[e]};return n=void 0,t}(t),parents:(a=u,u=[],a),children:[]};return e[t].call(r.exports,r,r.exports,s(t)),r.l=!0,r.exports}I.m=e,I.c=E,I.d=function(e,t,n){I.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},I.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},I.t=function(e,t){if(1&t&&(e=I(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(I.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)I.d(n,r,function(t){return e[t]}.bind(null,r));return n},I.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return I.d(t,"a",t),t},I.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},I.p="",I.h=function(){return o},s(18)(I.s=18)}([function(e,t,n){e.exports=n.p+"0b51b5a2a7ccc1f4a80a555833f36494.png"},function(e,t,n){var r,o;
/*!
 * JavaScript Cookie v2.2.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */!function(i){if(void 0===(o="function"==typeof(r=i)?r.call(t,n,t,e):r)||(e.exports=o),!0,e.exports=i(),!!0){var c=window.Cookies,u=window.Cookies=i();u.noConflict=function(){return window.Cookies=c,u}}}(function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}return function t(n){function r(t,o,i){var c;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(i=e({path:"/"},r.defaults,i)).expires){var u=new Date;u.setMilliseconds(u.getMilliseconds()+864e5*i.expires),i.expires=u}i.expires=i.expires?i.expires.toUTCString():"";try{c=JSON.stringify(o),/^[\{\[]/.test(c)&&(o=c)}catch(e){}o=n.write?n.write(o,t):encodeURIComponent(String(o)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=(t=(t=encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var a="";for(var s in i)i[s]&&(a+="; "+s,!0!==i[s]&&(a+="="+i[s]));return document.cookie=t+"="+o+a}t||(c={});for(var f=document.cookie?document.cookie.split("; "):[],l=/(%[0-9A-Z]{2})+/g,p=0;p<f.length;p++){var d=f[p].split("="),h=d.slice(1).join("=");this.json||'"'!==h.charAt(0)||(h=h.slice(1,-1));try{var y=d[0].replace(l,decodeURIComponent);if(h=n.read?n.read(h,y):n(h,y)||h.replace(l,decodeURIComponent),this.json)try{h=JSON.parse(h)}catch(e){}if(t===y){c=h;break}t||(c[y]=h)}catch(e){}}return c}}return r.set=r,r.get=function(e){return r.call(r,e)},r.getJSON=function(){return r.apply({json:!0},[].slice.call(arguments))},r.defaults={},r.remove=function(t,n){r(t,"",e(n,{expires:-1}))},r.withConverter=t,r}(function(){})})},function(e,t,n){(e.exports=n(15)(!1)).push([e.i,"body {\n  margin: 0;\n  overflow-y: hidden; }\n",""])},function(e,t,n){e.exports=n.p+"27b56f00cca7593794ac3414618e7b58.jpg"},function(e,t,n){e.exports=n.p+"5ce8f7595f3122dabb2f014f390eb367.png"},function(e,t,n){e.exports=n.p+"1dcd9cfe74fd45b74776e5ebd66f4d21.png"},function(e,t,n){e.exports=n.p+"bac767a1a03a93c2b654acc1f4bc2d5b.png"},function(e,t,n){e.exports=n.p+"97737c3d07ac0445ffd5b334faf73677.png"},function(e,t,n){e.exports=n.p+"251273ca469c95cc38cd7b85153d9ef6.png"},function(e,t,n){e.exports=n.p+"309d0845c53bb0df8f00b6876416ecd9.png"},function(e,t,n){e.exports=n.p+"0b9bf3457d6732f3fff7e386b762da43.mp3"},function(e,t,n){e.exports=n.p+"627c0e8b5b8ef0417ace4d759284a51d.mp3"},function(e,t,n){e.exports=n.p+"2cb5bd336bfdfefa74b44b88536cbe9e.mp3"},function(e,t,n){e.exports=n.p+"781b9010860d448aa5c80210022d6d0b.mp3"},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},i=n(16)(r,o);r.locals&&(e.exports=r.locals),e.hot.accept(2,function(){var t=n(2);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");i(t)}),e.hot.dispose(function(){i()})},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(r),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var c=e[o];"number"==typeof c[0]&&r[c[0]]||(n&&!c[2]?c[2]=n:n&&(c[2]="("+c[2]+") and ("+n+")"),t.push(c))}},t}},function(e,t,n){var r={},o=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),i=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),c=null,u=0,a=[],s=n(17);function f(e,t){for(var n=0;n<e.length;n++){var o=e[n],i=r[o.id];if(i){i.refs++;for(var c=0;c<i.parts.length;c++)i.parts[c](o.parts[c]);for(;c<o.parts.length;c++)i.parts.push(b(o.parts[c],t))}else{var u=[];for(c=0;c<o.parts.length;c++)u.push(b(o.parts[c],t));r[o.id]={id:o.id,refs:1,parts:u}}}}function l(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],c=t.base?i[0]+t.base:i[0],u={css:i[1],media:i[2],sourceMap:i[3]};r[c]?r[c].parts.push(u):n.push(r[c]={id:c,parts:[u]})}return n}function p(e,t){var n=i(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=a[a.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),a.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=i(e.insertAt.before,n);n.insertBefore(t,o)}}function d(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=a.indexOf(e);t>=0&&a.splice(t,1)}function h(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return y(t,e.attrs),p(e,t),t}function y(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function b(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var a=u++;n=c||(c=h(t)),r=v.bind(null,n,a,!1),o=v.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",y(t,e.attrs),p(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=s(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var c=new Blob([r],{type:"text/css"}),u=e.href;e.href=URL.createObjectURL(c),u&&URL.revokeObjectURL(u)}.bind(null,n,t),o=function(){d(n),n.href&&URL.revokeObjectURL(n.href)}):(n=h(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){d(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=l(e,t);return f(n,t),function(e){for(var o=[],i=0;i<n.length;i++){var c=n[i];(u=r[c.id]).refs--,o.push(u)}e&&f(l(e,t),t);for(i=0;i<o.length;i++){var u;if(0===(u=o[i]).refs){for(var a=0;a<u.parts.length;a++)u.parts[a]();delete r[u.id]}}}};var m=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function v(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=m(t,o);else{var i=document.createTextNode(o),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(i,c[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t);var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.canvas=document.querySelector("#game"),this.ctx=this.canvas.getContext("2d"),this.x=-100,this.y=-100}return function(e,t,n){t&&r(e.prototype,t),n&&r(e,n)}(e,[{key:"getRndMinMax",value:function(e,t){return Math.floor(Math.random()*(t-e)+e)}}]),e}(),i=n(3),c=n.n(i);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=s(this,f(t).call(this))).mapImg=new Image,e.mapImg.src=c.a,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,o),function(e,t,n){t&&a(e.prototype,t),n&&a(e,n)}(t,[{key:"render",value:function(){this.ctx.drawImage(this.mapImg,0,0)}}]),t}(),d=n(4),h=n.n(d),y=n(5),b=n.n(y),m=n(6),v=n.n(m),g=n(7),w=n.n(g),x=n(8),O=n.n(x);function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t){return!t||"object"!==j(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var P=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=_(this,E(t).call(this))).speed=5,n.x=e.x,n.y=e.y,n.heroImg=new Image,n.heroImg.src=h.a,n.move(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(t,o),function(e,t,n){t&&S(e.prototype,t),n&&S(e,n)}(t,[{key:"render",value:function(){this.ctx.drawImage(this.heroImg,this.x,this.y)}},{key:"update",value:function(){this.directions.left&&(this.x-=this.speed,this.heroImg.src=b.a,this.x<=20&&(this.x=20)),this.directions.right&&(this.x+=this.speed,this.heroImg.src=v.a,this.x>=460&&(this.x=460)),this.directions.up&&(this.y-=this.speed,this.heroImg.src=w.a,this.y<=20&&(this.y=20)),this.directions.down&&(this.y+=this.speed,this.heroImg.src=O.a,this.y>=415&&(this.y=415))}},{key:"move",value:function(){var e=this;this.directions={left:!1,right:!1,up:!1,down:!1},addEventListener("keydown",function(t){"KeyA"!==t.code&&"ArrowLeft"!==t.code||(e.directions.left=!0),"KeyD"!==t.code&&"ArrowRight"!==t.code||(e.directions.right=!0),"KeyW"!==t.code&&"ArrowUp"!==t.code||(e.directions.up=!0),"KeyS"!==t.code&&"ArrowDown"!==t.code||(e.directions.down=!0)}),addEventListener("keyup",function(t){"KeyA"!==t.code&&"ArrowLeft"!==t.code||(e.directions.left=!1),"KeyD"!==t.code&&"ArrowRight"!==t.code||(e.directions.right=!1),"KeyW"!==t.code&&"ArrowUp"!==t.code||(e.directions.up=!1),"KeyS"!==t.code&&"ArrowDown"!==t.code||(e.directions.down=!1)})}},{key:"boost",value:function(){var e=this;this.speed=10,setTimeout(function(){return e.speed=5},1e3)}}]),t}(),k=n(9),A=n.n(k);function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(e,t){return!t||"object"!==C(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var U=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=R(this,T(t).call(this))).sugarImg=new Image,e.sugarImg.src=A.a,e.respawn(),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(t,o),function(e,t,n){t&&M(e.prototype,t),n&&M(e,n)}(t,[{key:"render",value:function(){this.ctx.drawImage(this.sugarImg,this.x,this.y)}},{key:"respawn",value:function(){var e=this;this.x=-100,this.y=-100,setTimeout(function(){e.x=e.getRndMinMax(64,448),e.y=e.getRndMinMax(64,416)},5e3)}}]),t}(),H=n(0),L=n.n(H);function B(e){return(B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(e,t){return!t||"object"!==B(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function J(e){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function K(e,t){return(K=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var F=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=q(this,J(t).call(this))).mugImg=new Image,e.mugImg.src=L.a,e.x=e.getRndMinMax(64,448),e.y=e.getRndMinMax(64,416),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&K(e,t)}(t,o),function(e,t,n){t&&N(e.prototype,t),n&&N(e,n)}(t,[{key:"render",value:function(){this.ctx.drawImage(this.mugImg,this.x,this.y)}},{key:"respawn",value:function(){this.x=this.getRndMinMax(64,448),this.y=this.getRndMinMax(64,416)}}]),t}();function W(e){return(W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function $(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function G(e,t){return!t||"object"!==W(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function X(e){return(X=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Z(e,t){return(Z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var z=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=G(this,X(t).call(this))).mugImg=new Image,e.mugImg.src=L.a,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Z(e,t)}(t,o),function(e,t,n){t&&$(e.prototype,t),n&&$(e,n)}(t,[{key:"render",value:function(e,t){this.ctx.beginPath(),this.ctx.rect(0,480,512,50),this.ctx.fillStyle="#000",this.ctx.fill(),this.ctx.beginPath(),this.ctx.rect(199,489,302,32),this.ctx.strokeStyle="#fff",this.ctx.stroke(),this.ctx.beginPath(),this.ctx.rect(200,490,30*t,30),this.ctx.fillStyle="#ff0000",this.ctx.fill(),this.ctx.beginPath(),this.ctx.drawImage(this.mugImg,50,490),this.ctx.fillStyle="rgb(250, 250, 250)",this.ctx.font="24px Helvetica",this.ctx.textAlign="left",this.ctx.textBaseline="top",this.ctx.fillText("".concat(e),100,490)}}]),t}(),Q=n(1),V=n.n(Q);function Y(e){return(Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ee(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function te(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ne(e,t){return!t||"object"!==Y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function re(e){return(re=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function oe(e,t){return(oe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var ie=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),ne(this,re(t).call(this))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&oe(e,t)}(t,o),function(e,t,n){t&&te(e.prototype,t),n&&te(e,n)}(t,[{key:"render",value:function(){this.drawHeadline(),this.drawTable()}},{key:"drawHeadline",value:function(){this.ctx.fillStyle="rgb(0, 0, 0)",this.ctx.font="44px Helvetica",this.ctx.textAlign="left",this.ctx.textBaseline="top",this.ctx.fillText("Highscore",550,25)}},{key:"drawTable",value:function(){var e=this;this.ctx.fillStyle="rgb(0, 0, 0)",this.ctx.font="24px Helvetica",this.ctx.textAlign="left",this.ctx.textBaseline="top",this.ctx.fillText("Points",550,100),this.ctx.fillText("Timestamp",800,100),this.ctx.font="20px Helvetica",this.getHighscore().forEach(function(t,n){e.ctx.fillText(t.points,550,140+30*n),e.ctx.fillText(t.timestamp,800,140+30*n)})}},{key:"getHighscore",value:function(){return V.a.get("highscore")?V.a.getJSON("highscore"):[]}},{key:"setHighscore",value:function(e){var t=(new Date).toLocaleString(),n=this.getHighscore();(n=ee(n).concat([{points:e,timestamp:t}])).sort(function(e,t){return e.points<t.points?1:e.points>t.points?-1:0}),n=n.slice(0,5),V.a.set("highscore",n,{expires:365})}}]),t}(),ce=n(10),ue=n.n(ce),ae=n(11),se=n.n(ae),fe=n(12),le=n.n(fe),pe=n(13),de=n.n(pe);function he(e){return(he="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ye(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function be(e,t){return!t||"object"!==he(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function me(e){return(me=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ve(e,t){return(ve=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var ge=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=be(this,me(t).call(this))).map=new p,e.player=new P({x:200,y:200}),e.highscore=new ie,e.sugar=new U,e.mug=new F,e.ui=new z,e.score=10,setInterval(function(){e.score--},750),e.coffeeCounter=0,e.backgroundMusic=new Audio(ue.a),e.backgroundMusic.volume=.3,e.backgroundMusic.loop=!0,e.backgroundMusic.play(),e.popSound=new Audio(se.a),e.popSound.volume=.2,e.boostSound=new Audio(le.a),e.boostSound.volume=.2,e.gameOverSound=new Audio(de.a),e.gameOverSound.volume=.2,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ve(e,t)}(t,o),function(e,t,n){t&&ye(e.prototype,t),n&&ye(e,n)}(t,[{key:"render",value:function(){this.ctx.clearRect(0,0,window.innerWidth,window.innerHeight),this.map.render(),this.player.render(),this.sugar.render(),this.mug.render(),this.ui.render(this.coffeeCounter,this.score),this.highscore.render()}},{key:"update",value:function(){this.player.update(),this.player.x<=this.mug.x+32&&this.mug.x<=this.player.x+32&&this.player.y<=this.mug.y+32&&this.mug.y<=this.player.y+32&&(this.mug.respawn(),this.coffeeCounter++,this.popSound.play(),this.score<=9&&this.score++),this.player.x<=this.sugar.x+32&&this.sugar.x<=this.player.x+32&&this.player.y<=this.sugar.y+32&&this.sugar.y<=this.player.y+32&&(this.sugar.respawn(),this.player.boost(),this.boostSound.play()),this.score<=0&&this.reset()}},{key:"reset",value:function(){this.gameOverSound.play(),this.highscore.setHighscore(this.coffeeCounter),this.score=10,this.coffeeCounter=0,this.player.x=200,this.player.y=200}}]),t}(),we=(n(14),new ge);!function(){var e=document.querySelector("#game");e.width=window.innerWidth,e.height=window.innerHeight}(),function e(){we.render(),we.update(),window.requestAnimationFrame(e)}()}]);