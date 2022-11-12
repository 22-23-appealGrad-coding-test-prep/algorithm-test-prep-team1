class Solution:
    def countBits(self, n: int) -> List[int]:
        ans = []
        for i in range(n+1):
            ele = format(i, 'b')
            N = [int(i) for i in str(ele)]
            ans.append(sum(N))
        return ans
