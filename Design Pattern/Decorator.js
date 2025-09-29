/*
    Decorator
    - structural pattern
    - allows behaviour to be added to individual objects dynamically
    - without affecting behaviour of other objects from same class
*/

/* Implementation 1 

    notification system where we can decorate a message with various types of notifications like email/sms

    Notification acts as component with send method.
    EmailNotification and SMSNotification add their own behaviour to notification.
    Client code first creates BasicNotification and then decorates it with EmailNotification and SMSNotification.
    When send method is called, message is sent via both email and SMS

*/

// Component
class Notification {
  send(message) {
    console.log(`Sending notification: ${message}`);
  }
}

//Concrete Component
class BasicNotification extends Notification {
  send(message) {
    super.send(message);
  }
}

// Decorator
class NotificationDecorator extends Notification {
  constructor(notification) {
    super();
    this.notification = notification;
  }
  send(message) {
    this.notification.send(message);
  }
}

// Concrete Decorators
class EmailNotification extends NotificationDecorator {
  send(message) {
    super.send(message);
    console.log(`Sending email with message : ${message}`);
  }
}

class SMSNotification extends NotificationDecorator {
  send(message) {
    super.send(message);
    console.log(`Sending SMS with message : ${message}`);
  }
}

// Test
let notification = new BasicNotification();
notification = new EmailNotification(notification);
notification = new SMSNotification(notification);
notification.send('Hello, this is your notifications');
