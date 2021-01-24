const express = require("express");
const path = require("path");
const router = express.Router();
const rootDir = require("../util/path.js");

router.get("/", (req, res, next) => {
  console.log("In the '/' middleware");
  res.sendFile(path.join(rootDir, "views", "main.html"));
});

module.exports = router;
