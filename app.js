/* 
    
    Variable and Type

*/

//Variable Keyword

var a; //Decalaration of variable
a = 10; //initializing the variable

//another way to write

var b = 10; //number

let c = 2; //number

const Name = "Vipul"; // Cost variable cannot change value throughout the program
console.log(typeof Name); // string

let age = true; //boolean

var car;
console.log(typeof car); // Undefined Which mean we have not initialized the variable but by default it undefined.

document.getElementById("details").innerHTML = "My name is: " + Name;

const carinfo = { type: "BMW", model: "2023", color: "Red" }; //Object
console.log(typeof carinfo);

console.log(carinfo);

console.log(carinfo.color); //Red

document.getElementById("cartype").innerHTML = carinfo["type"];
document.getElementById("carmodel").innerHTML = carinfo["model"];
document.getElementById("carcol").innerHTML = carinfo["color"];

let temp = 100; //redeclaration not allowed  and cannot use before it declaration

// let temp=0;              //Show Error

console.log("temp2:", temp2);

var temp2 = 10; //redeclaration is allowed  and you can use before it declaration
var temp2 = 1;

//block scope

{
  let x = 2;
  console.log(x);
}
// console.log(x); // here x is not decelared

let arr = [1, 35, 33, 56];

console.log("arr", typeof arr);
