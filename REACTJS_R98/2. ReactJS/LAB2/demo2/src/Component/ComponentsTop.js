// rcc
import React, { Component } from "react";

class ComponentsTop extends Component {
  // render(): hiển thị các thành phần của component ra giao diện người dùng
  render() {
    // Nhận lại dữ liệu từ App.js thông qua props
    // this.props  Lấy được tất cả các props được truyền từ component cha
    // let data1 = this.props.data1; // Lấy được giá trị của prop_data1 được truyền từ component cha App.js
    // let data2 = this.props.data2;
    // let headingTop = this.props.headingTop;
    // Destructuring: Cú pháp phân rã, giúp lấy ra các giá trị từ một đối tượng hoặc mảng một cách dễ dàng hơn
    let { data1, data2, headingTop,data3 } = this.props; // Lấy được giá trị của prop_data1, prop_data2 và prop_headingTop được truyền từ component cha App.js

    console.log("data1: ", data1);
    console.log("data2: ", data2);
    console.log("data3: ", data3);
    return (
      <>
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">{headingTop}</h3>
              </div>
              <div className="panel-body">
                <div className="row">
                  <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                    <input type="text" name="Input_Name" id="input" className="form-control" placeholder="Input something here" />
                  </div>

                  <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    <button type="button" className="btn btn-danger">
                      Sent Data
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  //
}

export default ComponentsTop;
