from typing import List

class Solution:
    def frequencySort(self, nums: List[int]) -> List[int]:
        list_to_dict = {}
        for i in nums:
            list_to_dict[i] = nums.count(i)
        sorted_dict = dict(sorted(list_to_dict.items(), key = lambda item: (item[1], -item[0])))
        
        sorted_list = list(sorted_dict.keys())
        result_list = []
        for a in sorted_list:
            for i in range(0, sorted_dict[a]):
                result_list.append(a)
        return result_list

nums = list(map(int, input()))
print(nums)

solution = Solution()

solution.frequencySort(nums)