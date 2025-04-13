/* 

Determine if the function is called with the 'new' keyword

   - myFunction();  // regular function call
     When called without new, this might refer to the global object (in non-strict mode) or be undefined (in strict mode).

   - new myFunction();  // used as a constructor
     When called with new, a new object is created, and this refers to that new object.

*/

/*Pre-ES6
  object instanceof Constructor
It returns true if:
object was created using that Constructor (or inherits from it somewhere in the prototype chain).
*/

function checkCall() {
  if (!(this instanceof checkCall)) {
    console.log('called without new');
  } else {
    console.log('called with new');
  }
}

/*ES6 : new.target == undefined for non-constructor calls*/
function checkCallES6() {
  if (new.target === undefined) {
    console.log('called without new, normal function call');
  } else {
    console.log('called with new, constructor call'); // new.target returns reference to the constructor or function
  }
}

checkCallES6();
const fun1 = new checkCallES6();
