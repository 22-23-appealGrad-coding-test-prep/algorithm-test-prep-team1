/**
 * @param {number[]} nums
 * @return {number}
 */
 var sumOfUnique = function (nums) {
  const map = new Map();
  for (let num of nums) {
      if (map.get(num)) map.set(num, (map.get(num) + 1))
      else map.set(num, 1);
  }
  return Array.
      from(map).
      filter((item) => item[1] == 1).
      reduce((sum, current) => sum + current[0], 0);
};