class Solution(object):
    def findContentChildren(self, g, s):
        """
        :type g: List[int]
        :type s: List[int]
        :rtype: int
        """
        s.sort()
        g.sort()
        
        num = 0

        for i in range(len(s)):
            if num >= len(g):
                break
            if s[i] >= g[num]:
                num += 1

        return num