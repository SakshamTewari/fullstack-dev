/* Pausable Auto Incrementer

    - takes an initial value and steps as input and increments the initial value with given steps every second
    - uses Timers and Closure



*/

const timer = (init = 0, step = 1) => {
  let intervalId;
  let count = init;

  const startTimer = () => {
    if (!intervalId) {
      intervalId = setInterval(() => {
        console.log(count);
        count += step;
      }, 1000);
    }
  };
  const stopTimer = () => {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null; // if we don't set to null, it will hold old numeric value from last setInterval
    }
  };

  return {
    start: startTimer,
    stop: stopTimer,
  };
};

const timer1 = timer(0, 2);
timer1.start(); // starts the timer

setTimeout(() => {
  timer1.stop();
}, 5000);
