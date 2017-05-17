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
