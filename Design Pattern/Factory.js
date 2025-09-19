/*
    Factory

    - creational pattern
    - way to create objects without specifying exact class of object that will be created
    - defines method for creating objects
*/

/* 
Implementation 1

    - creating different shapes (circle, square)
*/

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  draw() {
    console.log(`Drawing circle with radius ${this.radius}`);
  }
}

class Square {
  constructor(side) {
    this.sid = side;
  }
  draw() {
    console.log(`Drawing square with side ${this.side}`);
  }
}

class ShapeFactory {
  createShape(type, dimension) {
    switch (type) {
      case 'circle':
        return new Circle(dimension);
      case 'square':
        return new Square(dimension);
      default:
        throw new Error('Shape not recognized');
    }
  }
}

// Usage
const factory = new ShapeFactory();
const circle = factory.createShape('circle', 5);
circle.draw();

/*
Implementation 2

    - creating different types of user notifications (Email, SMS, push notifications) using factory
*/

class EmailNotification {
  constructor(email, message) {
    this.email = email;
    this.message = message;
  }
  send() {
    console.log(`Email notification ${this.email}: ${this.message}`);
  }
}

class SMSNotification {
  constructor(phone, message) {
    this.phone = phone;
    this.message = message;
  }
  send() {
    console.log(`Email notification ${this.phone}: ${this.message}`);
  }
}

class PushNotification {
  constructor(deviceId, message) {
    this.deviceId = deviceId;
    this.message = message;
  }
  send() {
    console.log(`Email notification ${this.deviceId}: ${this.message}`);
  }
}

class NotificationFactory {
  createNotification(type, config) {
    switch (type) {
      case 'email':
        return new EmailNotification(config.email, config.message);
      case 'sms':
        return new SMSNotification(config.phone, config.message);
      case 'push':
        return new PushNotification(config.deviceId, config.message);
      default:
        throw new Error('Type not recognised');
    }
  }
}
