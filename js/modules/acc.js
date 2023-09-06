const items = document.querySelectorAll('.faq__item');
const btns = document.querySelectorAll('.faq__btn');
const answerWrappers = document.querySelectorAll('.faq__answer-wrapper');

btns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    for (let i = 0; i < items.length; i += 1) {
      if (index === i) {
        answerWrappers[i].style.height =
          items[i].classList.contains('item_active') ?
          '' : `250px`;
        items[i].classList.toggle('item_active');
      } else {
        items[i].classList.remove('item_active');
        answerWrappers[i].style.height = '';
      }
    }
  });
});
