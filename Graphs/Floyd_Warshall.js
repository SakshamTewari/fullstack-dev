/*
Given a matrix dist[][] of size n x n, where dist[i][j] represents the weight of the edge from node i to node j. 
If there is no direct edge, dist[i][j] is set to a large value (e.g., 10⁸) to represent infinity. 
The diagonal entries dist[i][i] are 0, since the distance from a node to itself is zero. The graph may contain negative edge weights, but it does not contain any negative weight cycles.

Your task is to determine the shortest path distance between all pair of nodes i and j in the graph.

Input: dist[][] = [[0, 4, 10⁸, 5, 10⁸],
                           [10⁸, 0, 1,  10⁸, 6],
                           [2, 10⁸, 0, 3, 10⁸],
                           [10⁸, 10⁸, 1, 0, 2],
                          [1, 10⁸, 10⁸, 4, 0]]
 
Output:[[0, 4, 5, 5, 7], 
              [3, 0, 1, 4, 6], 
              [2, 6, 0, 3, 5],
             [3, 7, 1, 0, 2], 
             [1, 5, 5, 4, 0]]  
*/

function floydWarshall(graph) {
  const V = graph.length;

  const dist = Array.from({ length: V }, (_, i) =>
    Array.from({ length: V }, (_, j) => graph[i][j])
  );

  // k = allowed intermediate node
  for (let k = 0; k < V; k++) {
    // i = source node
    for (let i = 0; i < V; i++) {
      // j = destination node
      for (let j = 0; j < V; j++) {
        if (dist[i][k] + dist[k][j] < dist[i][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }
  return dist;
}

// Test

console.log(
  floydWarshall([
    [0, 3, 1e8, 7],
    [8, 0, 2, 1e8],
    [5, 1e8, 0, 1],
    [2, 1e8, 1e8, 0],
  ])
);
