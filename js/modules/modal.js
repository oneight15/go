const orderCall = document.querySelector('.header__btn');
const overlay = document.querySelector('.overlay');

orderCall.addEventListener('click', () => {
  overlay.classList.add('overlay_active');
});

overlay.addEventListener('click', e => {
  const target = e.target;

  if (target === overlay || target.closest('.modal__close')) {
    overlay.classList.remove('overlay_active');
  }
});
