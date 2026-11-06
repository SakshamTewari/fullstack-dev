/*
Circuit Breaker

    - design pattern that prevents cascading failures
    - majorly used in microservices, but on frontend as well
    - imagine making an API call and request keeps failing, so to prevent server bombarding. halt the request sending for a certain time.

*/

const circuitBreaker = (fn, failureCount, timeThreshold) => {
  let failures = 0;
  let timeSinceLastFailure = 0;
  let isClosed = false;

  return function (...args) {
    if (isClosed) {
      const diff = Date.now() - timeSinceLastFailure;

      if (diff > timeThreshold) {
        isClosed = false;
      } else {
        console.log('Service unavailable');
        return;
      }
    }
    try {
      const result = fn(...args);
      failures = 0;
      return result;
    } catch (error) {
      failures++;
      timeSinceLastFailure = Date.now();
      if (failures > failureCount) {
        isClosed = true;
      }
      console.log('Error');
    }
  };
};
