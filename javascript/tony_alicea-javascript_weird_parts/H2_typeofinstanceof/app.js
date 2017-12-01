var a = 3;
console.log('var a = 3 --> typeof a', typeof a);

var b = "Hello";
console.log('var b = "Hello" --> typeof b', typeof b);

var c = {};
console.log('var c = {} --> typeof c', typeof c);

var d = [];
console.log('var d = [] --> typeof d', typeof d); // weird!
console.log('var d = [] --> Array.isArray(d)', Array.isArray(d));
console.log('var d = [] --> Object.prototype.toString.call(d))', Object.prototype.toString.call(d)); // better!

function Person(name) {
    this.name = name;
}

var e = new Person('Jane');
console.log(typeof e);
console.log('var e = new Person("Jane") --> e instanceof Person', e instanceof Person);

console.log('typeof undefined', typeof undefined); // makes sense
console.log('typeof null' typeof null); // a bug since, like, forever...

var z = function() { };
console.log('var z = function() { } --> typeof z', typeof z);
