class Solution:
    def sumOfUnique(self, nums: List[int]) -> int:
        li = []
        re = []
        for i in nums:
            if i not in li:
                li.append(i)
            else:
                if i not in re:
                    re.append(i)

        nums = [j for j in nums if j not in re]
        return sum(nums)