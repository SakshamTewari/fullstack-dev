/*
Given the head of a doubly linked list with its values sorted in non-decreasing order. 
Remove all duplicate occurrences of any value in the list so that only distinct values are present in the list.

Return the head of the modified linked list.

Input: head -> 1 <-> 1 <-> 3 <-> 3 <-> 4 <-> 5
Output: head -> 1 <-> 3 <-> 4 <-> 5
Explanation: Duplicate occurences of 1 and 3 are deleted
*/
class Node {
  constructor(val, prev, next) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

function removeDuplicates(head) {
  if (head === null) return null;
  let curr = head;

  while (curr && curr.next) {
    if (curr.val === curr.next.val) {
      // skip the next node
      curr.next = curr.next.next;
      if (curr.next) curr.next.prev = curr;
    } else {
      curr = curr.next;
    }
  }
  return head;
}

// if list is unsorted, use Set
function removeDuplicatesUnsorted(head) {
  let set = new Set();
  let curr = head;

  while (curr) {
    if (set.has(curr.val)) {
      // skip current node
      if (curr.prev) curr.prev.next = curr.next;
      if (curr.next) curr.next.prev = curr.prev;
    } else {
      set.add(curr.val);
    }
    curr = curr.next;
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
  return result.join("<->");
}

// Test
let list = new Node(1);
list.next = new Node(1);
list.next.prev = list;
list.next.next = new Node(3);
list.next.next.prev = list.next;
list.next.next.next = new Node(3);
list.next.next.next.prev = list.next.next;
list.next.next.next.next = new Node(4);
list.next.next.next.next.prev = list.next.next.next;
list.next.next.next.next.next = new Node(5);
list.next.next.next.next.next.prev = list.next.next.next.next;

console.log(printList(removeDuplicates(list)));
