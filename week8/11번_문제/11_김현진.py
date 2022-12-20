class Solution:
    def maxArea(self, height: List[int]) -> int:
        sta = 0
        fin = len(height) - 1
        ans = []
        while (fin - sta > 0):
            ans.append((fin - sta) * min(height[sta], height[fin]))
            if height[sta] > height[fin]:
                fin -= 1
            else:
                sta += 1
        return max(ans)

        # Time Limit Exceeded
        # ans = []
        # for i in range(len(height)):
        #     for j in range(i + 1, len(height)):
        #         ans.append(min(height[i], height[j]) * (j - i))
        # return max(ans)

