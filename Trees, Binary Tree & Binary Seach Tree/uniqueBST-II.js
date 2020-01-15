/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    let res = []
    if (!n) return res
    return helper(1, n)
};

const helper = (start, end) => {
    let res = []
    if (start > end) res.push(null)
    for(let i=start; i<=end; i++) {
        let left = helper(start, i-1)
        let right = helper(i+1, end)
        for (let l of left) {
            for (let r of right) {
                let root = new TreeNode(i)
                root.left = l
                root.right = r
                res.push(root)
            }
        }
    }
    return res
}