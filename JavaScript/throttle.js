/*Debouncing:- 
It is used to invoke/call/execute function only when things have stopped happening for a given specific time. 
For example, Call a search function to fetch the result when the user has stopped typing in the search box. 
If the user keeps on typing then reset the function.

Throttling:- 
It is used to restrict the no of times a function can be called/invoked/executed. 
Throttling is a way/technique to restrict the number of function execution/calls.
For example, making an API call to the server on the user’s click. 
If the user spam the click then also there will be specific calls only. Like, make each call after 10 seconds. */

const throttle = (func, limit) => {
  let lastFunc;
  let lastRan;

  return function () {
    const args = arguments; // Store arguments
    const context = this; // Store `this` for later use

    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args); // Use stored args & context
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
};

/*
Implement a throttler that executes an array of tasks. 
When the  throttler is passed a number, only executes that number of the tasks and  passes the other tasks into a queue
*/

const throttleTasks = (tasks, count = tasks.length, callback, delay = 1000) => {
  let lastFunc;
  let lastRan;

  // track the task
  let queue = [];

  return function () {
    // store context
    const context = this;
    const args = arguments;

    //if the throttle is exectured the first time, run it immediately
    if (!lastRan) {
      queue = [...queue, ...tasks];
      const execute = queue.splice(0, count);
      callback(execute);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= delay) {
          queue = [...queue, ...tasks];
          const execute = queue.splice(0, count);
          callback(execute);
          lastRan = Date.now();
        }
      }, delay - (Date.now() - lastRan));
    }
  };
};
