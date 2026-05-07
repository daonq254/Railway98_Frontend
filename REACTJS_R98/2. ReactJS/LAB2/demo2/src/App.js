import "./App.css";
import ComponentsBottom from "./Component/ComponentsBottom";
import ComponentsTop from "./Component/ComponentsTop";

function App() {
  // data
  let data1 = "Hello VTI";
  let data2 = 40;
  let data3 = {
    name: "VTI Academy",
    address: "Hanoi, Vietnam",
  };
  return (
    <div className="App">
      <ComponentsTop data1={data1} data2={data2} data3={data3} headingTop="---------COMPONENT TOP--------" />
      <ComponentsBottom headingBottom="---------COMPONENT BOTTOM--------" data1={data1} data2={data2} data3={data3} />
    </div>
  );
}

export default App;
