var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://papostolopoulos:cheetah1@ds127802.mlab.com:27802/adress_book')

var Schema = mongoose.Schema;

var personSchema = new Schema({
	firstname: String,
	lastname: String,
	address: String
});

var Person = mongoose.model('Person', personSchema);

var paris = Person({
	firstname: "Paris",
	lastname: "Apostolopoulos",
	address: "823 Kansas Street"
});

//save the user
paris.save(function(err){
	if(err) throw err;

	console.log("person saved");
});

var jane = Person({
	firstname: "Jane",
	lastname: "Doe",
	address: "111 Main Street"
});

//save the user
jane.save(function(err){
	if(err) throw err;

	console.log('person saved');
})

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);

	//get all the users
	Person.find({}, function(err, users){
		if(err) throw err;

		//object of all the users
		console.log(users);
	});

	next();
});

htmlController(app);

apiController(app);

app.listen(port, function(){
	console.log("listening on port 3000 for J4");
});