const express = require("express");
const { 
  getAllRecipes, 
  createRecipe,
  updateRecipe,
  patchRecipe,
  deleteRecipe
} = require("../controllers/recipeController");

const { 
  getAllRecipesTemp, 
  createRecipeTemp 
} = require("../controllers/recipeTempController");

const router = express.Router();

router.get("/", getAllRecipes);
router.post("/", createRecipe);
router.put("/:id", updateRecipe);
router.patch("/:id", patchRecipe);
router.delete("/:id", deleteRecipe);

// let recipes = [];

// // Get all recipes
// router.get("/", (req, res) => {
//   res.json(recipes);
// });

// router.post("/", (req, res) => {
//   const recipe = req.body;
//   recipe.id = Date.now().toString();
//   recipes.push(recipe);
//   res.status(201).json({ message: "Recipe added!", recipe });
// });

// //PUT - Update entire recipe
// router.put("/:id", (req, res) => {
//   const { id } = req.params;
//   const index = recipes.findIndex((r) => r.id === id);
//   if (index === -1) {
//     return res.status(404).json({ message: "Recipe not found!" });
//   }
//   recipes[index] = { ...req.body, id };
//   res.json({ message: "Recipe Updated!", recipe: recipes[index] });
// });

// //PATCH - Update part of the recipe
// // This is a partial update, so we only update the fields that are provided in the request body
// router.patch("/:id", (req, res) => {
//   const { id } = req.params;
//   const index = recipes.findIndex((r) => r.id === id);
//   if (index === -1) {
//     return res.status(404).json({ message: "Recipe not found!" });
//   }
//   recipes[index] = { ...recipes[index], ...req.body };

//   res.json({ message: "Recipe Patched!", recipe: recipes[index] });
// });

// router.delete("/:id", (req, res) => {
//   const { id } = req.params;
//   recipes = recipes.filter((r) => r.id !== id);
//   res.json({ message: "Recipe deleted!!" });
// });

module.exports = router;
