const Recipe = require("../models/recipeModel");
const RecipeTemp = require("../models/recipeTempModel");

// GET all
exports.getAllRecipes = async (req, res) => {
    const recipes = await Recipe.find();
    res.json(recipes);
}

// POST
exports.createRecipe = async (req, res) => {
    const newRecipe = new Recipe(req.body);
    const saved = await newRecipe.save();
    res.status(201).json(saved);
}

// PUT - Update entire recipe
exports.updateRecipe = async (req, res) => {
    const updated = await Recipe.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    if (!updated) {
        return res.status(404).json({ message: "Recipe not found" });
    }
    res.json(updated);
}

// PATCH - Update part of the recipe
exports.patchRecipe = async (req, res) => {
    const updated = await Recipe.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    if (!updated) {
        return res.status(404).json({ message: "Recipe not found" });
    }
    res.json(updated);
}

// DELETE
exports.deleteRecipe = async (req, res) => {
    const deleted = await Recipe.findByIdAndDelete(req.params.id);
    if (!deleted) {
        return res.status(404).json({ message: "Recipe not found" });
    }
    res.json(deleted);
}