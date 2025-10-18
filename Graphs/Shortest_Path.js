/*
Given an unweighted, undirected graph of V nodes and E edges, a source node S, and a destination node D, 
we need to find the shortest path from node S to node D in the graph.

Input: V = 8, E = 10, S = 0, D = 7, edges[][] = {{0, 1}, {1, 2}, {0, 3}, {3, 4}, {4, 7}, {3, 7}, {6, 7}, {4, 5}, {4, 6}, {5, 6}}
Output: 0 3 7
Explanation: The shortest path is 0 -> 3 -> 7.

Input: V = 8, E = 10, S = 2, D = 6, edges[][] = {{0, 1}, {1, 2}, {0, 3}, {3, 4}, {4, 7}, {3, 7}, {6, 7}, {4, 5}, {4, 6}, {5, 6}}
Output: 2 1 0 3 4 6
Explanation: The shortest path is 2 -> 1 -> 0 -> 3 - > 4 -> 6.
*/

function shortestPath(V, source, destination, edges) {
  // Build adjacency list from edges
  const adj = Array.from({ length: V }, () => []);

  for (const [u, v] of edges) {
    adj[u].push(v);
    adj[v].push(u);
  }

  // BFS setup
  const queue = [source];
  const visited = new Set();
  const parent = new Array(V).fill(-1); // to reconstruct path

  visited.add(source);

  // BFS loop
  while (queue.length > 0) {
    const node = queue.shift(); // take first node

    // if destination found, stop
    if (node === destination) break;

    // explore neightbours
    for (const neighbor of adj[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        parent[neighbor] = node;
        queue.push(neighbor);
      }
    }
  }

  // Reconstruct path from destination -> source
  const path = [];
  let current = destination;
  while (current !== -1) {
    path.push(current);
    current = parent[current];
  }

  // reverse because we built from destination -> source
  return path.reverse();
}

// Test
console.log(
  shortestPath(8, 0, 7, [
    [0, 1],
    [1, 2],
    [0, 3],
    [3, 4],
    [4, 7],
    [3, 7],
    [6, 7],
    [4, 5],
    [4, 6],
    [5, 6],
  ])
);
