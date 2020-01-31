/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return []
    let res = [], stack = [], cur
    stack.push(root)
    while (stack.length) {
        let size = stack.length
        cur = []
        for (let i=0; i<size; i++) {
            root = stack.shift()
            cur.push(root.val)
            if (root.left) stack.push(root.left)
            if (root.right) stack.push(root.right)
        }
        res.push(cur)
    }
    return res
};

