const { Console } = require("console");
const fs = require("fs");
const http = require("http");
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  res.setHeader("Conent-Type", "text/html");
  console.log(req.url);
  if (req.url == "/") {
    res.statusCode = 200;
    res.end("<h1>This is Chinmayi</h1> <p> This way lets rock the world </p>");
  } else if (req.url == "/about") {
    res.statusCode = 200;
    res.end("<h1>This is Chinmayi</h1> <p> This is the about of the page </p>");
  } else if (req.url == "/hello") {
    res.statusCode = 200;
    const data = fs.readFileSync("index.html");
    res.end(data.toString());

    // res.end("<h1>This is Chinmayi</h1> <p> This is the about of the page </p>");
  } else {
    // res.har();
    res.statusCode = 404;
    res.end("<h1>NOT FOUND</h1> <p> This is an error</p>");
  }
});

server.listen(port, () => {
  console.log("Server is listening on port ${port}");
});
