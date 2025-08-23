// Declaration
functionStatementGreet();

function functionStatementGreet() {
  console.log("Hi");
}

// expression
var functionExpressionGreet = function () {
  console.log("hi");
}

functionExpressionGreet();

// function expression that is passed as a parameter
function log(a){
  a();
}

log(function() {
  console.log("Hello");
});
