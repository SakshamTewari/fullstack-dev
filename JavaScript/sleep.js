/* function that can halt execution of another function for given amount of time */

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));

  /*
    same as:

    setTimeout(() => {
        resolve(); // no value
    }, 1000);
  
  */
};

/* 
we can pass a value to resolve, like resolve('hello').
But it’s optional — it depends on whether you want the Promise to "resolve with" a value or not.
*/

sleep(500).then(() => {
  console.log('I run after 500 ms');
});

// using async/await
const performAction = async () => {
  await sleep(2000);
  console.log('I run after 2000 ms');
};

performAction();
