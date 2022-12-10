import java.util.Arrays;

class Solution {
    public int sumOfUnique(int[] nums) {
        Arrays.sort(nums);
        int max = nums[nums.length - 1];
        int[] counts = new int[max+1];
        int sum = 0;
        
        for(int i=0; i<nums.length; i++){
            counts[nums[i]]++;
        }
        
        for(int num=0;num<= max; num++){
            if (counts[num] == 1){
                sum+=num;
            }
        }
        return sum;
    }
}
