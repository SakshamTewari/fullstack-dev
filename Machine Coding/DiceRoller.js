/*
    Dice Roller
    - Roll Dice button should generate random no. between 1-6
    - If the button is not clicked, show message 'Click to roll!'

*/

const DiceRoller = () => {
  const [diceValue, setDiceValue] = useState(null);

  const rollDice = () => {
    let random = Math.floor(Math.random() * 6) + 1;

    setDiceValue(random);
  };
  return (
    <div>
      <h2>Dice Roller</h2>
      <button onClick={rollDice}>Roll Dice</button>
      <h3>{diceValue !== null ? `🎲 ${diceValue}` : 'Click to roll!'} </h3>
    </div>
  );
};

const diceRollerRoot = ReactDOM.createRoot(
  document.getElementById('dice-roller'),
);
diceRollerRoot.render(<DiceRoller />);
