/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    let xstring = x.toString().split('').reverse().join('');
    
    if(xstring == x){
        return true;
    }
    else
        return false;
};