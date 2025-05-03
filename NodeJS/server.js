const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  } else if (req.url === "/about") {
    res.end("Here is our short history");
  } else {
    res.end("Page not found");
  }
});

server.listen(5001, () => {
  console.log("Server is listening on port 5001");
});
