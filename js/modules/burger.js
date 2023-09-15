const burger = document.querySelector('.burger');
const nav = document.querySelector('.navigation');
const headWrap = document.querySelector('.header-wrapper');
const navList = document.querySelector('.navigation__list');
const duration = 300;
let startTime = NaN;

const openBurger = (timestamp) => {
  startTime ||= timestamp;
  const progress = (timestamp - startTime) / duration;
  navList.style.opacity = progress;

  if (progress < 1) {
    requestAnimationFrame(openBurger);
  }
};

const closeBurger = (timestamp) => {
  startTime ||= timestamp;
  const progress = (timestamp - startTime) / duration;
  navList.style.opacity = 1 - progress;

  if (progress < 1) {
    requestAnimationFrame(closeBurger);
  } else {
    burger.classList.remove('burger_active');
    nav.classList.remove('navigation_active');
    headWrap.classList.remove('header-wrapper_active');
    startTime = NaN;
  }
};

burger.addEventListener('click', () => {
  burger.classList.toggle('burger_active');
  nav.classList.toggle('navigation_active');
  headWrap.classList.toggle('header-wrapper_active');
  requestAnimationFrame(openBurger);
  startTime = NaN;
});

document.addEventListener('click', e => {
  if (e.target.classList.contains('navigation__link')) {
    requestAnimationFrame(closeBurger);
    startTime = NaN;
  }
});
