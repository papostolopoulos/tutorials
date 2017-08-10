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
