class Solution:
    def thirdMax(self, nums: List[int]) -> int:
        ans = list(set(nums))
        ans.sort(reverse=True)
        if len(ans) >=3:
            return ans[2]
        else:
            return max(ans)