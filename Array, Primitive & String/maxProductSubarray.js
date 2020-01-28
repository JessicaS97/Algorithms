/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let largest = nums[0]
    for (let i=1, imax = largest, imin = largest; i<nums.length; i++) {
        if (nums[i] < 0) {
            let tmp = imax
            imax = imin
            imin = tmp
        }
        imax = Math.max(nums[i], imax * nums[i])
        imin = Math.min(nums[i], imin * nums[i])
        largest = Math.max(largest, imax)
    }
    return largest
};