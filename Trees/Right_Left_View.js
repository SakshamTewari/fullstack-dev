/*
Assuming standing on the right side of a binary tree and given its root, return the values of the nodes visible, arranged from top to bottom.

Input : root = [1, 2, 3, null, 5, null, 4]
Output :[1, 3, 4]
*/

class TreeNode {
  constructor(val, left, right) {
    this.val = val || 0;
    this.left = left || null;
    this.right = right || null;
  }
}

// Right View - BFS (brute force)

function rightViewBFS(root) {
  if (!root) return [];
  const result = [];
  const queue = [root];

  while (queue.length) {
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();

      if (i === levelSize - 1) result.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return result;
}

// Right View - DFS (optimal)

function rightViewDFS(root) {
  const result = [];

  function dfs(node, level, result) {
    if (!node) return;

    if (level === result.length) result.push(node.val);
    dfs(node.right, level + 1, result);
    dfs(node.left, level + 1, result);
  }
  dfs(root, 0, result);
  return result;
}

// Test

const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.right = new TreeNode(5);
tree.right.right = new TreeNode(4);

console.log(rightViewBFS(tree));
console.log(rightViewDFS(tree));
