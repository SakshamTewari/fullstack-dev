/*
Add two numbers represented as Linked Lists.

Example 1:
Input: num1 = 243, num2 = 564
Output:sum = 807; L = [7,0,8]
Explanation: Since the digits are stored in reverse order, reverse the numbers first to get the or original number and then add them as → 342 + 465 = 807.
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function addTwoNumbers(head1, head2) {
  let dummy = new Node(0);
  let curr = dummy;
  let carry = 0;

  while (head1 !== null || head2 !== null || carry) {
    let sum = head1.value + head2.value + carry;
    carry = Math.floor(sum / 10);
    curr.next = new Node(sum % 10);
    curr = curr.next;

    if (head1) head1 = head1.next;
    if (head2) head2 = head2.next;
  }
  return dummy.next;
}

/*
Given the head of a singly linked list representing a positive integer number. Each node of the linked list represents a digit of the number, with the 1st node containing the leftmost digit of the number and so on. 
The task is to add one to the value represented by the linked list and return the head of a linked list containing the final value.

The number will contain no leading zeroes except when the value represented is zero itself.
*/
function addOne(head) {
  // reverse the list
  head = reverseList(head);
  let curr = head;
  let carry = 1;

  while (curr && carry) {
    let sum = curr.value + carry;
    curr.value = sum % 10;
    carry = Math.floor(sum / 10);

    // if no next node and still have carry
    if (curr.next === null && carry) {
      curr.next = new Node(carry);
      carry = 0;
    }
    curr = curr.next;
  }
  // reverse again
  head = reverseList(head);
  return head;

  function reverseList(head) {
    let prev = null,
      curr = head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev;
  }
}

// Test
let head1 = new Node(5);
head1.next = new Node(4);
head1.next.next = new Node(3);

let head2 = new Node(5);
head2.next = new Node(4);
head2.next.next = new Node(2);

console.log(addTwoNumbers(head1, head2));
console.log(addOne(head1));
