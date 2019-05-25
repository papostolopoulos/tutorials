//Require the http module to be able to send pages through the transfer protocol
const http = require("http");
const fs = require("fs");

console.log("I am here");

//create a server. mention what to display in the terminal from the request (req)
const server = http.createServer((req, res) => {
  console.log("Requested url:", req.url);
  console.log("Requested Method:", req.method);
  console.log("Requested headers:", req.headers);
  //   process.exit();

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
    req.on("end", () => {
      //Create a new constant where the Buffer constructor (native of node) will be
      //used to concatenate all the elements of the body (array). In essence, gather all
      //the data and concatenate them before we send a response header and a response body.
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      console.log(`parsedBody is the following:`, parsedBody);
      console.log(`See how the parsedBody reads message= - 
        That is because the input field had name attribute that we named "message"`);
      fs.writeFileSync("message.txt", message);
    });

    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
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
});

server.listen(3000);
