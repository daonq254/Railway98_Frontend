import "./App.css";

import React from "react";
// Functional Component
// Class Component
function App() {
  // logic
  // logic
  // return <div className="App">Hello VTI</div>;
  // createElement(tên thẻ, nội dung css, nội dung trong thẻ)
  // <div>
  // <h2>
  //   Hello Railway
  // </h2>
  // </div>
  // return React.createElement("div", null, React.createElement("h2", null, "Hello Railway"));
  // ==> JSX   học theo cách viết HTML
  // <React.Fragment>
  // Cách 2
  // let cssDiv = { color: "red", backgroundColor: "yellow", height: "200px", width: "200px", fontSize: "20px" };
  // Khai báo hàm xử lý sự kiện khi nhấn nút click here
  // Arrow function
  let handleClick = () => {
    alert("Hello VTI");
  };
  //
  return (
    <>
      <div className="App classDiv">
        <h2>Hello Railway 98</h2>

        <button onClick={handleClick}>Click here</button>
      </div>
    </>
  );
}

export default App;
