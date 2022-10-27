class Solution(object):
    def isPalindrome(self, x):
        
        num = str(x)

        if len(num) == 1:
            return True
        for i in range(len(num)/2):
            if len(num)/2 == 0 or num[i] != num[-(i+1)]:
                return False
       
        return True