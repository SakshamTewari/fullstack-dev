/* Arrays with Event Listeners

    - extend the array prototype and add the required methods to it
        listeners
        addListener(eventName, callback)
        pushWithEvent(eventName, items)
        popWithEvent(eventName)
        triggerEvent(eventName, args)
        removeListeners(eventNName, callback)

*/

Array.prototype.listeners = {}; // track events and their callbacks

Array.prototype.addListener = function (eventName, callback) {
  if (!this.listeners[eventName]) {
    this.listeners[eventName] = [];
  }
  this.listeners[eventName].push(callback);
};

Array.prototype.removeListener = function (eventName, callback) {
  if (this.listeners[eventName]) {
    this.listeners[eventName] = this.listeners[eventName].filter(
      (e) => e !== callback,
    );
  }
};

Array.prototype.triggerEvent = function (eventName, elements) {
  if (this.listeners[eventName]) {
    this.listeners[eventName].forEach((callback) => {
      callback(eventName, elements, this);
    });
  }
};

Array.prototype.pushWithEvent = function (eventName, args) {
  this.push(...args);
  this.triggerEvent(eventName, args);
};

Array.prototype.popWithEvent = function (event, args) {
  const element = this.pop();

  this.triggerEvent(event, element);
};

// Test

const arr = [];

const onAdd = (eventName, items, array) => {
  console.log('Items were added', items);
};

const onAddAgain = (eventName, items, array) => {
  console.log('Items were added again', items);
};

arr.addListener('add', onAdd);
arr.addListener('add', onAddAgain);
arr.addListener('remove', (eventName, item, array) => {
  console.log(item, 'was removed');
});
arr.pushWithEvent('add', [1, 2, 3, 'a', 'b']);
arr.removeListener('add', onAddAgain);
arr.pushWithEvent('add', [4, 5]);
arr.popWithEvent('remove');

console.log(arr);
