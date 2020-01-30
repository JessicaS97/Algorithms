/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let res = 0, idx = 0, r = 0, l = 0
    while (idx < s.length) {
        if (s.charAt(idx) === 'R') r++
        else {
            l++
        }
        if (r === l) {
            res++
        }
        idx++
    }
    return res
};