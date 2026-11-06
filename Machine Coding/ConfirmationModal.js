const ConfirmationModal = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [actionStatus, setActionStatus] = React.useState('');

  const handleConfirm = () => {
    setActionStatus('Confirmed');
    setIsOpen(false);
  };

  const handleCancel = () => {
    setActionStatus('Cancelled');
    setIsOpen(false);
  };

  return (
    <div className='modal-container'>
      <button className='open-modal-btn' onClick={() => setIsOpen(true)}>
        Open Confirmation Modal
      </button>

      {isOpen && (
        <div className='modal-backdrop'>
          <div className='modal-box'>
            <h2 className='modal-title'>Confirm Action</h2>
            <p className='modal-message'>Are you sure you want to proceed?</p>

            <div className='modal-buttons'>
              <button className='confirm-btn' onClick={handleConfirm}>
                Confirm
              </button>
              <button className='cancel-btn' onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {actionStatus && <p className='action-status'>{actionStatus}</p>}
    </div>
  );
};

const confirmationModalRoot = ReactDOM.createRoot(
  document.getElementById('confirmation-modal'),
);
confirmationModalRoot.render(<ConfirmationModal />);
