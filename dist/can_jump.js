"use strict";
function canJump(nums) {
    const l = nums.length;
    let prevIdx = 0;
    //nums[i] ? nums[i] + i : i - 1
    for (let i = 0; i < l; i += nums[i]) {
        if (nums[i] >= l - 1) {
            return true;
        }
        if (nums[i] === 0 && i > 0) {
            //   i--;
            // let k = nums[i - 1] + i - 1;
            for (let j = i - 1; j > 0; j--) {
                if (nums[nums[j] + j] === 0) {
                    continue;
                }
                i = nums[j] + j;
            }
            if (nums[i] === 0) {
                return false;
            }
        }
        prevIdx = i;
    }
    return prevIdx > l;
}
console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));
console.log(canJump([1, 2, 3])); //true;
console.log(canJump([2, 5, 0, 0])); // true;
console.log(canJump([3, 0, 8, 2, 0, 0, 1])); // true;
