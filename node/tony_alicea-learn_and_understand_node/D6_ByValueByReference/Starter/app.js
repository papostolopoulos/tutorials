// pass by value
var a = 1;
function change(b) {
  b = 2;
  console.log("Parameter is", b);
}

change(a);
console.log("A is", a);

//pass by reference
function changeObj(d) {
  d.prop1 = function () {  };
  d.prop2 = {};
}

var c = {};
changeObj(c);
console.log(c);
