"use strict";

// const bracketsButton = document.getElementById('brackets');
// const negativeButton = document.getElementById('negative');
var display = document.getElementById('display');
var equalButton = document.getElementById('equal');

function displayValue(value) {
  display.value += value;
}

function backspace() {
  display.value = display.value.substring(0, display.value.length - 1);
}

function clearDisplay() {
  display.value = "";
}

function evaluateExpression(expression) {
  var result;
  var operators = ["+", "-", "÷", "x"];
  var operatorCount = 0;

  for (var i = 0; i < operators.length; i++) {
    var operator = operators[i];

    if (expression.includes(operator)) {
      var equation = expression.split(operator);
      var num1 = parseFloat(equation[0]);
      var num2 = parseFloat(equation[1]);

      switch (operator) {
        case "+":
          result = num1 + num2;
          break;

        case "-":
          result = num1 - num2;
          break;

        case "x":
          result = num1 * num2;
          break;

        case "÷":
          result = num1 / num2;
          break;

        default:
          console.log("Invalid operator");
      }

      operatorCount++;
    }
  }

  if (operatorCount > 1) {
    result = "error";
  }

  console.log(result);
  return result;
}

function equalBtn() {
  var expression = display.value;
  var result = evaluateExpression(expression);
  display.value = result.toString();
  console.log(result);
}

equalButton.addEventListener('click', equalBtn);