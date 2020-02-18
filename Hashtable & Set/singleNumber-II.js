/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let frequency = []
    nums.forEach(n => {
        if (!frequency[n]) {
            frequency[n] = 1
        } else {
            frequency[n]++
        }
    })
    for (let num in frequency) {
        if (frequency[num] !== 3) {
            return num
        }
    }
    return -1
};