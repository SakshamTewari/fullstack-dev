/*
  Multistepper component
  - takes list of component and generate each for each step
  - extensible bypassing the navigation options to the components in the list, so they can move to next step at will
  - each step will have grey color by default, active ones will have different color  
*/

const Stepper = ({ list }) => {
  const [currentStep, setCurrentStep] = React.useState(0);
  const stepCount = list.length;
  const isLastStep = currentStep === stepCount - 1;

  const handleNext = () => {
    if (!isLastStep) setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep((prev) => prev - 1);
  };

  return (
    <div style={styles.container}>
      {/* Step indicator */}
      <div style={styles.stepIndicator}>
        {list.map((_, index) => (
          <div key={index} style={styles.step(index <= currentStep)}></div>
        ))}
      </div>

      {/* Step content */}
      <div>{currentStep}</div>

      {/* Navigation buttons */}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '500px',
    margin: '30px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    fontFamily: 'Arial, sans-serif',
  },
  stepIndicator: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  step: (active) => ({
    flex: 1,
    height: '6px',
    margin: '0 5px',
    borderRadius: '4px',
    backgroundColor: active ? '#007bff' : '#ccc',
    transition: 'background-color 0.3s',
  }),
  content: {
    padding: '20px',
    border: '1px solid #eee',
    borderRadius: '6px',
    marginBottom: '20px',
    backgroundColor: '#fafafa',
    textAlign: 'center',
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  btn: {
    padding: '10px 18px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    color: 'white',
  },
  backBtn: {
    backgroundColor: '#6c757d',
  },
  nextBtn: {
    backgroundColor: '#007bff',
  },
  finishBtn: {
    backgroundColor: '#28a745',
  },
  disabled: {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
};
