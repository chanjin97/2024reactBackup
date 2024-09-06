import React from "react";
import { useParams } from "react-router-dom";

function ViewPostPage_선생님(props) {
  const { id } = useParams();

  const postId = parseInt(id);

  let myData = props.listData.find(function (x) {
    console.log("id" + postId, "listid " + x.id);
    return x.id == postId;
  });
  //   console.log(myData);

  return (
    <div>
      <h3>{myData.title}</h3>
      <hr />
      <p>{myData.body}</p>
    </div>
  );
}

export default ViewPostPage_선생님;
