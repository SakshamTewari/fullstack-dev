/*
    useRef
        a box that:
            stores a value (like state)
            BUT updating it does not re-render
            AND can hold a DOM element

*/

import React, { useEffect } from "react";

// To track click count
function ClickTracker() {
  const clickCount = useRef(0);

  const handleClick = () => {
    clickCount.current += 1;
    console.log("Clicked", clickCount.current);
  };

  return (
    <>
      <button onClick={handleClick}>Click me</button>
    </>
  );
}

// To store previous value
function storePrevious() {
  const [count, setCount] = React.useState(0);
  const prev = useRef(null);

  React.useEffect(() => {
    prev.current = count;
  }, [count]);

  return (
    <>
      <p>Current: {count}</p>
      <p>Previous: {prev.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}

/*
When React renders:

(1) Render phase (React-only)

React runs your component function.
It calculates what DOM should look like.
Builds Virtual DOM.
No screen changes yet.

(2) Commit phase
React applies DOM changes to the actual browser DOM.

(3) Browser paint

The browser draws the updated DOM visually on the webpage.
Text appears.
Elements become visible.
Layout happens.
Colors appear.
Etc.

AFTER this, React runs useEffect

*/
