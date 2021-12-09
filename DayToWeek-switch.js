var prompt = require('prompt-sync')();
var number = prompt('Enter a number between 1-7: ');
switch(Number(number)) {
    case 1:
        console.log(number+ "is Sunday");
        break;
    case 2:
        console.log(number+ "is Monday");
        break;
    case 3:
        console.log(number+ "is Tuesday");
        break;
    case 4:
        console.log(number+ "is Wednesday");
        break;
    case 5:
        console.log(number+ "is Thursday");
        break;
    case 6:
        console.log(number+ "is Friday");
        break;
    case 7:
        console.log(number+ "is Saturday");
        break;
    default:
        console.log(number+ "is Invalid input!!");
        break;
}