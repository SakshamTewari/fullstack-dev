/* function 'sum' that takes any number of arguments and returns their sum */

function sum(...args) {
  let result = 0;
  return args.reduce((acc, curr) => acc + curr, 0);
}

/*
let result = 0;
  for (let e of args) {
    result += e;
  }
  return result;
} 
*/
