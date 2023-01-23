//Functions

//Functions Statements  this also called as function Declaration

function name() {}

//Fucntion Expression

var c = function () {
  console.log("Function Expression");
};
c();

// anonymous Function     //a function with out name and can pass as a value.

// function ()
// {

// }

//named function expression

var a = function xyz() {
  console.log("named function expression");
};

a();

//First Class Function   // The abality to pass a function inside a function  and can return a function

function test(re) {
  re();
}

function resutl() {
  console.log("Result");
}

test(resutl);

//Arrow Function

var sum = () => 10 + 15;

var result = sum();
console.log(result);

//CallBack Function  are passed as an argument to another functions
//callBack Function can run after another function has finished.

function display2(total) {
  console.log("result:", total);
}

function sum2(num1, num2, display2) {
  let total = num1 + num2;
  display2(total);
}

sum2(3, 32, display2); //passing a function as argument
