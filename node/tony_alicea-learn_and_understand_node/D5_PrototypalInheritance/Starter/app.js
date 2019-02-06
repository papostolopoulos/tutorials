// Your Javascript Code Goes Here

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

var paris = new Person("Paris", "Apostolopoulos");
var george = new Person("George", "Michos");

Person.prototype.greet = function() {
  console.log("Hello", this.firstName, this.lastName);
};
