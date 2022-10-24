/**
 * 등차 합 공식 사용해서 수학적으로 풀이
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function (nums) {
  let sum1 = (nums.length * (nums.length + 1)) / 2
  let sum2 = 0;
  
  for (let i = 0; i < nums.length; i++){
      sum2 += nums[i];
  }

  return sum1 - sum2;
};

/**
 * 배열 정렬 메소드를 사용해서 풀이
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function (nums) {
  let sortedNums = nums.sort((a, b) => a - b);
  for (let i = 0; i <= nums.length; i++) {
      if (sortedNums[i] !== i) return i;
  }
};