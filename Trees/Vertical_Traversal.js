/*
Given a Binary Tree, return the Vertical Order Traversal of it starting from the Leftmost level to the Rightmost level. 
If there are multiple nodes passing through a vertical line, then they should be printed as they appear in level order traversal of the tree.

Input:Binary Tree: 1 2 3 4 10 9 11 -1 5 -1 -1 -1 -1 -1 -1 -1 6
Output: Vertical Order Traversal: [[4],[2, 5], [1, 10, 9, 6],[3],[11]]
Explanation: Vertical Levels from left to right:Level -2: [4],Level -1: [2],Level 0: [1, 10, 9, 6] (Overlapping nodes are added in their level order sequence),Level 1: [3],Level 2: [11],
*/
class TreeNode {
  constructor(val, left, right) {
    this.val = val || 0;
    this.left = left || null;
    this.right = right || null;
  }
}

function verticalOrder(root) {
  if (!root) return [];
  let map = new Map(); // col -> [nodes]
  let queue = [[root, 0]]; // [node, col]

  while (queue.length) {
    let [node, col] = queue.shift();

    if (!map.has(col)) map.set(col, []);
    map.get(col).push(node.val);

    if (node.left) queue.push([node.left, col - 1]);
    if (node.right) queue.push([node.right, col + 1]);
  }

  // sort columns
  let sortedCols = [...map.keys()].sort((a, b) => a - b);

  let result = [];
  for (let col of sortedCols) {
    result.push(map.get(col));
  }
  return result;
}

// Test

const root = new TreeNode(3);

root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(verticalOrder(root));
