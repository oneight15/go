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
  // headWrap.style.opacity = progress;

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
  }

  if (navList.style.opacity <= 0) {
    burger.classList.remove('burger_active');
    nav.classList.remove('navigation_active');
    headWrap.classList.remove('header-wrapper_active');
  }
};

burger.addEventListener('click', () => {
  if (burger.classList.contains('burger_active')) {
    // burger.classList.remove('burger_active');
    startTime = NaN;
    requestAnimationFrame(closeBurger);
  } else {
    burger.classList.add('burger_active');
    nav.classList.add('navigation_active');
    headWrap.classList.add('header-wrapper_active');
    requestAnimationFrame(openBurger);
    startTime = NaN;
  }
});

document.addEventListener('click', e => {
  if (e.target.classList.contains('navigation__link')) {
    requestAnimationFrame(closeBurger);
    startTime = NaN;
  }
});
