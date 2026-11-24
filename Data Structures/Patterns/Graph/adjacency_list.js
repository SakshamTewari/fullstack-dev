// GFG-https://www.geeksforgeeks.org/problems/print-adjacency-list-1587115620/1

function adjacencyList(v, edges) {
  let res = Array.from({ length: v }, () => []);

  for (let [u, neighbor] of edges) {
    res[u].push(neighbor);
    res[neighbor].push(u);
  }
  return res;
}

// Test

console.log(
  adjacencyList(5, [
    [0, 1],
    [0, 4],
    [4, 1],
    [4, 3],
    [1, 3],
    [1, 2],
    [3, 2],
  ]),
);
