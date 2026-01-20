/*
Given a directed weighted graph, your task is to find whether the given graph contains any negative cycles that are reachable from the source vertex (e.g., node 0).

Note: A negative-weight cycle is a cycle in a graph whose edges sum to a negative value.

Example:

Input:  V = 4, edges[][] = [[0, 3, 6], [1, 0, 4], [1, 2, 6], [3, 1, 2]]
Output: false
*/
function hasNegativeCycle(vertices, edges) {
  const dist = Array(vertices).fill(1e8);
  dist[0] = 0;

  // Relax edges
  for (let i = 0; i < vertices - 1; i++) {
    for (let [u, v, weight] of edges) {
      if (dist[u] !== 1e8 && dist[u] + weight < dist[v]) {
        dist[v] = dist[u] + weight;
      }
    }
  }

  // check for negative cycles
  for (let [u, v, w] of edges) {
    if (dist[u] !== Infinity && dist[u] + w < dist[v]) {
      return true;
    }
  }
  return false;
}

/*
Given a weighted graph with V vertices and E edges, along with a source vertex src, the task is to compute the shortest distances from the source to all other vertices. 
If a vertex is unreachable from the source, its distance should be marked as 108. In the presence of a negative weight cycle, return -1 to signify that shortest path calculations are not feasible.

Examples:

Input: V = 5, edges = [[0, 1, 5], [1, 2, 1], [1, 3, 2], [2, 4, 1], [4, 3, -1]], src = 0
*/

function bellmanFord(vertices, edges, src) {
  const dist = Array(vertices).fill(1e8);
  dist[src] = 0;

  // Relax edges up to vertices - 1 times
  for (let i = 0; i < vertices - 1; i++) {
    for (let [u, v, weight] of edges) {
      // if this  is the Vth relaxation, then there is a negative cycle
      if (i === vertices - 1) return [-1];
      if (dist[u] !== 1e8 && dist[u] + weight < dist[v]) {
        dist[v] = dist[u] + weight;
      }
    }
  }
  return dist;
}

// Test

console.log(
  hasNegativeCycle(4, [
    [0, 3, 6],
    [1, 0, 4],
    [1, 2, 6],
    [3, 1, 2],
  ]),
);

console.log(
  bellmanFord(
    5,
    [
      [1, 3, 2],
      [4, 3, -1],
      [2, 4, 1],
      [1, 2, 1],
      [0, 1, 5],
    ],
    0,
  ),
);
