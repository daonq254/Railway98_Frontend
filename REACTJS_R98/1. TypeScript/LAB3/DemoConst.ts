// let PI = "3.14";
// const
const PI = "3.14";
//
//
// PI = "3.15";

console.log("PI: " + PI); // PI: 3.15

// Sử dụng const với đối tượng
const person = {
  name: "Alice",
  age: 30,
  address: "123 Main St",
};

// Thay đổi
person.name = "Bob";
person.age = 31;

// person = {
//   name: "Alice",
//   age: 30,
//   address: "123 Main St",
// };

console.log(`Person: ${person.name} ${person.age} ${person.address}`);
