/*
    Password Strength Checker
    - check for length, uppercase, lowercase, digit, special characters
*/

const checkPasswordStrength = (pwd) => {
  const checks = [
    pwd.length >= 8,
    /[A-Z]/.test(pwd),
    /[a-z]/.test(pwd),
    /[0-9]/.test(pwd),
    /[^A-Za-z0-9]/.test(pwd), // ^ means NOT (covers special characters)
  ];

  const passed = checks.filter(Boolean).length;

  if (passed === 1) return "Level 1";
  if (passed >= 2 && passed <= 3) return "Level 2";
  if (passed >= 4 && passed <= 5) return "Level 3";
  return "Weak Password";
};

const PasswordStrength = () => {
  const [password, setPassword] = React.useState("");
  const [strength, setStrength] = React.useState("");

  const handleCheck = () => {
    setStrength(checkPasswordStrength(password));
  };

  return (
    <div>
      <h2>Password Strength Checker</h2>
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleCheck}>Check Strength</button>
      {strength && (
        <p>
          Strength: <strong>{strength}</strong>
        </p>
      )}
    </div>
  );
};

const passwordStrengthRoot = ReactDOM.createRoot(
  document.getElementById("password-strength")
);
passwordStrengthRoot.render(<PasswordStrength />);
