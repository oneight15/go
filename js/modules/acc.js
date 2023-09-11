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
        items[i].classList.toggle('item_active');
        paths[i].style.stroke = 'transparent';
      } else {
        items[i].classList.remove('item_active');
        answerWrappers[i].style.height = '';
      }
    }
  });
});
