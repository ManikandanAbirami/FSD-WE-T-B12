const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.loginUser = (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "secret") {
    const token = jwt.sign(
      { username: "GUVI-WE-T-12" },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    return res.json({ token });
  }

  res.status(401).json({ message: "Invalid Credentials!!" });
};
