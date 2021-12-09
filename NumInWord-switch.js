var prompt = require('prompt-sync')();

var number = prompt('Enter a number: ');
 
switch(Number(number)) {
    case 1:
        console.log(number+ " is in word : Unit");
        break;
    case 10:
        console.log(number+ " is in word : Ten");
        break;
    case 100:
        console.log(number+ " is in word : Hundred");
        break;
    case 1000:
        console.log(number+ " is in word : Thousand");
        break;
    case 10000:
        console.log(number+ " is in word : Ten thousand");
        break;
    case 100000:
        console.log(number+ " is in word : Lakhs");
        break;
    case 1000000:
        console.log(number+ " is in word : Ten Lakhs");
        break;
    default:
        console.log(number+ " is Invalid input!!");
        break;
}