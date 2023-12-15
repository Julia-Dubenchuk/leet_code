function sortArrayByParity(nums: number[]): number[] {
  let length = nums.length;
  const lastIdx = length - 1;

  for (let i = 0; i < length; i++) {
    if (nums[i] % 2 !== 0) {
      const num = nums[i];
      nums.splice(i, 1);
      nums[lastIdx] = num;
      length--;
      i--;
    }
  }

  return nums;
}

sortArrayByParity([3, 1, 2, 4]);
