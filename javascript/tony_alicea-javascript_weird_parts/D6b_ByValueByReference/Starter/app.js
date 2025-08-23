//by value
var a = 3;
var b;
b = a;

console.log("a: ", a); //3
console.log("b: ", b); //3

a = 2;
console.log("a: ", a); //2
console.log("b: ", b); //3


//by reference (all objects - including functions)
var c = {greeting: "hi"}; 
var d;
d = c;

console.log(c); //{greeting: "hi"}
console.log(d); //{greeting: "hi"}

c.greeting = "Hello";

console.log(c); //{greeting: "hello"}
console.log(d); //{greeting: "hello"}

//by reference (even as parameters)
function changeGreeting(obj) {
    obj.greeting = "Hi there!";
}

changeGreeting(d);

console.log("line 34 for c:", c); 
console.log("line 35 for d:", d); 


//equals operator sets up new memory space
c = {greeting: "Howdy"};

console.log("line 41 for c:", c);
console.log("line 42 for d:", d);
