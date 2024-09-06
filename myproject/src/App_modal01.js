import React, { useState } from "react";
import "./assets/css/style.css";

function App() {
  let [modalView, setmodalView] = useState(false);
  function moodalView() {
    setmodalView(true);
  }
  function modalClose() {
    setmodalView(false);
  }
  return (
    <div>
      <div>
        <button className="btn primary" onClick={moodalView}>
          {/* onClick={(setmodalView(true))} */}
          모달창 열기
        </button>
      </div>
      {modalView == true ? <Modal onclick={modalClose} /> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div>
      <div className="modalWrap">
        <div className="modal">
          모달창
          <button onClick={props.onclick}>닫기</button>
        </div>
      </div>
    </div>
  );
}
export default App;
