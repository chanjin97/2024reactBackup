/* counterStore가 들어와야함*/

/* 7번 */
import { createSlice } from "@reduxjs/toolkit";

/* 2번 */
const counterStore = createSlice({
  name: "counter",
  initialState: { num: 100 },
  reducers: {
    up: (state, action) => {
      state.num = state.num + action.payload;
    },
  },
});

export default counterStore;
