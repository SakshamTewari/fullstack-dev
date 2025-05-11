/* 
Given a binary tree, determine if it is height-balanced.
For every node, the height difference between its left and right subtree is no more than 1, and
Both left and right subtrees are also balanced.

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: true

Example 2:

Input: root = [1,2,2,3,3,null,null,4,4]
Output: false

Example 3:

Input: root = []
Output: true
*/

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? 0 : left;
  this.right = right === undefined ? 0 : right;
}

function isBalanced(root) {
  function getHeight(node) {
    if (!node) return 0;
    const leftHeight = getHeight(node.left);
    const rightHeight = getHeight(node.right);

    // If unbalanced subtree, return -1
    if (leftHeight === -1 || rightHeight === -1) return -1; // unbalanced left or right subtree

    if (Math.abs(leftHeight - rightHeight) > 1) return -1;

    // return height of current node
    return 1 + Math.max(leftHeight, rightHeight);
  }

  return getHeight(root) !== -1;
}

// Test
const tree = new TreeNode(1, new TreeNode(2, new TreeNode(3)), new TreeNode(2));

console.log(isBalanced(tree));

/*
Start at root (1)

    Recurse into left → node 2

        Recurse into left → node 3

            left is null → returns 0

            right is null → returns 0

            Height difference = 0 → ✅ balanced

            Return height = 1

        right is null → returns 0

        Height difference = 1 - 0 = 1 → ✅ balanced

        Return height = 2

    Recurse into right → node 2

        left is null → returns 0

        right is null → returns 0

        Return height = 1

Back at root (1)

    Left height = 2

    Right height = 1

    Height difference = 1 → ✅ balanced

    Return height = 3
*/
