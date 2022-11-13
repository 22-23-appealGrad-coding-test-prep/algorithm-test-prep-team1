/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function(s, t) {
    //1. 문자열 두 개를 비교하여 s 순열이 t 순열에 포함되는지를 찾는 문제
    //2. t문자열을 반복문으로 돌려 조건을 통해 s순열과 비슷한 형태가 나오게 하면 된다
    //3. 결국 비교를 하여 문자열이 존재할 경우 정수를 증가시켜 s의 길이와 같게 나오면됨.
    let cnt = 0;
    for(let i = 0; i < t.length; i++) {
      if(t[i] === s[cnt]) {
          cnt++
      }  
    }

    return cnt === s.length;
};
