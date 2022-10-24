/**
 * @param {number[]} nums
 * @return {number}
 */

var missingNumber = function(nums) {
      
    const n = nums.length; 
    let temp;
    let i, j;
if(n  === 1)
        {
           if(nums[0] !== 0)
               {
                    return 0 ;
               }
           return (nums[n-1]+1);
        }
else{
   
            for(i = n-1; i> 0; i--){
            for(j = 0; j< i ; j++)
                {
            if (nums[j] > nums[j+1])
            {
                temp = nums[j];
                nums[j] = nums[j+1];
                nums[j+1] = temp;
            }
                }
            }
   if(nums[0] !== 0)
       {
           return 0;
       }
          
    else{
    for(i = 0; i< n-1;i++)
        {
        if ((nums[i]+1) !== nums[i+1])
        {
            return (nums[i]+1);

        }
       // else if((nums[i]+1) === nums[i+1])
       //it is sorted and number is already in order
        else if((nums[n-1]) === (nums[i]+1))
            {
                return(nums[i+1]+1);
            }
        }  
    } 
}
};