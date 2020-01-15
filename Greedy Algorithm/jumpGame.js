/**
 * 
 * Given an array of non-negative integers,
 * you are initially positioned at the first index of the array.
 * 
 * Each element in the array represents your maximum jump length at that position.
 * Determine if you are able to reach the last index.
 * 
 * 
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if (nums.length <= 1) return true;
    let reach = 0
    for (let i=0; i<=reach; i++) {
        reach = Math.max(reach, i + nums[i])
        if (reach >= nums.length - 1) return true
    }
    return false
};