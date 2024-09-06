import React, { useEffect, useState } from "react";
import { FaAirbnb, FaBeer, FaBitcoin } from "react-icons/fa";
import { Routes, Route, NavLink } from "react-router-dom";
import MainPage from "./page/main/MainPage";
import ViewPostPage from "./page/view/ViewPostPage";

import axios from "axios";
import "./assets/css/style.scss";

function App() {
  const mainMenu = [
    { name: "메인화면", url: "/" },
    { name: "회사소개", url: "#" },
    { name: "제품소개", url: "#" },
    { name: "온라인문의", url: "#" },
    { name: "커뮤니티", url: "/posts/1" },
  ];

  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function viewData() {
      try {
        await axios
          .get("https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10")
          .then((v) => {
            console.log(v.data);
            setUserData(v.data);
          })
          .catch((error) => {
            console.log(error);
          });

        setTimeout(() => {
          setLoading(false);
        }, 800);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    viewData();
  }, []); /* ,[]를 넣으면 한번만 없으면 여러번 계속 / 계~속 돈다 무한루프 */
  return (
    <>
      <div className="header">
        <div className="container">
          <h1>로고</h1>
          <nav>
            <ul>
              {mainMenu.map((item, idx) => {
                return (
                  <li key={idx}>
                    <NavLink to={item.url}>{item.name}</NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div>
            <ul>
              <li>
                <FaBitcoin />
              </li>
              <li>
                <FaAirbnb style={{ color: "blue", fontSize: "2em" }} />
              </li>
            </ul>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="loading">로딩중...</div>
      ) : (
        <Routes>
          <Route path="/" element={<MainPage listData={userData} />} />
          <Route
            path="/posts/:id"
            element={<ViewPostPage listData={userData} />}
          />
        </Routes>
      )}
    </>
  );
}

export default App;
