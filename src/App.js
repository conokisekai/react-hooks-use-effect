import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // Side effect: Update document title when text changes
  useEffect(() => {
    document.title = text;
  }, [text]);

  // Side effect: Reset count to 0 after 5 seconds 
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCount(0);
    }, 5000);
    return () => clearTimeout(timeout); // Cleanup the timeout on component unmount
  }, []);

  console.log("Component rendering");

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        I've been clicked {count} times
      </button>
      <input
        type="text"
        placeholder="Type away..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default App;

