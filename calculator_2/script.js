
let displayInpInf = document.getElementById('inputInf');
let displayInpSup = document.getElementById('inputSup');

let forInputInf = '', //Input pastdagi
    forInputSup = ''; // input tepadagi
let numbers1 //Birinchi son    
let result; //Natija

function getAddInput(number) {
   forInputInf = forInputInf + String(number);
   displayInpInf.value = forInputInf;   
}

function getAction(oper) {   
        numbers1 = displayInpInf.value;        
        forInputSup = numbers1 + ' ' + oper + ' ';
        forInputInf = '';
        displayInpInf.value = forInputInf;
        displayInpSup.value = forInputSup        
}

function daraja() {
    numbers1 = Number(displayInpInf.value);
    forInputSup = numbers1 + ' ' + '^' + 2;
    displayInpInf.value = numbers1 ** 2;
    displayInpSup.value = forInputSup;
    forInputInf = '';
    forInputSup = '';
}

function getClean(){
    forInputInf = '';
    forInputSup = '';
    displayInpInf.value = '0';    
    displayInpSup.value = '';
}

function getDelete() {
    let array = displayInpInf.value.slice(0,-1);
    if(array){   
        forInputInf = array;
        displayInpInf.value = array;
    }else {
        forInputInf = array;
        displayInpInf.value = '0';
    }     
}

function kvIldiz() {
    numbers1 = Number(displayInpInf.value)
    displayInpInf.value = numbers1 ** 0.5;
    forInputSup = '√ ' + numbers1;
    displayInpSup.value = forInputSup;
    forInputInf = '';
    forInputSup = '';
    numbers1 = null;
}

function getEval() {
    forInputSup = forInputSup + displayInpInf.value    
    let result = eval(forInputSup); 
    displayInpInf.value = result;   
    displayInpSup.value = forInputSup;
    forInputInf = '';
    numbers1 = '';
    numbers2 = '';
    forInputSup = '';   
}

function inputClick() {
    displayInpInf.value = '';
}