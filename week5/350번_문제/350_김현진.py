class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        li = []
        inter = list(set(nums1).intersection(set(nums2)))

        for i in range(len(inter)):
            a = nums1.count(inter[i])
            for j in range(a):
                li.append(inter[i])
        return li
