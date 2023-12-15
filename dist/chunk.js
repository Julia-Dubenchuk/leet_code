"use strict";
function chunk(arr, size) {
    const l = Math.ceil(arr.length / size);
    let chunkedArr = [];
    let count = 0;
    let k = 0;
    if (arr.length === 0) {
        return chunkedArr;
    }
    for (let i = 0; i < l; i++) {
        let chunArr = [];
        for (let j = count; j < count + size; j++) {
            if (arr.length === j) {
                break;
            }
            chunArr.push(arr[j]);
            k++;
        }
        chunkedArr = [...chunkedArr, chunArr];
        count = k;
    }
    return chunkedArr;
}
// console.log(chunk([1, 2, 3, 4, 5], 1));
console.log(chunk([1, 9, 6, 3, 2], 3));
