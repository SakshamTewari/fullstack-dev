/*
    Undo Redo
    
*/

const UndoRedo = () => {
  const [text, setText] = React.useState('');
  const [history, setHistory] = React.useState(['']);
  const [currentStep, setCurrentStep] = React.useState(0);

  function handleChange(e) {
    const newValue = e.target.value;
    const updateHistory = history.slice(0, currentStep + 1);

    setHistory([...updateHistory, newValue]);
    setCurrentStep(updateHistory.length);
    setText(e.target.value);
  }

  function handleRedo() {
    if (currentStep < history.length - 1) {
      setCurrentStep((prev) => prev + 1);
      setText(history[currentStep + 1]);
    }
  }

  function handleUndo() {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
      setText(history[currentStep - 1]);
    }
  }

  return (
    <div className='undoRedo'>
      <h1>Undo Redo History</h1>

      <div className='container'>
        <textarea className='textarea' onChange={handleChange} value={text} />

        <div className='buttons'>
          <button
            onClick={handleRedo}
            disabled={currentStep === history.length - 1}
          >
            Redo
          </button>
          <button onClick={handleUndo} disabled={currentStep === 0}>
            Undo
          </button>
        </div>
      </div>
    </div>
  );
};
