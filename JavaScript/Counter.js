/*
Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

 

Example 1:

Input: 
n = 10 
["call","call","call"]
Output: [10,11,12]
Explanation: 
counter() = 10 // The first time counter() is called, it returns n.
counter() = 11 // Returns 1 more than the previous time.
counter() = 12 // Returns 1 more than the previous time.



When, Where, What, and How to use closure!!!
First of all closure is not something you create it's something that the language has created for itself for appropriate development and we need to crack this code that how the language uses it.

"To be honest, a good developer's greatest fear is discovering that something is working but not knowing how it works."

What is Closure ?
A closure is created when a function is defined inside another function, and the inner function references variables in the outer function's scope. When the inner function is returned from the outer function, it retains a reference to the outer function's scope, and can continue to access those variables even after the outer function has finished executing. Vice-Versa is not true!!
In simple terms a closure can "remember" values from its outer function's scope and use them later, even if the outer function has returned and those values would normally be out of scope.
When to use closure concept ?
FIrst let's summarize the definition as usually the definition gives the answer for when to use..

From definition you can see that it's used for retrival of values from outer parent function so we can understand that closure can be used for retrival of dead values which have become out of scope. also we can comprehend that it can used for privating some varibles or function.
Thus closures are useful for creating private variables and functions, implementing partial function application, and preserving state in asynchronous code.
While writing the code whenever there is a need for these types of thing try to incorporate this closure concept i.e. In a programmer languge it's called lexical environment
*/
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  return function () {
    return n++;
  };
};

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
