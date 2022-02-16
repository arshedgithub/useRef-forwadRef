import React, { useRef } from "react";

function App() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const submitRef = useRef(null);
  return (
    <div className="App">
      <input type="text" ref={firstNameRef} placeholder="Enter First Name" />
      <input type="text" ref={lastNameRef} placeholder="Enter First Name" />
      <input type="text" placeholder="Enter Last Name" />
      <button ref={submitRef}>submit</button>
    </div>
  );
}

export default App;
