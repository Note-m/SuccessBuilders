const switchThemeBtnEl = document.querySelector('.switch-btn');
import iconsUrl from '../img/icons.svg';

export const onSwitchTheme = event => {
  switchThemeBtnEl.classList.toggle('dark-on');
  document.body.classList.toggle('body-dark');

  const icons = document.querySelectorAll('.use-acardion');
  const upIconsSkills = document.querySelectorAll('.up-line-icon');
  const downIconsSkills = document.querySelectorAll('.down-line-icon');
  const prevBtnRevi = document.querySelector('.arrow-revi-prev');
  const nextBtnRevi = document.querySelector('.arrow-revi-next');
  icons.forEach(icon => {
    let prevBtn;
    if (document.body.classList.contains('body-dark')) {
      prevBtn = 'reviews-dark-grey-btn-prev';
      prevBtnRevi.setAttribute('href', `${iconsUrl}#${prevBtn}`);
    } else {
      prevBtn = 'reviews-grey-btn-prev';
      prevBtnRevi.setAttribute('href', `${iconsUrl}#${prevBtn}`);
    }
  });
  icons.forEach(icon => {
    let nextBtn;
    if (document.body.classList.contains('body-dark')) {
      nextBtn = 'reviews-white-btn-next';
      nextBtnRevi.setAttribute('href', `${iconsUrl}#${nextBtn}`);
    } else {
      nextBtn = 'reviews-black-btn-next';
      nextBtnRevi.setAttribute('href', `${iconsUrl}#${nextBtn}`);
    }
  });

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
    let iconSkillsNames;
    if (document.body.classList.contains('body-dark')) {
      iconSkillsNames = 'tech-skills-dark-green-square-icon';
    } else {
      iconSkillsNames = 'tech-skills-green-square-icon';
    }
    icon.setAttribute('href', `${iconsUrl}#${iconSkillsNames}`);
  });
};

switchThemeBtnEl.addEventListener('click', onSwitchTheme);
document.addEventListener('DOMContentLoaded', () => {
  onSwitchTheme();
});
