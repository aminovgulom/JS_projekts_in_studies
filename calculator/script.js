
let displayInpInf = document.getElementById('inputInf');
let displayInpSup = document.getElementById('inputSup');


let forInputInf = '', //Input pastdagi
    forInputSup = ''; // input tepadagi
let numbers1, //Birinchi son
    numbers2; //ikkinchi son
let action; //Operator
let result; //Natija


function getAddInput(number) {
   forInputInf = forInputInf + String(number);
   displayInpInf.value = forInputInf;   
}

function getAction(oper) {
    if(numbers1){
        action = oper;        
        forInputSup = numbers1 + ' ' + action + ' ';      
        displayInpInf.value = forInputInf;
        displayInpSup.value = forInputSup;              
        }
    else {
        numbers1 = Number(displayInpInf.value)
        action = oper;
        forInputSup = numbers1 + ' ' + action + ' ';
        forInputInf = '';
        displayInpInf.value = forInputInf;
        displayInpSup.value = forInputSup
        }
    
}

function getAlignment() {
    numbers2 = Number(displayInpInf.value)
    if(action === '+') result = (numbers1 + numbers2);
    else if(action === '-') result = (numbers1 - numbers2);
    else if(action === '*') result = (numbers1 * numbers2);
    else if(action === '/') result = (numbers1 / numbers2);
    else if(action === '@') result = (numbers1 ** numbers2);
    else if(action === '*') result = (numbers1 * numbers2);
    else if(action === '^') result = (numbers1 ** numbers2); 
    displayInpInf.value = result;
    forInputSup = forInputSup + forInputInf
    displayInpSup.value = forInputSup;
    forInputInf = '';
    numbers1 = '';
    numbers2 = '';
    forInputSup = '';

}
function daraja(n) {
    numbers1 = Number(displayInpInf.value);
    forInputSup = numbers1 + ' ' + '^' + n;
    displayInpInf.value = numbers1 ** n;
    displayInpSup.value = forInputSup;
    forInputInf = '';
    forInputSup = '';
    numbers1 = null;

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
    }
    else {
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

function getPercent() {
    numbers2 = Number(displayInpInf.value);
    if(action === '+') result = numbers1 + (numbers1 * numbers2 / 100);
    if(action === '-') result = numbers1 - (numbers1 * numbers2 / 100);
    if(action === '*') result = numbers1 * ( numbers2 / 100);
    if(action === '/') result = numbers1 / ( numbers2 / 100);
    displayInpInf.value = result;
    forInputInf = '';
    displayInpSup.value = '';
    numbers1 = null;
    numbers2 = null;
}



 


