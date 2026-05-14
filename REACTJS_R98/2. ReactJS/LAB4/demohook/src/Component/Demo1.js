import React, { useState } from "react";

function Demo1(props) {
  // Cần khai báo 1 state để lưu số lần click
  // Khai báo state: count =0
  // Hàm setCount để cập nhật giá trị count
  let [count1, setCount1] = useState(0);
  let [count2, setCount2] = useState(0);
  //   Khai báo hàm xử lý sự kiện click
  let handleClick = () => {
    // Cập nhật giá trị count = count + 1
    setCount1(count1 + 1);
  };

  //
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <button type="button" class="btn btn-danger" onClick={handleClick}>
              Click me!
            </button>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <h4>Bạn đã click {count1} lần</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Demo1;
