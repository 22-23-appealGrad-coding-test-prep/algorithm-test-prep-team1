class Solution(object):
    def sortColors(self, nums):
        """
        :type nums: List[int]
        :rtype: None Do not return anything, modify nums in-place instead.
        """
        # a = []
        # b = []
        # c = []

        # for i in nums:
        #     if i==0:
        #         a.append(i)
        #     elif i==1:
        #         b.append(i)
        #     else:
        #         c.append(i)
        
        # for j in range(len(a)):
        #     nums[j] = a[j]
        # for k in range(len(b)):
        #     nums[len(a)+k] = b[k]
        # for l in range(len(c)):
        #     nums[len(a)+len(b)+l] = c[l]


        n = 0

        for i in range(3):   #0, 1, 2의 값이 들어있음
            for j in range(len(nums)):
                if nums[j] == i: 
                    nums[n], nums[j] = nums[j], nums[n] #n번째 위치와 j번째 위치의 값을 바꿈
                    n += 1