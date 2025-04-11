/*
Method Chaining

    - an object oriented paradigm
    - methods share the same reference, using 'this' (current context) from each method
    - using objects/functions

*/

// Problem with objects is we cannot create new instance of them
const calculatorObject = {
  total: 0,
  add: function (val) {
    this.total += val;
    return this; // return current object for chaining
  },
  subtract: function (val) {
    this.total -= val;
    return this; // return current object for chaining
  },
  multiply: function (val) {
    this.total *= val;
    return this; // return current object for chaining
  },
  divide: function (val) {
    this.total /= val;
    return this; // return current object for chaining
  },
};

calculatorObject.add(10).subtract(5).multiply(4).divide(5);
console.log(calculatorObject.total);

//Every time you do new calculatorFunction(), it creates a new object with its own total.
const calculatorFunction = function () {
  this.total = 0;
  this.add = (val) => {
    this.total += val;
    return this;
  };
  this.subtract = (val) => {
    this.total -= val;
    return this;
  };
  this.multiply = (val) => {
    this.total *= val;
    return this;
  };
  this.divide = (val) => {
    this.total /= val;
    return this;
  };
  this.value = () => this.total;
};

const calculator = new calculatorFunction();
calculator.add(10).subtract(2).multiply(2).divide(8);
console.log(calculator.value());

// Using Class
class Calculator {
  constructor() {
    this.total = 0;
  }

  add(val) {
    this.total += val;
    return this; // for chaining
  }

  subtract(val) {
    this.total -= val;
    return this;
  }

  multiply(val) {
    this.total *= val;
    return this;
  }

  divide(val) {
    this.total /= val;
    return this;
  }

  value() {
    return this.total;
  }
}

// Using function as closures => this way, we dont need to create constructors (using 'new') everytime and data won't duplicate too

// this is not really a closure as 'store' value is not private
const computeAmount = function () {
  return {
    store: 0, // inside return , so it is publicly accessible (amount.store)
    crore: function (val) {
      this.store += val * Math.pow(10, 7);
      return this;
    },
    lacs: function (val) {
      this.store += val * Math.pow(10, 5);
      return this;
    },
    thousand: function (val) {
      this.store += val * Math.pow(10, 3);
      return this;
    },
    hundred: function (val) {
      this.store += val * Math.pow(10, 2);
      return this;
    },
    ten: function (val) {
      this.store += val * 10;
      return this;
    },
    unit: function (val) {
      this.store += val;
      return this;
    },
    value: function () {
      return this.store;
    },
  };
};

const amount = computeAmount()
  .lacs(9)
  .lacs(1)
  .crore(5)
  .hundred(4)
  .ten(5)
  .unit(8)
  .value();
console.log(amount);

// using closures with 'store'variable private
const computeAmountClosure = function () {
  let store = 0;
  return {
    crore: function (val) {
      store += val * 1e7;
      return this;
    },
    // ...
    value: function () {
      return store;
    },
  };
};

const amounClosure = computeAmount();
console.log(amouamounClosurent.store); // undefined
console.log(amounClosure.value()); // ✅ correct
