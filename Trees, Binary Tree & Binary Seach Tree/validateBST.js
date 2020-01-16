/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    let stack = [], prev = null
    while (root || stack.length) {
        if (root) {
            stack.push(root)
            root = root.left
        } else {
            root = stack.pop()
            if (prev != null && prev >= root.val) {
                return false
            }
            prev = root.val
            root = root.right
        }
    }
    return true
};