// Global scope
let myName = "John";
let myAge = "30";

//
console.log(`Global Scope: My name is ${myName} and I am ${myAge} years old.`);

function abc() {
  console.log(`Inside function abc: My name is ${myName} and I am ${myAge} years old.`);

  let myCity = "New York"; // function scope variable
  console.log(`Inside function abc: I live in ${myCity}.`);
}

abc();

//
// console.log(`myCity ${myCity}`); // Error: myCity is not defined

//
function x() {
  //
  //
  console.log("hello ");
  console.log("hello ");
  var x = 10;
  console.log(x);
  //   console.log(y); // undefined due to hoisting

  //   Hàm trong hàm
  function x1() {
    //
    console.log("hello x1");
    console.log(x);

    let y = 20;

    function x2() {
      console.log("hello x2");
      console.log(x);
      console.log(y);
    }
  }
  //
}
// Block Scope
if (true) {
  let z = 30;
}

// console.log(z);
