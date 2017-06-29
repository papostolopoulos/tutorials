//function statement (declaration)
function greet(name) {
  console.log("Hello", name);
}
greet("Paris");

//function expression
var greetFunc = (name) => {
  console.log("Hello", name);
};
greetFunc("Paris");

//Immediately invoked function expression
(function(name){
  console.log("Hello", name)
}("Paris"))



var greeting = function(name) {
  return "Hello " + name;
}("Paris");

console.log(greeting);
