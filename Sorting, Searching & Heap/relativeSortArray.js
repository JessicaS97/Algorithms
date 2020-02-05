/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let result = []
    let temp = []
    let charFreq = []
    arr1.forEach(c => {
        if (arr2.indexOf(c) === -1) temp.push(c)
        else if (!charFreq[c]) {
            charFreq[c] = 1
        } else {
            charFreq[c]++
        }
    })
    let count = 0
    for (let i=0; i<arr2.length; i++) {
       for (let j=charFreq[arr2[i]]; j>0; j--) {
           count++
           result.push(arr2[i])
       } 
    }
    return result.concat(temp.sort((a,b) => a-b))
};