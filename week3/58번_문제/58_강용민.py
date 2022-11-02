class Solution(object):
    def lengthOfLastWord(self, s):
        """
        :type s: str
        :rtype: int
        """
        res = 0
        s=s[::-1]
        for word in s:
            if word == " ":
                if res != 0:
                    return res
                continue
            res+=1
        return res
        