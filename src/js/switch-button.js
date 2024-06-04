const switchThemeBtnEl = document.querySelector('.switch-btn');
const iconsUrl = '../img/icons.svg';

export const onSwitchTheme = event => {
  switchThemeBtnEl.classList.toggle('dark-on');
  document.body.classList.toggle('body-dark');

  const icons = document.querySelectorAll('.use-acardion');
  const upIconsSkills = document.querySelectorAll('.up-line-icon use');
  const downIconsSkills = document.querySelectorAll('.down-line-icon use');
  const arrowRevPrev = document.querySelectorAll('.btn-prev use');
  const arrowRevNext = document.querySelectorAll('.btn-next use');

  icons.forEach(icon => {
    let iconName;
    if (document.body.classList.contains('body-dark')) {
      iconName = 'faq-arrow-white-down-icon';
    } else {
      iconName = 'faq-arrow-down-icon';
    }
    icon.setAttribute('href', `${iconsUrl}#${iconName}`);
  });

  downIconsSkills.forEach(icon => {
    let iconSkillsName;
    if (document.body.classList.contains('body-dark')) {
      iconSkillsName = 'tech-skills-dark-white-square-icon';
    } else {
      iconSkillsName = 'tech-skills-black-square-icon';
    }
    icon.setAttribute('href', `${iconsUrl}#${iconSkillsName}`);
  });

  upIconsSkills.forEach(icon => {
    let iconSkillsName;
    if (document.body.classList.contains('body-dark')) {
      iconSkillsName = 'tech-skills-dark-green-square-icon';
    } else {
      iconSkillsName = 'tech-skills-green-square-icon';
    }
    icon.setAttribute('href', `${iconsUrl}#${iconSkillsName}`);
  });

  arrowRevPrev.forEach(icon => {
    const parentButtonPrev = document.querySelector('.arrow-revi-prev');
    let arrowRevPrevName;
    if (document.body.classList.contains('body-dark')) {
      if (parentButtonPrev.disabled) {
        arrowRevPrevName = 'reviews-dark-grey-btn-prev';
      } else {
        arrowRevPrevName = 'reviews-white-btn-prev';
      }
    } else {
      if (parentButtonPrev.disabled) {
        arrowRevPrevName = 'reviews-grey-btn-prev';
      } else {
        arrowRevPrevName = 'reviews-black-btn-prev';
      }
    }
    icon.setAttribute('href', `${iconsUrl}#${arrowRevPrevName}`);
  });

  arrowRevNext.forEach(icon => {
    const parentButtonNext = document.querySelector('.arrow-revi-next');
    let arrowRevNextName;
    if (document.body.classList.contains('body-dark')) {
      if (parentButtonNext.disabled) {
        arrowRevNextName = 'reviews-dark-grey-btn-next';
      } else {
        arrowRevNextName = 'reviews-white-btn-next';
      }
    } else {
      if (parentButtonNext.disabled) {
        arrowRevNextName = 'reviews-grey-btn-next';
      } else {
        arrowRevNextName = 'reviews-black-btn-next';
      }
    }
    icon.setAttribute('href', `${iconsUrl}#${arrowRevNextName}`);
  });
};

switchThemeBtnEl.addEventListener('click', onSwitchTheme);
document.addEventListener('DOMContentLoaded', () => {
  onSwitchTheme();
});
