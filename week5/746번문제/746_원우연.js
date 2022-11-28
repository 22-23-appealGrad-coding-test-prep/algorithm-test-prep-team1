/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  //1. 계단을 짝수,홀수로 오르는 문제
  //2. 어떻게 오를지는 선택 가능하며, 최소 비용으로 올라야한다.
  //3. Math.min은 두 매개변수중 최솟값을 골라주는 함수

  let even = cost[0]; //짝수 오름의 경우
  let odd = cost[1]; //홀수의 경우

  for (let i = 2; i < cost.length; i++) {
    if (i % 2 !== 0) {
      odd = Math.min(odd + cost[i], even + cost[i]);
    } else {
      even = Math.min(even + cost[i], odd + cost[i]);
    }
  }
  return Math.min(odd, even);
};
