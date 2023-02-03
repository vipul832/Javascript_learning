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
