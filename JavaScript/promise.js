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

/* Promise.all polyfill 

  - resolves when all promises inside are resolved or no looping item left
  - rejected even if any one of the promises is rejected
*/

const myPromiseAll = (taskList) => {
  const results = [];
  let promisesCompleted = 0;

  return new Promise((resolve, reject) => {
    taskList.forEach((promise, index) => {
      promise
        .then((val) => {
          results[index] = val;
          promisesCompleted += 1;

          if (promisesCompleted === taskList.length) {
            resolve(results);
          }
        })
        .catch((error) => reject(error));
    });
  });
};

//fulfilled case

const task1 = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(time), time);
  });
};

const taskList1 = [task1(3000), task1(1000), task1(2000)]; // Each task(time) function is being immediately invoked

// run myPromiseAll
myPromiseAll(taskList1)
  .then((results) => console.log('got results ', results))
  .catch(console.error);

//rejected case
const task2 = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (time < 2000) {
        reject('Rejected');
      }
    }, time);
  });
};

const taskList2 = [task2(3000), task2(1000), task2(2000)];
myPromiseAll(taskList2)
  .then((results) => console.log('results: ', results))
  .catch(console.error);
