import React from "react";

function MainPage({ listData }) {
  return (
    <>
      <h3>blogList</h3>
      <hr />
      <ul>
        {listData.map((item, idx) => {
          return <li key={idx}>{item.title}</li>;
        })}
      </ul>
    </>
  );
}

export default MainPage;
