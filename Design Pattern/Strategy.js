/*
    Strategy
    - behavioural
    - enables selecting an algorithm's behaviour at runtime.
    - defines family of algorithms, encapsulates each one, and makes them interchangeable

        Components
        - Strategy: declares an interface common to all supported algorithms
        - ConcreteStrategy: implements algorithm defined in strategy interface
        - Context: maintains reference to strategy object and delegates allgorithm's execution to currently set strategy
*/

/* Implementation 1

    different strategies for calculating discounts

*/

// Strategy interface
class DiscountStrategy {
  calculate(price) {
    throw new Error('This method should be overridden!');
  }
}

// Concrete strategies
class NoDiscount extends DiscountStrategy {
  calculate(price) {
    return price;
  }
}

class PercentageDiscount extends DiscountStrategy {
  constructor(percentage) {
    super();
    this.percentage = percentage;
  }
  calculate(price) {
    return price - (price * this.percentage) / 100;
  }
}

class FixedDiscount extends DiscountStrategy {
  constructor(discount) {
    super();
    this.discount = discount;
  }
  calculate(price) {
    return price - this.discount;
  }
}

// Context
class ShoppingCart {
  constructor() {
    this.items = [];
    this.discountStrategy = new NoDiscount();
  }
  setDiscountStrategy(discountStrategy) {
    this.discountStrategy = discountStrategy;
  }
  addItem(item, price) {
    this.items.push({ item, price });
  }
  calculateTotal() {
    return this.items.reduce((total, item) => {
      return total + this.discountStrategy.calculate(item.price);
    }, 0);
  }
}

// Test
const cart = new ShoppingCart();
cart.addItem('Shirt', 50);
cart.addItem('Pants', 100);
console.log('Total without discount', cart.calculateTotal());
cart.setDiscountStrategy(new PercentageDiscount(10));
console.log('Total with 10% discount', cart.calculateTotal());
cart.setDiscountStrategy(new FixedDiscount(15));
console.log('Total with 15% discount', cart.calculateTotal());

/* Implementation 2 

    payment processing system that supports multiple payment methods

*/

class PaymentStrategy {
  pay(amount) {
    throw new Error('This method should be overridden!');
  }
}

class CreditCardPayment extends PaymentStrategy {
  constructor(cardNumber, cardHolder, expiryDate) {
    super();
    this.cardNumber = cardNumber;
    this.cardHolder = cardHolder;
    this.expiryDate = expiryDate;
  }
  pay(amount) {
    console.log(`Paid ${amount} using Credit Card: ${this.cardNumber}`);
  }
}

class PayPalPayment extends PaymentStrategy {
  constructor(email) {
    super();
    this.email = email;
  }
  pay(amount) {
    console.log(`Paid ${amount} using PayPal: ${this.email}`);
  }
}

// Context
class Order {
  constructor() {
    this.items = [];
    this.paymentStrategy = null;
  }
  setPaymentStrategy(paymentStrategy) {
    this.paymentStrategy = paymentStrategy;
  }
  addItem(item, price) {
    this.items.push({ item, price });
  }
  calculateTotal() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
  checkout() {
    const total = this.calculateTotal();
    if (!this.paymentStrategy) {
      throw new Error('No payment strategy set!');
    }
    this.paymentStrategy.pay(total);
  }
}

// Client
const order = new Order();
order.addItem('Laptop', 1000);
order.addItem('Phone', 500);
order.setPaymentStrategy(
  new CreditCardPayment('1234-5678', 'Saksham', '12/25'),
);
order.checkout();
order.setPaymentStrategy(new PayPalPayment('[email protected]'));
order.checkout();
