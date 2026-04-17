/*
Given the head of a singly linked list, reverse the list, and return the reversed list.

Input: head = [1,2]
Output: [2,1]
*/

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

class DoublyListNode {
  constructor(val, next, prev) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

var reverseList = function (head) {
  if (head == null || head.next == null) return head;

  //0 <-1 2-3-4 5
  let prev = null;
  let curr = head;
  while (curr != null) {
    let nextNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }
  return prev;
};

function reverseDoublyList(head) {
  let curr = head;
  let temp = null;

  while (curr) {
    // swap next and prev
    temp = curr.prev;
    curr.prev = curr.next;
    curr.next = temp;

    // move to next (actually prev now)
    curr = curr.prev;
  }

  // fix head
  if (temp !== null) {
    head = temp.prev;
  }
  return head;
}

function printList(head) {
  let curr = head;
  let result = [];

  while (curr) {
    result.push(curr.val);
    curr = curr.next;
  }

  console.log(result.join(" <-> "));
}

// Test

let headDLL = new DoublyListNode(1);
headDLL.next = new DoublyListNode(2);
headDLL.next.prev = headDLL;
headDLL.next.next = new DoublyListNode(3);
headDLL.next.next.prev = headDLL.next;

console.log(printList(reverseDoublyList(headDLL)));
