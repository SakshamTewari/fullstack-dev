/*
Design a stack with the following operations.

push(Stack s, x): Adds an item x to stack s 
pop(Stack s): Removes the top item from stack s 
merge(Stack s1, Stack s2): Merge contents of s2 into s1.

Time Complexity of all above operations should be O(1). 
*/

class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(x) {
    const node = new Node(x);
    node.next = this.top;
    this.top = node;
  }

  pop() {
    if (!this.top) return null;
    const val = this.top.val;
    this.top = this.top.next;
    return val;
  }

  //O(1) merge
  merge(s2) {
    if (!s2.top) return;

    //The loop to find bottom is needed only if you want order preserved
    let temp = s2.top;
    while (temp.next) {
      temp = temp.next;
    }

    temp.next = this.top;
    this.top = s2.top;
    s2.top = null;
  }

  print() {
    let curr = this.top;
    let res = [];
    while (curr) {
      res.push(curr.data);
      curr = curr.next;
    }
    console.log(res.join("->"));
  }
}

// Test
// create stacks
let s1 = new Stack();
let s2 = new Stack();

// push elements
s1.push(3);
s1.push(2);
s1.push(1); // s1: 1 -> 2 -> 3

s2.push(5);
s2.push(4); // s2: 4 -> 5

console.log("Stack s1:");
s1.print();

console.log("Stack s2:");
s2.print();

// merge s2 into s1
s1.merge(s2);

console.log("After merge (s1):");
s1.print();

console.log("After merge (s2 should be empty):");
s2.print();

// pop test
console.log("Pop from s1:", s1.pop());
s1.print();
