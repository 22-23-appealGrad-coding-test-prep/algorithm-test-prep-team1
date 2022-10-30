/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function (s) {
  let uniqueChar = "";

  let obj = {};
  for (let char of s) {
      if (obj[char]) obj[char]++;
      else obj[char] = 1;
  }

  for (let char of Object.keys(obj)) {
      if (obj[char] == 1) {
          uniqueChar = char
          break;
      }
      else uniqueChar = "";
  }

  for (let i = 0; i < s.length; i++) {
      if (s[i] == uniqueChar) return i;
  }
  return -1;
};