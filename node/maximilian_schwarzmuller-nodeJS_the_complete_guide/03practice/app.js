const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const rootDir = require("./util/path.js");

const mainRoutes = require("./routes/main.js");
const userRoutes = require("./routes/users.js");

// app.use() for body parser and public path
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

//routes
app.use(mainRoutes);
app.use(userRoutes);

//404 route
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(3000);
