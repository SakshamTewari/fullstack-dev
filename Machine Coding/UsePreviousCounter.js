/*
    usePreviousHook
    - counter app that also shows the previous count value
    - increase/decrease/reset
    - previous count using custom usePrevious hook
*/

const usePrevious = (currentCount) => {
  const ref = React.useRef();

  React.useEffect(() => {
    ref.current = currentCount;
  }, [currentCount]);

  return ref.current;
};

const UsePreviousCounter = () => {
  const [currentCount, setCurrentCount] = React.useState(0);
  const increment = () => setCurrentCount((prev) => prev + 1);
  const decrement = () => setCurrentCount((prev) => prev - 1);
  const reset = () => setCurrentCount(0);
  const previousCount = usePrevious(currentCount);

  return (
    <div className='App'>
      <h2>Current Count: {currentCount}</h2>
      <h2>Previous Count: {previousCount}</h2>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

const usePreviousCounterRoot = ReactDOM.createRoot(
  document.getElementById('use-previous-counter'),
);
usePreviousCounterRoot.render(<UsePreviousCounter />);
