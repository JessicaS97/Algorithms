/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    return computeSum(l1, l2, 0)
};

const computeSum = (l1, l2, carry) => {
    if (!l1 && !l2 && !carry) return null
    let sum = carry
    if (l1) sum += l1.val
    if (l2) sum += l2.val
    let res = new ListNode(sum % 10)
    res.next = computeSum(l1 ? l1.next : null,
                          l2 ? l2.next : null,
                          sum > 9 ? 1 : 0)
    return res
}
