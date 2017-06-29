function greet(sayHello) {
  return function(name) {
    console.log(sayHello, name);
  }
}
greet('Hi There you')("Chae");

var hiThere = greet('Hi there');
hiThere("Niko");
