/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  //1. 배열 안에 중복값이 존재하는지를 판단하는 문제
  //2. 중복값이 존재하면 true, 없을시 false 반환

  let arr = nums.sort(function (a, b) {
    return a - b;
  });
  let cnt = 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      cnt++;
    }
  }
  if (cnt >= 2) {
    return true;
  } else {
    return false;
  }
};
