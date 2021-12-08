var prompt = require('prompt-sync')();
var date = prompt('Enter the Date: ');
var month = prompt('Enter the Month: ');
    if (month <= 6 & date <= 20){
    result = true;
    }
    if (month >= 3 & month < 6  & date>20)  {
        result = true;
    }
    else{
        result=false;
    }    
console.log(result);