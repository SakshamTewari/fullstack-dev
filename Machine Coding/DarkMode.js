/*
    Dark Mode Toggle 
    - allow users to switch between light and dark ode
*/

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className='container'
      style={isDarkMode ? styles.darkMode : styles.lightMode}
    >
      <h1>Dark Mode Toggle</h1>
      <div className='toggle-container' style={styles.toggleContainer}>
        <label className='switch' style={styles.switch}>
          <input
            type='checkbox'
            checked={isDarkMode}
            onChange={toggleTheme}
            style={styles.input}
          />
          {/* Background track */}
          <span
            className='slider round'
            style={{
              ...styles.slider,
              ...(isDarkMode ? styles.sliderChecked : {}),
            }}
          >
            {/* Circle knob */}
            <span style={styles.knob} />
          </span>
        </label>
        <span style={styles.modeText}>
          {isDarkMode ? 'Dark Mode' : 'Light Mode'}
        </span>
      </div>
    </div>
  );
};

const styles = {
  lightMode: {
    backgroundColor: '#ffffff',
    color: '#333',
  },
  darkMode: {
    backgroundColor: '#333',
    color: '#ffffff',
  },
  toggleContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
  },
  modeText: {
    color: 'inherit',
  },
  switch: {
    position: 'relative',
    display: 'inline-block',
    width: '60px',
    height: '34px',
  },
  input: {
    opacity: 0,
    width: 0,
    height: 0,
    position: 'absolute',
  },
  slider: {
    position: 'absolute',
    cursor: 'pointer',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#ccc',
    borderRadius: '34px',
    display: 'flex',
    alignItems: 'center',
    padding: '2px',
    boxSizing: 'border-box',
    transition: '0.4s',
  },
  sliderChecked: {
    backgroundColor: '#2196F3',
    justifyContent: 'flex-end',
  },
  knob: {
    height: '26px',
    width: '26px',
    backgroundColor: 'white',
    borderRadius: '50%',
    transition: '0.4s',
  },
};

const darkModeRoot = ReactDOM.createRoot(document.getElementById('dark-mode'));
darkModeRoot.render(<DarkModeToggle />);
