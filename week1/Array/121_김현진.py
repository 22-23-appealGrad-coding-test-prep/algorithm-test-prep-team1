class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        first = prices[0]
        answer = 0
        for i in range(len(prices)):
            profit = prices[i] - first
            if profit > answer:
                answer = profit
            if first > prices[i]:
                first = prices[i]
        return answer