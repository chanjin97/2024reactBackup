import React, { useState } from "react";
import "./assets/css/style.scss";
import ModalView from "./components/ModalView01";

function App() {
  let [viewData, setViewData] = useState([]);
  let [textData, setTextData] = useState("");
  let [mView, setmView] = useState(false);

  function modalView() {
    setmView(true);
  }
  function clickListener() {
    let copy = [...viewData];
    copy.push(textData);
    setViewData(copy);
    setTextData(""); // input value 제거
  }
  function textDataChange(event) {
    console.log(event.target.value);
    setTextData(event.target.value);
  }
  return (
    <div>
      {/* {viewData} */}
      <div className="inpwrap">
        <label htmlFor="name">이름</label>
        <input
          type="text"
          id="name"
          onChange={textDataChange}
          value={textData}
          placeholder="입력하세요"
        />
        {/* <input type="text" id="name" onChange={함수}/>
        <input type="text" id="name" onChange={()=>{함수()}}/>
        <input type="text" id="name" onChange={()=>{setTextData("변경할것")}}/> */}

        <button onClick={clickListener}>입력</button>
      </div>

      <ul className="menupan">
        {/* {viewData.map(function(){})} */}
        {viewData.map((item, idx) => {
          return (
            <div>
              <li
                onClick={() => {
                  modalView(idx);
                }}
              >
                {viewData[idx]}
              </li>
              {mView == true ? <ModalView /> : null}
            </div>
          );
        })}
      </ul>
    </div>
  );
}

// function Modal(props) {}
export default App;
