/*
Given the root node of a binary search tree (BST) and an integer k.
Return the kth smallest and largest value (1-indexed) of all values of the nodes in the tree.

Return the 1st integer as kth smallest and 2nd integer as kth largest in the returned array.

Input:root = [3, 1, 4, null, 2], k = 1  
Output:[1, 4]  
Explanation: 
The 1st smallest value in the given BST is 1.  
The 1st largest value in the given BST is 4.
*/

class TreeNode {
  constructor(val, left, right) {
    this.val = val || 0;
    this.left = left || null;
    this.right = right || null;
  }
}

function buildTree(arr) {
  if (!arr.length || arr[0] === null) return null;

  let root = new TreeNode(arr[0]);
  let queue = [root];
  let i = 1;

  while (queue.length && i < arr.length) {
    let curr = queue.shift();

    // left child
    if (arr[i] !== null) {
      curr.left = new TreeNode(arr[i]);
      queue.push(curr.left);
    }
    i++;

    // right child
    if (i < arr.length && arr[i] !== null) {
      curr.right = new TreeNode(arr[i]);
      queue.push(curr.right);
    }
    i++;
  }

  return root;
}

function kthSmallestLargest(root, k) {
  let arr = [];

  function inOrder(node) {
    if (!node) return;
    inOrder(node.left);
    arr.push(node.val);
    inOrder(node.right);
  }

  inOrder(root);

  return [arr[k - 1], arr[arr.length - k]];
}

// without extra space

function kthSmallestLargestBetter(root, k) {
  let count = 0;
  let kthSmall = null;

  function inOrder(node) {
    if (!node) return;
    inOrder(node.left);
    count++;
    if (count === k) {
      kthSmall = node.val;
      return;
    }
    inOrder(node.right);
  }

  inOrder(root);

  // Reset for largest
  count = 0;
  let kthLarge = null;

  function reverseInorder(node) {
    if (!node || kthLarge !== null) return;
    reverseInorder(node.right);

    count++;
    if (count === k) {
      kthLarge = node.val;
      return;
    }
    reverseInorder(node.left);
  }
  reverseInorder(root);

  return [kthSmall, kthLarge];
}

// Test
let root = buildTree([3, 1, 4, null, 2]);
console.log(kthSmallestLargestBetter(root, 1));
console.log(kthSmallestLargest(root, 1));
