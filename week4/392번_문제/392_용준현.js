/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function (s, t) {
  let idxArr = [];

  let newS = "";

  let pos = 0;

  for (let char of s) {
      idx = t.indexOf(char, pos)
      idxArr.push(idx);
      pos = idx + 1;
  }

  for (let idx of idxArr.sort((a, b) => a - b)) {
      newS += t[idx];
  }

  if (s == newS) return true;
  else return false;


};