/*
    Copy To Clipboard
    - allows user to copy a text input to the clipboard with a single click
    - 'Copied!' message should appear temporarily for 2 seconds
 */

const CopytoClipboard = () => {
  const [text, setText] = React.useState('');
  const [copy, setCopy] = React.useState(false);
  const [error, setError] = React.useState(null);

  const handleCopy = (value) => {
    setError('');
    if (!value.trim()) {
      setError('Type something');
      return;
    }

    navigator.clipboard.writeText(value);
    setCopy(true);

    setTimeout(() => {
      setCopy(false);
    }, 2000);
  };

  return (
    <div style={styles.copyToClipboard}>
      <h1>Copy To Clipboard</h1>

      <div style={styles.copyToClipboardContainer}>
        <div>
          <label htmlFor='text'>
            Enter your text:
            <input
              type='text'
              id='text'
              placeholder='Type something'
              onChange={(e) => setText(e.target.value)}
            />
          </label>
          <button onClick={() => handleCopy(text)}>Copy</button>
        </div>
        {copy && <p>Copied!!</p>}
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

const styles = {
  copyToClipboard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  copyToClipboardContainer: {
    border: '1px solid black',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '1rem 1.5rem',
  },
};

const copyToClipboardRoot = ReactDOM.createRoot(
  document.getElementById('copy-to-clipboard'),
);
copyToClipboardRoot.render(<CopytoClipboard />);
