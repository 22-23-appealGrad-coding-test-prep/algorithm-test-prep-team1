class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        liS =list(s)
        liT = list(t)
        if len(liS) == 0:
            return True
        for _ in range(len(t)):
            if liS[-1] == liT[-1]:
                liS.pop()
                liT.pop()
                if not liS:
                    return True
            else:
                liT.pop()