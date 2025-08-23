var http = require('http');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-type': 'text/html'});
    res.end('<h1>Hello world</h1>\n');
}).listen(1337, '127.0.0.1');