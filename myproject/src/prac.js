import React, { useState } from "react";
import "./assets/css/style.scss";
import ModalView from "./components/ModalView01";

function App() {
  let [viewData, setViewData] = useState([]);
  let [textData, setTextData] = useState("");
  let [selectedIdx, setSelectedIdx] = useState(null); // 선택된 아이템의 인덱스
  let [showModal, setShowModal] = useState(false); // 모달 표시 여부

  // 모달 열기
  function openModal(idx) {
    setSelectedIdx(idx);
    setShowModal(true);
  }

  // 모달 닫기
  function closeModal() {
    setShowModal(false);
  }

  // 입력 버튼 클릭 시
  function clickListener() {
    let copy = [...viewData];
    copy.push(textData);
    setViewData(copy);
    setTextData(""); // input value 초기화
  }

  // 입력값 변경 시
  function textDataChange(event) {
    setTextData(event.target.value);
  }

  return (
    <div>
      <div className="inpwrap">
        <label htmlFor="name">이름</label>
        <input
          type="text"
          id="name"
          onChange={textDataChange}
          value={textData}
          placeholder="입력하세요"
        />
        <button onClick={clickListener}>입력</button>
      </div>

      <ul className="menupan">
        {viewData.map((item, idx) => {
          return (
            <div key={idx}>
              <li onClick={() => openModal(idx)}>{item}</li>
            </div>
          );
        })}
      </ul>

      {/* 모달 표시 여부에 따라 ModalView 컴포넌트를 조건부 렌더링 */}
      {showModal && (
        <ModalView
          data={viewData[selectedIdx]} // 선택된 아이템의 데이터 전달
          onClose={closeModal} // 모달 닫기 함수 전달
        />
      )}
    </div>
  );
}

export default App;
