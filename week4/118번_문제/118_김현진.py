class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        ans = [[1]]
        for i in range(1, numRows):
            li = [1]
            for j in range(i-1):
                li.append(ans[i-1][j] + ans[i-1][j+1])
            li.append(1)
            ans.append(li)
        return ans