"use strict";
function validMountainArray(arr) {
    // let numF = 0;
    // let numS = 0;
    // const midIdx = Math.floor(arr.length / 2);
    // for (let i = 0; i < arr.length; i++) {
    //   const j = i + 1;
    //   if (j === arr.length) {
    //     break;
    //   }
    //   if (arr[i] > arr[j]) {
    //     numF = arr[i];
    //     break;
    //   }
    // }
    // for (let i = arr.length - 1; i >= 0; i--) {
    //   const j = i - 1;
    //   if (j < 0) {
    //     break;
    //   }
    //   if (arr[i] > arr[j]) {
    //     numS = arr[i];
    //     break;
    //   }
    // }
    // if (numF === numS && numF !== 0 && numF < arr[midIdx]) {
    //   return true;
    // }
    if (arr.length < 3 || arr[0] >= arr[1]) {
        return false;
    }
    let idx = 0;
    for (let i = 0; i < arr.length; i++) {
        const j = i + 1;
        if (j === arr.length || arr[i] === arr[j]) {
            return false;
        }
        if (arr[i] > arr[j]) {
            idx = i;
            break;
        }
    }
    for (let i = idx; i < arr.length; i++) {
        const j = i + 1;
        if (j === arr.length) {
            return true;
        }
        if (arr[i] <= arr[j]) {
            return false;
        }
    }
    return true;
}
console.log('true: ', validMountainArray([1, 3, 2]));
console.log('false: ', validMountainArray([2, 1]));
console.log('true: ', validMountainArray([0, 3, 2, 1]));
console.log('false: ', validMountainArray([2, 0, 2]));
console.log('false: ', validMountainArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
console.log('false: ', validMountainArray([4, 4, 3, 2, 1]));
console.log('false: ', validMountainArray([6, 7, 7, 8, 6]));
