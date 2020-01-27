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
var zigzagLevelOrder = function(root) {
    let res = [], pq = [], right = false
    if (!root) return res
    pq.push(root)
    while (pq.length) {
        let size = pq.length
        let cur = []
        for (let i=0; i<size; i++) {
            let node = pq.shift()
            if (!right) {
                cur.push(node.val)
            } else {
                cur.unshift(node.val)
            }
            if (node.left) pq.push(node.left)
            if (node.right) pq.push(node.right)
        }
        res.push(cur)
        right = !right
    }
    return res
};