import "./assets/css/style.css";
import logo from "./logo.svg";

function App() {
  const myStyle = { display: "flex", backgroundColor: "red" };
  function view(name) {
    alert("경고");
    console.log("당신의 이름은 " + name);
  }

  function countNum() {
    return 100;
  }
  const yourname = "살핸";

  return (
    <div>
      <div style={myStyle}>
        <h1 className="logo">test</h1>
        <span>test</span>
      </div>
      <button className="btn info" onClick={view}>
        클릭
      </button>
      <button
        className="btn primary"
        conClick={() => {
          view("배찬진");
        }}
      >
        클릭
      </button>
      <button className="btn">클릭</button>
      {countNum()} / {yourname}
      <img src={logo} />
    </div>
  );
}

export default App;
