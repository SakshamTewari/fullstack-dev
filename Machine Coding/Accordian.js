/*
    Accordian
    - Display list of accordian items, title and content
    - Clicking title toggles content visibility
*/

function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = React.useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  if (!items || items.length === 0) {
    return <p>No items available.</p>;
  }
  return (
    <div className="accordian">
      {items.map((item, index) => (
        <div key={index} className="accordian-item">
          <button
            className="accordian-title"
            onClick={() => handleToggle(index)}
          >
            {item.title}
            {/* {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />} */}
          </button>
          {activeIndex === index && <div>{item.content}</div>}
        </div>
      ))}
    </div>
  );
}

const items = [
  {
    title: "JavaScript Basics",
    content: "Learn variables, functions, and loops in JavaScript.",
  },
  {
    title: "React.js Overview",
    content: "Understand components, state, and props in React.",
  },
  {
    title: "Node.js",
    content: "Basics of server-side development with Node.js.",
  },
  {
    title: "Full-Stack Development",
    content: "Build full-stack apps with React and Node.js.",
  },
];

const accordionRoot = ReactDOM.createRoot(document.getElementById("accordian"));
accordionRoot.render(<Accordion items={items} />);
