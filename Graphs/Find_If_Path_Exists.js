/*
There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1 (inclusive). 
The edges in the graph are represented as a 2D integer array edges, where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertex vi. 
Every vertex pair is connected by at most one edge, and no vertex has an edge to itself.

You want to determine if there is a valid path that exists from vertex source to vertex destination.

Given edges and the integers n, source, and destination, return true if there is a valid path from source to destination, or false otherwise.
*/

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1); // undirected
  }

  pathExistsDFS(start, end, visited = new Set()) {
    if (start === end) return true;
    visited.add(start);

    for (let neighbour of this.adjacencyList[start]) {
      if (!visited.has(neighbour)) {
        if (this.pathExistsDFS(neighbour, end, visited)) return true;
      }
    }
    return false;
  }
}

// Test
const g = new Graph();
[0, 1, 2].forEach((v) => g.addVertex(v));
g.addEdge(0, 1);
g.addEdge(1, 2);
g.addEdge(2, 0);

console.log(g.pathExistsDFS(0, 2));

const h = new Graph();
[0, 1, 2, 3, 4, 5].forEach((v) => h.addVertex(v));
h.addEdge(0, 1);
h.addEdge(0, 2);
h.addEdge(3, 5);
h.addEdge(5, 4);
h.addEdge(4, 3);

console.log(h.pathExistsDFS(0, 5));
