/*
Infinite scroll or lazy loading
- optimization technique used as a pagination to load next set of data once the user has scrolled throught the existing one
- use window's scroll event to detect when the user has scrolled to the end

*/

const InfiniteScroll = () => {
  const [count, setCount] = React.useState(50);

  React.useEffect(() => {
    const onScroll = () => {
      // if scrolled to the bottom
      if (
        window.innerHeight + window.scrollY >=
        window.document.body.offsetHeight
      ) {
        setCount((prev) => prev + 50);
      }
    };

    // scroll event
    window.addEventListener('scroll', onScroll);

    // memory cleanup, remove listener
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const items = [];

  for (let i = 0; i < count; i++) {
    items.push(<div key={i}>{i}</div>);
  }

  return <div>{items}</div>;
};

const infiniteScrollRoot = ReactDOM.createRoot(
  document.getElementById('infinite-scroll'),
);
infiniteScrollRoot.render(<InfiniteScroll />);
