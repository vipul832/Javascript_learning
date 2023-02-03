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

// pass by value

function passbyvalue(a, b) {
  //so in pass by value our actual value never change function creat new copy of argument then use in function
  let temp;
  temp = a;
  a = b;
  b = temp;

  console.log(`value of a and b inside function ${a} ${b}`);
}

let a1 = 10;
let b1 = 40;
console.log(`Value of a and b before pass ${a1} ${b1}`);

passbyvalue(a1, b1);

console.log(`Value of a and b after pass ${a1} ${b1}`);

// in pass by reference we use array and object

function passbyref(obj) {
  // as you se
  obj.a = obj.a * 2;
  obj.b = obj.b * 2;

  console.log(`Value a and b inside pass by reference: ${obj.a} and ${obj.b}`);
}

let pobj = {
  a: 12,
  b: 0,
};

console.log(`Value a and b before pass by reference: ${pobj.a} and ${pobj.b}`);

passbyref(pobj);

console.log(`Value a and b after pass by reference: ${pobj.a} and ${pobj.b}`);
