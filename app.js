class car {
  //It is a class name of car

  constructor(carName, carModel) {
    //constructor is used to initialized the class variable
    this.name = carName;
    this.model = carModel;
  }
  display() {
    //function / methods
    console.log(this.name + " " + this.model);
  }
}

let car1 = new car("BMW", 2019); //Here Car1 is a object of class car It will take all properties of any cars.
car1.display();

// document.getElementById("carinfo").innerHTML =
//   "Car Name:" + car1.name + " Car Model:" + car1.model;

class sportcar extends car {
  //So i inherit some properties of car for sportscar beacous every car has some basic properties
  constructor(name, topspeed, engin) {
    super(name); // calling parent variable.
    this.topspeed = topspeed;
    this.engin = engin;
  }
  show() {
    console.log(
      this.name +
        " has " +
        this.engin +
        " Engin" +
        " and it can go upto " +
        this.topspeed +
        " Top speed."
    );
  }
}

let sportcar1 = new sportcar("BMW", 215, "V8");
sportcar1.show();
