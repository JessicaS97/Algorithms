/**
 * Given an array arr of positive integers, consider all binary trees such that:
 * Each node has either 0 or 2 children;
 * The values of arr correspond to the values of each leaf in an in-order traversal of the tree.  (Recall that a node is a leaf if and only if it has 0 children.)
 * The value of each non-leaf node is equal to the product of the largest leaf value in its left and right subtree respectively.
 * Among all possible binary trees considered, return the smallest possible sum of the values of each non-leaf node.  It is guaranteed this sum fits into a 32-bit integer.
 * 
 * @param {number[]} arr
 * @return {number}
 */
var mctFromLeafValues = function(arr) {
    let res = 0
    while (arr.length > 1) {
        let min = Math.min(...arr)
        let min_idx = arr.indexOf(min)
        if (0 < min_idx && min_idx < arr.length - 1) {
            res += Math.min(arr[min_idx - 1], arr[min_idx + 1]) * min
        } else {
            res += (min_idx === 0 ? arr[min_idx + 1] : arr[min_idx - 1]) * min
        }
        arr.splice(min_idx, 1)
    }
    return res
};