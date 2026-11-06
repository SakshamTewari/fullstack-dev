/* 
Create a function makeCounter that returns a counter object with methods to increment, decrement,
reset.
Counter should maintain the current value
*/

function makeCounter(initialValue = 0) {
  let initial = initialValue;
  return {
    increment() {
      return ++initial;
    },
    decrement() {
      return --initial;
    },
    reset() {
      initial = initialValue; // if we dont't do this and just return initialValue, initial will never get reset for future increments/decrements
      return initial;
    },
  };
}

const counter = makeCounter(5);
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
console.log(counter.initial); // Encapsulation : as counter is not exposing its internal value directly

/* For method chaining : return 'this' 

function makeCounter(initialValue = 0) {
  let value = initialValue;

  return {
    increment() {
      value++;
      return this; // allow chaining
    },
    decrement() {
      value--;
      return this; // allow chaining
    },
    reset() {
      value = initialValue;
      return this; // allow chaining
    },
    getValue() {
      return value; // to fetch current value
    }
  };
}

// Usage:
const counter = makeCounter(5);

console.log(
  counter.increment().increment().decrement().reset().increment().getValue()
); // 6






*/
