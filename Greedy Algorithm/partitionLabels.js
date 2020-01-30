/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
    let partitions = []
    let lastIndices = []
    for (let i=0; i<S.length; i++) {
        lastIndices[S.charAt(i)] = i
    }
    let i=0
    while (i < S.length) {
        let j = i
        let end = lastIndices[S.charAt(i)]
        while (j < end) {
            end = Math.max(end, lastIndices[S.charAt(j)])
            j++
        }
        partitions.push(j - i + 1)
        i = end + 1
    }
    return partitions
};