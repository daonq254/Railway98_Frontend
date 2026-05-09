import "./App.css";
import ComponentsBottom from "./Component/ComponentsBottom";
import ComponentsTop from "./Component/ComponentsTop";

// function App() {
//   // data
//   let data1 = "Hello VTI";
//   let data2 = 40;
//   let data3 = {
//     name: "VTI Academy",
//     address: "Hanoi, Vietnam",
//   };

//   // Hàm callback để nhận dữ liệu từ Top component
//   let getDataFromTop = (data) => {
//     console.log("getDataFromTop APP");
//     console.log("Data received from ComponentsTop: ", data);
//   };
//   //
//   return (
//     <div className="App">
//       <ComponentsTop getDataFromTop={getDataFromTop} data1={data1} data2={data2} data3={data3} headingTop="---------COMPONENT TOP--------" />
//       <ComponentsBottom headingBottom="---------COMPONENT BOTTOM--------" data1={data1} data2={data2} data3={data3} />
//     </div>
//   );
// }

// export default App;
import React, { Component } from "react";

class App extends Component {
  //
  constructor(props) {
    super(props);
    this.state = {
      dataApp: "",
    };
  }

  //
  data1 = "Hello VTI";
  data2 = 40;
  data3 = {
    name: "VTI Academy",
    address: "Hanoi, Vietnam",
  };

  // Hàm callback để nhận dữ liệu từ Top component
  getDataFromTop = (data) => {
    console.log("getDataFromTop APP");
    console.log("Data received from ComponentsTop: ", data);
    this.setState({
      dataApp: data,
    });
  };
  //
  render() {
    return (
      <div className="App">
        <ComponentsTop
          getDataFromTop={this.getDataFromTop}
          data1={this.data1}
          data2={this.data2}
          data3={this.data3}
          headingTop="---------COMPONENT TOP--------"
        />
        <ComponentsBottom dataApp={this.state.dataApp} headingBottom="---------COMPONENT BOTTOM--------" data1={this.data1} data2={this.data2} data3={this.data3} />
      </div>
    );
  }
}

export default App;
