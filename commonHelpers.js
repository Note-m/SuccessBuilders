import{i as w,S as k}from"./assets/vendor-43af55b9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&e(c)}).observe(document,{childList:!0,subtree:!0});function i(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(r){if(r.ep)return;r.ep=!0;const s=i(r);fetch(r.href,s)}})();function E(){const o=document.querySelectorAll(".accordion-block");o.forEach(t=>{const i=t.querySelector(".accordion-title"),e=t.querySelector(".accordion-content"),r=i.querySelector("span");i.addEventListener("click",()=>{t.classList.contains("active")?(t.classList.remove("active"),e.classList.remove("active"),e.style.maxHeight=0,r.querySelector("svg").style.transform="rotate(0deg)"):(o.forEach(s=>{s.classList.remove("active"),s.querySelector(".accordion-content").classList.remove("active"),s.querySelector(".accordion-content").style.maxHeight=0,s.querySelector("span svg").style.transform="rotate(0deg)"}),t.classList.add("active"),e.classList.add("active"),e.style.maxHeight=e.scrollHeight+"px",r.querySelector("svg").style.transform="rotate(180deg)")}),t===o[0]&&(t.classList.add("active"),e.classList.add("active"),e.style.maxHeight=e.scrollHeight+"px",r.querySelector("svg").style.transform="rotate(180deg)")})}function q(){const o=document.querySelector(".work-together-form"),t=document.querySelector(".work-together-backdrop"),i=document.querySelector(".work-together-modal-btn-closing"),e=document.querySelector(".work-together-input-email"),r=document.querySelector(".work-together-error-message"),s=document.querySelector(".work-together-adress-icon-form"),c=document.querySelector(".work-together-input-message"),u={};o.addEventListener("submit",l=>{if(l.preventDefault(),e.value.trim()!==""&&e.value.trim()!==" ")if(r.classList.remove("active"),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.value.trim())===!0){s.classList.remove("hidden"),e.style.color="black",u.email=e.value,u.comment=c.value,console.log(u);const j={method:"POST",body:JSON.stringify(u),headers:{"Content-Type":"application/json; charset=UTF-8"}};fetch("https://portfolio-js.b.goit.study/api/requests",j).then(d=>{if(!d.ok)throw new Error(d.status);return d.json()}).then(d=>{t.classList.add("active"),s.classList.remove("hidden")}).catch(d=>{w.info({title:"Info",message:"Sorry, something went wromg, please check your request once more.",position:"topRight"})})}else r.innerHTML="Olease input correct Email adress",e.style.color="red",r.classList.add("active");else r.innerHTML="Email cannnot be blank",r.classList.add("active")}),i.addEventListener("click",()=>{t.classList.remove("active"),e.value="",s.classList.add("hidden"),c.value=""}),t.addEventListener("click",l=>{l.target.classList.value!=="work-together-modal-btn-closing"&&l.target.classList.value!=="work-together-modal"&&(t.classList.remove("active"),e.value="",s.classList.add("hidden"),c.value="")}),document.addEventListener("keydown",l=>{l.key==="Escape"&&(t.classList.remove("active"),e.value="",s.classList.add("hidden"),c.value="")})}const b="https://portfolio-js.b.goit.study/api",f=document.querySelector(".swiper-wrapper"),n=document.querySelector(".swiper-button-prev"),m=document.querySelector(".swiper-button-next"),L=n.querySelector(".icon-swipe"),S=m.querySelector(".icon-swipe");let v;const T=async()=>{try{const o=await fetch(`${b}/reviews`);if(!o.ok)throw new Error("Failed to fetch reviews");return await o.json()}catch(o){throw w.error({title:"Error",message:"Failed to fetch reviews. Please try again later.",position:"topRight"}),o}},$=o=>o.map(({author:t,avatar_url:i,review:e})=>`
    <li class="swiper-slide user-review">
      <p class="text-review">${e}</p>
      <div class="icon-photo-name">
        <img
          src="${i}"
          alt="${t}"
          width="40"
          height="40"
          class="avatar-icon"
        />
        <p class="user-name-review">${t}</p>
      </div>
    </li>`).join(""),I=async()=>{try{v=await T(),v.length>0&&(f.innerHTML+=$(v),p.update())}catch(o){console.log(o),f.innerHTML="<p class='not-found'>Not found</p>",a(n,!0),a(m,!0)}},p=new k(".swiper-container",{breakpoints:{1280:{slidesPerView:2,spaceBetween:32},768:{slidesPerView:1,spaceBetween:10},360:{slidesPerView:1,spaceBetween:10}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},autoHeight:!0,keyboard:{enabled:!0,onlyInViewport:!0},simulateTouch:!0,allowTouchMove:!0,on:{slideChange:()=>{const o=p.activeIndex,t=p.params.slidesPerView,i=v.length;console.log(`currentIndex: ${o}`),console.log(`slidesPerView: ${t}`),console.log(`totalSlides: ${i}`),o===0?a(n,!0):a(n,!1),o>=i-t?(a(m,!0),w.info({title:"Info",message:"Sorry, no more reviews for now.",position:"topRight",color:"green"})):a(m,!1)}}}),a=(o,t)=>{o.disabled=t,t?(o.style.backgroundColor="grey",o.style.cursor="not-allowed",o===n?L.style.stroke="grey":S.style.stroke="grey"):(o.style.backgroundColor="",o.style.cursor="",o===n?L.style.stroke="#292929":S.style.stroke="#292929")};a(n,!0);n.addEventListener("click",()=>{p.slidePrev()});m.addEventListener("click",()=>{p.slideNext()});I();document.addEventListener("DOMContentLoaded",()=>{const o=()=>{const i=document.getElementById("workTogether");i?i.scrollIntoView({behavior:"smooth"}):console.error('Element with ID "workTogether" not found.')},t=document.getElementById("scrollButton");t?t.addEventListener("click",o):console.error('Element with ID "scrollButton" not found.')});const y=[{origin:"./img/my-projects/power-2x.jpg",preview:"./img/my-projects/power-1x.jpg",technologies:"React, JavaScript, Node JS, Git",title:"power pulse webservice"},{origin:"./img/my-projects/mimino-2x.jpg",preview:"./img/my-projects/mimino-1x.jpg",technologies:"React, JavaScript, Node JS, Git",title:"mimino website"},{origin:"./img/my-projects/vyshyvanka-2x.jpg",preview:"./img/my-projects/vyshyvanka-1x.jpg",technologies:"React, JavaScript, Node JS, Git",title:"vyshyvanka vibes Landing Page"},{origin:"./img/my-projects/chego-2x.jpg",preview:"./img/my-projects/chego-1x.jpg",technologies:"React, JavaScript, Node JS, Git",title:"chego jewelry website"},{origin:"./img/my-projects/energy-2x.jpg",preview:"./img/my-projects/energy-1x.jpg",technologies:"React, JavaScript, Node JS, Git",title:"energy flow webservice "},{origin:"./img/my-projects/fruitbox-2x.jpg",preview:"./img/my-projects/fruitbox-1x.jpg",technologies:"React, JavaScript, Node JS, Git",title:"fruitbox online store"},{origin:"./img/my-projects/starlight-2x.jpg",preview:"./img/my-projects/starlight-1x.jpg",technologies:"React, JavaScript, Node JS, Git",title:"starlight studio landing page"}],M=document.querySelector(".my-projects-list"),h=document.querySelector(".my-projects-btn-load-more");let g=0,x=3;const P=o=>{if(g<y.length){const i=y.slice(g,g+x).map(e=>`
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
            class="projects-img"
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
              <use href="./img/icons.svg#my-projects-arrow"></use>
            </svg></a>
        </div>
      </li>`).join("");M.insertAdjacentHTML("beforeend",i),g+=x,h.style.color="#292929"}g>=y.length&&h.classList.add("is-hidden")};h.addEventListener("click",P);E();q();
//# sourceMappingURL=commonHelpers.js.map
