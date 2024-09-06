import React from "react";
import { useSelector, useDispatch } from "react-redux";
import counterStore from "../store/counterSlice";

/* 3번 */
function ChildOne() {
  /* 4번 */
  const num = useSelector((state) => {
    return state.counter.num;
  });
  /* 5번 */
  const dispatch = useDispatch();
  return (
    <>
      <h1>test / {num}</h1>
      <button
        /* 6번 */
        onClick={() => {
          dispatch(counterStore.actions.up(1));
        }}
      >
        클릭
      </button>
    </>
  );
}
export default ChildOne;
