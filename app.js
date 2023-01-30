let car = {
  name: "Audi",
  model: "Q3",
  speed() {
    return "220 km\\h";
  },
  engine() {
    return "working";
  },
};

let sportcar = {
  name: "Audi",
  model: "RS 7",
  speed() {
    return "250 km\\h";
  },
  exhaust() {
    return "Loud Sound";
  },
};

// sportcar.__proto__ = car; //we are inherit the property from the car object. It not proper way to do.

// console.log(sportcar.engine());
// console.log(sportcar.speed());

//better  way to write is as below

let sportcar1 = Object.create(car); //__proto__ point to base prototype {}

console.log(sportcar1.engine());
