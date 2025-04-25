/* 
Memento design pattern provides ability to restore an object to its previous state.
Useful for implementing 'undo' mechanisms.

    Components:
        Memento - stores internal state of Originator object and protects against access by anything other than Originator.
        Originator - creates memento containing snapshot of current internal state and uses memento to restore its state
        Caretaker - keeps memento but never operates/examines its contents


*/

/* TextEditor Implementation */

// Memento

class Memento {
  constructor(state) {
    this.state = state;
  }

  getState() {
    return this.state;
  }
}

// Originator

class TextEditor {
  constructor() {
    this.content = '';
  }

  setState(state) {
    this.content = state;
  }

  getState() {
    return this.content;
  }

  save() {
    return new Memento(this.content);
  }

  restore(memento) {
    this.content = memento.getState();
  }
}

// Caretaker

class History {
  constructor() {
    this.mementos = [];
  }

  addMemento(memento) {
    this.mementos.push(memento);
  }

  getMemento(index) {
    return this.mementos[index];
  }
}

/* Game Implementation */

// Memento

class PlayerMemento {
  constructor(state) {
    this.state = state;
  }

  getState() {
    return this.state;
  }
}

// Originator

class Player {
  constructor(name) {
    this.name = name;
    this.level = 1;
    this.health = 100;
  }

  setState(state) {
    this.level = state.level;
    this.health = state.health;
  }

  getState() {
    return {
      level: this.level,
      health: this.health,
    };
  }

  save() {
    return new PlayerMemento(this.getState());
  }

  restore(memento) {
    this.setState(memento.getState());
  }

  levelUp() {
    this.level += 1;
    this.health = 100;
    console.log(`${this.name} leveled up to level ${this.level}`);
  }

  takeDamage(damage) {
    this.health -= damage;
    console.log(
      `${this.name} took ${damage} damage, health is now ${this.health}`,
    );
  }
}

// Caretaker

class GameHistory {
  constructor() {
    this.mementos = [];
  }

  addMemento(memento) {
    this.mementos.push(memento);
  }

  getMemento(index) {
    return this.mementos[index];
  }
}
