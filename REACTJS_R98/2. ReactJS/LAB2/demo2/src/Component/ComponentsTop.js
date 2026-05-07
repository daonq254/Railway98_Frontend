// rcc
import React, { Component } from "react";

class ComponentsTop extends Component {
  // render(): hiển thị các thành phần của component ra giao diện người dùng
  render() {
    //
    //
    return (
      <>
        <div class="row">
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div class="panel panel-primary">
              <div class="panel-heading">
                <h3 class="panel-title">Components_Top</h3>
              </div>
              <div class="panel-body">
                <div class="row">
                  <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                    <input type="text" name="Input_Name" id="input" className="form-control" placeholder="Input something here" />
                  </div>

                  <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    <button type="button" class="btn btn-danger">
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
