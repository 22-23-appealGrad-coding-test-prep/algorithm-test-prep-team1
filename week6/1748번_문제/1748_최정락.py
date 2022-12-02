class Solution(object):
    def sumOfUnique(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        res = 0
        
        for i in set(nums):
            if nums.count(i) == 1:
                res += i

        return res