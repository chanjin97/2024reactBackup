import React, { useEffect, useState } from "react";
import "./assets/css/style.scss";

function App() {
  const [num, setNum] = useState(1);
  const [inpData, setInpData] = useState("");
  const [myData, setMyData] = useState("");

  console.log("자료변경");
  useEffect(
    () => {
      console.log("이펙트");
    },
    [myData] /*대괄호 넣으면 한번만 리로딩하게*/
  ); // 컴포넌트에 넣으면 실행해주는 것
  function inpChange(e) {
    /*값을 넣고싶으면 e를 넣으면된다 인자값을 넣으면된다*/
    console.log(e.target.value);
    setInpData(e.target.value);
  }

  function sendData() {
    setMyData(inpData);
  }
  return (
    <>
      {num} / {inpData}
      <div>
        <button
          onClick={() => {
            setNum(2);
          }}
        >
          클릭
        </button>

        <div>
          <input type="text" onChange={inpChange /*함수*/} value={inpData} />
          <button onClick={sendData}>자료전송</button>
          <br />
          자료전송내용 : {myData}
        </div>
      </div>
    </>
  );
}

export default App;
