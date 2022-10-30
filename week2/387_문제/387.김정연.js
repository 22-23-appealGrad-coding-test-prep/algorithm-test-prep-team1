/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
    for(let i=0; i<s.length; i++){
        if(s.indexOf(s[i]) === s.lastindexOf(s[i])){
            return i;
        }
    }
    return -1;
};