var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}

// don't do this EVER! for demo purposes only!!!
john.__proto__ = person;

for (let key in john) {
  console.log(`${key}: ${john[key]}`);
}

for (let key in john) {
  john.hasOwnProperty(key) === false || console.log(`${key}: ${john[key]}`);
}

console.log(john.getFullName());

var jane = {
  address: "111 Main St.",
  getFormalFullName: function() {
      return this.lastname + ', ' + this.firstname;
  }
}

var jim = {
  getFirstName: function () {
    return this.firstname;
  }
}

_.extend(john, jane, jim);
