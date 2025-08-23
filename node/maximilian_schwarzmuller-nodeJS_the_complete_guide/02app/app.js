// Import express
const express = require("express");
const path = require("path");

//This is used to parse the body of the req through the body-parser add on.
const bodyParser = require("body-parser");

//use of the routes that are built in the admin.js file and the shop.js file
const adminRoutes = require("./routes/admin.js.js");
const shopRoutes = require("./routes/shop.js.js");

/*
The express package exports a function that we define as a constant. 
This function (app) will be used as the callback in when we create a server
since it is a valid request handler. This server does not handle any incoming requests
though. This is something we would have to build. The thing it does is that it sets up 
a way to handle incoming requests.
 */
const app = express();

//This is used to parse the body of the req through the body-parser add on.
//body-parser allows us to parse the .body of the req. We installed it through npm
//and we set a const with a requirement. The .urlencoded() method registers a middleware
//that calls next() in the end and automatically helps in parsing the .body.
//Quote from github with regards to {extended: true}: You have to explicitly set extended for bodyParser.urlencoded()
//since the default value is going to change in the next major version of body-parser.
app.use(bodyParser.urlencoded({ extended: true }));

/*In order to serve CSS to the html files, we need
a feature that serves files statically. Not handled by the express router or other middleware
but instead directly forwarded to the file system*/
app.use(express.static(path.join(__dirname, "public")));

//use of the routes that are built in the admin.js file and the shop.js file
app.use("/admin", adminRoutes);
app.use(shopRoutes);

//Used to send error pages (page not found/ 404)
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "/views/error.html"));
});

//create a server from the app object. The express middleware does it for us so we do not need
//to require http and then create the server
app.listen(3000);
