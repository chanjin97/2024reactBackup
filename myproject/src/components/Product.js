import React from "react";
import { useParams } from "react-router-dom";

function Product(props) {
  const { item } = useParams();

  let myData = props.vData./* 배열의 find */ find(function (x) {
    return x.id == item;
  });

  console.log(myData);

  return (
    <>
      <div className="subVisual">product</div>
      <div className="container subPro">
        <h3>{myData.title}</h3>
        <hr />
        <div className="content">
          <img src={`../image/${myData.img}`} alt="" />
          {myData.content}
        </div>
      </div>
    </>
  );
}

export default Product;
