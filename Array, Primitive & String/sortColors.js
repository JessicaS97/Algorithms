/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let start = 0, mid = 0, end = nums.length - 1
    while (mid <= end) {
        switch(nums[mid]) {
            case 0:
                swap(nums, nums[start++], nums[mid++])
                break
            case 1:
                mid++
                break
            case 2:
                swap(nums, nums[end--], nums[mid])
                break
        }
    }
    return nums;
};

const swap = (arr, elem1, elem2) => {
    let temp = arr[elem1]
    arr[elem1] = arr[elem2]
    arr[elem2] = temp
}