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

// Test

const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(rootToLeafRecursive(root, 7));
