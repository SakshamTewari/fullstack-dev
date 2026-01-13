/*
Given a directed graph, find out if a vertex v is reachable from another vertex u for all vertex pairs (u, v) in the given graph. 
Here reachable means that there is a path from vertex u to v. 
The reach-ability matrix is called transitive closure of a graph.
*/

class Graph {
  constructor(vertices) {
    this.v = vertices;
    this.adj = new Array(vertices);
    this.tc = Array.from(Array(vertices), () => new Array(vertices).fill(0));

    for (let i = 0; i < vertices; i++) {
      this.adj[i] = [];
    }
  }

  addEdge(v, w) {
    this.adj[v].push(w);
  }

  DFS(source, v) {
    this.tc[source][v] = 1;
    for (let i of this.adj[v]) {
      if (this.tc[source][i] === 0) {
        this.DFS(source, i);
      }
    }
  }

  transitiveClosure() {
    for (let i = 0; i < this.v; i++) {
      this.DFS(i, i);
    }
    return this.tc;
  }
}

// Test
g = new Graph(4);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(2, 3);
g.addEdge(3, 3);

console.log(g.transitiveClosure());
