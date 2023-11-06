let arr = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];
let sum = 0;

for (let elem of arr) {
    if (elem > 0) {
        sum += elem;
    }
}

console.log(sum);
