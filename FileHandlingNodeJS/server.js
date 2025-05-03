const fs = require("fs");
const express = require("express");
const path = require("path");

const app = express();

// Middleware to parse JSON data
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
        <h1>Enter your Name and Message</h1>
        <form action="/submit" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required><br><br>
        <label for="message">Message:</label>
        <textarea id="message" name="message" required></textarea><br><br>
        <button type="submit">Submit</button>
        </form>
        `);
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  const username = req.body.name.trim();
  const message = req.body.message.trim();

  // Check if both username and message are provided
  if (!username || !message) {
    return res.status(400).send("Both username and message are required.");
  }

  const fileName = `${username}.txt`;
  const filePath = path.join(__dirname, fileName);

  fs.writeFile(filePath, message, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
      return res.status(500).send("Error writing to file.");
    }
    console.log(`Data written to ${fileName}`);

    res.send(
      `<h2>Thank you, ${username}! Your message has been saved in ${fileName}.</h2>`
    );
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
