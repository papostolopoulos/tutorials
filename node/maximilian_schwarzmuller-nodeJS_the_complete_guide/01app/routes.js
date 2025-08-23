//The routes.js file contains the routing logic of node.js
const fs = require("fs");

const requestHandler = (req, res) => {
  //Request properties that are used for selecting the page formats that will render.
  // req.url displays the url path
  // req.method displays if the request sent is a GET or a POST or something else
  const url = req.url;
  const method = req.method;

  //Write response write (res.write). Sends back the text that will display on the web page
  if (url === "/") {
    res.write(`
    <html>
        <head>
            <title>Enter message</title>
        </head>
        <body>
            <h1>A form</h1>
            <form action="/message" method="POST">
                <input type="text" name="message">
                <button type="submit">Submit</button>
            </form>
        </body>
    </html>
  `);
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    //create a variable where the chunks of data will be saved.
    //That is the creation of a buffer that will help us work on the incoming data
    //before the server sends a response and before we redirect to a new page
    //For that, an event listener needs to be registered (req.on)
    const body = [];
    req.on("data", chunk => {
      console.log("A chunk to be pushed:", chunk);
      body.push(chunk);
    });

    //return the req.on("end") because we do not want the lines below the callback to
    // be executed.
    //So now we actually have our event listener with some method or function that will be
    //executed once we're done parsing the request
    return req.on("end", () => {
      //Create a new constant where the Buffer constructor (native of node) will be
      //used to concatenate all the elements of the body (array). In essence, gather all
      //the data and concatenate them before we send a response header and a response body.
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      console.log(`parsedBody is the following:`, parsedBody);
      console.log(`See how the parsedBody reads message= - 
        That is because the input field had name attribute that we named "message"`);

      //Writing the file asynchronously. If we wanted to write it synchronously, then
      //we would use fs.writeFileSync. But that would prevent the rest of the code to execute
      //In this case, the code inside the event loop (callback) willbe executed once we are done writting the file
      fs.writeFile("message.txt", message, err => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  //Write a response header (signifies the content type of the response)
  res.setHeader("Content-Type", "text/html");
  res.write(`
    <html>
        <head>
            <title>A test</title>
        </head>
        <body>
            <h1>Hello and welcome</h1>
            <p>This was created from the server.</p>
        </body>
    </html>
  `);
  res.end();
};

//module is a global object exposed by node. Therefore when we are exporting a value,
//it becomes available for all the other files that constitute our program
module.exports = requestHandler;
