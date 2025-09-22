/*
    useIdle hook

    - return boolean depending upon the active/inactive state of the user after given delay
    - if user not performing any activity [mouse, keyboard, touch on mobile/tablet]
    - also if window is out of focus/blur

*/

const { useEffect } = require('react');

const useIdle = (delay) => {
  const [idIdle, setIsIdle] = useState(false);

  //reference to track the timer
  const timeoutId = useRef();

  const startTimer = () => {
    timeoutId.current = setTimeout(goInactive, delay);
  };

  const resetTimer = () => {
    clearTimeout(timeoutId.current);
  };

  const goInactive = () => {
    setIsIdle(true);
  };

  const goActive = () => {
    setIsIdle(false);
    startTimer();
  };

  const setup = () => {
    document.addEventListener('mousedown', resetTimer, false);
    document.addEventListener('mousemove', resetTimer, false);
    document.addEventListener('keypress', resetTimer, false);
    document.addEventListener('DOMMouseScroll', resetTimer, false);
    document.addEventListener('mousewheel', resetTimer, false);
    document.addEventListener('touchmove', resetTimer, false);
    document.addEventListener('MSPointermove', resetTimer, false);
    window.addEventListener('blur', startTimer, false);
    window.addEventListener('focus', resetTimer, false);
  };

  const cleanup = () => {
    document.removeEventListener('mousedown', resetTimer);
    document.removeEventListener('mousemove', resetTimer);
    document.removeEventListener('keypress', resetTimer);
    document.removeEventListener('DOMMouseScroll', resetTimer);
    document.removeEventListener('mousewheel', resetTimer);
    document.removeEventListener('touchmove', resetTimer);
    document.removeEventListener('MSPointermove', resetTimer);
    window.removeEventListener('blur', startTimer);
    window.removeEventListener('focus', resetTimer);

    clearTimeout(timeoutId.current);
  };

  // assign and remove listeners
  useEffect(() => {
    setup();

    return () => {
      cleanup();
    };
  });

  return idIdle;
};
