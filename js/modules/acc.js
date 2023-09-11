const items = document.querySelectorAll('.faq__item');
const answerWrappers = document.querySelectorAll('.faq__answer-wrapper');
const paths = document.querySelectorAll('.path');

items.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    for (let i = 0; i < items.length; i += 1) {
      if (index === i) {
        answerWrappers[i].style.height =
          items[i].classList.contains('item_active') ?
          '' : `214px`;
        paths[i].classList.toggle('path_active');
        items[i].classList.toggle('item_active');
      } else {
        items[i].classList.remove('item_active');
        paths[i].classList.remove('path_active');
        answerWrappers[i].style.height = '';
      }
    }
  });
});
