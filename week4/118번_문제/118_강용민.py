class Solution(object):
    def generate(self, numRows):
        """
        :type numRows: int
        :rtype: List[List[int]]
        """
        dp=[[1],[1,1]]
        if numRows < 2 :
            return [dp[numRows-1]]
        
        for i in range(2,numRows):
            temp = [1]*(i+1)
            for j in range(1,i):
                temp[j] = dp[i-1][j-1]+dp[i-1][j]
            dp.append(temp)
        return dp
        