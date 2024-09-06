import React, { useState } from "react";
import "./assets/css/style.css";

function App() {
  const [test, setTest] = useState("chanjin");
  function testChange(name) {
    // alert("test");
    setTest(name);
  }
  console.log("ok");
  return (
    <div>
      <h1>{test}</h1>
      <button
        className="btn info"
        onClick={() => {
          testChange("살핸");
        }}
      >
        클릭
      </button>
      <button
        className="btn primary"
        onClick={() => {
          testChange("냥냥");
        }}
      >
        클릭
      </button>
    </div>
  );
}

export default App;
