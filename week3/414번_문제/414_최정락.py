class Solution(object):
    def thirdMax(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        count=1
        nums.sort(reverse=True)
        max_num = nums[0] 

        for i in range(1, len(nums)):
            if nums[i] < max_num:
                count += 1
                max_num = nums[i]
            if count == 3:
                return max_num

        return nums[0]