/*
    Tooltip
    - user hovers on list of icons, displays the name of that icon
    - onMouseEnter, onMouseLeave
*/

const icons = [
  { emoji: '🏠', label: 'Home' },
  { emoji: '📧', label: 'Email' },
  { emoji: '⚙️', label: 'Settings' },
];

const Tooltip = () => {
  const [pointer, setPointer] = React.useState(null);

  const handleMouseEnter = (index) => setPointer(index);
  const handleMouseLeave = () => setPointer(null);

  return (
    <div style={styles.container}>
      Tooltip
      {/* Inject raw CSS inside the component */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .tooltip {
          position: absolute;
          bottom: -25px;
          left: 50%;
          transform: translateX(-50%);
          background: black;
          color: white;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 12px;
          white-space: nowrap;
          animation: fadeInUp 0.3s ease forwards;
        }
      `}</style>
      <div style={styles.iconsContainer}>
        {icons.map((icon, index) => (
          <div
            key={index}
            style={styles.iconWrapper}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <span>{icon.emoji}</span>
            {pointer === index && <div className='tooltip'>{icon.label}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: { textAlign: 'center' },
  iconsContainer: {
    display: 'flex',
    gap: '24px',
    padding: '50px',
    justifyContent: 'center',
  },
  iconWrapper: {
    position: 'relative',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'transform 0.2s ease',
  },
};

const tooltipRoot = ReactDOM.createRoot(document.getElementById('tooltip'));
tooltipRoot.render(<Tooltip />);
