/**
 *  A message containing letters from A-Z is
    being encoded to numbers using the following mapping:
        'A' -> 1
        'B' -> 2
        ...
        'Z' -> 26
    Given a non-empty string containing only digits, 
    determine the total number of ways to decode it.
 *
 *
 * @param {string} s
 * @return {number}
 */

var numDecodings = function(s) {
    let dp = []
    dp[0] = 1
    dp[1] = s.charAt(0) === '0' ? 0 : 1
    for (let i=2; i<=s.length; i++) {
        let one = parseInt(s.slice(i-1, i))
        let two = parseInt(s.slice(i-2, i))
        dp[i] = 0 
        if (one >= 1) dp[i] += dp[i-1]
        if (two >= 10 && two <= 26) dp[i] += dp[i-2]
    }
    return dp[s.length]
};