// const bracketsButton = document.getElementById('brackets');
// const negativeButton = document.getElementById('negative');
const display = document.getElementById('display');
const equalButton = document.getElementById('equal');

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
    let result;
    const operators = ["+", "-", "÷", "x"];
    let operatorCount = 0;

    for (let i = 0; i < operators.length; i++) {
        const operator = operators[i];

        if (expression.includes(operator)) {
            const equation = expression.split(operator);
            const num1 = parseFloat(equation[0]);
            const num2 = parseFloat(equation[1]);

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
    const expression = display.value;
    const result = evaluateExpression(expression);
    display.value = result.toString();
    console.log(result);
}

equalButton.addEventListener('click', equalBtn);