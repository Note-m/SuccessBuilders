const switchThemeBtnEl = document.querySelector('.switch-btn');
import iconsUrl from '../img/icons.svg';



export const onSwitchTheme = event => {

  switchThemeBtnEl.classList.toggle('dark-on');
  document.body.classList.toggle('body-dark');

  const icons = document.querySelectorAll('.use-acardion');
  const arrowRevPrev = document.querySelectorAll('.btn-prev use');
  const arrowRevNext = document.querySelectorAll('.btn-next use');
  const iconPrev = prevBtn.querySelector('.icon-swipe-prev use');
  const iconNext = nextBtn.querySelector('.icon-swipe-next use');
  const upIconsSkills = document.querySelectorAll('.up-line-icon');
  const downIconsSkills = document.querySelectorAll('.down-line-icon');

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
