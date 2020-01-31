/**
 * 
 * Sort a linked list in O(n log n) time using constant space complexity.
 * 
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
var sortList = function(head) {
    if (!head || !head.next) return head
    let prev = null, slow = head, fast = head
    while (fast && fast.next) {
        prev = slow
        slow = slow.next
        fast = fast.next.next
    }
    prev.next = null
    let left = sortList(head)
    let right = sortList(slow)
    return merge(left, right)
};

const merge = (left, right) => {
    let l = new ListNode(0), p = l
    while (left && right) {
        if (left.val < right.val) {
            p.next = left
            left = left.next
        } else {
            p.next = right
            right = right.next
        }
        p = p.next
    }
    while (left) {
        p.next = left
        left = left.next, p = p.next
    }
    while (right) {
        p.next = right   
        right = right.next, p = p.next
    }
    return l.next
}

