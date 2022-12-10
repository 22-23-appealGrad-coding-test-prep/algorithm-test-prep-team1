/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
 var addSpaces = function (s, spaces) {
  let newStr = "";
  let i = 0;
  let space = 0;
  for (space of spaces) {
      newStr += s.slice(i, space);
      newStr += " ";
      i = space;
  }
  newStr += s.slice(space);

  return newStr;

};