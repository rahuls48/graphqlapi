const { model, Schema } = require('mongoose')

const recipeSchema = new Schema({
    name: String,
    description: String,
    createdAt: String,
    instructions: String,
    ingredients: [String]   
});

module.exports = model('Recipe',recipeSchema);
