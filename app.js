class car {
  constructor(carName, carModel) {
    this.name = carName;
    this.model = carModel;
  }
  display() {
    console.log(this.name + " " + this.model);
  }
}

let car1 = new car("BMW", 2019);
car1.display();
