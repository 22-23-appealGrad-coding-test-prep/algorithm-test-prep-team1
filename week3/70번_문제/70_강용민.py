class Solution(object):
    def climbStairs(self, n):
        """
        :type n: int
        :rtype: int
        """
        dp = [0,1]
        for i in range(2,n+2):
            dp.append(dp[i-2]+dp[i-1])
        return dp[n+1]