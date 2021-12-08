var prompt = require('prompt-sync')();
var number = prompt("Enter a number between 1 to 7: ");
if ( number == 1 ) {
    console.log("This is Sunday");
}
else if ( number == 2 ) {
    console.log("This is Monday");
}
else if ( number == 3 ) {
    console.log("This is Tuesday");
}
else if ( number == 4 ) {
    console.log("This is Wednesday");
}
else if ( number == 5 ) {
    console.log("This is Thursday");
}
else if ( number == 6 ) {
    console.log("This is Friday");
}
else if ( number == 7 ) {
    console.log("This is Saturday");
}
else {
    console.log("You have entered wrong number!!");
}