class Solution:
    def countPrimes(self, n: int) -> int:
        array = [True for i in range(n + 1)]
        cnt = 0

        for i in range(2, int(math.sqrt(n)) + 1):
            if array[i] == True:
                array[i * i:n:i] = [False] * len(array[i * i:n:i])

        for i in range(2, n):
            if array[i]:
                cnt += 1
        return cnt
