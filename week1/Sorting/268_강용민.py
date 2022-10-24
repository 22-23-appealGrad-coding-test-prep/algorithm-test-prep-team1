class Solution(object):
    def missingNumber(self, nums):
        nums.sort()
        for i in range(len(nums)):
            if nums[i] != i:
                return i
            
        return nums[-1] + 1
        
print(set(range(11)))