/*
This course explains the built in function constructors.
The built in function constructors are building objects (new keyword) that contain
primitive values. Therefore, if I say var j = new String("John");, if I call j
then I get a String object that contais the primitive "John". The variable j
though has inherited the prototype of the String contstructor and all of its
properties and methods.

 On the other hand, if I define a variable j = "John", then javascript understands
 that I am intending to create a variable that points to a primitive data type.
 Depending on the data type, the variable inherits the methods from the related function
 constructor.
*/


 var str = new String("Paraskevas");
console.log(str);

var num = new Number(5);
console.log(num);

String.prototype.hasLengthGreaterThan = function(someStr) {
  return this.length > someStr;
}

Number.prototype.isLargerThanZero = function() {
  return this > 0;
}
