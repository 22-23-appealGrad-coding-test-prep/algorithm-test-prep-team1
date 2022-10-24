/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums.sort(function(a,b){
        if(a > b) return 1;
        if(a === b) return 0;
        if(a < b) return -1;
    });
    
    const missingNum = nums.length;
    
    for(let i = 0; i < nums.length; i++){
        if( i != nums[i]){
            return i;
        }
    }
    return missingNum;
};