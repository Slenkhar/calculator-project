let firstNumber = "";
let secondNumber = "";
let operator = "";
let resultDisplayed = false;

const display = document.getElementById("display");
const operatorButtons = document.querySelectorAll(".operator");
const numberButtons = document.querySelectorAll(".number");
const clearButton = document.getElementById("clear");
const backspaceButton = document.getElementById("backspace");
const decimalButton = document.getElementById("decimal");
const equalsButton = document.getElementById("equals");

//---------------
//Math functions
//---------------
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

//-----------------
//Operate function
//-----------------
function operate(op, a, b) {
  a = +a;
  b = +b;
  let result;
  switch (op) {
    case "+":
      result = add(a, b);
      break;
    case "-":
      result = subtract(a, b);
      break;
    case "*":
      result = multiply(a, b);
      break;
    case "/":
      result = divide(a, b);
      break;
  }
  return Math.round((result * 100000) / 100000);
}

//-----------------
//Display function
//-----------------
function updateDisplay(value) {
  display.textContent = value;
}

//-------------
//Number input
//-------------
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (resultDisplayed) {
      firstNumber = "";
      resultDisplayed = false;
    }
    if (!operator) {
      firstNumber += button.dataset.number;
      updateDisplay(firstNumber);
    } else {
      secondNumber += button.dataset.number;
      updateDisplay(secondNumber);
    }
  });
});

//---------------
//Operator input
//---------------
operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (firstNumber && secondNumber) {
      firstNumber = operate(operator, firstNumber, secondNumber).toString();
      updateDisplay(firstNumber);
      secondNumber = "";
    }
    operator = button.dataset.operator;
    resultDisplayed = false;
  });
});

//-------------
//Equals logic
//-------------
equalsButton.addEventListener("click", () => {
  if (!firstNumber || !operator || !secondNumber) return;
  firstNumber = operate(operator, firstNumber, secondNumber).toString();
  updateDisplay(firstNumber);
  secondNumber = "";
  operator = "";
  resultDisplayed = true;
});
