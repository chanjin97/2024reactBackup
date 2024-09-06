import React, { useState } from "react";
import "./assets/css/style.css";

function App() {
  // const num = 30;
  let [num, setNum] = useState(10);
  return (
    <div>
      <div className="wrap">
        부모 {num}
        <button
          onClick={() => {
            setNum(20);
          }}
        >
          숫자변경
        </button>
        <Child1 넘버={num} />
      </div>
    </div>
  );
}

function Child1(props) {
  console.log(props);
  return (
    <div>
      <div className="wrap">
        자식 {props.넘버}
        <Child2 제2의넘버={props.넘버} />
      </div>
    </div>
  );
}

// function Child2(pprrooppss) {
//   return (
//     <div>
//       <div className="wrap">자식2 {pprrooppss.제2의넘버}</div>
//     </div>
//   );
// }
export default App;
