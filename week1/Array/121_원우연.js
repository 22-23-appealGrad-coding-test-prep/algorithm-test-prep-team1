/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    //1. 주식을 사고파는 문제로, 배열안에 있는 인덱스 값이 의미하는 것은 날마다 변동하는 주식의 가격이다.
    //2. 사고파는 주식은 1종류로, 매일 가격이 변동된다.
    //3. 그동안은 단순 for문으로 코드를 짰지만 좀 더 고급스럽게(?) for of 문법을 사용해서 구현해보자.
    //4. 날짜는 index라고 생각하고 풀이를 해야한다.

  let minprice = prices[0]; //최솟값
    let profit = 0;
    for (let i of prices) {
        if (i < minprice) {
            minprice = i;
        } else if (i - minprice > profit) {
            profit = i- minprice;
        }
    }
     return profit
  
};