const { gql } = require('apollo-server');

module.exports = gql `
type Recipe {
    id: ID!
    name: String
    description: String
    createdAt: String
    instructions: String
    ingredients: [String]
}

input RecipeInput {
    name: String
    description: String
    instructions: String
    ingredients: [String]
}

type Query {
    recipe(ID: ID!): Recipe!
    getRecipes(amount: Int): [Recipe]
}

type Mutation {
    createRecipe(recipeInput: RecipeInput): Recipe!
    deleteRecipe(ID: ID!): Boolean
    editRecipe(ID: ID!, recipeInput: RecipeInput): Boolean
}

`;