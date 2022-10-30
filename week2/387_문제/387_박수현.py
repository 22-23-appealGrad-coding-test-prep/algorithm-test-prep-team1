class Solution:
    def firstUniqChar(self, s: str) -> int:
        origin_s = s
        i=0
        while s != "":
            if s[i] not in s[i+1:]:
                return origin_s.find(s[i])
            else:
                s = s.replace(s[i], "")
                print("replace: ",s)
        return -1