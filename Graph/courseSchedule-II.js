/**
 * There are a total of n courses you have to take, labeled from 0 to n-1.
 * Some courses may have prerequisites, for example to take course 0 you have 
 * to first take course 1, which is expressed as a pair: [0,1]
 * 
 * Given the total number of courses and a list of prerequisite pairs, return 
 * the ordering of courses you should take to finish all courses.
 * There may be multiple correct orders, you just need to return one of them. 
 * If it is impossible to finish all courses, return an empty array.
 * 
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const seen = new Set();
  const seeing = new Set();
  const res = [];
  
  const adj = [...Array(numCourses)].map(r => []);
  for (let [u, v] of prerequisites) {
    adj[v].push(u);
  }
  
  for (let c = 0; c < numCourses; c++) {
    if (!dfs(c)) {
      return [];
    }
  }
  return res.reverse();
  
  function dfs(v) {
    if (seen.has(v)) {
      return true;
    }
    if (seeing.has(v)) {
      return false;
    }
    
    seeing.add(v);
    for (let nv of adj[v]) {
      if (!dfs(nv)) {
        return false;
      }
    }
    seeing.delete(v);
    seen.add(v);
    res.push(v);
    return true;
  }
};
