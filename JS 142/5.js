let number = 123456;
let firstPart = Math.floor(number / 1000);
let secondPart = number % 1000;

let sumFirstPart = firstPart % 10 + Math.floor(firstPart / 10) % 10 + Math.floor(firstPart / 100);
let sumSecondPart = secondPart % 10 + Math.floor(secondPart / 10) % 10 + Math.floor(secondPart / 100);

if (sumFirstPart === sumSecondPart) {
    console.log('да');
} else {
    console.log('нет');
}
