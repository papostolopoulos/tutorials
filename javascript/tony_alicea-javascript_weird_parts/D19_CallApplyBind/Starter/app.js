var person = {
  firstName: "Paris",
  lastName: "Apostolopoulos",
  getFullName: function(){
    return this.firstName + " " + this.lastName;
  }
}

var logName = function(lang1, lang2) {
  console.log("Logged:", this.getFullName());
  console.log("Arguments:", lang1, lang2);
  console.log("------------------");
}

var logPersonName = logName.bind(person);

logPersonName('en', 'es');

logName.bind(person)('en', 'es');

logName.call(person, 'en', 'es');

logName.apply(person, ['en', 'es']);

(function(lang1, lang2) {
  console.log("Logged:", this.getFullName());
  console.log("Arguments:", lang1, lang2);
  console.log("------------------");
}).apply(person, ['en', 'es']);


var person2 = {
  firstName: "Alice",
  lastName: "Wonderland"
}

console.log(person.getFullName.apply(person2));
console.log(person.getFullName.call(person2));
console.log(person.getFullName.bind(person2)())

//--------------------------------------
//Function currying

function multiply(a, b) {
  return a * b;
}

var multipleByTwo = multiply.bind(this, 2);
console.log(multipleByTwo(3));

var multipleByThree = multiply.bind(this, 3);
console.log(multipleByThree(7));
