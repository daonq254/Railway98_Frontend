// rest parameters
function hello() {
    var studentNames = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        studentNames[_i] = arguments[_i];
    }
    // studentNames là mảng
    console.log("hello + " + studentNames);
}
hello("Nam", "Yen");
hello("Đức", "Huy", "Hùng");
hello("Mai", "Lan", "Chi", "Hương");
