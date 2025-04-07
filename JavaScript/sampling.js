/*
Sampling

    - function that accepts a function as input and a count  and executes that input function once for a given count of calls
    - difference between sampling and throttling 
        throttling: limits execution once in a given time frame,
        sampling: limits exection once for a given count of calls

*/

const sampler = (fn, count, context) => {
  let calls = 0;

  return function (...args) {
    context = this ?? context; // either use 'this' or the passed context

    if (++calls !== count) return;
    fn.apply(context, args);
    calls = 0;
  };
};

const sample = sampler(() => console.log('hello'), 3);
sample();
sample();
sample(); //hello
sample();
sample();
sample(); //hello

//not getting an error because undefined is a valid context when calling apply, especially when the function we're applying doesn't use this.

/*
const logger = {
  prefix: 'LOG',
  log(msg) {
    console.log(`${this.prefix}: ${msg}`);
  }
};

const sampledLog = sampler(logger.log, 3, logger);

sampledLog("A"); // this = undefined, so fallback to context = logger
sampledLog("B");
sampledLog("C"); // ✅ prints "LOG: C"



*/
