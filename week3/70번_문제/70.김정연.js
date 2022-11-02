/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    if (n<3) return n;
    let one = 1;
    let two = 2;
    for(let i = 3; i<=n; i++){
        let result = one + two;
        one = two;
        two = result;
    }
    return two;
};