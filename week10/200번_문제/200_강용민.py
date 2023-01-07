class Solution(object):
    def numIslands(self, grid):
        """
        :type grid: List[List[str]]
        :rtype: int
        """
        sumed = 0
        for row in range(len(grid)):
            for col in range(len(grid[0])):
                sumed += self.find_islands(grid, row, col)
        return sumed
        
    def find_islands(self, grid,i, j):
        if 0 <= i < len(grid) and 0 <= j < len(grid[0]) and grid[i][j] == "1":
            grid[i][j] = "0"

            self.find_islands(grid, i + 1, j)
            self.find_islands(grid, i, j-1)
            self.find_islands(grid, i-1, j)
            self.find_islands(grid, i, j + 1)
            return 1
        return 0