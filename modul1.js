export default class Fruit {
  constructor(type) {
    this.type = type;
  }

  getType() {
    console.log(this.type);
    return this.type;
  }
}

export const sayHello = () => console.log("Hello");
