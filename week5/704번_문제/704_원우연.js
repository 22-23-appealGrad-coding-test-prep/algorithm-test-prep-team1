/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  //1. 단순반복문
  //2. for in 이용
  //3. 1번이 더 빠름.
  for (let i = 0; i < nums.length; i++) {
    if (target === nums[i]) {
      return i;
    }
  }
  // for(let i in nums){
  //     if(nums[i] === target){
  //         return i;
  //     }
  // }

  return -1;
};
