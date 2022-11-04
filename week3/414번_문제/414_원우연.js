/**
 * @param {number[]} nums
 * @return {number}
 */
 var thirdMax = function(nums) {
    //세번째로 작은 최대값을 반환하는 문제
    //세번째 값이 존재하지 않을 경우에는 가장 큰 값을 반환
    //카운팅을 통해 문제를 풀고, 내림차순 정렬로 만들어줌
    let arr = nums.sort(function(a, b)  {
        return b - a;
    });
    let min = arr[0];
    let count = 1;
    let output = 0;
    
    for(let i = 1; i < arr.length; ++i){
        if(arr[i] != min){
            count += 1;
            min = arr[i];
        }
        
        if(count == 3){
            return arr[i];
        } 
    }
      return arr[0];
};