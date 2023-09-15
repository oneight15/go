const orderCall = document.querySelector('.header__btn');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const duration = 300;
let startTime = NaN;

const openModal = (timestamp) => {
  startTime ||= timestamp;
  const progress = (timestamp - startTime) / duration;
  overlay.style.opacity = progress;

  if (progress < 1) {
    requestAnimationFrame(openModal);
    modal.style.display = 'block';
  }
};

const closeModal = (timestamp) => {
  startTime ||= timestamp;
  const progress = (timestamp - startTime) / duration;
  overlay.style.opacity = 1 - progress;

  if (progress < 1) {
    requestAnimationFrame(closeModal);
    modal.style.display = 'block';
  } else {
    overlay.classList.remove('overlay_active');
    modal.style.display = 'none';
    startTime = NaN;
  }
};

orderCall.addEventListener('click', () => {
  overlay.classList.add('overlay_active');
  requestAnimationFrame(openModal);
});

overlay.addEventListener('click', e => {
  const target = e.target;

  if (target === overlay || target.closest('.modal__close')) {
    requestAnimationFrame(closeModal);
    startTime = NaN;
  }
});
