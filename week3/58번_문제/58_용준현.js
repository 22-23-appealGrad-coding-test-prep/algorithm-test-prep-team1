/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function (s) {
  return s.split(" ").filter((item) => item.length != 0).at(-1).length
};