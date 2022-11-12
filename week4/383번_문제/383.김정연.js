/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function(n) {
    let result = [];
     for(let i=0; i<=n; i++)
     {
         if(i<2)
             result.push(i);
         else
             result.push(result[Math.floor(i/2)] + i%2);
     }
     return result;
 };