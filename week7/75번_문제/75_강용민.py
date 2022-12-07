class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        #bubble sort

        # for i in range(1,len(nums)):
        #     j = i-1
        #     while nums[i] < nums[j] and j>=0:
        #         nums[j],nums[i] = nums[i], nums[j]
        #         i -= 1
        #         j -= 1


        #quick sort
        def sort(low, high):
            if high <= low:
                return

            mid = partition(low, high)
            sort(low, mid - 1)
            sort(mid, high)

        def partition(low, high):
            pivot = nums[(low + high) // 2]
            while low <= high:
                while nums[low] < pivot:
                    low += 1
                while nums[high] > pivot:
                    high -= 1
                if low <= high:
                    nums[low], nums[high] = nums[high], nums[low]
                    low, high = low + 1, high - 1
            return low

        sort(0, len(nums) - 1)