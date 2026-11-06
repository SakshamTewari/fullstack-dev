/*
You are given an undirected graph with n vertices labeled from 0 to n - 1.
The graph is represented by an adjacency list graph, where: graph[i] contains all vertices that can be reached directly from vertex i.

Return all possible paths from vertex 0 to vertex n - 1.
You may return the paths in any order.
*/

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(v) {
    this.adjacencyList[v] = [];
  }

  addEdge(u, v) {
    this.adjacencyList[u].push(v);
    this.adjacencyList[v].push(u);
  }

  allPaths(src, dest, visited = new Set(), path = [src]) {
    if (src === dest) {
      console.log(path);
      return;
    }

    visited.add(src);
    for (let neighbour of this.adjacencyList[src]) {
      if (!visited.has(neighbour)) {
        path.push(neighbour);
        this.allPaths(neighbour, dest, visited, path);
        path.pop();
      }
    }
    visited.delete(src);
  }
}

// Test
const g = new Graph();
const edges = [
  [0, 1],
  [0, 2],
  [1, 2],
  [1, 3],
  [2, 3],
  [2, 4],
  [3, 4],
];

[0, 1, 2, 3, 4].forEach((v) => g.addVertex(v));

for (let [u, v] of edges) {
  g.addEdge(u, v);
}

console.log(g.allPaths(0, 4));
