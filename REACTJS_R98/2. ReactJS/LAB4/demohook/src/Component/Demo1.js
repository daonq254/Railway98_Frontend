import React, { useEffect, useState } from "react";

function Demo1(props) {
  // Cần khai báo 1 state để lưu số lần click
  // Khai báo state: count =0
  // Hàm setCount để cập nhật giá trị count
  let [count1, setCount1] = useState(0);
  let [count2, setCount2] = useState(0);
  //   Khai báo hàm xử lý sự kiện click
  let handleClick1 = () => {
    // Cập nhật giá trị count = count + 1
    setCount1(count1 + 1);
  };

  let handleClick2 = () => {
    // Cập nhật giá trị count = count + 1
    setCount2(count2 + 1);
  };

  // useEffect()
  // TH1
  // useEffect(() => {
  //   console.log("useEffect 1 !!!!");
  // });

  // TH2
  // useEffect(() => {
  //   console.log("useEffect 1 !!!!");
  // },[]);

  //
  // TH3
  // useEffect(() => {
  //   console.log("useEffect 1 !!!!");
  // }, [count1, count2]);

  // useEffect(() => {
  //   console.log("useEffect 2 !!!!");
  // }, [count2]);

  useEffect(() => {
    return () => {
      console.log("useEffect 1 .... !!!!");
    };
  },);

  return (
    <>
      <div className="container">
        {/* Count1 */}
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <button type="button" className="btn btn-danger" onClick={handleClick1}>
              Click Count1!
            </button>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <h4>Bạn đã click Count1 {count1} lần</h4>
          </div>
        </div>

        {/* Count2 */}

        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <button type="button" className="btn btn-danger" onClick={handleClick2}>
              Click Count2!
            </button>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <h4>Bạn đã click Count2 {count2} lần</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Demo1;
