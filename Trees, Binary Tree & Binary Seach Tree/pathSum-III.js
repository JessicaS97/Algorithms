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
 * @return {number}
 */

// Investigate all possible paths from a node
// root alone, left, right or left + right

let res = 0
var pathSum = function(root, sum) {
    if (!root) return 0
    return helper(root, sum, 0) + pathSum(root.left, sum) + pathSum(root.right, sum)
};

const helper = (root, sum, res) => {
    if (!root) return 0
    let total = res + root.val
    return (total === sum) + helper(root.left, sum, total) + helper(root.right, sum, total)
}
