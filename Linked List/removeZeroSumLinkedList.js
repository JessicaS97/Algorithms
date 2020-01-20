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
var removeZeroSumSublists = function(head) {
    let fakeHead = new ListNode(0), cur = fakeHead, map = new Map(), sum = 0
    fakeHead.next = head
    while (cur) {
        sum += cur.val
        if (map.has(sum)) {
            cur = map.get(sum).next
            let curSum = sum + cur.val
            while(curSum !== sum) {
                map.delete(curSum)
                cur = cur.next
                curSum += cur.val
            }
            map.get(sum).next = cur.next
        } else {
            map.set(sum, cur)
        }
        cur = cur.next
    }
    return fakeHead.next
};