// Lets create a server
const http = require("http");
const hostname = "localhost";
const port = 3000;
const server = http.createServer((req, res) => {
  // send response in json format
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify({
      message: "Hello World",
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      ip: req.connection.remoteAddress,
      port: req.connection.remotePort,
      headers: req.headers,
      method: req.method,
    })
  );
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
