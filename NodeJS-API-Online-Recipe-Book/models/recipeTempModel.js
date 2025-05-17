const mongoose = require("mongoose");

const recipeTempSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    ingredients: [String],
    steps: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("RecipeTemp", recipeTempSchema);