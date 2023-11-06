let arr = [10, 20, 30, 50, 235, 3000];

for (let elem of arr) {
    let firstnum = Math.floor(elem / 10);

    if (firstnum === 1 || firstnum === 2 || firstnum === 5) {
        console.log(elem);
    }
}
