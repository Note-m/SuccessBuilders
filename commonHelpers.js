import{i as L,S as E}from"./assets/vendor-43af55b9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function i(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(s){if(s.ep)return;s.ep=!0;const r=i(s);fetch(s.href,r)}})();(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),body:document.querySelector("body"),menuLinks:document.querySelectorAll(".mob-menu-link")};e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o);function o(){e.modal.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll"),e.modal.classList.contains("is-hidden")?(e.openModalBtn.style.display="block",e.closeModalBtn.style.display="none"):(e.openModalBtn.style.display="none",e.closeModalBtn.style.display="block")}e.menuLinks.forEach(i=>{i.addEventListener("click",()=>{o()})})})();const k=document.querySelector(".switch-btn"),b=e=>{k.classList.toggle("dark-on"),document.body.classList.toggle("body-dark")};k.addEventListener("click",b);document.addEventListener("DOMContentLoaded",()=>{b()});function q(){const e=document.querySelectorAll(".accordion-block");e.forEach(o=>{const i=o.querySelector(".accordion-title"),t=o.querySelector(".accordion-content"),s=i.querySelector("span");i.addEventListener("click",()=>{o.classList.contains("active")?(o.classList.remove("active"),t.classList.remove("active"),t.style.maxHeight=0,s.querySelector("svg").style.transform="rotate(0deg)"):(e.forEach(r=>{r.classList.remove("active"),r.querySelector(".accordion-content").classList.remove("active"),r.querySelector(".accordion-content").style.maxHeight=0,r.querySelector("span svg").style.transform="rotate(0deg)"}),o.classList.add("active"),t.classList.add("active"),t.style.maxHeight=t.scrollHeight+"px",s.querySelector("svg").style.transform="rotate(180deg)")}),o===e[0]&&(o.classList.add("active"),t.classList.add("active"),t.style.maxHeight=t.scrollHeight+"px",s.querySelector("svg").style.transform="rotate(180deg)")})}function M(){const e=document.querySelector(".work-together-form"),o=document.querySelector(".work-together-backdrop"),i=document.querySelector(".work-together-modal-btn-closing"),t=document.querySelector(".work-together-input-email"),s=document.querySelector(".work-together-error-message"),r=document.querySelector(".work-together-adress-icon-form"),n=document.querySelector(".work-together-input-message"),m={};e.addEventListener("submit",a=>{if(a.preventDefault(),t.value.trim()!==""&&t.value.trim()!==" ")if(s.classList.remove("active"),/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(t.value.trim())===!0){r.classList.remove("hidden"),t.style.color="black",m.email=t.value,m.comment=n.value,console.log(m);const j={method:"POST",body:JSON.stringify(m),headers:{"Content-Type":"application/json; charset=UTF-8"}};fetch("https://portfolio-js.b.goit.study/api/requests",j).then(d=>{if(!d.ok)throw new Error(d.status);return d.json()}).then(d=>{o.classList.add("active"),r.classList.remove("hidden")}).catch(d=>{L.info({title:"Info",message:"Sorry, something went wromg, please check your request once more.",position:"topRight"})})}else s.innerHTML="Please input correct Email adress",t.style.color="red",s.classList.add("active");else s.innerHTML="Email cannnot be blank",s.classList.add("active")}),i.addEventListener("click",()=>{o.classList.remove("active"),t.value="",r.classList.add("hidden"),n.value=""}),o.addEventListener("click",a=>{a.target.classList.value!=="work-together-modal-btn-closing"&&a.target.classList.value!=="work-together-modal"&&(o.classList.remove("active"),t.value="",r.classList.add("hidden"),n.value="")}),document.addEventListener("keydown",a=>{a.key==="Escape"&&(o.classList.remove("active"),t.value="",r.classList.add("hidden"),n.value="")})}const T="https://portfolio-js.b.goit.study/api",S=document.querySelector(".swiper-wrapper"),l=document.querySelector(".swiper-button-prev"),p=document.querySelector(".swiper-button-next"),h=l.querySelector(".icon-swipe-prev use"),w=p.querySelector(".icon-swipe-next use");let v;const B=async()=>{try{const e=await fetch(`${T}/reviews`);if(!e.ok)throw new Error("Failed to fetch reviews");return await e.json()}catch(e){throw L.error({title:"Error",message:"Failed to fetch reviews. Please try again later.",position:"topRight"}),e}},$=e=>e.map(({author:o,avatar_url:i,review:t})=>`
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
    </li>`).join(""),I=async()=>{try{v=await B(),v.length>0&&(S.innerHTML+=$(v),g.update())}catch(e){console.log(e),S.innerHTML="<p class='not-found'>Not found</p>",c(l,!0,h,"reviews-grey-btn-prev"),c(p,!0,w,"reviews-grey-btn-next")}},g=new E(".swiper-container",{breakpoints:{1280:{slidesPerView:2,spaceBetween:32},768:{slidesPerView:1,spaceBetween:10},360:{slidesPerView:1,spaceBetween:10}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},autoHeight:!0,keyboard:{enabled:!0,onlyInViewport:!0},simulateTouch:!0,allowTouchMove:!0,on:{slideChange:()=>{const e=g.activeIndex,o=g.params.slidesPerView,i=v.length;e===0?c(l,!0,h,"reviews-grey-btn-prev"):c(l,!1,h,"reviews-black-btn-prev"),e>=i-o?(c(p,!0,w,"reviews-grey-btn-next"),L.info({title:"Info",message:"Sorry, no more reviews for now.",position:"topRight",color:"green"})):c(p,!1,w,"reviews-black-btn-next")}}}),c=(e,o,i,t)=>{e.disabled=o,i.setAttribute("href",`./img/icons.svg#${t}`),o?e.style.cursor="not-allowed":e.style.cursor=""};c(l,!0,h,"reviews-grey-btn-prev");l.addEventListener("click",()=>{g.slidePrev()});p.addEventListener("click",()=>{g.slideNext()});I();document.addEventListener("DOMContentLoaded",()=>{const e=()=>{const i=document.getElementById("workTogether");i?i.scrollIntoView({behavior:"smooth"}):console.error('Element with ID "workTogether" not found.')},o=document.getElementById("scrollButton");o?o.addEventListener("click",e):console.error('Element with ID "scrollButton" not found.')});const P="/project/assets/power-2x-7a1fbbd3.jpg",J="/project/assets/power-1x-dc5a1c34.jpg",N="/project/assets/mimino-2x-fc76a66c.jpg",R="/project/assets/mimino-1x-8666f2c8.jpg",H="/project/assets/vyshyvanka-2x-a051def3.jpg",A="/project/assets/vyshyvanka-1x-3a9dd024.jpg",O="/project/assets/chego-2x-5f3c1d1b.jpg",V="/project/assets/chego-1x-b5c2f6e2.jpg",C="/project/assets/energy-2x-8cd25da6.jpg",G="/project/assets/energy-1x-d20414c1.jpg",F="/project/assets/fruitbox-2x-051da1fe.jpg",D="/project/assets/fruitbox-1x-0db2fa14.jpg",U="/project/assets/starlight-2x-63c6cf4f.jpg",z="/project/assets/starlight-1x-5b96ea05.jpg",_="/project/assets/icons-dcb72cbf.svg",y=[{origin:P,preview:J,technologies:"React, JavaScript, Node JS, Git",title:"power pulse webservice"},{origin:N,preview:R,technologies:"React, JavaScript, Node JS, Git",title:"mimino website"},{origin:H,preview:A,technologies:"React, JavaScript, Node JS, Git",title:"vyshyvanka vibes Landing Page"},{origin:O,preview:V,technologies:"React, JavaScript, Node JS, Git",title:"chego jewelry website"},{origin:C,preview:G,technologies:"React, JavaScript, Node JS, Git",title:"energy flow webservice"},{origin:F,preview:D,technologies:"React, JavaScript, Node JS, Git",title:"fruitbox online store"},{origin:U,preview:z,technologies:"React, JavaScript, Node JS, Git",title:"starlight studio landing page"}],Z=document.querySelector(".my-projects-list"),f=document.querySelector(".my-projects-btn-load-more");let u=0,x=3;const K=e=>{if(u<y.length){const i=y.slice(u,u+x).map(t=>`
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
              <use href="${_}#my-projects-arrow"></use>
            </svg></a>
        </div>
      </li>`).join("");Z.insertAdjacentHTML("beforeend",i),u+=x,f.style.color="#292929"}u>=y.length&&f.classList.add("is-hidden")};f.addEventListener("click",K);q();M();b();
//# sourceMappingURL=commonHelpers.js.map
