/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let res = []
    if (intervals.length <= 1) return intervals
    intervals.sort(sortColumns)
    let interval = intervals[0]
    res.push(interval)
    for (let i=0; i<intervals.length; i++) {
        if (intervals[i][0] <= interval[1]) {   //overlapping
            interval[1] = Math.max(interval[1], intervals[i][1])
        } else {
            interval = intervals[i]
            res.push(interval)
        }
    }
    
    return res
};

function sortColumns(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] < b[0]) ? -1 : 1;
    }
}