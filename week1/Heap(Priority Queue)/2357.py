class Solution:
    def minimumOperations(self, nums: List[int]) -> int:
        nums.sort()
        count = 0

        while nums[len(nums) - 1] != 0:
            if 0 in nums:
                remove_set = {0}
                nums = [i for i in nums if i not in remove_set]  # 리스트 컴프리헨션
                minValue = nums[0]
                for i in range(len(nums)):
                    nums[i] = nums[i] - minValue
            else:
                minValue = nums[0]
                for i in range(len(nums)):
                    nums[i] = nums[i] - minValue
            count += 1
        return count
