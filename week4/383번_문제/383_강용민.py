class Solution(object):
    def countBits(self, n):
        """
        :type n: int
        :rtype: List[int]
        """
        ans = [0]
        for i in range(1,n+1):
            temp = 0
            while i>0:
                if i%2 == 1:
                    temp += 1
                i /= 2

            ans.append(temp)
        return ans