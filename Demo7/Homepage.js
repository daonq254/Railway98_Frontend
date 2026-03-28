// function showMessage() {
//   console.log("DAONQ VTI");
//   console.log("DAONQ Academy");
//   console.log("DAONQ Education");
//   console.log("DAONQ Education");
// }
// In thông tin  ra màn hình console
console.log("DAONQ VTI");
console.log("VTI");

//  Khai báo biến trong javascript
var myName = "daonq"; // string
var myAge = 20; // number
var salary = 1500.5; // number
var gender = true; // boolean

console.log("My name is: " + myName);
console.log("My age is: " + myAge);
console.log("My salary is: " + salary);

// Kiểu dữ liệu object
var person1 = {
  // Thuộc tính
  id: 1,
  name: "daonq",
  age: 20,
  salary: 1500.5,
  //   Phương thức
  showInfo: function () {
    console.log("ID: " + this.id);
    console.log("Name: " + this.name);
    console.log("Age: " + this.age);
    console.log("Salary: " + this.salary);
  },
};

person1.showInfo();
var person2 = {
  id: 2,
  name: "daonq2",
  age: 40,
  salary: 2000,
};

console.log("Person 1, name: " + person1.name + ", age: " + person1.age);

// Khai báo hàm trong javascript
var number1 = 10;
var number2 = 20;
var sumRessult = number1 + number2;
console.log("Sum result: " + sumRessult);

function sum(a, b) {
  // Thực hiện phép cộng
  var result = a + b;
  return result;
}

var sumResult2 = sum(100, 260);
console.log("Sum result 2: " + sumResult2);

// Dữ liệu mảng trong javascript
var numbers = [10, 20, 30, 40, 50];
console.log("Number 1: " + numbers[0]);
console.log("Number 2: " + numbers[1]);
console.log("Number 3: " + numbers[2]);

// Mảng chứa tên các bạn học viên trong lớp
var nameFeVTI = ["ĐạoNQ", "Tùng", "Thắng", "Nam", "Xuân"];
console.log("nameFeVTI_0: ", nameFeVTI[0]); // nameFeVTI_0:  ĐạoNQ
console.log("nameFeVTI_1: ", nameFeVTI[1]); // nameFeVTI_1:  Tùng
console.log("nameFeVTI_2: ", nameFeVTI[2]); // nameFeVTI_2:  Thắng
console.log("nameFeVTI_3: ", nameFeVTI[3]); // nameFeVTI_3:  Nam
console.log("nameFeVTI_4: ", nameFeVTI[4]); // nameFeVTI_4:  Xuân

nameFeVTI.push("Hùng"); // Thêm phần tử vào cuối mảng
console.log(nameFeVTI[5]);

console.log("-----------------------------------------------");
console.log("------------------If-----------------------------");
var a = 100;
if (a > 50) {
  console.log("a lớn hơn 50");
}

var b = 2;
if (b == 30) {
  console.log("b bằng 30");
} else {
  console.log("b không bằng 30");
}

switch (b) {
  case 1:
    console.log("b bằng 1");
    break;
  case 2:
    console.log("b bằng 2");
    break;
  case 3:
    console.log("b bằng 3");
    break;
  default:
    console.log("b không bằng 1, 2, 3");
    break;
}
console.log("------------------Loop-----------------------------");
console.log("------------------for-----------------------------");

for (var i = 1; i <= 5; i++) {
  console.log("i: " + i);
}
// nameFeVTI
for (let index = 0; index < nameFeVTI.length; index++) {
  console.log("Name: " + nameFeVTI[index]);
}
console.log("------------------for each-----------------------------");

// var nameFeVTI = ["ĐạoNQ", "Tùng", "Thắng", "Nam", "Xuân"];
nameFeVTI.forEach((name) => {
  console.log("Name: " + name);
});

console.log("------------------Scope-----------------------------");
// glolbal scope - phạm vi toàn cục
// local scope - phạm vi cục bộ

var x = 100; // Biến toàn cục

console.log("x: " + x); // x: 100

function a_() {
  console.log("x in a function: " + x); // x: 100
  var y = 200; // Biến cục bộ
  console.log("y in a function: " + y); // y: 200
}

// console.log("y: " + y); // Lỗi: y is not defined

function b_() {
  console.log("x in a function: " + x); // x: 100
}

a_();
b_();
// Hàm xử lý sự kiện click vào button
function handleClickMe() {
  // console.log("Bạn đã click vào button: ");
  alert("Bạn đã click vào button!");
}

function handleOnMouseOver(params) {
  console.log("Bạn đã hover chuột vào đoạn văn bản: ");
}

// DOM
// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName()
console.log("------------------DOM-----------------------------");
var h3Content = document.getElementById("h3Id").innerHTML;
console.log("h3Content: " + h3Content);

var h5content = document.getElementsByClassName("h5Class")[0].innerHTML;
console.log("h5content: " + h5content);
