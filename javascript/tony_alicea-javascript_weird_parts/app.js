console.log("WORKING");
var a = "Hello world";
var b = "My name is Rena";
var c = "My name is Paris";




function sayHi(str1, str2, donkey) {
  console.log(str1, str2);
  donkey();
}

sayHi(a, b, addition);
sayHi(a, c, subtraction);
sayHi(b, c, addition);


function addition() {
  console.log(5 + 2);
}


function subtraction() {
  console.log(5 - 2);
}

function sayHello (function addition() {
  console.log(5 + 2);
});




// console.log("I will say hello: " + a);
// console.log("I will say hello:", a);
// console.log(`I will say hello: ${a}`);
//
// function sayOne () {
//   return 1;
// }
//
// sayOne().toString();
//
// var myNewPromise = new Promise(function (resolve, reject) {
//
//
//   resolve("Hooray we did it");
//
//
//   reject("I want a cookie");
// });
//
// myNewPromise
// .then(function(res) {
//   console.log(res);
// })
// .catch(function(rej){
//   console.log(rej);
// });






// function addNumbers (number1) {
//   return function (number2) {
//     return number1 + number2;
//   }
// }
//
// function sayHi(language){
//   if (language === "english") {
//     console.log('english');
//     return function(name) {
//       return("Hello" + " " + name)
//     }
//   }
//   else if (language === "spanish") {
//     console.log('spanish');
//     return function(name) {
//       return("Hola" + " " + name)
//     }
//   }
// }
//
// var sayHiEn = sayHi('english');
// var sayHiEs = sayHi('spanish');
//
// console.log(sayHiEn("Rena"));
// console.log(sayHiEs("Rena"));
//
// var person = {
//   firstName: "Paris",
//   lastName: "Apostolopoulos",
//   getFullName: function () {
//     var fullName = this.firstName + " " + this.lastName;
//     return fullName;
//   }
// }
//
// var logName = function (lang1, lang2) {
//   console.log("The name is: " + this.getFullName());
// }
//
// logName.bind(person);
//
//
// function log(a) {
//   console.log(a);
// }
//
// log((function () {
//   console.log('hi');
// })())
