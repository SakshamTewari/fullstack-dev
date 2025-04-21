function Stack() {
  let items = []; //this.items = []; if we want it to be public
  let top = 0;

  this.push = function (element) {
    items[top++] = element;
  };

  this.pop = function () {
    return items[--top];
  };

  this.peek = function () {
    return items[top - 1];
  };

  this.isEmpty = function () {
    return top === 0;
  };

  this.clear = function () {
    top = 0;
  };

  this.size = function () {
    return top;
  };

  this.getItems = function () {
    return items.slice(0, top);
  };
}

// Test
let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack.getItems());

// using Class and build in Array methods

class Stack {
  constructor() {
    this.items = [];
  }

  push = function (element) {
    this.items.push(element);
  };

  pop = function () {
    return this.items.pop();
  };

  peek = function () {
    return this.items[this.items.length - 1];
  };

  isEmpty = function () {
    return this.items.length === 0;
  };

  clear = function () {
    this.items.length = 0;
  };

  size = function () {
    return this.items.length;
  };
}
