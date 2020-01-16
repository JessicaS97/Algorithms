/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0
    for (let i=0; i<grid.length; i++) {
        for (let j=0; j<grid[0].length; j++) {
            if (grid[i][j] === "1") {
                count++
                expand(grid, i, j)
            }
        }
    }
    return count
};

const expand = (grid, r, c) => {
    if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || grid[r][c] !== "1") {
        return
    }
    grid[r][c] = "X"
    expand(grid, r + 1, c)
    expand(grid, r - 1, c)
    expand(grid, r, c + 1)
    expand(grid, r, c - 1)
}