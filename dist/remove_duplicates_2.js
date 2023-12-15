"use strict";
function removeDuplicates2(nums) {
    let length = nums.length;
    for (let i = 2; i < length; i++) {
        if (nums[i] === nums[i - 2]) {
            nums.splice(i, 1);
            i--;
            length--;
        }
    }
    return nums.length;
}
console.log(removeDuplicates2([1, 1, 2])); //3
console.log(removeDuplicates2([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); //9
