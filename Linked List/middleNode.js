/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let slow = head, fast = head
    if (!head) return null
    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
    }
    return slow
};