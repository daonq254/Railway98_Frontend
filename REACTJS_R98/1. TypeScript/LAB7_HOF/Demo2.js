// Xây dựng 1 hàm có 1 tham số đầu vào, sau khi xử lý xong tăng giá trị của tham số đầu vào lên 5 đơn vị
function plus5(y) {
    return y + 5;
}
// 10 ==> 15, 20 ==> 25 , 25 ==> 30
// console.log(plus5(10));
// console.log(plus5(20));
// console.log(plus5(25));
function plus10(y) {
    return y + 10;
}
// 10 ==> 20, 20 ==> 30 , 25 ==> 35
// console.log(plus10(10));
// HOF
// x là tham số đầu vào, sử dụng để tăng giá trị
// x= 10
// x= 20
function plus(x) {
    //
    //
    return function (y) {
        return y + x;
    };
}
// Demo
// Viết hàm tăng 5 đơn vị
var plus_5 = plus(5);
// f(y) = y + 5
console.log("T\u0103ng 5 \u0111\u01A1n v\u1ECB: ".concat(plus_5(10)));
console.log("T\u0103ng 5 \u0111\u01A1n v\u1ECB: ".concat(plus_5(12)));
console.log("T\u0103ng 5 \u0111\u01A1n v\u1ECB: ".concat(plus_5(20)));
console.log("-----------------------------");
var plus_10 = plus(10);
// f(y) = y + 10
console.log("T\u0103ng 5 \u0111\u01A1n v\u1ECB: ".concat(plus_10(10)));
console.log("T\u0103ng 5 \u0111\u01A1n v\u1ECB: ".concat(plus_10(12)));
console.log("T\u0103ng 5 \u0111\u01A1n v\u1ECB: ".concat(plus_10(20)));
