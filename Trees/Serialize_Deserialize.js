/*
Given a Binary Tree, design an algorithm to serialise and deserialise it. There is no restriction on how the serialisation and deserialization takes place. But it needs to be ensured that the serialised binary tree can be deserialized to the original tree structure. 
Serialisation is the process of translating a data structure or object state into a format that can be stored or transmitted (for example, across a computer network) and reconstructed later. 
The opposite operation, that is, extracting a data structure from stored information, is deserialization.

Input:Binary Tree: 1 2 3 -1 -1 4 5
Output:After Serialisation: 1,2,3,#,#,4,5,#,#,#,#, After Deserialization: (Original Tree Back)	

*/

class TreeNode {
  constructor(val, left, right) {
    this.val = val || 0;
    this.left = left || null;
    this.right = right || null;
  }
}

// Serialize

function serialize(root) {
  if (!root) return "";

  let queue = [root];
  let result = [];

  while (queue.length) {
    let node = queue.shift();

    if (node === null) {
      result.push("null");
      continue;
    }

    result.push(node.val);

    queue.push(node.left);
    queue.push(node.right);

    // result = [1,2,3,"null","null"....]
  }
  return result.join(","); // "1,2,3,null,null..."
}

// Deserialize

function deserialize(data) {
  if (!data) return null;

  let nodes = data.split(",");
  let root = new TreeNode(Number(nodes[0]));

  let queue = [root];
  let i = 1;

  while (queue.length) {
    let node = queue.shift();

    // left child
    if (nodes[i] !== "null") {
      node.left = new TreeNode(Number(nodes[i]));
      queue.push(node.left);
    }
    i++;

    // right child
    if (nodes[i] !== "null") {
      node.right = new TreeNode(Number(nodes[i]));
      queue.push(node.right);
    }
    i++;
  }
  return root;
}

// Test

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.right.left = new TreeNode(4);

const serialized = serialize(root);
const deserialized = deserialize(serialized);

console.log(serialized);
console.log(deserialized);
