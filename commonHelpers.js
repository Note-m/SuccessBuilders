import{i as v}from"./assets/vendor-f46bf14a.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function e(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();function h(){const c=document.querySelectorAll(".accordion-block");c.forEach(s=>{const r=s.querySelector(".accordion-title"),e=s.querySelector(".accordion-content"),t=r.querySelector("span");r.addEventListener("click",()=>{s.classList.contains("active")?(s.classList.remove("active"),e.classList.remove("active"),e.style.maxHeight=0,t.querySelector("svg").style.transform="rotate(0deg)"):(c.forEach(o=>{o.classList.remove("active"),o.querySelector(".accordion-content").classList.remove("active"),o.querySelector(".accordion-content").style.maxHeight=0,o.querySelector("span svg").style.transform="rotate(0deg)"}),s.classList.add("active"),e.classList.add("active"),e.style.maxHeight=e.scrollHeight+"px",t.querySelector("svg").style.transform="rotate(180deg)")}),s===c[0]&&(s.classList.add("active"),e.classList.add("active"),e.style.maxHeight=e.scrollHeight+"px",t.querySelector("svg").style.transform="rotate(180deg)")})}function y(){const c=document.querySelector(".work-together-form"),s=document.querySelector(".work-together-backdrop"),r=document.querySelector(".work-together-modal-btn-closing"),e=document.querySelector(".work-together-input-email"),t=document.querySelector(".work-together-error-message"),o=document.querySelector(".work-together-adress-icon-form"),i=document.querySelector(".work-together-input-message"),d={};c.addEventListener("submit",a=>{if(a.preventDefault(),e.value.trim()!==""&&e.value.trim()!==" ")if(t.classList.remove("active"),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.value.trim())===!0){o.classList.remove("hidden"),e.style.color="black",d.email=e.value,d.comment=i.value,console.log(d);const u={method:"POST",body:JSON.stringify(d),headers:{"Content-Type":"application/json; charset=UTF-8"}};fetch("https://portfolio-js.b.goit.study/api/requests",u).then(n=>{if(!n.ok)throw new Error(n.status);return n.json()}).then(n=>{s.classList.add("active"),o.classList.remove("hidden")}).catch(n=>{v.info({title:"Info",message:"Sorry, something went wromg, please check your request once more.",position:"topRight"})})}else t.innerHTML="Olease input correct Email adress",e.style.color="red",t.classList.add("active");else t.innerHTML="Email cannnot be blank",t.classList.add("active")}),r.addEventListener("click",()=>{s.classList.remove("active"),e.value="",o.classList.add("hidden"),i.value=""}),s.addEventListener("click",a=>{a.target.classList.value!=="work-together-modal-btn-closing"&&a.target.classList.value!=="work-together-modal"&&(s.classList.remove("active"),e.value="",o.classList.add("hidden"),i.value="")}),document.addEventListener("keydown",a=>{a.key==="Escape"&&(s.classList.remove("active"),e.value="",o.classList.add("hidden"),i.value="")})}const m=[{origin:"./img/my-projects/power-2x.jpg",preview:"./img/my-projects/power-1x.jpg",technologies:"React, JavaScript, Node JS, Git",title:"power pulse webservice"},{origin:"./img/my-projects/mimino-2x.jpg",preview:"./img/my-projects/mimino-1x.jpg",technologies:"React, JavaScript, Node JS, Git",title:"mimino website"},{origin:"./img/my-projects/vyshyvanka-2x.jpg",preview:"./img/my-projects/vyshyvanka-1x.jpg",technologies:"React, JavaScript, Node JS, Git",title:"vyshyvanka vibes Landing Page"},{origin:"./img/my-projects/chego-2x.jpg",preview:"./img/my-projects/chego-1x.jpg",technologies:"React, JavaScript, Node JS, Git",title:"chego jewelry website"},{origin:"./img/my-projects/energy-2x.jpg",preview:"./img/my-projects/energy-1x.jpg",technologies:"React, JavaScript, Node JS, Git",title:"energy flow webservice "},{origin:"./img/my-projects/fruitbox-2x.jpg",preview:"./img/my-projects/fruitbox-1x.jpg",technologies:"React, JavaScript, Node JS, Git",title:"fruitbox online store"},{origin:"./img/my-projects/starlight-2x.jpg",preview:"./img/my-projects/starlight-1x.jpg",technologies:"React, JavaScript, Node JS, Git",title:"starlight studio landing page"}],f=document.querySelector(".my-projects-list"),g=document.querySelector(".my-projects-btn-load-more");let l=0,p=3;const w=c=>{if(l<m.length){const r=m.slice(l,l+p).map(e=>`
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
            href="https://note-m.github.io/Web-project/"
            target="_blank"
            >VISIT<svg class="my-projects-icon" width="18" height="18">
              <use href="./img/icons.svg#my-projects-arrow"></use>
            </svg></a>
        </div>
      </li>`).join("");f.insertAdjacentHTML("beforeend",r),l+=p,g.style.color="#292929"}l>=m.length&&g.classList.add("is-hidden")};g.addEventListener("click",w);h();y();
//# sourceMappingURL=commonHelpers.js.map
