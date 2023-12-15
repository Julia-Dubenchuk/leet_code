"use strict";
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
    nums1 = nums1.filter((num, i) => i < m);
    nums2 = nums2.filter((num, i) => i < n);
    nums2.forEach((num) => {
        nums1.push(num);
    });
    nums1 = nums1.sort();
}
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
