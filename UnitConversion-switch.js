var prompt = require('prompt-sync')();
var number = prompt("Enter the number for unit conversion: ");
var num = prompt('Enter 1. Feet to Inch ' + '2. Feet to Meter ' + '3. Inch to Feet ' + '4. Meter to Feet option: ');
switch(Number(num)) {
    case 1: 
        var feetToInch = number * 12;
        console.log(number+ " in Feet to Inch: " +feetToInch);
        break;
    case 2: 
        var feetToMeter = number / 3.281;
        console.log(number+ " in Feet to Meter: " +feetToMeter);
        break;
    case 3: 
        var inchToFeet = number / 12;
        console.log(number+ " in Inch to Feet: " + inchToFeet);
        break;
    case 4: 
        var meterToFeet = number * 3.281;
        console.log(number+ " in Meter to Feet: " + meterToFeet);
        break;
    default:
        console.log(number+ " is Wrong input!!");
        break;
}