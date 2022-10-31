from collections import Counter

class Solution(object):
    def frequencySort(self, nums):
        
        #해결법을 찾지 못하여 lambda를 검색하여 풀었음
        
        count = Counter(nums) #숫자 빈도수 세기
        nums.sort(reverse = True) # 숫자 크기순으로 정렬
        nums.sort(key = lambda x:count[x]) #크기 및 빈도수 순으로 정렬

        return nums