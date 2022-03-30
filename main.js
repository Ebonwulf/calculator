const calculator = document.querySelector('.calculator');
const numButtons = document.querySelectorAll('.num-button');
const actionButton = document.querySelectorAll('[data-action]');
const display = document.querySelector('.output');
//button responses when pressed
//number buttons
numButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.matches('button')) {
      const value = button.value;
      // console.log(value);
      display.value = value;
      // console.log(display);
    }
  });
});
//action buttons
actionButton.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const action = e.target.dataset.action;
    if (
      action === '+' ||
      action === '-' ||
      action === '*' ||
      action === '/' ||
      action === '=' ||
      action === '<-' ||
      action === '.' ||
      action === '%' ||
      action === 'x2' ||
      action === '1/x' ||
      action === '2/x' ||
      action === '+/-' ||
      action === 'C' ||
      action === 'CE'
    ) {
      display.value = action;
      // console.log('operator key');
    }
  });
});
