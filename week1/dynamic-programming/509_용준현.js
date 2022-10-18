/**
 * @param {number} n
 * @return {number}
 * 동적프로그래밍을 이용한 방식
 */
 let memArr = [];
 var fib = function (n) {
     if (n <= 1) memArr[n] = n;
     
     if (memArr[n] === undefined) memArr[n] = fib(n - 1) + fib(n - 2);
 
     return memArr[n];
 };

/**
 * @param {number} n
 * @return {number}
 * 재귀를 이용한 방식
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

