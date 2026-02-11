let num1 = "";
let num2 = "";
let operator = "";

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
