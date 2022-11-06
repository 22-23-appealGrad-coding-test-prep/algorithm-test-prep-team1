/**
 * @param {number[]} nums
 * @return {number}
 */
 var thirdMax = function(nums) {
  const set = new Set(nums.sort((a, b) => b - a));

  const newArr = Array.from(set);

  if (newArr[2] !== undefined) return newArr[2];
  else return newArr[0]
};