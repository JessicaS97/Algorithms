/**
 * Given a m x n grid filled with non-negative numbers, find a path from top 
 * left to bottom right which minimizes the sum of all numbers along its path.
 * Note: You can only move either down or right at any point in time.
 * 
 * Runtime: 0(m * n)
 * 
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let dp = Array(grid.length).fill().map(() => Array(grid[0].length))
    dp[0][0] = grid[0][0]
    for (let i=1; i<grid.length; i++) {
        dp[i][0] = dp[i-1][0] + grid[i][0]
    }
    for (let j=1; j<grid[0].length; j++) {
        dp[0][j] = dp[0][j-1] + grid[0][j]
    }
    for (let r=1; r<grid.length; r++) {
        for (let c=1; c<grid[0].length; c++) {
            dp[r][c] = Math.min(grid[r][c] + dp[r-1][c], grid[r][c] + dp[r][c-1])
        }
    }
    return dp[grid.length - 1][grid[0].length - 1]
};