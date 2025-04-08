/*
Debounce

    - way to execute  a function when it is made sure that no further repeated event will be triggered in a given time frame.
    - eg: searching something on any eCommerce site, we don't want to trigger a search function as user keeps typing.
    - helps in performance optimization by limited function calls

*/

const debounce = (func, delay) => {
  let timerId;

  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timerId);

    timerId = setTimeout(() => func.apply(context, args), delay);
  };
};

const onMouseMove = (e) => {
  console.clear();
  console.log(e.x, e.y);
};

const deboucedMouseMove = debounce(onMouseMove, 1000);
document.getElementById('btn').addEventListener('click', deboucedMouseMove);
