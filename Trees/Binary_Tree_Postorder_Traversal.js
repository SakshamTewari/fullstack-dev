/*
Given the root of a binary tree, return the postorder traversal of its nodes' values.

 Example 1:

Input: root = [1,null,2,3]
Output: [3,2,1]
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  let res = [];

  function postorder(root) {
    if (root === null) {
      return;
    }
    postorder(root.left);
    postorder(root.right);
    res.push(root.val);
  }

  postorder(root);
  return res;
};
