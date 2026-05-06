/*
iven a Binary Tree and a reference to a root belonging to it. Return the path from the root node to the given leaf node.
Note: No two nodes in the tree have the same data value and it is assured that the given node is present and a path always exists.

Input: Binary Tree: 1 2 3 4 5 -1 -1 -1 -1, Node: 7
Output: [1, 2, 5, 7]
*/

class TreeNode {
  constructor(val, left, right) {
    this.val = val || 0;
    this.left = left || null;
    this.right = right || null;
  }
}

// Recursive approach

function rootToLeafRecursive(root, target) {
  let path = [];

  function dfs(node) {
    if (!node) return false;

    // add current node
    path.push(node.val);

    // if target found
    if (node.val === target) return true;

    // search left or right
    if (dfs(node.left) || dfs(node.right)) return true;

    path.pop();
    return false;
  }

  dfs(root);
  return path;
}

// Iterative approach

function rootToLeafIterative(root, target) {
  if (!root) return [];

  let stack = [[root, [root.val]]]; // [node, path]

  while (stack.length) {
    let [node, path] = stack.pop();

    if (node.val === target) return path;

    if (node.right) stack.push([node.right, [...path, node.right.val]]);
    if (node.left) stack.push([node.left, [...path, node.left.val]]);
  }
  return [];
}

// Test

const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(rootToLeafRecursive(root, 7));
console.log(rootToLeafIterative(root, 7));
