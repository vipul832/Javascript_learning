// Conditionals

// If else

let age = 20;

function agecheck() {
  if (age > 18) {
    alert("You Can Vote");
  } else {
    alert("You Cannot Vote. Try Next year");
  }
}

// for switch

let animal = "Dog";

switch (animal) {
  case "Dog":
    console.log("It is a Dog.");
    break;
  case "Cat":
    console.log("It is a Cat.");
    break;
  default:
    console.log("It is Another Animal");
}

//for

for (let i = 0; i < 4; i++) {
  console.log(i);
}

console.log("ForIn Loop:");

//forin                     //use only when order is not important for that you can use for, forof  and Array.forEach()

const arr = [13, 234, 5, 657, 0];
let max = 0;

for (let x in arr) {
  if (arr[x] > max) {
    max = arr[x];
  }
}

console.log("Max number in loop:", max);

console.log("forEach()");
//forEach()

const arr2 = [];
arr.forEach(double);

function double(x) {
  x = x * 2;
  arr2.push(x);
}

console.log("arr2", arr2);

//forof

console.log("ForOf");

const carbrand = ["BMW", "Audi", "Honda"];

for (let x of carbrand) {
  console.log(x);
}

//while
console.log("While loop:");
let a = 5;

while (a > 0) {
  console.log(a);
  a--;
}

console.log("Do while loop:");
let test = 15;

do {
  console.log(test);
  test--;
} while (test > 10);
