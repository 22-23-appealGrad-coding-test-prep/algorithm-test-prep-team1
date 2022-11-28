/**
 * @param {number[][]} grid
 * @return {number}
 */
 var minPathSum = function (grid) {
  // 1차 행 계산
  for (let i = 1; i < grid[0].length; i++) {
      grid[0][i] += grid[0][i - 1];
  }

  // 1차 열 계산
  for (let i = 1; i < grid.length; i++) {
      grid[i][0] += grid[i - 1][0];
  }

  // 2차 비교 계산

  for (let i = 1; i < grid.length; i++) {
      for (let j = 1; j < grid[0].length; j++) {
          grid[i][j] = Math.min(grid[i][j] + grid[i][j - 1], grid[i][j] + grid[i - 1][j])
      }
  }

  return grid[grid.length - 1][grid[0].length - 1]

};