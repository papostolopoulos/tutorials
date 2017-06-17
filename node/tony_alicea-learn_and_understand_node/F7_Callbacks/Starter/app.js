function greet(callback) {
    console.log('Hello');
    var data = {
        name: 'Paris Apostolopoulos'
    };

    callback(data);
}

greet(function(data) {
    console.log('The callback was invoked');
    console.log(data);
});

greet(function(data) {
    console.log('A different callback was invoked!');
    console.log(data.name);
});


function thirdCallback(someData){
    console.log("The callback was invoked for the third time");
    console.log(someData);
}

greet(thirdCallback);