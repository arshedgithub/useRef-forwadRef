function App() {
  return (
    <div className="App">
      <input type="text" ref={fostNamdRef} placeholder="Enter First Name" />
      <input type="text" ref={lastNamdRef} placeholder="Enter First Name" />
      <input type="text" placeholder="Enter Last Name" />
      <button ref={submitRef}>submit</button>
    </div>
  );
}

export default App;
