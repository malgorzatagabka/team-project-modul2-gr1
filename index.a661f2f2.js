!function(){function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},a=n.parcelRequire7e79;null==a&&((a=function(t){if(t in r)return r[t].exports;if(t in o){var e=o[t];delete o[t];var n={id:t,exports:{}};return r[t]=n,e.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){o[t]=e},n.parcelRequire7e79=a),a.register("bpxeT",(function(t,e){"use strict";function n(t,e,n,r,o,a,i){try{var c=t[a](i),l=c.value}catch(t){return void n(t)}c.done?e(l):Promise.resolve(l).then(r,o)}Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,l,"next",t)}function l(t){n(i,o,a,c,l,"throw",t)}c(void 0)}))}}})),a.register("2TvXO",(function(t,e){var n=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),i=new T(r||[]);return a._invoke=function(t,e,n){var r=d;return function(o,a){if(r===m)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw a;return q()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=E(i,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=m;var l=u(t,e,n);if("normal"===l.type){if(r=n.done?p:f,l.arg===h)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r=p,n.method="throw",n.arg=l.arg)}}}(t,n,i),a}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var d="suspendedStart",f="suspendedYield",m="executing",p="completed",h={};function v(){}function y(){}function g(){}var _={};l(_,a,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(j([])));w&&w!==n&&r.call(w,a)&&(_=w);var x=g.prototype=v.prototype=Object.create(_);function L(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function n(o,a,i,c){var l=u(t[o],t,a);if("throw"!==l.type){var s=l.arg,d=s.value;return d&&"object"==typeof d&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(d).then((function(t){s.value=t,i(s)}),(function(t){return n("throw",t,i,c)}))}c(l.arg)}var o;this._invoke=function(t,r){function a(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(a,a):a()}}function E(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,E(t,n),"throw"===n.method))return h;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var o=u(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,h;var a=o.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,h):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function j(t){if(t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}return{next:q}}function q(){return{value:e,done:!0}}return y.prototype=g,l(x,"constructor",g),l(g,"constructor",y),y.displayName=l(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},L(S.prototype),l(S.prototype,i,(function(){return this})),t.AsyncIterator=S,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new S(s(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(x),l(x,c,"Generator"),l(x,a,(function(){return this})),l(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=j,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(N),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var l=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(l&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),N(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;N(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:j(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),h}},t}(t.exports);try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}})),a.register("bKWtT",(function(e,n){t(e.exports,"toTop",(function(){return o}));var r=document.querySelector(".top-btn");r.onclick=function(){return window.scrollTo({top:0,behavior:"smooth"})},window.onscroll=function(){return window.scrollY>500?r.style.opacity=1:r.style.opacity=0};var o=function(){return window.scrollTo({top:100,left:100,behavior:"smooth"})}})),a.register("3Sjhd",(function(n,r){t(n.exports,"movieModalBox",(function(){return l})),t(n.exports,"modalSet",(function(){return s}));var o,i=a("bpxeT"),c=a("2TvXO"),l=document.querySelector(".modal__movie-box"),s=(o=e(i)(e(c).mark((function t(n){var r,o,a,i,s,f,m,p,h,v,y;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l.innerHTML="",r=n.imgAlt,o=n.poster_path,a=n.title,i=n.name,s=n.genres,f=n.vote_average,m=n.vote_count,p=n.popularity,h=n.overview,v="https://image.tmdb.org/t/p/w300".concat(o),null===o&&(v=new URL("https://picsum.photos/id/237/274/398")),y='<div class="modal__movie-box-separation">\n                <div class="modal__movie-box-photo"><img class="modal__movie-image" src="'.concat(v,'"  alt="Poster of: ').concat(r,'"\n                        loading="lazy"></div>\n                <div class="modal__movie-box-info">\n                    <h2 class="modal__movie-box-title">').concat(a||i,'</h2>\n                    <ul class="modal__movie-box-details">\n                        <li class="modal__movie-details-li"><span class="modal__movie-details-label">Vote /Votes </span><span><span class="modal__movie-details-vote">').concat(Number(f).toFixed(1),"</span> / ").concat(m,'</span></span></li>\n                        </li>\n                        <li class="modal__movie-details-li"><span class="modal__movie-details-label">Popularity</span><span\n                                class="modal__movie-details-value">').concat(Number(p).toFixed(0),'</span></li>\n                        <li class="modal__movie-details-li"><span class=" modal__movie-details-label">Original Title</span><span\n                                class="modal__movie-details-value modal__movie-details-title">').concat(a||i,'</span></li>\n                        <li class="modal__movie-details-li"><span class=" modal__movie-details-label">Genre</span><span\n                                class="modal__movie-details-value">').concat(s.map((function(t){return t.name})).join(", "),'</span></li>\n                        </li>\n                    </ul>\n                    <h3 class="modal__movie-about-label">About</h3>\n                    <p class="modal__movie-about-text">').concat(h,'</p>\n                    <div class="modal__movie-btns--wrapper">\n                        ').concat(d(n),"\n                        ").concat(u(n),"\n                    </div>\n                </div>\n            </div>"),t.abrupt("return",l.insertAdjacentHTML("beforeend",y));case 6:case"end":return t.stop()}}),t)}))),function(t){return o.apply(this,arguments)}),u=function(t){return(JSON.parse(localStorage.getItem("queue"))||[]).find((function(e){return e.media_type===t.media_type&&e.id===t.id}))?'<button type="button" class="modal__movie-btns modal__movie-btns-queue" data-name="removeQueue">Remove from Queue</button>':'<button type="button" class="modal__movie-btns modal__movie-btns-queue" data-name="queue">Add\n                            to queue</button>'},d=function(t){return(JSON.parse(localStorage.getItem("watched"))||[]).find((function(e){return e.media_type===t.media_type&&e.id===t.id}))?'<button type="button" class="modal__movie-btns modal__movie-btns--watch" data-name="removeWatched"\n                            >Remove from watched</button>':'<button type="button" class="modal__movie-btns modal__movie-btns--watch" data-name="watched"\n                            >Add to watched</button>'}})),a.register("fPBaN",(function(e,n){t(e.exports,"addToQueue",(function(){return r})),t(e.exports,"removeFromQueue",(function(){return o})),t(e.exports,"addToWatched",(function(){return a})),t(e.exports,"removeFromWatched",(function(){return i}));var r=function(t){var e=JSON.parse(localStorage.getItem("queue"))||[];if(!e.find((function(e){return e.media_type===t.media_type&&e.id===t.id}))){e.push(t);try{localStorage.setItem("queue",JSON.stringify(e))}catch(t){console.error("Set state error: ",t.message)}}},o=function(t){var e=(JSON.parse(localStorage.getItem("queue"))||[]).filter((function(e){return!(e.media_type===t.media_type&&e.id===t.id)}));console.log(e);try{localStorage.setItem("queue",JSON.stringify(e))}catch(t){console.error("Set state error: ",t.message)}},a=function(t){var e=JSON.parse(localStorage.getItem("watched"))||[];if(!e.find((function(e){return e.media_type===t.media_type&&e.id===t.id}))){e.push(t);try{localStorage.setItem("watched",JSON.stringify(e))}catch(t){console.error("Set state error: ",t.message)}}},i=function(t){var e=(JSON.parse(localStorage.getItem("watched"))||[]).filter((function(e){return!(e.media_type===t.media_type&&e.id===t.id)}));console.log(e);try{localStorage.setItem("watched",JSON.stringify(e))}catch(t){console.error("Set state error: ",t.message)}}})),a.register("aZhHc",(function(t,e){!function(){var t={openModalBtn:document.querySelector("[data-modal-team-open]"),closeModalBtn:document.querySelector("[data-modal-team-close]"),modal:document.querySelector("[data-modal-team]")};function e(r){"Escape"!==r.code||t.modal.classList.contains("is-hidden")||(n(),document.removeEventListener("keydown",e))}function n(){t.modal.classList.toggle("is-hidden")}t.openModalBtn.addEventListener("click",(function(t){n(),document.addEventListener("keydown",e)})),t.closeModalBtn.addEventListener("click",n),document.addEventListener("click",(function(e){e.target===t.modal&&n()}))}()}))}();
//# sourceMappingURL=index.a661f2f2.js.map
