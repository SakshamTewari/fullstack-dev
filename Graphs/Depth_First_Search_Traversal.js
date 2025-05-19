function dfs(graph, node, visited = new Set()) {
  if (visited.has(node)) return;

  console.log(node); // visit the node
  visited.add(node);

  for (let neighbor of graph[node]) {
    dfs(graph, neighbor, visited);
  }
}

// Test

let graph = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F'],
  D: [],
  E: ['F'],
  F: [],
};

dfs(graph, 'A');
