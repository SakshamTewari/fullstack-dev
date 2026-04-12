/*
Given a linked list containing only 0's, 1's, and 2's, sort the linked list by rearranging the links (not by changing the data values).

Input: 1 -> 2 -> 0 -> 1 -> 0 -> 2 -> NULL
Output: 0 -> 0 -> 1 -> 1 -> 2 -> 2 -> NULL
*/
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function sortZeroOneTwo(head) {
  let curr = head;
  let zeroDummy = new Node(-1);
  let oneDummy = new Node(-1);
  let twoDummy = new Node(-1);
  let zeroTail = zeroDummy,
    oneTail = oneDummy,
    twoTail = twoDummy;

  while (curr) {
    if (curr.value === 0) {
      zeroTail.next = curr;
      zeroTail = zeroTail.next;
    } else if (curr.value === 1) {
      oneTail.next = curr;
      oneTail = oneTail.next;
    } else {
      twoTail.next = curr;
      twoTail = twoTail.next;
    }
    curr = curr.next;
  }

  zeroTail.next = oneDummy.next ? oneDummy.next : twoDummy.next;
  oneTail.next = twoDummy.next;
  twoTail.next = null;

  return zeroDummy.next;
}

function printList(head) {
  let curr = head;
  while (curr) {
    console.log(curr.value);
    curr = curr.next;
  }
}

// Test
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(0);
head.next.next.next = new Node(1);
head.next.next.next.next = new Node(2);
head.next.next.next.next.next = new Node(0);

let sortedHead = sortZeroOneTwo(head);
printList(sortedHead);
