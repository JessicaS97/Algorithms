/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = {}
    let majority = null;
    nums.forEach(n => {
        if (!map[n]) {
            map[n] = 1;
        } else {
            map[n]++;
        }
    })
    for (let n in map) {
        if (map[n] > nums.length/2) {
         majority = n;   
        }
    }
    return majority;
};
