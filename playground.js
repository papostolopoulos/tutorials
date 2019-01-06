function Person(name, surname){
	this.name = name;
	this.surname = surname;
}

var mike = new Person("Mike", "Knight");

Person.prototype.sayHi = function() {
	return "Hello, I am " + this.name + " " + this.surname + "and I am happy to be here";
}

mike.gender = "male";

mike.stateGender = function() {
	return `I am ${this.name} and my gender is ${this.gender}`;
}

/*
class,
constructor,
methods(with any name),
getters and setters(to get and set the values of properties)
extends (to extend to another constructor and accomplish prototypal inheritance)
syntax in the above:
 class NewClass extends MotherClass (param1, param2, param3){
 	super(param1, param2) --> from the MotherClass
	this.param3 = param3;
}
super is the keyword that is used for defining the parameters that are being
inherited byy the MotherClass
static (method that is run only from the constructor level referring to the
instances)
*/

class Rectangle {
	constructor(width, height){
		this.width = width;
		this.height = height;
	}

	get Area(){
		return this.width * this.height;
	}

	set Area(area){

	}
}








class Car {
	constructor(make, model, year, color){
		this.make = make;
		this.model = model;
		this.year = year;
		this.color = color;
	}

	showMake(){
		return `This car is a ${this.make}`;
	}

	showAllInfo(){
		return `This car is a ${this.color} ${this.year} ${this.make} ${this.model}`;
	}
}
