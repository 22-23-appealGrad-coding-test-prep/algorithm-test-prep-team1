class Solution:
    def climbStairs(self, n: int) -> int:
        ans = []
        d = [0] * 3000
        d[1] = 1
        d[2] = 2
        if n == 1:
            return 1
        elif n == 2:
            return 2
        else:
            for i in range(3, n+1):
                d[i] = d[i-1] + d[i-2]
                ans.append(d[i])
            return ans.pop()