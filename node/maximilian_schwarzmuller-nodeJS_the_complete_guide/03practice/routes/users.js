const express = require("express");
const path = require("path");
const router = express.Router();
const rootDir = require("../util/path.js");

router.get("/users", (req, res, next) => {
  console.log("In the '/users' middleware");
  res.sendFile(path.join(rootDir, "views", "users.html"));
});

module.exports = router;
