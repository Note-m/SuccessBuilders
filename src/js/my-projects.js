import power2 from '../img/my-projects/power-2x.jpg';
import power1 from '../img/my-projects/power-1x.jpg';
import mimino2 from '../img/my-projects/mimino-2x.jpg';
import mimino1 from '../img/my-projects/mimino-1x.jpg';
import vyshyvanka2 from '../img/my-projects/vyshyvanka-2x.jpg';
import vyshyvanka1 from '../img/my-projects/vyshyvanka-1x.jpg';
import chego2 from '../img/my-projects/chego-2x.jpg';
import chego1 from '../img/my-projects/chego-1x.jpg';
import energy2 from '../img/my-projects/energy-2x.jpg';
import energy1 from '../img/my-projects/energy-1x.jpg';
import fruitbox2 from '../img/my-projects/fruitbox-2x.jpg';
import fruitbox1 from '../img/my-projects/fruitbox-1x.jpg';
import starlight2 from '../img/my-projects/starlight-2x.jpg';
import starlight1 from '../img/my-projects/starlight-1x.jpg';
import iconArrow from '../img/icons.svg';

const projects = [
  {
    origin: power2,
    preview: power1,
    technologies: 'React, JavaScript, Node JS, Git',
    title: 'power pulse webservice',
  },
  {
    origin: mimino2,
    preview: mimino1,
    technologies: 'React, JavaScript, Node JS, Git',
    title: 'mimino website',
  },
  {
    origin: vyshyvanka2,
    preview: vyshyvanka1,
    technologies: 'React, JavaScript, Node JS, Git',
    title: 'vyshyvanka vibes Landing Page',
  },
  {
    origin: chego2,
    preview: chego1,
    technologies: 'React, JavaScript, Node JS, Git',
    title: 'chego jewelry website',
  },
  {
    origin: energy2,
    preview: energy1,
    technologies: 'React, JavaScript, Node JS, Git',
    title: 'energy flow webservice',
  },
  {
    origin: fruitbox2,
    preview: fruitbox1,
    technologies: 'React, JavaScript, Node JS, Git',
    title: 'fruitbox online store',
  },
  {
    origin: starlight2,
    preview: starlight1,
    technologies: 'React, JavaScript, Node JS, Git',
    title: 'starlight studio landing page',
  },
];

const projectsListEl = document.querySelector('.my-projects-list');
const loadMoreBtnEl = document.querySelector('.my-projects-btn-load-more');

let index = 0;
let count = 3;

export const loadMoreProjects = event => {
  if (index < projects.length) {
    const elements = projects.slice(index, index + count);
    const createMarkup = elements
      .map(
        project => `
       <li class="my-projects-item">
        <picture>
          <source
            srcset="
             ${project.preview} 1x,
              ${project.origin} 2x
            "
            media="(min-width: 1280px)"
          />
          <source
            srcset="
            ${project.preview} 1x,
              ${project.origin} 2x
            "
            media="(min-width: 768px)"
          />
          <source
            srcset="
             ${project.preview} 1x,
              ${project.origin} 2x
            "
            media="(max-width: 767px)"
          />
          <img
            src="${project.preview}"
            alt="${project.title.toLocaleUpperCase()}"
            class="my-projects-img"
            width="1008"
            height="578"
          />
        </picture>

        <p class="my-projects-text">${project.technologies}</p>
        <div class="my-projects-name-btn">
          <h3 class="my-projects-name">${project.title.toLocaleUpperCase()}</h3>
          <a
            class="my-projects-btn-visit"
            href="https://github.com/Note-m/SuccessBuilders"
            target="_blank"
            >VISIT<svg class="my-projects-icon" width="18" height="18">
              <use href="${iconArrow}#my-projects-arrow"></use>
            </svg></a>
        </div>
      </li>`
      )
      .join('');
    projectsListEl.insertAdjacentHTML('beforeend', createMarkup);
    index += count;
  }
  if (index >= projects.length) {
    loadMoreBtnEl.classList.add('is-hidden');
  }
};

loadMoreBtnEl.addEventListener('click', loadMoreProjects);
