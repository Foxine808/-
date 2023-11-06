let number = 456;

let num1 = Math.floor(number / 100);
let num2 = Math.floor((number % 100) / 10);
let num3 = number % 10;

let sum = num1 + num2 + num3;

console.log(sum);