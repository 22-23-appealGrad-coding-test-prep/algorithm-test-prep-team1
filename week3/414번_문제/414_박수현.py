class Solution:
    def thirdMax(self, nums: List[int]) -> int:
        nums = set(nums)
        if len(nums) <= 2:
            return max(nums)
        i = 3
        while i > 1:
            nums.remove(max(nums))
            i -= 1
        return max(nums)
