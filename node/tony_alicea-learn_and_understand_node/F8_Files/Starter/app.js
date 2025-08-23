var fs = require('fs');

var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet);

var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data) {
    console.log(err);
    console.log(data); //I can display the "Hello world" because I have defined the encoding as the second parameter of the callback
});

console.log('Done');