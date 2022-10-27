

let boyName = '';
let girlName = '';

let boyCard = '';
let girlCard = '';

let boyClass = '';
let girlClass = '';

let girlImage = '';

let boyInterim = '';
let girlInterim = '';



function nameSelektor(n) {
    boyName = 'boyName' + n;
    girlName = 'girlName' + n;
    
    if (boyCard){
        if(boyCard === document.getElementsByName(boyName)[0]){
            if(boyCard.boyClass === "front") boyCard.className = "front";
            if(girlCard.className === "back") girlCard.className = "back";         
        }else {
            boyCard = document.getElementsByName(boyName)[0];
            girlCard = document.getElementsByName(girlName)[0]; 
            classTekshir();
        }
        
    }else {
        boyCard = document.getElementsByName(boyName)[0];
        girlCard = document.getElementsByName(girlName)[0]; 
        classYangila();
    }
}

function classYangila(){
    boyClass = boyCard.className
    if(boyClass === "front") boyCard.className = "back";
    else if(boyClass === "back") boyCard.className = "front";
    
    girlClass = girlCard.className;    
    if(girlClass === "back") girlCard.className = "front";
    else if(girlClass === "front") girlCard.className = "back";
    girlImage = girlCard.innerHTML;
    
    boyInterim = boyCard;
    girlInterim = girlCard;
}

function classTekshir() {
    if (girlImage === girlCard.innerHTML) {
         boyCard.className = "frontEnd";
         boyInterim.className = "frontEnd"        
         girlCard.className = "backEnd";
         girlInterim.className = "backEnd";
         boyCard = '';
         girlCard = '';
         boyClass = '';
         girlClass = '';        
    }else{
        if(boyCard.boyClass === "front") boyCard.className = "back";
        if(girlCard.className === "back") girlCard.className = "front"; 
        setTimeout(closeAll, 1000);
    }
    
}

function closeAll() {
    if(boyInterim.className !== "frontEnd")boyInterim.className = "front"
    if(girlInterim.className !== "backEnd")girlInterim.className = "back";
    if(boyCard.className !== "frontEnd") boyCard.className = "front";
    if(girlCard.className !== "backEnd") girlCard.className = "back";
    boyInterim = '';
    girlInterim = '';
    boyCard = '';
    girlCard = '';
   
}









