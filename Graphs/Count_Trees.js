/*
Given n nodes of a forest (collection of trees), find the number of trees in the forest.

Examples : 

Input :  edges[] = {0, 1}, {0, 2}, {3, 4}
Output : 2
Explanation : There are 2 trees
                   0       3
                  / \       \
                 1   2       4
*/

function countTrees(n, edges) {
  // adjacency list
  const adj = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    adj[u].push(v);
    adj[v].push(u);
  }
  const visited = new Array(n).fill(false);

  // dfs
  function dfs(node) {
    visited[node] = true;
    for (const neighbor of adj[node]) {
      if (!visited[neighbor]) {
        dfs(neighbor);
      }
    }
  }

  let count = 0;
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      count++;
    }
  }

  return count;
}

// Test
console.log(
  countTrees(5, [
    [0, 1],
    [0, 2],
    [3, 4],
  ])
);
