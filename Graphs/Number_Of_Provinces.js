/*
There are n cities. Some of them are connected, while some are not. 
If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.
A province is a group of directly or indirectly connected cities and no other cities outside of the group.
You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

Return the total number of provinces.

Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
Output: 2

Input: isConnected = [[1,0,0],[0,1,0],[0,0,1]]
Output: 3
*/

// using BFS
function findCircleNumBFS(isConnected) {
  const totalCities = isConnected.length;
  const visited = new Array(totalCities).fill(false);
  let provinceCount = 0;

  for (let i = 0; i < totalCities; i++) {
    if (!visited[i]) {
      provinceCount++;
      const queue = [i];

      while (queue.length > 0) {
        const city = queue.shift();
        visited[city] = true;

        for (let j = 0; j < totalCities; j++) {
          if (isConnected[city][j] === 1 && !visited[j]) {
            queue.push(j);
          }
        }
      }
    }
  }
  return provinceCount;
}

// using DFS
function findCircleNumDFS(isConnected) {
  const totalCities = isConnected.length;
  const visited = new Set();
  let provinceCount = 0;

  function dfs(city) {
    for (let neighbor = 0; neighbor < totalCities; neighbor++) {
      if (isConnected[city][neighbor] === 1 && !visited.has(neighbor)) {
        visited.add(neighbor);
        dfs(neighbor);
        //There’s no explicit return keyword needed unless you're trying to return a value from dfs() (which you're not, since it's used just for traversal and marking visited nodes).
      }
    }
  }

  for (let i = 0; i < totalCities; i++) {
    if (!visited.has(i)) {
      provinceCount++;
      dfs(i);
    }
  }

  return provinceCount;
}

/*
Given n nodes of a forest (collection of trees), find the number of trees in the forest.

Examples : 

Input :  edges[] = {0, 1}, {0, 2}, {3, 4}
Output : 2
*/
function countTrees(n, edges) {
  const adj = Array.from({ length: n }, () => []);
  const visited = new Array(n).fill(false);

  let trees = 0;

  // Build undirected graph
  for (let [u, v] of edges) {
    adj[u].push(v);
    adj[v].push(u);
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      trees++;
    }
  }

  function dfs(node) {
    visited[node] = true;
    for (let neighbor of adj[node]) {
      if (!visited[neighbor]) {
        dfs(neighbor);
      }
    }
  }
  return trees;
}

// Test

console.log(
  findCircleNumBFS([
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ]),
);
console.log(
  findCircleNumDFS([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ]),
);

console.log(
  countTrees(5, [
    [0, 1],
    [0, 2],
    [3, 4],
  ]),
);
