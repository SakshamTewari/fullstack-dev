/*
    Character Count
    - Display live character count A/B
    - Allows the user to set a custom character limit
    - Display warnings when user reaches 90% of limit
    - Display error message when user exceeds limit

*/

const CharacterCount = () => {
  const [text, setText] = React.useState('');
  const [maxLength, setMaxLength] = React.useState(50);

  const warningLimit = Math.floor(maxLength * 0.9);
  const overLimit = text.length > maxLength;
  const warning = text.length >= warningLimit;
  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div className='characterCount'>
      <h1>Character Count</h1>
      <p>Track your input length with live character warnings.</p>

      <div className='container'>
        <div className='inputs'>
          <label>
            Max length:
            <input
              type='number'
              min='0'
              max='1000'
              value={maxLength}
              onChange={(e) => setMaxLength(Number(e.target.value))}
            />
          </label>
        </div>
        <textarea
          className='text'
          placeholder='Start Typing'
          value={text}
          onChange={handleChange}
        ></textarea>

        <div className='char-info'>
          {text.length} / {maxLength}
        </div>

        <div className='warnings'>
          {/* Show Warning if it reaches to 90 */}
          {warning && !overLimit && (
            <p className='warning-text'>You are close to the limit!</p>
          )}
          {/* Show  Overlimit message if limit is exceeded*/}
          {overLimit && (
            <p className='error-message'>{`Limit exceeded by ${
              text.length - maxLength
            } characters`}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const characterCountRoot = ReactDOM.createRoot(
  document.getElementById('character-count'),
);
characterCountRoot.render(<CharacterCount />);
