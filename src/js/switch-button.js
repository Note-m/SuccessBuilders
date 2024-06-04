const switchThemeBtnEl = document.querySelector('.switch-btn');
const iconsUrl = '../img/icons.svg';

export const onSwitchTheme = event => {
  switchThemeBtnEl.classList.toggle('dark-on');
  document.body.classList.toggle('body-dark');

  const icons = document.querySelectorAll('.use-acardion');
  icons.forEach(icon => {
    let iconName;
    if (document.body.classList.contains('body-dark')) {
      iconName = 'faq-arrow-white-down-icon';
    } else {
      iconName = 'faq-arrow-down-icon';
    }
    icon.setAttribute('href', `${iconsUrl}#${iconName}`);
  });
};

switchThemeBtnEl.addEventListener('click', onSwitchTheme);
document.addEventListener('DOMContentLoaded', () => {
  onSwitchTheme();
});
