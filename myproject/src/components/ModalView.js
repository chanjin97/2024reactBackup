import React from "react";

function ModalView(props) {
  console.log(props);
  return (
    <div>
      <div className="modalWrap">
        <div className="modal">
          <button className="close" onClick={props.onclick}>
            닫기
          </button>

          <div className="modalBody">
            <h3>{props.viewListData[props.vNNum].title}</h3>
            <p>{props.viewListData[props.vNNum].content}</p>
          </div>
        </div>
      </div>
    </div>
  );
  // {(조건문)? true : false}
}

export default ModalView;
