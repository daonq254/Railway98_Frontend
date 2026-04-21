"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./Person");
var person1 = new Person_1.Person(1, "daonq1", "HN");
// person1.id = 1;
// person1.name = "daonq1";
// person1.address = "HN";
var person2 = new Person_1.Person(2, "daonq2", "HN");
// person2.id = 2;
// person2.name = "daonq2";
// person2.address = "HN";
// Templae String: `abc  ${tên biến}`
console.log("Th\u00F4ng tin Person1: id=".concat(person1.getId(), ", name=").concat(person1.getName(), ", address=").concat(person1.getAddress()));
console.log("Th\u00F4ng tin Person2: id=".concat(person2.getId(), ", name=").concat(person2.getName(), ", address=").concat(person2.getAddress()));
// person1.showInfo();
// person2.showInfo();
