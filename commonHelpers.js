import{i as w,S as b}from"./assets/vendor-43af55b9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=i(s);fetch(s.href,r)}})();(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),body:document.querySelector("body"),menuLinks:document.querySelectorAll(".mob-menu-link")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t);function t(){e.modal.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll"),e.modal.classList.contains("is-hidden")?(e.openModalBtn.style.display="block",e.closeModalBtn.style.display="none"):(e.openModalBtn.style.display="none",e.closeModalBtn.style.display="block")}e.menuLinks.forEach(i=>{i.addEventListener("click",()=>{t()})})})();const j=document.querySelector(".switch-btn"),f=e=>{j.classList.toggle("dark-on"),document.body.classList.toggle("body-dark")};j.addEventListener("click",f);document.addEventListener("DOMContentLoaded",()=>{f()});function q(){const e=document.querySelectorAll(".accordion-block");e.forEach(t=>{const i=t.querySelector(".accordion-title"),o=t.querySelector(".accordion-content"),s=i.querySelector("span");i.addEventListener("click",()=>{t.classList.contains("active")?(t.classList.remove("active"),o.classList.remove("active"),o.style.maxHeight=0,s.querySelector("svg").style.transform="rotate(0deg)"):(e.forEach(r=>{r.classList.remove("active"),r.querySelector(".accordion-content").classList.remove("active"),r.querySelector(".accordion-content").style.maxHeight=0,r.querySelector("span svg").style.transform="rotate(0deg)"}),t.classList.add("active"),o.classList.add("active"),o.style.maxHeight=o.scrollHeight+"px",s.querySelector("svg").style.transform="rotate(180deg)")}),t===e[0]&&(t.classList.add("active"),o.classList.add("active"),o.style.maxHeight=o.scrollHeight+"px",s.querySelector("svg").style.transform="rotate(180deg)")})}function M(){const e=document.querySelector(".work-together-form"),t=document.querySelector(".work-together-backdrop"),i=document.querySelector(".work-together-modal-btn-closing"),o=document.querySelector(".work-together-input-email"),s=document.querySelector(".work-together-error-message"),r=document.querySelector(".work-together-adress-icon-form"),n=document.querySelector(".work-together-input-message"),p={};e.addEventListener("submit",a=>{if(a.preventDefault(),o.value.trim()!==""&&o.value.trim()!==" ")if(s.classList.remove("active"),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o.value.trim())===!0){r.classList.remove("hidden"),o.style.color="black",p.email=o.value,p.comment=n.value,console.log(p);const E={method:"POST",body:JSON.stringify(p),headers:{"Content-Type":"application/json; charset=UTF-8"}};fetch("https://portfolio-js.b.goit.study/api/requests",E).then(d=>{if(!d.ok)throw new Error(d.status);return d.json()}).then(d=>{t.classList.add("active"),r.classList.remove("hidden")}).catch(d=>{w.info({title:"Info",message:"Sorry, something went wromg, please check your request once more.",position:"topRight"})})}else s.innerHTML="Olease input correct Email adress",o.style.color="red",s.classList.add("active");else s.innerHTML="Email cannnot be blank",s.classList.add("active")}),i.addEventListener("click",()=>{t.classList.remove("active"),o.value="",r.classList.add("hidden"),n.value=""}),t.addEventListener("click",a=>{a.target.classList.value!=="work-together-modal-btn-closing"&&a.target.classList.value!=="work-together-modal"&&(t.classList.remove("active"),o.value="",r.classList.add("hidden"),n.value="")}),document.addEventListener("keydown",a=>{a.key==="Escape"&&(t.classList.remove("active"),o.value="",r.classList.add("hidden"),n.value="")})}const T="https://portfolio-js.b.goit.study/api",L=document.querySelector(".swiper-wrapper"),c=document.querySelector(".swiper-button-prev"),g=document.querySelector(".swiper-button-next"),S=c.querySelector(".icon-swipe"),k=g.querySelector(".icon-swipe");let y;const B=async()=>{try{const e=await fetch(`${T}/reviews`);if(!e.ok)throw new Error("Failed to fetch reviews");return await e.json()}catch(e){throw w.error({title:"Error",message:"Failed to fetch reviews. Please try again later.",position:"topRight"}),e}},$=e=>e.map(({author:t,avatar_url:i,review:o})=>`
    <li class="swiper-slide user-review">
      <p class="text-review">${o}</p>
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
    </li>`).join(""),I=async()=>{try{y=await B(),y.length>0&&(L.innerHTML+=$(y),u.update())}catch(e){console.log(e),L.innerHTML="<p class='not-found'>Not found</p>",l(c,!0),l(g,!0)}},u=new b(".swiper-container",{breakpoints:{1280:{slidesPerView:2,spaceBetween:32},768:{slidesPerView:1,spaceBetween:10},360:{slidesPerView:1,spaceBetween:10}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},autoHeight:!0,keyboard:{enabled:!0,onlyInViewport:!0},simulateTouch:!0,allowTouchMove:!0,on:{slideChange:()=>{const e=u.activeIndex,t=u.params.slidesPerView,i=y.length;console.log(`currentIndex: ${e}`),console.log(`slidesPerView: ${t}`),console.log(`totalSlides: ${i}`),e===0?l(c,!0):l(c,!1),e>=i-t?(l(g,!0),w.info({title:"Info",message:"Sorry, no more reviews for now.",position:"topRight",color:"green"})):l(g,!1)}}}),l=(e,t)=>{e.disabled=t,t?(e.style.backgroundColor="grey",e.style.cursor="not-allowed",e===c?S.style.stroke="grey":k.style.stroke="grey"):(e.style.backgroundColor="",e.style.cursor="",e===c?S.style.stroke="#292929":k.style.stroke="#292929")};l(c,!0);c.addEventListener("click",()=>{u.slidePrev()});g.addEventListener("click",()=>{u.slideNext()});I();document.addEventListener("DOMContentLoaded",()=>{const e=()=>{const i=document.getElementById("workTogether");i?i.scrollIntoView({behavior:"smooth"}):console.error('Element with ID "workTogether" not found.')},t=document.getElementById("scrollButton");t?t.addEventListener("click",e):console.error('Element with ID "scrollButton" not found.')});const v=[{origin:"./img/my-projects/power-2x.jpg",preview:"./img/my-projects/power-1x.jpg",technologies:"React, JavaScript, Node JS, Git",title:"power pulse webservice"},{origin:"./img/my-projects/mimino-2x.jpg",preview:"./img/my-projects/mimino-1x.jpg",technologies:"React, JavaScript, Node JS, Git",title:"mimino website"},{origin:"./img/my-projects/vyshyvanka-2x.jpg",preview:"./img/my-projects/vyshyvanka-1x.jpg",technologies:"React, JavaScript, Node JS, Git",title:"vyshyvanka vibes Landing Page"},{origin:"./img/my-projects/chego-2x.jpg",preview:"./img/my-projects/chego-1x.jpg",technologies:"React, JavaScript, Node JS, Git",title:"chego jewelry website"},{origin:"./img/my-projects/energy-2x.jpg",preview:"./img/my-projects/energy-1x.jpg",technologies:"React, JavaScript, Node JS, Git",title:"energy flow webservice "},{origin:"./img/my-projects/fruitbox-2x.jpg",preview:"./img/my-projects/fruitbox-1x.jpg",technologies:"React, JavaScript, Node JS, Git",title:"fruitbox online store"},{origin:"./img/my-projects/starlight-2x.jpg",preview:"./img/my-projects/starlight-1x.jpg",technologies:"React, JavaScript, Node JS, Git",title:"starlight studio landing page"}],P=document.querySelector(".my-projects-list"),h=document.querySelector(".my-projects-btn-load-more");let m=0,x=3;const J=e=>{if(m<v.length){const i=v.slice(m,m+x).map(o=>`
       <li class="my-projects-item">
        <picture>
          <source
            srcset="
             ${o.preview} 1x,
              ${o.origin} 2x
            "
            media="(min-width: 1280px)"
          />
          <source
            srcset="
            ${o.preview} 1x,
              ${o.origin} 2x
            "
            media="(min-width: 768px)"
          />
          <source
            srcset="
             ${o.preview} 1x,
              ${o.origin} 2x
            "
            media="(max-width: 767px)"
          />
          <img
            src="${o.preview}"
            alt="${o.title.toLocaleUpperCase()}"
            class="projects-img"
            width="1008"
            height="578"
          />
        </picture>

        <p class="my-projects-text">${o.technologies}</p>
        <div class="my-projects-name-btn">
          <h3 class="my-projects-name">${o.title.toLocaleUpperCase()}</h3>
          <a
            class="my-projects-btn-visit"
            href="https://note-m.github.io/project/"
            target="_blank"
            >VISIT<svg class="my-projects-icon" width="18" height="18">
              <use href="./img/icons.svg#my-projects-arrow"></use>
            </svg></a>
        </div>
      </li>`).join("");P.insertAdjacentHTML("beforeend",i),m+=x,h.style.color="#292929"}m>=v.length&&h.classList.add("is-hidden")};h.addEventListener("click",J);q();M();f();
//# sourceMappingURL=commonHelpers.js.map
