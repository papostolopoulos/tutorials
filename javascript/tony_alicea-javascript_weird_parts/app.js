console.log("WORKING");
var a = "Hello world"

function addNumbers (number1) {
  return function (number2) {
    return number1 + number2;
  }
}

function sayHi(language){
  if (language === "english") {
    console.log('english');
    return function(name) {
      return("Hello" + " " + name)
    }
  }
  else if (language === "spanish") {
    console.log('spanish');
    return function(name) {
      return("Hola" + " " + name)
    }
  }
}

var sayHiEn = sayHi('english');
var sayHiEs = sayHi('spanish');

console.log(sayHiEn("Rena"));
console.log(sayHiEs("Rena"));

var person = {
  firstName: "Paris",
  lastName: "Apostolopoulos",
  getFullName: function () {
    var fullName = this.firstName + " " + this.lastName;
    return fullName;
  }
}

var logName = function (lang1, lang2) {
  console.log("The name is: " + this.getFullName());
}

logName.bind(person);
