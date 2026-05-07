let numbers = [1, 5, 3, 11, 9];
import { number } from "./../LAB2/Person";
//  map(): sử dụng để tạo ra một mảng mới bằng cách áp dụng một hàm cho mỗi phần tử của mảng gốc

// let numbers_news: number[] = [];
// numbers.forEach((num) => {
//   let number_new = num + 3;
//   numbers_news.push(number_new);
// });

// console.log("numbers_news: ", numbers_news);

// Sử dụng map() để tạo ra một mảng mới bằng cách cộng thêm 3 vào mỗi phần tử của mảng numbers
let numbers_New = numbers.map(function (num) {
  let number_new = num + 3;
  return number_new;
});
console.log("numbers_news: ", numbers_New);
