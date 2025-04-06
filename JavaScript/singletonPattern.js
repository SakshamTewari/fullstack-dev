/* 
Singleton pattern

- ensures that only one instance of an object is created throughout the lifetime of the application. 
  If you request the instance multiple times, you get the same one.
*/

const Singleton = (function () {
  let instance;

  function createInstance() {
    const object = new Object('I am the instance');
    return object;
  }

  return {
    getInstance: function () {
      console.log('inside getInstance');
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

const obj1 = Singleton.getInstance();
console.log(obj1);
const obj2 = Singleton.getInstance();
console.log(obj2);
