const http = require("http");
const routes = require("./routesPractice");

console.log("3000 is about to run");

const server = http.createServer(routes);

server.listen(3000);

/*
spin a server at 3000 
in the code handle two routes
/ and /users

return some greeting on "/"
return a list of dummy users in an ul list
add a form with a username input on the / page and submit with a POST request to /create-user 
upon button click

add a /create-user rpite amd parse the incoming data (username) and simply log it to the console
Then redirect to the "/" route or to /users
*/
