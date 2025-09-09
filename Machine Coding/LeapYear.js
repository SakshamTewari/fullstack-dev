/*
    Leap Year
    - check is input value is a leap year or not
*/

const LeapYear = () => {
  const [year, setYear] = React.useState('');
  const [result, setResult] = React.useState('');
  const [error, setError] = React.useState('');

  const checkLeapYear = () => {
    const trimmedYear = year.trim();
    if (!trimmedYear) {
      setError('Please enter a year');
      setResult('');
      return;
    }
    setError('');
    const numYear = parseInt(trimmedYear, 10);
    const isLeapYear =
      numYear % 400 === 0 || (numYear % 4 === 0 && numYear % 100 !== 0);
    setResult(
      isLeapYear
        ? `${numYear} is a Leap Year`
        : `${numYear} is not a Leap Year`,
    );
  };

  return (
    <div className='container'>
      <h1>Leap Year Checker</h1>
      <label>Enter a year:</label>
      <input
        type='text'
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />

      <button onClick={checkLeapYear}>Check</button>

      {result && <div className='result'>{result}</div>}

      {error && <div className='error'>{error}</div>}
    </div>
  );
};

const leapYearRoot = ReactDOM.createRoot(document.getElementById('leap-year'));
leapYearRoot.render(<LeapYear />);
