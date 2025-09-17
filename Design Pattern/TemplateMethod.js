/*
    Template Method
    - defines skeleton of an algorithm
    - allows subclasses to redefines certain steps of algorithm without changing algorithm's structure.
    - promotes code reuse
    -ensures core algorithm remains consistent

*/

// Abstract Class
class Game {
  play() {
    this.initialize();
    this.startPlay();
    this.endPlay();
  }
  initialize() {
    throw new Error('Initialize() must be implemented');
  }
  startPlay() {
    throw new Error('startPlay() must be implemented');
  }
  endPlay() {
    throw new Error('endPlay() must be implemented');
  }
}

// Concrete Class
class Soccer extends Game {
  initialize() {
    console.log('Soccer game Initialized!');
  }
  startPlay() {
    throw new Error('Soccer game started.');
  }
  endPlay() {
    throw new Error('Soccer game finished!');
  }
}

/*
    In this implementation,

    - Game abstract class defines template method play, which includes steps to initialize, start, and end of game.
    - Soccer implements these steps.
    - When play is called on instances of Soccer, it follows defined algorithm
*/

/*
What if Soccer does NOT implement initialize, startPlay, endPlay?

soccer.play() calls this.initialize().
Since Soccer didn’t override it, JS looks up the prototype chain → finds initialize() in Game.
That method throws an error:
This is intentional — the Template Method pattern relies on subclasses always implementing those steps. The error ensures you don’t forget.

*/
