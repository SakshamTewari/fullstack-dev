/*
Given an object which can have a function as a value at a nested level, 
create a function that will accept arguments as input and pass it through all the functions in the input object and return the computed value.

Example

Input:
{
  a : {
    b : (a,b,c) => a+b+c,
    c : (a,b,c) => a+b-c,
  },
  d : (a,b,c) => a-b-c
}

Fn(obj)(1,1,1);

Output:
{
  a : {
    b : 3,
    c : 1
  },
  d: -1
}
*/

function pipe(obj) {
  return function (...args) {
    const result = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
      let val = obj[key];
      if (typeof val === "function") {
        result[key] = val(...args);
      } else if (val && typeof val === "object") {
        result[key] = pipe(val)(...args);
      }
    }
    return result;
  };
}

/*
Create a function that accepts multiple functions as an argument and a value and run this value through each function and return the final  output.

Input:
const val = { salary: 10000 };

const getSalary = (person) => person.salary
const addBonus = (netSalary) => netSalary + 1000;
const deductTax = (grossSalary) => grossSalary - (grossSalary * .3);

const result = pipe(
  getSalary,
  addBonus,
  deductTax 
)(val);

Output:
7700
*/
function pipe2(...fns) {
  return function (val) {
    for (let f of fns) {
      val = f(val);
    }
    return val;
  };
}

// Test

let test = {
  a: {
    b: (a, b, c) => a + b + c,
    c: (a, b, c) => a + b - c,
  },
  d: (a, b, c) => a - b - c,
  e: 1,
  f: true,
};

console.log(pipe(test)(1, 1, 1));

const val = { salary: 10000 };

const getSalary = (person) => person.salary;
const addBonus = (netSalary) => netSalary + 1000;
const deductTax = (grossSalary) => grossSalary - grossSalary * 0.3;

const result = pipe2(getSalary, addBonus, deductTax)(val);

console.log(result);
