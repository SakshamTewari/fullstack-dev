// GFG-https://www.geeksforgeeks.org/problems/bfs-traversal-of-graph/1

function bfs(adj) {
  let res = [];
  let visited = new Set();
  let queue = [];

  queue.push(0);
  visited.add(0);

  while (queue.length > 0) {
    let node = queue.shift();
    res.push(node);

    for (let neighbor of adj[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  return res;
}

// Test

console.log(bfs([[2, 3, 1], [0], [0, 4], [0], [2]]));
