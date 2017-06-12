var greet1 = require('./greet1');
var greet2 = require('./greet2').greet;
var greet3 = require('./greet3');

greet1();
greet2();
greet3.greet();

greet3.greeting = "Hello again from 3";
var greet3b = require('./greet3');
greet3b.greet();

var Greet4 = require('./greet4');
var grtr = new Greet4();
grtr.greet();

var greet5 = require('./greet5');
greet5.greet();