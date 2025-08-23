var Emitter = require('events');
var eventConfig = require('./config').events;
var emtr = new Emitter();

emtr.on(eventConfig.Greet, function(){
    console.log("Somewhere, someone said hello");
});

emtr.on(eventConfig.Greet, function(){
    console.log("A greeting occured");
});

console.log('Hello');
emtr.emit(eventConfig.Greet);
