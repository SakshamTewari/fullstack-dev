/*Debouncing:- 
It is used to invoke/call/execute function only when things have stopped happening for a given specific time. 
For example, Call a search function to fetch the result when the user has stopped typing in the search box. 
If the user keeps on typing then reset the function.

Throttling:- 
It is used to restrict the no of times a function can be called/invoked/executed. 
For example, making an API call to the server on the user’s click. 
If the user spam the click then also there will be specific calls only. Like, make each call after 10 seconds. */

const throttle = (func, limit) => {
  let lastFunc;
  let lastRan;

  return function () {
    const args = arguments;
    if (!lastRan) {
      func.apply(this, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func.apply(this, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
};
