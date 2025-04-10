/* Create a store class(hashSet) with set(key,value), get(key) and has(key) methods */

const Store = function () {
  this.list = {};

  this.set = function (key, value) {
    this.list[key] = value;
  };

  this.get = function (key) {
    return this.list[key];
  };

  this.has = function (key) {
    return !!this.list[key]; // !! is a double NOT operator, and it’s a trick to convert a value to a boolean — either true or false
  };
};

const store = new Store();
store.set('name', 'Saksham');
store.set('age', 28);
console.log(store.get('name'));
console.log(store.has('age'));
