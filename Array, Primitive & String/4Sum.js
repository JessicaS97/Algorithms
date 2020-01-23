/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let result = []
    nums.sort((a,b) => a-b)
    for (let i=0; i<nums.length-3; i++) {
        if (i > 0 && nums[i] === nums[i-1]) continue
        let newTarget = target - nums[i]
        for (let j=i+1; j<nums.length-2; j++) {
            if (j > i+1 && nums[j] === nums[j-1]) continue
            for (let k=j+1, l=nums.length-1; k<l; ) {
                if ((nums[j]+nums[k]+nums[l]) === newTarget) {
                    result.push([nums[i], nums[j], nums[k], nums[l]])
                    let curS = nums[k], curE = nums[l]
                    k++, l--
                    while (k < l && nums[k] === curS) k++
                    while (k < l && nums[l] === curE) l--
                } else if ((nums[j]+nums[k]+nums[l]) < newTarget) {
                    k++
                } else {
                    l--
                }
            }
        }
    }
    return result
};