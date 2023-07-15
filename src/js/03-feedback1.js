import { throttle } from 'lodash';

const formEl = document.querySelector('.feedback-form');
const FORM_KEY = 'feedback-form-state';
let feedbackObj = {};

checkLocalStorage();

formEl.addEventListener('input', throttle(getInput, 500));
formEl.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  console.log(feedbackObj);

  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function getInput(event) {
  feedbackObj[event.target.name] = event.target.value;
  localStorage.setItem(FORM_KEY, JSON.stringify(feedbackObj));
}

function checkLocalStorage() {
  const { email, message } = formEl;

  const keys = localStorage.getItem(FORM_KEY);

  if (keys) {
    feedbackObj = JSON.parse(keys);
    email.value = feedbackObj.email;
    message.value = feedbackObj.message;
  }
}
