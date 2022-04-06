const calculator = document.querySelector('.calculator');
const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.output');
const previousOutput = document.querySelector('.previous-operand');
let operator = '';
// let result = '';

// button responses when pressed
// number buttons
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.matches('button')) {
      let value = button.value;
      //displaying more than one number
      let displayedNum = display.textContent;
      const action = e.target.dataset.action;
      if (!action) {
        if (displayedNum === '0') {
          display.textContent = value;
        } else {
          display.textContent = displayedNum + value;
        }
      }
      if (
        action === 'add' ||
        action === '-' ||
        action === 'multiply' ||
        action === '/' ||
        action === '%'
      ) {
        operator = action;
        previousOutput.textContent = displayedNum;
        display.textContent = 0;
      }
      //decimal restricted to one
      if (action === 'decimal' && !display.textContent.includes('.')) {
        display.textContent = displayedNum + '.';
      }
      if (action === 'equals' && operator === 'add') {
        display.textContent =
          parseFloat(previousOutput.textContent) +
          parseFloat(display.textContent);
        return display.textContent;
      }
      if (action === 'equals' && operator === '-') {
        display.textContent =
          parseFloat(previousOutput.textContent) -
          parseFloat(display.textContent);
        return display.textContent;
      }
      if (action === 'equals' && operator === '/') {
        display.textContent =
          parseFloat(previousOutput.textContent) /
          parseFloat(display.textContent);
        return display.textContent;
      }
      if (action === 'equals' && operator === 'multiply') {
        display.textContent =
          parseFloat(previousOutput.textContent) *
          parseFloat(display.textContent);
        return display.textContent;
      }
      if (action === 'CE') {
        display.textContent = 0;
        previousOutput.textContent = 0;
      }
      if (action === 'C') {
        display.textContent = 0;
      }
      if (action === '<-') {
        displayedNum = display.textContent.substring(
          0,
          display.textContent.length - 1
        );
        display.textContent = displayedNum;
        if (display.textContent === '') {
          display.textContent = 0;
        }
      }
      if (action === 'equals' && operator === '%') {
        display.textContent =
          (previousOutput.textContent * display.textContent) / 100;
        return display.textContent;
      }
      if (action === '+/-') {
        display.textContent = `Don't be silly, this button doesn't work!`;
      }
      if (action === 'x2') {
        display.textContent =
          parseFloat(display.textContent) * parseFloat(display.textContent);
        return display.textContent;
      }
      if (action === '2/x') {
        displayedNum = Math.sqrt(parseFloat(display.textContent));
        display.textContent = displayedNum;
      }
      if (action === '1/x') {
        display.textContent = 1 / parseFloat(display.textContent);
        return display.textContent;
      }
    }
  });
});
