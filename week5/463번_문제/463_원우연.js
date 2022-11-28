/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  //1. 땅의 변 갯수를 세는 문제
  //2. 땅은 1, 물은 0으로 표기해서 2차원 배열로 표현
  //3. 잘모르겠어서 솔루션 봤습니다... 코드 참고하실분만 보세요
  let perimeter = 0;
  let row = grid.length;
  let col = grid[0].length;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        if (i === 0 || (i > 0 && grid[i - 1][j] === 0)) perimeter++;
        if (i === row - 1 || (i < row - 1 && grid[i + 1][j] === 0)) perimeter++;
        if (j === 0 || (j > 0 && grid[i][j - 1] === 0)) perimeter++;
        if (j === col - 1 || (j < col && grid[i][j + 1] === 0)) perimeter++;
      }
    }
  }

  return perimeter;
};
