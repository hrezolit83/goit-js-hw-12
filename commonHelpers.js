import{S as v,a as f,i as S}from"./assets/vendor-64b55ca9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();let u,p=new v(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function y(e){const r=e.hits.map(w).join("");u=e.totalHits,u>m&&s.btnLoad.classList.remove("hidden"),e.hits.length?s.galleryList.insertAdjacentHTML("beforeend",r):c(b),p.refresh()}function w(e){return`<li class="gallery-item">
          <a href="${e.largeImageURL}" class="gallery-link">
            <img
              src="${e.webformatURL}"
              class="gallery-image"
              alt="${e.tags}"
            />
          </a>
          <div class="modat-text">
          
              <div class="modal-element"><p>Likes</p><span>${e.likes}</span></div>
              <div class="modal-element"><p>Views</p><span>${e.views}</span></div>
              <div class="modal-element"><p>Comments</p><span>${e.comments}</span></div>
              <div class="modal-element"><p>Downloads</p><span>${e.downloads}</span></div>
          </div>
        </li>`}const m=15;let l,i;async function h(e){g(),f.defaults.baseURL="https://pixabay.com/api/";const r="42320783-7d0430ad6756cac4c8b613a39",n=`q=${e}&image_type=photo&orientation=horizontal&safesearch=true`,a=`?key=${r}&${n}`,t={params:{per_page:m,page:l}};return(await f.get(a,t)).data}async function P(e){if(e.preventDefault(),g(),s.btnLoad.classList.add("hidden"),s.galleryList.innerHTML="",l=1,i=e.target.elements.input.value.trim(),i)try{const r=await h(i);return y(r)}catch{c(b)}finally{L(),s.userForm.reset()}else s.userForm.elements.input.value="",c(CORRECT)}async function q(){l+=1;const e=Math.ceil(u/m);if(l>=e)s.btnLoad.classList.add("hidden"),c(E);else{const r=await h(i),n=y(r);return $(),L(),p.refresh(),n}}function $(){const r=s.galleryList.firstElementChild.getBoundingClientRect().height*2;window.scrollBy({top:r,left:0,behavior:"smooth"})}const s={userForm:document.querySelector(".user-form"),userInput:document.querySelector(".user-input"),btn:document.querySelector(".form-button"),galleryList:document.querySelector(".gallery"),container:document.querySelector(".container"),loader:document.querySelector(".loader"),btnLoad:document.querySelector(".btn-load")};s.userForm.addEventListener("submit",P);s.btnLoad.addEventListener("click",q);function g(){s.loader.classList.remove("hidden")}function L(){s.loader.classList.add("hidden")}function c(e){S.error({message:e,position:"topRight"})}const E="We're sorry, but you've reached the end of search results.",b="Sorry, there are no images matching your search query. Please try again!";
//# sourceMappingURL=commonHelpers.js.map
