/*
Given two empty jugs of m and n litres respectively. The jugs don't have markings to allow measuring smaller quantities. 
You have to use the jugs to measure d litres of water. 
The task is to find the minimum number of operations to be performed to obtain d litres of water in one of the jugs. In case of no solution exist, return -1.

The operations you can perform are:

Empty a Jug
Fill a Jug
Pour water from one jug to the other until one of the jugs is either empty or full.
*/

function minStepsToMeasureWaterBFS(m, n, d) {
  // BFS queue
  const queue = [];
  const visited = new Set();

  // start from (0,0)
  queue.push({ a: 0, b: 0, steps: 0 });
  visited.add("0,0");

  while (queue.length > 0) {
    const { a, b, steps } = queue.shift();

    // Goal condition
    if (a === d || b === d) {
      return steps;
    }

    // Generate all possible next states
    const nextStates = [
      { a: m, b },
      { a, b: n },
      { a: 0, b },
      { a, b: 0 },
      { a: a - Math.min(a, n - b), b: b + Math.min(a, n - b) },
      { a: a + Math.min(b, m - a), b: b - Math.min(b, m - a) },
    ];

    // Traverse next states
    for (const state of nextStates) {
      const key = `${state.a},${state.b}`;
      if (!visited.has(key)) {
        visited.add(key);
        queue.push({ ...state, steps: steps + 1 });
      }
    }
  }

  return -1;
}

// DFS: not necessarily minimum steps
function minStepsToMeasureWaterDFS(m, n, target) {
  const visited = new Set();

  function dfs(a, b) {
    // base case
    if (a === target || b === target) return true;
    const key = `${a},${b}`;
    if (visited.has(key)) return false;

    visited.add(key);

    // next states
    const nextStates = [
      [0, b],
      [a, 0],
      [m, b],
      [a, n],
      [a - Math.min(a, n - b), b + Math.min(a, n - b)],
      [a + Math.min(b, m - a), b - Math.min(b, m - a)],
    ];

    // explore each state recursively
    for (const [newA, newB] of nextStates) {
      if (dfs(newA, newB)) return true;
    }

    return false;
  }

  return dfs(0, 0);
}

// Test
console.log(minStepsToMeasureWaterBFS(4, 3, 2));
console.log(minStepsToMeasureWaterDFS(4, 3, 2));
