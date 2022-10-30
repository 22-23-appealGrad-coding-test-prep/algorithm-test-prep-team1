class Solution:
    def frequencySort(self, nums: List[int]) -> List[int]:
        ans = Counter(nums)
        nums.sort(key=lambda x: (ans[x], -x))
        return nums
