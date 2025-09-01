/*
    Dynamic Greeting

*/

const Greeting = () => {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const greeting = getGreeting(time.getHours());
  const formattedTime = time.toLocaleTimeString();
  return (
    <div
      className='modal-content'
      style={{
        textAlign: 'center',
        padding: '50px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f5f5f5',
        color: '#333',
      }}
    >
      <h2>{greeting}</h2>
      <p className='updated-time'>{formattedTime}</p>
    </div>
  );
};

function getGreeting(hour) {
  if (hour >= 5 && hour < 12) {
    return 'Good Morning!';
  } else if (hour >= 12 && hour < 17) {
    return 'Good Afternoon!';
  } else if (hour >= 12 && hour < 17) {
    return 'Good Evening!';
  } else {
    return 'Good Night! 🌙✨';
  }
}

const greetingRoot = ReactDOM.createRoot(document.getElementById('greeting'));
greetingRoot.render(<Greeting />);
