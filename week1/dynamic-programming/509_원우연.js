/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
    //1.피보나치 수열은 재귀수열로 첫째 및 둘째 항은 1이고 그 뒤의 모든 항은 바로 앞 두 항의 합으로 이어지는 수열.
    //2.문제에서 주어지는 피보나치 공식은 f(n) = f(n-1) + f(n-2)이고 n > 1이 전제조건
    //3.문제에서 주어지는 n값은 기본으로 2이고, 예상 출력값은 1이다.
    let fibo = [];
    let output = 0;
    
    for(let i = 0; i <= n; i++){
         if(n == 0){
            output = 0;
         }
         else if(n == 1){
            output = 1;
         }
         else {
            fibo[0] = 0;
            fibo[1] = 1;
            fibo[i] = fibo[i-1] + fibo[i-2];
            output = fibo[i];  
         }
    }
    return output;
};