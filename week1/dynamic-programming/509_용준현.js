/**
 * @param {number} n
 * @return {number}
 */
 var fib = function (n) {
  if (n === 0) { 
      return 0; 
  } else if (n === 1) {
      return 1;
  } else {
      return fib(n - 1) + fib(n - 2);
  }
};

/**
 * @param {number} n
 * @return {number}
 */
 let memArr = [];
 var fib = function (n) {
     if (n <= 1) memArr[n] = n;
     
     if (memArr[n] === undefined) memArr[n] = fib(n - 1) + fib(n - 2);
 
     return memArr[n];
 };