/*
    Color Code Game
    - Diplay a hex color code
    - render 3 color boxes below it.
    - one of the boxes should match the hex code
    - play again button to rest the game

*/

const getRandomColor = () => {
  const color = Math.floor(Math.random() * 0xffffff).toString(16);
  return '#' + color.padStart(6, '0');
};

const getColorOptions = (correct) => {
  const colors = new Set([correct]);
  while (colors.size < 3) {
    colors.add(getRandomColor());
  }

  return [...colors].sort(() => Math.random() - 0.5);
};

function ColorCodeGame() {
  const [answer, setAnswer] = React.useState('');
  const [options, setOptions] = React.useState([]);
  const [result, setResult] = React.useState('');
  const [ended, setEnded] = React.useState(false);

  const newGame = () => {
    const color = getRandomColor();
    setAnswer(color);
    setOptions(getColorOptions(color));
    setResult('');
    setEnded(false);
  };

  const checkAnswer = (color) => {
    if (ended) return;
    setResult(color === answer ? 'Correct!' : 'Incorrect!');
    setEnded(true);
  };

  React.useEffect(() => {
    newGame();
  }, []);

  return (
    <div className='game-container' style={styles.gameContainer}>
      <h1>Color Codes</h1>
      <p className='color-code'>{answer.toUpperCase()}</p>
      <h3>What is this color?</h3>

      <div className='color-options' style={styles.colorOptions}>
        {options.map((color) => (
          <div
            key={color}
            className='color-box'
            role='button'
            aria-label={`Color option ${color.toUpperCase()}`}
            onClick={() => checkAnswer(color)}
            style={{ ...styles.colorBox, backgroundColor: color }}
            tabIndex={0}
          ></div>
        ))}
      </div>
      {result && <p className='feedback'>{result}</p>}
      {ended && (
        <button className='play-again-btn' onClick={newGame}>
          Play Again
        </button>
      )}
    </div>
  );
}

const styles = {
  gameContainer: {
    textAlign: 'center',
    padding: '1rem',
  },
  colorOptions: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
  },
  colorBox: {
    width: '100px',
    height: '100px',
    border: '1px solid black',
    cursor: 'pointer',
    transition: 'transform 0.2s',
  },
};

const colorCodeGameRoot = ReactDOM.createRoot(
  document.getElementById('color-code-game'),
);
colorCodeGameRoot.render(<ColorCodeGame />);
