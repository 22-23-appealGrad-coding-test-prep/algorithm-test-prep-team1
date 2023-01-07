class Solution(object):
    def maxSubArray(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        return reduce(lambda (g,l),x: (max(g,l+x),max(l+x,0)), nums, (None,0))[0]