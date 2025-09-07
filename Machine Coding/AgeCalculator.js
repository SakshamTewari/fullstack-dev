const AgeCalculator = () => {
  const [birthDate, setBirthDate] = React.useState('');
  const [age, setAge] = React.useState(null);
  const [error, setError] = React.useState('');

  const calculateAge = () => {
    const today = new Date(),
      birth = new Date(birthDate);
    setError('');
    if (!birthDate) {
      setError('Please select a date');
      setAge(null);
      return;
    }
    if (birth > today) {
      setError('Birthdate cannot be in the future');
      setAge(null);
      return;
    }

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
      months -= 1;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }

    setAge({ years, months, days });
  };
  return (
    <div className='conatiner'>
      <h2 className='title'></h2>
      <label className='label'>Enter/Select a birthdate:</label>
      <input
        id='birthdate'
        type='date'
        value={birthDate}
        className='input-date'
        onChange={(e) => setBirthDate(e.target.value)}
      />
      <button className='btn-calc' onClick={calculateAge}>
        Calculate Age
      </button>
      {error && <p className='error-msg'>{error}</p>}
      {age && !error && (
        <p className='age-result'>
          {age.years} years, {age.months} months, {age.days} days
        </p>
      )}
    </div>
  );
};

const ageCalculatorRoot = ReactDOM.createRoot(
  document.getElementById('age-calculator'),
);
ageCalculatorRoot.render(<AgeCalculator />);
