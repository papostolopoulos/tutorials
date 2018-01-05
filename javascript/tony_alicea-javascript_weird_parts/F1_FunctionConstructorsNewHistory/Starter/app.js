function Person(firstname, lastname) {
  console.log(this);
  this.firstname = firstname;
  this.lastname = lastname;
}


/*When the function Person is invoked then the this is pointing at the
window object.
When jack is invoked, then the "this" is pointing at the Person Object which is empty
(since the console.log happens before the properties firstname and lastname are defined).
The "new" keyword (operator) is creating a new empty object and the "this" variable is pointing to that
object*/
Person();
var jack = new Person("Jack", "Smith");
jack;
