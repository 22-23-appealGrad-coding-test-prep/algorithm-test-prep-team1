class Solution(object):
    def minPathSum(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """

        # a = 0

        # for i in grid[0]:
        #     a += i
        
        # for j in range(1, len(grid)):
        #     k = grid[j][-1]
        #     a += k
        
        # return a

        for i in range(len(grid)):             #행의 개수
            for j in range(len(grid[0])):      #열의 개수
                if i > 0 and j == 0:           #첫번째 행 계산
                    grid[i][j] += grid[i-1][j] #이전의 값을 더하여 저장
                elif i == 0 and j > 0:         #첫번째 열 계산
                    grid[i][j] += grid[i][j-1] #이전의 값을 더하여 저장    
                elif i > 0 and j > 0:          #두번째 행렬부터 계산
                    grid[i][j] = grid[i][j] + min(grid[i-1][j],grid[i][j-1]) #이전의 값을 더하고, 두개 비교 후 작은 값
        
        return grid[-1][-1]