// Destructuring  ==> Phá vỡ cấu trúc của một đối tượng hoặc một mảng để lấy ra các giá trị riêng lẻ
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var person = {
    name: "John",
    age: 30,
    address: "123 Main St",
};
// Lấy ra các thông tin name, age, adđress từ đối tượng person sau đó lưu vào các biến tương ứng
// let v_name = person.name;
// let v_age = person.age;
// let v_address = person.address;
// Destructuring
var v_name = person.name, v_age = person.age, v_address = person.address; // v_name = peson.name
console.log(v_name); // John
console.log(v_age); // 30
console.log(v_address); // 123 Main St
// Cần khai báo 1 đối tượng worker có các thuộc tính name, age, address giống như person và có thêm thuộc tính bổ sung rank
// var worker = {
//   name: "John",
//   age: 30,
//   address: "123 Main St",
//   rank: 10,
// };
var worker = __assign(__assign({}, person), { rank: 10 });
console.log(worker); // { name: 'John', age: 30, address: '123 Main St', rank: 10 }
