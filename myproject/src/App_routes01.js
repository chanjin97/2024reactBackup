import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "./assets/css/style.scss";

function App() {
  return (
    <>
      <div className="container">
        <h1>로고</h1>
        <ul className="menu">
          {/* <li>
          <a href="/">home</a>
        </li> a링크를 넣으면 새로고침이 된다.*/}
          <li>
            <NavLink to="/">home</NavLink>
          </li>
          <li>
            <NavLink to="/company">company</NavLink>
          </li>
          <li>
            <NavLink to="/product">product</NavLink>
          </li>
          <li>
            <NavLink to="/community">community</NavLink>
          </li>
        </ul>
      </div>

      <div className="section">
        <Routes>
          <Route path="/" element={<div>메인</div>} />
          <Route path="/company" element={<div>회사소개</div>} />
          <Route path="/product" element={<div>제품소개</div>} />
          <Route path="/community" element={<div>게시판</div>} />
        </Routes>
      </div>
      <div className="footer">
        <div>testtesttesttesttesttesttest</div>
      </div>
    </>
  );
}

export default App;
