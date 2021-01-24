const express = require("express");
const app = express();

app.use("/users", (req, res, next) => {
  console.log("Inside the app.use for the first .use()");
  res.send(
    `<h1>Hello and welcome to practice 2. This is the users section</h1>
    <a href="/">Go to the / page</a>`
  );
});

app.use("/", (req, res, next) => {
  console.log("Inside the app.use for the second .use()");
  res.send(`<h1>Hello and welcome to practice 2. This is the main section</h1>
    <a href="/users">Go to the /users page</a>`);
});

app.listen(3000);
