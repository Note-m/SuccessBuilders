import{i as b,S as B}from"./assets/vendor-43af55b9.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function i(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function e(r){if(r.ep)return;r.ep=!0;const o=i(r);fetch(r.href,o)}})();(()=>{const t={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),body:document.querySelector("body"),menuLinks:document.querySelectorAll(".mob-menu-link")};t.openModalBtn.addEventListener("click",s),t.closeModalBtn.addEventListener("click",s);function s(){t.modal.classList.toggle("is-hidden"),t.body.classList.toggle("no-scroll"),t.modal.classList.contains("is-hidden")?(t.openModalBtn.style.display="block",t.closeModalBtn.style.display="none"):(t.openModalBtn.style.display="none",t.closeModalBtn.style.display="block")}t.menuLinks.forEach(i=>{i.addEventListener("click",()=>{s()})})})();function j(){const t=document.querySelectorAll(".accordion-block");t.forEach(s=>{const i=s.querySelector(".accordion-title"),e=s.querySelector(".accordion-content"),r=i.querySelector("span");i.addEventListener("click",()=>{s.classList.contains("active")?(s.classList.remove("active"),e.classList.remove("active"),e.style.maxHeight=0,r.querySelector("svg").style.transform="rotate(0deg)"):(t.forEach(o=>{o.classList.remove("active"),o.querySelector(".accordion-content").classList.remove("active"),o.querySelector(".accordion-content").style.maxHeight=0,o.querySelector("span svg").style.transform="rotate(0deg)"}),s.classList.add("active"),e.classList.add("active"),e.style.maxHeight=e.scrollHeight+"px",r.querySelector("svg").style.transform="rotate(180deg)")}),s===t[0]&&(s.classList.add("active"),e.classList.add("active"),e.style.maxHeight=e.scrollHeight+"px",r.querySelector("svg").style.transform="rotate(180deg)")})}function M(){const t=document.querySelector(".work-together-form"),s=document.querySelector(".work-together-backdrop"),i=document.querySelector(".work-together-modal-btn-closing"),e=document.querySelector(".work-together-input-email"),r=document.querySelector(".work-together-error-message"),o=document.querySelector(".work-together-adress-icon-form"),a=document.querySelector(".work-together-input-message"),h={};t.addEventListener("submit",u=>{if(u.preventDefault(),e.value.trim()!==""&&e.value.trim()!==" ")if(r.classList.remove("active"),/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e.value.trim())===!0){o.classList.remove("hidden"),e.style.color="black",h.email=e.value,h.comment=a.value,console.log(h);const E={method:"POST",body:JSON.stringify(h),headers:{"Content-Type":"application/json; charset=UTF-8"}};fetch("https://portfolio-js.b.goit.study/api/requests",E).then(m=>{if(!m.ok)throw new Error(m.status);return m.json()}).then(m=>{s.classList.add("active"),o.classList.remove("hidden")}).catch(m=>{b.info({title:"Info",message:"Sorry, something went wromg, please check your request once more.",position:"topRight"})})}else r.innerHTML="Please input correct Email adress",e.style.color="red",r.classList.add("active");else r.innerHTML="Email cannnot be blank",r.classList.add("active")}),i.addEventListener("click",()=>{s.classList.remove("active"),e.value="",o.classList.add("hidden"),a.value=""}),s.addEventListener("click",u=>{u.target.classList.value!=="work-together-modal-btn-closing"&&u.target.classList.value!=="work-together-modal"&&(s.classList.remove("active"),e.value="",o.classList.add("hidden"),a.value="")}),document.addEventListener("keydown",u=>{u.key==="Escape"&&(s.classList.remove("active"),e.value="",o.classList.add("hidden"),a.value="")})}const v="/SuccessBuilders/assets/icons-33941ae6.svg",T="https://portfolio-js.b.goit.study/api",k=document.querySelector(".swiper-wrapper"),c=document.querySelector(".swiper-button-prev"),l=document.querySelector(".swiper-button-next"),d=c.querySelector(".icon-swipe-prev use"),p=l.querySelector(".icon-swipe-next use");let w;const $=async()=>{try{const t=await fetch(`${T}/reviews`);if(!t.ok)throw new Error("Failed to fetch reviews");return await t.json()}catch(t){throw b.error({title:"Error",message:"Failed to fetch reviews. Please try again later.",position:"topRight"}),t}},I=t=>t.map(({author:s,avatar_url:i,review:e})=>`
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
    </li>`).join(""),N=async()=>{try{w=await $(),w.length>0&&(k.innerHTML+=I(w),y.update())}catch(t){console.log(t),k.innerHTML="<p class='not-found'>Not found</p>",n(c,!0,d,"reviews-grey-btn-prev"),n(l,!0,p,"reviews-grey-btn-next")}},y=new B(".swiper-container",{breakpoints:{1280:{slidesPerView:2,spaceBetween:32},768:{slidesPerView:1,spaceBetween:24},360:{slidesPerView:1,spaceBetween:16}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},autoHeight:!0,keyboard:{enabled:!0,onlyInViewport:!0},simulateTouch:!0,allowTouchMove:!0,on:{slideChange:()=>{const t=y.activeIndex,s=y.params.slidesPerView,i=w.length;t===0?document.body.classList.contains("body-dark")?n(c,!0,d,"reviews-dark-grey-btn-prev"):n(c,!0,d,"reviews-grey-btn-prev"):document.body.classList.contains("body-dark")?n(c,!1,d,"reviews-white-btn-prev"):n(c,!1,d,"reviews-black-btn-prev"),t>=i-s?(document.body.classList.contains("body-dark")?n(l,!0,p,"reviews-dark-grey-btn-next"):n(l,!0,p,"reviews-grey-btn-next"),b.info({title:"Info",message:"Sorry, no more reviews for now.",position:"topRight",color:"green"})):document.body.classList.contains("body-dark")?n(l,!1,p,"reviews-white-btn-next"):n(l,!1,p,"reviews-black-btn-next")}}}),n=(t,s,i,e)=>{t.disabled=s,i.setAttribute("href",`${v}#${e}`),s?t.style.cursor="not-allowed":t.style.cursor=""};document.body.classList.contains("body-dark")?n(c,!0,d,"reviews-dark-grey-btn-prev"):n(c,!0,d,"reviews-grey-btn-prev");c.addEventListener("click",()=>{y.slidePrev()});l.addEventListener("click",()=>{y.slideNext()});N();document.addEventListener("DOMContentLoaded",()=>{const t=()=>{const i=document.getElementById("workTogether");i?i.scrollIntoView({behavior:"smooth"}):console.error('Element with ID "workTogether" not found.')},s=document.getElementById("scrollButton");s?s.addEventListener("click",t):console.error('Element with ID "scrollButton" not found.')});const P="/SuccessBuilders/assets/power-2x-7a1fbbd3.jpg",A="/SuccessBuilders/assets/power-1x-dc5a1c34.jpg",J="/SuccessBuilders/assets/mimino-2x-fc76a66c.jpg",R="/SuccessBuilders/assets/mimino-1x-8666f2c8.jpg",H="/SuccessBuilders/assets/vyshyvanka-2x-a051def3.jpg",O="/SuccessBuilders/assets/vyshyvanka-1x-3a9dd024.jpg",V="/SuccessBuilders/assets/chego-2x-5f3c1d1b.jpg",C="/SuccessBuilders/assets/chego-1x-b5c2f6e2.jpg",G="/SuccessBuilders/assets/energy-2x-8cd25da6.jpg",F="/SuccessBuilders/assets/energy-1x-d20414c1.jpg",U="/SuccessBuilders/assets/fruitbox-2x-051da1fe.jpg",D="/SuccessBuilders/assets/fruitbox-1x-0db2fa14.jpg",z="/SuccessBuilders/assets/starlight-2x-63c6cf4f.jpg",_="/SuccessBuilders/assets/starlight-1x-5b96ea05.jpg",f=[{origin:P,preview:A,technologies:"React, JavaScript, Node JS, Git",title:"power pulse webservice"},{origin:J,preview:R,technologies:"React, JavaScript, Node JS, Git",title:"mimino website"},{origin:H,preview:O,technologies:"React, JavaScript, Node JS, Git",title:"vyshyvanka vibes Landing Page"},{origin:V,preview:C,technologies:"React, JavaScript, Node JS, Git",title:"chego jewelry website"},{origin:G,preview:F,technologies:"React, JavaScript, Node JS, Git",title:"energy flow webservice"},{origin:U,preview:D,technologies:"React, JavaScript, Node JS, Git",title:"fruitbox online store"},{origin:z,preview:_,technologies:"React, JavaScript, Node JS, Git",title:"starlight studio landing page"}],Z=document.querySelector(".my-projects-list"),x=document.querySelector(".my-projects-btn-load-more");let g=0,L=3;const K=t=>{if(g<f.length){const i=f.slice(g,g+L).map(e=>`
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
      </li>`).join("");Z.insertAdjacentHTML("beforeend",i),g+=L}g>=f.length&&x.classList.add("is-hidden")};x.addEventListener("click",K);const q=document.querySelector(".switch-btn"),S=t=>{q.classList.toggle("dark-on"),document.body.classList.toggle("body-dark");const s=document.querySelectorAll(".use-acardion"),i=document.querySelectorAll(".up-line-icon"),e=document.querySelectorAll(".down-line-icon");s.forEach(r=>{let o;document.body.classList.contains("body-dark")?o="faq-arrow-white-down-icon":o="faq-arrow-down-icon",r.setAttribute("href",`${v}#${o}`)}),e.forEach(r=>{let o;document.body.classList.contains("body-dark")?o="tech-skills-dark-white-square-icon":o="tech-skills-black-square-icon",r.setAttribute("href",`${v}#${o}`)}),i.forEach(r=>{let o;document.body.classList.contains("body-dark")?o="tech-skills-dark-green-square-icon":o="tech-skills-green-square-icon",r.setAttribute("href",`${v}#${o}`)})};q.addEventListener("click",S);document.addEventListener("DOMContentLoaded",()=>{S()});j();M();S();
//# sourceMappingURL=commonHelpers.js.map
