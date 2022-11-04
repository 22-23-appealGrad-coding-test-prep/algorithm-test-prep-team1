/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    //1. 계단을 올라가는 문제로 n을 통해 몇 층이나 올라갈건지 정해준다.
    //2. 계단을 올라가는 방법을 다양하게 나눌 수 있으므로 다양한 수를 생각해야한다.
    //3. 계단값을 출력하는 것이 아닌 계단을 올라가는 방법의 수를 출력해야함
    //4. fibonacci 이용
     let step = [1,2];
    
    for(let i = 2; i <n ; i++){
        step[i] = step[i-1] + step[i-2];
    }
    return step[n-1];
};