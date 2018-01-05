function Person(firstname, lastname) {

    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    this.getFormalName = function () {
      return this.lastname + ", " + this.firstname;
    };
    console.log('This function is invoked.');

}

/*The "prototype" property is not the function's prototype.
The function's prototype is the ".__proto__" property. The "prototype" property
in the function is the prototype of any objects created when using the function
constructor.
When I am using the "new" keyword with a function then I am creating an empty object
but also a new "prototype" property that is empty
*/

Person.prototype.getFullName = function () {
  return this.firstname + " " + this.lastname;
};

var john = new Person('John', 'Doe');
console.log(john);

var jane = new Person('Jane', 'Doe');
console.log(jane);

john.getFullName();

Person.prototype.getFormalFullName = function() {
  return this.lastname + ', ' + this.firstname;
}

/*
When I am using the "new" keyword with a function then I am creating an empty object
but also a new "prototype" property that is empty

NOTE: we prefer to add the methods outside of the function constructor as:
"Person.prototype.getAddress = function(){ ... }"
In that way we are earning in memory space. If we would add the methods directly in the function
constructor then that means that a new method would have to be created for each object so this would
be redundant and would occupy a lot of memory space. k
*/
function OtherPerson(firstname, lastname) {
  console.log(this);
  this.firstname = firstname;
  this.lastname = lastname;

}

OtherPerson;
OtherPerson.prototype;
var jim = new OtherPerson("Jim", "Smith")
