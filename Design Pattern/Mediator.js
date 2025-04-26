/* Mediator pattern has the ability to manage complex communication without direct coupling between different objectx */

/* 

ChatMediator

    mediator
    facilitating communication between User objects (colleagues)

User 

    interacts with mediator to send/recieve messages
    When user sends a message, mediator relays message to other users.

Mediator

    maintains list of users
    ensures messages sent by one user are received by all other


*/

// Mediator interface

class Mediator {
  send(message, colleague) {}
}

// ConcreteMediator

class ChatMediator extends Mediator {
  constructor() {
    super();
    this.users = [];
  }

  addUser(user) {
    this.users.push(user);
  }

  send(message, sender) {
    this.users.forEach((user) => {
      if (user !== sender) {
        user.receive(message);
      }
    });
  }
}

// Colleague

class User {
  constructor(name, mediator) {
    this.name = name;
    this.mediator = mediator;
  }

  send(message) {
    console.log(`${this.name} sends: ${message}`);
    this.mediator.send(message, this);
  }

  receive(message) {
    console.log(`${this.name} receives: ${message}`);
  }
}

// Test

const mediator = new ChatMediator();
const user1 = new User('Saksham1', mediator);
const user2 = new User('Saksham2', mediator);
const user3 = new User('Saksham3', mediator);

mediator.addUser(user1);
mediator.addUser(user2);
mediator.addUser(user3);

user1.send('Hello everyone');
user2.send('Hi Saksham1');
