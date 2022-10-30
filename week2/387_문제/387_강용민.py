class Solution(object):
    def firstUniqChar(self, s):
        """
        :type s: str
        :rtype: int
        """
        count_s = defaultdict(int)
        
        for c in s:
            count_s[c] += 1
        
        for i in range(len(s)):
            if count_s[s[i]] == 1:
                return i
        return -1