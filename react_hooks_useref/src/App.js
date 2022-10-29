import React, { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const inputRef = useRef();
  /* const renderCount = useRef(0); */ /* Return an object {current:0} 
  and use usually to reference element inside html */

  /*  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  }); */
  function focus() {
    inputRef.current.focus();
  }

  return (
    <>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>My name is {name}</div>
      {/* <div>I rendered {renderCount.current} times</div> */}
      <button onClick={focus}>Focus</button>
    </>
  );
}

export default App;
