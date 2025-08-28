/*
  Toggle Password
  - input must securely accept user-entered text.
  - by default, password should be hidden.
*/

const TogglePassword = () => {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <div className='container'>
      <h1 className='title'>Toggle Password</h1>
      <div className='password-wrapper' style={styles.passwordWrapper}>
        <input
          type={isPasswordVisible ? 'text' : 'password'}
          id='password'
          placeholder='Enter password'
          className='password-input'
          style={styles.passwordInput}
        />
        <span className='icon' onClick={togglePasswordVisibility}>
          +{/* import Lucid-react Eye/EyeOff icon */}
          {/* {isPasswordVisible ? <Eye size={18} /> : <EyeOff size={18} />}   */}
        </span>
      </div>
      <span className='visibility-label'>
        {isPasswordVisible ? 'Password Visible' : 'Password Hidden'}
      </span>
    </div>
  );
};

const styles = {
  container: {
    border: '1px solid black',
  },
  passwordWrapper: {
    display: 'flex',
  },
  passwordInput: {
    border: 'none',
    outline: 'none',
  },
};

/*
input[type="password"],
input[type="text"] {
  width: 100%;
  padding: 10px 35px 10px 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
  outline: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  background-color: white;
}
*/

const togglePasswordRoot = ReactDOM.createRoot(
  document.getElementById('toggle-password'),
);
togglePasswordRoot.render(<TogglePassword />);
