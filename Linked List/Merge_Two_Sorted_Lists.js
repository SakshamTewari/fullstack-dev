/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let sentinel = new ListNode(0);

  let curr1 = list1;
  let curr2 = list2;
  let temp = sentinel;

  while (curr1 != null && curr2 != null) {
    if (curr1.val < curr2.val) {
      temp.next = curr1;
      curr1 = curr1.next;
    } else {
      temp.next = curr2;
      curr2 = curr2.next;
    }

    temp = temp.next;
  }

  while (curr1 != null) {
    temp.next = curr1;
    temp = temp.next;
    curr1 = curr1.next;
  }

  while (curr2 != null) {
    temp.next = curr2;
    temp = temp.next;
    curr2 = curr2.next;
  }

  return sentinel.next;
};
