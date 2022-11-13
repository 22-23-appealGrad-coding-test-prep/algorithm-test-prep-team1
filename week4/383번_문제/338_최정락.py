class Solution(object):
    def countBits(self, n):
        """
        :type n: int
        :rtype: List[int]
        """
        list = [0]*(n+1)

        for i in range(n+1):
            if (i & 1) == 1:                 # i와 1의 and 비트연산
                list[i] = list[(i//2)] + 1   # i의 몫 + 1의 값
            else:
                list[i] = list[(i//2)]       # i의 몫의 값

        return list