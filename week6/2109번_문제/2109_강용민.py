class Solution(object):
    def addSpaces(self, s, spaces):
        """
        :type s: str
        :type spaces: List[int]
        :rtype: str
        """
        ans = []
        i = 0
        len_s = len(s)
        while i<len_s:
            if spaces and i == spaces[0]:
                ans.append(" ")
                spaces.pop(0)
            ans.append(s[i])
            i+=1
            
        return ''.join(ans)