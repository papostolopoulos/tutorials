//Get the parent directory with a helper function

const path = require("path");

module.exports = path.dirname(process.mainModule.filename);
//this gives us the name to the path and the file name that our application is running.
