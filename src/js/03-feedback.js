import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input'),
  message: document.querySelector('textarea'),
};
const LOCAL_STORAGE_KEY = 'feedback-form-state';
let formData = {};
const DELAY_VALUE = 500;

populateFormData();

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, DELAY_VALUE));

function onFormSubmit(evt) {
  evt.preventDefault();
  if (refs.email.value === '' || refs.message.value === '') {
    alert('Please fill the form!');
  }
  else {
    evt.currentTarget.reset();
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    (formData = {});
  }
}

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
}

function populateFormData() {
  const localData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

  if (localData) {
    if (localData.email) {
      refs.email.value = localData.email;
    }
    if (localData.message) {
      refs.message.value = localData.message;
    }
  }
}