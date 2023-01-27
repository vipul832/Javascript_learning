// array iteration methods

//1 map()
//2 filter()
//3 reduce()         methods runs a function on each array elements to produce a single value.

const num1 = [1, 4, 43, 76, 23, 78];

//find double of each number

const num2 = num1.map(double); //function take 3 arguments value,index and array

function double(value) {
  return value * 2;
}

console.log(num2);

//find number less than 50 in array using filter()

const num3 = num1.filter(findless);

function findless(value, index, array) {
  return value < 50;
}

console.log(num3);

//find the sum of number of array

const num4 = num1.reduce((acc, curr) => {
  acc += curr;
  return acc;
}, 0);

console.log("sum :", num4);

const user = [
  { firstname: "akshay", lastname: "saini", age: 26 },
  { firstname: "donald", lastname: "trump", age: 75 },
  { firstname: "elon", lastname: "musk", age: 50 },
  { firstname: "deepika", lastname: "padukone", age: 26 },
];

const output = user.reduce(function (acc, curr) {
  if (curr.age < 30) {
    acc.push(curr.firstname);
  }
  return acc;
}, []);
console.log(output);

const totalage = user.reduce((sumage, item) => {
  return sumage + item.age;
}, 0);

console.log(totalage);
