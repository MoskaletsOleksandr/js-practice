const refs = {
  input: document.querySelector('.js-input'),
  nameLabel: document.querySelector('.js-button > span'),
  licenseCheckbox: document.querySelector('.js-license'),
  btn: document.querySelector('.js-button'),
};

refs.input.addEventListener('focus', onInputFocus);
refs.input.addEventListener('blur', onInputBlur);
refs.input.addEventListener('input', onInputChange);
refs.licenseCheckbox.addEventListener('change', onLicenseCheckbox);

function onInputFocus() {
  console.log('onInputFocus');
}

function onInputBlur() {
  console.log('onInputBlur');
}

function onInputChange(event) {
  console.log(event.currentTarget.value);

  refs.nameLabel.textContent = event.currentTarget.value;
}

function onLicenseCheckbox(event) {
  console.log(event.currentTarget.checked);

  refs.btn.disabled = !event.currentTarget.checked;
}
