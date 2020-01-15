/**
 * 
 * Given an N x N grid containing only values 0 and 1, 
 * where 0 represents water and 1 represents land, find 
 * a water cell such that its distance to the nearest land 
 * cell is maximized and return the distance.

The distance used in this problem is the Manhattan distance: 
the distance between two cells (x0, y0) and (x1, y1) is |x0 - x1| + |y0 - y1|.

If no land or water exists in the grid, return -1.
 * 
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
    let queue = [], secondQueue = [], steps = 0
    // Valid points to start BFS
    for (let i=0; i<grid.length; i++) {
        for (let j=0; j<grid[0].length; j++) {
            if (grid[i][j] === 1) {
                queue.push([i-1, j])
                queue.push([i+1, j])
                queue.push([i, j-1])
                queue.push([i, j+1])
            }
        }
    }
    while (queue.length) {
        steps++
        while (queue.length) {
            let loc = queue.pop()
            let x = loc[0]
            let y = loc[1]
            if (x >= 0 && x < grid.length && y >= 0 && y < grid[0].length && grid[x][y]                     === 0) {
                secondQueue.push([x-1, y])
                secondQueue.push([x+1, y])
                secondQueue.push([x, y-1])
                secondQueue.push([x, y+1])
            }
            queue = [...secondQueue]
            secondQueue = []
        }
    }
    return steps ? 1 ? -1 : steps - 1
};