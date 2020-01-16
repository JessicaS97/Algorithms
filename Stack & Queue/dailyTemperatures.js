/**
 * Given a list of daily temperatures T, return a list 
 * such that, for each day in the input, tells you how 
 * many days you would have to wait until a warmer temperature. 
 * If there is no future day for which this is possible, put 0 instead.

For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73], 
your output should be [1, 1, 4, 2, 1, 1, 0, 0].
 * 
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    let stack = [], res = Array(T.length).fill(0)
    for (let i=0; i<T.length; i++) {
        while (stack.length !== 0 && T[i] > T[stack[stack.length-1]]) {
            let idx = stack.pop()
            res[idx] = i - idx
        }
        stack.push(i)
    }
    return res
};