const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to our home page");
});

app.get("/ ", (req, res) => {
  res.send("Here is our short history");
});

app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(5001, () => {
  console.log("Server is listening on port 5001");
});

//book
//contact
