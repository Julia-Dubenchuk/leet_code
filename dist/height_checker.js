"use strict";
function heightChecker(heights) {
    const length = heights.length;
    let count = 0;
    const sortHeights = [...heights].sort((a, b) => a - b);
    if (length < 2) {
        return 0;
    }
    for (let i = 0; i < length; i++) {
        if (heights[i] !== sortHeights[i]) {
            count++;
        }
    }
    return count;
}
console.log(heightChecker([1, 1, 4, 2, 1, 3]));
