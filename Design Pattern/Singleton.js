/*
In singleton design pattern, only one object is created for each interface (class or function)
and the same object is returned everytiime when the function or class is called.

useful when only 1 object is needed to coordinate actions across the system.
e.g: notification object, which sends notification across the system.

uses closures


instance is a private variable:
    It's declared inside the IIFE (Immediately Invoked Function Expression).
    No code outside can access or change it directly.
    Only the returned object (with getInstance) can interact with instance.

This prevents:
    Accidental reassignment
    External tampering
    Multiple instances
*/

const Singleton = (function () {
  let instance;

  function createInstance() {
    const object = new Object('I am the instance');
    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

const obj1 = Singleton.getInstance();
const obj2 = Singleton.getInstance();

console.log(obj1);
console.log(obj2);
console.log(Singleton.instance);
