/**
 * Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.
 * Your algorithm's runtime complexity must be in the order of O(log n).
 * If the target is not found in the array, return [-1, -1].
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let start = 0, end = nums.length - 1, mid, find = -1
    if (!nums || !nums.length) return [-1, -1]
    while (start <= end) {
        mid = Math.floor((start+end)/2)
        if (nums[mid] === target) {
            find = mid
            break
        } else if (nums[mid] < target) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }
    if (find === -1) return [-1, -1]
    start = find, end = find
    while (start > 0 && nums[start] === nums[start - 1]) {
        start--
    }
    while (end < nums.length -1 && nums[end] === nums[end + 1]) {
        end++
    }
    return [start, end]
};