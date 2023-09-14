const burger = document.querySelector('.burger');
const nav = document.querySelector('.navigation');
const headWrap = document.querySelector('.header-wrapper');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger_active');
  nav.classList.toggle('navigation_active');
  headWrap.classList.toggle('header-wrapper_active');
});

nav.addEventListener('click', e => {
  if (e.target.classList.contains('navigation__link')) {
    burger.classList.remove('burger_active');
    nav.classList.remove('navigation_active');
    headWrap.classList.remove('header-wrapper_active');
  }
});
