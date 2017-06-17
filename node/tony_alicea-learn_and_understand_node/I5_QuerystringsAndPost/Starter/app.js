var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;

var urlencodedParser = bodyParser.urlencoded({extended: false});
var jsonParser = bodyParser.json();

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	next();
});

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/person/:id', function(req, res) {
	console.log(req.query)
	res.render('person', { 
		ID: req.params.id,
		Qstr: req.query.qstr 
	});
});

app.post('/person', urlencodedParser, function(req, res) {
	res.render('thankyou', {
		REQ: req
	});
	console.log(req.body);
});

app.post('/personjson', jsonParser, function(req, res){
	res.send('Thank you for the JSON data!');
	console.log(req.body);
});


app.get('/api', function(req, res) {
	res.json({ firstname: 'John', lastname: 'Doe' });
});

app.listen(port, function(){
	console.log("listening on 3000 for I5");
});