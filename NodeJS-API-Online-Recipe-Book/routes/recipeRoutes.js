const express = require("express");
const router = express.Router();

let recipes = [];

// Get all recipes
router.get("/", (req, res) => {
  res.json(recipes);
});

router.post("/", (req, res) => {
  const recipe = req.body;
  recipe.id = Date.now().toString();
  recipes.push(recipe);
  res.status(201).json({ message: "Recipe added!", recipe });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const index = recipes.findIndex((r) => r.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "Recipe not found!" });
  }
  recipes[index] = { ...req.body, id };
  res.json({ message: "Recipe Updated!", recipe: recipes[index] });
});

module.exports = router;
