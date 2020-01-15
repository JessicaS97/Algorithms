/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = new Map(), longest = Math.MIN_VALUE
    for (let i=0, j=0; i<s.length; i++) {
        if (map.has(s.charAt(i))) {
            j = Math.max(map.get(s.charAt(i)) + 1, j)
        }
        map.set(s.charAt(i), i)
        longest = Math.max(longest, i-j+1)
    }
    return longest
};