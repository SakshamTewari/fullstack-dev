/*
Construct a BST from pre-order traversal

Input: preorder = [8, 5, 1, 7, 10, 12]
*/

class TreeNode {
    constructor(val, left, right){
        this.val = val || 0;
        this.left = left || null;
        this.right = right || null; 
    }
}

function bstFromPreorder(preorder){
    if(!preorder.length) return null;
    let root = new TreeNode(preorder[0]);

    let i=1;
    while(i < preorder.length && preorder[i] < root.val){
        i++;
    }
}