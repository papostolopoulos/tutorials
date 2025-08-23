//Require the http module to be able to send pages through the transfer protocol
const http = require("http");
const routes = require("./routes.js");

console.log("I am here");

//create a server. mention what to execute from the routes.js file and for the incoming requests
const server = http.createServer(routes);

server.listen(3000);
