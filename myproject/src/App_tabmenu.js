import React, { useState } from "react";
import "./assets/css/style.css";

function App() {
  const [num, setNum] = useState(0);
  const [data, setData] = useState([
    "1. Lorem ipsum dolor sit amet consectetur adipisicing elit. In, corrupti.",
    "2. Lorem ipsum dolor sit amet consectetur adipisicing elit. In, corrupti.",
    "3. Lorem ipsum dolor sit amet consectetur adipisicing elit. In, corrupti.",
    "4. Lorem ipsum dolor sit amet consectetur adipisicing elit. In, corrupti.",
    "5. Lorem ipsum dolor sit amet consectetur adipisicing elit. In, corrupti.",
    "6. Lorem ipsum dolor sit amet consectetur adipisicing elit. In, corrupti.",
  ]);
  return (
    <div>
      <h2>tab menu를 제작</h2>
      {/* {data[0]} */}

      <ul className="menu">
        {data.map((epdlxj, tntwk) => {
          return (
            <div>
              <li
                className={`${tntwk == num ? "active" : ""}`}
                onClick={() => {
                  setNum(tntwk);
                }}
              >
                tab{tntwk + 1}
              </li>
            </div>
          );
        })}
        {/* {data.map((data, idx) => {
          return (
            <>
              <li
                className={`${idx == num ? "active" : ""}`}
                onClick={() => {
                  setNum(idx);
                }}
              >
                tab{idx + 1}
              </li>
            </>
          );
        })} */}

        {/* {data.map((item, idx) => {
          return (
            <>
              <li
                className={`test  ${idx == num ? "active" : ""}`}
                onClick={() => {
                  setNum(idx);
                }}
              >
                tab{idx}
              </li>
            </>
          );
        })} */}

        {/* for문 이다 이말이야 */}
        {/* {data.map((item, idx) => {
          return (
            <div>
              <li
                className={`btn primary ${idx == num ? "active" : null}`}
                onClick={() => {
                  setNum(idx);
                }}
              >
                tab{idx + 1}
              </li>
            </div>
          );
        })} */}
      </ul>
      <div>{data[num]}</div>
    </div>
  );
}

export default App;
