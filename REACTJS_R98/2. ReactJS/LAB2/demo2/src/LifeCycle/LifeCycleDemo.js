import React, { Component } from "react";

class LifeCycleDemo extends Component {
  // hàm constructor()
  constructor(props) {
    super(props);
    console.log("Gọi hàm constructor()");
    this.state = {
      message: "Hello VTI",
    };
    // Call API để lấy dữ liệu
  }
  // Khai báo hàm handleChangeState để thay đổi state

  handleChangeState = () => {
    this.setState({
      message: "Hello Railway 98",
    });
  };
  // hàm render()
  render() {
    //
    console.log("Gọi hàm render()");
    return (
      <div>
        <h3>{this.state.message}</h3>
        <button onClick={this.handleChangeState}>Change State</button>
      </div>
    );
  }
  //
  componentDidUpdate() {
    console.log("Gọi hàm componentDidUpdate()");
  }

  // hàm componentDidMount()
  componentDidMount() {
    console.log("Gọi hàm componentDidMount()");
    // this.state = {
    //     data: "Hello VTI",
    //   };
    // Call API để lấy dữ liệu
  }

  componentWillUnmount() {
    console.log("Gọi hàm componentWillUnmount()");
  }
}

export default LifeCycleDemo;
