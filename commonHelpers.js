import{i as L,S as E}from"./assets/vendor-43af55b9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function i(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(s){if(s.ep)return;s.ep=!0;const r=i(s);fetch(s.href,r)}})();(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),body:document.querySelector("body"),menuLinks:document.querySelectorAll(".mob-menu-link")};e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o);function o(){e.modal.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll"),e.modal.classList.contains("is-hidden")?(e.openModalBtn.style.display="block",e.closeModalBtn.style.display="none"):(e.openModalBtn.style.display="none",e.closeModalBtn.style.display="block")}e.menuLinks.forEach(i=>{i.addEventListener("click",()=>{o()})})})();const b=document.querySelector(".switch-btn"),S=e=>{b.classList.toggle("dark-on"),document.body.classList.toggle("body-dark")};b.addEventListener("click",S);document.addEventListener("DOMContentLoaded",()=>{S()});function q(){const e=document.querySelectorAll(".accordion-block");e.forEach(o=>{const i=o.querySelector(".accordion-title"),t=o.querySelector(".accordion-content"),s=i.querySelector("span");i.addEventListener("click",()=>{o.classList.contains("active")?(o.classList.remove("active"),t.classList.remove("active"),t.style.maxHeight=0,s.querySelector("svg").style.transform="rotate(0deg)"):(e.forEach(r=>{r.classList.remove("active"),r.querySelector(".accordion-content").classList.remove("active"),r.querySelector(".accordion-content").style.maxHeight=0,r.querySelector("span svg").style.transform="rotate(0deg)"}),o.classList.add("active"),t.classList.add("active"),t.style.maxHeight=t.scrollHeight+"px",s.querySelector("svg").style.transform="rotate(180deg)")}),o===e[0]&&(o.classList.add("active"),t.classList.add("active"),t.style.maxHeight=t.scrollHeight+"px",s.querySelector("svg").style.transform="rotate(180deg)")})}function M(){const e=document.querySelector(".work-together-form"),o=document.querySelector(".work-together-backdrop"),i=document.querySelector(".work-together-modal-btn-closing"),t=document.querySelector(".work-together-input-email"),s=document.querySelector(".work-together-error-message"),r=document.querySelector(".work-together-adress-icon-form"),n=document.querySelector(".work-together-input-message"),g={};e.addEventListener("submit",a=>{if(a.preventDefault(),t.value.trim()!==""&&t.value.trim()!==" ")if(s.classList.remove("active"),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t.value.trim())===!0){r.classList.remove("hidden"),t.style.color="black",g.email=t.value,g.comment=n.value,console.log(g);const j={method:"POST",body:JSON.stringify(g),headers:{"Content-Type":"application/json; charset=UTF-8"}};fetch("https://portfolio-js.b.goit.study/api/requests",j).then(d=>{if(!d.ok)throw new Error(d.status);return d.json()}).then(d=>{o.classList.add("active"),r.classList.remove("hidden")}).catch(d=>{L.info({title:"Info",message:"Sorry, something went wromg, please check your request once more.",position:"topRight"})})}else s.innerHTML="Olease input correct Email adress",t.style.color="red",s.classList.add("active");else s.innerHTML="Email cannnot be blank",s.classList.add("active")}),i.addEventListener("click",()=>{o.classList.remove("active"),t.value="",r.classList.add("hidden"),n.value=""}),o.addEventListener("click",a=>{a.target.classList.value!=="work-together-modal-btn-closing"&&a.target.classList.value!=="work-together-modal"&&(o.classList.remove("active"),t.value="",r.classList.add("hidden"),n.value="")}),document.addEventListener("keydown",a=>{a.key==="Escape"&&(o.classList.remove("active"),t.value="",r.classList.add("hidden"),n.value="")})}const T="https://portfolio-js.b.goit.study/api",x=document.querySelector(".swiper-wrapper"),l=document.querySelector(".swiper-button-prev"),u=document.querySelector(".swiper-button-next"),y=l.querySelector(".icon-swipe-prev use"),w=u.querySelector(".icon-swipe-next use");let v;const B=async()=>{try{const e=await fetch(`${T}/reviews`);if(!e.ok)throw new Error("Failed to fetch reviews");return await e.json()}catch(e){throw L.error({title:"Error",message:"Failed to fetch reviews. Please try again later.",position:"topRight"}),e}},$=e=>e.map(({author:o,avatar_url:i,review:t})=>`
    <li class="swiper-slide user-review">
      <p class="text-review">${t}</p>
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
    </li>`).join(""),I=async()=>{try{v=await B(),v.length>0&&(x.innerHTML+=$(v),p.update())}catch(e){console.log(e),x.innerHTML="<p class='not-found'>Not found</p>",c(l,!0,y,"grey-prev"),c(u,!0,w,"grey-next")}},p=new E(".swiper-container",{breakpoints:{1280:{slidesPerView:2,spaceBetween:32},768:{slidesPerView:1,spaceBetween:10},360:{slidesPerView:1,spaceBetween:10}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},autoHeight:!0,keyboard:{enabled:!0,onlyInViewport:!0},simulateTouch:!0,allowTouchMove:!0,on:{slideChange:()=>{const e=p.activeIndex,o=p.params.slidesPerView,i=v.length;e===0?c(l,!0,y,"grey-prev"):c(l,!1,y,"black-prev"),e>=i-o?(c(u,!0,w,"grey-next"),L.info({title:"Info",message:"Sorry, no more reviews for now.",position:"topRight",color:"green"})):c(u,!1,w,"black-next")}}}),c=(e,o,i,t)=>{e.disabled=o,i.setAttribute("href",`./img/icons.svg#${t}`),o?e.style.cursor="not-allowed":e.style.cursor=""};c(l,!0,y,"grey-prev");l.addEventListener("click",()=>{p.slidePrev()});u.addEventListener("click",()=>{p.slideNext()});I();document.addEventListener("DOMContentLoaded",()=>{const e=()=>{const i=document.getElementById("workTogether");i?i.scrollIntoView({behavior:"smooth"}):console.error('Element with ID "workTogether" not found.')},o=document.getElementById("scrollButton");o?o.addEventListener("click",e):console.error('Element with ID "scrollButton" not found.')});const J="/project/assets/power-2x-7a1fbbd3.jpg",P="/project/assets/power-1x-dc5a1c34.jpg",h=[{origin:J,preview:P,technologies:"React, JavaScript, Node JS, Git",title:"power pulse webservice"},{origin:"img/my-projects/mimino-2x.jpg",preview:"img/my-projects/mimino-1x.jpg",technologies:"React, JavaScript, Node JS, Git",title:"mimino website"},{origin:"../img/my-projects/vyshyvanka-2x.jpg",preview:"../img/my-projects/vyshyvanka-1x.jpg",technologies:"React, JavaScript, Node JS, Git",title:"vyshyvanka vibes Landing Page"},{origin:"../img/my-projects/chego-2x.jpg",preview:"../img/my-projects/chego-1x.jpg",technologies:"React, JavaScript, Node JS, Git",title:"chego jewelry website"},{origin:"../img/my-projects/energy-2x.jpg",preview:"../img/my-projects/energy-1x.jpg",technologies:"React, JavaScript, Node JS, Git",title:"energy flow webservice "},{origin:"../img/my-projects/fruitbox-2x.jpg",preview:"../img/my-projects/fruitbox-1x.jpg",technologies:"React, JavaScript, Node JS, Git",title:"fruitbox online store"},{origin:"../img/my-projects/starlight-2x.jpg",preview:"../img/my-projects/starlight-1x.jpg",technologies:"React, JavaScript, Node JS, Git",title:"starlight studio landing page"}],N=document.querySelector(".my-projects-list"),f=document.querySelector(".my-projects-btn-load-more");let m=0,k=3;const R=e=>{if(m<h.length){const i=h.slice(m,m+k).map(t=>`
       <li class="my-projects-item">
        <picture>
          <source
            srcset="
             ${t.preview} 1x,
              ${t.origin} 2x
            "
            media="(min-width: 1280px)"
          />
          <source
            srcset="
            ${t.preview} 1x,
              ${t.origin} 2x
            "
            media="(min-width: 768px)"
          />
          <source
            srcset="
             ${t.preview} 1x,
              ${t.origin} 2x
            "
            media="(max-width: 767px)"
          />
          <img
            src="${t.preview}"
            alt="${t.title.toLocaleUpperCase()}"
            class="my-projects-img"
            width="1008"
            height="578"
          />
        </picture>

        <p class="my-projects-text">${t.technologies}</p>
        <div class="my-projects-name-btn">
          <h3 class="my-projects-name">${t.title.toLocaleUpperCase()}</h3>
          <a
            class="my-projects-btn-visit"
            href="https://note-m.github.io/project/"
            target="_blank"
            >VISIT<svg class="my-projects-icon" width="18" height="18">
              <use href="../img/icons.svg#my-projects-arrow"></use>
            </svg></a>
        </div>
      </li>`).join("");N.insertAdjacentHTML("beforeend",i),m+=k,f.style.color="#292929"}m>=h.length&&f.classList.add("is-hidden")};f.addEventListener("click",R);q();M();S();
//# sourceMappingURL=commonHelpers.js.map
