/*
Given a graph, traverse the graph using Depth First Search and find the order in which nodes are visited.

Depth First Search (DFS) is a graph traversal method that starts from a source vertex and explores each path completely before backtracking and exploring other paths. 
To avoid revisiting nodes in graphs with cycles, a visited array is used to track visited vertices.

Note: There can be multiple DFS traversals of a graph according to the order in which we pick adjacent vertices. Here we pick vertices as per the insertion order.
*/

function dfs(graph, node, visited = new Set()) {
  if (visited.has(node)) return;

  console.log(node); // visit the node
  visited.add(node);

  for (let neighbor of graph[node]) {
    dfs(graph, neighbor, visited);
  }
}

// From a GIVEN SOURCE NODE
function dfsRec(
  adj,
  source,
  visited = new Array(adj.length).fill(false),
  result = []
) {
  visited[source] = true;
  result.push(source);

  // recursively visit all adjacent vertices that are not visited yet
  for (let i of adj[source]) {
    if (!visited[i]) {
      dfsRec(adj, i, visited, result);
    }
  }
  return result;
}

// Test

let graph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: ["F"],
  F: [],
};

dfs(graph, "A");

let adj = [[2, 3], [2], [0, 1], [0], [5], [4]];

console.log(dfsRec(adj, 0));
