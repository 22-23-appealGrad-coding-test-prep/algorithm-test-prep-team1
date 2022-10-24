import collections
import sys

class Solution:
    dp = collections.defaultdict(int)

    def fib(self, n: int) -> int:
        if n == 1 or n==0:
            return n

        if self.dp[n]:
            return self.dp[n]
        
        self.dp[n] = self.fib(n-1) + self.fib(n-2)
        return self.dp[n]

n = int(sys.stdin.readline())
print(Solution().fib(n))