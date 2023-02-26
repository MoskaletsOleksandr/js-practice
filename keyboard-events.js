const outputEl = document.querySelector('.js-output');

document.addEventListener('keydown', (event) => {
  if (event.code === 'KeyW') {
    outputEl.insertAdjacentHTML(
      'beforeend',
      `code: ${event.code} <br> key: ${event.key} <br> <br>`
    );
  }
});
