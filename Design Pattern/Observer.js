/*
Observer pattern

    - known as pub-sub (publication/subscription) pattern
    - if we are subscribed to the publication, we will be notified if something is published in the publication

    2 types of participants
        - Host
            maintains list of observers
            provides options to subscribe/unsubscribe
            notifies observer when state changes
        
        - Observer
            has a function that gets called/invoked everytime a state changes

*/

const Move = function () {
  //a constructor function (like a class)
  this.subscribers = []; //initializes an empty array to keep track of all functions (observers) that have subscribed.

  this.subscribe = function (fn) {
    this.subscribers.push(fn);
  };

  this.unsubscribe = function (fn) {
    this.subscribers = this.subscribers.filter((e) => e !== fn);
  };

  this.fire = function (dataToBroadcast, thisObj) {
    const scope = thisObj || undefined;
    this.subscribers.forEach((e) => {
      e.call(scope, dataToBroadcast);
    });
  };
};

//1st observer
const moveHandler1 = function (item) {
  console.log('fired: ' + item);
};

//2nd observer
const moveHandler2 = function (item) {
  console.log('Moved: ' + item);
};

const move = new Move();

//subscribe 1st observer
move.subscribe(moveHandler1);
move.fire('event #1');

//unsubscribe 1st observer
move.unsubscribe(moveHandler1);
move.fire('event #2');

//subscribe 1st and 2nd observer
move.subscribe(moveHandler1);
move.subscribe(moveHandler2);
move.fire('event #3');
