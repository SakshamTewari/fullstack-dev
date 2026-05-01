/*
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

Input: root = [3, 9, 20, null, null, 15, 7]  
Output: [ [3], [9, 20], [15, 7] ]  
*/
class TreeNode {
  constructor(val, left, right) {
    this.val = val || 0;
    this.left = left || null;
    this.right = right || null;
  }
}

// Level Order Traversal

function levelOrder(root) {
  if (!root) return [];
  let result = [];
  let queue = [root];

  while (queue.length) {
    let size = queue.length; // this is important as queue.length keeps on changing inside for loop;
    let level = [];

    for (let i = 0; i < size; i++) {
      let curr = queue.shift();
      level.push(curr.val);

      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
    result.push(level);
  }
  return result;
}

/*
Given root of binary tree, return the Inorder traversal of the binary tree.

Input:root = [1, 4, null, 4, 2]  
Output:[4, 4, 2, 1]
*/
function iterativeInorder(root) {
  let res = [];
  let stack = [];
  let curr = root;

  while (curr || stack.length) {
    // go extreme left
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }

    // process node
    curr = stack.pop();
    res.push(curr.val);

    // go right
    curr = curr.right;
  }
  return res;
}

function recursiveInorder(root) {
  let res = [];

  function dfs(node) {
    if (!node) return;
    dfs(node.left);
    res.push(node.val);
    dfs(node.right);
  }
  dfs(root);
  return res;
}

/*
Given the root of a Binary Tree, write a function that returns an array containing the preorder traversal of the tree using an iterative approach with a stack.

Input:Binary Tree: 4 2 5 3 -1 7 6 -1 9 -1 -1 8 -1 1  
Output:[4, 2, 3, 9, 1, 5, 7, 6, 8]  
Explanation: We traverse the binary tree in the order of Root, Left, and then Right recursively.

*/
function iterativePreorder(root) {
  if (!root) return [];
  let stack = [root];
  let result = [];

  while (stack.length) {
    let curr = stack.pop();
    result.push(curr.val);

    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
  }
  return result;
}

function recursivePreorder(root) {
  let res = [];

  function dfs(node) {
    if (!node) return;
    res.push(node.val);
    dfs(node.left);
    dfs(node.right);
  }
  dfs(root);
  return res;
}

/*
Given the root of a Binary Tree, write a recursive function that returns an array containing the postorder traversal of the tree.

Input: Binary Tree: 4 2 5 3 -1 7 6 -1 9 -1 -1 8 -1 1
Output: [1, 9, 3, 2, 7, 8, 6, 5, 4]
*/

function recursivePostorder(root) {
  let res = [];

  function dfs(node) {
    if (!node) return;
    dfs(node.left);
    dfs(node.right);
    res.push(node.val);
  }
  dfs(root);
  return res;
}

/*
Given the root of a Binary Tree, create a function that performs a postorder traversal using two stacks and returns an array containing the traversal sequence.

Input:Binary Tree: 4 2 5 3 -1 7 6 -1 9 -1 -1 8 -1 1  
Output:[1, 9, 3, 2, 7, 8, 6, 5, 4] 
*/
function iterativePostorder2Stacks(root) {
  if (!root) return [];
  let stack1 = [root];
  let stack2 = [];
  let result = [];

  while (stack1.length) {
    let curr = stack1.pop();
    stack2.push(curr);

    if (curr.left) stack1.push(curr.left);
    if (curr.right) stack1.push(curr.right);
  }

  // Reverse order
  while (stack2.length) {
    result.push(stack2.pop().val);
  }
  return result;
}

/*
Given the root of a Binary Tree, return the preorder, inorder and postorder traversal sequence of the given tree by making just one traversal.

Binary Tree: 4 2 5 3 -1 7 6 -1 9 -1 -1 8 -1 1
Output: Preorder: [4, 2, 3, 9, 1, 5, 7, 6, 8], Inorder: [3, 1, 9, 2, 4, 7, 5, 8, 6], Postorder: [1, 9, 3, 2, 7, 8, 6, 5, 4] 
*/
function allTraversals(root) {
  if (!root) return [[], [], []];

  let pre = [],
    post = [],
    inOrder = [];
  let stack = [[root, 1]];

  while (stack.length) {
    let [node, state] = stack.pop();

    // preorder
    if (state === 1) {
      pre.push(node.val);
      stack.push([node, 2]);

      if (node.left) stack.push([node.left, 1]);
    }
    // inorder
    else if (state === 2) {
      inOrder.push(node.val);
      stack.push([node, 3]);
      if (node.right) stack.push([node.right, 1]);
    }
    // postorder
    else {
      post.push(node.val);
    }
  }
  return [pre, inOrder, post];
}

// Build tree

function buildTree(arr) {
  if (!arr.length || arr[0] === null) return null;

  let root = new TreeNode(arr[0]);
  let queue = [root];
  let i = 1;

  while (i < arr.length) {
    let current = queue.shift();

    if (arr[i] !== null) {
      current.left = new TreeNode(arr[i]);
      queue.push(current.left);
    }
    i++;

    if (i < arr.length && arr[i] !== null) {
      current.right = new TreeNode(arr[i]);
      queue.push(current.right);
    }
    i++;
  }

  return root;
}

// Test
let root = buildTree([3, 9, 20, null, null, 15, 7]);
// console.log(root);
console.log(levelOrder(root));

console.log(allTraversals(root));

console.log(iterativePreorder(root));
console.log(recursivePreorder(root));

console.log(iterativeInorder(root));
console.log(recursiveInorder(root));

console.log(recursivePostorder(root));

console.log(iterativePostorder2Stacks(root));
