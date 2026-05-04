/*
Given a Binary Tree, return its Top View. 
The Top View of a Binary Tree is the set of nodes visible when we see the tree from the top.

Input:Binary Tree: 1 2 3 4 10 9 11 -1 5 -1 -1 -1 -1 -1 -1 -1 6
Output: Top View: [4, 2, 1, 3, 11]
*/
class TreeNode {
  constructor(val, left, right) {
    this.val = val || 0;
    this.left = left || null;
    this.right = right || null;
  }
}

// Top View

function topView(root) {
  if (!root) return [];
  let map = new Map(); // col -> node.val
  let queue = [[root, 0]];

  while (queue.length) {
    let [node, col] = queue.shift();

    // only take first node of column
    if (!map.has(col)) map.set(col, node.val);

    if (node.left) queue.push([node.left, col - 1]);
    if (node.right) queue.push([node.right, col + 1]);
  }

  // sort columns
  let sortedCols = [...map.keys()].sort((a, b) => a - b);
  return sortedCols.map((col) => map.get(col));
}

// Bottom View

function bottomView(root) {
  if (!root) return [];

  let map = new Map(); // col -> node.val
  let queue = [[root, 0]]; // [node, col]

  while (queue.length) {
    let [node, col] = queue.shift();

    // overwrite everytime
    map.set(col, node.val);

    if (node.left) queue.push([node.left, col - 1]);
    if (node.right) queue.push([node.right, col + 1]);
  }

  // sort columns from left -> right
  let sortedCols = [...map.keys()].sort((a, b) => a - b);
  return sortedCols.map((col) => map.get(col));
}

// Test
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(6);
root.right.left.right = new TreeNode(7);

console.log(topView(root));
console.log(bottomView(root));
