/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if (!n || n < 1) return []
    let res = []
    helper("", res, n, n)
    return res
};

const helper = (cur, res, left, right) => {
    if (left === 0 && right === 0) {
        res.push(cur.slice())
        return
    }
    if (left > 0) {
        helper(cur + "(", res, left - 1, right)
    }
    if (right > left) {
        helper(cur + ")", res, left, right - 1)
    }
}