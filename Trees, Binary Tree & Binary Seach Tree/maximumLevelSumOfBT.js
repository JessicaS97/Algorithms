/**
 * 
 * Given the root of a binary tree, the level of its 
 * root is 1, the level of its children is 2, and 
 * so on.
 * 
 * Return the smallest level X such that the sum of all the values of nodes at level X is maximal.
 * 
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
var maxLevelSum = function(root) {
    let queue = [] , res = [Number.MAX_SAFE_INTEGER, Number.MIN_VALUE], level = 0
    queue.push(root)
    while (queue.length) {
        level++
        let size = queue.length
        let sum = 0
        for (let i=0; i<size; i++) {
            let node = queue.shift()
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
            sum += node.val
        }
        if (res[1] < sum) res[0] = level, res[1] = sum
    }
    return res[0]
};