/* 
There is a singly-linked list head and we want to delete a node node in it.
You are given the node to be deleted node. You will not be given access to the first node of head.
All the values of the linked list are unique, and it is guaranteed that the given node node is not the last node in the linked list.
Delete the given node

Input: head = [4,5,1,9], node = 5
Output: [4,1,9]

Input: head = [4,5,1,9], node = 1
Output: [4,5,9]
*/
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function deleteNode(node) {
  // delete the given node by copying the next node's value into it and bypassing the next node.
  node.val = node.next.val;
  node.next = node.next.next;
}

// Test
// let list = new ListNode(1, new ListNode(2, new ListNode(3)));

// Build list: 1 -> 2 -> 3
let node3 = new ListNode(3);
let node2 = new ListNode(2, node3);
let node1 = new ListNode(1, node2);
console.log(deleteNode(node2));
