import{i as k,S as $}from"./assets/vendor-43af55b9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))e(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&e(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();(()=>{const t={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),body:document.querySelector("body"),menuLinks:document.querySelectorAll(".mob-menu-link")};t.openModalBtn.addEventListener("click",o),t.closeModalBtn.addEventListener("click",o);function o(){t.modal.classList.toggle("is-hidden"),t.body.classList.toggle("no-scroll"),t.modal.classList.contains("is-hidden")?(t.openModalBtn.style.display="block",t.closeModalBtn.style.display="none"):(t.openModalBtn.style.display="none",t.closeModalBtn.style.display="block")}t.menuLinks.forEach(n=>{n.addEventListener("click",()=>{o()})})})();function M(){const t=document.querySelectorAll(".accordion-block");t.forEach(o=>{const n=o.querySelector(".accordion-title"),e=o.querySelector(".accordion-content"),s=n.querySelector("span");n.addEventListener("click",()=>{o.classList.contains("active")?(o.classList.remove("active"),e.classList.remove("active"),e.style.maxHeight=0,s.querySelector("svg").style.transform="rotate(0deg)"):(t.forEach(r=>{r.classList.remove("active"),r.querySelector(".accordion-content").classList.remove("active"),r.querySelector(".accordion-content").style.maxHeight=0,r.querySelector("span svg").style.transform="rotate(0deg)"}),o.classList.add("active"),e.classList.add("active"),e.style.maxHeight=e.scrollHeight+"px",s.querySelector("svg").style.transform="rotate(180deg)")}),o===t[0]&&(o.classList.add("active"),e.classList.add("active"),e.style.maxHeight=e.scrollHeight+"px",s.querySelector("svg").style.transform="rotate(180deg)")})}function T(){const t=document.querySelector(".work-together-form"),o=document.querySelector(".work-together-backdrop"),n=document.querySelector(".work-together-modal-btn-closing"),e=document.querySelector(".work-together-input-email"),s=document.querySelector(".work-together-error-message"),r=document.querySelector(".work-together-adress-icon-form"),c=document.querySelector(".work-together-input-message"),i={};t.addEventListener("submit",a=>{if(a.preventDefault(),e.value.trim()!==""&&e.value.trim()!==" ")if(s.classList.remove("active"),/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e.value.trim())===!0){r.classList.remove("hidden"),e.style.color="black",i.email=e.value,i.comment=c.value,console.log(i);const j={method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"application/json; charset=UTF-8"}};fetch("https://portfolio-js.b.goit.study/api/requests",j).then(u=>{if(!u.ok)throw new Error(u.status);return u.json()}).then(u=>{o.classList.add("active"),r.classList.remove("hidden")}).catch(u=>{k.info({title:"Info",message:"Sorry, something went wromg, please check your request once more.",position:"topRight"})})}else s.innerHTML="Please input correct Email adress",e.style.color="red",s.classList.add("active");else s.innerHTML="Email cannnot be blank",s.classList.add("active")}),n.addEventListener("click",()=>{o.classList.remove("active"),e.value="",r.classList.add("hidden"),c.value=""}),o.addEventListener("click",a=>{a.target.classList.value!=="work-together-modal-btn-closing"&&a.target.classList.value!=="work-together-modal"&&(o.classList.remove("active"),e.value="",r.classList.add("hidden"),c.value="")}),document.addEventListener("keydown",a=>{a.key==="Escape"&&(o.classList.remove("active"),e.value="",r.classList.add("hidden"),c.value="")})}const q="/project/assets/icons-33941ae6.svg",B="https://portfolio-js.b.goit.study/api",S=document.querySelector(".swiper-wrapper"),d=document.querySelector(".swiper-button-prev"),g=document.querySelector(".swiper-button-next"),y=d.querySelector(".icon-swipe-prev use"),f=g.querySelector(".icon-swipe-next use");let h;const N=async()=>{try{const t=await fetch(`${B}/reviews`);if(!t.ok)throw new Error("Failed to fetch reviews");return await t.json()}catch(t){throw k.error({title:"Error",message:"Failed to fetch reviews. Please try again later.",position:"topRight"}),t}},A=t=>t.map(({author:o,avatar_url:n,review:e})=>`
    <li class="swiper-slide user-review">
      <p class="text-review">${e}</p>
      <div class="icon-photo-name">
        <img
          src="${n}"
          alt="${o}"
          width="40"
          height="40"
          class="avatar-icon"
        />
        <p class="user-name-review">${o}</p>
      </div>
    </li>`).join(""),P=async()=>{try{h=await N(),h.length>0&&(S.innerHTML+=A(h),v.update())}catch(t){console.log(t),S.innerHTML="<p class='not-found'>Not found</p>",l(d,!0,y,"reviews-grey-btn-prev"),l(g,!0,f,"reviews-grey-btn-next")}},v=new $(".swiper-container",{breakpoints:{1280:{slidesPerView:2,spaceBetween:32},768:{slidesPerView:1,spaceBetween:24},360:{slidesPerView:1,spaceBetween:16}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},autoHeight:!0,keyboard:{enabled:!0,onlyInViewport:!0},simulateTouch:!0,allowTouchMove:!0,on:{slideChange:()=>{const t=v.activeIndex,o=v.params.slidesPerView,n=h.length;t===0?l(d,!0,y,"reviews-grey-btn-prev"):l(d,!1,y,"reviews-black-btn-prev"),t>=n-o?(l(g,!0,f,"reviews-grey-btn-next"),k.info({title:"Info",message:"Sorry, no more reviews for now.",position:"topRight",color:"green"})):l(g,!1,f,"reviews-black-btn-next")}}}),l=(t,o,n,e)=>{t.disabled=o,n.setAttribute("href",`${q}#${e}`),o?t.style.cursor="not-allowed":t.style.cursor=""};l(d,!0,y,"reviews-grey-btn-prev");d.addEventListener("click",()=>{v.slidePrev()});g.addEventListener("click",()=>{v.slideNext()});P();document.addEventListener("DOMContentLoaded",()=>{const t=()=>{const n=document.getElementById("workTogether");n?n.scrollIntoView({behavior:"smooth"}):console.error('Element with ID "workTogether" not found.')},o=document.getElementById("scrollButton");o?o.addEventListener("click",t):console.error('Element with ID "scrollButton" not found.')});const I="/project/assets/power-2x-7a1fbbd3.jpg",R="/project/assets/power-1x-dc5a1c34.jpg",J="/project/assets/mimino-2x-fc76a66c.jpg",H="/project/assets/mimino-1x-8666f2c8.jpg",O="/project/assets/vyshyvanka-2x-a051def3.jpg",V="/project/assets/vyshyvanka-1x-3a9dd024.jpg",C="/project/assets/chego-2x-5f3c1d1b.jpg",G="/project/assets/chego-1x-b5c2f6e2.jpg",F="/project/assets/energy-2x-8cd25da6.jpg",U="/project/assets/energy-1x-d20414c1.jpg",D="/project/assets/fruitbox-2x-051da1fe.jpg",z="/project/assets/fruitbox-1x-0db2fa14.jpg",_="/project/assets/starlight-2x-63c6cf4f.jpg",Z="/project/assets/starlight-1x-5b96ea05.jpg",w=[{origin:I,preview:R,technologies:"React, JavaScript, Node JS, Git",title:"power pulse webservice"},{origin:J,preview:H,technologies:"React, JavaScript, Node JS, Git",title:"mimino website"},{origin:O,preview:V,technologies:"React, JavaScript, Node JS, Git",title:"vyshyvanka vibes Landing Page"},{origin:C,preview:G,technologies:"React, JavaScript, Node JS, Git",title:"chego jewelry website"},{origin:F,preview:U,technologies:"React, JavaScript, Node JS, Git",title:"energy flow webservice"},{origin:D,preview:z,technologies:"React, JavaScript, Node JS, Git",title:"fruitbox online store"},{origin:_,preview:Z,technologies:"React, JavaScript, Node JS, Git",title:"starlight studio landing page"}],K=document.querySelector(".my-projects-list"),b=document.querySelector(".my-projects-btn-load-more");let p=0,x=3;const Q=t=>{if(p<w.length){const n=w.slice(p,p+x).map(e=>`
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
            href="https://note-m.github.io/project/"
            target="_blank"
            >VISIT<svg class="my-projects-icon" width="18" height="18">
              <use href="${q}#my-projects-arrow"></use>
            </svg></a>
        </div>
      </li>`).join("");K.insertAdjacentHTML("beforeend",n),p+=x,b.style.color="#292929"}p>=w.length&&b.classList.add("is-hidden")};b.addEventListener("click",Q);const E=document.querySelector(".switch-btn"),m="../img/icons.svg",L=t=>{E.classList.toggle("dark-on"),document.body.classList.toggle("body-dark");const o=document.querySelectorAll(".use-acardion"),n=document.querySelectorAll(".up-line-icon use"),e=document.querySelectorAll(".down-line-icon use"),s=document.querySelectorAll(".btn-prev use"),r=document.querySelectorAll(".btn-next use");o.forEach(c=>{let i;document.body.classList.contains("body-dark")?i="faq-arrow-white-down-icon":i="faq-arrow-down-icon",c.setAttribute("href",`${m}#${i}`)}),e.forEach(c=>{let i;document.body.classList.contains("body-dark")?i="tech-skills-dark-white-square-icon":i="tech-skills-black-square-icon",c.setAttribute("href",`${m}#${i}`)}),n.forEach(c=>{let i;document.body.classList.contains("body-dark")?i="tech-skills-dark-green-square-icon":i="tech-skills-green-square-icon",c.setAttribute("href",`${m}#${i}`)}),s.forEach(c=>{const i=document.querySelector(".arrow-revi-prev");let a;document.body.classList.contains("body-dark")?i.disabled?a="reviews-dark-grey-btn-prev":a="reviews-white-btn-prev":i.disabled?a="reviews-grey-btn-prev":a="reviews-black-btn-prev",c.setAttribute("href",`${m}#${a}`)}),r.forEach(c=>{const i=document.querySelector(".arrow-revi-next");let a;document.body.classList.contains("body-dark")?i.disabled?a="reviews-dark-grey-btn-next":a="reviews-white-btn-next":i.disabled?a="reviews-grey-btn-next":a="reviews-black-btn-next",c.setAttribute("href",`${m}#${a}`)})};E.addEventListener("click",L);document.addEventListener("DOMContentLoaded",()=>{L()});M();T();L();
//# sourceMappingURL=commonHelpers.js.map
