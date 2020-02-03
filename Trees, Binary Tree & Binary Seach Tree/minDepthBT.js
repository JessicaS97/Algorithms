/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if (!root) return 0
    let queue = [], level = 1
    queue.push(root)
    while (queue.length) {
        let size = queue.length
        for (let i=0; i<size; i++) {
            let cur = queue.shift()
            if (!cur.left && !cur.right) {
                return level
            }
            if (cur.left) queue.push(cur.left)
            if (cur.right) queue.push(cur.right)    
        }
        level++
    }
    return level
};