/*
    Draw Circles
    - user clicks anywhere inside drawing area (400x300), circles appear
    - options for redo/undo, ctrl + z (undo) and ctrl + y (redo)
    - when a new circle after undo, redo stack should clear
*/

const DrawCircles = () => {
  const [circles, setCircles] = React.useState([]);
  const [redoStack, setRedoStack] = React.useState([]);
  const drawingRef = React.useRef(null);

  const handleDraw = (e) => {
    const rect = drawingRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCircles((prev) => [...prev, { x, y }]);
    setRedoStack([]);
  };

  const handleUndo = () => {
    if (circles.length === 0) return;
    const updated = [...circles];
    const last = updated.pop();
    setCircles(updated);
    setRedoStack([...redoStack, last]);
  };

  const handleRedo = () => {
    if (redoStack.length === 0) return;
    const updated = [...redoStack];
    const last = updated.pop();
    setRedoStack(updated);
    setCircles([...circles, last]);
  };

  React.useEffect(() => {
    const keyHandler = (e) => {
      if (e.ctrlKey && e.key === 'z') handleUndo();
      if (e.ctrlKey && e.key === 'y') handleRedo();
    };
    window.addEventListener('keydown', keyHandler);
    return () => window.removeEventListener('keydown', keyHandler);
  }, [circles, redoStack]);

  return (
    <div className='circle-drawer' style={styles.circleDrawer}>
      <div
        className='drawing-area'
        style={styles.drawingArea}
        onClick={handleDraw}
        ref={drawingRef}
      >
        {circles.map((circle, index) => (
          <div
            key={index}
            className='circle'
            style={{ ...styles.circle, left: circle.x, top: circle.y }}
          />
        ))}
      </div>
      <div className='buttons'>
        <button className='undo-btn' onClick={handleUndo}>
          Undo
        </button>
        <button className='redo-btn' onClick={handleRedo}>
          Redo
        </button>
      </div>
    </div>
  );
};

const styles = {
  circleDrawer: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  drawingArea: {
    width: '400px',
    height: '300px',
    border: '2px solid #888',
    position: 'relative',
    marginBottom: '20px',
  },
  circle: {
    width: '20px',
    height: '20px',
    backgroundColor: 'blue',
    borderRadius: '50%',
    position: 'absolute',
  },
};

const drawCirclesRoot = ReactDOM.createRoot(
  document.getElementById('draw-circles'),
);
drawCirclesRoot.render(<DrawCircles />);
