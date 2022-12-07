/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  // nums.sort(function(a, b)  {
  //   if(a > b) return 1;
  //   if(a === b) return 0;
  //   if(a < b) return -1;
  // });
  //선택정렬 이용하여 구현
  for (let i = 0; i < nums.length; i++) {
    let temp = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[temp] > nums[j]) {
        temp = j;
      }
    }
    if (temp !== i) {
      [nums[i], nums[temp]] = [nums[temp], nums[i]];
    }
  }
};
