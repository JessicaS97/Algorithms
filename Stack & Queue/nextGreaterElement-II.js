/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let len = nums.length, res = Array(nums.length).fill(-1), stack = []
    for (let i=0; i<len*2; i++) {
        let n = nums[i % len]
        while (stack.length && n > nums[stack[stack.length - 1]]) {
            res[stack.pop()] = n
        }
        if (i < len) stack.push(i)
    }
    return res
};