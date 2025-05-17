const express = require("express");
const app = express();
const recipeRoutes = require("./routes/recipeRoutes");
const connectDB = require("./config/db");

connectDB();

//Middleware to parse JSON
app.use(express.json());

//use the routes
app.use("/api/recipes/mk", recipeRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on 
    http://localhost:${PORT}`);
});
