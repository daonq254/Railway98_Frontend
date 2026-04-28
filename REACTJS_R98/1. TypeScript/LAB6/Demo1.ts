// Cách 1: Khai báo hàm truyền thống
// import { number } from "./../LAB2/Person";
// function sum(a: number, b: number) {
//   return a + b;
// }

// Cách 2: Sử dụng 1 biến tham chiếu tới 1 hàm

// let v_sum = function (a: number, b: number) {
//   return a + b;
// };

// Cách 3: Sử dụng arrow function (hàm mũi tên)

// let v_sum_arrow = (a: number, b: number) => a + b;
let v_sum_arrow = (a: number, b: number) => {
  //
  //
  return a + b;
};
// Sử dụng hàm
// let v_result = sum(5, 10); // Kết quả: 15
// let v_result = v_sum(10, 20); // Kết quả: 30
let v_result = v_sum_arrow(10, 20); // Kết quả: 30

console.log(`Kết quả của sum(5, 10) là: ${v_result}`);
