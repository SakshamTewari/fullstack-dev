/*
  Back To Top
  - when user scrolls down the page and clicks, it scrolls up smoothly
  - button shown only when user scrolls beyond a certain distance
*/

const BackToTop = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll'.handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  return (
    <div className='backToTop' style={styles.backToTop}>
      <h1>Back To Top</h1>

      {/* Add some content to enable scrolling */}
      {[...Array(40)].map((_, i) => (
        <p key={i}>This is message {i + 1}</p>
      ))}

      <div className='container'>
        {/* Show this button only after scrolling down */}
        {isVisible && (
          <button
            className='backtotop-btn'
            style={styles.backToTopBtn}
            onClick={scrollToTop}
          >
            Back to Top
          </button>
        )}
      </div>
    </div>
  );
};

const styles = {
  backToTop: {
    textAligh: 'center',
  },
  backToTopBtn: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    cursor: 'pointer',
  },
};

const backToTopRoot = ReactDOM.createRoot(
  document.getElementById('back-to-top'),
);
backToTopRoot.render(<BackToTop />);
