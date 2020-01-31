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
var detectCycle = function(head) {
    let map = new Set()
    let cur = head
    while (cur) {
        if (map.has(cur)) return cur
        map.add(cur)
        cur = cur.next
    }
    return null
};