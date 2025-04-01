/* Create a promise that will resolve after 3 seconds */

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('resolved now');
  }, 3000);
})
  .then((val) => {
    return 'I am ' + val;
  })
  .then((val) => console.log(val))
  .finally(() => console.log('task done!!'));

console.log('Promise #1: ', promise);

/* Create a promise that will reject after 3 seconds 
    
    - either use .then(null, onReject) or catch(onReject)
*/

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Error 404 not found');
  }, 3000);
}).then(null, (val) => {
  console.log("Error chained from 'then': ", val);
});

promise2
  //   .catch((val) => console.log("Error chained from 'catch': ", val))
  .then((val) => {
    console.log('After the error, I am being printed');
  })
  .finally(() => console.log('Finally, rejection is done !!'));

console.log('Promise #2: ', promise2);

/* Using async-await */

const promise3 = Promise.resolve('I am resolved using async-await');

const example = async (promise) => {
  try {
    const resp = await promise;
    return resp;
  } catch (error) {
    console.log(error);
  } finally {
    console.log('Task done using finally');
  }
};

/* await pauses execution until the promise resolves.

Once resolved, before returning resp, the finally block executes.

After finally, the function completes, and the resolved value is returned.*/
console.log(promise3);
example(promise3).then((val) => {
  console.log(val);
});
