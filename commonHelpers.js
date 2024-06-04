import{i as L,S as M}from"./assets/vendor-43af55b9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&e(n)}).observe(document,{childList:!0,subtree:!0});function i(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(r){if(r.ep)return;r.ep=!0;const s=i(r);fetch(r.href,s)}})();(()=>{const t={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),body:document.querySelector("body"),menuLinks:document.querySelectorAll(".mob-menu-link")};t.openModalBtn.addEventListener("click",o),t.closeModalBtn.addEventListener("click",o);function o(){t.modal.classList.toggle("is-hidden"),t.body.classList.toggle("no-scroll"),t.modal.classList.contains("is-hidden")?(t.openModalBtn.style.display="block",t.closeModalBtn.style.display="none"):(t.openModalBtn.style.display="none",t.closeModalBtn.style.display="block")}t.menuLinks.forEach(i=>{i.addEventListener("click",()=>{o()})})})();function T(){const t=document.querySelectorAll(".accordion-block");t.forEach(o=>{const i=o.querySelector(".accordion-title"),e=o.querySelector(".accordion-content"),r=i.querySelector("span");i.addEventListener("click",()=>{o.classList.contains("active")?(o.classList.remove("active"),e.classList.remove("active"),e.style.maxHeight=0,r.querySelector("svg").style.transform="rotate(0deg)"):(t.forEach(s=>{s.classList.remove("active"),s.querySelector(".accordion-content").classList.remove("active"),s.querySelector(".accordion-content").style.maxHeight=0,s.querySelector("span svg").style.transform="rotate(0deg)"}),o.classList.add("active"),e.classList.add("active"),e.style.maxHeight=e.scrollHeight+"px",r.querySelector("svg").style.transform="rotate(180deg)")}),o===t[0]&&(o.classList.add("active"),e.classList.add("active"),e.style.maxHeight=e.scrollHeight+"px",r.querySelector("svg").style.transform="rotate(180deg)")})}function $(){const t=document.querySelector(".work-together-form"),o=document.querySelector(".work-together-backdrop"),i=document.querySelector(".work-together-modal-btn-closing"),e=document.querySelector(".work-together-input-email"),r=document.querySelector(".work-together-error-message"),s=document.querySelector(".work-together-adress-icon-form"),n=document.querySelector(".work-together-input-message"),g={};t.addEventListener("submit",a=>{if(a.preventDefault(),e.value.trim()!==""&&e.value.trim()!==" ")if(r.classList.remove("active"),/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e.value.trim())===!0){s.classList.remove("hidden"),e.style.color="black",g.email=e.value,g.comment=n.value,console.log(g);const E={method:"POST",body:JSON.stringify(g),headers:{"Content-Type":"application/json; charset=UTF-8"}};fetch("https://portfolio-js.b.goit.study/api/requests",E).then(d=>{if(!d.ok)throw new Error(d.status);return d.json()}).then(d=>{o.classList.add("active"),s.classList.remove("hidden")}).catch(d=>{L.info({title:"Info",message:"Sorry, something went wromg, please check your request once more.",position:"topRight"})})}else r.innerHTML="Please input correct Email adress",e.style.color="red",r.classList.add("active");else r.innerHTML="Email cannnot be blank",r.classList.add("active")}),i.addEventListener("click",()=>{o.classList.remove("active"),e.value="",s.classList.add("hidden"),n.value=""}),o.addEventListener("click",a=>{a.target.classList.value!=="work-together-modal-btn-closing"&&a.target.classList.value!=="work-together-modal"&&(o.classList.remove("active"),e.value="",s.classList.add("hidden"),n.value="")}),document.addEventListener("keydown",a=>{a.key==="Escape"&&(o.classList.remove("active"),e.value="",s.classList.add("hidden"),n.value="")})}const q="/project/assets/icons-33941ae6.svg",B="https://portfolio-js.b.goit.study/api",k=document.querySelector(".swiper-wrapper"),l=document.querySelector(".swiper-button-prev"),p=document.querySelector(".swiper-button-next"),h=l.querySelector(".icon-swipe-prev use"),f=p.querySelector(".icon-swipe-next use");let v;const A=async()=>{try{const t=await fetch(`${B}/reviews`);if(!t.ok)throw new Error("Failed to fetch reviews");return await t.json()}catch(t){throw L.error({title:"Error",message:"Failed to fetch reviews. Please try again later.",position:"topRight"}),t}},I=t=>t.map(({author:o,avatar_url:i,review:e})=>`
    <li class="swiper-slide user-review">
      <p class="text-review">${e}</p>
      <div class="icon-photo-name">
        <img
          src="${i}"
          alt="${o}"
          width="40"
          height="40"
          class="avatar-icon"
        />
        <p class="user-name-review">${o}</p>
      </div>
    </li>`).join(""),N=async()=>{try{v=await A(),v.length>0&&(k.innerHTML+=I(v),m.update())}catch(t){console.log(t),k.innerHTML="<p class='not-found'>Not found</p>",c(l,!0,h,"reviews-grey-btn-prev"),c(p,!0,f,"reviews-grey-btn-next")}},m=new M(".swiper-container",{breakpoints:{1280:{slidesPerView:2,spaceBetween:32},768:{slidesPerView:1,spaceBetween:24},360:{slidesPerView:1,spaceBetween:16}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},autoHeight:!0,keyboard:{enabled:!0,onlyInViewport:!0},simulateTouch:!0,allowTouchMove:!0,on:{slideChange:()=>{const t=m.activeIndex,o=m.params.slidesPerView,i=v.length;t===0?c(l,!0,h,"reviews-grey-btn-prev"):c(l,!1,h,"reviews-black-btn-prev"),t>=i-o?(c(p,!0,f,"reviews-grey-btn-next"),L.info({title:"Info",message:"Sorry, no more reviews for now.",position:"topRight",color:"green"})):c(p,!1,f,"reviews-black-btn-next")}}}),c=(t,o,i,e)=>{t.disabled=o,i.setAttribute("href",`${q}#${e}`),o?t.style.cursor="not-allowed":t.style.cursor=""};c(l,!0,h,"reviews-grey-btn-prev");l.addEventListener("click",()=>{m.slidePrev()});p.addEventListener("click",()=>{m.slideNext()});N();document.addEventListener("DOMContentLoaded",()=>{const t=()=>{const i=document.getElementById("workTogether");i?i.scrollIntoView({behavior:"smooth"}):console.error('Element with ID "workTogether" not found.')},o=document.getElementById("scrollButton");o?o.addEventListener("click",t):console.error('Element with ID "scrollButton" not found.')});const P="/project/assets/power-2x-7a1fbbd3.jpg",J="/project/assets/power-1x-dc5a1c34.jpg",R="/project/assets/mimino-2x-fc76a66c.jpg",H="/project/assets/mimino-1x-8666f2c8.jpg",O="/project/assets/vyshyvanka-2x-a051def3.jpg",V="/project/assets/vyshyvanka-1x-3a9dd024.jpg",C="/project/assets/chego-2x-5f3c1d1b.jpg",G="/project/assets/chego-1x-b5c2f6e2.jpg",F="/project/assets/energy-2x-8cd25da6.jpg",U="/project/assets/energy-1x-d20414c1.jpg",D="/project/assets/fruitbox-2x-051da1fe.jpg",z="/project/assets/fruitbox-1x-0db2fa14.jpg",_="/project/assets/starlight-2x-63c6cf4f.jpg",Z="/project/assets/starlight-1x-5b96ea05.jpg",y=[{origin:P,preview:J,technologies:"React, JavaScript, Node JS, Git",title:"power pulse webservice"},{origin:R,preview:H,technologies:"React, JavaScript, Node JS, Git",title:"mimino website"},{origin:O,preview:V,technologies:"React, JavaScript, Node JS, Git",title:"vyshyvanka vibes Landing Page"},{origin:C,preview:G,technologies:"React, JavaScript, Node JS, Git",title:"chego jewelry website"},{origin:F,preview:U,technologies:"React, JavaScript, Node JS, Git",title:"energy flow webservice"},{origin:D,preview:z,technologies:"React, JavaScript, Node JS, Git",title:"fruitbox online store"},{origin:_,preview:Z,technologies:"React, JavaScript, Node JS, Git",title:"starlight studio landing page"}],K=document.querySelector(".my-projects-list"),b=document.querySelector(".my-projects-btn-load-more");let u=0,x=3;const Q=t=>{if(u<y.length){const i=y.slice(u,u+x).map(e=>`
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
      </li>`).join("");K.insertAdjacentHTML("beforeend",i),u+=x,b.style.color="#292929"}u>=y.length&&b.classList.add("is-hidden")};b.addEventListener("click",Q);const j=document.querySelector(".switch-btn"),w="../img/icons.svg",S=t=>{j.classList.toggle("dark-on"),document.body.classList.toggle("body-dark");const o=document.querySelectorAll(".use-acardion"),i=document.querySelectorAll(".up-line-icon use"),e=document.querySelectorAll(".down-line-icon use");document.querySelectorAll(".btn-prev use"),document.querySelectorAll(".btn-next use"),o.forEach(r=>{let s;document.body.classList.contains("body-dark")?s="faq-arrow-white-down-icon":s="faq-arrow-down-icon",r.setAttribute("href",`${w}#${s}`)}),e.forEach(r=>{let s;document.body.classList.contains("body-dark")?s="tech-skills-dark-white-square-icon":s="tech-skills-black-square-icon",r.setAttribute("href",`${w}#${s}`)}),i.forEach(r=>{let s;document.body.classList.contains("body-dark")?s="tech-skills-dark-green-square-icon":s="tech-skills-green-square-icon",r.setAttribute("href",`${w}#${s}`)})};j.addEventListener("click",S);document.addEventListener("DOMContentLoaded",()=>{S()});T();$();S();
//# sourceMappingURL=commonHelpers.js.map
