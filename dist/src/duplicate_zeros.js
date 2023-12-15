"use strict";
/**
 Do not return anything, modify arr in-place instead.
 */
function duplicateZeros(arr) {
    let isZero = false;
    let prev = null;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            isZero = true;
        }
        if (isZero) {
            prev = arr[i];
            break;
        }
        if (prev !== null) {
            arr[i] = prev;
        }
    }
}
duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]);
