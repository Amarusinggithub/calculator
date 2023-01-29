//declare the buttons on an the calculator
const calculatorNums=  document.getElementsByClassName("calculatornums").value;
const calculatorClear= document.getElementsByClassName("calculatorclearbtn").value;
const calculatorSigns=  document.getElementsByClassName("calculatorsigns").value;
const calculatorEqual= document.getElementsByClassName("caculatorsequalbtn").value;
const       inputbox = document.getElementById("inputbox");


function addValueToInputBox() {
    
}

function calculatorAdditionBtn(){
    
}


function calculatorNumsBtn (){
}  


function calculatorSubtractitionBtn(){
    
}


function calculatorMultiplictionBtn (){
    
}


function calculatorClearBtn (){
    
}


function calculatorEqualBtn(){

}


function calculatordecimalBtn(){

}

calculatorNums.addEventListener("click",calculatorNumsBtn);
calculatorSigns.addEventListener("click",calculatordecimalBtn);
calculatorEqual.addEventListener("click",calculatorEqualBtn);
calculatorClear.addEventListener("click",calculatorClearBtn);
calculatorSigns.addEventListener("click",calculatorMultiplictionBtn);
calculatorSigns.addEventListener("click",calculatorSubtractitionBtn);
calculatorSigns.addEventListener("click",calculatorAdditionBtn);
