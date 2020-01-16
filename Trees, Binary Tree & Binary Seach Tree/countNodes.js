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
var countNodes = function(root) {
    let count = 0, height = 0
    let pq = []
    if (!root) return count
    pq.push(root)
    while (pq.length) {
        let size = pq.length
        count += size
        for (let i=0; i<size; i++) {
            let node = pq.shift()
            if (node.left) pq.push(node.left)
            if (node.right) pq.push(node.right)
        }
    }
    return count
};