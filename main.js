const calculator = document.querySelector('.calculator');
const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.output');
const previousOutput = document.querySelector('.previous-operand');
// let displayedNum = display.textContent;
//button responses when pressed
//number buttons
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.matches('button')) {
      let value = button.value;
      //displaying more than one number
      let displayedNum = display.textContent;
      const action = e.target.dataset.action;
      if (displayedNum === '0') {
        display.textContent = value;
      } else {
        display.textContent = displayedNum + value;
      }
      if (
        action === '+' ||
        action === '-' ||
        action === '*' ||
        action === '/' ||
        action === '=' ||
        action === '<-' ||
        action === '%' ||
        action === 'x2' ||
        action === '1/x' ||
        action === '2/x' ||
        action === '+/-' ||
        action === 'C' ||
        action === 'CE'
      ) {
        previousOutput.textContent = displayedNum;
        display.textContent = action;
      }
      if (action === '.') {
        display.textContent = displayedNum + '.';
      }
    }
  });
});
