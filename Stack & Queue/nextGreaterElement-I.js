/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let stack = [], map = new Map()
    nums2.forEach(num => {
        while (stack.length && stack[stack.length-1] < num) {
            map.set(stack.pop(), num)
        }
        stack.push(num)
    })
    for (let i=0; i<nums1.length; i++) {
        nums1[i] = map.has(nums1[i]) ? map.get(nums1[i]) : -1
    }
    return nums1
};