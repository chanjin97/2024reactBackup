import React, { useEffect, useState } from "react";
import "./assets/css/style02.scss";

import Myprops from "./components/Myprops02";

function App() {
  const [myData, setMyData] = useState(10);
  const product = [
    {
      title: "상품1",
      price: 1000,
      img: "1. MOKOKO/MOKOKO_03.png",
    },
    {
      title: "상품2",
      price: 2000,
      img: "4. NORABABA/NORABABA_03.png",
    },
  ];
  return (
    <>
      <div className="wrap">
        test
        <Myprops 작명={myData} 상품={product} />
      </div>
    </>
  );
}

export default App;
