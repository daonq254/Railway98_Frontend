"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    // contructor: hàm khởi tạo, được gọi khi tạo đối tượng từ class
    function Person(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    //   Có thể tạo thêm các method (hàm) trong class
    Person.prototype.showInfo = function () {
        console.log("Th\u00F4ng tin Person: id=".concat(this.id, ", name=").concat(this.name, ", address=").concat(this.address));
    };
    // Khai báo các hàm getter và setter để truy cập và thay đổi giá trị của thuộc tínhs
    Person.prototype.getId = function () {
        return this.id;
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getAddress = function () {
        return this.address;
    };
    Person.prototype.setId = function (id) {
        this.id = id;
    };
    Person.prototype.setName = function (value) {
        this.name = value;
    };
    Person.prototype.setAddress = function (value) {
        this.address = value;
    };
    return Person;
}());
exports.Person = Person;
