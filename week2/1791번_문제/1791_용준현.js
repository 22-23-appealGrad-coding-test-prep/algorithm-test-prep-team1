/**
 * @param {number[][]} edges
 * @return {number}
 */
 var findCenter = function (edges) {

  let obj = {};
  for (let edge of edges) {
      if (obj[edge[0]]) {
          obj[edge[0]]++;
      } else obj[edge[0]] = 1
      if (obj[edge[1]]) {
          obj[edge[1]]++;
      } else obj[edge[1]] = 1
  }

  // return Number(Object.entries(obj).sort((a, b) => b[1].length - a[1].length)[0][0])
  return Number(Object.entries(obj).find((item) => item[1] > 1)[0])
};