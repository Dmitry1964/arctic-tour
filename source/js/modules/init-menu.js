const pageBody = document.querySelector('.wrapper');
const pageHeader = document.querySelector('.page-header');
const headerNavigation = document.querySelector('.page-header__navigation');
const headerLogo = headerNavigation.querySelector('.page-header__logo');
const headerButton = headerNavigation.querySelector('.page-header__button');
const headerList = headerNavigation.querySelector('.page-header__list');
const headerTitle = document.querySelector('.page-header__title');
const headerLink = headerNavigation.querySelectorAll('.page-header__link');

const onHeaderButtonHendler = () => {
  headerNavigation.classList.toggle('page-header__navigation--mobile');
  headerLogo.classList.toggle('page-header__logo--mobile');
  headerButton.classList.toggle('page-header__button--close');
  headerList.classList.toggle('page-header__list--mobile');
  pageBody.classList.toggle('wrapper-fixed');
};

const mobileMenuNoJs = () => {
  headerNavigation.classList.remove('page-header__navigation--nojs');
  // headerNavigation.classList.add('page-header__navigation--mobile');
  headerLogo.classList.remove('page-header__logo--mobile');
  headerButton.classList.remove('page-header__button--close');
  headerList.classList.remove('page-header__list--mobile');
  headerTitle.classList.remove('page-header__title--nojs');

}

const onHeaderLinkHendler = () => {
  if (pageBody.classList.contains('wrapper-fixed')) {
    pageBody.classList.remove('wrapper-fixed');
  }
  headerNavigation.classList.remove('page-header__navigation--mobile');
  headerLogo.classList.remove('page-header__logo--mobile');
  headerButton.classList.remove('page-header__button--close');
  headerList.classList.remove('page-header__list--mobile');
};
export { headerButton, headerList, pageHeader, onHeaderButtonHendler, mobileMenuNoJs, onHeaderLinkHendler };
