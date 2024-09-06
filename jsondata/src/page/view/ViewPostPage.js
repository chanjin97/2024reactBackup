import React from "react";
import { useParams } from "react-router-dom";

function ViewPostPage(props) {
  const { id } = useParams();

  const postId = parseInt(id);
  //   const post = listData?.[postId];
  //   console.log("num" + id);

  let myData = props.listData.find(function (x) {
    console.log("id" + postId, "listid" + x.id);
    return x.id == postId;
  });
  // console.log(myData);

  return (
    <>
      <h3>{myData.title}</h3>
      <hr />
      <p>{myData.body}</p>
    </>
  );
}

export default ViewPostPage;
