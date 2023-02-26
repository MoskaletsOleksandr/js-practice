const btnEls = document.querySelectorAll('.js-accordion-btn');

console.log(btnEls);

const handleTogglePanel = (event) => {
  const panelEl = event.target.nextElementSibling;

  panelEl.classList.toggle('closed');

  console.log(panelEl);
};

btnEls.forEach((el) => {
  el.addEventListener('click', handleTogglePanel);
});
