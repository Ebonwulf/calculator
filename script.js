// class Calculator {
//   constructor(previousOutput, display) {
//     this.previousOutput = previousOutput;
//     this.display = display;
//   }
// }
const calculator = document.querySelector('.calculator');
const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.output');
const previousOutput = document.querySelector('.previous-operand');

buttons.forEach((button) => {
  button.addEventListener('click', calculate);
});
function calculate(event) {
  const clickedButtonValue = event.target.value;
  if (clickedButtonValue === '=') {
    if (display.value !== '') {
      display.value = eval(display.value);
    }
  } else if (clickedButtonValue === 'C') {
    display.value = '';
  } else {
    display.value += clickedButtonValue;
  }
}
