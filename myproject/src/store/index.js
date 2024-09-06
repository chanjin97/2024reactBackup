import { createStore } from "redux";
import counterReducer from "../redux/counterReducer";

const store = createStore(counterReducer);

export default store; /* 스토어 생성 먼저 1번*/
