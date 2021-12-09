var num1 = 1, num2 = 2, num3 = 3;
var operation1 = (num1) + (num2) * (num3);
var operation2 = (num1) % (num2) + (num3);
var operation3 = (num3) + (num1) / (num2);
var operation4 = (num1) * (num2) + (num3);
console.log("a+b*c = " +operation1);
console.log("a%b+c = " +operation2);
console.log("c+a/b = " +operation3);
console.log("a*b+c = " +operation4);
if ( ( operation1 > operation2 ) && ( operation1 > operation3 ) && ( operation1 > operation4 ) ) {
    console.log(operation1 + " is the maximum");
}
else if ( ( operation2 > operation1 ) &&  (operation2 > operation3 ) && ( operation2 > operation4 ) ) {
    console.log(operation2 + " is the maximum");
}
else if ( ( operation3 > operation1 ) && ( operation3 > operation2 ) && ( operation3 > operation4 ) ) {
    console.log(operation3 + " is the maximum");
}
else {
    console.log(operation4 + " is the maximum");
}

if ( ( operation1 < operation2 ) && ( operation1 < operation3 ) && ( operation1 < operation4 ) ) {
    console.log(operation1 +" is the minimum");
}
else if ( ( operation2 < operation1 ) && ( operation2 < operation3 ) && ( operation2 < operation4 ) ) {
    console.log(operation2 +" is the minimum");
}
else if ( ( operation3 < operation1 ) && ( operation3 < operation2 ) && ( operation3 < operation4 ) ) {
    console.log(operation3 +" is the minimum");
}
else {
    console.log(operation4 +" is the minimum");
}