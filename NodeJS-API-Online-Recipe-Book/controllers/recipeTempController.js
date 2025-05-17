const Recipe = require("../models/recipeModel");
const RecipeTemp = require("../models/recipeTempModel");

// GET all
exports.getAllRecipesTemp = async (req, res) => {
    const recipes = await RecipeTemp.find();
    res.json(recipes);
}

// POST
exports.createRecipeTemp = async (req, res) => {
    const newRecipe = new RecipeTemp(req.body);
    const saved = await newRecipe.save();
    res.status(201).json(saved);
}