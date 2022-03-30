const calculator = document.querySelector('.calculator');
const numButtons = document.querySelectorAll('.num-button');
const actionButton = document.querySelectorAll('[data-action]');
const previousOperandValue = document.querySelector('[previous-operand]');
const currentOperanValue = document.querySelector('[current-operands]');

//button responses when pressed
//number buttons
numButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.matches('button')) {
      const value = button.value;
      console.log(value);
    }
    // output.value = value;
    // console.log(output);
  });
});
//action buttons
actionButton.forEach((button) => {
  button.addEventListener('click', (e) => {
    const action = e.target.dataset.action;
    if (
      action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide'
    ) {
      console.log('operator key');
    } else if (action === 'equals') {
      console.log('equals key');
    } else if (action === 'delete') {
      console.log('delete key');
    } else if (action === 'decimal') {
      console.log('decimal key');
    } else if (action === 'percent') {
      console.log('percent key');
    } else if (action === 'x2') {
      console.log('squared key');
    } else if (action === '1/x') {
      console.log('1/x key');
    } else if (action === '2/x') {
      console.log('2/x key');
    } else if (action === '+/-') {
      console.log('+/- key');
    } else if (action === 'clear') {
      console.log('clear key');
    } else if (action === 'clear-all') {
      console.log('clear-all key');
    } else if (!action) {
      if (displayedNum === '0') {
        display.textContent = keyContent;
      }
    }
  });
});
