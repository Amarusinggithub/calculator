const calculatorOperators = document.querySelectorAll('.caculatorsigns');
const calculatorNumbers = document.querySelectorAll('.caculatornums');
const calculatorEqual = document.querySelector('.caculatorsequalbtn');
const calculatorClear = document.querySelector('.caculatorclearbtn');
const calculatorDisplay = document.querySelector('.display');
const previousOperand = document.querySelector('.previous-operand');
const currentOperand = document.querySelector('.current-operand');
const calculatorDec = document.querySelector('.calculatordec');
const calculatorNegative = document.querySelector('.calculatornegative');
const currentOutput = document.querySelector('.output');

function displayNumbers() {
    calculatorNumbers.forEach(button => {
        button.addEventListener('click', () => {
            calculatorDisplay.innerHTML += button.innerHTML;
        });
    });
}