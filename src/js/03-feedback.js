import throttle from 'lodash.throttle';
// объявление переменных
const refs = {
form: document.querySelector('.feedback-form'),
input: document.querySelector('.feedback-form input'),
textarea: document.querySelector('textarea'),
};
const STORAGE_KEY = 'feedback-form-state';
let feedbackData;

// вешаем слушателей с задержкой
refs.input.addEventListener('input', throttle(feedbackText, 500));
refs.textarea.addEventListener('input', throttle(feedbackText, 500));

// Функция записывает данные в локалхост либо берет данные из хоста, если таковые имеются.
function feedbackText() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      email: refs.input.value,
      message: refs.textarea.value,
    }),
  );
  feedbackData = JSON.parse(localStorage.getItem(STORAGE_KEY));
}

if (localStorage.getItem(STORAGE_KEY)) {
  feedbackData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  refs.input.value = feedbackData.email;
  refs.textarea.value = feedbackData.message;
}
refs.form.addEventListener('submit', resetStorage);


// очистка локалхоста
function resetStorage(event) {
  event.preventDefault();
  console.log(feedbackData);
  refs.form.reset();
  localStorage.clear();
}