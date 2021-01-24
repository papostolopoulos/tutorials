const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  console.log(req.url);

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head>
          <title>Come on in</title>
        </head>
        <h1>Come on it</h1>
        <p>Write down your user name</p>
        <form method="POST" action="/create-user">
            <input type = "text" name="username">
            <button type = "submit">Come in</button>
        </form>
      </html>
    `);
    return res.end();
  }

  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", chunk => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const username = parsedBody.slice(parsedBody.indexOf("=") + 1);
      console.log("The username param is:", username);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/users");
    return res.end();
  }

  if (url === "/users") {
    res.write(`
    <html>
      <head>
        <title>Users page</title>
      </head>
      <body>
        <h1>You are in!</h1>
        <p>Hello and welcome</p>
        <ul>
          <li>User1</li>
          <li>User2</li>
        </ul>
      </body>
    </html>
    `);
    return res.end();
  }

  res.write(`
    <html>
      <body>
        <head>
          <title>Error - Page not found</title>
        </head>
        <h1>Error! Sorry but the page you requested does not exist.</h1>
      </body>
    </html>
  `);
  res.end();
};

module.exports = requestHandler;
