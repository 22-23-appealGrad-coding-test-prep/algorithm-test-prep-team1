/**
 * @param {number} n
 * @return {number}
 */
 var countPrimes = function (n) {
  if (n < 3) return 0;

  let numArr = new Array(n).fill(true);

  numArr[0] = false;
  numArr[1] = false;

  for (let i = 2; i < n; i++) {
      if (numArr[i] === true) {
          for (let j = i * i; j <= n; j += i) {
              numArr[j] = false;
          }
      }
  }

  return numArr.reduce((sum, current) => {
      if (current) sum++;
      return sum;
  }, 0);
}

