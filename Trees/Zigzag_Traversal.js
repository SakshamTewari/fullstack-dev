/*
Given a Binary Tree, print the zigzag traversal of the Binary Tree. 
Zigzag traversal of a binary tree is a way of visiting the nodes of the tree in a zigzag pattern, alternating between left-to-right and right-to-left at each level.

Input:Binary Tree: 1 2 3 4 5 -1 6
Output: [[1],[3, 2],[4, 5, 6]]

Explanation: 

Level 1 (Root): Visit the root node 1 from left to right. Zigzag Traversal: [1]
Level 2: Visit nodes at this level in a right-to-left order. Zigzag Traversal:  [1], [3, 2]
Level 3: Visit nodes at this level in a left-to-right order. Zigzag Traversal:  [1], [3, 2], [4, 5, 6]
*/

class TreeNode {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function zigzagOrder(root) {
  if (!root) return [];

  let result = [];
  let queue = [root];
  let leftToRight = true;

  while (queue.length > 0) {
    let levelSize = queue.length;
    let currentLevel = [];
    for (let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift();
      const index = leftToRight ? i : levelSize - 1 - i;
      currentLevel[index] = currentNode.val;

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    leftToRight = !leftToRight;
    result.push(currentLevel);
  }

  return result;
}

// Test
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);

console.log(zigzagOrder(root));
