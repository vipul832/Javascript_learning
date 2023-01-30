class Person {
  name; //we use # in beginning to create private property
  constructor(name) {
    this.name = name;
  }
  Into() {
    console.log(`Hi! my name is ${this.name}`);
  }
}

const p1 = new Person("Raj");

p1.Into();

class Professor extends Person {
  // here i am inherit properties of person class
  teacher;

  constructor(name, teacher) {
    super(name);
    this.teacher = teacher;
  }

  Into() {
    console.log(
      `Hi! my Name is ${this.name} and I will be your ${this.teacher} professor.`
    );
  }

  grade() {
    console.log("I can give grade................");
  }
}

const prof1 = new Professor("Martin", "Maths");
prof1.Into();

class student extends Person {
  no_of_subject;
  constructor(name, nos) {
    super(name);
    this.no_of_subject = nos;
  }

  Into() {
    console.log(
      `Hi! my name is ${this.name} and i will study ${this.no_of_subject} Subject in College.`
    );
  }
}

const s1 = new student("Ram", 5);
s1.Into();
