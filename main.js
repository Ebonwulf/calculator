const numButtons = document.querySelectorAll('[data-number]');
const operatButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelectorAll('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');

numButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const value = button.value;
    console.log(value);
    // output.value = value;
    // console.log(output);
  });
});
