class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        big = max(prices)
        ans = 0

        for i in prices:
            if i>=big:
                ans += i-big
            big = i
        return ans