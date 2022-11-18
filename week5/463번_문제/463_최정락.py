class Solution(object):
    def islandPerimeter(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
        # n = 0

        # for i in range(len(grid)):
        #     for j in range(len(grid[i])):
        #         if grid[i][j] == 1:
        #             n += 4
        #         if (i > 0 and grid[i-1][j] == 1) or (j > 0 and grid[i][j-1] == 1):
        #             n -= 2

        # return n
        
        n = 0
        
        for i in range(len(grid)):
            for j in range(len(grid[i])):
                if grid[i][j] == 1:
                    n += 4
                    if i > 0 and grid[i-1][j] == 1:
                        n -= 2
                    if j > 0 and grid[i][j-1] == 1:
                        n -= 2

        return n