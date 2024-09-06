import React from "react";

function ModalView01(props) {
  const { data } = props;
  console.log();
  return (
    <div>
      <div className="modalWrap">
        <div className="modal">
          모달창
          <button className="close" onClick={props.onClose}>
            닫기
          </button>
          <div className="modalBody">
            <h3>{data.title}</h3>
            <p>{data.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
  // {(조건문)? true : false}
}

export default ModalView01;
