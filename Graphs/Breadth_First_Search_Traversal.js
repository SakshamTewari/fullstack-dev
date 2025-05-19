function bfs(graph, start) {
  let queue = [start];
  let visited = new Set();
  visited.add(start);

  while (queue.length > 0) {
    let node = queue.shift();
    console.log(node); // visit the node

    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
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

bfs(graph, 'A');
