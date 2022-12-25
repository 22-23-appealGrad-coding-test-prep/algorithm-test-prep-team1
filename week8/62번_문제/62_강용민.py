class Solution(object):
    def uniquePaths(self, m, n):
        """
        :type m: int
        :type n: int
        :rtype: int
        """
        dp = [[1 for _ in range(n)]]
        for i in range(1,m):
            temp = [1]
            for j in range(1,n):
                temp.append(dp[i-1][j]+ temp[-1])
            dp.append(temp)
        return dp[-1][-1]
                