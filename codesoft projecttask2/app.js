let display = document.getElementById('display');
let currentInput = '';

function appendToDisplay(value) {
  // Prevent multiple operators in a row
  if (['+', '-', '*', '/'].includes(value) && ['+', '-', '*', '/'].includes(currentInput.slice(-1))) {
    return;
  }

  // Add value to current input
  currentInput += value;
  display.value = currentInput;
}

function clearDisplay() {
  currentInput = '';
  display.value = '';
}

function calculateResult() {
  try {
    // Evaluate the expression from the display
    currentInput = eval(currentInput).toString();
    display.value = currentInput;
  } catch (error) {
    display.value = 'Error';
    currentInput = '';
  }
}
