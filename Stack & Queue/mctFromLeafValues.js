/**
 * @param {number[]} arr
 * @return {number}
 */
var mctFromLeafValues = function(arr) {
    let res = 0
    while (arr.length > 1) {
        let min = Math.min(...arr)
        let min_idx = arr.indexOf(min)
        if (0 < min_idx && min_idx < arr.length - 1) {
            res += Math.min(arr[min_idx - 1], arr[min_idx + 1]) * min
        } else {
            res += (min_idx === 0 ? arr[min_idx + 1] : arr[min_idx - 1]) * min
        }
        arr.splice(min_idx, 1)
    }
    return res
};