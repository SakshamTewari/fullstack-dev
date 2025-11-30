/*
    Weekday Finder
    - Input: Date string
*/

function GetWeekday() {
  const [dateInput, setDateInput] = React.useState("");
  const [day, setDay] = React.useState("");

  const findWeekday = () => {
    if (!dateInput) return;
    const date = new Date(dateInput);
    const options = { weekday: "long" };
    setDay(date.toLocaleDateString("en-US", options));
  };

  return (
    <div className="container">
      <h1>Get Weekday</h1>
      <input
        type="date"
        value={dateInput}
        onChange={(e) => {
          setDateInput(e.target.value);
          setDay(null);
        }}
      />
      <button onClick={findWeekday}>Find Day</button>
      {day && <div className="result">That date falls on {day}</div>}
    </div>
  );
}

const weekdayRoot = ReactDOM.createRoot(document.getElementById("weekday"));
weekdayRoot.render(<GetWeekday />);
