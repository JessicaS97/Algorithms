/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    let map = {}
    return traverse(node)
    function traverse(node) {
        if (!node) return node
        if (!map[node.val]) {
            map[node.val] = new Node(node.val)
            map[node.val].neighbors = node.neighbors.map(n => traverse(n))
        }
        return map[node.val]
    }
};