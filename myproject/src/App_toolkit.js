import React from "react";
import "./assets/css/tStyle.scss";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from "react-redux";

const counterStore = createSlice(
  /* object형태로 들어옴 */ {
    name: "countNum",
    initialState: { num: 100, title: "안녕하세요" },
    reducers: {
      up: (state, action) => {
        // state.num = state.num + action.payload
        state.num += action.payload;
      },
    },
  }
);

const store = configureStore({
  name: "countNum1",
  initialState: { num1: 300 },
  reducer: {
    counter: counterStore.reducer,
  },
});
function App() {
  return (
    <Provider store={store}>
      <div>
        test
        <h3>test</h3>
        <ChildOne />
      </div>
    </Provider>
  );
}

function ChildOne() {
  const dispatch = useDispatch();
  const num = useSelector((state) => state.counter.num);
  const title = useSelector((state) => state.counter.title);
  const num1 = useSelector((state) => state.counter.num1);
  return (
    <>
      <h3>
        ChildOne / {title} {num} / {num1}
      </h3>
      <button
        onClick={() => {
          dispatch(counterStore.actions.up(1));
        }}
      >
        클릭
      </button>
      <button
        onClick={() => {
          dispatch(counterStore.actions.up(100));
        }}
      >
        클릭two
      </button>
    </>
  );
}

export default App;
