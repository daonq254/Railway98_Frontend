"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// function sum(a: number, b: number) {
//   return a + b;
// }
// Cách 2: Sử dụng 1 biến tham chiếu tới 1 hàm
// let v_sum = function (a: number, b: number) {
//   return a + b;
// };
// Cách 3: Sử dụng arrow function (hàm mũi tên)
var v_sum_arrow = function (a, b) { return a + b; };
// Sử dụng hàm
// let v_result = sum(5, 10); // Kết quả: 15
// let v_result = v_sum(10, 20); // Kết quả: 30
var v_result = v_sum_arrow(10, 20); // Kết quả: 30
console.log("K\u1EBFt qu\u1EA3 c\u1EE7a sum(5, 10) l\u00E0: ".concat(v_result));
