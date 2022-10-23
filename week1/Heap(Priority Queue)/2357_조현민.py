# 강용민 선생님의 가르침
class Solution1:
    def minimumOperations1(self, nums: List[int]) -> int:
        return len(set(nums) - {0})

# 김현진 선생님의 가르침


class Solution2:
    def minimumOperations2(self, nums: List[int]) -> int:
        nums = list(set(nums))
        nums.sort()
        cnt = 0

        while nums[-1] != 0:
            if 0 in nums:
                nums.pop(0)
            min = nums[0]
            for i in range(len(nums)):
                nums[i] -= min
            cnt += 1
        return cnt
