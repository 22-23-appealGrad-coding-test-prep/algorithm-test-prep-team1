/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    //.trim 은 앞뒤 공백 제거
        s = s.trim().split(" ");
        return s[s.length - 1].length;
  
};