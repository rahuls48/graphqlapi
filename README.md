This is a GraphQL API built with Apollo Server, Node.js, and MongoDB. It provides CRUD functionality for recipes, including creating a recipe,
getting a recipe by ID, getting the most recent recipes, editing a recipe, and deleting a recipe.


Usage
Queries
  Get a recipe by ID
    query {
      recipe(ID: "RECIPE_ID") {
        id
        name
        description
        createdAt
        instructions
        ingredients
      }
    }
  Get the most recent recipes
    query {
      getRecipes(amount: 10) {
        id
        name
        description
        createdAt
        instructions
        ingredients
      }
    }
Mutations
  Create a new recipe 
    mutation {
      createRecipe(recipeInput: {
        name: "Recipe Name"
        description: "Recipe Description"
        instructions: "Recipe Instructions"
        ingredients: ["Ingredient 1", "Ingredient 2"]
      }) {
        id
        name
        description
        createdAt
        instructions
        ingredients
      }
      }
  Edit a recipe
    mutation {
      editRecipe(ID: "RECIPE_ID", recipeInput: {
        name: "New Recipe Name"
        description: "New Recipe Description"
        instructions: "New Recipe Instructions"
        ingredients: ["New Ingredient 1", "New Ingredient 2"]
      })
    }
  Delete a recipe
  mutation {
    deleteRecipe(ID: "RECIPE_ID")
    }
   

    
    
