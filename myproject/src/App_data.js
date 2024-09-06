import React, { useEffect, useState } from "react";
import axios from "axios";
import "./assets/css/style.scss";

function App() {
  let [viewData, setViewData] = useState([]);
  function dataInsert() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10")
      .then(function (res) {
        // console.log(res.data);
        let inData = res.data;
        setViewData(inData);
      })
      .catch(function (error) {
        console.log("no data");
      });
  }

  // useEffect(function(){},[viewData])

  return (
    <div>
      <button onClick={dataInsert}>데이터입력</button>

      {viewData.map((item) => {
        return (
          <>
            <div>{item.title}</div>
          </>
        );
      })}
    </div>
  );
}

export default App;
