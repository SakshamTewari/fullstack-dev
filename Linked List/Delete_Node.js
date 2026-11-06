/* 
There is a singly-linked list head and we want to delete a node node in it.
You are given the node to be deleted node. You will not be given access to the first node of head.
All the values of the linked list are unique, and it is guaranteed that the given node node is not the last node in the linked list.
Delete the given node

Input: head = [4,5,1,9], node = 5
Output: [4,1,9]

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

/*
Given a Linked List, delete the tail of the list and print the updated list.

Input: 0->1->2
Output: 0->1
*/

function deleteTail(head) {
  let curr = head;

  while (curr.next.next !== null) {
    curr = curr.next;
  }
  curr.next = null;
  return head;
}

/*
Given the head of a linked list of integers, delete the middle node of the linked list and return the modified head. 
However, if the linked list has an even number of nodes, delete the second middle node.
*/
function deleteMiddle(head){
  if(head === null || head.next === null) return null;
  let slow = head, fast = head, prev = null;
  // let slow = head, fast = head.next;      // to delete 1st middle

  while(fast !== null && fast.next !== null){
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  prev.next = slow.next;
  return head;
}

/*
Given a linked list and an integer N, the task is to delete the Nth node from the end of the linked list and print the updated linked list.

Input:  5->1->2, N=2
Output: 5->2
Explanation: The 2nd node from the end of the linked list is 1. Therefore, we get this result after removing 1 from the linked list.
*/
function deleteNthFromEnd(head, N){
  
}
// Test
// let list = new ListNode(1, new ListNode(2, new ListNode(3)));

// Build list: 1 -> 2 -> 3
let node3 = new ListNode(3);
let node2 = new ListNode(2, node3);
let node1 = new ListNode(1, node2);
console.log(deleteTail(node1));
console.log(deleteNode(node2));
