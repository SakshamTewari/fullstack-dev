// GFG-https://www.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/1

function dfs(adj) {
  let res = [];
  let visited = new Set();

  for (let node = 0; node < adj.length; node++) {
    if (!visited.has(node)) {
      traverse(node);
    }
  }

  // explore one vertex and its neighbors
  function traverse(node) {
    if (visited.has(node)) return;

    visited.add(node);
    res.push(node);

    // visit other neighbors
    for (let neighbor of adj[node]) {
      traverse(neighbor);
    }
  }

  return res;
}

// Test

console.log(dfs([[2, 3, 1], [0], [0, 4], [0], [2]]));
