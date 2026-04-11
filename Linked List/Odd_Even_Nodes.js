/*
 Given the head of a singly linked list. Group all the nodes with odd indices followed by all the nodes with even indices and return the reordered list. 
 Consider the 1st node to have index 1 and so on. 
 The relative order of the elements inside the odd and even group must remain the same as the given input.

Input: 1→2→3→4→5→6→Null
Output: 2→4→6→1→3→5→Null
Explanation : Odd Nodes in LinkedList are 1,3,5 and Even Nodes in LinkedList are 2,4,6
In Modified LinkedList all even Nodes comes before all Odd Nodes. So Modified LinkedList looks like 2→4→6→1→3→5→Null. Order of even and odd Nodes is 
maintained in modified LinkedList.
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function oddEvenList(head) {
  if (head === null) return null;
  let oddHead = null,
    oddTail = null;
  let evenHead = null,
    evenTail = null;

  let curr = head;

  while (curr !== null) {
    if (curr.value % 2 === 0) {
      if (!evenHead) {
        evenHead = evenTail = curr;
      } else {
        evenTail.next = curr;
        evenTail = curr;
      }
    } else {
      if (!oddHead) {
        oddHead = oddTail = curr;
      } else {
        oddTail.next = curr;
        oddTail = curr;
      }
    }
    curr = curr.next;
  }

  // if no even node found
  if (!evenHead) return oddHead;
  // if no odd node found
  if (!oddHead) return evenHead;

  // combine
  evenTail.next = oddHead;
  oddTail.next = null;

  return evenHead;
}

function printList(head) {
  let temp = head;
  while (temp !== null) {
    console.log(temp.value + " ");
    temp = temp.next;
  }
}

// Test
// Creating linked list: 17 -> 15 -> 8 -> 12 -> 10 -> 5 -> 4
let head = new Node(17);
head.next = new Node(15);
head.next.next = new Node(8);
head.next.next.next = new Node(12);
head.next.next.next.next = new Node(10);
head.next.next.next.next.next = new Node(5);
head.next.next.next.next.next.next = new Node(4);

let newHead = oddEvenList(head);
printList(newHead);
