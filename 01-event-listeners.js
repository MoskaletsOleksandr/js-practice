const targetBTN = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');

// targetBTN.addEventListener('click', () => {
//   console.log('it was a click');
// });

addListenerBtn.addEventListener('click', () => {
  console.log('Встанокили слухача кліку на цільову кнопку');

  targetBTN.addEventListener('click', onTargetBtnClick);
});

removeListenerBtn.addEventListener('click', () => {
  console.log('Знімаю слухача кліку на цільову кнопку');

  targetBTN.removeEventListener('click', onTargetBtnClick);
});

function onTargetBtnClick() {
  console.log('Це клік по цільовій кнопці');
}
