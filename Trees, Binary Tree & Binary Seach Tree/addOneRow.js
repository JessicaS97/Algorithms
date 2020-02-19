/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
var addOneRow = function(root, v, d) {
    if (d === 1) {
       let node = new TreeNode(v)
       node.left = root
       return node
    }
    let level = 1, pq = []
    pq.push(root) 
    while (pq.length) {
        let size = pq.length
        for (let i=0; i<size; i++) {
            let node = pq.shift()
            if (node.left) {
                pq.push(node.left)
            }
            if (node.right) {
                pq.push(node.right)
            }
            if (level + 1 === d) {
                let tempLeft = node.left
                let tempRight = node.right
                node.left = new TreeNode(v)
                node.right = new TreeNode(v)
                node.left.left = tempLeft
                node.right.right = tempRight
            }
        }
        level++
    }
    return root
};