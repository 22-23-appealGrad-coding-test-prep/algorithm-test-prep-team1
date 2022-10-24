/**
 * @param {number[]} nums
 * @return {number}
 */
 var minimumOperations = function(nums) {
    //1.무작위 숫자 배열의 수를 모두 0이 될 때까지 뺄셈을 해주는 문제
    //2.음수가 될 시에는 0으로 고정시켜줘야한다.
    //3.뺄셈을 해주는 수 x는 현재 배열에서 존재하는 가장 작은 양수값이다. 이것이 중요함.
    nums.sort(function(a, b)  {
          if(a > b) return 1;
          if(a === b) return 0;
          if(a < b) return -1;
    });
    
    let output = 0;
    let sum = 0;
    
    for(let i= 0; i < nums.length; i++){

        if(!nums[i]){
            continue;
        }
        if(nums[i]){
            if(nums[i] - sum > 0){
                output++;
                sum += nums[i] - sum;
            }
            nums[i] = nums[i] - sum;
        }
    }
    return output;
};