/* Mediator pattern has the ability to manage complex communication without direct coupling between different objectx 

    Mediator : declares an interface for communicating with colleague objects
    ConcreteMediator : implements mediator interface and coordiantes communication between colleague objects
    Colleague : each colleague knows its mediator object and communicates with mediator

*/

/*  Implementation #1

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

/* Implementation #2 : Air Traffic Control system */

class Mediator {
  notify(sender, event) {}
}

// Concrete Mediator

class ControlTower extends Mediator {
  constructor() {
    super();
    this.runwayFree = true;
    this.planes = [];
  }

  registerPlane(plane) {
    this.planes.push(plane);
  }

  notify(sender, event) {
    if (event === 'readyForLanding') {
      if (this.runwayFree) {
        console.log(`ControlTower: Plane ${sender.id} is clear to land`);
        this.runwayFree = false;
      } else {
        console.log(`ControlTower: Plane ${sender.id} is waiting to land`);
      }
    }
    if (event === 'landed') {
      console.log(`ControlTower: Plane ${sender.id} has landed`);
      this.runwayFree = true;
      this.checkWaitingPlanes();
    }
    if (event === 'readyForTakeOff') {
      if (this.runwayFree) {
        console.log(`ControlTower: Plane ${sender.id} is clear to take off`);
        this.runwayFree = false;
      } else {
        console.log(`ControlTower: Plane ${sender.id} is waiting to take off`);
      }
    }
    if (event === 'takenOff') {
      console.log(`ControlTower: Plane ${sender.id} has taken off`);
      this.runwayFree = true;
      this.checkWaitingPlanes();
    }
  }

  checkWaitingPlanes() {
    for (let plane of this.planes) {
      if (plane.state === 'waitingForLanding' && this.runwayFree) {
        this.notify(plane, 'readyForLanding');
        plane.state = 'landing';
        break;
      }
      if (plane.state === 'waitingForTakeOff' && this.runwayFree) {
        this.notify(plane, 'readyForTakeOff');
        plane.state = 'takingOff';
        break;
      }
    }
  }
}

// Colleague

class Plane {
  constructor(id, mediator) {
    this.id = id;
    this.mediator = mediator;
    this.state = 'onGround';
    mediator.registerPlane(this);
  }
  readyForLanding() {
    console.log(`Plane ${this.id}: Ready for landing`);
    this.state = 'waitingForLanding';
    this.mediator.notify(this, 'readyForLanding');
  }
  landed() {
    console.log(`Plane ${this.id}: Landed`);
    this.state = 'onGround';
    this.mediator.notify(this, 'landed');
  }
  readyForTakeOff() {
    console.log(`Plane ${this.id}: Ready for takeoff`);
    this.state = 'waitingForTakeOff';
    this.mediator.notify(this, 'readyForTakeOff');
  }
  takenOff() {
    console.log(`Plane ${this.id}: Taken Off`);
    this.state = 'inAir';
    this.mediator.notify(this, 'takenOff');
  }
}

// Test

const controlTower = new ControlTower();
const plane1 = new Plane('A1', controlTower);
const plane2 = new Plane('B2', controlTower);
const plane3 = new Plane('C3', controlTower);

plane1.readyForTakeOff();
plane2.readyForLanding();
plane3.readyForTakeOff();
plane1.takenOff();
plane2.landed();
