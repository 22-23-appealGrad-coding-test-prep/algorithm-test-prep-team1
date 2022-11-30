/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) {
      continue;
    }
    sum += nums[i];
  }
  return sum;
};
