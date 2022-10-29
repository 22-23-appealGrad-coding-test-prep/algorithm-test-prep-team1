/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    //1. palindrome: 회문이라는 뜻으로, 역순으로 읽어도 똑같이 읽히는 단어를 의미
    //2. 여기서 주어지는 x는 정수형이기 때문에 String으로 먼저 바꾸는 과정이 필요
    //3. 자바스크립트의 split,reverse,join 함수를 이용하여 역순 구현
    //4. 역정렬이 끝나면 parseInt함수로 원식과 비교하여 boolean 반환
    let num = x.toString();
    const reverse = num.split('').reverse().join('');
    if(x === parseInt(reverse)){
        return true;
    }
    else{
        return false;
    }
};