/*
Delete a node in BST

        5
       / \
      3   8
         / \
        7   9
*/

class TreeNode {
  constructor(val, left, right) {
    this.val = val || 0;
    this.left = left || null;
    this.right = right || null;
  }
}

function deleteNode(root, key) {
  if (!root) return null;

  // Traverse the tree to find the node
  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else {
    // node found : root.val === key

    // Case: 0 or 1 child
    //    5
    //     \
    //      8
    if (!root.left) return root.right;
    if (!root.right) return root.left;

    // Case : 2 children : we cannot delete it directly, so find successor from right subtree
    let successor = findMin(root.right);
    // replace current node's value with successor's value
    root.val = successor.val;
    // delete duplicate successor node
    root.right = deleteNode(root.right, successor.val);
  }
  return root;
}

function findMin(node) {
  while (node.left) {
    node = node.left;
  }
  return node;
}

// Test
let root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(8);
root.right.left = new TreeNode(7);
root.right.right = new TreeNode(9);

console.log(deleteNode(root, 5));
