const Counter = () => {
  const [count, setCount] = React.useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (count > 0) setCount((prev) => prev - 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <div>
      <h2>Counter : {count} </h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

const counterRoot = ReactDOM.createRoot(document.getElementById('counter'));
counterRoot.render(<Counter />);
