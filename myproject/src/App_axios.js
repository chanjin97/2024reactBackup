import React, { useEffect, useState } from "react";
import "./assets/css/tStyle.scss";
import axios from "axios";
import { getUser } from "./api/api";

function App() {
  const [userData, setUserData] = useState([]);

  /* useEffect 공부하기 중요함 */
  useEffect(() => {
    const callApi = async () => {
      try {
        const user = await getUser();
        console.log(user);
        setUserData(user.user);
      } catch (error) {
        console.log(error);
      }
    };
    callApi();
  }, []);

  console.log(userData);
  return (
    <div>
      {
        /* ?뜻은 userData가 있으면 실행하고 없으면 실행x */ userData?.map(
          function (item, idx) {
            return (
              <li key={idx}>
                {item.email} {item.name}
              </li>
            );
          }
        )
      }
    </div>
  );
}

export default App;
