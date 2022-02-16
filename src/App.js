import React, { useRef, useEffect } from "react";
import Input from "./components/Input.js";

function App() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const submitRef = useRef(null);

  useEffect(() => {
    firstNameRef.current.focus();
  }, []);

  function firstKeyDown(e) {
    if (e.key == "Enter") lastNameRef.current.focus();
  }
  function lastKeyDown(e) {
    if (e.key == "Enter") submitRef.current.focus();
  }
  function submitKeyDown() {
    alert("form submitted");
  }
  return (
    <div className="App">
      <Input
        type="text"
        onKeyDown={firstKeyDown}
        ref={firstNameRef}
        placeholder="Enter First Name"
      />
      <Input
        type="text"
        onKeyDown={lastKeyDown}
        ref={lastNameRef}
        placeholder="Enter First Name"
      />
      <button onKeyDown={submitKeyDown} ref={submitRef}>
        submit
      </button>
    </div>
  );
}

export default App;
