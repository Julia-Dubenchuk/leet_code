function removeElement(nums: number[], val: number): number {
  for (let i = 0; i < nums.length; i++) {
    if (val === nums[i]) {
      nums.splice(i, 1);
      i--;
    }
  }

  return nums.length;
}

removeElement([3, 3], 3);
