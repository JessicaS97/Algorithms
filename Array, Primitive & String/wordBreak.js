/**
 * Given a non-empty string s and a dictionary wordDict 
 * containing a list of non-empty words, determine if s can 
 * be segmented into a space-separated sequence of one or more dictionary words.
 * 
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let i=0
    let dp = Array(s.length+1)
    dp.fill(false)
    dp[0] = true
    for (let i=1; i<=s.length; i++) {
        for (let j=0; j<i; j++) {
            if(dp[j] && wordDict.indexOf(s.slice(j, i)) !== -1) {
                dp[i] = true
                break
            }
        }
    }
    return dp[s.length]
};