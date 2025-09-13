/*
    Proxy : concept of doing things via an intermediary.
    - if we want to change something in the original source, we hand changes to proxy
    - proxy checks validations and then forwards the request to source

    JS has Proxy object that allows to create a proxy for another object.
        - takes two parameters: target object and handler object (defines methods that need to be intercepted)
*/

const person = {
  name: 'Saksham',
  age: 28,
  gender: 'male',
};

const personProxy = new Proxy(person, {
  get(target, property) {
    if (property === 'gender') console.log('Access denied!!');
    else return target[property];
  },
  set(target, property, value) {
    if (property === 'age') {
      if (value < 18 || value > 60) {
        console.log('Age must be between 18 and 60');
      } else {
        target[property] = value;
      }
    } else {
      target[property] = value;
    }
  },
});

console.log(personProxy.gender);

personProxy.age = 17;
console.log(personProxy.age);
