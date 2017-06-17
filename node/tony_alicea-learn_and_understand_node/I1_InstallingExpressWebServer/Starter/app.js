var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
    res.send(`
    <html>
        <head>
            <title>I1 - Installing Express Web Server</title>
        </head>
        <body>
            <h1>This is the one</h1>
            <p>And this is the other</p>
        </body>
    </html>`);
});

app.get('/api', function(req, res){
    res.json({
        firstname: "Paraskevas",
        lastname: "Apostolopoulos"
    })
});

app.listen(port, function(){
    console.log(`Listening on ${port}`);
});