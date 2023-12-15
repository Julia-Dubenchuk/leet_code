"use strict";
function removeDuplicates(nums) {
    let length = nums.length;
    for (let i = 1; i < length; i++) {
        if (nums[i] === nums[i - 1]) {
            nums.splice(i, 1);
            i--;
            length--;
        }
    }
    return nums.length;
}
removeDuplicates([1, 1, 2]);
removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
