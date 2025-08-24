/*
    Stopwatch
    - Start, Stop, Reset functionality
*/

const Stopwatch = () => {
  const [seconds, setSeconds] = React.useState(0);
  const intervalRef = React.useRef(null);

  const startTimer = () => {
    if (intervalRef.current) return; // prevent multiple intervals
    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null; // reset interval reference
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setSeconds(0);
  };

  React.useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Timer: {seconds}s</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

const stopwatchRoot = ReactDOM.createRoot(document.getElementById('stopwatch'));
stopwatchRoot.render(<Stopwatch />);
