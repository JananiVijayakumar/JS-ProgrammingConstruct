var prompt = require('prompt-sync')();

var number = prompt('Enter a number: ');
var isPrime = true;

for (i = 2; i <= (number / 2); i++) {
    if ((number % i) == 0) {
        isPrime = false;
    }
}

if (isPrime == true) {
    console.log(number + " is a prime number");
}
else {
    console.log(number + " is not a prime number");
}