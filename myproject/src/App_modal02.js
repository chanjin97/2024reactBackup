import React, { useState } from "react";
import "./assets/css/style.css";
import ModalView from "./components/ModalView";

function App() {
  let [mView, setmView] = useState(false);
  let [vNum, setvNum] = useState(0);
  let viewList = [
    {
      title: "안녕~",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, eveniet.",
    },
    {
      title: "만나서 반갑구리",
      content:
        "Sequi quibusdam repudiandae possimus sunt excepturi quisquam exercitationem quos vel?",
    },
    {
      title: "홈페이지를 오픈!",
      content:
        "Enim repellendus consequuntur sapiente amet maiores ex, omnis inventore adipisci.",
    },
    {
      title: "모코코코코코코",
      content:
        "Asperiores voluptates officia, iusto sint fugit quidem nostrum blanditiis consequatur.",
    },
    {
      title: "오레하하하하하",
      content:
        "Repellat iure officiis accusamus voluptas impedit tempore dicta sapiente omnis.",
    },
  ];

  function modalView(idx) {
    setmView(true);
    setvNum(idx);
  }

  function modalClose() {
    setmView(false);
  }
  console.log("app");
  // {
  //   /* li*5>lorem10 */
  // }
  // <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, eveniet.</li>
  // <li>Sequi quibusdam repudiandae possimus sunt excepturi quisquam exercitationem quos vel?</li>
  // <li>Enim repellendus consequuntur sapiente amet maiores ex, omnis inventore adipisci.</li>
  // <li>Asperiores voluptates officia, iusto sint fugit quidem nostrum blanditiis consequatur.</li>
  // <li>Repellat iure officiis accusamus voluptas impedit tempore dicta sapiente omnis.</li>
  return (
    <div>
      <div>
        <ul className="viewList">
          {viewList.map((item, idx) => {
            return (
              <li
                onClick={() => {
                  modalView(idx);
                }}
              >
                {idx + 1}. {viewList[idx].title}
              </li>
            );
          })}
        </ul>
      </div>
      {mView == true ? (
        <ModalView onclick={modalClose} viewListData={viewList} vNNum={vNum} />
      ) : null}
    </div>

    // {(조건문)? true : false}
  );
}

function Modal(props) {}
export default App;
