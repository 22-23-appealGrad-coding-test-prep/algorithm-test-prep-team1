class Solution(object):
    def isSubsequence(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        for alpha in s:
            if alpha not in t:
                return False
            else:
                t = t[t.index(alpha)+1:]
                
        return True