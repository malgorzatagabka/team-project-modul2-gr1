!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},r=t.parcelRequire7e79;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},t.parcelRequire7e79=r);var o=r("bpxeT"),c=r("2TvXO");r("aZhHc");var s=r("3Sjhd"),d=r("fPBaN");!function(){var e,t,n={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function a(){e&&(n.modal.removeEventListener("click",e),e=null),t&&(document.removeEventListener("keydown",t),t=null),n.modal.classList.toggle("is-hidden")}n.openModalBtn.addEventListener("click",(function(r){if("movie-card"===r.target.offsetParent.className){a();var o=r.target.offsetParent.dataset.id,c=JSON.parse(localStorage.getItem(p))[o];(0,s.modalSet)(c),e=function(e){"queue"===e.target.dataset.name&&(0,d.addToQueue)(c),"removeQueue"===e.target.dataset.name&&(0,d.removeFromQueue)(c),"watched"===e.target.dataset.name&&(0,d.addToWatched)(c),"removeWatched"===e.target.dataset.name&&(0,d.removeFromWatched)(c),(0,s.modalSet)(c)},t=function(e){"Escape"===e.code&&(a(),location.reload())},n.modal.addEventListener("click",e),document.addEventListener("keydown",t)}})),n.closeModalBtn.addEventListener("click",(function(){s.movieModalBox.innerHTML="",a(),location.reload()}))}(),r("bKWtT");var i,u,l=document.querySelector(".gallery"),p="",f=(i=e(o)(e(c).mark((function t(n){var a,r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l.innerHTML="",a=0,r=n.map((function(e){e.id;var t=e.media_type,n=e.poster_path,r=e.release_date,o=e.first_air_date,c=e.title,s=e.name,d=e.genres,i=r||o||"????";if("person"!==t)return'<div class="movie-card" data-id="'.concat(a++,'" data-type="').concat(t||"movie",'">\n      <img class="movie-card__img" src="https://image.tmdb.org/t/p/w500/').concat(n,'" onerror="this.src = \'https://picsum.photos/id/237/274/398\'";alt="image of movie" loading="lazy" />\n      <div class="movie-card__info">\n          <p class="movie-card__title">\n              <span>').concat(c||s,'</span>\n          </p>\n      <div class= "genreDate">\n          <p class="movie-card__genre">\n              <span>').concat(d.map((function(e){return e.name})).splice(0,2).join(", "),'</span>\n          </p>\n          <p class="movie-card__year">| ').concat(i.slice(0,4)||"","\n              <span></span>\n          </p>\n      </div>\n      </div>\n  </div>\n  ")})).join(""),e.abrupt("return",l.insertAdjacentHTML("beforeend",r));case 4:case"end":return e.stop()}}),t)}))),function(e){return i.apply(this,arguments)}),m=function(){var t=e(o)(e(c).mark((function t(){var n;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,null!==(n=JSON.parse(localStorage.getItem("queue"))||[])){e.next=4;break}return e.abrupt("return");case 4:return p="queue",e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=e(o)(e(c).mark((function t(){var n;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,null!==(n=JSON.parse(localStorage.getItem("watched"))||[])){e.next=4;break}return e.abrupt("return");case 4:return p="watched",e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),h={btnWatchedHeaderEl:document.querySelector(".header-watched"),btnQueueHeaderEl:document.querySelector(".header-queue")};h.btnWatchedHeaderEl.addEventListener("click",e(o)(e(c).mark((function t(){var n;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h.btnWatchedHeaderEl.classList.add("choosedBtn"),h.btnQueueHeaderEl.classList.remove("choosedBtn"),e.next=4,v();case 4:n=e.sent,f(n);case 6:case"end":return e.stop()}}),t)})))),h.btnQueueHeaderEl.addEventListener("click",e(o)(e(c).mark((function t(){var n;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h.btnQueueHeaderEl.classList.add("choosedBtn"),h.btnWatchedHeaderEl.classList.remove("choosedBtn"),e.next=4,m();case 4:n=e.sent,f(n);case 6:case"end":return e.stop()}}),t)})))),window.onload=(u=e(o)(e(c).mark((function t(n){var a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h.btnWatchedHeaderEl.classList.add("choosedBtn"),n.preventDefault(),e.next=4,v();case 4:a=e.sent,f(a);case 6:case"end":return e.stop()}}),t)}))),function(e){return u.apply(this,arguments)})}();
//# sourceMappingURL=library.e812d9b0.js.map
