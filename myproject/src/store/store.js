/* 8번 */
import { configureStore } from "@reduxjs/toolkit";

import counterStore from "./counterSlice";

/* 2번 counterSlice.js로 넘어감 */

/* 1번 */
const store = configureStore({
  reducer: {
    counter: counterStore.reducer,
  },
});

export default store;
