/*
Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. 
If the two linked lists have no intersection at all, return null.
For example, the following two linked lists begin to intersect at node c1:


Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
Output: Intersected at '8'

Input: intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
Output: Intersected at '2'

Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
Output: No intersection
*/
function ListNode(val) {
  this.val = val;
  this.next = null;
}

function getIntersectionNode(headA, headB) {
  let currA = headA;
  let currB = headB;

  while (currA != currB) {
    if (currA === null) currA = headB;
    else currA = currA.next;
    if (currB === null) currB = headA;
    else currB = currB.next;
  }
  return currA;
}

// Test
// Shared part
let intersect = new ListNode(8);
intersect.next = new ListNode(4);
intersect.next.next = new ListNode(5);

// List A
let headA = new ListNode(4);
headA.next = new ListNode(1);
headA.next.next = intersect;

// List B
let headB = new ListNode(5);
headB.next = new ListNode(6);
headB.next.next = new ListNode(1);
headB.next.next.next = intersect;

console.log(getIntersectionNode(headA, headB));
