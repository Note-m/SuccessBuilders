import{i as b,S as j}from"./assets/vendor-43af55b9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function i(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(r){if(r.ep)return;r.ep=!0;const s=i(r);fetch(r.href,s)}})();(()=>{const t={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),body:document.querySelector("body"),menuLinks:document.querySelectorAll(".mob-menu-link, .header-nav-link")};t.openModalBtn.addEventListener("click",o),t.closeModalBtn.addEventListener("click",o);function o(){t.modal.classList.toggle("is-hidden"),t.body.classList.toggle("no-scroll"),t.modal.classList.contains("is-hidden")?(t.openModalBtn.style.display="block",t.closeModalBtn.style.display="none"):(t.openModalBtn.style.display="none",t.closeModalBtn.style.display="block")}function i(e){const r=document.querySelector(e);if(r){const s=r.getBoundingClientRect().top+window.scrollY;window.scrollBy({top:s-window.scrollY,left:0,behavior:"smooth"})}else console.warn(`Element not found: ${e}`)}t.menuLinks.forEach(e=>{e.addEventListener("click",r=>{r.preventDefault();const s=e.getAttribute("href");t.modal.classList.contains("is-hidden")||o(),i(s)})})})();function $(){const t=document.querySelectorAll(".accordion-block");t.forEach(o=>{const i=o.querySelector(".accordion-title"),e=o.querySelector(".accordion-content"),r=i.querySelector("span");i.addEventListener("click",()=>{o.classList.contains("active")?(o.classList.remove("active"),e.classList.remove("active"),e.style.maxHeight=0,r.querySelector("svg").style.transform="rotate(0deg)"):(t.forEach(s=>{s.classList.remove("active"),s.querySelector(".accordion-content").classList.remove("active"),s.querySelector(".accordion-content").style.maxHeight=0,s.querySelector("span svg").style.transform="rotate(0deg)"}),o.classList.add("active"),e.classList.add("active"),e.style.maxHeight=e.scrollHeight+"px",r.querySelector("svg").style.transform="rotate(180deg)")}),o===t[0]&&(o.classList.add("active"),e.classList.add("active"),e.style.maxHeight=e.scrollHeight+"px",r.querySelector("svg").style.transform="rotate(180deg)")})}function I(){const t=document.querySelector(".work-together-form"),o=document.querySelector(".work-together-backdrop"),i=document.querySelector(".work-together-modal-btn-closing"),e=document.querySelector(".work-together-input-email"),r=document.querySelector(".work-together-error-message"),s=document.querySelector(".work-together-adress-icon-form"),a=document.querySelector(".work-together-input-message"),E=document.querySelector(".work-together-modal-main"),B=document.querySelector(".work-together-modal-second"),w={},T="https://portfolio-js.b.goit.study/api/";t.addEventListener("submit",m=>{if(m.preventDefault(),e.value.trim()!==""&&e.value.trim()!==" ")if(r.classList.remove("active"),/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e.value.trim())===!0){s.classList.remove("hidden"),e.style.color="black",w.email=e.value,w.comment=a.value;const M={method:"POST",body:JSON.stringify(w),headers:{"Content-Type":"application/json; charset=UTF-8"}};fetch(`${T}requests`,M).then(l=>{if(!l.ok)throw new Error(l.status);return l.json()}).then(l=>{E.textContent=l.title,B.textContent=l.message,o.classList.add("active"),s.classList.remove("hidden")}).catch(l=>{b.info({title:"Info",message:"Sorry, something went wromg, please check your request once more, fill all the fields"}),console.log(l)})}else r.innerHTML="Please input correct Email adress",e.style.color="red",r.classList.add("active");else r.innerHTML="Field Email cannot be blank",r.classList.add("active")}),i.addEventListener("click",()=>{o.classList.remove("active"),e.value="",s.classList.add("hidden"),a.value=""}),o.addEventListener("click",m=>{m.target.classList.value!=="work-together-modal-btn-closing"&&m.target.classList.value!=="work-together-modal"&&(o.classList.remove("active"),e.value="",s.classList.add("hidden"),a.value="")}),document.addEventListener("keydown",m=>{m.key==="Escape"&&(o.classList.remove("active"),e.value="",s.classList.add("hidden"),a.value="")})}const h="/SuccessBuilders/assets/icons-33941ae6.svg",N="https://portfolio-js.b.goit.study/api",k=document.querySelector(".swiper-wrapper"),c=document.querySelector(".swiper-button-prev"),d=document.querySelector(".swiper-button-next"),u=c.querySelector(".icon-swipe-prev use"),p=d.querySelector(".icon-swipe-next use");let y;const A=async()=>{try{const t=await fetch(`${N}/reviews`);if(!t.ok)throw new Error("Failed to fetch reviews");return await t.json()}catch(t){throw b.error({title:"Error",message:"Failed to fetch reviews. Please try again later.",position:"topRight"}),t}},P=t=>t.map(({author:o,avatar_url:i,review:e})=>`
    <li class='swiper-slide user-review'>
      <p class='text-review'>${e}</p>
      <div class='icon-photo-name'>
        <img
          src="${i}"
          alt="${o}"
          width="40"
          height="40"
          class="avatar-icon"
        />
        <p class="user-name-review">${o}</p>
      </div>
    </li>`).join(""),J=async()=>{try{y=await A(),y.length>0&&(k.innerHTML+=P(y),v.update())}catch(t){console.log(t),k.innerHTML="<p class='not-found'>Not found</p>",n(c,!0,u,"reviews-grey-btn-prev"),n(d,!0,p,"reviews-grey-btn-next")}},v=new j(".swiper-container",{breakpoints:{1280:{slidesPerView:2,spaceBetween:32},768:{slidesPerView:1,spaceBetween:24},360:{slidesPerView:1,spaceBetween:16}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},autoHeight:!0,keyboard:{enabled:!0,onlyInViewport:!0},simulateTouch:!0,allowTouchMove:!0,on:{slideChange:()=>{const t=v.activeIndex,o=v.params.slidesPerView,i=y.length;t===0?document.body.classList.contains("body-dark")?n(c,!0,u,"reviews-dark-grey-btn-prev"):n(c,!0,u,"reviews-grey-btn-prev"):document.body.classList.contains("body-dark")?n(c,!1,u,"reviews-white-btn-prev"):n(c,!1,u,"reviews-black-btn-prev"),t>=i-o?(document.body.classList.contains("body-dark")?n(d,!0,p,"reviews-dark-grey-btn-next"):n(d,!0,p,"reviews-grey-btn-next"),b.info({title:"Info",message:"Sorry, no more reviews for now.",position:"topRight",color:"green"})):document.body.classList.contains("body-dark")?n(d,!1,p,"reviews-white-btn-next"):n(d,!1,p,"reviews-black-btn-next")}}}),n=(t,o,i,e)=>{t.disabled=o,i.setAttribute("href",`${h}#${e}`),o?t.style.cursor="not-allowed":t.style.cursor=""};document.body.classList.contains("body-dark")?n(c,!0,u,"reviews-dark-grey-btn-prev"):n(c,!0,u,"reviews-grey-btn-prev");c.addEventListener("click",()=>{v.slidePrev()});d.addEventListener("click",()=>{v.slideNext()});J();document.addEventListener("DOMContentLoaded",()=>{const t=()=>{const i=document.getElementById("workTogether");i?i.scrollIntoView({behavior:"smooth"}):console.error('Element with ID "workTogether" not found.')},o=document.getElementById("scrollButton");o?o.addEventListener("click",t):console.error('Element with ID "scrollButton" not found.')});const R="/SuccessBuilders/assets/power-2x-7a1fbbd3.jpg",H="/SuccessBuilders/assets/power-1x-dc5a1c34.jpg",C="/SuccessBuilders/assets/mimino-2x-fc76a66c.jpg",O="/SuccessBuilders/assets/mimino-1x-8666f2c8.jpg",V="/SuccessBuilders/assets/vyshyvanka-2x-a051def3.jpg",F="/SuccessBuilders/assets/vyshyvanka-1x-3a9dd024.jpg",G="/SuccessBuilders/assets/chego-2x-5f3c1d1b.jpg",D="/SuccessBuilders/assets/chego-1x-b5c2f6e2.jpg",U="/SuccessBuilders/assets/energy-2x-8cd25da6.jpg",z="/SuccessBuilders/assets/energy-1x-d20414c1.jpg",_="/SuccessBuilders/assets/fruitbox-2x-051da1fe.jpg",Y="/SuccessBuilders/assets/fruitbox-1x-0db2fa14.jpg",Z="/SuccessBuilders/assets/starlight-2x-63c6cf4f.jpg",K="/SuccessBuilders/assets/starlight-1x-5b96ea05.jpg",f=[{origin:R,preview:H,technologies:"React, JavaScript, Node JS, Git",title:"power pulse webservice"},{origin:C,preview:O,technologies:"React, JavaScript, Node JS, Git",title:"mimino website"},{origin:V,preview:F,technologies:"React, JavaScript, Node JS, Git",title:"vyshyvanka vibes Landing Page"},{origin:G,preview:D,technologies:"React, JavaScript, Node JS, Git",title:"chego jewelry website"},{origin:U,preview:z,technologies:"React, JavaScript, Node JS, Git",title:"energy flow webservice"},{origin:_,preview:Y,technologies:"React, JavaScript, Node JS, Git",title:"fruitbox online store"},{origin:Z,preview:K,technologies:"React, JavaScript, Node JS, Git",title:"starlight studio landing page"}],Q=document.querySelector(".my-projects-list"),x=document.querySelector(".my-projects-btn-load-more");let g=0,L=3;const W=t=>{if(g<f.length){const i=f.slice(g,g+L).map(e=>`
       <li class="my-projects-item">
        <picture>
          <source
            srcset="
             ${e.preview} 1x,
              ${e.origin} 2x
            "
            media="(min-width: 1280px)"
          />
          <source
            srcset="
            ${e.preview} 1x,
              ${e.origin} 2x
            "
            media="(min-width: 768px)"
          />
          <source
            srcset="
             ${e.preview} 1x,
              ${e.origin} 2x
            "
            media="(max-width: 767px)"
          />
          <img
            src="${e.preview}"
            alt="${e.title.toLocaleUpperCase()}"
            class="my-projects-img"
            width="1008"
            height="578"
          />
        </picture>

        <p class="my-projects-text">${e.technologies}</p>
        <div class="my-projects-name-btn">
          <h3 class="my-projects-name">${e.title.toLocaleUpperCase()}</h3>
          <a
            class="my-projects-btn-visit"
            href="https://github.com/Note-m/SuccessBuilders"
            target="_blank"
            >VISIT<svg class="my-projects-icon" width="18" height="18">
              <use href="${h}#my-projects-arrow"></use>
            </svg></a>
        </div>
      </li>`).join("");Q.insertAdjacentHTML("beforeend",i),g+=L}g>=f.length&&x.classList.add("is-hidden")};x.addEventListener("click",W);const q=document.querySelector(".switch-btn"),S=t=>{q.classList.toggle("dark-on"),document.body.classList.toggle("body-dark");const o=document.querySelectorAll(".use-acardion"),i=document.querySelectorAll(".up-line-icon"),e=document.querySelectorAll(".down-line-icon");o.forEach(r=>{let s;document.body.classList.contains("body-dark")?s="faq-arrow-white-down-icon":s="faq-arrow-down-icon",r.setAttribute("href",`${h}#${s}`)}),e.forEach(r=>{let s;document.body.classList.contains("body-dark")?s="tech-skills-dark-white-square-icon":s="tech-skills-black-square-icon",r.setAttribute("href",`${h}#${s}`)}),i.forEach(r=>{let s;document.body.classList.contains("body-dark")?s="tech-skills-dark-green-square-icon":s="tech-skills-green-square-icon",r.setAttribute("href",`${h}#${s}`)})};q.addEventListener("click",S);document.addEventListener("DOMContentLoaded",()=>{S()});$();I();S();
//# sourceMappingURL=commonHelpers.js.map
