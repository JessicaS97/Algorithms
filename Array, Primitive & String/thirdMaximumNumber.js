/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let first = Number.MIN_VALUE, second = Number.MIN_VALUE, third = Number.MIN_VALUE
    if (nums.length < 3) return Math.max(...nums)
    for (let i=0; i<nums.length; i++) {
        if (nums[i] === first || nums[i] === second || nums[i] === third) continue
        if (nums[i] > first || first === Number.MIN_VALUE) {
            let temp = second
            second = first
            third = temp
            first = nums[i]
        } else if (nums[i] > second || second === Number.MIN_VALUE) {
            third = second
            second = nums[i]
        } else if (nums[i] > third || third === Number.MIN_VALUE) {
            third = nums[i]
        }
    }
    return third !== Number.MIN_VALUE ? third : first
};