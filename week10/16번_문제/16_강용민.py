class Solution(object):
    def threeSumClosest(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        nums.sort()
        answer = nums[0]+nums[1]+nums[2]

        for i in range(len(nums)-2):
            j,k = i+1, len(nums)-1

            while j < k:
                sumed = nums[i]+nums[j]+nums[k]
                if sumed == target:
                    return sumed
                elif abs(sumed - target) < abs(answer - target):
                    answer = sumed

                if target < sumed:
                    k -=1
                else:
                    j += 1
    
        return answer