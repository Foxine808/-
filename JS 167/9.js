let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let res = 1;
for (let elem of arr) {
    res += elem*elem;
}
console.log(res-1);