import{i as w,S as k}from"./assets/vendor-43af55b9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))e(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&e(c)}).observe(document,{childList:!0,subtree:!0});function i(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(o){if(o.ep)return;o.ep=!0;const s=i(o);fetch(o.href,s)}})();function q(){const t=document.querySelectorAll(".accordion-block");t.forEach(r=>{const i=r.querySelector(".accordion-title"),e=r.querySelector(".accordion-content"),o=i.querySelector("span");i.addEventListener("click",()=>{r.classList.contains("active")?(r.classList.remove("active"),e.classList.remove("active"),e.style.maxHeight=0,o.querySelector("svg").style.transform="rotate(0deg)"):(t.forEach(s=>{s.classList.remove("active"),s.querySelector(".accordion-content").classList.remove("active"),s.querySelector(".accordion-content").style.maxHeight=0,s.querySelector("span svg").style.transform="rotate(0deg)"}),r.classList.add("active"),e.classList.add("active"),e.style.maxHeight=e.scrollHeight+"px",o.querySelector("svg").style.transform="rotate(180deg)")}),r===t[0]&&(r.classList.add("active"),e.classList.add("active"),e.style.maxHeight=e.scrollHeight+"px",o.querySelector("svg").style.transform="rotate(180deg)")})}function b(){const t=document.querySelector(".work-together-form"),r=document.querySelector(".work-together-backdrop"),i=document.querySelector(".work-together-modal-btn-closing"),e=document.querySelector(".work-together-input-email"),o=document.querySelector(".work-together-error-message"),s=document.querySelector(".work-together-adress-icon-form"),c=document.querySelector(".work-together-input-message"),m={};t.addEventListener("submit",l=>{if(l.preventDefault(),e.value.trim()!==""&&e.value.trim()!==" ")if(o.classList.remove("active"),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.value.trim())===!0){s.classList.remove("hidden"),e.style.color="black",m.email=e.value,m.comment=c.value,console.log(m);const j={method:"POST",body:JSON.stringify(m),headers:{"Content-Type":"application/json; charset=UTF-8"}};fetch("https://portfolio-js.b.goit.study/api/requests",j).then(d=>{if(!d.ok)throw new Error(d.status);return d.json()}).then(d=>{r.classList.add("active"),s.classList.remove("hidden")}).catch(d=>{w.info({title:"Info",message:"Sorry, something went wromg, please check your request once more.",position:"topRight"})})}else o.innerHTML="Olease input correct Email adress",e.style.color="red",o.classList.add("active");else o.innerHTML="Email cannnot be blank",o.classList.add("active")}),i.addEventListener("click",()=>{r.classList.remove("active"),e.value="",s.classList.add("hidden"),c.value=""}),r.addEventListener("click",l=>{l.target.classList.value!=="work-together-modal-btn-closing"&&l.target.classList.value!=="work-together-modal"&&(r.classList.remove("active"),e.value="",s.classList.add("hidden"),c.value="")}),document.addEventListener("keydown",l=>{l.key==="Escape"&&(r.classList.remove("active"),e.value="",s.classList.add("hidden"),c.value="")})}const E="https://portfolio-js.b.goit.study/api",f=document.querySelector(".swiper-wrapper"),n=document.querySelector(".swiper-button-prev"),g=document.querySelector(".swiper-button-next"),L=n.querySelector(".icon-swipe"),S=g.querySelector(".icon-swipe");let u;const T=async()=>{try{const t=await fetch(`${E}/reviews`);if(!t.ok)throw new Error("Failed to fetch reviews");return await t.json()}catch(t){throw w.error({title:"Error",message:"Failed to fetch reviews. Please try again later.",position:"topRight"}),t}},$=t=>t.map(({author:r,avatar_url:i,review:e})=>`
    <li class="swiper-slide user-review">
      <p class="text-review">${e}</p>
      <div class="icon-photo-name">
        <img
          src="${i}"
          alt="${r}"
          width="40"
          height="40"
          class="avatar-icon"
        />
        <p class="user-name-review">${r}</p>
      </div>
    </li>`).join(""),J=async()=>{try{u=await T(),u.length>0&&(f.innerHTML+=$(u),v.update())}catch(t){console.log(t),f.innerHTML="<p class='not-found'>Not found</p>",a(n,!0),a(g,!0)}},v=new k(".swiper-container",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},autoHeight:!0,keyboard:{enabled:!0,onlyInViewport:!0},simulateTouch:!0,allowTouchMove:!0,on:{slideChange:()=>{const t=v.activeIndex;t===0?a(n,!0):a(n,!1),t===u.length+1?(a(g,!0),w.info({title:"Info",message:"Sorry, no more reviews for now.",position:"topRight",color:"green"})):a(g,!1)}},breakpoints:{1280:{slidesPerView:2,spaceBetween:32},768:{slidesPerView:1,spaceBetween:10},360:{slidesPerView:1,spaceBetween:10}}}),a=(t,r)=>{t.disabled=r,r?(t.style.backgroundColor="grey",t.style.cursor="not-allowed",t===n?L.style.stroke="grey":S.style.stroke="grey"):(t.style.backgroundColor="",t.style.cursor="",t===n?L.style.stroke="#292929":S.style.stroke="#292929")};a(n,!0);n.addEventListener("click",()=>{v.slidePrev()});g.addEventListener("click",()=>{v.slideNext()});J();const y=[{origin:"./img/my-projects/power-2x.jpg",preview:"./img/my-projects/power-1x.jpg",technologies:"React, JavaScript, Node JS, Git",title:"power pulse webservice"},{origin:"./img/my-projects/mimino-2x.jpg",preview:"./img/my-projects/mimino-1x.jpg",technologies:"React, JavaScript, Node JS, Git",title:"mimino website"},{origin:"./img/my-projects/vyshyvanka-2x.jpg",preview:"./img/my-projects/vyshyvanka-1x.jpg",technologies:"React, JavaScript, Node JS, Git",title:"vyshyvanka vibes Landing Page"},{origin:"./img/my-projects/chego-2x.jpg",preview:"./img/my-projects/chego-1x.jpg",technologies:"React, JavaScript, Node JS, Git",title:"chego jewelry website"},{origin:"./img/my-projects/energy-2x.jpg",preview:"./img/my-projects/energy-1x.jpg",technologies:"React, JavaScript, Node JS, Git",title:"energy flow webservice "},{origin:"./img/my-projects/fruitbox-2x.jpg",preview:"./img/my-projects/fruitbox-1x.jpg",technologies:"React, JavaScript, Node JS, Git",title:"fruitbox online store"},{origin:"./img/my-projects/starlight-2x.jpg",preview:"./img/my-projects/starlight-1x.jpg",technologies:"React, JavaScript, Node JS, Git",title:"starlight studio landing page"}],M=document.querySelector(".my-projects-list"),h=document.querySelector(".my-projects-btn-load-more");let p=0,x=3;const N=t=>{if(p<y.length){const i=y.slice(p,p+x).map(e=>`
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
      </li>`).join("");M.insertAdjacentHTML("beforeend",i),p+=x,h.style.color="#292929"}p>=y.length&&h.classList.add("is-hidden")};h.addEventListener("click",N);q();b();
//# sourceMappingURL=commonHelpers.js.map
