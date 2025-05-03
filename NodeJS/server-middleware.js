const express = require("express");
const app = express();

function loggerMiddleware(req, res, next) {
  console.log("Request received at:", new Date());
  next();
}

app.use(loggerMiddleware);

app.get("/", (req, res) => {
  res.send("Welcome to SIMS hospital!!! Doctor is on the way!!");
});

app.listen(5001, () => {
  console.log("Server is listening on port 5001");
});
