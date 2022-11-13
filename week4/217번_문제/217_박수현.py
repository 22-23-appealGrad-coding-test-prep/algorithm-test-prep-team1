class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        # 방법 1 > 시간이 가장 오래 걸림
        # return len(set(nums)) != len(nums)

        # 방법 2 > 여기 세 가지 중 가장 빠름
        result = dict.fromkeys(nums)
        result = list(result)
        return len(result) != len(nums)

        # 방법 3 > 시간초과
        # result = [] # 중복 제거된 값들이 들어갈 리스트
        # for value in nums:
        #     if value not in result:
        #         result.append(value)
        # return len(result) != len(nums)
