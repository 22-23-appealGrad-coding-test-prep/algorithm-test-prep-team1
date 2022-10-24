class Solution:
    def fib(self, n: int) -> int:
        list = []
        if n < 2:
            return n
        else:
            list.append(0)
            list.append(1)
            for i in range(2, n + 1):
                list.append(list[i - 1] + list[i - 2])
            return list[i]
