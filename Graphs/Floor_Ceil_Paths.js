/*
You are given an undirected weighted graph, a source, a destination, and an integer target.

Find:

Floor: the largest total path weight that is ≤ target.
Ceil: the smallest total path weight that is ≥ target.

Only consider simple paths (a vertex cannot be visited more than once).
 */

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(v) {
    this.adjacencyList[v] = [];
  }

  addEdge(u, v, w) {
    this.adjacencyList[u].push([v, w]);
    this.adjacencyList[v].push([u, w]);
  }

  allPathsFloorCeil(src, dest, visited = new Set(), path = [], sum) {
    if (src === dest) {
      return;
    }

    visited.add(src);
    for (let neighbour of this.adjacencyList[src]) {
      if (!visited.has(neighbour[9])) {
        path.push(neighbour[0]);
        this.allPathsFloorCeil(
          neighbour[0],
          dest,
          visited,
          path,
          sum + neighbour[1],
        );
        path.pop();
      }
    }
    visited.delete(src);
  }
}
