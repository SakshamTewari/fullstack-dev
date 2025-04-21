/* Javascript web API's have method called 'AbortController'

    - it has a property called 'signal', that allows us to create an AbortSignal
    - can be associated with Fetch API which provides an option to abort the API request
    - when abort() is called, fetch() promise rejects with an Abort Error

*/

const controller = new AbortController();
const signal = controller.signal;

const downloadBtn = document.querySelector('.download');
const abortBtn = document.querySelector('.abort');

// helper method to make api call
function makeCall() {
  fetch('https://jsonplaceholder.typicode.com/todos/1', { signal })
    .then((response) => {
      console.log('complete', response);
    })
    .catch((err) => {
      console.log(`error: ${err.message}`);
    });
}

//download event
downloadBtn.addEventListener('click', makeCall);

//abort event
abortBtn.addEventListener('click', () => {
  controller.abort(); // this aborts the controller signal permanently and new fetch request will throw an error
  console.log('Download aborted');
});

/* To fix above issue, we should create new controller + signal for every new download

let controller; // define outside

const downloadBtn = document.querySelector('.download');
const abortBtn = document.querySelector('.abort');

downloadBtn.addEventListener('click', () => {
  controller = new AbortController(); // new one every time
  const signal = controller.signal;

  fetch('https://jsonplaceholder.typicode.com/todos/1', { signal })
    .then((response) => {
      console.log('complete', response);
    })
    .catch((err) => {
      console.log(`error: ${err.message}`);
    });
});

abortBtn.addEventListener('click', () => {
  if (controller) {
    controller.abort();
    console.log('Download aborted');
  }
});
*/
