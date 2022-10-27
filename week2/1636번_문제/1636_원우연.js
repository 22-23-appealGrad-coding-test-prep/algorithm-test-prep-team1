/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var frequencySort = function(nums) {
    //1. 배열에서 중복된 요소를 찾아서 빈도가 적은 순으로 정렬하는 문제
    //2. 중복된 요소를 먼저 찾고, 요소들을 객체에 다시 저장하여 정렬해야한다.
    //3. return할 때 output을 정의하였는데, 호이스팅을 신경써야 제대로 정렬이 된다.
    let freq = {};
    let output = 0;

    for(let i of nums){
        freq[i] = (freq[i] || 0) + 1;
    }
    output = nums.sort((a, b) => freq[a] === freq[b] ? b - a : freq[a] - freq[b]);
    return output;

};