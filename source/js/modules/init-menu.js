const headerNavigation = document.querySelector('.page-header__navigation');
const headerLogo = headerNavigation.querySelector('.page-header__logo');
const headerButton = headerNavigation.querySelector('.page-header__button');
const headerList = headerNavigation.querySelector('.page-header__list');


const onHeaderButtonHendler = () => {
  headerNavigation.classList.toggle('page-header__navigation--mobile');
  headerLogo.classList.toggle('page-header__logo--mobile');
  headerButton.classList.toggle('page-header__button--close');
  headerList.classList.toggle('page-header__list--mobile');
};

const mobileMenuNoJs = () => {
  headerNavigation.classList.remove('page-header__navigation--mobile');
  headerLogo.classList.remove('page-header__logo--mobile');
  headerButton.classList.remove('page-header__button--close');
  headerList.classList.remove('page-header__list--mobile');
}

export { headerButton, onHeaderButtonHendler, mobileMenuNoJs };
