/*
    Modal
    - button labeled 'Open Modal"
    - Closes the modal when : 'Close' button or user clicks outside the modal
*/

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px', height: '100vh' }}>
      <h1>Modal Popup</h1>

      <button
        style={{ padding: '10px', cursor: 'pointer' }}
        onClick={handleOpen}
      >
        Open Modal
      </button>
      {isOpen && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid black',
          }}
          onMouseDown={handleClose}
        >
          <div onMouseDown={(e) => e.stopPropagation()}>
            <h2>Modal Header</h2>
            <p>This is the modal body</p>
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

const modalRoot = ReactDOM.createRoot(document.getElementById('modal'));
modalRoot.render(<Modal />);
