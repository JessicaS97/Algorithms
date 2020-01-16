/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    let res = []
    helper(root, sum, res, [])
    return res
};

const helper = (root, sum, res, cur) => {
    if (!root) return
    cur.push(root.val)
    if (!root.left && !root.right && sum === root.val) {
        res.push(cur.slice())
    } else {
        helper(root.left, sum-root.val, res, cur)
        helper(root.right, sum - root.val, res, cur)
    }
    cur.pop()
}

