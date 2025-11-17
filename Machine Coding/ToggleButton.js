/*
    Toggle button with custom hook
    - display toggle button
    - switches label between 'ON' and 'OFF' each time it is clicked
    - state should be managed using a custom hook called 'useToggle'
*/

// custom hook below
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggle = () => setValue((prev) => !prev);
  return [value, toggle];
}

const ToggleButton = () => {
  // Using the custom hook inside this component
  const [isOn, toggle] = useToggle(false);

  return <button onClick={toggle}>{isOn ? 'ON' : 'OFF'}</button>;
};

const toggleButtonRoot = ReactDOM.createRoot(
  document.getElementById('toggle-button'),
);
toggleButtonRoot.render(<ToggleButton />);
