let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let estPrinted = false;
let netuPrinted = false;

for (let elem of arr) {
    if (elem == 5 && !estPrinted) {
        console.log('est`');
        estPrinted = true;
    } else if (elem != 5 && !netuPrinted) {
        console.log('netu');
        netuPrinted = true;
    }
}
/// код я сам написал, а чтобы единожды писалось есть и нету, я списал 