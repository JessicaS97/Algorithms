/**
 * Given n, how many structurally unique BST's (binary search trees) 
 * that store values 1 ... n?
 * 
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    let dp = []
    dp[0] = 1
    dp[1] = 1
    for (let i=2; i<=n; i++) {
        for (let j=0; j<i; j++) {
            dp[i] = dp[i-1] * dp[n-j]
        }
    }
    return dp[n]
};