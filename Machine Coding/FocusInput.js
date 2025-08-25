/*
    Focus Input
    - input should receive focus when the button is clicked
*/

const FocusInput = () => {
  const inputRef = React.useRef(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <input
        ref={inputRef}
        type='text'
        placeholder='Type here'
        style={{ padding: '8px', fontSize: '16px', marginRight: '10px' }}
      />
      <button style={{ padding: '8px 12px' }} onClick={handleClick}>
        Focus Input
      </button>
    </div>
  );
};

const focusInputRoot = ReactDOM.createRoot(
  document.getElementById('focus-input'),
);
focusInputRoot.render(<FocusInput />);
