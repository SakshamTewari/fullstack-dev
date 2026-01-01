/*
Given a doubly linked list, The task is to find the size of the given doubly linked list.

Example:

Input :  1<->2<->3<->4
output : 4
Explanation: The size is 4 as there are 4 nodes in the doubly linked list. 

Input :  1<->2
output : 2
*/

class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
    this.prev = null;
  }
}

function sizeOfDoublyList(head) {
  let size = 0;
  let curr = head;
  while (curr !== null) {
    size++;
    curr = curr.next;
  }
  return size;
}

// Test
let head = new Node(1);
head.next = new Node(2);
head.next.prev = head;
head.next.next = new Node(3);
head.next.next.prev = head.next;
head.next.next.next = new Node(4);
head.next.next.next.prev = head.next.next;

console.log(sizeOfDoublyList(head));
