/*
Given a weighted undirected graph represented using an adjacency list adj[][], 
where each entry adj[u] contains pairs of the form {v, w} - representing that vertex u is connected to vertex v with an edge weight of w and we are also given a source vertex src. 
We need to find the shortest path distances from the source vertex to all other vertices in the graph.
Note: The given graph does not contain any negative edge.

Examples:

Input: src = 0, adj[][] = [[[1, 4], [2, 8]],         
                                            [[0, 4], [4, 6], [2,3]], 
                                            [[0, 8], [3, 2], [1,3]], 
                                            [[2, 2], [4, 10]], 
                                            [[1, 6], [3, 10]]]

Output:  [0, 4, 7, 9, 10]
Explanation:  Shortest Paths:  
0 -> 0 = 0: Source node itself, so distance is 0.
0 -> 1 = 4: Direct edge from node 0 to 1 gives shortest distance 4.
0 -> 2 = 7: Path 0 → 1 → 2 gives total cost 4 + 3 = 7, which is smaller than direct edge 8.
0 -> 3 = 9: Path 0 → 1 → 2 → 3 gives total cost 4 + 3 + 2 = 9.
0 -> 4 = 10: Path 0 → 1 → 4 gives total cost 4 + 6 = 10.
*/

// Array based (O(v^2))
function dijkstra(graph, src) {
  const n = graph.length;
  const dist = Array(n).fill(Infinity);

  //stores Nodes whose distance is final
  const visited = Array(n).fill(false);

  dist[src] = 0;

  for (let i = 0; i < n; i++) {
    // find unvisited node with smallest distance
    let node = -1;
    let minDist = Infinity;

    for (let j = 0; j < n; j++) {
      if (!visited[j] && dist[j] < minDist) {
        minDist = dist[j];
        node = j;
      }
    }

    if (node === -1) break; // all nodes processed

    visited[node] = true;

    // update distances to neighbors
    for (let [neighbor, weight] of graph[node]) {
      if (!visited[neighbor] && dist[node] + weight < dist[neighbor]) {
        dist[neighbor] = dist[node] + weight;
      }
    }
  }
  return dist;
}

// Test
const graph = [
  [
    [1, 4],
    [2, 1],
  ], // 0
  [[3, 1]], // 1
  [
    [1, 2],
    [3, 5],
  ], // 2
  [], // 3
];

console.log(dijkstra(graph, 0));
