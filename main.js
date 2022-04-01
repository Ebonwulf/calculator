const calculator = document.querySelector('.calculator');
const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.output');
const previousOutput = document.querySelector('.previous-operand');
let operator = '';
let result = '';

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
        action === '+' ||
        action === '-' ||
        action === '*' ||
        action === '/' ||
        action === '%'
      ) {
        //store previous output and the action
        operator = action;
        previousOutput.textContent = displayedNum;
        display.textContent = 0;
      }
      if (action === '.') {
        display.textContent = displayedNum + '.';
      }

      if (action === '=' && operator === '+') {
        display.textContent =
          parseFloat(previousOutput.textContent) +
          parseFloat(display.textContent);
        return display.textContent;
      }
      if (action === '=' && operator === '-') {
        display.textContent =
          parseFloat(previousOutput.textContent) -
          parseFloat(display.textContent);
        return display.textContent;
      }
      if (action === '=' && operator === '/') {
        display.textContent =
          parseFloat(previousOutput.textContent) /
          parseFloat(display.textContent);
        return display.textContent;
      }
      if (action === '=' && operator === '*') {
        display.textContent =
          parseFloat(previousOutput.textContent) *
          parseFloat(display.textContent);
        return display.textContent;
      }
      if (action === 'CE') {
        display.textContent = 0;
        previousOutput.textContent = 0;
      }
      if (action === 'C' || action === '<-') {
        display.textContent = parseFloat(
          (displayedNum = display.textContent.length - 1)
        );
      }
    }
  });
});
