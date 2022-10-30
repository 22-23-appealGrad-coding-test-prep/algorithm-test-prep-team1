class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        # x = str(x)
        # for i in range(1,len(x)//2+1):
        #     if x[i-1] != x[-i]:
        #         return False
        # return True

        # 리팩토링
        return str(x) == str(x)[::-1]