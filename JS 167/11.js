function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

let num = 7;
let result = factorial(num);
console.log(`Факториал числа ${num} равен ${result}`);
