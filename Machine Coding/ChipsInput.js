/*
    Chips Input
    - allows users to input a series of tags or keywords
    - display these tags as chips
    - can be added/removed dynamically
    - use onKeyDown event handler as onKeyPress is deprecated
*/

const ChipsInput = () => {
  const [chips, setChips] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [idCounter, setIdCounter] = useState(0);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && inputValue.trim() !== '') {
      const newChip = {
        id: idCounter,
        label: inputValue.trim(),
      };
      setChips([...chips, newChip]);
      setIdCounter(idCounter + 1);
      setInputValue('');
    }
  };

  const handleDeleteChip = (idToDelete) => {
    setChips(chips.filter((chip) => chip.id !== idToDelete));
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '40px 0',
      }}
    >
      <h2>Chips Input</h2>
      <input
        type='text'
        value={inputValue}
        placeholder='Type a chip and press tag'
        style={{ padding: '8px', width: '200px' }}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <div
        style={{
          margin: '20px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        {chips.map((chip) => (
          <div>
            <span>{chip.label}</span>
            <button
              style={{
                background: 'transparent',
                border: 'none',
                marginLeft: '8px',
                color: 'red',
                cursor: 'pointer',
              }}
              onClick={() => handleDeleteChip(chip.id)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const chipsInputRoot = ReactDOM.createRoot(
  document.getElementById('chips-input'),
);
chipsInputRoot.render(<ChipsInput />);
