/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
    //1.반복되지 않는 캐릭터 값을 찾아내는 함수
    //2.캐릭터 값을 찾아내면 그 인덱스만큼 return
    //3.고유값이 없을 시에는 -1을 return해야함.
    //4. indexOf는 배열의 앞에서부터 탐색, lastIndexOf는 배열의 뒤에서부터 탐색
let output = -1;
    
 for (let i = 0; i < s.length; i++){
        // If same...
        if(s.indexOf(s[i]) === s.lastIndexOf(s[i])){
            output = i;
            return output;
        } 
    }
    return output;
};