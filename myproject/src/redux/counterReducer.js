const initalState = {
  /* 초기값 */
  num: 100,
  title: "안녕하세요",
  content: "만나서 반갑습니다.",
};

const counterReducer = (state = initalState, action) => {
  if (action.type === "up") {
    return {
      ...state,
      num: state.num + action.payload,
    };
  }
  return state;
};
export default counterReducer;
