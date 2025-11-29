/*
    Password Generator
        - choose password length between 1-20 (error if >20)
        - lowercase, uppercase, numbers, symbols (error if not atleast 1 selected)
        - generate random password based on selected options
        
*/

function PasswordGenerator() {
  const [password, setPassword] = React.useState("");
  const [length, setLength] = React.useState(4);
  const [includeLowerCase, setIncludeLowerCase] = React.useState(true);
  const [includeUpperCase, setIncludeUpperCase] = React.useState(false);
  const [includeNumbers, setIncludeNumbers] = React.useState(false);
  const [includeSymbols, setIncludeSymbols] = React.useState(false);
  const [error, setError] = React.useState("");

  function handleLengthChange(e) {
    setError("");
    let newLength = parseInt(e.target.value);
    if (newLength > 20) {
      setError("Max length is 20");
      setPassword("");
      newLength = 20;
    }
    setLength(newLength);
  }

  function generatePassword() {
    setError("");
    if (!length || length === 0) {
      setError("Length cannot be Empty or 0");
    }
    let characters = "";
    if (includeLowerCase) characters += "abcdefghijklmnopqrstuvwxyz";
    if (includeUpperCase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) characters += "1234567890";
    if (includeSymbols) characters += "!@#$%^&*();:";

    if (characters.length === 0) {
      setError("Select at least one option");
      return;
    }

    /*
        If I have to include all characters selected at least once

        let mustInclude = [];
        let all = [];
        let result = [];

        let lower = "abcdefghijklmnopqrstuvwxyz"
        ....
        if(includeLowerCase){
            all += lower
            mustInclude.push(lower[Math.floor(Math.random() * lower.length)])
        }
        ...
        result = [...mustInclude]
        for(let i = mustInclude.length; i< length; i++){
            result.push(all[Math.floor(Math.random() * lower.length)])
        }
        result = result.sort(() => Math.random() - 0.5).join('');
    */

    let generatePassword = "";
    for (let i = 0; i < length; i++) {
      const random = Math.floor(Math.random() * characters.length);
      generatePassword += characters[random];
    }
    setPassword(generatePassword);
  }
  return (
    <div className="passwordGenerator">
      <h1>Password Generator</h1>
      <p>Create a secure and Strong Password, to keep your account Safe</p>

      <div className="passwordGenerator-container">
        <label htmlFor="passwordLength">
          Password Length
          <input
            type="number"
            value={length}
            id="passwordLength"
            min="1"
            max="20"
            onChange={handleLengthChange}
          />
        </label>

        <div className="checkboxes">
          <label>
            <input
              type="checkbox"
              checked={includeLowerCase}
              onChange={() => setIncludeLowerCase(!includeLowerCase)}
            />
            Include LowerCase
          </label>

          <label>
            <input
              type="checkbox"
              checked={includeUpperCase}
              onChange={() => setIncludeUpperCase(!includeUpperCase)}
            />
            Include UpperCase
          </label>

          <label>
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
            />
            Include Numbers
          </label>

          <label>
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={() => setIncludeSymbols(!includeSymbols)}
            />
            Include Symbols
          </label>
        </div>

        <button className="generate-btn" onClick={generatePassword}>
          Generate
        </button>

        <div className="result">
          {password && <h1>{password}</h1>}

          {error && <p className="error">{error}</p>}
        </div>
      </div>
    </div>
  );
}

const passwordGeneratorRoot = ReactDOM.createRoot(
  document.getElementById("password-generator")
);
passwordGeneratorRoot.render(<PasswordGenerator />);
