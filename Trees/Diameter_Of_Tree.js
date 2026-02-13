/*
 Given the root of the Binary Tree, return the length of its diameter. 
 The Diameter of a Binary Tree is the longest distance between any two nodes of that tree. This path may or may not pass through the root.
*/
class Node {
  constructor(val, left, right) {
    this.val = val;
    this.left = left | null;
    this.right = right | null;
  }
}

function diameter(root) {
  let diameter = 0; // stores final answer

  function getHeight(node) {
    if (!node) return 0;

    // get height of left subtree
    const leftHeight = getHeight(node.left);

    // get height of right subtree
    const rightHeight = getHeight(node.right);

    // update diameter (longest path through this node)
    const pathThroughNode = leftHeight + rightHeight;
    diameter = Math.max(diameter, pathThroughNode);

    // return height of current node to parent
    return 1 + Math.max(leftHeight, rightHeight);
  }

  getHeight(root);

  return diameter;
}

// Test

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log(diameter(root));
