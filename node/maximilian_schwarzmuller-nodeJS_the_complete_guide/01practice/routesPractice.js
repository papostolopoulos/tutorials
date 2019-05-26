const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  console.log(req.url);

  if (url === "/") {
    res.write(`
      <html>
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
      res.statusCode = 302;
      res.setHeader("Location", "/users");
      return res.end();
    });
  }

  if (url === "/users") {
    res.write(`
    <html>
    <h1>You are in!</h1>
    <p>Hello and welcome</p>
    </html>
    `);
  }
};

module.exports = requestHandler;
