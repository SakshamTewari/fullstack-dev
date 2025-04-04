'use strict';

//this in global space
console.log(this);

//this inside a function
function showThis() {
  console.log(this);
}

showThis();

//this in strictmode - (this substitution)

//this value depends on how this is called (window)

//this inside a object's method
const obj1 = {
  name: 'Saksham',
  show: function () {
    console.log(this.name);
  },
};
obj1.show();

//call apply bind methods (sharing methods)
const obj2 = {
  name: 'Tewari',
};

obj1.show.call(obj2);

//this inside arrow function
const obj3 = {
  name: 'Saksham',
  show: () => {
    console.log(this);
  },
};
obj3.show();

//this inside nested arrow function
const obj4 = {
  name: 'Saksham',
  show1: () => {
    console.log('Inside show1:', this); // `this` refers to `window` (or `global` in Node.js)

    const show2 = () => {
      console.log('Inside show2:', this); // Still `window`, since arrow functions inherit `this` from their lexical scope
    };

    show2();
  },
};

obj4.show1();

//this inside DOM

//this inside class, constructor
