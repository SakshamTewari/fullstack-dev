/*
Kahn's Algorithm (using BFS)
Kahn's Algorithm works by repeatedly finding vertices with no incoming edges, removing them from the graph, and updating the incoming edges of the vertices connected from the removed removed edges. 
This process continues until all vertices have been ordered.

Uses in-degree (number of incoming edges).

Logic:

Compute in-degree for all vertices.
Start with nodes having inDegree = 0 (no dependencies).
Remove them from the graph, decreasing in-degrees of their neighbors.
Repeat until all nodes are processed.
*/

function kahnTopoSort(V, edges) {
  const adj = Array.from({ length: V }, () => []);
  for (const [u, v] of edges) {
    adj[u].push(v);
  }

  const inDegree = new Array(V).fill(0);
  const result = [];
  const queue = [];

  // compute indegree
  for (let i = 0; i < V; i++) {
    for (const neighbor of adj[i]) {
      inDegree[neighbor]++;
    }
  }

  // enqueue 0 indegree nodes
  for (let i = 0; i < V; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }

  while (queue.length) {
    const node = queue.shift();
    result.push(node);

    for (const neighbor of adj[node]) {
      inDegree[neighbor]--;
      if (inDegree[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }

  return result;
}

// Test
console.log(
  kahnTopoSort(6, [
    [5, 2],
    [5, 0],
    [4, 0],
    [4, 1],
    [2, 3],
    [3, 1],
  ])
);

/*
Applications of Kahn's algorithm for Topological Sort: 
  
Course sequencing: Courses at universities frequently have prerequisites for other courses. The courses can be scheduled using Kahn's algorithm so that the prerequisites are taken before the courses that call for them.
Management of software dependencies: When developing software, libraries and modules frequently rely on other libraries and modules. The dependencies can be installed in the proper order by using Kahn's approach.
Scheduling tasks: In project management, activities frequently depend on one another. The tasks can be scheduled using Kahn's method so that the dependent tasks are finished before the tasks that depend on them.
Data processing: In data processing pipelines, the outcomes of some processes may be dependent. The stages can be carried out in the right order by using Kahn's algorithm.
Circuit design: In the creation of an electronic circuit, some components may be dependent on the output of others. The components can be joined in the right order by using Kahn's technique.
*/
