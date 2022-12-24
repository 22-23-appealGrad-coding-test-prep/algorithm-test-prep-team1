/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let dp = Array.from(Array(n), () => Array(m).fill(1))
    for (let i=1; i<n; i++){
        for(let j=1; j<m; j++){
            dp[i][j] = dp[i-1][j] + dp[i][j-1]; // 테두리 칸 = 갈 수 있는 경우의 수 = 1
        }
    }
    return dp[n-1][m-1];
};