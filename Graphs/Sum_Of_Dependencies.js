/*
Given a directed and connected graph with n nodes. If there is an edge from u to v then u depends on v. 
Our task was to find out the sum of dependencies for every node.
*/

function sumOfDependencies(adj) {
  const n = adj.length;
  const result = new Array(n).fill(0);

  function dfs(start, node, visited) {
    for (let neighbor of adj[node]) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        result[start]++;
        dfs(start, neighbor, visited);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    const visited = new Array(n).fill(false);
    visited[i] = true;
    dfs(i, i, visited);
  }

  return result;
}

// Test
console.log(sumOfDependencies([[1, 3], [2], [], []]));
