/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    //문자열의 마지막 단어의 길이를 세는 문제다
    //좌우 공백이 포함된 경우도 존재하므로 고려해야한다.
    //자바스크립트에 존재하는 함수 및 정규표현식을 이용하여 구현하였다.
    
    let result = s.replace(/^ +/,'');
    let result2 = result.replace(/ +$/,'').split(" ");
    let lastIndex = 0;

    for(let i = 0; i < result2.length; i++){
        lastIndex = result2[i].length;
    }
    return lastIndex;
};
