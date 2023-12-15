"use strict";
/**
 Do not return anything, modify arr in-place instead.
 */
function duplicateZeros(arr) {
    let possible_dups = 0;
    let length = arr.length - 1;
    for (let i = 0; i <= length - possible_dups; i++) {
        if (arr[i] === 0) {
            if (i === length - possible_dups) {
                arr[length] = 0;
                length -= 1;
            }
            else {
                possible_dups++;
            }
        }
    }
    let last = length - possible_dups;
    for (let i = last; i >= 0; i--) {
        if (arr[i] === 0) {
            arr[i + possible_dups] = 0;
            possible_dups--;
            arr[i + possible_dups] = arr[i];
        }
        else {
            arr[i + possible_dups] = arr[i];
        }
    }
}
duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]);
