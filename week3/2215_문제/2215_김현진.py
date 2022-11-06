class Solution:
    def findDifference(self, nums1: List[int], nums2: List[int]) -> List[List[int]]:
        li = []
        for one in nums1:
            for two in nums2:
                if one == two:
                    li.append(one)

        for detail in li:
            for one in nums1:
                if detail == one:
                    nums1.remove(detail)
            for two in nums2:
                if detail == two:
                    nums2.remove(detail)
        return (list(set(nums1)), list(set(nums2)))