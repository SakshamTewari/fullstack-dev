/*
Given a directed graph represented by its adjacency list adj[][], determine whether the graph contains a cycle/Loop or not.
A cycle is a path that starts and ends at the same vertex, following the direction of edges.

Examples:

Input: adj[][] = [[1], [2], [0, 3], []]
Output:  true
Explanation:  There is a cycle 0 -> 1 -> 2 -> 0.

Input: adj[][] = [[2], [0], []]
Output:  false
Explanation:  There is no cycle in the graph.
*/

//In a directed graph, a cycle exists if:
//While doing DFS, you come back to a node that is already in the current DFS path.
function hasCycleDFS(adj) {
  const n = adj.length;
  const visited = new Array(n).fill(false);
  const recStack = new Array(n).fill(false);

  function dfs(node) {
    visited[node] = true;
    recStack[node] = true;

    for (let neighbor of adj[node]) {
      if (recStack[neighbor]) return true; // cycle detected

      // if not visited, explore deeper
      if (!visited[neighbor]) {
        if (dfs(neighbor)) return true;
      }
    }

    // backtrack
    recStack[node] = false;
    return false;
  }

  // Graph may be disconnected
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      if (dfs(i)) return true;
    }
  }
  return false;
}

// Test
adj = [[1], [2], [0, 3], []];

console.log(hasCycleDFS(adj));
