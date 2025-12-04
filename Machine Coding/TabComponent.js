/*
    Tabs Component
        accept list of tabs as props
        tabs have title and content
        reusable and scalable
*/

const tabsData = [
  { title: "Tab 1", content: "This is the content of Tab 1" },
  { title: "Tab 2", content: "This is the content of Tab 2" },
  { title: "Tab 3", content: "This is the content of Tab 3" },
];

function TabComponent({ tabs }) {
  const [activeIndex, setActiveIndex] = React.useState(0);

  if (tabs.length === 0) {
    return <div>No tabs available</div>;
  }
  return (
    <div>
      <div style={{ display: "flex", cursor: "pointer" }}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            style={{
              padding: "10px 20px",
              borderBottom: activeIndex === index ? "2px solid blue" : "none",
              marginRight: "10px",
            }}
          >
            {tab.title || `Tab ${index + 1}`}
          </div>
        ))}
      </div>
      <div style={{ marginTop: "10px" }}>
        {tabs[activeIndex]?.content || "No content available"}
      </div>
    </div>
  );
}

const tabsRoot = ReactDOM.createRoot(document.getElementById("tabs"));
tabsRoot.render(<TabComponent tabs={tabsData} />);
