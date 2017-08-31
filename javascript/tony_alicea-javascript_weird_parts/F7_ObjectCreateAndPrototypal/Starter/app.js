//polyfill
if (!Object.create) {
  Object.create = function (o) {
    if (arguments.length > 1) {
      throw new Error('Object create implementation only accepts the first parameter');
    }
    function F() {}
    F.prototype = o;
    return new F();
  }
}


var person = {
  firstname: "Default",
  lastname: "Default",
  greet: function () {
    return 'Hi ' + this.firstname;
  }
}

var paraskevas = Object.create(person);
paraskevas.firstname = "Paraskevas";
paraskevas.lastname = "Apostolopoulos";

console.log(paraskevas.greet());

person.formalGreet = function() {
  return "Hello Mr " + this.lastname;
}

person.superFormalGreet = function () {
  return `Hello King ${this.lastname}`
}
