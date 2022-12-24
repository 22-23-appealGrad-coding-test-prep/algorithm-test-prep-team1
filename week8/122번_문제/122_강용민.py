class Solution(object):
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        profit = 0
        start = max(prices)

        for price in prices:
            if start < price:
                profit += price-start
            start = price
            
        return profit