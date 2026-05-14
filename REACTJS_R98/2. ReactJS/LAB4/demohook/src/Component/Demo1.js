import React from "react";

function Demo1(props) {
  //
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <button type="button" class="btn btn-danger">
              Click me!
            </button>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <h4>Bạn đã click X lần</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Demo1;
