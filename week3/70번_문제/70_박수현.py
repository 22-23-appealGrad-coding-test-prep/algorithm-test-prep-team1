class Solution:
    def climbStairs(self, n: int) -> int:
        d = [0, 1, 2]

        if n < 3:
            return d[n]

        for i in range(3, n+1):
            d.append(d[i-1] + d[i-2])
        return d[n]
