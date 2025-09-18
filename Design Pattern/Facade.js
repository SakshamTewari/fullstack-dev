/*
    Facade

    - hides complexities of system and provides an interface to the client
    - useful in dealing with complex libraries
    - only expose subset of functionality to client

*/

class Inventory {
  checkStock(item) {
    console.log(`Checking for ${item}`);
    return true;
  }
  reserveItem(item) {
    console.log(`${item} reserved`);
  }
}

class Payment {
  processPayment(amount) {
    console.log(`Processing payment of ${amount}`);
    return true;
  }
}

class Shipping {
  arrangeShipping(item, address) {
    console.log(`Shipping ${item} to ${address}`);
  }
}

class Notification {
  sendEmail(recipient, message) {
    console.log(`Sending email to ${recipient}: ${message}`);
  }
}

class OrderFacade {
  constructor(inventory, payment, shipping, notification) {
    this.inventory = inventory;
    this.payment = payment;
    this.shipping = shipping;
    this.notification = notification;
  }

  placeOrder(item, address, email, amount) {
    if (!this.inventory.checkStock(item)) {
      console.log('Item out of stock');
      return;
    }
    if (!this.payment.processPayment(amount)) {
      console.log('Payment failed');
      return;
    }
    this.inventory.reserveItem(item);
    this.shipping.arrangeShipping(item, address);
    this.notification.sendEmail(
      email,
      `Your order for ${item} has been placed`,
    );
    console.log('Order placed successfully');
  }
}

const inventory = new Inventory();
const payment = new Payment();
const shipping = new Shipping();
const notification = new Notification();
const orderFacade = new OrderFacade(inventory, payment, shipping, notification);
orderFacade.placeOrder('Laptop', '123 Street', '[email protected', 1200);
/*
Why this is powerful

Simplifies the interface: Client only needs to call placeOrder.
Encapsulation: If later shipping logic changes (say, use DHL API instead of console.log), only OrderFacade needs to change — client code remains the same.
Consistency: The order of steps (check stock → pay → reserve → ship → notify) is guaranteed.


Why classes look “complex”

It looks like a lot of classes because each responsibility (Inventory, Payment, Shipping, Notification) is separated.
In a real project, those classes might be entire libraries or APIs.
The Facade is there to hide the mess and give you a clean, single method.
*/
