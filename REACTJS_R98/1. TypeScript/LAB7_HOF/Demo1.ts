// Viết 1 chương trình tính toán
// Phép cộng
function sum(a: number, b: number): number {
  return a + b;
}

// Phép trừ
function minus(a: number, b: number) {
  return a - b;
}

// Phép nhân
function multiply(a: number, b: number) {
  return a * b;
}

// Phép chia
function divide(a: number, b: number) {
  if (b === 0) {
    throw new Error("Không thể chia cho 0");
  }

  return a / b;
}

// Demo
// console.log("Phép cộng: ", sum(5, 3)); // Output: 8
// console.log("Phép trừ: ", minus(5, 3)); // Output: 2
// Khai báo hàm calculate
// HOF
function calculate(a: number, b: number, f) {
  let resutl = f(a, b);
  return resutl;
}

// Demo sử dụng HOF
console.log("Phép cộng: ", calculate(10, 6, sum)); // Output: 16
console.log("Phép trừ: ", calculate(10, 15, minus));
console.log("Phép nhân: ", calculate(10, 6, multiply));
