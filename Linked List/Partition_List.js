/*
Given a linked list and a value x, partition it such that all nodes less than x come first, then all nodes with a value equal to x, and finally nodes with a value greater than x. 
The original relative order of the nodes in each of the three partitions should be preserved.

Examples: 

Input : 1 -> 4 -> 3 -> 2 -> 5 -> 2 -> 3, x = 3
Output: 1 -> 2 -> 2 -> 3 -> 3 -> 4 -> 5
*/

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function partitionList(head, x) {
  let lessHead = new Node(0);
  let equalHead = new Node(0);
  let greaterHead = new Node(0);

  let less = lessHead;
  let equal = equalHead;
  let greater = greaterHead;

  let curr = head;

  while (curr !== null) {
    if (curr.data < x) {
      less.next = curr;
      less = less.next;
    } else if (curr.data === x) {
      equal.next = curr;
      equal = equal.next;
    } else {
      greater.next = curr;
      greater = greater.next;
    }
    curr = curr.next;
  }
  greater.next = null;
  equal.next = greaterHead.next;
  less.next = equalHead.next;

  return lessHead.next;
}

function printList(head) {
  let curr = head;
  while (curr !== null) {
    console.log(curr.data);
    curr = curr.next;
  }
  console.log();
}

// Test
let head = new Node(1);
head.next = new Node(4);
head.next.next = new Node(3);
head.next.next.next = new Node(2);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(2);

head = partitionList(head, 3);
printList(head);
console.log(head);
