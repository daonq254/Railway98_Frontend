import { Person } from "./Person";

var person1 = new Person(1, "daonq1", "HN");
// person1.id = 1;
// person1.name = "daonq1";
// person1.address = "HN";

var person2 = new Person(2, "daonq2", "HN");
// person2.id = 2;
// person2.name = "daonq2";
// person2.address = "HN";
// Templae String: `abc  ${tên biến}`
console.log(`Thông tin Person1: id=${person1.getId()}, name=${person1.getName()}, address=${person1.getAddress()}`);
console.log(`Thông tin Person2: id=${person2.getId()}, name=${person2.getName()}, address=${person2.getAddress()}`);

// person1.showInfo();
// person2.showInfo();

// Tạo các đối tượng Student
// Student 1
// Student 2
