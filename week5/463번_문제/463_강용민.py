class Solution(object):
    def islandPerimeter(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
        row_len,col_len,visited = len(grid),len(grid[0]),set()
        def dfs(row,col):
            if (row,col) in visited:
                return 0
            if row<0 or row>=row_len or col<0 or col>=col_len or grid[row][col] == 0:
                return 1
            visited.add((row,col))
            return dfs(row+1,col) + dfs(row-1,col) + dfs(row,col+1)+dfs(row, col-1)
        
        for row in range(row_len):
            for col in range(col_len):
                if grid[row][col] == 1:
                    return dfs(row,col)
        return 0