/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function (x) {
  let reversedX = String(x).split("").reverse().join("");
  if (String(x) == reversedX) return true;
  else return false;
};