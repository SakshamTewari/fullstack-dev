/*
    useResponsive

    - returns device type (mobile, tablet, desktop) depending upon window width
    - can be used instead of using CSS media queries
    
*/

const useResponsive = () => {
  const [device, setDevice] = React.useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  const onResizeHandler = () => {
    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth <= 990;
    const isDesktop = window.innerWidth > 990;

    setDevice({ isMobile, isTablet, isDesktop });
  };

  const debouncedCall = useDebounce(onResizeHandler, 500);

  const setup = () => {
    window.addEventListener('resize', debouncedCall, false);
  };

  const cleanup = () => {
    window.removeEventListener('resize', debouncedCall, false);
  };

  React.useEffect(() => {
    setup();

    return () => cleanup();
  }, []);

  return device;
};
