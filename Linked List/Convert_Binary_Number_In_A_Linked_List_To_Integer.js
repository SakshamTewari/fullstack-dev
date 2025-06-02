/*
Given head which is a reference node to a singly-linked list. 
The value of each node in the linked list is either 0 or 1. 
The linked list holds the binary representation of a number.

Return the decimal value of the number in the linked list.

The most significant bit is at the head of the linked list.

Input: head = [1,0,1]
Output: 5
Explanation: (101) in base 2 = (5) in base 10

Input: head = [0]
Output: 0
*/
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function getDecimalValue(head) {
  if (head === null) return 0;

  let num = 0;
  while (head !== null) {
    num = num * 2 + head.val;
    head = head.next;
  }
  return num;
}

// Test

let node4 = new ListNode(1);
let node3 = new ListNode(0, node4);
let node2 = new ListNode(1, node3);
let node1 = new ListNode(1, node2);

console.log(getDecimalValue(node1));
