var express = require('express');
var app = express();
var mysql = require('mysql');

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);

	var con = mysql.createConnection({
		host: "localhost",
		user: "papostolopoulos",
		password: "cheetah1",
		database: "addressbook"
	});

	con.query('SELECT person.FirstName, person.LastName, addresses.address FROM person INNER JOIN personaddresses ON person.id = personaddresses.person_id INNER JOIN addresses ON addresses.id = personaddresses.address_id;', function(err, rows){
		if(err) throw err;
		console.log(rows);
	});

	next();
});



htmlController(app);

apiController(app);

app.listen(port, function(){
	console.log("listening on 3000 for J2")
});