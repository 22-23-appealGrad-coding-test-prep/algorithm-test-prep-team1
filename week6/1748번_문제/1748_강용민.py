class Solution(object):
    def sumOfUnique(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        res = 0
        for num in set(nums):
            if nums.count(num) == 1:
                res += num
        return res