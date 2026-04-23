// var let đều sử dụng để khai báo biến
// Khi sử dụng từ khóa var để khai báo biến, bạn có thể khai báo lại biến đó trong cùng một phạm vi mà không gây ra lỗi.
// Điều này có nghĩa là bạn có thể sử dụng từ khóa var để khai báo lại một biến đã tồn tại, và giá trị của biến đó sẽ được cập nhật với giá trị mới mà bạn đã gán.
let myName = "daonq";
// let myName_ = "daonq";
console.log("1. " + myName); //daonq
myName = "daonq_update";

// Redeclare variable  ==> Khai báo lại
let my_Name = "daonq1"; //???
console.log("2. " + my_Name); //daonq1
