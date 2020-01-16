/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length <= 1) return intervals
    let res = []
    let interval = intervals[0]
    res.push(interval)
    for (let i=0; i<intervals.length; i++) {
        if (interval[1] >= intervals[i][0]) {
            interval[1] = Math.max(interval[1], intervals[i][1])
        } else {
            interval = intervals[i]
            res.push(interval)
        }
    }
    return res
};

