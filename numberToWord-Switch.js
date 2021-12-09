var prompt = require('prompt-sync')();
var number = prompt('Enter a number between 0 - 9: ');
switch(Number(number)) {
    case 0:
        console.log("Zero");
        break;
    case 1:
        console.log(number+ " in word : One");
        break;
    case 2:
        console.log(number+ " in word : Two");
        break;
    case 3:
        console.log(number+ " in word : Three");
        break;
    case 4:
        console.log(number+ " in word : Four");
        break;
    case 5:
        console.log(number+ " in word : Five");
        break;
    case 6:
        console.log(number+ " in word : Six");
        break;
    case 7:
        console.log(number+ " in word : Seven");
        break;
    case 8:
        console.log(number+ " in word : Eight");
        break;
    case 9:
        console.log(number+ " in word : Nine");
        break;
    default:
        console.log(number+ "is Invalid input!!");
        break;
}