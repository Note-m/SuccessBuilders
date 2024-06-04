import{i as b,S as j}from"./assets/vendor-43af55b9.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function i(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function e(r){if(r.ep)return;r.ep=!0;const o=i(r);fetch(r.href,o)}})();(()=>{const t={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),body:document.querySelector("body"),menuLinks:document.querySelectorAll(".mob-menu-link")};t.openModalBtn.addEventListener("click",s),t.closeModalBtn.addEventListener("click",s);function s(){t.modal.classList.toggle("is-hidden"),t.body.classList.toggle("no-scroll"),t.modal.classList.contains("is-hidden")?(t.openModalBtn.style.display="block",t.closeModalBtn.style.display="none"):(t.openModalBtn.style.display="none",t.closeModalBtn.style.display="block")}t.menuLinks.forEach(i=>{i.addEventListener("click",()=>{s()})})})();function $(){const t=document.querySelectorAll(".accordion-block");t.forEach(s=>{const i=s.querySelector(".accordion-title"),e=s.querySelector(".accordion-content"),r=i.querySelector("span");i.addEventListener("click",()=>{s.classList.contains("active")?(s.classList.remove("active"),e.classList.remove("active"),e.style.maxHeight=0,r.querySelector("svg").style.transform="rotate(0deg)"):(t.forEach(o=>{o.classList.remove("active"),o.querySelector(".accordion-content").classList.remove("active"),o.querySelector(".accordion-content").style.maxHeight=0,o.querySelector("span svg").style.transform="rotate(0deg)"}),s.classList.add("active"),e.classList.add("active"),e.style.maxHeight=e.scrollHeight+"px",r.querySelector("svg").style.transform="rotate(180deg)")}),s===t[0]&&(s.classList.add("active"),e.classList.add("active"),e.style.maxHeight=e.scrollHeight+"px",r.querySelector("svg").style.transform="rotate(180deg)")})}function I(){const t=document.querySelector(".work-together-form"),s=document.querySelector(".work-together-backdrop"),i=document.querySelector(".work-together-modal-btn-closing"),e=document.querySelector(".work-together-input-email"),r=document.querySelector(".work-together-error-message"),o=document.querySelector(".work-together-adress-icon-form"),a=document.querySelector(".work-together-input-message"),E=document.querySelector(".work-together-modal-main"),B=document.querySelector(".work-together-modal-second"),w={},T="https://portfolio-js.b.goit.study/api/";t.addEventListener("submit",m=>{if(m.preventDefault(),e.value.trim()!==""&&e.value.trim()!==" ")if(r.classList.remove("active"),/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e.value.trim())===!0){o.classList.remove("hidden"),e.style.color="black",w.email=e.value,w.comment=a.value;const M={method:"POST",body:JSON.stringify(w),headers:{"Content-Type":"application/json; charset=UTF-8"}};fetch(`${T}requests`,M).then(l=>{if(!l.ok)throw new Error(l.status);return l.json()}).then(l=>{E.textContent=l.title,B.textContent=l.message,s.classList.add("active"),o.classList.remove("hidden")}).catch(l=>{b.info({title:"Info",message:"Sorry, something went wromg, please check your request once more, fill all the fields"}),console.log(l)})}else r.innerHTML="Please input correct Email adress",e.style.color="red",r.classList.add("active");else r.innerHTML="Field Email cannot be blank",r.classList.add("active")}),i.addEventListener("click",()=>{s.classList.remove("active"),e.value="",o.classList.add("hidden"),a.value=""}),s.addEventListener("click",m=>{m.target.classList.value!=="work-together-modal-btn-closing"&&m.target.classList.value!=="work-together-modal"&&(s.classList.remove("active"),e.value="",o.classList.add("hidden"),a.value="")}),document.addEventListener("keydown",m=>{m.key==="Escape"&&(s.classList.remove("active"),e.value="",o.classList.add("hidden"),a.value="")})}const v="/SuccessBuilders/assets/icons-33941ae6.svg",N="https://portfolio-js.b.goit.study/api",k=document.querySelector(".swiper-wrapper"),c=document.querySelector(".swiper-button-prev"),d=document.querySelector(".swiper-button-next"),u=c.querySelector(".icon-swipe-prev use"),p=d.querySelector(".icon-swipe-next use");let y;const P=async()=>{try{const t=await fetch(`${N}/reviews`);if(!t.ok)throw new Error("Failed to fetch reviews");return await t.json()}catch(t){throw b.error({title:"Error",message:"Failed to fetch reviews. Please try again later.",position:"topRight"}),t}},A=t=>t.map(({author:s,avatar_url:i,review:e})=>`
    <li class='swiper-slide user-review'>
      <p class='text-review'>${e}</p>
      <div class='icon-photo-name'>
        <img
          src="${i}"
          alt="${s}"
          width="40"
          height="40"
          class="avatar-icon"
        />
        <p class="user-name-review">${s}</p>
      </div>
    </li>`).join(""),J=async()=>{try{y=await P(),y.length>0&&(k.innerHTML+=A(y),h.update())}catch(t){console.log(t),k.innerHTML="<p class='not-found'>Not found</p>",n(c,!0,u,"reviews-grey-btn-prev"),n(d,!0,p,"reviews-grey-btn-next")}},h=new j(".swiper-container",{breakpoints:{1280:{slidesPerView:2,spaceBetween:32},768:{slidesPerView:1,spaceBetween:24},360:{slidesPerView:1,spaceBetween:16}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},autoHeight:!0,keyboard:{enabled:!0,onlyInViewport:!0},simulateTouch:!0,allowTouchMove:!0,on:{slideChange:()=>{const t=h.activeIndex,s=h.params.slidesPerView,i=y.length;t===0?document.body.classList.contains("body-dark")?n(c,!0,u,"reviews-dark-grey-btn-prev"):n(c,!0,u,"reviews-grey-btn-prev"):document.body.classList.contains("body-dark")?n(c,!1,u,"reviews-white-btn-prev"):n(c,!1,u,"reviews-black-btn-prev"),t>=i-s?(document.body.classList.contains("body-dark")?n(d,!0,p,"reviews-dark-grey-btn-next"):n(d,!0,p,"reviews-grey-btn-next"),b.info({title:"Info",message:"Sorry, no more reviews for now.",position:"topRight",color:"green"})):document.body.classList.contains("body-dark")?n(d,!1,p,"reviews-white-btn-next"):n(d,!1,p,"reviews-black-btn-next")}}}),n=(t,s,i,e)=>{t.disabled=s,i.setAttribute("href",`${v}#${e}`),s?t.style.cursor="not-allowed":t.style.cursor=""};document.body.classList.contains("body-dark")?n(c,!0,u,"reviews-dark-grey-btn-prev"):n(c,!0,u,"reviews-grey-btn-prev");c.addEventListener("click",()=>{h.slidePrev()});d.addEventListener("click",()=>{h.slideNext()});J();document.addEventListener("DOMContentLoaded",()=>{const t=()=>{const i=document.getElementById("workTogether");i?i.scrollIntoView({behavior:"smooth"}):console.error('Element with ID "workTogether" not found.')},s=document.getElementById("scrollButton");s?s.addEventListener("click",t):console.error('Element with ID "scrollButton" not found.')});const R="/SuccessBuilders/assets/power-2x-7a1fbbd3.jpg",H="/SuccessBuilders/assets/power-1x-dc5a1c34.jpg",O="/SuccessBuilders/assets/mimino-2x-fc76a66c.jpg",C="/SuccessBuilders/assets/mimino-1x-8666f2c8.jpg",V="/SuccessBuilders/assets/vyshyvanka-2x-a051def3.jpg",F="/SuccessBuilders/assets/vyshyvanka-1x-3a9dd024.jpg",G="/SuccessBuilders/assets/chego-2x-5f3c1d1b.jpg",U="/SuccessBuilders/assets/chego-1x-b5c2f6e2.jpg",D="/SuccessBuilders/assets/energy-2x-8cd25da6.jpg",z="/SuccessBuilders/assets/energy-1x-d20414c1.jpg",_="/SuccessBuilders/assets/fruitbox-2x-051da1fe.jpg",Z="/SuccessBuilders/assets/fruitbox-1x-0db2fa14.jpg",K="/SuccessBuilders/assets/starlight-2x-63c6cf4f.jpg",Q="/SuccessBuilders/assets/starlight-1x-5b96ea05.jpg",f=[{origin:R,preview:H,technologies:"React, JavaScript, Node JS, Git",title:"power pulse webservice"},{origin:O,preview:C,technologies:"React, JavaScript, Node JS, Git",title:"mimino website"},{origin:V,preview:F,technologies:"React, JavaScript, Node JS, Git",title:"vyshyvanka vibes Landing Page"},{origin:G,preview:U,technologies:"React, JavaScript, Node JS, Git",title:"chego jewelry website"},{origin:D,preview:z,technologies:"React, JavaScript, Node JS, Git",title:"energy flow webservice"},{origin:_,preview:Z,technologies:"React, JavaScript, Node JS, Git",title:"fruitbox online store"},{origin:K,preview:Q,technologies:"React, JavaScript, Node JS, Git",title:"starlight studio landing page"}],W=document.querySelector(".my-projects-list"),x=document.querySelector(".my-projects-btn-load-more");let g=0,L=3;const X=t=>{if(g<f.length){const i=f.slice(g,g+L).map(e=>`
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
            href="https://note-m.github.io/SuccessBuilders/"
            target="_blank"
            >VISIT<svg class="my-projects-icon" width="18" height="18">
              <use href="${v}#my-projects-arrow"></use>
            </svg></a>
        </div>
      </li>`).join("");W.insertAdjacentHTML("beforeend",i),g+=L}g>=f.length&&x.classList.add("is-hidden")};x.addEventListener("click",X);const q=document.querySelector(".switch-btn"),S=t=>{q.classList.toggle("dark-on"),document.body.classList.toggle("body-dark");const s=document.querySelectorAll(".use-acardion"),i=document.querySelectorAll(".up-line-icon"),e=document.querySelectorAll(".down-line-icon");s.forEach(r=>{let o;document.body.classList.contains("body-dark")?o="faq-arrow-white-down-icon":o="faq-arrow-down-icon",r.setAttribute("href",`${v}#${o}`)}),e.forEach(r=>{let o;document.body.classList.contains("body-dark")?o="tech-skills-dark-white-square-icon":o="tech-skills-black-square-icon",r.setAttribute("href",`${v}#${o}`)}),i.forEach(r=>{let o;document.body.classList.contains("body-dark")?o="tech-skills-dark-green-square-icon":o="tech-skills-green-square-icon",r.setAttribute("href",`${v}#${o}`)})};q.addEventListener("click",S);document.addEventListener("DOMContentLoaded",()=>{S()});$();I();S();
//# sourceMappingURL=commonHelpers.js.map
