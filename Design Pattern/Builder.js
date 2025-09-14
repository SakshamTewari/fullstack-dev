/*
    Builder pattern (alternate name is method chaining)
    - part of creational design patterns
    - allows constructing complex objects step by step

*/

// In JS, we don't have to define Class to create objects
// We can use object literals
const p1 = {
  currency: 'INR',
  amount: 0,
  addAmount: function (val) {
    this.amout += val;
    return this;
  },
  setCurrency: function (currency) {
    this.currency = currency;
    return this;
  },
  pay: function () {
    console.log(`${this.currency} ${this.amount}`);
  },
};

p1.addAmount(100).addAmount(50).setCurrency('USD').pay();

// With Class
/*
addAmount(){} syntax means method is added to the prototype and not avalaible for each instance directly.
This saves memory. When we do p1.addAmount(), JS engine looks for addAmount method in p1 object first, if not found, it looks in prototype via __proto_ link.
Payment.prototype.addAmount = function (val) { ... };

addAmount = function(){} creates instance property for each object separately.
*/

class Payment {
  constructor(currency = 'INR', amount = 0) {
    this.currency = currency;
    this.amount = amount;
  }

  addAmount(val) {
    this.amount += val;
    return this;
  }

  setCurrency(currency) {
    this.currency = currency;
    return this;
  }

  pay() {
    console.log(`${this.currency} ${this.amount}`);
  }
}

const p2 = new Payment();
p2.addAmount(100).addAmount(50).setCurrency('USD').pay();
