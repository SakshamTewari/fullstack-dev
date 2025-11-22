/*
User authentication system using Context API
  - store isLoggedIn, login() and logout() in context
  - Use it in App, Navbar and Dashboard components
*/

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);
  return (
    <UserContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

const Dashboard = () => {
  const { isLoggedIn } = React.useContext(UserContext);
  return (
    <div className="dashboard">
      {isLoggedIn ? (
        <h2>This is your dashboard</h2>
      ) : (
        <h2>Please login to access your dashboard</h2>
      )}
    </div>
  );
};

const Navbar = () => {
  const { isLoggedIn, login, logout } = React.useContext(UserContext);
  return (
    <nav>
      <h1>App</h1>
      {isLoggedIn ? (
        <>
          <span>Welcome, User!</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </nav>
  );
};

const Authentication = () => {
  return (
    <UserProvider>
      <div className="app">
        <Navbar />
        <Dashboard />
      </div>
    </UserProvider>
  );
};

const authenticationRoot = ReactDOM.createRoot(
  document.getElementById("authentication")
);
authenticationRoot.render(<Authentication />);
