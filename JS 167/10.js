let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let res = 0;
for (let elem of arr) {
    res += elem/arr.length;
}
console.log(res);