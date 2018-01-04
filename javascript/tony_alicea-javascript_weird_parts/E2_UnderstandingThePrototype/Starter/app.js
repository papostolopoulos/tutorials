function Person(name, lastname, address){
  this.name = name;
  this.lastname = lastname;
  this.address = address;
  this.hello = function(){
    console.log(this);
    return `Hello, my name is ${this.name}`;
  }
}

var paris = new Person("Paraskevas", "Apostolopoulos", "823 Kansas Street");
