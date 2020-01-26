/**
 * 
 * Given a matrix consists of 0 and 1, find the distance of the nearest 0 for each cell.
 * The distance between two adjacent cells is 1.
 * 
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
    let queue = []
    for (let i=0; i<matrix.length; i++) {
        for (let j=0; j<matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                queue.push([i, j])
            } else {
                matrix[i][j] = -1
            }
        }
    }
    let dir = [[-1, 0], [1, 0], [0, -1], [0, 1]]
    let theSize = 0
    while (queue.length) {
        theSize++
        let qSize = queue.length
        for (let i=0; i<qSize; i++) {
            let cur = queue.shift()
            for (let j=0; j<dir.length; j++) {
                let r = cur[0] + dir[j][0] 
                let c = cur[1] + dir[j][1]  
                if (r >= 0 && r < matrix.length && c >= 0 && c < matrix[0].length) {
                    if (matrix[r][c] === -1) {
                        matrix[r][c] = theSize
                        queue.push([r, c])
                    }
                }
            }
            
        }
    }
    return matrix
};
