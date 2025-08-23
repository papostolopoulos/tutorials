//This file is for routes used by the users

const path = require("path");
const express = require("express");
const router = express.Router();
const rootDir = require("../util/path.js.js");

router.get("/", (req, res, next) => {
  console.log("In the '/' middleware");
  //An absolute path needs to be created. It should not start with "/" though because
  //"/" refers to our operating system. That is why we require the "path" module in order to
  //be able to use the absolute path
  //First parameter "__dirname" is a global name and refers to the absolute path of our computer.
  //__dirname is pointing to the routes folder so we have to edit the second param to point
  //to the correct folder instead
  //Second param is the folder where our file resides
  //Third param is the file name (shop.html)
  //   res.sendFile(path.join(__dirname, "../views/shop.html"));

  //Instead, we ended up using the rootDir constant which is matched with the path.js
  //The path.js has the logic that helps us define the path where the root directory is and where
  //we need to navigate after that.
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
