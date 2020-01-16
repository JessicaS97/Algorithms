/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    let coloured = Array(graph.length).fill(0)
    for (let i=0; i<graph.length; i++) {
        if (coloured[i] !== 0) continue  // already coloured this node
        coloured[i] = 1
        let stack = []
        stack.push(i)
        while (stack.length) {
            let cur = stack.shift()
            // visit its neighbrs
            for (let j=0; j<graph[cur].length; j++) {
                if (coloured[graph[cur][j]] === 0) {
                    coloured[graph[cur][j]] = -coloured[cur]
                    stack.push(graph[cur][j])
                } else {
                    // Not alternating with neigh
                    if (coloured[graph[cur][j]] !== -coloured[cur]) return false
                }
            }
        }
    }
    return true
};
