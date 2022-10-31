class Solution(object):
    def frequencySort(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        set_nums = set(nums)
        count_nums = {}
        res = []
        for num in set_nums:
            count_nums[num] = nums.count(num)
        
        count_nums = sorted(count_nums.items(),key=lambda item: (item[1],-item[0]))
        
        for num,count in count_nums:
            res+=[num]*count
            
        return res