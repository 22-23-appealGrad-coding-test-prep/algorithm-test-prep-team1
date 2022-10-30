from collections import Counter

class Solution(object): 
    def firstUniqChar(self, s):
        
        count = Counter(s)

        for i in range(len(s)):
            if count[s[i]] == 1:
                return i
        
        return -1

        #처음 코드가 너무 느려서 다시 풀었음
        # a = 0
        # for i in s:
        #     num = s.count(i)
        #     if num == 1:
        #         return a
        #     a += 1
        # return -1