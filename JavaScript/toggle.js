/*  a Toggle function that accepts a list of arguments and toggles each of them when invoked in a cycle */

const toggle = (...args) => {
  // to track the cycle
  let current = -1;
  const length = args.length;

  // using closure to have access to current
  return function () {
    current = (current + 1) % length; // increment and reset to 0 when 1 cycle completes
    return args[current];
  };
};

const hello = toggle('hello', 'Saksham');
console.log(hello());
console.log(hello());
