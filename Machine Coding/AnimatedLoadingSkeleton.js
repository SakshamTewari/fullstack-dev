/*
    Animated Loading Skeleton
*/

function AnimatedLoadingSkeleton() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        .skeleton::after {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          height: 100%;
          width: 100%;
          background: linear-gradient(90deg, transparent, #ddd, transparent);
          animation: shimmer 1.5s infinite;
        }
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
      <div className="card" style={styles.card}>
        {loading ? (
          <div className="skeleton-wrapper">
            <div
              className="skeleton line name"
              style={{ ...styles.skeleton, ...styles.line, ...styles.name }}
            ></div>
            <div
              className="skeleton line bio"
              style={{ ...styles.skeleton, ...styles.line, ...styles.bio }}
            ></div>
          </div>
        ) : (
          <div className="content">
            <h2>John Doe</h2>
            <p>Full-stack developer at XYZ company</p>
          </div>
        )}
      </div>
    </>
  );
}

const styles = {
  card: {
    width: "300px",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    background: "white",
    fontFamily: "sans-serif",
  },

  line: {
    height: "16px",
    borderRadius: "8px",
    margin: "10px 0",
  },

  name: {
    width: "60%",
  },

  bio: {
    width: "80%",
  },

  skeleton: {
    background: "#eee",
    position: "relative",
    overflow: "hidden",
  },

  shimmerOverlay: {
    content: '""',
    position: "absolute",
    top: 0,
    left: "-100%",
    height: "100%",
    width: "100%",
    background: "linear-gradient(90deg, transparent, #ddd, transparent)",
    animation: "shimmer 1.5s infinite",
  },
};

const LoadingSkeletonRoot = ReactDOM.createRoot(
  document.getElementById("loading-skeleton")
);
LoadingSkeletonRoot.render(<AnimatedLoadingSkeleton />);
