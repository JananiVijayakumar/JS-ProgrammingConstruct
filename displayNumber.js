var prompt = require('prompt-sync')();

var number = prompt('Enter a number: ');

if ( number == 1 ) {
    console.log("This is Units");
}
else if ( number == 10 ) {
    console.log("This is Tens");
}
else if ( number == 100 ) {
    console.log("This is Hundreds");
}
else if ( number == 1000 ) {
    console.log("This is Thousands");
}
else if ( number == 10000 ) {
    console.log("This is Ten thousands");
}
else {
    console.log("This is wrong input!!");
}