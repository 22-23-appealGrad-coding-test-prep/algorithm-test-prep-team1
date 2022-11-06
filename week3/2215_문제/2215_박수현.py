class Solution:
    def findDifference(self, nums1: List[int], nums2: List[int]) -> List[List[int]]:
        l = []
        
        complement1 = list(set(nums1) - set(nums2))
        l.append(complement1)

        complement2 = list(set(nums2) - set(nums1))
        l.append(complement2)

        return l
