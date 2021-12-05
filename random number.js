var arr = [];
while(arr.length < 5){
    var number = Math.floor(Math.random() * 1000) + 1;
    if(arr.indexOf(number) === -1) arr.push(number);
    var min = Math.min.apply(null, arr),
    max = Math.max.apply(null, arr);
}
console.log("The Random numbers are :" +arr);
console.log("The minimum number is :" +min);
console.log("The Maximum number is :" +max);