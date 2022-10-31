class Solution:
    def isPalindrome(self, x: int) -> bool:
        a = []
        b = []
        if x < 0:
            return False
        else:
            min = len(str(x)) // 2
            for i in range(min - 1, -1, -1):
                a.append(str(x)[i])
            if len(str(x)) % 2 != 0:
                for j in range(min + 1, len(str(x))):
                    b.append(str(x)[j])
            else:
                for j in range(min, len(str(x))):
                    b.append(str(x)[j])
            if a == b:
                return True
