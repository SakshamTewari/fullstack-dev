/*
    Remove Cycle from Object
    - Given an object with cycle, remove the cycle or circular reference from it.
    - We have to create a function that will break the cycle
    - Two places where cycle removal can take place:
        1. normal use of object
        2. while creating the json string
*/

function List(val) {
  this.next = null;
  this.val = val;
}

const item1 = new List(10);
const item2 = new List(20);
const item3 = new List(30);

item1.next = item2;
item2.next = item3;
item3.next = item1;

// Normal use : using WeakSet
const removeCycle = (obj) => {
  const seen = new WeakSet([obj]);

  // recursively detects and deletes object references
  (function iterateObj(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === "object") {
          if (seen.has(obj[key])) {
            delete obj[key];
          } else {
            seen.add(obj[key]);
            // recursively iterate next objects
            iterateObj(obj[key]);
          }
        }
      }
    }
  })(obj);
};

// Using JSON.stringify() while creating JSON
const removeCycleJSON = () => {
  // form a closure over seen objects
  const seen = new WeakSet();

  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};

// Test
removeCycle(item1);
console.log(item1);
console.log(JSON.stringify(item1, removeCycleJSON()));
