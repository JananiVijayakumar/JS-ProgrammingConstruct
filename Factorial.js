var prompt = require('prompt-sync')();
var num = prompt('Enter a number: ');
var factorial = true;
for (i = 1; i <= num; i++) {
    factorial = factorial * i;
}
console.log("Factorial of the " + num + " is : " +factorial);