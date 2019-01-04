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
