/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    
    const topSort = courses => {
        let stack = []
        let seen = new Set()
        for (let course of courses) {
            if (seen.has(course)) continue
            topSortHelper(course, stack, seen, courses)
        }
        return stack
    }
    
    const topSortHelper = (course, stack, seen, adj) => {
        seen.add(course)
        for (let child of adj[course]) {
            if (seen.has(child)) continue
            topSortHelper(child, stack, seen, adj)
        }
        stack.push(course)
    }
    
    
    let adj = [...Array(numCourses)].map(() => [])
    
    for (let [u,v] of prerequisites) {
        adj[v].push(u)
    }
    return topSort(adj)
};