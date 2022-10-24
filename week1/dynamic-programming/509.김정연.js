/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
    if(n < 2) 
        return n;
     else
         return fib(n-1) + fib(n-2);
 };

 /*
 -처음 짠 코드 : Runtime Error-
var fib = function(n) {
    let first_fib = 1;
    let second_fib = 1;
     
     if(n === first_fib){
         return first_fib;
     }
     if(n === second_fib){
         return second_fib;
     }
     else
         return fib(n-1) + fib(n-2);
 };
 */