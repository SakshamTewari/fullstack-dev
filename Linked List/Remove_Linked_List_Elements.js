/*
Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]

Input: head = [], val = 1
Output: []

Input: head = [7,7,7,7], val = 7
Output: []
*/
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function removeElements(head, val) {
  if (head === null) return null;

  let sentinel = new ListNode(0);
  sentinel.next = head;
  let prev = sentinel;
  let curr = head;

  while (curr !== null) {
    if (curr.val === val) {
      prev.next = curr.next;
    } else {
      prev = curr;
    }
    curr = curr.next;
  }
  return sentinel.next;
}

// Test

// let list = new ListNode(1,new ListNode(2,new ListNode(3,new ListNode(4,))));

let node3 = new ListNode(3);
let node2 = new ListNode(2, node3);
let node1 = new ListNode(1, node2);
console.log(removeElements(node1, 3));
