/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function (n) {
  let ans = [];

  for (let i = 0; i <= n; i++) {
      let numToBit = i.toString(2);
      ans.push(numToBit.split("").filter((item) => item == "1").length);
  }

  return ans;
};