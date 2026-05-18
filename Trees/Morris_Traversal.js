/*
Given a Binary Tree, implement Morris Preorder Traversal and return the array containing its preorder sequence.

Morris Preorder Traversal is a tree traversal algorithm aiming to achieve a space complexity of O(1) without recursion or an external data structure. 
The algorithm should efficiently visit each node in the binary tree in preorder sequence, printing or processing the node values as it traverses, without using a stack or recursion.

Input:Binary Tree: 4 2 5 3 -1 7 6 -1 9 -1 -1 8 -1 1
Output: [4 2 3 9 1 5 7 6 8]
Explanation: We traverse the binary tree in the order of Left, Root then Right.
*/

class TreeNode {
  constructor(val, left, right) {
    this.val = val || 0;
    this.left = left || null;
    this.right = right || null;
  }
}

function morrisInorder(root) {
  let result = [];
  let curr = root;

  while (curr) {
    // case 1: no left child
    if (!curr.left) {
      result.push(curr.val);
      curr = curr.right;
    } else {
      // find inorder predecessor
      let predecessor = curr.left;

      while (predecessor.right && predecessor.right !== curr) {
        predecessor = predecessor.right;
      }

      // case 2: create temporary thread
      if (!predecessor.right) {
        predecessor.right = curr;
        curr = curr.left;
      } else {
        // case 3: thread exists
        predecessor.right = null;
        result.push(curr.val);
        curr = curr.right;
      }
    }
  }
  return result;
}

// Test
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.left.right.right = new TreeNode(6);

console.log(morrisInorder(root));
