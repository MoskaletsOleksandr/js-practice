const formEl = document.querySelector('.js-contact-form');
const formInputEl = document.querySelector('.js-username-input');
const formCheckboxEl = document.querySelector('.js-policy-checkbox');
const userNameOutputEl = document.querySelector('.js-username-output');
const formSubmitBtnEl = document.querySelector('.js-contact-form-submit');

formInputEl.addEventListener('focus', (event) => {
  event.target.style.outline = '8px solid teal';
});

formInputEl.addEventListener('blur', (event) => {
  event.target.style.outline = 'none';
});

formInputEl.addEventListener('input', (event) => {
  userNameOutputEl.textContent = event.target.value;
});

formCheckboxEl.addEventListener('change', (event) => {
  if (event.target.checked && formInputEl.value !== '') {
    formSubmitBtnEl.disabled = false;

    return;
  }

  return (formSubmitBtnEl.disabled = true);
});

formEl.addEventListener('submit', (event) => {
  event.preventDefault();

  console.log(event);

  event.target.reset();

  userNameOutputEl.textContent = '';

  formSubmitBtnEl.disabled = true;
});
