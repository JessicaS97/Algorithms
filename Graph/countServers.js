/**
 * You are given a map of a server center, 
 * represented as a m * n integer matrix grid, 
 * where 1 means that on that cell there is a server 
 * and 0 means that it is no server. Two servers are said 
 * to communicate if they are on the same row or on the same column.
 * Return the number of servers that communicate with any other server.
 * 
 * 
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function(grid) {
    let cols = [], rows = [], servers = 0
    for (let r=0; r<grid.length; r++) {
        for (let c=0; c<grid[0].length; c++) {
            if (grid[r][c] === 1) {
                if (!cols[c]) cols[c] = 0
                if (!rows[r]) rows[r] = 0
                cols[c]++
                rows[r]++
                servers++
            }
        }
    }
    for (let r=0; r<grid.length; r++) {
        for (let c=0; c<grid[0].length; c++) {
            if (grid[r][c] === 1) {
                if (cols[c] === 1 && rows[r] === 1) servers--
            }
        }
    }
    return servers
};