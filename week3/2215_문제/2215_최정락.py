class Solution(object):
    def findDifference(self, nums1, nums2):

        list1 = []
        list2 = []

        for i in nums1:
            if i not in nums2 and i not in list1:
                list1.append(i)
        
        for j in nums2:
            if j not in nums1 and i not in list2:
                list2.append(j)

        return [list1, list2]