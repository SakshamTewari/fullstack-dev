/*
    Asterisk Validation
    - input fields (name and location), both required '*'
    - if empty, highlight with error
    - success message if both filled
*/

const AsteriskValidation = () => {
  const [name, setName] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [errors, setErrors] = React.useState({ name: false, location: false });
  const [successMessage, setSuccessMessage] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      name: name.trim() === '',
      location: location.trim() === '',
    };
    setErrors(newErrors);

    if (!newErrors.name && !newErrors.location)
      setSuccessMessage(
        `Submitted Successfully!\nName: ${name}\nLocation: ${location}`,
      );
    else setSuccessMessage('');
  };
  return (
    <div className='container'>
      <h1 className='title'>Asterisk Field Validation</h1>
      <form className='form' onSubmit={handleSubmit}>
        <div className='input-group'>
          <label htmlFor='name' className='label'>
            Name <span className='asterisk'>*</span>
          </label>
          <input
            id='name'
            className='input'
            type='text'
            placeholder='Enter your name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span className='error'>Name is required.</span>}
        </div>

        <div className='input-group'>
          <label htmlFor='location' className='label'>
            Location <span className='asterisk'>*</span>
          </label>
          <input
            id='location'
            className='input'
            type='text'
            placeholder='Enter your location'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          {errors.location && (
            <span className='error'>Location is required.</span>
          )}
        </div>

        <button type='submit' className='submit-button'>
          Submit
        </button>
      </form>
      {successMessage && (
        <pre className='success-message'>{successMessage}</pre>
      )}
    </div>
  );
};

const asteriskValidationRoot = ReactDOM.createRoot(
  document.getElementById('asterisk-validation'),
);
asteriskValidationRoot.render(<AsteriskValidation />);
