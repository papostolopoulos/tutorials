class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  greet() {
    return `"Hello, this is ${this.firstName} ${this.lastName}`
  }
}

var paris = new Person("Paraskevas", "Apostolopoulos");
