//Json

//Json Formate is almost identical to javascript object
//but the difference in is key must be string, written with double quotes

// {"name":"John"}           this is JSON

//{name:"John"}             this is javascript Object

//values must be one of the following data types
// string
// Number
// Object
// Array
// Boolean
// null

// json values cannot be one of the following data types:
//a function
//a date
//undefined

const a = '{ "name": "john", "age": 30, "city": "New York" }';
console.log(typeof a);
console.log(a);

//convert to javascript object

const obj = JSON.parse(a);
console.log(typeof obj);
console.log(obj);

//second parameter in json.parse()

const a1 =
  '{ "name": "john", "age": 30, "city": "New York", "birth": "2023-02-02" }';

const obj1 = JSON.parse(a1);
obj1.birth = new Date(obj1.birth).toDateString();
console.log("Birth", obj1.birth);

// convert object to json

const arr = ["John", "Peter", "Sally", "Jane"];

const myjson = JSON.stringify(arr);
console.log("This is json sting:", myjson);

//fetch from server
async function dataget() {
  const user = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .then((use) => {
      return use;
    });
  console.log("user", user);
}

sum2(3, 32, display2); 


dataget();


//passing a function as argument

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





