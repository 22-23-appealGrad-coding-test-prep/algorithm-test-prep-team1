class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        del nums1[m:]

        nums1 += nums2[0:n]
        nums1.sort()
        return nums1