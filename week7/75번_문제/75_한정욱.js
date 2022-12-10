/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
    
    for(let i=0; i<nums.length;i++){
        for(let j=0; j<i;j++){
            if(nums[j]>nums[i]){
                let temp = nums[j];
                nums[j]= nums[i];
                nums[i]= temp;
            }
        }
    }

    console.log(nums);
};