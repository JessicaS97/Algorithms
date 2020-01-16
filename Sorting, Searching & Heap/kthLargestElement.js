/**
 * Find the kth largest element in an unsorted array. 
 * Note that it is the kth largest element in the sorted order, 
 * not the kth distinct element.
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let n = nums.length
    let left = 0, right = n - 1
    let pivotIdx = 0
    while (left <= right) {
        let pivotIdx = left
        let idx = partition(nums, left, right, pivotIdx)
        if (idx === n - k) {
            return nums[idx]
        } else if (idx < n - k) {
            left = idx + 1
        } else {
            right = idx - 1
        }
    }
    return -1
};

const partition = (arr, left, right, idx) => {
    let pivotValue = arr[idx]
    swap(arr, idx, right)
    let tail = left
    for (let i=left; i<right; i++) {
        if (arr[i] < pivotValue) {
            swap(arr, i, tail)
            tail++
        }
    }
    swap(arr, tail, right)
    return tail
}

const swap = (arr, a, b) => {
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}