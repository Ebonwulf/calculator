const calculator = document.querySelector('.calculator');
const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.output');
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
      const previousKeyType = calculator.dataset.previousKeyType;
      if (displayedNum === '0' || previousKeyType === 'operator') {
        display.textContent = value;
      } else {
        display.textContent = displayedNum + value;
      }
      if (
        action === '+' ||
        action === '-' ||
        action === '*' ||
        action === '/' ||
        // action === '=' ||
        action === '<-' ||
        // action === '.' ||
        action === '%' ||
        action === 'x2' ||
        action === '1/x' ||
        action === '2/x' ||
        action === '+/-' ||
        action === 'C' ||
        action === 'CE'
      ) {
        display.textContent = action;
        // console.log('operator key');
      }
      if (action === '.') {
        display.textContent = displayedNum + '.';
      }
      const calculate = (n1, actions, n2) => {
        let result = '';

        if (actions === '+') {
          result = parseFloat(n1) + parseFloat(n2);
        } else if (actions === '-') {
          result = n1 - n2;
        } else if (actions === '*') {
          result = n1 * n2;
        } else if (actions === '/') {
          result = n1 / n2;
        }
        console.log(result);
        return result;
      };
      if (action === '=') {
        const firstValue = calculator.dataset.value;
        const actions = calculator.dataset.actions;
        const secondValue = displayedNum;

        display.textContent = calculate(firstValue, actions, secondValue);
      }
    }
  });
});
