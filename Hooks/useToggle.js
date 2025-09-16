/*
    useToggle

    - accept an array of values and startIndex and toggles next value in the array
    - if index reaches end, reset the index

    Examples
    Tab or Step navigation const [step, nextStep] = useToggle(['Login', 'Details', 'Confirm']);
    Theme switcher const [theme, toggleTheme] = useToggle(['light', 'dark', 'system']);
    Play / Pause / Stop control const [status, toggleStatus] = useToggle(['play', 'pause', 'stop']);
    Carousel / Image slideshow const [image, nextImage] = useToggle(['img1.png', 'img2.png', 'img3.png']);


*/

const useToggle = (values, startIndex = 0) => {
  const [index, setIndex] = React.useState(startIndex);
  // With useCallback, React will memoize it and only recreate it when values changes.
  //Without useCallback, React creates a new toggle function every render.
  //If you pass toggle down as a prop to child components, those children will re-render unnecessarily because they see a “new” function each time.
  const toggle = React.useCallback(
    () => setIndex((prev) => (prev >= values.length - 1 ? 0 : prev + 1)),
    [values],
  );

  return [values[index], toggle];
};

function Example() {
  const [currentVal, toggleValue] = useToggle(['a', 'b', 'c'], 1);
  return <button onClick={toggleValue}>"Current Value: " {currentVal}</button>;
}
