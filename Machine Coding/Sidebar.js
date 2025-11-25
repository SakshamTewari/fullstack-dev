/*
    Sidebar
    - positioned on right side of the viewport
    - toggle button (with Menu icon from lucide-react)
*/

function Sidebar() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div
      style={{
        ...styles.sidebar, // base styles
        transform: isOpen
          ? "translateX(0)" // dynamic styles
          : "translateX(100%)",
        boxShadow: isOpen ? "-4px 0 20px rgba(144, 33, 33, 0.5)" : "none",
      }}
    >
      <button style={styles.toggleBtn} onClick={() => setIsOpen(!isOpen)}>
        {/* <Menu size={24} /> */}X
      </button>
      {isOpen && (
        <nav style={styles.navMenu}>
          <ul style={styles.navList}>
            <li style={styles.navItem}>Home</li>
            <li style={styles.navItem}>About</li>
            <li style={styles.navItem}>Services</li>
            <li style={styles.navItem}>Contact</li>
          </ul>
        </nav>
      )}
    </div>
  );
}

const styles = {
  sidebar: {
    position: "fixed",
    right: 0,
    height: "100vh",
    width: "280px",
    paddingTop: "60px",
    transition: "transform 0.35s ease, box-shadow 0.3s ease",
    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
    background: "#182848",
    color: "#ffffff",
    zIndex: 1000,
  },

  toggleBtn: {
    position: "absolute",
    top: "15px",
    left: "-60px",
    backgroundColor: "#4b6cb7",
    border: "none",
    borderRadius: "50%",
    padding: "12px",
    cursor: "pointer",
    color: "#f0f0f5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 8px rgba(75,108,183,0.6)",
  },

  navMenu: {
    width: "100%",
  },

  navList: {
    listStyle: "none",
    padding: "0 20px",
    margin: 0,
  },

  navItem: {
    padding: "15px 20px",
    margin: "8px 0",
    borderRadius: "8px",
    fontWeight: 600,
    fontSize: "1.1rem",
    cursor: "pointer",
    color: "#f0f0f5",
    userSelect: "none",
  },
};

const sidebarRoot = ReactDOM.createRoot(document.getElementById("sidebar"));
sidebarRoot.render(<Sidebar />);
