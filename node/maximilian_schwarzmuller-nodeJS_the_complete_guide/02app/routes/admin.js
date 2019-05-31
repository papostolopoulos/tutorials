//This file is for routes reached by the admin

const path = require("path");
const express = require("express");
const router = express.Router();
const rootDir = require("../util/path.js.js");

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  console.log("In the '/add-product' middleware");
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  console.log("in the '/product' middleware");
  //By definition, req does not have the ability to parse the .body property. So we need to add
  //a parser. That is why we have app.use(bodyParser.urlencoded({ extended: true }));
  //in the app.js file, in order to be able to parse the .body
  console.log("Request body is:", req.body);
  res.redirect("/");
});

module.exports = router;
