/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  //n보다 작은 수들 중에서 소수를 구하는 문제
  //반복문을 통해 구해봐야한다.
  //소수는 1과 자기자신으로만 나누어지는 수.
  //시작 인덱스는 1은 고려하지 않는다.
  let count = 0;

  if (n == 0 || n == 1) {
    return 0;
  }

  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
      count++;
    }
  }
  return count;
};

const isPrime = (n) => {
  if (n == 2) {
    return true;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
    return true;
  }
};
